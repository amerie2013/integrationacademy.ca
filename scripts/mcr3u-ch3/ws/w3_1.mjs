// MCR3U Worksheet 3.1 — The Three Forms of a Quadratic Function (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Vertex form", q: S`State the key features of $f(x)=-(x-4)^2+9$.`,
    fig: F({ view: { xmin: -1, xmax: 9, ymin: -8, ymax: 10 }, curves: [{ f: (x) => -((x - 4) ** 2) + 9 }], points: [pt(4, 9), pt(1, 0), pt(7, 0), pt(0, -7, null, "green")], step: { x: 1, y: 2 } }),
    steps: [S`Vertex $(4,9)$, axis $x=4$, opens down: maximum 9.`, S`Zeros: $(x-4)^2=9\Rightarrow x=1,7$. y-intercept $-16+9=-7$.`], ans: S`range $y\le9$; zeros 1, 7; y-int $-7$` },
  { title: "Factored form", q: S`State the key features of $f(x)=3(x+2)(x-4)$.`,
    steps: [S`Zeros $-2$, $4$; axis $x=1$.`, S`$f(1)=3(3)(-3)=-27$; $f(0)=3(2)(-4)=-24$.`], ans: S`vertex $(1,-27)$, min $-27$, range $y\ge-27$, y-int $-24$` },
  { title: "Standard form that factors", q: S`Find the y-intercept, zeros and vertex of $f(x)=x^2+2x-15$.`,
    steps: [S`$c=-15$. Factor: $(x+5)(x-3)$, zeros $-5$, $3$.`, S`Axis $x=-1$: $f(-1)=1-2-15=-16$.`], ans: S`y-int $-15$; zeros $-5$, 3; vertex $(-1,-16)$` },
  { title: "A missing constant", q: S`Find the zeros and vertex of $f(x)=-2x^2+8x$.`,
    steps: [S`$-2x(x-4)$: zeros 0 and 4.`, S`Axis $x=2$: $f(2)=-8+16=8$.`], ans: S`vertex $(2,8)$, max 8` },
  { title: "Range from vertex form", q: S`State the vertex, optimal value, range, y-intercept and zeros of $f(x)=0.25(x+6)^2-1$.`,
    fig: F({ view: { xmin: -10, xmax: 1, ymin: -2, ymax: 9 }, curves: [{ f: (x) => 0.25 * (x + 6) ** 2 - 1 }], points: [pt(-6, -1), pt(-8, 0), pt(-4, 0), pt(0, 8, null, "green")] }),
    steps: [S`Vertex $(-6,-1)$; $a>0$: minimum $-1$, range $y\ge-1$.`, S`$f(0)=0.25(36)-1=8$.`, S`$0.25(x+6)^2=1\Rightarrow(x+6)^2=4\Rightarrow x=-4$ or $-8$.`], ans: S`min $-1$; $y\ge-1$; y-int 8; zeros $-8$, $-4$` },
  { title: "Which form is it?", q: S`Name the form and one feature you can read directly: (a) $y=4-(x+1)^2$ (b) $y=(2-x)(x+5)$ (c) $y=3x-x^2$.`,
    steps: [S`(a) vertex form $-(x+1)^2+4$: vertex $(-1,4)$.`, S`(b) factored ($a=-1$): zeros 2 and $-5$.`, S`(c) standard $-x^2+3x+0$: y-intercept 0.`], ans: "vertex (−1, 4); zeros 2, −5; y-int 0" },
  { title: "Sketch from factored form", q: S`Sketch $f(x)=0.5(x+4)(x-2)$ by finding its zeros, vertex and y-intercept.`,
    fig: F({ view: { xmin: -6, xmax: 4, ymin: -6, ymax: 5 }, curves: [{ f: (x) => 0.5 * (x + 4) * (x - 2) }], points: [pt(-4, 0), pt(2, 0), pt(-1, -4.5), pt(0, -4, null, "green")] }),
    steps: [S`Zeros $-4$ and 2; axis $x=-1$.`, S`$f(-1)=0.5(3)(-3)=-4.5$; $f(0)=0.5(4)(-2)=-4$.`], ans: S`vertex $(-1,-4.5)$, y-int $-4$` },
  { title: "Exactly one zero", q: S`State the vertex, zeros, range and y-intercept of $f(x)=-2(x+3)^2$.`,
    fig: F({ view: { xmin: -7, xmax: 1, ymin: -20, ymax: 3 }, curves: [{ f: (x) => -2 * (x + 3) ** 2 }], points: [pt(-3, 0), pt(0, -18, null, "green")], step: { x: 1, y: 2 } }),
    steps: [S`Vertex $(-3,0)$ is on the x-axis: one zero, $x=-3$.`, S`Opens down: max 0, range $y\le0$. $f(0)=-2(9)=-18$.`], ans: S`one zero $-3$; $y\le0$; y-int $-18$` },
  { title: "Domain and range in context", q: S`A ball's height is $h(t)=-5(t-2)^2+21$ m. Give a sensible domain and range.`,
    steps: [S`$h(0)=1$: launched from 1 m. Lands: $(t-2)^2=4.2\Rightarrow t\approx4.05$.`], ans: S`$0\le t\le4.05$; $0\le h\le21$` },
];

