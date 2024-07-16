/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import BlogFirst from '../assets/blog-1.jpg';
import BlogSecond from '../assets/blog-2.jpg';
import BlogThird from '../assets/blog-3.jpg';

const BlogSection = () => {

  const blogCard = [
    {image: BlogFirst, title: 'Creating Streamlined Safeguarding Processes with OneRen'},
    {image: BlogSecond, title: 'What are your safeguarding responsibilities and how can you manage them?'},
    {image: BlogThird, title: 'Revamping the Membership Model with Triathlon Australia'}
  ]

  return (
    <div className='w-full py-[5px] md:py-[15px] flex flex-col justify-center items-center px-[15px] md:px-0'>
      <h2 className='text-[28px] leading-[36px] lg:text-[36px] lg:leading-[44px] font-bold text-[#4D4D4D] text-center md:text-start'>Caring is the new marketing</h2>
      <p className='text-center px-0 lg:px-[220px] text-[14px] leading-[18px] lg:text-[16px] lg:leading-[24px] font-normal text-[#717171] my-[8px] md:my-[16px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
      <div className='w-full flex flex-col md:flex-row justify-center items-center gap-[25px] md:px-[145px] px-[0px] my-[15px] md:py-[0px]'>
        {blogCard.map((card, index)=>(
          <div key={index} className='w-full md:w-[370px] h-[365px] relative'>
            <img src={card.image} alt="blog-image" className='w-full h-[285px] rounded-[8px]'/>
            <div className='w-[85%] md:w-[300px] h-[175px] text-center p-[16px] absolute top-[190px] left-1/2 -translate-x-1/2 rounded-[8px] bg-[#F5F7FA] shadow-md'>
            <h4 className='mb-[25px] text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px] font-semibold text-[#717171]'>Creating Streamlined Safeguarding Processes with OneRen</h4>
            <a className='text-[14px] lg:text-[16px] leading-[24px] font-bold text-[#4CAF4F]' href="#">Readmore →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSection
