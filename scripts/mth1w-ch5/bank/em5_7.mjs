// 5.7 Volume — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, prism, cylinder, cone } from "./fig.mjs";

export const E = [
  num(`Find the volume of a rectangular prism 5 cm × 4 cm × 2 cm.`, 40, "lwh."),
  num(`Find the volume of a cube with edge 3 m.`, 27, "3³."),
  num(`Find the volume of a cylinder with radius 2 cm and height 5 cm, to 1 decimal place.`, 62.8, "20π.", null, 0.06),
  num(`A prism has base area 12 cm² and height 7 cm. Find its volume.`, 84, "Bh."),
  num(`A pyramid has base area 30 m² and height 6 m. Find its volume.`, 60, "⅓ × 30 × 6."),
  num(`Find the volume of a cone with radius 3 cm and height 4 cm, to 1 decimal place.`, 37.7, "⅓ × 9π × 4 = 12π.", null, 0.06),
  num(`Find the volume of a sphere with radius 3 cm, to 1 decimal place.`, 113.1, "⁴⁄₃ × 27π = 36π.", null, 0.06),
  tf(`A cone holds one third of the cylinder with the same base and height.`, true, "V = ⅓πr²h."),
  tf(`If every edge of a cube is doubled, its volume doubles.`, false, "It becomes 2³ = 8 times as large."),
  num(`Every length of a solid is tripled. By what factor is the volume multiplied?`, 27, "3³."),
  num(`How many mL does a 250 cm³ cup hold?`, 250, "1 cm³ = 1 mL."),
  mc(`Volume is measured in…`, "cubic units", ["square units", "linear units", "degrees"], "cm³, m³."),
  num(`Find the volume of the box in the figure.`, 60, "5 × 3 × 4.", figDoc({ w: 240, items: prism(5, 3, 4, { ll: "5 cm", lw: "3 cm", lh: "4 cm" }) })),
  num(`A triangular prism has a triangle base with area 6 m² and length 10 m. Find its volume.`, 60, "Bh."),
  num(`A cube has volume 64 cm³. Find its edge.`, 4, "∛64."),
  mc(`Which formula gives the volume of a cylinder?`, "πr²h", ["2πrh", "⅓πr²h", "4πr²"], "Base area × height."),
  num(`A can holds 330 mL. How many cm³ is that?`, 330, "1 mL = 1 cm³."),
  num(`Find the volume of a square pyramid with base 6 m and height 5 m.`, 60, "⅓ × 36 × 5."),
  num(`How many 1 cm cubes fill a box 10 cm × 10 cm × 10 cm?`, 1000, "10³."),
  num(`A box 2 m × 1 m × 0.5 m holds how many litres?`, 1000, "1 m³ = 1000 L."),
];

export const M = [
  num(`A cylindrical tank has diameter 2 m and height 3 m. Find its capacity in litres (nearest litre).`, 9425, "π(1)²(3) = 3π m³ ≈ 9.425 m³.", null, 1),
  num(`A cone has radius 6 cm and slant height 10 cm. Find its volume (1 decimal place).`, 301.6, "h = 8: ⅓π(36)(8) = 96π.", null, 0.06),
  num(`A triangular prism has a right-triangle base with legs 3 and 4 and length 9. Find its volume.`, 54, "½ × 3 × 4 × 9."),
  num(`A sphere has diameter 10 cm. Find its volume (1 decimal place).`, 523.6, "r = 5: ⁴⁄₃π(125).", null, 0.06),
  num(`A cylinder has volume 200π cm³ and radius 5 cm. Find its height.`, 8, "25πh = 200π."),
  num(`A pyramid has volume 48 cm³ and a 4 cm by 4 cm base. Find its height.`, 9, "⅓ × 16 × h = 48."),
  num(`A box's length, width and height are all doubled. Its old volume was 15 cm³. Find the new volume.`, 120, "15 × 8."),
  num(`A cylinder's height is doubled and its radius is unchanged. By what factor does the volume change?`, 2, "V ∝ h."),
  num(`A cylinder's radius is doubled and its height is unchanged. By what factor does the volume change?`, 4, "V ∝ r²."),
  num(`Find the volume of the solid: a cylinder (r = 3, h = 10) with a cone (r = 3, h = 4) on top, to 1 decimal place.`, 320.4, "90π + 12π = 102π.", figDoc({ w: 200, items: [...cylinder(3, 10, { lr: "", lh: "10" }), ...cone(3, 4, { lr: "r = 3", lh: "4" }).map((it) => shiftY(it, 10))] }), 0.06),
  num(`A hemisphere bowl has radius 9 cm. How many mL does it hold (nearest mL)?`, 1527, "⅔π(729) = 486π ≈ 1526.8.", null, 1),
  ms(`Which solids have volume 36π? Select all.`, ["sphere with r = 3", "cylinder with r = 3, h = 4", "cone with r = 3, h = 12", "cylinder with r = 6, h = 3"], [0, 1, 2], "36π, 36π, 36π, 108π."),
  num(`A swimming pool is 25 m × 10 m × 2 m. How many litres of water fill it?`, 500000, "500 m³ × 1000."),
  tf(`A sphere of radius r holds exactly two thirds of a cylinder of radius r and height 2r.`, true, "⁴⁄₃πr³ = ⅔ × 2πr³."),
  num(`A concrete slab is 6 m × 4 m × 15 cm. Find its volume in m³.`, 3.6, "15 cm = 0.15 m."),
  num(`A cone and a cylinder have the same base and the same volume. The cylinder is 5 cm tall. How tall is the cone?`, 15, "⅓h = 5."),
  num(`A model car is built at scale 1 : 18. The real car's fuel tank holds 58 320 cm³. What would the model's tank hold (cm³)?`, 10, "58 320 ÷ 18³ = 58 320 ÷ 5832."),
  num(`Find the volume of a hollow pipe with outer radius 5 cm, inner radius 4 cm and length 20 cm (1 decimal place).`, 565.5, "π(25 − 16)(20) = 180π.", null, 0.06),
  num(`Two similar boxes have volumes 2 L and 54 L. What is the ratio of their heights (large : small)?`, 3, "∛27."),
  mc(`Which holds more: a cube of edge 10 cm or a sphere of diameter 12 cm?`, "the cube", ["the sphere", "they are equal", "cannot tell"], "Cube 1000 cm³; sphere ⁴⁄₃π(6)³ = 288π ≈ 904.8 cm³."),
];

function shiftY(it, dy) {
  const m = (p) => [p[0], p[1] + dy];
  const o = { ...it };
  if (o.poly) o.poly = o.poly.map(m); if (o.seg) o.seg = o.seg.map(m); if (o.dot) o.dot = m(o.dot); if (o.at) o.at = m(o.at);
  if (o.circle) o.circle = [o.circle[0], o.circle[1] + dy, o.circle[2]]; if (o.ellipse) o.ellipse = [o.ellipse[0], o.ellipse[1] + dy, o.ellipse[2], o.ellipse[3]];
  if (o.right) o.right = o.right.map(m); if (o.dim) o.dim = o.dim.map(m); if (o.arc) o.arc = o.arc.map(m);
  return o;
}
