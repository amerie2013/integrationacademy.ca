// 2.5 Solving Multi-Step Equations — 20 hard questions (new topic: rows are inserted)
import { mc, ms, num, tf } from "./kit.mjs";
import { angleFig, rectFig } from "./svg2.mjs";

export const TOPIC = "2.5 Solving Multi-Step Equations";
export const Q = [
  num(String.raw`Solve $\dfrac{2x-1}{3}-\dfrac{x-2}{4}=2$. Give a decimal.`, 4.4, String.raw`$\times12$: $4(2x-1)-3(x-2)=24$; $8x-4-3x+6=24$; $5x=22$.`, null, 0.001),
  num(String.raw`One-third of a number, decreased by $2$, equals one-quarter of the number, increased by $1$. Find the number.`, 36, String.raw`$\frac x3-2=\frac x4+1$; $\times12$: $4x-24=3x+12$.`),
  num(String.raw`Eli can paint a room in $5$ h and Mia in $4$ h. How many hours do they take working together? Give two decimal places.`, 20 / 9, String.raw`$\frac t5+\frac t4=1$; $4t+5t=20$; $t=\frac{20}{9}\approx2.22$.`, null, 0.006),
  num(String.raw`Two cars leave towns $360$ km apart at the same time and drive toward each other. One is $20$ km/h faster. They meet after $2$ h. What is the slower car's speed in km/h?`, 80, String.raw`$2s+2(s+20)=360$; $4s+40=360$.`),
  num(String.raw`Adult concert tickets cost $35$ dollars and student tickets $20$ dollars. $140$ tickets were sold for $3850$ dollars. How many adult tickets were sold?`, 70, String.raw`$35a+20(140-a)=3850$; $15a=1050$.`),
  num(String.raw`A father is $3$ times as old as his son. Twelve years ago he was $7$ times as old. How old is the son now?`, 18, String.raw`$3s-12=7(s-12)$; $3s-12=7s-84$; $s=18$.`),
  num(String.raw`The three angles lie on a straight line. What is the largest angle, in degrees?`, 70, String.raw`$6x+30=180$, $x=25$: angles $70^\circ$, $60^\circ$, $50^\circ$.`, angleFig(["(3x − 5)°", "(2x + 10)°", "(x + 25)°"])),
  num(String.raw`A square has sides $(2x-1)$ cm and an equilateral triangle has sides $(x+5)$ cm. They have the same perimeter. Find $x$.`, 3.8, String.raw`$4(2x-1)=3(x+5)$; $8x-4=3x+15$; $5x=19$.`, null, 0.001),
  tf(String.raw`$3(2x-4)=6(x-2)$ has no solution.`, false, String.raw`Both sides equal $6x-12$: every number is a solution.`),
  num(String.raw`For what value of $k$ is $2(x+k)=2x+10$ true for every $x$?`, 5, String.raw`$2x+2k=2x+10$ needs $2k=10$.`),
  mc(String.raw`For which value of $a$ does $ax+3=2x+7$ have no solution?`, "$a=2$", ["$a=4$", "$a=-2$", "$a=0$"], String.raw`If $a=2$ the $x$-terms cancel and leave $3=7$.`),
  num(String.raw`Solve $0.25(8x-4)=0.5(3x+6)$.`, 8, String.raw`$2x-1=1.5x+3$; $0.5x=4$.`),
  num(String.raw`Sara's mean on four tests is $78$. What must she score on the fifth test to raise her mean to $81$?`, 93, String.raw`$\frac{4(78)+s}{5}=81$; $312+s=405$.`),
  num(String.raw`For three consecutive even integers, the smallest plus twice the largest is $68$. What is the largest?`, 24, String.raw`$n+2(n+4)=68$; $3n=60$; $n=20$, largest $24$.`),
  ms(String.raw`Which equations have exactly one solution? Select all.`, ["$2(x+1)=2x+2$", "$3x=0$", "$x+4=x-4$", "$5x-1=4x+1$", "$2(3-x)=-2x+6$"], [1, 3], String.raw`The first and last are identities; $x+4=x-4$ has none; $3x=0$ gives $0$; $5x-1=4x+1$ gives $2$.`),
  mc(String.raw`A rectangle is $(3x-2)$ by $(x+4)$. A square has side $(2x-1)$. For which value of $x$ are their perimeters equal?`, "no value of x", ["x = 1", "x = 2", "every value of x"], String.raw`$2(4x+2)=4(2x-1)$ gives $8x+4=8x-4$: false for every $x$.`, rectFig("3x − 2", "x + 4")),
  num(String.raw`Ana leaves at noon walking at $5$ km/h. Ben leaves the same place at 12:40 cycling at $15$ km/h on the same path. How many minutes after Ben starts does he catch Ana?`, 20, String.raw`$5\left(t+\frac23\right)=15t$; $10t=\frac{10}{3}$; $t=\frac13$ h.`),
  num(String.raw`Solve $\dfrac{x+1}{2}+\dfrac{x+2}{3}+\dfrac{x+3}{4}=16$.`, 13, String.raw`$\times12$: $6x+6+4x+8+3x+9=192$; $13x=169$.`),
  num(String.raw`Pump A fills a tank in $3$ h and pump B in $6$ h. A drain empties a full tank in $4$ h. With all three open, how many hours does it take to fill the tank?`, 4, String.raw`$\frac t3+\frac t6-\frac t4=1$; $\times12$: $4t+2t-3t=12$.`),
  num(String.raw`Solve $5(2x-3)-2(4x-1)=3(x+2)-13$.`, -6, String.raw`$2x-13=3x-7$; $x=-6$.`),
];
