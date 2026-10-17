// 3.1 Expanding & Multiplying Polynomials — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { sqDoc } from "./fig.mjs";

export const TOPIC = "3.1 Expanding & Multiplying Polynomials";
export const Q = [
  num(`Simplify $(3x+1)^2-(3x-1)^2$. What is the coefficient of $x$?`, 12, "$9x^2+6x+1-(9x^2-6x+1)=12x$."),
  num(`Simplify $(x+5)(x-2)-(x-3)(x+4)$. What is the constant term?`, 2, "$(x^2+3x-10)-(x^2+x-12)=2x+2$."),
  num(`Find $k$ if $(x+k)(x-3)=x^2+2x-15$.`, 5, "$-3k=-15$ and $k-3=2$."),
  num(`$(ax-1)(3x+b)=6x^2+7x-5$. Find $a+b$.`, 7, "$3a=6$, $-b=-5$; middle $ab-3=7$ ✓"),
  mc(`A pool is $x$ m by $2x$ m with a path $3$ m wide around it. The area of the path is…`, "$18x+36$", ["$6x+9$", "$2x^2+18x+36$", "$9x+36$"], "$(x+6)(2x+6)-2x^2$."),
  num(`For what value of $x$ does a square of side $x+3$ have the same area as an $(x+1)$ by $(x+7)$ rectangle?`, 1, "$x^2+6x+9=x^2+8x+7\\Rightarrow2x=2$."),
  tf(`$(x-y)^2=(y-x)^2$ for all $x$ and $y$.`, true, "$y-x=-(x-y)$, and squaring removes the sign."),
  num(`Expand $(3x-2)(x+4)$. What is the sum of its coefficients?`, 5, "$3x^2+10x-8$; or substitute $x=1$: $1\\times5$."),
  ms(`Select all expressions equal to $4x^2-9$.`, ["$(2x-3)(2x+3)$", "$(3-2x)(-3-2x)$", "$(2x-3)^2$", "$-(3-2x)(3+2x)$", "$(4x-3)(x+3)$"], [0, 1, 3], "Check signs: $(3-2x)(-3-2x)=(2x-3)(2x+3)$."),
  num(`A triangle has base $2x+4$ and height $x+3$. Write its area as a polynomial. What is the coefficient of $x$?`, 5, "$\\frac12(2x+4)(x+3)=(x+2)(x+3)=x^2+5x+6$."),
  num(`Simplify $(x+1)^2+(x+2)^2+(x+3)^2$. What is the constant term?`, 14, "$1+4+9$."),
  fill(`$(x-a)^2=x^2-bx+64$ with $a>0$, so $b=$ ___`, ["16"], "$a=8$, $b=2a$."),
  num(`Simplify $(x+3)(2x-1)-2(x-1)^2$. What is the coefficient of $x$?`, 9, "$(2x^2+5x-3)-(2x^2-4x+2)=9x-5$."),
  mc(`A rectangle's length is $x+5$ and its width is $3$ less. Its area is…`, "$x^2+7x+10$", ["$x^2+5x-3$", "$x^2+2x-15$", "$x^2+8x+15$"], "$(x+5)(x+2)$."),
  num(`Use $(a+b)^2$ to calculate $101^2$.`, 10201, "$10\\,000+200+1$."),
  num(`Use $(a+b)(a-b)$ to calculate $47\\times53$.`, 2491, "$50^2-3^2$."),
  tf(`For every value of $x$, $(x+4)^2>x^2+16$.`, false, "At $x=-1$: $9<17$. The difference is $8x$, negative for $x<0$."),
  num(`Find $x$ if $(x+2)^2-x^2=20$.`, 4, "$4x+4=20$."),
  mc(`Expand $\\left(\\frac12x+4\\right)^2$.`, "$\\frac14x^2+4x+16$", ["$\\frac14x^2+16$", "$\\frac12x^2+4x+16$", "$\\frac14x^2+8x+16$"], "Middle term $2\\times\\frac12x\\times4=4x$."),
  num(`The diagram shows a square of side $x+6$ with a square of side $x$ removed. Find the remaining area when $x=4$.`, 84, "$(x+6)^2-x^2=12x+36$; at $x=4$: $84$.", sqDoc("x + 6", "x", "remaining area")),
];
