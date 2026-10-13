// Extra SVG figures for remaining Geometry (FL B.E.S.T.) examples.

const wrap = (vb, label, body, w = "400px") =>
  `<svg viewBox="${vb}" style="max-width:${w};width:100%;height:auto;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${body}</svg>`;
const F = "font-family:Inter,system-ui,sans-serif";

// ── Foundations extras ───────────────────────────────────────
export const threePointsPlane = () => wrap("0 0 320 200", "Three noncollinear points", `
  <polygon points="60,160 160,40 280,150" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5" opacity="0.5"/>
  <circle cx="60" cy="160" r="5" fill="#ea580c"/><text x="50" y="180" font-size="13" font-weight="700" fill="#9a3412" ${F}>A</text>
  <circle cx="160" cy="40" r="5" fill="#ea580c"/><text x="168" y="38" font-size="13" font-weight="700" fill="#9a3412" ${F}>B</text>
  <circle cx="280" cy="150" r="5" fill="#ea580c"/><text x="288" y="155" font-size="13" font-weight="700" fill="#9a3412" ${F}>C</text>
  <text x="160" y="195" text-anchor="middle" font-size="12" fill="#64748b" ${F}>3 noncollinear points → unique plane</text>
`, "300px");

export const collinearPts = () => wrap("0 0 360 100", "Collinear points", `
  <line x1="40" y1="45" x2="320" y2="45" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="80" cy="45" r="5" fill="#ea580c"/><text x="80" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>D</text>
  <circle cx="160" cy="45" r="5" fill="#ea580c"/><text x="160" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>E</text>
  <circle cx="240" cy="45" r="5" fill="#ea580c"/><text x="240" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412" ${F}>F</text>
  <circle cx="300" cy="20" r="5" fill="#0d9488"/><text x="300" y="12" text-anchor="middle" font-size="13" font-weight="700" fill="#0f766e" ${F}>G</text>
  <text x="180" y="95" text-anchor="middle" font-size="12" fill="#64748b" ${F}>D,E,F collinear; G coplanar, not collinear</text>
`, "340px");

export const numberLineDist = () => wrap("0 0 400 90", "Distance on a number line", `
  <line x1="30" y1="40" x2="370" y2="40" stroke="#0f172a" stroke-width="2"/>
  <circle cx="80" cy="40" r="5" fill="#ea580c"/><text x="80" y="70" text-anchor="middle" font-size="12" fill="#9a3412" ${F}>-2</text>
  <circle cx="280" cy="40" r="5" fill="#ea580c"/><text x="280" y="70" text-anchor="middle" font-size="12" fill="#9a3412" ${F}>5</text>
  <text x="180" y="28" text-anchor="middle" font-size="12" fill="#2563eb" ${F}>|5−(−2)|=7</text>
`, "380px");

export const midpointAlgebra = () => wrap("0 0 360 100", "Midpoint with algebra", `
  <line x1="40" y1="45" x2="320" y2="45" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="60" cy="45" r="5" fill="#ea580c"/><text x="60" y="72" text-anchor="middle" font-size="12" fill="#9a3412" ${F}>A</text>
  <circle cx="180" cy="45" r="5" fill="#2563eb"/><text x="180" y="72" text-anchor="middle" font-size="12" fill="#1d4ed8" ${F}>M</text>
  <circle cx="300" cy="45" r="5" fill="#ea580c"/><text x="300" y="72" text-anchor="middle" font-size="12" fill="#9a3412" ${F}>B</text>
  <text x="120" y="30" text-anchor="middle" font-size="11" fill="#64748b" ${F}>2x</text>
  <text x="240" y="30" text-anchor="middle" font-size="11" fill="#64748b" ${F}>x+4</text>
  <text x="180" y="95" text-anchor="middle" font-size="12" fill="#64748b" ${F}>AM = MB ⇒ solve for x</text>
`, "340px");

export const classifyAngles = () => wrap("0 0 400 160", "Angle classifications", `
  <line x1="30" y1="100" x2="110" y2="100" stroke="#0f172a" stroke-width="2"/>
  <line x1="30" y1="100" x2="90" y2="50" stroke="#0f172a" stroke-width="2"/>
  <text x="70" y="140" text-anchor="middle" font-size="11" fill="#64748b" ${F}>acute</text>
  <line x1="140" y1="100" x2="220" y2="100" stroke="#0f172a" stroke-width="2"/>
  <line x1="140" y1="100" x2="140" y2="40" stroke="#0f172a" stroke-width="2"/>
  <rect x="140" y="85" width="12" height="12" fill="none" stroke="#ea580c"/>
  <text x="180" y="140" text-anchor="middle" font-size="11" fill="#64748b" ${F}>right</text>
  <line x1="250" y1="100" x2="340" y2="100" stroke="#0f172a" stroke-width="2"/>
  <line x1="250" y1="100" x2="320" y2="140" stroke="#0f172a" stroke-width="2"/>
  <text x="300" y="80" text-anchor="middle" font-size="11" fill="#64748b" ${F}>obtuse</text>
`, "380px");

