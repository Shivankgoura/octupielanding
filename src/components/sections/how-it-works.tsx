"use client";

import { useState } from "react";
import {
  StepIllustration,
  type StepIllustrationKey,
} from "@/components/step-illustrations";

type Step = {
  label: string;
  shortLabel: string;
  title: string;
  body: string;
  illustration: StepIllustrationKey;
};

const steps: Step[] = [
  {
    label: "STEP 1",
    shortLabel: "Research",
    title: "Pick the creators you want to learn from",
    body: "Plug in any Instagram handle. Octupie tracks what's working for them in near real-time. LinkedIn support is on the roadmap.",
    illustration: "pick",
  },
  {
    label: "STEP 2",
    shortLabel: "Analyse",
    title: "Surface their actual outliers",
    body: "We filter out their baseline and show only videos that massively out-performed. The ones worth studying.",
    illustration: "outliers",
  },
  {
    label: "STEP 3",
    shortLabel: "Script",
    title: "Analyse the why: hooks, beats, style",
    body: "Octupie breaks down each outlier: hook pattern, story beats, pacing, format and the angle that made it land.",
    illustration: "analyse",
  },
  {
    label: "STEP 4",
    shortLabel: "Caption",
    title: "Recreate in your voice: script, title, caption",
    body: "One click turns insight into a ready-to-shoot script plus matching titles and captions, tuned to your tone and niche.",
    illustration: "recreate",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const visible = hovered ?? active;
  const current = steps[visible];

  return (
    <section id="how-it-works" className="relative overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl leading-tight tracking-tight text-[#0B1430] md:text-[56px] dark:text-white">
            How Octupie works
          </h2>
          <p className="mt-4 text-[#0B1430]/70 md:text-lg dark:text-white/70">
            One agentic loop. No more jumping between tabs, tools and
            half-finished docs.
          </p>

          {/* Visual flow pills (replaces the arrow tagline) */}
          <div className="mt-8 hidden items-center justify-center gap-2 md:flex">
            {steps.map((s, i) => (
              <div key={s.shortLabel} className="flex items-center gap-2">
                <div
                  className={[
                    "flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                    visible === i
                      ? "border-[#4C61FF] bg-[#F0F4FF] text-[#0B1430] shadow-[0_0_0_4px_rgba(76,97,255,0.12)] dark:bg-[#0a1636] dark:text-white"
                      : "border-black/10 bg-black/[0.03] text-[#0B1430]/65 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/65",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold",
                      visible === i
                        ? "bg-[#014CE3] text-white"
                        : "bg-black/10 text-[#0B1430]/70 dark:bg-white/10 dark:text-white/70",
                    ].join(" ")}
                  >
                    {i + 1}
                  </span>
                  {s.shortLabel}
                </div>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className={
                      visible > i
                        ? "text-[#4C61FF]/90"
                        : "text-[#0B1430]/25 dark:text-white/25"
                    }
                  >
                    <svg width="22" height="10" viewBox="0 0 22 10">
                      <path
                        d="M0 5 L 18 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        fill="none"
                      />
                      <polygon points="22,5 16,1.5 16,8.5" fill="currentColor" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile fallback (no pills, simple line) */}
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#0B1430]/45 md:hidden dark:text-white/45">
            Research · Analyse · Script · Caption
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[380px_1fr]">
          <div className="flex flex-col gap-3">
            {steps.map((s, i) => {
              const isActive = visible === i;
              return (
                <button
                  key={s.label}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className={[
                    "group relative overflow-hidden rounded-2xl border p-5 text-left transition",
                    isActive
                      ? "border-[#014CE3]/50 bg-[#F0F4FF] dark:bg-[#0a1636]"
                      : "border-black/10 bg-white hover:border-black/20 hover:bg-[#F5F7FB] dark:border-white/10 dark:bg-[#040E22] dark:hover:border-white/20 dark:hover:bg-[#081433]",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "text-[11px] font-medium tracking-[0.18em] transition",
                      isActive ? "text-[#014CE3] dark:text-[#4C61FF]" : "text-[#0B1430]/50 dark:text-white/50",
                    ].join(" ")}
                  >
                    {s.label}
                  </div>
                  <div className="mt-2 font-heading text-[22px] leading-snug tracking-tight text-[#0B1430] dark:text-white">
                    {s.title}
                  </div>
                  <div className="mt-1.5 text-sm text-[#0B1430]/65 dark:text-white/65">{s.body}</div>
                  {isActive && (
                    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                      <div className="h-full w-1/3 bg-[#4C61FF]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#040E22] p-3">
              <div className="card-gradient-border relative aspect-[16/10] overflow-hidden rounded-xl bg-[#040E22]">
                <StepIllustration
                  key={current.illustration}
                  k={current.illustration}
                />
              </div>
              <div className="px-2 pt-3 pb-1">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4C61FF]">
                  {current.label}
                </div>
                <div className="mt-1 font-heading text-lg text-white">
                  {current.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
