// SVG figures for Geometry (FL B.E.S.T.) Chapters 3–12.
// Plain labels in SVG; KaTeX captions via fig().

const wrap = (vb, label, body, w = "420px") =>
  `<svg viewBox="${vb}" style="max-width:${w};width:100%;height:auto;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${body}</svg>`;

export const fig = (svg, caption) =>
  caption ? `${svg}<div style="font-size:13px;color:#64748b;margin-top:6px;">${caption}</div>` : svg;

const F = "font-family:Inter,system-ui,sans-serif";

function grid(ox, oy, ux, uy, nx, ny) {
  let g = "";
  for (let i = 0; i <= nx; i++) g += `<line x1="${ox + i * ux}" y1="${oy}" x2="${ox + i * ux}" y2="${oy + ny * uy}" stroke="#e2e8f0" stroke-width="1"/>`;
  for (let j = 0; j <= ny; j++) g += `<line x1="${ox}" y1="${oy + j * uy}" x2="${ox + nx * ux}" y2="${oy + j * uy}" stroke="#e2e8f0" stroke-width="1"/>`;
  // axes through origin at center-ish
  return g;
}

// ── Ch 3 Transformations ────────────────────────────────────
export const translationFig = () => wrap("0 0 360 280", "Translation on the coordinate plane", `
  ${grid(40, 40, 28, 28, 10, 7)}
  <line x1="40" y1="180" x2="320" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="180" y1="40" x2="180" y2="236" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="124,152 152,152 152,124" fill="none" stroke="#0f172a" stroke-width="2"/>
  <polygon points="236,96 264,96 264,68" fill="none" stroke="#ea580c" stroke-width="2"/>
  <circle cx="124" cy="152" r="3.5" fill="#0f172a"/><text x="112" y="168" font-size="12" fill="#0f172a" ${F}>A</text>
  <circle cx="236" cy="96" r="3.5" fill="#ea580c"/><text x="242" y="90" font-size="12" fill="#ea580c" ${F}>A′</text>
  <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb"/></marker></defs>
  <line x1="130" y1="148" x2="228" y2="100" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr)" stroke-dasharray="4 3"/>
  <text x="180" y="265" text-anchor="middle" font-size="12" fill="#64748b" ${F}>(x, y) → (x + a, y + b)</text>
`, "340px");

export const reflectionFig = () => wrap("0 0 320 280", "Reflection across the y-axis", `
  ${grid(40, 40, 24, 24, 10, 8)}
  <line x1="40" y1="160" x2="280" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="160" y1="40" x2="160" y2="232" stroke="#2563eb" stroke-width="2.5"/>
  <text x="168" y="52" font-size="12" fill="#2563eb" ${F}>y-axis</text>
  <polygon points="208,128 244,128 244,92" fill="none" stroke="#0f172a" stroke-width="2"/>
  <polygon points="112,128 76,128 76,92" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="230" y="145" font-size="12" fill="#0f172a" ${F}>pre</text>
  <text x="70" y="145" font-size="12" fill="#ea580c" ${F}>image</text>
  <text x="160" y="265" text-anchor="middle" font-size="12" fill="#64748b" ${F}>(x, y) → (−x, y)</text>
`, "300px");

export const rotationFig = () => wrap("0 0 300 300", "90° rotation about the origin", `
  <line x1="30" y1="150" x2="270" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="150" y1="30" x2="150" y2="270" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="150" cy="150" r="3" fill="#0f172a"/><text x="158" y="148" font-size="11" fill="#0f172a" ${F}>O</text>
  <circle cx="210" cy="120" r="5" fill="#0f172a"/><text x="218" y="116" font-size="13" font-weight="700" fill="#0f172a" ${F}>A</text>
  <circle cx="180" cy="90" r="5" fill="#ea580c"/><text x="188" y="86" font-size="13" font-weight="700" fill="#ea580c" ${F}>A′</text>
  <path d="M 205 125 A 40 40 0 0 0 185 95" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="150" y="290" text-anchor="middle" font-size="12" fill="#64748b" ${F}>90° CCW: (x, y) → (−y, x)</text>
`, "280px");

export const compositionFig = () => wrap("0 0 340 240", "Composition of two transformations", `
  <polygon points="60,160 100,160 100,120" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="70" y="180" font-size="12" fill="#0f172a" ${F}>pre</text>
  <defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb"/></marker></defs>
  <line x1="110" y1="140" x2="160" y2="100" stroke="#2563eb" stroke-width="1.5" marker-end="url(#a2)"/>
  <text x="125" y="110" font-size="11" fill="#2563eb" ${F}>T₁</text>
  <polygon points="170,120 210,120 210,80" fill="none" stroke="#0d9488" stroke-width="2"/>
  <line x1="220" y1="100" x2="270" y2="140" stroke="#ea580c" stroke-width="1.5" marker-end="url(#a2)"/>
  <text x="235" y="110" font-size="11" fill="#ea580c" ${F}>T₂</text>
  <polygon points="260,160 300,160 300,120" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <text x="270" y="180" font-size="12" fill="#7c3aed" ${F}>final</text>
  <text x="170" y="220" text-anchor="middle" font-size="12" fill="#64748b" ${F}>T₂ ∘ T₁  (do T₁ first, then T₂)</text>
`, "320px");

