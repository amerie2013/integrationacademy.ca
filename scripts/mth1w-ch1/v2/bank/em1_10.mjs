// 1.10 Density, Infinity & Limit — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, graph } from "./svg.mjs";

export const E = [
  mc(String.raw`Which number is between $0.3$ and $0.4$?`, "$0.35$", ["$0.29$", "$0.41$", "$0.5$"], String.raw`$0.30<0.35<0.40$.`),
  mc(String.raw`Which number is between $\frac12$ and $1$?`, String.raw`$\frac34$`, [String.raw`$\frac14$`, String.raw`$\frac13$`, String.raw`$\frac54$`], String.raw`$0.5<0.75<1$.`),
  num(String.raw`Find the midpoint of $2$ and $3$.`, 2.5, String.raw`$\frac{2+3}{2}$.`, undefined, 0.000001),
  num(String.raw`Find the midpoint of $-4$ and $6$.`, 1, String.raw`$\frac{-4+6}{2}=1$.`),
  tf("There is an integer between 5 and 6.", false, "The integers have gaps: nothing between 5 and 6."),
  tf("There is a fraction between any two different fractions.", true, "The rational numbers are dense."),
  num(String.raw`How many integers are strictly between $-2$ and $3$?`, 4, String.raw`$-1,0,1,2$.`),
  mc(String.raw`What value do $1,\ \frac12,\ \frac13,\ \frac14,\dots$ get closer to?`, "$0$", ["$1$", String.raw`$\frac12$`, String.raw`They get bigger`], "The terms shrink toward 0."),
  fill(String.raw`Write the next term: $\frac12,\ \frac14,\ \frac18,\ \_\_\_$`, ["1/16"], "Each term is half of the one before."),
  tf("There is a largest natural number.", false, "Add 1 to any natural number to get a bigger one."),
  mc(String.raw`$0.999\ldots$ (nines forever) is equal to`, "$1$", ["$0.9$", "$0.99$", "a number just below 1"], String.raw`$0.\overline9=1$.`),
  num(String.raw`What value do $0.9,\ 0.99,\ 0.999,\dots$ approach?`, 1, "The gap to 1 shrinks toward 0."),
  mc("Which point is halfway between 0 and 1?", "B", ["A", "C", "D"], String.raw`Halfway is $0.5$.`, numberLine({ min: 0, max: 1, step: 0.1, labelEvery: 5, letters: [{ at: 0.25, label: "A" }, { at: 0.5, label: "B" }, { at: 0.7, label: "C" }, { at: 0.9, label: "D" }] })),
  fill(String.raw`Find the midpoint of $\frac14$ and $\frac34$: ___`, ["1/2", "0.5"], String.raw`$\frac{1}{2}$.`),
  num(String.raw`Find a number halfway between $1.2$ and $1.3$.`, 1.25, "Average them.", undefined, 0.000001),
  ms(String.raw`Which numbers are between $\frac13$ and $\frac23$? Select all.`, [String.raw`$\frac12$`, "$0.4$", String.raw`$\frac34$`, "$0.6$", String.raw`$\frac14$`], [0, 1, 3], String.raw`$\frac13\approx0.33$ and $\frac23\approx0.67$.`),
  tf(String.raw`The terms of $\frac{1}{n}$ eventually equal $0$.`, false, "They get as close as we like to 0 but stay positive."),
  mc("How many rational numbers are there between 0 and 1?", "infinitely many", ["none", "9", "100"], "Between any two there is always another."),
  num(String.raw`What value do $2.1,\ 2.01,\ 2.001,\dots$ approach?`, 2, "The extra part shrinks toward 0."),
  mc("The graph shows a sequence. What value do the terms approach?", "$3$", ["$0$", "$1$", "$6$"], "The points level off at 3.", graph({ series: [{ pts: [1, 2, 3, 4, 5, 6].map((n) => [n, +(3 + 3 / (n + 1)).toFixed(3)]), join: false }], xmin: 0, xmax: 7, ymin: 0, ymax: 5, xstep: 1, ystep: 1, xlabel: "n", ylabel: "term" })),
];

