// 11.1 Distance, Volume and Surface Area in 3D — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, cylinder, cone, pyramid, sphere, cuboidDiag } from "../figs11.mjs";

const S = String.raw;
const d1 = (v) => Math.round(v * 10) / 10, d2 = (v) => Math.round(v * 100) / 100;

export const TOPIC = "11.1 Distance, Volume and Surface Area in 3D";
export const Q = [
  num(S`The distance from $A(1,2,3)$ to $B(4,k,7)$ is $\sqrt{50}$. Find the positive value of $k-2$.`, 5, "9 + (k − 2)² + 16 = 50."),
  num(S`$M(2,-1,5)$ is the midpoint of $PQ$ with $P(-3,4,1)$. Find the sum of the coordinates of $Q$.`, 10, "Q = (7, −6, 9)."),
  num(S`A cone and a sphere have the same radius 6 and the same volume. Find the height of the cone.`, 24, "⅓π36h = 288π."),
  num(S`A cylinder of radius 4 holds the same volume as a sphere of radius 6. Find the cylinder's height.`, 18, "16πh = 288π."),
  num(S`A square pyramid has slant edges 13 and base side $10\sqrt2$. Find its height.`, 12, "Half-diagonal 10: √(169 − 100)."),
  num(S`For the pyramid in the previous question, find its volume.`, 800, "⅓ × 200 × 12."),
  num(S`A solid is a cylinder (radius 3, height 7) with a hemisphere of radius 3 on top. Find its total surface area as a multiple of $\pi$: k = ?`, 69, "base 9π + curved 42π + hemisphere 18π.", figDoc({ items: [...cylinder(3, 7, { lr: "r = 3", lh: "7" })] })),
  num(S`For the same solid, find its volume as a multiple of $\pi$: k = ?`, 81, "63π + 18π."),
  num(S`A cone has curved surface area $65\pi$ and radius 5. Find its volume as a multiple of $\pi$: k = ?`, 100, "l = 13, h = 12; ⅓π25 × 12."),
  mc("A sphere is enlarged so its surface area is multiplied by 9. Its volume is multiplied by:", "27", ["9", "3", "81"], "Scale factor 3."),
  num(S`A cuboid has a square base of side $x$ and height 6. Its space diagonal is 11. Find $x$ (2 d.p.).`, d2(Math.sqrt((121 - 36) / 2)), "2x² + 36 = 121.", figDoc({ items: cuboidDiag(6.52, 6.52, 6, { ll: "x", lw: "x", lh: "6" }) }), 0.01),
  num(S`Water fills a cylinder of radius 5 to a depth of 8. A sphere of radius 3 is dropped in and is fully submerged. Find the rise in water level (2 d.p.).`, d2(36 / 25), "36π = 25πh.", null, 0.01),
  num(S`A cone of radius 6 and height 8 is cut horizontally halfway up. Find the volume of the bottom part (frustum) as a multiple of $\pi$: k = ?`, 84, "96π − 12π.", figDoc({ items: cone(6, 8, { lr: "r = 6", lh: "h = 8", ls: "" }) })),
  ms("Which double when the radius doubles (other dimensions fixed)? Select all.", ["the curved area of a cylinder", "the circumference of a sphere's great circle", "the volume of a cylinder", "the surface area of a sphere"], [0, 1], "Volume ×4; sphere area ×4."),
  tf(S`The points $(1,2,3)$, $(3,5,9)$ and $(5,8,15)$ lie on a straight line.`, true, "Equal steps (2, 3, 6) each time."),
  num(S`Find the perimeter of the triangle with vertices $(0,0,0)$, $(3,4,0)$ and $(3,4,12)$.`, 30, "5 + 12 + 13."),
  mc("A pyramid and a prism have the same base and the same height. The ratio of their volumes is:", "1 : 3", ["1 : 2", "1 : 1", "2 : 3"], "⅓."),
  num(S`A hemispherical bowl has inner radius 9 cm. How many litres does it hold (2 d.p.)? (1 L = 1000 cm³)`, d2((2 / 3) * Math.PI * 729 / 1000), "⅔π(729) cm³.", figDoc({ items: sphere(9, { lr: "r = 9" }) }), 0.01),
  num(S`A regular tetrahedron-shaped pyramid has a triangular base of area 18 and volume 42. Find its height.`, 7, "⅓ × 18 × h = 42."),
  mc("The square pyramid shown has every edge 8. Its height is:", S`$4\sqrt2$`, ["8", S`$4\sqrt3$`, "4"], "Half-diagonal 4√2: √(64 − 32).", figDoc({ items: pyramid(8, 5.66, { lb: "8", lh: "h", ls: "8" }) })),
];
