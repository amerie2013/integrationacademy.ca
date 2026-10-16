// 2.4 Creating & Solving Equations — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { balanceFig, flowFig, lineFig } from "./svg2.mjs";

export const E = [
  num(String.raw`Solve $x+9=4$.`, -5, String.raw`Subtract $9$: $x=-5$.`),
  num(String.raw`Solve $y-6=-2$.`, 4, String.raw`Add $6$: $y=4$.`),
  num(String.raw`Solve $7n=-42$.`, -6, String.raw`Divide by $7$.`),
  num(String.raw`Solve $\frac m3=5$.`, 15, String.raw`Multiply by $3$.`),
  num(String.raw`Solve $2x+3=11$.`, 4, String.raw`$2x=8$, $x=4$.`),
  num(String.raw`Solve $5k-4=21$.`, 5, String.raw`$5k=25$.`),
  tf(String.raw`$x=3$ is a solution of $4x-5=7$.`, true, String.raw`$12-5=7$ ✓`),
  mc(String.raw`What is the best first step to solve $3x+8=20$?`, "subtract 8 from both sides", ["divide both sides by 3", "add 8 to both sides", "multiply both sides by 3"], "Undo the last operation (+8) first."),
  num(String.raw`Solve $-4p=28$.`, -7, String.raw`Divide by $-4$.`),
  num(String.raw`Solve $10-x=3$.`, 7, String.raw`$-x=-7$, $x=7$.`),
  num(String.raw`Solve $\frac x2+1=6$.`, 10, String.raw`$\frac x2=5$.`),
  mc(String.raw`Which equation means “a number increased by $9$ is $15$”?`, "$n+9=15$", ["$9n=15$", "$n-9=15$", "$n=9+15$"], "“Increased by” means add."),
  num(String.raw`The scale balances. What is the value of $x$?`, 4, String.raw`$3x+2=14$: $3x=12$, $x=4$.`, balanceFig("3x + 2", "14")),
  num(String.raw`Solve $0.5t=4$.`, 8, String.raw`$t=4\div0.5=8$.`),
  num(String.raw`Solve $6=2y-8$.`, 7, String.raw`$14=2y$.`),
  tf(String.raw`To solve $2x=10$ you subtract $2$ from both sides.`, false, String.raw`$x$ is multiplied by $2$, so divide by $2$.`),
  num(String.raw`A cost is $C=10+4h$. Find $h$ when $C=30$.`, 5, String.raw`$4h=20$.`),
  num(String.raw`Solve $-x=9$.`, -9, String.raw`Multiply both sides by $-1$.`),
  num(String.raw`Three times a number, minus $4$, is $17$. Find the number.`, 7, String.raw`$3n-4=17$, $3n=21$.`),
  num(String.raw`Solve $x+2.5=7.1$.`, 4.6, String.raw`$x=4.6$.`, null, 0.001),
];

export const M = [
  num(String.raw`Solve $9-4x=-11$.`, 5, String.raw`$-4x=-20$.`),
  num(String.raw`Solve $\frac34w=18$.`, 24, String.raw`Multiply by $\frac43$.`),
  num(String.raw`Solve $\dfrac{x-7}{3}=4$.`, 19, String.raw`$x-7=12$.`),
  num(String.raw`Solve $-2.5y+4=-6$.`, 4, String.raw`$-2.5y=-10$.`),
  num(String.raw`Solve $\frac23m-5=7$.`, 18, String.raw`$\frac23m=12$, $m=18$.`),
  num(String.raw`Solve $\dfrac{x}{-4}+3=9$.`, -24, String.raw`$\frac{x}{-4}=6$, $x=-24$.`),
  num(String.raw`Work backward through the flow chart to find $n$.`, 7, String.raw`$33+2=35$; $35\div5=7$.`, flowFig("n", ["× 5", "− 2"], "33")),
  num(String.raw`A taxi charges $3.50+1.25d$ dollars for $d$ km. A ride cost $23.50$ dollars. How far was it?`, 16, String.raw`$1.25d=20$, $d=16$ km.`),
  num(String.raw`The graph shows $C=20+15h$. For how many hours is the cost $80$ dollars?`, 4, String.raw`$15h=60$, $h=4$.`, lineFig({ m: 15, b: 20, c: 80, xMax: 8, yMax: 140, xStep: 1, yStep: 20, xLabel: "hours h", yLabel: "cost C (dollars)", mark: false })),
  ms(String.raw`Which equations have the solution $x=-3$? Select all.`, ["$2x+9=3$", "$-x+4=1$", "$\\frac x3=-1$", "$5-x=8$", "$4x=12$"], [0, 2, 3], String.raw`$-x+4=1$ and $4x=12$ have solution $3$.`),
  num(String.raw`I think of a number, double it and subtract $9$. The result is $-15$. What is my number?`, -3, String.raw`$2n-9=-15$, $2n=-6$.`),
  tf(String.raw`The solution of $5-3x=20$ is $x=5$.`, false, String.raw`$-3x=15$, $x=-5$.`),
  num(String.raw`Solve $1.2p-0.6=3$.`, 3, String.raw`$1.2p=3.6$.`),
  num(String.raw`A phone plan costs $15+0.2m$ dollars for $m$ minutes. A bill was $27$ dollars. How many minutes were used?`, 60, String.raw`$0.2m=12$.`),
  num(String.raw`An isosceles triangle has two sides of length $x$ and a base of $10$ cm. Its perimeter is $36$ cm. Find $x$.`, 13, String.raw`$2x+10=36$.`),
  mc(String.raw`Which equation models “$12$ less than $3$ times a number is $30$”?`, "$3n-12=30$", ["$12-3n=30$", "$3(n-12)=30$", "$3n+12=30$"], String.raw`Start with $3n$, then subtract $12$.`),
  num(String.raw`A tank holds $900$ L and drains at $60$ L/min: $V=900-60t$. When does it hold $300$ L?`, 10, String.raw`$60t=600$.`),
  num(String.raw`Solve $\frac x5-2=-2$.`, 0, String.raw`$\frac x5=0$, so $x=0$.`),
  num(String.raw`Solve $4=\dfrac{n+10}{3}$.`, 2, String.raw`$12=n+10$.`),
  num(String.raw`The temperature is $12\,^\circ$C and falls $3$ degrees per hour. After how many hours is it $-9\,^\circ$C?`, 7, String.raw`$12-3h=-9$, $h=7$.`),
];
