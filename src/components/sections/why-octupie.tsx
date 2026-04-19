type Row = {
  pain: string;
  painDetail: string;
  fix: string;
  fixDetail: string;
};

const rows: Row[] = [
  {
    pain: "Generic scripts in someone else's voice",
    painDetail:
      "Most tools give back content that already circulates everywhere, just with another AI voiceover pasted on top.",
    fix: "Voice-matched rewrites",
    fixDetail:
      "Octupie studies your past videos, captions and comments to rewrite outlier scripts in your tone, pacing and vocabulary. Not a generic template.",
  },
  {
    pain: "\"It's just a research tool\"",
    painDetail:
      "Current tools stop at showing you top videos. You still have to script, hook, title and caption everything yourself.",
    fix: "End-to-end agentic workflow",
    fixDetail:
      "Research, outlier analysis, hook, script, title and caption happen in one connected flow. You leave with something ready to shoot.",
  },
  {
    pain: "You have to know exactly what to look for",
    painDetail:
      "If you don't already have a strong angle, research tools surface noise and you end up copying the wrong things.",
    fix: "Daily outlier briefs for your niche",
    fixDetail:
      "Octupie pushes a curated daily shortlist of outliers and angles that fit your style, so you always have a concrete starting point.",
  },
  {
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
    <section id="why" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C61FF]">
            Why Octupie
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight tracking-tight text-white md:text-[56px]">
            Built to fix what research
            <br className="hidden md:block" /> tools leave unfinished
          </h2>
          <p className="mt-4 text-white/70 md:text-lg">
            We talked to creators using today&apos;s viral-research apps. The
            same complaints came up. Octupie is the answer to each one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {rows.map((r, i) => (
            <article
              key={i}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#040E22] p-6"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/15 text-xs text-red-300">
                  ✕
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-red-300/80">
                  The problem
                </span>
              </div>
              <h3 className="mt-3 font-heading text-xl leading-snug tracking-tight text-white md:text-[22px]">
                {r.pain}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {r.painDetail}
              </p>

              <div className="my-5 h-px divider-line" />

              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4C61FF]/20 text-xs text-[#9BB2FF]">
                  ✓
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#9BB2FF]">
                  Octupie
                </span>
              </div>
              <h4 className="mt-3 font-heading text-xl leading-snug tracking-tight text-white md:text-[22px]">
                {r.fix}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {r.fixDetail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
