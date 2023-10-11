const express= require('express')
const postController=require('../controller/postController')
const classController= require('../controller/classContorller')
// const upload= require('../multer/imgstore')
const router=express.Router()

router.post('/yoga/topost',postController.toPost)
router.post('/yoga/postclass',classController.postClass)



router.get('/post',postController.getPost)
router.get('/getclasses',classController.getClass)
router.get('/',(req,res)=>res.status(200).send("helloworld"))


router.delete('/yoga/deletepost',postController.deletePost)

module.exports = router