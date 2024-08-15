import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#E8E8EA] ">
      <div className="w-5/6 m-auto flex justify-between py-6 border-b-2 border-[#DCDDDF]">
        <div className="w-60 flex flex-col gap-2">
          <h6 className="text-lg font-semibold">About</h6>
          <p className="text-sm font-normal text-[#3B3C4A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="text-[#3B3C4A] text-sm">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2 text-[#3B3C4A]">
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-2 text-lg text-[#6D6E76]">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="w-5/6 m-auto flex justify-between py-2 items-center">
        <img className="w-[231px] h-[54px]  m-" src="/images/Logo.png" alt="" />
        <ul className="flex  gap-4 text-[#3B3C4A]">
          <li>Term of Use</li>
          <li className="border-x-4 px-4 border-[#E8E8EA]">Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
