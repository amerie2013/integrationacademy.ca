// IB AA SL Worksheet 10.5 — Area Between Curves (teacher edition)
import { svgT } from "./figT.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Line above parabola", q: S`Find the area enclosed by $y=x^2$ and $y=3x$.`,
    fig: svgT(areaDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x }, { f: (x) => 3 * x, color: "amber" }] }, [{ f: (x) => 3 * x, g: (x) => x * x, a: 0, b: 3 }]), 5.8),
    steps: [S`Meet at 0 and 3.`, S`$\int_0^3(3x-x^2)\,dx=\frac{27}2-9$.`], ans: S`$\frac92$` },
  { title: "Two parabolas", q: S`Find the area enclosed by $y=x^2-1$ and $y=7-x^2$.`,
    steps: [S`Meet at $\pm2$.`, S`$\int_{-2}^2(8-2x^2)\,dx$.`], ans: S`$\frac{64}3$` },
  { title: "Region crossing the axis", q: S`Find the area enclosed by $y=x^2-4x$ and $y=-x$.`,
    fig: svgT(areaDoc({ view: { xmin: -1, xmax: 4.5, ymin: -5, ymax: 3 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 4 * x }, { f: (x) => -x, color: "amber" }] }, [{ f: (x) => -x, g: (x) => x * x - 4 * x, a: 0, b: 3 }]), 5.8),
    steps: [S`$x^2-4x=-x\Rightarrow x=0,3$.`, S`$\int_0^3(3x-x^2)\,dx$.`], ans: S`$\frac92$` },
  { title: "Cubic and line", q: S`Find the total area enclosed by $y=x^3$ and $y=9x$.`,
    steps: [S`Meet at $0,\pm3$; two equal lobes.`, S`$2\int_0^3(9x-x^3)\,dx=2\left(\frac{81}2-\frac{81}4\right)$.`], ans: S`$\frac{81}2$` },
  { title: "Curve, line and axis", q: S`Find the area bounded by $y=\sqrt x$, $y=x-2$ and the x-axis.`,
    fig: svgT(areaDoc({ view: { xmin: -0.5, xmax: 5, ymin: -0.5, ymax: 3 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, x)), a: 0, b: 5 }, { f: (x) => x - 2, color: "amber" }] }, [{ f: (x) => Math.sqrt(x), a: 0, b: 2 }, { f: (x) => Math.sqrt(x), g: (x) => x - 2, a: 2, b: 4 }]), 5.8),
    steps: [S`Meet at $x=4$. Area $=\int_0^4\sqrt x\,dx-\int_2^4(x-2)\,dx=\frac{16}3-2$.`], ans: S`$\frac{10}3$` },
  { title: "Exponential and line", q: S`Find the area between $y=e^{x}$, $y=e$ and the y-axis.`,
    steps: [S`$\int_0^1(e-e^x)\,dx=e-(e-1)$.`], ans: "1" },
  { title: "Reciprocal and line", q: S`Find the area between $y=\frac{3}{x}$ and $y=4-x$.`,
    steps: [S`$\frac3x=4-x\Rightarrow x=1,3$.`, S`$\int_1^3\left(4-x-\frac3x\right)dx=4-3\ln3$.`], ans: S`$4-3\ln3\approx0.704$` },
  { title: "GDC intersections", q: S`Use a GDC to find the area between $y=e^{x}$ and $y=4-x^2$.`,
    steps: ["Intersections ≈ −1.965 and 1.058; integrate the difference."], ans: S`$\approx6.43$` },
  { title: "Unknown boundary", q: S`The area between $y=x^2$ and $y=a$ ($a>0$) is 36. Find $a$.`,
    steps: [S`Area $=\frac43a^{3/2}=36$.`], ans: S`$a=9$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the area enclosed by $y=x^2$ and $y=9$.`, recap: "Meet at ±3.", ans: "36" },
  { level: 1, q: S`Find the intersections of $y=x^2-2$ and $y=x$.`, recap: "Solve.", ans: S`$x=-1,\ 2$` },
  { level: 1, q: S`Find the area enclosed by $y=x^2-2$ and $y=x$.`, recap: "Upper − lower.", ans: S`$\frac92$` },
  { level: 2, q: S`Find the area enclosed by $y=2x^2$ and $y=x^2+4$.`, recap: "Two parabolas.", ans: S`$\frac{32}3$` },
  { level: 2, q: S`Find the area enclosed by $y=x^3$ and $y=x^2$.`, recap: "Meet at 0, 1.", ans: S`$\frac1{12}$` },
  { level: 2, q: S`Find the area between $y=e^{2x}$ and $y=1$ from $x=0$ to $x=1$.`, recap: "Exponential.", ans: S`$\frac12e^2-\frac32\approx2.195$` },
  { level: 2, q: S`Find the area between $y=\frac1x$ and $y=1$ from $x=1$ to $x=4$.`, recap: "Line above.", ans: S`$3-\ln4\approx1.614$` },
  { level: 2, q: S`Shade the region enclosed by $y=4x-x^2$ and $y=x^2$, then find its area.`, recap: "Meet at 0, 2.", ans: S`$\frac83$`,
    fig: svgT(areaDoc({ view: { xmin: -0.5, xmax: 3, ymin: -1, ymax: 5 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => 4 * x - x * x }, { f: (x) => x * x, color: "amber" }] }), 5) },
  { level: 3, space: 4, q: S`Find the total area between $y=x^3-x$ and $y=3x$.`, recap: "Two lobes.", ans: S`meet at $0,\pm2$: $2\times4=8$` },
  { level: 3, space: 4, q: S`Find the area bounded by $y=\frac{8}{x^2}$, $y=x$ and $x=4$.`, recap: "Meet at 2.", ans: S`$\int_2^4\left(x-\frac8{x^2}\right)dx=6-2=4$` },
  { level: 3, space: 4, q: S`The area enclosed by $y=x^2$ and $y=mx$ ($m>0$) is $\frac{4}{3}$. Find $m$.`, recap: S`Area $\frac{m^3}{6}$.`, ans: S`$m=2$` },
  { level: 3, space: 4, q: S`Use a GDC to find the area enclosed by $y=\ln x$ and $y=\frac{x-1}{2}$.`, recap: "Intersections 1 and ≈3.513.", ans: S`$\approx0.322$` },
  { level: 3, space: 4, q: S`Explain why the area between two curves does not change if both curves are moved up by 5.`, recap: "Upper − lower.", ans: "the 5s cancel in the difference" },
];

