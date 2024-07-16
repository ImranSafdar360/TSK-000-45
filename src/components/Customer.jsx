/* eslint-disable no-unused-vars */
import React from 'react'
import TeslaLogo from '../assets/tesla-logo.png'
import FanSvg from '../assets/client-flower.svg';
import EyeSvg from '../assets/client-eye.svg';
import OCSvg from '../assets/client-oc.svg';
import IpsumSvg from '../assets/logo-ipsum.svg';
import RoundLineSvg from '../assets/round-line.svg';
import ZigZagSvg from '../assets/zig-zag.svg';

const Customer = () => {
  return (
    <div className='w-full py-[15px] md:py-[35px] px-0 lg:px-[145px] flex flex-col md:flex-row justify-start items-center gap-[0px] md:gap-[75px] bg-[#F5F7FA]'>
      <img className='w-full h-full md:h-[326px] md:w-[326px]' src={TeslaLogo} alt="tesla-logo" />
      <div className='w-full h-full md:h-[325px] flex flex-col justify-center items-start gap-[10px] md:gap-[16px] px-[15px] md:px-0'>
        <p className='text-justify md:text-start text-[14px] leading-[18px] md:text-[16px] md:leading-[24px] font-normal text-[#717171]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
        <h4 className='text-[18px] leading-[22px] md:text-[20px] md:leading-[28px] font-semibold text-[#4CAF4F]'>Tim Smith</h4>
        <p className='text-[14px] leading-[18px] md:text-[16px] lg:leading-[24px] font-normal text-[#717171]'>British Dragon Boat Racing Association</p>
        <div className='w-full py-[20px] md:py-[0px] md:px-0 flex justify-center md:justify-between items-center flex-wrap gap-x-[40px] gap-y-[10px] md:gap-x-[0px] md:gap-y-[0px]'>
          <img src={FanSvg} alt="" />
          <img src={EyeSvg} alt="" />
          <img src={OCSvg} alt="" />
          <img src={IpsumSvg} alt="" />
          <img src={RoundLineSvg} alt="" />
          <img src={ZigZagSvg} alt="" />
          <a className='text-[18px] lg:text-[20px] leading-[28px] font-semibold text-[#4CAF4F]' href="#">Meet all customers</a>
        </div>
      </div>
    </div>
  )
}

export default Customer
