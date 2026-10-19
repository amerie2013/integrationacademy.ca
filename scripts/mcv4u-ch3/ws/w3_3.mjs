// MCV4U Worksheet 3.3 — Concavity and the Second Derivative Test (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Concavity of a cubic", q: S`Find the intervals of concavity and the inflection point of $f(x)=x^3+3x^2-9x+4$.`,
    steps: [S`$f''(x)=6x+6$.`, S`Concave down for $x\lt-1$, up for $x\gt-1$; $f(-1)=15$.`], ans: S`down on $(-\infty,-1)$, up on $(-1,\infty)$; inflection $(-1,15)$` },
  { title: "Two inflection points", q: S`Find the inflection points of $f(x)=x^4-12x^2$.`,
    fig: F({ view: { xmin: -3.5, xmax: 3.5, ymin: -40, ymax: 15 }, curves: [{ f: (x) => x ** 4 - 12 * x * x }], points: [pt(Math.SQRT2, -20), pt(-Math.SQRT2, -20)], step: { x: 1, y: 5 } }),
    steps: [S`$f''(x)=12x^2-24=12(x^2-2)$: zeros $\pm\sqrt2$, sign changes at both.`, S`$f(\pm\sqrt2)=4-24=-20$.`], ans: S`$(\pm\sqrt2,-20)$` },
  { title: "Down, up, down", q: S`Find the intervals of concavity of $f(x)=-x^4+4x^3$.`,
    fig: F({ view: { xmin: -1.5, xmax: 4.5, ymin: -12, ymax: 32 }, curves: [{ f: (x) => -(x ** 4) + 4 * x ** 3 }], points: [pt(0, 0), pt(2, 16), pt(3, 27)], step: { x: 1, y: 4 } }),
    steps: [S`$f''(x)=-12x^2+24x=-12x(x-2)$.`, S`Signs $-,+,-$.`], ans: S`concave down on $(-\infty,0)$ and $(2,\infty)$, up on $(0,2)$; inflection points $(0,0)$ and $(2,16)$` },
  { title: "The second derivative test", q: S`Classify the critical points of $f(x)=x^3-6x^2-15x$.`,
    fig: F({ view: { xmin: -3, xmax: 8, ymin: -110, ymax: 20 }, curves: [{ f: (x) => x ** 3 - 6 * x * x - 15 * x }], points: [pt(-1, 8), pt(5, -100)], step: { x: 1, y: 10 } }),
    steps: [S`$f'(x)=3(x-5)(x+1)$; $f''(x)=6x-12$.`, S`$f''(-1)=-18\lt0$: max; $f''(5)=18\gt0$: min.`], ans: S`local maximum $(-1,8)$; local minimum $(5,-100)$` },
  { title: "An inconclusive test", q: S`For $f(x)=x^6$ and $g(x)=x^5$, what does the second derivative test say at 0? Classify each point.`,
    steps: [S`$f''(0)=0$ and $g''(0)=0$: no conclusion.`, S`$f'=6x^5$ changes $-\to+$: minimum. $g'=5x^4\ge0$: neither; $g''=20x^3$ changes sign: inflection.`], ans: S`$x^6$: minimum; $x^5$: inflection point, no extremum` },
  { title: "A reciprocal", q: S`Describe the concavity of $f(x)=\frac{1}{x-2}$.`,
    steps: [S`$f''(x)=\frac{2}{(x-2)^3}$.`, S`Negative for $x\lt2$, positive for $x\gt2$; $x=2$ is not in the domain.`], ans: S`concave down on $(-\infty,2)$, up on $(2,\infty)$; no inflection point` },
  { title: "Reading the graph of f′", q: S`The graph of $f'(x)=x^2-4x$ is shown. Where is $f$ concave up, and where is its inflection point?`,
    fig: F({ view: { xmin: -1.5, xmax: 5.5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x, color: "blue" }], points: [pt(2, -4)], step: { x: 1, y: 1 } }),
    steps: [S`$f$ is concave up where $f'$ is increasing: $x\gt2$.`, S`$f'$ has its minimum at $x=2$.`], ans: S`concave up on $(2,\infty)$, down on $(-\infty,2)$; inflection at $x=2$` },
  { title: "Diminishing returns", q: S`A worker assembles $P(t)=-t^3+6t^2+12t$ units in the first $t$ hours of a shift, $0\le t\le5$. When is the worker fastest?`,
    steps: [S`Rate $P'(t)=-3t^2+12t+12$; $P''(t)=-6t+12=0$ at $t=2$.`, S`$P''$ changes $+\to-$: $P'$ is greatest there; $P'(2)=24$.`], ans: "after 2 hours, at 24 units per hour" },
  { title: "Tangent above or below", q: S`Is the tangent to $y=x^3$ at $x=1$ above or below the curve near $x=1$? What does that mean for estimates?`,
    steps: [S`Tangent $y=3x-2$; $f''(1)=6\gt0$: concave up.`, S`The curve lies above the tangent, so tangent-line estimates are too small.`], ans: "below the curve: tangent estimates underestimate f near x = 1" },
];

