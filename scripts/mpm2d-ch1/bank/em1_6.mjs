// 1.6 Number of Solutions — 20 easy + 20 medium questions (money written as "dollars")
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const N = ["none", "exactly one", "exactly two", "infinitely many"];
const how = (prompt, correct, feedback, fig) => mc(prompt, correct, N.filter((t) => t !== correct), feedback, fig);

export const E = [
  how(`How many solutions does $y=2x+1$, $y=2x-3$ have?`, "none", "Same slope, different intercepts: parallel."),
  how(`How many solutions does $y=3x+1$, $y=-x+1$ have?`, "exactly one", "Different slopes: the lines cross once."),
  how(`How many solutions does $y=x+4$, $2y=2x+8$ have?`, "infinitely many", "Dividing the second by 2 gives the first: the same line."),
  tf(`Two distinct parallel lines have no points in common.`, true, "They never meet."),
  mc(`Two lines with the same slope and the same $y$-intercept are…`, "the same line", ["parallel and distinct", "perpendicular", "intersecting once"], "Every point on one is on the other."),
  mc(`A system with no solution is called…`, "inconsistent", ["consistent", "coincident", "equivalent"], "Consistent systems have at least one solution."),
  tf(`A linear system can have exactly two solutions.`, false, "Two lines meet once, never, or everywhere."),
  num(`How many solutions does $y=5x-2$, $y=-5x-2$ have?`, 1, "Different slopes; they meet at $(0,-2)$."),
  how(`Elimination gives $0=0$. How many solutions are there?`, "infinitely many", "A true statement: the same line."),
  how(`Elimination gives $0=9$. How many solutions are there?`, "none", "A false statement: parallel lines."),
  how(`How many solutions does the system in the graph have?`, "none", "The lines are parallel.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, lines: [{ m: 0.5, b: 1, color: "blue" }, { m: 0.5, b: -2, color: "red" }], step: { x: 1, y: 1 } })),
  num(`What slope does a line parallel to $y=-4x+7$ have?`, -4, "Parallel lines have equal slopes."),
  tf(`Lines with different slopes always intersect at exactly one point.`, true, "They cannot be parallel."),
  mc(`Which line is parallel to $y=\\frac12x+3$ but not the same line?`, "$y=\\frac12x-1$", ["$y=2x+3$", "$y=\\frac12x+3$", "$y=-2x+3$"], "Same slope, different intercept."),
  mc(`Which equation, with $x+y=4$, makes a system with infinitely many solutions?`, "$2x+2y=8$", ["$x+y=5$", "$x-y=4$", "$2x+y=4$"], "It is $2\\times$ the first equation."),
  fill(`Two lines both have slope $3$ and $y$-intercept $2$. The system has ___ solutions.`, ["infinitely many", "infinite", "infinitely"], "They are the same line."),
  tf(`$y=2x$ and $y=2x+0$ describe the same line.`, true, "Adding 0 changes nothing."),
  num(`How many solutions does $x=2$, $y=-1$ have?`, 1, "A vertical and a horizontal line meet at $(2,-1)$."),
  how(`The graph shows a linear system. How many solutions does it have?`, "exactly one", "The lines cross once.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, lines: [{ m: -1, b: 1, color: "blue" }, { m: 2, b: -2, color: "red" }], step: { x: 1, y: 1 } })),
  tf(`Parallel lines have equal slopes.`, true, "That is what makes them parallel."),
];

export const M = [
  how(`How many solutions does $2x+3y=6$, $4x+6y=12$ have?`, "infinitely many", "The second is $2\\times$ the first."),
  how(`How many solutions does $2x+3y=6$, $4x+6y=10$ have?`, "none", "Left sides proportional ($\\times2$), right sides not."),
  how(`How many solutions does $2x+3y=6$, $3x-2y=6$ have?`, "exactly one", "Slopes $-\\frac23$ and $\\frac32$ differ."),
  num(`For what $k$ does $y=kx+2$, $y=-3x+5$ have no solution?`, -3, "Equal slopes, different intercepts."),
  num(`For what $k$ does $4x+ky=7$, $2x+3y=1$ have no solution?`, 6, "$\\frac42=\\frac{k}{3}$ gives $k=6$; $\\frac71\\ne2$."),
  num(`For what $c$ does $3x-y=c$, $6x-2y=10$ have infinitely many solutions?`, 5, "The second divided by 2 is $3x-y=5$."),
  tf(`$y=-2x+5$ and $4x+2y=10$ describe the same line.`, true, "$2y=-4x+10\\Rightarrow y=-2x+5$."),
  how(`Solve $y=3x-1$, $6x-2y=4$ by substitution. How many solutions?`, "none", "$6x-6x+2=4$ gives $2=4$, false."),
  ms(`Select all systems with exactly one solution.`, ["$y=2x+1$, $y=3x+1$", "$x+y=3$, $x-y=3$", "$y=4x$, $y=4x-1$", "$2x-y=1$, $4x-2y=2$", "$x=3$, $y=3$"], [0, 1, 4], "Look for different slopes."),
  mc(`Ari has 100 dollars and saves 20 dollars a week; Bea has 50 dollars and saves 20 dollars a week. When will they have the same amount?`, "never", ["after 5 weeks", "after 2.5 weeks", "after 10 weeks"], "Same rate, different start: parallel lines."),
  num(`For what $a$ does $ax+2y=8$, $3x+y=4$ have infinitely many solutions?`, 6, "Multiply the second by 2: $6x+2y=8$."),
  fill(`Lines with the same slope and different $y$-intercepts are ___.`, ["parallel"], "They never meet."),
  mc(`Which system is consistent?`, "$2x+y=3$, $4x+2y=6$", ["$y=x+1$, $y=x+2$", "$x+y=1$, $x+y=2$", "$y=3$, $y=5$"], "Coincident lines have (infinitely many) solutions."),
  tf(`A consistent system has at least one solution.`, true, "That is the definition."),
  how(`For $a_1x+b_1y=c_1$ and $a_2x+b_2y=c_2$, $\\frac{a_1}{a_2}=\\frac{b_1}{b_2}\\ne\\frac{c_1}{c_2}$. How many solutions?`, "none", "Same slope, different lines."),
  num(`For what $b$ do $y=2x+b$ and $4x-2y=6$ describe the same line?`, -3, "$4x-2y=6\\Rightarrow y=2x-3$."),
  mc(`Receipt 1: 2 apples and 1 pear cost 3 dollars. Receipt 2: 4 apples and 2 pears cost 6 dollars. What can you conclude?`, "no unique prices: infinitely many possibilities", ["an apple costs 1 dollar", "the receipts contradict each other", "a pear costs 1.50 dollars"], "Receipt 2 is just receipt 1 doubled."),
  tf(`If a linear system has two different solutions, it has infinitely many.`, true, "Two shared points mean the lines are the same."),
  num(`The lines $x+2y=4$ and $2x+4y=k$ have infinitely many solutions. Find $k$.`, 8, "The second must be $2\\times$ the first."),
  mc(`Describe the system $3x-6y=9$, $x-2y=4$.`, "parallel lines; no solution", ["the same line; infinitely many solutions", "intersecting lines; one solution", "perpendicular lines; one solution"], "The first is $x-2y=3$."),
];
