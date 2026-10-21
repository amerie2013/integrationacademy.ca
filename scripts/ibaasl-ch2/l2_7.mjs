// IB AA SL 2.7 — Chapter 2 Review: functions, notation, graphs, domain and range, composite and inverse functions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard, plane } from "./lib.mjs";
import { fig } from "../ibaasl-ch1/figs.mjs";
import { mapDoc } from "../mcr3u-ch1/bank/fig.mjs";

export const TITLE = "2.7 Chapter 2 Review";
export const ID = "1baa0002-0001-4001-8001-000000000207";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const YX = { f: (x) => x, color: "gray" };

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 2 Review",
    overview: S`This review connects the whole chapter. The summary table lists each skill and the tool for it; the examples combine two or more skills the way exam questions do; the practice and hard-level questions are exam style, from short Paper 1 items to multi-step Paper 2 problems.`,
    goals: [
      "decide whether a relation is a function and describe the mapping;",
      "evaluate and solve with function notation;",
      "sketch graphs showing intercepts, turning points and asymptotes;",
      "find domains and ranges, including on restricted domains;",
      "find composite and inverse functions.",
    ],
    curriculum: "SL 2.2–2.5 (functions, notation, domain and range, graphs and key features, composite and inverse functions)",
    prior: [
      ["What does the vertical line test check?", "That every input has exactly one output (a function)."],
      [S`What does \((f\circ g)(x)\) mean?`, S`\(f(g(x))\): apply \(g\) first.`],
      [S`How is the graph of \(f^{-1}\) related to the graph of \(f\)?`, S`It is the reflection in \(y=x\).`],
    ],
    words: [
      ["2.1", "functions, mappings, vertical line test", ""],
      ["2.2", "function notation, solving f(x) = k", ""],
      ["2.3", "graphs and key features", ""],
      ["2.4", "domain and range", ""],
      ["2.5–2.6", "composite and inverse functions", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Question", "Tool"], [
    ["Is it a function?", "each input has exactly one output; vertical line test"],
    ["Find f(a) / solve f(x) = k", "substitute in brackets / solve for x (or read the graph)"],
    ["Sketch a graph", "intercepts, turning points, asymptotes, labelled with coordinates"],
    ["Domain and range", "no zero denominators or roots of negatives; check end points and turning points"],
    [S`\((f\circ g)(x)\)`, S`substitute \(g(x)\) into \(f\); order matters`],
    [S`\(f^{-1}(x)\)`, S`swap \(x\) and \(y\), make \(y\) the subject; reflect in \(y=x\); needs one-to-one`],
  ])}
  ${plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 1 / (x - 2) + 3, a: -4, b: 1.9, color: "violet" }, { f: (x) => 1 / (x - 2) + 3, a: 2.1, b: 8, color: "violet" }, { f: (x) => 1 / (x - 3) + 2, a: -4, b: 2.9, color: "green" }, { f: (x) => 1 / (x - 3) + 2, a: 3.1, b: 8, color: "green" }, YX] }, "f(x) = 1/(x − 2) + 3 (violet) and its inverse 1/(x − 3) + 2 (green): asymptotes swap")}
  ${keyIdea("Most exam questions on functions are about inputs and outputs: what goes in (domain), what comes out (range), in what order (composite), and how to go back (inverse).")}`),

  section("📌 Explore", S`<p>Use the explorer to check the inverses from the examples: the point and its mirror image in \(y=x\) always swap coordinates.</p>`),

  widget("fnInverse", { init: "sqr" }),

  examples([
    ["Level 1 · Function, domain and range", S`Is \(\{(-2,4),(0,1),(3,4),(5,-1)\}\) a function? State its domain and range.`,
      [S`Each input appears once: a function (many-to-one, since 4 is shared).`, S`Domain \(\{-2,0,3,5\}\); range \(\{-1,1,4\}\).`],
      S`function; domain \(\{-2,0,3,5\}\), range \(\{-1,1,4\}\)`,
      fig(mapDoc([[-2, 4], [0, 1], [3, 4], [5, -1]]))],
    ["Level 2 · Notation", S`For \(f(x)=x^2-2x\), solve \(f(x)=8\) and simplify \(f(a+1)\).`,
      [S`\(x^2-2x-8=0\Rightarrow(x-4)(x+2)=0\Rightarrow x=4\) or \(-2\).`, S`\(f(a+1)=(a+1)^2-2(a+1)=a^2+2a+1-2a-2=a^2-1\).`],
      S`\(x=4\) or \(-2\); \(a^2-1\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 12 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }], lines: [{ m: 0, b: 8, color: "green", dash: true }], points: [P(-2, 8, "(−2, 8)", "green"), P(4, 8, "(4, 8)", "green")] }, "f(x) = 8 where y = 8 meets the curve")],
    ["Level 2 · Domain and range from asymptotes", S`State the domain and range of \(g(x)=\dfrac{6}{x+1}+2\).`,
      [S`Vertical asymptote \(x=-1\): domain \(x\ne-1\).`, S`Horizontal asymptote \(y=2\): the fraction is never 0, so range \(y\ne2\).`],
      S`domain \(x\ne-1\); range \(y\ne2\)`,
      plane({ view: { xmin: -8, xmax: 6, ymin: -6, ymax: 10 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 6 / (x + 1) + 2, a: -8, b: -1.1, color: "violet" }, { f: (x) => 6 / (x + 1) + 2, a: -0.9, b: 6, color: "violet" }], vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [P(0, 8, "(0, 8)", "green"), P(-4, 0, "(−4, 0)")] })],
    ["Level 2 · A composite with a domain", S`\(f(x)=x-5\) and \(g(x)=\sqrt x\). Find \((g\circ f)(x)\), its domain, and \((g\circ f)(30)\).`,
      [S`\((g\circ f)(x)=\sqrt{x-5}\).`, S`Needs \(x-5\ge0\): domain \(x\ge5\).`, S`\((g\circ f)(30)=\sqrt{25}=5\).`],
      S`\(\sqrt{x-5}\), \(x\ge5\); \(5\)`],
    ["Level 3 · An inverse", S`\(h(x)=3-2x^3\). Find \(h^{-1}(x)\) and \(h^{-1}(-13)\).`,
      [S`Swap: \(x=3-2y^3\Rightarrow y^3=\frac{3-x}{2}\).`, S`\(h^{-1}(x)=\sqrt[3]{\frac{3-x}{2}}\) (a cubic is one-to-one, so no restriction).`, S`\(h^{-1}(-13)=\sqrt[3]{8}=2\). Check: \(h(2)=3-16=-13\) ✓.`],
      S`\(h^{-1}(x)=\sqrt[3]{\frac{3-x}{2}}\); \(2\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 3 - 2 * x ** 3, color: "violet" }, { f: (x) => Math.cbrt((3 - x) / 2), color: "green" }, YX] }, "h (violet) and h⁻¹ (green) are reflections in y = x")],
  ]),

  practice([
    q("Level 1 · evaluate", S`For \(f(x)=2x^2-1\), find \(f(-3)\).`, num(17),
      "Bracket the −3.", [S`\(2(9)-1\).`], S`\(17\)`),
    q("Level 1 · domain", S`What is the smallest \(x\) in the domain of \(\sqrt{4x+8}\)?`, num(-2),
      "4x + 8 ≥ 0.", [S`\(x\ge-2\).`], S`\(-2\)`),
    q("Level 2 · composite", S`\(f(x)=3x+2\), \(g(x)=x^2\). Find \((g\circ f)(-1)\).`, num(1),
      "f first.", [S`\(f(-1)=-1\), \(g(-1)=1\).`], S`\(1\)`),
    q("Level 2 · inverse", S`\(f(x)=\dfrac{x-1}{2}\). Find \(f^{-1}(4)\).`, num(9),
      "Solve (x − 1)/2 = 4.", [S`\(x-1=8\).`], S`\(9\)`),
    q("Level 2 · range", S`What is the smallest value in the range of \(f(x)=x^2+4x+9\)?`, num(5),
      "Complete the square.", [S`\((x+2)^2+5\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Equal composites", S`\(f(x)=2x-1\) and \(g(x)=x^2+k\). Given \((f\circ g)(2)=(g\circ f)(2)\), find \(k\).`,
      [S`\((f\circ g)(2)=f(4+k)=2(4+k)-1=7+2k\).`, S`\((g\circ f)(2)=g(3)=9+k\).`, S`\(7+2k=9+k\Rightarrow k=2\).`],
      S`\(k=2\)`],
    ["An inverse with asymptotes", S`\(f(x)=\dfrac{1}{x-2}+3\). State the domain and range of \(f\), find \(f^{-1}(x)\), and explain what happens to the asymptotes.`,
      [S`Domain \(x\ne2\), range \(y\ne3\).`, S`Swap: \(x=\frac{1}{y-2}+3\Rightarrow y-2=\frac{1}{x-3}\Rightarrow f^{-1}(x)=\frac{1}{x-3}+2\).`, S`The asymptotes \(x=2\), \(y=3\) become \(x=3\), \(y=2\): reflection in \(y=x\) swaps them.`],
      S`\(f^{-1}(x)=\frac1{x-3}+2\), domain \(x\ne3\), range \(y\ne2\)`],
  ], [
    q("Level 3 · inverse of a composite", S`\(f(x)=x^2+1\) for \(x\ge0\) and \(g(x)=2x\), \(x\ge0\). Find \((f\circ g)^{-1}(37)\).`, num(3),
      "Solve (f∘g)(x) = 37.", [S`\(4x^2+1=37\Rightarrow x^2=9\), \(x\ge0\).`], S`\(3\)`),
    q("Level 3 · number of solutions", S`For \(f(x)=x^3-12x\), how many solutions does \(f(x)=10\) have?`, num(3),
      "The local max is f(−2) = 16 and the local min is f(2) = −16.", [S`\(10\) lies between \(-16\) and \(16\).`], S`\(3\)`),
    q("Level 3 · domain", S`What is the largest integer in the domain of \(f(x)=\dfrac{1}{\sqrt{5-x}}\)?`, num(4),
      "5 − x must be strictly positive.", [S`\(x<5\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the most common mistake on composites?", "Applying the functions in the wrong order. f(g(x)) means g first."],
      ["How do I find a range quickly?", "Sketch the graph (or use a GDC) and read the lowest and highest y-values over the domain."],
      ["When must I restrict a domain for an inverse?", "When the function is many-to-one, e.g. a quadratic: keep one side of the vertex."],
      ["Do I need to state domains?", "Yes, whenever a square root, a fraction or a restriction is involved — it often carries a mark."],
      ["What should I revise first?", "Finding inverses algebraically and checking them with a value."],
    ],
    summary: [
      "Function: one output per input; vertical line test.",
      "f(a) substitute; f(x) = k solve.",
      "Domain/range: restrictions, end points and turning points.",
      "f∘g: inside first; f⁻¹: swap and rearrange, reflect in y = x.",
    ],
    next: "Chapter 3 models with linear and quadratic functions and studies transformations of graphs.",
  }),
];
