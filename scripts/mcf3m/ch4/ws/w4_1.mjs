// MCF3M Worksheet 4.1 — Vertex Form and Standard Form (teacher edition)
import { F, pt } from "../../ws/figT.mjs";
const S = String.raw;
const G = (f, view, pts, step, lines = []) => F({ view, curves: [{ f, color: "violet" }], points: pts, step, lines });

const EXAMPLES = [
  { title: "Expand vertex form", q: S`Write $y=(x-6)^2-11$ in standard form.`,
    fig: G((x) => (x - 6) ** 2 - 11, { xmin: 0, xmax: 12, ymin: -12, ymax: 28 }, [pt(6, -11, null, "amber"), pt(0, 25)], { x: 1, y: 4 }),
    steps: [S`\textbf{Expand:} $(x-6)^2=x^2-12x+36$.`, S`\textbf{Add $k$:} $x^2-12x+36-11=x^2-12x+25$.`, S`\textbf{Check $x=0$:} $36-11=25$ \checkmark`],
    ans: S`$y=x^2-12x+25$` },
  { title: "With a stretch", q: S`Write $y=4(x+2)^2-9$ in standard form.`,
    fig: G((x) => 4 * (x + 2) ** 2 - 9, { xmin: -5, xmax: 1, ymin: -10, ymax: 12 }, [pt(-2, -9, null, "amber"), pt(0, 7)], { x: 1, y: 2 }),
    steps: [S`$(x+2)^2=x^2+4x+4$; times $4$: $4x^2+16x+16$.`, S`$-9$: $y=4x^2+16x+7$.`, S`\textbf{Check $x=-1$:} $4(1)-9=-5$; $4-16+7=-5$ \checkmark`],
    ans: S`$y=4x^2+16x+7$` },
  { title: "Negative and fractional a", q: S`Write $y=-\tfrac12(x-4)^2+6$ in standard form.`,
    fig: G((x) => -0.5 * (x - 4) ** 2 + 6, { xmin: -1, xmax: 9, ymin: -6, ymax: 8 }, [pt(4, 6, null, "amber"), pt(0, -2)], { x: 1, y: 2 }),
    steps: [S`$(x-4)^2=x^2-8x+16$; times $-\tfrac12$: $-\tfrac12x^2+4x-8$.`, S`$+6$: $y=-\tfrac12x^2+4x-2$.`, S`\textbf{Check:} $y(0)=-8+6=-2$ \checkmark`],
    ans: S`$y=-\frac12x^2+4x-2$` },
  { title: "Partial factoring", q: S`Find the vertex of $y=x^2+10x+18$ by partial factoring.`,
    fig: G((x) => x * x + 10 * x + 18, { xmin: -12, xmax: 2, ymin: -9, ymax: 22 }, [pt(0, 18), pt(-10, 18), pt(-5, -7, null, "amber")], { x: 1, y: 4 }, [{ m: 0, b: 18, color: "green", dash: true }]),
    steps: [S`$y=x(x+10)+18$: $y=18$ at $x=0$ and $x=-10$.`, S`Axis $x=-5$; $y=25-50+18=-7$.`, S`Vertex $(-5,-7)$; vertex form $y=(x+5)^2-7$.`],
    ans: S`$(-5,-7)$` },
  { title: "Partial factoring with a ≠ 1", q: S`Find the vertex of $y=-3x^2+12x-5$.`,
    fig: G((x) => -3 * x * x + 12 * x - 5, { xmin: -1, xmax: 5, ymin: -8, ymax: 9 }, [pt(0, -5), pt(4, -5), pt(2, 7, null, "amber")], { x: 1, y: 2 }, [{ m: 0, b: -5, color: "green", dash: true }]),
    steps: [S`$y=-3x(x-4)-5$: equal heights $-5$ at $x=0$ and $4$.`, S`Axis $x=2$: $y=-12+24-5=7$.`, S`Vertex $(2,7)$; $y=-3(x-2)^2+7$.`],
    ans: S`$(2,7)$` },
  { title: "Axis formula", q: S`Use $x=-\frac b{2a}$ to find the vertex of $y=2x^2-6x+1$.`,
    fig: G((x) => 2 * x * x - 6 * x + 1, { xmin: -1, xmax: 4, ymin: -4, ymax: 6 }, [pt(1.5, -3.5, null, "amber")], { x: 1, y: 1 }),
    steps: [S`$x=\frac{6}{4}=1.5$.`, S`$y=2(2.25)-9+1=-3.5$.`, S`Vertex $(1.5,-3.5)$ \checkmark (matches the graph)`],
    ans: S`$(1.5,-3.5)$` },
  { title: "Verify equivalence", q: S`Show that $y=3(x-1)^2+2$ and $y=3x^2-6x+5$ are equivalent.`,
    fig: G((x) => 3 * x * x - 6 * x + 5, { xmin: -2, xmax: 4, ymin: -1, ymax: 14 }, [pt(1, 2, null, "amber"), pt(0, 5), pt(2, 5)], { x: 1, y: 2 }),
    steps: [S`Expand: $3(x^2-2x+1)+2=3x^2-6x+5$ \checkmark`, S`Substitute $x=3$: $3(4)+2=14$; $27-18+5=14$ \checkmark`],
    ans: S`identical expressions` },
  { title: "No x-intercepts", q: S`Find the vertex of $y=x^2-2x+6$ and explain why factoring cannot help.`,
    fig: G((x) => x * x - 2 * x + 6, { xmin: -2, xmax: 4, ymin: -1, ymax: 10 }, [pt(1, 5, null, "amber")], { x: 1, y: 1 }),
    steps: [S`No integer pair has product $6$ and sum $-2$; the graph has no zeros.`, S`Partial factoring: $x(x-2)+6$, axis $x=1$, $y=5$.`, S`Vertex $(1,5)$: minimum above the axis.`],
    ans: S`$(1,5)$` },
  { title: "Context", q: S`$h(t)=-5t^2+20t+3$. Find the maximum height in two ways.`,
    fig: G((t) => -5 * t * t + 20 * t + 3, { xmin: -0.3, xmax: 4.3, ymin: -1, ymax: 26 }, [pt(2, 23, null, "amber"), pt(0, 3)], { x: 0.5, y: 4 }),
    steps: [S`\textbf{Partial factoring:} $-5t(t-4)+3$: axis $t=2$; $h=23$.`, S`\textbf{Vertex form:} $-5(t-2)^2+23$; expanding gives back $-5t^2+20t+3$ \checkmark`],
    ans: S`$23$ m at $t=2$ s` },
];

