// IB AA SL 3.6 — The Quadratic Formula and the Discriminant: the formula, Δ and the nature of roots, unknown coefficients, tangents, inequalities
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.6 The Quadratic Formula and the Discriminant";
export const ID = "29f58f10-eeeb-415c-8594-b526afb90339";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "The Quadratic Formula and the Discriminant",
    overview: S`Completing the square on \(ax^2+bx+c=0\) in general gives the quadratic formula, which solves every quadratic equation. The expression under its square root — the discriminant — tells you how many real roots there are before you solve. In this lesson you will use the formula, use the discriminant to find unknown coefficients and tangent lines, and solve quadratic inequalities from a graph.`,
    goals: [
      "solve \\(ax^2+bx+c=0\\) with \\(x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\);",
      "use \\(\\Delta=b^2-4ac\\) to decide whether there are two, one or no real roots;",
      "find unknown coefficients that give equal, distinct or no real roots;",
      "use the discriminant to decide whether a line and a parabola meet, touch or miss;",
      "solve quadratic inequalities using the graph.",
    ],
    curriculum: "SL 2.7 (the quadratic formula; the discriminant Δ = b² − 4ac and the nature of the roots: two distinct real roots, two equal real roots, no real roots; solution of quadratic inequalities)",
    prior: [
      [S`Evaluate \(b^2-4ac\) for \(a=2\), \(b=-3\), \(c=-4\).`, S`\(9+32=41\).`],
      [S`Simplify \(\sqrt{24}\).`, S`\(2\sqrt6\).`],
      [S`Solve \((x+1)^2=3\).`, S`\(x=-1\pm\sqrt3\).`],
    ],
    words: [
      ["Quadratic formula", "\\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)", "solves any quadratic"],
      ["Discriminant \\(\\Delta\\)", "\\(b^2-4ac\\)", "\\(\\Delta=41\\)"],
      ["Distinct real roots", "\\(\\Delta>0\\): the graph crosses the x-axis twice", "\\(x^2-1=0\\)"],
      ["Equal (repeated) roots", "\\(\\Delta=0\\): the vertex touches the x-axis", "\\((x-3)^2=0\\)"],
      ["Tangent", "a line touching a curve at exactly one point", "\\(\\Delta=0\\)"],
    ],
  }),

  section("📌 The formula and the discriminant", S`
  <p style="text-align:center">\(ax^2+bx+c=0\iff x=\dfrac{-b\pm\sqrt{\Delta}}{2a}\), where \(\Delta=b^2-4ac\).</p>
  ${table(["Δ", "Roots", "Graph of y = ax² + bx + c"], [
    [S`\(\Delta>0\)`, "two distinct real roots", "crosses the x-axis twice"],
    [S`\(\Delta=0\)`, "two equal real roots (one repeated)", "touches the x-axis at the vertex"],
    [S`\(\Delta<0\)`, "no real roots", "does not meet the x-axis"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "green" }, { f: (x) => x * x - 2 * x + 1, color: "amber" }, { f: (x) => x * x - 2 * x + 4, color: "red" }] }, "Δ > 0 (green, two zeros), Δ = 0 (amber, one), Δ < 0 (red, none)")}
  ${keyIdea(S`Δ is a perfect square ⇒ rational roots (the quadratic factorises). Δ positive but not a square ⇒ irrational roots in surd form.`)}`),

  section("📌 Lines, parabolas and inequalities", S`
  <p>Setting a line equal to a parabola gives a quadratic. Its discriminant decides whether the line cuts the parabola (Δ > 0), is a tangent (Δ = 0) or misses it (Δ < 0). For an inequality such as \(x^2-x-6<0\), find the roots and read the answer from the graph.</p>
  ${plane({ view: { xmin: -4, xmax: 5, ymin: -8, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - x - 6, color: "violet" }, { f: (x) => x * x - x - 6, a: -2, b: 3, color: "green" }], points: [P(-2, 0, "(−2, 0)"), P(3, 0, "(3, 0)")] }, "x² − x − 6 < 0 where the graph is below the axis (green): −2 < x < 3")}
  ${watchOut([
    "Bring everything to one side first so the equation is = 0.",
    "In the formula the whole of −b ± √Δ is divided by 2a.",
    "With b negative, −b is positive: for b = −3, −b = 3.",
    "'Real roots' (Δ ≥ 0) includes equal roots; 'distinct' means Δ > 0.",
  ])}`),

  section("📌 Explore", S`<p>Move \(a\), \(b\) and \(c\) and watch Δ. The readout applies the formula; notice when the roots become equal and then disappear.</p>`),

  widget("ibDiscriminant", { init: [1, -2, -3] }),

  examples([
    ["Level 1 · The formula", S`Solve \(2x^2-3x-4=0\), giving exact and 3 s.f. answers.`,
      [S`\(\Delta=9+32=41\).`, S`\(x=\dfrac{3\pm\sqrt{41}}{4}\).`, S`\(x\approx2.35\) or \(x\approx-0.851\).`],
      S`\(x=\frac{3\pm\sqrt{41}}{4}\)`],
    ["Level 1 · Nature of roots", S`How many real roots does \(x^2+4x+7=0\) have?`,
      [S`\(\Delta=16-28=-12<0\).`],
      "none",
      plane({ view: { xmin: -5, xmax: 2, ymin: -1, ymax: 9 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x + 4 * x + 7, color: "red" }], points: [P(-2, 3, "(−2, 3)", "amber")] }, "The vertex (−2, 3) is above the axis")],
    ["Level 2 · Equal roots", S`Find \(k\) so that \(x^2+kx+9=0\) has equal roots.`,
      [S`\(\Delta=k^2-36=0\).`, S`\(k=\pm6\): \((x+3)^2\) or \((x-3)^2\).`],
      S`\(k=\pm6\)`],
    ["Level 2 · Two distinct roots", S`For which \(k\) does \(kx^2+4x+1=0\) have two distinct real roots?`,
      [S`\(\Delta=16-4k>0\Rightarrow k<4\).`, S`Also \(k\ne0\), or the equation is not quadratic.`],
      S`\(k<4\), \(k\ne0\)`],
    ["Level 3 · A tangent line", S`Find \(k\) so that \(y=2x+k\) is a tangent to \(y=x^2-4x+10\), and find the point of contact.`,
      [S`\(x^2-4x+10=2x+k\Rightarrow x^2-6x+(10-k)=0\).`, S`Tangent: \(\Delta=36-4(10-k)=0\Rightarrow k=1\).`, S`Then \(x^2-6x+9=0\Rightarrow x=3\), \(y=7\).`],
      S`\(k=1\); contact \((3,7)\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 14 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 4 * x + 10, color: "violet" }, { f: (x) => 2 * x + 1, color: "blue" }], points: [P(3, 7, "(3, 7)", "red")] })],
  ]),

  practice([
    q("Level 1 · discriminant", S`Find the discriminant of \(x^2-5x+6\).`, num(1),
      "b² − 4ac.", [S`\(25-24\).`], S`\(1\)`),
    q("Level 1 · number of roots", S`How many real roots does \(x^2+2x+5=0\) have?`, num(0),
      "Find Δ.", [S`\(\Delta=4-20<0\).`], S`\(0\)`),
    q("Level 2 · formula", S`Solve \(2x^2-4x-1=0\) and give the larger root (3 d.p.).`, num(2.225, 0.001),
      "x = (4 ± √24)/4.", [S`\(\frac{4+\sqrt{24}}{4}\approx2.225\).`], S`\(2.225\)`),
    q("Level 2 · equal roots", S`Find \(k\) so that \(x^2-8x+k=0\) has equal roots.`, num(16),
      "Δ = 0.", [S`\(64-4k=0\).`], S`\(16\)`),
    q("Level 2 · meaning", S`\(\Delta=0\) means the equation has:`, choice(["one repeated real root", "two distinct real roots", "no real roots", "infinitely many roots"], 0),
      "Think of the graph touching the axis.", ["The vertex lies on the x-axis."], "one repeated root"),
  ]),

  ...hard([
    ["A quadratic inequality", S`Solve \(x^2-x-6<0\) and \(x^2-x-6\ge0\).`,
      [S`Roots: \((x-3)(x+2)=0\Rightarrow x=-2, 3\).`, S`The parabola opens up, so it is below the axis between the roots: \(-2<x<3\).`, S`It is on or above the axis outside: \(x\le-2\) or \(x\ge3\).`],
      S`\(-2<x<3\); \(x\le-2\) or \(x\ge3\)`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -8, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - x - 6, a: -4, b: -2, color: "blue" }, { f: (x) => x * x - x - 6, a: -2, b: 3, color: "green" }, { f: (x) => x * x - x - 6, a: 3, b: 5, color: "blue" }], points: [P(-2, 0, "(−2, 0)"), P(3, 0, "(3, 0)")] }, "Green: below the axis; blue: on or above")],
    ["No real roots", S`For which \(k\) does \(x^2+(k+1)x+4=0\) have no real roots?`,
      [S`\(\Delta=(k+1)^2-16<0\).`, S`\((k+1)^2<16\Rightarrow-4<k+1<4\).`, S`\(-5<k<3\).`],
      S`\(-5<k<3\)`],
  ], [
    q("Level 3 · largest integer", S`Find the largest integer \(k\) for which \(x^2-4x+k=0\) has two distinct real roots.`, num(3),
      "16 − 4k > 0.", [S`\(k<4\).`], S`\(3\)`),
    q("Level 3 · tangent from the origin", S`\(y=mx\) (with \(m>0\)) is a tangent to \(y=x^2+4\). Find \(m\).`, num(4),
      "x² − mx + 4 = 0 has Δ = 0.", [S`\(m^2=16\).`], S`\(4\)`),
    q("Level 3 · sum of roots", S`Find the sum of the roots of \(3x^2-7x+2=0\) (3 d.p.).`, num(2.333, 0.001),
      "Solve, or use −b/a.", [S`Roots \(2\) and \(\frac13\).`], S`\(2.333\)`),
  ]),

  wrapUp({
    qas: [
      ["Where does the formula come from?", "From completing the square on ax² + bx + c = 0 with general a, b, c."],
      ["Do I always need the formula?", "No — factorise when it is easy. The formula is the method that always works."],
      ["What does 'real roots' mean if Δ = 0?", "Two equal real roots: the same value counted twice."],
      ["How do I handle a parameter k?", "Write Δ in terms of k and solve the equation or inequality the question describes."],
      ["How do I solve a quadratic inequality?", "Find the roots, sketch the parabola, and read where it is above or below the x-axis."],
    ],
    summary: [
      "x = (−b ± √(b² − 4ac))/(2a).",
      "Δ > 0 two roots, Δ = 0 one repeated root, Δ < 0 none.",
      "Line and parabola: Δ of the combined quadratic decides cut, touch or miss.",
      "Inequalities: roots + sketch.",
    ],
    next: "3.7 applies quadratics to projectiles, areas and other optimisation problems.",
  }),
];
