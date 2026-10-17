// 3.4 Factoring Complex Trinomials (ax² + bx + c) — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc } from "./fig.mjs";

export const TOPIC = "3.4 Factoring Complex Trinomials (ax² + bx + c)";
export const Q = [
  mc(`Factor fully: $15x^2+14x-8$.`, "$(5x-2)(3x+4)$", ["$(5x+2)(3x-4)$", "$(15x-4)(x+2)$", "$(5x+4)(3x-2)$"], "$a\\cdot c=-120$, sum 14: $20$ and $-6$."),
  mc(`Factor fully: $12x^2-17x+6$.`, "$(4x-3)(3x-2)$", ["$(4x-2)(3x-3)$", "$(6x-3)(2x-2)$", "$(4x+3)(3x+2)$"], "$a\\cdot c=72$, sum $-17$: $-8$ and $-9$."),
  mc(`Factor fully: $20x^2+x-12$.`, "$(5x+4)(4x-3)$", ["$(5x-4)(4x+3)$", "$(10x+4)(2x-3)$", "$(20x-3)(x+4)$"], "$a\\cdot c=-240$, sum 1: $16$ and $-15$."),
  num(`How many integers $k$ make $3x^2+kx+2$ factorable?`, 4, "$a\\cdot c=6$: sums $\\pm7$, $\\pm5$."),
  num(`How many integers $k$ make $4x^2+kx-3$ factorable?`, 6, "$a\\cdot c=-12$: sums $\\pm11$, $\\pm4$, $\\pm1$."),
  mc(`Factor fully: $6x^2y^2+xy-2$.`, "$(3xy+2)(2xy-1)$", ["$(3xy-2)(2xy+1)$", "$(6xy-1)(xy+2)$", "$(3x+2)(2y-1)$"], "Treat $xy$ as one variable: $a\\cdot c=-12$, sum 1."),
  mc(`Factor fully: $2(x+1)^2+5(x+1)-3$.`, "$(2x+1)(x+4)$", ["$(2x-1)(x+3)$", "$(2x+3)(x+2)$", "$(2x+1)(x+3)$"], "With $u=x+1$: $(2u-1)(u+3)$."),
  tf(`$6x^2+5x+1=(6x+1)(x+1)$.`, false, "That expands to $6x^2+7x+1$; the correct factoring is $(3x+1)(2x+1)$."),
  mc(`Factor fully: $-6x^2+7x+3$.`, "$-(2x-3)(3x+1)$", ["$-(2x+3)(3x-1)$", "$(2x-3)(3x+1)$", "$-(6x-1)(x+3)$"], "$-(6x^2-7x-3)$; $a\\cdot c=-18$: $-9$ and $2$."),
  num(`A rectangle has area $12x^2+5x-2$ and length $4x-1$. Find its perimeter when $x=1$.`, 16, "Width $3x+2$; $2(3+5)$."),
  fill(`$24x^2+2x-15=(6x+5)(4x-$ ___$)$`, ["3"], "$5\\times(-3)=-15$; check $-18x+20x=2x$."),
  mc(`Factor fully: $9x^2-30xy+25y^2$.`, "$(3x-5y)^2$", ["$(3x+5y)^2$", "$(9x-5y)(x-5y)$", "$(3x-5y)(3x+5y)$"], "$a\\cdot c=225$, sum $-30$: $-15$, $-15$."),
  num(`What is the largest positive integer $c$ for which $5x^2+12x+c$ factors?`, 7, "Pairs summing to 12 with product a multiple of 5: $(2,10)\\to c=4$, $(5,7)\\to c=7$."),
  tf(`If $ax^2+bx+c$ factors over the integers, then $b^2-4ac$ is a perfect square.`, true, "For $(px+q)(rx+s)$, $b^2-4ac=(ps-qr)^2$."),
  mc(`Factor fully: $8x^3-2x^2-3x$.`, "$x(4x-3)(2x+1)$", ["$x(4x+3)(2x-1)$", "$(4x^2-3x)(2x+1)$", "$x(8x-3)(x+1)$"], "$x(8x^2-2x-3)$; $a\\cdot c=-24$: $-6$ and $4$."),
  num(`What is the larger zero of $y=3x^2-10x+3$?`, 3, "$(3x-1)(x-3)$."),
  num(`What is the negative zero of $y=2x^2+x-10$?`, -2.5, "$(2x+5)(x-2)$."),
  ms(`Select all expressions equal to $6x^2-13x+6$.`, ["$(2x-3)(3x-2)$", "$(3x-2)(2x-3)$", "$(3-2x)(2-3x)$", "$(6x-1)(x-6)$", "$-(2x-3)(2-3x)$"], [0, 1, 2, 4], "$(6x-1)(x-6)=6x^2-37x+6$."),
  mc(`Factor fully: $14x^2-31x+15$.`, "$(7x-5)(2x-3)$", ["$(7x-3)(2x-5)$", "$(14x-5)(x-3)$", "$(7x+5)(2x+3)$"], "$a\\cdot c=210$, sum $-31$: $-21$ and $-10$."),
  num(`The area model splits $6x^2+23x+20$ as $6x^2+15x+8x+20$. The sides are $2x+5$ and $3x+k$. Find $k$.`, 4, "$5\\times k=20$.", areaDoc(["2x", "+5"], ["3x", "?"], [["6x^2", "8x"], ["15x", "20"]])),
];
