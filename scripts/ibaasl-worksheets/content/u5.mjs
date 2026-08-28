// IB AA SL worksheets — Unit 5: Differential Calculus. Original problems.
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
    ],
    questions: [
      { ask: r`Evaluate $\displaystyle\lim_{x\to3}(2x^2-x+1)$.` },
      { ask: r`Evaluate $\displaystyle\lim_{x\to-4}\dfrac{x^2-16}{x+4}$.` },
      { ask: r`Evaluate $\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+25}-5}{x}$.` },
      { ask: r`Use first principles to find the derivative of $f(x)=x^2+7x$.` },
      { ask: r`Use first principles to find the derivative of $f(x)=4x^2-2x$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Evaluate $\displaystyle\lim_{x\to2}\dfrac{x^3-8}{x-2}$ by factoring the numerator as a difference of cubes.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`$16$`, r`$x-4\to-8$`, r`$\dfrac{1}{\sqrt{x+25}+5}\to\dfrac1{10}$`, r`$f'(x)=2x+7$`, r`$f'(x)=8x-2$`,
      r`$(x-2)(x^2+2x+4)/(x-2)=x^2+2x+4\to4+4+4=12$`,
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
    ],
    questions: [
      { ask: r`Differentiate $f(x)=8x^3-3x^2+2x-9$.` },
      { ask: r`Differentiate $f(x)=(x+4)(2x^2-3)$.` },
      { ask: r`Differentiate $f(x)=\dfrac{x^2}{3x+1}$.` },
      { ask: r`Differentiate $f(x)=(3x^2-1)^5$.` },
      { ask: r`Differentiate $f(x)=x^2(4x-1)^3$, factoring your answer.`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the equation of the tangent line to $f(x)=x^3-3x$ at $x=2$.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$f'(x)=24x^2-6x+2$`, r`$2(2x^2-3)+(x+4)(4x)=6x^2+16x-6$`,
      r`$\dfrac{2x(3x+1)-x^2(3)}{(3x+1)^2}=\dfrac{3x^2+2x}{(3x+1)^2}$`, r`$30x(3x^2-1)^4$`,
      r`$2x(4x-1)^3+x^2\cdot3(4x-1)^2\cdot4=x(4x-1)^2[2(4x-1)+12x]=x(4x-1)^2(20x-2)$`,
      r`$f'(x)=3x^2-3$, $f'(2)=9$; $f(2)=8-6=2$; $y-2=9(x-2)\Rightarrow y=9x-16$`,
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
    ],
    questions: [
      { ask: r`Differentiate $f(x)=7\cos x-e^x+3\ln x$.` },
      { ask: r`Differentiate $f(x)=e^{6x-1}$.` },
      { ask: r`Differentiate $f(x)=\ln(4x^3-x)$.` },
      { ask: r`Differentiate $f(x)=x^3\sin x$ using the product rule.` },
      { ask: r`Differentiate $f(x)=\dfrac{e^x}{x^2}$ using the quotient rule.`, challenge: true, ws: "3.2cm" },
      { ask: r`Using the quotient rule and $\csc x=\dfrac1{\sin x}$, derive $\dfrac{d}{dx}[\csc x]=-\csc x\cot x$.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$-7\sin x-e^x+\dfrac3x$`, r`$6e^{6x-1}$`, r`$\dfrac{12x^2-1}{4x^3-x}$`,
      r`$3x^2\sin x+x^3\cos x$`,
      r`$\dfrac{e^x(x^2)-e^x(2x)}{x^4}=\dfrac{e^x(x-2)}{x^3}$`,
      r`$\dfrac{0\cdot\sin x-1\cdot\cos x}{\sin^2x}=-\dfrac{\cos x}{\sin^2x}=-\dfrac1{\sin x}\cdot\dfrac{\cos x}{\sin x}=-\csc x\cot x$`,
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
    ],
    questions: [
      { ask: r`Find and classify the critical points of $f(x)=x^3-6x^2$.` },
      { ask: r`Confirm your classification using the second derivative test.` },
      { ask: r`Find the inflection point of $f(x)=x^3-6x^2$.` },
      { ask: r`Find and classify the critical points of $f(x)=x^4-32x$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Show that $f(x)=x^5$ has a critical point at $x=0$ that is not an extremum, using $f'(x)=5x^4$.` },
      { ask: r`Find all critical points and the inflection point of $f(x)=2x^3-9x^2+12x$, and state the intervals of concavity.`, challenge: true, ws: "3.6cm" },
    ],
    answers: [
      r`$f'=3x^2-12x=3x(x-4)$: max at $x=0$, min at $x=4$`, r`$f''=6x-12$; $f''(0)=-12<0$, $f''(4)=12>0$: confirmed`,
      r`$6x-12=0\Rightarrow x=2$, $f(2)=8-24=-16$: $(2,-16)$`,
      r`$f'=4x^3-32=4(x^3-8)=4(x-2)(x^2+2x+4)$; only real root $x=2$ (quadratic factor has no real roots); sign changes $-$ to $+$: local min at $x=2$`,
      r`$f'(x)=5x^4\geq0$ everywhere, no sign change: $x=0$ is a horizontal-tangent inflection, not an extremum`,
      r`$f'=6x^2-18x+12=6(x-1)(x-2)$: max at $x=1$, min at $x=2$; $f''=12x-18=0\Rightarrow x=1.5$ (inflection); concave down on $(-\infty,1.5)$, up on $(1.5,\infty)$`,
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
    ],
    questions: [
      { ask: r`A rectangle is enclosed by 200 m of fencing; find dimensions maximizing area.` },
      { ask: r`A pen must have area 900 m$^2$; find dimensions minimizing perimeter.` },
      { ask: r`An open box is cut from a $20\times20$ cm sheet with corner squares of side $x$; find $x$ maximizing volume.`, challenge: true, ws: "3.4cm" },
      { ask: r`A cylinder must hold volume $2000\pi$ cm$^3$; find the radius minimizing surface area.` },
      { ask: r`For the cylinder above, find the height and confirm $h=2r$ at the optimum.` },
      { ask: r`A farmer has 240 m of fencing for a rectangular field using an existing wall as one side (so only 3 sides need fencing); find the dimensions maximizing area.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$y=100-x$, $A'=100-2x=0$: $x=y=50$ m`, r`$y=900/x$, $x^2=900$: $x=y=30$ m`,
      r`$V=x(20-2x)^2$; $V'=(20-2x)(20-6x)$: $x=10$ (rejected) or $x=\tfrac{10}3$ cm`,
      r`$S=2\pi r^2+4000\pi/r$; $S'=4\pi r-4000\pi/r^2=0\Rightarrow r^3=1000\Rightarrow r=10$ cm`,
      r`$h=2000/100=20$; $2r=20=h$ confirmed`,
      r`Let $x$ = side perpendicular to wall, $240-2x$ = side parallel; $A=x(240-2x)=240x-2x^2$; $A'=240-4x=0\Rightarrow x=60$, parallel side $=120$ m`,
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
    ],
    questions: [
      { ask: r`$s(t)=t^3-12t^2+36t$. Find $v(t)$ and $a(t)$, then evaluate both at $t=2$.` },
      { ask: r`Using the same $s(t)$, find every time the particle is at rest.` },
      { ask: r`Determine whether the particle is speeding up or slowing down at $t=1$ (using $v(t)=3t^2-24t+36$, $a(t)=6t-24$).` },
      { ask: r`A ball's height is $s(t)=-5t^2+16t+2$; find its maximum height and when it occurs.` },
      { ask: r`For the ball above, find the time it lands (2 d.p.) and its velocity on impact.`, challenge: true, ws: "3.4cm" },
      { ask: r`Given $s(0)=0$, $s(2)=18$, $s(4)=10$, $s(6)=30$ for a particle reversing direction at $t=2,4$, find the total distance travelled over $[0,6]$.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$v(t)=3t^2-24t+36$, $a(t)=6t-24$; $v(2)=12-48+36=0$, $a(2)=-12$`,
      r`$3(t-2)(t-6)=0$: $t=2,6$`,
      r`$v(1)=15>0$, $a(1)=-18<0$: opposite signs, so slowing down`,
      r`$v=-10t+16=0\Rightarrow t=1.6$; $s(1.6)=14.8$ m`,
      r`$-5t^2+16t+2=0\Rightarrow t=\dfrac{-16\pm\sqrt{256+40}}{-10}\approx4.32$ s; $v(4.32)=-10(4.32)+16\approx-27.2$ m/s`,
      r`$|18-0|+|10-18|+|30-10|=18+8+20=46$`,
    ],
  },
];