export const copyAngleObtuse = () => wrap("0 0 340 180", "Copying an obtuse angle", `
  <line x1="40" y1="120" x2="160" y2="120" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="120" x2="100" y2="40" stroke="#0f172a" stroke-width="2"/>
  <path d="M 70 120 A 40 40 0 0 0 75 90" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="90" y="155" text-anchor="middle" font-size="11" fill="#64748b" ${F}>obtuse given</text>
  <line x1="200" y1="120" x2="320" y2="120" stroke="#94a3b8" stroke-width="2"/>
  <line x1="200" y1="120" x2="260" y2="40" stroke="#0d9488" stroke-width="2"/>
  <text x="260" y="155" text-anchor="middle" font-size="11" fill="#64748b" ${F}>copy</text>
`, "320px");

export const angleCombine = () => wrap("0 0 300 200", "Combined angle relationships", `
  <line x1="40" y1="160" x2="260" y2="160" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="160" x2="40" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="160" x2="160" y2="60" stroke="#2563eb" stroke-width="2"/>
  <rect x="40" y="145" width="14" height="14" fill="none" stroke="#ea580c"/>
  <text x="100" y="140" font-size="12" fill="#2563eb" ${F}>α</text>
  <text x="55" y="100" font-size="12" fill="#0d9488" ${F}>β</text>
  <text x="150" y="190" text-anchor="middle" font-size="12" fill="#64748b" ${F}>α + β = 90° (complementary)</text>
`, "280px");

export const biconditionalFig = () => wrap("0 0 360 120", "Biconditional", `
  <rect x="30" y="35" width="120" height="50" rx="8" fill="#eef2ff" stroke="#6366f1"/>
  <text x="90" y="65" text-anchor="middle" font-size="13" fill="#4338ca" ${F}>P ⇒ Q</text>
  <text x="180" y="65" text-anchor="middle" font-size="18" fill="#0f172a" ${F}>∧</text>
  <rect x="210" y="35" width="120" height="50" rx="8" fill="#fff7ed" stroke="#ea580c"/>
  <text x="270" y="65" text-anchor="middle" font-size="13" fill="#9a3412" ${F}>Q ⇒ P</text>
  <text x="180" y="110" text-anchor="middle" font-size="12" fill="#64748b" ${F}>both true ⇒ P ⇔ Q</text>
`, "340px");

export const paragraphProofFig = () => wrap("0 0 360 140", "Paragraph proof", `
  <rect x="30" y="25" width="300" height="90" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="50" y="55" font-size="12" fill="#475569" ${F}>Given … . By definition, … .</text>
  <text x="50" y="80" font-size="12" fill="#475569" ${F}>Therefore, by the theorem, … .</text>
  <text x="50" y="105" font-size="12" fill="#475569" ${F}>Hence, what we needed to prove.</text>
`, "340px");

// ── Parallel / perp extras ───────────────────────────────────
export const parallelConverse = () => wrap("0 0 320 220", "Converse: prove lines parallel", `
  <line x1="40" y1="70" x2="280" y2="70" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="150" x2="280" y2="150" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="100" y1="30" x2="200" y2="190" stroke="#2563eb" stroke-width="2"/>
  <text x="155" y="60" font-size="12" fill="#ea580c" ${F}>≅</text>
  <text x="175" y="140" font-size="12" fill="#ea580c" ${F}>≅</text>
  <text x="160" y="210" text-anchor="middle" font-size="12" fill="#64748b" ${F}>congruent corresponding ∠ ⇒ parallel</text>
`, "300px");

export const perpTransversal = () => wrap("0 0 300 200", "Perpendicular transversal", `
  <line x1="40" y1="60" x2="260" y2="60" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="140" x2="260" y2="140" stroke="#0f172a" stroke-width="2"/>
  <path d="M 50 55 l 8 6 M 55 52 l 8 6" stroke="#ea580c" stroke-width="2"/>
  <path d="M 50 135 l 8 6 M 55 132 l 8 6" stroke="#ea580c" stroke-width="2"/>
  <line x1="150" y1="30" x2="150" y2="170" stroke="#2563eb" stroke-width="2.5"/>
  <rect x="150" y="45" width="12" height="12" fill="none" stroke="#ea580c"/>
  <rect x="150" y="125" width="12" height="12" fill="none" stroke="#ea580c"/>
  <text x="150" y="190" text-anchor="middle" font-size="12" fill="#64748b" ${F}>⊥ transversal to parallels</text>
`, "280px");

