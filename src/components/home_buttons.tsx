"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomeButtons({ onClick }: { onClick: () => void }) {
  const router = useRouter();

  const [isHoveredAboutMe, setIsHoveredAboutMe] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);
  const [isHoveredProject, setIsHoveredProject] = useState(false);

  const [isAboutMeClicked, setIsAboutMeClicked] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isProjectClicked, setIsProjectClicked] = useState(false);

  const handleClick = (button: string) => {
    if (button === "aboutme") {
      setIsAboutMeClicked(true);
      setIsContactClicked(false);
      setIsProjectClicked(false);
    } else if (button === "contact") {
      setIsContactClicked(true);
      setIsAboutMeClicked(false);
      setIsProjectClicked(false);
    } else if (button === "project") {
      setIsProjectClicked(true);
      setIsContactClicked(false);
      setIsAboutMeClicked(false);
    }
    onClick();
    setTimeout(() => {
      if (button === "aboutme") {
        router.push("/aboutme");
        setIsAboutMeClicked(false);
      } else if (button === "contact") {
        router.push("/contact");
        setIsContactClicked(false);
      } else if (button === "project") {
        router.push("/projects");
        setIsProjectClicked(false);
      }
    }, 1000);
  };

  return (
    <div className="grid grid-rows-3">
      <div
        className="relative"
        onMouseEnter={() => setIsHoveredAboutMe(true)}
        onMouseLeave={() => setIsHoveredAboutMe(false)}
      >
        <motion.div
          className="absolute bottom-0 mx-auto flex h-full w-full items-center rounded-l-full bg-black"
          initial={{ opacity: 0, x: 100, scale: 1, zIndex: 0 }}
          animate={{
            opacity: isHoveredAboutMe ? 1 : 0,
            x: isHoveredAboutMe ? 0 : 100,
            scale: isAboutMeClicked ? 5 : 1,
            zIndex: isAboutMeClicked ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute right-0 my-auto flex h-[calc(100%-50px)] w-[calc(100%-50px)] animate-pulse items-center rounded-l-full border-l border-white bg-transparent" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 mx-auto flex h-full w-full items-center rounded-l-full bg-transparent"
          initial={{ opacity: 0, x: 100, scale: 1, zIndex: 0 }}
          animate={{
            opacity: isHoveredAboutMe ? 1 : 0,
            x: isHoveredAboutMe ? 0 : 100,
            zIndex: isAboutMeClicked ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="w-full pt-20 text-center">See what is about me</h1>
        </motion.div>
        <motion.div
          className={`relative ${isAboutMeClicked ? "z-20" : "z-10"} flex h-full items-center justify-center`}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: 0.4,
          }}
        >
          <button className="text-2xl" onClick={() => handleClick("aboutme")}>
            <h1>About Me</h1>
          </button>
        </motion.div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHoveredProject(true)}
        onMouseLeave={() => setIsHoveredProject(false)}
      >
        <motion.div
          className="absolute bottom-0 mx-auto flex h-full w-full items-center rounded-l-full bg-black"
          initial={{ opacity: 0, x: 100, scale: 1, zIndex: 0 }}
          animate={{
            opacity: isHoveredProject ? 1 : 0,
            x: isHoveredProject ? 0 : 100,
            scale: isProjectClicked ? 5 : 1,
            zIndex: isProjectClicked ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute right-0 my-auto flex h-[calc(100%-50px)] w-[calc(100%-50px)] animate-pulse items-center rounded-l-full border-l border-white bg-transparent" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 mx-auto flex h-full w-full items-center rounded-l-full bg-transparent"
          initial={{ opacity: 0, x: 100, scale: 1, zIndex: 0 }}
          animate={{
            opacity: isHoveredProject ? 1 : 0,
            x: isHoveredProject ? 0 : 100,
            zIndex: isProjectClicked ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="w-full pt-20 text-center">
            See what is about projects
          </h1>
        </motion.div>
        <motion.div
          className={`relative ${isProjectClicked ? "z-20" : "z-10"} flex h-full items-center justify-center`}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: 0.5,
          }}
        >
          <button className="text-2xl" onClick={() => handleClick("project")}>
            <h1>Projects</h1>
          </button>
        </motion.div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHoveredContact(true)}
        onMouseLeave={() => setIsHoveredContact(false)}
      >
        <motion.div
          className="absolute bottom-0 mx-auto flex h-full w-full items-center rounded-l-full bg-black"
          initial={{ opacity: 0, x: 100, scale: 1, zIndex: 0 }}
          animate={{
            opacity: isHoveredContact ? 1 : 0,
            x: isHoveredContact ? 0 : 100,
            scale: isContactClicked ? 5 : 1,
            zIndex: isContactClicked ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute right-0 my-auto flex h-[calc(100%-50px)] w-[calc(100%-50px)] animate-pulse items-center rounded-l-full border-l border-white bg-transparent" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 mx-auto flex h-full w-full items-center rounded-l-full bg-transparent"
          initial={{ opacity: 0, x: 100, scale: 1, zIndex: 0 }}
          animate={{
            opacity: isHoveredContact ? 1 : 0,
            x: isHoveredContact ? 0 : 100,
            zIndex: isContactClicked ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="w-full pt-20 text-center">
            See what is about contact
          </h1>
        </motion.div>
        <motion.div
          className={`relative ${isContactClicked ? "z-20" : "z-10"} flex h-full items-center justify-center`}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: 0.6,
          }}
        >
          <button className="text-2xl" onClick={() => handleClick("contact")}>
            <h1>Contact</h1>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
