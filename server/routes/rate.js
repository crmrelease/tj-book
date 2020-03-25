const express = require('express');
const router = express.Router()
const rate =require('../models/rate')
const cors = require('cors');
const request = require('request')

process.env.COOKIE_SECRET
require('dotenv').config();
router.use(cors());

router.post('/addrate',(req,res)=>{
    const index = rate.findOne({'bookId':req.body.bookId, 'writer':req.body.writer})
    if(!index){
    const inputrate = new rate(req.body)
    inputrate.save((err,result)=>{
        if(err) return res.status(400).json({success:false})
        return res.status(200).json({success:true})
    })
}else{
    rate.findOneAndUpdate({'bookId':req.body.bookId,'writer':req.body.writer},{$set:{grade:req.body.grade}},(err,result)=>{
        if(err) return res.status(400).json({success:false})
        return res.status(200).json({success:true})
    })
}
})

router.post('/getrate',(req,res)=>{
    rate.find({'writer':req.body.writer,'bookId':req.body.bookId})
        .exec((err,result)=>{
        if(err) return res.status(400).json({success:false})
        return res.status(200).json({success:true,result })
    })
})


module.exports = router;