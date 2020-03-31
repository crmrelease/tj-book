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
    console.log(req.body)
    req.body.map((key)=>{
        if(key.grade){enc.push(key.bookId)}
        else{enc.push(key)}
             })
    let result =[]

             function promise_function(url) {
                 return new Promise(function(resolve,reject){
                     request(url,function(error,res,body){
                         if(!error && res.statusCode==200){
                             resolve(body)
                         } else{
                             reject(error)
                         }
                     })
                 })
             }

             async function main(){
                 
                for(i=0; i<enc.length; i++){
                    let input = await promise_function(`${process.env.API_URL}key=${process.env.API_KEY}&queryType=productNumber&query=${enc[i]}`)
                    result.push(input)

                }
                        res.status(200).json({success:true,result})

             }
             main()

    //  enc.map( (key)=>{
    //       request(`${process.env.API_URL}key=${process.env.API_KEY}&queryType=productNumber&query=${key}`,(error,response,body)=>{
    //                  result.push(body)
    //                 if(result.length==enc.length){
    //                    res.status(200).json({success:true,result})
    //                 }
    //              }) 
    //          })
    
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