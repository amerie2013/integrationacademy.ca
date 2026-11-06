// MHF4U 8.1 — Sums and Differences of Functions (old 8.1 "Combining Functions", rebuilt): adding and
// subtracting algebraically, numerically and graphically, domains of combined functions, symmetry, profit.
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, mg } from "./lib.mjs";

export const TITLE = "8.1 Sums and Differences of Functions";
export const ID = "91c436df-48d3-405a-a2be-219f4115c6a3";

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "➕",
    title: "Sums and Differences of Functions",
    overview: S`Two functions can be combined into a new one by adding or subtracting their outputs: \((f+g)(x)=f(x)+g(x)\). A company's profit is its revenue function minus its cost function; a sound you hear is the sum of several waves. This lesson combines functions with equations, with tables of values and directly on a graph, and finds where the new function is defined.`,
    goals: [
      "find \\((f+g)(x)\\) and \\((f-g)(x)\\) from equations;",
      "add or subtract functions with a table of values and on a graph;",
      "state the domain of a sum or difference;",
      "describe the shape and symmetry of a combined function;",
      "use differences such as profit = revenue − cost in context.",
    ],
    curriculum: "D2.1 (determine, through investigation using graphing technology, key features of the graphs of functions created by adding, subtracting, multiplying or dividing functions), D2.2 (recognize real-world applications of combinations of functions)",
    prior: [
      [S`Simplify \((3x^2-x)+(x^2+4x)\).`, S`\(4x^2+3x\).`],
      [S`If \(f(x)=x^2\), find \(f(-3)\).`, S`\(9\).`],
      [S`Domain of \(y=\sqrt{x-2}\)?`, S`\(x\ge2\).`],
    ],
    words: [
      ["Sum of functions", "\\((f+g)(x)=f(x)+g(x)\\)", "\\(x^2+2^x\\)"],
      ["Difference of functions", "\\((f-g)(x)=f(x)-g(x)\\)", "profit \\(=R(x)-C(x)\\)"],
      ["Domain of a combination", "the \\(x\\)-values in the domain of BOTH functions", "\\(\\sqrt x+\\sqrt{4-x}:\\ 0\\le x\\le4\\)"],
      ["Superposition", "adding graphs by adding \\(y\\)-values at each \\(x\\)", "add heights point by point"],
    ],
  }),

  section("📌 Three ways to add functions", S`
  ${table(["Representation", "How to find f + g", "Example (f(x) = 2ˣ, g(x) = −x)"], [
    ["Equation", "add the expressions, collect like terms", "\\((f+g)(x)=2^x-x\\)"],
    ["Table", "add the \\(y\\)-values in each row", "\\(x=2:\\ 4+(-2)=2\\)"],
    ["Graph", "add the heights at each \\(x\\) (superposition)", "at \\(x=0\\): height \\(1+0=1\\)"],
  ])}
  ${keyIdea(S`\[(f\pm g)(x)=f(x)\pm g(x),\qquad \text{domain}=D_f\cap D_g.\] The combination exists only where <b>both</b> functions exist.`)}
  ${plane({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 10 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: (x) => -x, color: "gray" }, { f: (x) => 2 ** x - x, color: "violet" }], points: [{ x: -2, y: 2.25, label: "(−2, 2.25)", color: "amber" }, { x: 3, y: 5, label: "(3, 5)", color: "amber" }], step: { x: 1, y: 1 } }, "Blue y = 2ˣ, gray y = −x, violet their sum y = 2ˣ − x: for large negative x the line dominates, for large positive x the exponential does.")}`),

  mg([{ expr: "x^2", label: "f(x) = x²", color: "#2563eb" }, { expr: "a*x", label: "g(x) = ax", color: "#64748b" }, { expr: "x^2 + a*x", label: "(f + g)(x) = x² + ax", color: "#7c3aed" }], { param: "a", paramMin: -4, paramMax: 4, paramInit: 2, xMin: -6, xMax: 6, yMin: -6, yMax: 12, caption: "Slide a. The sum x² + ax is still a parabola: adding a line moves the vertex to (−a/2, −a²/4) without changing the shape." }),

  section("📌 Features of a sum or difference", S`
  <ul>
    <li><b>Zeros:</b> \((f-g)(x)=0\) exactly where \(f(x)=g(x)\), so the zeros of a difference are the \(x\)-coordinates where the two graphs cross.</li>
    <li><b>Dominant term:</b> far to the left or right, the sum behaves like whichever function grows faster.</li>
    <li><b>Symmetry:</b> even + even is even, odd + odd is odd; even + odd is usually neither.</li>
  </ul>
  ${watchOut([
    "(f − g)(x) needs brackets: f(x) − (x² + 5x − 4) changes every sign of g.",
    "The domain of f + g is where BOTH are defined, not where either one is.",
    "Add heights at the same x, not points with the same y.",
    "(f + g)(3) is f(3) + g(3), not f(3 + 3).",
    "A difference f − g is not the same as g − f; they are reflections in the x-axis.",
  ])}`),

  examples([
    ["Add and subtract equations", S`For \(f(x)=2x^2-3x+1\) and \(g(x)=x^2+5x-4\), find \((f+g)(x)\) and \((f-g)(x)\).`,
      [S`<b>Rule.</b> \((f\pm g)(x)=f(x)\pm g(x)\): at each \(x\), add or subtract the outputs. With equations, that means collecting like terms.`,
        S`<b>Sum.</b> Group the terms by power: \((2x^2+x^2)+(-3x+5x)+(1-4)=3x^2+2x-3\).`,
        S`<b>Difference: brackets first.</b> All of \(g\) is subtracted, so its signs all change: \(2x^2-3x+1-(x^2+5x-4)=2x^2-3x+1-x^2-5x+4\).`,
        S`<b>Collect.</b> \((2x^2-x^2)+(-3x-5x)+(1+4)=x^2-8x+5\).`,
        S`<b>Check at \(x=1\).</b> \(f(1)=0\) and \(g(1)=2\). The sum should be \(2\): \(3+2-3=2\) ✓. The difference should be \(-2\): \(1-8+5=-2\) ✓`,
        S`<b>On the graph.</b> At \(x=1\), the violet sum has height \(0+2=2\): the heights of the two parts add ✓`],
      S`\(3x^2+2x-3\) and \(x^2-8x+5\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -9, ymax: 16 }, curves: [{ f: (x) => 2 * x * x - 3 * x + 1, color: "blue" }, { f: (x) => x * x + 5 * x - 4, color: "gray" }, { f: (x) => 3 * x * x + 2 * x - 3, color: "violet" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Domain of a sum", S`Find the domain of \(h(x)=\sqrt{x-1}+\sqrt{5-x}\) and evaluate \(h(1)\), \(h(3)\), \(h(5)\).`,
      [S`<b>Rule.</b> A sum exists only where both parts exist, so the domain is the overlap of the two domains.`,
        S`<b>First part.</b> \(\sqrt{x-1}\) needs \(x-1\ge0\), so \(x\ge1\).`,
        S`<b>Second part.</b> \(\sqrt{5-x}\) needs \(5-x\ge0\), so \(x\le5\).`,
        S`<b>Overlap.</b> Both conditions hold for \(1\le x\le5\).`,
        S`<b>Evaluate.</b> \(h(1)=\sqrt0+\sqrt4=2\); \(h(3)=\sqrt2+\sqrt2\approx2.83\); \(h(5)=\sqrt4+\sqrt0=2\).`,
        S`<b>Check.</b> \(h(6)\) would need \(\sqrt{-1}\), so \(6\) is correctly outside the domain ✓. The violet curve exists only where both the blue and gray curves exist ✓`],
      S`\(1\le x\le5\); \(2,\ 2.83,\ 2\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x - 1), a: 1, color: "blue" }, { f: (x) => Math.sqrt(5 - x), b: 5, color: "gray" }, { f: (x) => Math.sqrt(x - 1) + Math.sqrt(5 - x), a: 1, b: 5, color: "violet" }], points: [{ x: 3, y: 2.83, label: "(3, 2.83)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Add with a table", S`Make a table for \(f(x)=2^x\), \(g(x)=-x\) and \(h=f+g\) for \(x=-2,\dots,3\). Where is \(h\) smallest?`,
      [S`<b>Method.</b> The output of \(h\) in each row is the sum of the two outputs in that row.`,
        S`<b>Negative \(x\).</b> \(x=-2\): \(0.25+2=2.25\). \(x=-1\): \(0.5+1=1.5\).`,
        S`<b>The rest.</b> \(x=0\): \(1+0=1\). \(x=1\): \(2-1=1\). \(x=2\): \(4-2=2\). \(x=3\): \(8-3=5\).`,
        S`<b>Read the pattern.</b> \(h\) falls, then rises. On the left the line \(-x\) dominates; on the right \(2^x\) dominates.`,
        S`<b>Locate the minimum.</b> The smallest table values are at \(x=0\) and \(x=1\), and the values rise on both sides, so the minimum lies between them. A graph gives about \(0.91\) at \(x\approx0.53\).`,
        S`<b>Check.</b> From the equation, \(h(3)=2^3-3=5\) ✓, and \(h(0.53)=2^{0.53}-0.53\approx0.91\) ✓`],
      S`minimum about \(0.91\), between \(x=0\) and \(x=1\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 10 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: (x) => -x, color: "gray" }, { f: (x) => 2 ** x - x, color: "violet" }], points: [{ x: 0.53, y: 0.91, label: "(0.53, 0.91)", color: "amber" }, { x: 3, y: 5, label: "(3, 5)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Profit as a difference", S`Revenue \(R(x)=12x\) and cost \(C(x)=0.02x^2+4x+300\) (dollars, \(x\) items). Find the profit function, the break-even points and the maximum profit.`,
      [S`<b>Model.</b> Profit is revenue minus cost, with brackets around the whole cost: \(P(x)=12x-(0.02x^2+4x+300)=-0.02x^2+8x-300\).`,
        S`<b>Meaning of break-even.</b> Revenue equals cost exactly when \(P(x)=0\), which is where the graphs of \(R\) and \(C\) cross.`,
        S`<b>Solve.</b> Multiply by \(-50\) to clear the decimal: \(x^2-400x+15\,000=0\). The quadratic formula gives \(x=\dfrac{400\pm\sqrt{100\,000}}{2}\approx41.9\) or \(358.1\).`,
        S`<b>Maximum.</b> \(P\) is a parabola opening down, so its vertex is the maximum: \(x=-\dfrac{8}{2(-0.02)}=200\), and \(P(200)=-800+1600-300=500\).`,
        S`<b>Check.</b> \(R(200)=2400\) and \(C(200)=800+800+300=1900\), and \(2400-1900=500\) ✓. The vertex is halfway between the break-even points: \(\frac{41.9+358.1}{2}=200\) ✓`,
        S`<b>Interpret.</b> The company makes a profit only between about \(42\) and \(358\) items.`],
      S`\(P=-0.02x^2+8x-300\); break even near \(42\) and \(358\) items; max \(500\) dollars at \(200\) items`,
      plane({ view: { xmin: -10, xmax: 420, ymin: -400, ymax: 700 }, curves: [{ f: (x) => -0.02 * x * x + 8 * x - 300, color: "violet" }], points: [{ x: 200, y: 500, label: "(200, 500)", color: "amber" }, { x: 41.9, y: 0, label: "(41.9, 0)", color: "blue" }, { x: 358.1, y: 0, label: "(358.1, 0)", color: "blue" }], step: { x: 50, y: 100 } })],
    ["A line plus a wave", S`Describe \(y=x+\sin x\) on \(-2\pi\le x\le2\pi\): its symmetry, its zeros and its values at \(x=\pm\frac{\pi}2\).`,
      [S`<b>Symmetry rule.</b> Odd + odd is odd. Both \(x\) and \(\sin x\) are odd, so \(y(-x)=-x+\sin(-x)=-x-\sin x=-y(x)\). The graph is symmetric about the origin.`,
        S`<b>Zeros: narrow the search.</b> \(x+\sin x=0\) means \(\sin x=-x\). Since \(|\sin x|\le1\), a solution must have \(|x|\le1\).`,
        S`<b>Zeros: finish.</b> For \(0<x\le1\), both \(x\) and \(\sin x\) are positive, so their sum is not zero. By symmetry the same holds for \(-1\le x<0\). Only \(x=0\) remains, and \(0+\sin0=0\).`,
        S`<b>Values.</b> \(y\left(\frac\pi2\right)=\frac\pi2+1\approx2.57\). By odd symmetry, \(y\left(-\frac\pi2\right)\approx-2.57\).`,
        S`<b>Shape.</b> Since \(-1\le\sin x\le1\), the graph is never more than \(1\) away from the line \(y=x\): it wiggles about the line.`],
      S`odd; one zero at \(x=0\); \(\pm2.57\)`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x, color: "gray" }, { f: (x) => x + Math.sin(x), color: "violet" }], points: [{ x: Math.PI / 2, y: Math.PI / 2 + 1, label: "(π/2, 2.57)", color: "amber" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("evaluate", S`\(f(x)=3x-2\) and \(g(x)=x^2+4\). Find \((f+g)(2)\).`, num(12), "f(2) + g(2).", [S`\(4+8=12\).`], S`\(12\)`),
    q("difference", S`\(f(x)=x^2+2x\) and \(g(x)=3x-5\). Which is \((f-g)(x)\)?`, choice(["x² − x + 5", "x² + 5x − 5", "x² − x − 5", "x² + x + 5"], 0), "Bracket g before subtracting.", [S`\(x^2+2x-3x+5\).`], S`\(x^2-x+5\)`),
    q("domain", S`What is the domain of \(\sqrt{x+2}+\sqrt{4-x}\)?`, choice(["−2 ≤ x ≤ 4", "x ≥ −2", "x ≤ 4", "all real x"], 0), "Both roots must be defined.", [S`\(x\ge-2\) and \(x\le4\).`], S`\(-2\le x\le4\)`),
    q("evaluate", S`\(f(x)=2^x\), \(g(x)=x^2\). Find \((f-g)(3)\).`, num(-1), "8 − 9.", [S`\(2^3-3^2=-1\).`], S`\(-1\)`),
    q("profit", S`\(R(x)=15x\) and \(C(x)=5x+200\). At how many items does the company break even?`, num(20), "R = C.", [S`\(P=10x-200=0\Rightarrow x=20\).`], S`\(20\)`),
  ]),

  ...hard([
    ["Symmetry of sums", S`Show that the sum of two even functions is even, and test whether \(x^3+x^2\) is even, odd or neither.`,
      [S`<b>Definition:</b> \(f\) even means \(f(-x)=f(x)\).`,
        S`<b>Proof:</b> if \(f,g\) are even, \((f+g)(-x)=f(-x)+g(-x)=f(x)+g(x)=(f+g)(x)\), so \(f+g\) is even.`,
        S`<b>Test \(h(x)=x^3+x^2\):</b> \(h(1)=2\) and \(h(-1)=-1+1=0\).`,
        S`<b>Conclusion:</b> \(h(-1)\ne h(1)\) (not even) and \(h(-1)\ne-h(1)\) (not odd): an odd plus an even function is neither here.`],
      S`even + even is even; \(x^3+x^2\) is neither`],
    ["Zeros of a sum of waves", S`Find every zero of \(y=\sin x+\sin2x\) for \(0\le x\le2\pi\).`,
      [S`<b>Double angle:</b> \(\sin2x=2\sin x\cos x\), so \(y=\sin x(1+2\cos x)\).`,
        S`<b>First factor:</b> \(\sin x=0\Rightarrow x=0,\ \pi,\ 2\pi\).`,
        S`<b>Second factor:</b> \(\cos x=-\frac12\Rightarrow x=\frac{2\pi}3,\ \frac{4\pi}3\).`,
        S`<b>Check \(x=\frac{2\pi}3\):</b> \(\sin\frac{2\pi}3+\sin\frac{4\pi}3=\frac{\sqrt3}2-\frac{\sqrt3}2=0\) ✓`],
      S`\(0,\ \frac{2\pi}3,\ \pi,\ \frac{4\pi}3,\ 2\pi\)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -2.2, ymax: 2.2 }, curves: [{ f: (x) => Math.sin(x), a: 0, b: 2 * Math.PI, color: "blue" }, { f: (x) => Math.sin(2 * x), a: 0, b: 2 * Math.PI, color: "gray" }, { f: (x) => Math.sin(x) + Math.sin(2 * x), a: 0, b: 2 * Math.PI, color: "violet" }], points: [{ x: 2 * Math.PI / 3, y: 0, label: "(2π/3, 0)", color: "amber" }, { x: 4 * Math.PI / 3, y: 0, label: "(4π/3, 0)", color: "amber" }], step: { x: 1, y: 0.5 } })],
  ], [
    q("hard", S`\(f(x)=\log x\) and \(g(x)=\log x^2\). Find \((f+g)(100)\).`, num(6), "f + g = 3 log x.", [S`\(2+4=6\).`], S`\(6\)`),
    q("hard", S`\(R(x)=20x-0.05x^2\) and \(C(x)=4x+600\). Find the maximum profit.`, num(680), "P = −0.05x² + 16x − 600.", [S`Vertex \(x=160\); \(P=-1280+2560-600=680\).`], S`\(680\)`),
    q("hard", S`\(h(x)=3^x+3^{-x}\). Find \(h(2)\) to two decimals.`, num(9 + 1 / 9, 0.01), "9 + 1/9.", [S`\(9+0.11=9.11\).`], S`\(\approx9.11\)`),
  ]),

  wrapUp({
    qas: [
      ["What is (f + g)(x)?", "The function whose output is f(x) + g(x) at each x."],
      ["What is the domain of f − g?", "All x in the domain of both f and g."],
      ["How do I add two graphs?", "At each x, add the two heights (superposition)."],
      ["Where is f − g zero?", "Where the graphs of f and g cross."],
      ["Why is profit a difference of functions?", "Profit = revenue − cost, both functions of the number of items."],
    ],
    summary: [
      "(f ± g)(x) = f(x) ± g(x).",
      "Domain: where both functions exist.",
      "Graphs: add or subtract heights at the same x.",
      "Even + even is even; odd + odd is odd.",
    ],
    next: "8.2 multiplies and divides functions.",
  }),
];
