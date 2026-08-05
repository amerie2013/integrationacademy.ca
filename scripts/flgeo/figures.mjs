// Inline SVG figures for Geometry (FL B.E.S.T.) Chapters 1–2.
// Plain labels inside SVG (KaTeX does not render in <text>); math goes in captions.

const wrap = (vb, label, body, w = "420px") =>
  `<svg viewBox="${vb}" style="max-width:${w};width:100%;height:auto;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${body}</svg>`;

/** Figure + optional KaTeX caption underneath. */
export const fig = (svg, caption) =>
  caption
    ? `${svg}<div style="font-size:13px;color:#64748b;margin-top:6px;">${caption}</div>`
    : svg;

const F = "font-family:Inter,system-ui,sans-serif";

// ── 1.1 Points, lines, planes ────────────────────────────────
export const pointsLinesPlanes = () => wrap("0 0 440 230", "Points, lines, and a plane", `
  <polygon points="50,50 280,30 340,160 110,190" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <text x="200" y="28" font-size="13" fill="#4338ca" ${F}>plane P</text>
  <line x1="40" y1="170" x2="390" y2="80" stroke="#0f172a" stroke-width="2.5"/>
  <polygon points="390,80 378,76 380,88" fill="#0f172a"/>
  <polygon points="40,170 52,174 50,162" fill="#0f172a"/>
  <circle cx="120" cy="150" r="5" fill="#ea580c"/><text x="120" y="172" text-anchor="middle" font-size="14" font-weight="700" fill="#9a3412" ${F}>A</text>
  <circle cx="240" cy="118" r="5" fill="#ea580c"/><text x="240" y="106" text-anchor="middle" font-size="14" font-weight="700" fill="#9a3412" ${F}>B</text>
  <circle cx="170" cy="80" r="5" fill="#0d9488"/><text x="170" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#0f766e" ${F}>C</text>
  <text x="220" y="220" text-anchor="middle" font-size="12" fill="#64748b" ${F}>line AB in plane P; C coplanar, not on the line</text>
`);

export const oppositeRays = () => wrap("0 0 440 120", "Opposite rays on a line", `
  <line x1="30" y1="55" x2="410" y2="55" stroke="#0f172a" stroke-width="2.5"/>
  <polygon points="410,55 398,49 398,61" fill="#0f172a"/>
  <polygon points="30,55 42,49 42,61" fill="#0f172a"/>
  <circle cx="100" cy="55" r="5" fill="#ea580c"/><text x="100" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#9a3412" ${F}>X</text>
  <circle cx="220" cy="55" r="5" fill="#ea580c"/><text x="220" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#9a3412" ${F}>Y</text>
  <circle cx="340" cy="55" r="5" fill="#ea580c"/><text x="340" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#9a3412" ${F}>Z</text>
  <text x="160" y="38" text-anchor="middle" font-size="13" fill="#2563eb" ${F}>ray YX</text>
  <text x="280" y="38" text-anchor="middle" font-size="13" fill="#2563eb" ${F}>ray YZ</text>
`, "400px");

export const intersectingPlanes = () => wrap("0 0 400 250", "Two planes intersecting in a line", `
  <polygon points="60,40 280,20 320,140 100,180" fill="#eef2ff" stroke="#6366f1" stroke-width="2" opacity="0.9"/>
  <polygon points="80,100 300,60 340,200 120,220" fill="#fff7ed" stroke="#ea580c" stroke-width="2" opacity="0.85"/>
  <line x1="100" y1="150" x2="300" y2="90" stroke="#0f172a" stroke-width="3"/>
  <polygon points="300,90 288,86 290,98" fill="#0f172a"/>
  <polygon points="100,150 112,154 110,142" fill="#0f172a"/>
  <text x="70" y="70" font-size="12" fill="#4338ca" ${F}>P</text>
  <text x="310" y="180" font-size="12" fill="#9a3412" ${F}>Q</text>
  <text x="200" y="245" text-anchor="middle" font-size="12" fill="#64748b" ${F}>intersection is a line</text>
`, "360px");

