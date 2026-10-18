// MCR3U 5.1 — Trigonometric Ratios and Special Angles: primary ratios in right triangles, solving for sides and
// angles, exact values from the 30°–60°–90° and 45°–45°–90° triangles, two-triangle elevation problems
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.1 Trigonometric Ratios and Special Angles";
export const ID = "de9aa680-bf2a-4bf1-9473-b17541589f27";
const S = String.raw;
const tri = (pts, labels, extra = {}) => plane({ view: extra.view ?? { xmin: -1, xmax: 18, ymin: -1, ymax: 10 }, segs: [{ pts: [...pts, pts[0]], color: "blue" }], points: labels, step: extra.step ?? { x: 2, y: 2 } });

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Trigonometric Ratios and Special Angles",
    overview: S`The primary ratios \(\sin\theta=\frac{\text{opp}}{\text{hyp}}\), \(\cos\theta=\frac{\text{adj}}{\text{hyp}}\) and \(\tan\theta=\frac{\text{opp}}{\text{adj}}\) connect angles and sides in a right triangle. In this lesson you will use them to find sides and angles, and you will learn the exact values for 30°, 45° and 60° from two special triangles — values used throughout this chapter and the next.`,
    goals: [
      "write the primary ratios for an acute angle of a right triangle;",
      "solve a right triangle for a missing side or angle;",
      "derive exact values for 30°, 45° and 60° from special triangles;",
      "evaluate expressions with exact values;",
      "solve problems with angles of elevation and depression.",
    ],
    curriculum: "D1.1 (determine the exact values of the sine, cosine and tangent of the special angles 0°, 30°, 45°, 60° and 90°), D1.6 (solve problems involving right triangles)",
    prior: [
      [S`In a right triangle with legs 6 and 8, what is the hypotenuse?`, S`\(10\).`],
      [S`Simplify \(\frac{1}{\sqrt2}\).`, S`\(\frac{\sqrt2}{2}\).`],
      [S`Solve \(\frac{x}{12}=0.5\).`, S`\(x=6\).`],
    ],
    words: [
      ["Opposite / adjacent", "the side across from / next to the angle (not the hypotenuse)", ""],
      ["SOH CAH TOA", "sin = opp/hyp, cos = adj/hyp, tan = opp/adj", ""],
      ["Exact value", "a value written with radicals or fractions, not decimals", "\\(\\sin60^\\circ=\\frac{\\sqrt3}2\\)"],
      ["Angle of elevation", "angle above the horizontal to an object", ""],
    ],
  }),

  section("📌 The two special triangles", S`
  ${table(["θ", "sin θ", "cos θ", "tan θ"], [
    ["0°", "0", "1", "0"], ["30°", "\\(\\frac12\\)", "\\(\\frac{\\sqrt3}2\\)", "\\(\\frac1{\\sqrt3}\\)"], ["45°", "\\(\\frac1{\\sqrt2}\\)", "\\(\\frac1{\\sqrt2}\\)", "1"],
    ["60°", "\\(\\frac{\\sqrt3}2\\)", "\\(\\frac12\\)", "\\(\\sqrt3\\)"], ["90°", "1", "0", "undefined"],
  ])}
  ${keyIdea(S`Half of an equilateral triangle of side 2 has sides \(1,\sqrt3,2\) and angles 30°, 60°, 90°. Half of a unit square has sides \(1,1,\sqrt2\) and angles 45°, 45°, 90°. Read every exact value from these two pictures.`)}`),

  section("📌 Explore", S`<p>Switch between the two triangles and the two angles of the 30°–60°–90° triangle. Notice that \(\sin30^\circ=\cos60^\circ\) — the side opposite one acute angle is adjacent to the other.</p>`),

  widget("specialTriangles", { start: "30" }),

  section("📌 Watch out", watchOut([
    "Label opposite and adjacent from the angle you are using — they swap for the other acute angle.",
    "Set your calculator to degrees.",
    S`Use the inverse key (\(\sin^{-1}\)) to find an angle, not \(\frac1{\sin}\).`,
    "Keep exact values exact; round only a final measurement.",
  ])),

  examples([
    ["All three ratios", S`A right triangle has legs 8 and 15 and hypotenuse 17. Angle A is opposite the side 8. Write the three ratios and find ∠A.`,
      [S`\(\sin A=\frac8{17}\), \(\cos A=\frac{15}{17}\), \(\tan A=\frac8{15}\).`, S`\(A=\tan^{-1}\frac8{15}\approx28.1^\circ\).`],
      S`\(A\approx28.1^\circ\)`,
      tri([[0, 0], [15, 0], [15, 8]], [{ x: 0, y: 0, label: "A" }, { x: 7.5, y: 0, label: "15" }, { x: 15, y: 4, label: "8" }, { x: 7.5, y: 4.4, label: "17" }])],
    ["Finding a side", S`In right \(\triangle PQR\), \(\angle Q=90^\circ\), \(\angle P=38^\circ\) and \(PR=12\). Find \(QR\).`,
      [S`\(QR\) is opposite \(P\); \(PR\) is the hypotenuse: \(\sin38^\circ=\frac{QR}{12}\).`, S`\(QR=12\sin38^\circ\approx7.39\).`],
      S`\(QR\approx7.39\)`],
    ["Finding an angle", "The legs of a right triangle are 5 (opposite θ) and 9 (adjacent). Find θ.",
      [S`\(\tan\theta=\frac59\Rightarrow\theta=\tan^{-1}(0.5\overline5)\).`],
      S`\(\theta\approx29.1^\circ\)`],
    ["Exact values", S`Evaluate \(\sin60^\circ\cos30^\circ+\tan45^\circ\) exactly.`,
      [S`\(\frac{\sqrt3}2\cdot\frac{\sqrt3}2+1=\frac34+1\).`],
      S`\(\frac74\)`],
    ["Exact lengths", "A 6 m ladder makes a 30° angle with the ground. How high does it reach, and how far is its foot from the wall (exact)?",
      [S`Height \(=6\sin30^\circ=3\) m.`, S`Distance \(=6\cos30^\circ=3\sqrt3\) m.`],
      S`\(3\) m and \(3\sqrt3\approx5.20\) m`],
  ]),

  practice([
    q("sine", S`A right triangle has sides 7, 24, 25, and ∠A is opposite the side 7. Find \(\sin A\).`, num(0.28),
      "opp/hyp.", [S`\(\frac7{25}\).`], S`\(0.28\)`),
    q("side", S`An angle of 50° has an adjacent side of 10 in a right triangle. Find the opposite side to 2 decimals.`, num(10 * Math.tan(50 * Math.PI / 180), 0.01),
      "tan = opp/adj.", [S`\(10\tan50^\circ\).`], S`\(\approx11.92\)`),
    q("angle", S`\(\cos A=0.6\) for an acute angle A. Find A to 2 decimals.`, num(Math.acos(0.6) * 180 / Math.PI, 0.01),
      "Use cos⁻¹.", [S`\(\cos^{-1}0.6\).`], S`\(\approx53.13^\circ\)`),
    q("exact", S`Evaluate \(2\sin30^\circ+\cos60^\circ\).`, num(1.5),
      "Both are ½.", [S`\(1+\frac12\).`], S`\(1.5\)`),
    q("exact", S`What is \(\tan60^\circ\) exactly?`, choice([S`\(\sqrt3\)`, S`\(\frac{\sqrt3}2\)`, S`\(\frac1{\sqrt3}\)`, S`\(\frac12\)`], 0),
      "opp/adj in the 30°–60°–90° triangle.", [S`\(\frac{\sqrt3}{1}\).`], S`\(\sqrt3\)`),
  ]),

  ...hard([
    ["Two angles of elevation", S`From a point on level ground the angle of elevation to the top of a tower is 30°. Walking 20 m straight toward the tower, it becomes 60°. Find the tower's height exactly.`,
      [S`Let \(h\) be the height. The distances to the base are \(\frac{h}{\tan30^\circ}=h\sqrt3\) and \(\frac{h}{\tan60^\circ}=\frac h{\sqrt3}\).`, S`\(h\sqrt3-\frac h{\sqrt3}=20\Rightarrow h\cdot\frac{2}{\sqrt3}=20\Rightarrow h=10\sqrt3\).`],
      S`\(h=10\sqrt3\approx17.32\) m`,
      plane({ view: { xmin: -1, xmax: 36, ymin: -1, ymax: 20 }, segs: [{ pts: [[0, 0], [30, 0], [30, 17.32], [0, 0]], color: "blue" }, { pts: [[20, 0], [30, 17.32]], color: "red" }], points: [{ x: 0, y: 0, label: "30°" }, { x: 20, y: 0, label: "60°" }, { x: 30, y: 17.32, label: "top" }, { x: 10, y: 0, label: "20 m" }], step: { x: 5, y: 5 } })],
    ["Exact area", S`Find the exact area of an equilateral triangle with side 8.`,
      [S`Its height is \(8\sin60^\circ=4\sqrt3\).`, S`Area \(=\tfrac12(8)(4\sqrt3)\).`],
      S`\(16\sqrt3\)`],
  ], [
    q("hard", S`Evaluate \((\sin45^\circ)^2+\cos60^\circ\tan45^\circ\) exactly.`, num(1),
      "½ + ½.", [S`\(\frac12+\frac12\cdot1\).`], S`\(1\)`),
    q("hard", "From two points 30 m apart on a line toward a tower, the angles of elevation are 30° and 45°. Find the height to 2 decimals.", num(30 / (Math.sqrt(3) - 1), 0.01),
      "Distances h√3 and h differ by 30.", [S`\(h\sqrt3-h=30\Rightarrow h=\frac{30}{\sqrt3-1}\).`], S`\(\approx40.98\) m`),
    q("hard", "An isosceles triangle has equal sides 10 and a 120° apex angle. Find its base to 2 decimals.", num(10 * Math.sqrt(3), 0.01),
      "Split it into two 30°–60°–90° triangles.", [S`Half the base \(=10\sin60^\circ=5\sqrt3\).`], S`\(10\sqrt3\approx17.32\)`),
  ]),

  wrapUp({
    qas: [
      ["Why are 30°, 45°, 60° special?", "Their triangles have simple side ratios, so their trig values are exact."],
      ["Why does sin 30° equal cos 60°?", "In the same triangle, the side opposite 30° is adjacent to 60°: sin θ = cos(90° − θ)."],
      ["Why is tan 90° undefined?", "The adjacent side becomes 0, so the ratio would divide by 0."],
      ["When should I use exact values?", "Whenever the angle is special and the question asks for an exact answer."],
      ["How do I solve two-triangle elevation problems?", "Write each horizontal distance in terms of the height, then use the given difference."],
    ],
    summary: [
      "SOH CAH TOA for acute angles in right triangles.",
      "Special triangles: 1–√3–2 and 1–1–√2.",
      "Inverse ratios find angles.",
      "Exact values stay exact until the end.",
    ],
    next: "5.2 extends the ratios to angles from 0° to 360°.",
  }),
];
