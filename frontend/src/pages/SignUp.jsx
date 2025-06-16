
//signup section


import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import axios from "axios"
import {React, useContext, useState} from "react";
import bg from "../assets/AI1.jpg"
import bg3 from "../assets/AI3.jpg"
import bg4 from "../assets/AI4.png"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { userDataContext } from "../context/UserContext";



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {serverUrl,userData,setUserData}= useContext(userDataContext)
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]= useState("");
  const [loading,setLoading] = useState(false)

  const handleSignup = async(e)=>{
    e.preventDefault()
    setLoading(true)
    setError("")
    try{
      let result = await axios.post(`${serverUrl}/api/auth/signup`,{
        name,email,password
      },{withCredentials:true});
      setLoading(false);
      setUserData(result.data)
      navigate("/customize")
      
    }catch(err){
     console.log(err);
     setUserData(null)
     setLoading(false)
     setError(err.response.data.message)
     
    }
  }

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Carousel */}
      <Carousel
        autoPlay={true}
        showThumbs={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
       
        className="w-full h-full absolute top-0 left-0 z-0"
      >
        <div>
          <img
            src={bg}
            alt="bg1"
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <div>
          <img
            src={bg3}
            alt="bg2"
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <div>
          <img
            src={bg4}
            alt="bg3"
            className="w-full h-[100vh] object-cover"
          />
        </div>
      </Carousel>

      {/* Overlay Form */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
        <form className="w-[90%] h-[700px] max-w-[600px] bg-[#00000044] backdrop-blur-md shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] rounded-xl px-[20px]" onSubmit={handleSignup}>
          <h1 className="text-white text-[30px] font-semibold mb-[10px]">
            Register to <span className="text-amber-600">Vertual-Assistant</span>
          </h1>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full h-[60px] outline-none border-2 border-amber-600 bg-transparent text-white placeholder-white px-[30px] py-[10px] rounded-full text-[22px]"
            required
            onChange={(e) => setname(e.target.value)}
            value={name}
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[60px] outline-none border-2 border-amber-600 bg-transparent text-white placeholder-white px-[30px] py-[10px] rounded-full text-[22px]"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <div className="w-full h-[60px] border-2 border-amber-600 bg-transparent text-white rounded-full text-[22px] relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full h-full rounded-full outline-none bg-transparent placeholder-white px-[30px] py-[10px]"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!showPassword && (
              <IoEye
                className="absolute top-[18px] right-[20px] text-white w-[25px] h-[25px] cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
            {showPassword && (
              <IoEyeOff
                className="absolute top-[18px] right-[20px] text-white w-[25px] h-[25px] cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            )}
          </div>
          {error.length>0 && <p className="text-red-500 font-semibold text-[17px]">
            *{error}
          </p> }

          <button className="min-w-[150px] h-[60px] bg-amber-600 rounded-full text-[20px] text-white cursor-pointer font-semibold shadow-md hover:bg-orange-700 hover:text-white hover:shadow-lg transition duration-300 mt-[30px]" disabled={loading}>
            {loading?"Saving":"Sign Up"}
          </button>

          <p
            className="text-white text-[18px] cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Already have an account?{" "}
            <span className="text-amber-600 text-[18px]">Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