// ── 1.2 Segments ─────────────────────────────────────────────
export const segmentAddition = () => wrap("0 0 440 120", "Segment addition", `
  <line x1="40" y1="55" x2="400" y2="55" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="80" cy="55" r="5" fill="#ea580c"/><text x="80" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#9a3412" ${F}>A</text>
  <circle cx="200" cy="55" r="5" fill="#0d9488"/><text x="200" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#0f766e" ${F}>B</text>
  <circle cx="360" cy="55" r="5" fill="#ea580c"/><text x="360" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#9a3412" ${F}>C</text>
  <line x1="80" y1="38" x2="200" y2="38" stroke="#2563eb" stroke-width="2"/>
  <text x="140" y="30" text-anchor="middle" font-size="12" fill="#2563eb" ${F}>AB</text>
  <line x1="200" y1="38" x2="360" y2="38" stroke="#7c3aed" stroke-width="2"/>
  <text x="280" y="30" text-anchor="middle" font-size="12" fill="#7c3aed" ${F}>BC</text>
  <text x="220" y="110" text-anchor="middle" font-size="12" fill="#475569" ${F}>AC = AB + BC</text>
`, "400px");

export const midpointFig = () => wrap("0 0 400 110", "Midpoint of a segment", `
  <line x1="50" y1="50" x2="350" y2="50" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="50" cy="50" r="5" fill="#ea580c"/><text x="50" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="#9a3412" ${F}>A</text>
  <circle cx="200" cy="50" r="5" fill="#2563eb"/><text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="#1d4ed8" ${F}>M</text>
  <circle cx="350" cy="50" r="5" fill="#ea580c"/><text x="350" y="80" text-anchor="middle" font-size="14" font-weight="700" fill="#9a3412" ${F}>B</text>
  <text x="125" y="38" text-anchor="middle" font-size="12" fill="#64748b" ${F}>AM</text>
  <text x="275" y="38" text-anchor="middle" font-size="12" fill="#64748b" ${F}>MB</text>
  <text x="200" y="105" text-anchor="middle" font-size="12" fill="#475569" ${F}>M midpoint ⇒ AM = MB</text>
`, "380px");

export const copySegment = () => wrap("0 0 420 170", "Copying a segment with compass arcs", `
  <line x1="40" y1="50" x2="180" y2="50" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="40" cy="50" r="4" fill="#ea580c"/><text x="40" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>A</text>
  <circle cx="180" cy="50" r="4" fill="#ea580c"/><text x="180" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>B</text>
  <text x="110" y="30" text-anchor="middle" font-size="12" fill="#64748b" ${F}>given AB</text>
  <line x1="40" y1="120" x2="280" y2="120" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="40" cy="120" r="4" fill="#0d9488"/><text x="40" y="148" text-anchor="middle" font-size="13" font-weight="700" fill="#0f766e" ${F}>A′</text>
  <path d="M 160 90 A 140 140 0 0 1 160 150" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="180" cy="120" r="4" fill="#0d9488"/><text x="180" y="148" text-anchor="middle" font-size="13" font-weight="700" fill="#0f766e" ${F}>B′</text>
  <text x="290" y="125" font-size="12" fill="#2563eb" ${F}>compass arc</text>
`, "400px");

// ── 1.3 Angles ───────────────────────────────────────────────
export const angleMeasure = () => wrap("0 0 320 230", "An angle formed by two rays", `
  <line x1="40" y1="180" x2="280" y2="180" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="180" x2="220" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  <path d="M 100 180 A 60 60 0 0 0 88 128" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="118" y="155" font-size="14" fill="#2563eb" font-weight="700" ${F}>θ</text>
  <circle cx="40" cy="180" r="5" fill="#ea580c"/><text x="28" y="205" font-size="14" font-weight="700" fill="#9a3412" ${F}>A</text>
  <text x="290" y="185" font-size="14" font-weight="700" fill="#9a3412" ${F}>C</text>
  <text x="230" y="40" font-size="14" font-weight="700" fill="#9a3412" ${F}>B</text>
  <text x="160" y="225" text-anchor="middle" font-size="12" fill="#64748b" ${F}>∠BAC  (or ∠A)</text>
`, "300px");

