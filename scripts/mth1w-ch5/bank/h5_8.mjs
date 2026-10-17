// 5.8 Surface Area — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, cone, prism } from "./fig.mjs";

export const TOPIC = "5.8 Surface Area";
export const Q = [
  num(`A cone has volume 96π cm³ and radius 6 cm. Find its total surface area (1 decimal place).`, 301.6, "h = 8, s = 10: 36π + 60π = 96π.", null, 0.06),
  num(`A cube has volume 125 cm³. Find its surface area.`, 150, "Edge 5: 6 × 25."),
  num(`A square pyramid has surface area 340 cm² and base 10 cm. Find its slant height.`, 12, "100 + 20s = 340."),
  num(`A cylinder's height equals its diameter, and its total surface area is 150π cm². Find its radius.`, 5, "2πr² + 2πr(2r) = 6πr² = 150π."),
  num(`Two cubes of edge 3 cm are glued face to face. Find the surface area of the new solid.`, 90, "2 × 54 − 2 × 9."),
  num(`A 4 × 4 × 4 cube has a 2 × 2 square hole drilled straight through the middle of two opposite faces. Find the new surface area.`, 120, "96 − 2(4) + 4 × (2 × 4) = 120."),
  num(`A silo is a cylinder (r = 3 m, h = 10 m) with a hemisphere roof; the floor is not painted. Find the painted area (1 decimal place).`, 245, "60π + 18π = 78π ≈ 245.0.", null, 0.06),
  num(`A cone and a cylinder each have radius 5 and height 12. How much more total surface area does the cylinder have (1 decimal place)?`, 251.3, "Cylinder 50π + 120π = 170π; cone 25π + 65π = 90π; difference 80π.", null, 0.06),
  tf(`If a solid's volume is multiplied by 27 by scaling, its surface area is multiplied by 9.`, true, "k³ = 27 → k = 3 → k² = 9."),
  num(`A sphere has surface area 324π cm². Find its volume in terms of π: give the number multiplying π.`, 972, "r = 9; ⁴⁄₃ × 729 = 972."),
  ms(`A closed box holds 64 cm³. Which designs use less than 100 cm² of material? Select all.`, ["4 × 4 × 4", "8 × 4 × 2", "16 × 2 × 2", "8 × 8 × 1"], [0], "96; 2(32 + 16 + 8) = 112; 2(32 + 32 + 4) = 136; 2(64 + 8 + 8) = 160."),
  num(`A tent is a square pyramid with base 3 m and height 2 m (no floor). Find the fabric needed (2 decimal places).`, 15, "s = √(4 + 2.25) = 2.5; 4 × ½ × 3 × 2.5."),
  num(`A conical roof has diameter 8 m and height 3 m. Shingles cost 32 dollars per m². Find the cost (nearest dollar).`, 2011, "s = 5: π(4)(5) = 20π ≈ 62.83 m² × 32.", figDoc({ w: 220, items: cone(4, 3, { lr: "4 m", lh: "3 m", ls: "s" }) }), 1),
  num(`A prism-shaped room is 6 m × 5 m × 2.4 m. Find the area of the walls and ceiling to be painted, minus a 2 m² door and two 1.5 m² windows.`, 77.8, "Walls 2.4 × 22 = 52.8; ceiling 30; minus 5.", figDoc({ w: 260, items: prism(6, 5, 2.4, { ll: "6 m", lw: "5 m", lh: "2.4 m" }) }), 0.06),
  num(`A hemisphere of radius 5 sits on top of a cylinder of radius 5 and height 8 (the cylinder's bottom is closed). Find the total exposed surface area (1 decimal place).`, 486.9, "Hemisphere 50π + side 80π + base 25π = 155π.", null, 0.06),
  num(`An open cylindrical bucket (no lid) holds 10 L and has radius 12 cm. Find its outside surface area (nearest cm²).`, 2119, "h = 10 000 ÷ (144π) ≈ 22.10; 144π + 2π(12)(22.10) ≈ 452.4 + 1666.7.", null, 1),
  mc(`For a fixed volume, which closed cylinder uses the least material?`, "height equal to the diameter", ["height equal to the radius", "height twice the diameter", "very tall and thin"], "The best can has h = 2r."),
  num(`A cube's surface area is 600 cm². Its edges are halved. Find the new surface area.`, 150, "× ¼."),
  num(`Find the surface area of a square pyramid with every edge 10 cm long (all triangles equilateral), to 1 decimal place.`, 273.2, "Slant √75 ≈ 8.66: 100 + 4 × ½ × 10 × 8.66.", null, 0.06),
  num(`A ball has volume 288π cm³. Find its surface area in terms of π: give the number multiplying π.`, 144, "r³ = 216 → r = 6; 4 × 36."),
];
