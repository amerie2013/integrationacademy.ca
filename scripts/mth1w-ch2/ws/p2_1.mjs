// Worksheet 2.1 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
import { patternT, rectT } from "./tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Write an expression for “$8$ more than the product of $3$ and a number $n$”.`, recap: String.raw`8 more than the product of 3 and $n$.`, ans: "$3n+8$" },
  { level: 1, q: String.raw`For $-2x^2+x-9$, state the coefficient of each variable term and the constant term.`, recap: String.raw`Coefficients and constant of $-2x^2+x-9$.`, ans: String.raw`$-2$ (of $x^2$), $1$ (of $x$); constant $-9$` },
  { level: 1, q: String.raw`Evaluate $5p-2q$ when $p=-3$ and $q=4$.`, ans: "$-23$" },
  { level: 2, q: String.raw`Evaluate $x^2-4xy+y^2$ when $x=-1$ and $y=3$.`, ans: "$22$" },
  { level: 2, q: String.raw`The smallest of three consecutive integers is $n$. Write and simplify an expression for their sum, then find the sum when $n=-14$.`, recap: String.raw`Sum of 3 consecutive integers from $n$; $n=-14$.`, ans: String.raw`$3n+3$; $-39$` },
  { level: 2, q: String.raw`A pattern has $2, 9, 16, 23$ tiles in Figures $1$ to $4$. Write an expression for Figure $n$ and find the number of tiles in Figure $20$.`, recap: "Pattern 2, 9, 16, 23: rule and Figure 20.", ans: String.raw`$7n-5$; $135$` },
  { level: 2, q: String.raw`Evaluate $\dfrac{2a-b}{a+b}$ when $a=\frac12$ and $b=-3$. Give a fraction.`, recap: String.raw`$\frac{2a-b}{a+b}$ at $a=\frac12$, $b=-3$.`, ans: String.raw`$\frac{4}{-2.5}=-\frac85$` },
  { level: 2, q: String.raw`A taxi charges $3.90$ dollars plus $1.95$ dollars per km. Write an expression for the fare for $d$ km, and find the fare for $12.4$ km.`, recap: "Taxi 3.90 + 1.95/km; fare for 12.4 km.", ans: String.raw`$3.90+1.95d$; $28.08$ dollars` },
  { level: 3, space: 5,
    q: String.raw`In a video game a player starts with $500$ points, gains $75$ points for each level completed and loses $120$ points for each life lost.
(a) Write an expression for the score after completing $L$ levels and losing $D$ lives.
(b) Find the scores of a player who completed $9$ levels and lost $3$ lives, and of one who completed $12$ levels and lost $6$ lives.
(c) Can a player who completed $8$ levels have a score of exactly $1000$? Explain.`,
    recap: "Game: start 500, +75 per level, −120 per life lost.",
    ans: String.raw`(a) $500+75L-120D$ (b) $815$; $680$ (c) No: $1100-120D=1000$ needs $D=\frac{100}{120}$, not a whole number.` },
  { level: 3, space: 5,
    q: String.raw`Hexagons are made from toothpicks and joined in a row, sharing a side: $1$ hexagon uses $6$ toothpicks, $2$ use $11$, $3$ use $16$.
(a) Write an expression for the number of toothpicks for $n$ hexagons. Explain what each part means.
(b) How many toothpicks make $40$ hexagons?
(c) How many hexagons can be made with exactly $356$ toothpicks?
(d) Can a row use exactly $500$ toothpicks? Explain.`,
    recap: "Toothpick hexagons in a row: 6, 11, 16, …",
    ans: String.raw`(a) $5n+1$: one starting toothpick plus $5$ new ones per hexagon (b) $201$ (c) $5n+1=356$, $n=71$ (d) No: $499$ is not a multiple of $5$.` },
  { level: 3, space: 5,
    q: String.raw`Car rental A costs $40$ dollars plus $0.25$ dollars per km. Rental B costs $25$ dollars plus $0.40$ dollars per km.
(a) Write an expression for the cost of each rental for $d$ km.
(b) Find each cost for $80$ km and for $150$ km.
(c) Test values to find the distance at which the two rentals cost the same. Which rental is cheaper for longer trips?`,
    recap: "Rentals: A 40 + 0.25/km; B 25 + 0.40/km.",
    ans: String.raw`(a) A: $40+0.25d$; B: $25+0.40d$ (b) $80$ km: A $60$, B $57$; $150$ km: A $77.50$, B $85$ (c) $100$ km (both $65$ dollars); A is cheaper beyond $100$ km.` },
  { level: 3, space: 5.5,
    q: String.raw`An old riddle about Diophantus says: his boyhood lasted $\frac16$ of his life; his beard grew after $\frac1{12}$ more; he married after $\frac17$ more; his son was born $5$ years later; the son lived to half his father's age; Diophantus died $4$ years after his son.
(a) Let $x$ be his age at death. Write an expression for the sum of all the parts of his life.
(b) Show that $x=84$ makes the sum equal to $x$.
(c) How old was Diophantus when his son was born?`,
    recap: "Diophantus's age riddle.",
    ans: String.raw`(a) $\frac{x}6+\frac{x}{12}+\frac{x}7+5+\frac{x}2+4$ (b) $14+7+12+5+42+4=84$ ✓ (c) $14+7+12+5=38$ years.` },
  { level: 3, space: 5,
    q: String.raw`A rectangle is $2x+3$ units long and $x$ units wide.
${rectT("2x+3", "x", "", { w: 5, h: 2 })}
(a) Write a simplified expression for its perimeter.
(b) Find the perimeter and the area when $x=4$.
(c) Test values to find $x$ when the perimeter is $54$ units.`,
    recap: String.raw`Rectangle $2x+3$ by $x$.`,
    ans: String.raw`(a) $6x+6$ (b) $30$; $44$ square units (c) $x=8$ ($6(8)+6=54$).` },
];
