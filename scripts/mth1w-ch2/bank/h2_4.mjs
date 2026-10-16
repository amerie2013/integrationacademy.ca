// 2.4 Creating & Solving Equations — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { flowFig, lineFig } from "./svg2.mjs";

export const TOPIC = "2.4 Creating & Solving Equations";
export const Q = [
  num(String.raw`A drone at $840$ m descends at a constant rate, as shown. After how many seconds is it at $315$ m?`, 15, String.raw`It loses $35$ m per second: $840-35t=315$, $35t=525$, $t=15$.`, lineFig({ m: -35, b: 840, c: 315, xMax: 26, yMax: 900, xStep: 2, yStep: 100, xLabel: "time t (s)", yLabel: "height (m)", mark: false })),
  num(String.raw`Solve $-\frac35k+7=16$.`, -15, String.raw`$-\frac35k=9$, so $k=9\times\left(-\frac53\right)=-15$.`),
  num(String.raw`Solve $\dfrac{4-3x}{2}=11$.`, -6, String.raw`$4-3x=22$, $-3x=18$, $x=-6$.`),
  num(String.raw`A number goes through the flow chart and the output is $-11$. What was the input?`, 8, String.raw`Backward: $-11\times(-2)=22$; $22-10=12$; $12\div3=4$; $4+4=8$.`, flowFig("n", ["− 4", "× 3", "+ 10", "÷ (−2)"], "−11")),
  num(String.raw`Use $F=1.8C+32$ to find the Celsius temperature equal to $-4\,^\circ$F.`, -20, String.raw`$1.8C=-36$, $C=-20$.`),
  num(String.raw`What is the $x$-intercept of $y=3x-12$? (Set $y=0$.)`, 4, String.raw`$0=3x-12$, $x=4$.`),
  num(String.raw`Parking costs $2.50$ dollars for the first hour and $1.75$ dollars for each additional hour. Mo paid $13$ dollars. How many hours did he park?`, 7, String.raw`$2.50+1.75(h-1)=13$; $1.75(h-1)=10.50$; $h-1=6$; $h=7$.`),
  ms(String.raw`Which equations are equivalent to $2x-6=10$ (same solution)? Select all.`, ["$2x=16$", "$x-3=5$", "$x=8$", "$2x=4$", "$x-6=5$"], [0, 1, 2], String.raw`All three have solution $8$; $2x=4$ gives $2$ and $x-6=5$ gives $11$.`),
  num(String.raw`A diver at $-42$ m rises at $0.75$ m/s to a safety stop at $-6$ m. How many seconds does this take?`, 48, String.raw`$-42+0.75t=-6$, $0.75t=36$, $t=48$.`),
  num(String.raw`Museum tickets are $18$ dollars per adult and $12$ dollars per child. Four adults and some children paid $168$ dollars. How many children were there?`, 8, String.raw`$72+12c=168$, $c=8$.`),
  mc(String.raw`For what value of $x$ does $3(x-2)+4$ equal $19$?`, "$7$", ["$5$", "$\\frac{23}{3}$", "$9$"], String.raw`$3x-2=19$, $3x=21$.`),
  num(String.raw`Solve $0.35n+12=40$.`, 80, String.raw`$0.35n=28$, $n=80$.`),
  num(String.raw`What is the $x$-intercept of $2x+5y=30$?`, 15, String.raw`$y=0$: $2x=30$.`),
  num(String.raw`The mean of $84$, $77$, $91$ and $x$ is $85$. Find $x$.`, 88, String.raw`$\frac{252+x}{4}=85$, $252+x=340$.`),
  tf(String.raw`$\frac x4+3=5$ and $x+12=20$ are equivalent equations.`, true, String.raw`Both have the solution $x=8$ (the second is the first multiplied by $4$).`),
  num(String.raw`A car's value is $V=24\,000-2400t$ dollars after $t$ years. After how many years is it worth $9600$ dollars?`, 6, String.raw`$2400t=14\,400$, $t=6$.`),
  num(String.raw`Solve $\frac56x-\frac13=3$.`, 4, String.raw`$\frac56x=\frac{10}3$, $x=\frac{10}{3}\times\frac65=4$.`),
  mc(String.raw`For $y=-2x+7$, which value of $x$ gives $y=-13$?`, "$10$", ["$-10$", "$3$", "$-3$"], String.raw`$-2x+7=-13$, $-2x=-20$.`),
  num(String.raw`Two angles together form a right angle. One is $x^\circ$ and the other is $(3x-14)^\circ$. Find $x$.`, 26, String.raw`$4x-14=90$, $x=26$.`),
  num(String.raw`Read the solution of $2.5x+10=45$ from the graph, then confirm with algebra.`, 14, String.raw`$2.5x=35$, $x=14$.`, lineFig({ m: 2.5, b: 10, c: 45, xMax: 18, yMax: 60, xStep: 2, yStep: 10, xLabel: "x", yLabel: "y", mark: false })),
];
