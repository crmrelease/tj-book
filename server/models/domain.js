const mongoose = require('mongoose');

const domainSchema = mongoose.Schema({
    host:{
        type:String,
        maxlength:80,
    },
    type:{
        type:String,
        maxlength:80
    },
    clientSecret: {
        type:String,
        maxlength:40
    }
})

module.exports = mongoose.model('domain',domainSchema)
