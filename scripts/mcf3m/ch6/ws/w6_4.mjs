// MCF3M Worksheet 6.4 — Horizontal Translations of the Sine Function (teacher edition).
import { svgT } from "../../ws/figT.mjs";
import { sDoc, sd, sinF, P } from "../sfig.mjs";
const S = String.raw;
const f = (v) => v.toFixed(2);
const G = (a, d, c, o = {}) => svgT(sDoc([{ f: sinF(a, d, c), color: "violet" }], { view: { xmin: o.xmin ?? 0, xmax: o.xmax ?? 450, ymin: o.ymin ?? Math.min(-1.5, c - Math.abs(a) - 1), ymax: o.ymax ?? Math.max(1.5, c + Math.abs(a) + 1) }, step: { x: o.sx ?? 90, y: o.sy ?? 1 }, lines: o.lines ?? [], points: o.points ?? [], base: o.base, xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y" }), 5.4);

const EXAMPLES = [
  { title: "Shift right 90°", q: S`Sketch $y=\sin(x-90^\circ)$ for $0^\circ\le x\le450^\circ$ using key points.`, fig: G(1, 90, 0, { sy: 0.5, points: [P(180, 1), P(360, -1, null, "red")] }),
    steps: [S`$(x,y)\to(x+90,\,y)$.`, S`$(90,0),(180,1),(270,0),(360,-1),(450,0)$.`, S`Value at $x=0$: $\sin(-90^\circ)=-1$, so the graph starts at a minimum.`], ans: S`max $(180,1)$, min $(0,-1)$ and $(360,-1)$` },
  { title: "Shift left 30°", q: S`Sketch $y=\sin(x+30^\circ)$ and give the zeros in $0^\circ\le x\le360^\circ$.`, fig: G(1, -30, 0, { xmin: -45, xmax: 360, sy: 0.5, points: [P(150, 0, "150°"), P(330, 0, "330°"), P(60, 1)] }),
    steps: [S`$d=-30$: $(-30,0),(60,1),(150,0),(240,-1),(330,0)$.`, S`Zeros in the interval: $150^\circ$, $330^\circ$.`], ans: S`zeros $150^\circ$, $330^\circ$` },
  { title: "Stretch and shift", q: S`Sketch $y=3\sin(x-45^\circ)$; give max and min points.`, fig: G(3, 45, 0, { points: [P(135, 3), P(315, -3, null, "red")] }),
    steps: [S`$(x,y)\to(x+45,\,3y)$.`, S`Max $(135,3)$, min $(315,-3)$; zeros $45^\circ,225^\circ,405^\circ$.`], ans: S`max $(135,3)$, min $(315,-3)$` },
  { title: "Shift left and down", q: S`Sketch $y=\sin(x+60^\circ)-2$; state the range.`, fig: G(1, -60, -2, { xmin: -90, xmax: 360, points: [P(30, -1), P(210, -3, null, "red")] }),
    steps: [S`$(x,y)\to(x-60,\,y-2)$: $(-60,-2),(30,-1),(120,-2),(210,-3),(300,-2)$.`, S`Range $-3\le y\le-1$.`], ans: S`range $-3\le y\le-1$` },
  { title: "Reflected and shifted", q: S`Sketch $y=-2\sin(x-30^\circ)+1$; give max and min points.`, fig: G(-2, 30, 1, { points: [P(120, -1, null, "red"), P(300, 3)] }),
    steps: [S`$(x,y)\to(x+30,\,-2y+1)$: $(30,1),(120,-1),(210,1),(300,3),(390,1)$.`, S`Max $(300,3)$, min $(120,-1)$.`], ans: S`max $(300,3)$, min $(120,-1)$` },
  { title: "Equation from max and min", q: S`A wave has max $(100,\,4)$ and next min $(280,\,-2)$. Write $y=a\sin(x-d)+c$, $a>0$.`, fig: G(3, 10, 1, { points: [P(100, 4), P(280, -2, null, "red")] }),
    steps: [S`$c=\frac{4-2}2=1$, $a=\frac{4+2}2=3$.`, S`$d=100-90=10$.`, S`$y=3\sin(x-10^\circ)+1$. Check min: $3\sin270^\circ+1=-2$ \checkmark`], ans: S`$y=3\sin(x-10^\circ)+1$` },
  { title: "A left shift from a graph", q: S`A wave has max $(20,\,6)$ and min $-2$. Write $y=a\sin(x-d)+c$, $a>0$.`, fig: G(4, -70, 2, { xmin: -90, xmax: 360, points: [P(20, 6), P(200, -2, null, "red")] }),
    steps: [S`$c=2$, $a=4$.`, S`$d=20-90=-70$.`, S`$y=4\sin(x+70^\circ)+2$.`], ans: S`$y=4\sin(x+70^\circ)+2$` },
  { title: "Evaluate", q: S`Find $y$ at $x=55^\circ$ and at $x=0^\circ$ for $y=5\sin(x-25^\circ)+3$.`, fig: G(5, 25, 3, { points: [P(55, 5.5, "(55, 5.5)"), P(0, +f(5 * sd(-25) + 3), `(0, ${f(5 * sd(-25) + 3)})`, "red")] }),
    steps: [S`$x=55$: $5\sin30^\circ+3=5.5$.`, S`$x=0$: $5\sin(-25^\circ)+3\approx${f(5 * sd(-25) + 3)}$.`], ans: S`$5.5$; $\approx${f(5 * sd(-25) + 3)}$` },
  { title: "Boarding at the top", q: S`A seat on a wheel (radius $6$ m, hub $8$ m) starts at the top. Show $h=6\sin(x+90^\circ)+8$ fits, and find $h$ after $120^\circ$.`, fig: G(6, -90, 8, { ymin: 0, ymax: 16, sy: 2, base: false, points: [P(0, 14), P(120, 5, "(120, 5)", "red")], xlabel: "x (°)", ylabel: "h (m)" }),
    steps: [S`$x=0$: $6\sin90^\circ+8=14$, the top \checkmark`, S`$x=180$: $6\sin270^\circ+8=2$, the bottom \checkmark`, S`$x=120$: $6\sin210^\circ+8=6(-0.5)+8=5$ m.`], ans: S`$5$ m` },
];

const PROBLEMS = [
  { level: 1, q: S`Describe the translation in $y=\sin(x-120^\circ)$.`, ans: S`$120^\circ$ right` },
  { level: 1, q: S`Describe the translation in $y=\sin(x+15^\circ)$.`, ans: S`$15^\circ$ left` },
  { level: 1, q: S`Where is the max of $y=\sin(x-70^\circ)$ in $0^\circ\le x\le360^\circ$?`, ans: S`$(160,\,1)$` },
  { level: 2, q: S`Give the key points of $y=2\sin(x+45^\circ)-1$.`, ans: S`$(-45,-1),(45,1),(135,-1),(225,-3),(315,-1)$` },
  { level: 2, q: S`Write $y=a\sin(x-d)+c$ ($a>0$): max $(140,\,9)$, min $1$.`, ans: S`$y=4\sin(x-50^\circ)+5$` },
  { level: 2, q: S`Find $y$ at $x=100^\circ$ for $y=-3\sin(x-10^\circ)+4$.`, ans: S`$-3(1)+4=1$` },
  { level: 2, q: S`Where is the minimum of $y=-\sin(x-40^\circ)$ in $0^\circ\le x\le360^\circ$?`, ans: S`$(130,\,-1)$` },
  { level: 2, q: S`Which value of $d$ between $0^\circ$ and $360^\circ$ makes $y=\sin(x-d)$ the same as $y=\sin(x+90^\circ)$?`, ans: S`$270^\circ$` },
  { level: 3, space: 5, q: S`Solve $\sin(x-40^\circ)=0.5$ for $0^\circ\le x\le360^\circ$.`, ans: S`$x-40=30$ or $150$: $70^\circ$, $190^\circ$` },
  { level: 3, space: 5, q: S`A wheel has radius $10$ m, hub $12$ m, and the rider boards at the bottom. Write $h$ in terms of the angle $x$ turned, and find $h$ at $x=300^\circ$.`, ans: S`$h=10\sin(x-90^\circ)+12$; $10\sin210^\circ+12=7$ m` },
  { level: 3, space: 5, q: S`Write two different equations $y=a\sin(x-d)+c$ for a wave with max $(60,\,5)$ and min $(240,\,1)$.`, ans: S`$2\sin(x+30^\circ)+3$ and $-2\sin(x-150^\circ)+3$` },
  { level: 3, space: 5, q: S`For $y=4\sin(x-20^\circ)+1$, find all $x$ in $0^\circ\le x\le360^\circ$ with $y=3$.`, ans: S`$\sin(x-20)=0.5$: $50^\circ$, $170^\circ$` },
  { level: 3, space: 5, q: S`Explain why $y=\sin(x-360^\circ)$ and $y=\sin x$ have the same graph.`, ans: S`shifting by one full period gives the same wave` },
];

export const WS = {
  code: "6.4",
  title: "Horizontal Translations of the Sine Function",
  bigideas: S`In $y=\sin(x-d)$ the wave moves $d$ units right (left if $d<0$); this is the phase shift. Combined with 6.3: $y=a\sin(x-d)+c$ has amplitude $|a|$, phase shift $d$, axis $y=c$ and period $360^\circ$. Key points map by $(x,y)\to(x+d,\,ay+c)$, and a maximum of $\sin x$ at $90^\circ$ moves to $90^\circ+d$.`,
  goals: ["Describe the effect of $d$.", "Map key points.", "Graph $y=a\\sin(x-d)+c$.", "Write equations from graphs."],
  curriculum: "C2.5, C2.6",
  vocab: [["Phase shift", "horizontal translation $d$"], ["$x-d$", "right $d$"], ["$x+d$", "left $d$"], ["Mapping", "$(x,y)\\to(x+d,\\,ay+c)$"]],
  hook: S`Two riders sit a quarter-turn apart on the same wheel. How are their height graphs related?`,
  concepts: [
    ["1. The effect of d", S`The inside sign is opposite to the direction: $\sin(x-50^\circ)$ is $50^\circ$ right.
${svgT(sDoc([{ f: sinF(1, 50), color: "violet" }], { view: { xmin: 0, xmax: 450, ymin: -1.5, ymax: 1.5 }, step: { x: 90, y: 0.5 }, points: [P(140, 1)] }), 5.4)}`],
    ["2. All transformations", S`$y=a\sin(x-d)+c$: stretch/reflect by $a$, shift by $d$ and $c$.`],
  ],
  tips: ["$x-d$ moves right.", "Max at $90^\\circ+d$ when $a>0$.", "Check one point by substitution."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
