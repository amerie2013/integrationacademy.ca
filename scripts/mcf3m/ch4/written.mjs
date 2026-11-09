// MCF3M chapter 4 written-response questions (Part C of printed tests), each with a figure and a marking guide.
import { planeDoc } from "../figs.mjs";
import { lesson } from "../plan.mjs";
const S = String.raw;
const W = (code, difficulty, points, prompt, feedback, fig) => ({ topic: lesson(code).full, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W("4.1", "medium", 4, S`(a) Write $y=-2(x+3)^2+11$ in standard form. (b) Find the vertex of $y=x^2-8x+10$ by partial factoring. (c) Verify (b) on the graph.`,
    S`(a) $-2x^2-12x-7$. (b) $x(x-8)+10$: axis $4$, vertex $(4,-6)$. (c) the graph's lowest point is $(4,-6)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 9, ymin: -7, ymax: 12 }, curves: [{ f: (x) => x * x - 8 * x + 10, color: "violet" }], step: { x: 1, y: 2 } })),
  W("4.1", "hard", 5, S`A parabola has vertex $(-1,\,6)$ and passes through $(1,\,-2)$. (a) Write it in vertex and standard form. (b) Find its zeros (two decimals). (c) State its range.`,
    S`(a) $-2(x+1)^2+6=-2x^2-4x+4$. (b) $(x+1)^2=3$: $x\approx0.73,-2.73$. (c) $y\le6$. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 2, ymin: -4, ymax: 8 }, curves: [{ f: (x) => -2 * (x + 1) ** 2 + 6, color: "violet" }], step: { x: 1, y: 1 } })),
  W("4.2", "medium", 4, S`Complete the square: (a) $y=x^2-6x+2$; (b) $y=3x^2+12x+5$. (c) Sketch (b) on the grid, labelling the vertex and $y$-intercept.`,
    S`(a) $(x-3)^2-7$. (b) $3(x+2)^2-7$. (c) vertex $(-2,-7)$, $y$-int $5$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 1, ymin: -8, ymax: 8 } })),
  W("4.2", "hard", 5, S`(a) Write $y=0.5x^2-3x+1$ in vertex form. (b) A ball's height is $h=-5t^2+16t+2$; complete the square to find its maximum height and when it occurs. (c) Interpret.`,
    S`(a) $0.5(x-3)^2-3.5$. (b) $-5(t-1.6)^2+14.8$: $14.8$ m at $1.6$ s. (c) highest point of the flight. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 3.6, ymin: -1, ymax: 17 }, curves: [{ f: (t) => -5 * t * t + 16 * t + 2, a: 0, b: 3.32, color: "violet" }], step: { x: 0.5, y: 2 } })),
  W("4.3", "medium", 4, S`Solve with the formula, giving exact and decimal roots: (a) $x^2-2x-7=0$; (b) $3x^2=5x+1$. Check one root on the graph of (a).`,
    S`(a) $1\pm2\sqrt2\approx3.83,-1.83$. (b) $\frac{5\pm\sqrt{37}}6\approx1.85,-0.18$. [2, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -9, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 7, color: "violet" }], step: { x: 1, y: 1 } })),
  W("4.3", "hard", 5, S`A rocket's height is $h(t)=-4.9t^2+40t+3$. (a) When does it land? (b) When is it $60$ m high? (c) Compare the formula with factoring for this problem.`,
    S`(a) $t\approx8.24$ s. (b) $4.9t^2-40t+57=0$: $t\approx1.84$, $6.32$. (c) it does not factor; the formula is needed. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 9, ymin: -5, ymax: 90 }, curves: [{ f: (t) => -4.9 * t * t + 40 * t + 3, a: 0, b: 8.24, color: "violet" }], lines: [{ m: 0, b: 60, color: "green", dash: true }], step: { x: 1, y: 10 } })),
  W("4.4", "medium", 4, S`(a) Find $D$ and the number of roots for $2x^2-5x+4=0$ and $9x^2-12x+4=0$. (b) Find $k$ so that $x^2+kx+16=0$ has one root.`,
    S`(a) $-7$: none; $0$: one. (b) $k=\pm8$. [2, 2.]`,
    planeDoc({ view: { xmin: -1, xmax: 3, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 2 * x * x - 5 * x + 4, color: "red" }, { f: (x) => 9 * x * x - 12 * x + 4, color: "blue" }], step: { x: 0.5, y: 1 } })),
  W("4.4", "hard", 5, S`(a) For which $k$ does $kx^2+4x-1=0$ have two real roots? (b) Find $m$ so that $y=mx$ is tangent to $y=x^2+1$. (c) Can $h(t)=-5t^2+20t+1$ reach $22$ m? Use $D$.`,
    S`(a) $16+4k>0$: $k>-4$, $k\ne0$. (b) $m^2-4=0$: $m=\pm2$. (c) $D=400-420<0$: no (max $21$). [2, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 10 }, curves: [{ f: (x) => x * x + 1, color: "violet" }], lines: [{ m: 2, b: 0, color: "blue" }, { m: -2, b: 0, color: "green" }], step: { x: 1, y: 2 } })),
  W("4.5", "medium", 4, S`A pen against a barn uses $70$ m of fence. (a) Write the area $A(x)$. (b) Find the maximum area and the dimensions. (c) Sketch $A(x)$.`,
    S`(a) $A=x(70-2x)$. (b) $x=17.5$: $612.5$ m$^2$, $17.5\times35$. (c) parabola down, zeros $0$, $35$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 36, ymin: -20, ymax: 700 }, curves: [{ f: (x) => x * (70 - 2 * x), a: 0, b: 35, color: "violet" }], step: { x: 5, y: 100 } })),
  W("4.5", "hard", 6, S`A store sells $480$ items at $15$ dollars. Each $1$-dollar increase loses $24$ sales. (a) Write the revenue model. (b) Find the best price and maximum revenue. (c) Which prices give revenue at least $7200$ dollars?`,
    S`(a) $R=(15+x)(480-24x)$. (b) zeros $-15$, $20$: $x=2.5$: $17.50$, $R=7350$. (c) $R=7200\Rightarrow x^2-5x+0=0$: $0\le x\le5$: prices $15$ to $20$. [2, 2, 2.]`,
    planeDoc({ view: { xmin: -16, xmax: 21, ymin: -300, ymax: 8000 }, curves: [{ f: (x) => (15 + x) * (480 - 24 * x), a: -15, b: 20, color: "violet" }], lines: [{ m: 0, b: 7200, color: "green", dash: true }], step: { x: 5, y: 1000 } })),
];
