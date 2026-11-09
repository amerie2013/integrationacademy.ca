// MCF3M Worksheet 3.4 — Solving Problems with Quadratic Equations (teacher edition)
import { F, pt, svgT } from "../../ws/figT.mjs";
import { areaBox } from "../../figs.mjs";
const S = String.raw;
const B = (cols, rows, cells, t) => svgT(areaBox(cols, rows, cells, t), 5.2);

const EXAMPLES = [
  { title: "Rectangle dimensions", q: S`A rectangle's length is $5$ cm more than its width; its area is $84$ cm$^2$. Find the dimensions.`,
    fig: B(["w", "+5"], ["w"], [["w²", "5w"]], "w(w + 5) = 84"),
    steps: [S`\textbf{Let} $w$ be the width (cm); length $w+5$.`, S`$w(w+5)=84\Rightarrow w^2+5w-84=0\Rightarrow(w+12)(w-7)=0$.`, S`Reject $-12$: $w=7$, length $12$. \textbf{Check:} $7\times12=84$ \checkmark`],
    ans: S`$7$ cm by $12$ cm` },
  { title: "Border", q: S`A $20$ m by $14$ m field has a running track of uniform width around it; together they cover $520$ m$^2$. Find the track width.`,
    fig: B(["20", "+2x"], ["14", "+2x"], [["280", "28x"], ["40x", "4x²"]], "(20 + 2x)(14 + 2x) = 520"),
    steps: [S`$(20+2x)(14+2x)=520\Rightarrow4x^2+68x+280=520$.`, S`$4x^2+68x-240=0\Rightarrow x^2+17x-60=0\Rightarrow(x+20)(x-3)=0$.`, S`$x=3$ m. \textbf{Check:} $26\times20=520$ \checkmark`],
    ans: S`$3$ m` },
  { title: "Consecutive integers", q: S`The product of two consecutive even integers is $224$. Find them.`,
    fig: F({ view: { xmin: -18, xmax: 16, ymin: -240, ymax: 60 }, curves: [{ f: (n) => n * n + 2 * n - 224, color: "violet" }], points: [pt(14, 0, null, "amber"), pt(-16, 0, null, "amber")], step: { x: 2, y: 40 } }),
    steps: [S`$n(n+2)=224\Rightarrow n^2+2n-224=0$.`, S`$(n+16)(n-14)=0$.`, S`$14,16$ or $-16,-14$. \textbf{Check:} $14\times16=224$ \checkmark`],
    ans: S`$14$ and $16$, or $-16$ and $-14$` },
  { title: "Time to land", q: S`A stone is thrown from a $30$ m cliff: $h(t)=-5t^2+5t+30$. When does it land?`,
    fig: F({ view: { xmin: -0.5, xmax: 3.5, ymin: -2, ymax: 34 }, curves: [{ f: (t) => -5 * t * t + 5 * t + 30, a: 0, b: 3, color: "violet" }], points: [pt(3, 0, null, "amber"), pt(0, 30)], step: { x: 0.5, y: 5 } }),
    steps: [S`$-5t^2+5t+30=0\Rightarrow t^2-t-6=0\Rightarrow(t-3)(t+2)=0$.`, S`Reject $t=-2$: lands at $t=3$ s.`, S`\textbf{Check:} $-45+15+30=0$ \checkmark`],
    ans: S`$3$ s` },
  { title: "Time interval", q: S`$h(t)=-5t^2+35t$. When is the object above $50$ m?`,
    fig: F({ view: { xmin: -0.5, xmax: 8, ymin: -2, ymax: 65 }, curves: [{ f: (t) => -5 * t * t + 35 * t, a: 0, b: 7, color: "violet" }], lines: [{ m: 0, b: 50, color: "green", dash: true }], points: [pt(2, 50, null, "amber"), pt(5, 50, null, "amber")], step: { x: 1, y: 10 } }),
    steps: [S`$-5t^2+35t=50\Rightarrow t^2-7t+10=0\Rightarrow(t-2)(t-5)=0$.`, S`Above $50$ m for $2<t<5$: $3$ seconds.`, S`\textbf{Check:} $h(3)=-45+105=60>50$ \checkmark`],
    ans: S`$2<t<5$` },
  { title: "Revenue target", q: S`A café sells $200-10x$ lunches at $(8+x)$ dollars after $x$ one-dollar increases. Find $x$ for a revenue of $1920$ dollars.`,
    fig: F({ view: { xmin: -1, xmax: 21, ymin: -100, ymax: 2400 }, curves: [{ f: (x) => (8 + x) * (200 - 10 * x), a: 0, b: 20, color: "violet" }], lines: [{ m: 0, b: 1920, color: "green", dash: true }], points: [pt(4, 1920, null, "amber"), pt(8, 1920, null, "amber")], step: { x: 2, y: 400 } }),
    steps: [S`$(8+x)(200-10x)=1920\Rightarrow1600+120x-10x^2=1920$.`, S`$-10x^2+120x-320=0\Rightarrow x^2-12x+32=0\Rightarrow(x-4)(x-8)=0$.`, S`$x=4$ (price $12$ dollars) or $x=8$ (price $16$ dollars). Both work.`],
    ans: S`$x=4$ or $x=8$` },
  { title: "Right triangle", q: S`A right triangle has legs $x$ and $x+2$ and hypotenuse $10$. Find the legs.`,
    fig: F({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 9 }, segs: [{ pts: [[0, 0], [6, 0], [0, 8], [0, 0]], color: "violet" }], bare: true }),
    steps: [S`$x^2+(x+2)^2=100\Rightarrow2x^2+4x-96=0\Rightarrow x^2+2x-48=0$.`, S`$(x+8)(x-6)=0\Rightarrow x=6$.`, S`Legs $6$ and $8$. \textbf{Check:} $36+64=100$ \checkmark`],
    ans: S`$6$ and $8$` },
  { title: "Pen against a wall", q: S`A pen uses $40$ m of fencing on three sides against a wall and has area $150$ m$^2$. Find its dimensions.`,
    fig: F({ view: { xmin: 0, xmax: 21, ymin: -10, ymax: 220 }, curves: [{ f: (x) => x * (40 - 2 * x), a: 0, b: 20, color: "violet" }], lines: [{ m: 0, b: 150, color: "green", dash: true }], points: [pt(5, 150, null, "amber"), pt(15, 150, null, "amber")], step: { x: 2, y: 25 } }),
    steps: [S`$x(40-2x)=150\Rightarrow x^2-20x+75=0\Rightarrow(x-5)(x-15)=0$.`, S`$x=5$: $5\times30$; $x=15$: $15\times10$.`, S`Both give $150$ m$^2$ \checkmark`],
    ans: S`$5\times30$ m or $15\times10$ m` },
  { title: "Impossible target", q: S`Can a rectangle with perimeter $20$ m have area $30$ m$^2$?`,
    fig: F({ view: { xmin: -1, xmax: 11, ymin: -2, ymax: 32 }, curves: [{ f: (x) => x * (10 - x), a: 0, b: 10, color: "violet" }], lines: [{ m: 0, b: 30, color: "red", dash: true }], points: [pt(5, 25, null, "amber")], step: { x: 1, y: 5 } }),
    steps: [S`$x(10-x)=30\Rightarrow x^2-10x+30=0$.`, S`No integer pair works; the graph's maximum is $25$ at $x=5$.`, S`So the area $30$ is impossible.`],
    ans: S`no: the maximum area is $25$ m$^2$` },
];

