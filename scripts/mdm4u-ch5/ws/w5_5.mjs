// MDM4U Worksheet 5.5 — Measures of Spread (teacher edition)
import { svgT, dotPlotSvg, barsSvg, tableSvg } from "./figT.mjs";
import { mean, sum, sdP, sdS } from "../../mdm4u/count.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const pop = [3, 5, 6, 9, 12];
const smp = [21, 24, 25, 27, 28];
const t1 = [62, 64, 65, 66, 68], t2 = [50, 58, 65, 72, 80];
const gm = [10, 30, 50, 70], gf = [4, 10, 12, 4], gN = sum(gf), gx = sum(gm.map((m, i) => m * gf[i])) / gN, gss = sum(gm.map((m, i) => gf[i] * (m - gx) ** 2));
const dev = (xs) => { const m = mean(xs); return xs.map((x) => x - m); };

const EXAMPLES = [
  { title: "Range", q: "Find the range of the times (s) 12.4, 11.8, 13.1, 12.9, 11.5.", steps: [S`$13.1-11.5=1.6$.`], ans: "1.6 s" },
  { title: "Population σ", q: `The ages of the five children in a family are ${pop.join(", ")}. Treating them as a population, find σ.`, fig: svgT(tableSvg([["x", ...pop.map(String)], ["x − μ", ...dev(pop).map(String)], ["(x − μ)²", ...dev(pop).map((d) => String(d * d))]]), 6.5), steps: [S`$\mu=\frac{35}{5}=7$.`, S`$\sum(x-\mu)^2=16+4+1+4+25=50$.`, S`$\sigma=\sqrt{\frac{50}{5}}=\sqrt{10}\approx${r3(sdP(pop))}$.`], ans: `${r3(sdP(pop))}` },
  { title: "Sample s", q: `A sample of five commute distances (km): ${smp.join(", ")}. Find s.`, steps: [S`$\bar x=\frac{125}{5}=25$.`, S`$\sum(x-\bar x)^2=16+1+0+4+9=30$.`, S`$s=\sqrt{\frac{30}{4}}=\sqrt{7.5}\approx${r3(sdS(smp))}$.`], ans: `${r3(sdS(smp))} km` },
  { title: "σ versus s", q: "For the commute data, find σ as if the five values were the whole population. Which is larger, and why?", steps: [S`$\sigma=\sqrt{\frac{30}{5}}=\sqrt6\approx${r3(sdP(smp))}$.`, S`Dividing by $n-1$ gives a larger value, correcting a sample's tendency to underestimate spread.`], ans: `σ ≈ ${r3(sdP(smp))} < s ≈ ${r3(sdS(smp))}` },
  { title: "Comparing spread", q: `Two classes' quiz averages: A ${t1.join(", ")}; B ${t2.join(", ")}. Compare means and population standard deviations.`, fig: svgT(dotPlotSvg(t2, { min: 48, max: 82, step: 4, color: "violet" }), 6), steps: [S`Both means are 65.`, S`$\sigma_A\approx${r3(sdP(t1))}$, $\sigma_B\approx${r3(sdP(t2))}$.`], ans: "same centre; B far more spread out" },
  { title: "Grouped data", q: "Daily step counts (thousands) are grouped: 0–20 (4 people), 20–40 (10), 40–60 (12), 60–80 (4). Estimate the mean and sample standard deviation.", steps: [S`$\bar x\approx\frac{4(10)+10(30)+12(50)+4(70)}{30}=\frac{1220}{30}\approx${r2(gx)}$.`, S`$s\approx\sqrt{\frac{\sum f(m-\bar x)^2}{29}}\approx${r2(Math.sqrt(gss / 29))}$.`], ans: `x̄ ≈ ${r2(gx)}, s ≈ ${r2(Math.sqrt(gss / 29))} (thousands)` },
  { title: "Shortcut formula", q: "A population of 8 values has Σx = 96 and Σx² = 1232. Find σ.", steps: [S`$\mu=12$; $\sigma^2=\frac{1232}{8}-144=154-144=10$.`], ans: `√10 ≈ ${r3(Math.sqrt(10))}` },
  { title: "Adding a constant", q: "Ages have mean 16 and σ = 1.2. Find the mean and σ of the same people's ages 5 years from now.", steps: ["Every value increases by 5; distances unchanged."], ans: "mean 21, σ = 1.2" },
  { title: "Multiplying", q: "Prices have mean 40 dollars and σ = 6 dollars. A 15 percent tax is added to every price. Find the new mean and σ.", steps: [S`Multiply by 1.15: $40(1.15)=46$, $6(1.15)=6.9$.`], ans: "mean 46, σ = 6.9 (dollars)" },
];

