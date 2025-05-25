"use client";
import { motion } from "framer-motion";

export default function Spotlight({
  size = 300,
  x = "50%",
  y = "50%",
  color = "rgba(255,255,255,0.15)",
  opacity = 0.3,
  isHovered = false,
}: {
  size?: number;
  x?: string;
  y?: string;
  color?: string;
  opacity?: number;
  isHovered?: boolean;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full blur-3xl"
      initial={{ opacity: 0 }}
      style={{
        width: size,
        height: size,
        top: y,
        left: x,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        zIndex: -1,
        opacity: opacity,
      }}
      animate={{ opacity: isHovered ? 1 : 0 }}
    />
  );
}
