// Worksheet 1.3 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate (a) $(-9)(4)$ \quad (b) $(-8)(-11)$.`, recap: String.raw`$(-9)(4)$; $(-8)(-11)$.`, ans: "(a) $-36$ (b) $88$" },
  { level: 1, q: String.raw`Evaluate (a) $-63\div(-9)$ \quad (b) $120\div(-8)$.`, recap: String.raw`$-63\div(-9)$; $120\div(-8)$.`, ans: "(a) $7$ (b) $-15$" },
  { level: 1, q: String.raw`Predict the sign, then evaluate $(-2)(-3)(-4)(5)$.`, ans: "negative; $-120$" },
  { level: 2, q: String.raw`Evaluate $7-2(-6)$.`, ans: "$19$" },
  { level: 2, q: String.raw`Evaluate $-36\div(-4)\times(-3)$.`, ans: "$-27$" },
  { level: 2, q: String.raw`Evaluate $(-5)^2-3(-4)+(-10)\div2$.`, ans: "$32$" },
  { level: 2, q: String.raw`Evaluate $4a-b^2$ when $a=-2$ and $b=-3$.`, ans: "$-17$" },
  { level: 2, q: String.raw`A diver descends $4$ m every $30$ seconds from the surface. Write and evaluate an expression for her position after $3$ minutes.`, recap: "Diver: 4 m per 30 s for 3 min.", ans: String.raw`$6\times(-4)=-24$ m` },
  { level: 3, space: 5,
    q: String.raw`Evaluate each expression when $x=-2$ and $y=-3$.
(a) $x^3-y^2$ \quad (b) $(xy)^2$ \quad (c) $-x^2y$ \quad (d) $(x-y)(x+y)$
(e) Which expression has the greatest value? Which has the least?`,
    recap: String.raw`$x=-2,y=-3$: $x^3-y^2$, $(xy)^2$, $-x^2y$, $(x-y)(x+y)$.`,
    ans: String.raw`(a) $-17$ (b) $36$ (c) $12$ (d) $-5$ (e) greatest (b), least (a).` },
  { level: 3, space: 5,
    q: String.raw`Let $b$ and $n$ be positive integers.
(a) Is $(-b)^n$ positive, negative or zero when $n$ is odd? When $n$ is even? Explain.
(b) Compare $(-b)^n$ with $-b^n$ in each case.
(c) Use your rules to give the sign of $(-7)^{15}$, $-7^{16}$ and $(-7)^{16}$ without calculating.`,
    recap: String.raw`Signs of $(-b)^n$ and $-b^n$ for odd and even $n$.`,
    ans: String.raw`(a) odd: negative; even: positive (pairs of negatives) (b) odd: equal; even: opposites (c) negative, negative, positive.` },
  { level: 3, space: 5,
    q: String.raw`Find integers $\square$ and $\triangle$ for each pair of conditions.
(a) $\square\times\triangle=-24$ and $\square+\triangle=-2$
(b) $\square\times\triangle=36$ and $\square+\triangle=-13$
(c) Explain how the signs of the product and the sum told you the signs of $\square$ and $\triangle$.`,
    recap: "Find two integers from their product and sum.",
    ans: String.raw`(a) $4$ and $-6$ (b) $-4$ and $-9$ (c) negative product: different signs; positive product and negative sum: both negative.` },
  { level: 3, space: 5,
    q: String.raw`A $30$-question contest gives $+5$ for a correct answer, $-2$ for a wrong answer and $0$ for a blank.
(a) Jo has $18$ correct and $8$ wrong. What is her score?
(b) Max answered all $30$ and scored $66$. How many did he get right?
(c) Is a score of $149$ possible? Explain.`,
    recap: "Contest +5 / −2 / 0: Jo's score; Max's correct answers; is 149 possible?",
    ans: String.raw`(a) $74$ (b) $5c-2(30-c)=66$, $c=18$ (c) no: $30$ correct gives $150$; $29$ correct gives at most $145$.` },
  { level: 3, space: 5,
    q: String.raw`At noon it is $5\,^\circ$C. The temperature falls $4$ degrees each hour until 6 p.m., then rises $1$ degree each hour.
(a) What is the temperature at 6 p.m.?
(b) What is it at 11 p.m.?
(c) Find the mean of the hourly readings from noon to 6 p.m.\ (seven readings).`,
    recap: String.raw`Noon $5\,^\circ$C, $-4$/h to 6 p.m., then $+1$/h.`,
    ans: String.raw`(a) $5+6(-4)=-19\,^\circ$C (b) $-14\,^\circ$C (c) $(5+1-3-7-11-15-19)\div7=-7\,^\circ$C.` },
];
