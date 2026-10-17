// MPM2D Worksheet 2.3 — Equation of a Circle (centre at the origin) (teacher edition)
import { planeT, F, pt, std, gridT, poly } from "./figT.mjs";

const circ = (r, color = "violet") => [{ f: (x) => Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color }, { f: (x) => -Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color }];

const EXAMPLES = [
  { title: "From the radius", q: String.raw`Write the equation of the circle with centre $(0,0)$ and radius $9$.`,
    steps: [String.raw`$r^2=81$.`], ans: "$x^2+y^2=81$" },
  { title: "Through a point", q: String.raw`A circle centred at the origin passes through $(-8,6)$. Find its equation and radius.`,
    steps: [String.raw`$r^2=64+36=100$.`, String.raw`$r=10$.`], ans: "$x^2+y^2=100$, $r=10$" },
  { title: "A radius that is not whole", q: String.raw`Find the radius of $x^2+y^2=45$.`,
    steps: [String.raw`$r=\sqrt{45}=3\sqrt5\approx6.71$.`], ans: String.raw`$\sqrt{45}\approx6.71$` },
  { title: "Inside or outside?", q: String.raw`Is $(7,-3)$ on, inside or outside $x^2+y^2=60$?`,
    steps: [String.raw`$49+9=58$.`, String.raw`$58<60$.`], ans: "inside" },
  { title: "Intercepts", q: String.raw`Find the intercepts of $x^2+y^2=36$ and sketch the circle.`,
    fig: planeT({ view: { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, curves: circ(6), points: [{ x: 6, y: 0, label: "(6, 0)" }, { x: -6, y: 0, label: "(−6, 0)" }, { x: 0, y: 6, label: "(0, 6)" }, { x: 0, y: -6, label: "(0, −6)" }], step: { x: 2, y: 2 } }, 4.5),
    steps: [String.raw`$y=0$: $x^2=36$, $x=\pm6$.`, String.raw`$x=0$: $y=\pm6$.`], ans: "$(\\pm6,0)$, $(0,\\pm6)$" },
  { title: "Points with a given y", q: String.raw`Find the points on $x^2+y^2=41$ with $y=-4$.`,
    steps: [String.raw`$x^2+16=41\Rightarrow x^2=25$.`, String.raw`$x=\pm5$.`], ans: "$(5,-4)$ and $(-5,-4)$" },
  { title: "Find a coordinate", q: String.raw`For which values of $k$ is $(k,3)$ on $x^2+y^2=25$?`,
    steps: [String.raw`$k^2+9=25\Rightarrow k^2=16$.`], ans: "$k=4$ or $k=-4$" },
  { title: "Radar ranges", q: String.raw`A radar at the origin has an inner warning circle of radius $30$ km and an outer range of $50$ km. A boat is at $(24,-18)$. Where is it?`,
    fig: planeT({ view: { xmin: -55, xmax: 55, ymin: -55, ymax: 55 }, curves: [...circ(30, "red"), ...circ(50, "blue")], points: [{ x: 24, y: -18, label: "(24, −18)", color: "green" }], step: { x: 10, y: 10 } }, 4.5),
    steps: [String.raw`$24^2+(-18)^2=576+324=900=30^2$.`], ans: "exactly on the inner warning circle (30 km away)" },
  { title: "A diameter", q: String.raw`Show that $(-6,8)$ and $(6,-8)$ are the ends of a diameter of $x^2+y^2=100$, and find its length.`,
    steps: [String.raw`Both: $36+64=100$ ✓ (on the circle).`, String.raw`Midpoint $(0,0)$ — the centre.`, String.raw`Length $\sqrt{144+256}=20=2r$.`], ans: "diameter of length 20" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Write the equation of the circle centred at the origin with radius $12$.`, recap: "Radius 12.", ans: "$x^2+y^2=144$" },
  { level: 1, q: String.raw`State the radius of $x^2+y^2=121$.`, recap: "x² + y² = 121.", ans: "$11$" },
  { level: 1, q: String.raw`Is $(-5,12)$ on $x^2+y^2=169$?`, recap: "(−5, 12) on the circle?", ans: "yes: $25+144=169$" },
  { level: 2, q: String.raw`Write the equation of the circle centred at the origin through $(-2,-7)$ and give its radius to two decimals.`, recap: "Through (−2, −7).", ans: String.raw`$x^2+y^2=53$; $r\approx7.28$` },
  { level: 2, q: String.raw`Is $(6,6)$ on, inside or outside $x^2+y^2=70$?`, recap: "(6, 6) and r² = 70.", ans: "outside ($72>70$)" },
  { level: 2, q: String.raw`Find the points on $x^2+y^2=13$ with $x=2$.`, recap: "x = 2 on x² + y² = 13.", ans: "$(2,3)$, $(2,-3)$" },
  { level: 2, q: String.raw`Find $k$ if $(-6,k)$ is on $x^2+y^2=100$.`, recap: "Find k.", ans: "$k=\\pm8$" },
  { level: 2, q: String.raw`A circle centred at the origin passes through $(3,-4)$. Does it pass through $(0,5)$? Through $(-4,-3)$?`, recap: "Same circle?", ans: "yes to both ($r^2=25$)" },
  { level: 3, space: 5, q: String.raw`A cell tower at the origin covers $12$ km. Homes are at $(8,9)$, $(-7,-9)$ and $(10,-7)$. Which homes have coverage?`, recap: "Cell tower coverage.", ans: String.raw`only $(-7,-9)$: $130<144$; others $145$, $149$` },
  { level: 3, space: 5, q: String.raw`Find the length of the chord of $x^2+y^2=50$ that lies on the line $y=x$.`, recap: "Chord on y = x.", ans: String.raw`$(5,5)$, $(-5,-5)$; $\sqrt{200}\approx14.14$` },
  { level: 3, space: 5, q: String.raw`Show that $(1,7)$ and $(-5,5)$ lie on the same circle centred at the origin, then show that the right bisector of the segment joining them passes through the origin.`, recap: "Right bisector of a chord.", ans: String.raw`both $r^2=50$; midpoint $(-2,6)$, slope $\frac13$, bisector $y=-3x$ through $(0,0)$` },
  { level: 3, space: 5, q: String.raw`Write the equation of the circle centred at the origin that just touches the line $y=-7$.`, recap: "Tangent to y = −7.", ans: "$x^2+y^2=49$" },
  { level: 3, space: 5, q: String.raw`Explain why $x^2+y^2=-9$ has no graph.`, recap: "Negative r².", ans: "x² + y² is never negative, so no point satisfies it" },
];

// ---- figures added to examples and problems
const ex = EXAMPLES, pr = PROBLEMS;
const V = (r) => ({ xmin: -r, xmax: r, ymin: -r, ymax: r });
ex[0].fig = F({ view: V(11), curves: circ(9), segs: [{ pts: [[0, 0], [9, 0]], color: "red" }], points: [pt(9, 0, null, "red")] });
ex[1].fig = F({ view: V(12), curves: circ(10), segs: [{ pts: [[0, 0], [-8, 6]], color: "red" }], points: [pt(-8, 6, null, "red")] });
ex[2].fig = F({ view: V(8), curves: circ(Math.sqrt(45)) });
ex[3].fig = F({ view: V(9), curves: circ(Math.sqrt(60)), points: [pt(7, -3, null, "red")] });
ex[5].fig = F({ view: V(8), curves: circ(Math.sqrt(41)), lines: [{ m: 0, b: -4, color: "gray", dash: true }], points: [pt(5, -4, null, "red"), pt(-5, -4, null, "red")] });
ex[6].fig = F({ view: V(7), curves: circ(5), lines: [{ m: 0, b: 3, color: "gray", dash: true }], points: [pt(4, 3, null, "red"), pt(-4, 3, null, "red")] });
ex[8].fig = F({ view: V(12), curves: circ(10), segs: [{ pts: [[-6, 8], [6, -8]], color: "red" }], points: [pt(-6, 8, null, "red"), pt(6, -8, null, "red"), pt(0, 0, null, "green")] });
pr[0].fig = gridT({ xmin: -14, xmax: 14, ymin: -14, ymax: 14 }, { x: 2, y: 2 });
pr[3].fig = F({ view: V(9), points: [pt(-2, -7, null, "red")] });
pr[4].fig = F({ view: V(10), curves: circ(Math.sqrt(70)), points: [pt(6, 6, null, "red")] });
pr[5].fig = F({ view: V(5), curves: circ(Math.sqrt(13)), vlines: [{ x: 2, color: "gray", dash: true }] });
pr[6].fig = F({ view: V(12), curves: circ(10), vlines: [{ x: -6, color: "gray", dash: true }] });
pr[7].fig = F({ view: V(7), points: [pt(3, -4, null, "red"), pt(0, 5), pt(-4, -3)] });
pr[8].fig = F({ view: V(14), curves: circ(12), points: [pt(8, 9), pt(-7, -9), pt(10, -7)], xlabel: "km", ylabel: "km" });
pr[9].fig = F({ view: V(9), curves: circ(Math.sqrt(50)), lines: [{ m: 1, b: 0, color: "gray", dash: true }] });
pr[10].fig = F({ view: V(9), curves: circ(Math.sqrt(50)), points: [pt(1, 7, null, "red"), pt(-5, 5, null, "red")] });
pr[11].fig = F({ view: V(9), lines: [{ m: 0, b: -7, color: "gray" }] });
// ---- end figures

export const WS = {
  code: "2.3",
  title: "Equation of a Circle (centre at the origin)",
  bigideas: String.raw`A circle is every point at distance $r$ from its centre. With centre $(0,0)$ the length formula gives $x^2+y^2=r^2$. The constant is $r^2$, so the radius is its square root. Comparing $a^2+b^2$ with $r^2$ tells whether a point is on, inside or outside; substituting one coordinate finds points on the circle.`,
  goals: ["Derive x² + y² = r².", "Write equations and find radii.", "Test points.", "Find points on a circle and solve problems."],
  curriculum: "AG2",
  vocab: [["Circle", "$x^2+y^2=r^2$"], ["Radius", "$\\sqrt{r^2}$"], ["Chord", "segment joining two points of the circle"]],
  hook: String.raw`Tie a string to a pin at the origin of a large grid and trace a circle. Ask students to read off points on it and compute $x^2+y^2$ for each. Why is it always the same?`,
  concepts: [
    ["1. Derivation", String.raw`$\sqrt{x^2+y^2}=r\Rightarrow x^2+y^2=r^2$.
${planeT({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, curves: circ(5), segs: [{ pts: [[0, 0], [3, 4]], color: "red" }], points: [{ x: 3, y: 4, label: "(3, 4)", color: "red" }], step: { x: 1, y: 1 } }, 4.5)}`],
    ["2. On, inside, outside", String.raw`$a^2+b^2=r^2$ on; $<$ inside; $>$ outside.`],
    ["3. Points on a circle", String.raw`Substitute $x$ (or $y$) and solve: usually two answers, $\pm$.`],
  ],
  tips: ["Radius is √(r²): very common error.", "Keep both ± answers.", "Compare squares to avoid roots.", "Only centre (0, 0) this year.", "Connect to coverage areas."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
