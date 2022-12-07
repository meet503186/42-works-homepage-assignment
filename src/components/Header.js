import React from "react";
import TagIcon from "../assets/svg/tag-icon.svg";
import FacebookIcon from "../assets/svg/facebook-icon.svg";
import LinkedinIcon from "../assets/svg/linkedin-icon.svg";
import TwitterIcon from "../assets/svg/twitter-icon.svg";
import InstaIcon from "../assets/svg/insta-icon.svg";
import Logo from "../assets/svg/logo.svg";
import CartIcon from "../assets/svg/cart-icon.svg";
import UserIcon from "../assets/svg/user-icon.svg";
import { colors } from "../shared/Utils";

export default function Header() {
  // styles
  const socialMediaIcons = "h-full w-6 ml-4 cursor-pointer";
  const contactLinks = "ml-2 cursor-pointer";

  return (
    <div className="w-full relative z-[11]">
      {/* offers and social media section */}
      <div
        className={`py-2 w-full flex items-center justify-center`}
      >
        <div className="max-w-6xl bg-transparent w-full flex items-center justify-between">
          {/* offer text */}

          <div className="flex items-center">
            <img src={TagIcon} alt="tag" className="h-full w-5 mr-2" />
            <p className={`text-sm text-[#2D2347]`}>
              Some Offer / CTA goes here / Lorem Ipsum
            </p>
          </div>

          {/* social media */}
          <div>
            <ul
              className={`flex list-none items-center text-base text-[#1B1B1B]`}
            >
              <li className={contactLinks}>Who We Are</li>
              <li className={contactLinks}>Contact Us</li>
              <img
                src={FacebookIcon}
                alt="facebook"
                className={`${socialMediaIcons}`}
              />
              <img
                src={LinkedinIcon}
                alt="facebook"
                className={`${socialMediaIcons}`}
              />
              <img
                src={TwitterIcon}
                alt="facebook"
                className={`${socialMediaIcons}`}
              />
              <img
                src={InstaIcon}
                alt="facebook"
                className={`${socialMediaIcons}`}
              />
            </ul>
          </div>
        </div>
      </div>

      {/* logo and links section */}
      <div
        className={`py-4 w-full flex items-center justify-center bg-[#FFFEFF] shadow-md`}
      >
        <div className="max-w-6xl w-full flex items-center justify-between">
          {/* Services */}
          <div className={`text-[#1b1b1b] flex items-center`}>
            <div className="mr-2">
              <select className="border-none text-base outline-none bg-transparent">
                <option defaultChecked>Legal Documents</option>
              </select>
            </div>
            <div className="mr-2">
              <select className="border-none text-base outline-none bg-transparent">
                <option defaultChecked>Legal Documents</option>
              </select>
            </div>
            <div className="mr-2">Subscription Plans</div>
          </div>

          {/* Logo */}
          <div>
            <img src={Logo} alt="logo" className="h-full w-40" />
          </div>

          {/* User Account and other info */}
          <div className={`flex items-center text-base text-[#1b1b1b]`}>
            <p className="ml-4 cursor-pointer">Blog Name Here</p>
            <p className="ml-4 cursor-pointer">Meet the Lawyers</p>
            <div className="ml-4 relative">
              <span
                className={`bg-[#1FAAFF] rounded-full w-[18px] h-[18px] flex items-center justify-center absolute -top-[11px] -right-[10px] font-medium text-xs text-[#ffffff]`}
              >
                0
              </span>
              <img src={CartIcon} alt="cart" className="h-full w-5" />
            </div>
            <button
              type={"button"}
              className={`ml-6 p-[15px] text-[#FFFFFF] flex items-center rounded-lg bg-gradient-to-b from-[#FF17B3] to-[#DA189B]`}
            >
              <img src={UserIcon} alt="user" className="h-full w-7" />
              <span className="text-sm font-medium ml-2">My Legal Hub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
