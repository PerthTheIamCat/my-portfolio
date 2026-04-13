import FadeInDiv from "@/animation/FadeInDiv";
import StartSpark from "@/animation/StarSpark";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export const metadata = {
  title: "My Portfolio - About Me",
  description: "Learn more about me and my background.",
};

const aboutFacts = [
  {
    label: "Background",
    value: "Computer Engineering student at Kasetsart University.",
  },
  {
    label: "Focus",
    value: "Full-stack and mobile development.",
  },
  {
    label: "Core Stack",
    value: "React Native, Next.js, Express.js, Elysia, MySQL, PostgreSQL",
  },
  {
    label: "Experience",
    value: "Finance apps, web apps, and club tools.",
  },
  {
    label: "Work Style",
    value: "Practical, detail-oriented, and maintainable.",
  },
  {
    label: "Direction",
    value: "Build useful products with clear UI and reliable code.",
  },
] as const;

export default function AboutMe() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-7xl flex-col gap-16 px-4 py-8 sm:px-6 lg:px-10">
      <FadeInDiv
        delay={0.1}
        className="grid items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]"
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold tracking-[0.35em] text-white/55 uppercase">
            Hello, I&apos;m Pawit
          </p>
          <h1 className="max-w-2xl bg-gradient-to-br from-[rgba(102,204,255,1)] to-[rgba(255,153,255,0.8)] bg-clip-text text-5xl leading-none font-black text-transparent md:text-8xl">
            Full Stack Developer
          </h1>
          <p className="max-w-xl text-base leading-8 text-white/70 md:text-lg">
            I build with a focus on clean UI, practical features, and code that
            stays easy to maintain.
          </p>
        </div>
        <Image
          src={"/images/profiles/image2.png"}
          width={300}
          height={400}
          alt="Portrait photo of Pawit Thongkum"
          priority
          className="mx-auto h-auto w-full max-w-[320px] rounded-2xl border border-gray-300 object-cover shadow-lg"
        />
      </FadeInDiv>

      <FadeInDiv
        delay={0.15}
        className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold tracking-[0.35em] text-white/45 uppercase">
            Next steps
          </p>
          <h2 className="text-2xl font-semibold text-white/95">
            Open the detailed resume or browse selected projects.
          </h2>
          <p className="text-sm leading-7 text-white/70">
            This page stays concise on purpose. The resume and project pages
            carry the deeper timeline, stack, and case-study details.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/resume"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
          >
            See my Resume
            <FaArrowRight className="text-xs" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/5"
          >
            See my Projects
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </FadeInDiv>

      <FadeInDiv className="flex flex-col items-center justify-center">
        <StartSpark>
          <h2 className="text-2xl font-bold">Profile Summary</h2>
        </StartSpark>
      </FadeInDiv>

      <FadeInDiv
        delay={0.2}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8"
      >
        <div className="flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-white/45 uppercase">
              Professional profile
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white/95">
              Key details
            </h3>
          </div>
          <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.28em] text-white/55 uppercase">
            Profile
          </span>
        </div>

        <dl className="mt-6 grid gap-4">
          {aboutFacts.map((item) => (
            <div
              key={item.label}
              className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors duration-200 hover:bg-white/[0.06] md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 md:px-6 md:py-5"
            >
              <dt className="text-xs font-semibold tracking-[0.3em] text-white/45 uppercase md:pt-1">
                {item.label}
              </dt>
              <dd className="text-base leading-7 text-white/90 md:text-lg">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </FadeInDiv>
    </div>
  );
}
