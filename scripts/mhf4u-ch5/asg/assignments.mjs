// MHF4U chapter 5 assignments (homework): 12 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7,
// Application 8-10, Hard Level 11-12. [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published.
// Titles are the new chapter-5 titles (asg/publish.mjs matches the old titles and renames them).
import { planeDoc } from "../bank/fig.mjs";
import { TG, UC } from "../trigfig.mjs";

const S = String.raw;
const P = Math.PI;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };
const cut = (g) => (x) => (Math.abs(g(x)) < 0.07 ? NaN : 1 / g(x));
const vl = (xs) => ({ vlines: xs.map((x) => ({ x, color: "red", dash: true })) });
const tan = (x) => (Math.abs(Math.cos(x)) < 0.06 ? NaN : Math.tan(x));

export const ASSIGNMENTS = [
  { code: "5.1", title: "Assignment 5.1 — Graphs of Sine, Cosine and Tangent", figs: {
      sc: planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V)),
      tn: planeDoc(TG([[tan, "red"], [() => 2, "blue"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }, [], vl([P / 2, 1.5 * P]))) }, lines: [
    "Knowledge & Understanding",
    S`1. State the period, range and zeros (for \(0\le x\le2\pi\)) of \(y=\sin x\) and of \(y=\cos x\).`,
    S`2. State the asymptotes and zeros of \(y=\tan x\) for \(-\pi\le x\le\pi\).`,
    S`3. Make a table of the five key points of \(y=\cos x\) for \(0\le x\le2\pi\) and sketch one cycle.`,
    "Thinking",
    "4. The graph shows y = sin x and y = cos x. Find, with reasons, every interval in [0, 2π] where sin x < cos x. [[sc|Sine (violet) and cosine (green)]]",
    "5. The graph shows y = tan x and the line y = 2. How many solutions does tan x = 2 have in [0, 2π]? Find them to 2 decimals and explain why they are π apart. [[tn|Tangent and the line y = 2]]",
    "Communication",
    S`6. Explain, using the unit circle, why \(y=\tan x\) has vertical asymptotes and why its period is \(\pi\).`,
    S`7. Explain the difference between an even and an odd function, and show that cosine is even and sine is odd.`,
    "Application",
    S`8. Use the graph of \(y=\sin x\) and a special angle to solve \(\sin x=-\dfrac{\sqrt2}2\) for \(-2\pi\le x\le2\pi\).`,
    S`9. Given \(\cos1.2\approx0.3624\), use symmetry and periodicity to find \(\cos(-1.2)\), \(\cos(2\pi-1.2)\) and \(\cos(1.2+\pi)\).`,
    S`10. On which intervals of \(0\le x\le2\pi\) are both \(\sin x\) and \(\cos x\) decreasing? Justify.`,
    "Hard Level",
    S`11. Find every \(x\) in \(-2\pi\le x\le2\pi\) where the graphs of \(y=\tan x\) and \(y=\sin x\) meet, and explain why there are no others.`,
    S`12. Determine how many solutions \(\sin x=\dfrac x8\) has for \(x\ge0\). Explain your reasoning with a sketch.`,
  ] },
  { code: "5.2", title: "Assignment 5.2 — Graphs of Reciprocal Trigonometric Functions", figs: {
      cs: planeDoc(TG([[Math.sin, "violet"], [cut(Math.sin), "red"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }, [], vl([0, P, 2 * P]))) }, lines: [
    "Knowledge & Understanding",
    S`1. Evaluate exactly: \(\csc\dfrac{3\pi}2\), \(\sec\dfrac{2\pi}3\), \(\cot\dfrac{5\pi}4\).`,
    S`2. State the domain, range and period of \(y=\sec x\).`,
    S`3. State the asymptotes and zeros of \(y=\cot x\) for \(0\le x\le2\pi\).`,
    "Thinking",
    "4. The graph shows y = sin x and y = csc x. Describe how each feature of the cosecant graph (asymptotes, turning points, sign) comes from the sine graph. [[cs|Sine (violet) and cosecant (red)]]",
    S`5. For which values of \(k\) does \(\sec x=k\) have no solution? Exactly one solution in \([0,2\pi)\)? Explain.`,
    "Communication",
    S`6. Explain why \(\csc x\) and \(\sin^{-1}x\) are different, with an example.`,
    S`7. Explain why \(y=\cot x\) is decreasing on each branch, using \(\cot x=\dfrac1{\tan x}\).`,
    "Application",
    S`8. Solve \(\csc x=-2\) for \(0\le x\le2\pi\).`,
    S`9. Solve \(\sec x=\sqrt2\) for \(0\le x\le2\pi\).`,
    S`10. Sketch \(y=2\sec x\) for \(0\le x\le2\pi\). Label the asymptotes, the turning points and state the range.`,
    "Hard Level",
    S`11. Solve \(\sec^2x=\dfrac43\) for \(0\le x\le2\pi\).`,
    S`12. Find all intersection points of \(y=\cos x\) and \(y=\sec x\) for \(-2\pi\le x\le2\pi\), and explain why the two graphs meet only there.`,
  ] },
  { code: "5.3", title: "Assignment 5.3 — Sinusoidal Functions", figs: {
      g: planeDoc(TG([[(x) => 3 * Math.cos(2 * (x - P / 4)) + 1, "violet"]], { xmin: -0.5, xmax: 6.8, ymin: -3, ymax: 5 })) }, lines: [
    "Knowledge & Understanding",
    S`1. State the amplitude, period, phase shift and vertical shift of \(y=-2\sin\left(3\left(x-\dfrac\pi4\right)\right)+5\).`,
    S`2. Find the period and phase shift of \(y=\cos(4x+\pi)\).`,
    S`3. State the range of \(y=\dfrac12\cos x-3\).`,
    "Thinking",
    "4. Write a cosine equation and a sine equation for the graph shown. Check each at two points. [[g|A sinusoid]]",
    S`5. A sinusoid has a minimum at \((3,-5)\) and the next maximum at \((7,9)\). Write its equation.`,
    "Communication",
    S`6. Explain why the phase shift of \(y=\sin(2x-\pi)\) is \(\dfrac\pi2\), not \(\pi\).`,
    S`7. Describe, in order, the transformations that map \(y=\sin x\) onto \(y=4\sin\left(\dfrac12x+\dfrac\pi6\right)-1\).`,
    "Application",
    S`8. List the five key points of one cycle of \(y=-3\cos\left(2\left(x+\dfrac\pi6\right)\right)+2\) and sketch it.`,
    S`9. Find the first two positive \(x\) where \(y=2\sin\left(x-\dfrac\pi3\right)+1\) equals \(2\).`,
    S`10. Write \(y=5\sin\left(x+\dfrac\pi2\right)\) as a cosine function, and \(y=5\cos\left(x-\dfrac\pi2\right)\) as a sine function.`,
    "Hard Level",
    S`11. Find all values of \(c\) for which \(y=3\cos2x+c\) has exactly two zeros in \([0,\pi)\).`,
    S`12. The graph of \(y=\sin x\) is compressed horizontally by \(\dfrac13\), then shifted right \(\dfrac\pi2\). A student writes \(y=\sin\left(3x-\dfrac\pi2\right)\). Is this correct? Give the correct equation and check it.`,
  ] },
  { code: "5.4", title: "Assignment 5.4 — Solving Trigonometric Equations", figs: {
      s2: planeDoc(TG([[(x) => Math.sin(2 * x), "violet"], [() => -0.5, "blue"]], V)),
      uc: planeDoc(UC(225, "θ")) }, lines: [
    "Knowledge & Understanding",
    S`1. Solve \(2\cos x+\sqrt3=0\) for \(0\le x\le2\pi\).`,
    S`2. Solve \(\tan x=\dfrac1{\sqrt3}\) for \(0\le x\le2\pi\).`,
    S`3. Solve \(4\sin x-3=0\) for \(0\le x\le2\pi\), to two decimals.`,
    "Thinking",
    "4. The graph shows y = sin 2x and y = −1/2. Solve sin 2x = −1/2 for 0 ≤ x ≤ 2π and check that the number of solutions matches the graph. [[s2|y = sin 2x and y = −1/2]]",
    S`5. Solve \(2\cos^2x-\sin x-1=0\) for \(0\le x\le2\pi\).`,
    "Communication",
    S`6. A student solves \(\sin x\cos x=\cos x\) by dividing by \(\cos x\). Explain the error and give the full solution for \(0\le x\le2\pi\).`,
    "7. The unit circle shows an angle θ in Q3. Explain how the reference angle and CAST give all solutions of sin x = sin θ. [[uc|Angle θ]]",
    "Application",
    S`8. Solve \(\cos2x=\sin x\) for \(0\le x\le2\pi\).`,
    S`9. Solve \(3\tan^2x-1=0\) for \(0\le x\le2\pi\).`,
    S`10. Write the general solution of \(2\sin x+1=0\).`,
    "Hard Level",
    S`11. Solve \(\sin2x+\sin x=0\) for \(0\le x\le2\pi\).`,
    S`12. Solve \(2\sin^2x+3\cos x\ge3\) for \(0\le x\le2\pi\). Explain using a sign chart or a graph.`,
  ] },
  { code: "5.5", title: "Assignment 5.5 — Trigonometric Models and Rates of Change", figs: {
      w: planeDoc(TG([[(t) => -12 * Math.cos((P / 30) * t) + 14, "violet"]], { xmin: -2, xmax: 125, ymin: 0, ymax: 28 }, [], { step: { x: 10, y: 2 }, xlabel: "t (s)" })) }, lines: [
    "Knowledge & Understanding",
    S`1. For \(h(t)=6\sin\left(\dfrac\pi8t\right)+10\), state the maximum, minimum and period.`,
    S`2. A Ferris wheel has radius 18 m, its centre is 20 m high, and it turns every 90 s. Give the greatest and least heights and the value of \(k\).`,
    S`3. Find the average rate of change of \(y=5\cos t\) from \(t=0\) to \(t=\pi\).`,
    "Thinking",
    "4. The graph shows the height of a rider. Write the equation of the model and state what each number means. [[w|Height of a rider]]",
    S`5. For the model in question 4, how long in each turn is the rider above 20 m?`,
    "Communication",
    "6. Explain why the rate of change of a sinusoidal model is 0 at its peaks and troughs, and greatest where it crosses its axis.",
    "7. Explain the difference between an average rate of change and an instantaneous rate of change, using the Ferris wheel as an example.",
    "Application",
    S`8. High tide is 9.4 m at 2:00 and the next low tide is 1.8 m at 8:20. Write a cosine model for the depth \(t\) hours after midnight.`,
    "9. For your model in question 8, find the depth at 11:00 and the first time after 2:00 that the depth is 5.6 m.",
    "10. Estimate the instantaneous rate of change of the depth at 5:10 using a short interval. Interpret the sign.",
    "Hard Level",
    S`11. Daylight in a city is \(D=4.2\sin\left(\dfrac{2\pi}{365}(t-80)\right)+12.1\) hours. Find how many days a year have more than 15 hours of daylight.`,
    S`12. Two Ferris wheels have the same centre height. Wheel A has radius 10 m and period 40 s; wheel B has radius 15 m and period 75 s. Which rider ever moves vertically faster? Justify with the greatest rates of change.`,
  ] },
];
