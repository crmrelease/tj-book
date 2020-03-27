const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    writer:{
        type:Schema.Types.ObjectId,
        ref:'user',
    },
    bookId:{
        type:Number,
    },
    content:{
        type:String
    },
    bookTitle:{
        type:String
    }
})


module.exports = mongoose.model('comment',commentSchema)
