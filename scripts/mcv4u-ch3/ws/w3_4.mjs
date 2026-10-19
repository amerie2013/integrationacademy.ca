// MCV4U Worksheet 3.4 — Simple Rational Functions (teacher edition)
import { F, gridT, pt, ho } from "./figT.mjs";

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
    steps: [S`Vertical asymptote $x=-1$; equal degrees: $y=2$.`, S`Intercepts $\left(\frac32,0\right)$ and $(0,-3)$.`, S`$f'(x)=\frac{2(x+1)-(2x-3)}{(x+1)^2}=\frac{5}{(x+1)^2}\gt0$.`], ans: S`asymptotes $x=-1$, $y=2$; increasing on each branch` },
  { title: "An odd function", q: S`Analyze $f(x)=\frac{x}{x^2-9}$.`,
    fig: F({ view: V2, curves: rat((x) => x / (x * x - 9), [-3, 3], V2), vlines: [{ x: -3, color: "red", dash: true }, { x: 3, color: "red", dash: true }], points: [pt(0, 0)], step: { x: 1, y: 1 } }),
    steps: [S`Vertical asymptotes $x=\pm3$; horizontal $y=0$; odd.`, S`$f'(x)=\frac{(x^2-9)-2x^2}{(x^2-9)^2}=\frac{-(x^2+9)}{(x^2-9)^2}\lt0$.`], ans: S`decreasing on every piece; no extrema; passes through $(0,0)$` },
  { title: "Near a vertical asymptote", q: S`Describe $f(x)=\frac{x-3}{x+2}$ near $x=-2$.`,
    steps: [S`Near $-2$ the numerator is about $-5$.`, S`$x\to-2^-$: denominator $\to0^-$, so $f\to+\infty$; $x\to-2^+$: $f\to-\infty$.`], ans: S`$+\infty$ on the left, $-\infty$ on the right; horizontal asymptote $y=1$` },
  { title: "An oblique asymptote", q: S`Analyze $f(x)=\frac{x^2-2x+5}{x-1}$.`,
    fig: F({ view: V4, curves: rat((x) => (x * x - 2 * x + 5) / (x - 1), [1], V4), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 1, b: -1, color: "red", dash: true }], points: [pt(3, 4), pt(-1, -4)], step: { x: 1, y: 2 } }),
    steps: [S`$f(x)=x-1+\frac{4}{x-1}$: asymptotes $x=1$ and $y=x-1$.`, S`$f'(x)=1-\frac4{(x-1)^2}=0\Rightarrow x=3$ or $x=-1$.`], ans: S`local minimum $(3,4)$, local maximum $(-1,-4)$` },
  { title: "Hole or asymptote?", q: S`Compare $f(x)=\frac{x+2}{x^2-4}$ at $x=-2$ and at $x=2$.`,
    fig: F({ view: V5, curves: rat((x) => 1 / (x - 2), [2], V5), vlines: [{ x: 2, color: "red", dash: true }], points: [ho(-2, -0.25)], step: { x: 1, y: 1 } }),
    steps: [S`$f(x)=\frac{x+2}{(x+2)(x-2)}=\frac{1}{x-2}$ for $x\ne-2$.`, S`At $-2$ the factor cancels: a hole at $\left(-2,-\frac14\right)$. At $2$: vertical asymptote.`], ans: S`hole at $\left(-2,-\frac14\right)$; vertical asymptote $x=2$` },
  { title: "A squared denominator", q: S`Analyze $f(x)=\frac{1}{(x+1)^2}$.`,
    fig: F({ view: V6, curves: rat((x) => 1 / (x + 1) ** 2, [-1], V6), vlines: [{ x: -1, color: "red", dash: true }], points: [pt(0, 1)], step: { x: 1, y: 1 } }),
    steps: [S`Vertical asymptote $x=-1$, with $f\to+\infty$ on both sides; $y=0$ horizontal.`, S`$f'(x)=\frac{-2}{(x+1)^3}$: positive for $x\lt-1$, negative for $x\gt-1$.`], ans: S`increasing on $(-\infty,-1)$, decreasing on $(-1,\infty)$; always positive` },
  { title: "Crossing the horizontal asymptote", q: S`Find the extrema of $f(x)=\frac{x+2}{x^2+5}$.`,
    fig: F({ view: { xmin: -12, xmax: 8, ymin: -0.3, ymax: 0.7 }, curves: [{ f: (x) => (x + 2) / (x * x + 5) }], points: [pt(-5, -0.1), pt(1, 0.5), pt(-2, 0)], step: { x: 2, y: 0.1 } }),
    steps: [S`$f'(x)=\frac{(x^2+5)-2x(x+2)}{(x^2+5)^2}=\frac{-(x+5)(x-1)}{(x^2+5)^2}$.`, S`$f(-5)=-0.1$, $f(1)=0.5$; the graph crosses $y=0$ at $x=-2$.`], ans: S`minimum $(-5,-0.1)$, maximum $(1,0.5)$` },
  { title: "Concavity of a rational function", q: S`Find the inflection points of $f(x)=\frac{1}{x^2+3}$.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -0.1, ymax: 0.45 }, curves: [{ f: (x) => 1 / (x * x + 3) }], points: [pt(1, 0.25), pt(-1, 0.25), pt(0, 1 / 3)], step: { x: 1, y: 0.05 } }),
    steps: [S`$f'(x)=\frac{-2x}{(x^2+3)^2}$; $f''(x)=\frac{6x^2-6}{(x^2+3)^3}$.`, S`$f''$ changes sign at $x=\pm1$; $f(\pm1)=\frac14$.`], ans: S`inflection points $\left(\pm1,\frac14\right)$; maximum $\left(0,\frac13\right)$` },
  { title: "Average cost", q: S`Producing $x$ items costs $500+8x$ dollars. Describe the average cost $A(x)=\frac{500+8x}{x}$.`,
    steps: [S`$A(x)=8+\frac{500}{x}$: horizontal asymptote $A=8$; $A'(x)=-\frac{500}{x^2}\lt0$.`], ans: "decreasing toward 8 dollars per item as production grows" },
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
