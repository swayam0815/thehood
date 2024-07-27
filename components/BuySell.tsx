"use client";
import { motion } from "framer-motion";
import { PlaneIcon, MicIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "./Reminders";
import { BuyandSell } from "@/data";

export function BuySell() {
  console.log(BuyandSell[2]);
  return (
    <div className=" w-full h-full ">
      <div className=" h-full w-full flex items-center gap-4 justify-center">
        <Modal>
          <ModalTrigger className="h-full w-1/3 items-center text-black bg-[#fbf3e6]   flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-96 text-center transition duration-500 flex flex-col items-center justify-center">
            <Image src={BuyandSell[0].src} alt="bali images" width="1000" height="1000" className="rounded-lg h-1/2 w-full  object-cover " />
              {BuyandSell[0].title}
            </span>
            <div className="-translate-x-2/3 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
              Learn More
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                {BuyandSell[0].title}
              </h4>
              <div className="flex justify-center items-center">
                <Image
                  src={BuyandSell[0].src}
                  alt="bali images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                {BuyandSell[0].content}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Contact Seller
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Buy Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
        <Modal>
          <ModalTrigger className="h-full w-1/3 items-center text-black bg-[#fbf3e6]   flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-96 text-center transition duration-500 flex flex-col items-center justify-center">
            <Image src={BuyandSell[2].src} alt="bali images" width="1000" height="1000" className="rounded-lg h-1/2 w-full  object-cover " />
              {BuyandSell[2].title}
            </span>
            <div className="-translate-x-2/3 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
              Learn More
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                {BuyandSell[2].title}
              </h4>
              <div className="flex justify-center items-center">
                <Image
                  src={BuyandSell[2].src}
                  alt="bali images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                {BuyandSell[2].content}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Contact Seller
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Buy Now
              </button>
            </ModalFooter>
          </ModalBody>

          
        </Modal>
        <Modal>
          <ModalTrigger className="h-full w-1/3 items-center text-black bg-[#fbf3e6]   flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-96 text-center transition duration-500 flex flex-col items-center justify-center">

            
            <Image src={BuyandSell[3].src} alt="bali images" width="1000" height="1000" className="rounded-lg h-1/2 w-full max-h-1/2 " />
              {BuyandSell[3].title}
            </span>
            <div className="-translate-x-2/3 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
              Learn More
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                {BuyandSell[3].title}
              </h4>
              <div className="flex justify-center items-center">
                <Image
                  src={BuyandSell[3].src}
                  alt="bali images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                {BuyandSell[3].content}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Contact Seller
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Buy Now
              </button>
            </ModalFooter>
          </ModalBody>

          
        </Modal>
      </div>
    </div>
  );
}

