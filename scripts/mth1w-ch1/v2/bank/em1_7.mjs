// 1.7 Exponent Laws & Scientific Notation — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { tiles } from "./svg.mjs";

const SCI = (a, e) => `${a}x10^${e}`;
const sciForms = (a, e) => [SCI(a, e), `${a}×10^${e}`, `${a} x 10^${e}`, `${a} × 10^${e}`, `${a}e${e}`, `${a}*10^${e}`];

export const E = [
  fill(String.raw`Simplify $x^3\cdot x^5$: ___`, ["x^8", "x8"], "Same base, multiply: add the exponents."),
  fill(String.raw`Simplify $y^9\div y^4$: ___`, ["y^5", "y5"], "Same base, divide: subtract the exponents."),
  fill(String.raw`Simplify $(m^2)^4$: ___`, ["m^8", "m8"], "Power of a power: multiply the exponents."),
  num(String.raw`Evaluate $2^3\times2^2$.`, 32, String.raw`$2^5=32$.`),
  num(String.raw`Evaluate $5^6\div5^4$.`, 25, String.raw`$5^2=25$.`),
  mc(String.raw`Simplify $(3a)^2$.`, "$9a^2$", ["$3a^2$", "$6a^2$", "$9a$"], "Square both the 3 and the a."),
  mc(String.raw`Which is $4\,500\,000$ in scientific notation?`, String.raw`$4.5\times10^{6}$`, [String.raw`$45\times10^{5}$`, String.raw`$4.5\times10^{5}$`, String.raw`$0.45\times10^{7}$`], "The decimal moves 6 places."),
  mc(String.raw`Which is $0.0062$ in scientific notation?`, String.raw`$6.2\times10^{-3}$`, [String.raw`$6.2\times10^{3}$`, String.raw`$62\times10^{-4}$`, String.raw`$6.2\times10^{-2}$`], "The decimal moves 3 places right."),
  num(String.raw`Write $3.1\times10^{4}$ in standard form.`, 31000, "Move the decimal 4 places right."),
  num(String.raw`Write $8\times10^{-3}$ as a decimal.`, 0.008, "Move the decimal 3 places left.", undefined, 0.0000001),
  tf(String.raw`$x^2\cdot x^3=x^6$`, false, String.raw`Add the exponents: $x^5$.`),
  tf(String.raw`$\frac{a^5}{a^5}=a^0=1$ for $a\neq0$.`, true, "Everything cancels."),
  mc("Which expression does the tile diagram show?", "$x^2\\cdot x^3=x^5$", ["$x^2\\cdot x^3=x^6$", "$2x\\cdot3x$", "$x^5\\cdot x^5$"], "Two factors then three more: five factors.", tiles([{ n: 2, sym: "x" }, { n: 3, sym: "x" }])),
  fill(String.raw`Simplify $a^4\cdot a^{-1}$: ___`, ["a^3", "a3"], String.raw`$a^{4+(-1)}$.`),
  ms(String.raw`Which are in scientific notation? Select all.`, [String.raw`$3.2\times10^{5}$`, String.raw`$32\times10^{4}$`, String.raw`$9.9\times10^{-2}$`, String.raw`$0.5\times10^{3}$`, String.raw`$1\times10^{8}$`], [0, 2, 4], String.raw`The first number must be between $1$ and $10$.`),
  num(String.raw`Evaluate $(10^2)^3\div10^5$.`, 10, String.raw`$10^6\div10^5=10$.`),
  fill(String.raw`Simplify $(2x)^3$: ___`, ["8x^3", "8x3"], String.raw`$2^3x^3$.`),
  num(String.raw`Evaluate $7^{-3}\times7^{4}$.`, 7, String.raw`$7^1=7$.`),
  mc(String.raw`Which is larger?`, String.raw`$2\times10^{3}$`, [String.raw`$9\times10^{2}$`, String.raw`$9.9\times10^{1}$`, String.raw`$5\times10^{-4}$`], String.raw`$2000>900$.`),
  fill(String.raw`Simplify $\frac{b^7}{b^9}$ with a positive exponent: ___`, ["1/b^2", "1/b2"], String.raw`$b^{-2}=\frac{1}{b^2}$.`),
];