const PROBLEMS = [
  { level: 1, q: S`A rectangle's length is $3$ m more than its width; its area is $40$ m$^2$. Find the width.`, ans: S`$5$ m` },
  { level: 1, q: S`Two consecutive integers have product $90$. Find both pairs.`, ans: S`$9,10$ or $-10,-9$` },
  { level: 1, q: S`$h(t)=-5t^2+20t$. When does the object land?`, ans: S`$4$ s` },
  { level: 2, q: S`A $9$ cm by $5$ cm card has a border of width $x$; total area $77$ cm$^2$. Find $x$.`, ans: S`$1$ cm` },
  { level: 2, q: S`$h(t)=-5t^2+25t+30$. When does it land?`, ans: S`$6$ s` },
  { level: 2, q: S`$h(t)=-5t^2+30t$. When is it above $25$ m?`, ans: S`$1<t<5$` },
  { level: 2, q: S`A right triangle has legs $x$ and $x+7$ and hypotenuse $17$. Find the legs.`, ans: S`$8$, $15$` },
  { level: 2, q: S`The square of a number is $24$ more than twice the number. Find the number(s).`, ans: S`$6$ or $-4$` },
  { level: 3, space: 5, q: S`A $30$ m by $20$ m lawn has a path of uniform width cut inside its edge; the remaining lawn is $336$ m$^2$. Find the path width.`, ans: S`$(30-2x)(20-2x)=336$: $x=3$ m` },
  { level: 3, space: 5, q: S`A theatre sells $500-25x$ tickets at $(10+x)$ dollars. Find $x$ for revenue $5600$ dollars.`, ans: S`$x=4$ or $x=6$` },
  { level: 3, space: 5, q: S`A pen uses $60$ m of fencing on three sides against a wall; area $400$ m$^2$. Find all possible dimensions.`, fig: F({ view: { xmin: 0, xmax: 31, ymin: -20, ymax: 480 }, step: { x: 5, y: 50 } }), ans: S`$10\times40$ or $20\times20$` },
  { level: 3, space: 5, q: S`A rectangle has perimeter $46$ cm and diagonal $17$ cm. Find its sides.`, ans: S`$8$ and $15$` },
  { level: 3, space: 5, q: S`$h(t)=-5t^2+20t+3$. Show that the object never reaches $25$ m.`, ans: S`$t^2-4t+4.4=0$ has no real roots; max $23$ m` },
];

