// MCR3U 4.7 — Chapter 4 Review: exponents, exponential functions, transformations, models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, frac, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "4.7 Chapter 4 Review";
export const ID = "5c3e0001-0001-4001-8001-000000000407";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 4 Review",
    overview: S`This review connects the chapter: exponent laws and rational exponents, the properties and transformations of exponential functions, and exponential models. The examples combine skills; the practice and hard-level problems are at chapter-test level.`,
    goals: [
      "evaluate and simplify expressions with integer and rational exponents;",
      "state properties of y = a·bˣ and recognise exponential data;",
      "graph y = a·b^(k(x − d)) + c and state its asymptote, domain and range;",
      "write and use growth, decay, half-life and interest models;",
      "solve multi-step exponential problems.",
    ],
    curriculum: "B1–B3 (representing exponential functions, connecting graphs and equations, solving problems)",
    prior: [
      [S`Evaluate \(16^{-3/4}\).`, S`\(\frac18\).`],
      [S`What is the asymptote of \(y=3(2)^x-4\)?`, S`\(y=-4\).`],
      [S`What factor models a 7% decrease?`, S`\(0.93\).`],
    ],
    words: [
      ["4.1–4.3", "exponent laws, rational exponents, simplifying", ""],
      ["4.4", "properties, constant ratio", ""],
      ["4.5", "transformations, asymptote y = c", ""],
      ["4.6", "growth and decay models", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Skill", "Key fact"], [
    ["Exponents", "\\(b^{-n}=\\frac1{b^n}\\), \\(b^{m/n}=(\\sqrt[n]b)^m\\)"],
    ["Recognise", "equal x-steps, constant ratio"],
    ["Properties", "domain \\(\\mathbb R\\), range \\(y>c\\) or \\(y<c\\), asymptote \\(y=c\\)"],
    ["Transform", "\\((x,y)\\to(\\frac xk+d,\\ ay+c)\\)"],
    ["Model", "\\(A_0(1\\pm r)^t\\), \\(A_0(\\tfrac12)^{t/h}\\), \\(P(1+i)^n\\)"],
  ])}
  ${keyIdea("Write numbers with a common base whenever you can — it makes evaluating, simplifying and solving much easier.")}`),

  section("📌 Explore", S`<p>Use the explorer to check transformed graphs from the examples and problems.</p>`),

  widget("expTransform", { base: 3, show: ["a", "k", "d", "c"], init: { a: 2, k: 1, d: 1, c: -4 } }),

  examples([
    ["Exponents", S`Evaluate \(\left(\tfrac{27}{8}\right)^{-2/3}+4^{0}\).`,
      [S`<b>Order of work.</b> Evaluate each power first, then add. The first power has three instructions: reciprocal (minus sign), cube root (denominator 3) and square (numerator 2).`,
        S`<b>Reciprocal.</b> Flip the fraction and drop the minus sign: \(\left(\tfrac{27}{8}\right)^{-2/3}=\left(\tfrac{8}{27}\right)^{2/3}\).`,
        S`<b>Cube root.</b> \(\sqrt[3]8=2\) and \(\sqrt[3]{27}=3\), so the cube root of the fraction is \(\tfrac23\).`,
        S`<b>Square.</b> \(\left(\tfrac23\right)^2=\tfrac49\).`,
        S`<b>Zero exponent and sum.</b> \(4^0=1\), so the total is \(\tfrac49+1=\tfrac49+\tfrac99=\tfrac{13}9\).`,
        S`<b>Check on the graph.</b> On \(y=x^{-2/3}\), the point at \(x=\frac{27}8=3.375\) has height \(\frac49\approx0.44\) ✓`],
      S`\(\tfrac{13}9\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 3 }, curves: [{ f: (x) => x ** (-2 / 3), a: 0.25, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: 3.375, y: 4 / 9, label: "(3.375, 4/9)", color: "amber" }], step: { x: 1, y: 0.5 } }, "y = x^(−2/3)")],
    ["Simplifying", S`Simplify \(\dfrac{(9x^4)^{1/2}}{(27x^6)^{1/3}}\), for \(x\ne0\).`,
      [S`<b>Plan.</b> Apply each outer exponent to every factor in its bracket, then divide.`,
        S`<b>Numerator.</b> \(9^{1/2}=3\) and \((x^4)^{1/2}=x^{4\cdot\frac12}=x^2\), so the numerator is \(3x^2\).`,
        S`<b>Denominator.</b> \(27^{1/3}=3\) and \((x^6)^{1/3}=x^{6\cdot\frac13}=x^2\), so the denominator is \(3x^2\).`,
        S`<b>Divide.</b> \(\dfrac{3x^2}{3x^2}=1\). The top and bottom are equal for every \(x\ne0\).`,
        S`<b>Check with</b> \(x=2\). Top: \((9\times16)^{1/2}=\sqrt{144}=12\). Bottom: \((27\times64)^{1/3}=\sqrt[3]{1728}=12\). The ratio is \(1\) ✓. So the graph is the horizontal line \(y=1\), with a gap at \(x=0\).`],
      S`\(1\) (for \(x\ne0\))`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 3 }, lines: [{ m: 0, b: 1, color: "violet" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "amber" }, { x: 0, y: 1, label: "gap at x = 0", color: "red" }], step: { x: 1, y: 1 } })],
    ["From a table", S`\(x\): \(0,1,2,3\); \(y\): \(80,60,45,33.75\). Model it and predict \(y(5)\).`,
      [S`<b>Test the pattern.</b> The x-steps are equal. ${tv(["\\(x\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)", "\\(3\\)"], ["\\(y\\)", "\\(80\\)", "\\(60\\)", "\\(45\\)", "\\(33.75\\)"], ["first difference", "", "\\(-20\\)", "\\(-15\\)", "\\(-11.25\\)"], ["ratio", "", "\\(0.75\\)", "\\(0.75\\)", "\\(0.75\\)"])} The differences change but the ratio is constant, so the data are exponential.`,
        S`<b>Read \(a\) and \(b\).</b> The value at \(x=0\) gives \(a=80\). The ratio gives \(b=0.75\), which is decay: a loss of 25% per step.`,
        S`<b>Model.</b> \(y=80(0.75)^x\). Check at \(x=3\): \(80\times0.421875=33.75\) ✓`,
        S`<b>Predict.</b> \((0.75)^5\approx0.2373\), so \(y(5)\approx80\times0.2373\approx18.98\).`,
        S`<b>Check by continuing the table.</b> \(33.75\times0.75=25.3125\), then \(25.3125\times0.75\approx18.98\) ✓`],
      S`\(y=80(0.75)^x\); \(y(5)\approx18.98\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: 0, ymax: 100 }, curves: [{ f: (x) => 80 * 0.75 ** x, color: "violet" }], points: [{ x: 0, y: 80, label: "(0, 80)" }, { x: 1, y: 60 }, { x: 2, y: 45 }, { x: 3, y: 33.75, label: "(3, 33.75)" }, { x: 5, y: 18.98, label: "(5, 18.98)", color: "amber" }], step: { x: 1, y: 10 } })],
    ["Transformation", S`Graph \(y=2(3)^{x-1}-4\): state the asymptote, range and y-intercept.`,
      [S`<b>Read the transformations.</b> \(a=2\) is a vertical stretch by 2, \(d=1\) is a shift right 1, and \(c=-4\) is a shift down 4. So \((x,y)\to(x+1,\ 2y-4)\).`,
        S`<b>Map key points of \(y=3^x\).</b> ${tv(["\\(y=3^x\\)", "\\((-1,\\frac13)\\)", "\\((0,1)\\)", "\\((1,3)\\)", "\\((2,9)\\)"], ["image", "\\((0,-\\frac{10}3)\\)", "\\((1,-2)\\)", "\\((2,2)\\)", "\\((3,14)\\)"])}`,
        S`<b>Asymptote and range.</b> \(y=0\) stays at 0 under the stretch and moves down to \(y=-4\). There is no reflection, so the curve is above it: the range is \(y>-4\).`,
        S`<b>y-intercept.</b> \(y(0)=2(3)^{-1}-4=\frac23-4=-\frac{10}3\). This matches the first image point.`,
        S`<b>Check.</b> At \(x=2\): \(2(3)^1-4=2\) ✓. The curve crosses \(y=0\) where \(3^{x-1}=2\), between \((1,-2)\) and \((2,2)\) ✓`],
      S`asymptote \(y=-4\); range \(y>-4\); y-intercept \(-\tfrac{10}{3}\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 10 }, curves: [{ f: (x) => 2 * 3 ** (x - 1) - 4, color: "violet" }], lines: [{ m: 0, b: -4, color: "green", dash: true }], points: [{ x: 0, y: -10 / 3, label: "(0, −10/3)", color: "amber" }, { x: 1, y: -2, label: "(1, −2)" }, { x: 2, y: 2, label: "(2, 2)" }], step: { x: 1, y: 2 } })],
    ["A model", S`A sample of 120 g has a half-life of 9 days. How much remains after 27 days, and after how many whole half-lives is less than 5 g left?`,
      [S`<b>Write the model.</b> The exponent counts half-lives: \(A(t)=120\left(\tfrac12\right)^{t/9}\), with \(t\) in days.`,
        S`<b>After 27 days.</b> \(\frac{27}9=3\) half-lives, so \(A=120\left(\tfrac12\right)^3=120\times\frac18=15\) g.`,
        S`<b>Below 5 g.</b> Halve until the amount is under 5. ${tv(["half-lives", "0", "1", "2", "3", "4", "5"], ["days", "0", "9", "18", "27", "36", "45"], ["mass (g)", "120", "60", "30", "15", "7.5", "3.75"])}`,
        S`<b>Read the table.</b> After 4 half-lives there is still 7.5 g, which is above 5. After 5 half-lives there is 3.75 g, which is below 5. So 5 whole half-lives are needed, which is 45 days.`,
        S`<b>Check.</b> \(120\left(\tfrac12\right)^5=\frac{120}{32}=3.75\) ✓`],
      "15 g after 27 days; less than 5 g after 5 half-lives (45 days)",
      plane({ view: { xmin: 0, xmax: 54, ymin: 0, ymax: 130 }, curves: [{ f: (t) => 120 * 0.5 ** (t / 9), a: 0, color: "violet" }], lines: [{ m: 0, b: 5, color: "amber", dash: true }], points: [{ x: 27, y: 15, label: "(27, 15)" }, { x: 45, y: 3.75, label: "(45, 3.75)", color: "amber" }], step: { x: 9, y: 20 }, xlabel: "t (days)", ylabel: "A (g)" })],
  ]),

  practice([
    q("exponents", S`Evaluate \(32^{3/5}\).`, num(8),
      "Fifth root first.", [S`\(2^3\).`], S`\(8\)`),
    q("negative", S`Evaluate \(\left(\tfrac49\right)^{-1/2}\) as a fraction.`, frac(3, 2),
      "Flip, then square root.", [S`\(\left(\tfrac94\right)^{1/2}\).`], S`\(\tfrac32\)`),
    q("ratio", S`An exponential table has \(y=48,12,3\). What is the next value?`, num(0.75),
      "Ratio ¼.", [S`\(3\times\tfrac14\).`], S`\(0.75\)`),
    q("asymptote", S`What is the asymptote of \(y=-5(2)^{x+3}+7\)? Enter its y-value.`, num(7),
      "c.", [S`\(y=7\).`], S`\(7\)`),
    q("model", "800 dollars grows at 5% compounded annually. Value after 3 years (2 decimals)?", num(926.1, 0.006),
      "800(1.05)³.", [S`\(800\times1.157625\).`], S`\(926.10\) dollars`),
  ]),

  ...hard([
    ["Two points and an asymptote", S`An exponential \(y=ab^x+c\) has asymptote \(y=2\) and passes through \((0,7)\) and \((1,4.5)\). Find it and \(y(3)\).`,
      [S`\(c=2\); \(a+2=7\Rightarrow a=5\).`, S`\(5b+2=4.5\Rightarrow b=0.5\).`, S`\(y(3)=5\cdot\tfrac18+2=2.625\).`],
      S`\(y=5(0.5)^x+2\); \(2.625\)`],
    ["Comparing two investments", "Ana invests 2000 dollars at 6% compounded annually. Ben invests 2500 dollars at 4% compounded annually. After how many full years is Ana's investment worth more?",
      [S`Compare \(2000(1.06)^n\) and \(2500(1.04)^n\).`, S`\(n=11\): \(3797\) vs \(3849\); \(n=12\): \(4024\) vs \(4003\).`],
      "after 12 years",
      plane({ view: { xmin: 0, xmax: 16, ymin: 1500, ymax: 5500 }, curves: [{ f: (n) => 2000 * 1.06 ** n, a: 0, color: "blue" }, { f: (n) => 2500 * 1.04 ** n, a: 0, color: "red" }], step: { x: 2, y: 500 }, xlabel: "years", ylabel: "value" })],
  ], [
    q("hard", S`Solve \(27^{x}=9^{x+1}\).`, num(2),
      "Base 3.", [S`\(3^{3x}=3^{2x+2}\).`], S`\(x=2\)`),
    q("hard", S`\(y=a(2)^x+c\) passes through \((0,1)\) and \((1,7)\). Find \(y(-1)\).`, num(-2),
      "a + c = 1, 2a + c = 7.", [S`\(a=6\), \(c=-5\); \(6\cdot\tfrac12-5\).`], S`\(-2\)`),
    q("hard", "A tank holds 900 L and loses 10% of its water each hour. After how many full hours is less than half left?", num(7),
      "0.9ⁿ < 0.5.", [S`\(0.9^6\approx0.531\), \(0.9^7\approx0.478\).`], S`\(7\) h`),
  ]),

  wrapUp({
    qas: [
      ["What is the most common error?", "Treating a negative exponent as a negative number, and using r instead of 1 − r for decay."],
      ["How do I start a model question?", "Find the starting amount, the factor per period, and how many periods."],
      ["How do I check a transformed graph?", "Draw the asymptote first and test the y-intercept."],
      ["How do I solve when bases don't match?", "In this course, use a graph or guess-and-check."],
      ["How should I study?", "Redo each lesson's hard-level problems, then check with the explorers."],
    ],
    summary: [
      "Rational exponents are roots and powers.",
      "Exponential: constant ratio, asymptote, range above or below c.",
      "Transform key points; c moves the asymptote.",
      "Models: growth, decay, half-life, interest, cooling.",
    ],
    next: "Chapter 5 studies trigonometric ratios.",
  }),
];
