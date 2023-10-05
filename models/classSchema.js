const mongoose= require('mongoose')

const classSchema=new mongoose.Schema({
    heading:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

},{timestamps:true})

const classes=new mongoose.model('classes',classSchema)
module.exports = classes