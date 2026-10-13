// AP Calculus AB worksheets — Unit 9 (Exam Strategy and Free-Response Types).
// Original problems throughout, different from those in the lessons, the
// question bank and the online free-response questions. Written in LaTeX;
// build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 9: Exam Strategy and Free-Response Types";
const tab = (a, xs, b, ys) => r`\begin{center}\renewcommand{\arraystretch}{1.25}\begin{tabular}{|c|${"c|".repeat(xs.length)}}\hline $${a}$ & ${xs.map((x) => `$${x}$`).join(" & ")} \\ \hline $${b}$ & ${ys.map((y) => `$${y}$`).join(" & ")} \\ \hline\end{tabular}\end{center}`;
const tab3 = (a, xs, b, ys, c, zs) => r`\begin{center}\renewcommand{\arraystretch}{1.25}\begin{tabular}{|c|${"c|".repeat(xs.length)}}\hline $${a}$ & ${xs.map((x) => `$${x}$`).join(" & ")} \\ \hline $${b}$ & ${ys.map((y) => `$${y}$`).join(" & ")} \\ \hline $${c}$ & ${zs.map((z) => `$${z}$`).join(" & ")} \\ \hline\end{tabular}\end{center}`;
const I = (a, b, body, v = "x") => `\\displaystyle\\int_{${a}}^{${b}}${body}\\,d${v}`;
const CALC = r`\emph{A calculator is required on this page. Give decimal answers to three places.}`;
const NOCALC = r`\emph{No calculator on this page.}`;
const opts = (a, b, c, d) => r` \\[2pt] (A) ${a} \qquad (B) ${b} \qquad (C) ${c} \qquad (D) ${d}`;

// 9.5: graph of f', through (-3,1) (-1,2) (1,-2) (3,0) (5,4).
// Signed areas: [-3,-1] 3, [-1,0] 1, [0,1] -1, [1,3] -2, [3,5] 4.
// With f(-1)=3: f(-3)=0, f(0)=4, f(1)=3, f(3)=1, f(5)=5.
const GRAPH_D = r`\begin{apgraph}{-4}{6}{-3}{5}
\addplot[color=ink, mark=none, line width=1.1pt] coordinates {(-3,1) (-1,2) (1,-2) (3,0) (5,4)};
\closeddot{-3}{1}\closeddot{5}{4}
\node[font=\small, color=ink] at (axis cs:3.2,2.6) {$y=f'(x)$};
\end{apgraph}`;

