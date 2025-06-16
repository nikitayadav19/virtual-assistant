
import React, { useContext, useState } from 'react'
import {userDataContext} from '../context/UserContext'
import axios from 'axios'
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Customize2 = () => {
  const {userData,backendImage,selectedImage,serverUrl,setUserData}= useContext(userDataContext)
  const[assistantName,setAssistantName]= useState(userData?.assistantName || "")
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

  const handleUpdateAssistant = async ()=>{
    setLoading(true);
    try{
     let formData = new FormData();
     formData.append("assistantName",assistantName);
     if(backendImage){
      formData.append("assistantImage",backendImage);
     }else{
      formData.append("imageUrl",selectedImage);
     } 
     const result = await axios.post(`${serverUrl}/api/user/update`,formData,{withCredentials:true}) 
     setLoading(false)
     console.log(result.data);
     setUserData(result.data)
     navigate("/")

    }catch(err){
      setLoading(false);
     console.log(err);
     
    }
  }

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[rgb(0,0,0)] to-[#2145b4] flex justify-center items-center flex-col p-[20px] relative'>
      <IoArrowBackSharp className='absolute top-[30px] left-[30px] text-white w-[25px] h-[25px] font-bold cursor-pointer'onClick={()=>navigate("/customize")} />
       <h1 className='text-white text-[30px] text-center mb-[30px] font-sans font-bold'>Enter Your <span className='text-[33px] text-blue-300 font-bold'>Assistant Name</span></h1>
        
          <input
            type="text"
            placeholder="Enter your Assistant Name"
            className="w-full max-w-[600px] h-[60px] outline-none border-2 border-amber-600 bg-transparent text-white placeholder-gray-400 px-[30px] py-[10px] rounded-full text-[22px]"
            required 
            onChange={(e)=>setAssistantName(e.target.value)} value={assistantName}
          />
          {assistantName && <button className="min-w-[300px] h-[60px] bg-blue-400 rounded-full text-[20px] text-white cursor-pointer font-semibold shadow-md hover:bg-blue-600 hover:border-[2px] hover:text-white hover:shadow-lg transition duration-300 mt-[30px] " disabled={loading} onClick={()=>{
            handleUpdateAssistant()
          }}>{!loading?"Finally Create Your Assistant":"Loading..."}</button> }
          
    </div>
  )
}

export default Customize2



