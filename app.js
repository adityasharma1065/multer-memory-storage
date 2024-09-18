const express=require("express")
const app=express()
const upload=require("./config/multer-config")
const userModel=require("./models/userModel")
const sharp=require("sharp")

app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/" , (req,res)=>{
    res.render("index")
})

app.post("/upload",upload.single("IMG"),async(req,res)=>{

    const resizedBuffer = await sharp(req.file.buffer)
    .resize(300, 200)
    .toBuffer();

    var user=await userModel.create({
        username:"aditya",
        image:resizedBuffer,
        type:req.file.mimetype
     })
    //  var users=await userModel.find()
     res.render("image",{user})
    // res.send(users)
})

app.listen(3000)