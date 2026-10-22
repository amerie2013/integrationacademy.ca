// IB AA SL 11.4 — The Cosine Rule and the Area of a Triangle: c² = a² + b² − 2ab cos C for sides (SAS) and angles (SSS), area = ½ab sin C, choosing between the sine and cosine rules
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, triSAS, tri } from "./figs11.mjs";

export const TITLE = "11.4 The Cosine Rule and the Area of a Triangle";
export const ID = "1baa0011-0001-4001-8001-000000001104";
const S = String.raw;
const rad = (d) => (d * Math.PI) / 180, deg = (r) => (r * 180) / Math.PI;
const cosC = (a, b, c) => deg(Math.acos((a * a + b * b - c * c) / (2 * a * b)));

export const blocks = () => [
  intro({
    icon: "📏",
    title: "The Cosine Rule and the Area of a Triangle",
    overview: S`The sine rule needs a side with its opposite angle. When you know two sides and the angle between them, or all three sides, the cosine rule is the tool: \(c^2=a^2+b^2-2ab\cos C\). It is Pythagoras with a correction term. In this lesson you will find sides and angles with the cosine rule, find the area of any triangle with \(\frac12ab\sin C\), and decide which rule a problem needs.`,
    goals: [
      S`use \(c^2=a^2+b^2-2ab\cos C\) to find a side (SAS);`,
      S`use \(\cos C=\frac{a^2+b^2-c^2}{2ab}\) to find an angle (SSS);`,
      S`find the area of a triangle as \(\frac12ab\sin C\);`,
      "choose between the sine rule, cosine rule and right-angled trigonometry;",
      "solve multi-step problems combining the rules.",
    ],
    curriculum: "SL 3.3 (the cosine rule; area of a triangle as ½ab sin C)",
    prior: [
      [S`Find \(\cos120^\circ\).`, S`\(-\frac12\).`],
      ["Legs 9 and 12: hypotenuse?", "15."],
      [S`Find \(\cos^{-1}(-0.25)\) (1 d.p.).`, "104.5°."],
    ],
    words: [
      ["Cosine rule", S`\(c^2=a^2+b^2-2ab\cos C\)`, ""],
      ["SAS", "two sides and the included angle", ""],
      ["SSS", "three sides", ""],
      ["Included angle", "the angle between the two known sides", ""],
      ["Area formula", S`\(\frac12ab\sin C\)`, ""],
    ],
  }),

  section("📌 The cosine rule", S`
  <p>When \(C=90^\circ\), \(\cos C=0\) and the rule is Pythagoras. For an acute angle the term \(2ab\cos C\) is subtracted (c is shorter than the hypotenuse would be); for an obtuse angle \(\cos C<0\), so c is longer.</p>
  ${fig({ items: triSAS(9, 6, 48, { sides: ["c", "9", "6"], angles: [[2, "48°"]] }).items }, "SAS: c² = 9² + 6² − 2(9)(6) cos 48° ≈ 44.73, so c ≈ 6.69")}
  <p>Rearranged for an angle: \(\cos C=\frac{a^2+b^2-c^2}{2ab}\). For sides 7, 9 and 13 the largest angle is opposite 13: \(\cos C=\frac{49+81-169}{126}\approx-0.3095\), so \(C\approx108.03^\circ\).</p>
  ${fig({ items: triSAS(9, 7, cosC(9, 7, 13), { sides: ["13", "9", "7"], angles: [[2, "C"]] }).items }, "SSS: the largest angle is opposite the longest side")}
  ${keyIdea("SAS → cosine rule for the third side. SSS → cosine rule for an angle (start with the largest).")}`),

  section("📌 Area of a triangle", S`
  <p>The height from A to side a is \(b\sin C\), so the area is \(\frac12ab\sin C\): half the product of two sides times the sine of the included angle. A triangle with sides 10 and 7 and included angle 125° has area \(\frac12(10)(7)\sin125^\circ\approx28.67\).</p>
  ${fig({ items: [...triSAS(10, 7, 125, { sides: ["", "10", "7"], angles: [[2, "125°"]], fill: "green" }).items] }, "Area = ½(10)(7) sin 125° ≈ 28.67")}
  ${table(["Known", "Use"], [
    ["right angle", "SOH CAH TOA, Pythagoras"],
    ["side + opposite angle, and one more", "sine rule"],
    ["two sides + included angle", "cosine rule (side), ½ab sin C (area)"],
    ["three sides", "cosine rule (angle)"],
  ])}
  ${watchOut([
    "In ½ab sin C, C must be the angle between a and b.",
    "Use the cosine rule, not the sine rule, for the first angle in SSS: cos⁻¹ handles obtuse angles correctly.",
    "Square brackets carefully: 2ab cos C is subtracted after squaring.",
    "Keep full calculator accuracy until the final answer.",
  ])}`),

  section("📌 Explore", S`<p>Change sides a and b and the included angle C. Watch c and the area update, and see the rule become Pythagoras at 90°.</p>`),

  widget("ibCosineRule", { init: [8, 5, 110] }),

  examples([
    ["Level 1 · SAS", S`In triangle PQR, p = 11, q = 8 and R = 37°. Find r.`,
      [S`\(r^2=121+64-176\cos37^\circ\approx44.44\).`],
      S`\(r\approx6.67\)`],
    ["Level 1 · SSS", S`A triangle has sides 5, 8 and 9. Find its smallest angle.`,
      [S`Smallest angle is opposite 5: \(\cos\theta=\frac{64+81-25}{144}\).`],
      S`\(\approx33.56^\circ\)`,
      fig({ items: triSAS(8, 9, cosC(8, 9, 5), { sides: ["5", "8", "9"], angles: [[2, "θ"]] }).items })],
    ["Level 2 · Area", S`Find the area of a triangle with sides 13 cm and 15 cm and included angle 64°.`,
      [S`\(\frac12(13)(15)\sin64^\circ\).`],
      S`\(\approx87.63\) cm²`],
    ["Level 2 · Area from three sides", S`A triangle has sides 6, 9 and 11. Find its area.`,
      [S`\(\cos C=\frac{36+81-121}{108}\approx-0.0370\), \(C\approx92.12^\circ\).`, S`Area \(=\frac12(6)(9)\sin92.12^\circ\).`],
      S`\(\approx26.98\)`],
    ["Level 3 · Unknown side from area", S`A triangle has area 30, one side 12 and included angle 40°. Find the other side enclosing the angle, then the third side.`,
      [S`\(30=\frac12(12)b\sin40^\circ\Rightarrow b\approx7.78\).`, S`\(c^2=144+60.5-2(12)(7.78)\cos40^\circ\Rightarrow c\approx7.84\).`],
      S`\(b\approx7.78\); \(c\approx7.84\)`],
  ]),

  practice([
    q("Level 1 · side", S`a = 7, b = 10, C = 50°. Find c (2 d.p.).`, num(Math.sqrt(49 + 100 - 140 * Math.cos(rad(50))), 0.01),
      "Cosine rule.", [S`\(c^2\approx59.01\).`], S`\(\approx7.68\)`),
    q("Level 1 · area", S`Find the area of a triangle with sides 4 and 9 and included angle 30°.`, num(9),
      "½ × 4 × 9 × ½.", ["9."], S`\(9\)`),
    q("Level 2 · angle", S`Sides 4, 6 and 7. Find the largest angle (2 d.p.).`, num(cosC(4, 6, 7), 0.01),
      "Opposite 7.", [S`\(\cos C=\frac{16+36-49}{48}\).`], S`\(\approx86.42^\circ\)`),
    q("Level 2 · obtuse", S`a = 5, b = 6, C = 140°. Find c (2 d.p.).`, num(Math.sqrt(25 + 36 - 60 * Math.cos(rad(140))), 0.01),
      "cos 140° < 0.", [S`\(c^2\approx106.96\).`], S`\(\approx10.34\)`),
    q("Level 2 · which rule", S`You know all three sides of a triangle and want an angle. Use:`, choice(["the cosine rule", "the sine rule", "SOH CAH TOA", "the area formula"], 0),
      "SSS.", ["Cosine rule rearranged."], "the cosine rule"),
  ]),

  ...hard([
    ["A quadrilateral field", S`A field ABCD has AB = 120 m, BC = 85 m, angle ABC = 104°, CD = 70 m and angle ACD = 52°. Find AC and the area of the field.`,
      [S`\(AC^2=120^2+85^2-2(120)(85)\cos104^\circ\Rightarrow AC\approx162.97\).`, S`Area ABC \(=\frac12(120)(85)\sin104^\circ\approx4948.5\).`, S`Area ACD \(=\frac12(162.97)(70)\sin52^\circ\approx4494.9\). Total \(\approx9443\) m².`],
      S`\(AC\approx163.0\) m; area \(\approx9443\) m²`,
      fig({ items: [...tri([0, 0], [120, 0], [120 + 85 * Math.cos(rad(76)), 85 * Math.sin(rad(76))], { sides: ["120 m", "85 m", ""], names: ["A", "B", "C"], angles: [[1, "104°"]] })] }, "Split the field along the diagonal AC")],
    ["Using both rules", S`In triangle ABC, a = 14, b = 9 and c = 18. Find angle C, then angle A with the sine rule, and the area.`,
      [S`\(\cos C=\frac{196+81-324}{252}\approx-0.1865\Rightarrow C\approx100.75^\circ\).`, S`\(\sin A=\frac{14\sin C}{18}\Rightarrow A\approx49.83^\circ\) (acute: opposite a shorter side than c).`, S`Area \(=\frac12(14)(9)\sin100.75^\circ\approx61.89\).`],
      S`\(C\approx100.75^\circ\), \(A\approx49.83^\circ\), area \(\approx61.9\)`],
  ], [
    q("Level 3 · triangle area max", S`Two sides of a triangle are 8 and 11. What is the largest possible area?`, num(44),
      "sin C ≤ 1.", ["½ × 8 × 11 at C = 90°."], S`\(44\)`),
    q("Level 3 · unknown side", S`a = x, b = x + 2, c = 7 and C = 60°. Find x (2 d.p.).`, num((-2 + Math.sqrt(4 + 4 * 45)) / 2, 0.01),
      "49 = x² + (x + 2)² − x(x + 2).", [S`\(x^2+2x-45=0\).`], S`\(\approx5.78\)`),
    q("Level 3 · area to angle", S`A triangle has sides 10 and 12 and area 42. Find the acute included angle (2 d.p.).`, num(deg(Math.asin(0.7)), 0.01),
      "sin C = 42/60.", [S`\(\sin^{-1}0.7\).`], S`\(\approx44.43^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["When do I use the cosine rule?", "SAS (to find the third side) or SSS (to find an angle)."],
      ["Why start with the largest angle in SSS?", "It may be obtuse, and cos⁻¹ identifies obtuse angles correctly."],
      ["How is the cosine rule related to Pythagoras?", "At C = 90°, cos C = 0 and it becomes c² = a² + b²."],
      ["Which angle goes in ½ab sin C?", "The angle between the two sides used."],
      ["Can I find an area from three sides?", "Yes: find an angle with the cosine rule, then use ½ab sin C."],
    ],
    summary: [
      "c² = a² + b² − 2ab cos C.",
      "cos C = (a² + b² − c²)/(2ab).",
      "Area = ½ab sin C.",
      "Choose the rule from what is known.",
    ],
    next: "11.5 applies the rules to bearings, elevation and three-dimensional problems.",
  }),
];
