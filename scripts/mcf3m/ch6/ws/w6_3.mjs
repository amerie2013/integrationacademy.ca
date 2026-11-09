// MCF3M Worksheet 6.3 — Vertical Transformations of the Sine Function (teacher edition).
import { svgT } from "../../ws/figT.mjs";
import { sDoc, sd, sinF, P } from "../sfig.mjs";
const S = String.raw;
const f = (v) => v.toFixed(2);
const G = (a, c, o = {}) => svgT(sDoc([{ f: sinF(a, 0, c), color: "violet" }], { view: { xmin: 0, xmax: 360, ymin: o.ymin ?? Math.min(-1.5, c - Math.abs(a) - 1), ymax: o.ymax ?? Math.max(1.5, c + Math.abs(a) + 1) }, step: { x: 90, y: o.sy ?? 1 }, lines: [{ m: 0, b: c, color: "green", dash: true, label: `y = ${c}` }, ...(o.lines ?? [])], points: o.points ?? [], xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y", base: o.base }), 5.4);

const EXAMPLES = [
  { title: "Compression", q: S`Sketch $y=0.5\sin x$ and state amplitude and range.`, fig: G(0.5, 0, { sy: 0.5, points: [P(90, 0.5), P(270, -0.5, null, "red")] }),
    steps: [S`$(x,y)\to(x,\,0.5y)$: $(0,0),(90,0.5),(180,0),(270,-0.5),(360,0)$.`, S`Amplitude $0.5$; range $-0.5\le y\le0.5$.`], ans: S`amplitude $0.5$; $-0.5\le y\le0.5$` },
  { title: "Reflection", q: S`Sketch $y=-\sin x$. Where are the max and min?`, fig: G(-1, 0, { sy: 0.5, points: [P(90, -1, null, "red"), P(270, 1)] }),
    steps: [S`$(x,y)\to(x,-y)$: $(90,1)\to(90,-1)$, $(270,-1)\to(270,1)$.`, S`Max $(270,1)$, min $(90,-1)$.`], ans: S`max $(270,1)$, min $(90,-1)$` },
  { title: "Shift up", q: S`Sketch $y=\sin x+3$. State the axis, max, min and range.`, fig: G(1, 3, { ymin: 0, ymax: 5, points: [P(90, 4), P(270, 2, null, "red")] }),
    steps: [S`$(x,y)\to(x,\,y+3)$.`, S`Axis $y=3$; max $4$; min $2$; range $2\le y\le4$.`], ans: S`axis $y=3$, range $2\le y\le4$` },
  { title: "Stretch and shift", q: S`Sketch $y=2\sin x-1$ using key points.`, fig: G(2, -1, { points: [P(90, 1), P(270, -3, null, "red")] }),
    steps: [S`$(x,y)\to(x,\,2y-1)$: $(0,-1),(90,1),(180,-1),(270,-3),(360,-1)$.`, S`Amplitude $2$, axis $y=-1$, range $-3\le y\le1$.`], ans: S`range $-3\le y\le1$` },
  { title: "All three", q: S`Sketch $y=-3\sin x+2$ and give max and min points.`, fig: G(-3, 2, { points: [P(90, -1, null, "red"), P(270, 5)] }),
    steps: [S`$(x,y)\to(x,\,-3y+2)$: $(0,2),(90,-1),(180,2),(270,5),(360,2)$.`, S`Max $(270,5)$, min $(90,-1)$, range $-1\le y\le5$.`], ans: S`max $(270,5)$, min $(90,-1)$` },
  { title: "Equation from a graph", q: S`A wave has max $2$ at $x=90^\circ$ and min $-6$ at $x=270^\circ$. Find $y=a\sin x+c$.`, fig: G(4, -2, { points: [P(90, 2), P(270, -6, null, "red")] }),
    steps: [S`$c=\frac{2+(-6)}2=-2$; $|a|=\frac{2-(-6)}2=4$.`, S`Max at $90^\circ$ like $\sin x$: $a=4$.`, S`$y=4\sin x-2$. Check: $4(1)-2=2$ \checkmark`], ans: S`$y=4\sin x-2$` },
  { title: "Reflected equation", q: S`A wave has max $5$ at $270^\circ$ and min $1$ at $90^\circ$. Find $y=a\sin x+c$.`, fig: G(-2, 3, { ymin: 0, ymax: 6, points: [P(90, 1, null, "red"), P(270, 5)] }),
    steps: [S`$c=3$, $|a|=2$.`, S`Min at $90^\circ$: reflected, $a=-2$.`, S`$y=-2\sin x+3$. Check: $-2(1)+3=1$ \checkmark`], ans: S`$y=-2\sin x+3$` },
  { title: "Solve an equation", q: S`Solve $4\sin x-1=1$ for $0^\circ\le x\le360^\circ$.`, fig: G(4, -1, { lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(30, 1, "30°"), P(150, 1, "150°")] }),
    steps: [S`$4\sin x=2\Rightarrow\sin x=0.5$.`, S`$x=30^\circ$ or $150^\circ$.`], ans: S`$30^\circ$, $150^\circ$` },
  { title: "A wheel", q: S`A seat's height is $h=7\sin x+9$ (m), $x$ the angle from level. Find $h$ at $240^\circ$ and when $h=12.5$.`, fig: G(7, 9, { ymin: 0, ymax: 18, sy: 2, base: false, lines: [{ m: 0, b: 12.5, color: "red", dash: true }], points: [P(240, +f(7 * sd(240) + 9), `(240, ${f(7 * sd(240) + 9)})`), P(30, 12.5, "30°"), P(150, 12.5, "150°")], xlabel: "x (°)", ylabel: "h (m)" }),
    steps: [S`$h(240)=7\sin240^\circ+9\approx${f(7 * sd(240) + 9)}$ m.`, S`$7\sin x+9=12.5\Rightarrow\sin x=0.5\Rightarrow x=30^\circ,150^\circ$.`], ans: S`$${f(7 * sd(240) + 9)}$ m; $30^\circ$, $150^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: S`State amplitude and axis of $y=6\sin x-4$.`, ans: S`$6$; $y=-4$` },
  { level: 1, q: S`Find max and min of $y=-0.5\sin x+3$.`, ans: S`$3.5$; $2.5$` },
  { level: 1, q: S`Map $(270,-1)$ under $y=3\sin x+2$.`, ans: S`$(270,\,-1)$` },
  { level: 2, q: S`Sketch $y=1.5\sin x+1$; give the key points.`, ans: S`$(0,1),(90,2.5),(180,1),(270,-0.5),(360,1)$` },
  { level: 2, q: S`Sketch $y=-4\sin x$; give max and min points.`, ans: S`max $(270,4)$, min $(90,-4)$` },
  { level: 2, q: S`Write $y=a\sin x+c$: max $8$ at $90^\circ$, min $0$.`, ans: S`$y=4\sin x+4$` },
  { level: 2, q: S`Write $y=a\sin x+c$: max $-1$ at $270^\circ$, min $-7$ at $90^\circ$.`, ans: S`$y=-3\sin x-4$` },
  { level: 2, q: S`Solve $2\sin x+3=4$ for $0^\circ\le x\le360^\circ$.`, ans: S`$30^\circ$, $150^\circ$` },
  { level: 3, space: 5, q: S`Solve $-5\sin x+2=4.5$ for $0^\circ\le x\le360^\circ$.`, ans: S`$\sin x=-0.5$: $210^\circ$, $330^\circ$` },
  { level: 3, space: 5, q: S`A float on a wave has height $h=0.8\sin x+2.4$ m above the sea floor. Find its range and the angles where it is exactly $2$ m up.`, ans: S`$1.6\le h\le3.2$; $\sin x=-0.5$: $210^\circ$, $330^\circ$` },
  { level: 3, space: 5, q: S`Find $a$ and $c$ if $y=a\sin x+c$ passes through $(90,\,7)$ and $(270,\,-3)$.`, ans: S`$a=5$, $c=2$` },
  { level: 3, space: 5, q: S`For what values of $c$ does $y=2\sin x+c$ lie entirely above the $x$-axis?`, ans: S`$c>2$` },
  { level: 3, space: 5, q: S`For $h=5\sin x+6$, what fraction of a full turn has $h>8.5$?`, ans: S`$30^\circ<x<150^\circ$: $\frac13$` },
];

export const WS = {
  code: "6.3",
  title: "Vertical Transformations of the Sine Function",
  bigideas: S`In $y=a\sin x+c$, $a$ stretches the wave vertically (amplitude $|a|$) and reflects it in its axis if $a<0$; $c$ moves it up or down (axis $y=c$). Key points map by $(x,y)\to(x,\,ay+c)$. The maximum is $c+|a|$ and the minimum $c-|a|$; the period stays $360^\circ$.`,
  goals: ["Describe the effect of $a$ and $c$.", "Map key points.", "Find max, min, range.", "Write the equation from a graph."],
  curriculum: "C2.5, C2.6",
  vocab: [["Amplitude", "$|a|$"], ["Axis", "$y=c$"], ["Reflection", "$a<0$"], ["Mapping", "$(x,y)\\to(x,\\,ay+c)$"]],
  hook: S`Two wheels have the same speed. One has radius $3$ m and hub $5$ m; the other radius $5$ m and hub $8$ m. How do their height graphs differ?`,
  concepts: [
    ["1. The effect of a", S`$|a|>1$ stretches, $0<|a|<1$ compresses, $a<0$ reflects.
${svgT(sDoc([{ f: sinF(2), color: "violet" }, { f: sinF(-0.5), color: "green" }], { view: { xmin: 0, xmax: 360, ymin: -2.5, ymax: 2.5 }, step: { x: 90, y: 0.5 } }), 5.4)}`],
    ["2. The effect of c", S`$c$ moves the axis to $y=c$; the shape is unchanged.
${G(1, 2, { ymin: -1.5, ymax: 3.5 })}`],
  ],
  tips: ["Multiply first, then add.", "Amplitude is never negative.", "$a<0$: max at $270^\\circ$."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
