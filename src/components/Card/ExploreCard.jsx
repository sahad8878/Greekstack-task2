import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ExploreCard = ({ icon, heading }) => {
  return (
    <div class="relative bg-[#030a21] py-6 px-2 hover:shadow-lg hover:shadow-black  w-44 my-4 shadow-xl">
      <div class=" text-white flex items-center justify-start absolute rounded-full py-4 px-4 border border-black shadow-xl bg-white left-10 -top-10">
        <img src={icon} alt="narketing" className="h-14" />
      </div>
      <div class="mt-8 text-center">
        <p class="text-xl font-semibold my-2 text-white">{heading}</p>
        <p class="text-sm my-2 text-gray-500 items-center">
          see programs <FontAwesomeIcon icon={faArrowRight} size="xs" />
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
