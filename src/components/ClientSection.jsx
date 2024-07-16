// eslint-disable-next-line no-unused-vars
import React from 'react'
import FanSvg from '../assets/client-flower.svg';
import EyeSvg from '../assets/client-eye.svg';
import OCSvg from '../assets/client-oc.svg';
import IpsumSvg from '../assets/logo-ipsum.svg';
import RoundLineSvg from '../assets/round-line.svg';
import ZigZagSvg from '../assets/zig-zag.svg';

const ClientSection = () => {
  return (
    <div className='w-full py-[15px] lg:py-[40px] flex flex-col justify-center items-center text-center px-[15px]'>
      <h2 className='text-[30px] leading-[38px] lg:text-[36px] lg:leading-[44px] font-semibold text-[#4D4D4D]'>Our Clients</h2>
      <p className='mt-[8px] mb-[16px] text-[14px] leading-[18px] lg:text-[16px] lg:leading-[24px] font-normal text-[#717171]'>We have been working with some Fortune 500+ clients</p>
      <div className='w-full lg:w-[1100px] flex justify-between items-center flex-wrap gap-x-[25px] gap-y-[10px]'>
        <img className='w-[48px] h-[48px]' src={FanSvg} alt="client-svgs" />
        <img className='w-[48px] h-[48px]' src={EyeSvg} alt="client-svgs" />
        <img className='w-[48px] h-[48px]' src={OCSvg} alt="client-svgs" />
        <img className='w-[48px] h-[48px]' src={IpsumSvg} alt="client-svgs" />
        <img className='w-[48px] h-[48px]' src={RoundLineSvg} alt="client-svgs" />
        <img className='w-[48px] h-[48px]' src={ZigZagSvg} alt="client-svgs" />
        <img className='w-[48px] h-[48px]' src={OCSvg} alt="client-svgs" />
      </div>
    </div>
  )
}

export default ClientSection
