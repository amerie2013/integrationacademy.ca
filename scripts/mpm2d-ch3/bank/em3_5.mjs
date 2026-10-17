// 3.5 Special Products — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { sqDoc, parDoc } from "./fig.mjs";

export const E = [
  mc(`Factor fully: $x^2-25$.`, "$(x-5)(x+5)$", ["$(x-5)^2$", "$(x+5)^2$", "$(x-25)(x+1)$"], "Difference of squares."),
  mc(`Factor fully: $x^2-1$.`, "$(x-1)(x+1)$", ["$(x-1)^2$", "$x(x-1)$", "does not factor"], "$1=1^2$."),
  mc(`Factor fully: $x^2+10x+25$.`, "$(x+5)^2$", ["$(x-5)^2$", "$(x+5)(x-5)$", "$(x+25)(x+1)$"], "$2\\times x\\times5=10x$."),
  mc(`Factor fully: $x^2-4x+4$.`, "$(x-2)^2$", ["$(x+2)^2$", "$(x-2)(x+2)$", "$(x-4)(x-1)$"], "$2\\times x\\times2=4x$."),
  fill(`$x^2-100=(x-10)(x+$ ___$)$`, ["10"], "$100=10^2$."),
  tf(`$x^2+16=(x+4)^2$.`, false, "$(x+4)^2=x^2+8x+16$. A sum of squares does not factor."),
  mc(`Factor fully: $4x^2-49$.`, "$(2x-7)(2x+7)$", ["$(4x-7)(x+7)$", "$(2x-7)^2$", "$(2x-49)(2x+1)$"], "$(2x)^2-7^2$."),
  num(`$x^2-121=(x-a)(x+a)$ with $a>0$. Find $a$.`, 11, "$11^2=121$."),
  tf(`$x^2+6x+9$ is a perfect-square trinomial.`, true, "$(x+3)^2$."),
  mc(`Which is a difference of squares?`, "$x^2-144$", ["$x^2+144$", "$x^2-12$", "$x^3-144$"], "Two perfect squares with a minus."),
  fill(`$x^2+18x+81=(x+$ ___$)^2$`, ["9"], "$81=9^2$ and $2\\times9=18$."),
  num(`Expand $(x+7)^2$. What is the coefficient of $x$?`, 14, "$2\\times7$."),
  mc(`Factor fully: $81-x^2$.`, "$(9-x)(9+x)$", ["$(x-9)(x+9)$", "$(9-x)^2$", "$-(x-9)^2$"], "$9^2-x^2$."),
  tf(`$x^2-8x+16=(x-4)^2$.`, true, "$2\\times x\\times4=8x$."),
  mc(`Factor fully: $100x^2-1$.`, "$(10x-1)(10x+1)$", ["$(10x-1)^2$", "$(100x-1)(x+1)$", "$(50x-1)(2x+1)$"], "$(10x)^2-1^2$."),
  num(`Use a difference of squares to calculate $21\\times19$.`, 399, "$20^2-1^2$."),
  fill(`$x^2-2x+1=(x-$ ___$)^2$`, ["1"], "$2\\times x\\times1=2x$."),
  mc(`Factor fully: $x^2-y^2$.`, "$(x-y)(x+y)$", ["$(x-y)^2$", "$(x+y)^2$", "does not factor"], "Difference of squares."),
  tf(`$(x-6)^2=x^2-36$.`, false, "$(x-6)^2=x^2-12x+36$."),
  mc(`The diagram shows a square of side $3x$ with a square of side $4$ removed. Which factorization matches the remaining area?`, "$(3x-4)(3x+4)$", ["$(3x-4)^2$", "$(3x+4)^2$", "$(9x-4)(x+4)$"], "$9x^2-16$ is a difference of squares.", sqDoc("3x", "4", "9x² − 16")),
];

