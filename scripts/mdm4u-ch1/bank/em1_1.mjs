// 1.1 The Fundamental Counting Principle — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { treeSvg, fullTree, slotsSvg, tableSvg, poolSvg } from "../../mdm4u/figs.mjs";

export const E = [
  num("A coin is tossed twice. How many outcomes are in the sample space?", 4, "HH, HT, TH, TT."),
  num("A spinner with 5 equal sections is spun and a coin is tossed. How many outcomes?", 10, "5 × 2."),
  num("A breakfast special has 3 egg styles and 4 kinds of toast. How many specials with one of each?", 12, "3 × 4."),
  num("Count the outcomes shown in the tree diagram.", 6, "Count the end branches.", treeSvg(fullTree([["A", "B"], ["1", "2", "3"]]), { heads: ["letter", "number"] })),
  num("A student chooses one of 4 math clubs or one of 3 science clubs. How many choices?", 7, "OR with no overlap: add."),
  num("How many 2-digit codes can be made from the digits 0–9 if digits may repeat? (00 counts.)", 100, "10 × 10."),
  num("How many outcomes are there when a 6-sided die is rolled twice?", 36, "6 × 6."),
  num("A shirt comes in 6 colours and 4 sizes. How many different shirts?", 24, "6 × 4."),
  num("How many ways can a gold and a silver medal be awarded among 5 skaters (one medal each)?", 20, "5 × 4."),
  num("Read the table: how many outcomes are listed?", 8, "2 rows × 4 columns.", tableSvg([["", "1", "2", "3", "4"], ["H", "H1", "H2", "H3", "H4"], ["T", "T1", "T2", "T3", "T4"]], { rowHead: true })),
  mc("Which principle counts outfits made of one shirt AND one pair of pants?", "the multiplicative principle", ["the additive principle", "subtraction", "neither"], "AND → multiply."),
  mc("Which principle counts choosing one dessert from 4 cakes OR 3 pies?", "the additive principle", ["the multiplicative principle", "factorials", "neither"], "OR, no overlap → add."),
  tf("A tree diagram for tossing 3 coins has 8 end branches.", true, "2 × 2 × 2 = 8."),
  tf("If repetition is allowed, each slot in a code has the full number of choices.", true, "Nothing is used up."),
  tf("Choosing one item from group A or group B always gives n(A) × n(B) choices.", false, "OR → add (if no overlap)."),
  num("How many 3-letter 'words' (any letters A–Z, repeats allowed) are possible?", 26 ** 3, "26³."),
  num("A phone lock uses 4 digits (0–9, repeats allowed). How many codes?", 10000, "10⁴."),
  num("A diner offers 2 soups, 5 mains and 3 desserts. How many three-course meals?", 30, "2 × 5 × 3."),
  num("The slot diagram shows the choices at each stage. How many outcomes?", 60, "Multiply the boxes.", slotsSvg([["stage 1", 5], ["stage 2", 4], ["stage 3", 3]])),
  num("A traveller can fly with one of 3 airlines or drive by one of 2 highways. How many ways to travel?", 5, "Add."),
];

export const M = [
  num("How many 3-digit numbers (100–999) have all digits odd?", 125, "5 × 5 × 5."),
  num("How many 3-digit numbers (100–999) have no repeated digit?", 9 * 9 * 8, "9 × 9 × 8: first digit not 0."),
  num("How many even 2-digit numbers (10–99) are there?", 45, "9 × 5."),
  num("How many 4-letter arrangements can be made from A–Z if no letter repeats?", 26 * 25 * 24 * 23, "26 × 25 × 24 × 23."),
  num("A license code is 2 letters followed by 2 digits; letters cannot repeat but digits can. How many codes?", 26 * 25 * 100, "26 × 25 × 10 × 10."),
  num("In how many ways can 3 different prizes be given to 10 students if a student may win more than one prize?", 1000, "10 × 10 × 10."),
  num("In how many ways can 3 different prizes be given to 10 students if no student wins more than one?", 720, "10 × 9 × 8."),
  num("A combo is a burger or a wrap (4 burgers, 3 wraps), plus one of 5 drinks. How many combos?", 35, "(4 + 3) × 5."),
  num("How many 4-digit numbers (1000–9999) end in 0 or 5?", 9 * 10 * 10 * 2, "9 × 10 × 10 × 2."),
  num("How many numbers from 501 to 999 have three different digits?", 5 * 9 * 8, "First digit 5–9 (5 ways), then 9 × 8. (500 itself has repeated digits.)"),
  ms("Which situations use the multiplicative principle? Select all.", ["a PIN of 4 digits", "one movie from 6 comedies or 5 dramas", "a sandwich with one bread and one filling", "a 3-course meal", "one book from 2 shelves"], [0, 2, 3], "Stages done together."),
  mc("A code is 1 letter followed by 1 digit OR 2 digits. Which expression counts the codes?", "26 × 10 + 26 × 100", ["26 × 10 × 100", "(26 + 10) × 100", "26 + 10 + 100"], "Two cases: add."),
  tf("The number of 3-digit numbers with distinct digits is 10 × 9 × 8.", false, "A 3-digit number cannot start with 0: 9 × 9 × 8 = 648."),
  tf("A tree diagram is a good way to count the outcomes of 10 coin tosses.", false, "1024 branches — use the principle instead."),
  num("A bag has 3 red, 2 blue and 4 green marbles (all different). How many ways to choose one red AND one green marble?", 12, "3 × 4.", poolSvg([[3, "red", "red"], [2, "blue", "blue"], [4, "green", "green"]], { per: 9 })),
  num("How many odd 3-digit numbers (100–999) can be formed if digits may repeat?", 450, "9 × 10 × 5."),
  num("How many 5-character codes use only the letters A, B, C and digits 1, 2 (5 symbols), repeats allowed?", 5 ** 5, "5⁵."),
  num("In how many ways can 4 people each choose one of 3 different flavours (people may choose the same flavour)?", 81, "3⁴."),
  num("The tree diagram shows a three-stage task. How many outcomes have B at stage 1?", 6, "Count end branches under B.", treeSvg(fullTree([["A", "B"], ["x", "y", "z"], ["1", "2"]]), { leaf: false, heads: ["1", "2", "3"] })),
  num("A website password is one of 5 symbols, then 2 letters (A–Z), then 1 digit. How many passwords?", 5 * 26 * 26 * 10, "5 × 26 × 26 × 10."),
];
