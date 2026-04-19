import { Wordmark } from "@/components/brand";

const cols = [
  {
    label: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Contact Us", href: "mailto:support@octupie.com" },
      { label: "Tutorials", href: "#" },
      { label: "Login", href: "#" },
      { label: "Affiliate Program", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020814]">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Research top channels, find viral outliers, and remix them into
              your own winning short-form videos.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.label}>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                {c.label}
              </div>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/75 transition hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Get started
            </div>
            <a
              href="#pricing"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#014CE3] px-4 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_6px_20px_rgba(1,76,227,0.35)] transition hover:bg-[#4C61FF]"
            >
              Try It For Free →
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} Octupie. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
