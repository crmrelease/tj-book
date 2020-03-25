const express = require('express');
const router = express.Router()
const user =require('../models/user')
const cors = require('cors');
const request = require('request')


process.env.COOKIE_SECRET
require('dotenv').config();
router.use(cors());

router.post('/bookInfo',(req,res)=>{
    const enc = encodeURI(req.body.query)
    request(`${process.env.API_URL}key=${process.env.API_KEY}&query=${enc}&maxResults=20`,(error,response,body)=>{
        if(error) res.json({success:false,error})
        res.json({success:true, body})
    })
})

router.post('/bookInfoRandom',(req,res)=>{
    console.log(req.body)
    let enc =[]
    req.body.map((key)=>{
                 enc.push(key)
             })
    const run = function(){
        return new Promise(function(resolve,reject){
            enc.map((key)=>{
                request(`${process.env.API_URL}key=${process.env.API_KEY}&queryType=productNumber&query=${key}`,async (error,response,body)=>{
                    resolve(body)
                }) 
            })
        }
        )
}

run().then(function(resolvedData){
    res.json({success:true,resolvedData})
})

})
// router.post('/bookInfoRandom',(req,res)=>{
//     console.log(req.body)
//     let enc =[]
//     index.map((key)=>{
//         key_convert=encodeURI(key)
//         enc.push(key_convert)
//     })
//     let result_info=[]
//     enc.map((key)=>
//     request(`${process.env.API_URL}key=${process.env.API_KEY}&query=${key}`,(error,response,body)=>{
//         if(error) res.json({success:false,error})
//         result_info.push(body)
//     }))
//     res.json({success:true, result_info})
// })


router.post('/bookInfoDetail',(req,res)=>{
    productNumber = req.body.bookId
    request(`${process.env.API_URL}key=${process.env.API_KEY}&queryType=productNumber&query=${productNumber}`,(error,response,body)=>{
        if(error) res.json({success:false,error})
        res.json({success:true, body})
    })
})

module.exports = router;