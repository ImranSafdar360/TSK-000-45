/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSvg from '../assets/heroSection-svg.svg';
import DotSvg from '../assets/Dot.svg';

const HeroSection = () => {
  return (
    <div className='w-full min-h-[100vh] bg-[#F5F7FA] flex flex-col md:flex-row justify-center gap-[30px] lg:gap-[105px] items-center relative pt-[120px] pb-[60px] lg:pt-0 px-[15px] lg:px-0'>
      <div className='w-full md:w-[660px] h-auto md:h-[276px]'>
        <h1 className='text-[32px] leading-[38px] lg:text-[64px] lg:leading-[76px] font-bold text-[#4D4D4D]'>Lessons and insights <br /> <span className='text-[#4CAF4F]'>from 8 years</span></h1>
        <p className='mt-[8px] lg:mt-[16px] mb-[16px] lg:mb-[32px] text-[14px] leading-[18px] lg:text-[16px] lg:leading-[24px] text-black font-normal'>Where to grow your business as a photographer: site or social media?</p>
        <button className='px-[16px] py-[8px] lg:px-[30px] lg:py-[13px] rounded-[6px] bg-[#4CAF4F] hover:bg-[#388E3B] text-white text-[12px] lg:text-[14px] font-medium'>
          Register
        </button>
      </div>
      <div className='w-full h-auto md:w-[390px] md:h-[405px]'>
        <img src={HeroSvg} alt="hero-section svg" style={{width: '100%', height: '100%'}} />
      </div>
      <img className='w-[46px] h-[10px] absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2' src={DotSvg} alt="Dot-svg" />
    </div>
  )
}

export default HeroSection
