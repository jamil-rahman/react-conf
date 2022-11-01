import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import Image from "next/image";
import React, { useState } from "react";
import swap from "../public/swap.png";
import Card from "./Card";

const menuItems = [
  {
    id: "organizer",
    name: "Organizer",
  },
  {
    id: "speaker",
    name: "Speakers",
  },
  {
    id: "location",
    name: "Location",
  },
  {
    id: "schedule",
    name: "Schedule",
  },
  {
    id: "sponsor",
    name: "Sponsors",
  },
];

resetServerContext();

export default function ConferenceInfo({ conference }) {
  const [show, setShow] = useState(true);
  const [options, setOptions] = useState(menuItems);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(options);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setOptions(items);
  }
  // console.log(conference.speakers);
  return (
    <div className="pt-6 w-full h-full flex flex-col justify-around md:flex-row">
      {/* SideMenuBar */}
      <div className=" w-full flex h-3/4 flex-col justify-center text-center md:w-1/3">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="menu items">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {options.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          key={name}
                          className="m-6"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="border border-c_border w-full flex p-4 rounded-lg hover:bg-c_yellow hover:text-white">
                            <div className="p-4 bg-white rounded-lg ">
                              <Image src={swap} alt="menuIcon" />
                            </div>
                            <div>
                              <p className="font-inter text-lg font-bold px-10 pt-4">
                                {name}
                              </p>
                            </div>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
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