export const angleAddition = () => wrap("0 0 340 240", "Angle addition postulate", `
  <line x1="40" y1="200" x2="300" y2="200" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="200" x2="200" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="200" x2="280" y2="100" stroke="#0d9488" stroke-width="2"/>
  <path d="M 100 200 A 60 60 0 0 0 92 148" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="M 92 148 A 60 60 0 0 0 98 120" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="40" cy="200" r="5" fill="#ea580c"/>
  <text x="28" y="225" font-size="13" font-weight="700" fill="#9a3412" ${F}>A</text>
  <text x="310" y="205" font-size="13" font-weight="700" fill="#9a3412" ${F}>C</text>
  <text x="210" y="35" font-size="13" font-weight="700" fill="#9a3412" ${F}>B</text>
  <text x="290" y="95" font-size="13" font-weight="700" fill="#0f766e" ${F}>D</text>
  <text x="170" y="235" text-anchor="middle" font-size="12" fill="#64748b" ${F}>m∠BAD + m∠DAC = m∠BAC</text>
`, "320px");

export const angleBisector = () => wrap("0 0 320 230", "Angle bisector", `
  <line x1="40" y1="180" x2="280" y2="180" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="180" x2="220" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="180" x2="260" y2="100" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
  <path d="M 100 180 A 60 60 0 0 0 95 140" fill="none" stroke="#ea580c" stroke-width="2"/>
  <path d="M 95 140 A 60 60 0 0 0 105 115" fill="none" stroke="#ea580c" stroke-width="2"/>
  <circle cx="40" cy="180" r="5" fill="#0f172a"/>
  <text x="270" y="95" font-size="12" fill="#2563eb" ${F}>bisector</text>
  <text x="160" y="225" text-anchor="middle" font-size="12" fill="#64748b" ${F}>two congruent adjacent angles</text>
`, "300px");

// ── 1.4 Angle pairs ──────────────────────────────────────────
export const complementaryFig = () => wrap("0 0 280 210", "Complementary adjacent angles", `
  <line x1="40" y1="160" x2="240" y2="160" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="160" x2="40" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="160" x2="160" y2="60" stroke="#2563eb" stroke-width="2"/>
  <rect x="40" y="145" width="15" height="15" fill="none" stroke="#0f172a" stroke-width="1.5"/>
  <path d="M 70 160 A 30 30 0 0 0 62 135" fill="none" stroke="#ea580c" stroke-width="2"/>
  <path d="M 62 135 A 30 30 0 0 0 40 130" fill="none" stroke="#0d9488" stroke-width="2"/>
  <text x="95" y="145" font-size="14" fill="#ea580c" ${F}>α</text>
  <text x="55" y="115" font-size="14" fill="#0d9488" ${F}>β</text>
  <text x="140" y="195" text-anchor="middle" font-size="12" fill="#64748b" ${F}>α + β = 90°</text>
`, "260px");

export const supplementaryFig = () => wrap("0 0 360 150", "Supplementary angles on a straight line", `
  <line x1="30" y1="90" x2="330" y2="90" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="180" y1="90" x2="180" y2="30" stroke="#2563eb" stroke-width="2.5"/>
  <path d="M 140 90 A 40 40 0 0 1 180 50" fill="none" stroke="#ea580c" stroke-width="2"/>
  <path d="M 180 50 A 40 40 0 0 1 220 90" fill="none" stroke="#0d9488" stroke-width="2"/>
  <text x="145" y="70" font-size="14" fill="#ea580c" ${F}>α</text>
  <text x="205" y="70" font-size="14" fill="#0d9488" ${F}>β</text>
  <circle cx="180" cy="90" r="4" fill="#0f172a"/>
  <text x="180" y="135" text-anchor="middle" font-size="12" fill="#64748b" ${F}>α + β = 180°  (linear pair)</text>
`, "340px");

