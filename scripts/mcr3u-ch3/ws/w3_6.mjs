// MCR3U Worksheet 3.6 — Linear–Quadratic Systems (teacher edition)
import { F, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Two points", q: String.raw`Solve $y=x^2-4x+1$ and $y=2x-7$.`,
    fig: F({ view: { xmin: -1, xmax: 6, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 1 }], lines: [{ m: 2, b: -7, color: "blue" }], points: [pt(2, -3), pt(4, 1)] }),
    steps: [String.raw`$x^2-6x+8=0\Rightarrow(x-2)(x-4)=0$.`, "y from the line."], ans: String.raw`$(2,-3)$, $(4,1)$` },
  { title: "Downward parabola", q: String.raw`Solve $y=-x^2+2x+8$ and $y=x+2$.`, steps: [String.raw`$-x^2+x+6=0\Rightarrow x^2-x-6=0$: $x=3,-2$.`], ans: String.raw`$(3,5)$, $(-2,0)$` },
  { title: "No intersection", q: String.raw`Do $y=x^2+3$ and $y=2x+1$ meet?`, steps: [String.raw`$x^2-2x+2=0$: $D=4-8<0$.`], ans: "no" },
  { title: "A tangent", q: String.raw`Find $k$ so that $y=2x+k$ is tangent to $y=x^2-2x+5$.`, steps: [String.raw`$x^2-4x+5-k=0$: $D=16-4(5-k)=4k-4=0$.`, String.raw`$k=1$; $x=2$, $y=5$.`], ans: String.raw`$k=1$ at $(2,5)$` },
  { title: "Lines of one slope", q: String.raw`For which $k$ does $y=3x+k$ meet $y=-x^2+5x$ twice, once, never?`, steps: [String.raw`$-x^2+2x-k=0$: $D=4-4k$.`], ans: String.raw`twice $k<1$; once $k=1$; never $k>1$` },
  { title: "a ≠ 1", q: String.raw`Solve $y=2x^2-3x+1$ and $y=x+7$.`, steps: [String.raw`$2x^2-4x-6=0\Rightarrow x^2-2x-3=0$: $x=3,-1$.`], ans: String.raw`$(3,10)$, $(-1,6)$` },
  { title: "Irrational intersections", q: String.raw`Solve $y=x^2-5$ and $y=-x+2$.`, steps: [String.raw`$x^2+x-7=0$: $x=\frac{-1\pm\sqrt{29}}{2}$.`], ans: String.raw`$x\approx2.19$ and $-3.19$` },
  { title: "A stone and a balloon", q: String.raw`Stone $h(t)=-5t^2+20t+1$, balloon $b(t)=3t+5$. When are they at the same height?`,
    steps: [String.raw`$5t^2-17t+4=0$: $t=\frac{17\pm\sqrt{209}}{10}$.`], ans: String.raw`$t\approx0.25$ s and $3.15$ s` },
  { title: "Break-even", q: String.raw`$R=-x^2+24x$, $C=6x+65$. Find the break-even points.`, steps: [String.raw`$x^2-18x+65=0\Rightarrow(x-5)(x-13)=0$.`], ans: "x = 5 and x = 13" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve $y=x^2-1$ and $y=x+1$.`, recap: "Solve.", ans: String.raw`$(2,3)$, $(-1,0)$` },
  { level: 1, q: String.raw`How many points do $y=x^2+2x+3$ and $y=2$ share?`, recap: "Count.", ans: "one" },
  { level: 1, q: String.raw`How many points do $y=-x^2$ and $y=x+5$ share?`, recap: "Count.", ans: "none" },
  { level: 2, q: String.raw`Solve $y=3x^2-2x-5$ and $y=4x+4$.`, recap: "a = 3.", ans: String.raw`$(3,16)$, $(-1,0)$` },
  { level: 2, q: String.raw`For which $k$ is $y=k$ tangent to $y=x^2+6x+10$?`, recap: "Horizontal tangent.", ans: "k = 1" },
  { level: 2, q: String.raw`For which $k>0$ is $y=kx$ tangent to $y=x^2+4$? Find the point.`, recap: "Tangent through origin.", ans: String.raw`$k=4$ at $(2,8)$` },
  { level: 2, q: String.raw`Solve $y=-2x^2+8x-3$ and $y=2x+1$.`, recap: "Downward.", ans: String.raw`$(1,3)$, $(2,5)$` },
  { level: 2, q: String.raw`$R=-2x^2+40x$, $C=10x+100$. Find the break-even quantities.`, recap: "Break-even.", ans: "5 and 10" },
  { level: 3, space: 5, q: String.raw`Find the lines through $(0,-8)$ that are tangent to $y=x^2+1$, and the points of contact.`, recap: "Two tangents.", ans: String.raw`$y=\pm6x-8$ at $(\pm3,10)$`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -9, ymax: 14 }, curves: [{ f: (x) => x * x + 1 }], points: [pt(0, -8)], step: { x: 1, y: 2 } }) },
  { level: 3, space: 4, q: String.raw`For which $k$ does $y=-x+k$ meet $y=x^2-3x$ twice, once, never?`, recap: "Parameter.", ans: String.raw`$D=4+4k$: twice $k>-1$, once $k=-1$, never $k<-1$` },
  { level: 3, space: 4, q: String.raw`Find the distance between the intersection points of $y=x^2-2x-3$ and $y=x+7$.`, recap: "Distance.", ans: String.raw`$(5,12)$, $(-2,5)$: $7\sqrt2\approx9.90$` },
  { level: 3, space: 5, q: String.raw`Tank A holds $3(t-15)^2$ L for $0\le t\le15$ min; tank B starts empty and fills at 45 L/min. When do they hold equal amounts?`, recap: "Two tanks.", ans: "t ≈ 5.73 min, about 258 L each" },
  { level: 3, space: 5, q: String.raw`Find $b$ and $c$ so that $y=x^2+bx+c$ is tangent to $y=2x$ at $(1,2)$.`, recap: "Build the tangent.", ans: String.raw`$x^2+(b-2)x+c=(x-1)^2$: $b=0$, $c=1$` },
];

export const WS = {
  code: "3.6",
  title: "Linear–Quadratic Systems",
  bigideas: String.raw`To find where a line meets a parabola, set the expressions equal and rearrange to $ax^2+bx+c=0$. The discriminant counts the intersections: two (secant), one (tangent) or none. Use the line to find y. Tangent conditions come from $D=0$.`,
  goals: ["Solve by substitution.", "Count intersections with D.", "Find tangent lines.", "Solve two-quantity problems."],
  curriculum: "A2.5",
  vocab: [["Secant", "meets twice"], ["Tangent", "meets once"], ["System", "equations solved together"]],
  hook: "Hold a ruler against a curved bowl: it can cut through, just touch, or miss. Ask how algebra could tell which.",
  concepts: [
    ["1. Method", String.raw`Set equal → standard form → $D$ → solve → y from the line.`],
    ["2. Three cases", String.raw`${F({ view: { xmin: -2, xmax: 10, ymin: -4, ymax: 20 }, curves: [{ f: (x) => x * (8 - x) }], lines: [{ m: 1, b: 12.25, color: "amber", dash: true }, { m: 1, b: 4, color: "blue" }, { m: 1, b: 16, color: "red" }], step: { x: 1, y: 2 } }, 5, "slope-1 lines: secant, tangent, none")}`],
    ["3. Contexts", "Equal heights, equal volumes, break-even: set the two models equal."],
  ],
  tips: ["Everything on one side first.", "Use the linear equation for y.", "D = 0 for tangency.", "Check the domain in a context.", "Two answers for k are common."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
