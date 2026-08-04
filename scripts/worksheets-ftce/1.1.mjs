const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.1",
  title: "Polynomial Operations",
  intro: "Polynomials are the language of algebra. This lesson drills the four operations — add, subtract, multiply, and long-divide — at the fluency the FTCE demands.",
  lesson: [
    ["Vocabulary & degree", R`A polynomial is a sum of terms $ax^n$ with whole-number exponents. The <b>degree</b> is the highest exponent and the <b>leading coefficient</b> multiplies it. One, two, and three terms are called a monomial, binomial, and trinomial.`],
    ["Add, subtract, multiply", R`Add or subtract by combining like terms (distribute the minus sign first). Multiply by distributing every term of one factor over every term of the other; degrees add: $\deg(fg)=\deg f+\deg g$.`],
    ["Long division", R`Divide as with integers: divide the leading terms, multiply back, subtract, bring down — stop when the remainder's degree drops below the divisor's. The result satisfies $P = D\cdot Q + R$.`],
  ],
  examples: [
    ["Example 1: Combine", R`Simplify $(3x^2-2x+5)+(x^2+4x-1)-(2x^2-x)$.`, R`Distribute the minus, then collect like terms: $3x^2+x^2-2x^2=2x^2$, $-2x+4x+x=3x$, $5-1=4$. Result $2x^2+3x+4$.`],
    ["Example 2: Binomial × trinomial", R`Expand $(2x-3)(x^2+x-4)$.`, R`$2x(x^2+x-4)=2x^3+2x^2-8x$; $-3(x^2+x-4)=-3x^2-3x+12$. Sum: $2x^3-x^2-11x+12$.`],
    ["Example 3: Binomial cube", R`Expand $(x+2)^3$.`, R`$(a+b)^3=a^3+3a^2b+3ab^2+b^3$: $x^3+3(x^2)(2)+3(x)(4)+8=x^3+6x^2+12x+8$.`],
    ["Example 4: Long division", R`Divide $2x^3-3x^2+4x-1$ by $x-2$.`, R`$2x^3\div x=2x^2$; subtract $2x^3-4x^2$ to get $x^2+4x-1$. $x^2\div x=x$; subtract $x^2-2x$ to get $6x-1$. $6x\div x=6$; subtract $6x-12$ to get $11$. Quotient $2x^2+x+6$, remainder $11$.`],
    ["Example 5: Divide by a monomial", R`Simplify $\dfrac{12x^4y^3-8x^2y}{4x^2y}$.`, R`Split the fraction: $\dfrac{12x^4y^3}{4x^2y}-\dfrac{8x^2y}{4x^2y}=3x^2y^2-2$.`],
  ],
  questions: [
    ["Problem 1", R`Simplify $(x^2+3x-2)+(2x^2-x+5)$.`, R`$3x^2+2x+3$`],
    ["Problem 2", R`Simplify $(4x^2-x+1)-(x^2+3x-4)$.`, R`$3x^2-4x+5$`],
    ["Problem 3", R`Expand $(x-5)(x+5)$.`, R`$x^2-25$`],
    ["Problem 4", R`Expand $(2x+1)(x^2-3x+2)$.`, R`$2x^3-5x^2+x+2$`],
    ["Problem 5", R`Expand $(x-3)^2$.`, R`$x^2-6x+9$`],
    ["Problem 6", R`State the degree and leading coefficient of $-4x^5+2x^3-7$.`, R`degree $5$, leading coefficient $-4$`],
    ["Problem 7", R`Divide $x^3-1$ by $x-1$.`, R`$x^2+x+1$ (remainder $0$)`],
    ["Problem 8", R`Simplify $\dfrac{15x^3-10x^2+5x}{5x}$.`, R`$3x^2-2x+1$`],
  ],
};
