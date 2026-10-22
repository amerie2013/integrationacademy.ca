// IB AA SL Worksheet 10.4 — The Fundamental Theorem of Calculus (teacher edition)
import { svgT } from "./figT.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Polynomial", q: S`Evaluate $\int_1^2(6x^2-2x)\,dx$.`,
    steps: [S`$\left[2x^3-x^2\right]_1^2=(16-4)-(2-1)$.`], ans: "11" },
  { title: "Root", q: S`Evaluate $\int_4^9\sqrt x\,dx$.`,
    steps: [S`$\left[\frac23x^{3/2}\right]_4^9=18-\frac{16}3$.`], ans: S`$\frac{38}3$` },
  { title: "Exponential", q: S`Evaluate $\int_0^1 e^{2x}\,dx$.`,
    steps: [S`$\left[\frac12e^{2x}\right]_0^1$.`], ans: S`$\frac12(e^2-1)\approx3.195$` },
  { title: "Reciprocal", q: S`Evaluate $\int_2^6\frac{3}{x}\,dx$.`,
    steps: [S`$\big[3\ln x\big]_2^6=3\ln3$.`], ans: S`$3\ln3\approx3.296$` },
  { title: "Linear power", q: S`Evaluate $\int_0^2(x+1)^3\,dx$.`,
    steps: [S`$\left[\frac{(x+1)^4}{4}\right]_0^2=\frac{81-1}4$.`], ans: "20" },
  { title: "Area under a curve", q: S`Find the area enclosed by $y=8x-2x^2$ and the x-axis.`,
    fig: svgT(areaDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 9 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 8 * x - 2 * x * x }] }, [{ f: (x) => 8 * x - 2 * x * x, a: 0, b: 4 }]), 5.8),
    steps: [S`Roots 0, 4. $\left[4x^2-\frac23x^3\right]_0^4=64-\frac{128}3$.`], ans: S`$\frac{64}3$` },
  { title: "Below the axis", q: S`Find the area between $y=x^2-9$ and the x-axis from $x=0$ to $x=3$.`,
    fig: svgT(areaDoc({ view: { xmin: -0.5, xmax: 4, ymin: -10, ymax: 3 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x * x - 9 }] }, [{ f: (x) => x * x - 9, a: 0, b: 3, color: "red" }]), 5.8),
    steps: [S`$\left[\frac13x^3-9x\right]_0^3=-18$.`], ans: "18" },
  { title: "Across a root", q: S`Find the total area between $y=x^2-x$ and the x-axis from $x=0$ to $x=2$.`,
    steps: [S`$\int_0^1=-\frac16$; $\int_1^2=\frac56$.`], ans: "1" },
  { title: "Unknown limit", q: S`Find $k>0$ with $\int_0^k 3x^2\,dx=64$.`,
    steps: [S`$k^3=64$.`], ans: S`$k=4$` },
];

const PROBLEMS = [
  { level: 1, q: S`Evaluate $\int_0^3 x^2\,dx$.`, recap: "FTC.", ans: "9" },
  { level: 1, q: S`Evaluate $\int_1^2 4x^3\,dx$.`, recap: "FTC.", ans: "15" },
  { level: 1, q: S`Evaluate $\int_0^{\ln5}e^{x}\,dx$.`, recap: S`$e^{\ln5}=5$.`, ans: "4" },
  { level: 2, q: S`Evaluate $\int_1^{8}\frac{1}{\sqrt[3]{x}}\,dx$.`, recap: "Power −1/3.", ans: S`$\left[\frac32x^{2/3}\right]_1^8=4.5$` },
  { level: 2, q: S`Evaluate $\int_0^4\frac{2}{2x+1}\,dx$.`, recap: S`$\ln|2x+1|$.`, ans: S`$\ln9\approx2.197$` },
  { level: 2, q: S`Find the area enclosed by $y=x^2-6x$ and the x-axis.`, recap: "Below the axis.", ans: "36" },
  { level: 2, q: S`Evaluate $\int_{-2}^{1}(x^2+2x)\,dx$.`, recap: "Brackets with negatives.", ans: "0" },
  { level: 2, q: S`Find the area under $y=e^{-x}$ from $x=0$ to $x=2$.`, recap: "Exponential.", ans: S`$1-e^{-2}\approx0.865$`,
    fig: svgT(areaDoc({ view: { xmin: -0.5, xmax: 3, ymin: -0.2, ymax: 1.3 }, step: { x: 0.5, y: 0.25 }, curves: [{ f: (x) => Math.exp(-x) }] }), 5) },
  { level: 3, space: 4, q: S`Find the total area between $y=x^3-9x$ and the x-axis from $x=0$ to $x=4$.`, recap: "Split at 3.", ans: S`$\frac{81}4+\frac{49}4=\frac{65}2$` },
  { level: 3, space: 4, q: S`Find $k>1$ such that $\int_1^k\frac{1}{x}\,dx=3$.`, recap: "ln k = 3.", ans: S`$k=e^3$` },
  { level: 3, space: 4, q: S`Given $\int_1^3(ax+2)\,dx=12$, find $a$.`, recap: "Unknown constant.", ans: S`$4a+4=12\Rightarrow a=2$` },
  { level: 3, space: 4, q: S`Find $p>0$ such that the area enclosed by $y=px-x^2$ and the x-axis is 36.`, recap: S`Area $\frac{p^3}{6}$.`, ans: S`$p=6$` },
  { level: 3, space: 4, q: S`Explain why $\int_{-a}^{a}x^3\,dx=0$ for every $a$.`, recap: "Odd function.", ans: "equal areas above and below cancel" },
];

export const WS = {
  code: "10.4",
  title: "The Fundamental Theorem of Calculus",
  bigideas: S`$\int_a^b f(x)\,dx=\big[F(x)\big]_a^b=F(b)-F(a)$ for any antiderivative $F$; the constant cancels. For $f\ge0$ this is the area under the curve. Area below the axis is $\left|\int\right|$. If the curve crosses the axis, split at the roots and add the sizes. Unknown limits or constants: evaluate in terms of the unknown and solve.`,
  goals: ["Evaluate definite integrals exactly.", "Find areas under curves.", "Handle regions below the axis.", "Solve for unknowns."],
  curriculum: "SL 5.11",
  vocab: [["FTC", S`$F(b)-F(a)$`], ["Enclosed area", "between curve and axis"], ["Split point", "a root inside the interval"]],
  hook: "In 10.3 we needed many strips to estimate one area. Is there a shortcut that gives the exact value in one step?",
  concepts: [
    ["1. FTC", S`${svgT(areaDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 9 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 8 * x - 2 * x * x }] }, [{ f: (x) => 8 * x - 2 * x * x, a: 0, b: 4 }]), 4.8)} One subtraction.`],
    ["2. Below the axis", "Take the absolute value."],
    ["3. Unknowns", "Set up an equation."],
  ],
  tips: ["Upper minus lower limit.", "Bracket negative limits.", "Split at roots for area.", "ln 1 = 0, e⁰ = 1.", "No + C."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