export const WS = {
  code: "3.4",
  title: "Solving Problems with Quadratic Equations",
  bigideas: S`Area, number, projectile, revenue and Pythagoras problems lead to quadratic equations. Define a variable, write the equation, rearrange to $0$, factor, solve, and then interpret: reject roots that do not fit the situation, and answer the question in words with units. Two roots of a height equation give the start and end of a time interval.`,
  goals: ["Model situations with quadratic equations.", "Solve by factoring.", "Reject inadmissible roots.", "Find time intervals and interpret answers."],
  curriculum: "A3.3, A1.4, A2.4",
  vocab: [["Let statement", "defines the variable"], ["Admissible", "makes sense in context"], ["Interval", "range of times"], ["Interpret", "explain the meaning"]],
  hook: S`A garden is $3$ m longer than wide and has area $70$ m$^2$. Guess and check the dimensions, then find them with an equation.`,
  concepts: [
    ["1. A routine", S`Define $\to$ model $\to$ rearrange $\to$ factor $\to$ solve $\to$ interpret $\to$ check in the story.`],
    ["2. Intervals", S`For a height $h(t)$ opening down, $h(t)>k$ between the two roots of $h(t)=k$.
${F({ view: { xmin: -0.5, xmax: 5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 4, color: "violet" }], lines: [{ m: 0, b: 15, color: "green", dash: true }], points: [pt(1, 15, null, "amber"), pt(3, 15, null, "amber")], step: { x: 1, y: 5 } }, 6, "Above 15 m between t = 1 and t = 3.")}`],
    ["3. No real roots", S`If the equation has no real roots, the situation is impossible (the target is beyond the maximum).`],
  ],
  tips: ["Require a let statement and a final sentence.", "Ask students to explain every rejected root.", "Draw a diagram for every area problem."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
