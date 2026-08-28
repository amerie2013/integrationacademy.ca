// IB AA SL worksheets — Unit 6: Integral Calculus. Original problems.
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
    ],
    questions: [
      { ask: r`Find $\displaystyle\int(15x^4-8x+2)\,dx$.` },
      { ask: r`Given $f'(x)=6x^2+1$, $f(1)=4$, find $f(x)$.` },
      { ask: r`Find $\displaystyle\int(2x+7)^4\,dx$.` },
      { ask: r`Find $\displaystyle\int\dfrac{9x^3-6x}{3x}\,dx$.` },
      { ask: r`A particle has $a(t)=6t-4$, $v(0)=0$, $s(0)=2$; find $s(t)$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Find $\displaystyle\int(3x-2)^3\,dx$, and check your answer by differentiating it.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$3x^5-4x^2+2x+C$`, r`$f(x)=2x^3+x+C$; $4=2+1+C\Rightarrow C=1$: $f(x)=2x^3+x+1$`,
      r`$\dfrac{(2x+7)^5}{10}+C$`, r`simplify to $3x^2-2$: $x^3-2x+C$`,
      r`$v(t)=3t^2-4t$; $s(t)=t^3-2t^2+2$`,
      r`$\dfrac{(3x-2)^4}{12}+C$; differentiating gives $\dfrac{4(3x-2)^3\cdot3}{12}=(3x-2)^3$, matching the original integrand`,
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
    ],
    questions: [
      { ask: r`Evaluate $\displaystyle\int_0^3(4x+1)\,dx$.` },
      { ask: r`Find the area under $f(x)=16-x^2$ between $x=-4$ and $x=4$.` },
      { ask: r`Find the total (unsigned) area between $f(x)=x^2-4x$ and the $x$-axis on $[0,5]$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Given $\int_2^{10}f\,dx=40$ and $\int_6^{10}f\,dx=22$, find $\int_2^6f\,dx$.` },
      { ask: r`A tank's flow rate is $r(t)=12-4t$ L/min for $0\leq t\leq5$; find the net volume change over this interval.` },
      { ask: r`Find the total (unsigned) area between $f(x)=x^2-2x-3$ and the x-axis on $[-2,4]$ (factor to find the intercepts first).`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$[2x^2+x]_0^3=18+3=21$`, r`$[16x-x^3/3]_{-4}^4=(64-64/3)-(-64+64/3)=\tfrac{256}3$`,
      r`intercepts $0,4$; $\int_0^4(x^2-4x)dx=[\tfrac{x^3}3-2x^2]_0^4=\tfrac{64}3-32=-\tfrac{32}3$; $\int_4^5(x^2-4x)dx=(\tfrac{125}3-50)-(\tfrac{64}3-32)=\tfrac{61}3-18=\tfrac73$; total $=\tfrac{32}3+\tfrac73=13$`,
      r`$40-22=18$`,
      r`$[12t-2t^2]_0^5=60-50=10$ L`,
      r`intercepts $x=-1,3$; $\int_{-2}^{-1}(x^2-2x-3)dx=(-\tfrac13-1+3)-(-\tfrac83-4+6)=\tfrac53-(-\tfrac23)=\tfrac73$; $\int_{-1}^3(\cdot)dx=(9-9-9)-(-\tfrac13-1+3)=-9-\tfrac53=-\tfrac{32}3$; $\int_3^4(\cdot)dx=(\tfrac{64}3-16-12)-(9-9-9)=-\tfrac83+9=\tfrac{19}3$; total $=\tfrac73+\tfrac{32}3+\tfrac{19}3=\tfrac{58}3$`,
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
    ],
    questions: [
      { ask: r`Find $\displaystyle\int(4\sin x-e^x)\,dx$.` },
      { ask: r`Find $\displaystyle\int e^{5x-3}\,dx$.` },
      { ask: r`Find $\displaystyle\int\sin(2x+\pi/3)\,dx$.` },
      { ask: r`Find $\displaystyle\int\dfrac{1}{5x+2}\,dx$.` },
      { ask: r`Evaluate $\displaystyle\int_0^{\pi}(2\cos x-\sin x)\,dx$ exactly.`, challenge: true, ws: "3.2cm" },
      { ask: r`Find $\displaystyle\int(e^{3x}-\cos(2x)+5)\,dx$.` },
    ],
    answers: [
      r`$-4\cos x-e^x+C$`, r`$\dfrac{e^{5x-3}}{5}+C$`, r`$-\dfrac{\cos(2x+\pi/3)}{2}+C$`, r`$\dfrac{\ln|5x+2|}{5}+C$`,
      r`antideriv $2\sin x+\cos x$; at $\pi$: $0-1=-1$; at $0$: $0+1=1$; result $=-1-1=-2$`,
      r`$\dfrac{e^{3x}}{3}-\dfrac{\sin(2x)}{2}+5x+C$`,
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
    ],
    questions: [
      { ask: r`Find the area enclosed between $f(x)=12-x^2$ and $g(x)=x^2-4$.` },
      { ask: r`Find the area enclosed between $f(x)=x+3$ and $g(x)=x^2-3$.` },
      { ask: r`$v(t)=4t-16$ m/s. Find the displacement from $t=0$ to $t=6$.` },
      { ask: r`Using the same $v(t)$, find the total distance travelled from $t=0$ to $t=6$.` },
      { ask: r`A particle's velocity is $v(t)=3t^2-18t+24$ m/s; find the total distance travelled from $t=0$ to $t=5$ (first find when it's at rest).`, challenge: true, ws: "3.6cm" },
      { ask: r`Find the area enclosed between $f(x)=x^2-4x$ and $g(x)=-x^2+4x+8$.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$12-x^2=x^2-4\Rightarrow16=2x^2\Rightarrow x=\pm2\sqrt2$; area $=\int_{-2\sqrt2}^{2\sqrt2}(16-2x^2)dx=\left[16x-\tfrac{2x^3}3\right]$, evaluating gives $\dfrac{128\sqrt2}{3}\approx60.34$`,
      r`$x+3=x^2-3\Rightarrow x^2-x-6=0\Rightarrow(x-3)(x+2)=0$: $x=-2,3$; area $=\int_{-2}^3[(x+3)-(x^2-3)]dx=\int_{-2}^3(6+x-x^2)dx=\dfrac{125}6$`,
      r`$[2t^2-16t]_0^6=72-96=-24$ m`,
      r`$v=0$ at $t=4$; $\int_0^4(4t-16)dt=(32-64)-0=-32$; $\int_4^6(4t-16)dt=(72-96)-(32-64)=-24-(-32)=8$; total $=32+8=40$ m`,
      r`$v=0$ at $t=2,4$; $\int_0^2(3t^2-18t+24)dt=(8-36+48)-0=20$; $\int_2^4(\cdot)dt=(64-144+96)-20=16-20=-4$; $\int_4^5(\cdot)dt=(125-225+120)-16=20-16=4$; total $=20+4+4=28$ m`,
      r`$x^2-4x=-x^2+4x+8\Rightarrow2x^2-8x-8=0\Rightarrow x^2-4x-4=0\Rightarrow x=2\pm2\sqrt2$; area $=\int[(-x^2+4x+8)-(x^2-4x)]dx=\int(-2x^2+8x+8)dx$ over that interval $\approx45.25$`,
    ],
  },
];
