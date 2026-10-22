// IB AA SL 10.3 — Area and Definite Integrals: lower and upper rectangle sums, the trapezoidal rule, the definite integral as a limit of sums and as signed area, properties of definite integrals, evaluating with technology
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, areaDoc, stripsOf } from "./figs10.mjs";

export const TITLE = "10.3 Area and Definite Integrals";
export const ID = "49407a30-55fc-43e6-991e-b621dad9f362";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const f1 = (x) => 9 - x * x;
const trap = (f, a, b, n) => { const h = (b - a) / n; let s = (f(a) + f(b)) / 2; for (let i = 1; i < n; i++) s += f(a + i * h); return s * h; };

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Area and Definite Integrals",
    overview: S`How do you find the area under a curve? Cut it into thin strips, add their areas, and let the strips get thinner. The limit of these sums is the definite integral \(\int_a^b f(x)\,dx\). In this lesson you will estimate areas with lower and upper rectangle sums and the trapezoidal rule, interpret the definite integral as signed area, use its properties, and evaluate definite integrals with technology.`,
    goals: [
      "estimate area with lower and upper rectangle sums;",
      "use the trapezoidal rule and judge over- or under-estimates;",
      S`interpret \(\int_a^b f(x)\,dx\) as signed area (negative below the axis);`,
      "use the properties of definite integrals;",
      "evaluate definite integrals and areas with a GDC.",
    ],
    curriculum: "SL 5.5 (definite integrals using technology; area under a curve); SL 5.8 (trapezoidal rule)",
    prior: [
      ["Find the area of a trapezium with parallel sides 3 and 7 and width 2.", "10."],
      [S`Evaluate \(f(x)=9-x^2\) at \(x=0,1,2,3\).`, "9, 8, 5, 0."],
      ["What is the area of a triangle with base 4 and height 6?", "12."],
    ],
    words: [
      ["Lower sum", "rectangles under the curve: an underestimate", ""],
      ["Upper sum", "rectangles above the curve: an overestimate", ""],
      ["Trapezoidal rule", S`\(\frac h2[y_0+2(y_1+\dots+y_{n-1})+y_n]\)`, ""],
      ["Definite integral", S`\(\int_a^b f(x)\,dx\): the limit of the sums`, "a number, not a function"],
      ["Limits of integration", "the endpoints a (lower) and b (upper)", ""],
    ],
  }),

  section("📌 Rectangles: lower and upper sums", S`
  <p>To estimate the area under \(f(x)=9-x^2\) from 0 to 3, use 3 strips of width 1. On a decreasing function the lower sum uses the right-hand heights: \(8+5+0=13\); the upper sum uses the left-hand heights: \(9+8+5=22\). The true area lies between: \(13<A<22\).</p>
  ${fig(areaDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: f1, color: "violet" }] }, [], stripsOf(f1, 0, 3, 3, "lower", "blue")), "Lower sum, 3 strips: 13 (every rectangle lies under the curve)")}
  ${fig(areaDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: f1, color: "violet" }] }, [], stripsOf(f1, 0, 3, 3, "upper", "red")), "Upper sum, 3 strips: 22 (every rectangle reaches above the curve)")}
  <p>With 6 strips of width 0.5 the bounds tighten to \((15.625<A<20.125)\). As the strips get thinner both sums approach the same number, 18 — the definite integral \(\int_0^3(9-x^2)\,dx\).</p>
  ${keyIdea("Lower sum ≤ area ≤ upper sum. As the number of strips n → ∞ both approach the definite integral.")}`),

  section("📌 The trapezoidal rule", S`
  <p>Joining the tops of the strips with straight lines gives trapezia. With \(n\) strips of width \(h\): \(\int_a^b f(x)\,dx\approx\frac h2\left[y_0+2(y_1+y_2+\dots+y_{n-1})+y_n\right]\). For \(9-x^2\) with 3 strips: \(\frac12[9+2(8+5)+0]=17.5\).</p>
  ${fig(areaDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: f1, color: "violet" }] }, [], stripsOf(f1, 0, 3, 3, "trap", "amber")), "Trapezia, 3 strips: 17.5 — an underestimate because the curve bends outwards (concave down)")}
  ${table(["Shape of curve", "Trapezoidal rule gives"], [["concave up (bends upwards, like x²)", "an overestimate"], ["concave down (bends downwards, like 9 − x²)", "an underestimate"]])}`),

  section("📌 Signed area and properties", S`
  <p>Where \(f(x)<0\) the strip heights are negative, so \(\int_a^b f(x)\,dx\) counts area below the x-axis as negative. To find a total area, split the interval where the curve crosses the axis and add the sizes of the parts.</p>
  ${fig(areaDoc({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }], points: [P(4, 0, "(4, 0)", "green")] }, [{ f: (x) => x * x - 4 * x, a: 0, b: 4, color: "red" }, { f: (x) => x * x - 4 * x, a: 4, b: 4.6, color: "green" }]), "∫₀⁴ (x² − 4x) dx = −32/3: the whole region is below the axis, so the area is 32/3")}
  ${table(["Property", "Meaning"], [
    [S`\(\int_a^a f\,dx=0\)`, "no width, no area"],
    [S`\(\int_b^a f\,dx=-\int_a^b f\,dx\)`, "reversing the limits changes the sign"],
    [S`\(\int_a^b f\,dx+\int_b^c f\,dx=\int_a^c f\,dx\)`, "areas add along the axis"],
    [S`\(\int_a^b(kf+g)\,dx=k\int_a^b f\,dx+\int_a^b g\,dx\)`, "linearity"],
  ])}
  ${watchOut([
    "A definite integral is a number; there is no + C.",
    "Rectangle sums need the correct heights: for an increasing function the lower sum uses left endpoints.",
    "∫ gives signed area: split at the roots before finding a total area.",
    "In the trapezoidal rule only the end ordinates are not doubled.",
  ])}`),

  section("📌 Explore", S`<p>Choose a function and a method, then increase the number of strips. Watch the lower and upper sums close in on the definite integral.</p>`),

  widget("ibRiemann", { init: [1, 4, 2] }),

  examples([
    ["Level 1 · Lower and upper sums", S`Use 4 strips of width 1 to find lower and upper sums for the area under \(y=x^2\) from \(x=1\) to \(x=5\).`,
      [S`Increasing: lower uses left heights \(1+4+9+16=30\).`, S`Upper uses right heights \(4+9+16+25=54\).`],
      S`\(30<A<54\)`,
      fig(areaDoc({ view: { xmin: 0, xmax: 5.5, ymin: -2, ymax: 27 }, step: { x: 1, y: 5 }, curves: [{ f: (x) => x * x, color: "violet" }] }, [], stripsOf((x) => x * x, 1, 5, 4, "lower", "blue")), "Lower sum for x² on [1, 5]: 30")],
    ["Level 1 · Trapezoidal rule", S`Use the trapezoidal rule with 4 strips to estimate \(\int_0^2\sqrt{1+x^3}\,dx\).`,
      [S`\(h=0.5\); \(y\): 1, 1.0607, 1.4142, 2.0917, 3.`, S`\(0.25[1+2(1.0607+1.4142+2.0917)+3]\).`],
      S`\(\approx${Math.round(trap((x) => Math.sqrt(1 + x ** 3), 0, 2, 4) * 1000) / 1000}\)`],
    ["Level 2 · Properties", S`Given \(\int_1^6 f(x)\,dx=14\) and \(\int_4^6 f(x)\,dx=5\), find \(\int_1^4 f(x)\,dx\) and \(\int_1^4\left(2f(x)+3\right)dx\).`,
      [S`\(14-5=9\).`, S`\(2(9)+3(4-1)=18+9\).`],
      S`\(9\); \(27\)`],
    ["Level 2 · GDC", S`Use a GDC to evaluate \(\int_0^{2}e^{-x^2}\,dx\).`,
      ["Enter the integral; the function has no elementary antiderivative."],
      S`\(\approx0.882\)`],
    ["Level 3 · Total area", S`Find the total area between \(y=x^3-x\) and the x-axis from \(x=-1\) to \(x=1\), and compare with \(\int_{-1}^1(x^3-x)\,dx\).`,
      [S`The integral is 0 by symmetry (odd function).`, S`Each lobe has area \(\int_0^1(x-x^3)\,dx=\frac14\) (GDC).`],
      S`total area \(\frac12\); integral \(0\)`,
      fig(areaDoc({ view: { xmin: -1.5, xmax: 1.5, ymin: -0.6, ymax: 0.6 }, step: { x: 0.5, y: 0.2 }, curves: [{ f: (x) => x ** 3 - x, color: "violet" }] }, [{ f: (x) => x ** 3 - x, a: -1, b: 0, color: "green" }, { f: (x) => x ** 3 - x, a: 0, b: 1, color: "red" }]), "Green (above) and red (below) are equal, so the signed total is 0")],
  ]),

  practice([
    q("Level 1 · upper sum", S`For \(y=2x\) on \([0,3]\) with 3 strips of width 1, find the upper sum.`, num(12),
      "Right heights 2, 4, 6.", [S`\(2+4+6\).`], S`\(12\)`),
    q("Level 1 · reverse limits", S`If \(\int_2^7 g(x)\,dx=10\), find \(\int_7^2 g(x)\,dx\).`, num(-10),
      "Swap limits: change sign.", [S`\(-10\).`], S`\(-10\)`),
    q("Level 2 · trapezoidal", S`Estimate \(\int_0^4 x^2\,dx\) with the trapezoidal rule and 4 strips.`, num(22),
      "h = 1; y: 0, 1, 4, 9, 16.", [S`\(\frac12[0+2(1+4+9)+16]\).`], S`\(22\)`),
    q("Level 2 · over or under", S`For \(\int_0^4x^2\,dx\) the trapezoidal estimate is:`, choice(["an overestimate", "an underestimate", "exact", "impossible to tell"], 0),
      "x² is concave up.", ["The chords lie above the curve."], "overestimate"),
    q("Level 2 · linearity", S`\(\int_0^3 f\,dx=4\) and \(\int_0^3 g\,dx=-2\). Find \(\int_0^3(5f-g)\,dx\).`, num(22),
      "5(4) − (−2).", [S`\(20+2\).`], S`\(22\)`),
  ]),

  ...hard([
    ["Bounds that tighten", S`For \(f(x)=\frac{8}{x}\) on \([1,3]\), find lower and upper sums with 4 strips of width 0.5, and use a GDC to find the integral.`,
      [S`Decreasing: upper uses left values \(8,\ 5.333,\ 4,\ 3.2\): \(0.5\times20.533\approx10.27\).`, S`Lower uses right values \(5.333,\ 4,\ 3.2,\ 2.667\): \(0.5\times15.2=7.6\).`, S`GDC: \(8\ln3\approx8.789\), which lies between.`],
      S`\(7.6<A<10.27\); \(\approx8.789\)`,
      fig(areaDoc({ view: { xmin: 0, xmax: 3.5, ymin: -0.5, ymax: 9 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => 8 / x, a: 0.8, b: 3.5, color: "violet" }] }, [], stripsOf((x) => 8 / x, 1, 3, 4, "upper", "red")), "Upper sum for 8/x on [1, 3]")],
    ["Properties with an unknown", S`\(\int_0^5 f(x)\,dx=12\). Find \(k\) if \(\int_0^5\left(f(x)+kx\right)dx=37\).`,
      [S`\(12+k\int_0^5x\,dx=12+k\cdot12.5\).`, S`\(12.5k=25\Rightarrow k=2\).`],
      S`\(k=2\)`],
  ], [
    q("Level 3 · trapezoidal from a table", S`A table gives \(x\): 0, 2, 4, 6 and \(y\): 3, 7, 8, 4. Estimate the area under the curve with the trapezoidal rule.`, num(37),
      "h = 2.", [S`\(1\cdot[3+2(7+8)+4]\).`], S`\(37\)`),
    q("Level 3 · signed", S`\(\int_0^2 f\,dx=6\) and \(\int_2^5 f\,dx=-4\), with \(f<0\) on \((2,5)\). Find the total area from 0 to 5.`, num(10),
      "Add sizes.", [S`\(6+4\).`], S`\(10\)`),
    q("Level 3 · GDC", S`Use a GDC: \(\int_1^3\ln x\,dx\) (3 d.p.).`, num(3 * Math.log(3) - 2, 0.001),
      "Technology.", [S`\(3\ln3-2\).`], S`\(\approx1.296\)`),
  ]),

  wrapUp({
    qas: [
      ["Which heights give the lower sum?", "The smaller end of each strip: left for decreasing, right for increasing functions (reversed for upper)."],
      ["Is the trapezoidal rule an over- or under-estimate?", "Over when the curve is concave up, under when concave down."],
      ["What does a negative definite integral mean?", "More of the region is below the axis than above."],
      ["How do I find a total area?", "Split at the roots and add the absolute values of the parts."],
      ["Why no + C?", "A definite integral is a number; the constants cancel."],
    ],
    summary: [
      "Lower sum ≤ area ≤ upper sum; both → ∫ as n → ∞.",
      "Trapezoidal: (h/2)[y₀ + 2(y₁ + … + yₙ₋₁) + yₙ].",
      "∫ₐᵇ f dx is signed area.",
      "∫ₐᵃ = 0; ∫ᵦᵃ = −∫ₐᵇ; additivity; linearity.",
    ],
    next: "10.4 evaluates definite integrals exactly with the fundamental theorem of calculus.",
  }),
];
