// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// import React from 'react'
// import NexcentLogo from '../assets/nexcent-logo.svg';

// const Navbar = () => {
//   return (
//     <div className='w-full h-[60px] lg:h-[85px] px-[15px] lg:px-[100px] py-[30px] flex justify-between items-center shadow-sm fixed top-0 left-0 bg-[#F5F7FA] z-50'>
//       <div className='w-full lg:w-[160px] h-auto lg:h-[25px] cursor-pointer'>
//         <img className='w-[110px] lg:w-[100%] h-auto lg:h-[100%] object-cover' src={NexcentLogo} alt="nexcent logo" />
//       </div>
//       <div className='w-[590px] h-[25px] lg:flex justify-between items-center hidden'>
//         <a className='text-[16px] leading-[24px] font-normal' href="#">Home</a>
//         <a className='text-[16px] leading-[24px] font-normal' href="#">Service</a>
//         <a className='text-[16px] leading-[24px] font-normal' href="#">Feature</a>
//         <a className='text-[16px] leading-[24px] font-normal' href="#">Product</a>
//         <a className='text-[16px] leading-[24px] font-normal' href="#">Testimonial</a>
//         <a className='text-[16px] leading-[24px] font-normal' href="#">FAQ's</a>
//       </div>
//       <div className='hidden lg:flex gap-x-[34px]'>
//         <button className='px-[20px] py-[10px] rounded-[6px] bg-transparent border border-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-white text-[#4CAF4F] text-[14px] font-medium'>
//           Login
//         </button>
//         <button className='px-[20px] py-[10px] rounded-[6px] bg-[#4CAF4F] hover:bg-[#388E3B] text-white text-[14px] font-medium'>
//           Sign up
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Navbar

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import NexcentLogo from '../assets/nexcent-logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full h-[60px] lg:h-[85px] px-[15px] lg:px-[100px] py-[30px] flex justify-between items-center shadow-sm fixed top-0 left-0 bg-[#F5F7FA] z-50'>
      <div className='w-full lg:w-[160px] h-auto lg:h-[25px] cursor-pointer'>
        <img className='w-[110px] lg:w-[100%] h-auto lg:h-[100%] object-cover' src={NexcentLogo} alt="nexcent logo" />
      </div>
      <div className='lg:hidden' onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div className={`w-full lg:w-auto lg:flex justify-between items-center lg:static absolute top-[60px] left-0 right-0 lg:h-auto h-[calc(100vh-60px)] bg-[#F5F7FA] lg:bg-transparent lg:shadow-none shadow-lg lg:p-0 p-5 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col lg:flex-row gap-x-0 lg:gap-x-[30px]'>
          <a className='text-[16px] leading-[24px] font-normal py-2 lg:py-0' href="#">Home</a>
          <a className='text-[16px] leading-[24px] font-normal py-2 lg:py-0' href="#">Service</a>
          <a className='text-[16px] leading-[24px] font-normal py-2 lg:py-0' href="#">Feature</a>
          <a className='text-[16px] leading-[24px] font-normal py-2 lg:py-0' href="#">Product</a>
          <a className='text-[16px] leading-[24px] font-normal py-2 lg:py-0' href="#">Testimonial</a>
          <a className='text-[16px] leading-[24px] font-normal py-2 lg:py-0' href="#">FAQ's</a>
        </div>
        <div className='flex lg:hidden flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-[34px] mt-5 lg:mt-0'>
          <button className='px-[20px] py-[10px] rounded-[6px] bg-transparent border border-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-white text-[#4CAF4F] text-[14px] font-medium'>
            Login
          </button>
          <button className='px-[20px] py-[10px] rounded-[6px] bg-[#4CAF4F] hover:bg-[#388E3B] text-white text-[14px] font-medium'>
            Sign up
          </button>
        </div>
      </div>
      <div className='hidden lg:flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-[34px] mt-5 lg:mt-0'>
          <button className='px-[20px] py-[10px] rounded-[6px] bg-transparent border border-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-white text-[#4CAF4F] text-[14px] font-medium'>
            Login
          </button>
          <button className='px-[20px] py-[10px] rounded-[6px] bg-[#4CAF4F] hover:bg-[#388E3B] text-white text-[14px] font-medium'>
            Sign up
          </button>
        </div>
    </div>
  );
}

export default Navbar;
