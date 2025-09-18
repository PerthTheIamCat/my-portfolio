import SlideBar from "@/components/SlideBar";
import { projects } from "@/data/projects";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio - Project",
  description: "Explore my projects and the technologies I use.",
};

export default function Project({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-rows-[124px_1fr] justify-center">
      <SlideBar projects={projects} enableGlobalSwipe />
      {children}
    </div>
  );
}
