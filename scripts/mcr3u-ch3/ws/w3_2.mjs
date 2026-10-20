// MCR3U Worksheet 3.2 — Converting Between Forms (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Vertex to standard", q: S`Write $y=2(x-3)^2-5$ in standard form.`,
    steps: [S`$(x-3)^2=x^2-6x+9$.`, S`$2x^2-12x+18-5$.`], ans: S`$y=2x^2-12x+13$` },
  { title: "Factored to standard", q: S`Write $y=-(x+4)(x-3)$ in standard form.`,
    steps: [S`$(x+4)(x-3)=x^2+x-12$.`, S`Distribute $-1$.`], ans: S`$y=-x^2-x+12$` },
  { title: "Common factor first", q: S`Write $y=2x^2-2x-24$ in factored form and state the zeros.`,
    steps: [S`$2(x^2-x-12)$.`, S`$2(x-4)(x+3)$.`], ans: S`$y=2(x-4)(x+3)$; zeros 4, $-3$` },
  { title: "Difference of squares", q: S`Factor $y=3x^2-27$ and state the zeros and the vertex.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -30, ymax: 10 }, curves: [{ f: (x) => 3 * x * x - 27 }], points: [pt(-3, 0), pt(3, 0), pt(0, -27)], step: { x: 1, y: 5 } }),
    steps: [S`$3(x^2-9)=3(x-3)(x+3)$.`, S`Axis $x=0$; $y(0)=-27$.`], ans: S`zeros $\pm3$; vertex $(0,-27)$` },
  { title: "Factored to vertex", q: S`Write $y=(x+3)(x-7)$ in vertex form.`,
    steps: [S`Axis $\frac{-3+7}{2}=2$.`, S`$y(2)=(5)(-5)=-25$.`], ans: S`$y=(x-2)^2-25$` },
  { title: "Standard to vertex (axis formula)", q: S`Write $y=-x^2+5x+2$ in vertex form.`,
    fig: F({ view: { xmin: -2, xmax: 7, ymin: -4, ymax: 10 }, curves: [{ f: (x) => -x * x + 5 * x + 2 }], lines: [{ m: 0, b: 2, color: "green", dash: true }], points: [pt(0, 2, null, "green"), pt(5, 2, null, "green"), pt(2.5, 8.25)] }),
    steps: [S`$h=-\frac{b}{2a}=-\frac{5}{-2}=2.5$.`, S`$k=-6.25+12.5+2=8.25$.`, S`Check: $-(x^2-5x+6.25)+8.25=-x^2+5x+2$.`], ans: S`$y=-(x-2.5)^2+8.25$` },
  { title: "Vertex and a point", q: "A parabola has vertex (−1, −4) and passes through (1, 4). Find its equation in vertex and standard form.",
    fig: F({ view: { xmin: -5, xmax: 3, ymin: -5, ymax: 6 }, curves: [{ f: (x) => 2 * (x + 1) ** 2 - 4 }], points: [pt(-1, -4), pt(1, 4)] }),
    steps: [S`$y=a(x+1)^2-4$; $4=4a-4\Rightarrow a=2$.`, S`$2(x^2+2x+1)-4=2x^2+4x-2$.`], ans: S`$y=2(x+1)^2-4=2x^2+4x-2$` },
  { title: "Zeros and the y-intercept", q: "A parabola has zeros 3 and −1 and y-intercept 6. Find its equation.",
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 9 }, curves: [{ f: (x) => -2 * (x - 3) * (x + 1) }], points: [pt(3, 0), pt(-1, 0), pt(0, 6, null, "green")] }),
    steps: [S`$y=a(x-3)(x+1)$; $6=a(-3)(1)\Rightarrow a=-2$.`], ans: S`$y=-2(x-3)(x+1)$` },
  { title: "Same parabola?", q: S`Show that $y=(x+1)^2-9$ and $y=(x+4)(x-2)$ are the same function.`,
    steps: [S`$(x+1)^2-9=x^2+2x+1-9=x^2+2x-8$.`, S`$(x+4)(x-2)=x^2+2x-8$.`], ans: "both expand to the same standard form" },
];

const PROBLEMS = [
  { level: 1, q: S`Write $y=(x+5)^2-2$ in standard form.`, recap: "Expand vertex form.", ans: S`$x^2+10x+23$` },
  { level: 1, q: S`Write $y=3(x-2)(x+1)$ in standard form.`, recap: "Expand factored form.", ans: S`$3x^2-3x-6$` },
  { level: 1, q: S`Factor $y=x^2-9x+14$.`, recap: "Factor.", ans: S`$(x-2)(x-7)$` },
  { level: 2, q: S`Write $y=-(x+1)(x-5)$ in standard form and in vertex form.`, recap: "Convert forms.", ans: S`$-x^2+4x+5$; $-(x-2)^2+9$` },
  { level: 2, q: "Find the equation of the parabola shown in vertex form and in standard form.", recap: "From a graph.", ans: S`$y=-(x-2)^2+5=-x^2+4x+1$`,
    fig: F({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, curves: [{ f: (x) => -((x - 2) ** 2) + 5 }], points: [pt(2, 5), pt(0, 1)] }) },
  { level: 2, q: S`Use $x=-\frac{b}{2a}$ to write $y=x^2-6x+1$ in vertex form.`, recap: "Axis formula.", ans: S`$(x-3)^2-8$` },
  { level: 2, q: S`Find the zeros and the vertex of $y=-2x^2+4x+16$.`, recap: "Common factor, then vertex.", ans: S`$-2(x-4)(x+2)$; zeros 4, $-2$; vertex $(1,18)$` },
  { level: 2, q: S`Find the equation of the parabola with zeros $-5$ and $1$ through $(-1,12)$.`, recap: "Zeros and a point.", ans: S`$y=-1.5(x+5)(x-1)$` },
  { level: 3, space: 5, q: S`A parabola has zeros $-2$ and $6$ and a maximum value of 8. Write it in all three forms.`, recap: "Three forms.", ans: S`$-\tfrac12(x+2)(x-6)=-\tfrac12(x-2)^2+8=-\tfrac12x^2+2x+6$` },
  { level: 3, space: 4, q: S`Use the axis formula to write $f(x)=x^2-6x+11$ in vertex form, and explain why it has no zeros.`, recap: "No zeros.", ans: S`$(x-3)^2+2\ge2>0$` },
  { level: 3, space: 4, q: S`$y=-x^2+bx+c$ has vertex $(2,7)$. Find $b$ and $c$.`, recap: "Vertex gives b and c.", ans: S`$b=4$, $c=3$` },
  { level: 3, space: 5, q: S`$y=ax^2+bx+c$ has vertex $(-2,5)$ and y-intercept 1. Find $a$, $b$ and $c$.`, recap: "Vertex and y-intercept.", ans: S`$a=-1$, $b=-4$, $c=1$`,
    fig: F({ view: { xmin: -6, xmax: 2, ymin: -4, ymax: 7 }, curves: [{ f: (x) => -((x + 2) ** 2) + 5 }], points: [pt(-2, 5), pt(0, 1, null, "green")] }) },
  { level: 3, space: 5, q: S`Show that $y=(x-1)(x-5)+k$ has vertex $(3,k-4)$ for every $k$, and find the value of $k$ that gives exactly one zero.`, recap: "A parameter.", ans: S`axis 3, $y(3)=-4+k$; $k=4$` },
];

export const WS = {
  code: "3.2",
  title: "Converting Between Forms",
  bigideas: S`Each form hides some features, so you convert. Expand vertex or factored form to reach standard form. Factor standard form (common factor first) to reach factored form. The axis is the average of the zeros, or $x=-\frac{b}{2a}$; substitute it to get the vertex. Given a vertex or zeros and one point, start in that form and solve for $a$.`,
  goals: ["Expand to standard form.", "Factor to find the zeros.", "Use the axis to reach vertex form.", "Build equations from a vertex or zeros and a point."],
  curriculum: "A1.2, A2.2",
  vocab: [["Expand", "multiply out and collect like terms"], ["Common factor", "take it out before factoring the trinomial"], ["Axis formula", S`$x=-\frac{b}{2a}$`]],
  hook: "Give pairs a parabola in vertex form and ask for its zeros, and another in standard form and ask for its vertex. Collect their strategies before naming the conversions.",
  concepts: [
    ["1. The routes", S`vertex $\to$ standard: expand. factored $\to$ standard: multiply out. standard $\to$ factored: factor. factored $\to$ vertex: average the zeros. standard $\to$ vertex: $x=-\frac{b}{2a}$.`],
    [S`2. Why $x=-\frac{b}{2a}$`, S`$ax^2+bx+c=c$ when $x(ax+b)=0$, i.e. at $x=0$ and $x=-\frac ba$. The axis is halfway between them. ${F({ view: { xmin: -8, xmax: 2, ymin: -9, ymax: 4 }, curves: [{ f: (x) => x * x + 6 * x + 1 }], lines: [{ m: 0, b: 1, color: "green", dash: true }], points: [pt(0, 1, null, "green"), pt(-6, 1, null, "green"), pt(-3, -8)] }, 5, "Points at height c are mirror images")}`],
    ["3. Equations from facts", S`Zeros $r,s$ and a point: $y=a(x-r)(x-s)$. Vertex $(h,k)$ and a point: $y=a(x-h)^2+k$. Substitute the point to find $a$.`],
  ],
  tips: ["Expand the square before multiplying by a.", "Common factor first.", "Keep the signs in −b/(2a).", "a is the same in every form: use it as a check.", "Check by comparing y-intercepts."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
