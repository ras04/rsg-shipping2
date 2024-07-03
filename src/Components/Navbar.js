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
      <div className=" fixed flex justify-around px-4  w-full  h-[125px] mx-auto bg-white">
        <div className="flex justify-center items-center">
          <img src={logo} className="md:w-44 h-44" />
          {/* <h2>Rashid Al Suadi</h2> */}
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
          <Link to="mail" smooth="true" duration={500}>
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
              : "absolute top-0 left-0 w-[300px] h-[400px] bg-primary-dark bg-opacity-95 flex flex-col justify-center items-center rounded-b-2xl"
          }
        >
          <li
            className="py-6 text-4x hover:text-white
        "
          >
            <Link to="home" smooth="true" duration={500}>
              Home
            </Link>
          </li>
          <li
            className="py-6 text-4x hover:text-white
        "
          >
            <Link to="about" smooth="true" duration={500}>
              About Us
            </Link>
          </li>
          <li
            className="py-6 text-4x hover:text-white
        "
          >
            <Link to="services" smooth="true" duration={500}>
              Services
            </Link>
          </li>
          <li
            className="py-6 text-4x hover:text-white
        "
          >
            <Link to="mail" smooth="true" duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
  );
}

export default Navbar;
