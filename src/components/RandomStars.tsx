import { motion } from "framer-motion";

export function StarField({ count = 20 }: { count?: number }) {
  const seededRandom = (seed: number) => {
    const value = Math.sin(seed) * 10000;
    return value - Math.floor(value);
  };

  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededRandom(i * 4 + 1) * 100,
    y: seededRandom(i * 4 + 2) * 100,
    size: seededRandom(i * 4 + 3) * 4 + 1,
    delay: seededRandom(i * 4 + 4) * 5,
  }));

  return (
    <div className="absolute inset-0 -z-20 h-screen w-screen">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2,
            delay: star.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
