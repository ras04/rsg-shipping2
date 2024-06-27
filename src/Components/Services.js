import React from "react";
import frieght from "../assets/FREIGHT.png";
import inventory from "../assets/INVENTORY.png";
import project from "../assets/PROJECT.png";

function Services() {
  return (
    <div
      name="services"
      class="md:h-screen bg-white flex items-center justify-center"
    >
      <div class=" px-0">
        <h1 class="mb-10 text-3xl font-bold sm:text-4xl lg:text-5xl text-center text-secondary-dark">
          Services
        </h1>
        <div class="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="lg:w-80 w-60 ">
            <img src={frieght} className=" rounded-2xl" />
            <h4 className="py-3 font-bold text-secondary-dark text-xl">
              Frieght Forwarding
            </h4>
            <p className="text-secondary-dark">
              Freight forwarders provide a seamless and hassle-free shipping
              experience, ensuring your products reach their destination safely
              and on time.
            </p>
            <h4 className="text-primary-dark font-bold py-2 cursor-pointer underline">
              Learn More
            </h4>
          </div>
          <div className="lg:w-80 w-60">
            <img src={inventory} className=" rounded-2xl" />
            <h4 className="py-3 font-bold text-secondary-dark text-xl">
              Inventory Managment
            </h4>
            <p className="text-secondary-dark">
              Efficiently manage your stock with our advanced inventory
              management solutions. Ensure optimal stock levels, streamline
              order processing
            </p>
            <h4 className="text-primary-dark font-bold py-2 cursor-pointer underline">
              Learn More
            </h4>
          </div>
          <div className="lg:w-80 w-60">
            <img src={project} className=" rounded-2xl" />
            <h4 className="py-3 font-bold text-secondary-dark text-xl">
              Project Cargo Logistics
            </h4>
            <p className="text-secondary-dark">
              Ensure the seamless transport of your large,heavy,and high-value
              shipments with our expert project cargo logistics services.we
              handle every aspect to guarantee safe
            </p>
            <h4 className="text-primary-dark font-bold py-2 cursor-pointer underline">
              Learn More
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
