"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Wordmark } from "@/components/brand";
import { WaitlistButton } from "@/components/waitlist-button";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Octupie", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastState = false;
    const evaluate = () => {
      const next = window.scrollY > 24;
      if (next !== lastState) {
        lastState = next;
        setScrolled(next);
      }
    };
    evaluate();
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        evaluate();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={[
          "flex w-full items-center justify-between rounded-full border px-4 py-2 transition-all duration-300",
          scrolled
            ? "max-w-[1100px] border-black/10 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#040E22]/95 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "max-w-[1280px] border-transparent bg-transparent",
        ].join(" ")}
      >
        <Link href="/" className="pl-1">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#0B1430]/75 transition hover:text-[#0B1430] dark:text-white/75 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <WaitlistButton />
          <button
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-[#0B1430] dark:border-white/10 dark:bg-white/5 dark:text-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1">
              <span className="h-px w-4 bg-[#0B1430] dark:bg-white" />
              <span className="h-px w-4 bg-[#0B1430] dark:bg-white" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#040E22] md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base text-[#0B1430]/90 dark:text-white/90"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
