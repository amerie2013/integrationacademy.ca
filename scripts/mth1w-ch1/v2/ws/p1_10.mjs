// Worksheet 1.10 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Find the midpoint of $\frac38$ and $\frac12$.`, ans: String.raw`$\frac{7}{16}$` },
  { level: 1, q: String.raw`Find a number between $1.4$ and $1.5$.`, ans: "e.g. $1.45$" },
  { level: 1, q: String.raw`How many integers lie strictly between $-4$ and $3$?`, ans: "$6$" },
  { level: 2, q: String.raw`Find the midpoint of $-\frac34$ and $\frac12$.`, ans: String.raw`$-\frac18$` },
  { level: 2, q: String.raw`Find three fractions between $\frac59$ and $\frac23$.`, ans: String.raw`e.g.\ $\frac{21}{36},\frac{22}{36},\frac{23}{36}$` },
  { level: 2, q: String.raw`What is the limit of $\dfrac{6n-1}{2n}$ as $n$ grows?`, ans: "$3$" },
  { level: 2, q: String.raw`What number does $3,\ 3.3,\ 3.33,\ 3.333,\dots$ approach? Give a fraction.`, ans: String.raw`$\frac{10}{3}$` },
  { level: 2, q: String.raw`Find $\frac12+\frac14+\frac18+\frac1{16}+\frac1{32}+\frac1{64}$. How far is it from $1$?`, recap: String.raw`$\frac12+\dots+\frac1{64}$; distance from $1$.`, ans: String.raw`$\frac{63}{64}$; $\frac1{64}$` },
  { level: 3, space: 5,
    q: String.raw`(a) Find five rational numbers between $\frac{1}{101}$ and $\frac{1}{100}$.
(b) Explain your method.
(c) Find a number between $0.99$ and $1$, and explain why $0.\overline{9}$ is not between them.`,
    recap: String.raw`Five numbers between $\frac1{101}$ and $\frac1{100}$; between $0.99$ and $1$.`,
    ans: String.raw`(a) $\frac{601}{60600},\dots,\frac{605}{60600}$ (b) common denominator $10100$, then $\times6$ (c) e.g.\ $0.995$; $0.\overline9=1$ exactly.` },
  { level: 3, space: 5,
    q: String.raw`The sequence $a_n=\dfrac{n}{2n+1}$ begins $\frac13,\ \frac25,\ \frac37,\dots$
(a) Write the next three terms.
(b) What value does the sequence approach? Explain.
(c) Show that the gap to that value is $\frac{1}{2(2n+1)}$.
(d) For which first $n$ is the gap less than $0.01$?`,
    recap: String.raw`$a_n=\frac{n}{2n+1}$: terms, limit, gap, gap $<0.01$.`,
    ans: String.raw`(a) $\frac49,\frac5{11},\frac6{13}$ (b) $\frac12$ (c) $\frac12-\frac{n}{2n+1}=\frac{1}{2(2n+1)}$ (d) $n=25$.` },
  { level: 3, space: 5,
    q: String.raw`(a) Pair each natural number $n$ with the even number $2n$. Explain why this suggests there are “as many” even numbers as natural numbers.
(b) Find a way to pair the natural numbers $1,2,3,\dots$ with all of the integers $\dots,-2,-1,0,1,2,\dots$ so that none is missed.`,
    recap: "Pair the naturals with the evens, and with the integers.",
    ans: String.raw`(a) $1\leftrightarrow2$, $2\leftrightarrow4$, …: every number has exactly one partner (b) e.g.\ $1\to0$, $2\to1$, $3\to-1$, $4\to2$, $5\to-2$, …` },
  { level: 3, space: 5,
    q: String.raw`A ball is dropped from $12$ m and each bounce reaches $\frac34$ of the previous height.
(a) Find the heights of the first four bounces.
(b) After how many bounces is the height first less than $1$ m?
(c) What value do the heights approach? Does the ball ever stop in this model?`,
    recap: String.raw`Ball from $12$ m, bounces to $\frac34$ height.`,
    ans: String.raw`(a) $9,\ 6.75,\ 5.0625,\ 3.796875$ m (b) $9$ bounces (c) $0$; in the model it never reaches $0$.` },
  { level: 3, space: 5.5,
    q: String.raw`(a) The sequence $a_n=\dfrac{3n+1}{n}$. Find its limit, and the first $n$ for which it is within $0.002$ of the limit.
(b) The sum of $n$ terms of $\dfrac12+\dfrac14+\dfrac18+\cdots$ is $1-\dfrac{1}{2^n}$. Find the first $n$ for which the sum is within $0.001$ of $1$.
(c) Show that $0.\overline{36}+0.\overline{63}=1$ using fractions.`,
    ans: String.raw`(a) limit $3$; gap $\dfrac1n<0.002$ gives $n=501$ (b) $2^n>1000$ gives $n=10$ (c) $\dfrac{36}{99}+\dfrac{63}{99}=1$.` },
];
