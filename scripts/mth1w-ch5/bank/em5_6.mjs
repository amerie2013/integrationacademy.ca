// 5.6 Changing Dimensions: Area — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, polygon, rect } from "./fig.mjs";

export const E = [
  num(`Find the area of a 9 m by 6 m rectangle.`, 54, "9 × 6."),
  num(`Find the area of a triangle with base 10 cm and height 7 cm.`, 35, "½ × 10 × 7."),
  num(`Find the area of a parallelogram with base 8 and height 5.`, 40, "bh."),
  num(`Find the area of a circle with radius 5 cm, to 1 decimal place.`, 78.5, "25π.", null, 0.06),
  num(`Find the area of a trapezoid with parallel sides 6 and 10 and height 4.`, 32, "½(16)(4)."),
  num(`Every length of a shape is doubled. By what factor is the area multiplied?`, 4, "2²."),
  num(`Every length of a shape is tripled. By what factor is the area multiplied?`, 9, "3²."),
  num(`A shape has area 10 cm². It is scaled by k = 2. Find the new area.`, 40, "10 × 4."),
  tf(`Doubling only the length of a rectangle doubles its area.`, true, "Area = l × w: one factor doubles."),
  tf(`Doubling every side of a square doubles its area.`, false, "It quadruples it."),
  mc(`For a fixed perimeter, which rectangle has the greatest area?`, "a square", ["a long thin rectangle", "they all have the same area", "one with length 3 times the width"], "The most compact rectangle."),
  num(`A rectangle has perimeter 20 m. What is the greatest possible area?`, 25, "5 × 5."),
  num(`A square has area 49 cm². Find its side.`, 7, "√49."),
  num(`Find the area of a circle with diameter 8 cm, to 1 decimal place.`, 50.3, "r = 4: 16π.", null, 0.06),
  num(`Find the area of the composite shape: two rectangles 5 × 3 and 2 × 3 side by side.`, 21, "15 + 6.", figDoc({ w: 220, items: [...rect(5, 3, { lw: "5", lh: "3" }), ...rect(2, 3, { lw: "2", lh: "", fill: "green", at: [5, 0] })] })),
  num(`A square of side 4 is scaled by k = 0.5. Find the new area.`, 4, "Side 2 → area 4."),
  mc(`Area is measured in…`, "square units", ["linear units", "cubic units", "degrees"], "e.g. cm², m²."),
  num(`A picture's area increases from 5 cm² to 45 cm² after scaling. Find the area factor.`, 9, "45 ÷ 5."),
  num(`Find the area of a right triangle with legs 6 and 9.`, 27, "½ × 6 × 9."),
  num(`Find the area of a semicircle with radius 2, to 2 decimal places.`, 6.28, "½ × 4π = 2π.", null, 0.006),
];

export const M = [
  num(`A 15 m by 12 m lawn has a 3 m by 4 m shed on it. Find the area of grass.`, 168, "180 − 12."),
  num(`A circular rug of radius 1.5 m lies in a 5 m by 4 m room. Find the uncovered floor area (2 decimal places).`, 12.93, "20 − 2.25π ≈ 12.93.", null, 0.006),
  num(`Find the area of the trapezoid.`, 66, "½(8 + 14)(6).", figDoc({ w: 260, items: [...polygon([[0, 0], [14, 0], [11, 6], [3, 6]], { sides: ["14", "", "8", ""], fill: "amber", color: "amber" }), { seg: [[3, 0], [3, 6]], color: "red", dash: true }, { text: "6", at: [3.6, 3], color: "red", bold: true }] })),
  num(`A triangle has area 12 cm². It is enlarged by k = 2.5. Find the new area.`, 75, "12 × 6.25."),
  num(`A shape's area grows from 8 to 72 after scaling. Find the scale factor k.`, 3, "√(72 ÷ 8)."),
  num(`A rectangle 10 × 6 has its length increased by 50%. Find the new area.`, 90, "15 × 6."),
  num(`With 44 m of fence, what is the greatest rectangular area (m²)?`, 121, "11 × 11."),
  num(`With 44 m of fence and a wall as one side, what is the greatest area (m²)?`, 242, "w = 11, l = 22."),
  num(`A 30 cm pizza and a 40 cm pizza: how many times as much area does the larger have (2 decimal places)?`, 1.78, "(40/30)² = 16/9.", null, 0.006),
  tf(`If the radius of a circle is halved, its area is halved.`, false, "It becomes one quarter."),
  ms(`Which rectangles have area 36 and perimeter less than 30? Select all.`, ["6 × 6", "4 × 9", "3 × 12", "2 × 18"], [0, 1], "Perimeters 24, 26, 30, 40."),
  num(`A square path 1 m wide surrounds a 10 m by 10 m square garden. Find the path's area.`, 44, "12² − 10²."),
  num(`A parallelogram has base 9, slanted side 6 and height 4. Find its area.`, 36, "bh = 9 × 4; the slanted side is not used."),
  num(`A photo 4 × 6 is enlarged to 10 × 15. By what factor does its area grow?`, 6.25, "k = 2.5 → k² = 6.25."),
  num(`A triangle has area 40 cm² and base 16 cm. Find its height.`, 5, "½ × 16 × h = 40."),
  num(`A circle has area 113.1 cm². Find its radius (nearest whole number).`, 6, "r² = 113.1/π ≈ 36."),
  mc(`Which change increases a 6 × 4 rectangle's area the most?`, "add 2 to the width", ["add 2 to the length", "both give the same increase", "neither changes the area"], "6 × 6 = 36 vs 8 × 4 = 32."),
  num(`A rectangle has area 60 m². Its length is doubled and its width is tripled. Find the new area.`, 360, "60 × 6."),
  num(`A model of a park is built at scale 1 : 100. The model's area is 300 cm². Find the real area in m².`, 300, "300 × 10 000 cm² = 3 000 000 cm² = 300 m²."),
  num(`Find the area of a right triangle with hypotenuse 13 and one leg 5.`, 30, "Other leg 12; ½ × 5 × 12."),
];
