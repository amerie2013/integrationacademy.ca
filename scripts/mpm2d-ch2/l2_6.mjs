// MPM2D 2.6 — Problems Involving Lines & Line Segments (self-study format): planning multi-step problems,
// the shortest distance from a point to a line (perpendicular → intersection → length), equidistant points,
// chords of a circle
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "2.6 Problems Involving Lines & Line Segments";
const circ = (r) => [{ f: (x) => Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color: "violet" }, { f: (x) => -Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color: "violet" }];

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Problems Involving Lines & Line Segments",
    overview: String.raw`Real analytic-geometry problems use several tools in a row: slope, midpoint, length, the equation of a line, and the intersection of two lines (Chapter 1). The key skill is planning. In this lesson you will find the shortest distance from a point to a line, find points that are the same distance from two given points, and solve problems with chords of a circle.`,
    goals: [
      "plan a multi-step analytic-geometry problem;",
      "find the shortest distance from a point to a line using a perpendicular and an intersection;",
      "find a point equidistant from two points using a right bisector;",
      "use the right bisector of a chord to solve circle problems;",
      "explain each step and interpret the answer in context.",
    ],
    curriculum: "AG3 (solve multi-step problems using slope, length, midpoint and equations of lines, including the shortest distance from a point to a line)",
    prior: [
      [String.raw`Perpendicular slope to \(y=2x+1\)?`, String.raw`\(-\tfrac12\).`],
      [String.raw`Solve \(y=2x+1\), \(y=-x+4\).`, String.raw`\((1,3)\).`],
      [String.raw`Length from \((1,3)\) to \((7,0)\)?`, String.raw`\(\sqrt{45}\approx6.71\).`],
    ],
    words: [
      ["Shortest distance", "measured along the perpendicular", ""],
      ["Foot of the perpendicular", "where the perpendicular meets the line", "\\(F\\)"],
      ["Equidistant", "the same distance from two points", ""],
      ["Chord", "a segment joining two points of a circle", ""],
    ],
  }),

  section("📌 Distance from a point to a line", String.raw`
  <p>Of all the segments from a point \(P\) to a line, the shortest is the one that meets the line at a right angle. Any other segment is the hypotenuse of a right triangle, so it is longer.</p>
  ${plane({ view: { xmin: -2, xmax: 9, ymin: -2, ymax: 7 }, lines: [{ m: 2, b: 1, color: "violet", label: "y = 2x + 1", lx: 2.2 }], segs: [{ pts: [[7, 0], [1, 3]], color: "red" }, { pts: [[7, 0], [2, 5]], color: "gray" }], points: [{ x: 7, y: 0, label: "P(7, 0)", color: "red" }, { x: 1, y: 3, label: "F(1, 3)", color: "green" }], step: { x: 1, y: 1 } }, "PF is perpendicular to the line; the grey segment to another point on the line is longer.")}
  ${keyIdea(String.raw`<strong>Shortest distance from \(P\) to a line:</strong> (1) find the slope of the line and the perpendicular slope; (2) write the equation of the perpendicular through \(P\); (3) solve the two equations to find the foot \(F\); (4) the distance is the length \(PF\).`)}`),

  section("📌 Explore", String.raw`<p>Set a line \(Ax+By=C\) and a point P. The explorer follows the four steps and shows the foot F and the distance.</p>`),

  widget("pointLineDistance", { init: [2, -1, -1, 7, 0] }),

  section("📌 More problem patterns", String.raw`
  <ul>
    <li><strong>Equidistant from A and B</strong>: every such point lies on the right bisector of \(AB\). Intersect it with another line to pin the point down.</li>
    <li><strong>Chords</strong>: the right bisector of any chord passes through the centre of the circle. The centre, the midpoint of a chord and an endpoint form a right triangle.</li>
    <li><strong>Plan first</strong>: write what you need, list the tools, then calculate.</li>
  </ul>
  ${watchOut([
    "The distance from a point to a line is measured along the perpendicular, not to the nearest-looking grid point.",
    "Solve the system exactly; round only the final length.",
    "Horizontal line y = k: distance |y₀ − k|. Vertical line x = h: distance |x₀ − h|.",
    "State units and answer the question asked.",
  ])}`),

  examples([
    ["Distance from a point to a line", String.raw`Find the shortest distance from \(P(7,0)\) to the line \(y=2x+1\).`,
      [String.raw`Perpendicular slope: \(-\frac12\). Through \(P\): \(0=-\frac12(7)+b\Rightarrow b=\frac72\), so \(y=-\frac12x+\frac72\).`, String.raw`Solve: \(2x+1=-\frac12x+\frac72\Rightarrow\frac52x=\frac52\Rightarrow x=1\), \(y=3\). Foot \(F(1,3)\).`, String.raw`\(PF=\sqrt{(1-7)^2+(3-0)^2}=\sqrt{36+9}=\sqrt{45}\approx6.71\).`],
      String.raw`\(\sqrt{45}\approx6.71\) units`],
    ["A line in standard form", String.raw`Find the distance from \(P(1,8)\) to the line \(x-2y=-5\).`,
      [String.raw`Line: \(y=\frac12x+\frac52\), slope \(\frac12\); perpendicular slope \(-2\).`, String.raw`Perpendicular through \(P\): \(y=-2x+10\).`, String.raw`Solve: \(\frac12x+\frac52=-2x+10\Rightarrow x+5=-4x+20\Rightarrow x=3\), \(y=4\).`, String.raw`\(PF=\sqrt{(3-1)^2+(4-8)^2}=\sqrt{20}\approx4.47\).`],
      String.raw`\(\sqrt{20}\approx4.47\) units`],
    ["A point equidistant from two points", String.raw`Find the point on the \(x\)-axis that is the same distance from \(A(-2,4)\) and \(B(6,8)\).`,
      [String.raw`Right bisector of \(AB\): midpoint \((2,6)\); slope of \(AB\) is \(\frac48=\frac12\), so the perpendicular slope is \(-2\): \(y=-2x+10\).`, String.raw`On the \(x\)-axis \(y=0\): \(x=5\).`, String.raw`Check: \(PA^2=7^2+4^2=65\), \(PB^2=1^2+8^2=65\) ✓`],
      String.raw`\((5,0)\)`],
    ["The shortest road", String.raw`A highway follows \(y=x-1\) (units in km). A town is at \(T(2,7)\). How long is the shortest new road from the town to the highway, and where does it join?`,
      [String.raw`Perpendicular slope \(-1\) through \(T\): \(y=-x+9\).`, String.raw`Solve \(x-1=-x+9\Rightarrow x=5\), \(y=4\).`, String.raw`Length \(=\sqrt{(5-2)^2+(4-7)^2}=\sqrt{18}\approx4.24\) km.`],
      "about 4.24 km, joining the highway at (5, 4)",
      plane({ view: { xmin: -1, xmax: 9, ymin: -2, ymax: 9 }, lines: [{ m: 1, b: -1, color: "gray", label: "highway", lx: 6.5 }], segs: [{ pts: [[2, 7], [5, 4]], color: "red" }], points: [{ x: 2, y: 7, label: "T(2, 7)", color: "blue" }, { x: 5, y: 4, label: "(5, 4)", color: "green" }], xlabel: "km", ylabel: "km", step: { x: 1, y: 1 } })],
    ["A chord of a circle", String.raw`The line \(y=3\) cuts the circle \(x^2+y^2=25\). Find the length of the chord and show that its right bisector passes through the centre.`,
      [String.raw`\(x^2+9=25\Rightarrow x=\pm4\): endpoints \((-4,3)\) and \((4,3)\).`, String.raw`Length \(=4-(-4)=8\).`, String.raw`Midpoint \((0,3)\); the chord is horizontal, so its right bisector is the vertical line \(x=0\) — the \(y\)-axis, which passes through the centre \((0,0)\).`],
      String.raw`chord length \(8\); right bisector \(x=0\) passes through \((0,0)\)`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, curves: circ(5), segs: [{ pts: [[-4, 3], [4, 3]], color: "red" }, { pts: [[0, 0], [4, 3]], color: "gray" }], points: [{ x: -4, y: 3, label: "(−4, 3)", color: "red" }, { x: 4, y: 3, label: "(4, 3)", color: "red" }, { x: 0, y: 3, label: "(0, 3)", color: "green" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("vertical line", String.raw`What is the shortest distance from \((4,-1)\) to the line \(x=-2\)?`, num(6),
      "Horizontal distance to a vertical line.", [String.raw`\(4-(-2)=6\).`], String.raw`\(6\)`),
    q("foot", String.raw`The perpendicular from \(P(0,5)\) meets the line \(y=x-1\) at \(F\). What is the \(x\)-coordinate of \(F\)?`, num(3),
      "Perpendicular slope −1 through P: y = −x + 5.", [String.raw`\(x-1=-x+5\Rightarrow x=3\).`], String.raw`\(3\)`),
    q("distance", String.raw`Find the shortest distance from \(P(0,5)\) to \(y=x-1\), to two decimal places.`, num(4.24, 0.01),
      "F is (3, 2).", [String.raw`\(\sqrt{(3-0)^2+(2-5)^2}=\sqrt{18}\approx4.243\).`], String.raw`\(4.24\)`),
    q("equidistant", String.raw`A point on the \(x\)-axis is the same distance from \(A(1,3)\) and \(B(5,1)\). What is its \(x\)-coordinate?`, num(2),
      "Right bisector of AB: midpoint (3, 2), slope 2.", [String.raw`\(y=2x-4\); \(y=0\Rightarrow x=2\).`], String.raw`\(2\)`),
    q("chord", String.raw`The line \(y=6\) cuts \(x^2+y^2=100\). How long is the chord?`, num(16),
      "Substitute y = 6.", [String.raw`\(x^2=64\Rightarrow x=\pm8\); length \(16\).`], String.raw`\(16\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the perpendicular the shortest path?", "Any other segment from P to the line is the hypotenuse of a right triangle whose leg is the perpendicular, and a hypotenuse is always the longest side."],
      ["Is there a formula for the distance?", String.raw`Yes, \(\frac{|Ax_0+By_0-C|}{\sqrt{A^2+B^2}}\) for the line \(Ax+By=C\). In this course, use the four-step method and explain each step; the formula is a check.`],
      ["Where are all the points equidistant from A and B?", "On the right bisector of AB."],
      ["Why does the right bisector of a chord pass through the centre?", "The centre is the same distance (a radius) from both endpoints, so it lies on the right bisector."],
      ["How do I start a problem I have not seen before?", "Draw a sketch, write what you need, and list the tools (slope, midpoint, length, equation, intersection) that connect what you know to what you need."],
    ],
    summary: [
      "Distance from a point to a line: perpendicular → intersection → length.",
      "Equidistant points lie on a right bisector.",
      "The right bisector of a chord passes through the centre.",
      "Plan, calculate exactly, then interpret.",
    ],
    next: "2.7 reviews the whole chapter.",
  }),
];
