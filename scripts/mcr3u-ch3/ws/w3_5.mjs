// MCR3U Worksheet 3.5 — Solving Quadratic Equations (teacher edition)
import { F, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Factoring", q: String.raw`Solve $2x^2+5x-12=0$.`, steps: [String.raw`$(2x-3)(x+4)=0$.`], ans: String.raw`$x=1.5$ or $x=-4$` },
  { title: "Exact roots", q: String.raw`Solve $x^2-6x+4=0$.`, steps: [String.raw`$x=\frac{6\pm\sqrt{36-16}}{2}=\frac{6\pm2\sqrt5}{2}$.`], ans: String.raw`$x=3\pm\sqrt5$` },
  { title: "A double root", q: String.raw`Solve $4x^2-20x+25=0$.`, steps: [String.raw`$(2x-5)^2=0$.`], ans: String.raw`$x=2.5$` },
  { title: "Rounded roots", q: String.raw`Solve $3x^2+x-5=0$ to two decimals.`, steps: [String.raw`$x=\frac{-1\pm\sqrt{1+60}}{6}=\frac{-1\pm\sqrt{61}}{6}$.`], ans: String.raw`$x\approx1.14$ or $-1.47$` },
  { title: "Rearrange first", q: String.raw`Solve $(x-2)(x+3)=14$.`, steps: [String.raw`$x^2+x-6-14=0\Rightarrow x^2+x-20=0\Rightarrow(x+5)(x-4)=0$.`], ans: String.raw`$x=4$ or $x=-5$` },
  { title: "When does it land?", q: String.raw`$h(t)=-4.9t^2+24.5t+1.2$. When does the ball land?`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 34 }, curves: [{ f: (t) => -4.9 * t * t + 24.5 * t + 1.2, a: 0 }], points: [pt(5.05, 0)], step: { x: 1, y: 5 } }),
    steps: [String.raw`$t=\frac{-24.5-\sqrt{600.25+23.52}}{-9.8}=\frac{24.5+\sqrt{623.77}}{9.8}$.`], ans: String.raw`$t\approx5.05$ s (reject the negative root)` },
  { title: "Perimeter and area", q: "A rectangle has perimeter 34 m and area 60 m². Find its dimensions.",
    steps: [String.raw`$w(17-w)=60\Rightarrow w^2-17w+60=0\Rightarrow(w-5)(w-12)=0$.`], ans: "5 m by 12 m" },
  { title: "Break-even", q: String.raw`$P(x)=-x^2+18x-45$. Find the break-even points.`, steps: [String.raw`$x^2-18x+45=0\Rightarrow(x-3)(x-15)=0$.`], ans: "x = 3 and x = 15" },
  { title: "A right triangle", q: "The legs of a right triangle differ by 7 cm and the hypotenuse is 13 cm. Find the legs.",
    steps: [String.raw`$x^2+(x+7)^2=169\Rightarrow2x^2+14x-120=0\Rightarrow x^2+7x-60=0$.`, String.raw`$(x+12)(x-5)=0$.`], ans: "5 cm and 12 cm" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve $x^2+3x-28=0$.`, recap: "Factor.", ans: String.raw`$4$, $-7$` },
  { level: 1, q: String.raw`Solve $3x^2-12=0$.`, recap: "No x term.", ans: String.raw`$\pm2$` },
  { level: 1, q: String.raw`Solve $x^2-2x-5=0$ exactly.`, recap: "Formula.", ans: String.raw`$1\pm\sqrt6$` },
  { level: 2, q: String.raw`Solve $6x^2-x-2=0$.`, recap: "a ≠ 1.", ans: String.raw`$\tfrac23$, $-\tfrac12$` },
  { level: 2, q: String.raw`Solve $2x^2+3x-7=0$ to two decimals.`, recap: "Rounded.", ans: String.raw`$1.27$, $-2.77$` },
  { level: 2, q: String.raw`Solve $x(x+4)=3(x+2)$.`, recap: "Rearrange.", ans: String.raw`$2$, $-3$` },
  { level: 2, q: String.raw`$h(t)=-5t^2+15t+20$. When does the object land?`, recap: "Landing.", ans: "4 s" },
  { level: 2, q: "A rectangle's length is 1 m less than twice its width; its area is 45 m². Find its dimensions.", recap: "Area.", ans: "5 m by 9 m" },
  { level: 3, space: 5, q: "A 20 cm by 15 cm photo has a frame of uniform width whose area equals the photo's area. How wide is the frame?", recap: "Frame.", ans: "about 3.56 cm" },
  { level: 3, space: 5, q: String.raw`$h(t)=-4.9t^2+19.6t+2$. For how long is the ball above 15 m?`, recap: "Time above.", ans: "about 2.32 s (0.84 s to 3.16 s)",
    fig: F({ view: { xmin: 0, xmax: 4.5, ymin: 0, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 2, a: 0 }], lines: [{ m: 0, b: 15, color: "amber", dash: true }], step: { x: 0.5, y: 2 } }) },
  { level: 3, space: 4, q: String.raw`Solve $5x^2-4x-2=0$ exactly in simplest form.`, recap: "Simplify radicals.", ans: String.raw`$\frac{2\pm\sqrt{14}}{5}$` },
  { level: 3, space: 4, q: String.raw`For which $n$ is $1+2+\dots+n=\frac{n(n+1)}{2}=210$?`, recap: "Triangular numbers.", ans: "n = 20" },
  { level: 3, space: 5, q: String.raw`$P(x)=-2x^2+32x-78$ (thousand dollars). For which $x$ is the profit at least 40 thousand?`, recap: "Profit interval.", ans: String.raw`$8-\sqrt5\le x\le8+\sqrt5$ ($5.76$ to $10.24$)` },
];

export const WS = {
  code: "3.5",
  title: "Solving Quadratic Equations",
  bigideas: String.raw`Write the equation as $ax^2+bx+c=0$, then factor or use $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$. Give exact answers with simplified radicals unless a measurement is asked for. In models, interpret both roots and reject any outside the context.`,
  goals: ["Solve by factoring.", "Use the formula exactly and approximately.", "Rearrange first.", "Interpret roots in context."],
  curriculum: "A2.3, A3.2",
  vocab: [["Root", "solution of $f(x)=0$"], ["Exact form", "radicals kept"], ["Inadmissible root", "outside the context"]],
  hook: "Throw a ball (or show a video). Ask: when is it 2 m high? Students should predict two answers before solving.",
  concepts: [
    ["1. Factor or formula", String.raw`Factor when it is quick; the formula always works.`],
    ["2. Exact answers", String.raw`$\frac{4\pm\sqrt{44}}{2}=\frac{4\pm2\sqrt{11}}{2}=2\pm\sqrt{11}$.`],
    ["3. Models", String.raw`${F({ view: { xmin: 0, xmax: 4.5, ymin: 0, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 2, a: 0 }], lines: [{ m: 0, b: 15, color: "amber", dash: true }], step: { x: 0.5, y: 2 } }, 5, "two times at the same height")}`],
  ],
  tips: ["= 0 before factoring.", "Divide the whole numerator by 2a.", "Simplify radicals fully.", "Reject negative times and lengths.", "Round only at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
