// MTH1W 4.9 — Parallel and Perpendicular Lines (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.9 Parallel and Perpendicular Lines";

export const blocks = () => [
  intro({
    icon: "⊥",
    title: "Parallel and Perpendicular Lines",
    overview: String.raw`Slopes tell you how two lines sit relative to each other. <strong>Parallel</strong> lines have <strong>equal slopes</strong>. <strong>Perpendicular</strong> lines (meeting at \(90^\circ\)) have slopes that are <strong>negative reciprocals</strong>: their product is \(-1\). In this lesson you will test pairs of lines, write the equation of a line parallel or perpendicular to a given line through a given point, and use slopes to check geometric shapes for right angles.`,
    goals: [
      "decide whether two lines are parallel, perpendicular or neither, from their equations;",
      "find the negative reciprocal of a slope;",
      "write the equation of a line parallel to a given line through a given point;",
      "write the equation of a line perpendicular to a given line through a given point;",
      "use slopes to show that a triangle has a right angle or that a shape is a rectangle.",
    ],
    curriculum: "C4.2, C4.4 (connections between equations and graphs; solve problems)",
    prior: [
      [String.raw`What is the reciprocal of \(\tfrac25\)?`, String.raw`\(\tfrac52\).`],
      [String.raw`What is the slope of \(2x+y-7=0\)?`, String.raw`\(-2\).`],
      [String.raw`Find \(b\) if \(y=3x+b\) passes through \((1,5)\).`, String.raw`\(b=2\).`],
    ],
    words: [
      ["Parallel", "never meet; same slope", "\\(y=2x+1,\\ y=2x-3\\)"],
      ["Perpendicular", "meet at a right angle; slopes multiply to −1", "\\(m=2,\\ m=-\\tfrac12\\)"],
      ["Negative reciprocal", "flip the fraction and change the sign", "\\(\\tfrac34\\to-\\tfrac43\\)"],
    ],
  }),

  section("📌 The slope tests", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: 1, color: "blue", label: "y = 2x + 1", lx: 1.5 }, { m: 2, b: -3, color: "blue", label: "y = 2x − 3", lx: 3.5 }, { m: -0.5, b: 1, color: "red", label: "y = −½x + 1", lx: -5 }] }, "The blue lines are parallel (slope 2). The red line is perpendicular to both (slope −½; 2 × (−½) = −1).")}
  ${table(["Relationship", "Slopes", "Example"], [
    ["parallel", "\\(m_1=m_2\\)", "\\(2\\) and \\(2\\)"],
    ["perpendicular", "\\(m_1\\cdot m_2=-1\\) (negative reciprocals)", "\\(2\\) and \\(-\\tfrac12\\); \\(-\\tfrac35\\) and \\(\\tfrac53\\)"],
    ["special case", "horizontal (\\(m=0\\)) ⟂ vertical (slope undefined)", "\\(y=4\\) and \\(x=-1\\)"],
  ])}
  ${keyIdea(String.raw`Negative reciprocal: <strong>flip</strong> the fraction and <strong>change the sign</strong>. \(m=-\tfrac25\Rightarrow m_\perp=\tfrac52\). Check: \(-\tfrac25\times\tfrac52=-1\).`)}
  ${watchOut([
    "Put both equations in y = mx + b form (or use −A/B) before comparing slopes.",
    "Perpendicular needs BOTH the flip and the sign change: the perpendicular slope to 3 is −1/3, not 1/3 or −3.",
    "Parallel lines must have different intercepts; equal slopes and equal intercepts mean the same line.",
  ])}
  <p>In the explorer, set \(m_1=2\) and \(m_2=-0.5\) to see perpendicular lines; set them equal for parallel lines.</p>`),

  widget("linePair", { init: [2, 1, -0.5, -3] }),

  examples([
    ["Testing a pair", String.raw`Are \(y=3x-2\) and \(6x-2y+5=0\) parallel, perpendicular or neither?`,
      [String.raw`Second line: \(2y=6x+5\Rightarrow y=3x+2.5\), slope \(3\).`, "Equal slopes, different intercepts: parallel."],
      "parallel"],
    ["A negative reciprocal", String.raw`Find the slope perpendicular to \(m=-\tfrac25\) and check.`,
      [String.raw`Flip: \(-\tfrac52\); change sign: \(\tfrac52\).`, String.raw`\(-\tfrac25\times\tfrac52=-1\) ✓`],
      String.raw`\(\tfrac52\)`],
    ["A parallel line through a point", String.raw`Find the equation of the line parallel to \(y=-4x+1\) through \((2,3)\).`,
      [String.raw`Parallel: \(m=-4\).`, String.raw`\(3=-4(2)+b\Rightarrow b=11\).`],
      String.raw`\(y=-4x+11\)`],
    ["A perpendicular line through a point", String.raw`Find the equation of the line perpendicular to \(2x+3y-6=0\) through \((4,-1)\).`,
      [String.raw`Given slope: \(-\tfrac23\). Perpendicular slope: \(\tfrac32\).`, String.raw`\(-1=\tfrac32(4)+b=6+b\Rightarrow b=-7\).`, String.raw`Check: \(-\tfrac23\times\tfrac32=-1\) ✓`],
      String.raw`\(y=\tfrac32x-7\)`],
    ["A right triangle", String.raw`Show that the triangle with vertices \(A(0,0)\), \(B(2,4)\), \(C(6,2)\) has a right angle. Where is it?`,
      [String.raw`\(m_{AB}=\frac42=2\); \(m_{BC}=\frac{2-4}{6-2}=-\tfrac12\); \(m_{AC}=\frac26=\tfrac13\).`, String.raw`\(m_{AB}\cdot m_{BC}=2\times(-\tfrac12)=-1\): \(AB\perp BC\).`],
      "right angle at B",
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 5 }, segs: [{ pts: [[0, 0], [2, 4], [6, 2], [0, 0]], color: "violet" }], points: [{ x: 0, y: 0, label: "A", color: "blue" }, { x: 2, y: 4, label: "B", color: "red" }, { x: 6, y: 2, label: "C", color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("negative reciprocal", String.raw`What slope is perpendicular to \(\tfrac34\)?`, choice([String.raw`\(-\tfrac43\)`, String.raw`\(\tfrac43\)`, String.raw`\(-\tfrac34\)`, String.raw`\(\tfrac34\)`], 0), "Flip and change the sign.", [String.raw`\(\tfrac34\times(-\tfrac43)=-1\).`], String.raw`\(-\tfrac43\)`),
    q("classify", String.raw`\(y=\tfrac12x+3\) and \(y=-2x-1\) are…`, choice(["perpendicular", "parallel", "neither", "the same line"], 0), "Multiply the slopes.", [String.raw`\(\tfrac12\times(-2)=-1\).`], "perpendicular"),
    q("parallel line", String.raw`The line parallel to \(y=5x-2\) through \((1,9)\) is \(y=5x+b\). What is \(b\)?`, num(4), "Substitute the point.", [String.raw`\(9=5(1)+b\Rightarrow b=4\).`], String.raw`\(4\)`),
    q("perpendicular slope", String.raw`What is the slope of a line perpendicular to \(y=-5x+2\)? Give a decimal.`, num(0.2), "Negative reciprocal of −5.", [String.raw`\(-5\to\tfrac15=0.2\).`], String.raw`\(0.2\)`),
    q("perpendicular line", String.raw`Write the equation of the line perpendicular to \(y=2x+7\) through \((4,1)\).`, expr("-0.5x+3"),
      "Slope −½, then find b.", [String.raw`\(1=-\tfrac12(4)+b\Rightarrow b=3\).`], String.raw`\(y=-\tfrac12x+3\)`, { placeholder: "y = …" }),
  ]),

  wrapUp({
    qas: [
      ["Why do parallel lines have equal slopes?", "They rise by the same amount for every step to the right, so they keep the same distance apart and never meet."],
      ["Why is the product of perpendicular slopes −1?", "Rotating a slope triangle (run a, rise b) by 90° gives a triangle with run b and rise −a: slope −a/b. Multiply: (b/a)(−a/b) = −1."],
      ["Are y = 4 and x = −1 perpendicular?", "Yes: one is horizontal, one vertical. The product rule does not apply because the vertical slope is undefined, but they meet at 90°."],
      ["How can slopes prove a shape is a rectangle?", "Opposite sides parallel (equal slopes) and adjacent sides perpendicular (product −1)."],
      ["What is the most common mistake?", "Using the reciprocal without changing the sign (or the sign change without the flip)."],
    ],
    summary: [
      "Parallel: equal slopes (different intercepts).",
      "Perpendicular: slopes are negative reciprocals, product −1; horizontal ⟂ vertical.",
      "To write a parallel/perpendicular line through a point: get the right slope, then b = y − mx.",
    ],
    next: "4.10 reviews the whole chapter.",
  }),
];
