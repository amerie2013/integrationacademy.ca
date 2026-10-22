// IB AA SL Worksheet 9.4 — Laws of Logarithms (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Product and quotient", q: S`Write $\log_2 24-\log_2 3$ as a single number.`,
    steps: [S`$\log_2 8$.`], ans: "3" },
  { title: "Power law", q: S`Simplify $\log 1000^{2}$ and $\ln e^{-4}$.`,
    steps: [S`$2\log1000=6$; $-4$.`], ans: S`$6$; $-4$` },
  { title: "Expanding", q: S`Expand $\ln\dfrac{a^2b^3}{\sqrt c}$.`,
    steps: [S`$\ln a^2+\ln b^3-\ln c^{1/2}$.`], ans: S`$2\ln a+3\ln b-\frac12\ln c$` },
  { title: "Condensing", q: S`Write $3\log x-\log y+\frac12\log z$ as one logarithm.`,
    steps: [S`$\log\frac{x^3\sqrt z}{y}$.`], ans: S`$\log\dfrac{x^3\sqrt z}{y}$` },
  { title: "Change of base", q: S`Evaluate $\log_6 100$ to 3 decimal places.`,
    steps: [S`$\frac{\ln100}{\ln6}$.`], ans: "2.570" },
  { title: "In terms of p and q", q: S`$\log_c 3=p$ and $\log_c 7=q$. Write $\log_c 63$ and $\log_c\frac{49}{3}$.`,
    steps: [S`$63=3^2\cdot7$; $\frac{49}3=\frac{7^2}{3}$.`], ans: S`$2p+q$; $2q-p$` },
  { title: "A product shifts the graph", q: S`Explain why $y=\log_3(9x)$ is $y=\log_3x$ moved up 2.`,
    fig: F({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 5 }, curves: [{ f: (x) => Math.log(x) / Math.log(3), a: 0.01, b: 10 }, { f: (x) => Math.log(9 * x) / Math.log(3), a: 0.005, b: 10, color: "amber" }], points: [pt(3, 1), pt(3, 3, "", "amber")] }, 6),
    steps: [S`$\log_3(9x)=\log_3 9+\log_3 x=2+\log_3x$.`], ans: "product law" },
  { title: "Solving with the product law", q: S`Solve $\log_3 x+\log_3(x+8)=2$.`,
    fig: F({ view: { xmin: 0, xmax: 4, ymin: -2, ymax: 4 }, curves: [{ f: (x) => (Math.log(x) + Math.log(x + 8)) / Math.log(3), a: 0.05, b: 4 }], lines: [{ m: 0, b: 2, color: "amber", dash: true }], points: [pt(1, 2, "", "red")] }, 6),
    steps: [S`$x(x+8)=9\Rightarrow x^2+8x-9=0\Rightarrow(x+9)(x-1)=0$.`, S`Reject $-9$.`], ans: S`$x=1$` },
  { title: "A quotient equation", q: S`Solve $\ln(5x+4)-\ln(x)=\ln 6$.`,
    steps: [S`$\frac{5x+4}{x}=6\Rightarrow 5x+4=6x$.`], ans: S`$x=4$` },
];

const PROBLEMS = [
  { level: 1, q: S`Simplify $\log_5 50-\log_5 2$.`, recap: "Quotient.", ans: "2" },
  { level: 1, q: S`Simplify $\log 4+\log 25$.`, recap: "Product.", ans: "2" },
  { level: 1, q: S`Evaluate $\log_9 40$ (3 d.p.).`, recap: "Change of base.", ans: "1.679" },
  { level: 2, q: S`Expand $\log_2\dfrac{8x^5}{y}$.`, recap: "Expand.", ans: S`$3+5\log_2x-\log_2y$` },
  { level: 2, q: S`Condense $2\ln 3+\ln 2-\ln 9$.`, recap: "Condense.", ans: S`$\ln 2$` },
  { level: 2, q: S`Given $\log 2=a$, write $\log 80$ in terms of $a$.`, recap: S`$80=2^3\cdot10$.`, ans: S`$3a+1$` },
  { level: 2, q: S`Solve $\log_6 x+\log_6(x-5)=2$.`, recap: "Product law, check.", ans: S`$x=9$` },
  { level: 2, q: S`Solve $\log_2(x+10)-\log_2 x=1$.`, recap: "Quotient law.", ans: S`$x=10$` },
  { level: 3, space: 4, q: S`Solve $2\log_3 x-\log_3(x-2)=2$.`, recap: "Quadratic.", ans: S`$x^2=9x-18$: $x=3$ or $x=6$` },
  { level: 3, space: 4, q: S`Solve $(\ln x)^2-\ln x^2=3$.`, recap: S`Let $u=\ln x$.`, ans: S`$u=3$ or $-1$: $x=e^3$ or $e^{-1}$`,
    fig: F({ view: { xmin: 0, xmax: 22, ymin: -2, ymax: 6 }, curves: [{ f: (x) => Math.log(x) ** 2 - 2 * Math.log(x), a: 0.1, b: 22 }], lines: [{ m: 0, b: 3, color: "amber", dash: true }], step: { x: 2, y: 1 } }, 5.5) },
  { level: 3, space: 4, q: S`Show that $\log_a b\times\log_b a=1$.`, recap: "Change of base.", ans: S`$\frac{\ln b}{\ln a}\cdot\frac{\ln a}{\ln b}=1$` },
  { level: 3, space: 4, q: S`Solve $\log_4 x=\log_2(x-6)$.`, recap: "Same base.", ans: S`$\frac12\log_2x=\log_2(x-6)$: $x=(x-6)^2$, $x=9$` },
  { level: 3, space: 4, q: S`A student writes $\log(x+y)=\log x+\log y$. Give values of $x$ and $y$ showing this is false in general.`, recap: "Counterexample.", ans: S`e.g. $x=y=1$: $\log2\ne0$` },
];

export const WS = {
  code: "9.4",
  title: "Laws of Logarithms",
  bigideas: S`Since logs are exponents: $\log_b(mn)=\log_b m+\log_b n$, $\log_b\frac mn=\log_b m-\log_b n$, $\log_b m^k=k\log_b m$. Change of base: $\log_b x=\frac{\ln x}{\ln b}$. To solve log equations: condense, convert to exponential form, solve, and reject values that make an argument non-positive.`,
  goals: ["Use the three laws.", "Expand and condense.", "Change base.", "Solve log equations with checks."],
  curriculum: "SL 1.5, 1.7",
  vocab: [["Product law", S`$\log mn=\log m+\log n$`], ["Power law", S`$\log m^k=k\log m$`], ["Change of base", S`$\frac{\ln x}{\ln b}$`]],
  hook: "Before calculators, people multiplied large numbers by adding logarithms from tables. Why does that work?",
  concepts: [
    ["1. Laws", "Products add, quotients subtract, powers multiply."],
    ["2. Change of base", S`${F({ view: { xmin: -1, xmax: 8, ymin: -3, ymax: 4 }, curves: [{ f: Math.log, a: 0.01, b: 8, color: "amber" }, { f: Math.log2, a: 0.01, b: 8 }] }, 4.8)} $\log_2x=\frac{\ln x}{\ln2}$ stretches $\ln x$.`],
    ["3. Equations", "Condense, convert, check."],
  ],
  tips: ["No law for log(m + n).", "Power law: bring k to the front.", "Use ln for any base.", "Check every argument > 0.", "Substitute u = ln x for squares."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