export const horizVert = () => wrap("0 0 260 220", "Horizontal and vertical lines", `
  <line x1="40" y1="110" x2="220" y2="110" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="130" y1="30" x2="130" y2="190" stroke="#2563eb" stroke-width="2.5"/>
  <rect x="130" y="95" width="14" height="14" fill="none" stroke="#ea580c"/>
  <text x="180" y="100" font-size="12" fill="#0f172a" ${F}>y = k</text>
  <text x="140" y="50" font-size="12" fill="#2563eb" ${F}>x = h</text>
  <text x="130" y="210" text-anchor="middle" font-size="12" fill="#64748b" ${F}>horizontal ⊥ vertical</text>
`, "240px");

export const constructPerpOnLine = () => wrap("0 0 320 180", "Perpendicular through a point on the line", `
  <line x1="40" y1="120" x2="280" y2="120" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="160" cy="120" r="5" fill="#ea580c"/><text x="160" y="145" text-anchor="middle" font-size="12" fill="#ea580c" ${F}>P</text>
  <path d="M 100 120 A 60 60 0 0 1 220 120" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="160" y1="40" x2="160" y2="160" stroke="#0d9488" stroke-width="2"/>
  <rect x="160" y="108" width="12" height="12" fill="none" stroke="#ea580c"/>
`, "300px");

export const constructRectangle = () => wrap("0 0 280 180", "Rectangle from perpendiculars", `
  <rect x="60" y="40" width="160" height="100" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="60" y="125" width="12" height="12" fill="none" stroke="#ea580c"/>
  <rect x="208" y="125" width="12" height="12" fill="none" stroke="#ea580c"/>
  <rect x="60" y="40" width="12" height="12" fill="none" stroke="#ea580c"/>
  <text x="140" y="170" text-anchor="middle" font-size="12" fill="#64748b" ${F}>4 right angles via ⊥ constructions</text>
`, "260px");

// ── Transformations extras ───────────────────────────────────
export const translatePolygon = () => wrap("0 0 340 220", "Translating a polygon", `
  <polygon points="50,140 90,80 130,140" fill="none" stroke="#0f172a" stroke-width="2"/>
  <polygon points="180,100 220,40 260,100" fill="none" stroke="#ea580c" stroke-width="2"/>
  <defs><marker id="tarr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb"/></marker></defs>
  <line x1="100" y1="110" x2="190" y2="70" stroke="#2563eb" stroke-width="1.5" marker-end="url(#tarr)" stroke-dasharray="4 2"/>
  <text x="170" y="200" text-anchor="middle" font-size="12" fill="#64748b" ${F}>each vertex slides by the same vector</text>
`, "320px");

export const reflectYX = () => wrap("0 0 260 260", "Reflection across y = x", `
  <line x1="40" y1="220" x2="220" y2="40" stroke="#2563eb" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="200" y="50" font-size="12" fill="#2563eb" ${F}>y = x</text>
  <circle cx="180" cy="160" r="5" fill="#0f172a"/><text x="190" y="158" font-size="12" fill="#0f172a" ${F}>A</text>
  <circle cx="160" cy="180" r="5" fill="#ea580c"/><text x="145" y="195" font-size="12" fill="#ea580c" ${F}>A′</text>
  <text x="130" y="250" text-anchor="middle" font-size="12" fill="#64748b" ${F}>(x, y) → (y, x)</text>
`, "240px");

export const reflectVertical = () => wrap("0 0 280 220", "Reflection across x = 2", `
  <line x1="160" y1="30" x2="160" y2="180" stroke="#2563eb" stroke-width="2.5"/>
  <text x="168" y="45" font-size="12" fill="#2563eb" ${F}>x = 2</text>
  <circle cx="100" cy="100" r="5" fill="#0f172a"/><text x="85" y="98" font-size="12" fill="#0f172a" ${F}>A</text>
  <circle cx="220" cy="100" r="5" fill="#ea580c"/><text x="228" y="98" font-size="12" fill="#ea580c" ${F}>A′</text>
  <text x="140" y="205" text-anchor="middle" font-size="12" fill="#64748b" ${F}>equal distance from the line</text>
`, "260px");

export const rotate180 = () => wrap("0 0 260 240", "180° rotation", `
  <line x1="40" y1="120" x2="220" y2="120" stroke="#94a3b8"/>
  <line x1="130" y1="30" x2="130" y2="210" stroke="#94a3b8"/>
  <circle cx="130" cy="120" r="3" fill="#0f172a"/>
  <circle cx="180" cy="80" r="5" fill="#0f172a"/><text x="188" y="78" font-size="12" fill="#0f172a" ${F}>A</text>
  <circle cx="80" cy="160" r="5" fill="#ea580c"/><text x="65" y="175" font-size="12" fill="#ea580c" ${F}>A′</text>
  <text x="130" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>(x, y) → (−x, −y)</text>
`, "240px");

