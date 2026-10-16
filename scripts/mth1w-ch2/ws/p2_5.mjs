// Worksheet 2.5 problems: 3 knowledge, 5 application, 5 textbook-level (multi-part) problems.
import { polyT } from "./tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Solve $3(x+4)=27$.`, ans: "$x=5$" },
  { level: 1, q: String.raw`Solve $6n-5=2n+11$.`, ans: "$n=4$" },
  { level: 1, q: String.raw`Solve $\dfrac{x}{4}+2=\dfrac{x}{2}$.`, recap: String.raw`Solve $\frac x4+2=\frac x2$.`, ans: "$x=8$" },
  { level: 2, q: String.raw`Solve $5(2y-3)-4y=9$.`, ans: "$y=4$" },
  { level: 2, q: String.raw`Solve $8-2(k+3)=3k-13$.`, ans: "$k=3$" },
  { level: 2, q: String.raw`Solve $\dfrac{m+5}{4}=\dfrac{m-1}{2}$.`, recap: String.raw`Solve $\frac{m+5}{4}=\frac{m-1}{2}$.`, ans: "$m=7$" },
  { level: 2, q: String.raw`Show that $3(2x-1)=6x+4$ has no solution. What does the balance look like?`, recap: String.raw`Why $3(2x-1)=6x+4$ has no solution.`, ans: String.raw`$6x-3=6x+4$ gives $-3=4$ (false); the pans can never balance` },
  { level: 2, q: String.raw`The sum of three consecutive odd integers is $159$. Find the integers.`, ans: "$51, 53, 55$" },
  { level: 3, space: 5,
    q: String.raw`Two cyclists are $117$ km apart and ride toward each other at $21$ km/h and $18$ km/h.
(a) Write and solve an equation to find when they meet.
(b) How far has each cyclist ridden?
(c) Suppose the slower cyclist starts $30$ minutes earlier. How long after the faster cyclist starts do they meet? Give hours and minutes.`,
    recap: "Cyclists 117 km apart at 21 and 18 km/h.",
    ans: String.raw`(a) $21t+18t=117$, $t=3$ h (b) $63$ km and $54$ km (c) $21t+18(t+0.5)=117$, $t=\frac{108}{39}\approx2.77$ h $\approx2$ h $46$ min` },
  { level: 3, space: 5,
    q: String.raw`A jar holds $64$ coins, all loonies (\$1) and toonies (\$2), worth $97$ dollars in total.
(a) Let $l$ be the number of loonies. Write an equation and solve it.
(b) How many toonies are there? Verify both conditions.
(c) Could $64$ such coins be worth $130$ dollars? Explain using your equation.`,
    recap: "64 loonies and toonies worth 97 dollars.",
    ans: String.raw`(a) $l+2(64-l)=97$, $l=31$ (b) $33$ toonies; $31+33=64$, $31+66=97$ ✓ (c) No: $128-l=130$ gives $l=-2$.` },
  { level: 3, space: 5,
    q: String.raw`A mother is $4$ times as old as her son. In $20$ years she will be twice as old as he will be.
(a) Write and solve an equation to find their present ages.
(b) Verify your answer in the story.
(c) How many years ago was she $7$ times as old as her son?`,
    recap: "Mother 4 times son's age; in 20 years twice.",
    ans: String.raw`(a) $4s+20=2(s+20)$, $s=10$: son $10$, mother $40$ (b) In $20$ years: $60=2(30)$ ✓ (c) $40-y=7(10-y)$, $y=5$ years ago` },
  { level: 3, space: 5.5,
    q: String.raw`(a) Half of a number plus one-fifth of the number equals one-quarter of the number plus $27$. Find the number.
(b) One pump fills a pool in $6$ h; a second pump fills it in $3$ h. What fraction of the pool does each fill in one hour? Solve $\frac t6+\frac t3=1$ to find how long they take together.
(c) A third pump that fills the pool in $12$ h also helps. How long do all three take?`,
    recap: "Fraction number problem; pumps 6 h, 3 h (and 12 h).",
    ans: String.raw`(a) $\frac x2+\frac x5=\frac x4+27$, $x=60$ (b) $\frac16$ and $\frac13$; $t=2$ h (c) $\frac t6+\frac t3+\frac t{12}=1$, $t=\frac{12}{7}\approx1.71$ h` },
  { level: 3, space: 5,
    q: String.raw`(a) The angles of a triangle are $(2x+10)^\circ$, $(3x-5)^\circ$ and $(x+25)^\circ$. Find $x$ and each angle, and classify the triangle.
${polyT([[0, 0], [4, 0], [1.4, 2.6]], ["", "", ""], "")}
(b) A rectangle's length is $3$ cm less than twice its width. If the length were increased by $5$ cm and the width decreased by $1$ cm, the perimeter would be $44$ cm. Find the dimensions of the original rectangle.`,
    recap: String.raw`Triangle angles $2x+10$, $3x-5$, $x+25$; rectangle $l=2w-3$.`,
    ans: String.raw`(a) $6x+30=180$, $x=25$: $60^\circ, 70^\circ, 50^\circ$, acute scalene (b) $2(2w+2+w-1)=44$, $w=7$ cm, $l=11$ cm` },
];
