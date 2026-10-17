// 1.3 Solving by Substitution — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf, mx, fill } from "./kit.mjs";

export const TOPIC = "1.3 Solving by Substitution";
export const Q = [
  num(`Solve $\\frac{x}{3}+\\frac{y}{2}=4$ and $x-y=2$. What is $x$?`, 6, "$\\times6$: $2x+3y=24$; $x=y+2$ gives $5y=20$."),
  num(`Solve $3x-4y=2$ and $5x+2y=12$ by substitution. What is $y$?`, 1, "$y=6-\\frac52x$; $3x-24+10x=2\\Rightarrow x=2$."),
  num(`Solve $\\frac{x+1}{2}=\\frac{y-1}{3}$ and $x+y=10$. What is $y$?`, 7, "$3x-2y=-5$; with $y=10-x$: $5x=15$."),
  num(`Find $a$ if $y=ax+1$ and $2x+y=9$ meet where $x=2$.`, 2, "$y=9-4=5$; $5=2a+1$."),
  num(`For what value of $k$ does $y=kx+3$, $4x-2y=7$ have no solution?`, 2, "The second line is $y=2x-3.5$; parallel needs $k=2$ (intercepts differ)."),
  num(`Solve $x+2y=3$ and $3x-y=4$. Give $x$ to 3 decimal places.`, 1.5714285714, "$x=3-2y$; $9-7y=4$, $y=\\frac57$, $x=\\frac{11}{7}$.", null, 0.001),
  num(`A 30 kg mix worth 7 dollars/kg is made from nuts at 5 dollars/kg and 10 dollars/kg. How many kg of the cheaper nuts?`, 18, "$x+y=30$, $5x+10y=210$; $5x+300-10x=210$."),
  num(`Sam is 4 years older than Kim. In 5 years their ages will add to 40. How old is Sam now?`, 17, "$s=k+4$; $(k+9)+(k+5)=40\\Rightarrow k=13$."),
  num(`A two-digit number has digit sum $11$. Reversing the digits increases it by $27$. Find the number.`, 47, "$t+u=11$, $u-t=3$."),
  ms(`For which systems is substitution a natural first choice?`, ["$y=4x-1$, $3x+2y=9$", "$x=2y$, $5x-3y=14$", "$3x+4y=10$, $5x-6y=4$", "$x-y=3$, $2x+3y=1$", "$6x+9y=3$, $4x-10y=7$"], [0, 1, 3], "Look for an isolated variable or a coefficient of $\\pm1$."),
  mc(`Solving $y=2x-3$ and $6x-3y=9$ by substitution gives…`, "a true statement, so infinitely many solutions", ["a false statement, so no solution", "$x=0$", "$(3,3)$ only"], "$6x-6x+9=9$."),
  num(`A rectangle's length is $1$ cm less than twice its width, and its perimeter is $34$ cm. Find its area (cm²).`, 66, "$2(3w-1)=34\\Rightarrow w=6$, $l=11$."),
  num(`Solve $\\frac2x+\\frac3y=2$ and $\\frac4x-\\frac3y=1$ using $u=\\frac1x$, $v=\\frac1y$. What is $y$?`, 3, "$6u=3$, $u=\\frac12$; $v=\\frac13$."),
  mx(`Find the line through the intersection of $y=2x+1$ and $x+y=7$ that is parallel to $y=-3x$. Type the right side of $y=\\ldots$`, "-3*x+11", "Intersection $(2,5)$; $5=-6+b$."),
  num(`Two numbers have a sum of $4$; three times the first minus twice the second is $37$. Find the second number.`, -5, "$3a-2(4-a)=37\\Rightarrow a=9$."),
  tf(`Substituting $y=2x$ into $3x+y=10$ gives $x=2$, so the solution is $(2,2)$.`, false, "$y=2(2)=4$: the solution is $(2,4)$."),
  num(`Two buses leave a station in opposite directions; one is 15 km/h faster. After 2 h they are 270 km apart. Find the slower speed (km/h).`, 60, "$2(s+s+15)=270$."),
  num(`8000 dollars is invested, part at 3% and the rest at 5%. The yearly interest is 340 dollars. How much is at 3% (dollars)?`, 3000, "$0.03x+0.05(8000-x)=340\\Rightarrow 0.02x=60$."),
  num(`$(2,1)$ is the solution of $ax+by=7$ and $y=ax-5$. Find $a+b$.`, 4, "$1=2a-5\\Rightarrow a=3$; $6+b=7\\Rightarrow b=1$."),
  fill(`For $y=3x+c$ and $2x+y=10$, the solution has $x=1$. Then $c=$ ___.`, ["5"], "$y=10-2=8$; $8=3+c$."),
];
