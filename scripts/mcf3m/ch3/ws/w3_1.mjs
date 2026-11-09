// MCF3M Worksheet 3.1 — Standard and Factored Forms (teacher edition)
import { F, pt } from "../../ws/figT.mjs";
const S = String.raw;
const G = (f, view, pts, step) => F({ view, curves: [{ f, color: "violet" }], points: pts, step });

const EXAMPLES = [
  { title: "Read the zeros", q: S`State the zeros, axis and vertex of $y=(x-3)(x+5)$.`,
    fig: G((x) => (x - 3) * (x + 5), { xmin: -7, xmax: 5, ymin: -18, ymax: 10 }, [pt(3, 0, null, "amber"), pt(-5, 0, null, "amber"), pt(-1, -16)], { x: 1, y: 2 }),
    steps: [S`\textbf{Zeros:} $x-3=0\Rightarrow x=3$; $x+5=0\Rightarrow x=-5$.`, S`\textbf{Axis:} $x=\frac{3+(-5)}2=-1$.`, S`\textbf{Vertex:} $y=(-4)(4)=-16$: $(-1,-16)$.`, S`\textbf{Check:} $y$-intercept $(−3)(5)=-15$, and the graph passes through $(0,-15)$ \checkmark`],
    ans: S`zeros $3,-5$; axis $x=-1$; vertex $(-1,-16)$` },
  { title: "With a leading coefficient", q: S`Find the vertex and $y$-intercept of $y=-3(x-2)(x-6)$.`,
    fig: G((x) => -3 * (x - 2) * (x - 6), { xmin: 0, xmax: 8, ymin: -38, ymax: 15 }, [pt(4, 12, null, "blue"), pt(2, 0, null, "amber"), pt(6, 0, null, "amber")], { x: 1, y: 5 }),
    steps: [S`\textbf{Zeros} $2$ and $6$; \textbf{axis} $x=4$.`, S`\textbf{Vertex:} $y=-3(2)(-2)=12$: $(4,12)$, a maximum since $a<0$.`, S`\textbf{$y$-intercept:} $-3(-2)(-6)=-36$.`, S`\textbf{Check:} mirror point $(8,-36)$: $-3(6)(2)=-36$ \checkmark`],
    ans: S`vertex $(4,12)$; $y$-intercept $-36$` },
  { title: "A fractional zero", q: S`Find the zeros and vertex of $y=(2x-1)(x+3)$.`,
    fig: G((x) => (2 * x - 1) * (x + 3), { xmin: -4, xmax: 2, ymin: -7, ymax: 6 }, [pt(0.5, 0, null, "amber"), pt(-3, 0, null, "amber"), pt(-1.25, -6.125)], { x: 1, y: 1 }),
    steps: [S`\textbf{Zeros:} $2x-1=0\Rightarrow x=\tfrac12$; $x=-3$.`, S`\textbf{Axis:} $x=\frac{0.5-3}2=-1.25$.`, S`\textbf{Vertex:} $y=(2(-1.25)-1)(-1.25+3)=(-3.5)(1.75)=-6.125$.`, S`\textbf{Check:} standard form $2x^2+5x-3$ at $-1.25$: $3.125-6.25-3=-6.125$ \checkmark`],
    ans: S`zeros $\tfrac12,-3$; vertex $(-1.25,-6.125)$` },
  { title: "Standard to factored", q: S`Write $y=x^2-10x+16$ in factored form and find the vertex.`,
    fig: G((x) => x * x - 10 * x + 16, { xmin: 0, xmax: 10, ymin: -10, ymax: 8 }, [pt(2, 0, null, "amber"), pt(8, 0, null, "amber"), pt(5, -9)], { x: 1, y: 2 }),
    steps: [S`\textbf{Factor:} product $16$, sum $-10$: $(x-2)(x-8)$.`, S`\textbf{Axis:} $x=5$.`, S`\textbf{Vertex:} $(3)(-3)=-9$: $(5,-9)$.`, S`\textbf{Check:} $25-50+16=-9$ \checkmark`],
    ans: S`$y=(x-2)(x-8)$; vertex $(5,-9)$` },
  { title: "Common factor first", q: S`Write $y=-2x^2-4x+16$ in factored form; find zeros and vertex.`,
    fig: G((x) => -2 * x * x - 4 * x + 16, { xmin: -6, xmax: 4, ymin: -10, ymax: 20 }, [pt(2, 0, null, "amber"), pt(-4, 0, null, "amber"), pt(-1, 18)], { x: 1, y: 2 }),
    steps: [S`\textbf{GCF:} $-2(x^2+2x-8)=-2(x+4)(x-2)$.`, S`\textbf{Zeros:} $-4$, $2$; \textbf{axis} $x=-1$.`, S`\textbf{Vertex:} $-2(3)(-3)=18$: $(-1,18)$.`, S`\textbf{Check:} $-2+4+16=18$ \checkmark`],
    ans: S`$-2(x+4)(x-2)$; vertex $(-1,18)$` },
  { title: "Factored to standard", q: S`Expand $y=4(x-1)(x+2)$ and state the $y$-intercept both ways.`,
    fig: G((x) => 4 * (x - 1) * (x + 2), { xmin: -3, xmax: 2, ymin: -10, ymax: 6 }, [pt(0, -8, null, "amber")], { x: 1, y: 2 }),
    steps: [S`$(x-1)(x+2)=x^2+x-2$; times $4$: $4x^2+4x-8$.`, S`\textbf{$y$-intercept:} $c=-8$; from factored form $4(-1)(2)=-8$ \checkmark`],
    ans: S`$y=4x^2+4x-8$; $y$-intercept $-8$` },
  { title: "Equation from zeros and a point", q: S`A parabola has zeros $-2$ and $4$ and passes through $(3,\,-10)$. Find its equation.`,
    fig: G((x) => 2 * (x + 2) * (x - 4), { xmin: -4, xmax: 6, ymin: -20, ymax: 12 }, [pt(-2, 0, null, "amber"), pt(4, 0, null, "amber"), pt(3, -10)], { x: 1, y: 4 }),
    steps: [S`$y=a(x+2)(x-4)$.`, S`$-10=a(5)(-1)\Rightarrow a=2$.`, S`$y=2(x+2)(x-4)=2x^2-4x-16$.`, S`\textbf{Check:} vertex $(1,-18)$ lies on the graph \checkmark`],
    ans: S`$y=2(x+2)(x-4)$` },
  { title: "One zero and the vertex", q: S`A parabola has vertex $(1,\,-9)$ and one zero $x=-2$. Find the other zero and the equation.`,
    fig: G((x) => (x + 2) * (x - 4), { xmin: -4, xmax: 6, ymin: -10, ymax: 8 }, [pt(-2, 0, null, "amber"), pt(4, 0, null, "amber"), pt(1, -9)], { x: 1, y: 2 }),
    steps: [S`\textbf{Symmetry:} $-2$ is $3$ left of $x=1$, so the other zero is $4$.`, S`$y=a(x+2)(x-4)$; at $x=1$: $-9=a(3)(-3)\Rightarrow a=1$.`, S`$y=(x+2)(x-4)$.`],
    ans: S`zero $4$; $y=(x+2)(x-4)$` },
  { title: "Arch in factored form", q: S`An arch has feet at $x=0$ and $x=20$ m and is $15$ m high. Find its equation and the height at $x=4$.`,
    fig: G((x) => -0.15 * x * (x - 20), { xmin: -1, xmax: 21, ymin: -1, ymax: 17 }, [pt(10, 15, null, "amber"), pt(4, 9.6)], { x: 2, y: 2 }),
    steps: [S`$h=ax(x-20)$; at $x=10$: $15=a(10)(-10)\Rightarrow a=-0.15$.`, S`$h(4)=-0.15(4)(-16)=9.6$ m.`, S`\textbf{Check:} $h(16)=9.6$ by symmetry \checkmark`],
    ans: S`$h=-0.15x(x-20)$; $9.6$ m` },
];

