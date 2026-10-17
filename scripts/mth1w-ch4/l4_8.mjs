// MTH1W 4.8 — General Form vs Slope-Intercept Form (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.8 General Form vs Slope-Intercept Form";

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "General Form vs Slope-Intercept Form",
    overview: String.raw`The same line can be written in different forms. <strong>Slope-intercept form</strong> \(y=mx+b\) shows the slope and the y-intercept at a glance. <strong>General form</strong> \(Ax+By+C=0\) (with integer coefficients and \(A\ge0\)) appears naturally in situations like budgets and is the easiest form for finding <strong>both intercepts</strong>. In this lesson you will convert between the forms, graph a line from its intercepts, and decide which form suits a problem.`,
    goals: [
      "write a line in general form \\(Ax+By+C=0\\) with integers and \\(A\\ge0\\);",
      "rearrange general form to slope-intercept form and read m and b;",
      "find the x- and y-intercepts and graph a line from them;",
      "use \\(m=-\\frac AB\\) and \\(b=-\\frac CB\\) as shortcuts and explain why they work;",
      "model a situation with general form and interpret its intercepts.",
    ],
    curriculum: "C4.2, C4.3 (forms of linear relations)",
    prior: [
      [String.raw`Solve \(3x-4y=12\) for \(y\).`, String.raw`\(y=\tfrac34x-3\).`],
      [String.raw`Multiply \(\tfrac23x-4=y\) by \(3\).`, String.raw`\(2x-12=3y\).`],
      [String.raw`Where does a line cross the x-axis?`, String.raw`Where \(y=0\).`],
    ],
    words: [
      ["Slope-intercept form", "y = mx + b", "\\(y=-2x+5\\)"],
      ["General form", "Ax + By + C = 0 with integer A, B, C and A ≥ 0", "\\(2x+y-5=0\\)"],
      ["x-intercept", "where the line crosses the x-axis (y = 0)", "\\((2.5,0)\\)"],
      ["y-intercept", "where the line crosses the y-axis (x = 0)", "\\((0,5)\\)"],
    ],
  }),

  section("📌 Converting between the forms", String.raw`
  ${table(["Direction", "Steps", "Example"], [
    ["slope-intercept → general", "move every term to one side; clear fractions; make A positive", "\\(y=\\tfrac23x-4\\Rightarrow3y=2x-12\\Rightarrow2x-3y-12=0\\)"],
    ["general → slope-intercept", "isolate y: move the x and constant terms, divide by B", "\\(4x+2y-10=0\\Rightarrow2y=-4x+10\\Rightarrow y=-2x+5\\)"],
  ])}
  ${keyIdea(String.raw`From \(Ax+By+C=0\): \(y=-\tfrac ABx-\tfrac CB\), so \(m=-\dfrac AB\) and \(b=-\dfrac CB\).`)}
  ${watchOut([
    "When dividing by B, divide every term, and keep the signs.",
    "General form needs integers: multiply through by the LCD to clear fractions.",
    "Make A positive by multiplying the whole equation by −1 if needed.",
  ])}`),

  section("📌 Graphing with intercepts", String.raw`
  ${plane({ view: { xmin: -10, xmax: 4, ymin: -2, ymax: 8 }, lines: [{ m: 0.75, b: 6, label: "3x − 4y + 24 = 0", lx: -9 }], points: [{ x: -8, y: 0, label: "(−8, 0)", color: "green" }, { x: 0, y: 6, label: "(0, 6)", color: "green" }] }, "Set y = 0 for the x-intercept and x = 0 for the y-intercept, then join them.")}
  <p>For \(3x-4y+24=0\): \(y=0\Rightarrow3x=-24\Rightarrow x=-8\); \(x=0\Rightarrow-4y=-24\Rightarrow y=6\). Two points are enough to draw the line. In the explorer, every line is shown in both forms.</p>`),

  widget("twoPointLine", { init: [-4, 0, 0, 3] }),

  examples([
    ["Slope-intercept to general form", String.raw`Write \(y=\tfrac23x-4\) in general form.`,
      [String.raw`Multiply by \(3\): \(3y=2x-12\).`, String.raw`Move all terms to the right: \(0=2x-3y-12\).`],
      String.raw`\(2x-3y-12=0\)`],
    ["General to slope-intercept form", String.raw`Write \(4x+2y-10=0\) in slope-intercept form; state m and b.`,
      [String.raw`\(2y=-4x+10\).`, String.raw`\(y=-2x+5\).`],
      String.raw`\(y=-2x+5\): \(m=-2\), \(b=5\)`],
    ["Intercepts", String.raw`Find the intercepts of \(5x-2y+20=0\) and graph the line.`,
      [String.raw`\(y=0\): \(5x+20=0\Rightarrow x=-4\).`, String.raw`\(x=0\): \(-2y+20=0\Rightarrow y=10\).`],
      String.raw`\((-4,0)\) and \((0,10)\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -2, ymax: 12 }, lines: [{ m: 2.5, b: 10, label: "5x − 2y + 20 = 0", lx: -5.8 }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "green" }, { x: 0, y: 10, label: "(0, 10)", color: "green" }], step: { x: 1, y: 2 } })],
    ["A budget in general form", String.raw`A school sells adult tickets at \(15\) dollars and student tickets at \(10\) dollars and needs \(600\) dollars. Write an equation, find the intercepts and explain them.`,
      [String.raw`\(15a+10s=600\), i.e. \(15a+10s-600=0\) (or \(3a+2s-120=0\)).`, String.raw`\(s=0\): \(a=40\); \(a=0\): \(s=60\).`, "40 adult tickets alone, or 60 student tickets alone, raise exactly 600 dollars; other combinations lie on the line between."],
      String.raw`\(3a+2s-120=0\); intercepts \(40\) and \(60\)`],
    ["The shortcuts", String.raw`Find the slope and y-intercept of \(5x-2y+8=0\) without rearranging, then check by rearranging.`,
      [String.raw`\(m=-\frac AB=-\frac{5}{-2}=\frac52\); \(b=-\frac CB=-\frac{8}{-2}=4\).`, String.raw`Check: \(-2y=-5x-8\Rightarrow y=\tfrac52x+4\) ✓`],
      String.raw`\(m=\tfrac52\), \(b=4\)`],
  ]),

  practice([
    q("slope", String.raw`What is the slope of \(6x+3y-9=0\)?`, num(-2), "Isolate y, or use −A/B.", [String.raw`\(3y=-6x+9\Rightarrow y=-2x+3\).`], String.raw`\(-2\)`),
    q("x-intercept", String.raw`What is the x-intercept of \(2x-5y-10=0\)?`, num(5), "Set y = 0.", [String.raw`\(2x-10=0\Rightarrow x=5\).`], String.raw`\(5\)`),
    q("y-intercept", String.raw`What is the y-intercept of \(2x-5y-10=0\)?`, num(-2), "Set x = 0.", [String.raw`\(-5y-10=0\Rightarrow y=-2\).`], String.raw`\(-2\)`),
    q("to general form", String.raw`Which is \(y=-\tfrac34x+2\) in general form?`, choice([String.raw`\(3x+4y-8=0\)`, String.raw`\(3x-4y+8=0\)`, String.raw`\(-3x+4y-8=0\)`, String.raw`\(3x+4y+8=0\)`], 0),
      "Multiply by 4, then move the terms to the left.", [String.raw`\(4y=-3x+8\Rightarrow3x+4y-8=0\).`], String.raw`\(3x+4y-8=0\)`),
    q("situation", String.raw`Pens cost \(4\) dollars and binders \(6\) dollars; \(4x+6y=72\) describes spending exactly \(72\) dollars. How many binders can be bought with no pens?`, num(12),
      "That is the intercept on the binders axis (x = 0).", [String.raw`\(6y=72\Rightarrow y=12\).`], String.raw`\(12\)`),
  ]),

  wrapUp({
    qas: [
      ["Why have two forms?", "Slope-intercept shows m and b immediately; general form uses integers (no fractions) and makes intercepts easy. Situations with two quantities that share a total (budgets, mixtures) often come out in general form."],
      ["Why must A be positive in general form?", "It is a convention, so that every line has one standard way of being written; multiplying by −1 does not change the line."],
      ["How do I find intercepts quickly?", "Cover the y-term and solve for x (x-intercept); cover the x-term and solve for y (y-intercept)."],
      ["Can every line be written in slope-intercept form?", String.raw`All except vertical lines. \(x=3\) is \(x-3=0\) in general form (B = 0) but has no slope-intercept form.`],
      ["When do intercepts make sense in a story?", "When zero of one quantity is possible: zero adult tickets, zero pens. They show the extreme cases of the situation."],
    ],
    summary: [
      "General form Ax + By + C = 0 (integers, A ≥ 0); slope-intercept y = mx + b.",
      "Convert by rearranging; m = −A/B and b = −C/B.",
      "Intercepts: set y = 0 for the x-intercept, x = 0 for the y-intercept.",
    ],
    next: "4.9 uses slopes to recognize parallel and perpendicular lines.",
  }),
];
