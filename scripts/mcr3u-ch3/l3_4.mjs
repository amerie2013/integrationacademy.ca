// MCR3U 3.4 — The Zeros and the Discriminant: counting zeros from b² − 4ac, from vertex form, rational vs irrational,
// parameters that change the number of zeros, proofs that a family always has roots
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.4 The Zeros and the Discriminant";
export const ID = "5c3e0001-0001-4001-8001-000000000304";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔍",
    title: "The Zeros and the Discriminant",
    overview: S`Before solving, you can predict how many zeros a quadratic has. The discriminant \(D=b^2-4ac\) — the expression under the root in the quadratic formula — decides: two zeros, one, or none. In this lesson you will count zeros from the discriminant and from vertex form, tell rational from irrational roots, and find the parameter values that change the number of zeros.`,
    goals: [
      "calculate the discriminant and state the number of zeros;",
      "count zeros from vertex form using the vertex and the direction of opening;",
      "decide whether the roots are rational or irrational;",
      "find parameter values that give two, one or no zeros;",
      "prove that every member of a family has real roots.",
    ],
    curriculum: "A2.1 (determine the number of zeros of a quadratic function, using a variety of strategies — inspecting graphs, factoring, calculating the discriminant)",
    prior: [
      [S`Evaluate \(b^2-4ac\) for \(2x^2-3x-1\).`, S`\(9+8=17\).`],
      [S`Is \(\sqrt{-16}\) a real number?`, S`No.`],
      [S`Solve \(k^2>25\).`, S`\(k<-5\) or \(k>5\).`],
    ],
    words: [
      ["Discriminant", "\\(D=b^2-4ac\\)", ""],
      ["Double root", "one repeated root when \\(D=0\\)", "\\((x-3)^2=0\\)"],
      ["Rational roots", "roots that are fractions; \\(D\\) a perfect square", "\\(D=49\\)"],
      ["Parameter", "a letter that stands for a fixed but unknown number", "\\(k\\) in \\(x^2+kx+9\\)"],
    ],
  }),

  section("📌 What the discriminant tells you", S`
  ${table(["D = b² − 4ac", "Number of zeros", "Graph"], [["\\(D>0\\)", "two", "crosses the x-axis twice"], ["\\(D=0\\)", "one (double)", "vertex on the x-axis"], ["\\(D<0\\)", "none", "misses the x-axis"]])}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x - 2, color: "green" }, { f: (x) => x * x - 2 * x + 1, color: "amber" }, { f: (x) => x * x - 2 * x + 4, color: "red" }], step: { x: 1, y: 1 } }, "same axis, different c: D = 12 (green), 0 (amber), −12 (red)")}
  ${keyIdea(S`In vertex form \(a(x-h)^2+k\) you can count without the discriminant: if \(a\) and \(k\) have opposite signs there are two zeros; if \(k=0\), one; if they have the same sign, none.`)}`),

  section("📌 Explore", S`<p>The parameter \(k\) changes the middle coefficient of \(y=x^2+kx+16\). Find the values of \(k\) where the number of zeros changes.</p>`),

  widget("discriminantK", { init: [1, 16] }),

  section("📌 Watch out", watchOut([
    "Write the equation as ax² + bx + c = 0 before reading a, b and c.",
    "D < 0 means no REAL zeros; the formula would need √(negative).",
    "With a parameter, solve an inequality in k: D > 0, D = 0 or D < 0.",
    "If a can be 0, the equation is not quadratic — exclude it.",
  ])),

  examples([
    ["No zeros", S`How many zeros does \(f(x)=2x^2-3x+5\) have?`,
      [S`\(D=(-3)^2-4(2)(5)=9-40=-31<0\).`],
      "none"],
    ["From vertex form", S`How many zeros do \(y=-3(x+1)^2+4\) and \(y=2(x-3)^2+1\) have?`,
      [S`First: opens down from \((-1,4)\), above the axis: two zeros.`, S`Second: opens up from \((3,1)\), above the axis: none.`],
      "two and none"],
    ["A double root", S`Solve \(4x^2-12x+9=0\) using the discriminant first.`,
      [S`\(D=144-144=0\): one root.`, S`\((2x-3)^2=0\Rightarrow x=1.5\).`],
      S`one zero, \(x=1.5\)`],
    ["A parameter", S`For which \(k\) does \(x^2+kx+16=0\) have two real roots?`,
      [S`\(D=k^2-64>0\Rightarrow k^2>64\).`],
      S`\(k<-8\) or \(k>8\)`],
    ["A changing leading coefficient", S`For which \(k\) does \(kx^2-4x+1=0\) have two, one or no real roots?`,
      [S`\(D=16-4k\).`, S`Two: \(16-4k>0\Rightarrow k<4\) (\(k\ne0\)). One: \(k=4\). None: \(k>4\).`, S`(At \(k=0\) the equation is linear with one root.)`],
      S`two for \(k<4,\ k\ne0\); one for \(k=4\); none for \(k>4\)`],
  ]),

  practice([
    q("discriminant", S`Find the discriminant of \(3x^2+4x-2=0\).`, num(40),
      "b² − 4ac with c = −2.", [S`\(16-4(3)(-2)=16+24\).`], S`\(40\)`),
    q("count", S`How many real zeros does \(5x^2-2x+1\) have?`, num(0),
      "Compute D.", [S`\(4-20=-16<0\).`], S`\(0\)`),
    q("one zero", S`For which \(k\) does \(x^2-6x+k\) have exactly one zero?`, num(9),
      "D = 0.", [S`\(36-4k=0\).`], S`\(k=9\)`),
    q("vertex form", S`How many zeros does \(y=-2(x-4)^2-3\) have?`, num(0),
      "Opens down from a vertex below the axis.", [S`a and k are both negative.`], S`\(0\)`),
    q("type of roots", S`The roots of \(x^2-5x+6=0\) are…`, choice(["rational", "irrational", "not real", "equal"], 0),
      "Is D a perfect square?", [S`\(D=25-24=1\).`], "rational"),
  ]),

  ...hard([
    ["A parameter in two places", S`For which values of \(k\) does \(kx^2+6x+k=0\) have two distinct real roots?`,
      [S`\(D=36-4k^2>0\Rightarrow k^2<9\Rightarrow-3<k<3\).`, S`\(k=0\) makes it linear, so exclude it.`],
      S`\(-3<k<3\), \(k\ne0\)`],
    ["Always two roots", S`Show that \(x^2+(m-2)x-m=0\) has two real roots for every value of \(m\).`,
      [S`\(D=(m-2)^2-4(1)(-m)=m^2-4m+4+4m=m^2+4\).`, S`\(m^2\ge0\), so \(D\ge4>0\) for every \(m\).`],
      "D = m² + 4 is always positive",
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 16 }, curves: [{ f: (m) => m * m + 4, color: "violet" }], points: [{ x: 0, y: 4, label: "(0, 4)" }], step: { x: 1, y: 2 }, xlabel: "m", ylabel: "D" })],
  ], [
    q("hard", S`What is the smallest integer \(k\) for which \(2x^2-5x+k=0\) has no real roots?`, num(4),
      "25 − 8k < 0.", [S`\(k>3.125\).`], S`\(4\)`),
    q("hard", S`For \(k>0\), \(y=x^2+2kx+9\) touches the x-axis once. Find \(k\).`, num(3),
      "D = 0.", [S`\(4k^2-36=0\).`], S`\(3\)`),
    q("hard", S`For how many integers \(k\) does \(x^2+kx+7=0\) have no real roots?`, num(11),
      "k² < 28.", [S`\(|k|\le5\): \(k=-5,\dots,5\).`], S`\(11\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does D decide the number of roots?", "It sits under the ± square root: positive gives two values, zero gives one, negative gives none."],
      ["How can I tell rational roots?", "If D is a perfect square (and a, b, c are integers), the roots are rational and the quadratic factors."],
      ["Can I count zeros without D?", "Yes, from vertex form: compare the sign of a with the sign of k."],
      ["What does D tell me about a graph?", "Whether the parabola crosses, touches or misses the x-axis."],
      ["How do parameters change the zeros?", "They move or stretch the graph; solving D = 0 finds the values where it just touches."],
    ],
    summary: [
      "D = b² − 4ac: > 0 two, = 0 one, < 0 none.",
      "Perfect-square D → rational roots.",
      "Vertex form: opposite signs of a and k → two zeros.",
      "Parameters: solve D > 0, D = 0 or D < 0.",
    ],
    next: "3.5 builds families of parabolas from their zeros.",
  }),
];
