import Image from "next/image";
import React from "react";

export default function Card({ image, name, company, about }) {
  return (
    <div className="rounded w-full p-4 m-2 bg-white flex">
      <Image
        src={image}
        alt="speaker image"
        width={140}
        height={140}
        className="rounded-lg mt-4 w-20 h-20 md:w-36 md:h-36 md:p-0"
      />

      <div className="w-full flex flex-col">
        <div className="p-4 flex flex-col items-stretch md:flex-row md:justify-between">
          <p className="text-center text-c_navy font-bold font-inter text-lg  md:p-0">
            {name}
          </p>
          <p className="font-inter text-blue-700 pt-3 text-center">{company}</p>
        </div>
        <p className="px-3">{about}</p>
      </div>
    </div>
  );
}
