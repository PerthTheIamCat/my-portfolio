"use client";
import { HTMLMotionProps, motion } from "framer-motion";

interface FadeInDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  offsetY?: number;
  delay?: number;
}

export default function SpringFormAbove({
  children,
  className,
  offsetY = -100,
  delay = 0,
  ...props
}: FadeInDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: offsetY }}
      animate={{ opacity: 1, y: 0 }}
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
