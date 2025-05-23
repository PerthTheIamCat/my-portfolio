"use client";
import { HTMLMotionProps, motion } from "framer-motion";

interface FadeInDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  offsetX?: number;
  delay?: number;
}

export default function FadeInDiv({
  children,
  className,
  offsetX = 100,
  delay = 0,
  ...props
}: FadeInDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: offsetX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay,
        duration: 0.5,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
