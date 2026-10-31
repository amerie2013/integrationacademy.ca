// 1.10 Density, Infinity & Limit — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph, numberLine } from "./svg.mjs";

export const TOPIC = "1.10 Density, Infinity & Limit";
export const Q = [
  mc(String.raw`Which number lies strictly between $\frac79$ and $\frac45$?`, String.raw`$\frac{71}{90}$`, [String.raw`$\frac34$`, String.raw`$\frac56$`, String.raw`$\frac{8}{10}$`], String.raw`$\frac79=\frac{70}{90}$ and $\frac45=\frac{72}{90}$, so $\frac{71}{90}$ is between. $\frac8{10}=\frac45$ is not strictly between.`),
  num(String.raw`Start at $0$ and move halfway to $1$ again and again: $\frac12,\frac34,\frac78,\dots$ What is the smallest number of moves that puts you within $0.002$ of $1$?`, 9, String.raw`After $n$ moves the gap is $\frac{1}{2^n}$. We need $2^n>500$: $2^8=256$ and $2^9=512$, so $n=9$.`),
  fill(String.raw`Find the midpoint of $\frac16$ and $\frac14$ as a fraction: ___`, ["5/24"], String.raw`$\frac{2}{12}+\frac{3}{12}=\frac{5}{12}$; half is $\frac{5}{24}$.`),
  ms(String.raw`Which sets are dense (always another member between any two members)? Select all.`, ["the rational numbers", "the integers", "the real numbers", "the whole numbers", "the irrational numbers"], [0, 2, 4], String.raw`Integers and whole numbers have gaps (nothing between $3$ and $4$). Rationals, reals and irrationals are all dense.`),
  num(String.raw`What value do the terms of $\dfrac{2n+1}{n}$ approach as $n$ gets very large?`, 2, String.raw`$\frac{2n+1}{n}=2+\frac1n$, and $\frac1n\to0$.`),
  num(String.raw`The graph shows the first terms of the sequence $a_n=4-\frac{2}{n}$. What is its limit?`, 4, String.raw`$\frac2n\to0$, so $a_n\to4$ (from below).`,
    graph({ series: [{ pts: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => [n, +(4 - 2 / n).toFixed(3)]), join: false }], xmin: 0, xmax: 9, ymin: 0, ymax: 5, xstep: 1, ystep: 1, xlabel: "n", ylabel: "a_n" })),
  tf(String.raw`There are infinitely many fractions between $0.99$ and $1$.`, true, String.raw`Midpoints can be taken again and again: $0.995$, $0.9975,\dots$`),
  tf(String.raw`$0.\overline{9}<1$`, false, String.raw`$0.\overline{9}=1$ exactly: there is no number between them.`),
  fill(String.raw`The sums $\frac{3}{10}$, $\frac{3}{10}+\frac{3}{100}$, $\frac{3}{10}+\frac{3}{100}+\frac{3}{1000},\dots$ approach which fraction? ___`, ["1/3"], String.raw`They are $0.3$, $0.33$, $0.333,\dots$ which approach $0.\overline3=\frac13$.`),
  num(String.raw`The sum $\frac12+\frac14+\frac18+\cdots$ with $n$ terms equals $1-\frac{1}{2^n}$. What is the smallest $n$ for which the sum is greater than $0.99$?`, 7, String.raw`Need $\frac1{2^n}<0.01$, i.e.\ $2^n>100$: $2^6=64$, $2^7=128$, so $n=7$.`),
  mc(String.raw`What value does $5+\left(-\frac23\right)^n$ approach as $n$ grows?`, "$5$", ["$0$", String.raw`$\frac{13}{3}$`, "It has no limit because the terms alternate."], String.raw`$\left(-\frac23\right)^n$ alternates in sign but shrinks towards $0$, so the terms approach $5$.`),
  num(String.raw`How many fractions with denominator $20$ lie strictly between $\frac14$ and $\frac35$?`, 6, String.raw`$\frac14=\frac{5}{20}$, $\frac35=\frac{12}{20}$: numerators $6,7,8,9,10,11$.`),
  num(String.raw`Evaluate $0.\overline{9}+3\times0.\overline{3}$.`, 2, String.raw`$0.\overline9=1$ and $3\times\frac13=1$. The total is $2$.`),
  mc(String.raw`Which point on the zoomed-in number line could be $0.255$?`, "A", ["B", "C", "D"], String.raw`$0.255$ is halfway between $0.25$ and $0.26$.`,
    numberLine({ min: 0.2, max: 0.3, step: 0.01, labelEvery: 5, letters: [{ at: 0.255, label: "A" }, { at: 0.205, label: "B" }, { at: 0.235, label: "C" }, { at: 0.275, label: "D" }] })),
  num(String.raw`A ball is dropped from $10$ m, and each bounce reaches half the previous height. In metres, what value does the total distance travelled approach?`, 30, String.raw`Bounce heights $5+2.5+\cdots$ approach $10$. Up and down gives $20$ m. Adding the first drop gives $30$ m.`),
  tf(String.raw`Between any two different irrational numbers there is a rational number.`, true, String.raw`The rationals are dense in the reals: e.g.\ between $\sqrt2\approx1.414$ and $\sqrt3\approx1.732$ lies $1.5$.`),
  ms(String.raw`Which sequences approach $0$? Select all.`, [String.raw`$\frac1n$`, String.raw`$\left(-\frac12\right)^n$`, String.raw`$\frac{n}{n+1}$`, String.raw`$\frac{1}{n^2}$`, "$2^n$"], [0, 1, 3], String.raw`$\frac{n}{n+1}\to1$ and $2^n$ grows without bound.`),
  num(String.raw`What is the smallest positive integer $n$ for which $\frac1n<0.003$?`, 334, String.raw`$n>\frac{1}{0.003}=333.\overline3$, so $n=334$.`),
  mc(String.raw`Which statement about $\frac13$ and $0.333$ is true?`, String.raw`$0.333$ is less than $\frac13$ by $\frac{1}{3000}$`, [String.raw`$0.333=\frac13$ exactly`, String.raw`$0.333$ is greater than $\frac13$`, String.raw`$0.333$ is less than $\frac13$ by $0.003$`], String.raw`$\frac13-0.333=\frac{1000-999}{3000}=\frac1{3000}$.`),
  num(String.raw`The graph shows $a_n=1+\left(-\frac12\right)^n$. The terms jump above and below a value. What is the limit?`, 1, String.raw`$\left(-\frac12\right)^n\to0$ while alternating in sign, so $a_n\to1$.`,
    graph({ series: [{ pts: [1, 2, 3, 4, 5, 6, 7].map((n) => [n, +(1 + (-0.5) ** n).toFixed(4)]) }], xmin: 0, xmax: 8, ymin: 0, ymax: 1.5, xstep: 1, ystep: 0.25, xlabel: "n", ylabel: "a_n" })),
];