export const WS = {
  code: "10.5",
  title: "Area Between Curves",
  bigideas: S`Area between curves $=\int_a^b(\text{upper}-\text{lower})\,dx$, where $a$, $b$ are the intersections (or given lines). It works wherever the region lies relative to the x-axis. If the curves cross inside $[a,b]$, split there and add. Use a GDC when the intersection equation cannot be solved exactly.`,
  goals: ["Find intersections.", "Integrate upper − lower.", "Split at crossings.", "Use a GDC for awkward curves."],
  curriculum: "SL 5.11",
  vocab: [["Upper curve", "larger y-value"], ["Intersection", "f(x) = g(x)"], ["Bounded region", "may include lines or axes"]],
  hook: "A window is shaped by two arches. How could you find the area of glass needed?",
  concepts: [
    ["1. Upper − lower", S`${svgT(areaDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x }, { f: (x) => 3 * x, color: "amber" }] }, [{ f: (x) => 3 * x, g: (x) => x * x, a: 0, b: 3 }]), 4.8)} Integrate the gap.`],
    ["2. Crossings", "Split and add."],
    ["3. Technology", "GDC for intersections."],
  ],
  tips: ["Sketch first.", "Limits from intersections.", "Upper − lower is never negative.", "Split where curves cross.", "Check with a GDC."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
