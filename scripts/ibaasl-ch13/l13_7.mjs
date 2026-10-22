// IB AA SL 13.7 — Chapter 13 Review: chain, product and quotient rules, trigonometric derivatives, applications, trigonometric integrals, substitution, kinematics and accumulation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard, plane } from "./lib.mjs";
import { fig, areaDoc } from "./figs13.mjs";

export const TITLE = "13.7 Chapter 13 Review";
export const ID = "1baa0013-0001-4001-8001-000000001307";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });
const TH = Math.atan(Math.SQRT1_2);

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 13 Review",
    overview: S`This review connects the chapter: the chain, product and quotient rules, derivatives of the trigonometric functions, tangents, stationary points and optimisation, integrals of trigonometric and exponential functions, substitution, and kinematics with accumulated change. The examples combine these as exam questions do.`,
    goals: [
      "choose and combine the differentiation rules;",
      "differentiate and integrate trigonometric functions;",
      "find tangents, stationary points and optimal values;",
      "integrate by substitution with changed limits;",
      "solve kinematics and accumulation problems.",
    ],
    curriculum: "SL 5.6–5.11 (further differentiation and integration)",
    prior: [
      [S`\(\frac{d}{dx}\cos3x\)?`, S`\(-3\sin3x\).`],
      [S`\(\int\cos2x\,dx\)?`, S`\(\frac12\sin2x+C\).`],
      [S`Product rule?`, S`\((uv)'=u'v+uv'\).`],
    ],
    words: [
      ["13.1", "chain, product and quotient rules", ""],
      ["13.2", "derivatives of sin, cos, tan", ""],
      ["13.3", "tangents, stationary points, optimisation", ""],
      ["13.4", "integrals of sin, cos, 1/cos², e^{ax+b}", ""],
      ["13.5–13.6", "substitution; kinematics and accumulation", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Topic", "Key fact"], [
    ["rules", S`chain \(f'(g)g'\); product \(u'v+uv'\); quotient \(\frac{u'v-uv'}{v^2}\)`],
    ["trig derivatives", S`\(\sin\to\cos\), \(\cos\to-\sin\), \(\tan\to\frac{1}{\cos^2}\)`],
    ["applications", S`normal slope \(-\frac{1}{f'}\); classify with \(f''\)`],
    ["trig integrals", S`\(\int\cos=\sin\), \(\int\sin=-\cos\); divide by a for \(ax+b\)`],
    ["substitution", S`\(u=g(x)\), \(du=g'(x)dx\), change limits`],
    ["kinematics", S`\(v=s'\), \(a=v'\); distance \(\int|v|\)`],
  ])}
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -0.15, ymax: 0.4 }, step: { x: PI / 4, y: 0.1 }, curves: [{ f: (x) => Math.exp(-x) * Math.sin(x), color: "violet" }], points: [P(PI / 4, Math.exp(-PI / 4) * Math.SQRT1_2, "max"), P((5 * PI) / 4, -Math.exp(-5 * PI / 4) * Math.SQRT1_2, "min")] }, "Example 4: y = e⁻ˣ sin x, a decaying wave")}
  ${keyIdea("Decide the structure first (product, quotient, composite), then apply the rules from the outside in.")}`),

  section("📌 Explore", S`<p>Use the explorer to check Example 2: pick a curve and find where the tangent is horizontal.</p>`),

  widget("ibTangentNormal", { init: [1, 2.36] }),

  examples([
    ["Level 1 · Product", S`Differentiate \(y=e^{3x}\sin x\).`,
      [S`\(3e^{3x}\sin x+e^{3x}\cos x\).`],
      S`\(e^{3x}(3\sin x+\cos x)\)`],
    ["Level 2 · Tangent", S`Find the tangent to \(y=x\cos x\) at \(x=\pi\).`,
      [S`\(y(\pi)=-\pi\); \(y'=\cos x-x\sin x\), \(y'(\pi)=-1\).`, S`\(y+\pi=-(x-\pi)\).`],
      S`\(y=-x\)`,
      plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -6.5, ymax: 6.5 }, step: { x: PI / 2, y: 1 }, curves: [{ f: (x) => x * Math.cos(x), color: "violet" }], lines: [{ m: -1, b: 0, color: "amber", dash: true }], points: [P(PI, -PI, "(π, −π)")] }, "y = x cos x and its tangent y = −x at x = π")],
    ["Level 2 · Log substitution", S`Evaluate \(\int_0^{\pi/6}\frac{\cos2x}{1+\sin2x}dx\).`,
      [S`\(u=1+\sin2x\), \(du=2\cos2x\,dx\); limits 1 to \(1+\frac{\sqrt3}{2}\).`, S`\(\frac12\ln\left(1+\frac{\sqrt3}{2}\right)\).`],
      S`\(\approx0.312\)`],
    ["Level 3 · Stationary points", S`Find the stationary points of \(y=e^{-x}\sin x\) for \(0\le x\le2\pi\).`,
      [S`\(y'=e^{-x}(\cos x-\sin x)=0\Rightarrow\tan x=1\).`, S`\(x=\frac{\pi}{4}\): \(y\approx0.322\) (max); \(x=\frac{5\pi}{4}\): \(y\approx-0.0139\) (min).`],
      S`max \(\left(\frac{\pi}{4},0.322\right)\), min \(\left(\frac{5\pi}{4},-0.0139\right)\)`],
    ["Level 3 · Kinematics", S`\(v=6\cos3t\), \(s(0)=0\). Find s(t) and the distance travelled on \(\left[0,\frac{\pi}{2}\right]\).`,
      [S`\(s=2\sin3t\).`, S`v = 0 at \(t=\frac{\pi}{6}\): s goes 0 → 2 → \(s\left(\frac{\pi}{2}\right)=-2\).`, S`Distance \(2+4\).`],
      S`\(s=2\sin3t\); distance 6`,
      fig(areaDoc({ view: { xmin: 0, xmax: PI / 2, ymin: -6.5, ymax: 6.5 }, step: { x: PI / 12, y: 1 }, curves: [{ f: (t) => 6 * Math.cos(3 * t), color: "violet" }] }, [{ f: (t) => Math.max(0, 6 * Math.cos(3 * t)), a: 0, b: PI / 2, color: "green" }, { f: (t) => Math.min(0, 6 * Math.cos(3 * t)), a: 0, b: PI / 2, color: "red" }]), "v = 6 cos 3t: forward 2, then backward 4")],
  ]),

  practice([
    q("Level 1 · chain", S`Find \(\frac{dy}{dx}\) at \(x=\frac{\pi}{4}\) for \(y=\ln(\sin x)\).`, num(1),
      "cos x / sin x.", [S`\(\frac{\cos x}{\sin x}=1\).`], S`\(1\)`),
    q("Level 1 · integral", S`Evaluate \(\int_0^{\pi/8}\frac{1}{\cos^22x}dx\).`, num(0.5, 0.001),
      "½ tan 2x.", [S`\(\frac12\tan\frac{\pi}{4}\).`], S`\(0.5\)`),
    q("Level 2 · stationary", S`\(y=(x^2+1)e^{-x}\) has one stationary point. Find its x-coordinate.`, num(1),
      "y′ = −e^{−x}(x − 1)².", [S`\(e^{-x}(2x-x^2-1)=-e^{-x}(x-1)^2\).`], S`\(1\)`),
    q("Level 2 · substitution", S`Evaluate \(\int_0^1\frac{x^2}{x^3+1}dx\) (3 d.p.).`, num(Math.log(2) / 3, 0.001),
      "⅓ ln(x³ + 1).", [S`\(\frac13\ln2\).`], S`\(\approx0.231\)`),
    q("Level 2 · displacement", S`\(v=2+\cos t\). Find the displacement on \([0,\pi]\) (3 d.p.).`, num(2 * PI, 0.001),
      "[2t + sin t].", [S`\(2\pi\).`], S`\(\approx6.283\)`),
  ]),

  ...hard([
    ["Area between a curve and a chord", S`Find the area between \(y=\sin x\) and the line \(y=\frac{2x}{\pi}\) for \(0\le x\le\frac{\pi}{2}\).`,
      [S`They meet at 0 and \(\frac{\pi}{2}\); the sine curve is above.`, S`\(\int_0^{\pi/2}\left(\sin x-\frac{2x}{\pi}\right)dx=\left[-\cos x-\frac{x^2}{\pi}\right]_0^{\pi/2}=-\frac{\pi}{4}+1\).`],
      S`\(1-\frac{\pi}{4}\approx0.215\)`,
      fig(areaDoc({ view: { xmin: 0, xmax: PI / 2 + 0.2, ymin: -0.1, ymax: 1.2 }, step: { x: PI / 8, y: 0.2 }, curves: [{ f: Math.sin, color: "violet" }], lines: [{ m: 2 / PI, b: 0, color: "amber" }] }, [{ f: Math.sin, g: (x) => (2 * x) / PI, a: 0, b: PI / 2, color: "green" }]), "the region between y = sin x and its chord y = 2x/π")],
    ["The largest cone with a fixed slant height", S`A cone has slant height 6 and makes angle θ with its base, so \(r=6\cos\theta\), \(h=6\sin\theta\). Find the largest volume.`,
      [S`\(V=\frac13\pi r^2h=72\pi\cos^2\theta\sin\theta\).`, S`\(V'=72\pi\cos\theta(\cos^2\theta-2\sin^2\theta)=0\Rightarrow\tan\theta=\frac{1}{\sqrt2}\).`, S`\(\cos^2\theta=\frac23\), \(\sin\theta=\frac{1}{\sqrt3}\): \(V=72\pi\cdot\frac23\cdot\frac{1}{\sqrt3}=\frac{48\pi}{\sqrt3}\).`],
      S`\(V_{\max}=\frac{48\pi}{\sqrt3}\approx87.06\) at \(\theta\approx0.615\)`,
      plane({ view: { xmin: 0, xmax: PI / 2, ymin: 0, ymax: 100 }, step: { x: PI / 8, y: 10 }, curves: [{ f: (t) => 72 * PI * Math.cos(t) ** 2 * Math.sin(t), color: "violet" }], points: [P(TH, (48 * PI) / Math.sqrt(3), "(0.615, 87.06)")] }, "V(θ) = 72π cos²θ sin θ peaks at θ ≈ 0.615")],
  ], [
    q("Level 3 · substitution", S`Evaluate \(\int_0^{\pi/2}\sin2x\,e^{\sin^2x}dx\) (3 d.p.).`, num(Math.E - 1, 0.001),
      "u = sin²x, du = sin 2x dx.", [S`\(\int_0^1e^udu=e-1\).`], S`\(\approx1.718\)`),
    q("Level 3 · normal", S`Find the gradient of the normal to \(y=\tan x\) at \(x=\frac{\pi}{4}\).`, num(-0.5, 0.001),
      "Tangent slope 1/cos² = 2.", [S`\(-\frac12\).`], S`\(-0.5\)`),
    q("Level 3 · second derivative", S`Find \(\frac{d^2y}{dx^2}\) at \(x=0\) for \(y=\sin^2x\).`, num(2),
      "y′ = sin 2x.", [S`\(y''=2\cos2x\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Which rule first?", "Look at the overall structure: product, quotient or composite."],
      ["What are the trig derivatives?", "sin → cos, cos → −sin, tan → 1/cos²."],
      ["How do I integrate sin(ax + b)?", "−(1/a) cos(ax + b) + C."],
      ["When do I substitute?", "When an inner function's derivative is also a factor."],
      ["How do I find distance?", "Integrate |v|, splitting where v = 0."],
    ],
    summary: [
      "Chain, product, quotient.",
      "Trig derivatives and integrals cycle with sign changes.",
      "Substitute and change limits.",
      "Kinematics: differentiate down, integrate up.",
    ],
    next: "Chapter 14 studies probability distributions.",
  }),
];