export const rotate270 = () => wrap("0 0 260 240", "270° CCW rotation", `
  <line x1="40" y1="120" x2="220" y2="120" stroke="#94a3b8"/>
  <line x1="130" y1="30" x2="130" y2="210" stroke="#94a3b8"/>
  <circle cx="130" cy="120" r="3" fill="#0f172a"/>
  <circle cx="180" cy="80" r="5" fill="#0f172a"/><text x="188" y="78" font-size="12" fill="#0f172a" ${F}>A</text>
  <circle cx="90" cy="70" r="5" fill="#ea580c"/><text x="70" y="68" font-size="12" fill="#ea580c" ${F}>A′</text>
  <text x="130" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>270° CCW = 90° CW</text>
`, "240px");

export const glideReflect = () => wrap("0 0 340 180", "Glide reflection", `
  <polygon points="40,100 70,60 100,100" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="130" x2="300" y2="130" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 2"/>
  <polygon points="140,160 170,120 200,160" fill="none" stroke="#0d9488" stroke-width="2"/>
  <polygon points="240,160 270,120 300,160" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="170" y="50" text-anchor="middle" font-size="12" fill="#64748b" ${F}>reflect then translate along the line</text>
`, "320px");

export const parallelReflect = () => wrap("0 0 300 180", "Two reflections over parallel lines", `
  <line x1="100" y1="30" x2="100" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="200" y1="30" x2="200" y2="150" stroke="#2563eb" stroke-width="2"/>
  <circle cx="60" cy="90" r="5" fill="#0f172a"/>
  <circle cx="140" cy="90" r="5" fill="#0d9488"/>
  <circle cx="240" cy="90" r="5" fill="#ea580c"/>
  <text x="150" y="170" text-anchor="middle" font-size="12" fill="#64748b" ${F}>≡ translation by 2× distance</text>
`, "280px");

export const intersectReflect = () => wrap("0 0 260 220", "Two reflections over intersecting lines", `
  <line x1="40" y1="110" x2="220" y2="110" stroke="#2563eb" stroke-width="2"/>
  <line x1="130" y1="30" x2="130" y2="190" stroke="#2563eb" stroke-width="2"/>
  <circle cx="180" cy="70" r="5" fill="#0f172a"/>
  <circle cx="180" cy="150" r="5" fill="#0d9488"/>
  <circle cx="80" cy="150" r="5" fill="#ea580c"/>
  <text x="130" y="210" text-anchor="middle" font-size="12" fill="#64748b" ${F}>≡ rotation by 2× angle</text>
`, "240px");

export const parallelogramSym = () => wrap("0 0 280 160", "Parallelogram rotational symmetry", `
  <polygon points="50,120 100,40 230,40 180,120" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="140" cy="80" r="4" fill="#ea580c"/>
  <text x="140" y="150" text-anchor="middle" font-size="12" fill="#64748b" ${F}>180° rotational symmetry only</text>
`, "260px");

export const squareSym = () => wrap("0 0 200 200", "Square symmetry", `
  <rect x="50" y="40" width="100" height="100" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <line x1="100" y1="30" x2="100" y2="150" stroke="#ea580c" stroke-dasharray="4 2"/>
  <line x1="40" y1="90" x2="160" y2="90" stroke="#ea580c" stroke-dasharray="4 2"/>
  <line x1="50" y1="40" x2="150" y2="140" stroke="#0d9488" stroke-dasharray="4 2"/>
  <line x1="150" y1="40" x2="50" y2="140" stroke="#0d9488" stroke-dasharray="4 2"/>
  <text x="100" y="175" text-anchor="middle" font-size="12" fill="#64748b" ${F}>4 lines + order 4</text>
`, "180px");

export const scaleneNoSym = () => wrap("0 0 240 180", "Scalene triangle — no symmetry", `
  <polygon points="40,150 80,40 200,140" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <text x="120" y="170" text-anchor="middle" font-size="12" fill="#64748b" ${F}>no line or rotational symmetry</text>
`, "220px");

// ── Triangle extras ──────────────────────────────────────────
export const exteriorAngle = () => wrap("0 0 300 200", "Exterior angle theorem", `
  <polygon points="60,150 150,40 200,150" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="200" y1="150" x2="280" y2="150" stroke="#0f172a" stroke-width="2.5"/>
  <path d="M 220 150 A 25 25 0 0 1 235 135" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="245" y="140" font-size="12" fill="#ea580c" ${F}>ext</text>
  <text x="100" y="90" font-size="12" fill="#2563eb" ${F}>α</text>
  <text x="160" y="90" font-size="12" fill="#0d9488" ${F}>β</text>
  <text x="150" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>ext = α + β</text>
`, "280px");

export const angleSumTri = () => wrap("0 0 280 180", "Triangle angle sum", `
  <polygon points="50,150 140,40 230,150" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <text x="80" y="140" font-size="13" fill="#ea580c" ${F}>A</text>
  <text x="140" y="70" font-size="13" fill="#2563eb" ${F}>B</text>
  <text x="190" y="140" font-size="13" fill="#0d9488" ${F}>C</text>
  <text x="140" y="170" text-anchor="middle" font-size="12" fill="#64748b" ${F}>A + B + C = 180°</text>
`, "260px");

