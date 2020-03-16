const express = require('express');
const router = express.Router()
const user =require('../models/user')
const cors = require('cors');
const uuidv4 = require('uuid/v4')
const verifyToken = require('./middleware');


router.use(cors());
router.get('/',(req,res)=>{
    res.send('hello')
})

router.get('/api/hello',(req,res)=>{
    res.send('안냐세여~~')
})

router.post('/domain', async (req,res,next)=>{
    const exUser = user.findOne({email:req.body.email})
    if(exUser){
    user.update({email:req.body.email},{$set:{clientSecret: uuidv4()}})
    .then(()=>{
        res.json({
            message:"도메인 생성 성공"
        })
    })
    .catch((error)=>{
        console.error(error);
        next(error);
    })
} else{
    res.json({
        message:"도메인을 생성할 유저가 없습니다"
    })
}
})
module.exports = router;