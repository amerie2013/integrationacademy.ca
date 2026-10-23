// 15.4 Reflection, Academic Honesty and a Worked Mini-Exploration — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const r = (v, d = 2) => Math.round(v * 10 ** d) / 10 ** d;

export const E = [
  mc("Criterion D assesses:", "reflection", ["presentation", "use of mathematics", "notation"], "Critical thinking about results."),
  mc("Which is meaningful reflection?", "the model's residuals are under 2%, smaller than the measurement error", ["my work is good", "I liked this topic", "maths is everywhere"], "Evidence-based."),
  mc("A limitation of a model is:", "a reason it may not hold exactly or in all cases", ["a calculation mistake", "the title", "the bibliography"], "Definition."),
  mc("Which must be cited?", "a formula taken from a website", ["your own measurements", "your own graph of your data", "a calculation you did"], "Others' work."),
  mc("An extension is:", "a sensible next question the work suggests", ["a longer introduction", "a copied example", "a summary"], "Follow-up investigation."),
  num("How many marks is criterion D worth?", 3, "Reflection is out of 3."),
  num(S`Find the doubling time of $N=50e^{0.1t}$ (2 d.p.).`, r(Math.log(2) / 0.1), "ln 2 / 0.1.", null, 0.01),
  num(S`Find the half-life of $A=80e^{-0.2t}$ (2 d.p.).`, r(Math.log(2) / 0.2), "ln 2 / 0.2.", null, 0.01),
  num("A model predicts 40 and the observed value is 38. Find the residual.", -2, "38 − 40."),
  num("A quantity halves every 6 minutes from 64. Find it after 18 minutes.", 8, "Three halvings."),
  tf("Reflection should appear throughout the exploration.", true, "After each significant result."),
  tf("Using a source without acknowledging it is acceptable if it is only a small part.", false, "All sources must be acknowledged."),
  tf("A model that fits the data well can still make impossible predictions.", true, "Check beyond the data."),
  fill("Producing your own work and acknowledging all sources is called academic ___.", ["integrity", "honesty", "Integrity", "Honesty"], "Academic integrity."),
  ms("Which are meaningful reflections? Select all.", ["the model ignores air resistance, so it overestimates the range", "only 6 data points limits confidence", "I worked hard", "repeating with a lid would test the evaporation assumption"], [0, 1, 3], "Evidence and critical thinking."),
  mc("The data and model shown suggest the model is:", "a good fit to the data", ["a poor fit", "impossible to judge", "linear"], "Points lie on the curve.", planeDoc({ view: { xmin: 0, xmax: 32, ymin: 0, ymax: 100 }, step: { x: 5, y: 10 }, curves: [{ f: (t) => 20 + 70 * Math.exp(-0.06 * t), color: "red" }], points: [P(0, 90, false), P(10, 58, false), P(20, 41, false), P(30, 31.5, false)] })),
  mc("The line shown models cooling data. Extended far to the right, its predictions become:", "impossible (below room temperature)", ["more accurate", "constant", "periodic"], "A straight line keeps falling.", planeDoc({ view: { xmin: 0, xmax: 60, ymin: -30, ymax: 100 }, step: { x: 10, y: 10 }, lines: [{ m: -1.9, b: 85, color: "amber" }, { m: 0, b: 20, color: "gray", dash: true }], points: [P(0, 88, false), P(10, 63, false), P(20, 46, false)] })),
  num(S`For $T=20+70e^{-0.06t}$, find T at $t=0$.`, 90, "20 + 70."),
  num(S`For $T=20+70e^{-0.06t}$, what value does T approach as t becomes large?`, 20, "The exponential term tends to 0."),
  mc("Which should be acknowledged when graphing software is used?", "the software and what it was used for", ["nothing", "only the final answer", "the computer brand"], "Tools must be acknowledged."),
];

