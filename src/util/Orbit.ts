import { useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

export function useOrbit(initialAngle: number, radius: number, yScale = 1) {
  const angle = useMotionValue(initialAngle);
  const x = useTransform(angle, (a) => Math.cos((a * Math.PI) / 180) * radius);
  const y = useTransform(
    angle,
    (a) => (Math.sin((a * Math.PI) / 180) * (radius * yScale)) / 2 + 100,
  );
  const zIndex = useTransform(angle, (a) => {
    const normalized = a % 360;
    return normalized > 170 && normalized < 350 ? 0 : 10;
  });

  useAnimationFrame((t) => {
    angle.set(((t / 1000) * 60 + initialAngle) % 360);
  });

  return { x, y, zIndex };
}
