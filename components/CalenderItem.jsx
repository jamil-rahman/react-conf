import Link from "next/link";
import React from "react";

export default function CalenderItem({ title, time, date, id }) {
  return (
    <div className="flex flex-col p-4 justify-center w-full">
      <Link key={id} href={`/conference/${id}`}>
        <p className="text-center font-inter w-full text-c_navy font-bold">
          {date}
        </p>

        <div className="flex justify-evenly flex-col border border-c_yellow rounded-lg w-full bg-c_background pt-2 pb-2">
          <p className="text-c_brown-100 font-bold font-inter">{title}</p>
          <p className="pt-10 font-inter font-normal text-c_brown-200 text-sm ">
            {time}
          </p>
        </div>
      </Link>
    </div>
  );
}
