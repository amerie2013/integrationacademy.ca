// MPM2D 7.1 — The Sine Law (self-study format): development from an altitude, AAS and ASA (find a side),
// finding an angle in an acute triangle, solving a triangle, and a surveying problem
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, fig, atri } from "./lib.mjs";

export const TITLE = "7.1 The Sine Law";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📐",
    title: "The Sine Law",
    overview: S`The primary ratios only work in right triangles. To solve an acute triangle that has no right angle, draw an altitude: it splits the triangle into two right triangles, and writing the altitude two ways produces the <strong>sine law</strong>, \(\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}\). In this lesson you will follow that development, then use the law to find sides and angles of acute triangles and solve a measurement problem.`,
    goals: [
      "follow the development of the sine law from an altitude;",
      "label an acute triangle with sides opposite their angles;",
      "find a side when two angles and a side are known (AAS, ASA);",
      "find an angle when two sides and an angle opposite one of them are known;",
      "solve problems using the sine law.",
    ],
    curriculum: "T3 (explore the development of the sine law within acute triangles; solve problems involving acute triangles using the sine law)",
    prior: [
      [S`In a right triangle, \(\sin\theta=\)?`, S`\(\frac{\text{opposite}}{\text{hypotenuse}}\).`],
      [S`Solve \(\frac{x}{\sin40^\circ}=\frac{10}{\sin65^\circ}\).`, S`\(x=\frac{10\sin40^\circ}{\sin65^\circ}\approx7.09\).`],
      [S`Two angles of a triangle are \(48^\circ\) and \(67^\circ\). The third?`, S`\(65^\circ\).`],
    ],
    words: [
      ["Acute triangle", "all three angles less than \\(90^\\circ\\)", ""],
      ["Opposite side", "side \\(a\\) is across from \\(\\angle A\\)", ""],
      ["Altitude", "a perpendicular from a vertex to the opposite side", ""],
      ["Sine law", "\\(\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}\\)", ""],
    ],
  }),

  section("📌 Developing the law", S`
  ${fig({ w: 380, items: [...atri(58, 66, 9, { c: "c", a: "a", b: "b" }), { seg: [[9 * Math.sin((66 * Math.PI) / 180) / Math.sin((56 * Math.PI) / 180) * Math.cos((58 * Math.PI) / 180), 0], [9 * Math.sin((66 * Math.PI) / 180) / Math.sin((56 * Math.PI) / 180) * Math.cos((58 * Math.PI) / 180), 9 * Math.sin((66 * Math.PI) / 180) / Math.sin((56 * Math.PI) / 180) * Math.sin((58 * Math.PI) / 180)]], color: "red", dash: true }, { text: "h", at: [4.55, 2.6], color: "red", bold: true }] }, "The altitude h from C splits △ABC into two right triangles.")}
  <ol style="line-height:2">
    <li>In the left right triangle, \(\sin A=\frac hb\), so \(h=b\sin A\).</li>
    <li>In the right right triangle, \(\sin B=\frac ha\), so \(h=a\sin B\).</li>
    <li>So \(a\sin B=b\sin A\); divide by \(\sin A\sin B\): \(\dfrac a{\sin A}=\dfrac b{\sin B}\). An altitude from \(A\) brings in \(\dfrac c{\sin C}\) the same way.</li>
  </ol>
  ${keyIdea(S`Sine law: \(\dfrac a{\sin A}=\dfrac b{\sin B}=\dfrac c{\sin C}\) (or, flipped, \(\dfrac{\sin A}a=\dfrac{\sin B}b=\dfrac{\sin C}c\)). Use it when you know a side and the angle opposite it, plus one more part. Put the unknown on top: the side form to find a side, the sine form to find an angle.`)}`),

  section("📌 Explore", S`<p>Change the angles and the base. The altitude can always be written two ways, and the three ratios \(\frac a{\sin A}\), \(\frac b{\sin B}\), \(\frac c{\sin C}\) always agree.</p>`),

  widget("sineDerive", { init: [55, 65, 8] }),

  section("📌 Using it", S`
  ${watchOut([
    "Each side is paired with the angle opposite it — a with A, b with B.",
    "Find the third angle first when two angles are known: they add to 180°.",
    "To find an angle, solve for sin A, then use sin⁻¹.",
    "Keep the calculator in degree mode and round only at the end.",
    "Check: the largest side is opposite the largest angle.",
  ])}`),

  examples([
    ["Find a side (AAS)", S`In acute \(\triangle ABC\), \(\angle A=48^\circ\), \(\angle B=67^\circ\) and \(a=12\). Find \(b\).`,
      [S`\(b\) is opposite \(\angle B\): \(\frac b{\sin67^\circ}=\frac{12}{\sin48^\circ}\).`, S`\(b=\frac{12\sin67^\circ}{\sin48^\circ}\approx14.86\).`],
      S`\(b\approx14.9\)`,
      fig({ w: 320, items: atri(48, 67, 14.63, { a: "12", b: "b", A: "48°", B: "67°" }) })],
    ["Third angle first (ASA)", S`In acute \(\triangle ABC\), \(\angle A=52^\circ\), \(\angle B=71^\circ\) and \(c=15\). Find \(a\) and \(b\).`,
      [S`\(\angle C=180^\circ-52^\circ-71^\circ=57^\circ\).`, S`\(a=\frac{15\sin52^\circ}{\sin57^\circ}\approx14.09\); \(b=\frac{15\sin71^\circ}{\sin57^\circ}\approx16.91\).`],
      S`\(a\approx14.1\), \(b\approx16.9\)`],
    ["Find an angle", S`In acute \(\triangle ABC\), \(a=9\), \(b=11\) and \(\angle B=72^\circ\). Find \(\angle A\) and \(\angle C\).`,
      [S`\(\frac{\sin A}9=\frac{\sin72^\circ}{11}\Rightarrow\sin A=\frac{9\sin72^\circ}{11}\approx0.778\).`, S`\(\angle A\approx51.1^\circ\); \(\angle C\approx180^\circ-72^\circ-51.1^\circ=56.9^\circ\).`],
      S`\(\angle A\approx51.1^\circ\), \(\angle C\approx56.9^\circ\)`],
    ["Solve a triangle", S`In acute \(\triangle PQR\), \(\angle P=55^\circ\), \(\angle Q=60^\circ\) and \(p=20\). Solve the triangle.`,
      [S`\(\angle R=65^\circ\).`, S`\(q=\frac{20\sin60^\circ}{\sin55^\circ}\approx21.1\); \(r=\frac{20\sin65^\circ}{\sin55^\circ}\approx22.1\).`, S`Check: the longest side \(r\) is opposite the largest angle \(R\) ✓.`],
      S`\(\angle R=65^\circ\), \(q\approx21.1\), \(r\approx22.1\)`],
    ["Across a river", S`Points \(A\) and \(B\) are \(200\) m apart on one bank. A tree \(C\) on the far bank makes \(\angle CAB=62^\circ\) and \(\angle CBA=54^\circ\). How far is the tree from \(A\)?`,
      [S`\(\angle C=180^\circ-62^\circ-54^\circ=64^\circ\).`, S`\(AC\) is opposite \(\angle B\): \(AC=\frac{200\sin54^\circ}{\sin64^\circ}\approx180.0\).`],
      S`about \(180\) m`,
      fig({ w: 360, items: atri(62, 54, 200, { c: "200 m", b: "?", A: "62°", B: "54°", names: ["A", "B", "C (tree)"], fill: "green", color: "green" }) })],
  ]),

  practice([
    q("side", S`In acute \(\triangle ABC\), \(\angle A=40^\circ\), \(\angle B=75^\circ\) and \(a=10\). Find \(b\) to one decimal place.`, num(15.0, 0.06),
      "b/sin 75° = 10/sin 40°.", [S`\(b=\frac{10\sin75^\circ}{\sin40^\circ}\approx15.03\).`], S`\(15.0\)`),
    q("side", S`In acute \(\triangle ABC\), \(a=14\), \(\angle A=70^\circ\) and \(\angle B=50^\circ\). Find \(b\) to one decimal place.`, num(11.4, 0.06),
      "Pair b with B.", [S`\(b=\frac{14\sin50^\circ}{\sin70^\circ}\approx11.41\).`], S`\(11.4\)`),
    q("angle", S`In acute \(\triangle ABC\), \(a=8\), \(b=10\) and \(\angle B=80^\circ\). Find \(\angle A\) to one decimal place.`, num(52.0, 0.06),
      "sin A = 8 sin 80° ÷ 10.", [S`\(\sin A\approx0.788\Rightarrow A\approx52.0^\circ\).`], S`\(52.0^\circ\)`),
    q("ASA", S`In acute \(\triangle ABC\), \(\angle A=50^\circ\), \(\angle B=62^\circ\) and \(c=20\). Find \(a\) to one decimal place.`, num(16.5, 0.06),
      "Find ∠C first.", [S`\(\angle C=68^\circ\).`, S`\(a=\frac{20\sin50^\circ}{\sin68^\circ}\approx16.52\).`], S`\(16.5\)`),
    q("ratio", S`In a triangle, \(a=12\) and \(\angle A=40^\circ\). Find the common ratio \(\frac a{\sin A}\) to one decimal place.`, num(18.7, 0.06),
      "12 ÷ sin 40°.", [S`\(\frac{12}{0.6428}\approx18.67\).`], S`\(18.7\)`),
  ]),

  wrapUp({
    qas: [
      ["Where does the sine law come from?", "An altitude splits the triangle into two right triangles. The altitude equals b sin A and also a sin B; setting them equal gives a/sin A = b/sin B."],
      ["When can I use the sine law?", "When you know one side and the angle opposite it, plus one more side or angle — for example AAS, ASA (after finding the third angle), or two sides with an angle opposite one of them."],
      ["Which form should I use?", "Put the unknown in the numerator: a/sin A = b/sin B to find a side, sin A/a = sin B/b to find an angle."],
      ["Does it work in right triangles?", "Yes — with C = 90°, sin C = 1 and c/sin C = c, so a/sin A = c gives sin A = a/c, the usual ratio."],
      ["How do I check an answer?", "The angles must add to 180°, and the order of the sides must match the order of their opposite angles."],
    ],
    summary: [
      "a/sin A = b/sin B = c/sin C (from an altitude).",
      "Pair each side with its opposite angle.",
      "Two angles known: find the third first.",
      "To find an angle: solve for sin, then sin⁻¹.",
    ],
    next: "7.2 develops the cosine law for when no side–angle pair is known.",
  }),
];
