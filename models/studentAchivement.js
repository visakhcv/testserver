const mongoose= require('mongoose')

const stdachivementSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    }

},{timestamps:true})

const stdachivments=new mongoose.model('studentsachivements',stdachivementSchema)
module.exports = stdachivments