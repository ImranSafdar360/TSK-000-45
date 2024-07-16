/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


const Experience = ({svg, title, desc}) => {
  return (
    <div className='w-full py-[15px] md:py-[63px] flex flex-col-reverse md:flex-row justify-center items-center gap-[30px] lg:gap-[100px] px-[15px] md:px-0'>
      <div className='w-full md:w-[440px] h-[310px] flex justify-center items-center'>
        <img src={svg} alt="experience-image" />
      </div>
      <div className='w-full md:w-[600px] h-[270px]'>
        <h2 className='text-[26px] leading-[34px] lg:text-[36px] lg:leading-[44px] font-bold text-[#4D4D4D]'>{title}</h2>
        <p className='mt-[8px] mb-[14px] md:my-[16px] text-[14px] leading-[18px] lg:text-[14px] lg:leading-[20px] font-normal text-[#717171]'>{desc}</p>
        <button className='px-[20px] py-[8px] md:px-[30px] md:py-[13px] rounded-[6px] bg-[#4CAF4F] hover:bg-[#388E3B] text-white text-[12px] md:text-[14px] font-medium'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Experience