export const symmetryFig = () => wrap("0 0 320 240", "Line and rotational symmetry", `
  <polygon points="160,40 220,100 190,180 130,180 100,100" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <line x1="160" y1="30" x2="160" y2="200" stroke="#ea580c" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="168" y="55" font-size="11" fill="#ea580c" ${F}>line of symmetry</text>
  <circle cx="160" cy="120" r="4" fill="#0f172a"/>
  <text x="160" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>regular pentagon: 5 lines + order-5 rotation</text>
`, "300px");

// ── Ch 4 Triangles ───────────────────────────────────────────
export const triangleTypes = () => wrap("0 0 420 180", "Triangle classifications", `
  <polygon points="50,140 110,40 170,140" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="110" y="165" text-anchor="middle" font-size="11" fill="#64748b" ${F}>scalene</text>
  <polygon points="220,140 260,40 300,140" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="235" y="148" font-size="10" fill="#ea580c" ${F}>=</text>
  <text x="275" y="148" font-size="10" fill="#ea580c" ${F}>=</text>
  <text x="260" y="165" text-anchor="middle" font-size="11" fill="#64748b" ${F}>isosceles</text>
  <polygon points="340,140 370,50 400,140" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="348" y="148" font-size="9" fill="#0d9488" ${F}>≡</text>
  <text x="378" y="148" font-size="9" fill="#0d9488" ${F}>≡</text>
  <text x="362" y="70" font-size="9" fill="#0d9488" ${F}>≡</text>
  <text x="370" y="165" text-anchor="middle" font-size="11" fill="#64748b" ${F}>equilateral</text>
`, "400px");

export const isoscelesFig = () => wrap("0 0 280 220", "Isosceles triangle base angles", `
  <polygon points="140,40 40,180 240,180" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <text x="80" y="110" font-size="12" fill="#ea580c" ${F}>leg</text>
  <text x="185" y="110" font-size="12" fill="#ea580c" ${F}>leg</text>
  <path d="M 70 180 A 40 40 0 0 1 100 155" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="M 210 180 A 40 40 0 0 0 180 155" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="85" y="170" font-size="13" fill="#2563eb" ${F}>α</text>
  <text x="185" y="170" font-size="13" fill="#2563eb" ${F}>α</text>
  <text x="140" y="210" text-anchor="middle" font-size="12" fill="#64748b" ${F}>base angles congruent</text>
`, "260px");

export const sssMarks = () => wrap("0 0 360 200", "SSS congruence markings", `
  <polygon points="40,160 100,50 160,160" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="55" y1="140" x2="70" y2="112" stroke="#ea580c" stroke-width="2"/>
  <line x1="130" y1="112" x2="145" y2="140" stroke="#2563eb" stroke-width="2"/>
  <line x1="70" y1="160" x2="130" y2="160" stroke="#0d9488" stroke-width="2"/>
  <text x="100" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>△ABC</text>
  <polygon points="220,160 280,50 340,160" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="235" y1="140" x2="250" y2="112" stroke="#ea580c" stroke-width="2"/>
  <line x1="310" y1="112" x2="325" y2="140" stroke="#2563eb" stroke-width="2"/>
  <line x1="250" y1="160" x2="310" y2="160" stroke="#0d9488" stroke-width="2"/>
  <text x="280" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>△DEF</text>
  <text x="180" y="40" text-anchor="middle" font-size="13" fill="#0f172a" font-weight="700" ${F}>SSS</text>
`, "340px");

export const sasMarks = () => wrap("0 0 360 200", "SAS congruence", `
  <polygon points="40,160 100,50 160,160" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="55" y1="140" x2="70" y2="112" stroke="#ea580c" stroke-width="2"/>
  <path d="M 70 160 A 28 28 0 0 1 88 140" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <line x1="70" y1="160" x2="130" y2="160" stroke="#0d9488" stroke-width="2"/>
  <text x="100" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>included ∠</text>
  <polygon points="220,160 280,50 340,160" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="235" y1="140" x2="250" y2="112" stroke="#ea580c" stroke-width="2"/>
  <path d="M 250 160 A 28 28 0 0 1 268 140" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <line x1="250" y1="160" x2="310" y2="160" stroke="#0d9488" stroke-width="2"/>
  <text x="180" y="40" text-anchor="middle" font-size="13" fill="#0f172a" font-weight="700" ${F}>SAS</text>
`, "340px");

export const asaMarks = () => wrap("0 0 360 200", "ASA congruence", `
  <polygon points="40,160 100,50 160,160" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 70 160 A 28 28 0 0 1 88 140" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <line x1="70" y1="160" x2="130" y2="160" stroke="#0d9488" stroke-width="2.5"/>
  <path d="M 130 160 A 28 28 0 0 0 112 140" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="100" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>included side</text>
  <polygon points="220,160 280,50 340,160" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 250 160 A 28 28 0 0 1 268 140" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <line x1="250" y1="160" x2="310" y2="160" stroke="#0d9488" stroke-width="2.5"/>
  <path d="M 310 160 A 28 28 0 0 0 292 140" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="180" y="40" text-anchor="middle" font-size="13" fill="#0f172a" font-weight="700" ${F}>ASA</text>
`, "340px");

