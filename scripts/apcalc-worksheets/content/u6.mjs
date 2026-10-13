// AP Calculus AB worksheets — Unit 6 (Integration and Accumulation of Change).
// Original problems throughout, different from those in the lessons, the
// question bank and the online free-response questions. Written in LaTeX;
// build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 6: Integration and Accumulation of Change";
const tab = (a, xs, b, ys) => r`\begin{center}\renewcommand{\arraystretch}{1.25}\begin{tabular}{|c|${"c|".repeat(xs.length)}}\hline $${a}$ & ${xs.map((x) => `$${x}$`).join(" & ")} \\ \hline $${b}$ & ${ys.map((y) => `$${y}$`).join(" & ")} \\ \hline\end{tabular}\end{center}`;
const I = (a, b, body, v = "x") => `\\displaystyle\\int_{${a}}^{${b}}${body}\\,d${v}`;
const S = (body) => `\\displaystyle\\lim_{n\\to\\infty}\\sum_{i=1}^{n}${body}`;

// 6.1: rate of flow, (0,2) (2,6) (5,6) (8,0). Areas 8, 18, 9.
const GRAPH_R = r`\begin{apgraph}{-0.5}{9}{-0.5}{7}
\addplot[color=ink, mark=none, line width=1.1pt] coordinates {(0,2) (2,6) (5,6) (8,0)};
\closeddot{0}{2}\closeddot{8}{0}
\node[font=\small, color=ink] at (axis cs:6.9,3.6) {$y=r(t)$};
\end{apgraph}`;
// 6.5: f through (0,-2) (2,2) (6,-2) (8,0). Areas -1, 1, 2, -2, -2.
const GRAPH_F = r`\begin{apgraph}{-0.5}{9}{-3}{3}
\addplot[color=ink, mark=none, line width=1.1pt] coordinates {(0,-2) (2,2) (6,-2) (8,0)};
\closeddot{0}{-2}\closeddot{8}{0}
\node[font=\small, color=ink] at (axis cs:3.3,1.9) {$y=f(t)$};
\end{apgraph}`;
// 6.12: f through (-3,0) (-1,4) (1,0) (3,-2) (5,0). Areas 8 and -4.
const GRAPH_K = r`\begin{apgraph}{-4}{6}{-3}{5}
\addplot[color=ink, mark=none, line width=1.1pt] coordinates {(-3,0) (-1,4) (1,0) (3,-2) (5,0)};
\closeddot{-3}{0}\closeddot{5}{0}
\node[font=\small, color=ink] at (axis cs:0.6,3.2) {$y=f(x)$};
\end{apgraph}`;

