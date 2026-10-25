// 1.6 Combinations with Cases & the Complement — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { poolSvg, vennSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

export const E = [
  num("From 4 boys and 5 girls, how many ways can 2 boys AND 2 girls be chosen?", C(4, 2) * C(5, 2), "₄C₂ × ₅C₂."),
  num("From 4 boys and 5 girls, how many ways can 2 boys OR 2 girls be chosen (a pair of the same gender)?", C(4, 2) + C(5, 2), "₄C₂ + ₅C₂."),
  num("From 3 cats and 6 dogs, how many groups of 2 animals contain exactly 1 cat?", 3 * 6, "₃C₁ × ₆C₁."),
  num("How many selections of at least one item can be made from 4 different items?", 15, "2⁴ − 1."),
  num("How many selections of at least one item can be made from 10 different items?", 1023, "2¹⁰ − 1."),
  num("In how many ways can you choose some (possibly none) of 5 different stickers?", 32, "2⁵."),
  num("A box has 3 identical pens. In how many ways can you take some of them (possibly none)?", 4, "0, 1, 2 or 3."),
  num("A bowl has 4 identical apples and 2 identical pears. How many selections of at least one fruit?", 5 * 3 - 1, "(4 + 1)(2 + 1) − 1."),
  num("From 6 men and 4 women, how many 3-person groups contain no women?", C(6, 3), "₆C₃."),
  num("From 6 men and 4 women, how many 3-person groups contain at least one woman?", C(10, 3) - C(6, 3), "120 − 20."),
  num("Use the Venn diagram: how many students are in at least one club?", 15 + 7 + 10, "Add the three regions.", vennSvg({ A: "chess", B: "drama", n: { a: 15, ab: 7, b: 10, out: 8 } })),
  num("In a group of 40, 25 like tea, 20 like coffee and 10 like both. How many like at least one?", 35, "25 + 20 − 10."),
  mc("What is the complement of “at least one girl” in a committee?", "no girls", ["exactly one girl", "all girls", "at most one girl"], "The opposite of ≥ 1 is 0."),
  mc("Which expression counts committees of 4 with at least 1 boy from 5 boys and 5 girls?", "$\\binom{10}{4}-\\binom{5}{4}$", ["$\\binom51\\binom93$", "$\\binom{10}{4}-\\binom{5}{1}$", "$\\binom54$"], "Total − no boys."),
  tf("“At most 2” means 0, 1 or 2.", true, "Two or fewer."),
  tf("“At least 2” means 2 or more.", true, "Two or more."),
  tf("For overlapping groups, n(A or B) = n(A) + n(B).", false, "Subtract the overlap."),
  num("From 5 red and 4 blue cards (all different), how many ways can you choose 3 red cards?", C(5, 3), "₅C₃.", poolSvg([[5, "red", "red"], [4, "blue", "blue"]], { per: 9 })),
  num("A survey of 50 people: 30 own a cat, 18 own a dog, 6 own both. How many own neither?", 50 - (30 + 18 - 6), "50 − 42."),
  num("How many ways can you choose at least one of 3 different appetizers?", 7, "2³ − 1."),
];

export const M = [
  num("From 7 juniors and 5 seniors, how many 4-person teams have at least 2 seniors?", [2, 3, 4].reduce((s, k) => s + C(5, k) * C(7, 4 - k), 0), "Cases 2, 3, 4 seniors."),
  num("From 7 juniors and 5 seniors, how many 4-person teams have at most 1 senior?", C(7, 4) + C(5, 1) * C(7, 3), "0 or 1 senior."),
  num("How many 5-card hands contain at least one heart?", C(52, 5) - C(39, 5), "Total − no hearts."),
  num("How many 5-card hands contain exactly 2 kings?", C(4, 2) * C(48, 3), "₄C₂ × ₄₈C₃."),
  num("How many 5-card hands contain at most 1 king?", C(48, 5) + C(4, 1) * C(48, 4), "0 or 1 king."),
  num("A drawer has 5 identical black socks, 4 identical white socks and 2 identical grey socks. How many selections of at least one sock?", 6 * 5 * 3 - 1, "(5 + 1)(4 + 1)(2 + 1) − 1."),
  num("From 8 different books and 3 identical bookmarks, how many selections of at least one item?", 2 ** 8 * 4 - 1, "2⁸ × 4 − 1."),
  num("A committee of 5 is chosen from 6 doctors and 4 lawyers. How many committees have more doctors than lawyers?", [3, 4, 5].reduce((s, d) => s + C(6, d) * C(4, 5 - d), 0), "Doctors 3, 4 or 5."),
  num("How many ways can a student choose at least 2 of 6 different clubs?", 2 ** 6 - 1 - 6, "64 − 1 − 6."),
  num("Of 60 students, 35 take French, 28 take Spanish and 12 take neither. How many take both?", 35 + 28 - (60 - 12), "n(F ∪ S) = 48."),
  num("From 5 girls and 6 boys, how many 4-person groups include at least one girl and at least one boy?", C(11, 4) - C(5, 4) - C(6, 4), "Total − all girls − all boys."),
  num("A team of 6 is picked from 4 goalies and 12 skaters. It must include exactly 1 goalie. How many teams?", C(4, 1) * C(12, 5), "₄C₁ × ₁₂C₅."),
  ms("A committee of 3 is chosen from 4 men and 3 women. Which counts are correct? Select all.", ["exactly 1 woman: 18", "at least 1 woman: 31", "no women: 4", "all women: 1", "at most 1 woman: 20"], [0, 1, 2, 3], "Check: ₃C₁ × ₄C₂ = 18; 35 − 4 = 31; ₄C₃ = 4; ₃C₃ = 1; at most 1 woman = 4 + 18 = 22, not 20."),
  mc("Which is the fastest way to count 6-card hands with at least one ace?", "total minus hands with no ace", ["add the cases 1, 2, 3 and 4 aces", "choose 1 ace then any 5 cards", "multiply 4 by 51"], "One subtraction instead of four cases; the third option double counts."),
  tf("Choosing 1 ace and then any 4 other cards counts each hand with at least one ace exactly once.", false, "Hands with 2 or more aces are counted several times."),
  tf("The number of selections of at least one item from n different items is $2^n-1$.", true, "Each item in or out, minus the empty selection."),
  num("Use the Venn diagram: how many people are in exactly one of the two groups?", 22 + 17, "Only A plus only B.", vennSvg({ A: "band", B: "choir", n: { a: 22, ab: 9, b: 17, out: 12 } })),
  num("The pool shows 6 red, 5 blue and 4 green different marbles. How many 3-marble selections have all 3 the same colour?", C(6, 3) + C(5, 3) + C(4, 3), "Add the three cases.", poolSvg([[6, "red", "red"], [5, "blue", "blue"], [4, "green", "green"]], { per: 15 })),
  num("Of 90 commuters, 50 take the bus, 40 take the train, 25 drive; 15 bus and train, 10 bus and drive, 8 train and drive, 3 all three. How many use none?", 90 - (50 + 40 + 25 - 15 - 10 - 8 + 3), "Inclusion–exclusion for 3 sets."),
  num("How many 4-person committees from 5 Grade 11 and 6 Grade 12 students have more Grade 12 than Grade 11 students?", C(6, 3) * C(5, 1) + C(6, 4), "3–1 or 4–0."),
];
