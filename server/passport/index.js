const user =require('../models/user')
const local = require('./localStrategy');

module.exports = (passport)=>{
    passport.serializeUser((user,done)=>{
        done(null, user._id);
    });
    passport.deserializeUser((_id, done) => {
        user.findOne({ where: { _id }, include:[{
        model:user,
        attributes:['email','name'],
      },]
    })
        .then(user => done(null, user))
        .catch(err => done(err));
    });
    local(passport);

}