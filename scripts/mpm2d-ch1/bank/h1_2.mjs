// 1.2 Solving Linear Systems by Graphing — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "1.2 Solving Linear Systems by Graphing";
export const Q = [
  num(`Find the $y$-coordinate of the intersection of $y=0.4x+1.2$ and $y=-0.6x+4.2$.`, 2.4, "$x=3$, so $y=0.4(3)+1.2$."),
  num(`The lines $2x-y=1$, $x+y=5$ and $kx+2y=12$ all pass through one point. Find $k$.`, 3, "The first two meet at $(2,3)$; $2k+6=12$."),
  num(`Find the area of the triangle formed by $y=x+2$, $y=-x+6$ and the $x$-axis.`, 16, "Vertices $(-2,0)$, $(6,0)$, $(2,4)$: $\\frac12(8)(4)$."),
  num(`Streaming plan A costs 15 dollars a month. Plan B costs 90 dollars up front plus 6 dollars a month. How much does B save over 12 months (dollars)?`, 18, "A: $180$; B: $90+72=162$."),
  num(`Two friends 12 km apart walk toward each other at 5 km/h and 3 km/h. How far from the faster walker's start do they meet (km)?`, 7.5, "$5t+3t=12\\Rightarrow t=1.5$ h; $5(1.5)$."),
  num(`Balloon A is at 400 m and descends 15 m/min; balloon B is at 100 m and rises 10 m/min. At what height are they level (m)?`, 220, "$400-15t=100+10t\\Rightarrow t=12$."),
  mc(`Which system does the graph show?`, "$2x-y=1$ and $x+y=5$", ["$2x+y=1$ and $x+y=5$", "$x-2y=1$ and $x+y=5$", "$2x-y=1$ and $x-y=5$"], "Lines $y=2x-1$ and $y=-x+5$ meeting at $(2,3)$.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -3, ymax: 6 }, lines: [{ m: 2, b: -1, color: "blue" }, { m: -1, b: 5, color: "red" }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "green" }], step: { x: 1, y: 1 } })),
  tf(`If $(a,b)$ solves a system, then $(b,a)$ solves the system made by swapping $x$ and $y$ in every equation.`, true, "Swapping the variables reflects both lines in $y=x$, and their intersection too."),
  ms(`Select all lines that pass through the intersection of $y=x+1$ and $y=-2x+7$.`, ["$x+y=5$", "$3x-2y=0$", "$y=3$", "$x-y=1$", "$y=2x$"], [0, 1, 2], "The intersection is $(2,3)$."),
  num(`Find $b$ so that $y=2x+b$ and $y=-x+4$ intersect on the $x$-axis.`, -8, "The second line crosses the $x$-axis at $(4,0)$: $0=8+b$."),
  num(`Car rental A: 40 dollars plus 0.25 dollars/km. Rental B: 25 dollars plus 0.40 dollars/km. For a 160 km trip, how much does the cheaper option save (dollars)?`, 9, "A: $80$; B: $89$. (Break-even is $100$ km.)"),
  num(`The line $y=mx-5$ passes through the intersection of $x+y=7$ and $x-y=1$. Find $m$.`, 2, "Intersection $(4,3)$: $3=4m-5$."),
  mc(`Which is the best estimate of the intersection shown?`, "$(1.7,1.8)$", ["$(1.5,2)$", "$(2,1.5)$", "$(1.8,1.7)$"], "Exactly $\\left(\\frac53,\\frac{11}{6}\\right)$.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }, lines: [{ m: 0.5, b: 1, color: "blue" }, { m: -1, b: 3.5, color: "red" }], step: { x: 0.5, y: 0.5 } })),
  num(`Hall A rents for 2000 dollars plus 5 dollars per guest; hall B for 800 dollars plus 11 dollars per guest. For how many guests do they cost the same?`, 200, "$1200=6g$."),
  fill(`The line through the origin and the intersection of $y=x+4$ and $y=-x+2$ has slope ___.`, ["-3"], "Intersection $(-1,3)$: $\\frac{3}{-1}$."),
  num(`Find $k$ if $y=kx+1$ and $y=3x-5$ intersect where $x=3$.`, 1, "At $x=3$: $y=4$; $4=3k+1$."),
  tf(`The system $y=2x+1$, $y=2x+1.001$ has a solution far from the origin.`, false, "Equal slopes, different intercepts: parallel, no solution at all."),
  mc(`Jo has 200 dollars and saves 25 dollars a week; Ana has 50 dollars and saves 40 dollars a week. After the lines intersect…`, "Ana has more savings", ["Jo has more savings", "they always have the same savings", "Jo stops saving"], "They meet at week 10 (450 dollars); Ana's line is steeper.", planeDoc({ view: { xmin: 0, xmax: 16, ymin: 0, ymax: 700 }, lines: [{ m: 25, b: 200, color: "blue", label: "Jo", lx: 13 }, { m: 40, b: 50, color: "red", label: "Ana", lx: 12.5 }], xlabel: "weeks", ylabel: "dollars", step: { x: 2, y: 100 } })),
  num(`Find the area of the triangle formed by $y=2x$, $y=-x+6$ and the $y$-axis.`, 6, "Vertices $(0,0)$, $(0,6)$, $(2,4)$: base $6$, height $2$."),
  num(`A line through $(1,1)$ with slope $2$ meets a line through $(5,1)$ with slope $-2$. Find the $y$-coordinate of the intersection.`, 5, "$y=2x-1$ and $y=-2x+11$: $x=3$."),
];