export const M = [
  fill(String.raw`Simplify $(2a^3)^2\cdot a$: ___`, ["4a^7", "4a7"], String.raw`$4a^6\cdot a=4a^7$.`),
  fill(String.raw`Simplify $\frac{15x^8}{5x^3}$: ___`, ["3x^5", "3x5"], String.raw`$\frac{15}{5}=3$, $x^{8-3}$.`),
  fill(String.raw`Simplify $(x^2y^3)^4$: ___`, ["x^8y^12", "x8y12", "x^8 y^12", "x^8*y^12"], "Multiply each exponent by 4."),
  num(String.raw`Evaluate $\frac{3^5\times3^{-2}}{3^4}$ as a decimal (to 4 places).`, 0.3333, String.raw`$3^{-1}=\frac13$.`, undefined, 0.0001),
  mc(String.raw`Evaluate $(3\times10^{4})(2\times10^{5})$.`, String.raw`$6\times10^{9}$`, [String.raw`$6\times10^{20}$`, String.raw`$5\times10^{9}$`, String.raw`$6\times10^{1}$`], String.raw`$3\times2=6$, $10^{4+5}$.`),
  mc(String.raw`Evaluate $\dfrac{8\times10^{9}}{4\times10^{3}}$.`, String.raw`$2\times10^{6}$`, [String.raw`$2\times10^{3}$`, String.raw`$4\times10^{6}$`, String.raw`$2\times10^{12}$`], String.raw`$\frac84=2$, $10^{9-3}$.`),
  fill(String.raw`Write $(5\times10^{3})(4\times10^{2})$ in scientific notation (type like 2x10^5): ___`, sciForms(2, 6), String.raw`$20\times10^{5}=2\times10^{6}$.`),
  num(String.raw`Find $n$: $4^n\times4^2=4^9$.`, 7, String.raw`$n+2=9$.`),
  num(String.raw`Find $n$: $(5^n)^3=5^{12}$.`, 4, String.raw`$3n=12$.`),
  tf(String.raw`$2^3\times3^2=6^5$`, false, String.raw`Different bases cannot be combined: $8\times9=72$.`),
  mc(String.raw`Simplify $\dfrac{(a^2)^3\cdot a^4}{a^5}$.`, "$a^5$", ["$a^{3}$", "$a^{19}$", "$a^{6}$"], String.raw`$a^{6+4-5}=a^5$.`),
  ms(String.raw`Which expressions equal $x^{10}$? Select all.`, [String.raw`$(x^5)^2$`, String.raw`$x^4\cdot x^6$`, String.raw`$\frac{x^{20}}{x^{2}}$`, String.raw`$x^{12}\cdot x^{-2}$`, String.raw`$(x^2)^8$`], [0, 1, 3], String.raw`$\frac{x^{20}}{x^2}=x^{18}$; $(x^2)^8=x^{16}$.`),
  num(String.raw`A bacterium is $3\times10^{-6}$ m long. How many fit end to end in $1.5$ mm ($1.5\times10^{-3}$ m)?`, 500, String.raw`$\frac{1.5\times10^{-3}}{3\times10^{-6}}=0.5\times10^{3}=500$.`),
  mc(String.raw`Order from least to greatest: $2.1\times10^{-3}$, $5\times10^{-4}$, $1.9\times10^{-3}$.`, String.raw`$5\times10^{-4},\ 1.9\times10^{-3},\ 2.1\times10^{-3}$`, [String.raw`$1.9\times10^{-3},\ 2.1\times10^{-3},\ 5\times10^{-4}$`, String.raw`$2.1\times10^{-3},\ 1.9\times10^{-3},\ 5\times10^{-4}$`, String.raw`$5\times10^{-4},\ 2.1\times10^{-3},\ 1.9\times10^{-3}$`], String.raw`$0.0005<0.0019<0.0021$.`),
  fill(String.raw`Simplify $(-3x^2)^3$: ___`, ["-27x^6", "−27x^6", "-27x6"], String.raw`$(-3)^3=-27$, $(x^2)^3=x^6$.`),
  num(String.raw`Light travels about $3\times10^{8}$ m/s. How many metres does it travel in $2\times10^{-3}$ s? Give an ordinary number.`, 600000, String.raw`$6\times10^{5}=600\,000$.`),
  fill(String.raw`Simplify $\frac{12m^5n^2}{4m^2n^3}$ (positive exponents): ___`, ["3m^3/n", "3m3/n", "3m^3 / n", "(3m^3)/n"], String.raw`$3m^{3}n^{-1}=\frac{3m^3}{n}$.`),
  mc(String.raw`About how many seconds are in one year ($365$ days)?`, String.raw`$3.2\times10^{7}$`, [String.raw`$3.2\times10^{5}$`, String.raw`$8.8\times10^{3}$`, String.raw`$5.3\times10^{5}$`], String.raw`$365\times24\times3600=31\,536\,000$.`),
  tf(String.raw`$(a+b)^2=a^2+2ab+b^2$, so exponent laws do not distribute over addition.`, true, String.raw`$(a+b)^2\neq a^2+b^2$.`),
  num(String.raw`Evaluate $\dfrac{(2^3)^2}{2^4}$.`, 4, String.raw`$2^{6-4}=4$.`),
];
