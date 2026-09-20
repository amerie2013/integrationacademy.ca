// MHF4U Unit 7 assignments — Rates of Change & Combining Functions.
const r = String.raw;

export const U7 = {
  "7.1": {
    topic: "Average & Instantaneous Rate of Change",
    K: [
      r`Find the average rate of change of $f(x)=x^2-3x$ on the interval $[1,4]$, and state what the value represents on the graph.`,
      r`Estimate the instantaneous rate of change of $f(x)=x^3$ at $x=2$ using the intervals $[2,2.01]$ and $[1.99,2]$, and use the two answers to give a better estimate.`,
      r`The table gives the distance $d$ (in metres) travelled by a cart after $t$ seconds. $t$: 0, 2, 4, 6, 8 and $d$: 0, 6, 20, 42, 72. Find the average rate of change on $[0,4]$, on $[4,8]$ and on $[0,8]$, and describe what the results say about the cart's motion.`,
    ],
    T: [
      r`For $f(x)=x^2+3x$, find the average rate of change on $[1,1+h]$ as a simplified expression in $h$. Evaluate it for $h=1$, $0.1$ and $0.01$, and explain how the results suggest the instantaneous rate at $x=1$.`,
      r`Can the average rate of change of a function over an interval be 0 even though the function is never constant? Give an example, calculate it and explain what the graph looks like.`,
    ],
    C: [
      r`Explain the difference between the slope of a secant line and the slope of a tangent line, and how making the interval smaller connects the two. Use precise language.`,
      r`Describe how you would estimate the instantaneous rate of change at a point from a graph and from a table of values. State one limitation of each method and always include units in your answer.`,
    ],
    A: [
      r`A cyclist's distance from the start after $t$ seconds is $d(t)=0.5t^2+2t$ metres. (a) Find the average speed from $t=2$ to $t=6$. (b) Estimate the instantaneous speed at $t=4$ using the interval $[4,4.1]$. (c) Explain why the cyclist's average speed on $[2,6]$ and instantaneous speed at $t=4$ are close in this case.`,
      r`The number of bacteria in a culture after $t$ hours is $N(t)=200(1.5)^t$. (a) Find the average rate of growth from $t=0$ to $t=4$. (b) Estimate the instantaneous rate of growth at $t=4$ using the interval $[4,4.01]$. (c) Explain why the instantaneous rate at $t=4$ is much greater than the average rate over $[0,4]$.`,
      r`A cup of coffee cools in a room. Its temperature $T$ (in °C) after $t$ minutes is 90.0 at 0, 74.4 at 5, 62.3 at 10, 53.0 at 15 and 45.7 at 20. (a) Find the average rate of change of the temperature on each 5-minute interval. (b) Estimate the instantaneous rate at $t=10$ using the interval $[5,15]$. (c) Explain the sign of the rate and why its size decreases with time.`,
    ],
  },

  "7.2": {
    topic: "Combining Functions",
    K: [
      r`For $f(x)=x^2-x-6$ and $g(x)=x-3$, find $(f+g)(x)$, $(f-g)(x)$, $(fg)(x)$ and $\left(\dfrac fg\right)(x)$, and state the domain of the quotient.`,
      r`For $f(x)=\sqrt{x+3}$ and $g(x)=\dfrac{1}{x-1}$, state the domain of $f+g$ and of $\dfrac fg$, and write $\dfrac fg$ as a simplified expression.`,
      r`Use the table to find each value, or say it does not exist. $x$: $-2$, $-1$, 0, 1, 2; $f(x)$: 3, 1, 0, $-1$, 2; $g(x)$: 2, $-2$, 1, 0, 4. Find $(f+g)(0)$, $(f-g)(1)$, $(fg)(-1)$, $\left(\dfrac fg\right)(2)$ and $\left(\dfrac fg\right)(1)$.`,
    ],
    T: [
      r`The sum of two functions is $(f+g)(x)=3x^2+x$ and their difference is $(f-g)(x)=x^2-5x+2$. Find $f(x)$ and $g(x)$ and check that both conditions hold.`,
      r`For $f(x)=x$ and $g(x)=\dfrac1x$, simplify $(fg)(x)$. Explain why the graph of the product is not the same as the graph of $y=1$, and state its domain.`,
    ],
    C: [
      r`Explain how to determine the domain of $\left(\dfrac fg\right)(x)$, listing every condition you must check. Use $f(x)=\dfrac{1}{x}$ and $g(x)=x-3$ as an example.`,
      r`Describe how to sketch the graph of $f+g$ from the graphs of $f$ and $g$. Explain the result when $f$ is a line and $g$ is a parabola.`,
    ],
    A: [
      r`A company sells $x$ hundred items with revenue $R(x)=60x-0.5x^2$ and cost $C(x)=200+12x$, both in hundreds of dollars. (a) Find the profit function $P=R-C$. (b) Find the break-even sales levels, to the nearest tenth. (c) Explain in context what the result says about how many items the company should sell.`,
      r`Two towns' populations, $t$ years after 2020, are $A(t)=12\,000+400t$ and $B(t)=8000+700t$. (a) Find $(A+B)(t)$. (b) Find $(A-B)(t)$ and the year in which town B overtakes town A. (c) Find $\dfrac{A}{A+B}$ at $t=0$ and $t=10$ and interpret the change.`,
      r`Over a week, the daily temperature in a city is modelled by $T(t)=f(t)+g(t)$, where $f(t)=0.8t+12$ is a warming trend and $g(t)=4\sin(2\pi t)$ is the daily cycle, with $t$ in days. (a) Evaluate $T$ at $t=0$, $0.25$, $0.5$, $0.75$ and $1$. (b) Describe the shape of the graph of $T$ in words. (c) Predict the temperature at $t=3.25$ and explain why the daily highs keep increasing.`,
    ],
  },

  "7.3": {
    topic: "Composition of Functions",
    K: [
      r`For $f(x)=2x-3$ and $g(x)=x^2+1$, find $f(g(x))$, $g(f(x))$, $f(g(2))$ and $g(f(2))$.`,
      r`Find the domain of the composite $f(g(x))$ for (a) $f(x)=\sqrt x$ and $g(x)=6-2x$ (b) $f(x)=\dfrac{1}{x-2}$ and $g(x)=x^2+1$.`,
      r`Decompose each function as $f(g(x))$ in a sensible way: (a) $h(x)=(3x-1)^4$ (b) $h(x)=\sqrt{x^2+9}$.`,
    ],
    T: [
      r`Given $f(x)=x+3$, find all linear functions $g(x)=ax+b$ for which $f(g(x))=g(f(x))$. Explain what the result says about combining shifts.`,
      r`If $g(x)=x+3$ and $f(g(x))=x^2+6x+5$, find $f(x)$. Check your answer by substituting.`,
    ],
    C: [
      r`Explain why $f(g(x))\ne g(f(x))$ in general. Use a specific example, and explain the order in which the functions are applied.`,
      r`Explain how to find the domain of a composite function in two steps, and give an example, such as $f(x)=x^2$ with $g(x)=\sqrt{x-2}$, where the domain of $f(g(x))$ is smaller than the domain of its simplified formula.`,
    ],
    A: [
      r`In Ontario, 13% HST is added to a price $p$, so $t(p)=1.13p$. A store also offers a 10-dollar coupon, so $c(p)=p-10$. (a) Find $t(c(p))$ and $c(t(p))$. (b) For an item priced at 60 dollars, find the final cost in each order. (c) Which order is better for the customer, and why?`,
      r`A circular ripple's radius grows as $r(t)=3t$ centimetres after $t$ seconds, and the area of a circle is $A(r)=\pi r^2$. (a) Find $A(r(t))$. (b) Find the area after 4 seconds. (c) At what time is the area $100\pi$ cm$^2$?`,
      r`The temperature in degrees Celsius is $C=K-273.15$ where $K$ is in kelvins, and in degrees Fahrenheit $F=1.8C+32$. (a) Write $F$ as a function of $K$ by composition. (b) Find $F$ for water boiling at 373.15 K and for dry ice at 194.65 K. (c) State the domain of the composite function in this context and explain it.`,
    ],
  },
};
