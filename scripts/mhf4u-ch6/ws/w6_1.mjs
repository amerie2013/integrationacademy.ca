// MHF4U Worksheet 6.1 — The Exponential Function and Its Inverse (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };

const EXAMPLES = [
  { title: "Features of a growth function", q: String.raw`State the domain, range, y-intercept, asymptote and behaviour of $y=10^x$, and list the points with $x=-1, 0, 1, 2$.`,
    steps: [String.raw`$10^{-1}=0.1$, $10^0=1$, $10^1=10$, $10^2=100$.`, String.raw`Domain $\mathbb R$; range $y>0$; y-intercept 1; asymptote $y=0$; increasing because $10>1$.`], ans: String.raw`$(-1,0.1)$, $(0,1)$, $(1,10)$, $(2,100)$; domain $\mathbb R$, range $y>0$, HA $y=0$` },
  { title: "Table of values for an inverse", q: String.raw`Make a table for $y=\left(\tfrac13\right)^x$ with $x=-2,\dots,2$, then the table for its inverse.`,
    fig: F({ view: { xmin: -3, xmax: 10, ymin: -3, ymax: 10 }, lines: [YX], curves: [{ f: (x) => (1 / 3) ** x, color: "blue" }, { f: lg(1 / 3), a: 0.01, color: "violet" }], points: [pt(9, -2, null, "violet"), pt(3, -1, null, "violet")], step: { x: 1, y: 1 } }),
    steps: [String.raw`$y$-values: $9, 3, 1, \tfrac13, \tfrac19$.`, String.raw`Swap each pair: $(9,-2)$, $(3,-1)$, $(1,0)$, $\left(\tfrac13,1\right)$, $\left(\tfrac19,2\right)$.`], ans: String.raw`inverse: $(9,-2)$, $(3,-1)$, $(1,0)$, $(\tfrac13,1)$, $(\tfrac19,2)$ — decreasing` },
  { title: "Fractional exponents on the table", q: String.raw`Use $x=-1, 0, \tfrac13, \tfrac23, 1$ to tabulate $y=8^x$ and give five points on its inverse.`,
    steps: [String.raw`$8^{1/3}=2$, $8^{2/3}=4$, $8^{-1}=\tfrac18$.`, String.raw`Swap: $\left(\tfrac18,-1\right)$, $(1,0)$, $\left(2,\tfrac13\right)$, $\left(4,\tfrac23\right)$, $(8,1)$.`], ans: String.raw`$(\tfrac18,-1)$, $(1,0)$, $(2,\tfrac13)$, $(4,\tfrac23)$, $(8,1)$` },
  { title: "Equation of the inverse", q: String.raw`Find the inverse of $y=10^x-4$, its domain and its asymptote.`,
    steps: [String.raw`Swap: $x=10^y-4$, so $10^y=x+4$.`, String.raw`$10^y>0\Rightarrow x>-4$. The asymptote $y=-4$ becomes $x=-4$.`], ans: String.raw`$10^y=x+4$; domain $x>-4$; VA $x=-4$` },
  { title: "A vertical stretch", q: String.raw`Find the inverse of $y=2\cdot3^x$ and its x-intercept.`,
    fig: F({ view: { xmin: -2, xmax: 10, ymin: -2, ymax: 10 }, lines: [YX], curves: [{ f: (x) => 2 * 3 ** x, color: "blue" }, { f: (x) => lg(3)(x / 2), a: 0.01, color: "violet" }], points: [pt(2, 0, null, "violet"), pt(0, 2, null, "blue")], step: { x: 1, y: 1 } }),
    steps: [String.raw`Swap: $x=2\cdot3^y$, so $3^y=\tfrac x2$.`, String.raw`The y-intercept of $y=2\cdot3^x$ is $(0,2)$, so the inverse has x-intercept $(2,0)$.`], ans: String.raw`$3^y=\tfrac x2$; x-intercept 2` },
  { title: "Find the base", q: String.raw`$y=b^x$ passes through $\left(-2,\tfrac1{25}\right)$. Find $b$ and the point on the inverse with $x=125$.`,
    steps: [String.raw`$b^{-2}=\tfrac1{b^2}=\tfrac1{25}\Rightarrow b=5$.`, String.raw`On the inverse, $5^y=125=5^3$.`], ans: String.raw`$b=5$; $(125,3)$` },
  { title: "Estimate an exponent", q: String.raw`Use the inverse of $y=10^x$ to estimate $y$ with $10^y=50$.`,
    fig: F({ view: { xmin: -5, xmax: 110, ymin: -1, ymax: 3 }, curves: [{ f: lg(10), a: 0.05, color: "violet" }], vlines: [{ x: 50, color: "green", dash: true }], points: [pt(50, 1.7, null, "amber"), pt(10, 1, null, "violet"), pt(100, 2, null, "violet")], step: { x: 10, y: 0.5 } }),
    steps: [String.raw`$10^1=10$ and $10^2=100$, so $1<y<2$.`, String.raw`From the graph at $x=50$: $y\approx1.7$. Check $10^{1.7}\approx50.1$.`], ans: String.raw`$y\approx1.70$` },
  { title: "Which inverse is a function?", q: String.raw`Use the horizontal line $y=4$ to decide whether $y=x^2$ and $y=2^x$ have inverses that are functions.`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 7 }, lines: [{ m: 0, b: 4, color: "green", dash: true }], curves: [{ f: (x) => x * x, color: "red" }, { f: (x) => 2 ** x, color: "blue" }], points: [pt(-2, 4, null, "red"), pt(2, 4, null, "blue")], step: { x: 1, y: 1 } }),
    steps: [String.raw`$y=4$ meets $y=x^2$ twice ($x=\pm2$): it fails the horizontal line test.`, String.raw`$y=4$ meets $y=2^x$ once, and so does every horizontal line $y=c$, $c>0$.`], ans: String.raw`only $y=2^x$ has an inverse that is a function` },
  { title: "Shifted decay", q: String.raw`Find the inverse of $y=\left(\tfrac12\right)^x+1$, its domain, x-intercept and behaviour.`,
    steps: [String.raw`Swap: $x=\left(\tfrac12\right)^y+1\Rightarrow\left(\tfrac12\right)^y=x-1$; domain $x>1$.`, String.raw`The original has y-intercept $(0,2)$, so the inverse has x-intercept $(2,0)$; both decrease.`], ans: String.raw`$(\tfrac12)^y=x-1$; domain $x>1$; x-intercept 2; decreasing` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Make a table of values for $y=9^x$ with $x=-1,-\tfrac12,0,\tfrac12,1$, then write the table for its inverse.`, ans: String.raw`$(\tfrac19,-1)$, $(\tfrac13,-\tfrac12)$, $(1,0)$, $(3,\tfrac12)$, $(9,1)$` },
  { level: 1, q: String.raw`State the domain, range, x-intercept and asymptote of the inverse of $y=\left(\tfrac34\right)^x$. Is the inverse increasing or decreasing?`, ans: String.raw`domain $x>0$; range $\mathbb R$; x-int 1; VA $x=0$; decreasing` },
  { level: 1, q: String.raw`$y=1.2^x$ passes through $(0,1)$ and $(2,1.44)$. Give the two matching points on its inverse.`, ans: String.raw`$(1,0)$ and $(1.44,2)$` },
  { level: 2, q: String.raw`Find the equation of the inverse of $y=3^x+2$, with the power isolated. State its domain and asymptote.`, ans: String.raw`$3^y=x-2$; domain $x>2$; VA $x=2$` },
  { level: 2, q: String.raw`Find the inverse of $y=-2^x$. State the domain and range of both functions.`, ans: String.raw`$-2^x$: $\mathbb R$, $y<0$; inverse $x=-2^y$: $x<0$, $\mathbb R$` },
  { level: 2, q: String.raw`$y=b^x$ passes through $\left(3,\tfrac{27}8\right)$. Find $b$, then the y-value on the inverse when $x=\tfrac49$.`, ans: String.raw`$b=\tfrac32$; $(\tfrac32)^y=\tfrac49\Rightarrow y=-2$` },
  { level: 2, space: 4, q: String.raw`The exponential $y=b^x$ shown passes through $(-1,5)$. Find $b$, sketch the inverse on the same grid and label three of its points.`, ans: String.raw`$b=\tfrac15$; e.g. $(5,-1)$, $(1,0)$, $(\tfrac15,1)$`,
    fig: F({ view: { xmin: -3, xmax: 7, ymin: -3, ymax: 7 }, lines: [YX], curves: [{ f: (x) => 0.2 ** x, color: "blue" }], points: [pt(-1, 5), pt(0, 1)], step: { x: 1, y: 1 } }) },
  { level: 2, space: 4, q: String.raw`Use the graph of the inverse of $y=5^x$ to estimate the exponent $y$ with $5^y=30$. Check your estimate.`, ans: String.raw`$y\approx2.1$ ($5^{2.11}\approx29.9$)`,
    fig: F({ view: { xmin: -2, xmax: 40, ymin: -1, ymax: 3 }, curves: [{ f: lg(5), a: 0.02, color: "violet" }], points: [pt(5, 1, null, "violet"), pt(25, 2, null, "violet")], step: { x: 5, y: 0.5 } }) },
  { level: 3, space: 5, q: String.raw`For $f(x)=-3^x+9$: (a) write the inverse with the power isolated; (b) state its domain, range and asymptote; (c) find both intercepts of the inverse; (d) is the inverse increasing or decreasing?`, ans: String.raw`(a) $3^y=9-x$; (b) $x<9$, $\mathbb R$, VA $x=9$; (c) $(8,0)$, $(0,2)$; (d) decreasing`,
    fig: gridT({ xmin: -4, xmax: 10, ymin: -4, ymax: 10 }) },
  { level: 3, space: 5, q: String.raw`$y=b^x$ meets its inverse at $(3,3)$. Find $b$ (exact and to 3 decimals) and explain why a common point of an increasing exponential and its inverse must lie on $y=x$.`, ans: String.raw`$b^3=3\Rightarrow b=\sqrt[3]3\approx1.442$; swapping a point off $y=x$ gives a different point, which an increasing function cannot also pass through` },
  { level: 3, space: 5, q: String.raw`A culture starts with 100 cells and doubles every hour: $P=100\cdot2^t$. (a) Write the inverse, giving $2^t$ in terms of $P$. (b) What do the inputs and outputs of the inverse mean? (c) Use the graph to estimate when $P=1000$.`, ans: String.raw`(a) $2^t=\tfrac P{100}$; (b) input: population, output: time in hours; (c) $t\approx3.3$ h`,
    fig: F({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 3200 }, curves: [{ f: (t) => 100 * 2 ** t, a: 0, color: "blue" }], lines: [{ m: 0, b: 1000, color: "green", dash: true }], step: { x: 0.5, y: 400 }, xlabel: "t (h)", ylabel: "P" }) },
  { level: 3, space: 4, q: String.raw`Explain why $y=1^x$ has no inverse function, and why the base of an exponential function must be positive (try $(-4)^{1/2}$).`, ans: String.raw`$1^x=1$ is a horizontal line (fails the horizontal line test); $(-4)^{1/2}$ is not real, so a negative base leaves gaps in the graph` },
  { level: 3, space: 4, q: String.raw`Let $f(x)=2^x$ and let $g$ be its inverse. Find $g(f(5))$, $f(g(32))$ and $g\!\left(\tfrac18\right)$, and explain why $g(f(x))=x$ for every $x$.`, ans: String.raw`$5$; $32$; $-3$; $g$ returns the exponent that $f$ used` },
];

export const WS = {
  code: "6.1",
  title: "The Exponential Function and Its Inverse",
  bigideas: String.raw`$y=b^x$ ($b>0$, $b\ne1$) has domain $\mathbb R$, range $y>0$, y-intercept 1 and horizontal asymptote $y=0$; it increases for $b>1$ and decreases for $0<b<1$. Because it passes the horizontal line test, its inverse is a function: swap every $(x,y)$ to $(y,x)$, which reflects the graph in $y=x$. The inverse $x=b^y$ has domain $x>0$, range $\mathbb R$, x-intercept 1 and vertical asymptote $x=0$. It is called the logarithmic function $y=\log_b x$ (6.2).`,
  goals: ["State key features of exponential functions.", "Tabulate and graph the inverse by swapping coordinates.", "Write the inverse as $x=b^y$ and state its features.", "Read and estimate values of the inverse from a graph."],
  curriculum: "A2.2, A1.1 (introduced)",
  vocab: [["Inverse", "swap inputs and outputs: $(x,y)\\to(y,x)$"], ["Line of reflection", "$y=x$"], ["Logarithmic function", "the inverse of $y=b^x$, written $y=\\log_b x$"]],
  hook: String.raw`A rumour doubles the number of people who know it every hour, starting with one person. After how many hours do 8 people know? 1000 people? The first question reads $2^x$ forwards; the second asks the exponential to run backwards.`,
  concepts: [
    ["1. Two shapes of exponential", String.raw`Growth ($b>1$) rises to the right; decay ($0<b<1$) falls. Both pass through $(0,1)$ and approach $y=0$.
${F({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 3 ** x, color: "blue" }, { f: (x) => (1 / 3) ** x, color: "violet" }], points: [pt(0, 1, null, "amber")], step: { x: 1, y: 1 } })}`],
    ["2. Swap and reflect", String.raw`Every point $(p,q)$ on $y=b^x$ gives $(q,p)$ on the inverse. Domain and range trade places; the asymptote $y=0$ becomes $x=0$.
${F({ view: { xmin: -3, xmax: 9, ymin: -3, ymax: 9 }, lines: [YX], curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: lg(2), a: 0.01, color: "violet" }], points: [pt(3, 8, null, "blue"), pt(8, 3, null, "violet")], step: { x: 1, y: 1 } })}`],
    ["3. Transformed exponentials", String.raw`For $y=a\cdot b^x+k$, swap and isolate the power: $b^y=\tfrac{x-k}a$. The horizontal asymptote $y=k$ becomes the vertical asymptote $x=k$.`],
  ],
  tips: ["Swap the coordinates, not their signs.", "The inverse is not the reciprocal 1/bˣ.", "Isolate the power before stating the domain of the inverse.", "Asymptote y = k becomes x = k.", "Check one swapped point in both equations."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
