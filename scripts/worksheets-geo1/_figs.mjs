// Shared SVG figures for GEO1 worksheets (MTH1W 1.5 style).
// Use fig(svg, "caption") inside example solutions / problem prompts.
// Plain text labels in SVG; put KaTeX ($...$) in captions only.

export function fig(inner, cap = "") {
  const caption = cap
    ? `<div style="font-size:9pt;color:#5b6b7f;margin-top:3px">${cap}</div>`
    : "";
  return `<div style="margin:7px 0 2px;padding:7px 9px;background:#f8fbff;border:1px solid #dbe4f0;border-radius:6px">${inner}${caption}</div>`;
}

const F = `font-family:Georgia,"Times New Roman",serif`;
const wrap = (vb, label, body, w = 280) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${w}" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="${label}">${body}</svg>`;

/** Right triangle ABC, right at C. Optional side labels. */
export const rightTri = (a = "a", b = "b", c = "c") => wrap("0 0 220 160", "Right triangle", `
  <polygon points="40,130 180,130 40,40" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M40,110 L60,110 L60,130" fill="none" stroke="#1d4ed8" stroke-width="1.8"/>
  <text x="28" y="90" font-size="13" fill="#1e3a8a" ${F}>A</text>
  <text x="188" y="145" font-size="13" fill="#1e3a8a" ${F}>B</text>
  <text x="28" y="148" font-size="13" fill="#1e3a8a" ${F}>C</text>
  <text x="108" y="148" font-size="12" fill="#9a3412" ${F}>${a}</text>
  <text x="18" y="95" font-size="12" fill="#9a3412" ${F}>${b}</text>
  <text x="118" y="78" font-size="12" fill="#9a3412" ${F}>${c}</text>
`);

/** Isosceles / general triangle with vertex labels. */
export const triABC = (opts = {}) => {
  const { A = "A", B = "B", C = "C", marks = false } = opts;
  return wrap("0 0 240 170", "Triangle", `
  <polygon points="40,140 200,140 120,30" fill="#f0fdf4" stroke="#15803d" stroke-width="2.5"/>
  ${marks ? `<path d="M95,138 L105,128 M115,138 L125,128" stroke="#15803d" stroke-width="1.6"/>` : ""}
  <text x="28" y="158" font-size="13" fill="#14532d" ${F}>${A}</text>
  <text x="205" y="158" font-size="13" fill="#14532d" ${F}>${B}</text>
  <text x="112" y="22" font-size="13" fill="#14532d" ${F}>${C}</text>
`);
};

/** Two parallel lines cut by a transversal with angle marks. */
export const parallelTransversal = () => wrap("0 0 260 200", "Parallel lines and transversal", `
  <line x1="20" y1="60" x2="240" y2="60" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="20" y1="150" x2="240" y2="150" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="70" y1="20" x2="190" y2="190" stroke="#2563eb" stroke-width="2.2"/>
  <text x="248" y="64" font-size="12" fill="#334155" ${F}>ℓ</text>
  <text x="248" y="154" font-size="12" fill="#334155" ${F}>m</text>
  <text x="95" y="52" font-size="11" fill="#9a3412" ${F}>1</text>
  <text x="125" y="52" font-size="11" fill="#9a3412" ${F}>2</text>
  <text x="95" y="78" font-size="11" fill="#9a3412" ${F}>3</text>
  <text x="125" y="78" font-size="11" fill="#9a3412" ${F}>4</text>
  <text x="145" y="142" font-size="11" fill="#9a3412" ${F}>5</text>
  <text x="175" y="142" font-size="11" fill="#9a3412" ${F}>6</text>
  <text x="145" y="168" font-size="11" fill="#9a3412" ${F}>7</text>
  <text x="175" y="168" font-size="11" fill="#9a3412" ${F}>8</text>
`);

/** Coordinate plane with a few points (list of {x,y,label} in grid units). */
export const coordPts = (pts, opts = {}) => {
  const { xmin = -2, xmax = 6, ymin = -2, ymax = 6, size = 22 } = opts;
  const W = 240, H = 240, ox = 40, oy = 200;
  const X = (x) => ox + (x - xmin) * size;
  const Y = (y) => oy - (y - ymin) * size;
  let g = "";
  for (let x = xmin; x <= xmax; x++) g += `<line x1="${X(x)}" y1="${Y(ymin)}" x2="${X(x)}" y2="${Y(ymax)}" stroke="#e2e8f0" stroke-width="1"/>`;
  for (let y = ymin; y <= ymax; y++) g += `<line x1="${X(xmin)}" y1="${Y(y)}" x2="${X(xmax)}" y2="${Y(y)}" stroke="#e2e8f0" stroke-width="1"/>`;
  g += `<line x1="${X(xmin)}" y1="${Y(0)}" x2="${X(xmax)}" y2="${Y(0)}" stroke="#64748b" stroke-width="1.5"/>`;
  g += `<line x1="${X(0)}" y1="${Y(ymin)}" x2="${X(0)}" y2="${Y(ymax)}" stroke="#64748b" stroke-width="1.5"/>`;
  for (const p of pts) {
    g += `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="4" fill="${p.color || "#ea580c"}"/>`;
    g += `<text x="${X(p.x) + 6}" y="${Y(p.y) - 6}" font-size="12" fill="#9a3412" ${F}>${p.label}</text>`;
  }
  return wrap(`0 0 ${W} ${H}`, "Coordinate plane", g, 220);
};

/** Circle with center, radius, and optional chord/central angle. */
export const circleChord = () => wrap("0 0 220 220", "Circle with chord", `
  <circle cx="110" cy="110" r="80" fill="#fff7ed" stroke="#c2410c" stroke-width="2.5"/>
  <circle cx="110" cy="110" r="3.5" fill="#0f172a"/>
  <text x="118" y="108" font-size="12" fill="#0f172a" ${F}>O</text>
  <line x1="110" y1="110" x2="190" y2="110" stroke="#2563eb" stroke-width="1.8"/>
  <text x="145" y="102" font-size="11" fill="#1d4ed8" ${F}>r</text>
  <line x1="50" y1="60" x2="170" y2="60" stroke="#15803d" stroke-width="2.2"/>
  <circle cx="50" cy="60" r="3.5" fill="#15803d"/><text x="38" y="52" font-size="12" fill="#14532d" ${F}>A</text>
  <circle cx="170" cy="60" r="3.5" fill="#15803d"/><text x="178" y="52" font-size="12" fill="#14532d" ${F}>B</text>
`);

