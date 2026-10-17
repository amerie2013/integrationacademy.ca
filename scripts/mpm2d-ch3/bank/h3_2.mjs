// 3.2 Common Factoring & Factoring by Grouping — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc } from "./fig.mjs";

export const TOPIC = "3.2 Common Factoring & Factoring by Grouping";
export const Q = [
  mc(`Factor fully: $18a^3b^2-27a^2b^3+9a^2b^2$.`, "$9a^2b^2(2a-3b+1)$", ["$9a^2b^2(2a-3b)$", "$9ab(2a^2b-3ab^2+ab)$", "$3a^2b^2(6a-9b+3)$"], "GCF $9a^2b^2$; the last term leaves 1."),
  mc(`Factor fully: $6xy-4x-9y+6$.`, "$(3y-2)(2x-3)$", ["$(3y+2)(2x-3)$", "$(3y-2)(2x+3)$", "$(2y-3)(3x-2)$"], "$2x(3y-2)-3(3y-2)$."),
  mc(`Factor fully: $2x(x-3)-5(3-x)$.`, "$(x-3)(2x+5)$", ["$(x-3)(2x-5)$", "$(3-x)(2x-5)$", "$(x+3)(2x+5)$"], "$-5(3-x)=5(x-3)$."),
  num(`Factor $a^2-ab+3a-3b$ and evaluate it for $a=5$, $b=2$.`, 24, "$(a-b)(a+3)=3\\times8$."),
  fill(`$x^3-4x^2+x-4=(x-4)(x^2+$ ___$)$`, ["1"], "$x^2(x-4)+1(x-4)$."),
  mc(`Factor fully: $-15x^3-10x^2+5x$ with a negative common factor.`, "$-5x(3x^2+2x-1)$", ["$-5x(3x^2-2x+1)$", "$-5x(3x^2+2x+1)$", "$5x(-3x^2-2x-1)$"], "Every sign inside changes."),
  tf(`$x(x-3)+2(x-3)=(x-3)(x+2)$.`, true, "Common bracket $(x-3)$."),
  num(`A rectangle has area $8x^2+12x$ and length $4x$. Find its width when $x=3$.`, 9, "Width $2x+3$."),
  ms(`Select all expressions equal to $(a+b)(c-d)$.`, ["$ac-ad+bc-bd$", "$ac+bc-ad-bd$", "$ac-bd$", "$a(c-d)+b(c-d)$", "$(c-d)a-(c-d)b$"], [0, 1, 3], "Expand, or factor the grouped forms."),
  num(`The GCF of $2x(x+1)^2$ and $6x^2(x+1)$ is $2x(x+1)$. Evaluate the GCF for $x=2$.`, 12, "$2(2)(3)$."),
  fill(`$18x^3-12x^2=6x^2(3x-$ ___$)$`, ["2"], "$12x^2\\div6x^2$."),
  mc(`The surface area of a cone is $\\pi r^2+\\pi rs$. Factored, it is…`, "$\\pi r(r+s)$", ["$\\pi(r^2+rs)$", "$\\pi r^2(1+s)$", "$r(\\pi r+s)$"], "GCF $\\pi r$."),
  num(`Factor $5ab+15a+2b+6$ and evaluate for $a=1$, $b=1$.`, 28, "$(b+3)(5a+2)=4\\times7$."),
  tf(`Every polynomial has a common factor other than 1.`, false, "For example $x^2+3$ has none."),
  mc(`Find the missing term: $12x^3-\\square=4x^2(3x-5)$.`, "$20x^2$", ["$5x^2$", "$20x$", "$15x^2$"], "$4x^2\\times5$."),
  num(`$6x^2+kx=3x(2x+5)$. Find $k$.`, 15, "$3x\\times5$."),
  mc(`Factor fully: $x^2y+xy^2+x+y$.`, "$(x+y)(xy+1)$", ["$xy(x+y)$", "$(x+1)(y+1)$", "$(x+y)^2$"], "$xy(x+y)+1(x+y)$."),
  num(`$4x^2-12x=4x(x-3)$. Find the sum of the values of $x$ that make it zero.`, 3, "$x=0$ or $x=3$."),
  mc(`Which is NOT fully factored?`, "$2x(4x+6)$", ["$4x(2x+3)$", "$2(2x+5)$", "$x(x+7)$"], "$4x+6$ still has the factor 2."),
  num(`The area model shows $3x^2+4x+6x+8$. One side is $x+2$; the other is $3x+k$. Find $k$.`, 4, "$x\\times k=4x$.", areaDoc(["x", "+2"], ["3x", "?"], [["3x^2", "4x"], ["6x", "8"]])),
];