export const hlFig = () => wrap("0 0 320 200", "HL for right triangles", `
  <polygon points="40,160 40,60 200,160" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="40" y="145" width="15" height="15" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <line x1="80" y1="160" x2="160" y2="160" stroke="#0d9488" stroke-width="2.5"/>
  <text x="110" y="178" text-anchor="middle" font-size="11" fill="#0d9488" ${F}>leg</text>
  <line x1="55" y1="95" x2="130" y2="145" stroke="#2563eb" stroke-width="2.5"/>
  <text x="100" y="110" font-size="11" fill="#2563eb" ${F}>hyp</text>
  <polygon points="220,160 220,60 300,160" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="220" y="145" width="15" height="15" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <line x1="235" y1="160" x2="275" y2="160" stroke="#0d9488" stroke-width="2.5"/>
  <line x1="230" y1="100" x2="270" y2="145" stroke="#2563eb" stroke-width="2.5"/>
  <text x="160" y="40" text-anchor="middle" font-size="13" fill="#0f172a" font-weight="700" ${F}>HL</text>
`, "300px");

export const overlappingFig = () => wrap("0 0 300 220", "Overlapping triangles", `
  <line x1="40" y1="180" x2="260" y2="180" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="180" x2="150" y2="40" stroke="#0f172a" stroke-width="2"/>
  <line x1="260" y1="180" x2="150" y2="40" stroke="#0f172a" stroke-width="2"/>
  <line x1="80" y1="180" x2="220" y2="80" stroke="#2563eb" stroke-width="2"/>
  <line x1="220" y1="180" x2="80" y2="80" stroke="#ea580c" stroke-width="2"/>
  <circle cx="150" cy="110" r="4" fill="#0f172a"/><text x="160" y="108" font-size="12" fill="#0f172a" ${F}>E</text>
  <text x="150" y="210" text-anchor="middle" font-size="12" fill="#64748b" ${F}>shared parts at the intersection</text>
`, "280px");

// ── Ch 5 Similarity ──────────────────────────────────────────
export const dilationFig = () => wrap("0 0 320 260", "Dilation from the origin", `
  <line x1="40" y1="200" x2="280" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="80" y1="40" x2="80" y2="240" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="80" cy="200" r="4" fill="#0f172a"/><text x="60" y="215" font-size="11" fill="#0f172a" ${F}>O</text>
  <polygon points="120,180 160,180 160,140" fill="none" stroke="#0f172a" stroke-width="2"/>
  <polygon points="160,160 240,160 240,80" fill="none" stroke="#ea580c" stroke-width="2"/>
  <line x1="120" y1="180" x2="160" y2="160" stroke="#2563eb" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="160" y1="180" x2="240" y2="160" stroke="#2563eb" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="160" y1="140" x2="240" y2="80" stroke="#2563eb" stroke-width="1" stroke-dasharray="3 2"/>
  <text x="160" y="250" text-anchor="middle" font-size="12" fill="#64748b" ${F}>k = 2 about the origin</text>
`, "300px");

export const similarTriangles = () => wrap("0 0 360 200", "Similar triangles AA", `
  <polygon points="40,160 90,50 140,160" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 55 160 A 20 20 0 0 1 62 145" fill="none" stroke="#ea580c" stroke-width="2"/>
  <path d="M 125 160 A 20 20 0 0 0 118 145" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="90" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>△ABC</text>
  <polygon points="200,160 280,40 360,160" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 220 160 A 28 28 0 0 1 232 138" fill="none" stroke="#ea580c" stroke-width="2"/>
  <path d="M 340 160 A 28 28 0 0 0 328 138" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="280" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>△DEF ~</text>
  <text x="180" y="30" text-anchor="middle" font-size="13" fill="#0f172a" font-weight="700" ${F}>AA Similarity</text>
`, "340px");

export const shadowMeasure = () => wrap("0 0 380 220", "Indirect measurement with shadows", `
  <line x1="40" y1="180" x2="360" y2="180" stroke="#94a3b8" stroke-width="2"/>
  <line x1="80" y1="180" x2="80" y2="60" stroke="#0f172a" stroke-width="3"/>
  <text x="90" y="110" font-size="12" fill="#0f172a" ${F}>h</text>
  <line x1="80" y1="180" x2="220" y2="180" stroke="#ea580c" stroke-width="3"/>
  <text x="140" y="200" font-size="11" fill="#ea580c" ${F}>shadow</text>
  <line x1="260" y1="180" x2="260" y2="140" stroke="#0d9488" stroke-width="3"/>
  <text x="270" y="165" font-size="11" fill="#0d9488" ${F}>stick</text>
  <line x1="260" y1="180" x2="320" y2="180" stroke="#2563eb" stroke-width="3"/>
  <line x1="40" y1="40" x2="220" y2="180" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="40" y1="40" x2="320" y2="180" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="40" cy="40" r="8" fill="#fbbf24"/>
  <text x="190" y="215" text-anchor="middle" font-size="12" fill="#64748b" ${F}>similar right triangles → proportion</text>
`, "360px");

export const proportionalityFig = () => wrap("0 0 300 220", "Triangle proportionality theorem", `
  <polygon points="150,40 40,190 260,190" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="85" y1="115" x2="215" y2="115" stroke="#ea580c" stroke-width="2.5"/>
  <path d="M 90 110 l 8 5 M 95 107 l 8 5" stroke="#2563eb" stroke-width="1.5"/>
  <path d="M 50 185 l 8 5 M 55 182 l 8 5" stroke="#2563eb" stroke-width="1.5"/>
  <text x="150" y="105" text-anchor="middle" font-size="12" fill="#ea580c" ${F}>∥ base</text>
  <text x="150" y="210" text-anchor="middle" font-size="12" fill="#64748b" ${F}>parallel ⇒ proportional sides</text>
`, "280px");