const PROBLEMS = [
  { level: 1, q: S`Find $f''(x)$ for $f(x)=4x^3-x^2$.`, recap: "Differentiate twice.", ans: S`$24x-2$` },
  { level: 1, q: S`Where is $f(x)=x^3+9x^2$ concave down?`, recap: "f″ = 6x + 18.", ans: S`$x\lt-3$` },
  { level: 1, q: S`$f'(c)=0$ and $f''(c)\lt0$. What is at $c$?`, recap: "Second derivative test.", ans: "a local maximum" },
  { level: 2, q: S`Find the intervals of concavity and the inflection points of $f(x)=x^4+4x^3$.`, recap: "f″ = 12x(x + 2).", ans: S`up on $(-\infty,-2)$, $(0,\infty)$; down on $(-2,0)$; inflection $(-2,-16)$, $(0,0)$` },
  { level: 2, q: S`Classify the critical points of $f(x)=4x^3-3x^4$.`, recap: "f′ = 12x²(1 − x); test both.", ans: S`$f''(1)=-12$: maximum $(1,1)$; at 0 the test fails and $f'$ does not change sign: no extremum` },
  { level: 2, q: S`Find the inflection point of $f(x)=x^{5/3}$.`, recap: "f″ does not exist at 0 but changes sign.", ans: S`$(0,0)$` },
  { level: 2, q: S`Find the inflection point of $f(x)=x^3-6x^2+12x$ and describe the tangent there.`, recap: "f′ = 3(x − 2)².", ans: S`$(2,8)$, with a horizontal tangent` },
  { level: 2, q: S`Sketch a function with $f(1)=2$, $f'(1)=3$, $f''\gt0$ for $x\lt1$ and $f''\lt0$ for $x\gt1$.`, recap: "Inflection at (1, 2), rising there.", ans: "rising through (1, 2) with slope 3, cup to the left, cap to the right", fig: gridT({ xmin: -2, xmax: 4, ymin: -3, ymax: 7 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Find $a$, $b$ and $c$ so that $f(x)=ax^3+bx^2+c$ has an inflection point at $(1,-2)$ with slope $-3$ there.`, recap: "f″(1) = 0, f′(1) = −3, f(1) = −2.", ans: S`$a=1$, $b=-3$, $c=0$: $f(x)=x^3-3x^2$` },
  { level: 3, space: 5, q: S`For which $c$ does $f(x)=x^4+4x^3+cx^2$ have no inflection points?`, recap: "f″ must not change sign: discriminant ≤ 0.", ans: S`$f''=12x^2+24x+2c$; $576-96c\le0\Rightarrow c\ge6$` },
  { level: 3, space: 5, q: S`$f'(x)=(x+1)(x-2)^2$. Find the local extrema and the inflection points of $f$, and sketch a possible graph.`, recap: "f″ = (x − 2)(3x).", ans: S`local minimum at $x=-1$; inflection points at $x=0$ and $x=2$`, fig: gridT({ xmin: -3, xmax: 4, ymin: -4, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`The cost of $x$ items is $C(x)=x^3-30x^2+400x+500$. At what level is the marginal cost lowest, and what is it?`, recap: "Minimize C′: C″ = 0.", ans: S`$x=10$; $C'(10)=100$ dollars per item` },
  { level: 3, space: 5, q: S`Show that the tangent to $f(x)=x^3-3x^2+2$ at its inflection point crosses the curve there.`, recap: "f minus the tangent is a cube.", ans: S`inflection $(1,0)$, tangent $y=-3x+3$; $f(x)-(-3x+3)=(x-1)^3$ changes sign at 1` },
];

export const WS = {
  code: "3.3",
  title: "Concavity and the Second Derivative Test",
  bigideas: S`Where $f''\gt0$ the slopes increase and the graph is concave up (above its tangents); where $f''\lt0$ it is concave down (below them). A point of inflection is a point where the concavity changes — $f''$ changes sign there (usually $f''=0$, sometimes $f''$ does not exist). The second derivative test: at a critical number with $f'(c)=0$, $f''(c)\gt0$ gives a local minimum, $f''(c)\lt0$ a local maximum, and $f''(c)=0$ gives no conclusion.`,
  goals: ["Find intervals of concavity.", "Find inflection points.", "Use the second derivative test.", "Interpret concavity in context."],
  curriculum: "B1.4",
  vocab: [["Concave up", "$f''\\gt0$"], ["Inflection point", "concavity changes"], ["Second derivative test", "sign of $f''(c)$ at $f'(c)=0$"]],
  hook: S`A car speeds up, then eases off the accelerator while still speeding up. How would the distance–time graph bend in each phase?`,
  concepts: [
    ["1. Cups and caps", S`$f(x)=x^3+3x^2-9x+4$: concave down (cap) left of $-1$, up (cup) to the right:
${F({ view: { xmin: -5, xmax: 3, ymin: -10, ymax: 35 }, curves: [{ f: (x) => x ** 3 + 3 * x * x - 9 * x + 4 }], points: [pt(-1, 15), pt(-3, 31), pt(1, -1)], step: { x: 1, y: 5 } })}`],
    ["2. Inflection points", S`Solve $f''=0$ (or find where $f''$ does not exist), then confirm a sign change.`],
    ["3. Second derivative test", S`$f'(c)=0$: $f''(c)\gt0$ min, $f''(c)\lt0$ max, $f''(c)=0$ go back to $f'$.`],
  ],
  tips: ["f″ = 0 is not enough for inflection.", "Give inflection points as (x, y).", "Concave up ≠ increasing.", "If f″(c) = 0, use the first derivative test.", "Points not in the domain can't be inflection points."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
