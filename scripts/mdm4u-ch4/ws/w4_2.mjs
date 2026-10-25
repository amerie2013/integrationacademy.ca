// MDM4U Worksheet 4.2 — The Normal Distribution & z-Scores (teacher edition)
import { svgT, normalSvg } from "./figT.mjs";
import { r3 } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Properties", q: "List four properties of a normal distribution.", steps: ["Symmetric about μ; mean = median = mode.", "Bell-shaped; total area 1; tails approach the axis."], ans: "symmetric, bell-shaped, area 1, mean = median = mode" },
  { title: "Effect of σ", q: "Sketch N(50, 5²) and N(50, 10²) on the same axes.", fig: svgT(normalSvg({ mu: 50, s: 5, ticks: [35, 40, 45, 50, 55, 60, 65] }), 4.4), steps: ["Same centre.", "σ = 10 is twice as wide and half as tall."], ans: "wider and lower for larger σ" },
  { title: "Empirical rule", q: "Test scores are N(72, 6²). What percent are between 60 and 84?", steps: ["μ ± 2σ."], ans: "about 95%" },
  { title: "One side", q: "Same scores: what percent are above 78?", steps: ["78 = μ + σ: (100 − 68)/2."], ans: "about 16%" },
  { title: "Uneven interval", q: "Same scores: what percent are between 66 and 84?", fig: svgT(normalSvg({ mu: 72, s: 6, shade: [[66, 84, "green"]] }), 4.4), steps: ["34% + 47.5%."], ans: "about 81.5%" },
  { title: "z-score", q: "Find the z-score of 81 for N(72, 6²).", steps: [S`$\frac{81-72}6=1.5$.`], ans: "1.5" },
  { title: "x from z", q: "Find x for z = −2.25 in N(72, 6²).", steps: [S`$72-2.25(6)$.`], ans: "58.5" },
  { title: "Comparing", q: "Kai scored 82 in Biology (μ = 74, σ = 6) and 88 in Physics (μ = 80, σ = 10). Which is relatively better?", steps: [S`Biology $z\approx1.33$; Physics $z=0.8$.`], ans: "Biology" },
  { title: "Finding μ and σ", q: "In a normal distribution, 50% of values are below 40 and 2.5% are below 28. Find μ and σ.", steps: [S`$\mu=40$; 28 is $\mu-2\sigma$: $\sigma=6$.`], ans: "μ = 40, σ = 6" },
];

const PROBLEMS = [
  { level: 1, q: "N(100, 15²): what percent of IQ scores are between 85 and 115? Between 70 and 130?", ans: "68%; 95%" },
  { level: 1, q: "N(100, 15²): find the z-scores of 124 and 91.", ans: "1.6 and −0.6" },
  { level: 1, q: "N(100, 15²): find the score with z = 2.4.", ans: "136" },
  { level: 2, q: "Bag masses are N(500, 4²) g. What percent weigh less than 492 g?", ans: "about 2.5%" },
  { level: 2, q: "Bag masses are N(500, 4²) g. What percent weigh between 496 and 508 g?", ans: "about 81.5%" },
  { level: 2, q: "Draw the curve for N(500, 4²), labelling μ ± 1σ, 2σ and 3σ.", fig: svgT(normalSvg({ mu: 500, s: 4, zAxis: true }), 4.4), ans: "488, 492, 496, 500, 504, 508, 512", space: 4 },
  { level: 2, q: "A runner's 5-km time is 21.5 min where μ = 25 and σ = 2.5. A swimmer's time is 58.2 s where μ = 62 and σ = 2. Who is relatively faster?", ans: "runner z = −1.4, swimmer z = −1.9: swimmer" },
  { level: 2, q: "Explain why a z-score of 0 means the value equals the mean.", ans: "x − μ = 0" },
  { level: 3, space: 4.5, q: "In a normal distribution 84% of values are below 66 and 16% are below 54. Find μ and σ.", ans: "μ = 60, σ = 6" },
  { level: 3, space: 4.5, q: "Two values 31 and 52 have z-scores −1.5 and 2. Find μ and σ.", ans: "σ = 6, μ = 40" },
  { level: 3, space: 4.5, q: "A class's marks are N(68, 9²). The teacher adds 5 marks to everyone, then multiplies by 1.1. Find the new mean, sd and the new z-score of a student who originally scored 77.", ans: S`mean $80.3$, sd $9.9$, z unchanged at $1$` },
  { level: 3, space: 4.5, q: "About what percent of a normal distribution lies more than 2.5σ from the mean? Explain using the empirical rule and its limits.", ans: "between 0.3% and 5%; tables give about 1.2%" },
  { level: 3, space: 5, q: "The heights of adult women are about N(163, 7²) cm and men N(176, 7.5²) cm. Is a 177 cm woman or a 190 cm man more unusual? Justify.", ans: S`woman $z=2$, man $z\approx1.87$: the woman` },
];

export const WS = {
  code: "4.2",
  title: "The Normal Distribution & z-Scores",
  bigideas: S`The normal distribution $N(\mu,\sigma^2)$ is symmetric and bell-shaped. About 68%, 95%, 99.7% of values lie within 1, 2, 3 standard deviations of the mean. A z-score $z=\frac{x-\mu}\sigma$ counts standard deviations from the mean and lets us compare different distributions.`,
  goals: ["Describe normal curves.", "Use the 68–95–99.7 rule.", "Calculate and interpret z-scores.", "Compare values with z-scores."],
  curriculum: "B2.6, B2.8",
  vocab: [["$N(\\mu,\\sigma^2)$", "normal with mean μ, sd σ"], ["z-score", "$\\frac{x-\\mu}\\sigma$"]],
  hook: "Is a 30-cm snowfall in Toronto as unusual as a 30-cm snowfall in Ottawa? What extra information would you need?",
  concepts: [
    ["1. Shape", S`${svgT(normalSvg({ mu: 0, s: 1, shade: [[-1, 1, "green"]], labels: [[0, "68%"]] }), 3.8)}Symmetric bell; centre μ; spread σ.`],
    ["2. Empirical rule", "68%, 95%, 99.7% within 1, 2, 3σ."],
    ["3. z-scores", S`$z=\frac{x-\mu}\sigma$; $x=\mu+z\sigma$.`],
  ],
  tips: ["Sketch and label μ ± kσ.", "Divide by σ, not σ².", "Negative z = below the mean.", "Rule is approximate.", "Compare with z, not raw scores."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
