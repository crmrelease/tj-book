const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    writer:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    bookId:{
        type:Number
    }

},{timestamps:true})


module.exports = mongoose.model('favorite',favoriteSchema)