// ── Ch 6 Right triangles / trig ──────────────────────────────
export const pythagoreanFig = () => wrap("0 0 280 240", "Pythagorean theorem", `
  <polygon points="40,180 40,60 200,180" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="40" y="165" width="15" height="15" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <text x="20" y="125" font-size="14" fill="#2563eb" font-weight="700" ${F}>a</text>
  <text x="110" y="200" font-size="14" fill="#0d9488" font-weight="700" ${F}>b</text>
  <text x="130" y="110" font-size="14" fill="#7c3aed" font-weight="700" ${F}>c</text>
  <text x="140" y="230" text-anchor="middle" font-size="13" fill="#64748b" ${F}>a² + b² = c²</text>
`, "260px");

export const special4545 = () => wrap("0 0 260 220", "45-45-90 triangle", `
  <polygon points="40,180 40,60 160,180" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="40" y="165" width="15" height="15" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <path d="M 55 180 A 25 25 0 0 1 70 160" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <path d="M 40 75 A 25 25 0 0 1 58 60" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="75" y="175" font-size="12" fill="#2563eb" ${F}>45°</text>
  <text x="50" y="70" font-size="12" fill="#2563eb" ${F}>45°</text>
  <text x="20" y="125" font-size="13" fill="#0f172a" ${F}>x</text>
  <text x="90" y="200" font-size="13" fill="#0f172a" ${F}>x</text>
  <text x="115" y="110" font-size="13" fill="#ea580c" ${F}>x√2</text>
`, "240px");

export const special3060 = () => wrap("0 0 300 220", "30-60-90 triangle", `
  <polygon points="40,180 40,80 240,180" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="40" y="165" width="15" height="15" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <text x="55" y="175" font-size="12" fill="#2563eb" ${F}>30°</text>
  <text x="50" y="95" font-size="12" fill="#0d9488" ${F}>60°</text>
  <text x="20" y="135" font-size="13" fill="#0f172a" ${F}>x√3</text>
  <text x="130" y="200" font-size="13" fill="#0f172a" ${F}>x</text>
  <text x="150" y="120" font-size="13" fill="#ea580c" ${F}>2x</text>
`, "280px");

export const sohcahtoa = () => wrap("0 0 300 240", "Sine cosine tangent", `
  <polygon points="50,190 50,70 230,190" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="50" y="175" width="15" height="15" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M 80 190 A 35 35 0 0 1 95 165" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="100" y="185" font-size="13" fill="#ea580c" font-weight="700" ${F}>θ</text>
  <text x="145" y="120" font-size="12" fill="#2563eb" ${F}>hyp</text>
  <text x="30" y="135" font-size="12" fill="#0d9488" ${F}>opp</text>
  <text x="130" y="210" font-size="12" fill="#7c3aed" ${F}>adj</text>
  <text x="150" y="235" text-anchor="middle" font-size="11" fill="#64748b" ${F}>sin = opp/hyp · cos = adj/hyp · tan = opp/adj</text>
`, "280px");

export const elevationFig = () => wrap("0 0 340 220", "Angle of elevation", `
  <line x1="40" y1="180" x2="300" y2="180" stroke="#94a3b8" stroke-width="2"/>
  <line x1="260" y1="180" x2="260" y2="60" stroke="#0f172a" stroke-width="3"/>
  <line x1="80" y1="180" x2="260" y2="60" stroke="#2563eb" stroke-width="2"/>
  <path d="M 110 180 A 40 40 0 0 0 125 155" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="130" y="175" font-size="12" fill="#ea580c" ${F}>elev.</text>
  <circle cx="80" cy="180" r="4" fill="#0d9488"/>
  <text x="70" y="200" font-size="11" fill="#0d9488" ${F}>eye</text>
  <text x="270" y="120" font-size="12" fill="#0f172a" ${F}>h</text>
  <text x="170" y="210" text-anchor="middle" font-size="12" fill="#64748b" ${F}>angle of elevation from horizontal</text>
`, "320px");

// ── Ch 7 Polygons ────────────────────────────────────────────
export const polygonAngles = () => wrap("0 0 280 240", "Interior angles of a hexagon", `
  <polygon points="140,30 230,80 230,160 140,210 50,160 50,80" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <line x1="140" y1="30" x2="140" y2="210" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4 2"/>
  <line x1="140" y1="30" x2="50" y2="160" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4 2"/>
  <line x1="140" y1="30" x2="230" y2="160" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4 2"/>
  <text x="140" y="235" text-anchor="middle" font-size="12" fill="#64748b" ${F}>(n−2)·180° from (n−2) triangles</text>
`, "260px");

export const parallelogramFig = () => wrap("0 0 320 180", "Parallelogram properties", `
  <polygon points="60,140 120,40 280,40 220,140" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <path d="M 80 120 l 10 6 M 85 116 l 10 6" stroke="#ea580c" stroke-width="2"/>
  <path d="M 240 120 l 10 6 M 245 116 l 10 6" stroke="#ea580c" stroke-width="2"/>
  <path d="M 130 45 l 12 0 M 130 50 l 12 0" stroke="#2563eb" stroke-width="2"/>
  <path d="M 190 135 l 12 0 M 190 140 l 12 0" stroke="#2563eb" stroke-width="2"/>
  <line x1="60" y1="140" x2="280" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="120" y1="40" x2="220" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
  <text x="160" y="170" text-anchor="middle" font-size="12" fill="#64748b" ${F}>opp. sides ∥ and ≅; diagonals bisect</text>
`, "300px");

