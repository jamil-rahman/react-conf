import Image from "next/image";
import React from "react";
import image_1 from "../public/mic_guy.png";
export default function HomeBanner() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-100 md:w-2/4 md:float-left">
        <div className="border-4 border-emerald-700 m-0 p-6">
          <p className="text-end text-c_navy font-inter font-bold text-xl md:text-2xl">
            React
          </p>
          <p className="text-end text-c_navy font-inter font-bold text-xl md:text-2xl">
            Conference
          </p>

          <div className="flex flex-col md:flex-row">
            <div className="md:float-left flex justify-center items-center md:w-1/2">
              <Image src={image_1} alt="guy with mic" sizes="100vw" />
            </div>

            <div className="mt-4  md:w-1/2 md:float-right">
              <p className="font-inter">
                Lorem uis diam turpis quam id fermentum. In quis diam turpis
                quam id fermentum..id fermentum. In quis diam turpis quam id
                fermentum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 md:w-2/4 md:float-left">
        <div className="border-4 border-red-700  ">Right</div>
      </div>
    </div>
  );
}
