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

  function useOrbit(initialAngle: number, radius: number, yScale = 1) {
    const angle = useMotionValue(initialAngle);
    const x = useTransform(
      angle,
      (a) => Math.cos((a * Math.PI) / 180) * radius,
    );
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

  const icons = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      initialAngle: 60,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      initialAngle: 180,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      initialAngle: 300,
    },
  ];

  const icons2 = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      initialAngle: 0,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      initialAngle: 45,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      initialAngle: 90,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      initialAngle: 135,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      initialAngle: 180,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      initialAngle: 225,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      initialAngle: 270,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      initialAngle: 315,
    },
  ];

  const orbitData = [
    useOrbit(icons[1].initialAngle, radius),
    useOrbit(icons[0].initialAngle, radius),
    useOrbit(icons[2].initialAngle, radius),
  ];

  const orbitData2 = [
    useOrbit(icons2[0].initialAngle, radius + 120, 0.8),
    useOrbit(icons2[1].initialAngle, radius + 120, 0.8),
    useOrbit(icons2[2].initialAngle, radius + 120, 0.8),
    useOrbit(icons2[3].initialAngle, radius + 120, 0.8),
    useOrbit(icons2[4].initialAngle, radius + 120, 0.8),
    useOrbit(icons2[5].initialAngle, radius + 120, 0.8),
    useOrbit(icons2[6].initialAngle, radius + 120, 0.8),
    useOrbit(icons2[7].initialAngle, radius + 120, 0.8),
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="relative m-20"
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
        {icons2.map((icon, index) => {
          const { x, y, zIndex } = orbitData2[index];

          return (
            <motion.div
              key={`orbit2-${index}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ x, y, zIndex }}
            >
              <Image src={icon.src} alt="tech logo" width={40} height={40} />
            </motion.div>
          );
        })}
        <motion.div
          className="z-0"
          animate={{
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/profile.png"
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
