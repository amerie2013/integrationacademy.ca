// IB AA SL 8.4 — Tree Diagrams: two-stage experiments, with and without replacement, 'at least one', conditional probability from a tree
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, treeDoc } from "./figs8.mjs";

export const TITLE = "8.4 Tree Diagrams";
export const ID = "1baa0008-0001-4001-8001-000000000804";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🌳",
    title: "Tree Diagrams",
    overview: S`When an experiment happens in stages — two draws from a bag, a test followed by a result, two matches in a row — a tree diagram organises every path. Multiply along a path to find the probability of that sequence; add the paths you need. In this lesson you will draw and use tree diagrams, handle selections with and without replacement, use 'at least one' = 1 − 'none', and work backwards to conditional probabilities.`,
    goals: [
      "draw tree diagrams for two (or three) stages and label branch probabilities;",
      "multiply along branches and add the outcomes required;",
      "handle selections with replacement (independent) and without replacement (dependent);",
      "use P(at least one) = 1 − P(none);",
      "find conditional probabilities such as P(first | second) from a tree.",
    ],
    curriculum: "SL 4.6 (use of tree diagrams; combined, independent and dependent events; conditional probability)",
    prior: [
      [S`Find \(\frac35\times\frac24\).`, S`\(\frac{6}{20}=\frac{3}{10}\).`],
      [S`Find \(1-0.7^2\).`, "0.51."],
      ["A bag has 4 red and 3 blue. One red is removed. How many are left, and how many are red?", "6 left; 3 red."],
    ],
    words: [
      ["Branch", "a line labelled with the probability of an outcome at one stage", "3/5"],
      ["Path", "a sequence of branches: one combined outcome", "red then blue"],
      ["With replacement", "the item is returned: probabilities stay the same", "independent draws"],
      ["Without replacement", "the item is kept: second-stage probabilities change", "dependent draws"],
      ["At least one", "1 − P(none)", "1 − P(no sixes)"],
    ],
  }),

  section("📌 Multiply along, add down", S`
  <p>A bag holds 3 red and 2 blue counters. Two are taken <em>without replacement</em>. After a red, 2 red and 2 blue remain; after a blue, 3 red and 1 blue remain.</p>
  ${fig(treeDoc([["R", "3/5"], ["B", "2/5"]], [[["R", "2/4"], ["B", "2/4"]], [["R", "3/4"], ["B", "1/4"]]], { highlight: ["01", "10"] }), "Without replacement: different colours (red paths) = 6/20 + 6/20 = 3/5")}
  ${table(["Outcome", "Path", "Probability"], [["RR", S`\(\frac35\times\frac24\)`, S`\(\frac{6}{20}\)`], ["RB", S`\(\frac35\times\frac24\)`, S`\(\frac{6}{20}\)`], ["BR", S`\(\frac25\times\frac34\)`, S`\(\frac{6}{20}\)`], ["BB", S`\(\frac25\times\frac14\)`, S`\(\frac{2}{20}\)`]])}
  <p>The four outcomes add to 1 — a useful check. <em>With replacement</em> the second-stage branches would repeat \(\frac35\), \(\frac25\), and the draws would be independent.</p>
  ${fig(treeDoc([["R", "3/5"], ["B", "2/5"]], [[["R", "3/5"], ["B", "2/5"]], [["R", "3/5"], ["B", "2/5"]]]), "With replacement: the second stage is identical to the first")}
  ${keyIdea("Multiply along each path; add the paths that make up the event. The probabilities at each branching point add to 1, and all the end results add to 1.")}`),

  section("📌 At least one, and working backwards", S`
  <p>'At least one' events have many paths; it is quicker to subtract the single 'none' path from 1. For two shots with P(hit) = 0.7 each (independent), \(P(\text{at least one hit})=1-0.3^2=0.91\).</p>
  ${fig(treeDoc([["H", "0.7"], ["M", "0.3"]], [[["H", "0.7"], ["M", "0.3"]], [["H", "0.7"], ["M", "0.3"]]], { highlight: ["11"] }), "Only MM (red) has no hit: P(at least one hit) = 1 − 0.09 = 0.91")}
  <p>A tree also gives conditional probabilities in the other direction. A test detects a condition in 95% of people who have it and gives a false positive for 10% of those who do not; 4% of people have the condition. Then \(P(\text{positive})=0.04(0.95)+0.96(0.10)=0.134\) and \(P(\text{condition}\mid\text{positive})=\frac{0.038}{0.134}\approx0.284\).</p>
  ${fig(treeDoc([["C", "0.04"], ["C′", "0.96"]], [[["+", "0.95"], ["−", "0.05"]], [["+", "0.10"], ["−", "0.90"]]], { highlight: ["00", "10"] }), "Both positive paths (red): P(+) = 0.038 + 0.096 = 0.134")}
  ${watchOut([
    "Without replacement, change both the numerator and the denominator on the second branches.",
    "Add the end probabilities of separate paths; never add along a path.",
    "'At least one' = 1 − P(none) is usually quickest.",
    "P(C | +) needs P(+) from all positive paths as the denominator.",
  ])}`),

  section("📌 Explore", S`<p>Change the numbers of red and blue counters and switch between drawing with and without replacement. Watch the second-stage branches change and the totals update.</p>`),

  widget("ibTree", { init: [5, 3] }),

  examples([
    ["Level 1 · With replacement", "A fair die is rolled twice. Using a tree with 'six' and 'not six', find P(exactly one six).",
      [S`\(P(6,\text{not})+P(\text{not},6)=\frac16\cdot\frac56+\frac56\cdot\frac16\).`],
      S`\(\frac{10}{36}=\frac{5}{18}\)`,
      fig(treeDoc([["6", "1/6"], ["6′", "5/6"]], [[["6", "1/6"], ["6′", "5/6"]], [["6", "1/6"], ["6′", "5/6"]]], { highlight: ["01", "10"] }))],
    ["Level 1 · Without replacement", "A box holds 4 good and 2 faulty bulbs. Two are taken without replacement. Find P(both faulty).",
      [S`\(\frac26\times\frac15\).`],
      S`\(\frac{2}{30}=\frac1{15}\)`],
    ["Level 2 · At least one", "The probability that a train is late on any day is 0.2, independently. Find P(late at least once in 3 days).",
      [S`\(1-0.8^3=1-0.512\).`],
      "0.488"],
    ["Level 2 · Dependent events", "P(rain today) = 0.3. If it rains today, P(rain tomorrow) = 0.6; otherwise 0.2. Find P(rain tomorrow).",
      [S`\(0.3(0.6)+0.7(0.2)=0.18+0.14\).`],
      "0.32",
      fig(treeDoc([["R", "0.3"], ["R′", "0.7"]], [[["R", "0.6"], ["R′", "0.4"]], [["R", "0.2"], ["R′", "0.8"]]], { highlight: ["00", "10"] }))],
    ["Level 3 · Reverse conditional", "Using the rain tree, find P(it rained today | it rains tomorrow).",
      [S`\(\frac{P(R\text{ today}\cap R\text{ tomorrow})}{P(R\text{ tomorrow})}=\frac{0.18}{0.32}\).`],
      "0.5625"],
  ]),

  practice([
    q("Level 1 · two coins", "A fair coin is tossed twice. Find P(two tails).", num(0.25, 0.001),
      "Multiply along the path.", [S`\(\frac12\times\frac12\).`], S`\(\frac14\)`),
    q("Level 1 · without replacement", "A bag has 3 red and 5 blue. Two are taken without replacement. Find P(both red).", num(6 / 56, 0.001),
      "3/8 × 2/7.", [S`\(\frac{6}{56}\).`], S`\(\frac{3}{28}\)`),
    q("Level 2 · at least one", "P(a seed germinates) = 0.9, independently. Find P(at least one of 2 seeds germinates).", num(0.99, 0.001),
      "1 − P(neither).", [S`\(1-0.1^2\).`], S`\(0.99\)`),
    q("Level 2 · different colours", "A bag has 2 green and 3 yellow. Two are taken with replacement. Find P(different colours).", num(12 / 25, 0.001),
      "GY + YG.", [S`\(2\times\frac25\times\frac35\).`], S`\(\frac{12}{25}\)`),
    q("Level 2 · dependent", "P(A) = 0.4. P(B | A) = 0.5 and P(B | A′) = 0.25. Find P(B).", num(0.35, 0.001),
      "Add both B paths.", [S`\(0.2+0.15\).`], S`\(0.35\)`),
  ]),

  ...hard([
    ["Three stages", "A bag has 4 red and 6 blue counters. Three are taken without replacement. Find P(exactly two red).",
      [S`Paths RRB, RBR, BRR each have probability \(\frac{4\cdot3\cdot6}{10\cdot9\cdot8}=\frac{72}{720}\).`, S`Total \(\frac{216}{720}=\frac{3}{10}\).`],
      S`\(\frac{3}{10}\)`],
    ["A screening test", "A disease affects 2% of a population. A test is positive for 90% of people with the disease and 5% of people without it. Find P(positive) and P(disease | positive).",
      [S`\(P(+)=0.02(0.9)+0.98(0.05)=0.018+0.049=0.067\).`, S`\(P(D\mid+)=\frac{0.018}{0.067}\approx0.269\).`, "Most positives are false positives because the disease is rare."],
      S`0.067; \(\approx0.269\)`,
      fig(treeDoc([["D", "0.02"], ["D′", "0.98"]], [[["+", "0.9"], ["−", "0.1"]], [["+", "0.05"], ["−", "0.95"]]], { highlight: ["00", "10"] }), "Positive paths highlighted")],
  ], [
    q("Level 3 · same colour", "A bag has 5 red and 4 white. Two are taken without replacement. Find P(same colour).", num(32 / 72, 0.001),
      "RR + WW.", [S`\(\frac{20}{72}+\frac{12}{72}\).`], S`\(\frac49\)`),
    q("Level 3 · at least one six", "A die is rolled 3 times. Find P(at least one six) as a fraction or decimal.", num(91 / 216, 0.001),
      "1 − (5/6)³.", [S`\(1-\frac{125}{216}=\frac{91}{216}\).`], S`\(\frac{91}{216}\)`),
    q("Level 3 · reverse", S`P(A) = 0.5, P(B | A) = 0.4, P(B | A′) = 0.2. Find P(A | B) (3 d.p.).`, num(0.2 / 0.3, 0.001),
      "P(A ∩ B)/P(B).", [S`\(\frac{0.2}{0.3}\).`], S`\(\frac23\)`),
  ]),

  wrapUp({
    qas: [
      ["When do I multiply and when do I add?", "Multiply along a path (this AND then that); add separate paths (this path OR that path)."],
      ["What changes without replacement?", "The second-stage numbers: one item fewer in total, and one fewer of the colour already taken."],
      ["How do I check my tree?", "Branches from each point add to 1, and all end probabilities add to 1."],
      ["Why use 1 − P(none) for 'at least one'?", "There is only one 'none' path but many 'at least one' paths."],
      ["How do I find P(first | second) from a tree?", "Divide the probability of the path with both events by the total probability of the second event."],
    ],
    summary: [
      "Multiply along paths, add between paths.",
      "With replacement: independent; without: dependent.",
      "At least one = 1 − none.",
      "Reverse conditional: P(path)/P(event).",
    ],
    next: "8.5 reviews probability with mixed exam-style questions.",
  }),
];
