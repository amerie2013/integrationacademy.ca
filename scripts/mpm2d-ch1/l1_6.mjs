// MPM2D 1.6 — Number of Solutions (self-study format): one, none or infinitely many; slopes and intercepts;
// coefficient ratios; consistent/inconsistent; finding parameter values
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "1.6 Number of Solutions";

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Number of Solutions",
    overview: String.raw`Two lines in a plane can cross once, never, or lie on top of each other. You can tell which before solving, just by comparing slopes and intercepts — or, in standard form, the ratios of the coefficients. In this lesson you will classify systems, use the vocabulary consistent and inconsistent, and find values of a constant that give a system one, none or infinitely many solutions.`,
    goals: [
      "describe the three possibilities for a linear system and what each looks like on a graph;",
      "predict the number of solutions by comparing slopes and y-intercepts;",
      "predict the number of solutions in standard form by comparing coefficient ratios;",
      "use the terms consistent, inconsistent, independent and dependent;",
      "find a value of a constant that gives a required number of solutions.",
    ],
    curriculum: "AG1 (linear systems — interpreting the number of solutions)",
    prior: [
      [String.raw`Slope of \(4x-2y=6\)?`, String.raw`\(2\).`],
      [String.raw`Are \(y=3x+1\) and \(y=3x-5\) parallel?`, "Yes: equal slopes, different intercepts."],
      [String.raw`Is \(2x+4y=10\) a multiple of \(x+2y=5\)?`, String.raw`Yes: ×2.`],
    ],
    words: [
      ["Consistent", "has at least one solution", "crossing or same lines"],
      ["Inconsistent", "has no solution", "parallel lines"],
      ["Independent", "exactly one solution", "different slopes"],
      ["Dependent", "infinitely many solutions", "the same line"],
    ],
  }),

  section("📌 The three cases", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:6px;">
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, lines: [{ m: 1, b: 1, color: "blue" }, { m: -2, b: 2, color: "red" }], points: [{ x: 1 / 3, y: 4 / 3, color: "green" }], width: 200 }, "One solution")}
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, lines: [{ m: 0.5, b: 2, color: "blue" }, { m: 0.5, b: -2, color: "red" }], width: 200 }, "No solution")}
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, lines: [{ m: -1, b: 1, color: "blue" }, { m: -1, b: 1, color: "red", dash: true }], width: 200 }, "Infinitely many")}
  </div>
  ${table(["Slopes", "Intercepts", "Solutions", "Name"], [["different", "any", "exactly one", "consistent, independent"], ["equal", "different", "none", "inconsistent"], ["equal", "equal", "infinitely many", "consistent, dependent"]])}`),

  section("📌 Deciding from standard form", String.raw`
  <p>For \(a_1x+b_1y=c_1\) and \(a_2x+b_2y=c_2\):</p>
  ${keyIdea(String.raw`If \(\dfrac{a_1}{a_2}\ne\dfrac{b_1}{b_2}\): one solution. If \(\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}\ne\dfrac{c_1}{c_2}\): no solution. If \(\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}=\dfrac{c_1}{c_2}\): infinitely many (one equation is a multiple of the other).`)}
  <p>Set the explorer to \(x+2y=4\) and \(2x+4y=8\), then change \(C_2\).</p>`),

  widget("systemGraph", { init: [1, 2, 4, 2, 4, 6] }),

  section("📌 Strategy", watchOut([
    "Compare slopes first: different slopes always mean exactly one solution.",
    "Equal slopes are not enough for “no solution” — check the intercepts too.",
    "When solving algebraically, 0 = 0 means infinitely many; 0 = k (k ≠ 0) means none.",
    "Write infinitely many solutions as “all points on the line …”.",
  ])),

  examples([
    ["Slopes and intercepts", String.raw`How many solutions does \(y=-\tfrac23x+4\), \(2x+3y=6\) have?`,
      [String.raw`Second line: \(3y=-2x+6\Rightarrow y=-\frac23x+2\).`, String.raw`Equal slopes \(-\frac23\), intercepts \(4\ne2\): parallel.`],
      "no solution (inconsistent)"],
    ["Coefficient ratios", String.raw`Classify \(3x-6y=9\) and \(-x+2y=-3\).`,
      [String.raw`\(\frac{3}{-1}=-3\), \(\frac{-6}{2}=-3\), \(\frac{9}{-3}=-3\): all equal.`, "The first equation is −3 times the second: the same line."],
      "infinitely many solutions (consistent, dependent)"],
    ["One solution", String.raw`Show that \(4x+y=7\) and \(2x-3y=5\) has exactly one solution, then find it.`,
      [String.raw`\(\frac42=2\ne\frac{1}{-3}\): one solution.`, String.raw`Multiply the first by 3 and add: \(14x=26\Rightarrow x=\frac{13}{7}\); \(y=7-\frac{52}{7}=-\frac37\).`],
      String.raw`\(\left(\tfrac{13}{7},-\tfrac37\right)\)`],
    ["Choosing a constant (no solution)", String.raw`For what value of \(k\) does \(kx+6y=5\), \(2x+3y=8\) have no solution?`,
      [String.raw`Need \(\frac{k}{2}=\frac{6}{3}\ne\frac58\).`, String.raw`\(\frac{k}{2}=2\Rightarrow k=4\); and \(2\ne\frac58\) ✓.`],
      String.raw`\(k=4\)`],
    ["Choosing a constant (infinitely many)", String.raw`For what values of \(a\) and \(c\) do \(ax-2y=c\) and \(3x-y=5\) describe the same line?`,
      [String.raw`The first must be a multiple of the second: \(-2=2(-1)\), so the multiplier is \(2\).`, String.raw`\(a=2(3)=6\) and \(c=2(5)=10\).`],
      String.raw`\(a=6\), \(c=10\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -6, ymax: 6 }, lines: [{ m: 3, b: -5, color: "blue", label: "3x − y = 5 and 6x − 2y = 10", lx: 0.6 }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("classify", String.raw`How many solutions: \(y=2x+3\) and \(y=-x+3\)?`, choice(["exactly one", "none", "infinitely many", "two"], 0),
      "Compare slopes.", ["Different slopes: one solution (they share the y-intercept)."], "exactly one"),
    q("classify", String.raw`How many solutions: \(x-4y=2\) and \(3x-12y=8\)?`, choice(["none", "exactly one", "infinitely many", "two"], 0),
      "Compare ratios.", [String.raw`\(\frac13=\frac{-4}{-12}\ne\frac28\): parallel.`], "none"),
    q("classify", String.raw`How many solutions: \(5x+10y=15\) and \(x+2y=3\)?`, choice(["infinitely many", "none", "exactly one", "two"], 0),
      "Is one a multiple of the other?", ["The first is 5 times the second."], "infinitely many"),
    q("k, none", String.raw`For what \(k\) does \(3x+ky=4\), \(6x+8y=1\) have no solution?`, num(4),
      "3/6 = k/8.", [String.raw`\(\frac36=\frac{k}{8}\Rightarrow k=4\); and \(\frac{4}{1}\ne\frac12\).`], String.raw`\(k=4\)`),
    q("vocabulary", "A system whose lines are parallel and distinct is called…", choice(["inconsistent", "consistent and dependent", "consistent and independent", "equivalent"], 0),
      "It has no solution.", ["No solution: inconsistent."], "inconsistent"),
  ]),

  wrapUp({
    qas: [
      ["Can two lines meet at exactly two points?", "No. If two straight lines share two points they share every point — they are the same line."],
      ["Why compare ratios instead of slopes?", "In standard form it is quicker: the ratios a₁/a₂ and b₁/b₂ are equal exactly when the slopes are equal."],
      ["How do I write the answer for infinitely many solutions?", "Say “infinitely many solutions — every point on the line x + 2y = 4”."],
      ["What happens when I solve an inconsistent system algebraically?", "Both variables cancel and you get a false statement like 0 = 7."],
      ["Where do these cases matter in real life?", "Two plans with the same rate but different fees never cost the same (no solution); two descriptions of the same plan always agree (infinitely many)."],
    ],
    summary: [
      "Different slopes: one solution. Same slope, different intercept: none. Same line: infinitely many.",
      "Standard form: compare a₁/a₂, b₁/b₂ and c₁/c₂.",
      "Consistent = at least one solution; inconsistent = none; dependent = infinitely many.",
    ],
    next: "1.7 reviews the whole chapter.",
  }),
];
