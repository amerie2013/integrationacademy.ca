// MHF4U Worksheet 3.3 — Rational Functions of the Form (ax + b)/(cx + d) (teacher edition)
import { R, gridT, pt, F } from "./figT.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

const EXAMPLES = [
  { title: "All the features", q: S`Find the asymptotes and intercepts of $f(x)=\dfrac{x-3}{x+2}$ and sketch it.`,
    fig: R((x) => (x - 3) / (x + 2), [-2], V, 1, [pt(3, 0), pt(0, -1.5)]),
    steps: [S`VA: $x+2=0\Rightarrow x=-2$. HA: leading coefficients give $y=\frac11=1$.`, S`x-intercept: $x-3=0\Rightarrow x=3$.`, S`y-intercept: $f(0)=-\frac32$.`], ans: S`VA $x=-2$, HA $y=1$, $(3,0)$, $\left(0,-\frac32\right)$` },
  { title: "A stretched horizontal asymptote", q: S`Find the features of $f(x)=\dfrac{4x+2}{x-3}$.`,
    fig: R((x) => (4 * x + 2) / (x - 3), [3], { xmin: -8, xmax: 12, ymin: -10, ymax: 16 }, 4, [pt(-0.5, 0, false), pt(0, -2 / 3, false)], { step: { x: 2, y: 2 } }),
    steps: [S`VA $x=3$; HA $y=\frac41=4$.`, S`x-intercept: $4x+2=0\Rightarrow x=-\frac12$. y-intercept: $-\frac23$.`, S`Domain $x\ne3$; range $y\ne4$.`], ans: S`VA $x=3$, HA $y=4$; intercepts $-\frac12$, $-\frac23$` },
  { title: "Negative c", q: S`Find the asymptotes of $f(x)=\dfrac{3x+2}{5-x}$.`,
    fig: R((x) => (3 * x + 2) / (5 - x), [5], { xmin: -8, xmax: 14, ymin: -14, ymax: 8 }, -3, [pt(0, 0.4, false)], { step: { x: 2, y: 2 } }),
    steps: [S`$5-x=0\Rightarrow x=5$.`, S`Leading coefficients are $3$ and $-1$: HA $y=-3$.`, S`x-intercept $-\frac23$, y-intercept $\frac25$.`], ans: S`VA $x=5$, HA $y=-3$` },
  { title: "A hole", q: S`Describe the graph of $f(x)=\dfrac{5x+10}{x+2}$.`,
    fig: F({ view: { xmin: -6, xmax: 4, ymin: -1, ymax: 8 }, curves: [{ f: () => 5, color: "violet" }], points: [{ x: -2, y: 5, open: true, label: "hole (−2, 5)", color: "red" }] }),
    steps: [S`$\frac{5(x+2)}{x+2}=5$ for $x\ne-2$.`, S`At $x=-2$ there is a hole, not an asymptote, because the factor cancels.`], ans: S`the line $y=5$ with a hole at $(-2,5)$` },
  { title: "A fractional asymptote", q: S`Find the features of $f(x)=\dfrac{x-1}{2x+1}$.`,
    fig: R((x) => (x - 1) / (2 * x + 1), [-0.5], { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, 0.5, [pt(1, 0), pt(0, -1)]),
    steps: [S`VA $x=-\frac12$; HA $y=\frac12$.`, S`x-intercept $1$, y-intercept $-1$.`], ans: S`VA $x=-\frac12$, HA $y=\frac12$, $(1,0)$, $(0,-1)$` },
  { title: "As a transformation of 1/x", q: S`Write $\dfrac{3x+1}{x-2}$ in the form $a+\dfrac k{x-h}$ and describe the transformations.`,
    fig: R((x) => 3 + 7 / (x - 2), [2], { xmin: -6, xmax: 10, ymin: -6, ymax: 12 }, 3, [], { step: { x: 2, y: 2 } }),
    steps: [S`$3x+1=3(x-2)+7$, so $\frac{3x+1}{x-2}=3+\frac7{x-2}$.`, S`From $\frac1x$: vertical stretch by 7, then 2 right and 3 up.`], ans: S`$3+\frac7{x-2}$; asymptotes $x=2$, $y=3$` },
  { title: "An equation from features", q: S`Write a function $\dfrac{ax+b}{cx+d}$ with VA $x=2$, HA $y=-1$ and x-intercept $4$.`,
    fig: R((x) => (-x + 4) / (x - 2), [2], V, -1, [pt(4, 0), pt(0, -2)]),
    steps: [S`Denominator $x-2$, so $c=1$. HA $-1$ means $a=-1$.`, S`Numerator is 0 at $x=4$: $-(x-4)=-x+4$.`], ans: S`$f(x)=\dfrac{-x+4}{x-2}$` },
  { title: "Rising or falling branches", q: S`Show that $f(x)=\dfrac{x+1}{x-2}$ decreases on each branch.`,
    fig: R((x) => (x + 1) / (x - 2), [2], V, 1, [pt(-1, 0), pt(0, -0.5, false)]),
    steps: [S`$\frac{x+1}{x-2}=1+\frac3{x-2}$.`, S`As $x$ increases on one branch, $\frac3{x-2}$ decreases, so $f$ decreases.`, S`Shortcut: $ad-bc=(1)(-2)-(1)(1)=-3\lt0$.`], ans: S`decreasing on $(-\infty,2)$ and on $(2,\infty)$` },
  { title: "End behaviour from a table", q: S`Confirm the horizontal asymptote of $f(x)=\dfrac{2x+3}{x+4}$ numerically.`,
    fig: R((x) => (2 * x + 3) / (x + 4), [-4], { xmin: -14, xmax: 8, ymin: -8, ymax: 12 }, 2, [], { step: { x: 2, y: 2 } }),
    steps: [S`$f(100)=\frac{203}{104}\approx1.952$; $f(1000)=\frac{2003}{1004}\approx1.995$.`, S`$f(-100)=\frac{-197}{-96}\approx2.052$; $f(-1000)=\frac{-1997}{-996}\approx2.005$.`, S`Values approach 2 from below on the right and from above on the left.`], ans: S`HA $y=2$` },
];

const PROBLEMS = [
  { level: 1, q: S`State the vertical asymptote of $y=\dfrac{x+9}{x-8}$.`, ans: S`$x=8$` },
  { level: 1, q: S`State the horizontal asymptote of $y=\dfrac{6x-1}{3x+5}$.`, ans: S`$y=2$` },
  { level: 1, q: S`Find the x-intercept of $y=\dfrac{2x-10}{x+1}$.`, ans: S`$x=5$` },
  { level: 2, q: S`Find the features of $y=\dfrac{x+4}{x-2}$ and sketch it on the grid.`, fig: gridT({ xmin: -8, xmax: 8, ymin: -8, ymax: 8 }), ans: S`VA $x=2$, HA $y=1$, $(-4,0)$, $(0,-2)$` },
  { level: 2, q: S`State the asymptotes, intercepts, domain and range of $y=\dfrac{3x-9}{x+1}$.`, ans: S`VA $x=-1$, HA $y=3$; $(3,0)$, $(0,-9)$; $x\ne-1$, $y\ne3$` },
  { level: 2, q: S`Describe the graph of $y=\dfrac{4x-12}{x-3}$.`, ans: S`the line $y=4$ with a hole at $(3,4)$` },
  { level: 2, q: S`Write $\dfrac{4x+5}{x+1}$ in the form $a+\dfrac k{x-h}$.`, ans: S`$4+\dfrac1{x+1}$` },
  { level: 2, q: S`Write a function with VA $x=1$, HA $y=3$ and y-intercept $2$.`, ans: S`$y=\dfrac{3x-2}{x-1}$` },
  { level: 3, space: 5, q: S`$f(x)=\dfrac{ax+b}{x+d}$ has VA $x=-1$, HA $y=4$ and passes through $(1,1)$. Find $a$, $b$, $d$ and the x-intercept.`, ans: S`$a=4$, $b=-2$, $d=1$; x-intercept $\frac12$` },
  { level: 3, space: 5, q: S`Show that the inverse of $f(x)=\dfrac{2x+1}{x-3}$ is $f^{-1}(x)=\dfrac{3x+1}{x-2}$. How do the asymptotes of $f$ and $f^{-1}$ compare?`, ans: S`$y(x-3)=2x+1\Rightarrow x(y-2)=3y+1$; the asymptotes swap: $x=3,y=2$ and $x=2,y=3$` },
  { level: 3, space: 5, q: S`Show algebraically that $f(x)=\dfrac{ax+b}{cx+d}$ can never equal $\frac ac$ unless $ad=bc$, and say what the graph is when $ad=bc$.`, ans: S`$c(ax+b)=a(cx+d)\Rightarrow bc=ad$; if $ad=bc$ the fraction is a constant: a horizontal line with a hole` },
  { level: 3, space: 5, q: S`For $f(x)=\dfrac{x+k}{x-2}$: (a) find $k$ for a hole; (b) find the values of $k$ for which $f$ decreases on each branch.`, ans: S`(a) $k=-2$; (b) $k>-2$` },
  { level: 3, space: 5, q: S`For $f(x)=\dfrac{2x}{x+1}$, find the average rate of change on $[1,3]$ and estimate the instantaneous rate at $x=1$.`, fig: gridT({ xmin: -1, xmax: 6, ymin: -1, ymax: 3 }, { x: 1, y: 0.5 }), ans: S`$\frac14$; about $\frac12$` },
];

export const WS = {
  code: "3.3",
  title: "Rational Functions of the Form (ax + b)/(cx + d)",
  bigideas: S`A rational function $f(x)=\dfrac{ax+b}{cx+d}$ is a transformed hyperbola. The zero of the denominator gives the vertical asymptote $x=-\frac dc$. For large $|x|$, only the leading terms matter, so the horizontal asymptote is $y=\frac ac$. The zero of the numerator gives the x-intercept. If numerator and denominator share a factor, the graph is a horizontal line with a single missing point, called a hole.`,
  goals: ["Find vertical and horizontal asymptotes.", "Find intercepts, domain and range.", "Recognize a hole.", "Rewrite as a transformation of $\\frac1x$.", "Find an equation from features."],
  curriculum: "C2.2, C2.3",
  vocab: [["Rational function", "a quotient of two polynomials"], ["Horizontal asymptote", "$y=\\frac ac$ for this family"], ["Hole", "a single missing point where a common factor cancels"], ["Branch", "one of the two connected pieces of the hyperbola"]],
  hook: S`Enter $\frac{2x+1}{x-3}$ for $x=10$, $100$, $1000$ and $10000$. What number is the output heading toward, and why does the $+1$ and the $-3$ stop mattering?`,
  concepts: [
    ["1. Reading the features", S`\begin{tabular}{@{}lll@{}}\textbf{Feature} & \textbf{How to find it} & \textbf{For $\frac{2x-6}{x+1}$}\\ vertical asymptote & $cx+d=0$ & $x=-1$\\ horizontal asymptote & $y=\frac ac$ & $y=2$\\ x-intercept & $ax+b=0$ & $x=3$\\ y-intercept & $f(0)=\frac bd$ & $y=-6$\\ domain, range & $x\ne-\frac dc$, $y\ne\frac ac$ & $x\ne-1$, $y\ne2$\end{tabular}
${R((x) => (2 * x - 6) / (x + 1), [-1], { xmin: -8, xmax: 8, ymin: -8, ymax: 10 }, 2, [pt(3, 0), pt(0, -6)])}`],
    ["2. Why the horizontal asymptote is $a/c$", S`Divide the top and bottom by $x$: $\dfrac{ax+b}{cx+d}=\dfrac{a+\frac bx}{c+\frac dx}$. As $|x|\to\infty$, $\frac bx$ and $\frac dx$ approach 0, so the quotient approaches $\frac ac$.`],
    ["3. Holes", S`If $cx+d$ is a factor of $ax+b$, then the fraction simplifies to a constant, except at the zero of the denominator. This happens exactly when $ad-bc=0$. The graph is a horizontal line with an open circle.`],
    ["4. As a transformation", S`Dividing gives $\dfrac{ax+b}{cx+d}=\dfrac ac+\dfrac{k}{cx+d}$. For example, $\frac{2x+3}{x-1}$ becomes $2+\frac5{x-1}$: stretch $\frac1x$ by 5, translate 1 right and 2 up. The centre of the hyperbola is where the asymptotes cross.`],
    ["5. Rising or falling", S`The sign of $ad-bc$ decides: positive means increasing on each branch, negative means decreasing on each branch.`],
  ],
  tips: ["The HA uses leading coefficients, not constants.", "In $\\frac{2x+1}{4-x}$ the denominator's leading coefficient is $-1$.", "Check for a common factor BEFORE drawing a vertical asymptote.", "$\\frac bd$ is the y-intercept only if $d\\ne0$.", "Range: exclude the HA value (and the hole's value, for the hole case)."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
