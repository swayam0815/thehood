import React from "react";
import NavBar from "./NavBar";
import { ExpandableCardDemo } from "./ExpandableCard";
import Image from "next/image";
import Reminder from "./Reminder";

const DashBoard = () => {

  return (
    <div className="w-screen h-screen  flex">
      <div
        className="h-full w-1/6  border-r-4 border-black"
        id="navbar"
      >
        <NavBar />
      </div>
      <div className="h-full w-5/6 flex" id="navbar">
        <div className="h-full w-4/6  border-r-4 border-r-black border-l-0 border-4 border-black ">
          <div className="w-full h-1/2  overflow-hidden border-b-4 border-b-black">
          <h1 className="text-5xl w-full h-1/5  flex items-center justify-center">Reminders</h1>
            <div className="w-full h-5/6  ">
              <Reminder/>
            </div>
          </div>
          <div className="w-full h-1/2 flex">
          
          <div className="w-1/2 h-full bg-green-200"></div>
          <div className="w-1/2 h-full bg-red-200"></div>


          </div>
        </div>

        <div className="h-full w-2/6 border-l-0 border-4 bg-[#fafaf9] border-black flex flex-col overflow-auto p-2 scrollbar-thin">
          <h1 className="text-5xl w-full text-center my-4">Events</h1>
          <ExpandableCardDemo />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;


