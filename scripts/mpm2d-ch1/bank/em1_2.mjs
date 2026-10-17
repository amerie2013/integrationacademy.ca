// 1.2 Solving Linear Systems by Graphing — 20 easy + 20 medium questions (money written as "dollars")
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const pl = (lines, points, view = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, extra = {}) => planeDoc({ view, lines, points, step: { x: 1, y: 1 }, ...extra });

export const E = [
  mc(`The solution of a linear system shown on a graph is…`, "the point where the lines intersect", ["the $y$-intercept of each line", "the slope of each line", "any point on either line"], "It lies on both lines, so it satisfies both equations."),
  tf(`$(2,3)$ is a solution of $x+y=5$ and $x-y=-1$.`, true, "$2+3=5$ ✓ and $2-3=-1$ ✓"),
  tf(`$(1,4)$ is a solution of $y=2x+2$ and $y=-x+3$.`, false, "$2+2=4$ ✓ but $-1+3=2\\ne4$."),
  mc(`Which ordered pair solves $y=x+1$ and $y=3x-3$?`, "$(2,3)$", ["$(1,2)$", "$(3,4)$", "$(0,1)$"], "$2+1=3$ and $6-3=3$."),
  num(`The lines in the graph intersect at $(x,y)$. Find $x$.`, 1, "They cross at $(1,2)$.", pl([{ m: 1, b: 1, color: "blue" }, { m: -2, b: 4, color: "red" }], [])),
  num(`The lines in the graph intersect at $(x,y)$. Find $y$.`, -1, "They cross at $(2,-1)$.", pl([{ m: -1, b: 1, color: "blue" }, { m: 0.5, b: -2, color: "red" }], [])),
  mc(`To graph $y=-2x+3$, start at…`, "$(0,3)$, then go down 2 and right 1", ["$(0,-2)$, then up 3 and right 1", "$(3,0)$, then down 2 and right 1", "$(0,3)$, then up 2 and right 1"], "Start at the $y$-intercept and use the slope."),
  num(`What is the $x$-intercept of $x+2y=6$, useful for graphing?`, 6, "Set $y=0$."),
  ms(`Select all points that lie on $y=2x-1$.`, ["$(0,-1)$", "$(1,1)$", "$(2,3)$", "$(3,4)$"], [0, 1, 2], "$(3,4)$: $2(3)-1=5\\ne4$."),
  mc(`Two plans cost the same at the point of intersection. This point is called the…`, "break-even point", ["starting point", "slope", "intercept"], "On one side one plan is cheaper; on the other side the other plan is."),
  tf(`A system of two linear equations can be solved exactly by graphing only when the intersection is easy to read.`, true, "Points between grid lines can only be estimated."),
  num(`Plan A: $C=20+5n$. Plan B: $C=10n$. At how many uses $n$ do they cost the same?`, 4, "$20+5n=10n\\Rightarrow n=4$."),
  mc(`Where do $y=4$ and $x=-2$ intersect?`, "$(-2,4)$", ["$(4,-2)$", "$(0,4)$", "$(-2,0)$"], "A horizontal and a vertical line meet at $(x,y)=(-2,4)$."),
  num(`The lines $y=x$ and $y=-x+6$ meet at $(a,a)$. Find $a$.`, 3, "$a=-a+6$."),
  mc(`What should you do after reading an intersection point from a graph?`, "verify it in both equations", ["verify it in one equation", "find the slopes", "nothing — the graph is exact"], "Substitute into each original equation."),
  fill(`The lines $y=2x$ and $y=x+3$ meet at $(3,$ ___$)$.`, ["6"], "$y=2(3)=6$."),
  tf(`If an ordered pair satisfies only one of the equations, it is still a solution of the system.`, false, "A solution must satisfy every equation."),
  mc(`Which point is the intersection in the graph?`, "$(-1,3)$", ["$(3,-1)$", "$(-1,-3)$", "$(1,3)$"], "Read across then up.", pl([{ m: -1, b: 2, color: "blue" }, { m: 2, b: 5, color: "red" }], [{ x: -1, y: 3, color: "green" }])),
  tf(`$(0,5)$ is the solution of $y=3x+5$ and $y=-x+5$.`, true, "Both lines have $y$-intercept $5$, so they meet at $(0,5)$."),
  mc(`Two hikers' distances are graphed against time. The intersection tells you…`, "when and where they are at the same place", ["who is faster", "who started first", "the total distance"], "Same time and same distance."),
];

