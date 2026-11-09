// MCF3M Worksheet 6.2 — The Sine Function (teacher edition). Numbers computed in code.
import { svgT } from "../../ws/figT.mjs";
import { sDoc, sd, cd, P } from "../sfig.mjs";
const S = String.raw;
const f = (v) => v.toFixed(2);
const asd = (v) => (Math.asin(v) * 180) / Math.PI;
const G = (curves, o, w = 5.4) => svgT(sDoc(curves, { base: false, ...o }), w);
const W = (o = {}) => G([{ f: sd, color: "violet" }], { view: { xmin: o.xmin ?? 0, xmax: o.xmax ?? 360, ymin: -1.5, ymax: 1.5 }, step: { x: o.sx ?? 45, y: 0.5 }, ...o });
const circle = (R, ang) => G([], {
  view: { xmin: -R * 1.3, xmax: R * 1.3, ymin: -R * 1.3, ymax: R * 1.3 }, step: { x: R / 2, y: R / 2 },
  segs: [{ pts: Array.from({ length: 73 }, (_, i) => [R * cd(i * 5), R * sd(i * 5)]), color: "gray" }, { pts: [[0, 0], [R * cd(ang), R * sd(ang)]], color: "violet" }, { pts: [[R * cd(ang), 0], [R * cd(ang), R * sd(ang)]], color: "red" }],
  points: [P(+f(R * cd(ang)), +f(R * sd(ang)), `(${f(R * cd(ang))}, ${f(R * sd(ang))})`)],
}, 4.6);