const sheets = [
  // ───────────── 9.1 ─────────────
  {
    code: "9.1", title: "How the Exam Is Built and Scored", unit: UNIT,
    ideas: [
      r`\textbf{Section I}: 29 multiple-choice questions in 62 minutes without a calculator, then 13 in 38 minutes with one.`,
      r`\textbf{Section II}: 2 free-response questions in 30 minutes with a calculator, then 4 in 60 minutes without one.`,
      r`Each multiple-choice question is worth 1 point and each free-response question 9. The two sections count equally. A wrong multiple-choice answer costs nothing.`,
      r`On free response, the set-up earns points. Write the integral, equation or derivative before its value.`,
    ],
    examples: [
      { t: "Pacing", q: r`In the calculator multiple-choice part you have answered 9 of the 13 questions and 10 minutes remain. Are you on pace?`, s: r`4 questions in 10 minutes is 2.5 minutes each; the average for the part is about 2.9.`, r: r`Slightly behind. Answer what you can quickly and leave no question blank.` },
      { t: "Combining the sections", q: r`A student earns 34 of 42 multiple-choice points and 27 of 54 free-response points. What fraction of the total is this?`, s: r`$\dfrac12\left(\dfrac{34}{42}+\dfrac{27}{54}\right)$.`, r: r`About 0.655, or 65.5\%.` },
      { t: "Decimal answers", q: r`The value of an integral is $3.14159\ldots$ Which of $3.1$, $3.141$ and $3.142$ would be accepted?`, s: r`A decimal answer must be correct to three places after the point, rounded or truncated.`, r: r`$3.141$ and $3.142$, but not $3.1$.` },
    ],
    core: [
      r`How many free-response questions are there, and on how many of them is a calculator used?`,
      r`How long is Section I in total?`,
      r`What is the greatest number of points available in Section II?`,
      r`What is the average time per question in the no-calculator multiple-choice part?`,
    ],
    exam: [
      r`A student earns 25 of 42 multiple-choice points and 40 of 54 free-response points. What fraction of the total is this?`,
      r`A student expects 36 of 54 on the free response and wants at least 60\% overall. How many multiple-choice questions must be correct?`,
      r`With 20 minutes left in the no-calculator free-response part, two questions are untouched. Describe a sensible plan.`,
      r`In part (b) you need your answer to part (a), which you suspect is wrong and cannot fix. What should you do?`,
    ],
    fr: {
      intro: r`\emph{No calculator. Write each answer as you would in the exam: set-up first, then the value, then the reason.} Let $f(x)=x^3-3x^2$.`,
      parts: [
        r`Find the average value of $f$ on $[0,2]$.`,
        r`Write an equation of the line tangent to the graph of $f$ at $x=1$.`,
        r`Show that $f$ has a relative minimum at $x=2$. Justify your answer.`,
      ],
    },
    sol: {
      core: [
        r`6 questions; a calculator is used on 2.`,
        r`$62+38=100$ minutes.`,
        r`$6\times9=54$.`,
        r`$\dfrac{62}{29}\approx2.1$ minutes.`,
      ],
      exam: [
        r`$\dfrac12\left(\dfrac{25}{42}+\dfrac{40}{54}\right)\approx0.668$.`,
        r`$\dfrac12\left(\dfrac{x}{42}+\dfrac{36}{54}\right)\ge0.6$ gives $x\ge22.4$: at least 23.`,
        r`About 10 minutes each. Read every part of both, write the set-ups you can, and attempt the parts that stand alone first.`,
        r`Use your own value and carry on. Work that follows correctly from an earlier error can still earn full credit.`,
      ],
      fr: [
        r`$\dfrac12${I(0, 2, "(x^3-3x^2)")}=\dfrac12\Big[\tfrac{x^4}{4}-x^3\Big]_0^2=\dfrac12(-4)=-2$.`,
        r`$f(1)=-2$ and $f'(1)=3-6=-3$: $y+2=-3(x-1)$.`,
        r`$f'(x)=3x(x-2)$, so $f'(2)=0$, and $f'$ changes from negative to positive at $x=2$. Therefore $f$ has a relative minimum there.`,
      ],
    },
  },

  // ───────────── 9.2 ─────────────
  {
    code: "9.2", title: "A Phrase Bank for Justifications", unit: UNIT,
    pre: NOCALC,
    ideas: [
      r`\textbf{Extremum}: \textquotedblleft{}$f'$ changes from positive to negative at $x=c$, so $f$ has a relative maximum there.\textquotedblright{} Name the sign change.`,
      r`\textbf{Theorems}: state the condition, then the conclusion. IVT and EVT need continuity; MVT needs continuity on $[a,b]$ and differentiability on $(a,b)$.`,
      r`\textbf{Over or under}: a tangent line lies below a graph that is concave up; a left sum underestimates for an increasing function.`,
      r`\textbf{Speed}: increasing when $v$ and $a$ have the same sign. Give both values.`,
    ],
    examples: [
      { t: "A sign change", q: r`$f'(x)=(x-2)(x+1)^2$. Justify the location of every relative extremum of $f$.`, s: r`$f'$ changes from negative to positive at $x=2$. At $x=-1$ it is negative on both sides.`, r: r`A relative minimum at $x=2$ only; no extremum at $x=-1$ because $f'$ does not change sign.` },
      { t: "A theorem", q: r`$f$ is continuous on $[1,5]$ with $f(1)=-3$ and $f(5)=4$. Must $f(c)=0$ for some $c$ in $(1,5)$?`, s: r`$0$ lies between $f(1)$ and $f(5)$.`, r: r`Yes: $f$ is continuous on $[1,5]$ and $-3<0<4$, so by the Intermediate Value Theorem such a $c$ exists.` },
      { t: "Over or under", q: r`$f''(x)>0$ for all $x$. Is a tangent-line approximation of $f$ an overestimate or an underestimate?`, s: r`The graph is concave up, so it lies above each tangent line.`, r: r`An underestimate, because $f''>0$.` },
    ],
    core: [
      r`$f'(3)=0$ and $f''(3)=-2$. What can you conclude, and why?`,
      r`$g'(x)>0$ for all $x$ in $(0,4)$. Write a one-sentence justification that $g$ is increasing on $[0,4]$.`,
      r`$h$ is differentiable on $[2,6]$ with $h(2)=1$ and $h(6)=13$. What does the Mean Value Theorem guarantee?`,
      r`Is a left Riemann sum for a decreasing function an overestimate or an underestimate of the integral?`,
    ],
    exam: [
      r`$f$ is differentiable for all $x$, with $f(0)=5$, $f(2)=1$ and $f(5)=7$. Explain why $f'(c)=0$ for some $c$ in $(0,5)$.`,
      r`$f''(x)=(x-1)^2(x-4)$. Find the $x$-coordinate of every point of inflection of $f$, with justification.`,
      r`$f''(x)>0$ on $[a,b]$. Is a trapezoidal sum for $${I("a", "b", "f(x)")}$ an overestimate or an underestimate? Give a reason.`,
      r`A particle has $v(3)=-4$ and $a(3)=2$. Is its speed increasing or decreasing at $t=3$? Give a reason.`,
    ],
    fr: {
      intro: r`The function $f$ is twice differentiable. Selected values of $f$ and $f'$ are given in the table.` + tab3("x", [1, 3, 5, 8], "f(x)", [2, 6, 5, 11], "f'(x)", [3, 1, -2, 4]),
      parts: [
        r`Must there be a value $c$, $3<c<5$, with $f'(c)=-\dfrac12$? Justify your answer.`,
        r`Must there be a value $c$, $5<c<8$, with $f'(c)=0$? Justify your answer.`,
        r`Use the tangent line at $x=3$ to approximate $f(3.5)$. Given that $f''(x)<0$ for $3<x<5$, is the approximation an overestimate or an underestimate? Give a reason.`,
      ],
    },
    sol: {
      core: [
        r`$f$ has a relative maximum at $x=3$, by the Second Derivative Test: $f'(3)=0$ and $f''(3)<0$.`,
        r`$g$ is increasing on $[0,4]$ because $g'(x)>0$ on $(0,4)$.`,
        r`$h$ is differentiable, hence continuous, so there is a $c$ in $(2,6)$ with $h'(c)=\dfrac{13-1}{6-2}=3$.`,
        r`An overestimate: each rectangle uses the left, largest, value.`,
      ],
      exam: [
        r`$f$ is continuous, and $5$ lies between $f(2)=1$ and $f(5)=7$, so by the IVT $f(b)=5$ for some $b$ in $(2,5)$. Then $f(0)=f(b)$, and the MVT on $[0,b]$ gives $f'(c)=0$.`,
        r`$x=4$ only: $f''$ changes from negative to positive there. At $x=1$, $f''$ is negative on both sides, so there is no change of concavity.`,
        r`An overestimate: the graph is concave up, so each chord lies above the graph.`,
        r`Decreasing, because $v(3)<0$ and $a(3)>0$ have opposite signs.`,
      ],
      fr: [
        r`Yes. $f$ is differentiable, hence continuous, on $[3,5]$, so by the MVT there is a $c$ with $f'(c)=\dfrac{5-6}{5-3}=-\dfrac12$.`,
        r`Yes. $f$ is twice differentiable, so $f'$ is continuous on $[5,8]$, and $f'(5)=-2<0<4=f'(8)$. By the IVT, $f'(c)=0$ for some $c$.`,
        r`$f(3.5)\approx6+1(0.5)=6.5$. An overestimate: $f''<0$, so the graph is concave down and lies below its tangent line.`,
      ],
    },
  },

  // ───────────── 9.3 ─────────────
  {
    code: "9.3", title: "Calculator Strategy", unit: UNIT,
    pre: CALC,
    ideas: [
      r`The calculator is for four jobs: graphing in a window, solving an equation, a derivative at a point, and a definite integral.`,
      r`Write the mathematics, not the keystrokes: the integral or equation in standard notation, then $\approx$ and the value.`,
      r`Store intermediate values. Round only the final answer, to three decimal places.`,
      r`Radian mode, always.`,
    ],
    examples: [
      { t: "Solving", q: r`Solve $x^3+x=5$.`, s: r`Graph $y=x^3+x-5$ and find its zero.`, r: r`$x\approx1.516$.` },
      { t: "A derivative at a point", q: r`Find $f'(2)$ for $f(x)=\sqrt{x}\,\sin x$.`, s: r`Use the numerical derivative at $x=2$.`, r: r`$f'(2)\approx-0.267$.` },
      { t: "A definite integral", q: r`Evaluate $${I(0, 2, r`\sqrt{1+x^3}`)}$.`, s: r`Use the numerical integral.`, r: r`$\approx3.241$.` },
    ],
    core: [
      r`Evaluate $${I(0, 1, "e^{x^2}")}$.`,
      r`Solve $\ln x+x=3$.`,
      r`Find $f'(0.5)$ for $f(x)=\tan\!\left(x^2\right)$.`,
      r`A calculator displays $7.34846\ldots$ Which of $7.3$, $7.34$, $7.348$ and $7.349$ are acceptable final answers?`,
    ],
    exam: [
      r`Find the area between $y=\sin\!\left(x^2\right)$ and the $x$-axis for $0\le x\le\sqrt{\pi}$.`,
      r`A particle has $v(t)=\ln(t+1)-1$ for $0\le t\le4$. Find the total distance it travels. Write the integral first.`,
      r`Find the average value of $f(x)=\sqrt{x}\,\cos x$ on $[0,3]$.`,
      r`A rate is modelled by $R(t)=10te^{-0.4t}$ for $t\ge0$. Find both times at which $R(t)=6$.`,
    ],
    fr: {
      intro: r`Rain falls at the rate $r(t)=5\sqrt{t}\,e^{-0.3t}$ millimetres per hour for $0\le t\le8$, where $t$ is in hours.`,
      parts: [
        r`Find the total rainfall for $0\le t\le8$.`,
        r`Find $r'(3)$, and interpret it in context with units.`,
        r`Find the interval of time during which rain is falling at more than 3 millimetres per hour.`,
      ],
    },
    sol: {
      core: [
        r`$\approx1.463$.`,
        r`$x\approx2.208$.`,
        r`$f'(0.5)\approx1.065$.`,
        r`$7.348$ (rounded or truncated). The value $7.349$ is wrong, and the others have too few places.`,
      ],
      exam: [
        r`$${I(0, r`\sqrt\pi`, r`\sin\!\left(x^2\right)`)}\approx0.895$.`,
        r`$${I(0, 4, r`\left|\ln(t+1)-1\right|`, "t")}\approx1.484$.`,
        r`$\dfrac13${I(0, 3, r`\sqrt x\,\cos x`)}\approx-0.216$.`,
        r`$t\approx0.839$ and $t\approx5.571$.`,
      ],
      fr: [
        r`$${I(0, 8, "r(t)", "t")}\approx21.923$ millimetres.`,
        r`$r'(3)\approx-0.469$. At $t=3$ hours the rate of rainfall is decreasing at about 0.469 millimetres per hour per hour.`,
        r`$r(t)=3$ at $t\approx0.480$ and $t\approx4.023$, and $r(t)>3$ between them: $0.480<t<4.023$.`,
      ],
    },
  },

  // ───────────── 9.4 ─────────────
  {
    code: "9.4", title: "Free-Response Type: Rates and Accumulation", unit: UNIT,
    pre: CALC,
    ideas: [
      r`An integral of a rate is an amount. Its units are the units of the rate times the units of time.`,
      r`Amount at time $t$ $=$ starting amount $+$ integral of (rate in $-$ rate out).`,
      r`The derivative of a rate tells how fast the rate itself is changing: units per time, per time.`,
      r`For a greatest or least amount, compare the endpoints with every time at which rate in $=$ rate out.`,
    ],
    examples: [
      { t: "An amount", q: r`A bath fills at $R(t)=20-2t$ litres per minute for $0\le t\le10$. How much water enters in the first 5 minutes?`, s: r`$${I(0, 5, "(20-2t)", "t")}=100-25$.`, r: r`75 litres.` },
      { t: "An average rate", q: r`Find the average rate at which the bath fills for $0\le t\le10$.`, s: r`$\dfrac{1}{10}${I(0, 10, "(20-2t)", "t")}=\dfrac{100}{10}$.`, r: r`10 litres per minute.` },
      { t: "The derivative of a rate", q: r`Find $R'(4)$ and interpret it.`, s: r`$R'(t)=-2$.`, r: r`The rate of filling is decreasing at 2 litres per minute per minute.` },
    ],
    core: [
      r`$r(t)$ is measured in people per hour and $t$ in hours. What are the units of $${I(2, 5, "r(t)", "t")}$?`,
      r`With the same units, what are the units of $r'(t)$?`,
      r`A tank holds 200 litres at $t=0$. Water enters at $f(t)$ and leaves at $g(t)$ litres per minute. Write an expression for the amount in the tank at time $t$.`,
      r`Explain in words the meaning of $\dfrac15${I(0, 5, "r(t)", "t")}$, where $r(t)$ is in people per hour.`,
    ],
    exam: [
      r`Visitors enter a gallery at $E(t)=60te^{-0.3t}$ people per hour and leave at $L(t)=25+3t$ people per hour, for $0\le t\le9$. There are 100 visitors at $t=0$. How many visitors enter for $0\le t\le9$?`,
      r`Is the number of visitors in the gallery increasing or decreasing at $t=6$? Give a reason.`,
      r`Find $E'(2)$, and interpret it in context with units.`,
      r`Find the greatest number of visitors in the gallery for $0\le t\le9$. Justify your answer.`,
    ],
    fr: {
      intro: r`Parcels arrive at a depot at the rate $A(t)=150+60\sin\!\left(\dfrac{\pi t}{6}\right)$ parcels per hour and are sorted at a constant rate of 160 parcels per hour, for $0\le t\le8$. At $t=0$ there are 200 unsorted parcels.`,
      parts: [
        r`How many parcels arrive for $0\le t\le8$?`,
        r`Is the number of unsorted parcels increasing or decreasing at $t=4$? Give a reason.`,
        r`Find the greatest number of unsorted parcels for $0\le t\le8$. Justify your answer.`,
      ],
    },
    sol: {
      core: [
        r`People.`,
        r`People per hour per hour.`,
        r`$200+${I(0, "t", r`\big(f(x)-g(x)\big)`)}$.`,
        r`The average rate, in people per hour, over the first 5 hours.`,
      ],
      exam: [
        r`$${I(0, 9, "E(t)", "t")}\approx500.893$, about 501 visitors.`,
        r`Increasing: $E(6)\approx59.508>L(6)=43$.`,
        r`$E'(2)\approx13.171$. At $t=2$ hours, the rate at which visitors enter is increasing at about 13.171 people per hour per hour.`,
        r`$E(t)=L(t)$ at $t\approx0.517$ and $t\approx7.494$. Numbers: 100 at $t=0$; about 93.910 at $t\approx0.517$; about 266.427 at $t\approx7.494$; about 254.393 at $t=9$. The greatest is about 266 visitors.`,
      ],
      fr: [
        r`$${I(0, 8, "A(t)", "t")}\approx1371.887$ parcels.`,
        r`Increasing: $A(4)-160\approx41.962>0$.`,
        r`$A(t)=160$ at $t\approx0.320$ and $t\approx5.680$. Unsorted parcels: 200 at $t=0$; about 198.405 at $t\approx0.320$; $200+${I(0, 5.680, r`\big(A(t)-160\big)`, "t")}\approx370.778$ at $t\approx5.680$; about 291.887 at $t=8$. The greatest is about 371 parcels.`,
      ],
    },
  },

  // ───────────── 9.5 ─────────────
  {
    code: "9.5", title: "Free-Response Type: Functions Given by Graphs and Tables", unit: UNIT,
    space: { core: "1.1cm", exam: "2.1cm", fr: "1.9cm" },
    pre: NOCALC + r` The graph of $f'$, the derivative of $f$, consists of four line segments, as shown. It is given that $f(-1)=3$. The worked examples on the first page and Questions 1 to 4 and 9 use this graph.` + "\n" + GRAPH_D,
    ideas: [
      r`From a graph of $f'$: $f$ increases where $f'>0$; $f$ is concave up where $f'$ is increasing; $f''$ is the slope of the graph.`,
      r`Values of $f$ come from areas: $f(b)=f(a)+${I("a", "b", "f'(x)")}$, with areas below the axis counted as negative.`,
      r`From a table: estimate a derivative with the two nearest points, and an integral with a Riemann or trapezoidal sum.`,
      r`$${I("a", "b", "f'(x)")}=f(b)-f(a)$ exactly, whatever the spacing of the table.`,
    ],
    examples: [
      { t: "A relative maximum", q: r`The three examples use the graph of $f'$ printed at the top of the next page, with $f(-1)=3$. At what value of $x$ does $f$ have a relative maximum?`, s: r`$f'$ changes from positive to negative where the graph crosses the axis going down.`, r: r`$x=0$.` },
      { t: "A value from areas", q: r`Find $f(5)$.`, s: r`$f(5)=3+${I(-1, 5, "f'(x)")}=3+(1-1-2+4)$.`, r: r`$f(5)=5$.` },
      { t: "Concavity", q: r`On what interval is the graph of $f$ concave up?`, s: r`$f'$ is increasing on $(1,3)$ and on $(3,5)$.`, r: r`$1<x<5$.` },
    ],
    core: [
      r`Find $f'(-2)$ and $f''(-2)$.`,
      r`Find $f''(4)$.`,
      r`Find $f(-3)$.`,
      r`On what interval is $f$ decreasing? Give a reason.`,
    ],
    exam: [
      r`The table gives the temperature $H(t)$, in $^\circ$C, of a liquid at selected times $t$ minutes. Estimate $H'(5)$, with units.` + tab("t", [0, 4, 6, 10, 14], "H(t)", [20, 32, 38, 44, 46]),
      r`Use a trapezoidal sum with the four subintervals of the table to estimate $${I(0, 14, "H(t)", "t")}$.`,
      r`Use your answer to Question 6 to estimate the average temperature for $0\le t\le14$.`,
      r`Evaluate $${I(0, 14, "H'(t)", "t")}$ and state its meaning.`,
    ],
    fr: {
      intro: r`Use the graph of $f'$ at the top of the page, with $f(-1)=3$.`,
      parts: [
        r`Find the absolute minimum value of $f$ on $[-3,5]$. Justify your answer.`,
        r`Find the $x$-coordinate of each point of inflection of the graph of $f$. Give a reason.`,
        r`Let $h(x)=x\,f(x)$. Find $h'(1)$.`,
      ],
    },
    sol: {
      core: [
        r`$f'(-2)=\dfrac32$ and $f''(-2)=\dfrac12$.`,
        r`$f''(4)=2$.`,
        r`$f(-3)=3-${I(-3, -1, "f'(x)")}=3-3=0$.`,
        r`$0<x<3$, because $f'(x)<0$ there.`,
      ],
      exam: [
        r`$\dfrac{38-32}{6-4}=3$ $^\circ$C per minute.`,
        r`$\dfrac{4(52)}{2}+\dfrac{2(70)}{2}+\dfrac{4(82)}{2}+\dfrac{4(90)}{2}=104+70+164+180=518$.`,
        r`$\dfrac{518}{14}=37$ $^\circ$C.`,
        r`$H(14)-H(0)=26$: the temperature rises 26 $^\circ$C over the 14 minutes.`,
      ],
      fr: [
        r`Candidates are the endpoints and $x=3$, where $f'$ changes from negative to positive. $f(-3)=0$, $f(3)=3+1-1-2=1$ and $f(5)=5$. The absolute minimum value is 0, at $x=-3$.`,
        r`$x=-1$ and $x=1$: $f'$ changes from increasing to decreasing at $x=-1$ and from decreasing to increasing at $x=1$.`,
        r`$h'(x)=f(x)+x\,f'(x)$, and $f(1)=3+1-1=3$, $f'(1)=-2$: $h'(1)=3-2=1$.`,
      ],
    },
  },

  // ───────────── 9.6 ─────────────
  {
    code: "9.6", title: "Free-Response Type: Particle Motion", unit: UNIT,
    ideas: [
      r`The particle moves right when $v>0$ and left when $v<0$. It changes direction where $v$ changes sign.`,
      r`Speed is increasing when $v$ and $a$ have the same sign.`,
      r`Position: $x(b)=x(a)+${I("a", "b", "v(t)", "t")}$. Total distance: $${I("a", "b", "|v(t)|", "t")}$.`,
      r`For \textquotedblleft{}farthest left\textquotedblright{} or \textquotedblleft{}farthest right\textquotedblright{}, compare positions at the endpoints and at each change of direction.`,
    ],
    examples: [
      { t: "Changes of direction", q: r`A particle has $v(t)=t^2-5t+4$ for $0\le t\le6$ and $x(0)=2$. When does it change direction?`, s: r`$v(t)=(t-1)(t-4)$ changes sign at both zeros.`, r: r`At $t=1$ and $t=4$.` },
      { t: "Speeding up or slowing down", q: r`Is the particle speeding up or slowing down at $t=2$?`, s: r`$v(2)=-2$ and $a(2)=2(2)-5=-1$.`, r: r`Speeding up: $v$ and $a$ have the same sign.` },
      { t: "Position", q: r`Find the position of the particle at $t=4$.`, s: r`$2+${I(0, 4, "(t^2-5t+4)", "t")}=2+\left(\dfrac{64}{3}-40+16\right)$.`, r: r`$x(4)=-\dfrac23$.` },
    ],
    core: [
      r`A particle has $v(t)=12-3t^2$ for $t\ge0$. When is it at rest?`,
      r`Find the acceleration of that particle at $t=1$.`,
      r`Find the displacement of that particle for $0\le t\le2$.`,
      r`Find the total distance that particle travels for $0\le t\le3$.`,
    ],
    exam: [
      r`\emph{Calculator.} A particle has $v(t)=\ln\!\left(t^2+1\right)-1.5$ for $0\le t\le5$, and $x(0)=4$. Find the time at which it changes direction. Justify your answer.`,
      r`\emph{Calculator.} Find the acceleration of that particle at $t=3$. Is its speed increasing or decreasing then?`,
      r`\emph{Calculator.} Find the position of that particle at $t=5$.`,
      r`\emph{Calculator.} Find the total distance that particle travels for $0\le t\le5$.`,
    ],
    fr: {
      intro: r`\emph{No calculator.} A particle moves along the $x$-axis with velocity $v(t)=6-3\sqrt{t}$ for $0\le t\le9$. At time $t=0$ its position is $x=-5$.`,
      parts: [
        r`Find the time at which the particle is at rest, and the direction in which it moves before that time.`,
        r`Find the position of the particle at $t=9$.`,
        r`Find the total distance travelled for $0\le t\le9$, and the acceleration of the particle at $t=4$.`,
      ],
    },
    sol: {
      core: [
        r`$t=2$.`,
        r`$a(t)=-6t$, so $a(1)=-6$.`,
        r`$\Big[12t-t^3\Big]_0^2=16$.`,
        r`Displacement on $[2,3]$ is $(36-27)-16=-7$. Distance $16+7=23$.`,
      ],
      exam: [
        r`$v(t)=0$ at $t\approx1.866$, where $v$ changes from negative to positive.`,
        r`$a(3)=\dfrac{2(3)}{10}=0.6$, and $v(3)\approx0.803>0$. The speed is increasing, since $v$ and $a$ are both positive.`,
        r`$4+${I(0, 5, "v(t)", "t")}\approx5.537$.`,
        r`$${I(0, 5, "|v(t)|", "t")}\approx4.686$.`,
      ],
      fr: [
        r`$6-3\sqrt t=0$ at $t=4$. For $0\le t<4$, $v>0$: the particle moves to the right.`,
        r`$-5+\Big[6t-2t^{3/2}\Big]_0^9=-5+(54-54)=-5$.`,
        r`Displacement on $[0,4]$ is $24-16=8$ and on $[4,9]$ is $-8$: distance 16. $a(t)=-\dfrac{3}{2\sqrt t}$, so $a(4)=-\dfrac34$.`,
      ],
    },
  },

  // ───────────── 9.7 ─────────────
  {
    code: "9.7", title: "Free-Response Type: Differential Equations", unit: UNIT,
    pre: NOCALC,
    ideas: [
      r`A slope-field segment at $(x,y)$ has slope equal to the value of $\dfrac{dy}{dx}$ there.`,
      r`A tangent-line approximation uses the given point and the slope from the equation.`,
      r`$\dfrac{d^2y}{dx^2}$: differentiate the equation implicitly, then substitute for $\dfrac{dy}{dx}$. Its sign decides over or under.`,
      r`To solve: separate, integrate with $+C$, use the initial condition, then solve for $y$. No separation, no points.`,
    ],
    examples: [
      { t: "A tangent-line approximation", q: r`Let $y=f(x)$ be the solution of $\dfrac{dy}{dx}=2x(y-1)$ with $f(1)=4$. Approximate $f(1.1)$.`, s: r`Slope at $(1,4)$: $2(1)(3)=6$. Tangent line: $y=4+6(x-1)$.`, r: r`$f(1.1)\approx4.6$.` },
      { t: "Over or under", q: r`Is that approximation an overestimate or an underestimate?`, s: r`$\dfrac{d^2y}{dx^2}=2(y-1)+2x\dfrac{dy}{dx}$, which is $6+12=18$ at $(1,4)$.`, r: r`An underestimate: the graph is concave up near $x=1$.` },
      { t: "The particular solution", q: r`Find $f(x)$.`, s: r`$\dfrac{dy}{y-1}=2x\,dx$ gives $\ln|y-1|=x^2+C$, and $\ln3=1+C$.`, r: r`$y=1+3e^{x^2-1}$.` },
    ],
    core: [
      r`For $\dfrac{dy}{dx}=x-2y$, find the slope at $(3,1)$.`,
      r`For the same equation, along what line are the slope-field segments horizontal?`,
      r`For the same equation, find $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$.`,
      r`Show that $y=\dfrac x2-\dfrac14$ is a solution of $\dfrac{dy}{dx}=x-2y$.`,
    ],
    exam: [
      r`Solve $\dfrac{dy}{dx}=\dfrac{2x}{e^{y}}$ with $y(0)=0$.`,
      r`Solve $\dfrac{dy}{dx}=-xy^2$ with $y(0)=2$.`,
      r`Solve $\dfrac{dP}{dt}=0.5(80-P)$ with $P(0)=20$, and find $\displaystyle\lim_{t\to\infty}P(t)$.`,
      r`Find the values of $m$ and $b$ for which $y=mx+b$ is a solution of $\dfrac{dy}{dx}=y-4x$.`,
    ],
    fr: {
      intro: r`Consider the differential equation $\dfrac{dy}{dx}=x(4-y)$. Let $y=f(x)$ be the particular solution with $f(2)=1$.`,
      parts: [
        r`Write an equation of the line tangent to the graph of $f$ at $(2,1)$, and use it to approximate $f(2.1)$.`,
        r`Find $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$. Is the approximation in part (a) an overestimate or an underestimate? Give a reason.`,
        r`Find the particular solution $y=f(x)$.`,
      ],
    },
    sol: {
      core: [
        r`$3-2=1$.`,
        r`$y=\dfrac x2$.`,
        r`$1-2\dfrac{dy}{dx}=1-2x+4y$.`,
        r`$\dfrac{dy}{dx}=\dfrac12$, and $x-2y=x-x+\dfrac12=\dfrac12$.`,
      ],
      exam: [
        r`$e^{y}\,dy=2x\,dx$: $e^{y}=x^2+C$ with $C=1$, so $y=\ln\!\left(x^2+1\right)$.`,
        r`$-y^{-2}\,dy=x\,dx$: $\dfrac1y=\dfrac{x^2}{2}+C$ with $C=\dfrac12$, so $y=\dfrac{2}{x^2+1}$.`,
        r`$-\ln|80-P|=0.5t+C$; $80-P=60e^{-0.5t}$, so $P=80-60e^{-0.5t}$ and the limit is 80.`,
        r`$m=mx+b-4x$ for all $x$ requires $m=4$ and $b=4$: $y=4x+4$.`,
      ],
      fr: [
        r`Slope $2(4-1)=6$: $y=1+6(x-2)$, so $f(2.1)\approx1.6$.`,
        r`$\dfrac{d^2y}{dx^2}=(4-y)-x\dfrac{dy}{dx}=(4-y)\left(1-x^2\right)$, which is $-9$ at $(2,1)$. The graph is concave down there, so the approximation is an overestimate.`,
        r`$\dfrac{dy}{4-y}=x\,dx$ gives $-\ln|4-y|=\dfrac{x^2}{2}+C$, and $-\ln3=2+C$. So $4-y=3e^{2-x^2/2}$ and $y=4-3e^{2-x^2/2}$.`,
      ],
    },
  },

  // ───────────── 9.8 ─────────────
  {
    code: "9.8", title: "Multiple-Choice Technique and the Last Two Weeks", unit: UNIT,
    pre: NOCALC,
    ideas: [
      r`Eliminate first. A sign, a size or a unit often removes two options before any calculus.`,
      r`Do only the work the question needs. If the options differ in one feature, find that feature.`,
      r`Check an antiderivative by differentiating it, and a formula by trying an easy value.`,
      r`Two minutes without progress: choose, mark the question, move on. Never leave a blank.`,
    ],
    examples: [
      { t: "Reading the leading terms", q: r`$\displaystyle\lim_{x\to\infty}\dfrac{3x^2+1}{5x^2-x}$ is` + opts("$0$", r`$\dfrac35$`, "$1$", r`$\infty$`), s: r`Equal degrees: the ratio of the leading coefficients.`, r: r`(B).` },
      { t: "Using symmetry", q: r`$${I(-2, 2, "(x^3+1)")}$ is` + opts("$0$", "$2$", "$4$", "$8$"), s: r`The odd part $x^3$ integrates to 0 on a symmetric interval, leaving $${I(-2, 2, "1")}$.`, r: r`(C).` },
      { t: "Checking by differentiating", q: r`An antiderivative of $x\cos\!\left(x^2\right)$ is` + opts(r`$\sin\!\left(x^2\right)$`, r`$\tfrac12\sin\!\left(x^2\right)$`, r`$2\sin\!\left(x^2\right)$`, r`$-\tfrac12\sin\!\left(x^2\right)$`), s: r`Differentiate each option: $\tfrac12\sin\!\left(x^2\right)$ gives $x\cos\!\left(x^2\right)$.`, r: r`(B).` },
    ],
    core: [
      r`If $f(x)=\sin(3x)$, then $f'(0)$ is` + opts("$0$", "$1$", "$3$", "$-3$"),
      r`$${I(0, 1, "4x^3")}$ is` + opts("$1$", "$4$", "$12$", r`$\tfrac14$`),
      r`If $f'(x)<0$ and $f''(x)>0$, the graph of $f$ is` + opts("increasing, concave up", "decreasing, concave up", "decreasing, concave down", "increasing, concave down"),
      r`$\displaystyle\lim_{x\to0}\dfrac{\sin(5x)}{x}$ is` + opts("$0$", "$1$", "$5$", "nonexistent"),
    ],
    exam: [
      r`$\dfrac{d}{dx}${I(1, "x^2", r`\dfrac{1}{1+t^4}`, "t")}$ is` + opts(r`$\dfrac{1}{1+x^8}$`, r`$\dfrac{2x}{1+x^8}$`, r`$\dfrac{2x}{1+x^4}$`, r`$\dfrac{1}{1+x^4}$`),
      r`If $f'(x)=(x-1)^2(x-3)$, then $f$ has` + opts("a relative minimum at $x=1$", "a relative maximum at $x=1$", "a relative minimum at $x=3$", "a relative maximum at $x=3$"),
      r`The average value of $3x^2$ on $[0,2]$ is` + opts("$4$", "$8$", "$12$", "$2$"),
      r`The line tangent to $y=e^{2x}$ at $x=0$ is used to approximate $e^{0.2}$. The approximation is` + opts("$1.02$", "$1.1$", "$1.2$", "$1.4$"),
    ],
    fr: {
      intro: r`Answer each part in one or two sentences.`,
      parts: [
        r`Without evaluating it, explain why $${I(0, 2, "(x^2+1)")}$ cannot equal 1.`,
        r`A question offers $xe^{x}+e^{x}$ and $xe^{x}$ as possible derivatives of $xe^{x}$. Decide between them by considering the slope of the graph at $x=0$, without the product rule.`,
        r`You have used 30 of the 38 minutes of the calculator multiple-choice part and answered 9 of 13 questions. Describe what you should do with the remaining time.`,
      ],
    },
    sol: {
      core: [
        r`(C): $f'(x)=3\cos(3x)$.`,
        r`(A): $\Big[x^4\Big]_0^1=1$.`,
        r`(B).`,
        r`(C).`,
      ],
      exam: [
        r`(B): substitute the upper limit and multiply by its derivative, $2x$.`,
        r`(C): $f'$ changes sign, from negative to positive, only at $x=3$.`,
        r`(A): $\dfrac12\Big[x^3\Big]_0^2=4$.`,
        r`(C): the tangent line is $y=1+2x$, and $e^{0.2}=e^{2(0.1)}$, so use $x=0.1$.`,
      ],
      fr: [
        r`On $[0,2]$ the integrand is at least 1, so the integral is at least $1\times2=2$.`,
        r`Near $x=0$, $e^{x}\approx1$, so $xe^{x}\approx x$ and the slope at $x=0$ is 1. The first option gives $0+1=1$ and the second gives 0, so the first is correct.`,
        r`About 2 minutes for each of the 4 remaining questions. Answer first those that need one calculator step, choose an option for every question, and leave none blank.`,
      ],
    },
  },
];

export default sheets;
