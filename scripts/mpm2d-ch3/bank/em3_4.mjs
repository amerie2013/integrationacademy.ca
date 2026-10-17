// 3.4 Factoring Complex Trinomials (ax² + bx + c) — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc, parDoc } from "./fig.mjs";

export const E = [
  num(`For $3x^2+7x+2$, what is $a\\cdot c$?`, 6, "$3\\times2$."),
  num(`Two numbers have product $6$ and sum $7$. What is the larger?`, 6, "$1$ and $6$."),
  mc(`Factor fully: $3x^2+7x+2$.`, "$(3x+1)(x+2)$", ["$(3x+2)(x+1)$", "$(3x+7)(x+2)$", "$(x+3)(x+2)$"], "$3x^2+x+6x+2=x(3x+1)+2(3x+1)$."),
  mc(`Factor fully: $2x^2+7x+6$.`, "$(2x+3)(x+2)$", ["$(2x+2)(x+3)$", "$(2x+6)(x+1)$", "$(2x+1)(x+6)$"], "$a\\cdot c=12$: $3$ and $4$."),
  mc(`Factor fully: $5x^2+7x+2$.`, "$(5x+2)(x+1)$", ["$(5x+1)(x+2)$", "$(5x+7)(x+2)$", "$(x+5)(x+2)$"], "$a\\cdot c=10$: $2$ and $5$."),
  fill(`$2x^2+9x+10=(2x+5)(x+$ ___$)$`, ["2"], "$5\\times2=10$."),
  tf(`Decomposition splits the middle term into two terms.`, true, "Then the four terms are grouped."),
  mc(`What is the best first step for $6x^2+12x+6$?`, "take out the common factor 6", ["find $a\\cdot c=36$", "split $12x$ into $6x+6x$", "use the difference of squares"], "GCF first."),
  num(`For $4x^2-4x-3$, what is $a\\cdot c$?`, -12, "$4\\times(-3)$."),
  mc(`Factor fully: $3x^2-5x+2$.`, "$(3x-2)(x-1)$", ["$(3x+2)(x+1)$", "$(3x-1)(x-2)$", "$(3x-2)(x+1)$"], "$a\\cdot c=6$, sum $-5$: $-2$ and $-3$."),
  fill(`$2x^2-7x+3=(2x-1)(x-$ ___$)$`, ["3"], "$-1\\times-3=3$."),
  mc(`Factor fully: $7x^2+8x+1$.`, "$(7x+1)(x+1)$", ["$(7x+8)(x+1)$", "$(x+7)(x+1)$", "$(7x-1)(x-1)$"], "$a\\cdot c=7$: $1$ and $7$."),
  tf(`$2x^2+3x+1=(2x+1)(x+1)$.`, true, "$2x^2+2x+x+1$."),
  num(`To factor $5x^2+11x+2$, split $11x$ using two numbers with product 10. What is the larger number?`, 10, "$10$ and $1$."),
  mc(`Factor fully: $3x^2+x-2$.`, "$(3x-2)(x+1)$", ["$(3x+2)(x-1)$", "$(3x-1)(x+2)$", "$(3x+1)(x-2)$"], "$a\\cdot c=-6$, sum 1: $3$ and $-2$."),
  fill(`$2x^2+x-1=(2x-1)(x+$ ___$)$`, ["1"], "$-1\\times1=-1$."),
  num(`For $6x^2-5x+1$, what is $a\\cdot c$?`, 6, "$6\\times1$."),
  mc(`Factor fully: $6x^2-5x+1$.`, "$(3x-1)(2x-1)$", ["$(6x-1)(x-1)$", "$(3x+1)(2x+1)$", "$(3x-1)(2x+1)$"], "Sum $-5$: $-2$ and $-3$."),
  tf(`$4x^2+4x+1=(2x+1)^2$.`, true, "$a\\cdot c=4$, sum 4: $2$ and $2$."),
  mc(`Which factorization does the area model show?`, "$(x+2)(3x+2)$", ["$(x+2)(3x+4)$", "$(3x+2)(x+4)$", "$(x+6)(3x+2)$"], "Rows $x$, $+2$; columns $3x$, $+2$.", areaDoc(["x", "+2"], ["3x", "+2"], [["3x^2", "2x"], ["6x", "4"]])),
];

