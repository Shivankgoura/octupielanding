type Row = {
  tag: string;
  pain: string;
  fix: string;
};

const rows: Row[] = [
  {
    tag: "Voice",
    pain: "Generic scripts in someone else's voice",
    fix: "Voice matched rewrites",
  },
  {
    tag: "Workflow",
    pain: "\"It's just a research tool\"",
    fix: "End to end agentic workflow",
  },
  {
    tag: "Direction",
    pain: "You have to know exactly what to look for",
    fix: "Daily outlier briefs for your niche",
  },
  {
    tag: "Hooks",
    pain: "Copy paste hooks that nobody reacts to",
    fix: "Hook recreation, not repetition",
  },
];

export function WhyOctupie() {
  return (
    <section id="why" className="relative overflow-x-clip py-20 md:py-28">
      <div className="relative mx-auto max-w-[1100px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#014CE3] dark:text-[#4C61FF]">
            Why Octupie
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight tracking-tight text-[#0B1430] md:text-[56px] dark:text-white">
            Built to fix what research
            <br className="hidden md:block" /> tools leave unfinished
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {rows.map((r, i) => (
            <article
              key={i}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_2px_rgba(11,20,48,0.04)] transition hover:border-[#4C61FF]/40 dark:border-white/10 dark:bg-[#040E22] dark:shadow-none"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#0B1430]/50 dark:text-white/50">
                {r.tag}
              </p>
              <p className="mt-3 text-sm text-[#0B1430]/60 dark:text-white/55">
                <span
                  aria-hidden
                  className="mr-2 inline-block h-1.5 w-1.5 -translate-y-[2px] rounded-full bg-red-400/70 align-middle"
                />
                {r.pain}
              </p>
              <h3 className="mt-2 font-heading text-[20px] leading-snug tracking-tight text-[#0B1430] md:text-[22px] dark:text-white">
                <span
                  aria-hidden
                  className="mr-2 inline-block h-1.5 w-1.5 -translate-y-[3px] rounded-full bg-[#4C61FF] align-middle"
                />
                {r.fix}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
