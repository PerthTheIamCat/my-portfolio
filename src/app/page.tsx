"use client";

import HomeButtons from "@/components/home_buttons";
import Profile from "@/components/profile";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="grid min-h-screen grid-cols-[1fr_1fr] overflow-hidden">
      <title>Home</title>
      <Profile />
      <HomeButtons onClick={() => setIsClicked(true)} />
      <motion.div
        className="absolute top-1/2 left-1/2 z-30 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#14181A]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isClicked ? 1 : 0, scale: isClicked ? 5 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isClicked ? 1 : 0, scale: isClicked ? 4 : 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#14181A]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isClicked ? 1 : 0, scale: isClicked ? 4 : 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
