// MCF3M 5.3 — The Sine Law: verifying a/sin A = b/sin B = c/sin C, finding sides (AAS/ASA) and angles (acute SSA),
// surveying and navigation.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig } from "../lib.mjs";
import { triD, sin, cos } from "../figs.mjs";
const S = String.raw;

export const TITLE = "5.3 The Sine Law";
// triangle from angles A, B and side c (AB): A at origin, B at (c,0)
const ABc = (A, B, c, labels = ["A", "B", "C"], marks = []) => { const C = 180 - A - B; const b = (c * sin(B)) / sin(C); return fig(triD([[0, 0], [c, 0], [b * cos(A), b * sin(A)]], labels, { marks }), ""); };

export const blocks = () => [
  intro({
    icon: "📏",
    title: "The Sine Law",
    overview: S`Primary ratios only work in right triangles. For any acute triangle, the <b>sine law</b> links each side to the sine of the angle opposite it: \[\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}.\] It comes from drawing a height that splits the triangle into two right triangles. Use it when you know a side and its opposite angle, plus one more side or angle — situations that surveyors meet when they can measure angles from a baseline but cannot reach the far point.`,
    goals: [
      "verify the sine law by measuring or computing the ratios a/sin A, b/sin B, c/sin C;",
      "explain where the sine law comes from using a height;",
      "use the sine law to find a side (two angles and a side known);",
      "use the sine law to find an angle in an acute triangle (two sides and an opposite angle known);",
      "solve surveying and navigation problems.",
    ],
    curriculum: "C1.3 (verify the sine law), C1.4 (describe when to use the sine law and use it to calculate sides and angles in acute triangles), C1.5 (solve problems using the sine law)",
    prior: [
      [S`In right \(\triangle\), \(\sin A=\frac{\text{opp}}{\text{hyp}}\). If hyp \(=10\) and \(A=30^\circ\), find opp.`, S`\(5\).`],
      [S`Find the third angle of a triangle with angles \(48^\circ\) and \(77^\circ\).`, S`\(55^\circ\).`],
      [S`Solve \(\frac x{\sin40^\circ}=\frac{9}{\sin65^\circ}\).`, S`\(x=\frac{9\sin40^\circ}{\sin65^\circ}\approx6.38\).`],
    ],
    words: [
      ["Acute triangle", "all three angles less than 90°", "50°, 60°, 70°"],
      ["Opposite side", "side a is opposite angle A", "naming convention"],
      ["Sine law", "\\(\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}\\)", "any triangle"],
      ["AAS / ASA", "two angles and a side known", "use sine law for a side"],
      ["Baseline", "a measured line from which angles are sighted", "surveying"],
    ],
  }),

  section("📌 Why the sine law works", S`
  <p>Draw the height \(h\) from \(C\) to side \(AB\). In the two right triangles, \(h=b\sin A\) and \(h=a\sin B\). So \(b\sin A=a\sin B\), which rearranges to \(\frac a{\sin A}=\frac b{\sin B}\). The same argument with another height brings in \(c\).</p>
  ${fig(triD([[0, 0], [10, 0], [3.6, 6]], ["A", "B", "C"], { marks: [[1.2, 3.6, "b"], [7.4, 3.6, "a"], [5, -0.7, "c"], [4, 2.8, "h"]], extra: [{ pts: [[3.6, 6], [3.6, 0]], color: "red" }] }), "The height h = b sin A = a sin B.")}
  ${table(["You know", "You want", "Use"], [
    ["two angles and any side (AAS, ASA)", "another side", "\\(\\frac{x}{\\sin X}=\\frac{a}{\\sin A}\\)"],
    ["two sides and the angle opposite one of them", "an angle", "\\(\\frac{\\sin X}{x}=\\frac{\\sin A}{a}\\)"],
    ["two sides and the angle between them (SAS) or three sides (SSS)", "—", "cosine law (5.4)"],
  ])}
  ${keyIdea(S`You need one <b>complete pair</b>: a side and the angle opposite it. Put the unknown in the numerator: \(\frac{x}{\sin X}=\frac a{\sin A}\) for sides, \(\frac{\sin X}{x}=\frac{\sin A}{a}\) for angles.`)}`),

  widget("sineDerive", { init: [55, 65, 8] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Pair each side with the angle OPPOSITE it, not next to it.",
    "Find the third angle first when two angles are given (they add to 180°).",
    "To find an angle, take sin⁻¹ at the end: sin B = 0.743 ⇒ B ≈ 47.98°.",
    "The sine law needs a complete side–angle pair; with SAS or SSS use the cosine law.",
    "Check: the largest side is opposite the largest angle.",
  ])}`),

  examples([
    ["Verify the law", S`A triangle has \(A=50^\circ\), \(B=60^\circ\), \(C=70^\circ\) and \(a=8\). Find \(b\) and \(c\), and check that all three ratios are equal.`,
      [S`<b>Common ratio.</b> \(\frac a{\sin A}=\frac8{\sin50^\circ}\approx10.44\).`,
        S`<b>Sides.</b> \(b=10.44\sin60^\circ\approx9.04\); \(c=10.44\sin70^\circ\approx9.81\).`,
        S`<b>Check the ratios.</b> \(\frac{9.04}{\sin60^\circ}\approx10.44\) and \(\frac{9.81}{\sin70^\circ}\approx10.44\) ✓`,
        S`<b>Order check.</b> Largest angle \(70^\circ\) is opposite the largest side \(c\approx9.81\) ✓`],
      S`b ≈ 9.04, c ≈ 9.81; all ratios ≈ 10.44`,
      ABc(50, 60, 9.81, ["A", "B", "C"], [[4.9, -0.6, "c ≈ 9.81"]])],

    ["Find a side (AAS)", S`In acute \(\triangle ABC\), \(A=42^\circ\), \(B=73^\circ\), \(a=12\). Find \(b\) and \(c\).`,
      [S`<b>Third angle.</b> \(C=180-42-73=65^\circ\).`,
        S`<b>Side b.</b> \(\frac b{\sin73^\circ}=\frac{12}{\sin42^\circ}\Rightarrow b\approx17.15\).`,
        S`<b>Side c.</b> \(c=\frac{12\sin65^\circ}{\sin42^\circ}\approx16.25\).`,
        S`<b>Check.</b> Largest angle \(73^\circ\) is opposite the largest side \(b\) ✓`],
      S`b ≈ 17.15, c ≈ 16.25`,
      ABc(42, 73, 16.25)],

    ["Find an angle", S`In acute \(\triangle ABC\), \(a=15\), \(b=12\), \(A=68^\circ\). Find \(B\), \(C\) and \(c\).`,
      [S`<b>Angle B.</b> \(\frac{\sin B}{12}=\frac{\sin68^\circ}{15}\Rightarrow\sin B\approx0.7417\Rightarrow B\approx47.88^\circ\).`,
        S`<b>Angle C.</b> \(180-68-47.88=64.12^\circ\).`,
        S`<b>Side c.</b> \(c=\frac{15\sin64.12^\circ}{\sin68^\circ}\approx14.56\).`,
        S`<b>Check.</b> Order of angles \(68>64.12>47.88\) matches \(15>14.56>12\) ✓`],
      S`B ≈ 47.88°, C ≈ 64.12°, c ≈ 14.56`,
      ABc(68, 47.88, 14.56)],

    ["Surveying across a lake", S`Surveyors mark a \(250\) m baseline \(AB\). The angles from \(A\) and \(B\) to a buoy \(P\) are \(\angle A=64^\circ\) and \(\angle B=71^\circ\). Find \(AP\) and \(BP\).`,
      [S`<b>Third angle.</b> \(\angle P=180-64-71=45^\circ\), opposite the baseline.`,
        S`<b>AP</b> (opposite \(B\)): \(\frac{AP}{\sin71^\circ}=\frac{250}{\sin45^\circ}\Rightarrow AP\approx334.29\) m.`,
        S`<b>BP</b> (opposite \(A\)): \(BP=\frac{250\sin64^\circ}{\sin45^\circ}\approx317.77\) m.`,
        S`<b>Check.</b> \(AP>BP\) because \(71^\circ>64^\circ\) ✓`],
      S`AP ≈ 334.29 m, BP ≈ 317.77 m`,
      ABc(64, 71, 250, ["A", "B", "P"], [[125, -15, "250 m"]])],

    ["A ship from two stations", S`Two coast stations \(8\) km apart sight a ship at \(55^\circ\) and \(60^\circ\) from the coastline. How far is the ship from the first station, and how far is it from the coast?`,
      [S`<b>Angle at the ship.</b> \(180-55-60=65^\circ\).`,
        S`<b>Distance from station 1</b> (opposite the \(60^\circ\) angle): \(\frac{8\sin60^\circ}{\sin65^\circ}\approx7.64\) km.`,
        S`<b>Distance from the coast.</b> A right triangle: \(7.64\sin55^\circ\approx6.26\) km.`,
        S`<b>Check.</b> The perpendicular distance is less than both slant distances ✓`],
      S`≈ 7.64 km from station 1; ≈ 6.26 km from the coast`,
      ABc(55, 60, 8, ["S1", "S2", "ship"])],
  ]),

  practice([
    q("side", S`\(A=48^\circ\), \(B=65^\circ\), \(a=10\). Find \(b\) (two decimals).`, num(12.20, 0.011), "b/sin B = a/sin A.", [S`\(\frac{10\sin65^\circ}{\sin48^\circ}\approx12.20\).`], S`\(12.20\)`),
    q("angle", S`\(a=11\), \(b=9\), \(A=72^\circ\) (acute triangle). Find \(B\) (two decimals).`, num(51.09, 0.011), "sin B = 9 sin 72°/11.", [S`\(B\approx51.09^\circ\).`], S`\(51.09^\circ\)`),
    q("third", S`\(A=54^\circ\), \(B=61^\circ\), \(c=20\). Find \(a\) (two decimals).`, num(17.85, 0.011), "C = 65°.", [S`\(a=\frac{20\sin54^\circ}{\sin65^\circ}\approx17.85\).`], S`\(17.85\)`),
    q("which", S`Which information lets you use the sine law?`, choice(["two angles and a side", "three sides", "two sides and the included angle", "three angles"], 0), "Need a side–angle pair.", [S`With two angles, the third is known, giving a complete pair.`], S`two angles and a side`),
    q("ratio", S`In a triangle, \(B=50^\circ\), \(C=70^\circ\), \(b=14\). Find \(c\) (two decimals).`, num(17.17, 0.011), "c = b sin C / sin B.", [S`\(\frac{14\sin70^\circ}{\sin50^\circ}\approx17.17\).`], S`\(17.17\)`),
  ]),

  ...hard([
    ["Solve completely", S`Solve acute \(\triangle ABC\) with \(a=9\), \(b=11\), \(A=40^\circ\) (take \(B\) acute).`,
      [S`<b>B.</b> \(\sin B=\frac{11\sin40^\circ}9\approx0.7856\Rightarrow B\approx51.78^\circ\).`,
        S`<b>C.</b> \(180-40-51.78=88.22^\circ\).`,
        S`<b>c.</b> \(\frac{9\sin88.22^\circ}{\sin40^\circ}\approx13.99\).`],
      S`B ≈ 51.78°, C ≈ 88.22°, c ≈ 13.99`,
      ABc(40, 51.78, 13.99)],
    ["A boat from two points", S`Points \(A\) and \(B\) are \(500\) m apart on a straight shore. A boat \(T\) is sighted with \(\angle TAB=48^\circ\) and \(\angle TBA=73^\circ\). Find \(AT\) and \(BT\).`,
      [S`<b>Angle T.</b> \(180-48-73=59^\circ\).`,
        S`<b>AT.</b> \(\frac{500\sin73^\circ}{\sin59^\circ}\approx557.79\) m.`,
        S`<b>BT.</b> \(\frac{500\sin48^\circ}{\sin59^\circ}\approx433.49\) m.`],
      S`AT ≈ 557.79 m, BT ≈ 433.49 m`],
  ], [
    q("hard", S`\(a=8\), \(b=7\), \(A=80^\circ\). Find \(B\) (two decimals).`, num(59.51, 0.011), "sin B = 7 sin 80°/8.", [S`\(B\approx59.51^\circ\).`], S`\(59.51^\circ\)`),
    q("hard", S`\(A=52^\circ\), \(B=67^\circ\), \(a=24\). Find \(c\) (two decimals).`, num(24 * Math.sin((61 * Math.PI) / 180) / Math.sin((52 * Math.PI) / 180), 0.011), "C = 61°.", [S`\(c=\frac{24\sin61^\circ}{\sin52^\circ}\).`], S`\(\approx26.64\)`),
    q("hard", S`Two stations \(30\) km apart see a fire at \(75^\circ\) and \(60^\circ\) from the line joining them. How far is the fire from the line (two decimals)?`, num(35.49, 0.011), "Find a slant distance, then a right triangle.", [S`Angle at fire \(45^\circ\); distance from the \(75^\circ\) station \(\frac{30\sin60^\circ}{\sin45^\circ}\approx36.74\); \(36.74\sin75^\circ\approx35.49\).`], S`\(35.49\)`),
    q("hard", S`In \(\triangle ABC\), \(\frac a{\sin A}=12\). If \(B=35^\circ\), find \(b\) (two decimals).`, num(6.88, 0.011), "b = 12 sin B.", [S`\(12\sin35^\circ\approx6.88\).`], S`\(6.88\)`),
    q("hard", S`\(a=10\), \(A=70^\circ\), \(b=10\). Find \(C\).`, num(40, 0.011), "Isosceles: B = A.", [S`\(B=70^\circ\Rightarrow C=40^\circ\).`], S`\(40^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["What does the sine law say?", "a/sin A = b/sin B = c/sin C: each side over the sine of its opposite angle."],
      ["When can I use it?", "When you know a complete side–opposite-angle pair plus one more side or angle."],
      ["How do I find an angle with it?", "Use sin X / x = sin A / a, then sin⁻¹."],
      ["Where does it come from?", "A height h = b sin A = a sin B."],
      ["How do I check an answer?", "The largest side must be opposite the largest angle."],
    ],
    summary: [
      "a/sin A = b/sin B = c/sin C.",
      "AAS/ASA: find sides; SSA (acute): find angles.",
      "Find the third angle first.",
      "SAS or SSS needs the cosine law.",
    ],
    next: "5.4 develops the cosine law for SAS and SSS triangles.",
  }),
];