/** Segment with midpoint. */
export const segmentMid = () => wrap("0 0 280 80", "Segment with midpoint", `
  <line x1="30" y1="40" x2="250" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="30" cy="40" r="4.5" fill="#ea580c"/><text x="30" y="65" text-anchor="middle" font-size="13" fill="#9a3412" ${F}>A</text>
  <circle cx="140" cy="40" r="4.5" fill="#2563eb"/><text x="140" y="65" text-anchor="middle" font-size="13" fill="#1d4ed8" ${F}>M</text>
  <circle cx="250" cy="40" r="4.5" fill="#ea580c"/><text x="250" y="65" text-anchor="middle" font-size="13" fill="#9a3412" ${F}>B</text>
`);

/** Angle with rays. */
export const angleFig = (label = "θ") => wrap("0 0 200 140", "Angle", `
  <line x1="30" y1="110" x2="180" y2="110" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="30" y1="110" x2="140" y2="30" stroke="#0f172a" stroke-width="2.5"/>
  <path d="M70,110 A40,40 0 0 1 62,78" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="78" y="95" font-size="13" fill="#9a3412" ${F}>${label}</text>
  <circle cx="30" cy="110" r="4" fill="#ea580c"/>
`);

/** Elevation / depression right triangle scene. */
export const elevationFig = () => wrap("0 0 280 160", "Angle of elevation", `
  <line x1="20" y1="130" x2="260" y2="130" stroke="#64748b" stroke-width="2"/>
  <line x1="220" y1="130" x2="220" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="40" y1="130" x2="220" y2="40" stroke="#2563eb" stroke-width="2"/>
  <path d="M70,130 A30,30 0 0 1 62,112" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="78" y="118" font-size="12" fill="#9a3412" ${F}>θ</text>
  <text x="228" y="90" font-size="11" fill="#334155" ${F}>h</text>
  <text x="120" y="148" font-size="11" fill="#334155" ${F}>d</text>
  <circle cx="40" cy="130" r="3.5" fill="#ea580c"/>
`);

/** Parallelogram ABCD. */
export const parallelogram = () => wrap("0 0 260 140", "Parallelogram", `
  <polygon points="50,110 200,110 230,30 80,30" fill="#faf5ff" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="40" y="128" font-size="12" fill="#5b21b6" ${F}>A</text>
  <text x="205" y="128" font-size="12" fill="#5b21b6" ${F}>B</text>
  <text x="235" y="28" font-size="12" fill="#5b21b6" ${F}>C</text>
  <text x="68" y="28" font-size="12" fill="#5b21b6" ${F}>D</text>
`);

/** Cube / box sketch for 3D. */
export const box3d = () => wrap("0 0 200 160", "Rectangular prism", `
  <polygon points="40,50 120,30 180,50 100,70" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.8"/>
  <polygon points="40,50 100,70 100,140 40,120" fill="#c7d2fe" stroke="#4338ca" stroke-width="1.8"/>
  <polygon points="100,70 180,50 180,120 100,140" fill="#a5b4fc" stroke="#4338ca" stroke-width="1.8"/>
`);

/** Cylinder with radius and height labels. */
export const cylinder3d = (r = "r", h = "h") => wrap("0 0 220 200", "Cylinder", `
  <ellipse cx="110" cy="45" rx="70" ry="20" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
  <line x1="40" y1="45" x2="40" y2="155" stroke="#4338ca" stroke-width="2"/>
  <line x1="180" y1="45" x2="180" y2="155" stroke="#4338ca" stroke-width="2"/>
  <path d="M40,155 A70,20 0 0 0 180,155" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>
  <line x1="110" y1="45" x2="180" y2="45" stroke="#ea580c" stroke-width="1.8"/>
  <text x="138" y="38" font-size="12" fill="#9a3412" ${F}>${r}</text>
  <line x1="196" y1="45" x2="196" y2="155" stroke="#0f172a" stroke-width="1.5"/>
  <text x="200" y="104" font-size="12" fill="#334155" ${F}>${h}</text>
`);

/** Cone with radius and height labels. */
export const cone3d = (r = "r", h = "h") => wrap("0 0 220 200", "Cone", `
  <ellipse cx="110" cy="155" rx="70" ry="20" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <line x1="40" y1="155" x2="110" y2="30" stroke="#b45309" stroke-width="2"/>
  <line x1="180" y1="155" x2="110" y2="30" stroke="#b45309" stroke-width="2"/>
  <line x1="110" y1="155" x2="180" y2="155" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="3 2"/>
  <text x="140" y="172" font-size="12" fill="#9a3412" ${F}>${r}</text>
  <line x1="112" y1="30" x2="112" y2="155" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="118" y="95" font-size="12" fill="#334155" ${F}>${h}</text>
`);

/** Sphere with radius label. */
export const sphereFig = (r = "r") => wrap("0 0 200 200", "Sphere", `
  <circle cx="100" cy="100" r="80" fill="#fdf2f8" stroke="#be185d" stroke-width="2.2"/>
  <ellipse cx="100" cy="100" rx="80" ry="24" fill="none" stroke="#be185d" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="100" y1="100" x2="180" y2="100" stroke="#ea580c" stroke-width="1.8"/>
  <circle cx="100" cy="100" r="3" fill="#0f172a"/>
  <text x="132" y="93" font-size="12" fill="#9a3412" ${F}>${r}</text>
`);

/** Cylinder sliced by a plane through its central axis (rectangle cross-section). */
export const cylinderAxialSlice = () => wrap("0 0 220 200", "Cylinder sliced through its axis", `
  <ellipse cx="110" cy="45" rx="70" ry="20" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
  <line x1="40" y1="45" x2="40" y2="155" stroke="#4338ca" stroke-width="2"/>
  <line x1="180" y1="45" x2="180" y2="155" stroke="#4338ca" stroke-width="2"/>
  <path d="M40,155 A70,20 0 0 0 180,155" fill="none" stroke="#4338ca" stroke-width="2"/>
  <rect x="40" y="45" width="140" height="110" fill="#fecaca" fill-opacity="0.55" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5 3"/>
`);