const PROBLEMS = [
  { level: 1, q: "Find the range of 56, 71, 48, 90, 66.", ans: "42" },
  { level: 1, q: "Find the population standard deviation of 1, 3, 5, 7, 9.", ans: `${r3(sdP([1, 3, 5, 7, 9]))}` },
  { level: 1, q: "Find the sample standard deviation of 10, 12, 14.", ans: "2" },
  { level: 2, q: "Find the mean and sample standard deviation of 4.2, 3.8, 5.1, 4.6, 4.3.", ans: `${r2(mean([4.2, 3.8, 5.1, 4.6, 4.3]))}, ${r3(sdS([4.2, 3.8, 5.1, 4.6, 4.3]))}` },
  { level: 2, q: "Estimate the mean and the population standard deviation from the histogram (intervals 0–10, 10–20, 20–30, 30–40).", fig: svgT(barsSvg([3, 7, 8, 2], { labels: ["0–10", "10–20", "20–30", "30–40"], histogram: true, top: true }), 5), ans: (() => { const m = [5, 15, 25, 35], f = [3, 7, 8, 2], n = 20, x = sum(m.map((v, i) => v * f[i])) / n, sd = Math.sqrt(sum(m.map((v, i) => f[i] * (v - x) ** 2)) / n); return `${x}, ${r2(sd)}`; })() },
  { level: 2, q: "A data set has σ = 5. Every value is multiplied by 4 and then 10 is subtracted. Find the new σ.", ans: "20" },
  { level: 2, q: "Which has the larger standard deviation, 20, 20, 20, 20 or 19, 20, 21, 20? Explain without calculating.", ans: "the second (the first has σ = 0)" },
  { level: 2, q: "Explain why the sum of the deviations x − x̄ is always 0.", ans: "the mean balances the data: deviations above and below cancel" },
  { level: 3, space: 4.5, q: "A population of 10 values has Σx = 250 and Σx² = 6610. Find μ and σ. A new value of 25 is added; find the new σ.", ans: `μ = 25, σ = ${r3(Math.sqrt(36))}; new σ = ${r3(Math.sqrt(360 / 11))}` },
  { level: 3, space: 4.5, q: "Find two numbers whose mean is 30 and whose population standard deviation is 4.", ans: "26 and 34" },
  { level: 3, space: 4.5, q: "The data 8, 10, 12, x have mean 11. Find x and the sample standard deviation.", ans: `x = 14; s = ${r3(sdS([8, 10, 12, 14]))}` },
  { level: 3, space: 4.5, q: "Two machines fill 500 mL bottles. Machine A: mean 501, s = 2.1. Machine B: mean 500, s = 6.4. Which machine would you buy? Explain using both measures.", ans: "A: slightly high mean but much more consistent; B's large spread means many under- and overfilled bottles" },
  { level: 3, space: 4.5, q: "Explain why the standard deviation is more useful than the range for describing the spread of 200 delivery times.", ans: "the range uses only 2 values and is changed completely by one outlier; σ uses every value" },
];

export const WS = {
  code: "5.5",
  title: "Measures of Spread",
  bigideas: S`Spread describes how far data are from the centre. The range is maximum minus minimum. The standard deviation uses every value: $\sigma=\sqrt{\frac{\sum(x-\mu)^2}{N}}$ for a population and $s=\sqrt{\frac{\sum(x-\bar x)^2}{n-1}}$ for a sample. Adding a constant does not change it; multiplying by $k$ multiplies it by $|k|$.`,
  goals: ["Find range and standard deviation.", "Distinguish σ and s.", "Use grouped data.", "Predict effects of transformations."],
  curriculum: "D1.1, D1.5",
  vocab: [["Deviation", "x minus the mean"], ["Variance", "mean squared deviation"], ["Standard deviation", "square root of the variance"], ["Range", "maximum minus minimum"]],
  hook: "Two archers both average 8 points per arrow. One always scores 7, 8 or 9; the other scores anywhere from 2 to 10. Who is better?",
  concepts: [
    ["1. Deviations", S`${svgT(dotPlotSvg([2, 5, 6, 8, 9], { min: 0, max: 12, step: 2, marks: [[6, "mean", "red"]] }), 5.6)}Square them, add, divide.`],
    ["2. σ and s", S`Population: divide by $N$. Sample: divide by $n-1$.`],
    ["3. Transformations", S`$x+c$: same σ. $kx$: σ times $|k|$.`],
  ],
  tips: ["Square before adding.", "Choose N or n − 1.", "Take the square root last.", "Keep units.", "Use technology to check."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
