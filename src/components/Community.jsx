/* eslint-disable no-unused-vars */
import React from 'react'
import People from '../assets/card-people.svg';
import Building from '../assets/card-building.svg';
import Hand from '../assets/card-hand.svg';


const Community = () => {

  const communityData = [
    {image: People, title: 'Membership Organisations', desc: 'Our membership management software provides full automation of membership renewals and payments'},
    {image: Building, title: 'National Associations', desc: 'Our membership management software provides full automation of membership renewals and payments'},
    {image: Hand, title: 'Clubs And Groups', desc: 'Our membership management software provides full automation of membership renewals and payments'}
  ]

  return (
    <div className='w-full py-0 lg:py-[10px] flex flex-col justify-center items-center'>
      <h2 className='w-full md:w-[545px] text-[28px] leading-[36px] lg:text-[36px] lg:leading-[44px] font-bold text-[#4D4D4D] text-center'>Manage your entire community in a single system</h2>
      <p className='text-[14px] leading-[18px] md:text-[16px] mt-[8px] md:mt-[16px] md:leading-[24px] fon-normal text-[#717171]'>Who is Nextcent suitable for?
      </p>
      <div className='w-full px-[145px] py-[12px] h-full md:h-[280px] flex flex-col md:flex-row justify-between items-center my-[15px] gap-[15px] md:gap-0'>
      {communityData.map((card, index) => (
          <div key={index} className='shadow-sm rounded-[8px] w-[260px] h-[260px] px-[10px] flex flex-col justify-center items-center gap-[16px]'>
            <img src={card.image} alt="community-images" style={{width: '65px', height: '56px'}} />
            <h3 className='text-center text-[28px] leading-[36px] text-[#4D4D4D] font-semibold'>{card.title}</h3>
            <p className='text-center text-[14px] leading-[20px] font-normal text-[#717171]'>{card.desc}</p>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default Community