export const M = [
  mc(`Factor fully: $9x^2-64$.`, "$(3x-8)(3x+8)$", ["$(3x-8)^2$", "$(9x-8)(x+8)$", "$(3x-32)(3x+2)$"], "$(3x)^2-8^2$."),
  mc(`Factor fully: $49a^2-36b^2$.`, "$(7a-6b)(7a+6b)$", ["$(7a-6b)^2$", "$(49a-36b)(a+b)$", "$(7a-36b)(7a+b)$"], "$(7a)^2-(6b)^2$."),
  mc(`Factor fully: $2x^2-32$.`, "$2(x-4)(x+4)$", ["$(2x-8)(x+4)$", "$2(x-4)^2$", "$2(x^2-16)$"], "$2(x^2-16)$ — keep going."),
  mc(`Factor fully: $4x^2+12x+9$.`, "$(2x+3)^2$", ["$(2x-3)^2$", "$(4x+3)(x+3)$", "$(2x+3)(2x-3)$"], "$2\\times2x\\times3=12x$."),
  mc(`Factor fully: $9x^2-42x+49$.`, "$(3x-7)^2$", ["$(3x+7)^2$", "$(3x-7)(3x+7)$", "$(9x-7)(x-7)$"], "$2\\times3x\\times7=42x$."),
  mc(`Factor fully: $3x^2+18x+27$.`, "$3(x+3)^2$", ["$(3x+9)^2$", "$3(x+9)(x+1)$", "$3(x+3)(x-3)$"], "$3(x^2+6x+9)$."),
  num(`For which positive $k$ is $x^2+kx+81$ a perfect square?`, 18, "$2\\times9$."),
  num(`For which $c$ is $x^2-22x+c$ a perfect square?`, 121, "$(22\\div2)^2$."),
  ms(`Select all perfect-square trinomials.`, ["$x^2+20x+100$", "$x^2+10x+20$", "$4x^2-4x+1$", "$x^2-6x-9$", "$16x^2+8x+1$"], [0, 2, 4], "Last term a positive square; middle term $2\\times$ the product of the roots."),
  tf(`$1-36x^2=(1-6x)(1+6x)$.`, true, "$1^2-(6x)^2$."),
  mc(`Factor fully: $\\frac{x^2}{4}-9$.`, "$\\left(\\frac{x}{2}-3\\right)\\left(\\frac{x}{2}+3\\right)$", ["$\\left(\\frac{x}{4}-3\\right)\\left(\\frac{x}{4}+3\\right)$", "$\\left(\\frac{x}{2}-3\\right)^2$", "$\\left(\\frac{x}{2}-9\\right)\\left(\\frac{x}{2}+1\\right)$"], "$\\left(\\frac{x}{2}\\right)^2-3^2$."),
  num(`Use a difference of squares to calculate $63\\times57$.`, 3591, "$60^2-3^2$."),
  num(`Use a perfect square to calculate $49^2$.`, 2401, "$(50-1)^2=2500-100+1$."),
  mc(`Factor fully: $(x+2)^2-9$.`, "$(x-1)(x+5)$", ["$(x+1)(x+5)$", "$(x-1)(x-5)$", "$(x+2)(x-7)$"], "$[(x+2)-3][(x+2)+3]$."),
  fill(`$12x^2-27=3(2x-3)(2x+$ ___$)$`, ["3"], "$3(4x^2-9)$."),
  mc(`Factor fully: $25x^2+20xy+4y^2$.`, "$(5x+2y)^2$", ["$(5x-2y)^2$", "$(25x+2y)(x+2y)$", "$(5x+4y)(5x+y)$"], "$2\\times5x\\times2y=20xy$."),
  tf(`$4x^2+9=(2x+3)^2$.`, false, "$(2x+3)^2=4x^2+12x+9$."),
  num(`A square of side $3$ is cut from a square of side $x+3$. Find the remaining area when $x=2$.`, 16, "$(x+3)^2-9=x(x+6)$; $2\\times8$."),
  mc(`Factor fully: $50-2x^2$.`, "$2(5-x)(5+x)$", ["$2(x-5)(x+5)$", "$(10-2x)(5+x)$", "$2(5-x)^2$"], "$2(25-x^2)$."),
  num(`The graph of $y=x^2-c$ crosses the $x$-axis at $\\pm6$. Find $c$.`, 36, "$(x-6)(x+6)=x^2-36$.", parDoc((x) => x * x - 36, [-6, 6], { xmin: -9, xmax: 9, ymin: -40, ymax: 30 }, { x: 3, y: 10 })),
];
