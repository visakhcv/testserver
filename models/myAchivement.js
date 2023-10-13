const mongoose= require('mongoose')

const achivementSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    }

},{timestamps:true})

const achivments=new mongoose.model('achivements',achivementSchema)
module.exports = achivments