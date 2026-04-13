"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageCardProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  loading: "eager" | "lazy";
  className?: string;
  imageClassName?: string;
};

export default function ProjectImageCard({
  src,
  alt,
  width,
  height,
  sizes,
  loading,
  className,
  imageClassName,
}: ProjectImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 transition-opacity duration-300 ${
          isLoaded ? "opacity-0" : "animate-pulse opacity-100"
        }`}
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`relative z-10 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${imageClassName ?? ""}`}
      />
    </div>
  );
}