/** Cone sliced by a plane through the apex and axis (isosceles-triangle cross-section). */
export const coneApexSlice = () => wrap("0 0 220 200", "Cone sliced through the apex", `
  <ellipse cx="110" cy="155" rx="70" ry="20" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <line x1="40" y1="155" x2="110" y2="30" stroke="#b45309" stroke-width="2"/>
  <line x1="180" y1="155" x2="110" y2="30" stroke="#b45309" stroke-width="2"/>
  <polygon points="40,155 180,155 110,30" fill="#fecaca" fill-opacity="0.55" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5 3"/>
`);

/** Sphere sliced through its center (great-circle cross-section). */
export const sphereGreatCircleSlice = () => wrap("0 0 200 200", "Sphere sliced through its center", `
  <circle cx="100" cy="100" r="80" fill="#fdf2f8" stroke="#be185d" stroke-width="2.2"/>
  <ellipse cx="100" cy="100" rx="80" ry="26" fill="#fecaca" fill-opacity="0.6" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5 3"/>
`);

/** Rectangle spun about a side to form a cylinder (solid of revolution). */
export const revolveRectangle = () => wrap("0 0 300 170", "Rectangle revolved about a side forms a cylinder", `
  <rect x="40" y="30" width="40" height="110" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="40" y1="18" x2="40" y2="150" stroke="#0f172a" stroke-width="2.5" stroke-dasharray="5 3"/>
  <text x="12" y="16" font-size="10" fill="#334155" ${F}>axis</text>
  <path d="M95,85 L128,85 M120,79 L128,85 L120,91" fill="none" stroke="#334155" stroke-width="1.6"/>
  <ellipse cx="220" cy="42" rx="40" ry="12" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
  <line x1="180" y1="42" x2="180" y2="128" stroke="#4338ca" stroke-width="2"/>
  <line x1="260" y1="42" x2="260" y2="128" stroke="#4338ca" stroke-width="2"/>
  <path d="M180,128 A40,12 0 0 0 260,128" fill="none" stroke="#4338ca" stroke-width="2"/>
`, 300);

/** Right triangle spun about a leg to form a cone (solid of revolution). */
export const revolveTriangle = () => wrap("0 0 300 170", "Right triangle revolved about a leg forms a cone", `
  <polygon points="40,140 40,30 80,140" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <line x1="40" y1="18" x2="40" y2="150" stroke="#0f172a" stroke-width="2.5" stroke-dasharray="5 3"/>
  <text x="12" y="16" font-size="10" fill="#334155" ${F}>axis</text>
  <path d="M95,85 L128,85 M120,79 L128,85 L120,91" fill="none" stroke="#334155" stroke-width="1.6"/>
  <ellipse cx="220" cy="128" rx="40" ry="12" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <line x1="180" y1="128" x2="220" y2="30" stroke="#b45309" stroke-width="2"/>
  <line x1="260" y1="128" x2="220" y2="30" stroke="#b45309" stroke-width="2"/>
`, 300);

/** Semicircle spun about its diameter to form a sphere (solid of revolution). */
export const revolveSemicircle = () => wrap("0 0 300 170", "Semicircle revolved about its diameter forms a sphere", `
  <path d="M40,45 A40,40 0 0 1 40,125" fill="#fdf2f8" stroke="#be185d" stroke-width="2"/>
  <line x1="40" y1="18" x2="40" y2="150" stroke="#0f172a" stroke-width="2.5" stroke-dasharray="5 3"/>
  <text x="12" y="16" font-size="10" fill="#334155" ${F}>axis</text>
  <path d="M95,85 L128,85 M120,79 L128,85 L120,91" fill="none" stroke="#334155" stroke-width="1.6"/>
  <circle cx="220" cy="85" r="45" fill="#fdf2f8" stroke="#be185d" stroke-width="2.2"/>
`, 300);

/** Small solid dilated by scale factor k into a larger similar solid. */
export const solidDilationPair = () => wrap("0 0 300 170", "Dilation of a solid by scale factor k", `
  <polygon points="30,130 70,120 90,130 50,140" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
  <polygon points="30,130 50,140 50,100 30,92" fill="#c7d2fe" stroke="#4338ca" stroke-width="1.5"/>
  <polygon points="50,140 90,130 90,92 50,100" fill="#a5b4fc" stroke="#4338ca" stroke-width="1.5"/>
  <path d="M110,110 L148,110 M140,104 L148,110 L140,116" fill="none" stroke="#334155" stroke-width="1.6"/>
  <text x="112" y="98" font-size="11" fill="#334155" ${F}>×k</text>
  <polygon points="170,140 250,120 290,140 210,160" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
  <polygon points="170,140 210,160 210,60 170,44" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>
  <polygon points="210,160 290,140 290,44 210,60" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
`, 300);

/** Segment AB with equal-radius arcs from each endpoint locating the perpendicular bisector. */
export const perpBisectorFig = () => wrap("0 0 260 200", "Perpendicular bisector construction", `
  <circle cx="70" cy="100" r="90" fill="none" stroke="#2563eb" stroke-width="1.4"/>
  <circle cx="190" cy="100" r="90" fill="none" stroke="#2563eb" stroke-width="1.4"/>
  <line x1="70" y1="100" x2="190" y2="100" stroke="#0f172a" stroke-width="2.2"/>
  <circle cx="70" cy="100" r="4" fill="#ea580c"/><text x="62" y="122" font-size="13" fill="#9a3412" ${F}>A</text>
  <circle cx="190" cy="100" r="4" fill="#ea580c"/><text x="182" y="122" font-size="13" fill="#9a3412" ${F}>B</text>
  <line x1="130" y1="14" x2="130" y2="186" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 3"/>
  <circle cx="130" cy="100" r="3.5" fill="#dc2626"/><text x="136" y="96" font-size="12" fill="#7f1d1d" ${F}>M</text>
`);