export const specialQuads = () => wrap("0 0 400 160", "Rectangle, rhombus, square", `
  <rect x="30" y="40" width="100" height="70" fill="none" stroke="#0f172a" stroke-width="2"/>
  <rect x="30" y="95" width="12" height="12" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <text x="80" y="135" text-anchor="middle" font-size="11" fill="#64748b" ${F}>rectangle</text>
  <polygon points="180,110 210,40 270,50 240,120" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="220" y="145" text-anchor="middle" font-size="11" fill="#64748b" ${F}>rhombus</text>
  <rect x="310" y="40" width="70" height="70" fill="none" stroke="#0f172a" stroke-width="2"/>
  <rect x="310" y="95" width="12" height="12" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <text x="345" y="135" text-anchor="middle" font-size="11" fill="#64748b" ${F}>square</text>
`, "380px");

export const trapezoidFig = () => wrap("0 0 320 180", "Trapezoid midsegment", `
  <polygon points="60,140 100,50 240,50 280,140" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="80" y1="95" x2="260" y2="95" stroke="#ea580c" stroke-width="2.5"/>
  <text x="170" y="88" text-anchor="middle" font-size="12" fill="#ea580c" ${F}>midsegment</text>
  <text x="170" y="45" text-anchor="middle" font-size="11" fill="#64748b" ${F}>b₁</text>
  <text x="170" y="160" text-anchor="middle" font-size="11" fill="#64748b" ${F}>b₂</text>
  <text x="160" y="175" text-anchor="middle" font-size="12" fill="#64748b" ${F}>m = (b₁ + b₂)/2</text>
`, "300px");

export const kiteFig = () => wrap("0 0 240 240", "Kite", `
  <polygon points="120,30 200,100 120,210 40,100" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="120" y1="30" x2="120" y2="210" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 2"/>
  <line x1="40" y1="100" x2="200" y2="100" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4 2"/>
  <text x="120" y="235" text-anchor="middle" font-size="12" fill="#64748b" ${F}>diagonals ⊥; one symmetry diagonal</text>
`, "220px");

// ── Ch 8 Coordinate / area ───────────────────────────────────
export const distanceMidpoint = () => wrap("0 0 300 240", "Distance and midpoint", `
  <line x1="40" y1="180" x2="260" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="60" y1="40" x2="60" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="100" cy="140" r="5" fill="#ea580c"/><text x="100" y="128" text-anchor="middle" font-size="12" fill="#ea580c" ${F}>A</text>
  <circle cx="220" cy="80" r="5" fill="#ea580c"/><text x="220" y="68" text-anchor="middle" font-size="12" fill="#ea580c" ${F}>B</text>
  <line x1="100" y1="140" x2="220" y2="80" stroke="#0f172a" stroke-width="2"/>
  <circle cx="160" cy="110" r="4" fill="#2563eb"/><text x="170" y="108" font-size="12" fill="#2563eb" ${F}>M</text>
  <text x="150" y="225" text-anchor="middle" font-size="11" fill="#64748b" ${F}>d = √[(Δx)²+(Δy)²] · M = midpoint</text>
`, "280px");

export const weightedAvgFig = () => wrap("0 0 360 120", "Weighted average / section formula", `
  <line x1="40" y1="50" x2="320" y2="50" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="40" cy="50" r="5" fill="#ea580c"/><text x="40" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>A</text>
  <circle cx="320" cy="50" r="5" fill="#ea580c"/><text x="320" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>B</text>
  <circle cx="180" cy="50" r="5" fill="#2563eb"/><text x="180" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#1d4ed8" ${F}>P</text>
  <text x="110" y="40" text-anchor="middle" font-size="12" fill="#64748b" ${F}>m</text>
  <text x="250" y="40" text-anchor="middle" font-size="12" fill="#64748b" ${F}>n</text>
  <text x="180" y="105" text-anchor="middle" font-size="12" fill="#64748b" ${F}>P divides AB in ratio m:n</text>
`, "340px");

export const areaFig = () => wrap("0 0 340 180", "Area formulas reminder", `
  <polygon points="40,140 90,40 140,140" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <text x="90" y="165" text-anchor="middle" font-size="11" fill="#64748b" ${F}>½bh</text>
  <rect x="170" y="60" width="80" height="80" fill="#ecfdf5" stroke="#0d9488" stroke-width="2"/>
  <text x="210" y="165" text-anchor="middle" font-size="11" fill="#64748b" ${F}>lw</text>
  <polygon points="280,140 300,50 330,140" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
  <text x="305" y="165" text-anchor="middle" font-size="11" fill="#64748b" ${F}>½d₁d₂</text>
`, "320px");

export const dilationScale = () => wrap("0 0 300 200", "Dilation scales perimeter and area", `
  <rect x="40" y="80" width="60" height="60" fill="none" stroke="#0f172a" stroke-width="2"/>
  <rect x="130" y="40" width="120" height="120" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="70" y="170" text-anchor="middle" font-size="11" fill="#64748b" ${F}>P, A</text>
  <text x="190" y="180" text-anchor="middle" font-size="11" fill="#ea580c" ${F}>kP, k²A</text>
`, "280px");

