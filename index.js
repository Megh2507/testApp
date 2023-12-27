const mongoose = require("mongoose")
const express = require("express")
const app = express()
const userSchema = new mongoose.schema({
    user:{
        type:String,
        required:true
    }
})
mongoose.connect("concURL",{useUnifiedTopology:true,..}).then(()=>{
    console.log("the connection is successful")
}).catch((err)=>{
    console.log(err)
})
app.post("/addUser",async (req,res)=>{
    const {userName} = req.body;
    try{
        const user = await new User({
            username : userName
          })
         await user.save()
          res.status(200).json({"success"})
    }
    catch{
        res.status(400).json({"fail"})
    }
   

})

const model = mongoose.model(userSchema,"User")