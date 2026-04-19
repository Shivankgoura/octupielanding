// Octupie brandmark: 8 dots (tentacles / pie slices) radiating around a
// core node, set on a brand-gradient rounded square. Reads as octopus,
// pie chart, and radar/compass. Matches the researcher positioning.
import { useId } from "react";

type Props = { className?: string; title?: string };

export function OctupieLogo({ className = "h-7 w-7", title = "Octupie" }: Props) {
  const gid = useId();
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id={`oct-logo-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4C61FF" />
          <stop offset="100%" stopColor="#014CE3" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#oct-logo-${gid})`} />
      <g fill="#ffffff">
        <circle cx="16" cy="6" r="1.6" />
        <circle cx="23.07" cy="8.93" r="1.6" />
        <circle cx="26" cy="16" r="1.6" />
        <circle cx="23.07" cy="23.07" r="1.6" />
        <circle cx="16" cy="26" r="1.6" />
        <circle cx="8.93" cy="23.07" r="1.6" />
        <circle cx="6" cy="16" r="1.6" />
        <circle cx="8.93" cy="8.93" r="1.6" />
      </g>
      <circle cx="16" cy="16" r="5" fill="#ffffff" />
      <circle cx="16" cy="16" r="2" fill={`url(#oct-logo-${gid})`} />
    </svg>
  );
}
