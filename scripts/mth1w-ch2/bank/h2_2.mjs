// 2.2 Equivalent Expressions — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { algTiles, polyFig, rectFig } from "./svg2.mjs";

export const TOPIC = "2.2 Equivalent Expressions";
export const Q = [
  mx(String.raw`What polynomial must be subtracted from $4m^2-2m+7$ to get $m^2+3m-1$?`, "3*m^2-5*m+8", String.raw`$(4m^2-2m+7)-(m^2+3m-1)=3m^2-5m+8$. Check: $4m^2-2m+7-(3m^2-5m+8)=m^2+3m-1$ ✓`),
  num(String.raw`What is the degree of $(x^3+2x^2-1)+(-x^3+x-4)$?`, 2, String.raw`The $x^3$ terms cancel: $2x^2+x-5$.`),
  ms(String.raw`Which statements are always true? Select all.`, ["A polynomial minus itself is 0.", "The sum of two binomials has two terms.", "Like terms have the same coefficient.", "The degree of a sum is never larger than the larger of the two degrees.", "A one-variable polynomial of degree 3 has an x³ term."], [0, 3, 4], String.raw`$(x+1)+(x-1)=2x$ has one term; like terms need the same variable part, not the same coefficient.`),
  mx(String.raw`Write a simplified expression for the perimeter of the pentagon.`, "7*a+5*b", String.raw`$a$: $2+1+3+1=7$; $b$: $1-1+2+3=5$.`, polyFig([[0, 160], [230, 160], [280, 70], [140, 10], [-30, 80]], ["2a + b", "a − b", "3a", "2b", "a + 3b"])),
  mx(String.raw`A rectangle has perimeter $10x+6$ and one side $3x+1$. Write an expression for the other side.`, "2*x+2", String.raw`Half the perimeter is $5x+3$; $5x+3-(3x+1)=2x+2$.`),
  mx(String.raw`Simplify $(2x^2y-3xy^2+y^3)-(-x^2y+xy^2-2y^3)$.`, "3*x^2*y-4*x*y^2+3*y^3", String.raw`$x^2y$: $3$; $xy^2$: $-4$; $y^3$: $3$.`),
  mc(String.raw`Kim tests $x=0$ and $x=1$ and says $x^3$ and $x$ are equivalent. What is the best response?`, "Test x = 2: 8 ≠ 2, so they are not equivalent.", ["She is right: two tests are enough.", "Test x = −1: −1 = −1, so she is right.", "They are equivalent because both have only one term."], String.raw`$0$, $1$ and $-1$ all agree, but one counter-example ($x=2$) disproves equivalence.`),
  num(String.raw`For what value of $k$ does $(3x^2+kx-4)+(x^2-5x+k)$ have no $x$-term?`, 5, String.raw`$x$-coefficient $k-5=0$, so $k=5$. The sum is $4x^2+1$.`),
  mx(String.raw`Simplify $\left(\frac12x^2-\frac23x+\frac14\right)-\left(\frac14x^2+\frac13x-\frac34\right)$.`, "(1/4)*x^2-x+1", String.raw`$x^2$: $\frac14$; $x$: $-\frac23-\frac13=-1$; constants: $\frac14+\frac34=1$.`),
  num(String.raw`A board is $(12x+7)$ cm long. Pieces of $(3x-2)$ cm and $(5x+4)$ cm are cut off. How long is the remaining piece when $x=6.5$?`, 31, String.raw`$(12x+7)-(8x+2)=4x+5$; $26+5=31$ cm.`),
  mc(String.raw`Which expression is NOT equivalent to the others?`, "$6-4x$", ["$3(x-2)+x$", "$2(2x-3)$", "$4(x-1)-2$"], String.raw`The other three all simplify to $4x-6$.`),
  num(String.raw`Server A earns $18$ dollars per table and pays $140$ dollars a week for room and board. Server B earns $23$ dollars per table and pays $165$. Each serves $t$ tables. What are their combined net earnings when $t=12$?`, 187, String.raw`$(18t-140)+(23t-165)=41t-305$; $492-305=187$.`),
  mx(String.raw`A rectangle has sides $x^2+3x$ and $2x^2-x$. Write a simplified expression for its perimeter.`, "6*x^2+4*x", String.raw`$2(x^2+3x)+2(2x^2-x)=6x^2+4x$.`, rectFig("2x² − x", "x² + 3x")),
  tf(String.raw`If two polynomials have equal values at $x=1$, $x=2$ and $x=3$, they must be equivalent.`, false, String.raw`$(x-1)(x-2)(x-3)$ and $0$ agree at all three values but differ at $x=4$ ($6\ne0$).`),
  num(String.raw`What is the sum of the coefficients (including the constant) of the simplified form of $(3x^2-5x+2)-(x^2-2x-6)$? (Hint: substitute $x=1$.)`, 7, String.raw`$2x^2-3x+8$; $2-3+8=7$. Or at $x=1$: $0-(-7)=7$.`),
  ms(String.raw`Which pairs are like terms? Select all.`, ["$3x^2y$ and $-yx^2$", "$4ab$ and $4a^2b^2$", "$-m$ and $5m$", "$2xy^2$ and $2x^2y$", "$7$ and $-0.5$"], [0, 2, 4], "Same variables with the same exponents (constants are like terms)."),
  mx(String.raw`A triangle has perimeter $9x+4$. Two sides are $2x+3$ and $4x-1$. Find the third side.`, "3*x+2", String.raw`$9x+4-(6x+2)=3x+2$.`),
  num(String.raw`The tiles in both rows are combined and all zero pairs removed. How many tiles are left?`, 6, String.raw`$x^2$: $3-1=2$; $x$: $-4+5=1$; units: $2-5=-3$. $2+1+3=6$ tiles.`, algTiles([{ x2: 3, x: -4, c: 2 }, { x2: -1, x: 5, c: -5 }])),
  mc(String.raw`What is the degree of $(a^2b^3-ab)-(a^2b^3+4a^3)$?`, "3", ["5", "2", "6"], String.raw`The $a^2b^3$ terms cancel: $-ab-4a^3$; highest degree $3$.`),
  num(String.raw`Let $P=2x^2-3x+1$ and $Q=x^2+x-2$. Find the value of $P-2Q$ when $x=-3$.`, 20, String.raw`$P-2Q=-5x+5$; $15+5=20$.`),
];
