"use client";

import { useState } from "react";
import { WaitlistDialog } from "@/components/waitlist-form";

export function WaitlistButton({
  className = "",
  label = "Join the Waitlist",
  variant = "primary",
}: {
  className?: string;
  label?: string;
  variant?: "primary" | "ghost";
}) {
  const [open, setOpen] = useState(false);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-[#014CE3] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_8px_24px_rgba(1,76,227,0.4)] hover:bg-[#4C61FF]"
      : "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={[base, styles, className].join(" ")}
      >
        {label}
        <span aria-hidden>→</span>
      </button>
      <WaitlistDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
