import React from "react";
import ManImage from "../assets/png/man-image.png";
import SearchIcon from "../assets/svg/search-icon.svg";
import Logo1 from "../assets/svg/EY Logo 1.svg";
import Logo2 from "../assets/svg/dummy-logo-1b.svg";
import Logo3 from "../assets/svg/dummy-logo-2b.svg";
import Circle from "../assets/svg/circle.svg";

export default function Section() {
  return (
    <div className="flex items-center justify-center w-full bg-gradient-to-b from-[#5798C01A] to-[#ffffff] relative">
      {/* circle image */}
      <img
        className="absolute -left-[600px] -top-[80px] w-full h-full z-[0]"
        src={Circle}
        alt="circle"
      />
      <div className="relative top-0 left-0 max-w-6xl py-20 w-full h-full flex items-center justify-between">
        {/* Image */}
        <div className="h-full">
          <img
            className={`z-[11] h-fit w-[450px] border-4 border-[#FFFFFF] rounded-2xl`}
            src={ManImage}
            alt="man"
          />
        </div>

        {/* search, logos and text */}
        <div className="w-1/2 py-4">
          {/* heading */}
          <h1 className={`text-[#1b1b1b] font-bold text-[60px]`}>
            Law For Me helps you{" "}
            <span className={`text-[#1FAAFF]`}>understand</span> the law
          </h1>

          {/* subheading */}
          <h2 className={`text-[#1B1B1B] text-base mt-6`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
            scelerisque faucibus nunc, turpis metus volutpat ac tristique non.
            Ultricies faucibus amet,
          </h2>

          {/* search */}
          <div
            className={`rounded-lg bg-[#E4F5FF] border-[3px] border-white w-full flex items-center justify-between py-2 px-3 mt-6`}
            style={{ boxShadow: `0px 60px 80px rgba(87, 152, 192, 0.1)` }}
          >
            <input
              type={"search"}
              className="w-full ml-6 bg-transparent outline-none border-none text-base text-[#2D2347] placeholder:text-[#2D2347]"
              placeholder="Search documents and topics..."
            />
            <button
              type={"button"}
              className={`ml-6 p-[15px] text-[#FFFFFF] flex items-center rounded-lg bg-gradient-to-b from-[#FF17B3] to-[#DA189B]`}
            >
              <img src={SearchIcon} alt="search" className="h-full w-9" />
            </button>
          </div>

          {/* Logos */}
          <div className="mt-6 flex items-end justify-between">
            <div className={`text-[#2D2347] text-base mr-4 mb-[2px]`}>
              Working With
            </div>

            <div className="mr-4">
              <img src={Logo1} alt="logo" className="h-full w-24" />
            </div>
            <div className="mr-4 -mb-[11px]">
              <img src={Logo2} alt="logo" className="h-full w-28" />
            </div>
            <div className="-mb-[11px]">
              <img src={Logo3} alt="logo" className="h-full w-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
