// 5.7 Volume — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, triPrism, pyramid } from "./fig.mjs";

export const TOPIC = "5.7 Volume";
export const Q = [
  num(`A metal cube of edge 10 cm is melted and recast into a cylinder of radius 5 cm. How tall is the cylinder (2 decimal places)?`, 12.73, "1000 = 25πh → h ≈ 12.73.", null, 0.006),
  num(`Spherical ball bearings of radius 0.5 cm are made from a 1000 cm³ block of steel. How many whole bearings can be made?`, 1909, "Each ≈ 0.5236 cm³; 1000 ÷ 0.5236 ≈ 1909.9."),
  num(`An open box is made from a 40 cm by 30 cm sheet by cutting 5 cm squares from the corners. Find its volume.`, 3000, "30 × 20 × 5."),
  num(`Water flows into a cylindrical tank of radius 1.5 m at 200 L/min. How many minutes until the water is 2 m deep (1 decimal place)?`, 70.7, "π(2.25)(2) = 4.5π m³ ≈ 14 137 L ÷ 200.", null, 0.06),
  num(`A cone-shaped paper cup has radius 4 cm and height 9 cm. It is filled to half its height. What fraction of the full cup is filled? Give a decimal.`, 0.125, "Similar cone with k = ½: volume × ⅛."),
  num(`A tent is a triangular prism with an isosceles triangle end: base 2.4 m, sloping sides 2 m, length 3.5 m. Find its volume (2 decimal places).`, 6.72, "Height √(4 − 1.44) = 1.6; ½ × 2.4 × 1.6 × 3.5.", figDoc({ w: 260, items: triPrism(2.4, 1.6, 3.5, { lb: "2.4 m", lt: "", lL: "3.5 m", ax: 1.2 }) }), 0.006),
  num(`A square pyramid has base 10 m and slant height 13 m. Find its volume.`, 400, "h = √(169 − 25) = 12; ⅓ × 100 × 12.", figDoc({ w: 220, items: pyramid(10, 12, { lb: "10 m", lh: "", ls: "13 m" }) })),
  num(`A cylinder fits exactly inside a cube of edge 8 cm (same height, touching all four sides). What percent of the cube does it fill (1 decimal place)?`, 78.5, "π(4)²(8) ÷ 512 = π/4.", null, 0.06),
  num(`A sphere fits exactly inside a cube of edge 6 cm. Find the empty volume in the cube (1 decimal place).`, 102.9, "216 − 36π ≈ 102.9.", null, 0.06),
  tf(`Doubling the radius of a sphere multiplies its volume by 8.`, true, "r³ → (2r)³ = 8r³."),
  num(`A cylinder has volume 500 cm³. A second cylinder has double the radius and half the height. Find its volume.`, 1000, "× 4 × ½ = × 2."),
  num(`A grain silo is a cylinder (r = 4 m, h = 12 m) with a hemisphere roof. Find its volume (nearest m³).`, 737, "192π + (2/3)π(64) ≈ 603.2 + 134.0.", null, 0.6),
  ms(`Which double the volume of a cylinder? Select all.`, ["double the height", "double the radius", "multiply the radius by √2", "double the radius and halve the height"], [0, 2, 3], "V ∝ r²h."),
  num(`A cone has volume 100π cm³ and height 12 cm. Find its radius.`, 5, "⅓πr²(12) = 100π → r² = 25."),
  num(`Two similar cones have heights 6 cm and 9 cm. The smaller holds 80 mL. How much does the larger hold?`, 270, "k = 1.5; k³ = 3.375."),
  num(`A rectangular aquarium 60 cm × 30 cm has water 25 cm deep. A rock is added and the water rises 1.5 cm. Find the rock's volume (cm³).`, 2700, "60 × 30 × 1.5."),
  mc(`A spherical scoop of ice cream (r = 3 cm) melts into a cone (r = 3 cm, h = 10 cm). Will the cone overflow?`, "yes — the ice cream (36π cm³) is more than the cone holds (30π cm³)", ["no — it fills only part of the cone", "it fills the cone exactly", "cannot tell"], "Sphere ⁴⁄₃π(27) = 36π ≈ 113 cm³; cone ⅓π(9)(10) = 30π ≈ 94 cm³."),
  num(`A frustum (a cone with its top cut off) is made from a cone of radius 6 and height 12 by removing a top cone of radius 3 and height 6. Find its volume (1 decimal place).`, 395.8, "⅓π(36)(12) = 144π; ⅓π(9)(6) = 18π; 144π − 18π = 126π ≈ 395.8.", null, 0.06),
  num(`A cube's volume is 343 cm³. Its edges are increased by 1 cm. Find the increase in volume.`, 169, "7 → 8: 512 − 343."),
  num(`How many litres of water does a hemispherical tank with diameter 3 m hold (nearest litre)?`, 7069, "⅔π(1.5)³ ≈ 7.069 m³.", null, 1),
];
