// 1.4 Solving by Elimination — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "1.4 Solving by Elimination";
export const Q = [
  num(`Solve $0.3x-0.2y=0.4$ and $0.4x+0.5y=1.3$. What is $y$?`, 1, "$\\times10$: $3x-2y=4$, $4x+5y=13$; $\\times5$, $\\times2$, add: $23x=46$."),
  num(`Solve $\\frac{x}{3}+\\frac{y}{2}=3$ and $\\frac{x}{6}-\\frac{y}{4}=-\\frac12$. What is $y$?`, 4, "$\\times6$: $2x+3y=18$; $\\times12$: $2x-3y=-6$; add: $x=3$."),
  num(`$(3,-1)$ is the solution of $ax+by=11$ and $bx-ay=7$. Find $a$.`, 4, "$3a-b=11$, $a+3b=7$: $a=4$, $b=1$."),
  num(`Solve $\\frac2x+\\frac3y=13$ and $\\frac5x-\\frac4y=-2$. What is $x$? (decimal)`, 0.5, "With $u=\\frac1x$, $v=\\frac1y$: $u=2$, $v=3$."),
  num(`3 burgers and 2 fries cost 21.50 dollars; 2 burgers and 3 fries cost 18.50 dollars. What does one order of fries cost (dollars)?`, 2.5, "Add: $b+f=8$; subtract: $b-f=3$."),
  num(`How many litres of 20% solution are mixed with 50% solution to make 60 L of 30% solution?`, 40, "$x+y=60$, $2x+5y=180$: $3y=60$."),
  num(`A plane flies 1800 km with the wind in 3 h and against it in 4 h. Find the wind speed (km/h).`, 75, "$p+w=600$, $p-w=450$."),
  num(`For what $k$ does elimination give $0=0$ for $6x+ky=8$ and $9x-12y=12$?`, -8, "Ratios: $\\frac69=\\frac{k}{-12}=\\frac{8}{12}$."),
  ms(`Select all systems with no solution.`, ["$2x-3y=4$, $4x-6y=7$", "$2x-3y=4$, $4x-6y=8$", "$x+y=2$, $x-y=2$", "$3x+y=1$, $6x+2y=3$", "$5x-y=0$, $10x-2y=1$"], [0, 3, 4], "Left sides proportional, right sides not."),
  num(`$a+b=9$, $b+c=11$ and $a+c=12$. Find $c$.`, 7, "Add all three: $a+b+c=16$; subtract $a+b=9$."),
  num(`Solve $11x-4y=10$ and $5x+6y=28$. What is $y$?`, 3, "$\\times3$, $\\times2$, add: $43x=86$, $x=2$."),
  mc(`For $3x+4y=5$ and $2x-6y=1$, the most efficient way to eliminate $y$ is to…`, "multiply by $3$ and $2$, then add", ["multiply by $6$ and $4$, then add", "multiply by $2$ and $3$, then subtract", "multiply by $3$ and $2$, then subtract"], "LCM of $4$ and $6$ is $12$: $12y$ and $-12y$."),
  num(`Three years ago a father was 4 times as old as his son. In 9 years he will be twice as old. How old is the father now?`, 27, "$f-4s=-9$, $f-2s=9$: $s=9$."),
  num(`Twice one number plus three times another is 34; five times the first minus twice the second is 9. Find the second number.`, 8, "$\\times2$, $\\times3$, add: $19a=95$, $a=5$."),
  tf(`If elimination gives $0=0$, every ordered pair $(x,y)$ is a solution.`, false, "Only the points on the (shared) line are solutions."),
  fill(`The solution of $4x+3y=-2$ and $3x-2y=7$ has $x=$ ___.`, ["1"], "$\\times2$, $\\times3$, add: $17x=17$."),
  num(`A van rents for 3 days and 200 km for 270 dollars, or 5 days and 350 km for 457.50 dollars. What is the daily rate (dollars)?`, 60, "$\\times5$, $\\times3$, subtract: $50k=22.5$, $k=0.45$; $3d=180$."),
  mc(`Solve $2(x+y)-(x-y)=7$ and $3(x-y)+(x+y)=14$.`, "$(4,1)$", ["$(1,4)$", "$(4,-1)$", "$(3,2)$"], "Simplify: $x+3y=7$ and $4x-2y=14$."),
  num(`The lines $3x+2y=12$, $x-2y=-4$ and the $x$-axis form a triangle. Find its area.`, 12, "The lines meet at $(2,3)$; $x$-intercepts $4$ and $-4$: $\\frac12(8)(3)$.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 6 }, lines: [{ m: -1.5, b: 6, color: "blue" }, { m: 0.5, b: 2, color: "red" }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "green" }], step: { x: 1, y: 1 } })),
  tf(`Elimination and substitution always give the same solution for a system.`, true, "Both are exact algebraic methods applied to the same equations."),
];
