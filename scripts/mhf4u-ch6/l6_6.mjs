// MHF4U 6.6 — Chapter 6 Review (NEW lesson): exponentials and their inverses, logarithms, transformations,
// the power law and logarithmic scales, in multi-step examples.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.6 Chapter 6 Review";
export const ID = "6d4f0006-0001-4001-8001-000000000606";

const S = String.raw;
const L = Math.log10;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const va = (x) => ({ x, color: "red", dash: true });
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 6 Review — Exponential and Logarithmic Functions",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, multi-step examples that combine several skills, mixed practice and two harder problems. The thread through all of it is one sentence: <em>a logarithm is an exponent</em>.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "move between exponential and logarithmic form;",
      "graph transformed logarithmic functions;",
      "use the power law and change of base;",
      "solve problems on logarithmic scales.",
    ],
    curriculum: "A1.1–A1.4, A2.1–A2.4, A3.1 (whole chapter)",
    prior: [
      [S`Inverse of \(y=5^x\)?`, S`\(y=\log_5x\).`],
      [S`\(\log_4\frac1{16}\)?`, S`\(-2\).`],
      [S`Asymptote of \(y=\log(x-3)\)?`, S`\(x=3\).`],
    ],
    words: [
      ["Logarithm", "an exponent: \\(\\log_bx=y\\Leftrightarrow b^y=x\\)", ""],
      ["Power law", "\\(\\log_bx^n=n\\log_bx\\)", ""],
      ["Change of base", "\\(\\log_bx=\\frac{\\log x}{\\log b}\\)", ""],
      ["Log scale", "equal steps are equal ratios", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["6.1 Inverse", "reflect \\(y=b^x\\) in \\(y=x\\)", "\\((2,4)\\to(4,2)\\)", "inverse ≠ reciprocal"],
    ["6.2 Logarithms", "\\(\\log_bx=y\\Leftrightarrow b^y=x\\)", "\\(\\log_381=4\\)", "argument must be positive"],
    ["6.3 Transformations", "\\(a\\log_b(k(x-d))+c\\); VA \\(x=d\\)", "\\(\\log_2(x-3)+1\\)", "factor k first"],
    ["6.4 Power law", "\\(\\log_bx^n=n\\log_bx\\)", "\\(2^x=50\\Rightarrow x=\\frac{\\log50}{\\log2}\\)", "\\((\\log x)^2\\ne2\\log x\\)"],
    ["6.5 Log scales", "difference d → ratio \\(10^d\\)", "pH 2 vs 5: 1000×", "decibels: divide by 10"],
  ])),

  section("📌 Explore", S`<p>Use the explorer to check your graphs: change the base and the shifts, and compare with the examples below.</p>`),

  widget("ibLogGraph", { init: [3, -2, 1] }),

  section("📌 The big picture", keyIdea(S`Exponential and logarithmic functions are inverses. Every question in this chapter can be turned around: a logarithm question into an exponent question, a horizontal asymptote into a vertical one, a factor of 10 into a step of 1.`)),

  examples([
    ["Inverse, then evaluate", S`For \(f(x)=3^x\): (a) write \(f^{-1}\) as a logarithm; (b) evaluate \(f^{-1}(81)\) and \(f^{-1}\left(\frac19\right)\).`,
      [S`<b>Rule.</b> The inverse of \(y=b^x\) is \(y=\log_bx\) (swap \(x\) and \(y\), then use the definition).`,
        S`<b>(a)</b> \(f^{-1}(x)=\log_3x\).`,
        S`<b>(b)</b> \(81=3^4\), so \(\log_381=4\); \(\frac19=3^{-2}\), so \(\log_3\frac19=-2\).`,
        S`<b>Check:</b> \(f(4)=81\) and \(f(-2)=\frac19\), so the inverse undoes \(f\) ✓`],
      S`\(f^{-1}(x)=\log_3x\); \(4\) and \(-2\)`],
    ["A transformed graph", S`For \(y=-2\log_3(x+2)+1\), state the asymptote, domain, and the images of \((1,0)\), \((3,1)\) and \((9,2)\).`,
      [S`<b>Match:</b> \(a=-2,\ k=1,\ d=-2,\ c=1\). Mapping \((x,y)\to(x-2,\ -2y+1)\).`,
        S`<b>Asymptote</b> \(x=-2\); <b>domain</b> \(x>-2\).`,
        S`<b>Images:</b> \((1,0)\to(-1,1)\), \((3,1)\to(1,-1)\), \((9,2)\to(7,-3)\).`,
        S`<b>Check:</b> \(x=7\): \(-2\log_39+1=-4+1=-3\) ✓`],
      S`VA \(x=-2\); \(x>-2\); \((-1,1),(1,-1),(7,-3)\)`,
      plane({ view: { xmin: -4, xmax: 9, ymin: -5, ymax: 4 }, vlines: [va(-2)], curves: [{ f: (x) => -2 * lg(3)(x + 2) + 1, a: -1.995, color: "violet" }], points: [{ x: -1, y: 1, label: "(−1, 1)", color: "blue" }, { x: 1, y: -1, label: "(1, −1)", color: "blue" }, { x: 7, y: -3, label: "(7, −3)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Exact and approximate values", S`Evaluate \(\log_{16}8\) exactly and \(\log_{16}100\) to three decimals.`,
      [S`<b>Exact (common base 2):</b> \(16^y=8\Rightarrow2^{4y}=2^3\Rightarrow y=\frac34\).`,
        S`<b>Approximate (change of base):</b> \(\log_{16}100=\dfrac{\log100}{\log16}=\dfrac{2}{1.2041}\approx1.661\).`,
        S`<b>Check:</b> \(16^{3/4}=(2^4)^{3/4}=2^3=8\) ✓; \(16^{1.661}\approx100\) ✓`],
      S`\(\frac34\) and \(\approx1.661\)`],
    ["Solve with the power law", S`A population of bacteria is \(N=400(1.15)^t\) after \(t\) hours. When does it reach \(5000\)?`,
      [S`<b>Isolate the power:</b> \(400(1.15)^t=5000\Rightarrow1.15^t=12.5\).`,
        S`<b>Take logs and use the power law:</b> \(t\log1.15=\log12.5\).`,
        S`<b>Solve:</b> \(t=\dfrac{\log12.5}{\log1.15}\approx18.07\) hours.`,
        S`<b>Check:</b> \(400(1.15)^{18.07}\approx5000\) ✓`],
      S`about \(18.1\) hours`],
    ["A logarithmic scale", S`One sound is \(72\) dB and another is \(58\) dB. How many times as intense is the first?`,
      [S`<b>Rule.</b> \(I=I_0\cdot10^{\beta/10}\), so the ratio is \(10^{(72-58)/10}=10^{1.4}\).`,
        S`<b>Evaluate:</b> \(10^{1.4}\approx25.1\).`,
        S`<b>Sense check:</b> \(14\) dB is between \(10\) dB (×10) and \(20\) dB (×100) ✓`],
      S`about \(25\) times`],
  ]),

  practice([
    q("evaluate", S`Evaluate \(\log_5 0.04\).`, num(-2), "0.04 = 1/25.", [S`\(5^{-2}=\frac1{25}=0.04\).`], S`\(-2\)`),
    q("asymptote", S`What is the vertical asymptote of \(y=\log_2(3x-12)\)? Enter \(c\) in \(x=c\).`, num(4), "Factor 3.", [S`\(3(x-4)\).`], S`\(4\)`),
    q("power law", S`Evaluate \(\log_2\left(4^{10}\right)\).`, num(20), "Bring the 10 down.", [S`\(10\log_24=20\).`], S`\(20\)`),
    q("solve", S`Solve \(6^x=20\) (two decimals).`, num(L(20) / L(6), 0.01), "Take logs.", [S`\(x=\frac{\log20}{\log6}\approx1.67\).`], S`\(\approx1.67\)`),
    q("scale", S`A pH of \(4\) is how many times as acidic as a pH of \(6\)?`, choice(["100", "2", "20", "1/100"], 0), "10^(difference).", [S`\(10^2=100\).`], "100"),
  ]),

  ...hard([
    ["A graph and its inverse", S`For \(f(x)=2^{x-1}+3\): (a) find \(f^{-1}\) as a logarithm; (b) state the domain and asymptote of \(f^{-1}\); (c) find \(f^{-1}(11)\).`,
      [S`<b>(a)</b> Swap: \(x=2^{y-1}+3\Rightarrow2^{y-1}=x-3\Rightarrow y-1=\log_2(x-3)\Rightarrow f^{-1}(x)=\log_2(x-3)+1\).`,
        S`<b>(b)</b> \(x-3>0\): domain \(x>3\), asymptote \(x=3\) (the image of \(y=3\)).`,
        S`<b>(c)</b> \(\log_28+1=3+1=4\).`,
        S`<b>Check:</b> \(f(4)=2^3+3=11\) ✓`],
      S`\(f^{-1}(x)=\log_2(x-3)+1\); \(x>3\); \(4\)`,
      plane({ view: { xmin: -3, xmax: 12, ymin: -3, ymax: 12 }, lines: [{ m: 1, b: 0, color: "gray", dash: true }], vlines: [va(3)], curves: [{ f: (x) => 2 ** (x - 1) + 3, color: "blue" }, { f: (x) => lg(2)(x - 3) + 1, a: 3.003, color: "violet" }], points: [{ x: 11, y: 4, label: "(11, 4)", color: "violet" }, { x: 4, y: 11, label: "(4, 11)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Earthquake energy", S`Two earthquakes differ in magnitude by \(1.5\). (a) How many times as intense is the larger? (b) What magnitude difference makes one quake \(1000\) times as intense as another?`,
      [S`<b>(a)</b> Ratio \(=10^{1.5}\approx31.6\).`,
        S`<b>(b)</b> \(10^d=1000=10^3\), so \(d=3\).`,
        S`<b>Check (a):</b> \(1.5\) is halfway between \(1\) and \(2\) on the log scale, and \(31.6\) is the geometric middle of \(10\) and \(100\) (\(\sqrt{1000}\approx31.6\)) ✓`],
      S`(a) about \(31.6\) times (b) \(3\)`],
  ], [
    q("hard", S`Find \(x\) if \(\log_x 27=\frac32\).`, num(9), "x^(3/2) = 27.", [S`\(x=27^{2/3}=9\).`], S`\(9\)`),
    q("hard", S`How long does \(1.06^t=3\) take? (two decimals)`, num(L(3) / L(1.06), 0.01), "t = log 3 / log 1.06.", [S`\(\approx18.85\).`], S`\(\approx18.85\)`),
    q("hard", S`Find the x-intercept of \(y=\log_2(x+5)-3\).`, num(3), "log₂(x + 5) = 3.", [S`\(x+5=8\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the one idea of the chapter?", "A logarithm is an exponent: log_b x = y means bʸ = x."],
      ["How do the graphs of bˣ and log_b x relate?", "They are reflections in y = x; their asymptotes and intercepts swap."],
      ["How do I read a transformed log graph?", "VA x = d, domain from k(x − d) > 0, map (x, y) → (x/k + d, ay + c)."],
      ["When do I use the power law?", "To bring an exponent down: evaluating, change of base, and solving bˣ = c."],
      ["What does a difference of 2 mean on a log scale?", "A factor of 10² = 100 (for decibels, a difference of 20 dB)."],
    ],
    summary: [
      "Inverse of bˣ is log_b x; reflect in y = x.",
      "log_b x = y ⇔ bʸ = x; argument > 0.",
      "y = a log_b(k(x − d)) + c: VA x = d.",
      "log_b xⁿ = n log_b x; log_b x = log x / log b.",
      "Log scales: difference d ↔ ratio 10^d.",
    ],
    next: "Chapter 7 solves exponential and logarithmic equations with the product, quotient and power laws.",
  }),
];
