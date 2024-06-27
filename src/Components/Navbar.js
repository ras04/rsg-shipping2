import React, { useState } from "react";
import logo from "../assets/RSG_LOGO_page-0001-removebg-preview.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [bar, setBar] = useState(false);
  const handleClick = () => {
    setBar(!bar);
  };
  return (
    <div className="fixed flex justify-around px-4  w-full  h-[100px] mx-auto bg-white">
      <div className="flex justify-center items-center">
        <img src={logo} className="md:w-28 h-28" />
      </div>
      <ul className="hidden md:flex flex-row font-header justify-center items-center text-black">
        <Link to="home" smooth="true" duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth="true" duration={500}>
          <li>About Us</li>
        </Link>
        <Link to="services" smooth="true" duration={500}>
          <li className="flex items-center">Services</li>
        </Link>
        <Link to="contact" smooth="true" duration={500}>
          <li>Conatct us</li>
        </Link>
      </ul>

      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer flex justify-center items-center"
      >
        {!bar ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !bar
            ? "hidden"
            : "absolute top-0 left-0 w-[300px] h-[400px] bg-primary-dark flex flex-col justify-center items-center"
        }
      >
        <li
          className="py-6 text-4x
        "
        >
          Home
        </li>
        <li
          className="py-6 text-4x
        "
        >
          About Us
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Services
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Contact Us
        </li>
      </ul>
    </div>

    // <div className="flex justify-between">
    //   <div className="mx-auto flex justify-between items-center max-w-[1400px]">
    //     <img src={logo} className="w-28 h-28" />
    //     <ul className="hidden md:flex">
    //       <li className="p-4">Home</li>
    //       <li className="p-4">About</li>
    //       <li className="p-4">Services</li>
    //       <li className="p-4">Contact Us</li>
    //     </ul>
    //   </div>

    //   <div
    //     onClick={handleClick}
    //     className="md:hidden z-10 cursor-pointer flex justify-center items-center"
    //   >
    //     {!bar ? <FaBars /> : <FaTimes />}
    //   </div>

    //   <ul
    //     className={
    //       !bar
    //         ? "hidden"
    //         : "absolute top-0 left-0 w-[300px] h-[400px] bg-[#201c1c] flex flex-col justify-center items-center"
    //     }
    //   >
    //     <li className="p-4">Home</li>
    //     <li className="p-4">About</li>
    //     <li className="p-4">Services</li>
    //     <li className="p-4">Contact Us</li>
    //   </ul>
    // </div>
  );
}

export default Navbar;
