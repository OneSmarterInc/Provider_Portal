import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/image.png";
import {
  ArrowLeft, Edit, Search, Phone, AtSign, Check, Eye, HelpCircle,} from "lucide-react";

// InputField component with icon prop
const InputField = ({ label, placeholder, icon: Icon }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-gray-500 text-sm">
        {label} <span className="text-red-600">*</span>
      </label>
      <div className="flex flex-row bg-white border-2 rounded justify-between h-10 p-2">
        <input
          className="border-0 w-full outline-none"
          type="text"
          placeholder={placeholder}
          id={label}
        />
        <div className="items-center justify-center pt-1 border-l-2 p-2">
          <Icon className="w-4 h-4 text-[#0486A5] text-center" />{" "}
          {/* Use the passed icon */}
        </div>
      </div>
    </div>
  );
};

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/");
  };

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={divStyle}>
      <div className="flex flex-col justify-center min-h-screen w-[90%] mx-auto gap-8">
        {/* Back and Log In Link */}
        <div className="flex justify-end space-x-2">
          <img
            src="/images/Header/Back To.png"
            alt="Profile"
            className="w-10 mb-8 cursor-pointer"
            aria-label="User profile"
          />

          <p className="text-gray-900 mt-2 font-medium text-right text-sm">
            Already have a Flex account? Log In
          </p>
        </div>

        {/* Heading and Description */}
        <div className="flex flex-col justify-center text-black-900 items-center mx-auto gap-2">
          <h1 className="text-center text-xl font-medium">Get Started</h1>
          <p className="text-center text-sm text-gray-700">
            Please enter your e-mail address and a password to start the
            registration process. You will receive a <br /> confirmation e-mail
            to activate your account.
          </p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-10 justify-center items-center mx-auto">
          {/* First Row of Input Fields */}
          <div className="flex flex-row gap-10">
            <div className="flx flex-row">
              <InputField
                label="NPI (National Provider Identifier)"
                placeholder="Ex: 1234567890"
                icon={Edit} // Pass the Search icon
              />
            </div>
            <InputField
              label="TIN (Tax Identification Number)"
              placeholder="Ex: 45669756"
              icon={Edit} // Pass the Search icon
            />
            <InputField
              label="Email / Username"
              placeholder="Ex: gram@yesenia.net"
              icon={AtSign} // Pass the Mail icon
            />
          </div>

          {/* Second Row of Input Fields */}
          <div className="flex flex-row gap-10">
            <InputField
              label="Phone Number"
              placeholder="**********"
              icon={Phone} // Pass the Phone icon
            />
            <InputField
              label="Password"
              placeholder="**********"
              icon={Eye} // Pass the Lock icon
            />
            <InputField
              label="Confirm Password"
              placeholder="**********"
              icon={Eye} // Pass the Check icon
            />
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center mt-4">
          <button
            className="border-2-sky bg-[#0486A5] py-2 px-6 text-white rounded-lg"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
