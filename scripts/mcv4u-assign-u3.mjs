// MCV4U Unit 3 assignments — Derivatives of Transcendental Functions.
const r = String.raw;

export const U3 = {
  "3.1": {
    topic: "Derivatives of Sinusoidal Functions",
    K: [
      r`Differentiate: (a) $f(x)=4\sin\!\left(\dfrac{\pi x}{2}\right)$ (b) $g(x)=\cos(3x^2)$ (c) $h(x)=\sin^3(2x)$.`,
      r`Differentiate and simplify: (a) $f(x)=(x^2+1)\sin x$ (b) $g(x)=\dfrac{\cos x}{1+\sin x}$.`,
      r`Find the slope of the tangent to $y=\sin 2x$ at $x=\dfrac{\pi}{6}$ and write the equation of the tangent line (exact values).`,
    ],
    T: [
      r`Find all $x$ in $[0,2\pi]$ at which the graph of $f(x)=x+2\cos x$ has a horizontal tangent, and say what kind of point each is by looking at the sign of $f'$ on either side.`,
      r`Show that $\dfrac{d}{dx}(\sin x\cos x)=\cos 2x$ using the product rule and a double-angle identity, and confirm by differentiating $\tfrac12\sin 2x$.`,
    ],
    C: [
      r`Explain why the derivative formulas for sine and cosine require the angle to be in radians, referring to the graph of $y=\sin x$ and where its slope is greatest and zero.`,
      r`Explain, using the graph of $y=\cos x$, why its derivative is $-\sin x$ and not $\sin x$. Describe where the cosine graph is decreasing and check the sign of $-\sin x$ there.`,
    ],
    A: [
      r`A Ferris wheel of radius 12 m turns once every 20 s, and a rider's height is $h(t)=15-12\cos\!\left(\dfrac{\pi t}{10}\right)$ metres. (a) Find the rider's vertical velocity $h'(t)$. (b) Find it at $t=5$ s and state the maximum vertical speed. (c) When is the vertical velocity zero, and where is the rider then?`,
      r`An alternating current is $i(t)=15\sin(120\pi t)$ amperes. (a) Find $\dfrac{di}{dt}$. (b) Find its value at $t=0$. (c) A coil of inductance $L=0.02$ H produces a voltage $V=L\dfrac{di}{dt}$. Find the largest voltage.`,
      r`Daylight in a northern city is $D(t)=12+3\sin\!\left(\dfrac{2\pi(t-80)}{365}\right)$ hours, $t$ the day of the year. (a) Find $D'(t)$. (b) Find $D'(80)$ in hours per day and in minutes per day. (c) Explain when the days are getting longest fastest and when they stop changing.`,
    ],
  },

  "3.2": {
    topic: "Derivatives of Exponential Functions",
    K: [
      r`Differentiate: (a) $f(x)=e^{4x-x^2}$ (b) $g(x)=6\cdot10^{0.5x}$ (c) $h(x)=(x^2-1)e^{-2x}$.`,
      r`Differentiate and simplify: (a) $f(x)=\dfrac{e^x}{1+e^x}$ (b) $g(x)=xe^{-x^2}$.`,
      r`Find the equation of the tangent line to $y=3e^{-x/2}$ at $x=0$.`,
    ],
    T: [
      r`Find where $f(x)=xe^{-x}$ has a horizontal tangent and find the value of $f$ there. Explain how you know it is a maximum.`,
      r`Write $4^x=e^{x\ln 4}$ and differentiate using the chain rule to show that $\dfrac{d}{dx}4^x=4^x\ln 4$. Then find the slope of $y=4^x$ at $x=0$ and compare it with the slope of $y=e^x$ there.`,
    ],
    C: [
      r`Explain why $e$ is a special base for calculus: what is true about the height and the slope of $y=e^x$ at every point?`,
      r`A student differentiates $2^x$ as $x\cdot2^{x-1}$. Explain the error, give the correct derivative and explain the difference between $x^n$ and $b^x$.`,
    ],
    A: [
      r`A radioactive sample has mass $A(t)=80e^{-0.03t}$ mg after $t$ days. (a) Find $A'(t)$. (b) Find the rate of decay at $t=10$. (c) Show that $A'(t)=-0.03A(t)$ and explain what this says about decay.`,
      r`A drink cools according to $T(t)=22+68e^{-0.08t}$ degrees Celsius after $t$ minutes. (a) Find $T'(t)$. (b) Find the rate at $t=10$ and interpret the sign. (c) Show that $T'(t)=-0.08\,(T-22)$ and explain what this means.`,
      r`An investment grows continuously as $V(t)=5000e^{0.05t}$ dollars after $t$ years. (a) Find $V'(t)$. (b) Find the growth rate at $t=10$ in dollars per year. (c) Find how long the investment takes to double and the rate at that time.`,
    ],
  },

  "3.3": {
    topic: "Derivatives of Logarithmic Functions",
    K: [
      r`Differentiate: (a) $f(x)=\ln(x^3+2x)$ (b) $g(x)=\log_5(3x-1)$ (c) $h(x)=(\ln x)^2$.`,
      r`Differentiate and simplify: (a) $f(x)=\dfrac{x}{\ln x}$ (b) $g(x)=\ln\!\left(\dfrac{x+1}{x-2}\right)$ (use the laws of logarithms first).`,
      r`Use logarithmic differentiation to find $\dfrac{dy}{dx}$ for $y=(x^2+1)^x$.`,
    ],
    T: [
      r`Find the point on $y=\ln x$ at which the tangent line passes through the origin, and write the equation of that tangent.`,
      r`Find the maximum value of $f(x)=\dfrac{\ln x}{x}$ for $x>0$, and use it to decide which is larger, $e^{\pi}$ or $\pi^{e}$.`,
    ],
    C: [
      r`Explain why $\dfrac{d}{dx}\ln|x|=\dfrac1x$ holds for negative $x$ as well as positive $x$, using the graph and symmetry.`,
      r`Explain when logarithmic differentiation is needed, and describe its steps for a function with a variable in the exponent and for a product of many factors.`,
    ],
    A: [
      r`The sound level in decibels is $L(I)=10\log\dfrac{I}{10^{-12}}$ for intensity $I$ W/m$^2$. (a) Show that $\dfrac{dL}{dI}=\dfrac{10}{I\ln10}$. (b) Evaluate it at $I=10^{-6}$ and $I=10^{-3}$. (c) Explain why louder sounds make the decibel level change more slowly.`,
      r`A store's weekly sales of a new product are $S(t)=200\ln(t+1)+50$ units after $t$ weeks. (a) Find $S'(t)$. (b) Find $S'(9)$ and interpret it. (c) Explain why the growth in sales slows down over time.`,
      r`A firm's profit, in thousands of dollars, from selling $x$ hundred units is $P(x)=20\ln x-\dfrac{x}{2}$, $x>0$. (a) Find $P'(x)$. (b) Find the sales level where $P'(x)=0$ and the profit there. (c) Show, using the sign of $P'$, that this is a maximum.`,
    ],
  },
};
