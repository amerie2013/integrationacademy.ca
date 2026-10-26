// MHF4U chapter 6 assignments (homework): 12 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7,
// Application 8-10, Hard Level 11-12. [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published.
import { planeDoc, P } from "../bank/fig.mjs";

const grid = (view, step) => planeDoc({ view, ...(step ? { step } : {}) });
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };

export const ASSIGNMENTS = [
  { code: "6.1", title: "Assignment 6.1 — The Exponential Function and Its Inverse", figs: {
      tab: grid({ xmin: -4, xmax: 10, ymin: -4, ymax: 10 }, { x: 1, y: 1 }),
      refl: planeDoc({ view: { xmin: -3, xmax: 8, ymin: -3, ymax: 8 }, lines: [YX], curves: [{ f: (x) => 2.5 ** x, color: "blue" }], points: [P(0, 1), P(1, 2.5), P(2, 6.25)], step: { x: 1, y: 1 } }),
      inv: planeDoc({ view: { xmin: -1, xmax: 30, ymin: -2, ymax: 4 }, curves: [{ f: lg(3), a: 0.02, color: "violet" }], points: [P(3, 1, false), P(9, 2, false), P(27, 3, false)], step: { x: 3, y: 1 } }),
      cool: planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 80 * 0.9 ** t, a: 0, color: "blue" }], step: { x: 5, y: 10 }, xlabel: "t (min)", ylabel: "D (°C)" }),
      hard: grid({ xmin: -6, xmax: 8, ymin: -6, ymax: 8 }, { x: 1, y: 1 }) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Make a table of values for \(y=4^x\) using \(x=-2,-1,-\tfrac12,0,\tfrac12,1\). Write the table for its inverse and graph both functions and the line \(y=x\) on the grid. [[tab|Grid for question 1]]`,
    String.raw`2. State the domain, range, intercept, asymptote and increasing/decreasing behaviour of \(y=\left(\tfrac25\right)^x\) and of its inverse.`,
    String.raw`3. The graph of \(y=2.5^x\) is shown with three marked points. Write the three matching points on its inverse and sketch the inverse on the same axes. [[refl|Graph for question 3]]`,
    "Thinking",
    String.raw`4. Find the inverse of \(y=4^x-6\) with the power isolated. State its domain, range and asymptote, and find both of its intercepts (one may be approximate).`,
    String.raw`5. \(y=b^x\) passes through \(\left(-\tfrac12,\ \tfrac13\right)\). Find \(b\), then find the points on the inverse with \(x=27\) and with \(x=\tfrac1{81}\).`,
    "Communication",
    String.raw`6. Explain why the inverse of every exponential function \(y=b^x\) (\(b>0\), \(b\ne1\)) is a function, but the inverse of \(y=x^2\) is not.`,
    String.raw`7. A classmate says the inverse of \(y=3^x\) is \(y=3^{-x}\). Explain the mistake, using a point on each graph.`,
    "Application",
    String.raw`8. The graph shows the inverse of \(y=3^x\). Use it to estimate the exponent \(y\) with \(3^y=15\), and check your estimate on a calculator. [[inv|Graph for question 8]]`,
    String.raw`9. The temperature difference between a cup of tea and the room is \(D=80(0.9)^t\) °C after \(t\) minutes. (a) Write the inverse, giving \(0.9^t\) in terms of \(D\). (b) Explain what the inverse's input and output represent. (c) Use the graph to estimate when the difference is 20 °C. [[cool|Graph for question 9]]`,
    String.raw`10. A savings account grows as \(A=1000(1.05)^n\) dollars after \(n\) years. Use a table of values for the inverse (with \(A\) as the input) to estimate how long the money takes to double.`,
    "Hard Level",
    String.raw`11. For \(f(x)=-2\cdot3^x+6\): (a) write the inverse with the power isolated; (b) state its domain, range and asymptote; (c) find its exact intercepts; (d) sketch \(f\), its inverse and \(y=x\) on the grid. [[hard|Grid for question 11]]`,
    String.raw`12. (a) Show that \(y=\left(\sqrt[3]{3}\right)^x\) and its inverse meet at \((3,3)\). (b) Prove that an increasing function and its inverse can only meet on the line \(y=x\). (c) Explain why \(y=2^x\) and its inverse do not meet at all.`,
  ] },
];
