// MPM2D 7.4 — Applications of the Sine & Cosine Laws (self-study format): distance across a lake, a roof truss,
// locating a fire from two towers, the width of a canyon, and the height of a kite — acute triangles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, fig, atri } from "./lib.mjs";

export const TITLE = "7.4 Applications of the Sine & Cosine Laws";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🗺️",
    title: "Applications of the Sine & Cosine Laws",
    overview: S`Surveyors, navigators, builders and firefighters measure what they can reach — a baseline and some angles, or two distances and an angle — and use the sine and cosine laws to find what they can't. In this lesson you will turn each situation into an acute triangle, decide which law applies, and sometimes finish with a right-triangle ratio to find a height or a perpendicular width.`,
    goals: [
      "draw and label a triangle for a real situation;",
      "choose the sine law or the cosine law from the measurements;",
      "solve distance, angle and height problems;",
      "combine an oblique triangle with a right triangle when needed;",
      "state answers with sensible units and rounding.",
    ],
    curriculum: "T3 (solve problems, including those that arise from real-world applications, involving the measures of sides and angles in acute triangles)",
    prior: [
      [S`Which law for SAS?`, S`The cosine law.`],
      [S`Which law for AAS?`, S`The sine law.`],
      [S`Height of a triangle with side \(b\) at angle \(A\) to the base?`, S`\(b\sin A\).`],
    ],
    words: [
      ["Baseline", "a measured segment used to locate other points", ""],
      ["Triangulation", "locating a point from two angles at the ends of a baseline", ""],
      ["Truss", "a triangular frame that supports a roof or bridge", ""],
      ["Perpendicular distance", "the shortest distance from a point to a line", ""],
    ],
  }),

  section("📌 From words to a triangle", S`
  ${keyIdea(S`Sketch the situation, mark the measured sides and angles, and label the triangle \(A\), \(B\), \(C\) with opposite sides \(a\), \(b\), \(c\). Then: a side–angle pair → sine law; SAS or SSS → cosine law. If the question asks for a height or a width, drop a perpendicular and use \(\sin\) in the right triangle it makes.`)}
  ${fig({ w: 380, items: atri(62, 54, 200, { c: "baseline", A: "62°", B: "54°", names: ["A", "B", "C"], fill: "green", color: "green" }) }, "Triangulation: a baseline and the angles at its ends fix the position of C.")}`),

  section("📌 Explore", S`<p>Change the baseline and the two angles. The sine law gives each distance to the tree, and the perpendicular gives the width of the river.</p>`),

  widget("surveyLab", { init: [200, 62, 54] }),

  section("📌 Tips for applications", S`
  ${watchOut([
    "Draw the diagram first and check that every angle is less than 90°.",
    "Use the angle inside the triangle, not an angle measured from a different line.",
    "Find the third angle before using the sine law with two given angles.",
    "A height or perpendicular width needs one more right-triangle step.",
    "Keep full calculator values until the final answer.",
  ])}`),

  examples([
    ["Across a lake", S`From point \(C\), a surveyor measures \(CA=320\) m and \(CB=410\) m to the ends of a lake, with \(\angle ACB=58^\circ\). How long is the lake (\(AB\))?`,
      [S`SAS → cosine law: \(AB^2=320^2+410^2-2(320)(410)\cos58^\circ\approx131\,450\).`, S`\(AB\approx362.6\).`],
      S`about \(363\) m`,
      fig({ w: 320, items: atri(73.5, 48.5, 362.6, { b: "320 m", a: "410 m", C: "58°", names: ["A", "B", "C"] }) })],
    ["A roof truss", S`A triangular truss has sides \(4\) m, \(5\) m and \(6\) m. Find its angles.`,
      [S`SSS: largest angle opposite \(6\): \(\cos\theta=\frac{16+25-36}{40}=0.125\), \(\theta\approx82.8^\circ\).`, S`Opposite \(5\): \(\cos\phi=\frac{16+36-25}{48}\), \(\phi\approx55.8^\circ\); the last is \(\approx41.4^\circ\).`],
      S`about \(82.8^\circ\), \(55.8^\circ\), \(41.4^\circ\)`],
    ["Locating a fire", S`Two ranger towers \(A\) and \(B\) are \(10\) km apart. A fire \(F\) is seen at \(\angle FAB=48^\circ\) and \(\angle FBA=61^\circ\). How far is the fire from each tower?`,
      [S`\(\angle F=180^\circ-48^\circ-61^\circ=71^\circ\).`, S`\(AF=\frac{10\sin61^\circ}{\sin71^\circ}\approx9.25\); \(BF=\frac{10\sin48^\circ}{\sin71^\circ}\approx7.86\).`],
      S`\(9.25\) km from \(A\), \(7.86\) km from \(B\)`,
      fig({ w: 340, items: atri(48, 61, 10, { c: "10 km", A: "48°", B: "61°", names: ["A", "B", "F"], fill: "red", color: "red" }) })],
    ["Width of a canyon", S`On one rim, points \(A\) and \(B\) are \(150\) m apart. A rock \(C\) on the other rim makes \(\angle CAB=68^\circ\) and \(\angle CBA=57^\circ\). Find the width of the canyon (the perpendicular distance from \(C\) to \(AB\)).`,
      [S`\(\angle C=55^\circ\); \(AC=\frac{150\sin57^\circ}{\sin55^\circ}\approx153.57\).`, S`Width \(=AC\sin68^\circ\approx142.4\).`],
      S`about \(142\) m`],
    ["Height of a kite", S`Two people \(40\) m apart, on opposite sides of a kite, see it at angles of elevation of \(55^\circ\) and \(62^\circ\). How high is the kite?`,
      [S`The angle at the kite is \(180^\circ-55^\circ-62^\circ=63^\circ\).`, S`Distance from the first person: \(\frac{40\sin62^\circ}{\sin63^\circ}\approx39.64\).`, S`Height \(=39.64\sin55^\circ\approx32.5\).`],
      S`about \(32.5\) m`,
      fig({ w: 340, items: atri(55, 62, 40, { c: "40 m", A: "55°", B: "62°", names: ["P", "Q", "kite"], fill: "amber", color: "amber" }) })],
  ]),

  practice([
    q("ships", S`Two ships leave port on courses \(52^\circ\) apart. One sails \(12\) km and the other \(15\) km. How far apart are they, to one decimal place (km)?`, num(12.1, 0.06),
      "SAS → cosine law.", [S`\(d^2=144+225-360\cos52^\circ\approx147.4\).`], S`\(12.1\) km`),
    q("towers", S`Two towers are \(8\) km apart. A fire is seen at \(50^\circ\) from tower \(A\) and \(65^\circ\) from tower \(B\) (angles to the line between the towers). How far is the fire from tower \(B\), to two decimal places (km)?`, num(6.76, 0.006),
      "Third angle 65°; BF is opposite ∠A.", [S`\(BF=\frac{8\sin50^\circ}{\sin65^\circ}\approx6.76\).`], S`\(6.76\) km`),
    q("truss", S`A truss has sides \(5\), \(6\) and \(7\) m. Find its largest angle to one decimal place (degrees).`, num(78.5, 0.06),
      "Opposite 7.", [S`\(\cos\theta=\frac{25+36-49}{60}=0.2\).`], S`\(78.5^\circ\)`),
    q("river", S`Points \(A\) and \(B\) are \(100\) m apart on a riverbank. A tree \(C\) across the river makes \(\angle CAB=70^\circ\) and \(\angle CBA=60^\circ\). Find the width of the river to one decimal place (m).`, num(106.2, 0.06),
      "AC by the sine law, then × sin 70°.", [S`\(AC=\frac{100\sin60^\circ}{\sin50^\circ}\approx113.05\).`, S`Width \(\approx113.05\sin70^\circ\).`], S`\(106.2\) m`),
    q("lot", S`A triangular lot has sides \(40\) m and \(55\) m with a \(72^\circ\) angle between them. Find the third side to one decimal place (m).`, num(57.1, 0.06),
      "Cosine law.", [S`\(c^2=1600+3025-4400\cos72^\circ\approx3265.3\).`], S`\(57.1\) m`),
  ]),

  wrapUp({
    qas: [
      ["How do I start an application problem?", "Draw a diagram, mark what was measured, and label the triangle so each side is opposite its angle."],
      ["What is triangulation?", "Measuring a baseline and the two angles at its ends. The third angle follows, and the sine law gives the distances to the far point."],
      ["When do I need a right triangle as well?", "When the question asks for a height or a perpendicular distance: drop a perpendicular and use sin with the side you found."],
      ["How do I know the answer is reasonable?", "The longest side must be opposite the largest angle, and distances should fit the sketch."],
      ["Why are acute triangles enough here?", "In this course all triangles are acute; obtuse triangles and the ambiguous case are studied in Grade 11."],
    ],
    summary: [
      "Diagram → label → choose the law.",
      "Baseline + two angles: sine law (triangulation).",
      "Two sides + included angle, or three sides: cosine law.",
      "Heights and widths: one more right-triangle step.",
    ],
    next: "7.5 reviews the whole chapter.",
  }),
];
