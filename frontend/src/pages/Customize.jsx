import React, { useContext, useRef, useState } from 'react'
import { RiImageAddLine } from "react-icons/ri";
import AI1 from '../assets/AI1.jpg'
import AI3 from '../assets/AI3.jpg'
import AI4 from '../assets/AI4.png'
import AI5 from '../assets/AI5.avif'
import AI6 from '../assets/AI6.avif'
import AI7 from '../assets/AI7.jpg'
import Card from '../assets/components/Card'
import { userDataContext } from '../context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';


const Customize = () => {

  const inputImage = useRef();
  const {serverUrl,userData,setUserData,frontendImage,SetFrontendImage,backendImage,setBackendImage,
  selectedImage,setSelectedImage}=useContext(userDataContext);
  const navigate=useNavigate();
  
  //handling input image selecby user
  const handleImage = (e)=>{
    const file = e.target.files[0];
    setBackendImage(file);
    SetFrontendImage(URL.createObjectURL(file))
  }

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[rgb(0,0,0)] to-[#2145b4] flex justify-center items-center flex-col'>
      <IoArrowBackSharp className='absolute top-[30px] left-[30px] text-white w-[25px] h-[25px] font-bold cursor-pointer'onClick={()=>navigate("/")} />

      <h1 className='text-white text-[30px] text-center mb-[30px] font-sans font-bold'>Select your <span className='text-[33px] text-blue-300 font-bold'>Assistant image</span></h1>
        <div className='w-[90%] max-w-[900px] flex justify-center items-center flex-wrap gap-[17px]'>
          <Card image={AI1}/>
          <Card image={AI3}/>
          <Card image={AI4}/>
          <Card image={AI5}/>
          <Card image={AI6}/>
          <Card image={AI7}/>
           <div className={`w-[80px] h-[160px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-white rounded-2xl overflow-hidden hover:shadow hover:shadow-amber-400 cursor-pointer hover:border-4 hover:border-black flex items-center justify-center ${selectedImage=="input"?"border-5 border-blue-300 shadow-2xl shadow-amber-50 ":null}`} onClick={()=>{inputImage.current.click()
           setSelectedImage("input") 
           }}> 
            {!frontendImage && <RiImageAddLine className='text-white w-[25px] h-[25px]' />}
            {frontendImage && <img src={frontendImage} className='h-full object-cover overflow-hidden'/>}
          </div>
          <input type="file" accept='image/*' ref={inputImage} hidden onChange={handleImage} />
        </div>
        {selectedImage && <button className="min-w-[150px] h-[60px] bg-blue-400 rounded-full text-[20px] text-white cursor-pointer font-semibold shadow-md hover:bg-blue-600 hover:border-[2px] hover:text-white hover:shadow-lg transition duration-300 mt-[30px] " onClick={()=>navigate("/customize2")}>Next</button>}
        
    </div>
  )
}

export default Customize