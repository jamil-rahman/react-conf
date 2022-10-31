import Image from "next/image";
import React, { useState } from "react";
import swap from "../public/swap.png";
import Card from "./Card";

export default function ConferenceInfo({ conference }) {
  const [show, setShow] = useState(false);
  console.log(conference.speakers);
  return (
    <div className="pt-6 w-full h-full flex flex-col justify-around md:flex-row">
      {/* SideMenuBar */}
      <div className="border-4 w-full flex h-3/4 flex-col justify-center text-center md:w-1/3">
        <ul>
          <li key={conference.organizer.name} className="m-6">
            <div className="border border-c_border w-full flex p-4 rounded-lg hover:bg-c_yellow hover:text-white hover:cursor-pointer">
              <div className="p-4 bg-white rounded-lg ">
                <Image src={swap} alt="menuIcon" />
              </div>
              <div>
                <p className="font-inter text-lg font-bold px-10 pt-4">
                  Organizer
                </p>
              </div>
            </div>
          </li>

          <li
            key={conference.speakers.name}
            className="m-6"
            onClick={() => setShow(!show)}
          >
            <div className="border border-c_border w-full flex p-4 rounded-lg hover:bg-c_yellow hover:text-white hover:cursor-pointer">
              <div className="p-4 bg-white rounded-lg ">
                <Image src={swap} alt="menuIcon" />
              </div>
              <div>
                <p className="font-inter text-lg font-bold px-10 pt-4">
                  Speakers
                </p>
              </div>
            </div>
          </li>

          <li key={conference.locations.name} className="m-6">
            <div className="border border-c_border w-full flex p-4 rounded-lg hover:bg-c_yellow hover:text-white hover:cursor-pointer">
              <div className="p-4 bg-white rounded-lg ">
                <Image src={swap} alt="menuIcon" />
              </div>
              <div>
                <p className="font-inter text-lg font-bold px-10 pt-4">
                  Location
                </p>
              </div>
            </div>
          </li>

          <li key={conference.schedules.day} className="m-6">
            <div className="border border-c_border w-full flex p-4 rounded-lg hover:bg-c_yellow hover:text-white hover:cursor-pointer">
              <div className="p-4 bg-white rounded-lg ">
                <Image src={swap} alt="menuIcon" />
              </div>
              <div>
                <p className="font-inter text-lg font-bold px-10 pt-4">
                  Schedule
                </p>
              </div>
            </div>
          </li>

          <li key={conference.sponsors.name} className="m-6">
            <div className="border border-c_border w-full flex p-4 rounded-lg hover:bg-c_yellow hover:text-white hover:cursor-pointer">
              <div className="p-4 bg-white rounded-lg ">
                <Image src={swap} alt="menuIcon" />
              </div>
              <div>
                <p className="font-inter text-lg font-bold px-10 pt-4">
                  Sponsors
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Info Tab */}
      <div className="rounded overflow-x-hidden w-full mt-2 bg-c_white p-7 h-{400} flex flex-col justify-center md:w-3/5 md:m-0">
        {show &&
          conference.speakers.map((speaker) => {
            return (
              <Card
                image={speaker.image.url}
                name={speaker.name}
                company={speaker.company}
                about={speaker.aboutShort}
                key={speaker.name}
              />
            );
          })}
      </div>
    </div>
  );
}
