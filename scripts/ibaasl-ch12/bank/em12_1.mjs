// 12.1 Radian Measure, Arcs and Sectors — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { figDoc, sector } from "../figs12.mjs";

const S = String.raw;
const PI = Math.PI, d2 = (v) => Math.round(v * 100) / 100;

export const E = [
  mc(S`$\pi$ radians equals:`, S`$180^\circ$`, [S`$360^\circ$`, S`$90^\circ$`, S`$57.3^\circ$`], "Half a turn."),
  mc(S`$60^\circ$ in radians is:`, S`$\frac{\pi}{3}$`, [S`$\frac{\pi}{6}$`, S`$\frac{\pi}{4}$`, S`$\frac{2\pi}{3}$`], "60/180 = 1/3."),
  mc(S`$\frac{3\pi}{2}$ radians in degrees is:`, S`$270^\circ$`, [S`$135^\circ$`, S`$300^\circ$`, S`$240^\circ$`], "× 180/π."),
  num(S`Convert $\frac{5\pi}{9}$ to degrees.`, 100, "× 180/π."),
  num(S`Convert 1 radian to degrees (1 d.p.).`, 57.3, "180/π.", null, 0.05),
  num(S`Convert 40° to radians (3 d.p.).`, Math.round((40 * PI) / 180 * 1000) / 1000, "× π/180.", null, 0.001),
  num("Find the arc length for radius 4 and angle 3 rad.", 12, "rθ."),
  num("Find the sector area for radius 6 and angle 0.5 rad.", 9, "½ × 36 × 0.5."),
  num("Find the arc length for radius 10 and angle 0.7 rad.", 7, "rθ."),
  num("Find the radius of a sector with arc length 9 and angle 1.5 rad.", 6, "s/θ."),
  tf("One radian is the angle subtended by an arc equal in length to the radius.", true, "Definition."),
  tf(S`A full turn is $\pi$ radians.`, false, "2π."),
  tf("The formula A = ½r²θ requires θ in radians.", true, "It comes from θ/2π of the circle."),
  fill(S`Arc length $s=r\_\_\_$ (θ in radians).`, ["θ", "theta"], "s = rθ."),
  ms("Which equal π/2? Select all.", ["90°", "a quarter turn", "1.5708 rad", "45°"], [0, 1, 2], "45° = π/4."),
  mc("The sector shown has arc length:", "12", ["24", "6", "8"], "6 × 2.", figDoc({ items: sector(6, 2, { lr: "6", lth: "2", ls: "s" }) })),
  mc("The perimeter of the sector shown (r = 5, θ = 1.2) is:", "16", ["6", "11", "15"], "10 + 6.", figDoc({ items: sector(5, 1.2, { lr: "5", lth: "1.2" }) })),
  num(S`Find the area of a sector with radius 2 and angle $\pi$ (2 d.p.).`, d2(2 * PI), "A semicircle: ½ × 4 × π.", null, 0.01),
  num(S`Convert $-\frac{\pi}{4}$ to degrees.`, -45, "× 180/π."),
  mc(S`$2\pi$ radians is how many degrees?`, "360°", ["180°", "720°", "90°"], "Full turn."),
];

export const M = [
  num(S`Find the arc length of a sector with radius 9 and angle 80° (2 d.p.).`, d2((9 * 80 * PI) / 180), "Convert to radians first.", null, 0.01),
  num(S`Find the area of a sector with radius 12 and angle 50° (2 d.p.).`, d2(0.5 * 144 * (50 * PI) / 180), "½r²θ.", null, 0.01),
  num("A sector has area 32 and radius 8. Find θ.", 1, "32 = 32θ."),
  num("A sector has area 45 and angle 2.5 rad. Find r.", 6, "r² = 36."),
  num("A sector has radius 7 and arc length 10.5. Find its area.", 36.75, "θ = 1.5; ½ × 49 × 1.5.", null, 0.001),
  num("Find the perimeter of a sector with radius 6 and angle 2 rad.", 24, "12 + 12."),
  num(S`Find the perimeter of a sector with radius 9 and angle $\frac{2\pi}{3}$ (2 d.p.).`, d2(18 + 6 * PI), "18 + 6π.", null, 0.01),
  num(S`Find the segment area for radius 4 and angle $\frac{\pi}{3}$ (2 d.p.).`, d2(8 * (PI / 3 - Math.sin(PI / 3))), "½r²(θ − sin θ).", null, 0.01),
  num(S`Find the segment area for radius 9 and angle 1.4 rad (2 d.p.).`, d2(40.5 * (1.4 - Math.sin(1.4))), "½r²(θ − sin θ).", null, 0.01),
  mc("A wheel of radius 0.35 m turns 3 full revolutions. The distance travelled is about:", "6.60 m", ["2.10 m", "1.05 m", "3.30 m"], "3 × 2π × 0.35."),
  mc(S`An angle of 2.4 rad lies in which quadrant?`, "2", ["1", "3", "4"], "π/2 ≈ 1.57 < 2.4 < π ≈ 3.14."),
  tf("Doubling the radius of a sector (same angle) doubles its area.", false, "Area ∝ r²: ×4."),
  ms("A sector has r = 10 and θ = 0.6. Which are correct? Select all.", ["arc = 6", "area = 30", "perimeter = 26", "area = 60"], [0, 1, 2], "½ × 100 × 0.6 = 30."),
  mc("The shaded segment shown has area:", S`$\frac12(36)(1.8-\sin1.8)$`, [S`$\frac12(36)(1.8)$`, S`$\frac12(6)(1.8-\sin1.8)$`, S`$\frac12(36)\sin1.8$`], "Sector − triangle.", figDoc({ items: sector(6, 1.8, { lr: "6", lth: "1.8", segment: true }) })),
  mc("For the sector shown, the angle θ is:", "1.25 rad", ["0.8 rad", "1.5 rad", "2.5 rad"], "s/r = 10/8.", figDoc({ items: sector(8, 1.25, { lr: "8", lth: "θ", ls: "10" }) })),
  num("A clock's minute hand is 12 cm. Find the area it sweeps in 20 minutes (2 d.p.).", d2(0.5 * 144 * ((2 * PI) / 3)), "θ = 2π/3.", null, 0.01),
  num(S`A sector of a circle of radius 15 has area $75\pi$. Find θ as a multiple of π (decimal).`, 2 / 3, "75π = 112.5θ.", null, 0.001),
  num("A sector has perimeter 28 and radius 8. Find its area.", 48, "θ = 1.5; ½ × 64 × 1.5."),
  mc(S`Which is closest to 3 radians?`, "172°", ["3°", "90°", "180°"], "3 × 57.3."),
  num(S`Find the chord length for radius 10 and angle 1 rad (2 d.p.).`, d2(20 * Math.sin(0.5)), "2r sin(θ/2).", null, 0.01),
];
