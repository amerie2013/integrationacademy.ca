// MPM2D 5.6 — Linear–Quadratic Systems (enrichment: beyond the MPM2D expectations, extends 1.x linear systems
// and 5.4): solving by substitution, two/one/no intersections, tangent lines, finding k, and an applied problem
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, roots } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "5.6 Linear–Quadratic Systems";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Linear–Quadratic Systems (Enrichment)",
    overview: S`In Chapter 1 you solved systems of two lines. A line and a parabola can meet in two points, one point, or not at all. To find the points, set the two expressions for \(y\) equal (substitution), rearrange to a quadratic equation \(=0\), and solve — the discriminant from 5.4 tells you how many points there are. This topic goes a little beyond the Grade 10 expectations (it is studied fully in Grade 11), so treat it as enrichment that ties the chapter together.`,
    goals: [
      "solve a linear–quadratic system by substitution;",
      "find the coordinates of the intersection points;",
      "use the discriminant to count intersection points;",
      "find the value of k that makes a line tangent to a parabola;",
      "solve a problem where a line meets a parabola.",
    ],
    curriculum: "Enrichment — extends AG1 (linear systems) and QR3 (solving quadratic equations, the discriminant); linear–quadratic systems are a Grade 11 (MCR3U) expectation",
    prior: [
      [S`Solve \(x^2-3x-4=0\).`, S`\(x=4\) or \(x=-1\).`],
      [S`Discriminant of \(x^2-2x+1\)?`, S`\(0\).`],
      [S`Solve \(y=2x+1\), \(y=-x+7\).`, S`\((2,5)\).`],
    ],
    words: [
      ["Linear–quadratic system", "a line and a parabola together", "\\(y=x^2\\), \\(y=x+2\\)"],
      ["Secant", "a line meeting the parabola twice", ""],
      ["Tangent", "a line touching the parabola once", ""],
      ["Substitution", "replace y in one equation by the other expression", ""],
    ],
  }),

  section("📌 Three possibilities", S`
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 9 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 1, b: 2, color: "green", label: "2 points" }, { m: 2, b: -1, color: "amber", label: "tangent" }, { m: 0, b: -1, color: "red", label: "none" }], points: [{ x: -1, y: 1, color: "green" }, { x: 2, y: 4, color: "green" }, { x: 1, y: 1, color: "amber" }], step: { x: 1, y: 1 } }, "y = x² with three lines: a secant (two points), a tangent (one point) and a line that misses.")}
  ${keyIdea(S`Set the expressions for \(y\) equal, rearrange to \(ax^2+bx+c=0\), and solve for \(x\). Substitute each \(x\) into the <strong>line</strong> to get \(y\). The discriminant of the combined equation counts the points: \(D>0\) two, \(D=0\) one (the line is tangent), \(D\lt0\) none.`)}`),

  section("📌 Explore", S`<p>Move the line and the parabola. Watch the combined equation and its discriminant change as the line goes from two intersection points to a tangent to none.</p>`),

  widget("linQuad", { init: [0, -3, 1, 1] }),

  section("📌 Tips", S`
  ${watchOut([
    "Get 0 on one side of the combined equation before factoring or using the formula.",
    "Each x-value gives a point — find its y too.",
    "Use the line (the simpler equation) to find y, then check in the parabola.",
    "Subtract every term of the line: x² + 2 = 3x − 1 becomes x² − 3x + 3 = 0.",
  ])}`),

  examples([
    ["Two points", S`Solve \(y=x^2-2x-3\) and \(y=x+1\).`,
      [S`\(x^2-2x-3=x+1\Rightarrow x^2-3x-4=0\).`, S`\((x-4)(x+1)=0\): \(x=4\) or \(x=-1\).`, S`Line: \(y=5\) and \(y=0\).`],
      S`\((4,5)\) and \((-1,0)\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -5, ymax: 9 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], lines: [{ m: 1, b: 1, color: "blue" }], points: [{ x: 4, y: 5, label: "(4, 5)", color: "red" }, { x: -1, y: 0, label: "(−1, 0)", color: "red" }], step: { x: 1, y: 1 } })],
    ["A tangent", S`Solve \(y=x^2+1\) and \(y=2x\).`,
      [S`\(x^2+1=2x\Rightarrow x^2-2x+1=0\).`, S`\((x-1)^2=0\): one root \(x=1\); \(y=2\).`],
      S`one point, \((1,2)\): the line is tangent`],
    ["No intersection", S`Show that \(y=x^2+4\) and \(y=x\) do not meet.`,
      [S`\(x^2+4=x\Rightarrow x^2-x+4=0\).`, S`\(D=1-16=-15\lt0\).`],
      S`no real roots, so no intersection points`],
    ["A parabola opening down", S`Solve \(y=-x^2+6x-5\) and \(y=x-1\).`,
      [S`\(-x^2+6x-5=x-1\Rightarrow-x^2+5x-4=0\Rightarrow x^2-5x+4=0\).`, S`\((x-1)(x-4)=0\): \(x=1\), \(y=0\); \(x=4\), \(y=3\).`],
      S`\((1,0)\) and \((4,3)\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -4, ymax: 6 }, curves: [{ f: (x) => -x * x + 6 * x - 5, color: "violet" }], lines: [{ m: 1, b: -1, color: "blue" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "red" }, { x: 4, y: 3, label: "(4, 3)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Find k for a tangent", S`For what value of \(k\) is the line \(y=2x+k\) tangent to \(y=x^2+3\)?`,
      [S`\(x^2+3=2x+k\Rightarrow x^2-2x+(3-k)=0\).`, S`Tangent means \(D=0\): \(4-4(3-k)=0\).`, S`\(4-12+4k=0\Rightarrow k=2\).`],
      S`\(k=2\)`],
  ]),

  practice([
    q("solve", S`Find the x-coordinates where \(y=x^2\) meets \(y=x+6\).`, roots(3, -2),
      "x² = x + 6.", [S`\(x^2-x-6=0\Rightarrow(x-3)(x+2)=0\).`], S`\(x=3\) or \(x=-2\)`),
    q("y-coordinate", S`\(y=x^2-4\) and \(y=3x\) meet at two points. Find the \(y\)-coordinate of the point with positive \(x\).`, num(12),
      "x² − 3x − 4 = 0.", [S`\((x-4)(x+1)=0\Rightarrow x=4\).`, S`\(y=3(4)=12\).`], S`\(12\)`),
    q("count", S`How many times does \(y=2x-5\) meet \(y=x^2-4x+4\)?`, choice(["0", "1", "2", "3"], 1),
      "Combine and find D.", [S`\(x^2-6x+9=0\)…`, S`\((x-3)^2=0\): \(D=0\).`], S`\(1\)`),
    q("count", S`How many intersection points do \(y=x^2+2x+5\) and \(y=-x+1\) have?`, num(0),
      "Combine and find D.", [S`\(x^2+3x+4=0\).`, S`\(D=9-16=-7\lt0\).`], S`\(0\)`),
    q("tangent k", S`For what value of \(k\) is \(y=4x+k\) tangent to \(y=x^2\)?`, num(-4),
      "x² − 4x − k = 0 needs D = 0.", [S`\(16+4k=0\).`], S`\(k=-4\)`),
  ]),

  wrapUp({
    qas: [
      ["How many solutions can a linear–quadratic system have?", "Two, one or none. A line can't meet a parabola three times."],
      ["How is this like solving two lines?", "Both use substitution: set the y-expressions equal. With two lines you get a linear equation; with a line and a parabola you get a quadratic one."],
      ["What does a tangent line mean algebraically?", "The combined quadratic has a double root, so its discriminant is 0."],
      ["Why find y from the line?", "It is the simpler equation, so there are fewer chances for arithmetic errors. Check the point in the parabola too."],
      ["Do I need this for the Grade 10 test?", "It goes beyond the MPM2D expectations; your teacher decides. It is good practice for solving and for the discriminant, and it returns in Grade 11."],
    ],
    summary: [
      "Set the y-expressions equal and rearrange to = 0.",
      "Solve for x, then find y from the line.",
      "D > 0: two points; D = 0: tangent; D < 0: none.",
      "Tangent problems: set D = 0 and solve for k.",
    ],
    next: "5.7 reviews the whole chapter.",
  }),
];
