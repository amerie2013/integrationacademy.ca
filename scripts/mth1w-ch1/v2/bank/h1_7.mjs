// 1.7 Exponent Laws & Scientific Notation — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { tiles, numberLine } from "./svg.mjs";

export const TOPIC = "1.7 Exponent Laws & Scientific Notation";
export const Q = [
  mc(String.raw`Simplify $\dfrac{(2x^2y^3)^3}{4x^5y^4}$.`, "$2xy^5$", ["$6xy^5$", String.raw`$\frac12xy^5$`, "$2x^{11}y^{13}$"], String.raw`$\frac{8x^6y^9}{4x^5y^4}=2x^{1}y^{5}$.`),
  fill(String.raw`Evaluate $3^{5}\times3^{-2}\div3^{4}$ as a fraction: ___`, ["1/3"], String.raw`$3^{5-2-4}=3^{-1}=\frac13$.`),
  num(String.raw`Find $n$ if $(5^3)^n\div5^2=5^{10}$.`, 4, String.raw`$3n-2=10$, so $n=4$.`),
  ms(String.raw`Which expressions equal $2^{12}$? Select all.`, [String.raw`$(2^3)^4$`, String.raw`$2^6\times2^6$`, String.raw`$4^6$`, String.raw`$8^4$`, String.raw`$2^{15}\div2^{-3}$`, String.raw`$(2^2)^{10}$`], [0, 1, 2, 3], String.raw`$4^6=(2^2)^6=2^{12}$ and $8^4=(2^3)^4=2^{12}$. $2^{15}\div2^{-3}=2^{18}$ and $(2^2)^{10}=2^{20}$.`),
  mc(String.raw`Evaluate $\dfrac{3.6\times10^{-4}}{9\times10^{-7}}$ in scientific notation.`, String.raw`$4\times10^{2}$`, [String.raw`$4\times10^{-3}$`, String.raw`$4\times10^{-11}$`, String.raw`$0.4\times10^{-3}$`], String.raw`$\frac{3.6}{9}=0.4$ and $10^{-4-(-7)}=10^{3}$: $0.4\times10^3=4\times10^2$.`),
  num(String.raw`Evaluate $(2.5\times10^{6})(4\times10^{-9})$ and write it as an ordinary decimal.`, 0.01, String.raw`$10\times10^{-3}=10^{-2}=0.01$.`, undefined, 0.000001),
  tf(String.raw`$(a+b)^2=a^2+b^2$ for all numbers $a$ and $b$.`, false, String.raw`$(1+2)^2=9$ but $1^2+2^2=5$. Exponent laws apply to products, not sums.`),
  tf(String.raw`$x^5\cdot x^{-5}=1$ for every $x\neq0$.`, true, String.raw`$x^{5+(-5)}=x^0=1$.`),
  num(String.raw`Simplify $(x^3)^2\cdot x^{-4}$, then evaluate it for $x=-3$.`, 9, String.raw`$x^{6-4}=x^2$; $(-3)^2=9$.`),
  mc(String.raw`Write $0.000\,060\,5$ in scientific notation.`, String.raw`$6.05\times10^{-5}$`, [String.raw`$6.05\times10^{-4}$`, String.raw`$60.5\times10^{-6}$`, String.raw`$6.05\times10^{5}$`], String.raw`The decimal moves $5$ places right. ($60.5\times10^{-6}$ is equal but not in scientific notation.)`),
  mc(String.raw`Which number is the largest?`, String.raw`$3.1\times10^{-2}$`, [String.raw`$9.9\times10^{-3}$`, String.raw`$2\times10^{-2}$`, String.raw`$5\times10^{-3}$`], String.raw`$0.031>0.02>0.0099>0.005$.`),
  mc(String.raw`About $7.9\times10^{9}$ people each drink about $2$ L of water a day. About how much is that in total per day?`, String.raw`$1.58\times10^{10}$ L`, [String.raw`$1.58\times10^{9}$ L`, String.raw`$15.8\times10^{18}$ L`, String.raw`$3.95\times10^{9}$ L`], String.raw`$2\times7.9\times10^9=15.8\times10^9=1.58\times10^{10}$.`),
  num(String.raw`How many times larger is $6\times10^{8}$ than $3\times10^{5}$?`, 2000, String.raw`$\frac{6}{3}\times10^{8-5}=2\times10^3=2000$.`),
  ms(String.raw`Which expressions does the tile diagram represent? Select all.`, [String.raw`$(x^3)^2$`, String.raw`$x^3\cdot x^3$`, "$x^6$", "$x^9$", "$2x^3$"], [0, 1, 2], String.raw`Two groups of three $x$-factors: $x^{3+3}=x^6=(x^3)^2$. $2x^3$ would be $x^3+x^3$.`,
    tiles([{ n: 3, sym: "x" }, { n: 3, sym: "x" }])),
  num(String.raw`When $(-2a^2b)^3$ is simplified to $ka^mb^n$, what is $k+m+n$?`, 1, String.raw`$(-2)^3a^6b^3=-8a^6b^3$: $-8+6+3=1$.`),
  mc(String.raw`Simplify $\dfrac{12m^{-2}n^5}{4m^3n^{-1}}$ with positive exponents.`, String.raw`$\dfrac{3n^6}{m^5}$`, [String.raw`$\dfrac{3n^4}{m^5}$`, "$3mn^6$", String.raw`$\dfrac{8n^6}{m^5}$`], String.raw`$3m^{-2-3}n^{5-(-1)}=3m^{-5}n^6$.`),
  num(String.raw`A virus is about $1.2\times10^{-7}$ m long. How many would fit end to end across $3$ mm ($3\times10^{-3}$ m)?`, 25000, String.raw`$\frac{3\times10^{-3}}{1.2\times10^{-7}}=2.5\times10^{4}=25\,000$.`),
  mc(String.raw`Light travels about $3\times10^{5}$ km each second, and a year has about $3.15\times10^{7}$ seconds. About how far is one light-year?`, String.raw`$9.45\times10^{12}$ km`, [String.raw`$9.45\times10^{35}$ km`, String.raw`$1.05\times10^{2}$ km`, String.raw`$9.45\times10^{11}$ km`], String.raw`$3\times3.15=9.45$ and $10^{5+7}=10^{12}$.`),
  tf(String.raw`$3.2\times10^{-4}$ is a negative number.`, false, String.raw`It is $0.00032$: small but positive. The negative exponent means dividing by $10^4$.`),
  num(String.raw`On the scale, each tick is a power of ten. The point P marks $0.0004$. If $0.0004=4\times10^{n}$, what is $n$?`, -4, String.raw`$0.0004=4\times10^{-4}$.`,
    numberLine({ min: -6, max: 0, step: 1, labels: ["10^-6", "10^-5", "10^-4", "10^-3", "10^-2", "10^-1", "1"], letters: [{ at: -3.4, label: "P" }] })),
];