const PROBLEMS = [
  { level: 1, q: S`State the zeros and axis of $y=(x+4)(x-10)$.`, ans: S`$-4$, $10$; $x=3$` },
  { level: 1, q: S`Find the vertex of $y=(x-1)(x-7)$.`, ans: S`$(4,-9)$` },
  { level: 1, q: S`Find the $y$-intercept of $y=-2(x+3)(x-5)$.`, ans: S`$30$` },
  { level: 2, q: S`Write $y=x^2+2x-24$ in factored form and find its vertex.`, ans: S`$(x+6)(x-4)$; $(-1,-25)$` },
  { level: 2, q: S`Write $y=3x^2-12x-15$ in factored form.`, ans: S`$3(x-5)(x+1)$` },
  { level: 2, q: S`Find the zeros and vertex of $y=(3x+2)(x-2)$.`, ans: S`$-\tfrac23$, $2$; $(\tfrac23,-\tfrac{16}3)$` },
  { level: 2, q: S`Sketch $y=-(x+1)(x-3)$ on the grid, labelling key points.`, fig: F({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 6 } }), ans: S`zeros $-1,3$; vertex $(1,4)$; $y$-int $3$` },
  { level: 2, q: S`A parabola has zeros $1$ and $5$ and passes through $(2,\,6)$. Find $a$.`, ans: S`$6=a(1)(-3)$: $a=-2$` },
  { level: 3, space: 5, q: S`Find the equation of the parabola with zeros $-6$ and $2$ and maximum value $8$.`, ans: S`$y=-\tfrac12(x+6)(x-2)$` },
  { level: 3, space: 5, q: S`A parabola has vertex $(3,\,-12)$ and $y$-intercept $6$. Find its zeros.`, ans: S`$a=2$: $2(x-3)^2-12=0$, $x=3\pm\sqrt6$` },
  { level: 3, space: 5, q: S`An archway is $8$ m wide at the base and $6$ m high. Can a box $4$ m wide and $4.4$ m high pass through the centre?`, fig: F({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 7 } }), ans: S`$h=-\tfrac38x(x-8)$; at $x=2$: $4.5>4.4$: yes, just` },
  { level: 3, space: 5, q: S`Explain why every parabola with zeros $r$ and $s$ has its vertex on $x=\frac{r+s}2$.`, ans: S`symmetry: the zeros are mirror images about the axis` },
  { level: 3, space: 5, q: S`For $y=a(x-1)(x-9)$, find $a$ so that the vertex is $(5,\,8)$, then write the standard form.`, ans: S`$a=-\tfrac12$; $y=-\tfrac12x^2+5x-\tfrac92$` },
];

