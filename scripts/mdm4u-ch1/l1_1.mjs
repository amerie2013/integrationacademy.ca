// MDM4U 1.1 — The Fundamental Counting Principle: organized lists, tables and tree diagrams, the multiplicative
// counting principle ("and"), the additive counting principle ("or"), and counting with restrictions on a stage
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, treeSvg, fullTree, slotsSvg, tableSvg, poolSvg } from "./lib.mjs";
import { t } from "../mdm4u/count.mjs";

export const TITLE = "1.1 The Fundamental Counting Principle";
export const ID = "c4beabe9-b724-4cdd-9cdc-53da02b8e399";
const S = String.raw;

// licence plates: 3 letters then 3 digits, and a no-repeat version
const plate = 26 ** 3 * 10 ** 3, plateNR = 26 * 25 * 24 * 10 * 9 * 8;
// 4-digit PINs that do not start with 0 and are even
const pinEven = 9 * 10 * 10 * 5;

export const blocks = () => [
  intro({
    icon: "🌳",
    title: "Organized Counting & the Fundamental Counting Principle",
    overview: S`Data management starts with counting: how many outcomes can an experiment have, how many passwords are possible, how many ways can a menu be ordered? Small problems can be counted with an <strong>organized list</strong>, a <strong>table</strong> or a <strong>tree diagram</strong>. Large problems need a rule. The <strong>fundamental (multiplicative) counting principle</strong> says that if one task can be done in \(m\) ways and a second task in \(n\) ways, both together can be done in \(m\times n\) ways. The <strong>additive counting principle</strong> says that if you do one task <em>or</em> the other (never both), there are \(m+n\) ways.`,
    goals: [
      "count outcomes with organized lists, tables and tree diagrams;",
      "apply the fundamental (multiplicative) counting principle to tasks done one after another;",
      "apply the additive counting principle to choices that cannot happen together;",
      "handle a restriction by filling the most restricted position first;",
      "decide whether a situation calls for multiplying or adding.",
    ],
    curriculum: "A2.3 (solve introductory counting problems involving the additive and the multiplicative counting principles); A2.1 (recognize counting techniques and their advantages over lists and tree diagrams)",
    prior: [
      ["How many outcomes are there when one coin is tossed?", "2: heads or tails."],
      ["How many outcomes are there when one six-sided die is rolled?", "6: the numbers 1 to 6."],
      ["Calculate 26 × 26.", "676."],
    ],
    words: [
      ["Outcome", "one possible result of an experiment or a choice", "HT when two coins are tossed"],
      ["Sample space", "the set of all possible outcomes", "{HH, HT, TH, TT}"],
      ["Tree diagram", "a branching diagram with one level for each stage of a task", "coin, then die"],
      ["Multiplicative principle", "m ways AND n ways → m × n ways", "3 shirts and 4 pants: 12 outfits"],
      ["Additive principle", "m ways OR n ways (no overlap) → m + n ways", "3 buses or 2 trains: 5 ways"],
    ],
  }),

  section("📌 Organized counting: lists, tables and trees", S`
  <p>A café offers a combo: one sandwich (turkey T, veggie V or ham H) and one drink (juice J or milk M). Three ways to count the combos:</p>
  ${table(["Method", "What it looks like"], [["Organized list", "TJ, TM, VJ, VM, HJ, HM"], ["Table (2 stages)", "rows = sandwiches, columns = drinks: 3 × 2 cells"], ["Tree diagram", "3 sandwich branches, each splitting into 2 drink branches"]])}
  ${fig(treeSvg(fullTree([["T", "V", "H"], ["J", "M"]]), { heads: ["sandwich", "drink"] }), "Every path from the start to an end branch is one outcome: 3 × 2 = 6 combos")}
  ${fig(tableSvg([["", "juice J", "milk M"], ["turkey T", "TJ", "TM"], ["veggie V", "VJ", "VM"], ["ham H", "HJ", "HM"]], { rowHead: true }), "The same six outcomes in a table")}
  ${keyIdea(S`Lists, tables and trees show <em>every</em> outcome, which helps for small problems and for checking. When there are thousands of outcomes, you count them with the counting principles instead of drawing them.`)}`),

  section("📌 The fundamental counting principle", S`
  <p>If a task is done in stages — stage 1 in \(n_1\) ways, then stage 2 in \(n_2\) ways, …, then stage \(k\) in \(n_k\) ways — and the number of choices at each stage does not depend on what was chosen before, the whole task can be done in</p>
  \[n_1\times n_2\times\cdots\times n_k \text{ ways.}\]
  <p>A <strong>slot diagram</strong> keeps track: draw one box per stage and write the number of choices in each box.</p>
  ${fig(slotsSvg([["letter", 26], ["letter", 26], ["letter", 26], ["digit", 10], ["digit", 10], ["digit", 10]], { title: "licence plate: 3 letters then 3 digits", bw: 52 }), `\\(26^3\\times10^3=${t(plate)}\\) plates`)}
  ${keyIdea(S`The word <strong>AND</strong> (this stage and then that stage) means <strong>multiply</strong>.`)}`),

  section("📌 The additive counting principle", S`
  <p>If you choose <em>one</em> option from group A <strong>or</strong> group B, and no option is in both groups, then the number of choices is \(n(A)+n(B)\).</p>
  ${fig(poolSvg([[4, "blue", "bus routes"], [3, "amber", "train lines"]], { per: 7 }), "Travel by one bus route OR one train line: 4 + 3 = 7 ways")}
  ${keyIdea(S`The word <strong>OR</strong> (one group or the other, never both) means <strong>add</strong>. Many problems use both: split into cases (add), and count each case with stages (multiply).`)}`),

  section("📌 Explore", S`<p>Switch between the two principles. In “AND” mode, change the number of choices at each stage and watch the tree grow. In “OR” mode, see why the two groups are added instead.</p>`),

  widget("countingTree", { init: [2, 3, 2] }),

  section("📌 Watch out", watchOut([
    "Multiply only when the stages happen together (this AND that). Add when you pick from one group OR another.",
    "Fill the most restricted position first (e.g. “the first digit cannot be 0”, “the code must be odd”).",
    "Check whether repetition is allowed: with repetition every slot has the full number of choices; without it, each slot has one fewer.",
    "The additive principle needs groups with no overlap; if an item is in both groups it would be counted twice.",
  ])),

  examples([
    ["A tree diagram", "A spinner has three equal sections (red, blue, green) and a coin is tossed. Draw a tree diagram and list the sample space.",
      [S`Stage 1: spinner (3 branches). Stage 2: coin (2 branches on each).`, S`Outcomes: RH, RT, BH, BT, GH, GT.`, S`Check with the principle: \(3\times2=6\).`],
      "6 outcomes",
      fig(treeSvg(fullTree([["R", "B", "G"], ["H", "T"]]), { heads: ["spinner", "coin"] }))],
    ["The multiplicative principle", "A restaurant offers 4 appetizers, 6 main courses and 5 desserts. How many three-course meals are possible?",
      [S`One choice from each course: appetizer AND main AND dessert.`, S`\(4\times6\times5=120\).`],
      "120 meals"],
    ["Repetition allowed vs not", "How many licence plates have 3 letters followed by 3 digits (a) with repetition allowed, (b) with no letter or digit repeated?",
      [S`(a) \(26\times26\times26\times10\times10\times10=${t(plate)}\).`, S`(b) Each slot has one fewer choice than the one before it of the same kind: \(26\times25\times24\times10\times9\times8=${t(plateNR)}\).`],
      `(a) ${t(plate).replace("{,}", ",").replace("{,}", ",")}; (b) ${t(plateNR).replace("{,}", ",").replace("{,}", ",")}`],
    ["The additive principle", "A student will take one elective: one of 5 arts courses or one of 3 technology courses. How many choices are there? How many choices if the student takes one of each?",
      [S`One OR the other, no overlap: \(5+3=8\).`, S`One of each: arts AND technology: \(5\times3=15\).`],
      "8 choices; 15 if one of each"],
    ["A restriction first", "How many 4-digit PIN codes (0000 to 9999 allowed except a leading 0) are even and do not start with 0? Digits may repeat.",
      [S`Restricted slots first: first digit 1–9 (9 ways), last digit even 0, 2, 4, 6, 8 (5 ways).`, S`Middle two digits: 10 ways each.`, S`\(9\times10\times10\times5=${t(pinEven)}\).`],
      `${t(pinEven).replace("{,}", ",")} PINs`,
      fig(slotsSvg([["1st", 9, "red"], ["2nd", 10], ["3rd", 10], ["4th", 5, "red"]], { result: pinEven }), "restricted positions in red")],
  ]),

  practice([
    q("tree", "A die is rolled and a coin is tossed. How many outcomes are in the sample space?", num(12),
      "6 die outcomes, each with 2 coin outcomes.", [S`\(6\times2\).`], "12"),
    q("and", "A password is 2 letters (A–Z) followed by 3 digits. Repetition is allowed. How many passwords?", num(26 * 26 * 1000),
      "Five slots.", [S`\(26^2\times10^3\).`], "676000"),
    q("or", "A traveller can take one of 6 flights or one of 4 trains from Toronto to Ottawa. How many ways?", num(10),
      "One OR the other.", [S`\(6+4\).`], "10"),
    q("no repeat", "In how many ways can a president, a vice-president and a treasurer be chosen from 12 club members (one person per job)?", num(12 * 11 * 10),
      "Each job has one fewer person available.", [S`\(12\times11\times10\).`], "1320"),
    q("principle", "You choose one shirt from 5 AND one pair of pants from 3. Which operation counts the outfits?", choice(["multiply: 15", "add: 8", "subtract: 2", "divide"], 0),
      "Stages done together.", ["AND means multiply."], "multiply: 15"),
  ]),

  ...hard([
    ["Odd numbers with distinct digits", "How many odd 3-digit numbers have three different digits?",
      [S`Restricted positions first. Last digit odd: 1, 3, 5, 7, 9 (5 ways).`, S`First digit: not 0 and not the last digit: 8 ways.`, S`Middle digit: any of the 10 digits except the two already used: 8 ways.`, S`\(8\times8\times5=320\).`],
      "320 numbers",
      fig(slotsSvg([["hundreds", 8, "amber"], ["tens", 8], ["units", 5, "red"]], { result: 320 }), "fill the units (odd) first, then the hundreds (not 0)")],
    ["Cases and stages together", "A code is either 2 letters followed by 1 digit, or 1 letter followed by 2 digits. Letters and digits may repeat. How many codes are possible?",
      [S`Case 1 (letter, letter, digit): \(26\times26\times10=6760\).`, S`Case 2 (letter, digit, digit): \(26\times10\times10=2600\).`, S`The cases cannot both happen, so add: \(6760+2600=9360\).`],
      "9360 codes"],
  ], [
    q("hard", "How many even 4-digit numbers have four different digits? (Hint: split by whether the last digit is 0.)", num(2296),
      "Last digit 0, or last digit 2, 4, 6, 8.", [S`Last digit 0: \(9\times8\times7=504\).`, S`Last digit 2, 4, 6 or 8: first digit 8 ways (not 0, not the last), then \(8\times7\): \(4\times8\times8\times7=1792\).`, S`\(504+1792\).`], "2296"),
    q("hard", "How many whole numbers from 1 to 999 contain no digit 7? (Count 1-, 2- and 3-digit numbers.)", num(728),
      "Cases by number of digits, then subtract nothing.", [S`1-digit: 8 (1–9 without 7). 2-digit: \(8\times9=72\). 3-digit: \(8\times9\times9=648\).`, S`\(8+72+648\).`], "728"),
    q("hard", "A menu has 3 soups, 4 salads and 6 mains. A meal is a main plus either a soup or a salad (not both). How many meals?", num(42),
      "Starter: soup OR salad; then AND a main.", [S`Starters: \(3+4=7\).`, S`\(7\times6\).`], "42"),
  ]),

  wrapUp({
    qas: [
      ["When should I draw a tree diagram?", "When there are only a few outcomes or you need to see them all, for example to find probabilities later. For large counts use the principles."],
      ["How do I know whether to multiply or add?", "AND (one stage after another, all happen) → multiply. OR (one group or another, only one happens) → add."],
      ["What does “with repetition” change?", "With repetition each slot keeps the full number of choices; without it the choices decrease by one each time."],
      ["Why fill the restricted slot first?", "The restriction limits that slot no matter what else happens; filling it last could leave you unsure how many choices remain."],
      ["Can a problem need both principles?", "Yes: split into cases that cannot overlap (add the cases), and count each case in stages (multiply)."],
    ],
    summary: [
      "Lists, tables and trees show every outcome.",
      "Multiplicative principle: n₁ × n₂ × … × nₖ.",
      "Additive principle: n(A) + n(B) when A and B do not overlap.",
      "Restricted positions first; check whether repetition is allowed.",
    ],
    next: "1.2 uses the multiplicative principle to arrange distinct objects in order: factorials and permutations.",
  }),
];
