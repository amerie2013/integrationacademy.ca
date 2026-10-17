// 4.5 Factored Form & the Zeros — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.5 Factored Form & the Zeros";
export const Q = [
  num(`Find the larger zero of $y=6x^2-x-2$ (two decimals).`, 0.67, "$(3x-2)(2x+1)$: $\\frac23$.", null, 0.01),
  num(`A parabola has zeros $3$ and $-5$ and passes through $(1,-24)$. Find its $y$-intercept.`, -30, "$-24=a(-2)(6)$, $a=2$; $2(-3)(5)$."),
  num(`An arch is $50$ m wide at ground level and $20$ m tall. Write $y=ax(x-50)$. Find $a$.`, -0.032, "$20=a(25)(-25)$."),
  num(`For the arch $y=-0.032x(x-50)$, find the height $5$ m from a foot.`, 7.2, "$-0.032(5)(-45)$."),
  mc(`Which parabola has zeros $1$ and $5$ and a maximum value of 8?`, "$y=-2(x-1)(x-5)$", ["$y=2(x-1)(x-5)$", "$y=-(x-1)(x-5)$", "$y=-2(x+1)(x+5)$"], "Axis 3: $a(2)(-2)=8$."),
  num(`How many zeros does $y=a(x-r)(x-r)$ have (with $a\\ne0$)?`, 1, "Both factors give $r$."),
  tf(`$y=(x-1)(x-3)+1$ has zeros $1$ and $3$.`, false, "The $+1$ shifts the graph: it is $(x-2)^2$."),
  num(`Find the zero of $y=(x-1)(x-3)+1$.`, 2, "$x^2-4x+4=(x-2)^2$."),
  ms(`Select all equations of the parabola with vertex $(3,-4)$ and a zero at $1$.`, ["$y=(x-1)(x-5)$", "$y=(x-3)^2-4$", "$y=x^2-6x+5$", "$y=-(x-1)(x-5)$", "$y=(x-1)(x-3)$"], [0, 1, 2], "All three are the same parabola."),
  num(`What is the largest area of a rectangle with perimeter $50$ cm (cm²)?`, 156.25, "$A=x(25-x)$, largest at $12.5$."),
  num(`A garden against a wall uses $24$ m of fence for three sides. What is its largest area (m²)?`, 72, "$A=x(24-2x)$; zeros 0 and 12; $x=6$."),
  fill(`$y=a(x+4)(x-2)$ has vertex $y$-coordinate $18$, so $a=$ ___`, ["-2"], "Axis $-1$: $a(3)(-3)=18$."),
  num(`Find the sum of the zeros of $y=-4x^2+4x+24$.`, 1, "$-4(x-3)(x+2)$."),
  tf(`Two parabolas with the same zeros always have the same vertex.`, false, "They share the axis, but the vertex height depends on $a$."),
  num(`Find the distance between the zeros of $y=2x^2-18x+40$.`, 1, "$2(x-4)(x-5)$."),
  mc(`What is the vertex of $y=-3(x+1)(x-3)$?`, "$(1,12)$", ["$(1,-12)$", "$(-1,12)$", "$(2,9)$"], "Axis 1: $-3(2)(-2)$."),
  num(`At what $x$ is $y=(x+2)(x-6)$ lowest?`, 2, "Halfway between $-2$ and $6$."),
  num(`What is the lowest value of $y=(x+2)(x-6)$?`, -16, "$(4)(-4)$."),
  num(`A parabola has zeros $-1$ and $4$ and vertex $y$-coordinate $-12.5$. Find its $y$-intercept.`, -8, "$a(2.5)(-2.5)=-12.5$, $a=2$; $2(1)(-4)$."),
  num(`A bridge arch is $60$ m wide and $15$ m tall. How high is it $10$ m from one foot (two decimals)?`, 8.33, "$y=-\\frac{1}{60}x(x-60)$; at $x=10$: $\\frac{500}{60}$.", planeDoc({ view: { xmin: -5, xmax: 65, ymin: -1, ymax: 18 }, curves: [{ f: (x) => (-1 / 60) * x * (x - 60), a: 0, b: 60, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 60, y: 0, label: "(60, 0)", color: "red" }, { x: 30, y: 15, label: "(30, 15)", color: "blue" }], xlabel: "m", ylabel: "m", step: { x: 10, y: 3 } }), 0.01),
];
