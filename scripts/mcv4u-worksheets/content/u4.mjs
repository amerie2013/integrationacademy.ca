// MCV4U Unit 4 worksheets — Curve Sketching. Full \soln + f/f'/f'' figures.
const r = String.raw;
const U = "4: Curve Sketching";

const ffp = r`\eplot{-3}{3}{-6}{6}{\addplot[exblue,very thick,domain=-2.2:2.2]{x^3-3*x};\addplot[qorange,very thick,domain=-1.7:1.7]{3*x^2-3};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-1,2) (1,-2)};}`;
const fpp = r`\eplot{-2.5}{2.5}{-8}{8}{\addplot[exblue,very thick,domain=-2:2]{x^3};\addplot[qorange,very thick,domain=-1.3:1.3]{6*x};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(0,0)};}`;
const cubic2 = r`\eplot{-1.5}{4}{-6}{4}{\addplot[exblue,very thick,domain=-1:3.3]{x^3-3*x^2};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(0,0) (2,-4) (1,-2)};}`;
const sketch = r`\eplot{-3}{3}{-4}{4}{\addplot[exblue,very thick,domain=-2.1:2.1]{x^3-3*x};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-1,2) (1,-2) (0,0)};}`;

export default [
  {
    code: "4.1", unit: U, title: "Increasing/Decreasing & the First Derivative Test",
    intro: r`$f$ increases where $f'>0$ and decreases where $f'<0$. Critical numbers ($f'=0$ or undefined) are classified by how $f'$ changes sign.`,
    ideas: [r`Increasing: $f'>0$; decreasing: $f'<0$.`, r`Critical numbers: $f'=0$ or undefined.`, r`1st-derivative test: $+\to-$ max, $-\to+$ min, no change ⇒ neither.`],
    examples: [
      { t: "Intervals", body: r`Where is $f(x)=x^2-4x$ increasing/decreasing?\soln
\textbf{Step 1 (differentiate):} $f'(x)=2x-4$.\\[3pt]
\textbf{Step 2 (find where $f'=0$, the boundary between the intervals):} $2x-4=0\Rightarrow x=2$.\\[3pt]
\textbf{Step 3 (test the sign of $f'$ on each side):} for $x<2$, e.g.\ $x=0$: $f'(0)=-4<0$ (decreasing). For $x>2$, e.g.\ $x=3$: $f'(3)=2>0$ (increasing).\\[3pt]
\textbf{Conclusion:} decreasing on $(-\infty,2)$, increasing on $(2,\infty)$.` },
      { t: "Critical numbers", body: r`Critical numbers of $f(x)=x^3-3x$.\soln
\textbf{Step 1 (differentiate):} $f'(x)=3x^2-3$.\\[3pt]
\textbf{Step 2 (set $f'=0$):} $3x^2-3=0\Rightarrow x^2=1$.\\[3pt]
\textbf{Step 3 (solve):} $x=\pm1$.\\[3pt]
\textbf{Conclusion:} critical numbers at $x=-1$ and $x=1$. $f$ rises where $f'>0$, falls where $f'<0$:` + ffp },
      { t: "Classify", body: r`Classify the critical points of $f(x)=x^3-3x$.\soln
\textbf{Step 1 (recall the critical numbers):} from the previous example, $x=-1$ and $x=1$, with $f'(x)=3x^2-3$.\\[3pt]
\textbf{Step 2 (test the sign of $f'$ around $x=-1$):} $f'$ goes from $+$ (e.g.\ $f'(-2)=9>0$) to $-$ (e.g.\ $f'(0)=-3<0$) --- a local max.\\[3pt]
\textbf{Step 3 (test the sign of $f'$ around $x=1$):} $f'$ goes from $-$ to $+$ (e.g.\ $f'(2)=9>0$) --- a local min.\\[3pt]
\textbf{Conclusion:} local max at $(-1,2)$; local min at $(1,-2)$.` },
      { t: "Neither", body: r`Classify the critical point of $f(x)=x^3$.\soln
\textbf{Step 1 (differentiate and set to $0$):} $f'(x)=3x^2=0\Rightarrow x=0$.\\[3pt]
\textbf{Step 2 (test the sign of $f'$ on each side):} $f'(x)=3x^2\ge0$ for every $x$ --- it's $+$ on both sides of $0$, never negative.\\[3pt]
\textbf{Step 3 (interpret):} no sign change means neither a max nor a min.\\[3pt]
\textbf{Conclusion:} $x=0$ is neither (it's an inflection point instead).` },
      { t: "Several", body: r`Find and classify the critical points of $f(x)=x^4-2x^2$.\soln
\textbf{Step 1 (differentiate):} $f'(x)=4x^3-4x$.\\[3pt]
\textbf{Step 2 (factor and set to $0$):} $4x(x^2-1)=4x(x-1)(x+1)=0\Rightarrow x=0,1,-1$.\\[3pt]
\textbf{Step 3 (test the sign of $f'$ in each of the four intervals):} the signs go $-,+,-,+$ moving left to right through $x=-1,0,1$.\\[3pt]
\textbf{Conclusion:} local min at $x=-1$ ($f(-1)=-1$), local max at $x=0$ ($f(0)=0$), local min at $x=1$ ($f(1)=-1$).` },
      { t: "Intervals", body: r`Where is $f(x)=x^2-6x$ decreasing?\soln
\textbf{Step 1 (differentiate):} $f'(x)=2x-6$.\\[3pt]
\textbf{Step 2 (set up the decreasing condition, $f'<0$):} $2x-6<0$.\\[3pt]
\textbf{Step 3 (solve the inequality):} $2x<6\Rightarrow x<3$.\\[3pt]
\textbf{Conclusion:} decreasing on $(-\infty,3)$.` },
      { t: "Critical numbers", body: r`Critical numbers of $f(x)=x^3-12x$.\soln
\textbf{Step 1 (differentiate):} $f'(x)=3x^2-12$.\\[3pt]
\textbf{Step 2 (set $f'=0$ and solve):} $3x^2=12\Rightarrow x^2=4\Rightarrow x=\pm2$.\\[3pt]
\textbf{Conclusion:} critical numbers at $x=-2$ and $x=2$.` },
      { t: "Always increasing", body: r`Is $f(x)=x^3+x$ ever decreasing?\soln
\textbf{Step 1 (differentiate):} $f'(x)=3x^2+1$.\\[3pt]
\textbf{Step 2 (analyze the sign):} $3x^2\ge0$ for every $x$, so $3x^2+1\ge1>0$ always.\\[3pt]
\textbf{Conclusion:} $f'(x)>0$ for every $x$, so $f$ is never decreasing.` },
      { t: "Classify", body: r`Classify the critical point of $f(x)=x^2-4x$.\soln
\textbf{Step 1 (differentiate and find the critical number):} $f'(x)=2x-4=0\Rightarrow x=2$.\\[3pt]
\textbf{Step 2 (test the sign on each side):} for $x<2$, $f'<0$ (decreasing); for $x>2$, $f'>0$ (increasing) --- a $-\to+$ pattern.\\[3pt]
\textbf{Conclusion:} local min at $x=2$.` },
    ],
    questions: [
      { ask: r`Where is $f(x)=x^2-6x$ increasing?` },
      { ask: r`Critical numbers of $f(x)=x^3-12x$?` },
      { ask: r`Classify the critical points of $f(x)=x^2-4x$.` },
      { ask: r`Is $f(x)=x^3+x$ ever decreasing?` },
      { ask: r`Critical numbers of $f(x)=x^4-2x^2$?` },
      { ask: r`Where is $f(x)=x^2+2x$ decreasing?` },
      { ask: r`Critical numbers of $f(x)=x^3-3x^2$?` },
      { ask: r`At a critical number $f'$ goes $-\to+$. What is it?` },
      { ask: r`Classify the critical point of $f(x)=x^3$.` },
      { ask: r`Where is $f(x)=x^3-3x$ increasing?` },
      { ask: r`Is $f(x)=-x^2$ increasing or decreasing for $x>0$?` },
      { ask: r`Local max value of $f(x)=x^3-3x$?` },
      { ask: r`Find and classify all critical points of $f(x)=x^3-6x^2+9x$.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$x>3$`, r`$x=\pm2$`, r`local min at $x=2$`, r`no ($f'=3x^2+1>0$)`, r`$0,\pm1$`, r`$x<-1$`, r`$0,2$`, r`local min`, r`neither (inflection)`, r`$|x|>1$`, r`decreasing`, r`$2$ (at $x=-1$)`, r`$f'=3x^2-12x+9=3(x-1)(x-3)$: max $(1,4)$, min $(3,0)$`],
  },
  {
    code: "4.2", unit: U, title: "Concavity & the Second Derivative",
    intro: r`$f''>0$ concave up, $f''<0$ concave down; inflection where $f''$ changes sign. 2nd-derivative test: $f''(c)>0$ min, $f''(c)<0$ max.`,
    ideas: [r`Concave up: $f''>0$; down: $f''<0$.`, r`Inflection: $f''$ changes sign.`, r`2nd-derivative test classifies critical points.`],
    examples: [
      { t: "Always concave up", body: r`Concavity of $f(x)=x^2$.\soln
\textbf{Step 1 (find $f'$):} $f'(x)=2x$.\\[3pt]
\textbf{Step 2 (find $f''$):} $f''(x)=2$.\\[3pt]
\textbf{Step 3 (check the sign):} $f''=2>0$ for every $x$ --- constant and positive.\\[3pt]
\textbf{Conclusion:} concave up everywhere.` },
      { t: "Switches", body: r`Concavity of $f(x)=x^3$.\soln
\textbf{Step 1 (find $f'$ and $f''$):} $f'(x)=3x^2$, $f''(x)=6x$.\\[3pt]
\textbf{Step 2 (analyze the sign of $f''$):} for $x<0$, $f''<0$ (concave down); for $x>0$, $f''>0$ (concave up).\\[3pt]
\textbf{Step 3 (find where the sign changes):} at $x=0$.\\[3pt]
\textbf{Conclusion:} concave down for $x<0$, concave up for $x>0$, inflection at $(0,0)$:` + fpp },
      { t: "2nd-derivative test", body: r`Classify the critical point of $f(x)=x^2-4x$.\soln
\textbf{Step 1 (find the critical number):} $f'(x)=2x-4=0\Rightarrow x=2$.\\[3pt]
\textbf{Step 2 (find $f''$):} $f''(x)=2$.\\[3pt]
\textbf{Step 3 (apply the 2nd-derivative test):} $f''(2)=2>0$, so the graph is concave up there.\\[3pt]
\textbf{Conclusion:} local min at $x=2$.` },
      { t: "Inflection", body: r`Inflection point of $f(x)=x^3-3x^2$.\soln
\textbf{Step 1 (find $f'$ and $f''$):} $f'(x)=3x^2-6x$, $f''(x)=6x-6$.\\[3pt]
\textbf{Step 2 (set $f''=0$):} $6x-6=0\Rightarrow x=1$.\\[3pt]
\textbf{Step 3 (find the $y$-coordinate):} $f(1)=1-3=-2$.\\[3pt]
\textbf{Conclusion:} inflection point at $(1,-2)$.` },
      { t: "Classify all", body: r`Use $f''$ on $f(x)=x^4-2x^2$.\soln
\textbf{Step 1 (find $f'$ and its zeros):} $f'(x)=4x^3-4x=4x(x-1)(x+1)=0\Rightarrow x=0,\pm1$.\\[3pt]
\textbf{Step 2 (find $f''$):} $f''(x)=12x^2-4$.\\[3pt]
\textbf{Step 3 (evaluate $f''$ at each critical number):} $f''(0)=-4<0$ (max); $f''(\pm1)=12-4=8>0$ (min).\\[3pt]
\textbf{Conclusion:} local max at $x=0$; local mins at $x=1$ and $x=-1$.` },
      { t: "Concave down", body: r`Concavity of $f(x)=-x^2$.\soln
\textbf{Step 1 (find $f'$ and $f''$):} $f'(x)=-2x$, $f''(x)=-2$.\\[3pt]
\textbf{Step 2 (check the sign):} $f''=-2<0$ for every $x$.\\[3pt]
\textbf{Conclusion:} concave down everywhere.` },
      { t: "Concave up where", body: r`Where is $f(x)=x^3$ concave up?\soln
\textbf{Step 1 (find $f''$):} $f''(x)=6x$.\\[3pt]
\textbf{Step 2 (set up the concave-up condition, $f''>0$):} $6x>0$.\\[3pt]
\textbf{Step 3 (solve):} $x>0$.\\[3pt]
\textbf{Conclusion:} concave up on $(0,\infty)$.` },
      { t: "2nd-derivative test", body: r`Classify the critical point of $f(x)=x^2+6x$.\soln
\textbf{Step 1 (find the critical number):} $f'(x)=2x+6=0\Rightarrow x=-3$.\\[3pt]
\textbf{Step 2 (find $f''$ and apply the test):} $f''(x)=2>0$, so concave up.\\[3pt]
\textbf{Conclusion:} local min at $x=-3$.` },
      { t: "Inflection", body: r`Inflection point of $f(x)=x^3-6x^2$.\soln
\textbf{Step 1 (find $f''$):} $f'(x)=3x^2-12x$, so $f''(x)=6x-12$.\\[3pt]
\textbf{Step 2 (set $f''=0$):} $6x-12=0\Rightarrow x=2$.\\[3pt]
\textbf{Step 3 (find the $y$-coordinate):} $f(2)=8-24=-16$.\\[3pt]
\textbf{Conclusion:} inflection point at $(2,-16)$.` },
    ],
    questions: [
      { ask: r`Concavity of $f(x)=-x^2$?` },
      { ask: r`Where is $f(x)=x^3$ concave up?` },
      { ask: r`Use the 2nd-derivative test on $f(x)=x^2+6x$.` },
      { ask: r`Inflection point of $f(x)=x^3-6x^2$?` },
      { ask: r`At a critical point $f''(c)<0$. What is it?` },
      { ask: r`Concavity of $f(x)=x^2+1$?` },
      { ask: r`Inflection point of $f(x)=x^3$?` },
      { ask: r`Use $f''$ to classify $x=0$ for $f(x)=x^4-2x^2$.` },
      { ask: r`Where is $f(x)=x^3-3x^2$ concave down?` },
      { ask: r`$f''(2)>0$ and $f'(2)=0$: classify $x=2$.` },
      { ask: r`Concavity of $f(x)=x^3$ at $x=-1$?` },
      { ask: r`Inflection point of $f(x)=x^3-3x$?` },
      { ask: r`Find the intervals of concavity and the inflection point of $f(x)=x^3-3x^2+1$.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`concave down everywhere`, r`$x>0$`, r`min at $x=-3$`, r`$(2,-16)$`, r`local max`, r`concave up`, r`$(0,0)$`, r`max ($f''=-4<0$)`, r`$x<1$`, r`local min`, r`concave down`, r`$(0,0)$`, r`$f''=6x-6$: down on $x<1$, up on $x>1$, inflection $(1,-1)$`],
  },
  {
    code: "4.3", unit: U, title: "Critical, Inflection & End Behaviour",
    intro: r`Gather all features before sketching: domain, intercepts, asymptotes, extrema (from $f'$), inflection/concavity (from $f''$), and end behaviour.`,
    ideas: [r`From $f'$: increase/decrease and extrema.`, r`From $f''$: concavity and inflection.`, r`From $f$: domain, intercepts, asymptotes, end behaviour.`],
    examples: [
      { t: "List features", body: r`Key features of $f(x)=x^3-3x^2$.\soln
\textbf{Step 1 (find extrema from $f'$):} $f'(x)=3x^2-6x=3x(x-2)=0\Rightarrow x=0,2$; testing signs gives max $(0,0)$ and min $(2,-4)$.\\[3pt]
\textbf{Step 2 (find inflection from $f''$):} $f''(x)=6x-6=0\Rightarrow x=1$, giving $f(1)=-2$, so $(1,-2)$.\\[3pt]
\textbf{Step 3 (end behaviour):} odd-degree leading term $x^3$ with positive coefficient $\Rightarrow$ down on the left, up on the right.\\[3pt]
\textbf{Conclusion:} max $(0,0)$, min $(2,-4)$, inflection $(1,-2)$, ends down--up:` + cubic2 },
      { t: "Read f from f'", body: r`$f'>0$ on $(-\infty,1)$, $f'<0$ on $(1,\infty)$. Describe $f$ near $x=1$.\soln
\textbf{Step 1 (interpret the sign pattern):} $f'$ goes from positive to negative at $x=1$.\\[3pt]
\textbf{Step 2 (apply the first-derivative test):} a $+\to-$ change means $f$ switches from increasing to decreasing.\\[3pt]
\textbf{Conclusion:} local max at $x=1$.` },
      { t: "Classify from f''", body: r`$f'(2)=0$ and $f''(2)=-3$. Classify $x=2$.\soln
\textbf{Step 1 (confirm it's a critical point):} $f'(2)=0$.\\[3pt]
\textbf{Step 2 (apply the second-derivative test):} $f''(2)=-3<0$, so the curve is concave down there.\\[3pt]
\textbf{Conclusion:} local maximum at $x=2$.` },
      { t: "Rational asymptotes", body: r`Asymptotes of $f(x)=\dfrac{x}{x-2}$.\soln
\textbf{Step 1 (find the vertical asymptote, where the denominator is $0$):} $x-2=0\Rightarrow x=2$.\\[3pt]
\textbf{Step 2 (find the horizontal asymptote by comparing degrees):} numerator and denominator both have degree $1$, so the HA is the ratio of leading coefficients, $\tfrac11=1$.\\[3pt]
\textbf{Conclusion:} vertical asymptote $x=2$; horizontal asymptote $y=1$.` },
      { t: "Inflection, not extremum", body: r`Inflection of $f(x)=x^3+1$; why no extremum?\soln
\textbf{Step 1 (find $f''$ and set to $0$):} $f''(x)=6x=0\Rightarrow x=0$, giving $f(0)=1$, so $(0,1)$.\\[3pt]
\textbf{Step 2 (check $f'$ to see if it's also an extremum):} $f'(x)=3x^2\ge0$ for every $x$ --- never negative, so no sign change.\\[3pt]
\textbf{Conclusion:} $(0,1)$ is an inflection point but not an extremum, since $f'$ never changes sign there.` },
      { t: "Critical numbers", body: r`Critical numbers of $f(x)=x^3-3x^2$.\soln
\textbf{Step 1 (differentiate):} $f'(x)=3x^2-6x$.\\[3pt]
\textbf{Step 2 (factor and set to $0$):} $3x(x-2)=0$.\\[3pt]
\textbf{Conclusion:} $x=0$ and $x=2$.` },
      { t: "Classify from f''", body: r`$f'(3)=0,\ f''(3)>0$. Classify $x=3$.\soln
\textbf{Step 1 (confirm it's a critical point):} $f'(3)=0$.\\[3pt]
\textbf{Step 2 (apply the second-derivative test):} $f''(3)>0$ means concave up there.\\[3pt]
\textbf{Conclusion:} local minimum at $x=3$.` },
      { t: "Inflection", body: r`Inflection of $f(x)=x^3-3x^2$.\soln
\textbf{Step 1 (find $f''$):} $f''(x)=6x-6$.\\[3pt]
\textbf{Step 2 (set $f''=0$ and solve):} $x=1$, giving $f(1)=1-3=-2$.\\[3pt]
\textbf{Conclusion:} inflection point at $(1,-2)$.` },
      { t: "End behaviour", body: r`End behaviour of $f(x)=-x^3+2x$.\soln
\textbf{Step 1 (identify the leading term):} the highest-degree term is $-x^3$, degree $3$ (odd) with negative coefficient.\\[3pt]
\textbf{Step 2 (recall the pattern for odd-degree, negative leading coefficient):} the graph rises on the far left and falls on the far right.\\[3pt]
\textbf{Conclusion:} up--down end behaviour.` },
    ],
    questions: [
      { ask: r`Critical numbers of $f(x)=x^3-3x^2$?` },
      { ask: r`If $f'(3)=0$ and $f''(3)>0$, classify $x=3$.` },
      { ask: r`Inflection point of $f(x)=x^3-3x^2$?` },
      { ask: r`Asymptotes of $f(x)=\dfrac1{x-3}$?` },
      { ask: r`End behaviour of $f(x)=-x^3+2x$?` },
      { ask: r`Local extrema of $f(x)=x^3-3x$?` },
      { ask: r`Asymptotes of $f(x)=\dfrac{x}{x-2}$?` },
      { ask: r`If $f'(1)=0$ and $f''(1)<0$, classify $x=1$.` },
      { ask: r`Inflection point of $f(x)=x^3$?` },
      { ask: r`End behaviour of $f(x)=x^4-1$?` },
      { ask: r`Where is $f(x)=x^3-3x^2$ increasing?` },
      { ask: r`Does $f(x)=x^3+1$ have a local extremum?` },
      { ask: r`List every key feature of $f(x)=x^3-3x$ (intercepts, extrema, inflection, ends).`, challenge: true, ws: "4cm" },
    ],
    answers: [r`$x=0,2$`, r`local min`, r`$(1,-2)$`, r`VA $x=3$, HA $y=0$`, r`up–down`, r`max $(-1,2)$, min $(1,-2)$`, r`VA $x=2$, HA $y=1$`, r`local max`, r`$(0,0)$`, r`up–up`, r`$x<0$ or $x>2$`, r`no (inflection at $(0,1)$)`, r`x-int $0,\pm\sqrt3$; max $(-1,2)$; min $(1,-2)$; inflection $(0,0)$; ends down–up`],
  },
  {
    code: "4.4", unit: U, title: "Full Curve Sketching",
    intro: r`Run the checklist: domain/symmetry, intercepts, asymptotes, $f'$ (extrema), $f''$ (concavity/inflection), end behaviour — then sketch.`,
    ideas: [r`Domain, symmetry, intercepts first.`, r`$f'$ → extrema; $f''$ → inflection/concavity.`, r`Finish with end behaviour and a consistent sketch.`],
    examples: [
      { t: "Cubic", body: r`Sketch $f(x)=x^3-3x$.\soln
\textbf{Step 1 (intercepts):} $f(x)=x(x^2-3)=0\Rightarrow x=0,\pm\sqrt3$; $y$-intercept $f(0)=0$.\\[3pt]
\textbf{Step 2 (extrema from $f'$):} $f'(x)=3x^2-3=0\Rightarrow x=\pm1$; sign test gives max $(-1,2)$, min $(1,-2)$.\\[3pt]
\textbf{Step 3 (inflection from $f''$):} $f''(x)=6x=0\Rightarrow x=0$, so $(0,0)$.\\[3pt]
\textbf{Step 4 (end behaviour):} odd degree, positive leading coefficient $\Rightarrow$ down--up.\\[3pt]
\textbf{Conclusion:} x-intercepts $0,\pm\sqrt3$; max $(-1,2)$, min $(1,-2)$; inflection $(0,0)$; ends down--up:` + sketch },
      { t: "Quartic (even)", body: r`Sketch $f(x)=x^4-2x^2$.\soln
\textbf{Step 1 (symmetry):} only even powers of $x$ $\Rightarrow$ even function, symmetric about the $y$-axis.\\[3pt]
\textbf{Step 2 (intercepts):} $x^2(x^2-2)=0\Rightarrow x=0,\pm\sqrt2$.\\[3pt]
\textbf{Step 3 (extrema from $f'$):} $f'(x)=4x^3-4x=4x(x-1)(x+1)=0\Rightarrow x=0,\pm1$; testing signs gives max $(0,0)$, mins $(\pm1,-1)$.\\[3pt]
\textbf{Step 4 (inflection from $f''$):} $f''(x)=12x^2-4=0\Rightarrow x=\pm\tfrac1{\sqrt3}$.\\[3pt]
\textbf{Step 5 (end behaviour):} even degree, positive leading coefficient $\Rightarrow$ up--up.\\[3pt]
\textbf{Conclusion:} x-intercepts $0,\pm\sqrt2$; max $(0,0)$, mins $(\pm1,-1)$; inflections at $x=\pm\tfrac1{\sqrt3}$; ends up--up (a "W" shape).` },
      { t: "Cubic", body: r`Sketch $f(x)=x^3-3x^2$.\soln
\textbf{Step 1 (intercepts):} $x^2(x-3)=0\Rightarrow x=0,3$.\\[3pt]
\textbf{Step 2 (extrema from $f'$):} $f'(x)=3x^2-6x=3x(x-2)=0\Rightarrow x=0,2$; testing signs gives max $(0,0)$, min $(2,-4)$.\\[3pt]
\textbf{Step 3 (inflection from $f''$):} $f''(x)=6x-6=0\Rightarrow x=1$, so $(1,-2)$.\\[3pt]
\textbf{Step 4 (end behaviour):} odd degree, positive leading coefficient $\Rightarrow$ down--up.\\[3pt]
\textbf{Conclusion:} x-intercepts $0,3$; max $(0,0)$, min $(2,-4)$; inflection $(1,-2)$; ends down--up.` },
      { t: "From clues", body: r`$f'>0$ on $(-\infty,0)\cup(2,\infty)$, $f'<0$ on $(0,2)$, $f''>0$ on $(1,\infty)$.\soln
\textbf{Step 1 (locate extrema from the $f'$ sign changes):} $+\to-$ at $x=0$ (local max); $-\to+$ at $x=2$ (local min).\\[3pt]
\textbf{Step 2 (locate the inflection from the $f''$ sign change):} concave up begins at $x=1$, so that's the inflection point.\\[3pt]
\textbf{Conclusion:} max at $x=0$, min at $x=2$, inflection at $x=1$ --- consistent with a cubic shape.` },
      { t: "Match f to f'", body: r`$f$ has a max at $-1$, min at $1$. What is $f'$?\soln
\textbf{Step 1 (recall what a max/min means for $f'$):} $f'=0$ at both $x=-1$ and $x=1$.\\[3pt]
\textbf{Step 2 (use the sign pattern of a max-then-min):} $f'$ must be $+$ before $-1$, $-$ between $-1$ and $1$, then $+$ again after $1$ --- a parabola opening upward with roots at $\pm1$.\\[3pt]
\textbf{Conclusion:} $f'$ is an upward-opening parabola with zeros at $x=\pm1$, e.g.\ $f'(x)=3x^2-3$.` },
      { t: "Intercepts", body: r`x-intercepts of $f(x)=x^3-3x$.\soln
\textbf{Step 1 (factor):} $f(x)=x(x^2-3)$.\\[3pt]
\textbf{Step 2 (set each factor to $0$):} $x=0$ or $x^2=3\Rightarrow x=\pm\sqrt3$.\\[3pt]
\textbf{Conclusion:} x-intercepts at $0,\pm\sqrt3$.` },
      { t: "Symmetry", body: r`Is $f(x)=x^4-2x^2$ even or odd?\soln
\textbf{Step 1 (test $f(-x)$):} $f(-x)=(-x)^4-2(-x)^2=x^4-2x^2=f(x)$.\\[3pt]
\textbf{Step 2 (interpret):} $f(-x)=f(x)$ is the definition of even.\\[3pt]
\textbf{Conclusion:} even (only even powers of $x$ appear).` },
      { t: "Extrema", body: r`Local extrema of $f(x)=x^3-3x^2$.\soln
\textbf{Step 1 (differentiate and find critical numbers):} $f'(x)=3x^2-6x=3x(x-2)=0\Rightarrow x=0,2$.\\[3pt]
\textbf{Step 2 (test signs to classify):} $+\to-$ at $x=0$ (max); $-\to+$ at $x=2$ (min).\\[3pt]
\textbf{Conclusion:} max $(0,0)$, min $(2,-4)$.` },
      { t: "Always increasing", body: r`If $f'>0$ everywhere, what does the curve do?\soln
\textbf{Step 1 (recall the meaning of $f'>0$):} the slope is positive at every point.\\[3pt]
\textbf{Step 2 (interpret for the whole curve):} a curve with positive slope everywhere never turns around.\\[3pt]
\textbf{Conclusion:} the graph is always increasing, with no local extrema.` },
    ],
    questions: [
      { ask: r`x-intercepts of $f(x)=x^3-3x$?` },
      { ask: r`Local extrema of $f(x)=x^3-3x^2$?` },
      { ask: r`Inflection point of $f(x)=x^3-3x$?` },
      { ask: r`Is $f(x)=x^4-2x^2$ even or odd?` },
      { ask: r`If $f'>0$ everywhere, what does the graph do?` },
      { ask: r`y-intercept of $f(x)=x^3-3x+2$?` },
      { ask: r`Local extrema of $f(x)=x^3-3x$?` },
      { ask: r`End behaviour of $f(x)=x^4-2x^2$?` },
      { ask: r`Inflection point of $f(x)=x^3-3x^2$?` },
      { ask: r`If $f$ has a min at $2$, what does $f'$ do at $2$?` },
      { ask: r`x-intercepts of $f(x)=x^4-2x^2$?` },
      { ask: r`Is $f(x)=x^3-3x$ even, odd, or neither?` },
      { ask: r`Do a full sketch analysis of $f(x)=x^3-3x^2$ (intercepts, extrema, inflection, ends).`, challenge: true, ws: "4cm" },
    ],
    answers: [r`$0,\pm\sqrt3$`, r`max $(0,0)$, min $(2,-4)$`, r`$(0,0)$`, r`even`, r`always increasing`, r`$(0,2)$`, r`max $(-1,2)$, min $(1,-2)$`, r`up–up`, r`$(1,-2)$`, r`$f'=0$, changing $-\to+$`, r`$0,\pm\sqrt2$`, r`odd`, r`x-ints $0,3$; max $(0,0)$, min $(2,-4)$; inflection $(1,-2)$; ends down–up`],
  },
];
