const classes= require('../models/classSchema')


exports.postClass = async (req,res) =>{
    const {heading, content,image} = req.body
    try {
        const newclasses = new classes({
            heading, image, content
        })
        await newclasses.save()

        res.status(200).json("Class Posted")
    
    
} catch (err) {
    res.status(403).json(err)
}
}

exports.getClass= async (req,res)=>{
    try{
        const allclasses= await classes.find()
        res.status(200).json(allclasses)

    }catch(err){
        res.status(403).json(err)
    }
}