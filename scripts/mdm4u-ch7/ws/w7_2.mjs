// MDM4U Worksheet 7.2 — Collecting & Managing Data (teacher edition)
import { svgT, tableSvg, dotPlotSvg, boxPlotSvg } from "./figT.mjs";
import { mean, median, sdS, quartiles, fences } from "../../mdm4u/count.mjs";

const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;
const raw = [14, 16, 15, 18, 170, 17, 15, 16];
const fix = raw.map((v) => (v === 170 ? 17 : v));
const m = [61, 64, 66, 68, 69, 71, 72, 74, 75, 104];
const [q1, , q3] = quartiles(m), [lf, uf] = fences(m);

const EXAMPLES = [
  { title: "Primary or secondary", q: "Classify: (a) a class survey of lunch preferences; (b) provincial graduation rates from a ministry website; (c) your own timing of traffic lights.", steps: ["Who collected the data?"], ans: "(a) primary (b) secondary (c) primary" },
  { title: "Judging a source", q: "List five questions to ask about a secondary data source.", steps: ["Who, why, how sampled, definitions, date and method."], ans: "who collected it and why; sampling; definitions; date; published method" },
  { title: "Tidy data", q: "Organize these responses as a table: Ana grade 11 sleeps 7 h; Ben grade 12 sleeps 6.5 h; Cy grade 11 sleeps 8 h. Remove names.", fig: svgT(tableSvg([["ID", "grade", "sleep (h)"], ["01", "11", "7"], ["02", "12", "6.5"], ["03", "11", "8"]]), 4.5), steps: ["Rows are cases; columns are variables; IDs replace names."], ans: "see table" },
  { title: "An entry error", q: `Weights of parcels (kg): ${raw.join(", ")}. The 170 should be 17. Compare the mean before and after.`, steps: [S`Before $\bar x=${mean(raw)}$; after $\bar x=${mean(fix)}$.`], ans: `${mean(raw)} → ${mean(fix)}` },
  { title: "Median is resistant", q: "For the parcels, compare the median before and after.", steps: [S`$${median(raw)}$ and $${median(fix)}$.`], ans: "almost unchanged" },
  { title: "Fences", q: `Marks: ${m.join(", ")}. Flag suspicious values.`, fig: svgT(boxPlotSvg([{ data: m }], { min: 55, max: 110, step: 5 }), 6), steps: [S`$Q_1=${q1}$, $Q_3=${q3}$; fences $${lf}$ and $${uf}$.`], ans: "104 flagged; check the record" },
  { title: "z-score check", q: "Heights have mean 168 cm and s = 8 cm. A record says 228 cm. Find z and decide.", steps: [S`$z=\frac{60}{8}=7.5$.`], ans: "z = 7.5: almost certainly an error (e.g. 128 or 168)" },
  { title: "Missing values", q: "Of 40 responses, 5 left “sleep” blank; the other 35 average 7.2 h. What is reported?", steps: ["Mean of the 35, and that 5 are missing."], ans: "7.2 h (n = 35), 5 missing" },
  { title: "Units and duplicates", q: "Entries: “1.5 h”, “90 min”, “1.5”, and the same student's response entered twice. Clean them.", steps: ["Convert to hours; keep one copy."], ans: "1.5, 1.5, 1.5 h; delete the duplicate" },
];

const PROBLEMS = [
  { level: 1, q: "Is data downloaded from a national census website primary or secondary?", ans: "secondary" },
  { level: 1, q: "Why should missing values not be entered as 0?", ans: "it invents data and distorts summaries" },
  { level: 1, q: "Q₁ = 30 and Q₃ = 38. Find the fences.", ans: "18 and 50" },
  { level: 2, q: "Values 22, 25, 24, 230, 23 contain an error (230 should be 23). Find the mean before and after correcting.", ans: `${mean([22, 25, 24, 230, 23])} → ${mean([22, 25, 24, 23, 23])}` },
  { level: 2, q: "A value has z = −4.1. What should you do?", ans: "check it against the original record; correct if an error, keep and report if genuine" },
  { level: 2, q: "Design a codebook entry for “transportation to school”.", ans: "name, categories (walk/bike/bus/car/other), codes, how 'mixed' is handled" },
  { level: 2, q: "The dot plot shows cleaned data. Find the median and s.", fig: svgT(dotPlotSvg([4, 5, 5, 6, 6, 6, 7, 8], { min: 3, max: 9, step: 1 }), 5), ans: `median 6, s ≈ ${r2(sdS([4, 5, 5, 6, 6, 6, 7, 8]))}` },
  { level: 2, q: "Explain how to anonymize a data set before sharing it.", ans: "replace names with IDs; remove addresses, birthdays and other identifiers" },
  { level: 3, space: 4.5, q: "Raw data: 8, 9, 90, 7, (blank), 8, 8, 10, 9 (the second 8 is a duplicate). The 90 was meant to be 9. Clean the data and give the mean, median and s before (blank as 0) and after.", ans: (() => { const b = [8, 9, 90, 7, 0, 8, 8, 10, 9], a = [8, 9, 9, 7, 8, 10, 9]; return `before ${r2(mean(b))}, ${median(b)}, ${r2(sdS(b))}; after ${r2(mean(a))}, ${median(a)}, ${r2(sdS(a))}`; })() },
  { level: 3, space: 4.5, q: "Evaluate a claim from an online poll of 2000 website visitors that “70% of Canadians support a four-day school week.”", ans: "voluntary, unrepresentative sample; cannot generalize to Canadians" },
  { level: 3, space: 4.5, q: "The mean of 30 values is 45. One value recorded as 450 should be 45. Find the corrected mean.", ans: "31.5" },
  { level: 3, space: 4.5, q: "Explain why a researcher must keep both the raw data and a log of cleaning changes.", ans: "transparency and reproducibility; others can check decisions" },
  { level: 3, space: 4.5, q: "Find a secondary data set for your investigation and evaluate it with the five source questions.", ans: "answers vary" },
];

export const WS = {
  code: "7.2",
  title: "Collecting & Managing Data",
  bigideas: S`Data come from primary or secondary sources; judge every source. Organize data with one row per case and one column per variable, using a codebook. Clean the data — missing values, duplicates, entry errors, units — and record every change. Use fences and z-scores to flag suspicious values, and protect privacy.`,
  goals: ["Choose and judge sources.", "Organize tidy data.", "Clean data.", "Protect privacy."],
  curriculum: "E1.3, E1.4",
  vocab: [["Primary data", "collected by you"], ["Secondary data", "collected by others"], ["Codebook", "describes each variable"], ["Anonymize", "remove identifying details"]],
  hook: "One typing mistake turned 17 kg into 170 kg. How much damage can it do to a mean?",
  concepts: [
    ["1. Sources", "Primary vs secondary; ask who, why, how, when."],
    ["2. Tidy", "Rows = cases, columns = variables, IDs not names."],
    ["3. Clean", S`${svgT(dotPlotSvg(fix, { min: 12, max: 20, step: 1 }), 4.5)}Data after fixing the 170.`],
  ],
  tips: ["Keep the raw file.", "Log every change.", "Missing is not zero.", "Check unusual values first.", "Use ID numbers."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
