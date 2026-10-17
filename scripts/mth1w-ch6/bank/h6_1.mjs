// 6.1 Big Data & Its Implications — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barChartDoc } from "./fig.mjs";

export const TOPIC = "6.1 Big Data & Its Implications";
export const Q = [
  num(`Biologists tag 50 deer and release them. Later they observe 90 deer, of which 15 are tagged. Estimate the deer population.`, 300, "15/90 = 50/N → N = 300."),
  num(`Researchers tag 120 fish. A later catch of 75 fish has 9 tagged. Estimate the fish population.`, 1000, "9/75 = 120/N → N = 1000."),
  num(`A school has 420 Grade 9, 380 Grade 10, 350 Grade 11 and 250 Grade 12 students. In a stratified sample of 140, how many Grade 11 students are chosen?`, 35, "350/1400 = 0.25; 0.25 × 140."),
  num(`A poll of 1200 randomly chosen adults finds 54% support. Estimate the number of supporters among 2.4 million adults.`, 1296000, "0.54 × 2 400 000."),
  ms(`A school surveys students in the library at lunch about how often they read for fun. Which problems apply? Select all.`, ["sampling bias", "students who read more are over-represented", "the result probably overestimates reading", "this is a simple random sample"], [0, 1, 2], "Convenience sample of likely readers."),
  mc(`A company advertises: “Our app users improved their marks by 15%.” Which question best tests the claim?`, "Were users compared with a similar group who did not use the app?", ["How many colours does the app have?", "Is 15% a large number?", "Did users like the app?"], "Without a comparison group, the improvement may have other causes."),
  num(`A graph's axis runs from 90 to 100. Two bars show 92 and 98. How many times as tall does the second bar look?`, 4, "Visible 8 vs 2.", barChartDoc({ bars: [["X", 92], ["Y", 98]], base: 90, top: 100, step: 2 })),
  num(`For those bars (92 and 98), by what percent is the second value actually larger (1 decimal place)?`, 6.5, "(98 − 92)/92 ≈ 6.5%.", null, 0.06),
  tf(`If a random sample's estimate differs from the true value, the sampling method must have been biased.`, false, "Random samples vary by chance (sampling variability) even without bias."),
  mc(`Removing names from medical records may not protect privacy because…`, "combinations of birth date, postal code and gender can identify most people", ["medical records have no numbers", "names are the only identifier", "data cannot be shared"], "Re-identification risk."),
  num(`A survey had 2000 questionnaires mailed and 340 returned. What percent responded?`, 17, "340 ÷ 2000."),
  mc(`With the 17% response rate above, the biggest concern is…`, "non-response bias", ["measurement bias", "too large a sample", "a census was used"], "Those who reply may differ from those who don't."),
  num(`A streaming service has 30 million users. A random sample of 3000 finds 1260 watched a new series. Estimate how many users watched it, in millions.`, 12.6, "1260/3000 = 0.42; 0.42 × 30 million.", null, 0.06),
  ms(`Which questions contain response bias? Select all.`, ["Do you agree that our excellent mayor deserves re-election?", "How many hours of sleep did you get last night?", "Don't you think fast food is unhealthy?", "Which sport do you play most often?"], [0, 2], "Loaded words and leading phrasing."),
  mc(`Two polls estimate support at 48% and 55%. The 48% poll used a random sample of 800; the 55% poll used 5000 website visitors. Which is more trustworthy?`, "the 48% random poll", ["the 55% poll, because it is bigger", "they are equally trustworthy", "neither, because they differ"], "Method beats size."),
  num(`A systematic sample takes every 12th student from an alphabetical list of 960 students. How many students are in the sample?`, 80, "960 ÷ 12."),
  tf(`A systematic sample can be biased if the list has a repeating pattern that matches the interval.`, true, "e.g. every 10th apartment is always a corner unit."),
  mc(`A city uses data from a ride-share app to plan new bus routes. Whose travel is most likely under-represented?`, "people who cannot afford or do not use the app", ["frequent app users", "drivers", "nobody"], "The data only include app users."),
  num(`An election poll of a random sample of 1000 has a margin of error of about ±3 percentage points. A candidate polls 46%. What is the lowest likely support (%)?`, 43, "46 − 3."),
  mc(`Which design gives the best estimate of the average height of Ontario Grade 9 students?`, "randomly choose schools from every region, then randomly choose students in each", ["measure one large school's basketball team", "ask students to report on a website", "measure your own class"], "A random, stratified design represents the whole province."),
];
