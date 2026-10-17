// MTH1W 2.7 — Chapter 2 Review (NEW lesson, placed after 2.6)
import { intro, section, keyIdea, examples, practice, wrapUp, table, q, num, expr, choice } from "./lib.mjs";

export const TITLE = "2.7 Chapter 2 Review";
export const NEW = { id: "2b5e7c1a-0a27-4d1e-9c27-c2a9f0000207", position: 17 };

const MAP = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 640 230" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Chapter 2 concept map">
<defs><marker id="c2m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<g font-family="Arial" font-size="13" font-weight="700" text-anchor="middle">
<rect x="20" y="20" width="170" height="44" rx="10" fill="#ede9fe" stroke="#6d28d9"/><text x="105" y="47" fill="#6d28d9">2.1 Write expressions</text>
<rect x="235" y="20" width="170" height="44" rx="10" fill="#dbeafe" stroke="#1e40af"/><text x="320" y="47" fill="#1e40af">2.2 Add / subtract</text>
<rect x="450" y="20" width="170" height="44" rx="10" fill="#dcfce7" stroke="#15803d"/><text x="535" y="47" fill="#15803d">2.3 Expand / factor</text>
<rect x="20" y="160" width="170" height="44" rx="10" fill="#fef3c7" stroke="#b45309"/><text x="105" y="187" fill="#b45309">2.4 Solve equations</text>
<rect x="235" y="160" width="170" height="44" rx="10" fill="#fee2e2" stroke="#be123c"/><text x="320" y="187" fill="#be123c">2.5 Multi-step</text>
<rect x="450" y="160" width="170" height="44" rx="10" fill="#e0f2fe" stroke="#0369a1"/><text x="535" y="187" fill="#0369a1">2.6 Rearrange formulas</text>
</g>
<g stroke="#475569" stroke-width="1.8" fill="none" marker-end="url(#c2m)">
<path d="M190,42 L233,42"/><path d="M405,42 L448,42"/><path d="M105,64 L105,158"/><path d="M535,64 L330,158"/><path d="M190,182 L233,182"/><path d="M405,182 L448,182"/>
</g>
<g font-family="Arial" font-size="11" fill="#475569"><text x="112" y="112" text-anchor="start">equation = expression = expression</text><text x="452" y="104" text-anchor="middle">simplify each side first</text><text x="419" y="174" text-anchor="middle">same moves</text></g>
</svg><div style="font-size:13px;color:#64748b;">Expressions (top row) are the building blocks; equations (bottom row) set two of them equal.</div></div>`;

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 2 Review — Algebra",
    overview: String.raw`This page pulls the chapter together before the chapter test: the key idea of every lesson on one screen, how the lessons connect, questions where you must choose the method, mixed multi-step examples at chapter-test level, and a readiness checklist. Do it after 2.1–2.6, and go back to any lesson where you get stuck.`,
    goals: [
      "recall the key idea, a typical example and the most common mistake of each lesson;",
      "tell expressions (simplify) from equations (solve) and choose the right method;",
      "solve multi-step problems that combine patterns, polynomials, equations and formulas;",
      "check your readiness for the chapter test with the self-assessment list.",
    ],
    curriculum: "C1.1–C1.5 (whole chapter)",
    prior: [
      [String.raw`Simplify \(3x-(x-4)\).`, String.raw`\(2x+4\).`],
      [String.raw`Solve \(3x-(x-4)=10\).`, String.raw`\(2x+4=10\), so \(x=3\).`],
      [String.raw`What is the difference between the two questions above?`, String.raw`The first is an expression (no \(=\)): simplify it. The second is an equation: find \(x\).`],
    ],
    words: [
      ["Like terms", "same variables, same exponents", "\\(4ab^2\\), \\(-ab^2\\)"],
      ["Distributive property", "\\(a(b+c)=ab+ac\\)", "\\(-2(x-5)=-2x+10\\)"],
      ["Inverse operations", "undo each other", "\\(\\times3\\leftrightarrow\\div3\\)"],
      ["LCD", "clears fractions in an equation", "\\(\\tfrac x2+\\tfrac x3=5\\to3x+2x=30\\)"],
      ["Subject of a formula", "the isolated variable", "\\(t\\) in \\(t=\\tfrac dv\\)"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Typical example", "Watch out"], [
    ["2.1 Expressions", "words → symbols; substitute in brackets; pattern rule = (difference)\\(n\\) + start", "\\(5,9,13,\\dots\\to4n+1\\)", "“\\(3\\) less than \\(x\\)” is \\(x-3\\)"],
    ["2.2 Equivalent expressions", "collect like terms; subtract = add the opposite", "\\((x^2-2x)-(3x^2+x)=-2x^2-3x\\)", "\\(x^2\\) and \\(x\\) are not like terms"],
    ["2.3 Simplifying", "distribute to every term; add exponents when multiplying; factor = reverse", "\\(-3x(x^2-4)=-3x^3+12x\\)", "\\(4(x+3)\\neq4x+3\\)"],
    ["2.4 Solving equations", "undo operations in reverse order on both sides", "\\(\\tfrac{x}{3}-4=2\\to x=18\\)", "verify in the original equation"],
    ["2.5 Multi-step", "expand, clear fractions, collect x-terms, then constants", "\\(2(x-1)=x+5\\to x=7\\)", "multiply <em>every</em> term by the LCD"],
    ["2.6 Formulas", "isolate any variable with the same moves", "\\(A=\\tfrac12bh\\to h=\\tfrac{2A}{b}\\)", "divide the whole side"],
  ])),

  section("📌 How the lessons connect", String.raw`${MAP}
  ${keyIdea(String.raw`Most chapter-2 test errors are <strong>sign errors when a negative multiplies a bracket</strong> and <strong>not multiplying every term</strong> (by the outside factor or by the LCD). When an answer fails its check, look there first.`)}`),

  section("📌 Which method is this?", String.raw`<p>Test questions do not say which lesson they come from. Choose the method before you calculate.</p>`),

  practice([
    q("strategy", String.raw`\(4(x-2)-3x\) — what should you do?`, choice(["simplify it (it is an expression)", "solve for x", "rearrange for x", "substitute x = 0"], 0),
      "There is no equals sign.", [String.raw`It is an expression: \(4x-8-3x=x-8\).`], String.raw`simplify: \(x-8\)`),
    q("strategy", String.raw`To solve \(\tfrac{x}{4}+\tfrac{x}{6}=5\), the best first step is to…`, choice(["multiply every term by 12", "add the denominators", "multiply only the fractions by 12", "divide both sides by 10"], 0),
      "Clear the fractions using the LCD.", [String.raw`\(3x+2x=60\), so \(x=12\).`], String.raw`multiply every term by \(12\)`),
    q("strategy", String.raw`In \(5x+2=2x-7\), which first step keeps the \(x\)-coefficient positive?`, choice(["subtract 2x from both sides", "subtract 5x from both sides", "divide both sides by 5", "add 7 to the left side only"], 0),
      "Remove the smaller x-term.", [String.raw`\(3x+2=-7\Rightarrow3x=-9\Rightarrow x=-3\).`], String.raw`subtract \(2x\) (then \(x=-3\))`),
    q("strategy", String.raw`Which tells you \((x+3)^2\) and \(x^2+9\) are NOT equivalent?`, choice(["at x = 1 they give 16 and 10", "at x = 0 they give 9 and 9", "both have an x² term", "both are polynomials"], 0),
      "One counter-example is enough.", [String.raw`At \(x=1\): \(16\neq10\).`], "a counter-example at x = 1"),
    q("strategy", String.raw`A spreadsheet must compute the width \(w\) of many rectangles from \(A\) and \(l\). What should you do with \(A=lw\)?`, choice(["rearrange once: w = A/l", "solve a new equation for every row", "expand A = lw", "factor A"], 0),
      "Rearrange once, substitute many times.", [String.raw`\(w=\tfrac{A}{l}\).`], String.raw`rearrange: \(w=\tfrac{A}{l}\)`),
  ]),

  examples([
    ["A pattern meets an equation", String.raw`Figure \(n\) of a pattern has \(5n-3\) squares. (a) How many squares are in Figure \(18\)? (b) Which figure has \(122\) squares?`,
      [String.raw`(a) \(5(18)-3=87\).`, String.raw`(b) \(5n-3=122\), so \(5n=125\) and \(n=25\).`, String.raw`Check: \(5(25)-3=122\) ✓`],
      String.raw`(a) \(87\); (b) Figure \(25\)`],
    ["Simplify, then evaluate", String.raw`Simplify \(2x(3x-1)-(x^2-4x+5)\), then evaluate at \(x=-2\). Check with the original.`,
      [String.raw`Expand: \(6x^2-2x-x^2+4x-5\).`, String.raw`Collect: \(5x^2+2x-5\).`, String.raw`At \(x=-2\): \(5(4)-4-5=11\).`, String.raw`Original at \(x=-2\): \(2(-2)(-7)-(4+8+5)=28-17=11\) ✓`],
      String.raw`\(5x^2+2x-5\); value \(11\)`],
    ["Brackets on both sides", String.raw`Solve \(2(3x-4)-(x+1)=3(x-5)\).`,
      [String.raw`Expand: \(6x-8-x-1=3x-15\).`, String.raw`Simplify: \(5x-9=3x-15\).`, String.raw`\(2x=-6\), so \(x=-3\).`, String.raw`Verify: \(2(-13)-(-2)=-24\) and \(3(-8)=-24\) ✓`],
      String.raw`\(x=-3\)`],
    ["Fractions in a word problem", String.raw`One-third of a number, increased by \(4\), equals three-quarters of the number decreased by \(1\). Find the number.`,
      [String.raw`\(\tfrac{n}{3}+4=\tfrac{3n}{4}-1\).`, String.raw`Multiply every term by \(12\): \(4n+48=9n-12\).`, String.raw`\(60=5n\), so \(n=12\).`, String.raw`Check: \(4+4=8\) and \(9-1=8\) ✓`],
      String.raw`\(12\)`],
    ["Rearrange, then use", String.raw`An isosceles triangle has two equal sides \(s\) and a base \(b\): \(P=2s+b\). Solve for \(s\), then find \(s\) when \(P=50\) cm and \(b=14\) cm.`,
      [String.raw`\(P-b=2s\), so \(s=\dfrac{P-b}{2}\).`, String.raw`\(s=\dfrac{50-14}{2}=18\) cm.`, String.raw`Check: \(2(18)+14=50\) ✓`],
      String.raw`\(s=\tfrac{P-b}{2}\); \(18\) cm`],
  ]),

  section("📌 Mixed review", String.raw`<p>Each question uses at least two lessons. Simplify or solve, then check by substituting.</p>`),

  practice([
    q("subtract polynomials", String.raw`Simplify \((4m^2-3m+2)-(m^2+5m-7)\).`, expr("3m^2-8m+9"),
      "Change every sign in the second bracket.", [String.raw`\(4m^2-3m+2-m^2-5m+7\).`, String.raw`\(3m^2-8m+9\).`], String.raw`\(3m^2-8m+9\)`),
    q("expand and simplify", String.raw`Simplify \(-2a(a-3)+4(a^2-a)\).`, expr("2a^2+2a"),
      "Expand both brackets, then collect.", [String.raw`\(-2a^2+6a+4a^2-4a\).`, String.raw`\(2a^2+2a\).`], String.raw`\(2a^2+2a\)`),
    q("multi-step", String.raw`Solve \(4(2y-1)=3y+21\).`, num(5),
      "Expand, then collect the y-terms.", [String.raw`\(8y-4=3y+21\).`, String.raw`\(5y=25\), so \(y=5\).`], String.raw`\(y=5\)`),
    q("fractions", String.raw`Solve \(\dfrac{n-3}{4}=\dfrac{n+1}{6}\).`, num(11),
      String.raw`Multiply both sides by \(12\); bracket the numerators.`, [String.raw`\(3(n-3)=2(n+1)\).`, String.raw`\(3n-9=2n+2\), so \(n=11\).`, String.raw`Check: \(\tfrac84=2\) and \(\tfrac{12}{6}=2\) ✓`], String.raw`\(n=11\)`),
    q("formula", String.raw`Solve \(V=lwh\) for \(h\).`, expr("V/(lw)", false),
      String.raw`\(h\) is multiplied by \(l\) and by \(w\).`, [String.raw`Divide both sides by \(lw\).`], String.raw`\(h=\dfrac{V}{lw}\)`, { placeholder: "h = …" }),
  ]),

  section("📌 Am I ready for the test?", String.raw`<p>Tick each statement only if you can do it <em>without notes</em>. The lesson number tells you where to go back.</p>
  <ul style="list-style:none;padding-left:0;">
    ${[
      ["2.1", "I can describe how algebraic notation developed, translate words into expressions, evaluate them, and find the rule of a growing pattern."],
      ["2.2", "I can name and find the degree of a polynomial, and add and subtract polynomials."],
      ["2.3", "I can multiply monomials, expand a monomial times a polynomial, simplify several brackets, and factor out the GCF."],
      ["2.4", "I can solve one- and two-step equations, verify the solution, and solve from a linear relation or graph."],
      ["2.5", "I can solve equations with brackets, variables on both sides and fractions, and recognise no solution or every number."],
      ["2.6", "I can rearrange a formula for any variable and use it."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  wrapUp({
    qas: [
      ["How should I study for the chapter test?", "Do the mixed review without notes, mark the mistakes, and redo the practice in those lessons. Then try the hardest worksheet problems (Level 3) from your two weakest lessons. Mixed practice beats re-reading."],
      ["What are the most common mistakes in this chapter?", String.raw`Not distributing to every term; losing the sign when a negative multiplies a bracket; combining unlike terms (\(x^2+x=x^3\)); multiplying only some terms by the LCD; and dividing only one term when rearranging.`],
      ["How do I know whether to simplify or solve?", String.raw`Look for an equals sign. An expression (no \(=\)) can only be simplified, expanded, factored or evaluated. An equation can be solved.`],
      ["How can I check my work without the answer key?", "Substitute: a simplified expression must give the same value as the original for a test number; a solution must make both sides of the original equation equal."],
      ["I find word problems hard. What helps?", "Write “Let x be …” first, then translate one sentence at a time. Draw a diagram or a table (now / later, rate × time). After solving, check that the answer makes sense in the story."],
    ],
    summary: [
      "Expressions: write, evaluate, collect like terms, distribute, factor.",
      "Equations: expand, clear fractions, collect, isolate — and verify in the original.",
      "Formulas: the same inverse operations, with letters.",
    ],
    next: "Write the Chapter 2 test. Chapter 3 uses these algebra skills to write and read code.",
  }),
];
