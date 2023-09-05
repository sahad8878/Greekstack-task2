import React from "react";

import user from "../../assets/user.png";
import monitor from "../../assets/monitor.png";
import star from "../../assets/star.png";
import google from "../../assets/google.png";
import trustpilot from '../../assets/trustpilot.svg'
import linkedin from '../../assets/linkedin.png'
const SecondPart = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-[#f5ebc5] w-full flex flex-col py-10 justify-center space-y-3 items-center ">
             <img src={user} alt="user" className="h-14" />
             <span className="text-4xl font-bold ">300k+</span>
             <span className="text-sm text-gray-600">Total learners</span>
        </div>
        <div className="bg-[#ffdb4d] w-full flex flex-col py-10 justify-center space-y-3 items-center ">
             <img src={monitor} alt="user" className="h-14" />
             <span className="text-4xl font-bold ">60+</span>
             <span className="text-sm text-gray-600">Programs</span>
        </div>
        <div className="bg-[#f5ebc5] w-full flex flex-col py-10 justify-center space-y-3 items-center ">
            <div className="flex space-x-1 sm:space-x-3">

             <img src={star} alt="user" className=" h-10 sm:h-12" />
             <img src={star} alt="user" className=" h-10 sm:h-12" />
             <img src={star} alt="user" className="hidden sm:block h-10 sm:h-12" />
            </div>
             <span className="text-4xl font-bold ">4.2 <span className="text-xl font-normal">/5</span></span>
             <span className="text-sm text-gray-600">CSAT</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center px-8 sm:px-0 space-y-2 sm:space-y-0 sm:space-x-6 py-10">
        <div className=" border border-black px-12 py-2 space-x-5 rounded-ss-3xl rounded-br-3xl flex">
          <div className="flex justify-start items-center">
            <img src={google} alt="google" className="h-10" />
          </div>
          <div className=" flex flex-col space-y-1">
            <span className="text-sm text-slate-500 font-normal">
              Google Reviews
            </span>
            <span className="font-semibold">Rated 4.4/5(188)</span>
          </div>
        </div>
        <div className=" border border-black px-12 py-2 space-x-5 rounded-ss-3xl rounded-br-3xl flex">
          <div className="flex justify-start items-center">
            <img src={trustpilot} alt="google" className="h-10" />
          </div>
          <div className=" flex flex-col space-y-1">
            <span className="text-sm text-slate-500 font-normal">
            Trustpilot
            </span>
            <span className="font-semibold">Rated  4.7/5(4192)</span>
          </div>
        </div>
        <div className=" border border-black px-12 py-2 space-x-5 rounded-ss-3xl rounded-br-3xl flex">
          <div className="flex justify-start items-center">
            <img src={linkedin} alt="google" className="h-10" />
          </div>
          <div className=" flex flex-col space-y-1">
            <span className="text-sm text-slate-500 font-normal">
            Linkedin
            </span>
            <span className="font-semibold">Top Startup India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
