// 3.3 Factoring Simple Trinomials (x² + bx + c) — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { parDoc } from "./fig.mjs";

export const E = [
  mc(`Factor fully: $x^2+5x+6$.`, "$(x+2)(x+3)$", ["$(x+1)(x+6)$", "$(x-2)(x-3)$", "$(x+5)(x+1)$"], "Product 6, sum 5."),
  mc(`Factor fully: $x^2+6x+8$.`, "$(x+2)(x+4)$", ["$(x+1)(x+8)$", "$(x+6)(x+2)$", "$(x-2)(x-4)$"], "Product 8, sum 6."),
  mc(`Factor fully: $x^2-7x+12$.`, "$(x-3)(x-4)$", ["$(x+3)(x+4)$", "$(x-2)(x-6)$", "$(x-1)(x-12)$"], "Product $+12$, sum $-7$."),
  mc(`Factor fully: $x^2+2x-15$.`, "$(x+5)(x-3)$", ["$(x-5)(x+3)$", "$(x+15)(x-1)$", "$(x+5)(x+3)$"], "Product $-15$, sum $2$."),
  num(`Two numbers have product $20$ and sum $9$. What is the larger number?`, 5, "$4$ and $5$."),
  num(`Two numbers have product $-18$ and sum $3$. What is the positive number?`, 6, "$6$ and $-3$."),
  fill(`$x^2+9x+14=(x+2)(x+$ ___$)$`, ["7"], "$2\\times7=14$."),
  fill(`$x^2-8x+15=(x-3)(x-$ ___$)$`, ["5"], "$-3\\times-5=15$."),
  tf(`$x^2+4x+4=(x+2)^2$.`, true, "Product 4, sum 4: $2$ and $2$."),
  mc(`Which two numbers have product $24$ and sum $-10$?`, "$-4$ and $-6$", ["$4$ and $6$", "$-3$ and $-8$", "$-2$ and $-12$"], "Both negative."),
  num(`$x^2+11x+30=(x+5)(x+k)$. Find $k$.`, 6, "$5k=30$."),
  mc(`Factor fully: $x^2-x-20$.`, "$(x-5)(x+4)$", ["$(x+5)(x-4)$", "$(x-10)(x+2)$", "$(x-5)(x-4)$"], "Product $-20$, sum $-1$."),
  tf(`$x^2+5x+4=(x+1)(x+4)$.`, true, "$1\\times4=4$, $1+4=5$."),
  mc(`In $x^2+bx+c$ with $c<0$, the two numbers…`, "have opposite signs", ["are both positive", "are both negative", "are equal"], "A negative product needs opposite signs."),
  fill(`$x^2+12x+27=(x+3)(x+$ ___$)$`, ["9"], "$3\\times9=27$."),
  mc(`Factor fully: $x^2-9x+18$.`, "$(x-3)(x-6)$", ["$(x-2)(x-9)$", "$(x+3)(x+6)$", "$(x-3)(x+6)$"], "Product 18, sum $-9$."),
  num(`What is the positive zero of $y=(x-2)(x+6)$?`, 2, "$x-2=0$."),
  tf(`$x^2+3x+1$ factors over the integers.`, false, "Only $1\\times1$ gives product 1, with sum 2."),
  mc(`Factor fully: $x^2+x-6$.`, "$(x+3)(x-2)$", ["$(x-3)(x+2)$", "$(x+6)(x-1)$", "$(x+3)(x+2)$"], "Product $-6$, sum $1$."),
  mc(`The graph has zeros $-1$ and $4$. Which trinomial does it show?`, "$x^2-3x-4$", ["$x^2+3x-4$", "$x^2-5x+4$", "$x^2+5x+4$"], "$(x+1)(x-4)$.", parDoc((x) => x * x - 3 * x - 4, [-1, 4], { xmin: -3, xmax: 6, ymin: -8, ymax: 8 })),
];

