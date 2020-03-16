const express = require('express')
const router = express.Router()
const user =require('../models/user')
const passport = require('passport');
const bcrypt = require('bcrypt');
const {isLoggedIn, isNotLoggedIn}= require('./middleware')
const cors =require('cors')

router.use(cors())

router.post('/join',async (req,res,next)=>{
const {name, email, password }= req.body;
try{
    const exUser = await user.findOne({email:req.body.email})
    if(exUser){
        req.flash('joinError','이미 가입된 회원 입니다.')
        res.json({success: false, message:"이미 가입했당께"})
    }

    const hash = await bcrypt.hash(password,12);

    await user.create(
        {
            name,
            email,
            password:hash,
        }
    );
    res.json({success: true, message:"환영한다 친구야"})
}
catch(error){
    console.error(error);
    return next(error);
}
}),

router.post('/login',(req,res,next)=>{
    
    passport.authenticate('local',(authError, user, info)=>{
        if(authError){
            console.error(authError);
            return next(authError)
        }
        if(!user){
            req.flash('loginError',info.message);
            return res.json({
                loginSucess:false, message:info.message
            })
        }
        return req.login(user,(loginError)=>{
            if(loginError){
                return next(loginError);
            }
            return res.json({
                loginSucess:true, message:"로긴성공"
            })
        });
    })(req,res,next);
}),

router.get('/logout', (req,res)=>{
    req.logout();
    //req.session.destroy();
    //res.redirect('/');
})

module.exports = router;