// IB AA SL 11.2 — Right-Angled Triangle Trigonometry: sine, cosine and tangent ratios, finding sides and angles, exact values for 30°, 45°, 60°, angles of elevation and depression, problems with two right triangles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, rightT, elevation, polygon } from "./figs11.mjs";

export const TITLE = "11.2 Right-Angled Triangle Trigonometry";
export const ID = "cfd9a0f7-5e7f-4e71-bdae-70af9dd9e01d";
const S = String.raw;
const r3 = Math.sqrt(3);

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Right-Angled Triangle Trigonometry",
    overview: S`In a right-angled triangle the ratios of the sides depend only on the angles. Naming the sides opposite, adjacent and hypotenuse relative to an angle θ gives sine, cosine and tangent. In this lesson you will use the ratios to find unknown sides and angles, recall exact values for 30°, 45° and 60°, and solve problems with angles of elevation and depression, including problems with two right triangles.`,
    goals: [
      S`use \(\sin\theta=\frac{\text{opp}}{\text{hyp}}\), \(\cos\theta=\frac{\text{adj}}{\text{hyp}}\), \(\tan\theta=\frac{\text{opp}}{\text{adj}}\);`,
      "find unknown sides and angles with inverse trigonometric functions;",
      "recall exact values of sin, cos and tan for 30°, 45° and 60°;",
      "solve problems with angles of elevation and depression;",
      "combine two right triangles that share a side.",
    ],
    curriculum: "SL 3.2 (use of sine, cosine and tangent ratios to find sides and angles of right-angled triangles; angles of elevation and depression)",
    prior: [
      ["In a right triangle the legs are 6 and 8. Find the hypotenuse.", "10."],
      [S`Solve \(\frac{x}{12}=0.4\).`, "x = 4.8."],
      [S`Solve \(\frac{9}{x}=0.6\).`, "x = 15."],
    ],
    words: [
      ["Hypotenuse", "side opposite the right angle (longest)", ""],
      ["Opposite / adjacent", "relative to the angle θ", ""],
      ["Inverse ratio", S`\(\theta=\sin^{-1}(\text{ratio})\)`, S`\(\sin^{-1}0.5=30^\circ\)`],
      ["Angle of elevation", "measured up from the horizontal", ""],
      ["Angle of depression", "measured down from the horizontal", ""],
    ],
  }),

  section("📌 The three ratios", S`
  ${fig({ items: rightT(8, 5, { la: "adjacent", lb: "opposite", lc: "hypotenuse", angle: "θ" }) }, "Sides named relative to θ")}
  ${table(["Ratio", "Definition", "Memory"], [[S`\(\sin\theta\)`, "opp / hyp", "SOH"], [S`\(\cos\theta\)`, "adj / hyp", "CAH"], [S`\(\tan\theta\)`, "opp / adj", "TOA"]])}
  <p>To find a side, choose the ratio containing the known side and the unknown, then solve. If the hypotenuse is 14 and θ = 38°, the opposite side is \(14\sin38^\circ\approx8.62\). To find an angle, use an inverse: if opp = 7 and adj = 10, then \(\theta=\tan^{-1}0.7\approx34.99^\circ\).</p>
  ${fig({ items: rightT(10, 7, { la: "10", lb: "7", angle: "θ" }) }, "tan θ = 7/10, θ ≈ 35.0°")}
  ${keyIdea("Label opp, adj, hyp from the angle; pick the ratio with two knowns; solve; use inverse functions for angles.")}`),

  section("📌 Exact values", S`
  <p>Half of an equilateral triangle of side 2 gives the 30°–60°–90° triangle with sides 1, \(\sqrt3\), 2. Half of a unit square gives the 45°–45°–90° triangle with sides 1, 1, \(\sqrt2\).</p>
  ${fig({ items: polygon([[0, 0], [r3, 0], [r3, 1]], { sides: [S`√3`, "1", "2"], rightAt: [1], angles: [[0, "30°"], [2, "60°"]] }) }, "The 30°–60°–90° triangle")}
  ${table(["θ", "sin θ", "cos θ", "tan θ"], [["30°", S`\(\frac12\)`, S`\(\frac{\sqrt3}2\)`, S`\(\frac{1}{\sqrt3}\)`], ["45°", S`\(\frac{\sqrt2}2\)`, S`\(\frac{\sqrt2}2\)`, "1"], ["60°", S`\(\frac{\sqrt3}2\)`, S`\(\frac12\)`, S`\(\sqrt3\)`]])}`),

  section("📌 Elevation and depression", S`
  <p>From the ground 45 m from a building, the angle of elevation of the roof is 28°, so its height is \(45\tan28^\circ\approx23.9\) m. The angle of depression from the roof down to the observer is also 28° (alternate angles).</p>
  ${fig({ items: elevation(45, 45 * Math.tan((28 * Math.PI) / 180), { ld: "45 m", lh: "h", angle: "28°" }) }, "h = 45 tan 28° ≈ 23.9 m")}
  ${watchOut([
    "Check the calculator is in degree mode.",
    "Elevation is measured from the horizontal, never from the vertical.",
    "The angle of depression from the top equals the angle of elevation from the bottom.",
    "Add the observer's eye height when the angle is measured at eye level.",
  ])}`),

  section("📌 Explore", S`<p>Change the angle and the hypotenuse. The ratios stay the same for a fixed angle, whatever the size of the triangle.</p>`),

  widget("ibRightTrig", { init: [52, 12] }),

  examples([
    ["Level 1 · Finding a side", S`In a right triangle, the hypotenuse is 20 and one angle is 41°. Find the side adjacent to the 41° angle.`,
      [S`\(\text{adj}=20\cos41^\circ\).`],
      S`\(\approx15.09\)`,
      fig({ items: rightT(15.09, 13.12, { la: "x", lc: "20", angle: "41°" }) })],
    ["Level 1 · Finding an angle", S`A ramp rises 1.2 m over a horizontal distance of 9 m. Find its angle with the ground.`,
      [S`\(\tan\theta=\frac{1.2}{9}\).`],
      S`\(\theta\approx7.59^\circ\)`],
    ["Level 2 · Side in the denominator", S`In a right triangle the side opposite a 33° angle is 11. Find the hypotenuse.`,
      [S`\(\sin33^\circ=\frac{11}{h}\Rightarrow h=\frac{11}{\sin33^\circ}\).`],
      S`\(\approx20.20\)`],
    ["Level 2 · Depression", S`From a lighthouse 64 m above the sea, the angle of depression of a buoy is 13°. How far is the buoy from the base of the lighthouse?`,
      [S`\(\tan13^\circ=\frac{64}{d}\Rightarrow d=\frac{64}{\tan13^\circ}\).`],
      S`\(\approx277.2\) m`],
    ["Level 3 · Two right triangles", S`From point A the angle of elevation of the top of a tower is 24°. Walking 50 m towards the tower to B, the angle becomes 41°. Find the height of the tower.`,
      [S`Let the distance from B be \(x\): \(h=x\tan41^\circ=(x+50)\tan24^\circ\).`, S`\(x=\frac{50\tan24^\circ}{\tan41^\circ-\tan24^\circ}\approx52.50\); \(h\approx45.63\).`],
      S`\(\approx45.6\) m`,
      fig({ items: [{ seg: [[-50, 0], [52.50, 0]], color: "gray" }, { poly: [[-50, 0], [52.50, 0], [52.50, 45.63]], fill: "none", color: "violet" }, { seg: [[0, 0], [52.50, 45.63]], color: "blue" }, { seg: [[52.50, 0], [52.50, 45.63]], color: "ink", width: 3 }, { arc: [[52.50, 0], [-50, 0], [52.50, 45.63]], label: "24°" }, { arc: [[52.50, 0], [0, 0], [52.50, 45.63]], label: "41°" }, { dim: [[-50, 0], [0, 0]], label: "50 m", off: 6 }, { text: "A", at: [-50, -5], bold: true }, { text: "B", at: [0, -5], bold: true }, { text: "h", at: [55, 22], bold: true }] }, "Two angles of elevation along the same line")],
  ]),

  practice([
    q("Level 1 · sine", S`Find the side opposite a 50° angle when the hypotenuse is 9 (2 d.p.).`, num(9 * Math.sin((50 * Math.PI) / 180), 0.01),
      "9 sin 50°.", [S`\(9\sin50^\circ\).`], S`\(\approx6.89\)`),
    q("Level 1 · exact", S`\(\cos60^\circ+\sin30^\circ=\)`, num(1),
      "½ + ½.", ["1."], S`\(1\)`),
    q("Level 2 · angle", S`Find θ if opp = 5 and hyp = 13 (2 d.p.).`, num((Math.asin(5 / 13) * 180) / Math.PI, 0.01),
      "sin⁻¹(5/13).", [S`\(\approx22.62^\circ\).`], S`\(\approx22.62^\circ\)`),
    q("Level 2 · elevation", S`A kite string 70 m long makes 55° with the ground. Find the kite's height (1 d.p.).`, num(70 * Math.sin((55 * Math.PI) / 180), 0.1),
      "70 sin 55°.", [S`\(\approx57.3\).`], S`\(\approx57.3\) m`),
    q("Level 2 · exact tangent", S`\(\tan45^\circ\times\tan60^\circ\) equals:`, choice([S`\(\sqrt3\)`, "1", S`\(\frac{1}{\sqrt3}\)`, S`\(\frac{\sqrt3}{2}\)`], 0),
      "1 × √3.", ["√3."], S`\(\sqrt3\)`),
  ]),

  ...hard([
    ["Eye height", S`A student whose eyes are 1.55 m above the ground stands 18 m from a flagpole and sees the top at an angle of elevation of 37°. Find the height of the flagpole.`,
      [S`Height above eye level \(18\tan37^\circ\approx13.56\).`, S`Total \(13.56+1.55\).`],
      S`\(\approx15.1\) m`,
      fig({ items: elevation(18, 18 * Math.tan((37 * Math.PI) / 180), { ld: "18 m", lh: "", angle: "37°" }) }, "Measure from eye level, then add 1.55 m")],
    ["Exact lengths", S`In triangle PQR, angle Q = 90°, angle P = 30° and PR = 12. Find PQ and QR exactly.`,
      [S`\(QR=12\sin30^\circ=6\).`, S`\(PQ=12\cos30^\circ=6\sqrt3\).`],
      S`\(PQ=6\sqrt3\), \(QR=6\)`],
  ], [
    q("Level 3 · two triangles", S`From a cliff top 90 m high, the angles of depression of two boats in line are 20° and 35°. Find the distance between the boats (1 d.p.).`, num(90 / Math.tan((20 * Math.PI) / 180) - 90 / Math.tan((35 * Math.PI) / 180), 0.1),
      "90/tan 20° − 90/tan 35°.", [S`\(247.3-128.5\).`], S`\(\approx118.7\) m`),
    q("Level 3 · exact", S`Find the exact value of \(\sin^2 45^\circ+\cos^2 30^\circ\) as a decimal.`, num(1.25, 0.001),
      "½ + ¾.", [S`\(\frac54\).`], S`\(\frac54\)`),
    q("Level 3 · isosceles", S`An isosceles triangle has equal sides 10 and base 12. Find a base angle (2 d.p.).`, num((Math.acos(0.6) * 180) / Math.PI, 0.01),
      "cos θ = 6/10.", [S`\(\cos^{-1}0.6\).`], S`\(\approx53.13^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I choose the ratio?", "Label opp, adj and hyp from the angle and pick the ratio with the known and unknown sides."],
      ["When is the unknown in the denominator?", "When the known side is in the numerator: rearrange, e.g. h = 11/sin 33°."],
      ["How do I find an angle?", "Use the inverse function: θ = tan⁻¹(opp/adj), etc."],
      ["Why do exact values matter?", "They give exact answers without a calculator and appear in non-calculator papers."],
      ["How do I handle two angles of elevation?", "Write the height in terms of each triangle and solve the two equations."],
    ],
    summary: [
      "SOH CAH TOA.",
      "Inverse functions give angles.",
      "30°–60°–90°: 1 : √3 : 2; 45°–45°–90°: 1 : 1 : √2.",
      "Elevation and depression are measured from the horizontal.",
    ],
    next: "11.3 extends trigonometry to any triangle with the sine rule.",
  }),
];