/** Angle ABC with vertex arc points D, E and the bisector ray. */
export const angleBisectorFig = () => wrap("0 0 220 160", "Angle bisector construction", `
  <line x1="30" y1="130" x2="190" y2="130" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="30" y1="130" x2="150" y2="30" stroke="#0f172a" stroke-width="2.2"/>
  <path d="M70,130 A40,40 0 0 1 79,93" fill="none" stroke="#2563eb" stroke-width="1.6"/>
  <circle cx="70" cy="130" r="3" fill="#15803d"/><text x="72" y="147" font-size="11" fill="#14532d" ${F}>D</text>
  <circle cx="79" cy="93" r="3" fill="#15803d"/><text x="58" y="88" font-size="11" fill="#14532d" ${F}>E</text>
  <line x1="30" y1="130" x2="145" y2="70" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 3"/>
  <text x="150" y="66" font-size="10" fill="#7f1d1d" ${F}>bisector</text>
  <circle cx="30" cy="130" r="4" fill="#ea580c"/><text x="14" y="148" font-size="13" fill="#9a3412" ${F}>B</text>
`);

/** Original segment AB above; copy in progress onto ray from A′ below. */
export const copySegmentFig = () => wrap("0 0 260 150", "Copying a segment with compass and straightedge", `
  <line x1="30" y1="30" x2="150" y2="30" stroke="#0f172a" stroke-width="2.2"/>
  <circle cx="30" cy="30" r="4" fill="#ea580c"/><text x="22" y="20" font-size="12" fill="#9a3412" ${F}>A</text>
  <circle cx="150" cy="30" r="4" fill="#ea580c"/><text x="156" y="20" font-size="12" fill="#9a3412" ${F}>B</text>
  <line x1="30" y1="110" x2="230" y2="110" stroke="#0f172a" stroke-width="2.2"/>
  <circle cx="30" cy="110" r="4" fill="#2563eb"/><text x="20" y="128" font-size="12" fill="#1d4ed8" ${F}>A'</text>
  <path d="M138,120 A122,122 0 0 1 150,98" fill="none" stroke="#15803d" stroke-width="1.6"/>
  <circle cx="150" cy="110" r="4" fill="#2563eb"/><text x="152" y="128" font-size="12" fill="#1d4ed8" ${F}>B'</text>
`);

/** Original angle DBE above; copy in progress at new vertex B′ below. */
export const copyAngleFig = () => wrap("0 0 280 190", "Copying an angle with compass and straightedge", `
  <line x1="20" y1="60" x2="140" y2="60" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="20" y1="60" x2="90" y2="15" stroke="#0f172a" stroke-width="2.2"/>
  <path d="M55,60 A35,35 0 0 1 62,38" fill="none" stroke="#2563eb" stroke-width="1.6"/>
  <circle cx="55" cy="60" r="3" fill="#15803d"/><text x="55" y="76" font-size="10" fill="#14532d" ${F}>D</text>
  <circle cx="62" cy="38" r="3" fill="#15803d"/><text x="42" y="34" font-size="10" fill="#14532d" ${F}>E</text>
  <circle cx="20" cy="60" r="4" fill="#ea580c"/><text x="6" y="76" font-size="12" fill="#9a3412" ${F}>B</text>
  <line x1="160" y1="150" x2="270" y2="150" stroke="#0f172a" stroke-width="2.2"/>
  <path d="M195,150 A35,35 0 0 1 202,128" fill="none" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="3 2"/>
  <circle cx="195" cy="150" r="3" fill="#15803d"/><text x="195" y="166" font-size="10" fill="#14532d" ${F}>D'</text>
  <circle cx="202" cy="128" r="3" fill="#15803d"/><text x="185" y="118" font-size="10" fill="#14532d" ${F}>E'</text>
  <line x1="160" y1="150" x2="230" y2="90" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>
  <circle cx="160" cy="150" r="4" fill="#ea580c"/><text x="146" y="166" font-size="12" fill="#9a3412" ${F}>B'</text>
`);

/** Triangle with incenter and inscribed circle tangent to all three sides. */
export const incircleFig = () => wrap("0 0 240 170", "Triangle with incircle", `
  <polygon points="40,140 200,140 120,30" fill="#f0fdf4" stroke="#15803d" stroke-width="2.5"/>
  <circle cx="122" cy="112" r="26" fill="none" stroke="#dc2626" stroke-width="2"/>
  <circle cx="122" cy="112" r="3" fill="#dc2626"/><text x="128" y="110" font-size="11" fill="#7f1d1d" ${F}>I</text>
  <line x1="40" y1="140" x2="122" y2="112" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3 2"/>
  <line x1="200" y1="140" x2="122" y2="112" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3 2"/>
  <line x1="120" y1="30" x2="122" y2="112" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3 2"/>
  <text x="28" y="158" font-size="13" fill="#14532d" ${F}>A</text>
  <text x="205" y="158" font-size="13" fill="#14532d" ${F}>B</text>
  <text x="112" y="22" font-size="13" fill="#14532d" ${F}>C</text>
`);

/** Triangle with circumcenter and circumscribed circle through all vertices. */
export const circumcircleFig = () => wrap("0 0 240 190", "Triangle with circumcircle", `
  <circle cx="120" cy="97" r="89" fill="none" stroke="#dc2626" stroke-width="2"/>
  <polygon points="40,140 200,140 120,30" fill="#eff6ff" fill-opacity="0.75" stroke="#1d4ed8" stroke-width="2.5"/>
  <circle cx="120" cy="97" r="3" fill="#dc2626"/><text x="126" y="95" font-size="11" fill="#7f1d1d" ${F}>O</text>
  <text x="28" y="158" font-size="13" fill="#1e3a8a" ${F}>A</text>
  <text x="205" y="158" font-size="13" fill="#1e3a8a" ${F}>B</text>
  <text x="112" y="22" font-size="13" fill="#1e3a8a" ${F}>C</text>
`);

