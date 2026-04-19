// Hero "what Octupie does in a nutshell" animation.
//
// One wide SVG storyboard that reads left to right at a glance:
//
//   1. Creator feed (phone) -> one reel pulses as the OUTLIER
//   2. Travelling dot carries it into the OCTUPIE engine
//   3. Engine spins, fires three analysis chips (HOOK / BEATS / STYLE)
//   4. Travelling dot carries the analysis into the output panel
//   5. Output panel populates: script lines, title, caption, voice match
//
// All animation is CSS keyframes scoped inline. Loop ~10s.

type Props = { className?: string };

export function HeroVisualization({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 1080 540"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="From outlier reel, through Octupie's analysis engine, to a ready-to-post script in your voice"
    >
      <defs>
        <linearGradient id="hv-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a152c" />
          <stop offset="100%" stopColor="#040E22" />
        </linearGradient>
        <linearGradient id="hv-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4C61FF" />
          <stop offset="100%" stopColor="#014CE3" />
        </linearGradient>
        <linearGradient id="hv-chip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#15223C" />
          <stop offset="100%" stopColor="#0a1530" />
        </linearGradient>
        <linearGradient id="hv-ig" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>
        <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(76,97,255,0.55)" />
          <stop offset="100%" stopColor="rgba(76,97,255,0)" />
        </radialGradient>

        {/* dot carriers travelling along an invisible path */}
        <path
          id="hv-path-a"
          d="M 280 220 C 360 220, 400 270, 480 270"
          fill="none"
        />
        <path
          id="hv-path-b"
          d="M 660 270 C 740 270, 780 220, 860 220"
          fill="none"
        />

        <style>{`
          /* outlier pulse on the highlighted reel */
          @keyframes hv-outlier-pulse {
            0%,100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(76,97,255,0)); }
            50%     { transform: scale(1.05); filter: drop-shadow(0 0 12px rgba(76,97,255,0.65)); }
          }
          .hv-outlier { transform-box: fill-box; transform-origin: center; animation: hv-outlier-pulse 3.2s ease-in-out infinite; }

          /* engine ring rotation */
          @keyframes hv-spin { to { transform: rotate(360deg); } }
          .hv-ring { transform-box: fill-box; transform-origin: center; animation: hv-spin 8s linear infinite; }

          /* engine core breathing */
          @keyframes hv-core { 0%,100% { opacity: 0.85; } 50% { opacity: 1; } }
          .hv-core { animation: hv-core 2.4s ease-in-out infinite; }

          /* radiating analysis chips: stagger the "fire" effect */
          @keyframes hv-chip-pop {
            0%,12% { opacity: 0; transform: translate(-6px, 0); }
            22%,80% { opacity: 1; transform: translate(0, 0); }
            100% { opacity: 0; transform: translate(0, 0); }
          }
          .hv-chip-1 { transform-box: fill-box; transform-origin: left center; animation: hv-chip-pop 6s ease-out infinite; }
          .hv-chip-2 { transform-box: fill-box; transform-origin: left center; animation: hv-chip-pop 6s ease-out infinite 0.4s; }
          .hv-chip-3 { transform-box: fill-box; transform-origin: left center; animation: hv-chip-pop 6s ease-out infinite 0.8s; }

          /* travelling dot animations using motion path */
          @keyframes hv-dot-a-path {
            0%,8%   { offset-distance: 0%; opacity: 0; }
            10%     { opacity: 1; }
            38%,42% { offset-distance: 100%; opacity: 1; }
            50%,100%{ offset-distance: 100%; opacity: 0; }
          }
          @keyframes hv-dot-b-path {
            0%,55%  { offset-distance: 0%; opacity: 0; }
            58%     { opacity: 1; }
            85%,90% { offset-distance: 100%; opacity: 1; }
            95%,100%{ offset-distance: 100%; opacity: 0; }
          }
          .hv-dot-a {
            offset-path: path('M 280 220 C 360 220, 400 270, 480 270');
            offset-rotate: 0deg;
            animation: hv-dot-a-path 6s linear infinite;
          }
          .hv-dot-b {
            offset-path: path('M 660 270 C 740 270, 780 220, 860 220');
            offset-rotate: 0deg;
            animation: hv-dot-b-path 6s linear infinite;
          }

          /* output panel script lines: typewriter-like fill */
          @keyframes hv-line {
            0%,40% { transform: scaleX(0); }
            55%    { transform: scaleX(1); }
            95%,100% { transform: scaleX(1); }
          }
          .hv-line { transform-box: fill-box; transform-origin: left center; animation: hv-line 6s ease-out infinite; }
          .hv-line-2 { animation-delay: 0.18s; }
          .hv-line-3 { animation-delay: 0.34s; }
          .hv-line-4 { animation-delay: 0.5s; }
          .hv-line-5 { animation-delay: 0.66s; }

          /* voice match meter: fills the same time as lines, then settles */
          @keyframes hv-meter {
            0%,55%   { transform: scaleX(0); }
            85%,100% { transform: scaleX(0.96); }
          }
          .hv-meter { transform-box: fill-box; transform-origin: left center; animation: hv-meter 6s ease-out infinite; }

          /* "Ready to post" badge bloom at the very end of the cycle */
          @keyframes hv-ready {
            0%,80% { opacity: 0; transform: translateY(4px); }
            90%,100% { opacity: 1; transform: translateY(0); }
          }
          .hv-ready { transform-box: fill-box; transform-origin: center; animation: hv-ready 6s ease-out infinite; }

          @media (prefers-reduced-motion: reduce) {
            .hv-outlier, .hv-ring, .hv-core,
            .hv-chip-1, .hv-chip-2, .hv-chip-3,
            .hv-dot-a, .hv-dot-b,
            .hv-line, .hv-meter, .hv-ready {
              animation: none;
            }
            .hv-line, .hv-meter { transform: scaleX(1); }
            .hv-ready { opacity: 1; }
          }
        `}</style>
      </defs>

      {/* canvas */}
      <rect width="1080" height="540" fill="url(#hv-bg)" />
      <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
        {Array.from({ length: 22 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="540" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="1080" y2={i * 50} />
        ))}
      </g>

      {/* phase labels along the top */}
      {[
        { x: 130, label: "1. Track creators" },
        { x: 540, label: "2. Octupie analyses" },
        { x: 920, label: "3. Ready to post in your voice" },
      ].map((p) => (
        <text
          key={p.x}
          x={p.x}
          y="44"
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

      {/* ===== Stage 1: phone with creator feed ===== */}
      <g transform="translate(60 80)">
        {/* phone frame */}
        <rect width="220" height="380" rx="32" fill="#0a1636" stroke="rgba(76,97,255,0.45)" strokeWidth="2" />
        <rect x="12" y="12" width="196" height="356" rx="22" fill="url(#hv-chip)" />
        <rect x="86" y="14" width="48" height="6" rx="3" fill="rgba(255,255,255,0.2)" />

        {/* feed header */}
        <g transform="translate(24 36)">
          <rect width="172" height="28" rx="14" fill="rgba(255,255,255,0.04)" />
          <circle cx="14" cy="14" r="8" fill="url(#hv-ig)" />
          <text x="30" y="18" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#fff">
            @creator
          </text>
          <text x="160" y="18" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="rgba(255,255,255,0.55)">
            Reels
          </text>
        </g>

        {/* reel grid: 6 thumbs, one is the outlier */}
        {[
          { x: 0, y: 0, label: "12k" },
          { x: 1, y: 0, label: "18k" },
          { x: 2, y: 0, label: "22k" },
          { x: 0, y: 1, label: "412k", outlier: true },
          { x: 1, y: 1, label: "20k" },
          { x: 2, y: 1, label: "16k" },
          { x: 0, y: 2, label: "14k" },
          { x: 1, y: 2, label: "9k" },
          { x: 2, y: 2, label: "11k" },
        ].map((r, i) => {
          const x = 24 + r.x * 58;
          const y = 76 + r.y * 88;
          const w = 52;
          const h = 78;
          return (
            <g key={i}>
              <g className={r.outlier ? "hv-outlier" : undefined}>
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  rx="6"
                  fill={r.outlier ? "url(#hv-accent)" : "rgba(255,255,255,0.08)"}
                  stroke={r.outlier ? "rgba(76,97,255,0.7)" : "rgba(255,255,255,0.06)"}
                />
                {r.outlier ? (
                  <>
                    <circle cx={x + w / 2} cy={y + h / 2 - 6} r="9" fill="rgba(255,255,255,0.95)" />
                    <polygon
                      points={`${x + w / 2 - 3},${y + h / 2 - 10} ${x + w / 2 - 3},${y + h / 2 - 2} ${x + w / 2 + 4},${y + h / 2 - 6}`}
                      fill="#014CE3"
                    />
                  </>
                ) : (
                  <>
                    <circle cx={x + w / 2} cy={y + h / 2 - 6} r="6" fill="rgba(255,255,255,0.18)" />
                    <rect x={x + 8} y={y + h - 18} width={w - 16} height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
                  </>
                )}
              </g>
              <text
                x={x + w / 2}
                y={y + h - 5}
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontSize="8"
                fontWeight={r.outlier ? "700" : "500"}
                fill={r.outlier ? "#fff" : "rgba(255,255,255,0.65)"}
              >
                {r.label}
              </text>
            </g>
          );
        })}

        {/* outlier callout above the highlighted reel */}
        <g transform="translate(50 152)">
          <rect x="-32" y="0" width="64" height="20" rx="10" fill="#0a1636" stroke="rgba(76,97,255,0.7)" />
          <circle cx="-22" cy="10" r="3" fill="#4C61FF" />
          <text x="-13" y="13" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#fff">
            OUTLIER
          </text>
        </g>
      </g>

      {/* ===== Connector A: outlier -> engine ===== */}
      <use href="#hv-path-a" stroke="rgba(76,97,255,0.35)" strokeWidth="1.5" strokeDasharray="3 5" />
      <circle r="5" fill="#4C61FF" className="hv-dot-a">
        <title>data flowing into the engine</title>
      </circle>

      {/* ===== Stage 2: Octupie engine ===== */}
      <g transform="translate(480 130)">
        {/* glow */}
        <circle cx="90" cy="140" r="120" fill="url(#hv-glow)" />

        {/* outer rotating ring */}
        <g className="hv-ring" transform="translate(90 140)">
          <circle r="68" fill="none" stroke="rgba(76,97,255,0.35)" strokeWidth="1" strokeDasharray="2 6" />
          <circle r="78" fill="none" stroke="rgba(76,97,255,0.18)" strokeWidth="1" strokeDasharray="3 12" />
          <circle cx="0" cy="-68" r="3" fill="#4C61FF" />
          <circle cx="68" cy="0" r="2.5" fill="#9BB2FF" opacity="0.7" />
          <circle cx="0" cy="68" r="2" fill="#9BB2FF" opacity="0.5" />
          <circle cx="-68" cy="0" r="2.5" fill="#9BB2FF" opacity="0.7" />
        </g>

        {/* core badge */}
        <g className="hv-core" transform="translate(90 140)">
          <circle r="50" fill="#0a1636" stroke="rgba(76,97,255,0.6)" strokeWidth="1.5" />
          <text
            y="-4"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill="#fff"
          >
            Octupie
          </text>
          <text
            y="14"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="8"
            fontWeight="600"
            fill="#9BB2FF"
            letterSpacing="2"
          >
            ENGINE
          </text>
        </g>

        {/* radiating analysis chips on the right of the engine */}
        {[
          { y: 60, label: "HOOK", val: "Pattern interrupt", cls: "hv-chip-1" },
          { y: 130, label: "BEATS", val: "3 beats, 2.5s each", cls: "hv-chip-2" },
          { y: 200, label: "STYLE", val: "Talking head + caption", cls: "hv-chip-3" },
        ].map((c, i) => (
          <g key={i} transform={`translate(160 ${c.y})`}>
            <g className={c.cls}>
              <rect width="160" height="46" rx="12" fill="url(#hv-chip)" stroke="rgba(76,97,255,0.45)" />
              <text x="14" y="18" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#9BB2FF">
                {c.label}
              </text>
              <text x="14" y="34" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#fff">
                {c.val}
              </text>
            </g>
          </g>
        ))}
      </g>

      {/* ===== Connector B: engine -> output ===== */}
      <use href="#hv-path-b" stroke="rgba(76,97,255,0.35)" strokeWidth="1.5" strokeDasharray="3 5" />
      <circle r="5" fill="#4C61FF" className="hv-dot-b">
        <title>analysis flowing into the output</title>
      </circle>

      {/* ===== Stage 3: Output panel ===== */}
      <g transform="translate(800 80)">
        <rect width="240" height="380" rx="20" fill="url(#hv-chip)" stroke="rgba(76,97,255,0.45)" />

        {/* tab header */}
        <g>
          <rect x="14" y="14" width="80" height="22" rx="11" fill="#014CE3" />
          <text x="54" y="29" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#fff">
            Reels
          </text>
          <rect x="100" y="14" width="84" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
          <text x="142" y="29" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.6)">
            LinkedIn
          </text>
          <text x="195" y="29" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="700" fill="#9BB2FF">
            SOON
          </text>
        </g>

        {/* SCRIPT block */}
        <g transform="translate(14 50)">
          <text fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#9BB2FF">
            SCRIPT IN YOUR VOICE
          </text>
          <rect y="6" width="212" height="118" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
          {[
            { y: 22, w: 188, op: 0.85, cls: "hv-line" },
            { y: 36, w: 168, op: 0.75, cls: "hv-line hv-line-2" },
            { y: 50, w: 196, op: 0.7, cls: "hv-line hv-line-3" },
            { y: 64, w: 144, op: 0.6, cls: "hv-line hv-line-4" },
            { y: 78, w: 178, op: 0.55, cls: "hv-line hv-line-5" },
            { y: 92, w: 102, op: 0.5, cls: "hv-line hv-line-5" },
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

        {/* TITLE block */}
        <g transform="translate(14 184)">
          <text fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#9BB2FF">
            TITLE
          </text>
          <rect y="6" width="212" height="30" rx="10" fill="#0a1636" stroke="rgba(76,97,255,0.4)" />
          <rect className="hv-line" x="12" y="18" width="186" height="8" rx="3" fill="#fff" opacity="0.85" />
        </g>

        {/* CAPTION block */}
        <g transform="translate(14 232)">
          <text fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#9BB2FF">
            CAPTION
          </text>
          <rect y="6" width="212" height="56" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
          <rect className="hv-line hv-line-2" x="12" y="20" width="184" height="6" rx="2" fill="rgba(255,255,255,0.6)" />
          <rect className="hv-line hv-line-3" x="12" y="32" width="160" height="6" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect className="hv-line hv-line-4" x="12" y="44" width="120" height="6" rx="2" fill="rgba(255,255,255,0.4)" />
        </g>

        {/* Voice match meter */}
        <g transform="translate(14 304)">
          <text fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#9BB2FF">
            VOICE MATCH
          </text>
          <text x="212" y="0" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#fff">
            96%
          </text>
          <rect y="8" width="212" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
          <rect className="hv-meter" y="8" width="212" height="8" rx="4" fill="url(#hv-accent)" />
        </g>

        {/* Ready badge */}
        <g transform="translate(14 340)">
          <g className="hv-ready">
            <rect width="212" height="30" rx="15" fill="#014CE3" />
            <text
              x="106"
              y="20"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fontWeight="700"
              fill="#fff"
            >
              Ready to post →
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
