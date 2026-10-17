// 1.6 Number of Solutions — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "1.6 Number of Solutions";
const N = ["none", "exactly one", "exactly two", "infinitely many"];
const how = (prompt, correct, feedback, fig) => mc(prompt, correct, N.filter((t) => t !== correct), feedback, fig);

export const Q = [
  num(`$2x+my=n$ and $6x-9y=12$ have infinitely many solutions. Find $m+n$.`, 1, "The first must be $\\frac13$ of the second: $2x-3y=4$, so $m=-3$, $n=4$."),
  num(`For what $k$ does $(k-1)x+4y=6$, $3x+2y=5$ have no solution?`, 7, "$\\frac{k-1}{3}=\\frac42=2$; and $\\frac65\\ne2$."),
  mc(`For which $k$ does $kx+2y=3$, $6x+4y=1$ have exactly one solution?`, "every value except $k=3$", ["only $k=3$", "only $k=6$", "no value of $k$"], "Parallel only when $\\frac k6=\\frac24$."),
  num(`The lines $2x+y=5$, $x-y=1$ and $3x+ky=4$ all pass through one point. Find $k$.`, -2, "The first two meet at $(2,1)$: $6+k=4$."),
  ms(`For $kx+9y=3$ and $x+ky=1$, select all values of $k$ that give no solution.`, ["$k=3$", "$k=-3$", "$k=0$", "$k=9$"], [1], "Parallel when $k^2=9$. $k=3$ gives the same line; $k=-3$ gives $-3x+9y=3$ vs $-3x+9y=-3$."),
  num(`For $kx+9y=3$ and $x+ky=1$, which value of $k$ gives infinitely many solutions?`, 3, "$k=3$: $3x+9y=3$ is $3\\times(x+3y=1)$."),
  tf(`If the left sides of two equations are proportional, the system must have no solution.`, false, "If the right sides are in the same ratio, it has infinitely many."),
  how(`Two cyclists ride the same direction at 18 km/h, one starting 6 km ahead. How many times do their positions match?`, "none", "$d=18t$ and $d=18t+6$: parallel."),
  how(`Gym A: 25 dollars to join plus 12 dollars a visit. Centre B: 12 dollars a visit plus a 25 dollar yearly fee. For how many visit counts do they cost the same in a year?`, "infinitely many", "Both are $C=12v+25$: the same line."),
  num(`A line through $(2,5)$ is parallel to $3x-y=4$. What is its $y$-intercept?`, -1, "Slope $3$: $5=6+b$."),
  mc(`Which equation, with $2x-5y=10$, gives a system with no solution?`, "$4x-10y=15$", ["$4x-10y=20$", "$5x-2y=10$", "$2x+5y=10$"], "Same left-side ratio, different right side."),
  how(`The line $3x+2y=c$ passes through $(1,4)$. How many solutions does it have with $6x+4y=22$?`, "infinitely many", "$c=11$, and $6x+4y=22$ is $2(3x+2y)=2(11)$."),
  fill(`For $y=(a-2)x+5$ and $y=4x-1$ to have no solution, $a=$ ___.`, ["6"], "Equal slopes: $a-2=4$."),
  tf(`$y=3$ and $y=3x$ have no solution because one line is horizontal.`, false, "They meet at $(1,3)$."),
  num(`$ax+by=6$ and $2x+3y=2$ have infinitely many solutions. Find $a+b$.`, 15, "Ratio $\\frac62=3$: $a=6$, $b=9$."),
  mc(`A student's elimination ends with $0x+0y=0$, and they write “$x=0$ and $y=0$”. What is correct?`, "infinitely many solutions — every point on the line", ["the solution is $(0,0)$", "there is no solution", "the method failed; try graphing"], "$0=0$ is always true; it does not give values."),
  ms(`Select all statements that are true for an inconsistent linear system.`, ["the lines are parallel and distinct", "there is no solution", "the slopes are equal", "the $y$-intercepts are equal", "elimination gives $0=0$"], [0, 1, 2], "Equal slopes, different intercepts; elimination gives $0=k$, $k\\ne0$."),
  num(`How many points of intersection do the three lines $y=2x+1$, $y=2x-3$ and $y=-x+3$ have in total?`, 2, "The first two are parallel; the third crosses each once.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 6 }, lines: [{ m: 2, b: 1, color: "blue" }, { m: 2, b: -3, color: "red" }, { m: -1, b: 3, color: "green" }], step: { x: 1, y: 1 } })),
  num(`$y=mx+3$ and $4x-2y=-6$ describe the same line. Find $m$.`, 2, "$-2y=-4x-6\\Rightarrow y=2x+3$."),
  tf(`If $\\frac{a}{d}\\ne\\frac{b}{e}$, the system $ax+by=c$, $dx+ey=f$ has exactly one solution.`, true, "The slopes $-\\frac ab$ and $-\\frac de$ differ."),
];