export const equilateralFig = () => wrap("0 0 240 200", "Equilateral triangle", `
  <polygon points="120,40 40,170 200,170" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <text x="70" y="110" font-size="12" fill="#ea580c" ${F}>≡</text>
  <text x="155" y="110" font-size="12" fill="#ea580c" ${F}>≡</text>
  <text x="120" y="185" text-anchor="middle" font-size="12" fill="#ea580c" ${F}>≡</text>
  <text x="120" y="55" font-size="11" fill="#2563eb" ${F}>60°</text>
`, "220px");

export const altitudeIsos = () => wrap("0 0 260 200", "Altitude of isosceles", `
  <polygon points="130,40 40,170 220,170" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="130" y1="40" x2="130" y2="170" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 2"/>
  <rect x="130" y="155" width="12" height="12" fill="none" stroke="#ea580c"/>
  <text x="130" y="190" text-anchor="middle" font-size="12" fill="#64748b" ${F}>altitude to base bisects the angle</text>
`, "240px");

export const aasMarks = () => wrap("0 0 360 180", "AAS congruence", `
  <polygon points="40,150 90,50 140,150" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 55 150 A 22 22 0 0 1 68 130" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <path d="M 90 70 A 22 22 0 0 1 105 85" fill="none" stroke="#ea580c" stroke-width="2"/>
  <line x1="100" y1="150" x2="130" y2="150" stroke="#0d9488" stroke-width="2.5"/>
  <text x="90" y="170" text-anchor="middle" font-size="11" fill="#64748b" ${F}>non-included side</text>
  <polygon points="220,150 270,50 320,150" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 235 150 A 22 22 0 0 1 248 130" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <path d="M 270 70 A 22 22 0 0 1 285 85" fill="none" stroke="#ea580c" stroke-width="2"/>
  <line x1="280" y1="150" x2="310" y2="150" stroke="#0d9488" stroke-width="2.5"/>
  <text x="180" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a" ${F}>AAS</text>
`, "340px");

export const medianFig = () => wrap("0 0 260 200", "Median of a triangle", `
  <polygon points="130,40 40,170 220,170" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="130" cy="170" r="4" fill="#2563eb"/><text x="130" y="190" text-anchor="middle" font-size="11" fill="#2563eb" ${F}>M</text>
  <line x1="130" y1="40" x2="130" y2="170" stroke="#ea580c" stroke-width="2" stroke-dasharray="4 2"/>
  <text x="145" y="110" font-size="12" fill="#ea580c" ${F}>median</text>
`, "240px");

// ── Similarity / trig extras ─────────────────────────────────
export const dilatePoint = () => wrap("0 0 260 220", "Dilate a point", `
  <circle cx="80" cy="160" r="4" fill="#0f172a"/><text x="65" y="175" font-size="12" fill="#0f172a" ${F}>O</text>
  <circle cx="140" cy="120" r="5" fill="#0f172a"/><text x="148" y="118" font-size="12" fill="#0f172a" ${F}>A</text>
  <circle cx="200" cy="80" r="5" fill="#ea580c"/><text x="208" y="78" font-size="12" fill="#ea580c" ${F}>A′</text>
  <line x1="80" y1="160" x2="200" y2="80" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="130" y="205" text-anchor="middle" font-size="12" fill="#64748b" ${F}>OA′ = |k|·OA</text>
`, "240px");

export const sssSimilar = () => wrap("0 0 340 160", "SSS similarity", `
  <polygon points="40,130 70,50 100,130" fill="none" stroke="#0f172a" stroke-width="2"/>
  <polygon points="160,130 230,40 300,130" fill="none" stroke="#0f172a" stroke-width="2"/>
  <text x="170" y="30" text-anchor="middle" font-size="12" fill="#64748b" ${F}>sides proportional ⇒ ~</text>
`, "320px");

export const sasSimilar = () => wrap("0 0 340 160", "SAS similarity", `
  <polygon points="40,130 70,50 100,130" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 55 130 A 20 20 0 0 1 65 115" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="160,130 230,40 300,130" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 185 130 A 28 28 0 0 1 200 108" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <text x="170" y="30" text-anchor="middle" font-size="12" fill="#64748b" ${F}>two sides proportional, included ∠ ≅</text>
`, "320px");

export const midsegmentTri = () => wrap("0 0 280 180", "Triangle midsegment", `
  <polygon points="140,40 40,160 240,160" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="90" y1="100" x2="190" y2="100" stroke="#ea580c" stroke-width="2.5"/>
  <text x="140" y="92" text-anchor="middle" font-size="12" fill="#ea580c" ${F}>midsegment</text>
  <text x="140" y="175" text-anchor="middle" font-size="12" fill="#64748b" ${F}>∥ base and half as long</text>
`, "260px");

