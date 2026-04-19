import Image from "next/image";
import { assets } from "@/lib/assets";

export function Cta() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#040E22] px-8 py-16 text-center md:px-16 md:py-20">
          <Image
            src={assets.footerBg}
            alt=""
            fill
            className="pointer-events-none object-cover opacity-60"
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#040E22]/40 to-[#040E22]" />

          <div className="relative">
            <h2 className="font-heading text-4xl leading-tight tracking-tight text-white md:text-[64px]">
              Stop wasting time making
              <br className="hidden md:block" /> content that doesn&apos;t work
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75 md:text-lg">
              Follow a scalable workflow and ship winning short-form videos in
              under 30 minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#014CE3] px-7 py-3.5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_10px_30px_rgba(1,76,227,0.5)] transition hover:bg-[#4C61FF]"
              >
                Try It For Free
                <span aria-hidden>→</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm text-white/90 transition hover:bg-white/10"
              >
                <span
                  aria-hidden
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10"
                >
                  ▶
                </span>
                Watch walkthrough
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
