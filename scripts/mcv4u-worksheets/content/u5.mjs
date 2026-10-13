// MCV4U Unit 5 worksheets — Applications of Derivatives.
const r = String.raw;
const U = "5: Applications of Derivatives";

export default [
  {
    code: "5.1", unit: U, title: "Optimization",
    intro: r`Write the quantity to optimize, reduce it to one variable using the constraint, solve $Q'=0$, and verify.`,
    ideas: [r`Define a variable; write $Q$.`, r`Use the constraint to make $Q$ one-variable; state the domain.`, r`Solve $Q'=0$; verify with the 1st/2nd derivative test.`],
    examples: [
      { t: "Max area, fixed perimeter", body: r`A pen uses 40 m of fence. Maximize the area.\soln
\textbf{Step 1 (define a variable and write the constraint):} let the width be $x$; since $2x+2y=40$, the length is $y=20-x$.\\[3pt]
\textbf{Step 2 (write the quantity to optimize, in one variable):} $A(x)=x(20-x)$.\\[3pt]
\textbf{Step 3 (differentiate and solve $A'=0$):} $A'(x)=20-2x=0\Rightarrow x=10$.\\[3pt]
\textbf{Step 4 (verify it's a max):} $A''(x)=-2<0$, so concave down --- a maximum.\\[3pt]
\textbf{Conclusion:} a $10\times10$ square, giving maximum area $100$ m$^2$:` + r`\eplot{0}{20}{0}{120}{\addplot[exblue,very thick,domain=0:20]{x*(20-x)};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(10,100)};}` },
      { t: "Wall on one side", body: r`Only 3 sides fenced with 20 m. Maximize the area.\soln
\textbf{Step 1 (define a variable and the constraint):} let $x$ be each of the two equal sides perpendicular to the wall; the constraint is $2x+y=20$, so $y=20-2x$.\\[3pt]
\textbf{Step 2 (write $A$ in one variable):} $A(x)=x(20-2x)$.\\[3pt]
\textbf{Step 3 (differentiate and solve $A'=0$):} $A'(x)=20-4x=0\Rightarrow x=5$.\\[3pt]
\textbf{Step 4 (find the other dimension and the area):} $y=20-10=10$; $A=5(10)=50$.\\[3pt]
\textbf{Conclusion:} maximum area $50$ m$^2$, with the fenced sides $5$ m and $10$ m.` },
      { t: "Minimize a sum", body: r`For $x>0$, minimize $f(x)=x+\dfrac{16}{x}$.\soln
\textbf{Step 1 (differentiate):} $f'(x)=1-\dfrac{16}{x^2}$.\\[3pt]
\textbf{Step 2 (set $f'=0$ and solve):} $1=\dfrac{16}{x^2}\Rightarrow x^2=16\Rightarrow x=4$ (since $x>0$).\\[3pt]
\textbf{Step 3 (verify it's a minimum):} $f''(x)=\dfrac{32}{x^3}>0$ for $x>0$, so concave up --- a minimum.\\[3pt]
\textbf{Step 4 (find the minimum value):} $f(4)=4+\dfrac{16}{4}=4+4$.\\[3pt]
\textbf{Conclusion:} minimum value $8$, at $x=4$.` },
      { t: "Max-volume open box", body: r`Cut side-$x$ squares from a $12\times12$ sheet; fold into an open box. Maximize the volume.\soln
\textbf{Step 1 (set up the dimensions):} folding up flaps of size $x$ leaves a base of side $12-2x$ and height $x$.\\[3pt]
\textbf{Step 2 (write $V$ in one variable):} $V(x)=x(12-2x)^2$.\\[3pt]
\textbf{Step 3 (differentiate using the product rule with the chain rule):} $V'(x)=(12-2x)^2+x\cdot2(12-2x)(-2)=(12-2x)[(12-2x)-4x]=(12-2x)(12-6x)$.\\[3pt]
\textbf{Step 4 (solve $V'=0$ within the valid domain $0<x<6$):} $12-6x=0\Rightarrow x=2$ (the factor $12-2x=0$ gives $x=6$, an endpoint with zero volume).\\[3pt]
\textbf{Step 5 (compute the volume):} $V(2)=2(8)^2=2(64)$.\\[3pt]
\textbf{Conclusion:} maximum volume $128$ cm$^3$, at $x=2$.` },
      { t: "Maximum profit", body: r`Maximize $P(x)=-2x^2+40x-100$.\soln
\textbf{Step 1 (differentiate):} $P'(x)=-4x+40$.\\[3pt]
\textbf{Step 2 (set $P'=0$ and solve):} $-4x+40=0\Rightarrow x=10$.\\[3pt]
\textbf{Step 3 (verify it's a max):} $P''(x)=-4<0$, so concave down --- a maximum.\\[3pt]
\textbf{Step 4 (find the maximum value):} $P(10)=-2(100)+400-100=-200+400-100$.\\[3pt]
\textbf{Conclusion:} maximum profit $100$, at $x=10$.` },
      { t: "Max product", body: r`Two positive numbers sum to 12. Maximize the product.\soln
\textbf{Step 1 (define variables using the constraint):} let the numbers be $x$ and $12-x$.\\[3pt]
\textbf{Step 2 (write the product):} $P(x)=x(12-x)$.\\[3pt]
\textbf{Step 3 (differentiate and solve $P'=0$):} $P'(x)=12-2x=0\Rightarrow x=6$.\\[3pt]
\textbf{Step 4 (find the product):} both numbers are $6$, so $P=6(6)$.\\[3pt]
\textbf{Conclusion:} maximum product $36$, when both numbers equal $6$.` },
      { t: "Max area", body: r`Maximize the area of a rectangle with 60 m of fence.\soln
\textbf{Step 1 (define a variable and the constraint):} let the width be $x$; since $2x+2y=60$, $y=30-x$.\\[3pt]
\textbf{Step 2 (write $A$ in one variable and optimize):} $A(x)=x(30-x)$, $A'(x)=30-2x=0\Rightarrow x=15$.\\[3pt]
\textbf{Step 3 (find the dimensions and area):} $y=30-15=15$; $A=15(15)$.\\[3pt]
\textbf{Conclusion:} a $15\times15$ square, giving maximum area $225$ m$^2$.` },
      { t: "Minimize a sum", body: r`For $x>0$, minimize $f(x)=x+\dfrac{9}{x}$.\soln
\textbf{Step 1 (differentiate):} $f'(x)=1-\dfrac{9}{x^2}$.\\[3pt]
\textbf{Step 2 (set $f'=0$ and solve):} $x^2=9\Rightarrow x=3$ (since $x>0$).\\[3pt]
\textbf{Step 3 (find the minimum value):} $f(3)=3+\dfrac93=3+3$.\\[3pt]
\textbf{Conclusion:} minimum value $6$, at $x=3$.` },
      { t: "Maximum value", body: r`Maximize $P(x)=-x^2+10x$.\soln
\textbf{Step 1 (differentiate):} $P'(x)=-2x+10$.\\[3pt]
\textbf{Step 2 (set $P'=0$ and solve):} $-2x+10=0\Rightarrow x=5$.\\[3pt]
\textbf{Step 3 (find the maximum value):} $P(5)=-25+50$.\\[3pt]
\textbf{Conclusion:} maximum value $25$, at $x=5$.` },
    ],
    questions: [
      { ask: r`Two positive numbers sum to 20. Maximize the product.` },
      { ask: r`Maximize the area of a rectangle with 80 m of fence.` },
      { ask: r`For $x>0$, minimize $f(x)=x+\dfrac{25}{x}$.` },
      { ask: r`Maximize $P(x)=-x^2+8x$.` },
      { ask: r`A 3-sided pen uses 40 m of fence. Maximize the area.` },
      { ask: r`Two positive numbers sum to 30. Maximize the product.` },
      { ask: r`For $x>0$, minimize $f(x)=x+\dfrac{4}{x}$.` },
      { ask: r`Maximize $P(x)=-3x^2+30x$.` },
      { ask: r`Cut side-$x$ squares from a $6\times6$ sheet for an open box. Find $x$ that maximizes the volume.`, ws: "2.4cm" },
      { ask: r`Maximize the area of a rectangle with 100 m of fence.` },
      { ask: r`For $x>0$, minimize $f(x)=x+\dfrac1{x}$.` },
      { ask: r`Maximize $P(x)=-2x^2+12x-5$.` },
      { ask: r`A farmer has 240 m of fence to make two identical adjacent rectangular pens (so three lengths of fence run one way). Maximize the total area.`, challenge: true, ws: "4cm" },
    ],
    answers: [r`$10,10$; product $100$`, r`$20\times20$, $400$ m²`, r`$x=5$; min $10$`, r`$x=4$; $P=16$`, r`$10\times20$, $200$ m²`, r`$15,15$; product $225$`, r`$x=2$; min $4$`, r`$x=5$; $P=75$`, r`$x=1$; $V=16$`, r`$25\times25$, $625$ m²`, r`$x=1$; min $2$`, r`$x=3$; $P=13$`, r`width $x$, $3x+2L=240$; $A=x\cdot\tfrac{240-3x}{2}$, $x=40$, $A=2400$ m²`],
  },
  {
    code: "5.2", unit: U, title: "Related Rates",
    intro: r`Write an equation relating the quantities, differentiate both sides with respect to $t$, then substitute the instant and solve for the unknown rate.`,
    ideas: [r`Identify known/unknown rates.`, r`Relate the quantities; differentiate w.r.t. $t$ (chain rule).`, r`Substitute the instant's values; solve.`],
    examples: [
      { t: "Expanding circle", body: r`$\dfrac{dr}{dt}=2$ cm/s. Find $\dfrac{dA}{dt}$ at $r=5$.\soln
\textbf{Step 1 (write the relating equation):} $A=\pi r^2$.\\[3pt]
\textbf{Step 2 (differentiate both sides with respect to $t$, using the chain rule on $r^2$):} $\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}$.\\[3pt]
\textbf{Step 3 (substitute $r=5$ and $\frac{dr}{dt}=2$):} $\dfrac{dA}{dt}=2\pi(5)(2)$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dA}{dt}=20\pi\approx62.8$ cm$^2$/s.` },
      { t: "Sliding ladder", body: r`A 13 m ladder's base slides out at 2 m/s. Find the top's rate when the base is 5 m out.\soln
\textbf{Step 1 (write the relating equation, Pythagorean theorem):} $x^2+y^2=169$.\\[3pt]
\textbf{Step 2 (find $y$ at this instant):} $x=5\Rightarrow y=\sqrt{169-25}=\sqrt{144}=12$.\\[3pt]
\textbf{Step 3 (differentiate both sides with respect to $t$):} $2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$.\\[3pt]
\textbf{Step 4 (substitute known values and solve for $\frac{dy}{dt}$):} $2(5)(2)+2(12)\dfrac{dy}{dt}=0\Rightarrow\dfrac{dy}{dt}=-\dfrac{20}{24}$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dy}{dt}=-\dfrac56$ m/s (negative --- the top is sliding down):` + r`\rtri{5}{12}{$y$}{$x$}{$13$}` },
      { t: "Inflating balloon", body: r`$\dfrac{dV}{dt}=100$ cm³/s. Find $\dfrac{dr}{dt}$ at $r=5$.\soln
\textbf{Step 1 (write the relating equation):} $V=\tfrac43\pi r^3$.\\[3pt]
\textbf{Step 2 (differentiate both sides with respect to $t$):} $\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}$.\\[3pt]
\textbf{Step 3 (substitute $r=5$ and $\frac{dV}{dt}=100$):} $100=4\pi(25)\dfrac{dr}{dt}=100\pi\dfrac{dr}{dt}$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dr}{dt}=\dfrac1\pi$ cm/s.` },
      { t: "Growing square", body: r`A square's side grows at 3 cm/s. Find $\dfrac{dA}{dt}$ at $s=10$.\soln
\textbf{Step 1 (write the relating equation):} $A=s^2$.\\[3pt]
\textbf{Step 2 (differentiate both sides with respect to $t$):} $\dfrac{dA}{dt}=2s\dfrac{ds}{dt}$.\\[3pt]
\textbf{Step 3 (substitute $s=10$ and $\frac{ds}{dt}=3$):} $2(10)(3)$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dA}{dt}=60$ cm$^2$/s.` },
      { t: "Two cars", body: r`Car A north at 60, car B east at 80 km/h from a point. Find the rate the distance grows after 1 h.\soln
\textbf{Step 1 (write the relating equation):} if $a,b$ are the cars' distances travelled and $D$ the distance between them, $D^2=a^2+b^2$.\\[3pt]
\textbf{Step 2 (find the values after 1 h):} $a=60,\ b=80\Rightarrow D=\sqrt{60^2+80^2}=\sqrt{10000}=100$.\\[3pt]
\textbf{Step 3 (differentiate both sides with respect to $t$):} $2D\dfrac{dD}{dt}=2a\dfrac{da}{dt}+2b\dfrac{db}{dt}$.\\[3pt]
\textbf{Step 4 (substitute and solve for $\frac{dD}{dt}$):} $\dfrac{dD}{dt}=\dfrac{60(60)+80(80)}{100}=\dfrac{3600+6400}{100}$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dD}{dt}=100$ km/h.` },
      { t: "Expanding circle", body: r`$\dfrac{dr}{dt}=3$ cm/s. Find $\dfrac{dA}{dt}$ at $r=4$.\soln
\textbf{Step 1 (differentiate $A=\pi r^2$ with respect to $t$):} $\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}$.\\[3pt]
\textbf{Step 2 (substitute $r=4$, $\frac{dr}{dt}=3$):} $2\pi(4)(3)$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dA}{dt}=24\pi$ cm$^2$/s.` },
      { t: "Growing square", body: r`Side grows at 2 cm/s. Find $\dfrac{dA}{dt}$ at $s=6$.\soln
\textbf{Step 1 (differentiate $A=s^2$ with respect to $t$):} $\dfrac{dA}{dt}=2s\dfrac{ds}{dt}$.\\[3pt]
\textbf{Step 2 (substitute $s=6$, $\frac{ds}{dt}=2$):} $2(6)(2)$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dA}{dt}=24$ cm$^2$/s.` },
      { t: "Inflating balloon", body: r`$\dfrac{dV}{dt}=36\pi$ cm³/s. Find $\dfrac{dr}{dt}$ at $r=3$.\soln
\textbf{Step 1 (differentiate $V=\tfrac43\pi r^3$ with respect to $t$):} $\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}$.\\[3pt]
\textbf{Step 2 (substitute $r=3$, $\frac{dV}{dt}=36\pi$):} $36\pi=4\pi(9)\dfrac{dr}{dt}=36\pi\dfrac{dr}{dt}$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dr}{dt}=1$ cm/s.` },
      { t: "Sliding ladder", body: r`A 10 m ladder's base slides out at 1 m/s. Find the top's rate at base $=6$ m.\soln
\textbf{Step 1 (write the relating equation and find $y$):} $x^2+y^2=100$; at $x=6$, $y=\sqrt{100-36}=\sqrt{64}=8$.\\[3pt]
\textbf{Step 2 (differentiate with respect to $t$):} $2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$.\\[3pt]
\textbf{Step 3 (substitute and solve):} $2(6)(1)+2(8)\dfrac{dy}{dt}=0\Rightarrow\dfrac{dy}{dt}=-\dfrac{12}{16}$.\\[3pt]
\textbf{Conclusion:} $\dfrac{dy}{dt}=-\dfrac34$ m/s.` },
    ],
    questions: [
      { ask: r`A circle's radius grows at 5 cm/s. Find $\dfrac{dA}{dt}$ at $r=2$.` },
      { ask: r`A square's side grows at 4 cm/s. Find $\dfrac{dA}{dt}$ at $s=5$.` },
      { ask: r`A balloon fills at $\dfrac{dV}{dt}=48\pi$ cm³/s. Find $\dfrac{dr}{dt}$ at $r=2$.` },
      { ask: r`A 25 m ladder's base slides out at 3 m/s. Find the top's rate at base $=7$ m.`, ws: "2.4cm" },
      { ask: r`A circle's radius grows at 1 cm/s. Find $\dfrac{dA}{dt}$ at $r=10$.` },
      { ask: r`What's the first step after writing the relating equation?` },
      { ask: r`A square's area grows; side grows at 2 cm/s. Find $\dfrac{dA}{dt}$ at $s=8$.` },
      { ask: r`A balloon fills at $\dfrac{dV}{dt}=4\pi$ cm³/s. Find $\dfrac{dr}{dt}$ at $r=1$.` },
      { ask: r`Two cars: N at 30, E at 40 km/h. Rate the distance grows after 1 h?`, ws: "2.4cm" },
      { ask: r`A 5 m ladder's base slides out at 1 m/s. Find the top's rate at base $=3$ m.`, ws: "2.4cm" },
      { ask: r`What does a negative rate of change indicate?` },
      { ask: r`A circle's area grows at $20\pi$ cm²/s. Find $\dfrac{dr}{dt}$ at $r=5$ (use $\tfrac{dA}{dt}=2\pi r\tfrac{dr}{dt}$).` },
      { ask: r`Water fills a cylinder (radius 3) so the volume grows at $18\pi$ cm³/s. How fast is the height rising? ($V=\pi r^2 h$)`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$20\pi$ cm²/s`, r`$40$ cm²/s`, r`$48\pi=4\pi(4)\tfrac{dr}{dt}\Rightarrow3$ cm/s`, r`$y=24$; $-\tfrac{7(3)}{24}=-\tfrac78$ m/s`, r`$20\pi$ cm²/s`, r`differentiate w.r.t. $t$`, r`$32$ cm²/s`, r`$4\pi=4\pi\tfrac{dr}{dt}\Rightarrow1$ cm/s`, r`$D=50$; $\tfrac{30^2+40^2}{50}=50$ km/h`, r`$y=4$; $-\tfrac{3(1)}{4}=-\tfrac34$ m/s`, r`the quantity is decreasing`, r`$20\pi=2\pi(5)\tfrac{dr}{dt}\Rightarrow2$ cm/s`, r`$18\pi=9\pi\tfrac{dh}{dt}\Rightarrow\tfrac{dh}{dt}=2$ cm/s`],
  },
  {
    code: "5.3", unit: U, title: "Kinematics: Velocity & Acceleration",
    intro: r`$v=s'$, $a=v'=s''$, speed $=|v|$. At rest when $v=0$; speeding up when $v,a$ share a sign.`,
    ideas: [r`$v(t)=s'(t)$, $a(t)=s''(t)$.`, r`At rest: $v=0$; direction: sign of $v$.`, r`Speeding up: $v,a$ same sign; slowing: opposite.`],
    examples: [
      { t: "v and a", body: r`For $s(t)=t^2-4t$, find $v$ and $a$.\soln
\textbf{Step 1 (velocity is the derivative of position):} $v(t)=s'(t)=2t-4$.\\[3pt]
\textbf{Step 2 (acceleration is the derivative of velocity):} $a(t)=v'(t)=2$.\\[3pt]
\textbf{Conclusion:} $v(t)=2t-4$, $a(t)=2$. Velocity is the slope of position; at rest at the lowest point ($t=2$):` + r`\eplot{-1}{5}{-5}{6}{\addplot[exblue,very thick,domain=0:4.5]{x^2-4*x};\addplot[qorange,very thick,domain=0:4.5]{2*x-4};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(2,-4)};}` },
      { t: "At rest", body: r`When is $s(t)=t^2-4t$ at rest?\soln
\textbf{Step 1 (find $v(t)$):} $v(t)=2t-4$.\\[3pt]
\textbf{Step 2 (set $v=0$, since "at rest" means zero velocity):} $2t-4=0$.\\[3pt]
\textbf{Conclusion:} $t=2$ s.` },
      { t: "Multiple rest times", body: r`When is $s(t)=t^3-6t^2+9t$ at rest?\soln
\textbf{Step 1 (find $v(t)$):} $v(t)=3t^2-12t+9$.\\[3pt]
\textbf{Step 2 (set $v=0$ and factor):} $3(t^2-4t+3)=3(t-1)(t-3)=0$.\\[3pt]
\textbf{Conclusion:} at rest at $t=1$ and $t=3$.` },
      { t: "Direction & accel", body: r`Describe the motion of $s(t)=t^3-6t^2+9t$ at $t=0$.\soln
\textbf{Step 1 (find $v(t)$ and evaluate at $t=0$):} $v(t)=3t^2-12t+9\Rightarrow v(0)=9>0$, so the object is moving in the positive direction.\\[3pt]
\textbf{Step 2 (find $a(t)$ and evaluate at $t=0$):} $a(t)=6t-12\Rightarrow a(0)=-12<0$.\\[3pt]
\textbf{Step 3 (interpret):} positive velocity but negative acceleration means it's slowing down (decelerating) while still moving forward.\\[3pt]
\textbf{Conclusion:} at $t=0$ the object moves right ($v(0)=9>0$) while decelerating ($a(0)=-12<0$).` },
      { t: "Speeding up?", body: r`Is $s(t)=t^3-6t^2+9t$ speeding up at $t=4$?\soln
\textbf{Step 1 (evaluate $v(4)$):} $v(t)=3t^2-12t+9\Rightarrow v(4)=48-48+9=9>0$.\\[3pt]
\textbf{Step 2 (evaluate $a(4)$):} $a(t)=6t-12\Rightarrow a(4)=24-12=12>0$.\\[3pt]
\textbf{Step 3 (apply the rule: same sign means speeding up):} $v(4)$ and $a(4)$ are both positive.\\[3pt]
\textbf{Conclusion:} yes, speeding up at $t=4$.` },
      { t: "Velocity", body: r`For $s(t)=t^2-6t$, find $v(t)$.\soln
\textbf{Step 1 (differentiate $s(t)$):} $v(t)=s'(t)$.\\[3pt]
\textbf{Conclusion:} $v(t)=2t-6$.` },
      { t: "At rest", body: r`When is $s(t)=t^2-6t$ at rest?\soln
\textbf{Step 1 (find $v(t)$):} $v(t)=2t-6$.\\[3pt]
\textbf{Step 2 (set $v=0$ and solve):} $2t-6=0$.\\[3pt]
\textbf{Conclusion:} $t=3$.` },
      { t: "Acceleration", body: r`For $s(t)=t^3-3t^2$, find $a(t)$.\soln
\textbf{Step 1 (find $v(t)$):} $v(t)=3t^2-6t$.\\[3pt]
\textbf{Step 2 (differentiate $v(t)$ to get $a(t)$):} $a(t)=6t-6$.\\[3pt]
\textbf{Conclusion:} $a(t)=6t-6$.` },
      { t: "Max height", body: r`A projectile has $h(t)=-5t^2+20t$. When is it highest?\soln
\textbf{Step 1 (find $v(t)$):} $v(t)=h'(t)=-10t+20$.\\[3pt]
\textbf{Step 2 (set $v=0$, since the height is maximized when the velocity is momentarily zero):} $-10t+20=0$.\\[3pt]
\textbf{Conclusion:} $t=2$ s.` },
    ],
    questions: [
      { ask: r`For $s(t)=t^2-6t$, find $v(t)$.` },
      { ask: r`When is $s(t)=t^2-6t$ at rest?` },
      { ask: r`For $s(t)=t^3-3t^2$, find $a(t)$.` },
      { ask: r`A projectile has $h(t)=-5t^2+30t$. When is it highest?` },
      { ask: r`If $v>0$ and $a<0$, is the object speeding up or slowing down?` },
      { ask: r`For $s(t)=2t^2-8t$, find $v(t)$ and $a(t)$.` },
      { ask: r`When is $s(t)=t^3-6t^2+9t$ at rest?` },
      { ask: r`For $s(t)=t^3-3t^2$, when is the object at rest?` },
      { ask: r`At $t=0$, $s(t)=t^3-6t^2+9t$: which direction is it moving?` },
      { ask: r`Speed of $s(t)=t^2-4t$ at $t=0$?` },
      { ask: r`If $v<0$ and $a<0$, is the object speeding up or slowing down?` },
      { ask: r`Acceleration of $s(t)=t^2-4t$ (constant)?` },
      { ask: r`For $s(t)=t^3-6t^2+9t$, determine whether it is speeding up or slowing down at $t=2$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$2t-6$`, r`$t=3$`, r`$a=6t-6$`, r`$v=-10t+30=0\Rightarrow t=3$ s`, r`slowing down`, r`$v=4t-8$, $a=4$`, r`$t=1,3$`, r`$v=3t^2-6t=0\Rightarrow t=0,2$`, r`right ($v(0)=9>0$)`, r`$|v(0)|=|-4|=4$`, r`speeding up`, r`$2$`, r`$v(2)=-3<0$, $a(2)=0$ — at an instant of zero acceleration (neither)`],
  },
];
