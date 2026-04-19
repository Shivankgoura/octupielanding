import Image from "next/image";
import { assets } from "@/lib/assets";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-overlay opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] gradient-radial-bottom" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
            <span className="flex -space-x-2">
              <Image
                src={assets.avatars.a1}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-full ring-1 ring-[#040E22]"
                unoptimized
              />
              <Image
                src={assets.avatars.a2}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-full ring-1 ring-[#040E22]"
                unoptimized
              />
              <Image
                src={assets.avatars.a3}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-full ring-1 ring-[#040E22]"
                unoptimized
              />
            </span>
            <span>Trusted by 94,249+ creators</span>
          </div>

          <h1 className="mt-6 font-heading text-[44px] leading-[1.05] tracking-tight text-white sm:text-[56px] md:text-[72px]">
            Create viral short-form
            <br />
            videos in seconds
          </h1>

          <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            The easiest way to research top channels, find viral outliers, and
            remix them into your own winning videos.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-[#014CE3] px-6 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_10px_30px_rgba(1,76,227,0.45)] transition hover:bg-[#4C61FF]"
            >
              Try It For Free
              <span aria-hidden>→</span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:bg-white/10"
            >
              <span
                aria-hidden
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10"
              >
                ▶
              </span>
              Play video
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1080px]">
          <div className="card-gradient-border overflow-hidden rounded-2xl border border-white/10 bg-[#040E22]/60 backdrop-blur-sm">
            <Image
              src={assets.featureImages.winningScripts}
              alt="Octupie product dashboard"
              width={2000}
              height={1200}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </div>
          <div className="pointer-events-none absolute -inset-x-20 -bottom-20 h-40 bg-[radial-gradient(closest-side,rgba(1,76,227,0.45),transparent)]" />
        </div>
      </div>
    </section>
  );
}