export const verticalAngles = () => wrap("0 0 280 250", "Vertical angles", `
  <line x1="40" y1="40" x2="240" y2="200" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="200" x2="240" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="140" cy="120" r="4" fill="#0f172a"/>
  <text x="158" y="100" font-size="14" fill="#ea580c" font-weight="700" ${F}>1</text>
  <text x="158" y="155" font-size="14" fill="#0d9488" font-weight="700" ${F}>3</text>
  <text x="108" y="100" font-size="14" fill="#2563eb" font-weight="700" ${F}>2</text>
  <text x="108" y="155" font-size="14" fill="#7c3aed" font-weight="700" ${F}>4</text>
  <text x="140" y="240" text-anchor="middle" font-size="12" fill="#64748b" ${F}>∠1 ≅ ∠3 ,  ∠2 ≅ ∠4</text>
`, "260px");

export const adjacentAngles = () => wrap("0 0 300 210", "Adjacent angles sharing a ray", `
  <line x1="40" y1="160" x2="260" y2="160" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="160" x2="200" y2="50" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="160" x2="140" y2="50" stroke="#2563eb" stroke-width="2"/>
  <circle cx="40" cy="160" r="4" fill="#ea580c"/>
  <text x="95" y="130" font-size="12" fill="#ea580c" ${F}>adj.</text>
  <text x="155" y="110" font-size="12" fill="#0d9488" ${F}>adj.</text>
  <text x="150" y="200" text-anchor="middle" font-size="12" fill="#64748b" ${F}>common ray; interiors do not overlap</text>
`, "280px");

// ── 1.5 Conditionals ─────────────────────────────────────────
export const conditionalMap = () => wrap("0 0 460 200", "Conditional and related statements", `
  <rect x="20" y="20" width="200" height="50" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="120" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#4338ca" ${F}>Conditional: If P, then Q</text>
  <rect x="240" y="20" width="200" height="50" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="340" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>Converse: If Q, then P</text>
  <rect x="20" y="110" width="200" height="50" rx="8" fill="#ecfdf5" stroke="#0d9488" stroke-width="1.5"/>
  <text x="120" y="140" text-anchor="middle" font-size="13" font-weight="700" fill="#0f766e" ${F}>Inverse: If ~P, then ~Q</text>
  <rect x="240" y="110" width="200" height="50" rx="8" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="340" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="#5b21b6" ${F}>Contrapositive: If ~Q, then ~P</text>
  <text x="230" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>Conditional ⇔ Contrapositive   |   Converse ⇔ Inverse</text>
`, "440px");

// ── 1.6 Proof formats ────────────────────────────────────────
export const twoColumnSample = () => wrap("0 0 420 200", "Two-column proof layout", `
  <rect x="20" y="20" width="180" height="160" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" rx="6"/>
  <rect x="220" y="20" width="180" height="160" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" rx="6"/>
  <rect x="20" y="20" width="180" height="32" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5" rx="6"/>
  <rect x="220" y="20" width="180" height="32" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5" rx="6"/>
  <text x="110" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#4338ca" ${F}>Statements</text>
  <text x="310" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>Reasons</text>
  <text x="40" y="75" font-size="12" fill="#475569" ${F}>1. Given…</text>
  <text x="240" y="75" font-size="12" fill="#475569" ${F}>1. Given</text>
  <text x="40" y="105" font-size="12" fill="#475569" ${F}>2. …</text>
  <text x="240" y="105" font-size="12" fill="#475569" ${F}>2. Definition / postulate</text>
  <text x="40" y="135" font-size="12" fill="#475569" ${F}>3. …</text>
  <text x="240" y="135" font-size="12" fill="#475569" ${F}>3. Theorem</text>
  <text x="40" y="165" font-size="12" fill="#475569" ${F}>4. Prove</text>
  <text x="240" y="165" font-size="12" fill="#475569" ${F}>4. …</text>
`, "400px");

