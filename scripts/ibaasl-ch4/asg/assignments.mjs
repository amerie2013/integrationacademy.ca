// IB AA SL chapter 4 assignments (homework): 12 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7,
// Application 8-10, Hard Level 11-12. [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published.
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const grid = (view) => planeDoc({ view });
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

export const ASSIGNMENTS = [
  { code: "4.1", title: "Assignment 4.1 — The Reciprocal Function", figs: {
      g: planeDoc({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, curves: hyp((x) => -12 / x, 0, -7, 7), ...ASY(0, 0), points: [P(2, -6), P(-4, 3)] }),
      s: grid({ xmin: -8, xmax: 8, ymin: -8, ymax: 8 }),
      w: planeDoc({ view: { xmin: -1, xmax: 26, ymin: -2, ymax: 42 }, curves: [{ f: (n) => 120 / n, a: 3, b: 26 }], points: [P(4, 30), P(10, 12), P(24, 5)], step: { x: 2, y: 5 }, xlabel: "people", ylabel: "hours" }) }, lines: [
    "Knowledge & Understanding",
    S`1. For \(f(x)=\frac{24}{x}\), find \(f(-8)\), \(f(0.2)\) and the value of \(x\) for which \(f(x)=-3\).`,
    "2. The graph shown has the form y = k/x. Find k and state the domain, range and asymptotes. [[g|The graph for question 2]]",
    S`3. State the quadrants containing the branches of \(y=\frac{10}{x}\) and of \(y=-\frac{10}{x}\).`,
    "Thinking",
    S`4. Sketch \(y=\frac{5}{x}\) and \(y=-\frac{2}{x}\) on the same grid, labelling one point on each branch. [[s|Grid for question 4]]`,
    S`5. Find the points where \(y=\frac{6}{x}\) meets \(y=2x-4\).`,
    "Communication",
    S`6. Explain why \(y=\frac1x\) has no value at \(x=0\), and describe what happens to \(y\) as \(x\) approaches 0 from each side.`,
    S`7. Explain why the graph of a self-inverse function is symmetric in the line \(y=x\), using \(y=\frac{5}{x}\) as an example.`,
    "Application",
    "8. The graph shows the time for a group of people to paint a hall. Find the model and the time for 15 people. [[w|Painting time against group size]]",
    "9. The frequency of a vibrating string varies inversely with its length. A 0.6 m string vibrates at 440 Hz. Find the frequency of a 0.8 m string.",
    "10. A prize of 9000 is shared equally. How many more people would be needed to reduce each share from 750 to 600?",
    "Hard Level",
    S`11. Find the values of \(c\) for which the line \(y=c-x\) meets \(y=\frac{4}{x}\) at two points, at one point, and at no points.`,
    S`12. \(A\) and \(B\) lie on \(y=\frac{k}{x}\) (\(k>0\)) with x-coordinates 1 and 4. The gradient of \(AB\) is \(-2\). Find \(k\), and the equation of the line \(AB\).`,
  ] },
  { code: "4.2", title: "Assignment 4.2 — Transforming the Reciprocal Function", figs: {
      g: planeDoc({ view: { xmin: -6, xmax: 4, ymin: -6, ymax: 4 }, curves: hyp((x) => 2 / (x + 2) - 3, -2, -6, 4), ...ASY(-2, -3), points: [P(-1, -1), P(0, -2)] }),
      s: grid({ xmin: -6, xmax: 8, ymin: -6, ymax: 8 }),
      c: planeDoc({ view: { xmin: -2, xmax: 52, ymin: -5, ymax: 95 }, curves: [{ f: (t) => 400 / (t + 5) + 10, a: 0, b: 52 }], lines: [{ m: 0, b: 10, color: "red", dash: true }], points: [P(0, 90)], step: { x: 5, y: 10 }, xlabel: "t (min)", ylabel: "T (°C)" }) }, lines: [
    "Knowledge & Understanding",
    S`1. State the asymptotes, domain and range of \(y=\frac{6}{x+3}-4\).`,
    S`2. Describe the transformations that map \(y=\frac1x\) onto \(y=-\frac{3}{x-5}+1\).`,
    S`3. Find the intercepts of \(y=\frac{8}{x-2}+2\).`,
    "Thinking",
    "4. Find the equation of the graph shown in the form y = a/(x − h) + k. [[g|The graph for question 4]]",
    S`5. Sketch \(y=\frac{4}{x-3}-1\) on the grid, showing the asymptotes, the intercepts and one more point on each branch. [[s|Grid for question 5]]`,
    "Communication",
    S`6. Explain why the range of \(y=\frac{a}{x-h}+k\) is \(y\ne k\).`,
    S`7. Explain how you can tell from the equation whether the branches of \(y=\frac{a}{x-h}+k\) lie top-right and bottom-left of the centre, or top-left and bottom-right.`,
    "Application",
    S`8. Tea cools as \(T=\frac{400}{t+5}+10\) °C (shown). Find the starting temperature, the room temperature, and when the tea reaches 30 °C. [[c|Cooling tea]]`,
    S`9. The number of fish in a lake is \(N=1200-\frac{3000}{t+3}\). Find the initial number, the long-run number, and when there are 1000 fish.`,
    S`10. A graph \(y=\frac{a}{x-h}+k\) has centre \((-1,4)\) and passes through \((1,5)\). Find its equation and its x-intercept.`,
    "Hard Level",
    S`11. Find the points where \(y=\frac{6}{x-1}+2\) meets \(y=x+2\), and decide for which \(x\) the curve is below the line.`,
    S`12. Show that the graph of \(y=\frac{a}{x-h}+k\) is symmetric about \((h,k)\), and find the equation of the inverse function and its asymptotes.`,
  ] },
  { code: "4.3", title: "Assignment 4.3 — Rational Functions", figs: {
      g: planeDoc({ view: { xmin: -6, xmax: 6, ymin: -5, ymax: 7 }, curves: hyp((x) => (2 * x + 2) / (x - 2), 2, -6, 6), ...ASY(2, 2), points: [P(-1, 0), P(0, -1)] }),
      s: grid({ xmin: -8, xmax: 6, ymin: -6, ymax: 8 }),
      a: planeDoc({ view: { xmin: -20, xmax: 1050, ymin: -2, ymax: 32 }, curves: [{ f: (n) => (3000 + 12 * n) / n, a: 140, b: 1050 }], lines: [{ m: 0, b: 12, color: "red", dash: true }], step: { x: 100, y: 4 }, xlabel: "n", ylabel: "cost per bike" }) }, lines: [
    "Knowledge & Understanding",
    S`1. State the asymptotes, domain and range of \(f(x)=\frac{5x-3}{x+2}\).`,
    S`2. Find the intercepts of \(y=\frac{3x+9}{2x-4}\).`,
    S`3. Write \(\frac{4x+11}{x+3}\) in the form \(\frac{A}{x-h}+k\).`,
    "Thinking",
    "4. Find the equation of the graph shown in the form y = (ax + b)/(x + d). [[g|The graph for question 4]]",
    S`5. Find \(f^{-1}(x)\) for \(f(x)=\frac{3x+1}{x-2}\), and state the domain and range of \(f^{-1}\).`,
    "Communication",
    S`6. Explain why the horizontal asymptote of \(\frac{ax+b}{cx+d}\) is \(y=\frac ac\).`,
    S`7. Explain why \(y=\frac{3x-6}{x-2}\) is not a hyperbola, and describe its graph.`,
    "Application",
    S`8. A workshop's cost of making \(n\) bikes is \(3000+12n\). Find the average cost model, explain its asymptote, and find \(n\) for an average cost of 15 (graph shown). [[a|Average cost per bike]]`,
    S`9. A drug's concentration is \(C=\frac{50t}{t+6}\) mg/L. Find \(C(6)\), the long-run concentration, and when \(C=40\).`,
    S`10. Sketch \(y=\frac{x-3}{x+1}\) on the grid, showing the asymptotes and intercepts. [[s|Grid for question 10]]`,
    "Hard Level",
    S`11. \(f(x)=\frac{ax+b}{cx-4}\) has asymptotes \(x=2\) and \(y=1.5\), and passes through \((0,1)\). Find \(a\), \(b\) and \(c\).`,
    S`12. Find the values of \(k\) for which \(y=\frac{x+3}{x-3}\) meets the line \(y=kx\) (a) at two points, (b) at exactly one point.`,
  ] },
];
