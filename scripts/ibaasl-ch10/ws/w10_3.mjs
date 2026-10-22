// IB AA SL Worksheet 10.3 — Area and Definite Integrals (teacher edition)
import { svgT } from "./figT.mjs";
import { areaDoc, stripsOf } from "../figs10.mjs";

const S = String.raw;
const g1 = (x) => 16 - x * x;

const EXAMPLES = [
  { title: "Lower sum", q: S`Find the lower sum for $y=16-x^2$ on $[0,4]$ with 4 strips.`,
    fig: svgT(areaDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 17 }, step: { x: 1, y: 2 }, curves: [{ f: g1 }] }, [], stripsOf(g1, 0, 4, 4, "lower")), 5.8),
    steps: ["Decreasing: use right heights 15, 12, 7, 0."], ans: "34" },
  { title: "Upper sum", q: S`Find the upper sum for the same function and strips.`,
    steps: ["Left heights 16, 15, 12, 7."], ans: "50" },
  { title: "Trapezoidal rule", q: S`Estimate $\int_0^4(16-x^2)\,dx$ with 4 trapezia.`,
    fig: svgT(areaDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 17 }, step: { x: 1, y: 2 }, curves: [{ f: g1 }] }, [], stripsOf(g1, 0, 4, 4, "trap", "amber")), 5.8),
    steps: [S`$\frac12[16+2(15+12+7)+0]$.`], ans: "42" },
  { title: "Over or under", q: S`Is the trapezoidal estimate for $\int_0^4(16-x^2)\,dx$ too big or too small?`,
    steps: ["The curve is concave down: chords lie below it."], ans: "too small (the exact value is 128/3 ≈ 42.67)" },
  { title: "From a table", q: S`Use the trapezoidal rule: $x$: 0, 1, 2, 3, 4; $y$: 2, 3.5, 4, 3.2, 1.`,
    steps: [S`$\frac12[2+2(3.5+4+3.2)+1]$.`], ans: "12.2" },
  { title: "Signed area", q: S`Explain why $\int_0^3(x-3)\,dx<0$.`,
    fig: svgT(areaDoc({ view: { xmin: -0.5, xmax: 4, ymin: -4, ymax: 2 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x - 3 }] }, [{ f: (x) => x - 3, a: 0, b: 3, color: "red" }]), 5.8),
    steps: ["The region is below the x-axis."], ans: S`$-4.5$ (area 4.5)` },
  { title: "Reversing limits", q: S`$\int_1^5 h(x)\,dx=-6$. Find $\int_5^1 h(x)\,dx$.`,
    steps: ["Change sign."], ans: "6" },
  { title: "Adding intervals", q: S`$\int_0^4 f\,dx=11$ and $\int_4^9 f\,dx=-3$. Find $\int_0^9 f\,dx$.`,
    steps: ["Add."], ans: "8" },
  { title: "Linearity", q: S`$\int_2^6 f\,dx=7$. Find $\int_2^6\left(3f(x)-2\right)dx$.`,
    steps: [S`$3(7)-2(6-2)$.`], ans: "13" },
];

