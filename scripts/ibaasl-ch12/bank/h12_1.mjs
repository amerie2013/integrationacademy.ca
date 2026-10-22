// 12.1 Radian Measure, Arcs and Sectors — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, sector } from "../figs12.mjs";

const S = String.raw;
const PI = Math.PI, d2 = (v) => Math.round(v * 100) / 100;

export const TOPIC = "12.1 Radian Measure, Arcs and Sectors";
export const Q = [
  num("A sector has perimeter 36 and area 80. Find the larger possible radius.", 10, "2r + rθ = 36, ½r²θ = 80 ⇒ r² − 18r + 80 = 0 ⇒ r = 8 or 10.", figDoc({ items: sector(10, 1.6, { lr: "r", lth: "θ" }) })),
  num("For the sector above with the larger radius, find θ.", 1.6, "rθ = 16.", null, 0.001),
  num(S`A sector has fixed perimeter 20. Find the radius that gives the largest area.`, 5, "A = ½r(20 − 2r) = 10r − r², maximum at r = 5."),
  num(S`For the sector of perimeter 20 with maximum area, find θ.`, 2, "rθ = 10, r = 5."),
  num("Find the area of the minor segment cut off by a chord of length 12 in a circle of radius 10 (2 d.p.).", d2(50 * (2 * Math.asin(0.6) - Math.sin(2 * Math.asin(0.6)))), "θ = 2 sin⁻¹(0.6).", figDoc({ items: sector(10, 2 * Math.asin(0.6), { lr: "10", lth: "θ", segment: true }) }), 0.01),
  num(S`Two circles of radius 6 have centres 6 apart. Find the area of their overlap (2 d.p.).`, d2(2 * 18 * ((2 * PI) / 3 - Math.sin((2 * PI) / 3))), "Two segments with angle 2π/3.", null, 0.01),
  num(S`A belt passes around two pulleys of radius 10 cm whose centres are 40 cm apart. Find the total length of the belt (2 d.p.).`, d2(80 + 20 * PI), "Two straight parts of 40 + two semicircles.", null, 0.01),
  mc("A sector of radius r and angle θ is rolled into a cone. The cone's base radius is:", S`$\frac{r\theta}{2\pi}$`, [S`$r\theta$`, S`$\frac{r}{\theta}$`, S`$\frac{\theta}{2\pi}$`], "Arc length = base circumference."),
  num(S`A sector of radius 12 and angle $\frac{2\pi}{3}$ is rolled into a cone. Find the base radius.`, 4, "8π = 2πR.", figDoc({ items: sector(12, (2 * PI) / 3, { lr: "12", lth: "2π/3", ls: "8π" }) })),
  num(S`For the same cone, find its height (2 d.p.).`, d2(Math.sqrt(144 - 16)), "Slant height 12, base radius 4.", null, 0.01),
  num(S`In a sector with angle θ, the triangle formed by the two radii and the chord has the same area as the segment. Find θ (3 d.p.) with a GDC.`, 1.896, "θ − sin θ = sin θ ⇒ θ = 2 sin θ.", null, 0.002),
  tf("For a fixed radius, sector area is proportional to the angle.", true, "A = ½r²θ."),
  ms("A sector has r = 4 and θ = 2.5. Which are correct? Select all.", ["arc = 10", "area = 20", "perimeter = 18", "the segment area = 20 − 8 sin 2.5"], [0, 1, 2, 3], "All correct."),
  num("The arc of a sector is 3 times its radius. Find θ in degrees (1 d.p.).", d2((3 * 180) / PI), "θ = 3 rad.", null, 0.05),
  num(S`A pendulum of length 1.2 m swings through 24°. Find the arc length of the swing (3 d.p.).`, Math.round(1.2 * (24 * PI) / 180 * 1000) / 1000, "Convert 24°.", null, 0.001),
  mc("The shaded region shown is a sector of radius 9 minus a sector of radius 5, both with angle 1.2 rad. Its area is:", "33.6", ["48.6", "15.0", "67.2"], "½(81 − 25)(1.2).", figDoc({ items: [...sector(9, 1.2, { lr: "9", lth: "1.2" }), ...sector(5, 1.2, { lr: "5", lth: "", fill: "white" })] })),
  num(S`An annulus sector between radii 6 and 10 has angle 0.9 rad. Find its perimeter.`, 22.4, "Arcs 9 + 5.4 and two radial edges of 4.", null, 0.001),
  num(S`The area of a sector is 25 and its arc length is 10. Find the radius.`, 5, "A = ½ r s."),
  mc(S`Which sector has the larger area: radius 5 with angle 2, or radius 6 with angle 1.4?`, "radius 6, angle 1.4", ["radius 5, angle 2", "they are equal", "cannot tell"], "½ × 25 × 2 = 25 and ½ × 36 × 1.4 = 25.2."),
  num(S`A circular track has inner radius 30 m and outer radius 36 m. Find the extra distance run on the outer lane in one lap (2 d.p.).`, d2(12 * PI), "2π(36 − 30).", null, 0.01),
];
