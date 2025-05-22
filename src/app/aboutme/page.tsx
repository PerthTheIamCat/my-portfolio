"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4 text-center">
        I am a Computer Engineering student at Kasetsart University. I have a
        passion for technology and love to learn new things. In my free time, I
        enjoy reading books, playing video games, and exploring the outdoors.
      </p>
    </motion.div>
  );
}
