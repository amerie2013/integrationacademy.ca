// MHF4U 8.2 — Products and Quotients of Functions (NEW): algebraic products and quotients, domains with
// excluded values and holes, sign analysis, damped oscillations and tan x = sin x / cos x.
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, mg } from "./lib.mjs";

export const TITLE = "8.2 Products and Quotients of Functions";
export const ID = "6d4f0008-0001-4001-8001-000000000802";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Products and Quotients of Functions",
    overview: S`Multiplying or dividing two functions builds many of the functions in this course: a polynomial is a product of linear factors, \(\tan x\) is the quotient \(\frac{\sin x}{\cos x}\), and a vibrating spring that slowly stops is an exponential times a cosine. This lesson finds products and quotients, their domains, zeros and signs, and reads their graphs from the graphs of the two parts.`,
    goals: [
      "find \\((fg)(x)\\) and \\(\\left(\\frac fg\\right)(x)\\) from equations, tables and graphs;",
      "state the domain of a quotient, excluding zeros of the denominator;",
      "predict zeros and signs of a product from its factors;",
      "recognize vertical asymptotes and holes of a quotient;",
      "model damped oscillations as a product.",
    ],
    curriculum: "D2.1 (determine key features of graphs of functions created by multiplying or dividing functions), D2.2 (recognize real-world applications of combinations of functions, such as damped oscillations)",
    prior: [
      [S`Expand \((x-3)(x+2)\).`, S`\(x^2-x-6\).`],
      [S`When is \(\frac{1}{x-5}\) not defined?`, S`At \(x=5\).`],
      [S`Simplify \(\frac{x^2-9}{x-3}\) for \(x\ne3\).`, S`\(x+3\).`],
    ],
    words: [
      ["Product of functions", "\\((fg)(x)=f(x)\\cdot g(x)\\)", "\\((x+1)\\cdot2^x\\)"],
      ["Quotient of functions", "\\(\\left(\\frac fg\\right)(x)=\\frac{f(x)}{g(x)},\\ g(x)\\ne0\\)", "\\(\\tan x=\\frac{\\sin x}{\\cos x}\\)"],
      ["Hole", "a single missing point where a common factor cancels", "\\(\\frac{x^2-4}{x-2}\\) at \\(x=2\\)"],
      ["Damped oscillation", "a wave whose amplitude decays", "\\(5(0.7)^t\\cos(2\\pi t)\\)"],
    ],
  }),

  section("📌 Reading a product or quotient", S`
  ${table(["Feature", "Product f·g", "Quotient f/g"], [
    ["Domain", "where both exist", "where both exist AND \\(g(x)\\ne0\\)"],
    ["Zeros", "zeros of \\(f\\) or of \\(g\\)", "zeros of \\(f\\) (where \\(g\\ne0\\))"],
    ["Sign", "same signs ⇒ positive; opposite ⇒ negative", "same rule as the product"],
    ["Special points", "\\(|f|\\le1\\) ⇒ \\(|fg|\\le|g|\\)", "\\(g\\to0\\), \\(f\\ne0\\): vertical asymptote; both \\(0\\): possible hole"],
  ])}
  ${keyIdea(S`\[(fg)(x)=f(x)\,g(x),\qquad \left(\frac fg\right)(x)=\frac{f(x)}{g(x)}\ \ (g(x)\ne0).\] Multiply or divide the <b>outputs</b> at each \(x\).`)}`),

  mg([{ expr: "5*a^x", label: "envelope 5aˣ", color: "#64748b" }, { expr: "-5*a^x", label: "−5aˣ", color: "#64748b" }, { expr: "5*a^x*cos(2*pi*x)", label: "d = 5aˣ cos(2πx)", color: "#7c3aed" }], { param: "a", paramMin: 0.3, paramMax: 1, paramInit: 0.7, xMin: 0, xMax: 6, yMin: -6, yMax: 6, caption: "Slide a (the decay factor). The product of an exponential and a cosine stays between the envelopes ±5aˣ; a = 1 gives no damping." }),

  section("📌 Products from their factors", S`
  <p>For \(y=(x+1)\cdot2^x\): the factor \(x+1\) is negative for \(x<-1\) and positive after; \(2^x\) is always positive. So the product is negative for \(x<-1\), zero at \(x=-1\), and positive after. As \(x\to-\infty\), \(2^x\) shrinks faster than \(x+1\) grows, so the product approaches \(0\).</p>
  ${plane({ view: { xmin: -6, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 1, color: "gray" }, { f: (x) => 2 ** x, color: "blue" }, { f: (x) => (x + 1) * 2 ** x, color: "violet" }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "amber" }, { x: -2, y: -0.25, label: "(−2, −0.25)", color: "red" }], step: { x: 1, y: 1 } }, "Gray y = x + 1, blue y = 2ˣ, violet the product (x + 1)2ˣ.")}
  ${watchOut([
    "(fg)(x) means multiply outputs, not compose: (fg)(2) = f(2)·g(2).",
    "Cancelling a common factor does not change the domain: (x² − 4)/(x − 2) still excludes x = 2.",
    "A zero of the denominator is never in the domain of a quotient.",
    "The product of two increasing functions need not be increasing (try x·x on negative x).",
    "For a damped wave, the amplitude is the envelope a·bᵗ, not the whole product.",
  ])}`),

  examples([
    ["Multiply two functions", S`For \(f(x)=x-3\) and \(g(x)=x+2\), find \((fg)(x)\) and its zeros.`,
      [S`<b>Rule.</b> \((fg)(x)=f(x)g(x)=(x-3)(x+2)\).`,
        S`<b>Expand:</b> \(x^2+2x-3x-6=x^2-x-6\).`,
        S`<b>Zeros:</b> a product is zero when a factor is zero: \(x=3\) or \(x=-2\).`,
        S`<b>Check at \(x=4\):</b> \(f(4)g(4)=1\cdot6=6\) and \(16-4-6=6\) ✓`],
      S`\(x^2-x-6\); zeros \(3\) and \(-2\)`],
    ["A quotient with a hole", S`For \(f(x)=x^2-4\) and \(g(x)=x-2\), find \(\left(\frac fg\right)(x)\) and its domain, and describe the graph.`,
      [S`<b>Domain first:</b> \(g(x)=0\) at \(x=2\), so \(x\ne2\).`,
        S`<b>Simplify:</b> \(\dfrac{(x-2)(x+2)}{x-2}=x+2\) for \(x\ne2\).`,
        S`<b>Graph:</b> the line \(y=x+2\) with a hole at \((2,4)\): the factor cancels, so there is no asymptote.`,
        S`<b>Check at \(x=3\):</b> \(\frac{9-4}{1}=5=3+2\) ✓`],
      S`\(x+2\), \(x\ne2\); line with a hole at \((2,4)\)`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x + 2, color: "violet" }], points: [{ x: 2, y: 4, label: "hole (2, 4)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Sign of a product", S`Describe \(y=(x+1)2^x\): its zero, where it is negative, and its values at \(x=-3,-2,0,1\).`,
      [S`<b>Sign of each factor:</b> \(2^x>0\) always; \(x+1<0\) for \(x<-1\).`,
        S`<b>Product sign:</b> negative for \(x<-1\), zero at \(x=-1\), positive for \(x>-1\).`,
        S`<b>Values:</b> \(y(-3)=-2\cdot\frac18=-0.25\), \(y(-2)=-1\cdot\frac14=-0.25\), \(y(0)=1\), \(y(1)=4\).`,
        S`<b>Check the trend:</b> as \(x\to-\infty\) the values approach \(0\) from below (e.g. \(y(-6)=-5/64\approx-0.08\)) ✓`],
      S`zero at \(-1\); negative for \(x<-1\); \(-0.25,\ -0.25,\ 1,\ 4\)`],
    ["A damped spring", S`A spring's displacement is \(d(t)=5(0.7)^t\cos(2\pi t)\) cm. Find \(d(1)\), \(d(2)\), and when the maximum displacement first drops below \(1\) cm.`,
      [S`<b>Product of two parts:</b> the envelope \(5(0.7)^t\) sets the size; \(\cos(2\pi t)\) makes it swing once per second.`,
        S`<b>Values:</b> \(\cos(2\pi)=\cos(4\pi)=1\), so \(d(1)=5(0.7)=3.5\) and \(d(2)=5(0.49)=2.45\).`,
        S`<b>Envelope below 1:</b> \(5(0.7)^t<1\Rightarrow0.7^t<0.2\Rightarrow t>\dfrac{\log0.2}{\log0.7}\approx4.51\) s.`,
        S`<b>Check:</b> \(5(0.7)^{4.51}\approx1.00\) ✓`],
      S`\(3.5\) cm, \(2.45\) cm; after about \(4.5\) s`,
      plane({ view: { xmin: -0.2, xmax: 6, ymin: -5.5, ymax: 5.5 }, curves: [{ f: (t) => 5 * 0.7 ** t, a: 0, color: "gray" }, { f: (t) => -5 * 0.7 ** t, a: 0, color: "gray" }, { f: (t) => 5 * 0.7 ** t * Math.cos(2 * Math.PI * t), a: 0, color: "violet" }], points: [{ x: 1, y: 3.5, label: "(1, 3.5)", color: "amber" }, { x: 2, y: 2.45, label: "(2, 2.45)", color: "amber" }], step: { x: 0.5, y: 1 } })],
    ["tan x as a quotient", S`Use \(\tan x=\dfrac{\sin x}{\cos x}\) to find the zeros, asymptotes and \(\tan\frac\pi4\) on \(0\le x\le2\pi\).`,
      [S`<b>Zeros of a quotient:</b> where the numerator is zero: \(\sin x=0\Rightarrow x=0,\ \pi,\ 2\pi\).`,
        S`<b>Excluded values:</b> where the denominator is zero: \(\cos x=0\Rightarrow x=\frac\pi2,\ \frac{3\pi}2\). The numerator is \(\pm1\) there, so these are vertical asymptotes.`,
        S`<b>Value:</b> \(\tan\frac\pi4=\dfrac{\sqrt2/2}{\sqrt2/2}=1\).`,
        S`<b>Sign check:</b> in quadrant II, \(\sin>0\) and \(\cos<0\), so \(\tan<0\) ✓`],
      S`zeros \(0,\pi,2\pi\); asymptotes \(x=\frac\pi2,\frac{3\pi}2\); \(\tan\frac\pi4=1\)`],
  ]),

  practice([
    q("product", S`\(f(x)=2x+1\), \(g(x)=x-3\). Find \((fg)(2)\).`, num(-5), "f(2)·g(2).", [S`\(5\cdot(-1)=-5\).`], S`\(-5\)`),
    q("domain", S`What is the domain of \(\dfrac{x+5}{x^2-9}\)?`, choice(["x ≠ 3 and x ≠ −3", "x ≠ −5", "x ≠ 9", "all real x"], 0), "The denominator cannot be zero.", [S`\(x^2-9=0\Rightarrow x=\pm3\).`], S`\(x\ne\pm3\)`),
    q("zeros", S`How many zeros does \(y=x(x^2-1)\) have?`, num(3), "Zeros of each factor.", [S`\(x=0,\ 1,\ -1\).`], S`\(3\)`),
    q("quotient", S`\(f(x)=x^2+1\), \(g(x)=2x-3\). Find \(\left(\frac fg\right)(4)\).`, num(3.4, 0.0001), "17 ÷ 5.", [S`\(\frac{17}5=3.4\).`], S`\(3.4\)`),
    q("damped", S`\(A(t)=6(0.5)^t\) is the envelope of a damped wave. Find \(A(3)\).`, num(0.75, 0.0001), "6 × 1/8.", [S`\(6(0.125)=0.75\).`], S`\(0.75\)`),
  ]),

  ...hard([
    ["Symmetry of a product", S`Show that \(y=x^2\sin x\) is odd, and explain what that says about its graph.`,
      [S`<b>Factors:</b> \(x^2\) is even (\((-x)^2=x^2\)); \(\sin x\) is odd (\(\sin(-x)=-\sin x\)).`,
        S`<b>Test:</b> \(y(-x)=(-x)^2\sin(-x)=x^2(-\sin x)=-y(x)\), so \(y\) is odd.`,
        S`<b>Rule:</b> even × odd is odd (and even × even, odd × odd are even).`,
        S`<b>Graph:</b> symmetric about the origin, e.g. \(y\left(\frac\pi2\right)=\frac{\pi^2}4\approx2.47\) and \(y\left(-\frac\pi2\right)\approx-2.47\) ✓`],
      S`odd: rotational symmetry about the origin`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -25, ymax: 25 }, curves: [{ f: (x) => x * x * Math.sin(x), color: "violet" }], points: [{ x: Math.PI / 2, y: 2.47, label: "(π/2, 2.47)", color: "amber" }], step: { x: 1, y: 5 } })],
    ["Sign chart for a quotient", S`Find where \(y=\dfrac{x^2-1}{x-2}\) is positive.`,
      [S`<b>Critical values:</b> zeros of the numerator \(x=\pm1\); zero of the denominator \(x=2\) (excluded, asymptote).`,
        S`<b>Signs on each interval:</b> \(x<-1\): \((+)/(-)<0\); \(-1<x<1\): \((-)/(-)>0\); \(1<x<2\): \((+)/(-)<0\); \(x>2\): \((+)/(+)>0\).`,
        S`<b>Answer:</b> positive for \(-1<x<1\) or \(x>2\).`,
        S`<b>Check \(x=0\):</b> \(\frac{-1}{-2}=0.5>0\) ✓; \(x=1.5\): \(\frac{1.25}{-0.5}=-2.5<0\) ✓`],
      S`\(-1<x<1\) or \(x>2\)`],
  ], [
    q("hard", S`A wave's envelope is \(8(0.6)^t\). When does it first fall below \(1\)? (two decimals)`, num(Math.log10(1 / 8) / Math.log10(0.6), 0.01), "0.6ᵗ = 1/8.", [S`\(t=\frac{\log(1/8)}{\log0.6}\approx4.07\).`], S`\(\approx4.07\)`),
    q("hard", S`\(f(x)=x+2\), \(g(x)=x^2-2x+4\). Find \((fg)(2)\).`, num(16), "fg = x³ + 8.", [S`\(4\cdot4=16\) (and \(2^3+8=16\)).`], S`\(16\)`),
    q("hard", S`How many distinct zeros does \(y=x\sin x\) have on \(-2\pi\le x\le2\pi\)?`, num(5), "x = 0 or sin x = 0.", [S`\(-2\pi,-\pi,0,\pi,2\pi\).`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["What is (fg)(x)?", "f(x)·g(x): multiply the outputs."],
      ["What is the domain of f/g?", "Where both exist, excluding every x with g(x) = 0."],
      ["Where are the zeros of a product?", "Where either factor is zero."],
      ["When does a quotient have a hole instead of an asymptote?", "When a common factor of numerator and denominator cancels."],
      ["Why is a damped wave a product?", "An exponential envelope multiplies a sinusoid, shrinking its amplitude."],
    ],
    summary: [
      "(fg)(x) = f(x)g(x); (f/g)(x) = f(x)/g(x), g ≠ 0.",
      "Zeros of fg: zeros of f or g.",
      "Signs multiply: same ⇒ +, opposite ⇒ −.",
      "Damped wave: a·bᵗ × sinusoid.",
    ],
    next: "8.3 composes functions: the output of one becomes the input of another.",
  }),
];
