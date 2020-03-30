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
    request(`${process.env.API_URL}key=${process.env.API_KEY}&query=${enc}&maxResults=20&sort=salesPoint`,(error,response,body)=>{
        if(error) res.json({success:false,error})
        res.json({success:true, body})
    })
})

router.post('/bookInfoRandom',(req,res)=>{
    let enc =[]
    req.body.map((key)=>{
                 enc.push(key)
             })
    console.log(enc)
    let result =[]
    enc.map((key)=>{
        request(`${process.env.API_URL}key=${process.env.API_KEY}&queryType=productNumber&query=${key}`,(error,response,body)=>{
                    result.push(body)
                    console.log(body)
                    if(result.length==enc.length){
                        res.status(200).json({success:true,result})
                    }
                }) 
            })
    
})

router.post('/bookInfoDetail',(req,res)=>{
    productNumber = req.body.bookId
    request(`${process.env.API_URL}key=${process.env.API_KEY}&queryType=productNumber&query=${productNumber}`,(error,response,body)=>{
        if(error) res.json({success:false,error})
        res.json({success:true, body})
    })
})

router.post('/findbookinfo',(req,res)=>{
    const searchContent = encodeURI(req.body.searchContent)
    const searchCategory = encodeURI(req.body.searchCategory)
    request(`${process.env.API_URL}key=${process.env.API_KEY}&queryType=${searchCategory}&query=${searchContent}&maxResults=50`,(error,response,body)=>{
        if(error) res.json({success:false,error})
        res.json({success:true, body})
    })
})


module.exports = router;