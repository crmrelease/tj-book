const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const user =require('../models/user')
const {isLoggedIn, isNotLoggedIn}= require('./middleware')
const { verifyToken, apiLimiter } = require('./middleware');
const cors =require('cors')
require('dotenv').config();

router.use(cors())
router.post('/', async (req, res,next) => {
    try {
      const checkDomain = await user.findOne({email:req.body.email});
      console.log(req.body.email)
      console.log(checkDomain)
      if (!checkDomain) {
        return res.status(401).json({
          code: 401,
          message: '등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요',
        });
      }
      const token = jwt.sign({
        id: checkDomain._id,
      }, process.env.JWT_SECRET, {
        // expiresIn: '1m', 
        // issuer: 'crm',
      });
        return res.cookie("clientToken",token).status(200) 
       .json({
         message: '토큰이 발급되었습니다', token
       })
    }
     catch (error) {
      console.error(error);
      return res.status(500).json({
        code: 500,
        message: '서버 에러',
      });
    }
  });
  
router.get('/userInfo',verifyToken,async (req,res)=>{
  try{
  const checkedUser=await user.findOne({"_id":req.decoded.id})
  if(!checkedUser){
    return res.json({
      isAuth:false,
      message:'토큰정보가 없습니다'
    })
  }
  return res.json({
      code: 200,
      isAuth: true,
      info: checkedUser.name,
      isAdmin:checkedUser.role
      })
  }
  catch{((error) => {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: '서버 에러',
    });
  });
}});

  module.exports = router;