export const M = [
  num(S`For $T=20+70e^{-0.06t}$, find T at $t=20$ (1 d.p.).`, r(20 + 70 * Math.exp(-1.2), 1), "70e^{−1.2} ≈ 21.1.", null, 0.05),
  num(S`For $T=20+70e^{-0.06t}$, find when T = 30 (1 d.p.).`, r(Math.log(10 / 70) / -0.06, 1), "70e^{−0.06t} = 10.", null, 0.1),
  num(S`Find the time for the difference $T-20$ to halve if $T=20+70e^{-0.06t}$ (2 d.p.).`, r(Math.log(2) / 0.06), "ln 2 / 0.06.", null, 0.01),
  num(S`$N=Ae^{kt}$ passes through $(0,40)$ and $(5,90)$. Find k (4 d.p.).`, r(Math.log(90 / 40) / 5, 4), "ln(90/40)/5.", null, 0.0001),
  num("A model predicts 125 and the observed value is 118. Find the percentage error relative to the observed value (1 d.p.).", r((7 / 118) * 100, 1), "7/118 × 100.", null, 0.05),
  num("Residuals of a model are 0.3, −0.2, 0.4, −0.1, 0.2. Find the sum of squared residuals (2 d.p.).", 0.34, "0.09 + 0.04 + 0.16 + 0.01 + 0.04.", null, 0.001),
  mc("A student's exponential model predicts a bacteria count of 10 billion after 3 days in a small dish. The best reflection is:", "growth must slow as resources run out, so a logistic model may be better", ["the model is correct", "bacteria grow forever", "the calculator is wrong"], "Limits of exponential growth."),
  mc("Which practice follows academic integrity?", "citing a data set and describing how your own data were collected", ["paraphrasing a website without credit", "submitting a friend's graph", "copying a model from another student"], "Credit all sources."),
  mc("Which is the strongest extension for a cooling-coffee exploration?", "repeat with a lid and compare the values of k", ["make the font bigger", "add the history of coffee", "use more colours"], "A testable follow-up."),
  tf("If two models fit equally well, the one that makes physical sense beyond the data should be preferred.", true, "Context matters."),
  tf("Small residuals over the data range guarantee accurate predictions far outside it.", false, "Extrapolation is risky."),
  num(S`$N=200e^{-0.15t}$. Find N at $t=10$ (1 d.p.).`, r(200 * Math.exp(-1.5), 1), "200e^{−1.5}.", null, 0.05),
  num("A drink is 85 °C in a 20 °C room. The temperature difference halves every 12 minutes. Find the temperature after 24 minutes (2 d.p.).", 36.25, "20 + 65/4.", null, 0.01),
  num("Two models have sums of squared residuals 64 and 0.64. How many times smaller is the second?", 100, "64/0.64."),
  ms("Which statements are evidence-based reflection? Select all.", ["the residuals show no pattern", "the largest residual is 0.4 °C", "I think it's fine", "the model's prediction at 60 min is below room temperature, which is impossible"], [0, 1, 3], "Specific evidence."),
  mc("The residual plot shown suggests the model:", "is appropriate — small, random residuals", ["is the wrong shape", "is linear", "has no residuals"], "No pattern.", planeDoc({ view: { xmin: 0, xmax: 32, ymin: -1, ymax: 1 }, step: { x: 5, y: 0.25 }, points: [P(0, 0.1, false), P(5, -0.2, false), P(10, 0.15, false), P(15, -0.05, false), P(20, 0.3, false), P(25, -0.15, false), P(30, 0.05, false)], lines: [{ m: 0, b: 0, color: "gray" }] })),
  mc("The data shown flatten out at the top. Which model should the reflection suggest testing?", "logistic", ["linear", "exponential growth", "quadratic"], "Growth levels off.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 110 }, step: { x: 2, y: 10 }, points: [P(0, 5, false), P(2, 14, false), P(4, 35, false), P(6, 64, false), P(8, 86, false), P(10, 96, false), P(12, 99, false)] })),
  num(S`Find t when $200e^{-0.15t}=50$ (2 d.p.).`, r(Math.log(4) / 0.15), "e^{−0.15t} = 0.25.", null, 0.01),
  num("A student uses 7 data points. If they collect data every 5 minutes for 60 minutes instead (starting at 0), how many points will they have?", 13, "0, 5, …, 60."),
  num(S`For $T=18+60e^{-kt}$ with $T=48$ at $t=10$, find k (4 d.p.).`, r(Math.log(2) / 10, 4), "60e^{−10k} = 30.", null, 0.0001),
];
