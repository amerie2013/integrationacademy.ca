// IB AA SL 13.4 — Integrating Trigonometric and Exponential Functions: antiderivatives of sin, cos, 1/cos², sin(ax + b), cos(ax + b), e^(ax + b); definite integrals and areas
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fig, areaDoc } from "./figs13.mjs";

export const TITLE = "13.4 Integrating Trigonometric and Exponential Functions";
export const ID = "63bf1f1e-6d56-43b5-8fc7-9a874a84c244";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "∫",
    title: "Integrating Trigonometric and Exponential Functions",
    overview: S`Reversing the derivatives from 13.2 gives \(\int\cos x\,dx=\sin x+C\), \(\int\sin x\,dx=-\cos x+C\) and \(\int\frac{1}{\cos^2x}dx=\tan x+C\). For a linear inside, \(ax+b\), divide by \(a\). With these, definite integrals and areas involving waves become exact calculations — the area under one arch of \(\sin x\) is exactly 2.`,
    goals: [
      "integrate sin x, cos x and 1/cos²x;",
      S`integrate \(\sin(ax+b)\), \(\cos(ax+b)\) and \(e^{ax+b}\);`,
      "evaluate definite integrals of trigonometric functions exactly;",
      "find areas under and between trigonometric curves;",
      "use a boundary condition to find the constant of integration.",
    ],
    curriculum: "SL 5.10 (indefinite integrals of sin x, cos x, 1/cos²x, eˣ and composites with ax + b), SL 5.11 (definite integrals and areas)",
    prior: [
      [S`Differentiate \(\sin3x\).`, S`\(3\cos3x\).`],
      [S`Find \(\int e^{2x}dx\).`, S`\(\frac12e^{2x}+C\).`],
      [S`Evaluate \(\cos\frac{\pi}{3}\) and \(\sin\frac{\pi}{2}\).`, S`\(\frac12\) and 1.`],
    ],
    words: [
      [S`\(\int\cos x\,dx\)`, S`\(\sin x+C\)`, ""],
      [S`\(\int\sin x\,dx\)`, S`\(-\cos x+C\)`, ""],
      [S`\(\int\frac{1}{\cos^2x}dx\)`, S`\(\tan x+C\)`, ""],
      ["Linear composite", S`\(\int f(ax+b)dx=\frac1aF(ax+b)+C\)`, ""],
      ["Signed area", "a definite integral counts regions below the x-axis as negative", ""],
    ],
  }),

  section("📌 The basic integrals", S`
  <p>Since \(\frac{d}{dx}(-\cos x)=\sin x\), the area under one arch is \(\int_0^\pi\sin x\,dx=[-\cos x]_0^\pi=1-(-1)=2\).</p>
  ${fig(areaDoc({ view: { xmin: 0, xmax: PI, ymin: -0.2, ymax: 1.3 }, step: { x: PI / 4, y: 0.25 }, curves: [{ f: Math.sin, color: "violet" }] }, [{ f: Math.sin, a: 0, b: PI, color: "green" }]), "the area under one arch of y = sin x is exactly 2")}
  ${table(["f(x)", "∫ f(x) dx"], [[S`\(\cos(ax+b)\)`, S`\(\frac1a\sin(ax+b)+C\)`], [S`\(\sin(ax+b)\)`, S`\(-\frac1a\cos(ax+b)+C\)`], [S`\(\frac{1}{\cos^2(ax+b)}\)`, S`\(\frac1a\tan(ax+b)+C\)`], [S`\(e^{ax+b}\)`, S`\(\frac1ae^{ax+b}+C\)`]])}
  <p>For example \(\int_0^{\pi/4}\cos2x\,dx=\left[\frac12\sin2x\right]_0^{\pi/4}=\frac12\).</p>
  ${fig(areaDoc({ view: { xmin: 0, xmax: PI / 2, ymin: -1.2, ymax: 1.3 }, step: { x: PI / 8, y: 0.5 }, curves: [{ f: (x) => Math.cos(2 * x), color: "violet" }] }, [{ f: (x) => Math.cos(2 * x), a: 0, b: PI / 4, color: "green" }]), "∫₀^{π/4} cos 2x dx = ½")}
  ${keyIdea("Integrate by reversing a derivative; divide by a for an inside ax + b. Always check by differentiating your answer.")}`),

  section("📌 Areas and signed areas", S`
  <p>Over a full period, \(\int_0^{2\pi}\sin x\,dx=0\): the part below the axis cancels the part above. The total area is \(2+2=4\) — integrate each part separately and add the absolute values.</p>
  ${fig(areaDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: Math.sin, color: "violet" }] }, [{ f: Math.sin, a: 0, b: PI, color: "green" }, { f: Math.sin, a: PI, b: 2 * PI, color: "red" }]), "signed area 2 − 2 = 0; total area 4")}
  <p>Between \(y=\sin x\) and \(y=\cos x\) from \(\frac{\pi}{4}\) to \(\frac{5\pi}{4}\): \(\int(\sin x-\cos x)dx=[-\cos x-\sin x]=\sqrt2-(-\sqrt2)=2\sqrt2\).</p>
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, step: { x: PI / 4, y: 0.5 }, curves: [{ f: Math.sin, color: "violet" }, { f: Math.cos, color: "amber" }], points: [P(PI / 4, Math.SQRT1_2, "π/4"), P((5 * PI) / 4, -Math.SQRT1_2, "5π/4")] }, "sin x and cos x enclose an area of 2√2 between π/4 and 5π/4")}
  ${watchOut([
    S`\(\int\sin x\,dx=-\cos x\), not \(+\cos x\): the signs reverse compared with differentiation.`,
    "Use radians in every limit.",
    "For areas, split at x-intercepts before integrating.",
    S`Divide by a for \(\sin(ax+b)\), do not multiply.`,
  ])}`),

  section("📌 Explore", S`<p>Change the amplitude and the upper limit. The readout gives the exact integral; green counts positive, red negative.</p>`),

  widget("ibTrigArea", { init: [0, 2, 2] }),

  examples([
    ["Level 1 · Basic", S`Find \(\int(3\cos x-2\sin x)\,dx\).`,
      [S`\(3\sin x-2(-\cos x)\).`],
      S`\(3\sin x+2\cos x+C\)`],
    ["Level 1 · Linear inside", S`Find \(\int\sin4x\,dx\).`,
      [S`Divide by 4.`],
      S`\(-\frac14\cos4x+C\)`],
    ["Level 2 · Definite", S`Evaluate \(\int_0^{\pi/6}\cos3x\,dx\).`,
      [S`\(\left[\frac13\sin3x\right]_0^{\pi/6}=\frac13\sin\frac{\pi}{2}\).`],
      S`\(\frac13\)`],
    ["Level 2 · Mixed", S`Find \(\int\left(e^{2x}+\frac{1}{\cos^2x}\right)dx\).`,
      [S`\(\frac12e^{2x}+\tan x\).`],
      S`\(\frac12e^{2x}+\tan x+C\)`],
    ["Level 3 · Area between curves", S`Find the area enclosed by \(y=\sin2x\) and \(y=\sin x\) for \(0\le x\le\frac{\pi}{3}\).`,
      [S`They meet where \(2\sin x\cos x=\sin x\): \(x=0\) and \(\cos x=\frac12\Rightarrow x=\frac{\pi}{3}\).`, S`\(\int_0^{\pi/3}(\sin2x-\sin x)dx=\left[-\frac12\cos2x+\cos x\right]_0^{\pi/3}\).`, S`\(=\left(\frac14+\frac12\right)-\left(-\frac12+1\right)=\frac14\).`],
      S`\(\frac14\)`,
      plane({ view: { xmin: 0, xmax: PI / 2, ymin: -0.1, ymax: 1.2 }, step: { x: PI / 12, y: 0.25 }, curves: [{ f: (x) => Math.sin(2 * x), color: "violet" }, { f: Math.sin, color: "amber" }], points: [P(PI / 3, Math.sin(PI / 3), "π/3")] }, "y = sin 2x (violet) above y = sin x (amber) on [0, π/3]")],
  ]),

  practice([
    q("Level 1 · definite", S`Evaluate \(\int_0^{\pi/2}\cos x\,dx\).`, num(1),
      "[sin x].", [S`\(1-0\).`], S`\(1\)`),
    q("Level 1 · linear inside", S`\(\int\sin(2x+1)\,dx\) equals:`, choice([S`\(-\frac12\cos(2x+1)+C\)`, S`\(-2\cos(2x+1)+C\)`, S`\(\frac12\cos(2x+1)+C\)`, S`\(-\cos(2x+1)+C\)`], 0),
      "Divide by 2; sign reverses.", [S`\(-\frac12\cos(2x+1)+C\).`], S`\(-\frac12\cos(2x+1)+C\)`),
    q("Level 2 · tan", S`Evaluate \(\int_0^{\pi/4}\frac{1}{\cos^2x}dx\).`, num(1),
      "[tan x].", [S`\(1-0\).`], S`\(1\)`),
    q("Level 2 · half angle", S`Evaluate \(\int_0^{\pi}\sin\frac{x}{2}\,dx\).`, num(2),
      "[−2 cos(x/2)].", [S`\(0-(-2)\).`], S`\(2\)`),
    q("Level 2 · sum", S`Evaluate \(\int_0^{\pi/3}(\sin x+\cos x)\,dx\) (3 d.p.).`, num(0.5 + Math.sqrt(3) / 2, 0.001),
      "[−cos x + sin x].", [S`\(\left(-\frac12+\frac{\sqrt3}{2}\right)-(-1)\).`], S`\(\approx1.366\)`),
  ]),

  ...hard([
    ["Finding a limit", S`Find k with \(0<k<\pi\) such that \(\int_0^k\sin x\,dx=1.5\).`,
      [S`\([-\cos x]_0^k=1-\cos k=1.5\).`, S`\(\cos k=-\frac12\Rightarrow k=\frac{2\pi}{3}\).`],
      S`\(k=\frac{2\pi}{3}\)`,
      fig(areaDoc({ view: { xmin: 0, xmax: PI, ymin: -0.2, ymax: 1.3 }, step: { x: PI / 6, y: 0.25 }, curves: [{ f: Math.sin, color: "violet" }], points: [P((2 * PI) / 3, Math.sin((2 * PI) / 3), "2π/3")] }, [{ f: Math.sin, a: 0, b: (2 * PI) / 3, color: "green" }]), "the shaded area from 0 to 2π/3 is 1.5")],
    ["A boundary condition", S`\(f'(x)=2\cos2x-e^{-x}\) and \(f(0)=3\). Find \(f(x)\) and \(f\left(\frac{\pi}{4}\right)\).`,
      [S`\(f(x)=\sin2x+e^{-x}+C\).`, S`\(f(0)=0+1+C=3\Rightarrow C=2\).`, S`\(f\left(\frac{\pi}{4}\right)=1+e^{-\pi/4}+2\).`],
      S`\(f(x)=\sin2x+e^{-x}+2\); \(f\left(\frac{\pi}{4}\right)\approx3.456\)`,
      plane({ view: { xmin: 0, xmax: PI, ymin: 0, ymax: 4.5 }, step: { x: PI / 4, y: 0.5 }, curves: [{ f: (x) => Math.sin(2 * x) + Math.exp(-x) + 2, color: "violet" }], points: [P(0, 3, "(0, 3)"), P(PI / 4, 3 + Math.exp(-PI / 4), "(π/4, 3.456)")] }, "f(x) = sin 2x + e⁻ˣ + 2 passes through (0, 3)")],
  ], [
    q("Level 3 · total area", S`Find the total area between \(y=\cos x\) and the x-axis for \(0\le x\le\frac{3\pi}{2}\).`, num(3),
      "Split at π/2.", [S`\(1+|{-2}|\).`], S`\(3\)`),
    q("Level 3 · identity first", S`Use \(\sin^2x=\frac{1-\cos2x}{2}\) to evaluate \(\int_0^{\pi/2}\sin^2x\,dx\) (3 d.p.).`, num(PI / 4, 0.001),
      "[x/2 − sin 2x/4].", [S`\(\frac{\pi}{4}-0\).`], S`\(\frac{\pi}{4}\approx0.785\)`),
    q("Level 3 · between curves", S`Find the area between \(y=2\sin x\) and \(y=1\) for \(\frac{\pi}{6}\le x\le\frac{5\pi}{6}\) (3 d.p.).`, num(2 * Math.sqrt(3) - (2 * PI) / 3, 0.001),
      "[−2 cos x − x].", [S`\(2\sqrt3-\frac{2\pi}{3}\).`], S`\(\approx1.370\)`),
  ]),

  wrapUp({
    qas: [
      ["What is ∫ sin x dx?", "−cos x + C."],
      ["What is ∫ cos x dx?", "sin x + C."],
      ["What about ∫ cos(ax + b) dx?", "(1/a) sin(ax + b) + C."],
      ["Why is ∫₀^{2π} sin x dx zero?", "The area below the axis cancels the area above."],
      ["How do I check an antiderivative?", "Differentiate it and see that you get the integrand back."],
    ],
    summary: [
      "∫ cos = sin, ∫ sin = −cos, ∫ 1/cos² = tan.",
      "Inside ax + b: divide by a.",
      "Split at intercepts for total area.",
      "A boundary condition fixes C.",
    ],
    next: "13.5 integrates composite functions by substitution.",
  }),
];
