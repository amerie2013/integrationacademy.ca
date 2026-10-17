// 3.3 Factoring Simple Trinomials (x² + bx + c) — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { parDoc } from "./fig.mjs";

export const TOPIC = "3.3 Factoring Simple Trinomials (x² + bx + c)";
export const Q = [
  num(`How many integers $k$ make $x^2+kx+18$ factorable over the integers?`, 6, "Pairs of 18 give sums $\\pm19$, $\\pm11$, $\\pm9$."),
  num(`What is the largest integer $k$ for which $x^2+kx-20$ factors?`, 19, "$20$ and $-1$."),
  num(`How many positive integers $c$ make $x^2+10x+c$ factorable?`, 5, "$c=9,16,21,24,25$."),
  mc(`Factor fully: $4x^2+20x-56$.`, "$4(x+7)(x-2)$", ["$4(x-7)(x+2)$", "$(4x+28)(x-2)$", "$4(x+14)(x-1)$"], "$4(x^2+5x-14)$."),
  mc(`Factor fully: $(x+1)^2+5(x+1)+6$.`, "$(x+3)(x+4)$", ["$(x+2)(x+3)$", "$(x+1)(x+6)$", "$(x+4)(x+5)$"], "Let $u=x+1$: $(u+2)(u+3)$."),
  mc(`Factor fully: $x^2y^2-3xy-10$.`, "$(xy-5)(xy+2)$", ["$(xy+5)(xy-2)$", "$(x-5)(y+2)$", "$(xy-10)(xy+1)$"], "Treat $xy$ as one variable."),
  num(`A rectangle has area $x^2+15x+56$ and width $x+7$. Find its perimeter when $x=3$.`, 42, "Length $x+8$; perimeter $4x+30$."),
  tf(`If $x^2+bx+c=(x+m)(x+n)$ with $c<0$ and $b<0$, the number with the larger size is negative.`, true, "The sum takes the sign of the larger number."),
  mc(`Factor fully: $a^2-4ab-45b^2$.`, "$(a-9b)(a+5b)$", ["$(a+9b)(a-5b)$", "$(a-15b)(a+3b)$", "$(a-9)(a+5)b^2$"], "Product $-45b^2$, sum $-4b$."),
  num(`What is the positive zero of $y=-x^2+2x+35$?`, 7, "$-(x-7)(x+5)$."),
  fill(`$2x^3+10x^2+12x=2x(x+2)(x+$ ___$)$`, ["3"], "$2x(x^2+5x+6)$."),
  num(`$x^2+bx+36=(x-m)^2$ with $m>0$. Find $b$.`, -12, "$m=6$, $b=-2m$."),
  mc(`Factor fully: $(x-3)^2-(x-3)-12$.`, "$x(x-7)$", ["$(x-7)(x+1)$", "$(x-4)(x+3)$", "$x(x+7)$"], "With $u=x-3$: $(u-4)(u+3)=(x-7)(x)$."),
  ms(`Select all trinomials that have $x=3$ as a zero.`, ["$x^2-5x+6$", "$x^2-x-6$", "$x^2-7x+12$", "$x^2+5x+6$", "$x^2+x-6$"], [0, 1, 2], "Each contains the factor $(x-3)$."),
  num(`$m$ and $n$ are positive integers with $m+n=12$. What is the largest possible $k$ in $(x+m)(x+n)=x^2+12x+k$?`, 36, "$k=mn$ is largest at $6\\times6$."),
  tf(`If $c$ is a prime number, $x^2+bx+c$ factors only when $b=\\pm(c+1)$.`, true, "The only factor pairs of a prime $c$ are $(1,c)$ and $(-1,-c)$."),
  mc(`Factor fully: $-2x^2+16x-30$.`, "$-2(x-3)(x-5)$", ["$-2(x+3)(x+5)$", "$2(x-3)(x-5)$", "$-2(x-2)(x-6)$"], "$-2(x^2-8x+15)$."),
  num(`What is the sum of the zeros of $y=x^2-17x+72$?`, 17, "$(x-8)(x-9)$."),
  num(`A rectangle has area $x^2+10x+24$ and one side $x+4$. Find the other side when $x=5$.`, 11, "Other side $x+6$."),
  mc(`Which trinomial is graphed?`, "$x^2+5x-6$", ["$x^2-5x-6$", "$x^2+7x+6$", "$x^2-5x+6$"], "Zeros $-6$ and $1$: $(x+6)(x-1)$.", parDoc((x) => x * x + 5 * x - 6, [-6, 1], { xmin: -8, xmax: 3, ymin: -14, ymax: 8 }, { x: 1, y: 2 })),
];
