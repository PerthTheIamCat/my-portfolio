"use client";
import { motion } from "framer-motion";

export default function StarSpark({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div className="relative">
      <motion.div
        animate={{
          scale: [0.1, 0.1, 0.1, 0.1, 2],
          opacity: [0, 1, 1, 1, 0],
          y: ["0px", "0px", "-100px", "0px", "0px"],
        }}
        transition={{
          duration: 2,
          times: [0, 0.5, 0.75, 0.8, 1],
          delay: delay,
        }}
      >
        <motion.div
          className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-full origin-center -translate-x-1/2 -translate-y-1/2 bg-white"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.5],
          }}
          transition={{
            duration: 1,
            delay: 1 + delay,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: delay + 1.8 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
