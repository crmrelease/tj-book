const express = require('express');
const router = express.Router()
const user =require('../models/user')
const cors = require('cors');
const request = require('request')
const path = require('path')

process.env.COOKIE_SECRET
require('dotenv').config();
router.use(cors());


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    //res.send('hello')
})

router.get('/api/hello',(req,res)=>{
    res.send('안냐세여~~')
})


module.exports = router;