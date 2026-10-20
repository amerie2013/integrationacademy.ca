// MCR3U 3.8 — Linear–Quadratic Systems: solving by substitution, counting intersections with the discriminant,
// tangent lines, lines of a fixed slope, and two-quantity models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, hard, plane } from "./lib.mjs";

export const TITLE = "3.8 Linear–Quadratic Systems";
export const ID = "ad761bbd-b9ea-4af0-b8a2-f8832035b794";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "✂️",
    title: "Linear–Quadratic Systems",
    overview: S`A line can cross a parabola twice, touch it once, or miss it. Setting the two expressions equal gives a quadratic equation, and its discriminant tells which. In this lesson you will solve linear–quadratic systems algebraically and graphically, find tangent lines, find which lines of a given slope meet a parabola, and solve problems where one quantity changes linearly and another quadratically.`,
    goals: [
      "solve a linear–quadratic system by substitution;",
      "use the discriminant to count the points of intersection;",
      "find the line of a given slope that is tangent to a parabola;",
      "describe all lines of a given slope that meet a parabola once, twice or never;",
      "solve problems modelled by a line and a parabola.",
    ],
    curriculum: "A2.5 (solve problems involving the intersection of a linear function and a quadratic function graphically and algebraically)",
    prior: [
      [S`Solve \(x^2-3x-4=0\).`, S`\(x=4\) or \(x=-1\).`],
      [S`What is the discriminant of \(x^2-2x+1\)?`, S`\(0\).`],
      [S`Substitute \(x=4\) into \(y=x+1\).`, S`\(y=5\).`],
    ],
    words: [
      ["System", "two equations solved together", ""],
      ["Secant", "a line meeting the parabola twice", ""],
      ["Tangent", "a line touching the parabola once", ""],
      ["Point of intersection", "a point on both graphs", ""],
    ],
  }),

  section("📌 The method", S`
  ${table(["Step", "Example: y = x² − 2x − 3 and y = x + 1"], [
    ["1. Set equal", "\\(x^2-2x-3=x+1\\)"],
    ["2. Rearrange to 0", "\\(x^2-3x-4=0\\)"],
    ["3. Discriminant", "\\(D=9+16=25>0\\): two points"],
    ["4. Solve", "\\((x-4)(x+1)=0\\): \\(x=4,\\ -1\\)"],
    ["5. y from the LINE", "\\((4,5)\\) and \\((-1,0)\\)"],
  ])}
  ${plane({ view: { xmin: -3, xmax: 6, ymin: -5, ymax: 7 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], lines: [{ m: 1, b: 1, color: "blue" }], points: [{ x: 4, y: 5, label: "(4, 5)" }, { x: -1, y: 0, label: "(−1, 0)" }], step: { x: 1, y: 1 } })}
  ${keyIdea(S`After setting equal and rearranging, \(D>0\): two points (secant); \(D=0\): one point (tangent); \(D<0\): none.`)}`),

  section("📌 Explore", S`<p>The parabola is \(y=-x^2+6x\). Change the slope and intercept of the line. The dashed amber line is the tangent with the same slope.</p>`),

  widget("tangentLab", { init: [-1, 6, 0, 2] }),

  section("📌 Watch out", watchOut([
    "Get every term on one side before using the discriminant.",
    "Substitute x into the simpler (linear) equation to get y.",
    "A tangent gives a double root: the quadratic is a perfect square.",
    "In a context, keep only intersections inside the domain.",
  ])),

  examples([
    ["Two intersections", S`Solve \(y=x^2-2x-3\) and \(y=x+1\).`,
      [S`\(x^2-3x-4=0\Rightarrow x=4\) or \(-1\).`, S`\(y=x+1\): \((4,5)\), \((-1,0)\).`],
      S`\((4,5)\) and \((-1,0)\)`],
    ["No intersection", S`How many points do \(y=-x^2+4x\) and \(y=2x+3\) share?`,
      [S`\(-x^2+4x=2x+3\Rightarrow-x^2+2x-3=0\).`, S`\(D=4-12=-8<0\).`],
      "none — the line passes above the parabola"],
    ["A tangent", S`Find \(k\) so that \(y=2x+k\) is tangent to \(y=x^2+1\), and the point of contact.`,
      [S`\(x^2-2x+1-k=0\): \(D=4-4(1-k)=4k=0\Rightarrow k=0\).`, S`\(x^2-2x+1=0\Rightarrow x=1\), \(y=2\).`],
      S`\(k=0\); touches at \((1,2)\)`],
    ["Lines of a fixed slope", S`For which \(k\) does \(y=x+k\) meet \(f(x)=x(8-x)\) once, twice, never?`,
      [S`\(8x-x^2=x+k\Rightarrow x^2-7x+k=0\): \(D=49-4k\).`, S`Once: \(k=12.25\). Twice: \(k<12.25\). Never: \(k>12.25\).`],
      S`tangent at \(k=12.25\)`,
      plane({ view: { xmin: -2, xmax: 10, ymin: -4, ymax: 20 }, curves: [{ f: (x) => x * (8 - x), color: "violet" }], lines: [{ m: 1, b: 12.25, color: "amber", dash: true }, { m: 1, b: 4, color: "blue" }, { m: 1, b: 16, color: "red" }], step: { x: 1, y: 2 } })],
    ["A ball and a drone", S`A ball's height is \(h(t)=-5t^2+25t+1\) m; a drone rises as \(d(t)=4t+7\) m. When are they at the same height?`,
      [S`\(-5t^2+25t+1=4t+7\Rightarrow5t^2-21t+6=0\).`, S`\(t=\frac{21\pm\sqrt{441-120}}{10}=\frac{21\pm\sqrt{321}}{10}\).`],
      S`\(t\approx0.31\) s and \(t\approx3.89\) s`],
  ]),

  practice([
    q("solve", S`Find the x-coordinates where \(y=x^2\) meets \(y=x+6\).`, roots(3, -2),
      "x² − x − 6 = 0.", [S`\((x-3)(x+2)=0\).`], S`\(x=3,\ -2\)`),
    q("count", S`How many points do \(y=x^2+4\) and \(y=4x\) share?`, num(1),
      "Compute D of x² − 4x + 4.", [S`\(D=16-16=0\).`], S`\(1\)`),
    q("horizontal tangent", S`For which \(k\) is the line \(y=k\) tangent to \(y=x^2-4x+7\)?`, num(3),
      "The tangent horizontal line goes through the vertex.", [S`\((x-2)^2+3\).`], S`\(k=3\)`),
    q("point", S`\(y=2x^2\) and \(y=3x+2\) meet at a point with \(x>0\). Find its y-coordinate.`, num(8),
      "Solve 2x² − 3x − 2 = 0.", [S`\((2x+1)(x-2)=0\Rightarrow x=2\); \(y=3(2)+2\).`], S`\(8\)`),
    q("meaning", "If the discriminant of the combined equation is negative, the line and the parabola…", choice(["do not meet", "meet once", "meet twice", "are the same curve"], 0),
      "No real roots.", ["No real x-values satisfy both equations."], "do not meet"),
  ]),

  ...hard([
    ["Two tangents from one family", S`Find every \(k\) for which \(y=kx-1\) is tangent to \(y=x^2+3\), and the points of contact.`,
      [S`\(x^2-kx+4=0\): \(D=k^2-16=0\Rightarrow k=\pm4\).`, S`Double root \(x=\frac k2=\pm2\); \(y=4+3=7\).`],
      S`\(k=4\) at \((2,7)\); \(k=-4\) at \((-2,7)\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -2, ymax: 14 }, curves: [{ f: (x) => x * x + 3, color: "violet" }], lines: [{ m: 4, b: -1, color: "blue" }, { m: -4, b: -1, color: "red" }], points: [{ x: 2, y: 7, label: "(2, 7)" }, { x: -2, y: 7, label: "(−2, 7)" }, { x: 0, y: -1, label: "(0, −1)", color: "gray" }], step: { x: 1, y: 2 } })],
    ["Two tanks", S`Tank A drains so that it holds \(V_A=2(t-20)^2\) litres for \(0\le t\le20\) minutes. Tank B starts empty and fills at 30 L/min. When do they hold the same volume, and how much?`,
      [S`\(2(t-20)^2=30t\Rightarrow2t^2-110t+800=0\Rightarrow t^2-55t+400=0\).`, S`\(t=\frac{55\pm\sqrt{1425}}{2}\approx8.63\) or \(46.37\) (outside the domain).`, S`\(V\approx30(8.63)\approx259\) L.`],
      "after about 8.6 min, with about 259 L in each"],
  ], [
    q("hard", S`For how many integers \(k\) from \(-10\) to \(10\) does \(y=2x+k\) meet \(y=x^2-4x+5\) twice?`, num(14),
      "Set equal; D > 0.", [S`\(x^2-6x+5-k=0\): \(D=16+4k>0\Rightarrow k>-4\); \(k=-3,\dots,10\).`], S`\(14\)`),
    q("hard", S`For \(m>0\), \(y=mx+1\) is tangent to \(y=x^2+2\). Find \(m\).`, num(2),
      "x² − mx + 1 = 0 with D = 0.", [S`\(m^2-4=0\).`], S`\(2\)`),
    q("hard", S`\(y=-x^2+6x-5\) and \(y=x-1\) meet at two points. Find the distance between them (2 decimals).`, num(Math.sqrt(18), 0.006),
      "Find both points first.", [S`\(x^2-5x+4=0\Rightarrow x=1,4\): \((1,0)\), \((4,3)\).`, S`\(\sqrt{9+9}\).`], S`\(\sqrt{18}\approx4.24\)`),
  ]),

  wrapUp({
    qas: [
      ["Why substitute into the line for y?", "It is linear, so the arithmetic is easier — both equations give the same y at an intersection."],
      ["What does a tangent look like algebraically?", "The combined quadratic is a perfect square: one double root."],
      ["Can a vertical line be tangent to a parabola that opens up?", "No — a vertical line always crosses it exactly once, but it is not a tangent."],
      ["How do I find all lines of slope m that meet the parabola?", "Write y = mx + k, set equal, and solve D ≥ 0 for k."],
      ["Do both intersections always matter in a model?", "Only those inside the domain of the context."],
    ],
    summary: [
      "Set the line equal to the parabola; rearrange to = 0.",
      "D > 0 two points, D = 0 tangent, D < 0 none.",
      "Get y from the line.",
      "Tangent conditions: solve D = 0 for the parameter.",
    ],
    next: "3.9 reviews the chapter.",
  }),
];
