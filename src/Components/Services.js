import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
// import "./Clip.css"
import frieght from "../assets/container.jpg";
import inventory from "../assets/freight-forwarding.jpg";
import project from "../assets/project-cargo.jpg";
import service from "../assets/service-bg.jpg";

function Services() {
  return (
    <div
      name="services"
      class=" bg-cover bg-center"
      style={{ backgroundImage: `url(${service})` }}
    >
      {/* <div className=" w-full h-8 bg-[#152d4a]  mb-8 flex items-center justify-end"></div> */}
      <h1 class="text-5xl font-bold text-center mb-6 pt-6 text-white">
        Our Services
      </h1>
      <div class="flex items-center justify-center mx-auto py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4 items-center justify-items-center">
          <div class="bg-cover bg-center w-80 h-96 rounded-2xl shadow-xl flex items-center p-4 border-2 border-primary-dark bg-black bg-opacity-55">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-white my-3">
                CUSTOMS CLEARANCE
              </h2>
              <p class="text-base text-white text-justify px-4">
                Navigating through customs regulations can be complex, but our
                comprehensive customs clearance services simplify the process
                for you. We ensure that your shipments comply with all relevant
                laws and regulations, handling all necessary documentation and
                inspections.
              </p>
              <button className="border border-primary-dark w-24 h-7 align-bottom text-white rounded-md my-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                More Info
              </button>
            </div>
          </div>
          <div class="bg-cover bg-center w-80 h-96 rounded-2xl shadow-xl flex items-start p-4 border-2 border-primary-dark bg-black bg-opacity-55">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-white my-3">
                DOCUMENTATION HANDLING
              </h2>
              <p class="text-base text-white text-justify px-4">
                Efficient document handling is crucial for seamless logistics
                operations. Our expert team ensures meticulous management of all
                your shipping documents, from invoices to customs declarations.
                We provide end-to-end support verifying the accuracy and
                completeness of every document
              </p>
              <button className="border border-primary-dark w-24 h-7 text-white rounded-md my-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                More Info
              </button>
            </div>
          </div>
          <div class="bg-cover bg-center w-80 h-96 rounded-2xl shadow-xl flex items-start p-4 border-2 border-primary-dark bg-black bg-opacity-55">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-white my-3">TRANSPORTATION</h2>
              <p class="text-base text-white text-justify px-4">
                Our transportation services offer a seamless connection between
                your supply chain and your customers. We provide a range of
                transportation solutions tailored to your needs, ensuring timely
                delivery and safe handling of your goods.From small packages to
                large freight, our fleet is equipped to handle all types of
                shipments
              </p>
              <button className="border border-primary-dark w-24 h-7 text-white rounded-md my-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                More Info
              </button>
            </div>
          </div>
          <div class="bg-cover bg-center w-80 h-96 rounded-2xl shadow-xl flex items-start p-4 border-2 border-primary-dark bg-black bg-opacity-55">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-white my-3">LAND FREIGHT</h2>
              <p class="text-base text-white text-justify px-4">
                Our comprehensive land freight services provide efficient and
                cost-effective solutions for transporting your goods across
                various distances. Whether you're shipping domestically or
                internationally, we ensure that your cargo is delivered safely
                and on time. Our extensive network of carriers and robust
                logistics infrastructure
              </p>
              <button className="border border-primary-dark w-24 h-7 text-white rounded-md my-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                More Info
              </button>
            </div>
          </div>
          <div class="bg-cover bg-center w-80 h-96 rounded-2xl shadow-xl flex items-start p-4 border-2 border-primary-dark bg-black bg-opacity-55">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-white my-3">AIR FREIGHT</h2>
              <p class="text-base text-white text-justify px-4">
                Our air freight services offer unparalleled speed and
                efficiency, ensuring that your time-sensitive shipments reach
                their destination quickly and safely. With a global network of
                partners and a commitment to precision our team provides solutions to meet
                your specific needs.
              </p>
              <button className="border border-primary-dark w-24 h-7 text-white rounded-md my-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                More Info
              </button>
            </div>
          </div>
          <div class="bg-cover bg-center w-80 h-96 rounded-2xl shadow-xl flex items-start p-4 border-2 border-primary-dark bg-black bg-opacity-55">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-white my-3">SEA FREIGHT</h2>
              <p class="text-base text-white text-justify px-4">
                Sea freight remains one of the most cost-effective and reliable
                methods for transporting goods globally we specialize in
                optimizing sea freight logistics to meet your specific needs.
                our comprehensive sea freight services ensure efficient transit
                and timely delivery With a global network of partners and a
                commitment to quality
              </p>
              <button className="border border-primary-dark w-24 h-7 text-white rounded-md my-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
