"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 flex items-center justify-between px-4 text-white shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <motion.div>
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 0.5,
          }}
          className="text-2xl font-bold"
        >
          My Portfolio
        </motion.h1>
      </motion.div>
      <motion.div className="flex space-x-4">
        <motion.button
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 0.5,
            delay: 0.1,
          }}
        >
          About Me
        </motion.button>
        <motion.button
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 0.5,
            delay: 0.2,
          }}
        >
          Project
        </motion.button>
        <motion.button
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 0.5,
            delay: 0.3,
          }}
        >
          Contact
        </motion.button>
      </motion.div>
    </nav>
  );
}
