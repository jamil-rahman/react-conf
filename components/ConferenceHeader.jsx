import React from "react";

export default function ConferenceHeader({ title, content }) {
  return (
    <div className="w-100 pt-10 mt-8 md:pl-20 mx-5 flex flex-col">
      <div>
        <p className="text-c_navy font-inter font-bold text-lg md:text-xl">
          {title}
        </p>
      </div>
      <div className="pt-3">
        <p className="font-inter font-normal text-c_gray">{content}</p>
      </div>
    </div>
  );
}
