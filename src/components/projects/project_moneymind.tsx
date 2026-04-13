import { FaGithub } from "react-icons/fa";
import FadeInDiv from "@/animation/FadeInDiv";
import SpringFromAbove from "@/animation/SpringFromAbove";
import ProjectImageCard from "./project_image_card";
import ProjectMoneyMindGallery from "./project_moneymind_gallery";

const galleryImages = Array.from({ length: 26 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `/images/MoneyMind/moneymind-${number}.png`,
    alt: `MoneyMind app screenshot ${number}`,
  };
});

const techStack = [
  {
    title: "React Native",
    description:
      "Built the mobile app UI and finance flows for tracking income and expenses.",
  },
  {
    title: "Express.js",
    description:
      "Served the backend API used by the app to sync and persist financial data.",
  },
  {
    title: "MySQL",
    description:
      "Stored user finance records and project data in a relational database.",
  },
] as const;

export default function ProjectMoneyMind() {
  return (
    <SpringFromAbove className="mt-20 flex min-h-screen w-full flex-col items-center px-4 pb-16 md:px-8">
      <FadeInDiv className="grid w-full max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:p-10">
        <div className="flex flex-col justify-center gap-6">
          <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs tracking-[0.28em] text-white/60 uppercase">
            Featured Project
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              MoneyMind
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Track smarter. Spend clearer. Grow further. MoneyMind helps you
              log income & expenses fast, stay on budget, unlock insights, and
              build toward long-term goals right up to retirement.
            </p>
          </div>

          <a
            className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white px-8 py-3 font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
            href="https://github.com/PerthTheIamCat/MoneyMind.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
            <FaGithub className="ml-2 inline scale-110" />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative flex w-full max-w-[340px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/20">
            <ProjectImageCard
              src="/images/MoneyMind/moneymind-logo.png"
              alt="MoneyMind logo"
              width={340}
              height={340}
              className="mx-auto w-full max-w-[260px] md:max-w-[300px]"
              loading="eager"
              sizes="(min-width: 768px) 300px, 260px"
              imageClassName="h-auto w-full"
            />
          </div>
        </div>
      </FadeInDiv>

      <section className="mt-12 w-full max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur">
            <p className="text-xs tracking-[0.28em] text-white/50 uppercase">
              Tech Stack
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Built with the app stack from the project
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              The stack below reflects the actual project implementation
              documented in my CV: a mobile app built with React Native and a
              backend powered by Express.js and MySQL.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React Native", "Express.js", "MySQL"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {techStack.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 shadow-md shadow-black/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl">
        <div className="mt-12 mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.28em] text-white/50 uppercase">
              Gallery Preview
            </p>
          </div>
        </div>

        <ProjectMoneyMindGallery images={galleryImages} />
      </section>
    </SpringFromAbove>
  );
}
