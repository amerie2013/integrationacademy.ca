// MHF4U Worksheet 1.2 — Characteristics of Polynomial Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Read the features", q: String.raw`For $f(x)=3x^5-x^3+2x-8$, give the degree, leading coefficient, end behaviour, the maximum numbers of turning points and zeros, and the y-intercept.`,
    steps: [String.raw`Degree 5, $a=3>0$: odd and positive, so Q3 → Q1.`, String.raw`At most $5-1=4$ turning points and at most 5 zeros (at least 1, since the degree is odd).`, String.raw`$f(0)=-8$.`], ans: String.raw`degree 5, $a=3$, Q3 → Q1, ≤ 4 turning points, 1–5 zeros, y-int $-8$` },
  { title: "Least degree from a graph", q: String.raw`The graph falls at both ends, has 3 turning points and crosses the x-axis 4 times. Give the least possible degree and the sign of the leading coefficient.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 4 }, curves: [{ f: (x) => -(x ** 4) + 5 * x * x - 4 }], points: [pt(-2, 0, false), pt(-1, 0, false), pt(1, 0, false), pt(2, 0, false)], step: { x: 1, y: 1 } }),
    steps: [String.raw`3 turning points: degree at least $3+1=4$.`, String.raw`Both ends down: even degree, $a\lt0$.`], ans: String.raw`least degree 4, $a\lt0$` },
  { title: "Degree from finite differences", q: String.raw`Find the degree and leading coefficient of the polynomial with $f(0),\ldots,f(4)=0, 1, 14, 51, 124$.`,
    steps: [String.raw`First differences: $1, 13, 37, 73$. Second: $12, 24, 36$. Third: $12, 12$.`, String.raw`Third differences constant: degree 3, and $a\cdot3!=12$, so $a=2$.`], ans: "degree 3, a = 2" },
  { title: "Possible turning points", q: String.raw`List the possible numbers of turning points and of real zeros for a quintic (degree 5) function.`,
    steps: [String.raw`Turning points: at most 4, and for odd degree the number is even: 0, 2 or 4.`, String.raw`Zeros: at least 1 (opposite ends), at most 5.`], ans: "turning points 0, 2 or 4; zeros 1 to 5" },
  { title: "Even, odd or neither", q: String.raw`Classify $f(x)=2x^5-x^3$, $g(x)=x^4+x$ and $h(x)=-3x^6+x^2-1$.`,
    steps: [String.raw`$f(-x)=-2x^5+x^3=-f(x)$: odd.`, String.raw`$g(-x)=x^4-x$, neither $g(x)$ nor $-g(x)$: neither.`, String.raw`$h$ has only even powers (the constant counts as $x^0$): even.`], ans: "f odd, g neither, h even" },
  { title: "Sketch from a description", q: String.raw`Sketch a cubic with a negative leading coefficient, two turning points and three zeros.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -(x ** 3) + 4 * x, color: "red" }], step: { x: 1, y: 1 } }),
    steps: [String.raw`$a\lt0$, odd: Q2 → Q4. Two turning points between three crossings.`, String.raw`One example: $y=-x^3+4x=-x(x-2)(x+2)$.`], ans: String.raw`e.g. $y=-x^3+4x$` },
  { title: "Fourth differences", q: String.raw`What are the fourth differences (step 1) of a quartic with leading coefficient $-\tfrac12$?`,
    steps: [String.raw`$n$th differences $=a\cdot n!$.`, String.raw`$-\tfrac12\cdot24=-12$.`], ans: "−12, constant" },
  { title: "A quadratic from a table", q: String.raw`For $x=0,\ldots,4$ the values are $5, 4, -3, -16, -35$. Find the degree and leading coefficient.`,
    steps: [String.raw`First differences $-1,-7,-13,-19$; second differences $-6$ (constant).`, String.raw`Degree 2, $2a=-6$, so $a=-3$.`], ans: "degree 2, a = −3" },
  { title: "A quartic with no zeros", q: String.raw`Can a quartic have no real zeros? Use $y=x^4-2x^2+3$.`,
    fig: F({ view: { xmin: -2.2, xmax: 2.2, ymin: -1, ymax: 7 }, curves: [{ f: (x) => x ** 4 - 2 * x * x + 3, color: "green" }], points: [pt(-1, 2), pt(1, 2), pt(0, 3)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$y=(x^2-1)^2+2\ge2$, so the graph never reaches the x-axis.`, String.raw`It still has 3 turning points: $(\pm1,2)$ and $(0,3)$.`], ans: "yes: an even-degree polynomial can have 0 zeros" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Give the degree, leading coefficient and end behaviour of $f(x)=-x^4+2x^3-7$.`, recap: "Features.", ans: "4; −1; down at both ends" },
  { level: 1, q: String.raw`What is the greatest number of turning points of a degree-6 polynomial?`, recap: "Turning points.", ans: "5" },
  { level: 1, q: String.raw`The third differences of a cubic are all 18. Find the leading coefficient.`, recap: "Differences.", ans: String.raw`$18\div3!=3$` },
  { level: 2, q: String.raw`Classify as even, odd or neither: $f(x)=x^6-2x^2$, $g(x)=4x^3-x$, $h(x)=x^2+x$.`, recap: "Symmetry.", ans: "f even, g odd, h neither" },
  { level: 2, q: String.raw`For $x=0,\ldots,4$ a polynomial has values $1, 2, 9, 28, 65$. Find its degree and leading coefficient.`, recap: "Finite differences.", ans: "third differences 6: degree 3, a = 1" },
  { level: 2, q: String.raw`Sketch a quartic with a positive leading coefficient, 3 turning points and 4 zeros.`, recap: "Sketch from description.", ans: String.raw`W shape crossing the x-axis 4 times, e.g. $y=(x^2-1)(x^2-4)$`, fig: gridT({ xmin: -3, xmax: 3, ymin: -4, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 2, q: String.raw`For the graph shown, state the least possible degree, the sign of the leading coefficient, and the end behaviour.`, recap: "Read a graph.", ans: "degree 3, a > 0, Q3 → Q1",
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 0.5 * x ** 3 - 2 * x }], step: { x: 1, y: 1 } }) },
  { level: 2, q: String.raw`Find the fourth differences of $y=2x^4-x$ for consecutive integer x-values.`, recap: "nth differences.", ans: String.raw`$2\cdot4!=48$` },
  { level: 3, space: 5, q: String.raw`A quartic has $a\lt0$ and y-intercept $3$. What are the possible numbers of distinct real zeros? Explain with a sketch.`, recap: "Zeros from ends and intercept.", ans: "both ends down but f(0) > 0, so at least 2: 2, 3 or 4", fig: gridT({ xmin: -4, xmax: 4, ymin: -4, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: String.raw`A polynomial has constant second differences of 4 (step 1), $f(0)=1$ and $f(1)=4$. Find its equation.`, recap: "Rebuild from differences.", ans: String.raw`$a=2$: $f(x)=2x^2+bx+1$, $3+b=4$, so $f(x)=2x^2+x+1$` },
  { level: 3, space: 5, q: String.raw`Can a cubic function have exactly one turning point? Explain, and sketch the possible shapes of a cubic with $a>0$.`, recap: "Turning points of a cubic.", ans: "no: opposite ends force 0 or 2 turning points", fig: gridT({ xmin: -3, xmax: 3, ymin: -4, ymax: 4 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: String.raw`Prove that the product of two odd functions is even. Check with $f(x)=x^3$ and $g(x)=x$.`, recap: "Products of odd functions.", ans: String.raw`$f(-x)g(-x)=(-f(x))(-g(x))=f(x)g(x)$; $x^3\cdot x=x^4$ is even` },
  { level: 3, space: 5, q: String.raw`An open box is made from a 20 cm by 30 cm sheet by cutting squares of side $x$ from each corner: $V(x)=x(20-2x)(30-2x)$. Give the degree, leading coefficient and end behaviour of $V$, and the domain that makes sense. Sketch $V$ on that domain.`, recap: "Volume model.", ans: String.raw`degree 3, $a=4$, Q3 → Q1; $0\lt x\lt10$`, fig: gridT({ xmin: 0, xmax: 10, ymin: 0, ymax: 1200 }, { x: 1, y: 200 }) },
];

export const WS = {
  code: "1.2",
  title: "Characteristics of Polynomial Functions",
  bigideas: String.raw`A polynomial of degree $n$ has at most $n-1$ turning points and at most $n$ zeros. Odd degree: ends in opposite directions, at least one zero, an even number of turning points. Even degree: ends in the same direction, possibly no zeros, an odd number of turning points. For equally spaced x-values, the $n$th differences are constant and equal $a\cdot n!$. Even functions have only even powers; odd functions have only odd powers.`,
  goals: ["Read degree, leading coefficient and end behaviour.", "Relate turning points and zeros to the degree.", "Use finite differences to find degree and a.", "Classify functions as even, odd or neither."],
  curriculum: "C1.2, C1.3, C1.6",
  vocab: [["Turning point", "where the graph changes from increasing to decreasing or back"], ["nth differences", "constant for degree n; equal $a\\cdot n!$"], ["Even / odd function", "$f(-x)=f(x)$ / $f(-x)=-f(x)$"]],
  hook: String.raw`Draw a graph with 5 turning points. Ask: what is the smallest degree it could have? Could it have 6 zeros? 7?`,
  concepts: [
    ["1. Degree and shape", String.raw`Turning points ≤ $n-1$, zeros ≤ $n$.
${F({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 0.25 * x * (x * x - 1) * (x * x - 4) * 1.2, color: "blue" }], step: { x: 1, y: 1 } })}`],
    ["2. Finite differences", String.raw`Constant $n$th differences ↔ degree $n$, and the constant is $a\cdot n!$.`],
    ["3. Symmetry", String.raw`Only even powers → even; only odd powers → odd; mixed → neither.`],
  ],
  tips: ["A constant term is an even power (x⁰).", "Odd degree: turning points come in pairs.", "nth differences = a·n!, not just a.", "Fewer turning points than n − 1 is allowed.", "Check differences only with equally spaced x."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
