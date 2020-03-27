const express = require('express');
const router = express.Router()
const favorite =require('../models/favorite')
const cors = require('cors');
const request = require('request')

process.env.COOKIE_SECRET
require('dotenv').config();
router.use(cors());

router.post('/addfavorite',async (req,res)=>{
    const index = await favorite.findOne({'bookId':req.body.bookId,'writer':req.body.writer})
if(index!=null){
    favorite.findOneAndDelete({bookId:req.body.bookId,writer:req.body.writer})
    .exec((err,result)=>{
        if(err) return res.status(400).json({success:false})
        return res.status(200).json({success:true, like:false, cancel:true})
    })
}else{
    const inputfavorite= new favorite(req.body)
    inputfavorite.save((err,result)=>{
        if(err) return res.status(400).json({success:false})
        return res.status(200).json({success:true, like:true, cancel:false})
    })
}
})


router.post('/getfavorite',(req,res)=>{
    console.log(req.body)
    favorite.find({bookId:req.body.bookId})
    .exec((err,favoritenumber)=>{
        if(err) return res.status(400).json({success:false})
        return res.status(200).json({success:true, favoritenumber})
    })
})

router.post('/getfavoriteAll',async (req,res)=>{
    console.log(req.body)
    await favorite.find({writer:req.body.writer}).populate('writer')
    .exec((err,favoriteAll)=>{
        if(err) return res.status(400).json({success:false})
        return res.status(200).json({success:true, favoriteAll})
    })
})

module.exports = router;