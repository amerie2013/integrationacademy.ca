// MPM2D Worksheet 4.6 — Standard Form & Converting Between Forms (teacher edition)
import { F, gridT, areaT } from "./figT.mjs";

const vf = (f, v, view, extra = [], step) => F({ view, curves: [{ f, color: "violet" }], points: [{ x: v[0], y: v[1], label: `(${v[0]}, ${v[1]})`.replace(/-/g, "−"), color: "blue" }, ...extra], ...(step ? { step } : {}) });

const EXAMPLES = [
  { title: "Vertex form to standard form", q: String.raw`Write $y=-(x+4)^2+3$ in standard form.`,
    steps: [String.raw`$-(x^2+8x+16)+3=-x^2-8x-16+3$.`], ans: String.raw`$y=-x^2-8x-13$` },
  { title: "Factored form to standard form", q: String.raw`Write $y=3(x-2)(x+1)$ in standard form.`,
    steps: [String.raw`$(x-2)(x+1)=x^2-x-2$; times 3.`], ans: String.raw`$y=3x^2-3x-6$` },
  { title: "Completing the square", q: String.raw`Write $y=x^2-8x+10$ in vertex form.`,
    fig: vf((x) => x * x - 8 * x + 10, [4, -6], { xmin: -1, xmax: 9, ymin: -7, ymax: 12 }, [{ x: 0, y: 10, label: "(0, 10)", color: "green" }], { x: 1, y: 2 }),
    steps: [String.raw`Half of $-8$ is $-4$; $(-4)^2=16$: $(x^2-8x+16)-16+10$.`], ans: String.raw`$y=(x-4)^2-6$; vertex $(4,-6)$` },
  { title: "Another square", q: String.raw`Write $y=x^2+2x-5$ in vertex form.`,
    fig: areaT(["x", "+1"], ["x", "+1"], [["x^2", "x"], ["x", "1"]], 4.5),
    steps: [String.raw`Half of 2 is 1: $(x^2+2x+1)-1-5$.`], ans: String.raw`$y=(x+1)^2-6$` },
  { title: "With a ≠ 1", q: String.raw`Write $y=3x^2+18x+20$ in vertex form.`,
    fig: vf((x) => 3 * x * x + 18 * x + 20, [-3, -7], { xmin: -6, xmax: 0, ymin: -8, ymax: 22 }, [], { x: 1, y: 4 }),
    steps: [String.raw`$3(x^2+6x)+20=3(x^2+6x+9-9)+20$.`, String.raw`$=3(x+3)^2-27+20$.`], ans: String.raw`$y=3(x+3)^2-7$` },
  { title: "Negative a, two forms", q: String.raw`Write $y=-x^2+10x-16$ in vertex form and in factored form.`,
    fig: vf((x) => -x * x + 10 * x - 16, [5, 9], { xmin: 0, xmax: 10, ymin: -4, ymax: 11 }, [{ x: 2, y: 0, color: "red" }, { x: 8, y: 0, color: "red" }]),
    steps: [String.raw`$-(x^2-10x)-16=-(x-5)^2+25-16$.`, String.raw`$-(x^2-10x+16)=-(x-2)(x-8)$.`], ans: String.raw`$-(x-5)^2+9=-(x-2)(x-8)$` },
  { title: "Partial factoring", q: String.raw`Use partial factoring to find the vertex of $y=2x^2-12x+11$.`,
    fig: vf((x) => 2 * x * x - 12 * x + 11, [3, -7], { xmin: -1, xmax: 7, ymin: -8, ymax: 14 }, [{ x: 0, y: 11, label: "(0, 11)", color: "green" }, { x: 6, y: 11, label: "(6, 11)", color: "green" }], { x: 1, y: 2 }),
    steps: [String.raw`$y=2x(x-6)+11$: at $x=0$ and $x=6$, $y=11$.`, String.raw`Axis $x=3$; $18-36+11=-7$.`], ans: "$(3,-7)$" },
  { title: "All three forms", q: String.raw`Write $y=x^2-4x-12$ in factored and vertex form.`,
    steps: [String.raw`Factored: $(x-6)(x+2)$.`, String.raw`Vertex: $(x^2-4x+4)-4-12=(x-2)^2-16$.`], ans: String.raw`$(x-6)(x+2)=(x-2)^2-16$` },
  { title: "Choosing forms in context", q: String.raw`A company's profit is $P=-2x^2+40x-150$ (thousands of dollars, $x$ thousand items). Find the maximum profit and the break-even points.`,
    steps: [String.raw`Vertex form: $-2(x^2-20x)-150=-2(x-10)^2+200-150=-2(x-10)^2+50$.`, String.raw`Factored: $-2(x^2-20x+75)=-2(x-5)(x-15)$.`], ans: "max 50 thousand at 10 thousand items; break-even at 5 and 15 thousand" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Write $y=(x+3)^2-2$ in standard form.`, recap: "Expand.", ans: "$y=x^2+6x+7$" },
  { level: 1, q: String.raw`Write $y=(x-4)(x+5)$ in standard form.`, recap: "Expand.", ans: "$y=x^2+x-20$" },
  { level: 1, q: String.raw`Complete the square: $y=x^2+10x+21$.`, recap: "Complete the square.", ans: "$y=(x+5)^2-4$" },
  { level: 2, q: String.raw`Write $y=x^2-6x+1$ in vertex form and state the vertex.`, recap: "Vertex form.", ans: String.raw`$(x-3)^2-8$; $(3,-8)$` },
  { level: 2, q: String.raw`Write $y=2x^2+8x+3$ in vertex form.`, recap: "a = 2.", ans: "$y=2(x+2)^2-5$" },
  { level: 2, q: String.raw`Write $y=-x^2+4x+5$ in vertex form and in factored form.`, recap: "Two forms.", ans: String.raw`$-(x-2)^2+9$; $-(x-5)(x+1)$` },
  { level: 2, q: String.raw`Use partial factoring to find the vertex of $y=x^2+6x+4$.`, recap: "Partial factoring.", ans: String.raw`$x(x+6)+4$: axis $x=-3$, vertex $(-3,-5)$` },
  { level: 2, q: String.raw`Write $y=-3x^2+6x+1$ in vertex form.`, recap: "a = −3.", ans: "$y=-3(x-1)^2+4$" },
  { level: 3, space: 5, q: String.raw`Write $y=2x^2-4x-6$ in factored form and vertex form, then sketch it using both.`, recap: "All forms and sketch.", ans: String.raw`$2(x-3)(x+1)$; $2(x-1)^2-8$`, fig: gridT({ xmin: -3, xmax: 5, ymin: -9, ymax: 8 }) },
  { level: 3, space: 5, q: String.raw`Revenue from tickets priced at $p$ dollars is $R=-10p^2+200p$. Complete the square to find the price that gives the most revenue and the maximum revenue.`, recap: "Revenue.", ans: String.raw`$R=-10(p-10)^2+1000$: price 10 dollars, revenue 1000 dollars` },
  { level: 3, space: 5, q: String.raw`Show that $y=(x-3)^2-4$ and $y=(x-1)(x-5)$ describe the same parabola.`, recap: "Same parabola.", ans: String.raw`both expand to $x^2-6x+5$` },
  { level: 3, space: 5, q: String.raw`Use the area diagram to explain how completing the square turns $x^2+6x$ into a perfect square.`, recap: "Area explanation.", ans: String.raw`split $6x$ into two $3x$ rectangles; the missing corner is $3\times3=9$: $x^2+6x+9=(x+3)^2$`, fig: areaT(["x", "+3"], ["x", "+3"], [["x^2", "3x"], ["3x", "?"]]) },
  { level: 3, space: 5, q: String.raw`Find $c$ so that $y=x^2-6x+c$ has vertex $(3,2)$.`, recap: "Find c.", ans: String.raw`$(x-3)^2-9+c$: $c-9=2$, $c=11$` },
];

export const WS = {
  code: "4.6",
  title: "Standard Form & Converting Between Forms",
  bigideas: String.raw`Standard form shows the $y$-intercept, vertex form the vertex, factored form the zeros. Expanding converts vertex or factored form to standard form; factoring gives factored form; completing the square (add and subtract $(\frac b2)^2$, after factoring out $a$) gives vertex form. Partial factoring, $y=x(ax+b)+c$, finds the axis from two points with the same $y$-value.`,
  goals: ["Expand to standard form.", "Complete the square (no fractions).", "Use partial factoring.", "Choose the most useful form."],
  curriculum: "QR3",
  vocab: [["Standard form", "$ax^2+bx+c$"], ["Completing the square", "add and subtract $(\\frac b2)^2$"], ["Partial factoring", "$x(ax+b)+c$"]],
  hook: String.raw`Give three equations for the same parabola (one in each form) without saying so. Ask three groups for its vertex, zeros and $y$-intercept — then reveal they are identical.`,
  concepts: [
    ["1. Three forms", String.raw`Standard $\to$ $c$; vertex $\to$ $(h,k)$; factored $\to$ $r$, $s$.
${vf((x) => x * x - 8 * x + 10, [4, -6], { xmin: -1, xmax: 9, ymin: -7, ymax: 12 }, [], { x: 1, y: 2 })}`],
    ["2. Completing the square", String.raw`$x^2+bx+c=(x+\frac b2)^2+c-(\frac b2)^2$; with $a\ne1$, factor $a$ from the $x$-terms first.`],
    ["3. Partial factoring", String.raw`$x(ax+b)$ is $0$ at $x=0$ and $x=-\frac ba$; the axis is halfway.`],
  ],
  tips: ["Add AND subtract.", "Multiply the subtracted square by a when it leaves the bracket.", "Check by expanding.", "Pick the form that answers the question.", "Partial factoring works without zeros."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
