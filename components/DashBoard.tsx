import React from "react";
import NavBar from "./NavBar";
import { ExpandableCardDemo } from "./ExpandableCard";
import { Carousel, Card } from "./Reminders";
import Image from "next/image";
import Reminder from "./Reminder";

const DashBoard = () => {
  const cards = reminders.map((card, index) => (
    <Card key={card.src} card={card} index={index} date={card.date}/>
  ));

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
              {/* <Carousel items={cards} /> */}
            </div>
          </div>
          <div className="w-full h-1/2 flex">
          
          <div className="w-1/2 h-full bg-green-200"></div>
          <div className="w-1/2 h-full bg-red-200"></div>


          </div>
        </div>

        <div className="h-full w-2/6 border-l-0 border-4 bg-amber-300 border-black flex flex-col overflow-auto p-2 scrollbar-thin">
          <h1 className="text-5xl w-full text-center my-4">Events</h1>
          <ExpandableCardDemo />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;


const reminders = [
    {
      category: "Trash Collection",
      title: "Trash Collection Reminder",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "07/29/24",
      content: "Don't forget to put out your trash and recycling bins tonight for pickup tomorrow morning.",
    },
    {
      category: "Yard Maintenance",
      title: "Lawn Mowing Alert",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "07/30/24",
      content: "It's time for your weekly lawn mowing. Don't forget to trim the hedges too!",
    },
    {
      category: "Community Meeting",
      title: "Neighborhood Association Meeting",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "07/31/24",
      content: "The neighborhood association meeting is tomorrow at 7 PM at the community center.",
    },
    {
      category: "Events",
      title: "Summer Concert Series",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/03/24",
      content: "Join us for the Summer Concert Series this Saturday at 6 PM in the Music Pavilion.",
    },
    {
      category: "Pet Care",
      title: "Vet Appointment Reminder",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/05/24",
      content: "Schedule a vet appointment for your pet’s annual check-up.",
    },
    {
      category: "Local Alerts",
      title: "Road Closure Alert",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/07/24",
      content: "There's a road closure on Main Street this weekend due to construction. Plan your route accordingly.",
    },
    {
      category: "Volunteering",
      title: "Neighborhood Cleanup Day",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/10/24",
      content: "Sign up for the neighborhood cleanup day happening next Saturday. Volunteers are needed!",
    },
    {
      category: "School Events",
      title: "School Open House",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/12/24",
      content: "The school’s open house is this Friday from 3 PM to 6 PM. Come meet the teachers and see the classrooms.",
    },
    {
      category: "Emergency Preparedness",
      title: "Emergency Kit Check",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/15/24",
      content: "Check your emergency kit and make sure you have enough supplies in case of a power outage.",
    },
    {
      category: "Grocery Shopping",
      title: "Farmers Market Reminder",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/17/24",
      content: "Stock up on essentials before the weekend. The local farmers market is open on Saturdays from 8 AM to 1 PM.",
    },
    {
      category: "Maintenance Checks",
      title: "Smoke Detector Check",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/20/24",
      content: "Check the smoke detectors and replace batteries if needed.",
    },
    {
      category: "Neighborhood Watch",
      title: "Neighborhood Watch Meeting",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/22/24",
      content: "Attend the next neighborhood watch meeting to stay updated on local safety issues.",
    },
    {
      category: "Holiday Preparations",
      title: "Holiday Decorations Reminder",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/25/24",
      content: "Get your holiday decorations out and start preparing for the upcoming festive season.",
    },
    {
      category: "Parking",
      title: "Parking Restrictions Alert",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/28/24",
      content: "Be aware of temporary parking restrictions during the upcoming street festival.",
    },
    {
      category: "Fitness",
      title: "Community Fitness Class",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      date: "08/30/24",
      content: "Join the community fitness class at the park every Tuesday and Thursday at 6 PM.",
    }
  ];
  