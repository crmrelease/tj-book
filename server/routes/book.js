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

router.post('/bookInfoDetail',(req,res)=>{
    productNumber = req.body.bookId
    request(`${process.env.API_URL}key=${process.env.API_KEY}&queryType=productNumber&query=${productNumber}`,(error,response,body)=>{
        if(error) res.json({success:false,error})
        res.json({success:true, body})
    })
})


module.exports = router;