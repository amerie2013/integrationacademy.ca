// MCR3U 5.6 — Trigonometry in Three Dimensions: split a 3-D situation into a horizontal and a vertical triangle,
// heights across obstacles, diagonals in boxes, angles between lines and planes
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.6 Trigonometry in Three Dimensions";
export const ID = "9f3cf04d-6dc2-4543-96b1-6fc97aa48412";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const sin = (d) => Math.sin(r(d)), cos = (d) => Math.cos(r(d)), tan = (d) => Math.tan(r(d));
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
// oblique projection helper: (x, y, z) -> 2-D, y goes "into the page" up-right
const P = (x, y, z) => [x + 0.5 * y, z + 0.5 * y];
const box = (L, W, H, extra = [], pts = []) => {
  const v = [[0, 0, 0], [L, 0, 0], [L, W, 0], [0, W, 0], [0, 0, H], [L, 0, H], [L, W, H], [0, W, H]].map((p) => P(...p));
  const E = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  return plane({ bare: true, view: { xmin: -1, xmax: L + 0.5 * W + 1, ymin: -1, ymax: H + 0.5 * W + 1 }, segs: [...E.map(([a, b]) => ({ pts: [v[a], v[b]], color: "gray" })), ...extra.map((e) => ({ pts: e.pts.map((p) => P(...p)), color: e.color }))], points: pts.map((p) => ({ x: P(...p.at)[0], y: P(...p.at)[1], label: p.label })), step: { x: 2, y: 2 } });
};
// Example 1: tower across a river (AAS on the ground, then tangent)
const e1AC = (90 * sin(64)) / sin(180 - 48 - 64), e1h = e1AC * tan(31);
// Example 2: box diagonal
const e2base = Math.hypot(8, 6), e2d = Math.hypot(e2base, 5), e2ang = dg(Math.atan(5 / e2base));
// Example 3: two observers, tower due north / east
const e3h = 40 * tan(35), e3dB = e3h / tan(28), e3AB = Math.hypot(40, e3dB);
// Example 4: kite / balloon cosine law on the ground
const e4g1 = 300 / tan(40), e4g2 = 300 / tan(25), e4d = Math.sqrt(e4g1 ** 2 + e4g2 ** 2 - 2 * e4g1 * e4g2 * cos(70));
// Example 5: ramp / roof angle
const e5 = dg(Math.atan(3 / 4));
// Hard 1: pyramid
const hpHalfDiag = (10 * Math.SQRT2) / 2, hpSlant = Math.hypot(hpHalfDiag, 12), hpAng = dg(Math.atan(12 / hpHalfDiag));
// Hard 2: cliff, two boats
const hBC = (60 * tan(30)) / tan(40), hAB = Math.sqrt(3600 + hBC ** 2 - 120 * hBC * cos(80));
const hcA = 80 / tan(22), hcB = 80 / tan(15), hcD = Math.sqrt(hcA ** 2 + hcB ** 2 - 2 * hcA * hcB * cos(54));

