// IB AA SL 11.3 — The Sine Rule: a/sin A = b/sin B = c/sin C, finding sides (AAS, ASA) and angles (SSA), the ambiguous case with 0, 1 or 2 triangles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, tri } from "./figs11.mjs";

export const TITLE = "11.3 The Sine Rule";
export const ID = "1e04b080-7017-4b6f-8f5a-1a6a1ec43c83";
const S = String.raw;
const rad = (d) => (d * Math.PI) / 180;
/** triangle with A at the origin, AB along the x-axis of length c, angle A and side b = AC; drawn counter-clockwise A, B, C */
const triAc = (A, b, c, sides, angles = []) => { const P = [0, 0], Q = [c, 0], R = [b * Math.cos(rad(A)), b * Math.sin(rad(A))]; return tri(P, Q, R, { sides, names: ["A", "B", "C"], angles }); };

export const blocks = () => [
  intro({
    icon: "🔺",
    title: "The Sine Rule",
    overview: S`Right-angled trigonometry needs a right angle. The sine rule works in any triangle: each side divided by the sine of its opposite angle gives the same value. In this lesson you will use the sine rule to find sides when two angles and a side are known, find angles when two sides and a non-included angle are known, and handle the ambiguous case, where the information fits two different triangles.`,
    goals: [
      S`state and use \(\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}\);`,
      "find a side given two angles and any side;",
      S`find an angle using \(\frac{\sin A}{a}=\frac{\sin B}{b}\);`,
      "recognise the ambiguous case and find both possible triangles;",
      "decide when no triangle exists.",
    ],
    curriculum: "SL 3.3 (the sine rule, including the ambiguous case)",
    prior: [
      [S`Find \(\sin^{-1}0.8\) (1 d.p.).`, "53.1°."],
      [S`If \(\sin x=0.5\) and \(0<x<180^\circ\), find all \(x\).`, "30° and 150°."],
      ["The angles of a triangle are 47° and 68°. Find the third.", "65°."],
    ],
    words: [
      ["Labelling", "side a is opposite angle A, and so on", ""],
      ["Sine rule", S`\(\frac{a}{\sin A}=\frac{b}{\sin B}\)`, ""],
      ["AAS / ASA", "two angles and a side: one triangle", ""],
      ["SSA", "two sides and a non-included angle: maybe two triangles", ""],
      ["Ambiguous case", "two valid triangles from the same data", ""],
    ],
  }),

  section("📌 Why the sine rule works", S`
  <p>Drop the height \(h\) from C to AB. In the two right triangles, \(h=b\sin A\) and \(h=a\sin B\). So \(a\sin B=b\sin A\), giving \(\frac{a}{\sin A}=\frac{b}{\sin B}\). The same argument with another height brings in \(c\).</p>
  ${fig({ items: [...triAc(58, 8, 10, ["c", "a", "b"], [[0, "A"], [1, "B"]]), { seg: [[8 * Math.cos(rad(58)), 0], [8 * Math.cos(rad(58)), 8 * Math.sin(rad(58))]], color: "red", dash: true }, { text: "h", at: [8 * Math.cos(rad(58)) + 0.4, 3], bold: true, color: "red" }] }, "h = b sin A = a sin B")}
  ${keyIdea("a/sin A = b/sin B = c/sin C. Use it when you know a side and its opposite angle.")}`),

  section("📌 Finding sides and angles", S`
  <p><strong>Side:</strong> in triangle ABC, A = 48°, B = 71°, a = 14. Then \(b=\frac{14\sin71^\circ}{\sin48^\circ}\approx17.81\). With C = 61°, \(c=\frac{14\sin61^\circ}{\sin48^\circ}\approx16.48\).</p>
  ${fig({ items: triAc(48, 17.81, 16.48, ["c", "a = 14", "b"], [[0, "48°"], [1, "71°"]]) }, "Two angles and a side: exactly one triangle")}
  <p><strong>Angle:</strong> in triangle PQR, p = 9, q = 12 and P = 40°. Then \(\sin Q=\frac{12\sin40^\circ}{9}\approx0.8571\), so \(Q\approx58.99^\circ\) — or \(Q\approx121.01^\circ\), since sine is positive in both. Both work here, because \(40^\circ+121.01^\circ<180^\circ\).</p>`),

  section("📌 The ambiguous case", S`
  <p>Given angle A, side a (opposite) and side b, picture side a swinging from C. It may miss the base line, touch it once, or cut it twice.</p>
  ${table(["Condition (A acute)", "Number of triangles"], [[S`\(a<b\sin A\)`, "0"], [S`\(a=b\sin A\)`, "1 (right angle at B)"], [S`\(b\sin A<a<b\)`, "2"], [S`\(a\ge b\)`, "1"]])}
  ${fig({ items: [{ seg: [[0, 0], [14, 0]], color: "gray" }, { seg: [[0, 0], [10 * Math.cos(rad(35)), 10 * Math.sin(rad(35))]], color: "green", width: 2.6 }, { seg: [[10 * Math.cos(rad(35)), 10 * Math.sin(rad(35))], [8.19 - 3.04, 0]], color: "violet", width: 2.4, dash: true }, { seg: [[10 * Math.cos(rad(35)), 10 * Math.sin(rad(35))], [8.19 + 3.04, 0]], color: "red", width: 2.4 }, { arc: [[4, 0], [0, 0], [8.19, 5.74]], label: "35°" }, { text: "A", at: [-0.5, -0.6], bold: true }, { text: "C", at: [8.19, 6.4], bold: true }, { text: "B₁", at: [5.15, -0.7], bold: true }, { text: "B₂", at: [11.23, -0.7], bold: true }, { dim: [[0, 0], [8.19, 5.74]], label: "b = 10", off: 0.7 }, { text: "a = 6.5", at: [10.8, 3.2], bold: true, color: "red" }] }, "A = 35°, b = 10, a = 6.5: side a reaches the base twice (B₁ and B₂)")}
  ${watchOut([
    "Match each side with its opposite angle.",
    S`\(\sin^{-1}\) only gives the acute angle; check whether \(180^\circ-\theta\) also fits.`,
    "Reject an obtuse answer if the angles would add to 180° or more.",
    "If sin B > 1, no triangle exists.",
  ])}`),

  section("📌 Explore", S`<p>Set angle A and sides a and b. Watch the number of possible triangles change from 0 to 2 as side a lengthens.</p>`),

  widget("ibSineRule", { init: [40, 12, 9] }),

  examples([
    ["Level 1 · Finding a side", S`In triangle XYZ, X = 52°, Y = 63° and x = 15. Find y.`,
      [S`\(y=\frac{15\sin63^\circ}{\sin52^\circ}\).`],
      S`\(\approx16.96\)`,
      fig({ items: triAc(52, 16.96, 15 * Math.sin(rad(65)) / Math.sin(rad(52)), ["z", "x = 15", "y"], [[0, "52°"], [1, "63°"]]) })],
    ["Level 1 · ASA", S`A = 27°, C = 104°, b = 20. Find a.`,
      [S`\(B=49^\circ\).`, S`\(a=\frac{20\sin27^\circ}{\sin49^\circ}\).`],
      S`\(\approx12.03\)`],
    ["Level 2 · Finding an angle", S`a = 16, b = 11, A = 74°. Find B.`,
      [S`\(\sin B=\frac{11\sin74^\circ}{16}\approx0.6609\).`, S`\(B\approx41.37^\circ\); the obtuse option \(138.63^\circ\) fails since \(74^\circ+138.63^\circ>180^\circ\).`],
      S`\(B\approx41.37^\circ\)`],
    ["Level 2 · No triangle", S`a = 4, b = 11, A = 30°. How many triangles?`,
      [S`\(\sin B=\frac{11\sin30^\circ}{4}=1.375>1\).`],
      "none"],
    ["Level 3 · Two triangles", S`a = 8, b = 13, A = 32°. Find both possible values of c.`,
      [S`\(\sin B=\frac{13\sin32^\circ}{8}\approx0.8611\): \(B_1\approx59.44^\circ\), \(B_2\approx120.56^\circ\).`, S`\(C_1\approx88.56^\circ\), \(C_2\approx27.44^\circ\).`, S`\(c=\frac{8\sin C}{\sin32^\circ}\): \(c_1\approx15.09\), \(c_2\approx6.96\).`],
      S`\(\approx15.09\) or \(\approx6.96\)`],
  ]),

  practice([
    q("Level 1 · side", S`A = 40°, B = 75°, a = 10. Find b (2 d.p.).`, num((10 * Math.sin(rad(75))) / Math.sin(rad(40)), 0.01),
      "10 sin 75°/sin 40°.", [S`\(\approx15.03\).`], S`\(\approx15.03\)`),
    q("Level 1 · ratio", S`If \(\frac{a}{\sin A}=20\) and \(B=30^\circ\), find b.`, num(10),
      "b = 20 sin 30°.", ["10."], S`\(10\)`),
    q("Level 2 · angle", S`a = 12, b = 9, A = 65°. Find B (2 d.p.).`, num((Math.asin((9 * Math.sin(rad(65))) / 12) * 180) / Math.PI, 0.01),
      "sin B = 9 sin 65°/12.", [S`\(\approx42.82^\circ\).`], S`\(\approx42.82^\circ\)`),
    q("Level 2 · count", S`A = 45°, b = 10, a = 7. How many triangles?`, choice(["2", "1", "0", "infinitely many"], 2),
      "Compare a with b sin A.", [S`\(b\sin A\approx7.071>7\): no triangle.`], "0"),
    q("Level 2 · obtuse", S`If \(\sin B=0.6\) and B is obtuse, find B (2 d.p.).`, num(180 - (Math.asin(0.6) * 180) / Math.PI, 0.01),
      "180° − sin⁻¹ 0.6.", [S`\(180^\circ-36.87^\circ\).`], S`\(\approx143.13^\circ\)`),
  ]),

  ...hard([
    ["Height from two angles", S`From two points A and B, 80 m apart on level ground, the angles of elevation of a balloon C (between them in the vertical plane through AB) are 35° and 52°. Find AC and the height of the balloon.`,
      [S`Angle C = 180° − 35° − 52° = 93°.`, S`\(AC=\frac{80\sin52^\circ}{\sin93^\circ}\approx63.13\).`, S`Height \(=AC\sin35^\circ\approx36.21\) m.`],
      S`\(AC\approx63.1\) m; height \(\approx36.2\) m`,
      fig({ items: [...tri([0, 0], [80, 0], [51.71, 36.21], { sides: ["80 m", "", ""], names: ["A", "B", "C"], angles: [[0, "35°"], [1, "52°"]] }), { seg: [[51.71, 0], [51.71, 36.21]], color: "red", dash: true }, { text: "h", at: [54, 15], bold: true, color: "red" }] }, "Find AC with the sine rule, then the height with right-angled trigonometry")],
    ["Range for two triangles", S`In triangle ABC, A = 30° and b = 12. For which lengths a are there two triangles?`,
      [S`Two triangles need \(b\sin A<a<b\).`, S`\(b\sin A=6\).`],
      S`\(6<a<12\)`],
  ], [
    q("Level 3 · ambiguous", S`a = 9, b = 14, A = 28°. Find the larger possible value of B (2 d.p.).`, num(180 - (Math.asin((14 * Math.sin(rad(28))) / 9) * 180) / Math.PI, 0.01),
      "180° − sin⁻¹(14 sin 28°/9).", [S`\(180^\circ-46.89^\circ\).`], S`\(\approx133.11^\circ\)`),
    q("Level 3 · perimeter", S`A = 50°, B = 60°, c = 10. Find the perimeter (2 d.p.).`, num(10 + (10 * Math.sin(rad(50))) / Math.sin(rad(70)) + (10 * Math.sin(rad(60))) / Math.sin(rad(70)), 0.01),
      "C = 70°.", [S`\(a\approx8.15\), \(b\approx9.22\).`], S`\(\approx27.37\)`),
    q("Level 3 · right-angle boundary", S`A = 30°, b = 16. Find a so that exactly one triangle exists with a < b.`, num(8),
      "a = b sin A.", ["8 (right angle at B)."], S`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["When can I use the sine rule?", "When you know a side and its opposite angle, plus one more side or angle."],
      ["Why is SSA ambiguous?", "sin B = k has two solutions between 0° and 180°: θ and 180° − θ."],
      ["How do I check the obtuse option?", "It is valid only if it plus the given angle is less than 180°."],
      ["What if sin B > 1?", "No triangle exists."],
      ["Which form do I use for angles?", "sin A / a = sin B / b keeps the unknown in the numerator."],
    ],
    summary: [
      "a/sin A = b/sin B = c/sin C.",
      "Two angles + side: one triangle.",
      "SSA: check θ and 180° − θ.",
      "Two triangles when b sin A < a < b (A acute).",
    ],
    next: "11.4 introduces the cosine rule and the area of any triangle.",
  }),
];
