const mongoose = require('mongoose');

require('./user');

module.exports = () => {
    mongoose.connect(`mongodb+srv://ktjin2003:${process.env.MONGO_PASSWORD}@ttube-2ipit.mongodb.net/test?retryWrites=true&w=majority`,{
        useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
    }).then(()=>console.log('몽고디비 연결 완료'))
    .catch(err=>console.error(err))
}