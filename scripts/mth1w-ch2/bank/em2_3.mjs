// 2.3 Simplifying Expressions — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { areaGrid } from "./svg2.mjs";

export const E = [
  mx(String.raw`Expand $3(x+5)$.`, "3*x+15", String.raw`$3x+15$.`),
  mx(String.raw`Expand $-2(y-4)$.`, "-2*y+8", String.raw`$-2y+8$.`),
  mx(String.raw`Simplify $(3a)(4a)$.`, "12*a^2", String.raw`$12a^2$.`),
  mx(String.raw`Expand $x(x+7)$.`, "x^2+7*x", String.raw`$x^2+7x$.`),
  mx(String.raw`Expand $5(2m-3)$.`, "10*m-15", String.raw`$10m-15$.`),
  mc(String.raw`$4(x+3)=$`, "$4x+12$", ["$4x+3$", "$4x+7$", "$x+12$"], "Multiply both terms by 4."),
  mx(String.raw`Simplify $(2x^2)(5x^3)$.`, "10*x^5", String.raw`$10x^{2+3}=10x^5$.`),
  tf(String.raw`$-(a-6)=-a+6$`, true, String.raw`The minus sign changes the sign of both terms.`),
  mx(String.raw`Write the expanded expression shown by the area model.`, "4*x+8", String.raw`$4x+8$.`, areaGrid("4", ["x", "2"], ["4x", "8"])),
  num(String.raw`What is the greatest common factor of $12$ and $18$?`, 6, String.raw`$6$ divides both.`),
  mx(String.raw`Factor $5x+15$.`, "5*(x+3)", String.raw`GCF $5$: $5(x+3)$.`),
  mx(String.raw`Simplify $2(x+1)+3x$.`, "5*x+2", String.raw`$2x+2+3x$.`),
  mx(String.raw`Simplify $(-3m)(2n)$.`, "-6*m*n", String.raw`$-6mn$.`),
  mc(String.raw`$x^3\cdot x^4=$`, "$x^7$", ["$x^{12}$", "$2x^7$", "$x$"], "Same base: add the exponents."),
  mx(String.raw`Simplify $6-(x+2)$.`, "4-x", String.raw`$6-x-2=4-x$.`),
  num(String.raw`Evaluate $3(2x-1)$ when $x=4$.`, 21, String.raw`$3(7)=21$.`),
  tf(String.raw`$2(3x)=6x$, but $2(3+x)=6+2x$.`, true, String.raw`In the second, $2$ multiplies both terms.`),
  mx(String.raw`Expand $3a(a-2)$.`, "3*a^2-6*a", String.raw`$3a^2-6a$.`),
  mx(String.raw`Factor $8y-12$.`, "4*(2*y-3)", String.raw`GCF $4$.`),
  mc(String.raw`What is the GCF of $6x^2$ and $9x$?`, "$3x$", ["$3$", "$x$", "$18x^2$"], String.raw`GCF of $6$ and $9$ is $3$; lowest power of $x$ is $x$.`),
];

export const M = [
  mx(String.raw`Expand $4x(2x^2-3x+1)$.`, "8*x^3-12*x^2+4*x", String.raw`$8x^3-12x^2+4x$.`),
  mx(String.raw`Expand $-3y^2(y^2-2y+5)$.`, "-3*y^4+6*y^3-15*y^2", String.raw`$-3y^4+6y^3-15y^2$.`),
  mx(String.raw`Simplify $3(2x-1)-2(x+4)$.`, "4*x-11", String.raw`$6x-3-2x-8$.`),
  mx(String.raw`Simplify $5a-2(3a-4)$.`, "-a+8", String.raw`$5a-6a+8$.`),
  mx(String.raw`Simplify $(-2ab^2)(3a^2b)$.`, "-6*a^3*b^3", String.raw`$-6a^3b^3$.`),
  mx(String.raw`Simplify $(-2x^3)^2$.`, "4*x^6", String.raw`$(-2)^2x^{6}=4x^6$.`),
  mx(String.raw`Simplify $2x(x-3)+x(4-x)$.`, "x^2-2*x", String.raw`$2x^2-6x+4x-x^2$.`),
  mx(String.raw`Factor completely: $6x^3-9x^2+3x$.`, "3*x*(2*x^2-3*x+1)", String.raw`GCF $3x$.`),
  mx(String.raw`Factor completely: $10a^2b-15ab^2$.`, "5*a*b*(2*a-3*b)", String.raw`GCF $5ab$.`),
  num(String.raw`Simplify $x(2x+3)-2x^2$, then evaluate at $x=7$.`, 21, String.raw`$3x$; $21$.`),
  mc(String.raw`What is the product shown by this area model?`, "$-6x^2+12x$", ["$-6x^2-12x$", "$6x^2+12x$", "$-6x-12x$"], String.raw`$-3x\cdot2x=-6x^2$; $-3x\cdot(-4)=12x$.`, areaGrid("−3x", ["2x", "−4"], ["?", "?"])),
  ms(String.raw`Which are equivalent to $2(3x-6)$? Select all.`, ["$6x-12$", "$6(x-2)$", "$3(2x-4)$", "$6x-6$", "$2\\cdot3x-6$"], [0, 1, 2], String.raw`All three simplify to $6x-12$.`),
  tf(String.raw`$15-5(x-2)=10(x-2)$`, false, String.raw`Multiply first: $15-5x+10=25-5x$.`),
  mx(String.raw`Simplify $7-3(2-y)+y$.`, "1+4*y", String.raw`$7-6+3y+y$.`),
  num(String.raw`A rectangle $2x$ by $(x+4)$ has a square of side $x$ cut out. Simplify the remaining area, then evaluate at $x=5$.`, 65, String.raw`$2x^2+8x-x^2=x^2+8x$; $25+40=65$.`),
  mx(String.raw`Write an expression for the area of a rectangle with sides $3x$ and $x^2-2x+4$.`, "3*x^3-6*x^2+12*x", String.raw`$3x^3-6x^2+12x$.`),
  mc(String.raw`Find the missing factor: $\square(3x-2)=12x^2-8x$`, "$4x$", ["$4$", "$4x^2$", "$9x$"], String.raw`$12x^2\div3x=4x$.`),
  num(String.raw`Simplify $m^2(m-1)-m(m^2-m)$. What is the result?`, 0, String.raw`$m^3-m^2-m^3+m^2=0$.`),
  mx(String.raw`Simplify $4(x^2-3)-(x^2-5x+2)$.`, "3*x^2+5*x-14", String.raw`$4x^2-12-x^2+5x-2$.`),
  num(String.raw`A rectangle has length $3(x+2)$ and width $2(x-1)$. Find the perimeter when $x=4$.`, 48, String.raw`$2(3x+6+2x-2)=10x+8$; $48$.`),
];
