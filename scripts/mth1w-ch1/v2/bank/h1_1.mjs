// 1.1 Number Sets — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, setsDiagram, rectangle } from "./svg.mjs";

export const TOPIC = "1.1 Number Sets & Their Subsets";
export const Q = [
  mc(String.raw`Which number belongs to exactly three of the sets $\mathbb{N}$, $\mathbb{W}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$?`, "$-12$", ["$0$", String.raw`$\sqrt{3}$`, String.raw`$\frac{2}{3}$`],
    String.raw`$-12$ is in $\mathbb{Z},\mathbb{Q},\mathbb{R}$ (3 sets). $0$ is in 4, $\frac23$ in 2, $\sqrt3$ only in $\mathbb{R}$.`),
  num(String.raw`How many of these numbers are rational? $\sqrt{0.25}$, $\sqrt{12}$, $0.\overline{142857}$, $\frac{\pi}{2}$, $-\frac{22}{7}$, $\sqrt{\frac{9}{16}}$, $1.2020020002\ldots$, $0$`, 5,
    String.raw`Rational: $\sqrt{0.25}=0.5$, $0.\overline{142857}$, $-\frac{22}{7}$, $\sqrt{\frac9{16}}=\frac34$, $0$. Irrational: $\sqrt{12}$, $\frac\pi2$, $1.202002\ldots$`),
  fill(String.raw`Write $0.\overline{36}$ as a fraction in lowest terms: ___`, ["4/11"], String.raw`$100x-x=36$, $x=\frac{36}{99}=\frac{4}{11}$.`),
  fill(String.raw`Write $0.4\overline{5}=0.4555\ldots$ as a fraction in lowest terms: ___`, ["41/90"], String.raw`$100x=45.\overline{5}$ and $10x=4.\overline{5}$; $90x=41$, $x=\frac{41}{90}$.`),
  ms(String.raw`Which numbers are irrational? Select all.`, [String.raw`$\sqrt{48}$`, String.raw`$\sqrt{\frac{49}{4}}$`, String.raw`$2+\sqrt{2}$`, String.raw`$\sqrt{2}\times\sqrt{8}$`, String.raw`$3.141414\ldots$ (14 repeats)`], [0, 2],
    String.raw`$\sqrt{48}$ and $2+\sqrt2$ are irrational. $\sqrt{\frac{49}{4}}=\frac72$, $\sqrt2\sqrt8=\sqrt{16}=4$, and a repeating decimal is rational.`),
  tf(String.raw`The sum of a rational number and an irrational number is always irrational.`, true,
    String.raw`True. If $r+x=q$ with $r,q$ rational, then $x=q-r$ would be rational --- a contradiction.`),
  tf(String.raw`Between any two consecutive integers $n$ and $n+1$ there is an irrational number.`, true, String.raw`True: $n+\frac{\sqrt2}{2}$ lies between them (since $0<\frac{\sqrt2}{2}<1$) and is irrational.`),
  mc(String.raw`What is the smallest set that contains $\dfrac{-\sqrt{64}}{\sqrt{4}}$?`, "integers", ["natural numbers", "rational numbers (but not integers)", "irrational numbers"], String.raw`$\frac{-8}{2}=-4$, an integer (and so also rational and real).`),
  mc(String.raw`Which letter on the number line shows $\sqrt{30}$?`, "B", ["A", "C", "D"], String.raw`$25<30<36$, so $5<\sqrt{30}<6$; $5.5^2=30.25$, so $\sqrt{30}\approx5.48$, just below $5.5$: point B.`,
    numberLine({ min: 4, max: 7, step: 0.5, letters: [{ at: 4.6, label: "A" }, { at: 5.47, label: "B" }, { at: 5.9, label: "C" }, { at: 6.3, label: "D" }] })),
  num(String.raw`How many whole numbers $n$ make $\sqrt{n}$ lie strictly between $6$ and $7$?`, 12, String.raw`Need $36<n<49$: $n=37,\dots,48$, which is $12$ numbers.`),
  mc(String.raw`In the diagram, point C sits in the “Whole” region but outside “Natural”. Which number could C be?`, "$0$", ["$1$", "$-1$", String.raw`$\frac12$`], String.raw`The only whole number that is not natural is $0$.`,
    setsDiagram([{ set: "N", label: "A" }, { set: "Z", label: "B" }, { set: "W", label: "C" }, { set: "I", label: "D" }])),
  num(String.raw`The decimal for $\frac{5}{7}$ repeats. How many digits are in its repeating block?`, 6, String.raw`$\frac57=0.\overline{714285}$: six digits repeat.`),
  mc(String.raw`Which statement is always true?`, "The product of a non-zero rational number and an irrational number is irrational.", ["The product of two irrational numbers is irrational.", "The sum of two irrational numbers is irrational.", "The square root of a positive rational number is irrational."], String.raw`If $rx=q$ with $r\neq0$, then $x=\frac qr$ would be rational. Counterexamples for the others: $\sqrt2\sqrt2=2$, $\sqrt2+(-\sqrt2)=0$, $\sqrt{\frac14}=\frac12$.`),
  fill(String.raw`Evaluate $0.\overline{18}+0.\overline{3}$ as a fraction in lowest terms: ___`, ["17/33"], String.raw`$\frac{18}{99}=\frac{2}{11}$ and $0.\overline3=\frac13$. Then $\frac{6}{33}+\frac{11}{33}=\frac{17}{33}$.`),
  ms(String.raw`Which numbers lie strictly between $3$ and $4$? Select all.`, [String.raw`$\sqrt{10}$`, String.raw`$\sqrt{17}$`, String.raw`$\frac{22}{7}$`, String.raw`$\pi$`, String.raw`$3.\overline{9}$`], [0, 2, 3],
    String.raw`$\sqrt{10}\approx3.16$, $\frac{22}{7}\approx3.14$, $\pi\approx3.14$. $\sqrt{17}\approx4.12$ and $3.\overline9=4$ are not strictly between.`),
  mc(String.raw`$3.2\overline{45}$ is equal to`, String.raw`$\frac{357}{110}$`, [String.raw`$\frac{36}{11}$`, String.raw`$\frac{119}{37}$`, String.raw`$\frac{649}{200}$`], String.raw`$1000x-10x=3245-32=3213$, so $x=\frac{3213}{990}=\frac{357}{110}$.`),
  fill(String.raw`Write $1.2\overline{7}=1.2777\ldots$ as an improper fraction in lowest terms: ___`, ["23/18"], String.raw`$100x-10x=127.\overline7-12.\overline7=115$, so $x=\frac{115}{90}=\frac{23}{18}$.`),
  tf(String.raw`$\sqrt{a^2}=a$ for every integer $a$.`, false, String.raw`False: $a=-3$ gives $\sqrt{9}=3\neq-3$. In general $\sqrt{a^2}=|a|$.`),
  mc(String.raw`Find the area of the rectangle. Is it rational?`, "$12$ m$^2$, rational", ["$26$ m$^2$, rational", String.raw`$\sqrt{26}$ m$^2$, irrational`, String.raw`$\sqrt{144}$ m$^2$, irrational`], String.raw`$\sqrt8\times\sqrt{18}=\sqrt{144}=12$. Both sides are irrational, but the area is not.`, rectangle("√18 m", "√8 m")),
  num(String.raw`How many integers $n$ satisfy $-\sqrt{50}<n<\sqrt{90}$?`, 17, String.raw`$\sqrt{50}\approx7.07$ and $\sqrt{90}\approx9.49$, so $n=-7,\dots,9$, which is $17$ integers.`),
];
