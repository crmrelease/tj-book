const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const user =require('../models/user')
const {isLoggedIn, isNotLoggedIn}= require('./middleware')
const { verifyToken, apiLimiter } = require('./middleware');
const domain = require('../models/domain');
require('dotenv').config();

router.post('/', async (req, res) => {
    try {
      const checkDomain = await user.findOne({ clientSecret:req.body.clientSecret});
      if (!checkDomain) {
        return res.status(401).json({
          code: 401,
          message: '등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요',
        });
      }
      const token = jwt.sign({
        id: checkDomain._id,
      }, process.env.JWT_SECRET, {
        expiresIn: '1m', 
        issuer: 'crm',
      });
      //res.cookie("user_token",token)
      return res.json({
        code: 200,
        message: '토큰이 발급되었습니다',
        token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        code: 500,
        message: '서버 에러',
      });
    }
  });

  module.exports = router;