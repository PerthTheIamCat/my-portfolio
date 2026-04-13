import fs from "node:fs";
import path from "node:path";

import FadeInDiv from "@/animation/FadeInDiv";
import SpringFromAbove from "@/animation/SpringFromAbove";
import ProjectImageCard from "./project_image_card";
import ProjectKuponGallery from "./project_kupon_gallery";
import { FaArrowRight, FaFacebookF, FaLeaf } from "react-icons/fa6";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProjectAssets = {
  posterSrc: string | null;
  galleryImages: GalleryImage[];
};

type ProjectAssetConfig = {
  folder: string;
  prefix: string;
  title: string;
  posterBasenames?: readonly string[];
};

const FACEBOOK_AWARD_URL = "https://www.facebook.com/share/p/1CAJHCTuDC/";
const SUPPORTED_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
]);
const V1_ASSET_CONFIG = {
  folder: "KuponV1",
  prefix: "kupon-v1",
  title: "KUpon v1",
  posterBasenames: [
    "kupon-v1-award",
    "kupon-v1-poster",
    "kupon-v1-cover",
  ] as const,
} as const;
const V2_ASSET_CONFIG = {
  folder: "KuponV2",
  prefix: "kupon-v2",
  title: "KUpon v2",
} as const;

const techStack = [
  {
    title: "SvelteKit",
    description:
      "Built the front-end flow for viewing coupon statuses and handling the digital exchange experience.",
  },
  {
    title: "Express",
    description:
      "Provided the backend API for coupon workflows, exchange logic, and project data handling.",
  },
  {
    title: "PostgreSQL",
    description:
      "Stored coupon records, user data, and exchange history in a relational database.",
  },
] as const;

const impactNotes = [
  "Paperless food-coupon exchange",
  "Less waste, more efficient campus workflow",
  "Excellent Award - KU SDGs Project Competition 2025",
] as const;
const v1UsageFacts = [
  {
    label: "Live usage",
    value: "Used in the first-year welcome event.",
  },
  {
    label: "Scale",
    value: "Supported more than 2,000 users.",
  },
] as const;
const v2Stack = ["Next.js", "Rust", "PostgreSQL"] as const;
const v2FlowSteps = [
  "Login",
  "Dashboard",
  "History",
  "Profile",
  "Confirm",
  "Success",
] as const;
const v2UsageFacts = [
  {
    label: "Live usage",
    value: "Used at the KU82 senior farewell event in 2569.",
  },
] as const;

function getFileBaseName(fileName: string) {
  const ext = path.extname(fileName).toLowerCase();
  return path.basename(fileName, ext).toLowerCase();
}

function isSupportedImage(fileName: string) {
  return SUPPORTED_EXTENSIONS.has(path.extname(fileName).toLowerCase());
}

function findAssetFile(files: string[], baseNames: readonly string[]) {
  for (const baseName of baseNames) {
    const match = files.find((file) => {
      if (!isSupportedImage(file)) return false;
      return getFileBaseName(file) === baseName;
    });
    if (match) return match;
  }

  return null;
}

function buildScreenshotRegex(prefix: string) {
  return new RegExp(`^${prefix}-(\\d+)\\.(png|jpe?g|webp|avif)$`, "i");
}

function getScreenshotIndex(fileName: string, screenshotRegex: RegExp) {
  const match = fileName.match(screenshotRegex);
  return Number(match?.[1] ?? Number.MAX_SAFE_INTEGER);
}

function readProjectAssets({
  folder,
  prefix,
  title,
  posterBasenames,
}: ProjectAssetConfig): ProjectAssets {
  const imageDir = path.join(process.cwd(), "public", "images", folder);
  if (!fs.existsSync(imageDir)) {
    return {
      posterSrc: null,
      galleryImages: [],
    };
  }

  const screenshotRegex = buildScreenshotRegex(prefix);
  const files = fs.readdirSync(imageDir);
  const posterFile = posterBasenames?.length
    ? findAssetFile(files, posterBasenames)
    : null;
  const galleryImages = files
    .filter((file) => screenshotRegex.test(file))
    .sort((left, right) => {
      const order =
        getScreenshotIndex(left, screenshotRegex) -
        getScreenshotIndex(right, screenshotRegex);
      return order !== 0 ? order : left.localeCompare(right);
    })
    .map((file) => {
      const number = file.match(screenshotRegex)?.[1] ?? file;

      return {
        src: `/images/${folder}/${file}`,
        alt: `${title} screenshot ${number}`,
      };
    });

  return {
    posterSrc: posterFile ? `/images/${folder}/${posterFile}` : null,
    galleryImages,
  };
}