/** Two-stage probability tree with custom branch labels. */
export const probTree = (b1 = "A", b2 = "A'", l1a = "B", l1b = "B'", l2a = "B", l2b = "B'") => wrap("0 0 280 200", "Probability tree diagram", `
  <circle cx="30" cy="100" r="3.5" fill="#0f172a"/>
  <line x1="30" y1="100" x2="140" y2="45" stroke="#2563eb" stroke-width="1.8"/>
  <line x1="30" y1="100" x2="140" y2="155" stroke="#2563eb" stroke-width="1.8"/>
  <text x="70" y="62" font-size="11" fill="#1d4ed8" ${F}>${b1}</text>
  <text x="70" y="140" font-size="11" fill="#1d4ed8" ${F}>${b2}</text>
  <circle cx="140" cy="45" r="3" fill="#0f172a"/>
  <circle cx="140" cy="155" r="3" fill="#0f172a"/>
  <line x1="140" y1="45" x2="250" y2="20" stroke="#15803d" stroke-width="1.6"/>
  <line x1="140" y1="45" x2="250" y2="70" stroke="#15803d" stroke-width="1.6"/>
  <line x1="140" y1="155" x2="250" y2="130" stroke="#15803d" stroke-width="1.6"/>
  <line x1="140" y1="155" x2="250" y2="180" stroke="#15803d" stroke-width="1.6"/>
  <text x="253" y="18" font-size="11" fill="#14532d" ${F}>${l1a}</text>
  <text x="253" y="74" font-size="11" fill="#14532d" ${F}>${l1b}</text>
  <text x="253" y="128" font-size="11" fill="#14532d" ${F}>${l2a}</text>
  <text x="253" y="184" font-size="11" fill="#14532d" ${F}>${l2b}</text>
`);

/** 6×6 grid of ordered pairs — sample space for rolling two dice. */
export const diceGrid = () => {
  const size = 24;
  let cells = "";
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      const x = 20 + (j - 1) * size;
      const y = 10 + (i - 1) * size;
      cells += `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="#eff6ff" stroke="#94a3b8" stroke-width="1"/><text x="${x + size / 2}" y="${y + size / 2 + 3.5}" font-size="8.5" text-anchor="middle" fill="#1e3a8a" ${F}>${i},${j}</text>`;
    }
  }
  return wrap("0 0 184 154", "Sample space for rolling two dice (36 outcomes)", cells, 260);
};

/** Number line for distance. */
export const numberLine = (a, b, labels = {}) => {
  const la = labels.a || String(a);
  const lb = labels.b || String(b);
  return wrap("0 0 320 70", "Number line", `
  <line x1="20" y1="30" x2="300" y2="30" stroke="#0f172a" stroke-width="2"/>
  <polygon points="300,30 290,25 290,35" fill="#0f172a"/>
  <circle cx="80" cy="30" r="4.5" fill="#ea580c"/><text x="80" y="55" text-anchor="middle" font-size="12" fill="#9a3412" ${F}>${la}</text>
  <circle cx="240" cy="30" r="4.5" fill="#ea580c"/><text x="240" y="55" text-anchor="middle" font-size="12" fill="#9a3412" ${F}>${lb}</text>
`);
};

/** Parallelogram ABCD with both diagonals drawn, meeting at O. */
export const parallelogramDiag = () => wrap("0 0 260 140", "Parallelogram with diagonals", `
  <polygon points="50,110 200,110 230,30 80,30" fill="#faf5ff" stroke="#7c3aed" stroke-width="2.5"/>
  <line x1="50" y1="110" x2="230" y2="30" stroke="#9333ea" stroke-width="1.6"/>
  <line x1="200" y1="110" x2="80" y2="30" stroke="#9333ea" stroke-width="1.6"/>
  <circle cx="140" cy="70" r="3.5" fill="#0f172a"/><text x="147" y="66" font-size="12" fill="#0f172a" ${F}>O</text>
  <text x="40" y="128" font-size="12" fill="#5b21b6" ${F}>A</text>
  <text x="205" y="128" font-size="12" fill="#5b21b6" ${F}>B</text>
  <text x="235" y="28" font-size="12" fill="#5b21b6" ${F}>C</text>
  <text x="68" y="28" font-size="12" fill="#5b21b6" ${F}>D</text>
`);

/** Rectangle ABCD with both diagonals drawn. */
export const rectangleDiag = () => wrap("0 0 240 150", "Rectangle with diagonals", `
  <rect x="40" y="30" width="160" height="80" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="40" y1="30" x2="200" y2="110" stroke="#2563eb" stroke-width="1.6"/>
  <line x1="40" y1="110" x2="200" y2="30" stroke="#2563eb" stroke-width="1.6"/>
  <text x="26" y="26" font-size="12" fill="#1e3a8a" ${F}>A</text>
  <text x="204" y="26" font-size="12" fill="#1e3a8a" ${F}>B</text>
  <text x="204" y="126" font-size="12" fill="#1e3a8a" ${F}>C</text>
  <text x="26" y="126" font-size="12" fill="#1e3a8a" ${F}>D</text>
`);

/** Rhombus ABCD (diamond orientation) with diagonals and equal-side tick marks. */
export const rhombusFig = () => wrap("0 0 220 170", "Rhombus with diagonals", `
  <polygon points="110,20 190,85 110,150 30,85" fill="#faf5ff" stroke="#7c3aed" stroke-width="2.5"/>
  <line x1="110" y1="20" x2="110" y2="150" stroke="#9333ea" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="30" y1="85" x2="190" y2="85" stroke="#9333ea" stroke-width="1.4" stroke-dasharray="4,3"/>
  <path d="M67,50 L73,56 M147,50 L141,56 M67,120 L73,114 M147,120 L141,114" stroke="#5b21b6" stroke-width="1.6"/>
  <text x="104" y="13" font-size="12" fill="#5b21b6" ${F}>A</text>
  <text x="196" y="89" font-size="12" fill="#5b21b6" ${F}>B</text>
  <text x="104" y="166" font-size="12" fill="#5b21b6" ${F}>C</text>
  <text x="12" y="89" font-size="12" fill="#5b21b6" ${F}>D</text>
`);

/** Trapezoid ABCD, AB parallel to DC (AB shorter, on top). */
export const trapezoid = () => wrap("0 0 260 150", "Trapezoid", `
  <polygon points="90,30 170,30 220,120 40,120" fill="#fff7ed" stroke="#c2410c" stroke-width="2.5"/>
  <text x="80" y="22" font-size="12" fill="#9a3412" ${F}>A</text>
  <text x="176" y="22" font-size="12" fill="#9a3412" ${F}>B</text>
  <text x="224" y="136" font-size="12" fill="#9a3412" ${F}>C</text>
  <text x="24" y="136" font-size="12" fill="#9a3412" ${F}>D</text>
  <line x1="65" y1="75" x2="195" y2="75" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3"/>
  <text x="200" y="72" font-size="10.5" fill="#64748b" ${F}>midsegment</text>
`);

