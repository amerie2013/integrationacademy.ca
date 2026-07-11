// Inline-SVG figure builders for EQAO questions. Used by the parameterized
// generators (lib/eqaoGen.ts) so each attempt's figure matches its random
// numbers. Returns the Figure shape consumed by components/EqaoFigure.tsx.
import type { Figure } from "./eqao";

const C = { ink: "#0f172a", grid: "#e2e8f0", accent: "#1b7a44", muted: "#64748b", fill: "#bfe3cd" };
const svg = (s: string): Figure => ({ type: "svg", svg: s });

// coordinate plane (0..8) with an optional line (math endpoints) + lattice points
export function coord(opts: { line?: [[number, number], [number, number]]; pts?: [number, number][]; xlab?: string; ylab?: string }): Figure {
  const { line, pts = [], xlab = "x", ylab = "y" } = opts;
  const ox = 34, oy = 196, u = 19;
  const X = (x: number) => ox + x * u, Y = (y: number) => oy - y * u;
  let body = `<rect x="${ox}" y="${oy - 8 * u}" width="${8 * u}" height="${8 * u}" fill="url(#g)"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox + 8 * u + 8}" y2="${oy}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - 8 * u - 8}" stroke="${C.ink}" stroke-width="1.4"/>`;
  for (let i = 2; i <= 8; i += 2) {
    body += `<text x="${X(i)}" y="${oy + 14}" font-size="10" text-anchor="middle" fill="${C.muted}">${i}</text>`;
    body += `<text x="${ox - 8}" y="${Y(i) + 3}" font-size="10" text-anchor="end" fill="${C.muted}">${i}</text>`;
  }
  if (line) body += `<line x1="${X(line[0][0])}" y1="${Y(line[0][1])}" x2="${X(line[1][0])}" y2="${Y(line[1][1])}" stroke="${C.accent}" stroke-width="2.6"/>`;
  for (const [px, py] of pts) body += `<circle cx="${X(px)}" cy="${Y(py)}" r="3.6" fill="${C.accent}"/>`;
  body += `<text x="${ox + 8 * u + 4}" y="${oy + 13}" font-size="10" fill="${C.muted}">${xlab}</text>`;
  body += `<text x="${ox - 6}" y="${oy - 8 * u - 10}" font-size="10" fill="${C.muted}">${ylab}</text>`;
  return svg(`<svg viewBox="0 0 220 220" style="width:230px;max-width:100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="g" width="${u}" height="${u}" patternUnits="userSpaceOnUse"><path d="M${u} 0H0V${u}" fill="none" stroke="${C.grid}" stroke-width="1"/></pattern></defs>${body}</svg>`);
}

export function bars(values: number[], labels: string[]): Figure {
  const ox = 30, oy = 150, h = 120, bw = 26, gap = 14, max = Math.max(...values);
  let body = `<line x1="${ox}" y1="${oy}" x2="${ox + values.length * (bw + gap) + 6}" y2="${oy}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h - 6}" stroke="${C.ink}" stroke-width="1.4"/>`;
  values.forEach((v, i) => {
    const bx = ox + 12 + i * (bw + gap), bh = (v / max) * h;
    body += `<rect x="${bx}" y="${oy - bh}" width="${bw}" height="${bh}" fill="${C.accent}"/>`;
    body += `<text x="${bx + bw / 2}" y="${oy + 14}" font-size="10" text-anchor="middle" fill="${C.muted}">${labels[i]}</text>`;
    body += `<text x="${bx + bw / 2}" y="${oy - bh - 4}" font-size="10" text-anchor="middle" fill="${C.ink}">${v}</text>`;
  });
  return svg(`<svg viewBox="0 0 ${ox + values.length * (bw + gap) + 20} 175" style="width:260px;max-width:100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`);
}

export function scatter(points: [number, number][], line?: [[number, number], [number, number]]): Figure {
  const ox = 30, oy = 150, w = 200, h = 120;
  let body = `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h - 6}" stroke="${C.ink}" stroke-width="1.4"/>`;
  if (line) body += `<line x1="${ox + line[0][0]}" y1="${oy - line[0][1]}" x2="${ox + line[1][0]}" y2="${oy - line[1][1]}" stroke="${C.accent}" stroke-width="2"/>`;
  for (const [px, py] of points) body += `<circle cx="${ox + px}" cy="${oy - py}" r="3" fill="${C.ink}"/>`;
  return svg(`<svg viewBox="0 0 ${ox + w + 14} 170" style="width:250px;max-width:100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`);
}

