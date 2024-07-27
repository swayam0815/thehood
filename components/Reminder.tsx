import { Days, holidays, noti } from "@/data";
import React from "react";

const Reminder = () => {
  return (
    <div className="w-full h-[96%] flex gap-2">
      <div className="w-3/5 h-full bg-[#ffedb6] text-black  rounded-lg border-2 border-red-500  flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Upcoming Garbage Days</h1>
        <div className="gap-4 w-full flex flex-col overflow-hidden">
          {Days.map(
            (day, i) =>
              i < 3 && (
                <div
                  className="flex w-full h-20 gap-2 border-b-2 border-b-red-500 border-y-2 border-y-red-500"
                  key={i}
                >
                  <h1 className=" pr-2 text-7xl font-bold w-2/6 text-right border-r-2 border-r-red-500">
                    {day.number}
                  </h1>
                  <div className="h-full flex flex-col w-4/6">
                    <h1 className="text-xl font-bold">{day.day}</h1>
                    <div className="flex gap-2">
                      {day.pickUp.map((p, i) => (
                        <span
                          key={i}
                          className="uppercase border-2 bg-teal-500 text-black border-red-500 rounded-full p-1"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div
        className="w-3/5 h-full bg-[#fbf3e6] 
  rounded-lg border-2 border-red-500  flex flex-col items-center justify-center"
      >
        <h1 className="text-2xl font-bold mb-4">Holidays</h1>
        <div className="gap-4 w-full flex flex-col overflow-hidden">
          {holidays.map(
            (day, i) =>
              i < 3 && (
                <div
                  className="flex w-full h-20 gap-2 border-b-2 border-b-red-500 border-y-2 border-y-red-500"
                  key={i}
                >
                  <div className="flex pr-2 flex-col font-bold w-2/6 text-right border-r-2 border-r-red-500">
                    <h1>{day.day}</h1>
                    <h1 className="text-5xl ">{day.number}</h1>
                  </div>
                  <div className="h-full flex flex-col w-4/6">
                    <h1 className="text-xl font-bold">{day.holiday}</h1>
                    <p className="font-semibold italic">{day.description}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="w-3/5 h-full bg-[#ffedb6] text-black   rounded-lg border-2 border-red-500  flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Personal Notifications</h1>
        <div className="gap-4 w-full flex flex-col overflow-hidden">
          {noti.map(
            (day, i) =>
              i < 3 && (
                <div
                  className="flex w-full flex-col h-20 px-4 border-b-2 border-b-red-500 border-y-2 border-y-red-500"
                  key={i}
                >
                  <h1 className="text-xl font-bold">{day.title}</h1>
                  <p className="">{day.body}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Reminder;
