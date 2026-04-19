"use client";

import { useState } from "react";

type QA = { q: string; a: string };
type Group = { label: string; items: QA[] };

const groups: Group[] = [
  {
    label: "Product",
    items: [
      {
        q: "How is Octupie different from existing viral-research tools?",
        a: "Most tools stop at surfacing popular videos. Octupie runs the full workflow: outlier detection, pattern analysis, hook recreation, script-writing in your voice, then titles and captions ready to post. It's an agentic system, not a search engine with a script button.",
      },
      {
        q: "Does it actually write in my voice, not a generic AI voice?",
        a: "Yes. That's the whole point. Octupie learns your tone from your past posts, captions and comments, then rewrites outlier scripts using your vocabulary, pacing and phrasing. The pattern is viral, the voice stays yours.",
      },
      {
        q: "What platforms does it support?",
        a: "Instagram Reels at launch. LinkedIn is on the roadmap as our next platform, with more to follow once we nail the core experience.",
      },
      {
        q: "Can I track specific creators?",
        a: "Yes. Paste any handle and Octupie monitors their output, surfaces their real outliers (not their baseline), and breaks down the hook, structure and angle behind each.",
      },
      {
        q: "Is this just another research tool?",
        a: "No. Octupie includes research, but it also produces ready-to-shoot scripts, titles and captions. Research is the starting point, not the finish line.",
      },
    ],
  },
  {
    label: "Waitlist",
    items: [
      {
        q: "When will Octupie launch?",
        a: "We're rolling out early access in waves. Join the waitlist with your name and email and you'll be among the first to get an invite.",
      },
      {
        q: "What do I get on the waitlist?",
        a: "Launch updates, early-access invites and (for the first batch of creators) founder pricing once billing goes live.",
      },
      {
        q: "Will you spam me?",
        a: "No. You'll only hear from us about Octupie product launches, updates and your invite. You can unsubscribe from any email.",
      },
      {
        q: "What do you do with my data?",
        a: "We store your name and email solely to notify you about Octupie. We never sell or share it with third parties.",
      },
    ],
  },
];

export function Faq() {
  const [tab, setTab] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl leading-tight tracking-tight text-white md:text-[56px]">
            Still have questions?
          </h2>
          <a
            href="mailto:hello@octupie.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-[#4C61FF] transition hover:text-white"
          >
            Contact us →
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#040E22] p-1">
            {groups.map((g, i) => (
              <button
                key={g.label}
                onClick={() => {
                  setTab(i);
                  setOpenIdx(0);
                }}
                className={[
                  "rounded-full px-5 py-2 text-sm transition",
                  tab === i
                    ? "bg-[#15223C] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]"
                    : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-3">
          {groups[tab].items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#040E22]"
              >
                <button
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="font-heading text-base text-white md:text-lg">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={[
                      "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition",
                      open ? "rotate-45" : "",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>
                <div
                  className={[
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
