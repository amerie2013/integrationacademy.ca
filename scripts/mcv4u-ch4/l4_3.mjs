// MCV4U 4.3 — Differentiation Rules for Sinusoidal Functions (NEW lesson): the chain rule for sin(kx + c), cos(g(x))
// and powers such as sin²x, transformed sinusoids A·sin(kx + c) + d, products, tangent lines and extrema
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.3 Differentiation Rules for Sinusoidal Functions";
export const ID = "6d4fc004-0001-4001-8001-000000000403";

const S = String.raw;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "🎛️",
    title: "Differentiation Rules for Sinusoidal Functions",
    overview: S`Real sinusoidal models are transformed: \(y=A\sin(kx+c)+d\). The chain rule handles them. The outer function is sine, the inner is \(kx+c\) with derivative \(k\), so \(\dfrac{d}{dx}\left[A\sin(kx+c)+d\right]=Ak\cos(kx+c)\). The amplitude \(A\) and the "speed" \(k\) multiply the slope; the phase shift \(c\) and the vertical shift \(d\) do not change how steep the curve is. The same idea differentiates \(\sin(x^2)\), \(\cos^3x\) and \(\sqrt{\sin x}\).`,
    goals: [
      "differentiate sin(g(x)) and cos(g(x)) with the chain rule;",
      "differentiate powers of trigonometric functions such as sin²x;",
      "differentiate transformed sinusoids A sin(kx + c) + d;",
      "combine the chain rule with the product and quotient rules;",
      "find tangent lines and extrema of sinusoidal functions.",
    ],
    curriculum: "A3.4 (verify the chain rule and use it to determine derivatives of composite functions involving sinusoidal functions)",
    prior: [
      [S`\(\frac{d}{dx}(3x-1)^5\)?`, S`\(15(3x-1)^4\).`],
      [S`\(\frac{d}{dx}\sin x\)?`, S`\(\cos x\).`],
      [S`Period of \(y=\sin(2x)\)?`, S`\(\pi\).`],
    ],
    words: [
      ["Chain rule", "\\(\\frac{d}{dx}f(g(x))=f'(g(x))\\,g'(x)\\)", ""],
      ["sin(g(x))", "\\(\\cos(g(x))\\cdot g'(x)\\)", "\\((\\sin3x)'=3\\cos3x\\)"],
      ["sinⁿx", "\\(n\\sin^{n-1}x\\cdot\\cos x\\)", "\\((\\sin^2x)'=2\\sin x\\cos x\\)"],
      ["Transformed sinusoid", "\\(A\\sin(kx+c)+d\\)", "derivative \\(Ak\\cos(kx+c)\\)"],
    ],
  }),

  section("📌 The chain rule for trigonometric functions", S`
  ${table(["Function", "Outer", "Inner", "Derivative"], [
    ["\\(\\sin(3x)\\)", "\\(\\sin u\\)", "\\(3x\\)", "\\(3\\cos(3x)\\)"],
    ["\\(\\cos(x^2)\\)", "\\(\\cos u\\)", "\\(x^2\\)", "\\(-2x\\sin(x^2)\\)"],
    ["\\(\\sin^2x\\)", "\\(u^2\\)", "\\(\\sin x\\)", "\\(2\\sin x\\cos x\\)"],
    ["\\(A\\sin(kx+c)+d\\)", "\\(A\\sin u+d\\)", "\\(kx+c\\)", "\\(Ak\\cos(kx+c)\\)"],
  ])}
  ${plane({ view: { xmin: -0.2, xmax: 2 * PI + 0.2, ymin: -7, ymax: 7 }, curves: [{ f: (x) => 3 * Math.sin(2 * x), a: 0, b: 2 * PI, color: "violet" }, { f: (x) => 6 * Math.cos(2 * x), a: 0, b: 2 * PI, color: "blue" }], step: { x: 0.5, y: 1 } }, "y = 3 sin(2x) (violet) and its derivative 6 cos(2x) (blue): amplitude 3 times speed 2 gives slopes up to 6.")}
  ${keyIdea(S`\(\dfrac{d}{dx}\sin(g(x))=\cos(g(x))\,g'(x)\), \(\dfrac{d}{dx}\cos(g(x))=-\sin(g(x))\,g'(x)\), and \(\dfrac{d}{dx}[\sin x]^n=n\sin^{n-1}x\cos x\). For a sinusoid, the largest slope is \(|Ak|\).`)}`),

  section("📌 Explore", S`<p>Change \(A\), \(k\), \(c\) and \(d\). Watch the dashed derivative: its height (the largest slope) follows \(|Ak|\), while \(c\) only slides both graphs sideways and \(d\) only lifts the original. Find settings where the slope at \(x=0\) is exactly 0.</p>`),

  widget("sinusoidRuleLab", { init: { A: 2, k: 1, c: 0, d: 0, x: 0.5, fn: "sin" } }),

  section("📌 Reading the notation", S`
  <p>\(\sin^2x\) means \((\sin x)^2\) — a power of a function — while \(\sin(x^2)\) is sine of \(x^2\). They have different derivatives.</p>
  ${watchOut([
    "Don't forget the inner derivative: (sin 3x)′ = 3 cos 3x, not cos 3x.",
    "sin² x = (sin x)²: outer power first, then the derivative of sin x.",
    "sin(x²) ≠ sin² x: (sin x²)′ = 2x cos x², (sin² x)′ = 2 sin x cos x.",
    "The vertical shift d disappears; the phase shift c stays inside the brackets.",
    "Keep the minus sign when the outer function is cosine.",
  ])}`),

  examples([
    ["A multiple angle", S`Differentiate \(y=4\cos(3x)\).`,
      [S`Outer \(4\cos u\), inner \(u=3x\), \(u'=3\).`, S`\(y'=4(-\sin3x)\cdot3\).`],
      S`\(y'=-12\sin(3x)\)`],
    ["A polynomial inside", S`Differentiate \(y=\sin(x^2)\).`,
      [S`\(y'=\cos(x^2)\cdot2x\).`],
      S`\(y'=2x\cos(x^2)\)`],
    ["A power of sine", S`Differentiate \(y=\sin^2x\) and simplify.`,
      [S`\(y=(\sin x)^2\Rightarrow y'=2\sin x\cdot\cos x\).`, S`Identity: \(2\sin x\cos x=\sin2x\).`],
      S`\(y'=2\sin x\cos x=\sin(2x)\)`,
      plane({ view: { xmin: -0.2, xmax: 2 * PI + 0.2, ymin: -1.3, ymax: 1.3 }, curves: [{ f: (x) => Math.sin(x) ** 2, a: 0, b: 2 * PI, color: "violet" }, { f: (x) => Math.sin(2 * x), a: 0, b: 2 * PI, color: "blue" }], step: { x: 0.5, y: 0.5 } })],
    ["A transformed sinusoid", S`Find the slope of \(y=2\sin\left(\frac\pi4x+1\right)+5\) at \(x=0\).`,
      [S`\(y'=2\cdot\frac\pi4\cos\left(\frac\pi4x+1\right)\).`, S`\(y'(0)=\frac\pi2\cos1\approx1.5708\times0.5403\).`],
      S`about \(0.849\)`],
    ["Product and chain", S`Find the tangent to \(y=x\cos(2x)\) at \(x=\frac\pi4\).`,
      [S`\(y\left(\frac\pi4\right)=\frac\pi4\cos\frac\pi2=0\).`, S`\(y'=\cos(2x)-2x\sin(2x)\); \(y'\left(\frac\pi4\right)=0-\frac\pi2\cdot1=-\frac\pi2\).`, S`\(y=-\frac\pi2\left(x-\frac\pi4\right)\).`],
      S`\(y=-\frac{\pi}{2}x+\frac{\pi^2}{8}\approx-1.571x+1.234\)`,
      plane({ view: { xmin: -0.2, xmax: 2.5, ymin: -2.5, ymax: 1.5 }, curves: [{ f: (x) => x * Math.cos(2 * x), a: -0.2, b: 2.5, color: "violet" }, { f: (x) => -(PI / 2) * (x - PI / 4), a: 0.2, b: 1.4, color: "green" }], points: [{ x: PI / 4, y: 0, label: "(π/4, 0)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
  ]),

  practice([
    q("chain", S`For \(f(x)=\sin(5x)\), find \(f'(0)\).`, num(5),
      "5 cos(5x).", [S`\(5\cos0\).`], S`\(5\)`),
    q("chain", S`For \(y=\cos\left(\frac x2\right)\), find \(y'(\pi)\).`, num(-0.5, 0.0001),
      "−½ sin(x/2).", [S`\(-\frac12\sin\frac\pi2\).`], S`\(-0.5\)`),
    q("power", S`For \(y=\sin^2x\), find \(y'\!\left(\frac\pi4\right)\).`, num(1),
      "2 sin x cos x.", [S`\(2\cdot\frac{\sqrt2}2\cdot\frac{\sqrt2}2\).`], S`\(1\)`),
    q("sinusoid", S`What is the greatest slope of \(y=3\sin(2x)+1\)?`, num(6),
      "|Ak|.", [S`\(3\times2\).`], S`\(6\)`),
    q("rule", S`Which is \(\frac{d}{dx}\cos(x^2)\)?`, choice([S`\(-2x\sin(x^2)\)`, S`\(-\sin(x^2)\)`, S`\(2x\sin(x^2)\)`, S`\(-2\sin x\cos x\)`], 0),
      "Outer cos, inner x².", ["−sin(x²) · 2x."], S`\(-2x\sin(x^2)\)`),
  ]),

  ...hard([
    ["Extrema of a sum", S`Find the maximum and minimum of \(y=\sin x+\cos x\) on \([0,2\pi]\).`,
      [S`\(y'=\cos x-\sin x=0\Rightarrow\tan x=1\Rightarrow x=\frac\pi4,\ \frac{5\pi}4\).`, S`\(y\left(\frac\pi4\right)=\sqrt2\), \(y\left(\frac{5\pi}4\right)=-\sqrt2\); endpoints give 1.`],
      S`maximum \(\sqrt2\approx1.414\) at \(\frac\pi4\); minimum \(-\sqrt2\) at \(\frac{5\pi}4\)`,
      plane({ view: { xmin: -0.2, xmax: 6.5, ymin: -1.7, ymax: 1.7 }, curves: [{ f: (x) => Math.sin(x) + Math.cos(x), a: 0, b: 2 * PI, color: "violet" }], points: [{ x: PI / 4, y: Math.SQRT2, label: "max (π/4, √2)", color: "red" }, { x: (5 * PI) / 4, y: -Math.SQRT2, label: "min (5π/4, −√2)", color: "blue" }], step: { x: 0.5, y: 0.5 } })],
    ["Tangent and a simplification", S`(a) Find the slope of \(y=\tan(2x)\) at \(x=\frac\pi8\). (b) Differentiate \(y=\cos^2x-\sin^2x\) in two ways.`,
      [S`(a) \(y'=2\sec^2(2x)\); at \(\frac\pi8\): \(2\sec^2\frac\pi4=2\cdot2=4\).`, S`(b) Chain rule: \(-2\cos x\sin x-2\sin x\cos x=-4\sin x\cos x\).`, S`Or simplify first: \(y=\cos2x\Rightarrow y'=-2\sin2x=-4\sin x\cos x\) ✓.`],
      S`(a) 4; (b) \(-2\sin(2x)\)`,
      plane({ view: { xmin: -0.7, xmax: 0.7, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.tan(2 * x), a: -0.7, b: 0.7, color: "violet" }, { f: (x) => 1 + 4 * (x - PI / 8), a: 0.05, b: 0.65, color: "green" }], points: [{ x: PI / 8, y: 1, label: "(π/8, 1)", color: "red" }], step: { x: 0.25, y: 1 } })],
  ], [
    q("hard", S`For \(f(x)=\sin(\pi x)\), find \(f'\!\left(\frac13\right)\) (4 decimals).`, num(1.5708, 0.0005),
      "π cos(πx).", [S`\(\pi\cos\frac\pi3=\frac\pi2\).`], S`\(1.5708\)`),
    q("hard", S`For \(f(x)=\sqrt{\sin x}\), find \(f'\!\left(\frac\pi2\right)\).`, num(0),
      "cos x / (2√(sin x)).", [S`\(\cos\frac\pi2=0\).`], S`\(0\)`),
    q("hard", S`For \(y=\sin(2x)\cos x\), find \(y'(0)\).`, num(2),
      "2cos(2x)cos x − sin(2x) sin x.", [S`\(2\cdot1\cdot1-0\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does k multiply the slope?", "Compressing the graph horizontally by k makes it rise and fall k times as fast — the chain rule's inner derivative."],
      ["Why does d disappear?", "Lifting a graph does not change its slopes; the derivative of a constant is 0."],
      ["How do I tell sin²x from sin(x²)?", "sin²x is (sin x)², a power of sine; sin(x²) is sine of x². Write the brackets if unsure."],
      ["What is the largest slope of A sin(kx + c) + d?", "|Ak|, reached where the curve crosses its midline."],
      ["Where do these models appear?", "Anywhere a quantity repeats: tides, pendulums, AC current, daylight — see 4.4."],
    ],
    summary: [
      "(sin g)′ = cos g · g′; (cos g)′ = −sin g · g′.",
      "(sinⁿx)′ = n sinⁿ⁻¹x cos x.",
      "(A sin(kx + c) + d)′ = Ak cos(kx + c).",
      "Largest slope |Ak|.",
    ],
    next: "4.4 applies these derivatives to periodic models.",
  }),
];
