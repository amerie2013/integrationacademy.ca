// MHF4U Unit 4 assignments — Exponential & Logarithmic Functions.
const r = String.raw;

export const U4 = {
  "4.1": {
    topic: "Logarithms & the Laws of Logarithms",
    K: [
      r`Evaluate without a calculator: (a) $\log_2 32$ (b) $\log_3\dfrac19$ (c) $\log_5 0.04$ (d) $\log_4 8$.`,
      r`Write each expression as a single logarithm and evaluate it: (a) $\log_6 4+\log_6 9$ (b) $\log_2 96-\log_2 3$ (c) $2\log_3 6-\log_3 4$.`,
      r`Use the change of base formula to evaluate $\log_7 50$ to three decimal places, and use the laws of logarithms to write $\log_2 12$ in terms of $\log_2 3$.`,
    ],
    T: [
      r`A student claims that $\log_2(x^2)=2\log_2 x$ for every $x$ for which the left side is defined. Show with a specific value of $x$ that this is false, and write a correct version of the law that works for all of those $x$.`,
      r`If $\log_2 a=p$ and $\log_2 b=q$, express $\log_2\!\left(\dfrac{a^3\sqrt b}{4}\right)$ in terms of $p$ and $q$. Show each use of a law of logarithms.`,
    ],
    C: [
      r`Using the definition of a logarithm, explain why $\log_b 1=0$ and $\log_b b=1$ for every valid base $b$, and why $\log_b x$ is undefined when $x\le 0$.`,
      r`Let $m=\log_b x$ and $n=\log_b y$. Write a short proof of the product law $\log_b(xy)=\log_b x+\log_b y$, and describe how the same approach proves the quotient law.`,
    ],
    A: [
      r`The sound intensity level in decibels is $L=10\log\dfrac{I}{I_0}$, where $I_0=10^{-12}$ W/m$^2$ is the quietest audible sound. (a) Find $L$ for a conversation with $I=10^{-6}$ W/m$^2$ and for a jet engine with $I=1$ W/m$^2$. (b) A machine produces 80 dB. When a second identical machine starts, the intensity doubles. Use the laws of logarithms to find the new level. (c) Explain why doubling the sound source does not double the decibel level.`,
      r`The apparent magnitudes $m_1$ and $m_2$ of two stars are related to their brightnesses $b_1$ and $b_2$ by $m_2-m_1=-2.5\log\dfrac{b_2}{b_1}$. (a) Sirius has magnitude $-1.46$ and Polaris has magnitude $1.98$. How many times brighter is Sirius? (b) Use the formula to show that a difference of 5 magnitudes means a brightness ratio of 100. (c) Explain why a logarithm is a sensible way to compare star brightness.`,
      r`A 128-bit encryption key has $2^{128}$ possible values. (a) Use the laws of logarithms to find $\log 2^{128}$ and state how many digits $2^{128}$ has. (b) A computer tests $10^9$ keys per second. Estimate how many years it would take to try every key, using $3.15\times10^7$ seconds per year. (c) Explain how logarithms make it possible to compare numbers of this size.`,
    ],
  },

  "4.2": {
    topic: "Graphs of Logarithmic Functions",
    K: [
      r`For $y=-\log_3(x+1)+2$, state the domain, range, vertical asymptote, $x$-intercept and $y$-intercept.`,
      r`Find the inverse of $f(x)=5^x-3$. State the domain, range and asymptote of both $f$ and $f^{-1}$.`,
      r`Describe the transformations that map $y=\log_3 x$ onto $y=-2\log_3(x-1)+4$, state the vertical asymptote and domain, and find the image of the point $(3,1)$.`,
    ],
    T: [
      r`A transformed logarithmic function $y=a\log_2(x-h)+k$ has a vertical asymptote at $x=-1$ and passes through $(0,3)$ and $(7,9)$. Determine $a$, $h$ and $k$ and write the equation.`,
      r`Compare the graphs of $y=\log(x^2)$ and $y=2\log x$. State the domain, range and symmetry of each, and explain why they are not the same function even though the logarithm law suggests they might be.`,
    ],
    C: [
      r`Show that $\log_b(b^x)=x$ and $b^{\log_b x}=x$. Use these two facts to explain why the graphs of $y=b^x$ and $y=\log_b x$ are reflections of each other in the line $y=x$, and what this does to the domain, range, asymptote and intercepts.`,
      r`Explain how the base affects the graph of $y=\log_b x$ when $b>1$ and when $0<b<1$. Use $y=\log_{1/2}x$ as an example and relate it to a reflection of $y=\log_2 x$.`,
    ],
    A: [
      r`Musicians measure pitch in semitones from concert A (440 Hz) using $n=12\log_2\dfrac{f}{440}$. (a) Find $n$ for $f=220$, $f=880$, $f=660$ and $f=261.63$ (middle C). (b) State the domain, the $x$-intercept and the vertical asymptote of this function, and interpret the intercept. (c) Use a law of logarithms to explain why doubling the frequency always adds 12 semitones, no matter where you start.`,
      r`A social network's number of users after $t$ years is $N(t)=20\,000\cdot2^{t/1.5}$. (a) Find the inverse function that gives the time needed to reach $N$ users. (b) Use it to find how long the network takes to reach one million users. (c) State the domain and vertical asymptote of the inverse and interpret them.`,
      r`The acidity of a solution is $\text{pH}=-\log[\text{H}^+]$, where $[\text{H}^+]$ is the hydrogen ion concentration in mol/L. (a) Find the pH when $[\text{H}^+]=10^{-7}$, $10^{-3}$ and $4.0\times10^{-9}$. (b) Describe how the graph of pH against $[\text{H}^+]$ is related to $y=\log x$ and explain why the concentration must be positive. (c) Blood has a pH of 7.4. Find $[\text{H}^+]$.`,
    ],
  },

  "4.3": {
    topic: "Solving Exponential & Logarithmic Equations",
    K: [
      r`Solve by writing both sides with a common base: (a) $6^{2x-1}=216$ (b) $9^x=27^{x-2}$ (c) $\left(\tfrac12\right)^x=32$.`,
      r`Solve by taking logarithms, giving answers to two decimal places: (a) $7^x=45$ (b) $7(1.05)^t=21$ (c) $5^{x+1}=2^x$.`,
      r`Solve and check: (a) $\log_2(x+3)=4$ (b) $\log_5(2x-1)=\log_5(x+4)$ (c) $\log(x^2)=\log(3x+10)$.`,
    ],
    T: [
      r`Solve $4^x-3\cdot2^x-4=0$ by letting $u=2^x$. Explain why one of the solutions for $u$ must be rejected.`,
      r`In question 3(c), both $x=5$ and $x=-2$ satisfy $\log(x^2)=\log(3x+10)$. Now solve $2\log x=\log(3x+10)$. Explain why only one solution remains and why the two equations are different.`,
    ],
    C: [
      r`Describe the two main strategies for solving exponential equations (common base and taking logarithms), explain how you decide which to use, and give one example of each.`,
      r`Explain why solutions of logarithmic equations must always be checked in the original equation. Use $\log_3 x+\log_3(x-6)=3$ to illustrate, including the roots you get and which one is rejected.`,
    ],
    A: [
      r`A person invests 8000 dollars at 4.5% per year compounded quarterly, so $A(t)=8000\left(1+\dfrac{0.045}{4}\right)^{4t}$. (a) Write an equation for the time when the investment reaches 12 000 dollars. (b) Solve it using logarithms, to two decimal places. (c) Explain in a sentence what your answer means and how it changes if the interest is compounded monthly.`,
      r`A 200 mg dose of a medication has a half-life of 6 hours in the body. (a) Write a model for the amount $A(t)$ remaining after $t$ hours. (b) When does 25 mg remain? (c) The medication is ineffective below 40 mg. After how many hours, to one decimal place, does this happen?`,
      r`A bacteria culture starts with 500 bacteria and triples every 4 hours, so $N(t)=500\cdot3^{t/4}$. (a) Find the number of bacteria after 10 hours. (b) Solve for the time at which the culture reaches one million. (c) Explain why this model cannot continue indefinitely in a real laboratory dish.`,
    ],
  },

  "4.4": {
    topic: "Applications of Exponential & Log Models",
    K: [
      r`For $P=2500(1.06)^t$, state the initial value and the growth rate per period, find $P$ after 10 periods, and find the time for $P$ to reach 4000 (to one decimal place).`,
      r`In $A=A_0\left(\tfrac12\right)^{t/h}$, state what $h$ represents. What fraction of the original amount remains after 3 half-lives? If $h=8$ days, what fraction remains after 20 days?`,
      r`Rewrite $y=200(3)^{t/5}$ in the form $y=200b^t$, find $b$ to four decimal places, and state the percent growth per unit of time.`,
    ],
    T: [
      r`Investment A is 5000 dollars at 6% compounded annually. Investment B is 5000 dollars at 5.8% compounded monthly. (a) Find the value of each after 10 years. (b) Which is better? (c) Find the annual rate that investment B is equivalent to and explain your answer.`,
      r`The magnitude of an earthquake is $M=\log\dfrac{A}{A_0}$, where $A$ is the amplitude of the seismic wave. (a) Show that an increase of 1 in magnitude multiplies the amplitude by 10. (b) How many times larger is the amplitude of a magnitude 6.5 quake than a magnitude 5.0 quake? (c) The energy released is proportional to $10^{1.5M}$. Compare the energy of the two quakes.`,
    ],
    C: [
      r`Explain how you can tell from a table of equally spaced data whether a linear, quadratic or exponential model fits best, and how to convert a doubling-time model into the form $y=a(2)^{t/d}$.`,
      r`Explain why logarithms are needed to solve for time in an exponential growth problem, and why an exponential model usually stops being realistic for large $t$.`,
    ],
    A: [
      r`Radiocarbon dating uses the half-life of carbon-14, which is 5730 years. (a) Write a model for the fraction of carbon-14 remaining after $t$ years. (b) A bone contains 35% of its original carbon-14. Find its age. (c) A different sample has 6% remaining. Explain why the method becomes less reliable for much older samples.`,
      r`A city has 240 000 people and grows by 2.3% per year, so $P(t)=240\,000(1.023)^t$. (a) Predict the population in 10 years. (b) Find how long it takes for the population to double. (c) Discuss one factor that would make this model inaccurate over 50 years.`,
      r`(a) Lemon juice has a pH of 2.0 and milk has a pH of 6.5. How many times more concentrated is the hydrogen ion concentration in lemon juice? (b) The 1960 Chile earthquake had magnitude 9.5 and the 2010 Haiti earthquake had magnitude 7.0. How many times greater was the amplitude of the Chile quake? (c) Explain why scientists use logarithmic scales for pH and earthquake magnitude.`,
    ],
  },
};
