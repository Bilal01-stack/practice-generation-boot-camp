const mongoose=require("mongoose")


const Url="mongodb+srv://muhammadbilal:j55WKMdqX7yc5ByU@cluster0.qudj8ek.mongodb.net/"
mongoose.connect(Url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connected")
})

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection failed"))

module.exports=mongoose;