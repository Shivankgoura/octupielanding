"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "@/lib/assets";

type Step = {
  label: string;
  title: string;
  body: string;
  image: string;
};

const steps: Step[] = [
  {
    label: "STEP 1",
    title: "Customize your feed",
    body: "Discover successful channels from Instagram, TikTok, & YouTube Shorts.",
    image: assets.steps.s1,
  },
  {
    label: "STEP 2",
    title: "Find outlier videos",
    body: "Explore the top-performing videos in your niche.",
    image: assets.steps.s2,
  },
  {
    label: "STEP 3",
    title: "Understand why they went viral",
    body: "Get in-depth analysis of why videos went viral and how to recreate their success.",
    image: assets.steps.s3,
  },
  {
    label: "STEP 4",
    title: "Write winning short-form scripts",
    body: "Turn winning ideas into unique scripts using data-backed storytelling.",
    image: assets.steps.s4,
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl leading-tight tracking-tight text-white md:text-[56px]">
            How it works
          </h2>
          <p className="mt-4 text-white/70 md:text-lg">
            Octupie handles the heavy lifting of idea research and scriptwriting
            so you can focus on bringing your short-form videos to life.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr]">
          <div className="flex flex-col gap-3">
            {steps.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={[
                  "group relative overflow-hidden rounded-2xl border p-5 text-left transition",
                  active === i
                    ? "border-[#014CE3]/50 bg-[#0a1636]"
                    : "border-white/10 bg-[#040E22] hover:border-white/20",
                ].join(" ")}
              >
                <div
                  className={[
                    "text-[11px] font-medium tracking-[0.18em] transition",
                    active === i ? "text-[#4C61FF]" : "text-white/50",
                  ].join(" ")}
                >
                  {s.label}
                </div>
                <div className="mt-2 font-heading text-[22px] leading-snug tracking-tight text-white">
                  {s.title}
                </div>
                <div className="mt-1.5 text-sm text-white/65">{s.body}</div>
                {active === i && (
                  <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/3 bg-[#4C61FF]" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#040E22] p-4">
            <div className="card-gradient-border relative aspect-[16/10] overflow-hidden rounded-xl bg-[#040E22]">
              <Image
                key={current.image}
                src={current.image}
                alt={current.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
