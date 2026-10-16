// 2.1 From Words to Algebraic Expressions — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf, mx } from "./kit.mjs";
import { patternFig } from "./svg2.mjs";

export const E = [
  num(String.raw`Evaluate $4n-9$ when $n=6$.`, 15, String.raw`$4(6)-9=24-9=15$.`),
  mc(String.raw`Which expression means “the sum of a number and $7$”?`, "$n+7$", ["$7n$", "$n-7$", "$7-n$"], "“Sum” means add."),
  mc(String.raw`Which expression means “$5$ less than a number”?`, "$n-5$", ["$5-n$", "$5n$", "$n+5$"], String.raw`Start at $n$ and go down $5$: $n-5$.`),
  mc(String.raw`What is the coefficient of $x$ in $3x^2-8x+1$?`, "$-8$", ["$8$", "$3$", "$1$"], "The coefficient keeps the sign in front of the term."),
  num(String.raw`What is the constant term of $6y-11$?`, -11, String.raw`The term without a variable is $-11$.`),
  tf(String.raw`In $5a-2$, the coefficient of $a$ is $5$.`, true, String.raw`$5a$ means $5\times a$.`),
  num(String.raw`How many terms does $2x^2-x+4-3y$ have?`, 4, String.raw`$2x^2$, $-x$, $4$, $-3y$.`),
  mx(String.raw`Write an expression for “triple a number $m$”.`, "3*m", String.raw`Triple means multiply by $3$: $3m$.`),
  num(String.raw`Evaluate $2x+3y$ when $x=4$ and $y=-1$.`, 5, String.raw`$8+3(-1)=5$.`),
  mc(String.raw`Which of these is an expression (not an equation)?`, "$3x-4$", ["$3x-4=8$", "$x=2$", "$y=3x$"], "An expression has no equals sign."),
  num(String.raw`Use $P=2l+2w$ to find the perimeter when $l=9$ and $w=4$.`, 26, String.raw`$18+8=26$.`),
  fill(String.raw`In $7-3k$, the coefficient of $k$ is ___.`, ["-3", "−3"], String.raw`The term is $-3k$.`),
  num(String.raw`What is the next number in the pattern $6, 11, 16, 21,\dots$?`, 26, "The pattern adds 5."),
  mc(String.raw`Which rule gives the pattern $4, 8, 12, 16,\dots$ for term $n$?`, "$4n$", ["$n+4$", "$4n+4$", "$2n+2$"], String.raw`Each term is $4$ times its position: $4(1)=4$, $4(2)=8$.`),
  num(String.raw`Evaluate $k^2$ when $k=-5$.`, 25, String.raw`$(-5)^2=25$.`),
  tf(String.raw`“Twice a number, plus $3$” is written $2(n+3)$.`, false, String.raw`It is $2n+3$. $2(n+3)$ means twice the sum of $n$ and $3$.`),
  mx(String.raw`Write an expression for “a number $n$ divided by $4$”.`, "n/4", String.raw`$\frac n4$.`),
  num(String.raw`Figure $n$ of this pattern has $2n+1$ tiles. How many tiles are in Figure $3$?`, 7, String.raw`$2(3)+1=7$.`, patternFig(2, 1)),
  mc(String.raw`The word “algebra” comes from the title of a book by which mathematician?`, "al-Khwārizmī", ["Euclid", "Descartes", "Pythagoras"], "His book title contained “al-jabr”, meaning “restoring”."),
  num(String.raw`A bike rental costs $5+2h$ dollars for $h$ hours. Find the cost for $7$ hours.`, 19, String.raw`$5+14=19$.`),
];

