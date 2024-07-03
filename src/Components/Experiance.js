import React from "react";

function Experiance() {
  return (
    <div name="about" className="bg-secondary-light h-screen md:h-[250px] flex flex-col md:flex-row gap-5 justify-center items-center md:p-2 py-7 text-secondary-dark">
      <div className="bg-white rounded-2xl w-56 h-40 flex flex-col items-center justify-center shadow-xl ">
        <h1 className="font-extrabold text-4xl tracking-normal">50K+</h1>
        <h5 className="font-bold my-2">Completed Shipment</h5>
      </div>
      <div className="bg-white rounded-2xl w-56 h-40 flex flex-col items-center justify-center shadow-xl ">
        <h1 className="font-extrabold text-4xl tracking-normal">13</h1>
        <h5 className="font-bold my-2">Years of Experiment</h5>
      </div>
      <div className="bg-white rounded-2xl w-56 h-40 flex flex-col items-center justify-center shadow-xl ">
        <h1 className="font-extrabold text-4xl tracking-normal">50+</h1>
        <h5 className="font-bold my-2">Team Members</h5>
      </div>
      <div className="bg-white rounded-2xl w-56 h-40 flex flex-col items-center justify-center shadow-xl ">
        <h1 className="font-extrabold text-4xl tracking-normal">99%</h1>
        <h5 className="font-bold my-2">Satisfied Customers</h5>
      </div>
    </div>
  );
}

export default Experiance;
