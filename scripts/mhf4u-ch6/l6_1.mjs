// MHF4U 6.1 — The Exponential Function and Its Inverse (NEW): key features of y = b^x, the inverse by swapping
// coordinates and reflecting in y = x, the equation x = b^y, domain/range/asymptote swaps, and a first look at the name
// "logarithmic function" (studied in 6.2)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.1 The Exponential Function and Its Inverse";
export const ID = "6d4f0006-0001-4001-8001-000000000601";

const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };
export const blocks = () => [
  intro({
    icon: "🪞",
    title: "The Exponential Function and Its Inverse",
    overview: S`An exponential function \(y=b^x\) (with \(b>0\), \(b\ne1\)) passes every horizontal line test: each output comes from exactly one input. So its inverse is also a function. You get the inverse by swapping every \((x,y)\) to \((y,x)\), which reflects the graph in the line \(y=x\). The domain and range trade places, the horizontal asymptote \(y=0\) becomes the vertical asymptote \(x=0\), and the y-intercept \((0,1)\) becomes the x-intercept \((1,0)\). This new function is the logarithmic function, the subject of the rest of the chapter.`,
    goals: [
      "state the key features of \\(y=b^x\\) for \\(b>1\\) and \\(0\\lt b\\lt1\\);",
      "make a table of values for the inverse by swapping coordinates;",
      "graph the inverse by reflecting in \\(y=x\\);",
      "write the inverse as \\(x=b^y\\) and state its domain, range, intercept and asymptote;",
      "read values of the inverse from a graph.",
    ],
    curriculum: "A2.2 (recognize the relationship between an exponential function and its inverse, the logarithmic function, using a table of values and the reflection in y = x), A1.1 (log as the inverse of exponentiation — introduced)",
    prior: [
      [S`Evaluate \(2^{-3}\).`, S`\(\frac18\).`],
      [S`Inverse of \(f(x)=2x+6\)?`, S`Swap and solve: \(x=2y+6\Rightarrow f^{-1}(x)=\frac{x-6}2\).`],
      [S`Horizontal asymptote of \(y=3^x\)?`, S`\(y=0\).`],
    ],
    words: [
      ["Exponential function", "\\(y=b^x\\), \\(b>0\\), \\(b\\ne1\\)", "\\(y=3^x\\)"],
      ["Inverse", "undoes the function: swap x and y", "\\((2,9)\\to(9,2)\\)"],
      ["Line of reflection", "the line \\(y=x\\)", "points on it are invariant"],
      ["Logarithmic function", "the inverse of \\(y=b^x\\); written \\(y=\\log_b x\\) (6.2)", "inverse of \\(2^x\\)"],
    ],
  }),

  section("📌 Key features of y = bˣ", S`
  ${table(["Feature", "b > 1 (growth)", "0 < b < 1 (decay)"], [
    ["domain", "\\(\\{x\\in\\mathbb R\\}\\)", "\\(\\{x\\in\\mathbb R\\}\\)"],
    ["range", "\\(y>0\\)", "\\(y>0\\)"],
    ["y-intercept", "\\(1\\)", "\\(1\\)"],
    ["asymptote", "\\(y=0\\) (to the left)", "\\(y=0\\) (to the right)"],
    ["behaviour", "increasing", "decreasing"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: (x) => 0.5 ** x, color: "violet" }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "amber" }], step: { x: 1, y: 1 } }, "y = 2ˣ (blue) increases; y = (½)ˣ (violet) decreases. Both pass through (0, 1) and approach y = 0.")}
  ${keyIdea(S`Every exponential \(y=b^x\) is either always increasing or always decreasing, so no two inputs give the same output. That is exactly what a function needs for its inverse to be a function too.`)}`),

  section("📌 Explore the exponential", S`<p>Change the base \(b\). Notice that the y-intercept stays at 1 and the asymptote stays at \(y=0\) until you move \(k\). A base below 1 turns growth into decay.</p>`),

  widget("ibExpGraph", { init: [1, 2, 0, 0] }),

  section("📌 Building the inverse", S`
  <p>Start with a table for \(y=2^x\), then swap the columns. Plotting the swapped points gives the inverse, which is the mirror image of \(y=2^x\) in the line \(y=x\).</p>
  ${table(["\\(y=2^x\\): x", "y", "", "inverse: x", "y"], [
    ["\\(-2\\)", "\\(\\frac14\\)", "→", "\\(\\frac14\\)", "\\(-2\\)"],
    ["\\(-1\\)", "\\(\\frac12\\)", "→", "\\(\\frac12\\)", "\\(-1\\)"],
    ["\\(0\\)", "\\(1\\)", "→", "\\(1\\)", "\\(0\\)"],
    ["\\(1\\)", "\\(2\\)", "→", "\\(2\\)", "\\(1\\)"],
    ["\\(2\\)", "\\(4\\)", "→", "\\(4\\)", "\\(2\\)"],
    ["\\(3\\)", "\\(8\\)", "→", "\\(8\\)", "\\(3\\)"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, lines: [YX], curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: lg(2), a: 0.01, color: "violet" }], vlines: [], points: [{ x: 2, y: 4, label: "(2, 4)", color: "blue" }, { x: 4, y: 2, label: "(4, 2)", color: "violet" }, { x: 0, y: 1, color: "blue" }, { x: 1, y: 0, color: "violet" }], step: { x: 1, y: 1 } }, "y = 2ˣ (blue), its inverse (violet) and the mirror line y = x (dashed).")}
  ${table(["", "y = 2ˣ", "inverse x = 2ʸ"], [
    ["domain", "\\(x\\in\\mathbb R\\)", "\\(x>0\\)"],
    ["range", "\\(y>0\\)", "\\(y\\in\\mathbb R\\)"],
    ["intercept", "y-intercept \\(1\\)", "x-intercept \\(1\\)"],
    ["asymptote", "horizontal, \\(y=0\\)", "vertical, \\(x=0\\)"],
  ])}
  ${keyIdea(S`The inverse of \(y=b^x\) is \(x=b^y\): "\(y\) is the exponent you put on \(b\) to get \(x\)." It is a function, called the <strong>logarithmic function</strong> with base \(b\), written \(y=\log_b x\). In 6.2 you will evaluate it; here you meet it as a graph.`)}`),

  section("📌 Explore the reflection", S`<p>The green dashed curve is \(y=b^x\) and the violet curve is its inverse. Change the base and watch both curves move together as mirror images in \(y=x\). Slide \(x\) to see that the inverse gives the exponent: \(b^{y}=x\).</p>`),

  widget("ibLogGraph", { init: [2, 0, 0] }),

  section("📌 Transformed exponentials", S`
  <p>For \(y=a\cdot b^x+k\), swap \(x\) and \(y\), then isolate the power: \(b^y=\dfrac{x-k}{a}\). The horizontal asymptote \(y=k\) of the exponential becomes the vertical asymptote \(x=k\) of the inverse, and every intercept swaps axes.</p>
  ${watchOut([
    "Swap the coordinates, not their signs: (2, 4) becomes (4, 2), not (−2, −4).",
    "The inverse of y = bˣ is not y = 1/bˣ. The reciprocal is a different function.",
    "The inverse only exists for x > 0: there is no exponent that makes bʸ zero or negative.",
    "The horizontal asymptote y = k of an exponential becomes the vertical asymptote x = k of its inverse.",
    "A point on y = x is its own mirror image, so if the curves meet, they can meet there.",
  ])}`),

  examples([
    ["Table and graph of an inverse", S`Make a table of values for \(y=3^x\) with \(x=-2,-1,0,1,2\), then give the table and a sketch for its inverse.`,
      [S`\(3^{-2}=\frac19\), \(3^{-1}=\frac13\), \(3^0=1\), \(3^1=3\), \(3^2=9\).`, S`Swap: \(\left(\frac19,-2\right)\), \(\left(\frac13,-1\right)\), \((1,0)\), \((3,1)\), \((9,2)\).`, S`Plot the swapped points; the curve rises slowly and hugs the y-axis as \(x\to0^+\).`],
      S`inverse points \(\left(\tfrac19,-2\right)\), \(\left(\tfrac13,-1\right)\), \((1,0)\), \((3,1)\), \((9,2)\)`,
      plane({ view: { xmin: -3, xmax: 10, ymin: -3, ymax: 10 }, lines: [YX], curves: [{ f: (x) => 3 ** x, color: "blue" }, { f: lg(3), a: 0.01, color: "violet" }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "violet" }, { x: 9, y: 2, label: "(9, 2)", color: "violet" }, { x: 1, y: 3, color: "blue" }], step: { x: 1, y: 1 } })],
    ["Inverse of a decay function", S`State the domain, range, intercept, asymptote and behaviour of the inverse of \(y=\left(\tfrac12\right)^x\).`,
      [S`Inverse: \(x=\left(\tfrac12\right)^y\).`, S`Swap domain and range: domain \(x>0\), range \(y\in\mathbb R\).`, S`\((0,1)\to(1,0)\): x-intercept 1; asymptote \(y=0\to x=0\).`, S`\(\left(\tfrac12\right)^x\) decreases, so its inverse decreases too: \(\left(\tfrac12\right)^{-3}=8\) gives the point \((8,-3)\).`],
      S`domain \(x>0\), range \(\mathbb R\), x-intercept 1, VA \(x=0\), decreasing`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, lines: [YX], curves: [{ f: (x) => 0.5 ** x, color: "blue" }, { f: lg(0.5), a: 0.01, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "violet" }, { x: 4, y: -2, label: "(4, −2)", color: "violet" }], step: { x: 1, y: 1 } })],
    ["Inverse of a shifted exponential", S`Find the equation of the inverse of \(y=2^x+3\) and its asymptote.`,
      [S`Swap: \(x=2^y+3\).`, S`Isolate the power: \(2^y=x-3\).`, S`\(2^y>0\), so \(x-3>0\): domain \(x>3\). The asymptote \(y=3\) of the original becomes \(x=3\).`],
      S`\(x=2^y+3\) (or \(2^y=x-3\)); vertical asymptote \(x=3\)`,
      plane({ view: { xmin: -3, xmax: 10, ymin: -3, ymax: 10 }, lines: [YX, { m: 0, b: 3, color: "red", dash: true }], vlines: [{ x: 3, color: "red", dash: true }], curves: [{ f: (x) => 2 ** x + 3, color: "blue" }, { f: (x) => lg(2)(x - 3), a: 3.005, color: "violet" }], step: { x: 1, y: 1 } })],
    ["Find the base from a point", S`The graph of \(y=b^x\) passes through \((2,16)\). Find \(b\), then find the y-value on the inverse when \(x=64\).`,
      [S`\(b^2=16\) with \(b>0\): \(b=4\).`, S`On the inverse, \(x=4^y\). With \(x=64\): \(4^y=64=4^3\).`],
      S`\(b=4\); the inverse passes through \((64,3)\)`],
    ["Estimate from the graph", S`Use the inverse of \(y=2^x\) to estimate the exponent \(y\) with \(2^y=10\).`,
      [S`\(2^3=8\) and \(2^4=16\), so \(y\) is between 3 and 4, closer to 3.`, S`Reading the inverse graph at \(x=10\): \(y\approx3.3\). Check: \(2^{3.32}\approx9.99\).`],
      S`\(y\approx3.32\)`,
      plane({ view: { xmin: -1, xmax: 12, ymin: -2, ymax: 5 }, curves: [{ f: lg(2), a: 0.01, color: "violet" }], vlines: [{ x: 10, color: "green", dash: true }], points: [{ x: 10, y: 3.32, label: "(10, 3.32)", color: "amber" }, { x: 8, y: 3, label: "(8, 3)", color: "violet" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("inverse point", S`The inverse of \(y=4^x\) passes through \((16,\ ?)\). Find the missing y-value.`, num(2),
      "Which exponent on 4 gives 16?", [S`\(4^2=16\), so \((2,16)\) is on \(y=4^x\) and \((16,2)\) is on the inverse.`], S`\(2\)`),
    q("x-intercept", S`Find the x-intercept of the inverse of \(y=7^x\).`, num(1),
      "Swap the y-intercept of y = 7ˣ.", [S`\(y=7^x\) has y-intercept \((0,1)\); the inverse has \((1,0)\).`], S`\(1\)`),
    q("asymptote", S`The inverse of \(y=2^x-5\) has a vertical asymptote \(x=c\). Find \(c\).`, num(-5),
      "The horizontal asymptote of y = 2ˣ − 5 is y = −5.", [S`Swap: \(x=2^y-5\Rightarrow2^y=x+5>0\), so \(x>-5\).`], S`\(-5\)`),
    q("domain", S`What is the domain of the inverse of \(y=6^x\)?`, choice(["x > 0", "all real numbers", "x ≥ 1", "x > 1"], 0),
      "It is the range of y = 6ˣ.", [S`The range of \(6^x\) is \(y>0\); swap it into the domain.`], "x > 0"),
    q("read the inverse", S`Find the y-value on the inverse of \(y=3^x\) when \(x=\frac1{27}\).`, num(-3),
      "Which exponent on 3 gives 1/27?", [S`\(3^{-3}=\frac1{27}\).`], S`\(-3\)`),
  ]),

  ...hard([
    ["Inverse of a stretched, shifted exponential", S`For \(f(x)=3\cdot2^x-6\): (a) write the inverse with the power isolated; (b) state its domain, range and asymptote; (c) find both intercepts of the inverse.`,
      [S`Swap: \(x=3\cdot2^y-6\Rightarrow2^y=\dfrac{x+6}{3}\).`, S`\(\dfrac{x+6}3>0\Rightarrow x>-6\). Domain \(x>-6\), range \(\mathbb R\), asymptote \(x=-6\) (from \(y=-6\)).`, S`\(f(0)=3-6=-3\): \(f\) has y-intercept \((0,-3)\), so the inverse has x-intercept \((-3,0)\).`, S`\(f(x)=0\Rightarrow2^x=2\Rightarrow x=1\): \(f\) has x-intercept \((1,0)\), so the inverse has y-intercept \((0,1)\).`],
      S`\(2^y=\tfrac{x+6}3\); domain \(x>-6\); VA \(x=-6\); intercepts \((-3,0)\) and \((0,1)\)`,
      plane({ view: { xmin: -8, xmax: 6, ymin: -8, ymax: 6 }, lines: [YX], vlines: [{ x: -6, color: "red", dash: true }], curves: [{ f: (x) => 3 * 2 ** x - 6, color: "blue" }, { f: (x) => lg(2)((x + 6) / 3), a: -5.99, color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)", color: "violet" }, { x: 0, y: 1, label: "(0, 1)", color: "violet" }], step: { x: 1, y: 1 } })],
    ["When an exponential meets its inverse", S`Show that \(y=\left(\sqrt2\right)^x\) and its inverse meet at \((2,2)\) and \((4,4)\). Explain why an increasing function and its inverse can only meet on the line \(y=x\).`,
      [S`\(\left(\sqrt2\right)^2=2\) and \(\left(\sqrt2\right)^4=4\), so \((2,2)\) and \((4,4)\) are on the curve.`, S`Swapping \((2,2)\) or \((4,4)\) gives the same point, so both are on the inverse too.`, S`Suppose \(f\) is increasing and \(f(a)=b\) with \(b\gt a\). Then \(f(b)\gt f(a)=b\), so \(f(b)\ne a\) and \((a,b)\) cannot be on the inverse. The case \(b\lt a\) is the same with the inequalities reversed. So any common point must have \(b=a\).`],
      S`common points lie on \(y=x\): here \((2,2)\) and \((4,4)\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [YX], curves: [{ f: (x) => Math.SQRT2 ** x, color: "blue" }, { f: lg(Math.SQRT2), a: 0.01, color: "violet" }], points: [{ x: 2, y: 2, label: "(2, 2)", color: "amber" }, { x: 4, y: 4, label: "(4, 4)", color: "amber" }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", S`The inverse of \(y=5^x-2\) passes through \((23,\ ?)\). Find the y-value.`, num(2),
      "Swap: x = 5ʸ − 2.", [S`\(23=5^y-2\Rightarrow5^y=25\Rightarrow y=2\).`], S`\(2\)`),
    q("hard", S`\(y=b^x\) passes through \((3,8)\). Find the y-value on its inverse when \(x=\frac14\).`, num(-2),
      "Find b first.", [S`\(b^3=8\Rightarrow b=2\).`, S`\(2^y=\frac14\Rightarrow y=-2\).`], S`\(-2\)`),
    q("hard", S`Find the x-intercept of the inverse of \(f(x)=2^{x-1}\).`, num(0.5, 0.0001),
      "Swap the y-intercept of f.", [S`\(f(0)=2^{-1}=\frac12\): \(f\) passes through \(\left(0,\frac12\right)\).`, S`The inverse passes through \(\left(\frac12,0\right)\).`], S`\(0.5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the inverse of y = bˣ a function?", "y = bˣ is always increasing or always decreasing, so it passes the horizontal line test; its reflection passes the vertical line test."],
      ["Why is the domain of the inverse x > 0?", "It is the range of y = bˣ: a positive base raised to any power is positive."],
      ["What happens to the asymptote?", "The horizontal asymptote y = 0 reflects to the vertical asymptote x = 0 (y = k becomes x = k)."],
      ["Is the inverse the same as 1/bˣ?", "No. 1/bˣ = (1/b)ˣ is another exponential; the inverse swaps inputs and outputs."],
      ["What does the inverse tell me?", "Given an output x, it returns the exponent y with bʸ = x — that exponent is called a logarithm."],
    ],
    summary: [
      "y = bˣ: domain ℝ, range y > 0, y-intercept 1, asymptote y = 0.",
      "Inverse: swap (x, y) → (y, x); reflect in y = x; equation x = bʸ.",
      "Inverse: domain x > 0, range ℝ, x-intercept 1, asymptote x = 0.",
      "The inverse is the logarithmic function y = log_b x.",
    ],
    next: "6.2 names the inverse: logarithms, how to evaluate them, and how they relate to exponents.",
  }),
];
