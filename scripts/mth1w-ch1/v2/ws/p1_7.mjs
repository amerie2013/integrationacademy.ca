// Worksheet 1.7 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
import { cube } from "./tikz.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Simplify $3^2\times3^5\div3^{-1}$, then evaluate.`, ans: "$3^8=6561$" },
  { level: 1, q: String.raw`Simplify $(b^4)^3\div b^{-2}$. Then evaluate $(2^3)^2\times2^{-4}$.`, ans: "$b^{14}$; $2^2=4$" },
  { level: 1, q: String.raw`Write $0.000\,052$ in scientific notation and $7.1\times10^{-3}$ in standard form.`, ans: String.raw`$5.2\times10^{-5}$; $0.0071$` },
  { level: 2, q: String.raw`Simplify $(5c^4d^{-1})^2\cdot c^{-3}$. Use positive exponents.`, ans: String.raw`$\dfrac{25c^5}{d^2}$` },
  { level: 2, q: String.raw`Simplify $\dfrac{18x^7y^2}{-6x^2y^5}$. Use positive exponents.`, ans: String.raw`$-\dfrac{3x^5}{y^3}$` },
  { level: 2, q: String.raw`Simplify $\left(\dfrac{2m^3}{n^2}\right)^4$.`, ans: String.raw`$\dfrac{16m^{12}}{n^8}$` },
  { level: 2, q: String.raw`Evaluate $\dfrac{(4\times10^{3})(6\times10^{-8})}{8\times10^{-2}}$ in scientific notation.`, ans: String.raw`$3\times10^{-3}$` },
  { level: 2, q: String.raw`A stack of $2\times10^{4}$ sheets of paper is $1.8$ m tall. How thick is one sheet? Answer in scientific notation.`, ans: String.raw`$9\times10^{-5}$ m` },
  { level: 3, space: 7.5,
    q: String.raw`Simplify. Use positive exponents.
(a) $\left(\dfrac{2a^6b^3c^5}{10a^2b^7c}\right)^3$
(b) $\left(\dfrac{12x^{-2}y^5}{8x^4y^{-1}}\right)^2$
(c) $\left(\dfrac{3m^{-2}n}{m^2n^{-3}}\right)^{-2}$`,
    ans: String.raw`(a) $\dfrac{a^{12}c^{12}}{125b^{12}}$ (b) $\dfrac{9y^{12}}{4x^{12}}$ (c) $\dfrac{m^8}{9n^8}$` },
  { level: 3, space: 6,
    q: String.raw`Robin simplified $\left(\dfrac{2x^3}{y^{-2}}\right)^3$ and wrote $\dfrac{2x^9}{y^{-6}}=2x^9y^6$.
(a) Find Robin's mistake and explain it.
(b) Write the correct simplified form.
(c) Evaluate the correct form for $x=-1$ and $y=2$.`,
    ans: String.raw`(a) The coefficient was not cubed: $2^3=8$. (b) $8x^9y^6$ (c) $8(-1)(64)=-512$.` },
  { level: 3, space: 6,
    q: String.raw`Let $x=-2$ and $y=3$.
(a) Simplify $\dfrac{(x^3y^{-2})^2(xy)^3}{x^5y^{-4}}$, then evaluate it.
(b) Simplify $(x^2y^{-1})^{-3}(xy)^4$, then evaluate it as a fraction.
(c) In (a), why does simplifying first make the evaluation easier?`,
    ans: String.raw`(a) $x^4y^3=432$ (b) $\dfrac{y^7}{x^2}=\dfrac{2187}{4}$ (c) Fewer powers to compute, and no fractions along the way.` },
  { level: 3, space: 6.5,
    q: String.raw`Find $n$ in each equation.
(a) $\dfrac{25^n\times5^3}{5^{-1}}=125^4$
(b) $(2^3)^n\div4^2=2^{11}$
(c) $x^5\cdot(x^n)^2=x^{-3}$
(d) Show that $2^{10}+2^{10}=2^{11}$. Explain why the answer is not $2^{20}$.`,
    ans: String.raw`(a) $2n+4=12$, $n=4$ (b) $3n-4=11$, $n=5$ (c) $5+2n=-3$, $n=-4$ (d) $2\times2^{10}=2^{11}$. Exponents add when powers are multiplied, not when they are added.` },
  { level: 3, space: 6.5,
    fig: cube("$2\\times10^{-5}$ m"),
    q: String.raw`Answer in scientific notation. Use $3\times10^{8}$ m/s for the speed of light.
(a) How long does light take to travel $1.5\times10^{11}$ m from the Sun to Earth?
(b) A space probe is $2.4\times10^{13}$ m away. How many hours does its radio signal take to reach Earth? Give your answer to three significant digits.
(c) A cell is modelled as the cube shown. Find its volume.
(d) How many of these cells fit in $1$ L, which is $1\times10^{-3}$ m$^3$?`,
    ans: String.raw`(a) $5\times10^{2}$ s (b) $8\times10^{4}$ s, about $2.22\times10^{1}$ h (c) $8\times10^{-15}$ m$^3$ (d) $1.25\times10^{11}$` },
];
