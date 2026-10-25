// 5.3 Bias & Principles of Data Collection — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, pieSvg } from "../../mdm4u/figs.mjs";

const B = ["sampling bias", "non-response bias", "response bias", "measurement bias"];
const bias = (prompt, k, why) => mc(prompt, k, B.filter((x) => x !== k), why);

export const E = [
  bias("A survey about public transit is handed out only at a car dealership. The main problem is…", "sampling bias", "Who is reached."),
  bias("Many people asked about their income refuse to answer. The main problem is…", "non-response bias", "Missing replies."),
  bias("People asked whether they wash their hands every time tend to say yes even when they don't. This is…", "response bias", "Untrue answers."),
  bias("A ruler with the first 2 mm worn off is used to measure lengths. This is…", "measurement bias", "Faulty tool."),
  bias("A survey on school sports is answered mostly by athletes because others ignore it. This is…", "non-response bias", "Who replies."),
  bias("An interviewer in a police uniform asks people whether they have ever sped. Answers are likely affected by…", "response bias", "Interviewer effect."),
  num("A survey is sent to 800 people and 200 reply. What is the response rate, as a percent?", 25, "200/800."),
  num("A survey is sent to 1500 people and 615 reply. What is the response rate, as a percent?", 41, "615/1500."),
  mc("“Don't you agree that homework is too long?” is a…", "leading question", ["double-barrelled question", "open question", "neutral question"], "Pushes toward yes."),
  mc("“Is the library quiet and well lit?” is a…", "double-barrelled question", ["leading question", "loaded question", "neutral question"], "Two ideas."),
  mc("A question with no answer choices, where people write what they think, is…", "an open question", ["a closed question", "a leading question", "a rating scale"], "Free response."),
  mc("In an experiment, the group that does not receive the treatment is the…", "control group", ["treatment group", "sample", "stratum"], "Baseline."),
  mc("A fake treatment that looks like the real one is a…", "placebo", ["control", "census", "cluster"], "Definition."),
  tf("Increasing the sample size removes bias.", false, "It only reduces random variability."),
  tf("In a double-blind experiment, neither the subjects nor the researchers measuring results know who got the treatment.", true, "Definition."),
  tf("Participants in a study should give informed consent.", true, "Ethics."),
  mc("Why do researchers assign subjects to groups at random?", "so the groups are alike except for the treatment", ["to make the study cheaper", "to avoid needing a control group", "to increase the response rate"], "Balance."),
  num("The bar graph shows the percent saying yes to the same question with neutral and with leading wording. How many percentage points higher is the leading version?", 22, "61 − 39.", barsSvg([39, 61], { labels: ["neutral", "leading"], top: true, ylabel: "percent yes", ymax: 70 })),
  num("The circle graph shows who replied to a mailed survey. What percent did NOT reply?", 70, "30% replied.", pieSvg([["replied", 30, "green"], ["did not reply", 70, "red"]])),
  mc("Which choice set is best for “How many hours do you sleep?”", "less than 6, 6 to less than 8, 8 or more", ["5–6, 6–7, 7–8", "a lot, some, a little", "0–6, 6–9, 8–12"], "Complete and non-overlapping."),
];

export const M = [
  num("In a town 25% of adults cycle to work. A survey of 100 adults has 60 interviewed at a bike shop (where 80% cycle) and 40 at random. What proportion of the sample cycles? Answer as a decimal.", 0.58, "(48 + 10)/100.", null, 0.001),
  num("A survey of 400 gets 240 replies, 180 of them in favour. What is the lowest possible proportion in favour among all 400? Answer as a decimal.", 0.45, "180/400.", null, 0.001),
  num("A survey of 400 gets 240 replies, 180 of them in favour. What is the highest possible proportion in favour among all 400? Answer as a decimal.", 0.85, "(180 + 160)/400.", null, 0.001),
  num("Each person flips a coin: heads, answer truthfully; tails, say “yes”. 70% say yes. Estimate the true proportion p. Answer as a decimal.", 0.4, "0.5 + 0.5p = 0.7.", null, 0.001),
  num("A scale reads 0.3 kg too heavy. The mean of 20 recorded masses is 64.8 kg. What is the true mean?", 64.5, "Subtract 0.3.", null, 0.001),
  mc("A scale reads 0.3 kg too heavy for every person. How does this affect the standard deviation of the recorded masses?", "it is unchanged", ["it increases by 0.3", "it decreases by 0.3", "it doubles"], "Every value shifts equally."),
  mc("Which is a loaded question?", "Should the city waste more money on a stadium?", ["Should the city build a stadium?", "How often do you attend games?", "Rate the stadium from 1 to 5."], "Emotional word “waste”."),
  mc("A telephone survey only calls during working hours. Which group is under-represented?", "people who work during the day", ["retirees", "people at home", "students on holiday"], "Who is home."),
  ms("Which improve the response rate? Select all.", ["follow-up reminders", "a short questionnaire", "a confusing format", "assurance of confidentiality", "very personal questions first"], [0, 1, 3], "Make it easy and safe to reply."),
  ms("Which are principles of a good experiment? Select all.", ["a control group", "random assignment", "replication (enough subjects)", "letting subjects choose their group", "blinding when possible"], [0, 1, 2, 4], "Self-selection is a flaw."),
  mc("Patients told they are getting a pain reliever report less pain even when given sugar pills. This is the…", "placebo effect", ["response rate", "sampling bias", "confounding effect"], "Expectation."),
  mc("A study compares exam marks of students who chose to attend a review session with those who did not. The main flaw is…", "self-selection: motivated students may attend", ["no response rate", "measurement bias", "the sample is random"], "No random assignment."),
  tf("Asking a sensitive question anonymously can reduce response bias.", true, "Less pressure."),
  tf("A random sample with a 15% response rate gives reliable results because it was random.", false, "Non-response bias."),
  mc("A survey asks “How many minutes did you exercise yesterday?” rather than “Do you exercise a lot?” because…", "the first is specific and measurable", ["the second is double-barrelled", "the first is leading", "the second is open"], "Avoid vague terms."),
  num("The bar graph shows mean reported study hours from an anonymous survey and a face-to-face survey. By how many hours does the face-to-face mean exceed the anonymous mean?", 1.5, "6.5 − 5.", barsSvg([5, 6.5], { labels: ["anonymous", "face to face"], top: true, ylabel: "mean hours", ymax: 8 }), 0.001),
  num("The circle graph shows where 240 surveys were handed out. How many were handed out at the gym?", 96, "40% of 240.", pieSvg([["gym", 40, "red"], ["library", 25, "blue"], ["mall", 35, "amber"]])),
  mc("In a randomized-response survey with a die (1–2: say yes; 3–6: answer truthfully), the probability of yes is…", "1/3 + (2/3)p", ["p", "1/2 + p/2", "2/3 + p/3"], "Two ways to say yes."),
  mc("Which is an ethical requirement when collecting data from people?", "keeping individual responses confidential", ["paying every participant", "using only experiments", "surveying everyone"], "Privacy."),
  mc("A random sample of voters is asked about a candidate by a campaign worker wearing the candidate's button. The likely bias is…", "response bias", ["sampling bias", "non-response bias", "measurement bias"], "Interviewer effect."),
];
