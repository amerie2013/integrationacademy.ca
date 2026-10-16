// 2.2 Equivalent Expressions — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { algTiles, rectFig } from "./svg2.mjs";

export const E = [
  mc(String.raw`Which term is a like term of $4x$?`, "$-x$", ["$4x^2$", "$4y$", "$4$"], String.raw`Like terms have the same variable part, $x$.`),
  num(String.raw`What is the degree of $7x^3$?`, 3, "The exponent of x is 3."),
  mc(String.raw`Classify $5a-2b+1$.`, "trinomial", ["monomial", "binomial", "not a polynomial"], "Three terms."),
  mx(String.raw`Simplify $6m+3m$.`, "9*m", String.raw`$6+3=9$: $9m$.`),
  mx(String.raw`Simplify $8y-11y$.`, "-3*y", String.raw`$8-11=-3$.`),
  tf(String.raw`$2x$ and $2x^2$ are like terms.`, false, "The exponents of x are different."),
  mx(String.raw`Simplify $4a+3-a+5$.`, "3*a+8", String.raw`$a$-terms: $4-1=3$; constants: $8$.`),
  num(String.raw`How many terms are left after simplifying $3x+2-3x+y$?`, 2, String.raw`$3x-3x=0$, leaving $2+y$.`),
  mc(String.raw`Which polynomial do these tiles show?`, "$x^2+2x-3$", ["$x^2-2x+3$", "$x^2+2x+3$", "$2x^2+x-3$"], "One x² tile, two positive x tiles, three negative unit tiles.", algTiles([{ x2: 1, x: 2, c: -3 }])),
  mx(String.raw`Simplify $(3x+4)+(2x-9)$.`, "5*x-5", String.raw`$5x-5$.`),
  mx(String.raw`Simplify $(5n-2)-(2n+1)$.`, "3*n-3", String.raw`$5n-2-2n-1=3n-3$.`),
  num(String.raw`What is the degree of $3xy^2$?`, 3, String.raw`$1+2=3$.`),
  tf(String.raw`The degree of the constant $6$ is $0$.`, true, String.raw`$6=6x^0$.`),
  mc(String.raw`What is the opposite of $x^2-3x+2$?`, "$-x^2+3x-2$", ["$-x^2-3x+2$", "$x^2+3x-2$", "$-x^2-3x-2$"], "Change the sign of every term."),
  mx(String.raw`Simplify $2p^2+5p-p^2-2p$.`, "p^2+3*p", String.raw`$p^2+3p$.`),
  ms(String.raw`Which are binomials? Select all.`, ["$x+1$", "$3x^2$", "$2a-b$", "$x^2+x+1$", "$7y-4$"], [0, 2, 4], "A binomial has exactly two terms."),
  tf(String.raw`$2x+5$ and $7x$ are equivalent because both equal $7$ when $x=1$.`, false, String.raw`At $x=2$: $9\ne14$. One agreement does not prove equivalence.`),
  num(String.raw`Four positive unit tiles and six negative unit tiles are combined. How many zero pairs can be removed?`, 4, "Each positive tile pairs with one negative tile."),
  mx(String.raw`Simplify $-3k+7+5k-10$.`, "2*k-3", String.raw`$2k-3$.`),
  mc(String.raw`Write $4-x+2x^2$ in descending order.`, "$2x^2-x+4$", ["$4-x+2x^2$", "$2x^2+x+4$", "$-x+2x^2+4$"], "Highest power first."),
];

