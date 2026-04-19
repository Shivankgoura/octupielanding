import Image from "next/image";
import { assets } from "@/lib/assets";
import { WaitlistForm } from "@/components/waitlist-form";

export function Cta() {
  return (
    <section className="relative overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white px-8 py-16 text-center shadow-[0_1px_2px_rgba(11,20,48,0.04)] md:px-16 md:py-20 dark:border-white/10 dark:bg-[#040E22] dark:shadow-none">
          <Image
            src={assets.footerBg}
            alt=""
            fill
            className="pointer-events-none object-cover opacity-20 dark:opacity-60"
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-[#040E22]/40 dark:to-[#040E22]" />

          <div className="relative">
            <h2 className="font-heading text-4xl leading-tight tracking-tight text-[#0B1430] md:text-[60px] dark:text-white">
              Stop researching.
              <br className="hidden md:block" /> Start shipping.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[#0B1430]/75 md:text-lg dark:text-white/75">
              Join the waitlist to get early access to Octupie, your viral-content
              researcher and script-writing agentic workflow.
            </p>
            <div className="mx-auto mt-8 w-full max-w-xl">
              <WaitlistForm ctaLabel="Join the Waitlist" />
              <p className="mt-3 text-xs text-[#0B1430]/55 dark:text-white/55">
                We&apos;ll only email you launch news and early-access invites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
