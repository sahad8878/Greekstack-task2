import React from "react";
import FeaturCard from "../Card/FeaturCard";
import SquareCard from "../Card/SquareCard";

const SeventhPart = () => {
  return (
    <div className=" py-10 md:py-20 space-y-5 sm:space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-2xl sm:text-4xl font-serif font-bold">
          Backed by the Best
        </h1>
        <p>GrowthSchool is backed and supported by 80+ Angel Investors</p>
      </div>
      <div className="flex  justify-center overflow-x-scroll px-4 mb-14 no-scrollbar space-x-6 ">
        <div className="w-44 h-20 border border-black rounded-br-3xl rounded-ss-3xl "></div>
        <div className="w-44 h-20 border border-black rounded-br-3xl rounded-ss-3xl "></div>
      </div>
      <div className="text-center">and many more</div>
      <div className="space-x-6 overflow-x-scroll px-4 mb-14 no-scrollbar  flex">
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
        <SquareCard/>
      </div>

      <h1 className="text-2xl sm:text-4xl font-serif font-bold text-center">
        Featured
      </h1>
      <div className="space-x-6 overflow-x-scroll px-4 mb-14 no-scrollbar  flex">
       <FeaturCard/>
       <FeaturCard/>
       <FeaturCard/>
       <FeaturCard/>
       <FeaturCard/>
       <FeaturCard/>
       <FeaturCard/>
       <FeaturCard/>
       <FeaturCard/>
   
 
      </div>
    </div>
  );
};

export default SeventhPart;