export const M = [
  mx(String.raw`Write an expression for “$8$ less than $5$ times a number $x$”.`, "5*x-8", String.raw`$5x$, then subtract $8$: $5x-8$.`),
  mx(String.raw`Write an expression for “the product of $4$ and the sum of a number $y$ and $3$”.`, "4*(y+3)", String.raw`The sum $y+3$ is found first: $4(y+3)$.`),
  num(String.raw`Evaluate $3a^2-2a+1$ when $a=-3$.`, 34, String.raw`$3(9)+6+1=34$.`),
  num(String.raw`Evaluate $\dfrac{p-q}{p+q}$ when $p=7$ and $q=-3$.`, 2.5, String.raw`$\frac{10}{4}=2.5$.`),
  mx(String.raw`The smallest of three consecutive integers is $n$. Write a simplified expression for their sum.`, "3*n+3", String.raw`$n+(n+1)+(n+2)=3n+3$.`),
  mc(String.raw`Which phrase describes $2(x-5)$?`, "twice the difference of a number and 5", ["5 less than twice a number", "twice a number, minus 5", "a number minus twice 5"], String.raw`The bracket is calculated first, then doubled. “$5$ less than twice a number” is $2x-5$.`),
  num(String.raw`A pattern is $3, 10, 17, 24,\dots$. What is term $15$?`, 101, String.raw`Rule $7n-4$; $7(15)-4=101$.`),
  mx(String.raw`Write a rule for term $n$ of $9, 14, 19, 24,\dots$`, "5*n+4", String.raw`Difference $5$; value at $n=0$ is $4$: $5n+4$.`),
  num(String.raw`Figure $n$ of this pattern has $3n+2$ tiles. How many tiles are in Figure $10$?`, 32, String.raw`$3(10)+2=32$.`, patternFig(3, 2)),
  ms(String.raw`Which expressions equal $12$ when $x=-2$? Select all.`, ["$x^2+8$", "$-6x$", "$3x+18$", "$x^3+4$", "$10-x$"], [0, 1, 2, 4], String.raw`Values: $12$, $12$, $12$, $-4$, $12$.`),
  num(String.raw`A taxi fare is $4.25+1.75d$ dollars for $d$ km. Find the fare for $8$ km.`, 18.25, String.raw`$4.25+14=18.25$.`, null, 0.001),
  tf(String.raw`For every integer $n$, $2n+1$ is an odd number.`, true, String.raw`$2n$ is even, so $2n+1$ is one more than an even number.`),
  mc(String.raw`Diophantus wrote abbreviations for the unknown and its powers. Which stage of algebra is this?`, "syncopated", ["rhetorical", "symbolic", "geometric"], "Rhetorical = all words; syncopated = abbreviations; symbolic = modern letters and signs."),
  num(String.raw`Evaluate $x^2-y^2$ when $x=-4$ and $y=-6$.`, -20, String.raw`$16-36=-20$.`),
  fill(String.raw`In $-ab+3a$, the coefficient of $ab$ is ___.`, ["-1", "−1"], String.raw`$-ab=-1ab$.`),
  mx(String.raw`Write an expression for the cost of $t$ tickets at $12$ dollars each plus a $5$-dollar booking fee.`, "12*t+5", String.raw`$12t+5$.`),
  num(String.raw`Use $I=Prt$ to find the interest when $P=800$, $r=0.04$ and $t=3$.`, 96, String.raw`$800(0.04)(3)=96$.`),
  mc(String.raw`Figure $n$ of a pattern has $4n-1$ tiles. Which figure has $63$ tiles?`, "Figure 16", ["Figure 15", "Figure 17", "Figure 64"], String.raw`$4(16)-1=63$.`),
  num(String.raw`Use $A=\frac12bh$ to find the area of a triangle with $b=9$ and $h=7$.`, 31.5, String.raw`$\frac12(63)=31.5$.`, null, 0.001),
  ms(String.raw`Which phrases describe $3n+6$? Select all.`, ["6 more than triple a number", "triple a number, increased by 6", "triple the sum of a number and 6", "the sum of 3 times a number and 6", "6 times a number, plus 3"], [0, 1, 3], String.raw`“Triple the sum of a number and $6$” is $3(n+6)$; “$6$ times a number plus $3$” is $6n+3$.`),
];
