import genToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signUp = async (req,res)=>{
  try{
    const {name,email,password}=req.body;

    const existEmail = await User.findOne({email})
    if(existEmail){
        return res.status(400).json({message:"email already exists!"})
        
    }
    if(password.length<6){
        return res.status(400).json({message:"password must be atleast 6 characters"})
    }

    const hashedPasssword = await bcrypt.hash(password,10)

    const user = await User.create({
        name,password:hashedPasssword,email
    })

    const token = genToken(user._id);

    res.cookie("token",token,{
      httpOnly:true,
      maxAge:15*24*60*60*1000,
      sameSite:"strict",
      secure:false
    })
    return res.status(201).json(user)
    
  }catch(err){
    return res.status(500).json({message:`sign Up error ${err}`})
    
  }
}


export const Login = async (req,res)=>{
  try{
    const {email,password}=req.body;

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"email does not exists!"})
        
    }
   
     const isMatch = await bcrypt.compare(password,user.password)
     if(!isMatch){
       return res.status(400).json({message:"incorrect password!"})
     }
    

    const token = genToken(user._id);

    res.cookie("token",token,{
      httpOnly:true,
      maxAge:15*24*60*60*1000,
      sameSite:"strict",
      secure:false
    })
    return res.status(200).json(user)
    
  }catch(err){
    return res.status(500).json({message:`login error ${err}`})
    
  }
}


export const logOut = async (req,res)=>{
  try{
     res.clearCookie("token");
     return res.status(200).json({message:"logOut successfully"})
  }catch(error){
    return res.status(500).json({message:`logOut error ${err}`}) 
  }
}