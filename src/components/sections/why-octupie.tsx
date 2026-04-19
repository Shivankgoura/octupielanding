import { OctupieLogo } from "@/components/logo";

type Row = {
  pain: string;
  painDetail: string;
  fix: string;
  fixDetail: string;
  tag: string;
};

const rows: Row[] = [
  {
    tag: "Voice",
    pain: "Generic scripts in someone else's voice",
    painDetail:
      "Most tools give back content that already circulates everywhere, just with another AI voiceover pasted on top.",
    fix: "Voice-matched rewrites",
    fixDetail:
      "Octupie studies your past videos, captions and comments to rewrite outlier scripts in your tone, pacing and vocabulary. Not a generic template.",
  },
  {
    tag: "Workflow",
    pain: "\"It's just a research tool\"",
    painDetail:
      "Current tools stop at showing you top videos. You still have to script, hook, title and caption everything yourself.",
    fix: "End-to-end agentic workflow",
    fixDetail:
      "Research, outlier analysis, hook, script, title and caption happen in one connected flow. You leave with something ready to shoot.",
  },
  {
    tag: "Direction",
    pain: "You have to know exactly what to look for",
    painDetail:
      "If you don't already have a strong angle, research tools surface noise and you end up copying the wrong things.",
    fix: "Daily outlier briefs for your niche",
    fixDetail:
      "Octupie pushes a curated daily shortlist of outliers and angles that fit your style, so you always have a concrete starting point.",
  },
  {
    tag: "Hooks",
    pain: "Copy-paste hooks that nobody reacts to",
    painDetail:
      "Recycled hook templates feel obvious the second viewers see them. Retention drops in the first 2 seconds.",
    fix: "Hook recreation, not repetition",
    fixDetail:
      "We identify why a hook worked (pattern, tension, curiosity gap) and rebuild one for your topic. Same mechanic, different words.",
  },
];

export function WhyOctupie() {
  return (
    <section id="why" className="relative overflow-x-clip py-20 md:py-28">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl divider-line" />
      <div className="pointer-events-none absolute -left-40 top-40 h-72 w-72 rounded-full bg-[#014CE3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-72 w-72 rounded-full bg-[#4C61FF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1100px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#9BB2FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4C61FF]" />
            Why Octupie
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight tracking-tight text-white md:text-[56px]">
            Built to fix what research
            <br className="hidden md:block" /> tools leave unfinished
          </h2>
          <p className="mt-5 text-white/70 md:text-lg">
            We talked to creators using today&apos;s viral-research apps. The
            same complaints came up. Octupie is the answer to each one.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {rows.map((r, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#040E22] transition hover:border-[#4C61FF]/40"
            >
              {/* tag + index in top-right corner */}
              <div className="absolute right-5 top-5 z-10 flex items-center gap-2">
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                  {r.tag}
                </span>
                <span className="font-heading text-sm text-white/30">
                  0{i + 1}
                </span>
              </div>

              {/* Problem half */}
              <div className="relative bg-[radial-gradient(120%_120%_at_0%_0%,rgba(239,68,68,0.08),transparent_55%)] px-7 pt-7 pb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-red-400/25 bg-red-500/12 text-xs font-bold text-red-300">
                    ✕
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-300/80">
                    The problem
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-[20px] leading-snug tracking-tight text-white/90 md:text-[22px]">
                  {r.pain}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {r.painDetail}
                </p>
              </div>

              {/* Connector: vertical chevron arrow flowing down into the fix */}
              <div className="relative flex items-center px-7" aria-hidden>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="mx-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#4C61FF]/40 bg-[#0a1636] text-[#9BB2FF]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1 V 11 M2 7 L 6 11 L 10 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              {/* Fix half */}
              <div className="relative bg-[radial-gradient(120%_120%_at_100%_100%,rgba(76,97,255,0.14),transparent_60%)] px-7 pt-6 pb-7">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[#4C61FF]/40 bg-[#4C61FF]/15">
                    <OctupieLogo className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9BB2FF]">
                    Octupie fixes it
                  </span>
                </div>
                <h4 className="mt-3 font-heading text-[20px] leading-snug tracking-tight text-white md:text-[22px]">
                  {r.fix}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {r.fixDetail}
                </p>
              </div>

              {/* subtle accent border on hover */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#4C61FF]/0 to-transparent transition group-hover:via-[#4C61FF]/60" />
            </article>
          ))}
        </div>

        {/* footnote strip */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center text-xs text-white/45 md:flex-row md:justify-center md:gap-6">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
            Common pain in research tools today
          </span>
          <span className="hidden h-3 w-px bg-white/10 md:inline-block" />
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4C61FF]" />
            How Octupie is built differently
          </span>
        </div>
      </div>
    </section>
  );
}
