// IB AA SL worksheets — Unit 5: Differential Calculus. Original problems.
// 9 worked examples + 13 practice questions per worksheet.
const r = String.raw;
const U = "5: Differential Calculus";

export default [
  {
    code: "5.1", unit: U, title: "Limits and Introducing the Derivative",
    intro: r`Limits handle indeterminate forms; the derivative is defined as a limit of secant slopes.`,
    ideas: [
      r`If direct substitution gives $\tfrac00$, factor or rationalize first.`,
      r`$f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$.`,
    ],
    examples: [
      { t: "Factoring an indeterminate form", body: r`Evaluate $\displaystyle\lim_{x\to5}\dfrac{x^2-25}{x-5}$.\soln
$\dfrac{(x-5)(x+5)}{x-5}=x+5\to10$.\\[3pt]\textbf{Conclusion:} $10$.` },
      { t: "Rationalizing", body: r`Evaluate $\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+9}-3}{x}$.\soln
Multiply by the conjugate: $\dfrac{x}{x(\sqrt{x+9}+3)}=\dfrac{1}{\sqrt{x+9}+3}\to\dfrac16$.\\[3pt]\textbf{Conclusion:} $\dfrac16$.` },
      { t: "First principles", body: r`Use first principles to find the derivative of $f(x)=x^2-3x$.\soln
$f(x+h)-f(x)=2xh+h^2-3h=h(2x+h-3)$; divide by $h$, let $h\to0$.\\[3pt]\textbf{Conclusion:} $f'(x)=2x-3$.` },
      { t: "General quadratic from first principles", body: r`Use first principles to prove $\dfrac{d}{dx}[ax^2]=2ax$.\soln
$f(x+h)-f(x)=a(x+h)^2-ax^2=a(2xh+h^2)=h(2ax+ah)$; divide by $h$, let $h\to0$.\\[3pt]\textbf{Conclusion:} $f'(x)=2ax$.` },
      { t: "Factoring a higher-degree indeterminate form", body: r`Evaluate $\displaystyle\lim_{x\to3}\dfrac{x^3-27}{x-3}$ using the difference of cubes.\soln
$x^3-27=(x-3)(x^2+3x+9)$, so the limit simplifies to $x^2+3x+9\to9+9+9$.\\[3pt]\textbf{Conclusion:} $27$.` },
      { t: "A limit requiring two factoring steps", body: r`Evaluate $\displaystyle\lim_{x\to2}\dfrac{x^2-4}{x^2-5x+6}$.\soln
Factor both: $\dfrac{(x-2)(x+2)}{(x-2)(x-3)}=\dfrac{x+2}{x-3}\to\dfrac{4}{-1}$.\\[3pt]\textbf{Conclusion:} $-4$.` },
      { t: "First principles for a cubic", body: r`Use first principles to find the derivative of $f(x)=x^3$.\soln
$f(x+h)-f(x)=(x+h)^3-x^3=3x^2h+3xh^2+h^3=h(3x^2+3xh+h^2)$; divide by $h$, let $h\to0$.\\[3pt]\textbf{Conclusion:} $f'(x)=3x^2$.` },
      { t: "Rationalizing with a linear numerator shift", body: r`Evaluate $\displaystyle\lim_{x\to4}\dfrac{\sqrt{x}-2}{x-4}$.\soln
Multiply by the conjugate: $\dfrac{x-4}{(x-4)(\sqrt x+2)}=\dfrac{1}{\sqrt x+2}\to\dfrac1{4}$.\\[3pt]\textbf{Conclusion:} $\dfrac14$.` },
      { t: "First principles at a specific point", body: r`Use first principles to find $f'(3)$ for $f(x)=x^2+1$ (evaluate the limit at the specific point $x=3$).\soln
$\dfrac{f(3+h)-f(3)}h=\dfrac{(3+h)^2+1-10}h=\dfrac{6h+h^2}h=6+h\to6$.\\[3pt]\textbf{Conclusion:} $f'(3)=6$.` },
    ],
    questions: [
      { ask: r`Evaluate $\displaystyle\lim_{x\to3}(2x^2-x+1)$.` },
      { ask: r`Evaluate $\displaystyle\lim_{x\to-4}\dfrac{x^2-16}{x+4}$.` },
      { ask: r`Evaluate $\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+25}-5}{x}$.` },
      { ask: r`Use first principles to find the derivative of $f(x)=x^2+7x$.` },
      { ask: r`Use first principles to find the derivative of $f(x)=4x^2-2x$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Evaluate $\displaystyle\lim_{x\to2}\dfrac{x^3-8}{x-2}$ by factoring the numerator as a difference of cubes.`, challenge: true, ws: "3cm" },
      { ask: r`Evaluate $\displaystyle\lim_{x\to3}\dfrac{x^2-9}{x^2-2x-3}$.` },
      { ask: r`Use first principles to find the derivative of $f(x)=2x^3$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Evaluate $\displaystyle\lim_{x\to9}\dfrac{\sqrt x-3}{x-9}$.` },
      { ask: r`Use first principles to find $f'(2)$ for $f(x)=x^2-1$.` },
      { ask: r`Evaluate $\displaystyle\lim_{x\to1}\dfrac{x^3-1}{x-1}$ using the difference of cubes.` },
      { ask: r`Evaluate $\displaystyle\lim_{x\to-2}\dfrac{x^2-4}{x^2+3x+2}$.`, challenge: true, ws: "3cm" },
      { ask: r`Use first principles to find the derivative of $f(x)=x^2+5x-2$ (note the constant term's effect).`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$16$`, r`$x-4\to-8$`, r`$\dfrac{1}{\sqrt{x+25}+5}\to\dfrac1{10}$`, r`$f'(x)=2x+7$`, r`$f'(x)=8x-2$`,
      r`$(x-2)(x^2+2x+4)/(x-2)=x^2+2x+4\to4+4+4=12$`,
      r`$\dfrac{(x-3)(x+3)}{(x-3)(x+1)}=\dfrac{x+3}{x+1}\to\dfrac64=\dfrac32$`,
      r`$f(x+h)-f(x)=2(3x^2h+3xh^2+h^3)=h(6x^2+6xh+2h^2)$; $f'(x)=6x^2$`,
      r`$\dfrac{1}{\sqrt x+3}\to\dfrac16$`,
      r`$\dfrac{(2+h)^2-1-3}{h}=\dfrac{4h+h^2}h=4+h\to4$`,
      r`$(x-1)(x^2+x+1)/(x-1)=x^2+x+1\to1+1+1=3$`,
      r`$\dfrac{(x-2)(x+2)}{(x+1)(x+2)}=\dfrac{x-2}{x+1}\to\dfrac{-4}{-1}=4$`,
      r`$f(x+h)-f(x)=2xh+h^2+5h=h(2x+h+5)$; $f'(x)=2x+5$ (the constant $-2$ contributes nothing, as expected)`,
    ],
  },
  {
    code: "5.2", unit: U, title: "Differentiation Rules",
    intro: r`Product, quotient, and chain rules combine to differentiate any layered expression.`,
    ideas: [
      r`Product: $(uv)'=u'v+uv'$. Quotient: $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$. Chain: $[f(g(x))]'=f'(g(x))g'(x)$.`,
    ],
    examples: [
      { t: "Product rule", body: r`Differentiate $f(x)=(3x+1)(x^2-2)$.\soln
$u=3x+1,v=x^2-2$: $f'(x)=3(x^2-2)+(3x+1)(2x)=3x^2-6+6x^2+2x$.\\[3pt]\textbf{Conclusion:} $f'(x)=9x^2+2x-6$.` },
      { t: "Quotient rule", body: r`Differentiate $f(x)=\dfrac{2x}{x^2+4}$.\soln
$\dfrac{2(x^2+4)-2x(2x)}{(x^2+4)^2}=\dfrac{2x^2+8-4x^2}{(x^2+4)^2}$.\\[3pt]\textbf{Conclusion:} $f'(x)=\dfrac{8-2x^2}{(x^2+4)^2}$.` },
      { t: "Chain rule", body: r`Differentiate $f(x)=(5x-2)^7$.\soln
$7(5x-2)^6\cdot5$.\\[3pt]\textbf{Conclusion:} $f'(x)=35(5x-2)^6$.` },
      { t: "Product combined with chain", body: r`Differentiate $f(x)=x^3(2x+1)^4$, factoring your answer.\soln
$3x^2(2x+1)^4+x^3\cdot4(2x+1)^3\cdot2$; factor $x^2(2x+1)^3$: $3(2x+1)+8x$.\\[3pt]\textbf{Conclusion:} $f'(x)=x^2(2x+1)^3(14x+3)$.` },
      { t: "Chain rule applied twice (nested composition)", body: r`Differentiate $f(x)=\sqrt{(3x-1)^2+4}$ (write as a power first).\soln
$f(x)=\big[(3x-1)^2+4\big]^{1/2}$; outer derivative $\tfrac12[\cdot]^{-1/2}$, inner derivative $2(3x-1)(3)=6(3x-1)$.\\[3pt]\textbf{Conclusion:} $f'(x)=\dfrac{6(3x-1)}{2\sqrt{(3x-1)^2+4}}=\dfrac{3(3x-1)}{\sqrt{(3x-1)^2+4}}$.` },
      { t: "Quotient rule combined with chain", body: r`Differentiate $f(x)=\dfrac{(x+1)^2}{x-3}$.\soln
$u=(x+1)^2,v=x-3$: $u'=2(x+1)$. $f'(x)=\dfrac{2(x+1)(x-3)-(x+1)^2}{(x-3)^2}$.\\[3pt]
Factor $(x+1)$ from the numerator: $(x+1)\big[2(x-3)-(x+1)\big]=(x+1)(x-7)$.\\[3pt]\textbf{Conclusion:} $f'(x)=\dfrac{(x+1)(x-7)}{(x-3)^2}$.` },
      { t: "Finding where the tangent is horizontal", body: r`Find the $x$-value(s) where the tangent to $f(x)=x^3-12x+5$ is horizontal.\soln
Horizontal tangent means $f'(x)=0$: $3x^2-12=0\Rightarrow x^2=4$.\\[3pt]\textbf{Conclusion:} $x=2$ or $x=-2$.` },
      { t: "Product rule with three factors (via grouping)", body: r`Differentiate $f(x)=x(x+1)(x-2)$ by first expanding two factors.\soln
Expand $(x+1)(x-2)=x^2-x-2$, so $f(x)=x^3-x^2-2x$.\\[3pt]\textbf{Conclusion:} $f'(x)=3x^2-2x-2$.` },
      { t: "Application --- marginal cost", body: r`A company's cost function is $C(x)=x^3-6x^2+400x+1000$ (dollars, for $x$ units). Find the marginal cost (the derivative) at $x=10$.\soln
$C'(x)=3x^2-12x+400$; $C'(10)=300-120+400$.\\[3pt]\textbf{Conclusion:} marginal cost at $x=10$ is \$580 per additional unit.` },
    ],
    questions: [
      { ask: r`Differentiate $f(x)=8x^3-3x^2+2x-9$.` },
      { ask: r`Differentiate $f(x)=(x+4)(2x^2-3)$.` },
      { ask: r`Differentiate $f(x)=\dfrac{x^2}{3x+1}$.` },
      { ask: r`Differentiate $f(x)=(3x^2-1)^5$.` },
      { ask: r`Differentiate $f(x)=x^2(4x-1)^3$, factoring your answer.`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the equation of the tangent line to $f(x)=x^3-3x$ at $x=2$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Differentiate $f(x)=\sqrt{4x^2+9}$ (write as a power first).` },
      { ask: r`Differentiate $f(x)=\dfrac{(x-2)^2}{x+1}$, factoring your answer.`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the $x$-value(s) where the tangent to $f(x)=x^3-27x+4$ is horizontal.` },
      { ask: r`Differentiate $f(x)=x(x-3)(x+2)$ by expanding first.` },
      { ask: r`A company's cost is $C(x)=x^3-9x^2+600x+2000$; find the marginal cost at $x=6$.` },
      { ask: r`Differentiate $f(x)=(2x+3)^2(x-1)^3$, leaving your answer factored (identify the common factors, no need to fully expand).`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the equation of the tangent line to $f(x)=\dfrac{x}{x+2}$ at $x=0$.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$f'(x)=24x^2-6x+2$`, r`$2(2x^2-3)+(x+4)(4x)=6x^2+16x-6$`,
      r`$\dfrac{2x(3x+1)-x^2(3)}{(3x+1)^2}=\dfrac{3x^2+2x}{(3x+1)^2}$`, r`$30x(3x^2-1)^4$`,
      r`$2x(4x-1)^3+x^2\cdot3(4x-1)^2\cdot4=x(4x-1)^2[2(4x-1)+12x]=x(4x-1)^2(20x-2)$`,
      r`$f'(x)=3x^2-3$, $f'(2)=9$; $f(2)=8-6=2$; $y-2=9(x-2)\Rightarrow y=9x-16$`,
      r`$f(x)=(4x^2+9)^{1/2}$; $f'(x)=\dfrac{8x}{2\sqrt{4x^2+9}}=\dfrac{4x}{\sqrt{4x^2+9}}$`,
      r`$\dfrac{2(x-2)(x+1)-(x-2)^2}{(x+1)^2}$; factor $(x-2)$: $(x-2)[2(x+1)-(x-2)]=(x-2)(x+4)$: $f'(x)=\dfrac{(x-2)(x+4)}{(x+1)^2}$`,
      r`$f'(x)=3x^2-27=0\Rightarrow x^2=9\Rightarrow x=\pm3$`,
      r`expand $(x-3)(x+2)=x^2-x-6$, so $f(x)=x^3-x^2-6x$: $f'(x)=3x^2-2x-6$`,
      r`$C'(x)=3x^2-18x+600$; $C'(6)=108-108+600=\$600$`,
      r`$u=(2x+3)^2,v=(x-1)^3$; $u'=4(2x+3)$, $v'=3(x-1)^2$; $f'(x)=4(2x+3)(x-1)^3+3(x-1)^2(2x+3)^2$, factor $(2x+3)(x-1)^2$: $=(2x+3)(x-1)^2[4(x-1)+3(2x+3)]=(2x+3)(x-1)^2(10x+5)$`,
      r`$f'(x)=\dfrac{(x+2)-x}{(x+2)^2}=\dfrac2{(x+2)^2}$; $f'(0)=\dfrac24=0.5$; $f(0)=0$; tangent: $y=0.5x$`,
    ],
  },
  {
    code: "5.3", unit: U, title: "Derivatives of Trig, Exponential and Log Functions",
    intro: r`Base derivatives for sin, cos, exp, and ln extend with the chain, product, and quotient rules.`,
    ideas: [
      r`$\dfrac{d}{dx}[\sin x]=\cos x$, $\dfrac{d}{dx}[\cos x]=-\sin x$, $\dfrac{d}{dx}[e^x]=e^x$, $\dfrac{d}{dx}[\ln x]=\dfrac1x$.`,
    ],
    examples: [
      { t: "Chain rule with exponential", body: r`Differentiate $f(x)=e^{4x^2-x}$.\soln
Inner derivative $8x-1$.\\[3pt]\textbf{Conclusion:} $f'(x)=(8x-1)e^{4x^2-x}$.` },
      { t: "Chain rule with logarithm", body: r`Differentiate $f(x)=\ln(7x^2+3)$.\soln
Inner derivative $14x$.\\[3pt]\textbf{Conclusion:} $f'(x)=\dfrac{14x}{7x^2+3}$.` },
      { t: "Product rule with exponential", body: r`Differentiate $f(x)=x^2e^{3x}$.\soln
$2xe^{3x}+x^2(3e^{3x})=xe^{3x}(2+3x)$.\\[3pt]\textbf{Conclusion:} $f'(x)=xe^{3x}(3x+2)$.` },
      { t: "Deriving sec x", body: r`Using the quotient rule and $\sec x=\dfrac{1}{\cos x}$, prove $\dfrac{d}{dx}[\sec x]=\sec x\tan x$.\soln
$\dfrac{0\cdot\cos x-1\cdot(-\sin x)}{\cos^2x}=\dfrac{\sin x}{\cos^2x}=\dfrac1{\cos x}\cdot\dfrac{\sin x}{\cos x}$.\\[3pt]\textbf{Conclusion:} $=\sec x\tan x$.` },
      { t: "Chain rule with sine of a linear function", body: r`Differentiate $f(x)=\sin(5x-2)$.\soln
Inner derivative is $5$.\\[3pt]\textbf{Conclusion:} $f'(x)=5\cos(5x-2)$.` },
      { t: "Chain rule nested inside a trig function", body: r`Differentiate $f(x)=\cos(x^2+3x)$.\soln
Inner derivative is $2x+3$.\\[3pt]\textbf{Conclusion:} $f'(x)=-(2x+3)\sin(x^2+3x)$.` },
      { t: "Product rule combining trig and log", body: r`Differentiate $f(x)=\sin x\ln x$.\soln
$u=\sin x,v=\ln x$: $f'(x)=\cos x\ln x+\sin x\cdot\dfrac1x$.\\[3pt]\textbf{Conclusion:} $f'(x)=\cos x\ln x+\dfrac{\sin x}{x}$.` },
      { t: "Quotient rule with exponential and trig", body: r`Differentiate $f(x)=\dfrac{e^x}{\cos x}$.\soln
$\dfrac{e^x\cos x-e^x(-\sin x)}{\cos^2x}=\dfrac{e^x(\cos x+\sin x)}{\cos^2x}$.\\[3pt]\textbf{Conclusion:} $f'(x)=\dfrac{e^x(\cos x+\sin x)}{\cos^2x}$.` },
      { t: "Application --- rate of a decaying quantity", body: r`A radioactive sample's mass is $M(t)=200e^{-0.05t}$ grams. Find the rate of change of mass at $t=10$.\soln
$M'(t)=200(-0.05)e^{-0.05t}=-10e^{-0.05t}$; $M'(10)=-10e^{-0.5}$.\\[3pt]\textbf{Conclusion:} $M'(10)\approx-6.07$ g/unit time --- the mass is decreasing at about 6.07 g per unit time.` },
    ],
    questions: [
      { ask: r`Differentiate $f(x)=7\cos x-e^x+3\ln x$.` },
      { ask: r`Differentiate $f(x)=e^{6x-1}$.` },
      { ask: r`Differentiate $f(x)=\ln(4x^3-x)$.` },
      { ask: r`Differentiate $f(x)=x^3\sin x$ using the product rule.` },
      { ask: r`Differentiate $f(x)=\dfrac{e^x}{x^2}$ using the quotient rule.`, challenge: true, ws: "3.2cm" },
      { ask: r`Using the quotient rule and $\csc x=\dfrac1{\sin x}$, derive $\dfrac{d}{dx}[\csc x]=-\csc x\cot x$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Differentiate $f(x)=\sin(3x+1)$.` },
      { ask: r`Differentiate $f(x)=\cos(x^2-4x)$.` },
      { ask: r`Differentiate $f(x)=\cos x\ln x$ using the product rule.` },
      { ask: r`Differentiate $f(x)=\dfrac{e^x}{\sin x}$ using the quotient rule.`, challenge: true, ws: "3.2cm" },
      { ask: r`A sample's mass is $M(t)=150e^{-0.03t}$ grams; find the rate of change at $t=20$.` },
      { ask: r`Differentiate $f(x)=e^{\sin x}$.` },
      { ask: r`Differentiate $f(x)=\ln(\cos x)$, stating the domain restriction this creates.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$-7\sin x-e^x+\dfrac3x$`, r`$6e^{6x-1}$`, r`$\dfrac{12x^2-1}{4x^3-x}$`,
      r`$3x^2\sin x+x^3\cos x$`,
      r`$\dfrac{e^x(x^2)-e^x(2x)}{x^4}=\dfrac{e^x(x-2)}{x^3}$`,
      r`$\dfrac{0\cdot\sin x-1\cdot\cos x}{\sin^2x}=-\dfrac{\cos x}{\sin^2x}=-\dfrac1{\sin x}\cdot\dfrac{\cos x}{\sin x}=-\csc x\cot x$`,
      r`$3\cos(3x+1)$`,
      r`$-(2x-4)\sin(x^2-4x)$`,
      r`$-\sin x\ln x+\dfrac{\cos x}{x}$`,
      r`$\dfrac{e^x\sin x-e^x\cos x}{\sin^2x}=\dfrac{e^x(\sin x-\cos x)}{\sin^2x}$`,
      r`$M'(t)=-4.5e^{-0.03t}$; $M'(20)=-4.5e^{-0.6}\approx-2.47$ g/unit time`,
      r`$\cos x\cdot e^{\sin x}$`,
      r`$\dfrac{-\sin x}{\cos x}=-\tan x$; domain requires $\cos x>0$, so excludes wherever $\cos x\leq0$`,
    ],
  },
  {
    code: "5.4", unit: U, title: "Curve Sketching with Derivatives",
    intro: r`Critical points, the second derivative test, and inflection points reveal a curve's whole shape.`,
    ideas: [
      r`Critical points: $f'(x)=0$; classify via a sign change (first derivative test) or $f''$'s sign (second derivative test).`,
      r`$f'(c)=0$ does not always mean an extremum --- check for an actual sign change.`,
    ],
    examples: [
      { t: "First derivative test", body: r`Find and classify the critical points of $f(x)=x^3-12x$.\soln
$f'(x)=3x^2-12=3(x-2)(x+2)$; critical at $x=\pm2$. Sign: $+,-,+$ across $-2,2$.\\[3pt]\textbf{Conclusion:} local max at $x=-2$, local min at $x=2$.` },
      { t: "Second derivative test", body: r`Confirm the classification using $f''$.\soln
$f''(x)=6x$; $f''(-2)=-12<0$ (max), $f''(2)=12>0$ (min).\\[3pt]\textbf{Conclusion:} confirmed.` },
      { t: "Inflection point", body: r`Find the inflection point of $f(x)=x^3-12x$.\soln
$f''(x)=6x=0\Rightarrow x=0$; sign changes from $-$ to $+$. $f(0)=0$.\\[3pt]\textbf{Conclusion:} $(0,0)$.` },
      { t: "Critical point that is not an extremum", body: r`Show that $f(x)=x^3+2$ has a critical point at $x=0$ that is not an extremum.\soln
$f'(x)=3x^2\geq0$ for every $x$ --- no sign change at $x=0$.\\[3pt]\textbf{Conclusion:} $x=0$ is a horizontal-tangent inflection point, not a max or min.` },
      { t: "Full analysis of a quartic", body: r`Find and classify all critical points of $f(x)=x^4-8x^2$.\soln
$f'(x)=4x^3-16x=4x(x^2-4)=4x(x-2)(x+2)$; critical at $x=0,\pm2$. Sign of $f'$: $-,+,-,+$ across $-2,0,2$.\\[3pt]\textbf{Conclusion:} local min at $x=-2$, local max at $x=0$, local min at $x=2$.` },
      { t: "Finding both inflection points of a quartic", body: r`Find the inflection points of $f(x)=x^4-8x^2$ (from Example 5).\soln
$f''(x)=12x^2-16=0\Rightarrow x^2=\tfrac43\Rightarrow x=\pm\sqrt{4/3}$.\\[3pt]\textbf{Conclusion:} inflection points at $x=\pm\dfrac{2}{\sqrt3}\approx\pm1.155$.` },
      { t: "Determining global extrema on a closed interval", body: r`Find the global maximum and minimum of $f(x)=x^3-3x$ on $[-2,3]$.\soln
Critical points: $f'(x)=3x^2-3=0\Rightarrow x=\pm1$ (both in $[-2,3]$). Values: $f(-2)=-2$, $f(-1)=2$, $f(1)=-2$, $f(3)=18$.\\[3pt]\textbf{Conclusion:} global max $18$ at $x=3$; global min $-2$ at $x=-2$ and $x=1$ (tied).` },
      { t: "Curve sketching summary for a cubic", body: r`Summarize the shape of $f(x)=-x^3+3x$ using critical points and concavity.\soln
$f'(x)=-3x^2+3=0\Rightarrow x=\pm1$; $f''(x)=-6x$: $f''(-1)=6>0$ (min), $f''(1)=-6<0$ (max). Inflection at $f''=0\Rightarrow x=0$.\\[3pt]\textbf{Conclusion:} local min at $(-1,-2)$, local max at $(1,2)$, inflection at $(0,0)$; concave up on $(-\infty,0)$, down on $(0,\infty)$.` },
      { t: "Why every cubic $x^3+px+q$ has exactly one inflection point", body: r`Explain why $f(x)=x^3+px+q$ always has exactly one inflection point, for any constants $p,q$.\soln
$f''(x)=6x$, which is zero at exactly one place, $x=0$, and changes sign there (negative to positive) regardless of $p,q$.\\[3pt]\textbf{Conclusion:} every such cubic has exactly one inflection point, always at $x=0$.` },
    ],
    questions: [
      { ask: r`Find and classify the critical points of $f(x)=x^3-6x^2$.` },
      { ask: r`Confirm your classification using the second derivative test.` },
      { ask: r`Find the inflection point of $f(x)=x^3-6x^2$.` },
      { ask: r`Find and classify the critical points of $f(x)=x^4-32x$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Show that $f(x)=x^5$ has a critical point at $x=0$ that is not an extremum, using $f'(x)=5x^4$.` },
      { ask: r`Find all critical points and the inflection point of $f(x)=2x^3-9x^2+12x$, and state the intervals of concavity.`, challenge: true, ws: "3.6cm" },
      { ask: r`Find and classify the critical points of $f(x)=x^4-18x^2$.` },
      { ask: r`Find the inflection points of $f(x)=x^4-18x^2$ (from the previous question).` },
      { ask: r`Find the global maximum and minimum of $f(x)=x^3-12x$ on $[-3,4]$.` },
      { ask: r`Summarize the shape of $f(x)=x^3-3x^2$ using its critical points and concavity.` },
      { ask: r`Find the global max/min of $f(x)=x^4-4x^2$ on $[-1,3]$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Explain why $f(x)=x^3+px+q$ always has exactly one inflection point, regardless of $p,q$.`, challenge: true, ws: "3cm" },
      { ask: r`Find and classify the critical points of $f(x)=3x^5-5x^3$ (hint: factor out $x^3$ from $f'$).`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$f'=3x^2-12x=3x(x-4)$: max at $x=0$, min at $x=4$`, r`$f''=6x-12$; $f''(0)=-12<0$, $f''(4)=12>0$: confirmed`,
      r`$6x-12=0\Rightarrow x=2$, $f(2)=8-24=-16$: $(2,-16)$`,
      r`$f'=4x^3-32=4(x^3-8)=4(x-2)(x^2+2x+4)$; only real root $x=2$ (quadratic factor has no real roots); sign changes $-$ to $+$: local min at $x=2$`,
      r`$f'(x)=5x^4\geq0$ everywhere, no sign change: $x=0$ is a horizontal-tangent inflection, not an extremum`,
      r`$f'=6x^2-18x+12=6(x-1)(x-2)$: max at $x=1$, min at $x=2$; $f''=12x-18=0\Rightarrow x=1.5$ (inflection); concave down on $(-\infty,1.5)$, up on $(1.5,\infty)$`,
      r`$f'=4x^3-36x=4x(x^2-9)=4x(x-3)(x+3)$: min at $x=-3$, max at $x=0$, min at $x=3$`,
      r`$f''=12x^2-36=0\Rightarrow x^2=3\Rightarrow x=\pm\sqrt3$`,
      r`$f'=3x^2-12=0\Rightarrow x=\pm2$; values: $f(-3)=9$, $f(-2)=16$, $f(2)=-16$, $f(4)=16$; global max $16$ (at $x=-2$ and $x=4$, tied), global min $-16$ at $x=2$`,
      r`$f'=3x^2-6x=3x(x-2)$: max at $(0,0)$, min at $(2,-4)$; $f''=6x-6=0\Rightarrow x=1$ (inflection at $(1,-2)$); concave down on $(-\infty,1)$, up on $(1,\infty)$`,
      r`$f'=4x^3-8x=4x(x^2-2)=0\Rightarrow x=0,\pm\sqrt2$ (only $0,\sqrt2$ in $[-1,3]$); values: $f(-1)=-3$, $f(0)=0$, $f(\sqrt2)=-4$, $f(3)=45$; global max $45$ at $x=3$, global min $-4$ at $x=\sqrt2$`,
      r`$f''(x)=6x$, zero only at $x=0$ and changing sign there regardless of $p,q$ --- so exactly one inflection point always exists, at $x=0$`,
      r`$f'=15x^4-15x^2=15x^2(x^2-1)=15x^2(x-1)(x+1)$: critical at $x=0,\pm1$; sign of $f'$: $+,-,+$ crossing $-1$ and $1$ but $x=0$ has no sign change (double root): max at $x=-1$, min at $x=1$, $x=0$ is not an extremum`,
    ],
  },
  {
    code: "5.5", unit: U, title: "Optimization",
    intro: r`Optimization reduces a two-variable problem to one variable using a constraint, then finds a critical point.`,
    ideas: [
      r`Use the constraint to eliminate a variable, differentiate, set to 0, confirm max/min.`,
    ],
    examples: [
      { t: "Maximize area with fixed fencing", body: r`A rectangle is enclosed by 160 m of fencing. Find the dimensions maximizing area.\soln
$y=80-x$; $A=80x-x^2$; $A'=80-2x=0\Rightarrow x=40$.\\[3pt]\textbf{Conclusion:} $x=y=40$ m (a square).` },
      { t: "Minimize fencing with fixed area", body: r`A pen must have area 484 m$^2$; find dimensions minimizing perimeter.\soln
$y=484/x$; $P=2x+968/x$; $P'=2-968/x^2=0\Rightarrow x^2=484\Rightarrow x=22$.\\[3pt]\textbf{Conclusion:} $x=y=22$ m.` },
      { t: "Open-top box", body: r`An open box is cut from a $18\times18$ cm sheet with corner squares of side $x$. Find $x$ maximizing volume.\soln
$V=x(18-2x)^2$; $V'=(18-2x)^2+x\cdot2(18-2x)(-2)=(18-2x)(18-6x)$; zero at $x=9$ (rejected, collapses box) or $x=3$.\\[3pt]\textbf{Conclusion:} $x=3$ cm.` },
      { t: "Minimum surface area cylinder", body: r`A cylinder must hold volume $432\pi$ cm$^3$; find the radius minimizing surface area.\soln
$h=432/r^2$; $S=2\pi r^2+864\pi/r$; $S'=4\pi r-864\pi/r^2=0\Rightarrow r^3=216$.\\[3pt]\textbf{Conclusion:} $r=6$ cm.` },
      { t: "Minimizing distance to a curve", body: r`Find the point on the parabola $y=x^2$ closest to the point $(0,3)$.\soln
Minimize $D^2=x^2+(x^2-3)^2$ (using squared distance to avoid the root). $D^2=x^4-5x^2+9$; derivative $4x^3-10x=0\Rightarrow2x(2x^2-5)=0$.\\[3pt]\textbf{Conclusion:} $x=0$ or $x=\pm\sqrt{2.5}$; testing shows $x=\pm\sqrt{2.5}$ gives the minimum (closer than $x=0$).` },
      { t: "Maximizing a triangle's area with a fixed hypotenuse-style constraint", body: r`A rectangle is inscribed under the line $x+2y=20$ in the first quadrant (one corner at the origin, opposite corner on the line). Find the dimensions maximizing its area.\soln
$y=\dfrac{20-x}2$; $A=xy=\dfrac{x(20-x)}2=10x-\dfrac{x^2}2$; $A'=10-x=0\Rightarrow x=10$.\\[3pt]\textbf{Conclusion:} $x=10$, $y=5$; max area $=50$.` },
      { t: "Minimizing material for an open cylinder (no lid)", body: r`An open-top cylindrical can (no lid) must hold volume $250\pi$ cm$^3$; find the radius minimizing material used.\soln
$h=250/r^2$; $S=\pi r^2+2\pi rh=\pi r^2+500\pi/r$ (only one circular base, since it's open-top); $S'=2\pi r-500\pi/r^2=0\Rightarrow r^3=250$.\\[3pt]\textbf{Conclusion:} $r=\sqrt[3]{250}\approx6.30$ cm.` },
      { t: "Application --- minimizing total travel cost", body: r`A delivery route's cost is $C(x)=2x+\dfrac{288}x$ (\$100s) for average speed-related parameter $x>0$. Find $x$ minimizing cost.\soln
$C'(x)=2-\dfrac{288}{x^2}=0\Rightarrow x^2=144$.\\[3pt]\textbf{Conclusion:} $x=12$ minimizes cost (rejecting the negative root).` },
      { t: "Confirming a maximum with the second derivative test", body: r`For the rectangle-under-a-line problem (Example 6), confirm $x=10$ gives a maximum using $A''$.\soln
$A(x)=10x-\tfrac{x^2}2\Rightarrow A''(x)=-1<0$ for all $x$.\\[3pt]\textbf{Conclusion:} $A''<0$ confirms $x=10$ is indeed a maximum.` },
    ],
    questions: [
      { ask: r`A rectangle is enclosed by 200 m of fencing; find dimensions maximizing area.` },
      { ask: r`A pen must have area 900 m$^2$; find dimensions minimizing perimeter.` },
      { ask: r`An open box is cut from a $20\times20$ cm sheet with corner squares of side $x$; find $x$ maximizing volume.`, challenge: true, ws: "3.4cm" },
      { ask: r`A cylinder must hold volume $2000\pi$ cm$^3$; find the radius minimizing surface area.` },
      { ask: r`For the cylinder above, find the height and confirm $h=2r$ at the optimum.` },
      { ask: r`A farmer has 240 m of fencing for a rectangular field using an existing wall as one side (so only 3 sides need fencing); find the dimensions maximizing area.`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the point on the parabola $y=x^2$ closest to $(0,2)$ (minimize squared distance).`, challenge: true, ws: "3.4cm" },
      { ask: r`A rectangle is inscribed under the line $x+3y=30$ in the first quadrant; find the dimensions maximizing its area.` },
      { ask: r`An open-top cylindrical can (no lid) must hold volume $128\pi$ cm$^3$; find the radius minimizing material used.`, challenge: true, ws: "3.2cm" },
      { ask: r`A delivery route's cost is $C(x)=3x+\dfrac{432}x$; find $x$ minimizing cost.` },
      { ask: r`For the inscribed-rectangle problem above ($x+3y=30$), confirm the maximum using the second derivative.` },
      { ask: r`A box with a square base and no lid must hold 108 cm$^3$; find the base side minimizing total material used.`, challenge: true, ws: "3.4cm" },
      { ask: r`Two positive numbers have a sum of 24; find the two numbers that maximize their product.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`$y=100-x$, $A'=100-2x=0$: $x=y=50$ m`, r`$y=900/x$, $x^2=900$: $x=y=30$ m`,
      r`$V=x(20-2x)^2$; $V'=(20-2x)(20-6x)$: $x=10$ (rejected) or $x=\tfrac{10}3$ cm`,
      r`$S=2\pi r^2+4000\pi/r$; $S'=4\pi r-4000\pi/r^2=0\Rightarrow r^3=1000\Rightarrow r=10$ cm`,
      r`$h=2000/100=20$; $2r=20=h$ confirmed`,
      r`Let $x$ = side perpendicular to wall, $240-2x$ = side parallel; $A=x(240-2x)=240x-2x^2$; $A'=240-4x=0\Rightarrow x=60$, parallel side $=120$ m`,
      r`minimize $D^2=x^2+(x^2-2)^2=x^4-3x^2+4$; $4x^3-6x=0\Rightarrow2x(2x^2-3)=0\Rightarrow x=\pm\sqrt{1.5}$; point $(\sqrt{1.5},1.5)$ (or its negative-$x$ mirror)`,
      r`$y=\tfrac{30-x}3$; $A=xy=10x-\tfrac{x^2}3$; $A'=10-\tfrac{2x}3=0\Rightarrow x=15$, $y=5$`,
      r`$S=\pi r^2+256\pi/r$; $S'=2\pi r-256\pi/r^2=0\Rightarrow r^3=128\Rightarrow r=\sqrt[3]{128}\approx5.04$ cm`,
      r`$C'(x)=3-432/x^2=0\Rightarrow x^2=144\Rightarrow x=12$`,
      r`$A''(x)=-\tfrac23<0$ for all $x$, confirming a maximum`,
      r`$S=x^2+4x(108/x^2)=x^2+432/x$; $S'=2x-432/x^2=0\Rightarrow x^3=216\Rightarrow x=6$ cm`,
      r`let numbers be $x,24-x$; $P=x(24-x)=24x-x^2$; $P'=24-2x=0\Rightarrow x=12$: both numbers are $12$`,
    ],
  },
  {
    code: "5.6", unit: U, title: "Kinematics and Rates of Change",
    intro: r`Velocity is the derivative of position; acceleration is the derivative of velocity.`,
    ideas: [
      r`At rest when $v(t)=0$. Speeding up: $v,a$ same sign. Slowing down: opposite signs.`,
      r`Total distance $\neq$ displacement when direction reverses --- split at each zero of $v(t)$.`,
    ],
    examples: [
      { t: "Velocity and acceleration", body: r`$s(t)=t^3-9t^2+15t$. Find $v(t)$, $a(t)$, and evaluate both at $t=1$.\soln
$v(t)=3t^2-18t+15$; $v(1)=3-18+15=0$. $a(t)=6t-18$; $a(1)=-12$.\\[3pt]\textbf{Conclusion:} $v(1)=0$, $a(1)=-12$.` },
      { t: "At rest", body: r`Using the same $s(t)$, find every time the particle is at rest.\soln
$3t^2-18t+15=3(t-1)(t-5)=0$.\\[3pt]\textbf{Conclusion:} $t=1,5$.` },
      { t: "Total distance", body: r`Given $s(0)=0$, $s(1)=7$, $s(5)=-25$, $s(6)=-18$ for a particle reversing direction at $t=1,5$, find the total distance travelled over $[0,6]$.\soln
$|7-0|+|-25-7|+|-18-(-25)|=7+32+7$.\\[3pt]\textbf{Conclusion:} total distance $=46$.` },
      { t: "Projectile", body: r`A ball's height is $s(t)=-5t^2+22t+3$. Find its maximum height and the time it lands (2 d.p.).\soln
$v(t)=-10t+22=0\Rightarrow t=2.2$; $s(2.2)=27.2$. Landing: $-5t^2+22t+3=0\Rightarrow t=\dfrac{-22\pm\sqrt{484+60}}{-10}$.\\[3pt]\textbf{Conclusion:} max height $27.2$ m at $t=2.2$ s; lands at $t\approx4.53$ s.` },
      { t: "Acceleration at a point of maximum velocity", body: r`$s(t)=-t^3+6t^2$ for $t\geq0$. Find the time when velocity is maximized, and the velocity there.\soln
$v(t)=-3t^2+12t$; velocity is maximized where $a(t)=v'(t)=-6t+12=0\Rightarrow t=2$.\\[3pt]\textbf{Conclusion:} at $t=2$, $v(2)=-12+24=12$ (this is the maximum velocity, since $a$ changes from $+$ to $-$ there).` },
      { t: "Interpreting a negative acceleration with positive velocity", body: r`A car has $v(t)=40-2t$ m/s and $a(t)=-2$ m/s$^2$ for $0\leq t\leq20$. Describe its motion throughout this interval.\soln
$v(t)>0$ throughout (from 40 down to 0), and $a(t)=-2<0$ constantly --- same direction of motion (forward) the whole time, but constantly decelerating.\\[3pt]\textbf{Conclusion:} the car moves forward the entire time while continuously slowing down, coming to rest exactly at $t=20$.` },
      { t: "Average velocity vs instantaneous velocity", body: r`$s(t)=t^2+2t$. Find the average velocity over $[1,4]$ and compare to the instantaneous velocity at $t=2.5$ (the interval's midpoint).\soln
Average: $\dfrac{s(4)-s(1)}{4-1}=\dfrac{24-3}{3}=7$. Instantaneous: $v(t)=2t+2$, $v(2.5)=7$.\\[3pt]\textbf{Conclusion:} they're equal here (7 m/s both ways) --- a special feature of this specific quadratic position function.` },
      { t: "Total distance requiring three intervals", body: r`$s(t)=t^3-9t^2+15t$ (from Example 1) for $0\leq t\leq6$; using $s(0)=0$, $s(1)=7$, $s(5)=-25$, $s(6)=-18$, verify the total distance found earlier by re-deriving each leg.\soln
Leg 1 ($[0,1]$): $|7-0|=7$. Leg 2 ($[1,5]$): $|-25-7|=32$. Leg 3 ($[5,6]$): $|-18-(-25)|=7$.\\[3pt]\textbf{Conclusion:} total $=7+32+7=46$, matching Example 3.` },
      { t: "Application --- rocket ascent and descent", body: r`A model rocket's height is $s(t)=-5t^2+40t$. Find its maximum height, when it lands, and its speed at landing.\soln
$v(t)=-10t+40=0\Rightarrow t=4$; $s(4)=80$ m (max height). Landing: $-5t^2+40t=0\Rightarrow t(-5t+40)=0\Rightarrow t=8$.\\[3pt]\textbf{Conclusion:} max height $80$ m at $t=4$ s; lands at $t=8$ s with speed $|v(8)|=|-80+40|=40$ m/s.` },
    ],
    questions: [
      { ask: r`$s(t)=t^3-12t^2+36t$. Find $v(t)$ and $a(t)$, then evaluate both at $t=2$.` },
      { ask: r`Using the same $s(t)$, find every time the particle is at rest.` },
      { ask: r`Determine whether the particle is speeding up or slowing down at $t=1$ (using $v(t)=3t^2-24t+36$, $a(t)=6t-24$).` },
      { ask: r`A ball's height is $s(t)=-5t^2+16t+2$; find its maximum height and when it occurs.` },
      { ask: r`For the ball above, find the time it lands (2 d.p.) and its velocity on impact.`, challenge: true, ws: "3.4cm" },
      { ask: r`Given $s(0)=0$, $s(2)=18$, $s(4)=10$, $s(6)=30$ for a particle reversing direction at $t=2,4$, find the total distance travelled over $[0,6]$.`, challenge: true, ws: "3.2cm" },
      { ask: r`$s(t)=-t^3+9t^2$ for $t\geq0$; find the time velocity is maximized, and the velocity there.` },
      { ask: r`A car has $v(t)=30-3t$ m/s for $0\leq t\leq10$; describe its motion (direction and speeding up/slowing down) throughout.` },
      { ask: r`$s(t)=t^2+4t$; find the average velocity over $[0,3]$ and compare to the instantaneous velocity at $t=1.5$.` },
      { ask: r`A model rocket's height is $s(t)=-5t^2+60t$; find its maximum height, landing time, and landing speed.`, challenge: true, ws: "3.4cm" },
      { ask: r`$s(t)=t^3-6t^2+9t$ for $0\leq t\leq5$; given it reverses direction at $t=1,3$ with $s(0)=0,s(1)=4,s(3)=0,s(5)=20$, find the total distance travelled.`, challenge: true, ws: "3.2cm" },
      { ask: r`A particle's velocity is $v(t)=6t^2-24t$; find when acceleration is zero, and state what this tells you about velocity at that instant.`, challenge: true, ws: "3.2cm" },
      { ask: r`A car decelerates from $v(0)=50$ m/s at a constant $a=-5$ m/s$^2$; find when it stops and the distance travelled by then (integrate mentally via average velocity, or use $s(t)=50t-2.5t^2$).`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$v(t)=3t^2-24t+36$, $a(t)=6t-24$; $v(2)=12-48+36=0$, $a(2)=-12$`,
      r`$3(t-2)(t-6)=0$: $t=2,6$`,
      r`$v(1)=15>0$, $a(1)=-18<0$: opposite signs, so slowing down`,
      r`$v=-10t+16=0\Rightarrow t=1.6$; $s(1.6)=14.8$ m`,
      r`$-5t^2+16t+2=0\Rightarrow t=\dfrac{-16\pm\sqrt{256+40}}{-10}\approx4.32$ s; $v(4.32)=-10(4.32)+16\approx-27.2$ m/s`,
      r`$|18-0|+|10-18|+|30-10|=18+8+20=46$`,
      r`$v(t)=-3t^2+18t$; max velocity where $a(t)=-6t+18=0\Rightarrow t=3$; $v(3)=-27+54=27$`,
      r`$v(t)>0$ throughout (30 down to 0), $a(t)=-3<0$ constantly: moves forward the whole time while continuously slowing, stopping at $t=10$`,
      r`average $=\dfrac{s(3)-s(0)}{3}=\dfrac{21-0}{3}=7$; $v(t)=2t+4$, $v(1.5)=7$: equal`,
      r`$v(t)=-10t+60=0\Rightarrow t=6$, $s(6)=180$ m (max); landing: $t(-5t+60)=0\Rightarrow t=12$; landing speed $|v(12)|=|-120+60|=60$ m/s`,
      r`$|4-0|+|0-4|+|20-0|=4+4+20=28$`,
      r`$a(t)=12t-24=0\Rightarrow t=2$; this is when velocity is at a turning point (a local min or max of $v(t)$, i.e.\ the instant acceleration itself changes sign)`,
      r`stops when $v(t)=50-5t=0\Rightarrow t=10$ s; distance $s(10)=500-250=250$ m`,
    ],
  },
];
