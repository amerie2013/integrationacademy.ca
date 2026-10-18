// MCR3U 5.7 — Chapter 5 Review: special angles, angles to 360°, identities, sine law (ambiguous case), cosine law, 3-D
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, roots, hard, plane } from "./lib.mjs";

export const TITLE = "5.7 Chapter 5 Review";
export const ID = "5c3e0001-0001-4001-8001-000000000507";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const sin = (d) => Math.sin(r(d)), cos = (d) => Math.cos(r(d)), tan = (d) => Math.tan(r(d));
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
// Example 4: SSA count & solve
const B4 = dg(Math.asin((13 * sin(41)) / 9)), B4b = 180 - B4;
// Example 5: SAS then sine law
const e5a = Math.sqrt(12 ** 2 + 7 ** 2 - 2 * 12 * 7 * cos(73)), e5C = dg(Math.asin((7 * sin(73)) / e5a));
// Hard 1: kite-shaped field (two triangles sharing a diagonal)
const hD = Math.sqrt(90 ** 2 + 70 ** 2 - 2 * 90 * 70 * cos(64)), hAng = dg(Math.acos((60 ** 2 + 55 ** 2 - hD ** 2) / (2 * 60 * 55)));
// Hard 2: tower from two directions
const hh = 75 * tan(33), hB = hh / tan(24), hAB = Math.sqrt(75 ** 2 + hB ** 2 - 2 * 75 * hB * cos(110));

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 5 Review",
    overview: S`This review connects the chapter: exact values, angles up to 360°, reciprocal ratios and identities, the sine law with its ambiguous case, the cosine law, and problems in three dimensions. The examples combine skills; the practice and hard-level problems are at chapter-test level.`,
    goals: [
      "use exact values for special angles, including angles beyond 90°;",
      "find two angles with a given ratio using CAST;",
      "prove simple identities;",
      "choose and apply the sine law or cosine law, including the ambiguous case;",
      "solve multi-step 2-D and 3-D problems.",
    ],
    curriculum: "D1 (determining and applying trigonometric ratios: D1.1–D1.7)",
    prior: [
      [S`What is \(\cos210^\circ\) exactly?`, S`\(-\frac{\sqrt3}2\).`],
      [S`Which law solves SSS?`, "The cosine law."],
      [S`\(\angle A=30^\circ\), \(b=10\), \(a=5\): how many triangles?`, S`One (a right triangle, \(a=h\)).`],
    ],
    words: [
      ["5.1–5.2", "special triangles, terminal arm, CAST", ""],
      ["5.3", "reciprocal ratios, identities", ""],
      ["5.4", "sine law, ambiguous case", ""],
      ["5.5–5.6", "cosine law, 3-D problems", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Skill", "Key fact"], [
    ["Exact values", "triangles \\(1,\\sqrt3,2\\) and \\(1,1,\\sqrt2\\)"],
    ["Any angle", "\\(\\sin\\theta=\\frac yr\\), \\(\\cos\\theta=\\frac xr\\), \\(\\tan\\theta=\\frac yx\\); CAST gives signs"],
    ["Identities", "\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\), \\(\\sin^2\\theta+\\cos^2\\theta=1\\)"],
    ["Sine law", "\\(\\frac a{\\sin A}=\\frac b{\\sin B}\\); SSA may give 0, 1 or 2 triangles"],
    ["Cosine law", "\\(a^2=b^2+c^2-2bc\\cos A\\) for SAS and SSS"],
  ])}
  ${keyIdea("Before choosing a law, list what you know: a side with its opposite angle → sine law; otherwise (SAS, SSS) → cosine law. In 3-D, solve one flat triangle at a time.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the ambiguous-case examples and problems below.</p>`),

  widget("ambiguousCase", { init: [41, 13, 9] }),

  examples([
    ["Exact values", S`Evaluate \(\sin240^\circ\cos150^\circ+\tan315^\circ\) exactly.`,
      [S`\(\sin240^\circ=-\frac{\sqrt3}2\), \(\cos150^\circ=-\frac{\sqrt3}2\), \(\tan315^\circ=-1\).`, S`\(\frac34-1\).`],
      S`\(-\frac14\)`],
    ["Two angles", S`Solve \(3\tan\theta+\sqrt3=0\) for \(0^\circ\le\theta\le360^\circ\).`,
      [S`\(\tan\theta=-\frac1{\sqrt3}\): related angle 30°; tan negative in Q2, Q4.`],
      S`\(150^\circ,\ 330^\circ\)`],
    ["An identity", S`Prove \(\dfrac{\cos^2\theta}{1-\sin\theta}=1+\sin\theta\).`,
      [S`LS \(=\frac{1-\sin^2\theta}{1-\sin\theta}=\frac{(1-\sin\theta)(1+\sin\theta)}{1-\sin\theta}=1+\sin\theta=\) RS.`],
      "LS = RS ∎"],
    ["The ambiguous case", S`\(\angle A=41^\circ\), \(a=9\), \(b=13\). Find every possible ∠B.`,
      [S`\(h=13\sin41^\circ\approx${f(13 * sin(41))}\); \(h<9<13\): two triangles.`, S`\(\sin B=\frac{13\sin41^\circ}9\Rightarrow B\approx${f(B4, 1)}^\circ\) or \(${f(B4b, 1)}^\circ\).`],
      S`\(B\approx${f(B4, 1)}^\circ\) or \(${f(B4b, 1)}^\circ\)`],
    ["Cosine law, then sine law", S`\(b=12\), \(c=7\), \(\angle A=73^\circ\). Find \(a\) and \(\angle C\).`,
      [S`\(a^2=144+49-168\cos73^\circ\Rightarrow a\approx${f(e5a)}\).`, S`C is opposite the shortest side, so it is acute: \(\sin C=\frac{7\sin73^\circ}{${f(e5a)}}\Rightarrow C\approx${f(e5C, 1)}^\circ\).`],
      S`\(a\approx${f(e5a)}\), \(C\approx${f(e5C, 1)}^\circ\)`,
      plane({ view: { xmin: -1, xmax: 13, ymin: -1, ymax: 9 }, segs: [{ pts: [[0, 0], [12, 0], [7 * cos(73), 7 * sin(73)], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "A" }, { x: 12, y: 0, label: "C" }, { x: 7 * cos(73), y: 7 * sin(73), label: "B" }, { x: 6, y: 0, label: "12" }], step: { x: 2, y: 2 } })],
  ]),

  practice([
    q("exact", S`What is \(\sin330^\circ\)?`, choice([S`\(-\frac12\)`, S`\(\frac12\)`, S`\(-\frac{\sqrt3}2\)`, S`\(\frac{\sqrt3}2\)`], 0),
      "Related 30°, Quadrant 4.", [S`\(-\sin30^\circ\).`], S`\(-\frac12\)`),
    q("two angles", S`Solve \(\cos\theta=-\frac1{\sqrt2}\) for \(0^\circ\le\theta\le360^\circ\).`, roots(135, 225),
      "Related 45°, Q2 and Q3.", [S`\(180-45\), \(180+45\).`], S`\(135^\circ,\ 225^\circ\)`),
    q("reciprocal", S`Evaluate \(\sec^2 45^\circ\).`, num(2),
      "sec 45° = √2.", [S`\((\sqrt2)^2\).`], S`\(2\)`),
    q("sine law", S`\(\angle A=55^\circ\), \(\angle C=80^\circ\), \(c=20\). Find \(a\) (2 decimals).`, num((20 * sin(55)) / sin(80), 0.01),
      "a / sin A = c / sin C.", [S`\(\frac{20\sin55^\circ}{\sin80^\circ}\).`], S`\(\approx${f((20 * sin(55)) / sin(80))}\)`),
    q("cosine law", "A triangle has sides 6, 7 and 11. Find its largest angle (1 decimal).", num(dg(Math.acos((36 + 49 - 121) / 84)), 0.05),
      "Opposite 11.", [S`\(\cos\theta=\frac{36+49-121}{84}\).`], S`\(\approx${f(dg(Math.acos(-36 / 84)), 1)}^\circ\)`),
  ]),

  ...hard([
    ["A four-sided field", "A field ABCD has AB = 90 m, AD = 70 m and ∠BAD = 64°. The other two sides are BC = 60 m and CD = 55 m. Find the diagonal BD and ∠BCD.",
      [S`Triangle ABD (SAS): \(BD^2=90^2+70^2-2(90)(70)\cos64^\circ\Rightarrow BD\approx${f(hD, 1)}\) m.`, S`Triangle BCD (SSS): \(\cos\angle BCD=\frac{60^2+55^2-BD^2}{2(60)(55)}\Rightarrow\angle BCD\approx${f(hAng, 1)}^\circ\).`],
      S`\(BD\approx${f(hD, 1)}\) m, \(\angle BCD\approx${f(hAng, 1)}^\circ\)`,
      plane({ view: { xmin: -10, xmax: 100, ymin: -10, ymax: 100 }, segs: [{ pts: [[0, 0], [90, 0]], color: "blue" }, { pts: [[0, 0], [70 * cos(64), 70 * sin(64)]], color: "blue" }, { pts: [[90, 0], [70 * cos(64), 70 * sin(64)]], color: "red" }], points: [{ x: 0, y: 0, label: "A" }, { x: 90, y: 0, label: "B" }, { x: 70 * cos(64), y: 70 * sin(64), label: "D" }], step: { x: 10, y: 10 } }, "triangle ABD; C lies beyond the diagonal BD")],
    ["A tower seen from two sides", "From A, 75 m from the base C of a tower, the top is seen at 33°. From B the top is seen at 24°. On the ground, ∠ACB = 110°. Find the tower's height and AB.",
      [S`\(h=75\tan33^\circ\approx${f(hh, 1)}\) m.`, S`\(BC=\frac h{\tan24^\circ}\approx${f(hB, 1)}\) m.`, S`\(AB^2=75^2+BC^2-2(75)(BC)\cos110^\circ\Rightarrow AB\approx${f(hAB, 1)}\) m.`],
      S`\(h\approx${f(hh, 1)}\) m, \(AB\approx${f(hAB, 1)}\) m`],
  ], [
    q("hard", S`\(\sin\theta=-\frac{8}{17}\) and \(\tan\theta>0\). Find \(\sec\theta\) (4 decimals).`, num(-17 / 15, 0.0001),
      "Quadrant 3: x = −15.", [S`\(\cos\theta=-\frac{15}{17}\).`], S`\(\approx-1.1333\)`),
    q("hard", S`\(\angle A=35^\circ\), \(b=20\). For how many whole-number values of \(a\) are there two triangles?`, num(20 - Math.floor(20 * sin(35)) - 1),
      "Need h < a < b with h = 20 sin 35°.", [S`\(h\approx${f(20 * sin(35))}\), so \(a=12,13,\ldots,19\).`], S`\(${20 - Math.floor(20 * sin(35)) - 1}\)`),
    q("hard", "A box is 6 by 8 by 10. Find the angle between its space diagonal and the 6 by 8 base (1 decimal).", num(dg(Math.atan(10 / 10)), 0.05),
      "Base diagonal 10.", [S`\(\tan\theta=\frac{10}{10}\).`], S`\(45^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["What are the most common errors?", "Forgetting the second SSA triangle, mixing up opposite sides, and calculator mode."],
      ["How do I choose a law quickly?", "Look for a known side–opposite-angle pair: if there is one, use the sine law."],
      ["How do I find both angles with a given ratio?", "Find the related angle, then place it in the two quadrants CAST allows."],
      ["How do I approach 3-D problems?", "Find a flat triangle with enough data and pass the linking side on."],
      ["How should I study?", "Redo each lesson's hard-level problems, then check with the explorers."],
    ],
    summary: [
      "Exact values come from two special triangles plus CAST.",
      "Identities: rewrite one side in sin and cos.",
      "SSA: check for 0, 1 or 2 triangles.",
      "SAS, SSS: cosine law; 3-D: one plane at a time.",
    ],
    next: "Chapter 6 studies sinusoidal functions.",
  }),
];
