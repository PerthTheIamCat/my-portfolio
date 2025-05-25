"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SpringFromRight from "@/animation/SpringFromRight";
import Spotlight from "@/animation/Spotlight";
import StarSpark from "@/animation/StarSpark";

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
      <motion.div
        className="pointer-events-none absolute top-1/2 -right-20 h-[200px] w-[500px] origin-right -translate-y-1/2 bg-gradient-to-l from-white/20 to-transparent blur-2xl"
        initial={{ x: "1000px", rotate: "0deg", opacity: 1 }}
        animate={{
          x:
            isHoveredAboutMe || isHoveredProject || isHoveredContact
              ? "0px"
              : "1000px",
          rotate: isHoveredAboutMe
            ? "30deg"
            : isHoveredProject
              ? "0deg"
              : isHoveredContact
                ? "-30deg"
                : "0deg",
          opacity:
            isHoveredAboutMe || isHoveredProject || isHoveredContact ? 1 : 1,
          background: isHoveredAboutMe
            ? "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%)"
            : isHoveredProject
              ? "linear-gradient(90deg, transparent 0%, rgba(102,204,255,0.2) 100%)"
              : isHoveredContact
                ? "linear-gradient(90deg, transparent 0%, rgba(255,153,255,0.2) 100%)"
                : "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%)",
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 100 }}
      />
      <div
        className="relative"
        onMouseEnter={() => setIsHoveredAboutMe(true)}
        onMouseLeave={() => setIsHoveredAboutMe(false)}
      >
        <Spotlight
          size={400}
          color="rgba(255,255,255,0.2)"
          isHovered={isHoveredAboutMe}
        />

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
        <SpringFromRight
          className={`relative ${isAboutMeClicked ? "z-20" : "z-10"} flex h-full items-center justify-center`}
          delay={0.4}
        >
          <StarSpark delay={0.4}>
            <button
              className="cursor-pointer text-2xl"
              onClick={() => handleClick("aboutme")}
            >
              <h1>About Me</h1>
            </button>
          </StarSpark>
        </SpringFromRight>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHoveredProject(true)}
        onMouseLeave={() => setIsHoveredProject(false)}
      >
        <Spotlight
          size={400}
          color="rgba(102,204,255,0.2)"
          isHovered={isHoveredProject}
        />
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
        <SpringFromRight
          className={`relative ${isProjectClicked ? "z-20" : "z-10"} flex h-full items-center justify-center`}
          delay={0.5}
        >
          <StarSpark delay={0.5}>
            <button
              className="cursor-pointer text-2xl"
              onClick={() => handleClick("project")}
            >
              <h1>Projects</h1>
            </button>
          </StarSpark>
        </SpringFromRight>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHoveredContact(true)}
        onMouseLeave={() => setIsHoveredContact(false)}
      >
        <Spotlight
          size={400}
          color="rgba(255,153,255,0.2)"
          isHovered={isHoveredContact}
        />

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
        <SpringFromRight
          className={`relative ${isContactClicked ? "z-20" : "z-10"} flex h-full items-center justify-center`}
          delay={0.6}
        >
          <StarSpark delay={0.6}>
            <button
              className="cursor-pointer text-2xl"
              onClick={() => handleClick("contact")}
            >
              <h1>Contact</h1>
            </button>
          </StarSpark>
        </SpringFromRight>
      </div>
    </div>
  );
}