/** Kite ABCD (vertical axis of symmetry) with both diagonals shown. */
export const kite = () => wrap("0 0 200 220", "Kite", `
  <polygon points="100,18 165,90 100,202 35,90" fill="#f0f9ff" stroke="#0369a1" stroke-width="2.5"/>
  <line x1="100" y1="18" x2="100" y2="202" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="35" y1="90" x2="165" y2="90" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3"/>
  <text x="94" y="12" font-size="12" fill="#0c4a6e" ${F}>A</text>
  <text x="172" y="94" font-size="12" fill="#0c4a6e" ${F}>B</text>
  <text x="94" y="218" font-size="12" fill="#0c4a6e" ${F}>C</text>
  <text x="14" y="94" font-size="12" fill="#0c4a6e" ${F}>D</text>
`);

/** Coordinate plane with a quadrilateral drawn through given points {x,y,label}. */
export const coordQuad = (pts, opts = {}) => {
  const { xmin = -2, xmax = 6, ymin = -2, ymax = 6, size = 22 } = opts;
  const ox = 40, oy = 200;
  const X = (x) => ox + (x - xmin) * size;
  const Y = (y) => oy - (y - ymin) * size;
  let g = "";
  for (let x = xmin; x <= xmax; x++) g += `<line x1="${X(x)}" y1="${Y(ymin)}" x2="${X(x)}" y2="${Y(ymax)}" stroke="#e2e8f0" stroke-width="1"/>`;
  for (let y = ymin; y <= ymax; y++) g += `<line x1="${X(xmin)}" y1="${Y(y)}" x2="${X(xmax)}" y2="${Y(y)}" stroke="#e2e8f0" stroke-width="1"/>`;
  g += `<line x1="${X(xmin)}" y1="${Y(0)}" x2="${X(xmax)}" y2="${Y(0)}" stroke="#64748b" stroke-width="1.5"/>`;
  g += `<line x1="${X(0)}" y1="${Y(ymin)}" x2="${X(0)}" y2="${Y(ymax)}" stroke="#64748b" stroke-width="1.5"/>`;
  const poly = pts.map((p) => `${X(p.x)},${Y(p.y)}`).join(" ");
  g += `<polygon points="${poly}" fill="#fef3c7" fill-opacity="0.55" stroke="#b45309" stroke-width="2.2"/>`;
  for (const p of pts) {
    g += `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="4" fill="${p.color || "#ea580c"}"/>`;
    g += `<text x="${X(p.x) + 6}" y="${Y(p.y) - 6}" font-size="12" fill="#9a3412" ${F}>${p.label}</text>`;
  }
  return wrap("0 0 240 240", "Coordinate quadrilateral", g, 220);
};

/** Coordinate plane with a circle of given center/radius (grid units). */
export const coordCircle = (cx, cy, r, opts = {}) => {
  const { xmin = -6, xmax = 6, ymin = -6, ymax = 6, size = 18 } = opts;
  const ox = 130, oy = 130;
  const X = (x) => ox + x * size;
  const Y = (y) => oy - y * size;
  let g = "";
  for (let x = xmin; x <= xmax; x++) g += `<line x1="${X(x)}" y1="${Y(ymin)}" x2="${X(x)}" y2="${Y(ymax)}" stroke="#e2e8f0" stroke-width="1"/>`;
  for (let y = ymin; y <= ymax; y++) g += `<line x1="${X(xmin)}" y1="${Y(y)}" x2="${X(xmax)}" y2="${Y(y)}" stroke="#e2e8f0" stroke-width="1"/>`;
  g += `<line x1="${X(xmin)}" y1="${Y(0)}" x2="${X(xmax)}" y2="${Y(0)}" stroke="#64748b" stroke-width="1.5"/>`;
  g += `<line x1="${X(0)}" y1="${Y(ymin)}" x2="${X(0)}" y2="${Y(ymax)}" stroke="#64748b" stroke-width="1.5"/>`;
  g += `<circle cx="${X(cx)}" cy="${Y(cy)}" r="${Math.abs(r * size)}" fill="#fef3c7" fill-opacity="0.4" stroke="#b45309" stroke-width="2.2"/>`;
  g += `<circle cx="${X(cx)}" cy="${Y(cy)}" r="3.5" fill="#0f172a"/><text x="${X(cx) + 7}" y="${Y(cy) - 5}" font-size="12" fill="#0f172a" ${F}>(${cx}, ${cy})</text>`;
  return wrap("0 0 260 260", "Circle on the coordinate plane", g, 230);
};

/** Circle with a central angle AOB and the arc it intercepts marked. */
export const centralAngle = (label = "θ") => wrap("0 0 220 220", "Central angle", `
  <circle cx="110" cy="110" r="85" fill="#fff7ed" stroke="#c2410c" stroke-width="2.2"/>
  <circle cx="110" cy="110" r="3.5" fill="#0f172a"/><text x="118" y="108" font-size="12" fill="#0f172a" ${F}>O</text>
  <line x1="110" y1="110" x2="110" y2="25" stroke="#2563eb" stroke-width="2.2"/>
  <line x1="110" y1="110" x2="180" y2="150" stroke="#2563eb" stroke-width="2.2"/>
  <circle cx="110" cy="25" r="4" fill="#15803d"/><text x="98" y="16" font-size="12" fill="#14532d" ${F}>A</text>
  <circle cx="180" cy="150" r="4" fill="#15803d"/><text x="188" y="156" font-size="12" fill="#14532d" ${F}>B</text>
  <path d="M110,80 A30,30 0 0 1 137,127" fill="none" stroke="#9a3412" stroke-width="2"/>
  <text x="128" y="100" font-size="12" fill="#9a3412" ${F}>${label}</text>
`);

