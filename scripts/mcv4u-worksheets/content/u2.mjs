// MCV4U Unit 2 worksheets — Derivative Rules. Full \soln + f/f' figures.
const r = String.raw;
const U = "2: Derivative Rules";

export default [
  {
    code: "2.1", unit: U, title: "Power, Constant & Sum Rules",
    intro: r`$\dfrac{d}{dx}x^n=nx^{n-1}$, with the constant-multiple and sum/difference rules, differentiates any polynomial. Rewrite radicals and reciprocals as powers first.`,
    ideas: [r`Power: $\dfrac{d}{dx}x^n=nx^{n-1}$; constant: $\dfrac{d}{dx}c=0$.`, r`Constant multiple and sum/difference rules.`, r`Rewrite $\sqrt{x}=x^{1/2}$, $\dfrac1{x^k}=x^{-k}$.`],
    examples: [
      { t: "Power rule", body: r`Differentiate $f(x)=x^5$.\soln
\textbf{Step 1 (identify $n$):} the power rule says $\dfrac{d}{dx}x^n=nx^{n-1}$; here $n=5$.\\[3pt]
\textbf{Step 2 (apply it):} bring the $5$ down and subtract $1$ from the exponent: $5x^{5-1}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=5x^4$.` },
      { t: "Whole polynomial", body: r`Differentiate $f(x)=3x^4-2x^2+7$.\soln
\textbf{Step 1 (differentiate term by term):} $\dfrac{d}{dx}3x^4=12x^3$, $\dfrac{d}{dx}(-2x^2)=-4x$, $\dfrac{d}{dx}7=0$ (constants vanish).\\[3pt]
\textbf{Step 2 (combine):} $12x^3-4x+0$.\\[3pt]
\textbf{Conclusion:} $f'(x)=12x^3-4x$. $f$ and $f'$ for $x^3-3x$ illustrate the idea --- $f'$ is zero at the turning points:` + r`\eplot{-3}{3}{-6}{6}{\addplot[exblue,very thick,domain=-2.2:2.2]{x^3-3*x};\addplot[qorange,very thick,domain=-1.7:1.7]{3*x^2-3};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-1,0) (1,0)};}` },
      { t: "Negative & fractional", body: r`Differentiate $f(x)=\sqrt{x}+\dfrac1{x^2}$.\soln
\textbf{Step 1 (rewrite as powers):} $\sqrt{x}=x^{1/2}$ and $\dfrac1{x^2}=x^{-2}$.\\[3pt]
\textbf{Step 2 (apply the power rule to each term):} $\dfrac{d}{dx}x^{1/2}=\tfrac12x^{-1/2}$ and $\dfrac{d}{dx}x^{-2}=-2x^{-3}$.\\[3pt]
\textbf{Step 3 (rewrite back in radical/fraction form):} $\tfrac12x^{-1/2}=\dfrac1{2\sqrt{x}}$ and $-2x^{-3}=-\dfrac2{x^3}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac1{2\sqrt{x}}-\dfrac2{x^3}$.` },
      { t: "Slope at a point", body: r`Slope of the tangent to $f(x)=x^3-3x$ at $x=2$.\soln
\textbf{Step 1 (differentiate):} $f'(x)=3x^2-3$.\\[3pt]
\textbf{Step 2 (substitute $x=2$):} $f'(2)=3(2)^2-3=3(4)-3$.\\[3pt]
\textbf{Conclusion:} $=9$.` },
      { t: "Horizontal tangent", body: r`Where does $f(x)=x^3-3x$ have a horizontal tangent?\soln
\textbf{Step 1 (differentiate):} $f'(x)=3x^2-3$.\\[3pt]
\textbf{Step 2 (set the slope to $0$, since a horizontal tangent has slope $0$):} $3x^2-3=0$.\\[3pt]
\textbf{Step 3 (solve):} $3x^2=3\Rightarrow x^2=1\Rightarrow x=\pm1$.\\[3pt]
\textbf{Conclusion:} horizontal tangents at $x=1$ and $x=-1$.` },
      { t: "Power rule", body: r`Differentiate $f(x)=x^7$.\soln
\textbf{Step 1 (identify $n$):} $n=7$.\\[3pt]
\textbf{Step 2 (apply the power rule):} $7x^{7-1}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=7x^6$.` },
      { t: "Polynomial", body: r`Differentiate $f(x)=4x^3-6x^2+x-9$.\soln
\textbf{Step 1 (differentiate term by term):} $\dfrac{d}{dx}4x^3=12x^2$, $\dfrac{d}{dx}(-6x^2)=-12x$, $\dfrac{d}{dx}x=1$, $\dfrac{d}{dx}(-9)=0$.\\[3pt]
\textbf{Step 2 (combine):} $12x^2-12x+1+0$.\\[3pt]
\textbf{Conclusion:} $f'(x)=12x^2-12x+1$.` },
      { t: "Reciprocal power", body: r`Differentiate $f(x)=\dfrac1{x^3}$.\soln
\textbf{Step 1 (rewrite as a power):} $\dfrac1{x^3}=x^{-3}$.\\[3pt]
\textbf{Step 2 (apply the power rule):} $-3x^{-3-1}=-3x^{-4}$.\\[3pt]
\textbf{Step 3 (rewrite back as a fraction):} $-3x^{-4}=-\dfrac3{x^4}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=-\dfrac3{x^4}$.` },
      { t: "Evaluate a derivative", body: r`Find $f'(1)$ for $f(x)=x^4-2x$.\soln
\textbf{Step 1 (differentiate):} $f'(x)=4x^3-2$.\\[3pt]
\textbf{Step 2 (substitute $x=1$):} $f'(1)=4(1)^3-2=4-2$.\\[3pt]
\textbf{Conclusion:} $=2$.` },
    ],
    questions: [
      { ask: r`Differentiate $f(x)=x^9$.` },
      { ask: r`Differentiate $f(x)=2x^5-3x^3+4$.` },
      { ask: r`Differentiate $f(x)=\dfrac1{x^2}$.` },
      { ask: r`Differentiate $f(x)=\sqrt{x}$.` },
      { ask: r`Find $f'(2)$ for $f(x)=x^3-x$.` },
      { ask: r`Where does $f(x)=x^2-6x$ have a horizontal tangent?` },
      { ask: r`Differentiate $f(x)=5x^4-x$.` },
      { ask: r`Differentiate $f(x)=x^{1/3}$.` },
      { ask: r`Find $f'(0)$ for $f(x)=x^3+2x+1$.` },
      { ask: r`Differentiate $f(x)=\dfrac3{x}$.` },
      { ask: r`Where is the tangent to $f(x)=x^3-12x$ horizontal?` },
      { ask: r`Differentiate $f(x)=6\sqrt{x}$.` },
      { ask: r`Find the equation of the tangent to $f(x)=x^2-2x$ at $x=3$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$9x^8$`, r`$10x^4-9x^2$`, r`$-\tfrac2{x^3}$`, r`$\tfrac1{2\sqrt{x}}$`, r`$3(4)-1=11$`, r`$x=3$`, r`$20x^3-1$`, r`$\tfrac13x^{-2/3}$`, r`$2$`, r`$-\tfrac3{x^2}$`, r`$x=\pm2$`, r`$\tfrac3{\sqrt{x}}$`, r`$f'(3)=4$, point $(3,3)$: $y=4x-9$`],
  },
  {
    code: "2.2", unit: U, title: "Product & Quotient Rules",
    intro: r`Product: $(fg)'=f'g+fg'$. Quotient: $\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}$ — top derivative first.`,
    ideas: [r`$(fg)'=f'g+fg'$ (not $f'g'$).`, r`$\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}$.`, r`If expanding is easy, expand and use the power rule.`],
    examples: [
      { t: "Product rule", body: r`Differentiate $f(x)=x^2(x+1)$.\soln
\textbf{Step 1 (identify the two factors):} $u=x^2$ (so $u'=2x$) and $v=x+1$ (so $v'=1$).\\[3pt]
\textbf{Step 2 (apply the product rule $u'v+uv'$):} $2x(x+1)+x^2(1)$.\\[3pt]
\textbf{Step 3 (expand and simplify):} $2x^2+2x+x^2=3x^2+2x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=3x^2+2x$ (check by expanding first: $x^2(x+1)=x^3+x^2\to3x^2+2x$, matching). ✓` },
      { t: "Two factors", body: r`Differentiate $f(x)=(2x+1)(x^2-3)$.\soln
\textbf{Step 1 (identify the two factors):} $u=2x+1$ (so $u'=2$) and $v=x^2-3$ (so $v'=2x$).\\[3pt]
\textbf{Step 2 (apply the product rule):} $2(x^2-3)+(2x+1)(2x)$.\\[3pt]
\textbf{Step 3 (expand):} $2x^2-6+4x^2+2x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=6x^2+2x-6$.` },
      { t: "Quotient rule", body: r`Differentiate $f(x)=\dfrac{x+1}{x-1}$.\soln
\textbf{Step 1 (identify top and bottom):} $u=x+1$ (so $u'=1$) and $v=x-1$ (so $v'=1$).\\[3pt]
\textbf{Step 2 (apply the quotient rule $\frac{u'v-uv'}{v^2}$):} $\dfrac{(1)(x-1)-(x+1)(1)}{(x-1)^2}$.\\[3pt]
\textbf{Step 3 (simplify the numerator):} $(x-1)-(x+1)=-2$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac{-2}{(x-1)^2}$.` },
      { t: "Polynomial over linear", body: r`Differentiate $f(x)=\dfrac{x^2}{x+1}$.\soln
\textbf{Step 1 (identify top and bottom):} $u=x^2$ (so $u'=2x$) and $v=x+1$ (so $v'=1$).\\[3pt]
\textbf{Step 2 (apply the quotient rule):} $\dfrac{2x(x+1)-x^2(1)}{(x+1)^2}$.\\[3pt]
\textbf{Step 3 (simplify the numerator):} $2x^2+2x-x^2=x^2+2x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac{x^2+2x}{(x+1)^2}$.` },
      { t: "From a table", body: r`Given $f(2)=3,f'(2)=1,g(2)=4,g'(2)=-2$, find $(fg)'(2)$.\soln
\textbf{Step 1 (recall the product rule):} $(fg)'=f'g+fg'$.\\[3pt]
\textbf{Step 2 (substitute the given values at $x=2$):} $(1)(4)+(3)(-2)$.\\[3pt]
\textbf{Conclusion:} $=4-6=-2$.` },
      { t: "Product rule", body: r`Differentiate $f(x)=x^3(x-2)$.\soln
\textbf{Step 1 (identify the two factors):} $u=x^3$ (so $u'=3x^2$) and $v=x-2$ (so $v'=1$).\\[3pt]
\textbf{Step 2 (apply the product rule):} $3x^2(x-2)+x^3(1)$.\\[3pt]
\textbf{Step 3 (expand and combine):} $3x^3-6x^2+x^3$.\\[3pt]
\textbf{Conclusion:} $f'(x)=4x^3-6x^2$.` },
      { t: "Two factors", body: r`Differentiate $f(x)=(x+2)(x^2+1)$.\soln
\textbf{Step 1 (identify the two factors):} $u=x+2$ (so $u'=1$) and $v=x^2+1$ (so $v'=2x$).\\[3pt]
\textbf{Step 2 (apply the product rule):} $(1)(x^2+1)+(x+2)(2x)$.\\[3pt]
\textbf{Step 3 (expand and combine):} $x^2+1+2x^2+4x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=3x^2+4x+1$.` },
      { t: "Quotient rule", body: r`Differentiate $f(x)=\dfrac{x}{x+2}$.\soln
\textbf{Step 1 (identify top and bottom):} $u=x$ (so $u'=1$) and $v=x+2$ (so $v'=1$).\\[3pt]
\textbf{Step 2 (apply the quotient rule):} $\dfrac{(1)(x+2)-x(1)}{(x+2)^2}$.\\[3pt]
\textbf{Step 3 (simplify the numerator):} $(x+2)-x=2$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac{2}{(x+2)^2}$.` },
      { t: "Quotient rule", body: r`Differentiate $f(x)=\dfrac{x-1}{x+1}$.\soln
\textbf{Step 1 (identify top and bottom):} $u=x-1$ (so $u'=1$) and $v=x+1$ (so $v'=1$).\\[3pt]
\textbf{Step 2 (apply the quotient rule):} $\dfrac{(1)(x+1)-(x-1)(1)}{(x+1)^2}$.\\[3pt]
\textbf{Step 3 (simplify the numerator):} $(x+1)-(x-1)=2$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac{2}{(x+1)^2}$.` },
    ],
    questions: [
      { ask: r`Differentiate $f(x)=x^2(x-3)$.` },
      { ask: r`Differentiate $f(x)=(3x-1)(x+2)$.` },
      { ask: r`Differentiate $f(x)=\dfrac{x+2}{x-2}$.` },
      { ask: r`Differentiate $f(x)=\dfrac{x^2}{x-1}$.` },
      { ask: r`With $f(1)=2,f'(1)=3,g(1)=5,g'(1)=-1$, find $(fg)'(1)$.` },
      { ask: r`Differentiate $f(x)=x^4(2x+1)$.` },
      { ask: r`Differentiate $f(x)=(x^2+1)(x-4)$.` },
      { ask: r`Differentiate $f(x)=\dfrac{2x}{x+3}$.` },
      { ask: r`Differentiate $f(x)=\dfrac{1}{x^2+1}$ (quotient rule).` },
      { ask: r`Differentiate $f(x)=x(x^2-5)$.` },
      { ask: r`With $f(0)=1,f'(0)=2,g(0)=3,g'(0)=4$, find $\left(\tfrac fg\right)'(0)$.` },
      { ask: r`Differentiate $f(x)=(x-1)(x+1)$ two ways (rule and expansion).` },
      { ask: r`Find the tangent to $f(x)=\dfrac{x}{x+1}$ at $x=1$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$3x^2-6x$`, r`$6x+5$`, r`$\dfrac{-4}{(x-2)^2}$`, r`$\dfrac{x^2-2x}{(x-1)^2}$`, r`$(3)(5)+(2)(-1)=13$`, r`$10x^4+4x^3$`, r`$3x^2-8x+1$`, r`$\dfrac{6}{(x+3)^2}$`, r`$\dfrac{-2x}{(x^2+1)^2}$`, r`$3x^2-5$`, r`$\dfrac{(2)(3)-(1)(4)}{9}=\tfrac29$`, r`both give $2x$`, r`$f'(1)=\tfrac14$, point $(1,\tfrac12)$: $y=\tfrac14x+\tfrac14$`],
  },
  {
    code: "2.3", unit: U, title: "The Chain Rule",
    intro: r`$\dfrac{d}{dx}f(g(x))=f'(g(x))\cdot g'(x)$ — derivative of the outside (inside untouched) times the derivative of the inside.`,
    ideas: [r`Chain rule: $f'(g(x))\cdot g'(x)$.`, r`Power of a function: $\dfrac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x)$.`, r`Don't forget the inner derivative $g'(x)$.`],
    examples: [
      { t: "Power of a function", body: r`Differentiate $f(x)=(x^2+1)^3$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $(\,\cdot\,)^3$, inner is $g(x)=x^2+1$ (so $g'(x)=2x$).\\[3pt]
\textbf{Step 2 (differentiate the outer, leaving the inner alone):} $3(x^2+1)^2$.\\[3pt]
\textbf{Step 3 (multiply by the inner derivative):} $3(x^2+1)^2\cdot2x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=6x(x^2+1)^2$.` },
      { t: "Radical", body: r`Differentiate $f(x)=\sqrt{x^2+1}$.\soln
\textbf{Step 1 (rewrite as a power):} $f(x)=(x^2+1)^{1/2}$, with inner $g(x)=x^2+1$ (so $g'(x)=2x$).\\[3pt]
\textbf{Step 2 (differentiate the outer power):} $\tfrac12(x^2+1)^{-1/2}$.\\[3pt]
\textbf{Step 3 (multiply by the inner derivative):} $\tfrac12(x^2+1)^{-1/2}\cdot2x$.\\[3pt]
\textbf{Step 4 (simplify):} the $2$'s cancel, and $(x^2+1)^{-1/2}=\dfrac1{\sqrt{x^2+1}}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac{x}{\sqrt{x^2+1}}$.` },
      { t: "Linear inside", body: r`Differentiate $f(x)=(3x-2)^5$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $(\,\cdot\,)^5$, inner is $g(x)=3x-2$ (so $g'(x)=3$).\\[3pt]
\textbf{Step 2 (differentiate the outer):} $5(3x-2)^4$.\\[3pt]
\textbf{Step 3 (multiply by the inner derivative):} $5(3x-2)^4\cdot3$.\\[3pt]
\textbf{Conclusion:} $f'(x)=15(3x-2)^4$.` },
      { t: "Cubic inside", body: r`Differentiate $f(x)=(x^3+x)^4$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $(\,\cdot\,)^4$, inner is $g(x)=x^3+x$ (so $g'(x)=3x^2+1$).\\[3pt]
\textbf{Step 2 (differentiate the outer):} $4(x^3+x)^3$.\\[3pt]
\textbf{Step 3 (multiply by the inner derivative):} $4(x^3+x)^3(3x^2+1)$.\\[3pt]
\textbf{Conclusion:} $f'(x)=4(x^3+x)^3(3x^2+1)$.` },
      { t: "Chain inside a product", body: r`Differentiate $f(x)=x(2x+1)^3$.\soln
\textbf{Step 1 (identify the two factors for the product rule):} $u=x$ (so $u'=1$) and $v=(2x+1)^3$.\\[3pt]
\textbf{Step 2 (differentiate $v$ with the chain rule):} outer $3(\,\cdot\,)^2$, inner derivative $2$, so $v'=3(2x+1)^2\cdot2=6(2x+1)^2$.\\[3pt]
\textbf{Step 3 (apply the product rule $u'v+uv'$):} $(1)(2x+1)^3+x\cdot6(2x+1)^2$.\\[3pt]
\textbf{Step 4 (factor out the common $(2x+1)^2$):} $(2x+1)^2\left[(2x+1)+6x\right]=(2x+1)^2(8x+1)$.\\[3pt]
\textbf{Conclusion:} $f'(x)=(2x+1)^2(8x+1)$.` },
      { t: "Power of a function", body: r`Differentiate $f(x)=(x^2-4)^3$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $(\,\cdot\,)^3$, inner is $g(x)=x^2-4$ (so $g'(x)=2x$).\\[3pt]
\textbf{Step 2 (differentiate the outer, multiply by the inner derivative):} $3(x^2-4)^2\cdot2x$.\\[3pt]
\textbf{Conclusion:} $f'(x)=6x(x^2-4)^2$.` },
      { t: "Linear inside", body: r`Differentiate $f(x)=(5x+1)^4$.\soln
\textbf{Step 1 (identify outer and inner):} outer is $(\,\cdot\,)^4$, inner is $g(x)=5x+1$ (so $g'(x)=5$).\\[3pt]
\textbf{Step 2 (differentiate the outer, multiply by the inner derivative):} $4(5x+1)^3\cdot5$.\\[3pt]
\textbf{Conclusion:} $f'(x)=20(5x+1)^3$.` },
      { t: "Radical", body: r`Differentiate $f(x)=\sqrt{2x+1}$.\soln
\textbf{Step 1 (rewrite as a power):} $f(x)=(2x+1)^{1/2}$, with inner derivative $2$.\\[3pt]
\textbf{Step 2 (differentiate the outer, multiply by the inner derivative):} $\tfrac12(2x+1)^{-1/2}\cdot2$.\\[3pt]
\textbf{Step 3 (simplify, the $2$'s cancel):} $(2x+1)^{-1/2}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac1{\sqrt{2x+1}}$.` },
      { t: "Reciprocal power", body: r`Differentiate $f(x)=\dfrac1{(x+1)^2}$.\soln
\textbf{Step 1 (rewrite as a power):} $f(x)=(x+1)^{-2}$, with inner derivative $1$.\\[3pt]
\textbf{Step 2 (differentiate the outer, multiply by the inner derivative):} $-2(x+1)^{-3}\cdot1$.\\[3pt]
\textbf{Step 3 (rewrite back as a fraction):} $-2(x+1)^{-3}=\dfrac{-2}{(x+1)^3}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac{-2}{(x+1)^3}$.` },
    ],
    questions: [
      { ask: r`Differentiate $f(x)=(x^2+3)^4$.` },
      { ask: r`Differentiate $f(x)=(4x-1)^3$.` },
      { ask: r`Differentiate $f(x)=\sqrt{x^2+9}$.` },
      { ask: r`Differentiate $f(x)=(x^3-x)^5$.` },
      { ask: r`Differentiate $f(x)=\dfrac1{(2x+1)^2}$.` },
      { ask: r`Differentiate $f(x)=(1-x^2)^4$.` },
      { ask: r`Differentiate $f(x)=\sqrt{3x-2}$.` },
      { ask: r`Differentiate $f(x)=(x^2+x+1)^3$.` },
      { ask: r`Differentiate $f(x)=x^2(x+1)^3$.` },
      { ask: r`Differentiate $f(x)=(2x+5)^6$.` },
      { ask: r`Differentiate $f(x)=\dfrac{1}{\sqrt{x+4}}$.` },
      { ask: r`Differentiate $f(x)=(x^2-1)^{1/2}$.` },
      { ask: r`Differentiate $f(x)=\dfrac{(x+1)^2}{x}$ (chain + quotient).`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$8x(x^2+3)^3$`, r`$12(4x-1)^2$`, r`$\dfrac{x}{\sqrt{x^2+9}}$`, r`$5(x^3-x)^4(3x^2-1)$`, r`$\dfrac{-4}{(2x+1)^3}$`, r`$-8x(1-x^2)^3$`, r`$\dfrac3{2\sqrt{3x-2}}$`, r`$3(x^2+x+1)^2(2x+1)$`, r`$2x(x+1)^3+3x^2(x+1)^2$`, r`$12(2x+5)^5$`, r`$-\tfrac12(x+4)^{-3/2}$`, r`$\dfrac{x}{\sqrt{x^2-1}}$`, r`$\dfrac{2x(x+1)\cdot x-(x+1)^2}{x^2}=\dfrac{(x+1)(x-1)}{x^2}$`],
  },
  {
    code: "2.4", unit: U, title: "Rational, Radical & Higher-Order Derivatives",
    intro: r`Rewrite as powers; differentiate again for $f''$; use implicit differentiation when $y$ is tangled with $x$.`,
    ideas: [r`Rewrite: $\dfrac1{x^k}=x^{-k}$, $\sqrt[n]{x^m}=x^{m/n}$.`, r`Second derivative $f''=(f')'$.`, r`Implicit: differentiate both sides, attach $\tfrac{dy}{dx}$ to every $y$.`],
    examples: [
      { t: "Rational via powers", body: r`Differentiate $f(x)=\dfrac1{x^2}$.\soln
\textbf{Step 1 (rewrite as a power):} $\dfrac1{x^2}=x^{-2}$.\\[3pt]
\textbf{Step 2 (apply the power rule):} $-2x^{-3}$.\\[3pt]
\textbf{Step 3 (rewrite back as a fraction):} $-2x^{-3}=-\dfrac2{x^3}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=-\dfrac2{x^3}$.` },
      { t: "Radical via powers", body: r`Differentiate $f(x)=\sqrt[3]{x^2}$.\soln
\textbf{Step 1 (rewrite as a power):} $\sqrt[3]{x^2}=x^{2/3}$.\\[3pt]
\textbf{Step 2 (apply the power rule):} $\tfrac23x^{2/3-1}=\tfrac23x^{-1/3}$.\\[3pt]
\textbf{Step 3 (rewrite back as a radical):} $x^{-1/3}=\dfrac1{\sqrt[3]{x}}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\dfrac2{3\sqrt[3]{x}}$.` },
      { t: "Second derivative", body: r`Find $f''(x)$ for $f(x)=x^4$.\soln
\textbf{Step 1 (find $f'$ with the power rule):} $f'(x)=4x^3$.\\[3pt]
\textbf{Step 2 (differentiate $f'$ again to get $f''$):} $f''(x)=\dfrac{d}{dx}(4x^3)=12x^2$.\\[3pt]
\textbf{Conclusion:} $f''(x)=12x^2$. For $x^3$: $f,f',f''$ are $x^3,3x^2,6x$ --- each the slope function of the previous:` + r`\eplot{-2.5}{2.5}{-8}{8}{\addplot[exblue,very thick,domain=-2:2]{x^3};\addplot[qorange,very thick,domain=-1.6:1.6]{3*x^2};\addplot[red,very thick,domain=-1.3:1.3]{6*x};}` },
      { t: "Second derivative", body: r`Find $f''(x)$ for $f(x)=x^3-3x$ and $f''(1)$.\soln
\textbf{Step 1 (find $f'$):} $f'(x)=3x^2-3$.\\[3pt]
\textbf{Step 2 (differentiate again to get $f''$):} $f''(x)=6x$.\\[3pt]
\textbf{Step 3 (substitute $x=1$):} $f''(1)=6(1)$.\\[3pt]
\textbf{Conclusion:} $f''(x)=6x$, and $f''(1)=6$.` },
      { t: "Implicit differentiation", body: r`Find $\dfrac{dy}{dx}$ for $x^2+y^2=25$.\soln
\textbf{Step 1 (differentiate both sides with respect to $x$):} $\dfrac{d}{dx}(x^2)+\dfrac{d}{dx}(y^2)=\dfrac{d}{dx}(25)$.\\[3pt]
\textbf{Step 2 (use the chain rule on $y^2$, since $y$ is a function of $x$):} $2x+2y\dfrac{dy}{dx}=0$.\\[3pt]
\textbf{Step 3 (isolate $\frac{dy}{dx}$):} $2y\dfrac{dy}{dx}=-2x$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dy}{dx}=-\dfrac xy$.` },
      { t: "Rational via powers", body: r`Differentiate $f(x)=\dfrac1{x^4}$.\soln
\textbf{Step 1 (rewrite as a power):} $\dfrac1{x^4}=x^{-4}$.\\[3pt]
\textbf{Step 2 (apply the power rule):} $-4x^{-5}$.\\[3pt]
\textbf{Step 3 (rewrite back as a fraction):} $-4x^{-5}=-\dfrac4{x^5}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=-\dfrac4{x^5}$.` },
      { t: "Radical via powers", body: r`Differentiate $f(x)=x^{3/2}$.\soln
\textbf{Step 1 (identify $n$):} $n=\tfrac32$ --- already a power, no rewriting needed.\\[3pt]
\textbf{Step 2 (apply the power rule):} $\tfrac32x^{3/2-1}=\tfrac32x^{1/2}$.\\[3pt]
\textbf{Conclusion:} $f'(x)=\tfrac32x^{1/2}$.` },
      { t: "Second derivative", body: r`Find $f''(x)$ for $f(x)=2x^3-x^2$.\soln
\textbf{Step 1 (find $f'$):} $f'(x)=6x^2-2x$.\\[3pt]
\textbf{Step 2 (differentiate again to get $f''$):} $f''(x)=12x-2$.\\[3pt]
\textbf{Conclusion:} $f''(x)=12x-2$.` },
      { t: "Implicit differentiation", body: r`Find $\dfrac{dy}{dx}$ for $xy=4$.\soln
\textbf{Step 1 (differentiate both sides; the left side needs the product rule, since it's $x$ times $y(x)$):} $\dfrac{d}{dx}(xy)=(1)y+x\dfrac{dy}{dx}$.\\[3pt]
\textbf{Step 2 (right side):} $\dfrac{d}{dx}(4)=0$, so $y+x\dfrac{dy}{dx}=0$.\\[3pt]
\textbf{Step 3 (isolate $\frac{dy}{dx}$):} $x\dfrac{dy}{dx}=-y$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dy}{dx}=-\dfrac yx$.` },
    ],
    questions: [
      { ask: r`Differentiate $f(x)=\dfrac1{x^5}$.` },
      { ask: r`Differentiate $f(x)=\sqrt[3]{x}$.` },
      { ask: r`Find $f''(x)$ for $f(x)=x^5$.` },
      { ask: r`Find $f''(x)$ for $f(x)=x^4-2x^2$.` },
      { ask: r`Find $\dfrac{dy}{dx}$ for $x^2+y^2=9$.` },
      { ask: r`Differentiate $f(x)=x^{5/2}$.` },
      { ask: r`Find $f''(1)$ for $f(x)=x^3$.` },
      { ask: r`Find $f''(x)$ for $f(x)=3x^4$.` },
      { ask: r`Find $\dfrac{dy}{dx}$ for $x^2-y^2=1$.` },
      { ask: r`Differentiate $f(x)=\dfrac2{x^3}$.` },
      { ask: r`Find $f''(x)$ for $f(x)=x^3-6x^2+2x$.` },
      { ask: r`Find $\dfrac{dy}{dx}$ for $xy=10$.` },
      { ask: r`Find $\dfrac{dy}{dx}$ for $x^2+xy+y^2=7$ (product rule on $xy$).`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$-\tfrac5{x^6}$`, r`$\tfrac13x^{-2/3}$`, r`$f''=20x^3$`, r`$f''=12x^2-4$`, r`$-\tfrac xy$`, r`$\tfrac52x^{3/2}$`, r`$f''=6x\Rightarrow6$`, r`$f''=36x^2$`, r`$\tfrac xy$`, r`$-\tfrac6{x^4}$`, r`$f''=6x-12$`, r`$-\tfrac yx$`, r`$2x+y+xy'+2yy'=0\Rightarrow y'=-\dfrac{2x+y}{x+2y}$`],
  },
];