// ── Ch 9 Circles ─────────────────────────────────────────────
export const centralAngleFig = () => wrap("0 0 260 260", "Central angle and arc", `
  <circle cx="130" cy="130" r="90" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="130" cy="130" r="4" fill="#0f172a"/><text x="140" y="128" font-size="12" fill="#0f172a" ${F}>O</text>
  <line x1="130" y1="130" x2="200" y2="70" stroke="#2563eb" stroke-width="2"/>
  <line x1="130" y1="130" x2="210" y2="160" stroke="#2563eb" stroke-width="2"/>
  <path d="M 200 70 A 90 90 0 0 1 210 160" fill="none" stroke="#ea580c" stroke-width="3"/>
  <text x="195" y="120" font-size="13" fill="#2563eb" ${F}>θ</text>
  <text x="220" y="110" font-size="12" fill="#ea580c" ${F}>arc</text>
  <text x="130" y="250" text-anchor="middle" font-size="12" fill="#64748b" ${F}>central ∠ = intercepted arc</text>
`, "240px");

export const inscribedAngleFig = () => wrap("0 0 260 260", "Inscribed angle", `
  <circle cx="130" cy="130" r="90" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="130" cy="40" r="4" fill="#ea580c"/><text x="140" y="38" font-size="12" fill="#ea580c" ${F}>A</text>
  <circle cx="210" cy="160" r="4" fill="#ea580c"/><text x="220" y="158" font-size="12" fill="#ea580c" ${F}>B</text>
  <circle cx="50" cy="160" r="4" fill="#ea580c"/><text x="35" y="158" font-size="12" fill="#ea580c" ${F}>C</text>
  <line x1="50" y1="160" x2="130" y2="40" stroke="#0f172a" stroke-width="2"/>
  <line x1="210" y1="160" x2="130" y2="40" stroke="#0f172a" stroke-width="2"/>
  <path d="M 50 160 A 90 90 0 0 0 210 160" fill="none" stroke="#2563eb" stroke-width="3"/>
  <text x="130" y="100" font-size="13" fill="#7c3aed" ${F}>½</text>
  <text x="130" y="250" text-anchor="middle" font-size="12" fill="#64748b" ${F}>inscribed ∠ = ½ intercepted arc</text>
`, "240px");

export const tangentFig = () => wrap("0 0 280 260", "Tangent perpendicular to radius", `
  <circle cx="130" cy="130" r="70" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="130" cy="130" r="4" fill="#0f172a"/><text x="140" y="128" font-size="12" fill="#0f172a" ${F}>O</text>
  <circle cx="190" cy="80" r="4" fill="#ea580c"/><text x="200" y="75" font-size="12" fill="#ea580c" ${F}>P</text>
  <line x1="130" y1="130" x2="190" y2="80" stroke="#2563eb" stroke-width="2"/>
  <line x1="60" y1="30" x2="260" y2="160" stroke="#0d9488" stroke-width="2.5"/>
  <rect x="178" y="78" width="12" height="12" fill="none" stroke="#ea580c" stroke-width="1.5" transform="rotate(40 184 84)"/>
  <text x="140" y="245" text-anchor="middle" font-size="12" fill="#64748b" ${F}>tangent ⊥ radius at point of contact</text>
`, "260px");

export const sectorFig = () => wrap("0 0 260 260", "Arc length and sector area", `
  <path d="M 130 130 L 210 80 A 90 90 0 0 1 210 180 Z" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <circle cx="130" cy="130" r="90" fill="none" stroke="#0f172a" stroke-width="2"/>
  <circle cx="130" cy="130" r="3" fill="#0f172a"/>
  <text x="175" y="125" font-size="12" fill="#4338ca" ${F}>sector</text>
  <text x="130" y="250" text-anchor="middle" font-size="11" fill="#64748b" ${F}>arc = (θ/360)·2πr · sector = (θ/360)·πr²</text>
`, "240px");

export const cyclicQuad = () => wrap("0 0 260 260", "Cyclic quadrilateral", `
  <circle cx="130" cy="130" r="90" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <polygon points="70,80 200,70 210,180 60,170" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <text x="130" y="250" text-anchor="middle" font-size="12" fill="#64748b" ${F}>opp. angles sum to 180°</text>
`, "240px");

// ── Ch 10 3D ─────────────────────────────────────────────────
export const prismNet = () => wrap("0 0 340 180", "Rectangular prism", `
  <polygon points="60,120 60,50 140,30 140,100" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <polygon points="60,120 140,100 200,120 120,140" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <polygon points="140,100 140,30 200,50 200,120" fill="#ecfdf5" stroke="#0d9488" stroke-width="1.5"/>
  <text x="40" y="90" font-size="12" fill="#64748b" ${F}>h</text>
  <text x="100" y="155" font-size="12" fill="#64748b" ${F}>l</text>
  <text x="180" y="90" font-size="12" fill="#64748b" ${F}>w</text>
  <text x="250" y="80" font-size="12" fill="#0f172a" ${F}>SA = 2(lw+lh+wh)</text>
  <text x="250" y="100" font-size="12" fill="#0f172a" ${F}>V = lwh</text>
`, "320px");

