// AP Calculus AB worksheets — Unit 0 (Readiness).
// Original problems throughout, different from those in the lessons, the
// question bank and the online free-response questions. Written in LaTeX;
// build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 0: Readiness";

const sheets = [
  // ───────────── 0.1 ─────────────
  {
    code: "0.1", title: "Functions You Must Know Cold", unit: UNIT,
    ideas: [
      r`A \textbf{domain} excludes zero denominators, negative numbers under even roots, and non-positive inputs of logarithms.`,
      r`Changes \emph{inside} the brackets act on $x$ and work backwards: $f(x-h)$ moves the graph right $h$. Changes \emph{outside} act on $y$.`,
      r`$f\big(g(x)\big)$ means $g$ first, then $f$. Its domain is found before simplifying.`,
      r`To find an \textbf{inverse}, write $y=f(x)$, solve for $x$, and swap the letters. The domain of $f^{-1}$ is the range of $f$.`,
    ],
    examples: [
      { t: "Two restrictions at once", q: r`Find the domain of $f(x)=\dfrac{\sqrt{2x+8}}{x-3}$.`, s: r`The root needs $2x+8\ge0$, that is $x\ge-4$. The denominator is zero at $x=3$.`, r: r`Domain: $x\ge-4$ and $x\neq3$.` },
      { t: "Composition in both orders", q: r`Let $f(x)=\dfrac1x$ and $g(x)=x-4$. Find $f\big(g(x)\big)$ and $g\big(f(x)\big)$ with their domains.`, s: r`$f\big(g(x)\big)=\dfrac{1}{x-4}$, defined for $x\neq4$. $g\big(f(x)\big)=\dfrac1x-4$, defined for $x\neq0$.`, r: r`The two compositions are different functions with different domains.` },
      { t: "Inverse of a rational function", q: r`Find the inverse of $f(x)=\dfrac{x-1}{x+2}$.`, s: r`$y(x+2)=x-1$ gives $xy-x=-2y-1$, so $x=\dfrac{-2y-1}{y-1}=\dfrac{2y+1}{1-y}$.`, r: r`$f^{-1}(x)=\dfrac{2x+1}{1-x}$.` },
    ],
    core: [
      r`Find the domain of $f(x)=\sqrt{10-5x}$.`,
      r`State the range of $y=|x|-3$.`,
      r`Let $f(x)=4-x^2$ and $g(x)=2x+1$. Find $f\big(g(1)\big)$ and $g\big(f(1)\big)$.`,
      r`Find the inverse of $f(x)=5x-3$.`,
    ],
    exam: [
      r`Find the domain of $f(x)=\ln\!\left(x^2-4\right)$.`,
      r`Let $f(x)=\sqrt{x}$ and $g(x)=9-x^2$. Find $f\big(g(x)\big)$ and state its domain.`,
      r`Find the inverse of $f(x)=e^{2x}+1$, and state the domain of the inverse.`,
      r`Describe how the graph of $y=\dfrac{3}{x+2}-1$ is obtained from the graph of $y=\dfrac1x$, and write equations for its two asymptotes.`,
    ],
    fr: {
      intro: r`Let $f(x)=x^2-6x$ with domain $x\ge3$.`,
      parts: [
        r`Find the range of $f$.`,
        r`Find $f^{-1}(x)$. (Completing the square is helpful.)`,
        r`State the domain and range of $f^{-1}$, and verify that $f^{-1}\big(f(5)\big)=5$.`,
      ],
    },
    sol: {
      core: [
        r`$10-5x\ge0$, so $x\le2$.`,
        r`$y\ge-3$.`,
        r`$g(1)=3$ and $f(3)=-5$. $f(1)=3$ and $g(3)=7$.`,
        r`$f^{-1}(x)=\dfrac{x+3}{5}$.`,
      ],
      exam: [
        r`$x^2-4>0$, so $x<-2$ or $x>2$.`,
        r`$\sqrt{9-x^2}$, with domain $-3\le x\le3$.`,
        r`$y-1=e^{2x}$ gives $x=\dfrac12\ln(y-1)$, so $f^{-1}(x)=\dfrac12\ln(x-1)$ with domain $x>1$.`,
        r`Stretched vertically by 3, moved left 2 and down 1. Asymptotes: $x=-2$ and $y=-1$.`,
      ],
      fr: [
        r`$f(x)=(x-3)^2-9$, which is least at $x=3$: range $y\ge-9$.`,
        r`$y+9=(x-3)^2$ with $x\ge3$ gives $x=3+\sqrt{y+9}$, so $f^{-1}(x)=3+\sqrt{x+9}$.`,
        r`Domain $x\ge-9$, range $y\ge3$. $f(5)=-5$ and $f^{-1}(-5)=3+\sqrt4=5$.`,
      ],
    },
  },

  // ───────────── 0.2 ─────────────
  {
    code: "0.2", title: "Trigonometry Without Hesitation", unit: UNIT,
    ideas: [
      r`Calculus uses \textbf{radians}: $\pi$ radians is $180^\circ$.`,
      r`For an angle outside the first quadrant, use its \textbf{reference angle} and attach the sign: sine is positive in quadrants I and II, cosine in I and IV, tangent in I and III.`,
      r`$\sin^2x+\cos^2x=1$, \quad $\sin2x=2\sin x\cos x$, \quad $\cos2x=1-2\sin^2x=2\cos^2x-1$.`,
      r`To solve an equation, move everything to one side and \textbf{factor}. Never divide by $\sin x$ or $\cos x$.`,
    ],
    examples: [
      { t: "Exact values", q: r`Find $\cos\dfrac{3\pi}{4}$, $\sin\dfrac{11\pi}{6}$ and $\tan\dfrac{7\pi}{6}$.`, s: r`Reference angles $\dfrac\pi4$, $\dfrac\pi6$, $\dfrac\pi6$, in quadrants II, IV and III.`, r: r`$-\dfrac{\sqrt2}{2}$, \ $-\dfrac12$ \ and \ $\dfrac{1}{\sqrt3}$.` },
      { t: "A linear equation", q: r`Solve $2\cos x+1=0$ for $0\le x<2\pi$.`, s: r`$\cos x=-\dfrac12$. The reference angle is $\dfrac\pi3$ and cosine is negative in quadrants II and III.`, r: r`$x=\dfrac{2\pi}{3}$ and $x=\dfrac{4\pi}{3}$.` },
      { t: "Using an identity first", q: r`Solve $\cos2x+\sin x=0$ for $0\le x<2\pi$.`, s: r`$1-2\sin^2x+\sin x=0$, so $2\sin^2x-\sin x-1=(2\sin x+1)(\sin x-1)=0$. $\sin x=1$ gives $\dfrac\pi2$; $\sin x=-\dfrac12$ gives $\dfrac{7\pi}{6}$ and $\dfrac{11\pi}{6}$.`, r: r`$x=\dfrac\pi2,\ \dfrac{7\pi}{6},\ \dfrac{11\pi}{6}$.` },
    ],
    core: [
      r`Find $\sin\dfrac{3\pi}{2}$ and $\cos\dfrac{2\pi}{3}$.`,
      r`Convert $\dfrac{5\pi}{4}$ radians to degrees.`,
      r`Solve $\sin x=\dfrac{\sqrt3}{2}$ for $0\le x<2\pi$.`,
      r`Solve $\tan x=-1$ for $0\le x<2\pi$.`,
    ],
    exam: [
      r`Solve $4\cos^2x=3$ for $0\le x<2\pi$.`,
      r`Given $\cos\theta=-\dfrac23$ with $\theta$ in quadrant II, find $\sin\theta$ and $\tan\theta$.`,
      r`Show that $\tan x+\cot x=\sec x\csc x$.`,
      r`Find $\arcsin\dfrac{\sqrt3}{2}$, $\arctan\!\left(-\sqrt3\right)$ and $\arccos0$.`,
    ],
    fr: {
      intro: r`Let $g(x)=\cos2x+3\cos x+2$ for $0\le x<2\pi$.`,
      parts: [
        r`Find the exact value of $g\!\left(\dfrac\pi3\right)$.`,
        r`Write $g(x)$ in terms of $\cos x$ only.`,
        r`Find all values of $x$ in the interval at which $g(x)=0$.`,
      ],
    },
    sol: {
      core: [
        r`$-1$ and $-\dfrac12$.`,
        r`$225^\circ$.`,
        r`$x=\dfrac\pi3$ and $x=\dfrac{2\pi}{3}$.`,
        r`$x=\dfrac{3\pi}{4}$ and $x=\dfrac{7\pi}{4}$.`,
      ],
      exam: [
        r`$\cos x=\pm\dfrac{\sqrt3}{2}$: $x=\dfrac\pi6,\ \dfrac{5\pi}{6},\ \dfrac{7\pi}{6},\ \dfrac{11\pi}{6}$.`,
        r`$\sin^2\theta=1-\dfrac49=\dfrac59$, and sine is positive in quadrant II: $\sin\theta=\dfrac{\sqrt5}{3}$, $\tan\theta=-\dfrac{\sqrt5}{2}$.`,
        r`$\dfrac{\sin x}{\cos x}+\dfrac{\cos x}{\sin x}=\dfrac{\sin^2x+\cos^2x}{\sin x\cos x}=\dfrac{1}{\sin x\cos x}=\sec x\csc x$.`,
        r`$\dfrac\pi3$, \ $-\dfrac\pi3$ \ and \ $\dfrac\pi2$.`,
      ],
      fr: [
        r`$\cos\dfrac{2\pi}{3}+3\cos\dfrac\pi3+2=-\dfrac12+\dfrac32+2=3$.`,
        r`$2\cos^2x-1+3\cos x+2=2\cos^2x+3\cos x+1$.`,
        r`$(2\cos x+1)(\cos x+1)=0$. $\cos x=-\dfrac12$ gives $\dfrac{2\pi}{3}$ and $\dfrac{4\pi}{3}$; $\cos x=-1$ gives $\pi$.`,
      ],
    },
  },

  // ───────────── 0.3 ─────────────
  {
    code: "0.3", title: "Exponentials, Logarithms and Their Laws", unit: UNIT,
    ideas: [
      r`$y=\ln x$ means $e^{y}=x$. So $\ln\!\left(e^{x}\right)=x$ for all $x$, and $e^{\ln x}=x$ for $x>0$.`,
      r`$\ln(ab)=\ln a+\ln b$, \quad $\ln\dfrac ab=\ln a-\ln b$, \quad $\ln\!\left(a^{b}\right)=b\ln a$. There is no law for $\ln(a+b)$.`,
      r`To solve for an exponent: \textbf{isolate} the exponential, then take the natural logarithm.`,
      r`A logarithmic equation can produce a value that is not allowed. \textbf{Check} every solution in the original equation.`,
    ],
    examples: [
      { t: "Simplifying", q: r`Simplify $e^{\ln4+\ln3}$ and $\ln\!\left(e^{2}\sqrt{e}\right)$.`, s: r`$e^{\ln4+\ln3}=e^{\ln12}$. $\ln\!\left(e^{2}\cdot e^{1/2}\right)=\ln\!\left(e^{5/2}\right)$.`, r: r`$12$ and $\dfrac52$.` },
      { t: "Isolate, then take logs", q: r`Solve $5e^{2x}-3=17$.`, s: r`$5e^{2x}=20$, so $e^{2x}=4$ and $2x=\ln4$.`, r: r`$x=\dfrac{\ln4}{2}=\ln2$.` },
      { t: "A difference of logarithms", q: r`Solve $\ln(x+6)-\ln x=\ln4$.`, s: r`$\ln\dfrac{x+6}{x}=\ln4$, so $x+6=4x$.`, r: r`$x=2$, which makes both logarithms defined.` },
    ],
    core: [
      r`Simplify $\ln\!\left(e^{7}\right)-e^{\ln2}$.`,
      r`Solve $e^{x}=\dfrac12$.`,
      r`Solve $\ln x=-1$.`,
      r`Write $2\ln a-\ln b+\ln c$ as a single logarithm.`,
    ],
    exam: [
      r`Solve $e^{2x}-9e^{x}+20=0$.`,
      r`Solve $\ln(x-2)+\ln(x+2)=\ln5$.`,
      r`Solve $3^{x}=15$, giving an exact answer in terms of natural logarithms.`,
      r`Write $\ln\dfrac{x^3e^{x}}{\sqrt{x^2+1}}$ as a sum and difference of simpler terms.`,
    ],
    fr: {
      intro: r`The amount of a drug in a patient's bloodstream $t$ hours after an injection is $A(t)=80e^{-0.1t}$ milligrams.`,
      parts: [
        r`How much of the drug is present at $t=0$?`,
        r`Find the exact time at which 20 milligrams remain.`,
        r`Find the exact half-life of the drug, and explain how it is related to your answer to part (b).`,
      ],
    },
    sol: {
      core: [
        r`$7-2=5$.`,
        r`$x=\ln\dfrac12=-\ln2$.`,
        r`$x=e^{-1}=\dfrac1e$.`,
        r`$\ln\dfrac{a^2c}{b}$.`,
      ],
      exam: [
        r`$(e^{x}-4)(e^{x}-5)=0$, so $x=\ln4$ or $x=\ln5$.`,
        r`$\ln\!\left(x^2-4\right)=\ln5$ gives $x^2=9$. Only $x=3$ is allowed, since $x=-3$ makes the logarithms undefined.`,
        r`$x\ln3=\ln15$, so $x=\dfrac{\ln15}{\ln3}$.`,
        r`$3\ln x+x-\dfrac12\ln\!\left(x^2+1\right)$.`,
      ],
      fr: [
        r`$A(0)=80$ milligrams.`,
        r`$80e^{-0.1t}=20$ gives $e^{-0.1t}=\dfrac14$, so $t=10\ln4$ hours (about 13.9).`,
        r`$e^{-0.1t}=\dfrac12$ gives $t=10\ln2$ hours. Falling from 80 to 20 is two halvings, and $10\ln4=2\cdot10\ln2$.`,
      ],
    },
  },

  // ───────────── 0.4 ─────────────
  {
    code: "0.4", title: "Your Graphing Calculator: The Four Exam Skills", unit: UNIT,
    pre: r`\emph{A graphing calculator is required for every question on this page. Work in radian mode and give decimal answers to three decimal places.}`,
    ideas: [
      r`The exam expects four calculator skills: \textbf{graph} in a window, \textbf{solve} an equation, find a \textbf{derivative at a point}, and evaluate a \textbf{definite integral}.`,
      r`Work in \textbf{radian mode}. Give final answers correct to \textbf{three decimal places}.`,
      r`\textbf{Store} intermediate values at full precision; round once, at the end.`,
      r`Write the set-up in standard notation (an equation, $f'(a)$, or an integral with limits) \emph{before} the decimal. Calculator syntax earns nothing.`,
    ],
    examples: [
      { t: "Solving an equation", q: r`Find the positive solution of $x^4-x-3=0$.`, s: r`Graph $y=x^4-x-3$; it crosses the positive $x$-axis once, between 1 and 2. Use the zero command.`, r: r`$x^4-x-3=0$ when $x\approx1.453$.` },
      { t: "A derivative at a point", q: r`Let $f(x)=x^2\ln x$. Find $f'(1.7)$.`, s: r`Use the numerical derivative command at $x=1.7$.`, r: r`$f'(1.7)\approx3.504$.` },
      { t: "A definite integral", q: r`Evaluate $\displaystyle\int_1^2\sqrt{x^3+1}\,dx$.`, s: r`Use the numerical integral command with limits 1 and 2.`, r: r`$\displaystyle\int_1^2\sqrt{x^3+1}\,dx\approx2.130$.` },
    ],
    core: [
      r`Find the smaller of the two solutions of $e^{x}=4x$.`,
      r`Find the value of $x$ at which the graphs of $y=x^3$ and $y=\cos x$ intersect.`,
      r`Let $f(x)=\arctan\!\left(x^2\right)$. Find $f'(1.3)$.`,
      r`Evaluate $\displaystyle\int_0^1e^{x^2}\,dx$.`,
    ],
    exam: [
      r`Find the larger of the two solutions of $e^{x}=4x$.`,
      r`The graphs of $y=4-x^2$ and $y=e^{x}$ intersect at $x=a$ and $x=b$, with $a<b$. Find $a$ and $b$, and find $\displaystyle\int_a^b\left(4-x^2-e^{x}\right)dx$.`,
      r`Let $f(x)=\sin\!\left(e^{x}\right)$. Find $f'(0.5)$.`,
      r`A student writes \textquotedblleft{}fnInt(X sin(X), X, 0, $\pi$) $=3.14$\textquotedblright{}. Rewrite this line so that it would earn full credit.`,
    ],
    fr: {
      intro: r`Let $f(x)=3\ln(x+1)$ and $g(x)=x^2$. The graphs of $f$ and $g$ intersect at $x=0$ and at $x=c$, where $c>0$.`,
      parts: [
        r`Find $c$. Write the equation you solved.`,
        r`Find the area of the region enclosed by the two graphs. Write the integral before the decimal.`,
        r`Find $f'(1)$ and $g'(1)$. Which graph is steeper at $x=1$?`,
      ],
    },
    sol: {
      core: [
        r`$e^{x}-4x=0$ when $x\approx0.357$.`,
        r`$x^3=\cos x$ when $x\approx0.865$.`,
        r`$f'(1.3)\approx0.674$.`,
        r`$\displaystyle\int_0^1e^{x^2}\,dx\approx1.463$.`,
      ],
      exam: [
        r`$x\approx2.153$.`,
        r`$a\approx-1.965$ and $b\approx1.058$ (stored at full precision). $\displaystyle\int_a^b\left(4-x^2-e^{x}\right)dx\approx6.428$.`,
        r`$f'(0.5)\approx-0.128$.`,
        r`$\displaystyle\int_0^{\pi}x\sin x\,dx\approx3.142$. Standard notation, and three decimal places.`,
      ],
      fr: [
        r`$3\ln(c+1)=c^2$ gives $c\approx1.738$.`,
        r`$\displaystyle\int_0^{c}\left[3\ln(x+1)-x^2\right]dx\approx1.309$.`,
        r`$f'(1)=1.5$ and $g'(1)=2$, so the graph of $g$ is steeper at $x=1$.`,
      ],
    },
  },
];

export default sheets;
