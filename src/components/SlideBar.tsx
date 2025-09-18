"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { useRouter } from "next/navigation";

interface Props {
  projects: Project[];
  selectIndex?: number;
  selectedProject?: Project | null;
  onIndexChange?: (index: number) => void;
  enableGlobalSwipe?: boolean; // allow swipe outside of component
}

export default function SlideBar({
  projects,
  selectIndex,
  selectedProject,
  onIndexChange,
  enableGlobalSwipe = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centeredIndex, setCenteredIndex] = useState(0);
  // Refs for swipe gesture tracking
  const pointerStartX = useRef<number | null>(null);
  const pointerLastX = useRef<number | null>(null);
  const pointerStartTime = useRef<number | null>(null);
  const isPointerDown = useRef(false);
  const lastPushedSlugRef = useRef<string | null>(null); // track last URL slug pushed to avoid duplicates

  const SWIPE_DISTANCE_THRESHOLD = 50; // px
  const SWIPE_VELOCITY_THRESHOLD = 0.3; // px/ms
  const router = useRouter();

  // Helper to scroll to a given index & update centeredIndex (and callback)
  const scrollToIndex = useCallback(
    (idx: number) => {
      if (!containerRef.current) return;
      if (idx < 0 || idx >= projects.length) return;
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
        if (onIndexChange) {
          onIndexChange(idx);
        }
      }
    },
    [projects, onIndexChange],
  );

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
    if (idx != null && idx >= 0) {
      scrollToIndex(idx);
    }
  }, [selectIndex, selectedProject, projects, scrollToIndex]);

  useEffect(() => {
    if (onIndexChange) onIndexChange(centeredIndex);
  }, [centeredIndex, onIndexChange]);

  useEffect(() => {
    const proj = projects[centeredIndex];
    if (!proj) return;
    const slug = proj.name.replace(/\s+/g, "-").toLowerCase();
    const handle = setTimeout(() => {
      if (lastPushedSlugRef.current === slug) return;
      router.replace(`/projects/${slug}`);
      lastPushedSlugRef.current = slug;
    }, 250);

    return () => clearTimeout(handle);
  }, [centeredIndex, projects, router]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDown.current = true;
    pointerStartX.current = e.clientX;
    pointerLastX.current = e.clientX;
    pointerStartTime.current = performance.now();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    pointerLastX.current = e.clientX;
  };

  const finalizeSwipe = useCallback(() => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    const startX = pointerStartX.current;
    const endX = pointerLastX.current;
    const startTime = pointerStartTime.current;
    pointerStartX.current = null;
    pointerLastX.current = null;
    pointerStartTime.current = null;
    if (startX == null || endX == null || startTime == null) return;
    const dx = endX - startX; // positive = moved right, meaning swipe right -> previous item
    const dt = performance.now() - startTime;
    const velocity = Math.abs(dx) / dt;
    const absDx = Math.abs(dx);
    const shouldTrigger =
      absDx > SWIPE_DISTANCE_THRESHOLD || velocity > SWIPE_VELOCITY_THRESHOLD;
    if (!shouldTrigger) return;
    if (dx > 0) {
      // swipe right -> previous
      scrollToIndex(centeredIndex - 1);
    } else if (dx < 0) {
      // swipe left -> next
      scrollToIndex(centeredIndex + 1);
    }
  }, [centeredIndex, scrollToIndex]);

  const handlePointerUp = () => finalizeSwipe();
  const handlePointerLeave = () => finalizeSwipe();

  // Global swipe (listen on window) if enabled
  useEffect(() => {
    if (!enableGlobalSwipe) return;
    const down = (e: PointerEvent) => {
      // ignore if target is interactive input elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName.toLowerCase();
        if (["input", "textarea", "button", "select"].includes(tag)) return;
      }
      isPointerDown.current = true;
      pointerStartX.current = e.clientX;
      pointerLastX.current = e.clientX;
      pointerStartTime.current = performance.now();
    };
    const move = (e: PointerEvent) => {
      if (!isPointerDown.current) return;
      pointerLastX.current = e.clientX;
    };
    const up = () => finalizeSwipe();
    const cancel = () => finalizeSwipe();
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", cancel, { passive: true });
    window.addEventListener("pointerleave", cancel, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", cancel);
      window.removeEventListener("pointerleave", cancel);
    };
  }, [enableGlobalSwipe, finalizeSwipe]);

  return (
    <div className="sticky top-0 z-10 h-fit w-full overflow-hidden py-4 backdrop-blur-xl">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="hide-scrollbar flex h-20 w-full max-w-screen snap-x snap-mandatory items-center overflow-x-auto scroll-smooth rounded-2xl"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
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
              onClick={() => {
                scrollToIndex(idx);
              }}
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
            className={`m-1 h-4 w-4 cursor-pointer rounded-full transition-all duration-200 hover:h-5 hover:w-5 hover:bg-gray-300 active:h-1 active:w-1 active:bg-white ${centeredIndex === idx ? "bg-blue-500 hover:bg-blue-500!" : "bg-gray-300/50"} inline-block`}
            onClick={() => {
              scrollToIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
