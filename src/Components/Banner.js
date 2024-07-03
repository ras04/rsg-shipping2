import React from "react";
import bg from "../assets/container.jpg";
import { Link } from "react-scroll";

function Banner() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-cover bg-center flex  items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-primary-light flex flex-col items-center">
        <h1 className="text-3xl md:text-7xl font-extrabold">Elevating Logistics</h1>
        <h1 className="text-3xl md:text-7xl font-extrabold py-4">to New Heights</h1>
        <h4 className="hidden md:block text-xl font-semibold text-gray-300 ">
          We are the name of the game when it comes to moving things to moving
          from point A to B
        </h4>
        <div className="py-6 font-semibold">
          <Link  to="mail" smooth="true" duration={500}>
          <button className="bg-primary-dark md:w-36 w-28 md:h-12 h-9  mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            Contact Us
          </button>
          </Link>
          <Link to="services" smooth="true" duration={500}>
          <button className="border border-white md:w-36 w-28 md:h-12 h-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            Services
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