const PROBLEMS = [
  { level: 1, q: S`State the vertex and maximum value of $y=-3(x-1)^2+6$.`, recap: "Vertex form.", ans: S`$(1,6)$; max 6` },
  { level: 1, q: S`State the zeros and the axis of $y=2(x+3)(x-5)$.`, recap: "Factored form.", ans: S`$-3$, $5$; $x=1$` },
  { level: 1, q: S`State the y-intercept of $y=x^2-7x+10$.`, recap: "Standard form.", ans: "10" },
  { level: 2, q: S`Find the zeros, vertex and y-intercept of $y=(x-2)^2-9$, then sketch it.`, recap: "All features.", ans: S`zeros $-1$, $5$; $(2,-9)$; $-5$`, fig: gridT({ xmin: -3, xmax: 7, ymin: -10, ymax: 6 }) },
  { level: 2, q: S`State the range of $y=\tfrac12(x+4)^2-3$.`, recap: "Range.", ans: S`$y\ge-3$` },
  { level: 2, q: S`State the direction of opening, the optimal value and the range of $y=-4(x+2)(x-6)$.`, recap: "Factored form, optimal value.", ans: S`down; max 64 at $x=2$; $y\le64$` },
  { level: 2, q: S`Find the zeros and the vertex of $y=-x^2+6x$.`, recap: "Common factor.", ans: S`0, 6; $(3,9)$` },
  { level: 2, q: S`A stone's height is $h(t)=-5(t+1)(t-3)$ m. State its starting height, maximum height, and a sensible domain and range.`, recap: "Context.", ans: S`15 m; 20 m; $0\le t\le3$, $0\le h\le20$` },
  { level: 3, space: 5, q: S`Find the parabola with vertex $(3,-2)$ whose zeros are 4 units apart.`, recap: "Zeros 4 apart.", ans: S`zeros 1 and 5: $y=\tfrac12(x-3)^2-2$` },
  { level: 3, space: 5, q: S`For $y=a(x-2)(x-k)$ the axis is $x=-1$ and the y-intercept is 12. Find $k$ and $a$.`, recap: "Axis and y-intercept.", ans: S`$k=-4$, $a=-1.5$` },
  { level: 3, space: 4, q: S`Compare $y=(x-1)(x-7)$ and $y=-(x-1)(x-7)$ (shown): zeros, vertex and range.`, recap: "Reflected pair.", ans: S`same zeros 1, 7; vertices $(4,-9)$, $(4,9)$; $y\ge-9$, $y\le9$`,
    fig: F({ view: { xmin: -1, xmax: 9, ymin: -10, ymax: 10 }, curves: [{ f: (x) => (x - 1) * (x - 7) }, { f: (x) => -(x - 1) * (x - 7), color: "blue" }], points: [pt(1, 0, false), pt(7, 0, false)], step: { x: 1, y: 2 } }) },
  { level: 3, space: 5, q: S`The vertex of $y=2(x-h)^2+k$ lies on the line $y=x$, and the parabola passes through the origin. Find the vertex (not the origin).`, recap: "Vertex on y = x.", ans: S`$2h^2+h=0$: vertex $(-0.5,-0.5)$` },
  { level: 3, space: 5, q: S`A parabola has zeros $-1$ and $5$ and range $y\le6$. Find its y-intercept.`, recap: "Range and zeros.", ans: S`$a=-\tfrac23$; y-int $\tfrac{10}{3}$` },
];

export const WS = {
  code: "3.1",
  title: "The Three Forms of a Quadratic Function",
  bigideas: S`A quadratic function has three useful forms: factored $a(x-r)(x-s)$ shows the zeros, vertex $a(x-h)^2+k$ shows the vertex and the optimal value, standard $ax^2+bx+c$ shows the y-intercept. The sign of $a$ decides the direction of opening, the axis is halfway between the zeros, and the range is $y\ge k$ or $y\le k$.`,
  goals: ["Recognise the three forms.", "Read the vertex, axis, zeros and y-intercept.", "State the domain, range and optimal value.", "Sketch a parabola from its key features."],
  curriculum: "A1.2, A2.2",
  vocab: [["Vertex", "turning point $(h,k)$"], ["Axis of symmetry", S`$x=h=\frac{r+s}2$`], ["Optimal value", "the maximum or minimum, $k$"]],
  hook: "Show the same parabola written three ways on three cards. Ask groups to find the vertex, zeros and y-intercept from whichever card is fastest, then compare which card answered which question.",
  concepts: [
    ["1. Three forms", S`${F({ view: { xmin: -1, xmax: 7, ymin: -9, ymax: 11 }, curves: [{ f: (x) => 2 * (x - 1) * (x - 5) }], points: [pt(1, 0), pt(5, 0), pt(3, -8), pt(0, 10, null, "green")], step: { x: 1, y: 2 } }, 5, "2(x − 1)(x − 5) = 2(x − 3)² − 8 = 2x² − 12x + 10")}`],
    ["2. Direction and range", S`$a>0$: opens up, minimum $k$, range $y\ge k$. $a<0$: opens down, maximum $k$, range $y\le k$. The domain is all real numbers unless a context restricts it.`],
    ["3. Axis of symmetry", S`Halfway between the zeros, $x=\frac{r+s}{2}$; substitute it to get the optimal value. In vertex form it is $x=h$.`],
  ],
  tips: ["Opposite sign inside vertex form.", "Axis = average of zeros; write it as x = ....", "The range comes from k and the direction, not from the zeros.", "No zeros means no factored form.", "a > 0 minimum, a < 0 maximum."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
