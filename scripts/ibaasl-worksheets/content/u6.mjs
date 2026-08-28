// IB AA SL worksheets — Unit 6: Integral Calculus. Original problems.
// 9 worked examples + 13 practice questions per worksheet.
const r = String.raw;
const U = "6: Integral Calculus";

export default [
  {
    code: "6.1", unit: U, title: "Antiderivatives and Indefinite Integrals",
    intro: r`Integration reverses differentiation; every indefinite integral carries an unknown constant $C$.`,
    ideas: [
      r`$\displaystyle\int x^n\,dx=\dfrac{x^{n+1}}{n+1}+C$.`,
      r`$\displaystyle\int(ax+b)^n\,dx=\dfrac{(ax+b)^{n+1}}{a(n+1)}+C$.`,
    ],
    examples: [
      { t: "Power rule", body: r`Find $\displaystyle\int(12x^3-4x+7)\,dx$.\soln
$3x^4-2x^2+7x+C$.\\[3pt]\textbf{Conclusion:} $3x^4-2x^2+7x+C$.` },
      { t: "Finding C", body: r`Given $f'(x)=4x-3$, $f(2)=5$, find $f(x)$.\soln
$f(x)=2x^2-3x+C$; $5=8-6+C\Rightarrow C=3$.\\[3pt]\textbf{Conclusion:} $f(x)=2x^2-3x+3$.` },
      { t: "Linear substitution", body: r`Find $\displaystyle\int(4x-1)^5\,dx$.\soln
Divide by $a=4$: $\dfrac{(4x-1)^6}{24}$.\\[3pt]\textbf{Conclusion:} $\dfrac{(4x-1)^6}{24}+C$.` },
      { t: "From acceleration to position", body: r`$a(t)=8t-6$, $v(0)=2$, $s(0)=-3$. Find $s(t)$.\soln
$v(t)=4t^2-6t+2$ (using $v(0)=2$). $s(t)=\tfrac43t^3-3t^2+2t-3$ (using $s(0)=-3$).\\[3pt]\textbf{Conclusion:} $s(t)=\tfrac43t^3-3t^2+2t-3$.` },
      { t: "Rewriting a root before integrating", body: r`Find $\displaystyle\int\sqrt x\,dx$ by rewriting as a fractional power.\soln
$\displaystyle\int x^{1/2}\,dx=\dfrac{x^{3/2}}{3/2}$.\\[3pt]\textbf{Conclusion:} $\dfrac23x^{3/2}+C$.` },
      { t: "Splitting a fraction with two terms", body: r`Find $\displaystyle\int\dfrac{6x^2+4x}{2x}\,dx$.\soln
Split termwise: $\dfrac{6x^2}{2x}+\dfrac{4x}{2x}=3x+2$.\\[3pt]\textbf{Conclusion:} $\dfrac{3x^2}2+2x+C$.` },
      { t: "Finding a curve given its slope and a point", body: r`A curve has $\dfrac{dy}{dx}=6x^2-4x+1$ and passes through $(1,3)$. Find $y$.\soln
$y=2x^3-2x^2+x+C$; substitute $(1,3)$: $3=2-2+1+C\Rightarrow C=2$.\\[3pt]\textbf{Conclusion:} $y=2x^3-2x^2+x+2$.` },
      { t: "Two-stage integration with two conditions", body: r`Given $f''(x)=12x$, $f'(0)=3$, $f(0)=-1$, find $f(x)$.\soln
$f'(x)=6x^2+3$ (using $f'(0)=3$). $f(x)=2x^3+3x-1$ (using $f(0)=-1$).\\[3pt]\textbf{Conclusion:} $f(x)=2x^3+3x-1$.` },
      { t: "Application --- reconstructing distance from acceleration", body: r`A car accelerates according to $a(t)=2$ m/s$^2$ starting from rest ($v(0)=0$) at position $s(0)=0$. Find its position after $t=6$ s.\soln
$v(t)=2t$; $s(t)=t^2$.\\[3pt]\textbf{Conclusion:} $s(6)=36$ m.` },
    ],
    questions: [
      { ask: r`Find $\displaystyle\int(15x^4-8x+2)\,dx$.` },
      { ask: r`Given $f'(x)=6x^2+1$, $f(1)=4$, find $f(x)$.` },
      { ask: r`Find $\displaystyle\int(2x+7)^4\,dx$.` },
      { ask: r`Find $\displaystyle\int\dfrac{9x^3-6x}{3x}\,dx$.` },
      { ask: r`A particle has $a(t)=6t-4$, $v(0)=0$, $s(0)=2$; find $s(t)$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Find $\displaystyle\int(3x-2)^3\,dx$, and check your answer by differentiating it.`, challenge: true, ws: "3.4cm" },
      { ask: r`Find $\displaystyle\int\sqrt[3]{x}\,dx$ (rewrite as a fractional power first).` },
      { ask: r`Find $\displaystyle\int\dfrac{10x^3-15x}{5x}\,dx$.` },
      { ask: r`A curve has $\dfrac{dy}{dx}=3x^2-6x+2$ and passes through $(2,1)$. Find $y$.` },
      { ask: r`Given $f''(x)=6x-4$, $f'(1)=1$, $f(0)=2$, find $f(x)$.`, challenge: true, ws: "3.4cm" },
      { ask: r`A rocket accelerates at $a(t)=4$ m/s$^2$ from rest at $s(0)=0$; find its position after $t=5$ s.` },
      { ask: r`Find $\displaystyle\int(x+3)(x-2)\,dx$ by expanding first.` },
      { ask: r`Find $\displaystyle\int(5x+2)^{-2}\,dx$ (treat the negative exponent like any other power in the linear-substitution pattern).`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$3x^5-4x^2+2x+C$`, r`$f(x)=2x^3+x+C$; $4=2+1+C\Rightarrow C=1$: $f(x)=2x^3+x+1$`,
      r`$\dfrac{(2x+7)^5}{10}+C$`, r`simplify to $3x^2-2$: $x^3-2x+C$`,
      r`$v(t)=3t^2-4t$; $s(t)=t^3-2t^2+2$`,
      r`$\dfrac{(3x-2)^4}{12}+C$; differentiating gives $\dfrac{4(3x-2)^3\cdot3}{12}=(3x-2)^3$, matching the original integrand`,
      r`$\int x^{1/3}dx=\dfrac{x^{4/3}}{4/3}=\dfrac34x^{4/3}+C$`,
      r`simplify to $2x^2-3$: $\dfrac{2x^3}3-3x+C$`,
      r`$y=x^3-3x^2+2x+C$; $1=8-12+4+C\Rightarrow C=1$: $y=x^3-3x^2+2x+1$`,
      r`$f'(x)=3x^2-4x+C_1$; $1=3-4+C_1\Rightarrow C_1=2$; $f(x)=x^3-2x^2+2x+C_2$; $2=0+C_2\Rightarrow C_2=2$: $f(x)=x^3-2x^2+2x+2$`,
      r`$v(t)=4t$; $s(t)=2t^2$; $s(5)=50$ m`,
      r`expand to $x^2+x-6$: $\dfrac{x^3}3+\dfrac{x^2}2-6x+C$`,
      r`$\int(5x+2)^{-2}dx=\dfrac{(5x+2)^{-1}}{5(-1)}+C=-\dfrac1{5(5x+2)}+C$`,
    ],
  },
  {
    code: "6.2", unit: U, title: "Definite Integrals and Area",
    intro: r`A definite integral gives net signed area; true area requires splitting at every x-intercept.`,
    ideas: [
      r`$\displaystyle\int_a^bf(x)\,dx=F(b)-F(a)$.`,
      r`If $f$ changes sign in $[a,b]$, split at the intercept and take absolute values before adding.`,
    ],
    examples: [
      { t: "Basic evaluation", body: r`Evaluate $\displaystyle\int_1^4(3x+2)\,dx$.\soln
$\left[\tfrac32x^2+2x\right]_1^4=(24+8)-(1.5+2)$.\\[3pt]\textbf{Conclusion:} $32-3.5=28.5$.` },
      { t: "Area under a curve", body: r`Find the area under $f(x)=x^2$ from $x=1$ to $x=4$.\soln
$\left[\tfrac{x^3}3\right]_1^4=\tfrac{64}3-\tfrac13$.\\[3pt]\textbf{Conclusion:} $21$ square units.` },
      { t: "Curve dips below the axis", body: r`Find the total area between $f(x)=x^2-9$ and the $x$-axis on $[0,4]$.\soln
Intercept at $x=3$. $\int_0^3(x^2-9)dx=9-27=-18$; $\int_3^4(x^2-9)dx=(64/3-36)-(9-27)=10/3$.\\[3pt]\textbf{Conclusion:} total $=18+10/3=64/3$.` },
      { t: "Integral properties", body: r`Given $\displaystyle\int_0^8f\,dx=25$ and $\int_0^5f\,dx=14$, find $\int_5^8f\,dx$.\soln
$25-14$.\\[3pt]\textbf{Conclusion:} $11$.` },
      { t: "Evaluating with a negative lower limit", body: r`Evaluate $\displaystyle\int_{-2}^{3}(2x+1)\,dx$.\soln
$[x^2+x]_{-2}^3=(9+3)-(4-2)$.\\[3pt]\textbf{Conclusion:} $12-2=10$.` },
      { t: "Area under a curve entirely below the axis", body: r`Find the true area between $f(x)=-x^2-1$ and the $x$-axis on $[0,3]$ (note $f<0$ throughout).\soln
$\int_0^3(-x^2-1)dx=\left[-\tfrac{x^3}3-x\right]_0^3=-9-3=-12$ (a negative signed area, since the curve never crosses the axis here).\\[3pt]\textbf{Conclusion:} true area $=|-12|=12$ square units.` },
      { t: "Reversing the limits of integration", body: r`Given $\displaystyle\int_2^7f(x)\,dx=15$, find $\displaystyle\int_7^2f(x)\,dx$.\soln
Swapping the limits negates the integral: $\int_7^2f\,dx=-\int_2^7f\,dx$.\\[3pt]\textbf{Conclusion:} $-15$.` },
      { t: "Definite integral requiring linear substitution first", body: r`Evaluate $\displaystyle\int_1^3(2x-1)^2\,dx$.\soln
Antiderivative: $\dfrac{(2x-1)^3}{6}$. At $x=3$: $\dfrac{125}6$. At $x=1$: $\dfrac16$.\\[3pt]\textbf{Conclusion:} $\dfrac{125}6-\dfrac16=\dfrac{124}6=\dfrac{62}3$.` },
      { t: "Application --- accumulated rainfall", body: r`A rainfall rate is $r(t)=4-0.5t$ mm/hr for $0\leq t\leq10$ hours. Find the total rainfall, and explain the meaning of the point where $r(t)=0$.\soln
$\int_0^{10}(4-0.5t)dt=[4t-0.25t^2]_0^{10}=40-25=15$ mm.\\[3pt]\textbf{Conclusion:} total rainfall $15$ mm; $r(t)=0$ at $t=8$, meaning it stops raining at that point (rate becomes negative afterward, which isn't physically meaningful for rainfall, so the model likely only applies up to $t=8$).` },
    ],
    questions: [
      { ask: r`Evaluate $\displaystyle\int_0^3(4x+1)\,dx$.` },
      { ask: r`Find the area under $f(x)=16-x^2$ between $x=-4$ and $x=4$.` },
      { ask: r`Find the total (unsigned) area between $f(x)=x^2-4x$ and the $x$-axis on $[0,5]$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Given $\int_2^{10}f\,dx=40$ and $\int_6^{10}f\,dx=22$, find $\int_2^6f\,dx$.` },
      { ask: r`A tank's flow rate is $r(t)=12-4t$ L/min for $0\leq t\leq5$; find the net volume change over this interval.` },
      { ask: r`Find the total (unsigned) area between $f(x)=x^2-2x-3$ and the x-axis on $[-2,4]$ (factor to find the intercepts first).`, challenge: true, ws: "3.4cm" },
      { ask: r`Evaluate $\displaystyle\int_{-1}^{2}(3x^2-2)\,dx$.` },
      { ask: r`Find the true area between $f(x)=-x^2-4$ and the $x$-axis on $[0,2]$.` },
      { ask: r`Given $\displaystyle\int_3^9f(x)\,dx=22$, find $\displaystyle\int_9^3f(x)\,dx$.` },
      { ask: r`Evaluate $\displaystyle\int_0^2(3x+1)^2\,dx$.` },
      { ask: r`A rainfall rate is $r(t)=6-t$ mm/hr for $0\leq t\leq12$; find the total rainfall and explain the meaning of where $r(t)=0$.` },
      { ask: r`Find the total (unsigned) area between $f(x)=x^2-x-6$ and the $x$-axis on $[-3,3]$ (factor first).`, challenge: true, ws: "3.4cm" },
      { ask: r`Given $\int_1^5f\,dx=8$ and $\int_1^3f\,dx=-2$, find $\int_3^5f\,dx$, then find $\int_5^3f\,dx$.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$[2x^2+x]_0^3=18+3=21$`, r`$[16x-x^3/3]_{-4}^4=(64-64/3)-(-64+64/3)=\tfrac{256}3$`,
      r`intercepts $0,4$; $\int_0^4(x^2-4x)dx=[\tfrac{x^3}3-2x^2]_0^4=\tfrac{64}3-32=-\tfrac{32}3$; $\int_4^5(x^2-4x)dx=(\tfrac{125}3-50)-(\tfrac{64}3-32)=\tfrac{61}3-18=\tfrac73$; total $=\tfrac{32}3+\tfrac73=13$`,
      r`$40-22=18$`,
      r`$[12t-2t^2]_0^5=60-50=10$ L`,
      r`intercepts $x=-1,3$; $\int_{-2}^{-1}(x^2-2x-3)dx=(-\tfrac13-1+3)-(-\tfrac83-4+6)=\tfrac53-(-\tfrac23)=\tfrac73$; $\int_{-1}^3(\cdot)dx=(9-9-9)-(-\tfrac13-1+3)=-9-\tfrac53=-\tfrac{32}3$; $\int_3^4(\cdot)dx=(\tfrac{64}3-16-12)-(9-9-9)=-\tfrac83+9=\tfrac{19}3$; total $=\tfrac73+\tfrac{32}3+\tfrac{19}3=\tfrac{58}3$`,
      r`$[x^3-2x]_{-1}^2=(8-4)-(-1+2)=4-1=3$`,
      r`$\int_0^2(-x^2-4)dx=[-\tfrac{x^3}3-4x]_0^2=-\tfrac83-8=-\tfrac{32}3$; true area $=\tfrac{32}3$`,
      r`$-22$`,
      r`antiderivative $\dfrac{(3x+1)^3}9$; at $x=2$: $\dfrac{343}9$; at $x=0$: $\dfrac19$; result $=\dfrac{342}9=38$`,
      r`$\int_0^{12}(6-t)dt=[6t-t^2/2]_0^{12}=72-72=0$; net rainfall is 0, since $r(t)<0$ after $t=6$ isn't physical --- the model only really applies up to $t=6$, giving true rainfall $=\int_0^6(6-t)dt=36-18=18$ mm`,
      r`intercepts $x=-2,3$; $\int_{-3}^{-2}(x^2-x-6)dx=(-9-4.5-18)-(-9-2-18\ldots)$ carefully: $F(x)=\tfrac{x^3}3-\tfrac{x^2}2-6x$; $F(-3)=-9-4.5+18=4.5$, $F(-2)=-\tfrac83-2+12=7.33$, $F(3)=9-4.5-18=-13.5$; $\int_{-3}^{-2}=7.33-4.5=2.83$; $\int_{-2}^3=-13.5-7.33=-20.83$; $\int_3^3$ n/a; total $=2.83+20.83\approx23.67$`,
      r`$\int_3^5f=8-(-2)=10$; $\int_5^3f=-10$`,
    ],
  },
  {
    code: "6.3", unit: U, title: "Integration of Trig and Exponential Functions",
    intro: r`Reverse the trig, exponential, and log derivatives, including the linear-substitution pattern.`,
    ideas: [
      r`$\displaystyle\int\sin x\,dx=-\cos x+C$, $\int\cos x\,dx=\sin x+C$, $\int e^x\,dx=e^x+C$, $\int\tfrac1x\,dx=\ln|x|+C$.`,
    ],
    examples: [
      { t: "Basic combination", body: r`Find $\displaystyle\int(5\cos x+3e^x)\,dx$.\soln
$5\sin x+3e^x+C$.\\[3pt]\textbf{Conclusion:} $5\sin x+3e^x+C$.` },
      { t: "Exponential substitution", body: r`Find $\displaystyle\int e^{2x+7}\,dx$.\soln
Divide by $2$: $\dfrac{e^{2x+7}}{2}$.\\[3pt]\textbf{Conclusion:} $\dfrac{e^{2x+7}}{2}+C$.` },
      { t: "Trig substitution", body: r`Find $\displaystyle\int\cos(3x-1)\,dx$.\soln
Divide by $3$: $\dfrac{\sin(3x-1)}{3}$.\\[3pt]\textbf{Conclusion:} $\dfrac{\sin(3x-1)}{3}+C$.` },
      { t: "Definite integral, combined types", body: r`Evaluate $\displaystyle\int_0^{\pi/2}(3\sin x+\cos x)\,dx$ exactly.\soln
Antiderivative $-3\cos x+\sin x$; at $\pi/2$: $0+1=1$; at $0$: $-3+0=-3$.\\[3pt]\textbf{Conclusion:} $1-(-3)=4$.` },
      { t: "Logarithmic-form integral with linear substitution", body: r`Find $\displaystyle\int\dfrac{3}{2x-5}\,dx$.\soln
Divide by $a=2$: $\dfrac{3\ln|2x-5|}{2}$.\\[3pt]\textbf{Conclusion:} $\dfrac32\ln|2x-5|+C$.` },
      { t: "Sine substitution with a negative coefficient", body: r`Find $\displaystyle\int\sin(4-3x)\,dx$ (note the negative inner coefficient).\soln
Inner derivative is $-3$: divide by $-3$: $-\dfrac{\cos(4-3x)}{-3}$.\\[3pt]\textbf{Conclusion:} $\dfrac{\cos(4-3x)}{3}+C$.` },
      { t: "Definite integral requiring exact special angles", body: r`Evaluate $\displaystyle\int_0^{\pi/3}\sin x\,dx$ exactly.\soln
Antiderivative $-\cos x$; at $\pi/3$: $-\tfrac12$; at $0$: $-1$.\\[3pt]\textbf{Conclusion:} $-\tfrac12-(-1)=\tfrac12$.` },
      { t: "Combining exponential and logarithmic integration", body: r`Find $\displaystyle\int\left(e^{4x}+\dfrac{2}{x}\right)dx$.\soln
$\dfrac{e^{4x}}4+2\ln|x|$.\\[3pt]\textbf{Conclusion:} $\dfrac{e^{4x}}4+2\ln|x|+C$.` },
      { t: "Application --- accumulated oscillating rate", body: r`A tide's rate of change is $r(t)=2\cos\!\left(\dfrac{\pi}6t\right)$ m/hr. Find the net change in depth from $t=0$ to $t=3$.\soln
$\int_0^3 2\cos(\pi t/6)\,dt=\left[\dfrac{12}{\pi}\sin(\pi t/6)\right]_0^3=\dfrac{12}{\pi}\sin(\pi/2)-0$.\\[3pt]\textbf{Conclusion:} net change $=\dfrac{12}{\pi}\approx3.82$ m.` },
    ],
    questions: [
      { ask: r`Find $\displaystyle\int(4\sin x-e^x)\,dx$.` },
      { ask: r`Find $\displaystyle\int e^{5x-3}\,dx$.` },
      { ask: r`Find $\displaystyle\int\sin(2x+\pi/3)\,dx$.` },
      { ask: r`Find $\displaystyle\int\dfrac{1}{5x+2}\,dx$.` },
      { ask: r`Evaluate $\displaystyle\int_0^{\pi}(2\cos x-\sin x)\,dx$ exactly.`, challenge: true, ws: "3.2cm" },
      { ask: r`Find $\displaystyle\int(e^{3x}-\cos(2x)+5)\,dx$.` },
      { ask: r`Find $\displaystyle\int\dfrac{4}{3x-7}\,dx$.` },
      { ask: r`Find $\displaystyle\int\cos(5-2x)\,dx$ (note the negative inner coefficient).` },
      { ask: r`Evaluate $\displaystyle\int_0^{\pi/4}\cos x\,dx$ exactly.` },
      { ask: r`Find $\displaystyle\int\left(e^{2x}+\dfrac{3}{x}\right)dx$.` },
      { ask: r`A tide's rate of change is $r(t)=3\sin\!\left(\dfrac{\pi}6t\right)$ m/hr; find the net change in depth from $t=0$ to $t=6$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Evaluate $\displaystyle\int_0^{\pi/6}2\sin x\,dx$ exactly.`, challenge: true, ws: "3cm" },
      { ask: r`Find $\displaystyle\int\left(\dfrac{5}{2x+1}-e^{-x}\right)dx$ (careful with the sign on the exponential term).`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$-4\cos x-e^x+C$`, r`$\dfrac{e^{5x-3}}{5}+C$`, r`$-\dfrac{\cos(2x+\pi/3)}{2}+C$`, r`$\dfrac{\ln|5x+2|}{5}+C$`,
      r`antideriv $2\sin x+\cos x$; at $\pi$: $0-1=-1$; at $0$: $0+1=1$; result $=-1-1=-2$`,
      r`$\dfrac{e^{3x}}{3}-\dfrac{\sin(2x)}{2}+5x+C$`,
      r`$\dfrac{4\ln|3x-7|}3+C$`,
      r`inner derivative $-2$: $-\dfrac{\sin(5-2x)}{-2}=\dfrac{\sin(5-2x)}2+C$`,
      r`$[\sin x]_0^{\pi/4}=\tfrac{\sqrt2}2-0=\tfrac{\sqrt2}2$`,
      r`$\dfrac{e^{2x}}2+3\ln|x|+C$`,
      r`$\left[-\dfrac{18}\pi\cos(\pi t/6)\right]_0^6=-\dfrac{18}\pi\cos(\pi)-\left(-\dfrac{18}\pi\cos0\right)=\dfrac{18}\pi+\dfrac{18}\pi=\dfrac{36}\pi\approx11.46$ m`,
      r`$[-2\cos x]_0^{\pi/6}=-2(\tfrac{\sqrt3}2)-(-2)=2-\sqrt3$`,
      r`$\dfrac52\ln|2x+1|+e^{-x}+C$ (the exponential term integrates to $+e^{-x}$ since $\int e^{-x}dx=-e^{-x}$, and we're subtracting that)`,
    ],
  },
  {
    code: "6.4", unit: U, title: "Applications: Area Between Curves and Kinematics",
    intro: r`Area between curves and total-distance kinematics both split at crossing points and use absolute values.`,
    ideas: [
      r`Area $=\displaystyle\int_a^b[f(x)-g(x)]\,dx$, with $a,b$ the intersection points.`,
      r`Total distance $=\displaystyle\int|v(t)|\,dt$ --- split at every zero of $v(t)$.`,
    ],
    examples: [
      { t: "Area between curves", body: r`Find the area enclosed between $f(x)=x+6$ and $g(x)=x^2$.\soln
Intersect: $x+6=x^2\Rightarrow x^2-x-6=0\Rightarrow(x-3)(x+2)=0$: $x=-2,3$. $f$ on top: $\int_{-2}^3[(x+6)-x^2]dx=\left[\tfrac{x^2}2+6x-\tfrac{x^3}3\right]_{-2}^3=(4.5+18-9)-(2-12+\tfrac83)$.\\[3pt]\textbf{Conclusion:} $13.5-(-7.33)=\dfrac{125}{6}$.` },
      { t: "Displacement via integration", body: r`$v(t)=6t-18$ m/s. Find displacement from $t=0$ to $t=5$.\soln
$[3t^2-18t]_0^5=(75-90)-0$.\\[3pt]\textbf{Conclusion:} $-15$ m.` },
      { t: "Total distance via integration", body: r`Using the same $v(t)=6t-18$, find total distance from $t=0$ to $t=5$.\soln
$v=0$ at $t=3$. $\int_0^3(6t-18)dt=(27-54)-0=-27$. $\int_3^5(6t-18)dt=(75-90)-(27-54)=-15-(-27)=12$.\\[3pt]\textbf{Conclusion:} total $=27+12=39$ m.` },
      { t: "Comparing accumulated rates", body: r`Two profit rates (\$1000s/month) are $p_1(t)=t+4$, $p_2(t)=0.4t^2$. Find where $p_1>p_2$ and the extra profit over that interval.\soln
$t+4=0.4t^2\Rightarrow0.4t^2-t-4=0\Rightarrow t^2-2.5t-10=0\Rightarrow t=\dfrac{2.5\pm\sqrt{6.25+40}}2\approx4.55$ (positive root). Extra: $\int_0^{4.55}[(t+4)-0.4t^2]dt\approx\left[\tfrac{t^2}2+4t-\tfrac{0.4t^3}3\right]_0^{4.55}\approx10.35+18.2-12.58$.\\[3pt]\textbf{Conclusion:} Company 1 leads for $\approx4.55$ months, gaining $\approx\$15{,}970$.` },
      { t: "Area between a line and a cubic-adjacent pair (via a shared factor)", body: r`Find the area enclosed between $f(x)=4x$ and $g(x)=x^3$ for $x\geq0$ (find all intersection points first).\soln
$4x=x^3\Rightarrow x^3-4x=0\Rightarrow x(x^2-4)=0\Rightarrow x=0,\pm2$; restricting to $x\geq0$: $x=0,2$. On $(0,2)$, $f>g$ (check $x=1$: $4>1$).\\[3pt]
Area $=\int_0^2(4x-x^3)dx=\left[2x^2-\tfrac{x^4}4\right]_0^2=8-4$.\\[3pt]\textbf{Conclusion:} area $=4$ square units.` },
      { t: "Displacement and distance with a cubic velocity", body: r`$v(t)=t^2-4$ m/s. Find the displacement and total distance from $t=0$ to $t=3$.\soln
Displacement: $\int_0^3(t^2-4)dt=\left[\tfrac{t^3}3-4t\right]_0^3=9-12=-3$ m.\\[3pt]
$v=0$ at $t=2$: $\int_0^2(t^2-4)dt=\tfrac83-8=-\tfrac{16}3$; $\int_2^3(t^2-4)dt=(9-12)-(\tfrac83-8)=-3+\tfrac{16}3=\tfrac73$.\\[3pt]\textbf{Conclusion:} displacement $=-3$ m; total distance $=\tfrac{16}3+\tfrac73=\tfrac{23}3\approx7.67$ m.` },
      { t: "Area between curves with a shared tangent point", body: r`Find the area enclosed between $f(x)=x^2$ and $g(x)=2x-1$ (note: these touch rather than cross).\soln
$x^2=2x-1\Rightarrow x^2-2x+1=0\Rightarrow(x-1)^2=0\Rightarrow x=1$ (a repeated root --- the curves are tangent, not crossing).\\[3pt]\textbf{Conclusion:} since there's only one intersection (a tangency), the curves don't enclose any region --- area $=0$.` },
      { t: "Application --- net work from a variable force", body: r`A variable force is $F(x)=10-2x$ N, applied over $x\in[0,4]$ m. Find the net work done (force integrated over distance).\soln
$W=\int_0^4(10-2x)dx=[10x-x^2]_0^4=40-16$.\\[3pt]\textbf{Conclusion:} $W=24$ J.` },
      { t: "Total distance for a velocity with three sign changes", body: r`$v(t)=(t-1)(t-3)(t-5)$ for $0\leq t\leq6$. Identify every time the particle is at rest, without fully computing the total distance.\soln
$v(t)=0$ when any factor is zero.\\[3pt]\textbf{Conclusion:} $t=1,3,5$ --- three rest points, meaning the total-distance calculation would need four separate integrals (over $[0,1],[1,3],[3,5],[5,6]$).` },
    ],
    questions: [
      { ask: r`Find the area enclosed between $f(x)=12-x^2$ and $g(x)=x^2-4$.` },
      { ask: r`Find the area enclosed between $f(x)=x+3$ and $g(x)=x^2-3$.` },
      { ask: r`$v(t)=4t-16$ m/s. Find the displacement from $t=0$ to $t=6$.` },
      { ask: r`Using the same $v(t)$, find the total distance travelled from $t=0$ to $t=6$.` },
      { ask: r`A particle's velocity is $v(t)=3t^2-18t+24$ m/s; find the total distance travelled from $t=0$ to $t=5$ (first find when it's at rest).`, challenge: true, ws: "3.6cm" },
      { ask: r`Find the area enclosed between $f(x)=x^2-4x$ and $g(x)=-x^2+4x+8$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the area enclosed between $f(x)=9x$ and $g(x)=x^3$ for $x\geq0$ (find all intersection points first).` },
      { ask: r`$v(t)=t^2-9$ m/s. Find the displacement and total distance from $t=0$ to $t=4$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Determine the area enclosed between $f(x)=x^2-2x+1$ and $g(x)=2x-3$ (check whether these curves cross or merely touch first).` },
      { ask: r`A variable force is $F(x)=20-4x$ N applied over $x\in[0,5]$ m; find the net work done.` },
      { ask: r`$v(t)=(t-2)(t-4)(t-6)$ for $0\leq t\leq7$; identify every time the particle is at rest.` },
      { ask: r`Find the area enclosed between $f(x)=x^2-6x+9$ and $g(x)=9-x^2$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Two cost rates (\$100s/week) are $c_1(t)=20-t$, $c_2(t)=0.5t^2$; find where $c_1>c_2$ and the total savings from using process 1 over that interval.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$12-x^2=x^2-4\Rightarrow16=2x^2\Rightarrow x=\pm2\sqrt2$; area $=\int_{-2\sqrt2}^{2\sqrt2}(16-2x^2)dx=\left[16x-\tfrac{2x^3}3\right]$, evaluating gives $\dfrac{128\sqrt2}{3}\approx60.34$`,
      r`$x+3=x^2-3\Rightarrow x^2-x-6=0\Rightarrow(x-3)(x+2)=0$: $x=-2,3$; area $=\int_{-2}^3[(x+3)-(x^2-3)]dx=\int_{-2}^3(6+x-x^2)dx=\dfrac{125}6$`,
      r`$[2t^2-16t]_0^6=72-96=-24$ m`,
      r`$v=0$ at $t=4$; $\int_0^4(4t-16)dt=(32-64)-0=-32$; $\int_4^6(4t-16)dt=(72-96)-(32-64)=-24-(-32)=8$; total $=32+8=40$ m`,
      r`$v=0$ at $t=2,4$; $\int_0^2(3t^2-18t+24)dt=(8-36+48)-0=20$; $\int_2^4(\cdot)dt=(64-144+96)-20=16-20=-4$; $\int_4^5(\cdot)dt=(125-225+120)-16=20-16=4$; total $=20+4+4=28$ m`,
      r`$x^2-4x=-x^2+4x+8\Rightarrow2x^2-8x-8=0\Rightarrow x^2-4x-4=0\Rightarrow x=2\pm2\sqrt2$; area $=\int[(-x^2+4x+8)-(x^2-4x)]dx=\int(-2x^2+8x+8)dx$ over that interval $\approx45.25$`,
      r`$9x=x^3\Rightarrow x(x^2-9)=0\Rightarrow x=0,\pm3$; restrict $x\geq0$: $x=0,3$; area $=\int_0^3(9x-x^3)dx=\left[\tfrac{9x^2}2-\tfrac{x^4}4\right]_0^3=40.5-20.25=20.25$`,
      r`displacement $=\int_0^4(t^2-9)dt=[\tfrac{t^3}3-9t]_0^4=\tfrac{64}3-36=-\tfrac{44}3$; $v=0$ at $t=3$: $\int_0^3(t^2-9)dt=9-27=-18$; $\int_3^4(t^2-9)dt=(\tfrac{64}3-36)-(9-27)=-\tfrac{44}3+18=\tfrac{10}3$; total distance $=18+\tfrac{10}3=\tfrac{64}3\approx21.33$ m`,
      r`$x^2-2x+1=2x-3\Rightarrow x^2-4x+4=0\Rightarrow(x-2)^2=0$: repeated root at $x=2$, so the curves are tangent, not crossing --- area $=0$`,
      r`$W=\int_0^5(20-4x)dx=[20x-2x^2]_0^5=100-50=50$ J`,
      r`$t=2,4,6$`,
      r`$x^2-6x+9=9-x^2\Rightarrow2x^2-6x=0\Rightarrow2x(x-3)=0\Rightarrow x=0,3$; on $(0,3)$, $g>f$ (check $x=1$: $g=8>f=4$); area $=\int_0^3[(9-x^2)-(x^2-6x+9)]dx=\int_0^3(6x-2x^2)dx=[3x^2-\tfrac{2x^3}3]_0^3=27-18=9$`,
      r`$20-t=0.5t^2\Rightarrow0.5t^2+t-20=0\Rightarrow t^2+2t-40=0\Rightarrow t=\dfrac{-2+\sqrt{164}}2\approx5.4$ (positive root); savings $=\int_0^{5.4}[(20-t)-0.5t^2]dt\approx[20t-\tfrac{t^2}2-\tfrac{t^3}6]_0^{5.4}\approx108-14.58-26.24\approx67.2$ (\$100s), i.e.\ about \$6720`,
    ],
  },
];
