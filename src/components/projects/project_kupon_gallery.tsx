"use client";

import FadeInDiv from "@/animation/FadeInDiv";
import { useState } from "react";
import ProjectImageCard from "./project_image_card";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProjectKuponGalleryProps = {
  images: readonly GalleryImage[];
  galleryId: string;
  emptyStateEyebrow?: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  previewCount?: number;
};

export default function ProjectKuponGallery({
  images,
  galleryId,
  emptyStateEyebrow = "Gallery placeholder",
  emptyStateTitle,
  emptyStateDescription,
  previewCount = 4,
}: ProjectKuponGalleryProps) {
  const [expanded, setExpanded] = useState(false);

  if (images.length === 0) {
    return (
      <FadeInDiv className="rounded-[1.75rem] border border-dashed border-white/15 bg-white/5 p-8 shadow-lg shadow-black/10 backdrop-blur">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold tracking-[0.35em] text-white/45 uppercase">
            {emptyStateEyebrow}
          </p>
          <h3 className="text-2xl font-semibold text-white/95">
            {emptyStateTitle}
          </h3>
          <p className="max-w-xl text-sm leading-7 text-white/65">
            {emptyStateDescription}
          </p>
        </div>
      </FadeInDiv>
    );
  }

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
              aria-controls={galleryId}
              onClick={() => setExpanded((value) => !value)}
              className="inline-flex items-center rounded-full border border-white/20 bg-white px-7 py-3 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
            >
              {expanded ? "Show less" : `See more (${remainingImages.length})`}
            </button>
          </div>

          {expanded ? (
            <div
              id={galleryId}
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
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
