"use client";

import { useId, useState } from "react";

/**
 * Brand logo. Uses the real raster logo at /public/logo.png when present (the
 * pixel-exact original), and falls back to a faithful inline SVG re-creation of
 * the mark (charcoal integral bars + plus, green A over the bar, two green
 * flasks) so the site looks on-brand even before the PNG is dropped in.
 */
export function Logo({
  size = 36,
  withText = false,
  textColor = "#0f172a",
  onDark = false,
}: {
  size?: number;
  withText?: boolean;
  textColor?: string;
  onDark?: boolean;
}) {
  const [err, setErr] = useState(false);
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      {err ? (
        <BrandMark size={size} onDark={onDark} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/logo-mark.png"
          alt="Integration Academy"
          width={size}
          height={size}
          style={{ display: "block", objectFit: "contain" }}
          onError={() => setErr(true)}
        />
      )}
      {withText && (
        <span style={{ fontWeight: 800, fontSize: Math.round(size * 0.5), color: textColor, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
          Integration Academy
        </span>
      )}
    </span>
  );
}

export function BrandMark({ size = 36, onDark = false }: { size?: number; onDark?: boolean }) {
  const uid = useId().replace(/:/g, "");
  const green = onDark ? "#2fb866" : `url(#iaG${uid})`;
  const charcoal = onDark ? "#dbeee2" : "#3a3a3a";
  return (
    <svg width={size} height={size} viewBox="0 0 210 192" role="img" aria-label="Integration Academy" style={{ display: "block" }}>
      <defs>
        <linearGradient id={`iaG${uid}`} x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0" stopColor="#248a48" />
          <stop offset="1" stopColor="#145d2f" />
        </linearGradient>
      </defs>

      {/* charcoal vertical bar (slight lean) */}
      <rect x="34" y="46" width="13" height="96" rx="6.5" fill={charcoal} transform="rotate(-6 40 94)" />
      {/* charcoal horizontal (integration) bar */}
      <rect x="52" y="120" width="112" height="14" rx="7" fill={charcoal} />
      {/* charcoal plus */}
      <rect x="172" y="82" width="13" height="44" rx="6" fill={charcoal} />
      <rect x="156" y="97" width="45" height="13" rx="6" fill={charcoal} />

      {/* green A (solid, with triangular counter) */}
      <path
        fill={green}
        fillRule="evenodd"
        d="M72 116 L104 30 Q108 26 112 30 L144 116 L123 116 L116 75 L100 75 L93 116 Z
           M108 52 L117 68 L99 68 Z"
      />

      {/* two green Erlenmeyer flasks */}
      <path fill={green} transform="rotate(-7 88 159)"
        d="M82 140 L94 140 L93 143 L93 151 C93 159 107 167 107 175 Q107 178 104 178 L72 178 Q69 178 69 175 C69 167 83 159 83 151 L83 143 Z" />
      <path fill={green} transform="rotate(7 128 159)"
        d="M122 140 L134 140 L133 143 L133 151 C133 159 147 167 147 175 Q147 178 144 178 L112 178 Q109 178 109 175 C109 167 123 159 123 151 L123 143 Z" />
    </svg>
  );
}
