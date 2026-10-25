// MDM4U 7.5 — Critiquing Statistical Studies: a checklist for evaluating someone else's study or a media report
// (source and purpose, sample, measurement, design, analysis, displays, conclusion), checking numbers for
// consistency, and giving constructive peer feedback on an investigation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, pieSvg, tableSvg, boxTreeSvg } from "./lib.mjs";

export const TITLE = "7.5 Critiquing Statistical Studies";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00705";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);

export const blocks = () => [
  intro({
    icon: "🧐",
    title: "Critiquing Statistical Studies",
    overview: S`Statistics appear everywhere — in news reports, advertisements, product reviews and classmates' investigations. A careful reader asks a set of questions before accepting a claim: who did the study and why, how the sample was chosen, how the variables were measured, whether the design can support the conclusion, whether the numbers are consistent, and whether the graphs are honest. This lesson builds that checklist and uses it to give useful, respectful feedback.`,
    goals: [
      "apply a checklist to evaluate a statistical study or report;",
      "identify sampling, measurement and design problems;",
      "check reported numbers for consistency (percents, margins of error, totals);",
      "recognize misleading displays and overstated conclusions;",
      "give constructive feedback on another student's investigation.",
    ],
    curriculum: "E2.3 (critiquing the mathematical work of others and evaluating statistical claims); C2 and D1–D2 connections",
    prior: [
      ["Margin of error for p̂ = 0.5, n = 1000 (95%)?", "about 0.031."],
      ["What is voluntary-response bias?", "Only people who choose to respond are included — usually those with strong opinions."],
      ["Correlation proves causation?", "No."],
    ],
    words: [
      ["Critique", "a reasoned evaluation of strengths and weaknesses", "the sample was random, but the question was leading"],
      ["Conflict of interest", "a reason the researcher might prefer one result", "a company testing its own product"],
      ["Consistency check", "verifying that reported numbers fit together", "percents add to 100"],
      ["Constructive feedback", "specific, respectful suggestions for improvement", "“a stratified sample would represent each grade”"],
    ],
  }),

  section("📌 A critique checklist", S`
  ${table(["Ask", "Look for"], [["Who did it, and why?", "funding, conflicts of interest, the purpose of the report"], ["Who was studied, and how were they chosen?", "random vs convenience or voluntary samples; sample size; response rate"], ["How were variables measured?", "question wording, self-report, measuring tools, definitions"], ["Does the design fit the claim?", "survey or observational study vs randomized experiment"], ["Is the analysis sound?", "appropriate summaries, outliers, curvature, margin of error"], ["Are the displays honest?", "truncated axes, unequal intervals, missing labels"], ["Is the conclusion justified?", "overstatement, extrapolation, causal language"]])}
  ${keyIdea(S`A good critique is <strong>specific</strong> (names the problem), <strong>explains its effect</strong> (which way it could bias the result), and <strong>suggests a fix</strong>.`)}`),

  section("📌 Explore", S`<p>Read each study and select every flaw. Then compare your critique with the explanation.</p>`),

  widget("critiqueLab", {}),

  section("📌 Watch out", watchOut([
    "A large sample does not fix a biased sampling method.",
    "Check whether percents refer to the same base.",
    "Look for the margin of error and the sample size — and whether they agree.",
    "Critique the study, not the person.",
  ])),

  examples([
    ["An advertisement", "An ad says: “9 out of 10 dentists recommend Brightsmile toothpaste!” What questions should you ask?",
      [S`How many dentists were asked, and how were they chosen? Was the survey paid for by the company?`, S`What was the exact question — “recommend Brightsmile” or “recommend fluoride toothpaste” (any brand)?`, S`Could dentists choose several brands?`],
      "sample, sponsor and question wording"],
    ["Checking a margin of error", "A report says: “In our poll of 400 people, 61% support the plan, accurate within ±2 percentage points, 19 times out of 20.” Is the margin of error consistent?",
      [S`\(E=1.96\sqrt{\frac{0.61(0.39)}{400}}\approx${r3(moe(0.61, 400))}\), about ±4.8 points.`, S`The claimed ±2 points is too small for \(n=400\); it would need about \(n=${Math.ceil((1.96 / 0.02) ** 2 * 0.61 * 0.39)}\).`],
      "inconsistent: about ±4.8 points, not ±2"],
    ["Checking percents", "A circle graph shows: walk 35%, bus 40%, car 30%. What is wrong?",
      [S`\(35+40+30=105\), so the parts total 105%.`, S`The parts of one whole must total 100% (unless people could pick more than one, which a circle graph cannot show).`],
      "the percents add to 105%",
      fig(tableSvg([["mode", "reported"], ["walk", "35%"], ["bus", "40%"], ["car", "30%"], ["total", "105%"]]), "the reported percents cannot all be parts of one whole")],
    ["A misleading design", "A study reports that patients who chose a new diet lost more weight than those who did not, and concludes the diet works. Critique the design.",
      [S`Patients chose their own group: motivated people may have chosen the diet (self-selection, a confounding variable).`, S`Fix: randomly assign volunteers to the diet or a control diet and compare.`],
      "self-selection; randomize"],
    ["Peer feedback", "A classmate's investigation surveyed 30 friends about study habits and concluded “students at our school study 3 hours a night.” Give constructive feedback.",
      [S`Strength: a clear question and a well-organized table.`, S`Concern: friends are a convenience sample and 30 is small; the conclusion overreaches.`, S`Suggestion: a stratified random sample by grade, and report the result with a margin of error and the median, not just the mean.`],
      "specific, explained, with a fix",
      fig(barsSvg([30, 1600], { labels: ["sample (friends)", "school"], top: true, ylabel: "students" }), "30 friends cannot represent 1600 students")],
  ]),

  practice([
    q("moe", "A poll of 1000 reports p̂ = 0.5. What 95% margin of error should it report (3 decimals)?", num(r3(moe(0.5, 1000)), 0.002), "1.96√(0.25/1000).", [S`\(\approx0.031\).`], `${r3(moe(0.5, 1000))}`),
    q("flaw", "A survey on a cooking website finds that 80% of visitors cook every day. The main flaw is…", choice(["a biased (voluntary, unrepresentative) sample", "a leading question", "a misleading graph", "the sample is too large"], 0), "Who answers?", ["Visitors to a cooking site."], "biased sample"),
    q("sum", "Reported percents for four categories are 22%, 35%, 18% and x%. If they cover all responses, find x.", num(25), "They add to 100.", [S`\(100-75\).`], "25"),
    q("conflict", "A study of a sports drink is paid for by the drink's maker. This is a…", choice(["possible conflict of interest", "random sample", "control group", "measurement unit"], 0), "Who benefits?", ["The sponsor."], "conflict of interest"),
    q("feedback", "Which comment is the most constructive?", choice(["“Your sample of friends may not represent the school; a random sample by grade would help.”", "“This is wrong.”", "“Bad graph.”", "“I don't believe it.”"], 0), "Specific with a fix.", ["Names the problem and a fix."], "the first"),
  ]),

  ...hard([
    ["A full critique", "A news story: “Teens who own a smartwatch walk 3000 more steps a day! A survey of 500 smartwatch owners on the maker's app found an average of 11 000 steps, compared with a national average of 8000.” Critique using the checklist.",
      [S`Source: the maker's app — a conflict of interest.`, S`Sample: only owners who use the app; no comparison group measured the same way (the national average comes from a different source and method).`, S`Design: observational — active teens may be the ones who buy smartwatches (reverse cause / self-selection).`, S`Conclusion: the headline implies the watch causes walking, which the data cannot show. Fix: a randomized trial giving watches to some teens and comparing steps measured the same way.`],
      "source, sample, comparison, design and conclusion all weak",
      fig(boxTreeSvg([{ t: "source: maker's app", color: "red" }, { t: "sample: app users only", color: "red" }, { t: "comparison: different method", color: "red" }, { t: "claim: causal", color: "red" }], { root: "smartwatch story", dy: 40 }))],
    ["Checking a table", "A report says 64% of 250 surveyed students play sports, and that 40% of the 120 girls and 70% of the boys play. Check whether the numbers are consistent.",
      [S`Girls who play: \(0.4\times120=48\). Boys: \(130\), and \(0.7\times130=91\).`, S`Total \(48+91=139\), which is \(\frac{139}{250}=55.6\%\), not 64%.`, S`The figures cannot all be correct; ask the authors for the table of counts.`],
      "inconsistent: 55.6%, not 64%",
      fig(tableSvg([["", "play", "don't", "total"], ["girls", "48", "72", "120"], ["boys", "91", "39", "130"], ["total", "139", "111", "250"]]))],
  ], [
    q("hard", "A poll claims ±3 percentage points (95%) with p̂ near 0.5. About how many people must it have surveyed (nearest whole number, rounding up)?", num(Math.ceil((1.96 / 0.03) ** 2 * 0.25)), "(1.96/0.03)² × 0.25.", [S`\(1067.1\Rightarrow1068\).`], `${Math.ceil((1.96 / 0.03) ** 2 * 0.25)}`),
    q("hard", "A study says 30% of 80 adults and 45% of 120 teens agree. What overall percent agree?", num(39), "(24 + 54)/200.", [S`\(\frac{78}{200}\).`], "39"),
    q("hard", "A graph of sales uses intervals 2019–2020 and 2020–2025 with equal-width bars. The main problem is…", choice(["unequal time intervals drawn as equal widths", "the axis starts at 0", "the bars are coloured", "there are too few bars"], 0), "Intervals.", ["5 years vs 1 year."], "unequal intervals"),
  ]),

  wrapUp({
    qas: [
      ["What is the first question to ask of any study?", "Who did it, and why?"],
      ["Why check the margin of error against n?", "A claimed precision that is too small signals an error or exaggeration."],
      ["How can a graph mislead?", "Truncated axes, unequal intervals, area distortions, missing labels."],
      ["What makes feedback constructive?", "It is specific, explains the effect and suggests a fix."],
      ["Can a large voluntary sample be trusted?", "No — size does not fix bias."],
    ],
    summary: [
      "Checklist: source, sample, measurement, design, analysis, displays, conclusion.",
      "Check numbers for consistency.",
      "Name the problem, its effect and a fix.",
      "Hold your own investigation to the same standard.",
    ],
    next: "7.6 brings everything together in one complete investigation.",
  }),
];