/** Inscribed angle ACB with vertex C on the circle; center O and radii dashed for reference. */
export const inscribedAngle = () => wrap("0 0 240 240", "Inscribed angle", `
  <circle cx="120" cy="120" r="92" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2.2"/>
  <circle cx="120" cy="120" r="3.2" fill="#0f172a"/><text x="127" y="118" font-size="12" fill="#0f172a" ${F}>O</text>
  <circle cx="58" cy="72" r="4" fill="#15803d"/><text x="36" y="62" font-size="12" fill="#14532d" ${F}>A</text>
  <circle cx="196" cy="82" r="4" fill="#15803d"/><text x="202" y="74" font-size="12" fill="#14532d" ${F}>B</text>
  <circle cx="105" cy="208" r="4" fill="#ea580c"/><text x="92" y="226" font-size="12" fill="#9a3412" ${F}>C</text>
  <line x1="105" y1="208" x2="58" y2="72" stroke="#9a3412" stroke-width="2"/>
  <line x1="105" y1="208" x2="196" y2="82" stroke="#9a3412" stroke-width="2"/>
  <line x1="120" y1="120" x2="58" y2="72" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
  <line x1="120" y1="120" x2="196" y2="82" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
`);

/** Radius drawn perpendicular to a chord, bisecting it at M. */
export const chordPerp = () => wrap("0 0 220 220", "Radius perpendicular to a chord", `
  <circle cx="110" cy="110" r="85" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2.2"/>
  <circle cx="110" cy="110" r="3.5" fill="#0f172a"/><text x="118" y="108" font-size="12" fill="#0f172a" ${F}>O</text>
  <line x1="45" y1="65" x2="175" y2="65" stroke="#15803d" stroke-width="2.2"/>
  <circle cx="45" cy="65" r="4" fill="#15803d"/><text x="28" y="56" font-size="12" fill="#14532d" ${F}>A</text>
  <circle cx="175" cy="65" r="4" fill="#15803d"/><text x="182" y="56" font-size="12" fill="#14532d" ${F}>B</text>
  <line x1="110" y1="110" x2="110" y2="65" stroke="#9a3412" stroke-width="2"/>
  <circle cx="110" cy="65" r="3.5" fill="#9a3412"/><text x="116" y="80" font-size="12" fill="#9a3412" ${F}>M</text>
  <path d="M103,65 L103,72 L110,72" fill="none" stroke="#9a3412" stroke-width="1.5"/>
`);

/** Circle with a tangent segment PT and a secant PAB from external point P. */
export const tangentSecant = () => wrap("0 0 260 220", "Tangent and secant from an external point", `
  <circle cx="150" cy="100" r="70" fill="#fff7ed" stroke="#c2410c" stroke-width="2.2"/>
  <circle cx="150" cy="100" r="3" fill="#0f172a"/>
  <line x1="18" y1="190" x2="196" y2="42" stroke="#2563eb" stroke-width="2.2"/>
  <circle cx="196" cy="42" r="4" fill="#2563eb"/><text x="202" y="36" font-size="12" fill="#1d4ed8" ${F}>T</text>
  <line x1="18" y1="190" x2="222" y2="112" stroke="#15803d" stroke-width="2.2"/>
  <circle cx="92" cy="152" r="4" fill="#15803d"/><text x="78" y="168" font-size="12" fill="#14532d" ${F}>A</text>
  <circle cx="222" cy="112" r="4" fill="#15803d"/><text x="228" y="108" font-size="12" fill="#14532d" ${F}>B</text>
  <circle cx="18" cy="190" r="4" fill="#0f172a"/><text x="2" y="206" font-size="12" fill="#0f172a" ${F}>P</text>
`);

/** Sector of a circle (wedge shaded) with central angle label. */
export const sectorFig = (label = "θ") => wrap("0 0 220 220", "Sector of a circle", `
  <circle cx="110" cy="110" r="82" fill="none" stroke="#c2410c" stroke-width="2"/>
  <path d="M110,110 L110,28 A82,82 0 0 1 181,151 Z" fill="#fed7aa" stroke="#c2410c" stroke-width="2.2"/>
  <circle cx="110" cy="110" r="3.2" fill="#0f172a"/><text x="118" y="108" font-size="12" fill="#0f172a" ${F}>O</text>
  <text x="126" y="88" font-size="12" fill="#9a3412" ${F}>${label}</text>
`);

/** Cyclic quadrilateral ABCD inscribed in a circle. */
export const cyclicQuad = () => wrap("0 0 240 240", "Cyclic quadrilateral", `
  <circle cx="120" cy="120" r="96" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
  <polygon points="120,24 212,100 165,216 44,150" fill="none" stroke="#5b21b6" stroke-width="2.2"/>
  <circle cx="120" cy="24" r="4" fill="#5b21b6"/><text x="110" y="15" font-size="12" fill="#5b21b6" ${F}>A</text>
  <circle cx="212" cy="100" r="4" fill="#5b21b6"/><text x="218" y="96" font-size="12" fill="#5b21b6" ${F}>B</text>
  <circle cx="165" cy="216" r="4" fill="#5b21b6"/><text x="168" y="233" font-size="12" fill="#5b21b6" ${F}>C</text>
  <circle cx="44" cy="150" r="4" fill="#5b21b6"/><text x="14" y="150" font-size="12" fill="#5b21b6" ${F}>D</text>
`);

/** Right triangle inscribed with the hypotenuse as a diameter (Thales' Theorem). */
export const thalesFig = () => wrap("0 0 240 200", "Thales' Theorem", `
  <circle cx="120" cy="110" r="90" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
  <line x1="30" y1="110" x2="210" y2="110" stroke="#0f172a" stroke-width="2.2"/>
  <circle cx="30" cy="110" r="4" fill="#0f172a"/><text x="12" y="128" font-size="12" fill="#0f172a" ${F}>A</text>
  <circle cx="210" cy="110" r="4" fill="#0f172a"/><text x="216" y="128" font-size="12" fill="#0f172a" ${F}>B</text>
  <circle cx="150" cy="34" r="4" fill="#ea580c"/><text x="156" y="24" font-size="12" fill="#9a3412" ${F}>C</text>
  <line x1="30" y1="110" x2="150" y2="34" stroke="#9a3412" stroke-width="2"/>
  <line x1="210" y1="110" x2="150" y2="34" stroke="#9a3412" stroke-width="2"/>
  <path d="M139,49 L129,54 L134,64" fill="none" stroke="#9a3412" stroke-width="1.5"/>
`);