const EXAMPLES = [
  { title: "Angle in quadrant 2", q: S`A radius of $8$ is rotated $135^\circ$. Find the end point and $\sin135^\circ$.`, fig: circle(8, 135),
    steps: [S`Related angle $180-135=45^\circ$.`, S`Height $8\sin45^\circ\approx${f(8 * sd(45))}$, horizontal $-8\cos45^\circ\approx${f(-8 * cd(45))}$.`, S`$\sin135^\circ=\frac{y}{r}\approx\frac{${f(8 * sd(45))}}{8}\approx0.71$.`], ans: S`$(${f(8 * cd(135))},\ ${f(8 * sd(135))})$, $\sin135^\circ\approx0.71$` },
  { title: "Angle in quadrant 4", q: S`A radius of $6$ is rotated $300^\circ$. Find the end point and $\sin300^\circ$.`, fig: circle(6, 300),
    steps: [S`Related angle $360-300=60^\circ$, below the $x$-axis.`, S`Point $(6\cos60^\circ,\,-6\sin60^\circ)=(3,\ ${f(6 * sd(300))})$.`, S`$\sin300^\circ=\frac{${f(6 * sd(300))}}{6}\approx${f(sd(300))}$.`], ans: S`$(3,\ ${f(6 * sd(300))})$, $\sin300^\circ\approx${f(sd(300))}$` },
  { title: "Table every 60°", q: S`Make a table of $y=\sin x$ for $x=0^\circ,60^\circ,\dots,360^\circ$ and sketch.`, fig: W({ sx: 60, points: [0, 60, 120, 180, 240, 300, 360].map((x) => P(x, +f(sd(x)), false)) }),
    steps: [S`$0,\ 0.87,\ 0.87,\ 0,\ -0.87,\ -0.87,\ 0$.`, S`Add the key points $(90,1)$ and $(270,-1)$ and join smoothly.`], ans: S`$0,\ 0.87,\ 0.87,\ 0,\ -0.87,\ -0.87,\ 0$` },
  { title: "Negative angles", q: S`Sketch $y=\sin x$ for $-360^\circ\le x\le360^\circ$. List the max and min points and zeros.`, fig: W({ xmin: -360, xmax: 360, sx: 90, points: [P(-270, 1), P(90, 1), P(-90, -1, null, "red"), P(270, -1, null, "red")] }),
    steps: [S`One period to the left repeats the wave.`, S`Max $(-270,1)$, $(90,1)$; min $(-90,-1)$, $(270,-1)$.`, S`Zeros: $-360,-180,0,180,360$.`], ans: S`max at $-270^\circ, 90^\circ$; min at $-90^\circ, 270^\circ$; zeros every $180^\circ$` },
  { title: "Symmetry", q: S`Given $\sin20^\circ\approx0.34$, find $\sin160^\circ$, $\sin200^\circ$, $\sin340^\circ$.`, fig: W({ sx: 45, points: [P(20, 0.34, "20°"), P(160, 0.34, "160°"), P(200, -0.34, "200°", "red"), P(340, -0.34, "340°", "red")] }),
    steps: [S`$160=180-20$: same height, $0.34$.`, S`$200=180+20$: $-0.34$.`, S`$340=360-20$: $-0.34$.`], ans: S`$0.34,\ -0.34,\ -0.34$` },
  { title: "Solve sin x = 0.25", q: S`Solve $\sin x=0.25$, $0^\circ\le x\le360^\circ$.`, fig: W({ lines: [{ m: 0, b: 0.25, color: "green", dash: true }], points: [P(+f(asd(0.25)), 0.25, `${f(asd(0.25))}°`), P(+f(180 - asd(0.25)), 0.25, `${f(180 - asd(0.25))}°`)] }),
    steps: [S`$x_1=\sin^{-1}0.25\approx${f(asd(0.25))}^\circ$.`, S`$x_2=180-${f(asd(0.25))}=${f(180 - asd(0.25))}^\circ$.`], ans: S`$${f(asd(0.25))}^\circ$, $${f(180 - asd(0.25))}^\circ$` },
  { title: "Solve sin x = −0.75", q: S`Solve $\sin x=-0.75$, $0^\circ\le x\le360^\circ$.`, fig: W({ lines: [{ m: 0, b: -0.75, color: "green", dash: true }], points: [P(+f(180 + asd(0.75)), -0.75, `${f(180 + asd(0.75))}°`), P(+f(360 - asd(0.75)), -0.75, `${f(360 - asd(0.75))}°`)] }),
    steps: [S`Related angle $\sin^{-1}0.75\approx${f(asd(0.75))}^\circ$.`, S`Negative below the axis: $180+${f(asd(0.75))}=${f(180 + asd(0.75))}^\circ$, $360-${f(asd(0.75))}=${f(360 - asd(0.75))}^\circ$.`], ans: S`$${f(180 + asd(0.75))}^\circ$, $${f(360 - asd(0.75))}^\circ$` },
  { title: "Large angles", q: S`Find $\sin765^\circ$ and $\sin(-150^\circ)$.`, fig: W({ xmin: -180, xmax: 810, sx: 90, points: [P(765, 0.71, "765°"), P(-150, -0.5, "−150°", "red")] }),
    steps: [S`$765-2(360)=45\Rightarrow\sin765^\circ\approx0.71$.`, S`$-150+360=210\Rightarrow\sin(-150^\circ)=-0.5$.`], ans: S`$\approx0.71$; $-0.5$` },
  { title: "A point on a wheel", q: S`A wheel of radius $15$ m turns counterclockwise from the level position. How far above or below the hub is a marker after $320^\circ$?`, fig: circle(15, 320),
    steps: [S`$y=15\sin320^\circ$.`, S`$=-15\sin40^\circ\approx${f(15 * sd(320))}$.`], ans: S`$${f(-15 * sd(320))}$ m below the hub` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $\sin90^\circ$, $\sin180^\circ$, $\sin270^\circ$.`, ans: S`$1,\ 0,\ -1$` },
  { level: 1, q: S`State the period, amplitude and range of $y=\sin x$.`, ans: S`$360^\circ$, $1$, $-1\le y\le1$` },
  { level: 1, q: S`Find $\sin225^\circ$ to two decimals.`, ans: S`$${f(sd(225))}$` },
  { level: 2, q: S`A radius of $12$ is rotated $210^\circ$. Find the end point.`, ans: S`$(${f(12 * cd(210))},\ ${f(12 * sd(210))})$` },
  { level: 2, q: S`Solve $\sin x=0.9$, $0^\circ\le x\le360^\circ$.`, ans: S`$${f(asd(0.9))}^\circ$, $${f(180 - asd(0.9))}^\circ$` },
  { level: 2, q: S`Solve $\sin x=-0.2$, $0^\circ\le x\le360^\circ$.`, ans: S`$${f(180 + asd(0.2))}^\circ$, $${f(360 - asd(0.2))}^\circ$` },
  { level: 2, q: S`List all zeros of $y=\sin x$ for $-180^\circ\le x\le540^\circ$.`, ans: S`$-180,0,180,360,540$` },
  { level: 2, q: S`Without a calculator, given $\sin50^\circ\approx0.77$, find $\sin130^\circ$ and $\sin310^\circ$.`, ans: S`$0.77$; $-0.77$` },
  { level: 3, space: 5, q: S`How many solutions does $\sin x=-1$ have for $0^\circ\le x\le1080^\circ$? List them.`, ans: S`$3$: $270^\circ, 630^\circ, 990^\circ$` },
  { level: 3, space: 5, q: S`A wheel of radius $20$ m turns from the level position. For which angles $0^\circ\le x\le360^\circ$ is the marker at least $10$ m above the hub?`, ans: S`$30^\circ\le x\le150^\circ$` },
  { level: 3, space: 5, q: S`Find $\sin1000^\circ$ and $\sin(-500^\circ)$ to two decimals.`, ans: S`$${f(sd(1000))}$; $${f(sd(-500))}$` },
  { level: 3, space: 5, q: S`Explain why $\sin x=1.3$ has no solution, using the circle definition.`, ans: S`$y\le r$, so $\frac yr\le1$` },
  { level: 3, space: 5, q: S`Solve $\sin x=\sin40^\circ$ for $0^\circ\le x\le720^\circ$.`, ans: S`$40^\circ, 140^\circ, 400^\circ, 500^\circ$` },
];

export const WS = {
  code: "6.2",
  title: "The Sine Function",
  bigideas: S`Rotate a radius $r$ by an angle $x$; if the end point is $(x_P,\,y_P)$, then $\sin x=\frac{y_P}{r}$. Graphing $y=\sin x$ gives a wave with period $360^\circ$, amplitude $1$, axis $y=0$ and range $-1\le y\le1$. Key points: $(0,0)$, $(90,1)$, $(180,0)$, $(270,-1)$, $(360,0)$. Because of symmetry, $\sin(180^\circ-x)=\sin x$, so $\sin x=k$ usually has two solutions per cycle.`,
  goals: ["Define sine for any angle.", "Graph $y=\\sin x$.", "State its properties.", "Use symmetry; solve $\\sin x=k$."],
  curriculum: "C2.3, C2.4",
  vocab: [["Angle of rotation", "counterclockwise from the positive $x$-axis"], ["$\\sin x$", "$\\frac{y}{r}$"], ["Related angle", "acute angle to the $x$-axis"], ["Zeros", "$0^\\circ, 180^\\circ, 360^\\circ,\\dots$"]],
  hook: S`A seat on a wheel starts level with the hub. Its height above the hub after turning $x^\circ$ is $r\sin x$. What does the graph look like over two turns?`,
  concepts: [
    ["1. Sine of any angle", S`$\sin x=\frac{y}{r}$. Positive above the $x$-axis ($0^\circ<x<180^\circ$), negative below.
${circle(10, 210)}`],
    ["2. The graph", S`Period $360^\circ$; max $1$ at $90^\circ$; min $-1$ at $270^\circ$; zeros every $180^\circ$.
${W({ sx: 90 })}`],
  ],
  tips: ["Degree mode.", "Second solution: $180^\\circ-x_1$ (or place the related angle where sine has the right sign).", "Subtract $360^\\circ$ for large angles."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
