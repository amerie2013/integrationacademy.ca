// MCV4U 2.7 — Chapter 2 Review (NEW lesson): power, product, chain and quotient rules, velocity and acceleration,
// and rate-of-change problems, with multi-rule examples, mixed practice, a readiness checklist and a hard level
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr, hard, plane, rat } from "./lib.mjs";

export const TITLE = "2.7 Chapter 2 Review";
export const ID = "6d4fc002-0001-4001-8001-000000000207";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 2 Review — Derivatives",
    overview: S`This page pulls the chapter together before the test. The rules of Chapter 2 replace first-principles limits: the power rule for single terms, the product and quotient rules for products and quotients, and the chain rule for anything with an "inside". The hard part of most questions is choosing the rules and combining them in the right order. Each example below uses at least two skills; try it before reading the solution.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "choose the right rule (or combination of rules) for a function;",
      "find tangents and horizontal tangents of any function in the chapter;",
      "analyze motion with velocity and acceleration;",
      "interpret derivatives as rates of change in context.",
    ],
    curriculum: "A2.2–A2.4, A3.1–A3.5 (whole chapter)",
    prior: [
      [S`\(\frac{d}{dx}x^{-3}\)?`, S`\(-3x^{-4}\).`],
      [S`\((uv)'\)?`, S`\(u'v+uv'\).`],
      [S`\(\frac{d}{dx}(5x+2)^3\)?`, S`\(15(5x+2)^2\).`],
    ],
    words: [
      ["Power rule", "\\(\\frac{d}{dx}x^n=nx^{n-1}\\)", "any real n"],
      ["Product / quotient", "\\(u'v+uv'\\) / \\(\\frac{u'v-uv'}{v^2}\\)", ""],
      ["Chain rule", "\\(f'(g(x))\\,g'(x)\\)", ""],
      ["Velocity / acceleration", "\\(v=s'\\), \\(a=v'=s''\\)", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["2.1 Polynomials", "power, constant, sum rules", "x⁶ − 4x → 6x⁵ − 4", "rewrite roots as powers"],
    ["2.2 Product rule", "(uv)′ = u′v + uv′", "x(x + 4) → 2x + 4", "(uv)′ ≠ u′v′"],
    ["2.3 Motion", "v = s′, a = s″", "s = t² → a = 2", "speeding up: v, a same sign"],
    ["2.4 Chain rule", "outside′ at inside × inside′", "(x² + 4)³ → 6x(x² + 4)²", "don't drop the inner derivative"],
    ["2.5 Quotient rule", "(u′v − uv′)/v²", "1/(x + 4) → −1/(x + 4)²", "order in the numerator"],
    ["2.6 Rates", "f′ = rate with units", "C′(x) = marginal cost", "rate ≠ total"],
  ])),

  section("📌 Choosing the rule", S`
  ${table(["Shape of the function", "Rule"], [
    ["sum of powers of x", "power rule term by term"],
    ["one factor times another", "product rule"],
    ["something raised to a power, a root of something", "chain rule"],
    ["one expression over another", "quotient rule (or rewrite as a product)"],
    ["constant over a single power of x", "rewrite: \\(\\frac{3}{x^2}=3x^{-2}\\)"],
  ])}
  ${keyIdea(S`Look at the <em>last</em> operation you would do to evaluate the function: if it is a multiplication, start with the product rule; a division, the quotient rule; a power of a bracket, the chain rule. Then apply other rules inside.`)}`),

  section("📌 Explore", S`<p>Use the chain rule explorer to check the composite derivatives below: choose the inner function, set the power, and compare the slope with your answer.</p>`),

  widget("chainRuleLab", { init: { inner: "cub", n: 2, x: 1 } }),

  examples([
    ["Product and chain", S`Differentiate \(y=x^3\sqrt{2x+1}\) and write the answer as one fraction.`,
      [S`\(y'=3x^2(2x+1)^{1/2}+x^3\cdot\tfrac12(2x+1)^{-1/2}\cdot2\).`, S`Common denominator \(\sqrt{2x+1}\): \(\dfrac{3x^2(2x+1)+x^3}{\sqrt{2x+1}}\).`],
      S`\(y'=\dfrac{x^2(7x+3)}{\sqrt{2x+1}}\)`],
    ["Quotient and chain", S`Find the horizontal tangents of \(y=\dfrac{(x+1)^2}{x-2}\).`,
      [S`\(y'=\dfrac{2(x+1)(x-2)-(x+1)^2}{(x-2)^2}=\dfrac{(x+1)(x-5)}{(x-2)^2}\).`, S`Zero at \(x=-1\) and \(x=5\); \(y(-1)=0\), \(y(5)=12\).`],
      S`\((-1,0)\) and \((5,12)\)`,
      plane({ view: { xmin: -4, xmax: 9, ymin: -12, ymax: 28 }, curves: rat((x) => (x + 1) ** 2 / (x - 2), [2], { xmin: -4, xmax: 9 }), vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "red" }, { x: 5, y: 12, label: "(5, 12)", color: "red" }], step: { x: 1, y: 4 } })],
    ["Motion", S`A particle moves with \(s(t)=2t^3-9t^2+12t\) m. When is it at rest, and what is its acceleration at the first of those times?`,
      [S`\(v=6t^2-18t+12=6(t-1)(t-2)\): at rest at \(t=1\) and \(t=2\) s.`, S`\(a=12t-18\Rightarrow a(1)=-6\).`],
      S`at rest at 1 s and 2 s; \(a(1)=-6\) m/s²`,
      plane({ view: { xmin: 0, xmax: 3, ymin: -8, ymax: 14 }, curves: [{ f: (t) => 2 * t ** 3 - 9 * t * t + 12 * t, color: "violet" }, { f: (t) => 6 * t * t - 18 * t + 12, color: "blue" }, { f: (t) => 12 * t - 18, color: "amber" }], points: [{ x: 1, y: 0, label: "v = 0", color: "red" }, { x: 2, y: 0, label: "v = 0", color: "red" }], step: { x: 0.5, y: 2 } })],
    ["Marginal cost", S`\(C(x)=0.001x^3-0.3x^2+40x+1000\) dollars. Find \(C'(100)\), and the production level where the marginal cost is lowest.`,
      [S`\(C'(x)=0.003x^2-0.6x+40\Rightarrow C'(100)=30-60+40=10\).`, S`\(C'\) is a parabola; its vertex is at \(x=\tfrac{0.6}{0.006}=100\).`],
      S`\(C'(100)=10\) dollars per item, the lowest marginal cost, at 100 items`,
      plane({ view: { xmin: 0, xmax: 200, ymin: 0, ymax: 60 }, curves: [{ f: (x) => 0.003 * x * x - 0.6 * x + 40, color: "blue" }], points: [{ x: 100, y: 10, label: "(100, 10)", color: "red" }], step: { x: 25, y: 10 } })],
    ["Tangent to a quotient", S`Find the tangent to \(y=\dfrac{3x}{x+2}\) at \(x=1\).`,
      [S`\(y(1)=1\).`, S`\(y'=\dfrac{3(x+2)-3x}{(x+2)^2}=\dfrac6{(x+2)^2}\Rightarrow y'(1)=\tfrac23\).`, S`\(y-1=\tfrac23(x-1)\).`],
      S`\(y=\tfrac23x+\tfrac13\)`,
      plane({ view: { xmin: -1.5, xmax: 5, ymin: -2, ymax: 4 }, curves: [{ f: (x) => (3 * x) / (x + 2), color: "violet", a: -1.5, b: 5 }, { f: (x) => (2 * x + 1) / 3, color: "green" }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("power rule", S`Find \(\dfrac{d}{dx}(4x^3-x+6)\).`, expr("12*x^2-1"),
      "Term by term.", [S`\(12x^2-1+0\).`], S`\(12x^2-1\)`),
    q("chain", S`For \(y=(x^2+2)^3\), find \(y'(1)\).`, num(54),
      "3(x² + 2)² · 2x.", [S`\(3(9)(2)\).`], S`\(54\)`),
    q("quotient", S`For \(f(x)=\dfrac{x}{x-1}\), find \(f'(3)\).`, num(-0.25, 0.0001),
      "f′ = −1/(x − 1)².", [S`\(-\frac14\).`], S`\(-0.25\)`),
    q("motion", S`For \(s(t)=t^3-6t\) m, find the acceleration at \(t=2\) s.`, num(12),
      "a = 6t.", [S`\(6(2)\).`], S`\(12\)`),
    q("choose", S`Which rule is needed first for \(y=(2x+3)^7\)?`, choice(["chain rule", "product rule", "quotient rule", "only the power rule"], 0),
      "A bracket raised to a power.", ["Outer u⁷, inner 2x + 3."], "chain rule"),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["2.1", "I can differentiate polynomials, roots and reciprocals with the power rule."],
      ["2.2", "I can use the product rule and find horizontal tangents of products."],
      ["2.3", "I can find velocity and acceleration and decide when an object speeds up."],
      ["2.4", "I can use the chain rule, alone and with the product rule."],
      ["2.5", "I can use the quotient rule and find tangents to rational functions."],
      ["2.6", "I can solve rate-of-change problems and explain the answer with units."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["A root inside a product", S`Find the points where \(y=x\sqrt{9-x^2}\) has a horizontal tangent.`,
      [S`\(y'=\sqrt{9-x^2}+x\cdot\dfrac{-2x}{2\sqrt{9-x^2}}=\dfrac{(9-x^2)-x^2}{\sqrt{9-x^2}}=\dfrac{9-2x^2}{\sqrt{9-x^2}}\).`, S`\(9-2x^2=0\Rightarrow x=\pm\dfrac3{\sqrt2}\approx\pm2.12\).`, S`\(y=\pm\dfrac3{\sqrt2}\cdot\dfrac3{\sqrt2}=\pm4.5\).`],
      S`\(\left(\tfrac3{\sqrt2},4.5\right)\) and \(\left(-\tfrac3{\sqrt2},-4.5\right)\)`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -5.5, ymax: 5.5 }, curves: [{ f: (x) => x * Math.sqrt(9 - x * x), color: "violet", a: -3, b: 3 }], points: [{ x: 3 / Math.SQRT2, y: 4.5, label: "(2.12, 4.5)", color: "red" }, { x: -3 / Math.SQRT2, y: -4.5, label: "(−2.12, −4.5)", color: "red" }], step: { x: 1, y: 1 } })],
    ["A population that peaks", S`A fish population is modelled by \(P(t)=500+\dfrac{2000t}{t^2+16}\), \(t\) in years. (a) Find the growth rate at \(t=2\). (b) When is the population greatest, and what is it?`,
      [S`\(P'(t)=\dfrac{2000(t^2+16)-2000t(2t)}{(t^2+16)^2}=\dfrac{2000(16-t^2)}{(t^2+16)^2}\).`, S`(a) \(P'(2)=\dfrac{2000(12)}{400}=60\) fish per year.`, S`(b) \(P'=0\Rightarrow t=4\); \(P(4)=500+\dfrac{8000}{32}=750\).`],
      S`(a) 60 fish per year; (b) 750 fish at \(t=4\) years`,
      plane({ view: { xmin: 0, xmax: 20, ymin: 400, ymax: 800 }, curves: [{ f: (t) => 500 + (2000 * t) / (t * t + 16), color: "violet" }], points: [{ x: 4, y: 750, label: "(4, 750)", color: "red" }], step: { x: 2, y: 50 } })],
  ], [
    q("hard", S`Find \(\dfrac{d}{dx}\left[(2x-1)^3(x+2)\right]\) at \(x=1\).`, num(19),
      "Product + chain: 6(2x − 1)²(x + 2) + (2x − 1)³.", [S`\(6(1)(3)+1\).`], S`\(19\)`),
    q("hard", S`For \(f(x)=\dfrac{\sqrt x}{x+1}\), find \(f'(1)\).`, num(0),
      "Numerator: (x + 1)/(2√x) − √x.", [S`\(\frac{2/2-1}{4}=0\).`], S`\(0\)`),
    q("hard", S`\(h(x)=\left(x^3-x\right)^2\). Find \(h'(2)\).`, num(132),
      "2(x³ − x)(3x² − 1).", [S`\(2(6)(11)\).`], S`\(132\)`),
  ]),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed practice and hard level without notes, then for each mistake go back to that lesson's explorer and watch-out list."],
      ["What are the most common mistakes?", "Writing (uv)′ as u′v′, forgetting the inner derivative, swapping the order in the quotient rule, and giving a rate without units."],
      ["Should I simplify every answer?", "Simplify when you need to solve f′(x) = 0 or evaluate; factoring is usually the most useful form."],
      ["Product rule or quotient rule for u/v?", "Either works (write u·v⁻¹ and use product + chain); the quotient rule is usually shorter for rational functions."],
      ["How does this lead to Chapter 3?", "Chapter 3 uses f′ and f″ to find where a function increases, where it has maximums and minimums, and how it bends — curve sketching."],
    ],
    summary: [
      "Choose the rule from the last operation.",
      "Product, quotient, chain combine freely.",
      "v = s′, a = s″.",
      "Every derivative is a rate with units.",
    ],
    next: "Write the Chapter 2 test. Chapter 3 uses derivatives to sketch curves.",
  }),
];
