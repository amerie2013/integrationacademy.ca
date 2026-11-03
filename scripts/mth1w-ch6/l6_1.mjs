// MTH1W 6.1 — Big Data & Its Implications (self-study format): data types, populations and samples,
// sampling methods and bias, big data and its implications, misleading graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { barChart } from "./figs6.mjs";

export const TITLE = "6.1 Big Data & Its Implications";

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Big Data & Its Implications",
    overview: String.raw`Every tap of a transit card, every song you stream and every weather sensor adds to enormous data sets that companies and governments use to make decisions. To use data well — and to spot when it is being used badly — you need to know what kind of data you have, where it came from, whether the sample is fair, and whether a graph is honest. This lesson builds those skills.`,
    goals: [
      "classify data as categorical or numerical, and numerical data as discrete or continuous;",
      "distinguish a population from a sample and describe five sampling methods;",
      "identify sampling bias, response bias and non-response bias, and suggest fixes;",
      "use a fair sample to estimate a value for a whole population;",
      "describe what makes data “big”, and discuss privacy, consent and fairness;",
      "recognize misleading graphs.",
    ],
    curriculum: "D1.1 (large data sets and their implications), D1.2 (collecting data; types of data; sampling)",
    prior: [
      [String.raw`What is \(18\%\) of \(1200\)?`, String.raw`\(0.18\times1200=216\).`],
      [String.raw`Simplify \(\frac{15}{60}\) as a percent.`, String.raw`\(25\%\).`],
      ["Is your height a whole number of centimetres?", "Only if you round it: height is measured, so it can take any value."],
    ],
    words: [
      ["Population", "the whole group you want to know about", "all Ontario Grade 9s"],
      ["Sample", "the part of the population you actually collect data from", "200 students"],
      ["Categorical data", "labels or categories", "favourite sport"],
      ["Discrete data", "counts — whole-number values", "number of siblings"],
      ["Continuous data", "measurements — any value in a range", "time, height, mass"],
      ["Bias", "a systematic lean that makes results unrepresentative", "asking only athletes"],
    ],
  }),

  section("📌 Types of data", String.raw`
  ${table(["Type", "What it is", "Examples", "Good graphs"], [
    ["Categorical", "names or labels; no arithmetic", "eye colour, phone brand, province", "bar graph, circle graph"],
    ["Numerical — discrete", "counts; whole numbers", "goals scored, people in a household", "bar graph, dot plot"],
    ["Numerical — continuous", "measurements; any value in a range", "height, temperature, time", "histogram, box plot, line graph"],
  ])}
  <p><strong>Primary data</strong> is collected by you (a survey, an experiment). <strong>Secondary data</strong> was collected by someone else (Statistics Canada, a sports website). Secondary data saves time, but you must check who collected it, how and why.</p>`),

  section("📌 Populations, samples and sampling methods", String.raw`
  <p>Studying a whole population (a <strong>census</strong>) is often too slow or expensive, so we study a <strong>sample</strong> and use it to estimate. A good sample is <strong>representative</strong>: it looks like the population in the ways that matter.</p>
  ${table(["Method", "How it works", "Fair?"], [
    ["Simple random", "every member has an equal chance (names from a hat, random numbers)", "yes"],
    ["Systematic", "choose every k-th member from a list, starting at a random point", "yes, if the list has no pattern"],
    ["Stratified", "split into groups (grades, regions) and take a random sample from each, in proportion", "yes — very good"],
    ["Convenience", "ask whoever is easy to reach", "usually biased"],
    ["Voluntary response", "people choose to answer (online polls, call-ins)", "usually biased: strong opinions answer"],
  ])}
  ${keyIdea(String.raw`If a sample is random and large enough, its proportion estimates the population's: \(\dfrac{\text{part in sample}}{\text{sample size}}\approx\dfrac{\text{part in population}}{\text{population size}}\). A biased sample stays wrong no matter how large it is.`)}
  <p>Try each method in the lab. Take 60 samples and watch where the estimates land compared with the true value (green line).</p>`),

  widget("samplingLab"),

  section("📌 Bias", String.raw`
  ${table(["Kind of bias", "Cause", "Fix"], [
    ["Sampling bias", "the sample leaves out part of the population (only asking students in the gym)", "random or stratified sampling"],
    ["Response bias", "the question pushes people (“Don't you agree that…?”) or answers are not honest", "neutral wording; anonymous answers"],
    ["Non-response bias", "many people don't reply, and those who do are different", "follow up; make responding easy"],
    ["Measurement bias", "the tool or method is faulty (a scale that reads 1 kg heavy)", "check and calibrate instruments"],
  ])}`),

  section("📌 Big data and its implications", String.raw`
  <p>Data is called <strong>big data</strong> when it is too large or fast for ordinary tools — described by the three V's: <strong>volume</strong> (huge amounts), <strong>velocity</strong> (arriving continuously) and <strong>variety</strong> (numbers, text, images, locations). Examples: transit tap data used to plan bus routes, hospital records used to track outbreaks, streaming histories used to recommend shows.</p>
  ${watchOut([
    "Privacy: data about people can reveal who they are, even when names are removed.",
    "Consent: people should know what is collected and agree to it.",
    "Fairness: if past data is biased, decisions made from it (by people or by algorithms) can repeat the bias.",
    "Security: large data sets must be protected from leaks.",
  ])}`),

  section("📌 Misleading graphs", String.raw`
  <p>A graph can be accurate and still mislead. Common tricks: a vertical axis that does not start at zero, uneven scales, pictures whose areas exaggerate differences, and leaving out data.</p>
  ${barChart({ bars: [["Brand A", 52], ["Brand B", 48]], base: 46, top: 54, step: 2, ylabel: "% who prefer" }, "The axis starts at 46%, so Brand A's bar looks three times as tall — the real difference is 52% vs 48%.")}`),

  widget("misleadingGraph"),

  examples([
    ["Classifying data", String.raw`A survey asks: (a) your postal code, (b) the number of pets you have, (c) how long your commute takes, (d) your shoe size. Classify each.`,
      [String.raw`<b>Definitions.</b> <i>Categorical</i>: a label or category. <i>Numerical discrete</i>: a count, with gaps between possible values. <i>Numerical continuous</i>: a measurement that can be any value in a range.`,
        String.raw`<b>(a) Postal code:</b> categorical. It contains digits, but it is a label: an "average postal code" makes no sense.`,
        String.raw`<b>(b) Number of pets:</b> numerical, discrete. It is a count (\(0, 1, 2, \ldots\)); you cannot have \(2.5\) pets.`,
        String.raw`<b>(c) Commute time:</b> numerical, continuous. Time is measured and can be \(12.37\) minutes or any value.`,
        String.raw`<b>(d) Shoe size:</b> numerical, discrete in practice. Foot length is continuous, but sizes are only reported in half steps (\(8, 8.5, 9\)).`],
      "categorical; discrete; continuous; discrete"],
    ["Spotting the method and the bias", String.raw`To find out how students feel about the cafeteria, a student asks the first \(40\) people in the cafeteria line. Name the method, explain the bias and suggest a better method.`,
      [String.raw`<b>Definition.</b> A sample is <i>biased</i> when some groups of the population are more likely to be chosen than others, so the results lean one way.`,
        String.raw`<b>Method:</b> convenience sampling. The people asked were simply the easiest to reach.`,
        String.raw`<b>Bias:</b> everyone in the line chose to buy cafeteria food, so they probably like it more than students who bring lunch. The results will make the cafeteria look more popular than it is.`,
        String.raw`<b>Better method:</b> a stratified random sample. Take each grade's class list and randomly choose students from each grade in proportion to its size.`,
        String.raw`<b>Why it is better:</b> every student has a chance to be chosen, whether or not they use the cafeteria, and every grade is represented.`],
      "convenience sample; biased toward cafeteria users; use stratified random sampling"],
    ["Fixing a leading question", String.raw`Rewrite the question “Don't you think the school day starts far too early?” so it does not cause response bias.`,
      [String.raw`<b>Definition.</b> <i>Response bias</i> happens when the wording of a question pushes people toward one answer.`,
        String.raw`<b>Find the problems.</b> “Don't you think…” expects the answer yes, and “far too early” states the asker's opinion.`,
        String.raw`<b>Neutral version:</b> “Would you prefer the school day to start earlier, at the same time, or later?”`,
        String.raw`<b>Check:</b> the new question offers every option and does not reveal what the asker thinks.`],
      "a neutral question offering all options"],
    ["Estimating from a sample", String.raw`A random sample of \(80\) of a school's \(1120\) students finds that \(28\) would join a coding club. Estimate how many students in the school would join.`,
      [String.raw`<b>Rule.</b> For a random sample, \[\text{population estimate}=\text{sample proportion}\times\text{population size}\]`,
        String.raw`<b>Sample proportion:</b> \(\frac{28}{80}=0.35\) (that is, \(35\%\)).`,
        String.raw`<b>Estimate:</b> \(0.35\times1120=392\) students.`,
        String.raw`<b>Check with a proportion:</b> the school is \(1120\div80=14\) times the sample, so \(28\times14=392\) ✓.`],
      String.raw`about \(392\) students`],
    ["A misleading graph", String.raw`A bar graph of monthly sales starts its vertical axis at \(900\). January's bar reaches \(950\) and February's reaches \(1000\). How many times as tall does February's bar look, and how many times as large are its sales?`,
      [String.raw`<b>Key idea.</b> When the axis does not start at 0, the visible bar height is the value <i>minus</i> the axis start.`,
        String.raw`<b>Visible heights:</b> January \(950-900=50\), February \(1000-900=100\). So February looks \(100\div50=2\) times as tall.`,
        String.raw`<b>Actual comparison:</b> \(1000\div950\approx1.05\). February's sales are only about \(5\%\) higher.`,
        String.raw`<b>Fix:</b> start the vertical axis at 0, or clearly mark the break in the axis.`],
      String.raw`looks \(2\) times as tall; really about \(1.05\) times`,
      barChart({ bars: [["Jan", 950], ["Feb", 1000]], base: 900, top: 1020, step: 20, ylabel: "sales", w: 300 })],
  ]),

  practice([
    q("type", "The temperature in a greenhouse, recorded every hour, is…", choice(["continuous numerical data", "discrete numerical data", "categorical data", "not data"], 0),
      "Is temperature counted or measured?", ["It is measured and can take any value."], "continuous"),
    q("method", "A teacher chooses every 5th name on the class list, starting with the 3rd name. This is…", choice(["systematic sampling", "simple random sampling", "stratified sampling", "convenience sampling"], 0),
      "Every k-th member.", ["A fixed interval from a starting point is systematic."], "systematic"),
    q("estimate", String.raw`A random sample of \(50\) of the \(900\) homes in a town finds \(12\) with solar panels. Estimate the number of homes in the town with solar panels.`, num(216),
      "Find the sample proportion first.", [String.raw`\(\frac{12}{50}=0.24\); \(0.24\times900=216\).`], String.raw`\(216\)`),
    q("bias", "An online poll on a sports website asks whether the city should build a new stadium. The main problem is…", choice(["voluntary response bias", "measurement bias", "the sample is too random", "there is no problem"], 0),
      "Who chooses to answer?", ["Sports fans with strong opinions are most likely to respond."], "voluntary response bias"),
    q("misleading", String.raw`A graph's axis starts at \(40\). Bar A reaches \(45\) and bar B reaches \(60\). How many times as tall does bar B look?`, num(4),
      "Measure the visible part of each bar from 40.", [String.raw`\(\frac{60-40}{45-40}=\frac{20}{5}=4\).`], String.raw`\(4\) times`),
  ]),

  wrapUp({
    qas: [
      ["Why not just survey everyone?", "A census is often too costly or slow, and sometimes impossible (testing every light bulb would destroy them). A well-chosen sample gives a good estimate for much less."],
      ["Does a bigger sample fix bias?", "No. A bigger biased sample is just a more confident wrong answer. Size reduces random error; good methods reduce bias."],
      ["Is a postal code numerical data?", "No. It contains digits but it is a label: adding or averaging postal codes is meaningless, so it is categorical."],
      ["Why does stratified sampling work so well?", "It guarantees each important group (grades, regions) appears in the right proportion, so no group is accidentally over- or under-represented."],
      ["How can removing names fail to protect privacy?", "Other details — postal code, birth date, school — can be combined to identify one person. That is why data sets must be handled carefully."],
    ],
    summary: [
      "Data: categorical, or numerical (discrete counts, continuous measurements).",
      "Fair samples: simple random, systematic, stratified. Biased: convenience, voluntary.",
      "Bias comes from who is asked, how they are asked and who answers.",
      "Big data brings power and responsibility: privacy, consent, fairness.",
      "Check graph axes and scales before trusting an impression.",
    ],
    next: "6.2 summarizes one-variable data with centre, spread and box plots.",
  }),
];
