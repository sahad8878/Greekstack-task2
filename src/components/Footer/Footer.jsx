import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex flex-col bg-[#03081c] px-10 sm:px-10  md:px-28 lg:px-48 sm:pt-16  cursor-default">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 ">
        <div className="md:flex md:justify-between md:space-x-10 mb-20 ">
          <div className="mb-6 md:mb-0 space-y-7 md:w-[50%]">
            <h1 className="text-lg text-white font-medium ">
              Best kept secrets
            </h1>
            <p className="text-gray-400">
              Be the first to find out about the newest programs, workshops, and
              community activities plus industry news, articles, and special
              reports. All delivered to your inbox!
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 ">
              <div className="rounded-ss-2xl  border w-full  border-black pb-0.5  bg-white rounded-br-2xl ">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className=" bg-white border w-full border-black text-black -mt-1 -ml-1  px-7 py-2 rounded-ss-2xl rounded-br-2xl"
                />
              </div>
              <button className="rounded-ss-2xl pr-0.5 pb-0.5 hover:pr-0 hover:pb-0  bg-white rounded-br-2xl ">
                <button className="bg-[#37ed81] font-medium text-black -mt-1 -ml-1 hover:text-white    w-full sm:w-28 h-10 rounded-ss-2xl rounded-br-2xl">
                  Subscribe <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </button>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:w-[50%] gap-8 sm:gap-2 sm:grid-cols-4">
            <div>
              <h2 className="mb-6  text-base text-white font-medium ">
                Industries
              </h2>
              <ul className="text-gray-400 text-xs font-medium space-y-4">
                <li className="mb-4">
                  <span className="hover:underline cursor-pointer">
                    Marketing
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Product
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">Design</span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Business
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Tech & Data
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-basae text-white font-medium ">Roles</h2>
              <ul className="text-gray-400 text-xs font-medium space-y-4">
                <li className="mb-4">
                  <span className="hover:underline cursor-pointer ">
                    Personal Growth
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Founders
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base text-white font-medium">Engage</h2>
              <ul className="text-gray-400 text-xs font-medium space-y-4">
                <li className="mb-4">
                  <span className="hover:underline cursor-pointer">
                    ------------ for Teams
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Learner s Center
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Newsletter Vault
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Apply as Mentor{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base text-white font-medium">Company</h2>
              <ul className="text-gray-400 text-xs font-medium space-y-4">
                <li className="mb-4">
                  <span className="hover:underline cursor-pointer">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Careers
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Contact Us
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Refund Policy
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Terms &amp; Conditions
                  </span>
                </li>
                <li>
                  <span className="hover:underline cursor-pointer">
                    Privacy Policy{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600 sm:mx-auto  lg:my-8" />
        <div className="sm:flex mb-4 sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            2023 Sisinty Pvt. Ltd. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
