"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

// Stable "is this the client?" probe that does not trip the
// react-hooks/set-state-in-effect rule.
const subscribe = () => () => {};
const useIsMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={[
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition",
        "border-black/10 bg-black/5 text-[#0B1430] hover:bg-black/10",
        "dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
        className,
      ].join(" ")}
    >
      {/* Render both icons, flip via CSS so there is no hydration flash. */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 dark:hidden"
      >
        {/* Moon: visible in LIGHT mode, signals "switch to dark". */}
        <path d="M20 14.5A8 8 0 1 1 9.5 4 7 7 0 0 0 20 14.5z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden h-4 w-4 dark:block"
      >
        {/* Sun: visible in DARK mode, signals "switch to light". */}
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
