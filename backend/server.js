const express =require("express")
const app=express()
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
const path=require("path")
const userModel=require("./models/signup")
const cors= require("cors")

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"src")))

//signup
app.post("/signin",async(req,res)=>{
  try{
 let {username,email,number,password}=req.body;
     let user= await userModel.findOne({email})
  if(user){ return res.status(400).json({success:false,
    message:"user already exist"
})
    }
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hash)=>{
        const user=await userModel.create({
        username,
        email,
        number,
        password:hash
    })
    console.log(user)
     res.json({
        success:true,
        message:"successfully signed up"
    })
    })
 })
  }
  catch(error){
     console.log("SERVER ERROR:", error);
    res.status(500).json({
        success:false,
        message:"server error"
    })
  }
})

//login
app.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    let user=await userModel.findOne({email:email})
    if(!user) res.json({
        success:false,
        message:"something went wrong"
    })
    bcrypt.compare(password,user.password,(err,result)=>{
        if(result) res.json({
            success:true,
            message:"login succefully"
        })
        else res.json({message:"something went wrong"})
    })

})


app.listen(3001,()=>{
    console.log("server start")
})