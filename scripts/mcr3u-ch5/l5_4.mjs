// MCR3U 5.4 — The Sine Law and the Ambiguous Case: ASA/AAS, SSA with zero, one or two triangles, problems
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.4 The Sine Law and the Ambiguous Case";
export const ID = "12e572ab-cbfe-47f2-8dfb-1db21e9331ed";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const sin = (d) => Math.sin(r(d));
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
// Example 1: ASA
const e1 = { a: (18 * sin(42)) / sin(63), b: (18 * sin(75)) / sin(63) };
// Example 2: AAS
const e2 = { b: (9 * sin(100)) / sin(35), c: (9 * sin(45)) / sin(35) };
// Example 3: SSA one triangle
const B3 = dg(Math.asin((9 * sin(50)) / 12)), C3 = 180 - 50 - B3, c3 = (12 * sin(C3)) / sin(50);
// Example 4: SSA two triangles
const B4 = dg(Math.asin((11 * sin(32)) / 7)), B4b = 180 - B4;
const CX = 11 * Math.cos(r(32)), CY = 11 * sin(32), DX = Math.sqrt(49 - CY * CY);
// Example 5: boat
const d5 = (400 * sin(67)) / sin(61);
// Hard 1
const Bh = dg(Math.asin((15 * sin(28)) / 10)), Bh2 = 180 - Bh, Ch = 180 - 28 - Bh, Ch2 = 180 - 28 - Bh2, ch = (10 * sin(Ch)) / sin(28), ch2 = (10 * sin(Ch2)) / sin(28);
// Hard 2: river
const AT = (50 * sin(110)) / sin(30), width = AT * sin(40);

