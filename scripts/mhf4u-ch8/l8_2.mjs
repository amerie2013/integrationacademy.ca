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
      [S`<b>Rule.</b> \((fg)(x)=f(x)\cdot g(x)\): at each \(x\), multiply the two outputs.`,
        S`<b>Expand.</b> \((x-3)(x+2)=x^2+2x-3x-6=x^2-x-6\).`,
        S`<b>Zeros.</b> A product is zero exactly when one factor is zero: \(x-3=0\) or \(x+2=0\), so \(x=3\) or \(x=-2\).`,
        S`<b>Sign.</b> For \(x>3\) both factors are positive, so the product is positive. For \(-2<x<3\) the signs differ, so it is negative. For \(x<-2\) both are negative, so it is positive.`,
        S`<b>Check at \(x=4\).</b> \(f(4)g(4)=1\cdot6=6\), and \(16-4-6=6\) ✓. Multiplying two lines gives a parabola with the same zeros as the lines ✓`],
      S`\(x^2-x-6\); zeros \(3\) and \(-2\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -8, ymax: 10 }, curves: [{ f: (x) => (x - 3) * (x + 2), color: "violet" }], lines: [{ m: 1, b: -3, color: "blue" }, { m: 1, b: 2, color: "gray" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)", color: "amber" }, { x: 4, y: 6, label: "(4, 6)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["A quotient with a hole", S`For \(f(x)=x^2-4\) and \(g(x)=x-2\), find \(\left(\frac fg\right)(x)\) and its domain, and describe the graph.`,
      [S`<b>Domain first.</b> A quotient needs \(g(x)\ne0\). Here \(x-2=0\) at \(x=2\), so \(x\ne2\). This must be decided before simplifying.`,
        S`<b>Factor.</b> \(x^2-4\) is a difference of squares: \(\dfrac{(x-2)(x+2)}{x-2}\).`,
        S`<b>Cancel.</b> For \(x\ne2\), \(\dfrac{x-2}{x-2}=1\), so the quotient equals \(x+2\).`,
        S`<b>Hole or asymptote?</b> At \(x=2\) both top and bottom are \(0\), and the factor cancels, so there is no asymptote. The graph is the line \(y=x+2\) with one point missing: \((2,\,4)\).`,
        S`<b>Check at \(x=3\).</b> \(\frac{9-4}{3-2}=5\), and \(3+2=5\) ✓. Check close to the hole at \(x=2.01\): \(\frac{0.0401}{0.01}=4.01\), which is close to \(4\) ✓`],
      S`\(x+2\), \(x\ne2\); line with a hole at \((2,4)\)`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x + 2, color: "violet" }], points: [{ x: 2, y: 4, label: "hole (2, 4)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Sign of a product", S`Describe \(y=(x+1)2^x\): its zero, where it is negative, and its values at \(x=-3,-2,0,1\).`,
      [S`<b>Sign of each factor.</b> \(2^x>0\) for every \(x\), so it never changes the sign. \(x+1\) is negative for \(x<-1\) and positive for \(x>-1\).`,
        S`<b>Sign of the product.</b> It has the same sign as \(x+1\): negative for \(x<-1\), zero at \(x=-1\), positive for \(x>-1\).`,
        S`<b>Values.</b> \(y(-3)=-2\cdot\frac18=-0.25\); \(y(-2)=-1\cdot\frac14=-0.25\); \(y(0)=1\cdot1=1\); \(y(1)=2\cdot2=4\).`,
        S`<b>Left end.</b> As \(x\to-\infty\), \(2^x\) halves with each step left while \(x+1\) only changes by \(1\). So the product approaches \(0\) from below: \(y(-6)=-\frac5{64}\approx-0.08\).`,
        S`<b>Right end.</b> Both factors grow, so the product grows quickly. The graph agrees with every statement above ✓`],
      S`zero at \(-1\); negative for \(x<-1\); \(-0.25,\ -0.25,\ 1,\ 4\)`,
      plane({ view: { xmin: -6, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 1, color: "gray" }, { f: (x) => 2 ** x, color: "blue" }, { f: (x) => (x + 1) * 2 ** x, color: "violet" }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "amber" }, { x: 1, y: 4, label: "(1, 4)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["A damped spring", S`A spring's displacement is \(d(t)=5(0.7)^t\cos(2\pi t)\) cm. Find \(d(1)\), \(d(2)\), and when the maximum displacement first drops below \(1\) cm.`,
      [S`<b>Read the two factors.</b> The envelope \(5(0.7)^t\) is the size of the swing, losing \(30\%\) each second. The factor \(\cos(2\pi t)\) has period \(\frac{2\pi}{2\pi}=1\) s and swings between \(-1\) and \(1\).`,
        S`<b>Values.</b> \(\cos(2\pi)=\cos(4\pi)=1\), so \(d(1)=5(0.7)=3.5\) and \(d(2)=5(0.49)=2.45\). At whole seconds, the curve touches the envelope.`,
        S`<b>Why use the envelope?</b> The largest possible displacement at time \(t\) is the envelope, so the condition is \(5(0.7)^t<1\).`,
        S`<b>Solve.</b> \(0.7^t<0.2\). Take logs: \(t\log0.7<\log0.2\). Dividing by \(\log0.7\), which is negative, reverses the inequality: \(t>\dfrac{\log0.2}{\log0.7}\approx4.51\) s.`,
        S`<b>Check.</b> \(5(0.7)^{4.51}\approx1.00\) ✓. The graph stays between the gray curves \(\pm5(0.7)^t\) ✓`],
      S`\(3.5\) cm, \(2.45\) cm; after about \(4.5\) s`,
      plane({ view: { xmin: -0.2, xmax: 6, ymin: -5.5, ymax: 5.5 }, curves: [{ f: (t) => 5 * 0.7 ** t, a: 0, color: "gray" }, { f: (t) => -5 * 0.7 ** t, a: 0, color: "gray" }, { f: (t) => 5 * 0.7 ** t * Math.cos(2 * Math.PI * t), a: 0, color: "violet" }], points: [{ x: 1, y: 3.5, label: "(1, 3.5)", color: "amber" }, { x: 2, y: 2.45, label: "(2, 2.45)", color: "amber" }], step: { x: 0.5, y: 1 } })],
    ["tan x as a quotient", S`Use \(\tan x=\dfrac{\sin x}{\cos x}\) to find the zeros, asymptotes and \(\tan\frac\pi4\) on \(0\le x\le2\pi\).`,
      [S`<b>Zeros.</b> A quotient is zero where its numerator is zero and its denominator is not: \(\sin x=0\) at \(x=0,\ \pi,\ 2\pi\), and \(\cos x=\pm1\) there.`,
        S`<b>Excluded values.</b> The denominator is zero where \(\cos x=0\): \(x=\frac\pi2,\ \frac{3\pi}2\).`,
        S`<b>Asymptote or hole?</b> At those values the numerator is \(\pm1\), not \(0\). A non-zero number divided by something close to \(0\) becomes very large, so these are vertical asymptotes.`,
        S`<b>Value.</b> \(\tan\frac\pi4=\dfrac{\sqrt2/2}{\sqrt2/2}=1\).`,
        S`<b>Sign check.</b> In quadrant II, \(\sin x>0\) and \(\cos x<0\), so \(\tan x<0\). In quadrant III both are negative, so \(\tan x>0\). The graph agrees ✓`],
      S`zeros \(0,\pi,2\pi\); asymptotes \(x=\frac\pi2,\frac{3\pi}2\); \(\tan\frac\pi4=1\)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -5, ymax: 5 }, curves: [{ f: Math.tan, a: 0, b: Math.PI / 2 - 0.1, color: "violet" }, { f: Math.tan, a: Math.PI / 2 + 0.1, b: 1.5 * Math.PI - 0.1, color: "violet" }, { f: Math.tan, a: 1.5 * Math.PI + 0.1, b: 2 * Math.PI, color: "violet" }], vlines: [{ x: Math.PI / 2, color: "red", dash: true }, { x: 1.5 * Math.PI, color: "red", dash: true }], points: [{ x: Math.PI / 4, y: 1, label: "(π/4, 1)", color: "amber" }, { x: Math.PI, y: 0, label: "(π, 0)", color: "blue" }], step: { x: 0.5, y: 1 } })],
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
