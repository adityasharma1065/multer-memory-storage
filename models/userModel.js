const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/multer").then(()=>{
    console.log("connected");
})

const userSchema=mongoose.Schema({
    username:String,
    image:Buffer,
    type:String
})

module.exports=mongoose.model("user",userSchema)
