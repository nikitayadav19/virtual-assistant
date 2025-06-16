import jwt from "jsonwebtoken"
const isAuth = async (req , res ,next)=>{
    try{
        const token = req.cookies.token
       console.log(token);
       
        
        if(!token){
            return res.status(400).json({messsage:"token not found"})
        }
        const verifyToken = await jwt.verify(token,process.env.JWT_SECRET)
        // id update
        req.userId = verifyToken.userId;
        next();
    }catch(err){
      console.log(err);
      return res.status(500).json({messsage:"is Auth error"})
    }
}

export default isAuth;