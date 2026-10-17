// 5.3 Units & Unit Conversion — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, prism } from "./fig.mjs";

export const TOPIC = "5.3 Units & Unit Conversion";
export const Q = [
  num(`A driveway 12 m by 3.5 m is covered with gravel 8 cm deep. How many m³ of gravel are needed?`, 3.36, "8 cm = 0.08 m; 12 × 3.5 × 0.08."),
  num(`A garage floor is 20 ft by 22 ft. Floor tiles are sold in boxes covering 2.5 m². How many boxes are needed?`, 17, "440 ft² ≈ 40.88 m²; 40.88 ÷ 2.5 = 16.35 → 17 boxes."),
  num(`Light travels 3.0 × 10⁸ m/s. How many km does it travel in one minute? Give the answer in millions of km.`, 18, "3 × 10⁸ × 60 = 1.8 × 10¹⁰ m = 1.8 × 10⁷ km = 18 million km."),
  num(`An aquarium holds 120 L. If it is 80 cm long and 40 cm wide, how deep is the water (cm)?`, 37.5, "120 000 cm³ ÷ (80 × 40).", figDoc({ w: 260, items: prism(8, 4, 3.75, { ll: "80 cm", lw: "40 cm", lh: "?" }) })),
  num(`A car's fuel economy is 35 miles per US gallon. Convert to litres per 100 km (1 decimal place).`, 6.7, "35 mi = 56.33 km per 3.785 L → 6.72 L per 100 km.", null, 0.06),
  num(`A snail moves at 0.03 mph. How many cm does it travel in one minute (nearest cm)?`, 80, "0.03 × 1609.344 m ÷ 60 = 0.8047 m.", null, 0.6),
  num(`A rectangular field measures 0.15 km by 80 m. Find its area in hectares (1 ha = 10 000 m²).`, 1.2, "150 × 80 = 12 000 m²."),
  num(`How many 1 cm cubes fit in a 0.5 m × 0.4 m × 0.3 m box?`, 60000, "50 × 40 × 30."),
  num(`Rain falls at 12 mm per hour on a 25 m by 40 m roof. How many litres fall on the roof in 2 hours?`, 24000, "0.024 m × 1000 m² = 24 m³ = 24 000 L."),
  tf(`A speed of 100 km/h is faster than 60 mi/h.`, true, "60 mi/h ≈ 96.6 km/h."),
  ms(`Which are equal to 2.5 m²? Select all.`, ["25 000 cm²", "2 500 000 mm²", "250 dm²", "0.0000025 km²"], [0, 1, 2, 3], "× 10⁴, × 10⁶, × 10², ÷ 10⁶."),
  num(`A board is 2 in by 6 in in cross-section and 8 ft long. Find its volume in cm³ (nearest whole number).`, 18878, "2 × 6 × 96 = 1152 in³; × 2.54³ (16.387) ≈ 18 878 cm³.", null, 2),
  num(`A swimming pool is 50 m long. A swimmer completes 1 mile. How many lengths is that (nearest whole number)?`, 32, "1609.3 ÷ 50 ≈ 32.2."),
  num(`Convert 1 m³ to cubic feet (1 decimal place).`, 35.3, "1 ÷ 0.3048³ ≈ 35.31.", null, 0.06),
  num(`A heart pumps 70 mL per beat at 72 beats per minute. How many litres does it pump in one day?`, 7257.6, "70 × 72 × 1440 mL.", null, 0.1),
  mc(`A sign says “Max height 12 ft 6 in”. A truck is 3.9 m tall. Will it fit?`, "no — the limit is about 3.81 m", ["yes — the limit is about 4.2 m", "yes — exactly equal", "cannot tell"], "150 in × 2.54 = 381 cm."),
  num(`Paint covers 350 ft² per US gallon. How many m² per litre is that (2 decimal places)?`, 8.59, "350 ft² = 32.52 m²; ÷ 3.785 L.", null, 0.01),
  num(`A cube has volume 8 L. What is its edge length in cm?`, 20, "8000 cm³ → ∛8000."),
  num(`A cyclist rides 18 km in 40 min. Find the average speed in m/s (2 decimal places).`, 7.5, "18 000 m ÷ 2400 s."),
  num(`An acre is 43 560 ft². How many m² is that (nearest whole number)?`, 4047, "43 560 × 0.092903 ≈ 4046.9.", null, 1),
];
