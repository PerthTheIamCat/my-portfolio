// src/app/projects/page.tsx
import { projects } from "@/data/projects";
import { redirect } from "next/navigation";
import Loading from "../loading";

export default function ProjectsIndex() {
  if (projects.length > 0) {
    redirect(`/projects/${projects[0].slug}`);
  }
  return <Loading />;
}
