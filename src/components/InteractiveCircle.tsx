"use client";

import { motion } from "framer-motion";
import HomeButtons from "./home_buttons";
import { useState } from "react";

export default function InteractiveCircle() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <HomeButtons
        onClick={() => {
          setIsClicked(true);
        }}
      />
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
          transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#14181A]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isClicked ? 1 : 0, scale: isClicked ? 4 : 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
