// src/app/projects/page.tsx
import { projects } from "@/data/projects";
import { redirect } from "next/navigation";
import Loading from "../loading";

export default function ProjectsIndex() {
  if (projects.length > 0) {
    const slug = projects[0].name.replace(/\s+/g, "-").toLowerCase();
    redirect(`/projects/${slug}`);
  }
  return <Loading />;
}