export const M = [
  mc(`Solve by graphing: $x+y=4$ and $2x-y=5$.`, "$(3,1)$", ["$(1,3)$", "$(2,2)$", "$(4,0)$"], "Check: $3+1=4$, $6-1=5$.", pl([{ m: -1, b: 4, color: "blue" }, { m: 2, b: -5, color: "red" }], [], { xmin: -2, xmax: 6, ymin: -5, ymax: 6 })),
  num(`The lines $y=\\frac12x+1$ and $y=-x+7$ intersect at $(x,y)$. Find $x$.`, 4, "$\\frac12x+1=-x+7\\Rightarrow \\frac32x=6$."),
  num(`For the lines $2x+3y=12$ and $y=x-1$, find the $y$-coordinate of the intersection.`, 2, "$2x+3(x-1)=12\\Rightarrow 5x=15$, $x=3$, $y=2$."),
  ms(`Which systems have the solution $(1,-2)$?`, ["$x+y=-1$, $x-y=3$", "$y=-2x$, $y=x-3$", "$2x+y=0$, $x=1$", "$y=x-2$, $x+y=3$"], [0, 1, 2], "$(1,-2)$ fails $y=x-2$ ($1-2=-1$)."),
  num(`A gym charges 60 dollars to join plus 20 dollars per month. Another charges 35 dollars per month. After how many months are the costs equal?`, 4, "$60+20m=35m\\Rightarrow m=4$."),
  num(`Two candles: A is 20 cm and burns 2 cm/h; B is 15 cm and burns 1 cm/h. After how many hours are they the same height?`, 5, "$20-2t=15-t\\Rightarrow t=5$."),
  mc(`The graph shows two phone plans. Which statement is true?`, "for under 6 GB, plan A is cheaper", ["plan A is always cheaper", "for under 6 GB, plan B is cheaper", "they never cost the same"], "Below the intersection, A's line is lower.", planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 80 }, lines: [{ m: 8, b: 10, color: "blue", label: "A", lx: 8 }, { m: 3, b: 40, color: "red", label: "B", lx: 8.5 }], points: [{ x: 6, y: 58, label: "(6, 58)", color: "green" }], xlabel: "GB", ylabel: "cost", step: { x: 1, y: 10 } })),
  num(`The lines $y=3x+c$ and $y=-x+2$ meet where $x=-1$. Find $c$.`, 6, "$y=3$ at $x=-1$ on the second line; $3=-3+c$."),
  tf(`The graphs of $y=x+2$ and $2x-2y=-4$ meet at exactly one point.`, false, "The second is $y=x+2$ — the same line."),
  mc(`Which is the best estimate for the solution shown?`, "$(1.5,2.5)$", ["$(2,2)$", "$(1,3)$", "$(2.5,1.5)$"], "The lines cross halfway between grid points.", pl([{ m: 1, b: 1, color: "blue" }, { m: -1, b: 4, color: "red" }], [])),
  num(`Two cars leave a town. Car A: $d=90t$. Car B left earlier and is 60 km ahead: $d=70t+60$. After how many hours does A catch B?`, 3, "$90t=70t+60\\Rightarrow t=3$."),
  num(`Find the $x$-coordinate where $y=-\\frac23x+4$ meets the $x$-axis.`, 6, "Set $y=0$: $\\frac23x=4$."),
  fill(`The lines $x=3$ and $y=2x-1$ meet at $(3,$ ___$)$.`, ["5"], "$2(3)-1=5$."),
  mc(`A system has the solution $(-2,1)$. Which could be one of its lines?`, "$x+3y=1$", ["$x+y=3$", "$2x-y=3$", "$y=x+1$"], "$-2+3=1$ ✓"),
  num(`Taxi A: 3 dollars plus 2 dollars/km. Taxi B: 5 dollars plus 1.50 dollars/km. At what distance (km) do they cost the same?`, 4, "$3+2d=5+1.5d\\Rightarrow 0.5d=2$."),
  tf(`Lines with different slopes always intersect exactly once.`, true, "Non-parallel lines in a plane cross once."),
  num(`The lines $x-y=1$ and $x+y=7$ form an "X". Find the sum of the coordinates of the intersection.`, 7, "$(4,3)$: $4+3=7$."),
  mc(`Why might graphing give only an approximate solution?`, "the intersection may fall between grid lines", ["lines never cross", "graphs are always wrong", "the slopes are unknown"], "Algebra gives exact values."),
  num(`Find the $y$-coordinate of the intersection of $y=2x-3$ and $y=-2x+5$.`, 1, "$4x=8$, $x=2$, $y=1$."),
  ms(`Select the ordered pairs on BOTH lines $x+2y=8$ and $y=x-2$.`, ["$(4,2)$", "$(8,0)$", "$(2,0)$", "$(0,4)$"], [0], "Only $(4,2)$: $4+4=8$ and $4-2=2$."),
];
