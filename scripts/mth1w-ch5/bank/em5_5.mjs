// 5.5 Changing Dimensions: Perimeter — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, polygon } from "./fig.mjs";

const arc = (cx, cy, r, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const E = [
  num(`Find the perimeter of a 7 cm by 4 cm rectangle.`, 22, "2(7 + 4)."),
  num(`Find the perimeter of a square with side 9 m.`, 36, "4 × 9."),
  num(`Find the circumference of a circle with diameter 10 cm, to 1 decimal place.`, 31.4, "10π.", null, 0.06),
  num(`Find the circumference of a circle with radius 3 m, to 1 decimal place.`, 18.8, "6π.", null, 0.06),
  num(`A triangle has sides 5, 6 and 9. Find its perimeter.`, 20, "5 + 6 + 9."),
  num(`Every side of a shape is doubled. By what factor is the perimeter multiplied?`, 2, "Perimeter scales by k."),
  num(`A rectangle's perimeter is 30 cm. It is enlarged by a scale factor of 3. Find the new perimeter.`, 90, "30 × 3."),
  num(`A 10 × 4 rectangle has its length increased by 2. By how much does the perimeter increase?`, 4, "Two sides each grow by 2."),
  tf(`If you double the radius of a circle, its circumference doubles.`, true, "C = 2πr."),
  mc(`For a fixed area, which rectangle has the least perimeter?`, "a square", ["a long thin rectangle", "any rectangle — they are all equal", "a rectangle twice as long as wide"], "The most compact rectangle."),
  num(`A regular hexagon has side 4 cm. Find its perimeter.`, 24, "6 × 4."),
  num(`A square has perimeter 48 cm. Find its side.`, 12, "48 ÷ 4."),
  num(`A rectangle has area 16 m². What is the least possible perimeter?`, 16, "4 × 4 square."),
  num(`A shape's perimeter is 40 cm. It is reduced by a scale factor of 0.5. Find the new perimeter.`, 20, "40 × 0.5."),
  tf(`Adding 3 cm to the length of a rectangle adds 3 cm to its perimeter.`, false, "It adds 6 cm (two sides)."),
  num(`Find the perimeter of a semicircle region with diameter 4 (curved part plus diameter), to 2 decimal places.`, 10.28, "2π + 4.", null, 0.006),
  num(`A perimeter grows from 15 cm to 45 cm after scaling. Find the scale factor.`, 3, "45 ÷ 15."),
  mc(`Which rectangle with area 24 has the least perimeter?`, "4 × 6", ["1 × 24", "2 × 12", "3 × 8"], "Closest to a square: P = 20."),
  num(`An equilateral triangle has perimeter 27 cm. Find one side.`, 9, "27 ÷ 3."),
  num(`A rectangle 6 m by 3 m is scaled by 4. Find the new length.`, 24, "6 × 4."),
];

export const M = [
  num(`Find the perimeter of the shape: a 10 by 6 rectangle with a semicircle on one 6 side (curved part replaces that side), to 1 decimal place.`, 35.4, "10 + 6 + 10 + 3π.", figDoc({ w: 280, items: [{ poly: [[0, 0], [10, 0], ...arc(10, 3, 3, -90, 90).slice(1, -1), [10, 6], [0, 6]], fill: "green", color: "green" }, { text: "10", at: [5, -0.8], bold: true, color: "blue" }, { text: "6", at: [-0.6, 3], bold: true, color: "blue" }] }), 0.06),
  num(`A rectangle has area 81 m². Find the least possible perimeter.`, 36, "9 × 9."),
  num(`A rectangle of area 50 m² is fenced on three sides (one side is a wall). Find the least fence needed.`, 20, "w = 5, l = 10: 5 + 10 + 5."),
  num(`A rectangle 8 cm by 5 cm has both length and width increased by 3 cm. Find the new perimeter.`, 38, "2(11 + 8)."),
  num(`A circle has circumference 31.4 cm. Its radius is tripled. Find the new circumference (1 decimal place).`, 94.2, "× 3.", null, 0.06),
  num(`Find the perimeter of the L-shape.`, 34, "Same as the 10 × 7 bounding rectangle.", figDoc({ w: 260, items: polygon([[0, 0], [10, 0], [10, 3], [4, 3], [4, 7], [0, 7]], { sides: ["10", "3", "6", "4", "4", "7"], fill: "blue" }) })),
  num(`A running track has straights of 85 m and semicircular ends of radius 36 m. Find the lap length (nearest metre).`, 396, "170 + 72π ≈ 396.2.", null, 0.6),
  num(`A wheel of diameter 70 cm rolls 100 turns. How far does it travel (nearest metre)?`, 220, "100 × 70π cm ≈ 21 991 cm.", null, 0.6),
  tf(`A square and a circle have the same area. The circle has the smaller perimeter.`, true, "A circle has the least perimeter for its area."),
  num(`Two similar triangles have perimeters 18 cm and 63 cm. What is the scale factor?`, 3.5, "63 ÷ 18."),
  ms(`Which changes double the perimeter of a rectangle? Select all.`, ["double the length and the width", "double only the length", "scale by k = 2", "add 2 to every side"], [0, 2], "Only scaling every length by 2."),
  num(`A rectangle's length is 3 times its width and its area is 48 m². Find its perimeter.`, 32, "w = 4, l = 12."),
  num(`A square's area is 100 cm². Its sides are scaled by 1.5. Find the new perimeter.`, 60, "Side 10 → 15; 4 × 15."),
  num(`A garden of area 98 m² against a wall: what is the least fence (3 sides)?`, 28, "w = 7, l = 14."),
  num(`Find the perimeter of a quarter circle region with radius 8 (arc plus two radii), to 1 decimal place.`, 28.6, "4π + 16 ≈ 28.57.", null, 0.06),
  num(`A rectangle 12 × 5 has its length decreased by 4 and its width increased by 4. Find the change in perimeter.`, 0, "−8 + 8."),
  mc(`The perimeter of a figure scaled by k = 0.25 is…`, "one quarter of the original", ["one sixteenth of the original", "four times the original", "unchanged"], "Perimeter × k."),
  num(`Fencing costs 18 dollars per metre. What does it cost to fence the best rectangle of area 64 m²?`, 576, "Square 8 × 8: 32 m × 18."),
  num(`A rectangle has perimeter 50 cm and length 15 cm. Find its width.`, 10, "2(15 + w) = 50."),
  num(`A square is inscribed in a circle of diameter 10 cm. Find the square's perimeter to 1 decimal place.`, 28.3, "Side 10/√2 ≈ 7.07; × 4.", null, 0.06),
];