export function triangle(baseLabel: string, heightLabel: string): Figure {
  return svg(`<svg viewBox="0 0 220 150" style="width:240px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,120 190,120 120,30" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <line x1="120" y1="120" x2="120" y2="30" stroke="${C.accent}" stroke-width="1.2" stroke-dasharray="4 4"/>
    <rect x="120" y="110" width="10" height="10" fill="none" stroke="${C.accent}" stroke-width="1"/>
    <text x="110" y="138" font-size="12" fill="${C.muted}">${baseLabel}</text>
    <text x="126" y="78" font-size="12" fill="${C.muted}">${heightLabel}</text>
  </svg>`);
}

export function rightTriangle(aLabel: string, bLabel: string): Figure {
  return svg(`<svg viewBox="0 0 200 150" style="width:230px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,120 170,120 30,30" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <rect x="30" y="108" width="12" height="12" fill="none" stroke="${C.ink}" stroke-width="1"/>
    <text x="92" y="138" font-size="12" fill="${C.muted}">${aLabel}</text>
    <text x="6" y="78" font-size="12" fill="${C.muted}">${bLabel}</text>
    <text x="108" y="68" font-size="12" fill="${C.accent}">?</text>
  </svg>`);
}

export function box(l: number, w: number, h: number): Figure {
  return svg(`<svg viewBox="0 0 200 150" style="width:230px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="55" width="90" height="70" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <polyline points="40,55 70,30 160,30 130,55" fill="none" stroke="${C.ink}" stroke-width="1.6"/>
    <polyline points="130,125 160,100 160,30" fill="none" stroke="${C.ink}" stroke-width="1.6"/>
    <text x="78" y="142" font-size="12" fill="${C.muted}">l = ${l}</text>
    <text x="138" y="95" font-size="12" fill="${C.muted}">w = ${w}</text>
    <text x="20" y="95" font-size="12" fill="${C.muted}">h = ${h}</text>
  </svg>`);
}

export function cylinder(r: number, h: number): Figure {
  return svg(`<svg viewBox="0 0 160 170" style="width:170px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="80" cy="35" rx="45" ry="14" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <path d="M35 35 V135" stroke="${C.ink}" stroke-width="1.6" fill="none"/>
    <path d="M125 35 V135" stroke="${C.ink}" stroke-width="1.6" fill="none"/>
    <path d="M35 135 A45 14 0 0 0 125 135" stroke="${C.ink}" stroke-width="1.6" fill="none"/>
    <line x1="80" y1="35" x2="125" y2="35" stroke="${C.accent}" stroke-width="1.2" stroke-dasharray="4 4"/>
    <text x="95" y="30" font-size="12" fill="${C.muted}">r = ${r}</text>
    <text x="130" y="90" font-size="12" fill="${C.muted}">h = ${h}</text>
  </svg>`);
}

export function numberLine(markAt: number, min: number, max: number): Figure {
  const ox = 20, w = 240, span = max - min;
  const X = (v: number) => ox + ((v - min) / span) * w;
  let ticks = "";
  for (let v = min; v <= max; v++) {
    ticks += `<line x1="${X(v)}" y1="36" x2="${X(v)}" y2="46" stroke="${C.ink}" stroke-width="1"/>`;
    ticks += `<text x="${X(v)}" y="60" font-size="10" text-anchor="middle" fill="${C.muted}">${v}</text>`;
  }
  return svg(`<svg viewBox="0 0 ${ox + w + 20} 70" style="width:280px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <line x1="${ox}" y1="41" x2="${ox + w}" y2="41" stroke="${C.ink}" stroke-width="1.4"/>${ticks}
    <circle cx="${X(markAt)}" cy="41" r="5" fill="${C.accent}"/>
    <text x="${X(markAt)}" y="26" font-size="12" text-anchor="middle" fill="${C.accent}">P</text>
  </svg>`);
}

export function circle(rLabel: string): Figure {
  return svg(`<svg viewBox="0 0 180 175" style="width:185px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <circle cx="88" cy="85" r="58" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <line x1="88" y1="85" x2="146" y2="85" stroke="${C.accent}" stroke-width="1.4"/>
    <circle cx="88" cy="85" r="2.5" fill="${C.ink}"/>
    <text x="100" y="78" font-size="12" fill="${C.muted}">${rLabel}</text>
  </svg>`);
}

export function rect(lLabel: string, wLabel: string, diagonal = false): Figure {
  const extra = diagonal ? `<line x1="40" y1="110" x2="170" y2="30" stroke="${C.accent}" stroke-width="1.4" stroke-dasharray="4 4"/><text x="96" y="64" font-size="12" fill="${C.accent}">?</text>` : "";
  return svg(`<svg viewBox="0 0 215 150" style="width:225px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="30" width="130" height="80" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>${extra}
    <text x="96" y="128" font-size="12" fill="${C.muted}">${lLabel}</text>
    <text x="176" y="74" font-size="12" fill="${C.muted}">${wLabel}</text>
  </svg>`);
}

