"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center text-black z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className={`w-full text-black max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col  ${active.bgColor} sm:rounded-3xl overflow-auto`}
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-black text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-black"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className={`px-4 py-3 w-max h-10 flex items-center whitespace-nowrap flex-nowrap justify-center text-sm rounded-full font-bold bg-white border-2 border-black hover:bg-black hover:text-white transition-all text-black`}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-black text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto  "
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-4 text-black">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className={`${card.bgColor} pl-0   border-4 rounded-xl border-black flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer`}
          >
            <motion.div
              layoutId={`image-${card.title}-${id}`}
              className="h-full"
            >
              <Image
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="w-full h-full object-cover object-top rounded-xl"
              />
            </motion.div>
            <div className="flex flex-col gap-1 pl-2 items-start justify-start  w-[80%]">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-base">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Join us for a fun-filled community BBQ with food, games, and music!",
    title: "Community BBQ",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Learn More",
    ctaLink: "https://example.com/community-bbq",
    bgColor: "bg-red-100", // Light red background
    content: () => {
      return (
        <p>
          The Community BBQ is a great opportunity to meet your neighbors, enjoy
          delicious food, and participate in fun games and activities. Hosted in
          Central Park, this event promises a lively atmosphere with music and
          entertainment for all ages. Don&apos;t miss out on a day of community
          bonding and great food!
        </p>
      );
    },
  },
  {
    description:
      "Bring your blankets and chairs for a movie under the stars. We'll be showing 'The Greatest Showman'.",
    title: "Outdoor Movie Night",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "RSVP",
    ctaLink: "https://example.com/outdoor-movie-night",
    bgColor: "bg-blue-100", // Light blue background
    content: () => {
      return (
        <p>
          Enjoy a magical movie experience under the night sky at Greenwood
          Park. Bring your blankets and chairs to watch &apos;The Greatest
          Showman&apos; on a big screen. This outdoor movie night is perfect for
          families and friends looking to have a relaxing evening together.
        </p>
      );
    },
  },
  {
    description:
      "Come and enjoy fresh produce, handmade crafts, and live music at our weekly farmers market.",
    title: "Farmers Market",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Explore",
    ctaLink: "https://example.com/farmers-market",
    bgColor: "bg-green-100", // Light green background
    content: () => {
      return (
        <p>
          The Farmers Market is your destination for fresh produce, unique
          handmade crafts, and live music. Located at Market Square, this weekly
          event supports local vendors and brings the community together for a
          vibrant shopping experience. Come support local businesses and enjoy a
          lively market atmosphere!
        </p>
      );
    },
  },
  {
    description:
      "Participate in our charity fun run to raise money for local schools. All ages welcome!",
    title: "Charity Fun Run",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Join Us",
    ctaLink: "https://example.com/charity-fun-run",
    bgColor: "bg-yellow-100", // Light yellow background
    content: () => {
      return (
        <p>
          The Charity Fun Run is a great way to support local schools while
          staying active. This event is open to participants of all ages, with a
          scenic route through Riverside Park. All proceeds go towards enhancing
          educational programs in our community. Join us for a morning of
          fitness and philanthropy!
        </p>
      );
    },
  },
  {
    description:
      "Enjoy a day of art exhibits, workshops, and performances by local artists.",
    title: "Art in the Park",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Discover Art",
    ctaLink: "https://example.com/art-in-the-park",
    bgColor: "bg-purple-100", // Light purple background
    content: () => {
      return (
        <p>
          Art in the Park is a celebration of creativity featuring exhibits,
          workshops, and performances by local artists. Held at Artisan Park,
          this event offers an opportunity to explore a diverse range of
          artistic expressions and engage with the local art community. Bring
          your family and friends for a day filled with inspiration and
          creativity!
        </p>
      );
    },
  },
  {
    description:
      "Join us for a community cleanup day to keep our neighborhood beautiful. Supplies provided.",
    title: "Neighborhood Cleanup",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Volunteer",
    ctaLink: "https://example.com/neighborhood-cleanup",
    bgColor: "bg-gray-100", // Light gray background
    content: () => {
      return (
        <p>
          The Neighborhood Cleanup is an opportunity to make a positive impact
          on our community. Gather at Main Street and help us keep our
          neighborhood looking its best. We provide all necessary supplies, so
          just bring your enthusiasm and willingness to pitch in. Together, we
          can make a difference!
        </p>
      );
    },
  },
  {
    description:
      "Discuss this month's book, 'The Night Circus', with fellow book lovers. Snacks provided.",
    title: "Book Club Meeting",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Join the Discussion",
    ctaLink: "https://example.com/book-club-meeting",
    bgColor: "bg-teal-100", // Light teal background
    content: () => {
      return (
        <p>
          The Book Club Meeting is the perfect place to delve into &apos;The
          Night Circus&apos; and share your thoughts with other avid readers.
          Held at the Community Library, this gathering provides a cozy
          environment for book discussions and socializing. Enjoy complimentary
          snacks as you explore the intriguing themes of this month&apos;s
          selected book.
        </p>
      );
    },
  },
  {
    description:
      "Enjoy live music every Saturday evening in the park. This week's band: The Rockers.",
    title: "Summer Concert Series",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Attend",
    ctaLink: "https://example.com/summer-concert-series",
    bgColor: "bg-pink-100", // Light pink background
    content: () => {
      return (
        <p>
          The Summer Concert Series brings live music to the Music Pavilion
          every Saturday evening. This week, enjoy a performance by The Rockers.
          Whether you&apos;re a music enthusiast or just looking for a fun night
          out, this event offers a lively atmosphere and great entertainment for
          all.
        </p>
      );
    },
  },
  {
    description:
      "Find your new best friend at our pet adoption fair. Adoption fees waived for the day!",
    title: "Pet Adoption Fair",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Adopt",
    ctaLink: "https://example.com/pet-adoption-fair",
    bgColor: "bg-orange-100", // Light orange background
    content: () => {
      return (
        <p>
          The Pet Adoption Fair is the perfect place to find a new furry friend.
          Hosted at the Animal Shelter, this event offers waived adoption fees
          for the day. Meet a variety of pets looking for their forever homes
          and get to know them in a friendly, supportive environment. Don&apos;t
          miss this chance to make a difference in an animal&apos;s life!
        </p>
      );
    },
  },
  {
    description:
      "Learn the basics of gardening from local experts. Free starter kits for all attendees.",
    title: "Gardening Workshop",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Sign Up",
    ctaLink: "https://example.com/gardening-workshop",
    bgColor: "bg-indigo-100", // Light indigo background
    content: () => {
      return (
        <p>
          The Gardening Workshop is designed for those who want to get started
          with gardening. Local experts will guide you through the basics, and
          each attendee will receive a free starter kit. Held at the Community
          Garden, this workshop is an excellent opportunity to learn new skills
          and connect with fellow gardening enthusiasts.
        </p>
      );
    },
  },
];