const PROBLEMS = [
  { level: 1, q: S`Write $y=(x+3)^2-1$ in standard form.`, ans: S`$x^2+6x+8$` },
  { level: 1, q: S`Write $y=2(x-1)^2+5$ in standard form.`, ans: S`$2x^2-4x+7$` },
  { level: 1, q: S`Find the axis of symmetry of $y=x^2-14x+3$.`, ans: S`$x=7$` },
  { level: 2, q: S`Find the vertex of $y=x^2+6x-2$ by partial factoring.`, ans: S`$(-3,-11)$` },
  { level: 2, q: S`Find the vertex of $y=-2x^2+8x+1$.`, ans: S`$(2,9)$` },
  { level: 2, q: S`Write $y=-(x+4)^2+3$ in standard form and state the $y$-intercept.`, ans: S`$-x^2-8x-13$; $-13$` },
  { level: 2, q: S`Verify that $y=\frac12(x-2)^2-1$ and $y=\frac12x^2-2x+1$ are equivalent.`, ans: S`expand: $\frac12x^2-2x+2-1$ \checkmark` },
  { level: 2, q: S`Sketch $y=x^2-4x+7$ using its vertex and $y$-intercept.`, fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 9 } }), ans: S`vertex $(2,3)$, $y$-int $7$` },
  { level: 3, space: 5, q: S`$y=ax^2+8x+3$ has axis $x=-2$. Find $a$ and the vertex.`, ans: S`$a=2$; $(-2,-5)$` },
  { level: 3, space: 5, q: S`Find $b$ and $c$ if $y=x^2+bx+c$ has vertex $(3,-4)$.`, ans: S`$b=-6$, $c=5$` },
  { level: 3, space: 5, q: S`A ball's height is $h=-4.9t^2+19.6t+1.5$. Find its maximum height by partial factoring.`, ans: S`$t=2$: $21.1$ m` },
  { level: 3, space: 5, q: S`Explain why the points $(0,c)$ and $\left(-\frac ba,c\right)$ are both on $y=ax^2+bx+c$, and use this to derive $x=-\frac b{2a}$.`, ans: S`$x(ax+b)=0$ there; axis midway` },
  { level: 3, space: 5, q: S`Write $y=-3(x+1)^2+12$ in standard and factored forms.`, ans: S`$-3x^2-6x+9=-3(x+3)(x-1)$` },
];

export const WS = {
  code: "4.1",
  title: "Vertex Form and Standard Form",
  bigideas: S`Vertex form $a(x-h)^2+k$ and standard form $ax^2+bx+c$ describe the same parabola. Expanding converts vertex form to standard form. To go back, find the vertex: partial factoring $y=x(ax+b)+c$ shows two points at height $c$, so the axis $x=-\frac b{2a}$ is halfway between them.`,
  goals: ["Expand vertex form.", "Find the vertex of standard form.", "Verify equivalence.", "Choose a form to answer a question."],
  curriculum: "A2.7, A2.10",
  vocab: [["Vertex form", "$a(x-h)^2+k$"], ["Standard form", "$ax^2+bx+c$"], ["Partial factoring", "$x(ax+b)+c$"], ["Axis", "$x=-\\frac b{2a}$"]],
  hook: S`Two students describe the same parabola: one writes $y=2(x-3)^2-5$, the other $y=2x^2-12x+13$. Are they both right? How can you tell?`,
  concepts: [
    ["1. Expanding", S`Square the bracket, multiply by $a$, add $k$: $2(x-3)^2-5=2x^2-12x+13$.`],
    ["2. Partial factoring", S`$y=ax^2+bx+c=x(ax+b)+c$. At $x=0$ and $x=-\frac ba$ the product is $0$, so $y=c$. The axis is halfway: $x=-\frac b{2a}$.
${G((x) => 2 * x * x - 12 * x + 13, { xmin: -1, xmax: 7, ymin: -6, ymax: 16 }, [pt(0, 13), pt(6, 13), pt(3, -5, null, "amber")], { x: 1, y: 2 }, [{ m: 0, b: 13, color: "green", dash: true }])}`],
    ["3. Which form?", S`Vertex form: max/min and vertex. Standard form: $y$-intercept. Factored form: zeros.`],
  ],
  tips: ["Insist on squaring before multiplying by $a$.", "Use substitution of a non-zero $x$ to verify equivalence.", "Partial factoring works even when the quadratic has no zeros."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
