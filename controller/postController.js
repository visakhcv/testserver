const posts = require('../models/postSchema')


exports.toPost = async (req, res) => {
    const { heading, content, image} = req.body
    // const file=req.Image[0]
    // const result = await s3uploadv2(file)
    // res.status(202).json(result)
    try {
            const newposts = new posts({
                heading, content, image
            })
            await newposts.save()
    
            res.status(200).json("Posted")
        
        
    } catch (err) {
        res.status(403).json(err)
    }
}

exports.getPost= async (req,res)=>{
    try{
        const allpost= await posts.find()
        res.status(200).json(allpost)

    }catch(err){
        res.status(403).json(err)
    }
}

exports.deletePost =async (req,res)=>{
        const {id}= req.body
    try{
        const remainingposts= await posts.deleteOne({_id:id})
        res.status(200).json('Deleted Successfully')
    }catch(err){
        res.status(403).json(err)
    }
}

