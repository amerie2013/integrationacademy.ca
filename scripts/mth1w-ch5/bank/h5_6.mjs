// 5.6 Changing Dimensions: Area — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, rect } from "./fig.mjs";

const arc = (cx, cy, r, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const TOPIC = "5.6 Changing Dimensions: Area";
export const Q = [
  num(`A farmer has 300 m of fence to make two equal side-by-side rectangular pens (one divider parallel to the width). Find the greatest total area (m²).`, 3750, "3w + 2l = 300; best w = 50, l = 75."),
  num(`With 120 m of fence, the farmer builds a rectangular pen against a barn wall. Find the greatest area.`, 1800, "w = 30, l = 60."),
  num(`Find the shaded area: a 10 by 10 square with a quarter circle of radius 10 removed (2 decimal places).`, 21.46, "100 − 25π ≈ 21.46.", figDoc({ w: 220, items: [...rect(10, 10, { lw: "10", lh: "10", fill: "green" }), { poly: [[0, 0], ...arc(0, 0, 10, 0, 90)], fill: "#fff", color: "green" }] }), 0.006),
  num(`A circle has the same perimeter as a 9 cm square. Find the circle's area (1 decimal place).`, 103.1, "36 = 2πr → r ≈ 5.73; πr² ≈ 103.1.", null, 0.06),
  num(`A triangular sail has base 4 m and height 7 m. A model of it has area 0.56 m². What is the scale factor k of the model?`, 0.2, "14 → 0.56: k² = 0.04."),
  num(`A rectangle's length is increased by 20% and its width decreased by 20%. By what percent does the area change? (Enter a negative number for a decrease.)`, -4, "1.2 × 0.8 = 0.96."),
  num(`An isosceles triangle has equal sides 13 cm and base 24 cm. Find its area.`, 60, "Height √(169 − 144) = 5; ½ × 24 × 5."),
  num(`A running track encloses a rectangle 100 m by 60 m with semicircular ends of diameter 60 m. Find the area inside the track (nearest m²).`, 8827, "6000 + 900π ≈ 8827.4.", null, 0.6),
  tf(`For a fixed perimeter of 40 m, a circle encloses about 27% more area than the best rectangle.`, true, "Square 100 m²; circle 400/π ≈ 127.3 m²."),
  num(`A rectangle with perimeter 34 has a diagonal of 13. Find its area.`, 60, "l + w = 17, l² + w² = 169 → 5 × 12."),
  ms(`A shape is scaled by k. Which are true? Select all.`, ["if k = 3, the area is × 9", "if the area is × 25, then k = 5", "if k = 0.1, the area is × 0.01", "if the perimeter doubles, the area doubles"], [0, 1, 2], "Area × k²; perimeter × k."),
  num(`A 2 m wide path runs around a 20 m by 12 m pool. Paving costs 45 dollars per m². Find the cost of the path.`, 6480, "(24 × 16) − 240 = 144 m²."),
  num(`A square has diagonal 12 cm. Find its area.`, 72, "d²/2."),
  num(`A rhombus has diagonals 10 and 24. Find its area.`, 120, "½ × 10 × 24."),
  num(`The greatest area of a rectangle with perimeter P is 169 m². Find P.`, 52, "Square of side 13."),
  num(`An equilateral triangle has side 6. Find its area (2 decimal places).`, 15.59, "Height √27 ≈ 5.196; ½ × 6 × 5.196.", null, 0.006),
  num(`A map has scale 1 : 20 000. A field on the map has area 4.5 cm². Find the real area in hectares (1 ha = 10 000 m²).`, 18, "4.5 × 4 × 10⁸ cm² = 1.8 × 10⁹ cm² = 180 000 m²."),
  mc(`A rectangle is 3 times as long as wide. To double its area while keeping its shape, multiply each side by…`, "√2 ≈ 1.41", ["2", "4", "1.5"], "k² = 2."),
  num(`Two circles have radii 3 and 4. A third circle has area equal to the sum of their areas. Find its radius.`, 5, "9π + 16π = 25π."),
  num(`A garden is a semicircle on top of a 10 m by 6 m rectangle (the semicircle's diameter is the 10 m side). Find the total area (1 decimal place).`, 99.3, "60 + 12.5π ≈ 99.27.", null, 0.06),
];
