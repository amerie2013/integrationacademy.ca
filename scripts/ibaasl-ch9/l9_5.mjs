// IB AA SL 9.5 — Solving Exponential Equations: taking logarithms, different bases, equations in e and ln, quadratics in eˣ, solving for time in growth and decay models, finding the rate constant k
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "9.5 Solving Exponential Equations";
export const ID = "1baa0009-0001-4001-8001-000000000905";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🔓",
    title: "Solving Exponential Equations",
    overview: S`When the two sides of an exponential equation cannot be written with the same base, logarithms bring the unknown down from the exponent. This is how we find when an investment doubles, how old a fossil is, or the growth rate of a culture. In this lesson you will solve exponential equations with logarithms, handle equations with e and ln, solve quadratics in \(e^x\), and use models to solve for time and for the rate constant.`,
    goals: [
      S`solve \(a^x=c\) as \(x=\frac{\ln c}{\ln a}\);`,
      "solve equations with different bases by taking logs of both sides;",
      S`solve equations involving \(e^x\) and \(\ln x\);`,
      S`solve equations that are quadratic in \(e^x\) or \(a^x\);`,
      S`find time, doubling time, half-life and the constant \(k\) in \(A=A_0e^{kt}\).`,
    ],
    curriculum: "SL 1.7 (solving exponential equations using logarithms); SL 2.9 (exponential models); SL 2.10 (solving equations graphically and analytically)",
    prior: [
      [S`Evaluate \(\frac{\ln 20}{\ln 4}\) (3 d.p.).`, "2.161."],
      [S`Simplify \(\ln e^{0.3t}\).`, S`\(0.3t\).`],
      [S`Solve \(u^2-5u+6=0\).`, S`\(u=2\) or \(u=3\).`],
    ],
    words: [
      ["Take logs", "apply log or ln to both sides", S`\(3^x=11\Rightarrow x\ln3=\ln11\)`],
      ["Doubling time", "the time for a quantity to double", S`\(\frac{\ln2}{k}\) for \(A_0e^{kt}\)`],
      ["Rate constant", S`\(k\) in \(A=A_0e^{kt}\)`, "k > 0 growth, k < 0 decay"],
      ["Exact form", "an answer left with logs", S`\(x=\frac{\ln 11}{\ln 3}\)`],
      ["Disguised quadratic", S`an equation in \(e^{2x}\) and \(e^x\)`, S`\(e^{2x}-3e^x+2=0\)`],
    ],
  }),

  section("📌 Taking logarithms", S`
  <p>To solve \(7^x=60\), take ln of both sides and use the power law: \(x\ln7=\ln60\), so \(x=\frac{\ln60}{\ln7}\approx2.104\). Graphically, it is the x-coordinate where \(y=7^x\) meets \(y=60\).</p>
  ${plane({ view: { xmin: -1, xmax: 3, ymin: -10, ymax: 100 }, step: { x: 0.5, y: 10 }, curves: [{ f: (x) => 7 ** x, color: "violet" }], lines: [{ m: 0, b: 60, color: "amber", dash: true }], points: [P(Math.log(60) / Math.log(7), 60, "(2.104, 60)", "red")] }, "7ˣ = 60 at x = ln 60 / ln 7 ≈ 2.104")}
  <p>With different bases on each side, take logs and collect the x terms: \(2^{x+3}=5^{x}\) gives \((x+3)\ln2=x\ln5\), so \(x(\ln5-\ln2)=3\ln2\) and \(x=\frac{3\ln2}{\ln2.5}\approx2.269\).</p>
  ${plane({ view: { xmin: -1, xmax: 4, ymin: -5, ymax: 60 }, step: { x: 1, y: 10 }, curves: [{ f: (x) => 2 ** (x + 3), color: "violet" }, { f: (x) => 5 ** x, color: "amber" }], points: [P(3 * Math.log(2) / Math.log(2.5), 5 ** (3 * Math.log(2) / Math.log(2.5)), "x ≈ 2.269", "red")] }, "2ˣ⁺³ (violet) and 5ˣ (amber) cross at x ≈ 2.269")}
  ${keyIdea("Isolate the exponential, take logs of both sides, bring the exponent down with the power law, then solve the linear equation.")}`),

  section("📌 Equations with e and ln, and disguised quadratics", S`
  <p>Use ln to undo e and e to undo ln: \(4e^{0.5x}=30\Rightarrow e^{0.5x}=7.5\Rightarrow x=2\ln7.5\); \(\ln(3x-1)=2\Rightarrow3x-1=e^2\Rightarrow x=\frac{e^2+1}{3}\).</p>
  <p>Since \(e^{2x}=(e^x)^2\), the equation \(e^{2x}-7e^x+10=0\) becomes \(u^2-7u+10=0\) with \(u=e^x\). So \(e^x=2\) or \(e^x=5\), giving \(x=\ln2\) or \(x=\ln5\). A negative value of \(u\) would be rejected, because \(e^x>0\).</p>
  ${plane({ view: { xmin: -1, xmax: 2.5, ymin: -4, ymax: 8 }, step: { x: 0.5, y: 2 }, curves: [{ f: (x) => Math.exp(2 * x) - 7 * Math.exp(x) + 10, color: "violet" }], points: [P(Math.log(2), 0, "ln 2", "red"), P(Math.log(5), 0, "ln 5", "red")] }, "y = e²ˣ − 7eˣ + 10 has zeros at ln 2 ≈ 0.693 and ln 5 ≈ 1.609")}
  ${watchOut([
    S`Isolate the exponential before taking logs: \(3\cdot2^x=24\) gives \(2^x=8\) first.`,
    S`\(\ln(a+b)\ne\ln a+\ln b\): you cannot take logs term by term.`,
    S`\(e^x=-3\) has no solution.`,
    "Keep exact forms until the final step to avoid rounding errors.",
  ])}`),

  section("📌 Solving for time and rate", S`
  <p>For \(A=A_0e^{kt}\), the doubling time solves \(2=e^{kt}\): \(t=\frac{\ln2}{k}\). The half-life of a decaying quantity is \(\frac{\ln 2}{|k|}\). Carbon-14 has a half-life of 5730 years, so \(k=-\frac{\ln2}{5730}\approx-0.000121\).</p>
  ${plane({ view: { xmin: 0, xmax: 25000, ymin: 0, ymax: 110 }, step: { x: 5000, y: 20 }, curves: [{ f: (t) => 100 * Math.exp((-Math.log(2) / 5730) * t), a: 0, b: 25000, color: "violet" }], lines: [{ m: 0, b: 30, color: "amber", dash: true }], points: [P(5730, 50, "(5730, 50)"), P(-5730 * Math.log(0.3) / Math.log(2), 30, "30% left: t ≈ 9953", "red")] }, "Percentage of carbon-14 remaining: 30% left after about 9953 years")}
  ${table(["Model", "Solve for t"], [[S`\(A=A_0(1+r)^t\)`, S`\(t=\dfrac{\ln(A/A_0)}{\ln(1+r)}\)`], [S`\(A=A_0e^{kt}\)`, S`\(t=\dfrac{\ln(A/A_0)}{k}\)`]])}`),

  section("📌 Explore", S`<p>Change the base a and the target c. The intersection gives the solution, and the readout shows the same value from logarithms.</p>`),

  widget("ibExpSolve", { init: [2.5, 40] }),

  examples([
    ["Level 1 · One step", S`Solve \(6^x=45\), giving the exact answer and 3 s.f.`,
      [S`\(x\ln6=\ln45\).`],
      S`\(x=\frac{\ln45}{\ln6}\approx2.12\)`],
    ["Level 1 · Isolate first", S`Solve \(5e^{2x}+3=43\).`,
      [S`\(e^{2x}=8\).`, S`\(2x=\ln8\).`],
      S`\(x=\frac12\ln8=\frac32\ln2\approx1.04\)`],
    ["Level 2 · Different bases", S`Solve \(3^{2x-1}=4^{x+1}\).`,
      [S`\((2x-1)\ln3=(x+1)\ln4\).`, S`\(x(2\ln3-\ln4)=\ln4+\ln3\Rightarrow x=\frac{\ln12}{\ln(9/4)}\).`],
      S`\(x\approx3.064\)`],
    ["Level 2 · Investment time", "2000 dollars is invested at 4.5% a year compounded annually. After how many whole years will it first exceed 3000 dollars?",
      [S`\(2000(1.045)^t>3000\Rightarrow t>\frac{\ln1.5}{\ln1.045}\approx9.21\).`],
      "10 years",
      plane({ view: { xmin: 0, xmax: 14, ymin: 1800, ymax: 3800 }, step: { x: 1, y: 200 }, curves: [{ f: (t) => 2000 * 1.045 ** t, a: 0, b: 14, color: "violet" }], lines: [{ m: 0, b: 3000, color: "amber", dash: true }], points: [P(9.21, 3000, "t ≈ 9.21", "red")] }, "The value passes 3000 dollars between years 9 and 10")],
    ["Level 3 · Finding k", "A bacteria culture grows from 500 to 1400 in 3 hours, following N = 500e^(kt). Find k and the doubling time.",
      [S`\(1400=500e^{3k}\Rightarrow e^{3k}=2.8\Rightarrow k=\frac{\ln2.8}{3}\approx0.3432\).`, S`Doubling time \(\frac{\ln2}{k}\approx2.02\) hours.`],
      S`\(k\approx0.343\); \(\approx2.02\) h`],
  ]),

  practice([
    q("Level 1 · solve", S`Solve \(2^x=19\) (3 d.p.).`, num(Math.log(19) / Math.log(2), 0.001),
      "ln 19 ÷ ln 2.", [S`\(\frac{2.944}{0.693}\).`], S`\(\approx4.248\)`),
    q("Level 1 · e", S`Solve \(e^{x}=12\) (3 d.p.).`, num(Math.log(12), 0.001),
      "x = ln 12.", [S`\(\ln12\).`], S`\(\approx2.485\)`),
    q("Level 2 · ln equation", S`Solve \(\ln(2x+3)=1\) (3 d.p.).`, num((Math.E - 3) / 2, 0.001),
      "2x + 3 = e.", [S`\(x=\frac{e-3}{2}\).`], S`\(\approx-0.141\)`),
    q("Level 2 · half-life", S`A substance decays as \(A=80e^{-0.04t}\). Find its half-life (2 d.p.).`, num(Math.log(2) / 0.04, 0.01),
      "ln 2 ÷ 0.04.", [S`\(\frac{0.6931}{0.04}\).`], S`\(\approx17.33\)`),
    q("Level 2 · quadratic in eˣ", S`The solutions of \(e^{2x}-5e^x+4=0\) are:`, choice([S`\(0\) and \(\ln4\)`, S`\(1\) and \(4\)`, S`\(\ln1\) and \(\ln5\)`, S`\(-1\) and \(-4\)`], 0),
      "Let u = eˣ.", [S`\((u-1)(u-4)=0\): \(e^x=1\) or \(4\).`], S`\(x=0,\ \ln4\)`),
  ]),

  ...hard([
    ["When do two populations meet?", S`Town A has 12 000 people growing at 3% a year; town B has 18 000 shrinking at 1.5% a year. After how many years are they equal?`,
      [S`\(12000(1.03)^t=18000(0.985)^t\Rightarrow\left(\frac{1.03}{0.985}\right)^t=1.5\).`, S`\(t=\frac{\ln1.5}{\ln(1.03/0.985)}\approx9.08\) years.`],
      S`\(\approx9.08\) years`,
      plane({ view: { xmin: 0, xmax: 16, ymin: 10, ymax: 20 }, step: { x: 2, y: 2 }, ylabel: "thousand people", curves: [{ f: (t) => 12 * 1.03 ** t, a: 0, b: 16, color: "violet" }, { f: (t) => 18 * 0.985 ** t, a: 0, b: 16, color: "amber" }], points: [P(9.08, 12 * 1.03 ** 9.08, "t ≈ 9.08", "red")] }, "Town A (violet) overtakes town B (amber) after about 9.1 years")],
    ["A quadratic with a rejected root", S`Solve \(3^{2x}-2\cdot3^{x}-15=0\).`,
      [S`Let \(u=3^x\): \(u^2-2u-15=0\Rightarrow(u-5)(u+3)=0\).`, S`\(u=-3\) is impossible since \(3^x>0\); \(3^x=5\Rightarrow x=\frac{\ln5}{\ln3}\approx1.465\).`],
      S`\(x=\frac{\ln5}{\ln3}\)`],
  ], [
    q("Level 3 · two bases", S`Solve \(5^{x}=2^{x+2}\) (3 d.p.).`, num(2 * Math.log(2) / Math.log(2.5), 0.001),
      "x ln 5 = (x + 2) ln 2.", [S`\(x=\frac{2\ln2}{\ln2.5}\).`], S`\(\approx1.513\)`),
    q("Level 3 · rate", S`A sample of 60 g decays to 45 g in 10 days, following \(A=60e^{kt}\). Find k (4 d.p.).`, num(Math.log(0.75) / 10, 0.0001),
      "e^(10k) = 0.75.", [S`\(k=\frac{\ln0.75}{10}\).`], S`\(\approx-0.0288\)`),
    q("Level 3 · time", S`How many years for money to triple at 6% compounded continuously (2 d.p.)?`, num(Math.log(3) / 0.06, 0.01),
      "e^(0.06t) = 3.", [S`\(t=\frac{\ln3}{0.06}\).`], S`\(\approx18.31\)`),
  ]),

  wrapUp({
    qas: [
      ["When do I need logs?", "When the sides cannot be written with the same base."],
      ["Which log should I use?", "Any base works; ln is convenient, especially with e."],
      ["Why isolate the exponential first?", "Logs cannot be taken term by term; the exponential must stand alone."],
      ["How do I recognise a disguised quadratic?", "Look for a²ˣ or e²ˣ alongside aˣ or eˣ."],
      ["How do I find doubling time or half-life?", "Solve 2 = e^(kt) or ½ = e^(kt): t = ln 2 / |k|."],
    ],
    summary: [
      "aˣ = c ⇒ x = ln c / ln a.",
      "Different bases: take logs, collect x terms.",
      "e and ln undo each other; e^(2x) = (eˣ)², reject eˣ ≤ 0.",
      "Doubling time / half-life = ln 2 / |k|.",
    ],
    next: "9.6 differentiates exponential and logarithmic functions.",
  }),
];
