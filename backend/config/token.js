/*
import jwt from "jsonwebtoken"

const genToken = (userId)=>{
      try{
        const token =  jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"15d"});
        return token;

      }catch(error){
        console.log(error);
          
      }
}

export default genToken;
*/


import jwt from "jsonwebtoken";

const genToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    return token;
  } catch (error) {
    console.error("Token generation error:", error);
    return null; // fallback to avoid undefined return
  }
};

export default genToken;
