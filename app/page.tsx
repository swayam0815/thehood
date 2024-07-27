"use client";
import { AuroraBackground } from "@/components/AuroraBackground";
import Button from "@/components/Button";
import DashBoard from "@/components/DashBoard";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h3 className="capitalize text-4xl leading-[68px]  font-palanquin font-bold">
          Meet your Neighbours Today!
        </h3>
        <div className="w-[500px]  flex items-center  gap-5 p-2.5 border-2 justify-between border-black rounded-full">
          <input
            type="text"
            placeholder="A1B 2C3"
            className="bg-transparent text-black placeholder-black h-full rounded-full w-3/4 focus:outline-none transition-all focus:border-2 border-black"
          />
          <div className="flex">
            <Button label="Submit!" fullWidth />
          </div>
        </div>
        <h3 className="capitalize text-2xl leading-[68px]  font-palanquin font-bold">
          Enter your community by entering your postal code.
        </h3>
      </motion.div>
    </AuroraBackground>
  );
}