export const threeParallel = () => wrap("0 0 280 200", "Three parallel lines", `
  <line x1="40" y1="50" x2="240" y2="50" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="100" x2="240" y2="100" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="150" x2="240" y2="150" stroke="#0f172a" stroke-width="2"/>
  <line x1="80" y1="30" x2="120" y2="170" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="180" y1="30" x2="220" y2="170" stroke="#ea580c" stroke-width="1.5"/>
  <text x="140" y="190" text-anchor="middle" font-size="12" fill="#64748b" ${F}>proportional intercepts</text>
`, "260px");

export const mirrorMethod = () => wrap("0 0 300 180", "Mirror method", `
  <line x1="40" y1="140" x2="260" y2="140" stroke="#94a3b8" stroke-width="2"/>
  <rect x="130" y="130" width="40" height="8" fill="#64748b"/>
  <line x1="80" y1="140" x2="150" y2="50" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="220" y1="140" x2="150" y2="50" stroke="#2563eb" stroke-width="1.5"/>
  <circle cx="80" cy="140" r="4" fill="#0d9488"/><text x="70" y="160" font-size="11" fill="#0d9488" ${F}>eye</text>
  <line x1="220" y1="140" x2="220" y2="80" stroke="#0f172a" stroke-width="3"/>
  <text x="150" y="175" text-anchor="middle" font-size="12" fill="#64748b" ${F}>mirror on the ground</text>
`, "280px");

export const depressionFig = () => wrap("0 0 320 200", "Angle of depression", `
  <line x1="40" y1="60" x2="280" y2="60" stroke="#94a3b8" stroke-width="2"/>
  <line x1="80" y1="60" x2="80" y2="50" stroke="#0f172a" stroke-width="3"/>
  <circle cx="80" cy="55" r="4" fill="#0d9488"/>
  <line x1="80" y1="60" x2="240" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="80" y1="60" x2="240" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
  <path d="M 120 60 A 40 40 0 0 1 130 85" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="145" y="75" font-size="12" fill="#ea580c" ${F}>dep.</text>
  <text x="160" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>depression = elevation (alternate interior)</text>
`, "300px");

export const guyWire = () => wrap("0 0 280 200", "Guy wire / hypotenuse", `
  <line x1="40" y1="170" x2="240" y2="170" stroke="#94a3b8" stroke-width="2"/>
  <line x1="80" y1="170" x2="80" y2="50" stroke="#0f172a" stroke-width="3"/>
  <line x1="80" y1="50" x2="200" y2="170" stroke="#2563eb" stroke-width="2"/>
  <path d="M 100 170 A 30 30 0 0 0 115 150" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="130" y="100" font-size="12" fill="#2563eb" ${F}>wire</text>
`, "260px");

export const twoElevations = () => wrap("0 0 320 200", "Two angles of elevation", `
  <line x1="40" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="2"/>
  <line x1="220" y1="170" x2="220" y2="50" stroke="#0f172a" stroke-width="3"/>
  <line x1="60" y1="170" x2="220" y2="50" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="120" y1="170" x2="220" y2="50" stroke="#ea580c" stroke-width="1.5"/>
  <text x="160" y="190" text-anchor="middle" font-size="12" fill="#64748b" ${F}>two sightings → system for height</text>
`, "300px");

// ── Circles extras ───────────────────────────────────────────
export const diameterChord = () => wrap("0 0 240 240", "Diameter is longest chord", `
  <circle cx="120" cy="120" r="80" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="120" x2="200" y2="120" stroke="#ea580c" stroke-width="2.5"/>
  <line x1="70" y1="70" x2="170" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <text x="120" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>diameter ≥ any other chord</text>
`, "220px");

export const semicircleRight = () => wrap("0 0 260 200", "Angle in a semicircle", `
  <path d="M 40 150 A 90 90 0 0 1 220 150" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="150" x2="220" y2="150" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="150" x2="130" y2="50" stroke="#2563eb" stroke-width="2"/>
  <line x1="220" y1="150" x2="130" y2="50" stroke="#2563eb" stroke-width="2"/>
  <rect x="122" y="50" width="12" height="12" fill="none" stroke="#ea580c"/>
  <text x="130" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>angle in a semicircle is 90°</text>
`, "240px");

export const chordPerp = () => wrap("0 0 240 240", "Perpendicular to a chord", `
  <circle cx="120" cy="120" r="80" fill="none" stroke="#0f172a" stroke-width="2"/>
  <circle cx="120" cy="120" r="3" fill="#0f172a"/>
  <line x1="60" y1="160" x2="180" y2="160" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="120" y1="120" x2="120" y2="160" stroke="#ea580c" stroke-width="2"/>
  <rect x="120" y="148" width="10" height="10" fill="none" stroke="#ea580c"/>
  <text x="120" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>⊥ from center bisects the chord</text>
`, "220px");

export const chordChord = () => wrap("0 0 240 240", "Intersecting chords", `
  <circle cx="120" cy="120" r="80" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="50" y1="80" x2="190" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="60" y1="170" x2="180" y2="70" stroke="#ea580c" stroke-width="2"/>
  <circle cx="120" cy="120" r="3" fill="#0f172a"/>
  <text x="120" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>a·b = c·d</text>
`, "220px");

