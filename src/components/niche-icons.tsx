// Line-style niche icons, designed to match a lightweight Lucide feel.
// Each icon is a 24x24 viewBox stroke path using currentColor so the
// caller controls color via text-* utilities.

import type { SVGProps } from "react";

export type NicheIconKind =
  | "fitness"
  | "finance"
  | "skincare"
  | "selfImprovement"
  | "food"
  | "gaming"
  | "coach"
  | "travel"
  | "design"
  | "saas"
  | "education"
  | "music"
  | "realEstate"
  | "parenting"
  | "health"
  | "chef"
  | "podcast"
  | "personalBrand";

type IconProps = SVGProps<SVGSVGElement> & { kind: NicheIconKind };

export function NicheIcon({ kind, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      {...rest}
    >
      {renderPath(kind)}
    </svg>
  );
}

function renderPath(kind: NicheIconKind) {
  switch (kind) {
    case "fitness":
      return (
        <>
          <path d="M6 9v6M3 10v4M9 7v10M15 7v10M18 9v6M21 10v4" />
          <path d="M9 12h6" />
        </>
      );
    case "finance":
      return (
        <>
          <path d="M3 20h18" />
          <path d="M6 20v-6" />
          <path d="M11 20V9" />
          <path d="M16 20v-8" />
          <path d="M21 20V5" />
          <path d="M17 5h4v4" />
        </>
      );
    case "skincare":
      return (
        <path d="M12 3c-4 6-6 9-6 12a6 6 0 0 0 12 0c0-3-2-6-6-12z" />
      );
    case "selfImprovement":
      return (
        <>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a7 7 0 0 1 4 12.6c-.7.6-1 1.4-1 2.4H9c0-1-.3-1.8-1-2.4A7 7 0 0 1 12 3z" />
        </>
      );
    case "food":
      return (
        <>
          <path d="M3 12h14a3 3 0 0 1 0 6H6a3 3 0 0 1-3-3v-3z" />
          <path d="M21 15h-4" />
          <path d="M8 8c0-1.5 1-2 1-3.5M11 8c0-1.5 1-2 1-3.5" />
        </>
      );
    case "gaming":
      return (
        <>
          <rect x="2" y="8" width="20" height="10" rx="4" />
          <path d="M7 13h3M8.5 11.5v3" />
          <circle cx="16" cy="12" r="1" fill="currentColor" />
          <circle cx="18" cy="14.2" r="1" fill="currentColor" />
        </>
      );
    case "coach":
      return (
        <>
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M3 13h18" />
        </>
      );
    case "travel":
      return (
        <>
          <path d="M22 2 2 10l9 2 2 9z" />
          <path d="M22 2 11 12" />
        </>
      );
    case "design":
      return (
        <>
          <path d="M12 3a9 9 0 1 0 5 17c-2 0-1-2-1-3 0-1 1-1 2-1h2a3 3 0 0 0 3-3 9 9 0 0 0-11-10z" />
          <circle cx="7.5" cy="11" r="1.1" fill="currentColor" />
          <circle cx="10" cy="6.5" r="1.1" fill="currentColor" />
          <circle cx="14.5" cy="5.5" r="1.1" fill="currentColor" />
          <circle cx="17.5" cy="9" r="1.1" fill="currentColor" />
        </>
      );
    case "saas":
      return (
        <>
          <path d="M12 2c3.5 3.5 5 7 5 10l-2 2h-6l-2-2c0-3 1.5-6.5 5-10z" />
          <path d="M9 16l-3 4M15 16l3 4" />
          <circle cx="12" cy="10" r="1.8" />
        </>
      );
    case "education":
      return (
        <>
          <path d="M2 9l10-5 10 5-10 5z" />
          <path d="M6 11v4c2 2 10 2 12 0v-4" />
          <path d="M22 9v5" />
        </>
      );
    case "music":
      return (
        <>
          <path d="M3 14a9 9 0 0 1 18 0" />
          <path d="M3 14v4a2 2 0 0 0 2 2h2v-6H3z" />
          <path d="M21 14v4a2 2 0 0 1-2 2h-2v-6h4z" />
        </>
      );
    case "realEstate":
      return (
        <>
          <path d="M3 12l9-8 9 8" />
          <path d="M5 10v11h14V10" />
          <path d="M10 21v-6h4v6" />
        </>
      );
    case "parenting":
      return (
        <path d="M12 21s-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 11-8 11z" />
      );
    case "health":
      return (
        <>
          <rect x="10" y="3" width="4" height="18" rx="1" />
          <rect x="3" y="10" width="18" height="4" rx="1" />
        </>
      );
    case "chef":
      return (
        <>
          <path d="M6 14v6h12v-6" />
          <path d="M6 14a4 4 0 0 1-1-7 4 4 0 0 1 7-2 4 4 0 0 1 7 2 4 4 0 0 1-1 7z" />
          <path d="M8 20h8" />
        </>
      );
    case "podcast":
      return (
        <>
          <rect x="9" y="3" width="6" height="12" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0" />
          <path d="M12 18v3M8 21h8" />
        </>
      );
    case "personalBrand":
      return (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </>
      );
  }
}
