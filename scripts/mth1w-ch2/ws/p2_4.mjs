// Worksheet 2.4 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
import { lineT, polyT } from "./tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Solve $n-14=-9$.`, ans: "$n=5$" },
  { level: 1, q: String.raw`Solve $-7x=56$.`, ans: "$x=-8$" },
  { level: 1, q: String.raw`Solve $4y+9=37$ and verify.`, ans: "$y=7$" },
  { level: 2, q: String.raw`Solve $15-2m=-7$.`, ans: "$m=11$" },
  { level: 2, q: String.raw`Solve $\dfrac{x}{6}-3=2$.`, recap: String.raw`Solve $\frac x6-3=2$.`, ans: "$x=30$" },
  { level: 2, q: String.raw`Solve $\dfrac{2c}{5}+1=-7$.`, recap: String.raw`Solve $\frac{2c}{5}+1=-7$.`, ans: "$c=-20$" },
  { level: 2, q: String.raw`Solve $0.6t-2.5=3.5$.`, ans: "$t=10$" },
  { level: 2, q: String.raw`Six more than one-third of a number is $-1$. Write and solve an equation to find the number.`, recap: "Six more than one-third of a number is −1.", ans: String.raw`$\frac n3+6=-1$; $n=-21$` },
  { level: 3, space: 5,
    q: String.raw`A hot-air balloon is $1200$ m above the ground and descends at a steady $45$ m/min.
${lineT({ m: -45, b: 1200, xmax: 30, ymax: 1300, xlabel: "time $t$ (min)", ylabel: "height $h$ (m)", xtick: "0,5,...,30", ytick: "0,200,...,1200", width: 8.5, height: 5 }, "")}
(a) Write a relation for the height $h$ after $t$ minutes.
(b) Write and solve an equation to find when the balloon is $300$ m high. Check on the graph.
(c) When will it land? Give your answer to the nearest tenth of a minute.`,
    recap: "Balloon at 1200 m descending 45 m/min.",
    ans: String.raw`(a) $h=1200-45t$ (b) $1200-45t=300$, $t=20$ min (c) $1200-45t=0$, $t\approx26.7$ min` },
  { level: 3, space: 5,
    q: String.raw`A bowling alley charges $4.50$ dollars per person for shoes plus $28$ dollars per lane per hour. One lane is used: $T=4.5p+28h$.
(a) A group bowled for $2$ hours and paid $101$ dollars. How many people were in the group?
(b) A group of $6$ paid $111$ dollars. How many hours did they bowl?
(c) Can a group of $7$ pay exactly $100$ dollars for a whole number of hours? Explain.`,
    recap: String.raw`Bowling $T=4.5p+28h$.`,
    ans: String.raw`(a) $4.5p+56=101$, $p=10$ (b) $27+28h=111$, $h=3$ (c) No: $28h=68.5$ gives $h\approx2.45$, not whole.` },
  { level: 3, space: 5,
    q: String.raw`The speed of sound in air is about $v=331+0.6T$ metres per second, where $T$ is the temperature in $^\circ$C.
(a) Find the speed of sound at $-20\,^\circ$C.
(b) At what temperature is the speed $349$ m/s?
(c) At $25\,^\circ$C you hear thunder $4$ s after seeing lightning. How far away was the lightning?
(d) At what temperature would sound travel $1.4$ km in $4$ s? Round to one decimal place.`,
    recap: String.raw`Speed of sound $v=331+0.6T$.`,
    ans: String.raw`(a) $319$ m/s (b) $T=30\,^\circ$C (c) $346\times4=1384$ m (d) $v=350$, $T\approx31.7\,^\circ$C` },
  { level: 3, space: 5,
    q: String.raw`I think of a number. I subtract $5$, multiply by $-3$, add $12$, and divide by $6$. The result is $-2$.
(a) Draw a flow chart of the operations and the reverse flow chart.
(b) Work backward to find my number.
(c) Write the whole process as one equation and verify your answer in it.`,
    recap: "Number puzzle: −5, ×(−3), +12, ÷6 gives −2.",
    ans: String.raw`(b) $-2\times6=-12$; $-12-12=-24$; $-24\div(-3)=8$; $8+5=13$ (c) $\frac{-3(n-5)+12}{6}=-2$: $\frac{-24+12}{6}=-2$ ✓` },
  { level: 3, space: 5,
    q: String.raw`An isosceles triangle has two equal sides of $(3x-4)$ cm and a base of $(x+2)$ cm.
${polyT([[0, 0], [3, 0], [1.5, 3.2]], ["x+2", "3x-4", "3x-4"], "")}
(a) Write a simplified expression for the perimeter.
(b) The perimeter is $43$ cm. Find $x$ and the side lengths.
(c) Find the side lengths if the perimeter were $50$ cm instead.`,
    recap: String.raw`Isosceles triangle: sides $3x-4$, base $x+2$.`,
    ans: String.raw`(a) $7x-6$ (b) $x=7$: $17, 17, 9$ cm (c) $x=8$: $20, 20, 10$ cm` },
];
