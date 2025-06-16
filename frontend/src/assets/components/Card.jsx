import React, { useContext } from 'react'
import { userDataContext } from '../../context/UserContext'

const Card = ({image}) => {
  const {serverUrl,userData,setUserData,frontendImage,SetFrontendImage,backendImage,setBackendImage,
  selectedImage,setSelectedImage}=useContext(userDataContext);
    
   //handling selected image by user and storing into a veriable for further use 
  return (
    <div className={`w-[80px] h-[160px] lg:w-[150px] lg:h-[250px] bg-[#030326]  border-blue-200 rounded-2xl overflow-hidden hover:shadow hover:shadow-amber-400 cursor-pointer hover:border-4 hover:border-black ${selectedImage==image?"border-5 border-blue-300 shadow-2xl shadow-amber-50 ":null}`} onClick={()=>{
      setSelectedImage(image);
      setBackendImage(null);
      SetFrontendImage(null);
      }}>
        <img src={image} className='h-full object-cover' />
    </div>
  )
}

export default Card