// IB AA SL 12.1 — Radian Measure, Arcs and Sectors: definition of the radian, converting degrees and radians, arc length s = rθ, sector area ½r²θ, perimeters and segments
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, sector } from "./figs12.mjs";

export const TITLE = "12.1 Radian Measure, Arcs and Sectors";
export const ID = "962478bc-a890-4b43-8ba2-5bce85a07cde";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🌀",
    title: "Radian Measure, Arcs and Sectors",
    overview: S`Degrees split a turn into 360 parts — a historical choice. Radians measure an angle by the arc it cuts off: one radian is the angle whose arc equals the radius. With radians, arc length and sector area have simple formulas, and calculus with trigonometric functions works cleanly. In this lesson you will convert between degrees and radians and solve arc, sector and segment problems.`,
    goals: [
      S`understand the radian and convert using \(\pi\text{ rad}=180^\circ\);`,
      S`use arc length \(s=r\theta\);`,
      S`use sector area \(A=\frac12r^2\theta\);`,
      "find perimeters of sectors and areas of segments;",
      "solve for an unknown radius or angle.",
    ],
    curriculum: "SL 3.4 (the circle: radian measure of angles; length of an arc; area of a sector)",
    prior: [
      ["Circumference of a circle of radius 5?", S`\(10\pi\).`],
      ["What fraction of a full turn is 90°?", S`\(\frac14\).`],
      [S`Area of a triangle with sides 6, 6 and included angle 90°?`, "18."],
    ],
    words: [
      ["Radian", "angle subtending an arc equal to the radius", "≈ 57.3°"],
      ["Conversion", S`\(\pi\text{ rad}=180^\circ\)`, S`\(60^\circ=\frac{\pi}{3}\)`],
      ["Arc length", S`\(s=r\theta\)`, ""],
      ["Sector", "region between two radii and an arc", S`\(A=\frac12r^2\theta\)`],
      ["Segment", "region between a chord and an arc", "sector − triangle"],
    ],
  }),

  section("📌 What is a radian?", S`
  <p>A full circle has circumference \(2\pi r\), so a full turn contains \(2\pi\) arcs of length \(r\): \(360^\circ=2\pi\) rad, so \(180^\circ=\pi\) rad. To convert degrees to radians multiply by \(\frac{\pi}{180}\); radians to degrees multiply by \(\frac{180}{\pi}\).</p>
  ${fig({ items: sector(5, 1, { lr: "r", lth: "1 rad", ls: "arc = r" }) }, "One radian: the arc length equals the radius")}
  ${table(["Degrees", "30°", "45°", "60°", "90°", "120°", "135°", "150°", "180°", "270°", "360°"], [["Radians", S`\(\frac{\pi}{6}\)`, S`\(\frac{\pi}{4}\)`, S`\(\frac{\pi}{3}\)`, S`\(\frac{\pi}{2}\)`, S`\(\frac{2\pi}{3}\)`, S`\(\frac{3\pi}{4}\)`, S`\(\frac{5\pi}{6}\)`, S`\(\pi\)`, S`\(\frac{3\pi}{2}\)`, S`\(2\pi\)`]])}
  ${keyIdea("π rad = 180°. Multiply by π/180 to get radians, by 180/π to get degrees.")}`),

  section("📌 Arc length and sector area", S`
  <p>An arc with angle θ is the fraction \(\frac{\theta}{2\pi}\) of the circle, so \(s=\frac{\theta}{2\pi}\cdot2\pi r=r\theta\) and \(A=\frac{\theta}{2\pi}\cdot\pi r^2=\frac12r^2\theta\) — valid only with θ in radians.</p>
  ${fig({ items: sector(7, 1.8, { lr: "r = 7", lth: "1.8", ls: "s" }) }, "r = 7, θ = 1.8: s = 12.6, A = ½(49)(1.8) = 44.1")}
  ${fig({ items: sector(9, (2 * Math.PI) / 3, { lr: "r = 9", lth: "2π/3", ls: "" }) }, "r = 9, θ = 2π/3: s = 6π ≈ 18.85, A = 27π ≈ 84.82, perimeter = 18 + 6π")}
  <p>A <strong>segment</strong> is the sector minus the triangle: \(\frac12r^2\theta-\frac12r^2\sin\theta=\frac12r^2(\theta-\sin\theta)\).</p>
  ${fig({ items: sector(8, 2, { lr: "r = 8", lth: "2", segment: true }) }, "Segment area = ½(64)(2 − sin 2) ≈ 34.90")}
  ${watchOut([
    "The formulas s = rθ and A = ½r²θ need θ in radians.",
    "Set your calculator to radian mode for sin θ in segment problems.",
    "The perimeter of a sector includes the two radii: P = 2r + rθ.",
    "Leave answers in terms of π when asked for exact values.",
  ])}`),

  section("📌 Explore", S`<p>Change the angle and radius. Watch the arc length and sector area, and see how many radii fit around the arc.</p>`),

  widget("ibRadian", { init: [100, 6] }),

  examples([
    ["Level 1 · Convert", S`Convert 225° to radians and \(\frac{7\pi}{12}\) to degrees.`,
      [S`\(225\times\frac{\pi}{180}=\frac{5\pi}{4}\).`, S`\(\frac{7\pi}{12}\times\frac{180}{\pi}=105^\circ\).`],
      S`\(\frac{5\pi}{4}\); \(105^\circ\)`],
    ["Level 1 · Arc and area", S`A sector has radius 11 cm and angle 0.9 rad. Find its arc length and area.`,
      [S`\(s=11(0.9)\).`, S`\(A=\frac12(121)(0.9)\).`],
      S`\(9.9\) cm; \(54.45\) cm²`],
    ["Level 2 · Unknown angle", S`A sector of radius 6 has area 27. Find θ and the arc length.`,
      [S`\(27=\frac12(36)\theta\Rightarrow\theta=1.5\).`, S`\(s=6(1.5)\).`],
      S`\(\theta=1.5\); \(s=9\)`,
      fig({ items: sector(6, 1.5, { lr: "r = 6", lth: "θ", ls: "" }) })],
    ["Level 2 · Perimeter", S`Find the perimeter of a sector with radius 10 and angle 135°.`,
      [S`\(\theta=\frac{3\pi}{4}\).`, S`\(P=20+10\cdot\frac{3\pi}{4}\).`],
      S`\(20+7.5\pi\approx43.56\)`],
    ["Level 3 · Segment", S`A chord subtends an angle of \(\frac{\pi}{3}\) at the centre of a circle of radius 12. Find the area of the minor segment.`,
      [S`Sector \(\frac12(144)\frac{\pi}{3}=24\pi\).`, S`Triangle \(\frac12(144)\sin\frac{\pi}{3}=36\sqrt3\).`],
      S`\(24\pi-36\sqrt3\approx13.04\)`],
  ]),

  practice([
    q("Level 1 · convert", S`Convert 72° to radians (3 d.p.).`, num((72 * Math.PI) / 180, 0.001),
      "× π/180.", [S`\(\frac{2\pi}{5}\).`], S`\(\approx1.257\)`),
    q("Level 1 · degrees", S`Convert \(\frac{4\pi}{9}\) to degrees.`, num(80),
      "× 180/π.", ["80°."], S`\(80^\circ\)`),
    q("Level 2 · arc", S`Find the arc length for radius 15 and angle 40° (2 d.p.).`, num((15 * 40 * Math.PI) / 180, 0.01),
      "Convert first.", [S`\(15\cdot\frac{2\pi}{9}\).`], S`\(\approx10.47\)`),
    q("Level 2 · radius", S`A sector has arc length 14 and angle 3.5 rad. Find the radius.`, num(4),
      "r = s/θ.", ["4."], S`\(4\)`),
    q("Level 2 · area", S`The area of a sector with radius 4 and angle \(\frac{\pi}{2}\) is:`, choice([S`\(4\pi\)`, S`\(2\pi\)`, S`\(8\pi\)`, S`\(16\pi\)`], 0),
      "½ × 16 × π/2.", [S`\(4\pi\).`], S`\(4\pi\)`),
  ]),

  ...hard([
    ["Perimeter and area together", S`A sector has perimeter 30 cm and area 50 cm². Find its radius and angle.`,
      [S`\(2r+r\theta=30\) and \(\frac12r^2\theta=50\). From the first, \(r\theta=30-2r\).`, S`\(\frac12r(30-2r)=50\Rightarrow r^2-15r+50=0\Rightarrow r=5\) or \(10\).`, S`\(r=5\): \(\theta=4\); \(r=10\): \(\theta=1\).`],
      S`\(r=5,\ \theta=4\) or \(r=10,\ \theta=1\)`,
      fig({ items: sector(10, 1, { lr: "r = 10", lth: "1 rad", ls: "" }) }, "One of the two sectors: r = 10, θ = 1")],
    ["Rolling wheel", "A bicycle wheel of radius 34 cm turns through 5 complete revolutions and a further 2 radians. How far does the bike travel?",
      [S`Angle \(=5(2\pi)+2=10\pi+2\).`, S`Distance \(=34(10\pi+2)=340\pi+68\).`],
      S`\(\approx1136.1\) cm`],
  ], [
    q("Level 3 · segment", S`Find the area of the minor segment cut by a chord subtending 2 rad in a circle of radius 5 (2 d.p.).`, num(12.5 * (2 - Math.sin(2)), 0.01),
      "½r²(θ − sin θ).", [S`\(12.5(2-\sin2)\).`], S`\(\approx13.63\)`),
    q("Level 3 · equal", S`For what angle θ (rad) does a sector of radius 6 have perimeter equal to its area?`, num(1, 0.001),
      "12 + 6θ = 18θ.", [S`\(12=12\theta\).`], S`\(1\)`),
    q("Level 3 · clock", "The minute hand of a clock is 9 cm long. How far does its tip move in 25 minutes (2 d.p.)?", num(9 * (25 / 60) * 2 * Math.PI, 0.01),
      "Angle = 25/60 of 2π.", [S`\(9\cdot\frac{5\pi}{6}\).`], S`\(\approx23.56\) cm`),
  ]),

  wrapUp({
    qas: [
      ["What is one radian?", "The angle at the centre that cuts off an arc equal to the radius."],
      ["How do I convert?", "π rad = 180°: multiply by π/180 or 180/π."],
      ["Why use radians?", "They make s = rθ and A = ½r²θ simple, and are needed in calculus."],
      ["How do I find a segment area?", "Sector − triangle = ½r²(θ − sin θ)."],
      ["What is the perimeter of a sector?", "Two radii plus the arc: 2r + rθ."],
    ],
    summary: [
      "π rad = 180°.",
      "s = rθ; A = ½r²θ (θ in radians).",
      "Sector perimeter 2r + rθ.",
      "Segment ½r²(θ − sin θ).",
    ],
    next: "12.2 defines sin, cos and tan for any angle using the unit circle.",
  }),
];
