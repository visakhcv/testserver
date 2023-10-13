const achivements= require('../models/myAchivement')

exports.toPostAchivement = async (req, res) => {
    const { image} = req.body
    // const file=req.Image[0]
    // const result = await s3uploadv2(file)
    // res.status(202).json(result)
    try {
            const newachivement = new achivements({
                 image
            })
            await newachivement.save()
    
            res.status(200).json("Posted")
        
        
    } catch (err) {
        res.status(403).json(err)
    }
}

exports.getmyAchivement= async (req,res)=>{
    try{
        const allAchivements= await achivements.find()
        res.status(200).json(allAchivements)

    }catch(err){
        res.status(403).json(err)
    }
}

exports.deleteMyAchivement =async (req,res)=>{
        const {id}= req.body
    try{
        const remainingAchivement= await achivements.deleteOne({_id:id})
        res.status(200).json('Deleted Successfully')
    }catch(err){
        res.status(403).json(err)
    }
}