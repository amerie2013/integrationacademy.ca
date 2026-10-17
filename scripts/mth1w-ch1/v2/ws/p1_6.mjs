// Worksheet 1.6 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate $6^3$ and $2^{-4}$.`, ans: String.raw`$216$; $\frac1{16}$` },
  { level: 1, q: String.raw`Evaluate $(-2)^4$ and $-2^4$. Explain why they differ.`, recap: String.raw`$(-2)^4$ vs $-2^4$.`, ans: String.raw`$16$ and $-16$ (base $-2$ vs base $2$)` },
  { level: 1, q: String.raw`Evaluate $9^0$, $(-9)^0$ and $-9^0$.`, ans: "$1,\\ 1,\\ -1$" },
  { level: 2, q: String.raw`Evaluate $\left(\frac23\right)^{-2}$.`, ans: String.raw`$\frac94$` },
  { level: 2, q: String.raw`Evaluate $3^2+3^{-1}\times6$.`, ans: "$11$" },
  { level: 2, q: String.raw`Solve $x^2=196$, and evaluate $\sqrt[3]{-125}+\sqrt{1.21}$.`, recap: String.raw`$x^2=196$; $\sqrt[3]{-125}+\sqrt{1.21}$.`, ans: String.raw`$x=\pm14$; $-3.9$` },
  { level: 2, q: String.raw`Write $10^{-3}$ as a fraction and as a decimal.`, ans: String.raw`$\frac{1}{1000}=0.001$` },
  { level: 2, q: String.raw`Find the area of a square with side $1.2$ m and the volume of a cube with edge $0.5$ m.`, recap: "Square side 1.2 m (area); cube edge 0.5 m (volume).", ans: String.raw`$1.44$ m$^2$; $0.125$ m$^3$` },
  { level: 3, space: 5,
    q: String.raw`Money in a savings account grows by the formula $A=P(1+i)^n$, where $P$ is the amount invested, $i$ the interest rate per period and $n$ the number of periods. Rob invests $100$ dollars at $5\%$ per year for $10$ years. Sharon invests $100$ dollars at $10\%$ per year for $5$ years.
(a) Predict whose investment will be worth more. Explain.
(b) Calculate the value of each investment (to the cent).
(c) Was your prediction correct? Why does the longer time win here?`,
    recap: String.raw`Rob $100(1.05)^{10}$ vs Sharon $100(1.10)^{5}$.`,
    ans: String.raw`(b) Rob $162.89$; Sharon $161.05$ dollars (c) Rob earns slightly more: interest is earned on interest for more periods.` },
  { level: 3, space: 5,
    q: String.raw`Diego invests $2000$ dollars. The bank adds $3\%$ interest every six months, so after $5$ years his amount is $2000(1.03)^{10}$.
(a) Explain why the exponent is $10$, not $5$.
(b) Find the amount after $5$ years, to the cent.
(c) Write an expression for the amount after $8$ years, and evaluate it.`,
    recap: String.raw`Diego: $2000(1.03)^{10}$; why 10; after 8 years.`,
    ans: String.raw`(a) two periods per year $\times5$ years (b) $2687.83$ dollars (c) $2000(1.03)^{16}\approx3209.41$ dollars.` },
  { level: 3, space: 5,
    q: String.raw`A radioactive sample has a mass of $640$ g. Its half-life is $3$ days, so after $t$ days its mass is $640\left(\frac12\right)^{t/3}$ g.
(a) Find the mass after $9$ days.
(b) After how many days is the mass $20$ g?
(c) Use the formula with $t=-6$. What does the answer mean?`,
    recap: String.raw`Half-life 3 days from 640 g: after 9 days; when 20 g; $t=-6$.`,
    ans: String.raw`(a) $80$ g (b) $5$ half-lives $=15$ days (c) $640\times4=2560$ g: the mass $6$ days earlier.` },
  { level: 3, space: 5,
    q: String.raw`Find the value of $\square$ that makes each equation true. Explain how you know.
(a) $3^{\square}=81$ \quad (b) $(-2)^{\square}=-128$ \quad (c) $5^{\square}=\frac{1}{125}$ \quad (d) $\left(\frac23\right)^{\square}=\frac94$`,
    recap: String.raw`Exponents: $3^\square=81$, $(-2)^\square=-128$, $5^\square=\frac1{125}$, $(\frac23)^\square=\frac94$.`,
    ans: "(a) $4$ (b) $7$ (c) $-3$ (d) $-2$" },
  { level: 3, space: 5,
    q: String.raw`(a) Evaluate $(-1)^n$ for $n=1,2,3,4,5,6$. Describe the pattern and use it to find $(-1)^{99}$ and $(-1)^{100}$.
(b) Evaluate $2^{-3}+2^{-3}$ and write the answer as a power of $2$. Do the same for $2^{-5}+2^{-5}$.
(c) Explain why $2^{-n}+2^{-n}=2^{-(n-1)}$.`,
    recap: String.raw`Patterns: $(-1)^n$; $2^{-n}+2^{-n}$.`,
    ans: String.raw`(a) $-1,1,-1,\dots$; $-1$ and $1$ (b) $\frac14=2^{-2}$; $\frac1{16}=2^{-4}$ (c) adding two equal halves: $2\times2^{-n}=2^{1-n}$.` },
];
