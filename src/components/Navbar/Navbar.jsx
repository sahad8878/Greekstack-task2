import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className='flex flex-col py-3 sm:py-0 sm:flex-row space-y-4 sm:space-y-0 justify-around bg-[#03081c] items-center  sm:h-20  text-white'>
       <div className='space-x-7 '>
        <span className='border border-gray-700 px-7 py-1 hover:rounded-br-none hover:text-slate-300 hover:rounded-ss-none  cursor-pointer rounded-ss-full rounded-br-full '>Learn <FontAwesomeIcon icon={faChevronDown} size="2xs" style={{color: "#f4f5f5",}} /></span>
        <span className='cursor-pointer hover:text-slate-300'>For Teams</span>
        <span className='cursor-pointer hover:text-slate-300'>About</span>   
       </div>
       <div className='space-x-7'>
         <span className='border border-gray-700 px-6 hover:text-slate-300  py-1 hover:rounded-br-none hover:rounded-ss-none rounded-ss-full cursor-pointer  rounded-br-full'>Login</span>
         <span className='border border-gray-700 px-6 hover:text-slate-300 py-1 hover:rounded-br-none hover:rounded-ss-none rounded-ss-full cursor-pointer rounded-br-full'>Apply as Mentor</span>
       </div>
    </div>
  )
}

export default Navbar
