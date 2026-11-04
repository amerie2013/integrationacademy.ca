// Worksheet 2.3 — Simplifying Expressions (teacher edition)
import { area, rectT, raw } from "./tikz2.mjs";
import { PROBLEMS } from "./p2_3.mjs";

const SHADED = raw(String.raw`\filldraw[fill=blue!12,draw=blue!70!black,thick] (0,0) rectangle (5.2,3);
\filldraw[fill=white,draw=blue!70!black] (3.6,1.4) rectangle (4.8,2.6); \node[font=\scriptsize] at (4.2,2) {$x$ by $x$};
\node[below] at (2.6,0) {$2x+5$}; \node[left] at (0,1.5) {$3x$};`, "Shaded area = rectangle minus the square hole.");

export const WS = {
  code: "2.3",
  title: "Simplifying Expressions",
  bigideas: String.raw`The \textbf{distributive property} $a(b+c)=ab+ac$ removes brackets: the factor outside multiplies \emph{every} term inside --- an area model makes this visible. To multiply monomials, multiply the coefficients and \textbf{add exponents} of the same base. To \textbf{simplify}, expand all brackets and then collect like terms. \textbf{Factoring} out the GCF runs the distributive property backwards.`,
  goals: [
    "Model and explain the distributive property with an area model.",
    "Multiply monomials (including powers of monomials) with the exponent laws.",
    "Multiply a polynomial by a monomial, with correct signs.",
    "Expand and simplify expressions with several brackets; verify by substitution.",
    "Factor out the greatest common factor; write area and perimeter expressions.",
  ],
  curriculum: "C1.3, C1.4",
  vocab: [
    ["Distributive property", "$a(b+c)=ab+ac$"],
    ["Expand", "multiply out the brackets"],
    ["Simplify", "expand, then collect like terms"],
    ["GCF", "the greatest monomial dividing every term"],
    ["Factor", "write as a product (reverse of expanding)"],
  ],
  hook: String.raw`Ask the class to work out $7\times98$ mentally and share strategies. Someone will do $7\times100-7\times2=686$. Write $7(100-2)=7(100)-7(2)$ and ask: “What if the $100$ were $x$?” That is the distributive property --- students already use it. Then draw a $7$ by $(x-2)$ rectangle.`,
  concepts: [
    ["1. The area model", String.raw`${area("3", ["2x", "5"], ["6x", "15"], "3(2x + 5) = 6x + 15: area of two pieces.")}
Extend to monomials with powers and to negative terms: the sign of every cell follows the integer rules.
${area("-2x^2", ["3x^2", "-x", "4"], ["-6x^4", "2x^3", "-8x^2"], "−2x²(3x² − x + 4) = −6x⁴ + 2x³ − 8x².")}`],
    ["2. Multiplying monomials", String.raw`Multiply coefficients; add exponents on the same base; a power of a monomial raises every factor:
\[(3x^2y)(-4xy^3)=-12x^3y^4,\qquad(-2a^3)^2=4a^6,\qquad(2m)^3\cdot m^2=8m^5.\]`],
    ["3. Expanding and simplifying", String.raw`(1) Expand each bracket (a minus sign in front is $-1$). (2) Collect like terms. (3) Check by substitution.
\[2x(x-3)-(x^2-4x+1)=2x^2-6x-x^2+4x-1=x^2-2x-1.\]
Check at $x=2$: $2(2)(-1)-(4-8+1)=-4+3=-1$; $4-4-1=-1$ ✓.`],
    ["4. Factoring out the GCF", String.raw`GCF = (GCF of coefficients)$\times$(lowest power of each common variable). Divide every term by it:
\[10a^3b-15a^2b^2+5a^2b=5a^2b(2a-3b+1).\]
Check by expanding. If the leading coefficient is negative, factoring out a negative GCF is also correct: $-4x^2+8x=-4x(x-2)$.`],
  ],
  tips: [
    String.raw`$4(x+3)\neq4x+3$: draw the area model when students forget the second term.`,
    String.raw`$-(x-5)=-x+5$; students change only the first sign.`,
    String.raw`$15-3(x-2)$: multiply before subtracting; never compute $15-3$ first.`,
    String.raw`$x\cdot x^2=x^3$ but $x+x^2$ does not simplify; $(x^2)^3=x^6$, not $x^5$.`,
    "When factoring, a term equal to the GCF leaves 1 inside the bracket, not 0.",
  ],
  examples: [
    { title: "Area model", q: String.raw`Use an area model to expand $5(2x-3)$.`, fig: area("5", ["2x", "-3"], ["10x", "-15"], ""),
      steps: [String.raw`\textbf{Distributive law:} $a(b+c)=ab+ac$. In the area model, the rectangle $5$ by $(2x-3)$ splits into two parts whose areas are the two products.`, String.raw`$5\times2x=10x$ and $5\times(-3)=-15$.`, String.raw`\textbf{Check with $x=4$:} $5(8-3)=25$ and $40-15=25$ \checkmark`], ans: "$10x-15$" },
    { title: "Monomial times monomial", q: String.raw`Simplify $(-6m^2n)(\frac13mn^3)$.`,
      steps: [String.raw`\textbf{Rules:} multiply the coefficients; for each variable use $b^m\cdot b^n=b^{m+n}$ (a variable with no exponent has exponent $1$).`, String.raw`Coefficients: $-6\times\frac13=-2$.`, String.raw`$m^{2+1}n^{1+3}$.`, String.raw`\textbf{Check with $m=n=1$:} $(-6)(\frac13)=-2$ \checkmark`], ans: "$-2m^3n^4$" },
    { title: "Powers of monomials", q: String.raw`Simplify $(2a^3b)^2\cdot a$.`,
      steps: [String.raw`\textbf{Laws:} $(ab)^n=a^nb^n$ and $(a^m)^n=a^{mn}$: square the $2$, the $a^3$ and the $b$.`, String.raw`$(2a^3b)^2=4a^6b^2$.`, String.raw`$4a^6b^2\cdot a=4a^7b^2$.`, String.raw`\textbf{Check with $a=2,\ b=1$:} $(2\cdot8)^2\cdot2=512$ and $4\cdot2^7=512$ \checkmark`], ans: "$4a^7b^2$" },
    { title: "Negative monomial times trinomial", q: String.raw`Expand $-4y(2y^2-5y+3)$.`,
      steps: [String.raw`\textbf{Distributive law:} multiply $-4y$ by each of the three terms; a negative times a negative gives a positive.`, String.raw`$-4y\cdot2y^2=-8y^3$; $-4y\cdot(-5y)=20y^2$; $-4y\cdot3=-12y$.`, String.raw`\textbf{Check with $y=1$:} $-4(2-5+3)=0$ and $-8+20-12=0$ \checkmark`], ans: "$-8y^3+20y^2-12y$" },
    { title: "Two variables", q: String.raw`Expand $x^2y(3x-2y+xy)$.`,
      steps: [String.raw`\textbf{Distributive law with exponent rules:} $x^2y\cdot3x=3x^3y$, \ $x^2y\cdot(-2y)=-2x^2y^2$, \ $x^2y\cdot xy=x^3y^2$.`, String.raw`$3x^3y-2x^2y^2+x^3y^2$.`, String.raw`\textbf{Check with $x=y=1$:} $1(3-2+1)=2$ and $3-2+1=2$ \checkmark`], ans: "$3x^3y-2x^2y^2+x^3y^2$" },
    { title: "Expand and simplify", q: String.raw`Simplify $4(x-3)-2(3x-5)+x$.`,
      steps: [String.raw`\textbf{Plan:} distribute each number over its bracket (the $-2$ changes both signs), then collect like terms.`, String.raw`$4x-12-6x+10+x$.`, String.raw`$x$: $4-6+1=-1$; constants $-2$.`, String.raw`\textbf{Check with $x=1$:} $4(-2)-2(-2)+1=-3$ and $-1-2=-3$ \checkmark`], ans: "$-x-2$" },
    { title: "Expand and simplify with powers", q: String.raw`Simplify $3a(a^2-2)-a(4a^2-a+6)$.`,
      steps: [String.raw`\textbf{Plan:} distribute $3a$ and $-a$ (every sign in the second bracket changes), then collect $a^3$, $a^2$ and $a$ terms.`, String.raw`$3a^3-6a-4a^3+a^2-6a$.`, String.raw`$-a^3+a^2-12a$.`, String.raw`\textbf{Check with $a=1$:} $3(-1)-1(9)=-12$ and $-1+1-12=-12$ \checkmark`], ans: "$-a^3+a^2-12a$" },
    { title: "Factoring out the GCF", q: String.raw`Factor $18x^2y-24xy^2+6xy$.`,
      steps: [String.raw`\textbf{Rule:} the GCF is the GCF of the coefficients ($18,24,6\to6$) times each variable to its lowest power in every term ($x^1$, $y^1$).`, String.raw`GCF $=6xy$.`, String.raw`$18x^2y\div6xy=3x$, $-24xy^2\div6xy=-4y$, $6xy\div6xy=1$.`, String.raw`\textbf{Check by expanding:} $6xy(3x)=18x^2y$, $6xy(-4y)=-24xy^2$, $6xy(1)=6xy$ \checkmark`], ans: "$6xy(3x-4y+1)$" },
    { title: "Area of a shaded region", q: String.raw`A rectangle $3x$ by $2x+5$ has a square hole $x$ by $x$. Write the shaded area and evaluate for $x=4$.`, fig: SHADED,
      steps: [String.raw`\textbf{Model:} shaded area $=$ rectangle area $-$ hole area, with $A=lw$ and a square's area $=x^2$.`, String.raw`$3x(2x+5)-x^2=6x^2+15x-x^2=5x^2+15x$.`, String.raw`$x=4$: $80+60=140$.`, String.raw`\textbf{Check with numbers:} at $x=4$ the rectangle is $12\times13=156$ and the hole is $16$: $156-16=140$ \checkmark`], ans: "$5x^2+15x$; $140$ square units" },
  ],
  problems: PROBLEMS,
};
