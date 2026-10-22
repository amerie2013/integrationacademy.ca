// IB AA SL 10.2 — Integrating Exponentials, Reciprocals and Linear Composites: ∫eˣ, ∫e^(ax+b), ∫1/x = ln|x|, ∫1/(ax+b), ∫(ax+b)ⁿ, integration by inspection (reverse chain rule), boundary conditions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fig, areaDoc } from "./figs10.mjs";

export const TITLE = "10.2 Integrating Exponentials, Reciprocals and Linear Composites";
export const ID = "1baa0010-0001-4001-8001-000000001002";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Integrating Exponentials, Reciprocals and Linear Composites",
    overview: S`The power rule fails for \(x^{-1}\), and it cannot handle \(e^x\). Reversing the derivatives from chapter 9 fills these gaps: \(\int e^x\,dx=e^x+C\) and \(\int\frac1x\,dx=\ln|x|+C\). Reversing the chain rule then handles a linear expression inside, such as \(e^{3x-1}\), \(\frac1{2x+5}\) or \((4x-1)^6\), and, by inspection, integrands of the form \(g'(x)\,f(g(x))\).`,
    goals: [
      S`use \(\int e^x\,dx=e^x+C\) and \(\int\frac1x\,dx=\ln|x|+C\);`,
      S`integrate \(e^{ax+b}\), \(\frac{1}{ax+b}\) and \((ax+b)^n\) by dividing by \(a\);`,
      S`recognise integrands of the form \(g'(x)f(g(x))\) and integrate by inspection;`,
      "check an integral by differentiating;",
      "use boundary conditions with exponential and log antiderivatives.",
    ],
    curriculum: "SL 5.10 (indefinite integrals of xⁿ, eˣ, 1/x; composites with linear functions; integration by inspection or substitution)",
    prior: [
      [S`Differentiate \(e^{4x}\).`, S`\(4e^{4x}\).`],
      [S`Differentiate \(\ln(3x+2)\).`, S`\(\frac{3}{3x+2}\).`],
      [S`Differentiate \((2x+1)^5\).`, S`\(10(2x+1)^4\).`],
    ],
    words: [
      ["Reverse chain rule", "divide by the derivative of a linear inside", S`\(\int e^{5x}dx=\frac15e^{5x}+C\)`],
      [S`\(\ln|x|\)`, S`the antiderivative of \(\frac1x\) for \(x\ne0\)`, S`\(\int\frac{dx}{x}\)`],
      ["By inspection", "spot the inner derivative as a factor", S`\(\int2xe^{x^2}dx=e^{x^2}+C\)`],
      ["Linear composite", S`a function of \(ax+b\)`, S`\((3x-4)^7\)`],
      ["Check", "differentiate your answer to recover the integrand", ""],
    ],
  }),

  section("📌 Exponentials and 1/x", S`
  ${table(["Derivative", "Integral"], [
    [S`\(\frac{d}{dx}e^x=e^x\)`, S`\(\int e^x\,dx=e^x+C\)`],
    [S`\(\frac{d}{dx}e^{ax+b}=ae^{ax+b}\)`, S`\(\int e^{ax+b}\,dx=\frac1ae^{ax+b}+C\)`],
    [S`\(\frac{d}{dx}\ln x=\frac1x\)`, S`\(\int\frac1x\,dx=\ln|x|+C\)`],
    [S`\(\frac{d}{dx}\ln(ax+b)=\frac{a}{ax+b}\)`, S`\(\int\frac{1}{ax+b}\,dx=\frac1a\ln|ax+b|+C\)`],
  ])}
  <p>The area under \(y=\frac1x\) from 1 to \(b\) is \(\ln b\); in particular the area from 1 to \(e\) is exactly 1.</p>
  ${fig(areaDoc({ view: { xmin: 0, xmax: 6, ymin: -0.3, ymax: 3 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => 1 / x, a: 0.3, b: 6, color: "violet" }], points: [P(Math.E, 1 / Math.E, "x = e", "red")] }, [{ f: (x) => 1 / x, a: 1, b: Math.E }]), "The shaded area under y = 1/x from x = 1 to x = e equals ln e = 1")}
  ${fig(areaDoc({ view: { xmin: -2, xmax: 2, ymin: -0.5, ymax: 8 }, step: { x: 0.5, y: 1 }, curves: [{ f: Math.exp, color: "violet" }] }, [{ f: Math.exp, a: 0, b: 1.5, color: "green" }]), "Area under y = eˣ from 0 to 1.5 = e^1.5 − 1 ≈ 3.48")}
  ${keyIdea("For a linear inside ax + b: integrate as if it were x, then divide by a.")}`),

  section("📌 Linear composites and integration by inspection", S`
  <p>Since \(\frac{d}{dx}(4x-1)^7=28(4x-1)^6\), we have \(\int(4x-1)^6\,dx=\frac{(4x-1)^7}{28}+C\): raise the power, divide by the new power and by \(a=4\).</p>
  <p>More generally, if the integrand is \(g'(x)\,f(g(x))\), the answer is \(F(g(x))+C\). For example \(\int 3x^2e^{x^3}\,dx=e^{x^3}+C\) and \(\int\frac{2x}{x^2+5}\,dx=\ln(x^2+5)+C\). If the inner derivative is only out by a constant factor, adjust: \(\int xe^{x^2}dx=\frac12e^{x^2}+C\).</p>
  ${plane({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 5 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => x * Math.exp(x * x), color: "amber" }, { f: (x) => 0.5 * Math.exp(x * x), color: "violet" }], points: [P(0, 0.5, "(0, ½)")] }, "f(x) = xe^(x²) (amber) and its antiderivative ½e^(x²) (violet): F is flat where f = 0")}
  ${watchOut([
    S`\(\int e^{3x}dx=\frac13e^{3x}+C\), not \(3e^{3x}\) and not \(\frac{e^{3x+1}}{3x+1}\).`,
    S`\(\int\frac{1}{4x}dx=\frac14\ln|x|+C\) — or \(\frac14\ln|4x|+C\), which differs only in C.`,
    S`The reverse chain rule only works directly when the inside is linear, or its derivative is a factor.`,
    S`Use \(\ln|x|\): the log needs a positive argument, but \(\frac1x\) exists for negative \(x\) too.`,
  ])}`),

  section("📌 Explore", S`<p>Move the upper limit b to see the area under 1/x equal ln b, and the area under eˣ equal eᵇ − 1.</p>`),

  widget("ibLogArea", { init: [0, 2.5] }),

  examples([
    ["Level 1 · Exponential", S`Find \(\int(6e^{2x}-e^{-x})\,dx\).`,
      [S`\(6\cdot\frac12e^{2x}-\frac{1}{-1}e^{-x}\).`],
      S`\(3e^{2x}+e^{-x}+C\)`],
    ["Level 1 · Reciprocal", S`Find \(\int\left(\frac{5}{x}+\frac{3}{2x+1}\right)dx\).`,
      [S`\(5\ln|x|+\frac32\ln|2x+1|\).`],
      S`\(5\ln|x|+\frac32\ln|2x+1|+C\)`],
    ["Level 2 · Linear power", S`Find \(\int\frac{8}{(3x-2)^2}\,dx\).`,
      [S`\(8(3x-2)^{-2}\).`, S`\(8\cdot\frac{(3x-2)^{-1}}{-1\cdot3}\).`],
      S`\(-\dfrac{8}{3(3x-2)}+C\)`],
    ["Level 2 · Boundary condition", S`\(f'(x)=e^{0.5x}\) and \(f(0)=5\). Find \(f(x)\) and \(f(2)\).`,
      [S`\(f(x)=2e^{0.5x}+C\); \(5=2+C\Rightarrow C=3\).`, S`\(f(2)=2e+3\approx8.44\).`],
      S`\(f(x)=2e^{0.5x}+3\); \(\approx8.44\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: 0, ymax: 14 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 2 * Math.exp(0.5 * x) + 3, color: "violet" }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [P(0, 5, "(0, 5)"), P(2, 2 * Math.E + 3, "(2, 8.44)", "red")] }, "f(x) = 2e^(0.5x) + 3, asymptote y = 3")],
    ["Level 3 · By inspection", S`Find \(\int\frac{x^2}{x^3+4}\,dx\) for \(x>-\sqrt[3]4\).`,
      [S`\(\frac{d}{dx}(x^3+4)=3x^2\), so the integrand is \(\frac13\cdot\frac{3x^2}{x^3+4}\).`],
      S`\(\frac13\ln(x^3+4)+C\)`],
  ]),

  practice([
    q("Level 1 · exponential", S`\(\int e^{4x}\,dx=ke^{4x}+C\). Find k.`, num(0.25, 0.001),
      "Divide by 4.", [S`\(\frac14\).`], S`\(\frac14\)`),
    q("Level 1 · reciprocal", S`\(\int\frac{7}{x}\,dx=\)`, choice([S`\(7\ln|x|+C\)`, S`\(-\frac{7}{x^2}+C\)`, S`\(\ln|7x|\cdot7+C\)`, S`\(\frac{7x^0}{0}\)`], 0),
      "∫1/x = ln|x|.", [S`\(7\ln|x|\).`], S`\(7\ln|x|+C\)`),
    q("Level 2 · linear power", S`\(\int(5x-1)^3\,dx=k(5x-1)^4+C\). Find k.`, num(0.05, 0.0001),
      "1/(4 × 5).", [S`\(\frac1{20}\).`], S`\(\frac1{20}\)`),
    q("Level 2 · log composite", S`\(\int\frac{6}{3x+4}\,dx=k\ln|3x+4|+C\). Find k.`, num(2),
      "6/3.", [S`\(2\ln|3x+4|\).`], S`\(2\)`),
    q("Level 2 · boundary", S`\(f'(x)=\frac1x\) for \(x>0\) and \(f(1)=3\). Find \(f(e^2)\).`, num(5),
      "f = ln x + 3.", [S`\(2+3\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Inspection with an exponential", S`Find \(\int(2x+1)e^{x^2+x}\,dx\), and the antiderivative passing through \((0,4)\).`,
      [S`\(\frac{d}{dx}(x^2+x)=2x+1\): the integral is \(e^{x^2+x}+C\).`, S`\(4=e^0+C\Rightarrow C=3\).`],
      S`\(e^{x^2+x}+3\)`,
      plane({ view: { xmin: -2, xmax: 1.2, ymin: 0, ymax: 12 }, step: { x: 0.5, y: 2 }, curves: [{ f: (x) => Math.exp(x * x + x) + 3, color: "violet" }], points: [P(0, 4, "(0, 4)"), P(-0.5, Math.exp(-0.25) + 3, "min (−0.5, 3.78)", "red")] }, "F(x) = e^(x² + x) + 3, minimum where 2x + 1 = 0")],
    ["Splitting a fraction", S`Find \(\int\frac{2x^2+3}{x}\,dx\) for \(x>0\).`,
      [S`\(\frac{2x^2}{x}+\frac{3}{x}=2x+\frac3x\).`],
      S`\(x^2+3\ln x+C\)`],
  ], [
    q("Level 3 · inspection", S`\(\int\frac{4x}{x^2+9}\,dx=k\ln(x^2+9)+C\). Find k.`, num(2),
      "4x = 2(2x).", [S`\(2\ln(x^2+9)\).`], S`\(2\)`),
    q("Level 3 · boundary with e", S`\(f'(x)=4e^{2x}\) and \(f(0)=1\). Find \(f(\ln 3)\).`, num(17),
      "f = 2e^(2x) − 1.", [S`\(2\cdot9-1\).`], S`\(17\)`),
    q("Level 3 · linear power", S`\(\int\sqrt{6x+1}\,dx\) equals:`, choice([S`\(\frac19(6x+1)^{3/2}+C\)`, S`\(\frac23(6x+1)^{3/2}+C\)`, S`\(4(6x+1)^{3/2}+C\)`, S`\(\frac{1}{3}(6x+1)^{1/2}+C\)`], 0),
      "Raise to 3/2, divide by 3/2 and by 6.", [S`\(\frac{(6x+1)^{3/2}}{(3/2)\cdot6}\).`], S`\(\frac19(6x+1)^{3/2}+C\)`),
  ]),

  wrapUp({
    qas: [
      ["What is ∫1/x dx?", "ln|x| + C — the power rule fails for n = −1."],
      ["How do I integrate e^(ax+b)?", "(1/a)e^(ax+b) + C."],
      ["How do I integrate (ax + b)ⁿ?", "(ax + b)ⁿ⁺¹ ÷ [a(n + 1)] + C, for n ≠ −1."],
      ["When can I integrate by inspection?", "When the derivative of an inner function appears as a factor (up to a constant)."],
      ["How do I check?", "Differentiate your answer; you should get the integrand."],
    ],
    summary: [
      "∫eˣ dx = eˣ + C; ∫1/x dx = ln|x| + C.",
      "Linear inside ax + b: integrate, then divide by a.",
      "∫g′(x)f(g(x)) dx = F(g(x)) + C.",
      "Use boundary conditions to fix C.",
    ],
    next: "10.3 connects integrals with area under a curve.",
  }),
];
