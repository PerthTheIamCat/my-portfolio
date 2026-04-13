"use client";

import { useState } from "react";
import FadeInDiv from "@/animation/FadeInDiv";
import ProjectImageCard from "./project_image_card";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProjectMoneyMindGalleryProps = {
  images: readonly GalleryImage[];
};

export default function ProjectMoneyMindGallery({
  images,
}: ProjectMoneyMindGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const previewCount = 4;
  const previewImages = images.slice(0, previewCount);
  const remainingImages = images.slice(previewCount);
  const hasMore = remainingImages.length > 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {previewImages.map((image, index) => (
          <FadeInDiv
            key={image.src}
            delay={0.05 + index * 0.05}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-lg shadow-black/20"
          >
            <article>
              <ProjectImageCard
                src={image.src}
                alt={image.alt}
                width={1320}
                height={2868}
                className="w-full"
                loading="lazy"
                sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                imageClassName="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </article>
          </FadeInDiv>
        ))}
      </div>

      {hasMore ? (
        <div className="space-y-6">
          <div className="flex justify-center">
            <button
              type="button"
              aria-controls="moneymind-gallery-more"
              onClick={() => setExpanded((value) => !value)}
              className="inline-flex items-center rounded-full border border-white/20 bg-white px-7 py-3 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
            >
              {expanded ? "Show less" : `See more (${remainingImages.length})`}
            </button>
          </div>

          {expanded && (
            <div
              id="moneymind-gallery-more"
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            >
              {remainingImages.map((image, index) => (
                <FadeInDiv
                  key={image.src}
                  delay={0.05 + index * 0.03}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-lg shadow-black/20"
                >
                  <article>
                    <ProjectImageCard
                      src={image.src}
                      alt={image.alt}
                      width={1320}
                      height={2868}
                      className="w-full"
                      loading="lazy"
                      sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      imageClassName="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  </article>
                </FadeInDiv>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
