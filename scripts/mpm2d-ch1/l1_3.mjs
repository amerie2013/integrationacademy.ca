// MPM2D 1.3 — Solving by Substitution (self-study format): isolate, substitute, solve, back-substitute,
// check; choosing the variable; fractions; special cases
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "1.3 Solving by Substitution";

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Solving by Substitution",
    overview: String.raw`Substitution finds the exact solution of a system without drawing anything. The idea is to use one equation to write one variable in terms of the other, then substitute that expression into the second equation, leaving a single equation in one variable. It is the method of choice when a variable is already isolated or has a coefficient of \(1\) or \(-1\).`,
    goals: [
      "isolate a variable in one equation of a system;",
      "substitute an expression into the other equation and solve;",
      "back-substitute to find the second variable and check the solution;",
      "choose the variable that makes substitution easiest;",
      "handle systems with fractions and recognize when substitution reveals no solution or infinitely many.",
    ],
    curriculum: "AG1 (solve systems of two linear equations by substitution)",
    prior: [
      [String.raw`Solve \(x+3y=10\) for \(x\).`, String.raw`\(x=10-3y\).`],
      [String.raw`Expand \(4(2-3y)\).`, String.raw`\(8-12y\).`],
      [String.raw`Solve \(5y-2(3-y)=8\).`, String.raw`\(7y-6=8\Rightarrow y=2\).`],
    ],
    words: [
      ["Isolate", "get a variable by itself on one side", "\\(y=3x-4\\)"],
      ["Substitute", "replace a variable by an equal expression", "put \\(3x-4\\) in for \\(y\\)"],
      ["Back-substitute", "use the value found to get the other variable", ""],
      ["Exact solution", "found algebraically, not estimated", "\\(\\left(\\tfrac{13}{7},\\tfrac{9}{7}\\right)\\)"],
    ],
  }),

  section("📌 The method", String.raw`
  ${table(["Step", "What you do", "Example: \\(y=3x-4\\), \\(2x+y=11\\)"], [
    ["1. Isolate", "solve one equation for one variable", "already done: \\(y=3x-4\\)"],
    ["2. Substitute", "replace that variable in the other equation", "\\(2x+(3x-4)=11\\)"],
    ["3. Solve", "solve the one-variable equation", "\\(5x=15\\Rightarrow x=3\\)"],
    ["4. Back-substitute", "find the other variable", "\\(y=3(3)-4=5\\)"],
    ["5. Check", "test the pair in both originals", "\\(2(3)+5=11\\) ✓"],
  ])}
  ${keyIdea(String.raw`Isolate the variable whose coefficient is \(1\) or \(-1\) — that avoids fractions. Always put brackets around the expression you substitute.`)}`),

  widget("substitutionStepper"),

  section("📌 Special cases", String.raw`
  <p>If the variable disappears when you solve:</p>
  ${table(["You get", "Meaning", "Graph"], [["a false statement, e.g. 0 = 7","no solution", "parallel lines"], ["a true statement, e.g. \\(0=0\\)", "infinitely many solutions", "the same line"]])}
  ${watchOut([
    "Substitute into the OTHER equation — substituting back into the same one gives 0 = 0 and no information.",
    "Use brackets: 2(3x − 4), not 2·3x − 4.",
    "Find both variables; a system's solution is an ordered pair.",
    "Check in both original equations, not in the rearranged one.",
  ])}`),

  examples([
    ["A variable already isolated", String.raw`Solve \(y=2x+3\) and \(5x-2y=-9\).`,
      [String.raw`Substitute: \(5x-2(2x+3)=-9\).`, String.raw`\(5x-4x-6=-9\Rightarrow x=-3\).`, String.raw`\(y=2(-3)+3=-3\). Check: \(5(-3)-2(-3)=-15+6=-9\) ✓`],
      String.raw`\((-3,-3)\)`],
    ["Isolating first", String.raw`Solve \(3x-y=7\) and \(4x+3y=18\).`,
      [String.raw`From the first: \(y=3x-7\).`, String.raw`Substitute: \(4x+3(3x-7)=18\Rightarrow13x-21=18\Rightarrow x=3\).`, String.raw`\(y=3(3)-7=2\). Check: \(4(3)+3(2)=18\) ✓`],
      String.raw`\((3,2)\)`],
    ["Choosing wisely", String.raw`Solve \(2x+5y=1\) and \(x-4y=-6\).`,
      [String.raw`The second has \(x\) with coefficient \(1\): \(x=4y-6\).`, String.raw`Substitute: \(2(4y-6)+5y=1\Rightarrow13y=13\Rightarrow y=1\).`, String.raw`\(x=4(1)-6=-2\). Check: \(2(-2)+5(1)=1\) ✓`],
      String.raw`\((-2,1)\)`],
    ["Fractions", String.raw`Solve \(\frac{x}{2}+\frac{y}{3}=4\) and \(x-y=3\).`,
      [String.raw`Clear fractions (×6): \(3x+2y=24\). From the second: \(x=y+3\).`, String.raw`\(3(y+3)+2y=24\Rightarrow5y=15\Rightarrow y=3\); \(x=6\).`, String.raw`Check: \(\frac62+\frac33=4\) ✓; \(6-3=3\) ✓`],
      String.raw`\((6,3)\)`],
    ["A special case", String.raw`Solve \(y=4x-1\) and \(8x-2y=5\).`,
      [String.raw`Substitute: \(8x-2(4x-1)=5\Rightarrow8x-8x+2=5\), so 2 = 5.`, "That is a false statement: there is no solution.", String.raw`Both lines have slope \(4\) with different intercepts: parallel.`],
      "no solution (parallel lines)",
      plane({ view: { xmin: -3, xmax: 4, ymin: -8, ymax: 10 }, lines: [{ m: 4, b: -1, color: "blue", label: "y = 4x − 1", lx: 1.6 }, { m: 4, b: -2.5, color: "red", label: "8x − 2y = 5", lx: 2.2 }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("x", String.raw`Solve \(y=x-2\) and \(3x+y=14\). What is \(x\)?`, num(4),
      "Substitute x − 2 for y.", [String.raw`\(3x+x-2=14\Rightarrow4x=16\).`], String.raw`\(x=4\)`),
    q("y", String.raw`For the same system, what is \(y\)?`, num(2),
      "Back-substitute.", [String.raw`\(4-2=2\).`], String.raw`\(y=2\)`),
    q("isolate", String.raw`Solve \(x+2y=9\) and \(3x-y=-1\). What is \(y\)?`, num(4),
      "Isolate x in the first equation.", [String.raw`\(x=9-2y\); \(3(9-2y)-y=-1\Rightarrow27-7y=-1\Rightarrow y=4\).`], String.raw`\(y=4\)`),
    q("fractions", String.raw`Solve \(y=\frac{2}{3}x\) and \(x+y=15\). What is \(x\)?`, num(9),
      "Substitute and multiply by 3.", [String.raw`\(x+\frac23x=15\Rightarrow\frac53x=15\Rightarrow x=9\).`], String.raw`\(x=9\)`),
    q("special case", String.raw`Substituting \(y=2x+1\) into \(6x-3y=-3\) gives…`, choice(["\\(-3=-3\\): infinitely many solutions", "0 = 4: no solution", "\\(x=1\\): one solution", "\\(x=0\\): one solution"], 0),
      "Substitute and simplify.", [String.raw`\(6x-3(2x+1)=-3\Rightarrow-3=-3\): true always; the lines are the same.`], "infinitely many"),
  ]),

  wrapUp({
    qas: [
      ["When is substitution better than elimination?", "When one equation already gives a variable, or a variable has coefficient 1 or −1. Otherwise elimination (1.4) is usually faster."],
      ["Why do I need brackets when I substitute?", "The whole expression replaces the variable. Without brackets, a multiplier or a minus sign only reaches part of it."],
      ["What does 0 = 5 mean?", "No pair (x, y) can satisfy both equations: the lines are parallel and the system has no solution."],
      ["What does 0 = 0 mean?", "Every pair that satisfies one equation satisfies the other: the two equations describe the same line."],
      ["Do I have to check?", "Yes. A quick check in both original equations catches sign errors and arithmetic slips."],
    ],
    summary: [
      "Isolate → substitute (with brackets) → solve → back-substitute → check.",
      "Isolate a variable with coefficient 1 or −1 when you can.",
      "False statement: no solution; true statement: infinitely many.",
    ],
    next: "1.4 solves systems by elimination, the best method for standard form.",
  }),
];
