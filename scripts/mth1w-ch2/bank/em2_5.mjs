// 2.5 Solving Multi-Step Equations — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { balanceFig } from "./svg2.mjs";

export const E = [
  num(String.raw`Solve $2(x+3)=14$.`, 4, String.raw`$2x+6=14$, $x=4$.`),
  num(String.raw`Solve $5y-2=3y+8$.`, 5, String.raw`$2y=10$.`),
  num(String.raw`Solve $4(n-1)=20$.`, 6, String.raw`$4n-4=20$.`),
  num(String.raw`Solve $\frac x2+\frac x2=7$.`, 7, String.raw`$\frac x2+\frac x2=x$.`),
  num(String.raw`Solve $3a+4=a+10$.`, 3, String.raw`$2a=6$.`),
  num(String.raw`Solve $6-(x-2)=3$.`, 5, String.raw`$8-x=3$.`),
  tf(String.raw`$x=2$ is a solution of $3x+1=x+5$.`, true, String.raw`$7=7$ ✓`),
  mc(String.raw`What is a good first step to solve $7x-3=4x+9$?`, "subtract 4x from both sides", ["divide both sides by 7", "add 7x to both sides", "multiply both sides by 4"], "Collect the x-terms on one side."),
  num(String.raw`Solve $-2(k+1)=8$.`, -5, String.raw`$-2k-2=8$, $-2k=10$.`),
  num(String.raw`Solve $2x+5=x-1$.`, -6, String.raw`$x=-6$.`),
  mc(String.raw`What is the LCD to clear the fractions in $\frac x6+\frac x4=5$?`, "12", ["24", "10", "2"], "The lowest common multiple of 6 and 4."),
  num(String.raw`Solve $3(2m-1)=15$.`, 3, String.raw`$6m-3=15$.`),
  mc(String.raw`Which equation has no solution?`, "$x+3=x+5$", ["$2x=x$", "$x+3=3$", "$2x+1=7$"], String.raw`Subtracting $x$ leaves $3=5$, which is false.`),
  num(String.raw`Two angles on a straight line are $x^\circ$ and $2x^\circ$. Find $x$.`, 60, String.raw`$3x=180$.`),
  num(String.raw`Solve $9-y=2y$.`, 3, String.raw`$9=3y$.`),
  tf(String.raw`$2(x+4)=2x+8$ is true for every value of $x$.`, true, "Both sides are identical after expanding: an identity."),
  num(String.raw`The sum of two consecutive integers is $51$. What is the smaller one?`, 25, String.raw`$2n+1=51$.`),
  num(String.raw`Solve $5(x-2)-3x=4$.`, 7, String.raw`$2x-10=4$.`),
  num(String.raw`Solve $\frac x2+3=8$.`, 10, String.raw`$\frac x2=5$.`),
  num(String.raw`A rectangle's length is $4$ cm more than its width. Its perimeter is $28$ cm. Find the width.`, 5, String.raw`$2(w+w+4)=28$, $4w+8=28$.`),
];

export const M = [
  num(String.raw`Solve $3(2x-5)=2(x+4)+1$.`, 6, String.raw`$6x-15=2x+9$, $4x=24$.`),
  num(String.raw`Solve $8-3(y+2)=2y-13$.`, 3, String.raw`$2-3y=2y-13$, $15=5y$.`),
  num(String.raw`Solve $\frac x3+\frac x6=9$.`, 18, String.raw`$\times6$: $2x+x=54$.`),
  num(String.raw`Solve $\dfrac{a+3}{2}=\dfrac{a-1}{3}$.`, -11, String.raw`$3(a+3)=2(a-1)$, $3a+9=2a-2$.`),
  num(String.raw`Solve $0.4(x-5)=0.3x+1$.`, 30, String.raw`$0.4x-2=0.3x+1$, $0.1x=3$.`),
  mc(String.raw`Expand first. Which of these equations has no solution?`, "$3(x-1)=3x+1$", ["$3(x-1)=3x-3$", "$3x-1=x+1$", "$3(x+1)=0$"], String.raw`$3x-3=3x+1$ gives $-3=1$.`),
  num(String.raw`Three consecutive odd integers add to $105$. What is the smallest?`, 33, String.raw`$3n+6=105$, $n=33$.`),
  num(String.raw`Ravi is $5$ years older than Tia. The sum of their ages is $41$. How old is Tia?`, 18, String.raw`$t+t+5=41$.`),
  num(String.raw`The angles of a triangle are $x^\circ$, $2x^\circ$ and $3x^\circ$. Find the smallest angle.`, 30, String.raw`$6x=180$.`),
  num(String.raw`A purse has $20$ coins, all nickels and dimes, worth $1.55$ dollars. How many nickels are there?`, 9, String.raw`$5n+10(20-n)=155$, $200-5n=155$.`),
  num(String.raw`Solve $\frac{2x}{5}-1=\frac x2-3$.`, 20, String.raw`$\times10$: $4x-10=5x-30$.`),
  ms(String.raw`Which equations have the solution $x=4$? Select all.`, ["$2(x-1)=6$", "$3x-5=x+3$", "$\\frac x2+1=3$", "$5-x=x+1$", "$4(x+1)=20$"], [0, 1, 2, 4], String.raw`$5-x=x+1$ gives $x=2$.`),
  tf(String.raw`$4(x+2)-2x=2(x+4)$ is true for every value of $x$.`, true, String.raw`Both sides simplify to $2x+8$.`),
  num(String.raw`Two trains $420$ km apart travel toward each other at $80$ km/h and $60$ km/h. After how many hours do they meet?`, 3, String.raw`$140t=420$.`),
  num(String.raw`A rectangle's length is $3$ cm more than twice its width. The perimeter is $54$ cm. Find the width.`, 8, String.raw`$2(w+2w+3)=54$, $6w+6=54$.`),
  num(String.raw`Angles $(2x+30)^\circ$ and $(x+15)^\circ$ are supplementary. Find $x$.`, 45, String.raw`$3x+45=180$.`),
  num(String.raw`Solve $5-2(3-x)=4(x-1)-1$.`, 2, String.raw`$-1+2x=4x-5$, $4=2x$.`),
  num(String.raw`Solve $\dfrac{x-4}{2}+1=\dfrac{x+2}{4}$.`, 6, String.raw`$\times4$: $2x-8+4=x+2$.`),
  num(String.raw`The scale balances. Find $x$.`, 4, String.raw`$4x+1=x+13$: $3x=12$.`, balanceFig("4x + 1", "x + 13")),
  mc(String.raw`Kai solved $3(x-2)=x+4$ and wrote $3x-2=x+4$ as his first step. What was his error?`, "He did not multiply the −2 by 3.", ["He should have divided by 3 first.", "He should have subtracted x first.", "There is no error."], String.raw`$3(x-2)=3x-6$. Then $2x=10$, $x=5$.`),
];