export const blocks = () => [
  intro({
    icon: "🏗️",
    title: "Trigonometry in Three Dimensions",
    overview: S`Real problems are rarely flat: a surveyor measures angles on the ground and an angle of elevation up to a tower; an engineer needs the diagonal of a box. The strategy is always the same — find the <strong>triangles that lie in a single plane</strong>, solve the one with enough information, and pass a shared side to the next triangle. In this lesson you will combine the primary ratios, the sine law and the cosine law in three-dimensional settings.`,
    goals: [
      "sketch a 3-D situation and identify horizontal and vertical triangles;",
      "decide which triangle to solve first and which side links two triangles;",
      "find heights of objects you cannot reach;",
      "find space diagonals and angles in boxes and pyramids;",
      "solve multi-step problems using the sine and cosine laws.",
    ],
    curriculum: "D1.7 (pose and solve problems involving right and oblique triangles in three-dimensional settings using the primary trigonometric ratios, the cosine law and the sine law)",
    prior: [
      [S`A 3–4 rectangle: how long is its diagonal?`, S`\(5\).`],
      [S`From 50 m away, the elevation to a top is 30°. How high is it?`, S`\(50\tan30^\circ\approx28.87\) m.`],
      ["Which law solves SAS?", "The cosine law."],
    ],
    words: [
      ["Horizontal triangle", "a triangle lying on the ground (or a floor)", ""],
      ["Vertical triangle", "a triangle standing upright, usually with a right angle at the ground", ""],
      ["Linking side", "a side shared by two triangles; solve for it in one, use it in the other", ""],
      ["Space diagonal", "a segment joining opposite corners of a box", "\\(\\sqrt{l^2+w^2+h^2}\\)"],
    ],
  }),

  section("📌 A plan for every 3-D problem", S`
  ${table(["Step", "What to do"], [["1", "Sketch in 3-D; mark right angles at the ground"], ["2", "List the triangles; colour the horizontal and vertical ones differently"], ["3", "Find a triangle with enough data (3 facts, at least one a side)"], ["4", "Solve it for the linking side"], ["5", "Move to the next triangle; repeat"]])}
  ${box(8, 6, 5, [{ pts: [[0, 0, 0], [8, 6, 0]], color: "amber" }, { pts: [[0, 0, 0], [8, 6, 5]], color: "red" }], [{ at: [0, 0, 0], label: "A" }, { at: [8, 6, 5], label: "G" }])}
  ${keyIdea(S`A vertical edge meets every line on the ground at 90°. That right angle lets you use the primary ratios in the vertical triangle — the ground triangle is often oblique and needs the sine or cosine law.`)}`),

  section("📌 Explore", S`<p>Two surveyors at A and B measure angles on the ground to the base C of a tower across a river, then measure the elevation from A. Change the measurements and follow the two triangles.</p>`),

  widget("towerLab", { init: [120, 50, 70, 28] }),

  section("📌 Watch out", watchOut([
    "Angles of elevation are measured in a vertical plane; angles between sightlines on the ground are in a horizontal plane — don't mix them up.",
    "The right angle is at the foot of the vertical object, not at the observer.",
    "Keep the linking side to full calculator accuracy.",
    "A sketch that looks 'flat' often hides which angle is 90°; re-draw if necessary.",
  ])),

  examples([
    ["Tower across a river", S`Points A and B are 90 m apart on one bank. The base C of a tower on the far bank gives \(\angle CAB=48^\circ\) and \(\angle CBA=64^\circ\). From A, the angle of elevation of the top is 31°. Find the tower's height.`,
      [S`Ground triangle: \(\angle C=68^\circ\); \(AC=\frac{90\sin64^\circ}{\sin68^\circ}\approx${f(e1AC)}\) m.`, S`Vertical triangle: \(h=AC\tan31^\circ\).`],
      S`\(h\approx${f(e1h, 1)}\) m`],
    ["Diagonal of a box", "A box is 8 cm by 6 cm by 5 cm. Find the space diagonal and the angle it makes with the base.",
      [S`Base diagonal \(\sqrt{8^2+6^2}=10\).`, S`Space diagonal \(\sqrt{10^2+5^2}\approx${f(e2d)}\); angle \(\tan^{-1}\frac5{10}\approx${f(e2ang, 1)}^\circ\).`],
      S`\(\approx${f(e2d)}\) cm, \(\approx${f(e2ang, 1)}^\circ\)`,
      box(8, 6, 5, [{ pts: [[0, 0, 0], [8, 6, 0]], color: "amber" }, { pts: [[0, 0, 0], [8, 6, 5]], color: "red" }, { pts: [[8, 6, 0], [8, 6, 5]], color: "blue" }], [{ at: [0, 0, 0], label: "A" }, { at: [8, 6, 5], label: "G" }])],
    ["Two observers at right angles", "Observer A is 40 m due south of a flagpole and sees its top at 35°. Observer B is due east of the pole and sees the top at 28°. How far apart are A and B?",
      [S`Height \(h=40\tan35^\circ\approx${f(e3h)}\) m.`, S`B's distance to the pole \(=\frac h{\tan28^\circ}\approx${f(e3dB)}\) m.`, S`South and east are perpendicular: \(AB=\sqrt{40^2+${f(e3dB)}^2}\).`],
      S`\(\approx${f(e3AB, 1)}\) m`],
    ["Balloon over a field", "A balloon is 300 m up. Two people on the ground see it at elevations of 40° and 25°; the angle between their lines to the point directly below the balloon is 70°. How far apart are they?",
      [S`Ground distances: \(\frac{300}{\tan40^\circ}\approx${f(e4g1, 1)}\) and \(\frac{300}{\tan25^\circ}\approx${f(e4g2, 1)}\) m.`, S`Cosine law on the ground with the 70° angle.`],
      S`\(\approx${f(e4d, 0)}\) m`],
    ["Angle of a ramp", "A wheelchair ramp rises 3 m over a horizontal run of 4 m toward a wall. What angle does it make with the ground?",
      [S`Vertical triangle with legs 3 and 4: \(\tan\theta=\frac34\).`],
      S`\(\approx${f(e5, 1)}^\circ\)`],
  ]),

  practice([
    q("box", "A room is 5 m by 4 m by 3 m. Find the space diagonal (2 decimals).", num(Math.sqrt(50), 0.01),
      "√(l² + w² + h²).", [S`\(\sqrt{25+16+9}\).`], S`\(\sqrt{50}\approx7.07\) m`),
    q("height", "From 60 m away on level ground, the elevation to the top of a building is 38°. Find its height (1 decimal).", num(60 * tan(38), 0.05),
      "tan = opp/adj.", [S`\(60\tan38^\circ\).`], S`\(\approx${f(60 * tan(38), 1)}\) m`),
    q("ground first", S`In the ground triangle, \(AB=50\), \(\angle A=70^\circ\), \(\angle B=60^\circ\). Find \(AC\) (2 decimals).`, num((50 * sin(60)) / sin(50), 0.01),
      "∠C = 50°; sine law.", [S`\(\frac{50\sin60^\circ}{\sin50^\circ}\).`], S`\(\approx${f((50 * sin(60)) / sin(50))}\)`),
    q("plane", "An angle of elevation is measured in which kind of plane?", choice(["a vertical plane", "a horizontal plane", "any plane", "the plane of the ground triangle"], 0),
      "It goes up from the ground.", ["Vertical."], "a vertical plane"),
    q("angle", "A cube has edge 4. Find the angle between a space diagonal and the base (1 decimal).", num(dg(Math.atan(4 / (4 * Math.SQRT2))), 0.05),
      "Rise 4 over base diagonal 4√2.", [S`\(\tan\theta=\frac1{\sqrt2}\).`], S`\(\approx${f(dg(Math.atan(1 / Math.SQRT2)), 1)}^\circ\)`),
  ]),

  ...hard([
    ["A square pyramid", "A pyramid has a square base of side 10 m and a vertical height of 12 m. Find the length of a slant edge and the angle it makes with the base.",
      [S`Half a base diagonal: \(\frac{10\sqrt2}2\approx${f(hpHalfDiag)}\) m.`, S`Slant edge \(=\sqrt{${f(hpHalfDiag)}^2+12^2}\approx${f(hpSlant)}\) m; angle \(\tan^{-1}\frac{12}{${f(hpHalfDiag)}}\approx${f(hpAng, 1)}^\circ\).`],
      S`\(\approx${f(hpSlant)}\) m, \(\approx${f(hpAng, 1)}^\circ\)`,
      plane({ bare: true, view: { xmin: -1, xmax: 17, ymin: -1, ymax: 14 }, segs: [{ pts: [P(0, 0, 0), P(10, 0, 0), P(10, 10, 0), P(0, 10, 0), P(0, 0, 0)], color: "gray" }, ...[[0, 0], [10, 0], [10, 10], [0, 10]].map(([x, y]) => ({ pts: [P(x, y, 0), P(5, 5, 12)], color: "blue" })), { pts: [P(5, 5, 0), P(5, 5, 12)], color: "red" }, { pts: [P(0, 0, 0), P(5, 5, 0)], color: "amber" }], points: [{ x: P(5, 5, 12)[0], y: P(5, 5, 12)[1], label: "apex" }], step: { x: 2, y: 2 } })],
    ["Two boats from a cliff", "From the top of an 80 m cliff, two boats are seen at angles of depression 22° and 15°. Viewed from above, the lines to the boats from the cliff's base make a 54° angle. How far apart are the boats?",
      [S`Ground distances: \(\frac{80}{\tan22^\circ}\approx${f(hcA, 1)}\) m and \(\frac{80}{\tan15^\circ}\approx${f(hcB, 1)}\) m.`, S`Cosine law on the water with 54°.`],
      S`\(\approx${f(hcD, 0)}\) m`,
      plane({ view: { xmin: -20, xmax: 320, ymin: -20, ymax: 260 }, segs: [{ pts: [[0, 0], [hcA, 0]], color: "blue" }, { pts: [[0, 0], [hcB * cos(54), hcB * sin(54)]], color: "blue" }, { pts: [[hcA, 0], [hcB * cos(54), hcB * sin(54)]], color: "red" }], points: [{ x: 0, y: 0, label: "cliff base" }, { x: hcA, y: 0, label: "boat 1" }, { x: hcB * cos(54), y: hcB * sin(54), label: "boat 2" }], step: { x: 50, y: 50 } }, "top view of the water")],
  ], [
    q("hard", S`Ground triangle: \(AB=150\) m, \(\angle A=55^\circ\), \(\angle B=75^\circ\). From B the elevation of the top of a tower at C is 20°. Find the height (1 decimal).`, num(((150 * sin(55)) / sin(50)) * tan(20), 0.05),
      "Find BC first (opposite ∠A).", [S`\(BC=\frac{150\sin55^\circ}{\sin50^\circ}\); \(h=BC\tan20^\circ\).`], S`\(\approx${f(((150 * sin(55)) / sin(50)) * tan(20), 1)}\) m`),
    q("hard", "A box is 12 by 9 by 8. Find the angle between the space diagonal and the 12 by 9 base (1 decimal).", num(dg(Math.atan(8 / 15)), 0.05),
      "Base diagonal 15.", [S`\(\tan\theta=\frac8{15}\).`], S`\(\approx${f(dg(Math.atan(8 / 15)), 1)}^\circ\)`),
    q("hard", "A pole stands at C. Its top is seen at elevation 30° from A, 60 m from C, and at elevation 40° from B. On the ground, ∠ACB = 80°. How far apart are A and B (1 decimal)?", num(Math.sqrt(60 ** 2 + ((60 * tan(30)) / tan(40)) ** 2 - 2 * 60 * ((60 * tan(30)) / tan(40)) * cos(80)), 0.05),
      "Height from A, then BC from the height, then the cosine law on the ground.", [S`\(h=60\tan30^\circ\); \(BC=\frac h{\tan40^\circ}\); \(AB^2=60^2+BC^2-2(60)(BC)\cos80^\circ\).`], S`\(\approx${f(hAB, 1)}\) m`),
  ]),

  wrapUp({
    qas: [
      ["How do I start a 3-D problem?", "Sketch it and find a triangle lying in one plane with three known facts."],
      ["Where are the right angles?", "Where a vertical object meets the ground, and where perpendicular directions (north/east) meet."],
      ["Which law do I use on the ground?", "Whichever fits the data: sine law for ASA/AAS/SSA, cosine law for SAS/SSS."],
      ["What is a linking side?", "A side shared by two triangles: solve it in one, then use it in the other."],
      ["Do I round in the middle?", "No — keep full values until the final answer."],
    ],
    summary: [
      "Split 3-D into horizontal and vertical triangles.",
      "Solve the triangle with enough information first.",
      "Pass the linking side to the next triangle.",
      "Space diagonal: √(l² + w² + h²).",
    ],
    next: "5.7 reviews the whole chapter.",
  }),
];
