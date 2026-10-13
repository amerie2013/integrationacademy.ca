// AP Calculus AB worksheets — Unit 4 (Derivatives in Context).
// Original problems throughout, different from those in the lessons, the
// question bank and the online free-response questions. Written in LaTeX;
// build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 4: Derivatives in Context";
const L = (to, v = "x") => `\\displaystyle\\lim_{${v}\\to ${to}}`;

const sheets = [
  // ───────────── 4.1 ─────────────
  {
    code: "4.1", title: "What a Derivative Means, in Words and Units", unit: UNIT,
    ideas: [
      r`$f'(a)$ is the \textbf{rate} at which $f$ is changing at the instant $x=a$. Its units are the units of $f$ per unit of $x$.`,
      r`A complete interpretation names the instant, the quantity, whether it is increasing or decreasing, the rate (as a positive number) and the units.`,
      r`If $f$ is itself a rate, $f'$ is a rate of change of a rate: for example litres per minute \emph{per minute}.`,
      r`A value and a rate give a nearby estimate: $f(a+h)\approx f(a)+f'(a)\,h$.`,
    ],
    examples: [
      { t: "Interpreting", q: r`The cost of producing $q$ kilograms of flour is $C(q)$ dollars. Interpret $C'(40)=3.5$.`, s: r`The units are dollars per kilogram, at the production level $q=40$.`, r: r`When 40 kg are being produced, the cost is increasing at 3.5 dollars per additional kilogram.` },
      { t: "Estimating", q: r`A plant has height $h(t)$ cm after $t$ weeks, with $h(6)=30$ and $h'(6)=2.5$. Estimate its height at 8 weeks.`, s: r`$h(8)\approx30+2.5(2)$.`, r: r`About 35 cm.` },
      { t: "A rate of a rate", q: r`A car's velocity is $v(t)$ metres per second at time $t$ seconds. State the units of $v'(3)$ and interpret $v'(3)=-1.2$.`, s: r`Metres per second per second.`, r: r`At $t=3$ seconds the velocity is decreasing at 1.2 metres per second each second.` },
    ],
    core: [
      r`The volume of water in a tank is $V$ litres at time $t$ hours. State the units of $\dfrac{dV}{dt}$.`,
      r`The temperature of a drink is $T(t)$ degrees Celsius after $t$ minutes. Interpret $T'(15)=-0.8$.`,
      r`Given $A(20)=150$ and $A'(20)=4$, estimate $A(22)$.`,
      r`What does $f'(5)<0$ tell you about $f$ at $x=5$?`,
    ],
    exam: [
      r`The revenue from selling $x$ items is $R(x)$ dollars. Interpret $R'(100)=1.5$.`,
      r`A car has $F(t)$ litres of fuel in its tank after $t$ hours of driving. Interpret $F'(2)=-7$.`,
      r`Gas flows into a cylinder at the rate $G(t)$ litres per minute. State the units of $G'(4)$ and interpret $G'(4)=0.3$.`,
      r`A patient's weight is $W(t)$ kg after $t$ weeks, with $W(10)=65$, $W'(10)=-0.5$ and $W''(10)=0.02$. Estimate $W(12)$, and say whether the weight loss is speeding up or slowing down at $t=10$.`,
    ],
    fr: {
      intro: r`The depth of snow on a field is $S(t)$ centimetres, where $t$ is the number of hours after midnight and $S$ is differentiable with a continuous derivative. It is known that $S(3)=12$, $S'(3)=1.8$ and $S'(9)=-0.6$.`,
      parts: [
        r`Using correct units, interpret $S'(3)=1.8$.`,
        r`Use a tangent line to estimate the depth of snow at $t=4$.`,
        r`Explain why there must be a time between $t=3$ and $t=9$ at which the depth of snow is neither increasing nor decreasing.`,
      ],
    },
    sol: {
      core: [
        r`Litres per hour.`,
        r`At $t=15$ minutes the temperature of the drink is decreasing at 0.8 degrees Celsius per minute.`,
        r`$150+4(2)=158$.`,
        r`$f$ is decreasing at $x=5$.`,
      ],
      exam: [
        r`When 100 items have been sold, revenue is increasing at 1.5 dollars per additional item.`,
        r`After 2 hours of driving, the amount of fuel in the tank is decreasing at 7 litres per hour.`,
        r`Litres per minute per minute. At $t=4$ minutes the rate at which gas flows in is increasing by 0.3 litres per minute each minute.`,
        r`$W(12)\approx65-0.5(2)=64$ kg. The rate $W'$ is negative and increasing (becoming less negative), so the weight loss is slowing down.`,
      ],
      fr: [
        r`At 3 a.m. the depth of snow is increasing at 1.8 centimetres per hour.`,
        r`$S(4)\approx12+1.8(1)=13.8$ cm.`,
        r`$S'$ is continuous with $S'(3)>0$ and $S'(9)<0$, so by the Intermediate Value Theorem $S'(c)=0$ for some $c$ between 3 and 9.`,
      ],
    },
  },

  // ───────────── 4.2 ─────────────
  {
    code: "4.2", title: "Motion Along a Line", unit: UNIT,
    ideas: [
      r`Velocity $v=x'$; acceleration $a=v'=x''$; speed $=|v|$.`,
      r`The particle is \textbf{at rest} when $v=0$ and \textbf{changes direction} when $v$ changes sign.`,
      r`Speed is increasing when $v$ and $a$ have the \textbf{same sign}, decreasing when they have opposite signs.`,
      r`For total distance, find the positions at the start, at each change of direction and at the end, and add the distances between them.`,
    ],
    examples: [
      { t: "Velocity and rest", q: r`A particle has position $x(t)=t^3-12t^2+36t$ for $t\ge0$. Find $v(t)$, $a(t)$ and the times at which it is at rest.`, s: r`$v(t)=3t^2-24t+36=3(t-2)(t-6)$ and $a(t)=6t-24$.`, r: r`At rest at $t=2$ and $t=6$.` },
      { t: "Speeding up or slowing down", q: r`For the same particle, is the speed increasing or decreasing at $t=3$?`, s: r`$v(3)=-9$ and $a(3)=-6$.`, r: r`Increasing: velocity and acceleration have the same sign.` },
      { t: "Total distance", q: r`For the same particle, find the total distance travelled for $0\le t\le7$.`, s: r`$x(0)=0$, $x(2)=32$, $x(6)=0$, $x(7)=7$. The distances are $32$, $32$ and $7$.`, r: r`$71$.` },
    ],
    core: [
      r`A particle has position $s(t)=t^2-8t+5$. Find its velocity.`,
      r`For the particle in Question 1, at what time is it at rest?`,
      r`For the particle in Question 1, find its acceleration.`,
      r`For the particle in Question 1, on what interval of $t\ge0$ is it moving in the negative direction?`,
    ],
    exam: [
      r`A particle has position $x(t)=t^3-3t^2$ for $t\ge0$. At what time does it change direction? Justify your answer.`,
      r`For the particle in Question 5, is the speed increasing or decreasing at $t=1.5$? Give a reason.`,
      r`For the particle in Question 5, find the total distance travelled for $0\le t\le3$.`,
      r`On a small moon, a ball thrown upward has height $h(t)=24t-4t^2$ metres after $t$ seconds. Find its maximum height and its velocity when it returns to the ground.`,
    ],
    fr: {
      intro: r`A particle moves along the $x$-axis with position $x(t)=2t^3-9t^2+12t+1$ for $t\ge0$.`,
      parts: [
        r`Find $v(t)$ and $a(t)$.`,
        r`On what interval is the particle moving to the left? Justify your answer.`,
        r`Find the total distance travelled by the particle for $0\le t\le3$.`,
      ],
    },
    sol: {
      core: [
        r`$v(t)=2t-8$.`,
        r`$t=4$.`,
        r`$a(t)=2$.`,
        r`$0\le t<4$, where $v(t)<0$.`,
      ],
      exam: [
        r`$v(t)=3t^2-6t=3t(t-2)$ changes from negative to positive at $t=2$.`,
        r`$v(1.5)=-2.25$ and $a(1.5)=6(1.5)-6=3$: opposite signs, so the speed is decreasing.`,
        r`$x(0)=0$, $x(2)=-4$, $x(3)=0$: $4+4=8$.`,
        r`$h'(t)=24-8t=0$ at $t=3$, so the maximum height is $h(3)=36$ m. It lands at $t=6$ with velocity $-24$ m/s.`,
      ],
      fr: [
        r`$v(t)=6t^2-18t+12$ and $a(t)=12t-18$.`,
        r`$v(t)=6(t-1)(t-2)<0$ for $1<t<2$.`,
        r`$x(0)=1$, $x(1)=6$, $x(2)=5$, $x(3)=10$: $5+1+5=11$.`,
      ],
    },
  },

  // ───────────── 4.3 ─────────────
  {
    code: "4.3", title: "Rates of Change Beyond Motion", unit: UNIT,
    ideas: [
      r`Any derivative is a rate: of area with respect to side length, of population with respect to time, of cost with respect to quantity.`,
      r`\textbf{Marginal} cost, revenue or profit means the derivative with respect to the number of items.`,
      r`Read the independent variable carefully. $\dfrac{dA}{dr}$ is a rate per unit of length, not per unit of time.`,
      r`A quantity stops increasing or decreasing where its derivative changes sign.`,
    ],
    examples: [
      { t: "Geometry", q: r`A square has side $s$ cm and area $A=s^2$. Find the rate of change of the area with respect to the side when $s=6$.`, s: r`$\dfrac{dA}{ds}=2s$.`, r: r`$12$ cm$^2$ per cm.` },
      { t: "Growth", q: r`A town has population $P(t)=1200e^{0.05t}$ after $t$ years. How fast is it growing at $t=0$?`, s: r`$P'(t)=60e^{0.05t}$.`, r: r`60 people per year.` },
      { t: "Marginal cost", q: r`The cost of making $x$ items is $C(x)=500+8x+0.02x^2$ dollars. Find the marginal cost when $x=150$.`, s: r`$C'(x)=8+0.04x$.`, r: r`14 dollars per item.` },
    ],
    core: [
      r`A circle has circumference $C=2\pi r$. Find $\dfrac{dC}{dr}$.`,
      r`A cube has edge $x$ and volume $V=x^3$. Find $\dfrac{dV}{dx}$ when $x=2$.`,
      r`A quantity is $Q(t)=100-4t^2$. Find $Q'(3)$.`,
      r`Pressure $P$ is measured in kilopascals and volume $V$ in litres. State the units of $\dfrac{dP}{dV}$.`,
    ],
    exam: [
      r`A population of insects is $N(t)=\dfrac{600}{1+2t}$ after $t$ weeks. Find $N'(2)$.`,
      r`The temperature of a metal plate is $T(t)=18+52e^{-0.05t}$ degrees Celsius after $t$ minutes. How fast is it cooling at $t=0$?`,
      r`The profit from selling $x$ items is $P(x)=30x-0.05x^2-200$ dollars. At what value of $x$ is the marginal profit zero?`,
      r`A cylinder has fixed height 10 cm and radius $r$ cm. Find the rate of change of its volume with respect to its radius when $r=3$.`,
    ],
    fr: {
      intro: r`The mass of a bacterial culture is $M(t)=40+10t-t^2$ grams for $0\le t\le8$ hours.`,
      parts: [
        r`Find $M'(2)$. Indicate units of measure.`,
        r`At what time is the mass of the culture greatest, and what is that mass?`,
        r`Find the average rate of change of the mass over $0\le t\le8$, and the time at which the instantaneous rate of change equals it.`,
      ],
    },
    sol: {
      core: [
        r`$2\pi$.`,
        r`$3x^2=12$.`,
        r`$Q'(t)=-8t$, so $Q'(3)=-24$.`,
        r`Kilopascals per litre.`,
      ],
      exam: [
        r`$N'(t)=-\dfrac{1200}{(1+2t)^2}$, so $N'(2)=-48$ insects per week.`,
        r`$T'(t)=-2.6e^{-0.05t}$, so it is cooling at 2.6 degrees Celsius per minute.`,
        r`$P'(x)=30-0.1x=0$ at $x=300$.`,
        r`$V=10\pi r^2$, so $\dfrac{dV}{dr}=20\pi r=60\pi$ cm$^3$ per cm.`,
      ],
      fr: [
        r`$M'(t)=10-2t$, so $M'(2)=6$ grams per hour.`,
        r`$M'(t)=0$ at $t=5$, where $M'$ changes from positive to negative. $M(5)=65$ grams.`,
        r`$\dfrac{M(8)-M(0)}{8}=\dfrac{56-40}{8}=2$ grams per hour. $10-2t=2$ at $t=4$.`,
      ],
    },
  },

  // ───────────── 4.4 ─────────────
  {
    code: "4.4", title: "Related Rates: Setting Up", unit: UNIT,
    ideas: [
      r`Name the changing quantities, and write the given and wanted rates as derivatives with respect to time, with signs.`,
      r`Write \textbf{one equation} that relates the quantities at every instant.`,
      r`Differentiate both sides with respect to $t$. Every changing quantity produces its own rate.`,
      r`Substitute the values for the instant in question \textbf{only after} differentiating.`,
    ],
    examples: [
      { t: "A sphere", q: r`The radius of a sphere changes with time. Relate $\dfrac{dV}{dt}$ to $\dfrac{dr}{dt}$.`, s: r`$V=\dfrac43\pi r^3$.`, r: r`$\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}$.` },
      { t: "A fixed hypotenuse", q: r`A right triangle has legs $x$ and $y$ and a hypotenuse of fixed length 10. Relate $\dfrac{dx}{dt}$ and $\dfrac{dy}{dt}$.`, s: r`$x^2+y^2=100$, so $2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$.`, r: r`$x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0$.` },
      { t: "Two changing factors", q: r`A triangle has base $x$ and height $y$, both changing. Find $\dfrac{dA}{dt}$.`, s: r`$A=\dfrac12xy$; use the product rule.`, r: r`$\dfrac{dA}{dt}=\dfrac12\left(\dfrac{dx}{dt}y+x\dfrac{dy}{dt}\right)$.` },
    ],
    core: [
      r`The radius of a circle is increasing at 3 cm/s. How fast is its circumference increasing?`,
      r`The edge of a cube is increasing at 0.5 cm/s. How fast is its volume increasing when the edge is 4 cm?`,
      r`A point moves along $y=x^2+1$ with $\dfrac{dx}{dt}=3$. Find $\dfrac{dy}{dt}$ when $x=2$.`,
      r`Write as an equation: \textquotedblleft{}the radius is decreasing at 2 centimetres per second\textquotedblright{}.`,
    ],
    exam: [
      r`The area of a square is increasing at 20 cm$^2$/s. How fast is its side increasing when the side is 5 cm?`,
      r`Two quantities satisfy $xy=24$. When $x=4$, $x$ is decreasing at 1 unit per second. Find $\dfrac{dy}{dt}$.`,
      r`The volume of a sphere is increasing at $100\pi$ cm$^3$/s. How fast is its radius increasing when $r=5$ cm?`,
      r`Quantities satisfy $z^2=x^2+y^2$ with $z>0$. When $x=8$ and $y=6$, $\dfrac{dx}{dt}=1$ and $\dfrac{dy}{dt}=3$. Find $\dfrac{dz}{dt}$.`,
    ],
    fr: {
      intro: r`The length $\ell$ of a rectangle is increasing at 4 cm/s and its width $w$ is decreasing at 3 cm/s. At a certain instant $\ell=12$ cm and $w=5$ cm.`,
      parts: [
        r`Find the rate at which the area of the rectangle is changing at that instant.`,
        r`Find the rate at which the perimeter is changing.`,
        r`Find the rate at which the length of the diagonal is changing at that instant.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{dC}{dt}=2\pi\dfrac{dr}{dt}=6\pi$ cm/s.`,
        r`$\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}=3(16)(0.5)=24$ cm$^3$/s.`,
        r`$\dfrac{dy}{dt}=2x\dfrac{dx}{dt}=12$.`,
        r`$\dfrac{dr}{dt}=-2$.`,
      ],
      exam: [
        r`$\dfrac{dA}{dt}=2s\dfrac{ds}{dt}$: $20=10\dfrac{ds}{dt}$, so 2 cm/s.`,
        r`$y=6$. $\dfrac{dx}{dt}y+x\dfrac{dy}{dt}=0$: $-6+4\dfrac{dy}{dt}=0$, so $\dfrac{dy}{dt}=1.5$.`,
        r`$100\pi=4\pi(25)\dfrac{dr}{dt}$, so 1 cm/s.`,
        r`$z=10$. $10\dfrac{dz}{dt}=8(1)+6(3)=26$, so $\dfrac{dz}{dt}=2.6$.`,
      ],
      fr: [
        r`$\dfrac{dA}{dt}=\dfrac{d\ell}{dt}w+\ell\dfrac{dw}{dt}=4(5)+12(-3)=-16$ cm$^2$/s.`,
        r`$\dfrac{dP}{dt}=2\left(\dfrac{d\ell}{dt}+\dfrac{dw}{dt}\right)=2(4-3)=2$ cm/s.`,
        r`$D=13$. $D\dfrac{dD}{dt}=\ell\dfrac{d\ell}{dt}+w\dfrac{dw}{dt}=48-15=33$, so $\dfrac{dD}{dt}=\dfrac{33}{13}$ cm/s.`,
      ],
    },
  },

  // ───────────── 4.5 ─────────────
  {
    code: "4.5", title: "Related Rates: Solving", unit: UNIT,
    ideas: [
      r`A length that does not change (a ladder, a rope of fixed length) is a \textbf{constant}: put its value in before differentiating.`,
      r`A length that changes must stay a \textbf{variable} until after differentiating.`,
      r`For a cone, use similar triangles to write $r$ in terms of $h$ (or the reverse) before differentiating.`,
      r`For an angle, choose the trigonometric ratio that involves only one changing length if you can.`,
    ],
    examples: [
      { t: "A ladder", q: r`A 17 m ladder leans against a wall. Its foot is pulled away from the wall at 1.5 m/s. How fast is the top moving when the foot is 8 m from the wall?`, s: r`$x^2+y^2=289$, so $x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0$. When $x=8$, $y=15$: $8(1.5)+15\dfrac{dy}{dt}=0$.`, r: r`The top is sliding down at 0.8 m/s.` },
      { t: "A cone", q: r`Water is poured at 2 m$^3$/min into an inverted cone of height 6 m and top radius 4 m. How fast is the water level rising when the water is 3 m deep?`, s: r`$r=\dfrac{2h}{3}$, so $V=\dfrac13\pi\left(\dfrac{2h}{3}\right)^2h=\dfrac{4\pi h^3}{27}$ and $\dfrac{dV}{dt}=\dfrac{4\pi h^2}{9}\dfrac{dh}{dt}$. At $h=3$: $2=4\pi\dfrac{dh}{dt}$.`, r: r`$\dfrac{1}{2\pi}$ m/min.` },
      { t: "A shadow", q: r`A person 1.8 m tall walks at 1.2 m/s away from a lamp post 5.4 m high. How fast is the length of the shadow increasing?`, s: r`With $x$ the distance from the post and $s$ the shadow: $\dfrac{x+s}{5.4}=\dfrac{s}{1.8}$, so $s=\dfrac x2$.`, r: r`$0.6$ m/s.` },
    ],
    core: [
      r`A circular ripple has radius increasing at 2 cm/s. How fast is its area increasing when the radius is 10 cm?`,
      r`The edge of a cube is increasing at 0.1 cm/s. How fast is its volume increasing when the edge is 5 cm?`,
      r`A 15 m ladder leans against a wall. Its foot moves away from the wall at 2 m/s. How fast is the top moving when the foot is 9 m from the wall?`,
      r`A spherical balloon is inflated at $64\pi$ cm$^3$/s. How fast is its radius increasing when $r=2$ cm?`,
    ],
    exam: [
      r`Sand is poured at 10 m$^3$/min onto a conical pile whose height always equals its radius. How fast is the height increasing when the pile is 5 m high?`,
      r`Two cars leave the same point at the same time. One travels east at 60 km/h and the other north at 80 km/h. How fast is the distance between them increasing after 2 hours?`,
      r`A camera on the ground is 300 m from a launch pad. A rocket rises vertically at 150 m/s. How fast is the camera's angle of elevation changing when the rocket is 400 m high?`,
      r`Water is pumped at $18\pi$ m$^3$/h into a cylindrical tank of radius 3 m. How fast is the water level rising?`,
    ],
    fr: {
      intro: r`A boat is pulled toward a dock by a rope that passes through a ring on the dock 5 m higher than the bow of the boat. The rope is pulled in at 2 m/s. Let $x$ be the horizontal distance from the boat to the dock and $z$ the length of rope between the boat and the ring.`,
      parts: [
        r`Write an equation relating $x$ and $z$, and differentiate it with respect to time.`,
        r`How fast is the boat approaching the dock when 13 m of rope are out?`,
        r`Let $\theta$ be the angle between the rope and the water. How fast is $\theta$ changing at that moment?`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}=40\pi$ cm$^2$/s.`,
        r`$3(25)(0.1)=7.5$ cm$^3$/s.`,
        r`$y=12$. $9(2)+12\dfrac{dy}{dt}=0$, so the top slides down at 1.5 m/s.`,
        r`$64\pi=4\pi(4)\dfrac{dr}{dt}$, so 4 cm/s.`,
      ],
      exam: [
        r`$r=h$, so $V=\dfrac{\pi h^3}{3}$ and $\dfrac{dV}{dt}=\pi h^2\dfrac{dh}{dt}$: $10=25\pi\dfrac{dh}{dt}$, giving $\dfrac{2}{5\pi}$ m/min.`,
        r`$x=120$, $y=160$, $z=200$. $200\dfrac{dz}{dt}=120(60)+160(80)$, so 100 km/h.`,
        r`$\tan\theta=\dfrac{y}{300}$, so $\sec^2\theta\,\dfrac{d\theta}{dt}=\dfrac{150}{300}$. With $\sec^2\theta=1+\dfrac{16}{9}=\dfrac{25}{9}$: $\dfrac{d\theta}{dt}=0.18$ rad/s.`,
        r`$V=9\pi h$, so $18\pi=9\pi\dfrac{dh}{dt}$: 2 m/h.`,
      ],
      fr: [
        r`$z^2=x^2+25$, so $z\dfrac{dz}{dt}=x\dfrac{dx}{dt}$.`,
        r`$x=12$ and $\dfrac{dz}{dt}=-2$: $13(-2)=12\dfrac{dx}{dt}$, so the boat approaches at $\dfrac{13}{6}$ m/s.`,
        r`$\sin\theta=\dfrac5z$, so $\cos\theta\,\dfrac{d\theta}{dt}=-\dfrac{5}{z^2}\dfrac{dz}{dt}$. With $\cos\theta=\dfrac{12}{13}$: $\dfrac{12}{13}\dfrac{d\theta}{dt}=\dfrac{10}{169}$, so $\dfrac{d\theta}{dt}=\dfrac{5}{78}$ rad/s (increasing).`,
      ],
    },
  },

  // ───────────── 4.6 ─────────────
  {
    code: "4.6", title: "Tangent-Line Approximation", unit: UNIT,
    ideas: [
      r`Near $x=a$, \ $f(x)\approx L(x)=f(a)+f'(a)(x-a)$: the tangent line stands in for the curve.`,
      r`Choose $a$ where $f(a)$ and $f'(a)$ are easy and close to the value wanted.`,
      r`If the graph is \textbf{concave up} near $a$, the tangent line lies below it: an \textbf{underestimate}. Concave down: an \textbf{overestimate}.`,
      r`Justify over or under with the sign of $f''$ on the interval, never with the sign of $f'$.`,
    ],
    examples: [
      { t: "A square root", q: r`Use a tangent line to approximate $\sqrt{26}$.`, s: r`$f(x)=\sqrt x$ at $a=25$: $f(25)=5$, $f'(25)=\dfrac{1}{10}$.`, r: r`$\sqrt{26}\approx5+\dfrac{1}{10}(1)=5.1$.` },
      { t: "Over or under", q: r`Use the tangent line to $f(x)=\sin x$ at $x=0$ to approximate $\sin(0.1)$. Is it an overestimate?`, s: r`$L(x)=x$, so $\sin(0.1)\approx0.1$. $f''(x)=-\sin x<0$ for $0<x<0.1$.`, r: r`$0.1$, an overestimate: the graph is concave down there.` },
      { t: "From values", q: r`Given $f(2)=7$ and $f'(2)=-3$, approximate $f(2.2)$.`, s: r`$7+(-3)(0.2)$.`, r: r`$6.4$.` },
    ],
    core: [
      r`Write the tangent-line approximation $L(x)$ for $f(x)=x^3$ at $x=2$.`,
      r`Use your answer to Question 1 to approximate $(2.1)^3$.`,
      r`Given $f(5)=4$ and $f'(5)=0.5$, approximate $f(4.8)$.`,
      r`A graph is concave up near $x=a$. Is a tangent-line approximation there an overestimate or an underestimate?`,
    ],
    exam: [
      r`Use the tangent line to $f(x)=\dfrac1x$ at $x=2$ to approximate $\dfrac{1}{2.1}$. Is it an overestimate or an underestimate? Justify.`,
      r`Use the tangent line to $f(x)=\ln x$ at $x=1$ to approximate $\ln(0.9)$. Is it an overestimate or an underestimate? Justify.`,
      r`A function has $f(1)=2$ and $f'(x)=x^2+\ln x$ for $x>0$. Approximate $f(1.1)$ and say whether the approximation is an overestimate or an underestimate.`,
      r`The point $(3,1)$ lies on the curve $x^2+y^3=10$. Use the tangent line there to approximate the $y$-coordinate of the point on the curve with $x=3.1$.`,
    ],
    fr: {
      intro: r`Let $f(x)=\tan x$ for $-\dfrac\pi2<x<\dfrac\pi2$.`,
      parts: [
        r`Write an equation of the line tangent to the graph of $f$ at $x=\dfrac\pi4$.`,
        r`Use the tangent line to approximate $\tan\!\left(\dfrac\pi4+0.05\right)$.`,
        r`Is the approximation in part (b) an overestimate or an underestimate? Justify your answer.`,
      ],
    },
    sol: {
      core: [
        r`$L(x)=8+12(x-2)$.`,
        r`$8+12(0.1)=9.2$.`,
        r`$4+0.5(-0.2)=3.9$.`,
        r`An underestimate.`,
      ],
      exam: [
        r`$f(2)=\dfrac12$, $f'(2)=-\dfrac14$: $0.5-0.25(0.1)=0.475$. $f''(x)=\dfrac{2}{x^3}>0$, so concave up: an underestimate.`,
        r`$L(x)=x-1$, so $\ln(0.9)\approx-0.1$. $f''(x)=-\dfrac{1}{x^2}<0$, so concave down: an overestimate.`,
        r`$f'(1)=1$, so $f(1.1)\approx2.1$. $f''(x)=2x+\dfrac1x>0$ near 1: an underestimate.`,
        r`$2x+3y^2\dfrac{dy}{dx}=0$ gives $\dfrac{dy}{dx}=-\dfrac{6}{3}=-2$ at $(3,1)$, so $y\approx1-2(0.1)=0.8$.`,
      ],
      fr: [
        r`$f\!\left(\dfrac\pi4\right)=1$ and $f'\!\left(\dfrac\pi4\right)=\sec^2\dfrac\pi4=2$: $y=1+2\left(x-\dfrac\pi4\right)$.`,
        r`$1+2(0.05)=1.1$.`,
        r`$f''(x)=2\sec^2x\tan x>0$ for $x$ near $\dfrac\pi4$, so the graph is concave up and the tangent line lies below it: an underestimate.`,
      ],
    },
  },

  // ───────────── 4.7 ─────────────
  {
    code: "4.7", title: "Indeterminate Forms and L'H\\^opital's Rule", unit: UNIT,
    ideas: [
      r`If $\dfrac{f(x)}{g(x)}$ has the form $\dfrac00$ or $\dfrac{\infty}{\infty}$, then $\displaystyle\lim\dfrac{f(x)}{g(x)}=\lim\dfrac{f'(x)}{g'(x)}$, provided the second limit exists.`,
      r`Differentiate numerator and denominator \textbf{separately}. This is not the quotient rule.`,
      r`\textbf{Check the form first}, and say so: state that both limits are 0 (or both infinite) before applying the rule.`,
      r`If the result is again indeterminate, apply the rule again.`,
    ],
    examples: [
      { t: "The form 0/0", q: r`Evaluate $${L("0")}\dfrac{\sin(4x)}{3x}$.`, s: r`Both $\sin(4x)$ and $3x$ tend to 0. By L'H\^opital's Rule the limit is $${L("0")}\dfrac{4\cos(4x)}{3}$.`, r: r`$\dfrac43$.` },
      { t: "The form infinity over infinity", q: r`Evaluate $${L("\\infty")}\dfrac{\ln x}{x}$.`, s: r`Both tend to infinity. The rule gives $${L("\\infty")}\dfrac{1/x}{1}$.`, r: r`$0$.` },
      { t: "Applying the rule twice", q: r`Evaluate $${L("0")}\dfrac{e^{x}-1-x}{x^2}$.`, s: r`Form $\tfrac00$: $${L("0")}\dfrac{e^{x}-1}{2x}$, again $\tfrac00$: $${L("0")}\dfrac{e^{x}}{2}$.`, r: r`$\dfrac12$.` },
    ],
    core: [
      r`Evaluate $${L("2")}\dfrac{x^2-4}{x-2}$ using L'H\^opital's Rule.`,
      r`Evaluate $${L("0")}\dfrac{1-\cos x}{x}$.`,
      r`Evaluate $${L("1")}\dfrac{x^5-1}{x-1}$.`,
      r`Can L'H\^opital's Rule be used for $${L("0")}\dfrac{x+1}{x+3}$? Find the limit.`,
    ],
    exam: [
      r`Evaluate $${L("0")}\dfrac{\tan(3x)}{\sin(2x)}$.`,
      r`Evaluate $${L("\\infty")}\dfrac{x^2+1}{e^{x}}$.`,
      r`Evaluate $${L("0")}\dfrac{\sin x-x}{x^2}$.`,
      r`A differentiable function $f$ has $f(2)=0$ and $f'(2)=3$, and $f'$ is continuous. Find $${L("2")}\dfrac{f(x)}{x^3-8}$.`,
    ],
    fr: {
      intro: r`Evaluate each limit. In each part, show that L'H\^opital's Rule applies.`,
      parts: [
        r`$${L("0")}\dfrac{e^{2x}-1}{\tan x}$`,
        r`$${L("\\pi/2")}\dfrac{\cos x}{x-\frac{\pi}{2}}$`,
        r`$${L("0")}\dfrac{g(x)}{e^{x}-1}$, where $g$ is differentiable with $g(0)=0$ and $g'(0)=5$, and $g'$ is continuous.`,
      ],
    },
    sol: {
      core: [
        r`Form $\tfrac00$: $${L("2")}\dfrac{2x}{1}=4$.`,
        r`Form $\tfrac00$: $${L("0")}\dfrac{\sin x}{1}=0$.`,
        r`Form $\tfrac00$: $${L("1")}5x^4=5$.`,
        r`No: the numerator tends to 1 and the denominator to 3, so the form is not indeterminate. The limit is $\dfrac13$.`,
      ],
      exam: [
        r`Form $\tfrac00$: $${L("0")}\dfrac{3\sec^2(3x)}{2\cos(2x)}=\dfrac32$.`,
        r`Form $\tfrac\infty\infty$, twice: $${L("\\infty")}\dfrac{2x}{e^{x}}=${L("\\infty")}\dfrac{2}{e^{x}}=0$.`,
        r`Form $\tfrac00$, twice: $${L("0")}\dfrac{\cos x-1}{2x}=${L("0")}\dfrac{-\sin x}{2}=0$.`,
        r`Both $f(x)$ and $x^3-8$ tend to 0. $${L("2")}\dfrac{f'(x)}{3x^2}=\dfrac{3}{12}=\dfrac14$.`,
      ],
      fr: [
        r`$e^{2x}-1\to0$ and $\tan x\to0$. $${L("0")}\dfrac{2e^{2x}}{\sec^2x}=2$.`,
        r`$\cos x\to0$ and $x-\dfrac\pi2\to0$. $${L("\\pi/2")}\dfrac{-\sin x}{1}=-1$.`,
        r`$g(x)\to g(0)=0$ because $g$ is continuous, and $e^{x}-1\to0$. $${L("0")}\dfrac{g'(x)}{e^{x}}=\dfrac{5}{1}=5$.`,
      ],
    },
  },
];

export default sheets;
