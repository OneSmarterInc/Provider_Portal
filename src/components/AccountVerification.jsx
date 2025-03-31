import React from 'react';
import backgroundImage from "../assets/image.png";
import { useNavigate } from 'react-router-dom';

const AccountVerification = () => {

    const navigate = useNavigate();

    const handleDetails=()=>{
        navigate('/members');
    }

    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

  return (
    <div style={divStyle} className=" min-h-screen flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col border-2 border-sky-300 bg-white rounded-lg">
            <div className="flex justify-center text-center p-2 border-b-2 border-sky-300">
                <h3 className="text-black font-medium">Account Verification</h3>
            </div>
            <div className="flex flex-row p-2">
                <div className="p-4 border-r-2">
                    <h2 className="text-[#0486A5] text-xl mb-2">Mike <br /> Dohack</h2>
                    <p className="text-sm text-black-300 mb-2">m.dohack@example.com</p>
                    <p className="text-sx">+1 (555) 123-4567</p>
                </div>
                <div className="p-4 mr-16">
                    <div>
                        <p className="text-gray-500 text-sm">NPI Number:</p>
                        <p className="text-[#0486A5] text-sm mb-2">1234567890</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">TIM Number:</p>
                        <p className="text-[#0486A5] text-sm mb-2">45-6697563</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Service Location:</p>
                        <p className="text-[#0486A5] text-sm mb-2">New York, NY 10001</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Last Login Date:</p>
                        <p className="text-[#0486A5] text-sm">March 10, 2025 - 10:45 AM</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-center rounded text-sky-800 bg-[#0486A5] p-2">
                <button className="text-sm" onClick={handleDetails}>CONFIRM ACCOUNT DETAILS</button>
            </div>
        </div>
    </div>
  )
}

export default AccountVerification
