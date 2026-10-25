// MDM4U 5.3 — Bias & Principles of Data Collection: sampling, non-response, response and measurement bias;
// writing fair survey questions (leading, loaded, double-barrelled, open and closed questions); principles of
// experimental design (control group, random assignment, replication, placebo, blinding); ethics of collecting data
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, boxTreeSvg, pieSvg } from "./lib.mjs";

export const TITLE = "5.3 Bias & Principles of Data Collection";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00503";
const S = String.raw;

const gym = (0.7 * 120 + 0.4 * 80) / 200;

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Bias & Principles of Data Collection",
    overview: S`<strong>Bias</strong> is a systematic error: the method tends to give answers that are too high or too low, no matter how many times it is repeated. A bigger sample does not cure it. Bias can enter when the sample is chosen, when people do not respond, when a question is worded, or when something is measured. This lesson names each kind, shows how to write fair survey questions, and sets out the principles of a well-designed experiment and of collecting data ethically.`,
    goals: [
      "identify sampling, non-response, response and measurement bias;",
      "estimate the effect of bias on a result;",
      "write clear, neutral survey questions and recognize leading, loaded and double-barrelled ones;",
      "describe the principles of experimental design: control, random assignment, replication, blinding;",
      "explain the ethical responsibilities of anyone collecting data.",
    ],
    curriculum: "C2.4 (bias: sampling, response, measurement, non-response); C2.5 (designing surveys and experiments; ethics); C1.3 (experimental and observational data)",
    prior: [
      ["What is a convenience sample?", "The easiest people to reach — not random."],
      ["What is 460 ÷ 2000 as a percent?", "23%."],
      ["What does an experiment have that an observational study does not?", "A treatment imposed by the researcher."],
    ],
    words: [
      ["Bias", "a systematic error in one direction", "a survey at a gym overestimates exercise"],
      ["Response rate", "responses ÷ people asked", "460 of 2000 = 23%"],
      ["Leading question", "wording that pushes toward one answer", "“Don't you agree that…?”"],
      ["Control group", "a group that does not get the treatment", "volunteers given a placebo"],
    ],
  }),

  section("📌 Four kinds of bias", S`
  ${table(["Bias", "Cause", "Example"], [
    ["sampling bias", "the sampling method favours some members of the population", "a phone survey that only reaches landlines misses many young adults"],
    ["non-response bias", "people who do not respond differ from those who do", "busy parents ignore a survey about free time"],
    ["response bias", "people give answers that are not true: the wording, the interviewer, or a sensitive topic", "people under-report how much junk food they eat"],
    ["measurement bias", "the measuring tool or procedure gives values that are consistently off", "a scale that reads 0.5 kg too heavy"],
  ])}
  ${fig(barsSvg([31, 58], { labels: ["random sample", "survey at a gym"], top: [ "31%", "58%"], ylabel: "say they exercise daily", ymax: 70 }), "the same question, two sampling methods: the gym survey is biased upward")}
  ${keyIdea(S`Variability is the random scatter of results from sample to sample; a larger sample reduces it. Bias is a shift in one direction; only a better method removes it.`)}`),

  section("📌 Writing fair questions", S`
  ${table(["Problem", "Poor question", "Better question"], [
    ["leading", "Don't you agree that the park needs more lighting?", "Should the city add more lighting to the park? (yes / no / unsure)"],
    ["loaded words", "Should the city waste money on a new arena?", "Should the city build a new arena?"],
    ["double-barrelled", "Are the cafeteria's food and prices good?", "Two questions: one on food, one on prices."],
    ["unclear / vague", "Do you exercise a lot?", "On how many days last week did you exercise for at least 30 minutes?"],
    ["sensitive", "Have you ever cheated on a test?", "Ask anonymously, or use a randomized-response method."],
  ])}
  <p><strong>Closed</strong> questions (choices or a rating scale) are easy to summarize; <strong>open</strong> questions give richer answers that are harder to tabulate. Choices should cover every answer without overlapping.</p>`),

  section("📌 Designing an experiment, ethically", S`
  ${fig(boxTreeSvg([{ t: "treatment group", color: "red", c: [{ t: "new drug", color: "red", c: [{ t: "compare results", color: "green" }] }] }, { t: "control group", color: "blue", c: [{ t: "placebo", color: "blue", c: [{ t: "compare results", color: "green" }] }] }], { root: "volunteers, randomly assigned", dy: 46 }), "random assignment to a treatment group and a control group")}
  ${table(["Principle", "Purpose"], [["control group", "a baseline for comparison"], ["random assignment", "the groups are alike except for the treatment"], ["replication", "enough subjects so results are not due to chance"], ["placebo / blinding", "subjects (and, if double-blind, researchers) do not know who gets the treatment, so expectations do not bias the result"]])}
  <p><strong>Ethics:</strong> participants give informed consent, may withdraw, are not harmed, and have their data kept confidential and used only for the stated purpose.</p>`),

  section("📌 Explore", S`<p>Each histogram shows the results of 400 surveys of the same population (true value 40%). Choose a kind of bias and raise its strength. Then increase the sample size: the spread shrinks, but the bias stays.</p>`),

  widget("biasLab", { init: "sampling" }),

  section("📌 Watch out", watchOut([
    "A large biased sample is still biased.",
    "Name the specific type of bias and explain the direction it pushes the result.",
    "A low response rate is a warning sign even if the original sample was random.",
    "In an experiment, random assignment is about who gets the treatment; random sampling is about who is in the study.",
  ])),

  examples([
    ["Identify the bias", "To estimate how many residents use the public library, volunteers stand at the library entrance on Saturday and ask people whether they have a library card. What kind of bias is present, and in which direction?",
      [S`Only people at the library are asked: the sampling method favours library users.`, S`Sampling bias; the estimate will be too high.`],
      "sampling bias — overestimate"],
    ["Fix a question", "Rewrite: “Since screens damage eyesight, shouldn't students limit their screen time?”",
      [S`The opening clause states an opinion as fact and pushes toward “yes” — a leading question.`, S`Neutral: “How many hours per day do you think students should spend on screens outside school?” with choices 0–1, 1–2, 2–4, more than 4.`],
      "remove the opinion; ask neutrally with non-overlapping choices"],
    ["Response rate", "A company mails a satisfaction survey to 2000 customers and receives 460 replies, 85% of them positive. Find the response rate and explain why the 85% may be misleading.",
      [S`Response rate \(\frac{460}{2000}=0.23\), i.e. 23%.`, S`77% did not reply. Unhappy customers (or customers who stopped buying) may be less likely to reply, so the 85% may not represent all customers: possible non-response bias.`],
      "23%; non-response bias is possible"],
    ["Measuring the effect of bias", "In a town, 40% of adults exercise regularly. A survey of 200 adults is taken: 120 at a gym, where 70% exercise regularly, and 80 at random elsewhere. What proportion of the sample will say they exercise regularly?",
      [S`Gym: \(0.7\times120=84\).`, S`Elsewhere: \(0.4\times80=32\).`, S`\(\frac{84+32}{200}=${gym}\).`],
      `${gym} — far above the true 0.40`,
      fig(pieSvg([["at the gym", 120, "red"], ["elsewhere", 80, "blue"]]), "where the 200 adults were surveyed")],
    ["Design an experiment", "A coach wants to know whether a new warm-up routine reduces sprint times. Outline a well-designed experiment.",
      [S`Recruit volunteers and record their sprint times.`, S`Randomly assign them to the new routine (treatment) or the usual routine (control).`, S`Keep all other conditions alike; use enough runners (replication); have the timer not know who is in which group (blinding).`, S`Compare the average change in sprint time between groups.`],
      "random assignment, control group, replication, blinding"],
  ]),

  practice([
    q("rate", "A school sends a survey to 640 families and 176 reply. What is the response rate, as a percent?", num(27.5, 0.05), "176/640.", [S`\(\frac{176}{640}=0.275\).`], "27.5"),
    q("type", "People are asked their weight and many report a lower weight than they really have. This is…", choice(["response bias", "sampling bias", "non-response bias", "no bias"], 0), "The answers are untrue.", ["The response itself is distorted."], "response bias"),
    q("type2", "A thermometer used in a study always reads 1.5°C too warm. This is…", choice(["measurement bias", "response bias", "sampling bias", "random variability"], 0), "The tool is off.", ["A systematic measuring error."], "measurement bias"),
    q("question", "“How satisfied are you with the bus service and the new fares?” is…", choice(["double-barrelled", "leading", "open", "a fair question"], 0), "Two things at once.", ["Service and fares need separate questions."], "double-barrelled"),
    q("design", "In an experiment, subjects are placed into groups by a random draw so that…", choice(["the groups are alike except for the treatment", "the sample represents every province", "no one gets a placebo", "the response rate is high"], 0), "Purpose of random assignment.", ["Other variables are balanced by chance."], "the groups are alike except for the treatment"),
  ]),

  ...hard([
    ["Randomized response", "To estimate how many students have copied homework, each student secretly flips a coin. Heads: answer the question truthfully. Tails: simply answer “yes”. Of 400 students, 260 say “yes”. Estimate the true proportion p who have copied homework, and explain why this method reduces response bias.",
      [S`P(yes) \(=0.5(1)+0.5p\).`, S`\(\frac{260}{400}=0.65\Rightarrow0.5+0.5p=0.65\Rightarrow p=0.3\).`, S`No one can tell whether a particular “yes” came from the coin, so students can answer honestly.`],
      "p ≈ 0.3",
      fig(boxTreeSvg([{ t: "heads", p: "0.5", c: [{ t: "answers truthfully: yes with probability p", color: "green" }] }, { t: "tails", p: "0.5", c: [{ t: "says “yes”", color: "red" }] }], { root: "coin flip", dy: 46 }))],
    ["Bounds under non-response", "A survey is mailed to 1000 randomly chosen residents. 600 reply and 420 of them support a plan. (a) Find the proportion of respondents who support it. (b) Find the lowest and highest possible support among all 1000 if the non-respondents could think anything. (c) What does this show?",
      [S`(a) \(\frac{420}{600}=0.7\).`, S`(b) Lowest: none of the 400 support: \(\frac{420}{1000}=0.42\). Highest: all support: \(\frac{820}{1000}=0.82\).`, S`(c) With 40% non-response, the true support could be anywhere from 42% to 82%: non-response creates great uncertainty, which choosing the sample at random does not remove.`],
      "0.7; between 0.42 and 0.82"],
  ], [
    q("hard", "In a randomized-response survey (heads: answer truthfully; tails: say yes), 55% of answers are “yes”. Estimate p.", num(0.1), "0.5 + 0.5p = 0.55.", [S`\(p=\frac{0.55-0.5}{0.5}=0.1\).`], "0.1"),
    q("hard", "A survey of 500 gets 300 replies, 120 of them “yes”. What is the largest possible proportion of “yes” among all 500?", num(0.64), "All 200 non-respondents say yes.", [S`\(\frac{120+200}{500}=0.64\).`], "0.64"),
    q("hard", "In a double-blind experiment…", choice(["neither the subjects nor the people measuring results know who received the treatment", "two control groups are used", "the experiment is repeated twice", "subjects are chosen by systematic sampling"], 0), "Both sides are 'blind'.", ["Prevents expectations from affecting either side."], "neither knows"),
  ]),

  wrapUp({
    qas: [
      ["What is bias?", "A systematic error that pushes results in one direction."],
      ["Does a bigger sample remove bias?", "No. It reduces random variability only."],
      ["How do I spot a leading question?", "It suggests the 'right' answer or includes an opinion."],
      ["Why use a control group?", "To have a baseline: the only difference between groups should be the treatment."],
      ["What must every participant give?", "Informed consent; their data must stay confidential."],
    ],
    summary: [
      "Sampling, non-response, response and measurement bias.",
      "Fair questions: neutral, one idea, clear, non-overlapping choices.",
      "Experiments: control, random assignment, replication, blinding.",
      "Ethics: consent, no harm, confidentiality.",
    ],
    next: "5.4 begins summarizing the data once they are collected, with measures of central tendency.",
  }),
];
