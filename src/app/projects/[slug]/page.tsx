// src/app/projects/[slug]/page.tsx
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectMoneyMindLoading from "@/components/projects/project_moneymind_loading";

const ProjectMoneyMind = dynamic(
  () => import("@/components/projects/project_moneymind"),
  {
    loading: () => <ProjectMoneyMindLoading />,
  },
);
const ProjectKuponV1 = dynamic(
  () => import("@/components/projects/project_kupon_v1"),
  {
    loading: () => <ProjectMoneyMindLoading />,
  },
);

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proj = projects.find((p) => p.slug === slug);
  return {
    title: proj ? proj.name : "Unknown Project",
    description: proj ? proj.description : "No description available.",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "moneymind") {
    return (
      <div className="flex min-h-screen w-full">
        <ProjectMoneyMind />
      </div>
    );
  }

  if (slug === "kupon") {
    return (
      <div className="flex min-h-screen w-full">
        <ProjectKuponV1 />
      </div>
    );
  }

  notFound();
}
