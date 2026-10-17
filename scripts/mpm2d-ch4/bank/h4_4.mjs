// 4.4 Graphing from Vertex Form — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.4 Graphing from Vertex Form";
export const Q = [
  num(`For which $k$ does $y=5(x-2)^2+k$ have exactly one zero?`, 0, "The vertex must be on the axis."),
  num(`What is the smallest integer $k$ for which $y=(x-1)^2+k$ has no zeros?`, 1, "$k>0$."),
  num(`Find the larger zero of $y=3(x-2)^2-7$ (two decimals).`, 3.53, "$2+\\sqrt{7/3}$.", null, 0.01),
  num(`A ball's height is $h=-4.9(t-2)^2+22$. When does it land (two decimals)?`, 4.12, "$(t-2)^2=\\frac{22}{4.9}$.", null, 0.01),
  num(`How wide is the parabola $y=-0.5x^2+8$ at the $x$-axis?`, 8, "$x^2=16$: from $-4$ to $4$."),
  mc(`A parabola has vertex $(2,-8)$ and zeros $0$ and $4$. Its equation is…`, "$y=2(x-2)^2-8$", ["$y=(x-2)^2-8$", "$y=-2(x-2)^2-8$", "$y=2(x+2)^2-8$"], "$0=2(4)-8$ ✓"),
  num(`$y=a(x-3)^2-12$ has a zero at $x=5$. Find $a$.`, 3, "$4a=12$."),
  tf(`$y=-(x-1)^2-0.001$ has no zeros.`, true, "Its maximum is just below the axis."),
  ms(`Select all parabolas with zeros $1$ and $5$.`, ["$y=(x-3)^2-4$", "$y=-(x-3)^2+4$", "$y=2(x-3)^2-8$", "$y=(x-3)^2+4$", "$y=(x-1)^2-5$"], [0, 1, 2], "Each is zero at $x=3\\pm2$."),
  num(`A parabola with $a=1$ has zeros $-2$ and $6$. Find the $y$-coordinate of its vertex.`, -16, "Axis 2: $(4)(-4)$."),
  num(`How many times does $y=(x-2)^2+1$ meet the $x$-axis?`, 0, "Minimum 1."),
  num(`Find the sum of the zeros of $y=4(x+5)^2-36$.`, -10, "Zeros $-2$ and $-8$."),
  mc(`For $y=-0.5(x-h)^2+k$, from the vertex go over 2 and…`, "down 2", ["up 2", "down 4", "down 1"], "$-0.5\\times4$."),
  num(`An arch is $y=-(x-5)^2+25$. How high is it 1 unit from a foot ($x=1$)?`, 9, "$-16+25$."),
  fill(`$y=(x-h)^2-9$ has zeros $2$ and $8$, so $h=$ ___`, ["5"], "Halfway."),
  num(`$y=-2(x+1)^2+k$ has zeros $-3$ and $1$. Find $k$.`, 8, "$-2(2)^2+k=0$."),
  tf(`$y=(x-a)^2-b^2$ (with $b\\ne0$) always has zeros $a\\pm b$.`, true, "$(x-a)^2=b^2$."),
  num(`A projectile follows $y=-\\frac{1}{16}(x-20)^2+25$ (metres). What is its horizontal range?`, 40, "$(x-20)^2=400$: $0$ to $40$."),
  num(`For $y=-\\frac{1}{16}(x-20)^2+25$, find the height at $x=10$.`, 18.75, "$-\\frac{100}{16}+25$."),
  num(`Use the graph of $y=2(x+1)^2-8$ to find the sum of its zeros.`, -2, "Zeros $1$ and $-3$.", planeDoc({ view: { xmin: -5, xmax: 3, ymin: -9, ymax: 6 }, curves: [{ f: (x) => 2 * (x + 1) ** 2 - 8, color: "violet" }], points: [{ x: -1, y: -8, label: "(−1, −8)", color: "blue" }], step: { x: 1, y: 1 } })),
];
