// IB AA SL Worksheet 12.1 — Radian Measure, Arcs and Sectors (teacher edition)
import { svgT } from "./figT.mjs";
import { figDoc, sector } from "../figs12.mjs";

const S = String.raw;
const T = (items, w = 5) => svgT(figDoc({ items }), w);
const f2 = (v) => v.toFixed(2);

const EXAMPLES = [
  { title: "Degrees to radians", q: S`Convert 160° and 315° to radians.`,
    steps: [S`Multiply by $\frac{\pi}{180}$.`], ans: S`$\frac{8\pi}{9}$; $\frac{7\pi}{4}$` },
  { title: "Radians to degrees", q: S`Convert $\frac{11\pi}{18}$ and 2.5 rad to degrees.`,
    steps: [S`Multiply by $\frac{180}{\pi}$.`], ans: S`$110^\circ$; $\approx143.2^\circ$` },
  { title: "Arc length", q: "Find the arc length of a sector with radius 14 cm and angle 1.3 rad.",
    fig: T(sector(14, 1.3, { lr: "14", lth: "1.3", ls: "s" })),
    steps: [S`$s=14(1.3)$.`], ans: "18.2 cm" },
  { title: "Sector area", q: S`Find the area of a sector with radius 6 and angle $\frac{5\pi}{6}$.`,
    steps: [S`$\frac12(36)\frac{5\pi}{6}$.`], ans: S`$15\pi\approx47.12$` },
  { title: "Perimeter", q: "Find the perimeter of a sector with radius 8 and angle 70°.",
    steps: [S`$70^\circ=\frac{7\pi}{18}$; $P=16+8\cdot\frac{7\pi}{18}$.`], ans: S`$\approx${f2(16 + (8 * 7 * Math.PI) / 18)}$` },
  { title: "Unknown radius", q: "A sector with angle 0.75 rad has area 24. Find its radius.",
    steps: [S`$24=\frac12r^2(0.75)\Rightarrow r^2=64$.`], ans: "8" },
  { title: "Unknown angle", q: "An arc of length 15 is cut from a circle of radius 6. Find the angle in radians and degrees.",
    steps: [S`$\theta=\frac{15}{6}$.`], ans: S`$2.5$ rad $\approx143.2^\circ$` },
  { title: "Segment", q: S`Find the area of the segment cut off by a chord subtending $\frac{\pi}{2}$ in a circle of radius 10.`,
    fig: T(sector(10, Math.PI / 2, { lr: "10", lth: "π/2", segment: true })),
    steps: [S`$\frac12(100)\left(\frac{\pi}{2}-1\right)$.`], ans: S`$25\pi-50\approx28.54$` },
  { title: "Arc and chord", q: "A sector has radius 5 and angle 1.2 rad. Find the difference between the arc length and the chord length.",
    steps: [S`Arc $6$; chord $2(5)\sin0.6\approx5.646$.`], ans: S`$\approx${f2(6 - 10 * Math.sin(0.6))}$` },
];

const PROBLEMS = [
  { level: 1, q: "Convert 54° to radians as a multiple of π.", recap: "× π/180.", ans: S`$\frac{3\pi}{10}$` },
  { level: 1, q: S`Convert $\frac{3\pi}{5}$ to degrees.`, recap: "× 180/π.", ans: S`$108^\circ$` },
  { level: 1, q: "Find the arc length for radius 9 and angle 2 rad.", recap: "rθ.", ans: "18" },
  { level: 2, q: S`Find the area of a sector with radius 12 and angle $\frac{\pi}{8}$.`, recap: "½r²θ.", ans: S`$9\pi\approx28.27$` },
  { level: 2, q: "A sector has arc length 7.5 and radius 3. Find its area.", recap: "θ = 2.5.", ans: "11.25" },
  { level: 2, q: "Find the perimeter of a sector with radius 4 and angle 225°.", recap: "Convert first.", ans: S`$8+5\pi\approx23.71$` },
  { level: 2, q: "A sector has area 50 and angle 1 rad. Find its perimeter.", recap: "r = 10.", ans: "30" },
  { level: 2, q: "Shade the minor segment and find its area: radius 6, angle 1.5 rad.", recap: "½r²(θ − sin θ).", ans: S`$\approx${f2(18 * (1.5 - Math.sin(1.5)))}$`,
    fig: T(sector(6, 1.5, { lr: "6", lth: "1.5" }), 4.4) },
  { level: 3, space: 4, q: "A sector has perimeter 40 and area 100. Find its radius and angle.", recap: "Two equations.", ans: S`$r=10$, $\theta=2$` },
  { level: 3, space: 4, q: "Find the angle θ for which the area of the segment equals half the area of the sector (radius r). Use a GDC.", recap: "θ − sin θ = θ/2.", ans: S`$\sin\theta=\frac{\theta}{2}$: $\theta\approx1.895$` },
  { level: 3, space: 4, q: "A pendulum 80 cm long swings through an arc of 30 cm. Find the angle of swing in degrees.", recap: "θ = s/r.", ans: S`$0.375$ rad $\approx21.5^\circ$` },
  { level: 3, space: 4, q: "Two circles of radius 5 have centres 5 apart. Find the area of their overlap.", recap: "Two segments, angle 2π/3.", ans: S`$2\cdot\frac{25}{2}\left(\frac{2\pi}3-\frac{\sqrt3}{2}\right)\approx30.71$` },
  { level: 3, space: 4, q: "Explain why the formulas s = rθ and A = ½r²θ do not work with θ in degrees.", recap: "Fractions of 2π.", ans: S`they come from $\frac{\theta}{2\pi}$ of the circle; in degrees the fraction is $\frac{\theta}{360}$` },
];

export const WS = {
  code: "12.1",
  title: "Radian Measure, Arcs and Sectors",
  bigideas: S`One radian subtends an arc equal to the radius, so $2\pi$ rad $=360^\circ$ and $\pi$ rad $=180^\circ$. With θ in radians: arc length $s=r\theta$, sector area $A=\frac12r^2\theta$, sector perimeter $2r+r\theta$, segment area $\frac12r^2(\theta-\sin\theta)$.`,
  goals: ["Convert degrees and radians.", "Find arcs and sectors.", "Find perimeters and segments.", "Solve for unknowns."],
  curriculum: "SL 3.4",
  vocab: [["Radian", "arc = radius"], ["Sector", S`$\frac12r^2\theta$`], ["Segment", "sector − triangle"]],
  hook: "Wrap a piece of string the length of a radius around a circle. How many fit around the whole circle?",
  concepts: [
    ["1. Radians", S`${T(sector(5, 1, { lr: "r", lth: "1 rad", ls: "r" }), 4.2)} Arc = radius.`],
    ["2. Formulas", "s = rθ, A = ½r²θ."],
    ["3. Segments", "Subtract the triangle."],
  ],
  tips: ["Radian mode.", "Leave π exact when asked.", "Perimeter includes radii.", "Segment = sector − triangle.", "Check units."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
