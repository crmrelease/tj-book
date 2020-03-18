const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const user =require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = (passport)=>{
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField:'password',
    }, async(email,password,done,next)=>{ 
        try{
            const exUser = await user.findOne({email:email});
            if(exUser){
                const result = await bcrypt.compare(password,exUser.password);
                if(result){
                    done(null,exUser);
                }else{
                    done(null,false,{message:'비밀번호가 일치하지 않습니다'})
                }
            } else{
                done(null,false,{message:'가입되지 않은 회원입니다'});
            }
        }catch(error){
            console.error(error);
            done(error);
        }
    }));
    
}