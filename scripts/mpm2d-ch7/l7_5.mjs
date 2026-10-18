// MPM2D 7.5 — Chapter 7 Review (NEW lesson, placed after 7.4)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, fig, atri, polygon } from "./lib.mjs";

export const TITLE = "7.5 Chapter 7 Review";
export const NEW = { id: "2d1e7c1a-0a17-4d1e-9c17-d1a9f0000705", position: 46 };

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 7 Review — Acute Triangles",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, practice choosing the law, multi-step problems, mixed practice and a readiness checklist. Work through it after 7.1–7.4 and return to any lesson where you get stuck.`,
    goals: [
      "recall how each law is developed and when it is used;",
      "choose the right tool for a triangle;",
      "solve multi-step problems with acute triangles;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "T3 (whole chapter)",
    prior: [
      [S`Sine law?`, S`\(\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}\).`],
      [S`Cosine law for an angle?`, S`\(\cos A=\frac{b^2+c^2-a^2}{2bc}\).`],
      [S`Which law for SAS?`, S`The cosine law.`],
    ],
    words: [
      ["Sine law", "uses a side–angle pair", ""],
      ["Cosine law", "SAS or SSS", ""],
      ["Altitude", "used to develop both laws", ""],
      ["Triangulation", "baseline + two angles", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["7.1 Sine law", "altitude: \\(b\\sin A=a\\sin B\\)", "\\(b=\\frac{12\\sin67^\\circ}{\\sin48^\\circ}\\)", "pair sides with opposite angles"],
    ["7.2 Cosine law", "Pythagoras twice with an altitude", "\\(a^2=b^2+c^2-2bc\\cos A\\)", "multiply 2bc cos A first"],
    ["7.3 Choosing", "pair known → sine; SAS/SSS → cosine", "SAS: cosine, then sine", "SAS needs the included angle"],
    ["7.4 Applications", "sketch, label, choose", "triangulation", "perpendicular for heights"],
  ])),

  section("📌 Which law?", keyIdea(S`<strong>Right angle?</strong> SOH CAH TOA. <strong>A side and its opposite angle known?</strong> Sine law. <strong>Two sides and the angle between them, or three sides?</strong> Cosine law — then finish with the sine law.`)),

  practice([
    q("law", S`Given \(\angle A\), \(\angle B\) and side \(a\). Which law finds \(b\)?`, choice(["the sine law", "the cosine law", "SOH CAH TOA", "neither"], 0),
      "a and A are a pair.", ["AAS → sine law."], "sine law"),
    q("law", S`Given sides \(b\), \(c\) and the included \(\angle A\). Which law finds \(a\)?`, choice(["the cosine law", "the sine law", "SOH CAH TOA", "neither"], 0),
      "No pair.", ["SAS → cosine law."], "cosine law"),
    q("law", "Given three sides. Which law finds an angle?", choice(["the cosine law", "the sine law", "tan⁻¹", "none"], 0),
      "SSS.", ["Cosine law."], "cosine law"),
    q("law", S`Given sides \(a\), \(b\) and \(\angle A\) (opposite \(a\)) in an acute triangle. Which law finds \(\angle B\)?`, choice(["the sine law", "the cosine law", "cos⁻¹ only", "Pythagoras"], 0),
      "a and A are a pair.", ["SSA → sine law."], "sine law"),
    q("law", "Given a right triangle with one side and one acute angle. What is simplest?", choice(["a primary ratio", "the cosine law", "the sine law", "SSS"], 0),
      "Right angle.", ["SOH CAH TOA."], "primary ratio"),
  ]),

  examples([
    ["Solve with SSS", S`Solve the triangle with sides \(9\), \(10\) and \(11\).`,
      [S`Largest angle (opposite \(11\)): \(\cos C=\frac{81+100-121}{180}=\frac13\), \(C\approx70.5^\circ\).`, S`Opposite \(9\): \(\cos A=\frac{100+121-81}{220}\), \(A\approx50.5^\circ\).`, S`\(B\approx180^\circ-70.5^\circ-50.5^\circ=59.0^\circ\).`],
      S`\(50.5^\circ\), \(59.0^\circ\), \(70.5^\circ\)`,
      fig({ w: 320, items: atri(50.5, 59, 11, { c: "11", a: "9", b: "10" }) })],
    ["SAS then sine", S`In acute \(\triangle ABC\), \(b=6\), \(c=8\) and \(\angle A=52^\circ\). Find \(a\) and \(\angle B\).`,
      [S`\(a^2=36+64-96\cos52^\circ\approx40.90\), \(a\approx6.40\).`, S`\(\sin B=\frac{6\sin52^\circ}{6.40}\approx0.739\), \(B\approx47.6^\circ\).`],
      S`\(a\approx6.4\), \(\angle B\approx47.6^\circ\)`],
    ["A parallelogram", S`A parallelogram has sides \(8\) cm and \(12\) cm with a \(65^\circ\) angle between them. Find the shorter diagonal.`,
      [S`The diagonal opposite the \(65^\circ\) angle: \(d^2=64+144-192\cos65^\circ\approx126.86\).`, S`\(d\approx11.26\).`],
      S`about \(11.3\) cm`,
      fig({ w: 340, items: [...polygon([[0, 0], [12, 0], [15.38, 7.25], [3.38, 7.25]], { sides: ["12", "8", "", ""] }), { seg: [[12, 0], [3.38, 7.25]], color: "red", dash: true }, { arc: [[12, 0], [0, 0], [3.38, 7.25]], label: "65°", color: "amber" }] })],
    ["A flight", S`A plane flies \(150\) km, turns, and flies \(200\) km; the angle between the two legs at the turn is \(75^\circ\). How far is it from the start, and at what angle to its first leg must it fly back?`,
      [S`\(d^2=150^2+200^2-2(150)(200)\cos75^\circ\approx46\,970\), \(d\approx216.7\) km.`, S`At the start, the angle opposite the \(200\) km leg: \(\sin\theta=\frac{200\sin75^\circ}{216.7}\) gives about \(63.0^\circ\).`],
      S`about \(216.7\) km; about \(63^\circ\) to the first leg`],
    ["Sightings from both sides", S`Two observers \(120\) m apart, on opposite sides of a hill, see its top \(T\) at angles of elevation of \(41^\circ\) and \(53^\circ\). Find the height of the hill.`,
      [S`In the acute triangle formed by the observers and \(T\): \(\angle T=180^\circ-41^\circ-53^\circ=86^\circ\).`, S`Distance from the first observer: \(\frac{120\sin53^\circ}{\sin86^\circ}\approx96.07\).`, S`Height \(=96.07\sin41^\circ\approx63.0\).`],
      S`about \(63.0\) m`],
  ]),

  section("📌 Mixed review", S`<p>Each question uses one lesson's skill — decide which first.</p>`),

  practice([
    q("SAS", S`In acute \(\triangle ABC\), \(a=8\), \(b=10\) and \(\angle C=40^\circ\). Find \(c\) to one decimal place.`, num(6.4, 0.06),
      "Cosine law.", [S`\(c^2=164-160\cos40^\circ\approx41.43\).`], S`\(6.4\)`),
    q("SSS", S`A triangle has sides \(7\), \(8\) and \(10\). Find its largest angle to one decimal place.`, num(83.3, 0.06),
      "Opposite 10.", [S`\(\cos\theta=\frac{49+64-100}{112}=\frac{13}{112}\).`], S`\(83.3^\circ\)`),
    q("AAS", S`In acute \(\triangle ABC\), \(\angle A=55^\circ\), \(\angle B=70^\circ\) and \(a=9\). Find \(b\) to one decimal place.`, num(10.3, 0.06),
      "Sine law.", [S`\(b=\frac{9\sin70^\circ}{\sin55^\circ}\approx10.32\).`], S`\(10.3\)`),
    q("SSA", S`In acute \(\triangle ABC\), \(a=11\), \(\angle A=66^\circ\) and \(b=9\). Find \(\angle B\) to one decimal place.`, num(48.4, 0.06),
      "sin B = 9 sin 66° ÷ 11.", [S`\(\sin B\approx0.747\).`], S`\(48.4^\circ\)`),
    q("ships", S`Two boats leave a dock on paths \(40^\circ\) apart and travel \(8\) km and \(10\) km. How far apart are they, to one decimal place (km)?`, num(6.4, 0.06),
      "SAS.", [S`\(d^2=164-160\cos40^\circ\).`], S`\(6.4\) km`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["7.1", "I can explain how the sine law comes from an altitude and use it to find sides and angles."],
      ["7.2", "I can explain how the cosine law comes from the Pythagorean theorem and use it for SAS and SSS."],
      ["7.3", "I can choose the right tool from the given information and solve a whole triangle."],
      ["7.4", "I can solve real problems with acute triangles, including heights and widths."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("lawChooser", { init: "sas" }),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set, then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Pairing a side with the wrong angle, subtracting 2bc before multiplying by cos A, forgetting to take the square root, and rounding too early."],
      ["Do I need to know where the laws come from?", "Yes — be ready to explain how an altitude gives the sine law and how the Pythagorean theorem gives the cosine law."],
      ["How much work should I show?", "A labelled diagram, the law written with the values substituted, the answer with units, and a check."],
      ["What comes next?", "Grade 11 extends both laws to obtuse triangles and the ambiguous case, and to trigonometric functions."],
    ],
    summary: [
      "Sine law: side–angle pair (from an altitude).",
      "Cosine law: SAS or SSS (from Pythagoras).",
      "Right triangle: SOH CAH TOA.",
      "Sketch, label, choose, check.",
    ],
    next: "Write the Chapter 7 test — the last chapter of MPM2D.",
  }),
];
