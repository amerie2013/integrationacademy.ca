// Worksheet 1.7 — Exponent Laws & Scientific Notation (teacher edition)
import { factorTiles, logScale } from "./tikz.mjs";
import { PROBLEMS } from "./p1_7.mjs";

const SCALE = logScale({ lo: -10, hi: 12, objects: [
  { p: -9.6, label: "virus" }, { p: -5.1, label: "red blood cell" }, { p: -4.1, label: "hair width" }, { p: 0.2, label: "student" },
  { p: 2.7, label: "CN Tower" }, { p: 6.6, label: "Toronto--Vancouver" }, { p: 7.1, label: "Earth" }, { p: 11.2, label: "Earth--Sun" }],
  caption: "Each tick is ten times the previous one. Lengths in metres." });

export const WS = {
  code: "1.7",
  title: "Exponent Laws & Scientific Notation",
  bigideas: String.raw`With the \textbf{same base}, powers combine by counting factors: $a^m\cdot a^n=a^{m+n}$, $a^m\div a^n=a^{m-n}$, $(a^m)^n=a^{mn}$, and an exponent outside brackets applies to every factor inside, $(ab)^n=a^nb^n$. \textbf{Scientific notation} $a\times10^n$ ($1\le|a|<10$) uses these laws to handle very large and very small numbers.`,
  goals: [
    "Derive the product, quotient and power-of-a-power laws by expanding powers into factors.",
    "Apply the laws (and the zero / negative exponent rules) to simplify numeric and algebraic expressions.",
    String.raw`Raise a product or quotient to a power: $(ab)^n=a^nb^n$, $\left(\frac ab\right)^n=\frac{a^n}{b^n}$.`,
    "Convert between standard form and scientific notation.",
    "Multiply and divide in scientific notation and solve problems about very large and very small quantities.",
  ],
  curriculum: "B2.1, B2.2",
  vocab: [
    ["Product law", "$a^m\\cdot a^n=a^{m+n}$ (same base)"],
    ["Quotient law", "$a^m\\div a^n=a^{m-n}$ (same base, $a\\neq0$)"],
    ["Power of a power", "$(a^m)^n=a^{mn}$"],
    ["Scientific notation", "$a\\times10^n$ with $1\\le|a|<10$, $n$ an integer"],
    ["Coefficient", "the number part of a term, e.g. $5$ in $5x^3$"],
  ],
  hook: String.raw`Ask the class to write the number of cells in a human body (about $37\,000\,000\,000\,000$) and the width of one cell ($0.000\,01$ m) on the board, then multiply them to estimate how long all the cells would be in a line. The zeros quickly become unmanageable. Show the same calculation as $(3.7\times10^{13})(1\times10^{-5})=3.7\times10^{8}$ m --- about the distance to the Moon! The exponent laws make this one-line arithmetic.`,
  concepts: [
    ["1. The product law", String.raw`${factorTiles([{ n: 3, sym: "x", label: "$x^3$" }, { n: 4, sym: "x", label: "$x^4$" }], { caption: "$x^3\\cdot x^4$: three factors and four more factors make seven: $x^7$." })}
\textbf{Same base, multiply $\Rightarrow$ add the exponents.} Different bases cannot be combined this way: $2^3\cdot5^2=8\cdot25=200$.`],
    ["2. The quotient law and where $a^0$, $a^{-n}$ come from", String.raw`${factorTiles([{ n: 6, sym: "x", label: "numerator $x^6$", cancel: 2 }, { n: 2, sym: "x", label: "denominator $x^2$", cancel: 2 }], { caption: "$\\frac{x^6}{x^2}$: each $x$ below cancels one above, leaving $x^4$." })}
\textbf{Same base, divide $\Rightarrow$ subtract the exponents.} The law explains the earlier rules: $\frac{x^3}{x^3}=x^{0}$ must be $1$, and $\frac{x^2}{x^5}=x^{-3}$ must be $\frac{1}{x^3}$ (three $x$'s are left on the bottom).`],
    ["3. Power of a power, power of a product", String.raw`$(x^2)^3=(x^2)(x^2)(x^2)=x^{2+2+2}=x^6$: \textbf{multiply the exponents}.\\
An exponent outside brackets applies to \textbf{every factor} inside: $(5x^2y)^2=5^2(x^2)^2y^2=25x^4y^2$ and $\left(\frac{x}{3}\right)^3=\frac{x^3}{27}$.\\
\textbf{Strategy:} sign $\to$ coefficient $\to$ each variable in turn. Write final answers with positive exponents.`],
    ["4. Scientific notation", String.raw`\begin{center}\begin{tabular}{lll}\toprule Standard form & Move the decimal & Scientific notation\\\midrule
$73\,000\,000$ & 7 places left (big) & $7.3\times10^{7}$\\ $0.000\,46$ & 4 places right (small) & $4.6\times10^{-4}$\\\bottomrule\end{tabular}\end{center}
${SCALE}`],
    ["5. Calculating in scientific notation", String.raw`Group the decimal parts and the powers of ten, then use the laws:
\[(4\times10^{6})(3\times10^{-2})=(4\times3)\times10^{6+(-2)}=12\times10^{4}=1.2\times10^{5}.\]
If the decimal part is not between $1$ and $10$, adjust it and the exponent together. On a calculator use the \textbf{EE} or \textbf{EXP} key.`],
  ],
  tips: [
    String.raw`$x^2\cdot x^3=x^5$, not $x^6$ --- students multiply exponents when they should add.`,
    String.raw`Do not multiply the bases: $3^2\cdot3^4=3^6$, not $9^6$.`,
    String.raw`$(2x)^3=8x^3$: the coefficient is cubed too.`,
    String.raw`$(a+b)^2\neq a^2+b^2$. Exponent laws work for products, not sums.`,
    String.raw`In scientific notation, a negative exponent means a small positive number, not a negative number.`,
  ],
  examples: [
    { title: "Product law", q: String.raw`Simplify $a^5\cdot a^3$, and evaluate $2^3\cdot2^4$.`, fig: factorTiles([{ n: 5, sym: "a" }, { n: 3, sym: "a" }]), steps: [String.raw`$a^{5+3}=a^8$.`, String.raw`$2^{3+4}=2^7=128$.`], ans: String.raw`$a^8$; $128$` },
    { title: "Quotient law", q: String.raw`Simplify $m^9\div m^4$ and evaluate $7^2\div7^5$.`, steps: [String.raw`$m^{9-4}=m^5$.`, String.raw`$7^{2-5}=7^{-3}=\frac{1}{343}$.`], ans: String.raw`$m^5$; $\frac{1}{343}$` },
    { title: "Power of a power", q: String.raw`Simplify $(k^2)^5$ and $(-p^2)^3$.`, steps: [String.raw`$(k^2)^5=k^{10}$.`, String.raw`$(-p^2)^3=(-1)^3(p^2)^3=-p^6$.`], ans: String.raw`$k^{10}$; $-p^6$` },
    { title: "Power of a product", q: String.raw`Simplify $(4x^2y)^3$.`, steps: [String.raw`Coefficient: $4^3=64$.`, String.raw`Variables: $(x^2)^3=x^6$, $y^3$.`], ans: String.raw`$64x^6y^3$` },
    { title: "Several laws with negative exponents", q: String.raw`Simplify $\dfrac{(a^3b^{-2})^2}{a^4b^{-1}}$. Write the answer with positive exponents.`, steps: [String.raw`Numerator: $a^6b^{-4}$.`, String.raw`Quotient: $a^{6-4}b^{-4-(-1)}=a^2b^{-3}$.`, String.raw`Positive exponents: $\frac{a^2}{b^3}$.`], ans: String.raw`$\dfrac{a^2}{b^3}$` },
    { title: "To scientific notation", q: String.raw`Write $45\,000\,000$ and $0.000\,908$ in scientific notation.`, steps: [String.raw`$4.5$: decimal moved $7$ places left $\Rightarrow4.5\times10^{7}$.`, String.raw`$9.08$: decimal moved $4$ places right $\Rightarrow9.08\times10^{-4}$.`], ans: String.raw`$4.5\times10^{7}$; $9.08\times10^{-4}$` },
    { title: "To standard form", q: String.raw`Write $3.07\times10^{5}$ and $6.2\times10^{-6}$ in standard form.`, steps: [String.raw`Move $5$ places right: $307\,000$.`, String.raw`Move $6$ places left: $0.000\,006\,2$.`], ans: String.raw`$307\,000$; $0.000\,006\,2$` },
    { title: "Multiplying", q: String.raw`Evaluate $(6\times10^{4})(7\times10^{-9})$ in scientific notation.`, steps: [String.raw`$6\times7=42$; $10^{4+(-9)}=10^{-5}$.`, String.raw`$42\times10^{-5}=4.2\times10^{-4}$.`], ans: String.raw`$4.2\times10^{-4}$` },
    { title: "Population density of Canada", q: String.raw`Canada has about $4.1\times10^{7}$ people and an area of about $9.98\times10^{6}$ km$^2$. About how many people per km$^2$?`, steps: [String.raw`$\frac{4.1\times10^{7}}{9.98\times10^{6}}=\frac{4.1}{9.98}\times10^{1}$.`, String.raw`$\approx0.41\times10=4.1$.`], ans: "about $4$ people per km$^2$" },
  ],
  problems: PROBLEMS,
};
