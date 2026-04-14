const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/e-commerce")
.then(()=>{
    console.log("Mongodb connected")
})
.catch((err)=>{
    console.log(err)
})

const userSchema= mongoose.Schema({
    username :String,
    email: String,
    number: Number,
    password: String,
  
})

module.exports=mongoose.model("signup user",userSchema)