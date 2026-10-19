// MCV4U Worksheet 2.2 — The Product Rule (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Two polynomials", q: S`Differentiate $y=(4x-1)(x^2+2)$.`,
    steps: [S`$u'v+uv'=4(x^2+2)+(4x-1)(2x)$.`, S`$=4x^2+8+8x^2-2x$.`], ans: S`$y'=12x^2-2x+8$` },
  { title: "A power times a binomial", q: S`Differentiate $y=x^4(3-x)$.`,
    steps: [S`$4x^3(3-x)+x^4(-1)=12x^3-4x^3-x^4$.`], ans: S`$y'=12x^3-5x^4$` },
  { title: "A root factor", q: S`Differentiate $y=\sqrt x\,(x+6)$ with the product rule.`,
    steps: [S`$\frac1{2\sqrt x}(x+6)+\sqrt x\cdot1$.`, S`Common denominator: $\frac{x+6+2x}{2\sqrt x}$.`], ans: S`$y'=\frac{3x+6}{2\sqrt x}$` },
  { title: "From a table", q: S`$f(1)=-2$, $f'(1)=4$, $g(1)=5$, $g'(1)=-3$. Find $(fg)'(1)$.`,
    steps: [S`$f'(1)g(1)+f(1)g'(1)=4(5)+(-2)(-3)$.`], ans: "26" },
  { title: "A tangent line", q: S`Find the tangent to $y=(x-2)(x^2+1)$ at $x=0$.`,
    fig: F({ view: { xmin: -2, xmax: 3, ymin: -8, ymax: 4 }, curves: [{ f: (x) => (x - 2) * (x * x + 1) }, { f: (x) => x - 2, color: "green" }], points: [pt(0, -2)], step: { x: 1, y: 1 } }),
    steps: [S`$y(0)=-2$.`, S`$y'=(x^2+1)+(x-2)(2x)$, so $y'(0)=1$.`], ans: S`$y=x-2$` },
  { title: "Horizontal tangents", q: S`Find the points where $y=x^2(x-3)$ has a horizontal tangent.`,
    fig: F({ view: { xmin: -1.5, xmax: 4, ymin: -6, ymax: 3 }, curves: [{ f: (x) => x * x * (x - 3) }], points: [pt(0, 0), pt(2, -4)], step: { x: 1, y: 1 } }),
    steps: [S`$y'=2x(x-3)+x^2=3x^2-6x=3x(x-2)$.`], ans: "(0, 0) and (2, −4)" },
  { title: "Three factors", q: S`For $y=(x+1)(x+2)(x-3)$, find $y'(1)$.`,
    steps: [S`$y'=(x+2)(x-3)+(x+1)(x-3)+(x+1)(x+2)$.`, S`At 1: $3(-2)+2(-2)+2(3)=-6-4+6$.`], ans: "−4" },
  { title: "A growing rectangle", q: S`A rectangle has length $L=10+2t$ cm and width $W=6+t$ cm after $t$ s. How fast is its area changing at $t=3$?`,
    fig: F({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 300 }, curves: [{ f: (t) => (10 + 2 * t) * (6 + t), a: 0, b: 8 }, { f: (t) => 144 + 34 * (t - 3), color: "green" }], points: [pt(3, 144)], step: { x: 1, y: 50 } }),
    steps: [S`$A'=L'W+LW'$; at $t=3$: $L=16$, $W=9$.`, S`$A'=2(9)+16(1)$.`], ans: "34 cm² per second" },
  { title: "A square of a function", q: S`Use the product rule on $f\cdot f$ to differentiate $y=(x^2+3x)^2$, then find $y'(1)$.`,
    steps: [S`$(f\cdot f)'=f'f+ff'=2ff'$.`, S`$y'=2(x^2+3x)(2x+3)$; $y'(1)=2(4)(5)$.`], ans: S`$y'=2(x^2+3x)(2x+3)$; $y'(1)=40$` },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=x(x+5)$ with the product rule.`, recap: "u = x, v = x + 5.", ans: S`$2x+5$` },
  { level: 1, q: S`Differentiate $y=x^3(x-2)$.`, recap: "u′v + uv′.", ans: S`$4x^3-6x^2$` },
  { level: 1, q: S`$f(0)=2$, $f'(0)=-1$, $g(0)=3$, $g'(0)=4$. Find $(fg)'(0)$.`, recap: "Substitute in the rule.", ans: "5" },
  { level: 2, q: S`For $y=(2x^2-1)(x+3)$, find $y'(1)$.`, recap: "Differentiate, then substitute.", ans: "17" },
  { level: 2, q: S`Differentiate and simplify $y=(5-x)(x^2+x)$.`, recap: "Watch the sign of u′.", ans: S`$-3x^2+8x+5$` },
  { level: 2, q: S`For $y=(\sqrt x+1)(x-4)$, find $y'(4)$.`, recap: "One term vanishes at x = 4.", ans: "3" },
  { level: 2, q: S`Find the tangent to $y=(x+1)(x-3)$ at $x=2$ and draw it.`, recap: "Point and slope.", ans: S`$y=2x-7$`, fig: gridT({ xmin: -2, xmax: 4, ymin: -5, ymax: 4 }, { x: 1, y: 1 }) },
  { level: 2, q: S`A ticket costs 20 dollars and the price falls 0.50 dollars per week, while attendance is 900 and rises 30 per week. How fast is revenue changing?`, recap: "R = pq, R′ = p′q + pq′.", ans: "rising at 150 dollars per week" },
  { level: 3, space: 5, q: S`Find all points where $y=(x^2-1)(x^2-4)$ has a horizontal tangent, and sketch the curve.`, recap: "Factor y′.", ans: S`$y'=2x(2x^2-5)$: $(0,4)$, $(\pm1.58,-2.25)$`, fig: gridT({ xmin: -3, xmax: 3, ymin: -3, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Show that $(uvw)'=u'vw+uv'w+uvw'$ by grouping $u\cdot(vw)$. Use it to find $y'(2)$ for $y=x(x-1)(x+4)$.`, recap: "Product rule twice.", ans: S`$6+12+2=20$` },
  { level: 3, space: 5, q: S`Let $f(x)=(x-2)^2g(x)$ for a differentiable $g$. Show that $f'(2)=0$. What does this say about the graph at a double root?`, recap: "Both terms of f′ contain (x − 2).", ans: S`$f'=2(x-2)g+(x-2)^2g'$, both 0 at $x=2$; the graph is tangent to the x-axis` },
  { level: 3, space: 5, q: S`Find $k$ so that the tangent to $y=(x+k)(x^2-1)$ at $x=1$ has slope 6.`, recap: "Write y′(1) in terms of k.", ans: S`$2(1+k)=6\Rightarrow k=2$` },
  { level: 3, space: 5, q: S`A rectangle's length is $20-0.5t$ cm and its width $8+0.3t$ cm. Find the rate of change of its area at $t=0$, and the time when the area stops increasing.`, recap: "A′ = L′W + LW′, set to 0.", ans: S`$2$ cm² per s; $A'=2-0.3t=0$ at $t\approx6.67$ s` },
];

export const WS = {
  code: "2.2",
  title: "The Product Rule",
  bigideas: S`The derivative of a product is not the product of the derivatives. For $y=uv$, $y'=u'v+uv'$: think of the area of a rectangle with sides $u$ and $v$, which gains two strips when both sides grow. For three factors, $(uvw)'=u'vw+uv'w+uvw'$. The rule is needed whenever expanding is long or impossible (roots, high powers), and for rates of products such as revenue $=$ price $\times$ quantity. Factor $y'$ before solving $y'=0$.`,
  goals: ["Apply (uv)′ = u′v + uv′.", "Differentiate products of three factors.", "Find tangents and horizontal tangents of products.", "Use the rule for rates of change of products."],
  curriculum: "A3.3, A3.5",
  vocab: [["Product rule", "$(uv)'=u'v+uv'$"], ["Revenue", "price $\\times$ quantity"], ["Double root", "a factor $(x-a)^2$"]],
  hook: S`Is $\frac{d}{dx}(x^2\cdot x^3)$ equal to $2x\cdot3x^2$? Expand $x^2\cdot x^3$ first and compare.`,
  concepts: [
    ["1. The area model", S`A rectangle $u\times v$ grows by the strips $v\,\Delta u$ and $u\,\Delta v$; the corner $\Delta u\,\Delta v$ vanishes in the limit. The curve $y=x(x-2)^2$ and its derivative:
${F({ view: { xmin: -1, xmax: 3.5, ymin: -3, ymax: 5 }, curves: [{ f: (x) => x * (x - 2) ** 2 }, { f: (x) => (x - 2) ** 2 + 2 * x * (x - 2), color: "blue" }], points: [pt(2 / 3, (2 / 3) * (4 / 3) ** 2), pt(2, 0)], step: { x: 1, y: 1 } })}`],
    ["2. Organize", S`List $u$, $u'$, $v$, $v'$, then combine and simplify.`],
    ["3. Rates of products", S`$R=pq\Rightarrow R'=p'q+pq'$: both changes count.`],
  ],
  tips: ["(uv)′ ≠ u′v′.", "Keep brackets when substituting.", "Factor the derivative before setting it to 0.", "A constant factor needs no product rule.", "Check polynomial answers by expanding."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
