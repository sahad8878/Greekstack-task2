import React from "react";
import ExploreCard from "../Card/ExploreCard";
import marketing from "../../assets/bullhorn.png";
import growth from "../../assets/skills.png";
import design from "../../assets/sketch.png";
import tech from "../../assets/computer.png";
import founders from "../../assets/target.png";
import product from "../../assets/inventory.png";
import bussiness from "../../assets/chess.png";

const ThirdPart = () => {
  return (
    <div className="px-10 sm:px-10  md:px-28 lg:px-48">
      <div className="text-center my-3 md:my-8 font-semibold font-serif text-2xl sm:text-4xl">
        Explore the programs
      </div>
      <div className="flex justify-center items-center space-y-16 md:space-y-0">

      <div className=" sm:grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-11  my-16 ">
        <div className=" flex  items-center space-y-16 ">
          <ExploreCard icon={marketing} heading={"Marketing"} />
        </div>
        <div className=" space-y-16 mt-10 md:mt-0 ">
          <ExploreCard icon={growth} heading={"Personal Growth"} />
          <ExploreCard icon={design} heading={"Design"} />
        </div>
        <div className=" flex  items-center space-y-16 mt-10 md:mt-0">
          <ExploreCard icon={tech} heading={"Tech & Data"} />
        </div>
        <div className="  space-y-16 mt-10 md:mt-0">
          <ExploreCard icon={founders} heading={"For Founders"} />
          <ExploreCard icon={product} heading={"Product"} />
        </div>
        <div className=" flex  items-center space-y-16 mt-10 md:mt-0">
          <ExploreCard icon={bussiness} heading={"Business"} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ThirdPart;
