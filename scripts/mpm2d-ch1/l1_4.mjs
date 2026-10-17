// MPM2D 1.4 — Solving by Elimination (self-study format): equivalent systems, adding and subtracting
// equations, multiplying one or both equations, rearranging first, choosing a method
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "1.4 Solving by Elimination";

export const blocks = () => [
  intro({
    icon: "➕",
    title: "Solving by Elimination",
    overview: String.raw`Elimination combines the two equations so that one variable cancels. It works because multiplying an equation by a non-zero number, or adding two equations, produces an <em>equivalent system</em> — a new pair of lines through the same point. In this lesson you will add and subtract equations, multiply one or both equations to make coefficients match, rearrange equations first when needed, and choose the best method for any system.`,
    goals: [
      "explain why multiplying an equation or adding equations gives an equivalent system with the same solution;",
      "eliminate a variable by adding or subtracting equations;",
      "multiply one or both equations so that a variable can be eliminated;",
      "rearrange equations into standard form before eliminating;",
      "choose between graphing, substitution and elimination.",
    ],
    curriculum: "AG1 (solve systems of two linear equations by elimination)",
    prior: [
      [String.raw`Add \(3x+2y=7\) and \(x-2y=5\).`, String.raw`\(4x=12\).`],
      [String.raw`Multiply \(2x-y=4\) by \(3\).`, String.raw`\(6x-3y=12\).`],
      [String.raw`LCM of \(4\) and \(6\)?`, String.raw`\(12\).`],
    ],
    words: [
      ["Equivalent equations", "equations with exactly the same solutions", "\\(x+y=3\\) and \\(2x+2y=6\\)"],
      ["Equivalent systems", "systems with the same solution", ""],
      ["Eliminate", "make a variable's coefficients add to 0", ""],
      ["Opposite coefficients", "equal size, opposite sign", "\\(+3y\\) and \\(-3y\\)"],
    ],
  }),

  section("📌 Why elimination works", String.raw`
  <p>If \((x,y)\) satisfies both equations, it also satisfies their sum, and any multiple of either one. So each step produces an equivalent system — new lines, same point of intersection. When a variable cancels, the new line is horizontal or vertical and passes straight through the solution.</p>
  ${plane({ view: { xmin: -2, xmax: 6, ymin: -4, ymax: 6 }, lines: [{ m: -0.75, b: 2.5, color: "blue", label: "3x + 4y = 10", lx: -1.6 }, { m: 2.5, b: -4, color: "red", label: "5x − 2y = 8", lx: 3.4 }], vlines: [{ x: 2, color: "green", dash: true, label: "x = 2 (after eliminating y)" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "green" }], step: { x: 1, y: 1 } }, "Eliminating y gives 13x = 26, the vertical line x = 2 through the solution.")}
  ${keyIdea(String.raw`Line up like terms in standard form. If a variable has <strong>opposite</strong> coefficients, add the equations; if it has <strong>equal</strong> coefficients, subtract. Otherwise multiply one or both equations first, using the lowest common multiple of the coefficients.`)}`),

  widget("eliminationLab"),

  section("📌 The method", String.raw`
  ${table(["Step", "Example: \\(3x+4y=10\\), \\(5x-2y=8\\)"], [
    ["1. Standard form, terms lined up", "already done"],
    ["2. Make coefficients opposite", "multiply the second by 2: \\(10x-4y=16\\)"],
    ["3. Add (or subtract)", "\\(13x=26\\)"],
    ["4. Solve", "\\(x=2\\)"],
    ["5. Back-substitute", "\\(3(2)+4y=10\\Rightarrow y=1\\)"],
    ["6. Check in both", "\\(5(2)-2(1)=8\\) ✓"],
  ])}
  ${table(["Use…", "when…"], [["graphing", "you need a picture or an estimate"], ["substitution", "a variable is isolated or has coefficient ±1"], ["elimination", "both equations are in standard form with no ±1 coefficient"]])}
  ${watchOut([
    "When subtracting, subtract every term — including the constant on the right.",
    "Multiply both sides of an equation, not just the left.",
    "If both variables cancel: 0 = 0 means infinitely many solutions; 0 = k (k ≠ 0) means none.",
    "Rearrange first: x-terms under x-terms, y-terms under y-terms, numbers on the right.",
  ])}`),

  examples([
    ["Adding", String.raw`Solve \(4x+3y=11\) and \(2x-3y=13\).`,
      [String.raw`The \(y\)-coefficients are opposite: add. \(6x=24\Rightarrow x=4\).`, String.raw`\(4(4)+3y=11\Rightarrow3y=-5\Rightarrow y=-\frac53\).`, String.raw`Check: \(2(4)-3\left(-\frac53\right)=8+5=13\) ✓`],
      String.raw`\(\left(4,-\tfrac53\right)\)`],
    ["Subtracting", String.raw`Solve \(5x+2y=16\) and \(3x+2y=12\).`,
      [String.raw`The \(y\)-coefficients are equal: subtract. \(2x=4\Rightarrow x=2\).`, String.raw`\(3(2)+2y=12\Rightarrow y=3\).`, String.raw`Check: \(5(2)+2(3)=16\) ✓`],
      String.raw`\((2,3)\)`],
    ["Multiplying one equation", String.raw`Solve \(2x+5y=1\) and \(4x-3y=15\).`,
      [String.raw`Multiply the first by \(2\): \(4x+10y=2\).`, String.raw`Subtract the second: \((4x+10y)-(4x-3y)=2-15\Rightarrow13y=-13\Rightarrow y=-1\).`, String.raw`\(2x+5(-1)=1\Rightarrow x=3\). Check: \(4(3)-3(-1)=15\) ✓`],
      String.raw`\((3,-1)\)`],
    ["Multiplying both equations", String.raw`Solve \(3x+4y=-2\) and \(5x-6y=22\).`,
      [String.raw`Eliminate \(y\) (LCM of 4 and 6 is 12): \(\times3\): \(9x+12y=-6\); \(\times2\): \(10x-12y=44\).`, String.raw`Add: \(19x=38\Rightarrow x=2\).`, String.raw`\(3(2)+4y=-2\Rightarrow y=-2\). Check: \(5(2)-6(-2)=22\) ✓`],
      String.raw`\((2,-2)\)`],
    ["Rearranging first", String.raw`Solve \(2y=3x-8\) and \(4x=17-5y\).`,
      [String.raw`Standard form: \(3x-2y=8\) and \(4x+5y=17\).`, String.raw`\(\times5\) and \(\times2\): \(15x-10y=40\), \(8x+10y=34\). Add: \(23x=74\Rightarrow x=\frac{74}{23}\).`, String.raw`Then \(y=\frac{3x-8}{2}=\frac{\frac{222}{23}-\frac{184}{23}}{2}=\frac{19}{23}\).`],
      String.raw`\(\left(\tfrac{74}{23},\tfrac{19}{23}\right)\)`],
  ]),

  practice([
    q("add", String.raw`Solve \(x+y=10\) and \(x-y=4\). What is \(x\)?`, num(7),
      "Add the equations.", [String.raw`\(2x=14\).`], String.raw`\(x=7\)`),
    q("subtract", String.raw`Solve \(3x+5y=19\) and \(3x+2y=10\). What is \(y\)?`, num(3),
      "Subtract to eliminate x.", [String.raw`\(3y=9\).`], String.raw`\(y=3\)`),
    q("multiply one", String.raw`Solve \(x+3y=7\) and \(2x-y=0\). What is \(x\)?`, num(1),
      "Multiply the second by 3 and add.", [String.raw`\(6x-3y=0\); add: \(7x=7\).`], String.raw`\(x=1\)`),
    q("multiply both", String.raw`Solve \(2x+3y=12\) and \(3x-2y=5\). What is \(y\)?`, num(2),
      "Make the x-coefficients 6 and subtract.", [String.raw`\(6x+9y=36\), \(6x-4y=10\); subtract: \(13y=26\).`], String.raw`\(y=2\)`),
    q("method", String.raw`Which method is most efficient for \(y=5x-3\) and \(2x+3y=8\)?`, choice(["substitution", "elimination", "graphing", "none works"], 0),
      "Is a variable already isolated?", ["y is already isolated."], "substitution"),
  ]),

  wrapUp({
    qas: [
      ["Why can I multiply an equation without changing the solution?", "Both sides change by the same factor, so every pair that made it true still does. On a graph it is exactly the same line."],
      ["Which variable should I eliminate?", "The one that needs the smallest multipliers — often a variable whose coefficients are already equal, opposite or one is a multiple of the other."],
      ["How do I know whether to add or subtract?", "Opposite signs: add. Same signs: subtract. Or multiply one equation by −1 and always add."],
      ["What if I get fractions?", "That is fine — many systems have fractional solutions. Keep them exact and check."],
      ["Is elimination ever slower than substitution?", "Yes, when a variable is already isolated. Pick the method that fits the equations."],
    ],
    summary: [
      "Multiplying an equation or adding equations gives an equivalent system.",
      "Opposite coefficients: add; equal coefficients: subtract.",
      "Use the LCM of the coefficients to choose multipliers.",
      "Rearrange into standard form first; check in both originals.",
    ],
    next: "1.5 uses systems to solve problems from realistic situations.",
  }),
];
