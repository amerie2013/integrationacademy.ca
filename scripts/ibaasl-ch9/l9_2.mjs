// IB AA SL 9.2 — Exponential Functions and the Number e: graphs of a·bˣ, asymptotes and transformations, growth and decay models, compound interest, the number e and continuous growth
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "9.2 Exponential Functions and the Number e";
export const ID = "1baa0009-0001-4001-8001-000000000902";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Exponential Functions and the Number e",
    overview: S`An exponential function multiplies by the same factor for every equal step in x. Populations, investments, drug concentrations and radioactive samples behave this way. In this lesson you will sketch exponential graphs and their transformations, build growth and decay models from a percentage rate, use the compound interest formula, and meet the number e, the base of continuous growth.`,
    goals: [
      S`sketch \(y=a\cdot b^{x-h}+k\), stating the asymptote, intercept and range;`,
      "recognise growth (b > 1) and decay (0 < b < 1);",
      S`build models \(A=A_0(1\pm r)^t\) and use half-life and doubling time;`,
      S`use \(A=P\left(1+\frac{r}{n}\right)^{nt}\) for compound interest;`,
      S`understand \(e=\lim_{n\to\infty}\left(1+\frac1n\right)^n\) and use \(A=Pe^{rt}\).`,
    ],
    curriculum: "SL 2.9 (exponential functions and their graphs, the number e); SL 1.4 (compound interest); SL 2.5–2.11 (transformations, modelling)",
    prior: [
      [S`Evaluate \(3^{-2}\).`, S`\(\frac19\).`],
      ["Increase 80 by 15%.", S`\(80\times1.15=92\).`],
      [S`Describe the transformation \(y=f(x-2)+3\).`, "Translate 2 right and 3 up."],
    ],
    words: [
      ["Exponential function", S`\(f(x)=a\cdot b^x\), \(b>0,\ b\ne1\)`, S`\(f(x)=5(1.2)^x\)`],
      ["Growth / decay factor", "the multiplier per unit of x", "1.2 means +20%; 0.85 means −15%"],
      ["Horizontal asymptote", "the line the graph approaches but never reaches", S`\(y=0\) for \(y=2^x\)`],
      ["Half-life", "the time for a quantity to halve", "5730 years for carbon-14"],
      ["e", "≈ 2.71828, the base of continuous growth", S`\(A=Pe^{rt}\)`],
    ],
  }),

  section("📌 Graphs of exponential functions", S`
  <p>For \(y=b^x\) with \(b>1\) the graph rises ever more steeply; for \(0<b<1\) it falls towards 0. Both pass through \((0,1)\) and have the asymptote \(y=0\). Since \(\left(\frac12\right)^x=2^{-x}\), the decay curve is the reflection of the growth curve in the y-axis.</p>
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 9 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 3 ** x, color: "violet" }, { f: (x) => (1 / 3) ** x, color: "amber" }, { f: (x) => 1.5 ** x, color: "green" }], points: [P(0, 1, "(0, 1)", "red")] }, "y = 3ˣ (violet), y = 1.5ˣ (green) and y = (⅓)ˣ (amber): all pass through (0, 1)")}
  <p>Transformations work as for any function. For \(y=a\cdot b^{x-h}+k\): the asymptote moves to \(y=k\), the graph shifts \(h\) right, and \(a\) stretches (and reflects if \(a<0\)).</p>
  ${plane({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 ** (x - 1) - 3, color: "violet" }], lines: [{ m: 0, b: -3, color: "red", dash: true }], points: [P(0, -2.5, "(0, −2.5)"), P(2.585, 0, "(2.58, 0)", "green")] }, "y = 2ˣ⁻¹ − 3: asymptote y = −3, range y > −3")}
  ${keyIdea("y = a·bˣ⁻ʰ + k has horizontal asymptote y = k. The range is y > k when a > 0 and y < k when a < 0.")}`),

  section("📌 Growth and decay models", S`
  <p>A quantity that changes by a fixed percentage \(r\) each period is modelled by \(A=A_0(1+r)^t\) (growth) or \(A=A_0(1-r)^t\) (decay). A car worth 24 000 dollars losing 18% of its value a year is worth \(24000(0.82)^t\).</p>
  ${plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 26 }, step: { x: 1, y: 4 }, ylabel: "thousand dollars", curves: [{ f: (t) => 24 * 0.82 ** t, a: 0, b: 10, color: "violet" }], points: [P(0, 24, "(0, 24 000)"), P(5, 24 * 0.82 ** 5, "(5, 8898)", "red")] }, "Value of the car, 24 000(0.82)ᵗ: about 8898 dollars after 5 years")}
  <p>Compound interest at annual rate \(r\) compounded \(n\) times a year gives \(A=P\left(1+\frac rn\right)^{nt}\). As \(n\) grows, \(\left(1+\frac1n\right)^n\) approaches \(e\approx2.71828\), and continuous compounding gives \(A=Pe^{rt}\).</p>
  ${table(["n", S`\(\left(1+\frac1n\right)^n\)`], [["1", "2"], ["12", "2.61304"], ["365", "2.71457"], ["100 000", "2.71827"]])}
  ${plane({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 12 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.exp(x), color: "violet" }, { f: (x) => 2 ** x, color: "green" }, { f: (x) => 3 ** x, color: "amber" }], points: [P(1, Math.E, "(1, e)", "red")] }, "y = eˣ (violet) lies between 2ˣ (green) and 3ˣ (amber)")}
  ${watchOut([
    "A 6% decrease means a factor 0.94, not 0.06.",
    "Use the rate per compounding period (r/n) and the number of periods (nt).",
    "The asymptote of a·bˣ + k is y = k, not y = 0.",
    "e is a constant (≈ 2.718), not a variable.",
  ])}`),

  section("📌 Explore", S`<p>First change a, b, h and k and watch the asymptote and intercept. Then increase n in the compounding explorer and watch the values approach eʳ.</p>`),

  widget("ibExpGraph", { init: [2, 0.5, 1, -1] }),
  widget("ibCompound", { init: [1, 12] }),

  examples([
    ["Level 1 · Key features", S`For \(f(x)=3\cdot2^x+1\), state the asymptote, the y-intercept and the range.`,
      [S`Asymptote \(y=1\).`, S`\(f(0)=3+1=4\).`],
      S`\(y=1\); \((0,4)\); \(y>1\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -1, ymax: 14 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 3 * 2 ** x + 1, color: "violet" }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(0, 4, "(0, 4)")] }, "y = 3·2ˣ + 1")],
    ["Level 1 · Growth model", "A town of 15 000 people grows by 2.5% a year. Write a model and find the population after 8 years.",
      [S`\(P=15000(1.025)^t\).`, S`\(15000(1.025)^8\approx18276\).`],
      "about 18 276"],
    ["Level 2 · Half-life", "A drug has a half-life of 6 hours. A patient has 200 mg in the blood. How much remains after 15 hours?",
      [S`\(A=200\left(\frac12\right)^{t/6}\).`, S`\(200(0.5)^{2.5}\approx35.4\).`],
      "about 35.4 mg"],
    ["Level 2 · Compound interest", "4000 dollars is invested at 3.6% a year compounded monthly. Find the value after 5 years.",
      [S`\(4000\left(1+\frac{0.036}{12}\right)^{60}=4000(1.003)^{60}\).`],
      "≈ 4787.58 dollars"],
    ["Level 3 · Find the model", S`A curve \(y=a\cdot b^x\) passes through \((1,12)\) and \((3,108)\). Find a and b.`,
      [S`Divide: \(\frac{ab^3}{ab}=b^2=9\), so \(b=3\).`, S`\(3a=12\Rightarrow a=4\).`],
      S`\(a=4,\ b=3\)`],
  ]),

  practice([
    q("Level 1 · asymptote", S`State the equation of the asymptote of \(y=5\cdot0.4^x-2\): y = ?`, num(-2),
      "y = k.", ["The graph approaches −2."], S`\(y=-2\)`),
    q("Level 1 · intercept", S`Find the y-intercept of \(y=6\cdot3^{x}-4\).`, num(2),
      "Put x = 0.", [S`\(6-4\).`], S`\(2\)`),
    q("Level 2 · decay", "A machine worth 50 000 dollars loses 12% of its value each year. Find its value after 4 years (nearest dollar).", num(29985, 1),
      "50 000 × 0.88⁴.", [S`\(50000(0.88)^4\approx29985\).`], S`\(\approx29985\)`),
    q("Level 2 · continuous", S`Find the value of 2500 dollars after 6 years at 4% compounded continuously (2 d.p.).`, num(2500 * Math.exp(0.24), 0.01),
      "Pe^(rt).", [S`\(2500e^{0.24}\).`], S`\(\approx3178.12\)`),
    q("Level 2 · growth or decay", S`Which function shows decay?`, choice([S`\(y=4(0.7)^x\)`, S`\(y=0.7(4)^x\)`, S`\(y=2^{x}\)`, S`\(y=e^{x}\)`], 0),
      "Base between 0 and 1.", ["0 < 0.7 < 1."], S`\(y=4(0.7)^x\)`),
  ]),

  ...hard([
    ["Comparing investments", "Option A: 10 000 dollars at 5% compounded annually. Option B: 10 000 dollars at 4.9% compounded continuously. Which is worth more after 10 years?",
      [S`A: \(10000(1.05)^{10}\approx16288.95\).`, S`B: \(10000e^{0.49}\approx16323.16\).`, "B is worth about 34 dollars more: continuous compounding outweighs the slightly lower rate."],
      "Option B",
      plane({ view: { xmin: 0, xmax: 10, ymin: 9, ymax: 17 }, step: { x: 1, y: 1 }, ylabel: "thousand dollars", curves: [{ f: (t) => 10 * 1.05 ** t, a: 0, b: 10, color: "violet" }, { f: (t) => 10 * Math.exp(0.049 * t), a: 0, b: 10, color: "amber" }], points: [P(10, 16.323, "B", "amber"), P(10, 16.289, "A", "violet")] }, "A (violet) and B (amber): almost identical, B ends slightly higher")],
    ["Transformed exponential from features", S`A graph \(y=a\cdot2^x+k\) has asymptote \(y=-5\) and passes through \((2,7)\). Find a and k, and the x-intercept.`,
      [S`\(k=-5\); \(4a-5=7\Rightarrow a=3\).`, S`\(3\cdot2^x=5\Rightarrow 2^x=\frac53\Rightarrow x=\log_2\frac53\approx0.737\).`],
      S`\(a=3,\ k=-5\); \(x\approx0.737\)`],
  ], [
    q("Level 3 · find b", S`\(y=a\cdot b^x\) passes through \((0,5)\) and \((2,45)\). Find b (b > 0).`, num(3),
      "a = 5, b² = 9.", [S`\(b=3\).`], S`\(3\)`),
    q("Level 3 · doubling", S`A population is modelled by \(P=800\cdot2^{t/5}\). Find P when t = 12 (nearest whole number).`, num(Math.round(800 * 2 ** 2.4)),
      "2^(12/5).", [S`\(800\cdot2^{2.4}\approx4222\).`], S`\(\approx4222\)`),
    q("Level 3 · range", S`The range of \(y=-2e^{x}+3\) is:`, choice([S`\(y<3\)`, S`\(y>3\)`, S`\(y>-2\)`, S`all real \(y\)`], 0),
      "a < 0 flips the graph below the asymptote.", [S`Asymptote \(y=3\); \(-2e^x<0\).`], S`\(y<3\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I tell growth from decay?", "Look at the base: b > 1 grows, 0 < b < 1 decays (with a > 0)."],
      ["Where is the asymptote?", "y = k for y = a·bˣ⁻ʰ + k."],
      ["How do I turn a percentage into a factor?", "Growth by r%: 1 + r/100; decay by r%: 1 − r/100."],
      ["Where does e come from?", "It is the limit of (1 + 1/n)ⁿ: compounding infinitely often."],
      ["How do I find a and b from two points?", "Divide the two equations to eliminate a, then substitute back."],
    ],
    summary: [
      "y = a·bˣ⁻ʰ + k: asymptote y = k; growth if b > 1, decay if 0 < b < 1.",
      "A = A₀(1 ± r)ᵗ; half-life model A₀(½)^(t/T).",
      "Compound interest P(1 + r/n)ⁿᵗ; continuous Peʳᵗ.",
      "e ≈ 2.71828.",
    ],
    next: "9.3 defines logarithms as the inverse of exponential functions.",
  }),
];
