"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, ImageIcon } from "lucide-react";
import heroImg from "@/assets/hereo3.jpg";

type Mode = "video" | "image";

export default function HeroMedia() {
  const [mode, setMode] = useState<Mode>("video");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMode("image");
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (mode === "video") video.play().catch(() => {});
    else video.pause();
  }, [mode]);

  const options: { value: Mode; label: string; icon: typeof Play }[] = [
    { value: "video", label: "Video", icon: Play },
    { value: "image", label: "Image", icon: ImageIcon },
  ];

  return (
    <>
      {/* Image */}
      <Image
        src={heroImg}
        alt="Volleyball player spiking at the net"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-[30%_top] transition-opacity duration-700 lg:object-top ${
          mode === "image" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroImg.src}
        aria-hidden
        className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
          mode === "video" ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/video/nva-highlights2.mp4" type="video/mp4" />
      </video>

      {/* Toggle — top-right */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl justify-end px-6 pt-6 sm:px-8 md:pt-10">
          <div
            role="group"
            aria-label="Background type"
            className="pointer-events-auto flex gap-1 rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-md"
          >
            {options.map(({ value, label, icon: Icon }) => {
              const active = mode === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMode(value)}
                  aria-pressed={active}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 sm:px-4 sm:py-2 ${
                    active
                      ? "bg-white text-[#064898]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <Icon aria-hidden className="size-3.5" />
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sr-only sm:hidden">{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}