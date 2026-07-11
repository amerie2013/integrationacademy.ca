// MHF4U Unit 3 worksheets — Rational Functions.
// Rational graphs are drawn with split domains (around the vertical asymptote)
// plus dashed asymptote lines, so no spurious connecting line appears.
const r = String.raw;
const U = "3: Rational Functions";

// Build a rational-function TikZ graph split at the vertical asymptote va.
const rg = (expr, va, win, ha) => {
  const { xmin, xmax, ymin, ymax } = win;
  const left = (va - 0.18).toFixed(2), right = (va + 0.18).toFixed(2);
  let s = `\\begin{center}\\begin{tikzpicture}\\begin{axis}[width=7.6cm,height=5cm,axis lines=middle,xlabel={\\small$x$},ylabel={\\small$y$},xmin=${xmin},xmax=${xmax},ymin=${ymin},ymax=${ymax},samples=160,restrict y to domain=${ymin - 1}:${ymax + 1}]`;
  s += `\\addplot[exblue,very thick,domain=${xmin}:${left}]{${expr}};`;
  s += `\\addplot[exblue,very thick,domain=${right}:${xmax}]{${expr}};`;
  s += `\\draw[dashed,gray] (axis cs:${va},${ymin})--(axis cs:${va},${ymax});`;
  if (ha !== undefined) s += `\\draw[dashed,gray] (axis cs:${xmin},${ha})--(axis cs:${xmax},${ha});`;
  s += `\\end{axis}\\end{tikzpicture}\\end{center}`;
  return s;
};

