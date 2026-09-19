// MHF4U Unit 3 assignments — Rational Functions.
const r = String.raw;

export const U3 = {
  "3.1": {
    topic: "Reciprocal & Rational Functions",
    K: [
      r`For $y=\dfrac{1}{x+4}-2$, state the vertical asymptote, the horizontal asymptote, the domain, the range, and the $x$- and $y$-intercepts.`,
      r`Find all asymptotes and any holes of $f(x)=\dfrac{x^2-9}{x^2-x-6}$. Give the coordinates of any hole.`,
      r`Determine the horizontal asymptote, if there is one, of (a) $y=\dfrac{3x^2+1}{x^2-4}$ (b) $y=\dfrac{2x-1}{x^2+1}$ (c) $y=\dfrac{x^2+1}{x-1}$. Explain what the degrees of the numerator and denominator tell you in each case.`,
    ],
    T: [
      r`Write an equation of a rational function with vertical asymptotes at $x=2$ and $x=-1$, a horizontal asymptote at $y=3$, and $x$-intercepts at $x=4$ and $x=-3$. Verify your equation by finding its $y$-intercept.`,
      r`Let $f(x)=\dfrac{x^2-1}{x-1}$ and $g(x)=\dfrac{x^2+1}{x-1}$. Compare the graphs of $f$ and $g$ near $x=1$. Use tables of values close to $x=1$ to justify why one graph has a hole and the other has a vertical asymptote.`,
    ],
    C: [
      r`Explain how to tell from the equation of a rational function whether a zero of the denominator produces a vertical asymptote or a hole, and how the horizontal asymptote is found by comparing degrees. Give an example of each.`,
      r`Describe what happens to the graph of $y=\dfrac1x$ as $x\to0^+$, as $x\to0^-$, as $x\to\infty$ and as $x\to-\infty$, using correct asymptote notation and terminology.`,
    ],
    A: [
      r`A company's average cost per item, in dollars, when it produces $x$ items is $A(x)=\dfrac{500+20x}{x}$. (a) Find $A(10)$, $A(100)$ and $A(1000)$. (b) State the vertical and horizontal asymptotes and explain what each means in this context. (c) Explain why the average cost can never fall below 20 dollars.`,
      r`A 240 km trip is driven at a steady speed of $v$ km/h with one 30-minute rest stop, so the total time in hours is $T(v)=\dfrac{240}{v}+0.5$. (a) Find $T(80)$ and $T(120)$. (b) State the asymptotes and interpret the horizontal asymptote. (c) Describe how the graph is a transformation of $y=\dfrac1x$.`,
      r`A student's test score after $n$ hours of practice is modelled by $S(n)=\dfrac{90n}{n+3}$, $n\ge0$. (a) Find $S(3)$, $S(9)$ and $S(27)$. (b) State the horizontal asymptote and interpret it. (c) Explain why the vertical asymptote of the equation is not part of the graph in this context.`,
    ],
  },

  "3.2": {
    topic: "Graphs of Rational Functions",
    K: [
      r`For $f(x)=\dfrac{2x-6}{x+1}$, find the intercepts and the equations of both asymptotes.`,
      r`For $f(x)=\dfrac{x}{x^2-4}$, find the intercepts and asymptotes, and determine the sign of $f(x)$ in each interval determined by the $x$-intercept and vertical asymptotes.`,
      r`Write $y=\dfrac{x+2}{x-1}$ in the form $y=\dfrac{a}{x-1}+c$, then state the asymptotes, domain and range, and say whether each branch is increasing or decreasing.`,
    ],
    T: [
      r`Write an equation of a rational function with a vertical asymptote at $x=-2$, a hole at $(1,4)$ and a horizontal asymptote at $y=2$. Show how the hole determines one of the constants.`,
      r`Show algebraically that the graph of $y=\dfrac{x^2+1}{x^2-1}$ never crosses its horizontal asymptote, and explain why it has no $x$-intercepts. Then describe the behaviour of the graph on either side of each vertical asymptote.`,
    ],
    C: [
      r`Describe a step-by-step method for sketching a rational function, and explain how sign analysis tells you whether the graph goes up or down on each side of a vertical asymptote.`,
      r`Explain the difference between a graph crossing a horizontal asymptote and a graph crossing a vertical asymptote. Use $y=\dfrac{x}{x^2+1}$ to give an example of a function that crosses its horizontal asymptote.`,
    ],
    A: [
      r`The concentration of a medication in the blood, in mg/L, $t$ hours after an injection is $C(t)=\dfrac{4t}{t^2+1}$. (a) Find $C(0.5)$, $C(1)$, $C(2)$ and $C(4)$. (b) Identify the horizontal asymptote and explain what it means for the patient. (c) Use your table to estimate when the concentration is highest and to estimate the times when it is at least 1.5 mg/L.`,
      r`Two resistors of $6\ \Omega$ and $x\ \Omega$ are connected in parallel, so the combined resistance is $R(x)=\dfrac{6x}{6+x}$ ohms, $x>0$. (a) Find $R(6)$, $R(12)$ and $R(60)$. (b) State the horizontal asymptote and explain why the combined resistance can never reach that value. (c) Explain why $R(x)$ is always less than both 6 and $x$.`,
      r`A call centre's average waiting time in minutes is $W(\rho)=\dfrac{2\rho}{1-\rho}$, where $\rho$ is the fraction of time the operators are busy, $0\le\rho<1$. (a) Find $W(0.5)$, $W(0.8)$, $W(0.9)$ and $W(0.95)$. (b) Identify the vertical asymptote and explain what it means for managers. (c) Find the largest busy fraction for which the average wait is at most 10 minutes.`,
    ],
  },

  "3.3": {
    topic: "Solving Rational Equations & Inequalities",
    K: [
      r`Solve $\dfrac{2}{x+1}=\dfrac{3}{x-2}$ and state the restrictions on $x$.`,
      r`Solve $\dfrac{5}{x-2}-\dfrac{3}{x+2}=\dfrac{2}{x^2-4}$. State the restrictions and check your answer.`,
      r`Solve the inequality $\dfrac{x+1}{x-2}\le 0$ using a sign chart, and write the answer in interval notation.`,
    ],
    T: [
      r`Solve $\dfrac{x^2}{x-2}=\dfrac{4}{x-2}$. Explain which solution is extraneous and why.`,
      r`Solve $\dfrac{x-1}{x+3}\ge 2$. Explain why you must not multiply both sides by $x+3$ before considering its sign, and show how moving everything to one side avoids the problem.`,
    ],
    C: [
      r`A student solves $\dfrac{1}{x-1}>2$ by multiplying both sides by $x-1$ to get $x<1.5$. Show with a test value that this answer is wrong, explain the error and give the correct solution.`,
      r`Explain the role of restrictions in rational equations and inequalities: why extraneous roots occur, why every answer must be checked, and which end values are open or closed intervals in a rational inequality.`,
    ],
    A: [
      r`Two hoses fill a pool together in 2 hours. Hose B alone takes 3 hours longer than hose A alone. (a) Let $x$ be the time hose A takes alone and write an equation using work rates. (b) Solve it. (c) State how long each hose takes alone and check that they fill $\tfrac12$ of the pool in one hour together.`,
      r`A boat travels 24 km upstream and then 24 km back downstream in a total of 5 hours. The current flows at 2 km/h. (a) Write an equation for the boat's speed $v$ in still water. (b) Solve it and reject any solution that has no meaning. (c) State the boat's speed in still water and the time taken in each direction.`,
      r`A 20 L solution is 30% acid, so it contains 6 L of acid. Pure water is added to dilute it, and $x$ litres are added. (a) Write a rational expression for the acid concentration. (b) Solve an inequality to find how much water must be added for the concentration to be at most 20%. (c) How much water must be added for it to be at most 12%?`,
    ],
  },
};