/** A small triangle and its dilated image from center P, for perimeter/area scale factor problems. */
export const dilationPair = () => wrap("0 0 260 200", "Dilation from center P", `
  <circle cx="26" cy="176" r="3.2" fill="#0f172a"/><text x="8" y="192" font-size="12" fill="#0f172a" ${F}>P</text>
  <polygon points="66,176 100,176 66,142" fill="#dbeafe" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="1.8"/>
  <polygon points="146,176 240,176 146,82" fill="none" stroke="#c2410c" stroke-width="2.2"/>
  <line x1="26" y1="176" x2="240" y2="176" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="26" y1="176" x2="146" y2="82" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
`);

/** Numbered outcome boxes 1..n; boxes in `given` get a blue outline (conditioning set), boxes in `favorable` get an orange fill. Pass empty arrays to just show plain outcomes. */
export const outcomeBoxes = (n, given = [], favorable = []) => {
  const size = 32, gap = 6;
  let cells = "";
  for (let i = 1; i <= n; i++) {
    const x = 6 + (i - 1) * (size + gap);
    const inGiven = given.includes(i);
    const inFav = favorable.includes(i);
    const fill = inFav ? "#fed7aa" : inGiven ? "#dbeafe" : "#f8fafc";
    const stroke = inGiven ? "#1d4ed8" : "#94a3b8";
    cells += `<rect x="${x}" y="6" width="${size}" height="${size}" fill="${fill}" stroke="${stroke}" stroke-width="${inGiven ? 2.2 : 1.2}"/><text x="${x + size / 2}" y="${6 + size / 2 + 5}" font-size="14" text-anchor="middle" fill="#1e293b" ${F}>${i}</text>`;
  }
  const w = 12 + n * (size + gap);
  return wrap(`0 0 ${w} 44`, "Sample space with outcomes highlighted", cells, Math.min(w, 300));
};

/** Row of ordered "slot" boxes showing shrinking choice counts for a permutation (e.g. [7,6,5] for 7P3). */
export const orderedSlots = (counts) => {
  const size = 44, gap = 12;
  let body = "";
  counts.forEach((c, i) => {
    const x = 8 + i * (size + gap);
    body += `<rect x="${x}" y="20" width="${size}" height="${size}" rx="6" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2.2"/>`;
    body += `<text x="${x + size / 2}" y="${20 + size / 2 + 7}" font-size="18" font-weight="700" text-anchor="middle" fill="#1e3a8a" ${F}>${c}</text>`;
    body += `<text x="${x + size / 2}" y="15" font-size="9.5" text-anchor="middle" fill="#64748b" ${F}>slot ${i + 1}</text>`;
  });
  const w = 16 + counts.length * (size + gap);
  return wrap(`0 0 ${w} 92`, "Ordered slots for a permutation", body, Math.min(w, 280));
};

/** `total` dots in a row with a dashed loop around the first `chosen`, showing an unordered selection (combination). */
export const chosenSet = (total, chosen) => {
  const spacing = 28, r = 8, startX = 18;
  let dots = "";
  for (let i = 0; i < total; i++) {
    const x = startX + i * spacing;
    const isChosen = i < chosen;
    dots += `<circle cx="${x}" cy="46" r="${r}" fill="${isChosen ? "#fde68a" : "#e2e8f0"}" stroke="${isChosen ? "#b45309" : "#94a3b8"}" stroke-width="2"/>`;
  }
  const loopRx = ((chosen - 1) * spacing) / 2 + r + 8;
  const loopCx = startX + ((chosen - 1) * spacing) / 2;
  const loop = `<ellipse cx="${loopCx}" cy="46" rx="${loopRx}" ry="18" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>`;
  const w = startX * 2 + total * spacing;
  return wrap(`0 0 ${w} 76`, "Unordered selection circled", dots + loop, Math.min(w, 300));
};

/** Simple vertical bar chart of probability values (0 to 1) for checking/visualizing a probability model. */
export const probBars = (labels, values) => {
  const barW = 42, gap = 22, maxH = 96, baseY = 118;
  let body = "";
  values.forEach((v, i) => {
    const h = Math.max(2, v * maxH);
    const x = 16 + i * (barW + gap);
    const y = baseY - h;
    body += `<rect x="${x}" y="${y}" width="${barW}" height="${h}" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.8"/>`;
    body += `<text x="${x + barW / 2}" y="${baseY + 16}" font-size="12" text-anchor="middle" fill="#1e3a8a" ${F}>${labels[i]}</text>`;
    body += `<text x="${x + barW / 2}" y="${y - 6}" font-size="11" text-anchor="middle" fill="#334155" ${F}>${v}</text>`;
  });
  const w = 24 + values.length * (barW + gap);
  body += `<line x1="8" y1="${baseY}" x2="${w - 8}" y2="${baseY}" stroke="#0f172a" stroke-width="1.5"/>`;
  return wrap(`0 0 ${w} 140`, "Probability model bar chart", body, Math.min(w, 260));
};

/** Generic HTML data table (headers + rows) for outcome/probability/payout style layouts. */
export function dataTable(headers, rows) {
  const cell = (c, bold) => `<td style="border:1px solid #94a3b8;padding:4px 12px;text-align:center;${bold ? "font-weight:700;background:#f8fafc" : ""}">${c}</td>`;
  return `<table style="border-collapse:collapse;margin:6px auto;font-size:10pt">` +
    `<tr>${headers.map((h) => `<th style="border:1px solid #94a3b8;padding:4px 12px;background:#eff6ff">${h}</th>`).join("")}</tr>` +
    rows.map((r) => `<tr>${r.map((c, i) => cell(c, i === 0)).join("")}</tr>`).join("") +
    `</table>`;
}

/** Regular n-gon (computed vertices), optional center label. */
export const polygonFig = (n, label = "") => {
  const cx = 110, cy = 112, r = 82;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  const points = pts.map((p) => p.map((v) => v.toFixed(1)).join(",")).join(" ");
  return wrap("0 0 220 224", `Regular ${n}-gon`, `
  <polygon points="${points}" fill="#ecfeff" stroke="#0e7490" stroke-width="2.2"/>
  ${label ? `<text x="${cx - 8}" y="${cy + 4}" font-size="12" fill="#0e7490" ${F}>${label}</text>` : ""}
`);
};
