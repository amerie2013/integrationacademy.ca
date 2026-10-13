// AP Calculus AB worksheets — Unit 7 (Differential Equations).
// Original problems throughout, different from those in the lessons, the
// question bank and the online free-response questions. Written in LaTeX;
// build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 7: Differential Equations";

const sheets = [
  // ───────────── 7.1 ─────────────
  {
    code: "7.1", title: "Writing a Differential Equation from a Description", unit: UNIT,
    ideas: [
      r`\textquotedblleft{}The rate of change of $y$\textquotedblright{} is a derivative: $\dfrac{dy}{dt}$.`,
      r`\textquotedblleft{}Proportional to\textquotedblright{} means a constant times: $ky$. \textquotedblleft{}Inversely proportional to\textquotedblright{} means a constant divided by: $\dfrac ky$.`,
      r`When something is added at one rate and removed at another, the equation is (rate in) $-$ (rate out).`,
      r`A given rate at a given value fixes the constant $k$. A decreasing quantity has a negative rate.`,
    ],
    examples: [
      { t: "A direct translation", q: r`The rate of change of $y$ with respect to $t$ is proportional to the square of $y$. Write a differential equation.`, s: r`Rate: $\dfrac{dy}{dt}$. Proportional to $y^2$: $ky^2$.`, r: r`$\dfrac{dy}{dt}=ky^2$.` },
      { t: "In and out", q: r`A savings account with balance $B$ dollars earns interest at 3\% per year, and 2000 dollars per year is withdrawn. Write a differential equation, and find the balance that stays constant.`, s: r`Rate in $0.03B$; rate out 2000.`, r: r`$\dfrac{dB}{dt}=0.03B-2000$; constant when $B\approx66\,667$ dollars.` },
      { t: "Finding the constant", q: r`A frozen meal at temperature $T$ warms in a room at 21 $^\circ$C at a rate proportional to $21-T$. When $T=5$ it is warming at 1.6 $^\circ$C per minute. Write the differential equation.`, s: r`$\dfrac{dT}{dt}=k(21-T)$, and $1.6=k(16)$.`, r: r`$\dfrac{dT}{dt}=0.1(21-T)$.` },
    ],
    core: [
      r`Write a differential equation: the rate of change of $y$ with respect to $x$ is proportional to $x$.`,
      r`Write a differential equation: the rate of change of $P$ with respect to $t$ is inversely proportional to $P$.`,
      r`Write a differential equation: a quantity $N$ decreases at a rate proportional to $N$. State the sign of your constant.`,
      r`A quantity satisfies $\dfrac{dy}{dt}=ky$, and $\dfrac{dy}{dt}=12$ when $y=3$. Find $k$.`,
    ],
    exam: [
      r`A pollutant enters a lake at 12 kg per day, and each day 5\% of the amount $Q$ present is removed. Write a differential equation for $Q$, and find the amount at which $Q$ is steady.`,
      r`A population $P$ grows at a rate proportional to the product of $P$ and $2000-P$. Write a differential equation, and find the value of $P$ at which the growth is fastest.`,
      r`The depth $h$ cm of water in a tank falls at a rate proportional to $\sqrt{h}$. When $h=16$ the depth is falling at 2 cm per minute. Write the differential equation, including the constant.`,
      r`In $\dfrac{dM}{dt}=kM$, the mass $M$ is in grams and the time $t$ in hours. What are the units of $k$?`,
    ],
    fr: {
      intro: r`A trainee's score $S$ on a skills test, out of 100, increases with practice at a rate proportional to $100-S$, where $t$ is the number of weeks of practice. When $S=40$, the score is increasing at 3 points per week.`,
      parts: [
        r`Write a differential equation for $S$ in terms of a constant $k$.`,
        r`Find the value of $k$.`,
        r`Find the rate at which the score is increasing when $S=80$, and describe what the model predicts as $S$ approaches 100.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{dy}{dx}=kx$.`,
        r`$\dfrac{dP}{dt}=\dfrac kP$.`,
        r`$\dfrac{dN}{dt}=-kN$ with $k>0$ (or $\dfrac{dN}{dt}=kN$ with $k<0$).`,
        r`$12=3k$, so $k=4$.`,
      ],
      exam: [
        r`$\dfrac{dQ}{dt}=12-0.05Q$, steady when $Q=240$ kg.`,
        r`$\dfrac{dP}{dt}=kP(2000-P)$; $P(2000-P)$ is greatest at $P=1000$.`,
        r`$\dfrac{dh}{dt}=-k\sqrt h$ with $-2=-k(4)$: $\dfrac{dh}{dt}=-0.5\sqrt h$.`,
        r`Grams per hour divided by grams: per hour.`,
      ],
      fr: [
        r`$\dfrac{dS}{dt}=k(100-S)$.`,
        r`$3=k(60)$, so $k=0.05$.`,
        r`$0.05(20)=1$ point per week. As $S\to100$ the rate tends to 0: improvement slows and the score levels off below 100.`,
      ],
    },
  },

  // ───────────── 7.2 ─────────────
  {
    code: "7.2", title: "Checking a Proposed Solution", unit: UNIT,
    ideas: [
      r`A \textbf{solution} of a differential equation is a function that makes the equation true for every $x$ in an interval.`,
      r`To check: compute the derivatives, substitute into each side \emph{separately}, and compare.`,
      r`A \textbf{general} solution has an arbitrary constant; an initial condition selects a \textbf{particular} solution.`,
      r`A constant function $y=c$ is a solution exactly when it makes the right-hand side zero.`,
    ],
    examples: [
      { t: "A direct check", q: r`Show that $y=3e^{2x}+1$ is a solution of $\dfrac{dy}{dx}=2y-2$.`, s: r`Left side: $6e^{2x}$. Right side: $2\left(3e^{2x}+1\right)-2=6e^{2x}$.`, r: r`The sides are equal for all $x$.` },
      { t: "Finding an exponent", q: r`For what values of $k$ is $y=e^{kx}$ a solution of $y''-y'-6y=0$?`, s: r`$e^{kx}\left(k^2-k-6\right)=0$, and $e^{kx}\neq0$.`, r: r`$k=3$ or $k=-2$.` },
      { t: "Constant solutions", q: r`Find the constant solutions of $\dfrac{dy}{dt}=y^2-4y+3$.`, s: r`$(y-1)(y-3)=0$.`, r: r`$y=1$ and $y=3$.` },
    ],
    core: [
      r`Is $y=e^{-x}$ a solution of $y'+y=0$?`,
      r`Is $y=x^2$ a solution of $y'=2y$?`,
      r`Find the constant solution of $\dfrac{dy}{dt}=5-y$.`,
      r`The general solution of a differential equation is $y=Ce^{x}$. Find the particular solution through $(0,7)$.`,
    ],
    exam: [
      r`Show that $y=\sin(3x)$ is a solution of $y''+9y=0$.`,
      r`For what values of $m$ is $y=x^m$ a solution of $x^2y''-12y=0$ for $x>0$?`,
      r`Show that $y=-\dfrac{3}{x^3+C}$ is a solution of $\dfrac{dy}{dx}=x^2y^2$ for every constant $C$, and find $C$ if the solution passes through $(0,1)$.`,
      r`Every function $y=A\cos(2x)$ satisfies $y''+4y=0$. Find $A$ if $y(0)=5$.`,
    ],
    fr: {
      intro: r`Let $y=xe^{-x}$.`,
      parts: [
        r`Find $\dfrac{dy}{dx}$.`,
        r`Show that $y$ is a solution of $\dfrac{dy}{dx}+y=e^{-x}$.`,
        r`Find $\dfrac{d^2y}{dx^2}$, and show that $y$ is also a solution of $y''+2y'+y=0$.`,
      ],
    },
    sol: {
      core: [
        r`Yes: $y'=-e^{-x}$, so $y'+y=0$.`,
        r`No: $y'=2x$ but $2y=2x^2$.`,
        r`$y=5$.`,
        r`$C=7$: $y=7e^{x}$.`,
      ],
      exam: [
        r`$y''=-9\sin(3x)$, so $y''+9y=0$.`,
        r`$m(m-1)-12=(m-4)(m+3)=0$: $m=4$ or $m=-3$.`,
        r`$\dfrac{dy}{dx}=\dfrac{9x^2}{(x^3+C)^2}=x^2\cdot\dfrac{9}{(x^3+C)^2}=x^2y^2$. Through $(0,1)$: $-\dfrac3C=1$, so $C=-3$.`,
        r`$y(0)=A=5$.`,
      ],
      fr: [
        r`$e^{-x}-xe^{-x}=(1-x)e^{-x}$.`,
        r`$(1-x)e^{-x}+xe^{-x}=e^{-x}$.`,
        r`$y''=-e^{-x}-(1-x)e^{-x}=(x-2)e^{-x}$. Then $y''+2y'+y=\big[(x-2)+2(1-x)+x\big]e^{-x}=0$.`,
      ],
    },
  },

  // ───────────── 7.3 ─────────────
  {
    code: "7.3", title: "Drawing Slope Fields", unit: UNIT,
    ideas: [
      r`A \textbf{slope field} shows, at each point $(x,y)$, a short segment whose slope is the value of $\dfrac{dy}{dx}$ there.`,
      r`To draw one, substitute each point into the differential equation.`,
      r`Segments are horizontal wherever $\dfrac{dy}{dx}=0$.`,
      r`If $\dfrac{dy}{dx}$ depends only on $x$, every column of the field is identical; if only on $y$, every row is.`,
    ],
    examples: [
      { t: "Computing slopes", q: r`For $\dfrac{dy}{dx}=y-2x$, find the slopes at $(1,1)$, $(0,2)$ and $(2,4)$.`, s: r`Substitute each point.`, r: r`$-1$, $2$ and $0$.` },
      { t: "Horizontal segments", q: r`Where are the segments of the slope field for $\dfrac{dy}{dx}=y-2x$ horizontal?`, s: r`Set $y-2x=0$.`, r: r`Along the line $y=2x$.` },
      { t: "Recognising a pattern", q: r`A slope field has the same segments all the way up each vertical line. What does this say about the differential equation?`, s: r`The slope does not change when $y$ changes.`, r: r`$\dfrac{dy}{dx}$ depends on $x$ only.` },
    ],
    core: [
      r`For $\dfrac{dy}{dx}=x^2y$, find the slope at $(2,3)$.`,
      r`For $\dfrac{dy}{dx}=x^2y$, find the slope at $(-1,-2)$.`,
      r`For $\dfrac{dy}{dx}=x^2y$, where are the segments horizontal?`,
      r`For $\dfrac{dy}{dx}=x^2y$, what is the sign of the slopes in the third quadrant?`,
    ],
    exam: [
      r`For $\dfrac{dy}{dx}=x^2+y^2$, explain why no segment has negative slope, and find where the slope is zero.`,
      r`Describe the slope field of $\dfrac{dy}{dx}=(y-1)(y+2)$: where are the segments horizontal, and what is special about each row?`,
      r`Describe the slope field of $\dfrac{dy}{dx}=x-2$, and the shape of its solution curves.`,
      r`A slope field has horizontal segments along the curve $y=x^3$, positive slopes above that curve and negative slopes below it. Suggest a differential equation.`,
    ],
    fr: {
      intro: r`Consider the differential equation $\dfrac{dy}{dx}=y(2-x)$.`,
      parts: [
        r`Find the slope at each of the points $(0,1)$, $(2,3)$, $(3,2)$ and $(1,-1)$.`,
        r`Describe all points at which the segments of the slope field are horizontal.`,
        r`The solution through $(2,3)$ has a horizontal tangent there. Is this a relative maximum or a relative minimum? Justify your answer.`,
      ],
    },
    sol: {
      core: [
        r`$12$.`,
        r`$-2$.`,
        r`Along both axes: $x=0$ or $y=0$.`,
        r`Negative ($x^2>0$, $y<0$).`,
      ],
      exam: [
        r`$x^2+y^2\ge0$ always; it is zero only at the origin.`,
        r`Horizontal along $y=1$ and $y=-2$. The slope depends only on $y$, so each row has identical segments. Slopes are negative between the two lines and positive outside them.`,
        r`The slope depends only on $x$: columns are identical, negative for $x<2$ and positive for $x>2$. Solutions are parabolas $y=\dfrac{x^2}{2}-2x+C$ with their lowest points at $x=2$.`,
        r`$\dfrac{dy}{dx}=y-x^3$.`,
      ],
      fr: [
        r`$2$, $0$, $-2$ and $-1$.`,
        r`The line $y=0$ and the line $x=2$.`,
        r`$\dfrac{d^2y}{dx^2}=\dfrac{dy}{dx}(2-x)-y$, which equals $-3$ at $(2,3)$. A zero first derivative and a negative second derivative: a relative maximum.`,
      ],
    },
  },

  // ───────────── 7.4 ─────────────
  {
    code: "7.4", title: "Reasoning from a Slope Field", unit: UNIT,
    ideas: [
      r`An \textbf{equilibrium solution} is a constant solution: a horizontal line in the slope field.`,
      r`A solution curve cannot cross an equilibrium. The sign of $\dfrac{dy}{dt}$ on each side tells you whether solutions approach it or move away.`,
      r`$\dfrac{d^2y}{dx^2}$ is found by differentiating the equation and substituting for $\dfrac{dy}{dx}$. Its sign gives concavity.`,
      r`For a logistic-type equation, growth is fastest halfway between the equilibria, and the solution has a point of inflection there.`,
    ],
    examples: [
      { t: "One equilibrium", q: r`Describe the long-run behaviour of solutions of $\dfrac{dy}{dt}=3-y$.`, s: r`Equilibrium $y=3$. Above it the derivative is negative; below it, positive.`, r: r`Every solution approaches 3.` },
      { t: "Two equilibria", q: r`For $\dfrac{dy}{dt}=y(5-y)$, describe the solutions with $y(0)=1$ and with $y(0)=7$.`, s: r`Equilibria 0 and 5. Between them the derivative is positive; above 5 it is negative.`, r: r`The first increases toward 5; the second decreases toward 5.` },
      { t: "A second derivative", q: r`For $\dfrac{dy}{dx}=3x-y$, find $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$.`, s: r`Differentiate: $3-\dfrac{dy}{dx}$, then substitute.`, r: r`$3-3x+y$.` },
    ],
    core: [
      r`Find the equilibrium solutions of $\dfrac{dy}{dt}=y^2-16$.`,
      r`A solution of $\dfrac{dy}{dt}=0.4(20-y)$ has $y(0)=5$. Find $\displaystyle\lim_{t\to\infty}y(t)$.`,
      r`For the same equation, describe the solution with $y(0)=30$.`,
      r`For $\dfrac{dy}{dx}=x^2+y$, find $\dfrac{d^2y}{dx^2}$ in terms of $x$ and $y$.`,
    ],
    exam: [
      r`For $\dfrac{dy}{dt}=\dfrac{y(10-y)}{5}$ with $0<y<10$, at what value of $y$ is the solution growing fastest, and how fast?`,
      r`For the equation in Question 5, at what value of $y$ does a solution have a point of inflection? Give a reason.`,
      r`A solution of $\dfrac{dy}{dx}=x-y^2$ passes through $(4,2)$. Show that it has a relative minimum there.`,
      r`For $\dfrac{dy}{dx}=3x-y$, describe the region of the plane in which solution curves are concave up.`,
    ],
    fr: {
      intro: r`A fish population $P$, in thousands, satisfies $\dfrac{dP}{dt}=0.2P\left(1-\dfrac{P}{50}\right)$, where $t$ is in years.`,
      parts: [
        r`Find the equilibrium solutions.`,
        r`If $P(0)=10$, find $\displaystyle\lim_{t\to\infty}P(t)$ and explain why $P$ is increasing for all $t$.`,
        r`Find the population at which the fish are increasing fastest, and the rate of increase then.`,
      ],
    },
    sol: {
      core: [
        r`$y=4$ and $y=-4$.`,
        r`$20$.`,
        r`It decreases, approaching 20 from above.`,
        r`$2x+\dfrac{dy}{dx}=2x+x^2+y$.`,
      ],
      exam: [
        r`At $y=5$, halfway between the equilibria; the rate is $\dfrac{5(5)}{5}=5$.`,
        r`At $y=5$: $\dfrac{d^2y}{dt^2}=\dfrac{10-2y}{5}\cdot\dfrac{dy}{dt}$ changes sign there.`,
        r`$\dfrac{dy}{dx}=4-4=0$, and $\dfrac{d^2y}{dx^2}=1-2y\dfrac{dy}{dx}=1>0$.`,
        r`$\dfrac{d^2y}{dx^2}=3-3x+y>0$: above the line $y=3x-3$.`,
      ],
      fr: [
        r`$P=0$ and $P=50$.`,
        r`$50$. For $0<P<50$ both factors are positive, so $\dfrac{dP}{dt}>0$, and the solution cannot cross the equilibrium $P=50$.`,
        r`At $P=25$ thousand: $0.2(25)(0.5)=2.5$ thousand fish per year.`,
      ],
    },
  },

  // ───────────── 7.5 ─────────────
  {
    code: "7.5", title: "Separation of Variables", unit: UNIT,
    ideas: [
      r`If $\dfrac{dy}{dx}=g(x)\,h(y)$, move everything in $y$ to one side and everything in $x$ to the other: $\dfrac{dy}{h(y)}=g(x)\,dx$.`,
      r`Integrate both sides. Add \textbf{one} constant of integration, at this step.`,
      r`Then solve for $y$. An exponential turns the constant into a multiplier: $y=Ae^{\ldots}$.`,
      r`Dividing by $h(y)$ can lose a constant solution where $h(y)=0$. Check for it separately.`,
    ],
    examples: [
      { t: "An exponential solution", q: r`Solve $\dfrac{dy}{dx}=3x^2y$.`, s: r`$\dfrac{dy}{y}=3x^2\,dx$, so $\ln|y|=x^3+C$.`, r: r`$y=Ae^{x^3}$.` },
      { t: "A square root", q: r`Solve $\dfrac{dy}{dx}=\dfrac{\cos x}{y}$.`, s: r`$y\,dy=\cos x\,dx$, so $\dfrac{y^2}{2}=\sin x+C_0$.`, r: r`$y^2=2\sin x+C$.` },
      { t: "A reciprocal", q: r`Solve $\dfrac{dy}{dx}=\dfrac{y^2}{x}$ for $x>0$, $y\neq0$.`, s: r`$y^{-2}\,dy=\dfrac{dx}{x}$, so $-\dfrac1y=\ln x+C$.`, r: r`$y=-\dfrac{1}{\ln x+C}$.` },
    ],
    core: [
      r`Separate the variables in $\dfrac{dy}{dx}=xy^3$. Do not integrate.`,
      r`Solve $\dfrac{dy}{dx}=4y$.`,
      r`Solve $\dfrac{dy}{dx}=6x^2$.`,
      r`Solve $\dfrac{dy}{dx}=-y$.`,
    ],
    exam: [
      r`Solve $\dfrac{dy}{dx}=\dfrac{x+1}{y}$, leaving your answer in the form $y^2=\ldots$`,
      r`Solve $\dfrac{dy}{dx}=y\sin x$.`,
      r`Solve $\dfrac{dy}{dx}=e^{2x-y}$.`,
      r`Solve $\dfrac{dy}{dx}=\sqrt{1-y^2}$ for $-1<y<1$.`,
    ],
    fr: {
      intro: r`Consider the differential equation $\dfrac{dy}{dx}=x\sqrt{y}$ for $y\ge0$.`,
      parts: [
        r`Separate the variables.`,
        r`Find the general solution for $y>0$, in the form $y=\ldots$`,
        r`Show that $y=0$ is also a solution, and explain why the method of part (b) did not produce it.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{dy}{y^3}=x\,dx$.`,
        r`$y=Ae^{4x}$.`,
        r`$y=2x^3+C$.`,
        r`$y=Ae^{-x}$.`,
      ],
      exam: [
        r`$y\,dy=(x+1)\,dx$: $y^2=x^2+2x+C$.`,
        r`$\ln|y|=-\cos x+C$: $y=Ae^{-\cos x}$.`,
        r`$e^{y}\,dy=e^{2x}\,dx$: $e^{y}=\dfrac12e^{2x}+C$, so $y=\ln\!\left(\dfrac12e^{2x}+C\right)$.`,
        r`$\dfrac{dy}{\sqrt{1-y^2}}=dx$: $\arcsin y=x+C$, so $y=\sin(x+C)$.`,
      ],
      fr: [
        r`$\dfrac{dy}{\sqrt y}=x\,dx$.`,
        r`$2\sqrt y=\dfrac{x^2}{2}+C_0$, so $y=\left(\dfrac{x^2}{4}+C\right)^2$.`,
        r`If $y=0$ for all $x$, both sides of the equation are 0. Separating required division by $\sqrt y$, which is not allowed when $y=0$.`,
      ],
    },
  },

  // ───────────── 7.6 ─────────────
  {
    code: "7.6", title: "Particular Solutions and Their Domains", unit: UNIT,
    ideas: [
      r`Use the initial condition to find the constant \textbf{before} solving for $y$ where possible; the algebra is easier.`,
      r`When a square root appears, the initial condition decides the sign.`,
      r`When an absolute value appears, the sign of the quantity at the initial point decides how to remove it.`,
      r`The \textbf{domain} of a particular solution is the largest single interval, containing the initial $x$-value, on which the solution is defined and satisfies the equation.`,
    ],
    examples: [
      { t: "An exponential", q: r`Solve $\dfrac{dy}{dx}=\dfrac y3$ with $y(0)=6$.`, s: r`$\ln|y|=\dfrac x3+C$, so $y=Ae^{x/3}$ with $A=6$.`, r: r`$y=6e^{x/3}$.` },
      { t: "Choosing a sign", q: r`Solve $\dfrac{dy}{dx}=\dfrac{4x^3}{y}$ with $y(0)=-2$.`, s: r`$\dfrac{y^2}{2}=x^4+C$ with $C=2$, so $y^2=2x^4+4$. The initial value is negative.`, r: r`$y=-\sqrt{2x^4+4}$.` },
      { t: "A domain", q: r`Solve $\dfrac{dy}{dx}=\dfrac{y^2}{x^2}$ with $y(1)=\dfrac12$, and state the domain.`, s: r`$-\dfrac1y=-\dfrac1x+C$; at $\left(1,\frac12\right)$: $-2=-1+C$, so $C=-1$.`, r: r`$y=\dfrac{x}{x+1}$, for $x>0$ (the equation is undefined at $x=0$).` },
    ],
    core: [
      r`Solve $\dfrac{dy}{dx}=-4y$ with $y(0)=3$.`,
      r`Solve $\dfrac{dy}{dx}=2x$ with $y(1)=5$.`,
      r`Solve $\dfrac{dy}{dx}=\cos x$ with $y(0)=-1$.`,
      r`Solve $\dfrac{dy}{dx}=\dfrac1x$ for $x>0$ with $y(1)=2$.`,
    ],
    exam: [
      r`Solve $\dfrac{dy}{dx}=\dfrac{9x}{y}$ with $y(0)=-3$.`,
      r`Solve $\dfrac{dy}{dx}=3(y-2)$ with $y(0)=5$.`,
      r`Solve $\dfrac{dy}{dx}=e^{y}$ with $y(0)=0$, and state the domain of the solution.`,
      r`Solve $\dfrac{dy}{dx}=y\cos x$ with $y(0)=4$.`,
    ],
    fr: {
      intro: r`Consider the differential equation $\dfrac{dy}{dx}=x(y-1)^2$. Let $y=f(x)$ be the particular solution with $f(0)=3$.`,
      parts: [
        r`Find the slope of the graph of $f$ at $(0,3)$. What does this tell you about the graph there?`,
        r`Find the particular solution $y=f(x)$.`,
        r`State the domain of the solution, and give a reason.`,
      ],
    },
    sol: {
      core: [
        r`$y=3e^{-4x}$.`,
        r`$y=x^2+C$ with $C=4$: $y=x^2+4$.`,
        r`$y=\sin x-1$.`,
        r`$y=\ln x+2$.`,
      ],
      exam: [
        r`$y^2=9x^2+C$ with $C=9$; the initial value is negative: $y=-3\sqrt{x^2+1}$.`,
        r`$\ln|y-2|=3x+C$; $y-2=3$ at the start: $y=2+3e^{3x}$.`,
        r`$-e^{-y}=x+C$ with $C=-1$: $e^{-y}=1-x$, so $y=-\ln(1-x)$, for $x<1$.`,
        r`$\ln|y|=\sin x+C$: $y=4e^{\sin x}$.`,
      ],
      fr: [
        r`$0\cdot(2)^2=0$: the tangent is horizontal at $(0,3)$.`,
        r`$\dfrac{dy}{(y-1)^2}=x\,dx$ gives $-\dfrac{1}{y-1}=\dfrac{x^2}{2}+C$, and $C=-\dfrac12$. So $y-1=\dfrac{2}{1-x^2}$, that is $y=1+\dfrac{2}{1-x^2}$.`,
        r`$-1<x<1$: the solution is undefined at $x=\pm1$, and the domain is the single interval containing $x=0$.`,
      ],
    },
  },

  // ───────────── 7.7 ─────────────
  {
    code: "7.7", title: "Exponential Growth and Decay", unit: UNIT,
    pre: r`\emph{A calculator may be used for decimal answers on this page.}`,
    ideas: [
      r`If $\dfrac{dy}{dt}=ky$, then $y=y_0e^{kt}$, where $y_0$ is the value at $t=0$.`,
      r`$k>0$ is growth; $k<0$ is decay.`,
      r`\textbf{Doubling time} $=\dfrac{\ln2}{k}$; \textbf{half-life} $=\dfrac{\ln2}{|k|}$. Neither depends on the starting amount.`,
      r`If the rate is proportional to the \emph{difference} from a fixed level $L$, that difference decays exponentially: $y-L=(y_0-L)e^{kt}$.`,
    ],
    examples: [
      { t: "Growth", q: r`Solve $\dfrac{dy}{dt}=0.08y$ with $y(0)=250$, and find $y(10)$.`, s: r`$y=250e^{0.08t}$.`, r: r`$y(10)=250e^{0.8}\approx556.4$.` },
      { t: "Half-life", q: r`A substance has a half-life of 8 days. How much of a 100 mg sample remains after 20 days?`, s: r`$100\left(\dfrac12\right)^{20/8}=100\cdot2^{-2.5}$.`, r: r`About 17.7 mg.` },
      { t: "Doubling time", q: r`A quantity grows according to $\dfrac{dy}{dt}=0.035y$. Find its doubling time.`, s: r`$\dfrac{\ln2}{0.035}$.`, r: r`About 19.8 time units.` },
    ],
    core: [
      r`Solve $\dfrac{dy}{dt}=2y$ with $y(0)=5$.`,
      r`Solve $\dfrac{dy}{dt}=-0.3y$ with $y(0)=40$.`,
      r`Find the doubling time for $\dfrac{dy}{dt}=0.07y$.`,
      r`Find the half-life for $\dfrac{dy}{dt}=-0.02y$.`,
    ],
    exam: [
      r`A population grows exponentially from 3000 to 4500 in 5 years. Find $k$, and the population after 12 years.`,
      r`A radioactive isotope has a half-life of 5730 years. What fraction of a sample remains after 2000 years?`,
      r`A quantity satisfies $\dfrac{dy}{dt}=ky$ with $y(1)=4$ and $y(3)=36$. Find $y(0)$.`,
      r`A hot plate at 85 $^\circ$C cools in a 25 $^\circ$C room according to $\dfrac{dT}{dt}=k(T-25)$. After 10 minutes it is at 55 $^\circ$C. Find its temperature after 20 minutes.`,
    ],
    fr: {
      intro: r`An investment of 2000 dollars grows so that its value $A$ satisfies $\dfrac{dA}{dt}=0.05A$, where $t$ is in years.`,
      parts: [
        r`Find $A(t)$.`,
        r`Find the value of the investment after 10 years.`,
        r`Find the time at which the value reaches 5000 dollars, and the rate at which it is growing at that time.`,
      ],
    },
    sol: {
      core: [
        r`$y=5e^{2t}$.`,
        r`$y=40e^{-0.3t}$.`,
        r`$\dfrac{\ln2}{0.07}\approx9.902$.`,
        r`$\dfrac{\ln2}{0.02}\approx34.657$.`,
      ],
      exam: [
        r`$e^{5k}=1.5$, so $k=\dfrac{\ln1.5}{5}\approx0.0811$. $P(12)=3000(1.5)^{12/5}\approx7939$.`,
        r`$2^{-2000/5730}\approx0.785$.`,
        r`$e^{2k}=9$, so $e^{k}=3$ and $y(0)=\dfrac43$.`,
        r`The difference $T-25$ falls from 60 to 30 in 10 minutes: it halves. After 20 minutes it is 15, so $T=40$ $^\circ$C.`,
      ],
      fr: [
        r`$A(t)=2000e^{0.05t}$.`,
        r`$2000e^{0.5}\approx3297.44$ dollars.`,
        r`$e^{0.05t}=2.5$, so $t=20\ln2.5\approx18.326$ years. The rate is $0.05(5000)=250$ dollars per year.`,
      ],
    },
  },
];

export default sheets;
