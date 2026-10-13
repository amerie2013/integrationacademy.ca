// AP Calculus AB worksheets — Unit 3 (Composite, Implicit and Inverse Functions).
// Original problems throughout, different from those in the lessons, the
// question bank and the online free-response questions. Written in LaTeX;
// build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 3: Composite, Implicit and Inverse Functions";
const tab = (a, xs, b, ys) => r`\begin{center}\renewcommand{\arraystretch}{1.25}\begin{tabular}{|c|${"c|".repeat(xs.length)}}\hline $${a}$ & ${xs.map((x) => `$${x}$`).join(" & ")} \\ \hline $${b}$ & ${ys.map((y) => `$${y}$`).join(" & ")} \\ \hline\end{tabular}\end{center}`;

const sheets = [
  // ───────────── 3.1 ─────────────
  {
    code: "3.1", title: "Functions Inside Functions: The Chain Rule", unit: UNIT,
    ideas: [
      r`\textbf{Chain rule}: $\dfrac{d}{dx}\Big[f\big(g(x)\big)\Big]=f'\big(g(x)\big)\cdot g'(x)$: the derivative of the outside, evaluated at the inside, times the derivative of the inside.`,
      r`Work from the outside in. With three layers there are three factors.`,
      r`$\sin^3x$ means $(\sin x)^3$: the outside function is the cube.`,
      r`With a table, $f'$ is evaluated at $g(a)$, not at $a$.`,
    ],
    examples: [
      { t: "A power of a polynomial", q: r`Find $\dfrac{d}{dx}\left[\left(2x^3+1\right)^5\right]$.`, s: r`$5\left(2x^3+1\right)^4\cdot6x^2$.`, r: r`$30x^2\left(2x^3+1\right)^4$.` },
      { t: "A root of a trigonometric function", q: r`Find $\dfrac{d}{dx}\left[\sqrt{3+\cos x}\right]$.`, s: r`$\dfrac12(3+\cos x)^{-1/2}\cdot(-\sin x)$.`, r: r`$-\dfrac{\sin x}{2\sqrt{3+\cos x}}$.` },
      { t: "From values", q: r`Let $h(x)=f\big(g(x)\big)$, with $g(3)=2$, $g'(3)=-4$ and $f'(2)=5$. Find $h'(3)$.`, s: r`$h'(3)=f'\big(g(3)\big)\,g'(3)=f'(2)\cdot(-4)$.`, r: r`$h'(3)=-20$.` },
    ],
    core: [
      r`Find $\dfrac{d}{dx}[\sin(5x)]$.`,
      r`Find $\dfrac{d}{dx}\left[e^{x^2}\right]$.`,
      r`Find $\dfrac{d}{dx}\left[\left(x^2+3x\right)^4\right]$.`,
      r`Find $\dfrac{d}{dx}[\ln(4x+1)]$.`,
    ],
    exam: [
      r`Find $\dfrac{d}{dx}\left[\cos^3x\right]$.`,
      r`Find $\dfrac{d}{dx}\left[e^{-2x}\sin(3x)\right]$.`,
      r`Find $\dfrac{d}{dx}\left[\tan\!\left(\sqrt{x}\right)\right]$.`,
      r`Let $f(x)=\sqrt{g(x)}$, where $g(4)=25$ and $g'(4)=-10$. Find $f'(4)$.`,
    ],
    fr: {
      intro: r`Let $f(x)=\left(x^2-4\right)^3$.`,
      parts: [
        r`Find $f'(x)$.`,
        r`Find all values of $x$ at which the graph of $f$ has a horizontal tangent.`,
        r`Write an equation of the line tangent to the graph of $f$ at $x=1$.`,
      ],
    },
    sol: {
      core: [
        r`$5\cos(5x)$.`,
        r`$2xe^{x^2}$.`,
        r`$4\left(x^2+3x\right)^3(2x+3)$.`,
        r`$\dfrac{4}{4x+1}$.`,
      ],
      exam: [
        r`$3\cos^2x\cdot(-\sin x)=-3\cos^2x\sin x$.`,
        r`$-2e^{-2x}\sin(3x)+3e^{-2x}\cos(3x)=e^{-2x}\big(3\cos(3x)-2\sin(3x)\big)$.`,
        r`$\sec^2\!\left(\sqrt x\right)\cdot\dfrac{1}{2\sqrt x}$.`,
        r`$f'(4)=\dfrac{g'(4)}{2\sqrt{g(4)}}=\dfrac{-10}{10}=-1$.`,
      ],
      fr: [
        r`$3\left(x^2-4\right)^2\cdot2x=6x\left(x^2-4\right)^2$.`,
        r`$x=0$, $x=2$ and $x=-2$.`,
        r`$f(1)=-27$ and $f'(1)=6(9)=54$: $y+27=54(x-1)$.`,
      ],
    },
  },

  // ───────────── 3.2 ─────────────
  {
    code: "3.2", title: "Curves That Are Not Functions: Implicit Differentiation", unit: UNIT,
    ideas: [
      r`Differentiate both sides with respect to $x$, treating $y$ as a function of $x$.`,
      r`Every term containing $y$ produces a factor $\dfrac{dy}{dx}$: \ $\dfrac{d}{dx}\left[y^3\right]=3y^2\dfrac{dy}{dx}$.`,
      r`A term such as $xy$ needs the \textbf{product rule}: $y+x\dfrac{dy}{dx}$.`,
      r`Collect the $\dfrac{dy}{dx}$ terms, factor, and divide. Substitute a point only \emph{after} differentiating.`,
    ],
    examples: [
      { t: "A circle", q: r`Find the slope of $x^2+y^2=29$ at the point $(5,2)$.`, s: r`$2x+2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac xy$.`, r: r`The slope is $-\dfrac52$.` },
      { t: "A product term", q: r`Find $\dfrac{dy}{dx}$ for $x^3+xy+y^2=7$, and its value at $(1,2)$.`, s: r`$3x^2+y+x\dfrac{dy}{dx}+2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac{3x^2+y}{x+2y}$.`, r: r`At $(1,2)$: $-\dfrac55=-1$.` },
      { t: "A trigonometric relation", q: r`Find $\dfrac{dy}{dx}$ if $\sin y=x^2$.`, s: r`$\cos y\,\dfrac{dy}{dx}=2x$.`, r: r`$\dfrac{dy}{dx}=\dfrac{2x}{\cos y}$.` },
    ],
    core: [
      r`Find $\dfrac{dy}{dx}$ for $x^2+y^2=20$.`,
      r`Find $\dfrac{dy}{dx}$ for $y^3+y=x$.`,
      r`Find the slope of $xy=18$ at the point $(3,6)$.`,
      r`Find the slope of $4x^2+y^2=8$ at the point $(1,2)$.`,
    ],
    exam: [
      r`Find $\dfrac{dy}{dx}$ for $x^2y+y=10$, and its value at $(2,2)$.`,
      r`Find the slope of $e^{y}+xy=e$ at the point $(0,1)$.`,
      r`Write an equation of the line tangent to $x^2-xy-y^2=1$ at the point $(2,1)$.`,
      r`Find the points on the curve $x^2+y^2-4x=0$ at which the tangent line is horizontal.`,
    ],
    fr: {
      intro: r`Consider the curve $x^2+3y^2=12$.`,
      parts: [
        r`Find $\dfrac{dy}{dx}$ in terms of $x$ and $y$.`,
        r`Find the coordinates of the points on the curve at which the slope of the tangent line is 1.`,
        r`Find the coordinates of the points on the curve at which the tangent line is vertical.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{dy}{dx}=-\dfrac xy$.`,
        r`$\left(3y^2+1\right)\dfrac{dy}{dx}=1$, so $\dfrac{dy}{dx}=\dfrac{1}{3y^2+1}$.`,
        r`$y+x\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac yx=-2$.`,
        r`$8x+2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac{4x}{y}=-2$.`,
      ],
      exam: [
        r`$2xy+x^2\dfrac{dy}{dx}+\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac{2xy}{x^2+1}$; at $(2,2)$ this is $-\dfrac85$.`,
        r`$e^{y}\dfrac{dy}{dx}+y+x\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac{y}{e^{y}+x}=-\dfrac1e$.`,
        r`$2x-y-x\dfrac{dy}{dx}-2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=\dfrac{2x-y}{x+2y}=\dfrac34$: $y-1=\dfrac34(x-2)$.`,
        r`$2x+2y\dfrac{dy}{dx}-4=0$, so $\dfrac{dy}{dx}=\dfrac{2-x}{y}$, zero at $x=2$. Then $y^2=4$: the points $(2,2)$ and $(2,-2)$.`,
      ],
      fr: [
        r`$2x+6y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac{x}{3y}$.`,
        r`$-\dfrac{x}{3y}=1$ gives $x=-3y$. Then $9y^2+3y^2=12$, so $y=\pm1$: the points $(-3,1)$ and $(3,-1)$.`,
        r`The denominator $3y$ is zero when $y=0$, and then $x^2=12$: the points $\left(2\sqrt3,0\right)$ and $\left(-2\sqrt3,0\right)$.`,
      ],
    },
  },

  // ───────────── 3.3 ─────────────
  {
    code: "3.3", title: "Slopes of Inverse Functions", unit: UNIT,
    ideas: [
      r`If $g=f^{-1}$ and $f(a)=b$, then $g(b)=a$ and $g'(b)=\dfrac{1}{f'(a)}$.`,
      r`The slope of the inverse at $b$ is the reciprocal of the slope of $f$ at the \textbf{matching} point $a$, not at $b$.`,
      r`To find $a$, solve $f(a)=b$. On the exam it can always be found by inspection.`,
      r`A function with $f'(x)>0$ everywhere is increasing, hence one-to-one, hence invertible.`,
    ],
    examples: [
      { t: "From a formula", q: r`Let $f(x)=x^3+3x+1$. Find $\left(f^{-1}\right)'(5)$.`, s: r`$f(1)=5$, so $f^{-1}(5)=1$. $f'(x)=3x^2+3$, so $f'(1)=6$.`, r: r`$\left(f^{-1}\right)'(5)=\dfrac16$.` },
      { t: "From values", q: r`A differentiable function $f$ has an inverse, with $f(2)=6$ and $f'(2)=4$. Find $\left(f^{-1}\right)'(6)$.`, s: r`The matching point is $x=2$.`, r: r`$\dfrac14$.` },
      { t: "An exponential", q: r`Let $f(x)=e^{x}+2x$. Find $\left(f^{-1}\right)'(1)$.`, s: r`$f(0)=1$ and $f'(x)=e^{x}+2$, so $f'(0)=3$.`, r: r`$\dfrac13$.` },
    ],
    core: [
      r`Let $g=f^{-1}$, with $f(4)=9$ and $f'(4)=\dfrac12$. Find $g'(9)$.`,
      r`Let $f(x)=2x-7$. Find $\left(f^{-1}\right)'(x)$.`,
      r`Let $f(x)=x^3$. Find $\left(f^{-1}\right)'(8)$.`,
      r`The graph of $f$ has slope 5 at the point $(2,3)$. What is the slope of the graph of $f^{-1}$, and at which point?`,
    ],
    exam: [
      r`Let $f(x)=x^5+x^3+1$. Find $\left(f^{-1}\right)'(3)$.`,
      r`Let $f(x)=x^3+\ln x$ for $x>0$. Find $\left(f^{-1}\right)'(1)$.`,
      r`Let $f(x)=x+\sin x$. Explain what happens to $\left(f^{-1}\right)'$ at $x=\pi$.`,
      r`Selected values of an increasing differentiable function $f$ are shown.` + tab("x", [1, 2, 3], "f(x)", [4, 7, 12]) + tab("x", [1, 2, 3], "f'(x)", [2, 5, 6]) + r`Write an equation of the line tangent to the graph of $f^{-1}$ at $x=7$.`,
    ],
    fr: {
      intro: r`Let $f(x)=x^3+x-4$.`,
      parts: [
        r`Explain why $f$ has an inverse function.`,
        r`Find $\left(f^{-1}\right)'(6)$.`,
        r`Write an equation of the line tangent to the graph of $f^{-1}$ at $x=-2$.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{1}{1/2}=2$.`,
        r`$f'(x)=2$ everywhere, so $\left(f^{-1}\right)'(x)=\dfrac12$.`,
        r`$f(2)=8$ and $f'(2)=12$: $\dfrac{1}{12}$.`,
        r`Slope $\dfrac15$, at the point $(3,2)$.`,
      ],
      exam: [
        r`$f(1)=3$ and $f'(1)=5+3=8$: $\dfrac18$.`,
        r`$f(1)=1$ and $f'(1)=3+1=4$: $\dfrac14$.`,
        r`$f(\pi)=\pi$ and $f'(\pi)=1+\cos\pi=0$. The reciprocal is undefined: the graph of $f^{-1}$ has a vertical tangent at $x=\pi$.`,
        r`$f(2)=7$, so the point is $(7,2)$ and the slope is $\dfrac{1}{f'(2)}=\dfrac15$: $y-2=\dfrac15(x-7)$.`,
      ],
      fr: [
        r`$f'(x)=3x^2+1>0$ for all $x$, so $f$ is increasing and therefore one-to-one.`,
        r`$f(2)=6$ and $f'(2)=13$: $\dfrac{1}{13}$.`,
        r`$f(1)=-2$ and $f'(1)=4$. The point is $(-2,1)$ and the slope is $\dfrac14$: $y-1=\dfrac14(x+2)$.`,
      ],
    },
  },

  // ───────────── 3.4 ─────────────
  {
    code: "3.4", title: "Derivatives of Inverse Trigonometric Functions", unit: UNIT,
    ideas: [
      r`$\dfrac{d}{dx}[\arcsin x]=\dfrac{1}{\sqrt{1-x^2}}$ \quad and \quad $\dfrac{d}{dx}[\arccos x]=-\dfrac{1}{\sqrt{1-x^2}}$.`,
      r`$\dfrac{d}{dx}[\arctan x]=\dfrac{1}{1+x^2}$.`,
      r`With an inside function $u$, replace $x$ by $u$ and multiply by $u'$: \ $\dfrac{d}{dx}[\arctan u]=\dfrac{u'}{1+u^2}$.`,
      r`Square the \emph{whole} inside: for $\arctan(3x)$ the denominator is $1+9x^2$.`,
    ],
    examples: [
      { t: "With the chain rule", q: r`Find $\dfrac{d}{dx}[\arcsin(2x)]$.`, s: r`$\dfrac{1}{\sqrt{1-(2x)^2}}\cdot2$.`, r: r`$\dfrac{2}{\sqrt{1-4x^2}}$.` },
      { t: "With the product rule", q: r`Find $\dfrac{d}{dx}[x\arccos x]$.`, s: r`$(1)\arccos x+x\cdot\left(-\dfrac{1}{\sqrt{1-x^2}}\right)$.`, r: r`$\arccos x-\dfrac{x}{\sqrt{1-x^2}}$.` },
      { t: "A tangent line", q: r`Write an equation of the line tangent to $y=\arccos x$ at $x=\dfrac12$.`, s: r`The point is $\left(\dfrac12,\dfrac\pi3\right)$. The slope is $-\dfrac{1}{\sqrt{1-\frac14}}=-\dfrac{2}{\sqrt3}$.`, r: r`$y-\dfrac\pi3=-\dfrac{2}{\sqrt3}\left(x-\dfrac12\right)$.` },
    ],
    core: [
      r`Find $\dfrac{d}{dx}[4\arctan x]$.`,
      r`Find $\dfrac{d}{dx}[\arccos(3x)]$.`,
      r`Find $\dfrac{d}{dx}[\arctan(5x)]$.`,
      r`Find the slope of the graph of $y=\arctan x$ at $x=2$.`,
    ],
    exam: [
      r`Find $\dfrac{d}{dx}\left[\arcsin\!\left(e^{x}\right)\right]$.`,
      r`Find $\dfrac{d}{dx}\left[\arctan\!\left(\dfrac1x\right)\right]$ in simplified form.`,
      r`Find $\dfrac{d}{dx}\left[(\arcsin x)^2\right]$.`,
      r`Let $f(x)=\arctan\!\left(\dfrac x3\right)$. Find $f'(3)$.`,
    ],
    fr: {
      intro: r`Let $f(x)=\arctan(2x)$.`,
      parts: [
        r`Find $f'(x)$.`,
        r`Write an equation of the line tangent to the graph of $f$ at $x=\dfrac12$.`,
        r`Find all values of $x$ at which the slope of the graph of $f$ is $\dfrac25$.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{4}{1+x^2}$.`,
        r`$-\dfrac{3}{\sqrt{1-9x^2}}$.`,
        r`$\dfrac{5}{1+25x^2}$.`,
        r`$\dfrac{1}{1+4}=\dfrac15$.`,
      ],
      exam: [
        r`$\dfrac{e^{x}}{\sqrt{1-e^{2x}}}$.`,
        r`$\dfrac{1}{1+\frac{1}{x^2}}\cdot\left(-\dfrac{1}{x^2}\right)=-\dfrac{1}{x^2+1}$.`,
        r`$\dfrac{2\arcsin x}{\sqrt{1-x^2}}$.`,
        r`$f'(x)=\dfrac{1/3}{1+x^2/9}$, so $f'(3)=\dfrac{1/3}{2}=\dfrac16$.`,
      ],
      fr: [
        r`$f'(x)=\dfrac{2}{1+4x^2}$.`,
        r`$f\!\left(\dfrac12\right)=\arctan1=\dfrac\pi4$ and $f'\!\left(\dfrac12\right)=1$: $y-\dfrac\pi4=x-\dfrac12$.`,
        r`$\dfrac{2}{1+4x^2}=\dfrac25$ gives $1+4x^2=5$, so $x=\pm1$.`,
      ],
    },
  },

  // ───────────── 3.5 ─────────────
  {
    code: "3.5", title: "Choosing the Right Rule", unit: UNIT,
    ideas: [
      r`Ask: what is the \textbf{last operation} performed when evaluating the expression? That decides the first rule.`,
      r`A product of two functions: product rule. One function inside another: chain rule. Often both, one inside the other.`,
      r`A quotient can be rewritten as a product with a negative power when that is easier.`,
      r`Simplify before differentiating when the algebra is cheap; do not simplify afterwards unless asked.`,
    ],
    examples: [
      { t: "Product outside, chain inside", q: r`Find $\dfrac{d}{dx}\left[x^2e^{3x}\right]$.`, s: r`$2xe^{3x}+x^2\cdot3e^{3x}$.`, r: r`$e^{3x}\left(2x+3x^2\right)$.` },
      { t: "Chain outside, product inside", q: r`Find $\dfrac{d}{dx}[\sin(x\cos x)]$.`, s: r`$\cos(x\cos x)$ times the derivative of $x\cos x$.`, r: r`$\cos(x\cos x)\,(\cos x-x\sin x)$.` },
      { t: "Quotient with a chain", q: r`Find $\dfrac{d}{dx}\left[\dfrac{\ln\!\left(x^2+1\right)}{x}\right]$.`, s: r`$\dfrac{x\cdot\frac{2x}{x^2+1}-\ln\!\left(x^2+1\right)}{x^2}$.`, r: r`$\dfrac{2}{x^2+1}-\dfrac{\ln\!\left(x^2+1\right)}{x^2}$.` },
    ],
    core: [
      r`Which rule is applied first to differentiate $y=(3x+1)^4\sin x$?`,
      r`Which rule is applied first to differentiate $y=\sin\!\left((3x+1)^4\right)$?`,
      r`Find $\dfrac{d}{dx}\left[e^{x}\ln x\right]$.`,
      r`Find $\dfrac{d}{dx}\left[(1+\cos x)^2\right]$.`,
    ],
    exam: [
      r`Find $\dfrac{d}{dx}\left[\sqrt{x}\,e^{-x}\right]$.`,
      r`Find $\dfrac{d}{dx}\left[\tan^2(3x)\right]$.`,
      r`Find $\dfrac{d}{dx}\left[\dfrac{x}{\sqrt{x^2+1}}\right]$ in simplified form.`,
      r`Find $\dfrac{d}{dx}[\ln(\sec x+\tan x)]$ in simplified form.`,
    ],
    fr: {
      intro: r`Let $f(x)=x\sqrt{8-x^2}$ for $-2\sqrt2\le x\le2\sqrt2$.`,
      parts: [
        r`Show that $f'(x)=\dfrac{8-2x^2}{\sqrt{8-x^2}}$.`,
        r`Find the values of $x$ at which the graph of $f$ has a horizontal tangent.`,
        r`Write an equation of the tangent line at the point found in part (b) with $x>0$.`,
      ],
    },
    sol: {
      core: [
        r`The product rule: the last operation is the multiplication.`,
        r`The chain rule: the last operation is the sine.`,
        r`$e^{x}\ln x+\dfrac{e^{x}}{x}$.`,
        r`$2(1+\cos x)(-\sin x)=-2\sin x\,(1+\cos x)$.`,
      ],
      exam: [
        r`$\dfrac{e^{-x}}{2\sqrt x}-\sqrt x\,e^{-x}$.`,
        r`$2\tan(3x)\cdot\sec^2(3x)\cdot3=6\tan(3x)\sec^2(3x)$.`,
        r`$\dfrac{\sqrt{x^2+1}-\frac{x^2}{\sqrt{x^2+1}}}{x^2+1}=\dfrac{1}{\left(x^2+1\right)^{3/2}}$.`,
        r`$\dfrac{\sec x\tan x+\sec^2x}{\sec x+\tan x}=\sec x$.`,
      ],
      fr: [
        r`$\sqrt{8-x^2}+x\cdot\dfrac{-x}{\sqrt{8-x^2}}=\dfrac{\left(8-x^2\right)-x^2}{\sqrt{8-x^2}}$.`,
        r`$8-2x^2=0$ gives $x=2$ and $x=-2$.`,
        r`$f(2)=2\sqrt4=4$ and the slope is 0: the line $y=4$.`,
      ],
    },
  },

  // ───────────── 3.6 ─────────────
  {
    code: "3.6", title: "Second and Higher Derivatives", unit: UNIT,
    ideas: [
      r`The second derivative is the derivative of the first: $f''(x)$, or $\dfrac{d^2y}{dx^2}$.`,
      r`For motion: position $s$, velocity $s'$, acceleration $s''$.`,
      r`Implicitly: differentiate $\dfrac{dy}{dx}$ with respect to $x$ (quotient rule), then \textbf{substitute} for $\dfrac{dy}{dx}$.`,
      r`Repeated derivatives of $\sin$, $\cos$ and $e^{kx}$ follow patterns: use the pattern, do not differentiate fifty times.`,
    ],
    examples: [
      { t: "A polynomial", q: r`Find $f''(x)$ for $f(x)=x^4-2x^3$.`, s: r`$f'(x)=4x^3-6x^2$.`, r: r`$f''(x)=12x^2-12x$.` },
      { t: "A pattern", q: r`Find the third derivative of $y=e^{3x}$, and a formula for the $n$th derivative.`, s: r`Each derivative multiplies by 3.`, r: r`$27e^{3x}$; in general $3^ne^{3x}$.` },
      { t: "Implicitly", q: r`Find $\dfrac{d^2y}{dx^2}$ for $x^2+y^2=9$.`, s: r`$\dfrac{dy}{dx}=-\dfrac xy$. Then $\dfrac{d^2y}{dx^2}=-\dfrac{y-x\frac{dy}{dx}}{y^2}=-\dfrac{y+\frac{x^2}{y}}{y^2}=-\dfrac{x^2+y^2}{y^3}$.`, r: r`$-\dfrac{9}{y^3}$.` },
    ],
    core: [
      r`Find $f''(x)$ for $f(x)=5x^3-x$.`,
      r`Find $\dfrac{d^2y}{dx^2}$ for $y=\cos(2x)$.`,
      r`Find $\dfrac{d^2y}{dx^2}$ for $y=\ln x$.`,
      r`A particle has position $s(t)=t^3-3t^2$. Find its acceleration.`,
    ],
    exam: [
      r`Find $f''(x)$ for $f(x)=x^2e^{x}$.`,
      r`Find $\dfrac{d^2y}{dx^2}$ for $y=\sin^2x$, in simplified form.`,
      r`For the curve $y^2=4x$, find $\dfrac{d^2y}{dx^2}$ at the point $(1,2)$.`,
      r`Find the fourth derivative of $y=\sin(2x)$.`,
    ],
    fr: {
      intro: r`Consider the curve $x^2+2y^2=6$.`,
      parts: [
        r`Find $\dfrac{dy}{dx}$ in terms of $x$ and $y$.`,
        r`Show that $\dfrac{d^2y}{dx^2}=-\dfrac{3}{2y^3}$.`,
        r`Find the values of $\dfrac{dy}{dx}$ and $\dfrac{d^2y}{dx^2}$ at the point $(2,1)$. Is the curve concave up or concave down there?`,
      ],
    },
    sol: {
      core: [
        r`$f'(x)=15x^2-1$, so $f''(x)=30x$.`,
        r`$y'=-2\sin(2x)$, so $y''=-4\cos(2x)$.`,
        r`$y'=\dfrac1x$, so $y''=-\dfrac{1}{x^2}$.`,
        r`$s'(t)=3t^2-6t$, so $a(t)=6t-6$.`,
      ],
      exam: [
        r`$f'(x)=\left(x^2+2x\right)e^{x}$, so $f''(x)=\left(x^2+4x+2\right)e^{x}$.`,
        r`$y'=2\sin x\cos x=\sin(2x)$, so $y''=2\cos(2x)$.`,
        r`$2y\dfrac{dy}{dx}=4$, so $\dfrac{dy}{dx}=\dfrac2y$ and $\dfrac{d^2y}{dx^2}=-\dfrac{2}{y^2}\dfrac{dy}{dx}=-\dfrac{4}{y^3}=-\dfrac12$.`,
        r`Each pair of derivatives multiplies by $-4$: $16\sin(2x)$.`,
      ],
      fr: [
        r`$2x+4y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac{x}{2y}$.`,
        r`$\dfrac{d^2y}{dx^2}=-\dfrac{2y-2x\frac{dy}{dx}}{4y^2}=-\dfrac{2y+\frac{x^2}{y}}{4y^2}=-\dfrac{2y^2+x^2}{4y^3}=-\dfrac{6}{4y^3}$.`,
        r`$\dfrac{dy}{dx}=-1$ and $\dfrac{d^2y}{dx^2}=-\dfrac32$. The second derivative is negative, so the curve is concave down.`,
      ],
    },
  },
];

export default sheets;
