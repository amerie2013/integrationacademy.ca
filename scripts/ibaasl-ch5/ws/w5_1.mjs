// IB AA SL Worksheet 5.1 — Limits and Convergence (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const O = (x, y) => ({ x, y, color: "violet", open: true });

const EXAMPLES = [
  { title: "Direct substitution", q: S`Find $\lim_{x\to-1}(x^3+4x)$.`,
    steps: [S`The function is a polynomial: substitute.`], ans: S`$-5$` },
  { title: "A table", q: S`Estimate $\lim_{x\to0}\frac{2^x-1}{x}$ using $x=\pm0.01$ and $\pm0.001$.`,
    steps: [S`$x=-0.01$: $0.6907$; $x=0.01$: $0.6956$; $x=\pm0.001$: $0.6929$, $0.6934$.`], ans: S`about $0.693$` },
  { title: "Factorise and cancel", q: S`Find $\lim_{x\to3}\frac{x^2-x-6}{x-3}$.`,
    steps: [S`$\frac{(x-3)(x+2)}{x-3}=x+2$.`], ans: "5" },
  { title: "A hole in a graph", q: S`Sketch $y=\frac{x^2-1}{x+1}$ and state $\lim_{x\to-1}y$.`,
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -4, ymax: 3 }, curves: [{ f: (x) => x - 1 }], points: [O(-1, -2)] }),
    steps: [S`$y=x-1$ for $x\ne-1$: a line with a hole at $(-1,-2)$.`], ans: S`$-2$` },
  { title: "One-sided limits", q: S`$f(x)=x+1$ for $x<2$ and $f(x)=5-x$ for $x\ge2$. Does $\lim_{x\to2}f(x)$ exist?`,
    steps: [S`Left: $3$; right: $3$.`], ans: "yes, 3" },
  { title: "Limit at infinity", q: S`Find $\lim_{x\to\infty}\frac{4x-1}{x+5}$.`,
    steps: [S`Divide by $x$: $\frac{4-\frac1x}{1+\frac5x}\to4$.`], ans: "4" },
  { title: "Convergent sequence", q: S`Does $u_n=\frac{3n-2}{n}$ converge? If so, to what?`,
    steps: [S`$u_n=3-\frac2n\to3$.`], ans: "converges to 3" },
  { title: "Sum to infinity", q: S`Find the limit of the partial sums of $27+9+3+\dots$.`,
    steps: [S`$r=\frac13$: $\frac{27}{1-\frac13}$.`], ans: "40.5" },
  { title: "A difference quotient", q: S`For $f(x)=x^2+1$, simplify $\frac{f(2+h)-f(2)}{h}$ and find its limit.`,
    fig: F({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 12 }, curves: [{ f: (x) => x * x + 1 }, { f: (x) => 4 * (x - 2) + 5, color: "red" }], points: [pt(2, 5)] }),
    steps: [S`$\frac{4h+h^2}{h}=4+h\to4$.`], ans: S`$4+h$; 4` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $\lim_{x\to2}(5x-3)$.`, recap: "Substitution.", ans: "7" },
  { level: 1, q: S`Find $\lim_{x\to\infty}\frac{3}{x^2}$.`, recap: "At infinity.", ans: "0" },
  { level: 1, q: S`Find $\lim_{x\to6}\frac{x^2-36}{x-6}$.`, recap: "Cancel.", ans: "12" },
  { level: 2, q: S`Find $\lim_{x\to-4}\frac{x^2+3x-4}{x+4}$.`, recap: "Cancel.", ans: S`$-5$` },
  { level: 2, q: S`Find $\lim_{x\to\infty}\frac{2x+9}{5x-1}$.`, recap: "At infinity.", ans: "0.4" },
  { level: 2, q: S`Does $u_n=(-0.5)^n$ converge? Explain.`, recap: "Geometric sequence.", ans: S`yes, to 0 ($|r|<1$)` },
  { level: 2, q: "From the graph, state the limit as x → 1 and the value f(1).", recap: "From a graph.", ans: S`limit $2$; $f(1)=-1$`,
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -2, b: 0.97 }, { f: (x) => x + 1, a: 1.03, b: 4 }], points: [O(1, 2), pt(1, -1, null, "red")] }) },
  { level: 2, q: S`For $f(x)=3x^2$, simplify $\frac{f(1+h)-f(1)}{h}$.`, recap: "Difference quotient.", ans: S`$6+3h$` },
  { level: 3, space: 4, q: S`Find $k$ so that $\lim_{x\to3}\frac{x^2-kx+3}{x-3}$ exists, and find the limit.`, recap: "Parameter.", ans: S`$k=4$; limit 2` },
  { level: 3, space: 4, q: S`Find $\lim_{x\to2}\frac{x^3-2x^2}{x-2}$.`, recap: "Common factor.", ans: "4" },
  { level: 3, space: 4, q: S`For $f(x)=x^2-3x$, find $\lim_{h\to0}\frac{f(4+h)-f(4)}{h}$.`, recap: "Tangent gradient.", ans: "5" },
  { level: 3, space: 4, q: S`A sequence has $u_n=\frac{n^2+1}{2n^2}$. Find its limit and the first $n$ with $|u_n-\text{limit}|<0.01$.`, recap: "Convergence.", ans: S`$\frac12$; $n=8$` },
  { level: 3, space: 4, q: S`Explain why $\lim_{x\to0}\frac{|x|}{x}$ does not exist.`, recap: "One-sided limits.", ans: S`left limit $-1$, right limit $1$` },
];

export const WS = {
  code: "5.1",
  title: "Limits and Convergence",
  bigideas: S`$\lim_{x\to a}f(x)=L$ means $f(x)$ approaches $L$ as $x$ approaches $a$ from both sides; $f(a)$ itself may not exist. If substitution gives $\frac00$, simplify first. As $x\to\infty$, divide by the highest power. A sequence converges if its terms approach a number. Secant gradients approach the tangent gradient: the idea behind the derivative.`,
  goals: ["Estimate limits from tables and graphs.", "Find limits algebraically.", "Find limits at infinity.", "Decide whether sequences converge."],
  curriculum: "SL 5.1",
  vocab: [["Limit", S`$\lim_{x\to a}f(x)$`], ["Indeterminate", S`$\frac00$`], ["Convergent", "terms approach a number"]],
  hook: "Walk halfway to the wall, then half the remaining distance, again and again. Do you ever reach the wall? What distance do the steps add up to?",
  concepts: [
    ["1. Approaching a value", S`${F({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 9 }, curves: [{ f: (x) => x + 3 }], points: [O(3, 6)] }, 5)} The hole does not change the limit.`],
    ["2. Algebra", S`Substitute; if $\frac00$, factorise and cancel; at infinity, divide by the highest power.`],
    ["3. Sequences", S`$u_n\to L$: e.g. $1+\frac1n\to1$; $r^n\to0$ when $|r|<1$.`],
  ],
  tips: ["Check both sides.", "0/0 means simplify.", "Divide by the highest power at infinity.", "f(a) may differ from the limit.", "Cancel before letting h → 0."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