const PROBLEMS = [
  { level: 1, q: S`For $y=x+1$ on $[0,4]$ with 4 strips, find the lower sum.`, recap: "Left heights.", ans: "10" },
  { level: 1, q: S`For $y=x+1$ on $[0,4]$ with 4 strips, find the upper sum.`, recap: "Right heights.", ans: "14" },
  { level: 1, q: S`$\int_3^8 g\,dx=5$. Find $\int_8^3 g\,dx$.`, recap: "Reverse.", ans: S`$-5$` },
  { level: 2, q: S`Estimate $\int_1^3 x^3\,dx$ with 4 trapezia.`, recap: "h = 0.5.", ans: "20.5" },
  { level: 2, q: S`Is your estimate for $\int_1^3x^3\,dx$ an over- or underestimate? (Exact value 20.)`, recap: "Concavity.", ans: "over (concave up)" },
  { level: 2, q: S`$\int_0^2 f\,dx=3$, $\int_0^5 f\,dx=10$. Find $\int_2^5 f\,dx$.`, recap: "Subtract.", ans: "7" },
  { level: 2, q: S`$\int_1^4 f\,dx=6$, $\int_1^4 g\,dx=-1$. Find $\int_1^4(2f+5g)\,dx$.`, recap: "Linearity.", ans: "7" },
  { level: 2, q: S`Shade the region whose area is $\int_1^3(x^2+1)\,dx$ and estimate it with two trapezia.`, recap: "Sketch and estimate.", ans: S`$\frac12[2+2(5)+10]=11$`,
    fig: svgT(areaDoc({ view: { xmin: -0.5, xmax: 4, ymin: -1, ymax: 12 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x + 1 }] }), 5) },
  { level: 3, space: 4, q: S`Find lower and upper sums for $y=\frac{12}{x}$ on $[1,4]$ with 3 strips, and use a GDC for the integral.`, recap: "Bounds.", ans: S`lower 13, upper 22; $12\ln4\approx16.64$` },
  { level: 3, space: 4, q: S`A tank fills at a rate given by $t$ (min): 0, 2, 4, 6, 8 and $r$ (L/min): 0, 5, 8, 9, 7. Estimate the volume added in 8 minutes.`, recap: "Trapezoidal rule.", ans: S`$1\cdot[0+2(5+8+9)+7]=51$ L` },
  { level: 3, space: 4, q: S`Use a GDC: find $\int_0^2(x-2)^3\,dx$ and $\int_0^4(x-2)^3\,dx$, and explain the second value.`, recap: "Signed area.", ans: S`$-4$ and $0$: equal areas below and above cancel` },
  { level: 3, space: 4, q: S`$\int_0^4 f\,dx=12$. Find $k$ if $\int_0^4\left(f(x)+k\right)dx=20$.`, recap: "Linearity.", ans: S`$12+4k=20\Rightarrow k=2$` },
  { level: 3, space: 4, q: S`Explain why lower sum ≤ integral ≤ upper sum for a decreasing positive function.`, recap: "Rectangles inside/outside.", ans: "lower rectangles lie under the curve, upper rectangles cover it" },
];

export const WS = {
  code: "10.3",
  title: "Area and Definite Integrals",
  bigideas: S`Area under a curve is estimated by strips: lower sum ≤ area ≤ upper sum, and both approach $\int_a^b f(x)\,dx$ as the strips get thinner. Trapezoidal rule: $\frac h2[y_0+2(y_1+\dots+y_{n-1})+y_n]$ — too big for concave-up, too small for concave-down curves. $\int_a^bf\,dx$ is signed area. Properties: $\int_a^a=0$, $\int_b^a=-\int_a^b$, additivity, linearity.`,
  goals: ["Find lower and upper sums.", "Use the trapezoidal rule.", "Interpret signed area.", "Use properties of integrals."],
  curriculum: "SL 5.5, 5.8",
  vocab: [["Lower/upper sum", "rectangle estimates"], ["Trapezoidal rule", "trapezia estimate"], ["Definite integral", "limit of sums"]],
  hook: "How could you measure the area of a lake from a map with a ruler, if you can only measure straight widths?",
  concepts: [
    ["1. Strips", S`${svgT(areaDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 17 }, step: { x: 1, y: 2 }, curves: [{ f: g1 }] }, [], stripsOf(g1, 0, 4, 8, "upper", "red")), 4.8)} More strips, closer estimate.`],
    ["2. Trapezia", "Concavity decides over/under."],
    ["3. Properties", "Reverse, add, scale."],
  ],
  tips: ["Choose heights carefully.", "Only the end ordinates are single.", "Signed area can be negative.", "No + C for definite integrals.", "Sketch first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
