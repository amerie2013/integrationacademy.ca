// MPM2D Worksheet 5.4 — The Discriminant & the Number of Roots (teacher edition)
import { F, gridT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Two rational roots", q: String.raw`Find the discriminant of $x^2-6x+5=0$ and describe the roots.`,
    fig: F({ view: { xmin: -1, xmax: 7, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 6 * x + 5, color: "violet" }], points: [{ x: 1, y: 0, color: "green" }, { x: 5, y: 0, color: "green" }] }),
    steps: [String.raw`$D=36-20=16>0$.`, String.raw`$16$ is a perfect square: two rational roots.`], ans: "two rational roots" },
  { title: "Two irrational roots", q: String.raw`Describe the roots of $x^2+2x-4=0$.`,
    steps: [String.raw`$D=4+16=20>0$, not a perfect square.`], ans: "two irrational roots" },
  { title: "One root", q: String.raw`Describe the roots of $9x^2-12x+4=0$.`,
    fig: F({ view: { xmin: -1, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 9 * x * x - 12 * x + 4, color: "violet" }], points: [{ x: 2 / 3, y: 0, label: "vertex on the axis", color: "amber" }] }),
    steps: [String.raw`$D=144-144=0$.`, String.raw`One real root, $x=\frac{12}{18}=\frac23$.`], ans: String.raw`one real root, $x=\tfrac23$` },
  { title: "No real roots", q: String.raw`Describe the roots of $3x^2+x+2=0$.`,
    fig: F({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 3 * x * x + x + 2, color: "violet" }], step: { x: 1, y: 1 } }),
    steps: [String.raw`$D=1-24=-23<0$.`, String.raw`$\sqrt{-23}$ is not real: non-real roots.`], ans: "no real roots" },
  { title: "Counting x-intercepts", q: String.raw`How many x-intercepts does $y=-2x^2+3x+5$ have?`,
    fig: F({ view: { xmin: -3, xmax: 4, ymin: -6, ymax: 8 }, curves: [{ f: (x) => -2 * x * x + 3 * x + 5, color: "violet" }] }),
    steps: [String.raw`$D=9+40=49>0$.`], ans: "two" },
  { title: "k for one root", q: String.raw`Find $k$ so that $x^2+6x+k=0$ has exactly one root.`,
    steps: [String.raw`$D=36-4k=0$.`, String.raw`$k=9$; then $x^2+6x+9=(x+3)^2$.`], ans: String.raw`$k=9$` },
  { title: "k for two roots", q: String.raw`For which $k$ does $kx^2-4x+1=0$ have two real roots?`,
    steps: [String.raw`$D=16-4k>0\Rightarrow k<4$.`, String.raw`Also $k\ne0$, or the equation is not quadratic.`], ans: String.raw`$k<4$, $k\ne0$` },
  { title: "k for no real roots", q: String.raw`For which $k$ does $x^2+kx+9=0$ have no real roots?`,
    fig: F({ view: { xmin: -6, xmax: 6, ymin: -2, ymax: 16 }, curves: [{ f: (x) => x * x + 6 * x + 9, color: "amber" }, { f: (x) => x * x + 9, color: "red" }, { f: (x) => x * x - 6 * x + 9, color: "amber" }], step: { x: 1, y: 2 } }),
    steps: [String.raw`$D=k^2-36<0\Rightarrow k^2<36$.`, String.raw`$-6<k<6$ (the graph shows $k=\pm6$, tangent, and $k=0$).`], ans: String.raw`$-6<k<6$` },
  { title: "Can it reach the height?", q: String.raw`A ball's height is $h=-4.9t^2+14t+1$. Can it reach $12$ m?`,
    fig: F({ view: { xmin: -0.3, xmax: 3.2, ymin: -1, ymax: 14 }, curves: [{ f: (t) => -4.9 * t * t + 14 * t + 1, a: 0, b: 2.93, color: "blue" }], lines: [{ m: 0, b: 12, color: "red", dash: true, label: "h = 12" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 2 } }),
    steps: [String.raw`Solve $-4.9t^2+14t+1=12$: $-4.9t^2+14t-11=0$.`, String.raw`$D=196-215.6=-19.6<0$: no real roots.`, String.raw`(Its maximum is $11$ m at $t\approx1.43$ s.)`], ans: "no — it never reaches 12 m" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the discriminant of $2x^2-5x+1=0$.`, recap: "Compute D.", ans: "$17$" },
  { level: 1, q: String.raw`How many real roots does $x^2+4x+4=0$ have?`, recap: "D = 0.", ans: "one" },
  { level: 1, q: String.raw`How many real roots does $2x^2+x+3=0$ have?`, recap: "D < 0.", ans: String.raw`none ($D=-23$)` },
  { level: 2, q: String.raw`Describe the roots of $4x^2-20x+25=0$.`, recap: "Nature of roots.", ans: String.raw`$D=0$: one real root` },
  { level: 2, q: String.raw`Describe the roots of $x^2-3x-10=0$. Does it factor?`, recap: "Perfect-square D.", ans: String.raw`$D=49$: two rational roots; yes, $(x-5)(x+2)$` },
  { level: 2, q: String.raw`Describe the roots of $3x^2-2x-4=0$.`, recap: "Irrational roots.", ans: String.raw`$D=52$: two irrational roots` },
  { level: 2, q: String.raw`How many x-intercepts does $y=-x^2+2x-5$ have? Sketch it to confirm.`, recap: "x-intercepts.", ans: String.raw`$D=-16$: none; vertex $(1,-4)$, opens down`, fig: gridT({ xmin: -3, xmax: 5, ymin: -12, ymax: 2 }, { x: 1, y: 2 }) },
  { level: 2, q: String.raw`Find all values of $k$ for which $x^2-kx+4=0$ has exactly one root.`, recap: "k for one root.", ans: String.raw`$k^2-16=0$: $k=\pm4$` },
  { level: 3, space: 4.5, q: String.raw`For which values of $k$ does $2x^2+3x+k=0$ have two real roots?`, recap: "k for two roots.", ans: String.raw`$9-8k>0$: $k<\tfrac98$` },
  { level: 3, space: 5, q: String.raw`Find $c$ so that the vertex of $y=x^2-4x+c$ lies on the x-axis. Sketch the parabola.`, recap: "Vertex on the axis.", ans: String.raw`$16-4c=0$: $c=4$; vertex $(2,0)$`, fig: gridT({ xmin: -2, xmax: 6, ymin: -2, ymax: 8 }) },
  { level: 3, space: 5, q: String.raw`Explain why $ax^2+bx+c=0$ always has two real roots when $a$ and $c$ have opposite signs.`, recap: "Opposite signs.", ans: String.raw`then $-4ac>0$, so $D=b^2-4ac>0$` },
  { level: 3, space: 5, q: String.raw`A ball's height is $h=-5t^2+20t+1$. Use the discriminant to decide whether it reaches $25$ m. What is its maximum height?`, recap: "Reach a height?", ans: String.raw`$-5t^2+20t-24=0$: $D=-80$, no; maximum $21$ m at $t=2$` },
  { level: 3, space: 5, q: String.raw`For which values of $k$ does $kx^2+4x+k=0$ have exactly one root?`, recap: "k on both ends.", ans: String.raw`$16-4k^2=0$: $k=\pm2$` },
];

export const WS = {
  code: "5.4",
  title: "The Discriminant & the Number of Roots",
  bigideas: String.raw`The discriminant $D=b^2-4ac$ is the part of the quadratic formula under the root. $D>0$: two distinct real roots (rational if $D$ is a perfect square); $D=0$: one real root, the vertex is on the x-axis; $D<0$: no real roots (the roots are non-real). Use it to count roots without solving and to find unknown coefficients.`,
  goals: ["Compute D from standard form.", "State the number and type of roots.", "Connect D to the x-intercepts.", "Find k for a given number of roots."],
  curriculum: "QR3",
  vocab: [["Discriminant", "$D=b^2-4ac$"], ["Double root", "$D=0$"], ["Non-real roots", "$D<0$"]],
  hook: String.raw`Show three parabolas with the same shape at different heights. Ask how many x-intercepts each has, then ask how you could know without the picture.`,
  concepts: [
    ["1. Three cases", String.raw`$D>0$ two, $D=0$ one, $D<0$ none.
${F({ view: { xmin: -5, xmax: 9, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (x + 1) ** 2 - 4, color: "green" }, { f: (x) => (x - 3) ** 2, color: "amber" }, { f: (x) => (x - 6) ** 2 + 3, color: "red" }], step: { x: 1, y: 2 } })}`],
    ["2. Type of root", String.raw`Perfect-square $D$: rational roots (it factors). Otherwise irrational.`],
    ["3. Unknown coefficients", String.raw`One root: $D=0$; two: $D>0$; none: $D<0$. Solve for $k$.`],
  ],
  tips: ["Standard form first.", "Square b in brackets.", "−4ac changes sign when a or c is negative.", "D < 0 does not mean negative roots.", "Check that a ≠ 0."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
