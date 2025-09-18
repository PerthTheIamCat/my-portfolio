"use client";
import { HTMLMotionProps, motion, type Easing } from "framer-motion";

// Allow either a known name (we map to a cubic-bezier) or an Easing definition directly
const namedEasings: Record<string, Easing> = {
  easeInOut: [0.42, 0, 0.58, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  linear: [0, 0, 1, 1],
};

interface FadeInDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  initialOpacity?: number;
  finalOpacity?: number;
  duration?: number;
  ease?: keyof typeof namedEasings | Easing | Easing[]; // Accept name or valid easing(s)
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
  // Resolve string name to actual Easing array, otherwise pass through.
  const resolvedEase: Easing | Easing[] | undefined =
    typeof ease === "string" ? namedEasings[ease] : ease;
  return (
    <motion.div
      className={className}
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: finalOpacity }}
      transition={{ duration, ease: resolvedEase, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
