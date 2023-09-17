const mongoose= require('mongoose')

const mongo_url=process.env.DATABASE

mongoose.connect(mongo_url,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err);
})