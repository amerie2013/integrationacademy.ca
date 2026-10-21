// IB AA SL Worksheet 5.5 — Optimisation (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Numbers", q: "Two positive numbers have sum 20. Find the largest value of the product of one with the cube of the other.",
    steps: [S`$P=x^3(20-x)$; $P'=60x^2-4x^3=4x^2(15-x)$.`, S`$x=15$: $P=3375\times5$.`], ans: "16 875" },
  { title: "Open box", q: "Squares of side x are cut from the corners of an 18 cm square sheet. Find the maximum volume.",
    fig: F({ view: { xmin: -0.3, xmax: 9.3, ymin: -20, ymax: 480 }, curves: [{ f: (x) => x * (18 - 2 * x) ** 2, a: 0, b: 9 }], points: [pt(3, 432, null, "red")], step: { x: 1, y: 50 } }),
    steps: [S`$V=x(18-2x)^2$, $V'=(18-2x)(18-6x)$.`, S`$x=3$; $V=3\times144$.`], ans: "432 cm³" },
  { title: "Fence", q: "A rectangular field is split into two by a fence parallel to one side. 600 m of fencing is used in total. Find the maximum area.",
    steps: [S`$3x+2y=600$: $A=x(300-1.5x)$.`, S`$A'=300-3x=0\Rightarrow x=100$.`], ans: "15 000 m²" },
  { title: "Minimum surface", q: S`A closed box with a square base has volume 216 cm³. Find the minimum surface area.`,
    steps: [S`$A=2x^2+\frac{864}{x}$; $A'=4x-\frac{864}{x^2}=0\Rightarrow x=6$.`, S`$A''>0$; $A=72+144$.`], ans: "216 cm² (a 6 cm cube)" },
  { title: "Endpoints", q: S`Find the global maximum and minimum of $f(x)=2x^3-3x^2-12x$ on $-2\le x\le4$.`,
    fig: F({ view: { xmin: -2.5, xmax: 4.5, ymin: -24, ymax: 36 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x - 12 * x, a: -2, b: 4 }], points: [pt(-1, 7), pt(2, -20), pt(4, 32, null, "red"), pt(-2, -4)], step: { x: 1, y: 4 } }),
    steps: [S`Stationary at $x=-1$ ($7$) and $x=2$ ($-20$).`, S`Ends: $f(-2)=-4$, $f(4)=32$.`], ans: "max 32 (x = 4); min −20 (x = 2)" },
  { title: "Profit", q: S`Profit is $P=-x^3+12x^2+60x-100$ for $0\le x\le15$. Find the maximum profit.`,
    steps: [S`$P'=-3x^2+24x+60=-3(x-10)(x+2)$.`, S`$x=10$: $-1000+1200+600-100$.`], ans: "700" },
  { title: "Cylinder", q: S`An open cylinder (no lid) has volume $64\pi$ cm³. Find the radius for least surface area.`,
    steps: [S`$A=\pi r^2+2\pi rh=\pi r^2+\frac{128\pi}{r}$.`, S`$A'=2\pi r-\frac{128\pi}{r^2}=0\Rightarrow r^3=64$.`], ans: "r = 4 cm" },
  { title: "Closest point", q: S`Find the x-coordinate of the point on $y=x^2$ closest to $(4,0.5)$.`,
    steps: [S`Distance² $D=(x-4)^2+(x^2-0.5)^2$.`, S`$D'=2(x-4)+4x(x^2-0.5)=4x^3-8=0\Rightarrow x=\sqrt[3]2$; $D'$ changes from − to +.`], ans: S`$x=\sqrt[3]{2}\approx1.26$` },
  { title: "Time minimum", q: S`The cost of a trip at speed $v$ km/h is $C=\frac{3600}{v}+0.25v^2$ dollars. Find the cheapest speed.`,
    steps: [S`$C'=-\frac{3600}{v^2}+0.5v=0\Rightarrow v^3=7200$.`], ans: S`$v\approx19.3$ km/h` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the maximum value of $A=40x-2x^2$.`, recap: "Maximum.", ans: "200" },
  { level: 1, q: "Two numbers have sum 30. Find their maximum product using calculus.", recap: "Product.", ans: "225" },
  { level: 1, q: S`Find the minimum value of $C=x^2-14x+60$.`, recap: "Minimum.", ans: "11" },
  { level: 2, q: "A rectangle has perimeter 36 cm. Use calculus to find its maximum area.", recap: "Area.", ans: "81 cm²" },
  { level: 2, q: "An open box is made from a 24 cm square sheet by cutting squares from the corners. Find the maximum volume.", recap: "Box.", ans: "1024 cm³" },
  { level: 2, q: S`Find the global maximum of $f(x)=x^3-3x$ on $-2\le x\le3$.`, recap: "Endpoints.", ans: "18 (at x = 3)" },
  { level: 2, q: S`The product of two positive numbers is 64. Find the least possible sum.`, recap: "Sum.", ans: "16" },
  { level: 2, q: S`Profit $P=-2x^2+36x-50$. Find the number of items for maximum profit.`, recap: "Profit.", ans: "9" },
  { level: 3, space: 5, q: "A closed cylinder has surface area 150π cm². Find the radius that gives the maximum volume, and the maximum volume.", recap: "Fixed area.", ans: S`$r=5$; $V=250\pi$`,
    fig: F({ view: { xmin: -0.3, xmax: 9, ymin: -50, ymax: 900 }, curves: [{ f: (r) => Math.PI * r * (75 - r * r), a: 0, b: 8.66 }], step: { x: 1, y: 100 } }) },
  { level: 3, space: 4, q: S`A rectangle has two corners on the x-axis and two on $y=9-x^2$. Find its maximum area.`, recap: "Inscribed rectangle.", ans: S`$x=\sqrt3$: $12\sqrt3\approx20.8$` },
  { level: 3, space: 4, q: "A 1 m wire is bent into a rectangle with sides x and 0.5 − x. For what x is the diagonal shortest?", recap: "Minimise D².", ans: "x = 0.25 (a square)" },
  { level: 3, space: 4, q: S`Find the point on $y=\sqrt{x}$ closest to $(5,0)$.`, recap: "Closest point.", ans: S`$(4.5,\sqrt{4.5})$` },
  { level: 3, space: 4, q: S`A box with a square base and no lid has surface area 300 cm². Find the maximum volume.`, recap: "Fixed area.", ans: S`$x=10$: 500 cm³` },
];

export const WS = {
  code: "5.5",
  title: "Optimisation",
  bigideas: S`Write the quantity to optimise as a function of one variable (use the constraint to eliminate the other), state the domain, solve $f'(x)=0$, justify the maximum or minimum ($f''$, sign table, or endpoint values), and answer in context. On a closed interval compare stationary values with the endpoints.`,
  goals: ["Build one-variable models.", "Find and justify optimal values.", "Check endpoints.", "Interpret in context."],
  curriculum: "SL 5.8",
  vocab: [["Objective", "quantity to optimise"], ["Constraint", "equation linking variables"], ["Global maximum", "largest value on the domain"]],
  hook: "Give each group an A4 sheet and scissors: who can make the open box with the largest volume? Record x and V, then compare with calculus.",
  concepts: [
    ["1. The model", S`${F({ view: { xmin: -0.3, xmax: 9.3, ymin: -20, ymax: 480 }, curves: [{ f: (x) => x * (18 - 2 * x) ** 2, a: 0, b: 9 }], step: { x: 1, y: 50 } }, 5)} One variable, a domain.`],
    ["2. Solve f′ = 0", "Reject stationary points outside the domain."],
    ["3. Justify and answer", "f″ or endpoints; give the value asked for, with units."],
  ],
  tips: ["Draw a diagram.", "Use the constraint.", "State the domain.", "Justify max/min.", "Answer the actual question."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
