// 4.3 Transformations & Vertex Form — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, parDoc } from "./fig.mjs";

export const E = [
  num(`What is the $x$-coordinate of the vertex of $y=(x-4)^2+1$?`, 4, "$h=4$."),
  num(`What is the $y$-coordinate of the vertex of $y=(x-4)^2+1$?`, 1, "$k=1$."),
  mc(`Compared with $y=x^2$, the graph of $y=x^2+3$ is…`, "moved up 3", ["moved down 3", "moved right 3", "stretched by 3"], "$k=3$."),
  mc(`Compared with $y=x^2$, the graph of $y=(x+5)^2$ is…`, "moved left 5", ["moved right 5", "moved up 5", "moved down 5"], "$h=-5$."),
  mc(`Compared with $y=x^2$, the graph of $y=-x^2$ is…`, "reflected in the x-axis", ["reflected in the y-axis", "moved down 1", "unchanged"], "$a=-1$."),
  mc(`Compared with $y=x^2$, the graph of $y=2x^2$ is…`, "narrower (vertical stretch)", ["wider (compression)", "moved up 2", "reflected"], "$|a|>1$."),
  tf(`$y=\\frac12x^2$ is wider than $y=x^2$.`, true, "A vertical compression."),
  num(`What is the axis of symmetry of $y=3(x+2)^2-1$ (the value of $x$)?`, -2, "$x=h$."),
  mc(`What is the vertex of $y=-(x-1)^2+6$?`, "$(1,6)$", ["$(-1,6)$", "$(1,-6)$", "$(6,1)$"], "$(h,k)$."),
  tf(`In $y=a(x-h)^2+k$, the value of $k$ moves the graph up or down.`, true, "A vertical translation."),
  num(`What is the optimal value of $y=2(x-3)^2-5$?`, -5, "$k$ — a minimum here."),
  mc(`Does $y=-4(x+1)^2+2$ have a maximum or a minimum?`, "maximum", ["minimum", "neither", "both"], "$a<0$."),
  fill(`$y=(x-h)^2$ has vertex $(6,0)$, so $h=$ ___`, ["6"], "The vertex is $(h,0)$."),
  num(`The point $(0,0)$ on $y=x^2$ moves to which $x$-coordinate on $y=(x-2)^2+3$?`, 2, "$(0,0)\\to(2,3)$."),
  mc(`$y=x^2$ is moved right 3 and down 2. The new equation is…`, "$y=(x-3)^2-2$", ["$y=(x+3)^2-2$", "$y=(x-3)^2+2$", "$y=(x-2)^2-3$"], "$h=3$, $k=-2$."),
  tf(`$y=(x+1)^2$ and $y=x^2+1$ are the same parabola.`, false, "One is left 1, the other up 1."),
  num(`A parabola opens down and is stretched by 5. In $y=a(x-1)^2+2$, what is $a$?`, -5, "Negative for opening down."),
  mc(`$y=0.25x^2$ is a vertical compression by a factor of…`, "$\\frac14$", ["$4$", "$\\frac12$", "$2$"], "$a=0.25$."),
  num(`What is $y$ when $x=1$ on $y=(x-1)^2+4$?`, 4, "The vertex."),
  mc(`Which equation matches the parabola shown?`, "$y=(x+2)^2+3$", ["$y=(x-2)^2+3$", "$y=(x+2)^2-3$", "$y=(x-3)^2+2$"], "Vertex $(-2,3)$, same shape as $y=x^2$.", planeDoc({ view: { xmin: -6, xmax: 2, ymin: -1, ymax: 9 }, curves: [{ f: (x) => (x + 2) ** 2 + 3, color: "violet" }], points: [{ x: -2, y: 3, label: "(−2, 3)", color: "blue" }], step: { x: 1, y: 1 } })),
];

