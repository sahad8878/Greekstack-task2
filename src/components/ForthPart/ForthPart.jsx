import React from "react";
import LearnCard from "../Card/LearnCard";

const ForthPart = () => {
  return (
    <div>
      <div className="bg-[#03081c] text-white h-64 space-y-3 px-10 sm:px-10  md:px-28 lg:px-48 pt-10 sm:pt-16">
        <h1 className="font-semibold font-serif text-2xl sm:text-4xl">
          Learn from the Practitioners
        </h1>
        <p className="text-gray-200 text-sm">
          Develop real world skills with our courses designed by industry
          practitioners
        </p>
      </div>
      <div className="overflow-x-auto space-x-6 px-4 mb-14 no-scrollbar -mt-20 md:-mt-20 flex">
     <LearnCard/>
     <LearnCard/>
     <LearnCard/>
     <LearnCard/>
     <LearnCard/>
     <LearnCard/>
     <LearnCard/>
     <LearnCard/>
     <LearnCard/>
      </div>
    </div>
  );
};

export default ForthPart;
