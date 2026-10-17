// 5.3 Units & Unit Conversion — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, rect } from "./fig.mjs";

export const E = [
  num(`Convert 7 m to cm.`, 700, "1 m = 100 cm."),
  num(`Convert 2500 m to km.`, 2.5, "÷ 1000."),
  num(`Convert 4.2 kg to g.`, 4200, "× 1000."),
  num(`Convert 650 mL to L.`, 0.65, "÷ 1000."),
  num(`Convert 38 mm to cm.`, 3.8, "÷ 10."),
  num(`How many inches are in 3 feet?`, 36, "3 × 12."),
  num(`How many feet are in 4 yards?`, 12, "4 × 3."),
  num(`How many centimetres are in 10 inches?`, 25.4, "10 × 2.54."),
  mc(`Which is longer: 1 mile or 1 kilometre?`, "1 mile", ["1 kilometre", "they are equal", "cannot tell"], "1 mi ≈ 1.609 km."),
  mc(`Which unit is best for the mass of a paper clip?`, "gram", ["kilogram", "tonne", "litre"], "About 1 g."),
  num(`How many mL are in 1 cm³?`, 1, "1 cm³ = 1 mL."),
  num(`How many litres are in 1 m³?`, 1000, "1 m³ = 1000 L."),
  num(`How many cm² are in 1 m²?`, 10000, "100 × 100."),
  tf(`1 m² = 100 cm².`, false, "1 m² = 100 cm × 100 cm = 10 000 cm²."),
  num(`Write 5 ft 2 in in inches.`, 62, "5 × 12 + 2."),
  num(`Convert 0.3 km to m.`, 300, "× 1000."),
  mc(`The prefix “milli” means…`, "one thousandth", ["one thousand", "one hundredth", "one million"], "1 mm = 0.001 m."),
  num(`A pencil is 19 cm long. How many mm is that?`, 190, "× 10."),
  tf(`Moving from metres to centimetres gives a bigger number.`, true, "Smaller unit, more of them."),
  num(`How many seconds are in 3 minutes?`, 180, "3 × 60."),
];

export const M = [
  num(`Convert 1.75 m² to cm².`, 17500, "× 10 000."),
  num(`Convert 3 500 000 cm³ to m³.`, 3.5, "÷ 1 000 000."),
  num(`A room is 4.5 m by 3.6 m. Find its area in m² (2 decimal places).`, 16.2, "4.5 × 3.6.", figDoc({ w: 240, items: rect(4.5, 3.6, { lw: "4.5 m", lh: "3.6 m" }) })),
  num(`Convert 5 ft 10 in to cm (2 decimal places).`, 177.8, "70 in × 2.54.", null, 0.006),
  num(`Convert 26.2 miles (a marathon) to km (1 decimal place).`, 42.2, "26.2 × 1.609.", null, 0.06),
  num(`Convert 72 km/h to m/s.`, 20, "72 000 ÷ 3600."),
  num(`Convert 15 m/s to km/h.`, 54, "15 × 3.6."),
  num(`A box is 20 cm × 15 cm × 10 cm. How many litres does it hold?`, 3, "3000 cm³ ÷ 1000."),
  num(`How many square inches are in 1 square foot?`, 144, "12 × 12."),
  num(`How many cubic feet are in 1 cubic yard?`, 27, "3³."),
  num(`Convert 2.5 L to cm³.`, 2500, "× 1000."),
  num(`A 2 kg bag of flour is how many pounds (1 decimal place)?`, 4.4, "2 ÷ 0.4536.", null, 0.06),
  num(`A recipe needs 750 g of sugar. How many kg is that?`, 0.75, "÷ 1000."),
  ms(`Which are equal to 1 L? Select all.`, ["1000 mL", "1000 cm³", "100 cm³", "0.001 m³"], [0, 1, 3], "1 L = 1000 cm³ = 0.001 m³."),
  num(`Gas costs 1.65 dollars per litre. What does 1 US gallon (3.785 L) cost (2 decimal places)?`, 6.25, "1.65 × 3.785 ≈ 6.245.", null, 0.006),
  num(`A garden is 30 ft by 20 ft. Find its area in m² (1 decimal place).`, 55.7, "600 ft² × 0.0929.", null, 0.06),
  tf(`To convert m³ to cm³, multiply by 100.`, false, "Multiply by 100³ = 1 000 000."),
  num(`A runner covers 5 km in 25 min. What is the speed in km/h?`, 12, "5 ÷ (25/60)."),
  num(`A hallway is 9 yd long. How many metres is that (2 decimal places)?`, 8.23, "9 × 0.9144.", null, 0.006),
  num(`A water tank holds 0.6 m³. How many litres is that?`, 600, "× 1000."),
];
