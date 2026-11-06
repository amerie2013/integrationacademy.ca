// MHF4U 8.3 — Composite Functions (old 8.3 "Composition of Functions", rebuilt): evaluating and finding
// f(g(x)), order matters, domains of composites, decomposing, composition with an inverse, rates in context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, roots } from "./lib.mjs";

export const TITLE = "8.3 Composite Functions";
export const ID = "10a3c637-dab4-434b-87f3-43ba1618b7c3";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Composite Functions",
    overview: S`In a composite function the output of one function becomes the input of the next: \((f\circ g)(x)=f(g(x))\). A car's fuel use depends on distance, and distance depends on time, so fuel use is a composite function of time. This lesson evaluates and builds composites, shows that the order matters, finds their domains, and breaks complicated functions into simple pieces.`,
    goals: [
      "evaluate \\(f(g(a))\\) from equations, tables and graphs;",
      "find \\(f(g(x))\\) and \\(g(f(x))\\) algebraically;",
      "determine the domain of a composite function;",
      "decompose a function into two simpler functions;",
      "compose a function with its inverse and use composites in context.",
    ],
    curriculum: "D2.3 (determine the composition of two functions numerically and graphically), D2.4 (determine algebraically the composition of two functions, verify that f(f⁻¹(x)) = x), D2.5 (solve problems involving the composition of two functions)",
    prior: [
      [S`If \(f(x)=x^2+1\), find \(f(3)\).`, S`\(10\).`],
      [S`If \(f(x)=2x\), write \(f(a+1)\).`, S`\(2a+2\).`],
      [S`Inverse of \(y=2^x\)?`, S`\(y=\log_2x\).`],
    ],
    words: [
      ["Composite function", "\\((f\\circ g)(x)=f(g(x))\\): apply \\(g\\), then \\(f\\)", "\\(f(g(2))\\)"],
      ["Inner / outer function", "\\(g\\) is applied first (inner), \\(f\\) second (outer)", "\\(\\sqrt{x^2+1}\\): inner \\(x^2+1\\)"],
      ["Decompose", "write \\(h\\) as \\(f(g(x))\\)", "\\((2x+5)^3:\\ g=2x+5,\\ f=x^3\\)"],
      ["Identity", "\\(f(f^{-1}(x))=x\\)", "\\(2^{\\log_2x}=x\\)"],
    ],
  }),

  section("📌 Working from the inside out", S`
  ${table(["Step", "For f(g(2)) with f(x) = 3x − 1, g(x) = x² + 2"], [
    ["1. Inner first", "\\(g(2)=4+2=6\\)"],
    ["2. Feed the output to the outer function", "\\(f(6)=18-1=17\\)"],
    ["3. Order matters", "\\(g(f(2))=g(5)=27\\ne17\\)"],
  ])}
  ${keyIdea(S`\[(f\circ g)(x)=f\big(g(x)\big).\] The domain of \(f\circ g\) is every \(x\) in the domain of \(g\) whose output \(g(x)\) is in the domain of \(f\). In general \(f(g(x))\ne g(f(x))\).`)}`),

  widget("compositeLab", { init: ["dbl", "sq"] }),

  section("📌 Composites on a graph", S`
  <p>To read \(f(g(a))\) from graphs: go up from \(x=a\) to the graph of \(g\), read its height, then use that height as the new \(x\) on the graph of \(f\).</p>
  ${plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 7 }, curves: [{ f: (x) => 0.5 * x + 1, color: "blue" }, { f: (x) => 6 - x, color: "violet" }], points: [{ x: 2, y: 2, label: "g(2) = 2", color: "blue" }, { x: 2, y: 4, label: "f(2) = 4", color: "amber" }], step: { x: 1, y: 1 } }, "Blue g(x) = ½x + 1, violet f(x) = 6 − x: g(2) = 2, then f(2) = 4, so f(g(2)) = 4.")}
  ${watchOut([
    "f(g(x)) means substitute g(x) for x in f, not multiply f(x)·g(x).",
    "Work from the inside out: the function next to x is applied first.",
    "f(g(x)) and g(f(x)) are usually different.",
    "The domain of a composite can be smaller than the simplified formula suggests: check the inner function's domain.",
    "Bracket the substitution: f(x) = 3x − 1 gives f(x² + 2) = 3(x² + 2) − 1.",
  ])}`),

  examples([
    ["Evaluate both orders", S`\(f(x)=3x-1\) and \(g(x)=x^2+2\). Find \(f(g(2))\) and \(g(f(2))\).`,
      [S`<b>Rule.</b> Work from the inside out: the function next to the number acts first, and its output becomes the input of the outer function.`,
        S`<b>\(f(g(2))\): inner.</b> \(g(2)=2^2+2=6\).`,
        S`<b>\(f(g(2))\): outer.</b> \(f(6)=3(6)-1=17\).`,
        S`<b>\(g(f(2))\): inner.</b> \(f(2)=3(2)-1=5\).`,
        S`<b>\(g(f(2))\): outer.</b> \(g(5)=5^2+2=27\).`,
        S`<b>Conclusion.</b> \(17\ne27\), so the order of composition matters. On the graph, follow the output of one curve to the input of the other.`],
      S`\(17\) and \(27\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -2, ymax: 30 }, curves: [{ f: (x) => x * x + 2, color: "blue" }], lines: [{ m: 3, b: -1, color: "violet" }], points: [{ x: 2, y: 6, label: "g(2) = 6", color: "blue" }, { x: 6, y: 17, label: "f(6) = 17", color: "amber" }, { x: 5, y: 27, label: "g(5) = 27", color: "amber" }, { x: 2, y: 5, label: "f(2) = 5", color: "violet" }], step: { x: 1, y: 2 } })],
    ["Find the composite formulas", S`For the same \(f\) and \(g\), find \(f(g(x))\) and \(g(f(x))\).`,
      [S`<b>Rule.</b> To find \(f(g(x))\), replace every \(x\) in \(f\) with the whole expression \(g(x)\), in brackets.`,
        S`<b>\(f(g(x))\).</b> \(f(x)=3x-1\) becomes \(3(x^2+2)-1\). Expand: \(3x^2+6-1=3x^2+5\).`,
        S`<b>\(g(f(x))\).</b> \(g(x)=x^2+2\) becomes \((3x-1)^2+2\). The whole of \(3x-1\) is squared.`,
        S`<b>Expand.</b> \((3x-1)^2=9x^2-6x+1\), so \(g(f(x))=9x^2-6x+3\).`,
        S`<b>Check with \(x=2\).</b> \(3(4)+5=17\) ✓ and \(36-12+3=27\) ✓, matching Example 1.`,
        S`<b>On the graph.</b> These are two different parabolas, one for each order.`],
      S`\(3x^2+5\) and \(9x^2-6x+3\)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: 0, ymax: 35 }, curves: [{ f: (x) => 3 * x * x + 5, color: "violet" }, { f: (x) => 9 * x * x - 6 * x + 3, color: "blue" }], points: [{ x: 2, y: 17, label: "(2, 17)", color: "amber" }, { x: 2, y: 27, label: "(2, 27)", color: "amber" }], step: { x: 1, y: 5 } })],
    ["Domain of a composite", S`\(f(x)=\sqrt x\) and \(g(x)=4-x^2\). Find \(f(g(x))\), \(g(f(x))\) and the domain of each.`,
      [S`<b>Rule.</b> \(x\) must be allowed by the inner function, and the inner output must be allowed by the outer function.`,
        S`<b>\(f(g(x))=\sqrt{4-x^2}\).</b> The inner \(4-x^2\) accepts every \(x\), but the root needs \(4-x^2\ge0\), so \(x^2\le4\) and \(-2\le x\le2\).`,
        S`<b>Its graph.</b> \(y=\sqrt{4-x^2}\) gives \(y^2+x^2=4\) with \(y\ge0\): the upper half of a circle of radius \(2\).`,
        S`<b>\(g(f(x))=4-(\sqrt x)^2=4-x\).</b> The simplified formula looks defined everywhere.`,
        S`<b>But the inner function comes first.</b> \(\sqrt x\) needs \(x\ge0\), so the domain is \(x\ge0\). Simplifying does not remove this restriction.`,
        S`<b>Check.</b> \(g(f(-1))\) would need \(\sqrt{-1}\), which is not real, even though \(4-(-1)=5\) ✓. The blue graph is only part of a line.`],
      S`\(\sqrt{4-x^2}\), \(-2\le x\le2\); \(4-x\), \(x\ge0\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 4 - x * x)), a: -2, b: 2, color: "violet" }, { f: (x) => 4 - x, a: 0, color: "blue" }], points: [{ x: 0, y: 2, label: "(0, 2)", color: "amber" }, { x: 0, y: 4, label: "(0, 4)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Decompose", S`Write each as \(f(g(x))\): \(h(x)=(2x+5)^3\), \(k(x)=\log(x^2+1)\), \(m(x)=2^{\sin x}\).`,
      [S`<b>Method.</b> Imagine calculating the function for a number. The first thing you calculate is the inner function \(g\); what you do to that result is the outer function \(f\).`,
        S`<b>\(h\).</b> First compute \(2x+5\), then cube it: \(g(x)=2x+5\), \(f(x)=x^3\).`,
        S`<b>\(k\).</b> First compute \(x^2+1\), then take the logarithm: \(g(x)=x^2+1\), \(f(x)=\log x\).`,
        S`<b>\(m\).</b> First compute \(\sin x\), then use it as an exponent of \(2\): \(g(x)=\sin x\), \(f(x)=2^x\).`,
        S`<b>Check \(h\) at \(x=0\).</b> \(g(0)=5\) and \(f(5)=125\), and directly \((0+5)^3=125\) ✓`,
        S`<b>Check \(k\) at \(x=3\).</b> \(g(3)=10\) and \(f(10)=1\), and directly \(\log(9+1)=1\) ✓. The graph shows \(k\): since \(x^2+1\ge1\), its lowest value is \(\log1=0\).`],
      S`\(h:\ x^3\circ(2x+5)\); \(k:\ \log x\circ(x^2+1)\); \(m:\ 2^x\circ\sin x\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 2 }, curves: [{ f: (x) => Math.log10(x * x + 1), color: "violet" }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "amber" }, { x: 0, y: 0, label: "(0, 0)", color: "blue" }], step: { x: 1, y: 0.5 } })],
    ["A composite in context", S`A car travels \(d(t)=80t\) km in \(t\) hours and uses \(F(d)=0.07d\) litres of fuel for \(d\) km. Find \(F(d(t))\), the fuel used in \(3\) h, and when \(40\) L has been used.`,
      [S`<b>Why a composite?</b> Fuel depends on distance, and distance depends on time. So time goes in first, distance comes out, and that goes into the fuel function.`,
        S`<b>Compose.</b> \(F(d(t))=0.07(80t)=5.6t\) litres after \(t\) hours.`,
        S`<b>Three hours.</b> \(5.6(3)=16.8\) L.`,
        S`<b>Forty litres.</b> \(5.6t=40\), so \(t=\dfrac{40}{5.6}\approx7.14\) h.`,
        S`<b>Check by steps.</b> \(d(3)=240\) km and \(F(240)=0.07(240)=16.8\) L ✓`,
        S`<b>Check the units.</b> \(\frac{\text{L}}{\text{km}}\times\frac{\text{km}}{\text{h}}=\frac{\text{L}}{\text{h}}\), so \(5.6\) is litres per hour ✓`],
      S`\(5.6t\); \(16.8\) L; about \(7.1\) h`,
      plane({ view: { xmin: -0.5, xmax: 10, ymin: -3, ymax: 60 }, lines: [{ m: 5.6, b: 0, color: "violet" }, { m: 0, b: 40, color: "blue", dash: true }], points: [{ x: 3, y: 16.8, label: "(3, 16.8)", color: "amber" }, { x: 7.14, y: 40, label: "(7.14, 40)", color: "amber" }], step: { x: 1, y: 10 } })],
  ]),

  practice([
    q("evaluate", S`\(f(x)=x+4\), \(g(x)=2x^2\). Find \(f(g(-1))\).`, num(6), "g(−1) = 2.", [S`\(f(2)=6\).`], S`\(6\)`),
    q("evaluate", S`With the same functions, find \(g(f(-1))\).`, num(18), "f(−1) = 3.", [S`\(g(3)=18\).`], S`\(18\)`),
    q("formula", S`\(f(x)=x^2\), \(g(x)=x-3\). Which is \(f(g(x))\)?`, choice(["(x − 3)²", "x² − 3", "x² − 3x", "(x − 3)x²"], 0), "Substitute g(x) into f.", [S`\(f(x-3)=(x-3)^2\).`], S`\((x-3)^2\)`),
    q("decompose", S`\(h(x)=\sqrt{5x-1}=f(g(x))\). Which is \(g\)?`, choice(["5x − 1", "√x", "5x", "√(5x)"], 0), "The inner function is calculated first.", [S`\(g(x)=5x-1\), \(f(x)=\sqrt x\).`], S`\(g(x)=5x-1\)`),
    q("context", S`\(d(t)=60t\) km and \(F(d)=0.05d\) L. How many litres are used in \(4\) h?`, num(12), "F(d(4)).", [S`\(d(4)=240\), \(F(240)=12\).`], S`\(12\)`),
  ]),

  ...hard([
    ["A function and its inverse", S`\(f(x)=2^x\) and \(g(x)=\log_2x\). Find \(f(g(x))\) and \(g(f(x))\) with their domains.`,
      [S`<b>\(f(g(x))=2^{\log_2x}\):</b> \(\log_2x\) is the exponent that gives \(x\), so this is \(x\); the inner \(\log_2x\) needs \(x>0\).`,
        S`<b>\(g(f(x))=\log_2(2^x)=x\):</b> \(2^x>0\) for every \(x\), so the domain is all real \(x\).`,
        S`<b>Meaning:</b> composing a function with its inverse undoes it: \(f(f^{-1}(x))=x\).`,
        S`<b>Check:</b> \(2^{\log_28}=2^3=8\) ✓ and \(\log_2(2^{-1})=-1\) ✓`],
      S`\(x\) for \(x>0\); \(x\) for all real \(x\)`],
    ["Solve a composite equation", S`\(f(x)=x^2-2\) and \(g(x)=x+1\). Solve \(f(g(x))=7\).`,
      [S`<b>Build the composite:</b> \(f(g(x))=(x+1)^2-2\).`,
        S`<b>Set equal to 7:</b> \((x+1)^2=9\Rightarrow x+1=\pm3\).`,
        S`<b>Solve:</b> \(x=2\) or \(x=-4\).`,
        S`<b>Check:</b> \(g(2)=3\), \(f(3)=7\) ✓; \(g(-4)=-3\), \(f(-3)=7\) ✓`],
      S`\(x=2\) or \(x=-4\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -3, ymax: 10 }, curves: [{ f: (x) => (x + 1) ** 2 - 2, color: "violet" }], lines: [{ m: 0, b: 7, color: "blue", dash: true }], points: [{ x: 2, y: 7, label: "(2, 7)", color: "amber" }, { x: -4, y: 7, label: "(−4, 7)", color: "amber" }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", S`\(f(x)=2x-3\). Find \(f(f(5))\).`, num(11), "f(f(x)) = 4x − 9.", [S`\(f(5)=7\), \(f(7)=11\).`], S`\(11\)`),
    q("hard", S`\(f(x)=x+3\) and \(f(g(x))=x^2+5\). Find \(g(3)\).`, num(11), "g(x) + 3 = x² + 5.", [S`\(g(x)=x^2+2\), so \(g(3)=11\).`], S`\(11\)`),
    q("hard", S`\(f(x)=\dfrac{1}{x-1}\). Find \(f(f(3))\).`, num(-2), "f(3) = 1/2.", [S`\(f\left(\frac12\right)=\frac{1}{-1/2}=-2\).`], S`\(-2\)`),
  ]),

  wrapUp({
    qas: [
      ["What does f(g(x)) mean?", "Apply g to x, then apply f to the result."],
      ["Is f(g(x)) the same as g(f(x))?", "Usually not; check one value to see."],
      ["How do I find the domain of f(g(x))?", "x must be in the domain of g, and g(x) must be in the domain of f."],
      ["How do I decompose a function?", "Name the expression calculated first as g; the rest is f."],
      ["What is f(f⁻¹(x))?", "x: a function and its inverse undo each other."],
    ],
    summary: [
      "(f ∘ g)(x) = f(g(x)): inside out.",
      "Order matters.",
      "Domain: inner domain, then outer restriction.",
      "f(f⁻¹(x)) = x.",
    ],
    next: "8.4 solves inequalities that compare two functions, such as f(x) > g(x).",
  }),
];
