import SlideBar from "@/components/SlideBar";
import { projects } from "@/data/projects";
import { ReactNode } from "react";

export const metadata = {
  title: "My Portfolio - Project",
  description: "Explore my projects and the technologies I use.",
};

export default function Project({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <SlideBar projects={projects} />
      {children}
    </div>
  );
}
