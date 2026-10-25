// MDM4U 7.2 — Collecting & Managing Data: primary and secondary sources, judging a source, organizing data as cases
// and variables with a codebook, cleaning (missing values, duplicates, entry errors, units), detecting suspicious
// values with fences and z-scores, and protecting privacy
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, tableSvg, dotPlotSvg, boxPlotSvg } from "./lib.mjs";
import { mean, median, sdS, quartiles, fences } from "../mdm4u/count.mjs";

export const TITLE = "7.2 Collecting & Managing Data";
export const ID = "99c8d6dc-e90b-4798-9c18-2c4a9c5c7ddb";
const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;

const raw = [32, 28, 35, 30, 290, 33, 27, 31, 29, 34]; // commute minutes; 290 is a typing error for 29
const clean = raw.map((v) => (v === 290 ? 29 : v));
const tx = [52, 55, 58, 60, 61, 63, 64, 66, 70, 96];
const [tq1, , tq3] = quartiles(tx), [tlf, tuf] = fences(tx);

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Collecting & Managing Data",
    overview: S`Data for an investigation come from your own collection (<strong>primary</strong>) or from existing sources (<strong>secondary</strong>), such as national statistics agencies, public databases or published studies. Either way, the data must be organized — one row per individual (case), one column per variable — and <strong>cleaned</strong>: missing values, duplicates, entry errors and inconsistent units can badly distort the results. Every change must be recorded, and people's privacy protected.`,
    goals: [
      "choose between primary and secondary data and judge the reliability of a source;",
      "organize data in a table of cases and variables with a codebook;",
      "find and fix missing values, duplicates, entry errors and unit problems;",
      "use fences and z-scores to flag suspicious values;",
      "describe how to protect the privacy of participants.",
    ],
    curriculum: "E1.3–E1.4 (gathering data from primary and secondary sources; organizing data with technology); C2 connections (sources and bias)",
    prior: [
      ["Q₁ = 40, Q₃ = 52: upper fence?", "70."],
      ["z for x = 85 with μ = 60, σ = 10?", "2.5."],
      ["420 minutes in hours?", "7."],
    ],
    words: [
      ["Case", "one individual (one row) in a data set", "one survey response"],
      ["Codebook", "a description of each variable: name, meaning, units or codes", "sleep: hours, nearest 0.5"],
      ["Data cleaning", "finding and fixing errors before analysis", "removing a duplicate response"],
      ["Anonymize", "remove information that identifies a person", "replace names with ID numbers"],
    ],
  }),

  section("📌 Sources of data", S`
  ${table(["Source", "Strengths", "Cautions"], [["primary (your survey, experiment, measurements)", "fits your question exactly; you know how it was collected", "time, cost, small samples, your own bias"], ["secondary (agency tables, databases, studies)", "large samples, quick, often high quality", "may not match your question; check date, definitions, who collected it and why"]])}
  ${keyIdea(S`Judge a secondary source by asking: who collected it and why, how the sample was chosen, how variables were defined, how recent it is, and whether the full method is published.`)}`),

  section("📌 Organizing and cleaning", S`
  ${fig(tableSvg([["ID", "grade", "sleep (h)", "screen (h)", "works? (Y/N)"], ["001", "11", "7.5", "3.0", "N"], ["002", "12", "6.0", "5.5", "Y"], ["003", "11", "8.0", "2.0", "N"], ["004", "12", "—", "4.0", "Y"]]), "a tidy table: one row per student, one column per variable; ID numbers, not names")}
  ${table(["Problem", "What to do"], [["missing value", "leave it out of calculations for that variable (do not enter 0); report how many are missing"], ["duplicate record", "keep one copy"], ["entry error (e.g. 290 for 29)", "check the original; correct it if the true value is known, otherwise remove it"], ["inconsistent units or codes", "convert to one unit; use one code for each category"]])}`),

  section("📌 Explore", S`<p>Fix each flagged record and watch the mean, median and standard deviation change.</p>`),

  widget("cleaningLab", {}),

  section("📌 Watch out", watchOut([
    "Never delete a value only because it is unusual — check whether it is an error first.",
    "Keep the original raw data and a log of every change.",
    "Missing is not zero.",
    "Remove names and other identifying details before sharing data.",
  ])),

  examples([
    ["Primary or secondary?", "For each question, choose primary or secondary data: (a) how the average age of first-time home buyers in Canada has changed since 2000; (b) how many hours students in your school spend on homework.",
      [S`(a) Secondary: a national statistics agency has large, consistent data over many years.`, S`(b) Primary: no source has your school's data; run a survey.`],
      "(a) secondary; (b) primary"],
    ["Effect of one entry error", `Ten commute times (min) were entered as ${raw.join(", ")}. The form shows 29, not 290. Find the mean and median before and after correcting.`,
      [S`Before: \(\bar x=${mean(raw)}\), median \(${median(raw)}\).`, S`After: \(\bar x=${mean(clean)}\), median \(${median(clean)}\).`, S`One error multiplied the mean by about 2; the median hardly changed.`],
      `mean ${mean(raw)} → ${mean(clean)}; median ${median(raw)} → ${median(clean)}`,
      fig(dotPlotSvg(clean, { min: 26, max: 36, step: 1, xlabel: "commute (min), after cleaning" }))],
    ["Flagging suspicious values", `Test marks: ${tx.join(", ")}. Use the 1.5 × IQR fences to flag suspicious values.`,
      [S`\(Q_1=${tq1}\), \(Q_3=${tq3}\), \(IQR=${tq3 - tq1}\).`, S`Fences \(${tlf}\) and \(${tuf}\): 96 is above the upper fence.`, S`Check the original paper: if 96 is genuine, keep it and report it as an outlier.`],
      "96 is flagged",
      fig(boxPlotSvg([{ data: tx }], { min: 45, max: 100, step: 5 }))],
    ["Units and codes", "Sleep was recorded as “7h”, “420 min”, “7.0” and “seven”. Clean the four entries.",
      [S`Choose one unit (hours) and a numeric format.`, S`7h → 7; 420 min → 7; 7.0 → 7; seven → 7.`],
      "7, 7, 7, 7 (hours)"],
    ["Missing values", "Of 50 responses, 4 left “hours worked” blank. The other 46 have mean 6.5 h. What should be reported, and what is wrong with entering 0 for the blanks?",
      [S`Report the mean of 46 responses (6.5 h) and that 4 were missing.`, S`Entering 0 would lower the mean to \(\frac{46(6.5)}{50}=5.98\) h — a false result.`],
      "mean 6.5 h (n = 46); 4 missing"],
  ]),

  practice([
    q("source", "Data on the population of every Canadian province over 50 years should come from…", choice(["a secondary source such as a national statistics agency", "a survey of classmates", "an experiment", "a guess"], 0), "Large, official data.", ["Secondary data."], "a secondary source"),
    q("mean", "Five values 12, 15, 14, 13, 160 contain an entry error; the true last value is 16. By how much does the mean drop after correcting?", num(28.8, 0.01), "(160 − 16)/5.", [S`\(\frac{144}{5}\).`], "28.8"),
    q("fence", "Q₁ = 20 and Q₃ = 32. Is 52 flagged by the upper fence? Enter the upper fence.", num(50), "32 + 18.", [S`50; yes, 52 is flagged.`], "50"),
    q("missing", "The best treatment of a missing value is usually to…", choice(["leave it out of that calculation and report it", "replace it with 0", "replace it with the largest value", "delete the whole data set"], 0), "Missing ≠ 0.", ["Exclude and report."], "leave it out and report"),
    q("privacy", "Which step best protects participants' privacy?", choice(["replace names with ID numbers before analysis", "publish the raw survey forms", "ask for home addresses", "share the data online"], 0), "Anonymize.", ["Remove identifiers."], "ID numbers"),
  ]),

  ...hard([
    ["Cleaning a small data set", "Weekly hours of exercise: 4, 6, 5, 6, 50, 3, 7, 5, (blank), 6, 6 (the last 6 is a duplicate of the response before it). The 50 was entered for 5.0. (a) Clean the data. (b) Compare the mean and standard deviation before and after cleaning (before: treat the blank as 0, as a careless student might).",
      (() => { const before = [4, 6, 5, 6, 50, 3, 7, 5, 0, 6, 6], after = [4, 6, 5, 6, 5, 3, 7, 5, 6]; return [S`(a) Remove the duplicate and the blank; change 50 to 5: ${after.join(", ")}.`, S`(b) Before: \(\bar x\approx${r2(mean(before))}\), \(s\approx${r2(sdS(before))}\). After: \(\bar x\approx${r2(mean(after))}\), \(s\approx${r2(sdS(after))}\).`, S`The errors inflated both measures enormously.`]; })(),
      "cleaned: 4, 6, 5, 6, 5, 3, 7, 5, 6"],
    ["Judging a secondary source", "A website reports that “teens sleep only 5.5 hours on average,” citing a poll of 300 visitors to its own site in 2009. Evaluate the source using five questions.",
      [S`Who and why: a website, possibly seeking attention. How sampled: voluntary visitors — not random.`, S`Definitions: “sleep” not defined. Date: 2009 — out of date. Method: not published.`, S`Conclusion: unreliable; look for a recent study with a random sample and a published method.`],
      "unreliable source"],
  ], [
    q("hard", "A data set of 40 values has mean 18. Two values were entered as 180 and 210 instead of 18 and 21. Find the corrected mean.", num(r2((40 * 18 - 180 - 210 + 18 + 21) / 40), 0.01), "Adjust the total.", [S`\(\frac{720-351}{40}\).`], `${r2((40 * 18 - 180 - 210 + 18 + 21) / 40)}`),
    q("hard", "Marks have mean 68 and standard deviation 9. A value of 101 is checked. What is its z-score (2 decimals)?", num(r2(33 / 9), 0.01), "(101 − 68)/9.", [S`\(\approx3.67\): very unusual — check the record.`], `${r2(33 / 9)}`),
    q("hard", "Survey responses: 120 sent, 84 returned, 6 of those unusable. What percent of the sent surveys are usable?", num(65, 0.01), "78/120.", [S`\(0.65\).`], "65"),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between primary and secondary data?", "Primary: collected by you for this study; secondary: collected by others."],
      ["How should a data table be organized?", "One row per case, one column per variable, with a codebook."],
      ["What should I do with a suspicious value?", "Check the original; correct genuine errors; keep and report genuine outliers."],
      ["Why not replace missing values with 0?", "It invents data and distorts the results."],
      ["How do I protect participants?", "Consent, anonymity (ID numbers) and secure storage."],
    ],
    summary: [
      "Choose primary or secondary data and judge the source.",
      "Tidy data: rows = cases, columns = variables.",
      "Clean: missing, duplicates, entry errors, units; log every change.",
      "Flag suspicious values with fences or z-scores.",
    ],
    next: "7.3 chooses and applies the analysis tools.",
  }),
];
