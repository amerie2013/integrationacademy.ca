// IB AA SL Worksheet 9.3 — Logarithms and Their Graphs (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const lb = (b) => (x) => Math.log(x) / Math.log(b);

const EXAMPLES = [
  { title: "Evaluating", q: S`Evaluate $\log_5 625$, $\log_2\frac18$ and $\log_{27}3$.`,
    steps: [S`$5^4=625$; $2^{-3}=\frac18$; $27^{1/3}=3$.`], ans: S`$4$, $-3$, $\frac13$` },
  { title: "Converting", q: S`Write $10^{x}=0.5$ in log form and $\log_a 7=t$ in exponential form.`,
    steps: [S`$x=\log0.5$.`, S`$a^t=7$.`], ans: S`$x=\log0.5$; $a^t=7$` },
  { title: "Inverse properties", q: S`Simplify $\log_3 3^{2.5}$, $5^{\log_5 11}$ and $\ln\sqrt{e}$.`,
    steps: ["Logs and exponentials undo each other.", S`$\ln e^{1/2}=\frac12$.`], ans: S`$2.5$, $11$, $\frac12$` },
  { title: "Reflection in y = x", q: S`Sketch $y=4^x$ and $y=\log_4x$ on one diagram.`,
    fig: F({ view: { xmin: -3, xmax: 8, ymin: -3, ymax: 8 }, curves: [{ f: (x) => 4 ** x, color: "green" }, { f: lb(4), a: 0.01, b: 8 }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [pt(1, 4, "", "green"), pt(4, 1)] }, 6),
    steps: [S`$(1,4)$ on $4^x$ reflects to $(4,1)$ on $\log_4x$.`], ans: "reflections in y = x" },
  { title: "Domain and asymptote", q: S`State the domain and asymptote of $y=\ln(x+4)-2$ and find its x-intercept.`,
    fig: F({ view: { xmin: -5, xmax: 8, ymin: -5, ymax: 3 }, curves: [{ f: (x) => Math.log(x + 4) - 2, a: -3.999, b: 8 }], vlines: [{ x: -4, color: "red", dash: true }], points: [pt(Math.exp(2) - 4, 0, "", "green")] }, 6),
    steps: [S`$x+4>0$; asymptote $x=-4$.`, S`$\ln(x+4)=2\Rightarrow x=e^2-4$.`], ans: S`$x>-4$; $x=-4$; $(e^2-4,0)\approx(3.39,0)$` },
  { title: "Inverse function", q: S`Find $f^{-1}(x)$ for $f(x)=\log_2(x-3)$.`,
    steps: [S`$y=\log_2(x-3)\Rightarrow x-3=2^y$.`], ans: S`$f^{-1}(x)=2^x+3$` },
  { title: "Simple equation", q: S`Solve $\log_4(3x-2)=2$.`,
    steps: [S`$3x-2=16$.`], ans: S`$x=6$` },
  { title: "Unknown base", q: S`Solve $\log_x 216=3$.`,
    steps: [S`$x^3=216$.`], ans: S`$x=6$` },
  { title: "A logarithmic scale", q: S`The decibel level is $L=10\log(I/I_0)$. A sound has $L=85$. How many times $I_0$ is its intensity?`,
    steps: [S`$\log(I/I_0)=8.5$.`, S`$I/I_0=10^{8.5}$.`], ans: S`$10^{8.5}\approx3.16\times10^8$` },
];

const PROBLEMS = [
  { level: 1, q: S`Evaluate $\log_3 243$.`, recap: "Power of 3.", ans: "5" },
  { level: 1, q: S`Evaluate $\log_{10}0.01$.`, recap: "Negative power.", ans: S`$-2$` },
  { level: 1, q: S`Write $\log_6 x=2$ in exponential form.`, recap: "Convert.", ans: S`$x=36$` },
  { level: 2, q: S`Simplify $e^{\ln 4}+\ln e^{-2}$.`, recap: "Inverses.", ans: "2" },
  { level: 2, q: S`State the domain and asymptote of $y=\log_3(x-5)+1$.`, recap: "Shift.", ans: S`$x>5$; $x=5$` },
  { level: 2, q: S`Find the x-intercept of $y=\log_2(x+1)-3$.`, recap: "Set y = 0.", ans: S`$x=7$` },
  { level: 2, q: S`Find the inverse of $f(x)=e^{x}+2$ and state its domain.`, recap: "Swap and solve.", ans: S`$\ln(x-2)$, $x>2$` },
  { level: 2, q: S`Sketch $y=\log_2(x+1)$ on the grid and mark its key features.`, recap: "Asymptote, intercept.", ans: S`asymptote $x=-1$; through $(0,0)$ and $(1,1)$`,
    fig: F({ view: { xmin: -2, xmax: 8, ymin: -3, ymax: 4 }, step: { x: 1, y: 1 } }, 5.5) },
  { level: 3, space: 4, q: S`The graph of $y=\log_b(x+h)$ passes through $(0,1)$ and $(6,2)$. Find $b$ and $h$.`, recap: "Two conditions.", ans: S`$b=h$ and $b^2=6+b$: $b=3$, $h=3$` },
  { level: 3, space: 4, q: S`Find the domain of $f(x)=\log(x^2-4x)$.`, recap: "Positive argument.", ans: S`$x<0$ or $x>4$` },
  { level: 3, space: 4, q: S`Solve $\log_2(\log_3 x)=1$.`, recap: "Nested.", ans: S`$\log_3x=2\Rightarrow x=9$` },
  { level: 3, space: 4, q: S`Earthquake A has magnitude 6.8 and B has 5.3, where $M=\log(A/A_0)$. How many times larger is the amplitude of A?`, recap: "Ratio of powers.", ans: S`$10^{1.5}\approx31.6$` },
  { level: 3, space: 4, q: S`Explain why $\log_b 1=0$ and $\log_b b=1$ for every valid base $b$.`, recap: "Definition.", ans: S`$b^0=1$ and $b^1=b$` },
];

export const WS = {
  code: "9.3",
  title: "Logarithms and Their Graphs",
  bigideas: S`$\log_b x=y\iff b^y=x$ ($b>0$, $b\ne1$, $x>0$). $\log x=\log_{10}x$, $\ln x=\log_e x$. $b^x$ and $\log_b x$ are inverses: $\log_b b^x=x$, $b^{\log_b x}=x$, and their graphs reflect in $y=x$. $y=a\log_b(x-h)+k$ has domain $x>h$ and vertical asymptote $x=h$.`,
  goals: ["Convert between forms.", "Evaluate logs.", "Sketch log graphs.", "Solve simple log equations."],
  curriculum: "SL 1.5, 2.9",
  vocab: [["Logarithm", "an exponent"], [S`$\ln$`, "base e"], ["Vertical asymptote", S`$x=h$`]],
  hook: "How many times must you double 1 to pass one million? The answer is a logarithm.",
  concepts: [
    ["1. Definition", S`$\log_2 32=5$ because $2^5=32$.`],
    ["2. Inverse graphs", S`${F({ view: { xmin: -2, xmax: 7, ymin: -2, ymax: 7 }, curves: [{ f: (x) => 2 ** x, color: "green" }, { f: lb(2), a: 0.01, b: 7 }], lines: [{ m: 1, b: 0, color: "gray", dash: true }] }, 4.8)} Reflections in $y=x$.`],
    ["3. Transformations", S`Asymptote $x=h$.`],
  ],
  tips: ["A log is an exponent.", "Argument must be positive.", "log(x + 3) shifts left.", "Convert to exponential form.", "Check the domain."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
