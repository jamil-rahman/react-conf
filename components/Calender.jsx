import React from "react";
import CalenderItem from "./CalenderItem";

export default function Calender({events}) {
    console.log(events)
  return (
    <div className="w-full h-full mt-5 p-2 overflow-x-auto scroll-smooth ">
      <table className="border-2 border-gray-300 w-full table-auto border-collapse md:table-fixed ">
        <tbody>
        <tr className="border-b-2 border-b-gray-300 text-center">
          <th className="border-r-2 border-r-gray-300 w-16 md:w-40 rounded-3xl"></th>
          <th className="pt-2 pb-2  text-c_navy">Tue</th>
          <th className="pt-2 pb-2  text-c_navy">Wed</th>
          <th className="pt-2 pb-2  text-c_navy">Thu</th>
          <th className="pt-2 pb-2  text-c_navy">Fri</th>
          <th className="pt-2 pb-2  text-c_navy">Sat</th>
          <th className="pt-2 pb-px text-c_navy">Sun</th>
        </tr>

        <tr className="border-2 border-b-gray-300">
          <th className="border-r-2 border-r-gray-300 w-16 md:w-40 text-center text-c_navy">09:00</th>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"><CalenderItem title={events[4].name} date={events[4].startDate} time="09:00-11:00"/></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"><CalenderItem title={events[3].name} time="09:00-11:50" date={events[3].startDate} /></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
        </tr>

        <tr className="border-2 border-b-gray-300">
          <th className="border-r-2 border-r-gray-300 w-16 md:w-40 text-center text-c_navy">10:00</th>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"><CalenderItem title={events[5].name} time="08:00-10:00" date={events[5].startDate}/></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"><CalenderItem title={events[6].name} time="17:00-19:00" date={events[6].startDate}/></td>
        </tr>

        <tr className="border-2 border-b-gray-300">
          <th className="border-r-2 border-r-gray-300 w-16 md:w-40 text-center text-c_navy">17:00</th>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"><CalenderItem title={events[2].name} time="7:00-9:00" date={events[2].startDate}/></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"><CalenderItem title={events[8].name} time="16:00-18:00" date={events[8].startDate}/></td>
          <td className="pt-px pb-px border-2 border-b-gray-300 text-center overflow-x-auto"></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