export const flowchartProof = () => wrap("0 0 420 150", "Flowchart proof", `
  <rect x="20" y="50" width="90" height="40" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="65" y="75" text-anchor="middle" font-size="12" fill="#4338ca" ${F}>Given</text>
  <line x1="110" y1="70" x2="140" y2="70" stroke="#64748b" stroke-width="2"/><polygon points="140,70 132,66 132,74" fill="#64748b"/>
  <rect x="140" y="50" width="100" height="40" rx="8" fill="#ecfdf5" stroke="#0d9488" stroke-width="1.5"/>
  <text x="190" y="75" text-anchor="middle" font-size="12" fill="#0f766e" ${F}>Reason</text>
  <line x1="240" y1="70" x2="270" y2="70" stroke="#64748b" stroke-width="2"/><polygon points="270,70 262,66 262,74" fill="#64748b"/>
  <rect x="270" y="50" width="120" height="40" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="330" y="75" text-anchor="middle" font-size="12" fill="#9a3412" ${F}>Conclusion</text>
  <text x="210" y="130" text-anchor="middle" font-size="12" fill="#64748b" ${F}>each arrow is justified by a reason</text>
`, "400px");

// ── 2.1–2.2 Transversal ──────────────────────────────────────
export const transversalAngles = (opts = {}) => {
  const highlight = opts.highlight || null;
  const parallel = opts.parallel;
  const marks = parallel
    ? `<path d="M 70 70 l 12 8 M 78 66 l 12 8" stroke="#ea580c" stroke-width="2"/>
       <path d="M 70 150 l 12 8 M 78 146 l 12 8" stroke="#ea580c" stroke-width="2"/>`
    : "";
  let cap = "eight angles formed by transversal t";
  if (highlight === "corr") cap = "corresponding: ∠2 and ∠6";
  if (highlight === "altint") cap = "alternate interior: ∠3 & ∠6 (or ∠4 & ∠5)";
  if (highlight === "ssi") cap = "same-side interior: ∠4 and ∠5";
  if (highlight === "altext") cap = "alternate exterior: ∠1 and ∠8";
  return wrap("0 0 360 250", "Transversal cutting two lines", `
  <line x1="40" y1="80" x2="300" y2="80" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="160" x2="300" y2="160" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="120" y1="30" x2="240" y2="210" stroke="#2563eb" stroke-width="2.5"/>
  ${marks}
  <text x="310" y="84" font-size="13" fill="#0f172a" ${F}>ℓ₁</text>
  <text x="310" y="164" font-size="13" fill="#0f172a" ${F}>ℓ₂</text>
  <text x="250" y="40" font-size="13" fill="#2563eb" ${F}>t</text>
  <text x="105" y="70" font-size="13" font-weight="700" fill="#ea580c" ${F}>1</text>
  <text x="155" y="70" font-size="13" font-weight="700" fill="#ea580c" ${F}>2</text>
  <text x="115" y="105" font-size="13" font-weight="700" fill="#0d9488" ${F}>3</text>
  <text x="165" y="105" font-size="13" font-weight="700" fill="#0d9488" ${F}>4</text>
  <text x="145" y="150" font-size="13" font-weight="700" fill="#7c3aed" ${F}>5</text>
  <text x="195" y="150" font-size="13" font-weight="700" fill="#7c3aed" ${F}>6</text>
  <text x="155" y="185" font-size="13" font-weight="700" fill="#2563eb" ${F}>7</text>
  <text x="205" y="185" font-size="13" font-weight="700" fill="#2563eb" ${F}>8</text>
  <text x="180" y="240" text-anchor="middle" font-size="12" fill="#64748b" ${F}>${cap}</text>
`, "340px");
};

export const skewBox = () => wrap("0 0 340 250", "Skew edges on a rectangular box", `
  <polyline points="80,80 220,60 280,100 140,130 80,80" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <polyline points="80,80 80,170 140,210 140,130" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <polyline points="220,60 220,150 280,190 280,100" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <polyline points="80,170 220,150 280,190 140,210" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="80" y1="80" x2="220" y2="60" stroke="#ea580c" stroke-width="3"/>
  <line x1="140" y1="210" x2="280" y2="190" stroke="#2563eb" stroke-width="3"/>
  <text x="130" y="55" font-size="12" fill="#ea580c" ${F}>top-front</text>
  <text x="190" y="230" font-size="12" fill="#2563eb" ${F}>bottom-back</text>
  <text x="170" y="248" text-anchor="middle" font-size="12" fill="#64748b" ${F}>skew: not coplanar, never meet</text>
`, "320px");

