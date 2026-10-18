// 5.1 Solving Quadratic Equations by Factoring — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { parDoc, rectDoc } from "./fig.mjs";

export const E = [
  num(`Solve $(x-4)(x+9)=0$. Enter the positive root.`, 4, "$x-4=0$."),
  num(`Solve $(x+6)(x-2)=0$. Enter the negative root.`, -6, "$x+6=0$."),
  mc(`What are the roots of $x^2-5x+6=0$?`, "$2$ and $3$", ["$-2$ and $-3$", "$1$ and $6$", "$-1$ and $-6$"], "$(x-2)(x-3)=0$."),
  num(`Find the larger root of $x^2+3x-4=0$.`, 1, "$(x+4)(x-1)=0$."),
  tf(`To solve $x^2+4x=5$, you can factor the left side as $x(x+4)=5$ and set each factor equal to $5$.`, false, "One side must be 0 first: $x^2+4x-5=0$."),
  mc(`What is the first step in solving $x^2=8x-15$ by factoring?`, "move every term to one side: $x^2-8x+15=0$", ["divide both sides by $x$", "take the square root of both sides", "factor $8x-15$"], "The zero product property needs 0 on one side."),
  num(`Solve $x^2-49=0$. Enter the positive root.`, 7, "$(x-7)(x+7)=0$."),
  num(`Solve $x^2-11x=0$. Enter the non-zero root.`, 11, "$x(x-11)=0$."),
  fill(`$x^2+10x+25=0$ has the double root $x=$ ___.`, ["-5", "−5"], "$(x+5)^2=0$."),
  tf(`If $(x-3)(x+1)=0$, then $x=3$ or $x=-1$.`, true, "Zero product property."),
  mc(`Which equation has the roots $5$ and $-2$?`, "$(x-5)(x+2)=0$", ["$(x+5)(x-2)=0$", "$(x-5)(x-2)=0$", "$(x+5)(x+2)=0$"], "Root 5 comes from $x-5=0$."),
  num(`Find the smaller root of $x^2-8x+12=0$.`, 2, "$(x-2)(x-6)=0$."),
  num(`How many different roots does $(x-7)^2=0$ have?`, 1, "Both factors give $x=7$."),
  ms(`Select all roots of $x^2-x-12=0$.`, ["$4$", "$-3$", "$-4$", "$3$", "$12$"], [0, 1], "$(x-4)(x+3)=0$."),
  num(`Solve $3x(x-5)=0$. Enter the non-zero root.`, 5, "$3x=0$ or $x-5=0$."),
  tf(`Dividing both sides of $x^2=6x$ by $x$ gives all the roots.`, false, "It loses $x=0$. Factor instead: $x(x-6)=0$."),
  num(`Find the larger root of $x^2-2x-24=0$.`, 6, "$(x-6)(x+4)=0$."),
  mc(`The roots of $x^2+6x+8=0$ are the ___ of $y=x^2+6x+8$.`, "x-intercepts", ["y-intercept", "vertex", "axis of symmetry"], "Roots make $y=0$."),
  num(`Solve $(2x-1)(x+4)=0$. Enter the positive root as a decimal.`, 0.5, "$2x-1=0\\Rightarrow x=\\frac12$."),
  mc(`The graph of $y=x^2-2x-3$ is shown. What are the roots of $x^2-2x-3=0$?`, "$-1$ and $3$", ["$1$ and $-3$", "$-3$ and $0$", "$1$ and $-4$"], "The roots are the x-intercepts.", parDoc((x) => x * x - 2 * x - 3, [-1, 3], { xmin: -3, xmax: 5, ymin: -5, ymax: 6 })),
];

export const M = [
  num(`Find the larger root of $x^2+x-30=0$.`, 5, "$(x+6)(x-5)=0$."),
  num(`Find the smaller root of $x^2-13x+40=0$.`, 5, "$(x-5)(x-8)=0$."),
  mc(`Solve $2x^2+7x+3=0$.`, "$x=-\\frac12$ or $x=-3$", ["$x=\\frac12$ or $x=3$", "$x=-2$ or $x=-3$", "$x=-\\frac13$ or $x=-2$"], "$(2x+1)(x+3)=0$."),
  num(`Find the positive root of $3x^2-2x-8=0$.`, 2, "$(3x+4)(x-2)=0$."),
  num(`Solve $x^2=4x+21$. Enter the larger root.`, 7, "$x^2-4x-21=(x-7)(x+3)=0$."),
  fill(`The positive root of $4x^2-9=0$ is $x=$ ___.`, ["3/2", "1.5"], "$(2x-3)(2x+3)=0$."),
  ms(`Select all roots of $2x^2-8x=0$.`, ["$0$", "$4$", "$-4$", "$2$", "$8$"], [0, 1], "$2x(x-4)=0$."),
  num(`Solve $x^2+5x=14$. Enter the negative root.`, -7, "$x^2+5x-14=(x+7)(x-2)=0$."),
  tf(`$x^2+4=0$ can be solved by factoring over the real numbers.`, false, "$x^2=-4$ has no real roots."),
  num(`Find the product of the roots of $x^2-9x+20=0$.`, 20, "Roots 4 and 5."),
  num(`Find the sum of the roots of $x^2+3x-28=0$.`, -3, "Roots $-7$ and $4$."),
  mc(`Which equation has the roots $\\frac32$ and $-1$?`, "$(2x-3)(x+1)=0$", ["$(3x-2)(x+1)=0$", "$(2x+3)(x-1)=0$", "$(x-3)(2x+1)=0$"], "$2x-3=0$ gives $\\frac32$."),
  num(`Solve $5x^2+10x-40=0$. Enter the positive root.`, 2, "$5(x+4)(x-2)=0$."),
  num(`A rectangle is $2$ m longer than it is wide and has area $48$ m$^2$. Find its width in metres.`, 6, "$w(w+2)=48\\Rightarrow(w+8)(w-6)=0$."),
  num(`The square of a positive number is $12$ more than the number. Find the number.`, 4, "$x^2-x-12=(x-4)(x+3)=0$."),
  tf(`$(x-2)(x-3)=2$ means $x=4$ or $x=5$.`, false, "Only a product equal to 0 lets you set each factor to 0."),
  num(`Find the positive root of $6x^2-x-2=0$ to two decimal places.`, 0.67, "$(3x-2)(2x+1)=0$: $x=\\frac23$.", null, 0.01),
  mc(`A student solves $x^2-6x=0$ by dividing by $x$ and gets $x=6$. What went wrong?`, "the root $x=0$ was lost", ["$6$ is not a root", "the equation has no roots", "the student should have added $6x$"], "Factor: $x(x-6)=0$ gives $0$ and $6$."),
  num(`Solve $4x^2-12x+9=0$.`, 1.5, "$(2x-3)^2=0$."),
  num(`The rectangle shown has area $84$ cm$^2$. Find $w$.`, 7, "$w(w+5)=84\\Rightarrow(w+12)(w-7)=0$.", rectDoc("w + 5", "w", "area 84 cm²")),
];
