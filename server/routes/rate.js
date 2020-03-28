const express = require('express');
const router = express.Router()
const rate =require('../models/rate')
const cors = require('cors');
const request = require('request')

process.env.COOKIE_SECRET
require('dotenv').config();
router.use(cors());

router.post('/addrate',async (req,res)=>{
    const index = await rate.findOne({'bookId':req.body.bookId, 'writer':req.body.writer})
    if(index!==null){
        rate.findOneAndUpdate({'bookId':req.body.bookId,'writer':req.body.writer},{$set:{grade:req.body.grade}},(err,result)=>{
            if(err) return res.status(400).json({success:false})
            return res.status(200).json({success:true})
        })
}else{
    const inputrate = new rate(req.body)
    inputrate.save((err,result)=>{
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


router.post('/getrateAll',async (req,res)=>{
    console.log(req.body)
    await rate.find({writer:req.body.writer}).populate('writer')
    .exec((err,rateAll)=>{
        if(err) return res.status(400).json({success:false})
        return res.status(200).json({success:true, rateAll})
    })
})

module.exports = router;