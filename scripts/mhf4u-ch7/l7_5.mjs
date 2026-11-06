// MHF4U 7.5 — Exponential and Logarithmic Models (old 4.4, rebuilt): compound interest with periods,
// half-life from data, a model through two data points, Newton cooling, and solving a logarithmic model.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.5 Exponential and Logarithmic Models";
export const ID = "7fc06729-10aa-44ad-8e8c-bc705df618c2";

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Exponential and Logarithmic Models",
    overview: S`Money in a savings account, a drug in the bloodstream, a cooling cup of coffee and a growing bacteria culture all follow exponential models. Once a model is written, questions such as "when will it reach…?" become exponential equations, solved with logarithms. Other quantities, such as a skill that improves quickly at first and then levels off, follow logarithmic models, solved by rewriting in exponential form. This lesson builds the models from words or data and answers questions with them.`,
    goals: [
      "write growth and decay models \\(A=A_0b^{t/p}\\) from a rate, a doubling time or a half-life;",
      "use compound interest with several compounding periods per year;",
      "find a model from two data points;",
      "solve for time in exponential models and for the input in logarithmic models;",
      "interpret answers in context and check them.",
    ],
    curriculum: "A3.4 (solve problems involving exponential and logarithmic equations algebraically, including problems arising from real-world applications), D1.9 (solve problems using graphs and equations of exponential and logarithmic functions)",
    prior: [
      [S`Solve \(1.05^t=2\).`, S`\(t=\frac{\log2}{\log1.05}\approx14.2\).`],
      [S`A quantity loses \(15\%\) a year. What is the yearly factor?`, S`\(0.85\).`],
      [S`Solve \(\log(t+1)=2\).`, S`\(t+1=100\), so \(t=99\).`],
    ],
    words: [
      ["Growth/decay factor", "the number each period multiplies by", "\\(+8\\%\\Rightarrow1.08,\\ -8\\%\\Rightarrow0.92\\)"],
      ["Half-life", "the time for an amount to halve", "\\(A=A_0\\left(\\tfrac12\\right)^{t/h}\\)"],
      ["Compound interest", "\\(A=P\\left(1+\\tfrac rn\\right)^{nt}\\), \\(n\\) periods a year", "monthly: \\(n=12\\)"],
      ["Logarithmic model", "output grows by equal amounts when the input is multiplied", "\\(N=20+30\\log(t+1)\\)"],
    ],
  }),

  section("📌 Building the model", S`
  ${table(["Situation", "Model", "Meaning of the pieces"], [
    ["growth or decay at a rate \\(r\\) per period", "\\(A=A_0(1\\pm r)^t\\)", "\\(A_0\\) = start, \\(t\\) = number of periods"],
    ["doubling time \\(d\\)", "\\(A=A_0(2)^{t/d}\\)", "\\(t/d\\) = number of doublings"],
    ["half-life \\(h\\)", "\\(A=A_0\\left(\\tfrac12\\right)^{t/h}\\)", "\\(t/h\\) = number of halvings"],
    ["compound interest", "\\(A=P\\left(1+\\tfrac rn\\right)^{nt}\\)", "\\(n\\) = compounding periods per year"],
    ["cooling (Newton)", "\\(T=T_s+(T_0-T_s)b^t\\)", "the <i>difference</i> from room temperature decays"],
  ])}
  ${keyIdea(S`To answer "when?" in an exponential model: isolate the power, take logs, and divide (7.2). To answer "when?" in a logarithmic model: isolate the logarithm and rewrite in exponential form (7.4).`)}`),

  widget("ibExpGraph", { init: [100, 1.2, 0, 0] }),

  section("📌 Reading a model's graph", S`
  <p>An exponential growth model curves upward ever faster; a decay model drops toward an asymptote (often \(0\), or the room temperature for cooling). A logarithmic model rises quickly and then flattens: each <b>multiplication</b> of the input adds the <b>same amount</b> to the output.</p>
  ${plane({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 30 * L(t + 1), a: 0, color: "violet" }], points: [{ x: 9, y: 50, label: "(9, 50)", color: "amber" }, { x: 30.6, y: 65, label: "(30.6, 65)", color: "blue" }], step: { x: 5, y: 10 }, xlabel: "t (weeks)", ylabel: "N (wpm)" }, "Typing speed N = 20 + 30 log(t + 1): the first 9 weeks add 30 wpm; the next 15 wpm takes about 21 more weeks.")}
  ${watchOut([
    "A loss of 12% gives a factor of 0.88, not 0.12.",
    "With monthly compounding the rate per period is r/12 and the number of periods is 12t.",
    "In a cooling model, the difference from the room temperature decays, not the temperature itself.",
    "Answer the question asked: convert months to years, round sensibly, and include units.",
    "Check that the answer is reasonable: a half-life must be positive, a doubling time should match the rule of 70.",
  ])}`),

  examples([
    ["Compound interest, monthly", S`\(\$2500\) is invested at \(4.8\%\) per year compounded monthly. When will it reach \(\$4000\)?`,
      [S`<b>Given and goal.</b> \(P=2500\), \(r=0.048\), \(n=12\) periods a year, and \(A=4000\). The unknown is the time \(t\), which is in the exponent, so logarithms will be needed.`,
        S`<b>Model.</b> \(A=P\left(1+\frac rn\right)^{nt}\). The rate per month is \(\frac{0.048}{12}=0.004\), and there are \(12t\) months: \(A=2500(1.004)^{12t}\).`,
        S`<b>Isolate the power.</b> Set \(A=4000\) and divide by \(2500\): \(1.004^{12t}=\dfrac{4000}{2500}=1.6\).`,
        S`<b>Take logs.</b> \(12t\log1.004=\log1.6\), so \(12t=\dfrac{\log1.6}{\log1.004}\approx117.7\) months.`,
        S`<b>Interpret.</b> Interest is added once a month, so the balance first passes \(\$4000\) when the interest is added at the end of month \(118\). In years, \(t\approx9.81\).`,
        S`<b>Check.</b> \(2500(1.004)^{117}\approx3988<4000\) and \(2500(1.004)^{118}\approx4004>4000\) ✓. The rule of 72 at \(4.8\%\) gives about \(15\) years to double, and growing by a factor of \(1.6\) should take less time ✓`],
      S`about \(9.8\) years (\(118\) months)`,
      plane({ view: { xmin: 0, xmax: 15, ymin: 2000, ymax: 5500 }, curves: [{ f: (t) => 2500 * 1.004 ** (12 * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 4000, color: "blue", dash: true }], points: [{ x: 9.81, y: 4000, label: "(9.81, 4000)", color: "amber" }], step: { x: 1, y: 500 } })],
    ["Half-life from data", S`A drug dose of \(80\) mg falls to \(25\) mg in \(12\) hours. Find its half-life.`,
      [S`<b>Given and goal.</b> \(A_0=80\), and \(A=25\) when \(t=12\). The unknown is the half-life \(h\).`,
        S`<b>Model.</b> After \(t\) hours there have been \(\frac th\) halvings, so \(A=80\left(\tfrac12\right)^{t/h}\).`,
        S`<b>Substitute and isolate.</b> \(25=80\left(\tfrac12\right)^{12/h}\). Divide by \(80\): \(\left(\tfrac12\right)^{12/h}=0.3125\).`,
        S`<b>Take logs.</b> The exponent comes down: \(\dfrac{12}{h}\log0.5=\log0.3125\).`,
        S`<b>Solve for \(h\).</b> Multiply by \(h\) and divide by \(\log0.3125\): \(h=\dfrac{12\log0.5}{\log0.3125}\approx7.15\) h. Both logarithms are negative, so \(h\) is positive.`,
        S`<b>Check.</b> \(80(0.5)^{12/7.151}\approx25.0\) ✓. Reasonableness: \(25\) mg is between a half (\(40\)) and a quarter (\(20\)) of the dose, so \(12\) h is between \(1\) and \(2\) half-lives ✓. The graph passes through \((7.15,\,40)\).`],
      S`about \(7.15\) h`,
      plane({ view: { xmin: -1, xmax: 25, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 80 * 0.5 ** (t / 7.151), a: 0, color: "violet" }], points: [{ x: 0, y: 80, label: "(0, 80)", color: "blue" }, { x: 7.15, y: 40, label: "(7.15, 40)", color: "amber" }, { x: 12, y: 25, label: "(12, 25)", color: "blue" }], step: { x: 2, y: 10 } })],
    ["A model through two points", S`A bacteria count is \(300\) after \(2\) h and \(1200\) after \(5\) h. Find a model \(N=ab^t\) and when it reaches \(10\,000\).`,
      [S`<b>Set up two equations.</b> The points give \(ab^2=300\) and \(ab^5=1200\). There are two unknowns, \(a\) and \(b\).`,
        S`<b>Divide to remove \(a\).</b> \(\dfrac{ab^5}{ab^2}=\dfrac{1200}{300}\), so \(b^3=4\) and \(b=4^{1/3}\approx1.5874\).`,
        S`<b>Find \(a\).</b> Substitute into the first equation: \(a=\dfrac{300}{b^2}\approx\dfrac{300}{2.5198}\approx119.06\). The model is \(N\approx119.06(1.5874)^t\).`,
        S`<b>Isolate the power for \(N=10\,000\).</b> \(b^t=\dfrac{10\,000}{119.06}\approx83.99\).`,
        S`<b>Take logs.</b> \(t=\dfrac{\log83.99}{\log1.5874}\approx9.59\) h.`,
        S`<b>Check.</b> The model gives \(300\) at \(t=2\) and \(1200\) at \(t=5\) ✓. The count quadruples every \(3\) h: \(1200\to4800\to19\,200\) at \(t=5,\,8,\,11\), so \(10\,000\) lies between \(8\) h and \(11\) h ✓`],
      S`\(N\approx119.06(1.5874)^t\); about \(9.6\) h`,
      plane({ view: { xmin: -0.5, xmax: 11, ymin: -500, ymax: 12000 }, curves: [{ f: (t) => 119.06 * 1.5874 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 10000, color: "blue", dash: true }], points: [{ x: 5, y: 1200, label: "(5, 1200)", color: "blue" }, { x: 9.59, y: 10000, label: "(9.59, 10 000)", color: "amber" }], step: { x: 1, y: 2000 } })],
    ["Newton's law of cooling", S`Coffee at \(90^\circ\)C is left in a \(20^\circ\)C room. The difference from room temperature halves every \(12\) minutes. When is the coffee \(45^\circ\)C?`,
      [S`<b>What decays?</b> Not the temperature itself, which stops at \(20^\circ\)C, but the difference from the room. It starts at \(90-20=70\).`,
        S`<b>Model.</b> Difference \(=70\left(\tfrac12\right)^{t/12}\), so \(T=20+70\left(\tfrac12\right)^{t/12}\).`,
        S`<b>Set \(T=45\) and isolate.</b> Subtract \(20\): \(70\left(\tfrac12\right)^{t/12}=25\). Divide by \(70\): \(\left(\tfrac12\right)^{t/12}=\dfrac{25}{70}\).`,
        S`<b>Take logs.</b> \(\dfrac t{12}\log0.5=\log\dfrac{25}{70}\), so \(t=\dfrac{12\log(25/70)}{\log0.5}\approx17.8\) min.`,
        S`<b>Check with whole half-times.</b> After \(12\) min the difference is \(35\), so \(T=55\). After \(24\) min it is \(17.5\), so \(T=37.5\). \(45^\circ\)C lies between these, so \(t\) is between \(12\) and \(24\) ✓`,
        S`<b>Read the graph.</b> The curve approaches the red asymptote \(T=20\), the room temperature, and crosses \(T=45\) near \(t=18\) ✓`],
      S`about \(17.8\) min`,
      plane({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 70 * 0.5 ** (t / 12), a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "red", dash: true }, { m: 0, b: 45, color: "blue", dash: true }], points: [{ x: 17.83, y: 45, label: "(17.8, 45)", color: "amber" }], step: { x: 5, y: 10 } })],
    ["A logarithmic model", S`After \(t\) weeks of practice, a student types \(N=20+30\log(t+1)\) words per minute. When does the student reach \(50\) wpm? \(65\) wpm?`,
      [S`<b>Plan.</b> Here the unknown is inside a logarithm, so isolate the logarithm and rewrite in exponential form.`,
        S`<b>Target 50.</b> \(20+30\log(t+1)=50\). Subtract \(20\): \(30\log(t+1)=30\). Divide by \(30\): \(\log(t+1)=1\).`,
        S`<b>Exponential form.</b> \(t+1=10^1\), so \(t=9\) weeks.`,
        S`<b>Target 65.</b> \(30\log(t+1)=45\), so \(\log(t+1)=1.5\), \(t+1=10^{1.5}\approx31.6\), and \(t\approx30.6\) weeks.`,
        S`<b>Interpret.</b> The first \(30\) wpm of gain takes \(9\) weeks, but the next \(15\) wpm takes about \(21.6\) more weeks. In a logarithmic model, multiplying \(t+1\) by \(10\) always adds the same amount (\(30\)), so progress slows.`,
        S`<b>Check.</b> \(20+30\log10=50\) ✓ and \(20+30\log31.6\approx65.0\) ✓. The flattening curve on the graph shows the same thing.`],
      S`\(9\) weeks; about \(30.6\) weeks`,
      plane({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 30 * L(t + 1), a: 0, color: "violet" }], lines: [{ m: 0, b: 50, color: "blue", dash: true }, { m: 0, b: 65, color: "blue", dash: true }], points: [{ x: 9, y: 50, label: "(9, 50)", color: "amber" }, { x: 30.6, y: 65, label: "(30.6, 65)", color: "amber" }], step: { x: 5, y: 10 } })],
  ]),

  practice([
    q("interest", S`How many years does \(\$1200\) take to grow to \(\$2000\) at \(5\%\) per year compounded annually? (two decimals)`, num(L(5 / 3) / L(1.05), 0.01), "1.05ᵗ = 2000/1200.", [S`\(t=\frac{\log(5/3)}{\log1.05}\approx10.47\).`], S`\(\approx10.47\)`),
    q("half-life", S`A substance has a half-life of \(6\) h. How many mg of a \(200\) mg sample remain after \(15\) h? (two decimals)`, num(200 * 0.5 ** 2.5, 0.01), "15/6 = 2.5 half-lives.", [S`\(200(0.5)^{2.5}\approx35.36\).`], S`\(\approx35.36\)`),
    q("log model", S`With \(N=20+30\log(t+1)\), when does the student reach \(56\) wpm? (two decimals)`, num(10 ** 1.2 - 1, 0.01), "log(t + 1) = 1.2.", [S`\(t=10^{1.2}-1\approx14.85\).`], S`\(\approx14.85\)`),
    q("which model?", S`A quantity halves every \(3\) years. Which model fits?`, choice(["A = A₀(0.5)^(t/3)", "A = A₀(0.5)^(3t)", "A = A₀ − 0.5t/3", "A = 3A₀(0.5)^t"], 0), "t/3 counts the halvings.", [S`After \(t\) years there have been \(t/3\) halvings.`], S`\(A=A_0(0.5)^{t/3}\)`),
    q("two points", S`A population is \(50\) at \(t=0\) and \(80\) at \(t=4\). What is its growth rate per unit of time, in percent? (two decimals)`, num((1.6 ** 0.25 - 1) * 100, 0.01), "b⁴ = 1.6.", [S`\(b=1.6^{1/4}\approx1.1247\), so about \(12.47\%\).`], S`\(\approx12.47\)`),
  ]),

  ...hard([
    ["Compare two accounts", S`Account A pays \(6\%\) compounded annually; account B pays \(5.85\%\) compounded monthly. Which doubles money sooner, and by how much?`,
      [S`<b>Yearly factors:</b> A: \(1.06\). B: \(\left(1+\frac{0.0585}{12}\right)^{12}\approx1.06009\), slightly larger.`,
        S`<b>Doubling times:</b> A: \(t=\dfrac{\log2}{\log1.06}\approx11.896\) years. B: \(t=\dfrac{\log2}{\log1.06009}\approx11.878\) years.`,
        S`<b>Compare:</b> B is faster by about \(0.018\) years, roughly \(7\) days.`,
        S`<b>Reason:</b> monthly compounding earns interest on interest during the year, which more than makes up for the lower stated rate.`],
      S`B, by about a week`],
    ["Carbon dating", S`Carbon-14 has a half-life of \(5730\) years. A bone has \(35\%\) of its original carbon-14. How old is it?`,
      [S`<b>Model:</b> \(\dfrac{A}{A_0}=\left(\tfrac12\right)^{t/5730}\); set the fraction to \(0.35\).`,
        S`<b>Take logs:</b> \(\dfrac{t}{5730}\log0.5=\log0.35\Rightarrow t=\dfrac{5730\log0.35}{\log0.5}\approx8679\) years.`,
        S`<b>Check:</b> \(35\%\) is between \(50\%\) (one half-life, \(5730\) years) and \(25\%\) (two, \(11\,460\) years) ✓`],
      S`about \(8700\) years`,
      plane({ view: { xmin: -500, xmax: 20000, ymin: 0, ymax: 1.1 }, curves: [{ f: (t) => 0.5 ** (t / 5730), a: 0, color: "violet" }], lines: [{ m: 0, b: 0.35, color: "blue", dash: true }], points: [{ x: 8679, y: 0.35, label: "(8679, 0.35)", color: "amber" }, { x: 5730, y: 0.5, label: "(5730, 0.5)", color: "blue" }], step: { x: 2000, y: 0.1 } })],
  ], [
    q("hard", S`A fossil has \(60\%\) of its carbon-14 (half-life \(5730\) years). Find its age to the nearest year.`, num(5730 * L(0.6) / L(0.5), 1), "(1/2)^(t/5730) = 0.6.", [S`\(t=\frac{5730\log0.6}{\log0.5}\approx4223\).`], S`\(\approx4223\)`),
    q("hard", S`Tea at \(95^\circ\)C cools to \(70^\circ\)C in \(10\) min in a \(22^\circ\)C room. When is it \(40^\circ\)C? (minutes, two decimals)`, num(10 * L(18 / 73) / L(48 / 73), 0.02), "The difference goes 73 → 48 in 10 min.", [S`\(b^{10}=\frac{48}{73}\); solve \(\left(\frac{48}{73}\right)^{t/10}=\frac{18}{73}\): \(t\approx33.39\).`], S`\(\approx33.39\)`),
    q("hard", S`At \(3.6\%\) per year compounded monthly, how many years until an investment grows by \(50\%\)? (two decimals)`, num(L(1.5) / L(1.003) / 12, 0.01), "1.003^(12t) = 1.5.", [S`\(12t=\frac{\log1.5}{\log1.003}\approx135.36\), so \(t\approx11.28\).`], S`\(\approx11.28\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I turn a half-life into a model?", "A = A₀(1/2)^(t/h): t/h counts the halvings."],
      ["What changes with monthly compounding?", "The rate per period is r/12 and there are 12t periods."],
      ["How do I find a model from two points?", "Divide the two equations to remove a, solve for b, then substitute back for a."],
      ["Why does the cooling model have +20?", "The coffee approaches room temperature; only the difference from 20 °C decays."],
      ["How do I solve a logarithmic model for t?", "Isolate the log, rewrite in exponential form, and solve."],
    ],
    summary: [
      "Growth/decay: A = A₀bᵗ; doubling 2^(t/d); half-life (1/2)^(t/h).",
      "Interest: A = P(1 + r/n)^(nt).",
      "\"When?\" questions: isolate, take logs, divide.",
      "Check answers against the data and the graph.",
    ],
    next: "7.6 reviews the whole chapter.",
  }),
];
