// MHF4U Unit 1 assignments — Polynomial Functions.
// Each entry: 3 Knowledge & Understanding, 2 Thinking, 2 Communication, 3 Application.
// Every question is a single line (the assignment renderer splits on newlines).
const r = String.raw;

export const U1 = {
  "1.1": {
    topic: "Power Functions & End Behaviour",
    K: [
      r`Describe the end behaviour of each power function, stating in which quadrants the graph starts and ends: (a) $f(x)=3x^4$ (b) $g(x)=-2x^5$ (c) $h(x)=-x^6$ (d) $k(x)=0.5x^3$.`,
      r`On one set of axes, sketch $y=x^2$, $y=x^4$ and $y=x^6$. State the points that all three share, compare their heights for $|x|<1$ and for $|x|>1$, and name the type of symmetry they have.`,
      r`For $f(x)=-2x^5$ and $g(x)=-2x^6$, state the domain and range, say whether each function is even, odd or neither, and give the intervals on which each is increasing or decreasing.`,
    ],
    T: [
      r`Let $P(x)=x^3$ and $Q(x)=x^3+900x$. (a) Evaluate both functions at $x=3$ and at $x=300$ and compare the two outputs each time. (b) Explain what your results reveal about which term controls the graph near the origin and which controls it far from the origin. (c) Find the $x$-value beyond which $x^3$ is larger than $900x$.`,
      r`A power function $y=ax^n$, where $n$ is a whole number less than 6, passes through $(2,48)$ and $(-2,-48)$. (a) Explain what the second point tells you about $n$. (b) Find every possible pair $(a,n)$. (c) Explain why two points are not enough to identify a single function.`,
    ],
    C: [
      r`A classmate says: "$y=x^4$ and $y=x^6$ have the same end behaviour, so their graphs are basically the same." Write a response that explains what is correct and what is misleading in this claim, referring to the shape of the graphs near the origin and for large values of $|x|$.`,
      r`Explain to a student who missed the lesson how the parity (even or odd) of the exponent and the sign of the coefficient together determine the end behaviour of a power function. Give one example equation for each of the four possible patterns.`,
    ],
    A: [
      r`The power available from wind passing through a turbine is $P(v)=1800v^3$ watts, where $v$ is the wind speed in m/s. (a) Find the power at 6 m/s and at 12 m/s. (b) By what factor does the power change when the wind speed doubles? Explain using the power function. (c) Describe the end behaviour of the model and explain why it only makes sense for $v\ge 0$.`,
      r`The kinetic energy of a 1200 kg car travelling at $v$ m/s is $E(v)=600v^2$ joules. (a) Compare the energy at 50 km/h (about 13.9 m/s) with the energy at 100 km/h (about 27.8 m/s). (b) What does this comparison suggest about the danger of driving faster? (c) The function has the same end behaviour on both sides of the $y$-axis. Explain why only $v\ge 0$ has physical meaning.`,
      r`A shipping company uses cubic crates with edge length $s$ metres, so the volume is $V(s)=s^3$ and the surface area (the material needed) is $S(s)=6s^2$. (a) If the edge length is doubled, by what factor do the volume and the surface area change? (b) Which function grows faster for large $s$, and how does this show up in the end behaviour? (c) Explain why a larger crate needs less material per cubic metre of storage, using the ratio $S/V$.`,
    ],
  },

  "1.2": {
    topic: "Characteristics of Polynomial Functions",
    K: [
      r`State the maximum number of turning points and the maximum number of $x$-intercepts for a polynomial of (a) degree 3 (b) degree 6 (c) degree 7. Then state the minimum possible number of $x$-intercepts for an odd-degree polynomial and for an even-degree polynomial.`,
      r`Use $f(-x)$ to determine whether each function is even, odd or neither: (a) $f(x)=x^4-3x^2+1$ (b) $g(x)=x^3-4x$ (c) $h(x)=x^3+x^2$.`,
      r`A polynomial function has the values in the table. Use finite differences to determine its degree and leading coefficient. $x$: 0, 1, 2, 3, 4, 5 and $f(x)$: 1, 0, 5, 22, 57, 116.`,
    ],
    T: [
      r`Sketch a possible graph of a polynomial that has even degree, exactly 3 turning points, exactly 2 $x$-intercepts and a positive leading coefficient. Explain why its degree must be at least 4, and then test whether $f(x)=x^4-2x^2-1$ has all of these features.`,
      r`The third differences of a polynomial function, tabulated at $x=0,1,2,3,\dots$, are constant and equal to 12. (a) Determine the degree and the leading coefficient. (b) If also $f(0)=1$, $f(1)=4$ and $f(2)=13$, find the equation of the function.`,
    ],
    C: [
      r`Explain, using the definition of an odd function and the symmetry of its graph, why $f(x)=x^3-4x$ is odd. Then explain why the sum of an even function and an odd function, such as $x^2+x$, is usually neither even nor odd.`,
      r`A student writes: "A polynomial of degree 4 must have 4 $x$-intercepts and 3 turning points." Identify what is wrong, rewrite the statement correctly using the phrases "at most" and "at least" where needed, and give a counterexample.`,
    ],
    A: [
      r`A start-up company's monthly profit $P$ (in thousands of dollars) in months 0 to 5 was 2, 5, 14, 35, 74, 137. (a) Use finite differences to find the degree of the polynomial that fits this data and its leading coefficient. (b) Find the equation of the model. (c) Predict the profit in month 8 and comment on whether such rapid growth is likely to continue.`,
      r`An open-top box is made from a 30 cm by 20 cm sheet of cardboard by cutting a square of side $x$ cm from each corner, so $V(x)=x(30-2x)(20-2x)$. (a) Expand $V(x)$ and state its degree and leading coefficient. (b) Find the $x$-intercepts of the graph. (c) Explain why only $0<x<10$ makes sense in this context and how many turning points of the graph lie in that interval.`,
      r`A weather station fits a degree-4 polynomial $T(t)$ to the hourly temperature over $0\le t\le 24$, and the graph has three turning points inside that interval. (a) What could these turning points represent? (b) Use end behaviour to explain why a polynomial of this degree cannot model the temperature for all time. (c) What is the greatest number of times the model could reach exactly 0 °C?`,
    ],
  },

  "1.3": {
    topic: "Equations & Graphs of Polynomial Functions",
    K: [
      r`For $f(x)=(x+3)(x-1)^2(x-4)$, state each zero and its multiplicity, whether the graph crosses or touches the $x$-axis at each zero, the degree, the end behaviour and the $y$-intercept.`,
      r`Write the equation of the polynomial of least degree that has zeros at $-2$ (order 1), $1$ (order 2) and $3$ (order 1) and passes through the point $(0,12)$.`,
      r`Sketch $f(x)=-x(x+2)(x-3)$ using its zeros and end behaviour, and use a sign chart to state the intervals on which $f(x)>0$.`,
    ],
    T: [
      r`A polynomial falls to the left and rises to the right, touches the $x$-axis at $x=-1$, crosses the $x$-axis at $x=2$ and has $y$-intercept $-3$. (a) Explain why its least possible degree is 3, not 4. (b) Write its equation.`,
      r`Find every value of $k$ for which $f(x)=(x-k)^2(x+2)$ has a $y$-intercept of 18. For each value of $k$, state where the graph touches the $x$-axis and where it crosses it.`,
    ],
    C: [
      r`Using the words "multiplicity", "cross" and "touch", explain what the graph of $y=(x-a)^n$ does at $x=a$ when $n=1$, $n=2$ and $n=3$, and describe how the shape of the graph at the axis differs in each case.`,
      r`Write the steps you would follow, in words a classmate could use, to sketch a polynomial given in factored form without technology. Apply your steps to $f(x)=x(x-2)^2(x+3)$.`,
    ],
    A: [
      r`An open-top box is made from a 24 cm by 18 cm sheet by cutting a square of side $x$ cm from each corner, so $V(x)=x(24-2x)(18-2x)$. (a) State the zeros of $V$ and the domain that makes sense in this context. (b) Complete a table of values for $x=1,2,3,4,5$. (c) Estimate the cut size that gives the largest volume and describe how the graph supports your estimate.`,
      r`A company's profit, in thousands of dollars, from selling $x$ hundred units is $P(x)=-x(x-2)(x-8)$. (a) Interpret each zero as a break-even point. (b) Use a sign chart to state when the company makes a profit and when it loses money. (c) Use a table to estimate the sales level that maximizes profit and the size of that profit.`,
      r`During a vibration test on a footbridge, the deviation $D$ (in cm) of the centre span from its rest position after $t$ seconds is modelled by $D(t)=0.02t(t-3)^2(t-7)$. (a) At what times is the deviation zero? (b) At which time does the bridge return to rest without changing direction? Explain using multiplicity. (c) State when the deviation is positive and when it is negative, and evaluate $D(5)$ and $D(8)$.`,
    ],
  },

  "1.4": {
    topic: "Transformations of Functions",
    K: [
      r`Describe, in order, the transformations applied to $y=x^3$ to obtain $y=-2(x+1)^3+5$. Then find the image of the point $(2,8)$.`,
      r`Write the equation of $y=x^4$ after a vertical stretch by a factor of 3, a horizontal compression by a factor of $\tfrac12$, a reflection in the $y$-axis, and a translation 4 units right and 1 unit down. Simplify, and explain why the reflection has no visible effect on this graph.`,
      r`The point $(-2,16)$ lies on $y=f(x)=x^4$. Find its image on $y=-\tfrac12 f\big(3(x+1)\big)+2$ and verify your answer by substituting into the new equation.`,
    ],
    T: [
      r`Apply "shift up 3, then stretch vertically by 2" and "stretch vertically by 2, then shift up 3" to $y=x^3$. Write both equations, find the image of $(1,1)$ each time, and explain why the order of the transformations matters.`,
      r`A cubic is a transformation of $y=x^3$. Its point of inflection is $(3,-2)$ and it passes through $(4,6)$. (a) Determine its equation. (b) Show that the same graph can be written using a horizontal compression instead of a vertical stretch, and find the compression factor.`,
    ],
    C: [
      r`Explain why the horizontal translation in $y=f(x-d)$ moves the graph in the direction opposite to the sign inside the brackets. Use a specific point on a specific graph to support your explanation.`,
      r`Describe in words a classmate could follow how to graph $y=af\big(k(x-d)\big)+c$ from $y=f(x)$ using the mapping $(x,y)\to\left(\tfrac xk+d,\ ay+c\right)$. Explain why stretches and reflections must be applied before translations.`,
    ],
    A: [
      r`The distance an object falls in $t$ seconds is $d(t)=4.9t^2$ metres on Earth and $d(t)=0.8t^2$ metres on the Moon. (a) Describe the transformation that changes the Earth graph into the Moon graph. (b) How long does an object take to fall 20 m on each? (c) An object is dropped from a 30 m platform on Earth. Write its height function $h(t)$ and describe the transformations of $y=t^2$ that produce it.`,
      r`A ripple on a pond spreads so that its area after $t$ seconds is $A(t)=\pi(vt)^2$ cm$^2$, where $v$ cm/s is the speed of the ripple's edge. (a) Compare the graphs for $v=1$ and $v=2$ as a horizontal compression. (b) Show that the same change can be described as a vertical stretch and find its factor. (c) Explain why this works for power functions.`,
      r`A shop's weekly profit, in dollars, from selling a drink at a price of $x$ dollars is $P(x)=-40(x-4.5)^2+810$. (a) Describe the transformations of $y=x^2$ and state the best price and maximum profit. (b) A supplier raises costs so that every profit value drops by 60 dollars. Write the new function and the new maximum. (c) Rewrite $P$ as a function of the price $c$ in cents, and describe the horizontal stretch involved.`,
    ],
  },
};
