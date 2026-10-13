// AP Calculus AB worksheets — Unit 5 (Analysing Functions).
// Original problems throughout, different from those in the lessons, the
// question bank and the online free-response questions. Written in LaTeX;
// build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 5: Analysing Functions";
const FP = r`\emph{Questions 5 to 8 refer to a function $f$ that is continuous on $[-2,6]$. The graph of its derivative $f'$ consists of three line segments joining the points $(-2,4)$, $(1,-2)$, $(3,2)$ and $(6,-1)$, in that order.}`;

const sheets = [
  // ───────────── 5.1 ─────────────
  {
    code: "5.1", title: "The Mean Value Theorem", unit: UNIT,
    ideas: [
      r`\textbf{Mean Value Theorem.} If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, there is a $c$ in $(a,b)$ with $f'(c)=\dfrac{f(b)-f(a)}{b-a}$.`,
      r`In words: at some point the instantaneous rate equals the average rate.`,
      r`If also $f(a)=f(b)$, then $f'(c)=0$ for some $c$ (Rolle's Theorem).`,
      r`To \emph{use} the theorem in a justification, state both conditions. \textquotedblleft{}Differentiable, and therefore continuous\textquotedblright{} covers both.`,
    ],
    examples: [
      { t: "Finding c", q: r`Find the value of $c$ guaranteed by the Mean Value Theorem for $f(x)=x^2-2x$ on $[1,4]$.`, s: r`$\dfrac{f(4)-f(1)}{3}=\dfrac{8-(-1)}{3}=3$. Solve $2c-2=3$.`, r: r`$c=\dfrac52$.` },
      { t: "A reciprocal", q: r`Find the value of $c$ guaranteed by the theorem for $f(x)=\dfrac1x$ on $[1,9]$.`, s: r`$\dfrac{\frac19-1}{8}=-\dfrac19$. Solve $-\dfrac{1}{c^2}=-\dfrac19$ with $1<c<9$.`, r: r`$c=3$.` },
      { t: "From values", q: r`A differentiable function $g$ has $g(0)=5$ and $g(4)=13$. What does the theorem guarantee?`, s: r`$\dfrac{13-5}{4}=2$, and $g$ is differentiable, hence continuous, on $[0,4]$.`, r: r`There is a $c$ in $(0,4)$ with $g'(c)=2$.` },
    ],
    core: [
      r`Find the value of $c$ guaranteed by the Mean Value Theorem for $f(x)=x^2+1$ on $[0,2]$.`,
      r`Find the value of $c$ guaranteed by the theorem for $f(x)=x^3$ on $[-1,2]$.`,
      r`State the two conditions of the Mean Value Theorem.`,
      r`Explain why the theorem does not apply to $f(x)=|x|$ on $[-1,1]$.`,
    ],
    exam: [
      r`Find the value of $c$ guaranteed by the theorem for $f(x)=\sqrt{x}$ on $[1,9]$.`,
      r`Find the value of $c$ guaranteed by the theorem for $f(x)=\ln x$ on $[1,e]$.`,
      r`A car travels 150 km along a road in exactly 2 hours. Explain why its speedometer must have read 75 km/h at some instant. State any assumption you make.`,
      r`A differentiable function $h$ has $h(2)=3$ and $h(7)=3$. Must there be a $c$ in $(2,7)$ with $h'(c)=0$? Must there be a $c$ with $h(c)=0$?`,
    ],
    fr: {
      intro: r`Let $f(x)=x^3-x^2$.`,
      parts: [
        r`Explain why the Mean Value Theorem applies to $f$ on $[0,2]$.`,
        r`Find the value of $c$ in $(0,2)$ guaranteed by the theorem.`,
        r`Show that $f(0)=f(1)$, and find the value of $c$ in $(0,1)$ at which $f'(c)=0$.`,
      ],
    },
    sol: {
      core: [
        r`Average rate $\dfrac{5-1}{2}=2$; $2c=2$ gives $c=1$.`,
        r`Average rate $\dfrac{8-(-1)}{3}=3$; $3c^2=3$ gives $c=1$ (the value $c=-1$ is not inside the interval).`,
        r`$f$ is continuous on $[a,b]$ and differentiable on $(a,b)$.`,
        r`$f$ is not differentiable at $x=0$, which lies in $(-1,1)$.`,
      ],
      exam: [
        r`Average rate $\dfrac{3-1}{8}=\dfrac14$; $\dfrac{1}{2\sqrt c}=\dfrac14$ gives $c=4$.`,
        r`Average rate $\dfrac{1-0}{e-1}$; $\dfrac1c=\dfrac{1}{e-1}$ gives $c=e-1$.`,
        r`Assuming the position is a differentiable function of time, its average rate of change is $\dfrac{150}{2}=75$ km/h, so by the Mean Value Theorem the velocity equals 75 km/h at some instant.`,
        r`Yes to the first: $h$ is differentiable and $h(2)=h(7)$, so the theorem gives $h'(c)=\dfrac{3-3}{5}=0$. No to the second: nothing forces $h$ to take the value 0 (for example $h$ could be constant at 3).`,
      ],
      fr: [
        r`$f$ is a polynomial, so it is continuous on $[0,2]$ and differentiable on $(0,2)$.`,
        r`$\dfrac{f(2)-f(0)}{2}=\dfrac{4}{2}=2$. $3c^2-2c=2$ gives $c=\dfrac{1+\sqrt7}{3}\approx1.215$ (the other root is negative).`,
        r`$f(0)=0$ and $f(1)=1-1=0$. $f'(c)=3c^2-2c=c(3c-2)=0$ in $(0,1)$ gives $c=\dfrac23$.`,
      ],
    },
  },

  // ───────────── 5.2 ─────────────
  {
    code: "5.2", title: "Extreme Values and Critical Points", unit: UNIT,
    ideas: [
      r`A \textbf{critical point} is a point in the domain of $f$ where $f'(x)=0$ or $f'(x)$ does not exist.`,
      r`Every relative extremum occurs at a critical point, but not every critical point is an extremum.`,
      r`\textbf{Extreme Value Theorem.} A function continuous on a \emph{closed} interval $[a,b]$ has an absolute maximum and an absolute minimum there.`,
      r`A point outside the domain of $f$ is never a critical point.`,
    ],
    examples: [
      { t: "A polynomial", q: r`Find the critical points of $f(x)=x^3-3x^2$.`, s: r`$f'(x)=3x^2-6x=3x(x-2)$.`, r: r`$x=0$ and $x=2$.` },
      { t: "Where the derivative fails", q: r`Find the critical point of $f(x)=x^{2/3}$ and describe $f$ there.`, s: r`$f'(x)=\dfrac23x^{-1/3}$ is never zero, and does not exist at $x=0$, which is in the domain.`, r: r`$x=0$ is a critical point; $f$ has its minimum value 0 there.` },
      { t: "Using the Extreme Value Theorem", q: r`Does $f(x)=\dfrac{1}{x-1}$ have absolute extrema on $[2,5]$? Find them.`, s: r`$f$ is continuous on $[2,5]$, so the theorem applies. $f'(x)=-\dfrac{1}{(x-1)^2}<0$: $f$ is decreasing.`, r: r`Maximum $f(2)=1$; minimum $f(5)=\dfrac14$.` },
    ],
    core: [
      r`Find the critical point of $f(x)=x^2-10x$.`,
      r`Find the critical point of $f(x)=x^4-4x$.`,
      r`Find the critical points of $f(x)=\sin x$ on $(0,2\pi)$.`,
      r`Does the Extreme Value Theorem apply to $f(x)=\dfrac1x$ on $[-1,1]$? Explain.`,
    ],
    exam: [
      r`Find the critical point of $f(x)=xe^{x/2}$.`,
      r`Find all critical points of $f(x)=x-3x^{1/3}$.`,
      r`Find the critical points of $f(x)=\left(x^2-4\right)^2$.`,
      r`Find the critical point of $f(x)=\dfrac{\ln x}{x}$ for $x>0$, and the value of $f$ there.`,
    ],
    fr: {
      intro: r`Let $f(x)=x^4-18x^2$.`,
      parts: [
        r`Find all critical points of $f$.`,
        r`Find the value of $f$ at each critical point.`,
        r`Find the absolute maximum and absolute minimum values of $f$ on $[-1,4]$.`,
      ],
    },
    sol: {
      core: [
        r`$f'(x)=2x-10=0$ at $x=5$.`,
        r`$f'(x)=4x^3-4=0$ at $x=1$.`,
        r`$\cos x=0$ at $x=\dfrac\pi2$ and $x=\dfrac{3\pi}{2}$.`,
        r`No: $f$ is not continuous on $[-1,1]$ (it is undefined at 0).`,
      ],
      exam: [
        r`$f'(x)=e^{x/2}\left(1+\dfrac x2\right)=0$ at $x=-2$.`,
        r`$f'(x)=1-x^{-2/3}$: zero at $x=\pm1$, and undefined at $x=0$. Three critical points.`,
        r`$f'(x)=4x\left(x^2-4\right)$: $x=0$ and $x=\pm2$.`,
        r`$f'(x)=\dfrac{1-\ln x}{x^2}=0$ at $x=e$, where $f(e)=\dfrac1e$.`,
      ],
      fr: [
        r`$f'(x)=4x^3-36x=4x(x-3)(x+3)$: $x=0$ and $x=\pm3$.`,
        r`$f(0)=0$ and $f(\pm3)=81-162=-81$.`,
        r`Candidates: $f(-1)=-17$, $f(0)=0$, $f(3)=-81$, $f(4)=-32$. Maximum 0; minimum $-81$.`,
      ],
    },
  },

  // ───────────── 5.3 ─────────────
  {
    code: "5.3", title: "Increasing and Decreasing Intervals", unit: UNIT,
    ideas: [
      r`$f$ is \textbf{increasing} on an interval where $f'(x)>0$ and \textbf{decreasing} where $f'(x)<0$.`,
      r`Find the critical points, then test the sign of $f'$ on each interval between them.`,
      r`A factor that is always positive (a square, an exponential) does not affect the sign.`,
      r`The justification is a statement about the sign of $f'$ on the whole interval.`,
    ],
    examples: [
      { t: "A cubic", q: r`Find where $f(x)=2x^3-3x^2-12x$ is increasing and decreasing.`, s: r`$f'(x)=6x^2-6x-12=6(x-2)(x+1)$, with signs $+,-,+$.`, r: r`Increasing on $(-\infty,-1)$ and $(2,\infty)$; decreasing on $(-1,2)$.` },
      { t: "A logarithm", q: r`Find where $f(x)=x-2\ln x$, $x>0$, is increasing and decreasing.`, s: r`$f'(x)=1-\dfrac2x=\dfrac{x-2}{x}$.`, r: r`Decreasing on $(0,2)$; increasing on $(2,\infty)$.` },
      { t: "From the derivative", q: r`A function has $f'(x)=(x-1)(x+2)^2$. Where is $f$ increasing?`, s: r`$(x+2)^2\ge0$, so the sign of $f'$ is the sign of $x-1$.`, r: r`For $x>1$.` },
    ],
    core: [
      r`Find where $f(x)=x^2-6x$ is decreasing.`,
      r`Show that $f(x)=-x^3$ is never increasing.`,
      r`Find where $f(x)=e^{x}-x$ is increasing.`,
      r`A function has $f'(x)=x(x-4)$. On what intervals is $f$ increasing?`,
    ],
    exam: [
      r`Find where $f(x)=3x^4-8x^3$ is decreasing.`,
      r`Show that $f(x)=x+\cos x$ is never decreasing.`,
      r`Find where $f(x)=x+\dfrac3x$ is decreasing.`,
      r`Find where $f(x)=x^2-2\ln x$, $x>0$, is increasing.`,
    ],
    fr: {
      intro: r`Let $f(x)=(x-3)^2e^{x}$.`,
      parts: [
        r`Find $f'(x)$ in factored form.`,
        r`Find the intervals on which $f$ is increasing and the interval on which $f$ is decreasing. Justify your answer.`,
        r`Without computing, explain why $f(2)<f(1)$.`,
      ],
    },
    sol: {
      core: [
        r`$f'(x)=2x-6<0$ for $x<3$.`,
        r`$f'(x)=-3x^2\le0$ for all $x$.`,
        r`$f'(x)=e^{x}-1>0$ for $x>0$.`,
        r`$(-\infty,0)$ and $(4,\infty)$.`,
      ],
      exam: [
        r`$f'(x)=12x^3-24x^2=12x^2(x-2)<0$ for $x<2$ ($x\neq0$): decreasing on $(-\infty,2)$.`,
        r`$f'(x)=1-\sin x\ge0$ for all $x$.`,
        r`$f'(x)=1-\dfrac{3}{x^2}<0$ when $x^2<3$: on $\left(-\sqrt3,0\right)$ and $\left(0,\sqrt3\right)$.`,
        r`$f'(x)=2x-\dfrac2x=\dfrac{2(x^2-1)}{x}>0$ for $x>1$.`,
      ],
      fr: [
        r`$2(x-3)e^{x}+(x-3)^2e^{x}=(x-3)(x-1)e^{x}$.`,
        r`$f'>0$ for $x<1$ and $x>3$: increasing on $(-\infty,1)$ and $(3,\infty)$. $f'<0$ for $1<x<3$: decreasing on $(1,3)$.`,
        r`$f$ is decreasing on $[1,3]$ because $f'(x)<0$ on $(1,3)$, and $1<2$.`,
      ],
    },
  },

  // ───────────── 5.4 ─────────────
  {
    code: "5.4", title: "The First Derivative Test", unit: UNIT,
    ideas: [
      r`At a critical point $c$: if $f'$ changes from \textbf{positive to negative}, $f$ has a relative \textbf{maximum}; from \textbf{negative to positive}, a relative \textbf{minimum}.`,
      r`If $f'$ does not change sign at $c$, there is no extremum there.`,
      r`The location is $x=c$; the extreme \emph{value} is $f(c)$. Read which one the question wants.`,
      r`\textquotedblleft{}$f'(c)=0$\textquotedblright{} is not a justification. The sign change is.`,
    ],
    examples: [
      { t: "A cubic", q: r`Find the relative extrema of $f(x)=x^3-6x^2+9x$.`, s: r`$f'(x)=3(x-1)(x-3)$, with signs $+,-,+$.`, r: r`Relative maximum $f(1)=4$; relative minimum $f(3)=0$.` },
      { t: "A repeated factor", q: r`A function has $f'(x)=(x+1)(x-2)^2(x-5)$. Classify its critical points.`, s: r`Signs of $f'$: $+$ for $x<-1$; $-$ on $(-1,2)$ and on $(2,5)$; $+$ for $x>5$.`, r: r`Maximum at $x=-1$, minimum at $x=5$, neither at $x=2$.` },
      { t: "A cusp-type critical point", q: r`Classify the critical points of $f(x)=x-3x^{1/3}$.`, s: r`$f'(x)=1-x^{-2/3}$ is positive for $|x|>1$ and negative for $0<|x|<1$.`, r: r`Maximum at $x=-1$ (value 2), minimum at $x=1$ (value $-2$), neither at $x=0$.` },
    ],
    core: [
      r`Find the relative minimum value of $f(x)=x^2-4x+7$.`,
      r`Find the relative maximum value of $f(x)=6x-x^2$.`,
      r`A function has $f'$ changing from negative to positive at $x=4$. What does $f$ have there?`,
      r`A function has $f'(x)=(x-3)^2$. Does $f$ have a relative extremum at $x=3$?`,
    ],
    exam: [
      r`Find and classify the relative extremum of $f(x)=x^4-4x$.`,
      r`Find and classify the relative extremum of $f(x)=xe^{-x/3}$.`,
      r`Find and classify the relative extremum of $f(x)=x^2+\dfrac2x$ for $x>0$.`,
      r`Find and classify the relative extrema of $f(x)=\sqrt3\sin x+\cos x$ on $(0,2\pi)$.`,
    ],
    fr: {
      intro: r`Let $f(x)=x^3e^{-x}$.`,
      parts: [
        r`Find $f'(x)$ in factored form.`,
        r`Find the relative maximum value of $f$. Justify your answer.`,
        r`Explain why $f$ has no relative extremum at $x=0$.`,
      ],
    },
    sol: {
      core: [
        r`$f'(x)=2x-4$ changes from negative to positive at $x=2$: minimum value $f(2)=3$.`,
        r`$f'(x)=6-2x$ changes from positive to negative at $x=3$: maximum value $f(3)=9$.`,
        r`A relative minimum.`,
        r`No: $f'$ is positive on both sides of 3.`,
      ],
      exam: [
        r`$f'(x)=4x^3-4$ changes from negative to positive at $x=1$: relative minimum, value $-3$.`,
        r`$f'(x)=e^{-x/3}\left(1-\dfrac x3\right)$ changes from positive to negative at $x=3$: relative maximum, value $\dfrac3e$.`,
        r`$f'(x)=2x-\dfrac{2}{x^2}$ changes from negative to positive at $x=1$: relative minimum, value 3.`,
        r`$f'(x)=\sqrt3\cos x-\sin x=0$ when $\tan x=\sqrt3$. Maximum at $x=\dfrac\pi3$ (value 2); minimum at $x=\dfrac{4\pi}{3}$ (value $-2$).`,
      ],
      fr: [
        r`$3x^2e^{-x}-x^3e^{-x}=x^2(3-x)e^{-x}$.`,
        r`$f'$ changes from positive to negative at $x=3$, so the relative maximum value is $f(3)=\dfrac{27}{e^3}$.`,
        r`$f'(0)=0$, but $x^2\ge0$ means $f'$ is positive on both sides of 0: no sign change.`,
      ],
    },
  },

  // ───────────── 5.5 ─────────────
  {
    code: "5.5", title: "Absolute Extrema on a Closed Interval", unit: UNIT,
    ideas: [
      r`\textbf{Candidates test.} On a closed interval, the absolute extrema occur at critical points or at endpoints.`,
      r`Evaluate $f$ at every critical point in the interval and at both endpoints. The largest value is the absolute maximum; the smallest is the absolute minimum.`,
      r`The list of values \emph{is} the justification. Show it.`,
      r`On an open interval with a single critical point, a sign change of $f'$ over the whole interval gives an absolute extremum.`,
    ],
    examples: [
      { t: "The candidates test", q: r`Find the absolute extrema of $f(x)=x^3-3x^2+1$ on $[-1,4]$.`, s: r`$f'(x)=3x(x-2)$. $f(-1)=-3$, $f(0)=1$, $f(2)=-3$, $f(4)=17$.`, r: r`Maximum 17 (at $x=4$); minimum $-3$ (at $x=-1$ and $x=2$).` },
      { t: "A trigonometric function", q: r`Find the absolute extrema of $f(x)=\sin x+\dfrac x2$ on $[0,2\pi]$.`, s: r`$f'(x)=\cos x+\dfrac12=0$ at $\dfrac{2\pi}{3}$ and $\dfrac{4\pi}{3}$. $f(0)=0$, $f\!\left(\dfrac{2\pi}{3}\right)\approx1.913$, $f\!\left(\dfrac{4\pi}{3}\right)\approx1.228$, $f(2\pi)=\pi$.`, r: r`Maximum $\pi$ (at $x=2\pi$); minimum 0 (at $x=0$).` },
      { t: "An open interval", q: r`Find the absolute minimum of $f(x)=x^2+\dfrac{54}{x}$ for $x>0$.`, s: r`$f'(x)=2x-\dfrac{54}{x^2}$ is negative for $0<x<3$ and positive for $x>3$.`, r: r`The absolute minimum is $f(3)=27$.` },
    ],
    core: [
      r`Find the absolute extrema of $f(x)=x^2-2x$ on $[0,3]$.`,
      r`Find the absolute extrema of $f(x)=4-x^2$ on $[-1,2]$.`,
      r`Find the absolute extrema of $f(x)=x^3$ on $[-2,1]$.`,
      r`Why must the endpoints be included in the candidates test?`,
    ],
    exam: [
      r`Find the absolute extrema of $f(x)=2x^3-9x^2+12x$ on $[0,3]$.`,
      r`Find the absolute extrema of $f(x)=xe^{-x/2}$ on $[0,6]$.`,
      r`Find the absolute extrema of $f(x)=x^2-8\ln x$ on $[1,e]$.`,
      r`Find the absolute extrema of $f(x)=|x-2|$ on $[0,5]$.`,
    ],
    fr: {
      intro: r`Let $f(x)=3x^4-4x^3-12x^2+2$.`,
      parts: [
        r`Find the critical points of $f$.`,
        r`Find the absolute maximum value of $f$ on $[-2,3]$. Justify your answer.`,
        r`Find the absolute minimum value of $f$ on $[-2,3]$.`,
      ],
    },
    sol: {
      core: [
        r`$f(0)=0$, $f(1)=-1$, $f(3)=3$: maximum 3, minimum $-1$.`,
        r`$f(-1)=3$, $f(0)=4$, $f(2)=0$: maximum 4, minimum 0.`,
        r`$f(-2)=-8$, $f(0)=0$, $f(1)=1$: maximum 1, minimum $-8$.`,
        r`An extremum on a closed interval can occur at an endpoint, where the derivative need not be zero.`,
      ],
      exam: [
        r`$f'(x)=6(x-1)(x-2)$. $f(0)=0$, $f(1)=5$, $f(2)=4$, $f(3)=9$: maximum 9, minimum 0.`,
        r`$f'(x)=e^{-x/2}\left(1-\dfrac x2\right)=0$ at $x=2$. $f(0)=0$, $f(2)=\dfrac2e$, $f(6)=\dfrac{6}{e^3}$: maximum $\dfrac2e$, minimum 0.`,
        r`$f'(x)=2x-\dfrac8x=0$ at $x=2$. $f(1)=1$, $f(2)=4-8\ln2\approx-1.545$, $f(e)=e^2-8\approx-0.611$: maximum 1, minimum $4-8\ln2$.`,
        r`The only critical point is $x=2$, where $f'$ does not exist. $f(0)=2$, $f(2)=0$, $f(5)=3$: maximum 3, minimum 0.`,
      ],
      fr: [
        r`$f'(x)=12x^3-12x^2-24x=12x(x-2)(x+1)$: $x=-1$, $x=0$ and $x=2$.`,
        r`$f(-2)=34$, $f(-1)=-3$, $f(0)=2$, $f(2)=-30$, $f(3)=29$. The absolute maximum is 34, at the endpoint $x=-2$.`,
        r`From the same list, the absolute minimum is $-30$, at $x=2$.`,
      ],
    },
  },

  // ───────────── 5.6 ─────────────
  {
    code: "5.6", title: "Concavity and Points of Inflection", unit: UNIT,
    ideas: [
      r`The graph of $f$ is \textbf{concave up} where $f''(x)>0$ (equivalently, where $f'$ is increasing) and \textbf{concave down} where $f''(x)<0$.`,
      r`A \textbf{point of inflection} is a point of the graph where the concavity changes.`,
      r`$f''(c)=0$ is not enough: $f''$ must \textbf{change sign} at $c$.`,
      r`A point of inflection is a point: give both coordinates when asked for the point.`,
    ],
    examples: [
      { t: "A cubic", q: r`Find the point of inflection of $f(x)=x^3+3x^2$.`, s: r`$f''(x)=6x+6$ changes from negative to positive at $x=-1$.`, r: r`The point $(-1,2)$.` },
      { t: "A quartic", q: r`Find the $x$-coordinates of the points of inflection of $f(x)=x^4-12x^2$.`, s: r`$f''(x)=12x^2-24=12\left(x^2-2\right)$ changes sign at $x=\pm\sqrt2$.`, r: r`$x=-\sqrt2$ and $x=\sqrt2$.` },
      { t: "A bell-shaped curve", q: r`Find the $x$-coordinates of the points of inflection of $f(x)=e^{-x^2}$.`, s: r`$f'(x)=-2xe^{-x^2}$ and $f''(x)=\left(4x^2-2\right)e^{-x^2}$.`, r: r`$x=\pm\dfrac{1}{\sqrt2}$.` },
    ],
    core: [
      r`Show that the graph of $f(x)=x^2+3x$ is concave up everywhere.`,
      r`Find the point of inflection of $f(x)=x^3$.`,
      r`Describe the concavity of $f(x)=\ln x$.`,
      r`A function has $f''(x)=x-1$. Where is its graph concave up?`,
    ],
    exam: [
      r`Find the $x$-coordinates of the points of inflection of $f(x)=x^4-8x^3$.`,
      r`Find the $x$-coordinate of the point of inflection of $f(x)=x^2\ln x$ for $x>0$.`,
      r`A function has $f''(x)=(x+2)^2(x-3)$. Where does its graph have a point of inflection?`,
      r`Find the point of inflection of $f(x)=\sin x$ on $(0,2\pi)$, and describe the concavity on each side.`,
    ],
    fr: {
      intro: r`Let $f(x)=x^5-10x^3$.`,
      parts: [
        r`Find $f''(x)$ in factored form.`,
        r`Find the intervals on which the graph of $f$ is concave up.`,
        r`Find the $x$-coordinates of all points of inflection. Justify your answer.`,
      ],
    },
    sol: {
      core: [
        r`$f''(x)=2>0$ for all $x$.`,
        r`$f''(x)=6x$ changes sign at $x=0$: the point $(0,0)$.`,
        r`$f''(x)=-\dfrac{1}{x^2}<0$: concave down for all $x>0$.`,
        r`For $x>1$.`,
      ],
      exam: [
        r`$f''(x)=12x^2-48x=12x(x-4)$ changes sign at $x=0$ and $x=4$.`,
        r`$f'(x)=2x\ln x+x$ and $f''(x)=2\ln x+3$, which changes sign at $x=e^{-3/2}$.`,
        r`Only at $x=3$: $(x+2)^2$ does not change sign.`,
        r`$f''(x)=-\sin x$ changes sign at $x=\pi$: the point $(\pi,0)$. Concave down on $(0,\pi)$, concave up on $(\pi,2\pi)$.`,
      ],
      fr: [
        r`$f'(x)=5x^4-30x^2$ and $f''(x)=20x^3-60x=20x\left(x^2-3\right)$.`,
        r`$f''>0$ on $\left(-\sqrt3,0\right)$ and $\left(\sqrt3,\infty\right)$.`,
        r`$x=-\sqrt3$, $x=0$ and $x=\sqrt3$: $f''$ changes sign at each.`,
      ],
    },
  },

  // ───────────── 5.7 ─────────────
  {
    code: "5.7", title: "The Second Derivative Test", unit: UNIT,
    ideas: [
      r`If $f'(c)=0$ and $f''(c)>0$, then $f$ has a relative \textbf{minimum} at $c$.`,
      r`If $f'(c)=0$ and $f''(c)<0$, then $f$ has a relative \textbf{maximum} at $c$.`,
      r`If $f'(c)=0$ and $f''(c)=0$, the test is \textbf{inconclusive}: use the first derivative test.`,
      r`If $c$ is the only critical point and $f''$ has one sign on the whole interval, the extremum is absolute.`,
    ],
    examples: [
      { t: "Two critical points", q: r`Classify the critical points of $f(x)=x^3-3x^2+2$.`, s: r`$f'(x)=3x(x-2)$ and $f''(x)=6x-6$. $f''(0)=-6$ and $f''(2)=6$.`, r: r`Relative maximum at $x=0$; relative minimum at $x=2$.` },
      { t: "When the test fails", q: r`What does the test say about $f(x)=x^5$ at $x=0$?`, s: r`$f'(0)=0$ and $f''(0)=0$: inconclusive. $f'(x)=5x^4$ is positive on both sides.`, r: r`The test gives no information; in fact there is no extremum.` },
      { t: "An absolute minimum", q: r`Find the absolute minimum of $f(x)=2x+\dfrac8x$ for $x>0$.`, s: r`$f'(x)=2-\dfrac{8}{x^2}=0$ at $x=2$, the only critical point. $f''(x)=\dfrac{16}{x^3}>0$ for all $x>0$.`, r: r`The absolute minimum is $f(2)=8$.` },
    ],
    core: [
      r`Given $f'(3)=0$ and $f''(3)=2$, what does $f$ have at $x=3$?`,
      r`Given $f'(1)=0$ and $f''(1)=-5$, what does $f$ have at $x=1$?`,
      r`Use the second derivative test on $f(x)=x^2-8x$.`,
      r`Given $f'(c)=0$ and $f''(c)=0$, what can be concluded?`,
    ],
    exam: [
      r`Use the second derivative test to classify the critical points of $f(x)=x^3-48x$.`,
      r`Find and classify the critical point of $f(x)=x^2-\ln x$ for $x>0$.`,
      r`Use the second derivative test to classify the critical points of $f(x)=2\sin x+x$ on $(0,2\pi)$.`,
      r`A solution of $\dfrac{dy}{dx}=x^2-y$ passes through the point $(2,4)$. Show that it has a relative minimum there.`,
    ],
    fr: {
      intro: r`Let $f(x)=\dfrac{x^4}{4}-2x^2$.`,
      parts: [
        r`Find the critical points of $f$.`,
        r`Use the second derivative test to classify each critical point.`,
        r`Find the relative maximum value and the relative minimum value of $f$.`,
      ],
    },
    sol: {
      core: [
        r`A relative minimum.`,
        r`A relative maximum.`,
        r`$f'(4)=0$ and $f''(4)=2>0$: relative minimum at $x=4$.`,
        r`Nothing: the test is inconclusive.`,
      ],
      exam: [
        r`$f'(x)=3x^2-48=0$ at $x=\pm4$; $f''(x)=6x$. Minimum at $x=4$, maximum at $x=-4$.`,
        r`$f'(x)=2x-\dfrac1x=0$ at $x=\dfrac{1}{\sqrt2}$. $f''(x)=2+\dfrac{1}{x^2}>0$: a relative (and absolute) minimum.`,
        r`$f'(x)=2\cos x+1=0$ at $\dfrac{2\pi}{3}$ and $\dfrac{4\pi}{3}$. $f''(x)=-2\sin x$: $-\sqrt3$ at $\dfrac{2\pi}{3}$ (maximum), $\sqrt3$ at $\dfrac{4\pi}{3}$ (minimum).`,
        r`At $(2,4)$, $\dfrac{dy}{dx}=4-4=0$, and $\dfrac{d^2y}{dx^2}=2x-\dfrac{dy}{dx}=4>0$.`,
      ],
      fr: [
        r`$f'(x)=x^3-4x=x(x-2)(x+2)$: $x=0$ and $x=\pm2$.`,
        r`$f''(x)=3x^2-4$. $f''(0)=-4<0$: maximum. $f''(\pm2)=8>0$: minima.`,
        r`Maximum value $f(0)=0$; minimum value $f(\pm2)=4-8=-4$.`,
      ],
    },
  },

  // ───────────── 5.8 ─────────────
  {
    code: "5.8", title: "Sketching a Function from Its Derivatives", unit: UNIT,
    ideas: [
      r`Collect, in order: domain and intercepts; asymptotes; where $f'$ is positive or negative; where $f''$ is positive or negative.`,
      r`The signs of $f'$ and $f''$ together give one of four shapes on each interval: rising or falling, bending up or down.`,
      r`A horizontal asymptote comes from a limit as $x\to\pm\infty$; a vertical asymptote from an infinite one-sided limit.`,
      r`Mark relative extrema and points of inflection as points, with both coordinates.`,
    ],
    examples: [
      { t: "A rational function", q: r`Describe the graph of $f(x)=\dfrac{x}{x-2}$.`, s: r`Vertical asymptote $x=2$; horizontal asymptote $y=1$. $f'(x)=-\dfrac{2}{(x-2)^2}<0$.`, r: r`Decreasing on each side of $x=2$; it passes through the origin.` },
      { t: "Four shapes", q: r`On an interval, $f'>0$ and $f''<0$. Describe the graph there.`, s: r`Positive first derivative: rising. Negative second derivative: concave down.`, r: r`Rising, and levelling off.` },
      { t: "Putting it together", q: r`List the key features of $f(x)=x^3-3x^2$.`, s: r`$f'(x)=3x(x-2)$: maximum $(0,0)$, minimum $(2,-4)$. $f''(x)=6x-6$: inflection $(1,-2)$. Zeros at $x=0$ and $x=3$.`, r: r`Rises to $(0,0)$, falls through $(1,-2)$ to $(2,-4)$, then rises through $(3,0)$.` },
    ],
    core: [
      r`Find the vertex and the $x$-intercepts of $f(x)=x^2-4x+3$.`,
      r`Write equations for the asymptotes of $f(x)=\dfrac{2x+1}{x-3}$.`,
      r`On an interval, $f'<0$ and $f''>0$. Describe the graph there.`,
      r`Describe the graph of $f(x)=e^{-x}$: direction, concavity and asymptote.`,
    ],
    exam: [
      r`Find the relative extrema and the $x$-coordinates of the points of inflection of $f(x)=x^4-4x^2$.`,
      r`Find the maximum, the points of inflection and the horizontal asymptote of $f(x)=\dfrac{1}{x^2+1}$.`,
      r`A function has $f(1)=-2$, $f'(x)<0$ for $x<1$, $f'(x)>0$ for $x>1$, and $f''(x)>0$ for all $x$. Describe its graph.`,
      r`Find the relative extremum, the point of inflection and the horizontal asymptote of $f(x)=(x+1)e^{x}$.`,
    ],
    fr: {
      intro: r`Let $f(x)=\dfrac{x^2-1}{x^2+1}$.`,
      parts: [
        r`Find the horizontal asymptote and the intercepts of the graph of $f$.`,
        r`Find $f'(x)$ and the coordinates of the relative extremum of $f$. Classify it.`,
        r`Given that $f''(x)=\dfrac{4\left(1-3x^2\right)}{\left(x^2+1\right)^3}$, find the $x$-coordinates of the points of inflection.`,
      ],
    },
    sol: {
      core: [
        r`Vertex $(2,-1)$; intercepts $x=1$ and $x=3$.`,
        r`$x=3$ and $y=2$.`,
        r`Falling, and concave up (levelling off).`,
        r`Decreasing, concave up, with horizontal asymptote $y=0$ as $x\to\infty$.`,
      ],
      exam: [
        r`$f'(x)=4x\left(x^2-2\right)$: maximum $(0,0)$, minima $\left(\pm\sqrt2,-4\right)$. $f''(x)=12x^2-8$: inflection at $x=\pm\sqrt{\tfrac23}$.`,
        r`$f'(x)=-\dfrac{2x}{(x^2+1)^2}$: maximum $(0,1)$. $f''(x)=\dfrac{6x^2-2}{(x^2+1)^3}$: inflection at $x=\pm\dfrac{1}{\sqrt3}$. Asymptote $y=0$.`,
        r`It falls to a minimum at $(1,-2)$ and then rises, concave up throughout: a single bowl shape.`,
        r`$f'(x)=(x+2)e^{x}$: minimum $\left(-2,-e^{-2}\right)$. $f''(x)=(x+3)e^{x}$: inflection at $x=-3$. Asymptote $y=0$ as $x\to-\infty$.`,
      ],
      fr: [
        r`$y=1$. Intercepts: $(0,-1)$, $(1,0)$ and $(-1,0)$.`,
        r`$f'(x)=\dfrac{4x}{(x^2+1)^2}$ changes from negative to positive at $x=0$: a minimum at $(0,-1)$.`,
        r`$f''$ changes sign where $1-3x^2=0$: $x=\pm\dfrac{1}{\sqrt3}$.`,
      ],
    },
  },

  // ───────────── 5.9 ─────────────
  {
    code: "5.9", title: r`Moving Between the Graphs of $f$, $f'$ and $f''$`, unit: UNIT,
    pre: FP,
    ideas: [
      r`Where the graph of $f'$ is \textbf{above} the axis, $f$ is increasing; below, decreasing.`,
      r`$f$ has a relative maximum where $f'$ crosses the axis from above to below, and a minimum where it crosses from below to above.`,
      r`Where the graph of $f'$ is \textbf{rising}, $f$ is concave up; falling, concave down.`,
      r`$f$ has a point of inflection where $f'$ has a relative maximum or minimum. Always say which graph you are describing.`,
    ],
    examples: [
      { t: "Reading the derivative", q: r`The graph of $f'$ consists of the line segments joining $(0,-2)$, $(2,2)$ and $(5,-1)$. Find the relative extrema of $f$.`, s: r`$f'$ crosses the axis at $x=1$ (from negative to positive) and at $x=4$ (from positive to negative).`, r: r`Relative minimum at $x=1$; relative maximum at $x=4$.` },
      { t: "Concavity from the derivative", q: r`For the same $f'$, where is the graph of $f$ concave up, and where is its point of inflection?`, s: r`$f'$ is increasing on $(0,2)$ and decreasing on $(2,5)$.`, r: r`Concave up on $(0,2)$; point of inflection at $x=2$.` },
      { t: "From f to f prime", q: r`On an interval, $f$ is increasing and concave down. What is true of $f'$ there?`, s: r`Increasing: $f'>0$. Concave down: $f'$ is decreasing.`, r: r`$f'$ is positive and decreasing.` },
    ],
    core: [
      r`If $f'(x)>0$ on $(1,5)$, what is true of $f$ on that interval?`,
      r`If $f'$ has a relative maximum at $x=3$, what does the graph of $f$ have at $x=3$?`,
      r`If $f''(x)<0$ on $(0,2)$, what is true of $f'$ and of the graph of $f$ there?`,
      r`If $f'(2)=0$ and $f'$ changes from positive to negative at $x=2$, what does $f$ have there?`,
    ],
    exam: [
      r`Find the $x$-coordinates of the relative maxima of $f$. Justify your answer.`,
      r`Find the $x$-coordinate of the relative minimum of $f$. Justify your answer.`,
      r`On what interval is the graph of $f$ concave up? Where are its points of inflection?`,
      r`Find $f''(2)$ and $f''(4)$.`,
    ],
    fr: {
      intro: r`The derivative of a function $f$ is $f'(x)=x^2-4x+3$.`,
      parts: [
        r`On what intervals is $f$ increasing? Justify your answer.`,
        r`Find the $x$-coordinates of the relative maximum and the relative minimum of $f$.`,
        r`Find the $x$-coordinate of the point of inflection of the graph of $f$, and explain how it can be seen on the graph of $f'$.`,
      ],
    },
    sol: {
      core: [
        r`$f$ is increasing on $(1,5)$.`,
        r`A point of inflection.`,
        r`$f'$ is decreasing and the graph of $f$ is concave down.`,
        r`A relative maximum.`,
      ],
      exam: [
        r`$x=0$ and $x=5$: $f'$ changes from positive to negative at each.`,
        r`$x=2$: $f'$ changes from negative to positive.`,
        r`Concave up on $(1,3)$, where $f'$ is increasing. Points of inflection at $x=1$ and $x=3$, where $f'$ changes direction.`,
        r`The slopes of the graph of $f'$: $f''(2)=\dfrac{2-(-2)}{3-1}=2$ and $f''(4)=\dfrac{-1-2}{6-3}=-1$.`,
      ],
      fr: [
        r`$f'(x)=(x-1)(x-3)>0$ for $x<1$ and for $x>3$.`,
        r`Maximum at $x=1$ ($f'$ changes from positive to negative); minimum at $x=3$.`,
        r`$f''(x)=2x-4$ changes sign at $x=2$. On the graph of $f'$ this is the vertex of the parabola, where $f'$ changes from decreasing to increasing.`,
      ],
    },
  },

  // ───────────── 5.10 ─────────────
  {
    code: "5.10", title: "Optimisation", unit: UNIT,
    ideas: [
      r`Name the quantity to be made largest or smallest, and write it as a function of \textbf{one} variable, using the constraint to eliminate the other.`,
      r`State the domain: the values of the variable that make sense.`,
      r`Find the critical points, then \textbf{justify}: candidates test on a closed interval, or a sign argument over the whole domain.`,
      r`Answer the question that was asked: a dimension, a value, or a point.`,
    ],
    examples: [
      { t: "A product", q: r`Two positive numbers have sum 20. Find the largest possible product.`, s: r`$P(x)=x(20-x)$, $0<x<20$. $P'(x)=20-2x=0$ at $x=10$, and $P''=-2<0$.`, r: r`The largest product is 100.` },
      { t: "An open box", q: r`Squares of side $x$ cm are cut from the corners of a 12 cm by 12 cm sheet, and the sides are folded up. Find the largest possible volume.`, s: r`$V(x)=x(12-2x)^2$, $0<x<6$. $V'(x)=(12-2x)(12-6x)=0$ at $x=2$ in the domain; $V\to0$ at both ends.`, r: r`$V(2)=128$ cm$^3$.` },
      { t: "A nearest point", q: r`Find the points on $y=x^2$ closest to $(0,3)$.`, s: r`Minimise $D=x^2+\left(x^2-3\right)^2$. $D'=2x+4x\left(x^2-3\right)=2x\left(2x^2-5\right)$. $D$ is smaller at $x=\pm\sqrt{\tfrac52}$ than at $x=0$.`, r: r`$\left(\pm\sqrt{\tfrac52},\tfrac52\right)$.` },
    ],
    core: [
      r`A rectangle has perimeter 40 cm. Find the largest possible area.`,
      r`Find the smallest value of $x+\dfrac{25}{x}$ for $x>0$.`,
      r`Find the largest value of $8x-x^2$.`,
      r`Why is finding where the derivative is zero not, by itself, a complete solution?`,
    ],
    exam: [
      r`A farmer has 80 m of fencing for three sides of a rectangular field; the fourth side is a river. Find the largest possible area.`,
      r`A closed cylindrical can must hold $54\pi$ cm$^3$. Find the radius and height that use the least material.`,
      r`A rectangle has its base on the $x$-axis and its upper corners on $y=9-x^2$. Find the largest possible area.`,
      r`The profit from selling $x$ items is $P(x)=-2x^2+120x-400$ dollars. Find the largest possible profit.`,
    ],
    fr: {
      intro: r`An open-topped box with a square base of side $x$ metres must have volume 108 m$^3$.`,
      parts: [
        r`Show that the surface area of the box is $S(x)=x^2+\dfrac{432}{x}$.`,
        r`Find the value of $x$ that makes the surface area as small as possible.`,
        r`Justify that this value gives the absolute minimum, and state the dimensions and surface area of the box.`,
      ],
    },
    sol: {
      core: [
        r`$A=x(20-x)$ is greatest at $x=10$: 100 cm$^2$.`,
        r`$1-\dfrac{25}{x^2}=0$ at $x=5$, where the value is 10.`,
        r`$8-2x=0$ at $x=4$: the largest value is 16.`,
        r`A zero derivative gives a candidate only. It must be shown to be a maximum or minimum, and an absolute one.`,
      ],
      exam: [
        r`$A=x(80-2x)$, $A'=80-4x=0$ at $x=20$: $20\times40=800$ m$^2$.`,
        r`$h=\dfrac{54}{r^2}$, so $S=2\pi r^2+\dfrac{108\pi}{r}$. $S'=4\pi r-\dfrac{108\pi}{r^2}=0$ at $r=3$; then $h=6$.`,
        r`$A=2x\left(9-x^2\right)$, $A'=18-6x^2=0$ at $x=\sqrt3$: $A=2\sqrt3(6)=12\sqrt3$.`,
        r`$P'(x)=-4x+120=0$ at $x=30$: $P(30)=1400$ dollars.`,
      ],
      fr: [
        r`With height $h$, $x^2h=108$ so $h=\dfrac{108}{x^2}$. $S=x^2+4xh=x^2+\dfrac{432}{x}$.`,
        r`$S'(x)=2x-\dfrac{432}{x^2}=0$ gives $x^3=216$, so $x=6$.`,
        r`$S''(x)=2+\dfrac{864}{x^3}>0$ for all $x>0$, and $x=6$ is the only critical point, so it is the absolute minimum. The box is $6\times6\times3$ m with surface area 108 m$^2$.`,
      ],
    },
  },

  // ───────────── 5.11 ─────────────
  {
    code: "5.11", title: "Behaviour of Implicitly Defined Curves", unit: UNIT,
    pre: r`\emph{Questions 5 to 8 refer to the curve $y^3-3y=x^2$.}`,
    ideas: [
      r`Write $\dfrac{dy}{dx}$ as a single fraction. The tangent is \textbf{horizontal} where the numerator is zero (and the denominator is not).`,
      r`The tangent is \textbf{vertical} where the denominator is zero (and the numerator is not).`,
      r`A condition such as $y=2x$ must be substituted back into the \textbf{original equation} to find actual points. Some conditions give no points.`,
      r`At a point with a horizontal tangent, the sign of $\dfrac{d^2y}{dx^2}$ decides between a maximum and a minimum.`,
    ],
    examples: [
      { t: "Slope at a point", q: r`Find the slope of $x^2+y^2=10$ at $(1,3)$.`, s: r`$\dfrac{dy}{dx}=-\dfrac xy$.`, r: r`$-\dfrac13$.` },
      { t: "Horizontal and vertical tangents", q: r`Find the points on the ellipse $4x^2+y^2=16$ where the tangent is horizontal, and where it is vertical.`, s: r`$8x+2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac{4x}{y}$. Numerator zero: $x=0$, $y=\pm4$. Denominator zero: $y=0$, $x=\pm2$.`, r: r`Horizontal at $(0,\pm4)$; vertical at $(\pm2,0)$.` },
      { t: "Maximum or minimum", q: r`For the same ellipse, find $\dfrac{d^2y}{dx^2}$ at $(0,4)$ and interpret it.`, s: r`Differentiate $8x+2y\dfrac{dy}{dx}=0$ again: $8+2\left(\dfrac{dy}{dx}\right)^2+2y\dfrac{d^2y}{dx^2}=0$. At $(0,4)$ with $\dfrac{dy}{dx}=0$: $8+8\dfrac{d^2y}{dx^2}=0$.`, r: r`$\dfrac{d^2y}{dx^2}=-1<0$: the curve has a relative maximum at $(0,4)$.` },
    ],
    core: [
      r`Find $\dfrac{dy}{dx}$ for $x^2+y^2=10$.`,
      r`Find the slope of that circle at the point $(3,-1)$.`,
      r`At which points of the circle $x^2+y^2=10$ is the tangent horizontal?`,
      r`At which points of that circle is the tangent vertical?`,
    ],
    exam: [
      r`Find $\dfrac{dy}{dx}$ in terms of $x$ and $y$.`,
      r`Find all points of the curve at which the tangent line is horizontal.`,
      r`Find all points of the curve at which the tangent line is vertical.`,
      r`Verify that $\left(3\sqrt2,3\right)$ lies on the curve, and find the slope there.`,
    ],
    fr: {
      intro: r`Consider the curve $xy+y^2=8$.`,
      parts: [
        r`Find $\dfrac{dy}{dx}$ in terms of $x$ and $y$.`,
        r`Write an equation of the line tangent to the curve at the point $(2,2)$.`,
        r`Show that the curve has no horizontal tangent and no vertical tangent.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{dy}{dx}=-\dfrac xy$.`,
        r`$-\dfrac{3}{-1}=3$.`,
        r`Where $x=0$: $\left(0,\sqrt{10}\right)$ and $\left(0,-\sqrt{10}\right)$.`,
        r`Where $y=0$: $\left(\sqrt{10},0\right)$ and $\left(-\sqrt{10},0\right)$.`,
      ],
      exam: [
        r`$\left(3y^2-3\right)\dfrac{dy}{dx}=2x$, so $\dfrac{dy}{dx}=\dfrac{2x}{3y^2-3}$.`,
        r`$x=0$ gives $y^3-3y=0$, so $y=0$ or $y=\pm\sqrt3$: the points $(0,0)$, $\left(0,\sqrt3\right)$ and $\left(0,-\sqrt3\right)$.`,
        r`$y=\pm1$. $y=1$ gives $x^2=-2$ (no points); $y=-1$ gives $x^2=2$: the points $\left(\sqrt2,-1\right)$ and $\left(-\sqrt2,-1\right)$.`,
        r`$27-9=18=\left(3\sqrt2\right)^2$. The slope is $\dfrac{6\sqrt2}{24}=\dfrac{\sqrt2}{4}$.`,
      ],
      fr: [
        r`$y+x\dfrac{dy}{dx}+2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac{y}{x+2y}$.`,
        r`The slope is $-\dfrac{2}{6}=-\dfrac13$: $y-2=-\dfrac13(x-2)$.`,
        r`Horizontal needs $y=0$, but then $0=8$: no such point. Vertical needs $x=-2y$, which gives $-2y^2+y^2=8$, that is $y^2=-8$: no such point.`,
      ],
    },
  },
];

export default sheets;