export function trapezoidFig(topLabel: string, bottomLabel: string, heightLabel: string): Figure {
  return svg(`<svg viewBox="0 0 215 145" style="width:225px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,115 185,115 145,40 75,40" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <line x1="75" y1="115" x2="75" y2="40" stroke="${C.accent}" stroke-width="1" stroke-dasharray="4 4"/>
    <text x="98" y="34" font-size="12" fill="${C.muted}">${topLabel}</text>
    <text x="98" y="133" font-size="12" fill="${C.muted}">${bottomLabel}</text>
    <text x="50" y="82" font-size="12" fill="${C.muted}">${heightLabel}</text>
  </svg>`);
}

export function lShape(aLabel: string, bLabel: string): Figure {
  return svg(`<svg viewBox="0 0 220 175" style="width:225px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,30 120,30 120,80 185,80 185,150 30,150" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <text x="98" y="168" font-size="12" fill="${C.muted}">${aLabel}</text>
    <text x="12" y="95" font-size="12" fill="${C.muted}">${bLabel}</text>
  </svg>`);
}

export function lineGraph(pts: [number, number][], xlab = "time", ylab = "distance"): Figure {
  const ox = 34, oy = 150, w = 200, h = 120;
  let body = `<line x1="${ox}" y1="${oy}" x2="${ox + w + 6}" y2="${oy}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h - 6}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<polyline points="${pts.map(([x, y]) => `${ox + x},${oy - y}`).join(" ")}" fill="none" stroke="${C.accent}" stroke-width="2.4"/>`;
  for (const [x, y] of pts) body += `<circle cx="${ox + x}" cy="${oy - y}" r="3" fill="${C.accent}"/>`;
  body += `<text x="${ox + w - 24}" y="${oy + 14}" font-size="10" fill="${C.muted}">${xlab}</text>`;
  body += `<text x="${ox + 2}" y="${oy - h - 6}" font-size="10" fill="${C.muted}">${ylab}</text>`;
  return svg(`<svg viewBox="0 0 ${ox + w + 16} 172" style="width:255px;max-width:100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`);
}

export function twoLines(a: [number, number][], b: [number, number][], cross: [number, number], xlab = "visits", ylab = "cost"): Figure {
  const ox = 34, oy = 150, w = 200, h = 120;
  let body = `<line x1="${ox}" y1="${oy}" x2="${ox + w + 6}" y2="${oy}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h - 6}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<polyline points="${a.map(([x, y]) => `${ox + x},${oy - y}`).join(" ")}" fill="none" stroke="${C.accent}" stroke-width="2.2"/>`;
  body += `<polyline points="${b.map(([x, y]) => `${ox + x},${oy - y}`).join(" ")}" fill="none" stroke="#2563eb" stroke-width="2.2"/>`;
  body += `<circle cx="${ox + cross[0]}" cy="${oy - cross[1]}" r="4" fill="#dc2626"/>`;
  body += `<text x="${ox + w - 16}" y="${oy + 14}" font-size="10" fill="${C.muted}">${xlab}</text>`;
  body += `<text x="${ox + 2}" y="${oy - h - 6}" font-size="10" fill="${C.muted}">${ylab}</text>`;
  body += `<text x="${ox + w - 34}" y="${oy - h + 2}" font-size="9" fill="${C.accent}">A</text>`;
  body += `<text x="${ox + w - 34}" y="${oy - h + 16}" font-size="9" fill="#2563eb">B</text>`;
  return svg(`<svg viewBox="0 0 ${ox + w + 16} 172" style="width:255px;max-width:100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`);
}

export function angleTriangle(a1: string, a2: string): Figure {
  return svg(`<svg viewBox="0 0 200 150" style="width:215px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,120 170,120 95,30" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <text x="44" y="113" font-size="12" fill="${C.muted}">${a1}</text>
    <text x="138" y="113" font-size="12" fill="${C.muted}">${a2}</text>
    <text x="89" y="58" font-size="13" fill="${C.accent}">?</text>
  </svg>`);
}

