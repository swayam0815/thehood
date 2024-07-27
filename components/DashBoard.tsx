import React from "react";
import NavBar from "./NavBar";
import { ExpandableCardDemo } from "./ExpandableCard";
import Image from "next/image";
import Reminder from "./Reminder";
import {BuySell} from "./BuySell";

const DashBoard = () => {
  return (
    <div className="w-screen h-screen  flex">
      <div className="h-full w-1/6  -r-4 " id="navbar">
        <NavBar />
      </div>
      <div className="h-full w-5/6 flex" id="navbar">
        <div className="h-full w-4/6  -r-4  -l-0 -4  ">
          <div className="w-full h-1/2  overflow-hidden  ">
            <h1 className="text-5xl w-full h-1/5  flex items-center justify-center">
              Reminders
            </h1>
            <div className="w-full h-5/6  ">
              <Reminder />
            </div>
          </div>
          <div className="w-full h-1/2 flex overflow-hidden">
            <div className="w-full h-full flex items-center justify-center  bg-red-100 rounded-[50px] flex-col">
            <h1 className="text-5xl w-full h-1/5  flex items-center justify-center ">
              Items for Sale
            </h1>

              <BuySell />
            </div>
          </div>
        </div>

        <div className="h-full w-2/6 -l-0 -4 bg-[#fbf3e6] rounded-3xl  flex flex-col overflow-auto p-2 scrollbar-thin">
          <h1 className="text-5xl w-full text-center my-4">Events</h1>
          <ExpandableCardDemo />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
