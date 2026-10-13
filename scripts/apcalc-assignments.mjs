// AP Calculus AB exam prep — written assignments, one per lesson, keyed by
// lesson code. Ten original questions each, different from the lessons, the
// worksheets and the question bank. They use the four section headings that
// components/AssignmentBody.tsx recognises, mapped onto what the exam scores:
//   Knowledge & Understanding → carrying out procedures
//   Application               → problems in context, with units
//   Thinking                  → non-routine and multi-step reasoning
//   Communication             → justification and correct notation
// seed-apcalc.mjs upserts these by title and never deletes an assignment,
// because student submissions hang off the assignment row.
const r = String.raw;

// These classroom-style assignments are kept in the database but hidden from
// students: the user judged (2026-10-05) that the Ontario four-category format
// does not suit an exam-preparation course. Flip to true to show them again.
export const SHOW_ASSIGNMENTS = false;

const A4 = (code, topic, knowledge, application, thinking, communication) => {
  let n = 0;
  const sec = (arr) => arr.map((q) => `${++n}. ${q}`);
  return {
    title: `Assignment ${code} — ${topic}`,
    description: [
      "Knowledge & Understanding", ...sec(knowledge),
      "Application", ...sec(application),
      "Thinking", ...sec(thinking),
      "Communication", ...sec(communication),
    ].join("\n"),
  };
};