export const M = [
  mc(`Factor fully: $x^2-14x+45$.`, "$(x-5)(x-9)$", ["$(x+5)(x+9)$", "$(x-3)(x-15)$", "$(x-5)(x+9)$"], "Product 45, sum $-14$."),
  mc(`Factor fully: $x^2+5x-36$.`, "$(x+9)(x-4)$", ["$(x-9)(x+4)$", "$(x+12)(x-3)$", "$(x+6)(x-6)$"], "Product $-36$, sum 5."),
  mc(`Factor fully: $x^2-6x-27$.`, "$(x-9)(x+3)$", ["$(x+9)(x-3)$", "$(x-27)(x+1)$", "$(x-9)(x-3)$"], "Product $-27$, sum $-6$."),
  mc(`Factor fully: $2x^2+14x+24$.`, "$2(x+3)(x+4)$", ["$(2x+6)(x+4)$", "$2(x+2)(x+6)$", "$(x+3)(x+4)$"], "$2(x^2+7x+12)$."),
  mc(`Factor fully: $5x^2-5x-30$.`, "$5(x-3)(x+2)$", ["$5(x+3)(x-2)$", "$(5x-15)(x+2)$", "$5(x-6)(x+1)$"], "$5(x^2-x-6)$."),
  mc(`Factor fully: $x^2+7xy+12y^2$.`, "$(x+3y)(x+4y)$", ["$(x+2y)(x+6y)$", "$(x+3)(x+4)y^2$", "$(x+12y)(x+y)$"], "Product $12y^2$, sum $7y$."),
  fill(`$x^2-16x+63=(x-7)(x-$ ___$)$`, ["9"], "$7\\times9=63$."),
  num(`$x^2+bx-24=(x+8)(x-3)$. Find $b$.`, 5, "$8-3$."),
  num(`$(x-6)(x+7)=x^2+x+c$. Find $c$.`, -42, "$-6\\times7$."),
  ms(`Select all trinomials that factor over the integers.`, ["$x^2+2x-24$", "$x^2+2x+24$", "$x^2+10x+24$", "$x^2-14x+24$", "$x^2+5x+24$"], [0, 2, 3], "Pairs: $6,-4$; $4,6$; $-2,-12$."),
  mc(`Factor fully: $-x^2+3x+28$.`, "$-(x-7)(x+4)$", ["$-(x+7)(x-4)$", "$(x-7)(x+4)$", "$-(x-14)(x+2)$"], "$-(x^2-3x-28)$."),
  tf(`$x^2-2x-63=(x-9)(x+7)$.`, true, "$-9\\times7=-63$, $-9+7=-2$."),
  num(`What is the positive zero of $y=x^2+x-30$?`, 5, "$(x+6)(x-5)$."),
  mc(`Factor fully: $x^2-xy-56y^2$.`, "$(x-8y)(x+7y)$", ["$(x+8y)(x-7y)$", "$(x-14y)(x+4y)$", "$(x-8)(x+7)y^2$"], "Product $-56y^2$, sum $-y$."),
  num(`$x^2-kx+16=(x-8)(x-2)$. Find $k$.`, 10, "$8+2$."),
  mc(`Factor fully: $3x^2-3x-60$.`, "$3(x-5)(x+4)$", ["$3(x+5)(x-4)$", "$(3x-15)(x+4)$", "$3(x-10)(x+2)$"], "$3(x^2-x-20)$."),
  fill(`$x^2+x-56=(x+8)(x-$ ___$)$`, ["7"], "$8\\times-7=-56$."),
  mc(`A rectangle has area $x^2+13x+40$ and length $x+8$. Its width is…`, "$x+5$", ["$x+4$", "$x+10$", "$x+32$"], "$(x+8)(x+5)$."),
  tf(`$-x^2-5x-6=-(x+2)(x+3)$.`, true, "$-(x^2+5x+6)$."),
  num(`The graph of $y=x^2+bx+c$ has zeros $2$ and $5$. Find $c$.`, 10, "$(x-2)(x-5)=x^2-7x+10$.", parDoc((x) => x * x - 7 * x + 10, [2, 5], { xmin: -1, xmax: 7, ymin: -4, ymax: 10 })),
];
