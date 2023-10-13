const express= require('express')
const postController=require('../controller/postController')
const classController= require('../controller/classContorller')
const myAchivementController = require('../controller/myAchivementController')
// const upload= require('../multer/imgstore')
const router=express.Router()

router.post('/yoga/topost',postController.toPost)
router.post('/yoga/postclass',classController.postClass)
router.post('/yoga/myachivement',myAchivementController.toPostAchivement)


router.get('/post',postController.getPost)
router.get('/getclasses',classController.getClass)
router.get('/',(req,res)=>res.status(200).send("helloworld"))
router.get('/yoga/getmyachivement',myAchivementController.getmyAchivement)

router.delete('/yoga/deletepost',postController.deletePost)
router.delete('/yoga/deletemyachivement',myAchivementController.deleteMyAchivement)

module.exports = router