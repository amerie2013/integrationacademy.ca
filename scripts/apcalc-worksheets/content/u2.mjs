// AP Calculus AB worksheets — Unit 2 (The Derivative).
// Original problems throughout, different from those in the lessons, the
// question bank and the online free-response questions. Written in LaTeX;
// build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 2: The Derivative";
const L = (to, v = "x") => `\\displaystyle\\lim_{${v}\\to ${to}}`;
const tab = (a, xs, b, ys) => r`\begin{center}\renewcommand{\arraystretch}{1.25}\begin{tabular}{|c|${"c|".repeat(xs.length)}}\hline $${a}$ & ${xs.map((x) => `$${x}$`).join(" & ")} \\ \hline $${b}$ & ${ys.map((y) => `$${y}$`).join(" & ")} \\ \hline\end{tabular}\end{center}`;
const P_TABLE = tab("t", [0, 2, 4, 7, 10], "P(t)", [100, 112, 130, 160, 172]);

const sheets = [
  // ───────────── 2.1 ─────────────
  {
    code: "2.1", title: "Slope at a Single Point", unit: UNIT,
    ideas: [
      r`The \textbf{average rate of change} of $f$ on $[a,a+h]$ is the slope of a secant line: $\dfrac{f(a+h)-f(a)}{h}$.`,
      r`The \textbf{instantaneous rate of change} at $x=a$ is the limit of those slopes as $h\to0$. It is the slope of the tangent line.`,
      r`The tangent line at $x=a$ passes through $\big(a,f(a)\big)$: \ $y-f(a)=m(x-a)$.`,
      r`A rate of change has units of \textquotedblleft{}output per unit of input\textquotedblright{}.`,
    ],
    examples: [
      { t: "Slope and tangent line", q: r`Find the slope of the tangent line to $f(x)=x^2+1$ at $x=3$, and write its equation.`, s: r`$\dfrac{(3+h)^2+1-10}{h}=\dfrac{6h+h^2}{h}=6+h\to6$. The point is $(3,10)$.`, r: r`Slope 6; tangent line $y-10=6(x-3)$.` },
      { t: "A reciprocal", q: r`Find the instantaneous rate of change of $f(x)=\dfrac4x$ at $x=2$.`, s: r`$\dfrac{\frac{4}{2+h}-2}{h}=\dfrac{4-2(2+h)}{h(2+h)}=\dfrac{-2}{2+h}\to-1$.`, r: r`The rate of change is $-1$.` },
      { t: "Velocity", q: r`A ball has height $H(t)=50t-5t^2$ metres after $t$ seconds. Find its velocity at $t=2$.`, s: r`$\dfrac{H(2+k)-H(2)}{k}=\dfrac{50k-20k-5k^2}{k}=30-5k\to30$.`, r: r`At $t=2$ the ball is rising at 30 metres per second.` },
    ],
    core: [
      r`Find the average rate of change of $f(x)=x^2-4$ on $[1,3]$.`,
      r`Find the slope of the tangent line to $f(x)=3x^2$ at $x=1$.`,
      r`Write an equation of the tangent line to $f(x)=x^2-2x$ at $x=4$.`,
      r`Explain why the tangent line to $f(x)=5x-7$ has slope 5 at every point.`,
    ],
    exam: [
      r`Find the slope of the tangent line to $f(x)=\dfrac{2}{x-1}$ at $x=3$.`,
      r`Find the slope of the tangent line to $f(x)=\sqrt{x+5}$ at $x=4$.`,
      r`Find the slope of the tangent line to $f(x)=x^3$ at $x=2$, and write its equation.`,
      r`At what value of $x$ does the graph of $f(x)=x^2-6x$ have a horizontal tangent line? Use a limit to find the slope at a general point $x$.`,
    ],
    fr: {
      intro: r`A cart moves along a track so that its position after $t$ seconds is $s(t)=t^2+4t$ metres.`,
      parts: [
        r`Find the average velocity of the cart on the interval $[1,3]$.`,
        r`For $h\neq0$, simplify the average velocity on $[2,2+h]$, and use it to find the velocity at $t=2$.`,
        r`Compare your answers to parts (a) and (b). Is this a coincidence? Explain using your expression from part (b).`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{5-(-3)}{2}=4$.`,
        r`$\dfrac{3(1+h)^2-3}{h}=6+3h\to6$.`,
        r`$\dfrac{(4+h)^2-2(4+h)-8}{h}=6+h\to6$; the point is $(4,8)$: $y-8=6(x-4)$.`,
        r`$\dfrac{5(a+h)-7-(5a-7)}{h}=5$ for every $a$ and every $h$: a line is its own tangent.`,
      ],
      exam: [
        r`$\dfrac{\frac{2}{2+h}-1}{h}=\dfrac{-1}{2+h}\to-\dfrac12$.`,
        r`$\dfrac{\sqrt{9+h}-3}{h}=\dfrac{1}{\sqrt{9+h}+3}\to\dfrac16$.`,
        r`$\dfrac{(2+h)^3-8}{h}=12+6h+h^2\to12$; tangent line $y-8=12(x-2)$.`,
        r`$\dfrac{(x+h)^2-6(x+h)-x^2+6x}{h}=2x+h-6\to2x-6$, which is zero at $x=3$.`,
      ],
      fr: [
        r`$\dfrac{s(3)-s(1)}{2}=\dfrac{21-5}{2}=8$ metres per second.`,
        r`$\dfrac{(2+h)^2+4(2+h)-12}{h}=\dfrac{8h+h^2}{h}=8+h$, which approaches 8 metres per second.`,
        r`They are equal, and not by coincidence. On $[2-k,2+k]$ the average velocity is $\dfrac{s(2+k)-s(2-k)}{2k}=\dfrac{16k}{2k}=8$: for a quadratic, the average velocity over an interval equals the velocity at its midpoint.`,
      ],
    },
  },

  // ───────────── 2.2 ─────────────
  {
    code: "2.2", title: "The Derivative as a Limit", unit: UNIT,
    ideas: [
      r`$f'(x)=${L("0", "h")}\dfrac{f(x+h)-f(x)}{h}$, wherever this limit exists.`,
      r`At a single point: $f'(a)=${L("a")}\dfrac{f(x)-f(a)}{x-a}$.`,
      r`Keep the symbol $\lim$ on every line until the limit has actually been taken.`,
      r`A limit that has the form of a difference quotient can be \textbf{recognised} as a derivative and evaluated with a rule.`,
    ],
    examples: [
      { t: "A polynomial", q: r`Use the definition to find $f'(x)$ for $f(x)=x^2-5x$.`, s: r`$${L("0", "h")}\dfrac{(x+h)^2-5(x+h)-x^2+5x}{h}=${L("0", "h")}\dfrac{2xh+h^2-5h}{h}=${L("0", "h")}(2x+h-5)$.`, r: r`$f'(x)=2x-5$.` },
      { t: "A square root", q: r`Use the definition to find $f'(x)$ for $f(x)=\sqrt{2x+1}$.`, s: r`Multiply by the conjugate: $${L("0", "h")}\dfrac{(2x+2h+1)-(2x+1)}{h\left(\sqrt{2x+2h+1}+\sqrt{2x+1}\right)}=${L("0", "h")}\dfrac{2}{\sqrt{2x+2h+1}+\sqrt{2x+1}}$.`, r: r`$f'(x)=\dfrac{1}{\sqrt{2x+1}}$.` },
      { t: "Recognising a derivative", q: r`Evaluate $${L("0", "h")}\dfrac{\sqrt{9+h}-3}{h}$.`, s: r`This is $g'(9)$ for $g(x)=\sqrt{x}$, and $g'(x)=\dfrac{1}{2\sqrt x}$.`, r: r`$\dfrac16$.` },
    ],
    core: [
      r`Use the definition to find $f'(x)$ for $f(x)=3x+2$.`,
      r`Use the definition to find $f'(x)$ for $f(x)=x^2+x$.`,
      r`Evaluate $${L("0", "h")}\dfrac{(5+h)^2-25}{h}$.`,
      r`Evaluate $${L("2")}\dfrac{x^5-32}{x-2}$ by recognising it as a derivative.`,
    ],
    exam: [
      r`Use the definition to find $f'(x)$ for $f(x)=\dfrac{1}{x^2}$.`,
      r`Use the definition to find $f'(x)$ for $f(x)=x^3+2x$.`,
      r`If $f'(4)=-3$, find $${L("0", "h")}\dfrac{f(4+h)-f(4)}{2h}$.`,
      r`Evaluate $${L("0", "h")}\dfrac{\ln(2+h)-\ln2}{h}$.`,
    ],
    fr: {
      intro: r`Let $f(x)=\dfrac{3}{x-1}$ for $x\neq1$.`,
      parts: [
        r`Use the limit definition to find $f'(x)$.`,
        r`Write an equation of the line tangent to the graph of $f$ at $x=2$.`,
        r`Evaluate $${L("0", "h")}\dfrac{f(4+h)-f(4)}{h}$.`,
      ],
    },
    sol: {
      core: [
        r`$${L("0", "h")}\dfrac{3(x+h)+2-3x-2}{h}=${L("0", "h")}3=3$.`,
        r`$${L("0", "h")}\dfrac{2xh+h^2+h}{h}=2x+1$.`,
        r`The derivative of $x^2$ at 5: $10$.`,
        r`The derivative of $x^5$ at 2: $5(2)^4=80$.`,
      ],
      exam: [
        r`$${L("0", "h")}\dfrac{x^2-(x+h)^2}{h\,x^2(x+h)^2}=${L("0", "h")}\dfrac{-2x-h}{x^2(x+h)^2}=-\dfrac{2}{x^3}$.`,
        r`$${L("0", "h")}\dfrac{3x^2h+3xh^2+h^3+2h}{h}=3x^2+2$.`,
        r`$\dfrac12f'(4)=-\dfrac32$.`,
        r`The derivative of $\ln x$ at 2: $\dfrac12$.`,
      ],
      fr: [
        r`$${L("0", "h")}\dfrac{\frac{3}{x+h-1}-\frac{3}{x-1}}{h}=${L("0", "h")}\dfrac{-3}{(x+h-1)(x-1)}=-\dfrac{3}{(x-1)^2}$.`,
        r`$f(2)=3$ and $f'(2)=-3$: $y-3=-3(x-2)$.`,
        r`This is $f'(4)=-\dfrac{3}{9}=-\dfrac13$.`,
      ],
    },
  },

  // ───────────── 2.3 ─────────────
  {
    code: "2.3", title: "Estimating a Derivative from Data and Graphs", unit: UNIT,
    pre: r`Questions 1 to 7 use this table. The population of a town, $P(t)$ people, is a differentiable function of time $t$ years.` + P_TABLE,
    ideas: [
      r`From a table, estimate $f'(c)$ with the slope between the \textbf{nearest values on either side} of $c$. Show the difference quotient.`,
      r`From a graph, $f'(c)$ is the slope of the graph at $c$. At a corner the derivative does not exist.`,
      r`An estimate of a derivative carries units, and can be interpreted like any other rate.`,
      r`A known value and a known rate give a linear estimate nearby: $f(c+h)\approx f(c)+f'(c)\,h$.`,
    ],
    examples: [
      { t: "From a table", q: r`The distance travelled by a train, $D(t)$ km, is recorded at times $t$ minutes.` + tab("t", [0, 5, 10, 20], "D(t)", [0, 6, 15, 40]) + r`Estimate $D'(7.5)$ with units.`, s: r`Use $t=5$ and $t=10$: $\dfrac{15-6}{10-5}=1.8$.`, r: r`$D'(7.5)\approx1.8$ km per minute.` },
      { t: "A symmetric estimate", q: r`Given $f(2.9)=7.1$, $f(3)=7.5$ and $f(3.1)=8.1$, estimate $f'(3)$.`, s: r`The values on either side of 3 give $\dfrac{8.1-7.1}{3.1-2.9}$.`, r: r`$f'(3)\approx5$.` },
      { t: "From a graph of line segments", q: r`The graph of $g$ contains the line segment from $(1,2)$ to $(4,8)$. Find $g'(2)$.`, s: r`On a line segment the derivative is the slope of the segment: $\dfrac{8-2}{4-1}$.`, r: r`$g'(2)=2$.` },
    ],
    core: [
      r`Estimate $P'(3)$.`,
      r`Estimate $P'(8.5)$.`,
      r`Find the average rate of change of $P$ on $[0,10]$.`,
      r`State the units of $P'(t)$.`,
    ],
    exam: [
      r`Estimate $P'(5.5)$ and interpret your answer in context.`,
      r`Use $P(4)=130$ and your estimate from Question 5 to approximate $P(4.5)$.`,
      r`Find the average rate of change of $P$ on each of the four subintervals. What do the values suggest about how the growth of the town is changing?`,
      r`The graph of $f$ consists of the line segments joining $(0,1)$, $(2,5)$ and $(5,-1)$. Find $f'(1)$ and $f'(3)$, and explain why $f'(2)$ does not exist.`,
    ],
    fr: {
      intro: r`The temperature along a metal rod, $T(x)$ degrees Celsius, is a differentiable function of the distance $x$ centimetres from one end.` + tab("x", [0, 2, 5, 9, 12], "T(x)", [80, 71, 62, 54, 51]),
      parts: [
        r`Estimate $T'(7)$. Indicate units of measure.`,
        r`Interpret your answer to part (a) in the context of the problem.`,
        r`Must there be a point of the rod at which $T'(x)=-\dfrac{29}{12}$? Justify your answer.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{130-112}{4-2}=9$ people per year.`,
        r`$\dfrac{172-160}{10-7}=4$ people per year.`,
        r`$\dfrac{172-100}{10}=7.2$ people per year.`,
        r`People per year.`,
      ],
      exam: [
        r`$\dfrac{160-130}{7-4}=10$. At $t=5.5$ years the population is increasing at about 10 people per year.`,
        r`$130+10(0.5)=135$ people.`,
        r`$6$, $9$, $10$ and $4$ people per year. The growth speeds up and then slows down, which suggests the graph of $P$ changes from concave up to concave down.`,
        r`$f'(1)=\dfrac{5-1}{2}=2$ and $f'(3)=\dfrac{-1-5}{3}=-2$. At $x=2$ the slopes from the left and right are 2 and $-2$: a corner.`,
      ],
      fr: [
        r`$\dfrac{54-62}{9-5}=-2$ degrees Celsius per centimetre.`,
        r`At the point 7 cm from the end, the temperature is decreasing at about 2 degrees Celsius per centimetre of distance along the rod.`,
        r`Yes. $\dfrac{T(12)-T(0)}{12}=-\dfrac{29}{12}$, and $T$ is differentiable (so continuous) on $[0,12]$, so the Mean Value Theorem guarantees such a point.`,
      ],
    },
  },

  // ───────────── 2.4 ─────────────
  {
    code: "2.4", title: "Corners, Cusps and Breaks: When the Derivative Fails", unit: UNIT,
    ideas: [
      r`A function is not differentiable at a \textbf{corner}, a \textbf{cusp}, a \textbf{vertical tangent} or a \textbf{discontinuity}.`,
      r`Differentiable implies continuous. Continuous does \emph{not} imply differentiable.`,
      r`A piecewise function is differentiable at a joining point when the pieces \textbf{meet} (continuity) and have the \textbf{same slope} there.`,
      r`To find unknown constants, write one equation for continuity and one for equal slopes.`,
    ],
    examples: [
      { t: "A corner", q: r`Show that $f(x)=|x+2|$ is not differentiable at $x=-2$.`, s: r`For $h>0$, $\dfrac{|h|}{h}=1$; for $h<0$, $\dfrac{|h|}{h}=-1$. The one-sided limits of the difference quotient are $1$ and $-1$.`, r: r`The limit does not exist, so $f'(-2)$ does not exist.` },
      { t: "Checking a join", q: r`Is $f(x)=\begin{cases}x^2,&x\le3\\6x-9,&x>3\end{cases}$ differentiable at $x=3$?`, s: r`Values: $9$ and $18-9=9$, so $f$ is continuous. Slopes: $2(3)=6$ and $6$.`, r: r`Yes: the pieces meet with the same slope.` },
      { t: "Finding constants", q: r`Find $a$ and $b$ so that $f(x)=\begin{cases}ax+b,&x<2\\x^2+1,&x\ge2\end{cases}$ is differentiable at $x=2$.`, s: r`Slopes: $a=2(2)=4$. Continuity: $2a+b=5$.`, r: r`$a=4$ and $b=-3$.` },
    ],
    core: [
      r`At what value of $x$ is $f(x)=|x-5|$ not differentiable?`,
      r`Is $f(x)=x^{2/3}$ differentiable at $x=0$? Give a reason.`,
      r`Is $f(x)=\begin{cases}4x-1,&x\le1\\2x^2+1,&x>1\end{cases}$ differentiable at $x=1$?`,
      r`True or false, with a reason: every continuous function is differentiable.`,
    ],
    exam: [
      r`Is $f(x)=\begin{cases}x^2+2x,&x\le0\\\sin(2x),&x>0\end{cases}$ differentiable at $x=0$? Justify your answer.`,
      r`Find $a$ and $b$ so that $f(x)=\begin{cases}ax^2,&x\le2\\4x+b,&x>2\end{cases}$ is differentiable at $x=2$.`,
      r`At what values of $x$ is $f(x)=\left|x^2-1\right|$ not differentiable?`,
      r`Is $f(x)=\begin{cases}\sqrt{x},&0\le x\le4\\\dfrac x4+1,&x>4\end{cases}$ differentiable at $x=4$? Justify your answer.`,
    ],
    fr: {
      intro: r`Let $g(x)=\begin{cases}x^2-4x,&x\le1\\ax+b,&x>1\end{cases}$ where $a$ and $b$ are constants.`,
      parts: [
        r`Write an equation in $a$ and $b$ that makes $g$ continuous at $x=1$.`,
        r`Find the values of $a$ and $b$ for which $g$ is differentiable at $x=1$.`,
        r`With those values, write an equation of the line tangent to the graph of $g$ at $x=1$. What do you notice?`,
      ],
    },
    sol: {
      core: [
        r`$x=5$.`,
        r`No. $f'(x)=\dfrac23x^{-1/3}$ is unbounded near 0: the graph has a cusp.`,
        r`Yes. Values: $3$ and $3$. Slopes: $4$ and $4(1)=4$.`,
        r`False. $f(x)=|x|$ is continuous everywhere but not differentiable at 0.`,
      ],
      exam: [
        r`Yes. Values: $0$ and $\sin0=0$. Slopes: $2(0)+2=2$ and $2\cos0=2$.`,
        r`Slopes: $4a=4$, so $a=1$. Continuity: $4=8+b$, so $b=-4$.`,
        r`$x=-1$ and $x=1$, where $x^2-1$ changes sign and the graph has corners.`,
        r`Yes. Values: $2$ and $2$. Slopes: $\dfrac{1}{2\sqrt4}=\dfrac14$ and $\dfrac14$.`,
      ],
      fr: [
        r`$1-4=a+b$, so $a+b=-3$.`,
        r`Slopes: $2(1)-4=-2=a$. Then $b=-1$.`,
        r`The point is $(1,-3)$ and the slope is $-2$: $y+3=-2(x-1)$, that is $y=-2x-1$. This is the linear piece itself: the right-hand piece is the tangent line to the parabola.`,
      ],
    },
  },

  // ───────────── 2.5 ─────────────
  {
    code: "2.5", title: "Power, Sum and Constant-Multiple Rules", unit: UNIT,
    ideas: [
      r`$\dfrac{d}{dx}\left[x^n\right]=nx^{n-1}$ for every real number $n$.`,
      r`Constants multiply through, and sums are differentiated term by term. The derivative of a constant is 0.`,
      r`\textbf{Rewrite first}: $\sqrt{x}=x^{1/2}$, \ $\dfrac{1}{x^3}=x^{-3}$. Expand products and divide out simple quotients.`,
      r`A horizontal tangent occurs where $f'(x)=0$; a tangent parallel to a line of slope $m$ occurs where $f'(x)=m$.`,
    ],
    examples: [
      { t: "Term by term", q: r`Find $\dfrac{d}{dx}\left[2x^6-5x^3+4x-1\right]$.`, s: r`Apply the power rule to each term.`, r: r`$12x^5-15x^2+4$.` },
      { t: "Rewriting", q: r`Find $\dfrac{d}{dx}\left[\dfrac{6}{x^3}-2\sqrt{x}\right]$.`, s: r`Write as $6x^{-3}-2x^{1/2}$, giving $-18x^{-4}-x^{-1/2}$.`, r: r`$-\dfrac{18}{x^4}-\dfrac{1}{\sqrt x}$.` },
      { t: "A tangent line", q: r`Write an equation of the line tangent to $y=x^4-2x$ at $x=1$.`, s: r`$y(1)=-1$ and $y'=4x^3-2$, so the slope is 2.`, r: r`$y+1=2(x-1)$.` },
    ],
    core: [
      r`Find $\dfrac{d}{dx}\left[x^7\right]$.`,
      r`Find $\dfrac{d}{dx}\left[3x^4-x+5\right]$.`,
      r`Find $\dfrac{d}{dx}\left[10\sqrt{x}\right]$.`,
      r`Find $\dfrac{d}{dx}\left[\dfrac2x\right]$.`,
    ],
    exam: [
      r`Find $f'(x)$ for $f(x)=\left(x^2+1\right)(x-3)$ by expanding first.`,
      r`Find $f'(x)$ for $f(x)=\dfrac{x^3-4x}{x}$, $x\neq0$.`,
      r`Find the coordinates of the points on $y=2x^3-24x$ at which the tangent line is horizontal.`,
      r`The function $f(x)=ax^3+bx^2$ satisfies $f(1)=5$ and $f'(1)=12$. Find $a$ and $b$.`,
    ],
    fr: {
      intro: r`Let $p(x)=x^3-3x^2-24x+5$.`,
      parts: [
        r`Find $p'(x)$.`,
        r`Find all values of $x$ at which the tangent line to the graph of $p$ is horizontal.`,
        r`Write an equation of the tangent line at $x=0$, and find the other value of $x$ at which the tangent line is parallel to it.`,
      ],
    },
    sol: {
      core: [
        r`$7x^6$.`,
        r`$12x^3-1$.`,
        r`$5x^{-1/2}=\dfrac{5}{\sqrt x}$.`,
        r`$-2x^{-2}=-\dfrac{2}{x^2}$.`,
      ],
      exam: [
        r`$f(x)=x^3-3x^2+x-3$, so $f'(x)=3x^2-6x+1$.`,
        r`$f(x)=x^2-4$, so $f'(x)=2x$.`,
        r`$y'=6x^2-24=0$ at $x=\pm2$: the points $(2,-32)$ and $(-2,32)$.`,
        r`$a+b=5$ and $3a+2b=12$. Then $a=2$ and $b=3$.`,
      ],
      fr: [
        r`$p'(x)=3x^2-6x-24$.`,
        r`$3(x-4)(x+2)=0$, so $x=4$ and $x=-2$.`,
        r`$p(0)=5$ and $p'(0)=-24$: $y=-24x+5$. $3x^2-6x-24=-24$ gives $3x(x-2)=0$, so the other value is $x=2$.`,
      ],
    },
  },

  // ───────────── 2.6 ─────────────
  {
    code: "2.6", title: r`Derivatives of Sine, Cosine, $e^{x}$ and $\ln x$`, unit: UNIT,
    ideas: [
      r`$\dfrac{d}{dx}[\sin x]=\cos x$ \quad and \quad $\dfrac{d}{dx}[\cos x]=-\sin x$ \quad ($x$ in radians).`,
      r`$\dfrac{d}{dx}\left[e^{x}\right]=e^{x}$ \quad and \quad $\dfrac{d}{dx}[\ln x]=\dfrac1x$ for $x>0$.`,
      r`These combine with the sum and constant-multiple rules exactly as powers do.`,
      r`Exact trigonometric values are expected: know sine and cosine at $0,\ \tfrac\pi6,\ \tfrac\pi4,\ \tfrac\pi3,\ \tfrac\pi2$.`,
    ],
    examples: [
      { t: "A sum", q: r`Find $\dfrac{d}{dx}\left[3\sin x-4\cos x+2e^{x}\right]$.`, s: r`Differentiate each term; the derivative of $-4\cos x$ is $+4\sin x$.`, r: r`$3\cos x+4\sin x+2e^{x}$.` },
      { t: "A tangent line", q: r`Write an equation of the line tangent to $y=\ln x$ at $x=2$.`, s: r`The point is $(2,\ln2)$ and the slope is $\dfrac12$.`, r: r`$y-\ln2=\dfrac12(x-2)$.` },
      { t: "Horizontal tangents", q: r`Find the values of $x$ in $[0,2\pi]$ at which $y=\sqrt3\,x+2\cos x$ has a horizontal tangent.`, s: r`$y'=\sqrt3-2\sin x=0$ gives $\sin x=\dfrac{\sqrt3}{2}$.`, r: r`$x=\dfrac\pi3$ and $x=\dfrac{2\pi}{3}$.` },
    ],
    core: [
      r`Find $\dfrac{d}{dx}\left[5e^{x}\right]$.`,
      r`Find $\dfrac{d}{dx}\left[2\sin x+x^3\right]$.`,
      r`Find $\dfrac{d}{dx}\left[4\ln x-x\right]$.`,
      r`For $f(x)=\cos x$, find $f'\!\left(\dfrac\pi6\right)$.`,
    ],
    exam: [
      r`Write an equation of the line tangent to $y=2\sin x$ at $x=\dfrac\pi3$.`,
      r`At what value of $x$ does the graph of $y=2x-e^{x}$ have a horizontal tangent?`,
      r`Evaluate $${L("0", "h")}\dfrac{e^{3+h}-e^{3}}{h}$.`,
      r`Let $f(x)=6\ln x+x^2$ for $x>0$. Find all values of $x$ at which $f'(x)=7$.`,
    ],
    fr: {
      intro: r`Let $f(x)=4\sin x+2x$ for $0\le x\le2\pi$.`,
      parts: [
        r`Find $f'(x)$.`,
        r`Find all values of $x$ in the interval at which the graph of $f$ has a horizontal tangent.`,
        r`Write an equation of the line tangent to the graph of $f$ at $x=0$.`,
      ],
    },
    sol: {
      core: [
        r`$5e^{x}$.`,
        r`$2\cos x+3x^2$.`,
        r`$\dfrac4x-1$.`,
        r`$-\sin\dfrac\pi6=-\dfrac12$.`,
      ],
      exam: [
        r`The point is $\left(\dfrac\pi3,\sqrt3\right)$ and the slope is $2\cos\dfrac\pi3=1$: $y-\sqrt3=x-\dfrac\pi3$.`,
        r`$2-e^{x}=0$ at $x=\ln2$.`,
        r`The derivative of $e^{x}$ at 3: $e^{3}$.`,
        r`$\dfrac6x+2x=7$ gives $2x^2-7x+6=(2x-3)(x-2)=0$: $x=\dfrac32$ and $x=2$.`,
      ],
      fr: [
        r`$f'(x)=4\cos x+2$.`,
        r`$\cos x=-\dfrac12$: $x=\dfrac{2\pi}{3}$ and $x=\dfrac{4\pi}{3}$.`,
        r`$f(0)=0$ and $f'(0)=6$: $y=6x$.`,
      ],
    },
  },

  // ───────────── 2.7 ─────────────
  {
    code: "2.7", title: "Differentiating Products and Quotients", unit: UNIT,
    ideas: [
      r`\textbf{Product rule}: $(fg)'=f'g+fg'$. The derivative of a product is \emph{not} the product of the derivatives.`,
      r`\textbf{Quotient rule}: $\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}$. The order in the numerator matters.`,
      r`With a table of values, substitute the numbers straight into the rule.`,
      r`If a product or quotient can be simplified by algebra first, that is usually quicker.`,
    ],
    examples: [
      { t: "A product", q: r`Find $\dfrac{d}{dx}\left[x^3e^{x}\right]$.`, s: r`$3x^2e^{x}+x^3e^{x}$.`, r: r`$e^{x}\left(x^3+3x^2\right)$.` },
      { t: "A quotient", q: r`Find $\dfrac{d}{dx}\left[\dfrac{2x+1}{x-3}\right]$.`, s: r`$\dfrac{2(x-3)-(2x+1)(1)}{(x-3)^2}$.`, r: r`$-\dfrac{7}{(x-3)^2}$.` },
      { t: "From values", q: r`Given $f(1)=2$, $f'(1)=3$, $g(1)=-4$ and $g'(1)=5$, find $(fg)'(1)$ and $\left(\dfrac fg\right)'(1)$.`, s: r`$(fg)'(1)=3(-4)+2(5)$. \ $\left(\dfrac fg\right)'(1)=\dfrac{3(-4)-2(5)}{(-4)^2}$.`, r: r`$-2$ and $-\dfrac{11}{8}$.` },
    ],
    core: [
      r`Find $\dfrac{d}{dx}[x\sin x]$.`,
      r`Find $\dfrac{d}{dx}\left[x^2\ln x\right]$.`,
      r`Find $\dfrac{d}{dx}\left[\dfrac{x}{x+1}\right]$.`,
      r`Find $\dfrac{d}{dx}\left[e^{x}\cos x\right]$.`,
    ],
    exam: [
      r`Find $\dfrac{d}{dx}\left[\dfrac{\cos x}{x}\right]$.`,
      r`Find $\dfrac{d}{dx}\left[\dfrac{x^2-1}{x^2+1}\right]$ in simplified form.`,
      r`A differentiable function $f$ has $f(2)=8$ and $f'(2)=-4$. Let $h(x)=\dfrac{f(x)}{x^2}$. Find $h'(2)$.`,
      r`At what value of $x$ does the graph of $y=(x-3)e^{x}$ have a horizontal tangent?`,
    ],
    fr: {
      intro: r`Let $f(x)=\left(x^2-3\right)e^{x}$.`,
      parts: [
        r`Find $f'(x)$ in factored form.`,
        r`Find all values of $x$ at which the graph of $f$ has a horizontal tangent.`,
        r`Write an equation of the line tangent to the graph of $f$ at $x=0$.`,
      ],
    },
    sol: {
      core: [
        r`$\sin x+x\cos x$.`,
        r`$2x\ln x+x$.`,
        r`$\dfrac{(x+1)-x}{(x+1)^2}=\dfrac{1}{(x+1)^2}$.`,
        r`$e^{x}\cos x-e^{x}\sin x=e^{x}(\cos x-\sin x)$.`,
      ],
      exam: [
        r`$\dfrac{-x\sin x-\cos x}{x^2}$.`,
        r`$\dfrac{2x(x^2+1)-2x(x^2-1)}{(x^2+1)^2}=\dfrac{4x}{(x^2+1)^2}$.`,
        r`$h'(x)=\dfrac{x^2f'(x)-2xf(x)}{x^4}$, so $h'(2)=\dfrac{4(-4)-4(8)}{16}=-3$.`,
        r`$y'=e^{x}+(x-3)e^{x}=(x-2)e^{x}$, which is zero at $x=2$.`,
      ],
      fr: [
        r`$2xe^{x}+\left(x^2-3\right)e^{x}=\left(x^2+2x-3\right)e^{x}=(x+3)(x-1)e^{x}$.`,
        r`$x=-3$ and $x=1$, since $e^{x}$ is never zero.`,
        r`$f(0)=-3$ and $f'(0)=-3$: $y=-3x-3$.`,
      ],
    },
  },

  // ───────────── 2.8 ─────────────
  {
    code: "2.8", title: "The Other Four Trigonometric Derivatives", unit: UNIT,
    ideas: [
      r`$\dfrac{d}{dx}[\tan x]=\sec^2x$ \quad and \quad $\dfrac{d}{dx}[\cot x]=-\csc^2x$.`,
      r`$\dfrac{d}{dx}[\sec x]=\sec x\tan x$ \quad and \quad $\dfrac{d}{dx}[\csc x]=-\csc x\cot x$.`,
      r`The three \textbf{co}-functions (cosine, cotangent, cosecant) have derivatives with a minus sign.`,
      r`Each formula follows from the quotient rule applied to sines and cosines.`,
    ],
    examples: [
      { t: "Simplifying afterwards", q: r`Find $\dfrac{d}{dx}[\cot x+x]$.`, s: r`$-\csc^2x+1$, and $1-\csc^2x=-\cot^2x$.`, r: r`$-\cot^2x$.` },
      { t: "With the product rule", q: r`Find $\dfrac{d}{dx}[x\sec x]$.`, s: r`$(1)\sec x+x\sec x\tan x$.`, r: r`$\sec x\,(1+x\tan x)$.` },
      { t: "A tangent line", q: r`Write an equation of the line tangent to $y=\cot x$ at $x=\dfrac\pi4$.`, s: r`The point is $\left(\dfrac\pi4,1\right)$ and the slope is $-\csc^2\dfrac\pi4=-2$.`, r: r`$y-1=-2\left(x-\dfrac\pi4\right)$.` },
    ],
    core: [
      r`Find $\dfrac{d}{dx}[3\tan x]$.`,
      r`Find $\dfrac{d}{dx}[\csc x]$.`,
      r`For $f(x)=\sec x$, find $f'(0)$.`,
      r`For $f(x)=\cot x$, find $f'\!\left(\dfrac\pi2\right)$.`,
    ],
    exam: [
      r`Find $\dfrac{d}{dx}\left[\dfrac{\tan x}{x}\right]$.`,
      r`Find $\dfrac{d}{dx}[\sec x\tan x]$.`,
      r`At what value of $x$ in $(0,\pi)$ does the graph of $y=x+\cot x$ have a horizontal tangent?`,
      r`For $f(x)=e^{x}\tan x$, find $f'(0)$.`,
    ],
    fr: {
      intro: r`Let $f(x)=2\sec x-\tan x$ for $-\dfrac\pi2<x<\dfrac\pi2$.`,
      parts: [
        r`Find $f'(x)$, and show that $f'(x)=\dfrac{2\sin x-1}{\cos^2x}$.`,
        r`Find the value of $x$ in the interval at which the graph of $f$ has a horizontal tangent.`,
        r`Find the coordinates of the point on the graph of $f$ at that value of $x$.`,
      ],
    },
    sol: {
      core: [
        r`$3\sec^2x$.`,
        r`$-\csc x\cot x$.`,
        r`$\sec0\tan0=0$.`,
        r`$-\csc^2\dfrac\pi2=-1$.`,
      ],
      exam: [
        r`$\dfrac{x\sec^2x-\tan x}{x^2}$.`,
        r`$\sec x\tan x\cdot\tan x+\sec x\cdot\sec^2x=\sec x\tan^2x+\sec^3x$.`,
        r`$1-\csc^2x=0$ gives $\sin^2x=1$, so $x=\dfrac\pi2$.`,
        r`$f'(x)=e^{x}\tan x+e^{x}\sec^2x$, so $f'(0)=0+1=1$.`,
      ],
      fr: [
        r`$f'(x)=2\sec x\tan x-\sec^2x=\dfrac{2\sin x}{\cos^2x}-\dfrac{1}{\cos^2x}=\dfrac{2\sin x-1}{\cos^2x}$.`,
        r`$\sin x=\dfrac12$, so $x=\dfrac\pi6$.`,
        r`$f\!\left(\dfrac\pi6\right)=2\cdot\dfrac{2}{\sqrt3}-\dfrac{1}{\sqrt3}=\dfrac{3}{\sqrt3}=\sqrt3$: the point $\left(\dfrac\pi6,\sqrt3\right)$.`,
      ],
    },
  },
];

export default sheets;
