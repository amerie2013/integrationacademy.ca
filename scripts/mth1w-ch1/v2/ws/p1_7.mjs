// Worksheet 1.7 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Simplify $3^2\times3^5$, then evaluate.`, ans: "$3^7=2187$" },
  { level: 1, q: String.raw`Simplify $b^{12}\div b^4$ and $(2^3)^2$.`, ans: "$b^8$; $2^6=64$" },
  { level: 1, q: String.raw`Write $52\,000$ in scientific notation and $7.1\times10^{-3}$ in standard form.`, recap: String.raw`$52\,000$ in sci.\ notation; $7.1\times10^{-3}$ standard.`, ans: String.raw`$5.2\times10^4$; $0.0071$` },
  { level: 2, q: String.raw`Simplify $(5c^4)^2$.`, ans: "$25c^8$" },
  { level: 2, q: String.raw`Simplify $\dfrac{6x^7}{2x^2}$.`, ans: "$3x^5$" },
  { level: 2, q: String.raw`Evaluate $9^4\div9^6$ as a fraction.`, ans: String.raw`$\frac1{81}$` },
  { level: 2, q: String.raw`Evaluate $\dfrac{8\times10^{6}}{2\times10^{-3}}$ in scientific notation.`, ans: String.raw`$4\times10^9$` },
  { level: 2, q: String.raw`A human hair is about $8\times10^{-5}$ m wide. How many hairs side by side make $1$ cm?`, recap: String.raw`Hairs ($8\times10^{-5}$ m) in $1$ cm.`, ans: "$125$" },
  { level: 3, space: 5,
    q: String.raw`Let $x=-2$ and $y=3$.
(a) Simplify $(x^3y^2)(x^{-1}y)$, then evaluate it.
(b) Simplify $(x^2y)^3\div(x^4y^2)$, then evaluate it.
(c) Evaluate (b) again without simplifying first. Which way was easier? Why?`,
    recap: String.raw`$x=-2,y=3$: $(x^3y^2)(x^{-1}y)$; $(x^2y)^3\div(x^4y^2)$.`,
    ans: String.raw`(a) $x^2y^3=108$ (b) $x^2y=12$ (c) same answer ($1728\div144=12$); simplifying first keeps the numbers small.` },
  { level: 3, space: 5,
    q: String.raw`Claire and Robin both evaluated $(-3)^4\times(-3)^{-2}$. Claire wrote $81\times\frac19=9$. Robin wrote $(-3)^{2}=9$.
(a) Explain Robin's reasoning.
(b) Use Robin's method to evaluate $\left(\frac25\right)^7\div\left(\frac25\right)^5$.
(c) Use Robin's method to evaluate $(-2)^{-3}\times(-2)^{5}\times(-2)^{0}$.`,
    recap: String.raw`Robin's method: $\left(\frac25\right)^7\div\left(\frac25\right)^5$; $(-2)^{-3}(-2)^{5}(-2)^0$.`,
    ans: String.raw`(a) same base: add the exponents $4+(-2)=2$ (b) $\left(\frac25\right)^2=\frac{4}{25}$ (c) $(-2)^2=4$.` },
  { level: 3, space: 5,
    q: String.raw`A photo file is $4.5\times10^{6}$ bytes. A memory card holds $2.56\times10^{11}$ bytes.
(a) How many photos fit on the card?
(b) Video uses $1.2\times10^{8}$ bytes per minute. How many minutes of video fit on the card?
(c) About how many hours is that?`,
    recap: String.raw`Card $2.56\times10^{11}$ B: photos $4.5\times10^6$ B; video $1.2\times10^8$ B/min.`,
    ans: String.raw`(a) $\approx5.69\times10^4$, i.e.\ $56\,888$ photos (b) $\approx2133$ minutes (c) about $35.6$ hours.` },
  { level: 3, space: 5,
    q: String.raw`The Sun's mass is about $1.99\times10^{30}$ kg, Earth's is about $5.97\times10^{24}$ kg and Jupiter's is about $1.90\times10^{27}$ kg.
(a) About how many times as massive as Earth is the Sun?
(b) About how many times as massive as Jupiter is the Sun?
(c) About how many Earths would equal one Jupiter?`,
    recap: "Sun, Earth, Jupiter mass ratios.",
    ans: String.raw`(a) $\approx3.33\times10^{5}$ (b) $\approx1.05\times10^{3}$ (c) $\approx318$.` },
  { level: 3, space: 5,
    q: String.raw`Find the missing exponent.
(a) $x^5\cdot x^{\square}=x^{-2}$ \quad (b) $(y^{\square})^4=y^{-12}$ \quad (c) $(2^3)^{\square}\div2^5=2^{10}$
(d) Is $2^3+2^3=2^4$ true? Is $2^3+2^3=2^6$ true? Explain.`,
    recap: String.raw`Missing exponents; is $2^3+2^3=2^4$ or $2^6$?`,
    ans: String.raw`(a) $-7$ (b) $-3$ (c) $5$ (d) $2^3+2^3=16=2^4$ (true); $2^6=64$ (false) --- adding is not multiplying.` },
];
