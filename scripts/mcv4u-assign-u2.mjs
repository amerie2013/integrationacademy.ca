// MCV4U Unit 2 assignments — Derivative Rules.
const r = String.raw;

export const U2 = {
  "2.1": {
    topic: "Power, Constant & Sum Rules",
    K: [
      r`Differentiate: (a) $f(x)=7x^6-x^3+4x-11$ (b) $g(x)=9x^{-2}+4x^{1/2}$ (c) $h(x)=(2x-3)^2$ (expand first). Simplify each answer.`,
      r`For $f(x)=x^4-4x^2+1$, find $f'(x)$, then the slope of the tangent at $x=-2$ and the equation of the tangent line there.`,
      r`For $f(x)=2x^3-9x^2-24x+7$, find the points where the tangent is horizontal and the points where the tangent has slope $-24$.`,
    ],
    T: [
      r`The parabola $y=ax^2+bx+c$ passes through $(0,2)$ and $(1,6)$, and its tangent at $(1,6)$ has slope 3. Find $a$, $b$ and $c$.`,
      r`Find every point on $y=x^3-3x^2$ whose tangent line passes through the origin. Show how the point of tangency $x=a$ leads to an equation in $a$.`,
    ],
    C: [
      r`Explain why the derivative of a constant is 0 and why the derivative of $kf(x)$ is $kf'(x)$, using the idea of slope on a graph.`,
      r`Explain how to prepare $\sqrt{x}$, $\dfrac{1}{x^2}$ and $\sqrt[3]{x^2}$ for the power rule, and why the answer for $\dfrac{1}{x^2}$ is negative.`,
    ],
    A: [
      r`A town's population is $P(t)=2500+120t+1.5t^2$, where $t$ is in years. (a) Find the rate of growth at $t=10$. (b) Find when the town is growing at 180 people per year. (c) Compare the rate at $t=10$ with the average rate over the first 10 years.`,
      r`The cost, in dollars, of producing $q$ units is $C(q)=0.01q^3-0.9q^2+30q+500$. (a) Find the marginal cost $C'(q)$. (b) Evaluate it at $q=20$ and $q=60$. (c) Interpret both numbers.`,
      r`The volume of a basketball is $V=\tfrac43\pi r^3$ cm$^3$ for radius $r$ cm. (a) Find $\dfrac{dV}{dr}$. (b) Evaluate it at $r=12$. (c) Explain what it means for the amount of air needed to enlarge the ball and why it equals the surface area.`,
    ],
  },

  "2.2": {
    topic: "Product & Quotient Rules",
    K: [
      r`Differentiate: (a) $f(x)=(3x^2-1)(x^3+2x)$ (b) $g(x)=(\sqrt{x}+2)(x^2-1)$ (c) $h(x)=\dfrac{3x-4}{x^2+1}$. Simplify (a) and (c).`,
      r`Given $f(3)=4$, $f'(3)=-1$, $g(3)=2$ and $g'(3)=5$, find $(fg)'(3)$, $\left(\dfrac fg\right)'(3)$ and $(2f-3g)'(3)$.`,
      r`Find the equation of the tangent line to $f(x)=\dfrac{x^2-1}{x^2+1}$ at $x=1$.`,
    ],
    T: [
      r`The function $f(x)=\dfrac{ax+b}{x+2}$ satisfies $f(0)=1$ and $f'(0)=\tfrac12$. Find $a$ and $b$.`,
      r`Differentiate $f(x)=x(x+1)(x-2)$ in two ways: by expanding first, and by using the product rule twice. Show that the answers agree.`,
    ],
    C: [
      r`Explain how to remember the quotient rule, and describe two common errors (the order of the subtraction and forgetting to square the denominator).`,
      r`A student claims $(fg)'=f'g'$. Use $f(x)=x$ and $g(x)=x^2$ to show the claim is false, and state the correct rule.`,
    ],
    A: [
      r`The concentration of a drug in the blood is $C(t)=\dfrac{8t}{t^2+16}$ mg/L, $t$ in hours. (a) Find $C'(t)$. (b) Find $C'(2)$ and interpret it. (c) Find when $C'(t)=0$ and explain what happens then.`,
      r`A shop's price is $p(t)=40+2t$ dollars and its weekly sales are $q(t)=500-10t$ units after $t$ weeks. (a) Write the revenue $R=pq$. (b) Use the product rule to find $R'(5)$. (c) Interpret the answer.`,
      r`The cost of producing $x$ items is $C(x)=2000+15x+0.02x^2$ dollars, so the average cost is $A(x)=\dfrac{C(x)}{x}$. (a) Use the quotient rule to find $A'(x)$. (b) Find $A'(100)$ and interpret it. (c) Find the production level where $A'(x)=0$.`,
    ],
  },

  "2.3": {
    topic: "The Chain Rule",
    K: [
      r`Differentiate: (a) $f(x)=(2-5x)^7$ (b) $g(x)=\sqrt{x^3+4x}$ (c) $h(x)=\dfrac{1}{(x^2-3x)^3}$.`,
      r`Differentiate and simplify: (a) $f(x)=(3x+1)^2(x-4)^3$ (b) $g(x)=\left(\dfrac{x+1}{x-1}\right)^3$.`,
      r`Let $y=f(u)=u^3+u$ and $u=g(x)=2x^2-1$. Find $\dfrac{dy}{dx}$ at $x=1$ by using $\dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}$.`,
    ],
    T: [
      r`For $f(x)=x^2\sqrt{9-x^2}$, find $f'(x)$, simplify it into one fraction and find the values of $x$ where the tangent is horizontal.`,
      r`Use the table to find each derivative. $x$: 1, 2, 3; $f$: 2, 3, 1; $f'$: 4, $-1$, 5; $g$: 3, 1, 2; $g'$: $-2$, 6, 7. Find $(f\circ g)'(1)$, $(g\circ f)'(2)$ and $(f\circ f)'(1)$.`,
    ],
    C: [
      r`Explain the chain rule as a statement about rates: if $y$ depends on $u$ and $u$ depends on $x$, why do the rates multiply? Use a real example with units.`,
      r`A student differentiates $(3x-1)^2$ as $2(3x-1)$. Find the error, give the correct answer and verify it by expanding the square first.`,
    ],
    A: [
      r`A weather balloon's radius is $r(t)=0.5\sqrt{t+4}$ metres after $t$ hours, and its volume is $V=\tfrac43\pi r^3$. (a) Write $V$ as a function of $t$. (b) Use the chain rule to find $\dfrac{dV}{dt}$ at $t=5$. (c) Interpret the answer.`,
      r`A car's fuel-use rate is $F(v)=0.0004v^2+0.05v$ litres per hour at $v$ km/h, and its speed after $t$ hours of acceleration is $v(t)=60+5t$. (a) Find $F'(v)$. (b) Use the chain rule to find $\dfrac{dF}{dt}$ at $t=2$. (c) Interpret the answer.`,
      r`The power in a resistor is $P=8I^2$ watts, and the current is $I(t)=2t+1$ amperes. (a) Find $\dfrac{dP}{dI}$. (b) Use the chain rule to find $\dfrac{dP}{dt}$ at $t=1$. (c) Check your answer by writing $P$ directly in terms of $t$.`,
    ],
  },

  "2.4": {
    topic: "Rational, Radical & Higher-Order Derivatives",
    K: [
      r`Differentiate: (a) $f(x)=\dfrac{8}{x^3}-\sqrt[4]{x}$ (b) $g(x)=x^{7/3}$ (c) $h(x)=\dfrac{2x+1}{\sqrt{x}}$ (rewrite as powers first).`,
      r`Find the second derivative: (a) $f(x)=x^6-4x^3+x$ and $f''(1)$ (b) $g(x)=\sqrt{x}$.`,
      r`Use implicit differentiation to find $\dfrac{dy}{dx}$ for $x^3+y^3=9xy$, and find the slope of the tangent at the point $(2,4)$.`,
    ],
    T: [
      r`For $f(x)=x^{-1}$, find $f'$, $f''$, $f'''$ and $f^{(4)}$, and use the pattern to write a formula for $f^{(n)}(x)$.`,
      r`Find the equation of the tangent to the ellipse $x^2+4y^2=20$ at $(2,2)$ using implicit differentiation, and check that the point lies on the ellipse.`,
    ],
    C: [
      r`Explain why some curves need implicit differentiation, and explain why $\dfrac{d}{dx}(y^2)=2y\dfrac{dy}{dx}$ contains an extra factor.`,
      r`Explain what the second derivative tells you about a graph and about a moving object, and why a positive second derivative does not mean a positive first derivative.`,
    ],
    A: [
      r`A circular oil slick has area $A$ m$^2$ and radius $r=\sqrt{A/\pi}$ m. (a) Find $\dfrac{dr}{dA}$. (b) Evaluate it at $A=100$. (c) Explain what it says about how fast the radius grows as the slick gets larger.`,
      r`A factory uses $x$ machines and $y$ workers, and the combinations giving a fixed output satisfy $xy^2=2400$. (a) Find $\dfrac{dy}{dx}$ implicitly. (b) Evaluate it at $(6,20)$. (c) Interpret the answer in context.`,
      r`A tumour's volume is $V(t)=0.02t^3-0.6t^2+8t+50$ mm$^3$ after $t$ days. (a) Find $V'(t)$ and $V''(t)$. (b) Find when the growth rate is smallest and what that rate is. (c) Explain what the sign of $V''$ tells you before and after that day.`,
    ],
  },
};
