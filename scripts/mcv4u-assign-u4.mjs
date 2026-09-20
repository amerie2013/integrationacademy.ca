// MCV4U Unit 4 assignments — Curve Sketching.
const r = String.raw;

export const U4 = {
  "4.1": {
    topic: "Increasing/Decreasing & the First Derivative Test",
    K: [
      r`For $f(x)=2x^3-9x^2+12x-4$, find the intervals where $f$ is increasing and decreasing, and classify each critical point with the first derivative test, giving the function values.`,
      r`Find and classify the critical points of $g(x)=x^4-8x^2$ using a sign chart for $g'$.`,
      r`For $h(x)=\dfrac{x}{x^2+1}$, find the critical numbers, the intervals of increase and decrease, and the local extrema.`,
    ],
    T: [
      r`For $f(x)=x^3+kx$, find the values of $k$ for which $f$ is increasing for all real $x$. When $k<0$, find the critical numbers in terms of $k$ and classify them.`,
      r`Find and classify all critical points of $f(x)=x^2e^{-x}$, and explain why $f(x)\ge0$ for all $x$ implies something about the point at $x=0$.`,
    ],
    C: [
      r`Explain the difference between a critical number and a local extremum. Use $f(x)=x^5$ to show that a critical number need not be an extremum.`,
      r`Explain why the absolute maximum of a function on a closed interval must be found by comparing critical values with the endpoint values, using $f(x)=x^3-6x^2+9x+1$ on $[0,5]$ as an example.`,
    ],
    A: [
      r`The number of bacteria in a culture during treatment is $N(t)=t^3-15t^2+63t+100$ (in thousands) at $t$ hours, $0\le t\le10$. (a) Find the intervals where the population increases and decreases. (b) Find the local maximum and minimum populations. (c) Describe in words what happens to the culture.`,
      r`After heavy rain, the flow of a river past a gauge is $W(t)=20te^{-0.25t}$ cubic metres per second, $t$ in hours. (a) Find $W'(t)$. (b) Find when the flow is largest and its value. (c) Describe how the flow changes before and after that time.`,
      r`The height of a roller-coaster track is $h(x)=\dfrac{x^3-45x^2+600x}{50}$ metres, where $x$ is measured in tens of metres, $0\le x\le25$. (a) Find the critical numbers. (b) Classify each and give the heights. (c) Find the height at the two ends of the track and the absolute maximum and minimum heights.`,
    ],
  },

  "4.2": {
    topic: "Concavity & the Second Derivative",
    K: [
      r`For $f(x)=x^4-6x^2$, find the intervals of concavity and the inflection points.`,
      r`For $f(x)=x^3-9x^2+24x-5$, find the critical numbers and use the second derivative test to classify them. Also find the inflection point.`,
      r`For $f(x)=e^{-x^2}$, find $f'(x)$ and $f''(x)$, the location and value of the maximum, and the $x$-values of the inflection points.`,
    ],
    T: [
      r`The cubic $f(x)=x^3+ax^2+bx+c$ has an inflection point at $(1,3)$ and a horizontal tangent at $x=3$. Find $a$, $b$ and $c$.`,
      r`For $f(x)=x^4$, show that $f'(0)=0$ and $f''(0)=0$, so the second derivative test is inconclusive. Classify $x=0$ another way, and say whether $x=0$ is an inflection point.`,
    ],
    C: [
      r`Explain what concave up and concave down mean for a graph, and what the sign of $f''$ tells you about the slope of the tangent lines as $x$ increases.`,
      r`Explain why $f''(c)=0$ does not guarantee an inflection point. Use $y=x^4$ and $y=x^3$ to show the difference.`,
    ],
    A: [
      r`The total number of cases in an outbreak is $N(t)=-0.02t^3+1.2t^2+10t$ after $t$ days, $0\le t\le 40$. (a) Find $N'(t)$ and $N''(t)$. (b) Find when the outbreak is growing fastest and how fast. (c) Explain what happens to the growth rate after that day and why the inflection point matters for planning.`,
      r`A company's sales lift from advertising is $L(a)=-a^3+12a^2+20a$ thousand dollars for an advertising budget of $a$ thousand dollars. (a) Find $L''(a)$. (b) Find the budget with the greatest marginal return. (c) Explain the idea of "diminishing returns" using your answer.`,
      r`A hot metal part cools as $T(t)=20+60e^{-0.1t}$ degrees Celsius after $t$ minutes. (a) Find $T'(t)$ and $T''(t)$. (b) Show that the graph is decreasing and concave up for all $t\ge0$. (c) Explain in words what concave up says about how the cooling changes over time.`,
    ],
  },

  "4.3": {
    topic: "Critical, Inflection & End Behaviour",
    K: [
      r`For $f(x)=x^4-4x^3$, find the critical numbers, classify them, and find the inflection points. State the end behaviour.`,
      r`For $f(x)=\dfrac{3x^2}{x^2-1}$, find the domain, all asymptotes and the intercepts.`,
      r`A function has $f'(x)<0$ on $(-\infty,-1)$, $f'(x)>0$ on $(-1,3)$, $f'(x)<0$ on $(3,\infty)$, and $f''(x)>0$ on $(-\infty,1)$, $f''(x)<0$ on $(1,\infty)$. Describe the local extrema and the inflection point, and sketch a possible graph in words.`,
    ],
    T: [
      r`You are given only $f'(x)=x^2(x-4)$. Find the critical numbers and classify them, use $f''(x)=x(3x-8)$ to find the inflection points, and explain why $x=0$ is a critical number but not an extremum.`,
      r`For $f(x)=\dfrac{x}{x^2+4}$, decide if $f$ is odd or even, find the horizontal asymptote, the critical numbers and the local extrema, and explain how the symmetry could have been used to shorten the work.`,
    ],
    C: [
      r`Explain the difference between the end behaviour of a polynomial and a horizontal asymptote of a rational function, and give an example of each.`,
      r`Explain how you would use $f$, $f'$ and $f''$ together to describe a graph, and what each one contributes that the others do not.`,
    ],
    A: [
      r`The number of fish in a pond is $P(t)=100+\dfrac{1200t}{t+6}$ after $t$ months. (a) Find the horizontal asymptote and interpret it. (b) Find $P'(t)$ and $P''(t)$. (c) Show that the population is always increasing and concave down, and explain what this means for the pond.`,
      r`A factory's cost of producing $q$ units is $C(q)=0.002q^3-0.24q^2+12q+300$ dollars. (a) Find the marginal cost $C'(q)$. (b) Find the inflection point of $C$ and show that it is where the marginal cost is smallest. (c) Explain what this means for the cost of producing more units.`,
      r`A car's fuel use is $F(v)=0.0005v^2-0.06v+5$ litres per 100 km at speed $v$ km/h, $30\le v\le120$. (a) Find the critical number and classify it. (b) Find the most economical speed and the fuel use there. (c) Describe the end behaviour of $F$ and what it means for high speeds.`,
    ],
  },

  "4.4": {
    topic: "Full Curve Sketching",
    K: [
      r`Do a full analysis and sketch of $f(x)=2x^3-3x^2-12x$: intercepts (exact values), critical points, inflection point, concavity and end behaviour.`,
      r`For $f(x)=\dfrac{x^2}{x^2-4}$, find the domain, the asymptotes, the intercepts, the intervals of increase and decrease and the local extrema, and sketch the graph.`,
      r`For $f(x)=x\ln x$, $x>0$, find $\displaystyle\lim_{x\to0^+}f(x)$, the critical point, its type, and the concavity. Describe the graph.`,
    ],
    T: [
      r`A continuous even function has a local maximum at $(0,4)$, $x$-intercepts at $x=\pm3$, inflection points at $x=\pm1.5$ and the line $y=-2$ as a horizontal asymptote. Describe its intervals of increase, decrease and concavity, sketch it, and explain why it cannot be a polynomial.`,
      r`The cubic $f(x)=x^3+ax^2+bx$ has a local maximum at $x=-1$ and a local minimum at $x=3$. Find $a$ and $b$, then find the local extreme values and the inflection point.`,
    ],
    C: [
      r`Write an ordered checklist for sketching a curve from its equation, and explain why the domain and asymptotes should be found before using derivatives.`,
      r`Explain how the sign and zeros of the graph of $f'$ tell you where $f$ is increasing, decreasing and has local extrema, and how the graph of $f'$ itself being increasing or decreasing gives concavity of $f$.`,
    ],
    A: [
      r`The concentration of a drug in the blood is $C(t)=t^2e^{-t/2}$ mg/L, $t\ge0$ hours. (a) Find the critical numbers and classify them. (b) Find the times of the inflection points. (c) Find the horizontal asymptote and sketch the curve, describing what the patient experiences.`,
      r`A cylindrical can holds 400 cm$^3$, so its surface area is $S(r)=2\pi r^2+\dfrac{800}{r}$ cm$^2$ for radius $r>0$. (a) Find the vertical asymptote and the end behaviour. (b) Find the critical number and classify it. (c) Sketch $S(r)$ and state the radius that uses the least metal.`,
      r`A skill score is modelled by $L(t)=\dfrac{100}{1+9e^{-0.5t}}$ after $t$ weeks. (a) Find $L(0)$ and the horizontal asymptotes. (b) Find $L'(t)$ and show that $L$ is always increasing. (c) It can be shown that $L''(t)=0$ at $t=2\ln9\approx4.39$. Find $L$ there, sketch the graph and interpret the inflection point.`,
    ],
  },
};