export const blocks = () => [
  intro({
    icon: "📏",
    title: "The Sine Law and the Ambiguous Case",
    overview: S`In any triangle, each side is proportional to the sine of the opposite angle: \(\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}\). In this lesson you will use the sine law when you know two angles and a side, and when you know two sides and an angle opposite one of them (SSA). That last case is <strong>ambiguous</strong>: the information can fit no triangle, one triangle or two different triangles.`,
    goals: [
      "derive the sine law from the height of a triangle;",
      "solve triangles given ASA or AAS;",
      "decide whether SSA information gives 0, 1 or 2 triangles;",
      "find both triangles in the ambiguous case;",
      "solve problems in surveying and navigation.",
    ],
    curriculum: "D1.6 (pose and solve problems involving right and oblique triangles in two-dimensional settings using the primary ratios, the cosine law and the sine law, including the ambiguous case)",
    prior: [
      [S`Solve \(\frac{x}{\sin40^\circ}=\frac{12}{\sin65^\circ}\).`, S`\(x=\frac{12\sin40^\circ}{\sin65^\circ}\approx8.51\).`],
      [S`Which two angles between 0° and 180° have \(\sin\theta=0.5\)?`, S`\(30^\circ\) and \(150^\circ\).`],
      ["What do the angles of a triangle add to?", "180°."],
    ],
    words: [
      ["Oblique triangle", "a triangle with no right angle", ""],
      ["Sine law", "\\(\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}\\)", ""],
      ["Ambiguous case", "SSA data that may give two triangles", ""],
      ["Height h", "\\(h=b\\sin A\\), the shortest distance from C to side AB", ""],
    ],
  }),

  section("📌 Why the sine law works", S`
  <p>Drop the height \(h\) from C to side AB. In the two right triangles, \(h=b\sin A\) and \(h=a\sin B\). So \(b\sin A=a\sin B\), i.e. \(\frac a{\sin A}=\frac b{\sin B}\). The same argument with another height brings in \(c\).</p>
  ${table(["Given", "Number of triangles", "Use"], [["ASA or AAS", "exactly one", "sine law"], ["SSA, ∠A acute", "0, 1 or 2 (compare a with h and b)", "sine law, carefully"], ["SAS or SSS", "exactly one", "cosine law (5.5)"]])}
  ${keyIdea(S`SSA with acute ∠A and \(h=b\sin A\): if \(a<h\) no triangle; \(a=h\) one right triangle; \(h<a<b\) two triangles (B and 180° − B); \(a\ge b\) one triangle. If ∠A is obtuse there is one triangle only when \(a>b\).`)}`),

  section("📌 Explore", S`<p>Fix ∠A and side b, then change a. The dashed circle shows every place side a can reach; each crossing with the base is a possible vertex B.</p>`),

  widget("ambiguousCase", { init: [35, 10, 7] }),

  section("📌 Watch out", watchOut([
    "Match each side with its OPPOSITE angle.",
    S`\(\sin^{-1}\) on a calculator only gives an acute angle — check whether \(180^\circ-B\) also fits.`,
    "The second triangle exists only if A + (180° − B) < 180°.",
    "Keep full calculator values for later steps; round final answers.",
  ])),

  examples([
    ["ASA", S`In \(\triangle ABC\), \(\angle A=42^\circ\), \(\angle B=75^\circ\) and \(c=18\). Find \(a\) and \(b\).`,
      [S`\(\angle C=180^\circ-42^\circ-75^\circ=63^\circ\).`, S`\(a=\frac{18\sin42^\circ}{\sin63^\circ}\approx${f(e1.a)}\), \(b=\frac{18\sin75^\circ}{\sin63^\circ}\approx${f(e1.b)}\).`],
      S`\(a\approx${f(e1.a)}\), \(b\approx${f(e1.b)}\)`],
    ["AAS", S`\(\angle A=35^\circ\), \(\angle B=100^\circ\), \(a=9\). Solve the triangle.`,
      [S`\(\angle C=45^\circ\).`, S`\(b=\frac{9\sin100^\circ}{\sin35^\circ}\approx${f(e2.b)}\), \(c=\frac{9\sin45^\circ}{\sin35^\circ}\approx${f(e2.c)}\).`],
      S`\(\angle C=45^\circ\), \(b\approx${f(e2.b)}\), \(c\approx${f(e2.c)}\)`],
    ["SSA with one triangle", S`\(\angle A=50^\circ\), \(a=12\), \(b=9\). Solve the triangle.`,
      [S`\(a\ge b\), so only one triangle.`, S`\(\sin B=\frac{9\sin50^\circ}{12}\Rightarrow B\approx${f(B3, 1)}^\circ\); \(C\approx${f(C3, 1)}^\circ\).`, S`\(c=\frac{12\sin C}{\sin50^\circ}\approx${f(c3)}\).`],
      S`\(B\approx${f(B3, 1)}^\circ\), \(C\approx${f(C3, 1)}^\circ\), \(c\approx${f(c3)}\)`],
    ["SSA with two triangles", S`\(\angle A=32^\circ\), \(a=7\), \(b=11\). How many triangles? Find ∠B in each.`,
      [S`\(h=11\sin32^\circ\approx${f(11 * sin(32))}\); \(h<a<b\): two triangles.`, S`\(\sin B=\frac{11\sin32^\circ}{7}\Rightarrow B\approx${f(B4, 1)}^\circ\) or \(B\approx${f(B4b, 1)}^\circ\).`],
      S`\(B\approx${f(B4, 1)}^\circ\) or \(${f(B4b, 1)}^\circ\)`,
      plane({ view: { xmin: -1, xmax: 18, ymin: -1, ymax: 8 }, segs: [{ pts: [[0, 0], [CX, CY]], color: "blue" }, { pts: [[CX, CY], [CX - DX, 0]], color: "amber" }, { pts: [[CX, CY], [CX + DX, 0]], color: "violet" }, { pts: [[0, 0], [17, 0]], color: "gray" }], points: [{ x: 0, y: 0, label: "A" }, { x: CX, y: CY, label: "C" }, { x: CX - DX, y: 0, label: "B₂" }, { x: CX + DX, y: 0, label: "B₁" }], step: { x: 2, y: 2 } })],
    ["Locating a boat", "Two observers 400 m apart on a straight shore see a boat. The angles between the shore and their lines of sight are 52° and 67°. How far is the boat from the first observer?",
      [S`The angle at the boat is \(180^\circ-52^\circ-67^\circ=61^\circ\).`, S`The side from observer 1 to the boat is opposite the 67° angle: \(\frac{400\sin67^\circ}{\sin61^\circ}\).`],
      S`\(\approx${f(d5, 1)}\) m`],
  ]),

  practice([
    q("find a side", S`\(\angle A=40^\circ\), \(\angle B=70^\circ\), \(b=15\). Find \(a\) to 2 decimals.`, num((15 * sin(40)) / sin(70), 0.01),
      "a / sin A = b / sin B.", [S`\(a=\frac{15\sin40^\circ}{\sin70^\circ}\).`], S`\(\approx${f((15 * sin(40)) / sin(70))}\)`),
    q("find an angle", S`\(\angle A=48^\circ\), \(a=20\), \(b=16\). Find ∠B to 1 decimal.`, num(dg(Math.asin((16 * sin(48)) / 20)), 0.05),
      "a > b: only one (acute) answer.", [S`\(\sin B=\frac{16\sin48^\circ}{20}\).`], S`\(\approx${f(dg(Math.asin((16 * sin(48)) / 20)), 1)}^\circ\)`),
    q("count", S`\(\angle A=30^\circ\), \(a=4\), \(b=10\). How many triangles?`, num(0),
      "Compare a with h = b sin A.", [S`\(h=5>4\).`], S`\(0\)`),
    q("count", S`\(\angle A=40^\circ\), \(a=8\), \(b=10\). How many triangles?`, num(2),
      "h = 10 sin 40° ≈ 6.43.", [S`\(h<a<b\).`], S`\(2\)`),
    q("which law", "You know two sides and the angle opposite one of them. Which law do you start with?", choice(["the sine law", "the cosine law", "the Pythagorean theorem", "none — it is impossible"], 0),
      "SSA pairs a side with its opposite angle.", ["Sine law, checking for the ambiguous case."], "the sine law"),
  ]),

  ...hard([
    ["Both triangles", S`\(\angle A=28^\circ\), \(a=10\), \(b=15\). Solve every possible triangle.`,
      [S`\(h=15\sin28^\circ\approx${f(15 * sin(28))}<10<15\): two triangles.`, S`\(B_1\approx${f(Bh, 1)}^\circ\), \(C_1\approx${f(Ch, 1)}^\circ\), \(c_1\approx${f(ch)}\).`, S`\(B_2\approx${f(Bh2, 1)}^\circ\), \(C_2\approx${f(Ch2, 1)}^\circ\), \(c_2\approx${f(ch2)}\).`],
      "two triangles, as listed"],
    ["Width of a river", "From point A on a straight bank, the line of sight to a tree T on the far bank makes a 40° angle with the bank. A surveyor walks 50 m along the bank toward the tree's side to B, where the line of sight to T makes a 70° angle with the bank ahead (so ∠ABT = 110°). Find the width of the river.",
      [S`In \(\triangle ABT\): \(\angle A=40^\circ\), \(\angle B=110^\circ\), so \(\angle T=30^\circ\).`, S`\(AT=\frac{50\sin110^\circ}{\sin30^\circ}\approx${f(AT, 1)}\) m.`, S`Width \(=AT\sin40^\circ\approx${f(width, 1)}\) m.`],
      S`\(\approx${f(width, 1)}\) m`,
      plane({ view: { xmin: -10, xmax: 140, ymin: -10, ymax: 70 }, segs: [{ pts: [[0, 0], [50, 0], [AT * Math.cos(r(40)), AT * sin(40)], [0, 0]], color: "blue" }, { pts: [[-10, 0], [140, 0]], color: "green" }, { pts: [[-10, width], [140, width]], color: "green" }], points: [{ x: 0, y: 0, label: "A" }, { x: 50, y: 0, label: "B" }, { x: AT * Math.cos(r(40)), y: width, label: "T" }], step: { x: 10, y: 10 } })],
  ], [
    q("hard", S`\(\angle A=30^\circ\) and \(b=12\). What is the smallest whole-number value of \(a\) that gives two triangles?`, num(7),
      "Two triangles when h < a < b.", [S`\(h=12\sin30^\circ=6\).`], S`\(7\)`),
    q("hard", S`\(\angle A=40^\circ\), \(a=8\), \(b=10\). Find the obtuse value of ∠B to 1 decimal.`, num(180 - dg(Math.asin((10 * sin(40)) / 8)), 0.05),
      "180° minus the acute answer.", [S`\(B_1=\sin^{-1}\frac{10\sin40^\circ}8\).`], S`\(\approx${f(180 - dg(Math.asin((10 * sin(40)) / 8)), 1)}^\circ\)`),
    q("hard", "Two lookouts 2 km apart on a straight coast see a ship at angles of 48° and 75° to the coast. How far is the ship from the coast (km, 2 decimals)?", num(((2 * sin(75)) / sin(57)) * sin(48), 0.01),
      "Find one line of sight with the sine law, then use sine for the perpendicular.", [S`Angle at the ship 57°; distance from the first lookout \(\frac{2\sin75^\circ}{\sin57^\circ}\); times \(\sin48^\circ\).`], S`\(\approx${f(((2 * sin(75)) / sin(57)) * sin(48))}\) km`),
  ]),

  wrapUp({
    qas: [
      ["When can I use the sine law?", "When you know a side and its opposite angle, plus one more side or angle."],
      ["Why is SSA ambiguous?", "Side a can swing to touch the base in two places, giving an acute and an obtuse ∠B."],
      ["How do I find the second triangle?", "Use B₂ = 180° − B₁ and check that A + B₂ < 180°."],
      ["Does the ambiguous case happen with ASA?", "No — two angles and a side fix the triangle."],
      ["What if sin B > 1?", "No triangle exists: side a is too short to reach the base."],
    ],
    summary: [
      "a/sin A = b/sin B = c/sin C.",
      "ASA, AAS: one triangle.",
      "SSA (acute A): compare a with h = b sin A and with b.",
      "Second solution: 180° − B.",
    ],
    next: "5.5 develops the cosine law for SAS and SSS.",
  }),
];