export function ladder(baseLabel: string, hypLabel: string): Figure {
  return svg(`<svg viewBox="0 0 200 165" style="width:210px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <polygon points="40,30 40,135 165,135" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <line x1="40" y1="22" x2="40" y2="143" stroke="${C.ink}" stroke-width="2.4"/>
    <line x1="32" y1="135" x2="173" y2="135" stroke="${C.ink}" stroke-width="2.4"/>
    <rect x="40" y="123" width="12" height="12" fill="none" stroke="${C.ink}" stroke-width="1"/>
    <text x="92" y="153" font-size="12" fill="${C.muted}">${baseLabel}</text>
    <text x="110" y="76" font-size="12" fill="${C.muted}">${hypLabel}</text>
    <text x="20" y="86" font-size="13" fill="${C.accent}">?</text>
  </svg>`);
}

export function spinner(sectors: number, shaded: number): Figure {
  const cx = 85, cy = 85, r = 62;
  let body = "";
  for (let i = 0; i < sectors; i++) {
    const a0 = (i / sectors) * 2 * Math.PI - Math.PI / 2;
    const a1 = ((i + 1) / sectors) * 2 * Math.PI - Math.PI / 2;
    const x0 = (cx + r * Math.cos(a0)).toFixed(1), y0 = (cy + r * Math.sin(a0)).toFixed(1);
    const x1 = (cx + r * Math.cos(a1)).toFixed(1), y1 = (cy + r * Math.sin(a1)).toFixed(1);
    body += `<path d="M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1} Z" fill="${i < shaded ? C.accent : "#ffffff"}" stroke="${C.ink}" stroke-width="1.2"/>`;
  }
  body += `<circle cx="${cx}" cy="${cy}" r="3" fill="${C.ink}"/>`;
  return svg(`<svg viewBox="0 0 175 175" style="width:175px;max-width:100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`);
}

export function boxPlot(min: number, q1: number, med: number, q3: number, max: number): Figure {
  const ox = 30, w = 200, y = 45, bh = 26;
  const X = (v: number) => ox + ((v - min) / (max - min)) * w;
  let body = `<line x1="${X(min)}" y1="${y}" x2="${X(max)}" y2="${y}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${X(min)}" y1="${y - 8}" x2="${X(min)}" y2="${y + 8}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${X(max)}" y1="${y - 8}" x2="${X(max)}" y2="${y + 8}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<rect x="${X(q1)}" y="${y - bh / 2}" width="${X(q3) - X(q1)}" height="${bh}" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>`;
  body += `<line x1="${X(med)}" y1="${y - bh / 2}" x2="${X(med)}" y2="${y + bh / 2}" stroke="${C.accent}" stroke-width="2"/>`;
  for (const v of [min, q1, med, q3, max]) body += `<text x="${X(v)}" y="${y + 32}" font-size="10" text-anchor="middle" fill="${C.muted}">${v}</text>`;
  return svg(`<svg viewBox="0 0 ${ox + w + 30} 92" style="width:270px;max-width:100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`);
}

export function scatterLabeled(cluster: [number, number][], labeled: { x: number; y: number; l: string }[]): Figure {
  const ox = 34, oy = 150, w = 200, h = 120;
  let body = `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h - 6}" stroke="${C.ink}" stroke-width="1.4"/>`;
  for (const [x, y] of cluster) body += `<circle cx="${ox + x}" cy="${oy - y}" r="2.6" fill="${C.ink}"/>`;
  for (const p of labeled) {
    body += `<circle cx="${ox + p.x}" cy="${oy - p.y}" r="3.8" fill="${C.accent}"/>`;
    body += `<text x="${ox + p.x + 6}" y="${oy - p.y - 5}" font-size="11" fill="${C.accent}">${p.l}</text>`;
  }
  return svg(`<svg viewBox="0 0 ${ox + w + 16} 172" style="width:250px;max-width:100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`);
}

export function parallelLines(givenLabel: string): Figure {
  return svg(`<svg viewBox="0 0 220 150" style="width:225px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="50" x2="202" y2="50" stroke="${C.ink}" stroke-width="1.6"/>
    <line x1="18" y1="105" x2="202" y2="105" stroke="${C.ink}" stroke-width="1.6"/>
    <line x1="70" y1="18" x2="168" y2="138" stroke="${C.accent}" stroke-width="1.6"/>
    <path d="M150 47 l8 0" stroke="${C.ink}" stroke-width="1.2"/><path d="M150 102 l8 0" stroke="${C.ink}" stroke-width="1.2"/>
    <path d="M154 44 l8 0" stroke="${C.ink}" stroke-width="1.2"/><path d="M154 99 l8 0" stroke="${C.ink}" stroke-width="1.2"/>
    <text x="100" y="44" font-size="12" fill="${C.muted}">${givenLabel}</text>
    <text x="120" y="124" font-size="13" fill="${C.accent}">?</text>
  </svg>`);
}
