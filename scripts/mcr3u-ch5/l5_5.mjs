// MCR3U 5.5 — The Cosine Law: SAS and SSS, derivation from the Pythagorean theorem, choosing a law, applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.5 The Cosine Law";
export const ID = "5c3e0001-0001-4001-8001-000000000505";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const cos = (d) => Math.cos(r(d)), sin = (d) => Math.sin(r(d));
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const side = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const ang = (a, b, c) => dg(Math.acos((b * b + c * c - a * a) / (2 * b * c))); // angle opposite a
// Example values
const e1 = side(8, 11, 52);
const e2 = ang(13, 7, 9); // largest angle opposite 13
const e3a = side(14, 10, 118), e3B = dg(Math.asin((14 * sin(118)) / e3a));
const e4 = side(3.2, 4.5, 180 - 35); // ships: heading change
const e5 = ang(6, 4, 5);
// Hard
const hp = side(20, 15, 180 - 40); // parallelogram long diagonal: sides 20, 15, angle 40°
const hq = side(20, 15, 40);
const hk = { a: 9, b: 12, c: 16 };
const hkA = ang(hk.a, hk.b, hk.c), hkB = ang(hk.b, hk.a, hk.c), hkC = 180 - hkA - hkB;
const triFig = (A, b, c, labels) => {
  const Cx = b * cos(A), Cy = b * sin(A);
  return plane({ view: { xmin: Math.min(-1, Cx - 1), xmax: Math.max(c, Cx) + 1.5, ymin: -1, ymax: Cy + 1.5 }, segs: [{ pts: [[0, 0], [c, 0], [Cx, Cy], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: labels[0] }, { x: c, y: 0, label: labels[1] }, { x: Cx, y: Cy, label: labels[2] }], step: { x: 2, y: 2 } });
};

export const blocks = () => [
  intro({
    icon: "📐",
    title: "The Cosine Law",
    overview: S`The sine law needs a side together with its opposite angle. When you know two sides and the angle <em>between</em> them (SAS), or all three sides (SSS), you need the <strong>cosine law</strong>: \(a^2=b^2+c^2-2bc\cos A\). It is the Pythagorean theorem with a correction term, and it never has an ambiguous case.`,
    goals: [
      "derive the cosine law from the Pythagorean theorem;",
      "find the third side from SAS;",
      "find an angle from SSS;",
      "choose between the sine law and the cosine law;",
      "solve navigation, surveying and design problems.",
    ],
    curriculum: "D1.6 (pose and solve problems involving right and oblique triangles in two-dimensional settings using the primary ratios, the cosine law and the sine law)",
    prior: [
      [S`Evaluate \(\cos120^\circ\).`, S`\(-\frac12\).`],
      [S`Solve \(\cos A=0.25\) for acute A.`, S`\(A\approx75.5^\circ\).`],
      [S`Expand \((c-x)^2\).`, S`\(c^2-2cx+x^2\).`],
    ],
    words: [
      ["SAS", "two sides and the contained angle", ""],
      ["SSS", "all three sides", ""],
      ["Cosine law", "\\(a^2=b^2+c^2-2bc\\cos A\\)", ""],
      ["Contained angle", "the angle between two given sides", ""],
    ],
  }),

  section("📌 Where it comes from", S`
  <p>Put A at the origin and side c along the x-axis, so \(C=(b\cos A,\ b\sin A)\) and \(B=(c,0)\). Then
  \(a^2=(c-b\cos A)^2+(b\sin A)^2=c^2-2bc\cos A+b^2(\cos^2A+\sin^2A)=b^2+c^2-2bc\cos A\).</p>
  ${table(["Form", "Use"], [["\\(a^2=b^2+c^2-2bc\\cos A\\)", "SAS: find side a"], ["\\(\\cos A=\\dfrac{b^2+c^2-a^2}{2bc}\\)", "SSS: find angle A"], ["A = 90°", "\\(\\cos A=0\\) gives Pythagoras"]])}
  ${keyIdea(S`If A is obtuse, \(\cos A<0\), so \(a^2>b^2+c^2\). The sign of \(b^2+c^2-a^2\) tells you at once whether A is acute, right or obtuse.`)}`),

  section("📌 Explore", S`<p>Set two sides and the angle between them. Watch the correction term \(-2bc\cos A\): it is negative for acute angles, zero at 90° and positive for obtuse angles.</p>`),

  widget("cosineLaw", { init: [7, 9, 60] }),

  section("📌 Watch out", watchOut([
    "The angle in the formula must be opposite the side on the left.",
    S`Do the multiplication \(2bc\cos A\) before subtracting — never compute \((b^2+c^2-2bc)\cos A\).`,
    S`For SSS, find the largest angle first (opposite the longest side) — then the other two are acute and the sine law is safe.`,
    S`\(\cos^{-1}\) gives angles up to 180°, so an obtuse answer appears automatically.`,
  ])),

  examples([
    ["SAS", S`In \(\triangle ABC\), \(b=8\), \(c=11\) and \(\angle A=52^\circ\). Find \(a\).`,
      [S`\(a^2=8^2+11^2-2(8)(11)\cos52^\circ\approx${f(e1 * e1)}\).`, S`\(a\approx${f(e1)}\).`],
      S`\(a\approx${f(e1)}\)`,
      triFig(52, 8, 11, ["A", "B", "C"])],
    ["SSS — largest angle", "A triangle has sides 7, 9 and 13. Find its largest angle.",
      [S`Largest angle is opposite 13: \(\cos\theta=\frac{7^2+9^2-13^2}{2(7)(9)}=\frac{-39}{126}\).`, S`\(\theta=\cos^{-1}(-0.3095)\approx${f(e2, 1)}^\circ\).`],
      S`\(\approx${f(e2, 1)}^\circ\) (obtuse)`],
    ["Solve the whole triangle", S`\(\angle A=118^\circ\), \(b=14\), \(c=10\). Find \(a\) and \(\angle B\).`,
      [S`\(a^2=196+100-280\cos118^\circ\Rightarrow a\approx${f(e3a)}\).`, S`A is the only obtuse angle, so the sine law is safe: \(\sin B=\frac{14\sin118^\circ}{${f(e3a)}}\Rightarrow B\approx${f(e3B, 1)}^\circ\).`],
      S`\(a\approx${f(e3a)}\), \(B\approx${f(e3B, 1)}^\circ\)`],
    ["Navigation", "A ship sails 3.2 km east, then turns 35° to the left and sails 4.5 km. How far is it from its start?",
      [S`The angle between the two legs, inside the triangle, is \(180^\circ-35^\circ=145^\circ\).`, S`\(d^2=3.2^2+4.5^2-2(3.2)(4.5)\cos145^\circ\).`],
      S`\(d\approx${f(e4)}\) km`,
      plane({ view: { xmin: -0.5, xmax: 8, ymin: -0.5, ymax: 3.5 }, segs: [{ pts: [[0, 0], [3.2, 0], [3.2 + 4.5 * cos(35), 4.5 * sin(35)]], color: "blue" }, { pts: [[0, 0], [3.2 + 4.5 * cos(35), 4.5 * sin(35)]], color: "red" }], points: [{ x: 0, y: 0, label: "start" }, { x: 3.2, y: 0, label: "turn" }, { x: 3.2 + 4.5 * cos(35), y: 4.5 * sin(35), label: "ship" }], step: { x: 1, y: 1 } })],
    ["Acute, right or obtuse?", "Classify the triangle with sides 4, 5, 6 by its largest angle, then find that angle.",
      [S`\(4^2+5^2=41\), which is greater than \(6^2=36\), so the largest angle is acute.`, S`\(\cos\theta=\frac{41-36}{40}=0.125\Rightarrow\theta\approx${f(e5, 1)}^\circ\).`],
      S`acute, \(\approx${f(e5, 1)}^\circ\)`],
  ]),

  practice([
    q("SAS", S`\(b=5\), \(c=7\), \(\angle A=60^\circ\). Find \(a\) to 2 decimals.`, num(side(5, 7, 60), 0.01),
      "cos 60° = ½.", [S`\(a^2=25+49-35=39\).`], S`\(\sqrt{39}\approx${f(side(5, 7, 60))}\)`),
    q("SSS", "A triangle has sides 5, 6 and 8. Find the angle opposite 8 to 1 decimal.", num(ang(8, 5, 6), 0.05),
      "cos θ = (25 + 36 − 64)/60.", [S`\(\cos\theta=-0.05\).`], S`\(\approx${f(ang(8, 5, 6), 1)}^\circ\)`),
    q("which law", "You know all three sides of a triangle. Which law finds an angle?", choice(["the cosine law", "the sine law", "either one directly", "neither"], 0),
      "No angle is known yet.", ["SSS needs the cosine law."], "the cosine law"),
    q("classify", "Sides 8, 15, 17: what is the largest angle?", num(90),
      "Compare 8² + 15² with 17².", [S`\(64+225=289\).`], S`\(90^\circ\)`),
    q("SAS", S`Two sides of a garden bed are 6 m and 4 m with a 120° angle between them. How long is the third side (2 decimals)?`, num(side(6, 4, 120), 0.01),
      "cos 120° = −½.", [S`\(36+16+24=76\).`], S`\(\sqrt{76}\approx${f(side(6, 4, 120))}\) m`),
  ]),

  ...hard([
    ["Diagonals of a parallelogram", "A parallelogram has sides 20 cm and 15 cm with a 40° angle. Find both diagonals.",
      [S`Short diagonal (opposite 40°): \(\sqrt{400+225-600\cos40^\circ}\approx${f(hq)}\).`, S`Long diagonal (opposite 140°): \(\sqrt{400+225-600\cos140^\circ}\approx${f(hp)}\).`, S`Check: \(d_1^2+d_2^2=2(20^2+15^2)=1250\) ✓.`],
      S`\(\approx${f(hq)}\) cm and \(\approx${f(hp)}\) cm`,
      plane({ view: { xmin: -1, xmax: 33, ymin: -1, ymax: 11 }, segs: [{ pts: [[0, 0], [20, 0], [20 + 15 * cos(40), 15 * sin(40)], [15 * cos(40), 15 * sin(40)], [0, 0]], color: "blue" }, { pts: [[0, 0], [20 + 15 * cos(40), 15 * sin(40)]], color: "red" }, { pts: [[20, 0], [15 * cos(40), 15 * sin(40)]], color: "amber" }], points: [{ x: 0, y: 0, label: "40°" }, { x: 10, y: 0, label: "20" }], step: { x: 5, y: 2 } })],
    ["All three angles", "Solve the triangle with sides 9, 12 and 16.",
      [S`Largest angle (opposite 16): \(\cos C=\frac{81+144-256}{216}\Rightarrow C\approx${f(hkC, 1)}^\circ\).`, S`\(\cos A=\frac{144+256-81}{384}\Rightarrow A\approx${f(hkA, 1)}^\circ\).`, S`\(B=180^\circ-A-C\approx${f(hkB, 1)}^\circ\).`],
      S`\(${f(hkA, 1)}^\circ,\ ${f(hkB, 1)}^\circ,\ ${f(hkC, 1)}^\circ\)`],
  ], [
    q("hard", "Two hikers leave camp along straight trails 65° apart. One walks 4 km, the other 6 km. How far apart are they (2 decimals)?", num(side(4, 6, 65), 0.01),
      "SAS with the 65° angle at camp.", [S`\(16+36-48\cos65^\circ\).`], S`\(\approx${f(side(4, 6, 65))}\) km`),
    q("hard", "Find x so that a triangle with sides 7, 8 and x has a 60° angle between the sides 7 and 8.", num(Math.sqrt(57), 0.01),
      "x² = 49 + 64 − 56.", [S`\(x^2=57\).`], S`\(\sqrt{57}\approx7.55\)`),
    q("hard", "The sides of a triangle are 10, 10 and 16. Find the apex angle between the two equal sides (1 decimal).", num(ang(16, 10, 10), 0.05),
      "It is opposite 16.", [S`\(\cos\theta=\frac{200-256}{200}=-0.28\).`], S`\(\approx${f(ang(16, 10, 10), 1)}^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["When do I need the cosine law?", "SAS (find the third side) or SSS (find an angle)."],
      ["Why is there no ambiguous case?", "cos⁻¹ gives a unique angle from 0° to 180°, and SAS/SSS fix one triangle."],
      ["How is it related to Pythagoras?", "When A = 90°, cos A = 0 and the formula becomes a² = b² + c²."],
      ["After one cosine-law step, can I switch to the sine law?", "Yes — but find angles opposite shorter sides so they are certainly acute."],
      ["How do I set up navigation problems?", "Draw both legs; the angle in the triangle is 180° minus the turn."],
    ],
    summary: [
      "a² = b² + c² − 2bc cos A.",
      "cos A = (b² + c² − a²)/(2bc).",
      "SAS, SSS → cosine law; ASA, AAS, SSA → sine law.",
      "Negative cos A ⇒ obtuse angle.",
    ],
    next: "5.6 uses all of these tools in three-dimensional problems.",
  }),
];