export const ASSIGN = {
  "1.1": A4("1.1", "The Instant Problem: From Average Rates to Limits",
    [
      r`Find the average rate of change of $f(x)=2x^2-x$ on the interval $[1,4]$.`,
      r`Find the average rate of change of $g(x)=\sqrt{x}$ on the interval $[1,9]$.`,
      r`A function has $\displaystyle\lim_{x\to2^-}f(x)=6$, $\displaystyle\lim_{x\to2^+}f(x)=6$ and $f(2)=0$. State $\displaystyle\lim_{x\to2}f(x)$ and explain why $f(2)$ does not matter.`,
    ],
    [
      r`The altitude of a drone, $h(t)$ metres, is recorded at $t=0,\ 5,\ 12,\ 20$ seconds as $0,\ 40,\ 75,\ 95$. Find the average rate of change of $h$ on $[5,12]$ and interpret it with units.`,
      r`A cyclist's distance from home is $s(t)=3t^2-t$ metres after $t$ seconds. Simplify the average rate of change of $s$ on $[2,2+h]$ for $h\neq0$, and state the instantaneous rate of change at $t=2$.`,
      r`The average rate of change of a function $f$ on $[1,5]$ is $3$, and $f(1)=-4$. Find $f(5)$.`,
    ],
    [
      r`Let $g(x)=\dfrac{x^2-25}{x-5}$ for $x\neq5$ and $g(5)=c$. For what value of $c$ is $\displaystyle\lim_{x\to5}g(x)=g(5)$? Show your reasoning.`,
      r`Write a formula for a function $f$ with $\displaystyle\lim_{x\to1}f(x)=4$ and $f(1)=-1$, and sketch its graph.`,
    ],
    [
      r`Explain in your own words why the speed of a car at a single instant cannot be found by one division of a distance by a time.`,
      r`A student writes: "From $t=5$ to $t=12$ the drone went up 5 metres per second." State two things that are missing from, or imprecise in, this interpretation, and write a correct sentence.`,
    ]),

  "1.2": A4("1.2", "Reading Limits off a Graph",
    [
      r`Sketch the graph of $f(x)=\begin{cases}x+2,&x<1\\5,&x=1\\4-x,&x>1\end{cases}$ on $[-2,4]$, using open and closed circles correctly.`,
      r`For the function in question 1, find $\displaystyle\lim_{x\to1^-}f(x)$, $\displaystyle\lim_{x\to1^+}f(x)$, $\displaystyle\lim_{x\to1}f(x)$ and $f(1)$.`,
      r`Sketch the graph of $g(x)=\begin{cases}x^2,&x\le1\\3,&x>1\end{cases}$ and find $\displaystyle\lim_{x\to1^-}g(x)$, $\displaystyle\lim_{x\to1^+}g(x)$ and $g(1)$.`,
    ],
    [
      r`The number of staff on duty in a shop is $N(t)$, where $t$ is hours after opening. It is 2 for $0\le t<4$ and 5 for $4\le t\le8$. Find $\displaystyle\lim_{t\to4^-}N(t)$, $\displaystyle\lim_{t\to4^+}N(t)$ and $N(4)$, and say what each means.`,
      r`For $f$ in question 1, evaluate $\displaystyle\lim_{x\to1}\big[f(x)\big]^2-f(1)$.`,
      r`For $g$ in question 3, find all values of $a$ at which $\displaystyle\lim_{x\to a}g(x)$ does not exist.`,
    ],
    [
      r`For $f$ in question 1, find $\displaystyle\lim_{x\to1}f\big(f(x)\big)$. State from which side $f(x)$ approaches its limit, and explain why that matters.`,
      r`Sketch the graph of one function $h$ that satisfies all of: $\displaystyle\lim_{x\to0}h(x)=2$, $h(0)=-1$, $\displaystyle\lim_{x\to3^-}h(x)=4$, $\displaystyle\lim_{x\to3^+}h(x)=1$ and $h(3)=1$.`,
    ],
    [
      r`For $g$ in question 3, does $\displaystyle\lim_{x\to1}g(x)$ exist? Justify your answer in the form an exam reader would accept.`,
      r`Describe the three different ways in which a limit can fail to exist, and give an example function for each.`,
    ]),

  "1.3": A4("1.3", "Limits from Numerical Evidence",
    [
      r`A table gives $f(0.9)=2.71$, $f(0.99)=2.9701$, $f(1.01)=3.0301$ and $f(1.1)=3.31$. Estimate $\displaystyle\lim_{x\to1}f(x)$.`,
      r`A table gives $g(-0.1)=7.2$, $g(-0.01)=7.02$, $g(0.01)=-1.98$ and $g(0.1)=-1.8$. What does it suggest about $\displaystyle\lim_{x\to0}g(x)$?`,
      r`List six inputs you would use to investigate $\displaystyle\lim_{x\to5}f(x)$ numerically, and explain your choice.`,
    ],
    [
      r`(Calculator) Estimate $\displaystyle\lim_{x\to0}\dfrac{\tan(4x)}{x}$ to three decimal places, showing the table values you used.`,
      r`(Calculator) Estimate $\displaystyle\lim_{x\to2}\dfrac{x^4-16}{x-2}$, showing the table values you used.`,
      r`(Calculator) The concentration of a drug is modelled by $C(t)=\dfrac{5t}{t^2+1}$. Use a table to estimate $\displaystyle\lim_{t\to0}\dfrac{C(t)}{t}$ and say what quantity this limit approximates.`,
    ],
    [
      r`(Calculator) Investigate $\displaystyle\lim_{x\to0}\cos\!\left(\dfrac{\pi}{x}\right)$ using the inputs $x=\tfrac12,\ \tfrac14,\ \tfrac16$ and then $x=1,\ \tfrac13,\ \tfrac15$. What do the two tables suggest, and what do you conclude?`,
      r`A continuous function has $f(3.9)=7.6$, $f(3.99)=7.96$, $f(4.01)=8.04$ and $f(4.1)=8.4$. Estimate $f(4)$ and explain which property of $f$ you used.`,
    ],
    [
      r`Explain why a table of values can support, but can never prove, a statement about a limit.`,
      r`A student reports that $\dfrac{\sin x}{x}$ is approximately $0.01745$ when $x=0.001$. Explain the mistake and what the student should check before every calculator section.`,
    ]),

  "1.4": A4("1.4", "Limit Laws and Direct Substitution",
    [
      r`Evaluate $\displaystyle\lim_{x\to3}\left(2x^3-5x+1\right)$.`,
      r`Evaluate $\displaystyle\lim_{x\to-2}\dfrac{x^2+6}{x-3}$.`,
      r`Evaluate $\displaystyle\lim_{x\to0}\left(4\cos x-e^{x}+\ln(x+1)\right)$.`,
    ],
    [
      r`Given $\displaystyle\lim_{x\to5}f(x)=4$ and $\displaystyle\lim_{x\to5}g(x)=-3$, find $\displaystyle\lim_{x\to5}\big[2f(x)-g(x)^2\big]$.`,
      r`With the same $f$ and $g$, find $\displaystyle\lim_{x\to5}\dfrac{f(x)+g(x)}{\sqrt{f(x)}+g(x)}$.`,
      r`With the same $f$ and $g$, explain what can be said about $\displaystyle\lim_{x\to5}\dfrac{g(x)}{f(x)-4}$.`,
    ],
    [
      r`Suppose $\displaystyle\lim_{x\to2}\dfrac{f(x)-9}{x-2}=-4$. Find $\displaystyle\lim_{x\to2}f(x)$, showing each step.`,
      r`Let $g(x)=1-(x-3)^2$ and $f(u)=\begin{cases}3u,&u<1\\u+7,&u\ge1.\end{cases}$ Find $\displaystyle\lim_{x\to3}f\big(g(x)\big)$ and explain why it is not $f(1)$.`,
    ],
    [
      r`Explain why $\displaystyle\lim_{x\to2}\dfrac{x^2+1}{x+3}$ may be found by substitution. State the property that justifies it.`,
      r`State the condition under which $\displaystyle\lim_{x\to c}f\big(g(x)\big)=f\!\left(\lim_{x\to c}g(x)\right)$, and describe what you must do when the condition fails.`,
    ]),

  "1.5": A4("1.5", "Resolving 0/0: Factoring, Conjugates and Compound Fractions",
    [
      r`Evaluate $\displaystyle\lim_{x\to6}\dfrac{x^2-36}{x-6}$.`,
      r`Evaluate $\displaystyle\lim_{x\to-4}\dfrac{x^2+x-12}{x^2+4x}$.`,
      r`Evaluate $\displaystyle\lim_{h\to0}\dfrac{(5+h)^2-25}{h}$.`,
    ],
    [
      r`Evaluate $\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+49}-7}{x}$.`,
      r`Evaluate $\displaystyle\lim_{x\to4}\dfrac{\frac{1}{x}-\frac14}{x-4}$.`,
      r`Evaluate $\displaystyle\lim_{x\to2}\dfrac{x^4-16}{x^2-4}$.`,
    ],
    [
      r`Find the value of $k$ for which $\displaystyle\lim_{x\to1}\dfrac{x^2+kx-5}{x-1}$ exists, and find the limit.`,
      r`Evaluate $\displaystyle\lim_{x\to-2}\dfrac{|x+2|}{x^2-4}$, or show that it does not exist.`,
    ],
    [
      r`A student writes $\displaystyle\lim_{x\to6}\dfrac{x^2-36}{x-6}=\dfrac{0}{0}=$ undefined. Explain what is wrong, and write a correct solution with correct notation on every line.`,
      r`Explain why it is legitimate to cancel the factor $(x-6)$ when evaluating the limit in question 1, even though the original expression is undefined at $x=6$.`,
    ]),

  "1.6": A4("1.6", "Trapping a Limit: The Squeeze Theorem",
    [
      r`Evaluate $\displaystyle\lim_{x\to0}\dfrac{\sin(9x)}{x}$.`,
      r`Evaluate $\displaystyle\lim_{x\to0}\dfrac{\sin(2x)}{7x}$.`,
      r`Evaluate $\displaystyle\lim_{x\to0}\dfrac{\tan(5x)}{\sin(2x)}$.`,
    ],
    [
      r`A function satisfies $3-x^2\le f(x)\le3+2x^2$ for all $x$. Find $\displaystyle\lim_{x\to0}f(x)$, with justification.`,
      r`A function satisfies $6x-9\le g(x)\le x^2$ for all $x$. Find $\displaystyle\lim_{x\to3}g(x)$, with justification.`,
      r`Evaluate $\displaystyle\lim_{x\to0}\dfrac{1-\cos(4x)}{x^2}$.`,
    ],
    [
      r`A function satisfies $x-1\le h(x)\le x+1$ for all $x$. Can $\displaystyle\lim_{x\to0}h(x)$ be determined? Explain, and give two different functions $h$ that satisfy the inequality but have different behaviour at 0.`,
      r`Evaluate $\displaystyle\lim_{x\to\infty}\dfrac{5+2\cos x}{x}$, with justification.`,
    ],
    [
      r`Write a complete squeeze-theorem argument showing that $\displaystyle\lim_{x\to0}x^2\cos\!\left(\dfrac{5}{x}\right)=0$.`,
      r`Explain why the argument "$\displaystyle\lim_{x\to0}x^2\cdot\lim_{x\to0}\cos\!\left(\tfrac5x\right)=0$" is not valid, even though it gives the right number.`,
    ]),

  "1.7": A4("1.7", "Where Graphs Break: Classifying Discontinuities",
    [
      r`Classify the discontinuity of $f(x)=\dfrac{x^2-49}{x-7}$ at $x=7$.`,
      r`Classify the discontinuity of $f(x)=\dfrac{x+2}{x-6}$ at $x=6$.`,
      r`Classify the discontinuity at $x=2$ of $f(x)=\begin{cases}x+1,&x<2\\6-x,&x\ge2.\end{cases}$`,
    ],
    [
      r`Find and classify all discontinuities of $f(x)=\dfrac{x^2-2x-8}{x^2-16}$.`,
      r`How many vertical asymptotes does the graph of $f(x)=\dfrac{x^2-1}{x^3-x}$ have? Justify.`,
      r`A parking garage charges 4 dollars for up to one hour and 7 dollars for more than one hour up to two hours. Describe the discontinuity of the cost function at $t=1$ hour, using one-sided limits.`,
    ],
    [
      r`For what value of $a$ does $f(x)=\dfrac{x^2+ax+15}{x-3}$ have a removable discontinuity at $x=3$? Give the coordinates of the hole.`,
      r`Classify the discontinuity of $f(x)=\dfrac{x^2-16}{|x-4|}$ at $x=4$, showing both one-sided limits.`,
    ],
    [
      r`For the function in question 3, justify your classification using limit notation.`,
      r`Explain the difference between a hole and a vertical asymptote, and how factoring a rational function tells you which one occurs.`,
    ]),

  "1.8": A4("1.8", "The Three-Part Continuity Test",
    [
      r`Determine whether $f(x)=\begin{cases}x^2+2,&x\le1\\4x-1,&x>1\end{cases}$ is continuous at $x=1$.`,
      r`State the intervals on which $f(x)=\dfrac{x+1}{x^2-4}$ is continuous.`,
      r`What value must be assigned to $f(3)$ to make $f(x)=\dfrac{x^2-9}{x-3}$ continuous at $x=3$?`,
    ],
    [
      r`Find $k$ so that $f(x)=\begin{cases}kx+4,&x<3\\x^2-k,&x\ge3\end{cases}$ is continuous at $x=3$.`,
      r`Find $k$ so that $f(x)=\begin{cases}\dfrac{\sin(6x)}{x},&x\neq0\\k+1,&x=0\end{cases}$ is continuous at $x=0$.`,
      r`A taxi fare is $F(d)=3+2d$ dollars for $d\le5$ km and $F(d)=c+1.5d$ dollars for $d>5$ km. Find $c$ so that the fare is a continuous function of distance, and explain why a company might want that.`,
    ],
    [
      r`Find $a$ and $b$ so that $f(x)=\begin{cases}ax+1,&x<-1\\x^2+b,&-1\le x\le1\\3x+a,&x>1\end{cases}$ is continuous for all real $x$.`,
      r`Give an example of a function that is defined at $x=2$ and has a limit at $x=2$ but is not continuous at $x=2$. State which part of the definition fails.`,
    ],
    [
      r`For the function in question 1, write a justification of your answer that an exam reader would accept.`,
      r`Explain why "$f(2)$ is defined" is not enough to conclude that $f$ is continuous at $x=2$.`,
    ]),

  "1.9": A4("1.9", "Unbounded Behaviour: Vertical and Horizontal Asymptotes",
    [
      r`Evaluate $\displaystyle\lim_{x\to\infty}\dfrac{8x^2+3}{2x^2-x}$.`,
      r`Evaluate $\displaystyle\lim_{x\to4^+}\dfrac{x-1}{x-4}$ and $\displaystyle\lim_{x\to4^-}\dfrac{x-1}{x-4}$.`,
      r`Evaluate $\displaystyle\lim_{x\to-\infty}\dfrac{6x+1}{x^2+9}$.`,
    ],
    [
      r`Find both horizontal asymptotes of $f(x)=\dfrac{6e^x+1}{3e^x+2}$.`,
      r`Find all vertical and horizontal asymptotes, and any holes, of $f(x)=\dfrac{2x^2-18}{x^2-x-6}$.`,
      r`The concentration of a medicine in the blood is $C(t)=\dfrac{12t}{t^2+9}$ mg/L after $t$ hours. Find $\displaystyle\lim_{t\to\infty}C(t)$ and interpret it.`,
    ],
    [
      r`Evaluate $\displaystyle\lim_{x\to-\infty}\dfrac{\sqrt{25x^2+4}}{x+3}$, explaining where the sign of your answer comes from.`,
      r`Evaluate $\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+10x}-x\right)$.`,
    ],
    [
      r`For the function in question 5, write an equation for each asymptote and justify each with a limit statement.`,
      r`Explain why "$\infty-\infty=0$" is not valid reasoning, using the limit in question 8 as your example.`,
    ]),

  "1.10": A4("1.10", "Guaranteed Values: The Intermediate Value Theorem",
    [
      r`State the Intermediate Value Theorem, including its hypothesis.`,
      r`A function $f$ is continuous on $[2,9]$ with $f(2)=-3$ and $f(9)=6$. Which of the values $-4$, $0$, $5$, $7$ must $f$ take on $(2,9)$?`,
      r`Show that $x^3+2x-7=0$ has a solution in the interval $(1,2)$.`,
    ],
    [
      r`A continuous function has values $f(0)=4$, $f(3)=-1$, $f(5)=2$, $f(8)=-6$ and $f(10)=3$. What is the least number of zeros of $f$ on $[0,10]$? Show your reasoning.`,
      r`The temperature of an oven, $T(t)$ °C, is a differentiable function of time. At $t=2$ minutes it is 60 °C and at $t=10$ minutes it is 190 °C. Must there be a time at which the temperature is exactly 150 °C? Justify.`,
      r`Show that the equation $\cos x=2x$ has a solution in $\left(0,\tfrac{\pi}{2}\right)$.`,
    ],
    [
      r`Functions $f$ and $g$ are continuous, with $f(1)=8$, $g(1)=2$, $f(6)=3$ and $g(6)=9$. Show that their graphs must cross somewhere between $x=1$ and $x=6$.`,
      r`For which values of $k$ does the theorem guarantee that $f(x)=x^3+2x+k$ has a zero in $(0,1)$?`,
    ],
    [
      r`Explain why the theorem cannot be applied to $f(x)=\dfrac{1}{x-3}$ on $[2,4]$, and whether $f$ has a zero there.`,
      r`A student writes: "$f(1)=-2$ and $f(4)=5$, so $f$ has exactly one zero between 1 and 4." Identify two errors in this statement and write a correct, complete justification, stating any assumption you need.`,
    ]),
};
