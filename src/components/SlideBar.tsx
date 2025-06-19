"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface Props {
  projects: Project[];
  selectIndex?: number;
  selectedProject?: Project | null;
  onIndexChange?: (index: number) => void;
}

export default function SlideBar({
  projects,
  selectIndex,
  selectedProject,
  onIndexChange,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centeredIndex, setCenteredIndex] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const { left, width } = container.getBoundingClientRect();
    const centerX = left + width / 2;
    let closestIdx = 0;
    let minDist = Infinity;
    const items = Array.from(
      container.querySelectorAll<HTMLDivElement>(".carousel-item"),
    );
    items.forEach((item, idx) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(centerX - itemCenter);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = idx;
      }
    });
    setCenteredIndex(closestIdx);
  };

  useEffect(() => {
    handleScroll();
  }, [projects]);

  useEffect(() => {
    let idx = selectIndex;
    if ((idx === undefined || idx === null) && selectedProject) {
      idx = projects.findIndex((p) => p.name === selectedProject.name);
    }
    if (idx != null && idx >= 0 && containerRef.current) {
      const items = Array.from(
        containerRef.current.querySelectorAll<HTMLDivElement>(".carousel-item"),
      );
      const target = items[idx];
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
        setCenteredIndex(idx);
      }
    }
  }, [selectIndex, selectedProject, projects]);

  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(centeredIndex);
    }
  }, [centeredIndex, onIndexChange]);

  return (
    <div>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="hide-scrollbar flex h-20 w-full max-w-screen snap-x snap-mandatory items-center overflow-x-auto scroll-smooth rounded-2xl"
      >
        <div className="flex items-center gap-10 space-x-4 px-[100vw] md:gap-60">
          {projects.map((project, idx) => (
            <motion.div
              animate={
                centeredIndex === idx
                  ? { scale: 1.1, y: -10, opacity: 1 }
                  : { scale: 0.9, y: 0, opacity: 0.8 }
              }
              key={idx}
              className={`carousel-item min-w-24 flex-shrink-0 cursor-pointer snap-center rounded-2xl px-4 py-2 text-center ${centeredIndex === idx ? "border-2 border-blue-500" : "border-none"} `}
            >
              {project.name}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex h-3 w-full items-center justify-center">
        {projects.map((_, idx) => (
          <motion.div
            key={idx}
            className={`m-1 h-2 w-2 cursor-pointer rounded-full transition-all duration-200 hover:h-3 hover:w-3 hover:bg-gray-300 ${centeredIndex === idx ? "bg-blue-500 hover:bg-blue-500!" : "bg-gray-300/50"} inline-block`}
            onClick={() => {
              const container = containerRef.current;
              if (container) {
                const items = Array.from(
                  container.querySelectorAll<HTMLDivElement>(".carousel-item"),
                );
                const targetItem = items[idx];
                if (targetItem) {
                  targetItem.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                  if (onIndexChange) {
                    onIndexChange(idx);
                  }
                }
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
