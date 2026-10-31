// Worksheet 1.1 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
import { numberLine } from "./tikz.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`List every set that $23$, $-23$ and $0$ belong to.`, recap: String.raw`Sets for $23$, $-23$, $0$.`, space: 2.6,
    ans: String.raw`$23$: $\mathbb{N},\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$; $-23$: $\mathbb{Z},\mathbb{Q},\mathbb{R}$; $0$: $\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$.` },
  { level: 1, q: String.raw`Write $0.875$ as a fraction in lowest terms.`, recap: String.raw`$0.875$ as a fraction.`, space: 2.4, ans: String.raw`$\frac{875}{1000}=\frac78$.` },
  { level: 1, q: String.raw`Which of these are irrational? \ $\sqrt{50}$, \ $\sqrt{49}$, \ $1.010010001\ldots$ (one more zero each time), \ $0.\overline{5}$`, recap: String.raw`Irrational: $\sqrt{50},\sqrt{49},1.0100\ldots,0.\overline5$?`, space: 2.6,
    ans: String.raw`$\sqrt{50}$ and $1.010010001\ldots$ ($\sqrt{49}=7$, $0.\overline5=\frac59$).` },
  { level: 2, q: String.raw`Simplify, then classify into the smallest set: (a) $\frac{14}{2}$ \ (b) $-\frac{24}{6}$ \ (c) $\sqrt{121}$ \ (d) $-\sqrt{\frac94}$`, recap: String.raw`Classify $\frac{14}{2},-\frac{24}{6},\sqrt{121},-\sqrt{\frac94}$.`, space: 3,
    ans: String.raw`(a) $7$, natural (b) $-4$, integer (c) $11$, natural (d) $-\frac32$, rational.` },
  { level: 2, q: String.raw`Write $0.\overline{54}$ as a fraction in lowest terms. Show the algebra.`, recap: String.raw`$0.\overline{54}$ as a fraction.`, space: 3, ans: String.raw`$99x=54$, $x=\frac{6}{11}$.` },
  { level: 2, q: String.raw`Write $2.\overline{18}$ as an improper fraction in lowest terms.`, recap: String.raw`$2.\overline{18}$ as a fraction.`, space: 3, ans: String.raw`$99x=216$, $x=\dfrac{24}{11}$.` },
  { level: 2, q: String.raw`Between which two consecutive integers does $\sqrt{90}$ lie? Estimate it to one decimal place and mark it on the number line.`, recap: String.raw`Locate and estimate $\sqrt{90}$.`,
    fig: numberLine({ min: 8, max: 11, step: 0.5, labelEvery: 2, unit: 1.6 }), space: 2.4, ans: String.raw`$9<\sqrt{90}<10$; $\sqrt{90}\approx9.5$.` },
  { level: 2, q: String.raw`Order from least to greatest and show them on the number line: \ $\sqrt{15}$, \ $3.9$, \ $4$, \ $\frac{15}{4}$.`, recap: String.raw`Order $\sqrt{15},3.9,4,\frac{15}{4}$.`,
    fig: numberLine({ min: 3.5, max: 4.25, step: 0.05, labelEvery: 5, unit: 0.9 }), space: 2.4, ans: String.raw`$\frac{15}{4}<\sqrt{15}<3.9<4$.` },
  { level: 3, space: 5,
    q: String.raw`To write $0.8\overline{3}=0.8333\ldots$ as a fraction, Rhys thought: “$0.8\overline{3}$ is $\frac{8}{10}$ plus one third of a tenth.”
(a) Use Rhys's idea to show that $0.8\overline{3}=\frac56$.
(b) Use the same idea to write $0.4\overline{3}$ and $0.2\overline{5}$ as fractions in lowest terms.
(c) Check one of your answers in (b) with the algebra method ($10x$, $100x$).`,
    recap: String.raw`Rhys's method: $0.8\overline3$, $0.4\overline3$, $0.2\overline5$ as fractions.`,
    ans: String.raw`(a) $\frac{8}{10}+\frac{1}{30}=\frac{25}{30}=\frac56$ (b) $\frac{13}{30}$; $\frac{23}{90}$ (c) e.g.\ $100x-10x=39$ gives $\frac{39}{90}=\frac{13}{30}$.` },
  { level: 3, space: 5.5,
    q: String.raw`True or false? Prove each true statement in words, and give a counterexample for each false one.
(a) The product of two irrational numbers is always irrational.
(b) The sum of a rational number and an irrational number is always irrational.
(c) The quotient of two non-zero rational numbers is always rational.
(d) The sum of two irrational numbers is always irrational.`,
    ans: String.raw`(a) false: $\sqrt2\times\sqrt8=4$ (b) true: if $r+x=q$ were rational, then $x=q-r$ would be rational (c) true: $\frac ab\div\frac cd=\frac{ad}{bc}$ is a quotient of integers (d) false: $\sqrt2+(-\sqrt2)=0$.` },
  { level: 3, space: 4.5,
    q: String.raw`Let $a$ and $b$ be positive numbers with $a<b$.
(a) Compare $\frac1a$ and $\frac1b$ for $a=2,\ b=5$ and for $a=\frac14,\ b=\frac12$.
(b) Make a general statement about $\frac1a$ and $\frac1b$, and explain why it is true.
(c) Does the statement still hold if $a$ and $b$ are both negative? Test $a=-5$, $b=-2$.`,
    recap: String.raw`Compare $\frac1a$ and $\frac1b$ when $a<b$.`,
    ans: String.raw`(a) $\frac12>\frac15$; $4>2$ (b) $\frac1a>\frac1b$: dividing $1$ into more (larger) parts gives smaller parts (c) yes: $-\frac15>-\frac12$.` },
  { level: 3, space: 5,
    q: String.raw`(a) Draw a diagram of nested regions for $\mathbb{N}$, $\mathbb{W}$, $\mathbb{Z}$ and $\mathbb{Q}$, inside $\mathbb{R}$, with a separate region for the irrationals.
(b) Place each number in the correct region: $-7,\ 0,\ 13,\ -\frac25,\ 0.\overline6,\ \sqrt{36},\ -\sqrt4,\ 4.25,\ \sqrt{8},\ \pi$.
(c) Which region contains exactly one of these numbers? Why is that region so “small”?`,
    recap: "Nested diagram; place ten numbers.",
    ans: String.raw`$\mathbb{N}$: $13,\sqrt{36}$; $\mathbb{W}$ only: $0$; $\mathbb{Z}$ only: $-7,-\sqrt4$; $\mathbb{Q}$ only: $-\frac25,0.\overline6,4.25$; irrational: $\sqrt8,\pi$. (c) whole-not-natural holds only $0$.` },
  { level: 3, space: 5.5,
    q: String.raw`(a) Write $3.1\overline{45}$ as a fraction in lowest terms.
(b) Show that $19\div6=3.1\overline{6}$.
(c) Order from least to greatest: $\sqrt{10}$, $\ 3.1\overline{6}$, $\ \pi$, $\ 3.1\overline{45}$.
(d) Which two of the numbers in (c) are irrational? Explain how you can tell without a calculator.`,
    ans: String.raw`(a) $990x=3114$, $x=\dfrac{173}{55}$ (b) long division: remainder $4$ repeats, giving $3.1666\ldots$ (c) $\pi<3.1\overline{45}<\sqrt{10}<3.1\overline6$ (d) $\sqrt{10}$ and $\pi$: $10$ is not a perfect square, and $\pi$ is a known irrational. The other two repeat.` },
];
