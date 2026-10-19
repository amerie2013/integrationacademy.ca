// MCV4U Worksheet 2.5 — Derivatives of Quotients (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
/** rational curve split at its vertical asymptotes */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V6 = { xmin: -2, xmax: 7, ymin: -6, ymax: 10 };
const V7 = { xmin: -9, xmax: 5, ymin: -16, ymax: 10 };

const EXAMPLES = [
  { title: "Linear over linear", q: S`Differentiate $y=\frac{3x-2}{x+4}$.`,
    steps: [S`$u'v-uv'=3(x+4)-(3x-2)(1)=14$.`], ans: S`$y'=\frac{14}{(x+4)^2}$` },
  { title: "Quadratic over linear", q: S`Differentiate $y=\frac{x^2+1}{x-2}$.`,
    steps: [S`$\frac{2x(x-2)-(x^2+1)}{(x-2)^2}$.`], ans: S`$y'=\frac{x^2-4x-1}{(x-2)^2}$` },
  { title: "A constant numerator", q: S`Differentiate $y=\frac1{x^2-9}$.`,
    steps: [S`$u'=0$: $\frac{0-1\cdot2x}{(x^2-9)^2}$.`], ans: S`$y'=-\frac{2x}{(x^2-9)^2}$` },
  { title: "Rewrite instead", q: S`Differentiate $y=\frac{x-1}{\sqrt x}$ without the quotient rule.`,
    steps: [S`$y=x^{1/2}-x^{-1/2}$.`, S`$y'=\frac12x^{-1/2}+\frac12x^{-3/2}$.`], ans: S`$y'=\frac{1}{2\sqrt x}+\frac1{2x\sqrt x}$` },
  { title: "Evaluate a slope", q: S`For $f(x)=\frac{2x^2}{x+1}$, find $f'(1)$.`,
    steps: [S`$f'=\frac{4x(x+1)-2x^2}{(x+1)^2}$.`, S`$f'(1)=\frac{8-2}{4}$.`], ans: "1.5" },
  { title: "A tangent line", q: S`Find the tangent to $y=\frac{x+3}{x-1}$ at $x=3$.`,
    fig: F({ view: V6, curves: [...rat((x) => (x + 3) / (x - 1), [1], V6), { f: (x) => 6 - x, color: "green" }], vlines: [{ x: 1, color: "red", dash: true }], points: [pt(3, 3)], step: { x: 1, y: 2 } }),
    steps: [S`$y(3)=3$; $y'=\frac{(x-1)-(x+3)}{(x-1)^2}=\frac{-4}{(x-1)^2}$, $y'(3)=-1$.`, S`$y-3=-(x-3)$.`], ans: S`$y=-x+6$` },
  { title: "Horizontal tangents", q: S`Find the points where $y=\frac{x^2+5}{x+2}$ has a horizontal tangent.`,
    fig: F({ view: V7, curves: rat((x) => (x * x + 5) / (x + 2), [-2], V7), vlines: [{ x: -2, color: "red", dash: true }], points: [pt(1, 2), pt(-5, -10)], step: { x: 1, y: 2 } }),
    steps: [S`$y'=\frac{2x(x+2)-(x^2+5)}{(x+2)^2}=\frac{x^2+4x-5}{(x+2)^2}$.`, S`$(x+5)(x-1)=0$: $y(1)=2$, $y(-5)=-10$.`], ans: "(1, 2) and (−5, −10)" },
  { title: "A given slope", q: S`Find the points on $y=\frac{x}{x+2}$ where the tangent has slope $\frac12$.`,
    steps: [S`$y'=\frac{(x+2)-x}{(x+2)^2}=\frac2{(x+2)^2}=\frac12$.`, S`$(x+2)^2=4\Rightarrow x=0$ or $x=-4$.`], ans: "(0, 0) and (−4, 2)" },
  { title: "A population model", q: S`A town's population (thousands) is $P(t)=\frac{600t+200}{t+2}$ after $t$ years. Find $P'(3)$ and explain what happens in the long run.`,
    fig: F({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 700 }, curves: [{ f: (t) => (600 * t + 200) / (t + 2), a: 0, b: 30 }, { f: () => 600, color: "gray" }], points: [pt(3, 400)], step: { x: 5, y: 100 } }),
    steps: [S`$P'(t)=\frac{600(t+2)-(600t+200)}{(t+2)^2}=\frac{1000}{(t+2)^2}$; $P'(3)=40$.`, S`$P'\to0$ and $P\to600$.`], ans: "40 thousand per year at t = 3; levels off toward 600 thousand" },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=\frac1{x+5}$.`, recap: "Constant numerator.", ans: S`$-\frac1{(x+5)^2}$` },
  { level: 1, q: S`Differentiate $y=\frac{x}{x-4}$.`, recap: "u′v − uv′.", ans: S`$-\frac4{(x-4)^2}$` },
  { level: 1, q: S`Differentiate $y=\frac{x+1}{x}$ by rewriting first.`, recap: "1 + x⁻¹.", ans: S`$-\frac1{x^2}$` },
  { level: 2, q: S`For $f(x)=\frac{4x}{x+2}$, find $f'(2)$.`, recap: "f′ = 8/(x + 2)².", ans: "0.5" },
  { level: 2, q: S`Differentiate $y=\frac{x^2-1}{x+3}$ and simplify.`, recap: "Expand the numerator.", ans: S`$\frac{x^2+6x+1}{(x+3)^2}$` },
  { level: 2, q: S`For $y=\frac5{x^2+1}$, find $y'(2)$.`, recap: "−10x/(x² + 1)².", ans: "−0.8" },
  { level: 2, q: S`$f(2)=4$, $f'(2)=1$, $g(2)=2$, $g'(2)=3$. Find $\left(\frac fg\right)'(2)$.`, recap: "(f′g − fg′)/g².", ans: "−2.5" },
  { level: 2, q: S`Find the tangent to $y=\frac{2x}{x-1}$ at $x=2$ and draw it.`, recap: "Point (2, 4).", ans: S`$y=-2x+8$`, fig: gridT({ xmin: -2, xmax: 5, ymin: -2, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Find the points where $y=\frac{x^2+8}{x+1}$ has a horizontal tangent. Sketch the curve with its asymptote.`, recap: "Numerator of y′ = 0.", ans: S`$(x+4)(x-2)=0$: $(2,4)$ and $(-4,-8)$`, fig: gridT({ xmin: -8, xmax: 6, ymin: -14, ymax: 10 }, { x: 1, y: 2 }) },
  { level: 3, space: 5, q: S`Show that $y=\frac{x-1}{x+1}$ has no horizontal tangent and is increasing on each part of its domain.`, recap: "Sign of y′.", ans: S`$y'=\frac{2}{(x+1)^2}\gt0$` },
  { level: 3, space: 5, q: S`Find $a$ so that the tangent to $y=\frac{ax+1}{x+2}$ at $x=0$ has slope 1.`, recap: "y′(0) in terms of a.", ans: S`$\frac{2a-1}{4}=1\Rightarrow a=2.5$` },
  { level: 3, space: 5, q: S`Find the equation of the normal to $y=\frac{x}{x-2}$ at $x=3$.`, recap: "Normal slope = −1/m.", ans: S`$m=-2$; normal $y=0.5x+1.5$` },
  { level: 3, space: 5, q: S`Total sales (thousands) after $t$ months are $S(t)=\frac{80t}{t+4}$. Find $S'(4)$, and the time when sales grow at 1 thousand per month.`, recap: "S′ = 320/(t + 4)².", ans: S`$S'(4)=5$; $(t+4)^2=320\Rightarrow t\approx13.9$ months` },
];

export const WS = {
  code: "2.5",
  title: "Derivatives of Quotients",
  bigideas: S`For a quotient $y=\frac uv$, the quotient rule gives $y'=\frac{u'v-uv'}{v^2}$, valid where $v\neq0$. It follows from writing $\frac uv=uv^{-1}$ and using the product and chain rules. Keep the order in the numerator and leave the denominator squared and factored. To find horizontal tangents, set the numerator of $y'$ to zero. When the denominator is a constant or a single power of $x$, rewriting is faster than the rule.`,
  goals: ["Apply the quotient rule.", "Decide when to rewrite instead.", "Find tangent lines and horizontal tangents of rational functions.", "Interpret derivatives of rational models."],
  curriculum: "A3.3, A3.4, A3.5",
  vocab: [["Quotient rule", "$\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}$"], ["Rational function", "polynomial over polynomial"], ["Horizontal tangent", "$y'=0$"]],
  hook: S`Is $\left(\frac{x^3}{x}\right)'$ equal to $\frac{3x^2}{1}$? Simplify $\frac{x^3}{x}$ first and compare.`,
  concepts: [
    ["1. Low d-high minus high d-low", S`The curve $y=\frac{x}{x^2+4}$ and its derivative $\frac{4-x^2}{(x^2+4)^2}$; the tangents are horizontal at $x=\pm2$:
${F({ view: { xmin: -6, xmax: 6, ymin: -0.4, ymax: 0.4 }, curves: [{ f: (x) => x / (x * x + 4) }, { f: (x) => (4 - x * x) / (x * x + 4) ** 2, color: "blue" }], points: [pt(2, 0.25), pt(-2, -0.25)], step: { x: 1, y: 0.1 } })}`],
    ["2. Simplify the numerator", S`Expand $u'v-uv'$ and collect; never expand $v^2$.`],
    ["3. Rewrite when simple", S`$\frac{x^2+3}{x}=x+3x^{-1}$: no quotient rule needed.`],
  ],
  tips: ["The order is u′v − uv′.", "Square the whole denominator.", "Keep v² factored.", "Check that horizontal-tangent points are in the domain.", "Constant denominators: just divide."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
