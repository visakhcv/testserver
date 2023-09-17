const mongoose= require('mongoose')

const postSchema=new mongoose.Schema({
    heading:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }

})

const posts=new mongoose.model('posts',postSchema)
module.exports = posts