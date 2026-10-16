// 2.1 From Words to Algebraic Expressions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { patternFig, rectFig, graph } from "./svg2.mjs";

export const TOPIC = "2.1 From Words to Algebraic Expressions";
export const Q = [
  num(String.raw`A pattern has $3, 8, 15, 24$ tiles in Figures $1$ to $4$. The differences are not constant: Figure $n$ has $n^2+2n$ tiles. How many tiles are in Figure $10$?`, 120, String.raw`Check: $1+2=3$, $4+4=8$ ✓. Figure $10$: $100+20=120$.`),
  mc(String.raw`Plan A costs $20+0.10m$ dollars and plan B costs $35+0.04m$ dollars for $m$ minutes. For which numbers of minutes is plan B cheaper?`, "more than 250 minutes", ["fewer than 250 minutes", "more than 150 minutes", "always"], String.raw`They are equal when $15=0.06m$, $m=250$. Beyond that, B's smaller rate wins (test $m=300$: A $50$, B $47$).`),
  num(String.raw`Evaluate $(2x-y)^2-(x+y)(x-y)$ when $x=-3$ and $y=2$.`, 59, String.raw`$(2x-y)^2=(-8)^2=64$; $(x+y)(x-y)=(-1)(-5)=5$; $64-5=59$.`),
  num(String.raw`Evaluate $a(b-c)-b(a-c)$ when $a=-2$, $b=5$ and $c=3$.`, 21, String.raw`$-2(2)-5(-5)=-4+25=21$.`),
  num(String.raw`Triangles are made from toothpicks in a row, each new triangle sharing a side with the last: $1$ triangle uses $3$, $2$ use $5$, $3$ use $7$. How many toothpicks make $50$ triangles?`, 101, String.raw`Rule $2n+1$; $2(50)+1=101$.`),
  ms(String.raw`Which expressions are odd for every integer $n$? Select all.`, ["$2n+1$", "$2n+3$", "$3n$", "$n^2+n+1$", "$4n-2$"], [0, 1, 3], String.raw`$n^2+n=n(n+1)$ is a product of consecutive integers, so it is even; adding $1$ makes it odd. $3n$ is even when $n$ is even; $4n-2$ is always even.`),
  num(String.raw`The sum of four consecutive even integers, starting at $n$, is $196$. Find $n$.`, 46, String.raw`$n+(n+2)+(n+4)+(n+6)=4n+12=196$, so $n=46$ ($46+48+50+52=196$).`),
  mc(String.raw`Which expression gives the number of tiles in Figure $n$?`, "$2n+3$", ["$3n+2$", "$5n$", "$n+5$"], String.raw`Each figure adds $2$ tiles and $3$ tiles never change: $2n+3$ ($5, 7, 9,\dots$).`, patternFig(2, 3)),
  num(String.raw`A hockey team gets $2$ points per win and $1$ point per overtime loss. It has $34$ wins and $11$ overtime losses with $37$ games left. What is the greatest number of points it can finish with?`, 153, String.raw`Now: $2(34)+11=79$. Win all $37$: $79+74=153$.`),
  tf(String.raw`For every value of $x$, $3x^2$ and $(3x)^2$ are equal.`, false, String.raw`$(3x)^2=9x^2$. At $x=1$: $3\ne9$.`),
  num(String.raw`Evaluate $x^3-2x^2-x+2$ when $x=-1$.`, 0, String.raw`$-1-2(1)+1+2=0$.`),
  num(String.raw`Gym A charges $60+25m$ dollars and Gym B charges $15+40m$ dollars for $m$ months. After how many months do they cost the same?`, 3, String.raw`At $m=3$: A $135$, B $135$. (Each month B gains $15$ on A; it started $45$ behind.)`),
  num(String.raw`A quick rule for converting Celsius to Fahrenheit is “double and add $30$”: $2C+30$. The exact formula is $1.8C+32$. By how many degrees do they differ at $C=-15$?`, 5, String.raw`Quick: $-30+30=0$. Exact: $-27+32=5$. Difference $5$ degrees.`),
  ms(String.raw`Which phrases translate to $\dfrac{n-4}{2}$? Select all.`, ["half the difference of a number and 4", "the difference of a number and 4, divided by 2", "4 less than half a number", "a number decreased by 4, then halved", "half of 4, less a number"], [0, 1, 3], String.raw`“$4$ less than half a number” is $\frac n2-4$; “half of $4$, less a number” is $2-n$.`),
  num(String.raw`The graph shows a plumber's charge for $0$ to $3$ hours. The pattern continues. What is the charge, in dollars, for $7.5$ hours?`, 322.5, String.raw`Start $60$, up $35$ per hour: $C=60+35h$; $60+35(7.5)=322.5$.`,
    graph({ series: [{ pts: [[0, 60], [1, 95], [2, 130], [3, 165]] }], xmin: 0, xmax: 4, ymin: 0, ymax: 200, xstep: 1, ystep: 25, xlabel: "hours", ylabel: "charge (dollars)" }), 0.01),
  mc(String.raw`What is the $100$th term of $7, 4, 1, -2,\dots$?`, "$-290$", ["$-293$", "$-287$", "$290$"], String.raw`Difference $-3$; value at $n=0$ is $10$: $-3n+10$. $-300+10=-290$.`),
  num(String.raw`Evaluate $6a-9b+ab$ when $a=\frac12$ and $b=-\frac23$. Give a decimal to two places.`, 26 / 3, String.raw`$3+6-\frac13=8\frac23\approx8.67$.`, null, 0.006),
  num(String.raw`Find the perimeter of the rectangle when $x=7.5$.`, 41, String.raw`$P=2(2x+1)+2(x-3)=6x-4$; $6(7.5)-4=41$.`, rectFig("2x + 1", "x − 3")),
  mc(String.raw`What was François Viète's key contribution to algebraic notation (1591)?`, "using letters for both unknowns and known quantities", ["inventing a symbol for zero", "inventing the equals sign", "the first rules for negative numbers"], String.raw`Zero and rules for negatives were developed in India (Brahmagupta); the equals sign is Robert Recorde's (1557).`),
  num(String.raw`A polygon with $n$ sides has $\dfrac{n(n-3)}{2}$ diagonals. How many diagonals does a decagon have?`, 35, String.raw`$\frac{10(7)}{2}=35$.`),
];
