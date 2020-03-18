const jwt = require('jsonwebtoken');
const RateLimit = require('express-rate-limit')

exports.isLoggedIn=(req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(403).json({message: "로그인필요"});
    }
}

exports.isNotLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        next();
    } else{
      res.status(403).json({message: "로그아웃필요"});
    }
};

exports.verifyToken = (req, res, next) => {
    try {
      req.decoded = jwt.verify(req.cookies.clientToken, process.env.JWT_SECRET);
      return next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') { 
        return res.json({
          code: 419,
          message: '토큰이 만료되었다구~',
          isAuth:false
        })
        .clearCookie('clientToken')
      }
      return res.json({
        code: 401,
        message: '유효하지 않은 토큰입니다',
        isAuth:false
      });
    }
  };