export const M = [
  mc(`Factor fully: $5x^2-17x+6$.`, "$(5x-2)(x-3)$", ["$(5x-3)(x-2)$", "$(5x+2)(x+3)$", "$(5x-6)(x-1)$"], "$a\\cdot c=30$, sum $-17$: $-15$ and $-2$."),
  mc(`Factor fully: $4x^2+11x+6$.`, "$(4x+3)(x+2)$", ["$(4x+2)(x+3)$", "$(2x+3)(2x+2)$", "$(4x+6)(x+1)$"], "$a\\cdot c=24$: $8$ and $3$."),
  mc(`Factor fully: $6x^2-x-2$.`, "$(3x-2)(2x+1)$", ["$(3x+2)(2x-1)$", "$(6x-2)(x+1)$", "$(3x-1)(2x+2)$"], "$a\\cdot c=-12$, sum $-1$: $-4$ and $3$."),
  mc(`Factor fully: $10x^2-x-3$.`, "$(5x-3)(2x+1)$", ["$(5x+3)(2x-1)$", "$(10x-3)(x+1)$", "$(5x-1)(2x+3)$"], "$a\\cdot c=-30$, sum $-1$: $-6$ and $5$."),
  mc(`Factor fully: $8x^2+10x+3$.`, "$(4x+3)(2x+1)$", ["$(4x+1)(2x+3)$", "$(8x+3)(x+1)$", "$(2x+3)(4x+1)$"], "$a\\cdot c=24$, sum 10: $6$ and $4$."),
  mc(`Factor fully: $6x^2-19x+10$.`, "$(3x-2)(2x-5)$", ["$(3x-5)(2x-2)$", "$(6x-5)(x-2)$", "$(3x+2)(2x+5)$"], "$a\\cdot c=60$, sum $-19$: $-4$ and $-15$."),
  num(`To factor $12x^2+7x-10$, find two numbers with product $-120$ and sum 7. What is the positive one?`, 15, "$15$ and $-8$."),
  mc(`Factor fully: $12x^2+7x-10$.`, "$(4x+5)(3x-2)$", ["$(4x-5)(3x+2)$", "$(6x+5)(2x-2)$", "$(12x-5)(x+2)$"], "$12x^2+15x-8x-10=3x(4x+5)-2(4x+5)$."),
  fill(`$3x^2+11x-4=(3x-1)(x+$ ___$)$`, ["4"], "$-1\\times4=-4$."),
  mc(`Factor fully: $9x^2-12x+4$.`, "$(3x-2)^2$", ["$(3x+2)^2$", "$(9x-2)(x-2)$", "$(3x-4)(3x-1)$"], "$a\\cdot c=36$, sum $-12$: $-6$, $-6$."),
  mc(`Factor fully: $4x^2-8x+3$.`, "$(2x-1)(2x-3)$", ["$(2x+1)(2x+3)$", "$(4x-3)(x-1)$", "$(2x-1)(2x+3)$"], "$a\\cdot c=12$, sum $-8$: $-2$ and $-6$."),
  tf(`$6x^2+11x+3=(3x+1)(2x+3)$.`, true, "$6x^2+9x+2x+3$."),
  mc(`Factor fully: $18x^2+12x+2$.`, "$2(3x+1)^2$", ["$(6x+2)(3x+1)$", "$2(9x+1)(x+1)$", "$(3x+1)^2$"], "$2(9x^2+6x+1)$."),
  mc(`Factor fully: $2x^2+5xy+3y^2$.`, "$(2x+3y)(x+y)$", ["$(2x+y)(x+3y)$", "$(2x+3)(x+1)y$", "$(x+3y)(2x+y)$"], "$a\\cdot c=6$: $2$ and $3$."),
  num(`$3x^2+kx+4=(3x+2)(x+2)$. Find $k$.`, 8, "$6x+2x$."),
  ms(`Select all trinomials that factor over the integers.`, ["$2x^2+3x+5$", "$2x^2+7x+5$", "$3x^2+4x+1$", "$4x^2+3x+2$", "$6x^2+7x+2$"], [1, 2, 4], "Look for a pair with product $a\\cdot c$ and sum $b$."),
  mc(`Factor fully: $-3x^2-x+2$.`, "$-(3x-2)(x+1)$", ["$-(3x+2)(x-1)$", "$(3x-2)(x+1)$", "$-(3x-1)(x+2)$"], "$-(3x^2+x-2)$."),
  num(`A rectangle has area $6x^2+x-15$ and width $2x-3$. Find its length when $x=2$.`, 11, "Length $3x+5$."),
  fill(`$5x^2-8x-4=(5x+2)(x-$ ___$)$`, ["2"], "$2\\times-2=-4$."),
  num(`The graph of $y=2x^2+bx-6$ crosses the $x$-axis at $2$ and $-1.5$. Find $b$.`, -1, "$(x-2)(2x+3)=2x^2-x-6$.", parDoc((x) => 2 * x * x - x - 6, [2, -1.5], { xmin: -3, xmax: 4, ymin: -8, ymax: 8 })),
];
