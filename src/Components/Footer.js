import React from "react";
import { Link } from "react-scroll";
import location from "../assets/loc.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="w-full md:h-[400px] h-full bg-[#e7f0f8] flex flex-col justify-center">
      <div className="grid grid-cols-2 ml-7 mt-7 md:mt-0 md:ml-0 md:flex flex-row md:justify-evenly text-[#162c53]">
        <div className="flex flex-col ">
          <h1 className="md:text-2xl text-lg  font-semibold mb-3">
            Quick Links
          </h1>
          <Link to="home" smooth="true" duration={500}>
            <h1 className="mb-2 font-medium md:text-base text-xs cursor-pointer hover:text-[#ff3841]">
              Home
            </h1>
          </Link>
          <Link to="about" smooth="true" duration={500}>
            <h1 className="mb-2 font-medium md:text-base text-xs cursor-pointer hover:text-[#ff3841]">
              About Us
            </h1>
          </Link>
          <Link to="services" smooth="true" duration={500}>
            <h1 className="mb-2 font-medium md:text-base text-xs cursor-pointer hover:text-[#ff3841]">
              Services
            </h1>
          </Link>
          <Link to="careers" smooth="true" duration={500}>
            <h1 className="mb-2 font-medium md:text-base text-xs cursor-pointer hover:text-[#ff3841]">
              Contact US
            </h1>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="md:text-2xl text-lg  font-medium mb-3">Services</h1>
          <h1 className="mb-2 font-medium md:text-base text-xs">
            Frieght Forwarding
          </h1>
          <h1 className="mb-2 font-medium md:text-base text-xs">
            Inventory Managment
          </h1>
          <h1 className="mb-2 font-medium md:text-base text-xs">
            Project Cargo Logistics
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="md:text-2xl text-lg font-medium mb-3">Contact US</h1>
          <div className="flex items-center mb-3">
            <img src={location} className="md:w-6 w-4 md:h-5 h-3" />
            <h1 className="font-medium md:text-base text-xs">
              Bur Dubai , Dubai Customs - Al Mina Road - Dubai Al Fardha - Block
              B Office 47
            </h1>
          </div>
          <div className="flex items-center mb-3">
            <img src={phone} className="md:w-6 w-4 md:h-5 h-3" />
            <h1 className="font-medium md:text-base text-xs">+971 4 2356426</h1>
          </div>
          <div className="flex items-center mb-3">
            <img src={mail} className="md:w-6 w-4 md:h-5 h-3 mr-2 " />
            <h1 className="font-medium md:text-base text-xs">info@</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="md:text-2xl text-lg font-medium mb-3">Follow US</h1>
          <div className="flex">
            <img src={fb} className="md:w-6 w-4 md:h-6 h-4 mr-2" />
            <img src={insta} className="md:w-6 w-4 md:h-6 h-4 mr-2" />
            <img src={twitter} className="md:w-6 w-4 md:h-6 h-4 mr-0" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="border-b border-zinc-400 mt-20 w-[75%] mb-10"></div>
        <div className="text-[#162c53] font-medium text-[11px] mb-4 md:mb-0 sm:text-lg">
          © 2024
        </div>
      </div>
    </div>
  );
}

export default Footer;
