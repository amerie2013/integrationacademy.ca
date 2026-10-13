// MCV4U Unit 3 worksheets — Derivatives of Transcendental Functions.
const r = String.raw;
const U = "3: Derivatives of Transcendental Functions";

// Radian sine & cosine on a π-labelled axis (pgfplots trig is degrees → wrap in deg()).
const sincos = r`\begin{center}\begin{tikzpicture}\begin{axis}[width=9.2cm,height=4.6cm,axis lines=middle,xlabel={\small$x$},ylabel={\small$y$},xmin=-0.4,xmax=6.9,ymin=-1.6,ymax=1.6,samples=220,xtick={1.5708,3.1416,4.7124,6.2832},xticklabels={$\frac{\pi}{2}$,$\pi$,$\frac{3\pi}{2}$,$2\pi$}]\addplot[exblue,very thick,domain=0:6.4]{sin(deg(x))};\addplot[qorange,very thick,domain=0:6.4]{cos(deg(x))};\end{axis}\end{tikzpicture}\end{center}`;
const expPlot = r`\eplot{-2}{2}{-1}{8}{\addplot[exblue,very thick,domain=-2:2,samples=80]{exp(x)};}`;
const lnPlot = r`\eplot{0}{8}{-3}{3}{\addplot[exblue,very thick,domain=0.08:8,samples=140]{ln(x)};\addplot[qorange,very thick,domain=0.34:8,samples=140]{1/x};}`;

