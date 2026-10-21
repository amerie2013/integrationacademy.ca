// IB AA SL Worksheet 6.4 — Measures of Dispersion (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const dotplot = (xs, y0 = 0, color = "violet") => { const seen = {}; return xs.map((x) => ({ x, y: y0 + (seen[x] = (seen[x] ?? 0) + 1) * 0.4, color })); };
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

const EXAMPLES = [
  { title: "Range", q: "Find the range of 18, 25, 11, 30, 22.",
    steps: [S`$30-11$.`], ans: "19" },
  { title: "IQR", q: "Find the IQR of 6, 8, 11, 13, 15, 18, 20, 24.",
    steps: [S`Q1 $=\frac{8+11}{2}=9.5$; Q3 $=\frac{18+20}{2}=19$.`], ans: "9.5" },
  { title: "Standard deviation", q: "Find the standard deviation of 1, 3, 5, 7, 9.",
    fig: F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 2 }, points: dotplot([1, 3, 5, 7, 9]), vlines: [{ x: 5, color: "red", dash: true }], step: { x: 1, y: 1 } }),
    steps: [S`Mean 5; squared deviations 16, 4, 0, 4, 16; sum 40.`, S`$\sigma=\sqrt{8}$.`], ans: S`$\approx2.83$` },
  { title: "Variance", q: "State the variance for the previous data.",
    steps: [S`$\sigma^2=8$.`], ans: "8" },
  { title: "Frequency table SD", q: "Find the SD: x = 2, 4, 6 with f = 3, 4, 3.",
    steps: [S`Mean 4; $\sum f(x-4)^2=3(4)+0+3(4)=24$.`, S`$\sigma=\sqrt{2.4}$.`], ans: S`$\approx1.55$` },
  { title: "Adding a constant", q: "Data have mean 15 and SD 3. Each value is increased by 7. Find the new mean and SD.",
    steps: ["Shift: mean + 7; SD unchanged."], ans: "22; 3" },
  { title: "Multiplying", q: "Data have mean 15 and SD 3. Each value is multiplied by 4. Find the new mean, SD and variance.",
    steps: ["Mean × 4; SD × 4; variance × 16."], ans: "60; 12; 144" },
  { title: "Comparing", q: "Machine A fills bottles with mean 500 ml, SD 2 ml; machine B with mean 502 ml, SD 6 ml. Which is better?",
    fig: F({ view: { xmin: 490, xmax: 512, ymin: 0, ymax: 3 }, segs: [{ pts: [[498, 2], [502, 2]], color: "blue" }, { pts: [[496, 1], [508, 1]], color: "green" }], points: [pt(500, 2, "A", "blue"), pt(502, 1, "B", "green")], step: { x: 2, y: 1 } }),
    steps: ["A is on target and much more consistent."], ans: "A" },
  { title: "Using sums", q: S`For 6 values $\sum x=42$ and $\sum x^2=330$. Find the variance using $\sigma^2=\frac{\sum x^2}{n}-\bar x^2$.`,
    steps: [S`$55-49$.`], ans: "6" },
];

const PROBLEMS = [
  { level: 1, q: "Find the range of 7, 19, 4, 12, 15.", recap: "Range.", ans: "15" },
  { level: 1, q: "Q1 = 22, Q3 = 35. Find the IQR.", recap: "IQR.", ans: "13" },
  { level: 1, q: "The variance is 16. Find the SD.", recap: "SD from variance.", ans: "4" },
  { level: 2, q: "Find the SD of 4, 8, 10, 14.", recap: "SD.", ans: S`$\sqrt{13}\approx3.61$` },
  { level: 2, q: "Find the IQR of 3, 5, 6, 9, 11, 14, 16.", recap: "IQR (odd n).", ans: "9" },
  { level: 2, q: "Data have SD 2.5. Every value is decreased by 4. Find the new SD.", recap: "Shift.", ans: "2.5" },
  { level: 2, q: "Data have mean 30 and SD 5. Each is multiplied by 0.4. Find the new mean and SD.", recap: "Scale.", ans: "12; 2" },
  { level: 2, q: "Compare the two box plots shown.", recap: "Compare.", ans: "same median 50; B less spread (IQR 10 vs 20)",
    fig: F({ view: { xmin: 25, xmax: 80, ymin: 0, ymax: 3 }, segs: [...box(30, 40, 50, 60, 75, 2, 0.6, "blue"), ...box(38, 45, 50, 55, 66, 1, 0.6, "green")], step: { x: 5, y: 1 } }) },
  { level: 3, space: 4, q: S`Values 1, 2, 3 have frequencies 4, 2, 4. Find the mean and SD.`, recap: "Frequency SD.", ans: S`2; $\sqrt{0.8}\approx0.894$` },
  { level: 3, space: 4, q: S`For 12 values $\sum x=96$ and $\sum x^2=840$. Find the SD.`, recap: "From sums.", ans: S`$\sqrt{6}\approx2.45$` },
  { level: 3, space: 4, q: "Temperatures have mean 25 °C and SD 3 °C. Find the mean and SD in °F (F = 1.8C + 32).", recap: "Unit change.", ans: "77 °F; 5.4 °F" },
  { level: 3, space: 4, q: S`The data 4, 6, $x$, 10 have mean 7. Find $x$ and the SD.`, recap: "Missing value.", ans: S`$x=8$; $\sqrt5\approx2.24$`,
    fig: F({ view: { xmin: 2, xmax: 12, ymin: 0, ymax: 2 }, points: dotplot([4, 6, 10]), step: { x: 1, y: 1 } }) },
  { level: 3, space: 4, q: "Explain why the IQR may be a better measure of spread than the SD for house prices.", recap: "Choose.", ans: "a few very expensive houses inflate the SD; the IQR ignores them" },
];

export const WS = {
  code: "6.4",
  title: "Measures of Dispersion",
  bigideas: S`Range = max − min; IQR = Q3 − Q1 (the middle 50%, resistant to outliers). Variance $\sigma^2=\frac{\sum(x-\bar x)^2}{n}$ (or $\frac{\sum x^2}{n}-\bar x^2$); SD $\sigma$ is its square root, in the data's units. For $ax+b$: centre becomes $a(\text{centre})+b$; SD, IQR and range are multiplied by $|a|$; variance by $a^2$.`,
  goals: ["Find range and IQR.", "Calculate variance and SD.", "Use frequency tables.", "Apply changes of data; compare sets."],
  curriculum: "SL 4.3",
  vocab: [["IQR", "Q3 − Q1"], ["Variance", S`$\sigma^2$`], ["Standard deviation", S`$\sigma$`]],
  hook: "Two archers both average the bullseye: one's arrows are all close, the other's are scattered. How could a number capture the difference?",
  concepts: [
    ["1. Spread", S`${F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 3 }, points: [...dotplot([1, 3, 5, 7, 9], 1.4, "blue"), ...dotplot([4, 5, 5, 5, 6], 0, "green")], step: { x: 1, y: 1 } }, 5)} Same mean, different SD.`],
    ["2. SD", "Square the deviations, average, square root."],
    ["3. Changing data", "Adding shifts; multiplying scales spread."],
  ],
  tips: ["Square before adding.", "SD in data units.", "Shift leaves spread.", "Variance × a².", "IQR resists outliers."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
