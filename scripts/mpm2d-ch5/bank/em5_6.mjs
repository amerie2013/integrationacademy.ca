// 5.6 Linear–Quadratic Systems (enrichment) — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  mc(`How many points can a line and a parabola have in common?`, "$0$, $1$ or $2$", ["always $2$", "$0$ to $3$", "only $1$"], "Substitution gives a quadratic equation."),
  num(`Solve $y=x^2$ and $y=9$. Enter the positive $x$-coordinate.`, 3, "$x^2=9$."),
  num(`Solve $y=x^2$ and $y=x+2$. Enter the larger $x$-coordinate.`, 2, "$x^2-x-2=(x-2)(x+1)=0$."),
  tf(`A tangent line meets the parabola at exactly one point.`, true, "The combined equation has a double root."),
  mc(`What is the first step to solve $y=x^2+1$ and $y=2x+4$?`, "set $x^2+1=2x+4$", ["set $x^2+1=0$", "set $2x+4=0$", "add the equations"], "Both expressions equal $y$."),
  num(`Solve $y=x^2$ and $y=3x$. Enter the non-zero $x$-coordinate.`, 3, "$x^2-3x=0$."),
  num(`Solve $y=x^2-1$ and $y=3$. Enter the positive $x$-coordinate.`, 2, "$x^2=4$."),
  mc(`Setting $x^2+2x=x+6$ and rearranging gives…`, "$x^2+x-6=0$", ["$x^2+3x-6=0$", "$x^2+x+6=0$", "$x^2-x-6=0$"], "Subtract $x$ and $6$."),
  num(`Where does $y=x^2-4$ meet the x-axis? Enter the positive $x$-value.`, 2, "Set $y=0$: $x^2=4$."),
  tf(`If the combined equation has $D<0$, the line and the parabola do not meet.`, true, "No real roots, no points."),
  num(`How many times does $y=x^2$ meet the line $y=-1$?`, 0, "$x^2=-1$ has no real roots."),
  num(`Solve $y=x^2+2$ and $y=3x$. Enter the larger $x$-coordinate.`, 2, "$x^2-3x+2=(x-1)(x-2)=0$."),
  mc(`After finding the $x$-coordinates, how do you find the $y$-coordinates?`, "substitute into either equation (the line is simpler)", ["set $y=0$", "take the square root", "use the discriminant"], "Each $x$ gives a point."),
  num(`$y=x^2$ and $y=2x-1$ meet at one point. Find its $y$-coordinate.`, 1, "$x^2-2x+1=0\\Rightarrow x=1$."),
  fill(`A line that crosses a parabola at two points is called a ___.`, ["secant", "secant line"], "Tangent: one point; secant: two."),
  num(`Solve $y=x^2+1$ and $y=x+3$. Enter the smaller $x$-coordinate.`, -1, "$x^2-x-2=(x-2)(x+1)=0$."),
  tf(`$y=x^2$ and $y=-x$ meet at $(0,0)$ and $(-1,1)$.`, true, "$x^2+x=0$: $x=0$ or $-1$."),
  num(`Find the discriminant of the combined equation for $y=x^2$ and $y=x+1$.`, 5, "$x^2-x-1=0$: $1+4$."),
  mc(`Where do $y=x^2+4$ and $y=4$ meet?`, "only at $(0,4)$", ["at $(2,4)$ and $(-2,4)$", "nowhere", "at $(4,4)$"], "$x^2=0$."),
  num(`The graph shows $y=x^2-2$ and $y=x$. Find the $x$-coordinate of the intersection point in the first quadrant.`, 2, "$x^2-x-2=0$: $x=2$ or $-1$.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -3, ymax: 6 }, curves: [{ f: (x) => x * x - 2, color: "violet" }], lines: [{ m: 1, b: 0, color: "blue" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(`Solve $y=x^2-3x$ and $y=x-3$. Enter the larger $x$-coordinate.`, 3, "$x^2-4x+3=(x-1)(x-3)=0$."),
  num(`Solve $y=x^2-3x$ and $y=x-3$. Enter the $y$-coordinate of the point with the larger $x$.`, 0, "$x=3$: $y=3-3$."),
  num(`Solve $y=-x^2+5$ and $y=x-1$. Enter the positive $x$-coordinate.`, 2, "$x^2+x-6=(x+3)(x-2)=0$."),
  num(`How many intersection points do $y=x^2+3x+4$ and $y=x+3$ have?`, 1, "$x^2+2x+1=0$: $D=0$."),
  num(`How many intersection points do $y=x^2-2x+5$ and $y=2x$ have?`, 0, "$x^2-4x+5=0$: $D=-4$."),
  num(`How many intersection points do $y=2x^2$ and $y=4x-1$ have?`, 2, "$2x^2-4x+1=0$: $D=8$."),
  mc(`Where do $y=x^2+2x-3$ and $y=2x+1$ meet?`, "$(2,5)$ and $(-2,-3)$", ["$(2,5)$ only", "$(4,9)$ and $(-4,-7)$", "$(1,3)$ and $(-1,-1)$"], "$x^2=4$."),
  num(`For which value of $k$ does $y=k$ meet $y=x^2-4x+7$ exactly once?`, 3, "The vertex is $(2,3)$."),
  num(`Find $k$ so that $y=2x+k$ is tangent to $y=x^2$.`, -1, "$x^2-2x-k=0$: $4+4k=0$."),
  tf(`$y=x^2+4$ and $y=4x$ are tangent at $(2,8)$.`, true, "$x^2-4x+4=(x-2)^2=0$."),
  num(`$y=x^2-5x+6$ and $y=x-3$ meet once. Find the $x$-coordinate.`, 3, "$x^2-6x+9=(x-3)^2=0$."),
  num(`Find the sum of the $x$-coordinates where $y=x^2$ meets $y=5x-6$.`, 5, "$x^2-5x+6=0$: $2+3$."),
  ms(`Select all systems with exactly two intersection points.`, ["$y=x^2$, $y=1$", "$y=x^2$, $y=-1$", "$y=x^2+1$, $y=2x$", "$y=x^2-3$, $y=x$", "$y=-x^2$, $y=-4$"], [0, 3, 4], "Two points when the combined $D>0$."),
  num(`Solve $y=-x^2+4x$ and $y=x$. Enter the larger $y$-coordinate.`, 3, "$-x^2+3x=0$: $x=0$ or $3$."),
  num(`Find the positive $b$ for which $y=x^2+bx+1$ touches the line $y=0$ exactly once.`, 2, "$b^2-4=0$."),
  tf(`If a line is tangent to a parabola, the combined equation has a double root.`, true, "One point of contact means $D=0$."),
  num(`Solve $y=0.5x^2$ and $y=x+4$. Enter the larger $x$-coordinate.`, 4, "$x^2-2x-8=(x-4)(x+2)=0$."),
  num(`Solve $y=x^2$ and $y=2x+2$. Enter the larger $x$-coordinate to two decimal places.`, 2.73, "$x^2-2x-2=0$: $x=1+\\sqrt3$.", null, 0.01),
  mc(`Which line is tangent to $y=x^2+1$?`, "$y=2x$", ["$y=x$", "$y=3x$", "$y=2x+1$"], "$x^2-2x+1=0$ has $D=0$."),
  num(`The graph shows $y=-x^2+4x$ and $y=-x+4$. Find the $y$-coordinate of the left intersection point.`, 3, "$x^2-5x+4=0$: $x=1$, $y=3$.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -3, ymax: 6 }, curves: [{ f: (x) => -x * x + 4 * x, color: "violet" }], lines: [{ m: -1, b: 4, color: "blue" }], step: { x: 1, y: 1 } })),
];
