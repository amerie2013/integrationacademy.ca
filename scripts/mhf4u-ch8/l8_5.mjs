// MHF4U 8.5 — Modelling with Combined Functions (NEW): trend + cycle (sum), damped motion (product),
// spreading area (composite), average cost (quotient), and choosing/interpreting a combined model.
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, mg } from "./lib.mjs";

export const TITLE = "8.5 Modelling with Combined Functions";
export const ID = "6d4f0008-0001-4001-8001-000000000805";

const S = String.raw;
const C = (t) => 10 * t * 0.6 ** t;
export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Modelling with Combined Functions",
    overview: S`Real data rarely follow one simple function. Monthly sales grow along a trend <i>and</i> rise and fall with the seasons; a pendulum swings <i>and</i> slows down; an oil spill's radius grows with time <i>and</i> its area depends on the radius. Each of these is a combination: a sum, a product or a composite of functions you already know. This lesson builds such models, reads their parts, and uses them to answer questions.`,
    goals: [
      "recognize when a situation calls for a sum, difference, product, quotient or composite;",
      "build a combined model from a description;",
      "explain what each part of a combined model represents;",
      "answer questions with the model, using algebra or a graph;",
      "judge whether a model's answer makes sense.",
    ],
    curriculum: "D3.1 (compare, through investigation, the characteristics of functions), D3.2 (verify the characteristics of combined functions), D3.3 (solve problems by modelling and reasoning with functions, including problems with solutions not accessible by standard algebraic techniques)",
    prior: [
      [S`Amplitude and period of \(y=40\sin\left(\frac{\pi}{6}t\right)\)?`, S`\(40\) and \(12\).`],
      [S`Half-life model for \(80\) g, half-life \(5\) h?`, S`\(80\left(\frac12\right)^{t/5}\).`],
      [S`If \(r=3t+2\), what is \(\pi r^2\) at \(t=1\)?`, S`\(25\pi\).`],
    ],
    words: [
      ["Trend + cycle", "a sum: steady change plus a repeating pattern", "\\(200+15t+40\\sin\\frac{\\pi t}6\\)"],
      ["Damping", "a product: a wave times a decaying envelope", "\\(20(0.9)^t\\cos(\\pi t)\\)"],
      ["Chained rates", "a composite: one quantity depends on another that depends on time", "\\(A(r(t))\\)"],
      ["Average cost", "a quotient: total cost ÷ number of items", "\\(\\frac{2000+15x}{x}\\)"],
    ],
  }),

  section("📌 Choosing the combination", S`
  ${table(["The situation says…", "Combination", "Example"], [
    ["“a steady change plus a seasonal pattern”", "sum", "\\(S(t)=200+15t+40\\sin\\frac{\\pi t}6\\)"],
    ["“an oscillation that dies out”", "product", "\\(\\theta(t)=20(0.9)^t\\cos(\\pi t)\\)"],
    ["“A depends on B, and B depends on time”", "composite", "\\(A(r(t))=\\pi(3t+2)^2\\)"],
    ["“per item”, “per person”, “average”", "quotient", "\\(\\bar C(x)=\\frac{C(x)}x\\)"],
    ["“how much more”, “profit”, “gap”", "difference", "\\(P=R-C\\)"],
  ])}
  ${keyIdea(S`Build the model from its parts, give each part a meaning, then answer questions by evaluating, solving, or reading the graph. Always check the answer against the situation (units, sign, sensible size).`)}`),

  mg([{ expr: "200 + 15*x", label: "trend 200 + 15t", color: "#64748b" }, { expr: "200 + 15*x + a*sin(pi*x/6)", label: "sales 200 + 15t + a·sin(πt/6)", color: "#7c3aed" }], { param: "a", paramMin: 0, paramMax: 80, paramInit: 40, xMin: 0, xMax: 24, yMin: 100, yMax: 650, caption: "Slide a, the size of the seasonal swing. The sales curve always oscillates about the trend line; a = 0 leaves only the trend." }),

  section("📌 Reading a combined model", S`
  <p>In \(S(t)=200+15t+40\sin\left(\frac{\pi t}6\right)\): \(200\) is the starting level, \(15\) units per month is the trend, \(40\) is the seasonal swing and \(12\) months is its period. The sales are never more than \(40\) away from the trend line.</p>
  ${plane({ view: { xmin: -1, xmax: 25, ymin: 100, ymax: 650 }, curves: [{ f: (t) => 200 + 15 * t, color: "gray" }, { f: (t) => 200 + 15 * t + 40 * Math.sin(Math.PI * t / 6), color: "violet" }], points: [{ x: 3, y: 285, label: "(3, 285)", color: "amber" }, { x: 9, y: 295, label: "(9, 295)", color: "amber" }], step: { x: 2, y: 50 } }, "Sales (violet) oscillate around the trend (gray).")}
  ${watchOut([
    "Check the period of a seasonal term: 12 months means sin(πt/6), not sin(t).",
    "A damping envelope must decrease: a factor between 0 and 1, or a negative exponent.",
    "In a composite model, match units: r in metres, then A in square metres.",
    "An average cost function is not defined at x = 0 and approaches the cost per item for large x.",
    "A model is only valid for a sensible domain (e.g. t ≥ 0).",
  ])}`),

  examples([
    ["Trend plus season", S`Monthly sales are \(S(t)=200+15t+40\sin\left(\frac{\pi t}6\right)\) units (\(t\) in months). Find \(S(3)\) and \(S(9)\), and explain why \(S(9)\) is only a little larger.`,
      [S`<b>Parts:</b> trend \(200+15t\); seasonal term with amplitude \(40\) and period \(\frac{2\pi}{\pi/6}=12\) months.`,
        S`<b>\(S(3)\):</b> \(200+45+40\sin\frac\pi2=245+40=285\).`,
        S`<b>\(S(9)\):</b> \(200+135+40\sin\frac{3\pi}2=335-40=295\).`,
        S`<b>Interpret:</b> the trend adds \(90\) between months \(3\) and \(9\), but the season moves from its peak (\(+40\)) to its low (\(-40\)), cancelling \(80\) of it.`],
      S`\(285\) and \(295\)`],
    ["Damped pendulum", S`A pendulum's angle is \(\theta(t)=20(0.9)^t\cos(\pi t)\) degrees. Find its swing at \(t=2\) and when the swing first stays under \(5^\circ\).`,
      [S`<b>Parts:</b> envelope \(20(0.9)^t\) (the shrinking amplitude) times \(\cos(\pi t)\) (one full swing every \(2\) s).`,
        S`<b>At \(t=2\):</b> \(\cos2\pi=1\), so \(\theta(2)=20(0.81)=16.2^\circ\).`,
        S`<b>Under \(5^\circ\):</b> \(20(0.9)^t<5\Rightarrow0.9^t<0.25\Rightarrow t>\dfrac{\log0.25}{\log0.9}\approx13.2\) s.`,
        S`<b>Check:</b> \(20(0.9)^{13.2}\approx4.98\) ✓`],
      S`\(16.2^\circ\); after about \(13.2\) s`,
      plane({ view: { xmin: -0.5, xmax: 16, ymin: -22, ymax: 22 }, curves: [{ f: (t) => 20 * 0.9 ** t, a: 0, color: "gray" }, { f: (t) => -20 * 0.9 ** t, a: 0, color: "gray" }, { f: (t) => 20 * 0.9 ** t * Math.cos(Math.PI * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 5, color: "blue", dash: true }], points: [{ x: 2, y: 16.2, label: "(2, 16.2)", color: "amber" }], step: { x: 1, y: 5 } })],
    ["A spreading spill", S`An oil spill's radius is \(r(t)=3t+2\) m after \(t\) h, and its area is \(A(r)=\pi r^2\). Find \(A(r(t))\), the area after \(4\) h, and when the area reaches \(1000\ \text{m}^2\).`,
      [S`<b>Compose:</b> \(A(r(t))=\pi(3t+2)^2\).`,
        S`<b>After 4 h:</b> \(r=14\), \(A=196\pi\approx615.8\ \text{m}^2\).`,
        S`<b>Area 1000:</b> \((3t+2)^2=\frac{1000}\pi\Rightarrow3t+2\approx17.84\Rightarrow t\approx5.28\) h (the negative root gives a negative radius, rejected).`,
        S`<b>Check:</b> \(\pi(17.84)^2\approx1000\) ✓`],
      S`\(\pi(3t+2)^2\); \(615.8\ \text{m}^2\); about \(5.3\) h`],
    ["Average cost", S`Making \(x\) items costs \(C(x)=2000+15x\) dollars. Find the average cost per item and how many items make it at most \(20\) dollars.`,
      [S`<b>Quotient:</b> \(\bar C(x)=\dfrac{2000+15x}{x}=15+\dfrac{2000}x\), \(x>0\).`,
        S`<b>Inequality:</b> \(15+\frac{2000}x\le20\Rightarrow\frac{2000}x\le5\Rightarrow x\ge400\) (multiplying by \(x>0\) is safe).`,
        S`<b>Long run:</b> as \(x\) grows, \(\frac{2000}x\to0\), so the average approaches \(15\) dollars: the horizontal asymptote.`,
        S`<b>Check:</b> \(\bar C(400)=15+5=20\) ✓`],
      S`\(15+\frac{2000}x\); at least \(400\) items`,
      plane({ view: { xmin: -20, xmax: 1000, ymin: 0, ymax: 60 }, curves: [{ f: (x) => 15 + 2000 / x, a: 40, color: "violet" }], lines: [{ m: 0, b: 15, color: "red", dash: true }, { m: 0, b: 20, color: "blue", dash: true }], points: [{ x: 400, y: 20, label: "(400, 20)", color: "amber" }], step: { x: 100, y: 5 } })],
    ["A rise-and-fall model", S`A drug's concentration is \(C(t)=10t(0.6)^t\) mg/L after \(t\) h. Use the model to find when it is above \(5\) mg/L and its peak.`,
      [S`<b>Parts:</b> the factor \(10t\) makes it rise at first; \((0.6)^t\) makes it decay later. The product rises, then falls.`,
        S`<b>Table:</b> \(C(1)=6\), \(C(2)=7.2\), \(C(3)\approx6.48\), \(C(4)\approx5.18\), \(C(5)\approx3.89\).`,
        S`<b>Crossings of \(C=5\) (graph or refined table):</b> \(t\approx0.72\) and \(t\approx4.14\).`,
        S`<b>Answer:</b> above \(5\) mg/L for about \(0.72<t<4.14\) h, peak about \(7.2\) mg/L near \(t\approx2\) h.`],
      S`\(0.72<t<4.14\) h; peak \(\approx7.2\) mg/L near \(2\) h`,
      plane({ view: { xmin: -0.3, xmax: 10, ymin: -0.5, ymax: 8.5 }, curves: [{ f: C, a: 0, color: "violet" }], lines: [{ m: 0, b: 5, color: "blue", dash: true }], points: [{ x: 1.96, y: 7.2, label: "(1.96, 7.2)", color: "amber" }, { x: 0.72, y: 5, label: "(0.72, 5)", color: "blue" }, { x: 4.14, y: 5, label: "(4.14, 5)", color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("sum model", S`\(S(t)=100+5t+20\sin\left(\frac{\pi t}6\right)\). Find \(S(3)\).`, num(135), "sin(π/2) = 1.", [S`\(100+15+20=135\).`], S`\(135\)`),
    q("average cost", S`\(\bar C(x)=12+\frac{600}x\). Find \(\bar C(50)\).`, num(24), "600 ÷ 50 = 12.", [S`\(12+12=24\).`], S`\(24\)`),
    q("composite", S`\(r(t)=2t\) cm and \(A=\pi r^2\). Find the area at \(t=3\) to one decimal.`, num(36 * Math.PI, 0.1), "r = 6.", [S`\(36\pi\approx113.1\).`], S`\(\approx113.1\)`),
    q("choose", S`A fish population grows \(3\%\) a year and also rises and falls by about \(80\) every \(4\) years. Which model fits?`, choice(["P = 500(1.03)ᵗ + 80 sin(πt/2)", "P = 500(1.03)ᵗ · 80 sin(πt/2)", "P = 500 + 0.03t + 80 sin t", "P = 80 sin(500(1.03)ᵗ)"], 0), "Trend plus cycle is a sum.", [S`Period \(\frac{2\pi}{\pi/2}=4\) years.`], S`\(500(1.03)^t+80\sin\frac{\pi t}2\)`),
    q("damped", S`\(\theta(t)=15(0.8)^t\cos(2\pi t)\). Find \(\theta(2)\).`, num(9.6, 0.0001), "cos 4π = 1.", [S`\(15(0.64)=9.6\).`], S`\(9.6\)`),
  ]),

  ...hard([
    ["Heating cost through a composite", S`Room temperature is \(T(t)=18+4\sin\left(\frac{\pi t}{12}\right)\) °C (\(t\) in hours) and the heating cost rate is \(K(T)=0.5(22-T)\) dollars per hour. Find \(K(T(t))\) and its largest value.`,
      [S`<b>Compose:</b> \(K(T(t))=0.5\left(22-18-4\sin\frac{\pi t}{12}\right)=2-2\sin\frac{\pi t}{12}\).`,
        S`<b>Largest value:</b> when \(\sin\frac{\pi t}{12}=-1\), i.e. \(t=18\): \(K=2+2=4\) dollars per hour.`,
        S`<b>Smallest:</b> \(t=6\): \(K=0\) (the room is already \(22\) °C).`,
        S`<b>Check:</b> \(T(18)=18-4=14\) °C and \(0.5(22-14)=4\) ✓`],
      S`\(2-2\sin\frac{\pi t}{12}\); maximum \(4\) dollars/h at \(t=18\)`],
    ["Trend versus decay", S`A town's spending is \(E(t)=50+4t\) (thousand dollars) and its budget is \(B(t)=120(0.97)^t\). When does spending exceed the budget?`,
      [S`<b>Inequality:</b> \(50+4t>120(0.97)^t\), i.e. \(h(t)=50+4t-120(0.97)^t>0\).`,
        S`<b>Table:</b> \(h(8)\approx82-94.0<0\); \(h(9)\approx86-91.2<0\); \(h(10)\approx90-88.5>0\).`,
        S`<b>Refine:</b> the crossing is at \(t\approx9.8\).`,
        S`<b>Answer:</b> spending exceeds the budget after about \(9.8\) years; since \(E\) rises and \(B\) falls, it never drops back.`],
      S`after about \(9.8\) years`,
      plane({ view: { xmin: -0.5, xmax: 20, ymin: 0, ymax: 140 }, curves: [{ f: (t) => 50 + 4 * t, a: 0, color: "blue" }, { f: (t) => 120 * 0.97 ** t, a: 0, color: "violet" }], step: { x: 2, y: 10 } })],
  ], [
    q("hard", S`\(\bar C(x)=15+\frac{2000}x\). What is the smallest whole number of items with \(\bar C\le18\)?`, num(667), "2000/x ≤ 3.", [S`\(x\ge666.7\), so \(667\).`], S`\(667\)`),
    q("hard", S`\(C(t)=10t(0.6)^t\). Find \(C(4)\) to two decimals.`, num(C(4), 0.01), "40 × 0.6⁴.", [S`\(40(0.1296)\approx5.18\).`], S`\(\approx5.18\)`),
    q("hard", S`With \(A=\pi(3t+2)^2\), when is the area \(500\ \text{m}^2\)? (two decimals)`, num((Math.sqrt(500 / Math.PI) - 2) / 3, 0.01), "3t + 2 = √(500/π).", [S`\(3t+2\approx12.62\Rightarrow t\approx3.54\).`], S`\(\approx3.54\)`),
  ]),

  wrapUp({
    qas: [
      ["When is a sum the right model?", "When a quantity has a steady trend plus a repeating or extra part."],
      ["When is a product the right model?", "When one part scales another, as in a wave that dies out."],
      ["When is a composite the right model?", "When one quantity depends on a second that depends on time."],
      ["Why does average cost approach 15 in 15 + 2000/x?", "The fixed cost is spread over more items, so 2000/x → 0."],
      ["What if I cannot solve the model algebraically?", "Use a table or graph to find crossings, then interpret."],
    ],
    summary: [
      "Sum: trend + cycle; difference: gap or profit.",
      "Product: envelope × wave.",
      "Composite: chained dependence.",
      "Quotient: per-item or average values.",
    ],
    next: "8.6 reviews the whole chapter.",
  }),
];
