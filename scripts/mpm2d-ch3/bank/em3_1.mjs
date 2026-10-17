// 3.1 Expanding & Multiplying Polynomials — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc } from "./fig.mjs";

export const E = [
  num(`Expand $3(x+4)$. What is the constant term?`, 12, "$3\\times4$."),
  mc(`Expand $2x(x-5)$.`, "$2x^2-10x$", ["$2x^2-5$", "$2x-10x$", "$x^2-10x$"], "Multiply $2x$ by each term."),
  num(`Expand $(x+2)(x+6)$. What is the coefficient of $x$?`, 8, "$6x+2x$."),
  num(`Expand $(x+2)(x+6)$. What is the constant term?`, 12, "$2\\times6$."),
  mc(`Expand $(x+1)^2$.`, "$x^2+2x+1$", ["$x^2+1$", "$x^2+2x+2$", "$2x+1$"], "$(x+1)(x+1)$."),
  tf(`$(x+5)^2=x^2+25$.`, false, "It is $x^2+10x+25$."),
  num(`Expand $(x-3)(x+3)$. What is the constant term?`, -9, "$-3\\times3$."),
  mc(`Expand $(x-4)(x+4)$.`, "$x^2-16$", ["$x^2+16$", "$x^2-8x-16$", "$x^2-8$"], "The middle terms cancel."),
  num(`Expand $(3x+1)(2x+5)$. What is the coefficient of $x^2$?`, 6, "$3x\\times2x$."),
  num(`Expand $(3x+1)(2x+5)$. What is the coefficient of $x$?`, 17, "$15x+2x$."),
  fill(`$(x+7)(x-7)=x^2-$ ___`, ["49"], "$7^2$."),
  num(`Expand $-(x^2-3x+2)$. What is the constant term?`, -2, "Every sign changes."),
  mc(`Which pair are like terms?`, "$4x$ and $-9x$", ["$4x$ and $4x^2$", "$x^2$ and $x$", "$3$ and $3x$"], "Same variable, same exponent."),
  tf(`$(a-b)^2=a^2-2ab+b^2$.`, true, "The square of a difference."),
  num(`Expand $5(2x-3)$. What is the coefficient of $x$?`, 10, "$5\\times2x$."),
  mc(`Expand $x(x+9)$.`, "$x^2+9x$", ["$x^2+9$", "$2x+9$", "$x+9x$"], "$x\\cdot x+x\\cdot9$."),
  num(`Expand $(x+10)(x+1)$. What is the coefficient of $x$?`, 11, "$x+10x$."),
  num(`Expand $(2x)^2$. What is the coefficient of $x^2$?`, 4, "$2^2x^2$."),
  tf(`Expanding $(x-2)(x+5)$ gives $x^2+3x-10$.`, true, "$5x-2x=3x$, $-2\\times5=-10$."),
  mc(`Which expansion does the area model show?`, "$x^2+6x+8$", ["$x^2+8$", "$x^2+6x+6$", "$2x+6$"], "Add the four cells: $x^2+2x+4x+8$.", areaDoc(["x", "+4"], ["x", "+2"], [["x^2", "2x"], ["4x", "8"]])),
];

export const M = [
  num(`Expand $(3x-4)(2x+5)$. What is the coefficient of $x$?`, 7, "$15x-8x$."),
  num(`Expand $(3x-4)(2x+5)$. What is the constant term?`, -20, "$-4\\times5$."),
  mc(`Expand $(2x-5)^2$.`, "$4x^2-20x+25$", ["$4x^2+25$", "$4x^2-10x+25$", "$2x^2-20x+25$"], "Middle term $2\\times2x\\times(-5)$."),
  mc(`Expand $(4x+7)(4x-7)$.`, "$16x^2-49$", ["$16x^2+49$", "$16x^2-56x-49$", "$8x^2-49$"], "Sum times difference."),
  num(`Expand $2(x+3)(x-1)$. What is the coefficient of $x$?`, 4, "$2(x^2+2x-3)$."),
  num(`Simplify $(x+3)^2-(x+1)^2$. What is the constant term?`, 8, "$(x^2+6x+9)-(x^2+2x+1)=4x+8$."),
  ms(`Select all expressions equal to $x^2-9$.`, ["$(x-3)(x+3)$", "$(3-x)(3+x)$", "$(x+3)(x-3)$", "$(x-3)^2$", "$-(3-x)(x+3)$"], [0, 2, 4], "$(3-x)(3+x)=9-x^2$."),
  num(`A rectangle is $(2x+3)$ by $(x+4)$. Find its area when $x=2$.`, 42, "$7\\times6$."),
  mc(`Simplify $-2x(3x-4)+x(x+1)$.`, "$-5x^2+9x$", ["$-7x^2+9x$", "$-5x^2+7x$", "$5x^2-9x$"], "$-6x^2+8x+x^2+x$."),
  tf(`$(x+y)^2-(x-y)^2=4xy$.`, true, "$x^2+2xy+y^2-(x^2-2xy+y^2)$."),
  num(`Expand $(5x-1)(x+2)$. What is the coefficient of $x$?`, 9, "$10x-x$."),
  fill(`$(x+a)^2=x^2+14x+49$, so $a=$ ___`, ["7"], "$2a=14$."),
  num(`Expand $(x-6)^2$. What is the constant term?`, 36, "$(-6)^2$."),
  mc(`Expand $(x-2)(3x+1)$.`, "$3x^2-5x-2$", ["$3x^2-7x-2$", "$3x^2-5x+2$", "$3x^2+5x-2$"], "$3x^2+x-6x-2$."),
  num(`Write the perimeter of a rectangle $(3x+2)$ by $(x-1)$. What is the coefficient of $x$?`, 8, "$2(3x+2)+2(x-1)=8x+2$."),
  num(`Simplify $(x+4)(x-4)-(x-4)^2$. What is the constant term?`, -32, "$x^2-16-(x^2-8x+16)=8x-32$."),
  tf(`$(3x)^2=3x^2$.`, false, "$(3x)^2=9x^2$."),
  mc(`A square has side $x+6$. Its area is…`, "$x^2+12x+36$", ["$x^2+36$", "$x^2+6x+36$", "$4x+24$"], "$(x+6)^2$."),
  num(`$(ax+2)(x+3)=2x^2+bx+6$. Find $b$.`, 8, "$a=2$; $b=3a+2$."),
  mc(`What does the area model expand to?`, "$2x^2+7x-15$", ["$2x^2-7x-15$", "$2x^2+13x-15$", "$2x^2-15$"], "$2x^2+10x-3x-15$.", areaDoc(["2x", "-3"], ["x", "+5"], [["2x^2", "10x"], ["-3x", "-15"]])),
];
