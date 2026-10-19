// MCV4U Worksheet 3.6 — Optimization Problems (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "A number problem", q: S`Two positive numbers have product 100. Minimize the sum of the first and twice the second.`,
    steps: [S`First $x$, second $\frac{100}{x}$: $S(x)=x+\frac{200}{x}$, $x\gt0$.`, S`$S'(x)=1-\frac{200}{x^2}=0\Rightarrow x=\sqrt{200}\approx14.14$; $S''\gt0$.`], ans: S`$14.14$ and $7.07$, with sum $S\approx28.28$` },
  { title: "Fencing against a wall", q: S`A 50 m² garden is fenced on three sides; a wall forms the fourth. Find the least fencing.`,
    fig: F({ view: { xmin: 0, xmax: 15, ymin: 0, ymax: 40 }, curves: [{ f: (y) => 2 * y + 50 / y, a: 1.5, b: 15 }], points: [pt(5, 20)], step: { x: 1, y: 5 } }),
    steps: [S`Sides $y$ (perpendicular to the wall) and $x$: $xy=50$, $L=x+2y=\frac{50}{y}+2y$.`, S`$L'(y)=2-\frac{50}{y^2}=0\Rightarrow y=5$, $x=10$.`], ans: "10 m along the wall and 5 m out: 20 m of fence" },
  { title: "The cheapest box", q: S`A closed box with a square base holds 2 m³. The base costs 10 dollars per m², the sides and top 5 dollars per m². Minimize the cost.`,
    steps: [S`$h=\frac{2}{x^2}$; $C=10x^2+5x^2+20xh=15x^2+\frac{40}{x}$.`, S`$C'(x)=30x-\frac{40}{x^2}=0\Rightarrow x^3=\frac43\Rightarrow x\approx1.10$ m; $h\approx1.65$ m.`], ans: "base about 1.10 m by 1.10 m, height about 1.65 m; cost about 54.51 dollars" },
  { title: "The largest open cylinder", q: S`An open-top cylinder is made from $300\pi$ cm² of material. Maximize its volume.`,
    fig: F({ view: { xmin: 0, xmax: 18, ymin: 0, ymax: 3500 }, curves: [{ f: (r) => (Math.PI * (300 * r - r ** 3)) / 2, a: 0, b: Math.sqrt(300) }], points: [pt(10, 1000 * Math.PI)], step: { x: 2, y: 500 } }),
    steps: [S`$\pi r^2+2\pi rh=300\pi\Rightarrow h=\frac{300-r^2}{2r}$; $V=\pi r^2h=\frac{\pi}{2}(300r-r^3)$.`, S`$V'(r)=\frac\pi2(300-3r^2)=0\Rightarrow r=10$, $h=10$.`], ans: S`radius 10 cm, height 10 cm, volume $1000\pi\approx3141.6$ cm³` },
  { title: "A rectangle under a curve", q: S`A rectangle has one corner at the origin and the opposite corner on $y=9-x^2$ in the first quadrant. Maximize its area.`,
    fig: F({ view: { xmin: 0, xmax: 3.5, ymin: 0, ymax: 10 }, curves: [{ f: (x) => 9 - x * x, a: 0, b: 3 }], points: [pt(Math.sqrt(3), 6)], segs: [{ pts: [[0, 6], [Math.sqrt(3), 6], [Math.sqrt(3), 0]], color: "green" }], step: { x: 0.5, y: 1 } }),
    steps: [S`$A(x)=x(9-x^2)$, $0\le x\le3$.`, S`$A'(x)=9-3x^2=0\Rightarrow x=\sqrt3$; $A=6\sqrt3$.`], ans: S`$\sqrt3$ by 6, area $6\sqrt3\approx10.39$` },
  { title: "The closest point", q: S`Find the points on $y=x^2$ closest to $(0,3)$.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -0.5, ymax: 5 }, curves: [{ f: (x) => x * x }], points: [pt(0, 3), pt(Math.sqrt(2.5), 2.5), pt(-Math.sqrt(2.5), 2.5)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`$D=x^2+(x^2-3)^2$ (squared distance); $D'=2x+4x(x^2-3)=2x(2x^2-5)$.`, S`$x=0$ gives $D=9$; $x^2=2.5$ gives $D=2.75$.`], ans: S`$(\pm1.58,2.5)$, at distance $\sqrt{2.75}\approx1.66$` },
  { title: "Rental pricing", q: S`At 30 dollars a day, 120 bikes are rented; each 1 dollar increase loses 3 rentals. What price maximizes revenue?`,
    steps: [S`After $n$ increases: $R(n)=(30+n)(120-3n)=3600+30n-3n^2$.`, S`$R'(n)=30-6n=0\Rightarrow n=5$.`], ans: "35 dollars: 105 rentals and 3675 dollars" },
  { title: "Swim, then run", q: S`A swimmer 2 km offshore wants to reach a point 6 km along the beach. She swims at 3 km/h and runs at 5 km/h. Where should she land?`,
    steps: [S`Land $x$ km along: $T(x)=\frac{\sqrt{4+x^2}}{3}+\frac{6-x}{5}$, $0\le x\le6$.`, S`$T'(x)=\frac{x}{3\sqrt{4+x^2}}-\frac15=0\Rightarrow25x^2=9(4+x^2)\Rightarrow x=1.5$.`, S`$T(1.5)\approx1.733$ h; $T(0)\approx1.867$, $T(6)\approx2.108$.`], ans: "1.5 km along the beach, about 1.73 h" },
  { title: "Lowest average cost", q: S`Producing $x$ items costs $C(x)=0.01x^2+20x+2500$ dollars. Find the lowest average cost.`,
    steps: [S`$A(x)=0.01x+20+\frac{2500}{x}$; $A'(x)=0.01-\frac{2500}{x^2}=0\Rightarrow x=500$.`, S`$A(500)=5+20+5=30$.`], ans: "500 items, 30 dollars per item" },
];

