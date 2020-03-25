const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rateSchema = mongoose.Schema({
    writer:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    bookId:{
        type:Number,
        unique:true
    },
    grade:{
        type:Number
    }
},{timestamps:true})


module.exports = mongoose.model('rate',rateSchema)