export const M = [
  mx(String.raw`Simplify $4x^2-3x+7-6x^2+8x-2$.`, "-2*x^2+5*x+5", String.raw`$x^2$: $-2$; $x$: $5$; constants: $5$.`),
  mx(String.raw`Simplify $(2a^2-5a+3)+(a^2+4a-8)$.`, "3*a^2-a-5", String.raw`$3a^2-a-5$.`),
  mx(String.raw`Simplify $(6y^2+y-4)-(2y^2-3y+5)$.`, "4*y^2+4*y-9", String.raw`$6y^2+y-4-2y^2+3y-5$.`),
  mx(String.raw`Simplify $3xy-2x^2+5xy+4x^2$.`, "2*x^2+8*x*y", String.raw`$x^2$: $2$; $xy$: $8$.`),
  num(String.raw`What is the degree of $2a^3b^2-7ab^4+a^5b$?`, 6, String.raw`Term degrees $5$, $5$, $6$.`),
  mc(String.raw`The two rows of tiles are added. What is the simplified sum?`, "$x^2+2x-3$", ["$5x^2+4x+5$", "$x^2-2x+3$", "$-x^2+2x-3$"], String.raw`$x^2$: $-2+3=1$; $x$: $3-1=2$; units: $1-4=-3$.`, algTiles([{ x2: -2, x: 3, c: 1 }, { x2: 3, x: -1, c: -4 }])),
  mx(String.raw`Simplify $\frac13m+\frac12m$.`, "(5/6)*m", String.raw`$\frac26m+\frac36m=\frac56m$.`),
  mx(String.raw`Simplify $0.7k-1.2-2.5k+3.4$.`, "-1.8*k+2.2", String.raw`$-1.8k+2.2$.`),
  ms(String.raw`Which are equivalent to $5-(2x-3)$? Select all.`, ["$8-2x$", "$-2x+8$", "$2-2x$", "$8+2x$", "$2(4-x)$"], [0, 1, 4], String.raw`$5-2x+3=8-2x$.`),
  tf(String.raw`$(x^2+3x)-(x^2-3x)=0$`, false, String.raw`$x^2+3x-x^2+3x=6x$.`),
  num(String.raw`A triangle has sides $2x+3$, $3x-1$ and $x+4$. Find its perimeter when $x=5$.`, 36, String.raw`$6x+6$; $30+6=36$.`),
  mc(String.raw`Which choice shows that $x^2+1$ and $2x$ are not equivalent?`, "x = 3 (10 vs 6)", ["x = 1 (2 vs 2)", "they are equivalent", "no value can show it"], "One value that gives different results is a counter-example."),
  mx(String.raw`What must be added to $2x-5$ to get $7x+1$?`, "5*x+6", String.raw`$(7x+1)-(2x-5)=5x+6$.`),
  num(String.raw`How many terms are in the simplified form of $(4x^2-2x)+(-3x^2+2x)$?`, 1, String.raw`$x^2$ — one term.`),
  mx(String.raw`Simplify $(3m-2n)-(-m+4n)$.`, "4*m-6*n", String.raw`$3m-2n+m-4n$.`),
  mc(String.raw`Simplify $(x^2+2x)+(x^2-2x+1)$ and classify the result.`, "$2x^2+1$, a binomial of degree 2", ["$2x^2+4x+1$, a trinomial", "$2x^2+1$, a trinomial", "$x^2+1$, a binomial of degree 2"], String.raw`The $x$-terms cancel.`),
  num(String.raw`Simplify $(2x^2-3x)-(x^2+x)$, then evaluate at $x=-2$.`, 12, String.raw`$x^2-4x$; $4+8=12$.`),
  ms(String.raw`Which are like terms of $-2a^2b$? Select all.`, ["$5a^2b$", "$ba^2$", "$-2ab^2$", "$a^2b^2$", "$7a^2b$"], [0, 1, 4], String.raw`The variable part must be $a^2b$.`),
  mx(String.raw`Write a simplified expression for the perimeter of the rectangle.`, "8*x+4", String.raw`$2(3x+2)+2x=8x+4$.`, rectFig("3x + 2", "x")),
  tf(String.raw`The sum of two trinomials is always a trinomial.`, false, String.raw`$(x^2+x+1)+(-x^2-x+1)=2$, a monomial.`),
];