export const cylinderFig = () => wrap("0 0 240 220", "Cylinder", `
  <ellipse cx="120" cy="50" rx="60" ry="20" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="50" x2="60" y2="160" stroke="#0f172a" stroke-width="2"/>
  <line x1="180" y1="50" x2="180" y2="160" stroke="#0f172a" stroke-width="2"/>
  <ellipse cx="120" cy="160" rx="60" ry="20" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="190" y="110" font-size="13" fill="#64748b" ${F}>h</text>
  <text x="120" y="185" text-anchor="middle" font-size="13" fill="#64748b" ${F}>r</text>
  <text x="120" y="210" text-anchor="middle" font-size="12" fill="#64748b" ${F}>V = πr²h</text>
`, "220px");

export const crossSectionFig = () => wrap("0 0 280 200", "Cross-section of a cube", `
  <polygon points="80,150 80,60 160,40 160,130" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="80,150 160,130 220,150 140,170" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="160,130 160,40 220,60 220,150" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="100,100 180,70 200,120" fill="#eef2ff" stroke="#6366f1" stroke-width="2" opacity="0.85"/>
  <text x="140" y="190" text-anchor="middle" font-size="12" fill="#64748b" ${F}>plane slice → 2D cross-section</text>
`, "260px");

export const solidRevolution = () => wrap("0 0 300 200", "Solid of revolution", `
  <line x1="40" y1="160" x2="260" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <rect x="80" y="60" width="40" height="100" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <text x="100" y="50" text-anchor="middle" font-size="11" fill="#4338ca" ${F}>rect</text>
  <defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ea580c"/></marker></defs>
  <line x1="140" y1="110" x2="180" y2="110" stroke="#ea580c" stroke-width="2" marker-end="url(#a3)"/>
  <ellipse cx="230" cy="60" rx="25" ry="8" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="205" y1="60" x2="205" y2="160" stroke="#0f172a" stroke-width="2"/>
  <line x1="255" y1="60" x2="255" y2="160" stroke="#0f172a" stroke-width="2"/>
  <ellipse cx="230" cy="160" rx="25" ry="8" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="230" y="185" text-anchor="middle" font-size="11" fill="#64748b" ${F}>cylinder</text>
`, "280px");

export const scale3d = () => wrap("0 0 300 160", "Similar solids scale factors", `
  <rect x="40" y="60" width="50" height="50" fill="none" stroke="#0f172a" stroke-width="2"/>
  <rect x="140" y="30" width="100" height="100" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="65" y="140" text-anchor="middle" font-size="11" fill="#64748b" ${F}>1</text>
  <text x="190" y="150" text-anchor="middle" font-size="11" fill="#ea580c" ${F}>k</text>
  <text x="270" y="70" font-size="11" fill="#0f172a" ${F}>SA × k²</text>
  <text x="270" y="90" font-size="11" fill="#0f172a" ${F}>V × k³</text>
`, "280px");

// ── Ch 11 Constructions ──────────────────────────────────────
export const copyAngleFig = () => wrap("0 0 360 180", "Copying an angle", `
  <line x1="40" y1="140" x2="160" y2="140" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="140" x2="120" y2="50" stroke="#0f172a" stroke-width="2"/>
  <path d="M 70 140 A 40 40 0 0 0 85 110" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="90" y="160" text-anchor="middle" font-size="11" fill="#64748b" ${F}>given</text>
  <line x1="200" y1="140" x2="340" y2="140" stroke="#94a3b8" stroke-width="2"/>
  <line x1="200" y1="140" x2="280" y2="50" stroke="#0d9488" stroke-width="2"/>
  <path d="M 230 140 A 40 40 0 0 0 245 110" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3 2"/>
  <path d="M 255 90 A 30 30 0 0 1 280 100" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="270" y="160" text-anchor="middle" font-size="11" fill="#64748b" ${F}>copy</text>
`, "340px");

export const bisectFig = () => wrap("0 0 300 200", "Perpendicular bisector", `
  <line x1="40" y1="120" x2="260" y2="120" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="80" cy="120" r="4" fill="#ea580c"/><text x="80" y="145" text-anchor="middle" font-size="12" fill="#ea580c" ${F}>A</text>
  <circle cx="220" cy="120" r="4" fill="#ea580c"/><text x="220" y="145" text-anchor="middle" font-size="12" fill="#ea580c" ${F}>B</text>
  <path d="M 80 60 A 90 90 0 0 1 220 60" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M 80 180 A 90 90 0 0 0 220 180" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="150" y1="40" x2="150" y2="190" stroke="#0d9488" stroke-width="2"/>
  <circle cx="150" cy="120" r="4" fill="#0d9488"/>
  <text x="150" y="35" text-anchor="middle" font-size="11" fill="#0d9488" ${F}>⊥ bisector</text>
`, "280px");

export const incenterFig = () => wrap("0 0 280 240", "Incenter and incircle", `
  <polygon points="140,40 40,200 240,200" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="140" y1="40" x2="140" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="40" y1="200" x2="170" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="240" y1="200" x2="110" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
  <circle cx="140" cy="150" r="4" fill="#ea580c"/><text x="150" y="148" font-size="11" fill="#ea580c" ${F}>I</text>
  <circle cx="140" cy="150" r="45" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="140" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>incenter = angle bisectors</text>
`, "260px");

