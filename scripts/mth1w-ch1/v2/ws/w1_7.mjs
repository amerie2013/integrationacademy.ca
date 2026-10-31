// Worksheet 1.7 — Exponent Laws & Scientific Notation (teacher edition)
import { factorTiles, logScale, quotientTiles } from "./tikz.mjs";
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
    String.raw`Raise a product or quotient to a power: $(ab)^n=a^nb^n$, $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$.`,
    String.raw`Simplify a fraction with several variables raised to a positive or negative power.`,
    "Rewrite powers with a common base to find an unknown exponent.",
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
    ["2. The quotient law and where $a^0$, $a^{-n}$ come from", String.raw`${factorTiles([{ n: 6, sym: "x", label: "numerator $x^6$", cancel: 2 }, { n: 2, sym: "x", label: "denominator $x^2$", cancel: 2 }], { caption: "$\\dfrac{x^6}{x^2}$: each $x$ below cancels one above, leaving $x^4$." })}
\textbf{Same base, divide $\Rightarrow$ subtract the exponents.} The law explains the earlier rules: $\dfrac{x^3}{x^3}=x^{0}$ must be $1$, and $\dfrac{x^2}{x^5}=x^{-3}$ must be $\dfrac{1}{x^3}$ (three $x$'s are left on the bottom).`],
    ["3. Power of a power, power of a product", String.raw`$(x^2)^3=(x^2)(x^2)(x^2)=x^{2+2+2}=x^6$: \textbf{multiply the exponents}.\\
An exponent outside brackets applies to \textbf{every factor} inside: $(5x^2y)^2=5^2(x^2)^2y^2=25x^4y^2$ and $\left(\dfrac{x}{3}\right)^3=\dfrac{x^3}{27}$.\\
\textbf{Strategy:} sign $\to$ coefficient $\to$ each variable in turn. Write final answers with positive exponents.`],
    ["4. A whole fraction raised to a power", String.raw`Simplify $\left(\dfrac{5a^6b^2}{20a^2b^5}\right)^2$ \textbf{inside the brackets first}:
${quotientTiles([{ sym: "a", top: 6, bottom: 2 }, { sym: "b", top: 2, bottom: 5 }], "Inside the brackets: four $a$'s stay on top and three $b$'s stay on the bottom.")}
\textbf{(i) Coefficient:} $\dfrac{5}{20}=\dfrac14$. \textbf{(ii) Variables, top minus bottom:} $a^{4}$ and $b^{-3}$. \textbf{(iii) Move negative exponents:} $\dfrac{a^4}{4b^3}$. \textbf{(iv) Apply the outside power to every factor:} $\dfrac{a^8}{16b^6}$.\\
A \textbf{negative power outside} flips the fraction: $\left(\dfrac ab\right)^{-n}=\left(\dfrac ba\right)^{n}$.`],
    ["5. Common bases", String.raw`Powers of $4$, $8$ and $16$ are powers of $2$, so $8^n=(2^3)^n=2^{3n}$. Powers of $9$ and $27$ are powers of $3$. Once both sides of an equation have the same base, the exponents must be equal. Exponent laws do not work across sums: $2^{10}+2^{10}=2\times2^{10}=2^{11}$.`],
    ["6. Scientific notation", String.raw`\begin{center}\begin{tabular}{lll}\toprule Standard form & Move the decimal & Scientific notation\\\midrule
$73\,000\,000$ & 7 places left (big) & $7.3\times10^{7}$\\ $0.000\,46$ & 4 places right (small) & $4.6\times10^{-4}$\\\bottomrule\end{tabular}\end{center}
${SCALE}`],
    ["7. Calculating in scientific notation", String.raw`Group the decimal parts and the powers of ten, then use the laws:
\[(4\times10^{6})(3\times10^{-2})=(4\times3)\times10^{6+(-2)}=12\times10^{4}=1.2\times10^{5}.\]
A power applies to both parts: $(2\times10^{-3})^{3}=8\times10^{-9}$. If the decimal part is not between $1$ and $10$, adjust it and the exponent together: $0.3\times10^{5}=3\times10^{4}$. On a calculator use the \textbf{EE} or \textbf{EXP} key.`],
  ],
  tips: [
    String.raw`$x^2\cdot x^3=x^5$, not $x^6$ --- students multiply exponents when they should add.`,
    String.raw`Do not multiply the bases: $3^2\cdot3^4=3^6$, not $9^6$.`,
    String.raw`$(2x)^3=8x^3$: the coefficient is cubed too.`,
    String.raw`$(a+b)^2\neq a^2+b^2$. Exponent laws work for products, not sums.`,
    String.raw`In scientific notation, a negative exponent means a small positive number, not a negative number.`,
    String.raw`$\left(\dfrac{a^3}{4b^4}\right)^2$ has $16$ on the bottom, not $4$. The outside power reaches the coefficient as well.`,
    String.raw`A negative exponent moves a factor across the fraction bar. It does not change the sign of the coefficient.`,
  ],
  examples: [
    { title: "Product and quotient together", q: String.raw`Simplify $\dfrac{a^5\cdot a^3}{a^2}$. Then evaluate $\dfrac{2^5\times2^{-3}}{2^{-1}}$.`, fig: factorTiles([{ n: 8, sym: "a", label: "numerator $a^5\\cdot a^3=a^8$", cancel: 2 }, { n: 2, sym: "a", label: "denominator $a^2$", cancel: 2 }]), steps: [String.raw`Same base, so add the exponents on top: $a^{5+3}=a^8$.`, String.raw`Subtract the bottom exponent: $a^{8-2}=a^6$.`, String.raw`For the numbers, add on top and subtract the bottom: $2^{5+(-3)-(-1)}=2^3=8$.`], ans: String.raw`$a^6$; $8$` },
    { title: "Power of a power with signs", q: String.raw`Simplify $(-3p^2q)^3$ and $(-p^4)^2$.`, fig: factorTiles([{ n: 2, sym: "p", label: "$p^2$" }, { n: 2, sym: "p", label: "$p^2$" }, { n: 2, sym: "p", label: "$p^2$" }], { caption: "Three groups of $p^2$ make $p^6$." }), steps: [String.raw`Apply the power $3$ to each factor: $(-3)^3(p^2)^3q^3$.`, String.raw`An odd power of a negative is negative: $(-3)^3=-27$. So the result is $-27p^6q^3$.`, String.raw`An even power of a negative is positive: $(-p^4)^2=(-1)^2(p^4)^2=p^8$.`], ans: String.raw`$-27p^6q^3$; $p^8$` },
    { title: "Two brackets multiplied", q: String.raw`Simplify $(4x^2y)^3(xy^3)^2$.`, fig: factorTiles([{ n: 6, sym: "x", label: "$(x^2)^3=x^6$" }, { n: 2, sym: "x", label: "$x^2$" }], { caption: "The $x$-factors: six and two more make $x^8$." }), steps: [String.raw`Expand the first bracket: $4^3(x^2)^3y^3=64x^6y^3$.`, String.raw`Expand the second bracket: $x^2(y^3)^2=x^2y^6$.`, String.raw`Multiply, adding the exponents on each base: $64x^{6+2}y^{3+6}=64x^8y^9$.`], ans: String.raw`$64x^8y^9$` },
    { title: "Several laws with negative exponents", q: String.raw`Simplify $\dfrac{(a^3b^{-2})^2}{a^4b^{-1}}$. Write the answer with positive exponents.`, fig: quotientTiles([{ sym: "a", top: 6, bottom: 4 }, { sym: "b", top: 1, bottom: 4 }], "After moving the negative exponents across the bar: $\\dfrac{a^6b}{a^4b^4}$."), steps: [String.raw`Expand the numerator: $(a^3)^2(b^{-2})^2=a^6b^{-4}$.`, String.raw`Subtract exponents: $a^{6-4}=a^2$ and $b^{-4-(-1)}=b^{-3}$.`, String.raw`Move the negative exponent to the bottom: $\dfrac{a^2}{b^3}$.`], ans: String.raw`$\dfrac{a^2}{b^3}$` },
    { title: "A fraction with three variables, cubed", q: String.raw`Simplify $\left(\dfrac{3x^5y^2z^7}{9x^2y^6z^4}\right)^3$. Write the answer with positive exponents.`, fig: quotientTiles([{ sym: "x", top: 5, bottom: 2 }, { sym: "y", top: 2, bottom: 6 }, { sym: "z", top: 7, bottom: 4 }], "Inside the brackets: three $x$'s and three $z$'s stay on top, and four $y$'s stay on the bottom."), steps: [String.raw`Reduce the coefficient inside the brackets: $\dfrac39=\dfrac13$.`, String.raw`Subtract exponents: $x^{5-2}=x^3$, $y^{2-6}=y^{-4}$, $z^{7-4}=z^3$.`, String.raw`Move the negative exponent to the bottom: $\dfrac{x^3z^3}{3y^4}$.`, String.raw`Cube every factor: $\dfrac{(x^3)^3(z^3)^3}{3^3(y^4)^3}=\dfrac{x^9z^9}{27y^{12}}$.`], ans: String.raw`$\dfrac{x^9z^9}{27y^{12}}$` },
    { title: "A negative power outside", q: String.raw`Simplify $\left(\dfrac{4a^{-1}b^2}{6a^3b^{-2}}\right)^{-3}$. Write the answer with positive exponents.`, fig: quotientTiles([{ sym: "a", top: 0, bottom: 4 }, { sym: "b", top: 4, bottom: 0 }], "Inside the brackets after simplifying the variables: $\\dfrac{b^4}{a^4}$, with coefficient $\\dfrac23$."), steps: [String.raw`Reduce the coefficient: $\dfrac46=\dfrac23$.`, String.raw`Subtract exponents: $a^{-1-3}=a^{-4}$ and $b^{2-(-2)}=b^4$. The inside is $\dfrac{2b^4}{3a^4}$.`, String.raw`The negative power flips the fraction: $\left(\dfrac{3a^4}{2b^4}\right)^3$.`, String.raw`Cube every factor: $\dfrac{27a^{12}}{8b^{12}}$.`], ans: String.raw`$\dfrac{27a^{12}}{8b^{12}}$` },
    { title: "Finding an unknown exponent", q: String.raw`Find $n$ if $\dfrac{4^n\times8}{2^3}=32^2$.`, fig: factorTiles([{ n: 5, sym: "2", label: "$32=2^5$" }, { n: 5, sym: "2", label: "$32=2^5$" }], { caption: "$32^2$ written with base $2$ has ten factors: $2^{10}$." }), steps: [String.raw`Write each number as a power of $2$: $4^n=2^{2n}$, $8=2^3$, and $32^2=(2^5)^2=2^{10}$.`, String.raw`Simplify the left side: $2^{2n+3-3}=2^{2n}$.`, String.raw`The bases match, so the exponents are equal: $2n=10$, which gives $n=5$.`], ans: "$n=5$" },
    { title: "Converting, then calculating", q: String.raw`Write $0.0025$ and $80\,000\,000$ in scientific notation. Then evaluate $(0.0025)^2\times80\,000\,000$.`, fig: logScale({ lo: -6, hi: 8, objects: [{ p: -5.2, label: "$6.25\\times10^{-6}$" }, { p: 2.7, label: "answer: $5\\times10^{2}$" }, { p: 7.9, label: "$8\\times10^{7}$" }] }), steps: [String.raw`Move the decimal $3$ places right: $0.0025=2.5\times10^{-3}$. Move it $7$ places left: $80\,000\,000=8\times10^{7}$.`, String.raw`Square the first number, both parts: $(2.5\times10^{-3})^2=6.25\times10^{-6}$.`, String.raw`Multiply: $6.25\times8=50$ and $10^{-6+7}=10^{1}$, which gives $50\times10^{1}$.`, String.raw`Adjust: $50\times10^{1}=5\times10^{2}$, which is $500$ in standard form.`], ans: String.raw`$2.5\times10^{-3}$; $8\times10^{7}$; $5\times10^{2}$` },
    { title: "Red blood cells around the Earth", q: String.raw`A body has about $2.5\times10^{13}$ red blood cells, each about $7\times10^{-6}$ m wide. Earth's circumference is about $4\times10^{7}$ m. If the cells were placed in a line, about how many times would the line go around Earth?`, fig: logScale({ lo: -6, hi: 9, objects: [{ p: -5.15, label: "one cell" }, { p: 8.24, label: "line of cells" }, { p: 7.6, label: "Earth" }], caption: "Lengths in metres. Earth is marked at its circumference." }), steps: [String.raw`Multiply to find the length of the line: $(2.5\times10^{13})(7\times10^{-6})=17.5\times10^{7}$.`, String.raw`Adjust: $17.5\times10^{7}=1.75\times10^{8}$ m.`, String.raw`Divide by the circumference: $\dfrac{1.75\times10^{8}}{4\times10^{7}}=\dfrac{1.75}{4}\times10^{1}$.`, String.raw`$0.4375\times10=4.375$.`], ans: "about $4.4$ times around" },
  ],
  problems: PROBLEMS,
};
