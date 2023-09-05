import React from 'react'
import chatgptlog from '../../assets/chatgpt.png'
const Header = () => {
  return (
<div className='bg-[#ffdb4d] p-2 items-center w-screen'>
  <div className='overflow-x-auto space-x-6 whitespace-nowrap flex no-scrollbar ' >
    <div className='flex items-center space-x-1'> <img src={chatgptlog} alt="chat gpt" className='h-5' /> <span>Unlock the power of AI using ChatGPT</span></div>
    <div className='flex items-center space-x-1'> <img src={chatgptlog} alt="chat gpt" className='h-5' /> <span>Fresh Out: Our best kept secrets in ChatGPT Workshop</span></div>
    <div className='flex items-center space-x-1'> <img src={chatgptlog} alt="chat gpt" className='h-5' /> <span>Unlock the power of AI using ChatGPT</span></div>
    <div className='flex items-center space-x-1'> <img src={chatgptlog} alt="chat gpt" className='h-5' /> <span>Fresh Out: Our best kept secrets in ChatGPT Workshop</span></div>

  </div>
</div>
  )
}

export default Header
