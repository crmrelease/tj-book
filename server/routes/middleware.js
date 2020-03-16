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
      req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
      return next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') { 
        return res.status(419).json({
          code: 419,
          message: '토큰이 만료되었습니다',
        });
      }
      return res.status(401).json({
        code: 401,
        message: '유효하지 않은 토큰입니다',
      });
    }
  };

  exports.apiLimiter = new RateLimit({
      windowMs: 6000*1000, 
      max:100,
      delayMs:0,
      handler(req,res){
          res.status(this.statusCode).json({
              code:this.statusCode,
              message:'1분에 한번만 요청해라'
          });
      },
  });

  exports.deprecated = (req,res)=>{
      res.status(410).json({
          code:410,
          message:'새로운 버전을 써라'
      }

      )
  }