export const M = [
  mc(`Describe $y=-3(x-2)^2+4$.`, "reflect, stretch by 3, right 2, up 4", ["stretch by 3, left 2, up 4", "reflect, compress by 3, right 2, down 4", "reflect, stretch by 3, left 2, up 4"], "$a=-3$, $h=2$, $k=4$."),
  num(`Under $y=2(x+3)^2-5$, the point $(1,1)$ of $y=x^2$ moves to a point with what $y$-coordinate?`, -3, "$2(1)-5$."),
  num(`Under $y=2(x+3)^2-5$, the point $(1,1)$ moves to a point with what $x$-coordinate?`, -2, "$1-3$."),
  num(`A parabola has vertex $(2,1)$ and passes through $(4,9)$. Find $a$.`, 2, "$9=4a+1$."),
  num(`$y=(x-1)^2+k$ passes through $(3,7)$. Find $k$.`, 3, "$4+k=7$."),
  mc(`Which equation has vertex $(-4,-1)$ and $a=\\frac12$?`, "$y=\\frac12(x+4)^2-1$", ["$y=\\frac12(x-4)^2-1$", "$y=\\frac12(x+4)^2+1$", "$y=2(x+4)^2-1$"], "$h=-4$: $(x+4)$."),
  tf(`The range of $y=-2(x-5)^2+3$ is $y\\le3$.`, true, "Maximum value 3."),
  num(`How many zeros does $y=3(x+1)^2+2$ have?`, 0, "Minimum 2 above the axis."),
  ms(`Select all parabolas with vertex $(2,-3)$.`, ["$y=(x-2)^2-3$", "$y=-4(x-2)^2-3$", "$y=(x+2)^2-3$", "$y=0.5(x-2)^2-3$", "$y=(x-2)^2+3$"], [0, 1, 3], "Need $(x-2)$ and $-3$."),
  num(`$y=(x-h)^2+1$ has axis $x=-7$. Find $h$.`, -7, "Axis $x=h$."),
  mc(`Which parabola is the widest?`, "$y=0.2x^2$", ["$y=x^2$", "$y=3x^2$", "$y=-2x^2$"], "Smallest $|a|$."),
  num(`What is the vertical distance between the vertices of $y=(x-1)^2+5$ and $y=(x-1)^2-2$?`, 7, "$5-(-2)$."),
  fill(`$y=a(x+3)^2+2$ passes through $(-1,10)$, so $a=$ ___`, ["2"], "$10=4a+2$."),
  tf(`Reflecting $y=(x-2)^2+1$ in the $x$-axis gives $y=-(x-2)^2-1$.`, true, "Every $y$-value changes sign."),
  num(`Find the $y$-intercept of $y=2(x-3)^2-10$.`, 8, "$18-10$."),
  mc(`How do you move from $y=(x+1)^2$ to $y=(x-4)^2$?`, "right 5", ["left 5", "right 3", "left 3"], "Vertex $-1\\to4$."),
  num(`$y=x^2$ is moved left 1 and down 6. Find the $y$-intercept of the new parabola.`, -5, "$y=(x+1)^2-6$ at $x=0$."),
  num(`What is the maximum height given by $y=-0.5(x-6)^2+9$?`, 9, "$k=9$."),
  mc(`A parabola with $a=-1$ has zeros $1$ and $5$. Its vertex form is…`, "$y=-(x-3)^2+4$", ["$y=-(x-3)^2-4$", "$y=(x-3)^2-4$", "$y=-(x+3)^2+4$"], "Axis 3; $-(2)(-2)=4$."),
  num(`The parabola shown has vertex $(1,-2)$ and passes through $(3,6)$. Find $a$.`, 2, "$6=4a-2$.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 8 }, curves: [{ f: (x) => 2 * (x - 1) ** 2 - 2, color: "violet" }], points: [{ x: 1, y: -2, label: "(1, −2)", color: "blue" }, { x: 3, y: 6, label: "(3, 6)", color: "red" }], step: { x: 1, y: 1 } })),
];