function KuponPosterFallback() {
  return (
    <div className="relative flex aspect-[4/5] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white via-stone-100 to-rose-100 p-6 text-stone-900 shadow-2xl shadow-black/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.18),transparent_35%)]" />
      <div className="relative flex h-full w-full flex-col justify-between gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.35em] text-emerald-900/70 uppercase">
              Kasetsart University
            </p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-stone-500 uppercase">
              SDGs 2025
            </p>
          </div>
          <span className="rounded-full border border-amber-400/40 bg-white/70 px-3 py-1 text-[10px] font-semibold tracking-[0.35em] text-amber-900 uppercase">
            Award
          </span>
        </div>

        <div className="space-y-5 text-center">
          <div className="mx-auto w-fit rounded-full border border-rose-400/25 bg-rose-500/10 px-4 py-2 text-xs font-semibold tracking-[0.35em] text-rose-900 uppercase">
            Excellent Award
          </div>
          <h2 className="text-4xl font-black tracking-tight text-rose-900 md:text-5xl">
            KUpon
          </h2>
          <p className="mx-auto max-w-sm text-sm leading-7 text-stone-700">
            A digital food-coupon exchange that replaces paper coupons, reduces
            waste, and supports a greener campus workflow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectKuponV1() {
  const { posterSrc: v1PosterSrc, galleryImages: v1GalleryImages } =
    readProjectAssets(V1_ASSET_CONFIG);
  const { galleryImages: v2GalleryImages } = readProjectAssets(V2_ASSET_CONFIG);

  return (
    <SpringFromAbove className="mt-20 flex min-h-screen w-full flex-col items-center px-4 pb-16 md:px-8">
      <FadeInDiv
        delay={0.05}
        className="grid w-full max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:p-10"
      >
        <div className="flex flex-col justify-center gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold tracking-[0.28em] text-emerald-100/80 uppercase">
            <FaLeaf className="text-xs" />
            Sustainability Project
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              KUpon
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              A digital food-coupon exchange built to replace paper coupons,
              reduce waste, and make campus operations more sustainable. This
              page shows the award-winning v1 release first, followed by the
              later v2 refinement.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {impactNotes.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-white/75"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white px-8 py-3 font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
              href={FACEBOOK_AWARD_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              View award post
              <FaFacebookF className="ml-2 inline scale-110" />
              <FaArrowRight className="ml-2 inline text-sm" />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {v1UsageFacts.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-4"
              >
                <p className="text-[11px] font-semibold tracking-[0.28em] text-white/45 uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative flex w-full max-w-[420px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/20">
            {v1PosterSrc ? (
              <ProjectImageCard
                src={v1PosterSrc}
                alt="KUpon award poster"
                width={1200}
                height={1500}
                className="mx-auto w-full max-w-[320px] md:max-w-[360px]"
                loading="eager"
                sizes="(min-width: 768px) 360px, 320px"
                imageClassName="h-auto w-full"
              />
            ) : (
              <KuponPosterFallback />
            )}
          </div>
        </div>
      </FadeInDiv>

      <FadeInDiv delay={0.18} className="mt-12 w-full max-w-7xl">
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur">
            <p className="text-xs font-semibold tracking-[0.28em] text-white/50 uppercase">
              Recognition
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Excellent Award at the KU SDGs Project Competition 2025
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              KUpon turns paper food coupons into a digital workflow that is
              easier to manage, cleaner to use, and more aligned with an
              environmentally responsible campus process.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Kasetsart University", "SDGs", "Paperless", "Awarded"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-white/75"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {techStack.map((item, index) => (
              <FadeInDiv
                key={item.title}
                delay={0.08 + index * 0.08}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 shadow-md shadow-black/10"
              >
                <article>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {item.description}
                  </p>
                </article>
              </FadeInDiv>
            ))}
          </div>
        </section>
      </FadeInDiv>

      <FadeInDiv delay={0.3} className="mt-12 w-full max-w-7xl">
        <section className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-white/50 uppercase">
                Gallery Preview
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white/95">
                Versioned v1 screenshots
              </h2>
            </div>
          </div>

          <ProjectKuponGallery
            images={v1GalleryImages}
            galleryId="kupon-v1-gallery-more"
            emptyStateEyebrow="Version 1 gallery"
            emptyStateTitle="Screenshots will appear here"
            emptyStateDescription="Add the v1 screenshots to the project assets and this gallery will populate automatically."
          />
        </section>
      </FadeInDiv>

      <FadeInDiv delay={0.42} className="mt-16 w-full max-w-7xl">
        <section className="space-y-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl space-y-4">
                <p className="text-xs font-semibold tracking-[0.28em] text-white/50 uppercase">
                  Version 2
                </p>
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Refined flow
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                  v2 refines the sign-in and redemption flow with a clearer path
                  from login to dashboard, history, profile, confirmation, and
                  success. It uses Next.js on the front-end, Rust for the
                  backend, and PostgreSQL for storage.
                </p>

                <div className="flex flex-wrap gap-2">
                  {v2FlowSteps.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-white/75"
                    >
                      {step}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {v2Stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-100/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {v2UsageFacts.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-4"
                    >
                      <p className="text-[11px] font-semibold tracking-[0.28em] text-white/45 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/80">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 shadow-md shadow-black/10 lg:min-w-[260px]">
                <p className="text-xs font-semibold tracking-[0.28em] text-white/50 uppercase">
                  Journey
                </p>
                <ol className="mt-3 space-y-2 text-sm text-white/70">
                  {v2FlowSteps.map((step, index) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/70">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <ProjectKuponGallery
            images={v2GalleryImages}
            galleryId="kupon-v2-gallery-more"
            emptyStateEyebrow="Version 2 gallery"
            emptyStateTitle="Screenshots will appear here"
            emptyStateDescription="Add the v2 screenshots to the project assets and this gallery will populate automatically."
          />
        </section>
      </FadeInDiv>
    </SpringFromAbove>
  );
}