const PROBLEMS = [
  { level: 1, q: S`Two numbers add to 30. Find their largest product.`, recap: "x(30 − x).", ans: "225" },
  { level: 1, q: S`A rectangle has perimeter 100 m. Find its largest area.`, recap: "A square.", ans: S`625 m²` },
  { level: 1, q: S`Two positive numbers have product 36. Find their smallest sum.`, recap: "x + 36/x.", ans: "12" },
  { level: 2, q: S`A 600 m² rectangular pen is split in two by a fence parallel to one side. Minimize the fencing.`, recap: "F = 2x + 3y, xy = 600.", ans: "30 m by 20 m (divider 20 m), 120 m of fence" },
  { level: 2, q: S`Squares of side $x$ are cut from the corners of a 12 cm by 12 cm sheet to make an open box. Maximize the volume.`, recap: "V = x(12 − 2x)².", ans: S`$x=2$ cm, volume 128 cm³` },
  { level: 2, q: S`Two numbers differ by 10. Find the smallest possible product.`, recap: "x(x − 10).", ans: S`$-25$ (5 and $-5$)` },
  { level: 2, q: S`A closed cylinder holds 1000 cm³. Find the radius and height that minimize its surface area.`, recap: "A = 2πr² + 2000/r.", ans: S`$r\approx5.42$ cm, $h\approx10.84$ cm` },
  { level: 2, q: S`A rectangle is inscribed in a semicircle of radius 4 with its base on the diameter. Find its largest area and sketch it.`, recap: "A = 2x√(16 − x²).", ans: S`$x=2\sqrt2$: area 16`, fig: gridT({ xmin: -5, xmax: 5, ymin: -1, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`A window is a rectangle topped by a semicircle, with perimeter 10 m. Find the width and rectangle height that let in the most light (2 decimals).`, recap: "Write the area in terms of the width only.", ans: S`width $\frac{5}{1+\pi/4}\approx2.80$ m, height $\approx1.40$ m, area $\approx7.00$ m²` },
  { level: 3, space: 5, q: S`A parcel with a square end may have length plus girth (perimeter of the end) at most 300 cm. Maximize its volume.`, recap: "V = x²(300 − 4x).", ans: S`end 50 cm by 50 cm, length 100 cm, volume 250 000 cm³` },
  { level: 3, space: 5, q: S`A truck travels 400 km. Running costs are $100+\frac{v^2}{50}$ dollars per hour at $v$ km/h. Find the cheapest speed.`, recap: "Total = (400/v) × hourly cost.", ans: S`$v=\sqrt{5000}\approx70.7$ km/h; about 1131 dollars` },
  { level: 3, space: 5, q: S`Find the largest volume of a cone inscribed in a sphere of radius 3.`, recap: "r² = h(6 − h).", ans: S`$h=4$, $r^2=8$, volume $\frac{32\pi}{3}\approx33.5$` },
  { level: 3, space: 5, q: S`Find the point on the line $y=2x+1$ closest to $(3,0)$.`, recap: "Minimize the squared distance.", ans: S`$(0.2,1.4)$, at distance $\sqrt{9.8}\approx3.13$` },
];

export const WS = {
  code: "3.6",
  title: "Optimization Problems",
  bigideas: S`To optimize: draw a diagram and name variables; write the objective function; use the constraint to express it in one variable; state the domain; find the critical numbers; justify the absolute maximum or minimum by comparing endpoint values or using a derivative test; and answer the question in words with units. Minimizing a squared distance is easier and gives the same point.`,
  goals: ["Model with one variable.", "Use constraints.", "State realistic domains.", "Justify and interpret the optimum."],
  curriculum: "B2.4, B2.5",
  vocab: [["Objective function", "the quantity to optimize"], ["Constraint", "condition linking variables"], ["Domain", "realistic values"]],
  hook: S`With 40 m of fence, which encloses more: a 15 by 5 rectangle, a 12 by 8 one, or a 10 by 10 square? Is there anything better?`,
  concepts: [
    ["1. Model, then optimize", S`Garden against a wall: $L(y)=2y+\frac{50}{y}$ has its minimum at $y=5$:
${F({ view: { xmin: 0, xmax: 15, ymin: 0, ymax: 40 }, curves: [{ f: (y) => 2 * y + 50 / y, a: 1.5, b: 15 }], points: [pt(5, 20)], step: { x: 1, y: 5 } })}`],
    ["2. Domain first", S`Lengths and prices are non-negative; constraints may give upper bounds.`],
    ["3. Justify", S`Compare endpoints, or use the first or second derivative test.`],
  ],
  tips: ["One variable before differentiating.", "Write the domain.", "Reject critical numbers outside it.", "Justify the extremum.", "Answer the question asked, with units."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
