"use client";

import { useState } from "react";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
};

const plans: Plan[] = [
  {
    name: "Pro",
    tagline:
      "For everyone who wants to grow faster on social — smart, instant and seamless.",
    monthly: 49,
    yearly: 39,
    features: [
      "Explore a custom curated feed of high-performing videos",
      "Get personalized playbooks to recreate successful videos",
      "Develop ideas into your own unique scripts",
      "Automatically track up to 50 channels",
      "100 credits per month",
    ],
    ctaLabel: "Start for Free",
  },
  {
    name: "Visionary",
    tagline:
      "For power users who want maximum leverage, insights, and automation.",
    monthly: 99,
    yearly: 79,
    popular: true,
    features: [
      "Everything in Pro, plus:",
      "Deploy AI agents for automated feed exploration (coming soon)",
      "Automatically track up to 100 channels",
      "250 credits per month",
    ],
    ctaLabel: "Start for Free",
  },
  {
    name: "Titan",
    tagline: "For experts ready to apply their winning strategies at scale.",
    monthly: 499,
    yearly: 399,
    features: [
      "Everything in Visionary, plus:",
      "Build automations with the API (coming soon)",
      "10 workspaces for up to 1000 tracked channels (coming soon)",
      "Workspace guests (coming soon)",
      "1500 credits per month",
    ],
    ctaLabel: "Start for Free",
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C61FF]">
            Pricing
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight tracking-tight text-white md:text-[56px]">
            Scalable pricing
          </h2>
          <p className="mt-4 text-white/70 md:text-lg">
            Stop wasting time making content that doesn&apos;t work.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center gap-1 rounded-full border border-white/10 bg-[#040E22] p-1">
            <button
              onClick={() => setYearly(false)}
              className={[
                "relative z-10 rounded-full px-5 py-2 text-sm transition",
                !yearly ? "bg-[#15223C] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={[
                "relative z-10 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm transition",
                yearly ? "bg-[#15223C] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Yearly
              <span className="rounded-full bg-[#014CE3] px-2 py-0.5 text-[10px] font-medium text-white">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={[
                "relative flex flex-col overflow-hidden rounded-2xl border p-8 transition",
                p.popular
                  ? "border-[#014CE3]/60 bg-[#0a1636] shadow-[0_20px_60px_rgba(1,76,227,0.25)]"
                  : "border-white/10 bg-[#040E22]",
              ].join(" ")}
            >
              {p.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-[#014CE3] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white">
                  Popular
                </div>
              )}

              <h3 className="font-heading text-2xl text-white">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {p.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-heading text-5xl text-white">
                  ${yearly ? p.yearly : p.monthly}
                </span>
                <span className="text-sm text-white/55">/mo</span>
              </div>
              <div className="text-xs text-white/55">
                Billed {yearly ? "Yearly" : "Monthly"}
              </div>

              <a
                href="#"
                className={[
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition",
                  p.popular
                    ? "bg-[#014CE3] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_10px_30px_rgba(1,76,227,0.45)] hover:bg-[#4C61FF]"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
                ].join(" ")}
              >
                {p.ctaLabel} →
              </a>

              <div className="mt-8 h-px w-full divider-line" />

              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#014CE3]/20 text-[#4C61FF]"
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
