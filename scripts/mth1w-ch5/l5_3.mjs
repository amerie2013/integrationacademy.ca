// MTH1W 5.3 — Units & Unit Conversion (self-study format): metric, imperial, area/volume units, rates
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { fig, rect } from "./figs5.mjs";

export const TITLE = "5.3 Units & Unit Conversion";

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Units & Unit Conversion",
    overview: String.raw`Canada uses metric units officially, but builders still buy lumber in inches and feet, recipes use cups, and a trip to the United States means miles and gallons. In this lesson you will convert within the metric system, between metric and imperial units, and — the step most people get wrong — between units of area and volume. One method handles all of it: multiply by a conversion fraction equal to 1.`,
    goals: [
      "convert between metric length, mass and capacity units using powers of ten;",
      "convert between imperial units (inches, feet, yards, miles) and between imperial and metric units;",
      "convert units of area (×100 per metric step) and volume (×1000 per step);",
      "relate volume and capacity: 1 cm³ = 1 mL and 1000 cm³ = 1 L;",
      "convert rates such as km/h to m/s using the unit-factor method.",
    ],
    curriculum: "E1.3 (solve problems involving different units within and between measurement systems)",
    prior: [
      [String.raw`\(3.6\times1000=?\)`, String.raw`\(3600\): move the decimal 3 places right.`],
      [String.raw`\(450\div100=?\)`, String.raw`\(4.5\).`],
      [String.raw`How many inches are in a foot?`, String.raw`\(12\).`],
    ],
    words: [
      ["Metric prefix", "kilo = 1000, centi = 1/100, milli = 1/1000", "1 km = 1000 m"],
      ["Imperial units", "inch, foot, yard, mile; ounce, pound; gallon", "1 ft = 12 in"],
      ["Conversion factor", "a fraction equal to 1 that changes units", "\\(\\frac{100\\text{ cm}}{1\\text{ m}}\\)"],
      ["Capacity", "how much a container holds (L, mL)", "1 L = 1000 mL"],
      ["Rate", "a comparison of two quantities with different units", "90 km/h"],
    ],
  }),

  section("📌 Metric units: powers of ten", String.raw`
  ${table(["kilo (k)", "hecto (h)", "deca (da)", "base unit", "deci (d)", "centi (c)", "milli (m)"], [["1000", "100", "10", "1 (m, g, L)", "0.1", "0.01", "0.001"]])}
  ${keyIdea(String.raw`Moving to a <strong>smaller</strong> unit gives a <strong>bigger number</strong> (multiply); moving to a larger unit gives a smaller number (divide). Each step on the ladder is a factor of \(10\).`)}
  <p>The <strong>unit-factor method</strong>: multiply by a fraction whose top and bottom are equal amounts, with the unit you want on top so the old unit cancels.</p>
  \[4.8\ \text{km}\times\frac{1000\ \text{m}}{1\ \text{km}}=4800\ \text{m}\]`),

  section("📌 Imperial units and crossing between systems", String.raw`
  ${table(["Imperial", "Equals", "Metric (approx.)"], [
    ["1 inch (in)", "—", "2.54 cm (exact)"], ["1 foot (ft)", "12 in", "30.48 cm"], ["1 yard (yd)", "3 ft = 36 in", "0.9144 m"], ["1 mile (mi)", "5280 ft = 1760 yd", "1.609 km"],
    ["1 pound (lb)", "16 ounces (oz)", "0.454 kg"], ["1 US gallon", "4 quarts", "3.785 L"],
  ])}
  <p>Heights and lumber often mix units: \(5\) ft \(7\) in means \(5\times12+7=67\) in. Convert to one unit first, then cross to metric with \(1\) in \(=2.54\) cm.</p>`),

  section("📌 Area and volume units", String.raw`
  <p>A square metre is a square \(1\) m by \(1\) m — that is \(100\) cm by \(100\) cm, so it contains \(100\times100\) square centimetres.</p>
  ${fig({ w: 280, items: [...rect(10, 10, { lw: "1 m = 100 cm", lh: "100 cm", fill: "#eff6ff" }), ...[1, 2, 3, 4, 5, 6, 7, 8, 9].flatMap((k) => [{ seg: [[k, 0], [k, 10]], color: "#bfdbfe", width: 1 }, { seg: [[0, k], [10, k]], color: "#bfdbfe", width: 1 }]), { poly: [[0, 9], [1, 9], [1, 10], [0, 10]], fill: "red", color: "red", width: 1.5 }, { text: "each small square is 10 cm × 10 cm", at: [5, -1.6], size: 11.5, color: "gray" }] }, "1 m² = 100 cm × 100 cm = 10 000 cm².")}
  ${keyIdea(String.raw`Square the length factor for area and cube it for volume: \(1\ \text{m}^2=100^2=10\,000\ \text{cm}^2\) and \(1\ \text{m}^3=100^3=1\,000\,000\ \text{cm}^3\).`)}
  ${table(["Volume", "Capacity"], [["\\(1\\ \\text{cm}^3\\)", "1 mL"], ["\\(1000\\ \\text{cm}^3\\)", "1 L"], ["\\(1\\ \\text{m}^3\\)", "1000 L"]])}`),

  widget("unitLadder"),

  section("📌 Rates", String.raw`
  <p>A rate has two units. Convert each one with its own factor:</p>
  \[90\ \frac{\text{km}}{\text{h}}\times\frac{1000\ \text{m}}{1\ \text{km}}\times\frac{1\ \text{h}}{3600\ \text{s}}=25\ \frac{\text{m}}{\text{s}}\]
  ${watchOut([
    "Area: 1 m² is 10 000 cm², not 100 cm². Volume: 1 m³ is 1 000 000 cm³.",
    "Check the direction: smaller unit → bigger number.",
    "5 ft 7 in is 67 in, not 5.7 ft.",
    "Round only at the end, and say how you rounded.",
  ])}`),

  examples([
    ["Within metric", String.raw`A trail is \(4.8\) km long. Write the length in metres and in centimetres.`,
      [String.raw`\(4.8\times1000=4800\) m.`, String.raw`\(4800\times100=480\,000\) cm.`],
      String.raw`\(4800\) m \(=480\,000\) cm`],
    ["A height in feet and inches", String.raw`A player is \(5\) ft \(7\) in tall. Find the height in centimetres.`,
      [String.raw`\(5\times12+7=67\) in.`, String.raw`\(67\times2.54=170.18\) cm.`],
      String.raw`about \(170.2\) cm`],
    ["Area units", String.raw`A floor is \(3.2\) m by \(4.5\) m. Find its area in \(\text{m}^2\) and in \(\text{cm}^2\).`,
      [String.raw`\(3.2\times4.5=14.4\ \text{m}^2\).`, String.raw`\(1\ \text{m}^2=10\,000\ \text{cm}^2\), so \(14.4\times10\,000=144\,000\ \text{cm}^2\).`, String.raw`Check another way: \(320\times450=144\,000\) ✓`],
      String.raw`\(14.4\ \text{m}^2=144\,000\ \text{cm}^2\)`,
      fig({ w: 260, items: rect(4.5, 3.2, { lw: "4.5 m", lh: "3.2 m" }) })],
    ["Volume and capacity", String.raw`An aquarium is \(60\) cm by \(30\) cm by \(40\) cm. How many litres does it hold? About how many US gallons?`,
      [String.raw`\(V=60\times30\times40=72\,000\ \text{cm}^3\).`, String.raw`\(1000\ \text{cm}^3=1\) L, so \(72\,000\div1000=72\) L.`, String.raw`\(72\div3.785\approx19.0\) gallons.`],
      String.raw`\(72\) L, about \(19\) US gallons`],
    ["Converting a rate", String.raw`A highway speed limit is \(100\) km/h. Write it in metres per second and in miles per hour.`,
      [String.raw`\(100\times1000\div3600\approx27.8\) m/s.`, String.raw`\(100\div1.609\approx62.1\) mi/h.`],
      String.raw`about \(27.8\) m/s, or \(62\) mi/h`],
  ]),

  practice([
    q("metric", String.raw`Convert \(3.75\) m to millimetres.`, num(3750),
      "1 m = 1000 mm; smaller unit, bigger number.", [String.raw`\(3.75\times1000=3750\).`], String.raw`\(3750\) mm`),
    q("imperial", String.raw`How many inches are in \(2\) yd \(2\) ft?`, num(96),
      "1 yd = 3 ft and 1 ft = 12 in.", [String.raw`\(2\) yd \(=6\) ft; \(6+2=8\) ft; \(8\times12=96\).`], String.raw`\(96\) in`),
    q("imperial to metric", String.raw`Convert \(6\) ft to centimetres.`, num(182.88, 0.01),
      "First inches, then 2.54 cm per inch.", [String.raw`\(6\times12=72\) in; \(72\times2.54=182.88\).`], String.raw`\(182.88\) cm`),
    q("area", String.raw`Convert \(2.5\ \text{m}^2\) to \(\text{cm}^2\).`, num(25000),
      "1 m² = 100 × 100 cm².", [String.raw`\(2.5\times10\,000=25\,000\).`], String.raw`\(25\,000\ \text{cm}^2\)`),
    q("capacity", String.raw`A jug holds \(1.8\) L. What volume is that in \(\text{cm}^3\)?`, num(1800),
      "1 L = 1000 cm³.", [String.raw`\(1.8\times1000=1800\).`], String.raw`\(1800\ \text{cm}^3\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does area change by 100 per metric step, not 10?", "Area has two dimensions. Each length is multiplied by the factor, so the area is multiplied by the factor squared: 10² = 100 per metric step, and 100² = 10 000 from m² to cm²."],
      ["Is 1 inch exactly 2.54 cm?", "Yes. Since 1959 the inch has been defined as exactly 2.54 cm, so every imperial length converts exactly."],
      ["How do I know whether to multiply or divide?", "Write the conversion fraction with the unit you want on top. If you set it up so the old unit cancels, the arithmetic takes care of itself."],
      ["What is the difference between volume and capacity?", "Volume is the space a solid takes up (cm³, m³); capacity is how much a container holds (mL, L). They are linked: 1 cm³ = 1 mL."],
      ["When should I round?", "At the end. Rounding 2.54 or 1.609 early, or rounding a middle step, can make the final answer noticeably wrong."],
    ],
    summary: [
      "Metric: each step is ×10; smaller unit → bigger number.",
      "1 in = 2.54 cm; 1 ft = 12 in; 1 yd = 3 ft; 1 mi ≈ 1.609 km.",
      "Area factor = (length factor)²; volume factor = (length factor)³.",
      "1 cm³ = 1 mL; 1000 cm³ = 1 L; 1 m³ = 1000 L.",
      "Unit-factor method: multiply by fractions equal to 1 so units cancel.",
    ],
    next: "5.4 uses the Pythagorean theorem to find unknown lengths.",
  }),
];
