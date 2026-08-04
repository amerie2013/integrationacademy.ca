const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.2",
  title: "Factoring",
  intro: "Factoring reverses multiplication and underlies solving equations, simplifying rationals, and graphing. This lesson covers the full pattern catalog and factoring completely.",
  lesson: [
    ["The factoring toolkit", R`Always pull out the <b>GCF</b> first. Then match a pattern: difference of squares $a^2-b^2=(a-b)(a+b)$; sum/difference of cubes $a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)$; perfect-square trinomial $a^2\pm 2ab+b^2=(a\pm b)^2$.`],
    ["Trinomials", R`For $x^2+bx+c$ find two numbers multiplying to $c$ and adding to $b$. For $ax^2+bx+c$ use the <b>AC method</b>: split the middle term with two numbers whose product is $ac$ and sum is $b$, then factor by grouping.`],
    ["Factor completely", R`Keep going until every factor is prime over the reals. A difference of squares can hide inside a GCF: $2x^4-32=2(x^4-16)=2(x^2-4)(x^2+4)=2(x-2)(x+2)(x^2+4)$.`],
  ],
  examples: [
    ["Example 1: Difference of squares", R`Factor $9x^2-25$.`, R`$(3x)^2-5^2=(3x-5)(3x+5)$.`],
    ["Example 2: Trinomial, $a=1$", R`Factor $x^2-x-12$.`, R`Two numbers with product $-12$, sum $-1$: $-4$ and $3$. $(x-4)(x+3)$.`],
    ["Example 3: AC method", R`Factor $6x^2+7x-3$.`, R`$ac=-18$; split $7=9-2$: $6x^2+9x-2x-3=3x(2x+3)-1(2x+3)=(2x+3)(3x-1)$.`],
    ["Example 4: Sum of cubes", R`Factor $8x^3+27$.`, R`$(2x)^3+3^3=(2x+3)\big((2x)^2-(2x)(3)+3^2\big)=(2x+3)(4x^2-6x+9)$.`],
    ["Example 5: Factor completely", R`Factor $2x^4-32$.`, R`GCF $2$: $2(x^4-16)=2(x^2-4)(x^2+4)=2(x-2)(x+2)(x^2+4)$.`],
  ],
  questions: [
    ["Problem 1", R`Factor $x^2-16$.`, R`$(x-4)(x+4)$`],
    ["Problem 2", R`Factor $x^2+8x+15$.`, R`$(x+3)(x+5)$`],
    ["Problem 3", R`Factor $2x^2+5x-3$.`, R`$(2x-1)(x+3)$`],
    ["Problem 4", R`Factor $x^3-27$.`, R`$(x-3)(x^2+3x+9)$`],
    ["Problem 5", R`Factor $12x^3y-18x^2y^2$.`, R`$6x^2y(2x-3y)$`],
    ["Problem 6", R`Factor $x^3+2x^2-9x-18$ by grouping.`, R`$(x+2)(x-3)(x+3)$`],
    ["Problem 7", R`Factor $9x^2-24x+16$.`, R`$(3x-4)^2$`],
    ["Problem 8", R`Factor completely $3x^2-27$.`, R`$3(x-3)(x+3)$`],
  ],
};
