/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import PeopleIcon from "../assets/people-icon.png";
import CollabIcon from "../assets/collab-hand.png";
import IdeaIcon from "../assets/idea-icon.png";
import WalletIcon from "../assets/wallet.png";

const Business = () => {
  const businessData = [
    [
      { image: PeopleIcon, totalNumber: "2,245,341", name: "Members" },
      { image: CollabIcon, totalNumber: "46,328", name: "Clubs" },
    ],
    [
      { image: IdeaIcon, totalNumber: "828,867", name: "Event Bookings" },
      { image: WalletIcon, totalNumber: "19,26,436", name: "Payments" },
    ],
  ];

  return (
    <div className="w-full pt-[35px] pb-[10px] md:py-[65px] bg-[#F5F7FA] flex flex-col justify-center items-center px-[15px]">
      <div className="w-full md:w-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[540px] h-auto">
          <h2 className="text-[28px] leading-[34px] lg:text-[36px] lg:leading-[44px] font-bold text-[#4D4D4D]">
            Helping a local <br />{" "}
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h2>
          <p className="text-[14px] md:text-[16px] leading-[18px] md:leading-[24px] font-normal text-[#18191F] mt-[5px] md:mt-[8px]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="w-full md:w-[540px] h-auto flex flex-col gap-y-0 md:gap-y-[40px] my-[15px] md:my-0">
          {businessData.map((row, index) => (
            <div key={index} className="w-full md:w-auto flex flex-col md:flex-row justify-between items-end md:items-center md:gap-x-[30px]">
              {row.map((item, i) => (
                <div key={i} className="w-full md:w-[255px] h-[60px] flex gap-x-[30px] md:gap-x-[10px] mb-[15px]">
                  <img
                    src={item.image}
                    alt="business-logo"
                    style={{ width: "48px", height: "48px" }}
                  />
                  <div className="w-full">
                    <h3 className="text-[28px] leading-[36px] font-semibold text-[#4D4D4D]">
                      {item.totalNumber}
                    </h3>
                    <p className="text-[16px] leading-[24px] font-normal text-[#717171]">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