// ── 2.3 Perpendicular ────────────────────────────────────────
export const perpendicularLines = () => wrap("0 0 280 250", "Perpendicular lines", `
  <line x1="40" y1="120" x2="240" y2="120" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="140" y1="30" x2="140" y2="210" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="140" y="105" width="15" height="15" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="165" y="100" font-size="14" fill="#ea580c" ${F}>90°</text>
  <text x="140" y="240" text-anchor="middle" font-size="12" fill="#64748b" ${F}>ℓ₁ ⊥ ℓ₂</text>
`, "260px");

export const perpParallel = () => wrap("0 0 320 230", "Two lines perpendicular to the same line are parallel", `
  <line x1="40" y1="180" x2="280" y2="180" stroke="#64748b" stroke-width="2.5"/>
  <line x1="100" y1="40" x2="100" y2="180" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="220" y1="40" x2="220" y2="180" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="100" y="165" width="14" height="14" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <rect x="220" y="165" width="14" height="14" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <path d="M 110 80 l 8 6 M 116 76 l 8 6" stroke="#2563eb" stroke-width="2"/>
  <path d="M 230 80 l 8 6 M 236 76 l 8 6" stroke="#2563eb" stroke-width="2"/>
  <text x="160" y="215" text-anchor="middle" font-size="12" fill="#64748b" ${F}>both ⊥ to the same line ⇒ parallel</text>
`, "300px");

// ── 2.5 Constructions ────────────────────────────────────────
export const constructPerp = () => wrap("0 0 360 210", "Constructing a perpendicular through a point", `
  <line x1="40" y1="140" x2="320" y2="140" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="180" cy="60" r="5" fill="#ea580c"/><text x="195" y="55" font-size="13" font-weight="700" fill="#9a3412" ${F}>P</text>
  <path d="M 100 140 A 90 90 0 0 1 260 140" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="120" cy="140" r="4" fill="#0d9488"/><text x="120" y="165" text-anchor="middle" font-size="12" fill="#0f766e" ${F}>A</text>
  <circle cx="240" cy="140" r="4" fill="#0d9488"/><text x="240" y="165" text-anchor="middle" font-size="12" fill="#0f766e" ${F}>B</text>
  <path d="M 140 100 A 50 50 0 0 0 220 100" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="180" y1="40" x2="180" y2="160" stroke="#ea580c" stroke-width="2"/>
  <rect x="180" y="126" width="12" height="12" fill="none" stroke="#ea580c" stroke-width="1.5"/>
  <text x="180" y="195" text-anchor="middle" font-size="12" fill="#64748b" ${F}>arcs from A and B; line through P is ⊥</text>
`, "340px");

export const constructParallel = () => wrap("0 0 380 210", "Constructing a parallel through a point", `
  <line x1="40" y1="150" x2="340" y2="150" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="200" cy="60" r="5" fill="#ea580c"/><text x="215" y="55" font-size="13" font-weight="700" fill="#9a3412" ${F}>P</text>
  <line x1="80" y1="150" x2="200" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 100 130 A 40 40 0 0 1 130 150" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <path d="M 175 85 A 40 40 0 0 1 205 105" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="60" y1="60" x2="340" y2="60" stroke="#0d9488" stroke-width="2.5"/>
  <path d="M 70 55 l 10 7 M 76 51 l 10 7" stroke="#0d9488" stroke-width="2"/>
  <path d="M 70 145 l 10 7 M 76 141 l 10 7" stroke="#0f172a" stroke-width="2"/>
  <text x="190" y="195" text-anchor="middle" font-size="12" fill="#64748b" ${F}>copy a corresponding angle at P ⇒ parallel</text>
`, "360px");
