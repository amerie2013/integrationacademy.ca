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
    intro: r`A rational function $f(x)=\dfrac{p(x)}{q(x)}$ has vertical asymptotes at zeros of $q$ that do not cancel, a horizontal asymptote from the degrees, and a hole wherever a factor cancels. In every step, write the \textbf{whole function}, even when you are only working on its numerator or denominator.`,
    ideas: [r`Vertical asymptote: set the denominator to $0$ and check the numerator is not $0$ there. The domain excludes every such $x$.`, r`Horizontal asymptote: lower top $\Rightarrow y=0$; equal degrees $\Rightarrow$ ratio of leading coefficients; higher top $\Rightarrow$ none.`, r`Hole: factor, cancel, then substitute the cancelled $x$ into the simplified function to get its height.`],
    examples: [
      { t: "Vertical asymptote", body: r`Vertical asymptote of $y=\dfrac{1}{x-3}$?\soln \textbf{Step 1:} Set the denominator of $y=\dfrac{1}{x-3}$ equal to zero: $x-3=0\Rightarrow x=3$.

\textbf{Step 2:} At $x=3$ the numerator of $y=\dfrac{1}{x-3}$ is $1\ne0$ and nothing cancels, so the function is undefined there and the curve shoots off to $\pm\infty$.

\textbf{Answer:} for $y=\dfrac{1}{x-3}$ the vertical asymptote is $x=3$ (domain $x\ne3$).` },
      { t: "Horizontal asymptote", body: r`Horizontal asymptote of $y=\dfrac{1}{x-3}$?\soln \textbf{Step 1:} In $y=\dfrac{1}{x-3}$ the numerator $1$ has degree $0$ and the denominator $x-3$ has degree $1$.

\textbf{Step 2:} Since $0<1$, the horizontal asymptote of $y=\dfrac{1}{x-3}$ is $y=0$. Check: at $x=1000$, $y=\dfrac{1}{997}\approx0.001$, very close to $0$.

\textbf{Answer:} $y=0$.` },
      { t: "The reciprocal graph", body: r`Describe $y=\dfrac1x$.\soln \textbf{Step 1 (vertical asymptote):} Set the denominator of $y=\dfrac1x$ equal to zero: $x=0$. The numerator $1\ne0$, so $x=0$ is a VA.

\textbf{Step 2 (horizontal asymptote):} In $y=\dfrac1x$ the numerator has degree $0$ and the denominator $x$ has degree $1$, so the HA is $y=0$.

\textbf{Step 3 (signs):} For $y=\dfrac1x$: if $x>0$ then $y>0$ (quadrant I); if $x<0$ then $y<0$ (quadrant III). The branches lie in opposite quadrants.

\textbf{Step 4 (intercepts):} $y=\dfrac1x$ can never equal $0$ (the numerator is $1$), and $x=0$ is not allowed, so there are no intercepts:` + rg("1/x", 0, { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }) },
      { t: "Domain", body: r`Domain of $y=\dfrac{1}{x+2}$?\soln \textbf{Step 1:} The domain of $y=\dfrac{1}{x+2}$ excludes every $x$ that makes the denominator zero: $x+2=0\Rightarrow x=-2$.

\textbf{Answer:} all real numbers except $-2$, i.e.\ $x\ne-2$ (and $x=-2$ is a vertical asymptote of $y=\dfrac{1}{x+2}$).` },
      { t: "Equal degrees", body: r`Horizontal asymptote of $y=\dfrac{2x}{x-1}$?\soln \textbf{Step 1:} In $y=\dfrac{2x}{x-1}$ the numerator $2x$ has degree $1$ and the denominator $x-1$ has degree $1$ --- equal degrees.

\textbf{Step 2:} The HA of $y=\dfrac{2x}{x-1}$ is the ratio of the leading coefficients: $y=\dfrac21=2$. Check: at $x=1000$, $y=\dfrac{2000}{999}\approx2.002$.

\textbf{Answer:} $y=2$.` },
      { t: "A hole", body: r`Describe $y=\dfrac{x^2-25}{x-5}$.\soln \textbf{Step 1 (factor):} The numerator of $y=\dfrac{x^2-25}{x-5}$ is a difference of squares: $x^2-25=(x-5)(x+5)$, so $y=\dfrac{(x-5)(x+5)}{x-5}$.

\textbf{Step 2 (cancel):} The factor $x-5$ cancels in $y=\dfrac{(x-5)(x+5)}{x-5}$, leaving $y=x+5$ for $x\ne5$.

\textbf{Step 3 (hole):} Substitute $x=5$ into the simplified $y=x+5$: $y=10$. The hole is at $(5,10)$, and there is no vertical asymptote at $x=5$ because the factor cancelled.

\textbf{Answer:} $y=\dfrac{x^2-25}{x-5}$ is the line $y=x+5$ with a hole at $(5,10)$.` },
      { t: "Shifted asymptote", body: r`Vertical asymptote of $y=\dfrac{2}{x-4}$, graphed:\soln \textbf{Step 1:} Set the denominator of $y=\dfrac{2}{x-4}$ equal to zero: $x-4=0\Rightarrow x=4$. The numerator is $2\ne0$, so the VA is $x=4$ (dashed).

\textbf{Step 2:} In $y=\dfrac{2}{x-4}$ the numerator has degree $0<1$, so the HA is $y=0$ (dashed):` + rg("2/(x-4)", 4, { xmin: -2, xmax: 10, ymin: -5, ymax: 5 }, 0) },
      { t: "Equal degrees", body: r`Horizontal asymptote of $y=\dfrac{7x}{x-2}$?\soln \textbf{Step 1:} In $y=\dfrac{7x}{x-2}$ both the numerator $7x$ and the denominator $x-2$ have degree $1$.

\textbf{Step 2:} The HA of $y=\dfrac{7x}{x-2}$ is $y=\dfrac71=7$.

\textbf{Answer:} $y=7$ (the vertical asymptote of $y=\dfrac{7x}{x-2}$ is $x=2$).` },
      { t: "Domain", body: r`Domain of $y=\dfrac{x}{x+7}$?\soln \textbf{Step 1:} The domain of $y=\dfrac{x}{x+7}$ excludes the $x$ that makes the denominator zero: $x+7=0\Rightarrow x=-7$.

\textbf{Step 2:} At $x=-7$ the numerator of $y=\dfrac{x}{x+7}$ is $-7\ne0$, so it is also a vertical asymptote.

\textbf{Answer:} $x\ne-7$.` },
    ],
    questions: [
      { ask: r`Vertical asymptote of $y=\dfrac{1}{x-8}$?` },
      { ask: r`Horizontal asymptote of $y=\dfrac{6}{x-2}$?` },
      { ask: r`Domain of $y=\dfrac{x+3}{x-9}$?` },
      { ask: r`Horizontal asymptote of $y=\dfrac{9x}{x-1}$?` },
      { ask: r`Where is the hole in $y=\dfrac{x^2-49}{x-7}$?` },
      { ask: r`Vertical asymptote of $y=\dfrac{2}{x+3}$?` },
      { ask: r`Horizontal asymptote of $y=\dfrac{4x}{x-7}$?` },
      { ask: r`Domain of $y=\dfrac{1}{x-1}$?` },
      { ask: r`Horizontal asymptote of $y=\dfrac{1}{x^2+1}$?` },
      { ask: r`Vertical asymptote of $y=\dfrac{x+1}{x-6}$?` },
      { ask: r`Simplify $y=\dfrac{x^2-9}{x+3}$ and state any hole.` },
      { ask: r`Horizontal asymptote of $y=\dfrac{3x}{2x-1}$?` },
      { ask: r`State the VA, HA and domain of $y=\dfrac{2x}{x-4}$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`For $y=\dfrac{1}{x-8}$: $x-8=0\Rightarrow x=8$ (numerator $1\ne0$), so the VA is $x=8$`, r`For $y=\dfrac{6}{x-2}$: numerator degree $0<$ denominator degree $1$, so the HA is $y=0$`, r`For $y=\dfrac{x+3}{x-9}$: $x-9=0\Rightarrow x=9$ is excluded, so the domain is $x\ne9$`, r`For $y=\dfrac{9x}{x-1}$: equal degrees, $\dfrac91=9$, so the HA is $y=9$`, r`$y=\dfrac{x^2-49}{x-7}=\dfrac{(x-7)(x+7)}{x-7}=x+7$ for $x\ne7$; the hole is at $x=7$, i.e.\ $(7,14)$`, r`For $y=\dfrac{2}{x+3}$: $x+3=0\Rightarrow x=-3$ (numerator $2\ne0$), so the VA is $x=-3$`, r`For $y=\dfrac{4x}{x-7}$: equal degrees, $\dfrac41=4$, so the HA is $y=4$ (and the VA is $x=7$)`, r`For $y=\dfrac{1}{x-1}$: $x-1=0\Rightarrow x=1$ is excluded, so the domain is $x\ne1$`, r`For $y=\dfrac{1}{x^2+1}$: numerator degree $0<$ denominator degree $2$, so the HA is $y=0$ (and $x^2+1\ne0$, so there is no VA)`, r`For $y=\dfrac{x+1}{x-6}$: $x-6=0\Rightarrow x=6$ (numerator $6+1=7\ne0$), so the VA is $x=6$`, r`$y=\dfrac{x^2-9}{x+3}=\dfrac{(x-3)(x+3)}{x+3}=x-3$ for $x\ne-3$; the hole is at $x=-3$, i.e.\ $(-3,-6)$`, r`For $y=\dfrac{3x}{2x-1}$: equal degrees, $\dfrac32$, so the HA is $y=\tfrac32$ (and the VA is $x=\tfrac12$)`, r`For $y=\dfrac{2x}{x-4}$: VA $x-4=0\Rightarrow x=4$ (numerator $8\ne0$); HA equal degrees, $\dfrac21=2$, so $y=2$; domain $x\ne4$`],
  },
  {
    code: "3.2", unit: U, title: "Graphs of Rational Functions",
    intro: r`Sketch from the skeleton: intercepts, vertical and horizontal asymptotes, and the behaviour on each side of a VA.`,
    ideas: [r`x-intercept: numerator $=0$. y-intercept: evaluate $f(0)$.`, r`VA: denominator $=0$. HA: from the degrees.`, r`Near a VA the curve rushes to $\pm\infty$ — test each side.`],
    examples: [
      { t: "The reciprocal", body: r`Sketch $y=\dfrac1x$.\soln VA $x=0$, HA $y=0$, no intercepts:` + rg("1/x", 0, { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }) },
      { t: "Full skeleton", body: r`For $y=\dfrac{x-4}{x+3}$, find intercepts and asymptotes.\soln x-int $(4,0)$; y-int $f(0)=-\tfrac43$; VA $x=-3$; HA $y=1$:` + rg("(x-4)/(x+3)", -3, {"xmin":-8,"xmax":5,"ymin":-5,"ymax":7}, 1) },
      { t: "Behaviour near a VA", body: r`How does $y=\dfrac{1}{x+3}$ behave near $x=-3$?\soln Just left, $y\to-\infty$; just right, $y\to+\infty$:` + rg("1/(x+3)", -3, {"xmin":-8,"xmax":2,"ymin":-5,"ymax":5}, 0) },
      { t: "y-intercept", body: r`y-intercept of $y=\dfrac{x+3}{x-1}$?\soln $f(0)=\dfrac{3}{-1}=-3$, so $(0,-3)$.` },
      { t: "End behaviour", body: r`As $x\to\infty$, $y=\dfrac{2x+1}{x-3}\to$?\soln Equal degrees → $\tfrac21$, so $y\to2$.` },
      { t: "VA and HA", body: r`VA and HA of $y=\dfrac{2}{x-6}$?\soln VA $x=6$, HA $y=0$.` },
      { t: "x-intercept", body: r`x-intercept of $y=\dfrac{x-8}{x+3}$?\soln Numerator $0$ at $x=8$: $(8,0)$.` },
      { t: "y-intercept", body: r`y-intercept of $y=\dfrac{x+6}{x-3}$?\soln $f(0)=\dfrac{6}{-3}=-2$: $(0,-2)$.` },
      { t: "Equal degrees", body: r`HA of $y=\dfrac{6x}{x-5}$?\soln $y=6$.` },
    ],
    questions: [
      { ask: r`VA and HA of $y=\dfrac{3}{x+4}$?` },
      { ask: r`x-intercept of $y=\dfrac{x-7}{x+1}$?` },
      { ask: r`y-intercept of $y=\dfrac{x+9}{x-3}$?` },
      { ask: r`HA of $y=\dfrac{8x}{x+6}$?` },
      { ask: r`As $x\to\infty$, $y=\dfrac{3x+1}{2x-5}\to$?` },
      { ask: r`VA of $y=\dfrac{x}{x-3}$?` },
      { ask: r`x-intercept of $y=\dfrac{2x-6}{x+4}$?` },
      { ask: r`y-intercept of $y=\dfrac{x-1}{x+5}$?` },
      { ask: r`HA of $y=\dfrac{4x}{x-2}$?` },
      { ask: r`Behaviour of $y=\dfrac{1}{x+1}$ just right of $x=-1$?` },
      { ask: r`x- and y-intercepts of $y=\dfrac{x-3}{x+1}$?` },
      { ask: r`As $x\to\infty$, $y=\dfrac{5x-2}{x+1}\to$?` },
      { ask: r`Find all intercepts and asymptotes of $y=\dfrac{x-1}{x+2}$, then sketch.`, challenge: true, ws: "4cm" },
    ],
    answers: [r`VA $x=-4$, HA $y=0$`, r`$(7,0)$`, r`$(0,-3)$`, r`$y=8$`, r`$y=\tfrac32$`, r`$x=3$`, r`$(3,0)$`, r`$(0,-\tfrac15)$`, r`$y=4$`, r`$y\to+\infty$`, r`$(3,0)$ and $(0,-3)$`, r`$y=5$`, r`x-int $(1,0)$, y-int $(0,-\tfrac12)$, VA $x=-2$, HA $y=1$`],
  },
  {
    code: "3.3", unit: U, title: "Solving Rational Equations & Inequalities",
    intro: r`Clear fractions with the LCD and check restrictions; for inequalities, find the critical values (zeros of numerator and denominator) and use a sign chart.`,
    ideas: [r`Equation: multiply by the LCD, solve, reject extraneous roots.`, r`Inequality: get $0$ on one side, find critical values, test intervals.`, r`Denominator zeros are always excluded (open circles).`],
    examples: [
      { t: "Simple equation", body: r`Solve $\dfrac1x=2$.\soln $1=2x\Rightarrow x=\tfrac12$.` },
      { t: "Cross-multiply", body: r`Solve $\dfrac{x+3}{x-1}=4$.\soln $x+3=4(x-1)=4x-4\Rightarrow 7=3x\Rightarrow x=\tfrac73$ (valid).` },
      { t: "Clear the LCD", body: r`Solve $\dfrac9x+1=4$.\soln $\dfrac9x=3\Rightarrow 9=3x\Rightarrow x=3$.` },
      { t: "Inequality", body: r`Solve $\dfrac{x+1}{x-3}>0$.\soln Critical values $-1,3$; signs $+,-,+$. So $x<-1$ or $x>3$:` + rg("(x+1)/(x-3)", 3, {"xmin":-5,"xmax":8,"ymin":-6,"ymax":6}, 1) },
      { t: "Reciprocal inequality", body: r`Solve $\dfrac{1}{x-5}<0$.\soln Negative when $x-5<0$, so $x<5$.` },
      { t: "Cross-multiply", body: r`Solve $\dfrac{2x-1}{x+2}=3$.\soln $2x-1=3(x+2)=3x+6\Rightarrow x=-7$ (valid).` },
      { t: "Clear the LCD", body: r`Solve $\dfrac{12}x-1=2$.\soln $\dfrac{12}x=3\Rightarrow x=4$.` },
      { t: "Inequality", body: r`Solve $\dfrac{x-4}{x}>0$.\soln Critical values $0,4$; signs $+,-,+$: $x<0$ or $x>4$.` },
      { t: "Reciprocal inequality", body: r`Solve $\dfrac{1}{3-x}>0$.\soln Positive when $3-x>0$, so $x<3$.` },
    ],
    questions: [
      { ask: r`Solve $\dfrac7x=2$.` },
      { ask: r`Solve $\dfrac{x+4}{x-1}=5$.` },
      { ask: r`Solve $\dfrac{10}x-3=2$.` },
      { ask: r`Solve $\dfrac{x}{x+6}>0$.` },
      { ask: r`Solve $\dfrac{-1}{x+2}>0$.` },
      { ask: r`Solve $\dfrac5x=10$.` },
      { ask: r`Solve $\dfrac{x+2}{x-1}=3$.` },
      { ask: r`Solve $\dfrac6x+2=5$.` },
      { ask: r`Solve $\dfrac{x}{x-3}<0$.` },
      { ask: r`Solve $\dfrac{1}{x-4}>0$.` },
      { ask: r`Solve $\dfrac{2}{x}=\dfrac{1}{x-1}$.` },
      { ask: r`Solve $\dfrac{x-2}{x+1}\ge0$.` },
      { ask: r`Solve $\dfrac{x+1}{x-2}\le0$ using critical values.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$x=\tfrac72$`, r`$x=\tfrac94$`, r`$x=2$`, r`$x<-6$ or $x>0$`, r`$x<-2$`, r`$x=\tfrac12$`, r`$x=\tfrac52$`, r`$x=2$`, r`$0<x<3$`, r`$x>4$`, r`$x=2$`, r`$x\le-1$ or $x>2$`, r`$-1\le x<2$`],
  },
];
