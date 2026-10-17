// 4.4 Graphing from Vertex Form — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, parDoc } from "./fig.mjs";

export const E = [
  num(`What is the $y$-coordinate of the vertex of $y=(x-1)^2-4$?`, -4, "$k=-4$."),
  num(`On $y=(x-2)^2+3$, what is $y$ one unit right of the vertex?`, 4, "$3+1$."),
  num(`On $y=(x-2)^2+3$, what is $y$ two units right of the vertex?`, 7, "$3+4$."),
  num(`On $y=3(x+1)^2-2$, what is $y$ one unit right of the vertex?`, 1, "$-2+3$."),
  mc(`For $a=1$, the step pattern from the vertex is up…`, "1, 4, 9", ["1, 2, 3", "2, 4, 6", "1, 3, 5"], "Squares of 1, 2, 3."),
  mc(`For $a=2$, the step pattern is up…`, "2, 8, 18", ["2, 4, 6", "1, 4, 9", "4, 16, 36"], "Multiply 1, 4, 9 by 2."),
  tf(`Points on a parabola come in mirror pairs across the axis.`, true, "Except the vertex."),
  num(`Find the $y$-intercept of $y=(x-3)^2+1$.`, 10, "$9+1$."),
  num(`Find the larger zero of $y=(x-4)^2-1$.`, 5, "$x-4=\\pm1$."),
  num(`Find the smaller zero of $y=(x+1)^2-4$.`, -3, "$x+1=\\pm2$."),
  tf(`$y=(x-2)^2+5$ has zeros.`, false, "Its minimum is 5."),
  mc(`How many zeros does $y=-(x-1)^2+9$ have?`, "2", ["0", "1", "3"], "Opens down from 9 above the axis."),
  fill(`For $a=-1$, from the vertex go over 1 and ___ 1.`, ["down"], "Negative $a$ makes the steps go down."),
  num(`Find the $y$-intercept of $y=-2(x-1)^2+5$.`, 3, "$-2+5$."),
  num(`Find the larger zero of $y=-(x-3)^2+16$.`, 7, "$(x-3)^2=16$."),
  mc(`Solving $(x-2)^2=9$ gives…`, "$x=5$ or $x=-1$", ["$x=5$ only", "$x=11$ or $x=-7$", "$x=3$ or $x=-3$"], "$x-2=\\pm3$."),
  num(`$y=(x+6)^2$ has exactly one zero. What is it?`, -6, "The vertex is on the axis."),
  tf(`Graphing with the step pattern starts by plotting the vertex.`, true, "Everything is measured from it."),
  num(`On $y=\\frac12(x-h)^2+1$, what is $y$ three units from the vertex?`, 5.5, "$1+\\frac12(9)$."),
  mc(`What are the zeros of the parabola shown?`, "$-1$ and $3$", ["$1$ and $-3$", "$-4$ and $0$", "$1$ and $4$"], "It crosses the $x$-axis at $-1$ and $3$.", parDoc((x) => (x - 1) ** 2 - 4, [-1, 3], { xmin: -3, xmax: 5, ymin: -5, ymax: 6 })),
];

export const M = [
  num(`Find the larger zero of $y=2(x-1)^2-8$.`, 3, "$(x-1)^2=4$."),
  num(`Find the smaller zero of $y=-3(x+2)^2+12$.`, -4, "$(x+2)^2=4$."),
  num(`Find the $y$-intercept of $y=-\\frac12(x-4)^2+6$.`, -2, "$-8+6$."),
  num(`Find the smaller zero of $y=(x-5)^2-3$ (two decimals).`, 3.27, "$5-\\sqrt3$.", null, 0.01),
  mc(`How many zeros does $y=4(x+3)^2$ have?`, "1", ["0", "2", "4"], "The vertex is on the axis."),
  ms(`Select all points on $y=2(x-1)^2-3$.`, ["$(1,-3)$", "$(2,-1)$", "$(0,-1)$", "$(3,5)$", "$(-1,1)$"], [0, 1, 2, 3], "At $x=-1$: $2(4)-3=5$."),
  num(`On $y=-3(x-h)^2+10$, what is $y$ two units left of the vertex?`, -2, "$10-12$."),
  tf(`$y=0.5(x+2)^2-8$ has zeros $2$ and $-6$.`, true, "$(x+2)^2=16$."),
  num(`$y=(x-3)^2+k$ passes through $(5,0)$. Find $k$.`, -4, "$4+k=0$."),
  mc(`Which parabola has no zeros?`, "$y=2(x+1)^2+3$", ["$y=2(x+1)^2-3$", "$y=-2(x+1)^2+3$", "$y=(x+1)^2$"], "Opens up from a minimum above the axis."),
  num(`Water from a fountain follows $h=-(d-3)^2+9$. How far from the nozzle does it land?`, 6, "$(d-3)^2=9$: $d=6$ (or 0)."),
  num(`A diver's height is $h=-5(t-1)^2+20$. When does the diver reach the water?`, 3, "$(t-1)^2=4$."),
  fill(`The zeros of $y=2(x-4)^2-18$ are $1$ and ___`, ["7"], "$(x-4)^2=9$."),
  num(`For $h=-5(t-1)^2+20$, what is the height at $t=0$?`, 15, "$-5+20$."),
  mc(`The exact zeros of $y=(x+2)^2-5$ are…`, "$-2\\pm\\sqrt5$", ["$2\\pm\\sqrt5$", "$-2\\pm5$", "$-7$ and $3$"], "$x+2=\\pm\\sqrt5$."),
  num(`How many zeros does $y=-0.2(x-7)^2$ have?`, 1, "Its vertex is on the axis."),
  num(`Find the distance between the zeros of $y=(x-1)^2-25$.`, 10, "Zeros $6$ and $-4$."),
  tf(`If $a$ and $k$ have the same sign, $y=a(x-h)^2+k$ has no zeros.`, true, "The vertex is on the wrong side of the axis."),
  mc(`The zeros of $y=-(x+4)^2+1$ are…`, "$-3$ and $-5$", ["$3$ and $5$", "$-4$ and $1$", "$-3$ and $5$"], "$(x+4)^2=1$."),
  num(`Find the $y$-intercept of the parabola shown.`, 0, "$y=-(x-2)^2+4$ at $x=0$.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 5 }, curves: [{ f: (x) => -((x - 2) ** 2) + 4, color: "violet" }], points: [[2, 4], [1, 3], [3, 3]].map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: "blue" })), step: { x: 1, y: 1 } })),
];
