// 1.6 Powers: Zero & Negative Exponents — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph } from "./svg.mjs";

export const TOPIC = "1.6 Powers: Zero & Negative Exponents";
export const Q = [
  mc(String.raw`Order from least to greatest: $2^{-3}$, $(-2)^2$, $-2^2$, $\left(\frac12\right)^{-1}$.`, String.raw`$-2^2,\ 2^{-3},\ \left(\frac12\right)^{-1},\ (-2)^2$`, [String.raw`$2^{-3},\ -2^2,\ \left(\frac12\right)^{-1},\ (-2)^2$`, String.raw`$-2^2,\ \left(\frac12\right)^{-1},\ 2^{-3},\ (-2)^2$`, String.raw`$2^{-3},\ \left(\frac12\right)^{-1},\ -2^2,\ (-2)^2$`],
    String.raw`Values: $\frac18$, $4$, $-4$, $2$.`),
  fill(String.raw`Evaluate $\left(\frac23\right)^{-3}$ as a fraction: ___`, ["27/8"], String.raw`Flip and cube: $\left(\frac32\right)^3=\frac{27}{8}$.`),
  num(String.raw`Evaluate $5^0-5^{-1}\times10+(-1)^5$.`, -2, String.raw`$1-\frac15\times10-1=1-2-1=-2$.`),
  ms(String.raw`Which expressions equal $\frac{1}{16}$? Select all.`, [String.raw`$2^{-4}$`, String.raw`$4^{-2}$`, String.raw`$(-4)^{-2}$`, String.raw`$-4^{-2}$`, String.raw`$\left(\frac12\right)^4$`, String.raw`$16^{-1}$`], [0, 1, 2, 4, 5], String.raw`$-4^{-2}=-\frac1{16}$; all the others equal $\frac1{16}$.`),
  num(String.raw`The graph shows $y=a\times2^{n}$. What is $y$ when $n=-3$? Give a decimal.`, 0.375, String.raw`From the graph $a=3$ (value at $n=0$). $y=3\times2^{-3}=\frac38=0.375$.`,
    graph({ series: [{ pts: [[-1, 1.5], [0, 3], [1, 6], [2, 12]] }], xmin: -4, xmax: 3, ymin: 0, ymax: 14, xstep: 1, ystep: 2, xlabel: "n", ylabel: "y" }), 0.001),
  num(String.raw`Find the integer $n$ if $3^n=\frac{1}{243}$.`, -5, String.raw`$243=3^5$, so $\frac1{243}=3^{-5}$.`),
  tf(String.raw`$(-5)^{-2}$ is negative.`, false, String.raw`$(-5)^{-2}=\frac{1}{(-5)^2}=\frac1{25}>0$.`),
  tf(String.raw`For every non-zero number $a$, $a^{-1}\times a=1$.`, true, String.raw`$a^{-1}=\frac1a$ and $\frac1a\times a=1$.`),
  mc(String.raw`Evaluate $-3^2+(-3)^2-3^0$.`, "$-1$", ["$17$", "$1$", "$-19$"], String.raw`$-9+9-1=-1$.`),
  num(String.raw`A bacteria population triples every hour. There are $810$ bacteria now. How many were there $4$ hours ago?`, 10, String.raw`$810\times3^{-4}=\frac{810}{81}=10$.`),
  fill(String.raw`Evaluate $\left(-\frac12\right)^{-3}$: ___`, ["-8", "−8"], String.raw`Flip: $(-2)^3=-8$.`),
  num(String.raw`A cube has volume $0.064$ m$^3$. What is its edge length in metres?`, 0.4, String.raw`$0.4^3=0.064$.`, undefined, 0.0001),
  ms(String.raw`Which values are positive? Select all.`, [String.raw`$(-3)^{-3}$`, String.raw`$(-2)^{-4}$`, String.raw`$-(-2)^3$`, String.raw`$(-1)^{100}\times(-1)^0$`, String.raw`$-2^{-2}$`], [1, 2, 3], String.raw`$-\frac1{27}$, $\frac1{16}$, $8$, $1$, $-\frac14$.`),
  num(String.raw`A $200$ mg dose of medicine halves every $6$ hours (see graph). How many mg remain after $24$ hours?`, 12.5, String.raw`$24$ h is $4$ half-lives: $200\times\left(\frac12\right)^4=12.5$ mg.`,
    graph({ series: [{ pts: [[0, 200], [6, 100], [12, 50], [18, 25]] }], xmin: 0, xmax: 24, ymin: 0, ymax: 220, xstep: 6, ystep: 40, xlabel: "hours", ylabel: "mg" }), 0.001),
  num(String.raw`Write $10^{-2}+10^{-3}$ as a decimal.`, 0.011, String.raw`$0.01+0.001=0.011$.`, undefined, 0.00001),
  fill(String.raw`Evaluate $\left(2^{-1}+2^{-2}\right)^{-1}$ as a fraction: ___`, ["4/3"], String.raw`$\frac12+\frac14=\frac34$; $\left(\frac34\right)^{-1}=\frac43$.`),
  num(String.raw`Find the integer $n$ if $(-2)^n=-32$.`, 5, String.raw`$(-2)^5=-32$ (odd exponent keeps the negative sign).`),
  mc(String.raw`A square has side length $2^{-3}$ m. What is its area?`, String.raw`$\frac{1}{64}$ m$^2$`, [String.raw`$\frac1{16}$ m$^2$`, String.raw`$\frac18$ m$^2$`, "$-64$ m$^2$"], String.raw`$\left(2^{-3}\right)^2=2^{-6}=\frac1{64}$.`),
  tf(String.raw`$2^{-3}>3^{-2}$`, true, String.raw`$\frac18>\frac19$.`),
  num(String.raw`Evaluate $4^{-1}+4^{0}+4^{1}$ as a decimal.`, 5.25, String.raw`$0.25+1+4=5.25$.`, undefined, 0.0001),
];
