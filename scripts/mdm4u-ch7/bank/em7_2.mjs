// 7.2 Collecting & Managing Data — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { tableSvg, dotPlotSvg, boxPlotSvg } from "../../mdm4u/figs.mjs";
import { mean, median, fences } from "../../mdm4u/count.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const fixMean = (vals, bad, good) => num(`The values ${vals.join(", ")} contain an entry error: ${bad} should be ${good}. Find the corrected mean (2 decimals).`, r2(mean(vals.map((v) => (v === bad ? good : v)))), "Replace the error, then average.", null, 0.01);
const upper = (q1, q3) => num(`Q₁ = ${q1} and Q₃ = ${q3}. Find the upper fence for suspicious values.`, q3 + 1.5 * (q3 - q1), "Q₃ + 1.5 IQR.", null, 0.001);

export const E = [
  fixMean([12, 14, 13, 150, 16], 150, 15),
  fixMean([6.5, 7, 70, 8, 7.5], 70, 7),
  fixMean([21, 24, 22, 230, 25, 23], 230, 23),
  upper(20, 28), upper(55, 67), upper(3.5, 6),
  mc("Data you collect yourself through a survey are…", "primary data", ["secondary data", "aggregate data", "census data"], "First-hand."),
  mc("Data downloaded from a national statistics agency are…", "secondary data", ["primary data", "experimental data", "invalid"], "Collected by others."),
  mc("In a tidy data table, each row is…", "one case (individual)", ["one variable", "one summary", "one graph"], "Rows = cases."),
  mc("In a tidy data table, each column is…", "one variable", ["one person", "one sample", "one survey"], "Columns = variables."),
  mc("What is the best way to handle a missing value?", "leave it out of that calculation and report it", ["replace it with 0", "replace it with the largest value", "invent a value"], "Missing ≠ 0."),
  mc("Which step protects participants' privacy?", "replace names with ID numbers", ["publish names", "collect home addresses", "share raw forms online"], "Anonymize."),
  tf("A duplicate record should be kept so that no data are lost.", false, "Keep one copy."),
  tf("Every change made while cleaning data should be recorded.", true, "Transparency."),
  tf("An unusual value should always be deleted.", false, "Check first; keep genuine outliers."),
  num("A codebook says sleep is recorded in hours. A response says 450 minutes. What value should be entered?", 7.5, "450 ÷ 60.", null, 0.001),
  num("The table shows raw responses. How many records are usable (no missing value)?", 3, "Rows 01, 02, 04.", tableSvg([["ID", "grade", "hours"], ["01", "11", "6"], ["02", "12", "8"], ["03", "11", "—"], ["04", "12", "7"]])),
  num("Read the dot plot of cleaned data: find the median.", median([3, 4, 4, 5, 5, 5, 6, 7]), "8 values: average the 4th and 5th.", dotPlotSvg([3, 4, 4, 5, 5, 5, 6, 7], { min: 2, max: 8, step: 1 }), 0.001),
  num("Of 80 surveys sent, 52 were returned. What percent were returned?", 65, "52/80."),
  mc("Which question best judges a secondary source?", "Who collected the data, and how was the sample chosen?", ["Is the website colourful?", "Is the data set large?", "Does it agree with my opinion?"], "Method matters."),
];

const dirty = [15, 18, 16, 17, 160, 19, 18];
const tx = [42, 45, 47, 50, 51, 53, 55, 58, 94];
export const M = [
  num(`For ${dirty.join(", ")}, find the mean before correcting the error (2 decimals).`, r2(mean(dirty)), "Average all values.", null, 0.01),
  num(`For ${dirty.join(", ")}, the 160 should be 16. Find the corrected mean (2 decimals).`, r2(mean(dirty.map((v) => (v === 160 ? 16 : v)))), "Replace and average.", null, 0.01),
  num(`For ${dirty.join(", ")}, find the median before correcting.`, median(dirty), "Order the values.", null, 0.001),
  num(`For the marks ${tx.join(", ")}, find the upper fence.`, fences(tx)[1], "Q₃ + 1.5 IQR.", boxPlotSvg([{ data: tx }], { min: 35, max: 100, step: 5 }), 0.001),
  num("The mean of 25 values is 40. One value entered as 400 should be 40. Find the corrected mean.", 25.6, "(1000 − 360)/25.", null, 0.001),
  num("Of 60 responses, 6 are blank for “hours worked”. The rest total 324 hours. Find the mean of the valid responses.", 6, "324 ÷ 54."),
  num("Using the same responses (6 blank, 324 hours in total), what mean would a careless analyst get by treating blanks as 0?", 5.4, "324 ÷ 60.", null, 0.001),
  num("Heights have mean 165 cm and s = 7 cm. Find z for a recorded height of 235 cm.", 10, "70/7."),
  mc("A height with z = 10 is most likely…", "an entry error", ["a genuine typical value", "the median", "a new world record that must be kept without checking"], "Far too extreme."),
  mc("The answers “Bus”, “bus”, “BUS” and “school bus” appear in one column. The cleaning step needed is…", "use one consistent code for the category", ["delete the column", "treat them as four categories", "replace them with numbers at random"], "Consistent codes."),
  ms("Which are cleaning tasks? Select all.", ["removing duplicates", "fixing unit inconsistencies", "checking flagged values against the original", "changing values that disagree with the hypothesis", "recording missing values"], [0, 1, 2, 4], "Never change data to fit a hypothesis."),
  ms("Which questions help judge a secondary source? Select all.", ["Who collected the data and why?", "How was the sample chosen?", "How were the variables defined?", "How recent are the data?", "How many colours are on the website?"], [0, 1, 2, 3], "Method and context."),
  tf("Replacing names with ID numbers before analysis is one way to anonymize data.", true, "Remove identifiers."),
  tf("Secondary data always match the researcher's question exactly.", false, "Definitions may differ."),
  mc("A survey asked for age in years, but some people entered birth years (e.g. 2008). In 2026, what should 2008 become?", "18 (approximately, depending on the birthday)", ["2008", "0", "delete the column"], "Convert to the codebook's unit."),
  num("A data set has 250 records; 12 are duplicates (one extra copy each) and 8 have the key variable missing. How many records can be used for that variable?", 230, "250 − 12 − 8."),
  num("The dot plot shows hours of homework after cleaning. Find the mean (2 decimals).", r2(mean([2, 3, 3, 4, 4, 4, 5, 6, 7])), "Sum ÷ 9.", dotPlotSvg([2, 3, 3, 4, 4, 4, 5, 6, 7], { min: 1, max: 8, step: 1 }), 0.01),
  mc("Why should the original raw data file be kept unchanged?", "so that every cleaning decision can be checked or undone", ["it takes less space", "raw data are always correct", "the law requires it in every case"], "Reproducibility."),
  mc("Which source is most reliable for national unemployment rates?", "the national statistics agency's published tables", ["a social media post", "a survey of your class", "an advertisement"], "Official methods."),
  num("A survey sent to 400 people gets 248 replies, 8 of them unusable. What percent of the sent surveys are usable?", 60, "240/400."),
];