export const circumcenterFig = () => wrap("0 0 280 240", "Circumcenter and circumcircle", `
  <polygon points="140,50 50,190 230,190" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="95" y1="120" x2="185" y2="120" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="140" y1="50" x2="140" y2="190" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
  <circle cx="140" cy="140" r="4" fill="#ea580c"/><text x="150" y="138" font-size="11" fill="#ea580c" ${F}>O</text>
  <circle cx="140" cy="140" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="140" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>circumcenter = ⊥ bisectors</text>
`, "260px");

// ── Ch 12 Probability ────────────────────────────────────────
export const sampleSpaceFig = () => wrap("0 0 320 160", "Sample space for two coins", `
  <rect x="30" y="40" width="60" height="40" rx="6" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="60" y="65" text-anchor="middle" font-size="13" fill="#4338ca" ${F}>HH</text>
  <rect x="100" y="40" width="60" height="40" rx="6" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="130" y="65" text-anchor="middle" font-size="13" fill="#4338ca" ${F}>HT</text>
  <rect x="170" y="40" width="60" height="40" rx="6" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="200" y="65" text-anchor="middle" font-size="13" fill="#4338ca" ${F}>TH</text>
  <rect x="240" y="40" width="60" height="40" rx="6" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="270" y="65" text-anchor="middle" font-size="13" fill="#4338ca" ${F}>TT</text>
  <text x="160" y="120" text-anchor="middle" font-size="12" fill="#64748b" ${F}>S = {HH, HT, TH, TT} · |S| = 4</text>
`, "300px");

export const treeDiagram = () => wrap("0 0 340 220", "Probability tree", `
  <circle cx="40" cy="110" r="8" fill="#0f172a"/>
  <line x1="48" y1="100" x2="120" y2="50" stroke="#2563eb" stroke-width="2"/>
  <line x1="48" y1="120" x2="120" y2="170" stroke="#ea580c" stroke-width="2"/>
  <text x="75" y="65" font-size="11" fill="#2563eb" ${F}>A</text>
  <text x="75" y="160" font-size="11" fill="#ea580c" ${F}>Aᶜ</text>
  <circle cx="130" cy="50" r="6" fill="#2563eb"/>
  <circle cx="130" cy="170" r="6" fill="#ea580c"/>
  <line x1="136" y1="45" x2="220" y2="30" stroke="#0d9488" stroke-width="1.5"/>
  <line x1="136" y1="55" x2="220" y2="70" stroke="#7c3aed" stroke-width="1.5"/>
  <line x1="136" y1="165" x2="220" y2="150" stroke="#0d9488" stroke-width="1.5"/>
  <line x1="136" y1="175" x2="220" y2="190" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="240" y="35" font-size="12" fill="#0f172a" ${F}>B</text>
  <text x="240" y="75" font-size="12" fill="#0f172a" ${F}>Bᶜ</text>
  <text x="240" y="155" font-size="12" fill="#0f172a" ${F}>B</text>
  <text x="240" y="195" font-size="12" fill="#0f172a" ${F}>Bᶜ</text>
  <text x="170" y="215" text-anchor="middle" font-size="12" fill="#64748b" ${F}>multiply along branches</text>
`, "320px");

export const twoWayTable = () => wrap("0 0 320 180", "Two-way table", `
  <rect x="80" y="30" width="80" height="40" fill="#f1f5f9" stroke="#cbd5e1"/>
  <rect x="160" y="30" width="80" height="40" fill="#f1f5f9" stroke="#cbd5e1"/>
  <rect x="240" y="30" width="60" height="40" fill="#e2e8f0" stroke="#94a3b8"/>
  <text x="120" y="55" text-anchor="middle" font-size="12" fill="#475569" ${F}>Yes</text>
  <text x="200" y="55" text-anchor="middle" font-size="12" fill="#475569" ${F}>No</text>
  <text x="270" y="55" text-anchor="middle" font-size="12" fill="#475569" ${F}>Tot</text>
  <rect x="20" y="70" width="60" height="40" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="50" y="95" text-anchor="middle" font-size="12" fill="#475569" ${F}>A</text>
  <rect x="80" y="70" width="80" height="40" fill="#fff" stroke="#cbd5e1"/>
  <rect x="160" y="70" width="80" height="40" fill="#fff" stroke="#cbd5e1"/>
  <rect x="240" y="70" width="60" height="40" fill="#eef2ff" stroke="#6366f1"/>
  <rect x="20" y="110" width="60" height="40" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="50" y="135" text-anchor="middle" font-size="12" fill="#475569" ${F}>Aᶜ</text>
  <rect x="80" y="110" width="80" height="40" fill="#fff" stroke="#cbd5e1"/>
  <rect x="160" y="110" width="80" height="40" fill="#fff" stroke="#cbd5e1"/>
  <rect x="240" y="110" width="60" height="40" fill="#eef2ff" stroke="#6366f1"/>
  <text x="160" y="170" text-anchor="middle" font-size="12" fill="#64748b" ${F}>P(A|B) from joint / column total</text>
`, "300px");

export const permuteCombine = () => wrap("0 0 340 140", "Permutations vs combinations", `
  <rect x="30" y="30" width="130" height="70" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="95" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#4338ca" ${F}>nPr</text>
  <text x="95" y="80" text-anchor="middle" font-size="11" fill="#64748b" ${F}>order matters</text>
  <rect x="180" y="30" width="130" height="70" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="245" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>nCr</text>
  <text x="245" y="80" text-anchor="middle" font-size="11" fill="#64748b" ${F}>order doesn't</text>
`, "320px");
