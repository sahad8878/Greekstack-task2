import React from "react";
import map from "../../assets/map.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FirstPart() {
  return (
    <div className="bg-[#03081c] text-white h-[550px] items-center flex flex-col sm:flex-row w-full">
      <div className="sm:w-[50%] flex flex-col items-center my-3 sm:my-0   justify-center ">
        <div className="text-start space-y-6 px-12 md:px-44 xl:px-56">
          <h1 className="text-3xl sm:text-5xl font-bold font-serif ">
            Become  the Top 1%
          </h1>
          <p className="font-light ">
            Whether it is Product, Growth, Design,
            Management, Business, Tech & Data GrowthSchool is the
            place to learn from  top experts in the field
          </p>

          <button className="rounded-ss-2xl pr-0.5 pb-0.5 hover:pb-0 hover:pr-0   bg-white rounded-br-2xl ">
            <button className="bg-[#37ed81] font-medium text-black -mt-1 -ml-1 hover:text-white  px-7 py-2 rounded-ss-2xl rounded-br-2xl">
              Explore Programs{" "}
              <FontAwesomeIcon icon={faChevronDown} size="2xs" />
            </button>
          </button>
        </div>
      </div>
      <div className="sm:w-[50%] flex justify-center items-center">
        <img src={map} alt="map" className="h-[300px] sm:h-full object-cover object-center" />
      </div>
    </div>
  );
}

export default FirstPart;
