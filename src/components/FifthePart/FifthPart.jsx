import React from "react";
import career from "../../assets/career.png";
import practical from "../../assets/puzzle.png";
import message from "../../assets/email.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FifthPart = () => {
  return (
    <div className=" flex justify-start items-center px-10 sm:px-10  md:px-28 lg:px-48 py-10 sm:py-24 bg-[#03081c]">
      <div className="text-white w-full ">
        <div className="flex flex-col md:flex-row justify-between mb-14">
          <div className="space-y-4">
            <h1 className="font-semibold font-serif text-2xl sm:text-4xl">
              Why GrowthSchool?
            </h1>
            <p className="text-gray-200 text-sm">
              Focus on real world applications, learning through action, and
              community building
            </p>
          </div>
          <div className=" flex flex-col justify-end items-center pt-5 md:pt-0 ">
            <span className="text-sm text-green-500 hover:text-white cursor-pointer font-medium items-center">
              See more <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full space-y-7 md:space-y-0  md:space-x-8">
          <div className="bg-[#d9d9d9] rounded-ss-[60px] rounded-br-[60px] w-full h-40 md:h-auto "></div>

          <div className="w-full space-y-6">
            <div className="bg-gradient-to-r from-[#646773] p-4 sm:p-8 to-[#202536] flex flex-col sm:flex-row items-center space-x-7 rounded-br-3xl rounded-ss-3xl ">
              <img src={career} alt="career" className="h-14 text-white" />
              <div className="text-center sm:text-start">
                <h1 className="text-lg font-medium">Career Opportunities</h1>
                <p>Discover career opportunities within our network.</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#646773] p-4 sm:p-8 to-[#202536] flex flex-col sm:flex-row items-center space-x-7 rounded-br-3xl rounded-ss-3xl ">
              <img src={practical} alt="career" className="h-14 text-white" />
              <div className="text-center sm:text-start">
                <h1 className="text-lg font-medium">Practical Approach</h1>
                <p>
                  Learn by doing by solving real life problems from real
                  companies.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#646773] p-4 sm:p-8 to-[#202536] flex flex-col sm:flex-row items-center space-x-7 rounded-br-3xl rounded-ss-3xl ">
              <img src={message} alt="career" className="h-14 text-white" />
              <div className="text-center sm:text-start">
                <h1 className="text-lg font-medium">Community at the Center</h1>
                <p>
                  Join the curated community of other learners, alumni, and
                  mentors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPart;
