// MCV4U Worksheet 1.4 — Limits and Continuity (teacher edition)
import { F, gridT, pt, ho } from "./figT.mjs";

const EXAMPLES = [
  { title: "Repair a hole", q: String.raw`Is $f(x)=\frac{x^2-16}{x-4}$ continuous at $x=4$? Fix it if possible.`,
    steps: [String.raw`$f(4)$ is not defined. $\lim_{x\to4}(x+4)=8$.`], ans: "removable; define f(4) = 8" },
  { title: "Check a piecewise function", q: String.raw`Is $f(x)=x^2+1$ for $x\lt2$, $f(x)=3x-1$ for $x\ge2$ continuous at 2?`,
    fig: F({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 12 }, curves: [{ f: (x) => x * x + 1, a: -1, b: 2 }, { f: (x) => 3 * x - 1, a: 2, b: 4, color: "green" }], points: [pt(2, 5)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Left: $5$. Right: $5$. $f(2)=5$.`], ans: "continuous" },
  { title: "A jump", q: String.raw`Classify the discontinuity of $f(x)=x+3$ for $x\lt0$, $f(x)=2-x$ for $x\ge0$.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 3, a: -3, b: -0.03 }, { f: (x) => 2 - x, a: 0, b: 3 }], points: [ho(0, 3), pt(0, 2, false)], step: { x: 1, y: 1 } }),
    steps: [String.raw`Left limit 3, right limit 2.`], ans: "jump discontinuity at 0" },
  { title: "Infinite", q: String.raw`Classify the discontinuity of $\frac1{(x+1)^2}$ at $x=-1$.`,
    steps: [String.raw`Both sides $\to+\infty$.`], ans: "infinite (vertical asymptote x = −1)" },
  { title: "Product law", q: String.raw`Evaluate $\lim_{x\to1}(2x^2+3)(x-4)$.`,
    steps: [String.raw`$\lim(2x^2+3)=5$, $\lim(x-4)=-3$.`], ans: "−15" },
  { title: "Difference of cubes", q: String.raw`Evaluate $\lim_{x\to3}\frac{x^3-27}{x-3}$.`,
    steps: [String.raw`$x^2+3x+9\to27$.`], ans: "27" },
  { title: "Choose k", q: String.raw`Find $k$ so that $f(x)=kx^2+1$ for $x\le2$ and $f(x)=2x+k$ for $x>2$ is continuous.`,
    steps: [String.raw`$4k+1=4+k\Rightarrow3k=3$.`], ans: "k = 1" },
  { title: "Rationalize", q: String.raw`Evaluate $\lim_{x\to0}\frac{\sqrt{x+25}-5}{x}$.`,
    steps: [String.raw`$\frac{1}{\sqrt{x+25}+5}\to\frac1{10}$.`], ans: String.raw`$\frac1{10}$` },
  { title: "Find every discontinuity", q: String.raw`Classify the discontinuities of $f(x)=\frac{x+1}{x^2-x-2}$.`,
    fig: F({ view: { xmin: -4, xmax: 5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 1 / (x - 2), a: -4, b: -1.03 }, { f: (x) => 1 / (x - 2), a: -0.97, b: 1.75 }, { f: (x) => 1 / (x - 2), a: 2.25, b: 5 }], points: [ho(-1, -1 / 3)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$\frac{x+1}{(x-2)(x+1)}=\frac1{x-2}$, $x\ne-1$.`], ans: String.raw`removable at $-1$ (limit $-\frac13$); infinite at 2` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate $\lim_{x\to7}\frac{x^2-49}{x-7}$.`, recap: "Factor.", ans: "14" },
  { level: 1, q: String.raw`What type of discontinuity does the graph show at $x=1$?`, recap: "Classify.", ans: "jump",
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: () => 1, a: -2, b: 0.98 }, { f: () => 3, a: 1, b: 4 }], points: [ho(1, 1), pt(1, 3, false)], step: { x: 1, y: 1 } }) },
  { level: 1, q: String.raw`Is every polynomial function continuous for all real $x$?`, recap: "Polynomials.", ans: "yes" },
  { level: 2, q: String.raw`Find $k$ so that $f(x)=x+k$ for $x\lt3$, $f(x)=x^2-2$ for $x\ge3$ is continuous.`, recap: "Choose k.", ans: "k = 4" },
  { level: 2, q: String.raw`Evaluate $\lim_{x\to-1}\frac{x^3+1}{x+1}$.`, recap: "Sum of cubes.", ans: "3" },
  { level: 2, q: String.raw`Classify the discontinuities of $\frac{x-3}{x^2-9}$.`, recap: "Classify.", ans: "removable at 3 (limit 1/6), infinite at −3" },
  { level: 2, q: String.raw`Evaluate $\lim_{x\to2}\sqrt{x^2+5}$ and name the law used.`, recap: "Root law.", ans: "3" },
  { level: 2, q: String.raw`Define $f(0)$ so that $f(x)=\frac{x^2+5x}{x}$ is continuous at 0.`, recap: "Remove a hole.", ans: "f(0) = 5" },
  { level: 3, space: 5, q: String.raw`Find $a$ and $b$ so that $f(x)=ax-1$ for $x\lt1$, $f(x)=x^2+b$ for $1\le x\le2$, $f(x)=3x$ for $x>2$ is continuous.`, recap: "Two joins.", ans: "b = 2, a = 4" },
  { level: 3, space: 5, q: String.raw`Evaluate $\lim_{x\to0}\frac{(1+x)^3-1}{x}$.`, recap: "Expand.", ans: "3" },
  { level: 3, space: 5, q: String.raw`$f(x)=x^3+x-1$ is continuous with $f(0)=-1$ and $f(1)=1$. Explain why it has a zero between 0 and 1, and narrow it to one decimal place.`, recap: "Continuity and zeros.", ans: "it can't jump over 0; f(0.6) ≈ −0.18, f(0.7) ≈ 0.04: between 0.6 and 0.7" },
  { level: 3, space: 5, q: String.raw`Sketch a function that is continuous everywhere except for a removable discontinuity at $x=-2$ and a jump at $x=1$.`, recap: "Build a graph.", ans: "an open circle at x = −2 and a step at x = 1", fig: gridT({ xmin: -5, xmax: 5, ymin: -4, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: String.raw`Evaluate $\lim_{x\to1}\frac{\sqrt x-1}{x^2-1}$.`, recap: "Rationalize + factor.", ans: String.raw`$\frac{1}{(\sqrt x+1)(x+1)}\to\frac14$` },
];

export const WS = {
  code: "1.4",
  title: "Limits and Continuity",
  bigideas: String.raw`$f$ is continuous at $a$ when $f(a)$ exists, $\lim_{x\to a}f(x)$ exists, and they are equal. A removable discontinuity (hole) has a limit and can be repaired; a jump has unequal one-sided limits; an infinite discontinuity is a vertical asymptote. The limit laws allow substitution wherever a function is continuous; $\frac00$ forms need factoring or rationalizing. Piecewise functions are continuous when their pieces meet at every join.`,
  goals: ["Test the three conditions.", "Classify discontinuities.", "Use limit laws.", "Choose parameters for continuity."],
  curriculum: "A1.4, A1.5",
  vocab: [["Continuous at a", "$f(a)=\\lim_{x\\to a}f(x)$"], ["Removable", "a hole"], ["Jump / infinite", "unequal sides / asymptote"]],
  hook: String.raw`Can you draw $y=\frac{x^2-4}{x-2}$ without lifting your pencil? What single point would you have to add?`,
  concepts: [
    ["1. Three discontinuities", String.raw`Hole, jump, asymptote.
${F({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x + 1, a: -4, b: -1.04 }, { f: (x) => x + 1, a: -0.96, b: 0.98 }, { f: () => 3, a: 1, b: 2.8 }, { f: (x) => 1 / (x - 3), a: 3.17, b: 6 }], points: [ho(-1, 0), ho(1, 2)], step: { x: 1, y: 1 } })}`],
    ["2. Limit laws", String.raw`Sums, products, quotients (denominator limit ≠ 0), powers.`],
    ["3. Joins", String.raw`Left value = right value = $f(a)$.`],
  ],
  tips: ["A limit can exist at a discontinuity.", "Check all three conditions.", "Quotient law needs a nonzero denominator.", "Use the piece containing the endpoint.", "Polynomials: continuous everywhere."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
