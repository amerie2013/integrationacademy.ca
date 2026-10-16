// MTH1W 2.5 — Solving Multi-Step Equations (NEW lesson): brackets, variables on both sides, fractions,
// no solution / every number, word problems
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { balance, rect, straightAngle } from "./figs.mjs";

export const TITLE = "2.5 Solving Multi-Step Equations";
// New lesson: inserted after 2.4 on --apply (later lessons move down one position).
export const NEW = { id: "2b5e7c1a-0a25-4d1e-9c25-c2a9f0000205", position: 15 };

export const blocks = () => [
  intro({
    icon: "🪜",
    title: "Solving Multi-Step Equations",
    overview: String.raw`Real problems rarely give an equation as tidy as \(3x-5=16\). In this lesson you will solve equations that need several steps: <strong>brackets</strong> to expand, the variable on <strong>both sides</strong>, and <strong>fractions</strong> to clear. You will also meet two surprising cases — equations with <em>no</em> solution and equations true for <em>every</em> number — and use multi-step equations to solve geometry, age and rate problems.`,
    goals: [
      "solve equations with brackets by expanding first;",
      "solve equations with the variable on both sides by collecting variable terms on one side;",
      "clear fractions by multiplying every term by the lowest common denominator;",
      "recognise equations with no solution and equations true for all values;",
      "model and solve word problems (perimeter, angles, ages, consecutive numbers, rates) and verify the answer in context.",
    ],
    curriculum: "C1.5 (solve multi-step equations, including fractional coefficients)",
    book: "Nelson Principles of Mathematics 9, §4.3 Solving Equations Using Inverse Operations / Balancing (variables on both sides, fractions)",
    prior: [
      [String.raw`Solve \(4x+7=-13\).`, String.raw`\(x=-5\).`],
      [String.raw`Expand \(-3(2x-5)\).`, String.raw`\(-6x+15\).`],
      [String.raw`What is the LCD of \(\tfrac{x}{4}\) and \(\tfrac{x}{6}\)?`, String.raw`\(12\).`],
    ],
    words: [
      ["Multi-step equation", "needs more than two inverse operations", "\\(3(x-2)=x+8\\)"],
      ["Collect variable terms", "move all variable terms to one side with + or −", "\\(5x=2x+9\\Rightarrow3x=9\\)"],
      ["LCD", "lowest common denominator of all the fractions", "LCD of 3, 4, 6 is 12"],
      ["No solution", "the variable cancels and leaves a false statement", "\\(0=5\\ \\text{(false)}\\)"],
      ["Identity", "true for every value of the variable", "\\(2(x+1)=2x+2\\)"],
    ],
  }),

  section("📌 A plan for any linear equation", String.raw`
  ${table(["Step", "What to do", "Example: 3(2x − 1) + 4 = 5x + 9"], [
    ["1", "Expand brackets (and clear fractions)", "\\(6x-3+4=5x+9\\)"],
    ["2", "Simplify each side", "\\(6x+1=5x+9\\)"],
    ["3", "Collect the variable terms on one side", "\\(6x-5x+1=9\\), so \\(x+1=9\\)"],
    ["4", "Collect the constants on the other side", "\\(x=8\\)"],
    ["5", "Divide by the coefficient (if not 1)", "—"],
    ["6", "Verify in the original equation", "\\(3(15)+4=49\\) and \\(5(8)+9=49\\) ✓"],
  ])}
  ${keyIdea(String.raw`Move the <strong>smaller</strong> variable term to the other side. Then the variable term that is left has a positive coefficient, which avoids a sign error.`)}`),

  section("📌 Variables on both sides — the balance", String.raw`
  ${balance("5x − 3", "2x + 9", "Remove 2x from both pans, then add 3 to both, then divide by 3.")}
  <p>\(5x-3=2x+9\Rightarrow3x-3=9\Rightarrow3x=12\Rightarrow x=4\). In the explorer, subtract the \(x\)-term first (choose <em>x-term</em>), then deal with the numbers.</p>`),

  widget("balanceSolver", { left: { x: 5, k: -3 }, right: { x: 2, k: 9 } }),

  section("📌 Clearing fractions", String.raw`
  <p>Multiply <strong>every term on both sides</strong> by the LCD. The denominators divide out and you are left with an equation without fractions.</p>
  <p>\[\frac{x}{3}+\frac{x}{4}=14\quad\xrightarrow{\ \times12\ }\quad 4x+3x=168\quad\Rightarrow\quad 7x=168\quad\Rightarrow\quad x=24\]</p>
  <p>When a numerator has more than one term, put it in brackets before multiplying: \(\tfrac{x-5}{2}\times6=3(x-5)\).</p>
  ${watchOut([
    String.raw`<strong>Multiply every term</strong>, including whole numbers: \(\tfrac{x}{2}+3=5\) times \(2\) is \(x+6=10\), not \(x+3=10\).`,
    String.raw`<strong>Bracket a numerator</strong> before multiplying: \(-\tfrac{x-4}{3}\times6=-2(x-4)=-2x+8\).`,
    String.raw`<strong>Moving a term</strong> means subtracting it from both sides. It changes sign: \(7x=3x+20\Rightarrow4x=20\).`,
  ])}`),

  section("📌 No solution, or every number?", String.raw`
  ${table(["Equation", "After simplifying", "Meaning"], [
    ["\\(2(x+3)=2x+5\\)", "\\(6=5\\ \\text{(false)}\\)", "<strong>no solution</strong>: the two sides are parallel lines that never meet"],
    ["\\(3(x-2)+x=4x-6\\)", "\\(-6=-6\\) — always true", "<strong>identity</strong>: every real number is a solution"],
    ["\\(5x+2=2x+2\\)", "\\(3x=0\\)", "one solution, \\(x=0\\) (zero is a perfectly good answer)"],
  ])}`),

  section("📌 Word problems with multi-step equations", String.raw`
  <p>Many geometry facts give equations. Angles on a straight line add to \(180^\circ\):</p>
  ${straightAngle(["(2x + 15)°", "(3x − 10)°", "(x + 25)°"], "(2x + 15) + (3x − 10) + (x + 25) = 180, so 6x + 30 = 180 and x = 25.")}
  <p>Then the angles are \(65^\circ\), \(65^\circ\) and \(50^\circ\) — they add to \(180^\circ\) ✓. (The diagram is not to scale.)</p>`),

  examples([
    ["Brackets first", String.raw`Solve \(3(2x-5)-4=17\).`,
      [String.raw`Expand: \(6x-15-4=17\).`, String.raw`Simplify: \(6x-19=17\).`, String.raw`Add \(19\): \(6x=36\); divide by \(6\): \(x=6\).`, String.raw`Verify: \(3(7)-4=17\) ✓`],
      String.raw`\(x=6\)`],
    ["Variables on both sides", String.raw`Solve \(7y-9=3y+17\).`,
      [String.raw`Subtract \(3y\) from both sides: \(4y-9=17\).`, String.raw`Add \(9\): \(4y=26\).`, String.raw`Divide by \(4\): \(y=6.5\).`, String.raw`Verify: \(7(6.5)-9=36.5\) and \(3(6.5)+17=36.5\) ✓`],
      String.raw`\(y=6.5\)`],
    ["Brackets on both sides", String.raw`Solve \(4(a-3)=2(5a+9)-6\).`,
      [String.raw`Expand: \(4a-12=10a+18-6=10a+12\).`, String.raw`Subtract \(4a\) (the smaller \(a\)-term): \(-12=6a+12\).`, String.raw`Subtract \(12\): \(-24=6a\), so \(a=-4\).`, String.raw`Verify: \(4(-7)=-28\) and \(2(-11)-6=-28\) ✓`],
      String.raw`\(a=-4\)`],
    ["Clearing fractions", String.raw`Solve \(\dfrac{x+2}{3}-\dfrac{x-1}{4}=2\).`,
      [String.raw`LCD \(12\). Multiply every term: \(4(x+2)-3(x-1)=24\).`, String.raw`Expand carefully: \(4x+8-3x+3=24\).`, String.raw`Simplify: \(x+11=24\), so \(x=13\).`, String.raw`Verify: \(\tfrac{15}{3}-\tfrac{12}{4}=5-3=2\) ✓`],
      String.raw`\(x=13\)`],
    ["A perimeter problem", String.raw`A rectangular garden is \(4\) m longer than twice its width. Its perimeter is \(62\) m. Find its dimensions.`,
      [String.raw`Let the width be \(w\). Then the length is \(2w+4\).`, String.raw`Perimeter: \(2w+2(2w+4)=62\), so \(2w+4w+8=62\).`, String.raw`\(6w=54\), so \(w=9\) and the length is \(2(9)+4=22\).`, String.raw`Check: \(2(9)+2(22)=18+44=62\) ✓`],
      String.raw`\(9\) m by \(22\) m`,
      rect("2w + 4", "w", "Perimeter = 62 m.", { w: 250, h: 100, fill: "#dcfce7" })],
  ]),

  practice([
    q("brackets", String.raw`Solve \(5(n+3)-2n=27\).`, num(4),
      "Expand, then collect the n-terms on the left.", [String.raw`\(5n+15-2n=27\).`, String.raw`\(3n+15=27\), so \(3n=12\).`, String.raw`\(n=4\).`], String.raw`\(n=4\)`),
    q("both sides", String.raw`Solve \(9-2k=5k-26\).`, num(5),
      String.raw`Add \(2k\) to both sides so the \(k\)-term stays positive.`, [String.raw`\(9=7k-26\).`, String.raw`\(35=7k\).`, String.raw`\(k=5\).`], String.raw`\(k=5\)`),
    q("brackets on both sides", String.raw`Solve \(2(3p-1)=4(p+2)+1\). Give a decimal.`, num(5.5),
      "Expand both sides first.", [String.raw`\(6p-2=4p+9\).`, String.raw`\(2p=11\).`, String.raw`\(p=5.5\).`], String.raw`\(p=5.5\)`),
    q("fractions", String.raw`Solve \(\dfrac{x}{2}-\dfrac{x}{5}=9\).`, num(30),
      String.raw`Multiply every term by the LCD, \(10\).`, [String.raw`\(5x-2x=90\).`, String.raw`\(3x=90\), so \(x=30\).`, String.raw`Check: \(15-6=9\) ✓`], String.raw`\(x=30\)`),
    q("ages", String.raw`Mia is three times as old as her brother. In \(6\) years the sum of their ages will be \(44\). How old is Mia now?`, num(24),
      String.raw`Let the brother be \(b\) now, so Mia is \(3b\). Add \(6\) to each age.`, [String.raw`\((3b+6)+(b+6)=44\).`, String.raw`\(4b+12=44\), so \(b=8\).`, String.raw`Mia: \(3(8)=24\). Check: \(30+14=44\) ✓`], String.raw`\(24\) years old`),
  ]),

  wrapUp({
    qas: [
      ["Which side should the variable end up on?", String.raw`Either side works — \(-24=6a\) gives the same \(a=-4\) as \(6a=-24\). Choosing to remove the smaller variable term keeps the coefficient positive and avoids sign slips.`],
      ["Why multiply by the LCD instead of any common denominator?", "Any common multiple works, but the LCD keeps the numbers smallest, so there is less to simplify and fewer chances to make an arithmetic error."],
      [String.raw`I got \(0=0\). Did I do something wrong?`, String.raw`Probably not — the equation is an identity, true for every value. Check by substituting two different numbers into the original; both should work. If you got a false statement like \(0=4\ \text{(false)}\), there is no solution.`],
      [String.raw`Is \(x=0\) “no solution”?`, String.raw`No. \(x=0\) is a solution: the value \(0\) makes the equation true. “No solution” means no value at all works.`],
      ["How do I set up an age problem?", String.raw`Make a table with “now” and “in \(n\) years” (or “\(n\) years ago”) for each person. Add or subtract the same number of years to every person's age. Then write the equation from the sentence that gives a total or a comparison.`],
    ],
    summary: [
      "Expand brackets and clear fractions (multiply every term by the LCD) first.",
      "Collect variable terms on one side and constants on the other, then divide.",
      "A false statement means no solution; a true statement like −6 = −6 means every number is a solution.",
      "For word problems: define the variable, write the equation, solve, verify in the story, answer with units.",
    ],
    next: "2.6 uses the same inverse operations to rearrange formulas, solving for any variable.",
  }),
];