export const tangentSecant = () => wrap("0 0 280 240", "Tangent–secant", `
  <circle cx="160" cy="120" r="70" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="180" x2="160" y2="55" stroke="#0d9488" stroke-width="2"/>
  <line x1="40" y1="180" x2="220" y2="140" stroke="#2563eb" stroke-width="2"/>
  <circle cx="40" cy="180" r="4" fill="#ea580c"/><text x="30" y="200" font-size="12" fill="#ea580c" ${F}>P</text>
  <text x="140" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>PT² = PA·PB</text>
`, "260px");

export const twoSecants = () => wrap("0 0 280 240", "Two secants", `
  <circle cx="170" cy="110" r="70" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="40" y1="180" x2="220" y2="60" stroke="#2563eb" stroke-width="2"/>
  <line x1="40" y1="180" x2="230" y2="150" stroke="#ea580c" stroke-width="2"/>
  <circle cx="40" cy="180" r="4" fill="#0f172a"/>
  <text x="140" y="230" text-anchor="middle" font-size="12" fill="#64748b" ${F}>angle = ½(far arc − near arc)</text>
`, "260px");

export const circleEq = () => wrap("0 0 260 240", "Circle equation", `
  <line x1="40" y1="180" x2="220" y2="180" stroke="#94a3b8"/>
  <line x1="60" y1="40" x2="60" y2="200" stroke="#94a3b8"/>
  <circle cx="140" cy="110" r="50" fill="none" stroke="#0f172a" stroke-width="2"/>
  <circle cx="140" cy="110" r="3" fill="#ea580c"/><text x="148" y="108" font-size="11" fill="#ea580c" ${F}>(h,k)</text>
  <line x1="140" y1="110" x2="180" y2="80" stroke="#2563eb" stroke-width="1.5"/>
  <text x="170" y="90" font-size="12" fill="#2563eb" ${F}>r</text>
  <text x="130" y="230" text-anchor="middle" font-size="11" fill="#64748b" ${F}>(x−h)²+(y−k)²=r²</text>
`, "240px");

// ── 3D extras ────────────────────────────────────────────────
export const pyramidFig = () => wrap("0 0 240 200", "Square pyramid", `
  <polygon points="120,30 50,160 190,160" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="50" y1="160" x2="120" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="190" y1="160" x2="120" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="120" y1="30" x2="120" y2="140" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="120" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>V = ⅓Bh</text>
`, "220px");

export const coneFig = () => wrap("0 0 220 200", "Cone", `
  <line x1="110" y1="30" x2="50" y2="150" stroke="#0f172a" stroke-width="2"/>
  <line x1="110" y1="30" x2="170" y2="150" stroke="#0f172a" stroke-width="2"/>
  <ellipse cx="110" cy="150" rx="60" ry="18" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="110" y1="30" x2="110" y2="150" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="130" y="90" font-size="12" fill="#ea580c" ${F}>ℓ</text>
  <text x="110" y="185" text-anchor="middle" font-size="12" fill="#64748b" ${F}>slant height ℓ</text>
`, "200px");

export const sphereFig = () => wrap("0 0 200 200", "Sphere", `
  <circle cx="100" cy="100" r="70" fill="none" stroke="#0f172a" stroke-width="2"/>
  <ellipse cx="100" cy="100" rx="70" ry="25" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="100" y1="100" x2="170" y2="100" stroke="#2563eb" stroke-width="1.5"/>
  <text x="130" y="95" font-size="12" fill="#2563eb" ${F}>r</text>
  <text x="100" y="190" text-anchor="middle" font-size="12" fill="#64748b" ${F}>SA=4πr²  V=⁴⁄₃πr³</text>
`, "180px");

export const densityFig = () => wrap("0 0 280 140", "Density", `
  <rect x="40" y="40" width="80" height="60" rx="6" fill="#eef2ff" stroke="#6366f1"/>
  <text x="80" y="75" text-anchor="middle" font-size="12" fill="#4338ca" ${F}>mass</text>
  <text x="140" y="75" text-anchor="middle" font-size="18" fill="#0f172a" ${F}>÷</text>
  <rect x="160" y="40" width="80" height="60" rx="6" fill="#fff7ed" stroke="#ea580c"/>
  <text x="200" y="75" text-anchor="middle" font-size="12" fill="#9a3412" ${F}>volume</text>
  <text x="140" y="125" text-anchor="middle" font-size="12" fill="#64748b" ${F}>= density</text>
`, "260px");

export const popDensity = () => wrap("0 0 280 120", "Population density", `
  <text x="140" y="50" text-anchor="middle" font-size="14" fill="#0f172a" ${F}>population ÷ area</text>
  <text x="140" y="85" text-anchor="middle" font-size="12" fill="#64748b" ${F}>people per square unit</text>
`, "260px");

