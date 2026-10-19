// MCV4U Worksheet 1.3 — Limits (teacher edition)
import { F, gridT, pt, ho } from "./figT.mjs";

const EXAMPLES = [
  { title: "Factor and cancel", q: String.raw`Evaluate $\lim_{x\to5}\frac{x^2-25}{x-5}$.`,
    steps: [String.raw`$\frac{(x-5)(x+5)}{x-5}=x+5$ for $x\ne5$.`], ans: "10" },
  { title: "One-sided limits from a graph", q: String.raw`$f(x)=3-x$ for $x\lt1$ and $f(x)=x^2$ for $x\ge1$. Find both one-sided limits at 1.`,
    fig: F({ view: { xmin: -1, xmax: 3, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 3 - x, a: -1, b: 0.98 }, { f: (x) => x * x, a: 1, b: 2.2 }], points: [ho(1, 2), pt(1, 1)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`Left: $3-1=2$. Right: $1^2=1$.`], ans: "2 and 1: the limit does not exist" },
  { title: "Signed infinite limits", q: String.raw`Describe $\frac1{x-2}$ as $x\to2^-$ and $x\to2^+$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 1 / (x - 2), a: -1, b: 1.84 }, { f: (x) => 1 / (x - 2), a: 2.16, b: 5 }], step: { x: 1, y: 1 } }),
    steps: [String.raw`Left: tiny negative denominators → $-\infty$. Right: $+\infty$.`], ans: String.raw`$-\infty$ and $+\infty$: vertical asymptote $x=2$` },
  { title: "A limit at infinity", q: String.raw`Evaluate $\lim_{x\to\infty}\frac{3x-4}{x+2}$.`,
    fig: F({ view: { xmin: -8, xmax: 20, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (3 * x - 4) / (x + 2), a: -8, b: -2.9 }, { f: (x) => (3 * x - 4) / (x + 2), a: -1.2, b: 20 }, { f: () => 3, color: "red" }], step: { x: 2, y: 2 } }),
    steps: [String.raw`Divide by $x$: $\frac{3-\frac4x}{1+\frac2x}\to3$.`], ans: "3" },
  { title: "Toward negative infinity", q: String.raw`Evaluate $\lim_{x\to-\infty}\frac2{x^2+1}$.`,
    steps: [String.raw`The denominator grows without bound.`], ans: "0" },
  { title: "A limit from a table", q: String.raw`Estimate $\lim_{x\to0}\frac{2^x-1}{x}$.`,
    steps: [String.raw`$x=0.01$: $0.6956$; $x=-0.01$: $0.6908$; $x=\pm0.001$: $0.6934$, $0.6929$.`], ans: "≈ 0.693" },
  { title: "Factor a trinomial", q: String.raw`Evaluate $\lim_{x\to1}\frac{x^2+x-2}{x-1}$.`,
    steps: [String.raw`$\frac{(x+2)(x-1)}{x-1}=x+2\to3$.`], ans: "3" },
  { title: "Rationalize", q: String.raw`Evaluate $\lim_{x\to0}\frac{\sqrt{1+x}-1}{x}$.`,
    steps: [String.raw`Multiply by $\frac{\sqrt{1+x}+1}{\sqrt{1+x}+1}$: $\frac1{\sqrt{1+x}+1}\to\frac12$.`], ans: String.raw`$\frac12$` },
  { title: "Limits of sequences", q: String.raw`Find the limits of $t_n=\frac{n}{n+1}$ and of $u_n=\left(1+\frac2n\right)^n$.`,
    steps: [String.raw`$\frac{n}{n+1}=\frac1{1+\frac1n}\to1$.`, String.raw`$u_{10}\approx6.19$, $u_{1000}\approx7.374$, $u_{10^5}\approx7.389$.`], ans: String.raw`1; $e^2\approx7.389$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate $\lim_{x\to3}(2x^2-1)$.`, recap: "Substitute.", ans: "17" },
  { level: 1, q: String.raw`Evaluate $\lim_{x\to-2}\frac{x^2-4}{x+2}$.`, recap: "Factor.", ans: "−4" },
  { level: 1, q: String.raw`Use the graph to state $\lim_{x\to2^-}f(x)$, $\lim_{x\to2^+}f(x)$, and whether $\lim_{x\to2}f(x)$ exists.`, recap: "Read a graph.", ans: "3, 1; no",
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 0.5 * x + 2, a: -1, b: 1.97 }, { f: (x) => x - 1, a: 2, b: 5 }], points: [ho(2, 3), pt(2, 1, false)], step: { x: 1, y: 1 } }) },
  { level: 2, q: String.raw`Evaluate $\lim_{x\to4}\frac{x^2-3x-4}{x-4}$.`, recap: "Factor.", ans: "5" },
  { level: 2, q: String.raw`Evaluate $\lim_{x\to\infty}\frac{5x+2}{2x-1}$.`, recap: "At infinity.", ans: "2.5" },
  { level: 2, q: String.raw`Describe $\lim_{x\to0^+}\frac1x$ and $\lim_{x\to0^-}\frac1x$.`, recap: "One-sided infinite.", ans: String.raw`$+\infty$; $-\infty$` },
  { level: 2, q: String.raw`Evaluate $\lim_{x\to1}\frac{x^3-1}{x^2-1}$.`, recap: "Factor both.", ans: String.raw`$\frac{x^2+x+1}{x+1}\to\frac32$` },
  { level: 2, q: String.raw`Use a table to estimate $\lim_{x\to0}\frac{3^x-1}{x}$.`, recap: "Numerical limit.", ans: "≈ 1.099" },
  { level: 3, space: 5, q: String.raw`Evaluate $\lim_{x\to0}\frac{\sqrt{x+9}-3}{x}$.`, recap: "Rationalize.", ans: String.raw`$\frac16$` },
  { level: 3, space: 5, q: String.raw`Evaluate $\lim_{x\to2}\frac{\frac1x-\frac12}{x-2}$.`, recap: "Complex fraction.", ans: String.raw`$\frac{2-x}{2x(x-2)}=-\frac1{2x}\to-\frac14$` },
  { level: 3, space: 5, q: String.raw`Start with $t_1=2$ and $t_{n+1}=\frac12\left(t_n+\frac2{t_n}\right)$. Compute four terms and estimate the limit. What number is it?`, recap: "Sequence limit.", ans: String.raw`2, 1.5, 1.41667, 1.41422 → $\sqrt2$` },
  { level: 3, space: 5, q: String.raw`Find $k$ so that $\lim_{x\to2}\frac{x^2+kx-10}{x-2}$ exists, then evaluate the limit.`, recap: "Make 0/0 happen.", ans: String.raw`$4+2k-10=0$: $k=3$; $(x+5)\to7$` },
  { level: 3, space: 5, q: String.raw`Sketch a function with $\lim_{x\to1^-}f(x)=2$, $\lim_{x\to1^+}f(x)=-1$, $f(1)=0$ and $\lim_{x\to\infty}f(x)=3$.`, recap: "Build from limits.", ans: "a jump at x = 1 with a filled point at (1, 0), levelling off at y = 3", fig: gridT({ xmin: -3, xmax: 8, ymin: -3, ymax: 5 }, { x: 1, y: 1 }) },
];

export const WS = {
  code: "1.3",
  title: "Limits",
  bigideas: String.raw`$\lim_{x\to a}f(x)=L$ means $f(x)$ approaches $L$ as $x$ approaches $a$ from both sides; the value $f(a)$ does not matter. The limit exists only if the left and right limits agree. A $\frac00$ form needs factoring or rationalizing. Infinite limits describe vertical asymptotes; limits at infinity describe horizontal asymptotes. Sequences can also have limits, such as $\left(1+\frac1n\right)^n\to e$.`,
  goals: ["Estimate limits from tables and graphs.", "Find one-sided limits.", "Evaluate 0/0 limits algebraically.", "Find limits at infinity and of sequences."],
  curriculum: "A1.4",
  vocab: [["One-sided limit", "$x\\to a^-$ or $x\\to a^+$"], ["Indeterminate form", "$\\frac00$: needs simplifying"], ["Limit at infinity", "long-run value"]],
  hook: String.raw`What happens to $\frac{x^2-1}{x-1}$ at $x=1$? What happens near $x=1$?`,
  concepts: [
    ["1. Near, not at", String.raw`A hole doesn't stop the limit.
${F({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 2, a: -1, b: 0.96 }, { f: (x) => x + 2, a: 1.04, b: 4 }], points: [ho(1, 3)], step: { x: 1, y: 1 } })}`],
    ["2. Both sides", String.raw`Exists ⇔ left = right.`],
    ["3. Infinity", String.raw`$\pm\infty$ describes growth without bound — the limit does not exist.`],
  ],
  tips: ["0/0 means simplify.", "Check both sides.", "∞ is not a number.", "Divide by the highest power at ∞.", "Tables need values from both sides."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
