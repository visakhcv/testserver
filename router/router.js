const express= require('express')
const postController=require('../controller/postController')
// const upload= require('../multer/imgstore')
const router=express.Router()

router.post('/yoga/topost',postController.toPost)

router.get('/post',postController.getPost)
router.get('/',(req,res)=>res.status(200).send("helloworld"))


router.post('/yoga/deletepost',postController.deletePost)

module.exports = router