"use client";
import { HTMLMotionProps, motion } from "framer-motion";

interface FadeInDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  initialOpacity?: number;
  finalOpacity?: number;
  duration?: number;
  ease?: string | number[];
  delay?: number;
}

export default function FadeInDiv({
  children,
  className,
  initialOpacity = 0,
  finalOpacity = 1,
  duration = 0.5,
  ease = "easeInOut",
  delay = 0,
  ...props
}: FadeInDivProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: finalOpacity }}
      transition={{ duration, ease, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
