// MPM2D Worksheet 5.5 — Quadratic Word Problems (teacher edition)
import { F, fenceT, frameT, rectT } from "./figT.mjs";

const ex4 = [(24.5 - Math.sqrt(24.5 ** 2 - 4 * 4.9 * 19)) / 9.8, (24.5 + Math.sqrt(24.5 ** 2 - 4 * 4.9 * 19)) / 9.8];
const EXAMPLES = [
  { title: "Maximum height", q: String.raw`A rocket's height is $h=-5t^2+40t+2$ (m, s). Find its maximum height.`,
    fig: F({ view: { xmin: -0.5, xmax: 8.5, ymin: -5, ymax: 90 }, curves: [{ f: (t) => -5 * t * t + 40 * t + 2, a: 0, b: 8.05, color: "blue" }], points: [{ x: 4, y: 82, label: "(4, 82)", color: "red" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 1, y: 10 } }),
    steps: [String.raw`Axis $t=\frac{-40}{2(-5)}=4$.`, String.raw`$h=-80+160+2=82$.`], ans: String.raw`$82$ m after $4$ s` },
  { title: "Landing time", q: String.raw`A stone's height is $h=-5t^2+10t+40$. When does it land?`,
    steps: [String.raw`$-5(t^2-2t-8)=0\Rightarrow(t-4)(t+2)=0$.`, String.raw`Reject $t=-2$.`], ans: String.raw`after $4$ s` },
  { title: "Above a height", q: String.raw`A ball's height is $h=-5t^2+30t$. For how long is it above $40$ m?`,
    fig: F({ view: { xmin: -0.5, xmax: 6.5, ymin: -4, ymax: 50 }, curves: [{ f: (t) => -5 * t * t + 30 * t, a: 0, b: 6, color: "blue" }], lines: [{ m: 0, b: 40, color: "red", dash: true, label: "h = 40" }], points: [{ x: 2, y: 40, label: "2 s", color: "red" }, { x: 4, y: 40, label: "4 s", color: "red" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 1, y: 5 } }),
    steps: [String.raw`$-5t^2+30t=40\Rightarrow t^2-6t+8=0$.`, String.raw`$t=2$ or $t=4$: above for $2<t<4$.`], ans: String.raw`$2$ s` },
  { title: "Above a height (decimals)", q: String.raw`For $h=-4.9t^2+24.5t+1$, between which times is the ball above $20$ m?`,
    fig: F({ view: { xmin: -0.5, xmax: 5.5, ymin: -3, ymax: 34 }, curves: [{ f: (t) => -4.9 * t * t + 24.5 * t + 1, a: 0, b: 5.04, color: "blue" }], lines: [{ m: 0, b: 20, color: "red", dash: true, label: "h = 20" }], points: ex4.map((t) => ({ x: t, y: 20, color: "red" })), xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 5 } }),
    steps: [String.raw`$-4.9t^2+24.5t-19=0$: $D=600.25-372.4=227.85$.`, String.raw`$t=\frac{-24.5\pm\sqrt{227.85}}{-9.8}\approx0.96$ or $4.04$.`], ans: String.raw`from about $0.96$ s to $4.04$ s (about $3.08$ s)` },
  { title: "Maximum area, four sides", q: String.raw`What is the largest rectangle you can enclose with $100$ m of fencing?`,
    steps: [String.raw`$A=w(50-w)$: zeros $0$, $50$; vertex $w=25$.`, String.raw`$A=25\times25=625$.`], ans: String.raw`$625$ m$^2$ (a $25$ m square)` },
  { title: "Maximum area, three sides", q: String.raw`A pen along a river uses $120$ m of fencing on three sides. Find the maximum area.`,
    fig: fenceT("w", "120 − 2w"),
    steps: [String.raw`$A=w(120-2w)$: zeros $0$, $60$; vertex $w=30$.`, String.raw`$A=30(60)=1800$.`], ans: String.raw`$1800$ m$^2$ ($30$ m by $60$ m)` },
  { title: "Maximum revenue", q: String.raw`At $20$ dollars a T-shirt sells $300$ units. Each $1$ dollar increase sells $10$ fewer. Find the best price.`,
    fig: F({ view: { xmin: -22, xmax: 32, ymin: -500, ymax: 7000 }, curves: [{ f: (x) => (20 + x) * (300 - 10 * x), a: -20, b: 30, color: "violet" }], points: [{ x: 5, y: 6250, label: "(5, 6250)", color: "blue" }, { x: -20, y: 0, color: "red" }, { x: 30, y: 0, color: "red" }], xlabel: "x", ylabel: "R", step: { x: 5, y: 1000 } }),
    steps: [String.raw`$R=(20+x)(300-10x)$: zeros $-20$, $30$; vertex $x=5$.`, String.raw`$R=25\times250=6250$.`], ans: String.raw`$25$ dollars; revenue $6250$ dollars` },
  { title: "A path around a garden", q: String.raw`A $10$ m by $6$ m garden has a path of uniform width around it. Garden and path cover $96$ m$^2$. How wide is the path?`,
    fig: frameT("10 m", "6 m", "x", "garden"),
    steps: [String.raw`$(10+2x)(6+2x)=96\Rightarrow4x^2+32x-36=0$.`, String.raw`$x^2+8x-9=0\Rightarrow(x+9)(x-1)=0$.`], ans: String.raw`$1$ m` },
  { title: "Consecutive even integers", q: String.raw`The product of two consecutive even integers is $168$. Find them.`,
    steps: [String.raw`$n(n+2)=168\Rightarrow n^2+2n-168=0$.`, String.raw`$(n+14)(n-12)=0$.`], ans: String.raw`$12$ and $14$, or $-14$ and $-12$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`A ball's height is $h=-5(t-3)^2+50$. State its maximum height and when it occurs.`, recap: "Vertex form.", ans: String.raw`$50$ m at $3$ s` },
  { level: 1, q: String.raw`Find the maximum height of $h=-5t^2+20t+3$.`, recap: "Vertex.", ans: String.raw`$23$ m (at $t=2$)` },
  { level: 1, q: String.raw`What is the greatest area of a rectangle with perimeter $24$ m?`, recap: "Square.", ans: String.raw`$36$ m$^2$` },
  { level: 2, q: String.raw`When does $h=-5t^2+25t$ return to the ground?`, recap: "Zero.", ans: String.raw`$5$ s` },
  { level: 2, q: String.raw`When does $h=-5t^2+20t+60$ hit the ground?`, recap: "Zero.", ans: String.raw`$(t-6)(t+2)=0$: $6$ s` },
  { level: 2, q: String.raw`For $h=-5t^2+40t$, between which times is the height at least $75$ m? For how long?`, recap: "Interval.", ans: String.raw`$t^2-8t+15=0$: from $3$ s to $5$ s, $2$ s` },
  { level: 2, q: String.raw`A pen against a wall uses $60$ m of fencing on three sides. Find the maximum area.`, recap: "Wall pen.", ans: String.raw`$w=15$: $450$ m$^2$ ($15$ m by $30$ m)`, fig: fenceT("w", "60 − 2w", "wall") },
  { level: 2, q: String.raw`A theatre sells $400$ tickets at $8$ dollars. Each $0.50$ dollar increase sells $20$ fewer. Find the price for maximum revenue.`, recap: "Revenue.", ans: String.raw`$R=(8+0.5x)(400-20x)$, $x=2$: $9$ dollars, $3240$ dollars` },
  { level: 3, space: 5, q: String.raw`A ball's height is $h=-4.9t^2+19.6t+1.5$. For how long is it above $10$ m (to two decimals)?`, recap: "Interval with decimals.", ans: String.raw`$t\approx0.49$ to $3.51$: about $3.01$ s` },
  { level: 3, space: 5, q: String.raw`A farmer uses $300$ m of fencing to enclose a rectangle and divide it into two pens with a fence parallel to the width. Find the maximum total area.`, recap: "Two pens.", ans: String.raw`$3w+2l=300$, $A=w(150-1.5w)$, $w=50$, $l=75$: $3750$ m$^2$`, fig: rectT("l", "w", "two pens (one divider, length w)") },
  { level: 3, space: 5, q: String.raw`A bus tour costs $30$ dollars and $40$ people go. Each $1$ dollar decrease brings $2$ more people. What price maximizes revenue?`, recap: "Price decrease.", ans: String.raw`$R=(30-x)(40+2x)$, $x=5$: $25$ dollars, $50$ people, $1250$ dollars` },
  { level: 3, space: 5, q: String.raw`A rectangle's length is twice its width. If each dimension grows by $3$ cm, the area is $104$ cm$^2$. Find the original dimensions.`, recap: "Growing rectangle.", ans: String.raw`$(w+3)(2w+3)=104\Rightarrow2w^2+9w-95=0$: $5$ cm by $10$ cm`, fig: rectT("2w + 3", "w + 3", "area 104 cm²") },
  { level: 3, space: 5, q: String.raw`For $h=-5t^2+30t+1$, is the ball ever above $46$ m? Explain using the discriminant.`, recap: "Touches the height.", ans: String.raw`$-5t^2+30t-45=0$: $D=0$, it reaches $46$ m only at $t=3$, never above` },
];

export const WS = {
  code: "5.5",
  title: "Quadratic Word Problems",
  bigideas: String.raw`Every question about a quadratic model is one of three kinds: a maximum or minimum (the vertex), a zero (solve $=0$), or a given value (solve $=H$). For a parabola opening down, the quantity is above $H$ between the two roots, and the time above is their difference. Define the variable with units, reject roots that do not fit, and answer in a sentence.`,
  goals: ["Identify vertex, zero and given-value questions.", "Solve height, area and revenue problems.", "Answer interval questions.", "Interpret and reject roots."],
  curriculum: "QR4",
  vocab: [["Model", "an equation describing a situation"], ["Interval", "the times between two roots"], ["Revenue", "price × quantity sold"]],
  hook: String.raw`Throw a soft ball and ask three questions: How high? When does it land? When is it higher than the top of the door? Ask which part of the parabola answers each.`,
  concepts: [
    ["1. Three questions", String.raw`Vertex for max/min; $=0$ for landing; $=H$ for a height.
${F({ view: { xmin: -0.5, xmax: 6.5, ymin: -4, ymax: 50 }, curves: [{ f: (t) => -5 * t * t + 30 * t + 2, a: 0, b: 6.06, color: "blue" }], lines: [{ m: 0, b: 30, color: "red", dash: true }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 1, y: 5 } })}`],
    ["2. Area and revenue", String.raw`Write the area or revenue as a product; its zeros give the axis halfway between them.`],
    ["3. Interpret", String.raw`Reject negative times and lengths; round sensibly; include units.`],
  ],
  tips: ["Define the variable with units.", "Vertex x answers ‘when/what width’; vertex y ‘how high/how much’.", "Above H: between the roots.", "Reject impossible roots.", "Round at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
