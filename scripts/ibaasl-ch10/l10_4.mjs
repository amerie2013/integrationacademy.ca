// IB AA SL 10.4 — The Fundamental Theorem of Calculus: ∫ₐᵇ f(x)dx = F(b) − F(a), exact areas under curves, regions below the axis, exponential and reciprocal integrals, unknown limits and constants
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, areaDoc } from "./figs10.mjs";

export const TITLE = "10.4 The Fundamental Theorem of Calculus";
export const ID = "1baa0010-0001-4001-8001-000000001004";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🏛️",
    title: "The Fundamental Theorem of Calculus",
    overview: S`The fundamental theorem of calculus links the two halves of calculus: if \(F\) is any antiderivative of \(f\), then \(\int_a^b f(x)\,dx=F(b)-F(a)\). Areas that needed many strips in 10.3 now come from one subtraction. In this lesson you will evaluate definite integrals exactly, find areas under curves (including parts below the axis), integrate exponentials and reciprocals between limits, and solve for unknown limits and constants.`,
    goals: [
      S`evaluate \(\int_a^b f(x)\,dx=\big[F(x)\big]_a^b=F(b)-F(a)\);`,
      "find exact areas between a curve and the x-axis;",
      "split at roots to find total area when the curve crosses the axis;",
      S`evaluate definite integrals of \(e^{ax+b}\), \(\frac1{ax+b}\) and \((ax+b)^n\);`,
      "find an unknown limit or constant from the value of an integral.",
    ],
    curriculum: "SL 5.11 (definite integrals including analytical approach; areas under curves between the curve and the x-axis)",
    prior: [
      [S`Find \(\int(3x^2-2)\,dx\).`, S`\(x^3-2x+C\).`],
      [S`Evaluate \(F(x)=x^3-2x\) at \(x=2\) and \(x=1\).`, "4 and −1."],
      [S`Solve \(x^2-5x=0\).`, S`\(x=0\) or \(x=5\).`],
    ],
    words: [
      ["Fundamental theorem", S`\(\int_a^bf\,dx=F(b)-F(a)\)`, ""],
      ["Square-bracket notation", S`\(\big[F(x)\big]_a^b\)`, S`\(\big[x^2\big]_1^3=8\)`],
      ["Area under a curve", S`\(\int_a^b f\,dx\) when \(f\ge0\)`, ""],
      ["Area below the axis", S`\(\left|\int_a^b f\,dx\right|\) when \(f\le0\)`, ""],
      ["Unknown limit", S`solve \(F(k)-F(a)=\) value for \(k\)`, ""],
    ],
  }),

  section("📌 One subtraction instead of many strips", S`
  <p>For \(\int_0^3(9-x^2)\,dx\) the sums of 10.3 approached 18. The theorem gives it at once: \(\left[9x-\frac13x^3\right]_0^3=(27-9)-0=18\). The constant \(C\) would cancel, so it is left out.</p>
  ${fig(areaDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 9 - x * x, color: "violet" }] }, [{ f: (x) => 9 - x * x, a: 0, b: 3 }]), "∫₀³ (9 − x²) dx = [9x − x³/3]₀³ = 18 exactly")}
  ${table(["Integral", "Antiderivative", "Value"], [
    [S`\(\int_1^4\sqrt x\,dx\)`, S`\(\left[\frac23x^{3/2}\right]_1^4\)`, S`\(\frac{16}3-\frac23=\frac{14}3\)`],
    [S`\(\int_0^{2}e^{3x}\,dx\)`, S`\(\left[\frac13e^{3x}\right]_0^2\)`, S`\(\frac13(e^6-1)\)`],
    [S`\(\int_1^{5}\frac{2}{x}\,dx\)`, S`\(\big[2\ln x\big]_1^5\)`, S`\(2\ln5\)`],
    [S`\(\int_0^1(2x+1)^3\,dx\)`, S`\(\left[\frac{(2x+1)^4}{8}\right]_0^1\)`, S`\(\frac{81-1}{8}=10\)`],
  ])}
  ${keyIdea("∫ₐᵇ f(x) dx = F(b) − F(a): integrate, substitute the upper limit, subtract the value at the lower limit.")}`),

  section("📌 Areas above and below the axis", S`
  <p>When \(f(x)\ge0\) on \([a,b]\) the integral is the area. When \(f(x)\le0\) the integral is negative and the area is its absolute value. If the curve crosses the axis, find the roots, integrate each part separately and add the sizes.</p>
  ${fig(areaDoc({ view: { xmin: -1, xmax: 6, ymin: -7, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 5 * x, color: "violet" }], points: [P(5, 0, "(5, 0)", "green")] }, [{ f: (x) => x * x - 5 * x, a: 0, b: 5, color: "red" }, { f: (x) => x * x - 5 * x, a: 5, b: 6, color: "green" }]), "y = x² − 5x on [0, 6]: red area 125/6 below, green area 17/6 above")}
  <p>On \([0,6]\): \(\int_0^5(x^2-5x)\,dx=-\frac{125}6\) and \(\int_5^6(x^2-5x)\,dx=\frac{17}6\). The integral over \([0,6]\) is \(-\frac{108}6=-18\), but the total area is \(\frac{125}6+\frac{17}6=\frac{71}3\).</p>
  ${fig(areaDoc({ view: { xmin: 0, xmax: 4, ymin: -0.5, ymax: 3 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => 2 / x, a: 0.6, b: 4, color: "violet" }] }, [{ f: (x) => 2 / x, a: 1, b: 3, color: "green" }]), "∫₁³ (2/x) dx = 2 ln 3 ≈ 2.197")}
  ${watchOut([
    "Subtract in the right order: F(upper) − F(lower).",
    "Use brackets when substituting negative limits.",
    "For total area, never integrate straight across a root — split there.",
    S`\(\big[\ln x\big]_1^e=1-0\); remember \(\ln1=0\) and \(e^0=1\).`,
  ])}`),

  section("📌 Explore", S`<p>Choose a function and move the limits a and b. Compare the definite integral (green minus red) with the total area (green plus red).</p>`),

  widget("ibSignedArea", { init: [0, -1, 3] }),

  examples([
    ["Level 1 · Polynomial", S`Evaluate \(\int_1^3(4x^3-6x)\,dx\).`,
      [S`\(\left[x^4-3x^2\right]_1^3=(81-27)-(1-3)\).`],
      S`\(56\)`],
    ["Level 1 · Exponential", S`Evaluate \(\int_0^{\ln 4}e^{x}\,dx\).`,
      [S`\(\big[e^x\big]_0^{\ln4}=4-1\).`],
      S`\(3\)`],
    ["Level 2 · Area under a curve", S`Find the area enclosed by \(y=6x-x^2\) and the x-axis.`,
      [S`Roots \(x=0,6\).`, S`\(\left[3x^2-\frac13x^3\right]_0^6=108-72\).`],
      S`\(36\)`,
      fig(areaDoc({ view: { xmin: -1, xmax: 7, ymin: -2, ymax: 10 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 6 * x - x * x, color: "violet" }], points: [P(3, 9, "(3, 9)")] }, [{ f: (x) => 6 * x - x * x, a: 0, b: 6 }]), "Area enclosed by y = 6x − x² and the x-axis: 36")],
    ["Level 2 · Region below the axis", S`Find the area between \(y=x^2-2x-3\) and the x-axis from \(x=-1\) to \(x=3\).`,
      [S`\(\left[\frac13x^3-x^2-3x\right]_{-1}^3=(9-9-9)-\left(-\frac13-1+3\right)=-\frac{32}3\).`],
      S`\(\frac{32}3\)`],
    ["Level 3 · Unknown limit", S`Find \(k>1\) such that \(\int_1^k\frac{3}{x}\,dx=6\).`,
      [S`\(3\ln k-3\ln1=6\Rightarrow\ln k=2\).`],
      S`\(k=e^2\approx7.39\)`],
  ]),

  practice([
    q("Level 1 · evaluate", S`Evaluate \(\int_0^2(3x^2+4x)\,dx\).`, num(16),
      "[x³ + 2x²]₀².", [S`\(8+8\).`], S`\(16\)`),
    q("Level 1 · root", S`Evaluate \(\int_1^9\frac{1}{\sqrt x}\,dx\).`, num(4),
      "[2√x]₁⁹.", [S`\(6-2\).`], S`\(4\)`),
    q("Level 2 · exponential", S`Evaluate \(\int_0^1 2e^{2x}\,dx\) (3 d.p.).`, num(Math.exp(2) - 1, 0.001),
      "[e^(2x)]₀¹.", [S`\(e^2-1\).`], S`\(\approx6.389\)`),
    q("Level 2 · area", S`Find the area enclosed by \(y=4-x^2\) and the x-axis.`, num(32 / 3, 0.001),
      "Roots ±2.", [S`\(\left[4x-\frac13x^3\right]_{-2}^2\).`], S`\(\frac{32}{3}\)`),
    q("Level 2 · sign", S`\(\int_1^4(x-5)\,dx\) is:`, choice(["negative", "positive", "zero", "undefined"], 0),
      "x − 5 < 0 on [1, 4].", [S`\(\left[\frac12x^2-5x\right]_1^4=-7.5\).`], "negative"),
  ]),

  ...hard([
    ["Total area across a root", S`Find the total area between \(y=x^3-4x\) and the x-axis from \(x=0\) to \(x=3\).`,
      [S`Root at \(x=2\). \(\int_0^2(x^3-4x)\,dx=\left[\frac14x^4-2x^2\right]_0^2=-4\).`, S`\(\int_2^3(x^3-4x)\,dx=\left(\frac{81}4-18\right)-(-4)=\frac{25}4\).`, S`Total \(4+\frac{25}4=\frac{41}4\).`],
      S`\(\frac{41}4=10.25\)`,
      fig(areaDoc({ view: { xmin: -0.5, xmax: 3.3, ymin: -4, ymax: 16 }, step: { x: 0.5, y: 2 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "violet" }], points: [P(2, 0, "(2, 0)", "green")] }, [{ f: (x) => x ** 3 - 4 * x, a: 0, b: 2, color: "red" }, { f: (x) => x ** 3 - 4 * x, a: 2, b: 3, color: "green" }]), "Red area 4 below the axis, green area 25/4 above")],
    ["An unknown constant", S`Given \(\int_0^2(ax^2+3)\,dx=14\), find \(a\).`,
      [S`\(\left[\frac a3x^3+3x\right]_0^2=\frac{8a}3+6=14\).`],
      S`\(a=3\)`],
  ], [
    q("Level 3 · unknown limit", S`Find \(k>0\) with \(\int_0^k(2x+1)\,dx=12\).`, num(3),
      "k² + k = 12.", [S`\((k+4)(k-3)=0\).`], S`\(3\)`),
    q("Level 3 · log integral", S`Evaluate \(\int_0^2\frac{4}{2x+1}\,dx\) (3 d.p.).`, num(2 * Math.log(5), 0.001),
      "[2 ln(2x + 1)]₀².", [S`\(2\ln5\).`], S`\(\approx3.219\)`),
    q("Level 3 · total area", S`Find the total area between \(y=x^2-1\) and the x-axis from \(x=0\) to \(x=3\).`, num(22 / 3, 0.001),
      "Split at 1.", [S`\(\frac23+\frac{20}3\).`], S`\(\frac{22}3\)`),
  ]),

  wrapUp({
    qas: [
      ["What does the fundamental theorem say?", "∫ₐᵇ f dx = F(b) − F(a) for any antiderivative F."],
      ["Why can C be ignored?", "It appears in F(b) and F(a) and cancels."],
      ["When is the integral not the area?", "When part of the curve is below the axis on the interval."],
      ["How do I find an enclosed area?", "Find where the curve meets the axis and use those x-values as limits."],
      ["How do I find an unknown limit?", "Evaluate in terms of k, set equal to the given value, and solve."],
    ],
    summary: [
      "∫ₐᵇ f dx = [F(x)]ₐᵇ = F(b) − F(a).",
      "Area below the axis: take the absolute value.",
      "Split at roots for total area.",
      "Use ln and e rules for limits: ln 1 = 0, e⁰ = 1.",
    ],
    next: "10.5 finds areas between two curves.",
  }),
];
