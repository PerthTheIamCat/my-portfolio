"use client";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";

export default function Profile() {
  const radius = 120;

  function useOrbit(initialAngle: number, radius: number) {
    const angle = useMotionValue(initialAngle);
    const x = useTransform(
      angle,
      (a) => Math.cos((a * Math.PI) / 180) * radius,
    );
    const y = useTransform(
      angle,
      (a) => Math.sin((a * Math.PI) / 180) * (radius / 2),
    );
    const zIndex = useTransform(angle, (a) => {
      const normalized = a % 360;
      return normalized > 200 && normalized < 350 ? 0 : 10;
    });

    useAnimationFrame((t) => {
      angle.set(((t / 1000) * 60 + initialAngle) % 360);
    });

    return { x, y, zIndex };
  }

  const icons = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      initialAngle: 0,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      initialAngle: 120,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      initialAngle: 240,
    },
  ];

  const orbitData = [
    useOrbit(icons[0].initialAngle, radius),
    useOrbit(icons[1].initialAngle, radius),
    useOrbit(icons[2].initialAngle, radius),
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          duration: 0.5,
        }}
      >
        {icons.map((icon, index) => {
          const { x, y, zIndex } = orbitData[index];

          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ x, y, zIndex }}
            >
              <Image src={icon.src} alt="tech logo" width={50} height={50} />
            </motion.div>
          );
        })}
        <motion.div
          className="z-0"
          animate={{
            rotate: [-15, 15, -15],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/profile3.png"
            alt="profile image"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          duration: 0.5,
          delay: 0.1,
        }}
        className="mt-4 text-2xl font-bold"
      >
        Hello, I&apos;m <span>Pawit Thongkum</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          duration: 0.5,
          delay: 0.2,
        }}
      >
        A Computer Engineering student at Kasetsart University
      </motion.h2>
    </div>
  );
}
