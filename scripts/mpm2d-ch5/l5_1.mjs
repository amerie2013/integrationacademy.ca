// MPM2D 5.1 — Solving Quadratic Equations by Factoring (self-study format): zero product property, standard
// form first, common factors, a ≠ 1, never dividing by x, and an area problem with a rejected root
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, roots } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "5.1 Solving Quadratic Equations by Factoring";

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Solving Quadratic Equations by Factoring",
    overview: String.raw`A quadratic equation can be written as \(ax^2+bx+c=0\). Its solutions are called <strong>roots</strong>, and they are exactly the zeros (x-intercepts) of the parabola \(y=ax^2+bx+c\) that you studied in Chapter 4. In this lesson you will rearrange an equation so one side is 0, factor using Chapter 3, and use the zero product property to find the roots — then check them and decide which roots make sense in a problem.`,
    goals: [
      "explain the zero product property and why one side must be 0;",
      "rearrange a quadratic equation into standard form before factoring;",
      "solve equations that need a common factor, a ≠ 1, or a difference of squares;",
      "connect the roots of an equation to the zeros of its graph;",
      "solve a problem and reject a root that does not fit the situation.",
    ],
    curriculum: "QR3 (solve quadratic equations by factoring; relate the roots of ax² + bx + c = 0 to the x-intercepts of y = ax² + bx + c); QR4 (solve problems)",
    prior: [
      [String.raw`Factor \(x^2+x-12\).`, String.raw`\((x+4)(x-3)\).`],
      [String.raw`Factor \(3x^2-10x-8\).`, String.raw`\((3x+2)(x-4)\).`],
      [String.raw`Zeros of \(y=(x+4)(x-3)\)?`, String.raw`\(-4\) and \(3\).`],
    ],
    words: [
      ["Quadratic equation", "an equation that can be written \\(ax^2+bx+c=0\\), \\(a\\ne0\\)", "\\(x^2-5x+6=0\\)"],
      ["Root", "a solution of the equation", "\\(x=2\\), \\(x=3\\)"],
      ["Zero product property", "if \\(pq=0\\), then \\(p=0\\) or \\(q=0\\)", ""],
      ["Double root", "both factors give the same root", "\\((x-4)^2=0\\)"],
    ],
  }),

  section("📌 Roots and zeros", String.raw`
  ${plane({ view: { xmin: -5, xmax: 6, ymin: -14, ymax: 8 }, curves: [{ f: (x) => x * x - x - 12, color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)", color: "red" }, { x: 4, y: 0, label: "(4, 0)", color: "red" }], step: { x: 1, y: 2 } }, "y = x² − x − 12 crosses the x-axis at −3 and 4, so x² − x − 12 = 0 has roots −3 and 4.")}
  ${keyIdea(String.raw`To solve by factoring: (1) rearrange so one side is \(0\); (2) factor fully; (3) set each factor equal to \(0\) and solve; (4) check by substituting. The roots of \(ax^2+bx+c=0\) are the x-intercepts of \(y=ax^2+bx+c\).`)}`),

  section("📌 Explore", String.raw`<p>Choose two roots and a common factor. Switch between an equation that is already \(=0\) and one given another way, and watch which step comes first.</p>`),

  widget("zeroProduct", { init: [1, -2, 5] }),

  section("📌 Why one side must be zero", String.raw`
  <p>The zero product property only works for 0: if \(pq=0\), one of the factors must be 0. But if \(pq=6\), the factors could be \(2\) and \(3\), or \(1\) and \(6\), or \(12\) and \(\tfrac12\) — nothing can be concluded. So always move every term to one side first.</p>
  ${watchOut([
    "Do not set factors equal to a number other than 0 — rearrange to = 0 first.",
    "Never divide both sides by x: you lose the root x = 0. Factor x out instead.",
    "(x + 6) = 0 gives x = −6, not 6.",
    "In (2x − 1) = 0, finish the step: x = 1/2.",
    "In a word problem, check each root: a length or a time cannot be negative.",
  ])}`),

  examples([
    ["A trinomial", String.raw`Solve \(x^2-x-20=0\).`,
      [String.raw`Two numbers with product \(-20\) and sum \(-1\): \(-5\) and \(4\).`, String.raw`\((x-5)(x+4)=0\).`, String.raw`\(x-5=0\) or \(x+4=0\).`, String.raw`Check \(x=5\): \(25-5-20=0\).`],
      String.raw`\(x=5\) or \(x=-4\)`,
      plane({ view: { xmin: -6, xmax: 7, ymin: -22, ymax: 10 }, curves: [{ f: (x) => x * x - x - 20, color: "violet" }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "red" }, { x: 5, y: 0, label: "(5, 0)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Rearrange first", String.raw`Solve \(x^2=3x+18\).`,
      [String.raw`Subtract \(3x\) and \(18\): \(x^2-3x-18=0\).`, String.raw`\((x-6)(x+3)=0\).`, String.raw`Check \(x=-3\): left \(9\), right \(-9+18=9\).`],
      String.raw`\(x=6\) or \(x=-3\)`],
    ["Leading coefficient not 1", String.raw`Solve \(2x^2-7x+3=0\).`,
      [String.raw`Product \(ac=6\), sum \(-7\): \(-6\) and \(-1\).`, String.raw`\(2x^2-6x-x+3=2x(x-3)-(x-3)=(2x-1)(x-3)\).`, String.raw`\(2x-1=0\Rightarrow x=\tfrac12\); \(x-3=0\Rightarrow x=3\).`],
      String.raw`\(x=\tfrac12\) or \(x=3\)`],
    ["Do not divide by x", String.raw`Solve \(5x^2=20x\).`,
      [String.raw`Dividing by \(x\) would lose a root. Instead: \(5x^2-20x=0\).`, String.raw`Common factor: \(5x(x-4)=0\).`, String.raw`\(5x=0\Rightarrow x=0\); \(x-4=0\Rightarrow x=4\).`],
      String.raw`\(x=0\) or \(x=4\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -24, ymax: 10 }, curves: [{ f: (x) => 5 * x * x - 20 * x, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 4, y: 0, label: "(4, 0)", color: "red" }], step: { x: 1, y: 4 } })],
    ["An area problem", String.raw`A rectangle is \(3\) cm longer than it is wide, and its area is \(40\) cm². Find its dimensions.`,
      [String.raw`Let the width be \(w\): \(w(w+3)=40\).`, String.raw`\(w^2+3w-40=0\Rightarrow(w+8)(w-5)=0\).`, String.raw`\(w=-8\) is impossible for a length, so \(w=5\).`, String.raw`Check: \(5\times8=40\).`],
      String.raw`\(5\) cm by \(8\) cm`],
  ]),

  practice([
    q("trinomial", String.raw`Solve \(x^2+2x-15=0\). Give both roots.`, roots(-5, 3),
      "Product −15, sum 2.", [String.raw`\((x+5)(x-3)=0\).`], String.raw`\(x=-5\) or \(x=3\)`),
    q("rearrange", String.raw`Solve \(x^2=7x-10\).`, roots(2, 5),
      "Move every term to the left first.", [String.raw`\(x^2-7x+10=0\).`, String.raw`\((x-2)(x-5)=0\).`], String.raw`\(x=2\) or \(x=5\)`),
    q("common factor", String.raw`Solve \(x^2+9x=0\).`, roots(0, -9),
      "Factor x out — don't divide by it.", [String.raw`\(x(x+9)=0\).`], String.raw`\(x=0\) or \(x=-9\)`),
    q("a ≠ 1", String.raw`Solve \(2x^2+5x-3=0\).`, roots(0.5, -3),
      "ac = −6; numbers 6 and −1.", [String.raw`\(2x^2+6x-x-3=(2x-1)(x+3)\).`, String.raw`\(2x-1=0\Rightarrow x=\tfrac12\).`], String.raw`\(x=\tfrac12\) or \(x=-3\)`),
    q("difference of squares", String.raw`Solve \(9x^2-16=0\).`, roots(4 / 3, -4 / 3),
      "a² − b² = (a − b)(a + b).", [String.raw`\((3x-4)(3x+4)=0\).`], String.raw`\(x=\pm\tfrac43\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between a root and a zero?", "A root solves the equation ax² + bx + c = 0; a zero is an x-value where y = ax² + bx + c equals 0. They are the same numbers, seen algebraically or on a graph."],
      ["Why must one side be 0?", "The zero product property says a product equal to 0 must have a factor equal to 0. A product equal to any other number tells you nothing about the factors."],
      ["Can a quadratic equation have one root?", "Yes. If it factors as a perfect square, like (x − 4)² = 0, both factors give x = 4: a double root, where the vertex touches the x-axis."],
      ["What if it doesn't factor?", "Then use completing the square (5.2) or the quadratic formula (5.3). Some quadratic equations have no real roots at all (5.4)."],
      ["How do I know which roots to keep in a problem?", "Check each one against the situation: lengths, areas and times after launch cannot be negative, and counts must be whole numbers."],
    ],
    summary: [
      "Rearrange to ax² + bx + c = 0, then factor fully.",
      "Set each factor to 0 (zero product property).",
      "Never divide by x — factor it out.",
      "Roots = x-intercepts; check and reject roots that don't fit.",
    ],
    next: "5.2 solves equations that do not factor, by completing the square.",
  }),
];