const sheets = [
  // ───────────── 6.1 ─────────────
  {
    space: { core: "1.1cm", exam: "2.1cm", fr: "1.9cm" },
    code: "6.1", title: "Accumulating Change", unit: UNIT,
    pre: r`Questions 1 to 7 use this graph. Water flows into a tank at the rate $r(t)$ litres per minute, where $t$ is in minutes.` + "\n" + GRAPH_R,
    ideas: [
      r`A rate multiplied by a time gives an amount. On a graph of a rate, an amount is an \textbf{area}.`,
      r`The area under a rate graph from $t=a$ to $t=b$ is the \textbf{net change} in the quantity over that interval.`,
      r`Area below the axis counts as negative: the quantity is decreasing there.`,
      r`Amount at time $b$ $=$ amount at time $a$ $+$ net change from $a$ to $b$.`,
    ],
    examples: [
      { t: "A constant rate", q: r`A cyclist rides at a constant 12 km/h for 2.5 hours. How far does she travel?`, s: r`The area of a rectangle of height 12 and width 2.5.`, r: r`30 km.` },
      { t: "A linear rate", q: r`Water flows at $r(t)=4+2t$ litres per minute for $0\le t\le3$. How much water flows?`, s: r`A trapezoid with parallel sides 4 and 10 and width 3: $\dfrac12(4+10)(3)$.`, r: r`21 litres.` },
      { t: "A rate that changes sign", q: r`A particle has velocity $v(t)=8-4t$ m/s for $0\le t\le3$. Find its net change in position and the total distance it travels.`, s: r`A triangle of area 8 above the axis on $[0,2]$ and one of area 2 below it on $[2,3]$.`, r: r`Net change 6 m; total distance 10 m.` },
    ],
    core: [
      r`How much water flows into the tank from $t=0$ to $t=2$?`,
      r`How much water flows into the tank from $t=2$ to $t=5$?`,
      r`How much water flows into the tank from $t=0$ to $t=8$?`,
      r`State the units of the area under the graph of $r$.`,
    ],
    exam: [
      r`The tank holds 10 litres at $t=0$. How much does it hold at $t=5$?`,
      r`At what time have exactly 17 litres flowed into the tank?`,
      r`Find the average rate at which water flows into the tank over $0\le t\le8$.`,
      r`A particle has velocity $v(t)=10-2t$ m/s for $0\le t\le8$. Find its displacement and the total distance travelled.`,
    ],
    fr: {
      intro: r`A factory makes parts at the rate $p(t)$ parts per hour during a 10-hour shift. The graph of $p$ consists of the line segments joining $(0,40)$, $(4,60)$, $(6,60)$ and $(10,20)$.`,
      parts: [
        r`How many parts are made in the first 4 hours?`,
        r`How many parts are made during the whole shift?`,
        r`Interpret $p(6)=60$, and find the time at which the 260th part is completed.`,
      ],
    },
    sol: {
      core: [
        r`A trapezoid: $\dfrac12(2+6)(2)=8$ litres.`,
        r`A rectangle: $6\times3=18$ litres.`,
        r`$8+18+\dfrac12(6)(3)=35$ litres.`,
        r`(litres per minute) $\times$ (minutes) $=$ litres.`,
      ],
      exam: [
        r`$10+8+18=36$ litres.`,
        r`8 litres by $t=2$; 9 more at 6 litres per minute takes 1.5 minutes: $t=3.5$.`,
        r`$\dfrac{35}{8}=4.375$ litres per minute.`,
        r`Above the axis on $[0,5]$: 25. Below on $[5,8]$: 9. Displacement 16 m; distance 34 m.`,
      ],
      fr: [
        r`$\dfrac12(40+60)(4)=200$ parts.`,
        r`$200+60(2)+\dfrac12(60+20)(4)=200+120+160=480$ parts.`,
        r`Six hours into the shift, parts are being made at 60 per hour. 200 parts are done by $t=4$; 60 more at 60 per hour takes one hour: $t=5$.`,
      ],
    },
  },

  // ───────────── 6.2 ─────────────
  {
    code: "6.2", title: "Riemann Sums and the Trapezoidal Rule", unit: UNIT,
    pre: r`Questions 5 to 7 use this table of values of a continuous function $R$.` + tab("t", [0, 2, 3, 7, 10], "R(t)", [6, 10, 12, 8, 2]),
    ideas: [
      r`A \textbf{left}, \textbf{right} or \textbf{midpoint} Riemann sum adds rectangles whose heights are taken at the left end, right end or midpoint of each subinterval.`,
      r`A \textbf{trapezoidal sum} uses the average of the two end heights on each subinterval.`,
      r`With a table, use the table's own subintervals. The widths are often \textbf{unequal}.`,
      r`If $f$ is increasing, a left sum underestimates and a right sum overestimates; if $f$ is decreasing, the reverse.`,
    ],
    examples: [
      { t: "Equal widths", q: r`Approximate $${I(0, 3, r`\left(x^2+1\right)`)}$ with left and right Riemann sums using 3 subintervals.`, s: r`Width 1. Left: $f(0)+f(1)+f(2)=1+2+5$. Right: $f(1)+f(2)+f(3)=2+5+10$.`, r: r`Left sum 8; right sum 17.` },
      { t: "Unequal widths", q: r`Selected values of $h$ are shown.` + tab("t", [0, 1, 4, 6], "h(t)", [2, 5, 9, 7]) + r`Approximate $${I(0, 6, "h(t)", "t")}$ with a trapezoidal sum.`, s: r`$\dfrac12(2+5)(1)+\dfrac12(5+9)(3)+\dfrac12(9+7)(2)=3.5+21+16$.`, r: r`$40.5$.` },
      { t: "Over or under", q: r`A function is increasing on $[a,b]$. Compare its left and right Riemann sums with the integral.`, s: r`Each left rectangle lies below the graph and each right rectangle above it.`, r: r`Left sum $<$ integral $<$ right sum.` },
    ],
    core: [
      r`Find the left Riemann sum for $f(x)=2x$ on $[0,4]$ with 4 equal subintervals.`,
      r`Find the right Riemann sum for $f(x)=2x$ on $[0,4]$ with 4 equal subintervals.`,
      r`Find the midpoint Riemann sum for $f(x)=x^2$ on $[0,4]$ with 2 equal subintervals.`,
      r`A function is decreasing on $[a,b]$. Does a left Riemann sum overestimate or underestimate the integral?`,
    ],
    exam: [
      r`Approximate $${I(0, 10, "R(t)", "t")}$ with a left Riemann sum using the four subintervals of the table.`,
      r`Approximate the same integral with a right Riemann sum.`,
      r`Approximate the same integral with a trapezoidal sum.`,
      r`Find the midpoint Riemann sum for $f(x)=\dfrac1x$ on $[1,5]$ with 2 equal subintervals.`,
    ],
    fr: {
      intro: r`The speed of a train, $v(t)$ metres per second, is recorded at times $t$ seconds.` + tab("t", [0, 10, 25, 40, 60], "v(t)", [0, 12, 20, 16, 4]),
      parts: [
        r`Approximate $${I(0, 60, "v(t)", "t")}$ with a trapezoidal sum using the four subintervals of the table.`,
        r`Using correct units, explain the meaning of the integral in part (a).`,
        r`Use your answer to estimate the average speed of the train over the 60 seconds.`,
      ],
    },
    sol: {
      core: [
        r`$1(0+2+4+6)=12$.`,
        r`$1(2+4+6+8)=20$.`,
        r`Midpoints 1 and 3, width 2: $2(1+9)=20$.`,
        r`It overestimates.`,
      ],
      exam: [
        r`$(2)(6)+(1)(10)+(4)(12)+(3)(8)=94$.`,
        r`$(2)(10)+(1)(12)+(4)(8)+(3)(2)=70$.`,
        r`$\dfrac12(6+10)(2)+\dfrac12(10+12)(1)+\dfrac12(12+8)(4)+\dfrac12(8+2)(3)=16+11+40+15=82$.`,
        r`Midpoints 2 and 4, width 2: $2\left(\dfrac12+\dfrac14\right)=1.5$.`,
      ],
      fr: [
        r`$\dfrac12(0+12)(10)+\dfrac12(12+20)(15)+\dfrac12(20+16)(15)+\dfrac12(16+4)(20)=60+240+270+200=770$.`,
        r`The distance the train travels, in metres, during the 60 seconds.`,
        r`$\dfrac{770}{60}\approx12.8$ metres per second.`,
      ],
    },
  },

  // ───────────── 6.3 ─────────────
  {
    code: "6.3", title: "From Sums to the Definite Integral", unit: UNIT,
    ideas: [
      r`$${I("a", "b", "f(x)")}=${S(r`f(x_i)\,\Delta x`)}$, with $\Delta x=\dfrac{b-a}{n}$ and $x_i=a+i\,\Delta x$.`,
      r`To read a sum as an integral: the factor $\dfrac{b-a}{n}$ gives the width of the interval, and the expression $a+i\,\Delta x$ gives where it starts.`,
      r`A definite integral is a \textbf{signed area}: regions below the axis count as negative.`,
      r`Integrals of linear functions and semicircles can be evaluated from geometry, with no antiderivative.`,
    ],
    examples: [
      { t: "A sum as an integral", q: r`Write $${S(r`\left(1+\frac{3i}{n}\right)^2\cdot\frac{3}{n}`)}$ as a definite integral.`, s: r`$\Delta x=\dfrac3n$, so $b-a=3$; $x_i=1+\dfrac{3i}{n}$, so $a=1$ and $b=4$.`, r: r`$${I(1, 4, "x^2")}$.` },
      { t: "A semicircle", q: r`Evaluate $${I(-2, 2, r`\sqrt{4-x^2}`)}$.`, s: r`The graph is the upper half of a circle of radius 2.`, r: r`$\dfrac12\pi(2)^2=2\pi$.` },
      { t: "An absolute value", q: r`Evaluate $${I(0, 5, "|x-3|")}$.`, s: r`Two triangles above the axis: area $\dfrac12(3)(3)$ on $[0,3]$ and $\dfrac12(2)(2)$ on $[3,5]$.`, r: r`$\dfrac92+2=\dfrac{13}{2}$.` },
    ],
    core: [
      r`Evaluate $${I(0, 6, "3")}$ using geometry.`,
      r`Evaluate $${I(0, 4, "x")}$ using geometry.`,
      r`Evaluate $${I(-1, 1, r`\sqrt{1-x^2}`)}$ using geometry.`,
      r`Write a definite integral for the area under $y=x^3$ from $x=1$ to $x=2$.`,
    ],
    exam: [
      r`Write $${S(r`\cos\!\left(\frac{3i}{n}\right)\cdot\frac{3}{n}`)}$ as a definite integral.`,
      r`Write $${I(1, 3, r`\dfrac1x`)}$ as the limit of a right Riemann sum.`,
      r`Evaluate $${I(-2, 4, "(2-x)")}$ using geometry.`,
      r`Evaluate $${I(0, 3, r`\left(1+\sqrt{9-x^2}\right)`)}$ using geometry.`,
    ],
    fr: {
      intro: r`Let $g(x)=2x-4$.`,
      parts: [
        r`Find the areas of the two triangles between the graph of $g$ and the $x$-axis for $0\le x\le5$.`,
        r`Use your answer to evaluate $${I(0, 5, "g(x)")}$.`,
        r`Evaluate $${I(0, 5, "|g(x)|")}$, and explain why it differs from part (b).`,
      ],
    },
    sol: {
      core: [
        r`A rectangle: 18.`,
        r`A triangle: $\dfrac12(4)(4)=8$.`,
        r`A semicircle of radius 1: $\dfrac\pi2$.`,
        r`$${I(1, 2, "x^3")}$.`,
      ],
      exam: [
        r`$\Delta x=\dfrac3n$ and $x_i=\dfrac{3i}{n}$: $${I(0, 3, r`\cos x`)}$.`,
        r`$\Delta x=\dfrac2n$, $x_i=1+\dfrac{2i}{n}$: $${S(r`\dfrac{1}{1+\frac{2i}{n}}\cdot\dfrac2n`)}$.`,
        r`Above the axis on $[-2,2]$: $\dfrac12(4)(4)=8$. Below on $[2,4]$: $\dfrac12(2)(2)=2$. Value $8-2=6$.`,
        r`A rectangle of area 3 plus a quarter circle of radius 3: $3+\dfrac{9\pi}{4}$.`,
      ],
      fr: [
        r`Below the axis on $[0,2]$: $\dfrac12(2)(4)=4$. Above on $[2,5]$: $\dfrac12(3)(6)=9$.`,
        r`$-4+9=5$.`,
        r`$4+9=13$. The absolute value counts the region below the axis as positive.`,
      ],
    },
  },

  // ───────────── 6.4 ─────────────
  {
    code: "6.4", title: "Accumulation Functions and the Fundamental Theorem, Part 1", unit: UNIT,
    ideas: [
      r`\textbf{Fundamental Theorem, Part 1.} If $f$ is continuous, then $\dfrac{d}{dx}${I("a", "x", "f(t)", "t")}=f(x)$.`,
      r`With a function as the upper limit, use the chain rule: $\dfrac{d}{dx}${I("a", "g(x)", "f(t)", "t")}=f\big(g(x)\big)\,g'(x)$.`,
      r`If the variable is the \emph{lower} limit, the sign changes.`,
      r`An accumulation function is zero where its two limits are equal: $${I("a", "a", "f(t)", "t")}=0$.`,
    ],
    examples: [
      { t: "The basic case", q: r`Find $\dfrac{d}{dx}${I(2, "x", r`\sqrt{1+t^4}`, "t")}$.`, s: r`Replace $t$ by $x$ in the integrand.`, r: r`$\sqrt{1+x^4}$.` },
      { t: "With the chain rule", q: r`Find $\dfrac{d}{dx}${I(0, "x^3", r`\sin t`, "t")}$.`, s: r`Substitute the upper limit and multiply by its derivative.`, r: r`$3x^2\sin\!\left(x^3\right)$.` },
      { t: "Values of an accumulation function", q: r`Let $g(x)=${I(1, "x", r`\left(3t^2-2\right)`, "t")}$. Find $g(1)$, $g'(2)$ and $g''(x)$.`, s: r`Equal limits give $g(1)=0$. $g'(x)=3x^2-2$.`, r: r`$g(1)=0$, $g'(2)=10$, $g''(x)=6x$.` },
    ],
    core: [
      r`Find $\dfrac{d}{dx}${I(0, "x", r`\cos\!\left(t^2\right)`, "t")}$.`,
      r`Find $\dfrac{d}{dx}${I(5, "x", r`\dfrac{e^{t}}{t}`, "t")}$.`,
      r`Let $F(x)=${I(3, "x", r`\left(t^2+1\right)`, "t")}$. Find $F(3)$.`,
      r`For the function $F$ in Question 3, find $F'(3)$.`,
    ],
    exam: [
      r`Find $\dfrac{d}{dx}${I("x", 4, r`\sqrt{t+1}`, "t")}$.`,
      r`Find $\dfrac{d}{dx}${I(0, "2x", r`\ln(1+t)`, "t")}$.`,
      r`Find $\dfrac{d}{dx}${I("x", "x^2", "t^3", "t")}$.`,
      r`Let $h(x)=${I(0, r`\sin x`, "e^{t^2}", "t")}$. Find $h'(0)$.`,
    ],
    fr: {
      intro: r`Let $F(x)=${I(0, "x", r`\left(t^2-4t\right)`, "t")}$ for $x\ge0$.`,
      parts: [
        r`Find $F'(x)$.`,
        r`On what interval is $F$ decreasing? Justify your answer.`,
        r`Find the $x$-coordinate of the point of inflection of the graph of $F$, and the value of $F(4)$.`,
      ],
    },
    sol: {
      core: [
        r`$\cos\!\left(x^2\right)$.`,
        r`$\dfrac{e^{x}}{x}$.`,
        r`$0$.`,
        r`$F'(x)=x^2+1$, so $F'(3)=10$.`,
      ],
      exam: [
        r`$-\sqrt{x+1}$.`,
        r`$2\ln(1+2x)$.`,
        r`$\left(x^2\right)^3(2x)-x^3=2x^7-x^3$.`,
        r`$h'(x)=e^{\sin^2x}\cos x$, so $h'(0)=1$.`,
      ],
      fr: [
        r`$F'(x)=x^2-4x$.`,
        r`$F'(x)=x(x-4)<0$ for $0<x<4$.`,
        r`$F''(x)=2x-4$ changes sign at $x=2$. $F(4)=\dfrac{64}{3}-32=-\dfrac{32}{3}$.`,
      ],
    },
  },

  // ───────────── 6.5 ─────────────
  {
    space: { core: "1.1cm", exam: "2.1cm", fr: "1.9cm" },
    code: "6.5", title: "Analysing a Function Defined by an Integral", unit: UNIT,
    pre: r`Questions 1 to 8 use this graph of $f$, which consists of three line segments. Let $g(x)=${I(0, "x", "f(t)", "t")}$.` + "\n" + GRAPH_F,
    ideas: [
      r`If $g(x)=${I("a", "x", "f(t)", "t")}$, then $g'(x)=f(x)$ and $g''(x)=f'(x)$.`,
      r`$g$ is increasing where $f$ is positive; $g$ has a relative maximum where $f$ changes from positive to negative.`,
      r`The graph of $g$ is concave up where $f$ is increasing, and has a point of inflection where $f$ changes direction.`,
      r`Values of $g$ are signed areas under the graph of $f$.`,
    ],
    examples: [
      { t: "A relative minimum", q: r`Let $g(x)=${I(0, "x", "(t-3)", "t")}$. Find the relative minimum of $g$.`, s: r`$g'(x)=x-3$ changes from negative to positive at $x=3$. $g(3)$ is the signed area of a triangle below the axis.`, r: r`Relative minimum $g(3)=-\dfrac92$.` },
      { t: "Concavity", q: r`If $g'=f$ and $f$ is decreasing on $(2,5)$, what is true of the graph of $g$ there?`, s: r`$g''=f'<0$.`, r: r`It is concave down.` },
      { t: "An absolute extremum", q: r`Let $g(x)=${I(0, "x", r`\left(4-t^2\right)`, "t")}$. Find the absolute maximum of $g$ on $[0,3]$.`, s: r`$g'(x)=4-x^2=0$ at $x=2$. $g(0)=0$, $g(2)=8-\dfrac83=\dfrac{16}{3}$, $g(3)=12-9=3$.`, r: r`$\dfrac{16}{3}$, at $x=2$.` },
    ],
    core: [
      r`Find $g(2)$.`,
      r`Find $g'(2)$.`,
      r`Find $g(4)$.`,
      r`Find $g''(3)$.`,
    ],
    exam: [
      r`Find the $x$-coordinates of the relative minimum and the relative maximum of $g$ on $(0,8)$. Justify your answers.`,
      r`Find the absolute maximum and absolute minimum values of $g$ on $[0,8]$.`,
      r`On what intervals is the graph of $g$ concave up? Where are its points of inflection?`,
      r`Write an equation of the line tangent to the graph of $g$ at $x=6$.`,
    ],
    fr: {
      intro: r`Let $H(x)=${I(1, "x", r`\ln t`, "t")}$ for $x>0$.`,
      parts: [
        r`Find $H(1)$ and $H'(x)$.`,
        r`Show that $H$ has its absolute minimum at $x=1$.`,
        r`Describe the concavity of the graph of $H$. Given that $H(e)=1$, write an equation of the tangent line at $x=e$.`,
      ],
    },
    sol: {
      core: [
        r`The areas on $[0,1]$ and $[1,2]$ are $-1$ and $1$: $g(2)=0$.`,
        r`$g'(2)=f(2)=2$.`,
        r`$g(2)+2=2$ (a triangle of area 2 on $[2,4]$).`,
        r`The slope of $f$ on $(2,6)$: $-1$.`,
      ],
      exam: [
        r`Minimum at $x=1$, where $g'=f$ changes from negative to positive. Maximum at $x=4$, where $f$ changes from positive to negative.`,
        r`$g(0)=0$, $g(1)=-1$, $g(4)=2$, $g(8)=2-2-2=-2$. Maximum 2; minimum $-2$ (at $x=8$).`,
        r`Concave up on $(0,2)$ and $(6,8)$, where $f$ is increasing. Points of inflection at $x=2$ and $x=6$.`,
        r`$g(6)=0$ and $g'(6)=f(6)=-2$: $y=-2(x-6)$.`,
      ],
      fr: [
        r`$H(1)=0$ and $H'(x)=\ln x$.`,
        r`$H'(x)<0$ for $0<x<1$ and $H'(x)>0$ for $x>1$, so $H$ decreases and then increases: the absolute minimum is $H(1)=0$.`,
        r`$H''(x)=\dfrac1x>0$: concave up for all $x>0$. The slope at $x=e$ is $\ln e=1$: $y-1=x-e$.`,
      ],
    },
  },

  // ───────────── 6.6 ─────────────
  {
    code: "6.6", title: "Properties of Definite Integrals", unit: UNIT,
    pre: r`Questions 1 to 6 use: \ $${I(0, 2, "f(x)")}=5$, \ $${I(2, 7, "f(x)")}=8$ \ and \ $${I(0, 7, "g(x)")}=-4$.`,
    ideas: [
      r`$${I("a", "b", "f")}+${I("b", "c", "f")}=${I("a", "c", "f")}$, \quad $${I("b", "a", "f")}=-${I("a", "b", "f")}$, \quad $${I("a", "a", "f")}=0$.`,
      r`Constants factor out, and sums split: $${I("a", "b", r`\big[kf+g\big]`)}=k${I("a", "b", "f")}+${I("a", "b", "g")}$.`,
      r`A constant integrates to the constant times the width: $${I("a", "b", "k")}=k(b-a)$.`,
      r`For an odd function, $${I("-a", "a", "f")}=0$. For an even function, $${I("-a", "a", "f")}=2${I(0, "a", "f")}$.`,
    ],
    examples: [
      { t: "Joining and reversing", q: r`Given $${I(1, 4, "f(x)")}=5$ and $${I(4, 9, "f(x)")}=-2$, find $${I(1, 9, "f(x)")}$ and $${I(9, 4, "f(x)")}$.`, s: r`Add for the first; change the sign for the second.`, r: r`$3$ and $2$.` },
      { t: "A constant inside", q: r`Given $${I(0, 3, "f(x)")}=7$, find $${I(0, 3, r`\big[2f(x)-4\big]`)}$.`, s: r`$2(7)-4(3)$.`, r: r`$2$.` },
      { t: "Symmetry", q: r`Evaluate $${I(-2, 2, r`\left(x^3+3x^2\right)`)}$.`, s: r`$x^3$ is odd and contributes 0. $3x^2$ is even: $2${I(0, 2, "3x^2")}=2(8)$.`, r: r`$16$.` },
    ],
    core: [
      r`Find $${I(0, 7, "f(x)")}$.`,
      r`Find $${I(7, 2, "f(x)")}$.`,
      r`Find $${I(0, 7, r`\big[f(x)+g(x)\big]`)}$.`,
      r`Find $${I(2, 2, "f(x)")}$.`,
    ],
    exam: [
      r`Find $${I(0, 7, r`\big[3f(x)-g(x)+1\big]`)}$.`,
      r`Find $${I(0, 2, r`\big[f(x)+3x\big]`)}$.`,
      r`An odd function $h$ has $${I(0, 5, "h(x)")}=6$. Find $${I(-5, 5, "h(x)")}$ and $${I(-5, 0, "h(x)")}$.`,
      r`Evaluate $${I(r`-\pi`, r`\pi`, r`(\sin x+2)`)}$.`,
    ],
    fr: {
      intro: r`A continuous function $f$ satisfies $${I(-2, 3, "f(x)")}=10$ and $${I(3, 6, "f(x)")}=-4$.`,
      parts: [
        r`Find $${I(-2, 6, "f(x)")}$.`,
        r`Find $${I(-2, 3, r`\big[f(x)-2\big]`)}$.`,
        r`Find $${I(6, -2, "f(x)")}$, and find the value of the constant $k$ for which $${I(3, 6, r`\big[f(x)+k\big]`)}=5$.`,
      ],
    },
    sol: {
      core: [
        r`$5+8=13$.`,
        r`$-8$.`,
        r`$13+(-4)=9$.`,
        r`$0$.`,
      ],
      exam: [
        r`$3(13)-(-4)+1(7)=50$.`,
        r`$5+${I(0, 2, "3x")}=5+6=11$.`,
        r`$0$ and $-6$.`,
        r`$\sin x$ is odd; the constant gives $2(2\pi)=4\pi$.`,
      ],
      fr: [
        r`$10+(-4)=6$.`,
        r`$10-2(5)=0$.`,
        r`$-6$. For the second: $-4+3k=5$, so $k=3$.`,
      ],
    },
  },

  // ───────────── 6.7 ─────────────
  {
    code: "6.7", title: "The Fundamental Theorem, Part 2: Evaluating Integrals", unit: UNIT,
    ideas: [
      r`\textbf{Fundamental Theorem, Part 2.} If $F'=f$, then $${I("a", "b", "f(x)")}=F(b)-F(a)$.`,
      r`Write the antiderivative in brackets with the limits, then substitute: upper limit first.`,
      r`$${I("a", "b", "f'(x)")}=f(b)-f(a)$: the integral of a rate of change is the net change. So $f(b)=f(a)+${I("a", "b", "f'(x)")}$.`,
      r`For an absolute value or a piecewise function, split the interval where the formula changes.`,
    ],
    examples: [
      { t: "A polynomial", q: r`Evaluate $${I(0, 2, r`\left(3x^2+2x\right)`)}$.`, s: r`$\Big[x^3+x^2\Big]_0^2=(8+4)-0$.`, r: r`$12$.` },
      { t: "A trigonometric function", q: r`Evaluate $${I(r`\pi/6`, r`\pi/2`, r`\cos x`)}$.`, s: r`$\Big[\sin x\Big]_{\pi/6}^{\pi/2}=1-\dfrac12$.`, r: r`$\dfrac12$.` },
      { t: "A value from a rate", q: r`Given $f(1)=4$ and $f'(x)=2x+3$, find $f(3)$.`, s: r`$f(3)=4+${I(1, 3, "(2x+3)")}=4+\Big[x^2+3x\Big]_1^3=4+(18-4)$.`, r: r`$18$.` },
    ],
    core: [
      r`Evaluate $${I(1, 3, "2x")}$.`,
      r`Evaluate $${I(1, 4, r`\dfrac{1}{\sqrt{x}}`)}$.`,
      r`Evaluate $${I(0, r`\ln2`, "e^{x}")}$.`,
      r`Evaluate $${I(1, 2, r`\dfrac{3}{x^2}`)}$.`,
    ],
    exam: [
      r`Evaluate $${I(1, 8, r`\sqrt[3]{x}`)}$.`,
      r`Evaluate $${I(0, r`\pi/3`, r`\sec x\tan x`)}$.`,
      r`Let $f(x)=x^2$ for $x\le2$ and $f(x)=4$ for $x>2$. Evaluate $${I(0, 5, "f(x)")}$.`,
      r`A particle has velocity $v(t)=3t^2-6t$ and position $x(0)=2$. Find $x(3)$.`,
    ],
    fr: {
      intro: r`Answer each part. No calculator is permitted.`,
      parts: [
        r`Evaluate $${I(1, "e", r`\left(\dfrac2x+1\right)`)}$.`,
        r`A function $f$ has $f(0)=5$ and $f'(x)=4\cos x$. Find $f\!\left(\dfrac\pi2\right)$.`,
        r`Find the area of the region under $y=4-x^2$ and above the $x$-axis for $0\le x\le2$.`,
      ],
    },
    sol: {
      core: [
        r`$\Big[x^2\Big]_1^3=8$.`,
        r`$\Big[2\sqrt x\Big]_1^4=4-2=2$.`,
        r`$e^{\ln2}-e^0=1$.`,
        r`$\Big[-\dfrac3x\Big]_1^2=-\dfrac32+3=\dfrac32$.`,
      ],
      exam: [
        r`$\Big[\dfrac34x^{4/3}\Big]_1^8=\dfrac34(16-1)=\dfrac{45}{4}$.`,
        r`$\Big[\sec x\Big]_0^{\pi/3}=2-1=1$.`,
        r`$${I(0, 2, "x^2")}+${I(2, 5, "4")}=\dfrac83+12=\dfrac{44}{3}$.`,
        r`$2+\Big[t^3-3t^2\Big]_0^3=2+0=2$.`,
      ],
      fr: [
        r`$\Big[2\ln x+x\Big]_1^e=(2+e)-(0+1)=e+1$.`,
        r`$5+${I(0, r`\pi/2`, r`4\cos x`)}=5+4=9$.`,
        r`$\Big[4x-\dfrac{x^3}{3}\Big]_0^2=8-\dfrac83=\dfrac{16}{3}$.`,
      ],
    },
  },

  // ───────────── 6.8 ─────────────
  {
    code: "6.8", title: "Antiderivatives and the Basic Rules", unit: UNIT,
    ideas: [
      r`$\displaystyle\int x^n\,dx=\dfrac{x^{n+1}}{n+1}+C$ for $n\neq-1$, and $\displaystyle\int\dfrac1x\,dx=\ln|x|+C$.`,
      r`Every derivative formula read backwards is an antiderivative formula: $\displaystyle\int\sec^2x\,dx=\tan x+C$, and so on.`,
      r`An indefinite integral always includes $+C$.`,
      r`An initial condition fixes the constant. Two integrations need two conditions.`,
    ],
    examples: [
      { t: "Term by term", q: r`Find $\displaystyle\int\left(6x^2-4x+5\right)dx$.`, s: r`Raise each power by one and divide by the new power.`, r: r`$2x^3-2x^2+5x+C$.` },
      { t: "Mixed functions", q: r`Find $\displaystyle\int\left(\dfrac3x-2e^{x}+\sec^2x\right)dx$.`, s: r`Each term is a standard form.`, r: r`$3\ln|x|-2e^{x}+\tan x+C$.` },
      { t: "With an initial condition", q: r`Given $f'(x)=3\sqrt{x}$ and $f(4)=10$, find $f(x)$.`, s: r`$f(x)=2x^{3/2}+C$, and $2(8)+C=10$.`, r: r`$f(x)=2x^{3/2}-6$.` },
    ],
    core: [
      r`Find $\displaystyle\int x^5\,dx$.`,
      r`Find $\displaystyle\int\left(4x^3-1\right)dx$.`,
      r`Find $\displaystyle\int\cos x\,dx$.`,
      r`Find $\displaystyle\int\dfrac{1}{x^2}\,dx$.`,
    ],
    exam: [
      r`Find $\displaystyle\int(x+1)(x-2)\,dx$.`,
      r`Find $\displaystyle\int\dfrac{x^2+4}{x}\,dx$.`,
      r`Find $\displaystyle\int\left(\csc^2x+\dfrac{1}{1+x^2}\right)dx$.`,
      r`Given $f''(x)=6x$, $f'(1)=5$ and $f(0)=2$, find $f(x)$.`,
    ],
    fr: {
      intro: r`A particle moves along a line with acceleration $a(t)=6t-4$. At $t=0$ its velocity is 3 and its position is 1.`,
      parts: [
        r`Find the velocity $v(t)$.`,
        r`Find the position $x(t)$.`,
        r`Does the particle ever come to rest? Justify your answer.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{x^6}{6}+C$.`,
        r`$x^4-x+C$.`,
        r`$\sin x+C$.`,
        r`$-\dfrac1x+C$.`,
      ],
      exam: [
        r`$\displaystyle\int\left(x^2-x-2\right)dx=\dfrac{x^3}{3}-\dfrac{x^2}{2}-2x+C$.`,
        r`$\displaystyle\int\left(x+\dfrac4x\right)dx=\dfrac{x^2}{2}+4\ln|x|+C$.`,
        r`$-\cot x+\arctan x+C$.`,
        r`$f'(x)=3x^2+C_1$ with $3+C_1=5$, so $f'(x)=3x^2+2$. Then $f(x)=x^3+2x+2$.`,
      ],
      fr: [
        r`$v(t)=3t^2-4t+C$ with $C=3$: $v(t)=3t^2-4t+3$.`,
        r`$x(t)=t^3-2t^2+3t+1$.`,
        r`No. $3t^2-4t+3=0$ has discriminant $16-36<0$, so $v(t)$ is never zero.`,
      ],
    },
  },

  // ───────────── 6.9 ─────────────
  {
    code: "6.9", title: "Integration by Substitution", unit: UNIT,
    ideas: [
      r`Substitution undoes the chain rule. Choose $u$ to be an \textbf{inside} function whose derivative appears as a factor.`,
      r`Replace every $x$ and the $dx$: if $u=g(x)$ then $du=g'(x)\,dx$.`,
      r`A missing constant factor can be supplied: if $du=2x\,dx$, then $x\,dx=\dfrac12du$.`,
      r`In a definite integral, \textbf{change the limits} to values of $u$, or return to $x$ before evaluating. Never mix the two.`,
    ],
    examples: [
      { t: "A direct fit", q: r`Find $\displaystyle\int3x^2\left(x^3+5\right)^4dx$.`, s: r`$u=x^3+5$, $du=3x^2\,dx$: $\displaystyle\int u^4\,du$.`, r: r`$\dfrac{\left(x^3+5\right)^5}{5}+C$.` },
      { t: "A linear inside", q: r`Find $\displaystyle\int\cos(4x)\,dx$.`, s: r`$u=4x$, $dx=\dfrac14du$.`, r: r`$\dfrac14\sin(4x)+C$.` },
      { t: "Changing the limits", q: r`Evaluate $${I(0, 3, r`\dfrac{2x}{x^2+1}`)}$.`, s: r`$u=x^2+1$, $du=2x\,dx$; when $x=0$, $u=1$; when $x=3$, $u=10$. $${I(1, 10, r`\dfrac1u`, "u")}$.`, r: r`$\ln10$.` },
    ],
    core: [
      r`Find $\displaystyle\int2x\left(x^2+1\right)^3dx$.`,
      r`Find $\displaystyle\int e^{5x}\,dx$.`,
      r`Find $\displaystyle\int\sin(3x)\,dx$.`,
      r`Find $\displaystyle\int\dfrac{1}{2x+1}\,dx$.`,
    ],
    exam: [
      r`Find $\displaystyle\int x\sqrt{x^2+9}\,dx$.`,
      r`Evaluate $${I(0, r`\pi/2`, r`\sin^2x\cos x`)}$.`,
      r`Evaluate $${I(0, 1, r`x^2\left(x^3+1\right)^3`)}$.`,
      r`Find $\displaystyle\int\cot x\,dx$ by writing $\cot x=\dfrac{\cos x}{\sin x}$.`,
    ],
    fr: {
      intro: r`Answer each part. No calculator is permitted.`,
      parts: [
        r`Evaluate $${I(0, 2, r`\dfrac{x}{x^2+4}`)}$.`,
        r`Evaluate $${I(0, r`\pi`, r`\sin x\,e^{\cos x}`)}$.`,
        r`If $${I(0, 8, "f(x)")}=20$, find $${I(0, 2, "f(4x)")}$.`,
      ],
    },
    sol: {
      core: [
        r`$u=x^2+1$: $\dfrac{\left(x^2+1\right)^4}{4}+C$.`,
        r`$\dfrac15e^{5x}+C$.`,
        r`$-\dfrac13\cos(3x)+C$.`,
        r`$\dfrac12\ln|2x+1|+C$.`,
      ],
      exam: [
        r`$u=x^2+9$: $\dfrac12\cdot\dfrac23u^{3/2}=\dfrac13\left(x^2+9\right)^{3/2}+C$.`,
        r`$u=\sin x$ from 0 to 1: $\Big[\dfrac{u^3}{3}\Big]_0^1=\dfrac13$.`,
        r`$u=x^3+1$ from 1 to 2: $\dfrac13\Big[\dfrac{u^4}{4}\Big]_1^2=\dfrac{15}{12}=\dfrac54$.`,
        r`$u=\sin x$, $du=\cos x\,dx$: $\ln|\sin x|+C$.`,
      ],
      fr: [
        r`$u=x^2+4$ from 4 to 8: $\dfrac12\Big[\ln u\Big]_4^8=\dfrac12\ln2$.`,
        r`$u=\cos x$ from 1 to $-1$, $du=-\sin x\,dx$: $${I(-1, 1, "e^{u}", "u")}=e-\dfrac1e$.`,
        r`$u=4x$, $dx=\dfrac14du$, limits 0 to 8: $\dfrac14(20)=5$.`,
      ],
    },
  },

  // ───────────── 6.10 ─────────────
  {
    code: "6.10", title: "Rational Integrands: Division and Completing the Square", unit: UNIT,
    ideas: [
      r`If the denominator is a single term, \textbf{divide each term} of the numerator by it.`,
      r`If the numerator's degree is at least the denominator's, do \textbf{long division} first.`,
      r`$\displaystyle\int\dfrac{1}{x^2+a^2}\,dx=\dfrac1a\arctan\!\left(\dfrac xa\right)+C$.`,
      r`A quadratic denominator with no real zeros: \textbf{complete the square}, then use the arctangent form.`,
    ],
    examples: [
      { t: "Dividing term by term", q: r`Find $\displaystyle\int\dfrac{x^3-2x+4}{x^2}\,dx$.`, s: r`$\displaystyle\int\left(x-\dfrac2x+4x^{-2}\right)dx$.`, r: r`$\dfrac{x^2}{2}-2\ln|x|-\dfrac4x+C$.` },
      { t: "Long division", q: r`Find $\displaystyle\int\dfrac{x^2+1}{x-1}\,dx$.`, s: r`$\dfrac{x^2+1}{x-1}=x+1+\dfrac{2}{x-1}$.`, r: r`$\dfrac{x^2}{2}+x+2\ln|x-1|+C$.` },
      { t: "Completing the square", q: r`Find $\displaystyle\int\dfrac{1}{x^2+4x+5}\,dx$.`, s: r`$x^2+4x+5=(x+2)^2+1$.`, r: r`$\arctan(x+2)+C$.` },
    ],
    core: [
      r`Find $\displaystyle\int\dfrac{x+3}{x}\,dx$.`,
      r`Find $\displaystyle\int\dfrac{1}{x^2+25}\,dx$.`,
      r`Find $\displaystyle\int\dfrac{5}{x+2}\,dx$.`,
      r`Complete the square: $x^2-6x+13$.`,
    ],
    exam: [
      r`Find $\displaystyle\int\dfrac{x^2+3x}{x+2}\,dx$.`,
      r`Find $\displaystyle\int\dfrac{1}{x^2-6x+13}\,dx$.`,
      r`Find $\displaystyle\int\dfrac{2x+3}{x^2+1}\,dx$.`,
      r`Evaluate $\displaystyle\int_0^{\sqrt3}\dfrac{1}{1+x^2}\,dx$.`,
    ],
    fr: {
      intro: r`Let $q(x)=x^2+4x+8$.`,
      parts: [
        r`Find $\displaystyle\int\dfrac{4x+8}{q(x)}\,dx$.`,
        r`Find $\displaystyle\int\dfrac{1}{q(x)}\,dx$.`,
        r`Use parts (a) and (b) to find $\displaystyle\int\dfrac{4x+9}{q(x)}\,dx$.`,
      ],
    },
    sol: {
      core: [
        r`$x+3\ln|x|+C$.`,
        r`$\dfrac15\arctan\!\left(\dfrac x5\right)+C$.`,
        r`$5\ln|x+2|+C$.`,
        r`$(x-3)^2+4$.`,
      ],
      exam: [
        r`$\dfrac{x^2+3x}{x+2}=x+1-\dfrac{2}{x+2}$: $\dfrac{x^2}{2}+x-2\ln|x+2|+C$.`,
        r`$(x-3)^2+4$: $\dfrac12\arctan\!\left(\dfrac{x-3}{2}\right)+C$.`,
        r`$\displaystyle\int\dfrac{2x}{x^2+1}\,dx+3\int\dfrac{1}{x^2+1}\,dx=\ln\!\left(x^2+1\right)+3\arctan x+C$.`,
        r`$\Big[\arctan x\Big]_0^{\sqrt3}=\dfrac\pi3$.`,
      ],
      fr: [
        r`The numerator is $2q'(x)$: $2\ln\!\left(x^2+4x+8\right)+C$.`,
        r`$q(x)=(x+2)^2+4$: $\dfrac12\arctan\!\left(\dfrac{x+2}{2}\right)+C$.`,
        r`$4x+9=(4x+8)+1$: $2\ln\!\left(x^2+4x+8\right)+\dfrac12\arctan\!\left(\dfrac{x+2}{2}\right)+C$.`,
      ],
    },
  },

  // ───────────── 6.11 ─────────────
  {
    code: "6.11", title: "Choosing an Integration Method", unit: UNIT,
    ideas: [
      r`First ask whether \textbf{algebra} is enough: expand a product, or divide a quotient term by term.`,
      r`Then look for a \textbf{substitution}: an inside function whose derivative is present, up to a constant.`,
      r`A numerator that is the derivative of the denominator gives a \textbf{logarithm}.`,
      r`A constant over a quadratic with no real zeros gives an \textbf{arctangent}, after completing the square.`,
    ],
    examples: [
      { t: "A logarithm", q: r`Find $\displaystyle\int\dfrac{2x+1}{x^2+x+3}\,dx$.`, s: r`The numerator is the derivative of the denominator.`, r: r`$\ln\!\left(x^2+x+3\right)+C$.` },
      { t: "Algebra first", q: r`Find $\displaystyle\int\dfrac{(x+1)^2}{\sqrt{x}}\,dx$.`, s: r`Expand and divide: $x^{3/2}+2x^{1/2}+x^{-1/2}$.`, r: r`$\dfrac25x^{5/2}+\dfrac43x^{3/2}+2\sqrt{x}+C$.` },
      { t: "An arctangent", q: r`Find $\displaystyle\int\dfrac{1}{x^2+2x+2}\,dx$.`, s: r`$x^2+2x+2=(x+1)^2+1$.`, r: r`$\arctan(x+1)+C$.` },
    ],
    core: [
      r`Find $\displaystyle\int\left(3x^2+1\right)\left(x^3+x\right)^5dx$.`,
      r`Find $\displaystyle\int\dfrac{x^2+1}{x^2}\,dx$.`,
      r`Find $\displaystyle\int\dfrac{1}{1+4x^2}\,dx$.`,
      r`Find $\displaystyle\int\dfrac{e^{x}}{e^{x}+2}\,dx$.`,
    ],
    exam: [
      r`Find $\displaystyle\int\dfrac{\sin x}{\cos^2x}\,dx$.`,
      r`Find $\displaystyle\int\dfrac{x}{x+3}\,dx$.`,
      r`Find $\displaystyle\int\dfrac{e^{2x}}{1+e^{4x}}\,dx$.`,
      r`Find $\displaystyle\int\dfrac{\cos(\ln x)}{x}\,dx$ for $x>0$.`,
    ],
    fr: {
      intro: r`Evaluate each integral. Name the method you use.`,
      parts: [
        r`$\displaystyle\int_0^1\dfrac{x+2}{x^2+4x+1}\,dx$`,
        r`$\displaystyle\int_0^1\dfrac{x}{x+1}\,dx$`,
        r`$\displaystyle\int_0^{1/2}\dfrac{1}{\sqrt{1-x^2}}\,dx$`,
      ],
    },
    sol: {
      core: [
        r`Substitution $u=x^3+x$: $\dfrac{\left(x^3+x\right)^6}{6}+C$.`,
        r`Divide: $\displaystyle\int\left(1+x^{-2}\right)dx=x-\dfrac1x+C$.`,
        r`Arctangent with $u=2x$: $\dfrac12\arctan(2x)+C$.`,
        r`Substitution $u=e^{x}+2$: $\ln\!\left(e^{x}+2\right)+C$.`,
      ],
      exam: [
        r`$u=\cos x$: $\displaystyle\int-u^{-2}\,du=\dfrac1u=\sec x+C$.`,
        r`Division: $1-\dfrac{3}{x+3}$, giving $x-3\ln|x+3|+C$.`,
        r`$u=e^{2x}$, $du=2e^{2x}dx$: $\dfrac12\arctan\!\left(e^{2x}\right)+C$.`,
        r`$u=\ln x$: $\sin(\ln x)+C$.`,
      ],
      fr: [
        r`Substitution $u=x^2+4x+1$, $du=2(x+2)\,dx$, limits 1 to 6: $\dfrac12\ln6$.`,
        r`Division: $\displaystyle\int_0^1\left(1-\dfrac{1}{x+1}\right)dx=1-\ln2$.`,
        r`Inverse sine: $\Big[\arcsin x\Big]_0^{1/2}=\dfrac\pi6$.`,
      ],
    },
  },

  // ───────────── 6.12 ─────────────
  {
    space: { core: "1.1cm", exam: "2.1cm", fr: "1.9cm" },
    code: "6.12", title: "Integrals from Graphs and Tables", unit: UNIT,
    pre: r`Questions 1 to 7 use this graph of $f$, which consists of four line segments.` + "\n" + GRAPH_K,
    ideas: [
      r`From a graph, a definite integral is a sum of \textbf{signed areas} of triangles, rectangles and parts of circles.`,
      r`From a table, an integral can only be \textbf{approximated}, with a Riemann or trapezoidal sum.`,
      r`But $${I("a", "b", "f'(x)")}=f(b)-f(a)$ is \textbf{exact}, from two values of $f$.`,
      r`The properties of integrals apply as usual: constants, sums and reversed limits.`,
    ],
    examples: [
      { t: "Areas", q: r`The graph of $g$ is the line segment from $(0,3)$ to $(6,-3)$. Evaluate $${I(0, 6, "g(x)")}$ and $${I(0, 6, "|g(x)|")}$.`, s: r`Triangles of area $\dfrac92$ above the axis and $\dfrac92$ below.`, r: r`$0$ and $9$.` },
      { t: "A table", q: r`Selected values of $h$ are shown.` + tab("x", [0, 2, 6, 7], "h(x)", [5, 9, 3, 1]) + r`Approximate $${I(0, 7, "h(x)")}$ with a trapezoidal sum.`, s: r`$\dfrac12(5+9)(2)+\dfrac12(9+3)(4)+\dfrac12(3+1)(1)=14+24+2$.`, r: r`$40$.` },
      { t: "The integral of a derivative", q: r`For the function $h$ above, assumed differentiable, find $${I(0, 7, "h'(x)")}$.`, s: r`$h(7)-h(0)$.`, r: r`$-4$, exactly.` },
    ],
    core: [
      r`Find $${I(-3, 1, "f(x)")}$.`,
      r`Find $${I(1, 5, "f(x)")}$.`,
      r`Find $${I(-3, 5, "f(x)")}$.`,
      r`Find $${I(-3, 5, "|f(x)|")}$.`,
    ],
    exam: [
      r`Find $${I(-1, 3, "f(x)")}$.`,
      r`Find $${I(-3, 1, r`\big[2f(x)+1\big]`)}$.`,
      r`Find $${I(-1, 3, "f'(x)")}$.`,
      r`A differentiable function $k$ has $k(2)=11$ and $${I(2, 9, "k'(x)")}=-6$. Find $k(9)$.`,
    ],
    fr: {
      intro: r`The function $h$ is differentiable on $[0,10]$. Selected values are shown.` + tab("t", [0, 4, 6, 10], "h(t)", [8, 14, 11, 3]),
      parts: [
        r`Approximate $${I(0, 10, "h(t)", "t")}$ with a trapezoidal sum using the three subintervals of the table.`,
        r`Find the exact value of $${I(0, 10, "h'(t)", "t")}$.`,
        r`Find the exact value of $${I(4, 10, r`\big[h'(t)+2\big]`, "t")}$.`,
      ],
    },
    sol: {
      core: [
        r`A triangle of base 4 and height 4: $8$.`,
        r`A triangle of base 4 and depth 2: $-4$.`,
        r`$8-4=4$.`,
        r`$8+4=12$.`,
      ],
      exam: [
        r`On $[-1,1]$: $\dfrac12(2)(4)=4$. On $[1,3]$: $-\dfrac12(2)(2)=-2$. Value $2$.`,
        r`$2(8)+1(4)=20$.`,
        r`$f(3)-f(-1)=-2-4=-6$.`,
        r`$11+(-6)=5$.`,
      ],
      fr: [
        r`$\dfrac12(8+14)(4)+\dfrac12(14+11)(2)+\dfrac12(11+3)(4)=44+25+28=97$.`,
        r`$h(10)-h(0)=-5$.`,
        r`$\big(h(10)-h(4)\big)+2(6)=-11+12=1$.`,
      ],
    },
  },

  // ───────────── 6.13 ─────────────
  {
    code: "6.13", title: "Unit 6 Synthesis: The Accumulation Free-Response Question", unit: UNIT,
    ideas: [
      r`Amount at time $t$ $=$ starting amount $+\ ${I(0, "t", r`\text{rate}`, "s")}$.`,
      r`The derivative of an accumulation function is its integrand, so its extrema are where the integrand changes sign.`,
      r`On a closed interval, compare the values at critical points \textbf{and} endpoints.`,
      r`Write the integral before evaluating it: the set-up earns a point of its own.`,
    ],
    examples: [
      { t: "An amount from a rate", q: r`A tank holds 20 litres at $t=0$, and water flows in at the net rate $6-2t$ litres per minute. Find the amount at $t=4$ and the greatest amount for $0\le t\le4$.`, s: r`$A(t)=20+${I(0, "t", "(6-2s)", "s")}=20+6t-t^2$. $A'(t)=6-2t=0$ at $t=3$.`, r: r`$A(4)=28$; the greatest amount is $A(3)=29$ litres.` },
      { t: "Differentiating an accumulation", q: r`Find $\dfrac{d}{dx}${I(1, "x", "te^{t}", "t")}$.`, s: r`Fundamental Theorem, Part 1.`, r: r`$xe^{x}$.` },
      { t: "A definite substitution", q: r`Evaluate $${I(0, 1, r`6x\left(x^2+1\right)^2`)}$.`, s: r`$u=x^2+1$ from 1 to 2: $${I(1, 2, "3u^2", "u")}$.`, r: r`$8-1=7$.` },
    ],
    core: [
      r`Evaluate $${I(0, 3, "(2x+1)")}$.`,
      r`Find $\displaystyle\int\sec^2(2x)\,dx$.`,
      r`Find $\dfrac{d}{dx}${I(0, "x", r`\sqrt{t^2+9}`, "t")}$ and its value at $x=4$.`,
      r`A differentiable function $f$ has $f(1)=3$ and $f(4)=-2$. Find $${I(1, 4, "f'(x)")}$.`,
    ],
    exam: [
      r`Water flows into a pond at the net rate $R(t)=12-3t$ litres per minute for $0\le t\le6$. Find the net change in the amount of water over the 6 minutes, and the time at which the amount is greatest.`,
      r`Evaluate $${I(0, 2, r`x\sqrt{4-x^2}`)}$.`,
      r`Let $F(x)=${I(0, "x", "(t-2)e^{t}", "t")}$. At what value of $x$ does $F$ have a relative minimum? Justify your answer.`,
      r`A particle has velocity $v(t)=t^2-4$ for $0\le t\le3$. Find the total distance it travels.`,
    ],
    fr: {
      intro: r`Let $G(x)=${I(0, "x", r`\left(3t^2-12\right)`, "t")}$ for $0\le x\le4$.`,
      parts: [
        r`Find $G'(x)$ and $G''(x)$.`,
        r`Find the $x$-coordinate of the relative minimum of $G$, justify it, and find the value of $G$ there.`,
        r`Find the absolute maximum value of $G$ on $[0,4]$. Justify your answer.`,
      ],
    },
    sol: {
      core: [
        r`$\Big[x^2+x\Big]_0^3=12$.`,
        r`$\dfrac12\tan(2x)+C$.`,
        r`$\sqrt{x^2+9}$; at $x=4$ it is $5$.`,
        r`$f(4)-f(1)=-5$.`,
      ],
      exam: [
        r`$${I(0, 6, "(12-3t)", "t")}=72-54=18$ litres. $R$ changes from positive to negative at $t=4$, so the amount is greatest then.`,
        r`$u=4-x^2$ from 4 to 0, $x\,dx=-\dfrac12du$: $\dfrac12${I(0, 4, r`\sqrt u`, "u")}=\dfrac12\cdot\dfrac23(8)=\dfrac83$.`,
        r`$F'(x)=(x-2)e^{x}$ changes from negative to positive at $x=2$.`,
        r`$v$ changes sign at $t=2$. $${I(0, 2, "(t^2-4)", "t")}=-\dfrac{16}{3}$ and $${I(2, 3, "(t^2-4)", "t")}=\dfrac73$. Distance $\dfrac{16}{3}+\dfrac73=\dfrac{23}{3}$.`,
      ],
      fr: [
        r`$G'(x)=3x^2-12$ and $G''(x)=6x$.`,
        r`$G'(x)=3(x-2)(x+2)$ changes from negative to positive at $x=2$. $G(2)=\Big[t^3-12t\Big]_0^2=-16$.`,
        r`Candidates: $G(0)=0$, $G(2)=-16$, $G(4)=64-48=16$. The absolute maximum is 16, at $x=4$.`,
      ],
    },
  },
];

export default sheets;
