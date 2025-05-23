"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SpringFromAbove from "@/animation/SpringFromAbove";
import dynamic from "next/dynamic";

const StarField = dynamic(
  () => import("@/components/RandomStars").then((m) => m.StarField),
  { ssr: false },
);
import { useOrbit } from "@/util/Orbit";

export default function Profile() {
  const radius = 120;
  const radius2 = 240;
  const scale = 0.8;

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
    useOrbit(icons2[0].initialAngle, radius2, scale),
    useOrbit(icons2[1].initialAngle, radius2, scale),
    useOrbit(icons2[2].initialAngle, radius2, scale),
    useOrbit(icons2[3].initialAngle, radius2, scale),
    useOrbit(icons2[4].initialAngle, radius2, scale),
    useOrbit(icons2[5].initialAngle, radius2, scale),
    useOrbit(icons2[6].initialAngle, radius2, scale),
    useOrbit(icons2[7].initialAngle, radius2, scale),
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <StarField count={30} />
      <SpringFromAbove className="relative m-20">
        {icons.map((icon, index) => {
          const { x, y, zIndex } = orbitData[index];

          return (
            <SpringFromAbove
              key={index}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ x, y, zIndex }}
              delay={index * 0.2}
            >
              <Image src={icon.src} alt="tech logo" width={50} height={50} />
            </SpringFromAbove>
          );
        })}
        {icons2.map((icon, index) => {
          const { x, y, zIndex } = orbitData2[index];

          return (
            <SpringFromAbove
              key={`orbit2-${index}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ x, y, zIndex }}
              delay={index * 0.2 + 0.5}
            >
              <Image src={icon.src} alt="tech logo" width={40} height={40} />
            </SpringFromAbove>
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
      </SpringFromAbove>
      <SpringFromAbove delay={0.2} className="mt-4 text-2xl font-bold">
        <h1>
          Hello, I&apos;m <span>Pawit Thongkum</span>
        </h1>
      </SpringFromAbove>
      <SpringFromAbove delay={0.4}>
        <h2>A Computer Engineering student at Kasetsart University</h2>
      </SpringFromAbove>
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.8, 0.5, 0.2],
          scale: [0.8, 1, 1.5, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeOut",
        }}
        className="absolute top-1/3 -z-10 h-[500px] w-[500px] -translate-y-1/3 rounded-full bg-radial from-blue-950 from-10% to-[#14181A] blur-3xl"
      />
    </div>
  );
}
