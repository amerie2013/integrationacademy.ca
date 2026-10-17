// 1.4 Solving by Elimination — 20 easy + 20 medium questions (money written as "dollars")
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`Solve $x+y=10$ and $x-y=4$ by adding. What is $x$?`, 7, "$2x=14$."),
  num(`Solve $2x+y=11$ and $x-y=1$. What is $y$?`, 3, "Add: $3x=12$, $x=4$; $y=3$."),
  num(`Solve $3x+2y=12$ and $x+2y=8$. What is $x$?`, 2, "Subtract: $2x=4$."),
  mc(`To eliminate $y$ from $2x+3y=7$ and $4x-3y=5$, you should…`, "add the equations", ["subtract the equations", "multiply the first by $2$", "multiply the second by $3$"], "$3y$ and $-3y$ are opposites."),
  mc(`To eliminate $x$ from $5x+2y=9$ and $5x-y=3$, you should…`, "subtract the equations", ["add the equations", "multiply the second by $2$", "divide the first by $5$"], "The $x$-coefficients are equal."),
  num(`Solve $x+3y=7$ and $2x+3y=8$. What is $y$?`, 2, "Subtract: $x=1$; $1+3y=7$."),
  num(`Solve $4x+y=9$ and $2x-y=3$. What is $x$?`, 2, "Add: $6x=12$."),
  tf(`Multiplying both sides of an equation by $3$ changes its graph.`, false, "Every point that satisfied it still does: the same line."),
  mc(`To eliminate $x$ from $2x+5y=1$ and $x-3y=6$, multiply the second equation by…`, "$2$", ["$5$", "$3$", "$-3$"], "Then both have $2x$; subtract."),
  num(`Adding $3x+4y=10$ and $2x-4y=0$ gives $5x=10$. What is $x$?`, 2, "Divide by $5$."),
  fill(`Subtracting $x+2y=5$ from $x+5y=11$ gives $3y=$ ___.`, ["6"], "$11-5=6$."),
  num(`Solve $x+y=5$ and $3x-y=7$. What is $y$?`, 2, "Add: $4x=12$, $x=3$."),
  tf(`If elimination gives $0=6$, the system has no solution.`, true, "A false statement: the lines are parallel."),
  mc(`Solve $2x+y=7$ and $2x-y=1$.`, "$(2,3)$", ["$(3,1)$", "$(2,-3)$", "$(1,5)$"], "Add: $4x=8$."),
  num(`Solve $a-b=2$ and $a+b=12$. What is $b$?`, 5, "Add: $2a=14$, $a=7$."),
  mc(`Which equation is equivalent to $6x+4y=10$?`, "$3x+2y=5$", ["$6x+4y=5$", "$3x+4y=10$", "$3x+2y=10$"], "Divide every term by $2$."),
  num(`Solve $x+2y=4$ and $-x+3y=1$. What is $x$?`, 2, "Add: $5y=5$, $y=1$."),
  tf(`After eliminating one variable and solving, you substitute to find the other.`, true, "Back-substitute into either original equation."),
  num(`Solve $5x+y=13$ and $3x+y=9$. What is $y$?`, 3, "Subtract: $2x=4$, $x=2$."),
  mc(`Which pair can be added directly to eliminate $y$?`, "$3x+2y=1$ and $x-2y=7$", ["$3x+2y=1$ and $x+2y=7$", "$3x+y=1$ and $x+2y=7$", "$3x-2y=1$ and $x-2y=7$"], "The $y$-coefficients must be opposites."),
];

