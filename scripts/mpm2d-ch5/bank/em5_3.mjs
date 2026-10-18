// 5.3 The Quadratic Formula — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, triDoc } from "./fig.mjs";

export const E = [
  mc(`Which is the quadratic formula for $ax^2+bx+c=0$?`, "$x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$", ["$x=\\dfrac{b\\pm\\sqrt{b^2-4ac}}{2a}$", "$x=\\dfrac{-b\\pm\\sqrt{b^2+4ac}}{2a}$", "$x=-b\\pm\\dfrac{\\sqrt{b^2-4ac}}{2a}$"], "The whole numerator is divided by $2a$."),
  num(`In $2x^2-3x+7=0$, what is $b$?`, -3, "Keep the sign."),
  num(`Find $b^2-4ac$ for $x^2+4x+1=0$.`, 12, "$16-4$."),
  num(`Write $3x^2=5x-2$ in standard form $ax^2+bx+c=0$ with $a=3$. What is $c$?`, 2, "$3x^2-5x+2=0$."),
  num(`Solve $x^2-7x+10=0$ with the formula. Enter the larger root.`, 5, "$b^2-4ac=9$: $x=\\frac{7\\pm3}{2}$."),
  tf(`The quadratic formula works only when $a=1$.`, false, "It works for any $a\\ne0$."),
  num(`Solve $x^2+2x-35=0$. Enter the smaller root.`, -7, "$b^2-4ac=144$: $x=\\frac{-2\\pm12}{2}$."),
  mc(`Which is the correct substitution for $x^2-6x+2=0$?`, "$x=\\dfrac{6\\pm\\sqrt{36-8}}{2}$", ["$x=\\dfrac{-6\\pm\\sqrt{36-8}}{2}$", "$x=\\dfrac{6\\pm\\sqrt{36+8}}{2}$", "$x=\\dfrac{6\\pm\\sqrt{36-8}}{1}$"], "$-b=6$, $b^2-4ac=36-8$, $2a=2$."),
  num(`Evaluate $(-4)^2-4(1)(-5)$.`, 36, "$16+20$."),
  tf(`If $b^2-4ac$ is negative, the formula gives no real roots.`, true, "The square root of a negative number is not real."),
  num(`Solve $x^2-3x-1=0$. Enter the larger root to two decimal places.`, 3.3, "$x=\\frac{3+\\sqrt{13}}{2}$.", null, 0.01),
  fill(`For $5x^2+x-1=0$, the denominator $2a$ in the formula is ___.`, ["10"], "$2(5)=10$."),
  num(`Solve $2x^2+5x+2=0$. Enter the smaller root.`, -2, "$b^2-4ac=9$: $x=\\frac{-5-3}{4}$."),
  mc(`For $4-x^2+3x=0$, what are $a$, $b$ and $c$?`, "$a=-1$, $b=3$, $c=4$", ["$a=4$, $b=-1$, $c=3$", "$a=1$, $b=3$, $c=4$", "$a=-1$, $b=4$, $c=3$"], "Order by powers: $-x^2+3x+4=0$."),
  num(`Solve $x^2+4x-2=0$. Enter the larger root to two decimal places.`, 0.45, "$x=-2+\\sqrt6$.", null, 0.01),
  num(`Solve $x^2-10x+25=0$ with the formula.`, 5, "$b^2-4ac=0$: $x=\\frac{10}{2}$."),
  mc(`The quadratic formula comes from…`, "completing the square on $ax^2+bx+c=0$", ["factoring $ax^2+bx+c$", "graphing $y=ax^2+bx+c$", "the difference of squares"], "Complete the square in general."),
  num(`Solve $x^2+x-20=0$. Enter the larger root.`, 4, "$b^2-4ac=81$: $x=\\frac{-1+9}{2}$."),
  tf(`$\\sqrt{48}$ simplifies to $4\\sqrt3$.`, true, "$48=16\\cdot3$."),
  num(`The graph of $y=x^2-2x-2$ is shown. Use the formula to find its positive zero to two decimal places.`, 2.73, "$x=\\frac{2+\\sqrt{12}}{2}=1+\\sqrt3$.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 2, color: "violet" }], points: [{ x: 1, y: -3, label: "(1, −3)", color: "blue" }] }), 0.01),
];

export const M = [
  num(`Solve $3x^2+4x-4=0$. Enter the positive root to two decimal places.`, 0.67, "$b^2-4ac=64$: $x=\\frac{-4+8}{6}$.", null, 0.01),
  num(`Solve $2x^2-x-10=0$. Enter the larger root.`, 2.5, "$b^2-4ac=81$: $x=\\frac{1+9}{4}$."),
  num(`Solve $x^2-5x+3=0$. Enter the smaller root to two decimal places.`, 0.7, "$x=\\frac{5-\\sqrt{13}}{2}$.", null, 0.01),
  num(`Solve $2x^2+3x-4=0$. Enter the larger root to two decimal places.`, 0.85, "$b^2-4ac=41$: $x=\\frac{-3+\\sqrt{41}}{4}$.", null, 0.01),
  mc(`Find the exact roots of $x^2+6x+4=0$.`, "$-3\\pm\\sqrt5$", ["$3\\pm\\sqrt5$", "$-3\\pm2\\sqrt5$", "$-6\\pm\\sqrt5$"], "$b^2-4ac=20$: $x=\\frac{-6\\pm2\\sqrt5}{2}$."),
  num(`Solve $4x^2-4x-1=0$. Enter the larger root to two decimal places.`, 1.21, "$b^2-4ac=32$: $x=\\frac{4+\\sqrt{32}}{8}$.", null, 0.01),
  num(`Solve $x^2=6x-7$. Enter the larger root to two decimal places.`, 4.41, "$x^2-6x+7=0$: $x=3\\pm\\sqrt2$.", null, 0.01),
  tf(`$3x^2+2x+1=0$ has no real roots.`, true, "$b^2-4ac=4-12=-8$."),
  num(`Solve $-2x^2+5x+3=0$. Enter the positive root.`, 3, "$b^2-4ac=49$: $x=\\frac{-5-7}{-4}$."),
  num(`Solve $0.2x^2-x+0.8=0$. Enter the larger root.`, 4, "Multiply by 5: $x^2-5x+4=0$."),
  mc(`A student writes $x=\\frac{4\\pm\\sqrt{16-20}}{2}$ for $x^2-4x-5=0$. What is the error?`, "$c=-5$, so $-4ac=+20$, not $-20$", ["$-b$ should be $-4$", "the denominator should be $1$", "there is no error"], "$b^2-4ac=16+20=36$."),
  num(`Solve $5x^2-2x-1=0$. Enter the positive root to two decimal places.`, 0.69, "$b^2-4ac=24$: $x=\\frac{2+\\sqrt{24}}{10}$.", null, 0.01),
  num(`Use the formula to find the sum of the roots of $3x^2-12x+2=0$.`, 4, "The $\\pm$ parts cancel: $\\frac{12}{6}+\\frac{12}{6}$."),
  ms(`Select all equations whose roots are irrational.`, ["$x^2-3=0$", "$x^2-9=0$", "$x^2+x-1=0$", "$x^2-5x+6=0$", "$2x^2-4x+1=0$"], [0, 2, 4], "Irrational when $b^2-4ac$ is positive but not a perfect square."),
  num(`Find the product of the roots of $2x^2+7x-4=0$.`, -2, "Roots $\\frac12$ and $-4$."),
  num(`A ball's height is $h=-4.9t^2+10t+3$. When does it land (to two decimal places)?`, 2.31, "$t=\\frac{-10-\\sqrt{158.8}}{-9.8}$.", null, 0.01),
  num(`Solve $x(x+4)=9$. Enter the larger root to two decimal places.`, 1.61, "$x^2+4x-9=0$: $x=-2+\\sqrt{13}$.", null, 0.01),
  tf(`$x^2-2x-3=0$ and $2x^2-4x-6=0$ have the same roots.`, true, "The second is the first multiplied by 2."),
  num(`Solve $(x-1)(x+3)=2$. Enter the larger root to two decimal places.`, 1.45, "$x^2+2x-5=0$: $x=-1+\\sqrt6$.", null, 0.01),
  num(`The right triangle shown has hypotenuse $9$ cm. Find the shorter leg $x$ to two decimal places.`, 4.68, "$x^2+(x+3)^2=81\\Rightarrow x^2+3x-36=0$.", triDoc("x", "x + 3", "9"), 0.01),
];
