/* eslint-disable no-unused-vars */
import React from 'react'
import NexcentLogo from '../assets/nexcent-logo-1.png';
import InstaLogo from '../assets/insta.svg';
import DribbleLogo from '../assets/dribble.svg';
import TwitterLogo from '../assets/twitter.svg';
import YoutubeLogo from '../assets/Social-Icons.svg';
import SendIcon from '../assets/send.svg';

const Footer = () => {
  return (
    <div className='w-full px-[15px] py-[50px] lg:py-[65px] lg:px-[165px] flex flex-col md:flex-row justify-start items-center gap-[30px] lg:gap-[125px] bg-[#263238]'>
      <div className='w-full md:w-[350px]'>
        <img src={NexcentLogo} alt="nexcent-logo" />
        <p className='text-[16px] leading-[24px] font-normal text-[#F5F7FA] my-[15px] lg:my-[40px]'>Copyright © 2020 Nexcent ltd. <br />All rights reserved</p>
        <div className='flex justify-start items-center gap-[16px]'>
          <div>
            <img className='cursor-pointer' src={InstaLogo} alt="social-logo" />
          </div>
          <div>
          <img className='cursor-pointer' src={DribbleLogo} alt="social-logo" />
          </div>
          <div>
          <img className='cursor-pointer' src={TwitterLogo} alt="social-logo" />
          </div>
          <div>
          <img className='cursor-pointer' src={YoutubeLogo} alt="social-logo" />
          </div>
        </div>
      </div>
      <div className='w-full lg:w-[635px] flex flex-col md:flex-row gap-x-[30px]'>
        <div className='w-full md:w-[160px] flex flex-col justify-start items-start gap-[8px] md:gap-[12px] mb-[20px] md:mb-0'>
          <h4 className='text-[20px] leading-[28px] font-semibold text-[#F5F7FA] mb-[8px] md:mb-[12px]'>Company</h4>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">About us</a>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">Blog</a>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">Contact us</a>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">Pricing</a>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">Testimonials</a>

        </div>
        <div className='w-full md:w-[160px] flex flex-col justify-start items-start gap-[8px] md:gap-[12px] mb-[20px] md:mb-0'>
          <h4 className='text-[20px] leading-[28px] font-semibold text-[#F5F7FA] mb-[12px]'>Support</h4>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">help center</a>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">Terms of service</a>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">Legal</a>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">Privacy policy</a>
          <a className='text-[16px] leading-[24px] font-normal text-[#F5F7FA]' href="#">Status</a>
        </div>
        <div className='w-full md:w-[255px] flex flex-col justify-start items-start gap-[10px] md:gap-[25px]'>
        <h4 className='text-[20px] leading-[28px] font-semibold text-[#F5F7FA] mb-[12px]'>Stay up to date</h4>
        <div className='w-full h-[40px] bg-zinc-600 rounded-[8px] flex justify-between items-center px-[14px]'>
        <input type="email" placeholder='Your email address' className='bg-transparent outline-none py-[10px] text-[14px] leading-[20px] font-normal text-[#D9DBE1]' />
        <img className='cursor-pointer' src={SendIcon} alt="send-icon" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
