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
    request(`${process.env.API_URL}key=${process.env.API_KEY}&query=${enc}`,(error,response,body)=>{
        if(error) res.json({success:false,error})
        res.json({success:true, body})
    })
})

router.get('/',(req,res)=>{
    res.send('hello')
})

router.get('/api/hello',(req,res)=>{
    res.send('안냐세여~~')
})


module.exports = router;