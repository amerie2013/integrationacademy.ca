// IB AA SL 13.1 — The Chain, Product and Quotient Rules: derivatives of composite functions, products and quotients, tangents and stationary points using them
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "13.1 The Chain, Product and Quotient Rules";
export const ID = "1baa0013-0001-4001-8001-000000001301";
const S = String.raw;
const P = (x, y, label, color = "red") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🔗",
    title: "The Chain, Product and Quotient Rules",
    overview: S`The power rule handles \(x^n\), but most functions are built from simpler ones: composed (\((2x+3)^5\), \(e^{x^2}\)), multiplied (\(x^2\ln x\)) or divided (\(\frac{3x+1}{x-2}\)). Three rules cover every case. The chain rule differentiates a function of a function, the product rule a product and the quotient rule a quotient. In this lesson you will use them, and combinations of them, to find gradients, tangents and stationary points.`,
    goals: [
      "differentiate composite functions with the chain rule;",
      "differentiate products with the product rule;",
      "differentiate quotients with the quotient rule;",
      "combine the rules and simplify by factorising;",
      "use the rules to find tangents and stationary points.",
    ],
    curriculum: "SL 5.6 (derivatives of composite functions using the chain rule; the product and quotient rules)",
    prior: [
      [S`Differentiate \(4x^3-7x\).`, S`\(12x^2-7\).`],
      [S`State \(\frac{d}{dx}e^x\) and \(\frac{d}{dx}\ln x\).`, S`\(e^x\) and \(\frac1x\).`],
      [S`Write \(\sqrt{4x+1}\) as \(f(g(x))\).`, S`\(f(u)=\sqrt u\), \(g(x)=4x+1\).`],
    ],
    words: [
      ["Composite function", S`a function of a function, \(f(g(x))\)`, S`\((2x+3)^5\)`],
      ["Inner function", S`the function applied first, \(u=g(x)\)`, S`\(u=2x+3\)`],
      ["Chain rule", S`\(\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}\)`, ""],
      ["Product rule", S`\((uv)'=u'v+uv'\)`, ""],
      ["Quotient rule", S`\(\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}\)`, ""],
    ],
  }),

  section("📌 The chain rule", S`
  <p>For \(y=(2x+3)^5\), let \(u=2x+3\), so \(y=u^5\). Then \(\frac{dy}{du}=5u^4\) and \(\frac{du}{dx}=2\), so \(\frac{dy}{dx}=5(2x+3)^4\cdot2=10(2x+3)^4\). In words: differentiate the outer function, leave the inside alone, then multiply by the derivative of the inside.</p>
  ${plane({ view: { xmin: -0.5, xmax: 2, ymin: -3, ymax: 6 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => (2 * x - 1) ** 3, color: "violet" }], lines: [{ m: 6, b: -5, color: "amber", dash: true }], points: [P(1, 1, "(1, 1)")] }, "y = (2x − 1)³: the chain rule gives 6(2x − 1)², so the tangent at x = 1 has slope 6")}
  ${table(["Function", "Outer · inner", "Derivative"], [[S`\((2x-1)^3\)`, S`\(u^3\), \(u=2x-1\)`, S`\(6(2x-1)^2\)`], [S`\(\sqrt{4x+1}\)`, S`\(\sqrt u\), \(u=4x+1\)`, S`\(\frac{2}{\sqrt{4x+1}}\)`], [S`\(e^{5x}\)`, S`\(e^u\), \(u=5x\)`, S`\(5e^{5x}\)`], [S`\(\ln(x^2+1)\)`, S`\(\ln u\), \(u=x^2+1\)`, S`\(\frac{2x}{x^2+1}\)`]])}
  ${plane({ view: { xmin: -0.5, xmax: 5, ymin: -0.5, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(4 * x + 1), color: "violet" }], lines: [{ m: 2 / 3, b: 3 - 4 / 3, color: "amber", dash: true }], points: [P(2, 3, "(2, 3)")] }, "y = √(4x + 1): gradient 2/√(4x + 1) = 2/3 at x = 2")}
  ${keyIdea(S`Chain rule: \(\frac{d}{dx}f(g(x))=f'(g(x))\cdot g'(x)\). Outer derivative first, then multiply by the inner derivative.`)}`),

  section("📌 The product and quotient rules", S`
  <p>For a product \(y=uv\): \(\frac{dy}{dx}=u'v+uv'\). For \(y=xe^x\): \(u=x\), \(v=e^x\), so \(y'=e^x+xe^x=e^x(1+x)\), which is zero at \(x=-1\) — the minimum point below.</p>
  ${plane({ view: { xmin: -4, xmax: 1, ymin: -0.8, ymax: 2.5 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => x * Math.exp(x), color: "violet" }], points: [P(-1, -Math.exp(-1), "(−1, −0.37)")] }, "y = xeˣ has y′ = eˣ(1 + x) = 0 at x = −1")}
  <p>For a quotient \(y=\frac uv\): \(\frac{dy}{dx}=\frac{u'v-uv'}{v^2}\). For \(y=\frac{e^x}{x}\): \(y'=\frac{e^x\cdot x-e^x\cdot1}{x^2}=\frac{e^x(x-1)}{x^2}\), zero at \(x=1\).</p>
  ${plane({ view: { xmin: 0, xmax: 3.5, ymin: 0, ymax: 8 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => Math.exp(x) / x, color: "violet" }], lines: [{ m: 0, b: Math.E, color: "amber", dash: true }], points: [P(1, Math.E, "(1, e)")] }, "y = eˣ/x has a horizontal tangent at (1, e)")}
  ${watchOut([
    S`\((uv)'\ne u'v'\): the derivative of a product is not the product of the derivatives.`,
    S`In the quotient rule the order matters: \(u'v-uv'\), top first.`,
    "Do not forget the inner derivative in the chain rule.",
    "Factorise the answer before solving f′(x) = 0.",
  ])}`),

  section("📌 Explore", S`<p>Pick a function and slide the point. The amber tangent's slope always equals the value from the rule.</p>`),

  widget("ibRules", { init: [0, 0.5] }),

  examples([
    ["Level 1 · Chain", S`Differentiate \(y=(5x-2)^6\).`,
      [S`Outer \(u^6\to6u^5\); inner derivative 5.`],
      S`\(30(5x-2)^5\)`],
    ["Level 1 · Chain with e", S`Differentiate \(y=e^{x^2}\).`,
      [S`\(e^u\) with \(u=x^2\), \(u'=2x\).`],
      S`\(2xe^{x^2}\)`],
    ["Level 2 · Product", S`Differentiate \(y=x^2\ln x\).`,
      [S`\(u=x^2\), \(v=\ln x\): \(2x\ln x+x^2\cdot\frac1x\).`],
      S`\(2x\ln x+x\)`],
    ["Level 2 · Quotient", S`Differentiate \(y=\frac{3x+1}{x-2}\).`,
      [S`\(\frac{3(x-2)-(3x+1)(1)}{(x-2)^2}\).`],
      S`\(-\frac{7}{(x-2)^2}\)`],
    ["Level 3 · Product with chain", S`Find the stationary points of \(y=x(2x+1)^4\).`,
      [S`\(y'=(2x+1)^4+x\cdot8(2x+1)^3=(2x+1)^3(2x+1+8x)=(2x+1)^3(10x+1)\).`, S`\(y'=0\) at \(x=-\frac12\) (y = 0) and \(x=-\frac1{10}\) (\(y=-0.1(0.8)^4\approx-0.041\)).`],
      S`\(\left(-\frac12,0\right)\) and \(\left(-\frac{1}{10},-0.041\right)\)`,
      plane({ view: { xmin: -0.8, xmax: 0.3, ymin: -0.08, ymax: 0.06 }, step: { x: 0.1, y: 0.02 }, curves: [{ f: (x) => x * (2 * x + 1) ** 4, color: "violet" }], points: [P(-0.5, 0, "(−0.5, 0)"), P(-0.1, -0.1 * 0.8 ** 4, "(−0.1, −0.041)")] }, "y = x(2x + 1)⁴: stationary points at x = −0.5 and x = −0.1")],
  ]),

  practice([
    q("Level 1 · chain", S`Find \(\frac{dy}{dx}\) at \(x=0\) for \(y=(4x+1)^3\).`, num(12),
      "12(4x + 1)².", [S`\(12(1)^2\).`], S`\(12\)`),
    q("Level 1 · log", S`Find \(\frac{dy}{dx}\) at \(x=1\) for \(y=\ln(3x+2)\).`, num(0.6, 0.001),
      "3/(3x + 2).", [S`\(\frac35\).`], S`\(0.6\)`),
    q("Level 2 · product", S`Find \(\frac{dy}{dx}\) at \(x=0\) for \(y=xe^{2x}\).`, num(1),
      "e^{2x} + 2xe^{2x}.", [S`\(1+0\).`], S`\(1\)`),
    q("Level 2 · quotient", S`The derivative of \(\frac{x}{x+3}\) is:`, choice([S`\(\frac{3}{(x+3)^2}\)`, S`\(\frac{1}{(x+3)^2}\)`, S`\(\frac{2x+3}{(x+3)^2}\)`, S`\(-\frac{3}{(x+3)^2}\)`], 0),
      "(x + 3 − x)/(x + 3)².", [S`\(\frac{3}{(x+3)^2}\).`], S`\(\frac{3}{(x+3)^2}\)`),
    q("Level 2 · quotient value", S`Find \(\frac{dy}{dx}\) at \(x=2\) for \(y=\frac{x^2+1}{x}\).`, num(0.75, 0.001),
      "(x² − 1)/x².", [S`\(\frac{3}{4}\).`], S`\(0.75\)`),
  ]),

  ...hard([
    ["A tangent needing the product and chain rules", S`Find the equation of the tangent to \(y=x\sqrt{x+3}\) at \(x=1\).`,
      [S`\(y(1)=1\cdot2=2\).`, S`\(y'=\sqrt{x+3}+\frac{x}{2\sqrt{x+3}}\); \(y'(1)=2+\frac14=2.25\).`, S`\(y-2=2.25(x-1)\).`],
      S`\(y=2.25x-0.25\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -3, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * Math.sqrt(x + 3), color: "violet" }], lines: [{ m: 2.25, b: -0.25, color: "amber", dash: true }], points: [P(1, 2, "(1, 2)")] }, "y = x√(x + 3) and its tangent at x = 1")],
    ["A maximum from the quotient rule", S`Find the stationary point of \(y=\frac{\ln x}{x}\) and decide its nature.`,
      [S`\(y'=\frac{\frac1x\cdot x-\ln x}{x^2}=\frac{1-\ln x}{x^2}\).`, S`\(y'=0\Rightarrow\ln x=1\Rightarrow x=e\), \(y=\frac1e\).`, S`y′ > 0 for x < e and y′ < 0 for x > e: a maximum.`],
      S`maximum at \(\left(e,\frac1e\right)\approx(2.718,0.368)\)`,
      plane({ view: { xmin: 0, xmax: 10, ymin: -1, ymax: 0.6 }, step: { x: 1, y: 0.2 }, curves: [{ f: (x) => Math.log(x) / x, color: "violet" }], lines: [{ m: 0, b: 1 / Math.E, color: "amber", dash: true }], points: [P(Math.E, 1 / Math.E, "(e, 1/e)")] }, "y = ln x / x has its maximum at x = e")],
  ], [
    q("Level 3 · stationary", S`Find the x-coordinate of the stationary point of \(y=x^2e^{-x}\) with \(x>0\).`, num(2),
      "y′ = xe^{−x}(2 − x).", [S`\(2xe^{-x}-x^2e^{-x}=xe^{-x}(2-x)\).`], S`\(2\)`),
    q("Level 3 · product of powers", S`Find \(\frac{dy}{dx}\) at \(x=1\) for \(y=(2x-1)^3(x+1)^2\).`, num(28),
      "u′v + uv′ with chain rule in each.", [S`\(6(2x-1)^2(x+1)^2+(2x-1)^3\cdot2(x+1)\) at 1: \(24+4\).`], S`\(28\)`),
    q("Level 3 · normal", S`Find the gradient of the normal to \(y=\frac{x+1}{x-1}\) at \(x=3\).`, num(2),
      "y′ = −2/(x − 1)².", [S`\(y'(3)=-\frac12\); normal slope \(2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["When do I use the chain rule?", "Whenever one function sits inside another, such as a bracket to a power, e to a function or ln of a function."],
      ["What is the product rule?", "(uv)′ = u′v + uv′."],
      ["What is the quotient rule?", "(u/v)′ = (u′v − uv′)/v²; keep the order."],
      ["How do I combine them?", "Work from the outside in: decide the main structure (product, quotient or composite) first."],
      ["Why factorise?", "A factorised derivative makes solving f′(x) = 0 easy."],
    ],
    summary: [
      "Chain: outer derivative × inner derivative.",
      "Product: u′v + uv′.",
      "Quotient: (u′v − uv′)/v².",
      "Factorise before solving f′(x) = 0.",
    ],
    next: "13.2 finds the derivatives of the trigonometric functions.",
  }),
];
