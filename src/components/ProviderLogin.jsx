import React from "react";
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/image.png";
import { ArrowLeft, Eye, AtSign} from "lucide-react";

const ProviderLogin = () => {

  const navigate = useNavigate();

  const handleLogin=()=>{
    navigate('/verify');
  }

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle} className=" min-h-screen flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center item-center bg-white gap-2 p-6 rounded-xl h-100 border-2 ">
        <div>
          <h3>PROVIDER LOGIN</h3>
        </div>
        <div className="gap-4"> 
          <label htmlFor="" className="text-gray-600 text-sm">
            Registered Email/Username<span className="text-gray-700">*</span>
          </label>
          <div className="flex flex-row bg-white border-2 rounded justify-between text-xs h-8 p-2">
            <input
              className="border-0 w-full"
              type="text"
              placeholder="Ex: 1234567890"
            />
            <div className="items-left justify-center border-l-2 pb-2 pl-2">
              <AtSign className="w-4 h-4  text-[#0486A5]" />
            </div>
          </div>
        </div>

        <div className="gap-4">
          <label htmlFor="" className="ext-gray-600 text-sm">
            Password<span className="text-gray-600">*</span>
          </label>
          <div className="flex flex-row bg-white border-2 rounded justify-between text-xs h-8 p-2 gap-20">
            <input
              className="border-0 w-full"
              type="text"
              placeholder="Ex: 1234567890"
            />
            <div className="items-center justify-center border-l-2 pb-2 pl-2">
              <Eye className="w-4 h-4  text-[#0486A5]" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start mt-4 gap-20">
          <button className="border-2-sky bg-[#0486A5] py-2 px-6 text-white rounded-lg" onClick={handleLogin}>
            Login
          </button>
          <p className="text-sm mt-2 text-gray-700">Forgot Password?</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500">No account yet? Register as a new user.</p>
      </div>
    </div>
  );
};

export default ProviderLogin;
