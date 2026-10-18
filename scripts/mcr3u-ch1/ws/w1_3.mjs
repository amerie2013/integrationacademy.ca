// MCR3U Worksheet 1.3 — Parent Functions (teacher edition)
import { F, pt } from "./figT.mjs";

const PAR = {
  x: { f: (x) => x, color: "gray" }, x2: { f: (x) => x * x, color: "blue" }, sqrt: { f: (x) => Math.sqrt(x), a: 0, color: "green" },
  recip: { f: (x) => 1 / x, color: "red" }, abs: { f: (x) => Math.abs(x), color: "amber" },
};
const V5 = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };

const EXAMPLES = [
  { title: "Square root from a table", q: String.raw`$x$: $0,1,4,9,16$; $y$: $0,1,2,3,4$. Which parent function is this?`,
    steps: [String.raw`Each $y$ squared gives $x$: $y=\sqrt x$.`], ans: String.raw`$f(x)=\sqrt x$` },
  { title: "Reciprocal from a table", q: String.raw`$x$: $1,2,4,5$; $y$: $1,\tfrac12,\tfrac14,\tfrac15$. Which parent?`,
    steps: [String.raw`Each $y$ is $\frac1x$.`], ans: String.raw`$f(x)=\frac1x$` },
  { title: "Square vs absolute value", q: String.raw`Compare $x^2$ and $|x|$ at $x=-3$ and $x=0.5$.`,
    steps: [String.raw`$(-3)^2=9$, $|-3|=3$.`, String.raw`$0.5^2=0.25$, $|0.5|=0.5$.`], ans: String.raw`$x^2>|x|$ when $|x|>1$; $x^2<|x|$ when $0<|x|<1$` },
  { title: "Domains and ranges", q: "List the domain and range of all five parents.",
    steps: [String.raw`$x$: $\mathbb R$, $\mathbb R$. $x^2$, $|x|$: $\mathbb R$, $y\ge0$.`, String.raw`$\sqrt x$: $x\ge0$, $y\ge0$. $\frac1x$: $x\ne0$, $y\ne0$.`], ans: "see steps" },
  { title: "Symmetry", q: String.raw`Test $f(-x)$ for each parent at $x=2$.`,
    steps: [String.raw`$x^2$, $|x|$: $f(-2)=f(2)$ (even, mirror in the y-axis).`, String.raw`$x$, $\frac1x$: $f(-2)=-f(2)$ (odd, half-turn about the origin). $\sqrt x$: $f(-2)$ is not defined.`], ans: "even: x², |x|; odd: x, 1/x; neither: √x" },
  { title: "Increasing and decreasing", q: String.raw`Where is $f(x)=x^2$ decreasing, and where increasing?`,
    fig: F({ view: V5, curves: [PAR.x2], points: [pt(0, 0)] }),
    steps: ["Moving right, the graph falls until x = 0 and then rises."], ans: String.raw`decreasing for $x<0$, increasing for $x>0$` },
  { title: "Between 0 and 1", q: String.raw`Order $x$, $x^2$, $\sqrt x$ at $x=0.36$.`,
    fig: F({ view: { xmin: 0, xmax: 1.5, ymin: 0, ymax: 1.5 }, curves: [PAR.x, PAR.x2, PAR.sqrt], step: { x: 0.25, y: 0.25 } }),
    steps: [String.raw`$x^2=0.1296$, $x=0.36$, $\sqrt x=0.6$.`], ans: String.raw`$x^2<x<\sqrt x$` },
  { title: "A square-root model", q: String.raw`A square has area $A$. Write its side as a function of $A$ and find the side when $A=20.25$.`,
    steps: [String.raw`$s(A)=\sqrt A$.`, String.raw`$\sqrt{20.25}=4.5$.`], ans: "4.5 units" },
  { title: "A reciprocal model", q: String.raw`60 dollars is shared equally by $n$ people. Write the share $S(n)$; find $S(8)$; describe what happens as $n$ grows.`,
    steps: [String.raw`$S(n)=\frac{60}{n}$, $S(8)=7.5$.`, "As n grows the share gets closer to 0 but never reaches it."], ans: "7.50 dollars; the share approaches 0" },
];