export const coneSlice = () => wrap("0 0 220 180", "Cone cross-section", `
  <line x1="110" y1="30" x2="50" y2="150" stroke="#0f172a" stroke-width="2"/>
  <line x1="110" y1="30" x2="170" y2="150" stroke="#0f172a" stroke-width="2"/>
  <ellipse cx="110" cy="150" rx="60" ry="15" fill="none" stroke="#0f172a"/>
  <ellipse cx="110" cy="90" rx="35" ry="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <text x="110" y="170" text-anchor="middle" font-size="12" fill="#64748b" ${F}>∥ base → circle</text>
`, "200px");

export const sphereSlice = () => wrap("0 0 200 200", "Sphere off-center slice", `
  <circle cx="100" cy="100" r="70" fill="none" stroke="#0f172a" stroke-width="2"/>
  <ellipse cx="130" cy="100" rx="20" ry="55" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <text x="100" y="190" text-anchor="middle" font-size="12" fill="#64748b" ${F}>off-center → smaller circle</text>
`, "180px");

export const frustumFig = () => wrap("0 0 220 180", "Frustum", `
  <line x1="70" y1="50" x2="40" y2="150" stroke="#0f172a" stroke-width="2"/>
  <line x1="150" y1="50" x2="180" y2="150" stroke="#0f172a" stroke-width="2"/>
  <ellipse cx="110" cy="50" rx="40" ry="12" fill="none" stroke="#0f172a"/>
  <ellipse cx="110" cy="150" rx="70" ry="18" fill="none" stroke="#0f172a"/>
  <text x="110" y="175" text-anchor="middle" font-size="12" fill="#64748b" ${F}>truncated (truncated cone)</text>
`, "200px");

// ── Probability extras ───────────────────────────────────────
export const dieFig = () => wrap("0 0 200 120", "Fair die", `
  <rect x="50" y="30" width="100" height="60" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
  <text x="100" y="65" text-anchor="middle" font-size="14" fill="#4338ca" ${F}>1…6</text>
  <text x="100" y="110" text-anchor="middle" font-size="12" fill="#64748b" ${F}>P = n(E)/6</text>
`, "180px");

export const bagMarbles = () => wrap("0 0 240 140", "Bag of marbles", `
  <ellipse cx="120" cy="80" rx="80" ry="45" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
  <circle cx="90" cy="75" r="12" fill="#dc2626"/>
  <circle cx="120" cy="70" r="12" fill="#2563eb"/>
  <circle cx="150" cy="78" r="12" fill="#dc2626"/>
  <circle cx="105" cy="95" r="12" fill="#16a34a"/>
  <text x="120" y="30" text-anchor="middle" font-size="12" fill="#64748b" ${F}>draw at random</text>
`, "220px");

export const complementFig = () => wrap("0 0 280 120", "Complement rule", `
  <text x="140" y="50" text-anchor="middle" font-size="16" fill="#0f172a" ${F}>P(E′) = 1 − P(E)</text>
  <text x="140" y="85" text-anchor="middle" font-size="12" fill="#64748b" ${F}>everything not in E</text>
`, "260px");

export const cardsFig = () => wrap("0 0 240 120", "Deck of cards", `
  <rect x="70" y="25" width="50" height="70" rx="4" fill="#fff" stroke="#0f172a" stroke-width="2"/>
  <rect x="95" y="30" width="50" height="70" rx="4" fill="#fff" stroke="#dc2626" stroke-width="2"/>
  <rect x="120" y="35" width="50" height="70" rx="4" fill="#fff" stroke="#0f172a" stroke-width="2"/>
  <text x="120" y="115" text-anchor="middle" font-size="12" fill="#64748b" ${F}>52 cards</text>
`, "220px");

export const expectedValue = () => wrap("0 0 300 120", "Expected value", `
  <text x="150" y="45" text-anchor="middle" font-size="14" fill="#0f172a" ${F}>E(X) = Σ xᵢ · P(xᵢ)</text>
  <text x="150" y="80" text-anchor="middle" font-size="12" fill="#64748b" ${F}>long-run average payoff</text>
`, "280px");

export const withWithout = () => wrap("0 0 340 140", "With vs without replacement", `
  <rect x="30" y="30" width="130" height="70" rx="8" fill="#ecfdf5" stroke="#0d9488"/>
  <text x="95" y="60" text-anchor="middle" font-size="12" fill="#0f766e" ${F}>with replacement</text>
  <text x="95" y="80" text-anchor="middle" font-size="11" fill="#64748b" ${F}>independent</text>
  <rect x="180" y="30" width="130" height="70" rx="8" fill="#fff7ed" stroke="#ea580c"/>
  <text x="245" y="60" text-anchor="middle" font-size="12" fill="#9a3412" ${F}>without</text>
  <text x="245" y="80" text-anchor="middle" font-size="11" fill="#64748b" ${F}>dependent</text>
`, "320px");
