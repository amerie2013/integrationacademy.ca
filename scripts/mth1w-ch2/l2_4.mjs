// MTH1W 2.4 — Creating & Solving Equations (self-study format): inverse operations, balance model,
// working backward, equations from words and from linear relations / graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { balance, flow, lineGraph } from "./figs.mjs";

export const TITLE = "2.4 Creating & Solving Equations";

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Creating &amp; Solving Equations",
    overview: String.raw`An <strong>equation</strong> says that two expressions are equal. <strong>Solving</strong> it means finding every value of the variable that makes it true. In this lesson you will check solutions, solve one- and two-step equations with <strong>inverse operations</strong> and the <strong>balance model</strong>, work backward through a chain of operations, and turn word problems and linear relations into equations. You will also see that solving an equation is the same as reading a point on a graph.`,
    goals: [
      "tell an equation from an expression, and verify whether a value is a solution;",
      "solve one- and two-step equations with integer, fraction and decimal coefficients using inverse operations;",
      "explain each step with the balance model: do the same thing to both sides;",
      "write and solve an equation for a word problem or a linear relation, and state the answer in context;",
      "estimate a solution from a graph and confirm it with algebra.",
    ],
    curriculum: "C1.5 (create and solve equations), C3 link (linear relations); B3 (rational-number operations)",
    prior: [
      [String.raw`Evaluate \(5x-8\) at \(x=-2\).`, String.raw`\(-18\).`],
      [String.raw`What undoes “multiply by \(4\)”?`, String.raw`Divide by \(4\).`],
      [String.raw`Simplify \(\tfrac34\times\tfrac43\).`, String.raw`\(1\) — reciprocals.`],
    ],
    words: [
      ["Equation", "a statement that two expressions are equal", "\\(3x-5=16\\)"],
      ["Solution (root)", "a value that makes the equation true", "\\(x=7\\)"],
      ["Inverse operation", "the operation that undoes another", "\\(+\\leftrightarrow-\\), \\(\\times\\leftrightarrow\\div\\)"],
      ["Isolate", "get the variable alone on one side", "\\(x=\\dots\\)"],
      ["Verify", "substitute the solution into the original equation", "\\(3(7)-5=16\\) ✓"],
      ["Equivalent equations", "equations with the same solution", "\\(3x=21\\) and \\(x=7\\)"],
    ],
  }),

  section("📌 Expressions, equations and solutions", String.raw`
  <p>\(3x-5\) is an <strong>expression</strong> — it has no equals sign, so we can simplify or evaluate it, but not solve it. \(3x-5=16\) is an <strong>equation</strong>: it is true for one value of \(x\) and false for others.</p>
  ${table(["Try x =", "Left side 3x − 5", "Right side", "True?"], [["\\(5\\)", "\\(10\\)", "\\(16\\)", "no"], ["\\(6\\)", "\\(13\\)", "\\(16\\)", "no"], ["\\(7\\)", "\\(16\\)", "\\(16\\)", "<strong>yes</strong>"]])}
  <p>Guess-and-check works, but it is slow and fails for answers like \(x=-\tfrac{13}{4}\). Inverse operations find the solution directly.</p>`),

  section("📌 The balance model and inverse operations", String.raw`
  ${balance("3x − 5", "16", "An equation is a balance. Doing the same thing to both sides keeps it level.")}
  <p>To build \(3x-5\) from \(x\), we <em>multiply by \(3\)</em>, then <em>subtract \(5\)</em>. To get back to \(x\), undo those operations <strong>in reverse order</strong>:</p>
  ${flow("x", ["× 3", "− 5"], "16", "Forward (top) and backward (bottom): undo the last operation first.", ["16", "+ 5", "÷ 3", "x = 7"])}
  <p>\[\begin{aligned}3x-5&=16\\3x-5+5&=16+5&&\text{add 5 to both sides}\\3x&=21\\ \tfrac{3x}{3}&=\tfrac{21}{3}&&\text{divide both sides by 3}\\x&=7\end{aligned}\]</p>
  <p><strong>Verify:</strong> \(3(7)-5=21-5=16\) ✓. Every line is an <em>equivalent equation</em> — it has the same solution as the one before.</p>
  ${keyIdea(String.raw`To isolate the variable: undo addition/subtraction first, then multiplication/division (the reverse of BEDMAS). Whatever you do to one side, do to the other.`)}
  <p>Try it in the explorer. Choose an amount and an operation, apply it to both sides, and watch the pans. Switch to <em>Test a value</em> to see the scale tip when a guess is wrong.</p>`),

  widget("balanceSolver", { left: { x: 4, k: 7 }, right: { x: 0, k: -13 } }),

  section("📌 Fractions and decimals", String.raw`
  <ul>
    <li>\(\tfrac{n}{6}=-4\): undo “divide by \(6\)” by multiplying by \(6\): \(n=-24\).</li>
    <li>\(\tfrac{2}{5}w=8\): multiply both sides by the <strong>reciprocal</strong> \(\tfrac52\): \(w=8\times\tfrac52=20\).</li>
    <li>\(1.5p+0.8=5.3\): subtract \(0.8\): \(1.5p=4.5\); divide by \(1.5\): \(p=3\). (Or multiply every term by \(10\) first: \(15p+8=53\).)</li>
  </ul>
  ${watchOut([
    String.raw`<strong>Undo in reverse order.</strong> In \(4x+7=-13\), subtract \(7\) <em>before</em> dividing by \(4\).`,
    String.raw`<strong>Keep the sign with the term.</strong> In \(9-2x=15\), the coefficient is \(-2\): \(-2x=6\), so \(x=-3\) (not \(3\)).`,
    String.raw`<strong>Divide the whole side.</strong> From \(5x=-35\), \(x=-7\): divide <em>both</em> sides by \(5\), keeping the sign.`,
    String.raw`<strong>Always verify in the original equation</strong>, not in a later line where a mistake may already be.`,
  ])}`),

  section("📌 Equations from words and from linear relations", String.raw`
  <p><strong>Words.</strong> Name the unknown with a letter (“let \(n\) be the number …”), write the equation, solve, and answer in a sentence with units.</p>
  <p><strong>Linear relations.</strong> A relation such as \(C=12+0.35d\) (a car rental: \(12\) dollars plus \(0.35\) dollars per km) gives an equation as soon as one variable is known:</p>
  <ul><li>Cost for \(80\) km: substitute \(d=80\): \(C=12+28=40\) dollars (no solving needed).</li>
  <li>Distance for a \(54\)-dollar bill: \(54=12+0.35d\), so \(0.35d=42\) and \(d=120\) km.</li></ul>
  <p>On a graph of the relation, the second question is “go across from \(54\) to the line, then down”. The explorer shows this for a phone battery that starts at \(100\%\) and drops \(8\%\) per hour: \(100-8t=c\).</p>`),

  widget("equationGraph", { m: -8, b: 100, cInit: 20, xMax: 14, yMax: 100, xLabel: "time (h)", yLabel: "battery (%)", xStep: 2, yStep: 20 }),

  examples([
    ["Is it a solution?", String.raw`Is \(x=-3\) a solution of \(4-2x=3x+19\)?`,
      [String.raw`Left: \(4-2(-3)=4+6=10\).`, String.raw`Right: \(3(-3)+19=-9+19=10\).`, String.raw`Both sides are \(10\).`],
      String.raw`yes, \(x=-3\) is a solution`],
    ["Two-step equation", String.raw`Solve \(7x+9=-26\) and verify.`,
      [String.raw`Subtract \(9\) from both sides: \(7x=-35\).`, String.raw`Divide both sides by \(7\): \(x=-5\).`, String.raw`Verify: \(7(-5)+9=-35+9=-26\) ✓`],
      String.raw`\(x=-5\)`,
      balance("7x + 9", "−26", "Remove 9 from both pans, then split each side into 7 equal groups.")],
    ["A fraction coefficient", String.raw`Solve \(\tfrac{2m}{3}+5=-7\).`,
      [String.raw`Subtract \(5\): \(\tfrac{2m}{3}=-12\).`, String.raw`Multiply both sides by \(\tfrac32\) (the reciprocal of \(\tfrac23\)): \(m=-12\times\tfrac32=-18\).`, String.raw`Verify: \(\tfrac{2(-18)}{3}+5=-12+5=-7\) ✓`],
      String.raw`\(m=-18\)`],
    ["Working backward", String.raw`Ana thinks of a number, multiplies it by \(4\), subtracts \(7\), then divides by \(3\). The result is \(11\). What was her number?`,
      [String.raw`Let the number be \(n\): \(\dfrac{4n-7}{3}=11\).`, String.raw`Undo in reverse: \(\times3\): \(4n-7=33\); \(+7\): \(4n=40\); \(\div4\): \(n=10\).`, String.raw`Check forward: \(10\to40\to33\to11\) ✓`],
      String.raw`Ana's number was \(10\)`,
      flow("n", ["× 4", "− 7", "÷ 3"], "11", "Forward, then backward: each step is undone in reverse order.", ["11", "× 3", "+ 7", "÷ 4", "n = 10"])],
    ["A linear relation and its graph", String.raw`A taxi charges \(3.75\) dollars plus \(1.80\) dollars per kilometre: \(C=3.75+1.8d\). (a) Use the graph to estimate how far you can ride for \(30.75\) dollars. (b) Solve the equation exactly.`,
      [String.raw`(a) Go across from \(C\approx31\) to the line and down: about \(15\) km.`, String.raw`(b) \(3.75+1.8d=30.75\), so \(1.8d=27\).`, String.raw`\(d=27\div1.8=15\). Verify: \(3.75+1.8(15)=3.75+27=30.75\) ✓`],
      String.raw`\(15\) km`,
      lineGraph({ m: 1.8, b: 3.75, c: 30.75, xMax: 20, yMax: 40, xStep: 2, yStep: 5, xLabel: "distance d (km)", yLabel: "cost C (dollars)" }, "C = 3.75 + 1.8d with the target cost 30.75 dollars (dashed).")],
  ]),

  practice([
    q("two-step", String.raw`Solve \(-6y+13=49\).`, num(-6),
      String.raw`Subtract \(13\) first, then divide by \(-6\).`, [String.raw`\(-6y=36\).`, String.raw`\(y=36\div(-6)=-6\).`, String.raw`Verify: \(-6(-6)+13=36+13=49\) ✓`], String.raw`\(y=-6\)`),
    q("fraction", String.raw`Solve \(\tfrac{x}{5}+8=3\).`, num(-25),
      String.raw`Subtract \(8\), then multiply by \(5\).`, [String.raw`\(\tfrac{x}{5}=-5\).`, String.raw`\(x=-25\).`], String.raw`\(x=-25\)`),
    q("decimals", String.raw`Solve \(0.4t-1.7=2.3\).`, num(10),
      String.raw`Add \(1.7\) to both sides, then divide by \(0.4\).`, [String.raw`\(0.4t=4\).`, String.raw`\(t=4\div0.4=10\).`], String.raw`\(t=10\)`),
    q("words", String.raw`Five less than three times a number is \(31\). Find the number.`, num(12),
      String.raw`Write \(3n-5=31\).`, [String.raw`\(3n-5=31\).`, String.raw`\(3n=36\), so \(n=12\).`, String.raw`Check: \(3(12)-5=31\) ✓`], String.raw`\(12\)`),
    q("linear relation", String.raw`A plumber's bill is \(C=65+45h\) dollars for \(h\) hours. A bill was \(290\) dollars. How many hours did the plumber work?`, num(5),
      String.raw`Set \(65+45h=290\) and solve.`, [String.raw`\(45h=225\).`, String.raw`\(h=5\).`], String.raw`\(5\) hours`),
  ]),

  wrapUp({
    qas: [
      ["Why do I undo operations in reverse order?", String.raw`Think of putting on socks, then shoes: to undo, you take off the shoes first. In \(3x-5\), the \(\times3\) was done first and the \(-5\) last, so the \(-5\) is undone first.`],
      ["Why must I do the same thing to both sides?", "The equals sign says the two sides balance. If you add 5 to only one side, the scale tips and the new equation has a different solution."],
      [String.raw`How do I deal with \(\tfrac23x\)?`, String.raw`Multiply both sides by the reciprocal \(\tfrac32\). That turns \(\tfrac23x\) into \(1x\) in one step — the same as dividing by \(\tfrac23\).`],
      ["Is it enough to check my answer in my last line?", "No. Check in the original equation. If you made a mistake in an early step, every later line inherits it, and a check there will look fine."],
      ["When is a graph useful if algebra gives the exact answer?", "A graph shows the whole relationship at once, gives a quick estimate, and catches impossible answers (for example, a negative time). Use it to check the algebra."],
    ],
    summary: [
      "An equation is a balance: do the same operation to both sides.",
      "Undo operations in reverse order: first + and −, then × and ÷ (use the reciprocal for a fraction coefficient).",
      "Define the variable, write the equation, solve, verify in the original, answer in words with units.",
      "Solving an equation from a linear relation is reading across to the line and down on its graph.",
    ],
    next: "2.5 solves multi-step equations: brackets, variables on both sides, and fractions.",
  }),
];
