const express = require('express');
const router = express.Router()
const comment =require('../models/comment')
const cors = require('cors');
const request = require('request')

process.env.COOKIE_SECRET
require('dotenv').config();
router.use(cors());


router.post('/addComment',(req,res)=>{
    const comment_get = new comment(req.body)
    comment_get.save((err,savedcomment)=>{
        if(err) return res.json({success:false,err})
        comment.find({'_id':savedcomment._id}).populate('writer').exec((err,result)=>{
            if(err) return res.json({success:false,err})
            return res.status(200).json({success:true,result})
})
    })

})

router.post('/getAllcomment',(req,res)=>{
    comment.find({'bookId':req.body.bookId}).populate('writer').exec((err,commentData)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({success:true,commentData})
})})


module.exports = router;