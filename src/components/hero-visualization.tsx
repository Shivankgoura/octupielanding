// Hero explainer. Minimal, aligned, one clear idea:
//
//   [ Outlier reel ]  ->  [ Octupie analyses 3 things ]  ->  [ Ready-to-post script ]
//
// Motion rules (deliberately restrained):
//   1. A single thin progress bar fills once across the bottom of all
//      three panels to signal the loop direction.
//   2. The three analysis items in the middle panel tick off one by
//      one as the bar passes each third.
//   3. The output script + caption lines and the 'Ready to post' pill
//      reveal in the final third.
//
// No rotating rings, no radial glows, no drifting particles, no scale
// pulses. Everything is on a tidy grid, full-width aligned.

type Props = { className?: string };

export function HeroVisualization({ className = "" }: Props) {
  // Canvas: 1080 x 480, three equal columns of 320 with 60px gutters.
  // Column X-origins: 60, 440, 760 (each 260 wide).
  const colW = 260;
  const cols = [60, 400, 740];

  return (
    <svg
      viewBox="0 0 1080 480"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Octupie takes an outlier Reel from a creator you track, analyses its hook, beats and style, and returns a ready-to-post script in your voice."
    >
      <defs>
        <linearGradient id="hv-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4C61FF" />
          <stop offset="100%" stopColor="#014CE3" />
        </linearGradient>
        <linearGradient id="hv-ig" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>

        <style>{`
          /* Single shared progress bar that crosses the full width. */
          @keyframes hv-progress {
            0%   { transform: scaleX(0); }
            95%  { transform: scaleX(1); }
            100% { transform: scaleX(1); }
          }
          .hv-progress {
            transform-box: fill-box;
            transform-origin: left center;
            animation: hv-progress 7s ease-in-out infinite;
          }

          /* Checklist ticks reveal one after another during the middle third. */
          @keyframes hv-tick {
            0%,40% { opacity: 0; transform: scale(0.7); }
            55%,100% { opacity: 1; transform: scale(1); }
          }
          .hv-tick {
            transform-box: fill-box;
            transform-origin: center;
            animation: hv-tick 7s ease-out infinite;
          }
          .hv-tick-2 { animation-delay: 0.35s; }
          .hv-tick-3 { animation-delay: 0.7s; }

          /* Output script/caption lines reveal in the final third. */
          @keyframes hv-line {
            0%,60% { transform: scaleX(0); }
            80%,100% { transform: scaleX(1); }
          }
          .hv-line {
            transform-box: fill-box;
            transform-origin: left center;
            animation: hv-line 7s ease-out infinite;
          }
          .hv-line-2 { animation-delay: 0.1s; }
          .hv-line-3 { animation-delay: 0.2s; }
          .hv-line-4 { animation-delay: 0.3s; }

          /* Ready-to-post pill activates at the very end. */
          @keyframes hv-ready {
            0%,85% { opacity: 0.2; }
            100%   { opacity: 1; }
          }
          .hv-ready { animation: hv-ready 7s ease-out infinite; }

          @media (prefers-reduced-motion: reduce) {
            .hv-progress, .hv-tick, .hv-line, .hv-ready {
              animation: none;
            }
            .hv-progress, .hv-line { transform: scaleX(1); }
            .hv-tick { opacity: 1; transform: scale(1); }
            .hv-ready { opacity: 1; }
          }
        `}</style>
      </defs>

      {/* Solid canvas. No grid, no radial glow. */}
      <rect width="1080" height="480" fill="#040E22" />

      {/* Top phase labels, perfectly centered per column. */}
      {[
        { x: cols[0] + colW / 2, label: "1. Outlier Reel" },
        { x: cols[1] + colW / 2, label: "2. Octupie analyses" },
        { x: cols[2] + colW / 2, label: "3. Ready to post" },
      ].map((p) => (
        <text
          key={p.label}
          x={p.x}
          y="40"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="#9BB2FF"
          letterSpacing="2"
        >
          {p.label.toUpperCase()}
        </text>
      ))}

      {/* Horizontal connector between the three cards (thin line). */}
      <line x1={cols[0] + colW} y1="220" x2={cols[1]} y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1={cols[1] + colW} y1="220" x2={cols[2]} y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      {/* === Card 1: Outlier Reel === */}
      <g transform={`translate(${cols[0]} 70)`}>
        <rect width={colW} height="300" rx="16" fill="#0a1636" stroke="rgba(76,97,255,0.35)" />

        {/* creator handle row */}
        <g transform="translate(18 18)">
          <rect width="24" height="24" rx="6" fill="url(#hv-ig)" />
          <text x="36" y="17" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">
            @creator
          </text>
        </g>

        {/* reel thumbnail frame */}
        <g transform="translate(60 60)">
          <rect width="140" height="180" rx="12" fill="#15223C" stroke="rgba(255,255,255,0.08)" />
          {/* play glyph */}
          <circle cx="70" cy="90" r="22" fill="rgba(255,255,255,0.95)" />
          <polygon points="63,78 63,102 85,90" fill="#014CE3" />
        </g>

        {/* view count + outlier tag row */}
        <g transform="translate(18 260)">
          <text fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#fff">
            412k views
          </text>
          <g transform="translate(140 -14)">
            <rect width="84" height="22" rx="11" fill="rgba(76,97,255,0.15)" stroke="rgba(76,97,255,0.6)" />
            <text x="42" y="15" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#9BB2FF">
              OUTLIER
            </text>
          </g>
        </g>
      </g>

      {/* === Card 2: Octupie analyses === */}
      <g transform={`translate(${cols[1]} 70)`}>
        <rect width={colW} height="300" rx="16" fill="#0a1636" stroke="rgba(76,97,255,0.35)" />

        {/* Octupie wordmark row */}
        <g transform="translate(18 18)">
          <rect width="24" height="24" rx="6" fill="url(#hv-accent)" />
          <text x="36" y="17" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#fff">
            Octupie
          </text>
          <text x="36" y="32" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="rgba(155,178,255,0.7)" letterSpacing="1.5">
            ANALYSING
          </text>
        </g>

        {/* Three analysis rows with checkbox ticks */}
        {[
          { y: 82, label: "Hook pattern", cls: "hv-tick" },
          { y: 138, label: "Story beats", cls: "hv-tick hv-tick-2" },
          { y: 194, label: "Tone & style", cls: "hv-tick hv-tick-3" },
        ].map((r, i) => (
          <g key={i} transform={`translate(18 ${r.y})`}>
            <rect width="224" height="44" rx="10" fill="#15223C" stroke="rgba(255,255,255,0.06)" />
            {/* check box */}
            <rect x="12" y="12" width="20" height="20" rx="6" fill="rgba(76,97,255,0.14)" stroke="rgba(76,97,255,0.5)" />
            {/* check mark (animated in) */}
            <g transform="translate(22 22)">
              <g className={r.cls}>
                <polyline points="-5,0 -1,4 5,-4" fill="none" stroke="#9BB2FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <text x="44" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500" fill="#fff">
              {r.label}
            </text>
          </g>
        ))}
      </g>

      {/* === Card 3: Ready to post === */}
      <g transform={`translate(${cols[2]} 70)`}>
        <rect width={colW} height="300" rx="16" fill="#0a1636" stroke="rgba(76,97,255,0.35)" />

        {/* Header: "Your script" */}
        <g transform="translate(18 18)">
          <text fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#9BB2FF" letterSpacing="1.5">
            YOUR SCRIPT
          </text>
        </g>

        {/* Script lines (reveal at the end of the loop) */}
        <g transform="translate(18 46)">
          <rect width="224" height="96" rx="10" fill="#15223C" stroke="rgba(255,255,255,0.06)" />
          {[
            { y: 16, w: 196, op: 0.9, cls: "hv-line" },
            { y: 32, w: 168, op: 0.75, cls: "hv-line hv-line-2" },
            { y: 48, w: 204, op: 0.65, cls: "hv-line hv-line-3" },
            { y: 64, w: 140, op: 0.55, cls: "hv-line hv-line-4" },
          ].map((l, i) => (
            <rect
              key={i}
              x="12"
              y={l.y}
              width={l.w}
              height="6"
              rx="2"
              fill={`rgba(255,255,255,${l.op})`}
              className={l.cls}
            />
          ))}
        </g>

        {/* Title + caption label row (compact meta) */}
        <g transform="translate(18 158)">
          <text fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#9BB2FF" letterSpacing="1.5">
            TITLE &amp; CAPTION
          </text>
          <rect y="14" width="224" height="52" rx="10" fill="#15223C" stroke="rgba(255,255,255,0.06)" />
          <rect className="hv-line hv-line-2" x="12" y="26" width="184" height="6" rx="2" fill="rgba(255,255,255,0.8)" />
          <rect className="hv-line hv-line-3" x="12" y="40" width="148" height="6" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect className="hv-line hv-line-4" x="12" y="52" width="108" height="6" rx="2" fill="rgba(255,255,255,0.35)" />
        </g>

        {/* Ready-to-post pill */}
        <g transform="translate(18 244)">
          <g className="hv-ready">
            <rect width="224" height="38" rx="19" fill="#014CE3" />
            <text
              x="112"
              y="24"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="13"
              fontWeight="700"
              fill="#fff"
            >
              Ready to post
            </text>
          </g>
        </g>
      </g>

      {/* ===== Shared progress bar across the bottom ===== */}
      <g transform={`translate(${cols[0]} 420)`}>
        {/* track spans all three columns + gutters */}
        <rect width="960" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
        <rect className="hv-progress" width="960" height="4" rx="2" fill="url(#hv-accent)" />
      </g>
      <text
        x="1020"
        y="424"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fontWeight="600"
        fill="rgba(155,178,255,0.8)"
      >
        one loop
      </text>
    </svg>
  );
}
