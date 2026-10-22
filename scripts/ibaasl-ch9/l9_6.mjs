// IB AA SL 9.6 — Derivatives of Exponential and Logarithmic Functions: d/dx eˣ, e^(g(x)), ln x, ln(g(x)), aˣ; tangents and normals; stationary points; rates of change in exponential models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "9.6 Derivatives of Exponential and Logarithmic Functions";
export const ID = "1baa0009-0001-4001-8001-000000000906";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "📉",
    title: "Derivatives of Exponential and Logarithmic Functions",
    overview: S`The function \(e^x\) has a remarkable property: its gradient at every point equals its height, so \(\frac{d}{dx}e^x=e^x\). Its inverse \(\ln x\) has derivative \(\frac1x\). In this lesson you will differentiate exponential and logarithmic functions, including composite forms such as \(e^{3x-1}\) and \(\ln(x^2+4)\), find tangents, normals and stationary points, and interpret rates of change in growth and decay models.`,
    goals: [
      S`use \(\frac{d}{dx}e^x=e^x\) and \(\frac{d}{dx}\ln x=\frac1x\);`,
      S`differentiate \(e^{g(x)}\) as \(g'(x)e^{g(x)}\) and \(\ln g(x)\) as \(\frac{g'(x)}{g(x)}\);`,
      S`differentiate \(a^x\) as \(a^x\ln a\);`,
      "find tangents, normals and stationary points of exponential and log curves;",
      "interpret derivatives as rates of change in models.",
    ],
    curriculum: "SL 5.6 (derivatives of eˣ and ln x; chain rule for composite functions; product rule); SL 5.4 (tangents and normals); SL 5.7–5.8 (stationary points)",
    prior: [
      [S`Differentiate \(4x^3-2x\).`, S`\(12x^2-2\).`],
      [S`Simplify \(\ln e^{5}\).`, "5."],
      [S`The gradient of a tangent is 3. What is the gradient of the normal?`, S`\(-\frac13\).`],
    ],
    words: [
      ["Natural exponential", S`\(e^x\): its own derivative`, S`\(\frac{d}{dx}e^x=e^x\)`],
      ["Chain rule", S`derivative of an outer function of an inner function`, S`\(\frac{d}{dx}e^{g}=g'e^{g}\)`],
      ["Product rule", S`\((uv)'=u'v+uv'\)`, S`\((xe^x)'=e^x+xe^x\)`],
      ["Rate of change", "the derivative of a quantity with respect to time", S`\(\frac{dA}{dt}\)`],
      ["Stationary point", S`where \(f'(x)=0\)`, S`\(xe^{-x}\) at \(x=1\)`],
    ],
  }),

  section("📌 The two key derivatives", S`
  <p>Of all the curves \(y=b^x\), only \(b=e\) has gradient exactly 1 at \((0,1)\), and then the gradient at every point equals the y-value. Reflecting in \(y=x\) swaps gradients for their reciprocals, so \(\ln x\) has gradient \(\frac1x\).</p>
  ${plane({ view: { xmin: -3, xmax: 2.5, ymin: -1, ymax: 9 }, step: { x: 1, y: 1 }, curves: [{ f: Math.exp, color: "violet" }], lines: [{ m: 1, b: 1, color: "green", dash: true }, { m: Math.exp(1.5), b: Math.exp(1.5) * (1 - 1.5), color: "red", dash: true }], points: [P(0, 1, "(0, 1): gradient 1", "green"), P(1.5, Math.exp(1.5), "(1.5, 4.48): gradient 4.48", "red")] }, "Tangents to y = eˣ: at each point the gradient equals the height")}
  ${table(["f(x)", "f′(x)"], [[S`\(e^x\)`, S`\(e^x\)`], [S`\(e^{kx}\)`, S`\(ke^{kx}\)`], [S`\(a^x\)`, S`\(a^x\ln a\)`], [S`\(\ln x\)`, S`\(\frac1x\)`], [S`\(\ln(kx)\)`, S`\(\frac1x\)`]])}
  ${plane({ view: { xmin: -0.5, xmax: 6, ymin: -3, ymax: 3 }, step: { x: 1, y: 1 }, curves: [{ f: Math.log, a: 0.01, b: 6, color: "violet" }, { f: (x) => 1 / x, a: 0.34, b: 6, color: "amber" }], points: [P(2, Math.log(2), "(2, 0.69)"), P(2, 0.5, "(2, 0.5)", "amber")] }, "y = ln x (violet) and its derivative y = 1/x (amber): gradient ½ at x = 2")}
  <p>Note \(\ln(kx)=\ln k+\ln x\), so its derivative is also \(\frac1x\); and \(a^x=e^{x\ln a}\), which explains the factor \(\ln a\).</p>
  ${keyIdea("d/dx eˣ = eˣ and d/dx ln x = 1/x. For a^x, write it as e^(x ln a).")}`),

  section("📌 Composite functions: the chain rule", S`
  <p>When the exponent or the log's argument is itself a function \(g(x)\), multiply by the derivative of the inside: \(\frac{d}{dx}e^{g(x)}=g'(x)e^{g(x)}\) and \(\frac{d}{dx}\ln g(x)=\frac{g'(x)}{g(x)}\). For example \(\frac{d}{dx}e^{x^2}=2xe^{x^2}\) and \(\frac{d}{dx}\ln(x^2+4)=\frac{2x}{x^2+4}\).</p>
  <p>When two functions are multiplied, use the product rule \((uv)'=u'v+uv'\): \(\frac{d}{dx}\left(xe^{-x}\right)=e^{-x}-xe^{-x}=(1-x)e^{-x}\), which is zero at \(x=1\) — a maximum of \(y=xe^{-x}\).</p>
  ${plane({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 1 }, step: { x: 1, y: 0.25 }, curves: [{ f: (x) => x * Math.exp(-x), color: "violet" }, { f: (x) => (1 - x) * Math.exp(-x), color: "amber" }], points: [P(1, Math.exp(-1), "max (1, 0.368)", "red"), P(1, 0, "(1, 0)", "amber")] }, "y = xe⁻ˣ (violet) has a maximum where its derivative (1 − x)e⁻ˣ (amber) is zero")}
  ${watchOut([
    S`\(\frac{d}{dx}e^{3x}=3e^{3x}\), not \(e^{3x}\) and not \(3xe^{3x-1}\).`,
    S`The power rule does not apply to \(e^x\): \(\frac{d}{dx}e^x\ne xe^{x-1}\).`,
    S`\(\frac{d}{dx}\ln(5x)=\frac1x\), not \(\frac5x\).`,
    S`\(\frac{d}{dx}2^x=2^x\ln2\), not \(x2^{x-1}\).`,
  ])}`),

  section("📌 Rates of change in models", S`
  <p>If \(A=A_0e^{kt}\), then \(\frac{dA}{dt}=kA_0e^{kt}=kA\): the rate of growth is proportional to the amount present. A culture \(N=400e^{0.3t}\) grows at \(\frac{dN}{dt}=120e^{0.3t}\), which is about 540 per hour when \(t=5\).</p>
  ${plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 4400 }, step: { x: 1, y: 500 }, curves: [{ f: (t) => 400 * Math.exp(0.3 * t), a: 0, b: 8, color: "violet" }], lines: [{ m: 120 * Math.exp(1.5), b: 400 * Math.exp(1.5) - 5 * 120 * Math.exp(1.5), color: "red", dash: true }], points: [P(5, 400 * Math.exp(1.5), "(5, 1793): rate 538/h", "red")] }, "N = 400e^(0.3t): tangent at t = 5 has gradient ≈ 538")}`),

  section("📌 Explore", S`<p>Move the point along eˣ and ln x. Compare the tangent's gradient with the height (for eˣ) and with 1/x (for ln x).</p>`),

  widget("ibExpDeriv", { init: [0, 0.5] }),

  examples([
    ["Level 1 · Basic derivatives", S`Differentiate \(f(x)=5e^x-3\ln x+2^x\).`,
      [S`\(5e^x-\frac3x+2^x\ln2\).`],
      S`\(f'(x)=5e^x-\dfrac3x+2^x\ln2\)`],
    ["Level 1 · Chain rule", S`Differentiate \(y=e^{4x-1}\) and \(y=\ln(3x^2+1)\).`,
      [S`\(4e^{4x-1}\).`, S`\(\frac{6x}{3x^2+1}\).`],
      S`\(4e^{4x-1}\); \(\dfrac{6x}{3x^2+1}\)`],
    ["Level 2 · Tangent", S`Find the equation of the tangent to \(y=e^{2x}\) at \(x=0\).`,
      [S`\(y'=2e^{2x}\); at \(x=0\): gradient 2, point \((0,1)\).`],
      S`\(y=2x+1\)`,
      plane({ view: { xmin: -2, xmax: 1.5, ymin: -2, ymax: 8 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => Math.exp(2 * x), color: "violet" }], lines: [{ m: 2, b: 1, color: "red", dash: true }], points: [P(0, 1, "(0, 1)")] }, "y = e²ˣ and its tangent y = 2x + 1")],
    ["Level 2 · Normal", S`Find the equation of the normal to \(y=\ln x\) at \(x=2\).`,
      [S`Gradient of tangent \(\frac12\); normal gradient \(-2\).`, S`\(y-\ln2=-2(x-2)\).`],
      S`\(y=-2x+4+\ln2\)`],
    ["Level 3 · Stationary point", S`Find the stationary point of \(y=e^x-2x\) and classify it.`,
      [S`\(y'=e^x-2=0\Rightarrow x=\ln2\).`, S`\(y=2-2\ln2\approx0.614\); \(y''=e^x>0\): minimum.`],
      S`minimum at \((\ln2,\ 2-2\ln2)\)`,
      plane({ view: { xmin: -2, xmax: 2.5, ymin: -1, ymax: 6 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => Math.exp(x) - 2 * x, color: "violet" }], points: [P(Math.log(2), 2 - 2 * Math.log(2), "min (0.693, 0.614)", "red")] }, "y = eˣ − 2x has a minimum at x = ln 2")],
  ]),

  practice([
    q("Level 1 · evaluate", S`If \(f(x)=3e^{x}\), find \(f'(0)\).`, num(3),
      "f′(x) = 3eˣ.", [S`\(3e^0\).`], S`\(3\)`),
    q("Level 1 · log", S`If \(f(x)=\ln x+x^2\), find \(f'(1)\).`, num(3),
      "1/x + 2x.", [S`\(1+2\).`], S`\(3\)`),
    q("Level 2 · chain", S`If \(y=e^{-0.5x}\), find \(\frac{dy}{dx}\) at \(x=2\) (3 d.p.).`, num(-0.5 * Math.exp(-1), 0.001),
      "−0.5e^(−0.5x).", [S`\(-0.5e^{-1}\).`], S`\(\approx-0.184\)`),
    q("Level 2 · ln chain", S`The derivative of \(\ln(x^2-5)\) is:`, choice([S`\(\dfrac{2x}{x^2-5}\)`, S`\(\dfrac{1}{x^2-5}\)`, S`\(\dfrac{1}{2x}\)`, S`\(2x\ln(x^2-5)\)`], 0),
      "g′/g.", [S`\(g=x^2-5,\ g'=2x\).`], S`\(\dfrac{2x}{x^2-5}\)`),
    q("Level 2 · rate", S`\(A=200e^{-0.1t}\). Find \(\frac{dA}{dt}\) at \(t=0\).`, num(-20),
      "−0.1 × 200.", [S`\(-20e^0\).`], S`\(-20\)`),
  ]),

  ...hard([
    ["Product rule and a maximum", S`Find and classify the stationary point of \(y=x^2e^{-x}\) for \(x>0\).`,
      [S`\(y'=2xe^{-x}-x^2e^{-x}=x(2-x)e^{-x}\).`, S`\(y'=0\) at \(x=2\) (and \(x=0\)). For \(x\) just below 2, \(y'>0\); just above, \(y'<0\): maximum.`, S`\(y(2)=4e^{-2}\approx0.541\).`],
      S`maximum at \((2,\ 4e^{-2})\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -0.2, ymax: 0.8 }, step: { x: 1, y: 0.2 }, curves: [{ f: (x) => x * x * Math.exp(-x), color: "violet" }], points: [P(2, 4 * Math.exp(-2), "max (2, 0.541)", "red"), P(0, 0, "(0, 0)", "green")] }, "y = x²e⁻ˣ: maximum at x = 2")],
    ["Minimum of a log function", S`Find the minimum value of \(f(x)=x-\ln x\), \(x>0\).`,
      [S`\(f'(x)=1-\frac1x=0\Rightarrow x=1\).`, S`\(f''(x)=\frac1{x^2}>0\): minimum; \(f(1)=1\).`, S`Hence \(x-\ln x\ge1\), i.e. \(\ln x\le x-1\) for all \(x>0\).`],
      S`minimum value 1 at \(x=1\)`],
  ], [
    q("Level 3 · tangent through origin", S`The tangent to \(y=e^x\) at \(x=a\) passes through the origin. Find a.`, num(1),
      "y − eᵃ = eᵃ(x − a); put (0, 0).", [S`\(-e^a=-ae^a\Rightarrow a=1\).`], S`\(a=1\)`),
    q("Level 3 · stationary", S`Find the x-coordinate of the stationary point of \(y=x\ln x\) (3 d.p.).`, num(Math.exp(-1), 0.001),
      "Product rule: ln x + 1 = 0.", [S`\(x=e^{-1}\).`], S`\(\approx0.368\)`),
    q("Level 3 · rate of growth", S`A population \(P=1000e^{0.05t}\) is growing at 80 per year. Find t (2 d.p.).`, num(Math.log(1.6) / 0.05, 0.01),
      "50e^(0.05t) = 80.", [S`\(e^{0.05t}=1.6\Rightarrow t=\frac{\ln1.6}{0.05}\).`], S`\(\approx9.40\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is eˣ its own derivative?", "e is exactly the base whose gradient at (0, 1) is 1; then gradient = height everywhere."],
      ["How do I differentiate e^(g(x))?", "Multiply e^(g(x)) by g′(x)."],
      ["How do I differentiate ln(g(x))?", "g′(x) ÷ g(x)."],
      ["What about aˣ?", "aˣ ln a, since aˣ = e^(x ln a)."],
      ["What does dA/dt = kA mean?", "Exponential quantities change at a rate proportional to their size."],
    ],
    summary: [
      "(eˣ)′ = eˣ, (ln x)′ = 1/x, (aˣ)′ = aˣ ln a.",
      "(e^g)′ = g′e^g, (ln g)′ = g′/g; (uv)′ = u′v + uv′.",
      "Tangent: gradient f′(a); normal: −1/f′(a).",
      "For A = A₀e^(kt): dA/dt = kA.",
    ],
    next: "9.7 reviews exponentials and logarithms with mixed exam-style questions.",
  }),
];