export const M = [
  fill(String.raw`Find the midpoint of $\frac25$ and $\frac12$ as a fraction: ___`, ["9/20"], String.raw`$\frac{4}{10}+\frac{5}{10}=\frac{9}{10}$; half is $\frac{9}{20}$.`),
  num(String.raw`Find the midpoint of $-1.6$ and $-1.5$.`, -1.55, "Average them.", undefined, 0.000001),
  mc(String.raw`Which number is between $\frac58$ and $\frac23$?`, String.raw`$\frac{31}{48}$`, [String.raw`$\frac12$`, String.raw`$\frac34$`, String.raw`$\frac{29}{48}$`], String.raw`$\frac58=\frac{30}{48}$ and $\frac23=\frac{32}{48}$.`),
  num(String.raw`What is the limit of $\frac{n+2}{n}$ as $n$ grows?`, 1, String.raw`$1+\frac2n\to1$.`),
  num(String.raw`What is the limit of $5+\left(\frac12\right)^n$?`, 5, String.raw`$\left(\frac12\right)^n\to0$.`),
  tf("The integers are dense.", false, "There is no integer between 3 and 4."),
  fill(String.raw`Write the next term: $\frac23,\ \frac34,\ \frac45,\ \_\_\_$`, ["5/6"], "Numerator and denominator each go up by 1."),
  mc(String.raw`What value does $\frac23,\frac34,\frac45,\dots$ approach?`, "$1$", ["$0$", String.raw`$\frac12$`, "it keeps growing"], String.raw`The gap $\frac1{n+1}$ shrinks to 0.`),
  num(String.raw`The sum $\frac12+\frac14+\frac18+\frac1{16}$ equals what decimal?`, 0.9375, String.raw`$\frac{15}{16}=0.9375$.`, undefined, 0.000001),
  ms("Which statements are true? Select all.", ["There is no smallest positive fraction.", String.raw`$0.\overline{9}=1$`, "There is a largest integer.", "Between 0.1 and 0.2 there are infinitely many numbers."], [0, 1, 3], "The integers go on forever."),
  num(String.raw`You walk half of the remaining distance to a wall $16$ m away, again and again. How far from the wall are you after $4$ steps, in metres?`, 1, String.raw`$16\times\left(\frac12\right)^4=1$.`),
  fill(String.raw`Find a fraction exactly halfway between $\frac13$ and $\frac14$: ___`, ["7/24"], String.raw`$\frac{8}{24}$ and $\frac{6}{24}$; halfway is $\frac{7}{24}$.`),
  mc("Which point could be 0.255?", "C", ["A", "B", "D"], String.raw`Halfway between $0.25$ and $0.26$.`, numberLine({ min: 0.24, max: 0.27, step: 0.005, labelEvery: 2, letters: [{ at: 0.242, label: "A" }, { at: 0.25, label: "B" }, { at: 0.255, label: "C" }, { at: 0.265, label: "D" }] })),
  num(String.raw`What number is $3.\overline{9}=3.999\ldots$ equal to?`, 4, String.raw`$3+0.\overline9=4$.`),
  tf(String.raw`The sequence $1,\ -\frac12,\ \frac14,\ -\frac18,\dots$ approaches $0$.`, true, "The terms alternate in sign but shrink toward 0."),
  num(String.raw`What is the smallest whole number $n$ with $\frac1n<0.05$?`, 21, String.raw`$\frac1{20}=0.05$, so $n=21$.`),
  mc("The graph shows a decreasing sequence. What is its limit?", "$2$", ["$0$", "$4$", "$1$"], "The terms level off at 2.", graph({ series: [{ pts: [1, 2, 3, 4, 5, 6, 7].map((n) => [n, +(2 + 4 / n).toFixed(3)]), join: false }], xmin: 0, xmax: 8, ymin: 0, ymax: 7, xstep: 1, ystep: 1, xlabel: "n", ylabel: "term" })),
  num(String.raw`How many fractions with denominator $10$ lie strictly between $\frac15$ and $\frac45$?`, 5, String.raw`$\frac{3}{10},\dots,\frac{7}{10}$.`),
  fill(String.raw`Write $0.\overline{3}$ as a fraction: ___`, ["1/3"], String.raw`It is the limit of $0.3,0.33,0.333,\dots$, which is $\frac13$.`),
  num(String.raw`A ball bounces to $\frac12$ of its previous height. Dropped from $8$ m, how high is the third bounce, in metres?`, 1, String.raw`$8\times\left(\frac12\right)^3=1$.`),
];