export default [
  {
    code: "3.1", unit: U, title: "Derivatives of Sinusoidal Functions",
    intro: r`In radians, $\dfrac{d}{dx}\sin x=\cos x$ and $\dfrac{d}{dx}\cos x=-\sin x$; combine with the chain, product and quotient rules.`,
    ideas: [r`$\dfrac{d}{dx}\sin x=\cos x$, $\dfrac{d}{dx}\cos x=-\sin x$.`, r`Chain: $\dfrac{d}{dx}\sin(g)=\cos(g)\,g'$.`, r`Angles must be in radians.`],
    examples: [
      { t: "Sine", body: r`Differentiate $f(x)=\sin x$.\soln
\textbf{Step 1 (recall the basic trig derivative):} $\dfrac{d}{dx}\sin x=\cos x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\cos x$ --- the slope of $\sin$ is the height of $\cos$:` + sincos },
      { t: "Cosine", body: r`Differentiate $f(x)=\cos x$.\soln
\textbf{Step 1 (recall the basic trig derivative):} $\dfrac{d}{dx}\cos x=-\sin x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=-\sin x$ (note the minus sign).` },
      { t: "Chain rule", body: r`Differentiate $f(x)=\sin(3x)$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $\sin(\,\cdot\,)$, inner is $g(x)=3x$ (so $g'(x)=3$).\\[3pt]
\textbf{Step 2 (differentiate the outer, leaving the inner alone):} $\cos(3x)$.\\[3pt]
\textbf{Step 3 (multiply by the inner derivative):} $\cos(3x)\cdot3$.\\[3pt]
\textbf{Conclusion:} $f'(x)=3\cos(3x)$.` },
      { t: "Product rule", body: r`Differentiate $f(x)=x\sin x$.\soln
\textbf{Step 1 (identify the two factors):} $u=x$ (so $u'=1$) and $v=\sin x$ (so $v'=\cos x$).\\[3pt]
\textbf{Step 2 (apply the product rule $u'v+uv'$):} $(1)\sin x+x\cos x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\sin x+x\cos x$.` },
      { t: "Power of sine", body: r`Differentiate $f(x)=\sin^2 x$.\soln
\textbf{Step 1 (rewrite as a power of a function):} $f(x)=(\sin x)^2$, with inner $g(x)=\sin x$ (so $g'(x)=\cos x$).\\[3pt]
\textbf{Step 2 (differentiate the outer power, multiply by the inner derivative):} $2(\sin x)^1\cdot\cos x$.\\[3pt]
\textbf{Step 3 (recognize the double-angle identity, optional):} $2\sin x\cos x=\sin 2x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=2\sin x\cos x$ (equivalently $\sin 2x$).` },
      { t: "Chain rule", body: r`Differentiate $f(x)=\cos(2x)$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $\cos(\,\cdot\,)$, inner is $g(x)=2x$ (so $g'(x)=2$).\\[3pt]
\textbf{Step 2 (differentiate the outer, using $\frac{d}{dx}\cos(u)=-\sin(u)$):} $-\sin(2x)$.\\[3pt]
\textbf{Step 3 (multiply by the inner derivative):} $-\sin(2x)\cdot2$.\\[3pt]
\textbf{Conclusion:} $f'(x)=-2\sin(2x)$.` },
      { t: "Chain rule", body: r`Differentiate $f(x)=\sin(5x)$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $\sin(\,\cdot\,)$, inner is $g(x)=5x$ (so $g'(x)=5$).\\[3pt]
\textbf{Step 2 (differentiate the outer, multiply by the inner derivative):} $\cos(5x)\cdot5$.\\[3pt]
\textbf{Conclusion:} $f'(x)=5\cos(5x)$.` },
      { t: "Product rule", body: r`Differentiate $f(x)=x^2\cos x$.\soln
\textbf{Step 1 (identify the two factors):} $u=x^2$ (so $u'=2x$) and $v=\cos x$ (so $v'=-\sin x$).\\[3pt]
\textbf{Step 2 (apply the product rule):} $2x\cos x+x^2(-\sin x)$.\\[3pt]
\textbf{Conclusion:} $f'(x)=2x\cos x-x^2\sin x$.` },
      { t: "Chain (square inside)", body: r`Differentiate $f(x)=\sin(x^2)$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $\sin(\,\cdot\,)$, inner is $g(x)=x^2$ (so $g'(x)=2x$).\\[3pt]
\textbf{Step 2 (differentiate the outer, multiply by the inner derivative):} $\cos(x^2)\cdot2x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=2x\cos(x^2)$.` },
    ],
    questions: [
      { ask: r`Differentiate $f(x)=\cos(2x)$.` },
      { ask: r`Differentiate $f(x)=\sin(5x)$.` },
      { ask: r`Differentiate $f(x)=x^2\cos x$.` },
      { ask: r`Differentiate $f(x)=\sin(x^2)$.` },
      { ask: r`Slope of $y=\sin x$ at $x=0$?` },
      { ask: r`Differentiate $f(x)=3\sin x$.` },
      { ask: r`Differentiate $f(x)=\cos(4x)$.` },
      { ask: r`Differentiate $f(x)=x\cos x$.` },
      { ask: r`Differentiate $f(x)=\cos^2 x$.` },
      { ask: r`Differentiate $f(x)=\sin(2x+1)$.` },
      { ask: r`Slope of $y=\cos x$ at $x=\tfrac{\pi}{2}$?` },
      { ask: r`Differentiate $f(x)=\sin x+\cos x$.` },
      { ask: r`Differentiate $f(x)=\dfrac{\sin x}{x}$ (quotient rule).`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$-2\sin(2x)$`, r`$5\cos(5x)$`, r`$2x\cos x-x^2\sin x$`, r`$2x\cos(x^2)$`, r`$1$`, r`$3\cos x$`, r`$-4\sin(4x)$`, r`$\cos x-x\sin x$`, r`$-2\cos x\sin x=-\sin 2x$`, r`$2\cos(2x+1)$`, r`$-1$`, r`$\cos x-\sin x$`, r`$\dfrac{x\cos x-\sin x}{x^2}$`],
  },
  {
    code: "3.2", unit: U, title: "Derivatives of Exponential Functions",
    intro: r`$\dfrac{d}{dx}e^x=e^x$ (its own derivative); $\dfrac{d}{dx}b^x=b^x\ln b$; with the chain rule $\dfrac{d}{dx}e^{g}=e^{g}g'$.`,
    ideas: [r`$\dfrac{d}{dx}e^x=e^x$.`, r`$\dfrac{d}{dx}b^x=b^x\ln b$.`, r`$\dfrac{d}{dx}e^{g(x)}=e^{g(x)}g'(x)$.`],
    examples: [
      { t: "Base e", body: r`Differentiate $f(x)=e^x$.\soln
\textbf{Step 1 (recall the special property of $e^x$):} $\dfrac{d}{dx}e^x=e^x$ --- it is its own derivative.\\[3pt]
\textbf{Conclusion:} $f'(x)=e^x$ --- the slope equals the height at every point:` + expPlot },
      { t: "Chain rule", body: r`Differentiate $f(x)=e^{3x}$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $e^{(\,\cdot\,)}$, inner is $g(x)=3x$ (so $g'(x)=3$).\\[3pt]
\textbf{Step 2 (differentiate the outer, using $\frac{d}{dx}e^{u}=e^{u}$):} $e^{3x}$.\\[3pt]
\textbf{Step 3 (multiply by the inner derivative):} $e^{3x}\cdot3$.\\[3pt]
\textbf{Conclusion:} $f'(x)=3e^{3x}$.` },
      { t: "Other base", body: r`Differentiate $f(x)=2^x$.\soln
\textbf{Step 1 (recall the rule for a general base):} $\dfrac{d}{dx}b^x=b^x\ln b$; here $b=2$.\\[3pt]
\textbf{Conclusion:} $f'(x)=2^x\ln 2$.` },
      { t: "Product rule", body: r`Differentiate $f(x)=x e^x$.\soln
\textbf{Step 1 (identify the two factors):} $u=x$ (so $u'=1$) and $v=e^x$ (so $v'=e^x$).\\[3pt]
\textbf{Step 2 (apply the product rule $u'v+uv'$):} $(1)e^x+x e^x$.\\[3pt]
\textbf{Step 3 (factor out $e^x$):} $e^x(1+x)$.\\[3pt]
\textbf{Conclusion:} $f'(x)=e^x(1+x)$.` },
      { t: "Chain (square inside)", body: r`Differentiate $f(x)=e^{x^2}$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $e^{(\,\cdot\,)}$, inner is $g(x)=x^2$ (so $g'(x)=2x$).\\[3pt]
\textbf{Step 2 (differentiate the outer, multiply by the inner derivative):} $e^{x^2}\cdot2x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=2x\,e^{x^2}$.` },
      { t: "Chain rule", body: r`Differentiate $f(x)=e^{5x}$.\soln
\textbf{Step 1 (identify outer and inner):} inner is $g(x)=5x$ (so $g'(x)=5$).\\[3pt]
\textbf{Step 2 (differentiate the outer, multiply by the inner derivative):} $e^{5x}\cdot5$.\\[3pt]
\textbf{Conclusion:} $f'(x)=5e^{5x}$.` },
      { t: "Other base", body: r`Differentiate $f(x)=3^x$.\soln
\textbf{Step 1 (apply the general-base rule $\frac{d}{dx}b^x=b^x\ln b$):} here $b=3$.\\[3pt]
\textbf{Conclusion:} $f'(x)=3^x\ln 3$.` },
      { t: "Negative exponent", body: r`Differentiate $f(x)=e^{-x}$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $e^{(\,\cdot\,)}$, inner is $g(x)=-x$ (so $g'(x)=-1$).\\[3pt]
\textbf{Step 2 (differentiate the outer, multiply by the inner derivative):} $e^{-x}\cdot(-1)$.\\[3pt]
\textbf{Conclusion:} $f'(x)=-e^{-x}$.` },
      { t: "Product rule", body: r`Differentiate $f(x)=x^2 e^x$.\soln
\textbf{Step 1 (identify the two factors):} $u=x^2$ (so $u'=2x$) and $v=e^x$ (so $v'=e^x$).\\[3pt]
\textbf{Step 2 (apply the product rule):} $2x\,e^x+x^2e^x$.\\[3pt]
\textbf{Step 3 (factor out $e^x$):} $e^x(x^2+2x)$.\\[3pt]
\textbf{Conclusion:} $f'(x)=e^x(x^2+2x)$.` },
    ],
    questions: [
      { ask: r`Differentiate $f(x)=e^{5x}$.` },
      { ask: r`Differentiate $f(x)=3^x$.` },
      { ask: r`Differentiate $f(x)=x^2 e^x$.` },
      { ask: r`Differentiate $f(x)=e^{-x}$.` },
      { ask: r`Differentiate $f(x)=e^{x^3+1}$.` },
      { ask: r`Differentiate $f(x)=4e^x$.` },
      { ask: r`Differentiate $f(x)=e^{2x}$.` },
      { ask: r`Differentiate $f(x)=5^x$.` },
      { ask: r`Differentiate $f(x)=x e^{2x}$ (product + chain).` },
      { ask: r`Differentiate $f(x)=e^{-3x}$.` },
      { ask: r`Slope of $y=e^x$ at $x=0$?` },
      { ask: r`Differentiate $f(x)=e^x+x^2$.` },
      { ask: r`Differentiate $f(x)=\dfrac{e^x}{x}$ (quotient rule).`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$5e^{5x}$`, r`$3^x\ln 3$`, r`$e^x(x^2+2x)$`, r`$-e^{-x}$`, r`$3x^2 e^{x^3+1}$`, r`$4e^x$`, r`$2e^{2x}$`, r`$5^x\ln 5$`, r`$e^{2x}(1+2x)$`, r`$-3e^{-3x}$`, r`$1$`, r`$e^x+2x$`, r`$\dfrac{e^x(x-1)}{x^2}$`],
  },
  {
    code: "3.3", unit: U, title: "Derivatives of Logarithmic Functions",
    intro: r`$\dfrac{d}{dx}\ln x=\dfrac1x$; $\dfrac{d}{dx}\ln(g)=\dfrac{g'}{g}$; $\dfrac{d}{dx}\log_b x=\dfrac1{x\ln b}$; logarithmic differentiation for $x^x$ etc.`,
    ideas: [r`$\dfrac{d}{dx}\ln x=\dfrac1x$.`, r`$\dfrac{d}{dx}\ln(g(x))=\dfrac{g'(x)}{g(x)}$.`, r`Logarithmic differentiation: take $\ln$, differentiate implicitly, solve.`],
    examples: [
      { t: "Natural log", body: r`Differentiate $f(x)=\ln x$.\soln
\textbf{Step 1 (recall the basic log derivative):} $\dfrac{d}{dx}\ln x=\dfrac1x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac1x$ --- the derivative of $\ln x$ is the curve $\tfrac1x$:` + lnPlot },
      { t: "Chain rule", body: r`Differentiate $f(x)=\ln(x^2+1)$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $\ln(\,\cdot\,)$, inner is $g(x)=x^2+1$ (so $g'(x)=2x$).\\[3pt]
\textbf{Step 2 (apply $\frac{d}{dx}\ln(g)=\frac{g'}{g}$):} $\dfrac{2x}{x^2+1}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac{2x}{x^2+1}$.` },
      { t: "Product rule", body: r`Differentiate $f(x)=x\ln x$.\soln
\textbf{Step 1 (identify the two factors):} $u=x$ (so $u'=1$) and $v=\ln x$ (so $v'=\tfrac1x$).\\[3pt]
\textbf{Step 2 (apply the product rule $u'v+uv'$):} $(1)\ln x+x\cdot\dfrac1x$.\\[3pt]
\textbf{Step 3 (simplify $x\cdot\frac1x=1$):} $\ln x+1$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\ln x+1$.` },
      { t: "Other base", body: r`Differentiate $f(x)=\log_2 x$.\soln
\textbf{Step 1 (recall the rule for a general base):} $\dfrac{d}{dx}\log_b x=\dfrac1{x\ln b}$; here $b=2$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac1{x\ln 2}$.` },
      { t: "Logarithmic differentiation", body: r`Differentiate $y=x^x$.\soln
\textbf{Step 1 (take $\ln$ of both sides, since the variable is in the exponent):} $\ln y=\ln(x^x)=x\ln x$.\\[3pt]
\textbf{Step 2 (differentiate both sides implicitly; the right side needs the product rule):} $\dfrac{y'}{y}=(1)\ln x+x\cdot\dfrac1x=\ln x+1$.\\[3pt]
\textbf{Step 3 (isolate $y'$ by multiplying both sides by $y$):} $y'=y(\ln x+1)$.\\[3pt]
\textbf{Step 4 (substitute back $y=x^x$):} $y'=x^x(\ln x+1)$.\\[3pt]
\textbf{Conclusion:} $y'=x^x(\ln x+1)$.` },
      { t: "Chain rule", body: r`Differentiate $f(x)=\ln(3x)$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $\ln(\,\cdot\,)$, inner is $g(x)=3x$ (so $g'(x)=3$).\\[3pt]
\textbf{Step 2 (apply $\frac{g'}{g}$):} $\dfrac{3}{3x}$.\\[3pt]
\textbf{Step 3 (simplify):} $\dfrac{3}{3x}=\dfrac1x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac1x$.` },
      { t: "Chain / log law", body: r`Differentiate $f(x)=\ln(x^3)$.\soln
\textbf{Step 1 (identify outer and inner):} inner is $g(x)=x^3$ (so $g'(x)=3x^2$).\\[3pt]
\textbf{Step 2 (apply $\frac{g'}{g}$):} $\dfrac{3x^2}{x^3}$.\\[3pt]
\textbf{Step 3 (simplify):} $\dfrac{3x^2}{x^3}=\dfrac3x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac3x$ (matches the shortcut: $\ln(x^3)=3\ln x\Rightarrow\tfrac3x$).` },
      { t: "Product rule", body: r`Differentiate $f(x)=x^2\ln x$.\soln
\textbf{Step 1 (identify the two factors):} $u=x^2$ (so $u'=2x$) and $v=\ln x$ (so $v'=\tfrac1x$).\\[3pt]
\textbf{Step 2 (apply the product rule):} $2x\ln x+x^2\cdot\dfrac1x$.\\[3pt]
\textbf{Step 3 (simplify $x^2\cdot\frac1x=x$):} $2x\ln x+x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=2x\ln x+x$.` },
      { t: "Chain rule", body: r`Differentiate $f(x)=\ln(\cos x)$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $\ln(\,\cdot\,)$, inner is $g(x)=\cos x$ (so $g'(x)=-\sin x$).\\[3pt]
\textbf{Step 2 (apply $\frac{g'}{g}$):} $\dfrac{-\sin x}{\cos x}$.\\[3pt]
\textbf{Step 3 (recognize the ratio as $\tan x$):} $\dfrac{\sin x}{\cos x}=\tan x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=-\tan x$.` },
    ],
    questions: [
      { ask: r`Differentiate $f(x)=\ln(3x)$.` },
      { ask: r`Differentiate $f(x)=\ln(x^3)$.` },
      { ask: r`Differentiate $f(x)=x^2\ln x$.` },
      { ask: r`Differentiate $f(x)=\ln(\cos x)$.` },
      { ask: r`Slope of $y=\ln x$ at $x=2$?` },
      { ask: r`Differentiate $f(x)=\ln(x^2+4)$.` },
      { ask: r`Differentiate $f(x)=\log_3 x$.` },
      { ask: r`Differentiate $f(x)=\ln(5x-1)$.` },
      { ask: r`Differentiate $f(x)=\dfrac{\ln x}{x}$ (quotient rule).` },
      { ask: r`Differentiate $f(x)=x^3\ln x$.` },
      { ask: r`Differentiate $f(x)=\ln(e^x)$ (simplify first).` },
      { ask: r`Slope of $y=\ln x$ at $x=1$?` },
      { ask: r`Differentiate $y=x^{\,2x}$ by logarithmic differentiation.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$\dfrac1x$`, r`$\dfrac3x$`, r`$2x\ln x+x$`, r`$-\tan x$`, r`$\dfrac12$`, r`$\dfrac{2x}{x^2+4}$`, r`$\dfrac1{x\ln 3}$`, r`$\dfrac5{5x-1}$`, r`$\dfrac{1-\ln x}{x^2}$`, r`$3x^2\ln x+x^2$`, r`$1$ (since $\ln(e^x)=x$)`, r`$1$`, r`$x^{2x}(2\ln x+2)$`],
  },
];
