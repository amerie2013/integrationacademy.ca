// MCF3M chapter 3 written-response questions (Part C of printed tests), each with a figure and a marking guide.
import { planeDoc, areaBox } from "../figs.mjs";
import { lesson } from "../plan.mjs";
const S = String.raw;
const W = (code, difficulty, points, prompt, feedback, fig) => ({ topic: lesson(code).full, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W("3.1", "medium", 4, S`For $y=-2(x-1)(x-7)$: (a) zeros; (b) axis and vertex; (c) $y$-intercept; (d) sketch on the grid.`,
    S`(a) $1$, $7$. (b) $x=4$; $(4,18)$. (c) $-14$. (d) parabola opening down through those points. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 9, ymin: -16, ymax: 20 }, step: { x: 1, y: 4 } })),
  W("3.1", "hard", 5, S`The parabola shown has zeros $-3$ and $5$ and passes through $(1,\,8)$. (a) Find its equation in factored and standard form. (b) Find its vertex. (c) Find a second parabola with the same zeros and vertex $(1,\,-24)$.`,
    S`(a) $8=a(4)(-4)$, $a=-\tfrac12$: $y=-\tfrac12(x+3)(x-5)=-\tfrac12x^2+x+7.5$. (b) $(1,8)$. (c) $a=\tfrac32$: $y=\tfrac32(x+3)(x-5)$. [2, 1, 2.]`,
    planeDoc({ view: { xmin: -5, xmax: 7, ymin: -4, ymax: 10 }, curves: [{ f: (x) => -0.5 * (x + 3) * (x - 5), color: "violet" }], points: [{ x: 1, y: 8, label: "(1, 8)", color: "amber" }] })),
  W("3.2", "medium", 4, S`Use the graph of $y=x^2-x-6$ to solve $x^2-x-6=0$ and $x^2-x-6=6$. Verify one root of each.`,
    S`$-2$, $3$; the line $y=6$ meets at $-3$, $4$. Checks: $9-3-6=0$, $16-4-6=6$. [2, 2.]`,
    planeDoc({ view: { xmin: -5, xmax: 6, ymin: -8, ymax: 10 }, curves: [{ f: (x) => x * x - x - 6, color: "violet" }], lines: [{ m: 0, b: 6, color: "green", dash: true }], step: { x: 1, y: 2 } })),
  W("3.2", "hard", 5, S`(a) For which $k$ does $x^2-4x+k=0$ have two, one or no roots? (b) Estimate the roots of $x^2-4x+2=0$ to one decimal. (c) Explain both using the graph of $y=x^2-4x$.`,
    S`(a) two if $k<4$, one if $k=4$, none if $k>4$. (b) $\approx0.6$, $3.4$. (c) the line $y=-k$ meets $y=x^2-4x$ (minimum $-4$) twice/once/never. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }] })),
  W("3.3", "medium", 4, S`Solve by factoring and verify: (a) $x^2+5x=24$; (b) $3x^2-11x-4=0$. (c) Mark the roots of (b) on its graph.`,
    S`(a) $(x+8)(x-3)$: $-8$, $3$. (b) $(3x+1)(x-4)$: $-\tfrac13$, $4$. (c) intercepts at those values. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -16, ymax: 10 }, curves: [{ f: (x) => 3 * x * x - 11 * x - 4, color: "violet" }], step: { x: 1, y: 2 } })),
  W("3.3", "hard", 5, S`(a) Solve $100x^2=115x+35$. (b) Solve $(x-2)(x+5)=8$. (c) Explain why dividing $5x^2=30x$ by $x$ is a mistake, and solve it correctly.`,
    S`(a) $5(5x-7)(4x+1)=0$: $1.4$, $-0.25$. (b) $x^2+3x-18=0$: $3$, $-6$. (c) loses $x=0$; $5x(x-6)=0$: $0$, $6$. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 2, ymin: -70, ymax: 40 }, curves: [{ f: (x) => 100 * x * x - 115 * x - 35, color: "violet" }], step: { x: 0.5, y: 10 } })),
  W("3.4", "medium", 4, S`A $16$ m by $10$ m garden has a path of uniform width around it; the total area is $280$ m². (a) Write an equation. (b) Find the path width, rejecting any impossible root.`,
    S`(a) $(16+2x)(10+2x)=280$. (b) $x^2+13x-30=0$: $(x+15)(x-2)$: $2$ m. [2, 2.]`,
    areaBox(["16", "+2x"], ["10", "+2x"], [["160", "20x"], ["32x", "4x²"]])),
  W("3.4", "hard", 6, S`A ball's height is $h(t)=-5t^2+40t+5$ (graph shown). (a) When is it above $65$ m? (b) What is its maximum height? (c) When does it land (one decimal)? (d) Explain why one root is rejected.`,
    S`(a) $t^2-8t+12=0$: $2<t<6$. (b) $t=4$: $85$ m. (c) $t\approx8.1$ s. (d) the negative root is before the throw. [2, 1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 9, ymin: -5, ymax: 95 }, curves: [{ f: (t) => -5 * t * t + 40 * t + 5, a: 0, b: 8.12, color: "violet" }], lines: [{ m: 0, b: 65, color: "green", dash: true }], step: { x: 1, y: 10 } })),
  W("3.5", "medium", 4, S`The data shown are modelled with their zeros. (a) Estimate the zeros and write $y=a(x-r)(x-s)$ using the point $(2,\,12)$. (b) Find the residual at $(4,\,15.8)$.`,
    S`(a) zeros $0$, $8$: $12=a(2)(-6)$, $a=-1$: $y=-x(x-8)$. (b) predicted $16$; residual $-0.2$. [3, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 8.5, ymin: -1, ymax: 18 }, points: [[0, 0.2], [1, 7.1], [2, 12], [3, 14.8], [4, 15.8], [5, 15.1], [6, 12.2], [7, 6.8], [8, -0.1]].map(([x, y]) => ({ x, y, label: "", color: "blue" })), step: { x: 1, y: 2 } })),
  W("3.5", "hard", 5, S`A cable hangs between towers $100$ m apart, $4$ m above the road in the middle and $54$ m high at the towers. (a) Model it. (b) Find its height $20$ m from a tower. (c) Explain why the model should not be used beyond the towers.`,
    S`(a) $y=0.02(x-50)^2+4$. (b) $0.02(900)+4=22$ m. (c) the cable ends at the towers: extrapolation. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 105, ymin: 0, ymax: 60 }, curves: [{ f: (x) => 0.02 * (x - 50) ** 2 + 4, a: 0, b: 100, color: "violet" }], step: { x: 10, y: 10 } })),
];
