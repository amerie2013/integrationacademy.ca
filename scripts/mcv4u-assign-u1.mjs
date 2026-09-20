// MCV4U Unit 1 assignments — Rates of Change & Limits.
// 3 Knowledge & Understanding, 2 Thinking, 2 Communication, 3 Application; one line per question.
const r = String.raw;

export const U1 = {
  "1.1": {
    topic: "Average & Instantaneous Rate of Change",
    K: [
      r`Find the average rate of change of $f(x)=x^4-2x$ on $[1,3]$ and of $g(x)=e^x$ on $[0,2]$ (to two decimal places), and state what each value represents on the graph.`,
      r`The distance $d$ (in metres) travelled by a sled is recorded: $t$: 0, 1, 2, 3, 4 seconds and $d$: 0, 3, 10, 21, 36. Find the average rate of change on $[0,2]$ and on $[2,4]$, and describe how the sled's motion changes.`,
      r`Use the table in the previous question to estimate the instantaneous speed of the sled at $t=2$ using the interval $[1,3]$, and explain why an interval that is symmetric about $t=2$ usually gives a better estimate than $[2,3]$.`,
    ],
    T: [
      r`For $f(x)=x(x-6)$, show that the average rate of change on $[0,6]$ is 0 even though the function is never constant. Then find the average rate on $[0,3]$ and on $[3,6]$, and describe the graph's shape that explains these three values.`,
      r`Estimate the instantaneous rate of change of $f(x)=e^x$ at $x=1$ using $h=0.1$, $h=0.01$ and $h=0.001$. What number are the estimates approaching? Then repeat with $h=-0.001$ and explain what the result tells you about the tangent.`,
    ],
    C: [
      r`Explain, using the words "secant", "tangent" and "difference quotient", how the average rate of change over $[a,a+h]$ becomes the instantaneous rate at $x=a$ as $h$ gets smaller. Use a diagram description.`,
      r`A classmate says: "To find an instantaneous rate you need two points, just like an average rate." Explain what is right and what is wrong, and describe how the second point is used.`,
    ],
    A: [
      r`A car brakes and its distance from the braking point is $s(t)=20t-1.5t^2$ metres, with values 0, 18.5, 34, 46.5, 56, 62.5 at $t=0,1,\dots,5$ s. (a) Find the average speed on $[0,5]$ and on $[0,1]$. (b) Estimate the speed at $t=3$ using $[2,4]$. (c) Explain why the car's speed is decreasing.`,
      r`Water drains from a tank so that its volume, in litres, is $V(t)=400\left(1-\dfrac{t}{20}\right)^2$, with $V=400, 225, 100, 25, 0$ at $t=0,5,10,15,20$ minutes. (a) Find the average rate of change on $[0,10]$ and on $[10,20]$. (b) Estimate the rate at $t=10$ using $[5,15]$. (c) Explain the sign and the change in size of these rates.`,
      r`A social-media page has $F(d)=1000(1.08)^d$ followers after $d$ days. (a) Find the average rate of growth over the first 10 days. (b) Estimate the instantaneous rate at $d=10$ using $h=0.001$. (c) Explain why the instantaneous rate at day 10 is greater than the 10-day average.`,
    ],
  },

  "1.2": {
    topic: "The Limit of a Function",
    K: [
      r`Evaluate: (a) $\displaystyle\lim_{x\to-1}(2x^3-x+4)$ (b) $\displaystyle\lim_{x\to3}\dfrac{x^2-5x+6}{x-3}$ (c) $\displaystyle\lim_{x\to9}\dfrac{\sqrt{x}-3}{x-9}$. Name the technique used in each.`,
      r`Evaluate: (a) $\displaystyle\lim_{x\to\infty}\dfrac{6x^3-x}{2x^3+5}$ (b) $\displaystyle\lim_{x\to-\infty}\dfrac{x+4}{x^2+1}$ (c) $\displaystyle\lim_{x\to\infty}\dfrac{3x^2+1}{x+2}$, stating clearly if a limit does not exist.`,
      r`Find the one-sided limits at $x=2$ and decide whether the limit exists: (a) $f(x)=\dfrac{|x-2|}{x-2}$ (b) $g(x)=\begin{cases}x^2-5,&x<2\\3x-7,&x\ge2\end{cases}$.`,
    ],
    T: [
      r`Evaluate $\displaystyle\lim_{x\to4}\dfrac{\sqrt{x+5}-3}{x-4}$ by rationalizing. Show why substitution first gives the form $\tfrac00$ and what each step of the conjugate method does.`,
      r`Evaluate $\displaystyle\lim_{x\to2}\dfrac{\frac1x-\frac12}{x-2}$ by simplifying the complex fraction. Then check your answer with a table of values for $x=1.9,1.99,2.01,2.1$.`,
    ],
    C: [
      r`Explain how $\displaystyle\lim_{x\to7}\dfrac{x^2-49}{x-7}$ can exist even though the function is undefined at $x=4$. Include a description of the graph.`,
      r`Explain how to find a limit as $x\to\infty$ of a rational function by comparing degrees. Describe all three cases (numerator degree smaller, equal, larger) and give one example of each.`,
    ],
    A: [
      r`A salt solution flows into a tank so that the concentration after $t$ minutes is $C(t)=\dfrac{50t}{2t+100}$ g/L. (a) Find $\displaystyle\lim_{t\to\infty}C(t)$ and interpret it. (b) Find $C(10)$ and $C(100)$. (c) At what time is the concentration 20 g/L?`,
      r`A parachutist's speed is $v(t)=55\left(1-e^{-0.2t}\right)$ m/s. (a) Find $v(5)$, $v(10)$ and $v(20)$. (b) Find $\displaystyle\lim_{t\to\infty}v(t)$ and explain what it means in this context. (c) Explain why the speed never actually reaches the limit.`,
      r`A drone's height is $h(t)=t^2+3t$ metres. The average velocity between 4 s and $t$ s is $\dfrac{h(t)-h(4)}{t-4}$. (a) Simplify it by factoring. (b) Evaluate it for $t=4.1$, $4.01$ and $3.99$. (c) Find the limit as $t\to4$ and interpret it.`,
    ],
  },

  "1.3": {
    topic: "Continuity & Limit Laws",
    K: [
      r`Find every discontinuity of $f(x)=\dfrac{x^2-7x+12}{x^2-9}$ and classify each as removable, jump or infinite, justifying your answer with limits.`,
      r`Find $k$ so that $f(x)=\begin{cases}kx+1,&x<2\\x^2-k,&x\ge2\end{cases}$ is continuous at $x=2$, and verify all three conditions of continuity.`,
      r`Given $\displaystyle\lim_{x\to a}f(x)=4$ and $\displaystyle\lim_{x\to a}g(x)=-2$, use the limit laws to find $\displaystyle\lim_{x\to a}\big[3f(x)-g(x)^2\big]$, $\displaystyle\lim_{x\to a}\big[f(x)g(x)\big]$, $\displaystyle\lim_{x\to a}\dfrac{f(x)}{g(x)+5}$ and $\displaystyle\lim_{x\to a}\sqrt{f(x)+5}$.`,
    ],
    T: [
      r`The function $f(x)=\begin{cases}x+a,&x<-1\\bx,&-1\le x\le2\\8-x,&x>2\end{cases}$ is continuous everywhere. Find $a$ and $b$, showing the two equations you solve.`,
      r`For $f(x)=\dfrac{x^2+bx-12}{x-3}$, find the value of $b$ for which $\displaystyle\lim_{x\to3}f(x)$ exists, and find that limit. Explain why $b$ is forced to be that value.`,
    ],
    C: [
      r`Describe the three types of discontinuity (removable, jump, infinite) in words and with a sketch description of each, and say which one can be "repaired" by redefining the function at one point.`,
      r`A student says: "$f$ is defined at $x=a$, so $f$ is continuous at $a$." Explain why this is not enough, and give a counterexample.`,
    ],
    A: [
      r`A city's parking charge, in dollars, for $t$ hours is 3 for $0<t\le1$, 5 for $1<t\le2$ and 7 for $2<t\le3$. (a) Find the one-sided limits at $t=1$ and $t=2$. (b) Classify the discontinuities and say where the function is continuous. (c) Explain in context what happens to the cost just after each hour.`,
      r`A province taxes income $x$ dollars at $T(x)=0.10x$ for $x\le40\,000$ and $T(x)=kx-2000$ for $x>40\,000$. (a) Find $k$ so that the tax has no sudden jump at 40 000. (b) Find the tax on 40 000 and on 50 000. (c) Explain why a continuous tax function is fair.`,
      r`A model for the concentration of a medication is $C(t)=\dfrac{t^2-100}{t-10}$ mg/L for $t\ge0$ hours. (a) Explain why the model is undefined at $t=10$. (b) Find $\displaystyle\lim_{t\to10}C(t)$. (c) How should $C(10)$ be defined to make the model continuous, and why is that reasonable?`,
    ],
  },

  "1.4": {
    topic: "Slope of Tangent",
    K: [
      r`Use the limit $m=\displaystyle\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}$ to find the exact slope of the tangent to $f(x)=x^3-x$ at $x=2$.`,
      r`Find the exact slope of the tangent to $f(x)=\dfrac{1}{x+2}$ at $x=1$, and write the equation of the tangent line.`,
      r`Find the exact slope of the tangent to $f(x)=\sqrt{x+5}$ at $x=4$ using the conjugate, and write the equation of the tangent line.`,
    ],
    T: [
      r`Use the limit definition with a general point $x=a$ to find the slope of $y=x^2-6x+2$ at $a$, and use your formula to find the point where the tangent is horizontal.`,
      r`The tangent to $y=x^2$ at $x=a$ has slope $2a$ (you may derive this with a limit). Find the equations of both tangent lines to $y=x^2$ that pass through the point $(1,-3)$.`,
    ],
    C: [
      r`Explain the difference between the slope of a secant line and the slope of a tangent line, and explain why the difference quotient produces $\tfrac00$ if you substitute $h=0$ directly.`,
      r`Explain why the graph of $y=|x|$ has no tangent at $x=0$. Use the one-sided slopes $\displaystyle\lim_{h\to0^+}\dfrac{|h|}{h}$ and $\displaystyle\lim_{h\to0^-}\dfrac{|h|}{h}$.`,
    ],
    A: [
      r`The profile of a hill is $h(x)=40-0.01x^2$ metres, where $x$ is the horizontal distance in metres. (a) Use a limit to find the slope of the hill at $x=30$. (b) Write the equation of the tangent line there. (c) Find the angle of the hillside to the horizontal at that point.`,
      r`On a dry road the stopping distance is $d(v)=0.006v^2+0.2v$ metres at $v$ km/h. (a) Use a limit to find the rate of change of stopping distance at $v=80$. (b) Interpret it in words. (c) Compare it with the average rate of change from 80 to 100 km/h.`,
      r`A hot drink cools according to $T(t)=20+\dfrac{60}{t+1}$ degrees Celsius after $t$ minutes. (a) Use a limit to find the instantaneous rate of change at $t=2$. (b) Interpret the sign and units. (c) Write the equation of the tangent line at $t=2$.`,
    ],
  },

  "1.5": {
    topic: "Derivative Using Definition",
    K: [
      r`Use the definition $f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$ to find $f'(x)$ for $f(x)=x^3$. Show the expansion of $(x+h)^3$.`,
      r`Use the definition to find $f'(x)$ for $f(x)=2x^2-3x+5$, then find the slope of the tangent at $x=-1$.`,
      r`Use the definition to find $f'(x)$ for $f(x)=\dfrac{1}{x+3}$, and state the domain of $f'$.`,
    ],
    T: [
      r`Use the definition, with a conjugate, to find $f'(x)$ for $f(x)=\sqrt{2x+1}$. Then find where the tangent has slope $\tfrac13$.`,
      r`For $f(x)=\begin{cases}x^2,&x\le1\\2x-1,&x>1\end{cases}$, find the left-hand and right-hand derivatives at $x=1$ using the difference quotient and decide whether $f$ is differentiable there.`,
    ],
    C: [
      r`Explain the difference between $f'(a)$ and $f'(x)$, and how knowing the formula $f'(x)$ saves work compared with computing a limit at each point.`,
      r`Explain why the $h$ cancels after simple algebra for $f(x)=x^3$ but a different technique (a common denominator, or a conjugate) is needed for $\tfrac{1}{x+3}$ and $\sqrt{2x+1}$.`,
    ],
    A: [
      r`A cyclist's position is $s(t)=1.2t^2+0.5t$ metres after $t$ seconds. (a) Use the definition to find $v(t)=s'(t)$. (b) Find the speed at $t=5$ in m/s and in km/h. (c) When does the cyclist reach 18 m/s?`,
      r`A company's profit, in hundreds of dollars, from selling $x$ hundred items is $P(x)=-0.5x^2+40x-200$. (a) Use the definition to find $P'(x)$. (b) Find $P'(30)$ and interpret it. (c) Find where $P'(x)=0$ and explain what that sales level means.`,
      r`An oil spill spreads in a circle of area $A(r)=\pi r^2$ square metres, where $r$ is the radius in metres. (a) Use the definition to find $A'(r)$. (b) Evaluate $A'(50)$ and interpret it. (c) Explain why $A'(r)$ equals the circumference.`,
    ],
  },
};
