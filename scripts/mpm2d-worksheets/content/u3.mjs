// MPM2D Unit 3 — Algebraic Expressions & Factoring (worksheets 3.1–3.5)
const r = String.raw;

export default [
{
  code: "3.1", unit: "3: Algebraic Expressions", title: "Expanding \\& Multiplying Polynomials",
  intro: r`\textbf{Expanding} means removing brackets using the distributive property, then collecting like terms.`,
  ideas: [
    r`Distribute: $a(b+c)=ab+ac$.`,
    r`Multiply two binomials with \textbf{FOIL} (First, Outer, Inner, Last).`,
    r`Multiply every term in one bracket by every term in the other.`,
    r`Finish by \textbf{collecting like terms}.`,
  ],
  examples: [
    { t: "Distribute a constant", body: r`Expand $3(x+4)$.
\soln $3(x+4)=3x+12.$` },
    { t: "Negative factor", body: r`Expand $-2(3x-5)$.
\soln $-2(3x-5)=-6x+10.$` },
    { t: "Distribute a monomial", body: r`Expand $x(2x+3)$.
\soln $x(2x+3)=2x^2+3x.$` },
    { t: "FOIL", body: r`Expand $(x+2)(x+5)$.
\soln $x^2+5x+2x+10=x^2+7x+10.$` },
    { t: "Mixed signs", body: r`Expand $(x-3)(x+4)$.
\soln $x^2+4x-3x-12=x^2+x-12.$` },
    { t: "Two leading coefficients", body: r`Expand $(2x+1)(3x-2)$.
\soln $6x^2-4x+3x-2=6x^2-x-2.$` },
    { t: "A perfect square", body: r`Expand $(x+3)^2$.
\soln $(x+3)(x+3)=x^2+3x+3x+9=x^2+6x+9.$` },
    { t: "With a common factor", body: r`Expand and simplify $2(x+1)(x-4)$.
\soln $2(x^2-3x-4)=2x^2-6x-8.$` },
    { t: "Binomial times trinomial (harder)", body: r`Expand $(2x-3)(x^2+x-4)$.
\soln $2x^3+2x^2-8x-3x^2-3x+12=2x^3-x^2-11x+12.$` },
  ],
  questions: [
    { ask: r`Expand $5(x-2)$.`, ws: "1.8cm" },
    { ask: r`Expand $-3(2x+4)$.`, ws: "1.8cm" },
    { ask: r`Expand $2x(x-5)$.`, ws: "1.8cm" },
    { ask: r`Expand $(x+1)(x+6)$.`, ws: "2.0cm" },
    { ask: r`Expand $(x-2)(x-7)$.`, ws: "2.0cm" },
    { ask: r`Expand $(x+3)(x-5)$.`, ws: "2.0cm" },
    { ask: r`Expand $(2x+3)(x+4)$.`, ws: "2.0cm" },
    { ask: r`Expand $(3x-1)(2x+5)$.`, ws: "2.0cm" },
    { ask: r`Expand $(x-6)^2$.`, ws: "2.0cm" },
    { ask: r`Expand and simplify $3(x+2)(x-1)$.`, ws: "2.2cm" },
    { ask: r`Expand $(x+2)(x^2+3x+1)$.`, ws: "2.4cm" },
    { ask: r`Expand and simplify $-(x-4)(x+2)$.`, ws: "2.2cm" },
    { ask: r`Expand $(2x-1)(x^2-3x+2)$.`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`$5x-10$.`, r`$-6x-12$.`, r`$2x^2-10x$.`, r`$x^2+7x+6$.`,
    r`$x^2-9x+14$.`, r`$x^2-2x-15$.`, r`$2x^2+11x+12$.`, r`$6x^2+13x-5$.`,
    r`$x^2-12x+36$.`, r`$3x^2+3x-6$.`, r`$x^3+5x^2+7x+2$.`, r`$-x^2+2x+8$.`,
    r`$2x^3-7x^2+7x-2$.`,
  ],
},
{
  code: "3.2", unit: "3: Algebraic Expressions", title: "Common Factoring \\& Factoring by Grouping",
  intro: r`\textbf{Factoring} reverses expanding. Always start by removing the greatest common factor (GCF).`,
  ideas: [
    r`Find the \textbf{GCF} of the coefficients and the lowest power of each variable.`,
    r`$ab+ac=a(b+c)$; check by expanding.`,
    r`Four terms? Try \textbf{grouping} in pairs and factor each pair.`,
    r`A negative leading term: factor out the negative too.`,
  ],
  examples: [
    { t: "Numeric GCF", body: r`Factor $6x+9$.
\soln GCF $=3$: $6x+9=3(2x+3).$` },
    { t: "Variable GCF", body: r`Factor $4x^2-8x$.
\soln GCF $=4x$: $4x^2-8x=4x(x-2).$` },
    { t: "Higher powers", body: r`Factor $12x^3+18x^2$.
\soln GCF $=6x^2$: $12x^3+18x^2=6x^2(2x+3).$` },
    { t: "Two variables", body: r`Factor $5x^2y+10xy^2$.
\soln GCF $=5xy$: $5xy(x+2y).$` },
    { t: "Negative GCF", body: r`Factor $-3x^2-6x$.
\soln $-3x(x+2).$` },
    { t: "Grouping I", body: r`Factor $x^3+2x^2+3x+6$.
\soln $x^2(x+2)+3(x+2)=(x+2)(x^2+3).$` },
    { t: "Grouping II", body: r`Factor $2x^3-x^2+6x-3$.
\soln $x^2(2x-1)+3(2x-1)=(2x-1)(x^2+3).$` },
    { t: "Grouping with two variables", body: r`Factor $xy+2x+3y+6$.
\soln $x(y+2)+3(y+2)=(x+3)(y+2).$` },
    { t: "Grouping (harder)", body: r`Factor $6x^3-9x^2-4x+6$.
\soln $3x^2(2x-3)-2(2x-3)=(2x-3)(3x^2-2).$` },
  ],
  questions: [
    { ask: r`Factor $8x+12$.`, ws: "1.8cm" },
    { ask: r`Factor $6x^2-9x$.`, ws: "1.8cm" },
    { ask: r`Factor $10x^3+15x^2$.`, ws: "1.8cm" },
    { ask: r`Factor $4a^2b+6ab^2$.`, ws: "2.0cm" },
    { ask: r`Factor $-2x^2-8x$.`, ws: "1.8cm" },
    { ask: r`Factor $x^3+3x^2+2x+6$.`, ws: "2.2cm" },
    { ask: r`Factor $2x^3+x^2+8x+4$.`, ws: "2.2cm" },
    { ask: r`Factor $xy+5x+2y+10$.`, ws: "2.2cm" },
    { ask: r`Factor $3x^3-6x^2+x-2$.`, ws: "2.2cm" },
    { ask: r`Factor $14x^2-21x$.`, ws: "1.8cm" },
    { ask: r`Factor $4x^3+8x^2$.`, ws: "1.8cm" },
    { ask: r`Factor $ab-4a+3b-12$.`, ws: "2.2cm" },
    { ask: r`Factor $6x^3+4x^2-15x-10$.`, ws: "2.6cm", challenge: true },
  ],
  answers: [
    r`$4(2x+3)$.`, r`$3x(2x-3)$.`, r`$5x^2(2x+3)$.`, r`$2ab(2a+3b)$.`,
    r`$-2x(x+4)$.`, r`$(x+3)(x^2+2)$.`, r`$(2x+1)(x^2+4)$.`, r`$(x+2)(y+5)$.`,
    r`$(x-2)(3x^2+1)$.`, r`$7x(2x-3)$.`, r`$4x^2(x+2)$.`, r`$(a+3)(b-4)$.`,
    r`$(3x+2)(2x^2-5)$.`,
  ],
},
{
  code: "3.3", unit: "3: Algebraic Expressions", title: "Factoring Simple Trinomials ($x^2+bx+c$)",
  intro: r`To factor $x^2+bx+c$, find two numbers that \textbf{multiply to $c$} and \textbf{add to $b$}.`,
  ideas: [
    r`List factor pairs of $c$; pick the pair that sums to $b$.`,
    r`$c>0$: both numbers share $b$'s sign. $c<0$: the numbers have opposite signs.`,
    r`Result: $x^2+bx+c=(x+m)(x+n)$ where $mn=c$, $m+n=b$.`,
    r`Always remove a common factor first.`,
  ],
  examples: [
    { t: "Both positive", body: r`Factor $x^2+5x+6$.
\soln $2$ and $3$ multiply to $6$, add to $5$: $(x+2)(x+3)$. The zeros are $x=-2,-3$.
\plot{-5}{2}{-1}{7}{\addplot[exblue,very thick,domain=-4.2:0.7,samples=60]{x^2+5*x+6};\addplot[mark=*,only marks,black]coordinates{(-2,0)(-3,0)};}` },
    { t: "Larger product", body: r`Factor $x^2+7x+12$.
\soln $3,4$: $(x+3)(x+4).$` },
    { t: "Both negative", body: r`Factor $x^2-5x+6$.
\soln $-2,-3$: $(x-2)(x-3).$` },
    { t: "Opposite signs I", body: r`Factor $x^2+x-12$.
\soln $4,-3$: $(x+4)(x-3).$` },
    { t: "Opposite signs II", body: r`Factor $x^2-2x-15$.
\soln $-5,3$: $(x-5)(x+3).$` },
    { t: "Both negative again", body: r`Factor $x^2-9x+20$.
\soln $-4,-5$: $(x-4)(x-5).$` },
    { t: "Negative constant", body: r`Factor $x^2+2x-8$.
\soln $4,-2$: $(x+4)(x-2).$` },
    { t: "Remove a common factor first", body: r`Factor $2x^2+10x+12$.
\soln $2(x^2+5x+6)=2(x+2)(x+3).$` },
    { t: "Bigger numbers (harder)", body: r`Factor $x^2-13x+36$.
\soln $-4,-9$: $(x-4)(x-9).$` },
  ],
  questions: [
    { ask: r`Factor $x^2+6x+8$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2+8x+15$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2-7x+10$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2+2x-15$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2-x-6$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2-10x+24$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2+4x-21$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2-3x-18$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2+9x+20$.`, ws: "1.8cm" },
    { ask: r`Factor $3x^2+12x+9$.`, ws: "2.0cm" },
    { ask: r`Factor $x^2-11x+28$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2+5x-24$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2-14x+45$.`, ws: "2.0cm", challenge: true },
  ],
  answers: [
    r`$(x+2)(x+4)$.`, r`$(x+3)(x+5)$.`, r`$(x-2)(x-5)$.`, r`$(x+5)(x-3)$.`,
    r`$(x-3)(x+2)$.`, r`$(x-4)(x-6)$.`, r`$(x+7)(x-3)$.`, r`$(x-6)(x+3)$.`,
    r`$(x+4)(x+5)$.`, r`$3(x+1)(x+3)$.`, r`$(x-4)(x-7)$.`, r`$(x+8)(x-3)$.`,
    r`$(x-5)(x-9)$.`,
  ],
},
{
  code: "3.4", unit: "3: Algebraic Expressions", title: "Factoring Complex Trinomials ($ax^2+bx+c$)",
  intro: r`For $ax^2+bx+c$ ($a\neq1$), use \textbf{decomposition}: split the middle term, then group.`,
  ideas: [
    r`Find two numbers that multiply to $a\cdot c$ and add to $b$.`,
    r`Rewrite $bx$ as the sum of those two terms.`,
    r`\textbf{Group} into pairs and factor; a common bracket appears.`,
    r`Remove a GCF first if there is one.`,
  ],
  examples: [
    { t: "Positive throughout", body: r`Factor $2x^2+7x+3$.
\soln $a\cdot c=6$; $6+1=7$: $2x^2+6x+x+3=2x(x+3)+1(x+3)=(2x+1)(x+3).$` },
    { t: "Another positive", body: r`Factor $3x^2+10x+3$.
\soln $a\cdot c=9$; $9+1$: $(3x+1)(x+3).$` },
    { t: "Negative constant", body: r`Factor $2x^2+5x-3$.
\soln $a\cdot c=-6$; $6,-1$: $2x^2+6x-x-3=2x(x+3)-1(x+3)=(2x-1)(x+3).$ Zeros $x=\tfrac12,-3$.
\plot{-4}{2}{-7}{6}{\addplot[exblue,very thick,domain=-3.6:1.1,samples=60]{2*x^2+5*x-3};\addplot[mark=*,only marks,black]coordinates{(0.5,0)(-3,0)};}` },
    { t: "Larger leading coefficient", body: r`Factor $6x^2+x-2$.
\soln $a\cdot c=-12$; $4,-3$: $6x^2+4x-3x-2=2x(3x+2)-1(3x+2)=(3x+2)(2x-1).$` },
    { t: "Negative middle", body: r`Factor $4x^2-4x-3$.
\soln $a\cdot c=-12$; $-6,2$: $4x^2-6x+2x-3=2x(2x-3)+1(2x-3)=(2x-3)(2x+1).$` },
    { t: "Remove GCF first", body: r`Factor $6x^2+15x+6$.
\soln $3(2x^2+5x+2)=3(2x+1)(x+2).$` },
    { t: "Two negatives", body: r`Factor $3x^2-11x+6$.
\soln $a\cdot c=18$; $-9,-2$: $3x^2-9x-2x+6=3x(x-3)-2(x-3)=(3x-2)(x-3).$` },
    { t: "Mixed", body: r`Factor $5x^2+13x-6$.
\soln $a\cdot c=-30$; $15,-2$: $5x^2+15x-2x-6=5x(x+3)-2(x+3)=(5x-2)(x+3).$` },
    { t: "Big numbers (harder)", body: r`Factor $8x^2+2x-15$.
\soln $a\cdot c=-120$; $12,-10$: $8x^2+12x-10x-15=4x(2x+3)-5(2x+3)=(2x+3)(4x-5).$` },
  ],
  questions: [
    { ask: r`Factor $2x^2+5x+2$.`, ws: "2.0cm" },
    { ask: r`Factor $3x^2+7x+2$.`, ws: "2.0cm" },
    { ask: r`Factor $2x^2+7x+6$.`, ws: "2.0cm" },
    { ask: r`Factor $2x^2-x-6$.`, ws: "2.0cm" },
    { ask: r`Factor $3x^2-2x-8$.`, ws: "2.2cm" },
    { ask: r`Factor $6x^2+11x+3$.`, ws: "2.2cm" },
    { ask: r`Factor $4x^2+8x+3$.`, ws: "2.0cm" },
    { ask: r`Factor $5x^2-2x-3$.`, ws: "2.2cm" },
    { ask: r`Factor $6x^2-7x-3$.`, ws: "2.2cm" },
    { ask: r`Factor $4x^2-12x+9$.`, ws: "2.0cm" },
    { ask: r`Factor $8x^2+2x-3$.`, ws: "2.2cm" },
    { ask: r`Factor $2x^2+11x+12$.`, ws: "2.2cm" },
    { ask: r`Factor $12x^2+x-6$.`, ws: "2.6cm", challenge: true },
  ],
  answers: [
    r`$(2x+1)(x+2)$.`, r`$(3x+1)(x+2)$.`, r`$(2x+3)(x+2)$.`, r`$(2x+3)(x-2)$.`,
    r`$(3x+4)(x-2)$.`, r`$(2x+3)(3x+1)$.`, r`$(2x+1)(2x+3)$.`, r`$(5x+3)(x-1)$.`,
    r`$(2x-3)(3x+1)$.`, r`$(2x-3)^2$.`, r`$(4x+3)(2x-1)$.`, r`$(x+4)(2x+3)$.`,
    r`$(4x+3)(3x-2)$.`,
  ],
},
{
  code: "3.5", unit: "3: Algebraic Expressions", title: "Special Products",
  intro: r`Two patterns appear constantly: the \textbf{perfect square} $(a\pm b)^2=a^2\pm2ab+b^2$ and the \textbf{difference of squares} $a^2-b^2=(a-b)(a+b)$.`,
  ideas: [
    r`$(a+b)^2=a^2+2ab+b^2$ and $(a-b)^2=a^2-2ab+b^2$ --- don't forget the middle term.`,
    r`$(a-b)(a+b)=a^2-b^2$ --- the middle terms cancel.`,
    r`To factor a difference of squares, take the square root of each term.`,
    r`Recognise perfect-square trinomials: first and last terms are squares and the middle is $2ab$.`,
  ],
  examples: [
    { t: "Square of a sum", body: r`Expand $(x+5)^2$.
\soln $x^2+2(5)x+25=x^2+10x+25.$` },
    { t: "Square of a difference", body: r`Expand $(x-4)^2$.
\soln $x^2-8x+16.$` },
    { t: "Square with a coefficient", body: r`Expand $(2x+3)^2$.
\soln $(2x)^2+2(2x)(3)+9=4x^2+12x+9.$` },
    { t: "Difference of squares (expand)", body: r`Expand $(x-7)(x+7)$.
\soln $x^2-49.$` },
    { t: "With a coefficient", body: r`Expand $(3x-2)(3x+2)$.
\soln $9x^2-4.$` },
    { t: "Factor a difference of squares", body: r`Factor $x^2-16$.
\soln $(x-4)(x+4).$` },
    { t: "Factor with a coefficient", body: r`Factor $9x^2-25$.
\soln $(3x-5)(3x+5).$` },
    { t: "Factor a perfect square", body: r`Factor $x^2+10x+25$.
\soln $(x+5)^2.$` },
    { t: "Combine the tools (harder)", body: r`Factor (a) $50x^2-8$ and (b) $16x^2-24x+9$.
\soln (a) $2(25x^2-4)=2(5x-2)(5x+2)$. (b) $(4x-3)^2.$` },
  ],
  questions: [
    { ask: r`Expand $(x+6)^2$.`, ws: "1.8cm" },
    { ask: r`Expand $(x-3)^2$.`, ws: "1.8cm" },
    { ask: r`Expand $(3x+1)^2$.`, ws: "1.8cm" },
    { ask: r`Expand $(x+8)(x-8)$.`, ws: "1.8cm" },
    { ask: r`Expand $(2x-5)(2x+5)$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2-36$.`, ws: "1.8cm" },
    { ask: r`Factor $4x^2-9$.`, ws: "1.8cm" },
    { ask: r`Factor $x^2-12x+36$.`, ws: "1.8cm" },
    { ask: r`Factor $9x^2+24x+16$.`, ws: "2.0cm" },
    { ask: r`Factor $25x^2-1$.`, ws: "1.8cm" },
    { ask: r`Factor $2x^2-50$.`, ws: "2.0cm" },
    { ask: r`Expand $(4x-3)^2$.`, ws: "1.8cm" },
    { ask: r`Factor completely $81x^4-16$.`, ws: "2.6cm", challenge: true },
  ],
  answers: [
    r`$x^2+12x+36$.`, r`$x^2-6x+9$.`, r`$9x^2+6x+1$.`, r`$x^2-64$.`,
    r`$4x^2-25$.`, r`$(x-6)(x+6)$.`, r`$(2x-3)(2x+3)$.`, r`$(x-6)^2$.`,
    r`$(3x+4)^2$.`, r`$(5x-1)(5x+1)$.`, r`$2(x-5)(x+5)$.`, r`$16x^2-24x+9$.`,
    r`$(9x^2-4)(9x^2+4)=(3x-2)(3x+2)(9x^2+4)$.`,
  ],
},
];
