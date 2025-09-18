// src/app/projects/[slug]/page.tsx
import { Metadata } from "next";
import { projects } from "@/data/projects";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
const ProjectMoneyMind = dynamic(
  () => import("@/components/projects/project_moneymind"),
);

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.name.replace(/\s+/g, "-").toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proj = projects.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === slug,
  );
  return {
    title: proj ? proj.name : "Unknown Project",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex min-h-screen w-full">
      {slug === "moneymind" ? <ProjectMoneyMind /> : <Loading />}
    </div>
  );
}
