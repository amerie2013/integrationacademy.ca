// MCV4U Worksheet 3.4 — Simple Rational Functions (teacher edition)
import { F, gridT, pt, ho } from "./figT.mjs";
import { chartT } from "../csign.mjs";
import { tvT } from "../../mcr3u-extables.mjs";
import { field, box, can, poster } from "../diagrams.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V2 = { xmin: -7, xmax: 7, ymin: -3, ymax: 3 };
const V4 = { xmin: -5, xmax: 7, ymin: -10, ymax: 12 };
const V5 = { xmin: -5, xmax: 5, ymin: -5, ymax: 7 };
const V6 = { xmin: -5, xmax: 3, ymin: -1, ymax: 6 };
const V0 = { xmin: -7, xmax: 7, ymin: -4, ymax: 8 };

const EXAMPLES = [
  { title: "Asymptotes and intercepts", q: S`Find the asymptotes and intercepts of $f(x)=\frac{2x-3}{x+1}$, and decide where it increases.`,
    fig: F({ view: V0, curves: rat((x) => (2 * x - 3) / (x + 1), [-1], V0), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [pt(1.5, 0), pt(0, -3)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Vertical:} denominator $0$ at $x=-1$, numerator $-5\ne0$: asymptote $x=-1$.`,
      S`\textbf{Horizontal:} equal degrees, so $y=\frac21=2$.`,
      S`\textbf{Intercepts:} $2x-3=0\Rightarrow\left(\frac32,0\right)$; $f(0)=-3$.`,
      S`\textbf{Derivative:} $f'(x)=\frac{2(x+1)-(2x-3)}{(x+1)^2}=\frac{5}{(x+1)^2}>0$ on each branch (chart below).`],
    tab: chartT({ cuts: [[-1, "-1"]], undef: [-1], d: ["f'(x)", (x) => 5 / (x + 1) ** 2] }),
    ans: S`asymptotes $x=-1$, $y=2$; intercepts $\left(\frac32,0\right)$, $(0,-3)$; increasing on each branch` },
  { title: "An odd function", q: S`Analyze $f(x)=\frac{x}{x^2-9}$.`,
    fig: F({ view: V2, curves: rat((x) => x / (x * x - 9), [-3, 3], V2), vlines: [{ x: -3, color: "red", dash: true }, { x: 3, color: "red", dash: true }], points: [pt(0, 0)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Asymptotes:} $x^2-9=0$ at $x=\pm3$ (numerator $\pm3\ne0$); top degree smaller: $y=0$.`,
      S`\textbf{Symmetry:} $f(-x)=\frac{-x}{x^2-9}=-f(x)$: odd.`,
      S`\textbf{Derivative:} $f'(x)=\frac{(x^2-9)-x(2x)}{(x^2-9)^2}=\frac{-(x^2+9)}{(x^2-9)^2}$. The numerator is never $0$ and always negative.`,
      S`\textbf{Check:} $f(4)=\frac47\approx0.57$, $f(6)=\frac{6}{27}\approx0.22$: falling \checkmark`],
    tab: chartT({ cuts: [[-3, "-3"], [3, "3"]], undef: [-3, 3], d: ["f'(x)", (x) => -(x * x + 9) / (x * x - 9) ** 2] }),
    ans: S`decreasing on every piece; no extrema; passes through $(0,0)$` },
  { title: "Near a vertical asymptote", q: S`Describe $f(x)=\frac{x-3}{x+2}$ near $x=-2$.`,
    fig: F({ view: { xmin: -8, xmax: 5, ymin: -8, ymax: 10 }, curves: rat((x) => (x - 3) / (x + 2), [-2], { xmin: -8, xmax: 5 }), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [pt(3, 0), pt(0, -1.5)], step: { x: 1, y: 2 } }),
    steps: [S`\textbf{Why it blows up:} near $x=-2$ the numerator is about $-5$ and the denominator is tiny.`,
      S`\textbf{Left:} $x<-2$ makes $x+2$ tiny and negative: $\frac{-5}{0^-}\to+\infty$.`,
      S`\textbf{Right:} $x+2$ tiny and positive: $\frac{-5}{0^+}\to-\infty$.`,
      S`\textbf{Check:} the table below agrees; far away $f\to\frac11=1$.`],
    tab: S`\begin{center}${tvT(["$x$", "$-2.1$", "$-2.01$", "$-1.99$", "$-1.9$"], ["$f(x)$", "$\\frac{-5.1}{-0.1}=51$", "$\\frac{-5.01}{-0.01}=501$", "$\\frac{-4.99}{0.01}=-499$", "$\\frac{-4.9}{0.1}=-49$"])}\end{center}`,
    ans: S`$+\infty$ on the left, $-\infty$ on the right; horizontal asymptote $y=1$` },
  { title: "An oblique asymptote", q: S`Analyze $f(x)=\frac{x^2-2x+5}{x-1}$.`,
    fig: F({ view: V4, curves: rat((x) => (x * x - 2 * x + 5) / (x - 1), [1], V4), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 1, b: -1, color: "red", dash: true }], points: [pt(3, 4), pt(-1, -4)], step: { x: 1, y: 2 } }),
    steps: [S`\textbf{Rewrite:} $x^2-2x+5=(x-1)^2+4$, so $f(x)=(x-1)+\frac{4}{x-1}$.`,
      S`\textbf{Asymptotes:} $\frac{4}{x-1}\to0$ far away, so $y=x-1$; vertical $x=1$.`,
      S`\textbf{Derivative:} $f'(x)=1-\frac{4}{(x-1)^2}=\frac{(x-1)^2-4}{(x-1)^2}=\frac{(x-3)(x+1)}{(x-1)^2}$.`,
      S`\textbf{Values:} $f(3)=2+2=4$ (min), $f(-1)=-2-2=-4$ (max).`],
    tab: chartT({ cuts: [[-1, "-1"], [1, "1"], [3, "3"]], undef: [1], d: ["f'(x)", (x) => 1 - 4 / (x - 1) ** 2] }),
    ans: S`local minimum $(3,4)$, local maximum $(-1,-4)$; asymptotes $x=1$ and $y=x-1$` },
  { title: "Hole or asymptote?", q: S`Compare $f(x)=\frac{x+2}{x^2-4}$ at $x=-2$ and at $x=2$.`,
    fig: F({ view: V5, curves: rat((x) => 1 / (x - 2), [2], V5), vlines: [{ x: 2, color: "red", dash: true }], points: [ho(-2, -0.25)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Factor:} $f(x)=\frac{x+2}{(x+2)(x-2)}$.`,
      S`\textbf{At $x=-2$:} the factor cancels, so $f(x)=\frac{1}{x-2}$ for $x\ne-2$. The graph has a hole at $\left(-2,\frac{1}{-4}\right)$.`,
      S`\textbf{At $x=2$:} the numerator is $4\ne0$ and the denominator is $0$: vertical asymptote.`,
      S`\textbf{Check} (table below): values near $-2$ settle at $-0.25$; near $2$ they blow up.`],
    tab: S`\begin{center}${tvT(["$x$", "$-2.01$", "$-1.99$", "$1.99$", "$2.01$"], ["$f(x)$", "$-0.2494$", "$-0.2506$", "$-100$", "$100$"])}\end{center}`,
    ans: S`hole at $\left(-2,-\frac14\right)$; vertical asymptote $x=2$` },
  { title: "A squared denominator", q: S`Analyze $f(x)=\frac{1}{(x+1)^2}$.`,
    fig: F({ view: V6, curves: rat((x) => 1 / (x + 1) ** 2, [-1], V6), vlines: [{ x: -1, color: "red", dash: true }], points: [pt(0, 1)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Sign of $f$:} a square in the denominator is positive, so $f>0$ everywhere: $f\to+\infty$ on \emph{both} sides of $x=-1$.`,
      S`\textbf{Horizontal:} $y=0$, approached from above.`,
      S`\textbf{Derivative:} $f(x)=(x+1)^{-2}$, $f'(x)=-2(x+1)^{-3}=\frac{-2}{(x+1)^3}$.`,
      S`\textbf{Check:} $f(0)=1>f(1)=\frac14$: falling on the right \checkmark`],
    tab: chartT({ cuts: [[-1, "-1"]], undef: [-1], d: ["f'(x)", (x) => -2 / (x + 1) ** 3] }),
    ans: S`increasing on $(-\infty,-1)$, decreasing on $(-1,\infty)$; always positive` },
  { title: "Crossing the horizontal asymptote", q: S`Find the extrema of $f(x)=\frac{x+2}{x^2+5}$.`,
    fig: F({ view: { xmin: -12, xmax: 8, ymin: -0.3, ymax: 0.7 }, curves: [{ f: (x) => (x + 2) / (x * x + 5) }], points: [pt(-5, -0.1), pt(1, 0.5), pt(-2, 0)], step: { x: 2, y: 0.1 } }),
    steps: [S`\textbf{Quotient rule numerator:} $(x^2+5)-2x(x+2)=-x^2-4x+5=-(x+5)(x-1)$.`,
      S`\textbf{So} $f'(x)=\frac{-(x+5)(x-1)}{(x^2+5)^2}$; the denominator is positive.`,
      S`\textbf{Values:} $f(-5)=\frac{-3}{30}=-0.1$ (min), $f(1)=\frac36=0.5$ (max).`,
      S`\textbf{Asymptote $y=0$:} the graph crosses it at $x=-2$ and then approaches it from below on the left \checkmark`],
    tab: chartT({ cuts: [[-5, "-5"], [1, "1"]], d: ["f'(x)", (x) => (-(x + 5) * (x - 1)) / (x * x + 5) ** 2] }),
    ans: S`minimum $(-5,-0.1)$, maximum $(1,0.5)$` },
  { title: "Concavity of a rational function", q: S`Find the inflection points of $f(x)=\frac{1}{x^2+3}$.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -0.1, ymax: 0.45 }, curves: [{ f: (x) => 1 / (x * x + 3) }], points: [pt(1, 0.25), pt(-1, 0.25), pt(0, 1 / 3)], step: { x: 1, y: 0.05 } }),
    steps: [S`\textbf{First derivative:} $f(x)=(x^2+3)^{-1}$, so $f'(x)=-2x(x^2+3)^{-2}$.`,
      S`\textbf{Second (product rule):} $f''=-2(x^2+3)^{-2}+8x^2(x^2+3)^{-3}=\frac{6x^2-6}{(x^2+3)^3}$.`,
      S`\textbf{Zeros:} $6(x^2-1)=0$ at $x=\pm1$; sign changes at both (chart below).`,
      S`\textbf{Points:} $f(\pm1)=\frac14$. Max at $\left(0,\frac13\right)$ since $f'$ goes $+\to-$.`],
    tab: chartT({ kind: "conc", cuts: [[-1, "-1"], [1, "1"]], d: ["f''(x)", (x) => (6 * x * x - 6) / (x * x + 3) ** 3] }),
    ans: S`inflection points $\left(\pm1,\frac14\right)$; maximum $\left(0,\frac13\right)$` },
  { title: "Average cost", q: S`Producing $x$ items costs $500+8x$ dollars. Describe the average cost $A(x)=\frac{500+8x}{x}$.`,
    fig: F({ view: { xmin: 0, xmax: 200, ymin: 0, ymax: 60 }, curves: [{ f: (x) => 8 + 500 / x, a: 9, b: 200 }], lines: [{ m: 0, b: 8, color: "red", dash: true }], points: [pt(50, 18), pt(100, 13)], step: { x: 20, y: 10 } }),
    steps: [S`\textbf{Split:} $A(x)=\frac{500}{x}+\frac{8x}{x}=8+\frac{500}{x}$.`,
      S`\textbf{Asymptote:} $\frac{500}{x}\to0$, so $A\to8$: the cost per item approaches the 8-dollar material cost.`,
      S`\textbf{Derivative:} $A'(x)=-\frac{500}{x^2}<0$: always decreasing.`,
      S`\textbf{Check} (table below): spreading the fixed 500 dollars over more items lowers $A$.`],
    tab: S`\begin{center}${tvT(["$x$", "10", "50", "100", "500"], ["$A(x)$", "58", "18", "13", "9"])}\end{center}`,
    ans: "decreasing toward 8 dollars per item as production grows" },
];


const PROBLEMS = [
  { level: 1, q: S`Find the vertical asymptote of $f(x)=\frac{x+7}{2x-6}$.`, recap: "Denominator = 0.", ans: S`$x=3$` },
  { level: 1, q: S`Find the horizontal asymptote of $f(x)=\frac{4x+1}{2x-5}$.`, recap: "Leading coefficients.", ans: S`$y=2$` },
  { level: 1, q: S`Find the y-intercept of $f(x)=\frac{x-6}{x+3}$.`, recap: "f(0).", ans: S`$-2$` },
  { level: 2, q: S`Find the asymptotes and intercepts of $f(x)=\frac{x+4}{x-1}$.`, recap: "Denominator, degrees, zeros.", ans: S`$x=1$, $y=1$; $(-4,0)$, $(0,-4)$` },
  { level: 2, q: S`Analyze $f(x)=\frac{x^2}{x^2+9}$: asymptote, symmetry and extrema.`, recap: "f′ = 18x/(x² + 9)².", ans: S`$y=1$; even; minimum $(0,0)$` },
  { level: 2, q: S`Describe $f(x)=\frac{2x}{x-5}$ on each side of $x=5$.`, recap: "Numerator near 10.", ans: S`$-\infty$ on the left, $+\infty$ on the right` },
  { level: 2, q: S`Find the oblique asymptote of $f(x)=\frac{3x^2-x+2}{x}$.`, recap: "Divide each term by x.", ans: S`$y=3x-1$` },
  { level: 2, q: S`Sketch $f(x)=\frac{-2}{x+3}$ with its asymptotes.`, recap: "Reflection of 2/(x + 3).", ans: S`asymptotes $x=-3$, $y=0$; increasing on each branch`, fig: gridT({ xmin: -8, xmax: 3, ymin: -5, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Analyze $f(x)=\frac{x^2+2}{x^2-4}$: asymptotes, intervals, extrema. Sketch it.`, recap: "f = 1 + 6/(x² − 4).", ans: S`$x=\pm2$, $y=1$; $f'=\frac{-12x}{(x^2-4)^2}$: local maximum $\left(0,-\frac12\right)$`, fig: gridT({ xmin: -6, xmax: 6, ymin: -5, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Analyze $f(x)=\frac{x^2}{x-4}$: asymptotes and extrema.`, recap: "Divide: x + 4 + 16/(x − 4).", ans: S`$x=4$, $y=x+4$; max $(0,0)$, min $(8,16)$` },
  { level: 3, space: 5, q: S`Find $a$ and $b$ so that $f(x)=\frac{ax+b}{x-2}$ has horizontal asymptote $y=3$ and passes through $(0,1)$.`, recap: "a is the asymptote; f(0) = b/(−2).", ans: S`$a=3$, $b=-2$` },
  { level: 3, space: 5, q: S`Explain why $f(x)=\frac{x-1}{x^2-1}$ has only one vertical asymptote, and locate its hole.`, recap: "Factor and cancel.", ans: S`$f=\frac1{x+1}$ ($x\ne1$): asymptote $x=-1$; hole $\left(1,\frac12\right)$` },
  { level: 3, space: 5, q: S`A population is $P(t)=\frac{400t+200}{t+4}$. Find its long-run value and $P'(3)$.`, recap: "Horizontal asymptote; quotient rule.", ans: S`approaches 400; $P'(t)=\frac{1400}{(t+4)^2}$, $P'(3)\approx28.6$` },
];

export const WS = {
  code: "3.4",
  title: "Simple Rational Functions",
  bigideas: S`For $f(x)=\frac{p(x)}{q(x)}$: vertical asymptotes occur at zeros of $q$ that do not cancel with $p$ (a cancelled factor leaves a hole). End behaviour: degree of $p$ less than degree of $q$ gives $y=0$; equal degrees give the ratio of leading coefficients; one degree higher gives an oblique asymptote from long division. Near $x=a$, the signs of $p$ and $q$ decide $\pm\infty$. Then $f'$ gives intervals and extrema, and $f''$ gives concavity — cutting the number line at the asymptotes.`,
  goals: ["Find vertical, horizontal and oblique asymptotes.", "Describe behaviour near vertical asymptotes.", "Distinguish holes from asymptotes.", "Use f′ and f″ to sketch."],
  curriculum: "B1.5",
  vocab: [["Vertical asymptote", "$x=a$ where $|f|\\to\\infty$"], ["Horizontal asymptote", "$y=L$ as $x\\to\\pm\\infty$"], ["Hole", "a removable discontinuity"]],
  hook: S`Evaluate $\frac{1}{x-2}$ at $x=1.9$, $1.99$, $2.01$, $2.1$ and at $x=1000$. What two lines does the graph hug?`,
  concepts: [
    ["1. Asymptotes frame the graph", S`$f(x)=\frac{2x-3}{x+1}$ with $x=-1$ and $y=2$:
${F({ view: V0, curves: rat((x) => (2 * x - 3) / (x + 1), [-1], V0), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [pt(1.5, 0), pt(0, -3)], step: { x: 1, y: 1 } })}`],
    ["2. Degrees", S`$\deg p\lt\deg q$: $y=0$; equal: ratio; one more: divide.`],
    ["3. Calculus", S`Sign charts of $f'$ and $f''$ are cut at the asymptotes as well as at their zeros.`],
  ],
  tips: ["Cancel common factors first: holes are not asymptotes.", "Graphs may cross horizontal asymptotes.", "Squared factors: same sign on both sides.", "Cut sign charts at asymptotes.", "Label asymptotes as equations."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