export const M = [
  mc(`Solve $2x+3y=8$ and $3x-y=1$.`, "$(1,2)$", ["$(2,1)$", "$(1,-2)$", "$(4,0)$"], "Multiply the second by $3$ and add: $11x=11$."),
  num(`Solve $3x+2y=4$ and $5x+3y=7$. What is $y$?`, -1, "$\\times3$, $\\times2$: subtract to get $x=2$."),
  num(`Solve $4x-3y=-1$ and $3x+2y=12$. What is $y$?`, 3, "$\\times2$, $\\times3$, add: $17x=34$, $x=2$."),
  num(`Solve $2x-5y=-1$ and $3x+4y=10$. What is $x$?`, 2, "$\\times3$, $\\times2$, subtract: $-23y=-23$, $y=1$."),
  num(`Solve $0.2x+0.3y=1.3$ and $0.5x-0.1y=0.7$. What is $x$?`, 2, "$\\times10$: $2x+3y=13$, $5x-y=7$; $\\times3$ the second and add: $17x=34$."),
  num(`Solve $\\frac{x}{2}+\\frac{y}{3}=4$ and $\\frac{x}{2}-\\frac{y}{6}=1$. What is $y$?`, 6, "$\\times6$: $3x+2y=24$, $3x-y=6$; subtract: $3y=18$."),
  tf(`The system $3x-6y=9$, $-x+2y=-3$ has exactly one solution.`, false, "Multiplying the second by $-3$ gives the first: infinitely many."),
  mc(`Solve $4x+6y=7$ and $6x+9y=5$.`, "no solution", ["infinitely many solutions", "$(1,0.5)$", "$(0,0)$"], "$\\times3$, $\\times2$: $12x+18y=21$ and $12x+18y=10$; subtract: $0=11$."),
  num(`3 apples and 2 oranges cost 2.70 dollars; 2 apples and 3 oranges cost 2.80 dollars. What does one orange cost (dollars)?`, 0.6, "Add: $a+o=1.10$; subtract: $a-o=-0.10$."),
  ms(`Which systems are equivalent to $x+y=5$, $x-y=1$?`, ["$2x=6$, $x+y=5$", "$2y=4$, $x-y=1$", "$2x+2y=10$, $x-y=1$", "$x+y=5$, $x-y=-1$", "$x=3$, $y=-2$"], [0, 1, 2], "Each must have the solution $(3,2)$."),
  num(`Solve $7x+2y=3$ and $3x+2y=-1$. What is $y$?`, -2, "Subtract: $4x=4$, $x=1$."),
  fill(`To eliminate $y$ from $3x+4y=5$ and $2x-6y=1$, multiply the first by $3$ and the second by ___, then add.`, ["2"], "$12y$ and $-12y$."),
  num(`Solve $5x-3y=19$ and $2x+5y=-11$. What is $y$?`, -3, "$\\times5$, $\\times3$, add: $31x=62$, $x=2$."),
  mc(`A student subtracts $4x-3y=1$ from $4x+y=9$. What is the correct result?`, "$4y=8$", ["$-2y=8$", "$-2y=10$", "$4y=10$"], "$y-(-3y)=4y$ and $9-1=8$."),
  num(`Solve $6x+5y=-3$ and $4x+3y=-1$. What is $x$?`, 2, "$\\times2$, $\\times3$, subtract: $y=-3$."),
  num(`2 adult and 3 child movie tickets cost 49 dollars; 3 adult and 2 child tickets cost 51 dollars. What is an adult ticket (dollars)?`, 11, "Add: $a+c=20$; subtract: $a-c=2$."),
  num(`Solve $2x+7y=4$ and $3x+5y=-5$. What is $x$?`, -5, "$\\times3$, $\\times2$, subtract: $11y=22$, $y=2$."),
  tf(`To eliminate $x$ from $2x+3y=5$ and $3x+4y=6$, you can multiply by $3$ and $2$ and then subtract.`, true, "Both become $6x$."),
  num(`Solve $1.5x+2y=10$ and $0.5x-y=0$. What is $y$?`, 2, "$\\times2$ the second: $x-2y=0$; add: $2.5x=10$, $x=4$."),
  num(`The system $2x+y=c$, $x-y=2$ has the solution with $x=3$. Find $c$.`, 7, "$y=1$; $c=6+1$.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 6 }, lines: [{ m: 1, b: -2, color: "red" }], vlines: [{ x: 3, color: "gray", dash: true }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "green" }], step: { x: 1, y: 1 } })),
];
