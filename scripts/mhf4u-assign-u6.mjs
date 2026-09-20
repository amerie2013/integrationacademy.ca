// MHF4U Unit 6 assignments — Trigonometric Identities & Equations.
const r = String.raw;

export const U6 = {
  "6.1": {
    topic: "Compound Angle Formulas",
    K: [
      r`State the formulas for $\sin(A+B)$ and $\cos(A-B)$. Then use a compound-angle formula to find the exact value of $\cos165^\circ$ by writing $165^\circ=120^\circ+45^\circ$.`,
      r`Find the exact value of $\sin\dfrac{17\pi}{12}$ by writing $\dfrac{17\pi}{12}=\dfrac{7\pi}{6}+\dfrac{\pi}{4}$.`,
      r`Simplify $\sin47^\circ\cos13^\circ+\cos47^\circ\sin13^\circ$ to a single trigonometric ratio and find its exact value.`,
    ],
    T: [
      r`Angle $A$ is in quadrant II with $\sin A=\dfrac{5}{13}$, and angle $B$ is in quadrant IV with $\cos B=\dfrac35$. Find $\cos(A+B)$ and $\sin(A-B)$ exactly. Then find $\sin(A+B)$ as well and use both to decide in which quadrant $A+B$ lies.`,
      r`Prove that $\cos(A+B)+\cos(A-B)=2\cos A\cos B$. Then use the result to find the exact value of $\cos75^\circ\cos15^\circ$.`,
    ],
    C: [
      r`Show with the numbers $A=B=30^\circ$ that $\sin(A+B)\ne\sin A+\sin B$. Explain what the compound angle formula says that the incorrect "distributive" idea misses.`,
      r`Describe a method for finding exact values of angles such as $165^\circ$, $195^\circ$ and $255^\circ$ using compound-angle formulas. Explain how you choose the two special angles and how you check the sign of your answer.`,
    ],
    A: [
      r`Two alternating-current sources give voltages $v_1=3\sin\theta$ and $v_2=4\cos\theta$. Their sum can be written as $R\sin(\theta+\varphi)$. (a) Expand $R\sin(\theta+\varphi)$ with a compound-angle formula and match coefficients to find $R$ and $\varphi$ (to three decimal places, in radians). (b) State the greatest voltage the combined circuit can reach. (c) Explain why the combined voltage is still a sinusoidal wave.`,
      r`A billboard is 6 m tall and its bottom edge is 2 m above the eye level of a viewer standing $d$ metres from the wall. The viewing angle is $\theta=A-B$, where $\tan A=\dfrac8d$ and $\tan B=\dfrac2d$. Use $\tan(A-B)=\dfrac{\tan A-\tan B}{1+\tan A\tan B}$. (a) Show that $\tan\theta=\dfrac{6d}{d^2+16}$. (b) Find $\theta$ for $d=2$, $d=4$ and $d=8$. (c) Which distance gives the best view, and what do you notice about $d=2$ and $d=8$?`,
      r`Musicians tune two instruments by listening for "beats". Two tuning forks produce sound waves $\sin(2\pi\cdot440t)$ and $\sin(2\pi\cdot444t)$. (a) Use $\sin(x+y)+\sin(x-y)=2\sin x\cos y$ (proved from the compound-angle formulas) with $x=2\pi\cdot442t$ and $y=2\pi\cdot2t$ to rewrite the sum. (b) Identify the slowly changing amplitude factor. (c) Explain why the listener hears 4 beats per second.`,
    ],
  },

  "6.2": {
    topic: "Double Angle Formulas",
    K: [
      r`State the three forms of $\cos2\theta$. Simplify and evaluate exactly: (a) $2\sin15^\circ\cos15^\circ$ (b) $\cos^2\dfrac{\pi}{8}-\sin^2\dfrac{\pi}{8}$.`,
      r`If $\sin\theta=-\dfrac35$ and $\theta$ is in quadrant IV, find $\cos\theta$, and then find $\sin2\theta$, $\cos2\theta$ and $\tan2\theta$ exactly.`,
      r`Use $\cos2\theta=2\cos^2\theta-1$ with $\theta=\dfrac{\pi}{8}$ to find the exact value of $\cos\dfrac{\pi}{8}$.`,
    ],
    T: [
      r`Prove that $\tan2\theta=\dfrac{2\tan\theta}{1-\tan^2\theta}$ starting from $\tan2\theta=\dfrac{\sin2\theta}{\cos2\theta}$. Then find $\tan2\theta$ when $\tan\theta=\dfrac13$.`,
      r`Derive a formula for $\cos3\theta$ in terms of $\cos\theta$ by writing $3\theta=2\theta+\theta$ and using both the compound-angle and double-angle formulas.`,
    ],
    C: [
      r`Explain how to decide which of the three forms of $\cos2\theta$ to use in a problem. Give one example where each form is the most helpful.`,
      r`Explain how the double-angle formulas follow from the compound-angle formulas, and how they lead to a formula for $\cos^2\theta$ in terms of $\cos2\theta$.`,
    ],
    A: [
      r`A ball kicked at speed $v$ at angle $\theta$ to level ground travels a horizontal distance $R=\dfrac{v^2}{g}\sin2\theta$. For a kick at $v=20$ m/s, with $g=9.8$ m/s$^2$: (a) find the range for $\theta=30^\circ$, $45^\circ$ and $60^\circ$. (b) Explain why $30^\circ$ and $60^\circ$ give the same range. (c) Which angle gives the longest kick, and why?`,
      r`A 10 ohm heater is connected to a household circuit with voltage $v=170\sin(120\pi t)$ volts, so its power is $P=\dfrac{v^2}{10}$ watts. (a) Write $P(t)$ and use a double-angle identity to rewrite it in the form $A-A\cos(kt)$. (b) State the period and midline of the power graph. (c) Find the average power of the heater and explain how you found it.`,
      r`A triangular sail is isosceles, with two sides of 4 m and an apex angle of $2\theta$. Its area is $A=8\sin2\theta$ square metres. (a) Find the exact area when $\theta=30^\circ$. (b) Show that $A=16\sin\theta\cos\theta$ and check it for $\theta=30^\circ$. (c) What apex angle gives the largest area, and what is that area?`,
    ],
  },

  "6.3": {
    topic: "Proving Trigonometric Identities",
    K: [
      r`Prove the identity $\sin x(\csc x-\sin x)=\cos^2x$.`,
      r`Prove the identity $\tan x+\cot x=\sec x\csc x$.`,
      r`Show that $(\sin x+\cos x)^2=1$ is not an identity by finding a counterexample, and then rewrite the left side using $\sin2x$ to show what it really equals.`,
    ],
    T: [
      r`Prove the identity $\dfrac{\cos2x}{1+\sin2x}=\dfrac{\cos x-\sin x}{\cos x+\sin x}$.`,
      r`Prove that $\sin^4x-\cos^4x=\sin^2x-\cos^2x$, and then show that both sides equal $-\cos2x$.`,
    ],
    C: [
      r`A student "proves" an identity by working on both sides until they get $1=1$, and then writes "so the left side equals the right side." Explain why this reasoning can fail, and describe two acceptable ways to prove an identity.`,
      r`Write a short guide, with a one-line example for each, for at least four strategies for proving trigonometric identities (for example: rewrite in sine and cosine, use a Pythagorean identity, combine fractions, use the conjugate).`,
    ],
    A: [
      r`Light passing through a polarizing filter turned at angle $\theta$ has intensity $I=I_0\cos^2\theta$. (a) Prove that $\cos^2\theta=\dfrac{1+\cos2\theta}{2}$. (b) Find the exact fraction of the light passing when $\theta=\dfrac{\pi}{6}$. (c) Two identical filters are each turned by $\theta$ relative to the previous one, so $I=I_0\cos^4\theta$. Show that $I=I_0\dfrac{(1+\cos2\theta)^2}{4}$ and evaluate it at $\theta=\dfrac{\pi}{6}$.`,
      r`A pipe is carried horizontally around a right-angle corner from a corridor 1 m wide into a corridor 2 m wide. The pipe touches the inner corner at angle $\theta$, and the length of the segment it spans is $L(\theta)=\csc\theta+2\sec\theta$ metres. (a) Prove that $L(\theta)=\dfrac{\cos\theta+2\sin\theta}{\sin\theta\cos\theta}$. (b) Find $L$ exactly at $\theta=\dfrac{\pi}{4}$ and to two decimals at $\theta=\dfrac{\pi}{6}$ and $\dfrac{\pi}{3}$. (c) The longest pipe that can turn the corner is the smallest value of $L$. Use your results to estimate it.`,
      r`A pendulum of length $\ell$ swings to angle $\theta$ from the vertical, so its bob rises by $h=\ell(1-\cos\theta)$. (a) Prove that $h=2\ell\sin^2\dfrac{\theta}{2}$ using a double-angle identity. (b) Find $h$ for $\ell=1.5$ m and $\theta=60^\circ$ using both forms. (c) Find the gain in potential energy of a 2 kg bob using $mgh$ with $g=9.8$ m/s$^2$.`,
    ],
  },

  "6.4": {
    topic: "Solving Trigonometric Equations",
    K: [
      r`Solve on $[0,2\pi)$, giving exact values: (a) $2\sin\theta+\sqrt3=0$ (b) $\tan^2\theta=3$.`,
      r`Solve $2\sin^2\theta+\sin\theta-1=0$ on $[0,2\pi)$.`,
      r`Solve $\cos2\theta=\dfrac12$ on $[0,2\pi)$, and state the general solution.`,
    ],
    T: [
      r`Solve $\sin2\theta=\sin\theta$ on $[0,2\pi)$. Explain why dividing both sides by $\sin\theta$ would lose solutions.`,
      r`Solve $\cos2\theta+3\sin\theta-2=0$ on $[0,2\pi)$. Explain which identity you chose and why.`,
    ],
    C: [
      r`Write a numbered strategy for solving trigonometric equations that mix double angles and single angles, including how to reduce to one trigonometric function, how to factor, and how to check the interval.`,
      r`Explain why $\cos\theta=-\dfrac32$ has no solution, why $\cos\theta=-\dfrac{\sqrt3}{2}$ has two solutions on $[0,2\pi)$ and infinitely many on the real numbers, and how the interval changes the number of solutions.`,
    ],
    A: [
      r`The depth of water at a wharf is $d(t)=5.5\cos\!\left(\dfrac{2\pi}{12.4}(t-2.5)\right)+7.5$ metres, where $t$ is in hours. A boat needs at least 9 m of water. (a) Write the equation you must solve. (b) Solve it for one tidal cycle. (c) For how long, to the nearest 0.1 hour, is the water at least 9 m deep in each cycle?`,
      r`The hours of daylight in Toronto are $D(t)=3.1\sin\!\left(\dfrac{2\pi}{365}(t-80)\right)+12.2$, where $t$ is the day of the year. (a) Write an equation to find the days with exactly 10 hours of daylight. (b) Solve it for $0\le t\le365$. (c) Interpret both answers as calendar dates.`,
      r`A mass on a spring moves so that its displacement in centimetres from the rest position is $x(t)=10\cos\!\left(\dfrac{2\pi t}{1.5}\right)$, where $t$ is in seconds. (a) Find the times in $[0,1.5]$ when the displacement is 5 cm. (b) Find the times when the mass passes through the rest position. (c) Find the times when the displacement is $-5$ cm.`,
    ],
  },
};