const PROBLEMS = [
  { level: 1, q: "Name the parent function in the graph.", recap: "Name the parent.", ans: String.raw`$f(x)=|x|$`,
    fig: F({ view: V5, curves: [PAR.abs] }) },
  { level: 1, q: String.raw`State the domain of $f(x)=\sqrt x$ and of $g(x)=\frac1x$.`, recap: "Domains.", ans: String.raw`$x\ge0$; $x\ne0$` },
  { level: 1, q: String.raw`Evaluate $f(x)=\frac1x$ at $x=-0.25$.`, recap: "Evaluate 1/x.", ans: "$-4$" },
  { level: 2, q: String.raw`Two tables use $x=-2,-1,0,1,2$: (A) $y=4,1,0,1,4$; (B) $y=2,1,0,1,2$. Identify each parent.`, recap: "Two tables.", ans: String.raw`(A) $x^2$; (B) $|x|$` },
  { level: 2, q: String.raw`For which parents is $f(-3)$ undefined?`, recap: "f(−3).", ans: String.raw`only $\sqrt x$` },
  { level: 2, q: "State the range of each of the five parents.", recap: "Ranges.", ans: String.raw`$x$: $\mathbb R$; $x^2,\sqrt x,|x|$: $y\ge0$; $\frac1x$: $y\ne0$` },
  { level: 2, q: String.raw`Which parents pass through $(1,1)$? Which pass through $(-1,1)$?`, recap: "Common points.", ans: String.raw`all five; $x^2$ and $|x|$` },
  { level: 2, q: "Which parent has asymptotes? Name them and explain using values close to 0 and large values.", recap: "Asymptotes.", ans: String.raw`$\frac1x$: $x=0$ ($\frac1{0.001}=1000$) and $y=0$ ($\frac1{1000}=0.001$)` },
  { level: 3, space: 4, q: String.raw`Solve $x^2=\sqrt x$.`, recap: "x² = √x.", ans: String.raw`$x^4=x\Rightarrow x(x^3-1)=0$: $x=0$ or $x=1$`,
    fig: F({ view: { xmin: -0.5, xmax: 2, ymin: -0.5, ymax: 2 }, curves: [PAR.x2, PAR.sqrt], step: { x: 0.5, y: 0.5 } }) },
  { level: 3, space: 4, q: String.raw`For which $x$ is $|x|>x^2$?`, recap: "|x| > x².", ans: String.raw`$-1<x<0$ or $0<x<1$` },
  { level: 3, space: 4, q: String.raw`Solve $\frac1x=|x|$.`, recap: "1/x = |x|.", ans: String.raw`$x=1$ (for $x<0$ the left side is negative)` },
  { level: 3, space: 4, q: String.raw`How many points do $y=\sqrt x$ and $y=\frac1x$ share? Find them.`, recap: "√x and 1/x.", ans: String.raw`one: $(1,1)$` },
  { level: 3, space: 5, q: "Which of the five parents are their own inverses? Justify with a graph or algebra.", recap: "Self-inverse parents.", ans: String.raw`$y=x$ and $y=\frac1x$ (swap $x$, $y$: $x=\frac1y\Rightarrow y=\frac1x$); both are symmetric in $y=x$` },
];

export const WS = {
  code: "1.3",
  title: "Parent Functions",
  bigideas: String.raw`Five parent functions — $x$, $x^2$, $\sqrt x$, $\frac1x$ and $|x|$ — are the building blocks of the chapter. Each has a recognisable shape, a few key points, and a domain and range. $\sqrt x$ needs $x\ge0$; $\frac1x$ excludes $0$ and has asymptotes $x=0$ and $y=0$; $x^2$ and $|x|$ never go below the x-axis.`,
  goals: ["Sketch each parent from key points.", "State domain, range, symmetry and asymptotes.", "Identify parents from tables and graphs.", "Compare parents algebraically."],
  curriculum: "A1.3, A1.8",
  vocab: [["Parent function", "simplest member of a family"], ["Asymptote", "line approached but never reached"], ["Even / odd", "$f(-x)=f(x)$ / $f(-x)=-f(x)$"]],
  hook: "Show five unlabeled graphs and five equations. Groups match them and must give one reason for each match.",
  concepts: [
    ["1. The five shapes", String.raw`${F({ view: V5, curves: Object.values(PAR) }, 6, "grey x, blue x², green √x, red 1/x, amber |x|")}`],
    ["2. Key points", String.raw`$x^2$: $(\pm1,1),(\pm2,4)$. $\sqrt x$: $(1,1),(4,2),(9,3)$. $\frac1x$: $(\pm1,\pm1),(2,\tfrac12),(\tfrac12,2)$. $|x|$: $(\pm1,1),(\pm2,2)$.`],
    ["3. Restrictions", String.raw`$\sqrt x$: only $x\ge0$. $\frac1x$: $x\ne0$, and $\frac1x$ is never $0$.`],
  ],
  tips: ["√x gives the positive root only.", "1/x never crosses its asymptotes.", "x² and |x| share a domain and range but not a shape.", "Between 0 and 1, squaring makes numbers smaller.", "Learn the key points — they drive every transformation."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
