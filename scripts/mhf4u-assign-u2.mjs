// MHF4U Unit 2 assignments — Polynomial Equations & Inequalities.
const r = String.raw;

export const U2 = {
  "2.1": {
    topic: "Dividing Polynomials",
    K: [
      r`Use long division to divide $2x^3+3x^2-5x+6$ by $x+3$. State the quotient and the remainder, and write the division statement.`,
      r`Use synthetic division to divide $x^3-7x-6$ by $x+2$ (remember the missing $x^2$ term). State the quotient and remainder, say whether $x+2$ is a factor, and factor the polynomial completely.`,
      r`Divide $x^4-3x^2+x+5$ by $x-2$. Write the result as $P(x)=(x-2)Q(x)+R$ and check your division statement by substituting $x=0$ into both sides.`,
    ],
    T: [
      r`(a) Divide $6x^3+x^2-10x+4$ by $2x-1$ using long division. (b) Explain how synthetic division can be adapted to a divisor such as $2x-1$, and use it to confirm your quotient.`,
      r`When a polynomial $P(x)$ is divided by $x+1$, the quotient is $x^2-4x+3$ and the remainder is $-2$. (a) Find $P(x)$ in expanded form. (b) Verify the remainder by evaluating $P(-1)$. (c) Is $x+1$ a factor of $P(x)$? Explain.`,
    ],
    C: [
      r`Using the division statement $P(x)=D(x)Q(x)+R(x)$, explain why a remainder of 0 means the divisor is a factor, and why the remainder must have a smaller degree than the divisor.`,
      r`Write a step-by-step explanation of synthetic division for $(x^3+2x^2-5x-6)\div(x-2)$. Explain what each row and each number represents and how to read the quotient and the remainder from the last row.`,
    ],
    A: [
      r`The volume of a packing crate, in cubic decimetres, is $V(x)=x^3+6x^2+11x+6$ and its height is $x+3$ dm. (a) Divide to find an expression for the area of the base. (b) Factor the base area to find expressions for the length and width. (c) For $x=2$, find the three dimensions and confirm that their product equals $V(2)$.`,
      r`The revenue, in dollars, from a school concert is $R(x)=6x^3+19x^2+19x+6$, where the ticket price is $2x+3$ dollars. (a) Divide to find an expression for the attendance. (b) For $x=4$, find the ticket price and the attendance. (c) Confirm that $R(4)$ equals price times attendance.`,
      r`A planter has volume $V(x)=x^3+4x^2-x-6$ cubic metres, and soil is delivered in loads of $(x+2)$ cubic metres. (a) Divide to find the number of full loads (the quotient) and the volume left over (the remainder). (b) For $x=3$, state the volume, the load size and the number of full loads plus leftover. (c) Explain what the remainder means in this context.`,
    ],
  },

  "2.2": {
    topic: "Remainder & Factor Theorems",
    K: [
      r`Use the Remainder Theorem to find the remainder when $P(x)=x^4-3x^2+2x-5$ is divided by $x+2$. Show the substitution.`,
      r`Use the Factor Theorem to decide which of $(x-1)$, $(x+2)$ and $(x-3)$ are factors of $P(x)=x^3-6x^2+11x-6$, and then factor $P(x)$ completely.`,
      r`List every possible rational zero of $P(x)=2x^3-3x^2-11x+6$ using the Rational Root Theorem, and find one zero by testing.`,
    ],
    T: [
      r`When $P(x)=x^3+ax^2+bx-6$ is divided by $x-1$ the remainder is $-4$, and $x+1$ is a factor of $P(x)$. Find $a$ and $b$.`,
      r`For $P(x)=x^3-2x^2-2x+4$, (a) list the possible rational zeros and find the rational zero, (b) factor $P(x)$ completely and find all its zeros, and (c) explain why the other two zeros did not appear in your list.`,
    ],
    C: [
      r`State the Remainder Theorem and the Factor Theorem in your own words, and explain why the Factor Theorem is a special case of the Remainder Theorem.`,
      r`Explain how the Rational Root Theorem limits the candidates for zeros of a polynomial with integer coefficients, what you do after you find one zero, and why the theorem alone cannot find every zero.`,
    ],
    A: [
      r`A shipping box has volume $V(x)=x^3+2x^2-5x-6$ cubic centimetres. (a) Use the Factor Theorem to show that $x+1$ is a dimension. (b) Find the other two dimensions. (c) If the shortest dimension must be at least 3 cm, find the smallest whole value of $x$ and the volume for that value.`,
      r`A drone's vertical displacement from a ledge (in metres) after $t$ seconds is $h(t)=t^3-7t^2+14t-8$. (a) Use the Rational Root Theorem to find the times when the drone is level with the ledge. (b) Use a sign chart to state when the drone is above the ledge and when it is below. (c) Explain what a repeated zero would have meant for the drone's motion.`,
      r`A company's profit in thousands of dollars from selling $x$ hundred units is $P(x)=x^3-8x^2+19x-12$. (a) Find the break-even sales levels using the Factor Theorem. (b) State the sales levels for which the company makes a profit. (c) The model predicts unlimited profit for large sales. Use end behaviour to explain why that is unrealistic.`,
    ],
  },

  "2.3": {
    topic: "Solving Polynomial Equations",
    K: [
      r`Solve by factoring: (a) $x^3-25x=0$ (b) $x^3+2x^2-5x-6=0$. For (b), start by testing small integers.`,
      r`Solve $x^4-10x^2+9=0$ by treating it as a quadratic in $x^2$. State all real solutions.`,
      r`Solve $x^3-3x^2-4x+12=0$ by grouping, and state how many real solutions there are.`,
    ],
    T: [
      r`A student solves $x^3=36x$ by dividing both sides by $x$ and gets $x=6$ or $x=-6$. Explain what went wrong, then solve the equation correctly.`,
      r`A cubic equation has roots $-2$, $1$ and $4$, and its graph passes through $(0,16)$. Determine the equation in expanded form and explain how you found the leading coefficient.`,
    ],
    C: [
      r`Write a complete, well-organized solution to $x^3-13x+12=0$: state your strategy, show the test for a first root, the division, the factoring, the roots and a check. Explain the reason for each step.`,
      r`Explain how the number of real roots of a polynomial equation is related to the degree of the polynomial, the number of $x$-intercepts of its graph and the multiplicity of each root. Give one example with a repeated root.`,
    ],
    A: [
      r`An open-top box is made from a 30 cm by 24 cm sheet by cutting a square of side $x$ cm from each corner, so $V(x)=x(30-2x)(24-2x)$. (a) Write the equation for a volume of 1296 cubic centimetres. (b) Solve it using the Rational Root Theorem. (c) State which solutions make sense in this context and describe the two boxes that result.`,
      r`A road climbs a hill so that its height above the starting point, in metres, at $x$ hundred metres along the road is $h(x)=x^3-12x^2+36x$ for $0\le x\le 8$. (a) Find where the road is level with the start. (b) Solve $h(x)=32$ and interpret the repeated root. (c) What is the greatest height above the start on this stretch?`,
      r`The length, width and height of a cargo container are three consecutive whole numbers of metres, and its volume is 60 cubic metres. (a) Write and simplify an equation for the smallest dimension $x$. (b) Solve it and state the dimensions. (c) Explain why the other roots of the cubic do not give a container.`,
    ],
  },

  "2.4": {
    topic: "Polynomial Inequalities",
    K: [
      r`Solve $(x+4)(x-1)>0$ and write the solution using interval notation.`,
      r`Solve $x^2-2x-8\le 0$ and write the solution using interval notation. Explain why the end values are included.`,
      r`Use a sign chart to solve $(x+2)(x-1)(x-4)<0$.`,
    ],
    T: [
      r`Solve (a) $(x+2)^2(x-5)\le 0$ and (b) $(x+2)^2(x-5)<0$. Explain why the sign does not change at $x=-2$, and why the two answers are different at that one value.`,
      r`Solve $x^3\ge 9x$. Explain why dividing both sides by $x$ is not allowed, and show what solutions would be lost if you did.`,
    ],
    C: [
      r`Explain the steps for solving a polynomial inequality algebraically (zeros, intervals, test points, interpreting the inequality symbol), and explain when the end values of an interval are included and when they are not.`,
      r`A student writes: "$x^2>25$ means $x>5$." Explain the error, give the correct solution and describe how you would show it on a number line and on a graph of $y=x^2-25$.`,
    ],
    A: [
      r`A ball is thrown straight up from the ground and its height in metres after $t$ seconds is $h(t)=-5t^2+20t$. (a) For what times is the ball more than 15 m high? (b) For how long is it above 15 m? (c) Explain, using the symmetry of the parabola, why the interval you found is centred where it is.`,
      r`A rectangular garden has a length that is 3 m more than its width $w$. The area must be at least 18 square metres and at most 40 square metres. (a) Write the two inequalities in $w$. (b) Solve them. (c) State the possible widths and the corresponding range of lengths.`,
      r`A survey drone flies across a canyon. Its height in metres relative to the rim after $t$ minutes is $h(t)=t^3-8t^2+12t$ for $0\le t\le 8$, where negative values mean the drone is below the rim. (a) Solve $h(t)>0$ and interpret the answer. (b) Complete a table for $t=3,4,5$ to estimate how far below the rim the drone goes. (c) Explain how the graph of $h$ shows the same information as your sign chart.`,
    ],
  },
};
