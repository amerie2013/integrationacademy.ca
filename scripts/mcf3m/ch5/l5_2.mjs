// MCF3M 5.2 — Problems with Two Right Triangles: same side / opposite sides, angles of depression from a height,
// heights of two buildings, the "walk toward" problem, a shared side.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig } from "../lib.mjs";
import { triD } from "../figs.mjs";
const S = String.raw;

export const TITLE = "5.2 Problems with Two Right Triangles";
const T = (pts, labels, marks, extra) => fig(triD(pts, labels, { open: true, marks, extra }), "");

export const blocks = () => [
  intro({
    icon: "🚁",
    title: "Problems with Two Right Triangles",
    overview: S`Many measurement problems cannot be solved with one right triangle, but can be split into <b>two</b> right triangles that share a side — usually a height or a distance. Solve the triangle that has enough information first, then use the shared side in the second triangle. The final answer is often a sum or difference of two lengths, so a clear diagram is the most important step.`,
    goals: [
      "draw and label a diagram with two right triangles and identify the shared side;",
      "decide which triangle to solve first;",
      "combine results by adding or subtracting lengths;",
      "solve problems with angles of elevation and depression from two positions;",
      "check that the answer is reasonable.",
    ],
    curriculum: "C1.2 (solve problems involving two right triangles in two dimensions)",
    prior: [
      [S`\(\tan40^\circ=\frac{h}{25}\). Find \(h\).`, S`\(h=25\tan40^\circ\approx20.98\).`],
      [S`What is an angle of depression?`, S`The angle below the horizontal from an observer's eye.`],
      [S`Why does the angle of depression equal an angle of elevation in many diagrams?`, S`Alternate angles between parallel horizontal lines.`],
    ],
    words: [
      ["Shared side", "a side common to both triangles", "the height of a helicopter"],
      ["Same side", "both points on the same side of the foot of the height", "two boats in a line"],
      ["Opposite sides", "points on either side of the height", "two observers facing each other"],
      ["Alternate angles", "equal angles formed with parallel lines", "depression = elevation"],
      ["Line of sight", "the line from the eye to the object", "hypotenuse of each triangle"],
    ],
  }),

  section("📌 Strategy", S`
  ${table(["Step", "What to do"], [
    ["1. Diagram", "draw both right triangles; mark the shared side and the right angles"],
    ["2. Plan", "find a triangle with one side and one acute angle (or two sides) known"],
    ["3. Solve it", "find the shared side"],
    ["4. Second triangle", "use the shared side to find the target"],
    ["5. Combine", "add (opposite sides) or subtract (same side) the distances"],
  ])}
  ${T([[-6, 0], [0, 0], [10, 0]], [], [[0, 5.4, "h"], [-5.2, 0.6, "40°"], [8.8, 0.6, "25°"]], [{ pts: [[0, 0], [0, 5]], color: "red" }, { pts: [[-6, 0], [0, 5], [10, 0]], color: "violet" }])}
  ${keyIdea(S`The angle of depression from a high point equals the angle of elevation from the ground to that point (alternate angles), so you can always put the angle inside the right triangle at ground level.`)}`),

  widget("elevationLab", { init: [30, 35] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Put the angle of depression at the ground end of the triangle (alternate angles), not at the vertical side.",
    "Same side: subtract the two distances. Opposite sides: add them.",
    "Keep full calculator precision until the final answer to avoid rounding errors.",
    "Label which triangle each equation comes from.",
    "Check that the answer makes sense (e.g. a distance between objects shorter than the farther distance).",
  ])}`),

  examples([
    ["Two boats from a helicopter", S`A helicopter hovers \(400\) m above the sea. The angles of depression to two boats, in a line on the same side, are \(55^\circ\) and \(25^\circ\). How far apart are the boats?`,
      [S`<b>Diagram.</b> The height \(400\) m is the shared side. By alternate angles, the angles at the boats are \(55^\circ\) and \(25^\circ\).`,
        S`<b>Near boat.</b> \(\tan55^\circ=\frac{400}{d_1}\Rightarrow d_1=\frac{400}{\tan55^\circ}\approx280.08\) m.`,
        S`<b>Far boat.</b> \(d_2=\frac{400}{\tan25^\circ}\approx857.80\) m.`,
        S`<b>Same side: subtract.</b> \(857.80-280.08\approx577.72\) m.`,
        S`<b>Check.</b> The smaller angle belongs to the farther boat ✓`],
      S`about 577.72 m apart`,
      T([[0, 400], [0, 0], [857.8, 0]], [], [[-40, 200, "400"], [280, -40, "boat 1"], [857.8, -40, "boat 2"]], [{ pts: [[0, 400], [280.08, 0]], color: "violet" }, { pts: [[0, 400], [857.8, 0]], color: "violet" }])],

    ["Observers on opposite sides", S`Two observers on opposite sides of a hot-air balloon see it at angles of elevation \(40^\circ\) and \(30^\circ\). The balloon is \(120\) m high. How far apart are the observers?`,
      [S`<b>Shared side.</b> The height \(120\) m.`,
        S`<b>Left observer.</b> \(\frac{120}{\tan40^\circ}\approx143.01\) m.`,
        S`<b>Right observer.</b> \(\frac{120}{\tan30^\circ}\approx207.85\) m.`,
        S`<b>Opposite sides: add.</b> \(143.01+207.85\approx350.86\) m.`],
      S`about 350.86 m`,
      T([[-143.01, 0], [0, 0], [207.85, 0]], [], [[8, 60, "120"], [-120, 12, "40°"], [180, 12, "30°"]], [{ pts: [[0, 0], [0, 120]], color: "red" }, { pts: [[-143.01, 0], [0, 120], [207.85, 0]], color: "violet" }])],

    ["Height of a second building", S`From the top of a \(30\) m building, the angle of depression to the base of a second building is \(50^\circ\) and the angle of elevation to its top is \(25^\circ\). Find the height of the second building.`,
      [S`<b>Distance between buildings.</b> Lower triangle: \(\tan50^\circ=\frac{30}{d}\Rightarrow d\approx25.17\) m.`,
        S`<b>Upper triangle.</b> \(\tan25^\circ=\frac{x}{25.17}\Rightarrow x\approx11.74\) m above the observer.`,
        S`<b>Total.</b> \(30+11.74\approx41.74\) m.`,
        S`<b>Check.</b> The second building is taller since the top is seen above the horizontal ✓`],
      S`about 41.74 m`,
      T([[0, 0], [0, 30], [25.17, 41.74], [25.17, 0]], [], [[-4, 15, "30"], [12, -3, "d"], [27, 36, "x"]], [{ pts: [[0, 30], [25.17, 30]], color: "gray" }, { pts: [[0, 30], [25.17, 0]], color: "violet" }])],

    ["Walking toward a tower", S`From a point, the angle of elevation to a tower's top is \(32^\circ\). After walking \(40\) m closer it is \(48^\circ\). Find the tower's height.`,
      [S`<b>Unknowns.</b> Height \(h\), distance \(x\) from the closer point.`,
        S`<b>Two equations.</b> \(x=\frac h{\tan48^\circ}\) and \(x+40=\frac h{\tan32^\circ}\).`,
        S`<b>Subtract.</b> \(40=h\left(\frac1{\tan32^\circ}-\frac1{\tan48^\circ}\right)\Rightarrow h\approx57.15\) m.`,
        S`<b>Check.</b> \(x=\frac{57.15}{\tan48^\circ}\approx51.46\); \(\tan32^\circ\approx\frac{57.15}{91.46}=0.625\) ✓`],
      S`about 57.15 m`,
      T([[-91.46, 0], [0, 0], [0, 57.15]], [], [[-80, 6, "32°"], [-43, 6, "48°"], [-71, -6, "40 m"], [4, 28, "h"]], [{ pts: [[-51.46, 0], [0, 57.15]], color: "violet" }])],

    ["A shared slanted side", S`In quadrilateral \(ABCD\), \(\angle ADB=90^\circ\), \(AB=10\), \(\angle A=35^\circ\), and \(\triangle BDC\) is right-angled at \(D\) with \(\angle C=60^\circ\). Find \(BD\) and \(DC\).`,
      [S`<b>Triangle ABD.</b> \(BD=10\sin35^\circ\approx5.74\).`,
        S`<b>Triangle BDC.</b> \(\tan60^\circ=\frac{BD}{DC}\Rightarrow DC=\frac{5.74}{\tan60^\circ}\approx3.31\).`,
        S`<b>Bonus.</b> \(AD=10\cos35^\circ\approx8.19\), so \(AC\approx8.19+3.31=11.50\).`],
      S`BD ≈ 5.74, DC ≈ 3.31`,
      T([[0, 0], [8.19, 5.74], [11.5, 0], [0, 0]], ["A", "B", "C"], [[8.19, -0.6, "D"]], [{ pts: [[8.19, 5.74], [8.19, 0]], color: "red" }])],
  ]),

  practice([
    q("same", S`From an \(80\) m cliff, the angles of depression to two buoys in line are \(60^\circ\) and \(30^\circ\). How far apart are they (two decimals)?`, num(92.38, 0.011), "80/tan30° − 80/tan60°.", [S`\(138.56-46.19\approx92.38\).`], S`\(92.38\)`),
    q("opp", S`A \(50\) m tower is seen from opposite sides at \(20^\circ\) and \(35^\circ\). Distance between observers (two decimals)?`, num(208.78, 0.011), "Add the two distances.", [S`\(137.37+71.41\approx208.78\).`], S`\(208.78\)`),
    q("two", S`From \(25\) m away, the angles to the top and bottom of a sign above and below eye level are \(40^\circ\) up and \(15^\circ\) down. Find the sign's height (two decimals).`, num(27.68, 0.011), "Add the parts.", [S`\(25\tan40^\circ+25\tan15^\circ\approx20.98+6.70\).`], S`\(27.68\)`),
    q("shared", S`\(AB=15\), \(\angle A=40^\circ\), \(BD\perp AC\). Find \(BD\) (two decimals).`, num(9.64, 0.011), "BD = 15 sin 40°.", [S`\(9.64\).`], S`\(9.64\)`),
    q("which", S`Two points are on the same side of a tower. To find the distance between them you should …`, choice(["subtract the distances", "add the distances", "multiply them", "average them"], 0), "Both distances are measured from the tower.", [S`Farther minus nearer.`], S`subtract`),
  ]),

  ...hard([
    ["Two boats from a lighthouse", S`From the top of a \(60\) m lighthouse, two boats due west are seen at angles of depression \(18^\circ\) and \(12^\circ\). How far apart are they?`,
      [S`<b>Distances.</b> \(\frac{60}{\tan18^\circ}\approx184.66\) and \(\frac{60}{\tan12^\circ}\approx282.28\).`,
        S`<b>Same side.</b> \(282.28-184.66\approx97.62\) m.`],
      S`about 97.62 m`],
    ["Width of a river", S`From point A on one bank, the top of a tree on the far bank has elevation \(35^\circ\). Walking \(20\) m straight back, it is \(22^\circ\). Find the tree's height and the river's width.`,
      [S`<b>Equations.</b> \(w=\frac h{\tan35^\circ}\), \(w+20=\frac h{\tan22^\circ}\).`,
        S`<b>Subtract.</b> \(20=h\left(\frac1{\tan22^\circ}-\frac1{\tan35^\circ}\right)\Rightarrow h\approx19.10\) m.`,
        S`<b>Width.</b> \(w=\frac{19.10}{\tan35^\circ}\approx27.28\) m.`],
      S`tree ≈ 19.10 m; river ≈ 27.28 m`,
      T([[-47.28, 0], [0, 0], [0, 19.1]], [], [[-42, 2, "22°"], [-24, 2, "35°"], [-37, -2.5, "20 m"], [-13, -2.5, "w"], [1.5, 9.5, "h"]], [{ pts: [[-27.28, 0], [0, 19.1]], color: "violet" }])],
  ], [
    q("hard", S`Walking \(30\) m toward a building changes the angle of elevation from \(25^\circ\) to \(40^\circ\). Find the height (two decimals).`, num(31.49, 0.011), "30 = h(1/tan25 − 1/tan40).", [S`\(h\approx31.49\).`], S`\(31.49\)`),
    q("hard", S`From \(100\) m away, a flagpole on a tower has its bottom at \(30^\circ\) and top at \(42^\circ\) elevation. Find the pole height (two decimals).`, num(32.31, 0.011), "Difference.", [S`\(90.04-57.74\approx32.31\).`], S`\(32.31\)`),
    q("hard", S`A \(45\) m pole and a \(20\) m pole stand side by side, \(60\) m from an observer. Find the difference between the angles of elevation to their tops (two decimals).`, num(18.43, 0.011), "Two right triangles with the same base 60.", [S`\(\tan^{-1}\tfrac{45}{60}-\tan^{-1}\tfrac{20}{60}\approx36.87-18.43=18.43^\circ\).`], S`\(18.43^\circ\)`),
    q("hard", S`A plane at \(200\) m altitude sees a runway's two ends at depressions \(14^\circ\) and \(8^\circ\) (same side). Find the runway length (two decimals).`, num(620.92, 0.011), "Subtract.", [S`\(1423.08-802.16\approx620.92\).`], S`\(620.92\)`),
    q("hard", S`\(AB=15\), \(\angle A=40^\circ\), \(BD\perp AC\) and \(\angle BCD=70^\circ\). Find \(BC\) (two decimals).`, num(10.26, 0.011), "BD = 15 sin 40°; BC = BD/sin 70°.", [S`\(9.64/\sin70^\circ\approx10.26\).`], S`\(10.26\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I start a two-triangle problem?", "Draw a diagram and mark the shared side."],
      ["When do I add or subtract?", "Opposite sides of the shared side: add; same side: subtract."],
      ["Where does the angle of depression go?", "At the ground point, by alternate angles."],
      ["How do I solve the 'walk toward' problem?", "Write two equations with h and subtract to eliminate the unknown distance."],
      ["How do I avoid rounding errors?", "Keep full precision until the final step."],
    ],
    summary: [
      "Find the shared side first.",
      "Same side: subtract; opposite: add.",
      "Depression = elevation (alternate angles).",
      "Keep precision; check reasonableness.",
    ],
    next: "5.3 extends to non-right triangles with the sine law.",
  }),
];
