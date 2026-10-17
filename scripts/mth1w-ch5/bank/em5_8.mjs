// 5.8 Surface Area — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, prismNet, cylinderNet, pyramid } from "./fig.mjs";

export const E = [
  num(`Find the surface area of a cube with edge 4 cm.`, 96, "6 × 16."),
  num(`Find the surface area of a rectangular prism 3 × 2 × 1.`, 22, "2(6 + 3 + 2)."),
  num(`Find the surface area of a closed cylinder with radius 1 m and height 2 m, to 2 decimal places.`, 18.85, "2π + 4π = 6π.", null, 0.006),
  num(`Find the surface area of a sphere with radius 1 cm, to 2 decimal places.`, 12.57, "4π.", null, 0.006),
  mc(`A flat pattern that folds into a solid is called a…`, "net", ["face", "prism", "cross-section"], "Unfold the solid."),
  num(`How many faces does a rectangular prism have?`, 6, "Three pairs."),
  num(`How many faces does a square pyramid have?`, 5, "1 square + 4 triangles."),
  tf(`Surface area is measured in cubic units.`, false, "Square units: it is an area."),
  num(`Find the area of the curved side (label) of a can with radius 2 cm and height 5 cm, to 1 decimal place.`, 62.8, "2π(2)(5) = 20π.", null, 0.06),
  num(`A square pyramid has base 4 and slant height 5. Find the area of one triangular face.`, 10, "½ × 4 × 5."),
  num(`Find the surface area of that pyramid (base 4, slant height 5).`, 56, "16 + 4 × 10."),
  num(`Every length of a solid is doubled. By what factor is the surface area multiplied?`, 4, "2²."),
  num(`The net shows a box. Find its surface area.`, 52, "2(4×3) + 2(4×2) + 2(3×2) = 24 + 16 + 12.", figDoc({ w: 300, items: prismNet(4, 3, 2) })),
  mc(`The curved surface of a cylinder unrolls into a…`, "rectangle", ["circle", "triangle", "sector"], "Length 2πr, width h."),
  num(`An open box (no lid) is 5 × 5 × 5. Find its outside surface area.`, 125, "5 faces of 25."),
  num(`Find the total area of the two circular ends of a cylinder with radius 3 cm (1 decimal place).`, 56.5, "2 × 9π.", null, 0.06),
  tf(`The slant height of a cone is always longer than its height.`, true, "It is the hypotenuse of the triangle with legs h and r."),
  num(`A cone has radius 3 and slant height 5. Find its curved surface area, to 1 decimal place.`, 47.1, "π(3)(5) = 15π.", null, 0.06),
  num(`A cube has surface area 54 cm². Find its edge.`, 3, "54 ÷ 6 = 9 = 3²."),
  num(`Every length of a solid is tripled. By what factor is its surface area multiplied?`, 9, "3²."),
];

export const M = [
  num(`Find the surface area of a 10 cm × 8 cm × 6 cm box.`, 376, "2(80 + 60 + 48)."),
  num(`A cylinder has radius 5 cm and height 8 cm. Find its total surface area (1 decimal place).`, 408.4, "50π + 80π = 130π.", null, 0.06),
  num(`A square pyramid has base 12 cm and height 8 cm. Find its slant height.`, 10, "√(64 + 36)."),
  num(`Find the surface area of the pyramid with base 12 and height 8.`, 384, "144 + 4 × ½ × 12 × 10.", figDoc({ w: 220, items: pyramid(12, 8, { lb: "12", lh: "8", ls: "s" }) })),
  num(`A cone has radius 5 cm and height 12 cm. Find its total surface area (1 decimal place).`, 282.7, "s = 13: 25π + 65π = 90π.", null, 0.06),
  num(`A sphere has diameter 14 cm. Find its surface area (1 decimal place).`, 615.8, "4π(49) = 196π.", null, 0.06),
  num(`A triangular prism has right-triangle ends with legs 6 and 8 and length 10. Find its surface area.`, 288, "Ends 2 × 24 = 48; sides 10(6 + 8 + 10) = 240."),
  num(`A can with no top has radius 4 cm and height 10 cm. Find its outside surface area (1 decimal place).`, 301.6, "16π + 80π = 96π.", null, 0.06),
  num(`The net of a cylinder is shown with r = 3 and h = 7. Find the length of the rectangle (1 decimal place).`, 18.8, "2π(3) = 6π.", figDoc({ w: 240, items: cylinderNet(3, 7, { lr: "r = 3", lh: "7", lc: "?" }) }), 0.06),
  tf(`Doubling the radius of a sphere doubles its surface area.`, false, "It multiplies it by 4."),
  num(`A cube has edge 5 cm. A second cube has edge 10 cm. How many times as much surface area does it have?`, 4, "2²."),
  num(`A shed has a 3 m × 2 m floor and 2.5 m walls with a flat roof. Find the area of the four walls plus the roof.`, 31, "Walls 2.5 × 10 = 25; roof 6."),
  ms(`Which solids have a surface area of exactly 24 square units? Select all.`, ["a cube with edge 2", "a 4 × 2 × 1 box", "a 3 × 2 × 1 box", "a 3 × 2 × 1.2 box"], [0, 3], "2(lw + lh + wh): 24; 28; 22; 2(6 + 3.6 + 2.4) = 24."),
  num(`Paint covers 10 m² per litre. How many litres cover the outside of a 2 m cube (all six faces)?`, 2.4, "24 ÷ 10."),
  num(`A hemisphere (half ball) of radius 6 cm has a flat base. Find its total surface area (1 decimal place).`, 339.3, "2π(36) + π(36) = 108π.", null, 0.06),
  mc(`For a cone, which is used to find the curved surface area?`, "the radius and the slant height", ["the radius and the height", "the diameter and the height", "only the height"], "Lateral area πrs."),
  num(`A square pyramid has base 8 and slant height 5. Find its height.`, 3, "√(25 − 16)."),
  num(`A box 20 × 10 × 5 cm is wrapped with paper. 15% extra paper is needed for overlaps. How much paper is needed (cm²)?`, 805, "SA 700 × 1.15."),
  num(`A cylinder has surface area 150π and radius 5. Find its height.`, 10, "50π + 10πh = 150π."),
  num(`A model has surface area 60 cm² and scale 1 : 10. Find the real object's surface area in cm².`, 6000, "× 100."),
];