export default [
  {
    code: "3.1", unit: U, title: "Reciprocal & Rational Functions",
    intro: r`A rational function $f(x)=\dfrac{p(x)}{q(x)}$ has vertical asymptotes at zeros of $q$, a horizontal asymptote from the degrees, and a hole wherever a factor cancels.`,
    ideas: [r`Vertical asymptote: $q(x)=0$ (no cancel). Domain excludes those $x$.`, r`Horizontal asymptote: lower top $\Rightarrow y=0$; equal degrees $\Rightarrow$ ratio of leading coefficients.`, r`Hole: a common factor of $p$ and $q$.`],
    examples: [
      { t: "Vertical asymptote", body: r`Vertical asymptote of $y=\dfrac{1}{x-3}$?\soln Denominator zero at $x=3$, so the VA is $x=3$.` },
      { t: "Horizontal asymptote", body: r`Horizontal asymptote of $y=\dfrac{1}{x-3}$?\soln Degree of top $(0)<$ degree of bottom $(1)$, so $y=0$.` },
      { t: "The reciprocal graph", body: r`Describe $y=\dfrac1x$.\soln VA $x=0$, HA $y=0$, branches in opposite quadrants:` + rg("1/x", 0, { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }) },
      { t: "Domain", body: r`Domain of $y=\dfrac{1}{x+2}$?\soln Exclude $x=-2$: domain $x\ne-2$.` },
      { t: "Equal degrees", body: r`Horizontal asymptote of $y=\dfrac{2x}{x-1}$?\soln Equal degrees → ratio $\tfrac21$, so $y=2$.` },
      { t: "A hole", body: r`Describe $y=\dfrac{x^2-1}{x-1}$.\soln $\dfrac{(x-1)(x+1)}{x-1}=x+1$ with $x\ne1$: a line with a hole at $x=1$.` },
      { t: "Shifted asymptote", body: r`Vertical asymptote of $y=\dfrac{1}{x-3}$, graphed:\soln VA at $x=3$ (dashed), HA $y=0$:` + rg("1/(x-3)", 3, { xmin: -2, xmax: 8, ymin: -5, ymax: 5 }, 0) },
      { t: "Equal degrees", body: r`Horizontal asymptote of $y=\dfrac{5x}{x+2}$?\soln $y=5$.` },
      { t: "Domain", body: r`Domain of $y=\dfrac{x}{x-4}$?\soln $x\ne4$.` },
    ],
    questions: [
      { ask: r`Vertical asymptote of $y=\dfrac{1}{x-5}$?` },
      { ask: r`Horizontal asymptote of $y=\dfrac{3}{x+1}$?` },
      { ask: r`Domain of $y=\dfrac{x}{x-4}$?` },
      { ask: r`Horizontal asymptote of $y=\dfrac{5x}{x+2}$?` },
      { ask: r`Where is the hole in $y=\dfrac{x^2-4}{x-2}$?` },
      { ask: r`Vertical asymptote of $y=\dfrac{2}{x+3}$?` },
      { ask: r`Horizontal asymptote of $y=\dfrac{4x}{x-7}$?` },
      { ask: r`Domain of $y=\dfrac{1}{x-1}$?` },
      { ask: r`Horizontal asymptote of $y=\dfrac{1}{x^2+1}$?` },
      { ask: r`Vertical asymptote of $y=\dfrac{x+1}{x-6}$?` },
      { ask: r`Simplify $y=\dfrac{x^2-9}{x+3}$ and state any hole.` },
      { ask: r`Horizontal asymptote of $y=\dfrac{3x}{2x-1}$?` },
      { ask: r`State the VA, HA and domain of $y=\dfrac{2x}{x-4}$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$x=5$`, r`$y=0$`, r`$x\ne4$`, r`$y=5$`, r`$x=2$`, r`$x=-3$`, r`$y=4$`, r`$x\ne1$`, r`$y=0$`, r`$x=6$`, r`$x-3$, hole at $x=-3$`, r`$y=\tfrac32$`, r`VA $x=4$, HA $y=2$, $x\ne4$`],
  },
  {
    code: "3.2", unit: U, title: "Graphs of Rational Functions",
    intro: r`Sketch from the skeleton: intercepts, vertical and horizontal asymptotes, and the behaviour on each side of a VA.`,
    ideas: [r`x-intercept: numerator $=0$. y-intercept: evaluate $f(0)$.`, r`VA: denominator $=0$. HA: from the degrees.`, r`Near a VA the curve rushes to $\pm\infty$ — test each side.`],
    examples: [
      { t: "The reciprocal", body: r`Sketch $y=\dfrac1x$.\soln VA $x=0$, HA $y=0$, no intercepts:` + rg("1/x", 0, { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }) },
      { t: "Full skeleton", body: r`For $y=\dfrac{x-2}{x+1}$, find intercepts and asymptotes.\soln x-int $(2,0)$; y-int $f(0)=-2$; VA $x=-1$; HA $y=1$:` + rg("(x-2)/(x+1)", -1, { xmin: -7, xmax: 5, ymin: -5, ymax: 7 }, 1) },
      { t: "Behaviour near a VA", body: r`How does $y=\dfrac{1}{x-2}$ behave near $x=2$?\soln Just left, $y\to-\infty$; just right, $y\to+\infty$:` + rg("1/(x-2)", 2, { xmin: -3, xmax: 7, ymin: -5, ymax: 5 }, 0) },
      { t: "y-intercept", body: r`y-intercept of $y=\dfrac{x+3}{x-1}$?\soln $f(0)=\dfrac{3}{-1}=-3$, so $(0,-3)$.` },
      { t: "End behaviour", body: r`As $x\to\infty$, $y=\dfrac{2x+1}{x-3}\to$?\soln Equal degrees → $\tfrac21$, so $y\to2$.` },
      { t: "VA and HA", body: r`VA and HA of $y=\dfrac{1}{x-4}$?\soln VA $x=4$, HA $y=0$.` },
      { t: "x-intercept", body: r`x-intercept of $y=\dfrac{x-5}{x+2}$?\soln Numerator $0$ at $x=5$: $(5,0)$.` },
      { t: "y-intercept", body: r`y-intercept of $y=\dfrac{x+4}{x-2}$?\soln $f(0)=\dfrac{4}{-2}=-2$: $(0,-2)$.` },
      { t: "Equal degrees", body: r`HA of $y=\dfrac{3x}{x+5}$?\soln $y=3$.` },
    ],
    questions: [
      { ask: r`VA and HA of $y=\dfrac{1}{x-4}$?` },
      { ask: r`x-intercept of $y=\dfrac{x-5}{x+2}$?` },
      { ask: r`y-intercept of $y=\dfrac{x+4}{x-2}$?` },
      { ask: r`HA of $y=\dfrac{3x}{x+5}$?` },
      { ask: r`As $x\to\infty$, $y=\dfrac{x+1}{2x-1}\to$?` },
      { ask: r`VA of $y=\dfrac{x}{x-3}$?` },
      { ask: r`x-intercept of $y=\dfrac{2x-6}{x+4}$?` },
      { ask: r`y-intercept of $y=\dfrac{x-1}{x+5}$?` },
      { ask: r`HA of $y=\dfrac{4x}{x-2}$?` },
      { ask: r`Behaviour of $y=\dfrac{1}{x+1}$ just right of $x=-1$?` },
      { ask: r`x- and y-intercepts of $y=\dfrac{x-3}{x+1}$?` },
      { ask: r`As $x\to\infty$, $y=\dfrac{5x-2}{x+1}\to$?` },
      { ask: r`Find all intercepts and asymptotes of $y=\dfrac{x-1}{x+2}$, then sketch.`, challenge: true, ws: "4cm" },
    ],
    answers: [r`VA $x=4$, HA $y=0$`, r`$(5,0)$`, r`$(0,-2)$`, r`$y=3$`, r`$y=\tfrac12$`, r`$x=3$`, r`$(3,0)$`, r`$(0,-\tfrac15)$`, r`$y=4$`, r`$y\to+\infty$`, r`$(3,0)$ and $(0,-3)$`, r`$y=5$`, r`x-int $(1,0)$, y-int $(0,-\tfrac12)$, VA $x=-2$, HA $y=1$`],
  },
  {
    code: "3.3", unit: U, title: "Solving Rational Equations & Inequalities",
    intro: r`Clear fractions with the LCD and check restrictions; for inequalities, find the critical values (zeros of numerator and denominator) and use a sign chart.`,
    ideas: [r`Equation: multiply by the LCD, solve, reject extraneous roots.`, r`Inequality: get $0$ on one side, find critical values, test intervals.`, r`Denominator zeros are always excluded (open circles).`],
    examples: [
      { t: "Simple equation", body: r`Solve $\dfrac1x=2$.\soln $1=2x\Rightarrow x=\tfrac12$.` },
      { t: "Cross-multiply", body: r`Solve $\dfrac{x+1}{x-2}=3$.\soln $x+1=3(x-2)=3x-6\Rightarrow 7=2x\Rightarrow x=\tfrac72$ (valid).` },
      { t: "Clear the LCD", body: r`Solve $\dfrac2x+1=3$.\soln $\dfrac2x=2\Rightarrow 2=2x\Rightarrow x=1$.` },
      { t: "Inequality", body: r`Solve $\dfrac{x}{x-1}>0$.\soln Critical values $0,1$; signs $+,-,+$. So $x<0$ or $x>1$:` + rg("x/(x-1)", 1, { xmin: -4, xmax: 6, ymin: -5, ymax: 5 }, 1) },
      { t: "Reciprocal inequality", body: r`Solve $\dfrac{1}{x-2}<0$.\soln Negative when $x-2<0$, so $x<2$.` },
      { t: "Cross-multiply", body: r`Solve $\dfrac{x-1}{x+2}=2$.\soln $x-1=2(x+2)=2x+4\Rightarrow x=-5$.` },
      { t: "Clear the LCD", body: r`Solve $\dfrac4x-1=1$.\soln $\dfrac4x=2\Rightarrow x=2$.` },
      { t: "Inequality", body: r`Solve $\dfrac{x}{x+2}>0$.\soln Critical values $-2,0$; positive outside: $x<-2$ or $x>0$.` },
      { t: "Reciprocal inequality", body: r`Solve $\dfrac{1}{x+1}>0$.\soln Positive when $x+1>0$, so $x>-1$.` },
    ],
    questions: [
      { ask: r`Solve $\dfrac3x=6$.` },
      { ask: r`Solve $\dfrac{x-1}{x+2}=2$.` },
      { ask: r`Solve $\dfrac4x-1=1$.` },
      { ask: r`Solve $\dfrac{x}{x+2}>0$.` },
      { ask: r`Solve $\dfrac{1}{x+1}>0$.` },
      { ask: r`Solve $\dfrac5x=10$.` },
      { ask: r`Solve $\dfrac{x+2}{x-1}=3$.` },
      { ask: r`Solve $\dfrac6x+2=5$.` },
      { ask: r`Solve $\dfrac{x}{x-3}<0$.` },
      { ask: r`Solve $\dfrac{1}{x-4}>0$.` },
      { ask: r`Solve $\dfrac{2}{x}=\dfrac{1}{x-1}$.` },
      { ask: r`Solve $\dfrac{x-2}{x+1}\ge0$.` },
      { ask: r`Solve $\dfrac{x+1}{x-2}\le0$ using critical values.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$x=\tfrac12$`, r`$x=-5$`, r`$x=2$`, r`$x<-2$ or $x>0$`, r`$x>-1$`, r`$x=\tfrac12$`, r`$x=\tfrac52$`, r`$x=2$`, r`$0<x<3$`, r`$x>4$`, r`$x=2$`, r`$x\le-1$ or $x>2$`, r`$-1\le x<2$`],
  },
];
