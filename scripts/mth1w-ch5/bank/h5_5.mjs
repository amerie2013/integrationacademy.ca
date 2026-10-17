// 5.5 Changing Dimensions: Perimeter — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc } from "./fig.mjs";

const arc = (cx, cy, r, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const TOPIC = "5.5 Changing Dimensions: Perimeter";
export const Q = [
  num(`A rectangular pen of area 200 m² is split into two equal pens by a fence parallel to the width. Find the least total fence (nearest tenth of a metre).`, 69.3, "3w + 2l with lw = 200: best when 3w = 2l → w ≈ 11.55, l ≈ 17.32; fence ≈ 69.3.", null, 0.06),
  num(`A rectangle's perimeter is 60 cm. Its length is decreased by 20% and its width increased by 20%. The original was 20 by 10. Find the new perimeter.`, 56, "16 by 12."),
  num(`Find the perimeter of the shape: a square of side 8 with a semicircle cut out of one side (the arc replaces that side), to 1 decimal place.`, 36.6, "3 × 8 + 4π ≈ 36.57.", figDoc({ w: 220, items: [{ poly: [[0, 0], [8, 0], [8, 8], ...arc(4, 8, 4, 0, -180).slice(1, -1), [0, 8]], fill: "blue", color: "blue" }, { text: "8", at: [4, -0.9], bold: true, color: "blue" }] }), 0.06),
  num(`A circle and a square have the same perimeter, 40 cm. How much larger is the circle's area than the square's (nearest cm²)?`, 27, "Square 100; circle r = 20/π: area 400/π ≈ 127.3.", null, 0.6),
  num(`The scale on a map is 1 : 25 000. A lake's shoreline measures 36 cm on the map. Find the real shoreline length in km.`, 9, "36 × 25 000 = 900 000 cm = 9 km."),
  num(`A farmer needs a rectangular field of 1200 m² along a river (no fence on the river side). Fencing costs 12 dollars/m. Find the least cost.`, 1176, "w = √600 ≈ 24.49, l ≈ 48.99; fence ≈ 97.98 m × 12 ≈ 1175.8.", null, 1),
  num(`A rectangle's perimeter is 46 and its diagonal is 17. Find its area.`, 120, "l + w = 23 and l² + w² = 289 → 8 and 15."),
  num(`A Norman window is a rectangle 1.2 m wide and 1.5 m tall topped by a semicircle. Find the length of trim around it (2 decimal places).`, 6.08, "1.2 + 2(1.5) + 0.6π ≈ 6.085.", null, 0.006),
  tf(`If a rectangle's area is multiplied by 9 by scaling, its perimeter is multiplied by 3.`, true, "k² = 9 → k = 3."),
  num(`A square's perimeter increases by 20 cm when each side is increased by the same amount. By how much was each side increased?`, 5, "4x = 20."),
  ms(`A rectangle has area 36 m². Which perimeters are possible with whole-number sides? Select all.`, ["24", "26", "30", "40"], [0, 1, 2, 3], "6×6: 24; 4×9: 26; 3×12: 30; 2×18: 40."),
  num(`An equilateral triangle and a square have the same perimeter. The triangle's side is 12. Find the square's side.`, 9, "36 ÷ 4."),
  num(`A rectangle is twice as long as it is wide. Both dimensions increase by 5 cm and the perimeter becomes 70 cm. Find the original width.`, 25 / 3, "2(2w + 5 + w + 5) = 70 → 6w + 20 = 70 → w = 8.33.", null, 0.006),
  num(`What is the radius of a circular garden whose edging (circumference) is equal to the perimeter of a 15 m by 10 m rectangle (2 decimal places)?`, 7.96, "50 = 2πr → r ≈ 7.958.", null, 0.006),
  mc(`A 30 m rope encloses a region. Which shape gives the largest area?`, "a circle", ["a square", "an equilateral triangle", "a 10 × 5 rectangle"], "For a fixed perimeter, the circle encloses the most."),
  num(`A frame of uniform width x surrounds a 24 cm by 18 cm photo. Its outer perimeter is 108 cm. Find x.`, 3, "2(24 + 2x + 18 + 2x) = 108 → 84 + 8x = 108."),
  num(`Three identical circles of radius 2 are packed in a row inside a rectangle that just fits them. Find the rectangle's perimeter.`, 32, "12 by 4."),
  num(`A rectangular lot has perimeter 140 m. Its length is 10 m more than its width. Find its area (m²).`, 1200, "4w + 20 = 140 → w = 30, l = 40."),
  num(`A rectangle with perimeter 36 is changed so its length doubles and its width halves. The original was 12 by 6. By how much does the perimeter change?`, 18, "24 by 3: 54 − 36."),
  num(`A path goes around a circular pond of radius 20 m at a constant distance of 3 m from the edge. How much longer is the path than the shoreline (2 decimal places)?`, 18.85, "2π(23) − 2π(20) = 6π.", null, 0.006),
];