export const WS = {
  code: "3.1",
  title: "Standard and Factored Forms",
  bigideas: S`A quadratic can be written in standard form $ax^2+bx+c$ or in factored form $a(x-r)(x-s)$. Standard form shows the $y$-intercept; factored form shows the zeros $r$ and $s$. The axis of symmetry is halfway between the zeros, $x=\frac{r+s}2$, and substituting it gives the vertex. Expanding and factoring convert between the two forms.`,
  goals: ["Read zeros, axis, vertex and $y$-intercept from factored form.", "Sketch from factored form.", "Convert between forms.", "Find an equation from zeros and a point."],
  curriculum: "A2.9, A2.10",
  vocab: [["Factored form", "$y=a(x-r)(x-s)$"], ["Zero", "$x$ where $y=0$"], ["Axis", "$x=\\frac{r+s}2$"], ["Vertex", "point on the axis"]],
  hook: S`Graph $y=(x-1)(x-5)$, $y=2(x-1)(x-5)$ and $y=-(x-1)(x-5)$. What do they share? What changes?`,
  concepts: [
    ["1. Reading factored form", S`$y=a(x-r)(x-s)$: zeros $r,s$; axis $x=\frac{r+s}{2}$; vertex $\left(\frac{r+s}2,\ y\left(\frac{r+s}2\right)\right)$; $y$-intercept $a\,rs$.
${G((x) => (x - 1) * (x - 5), { xmin: -1, xmax: 7, ymin: -5, ymax: 7 }, [pt(1, 0, null, "amber"), pt(5, 0, null, "amber"), pt(3, -4), pt(0, 5)])}`],
    ["2. Converting", S`Factored $\to$ standard: expand. Standard $\to$ factored: take out a GCF, then factor the trinomial (product–sum or decomposition).`],
    ["3. Finding an equation", S`From zeros $r,s$: $y=a(x-r)(x-s)$, then substitute one other point to find $a$.`],
  ],
  tips: ["Emphasise that $(x+4)$ gives the zero $-4$.", "A factor $(px-q)$ gives the zero $\\frac qp$.", "Verify the vertex in both forms."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
