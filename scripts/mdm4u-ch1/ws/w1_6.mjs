// MDM4U Worksheet 1.6 — Combinations with Cases & the Complement (teacher edition)
import { svgT, poolSvg, vennSvg, barsSvg } from "./figT.mjs";
import { C, n } from "../../mdm4u/count.mjs";

const S = String.raw;
const atLeast2Red = C(4, 2) * C(5, 2) + C(4, 3) * C(5, 1) + C(4, 4) * C(5, 0); // 4 red, 5 blue, choose 4
const committee = [2, 3, 4].map((g) => C(7, g) * C(6, 5 - g)).reduce((a, b) => a + b, 0); // 7 girls 6 boys, 5 people, at least 2 girls and at least 1 boy

const EXAMPLES = [
  { title: "Exactly", q: "A bag has 4 red and 5 blue marbles. How many selections of 4 marbles have exactly 2 red?", fig: svgT(poolSvg([[4, "red", "red"], [5, "blue", "blue"]], { per: 9 }), 4.4), steps: [S`$\binom42\binom52=6\times10$.`], ans: "60" },
  { title: "At least, by cases", q: "Same bag: how many selections of 4 marbles have at least 2 red?", steps: [S`2 red: $6\times10=60$; 3 red: $4\times5=20$; 4 red: $1$.`, S`$60+20+1$.`], ans: `${atLeast2Red}` },
  { title: "At least, by the complement", q: "Same bag: how many selections of 4 have at least 1 red?", steps: [S`All: $\binom94=126$. No red: $\binom54=5$.`, S`$126-5$.`], ans: "121" },
  { title: "At most", q: "From 9 seniors and 6 juniors, how many 3-person teams have at most 1 junior?", steps: [S`0 juniors: $\binom93=84$; 1 junior: $\binom61\binom92=6\times36=216$.`, S`$84+216$.`], ans: "300" },
  { title: "Mixed condition", q: "From 7 girls and 6 boys, a committee of 5 has at least 2 girls and at least 1 boy. How many committees?", fig: svgT(barsSvg([0, 1, 2, 3, 4, 5].map((g) => C(7, g) * C(6, 5 - g)), { labels: ["0 G", "1 G", "2 G", "3 G", "4 G", "5 G"], hl: [2, 3, 4], top: true, xlabel: "girls", ylabel: "committees" }), 5.4), steps: ["Allowed: 2, 3 or 4 girls (5 girls leaves no boy).", S`$\binom72\binom63+\binom73\binom62+\binom74\binom61=420+525+210$.`], ans: `${committee}` },
  { title: "Any number of distinct items", q: "A salad bar has 11 different toppings. How many salads with at least one topping?", steps: [S`$2^{11}-1=2047$.`], ans: "2047" },
  { title: "Identical items", q: "A cooler has 6 identical colas, 4 identical juices and 3 identical waters. How many selections of at least one drink?", steps: [S`$(6+1)(4+1)(3+1)-1=140-1$.`], ans: "139" },
  { title: "Mixed distinct and identical", q: "From 5 identical apples and 3 different oranges, how many selections of at least one fruit?", steps: [S`Apples: 6 choices (0--5). Oranges: each in or out, $2^3=8$.`, S`$6\times8-1$.`], ans: "47" },
  { title: "Inclusion–exclusion", q: "Of 120 students, 64 have a part-time job, 48 play a sport and 20 do both. How many do neither?", fig: svgT(vennSvg({ A: "job (64)", B: "sport (48)", n: { a: 44, ab: 20, b: 28, out: 28 }, U: "120 students" }), 4.8), steps: [S`At least one: $64+48-20=92$.`, S`Neither: $120-92$.`], ans: "28" },
];

const PROBLEMS = [
  { level: 1, q: "From 6 men and 8 women, how many 4-person groups have exactly 2 women?", ans: S`$\binom82\binom62=28\times15=420$` },
  { level: 1, q: "How many selections of at least one book can be made from 7 different books?", ans: S`$2^7-1=127$` },
  { level: 1, q: "In a class, 17 take Biology, 14 take Chemistry and 6 take both. How many take at least one of the two?", ans: "25" },
  { level: 2, q: "From 10 Grade 11 and 8 Grade 12 students, a team of 5 must have at least 3 Grade 12 students. How many teams?", ans: S`$\binom83\binom{10}2+\binom84\binom{10}1+\binom85=2520+700+56=3276$` },
  { level: 2, q: "How many 5-card hands contain at least one ace? (Use the complement.)", ans: S`$\binom{52}5-\binom{48}5=2\,598\,960-1\,712\,304=886\,656$` },
  { level: 2, q: "A store has 4 identical red, 2 identical green and 5 identical yellow balloons. How many selections of at least one balloon?", ans: S`$5\times3\times6-1=89$` },
  { level: 2, q: "Use the Venn diagram. How many people like exactly one of the two sports? How many like neither?", fig: svgT(vennSvg({ A: "hockey", B: "soccer", n: { a: 31, ab: 12, b: 22, out: 15 }, U: "80 people" }), 4.6), ans: "53 exactly one; 15 neither", space: 4 },
  { level: 2, q: "How many 4-person committees from 6 teachers and 7 students include at least one teacher and at least one student?", ans: S`$\binom{13}4-\binom64-\binom74=715-15-35=665$` },
  { level: 3, space: 4.5, q: "A 6-question selection is made from a bank of 8 easy, 6 medium and 4 hard questions. How many selections have at least one question of each difficulty?", ans: S`total $\binom{18}6=18\,564$; missing a level: $\binom{10}6+\binom{12}6+\binom{14}6-\binom86-\binom66-\binom46\ (=0)$; $210+924+3003-28-1-0=4108$; answer $14\,456$` },
  { level: 3, space: 4.5, q: "Explain why “choose 1 girl from 5 and then any 3 others from the remaining 9” does NOT count the 4-person committees with at least one girl (from 5 girls and 5 boys). Find the correct number.", ans: S`committees with 2 or more girls are counted several times; correct: $\binom{10}4-\binom54=210-5=205$` },
  { level: 3, space: 4.5, q: "In how many ways can a student choose at least 2 of 8 different elective courses?", ans: S`$2^8-\binom80-\binom81=256-1-8=247$` },
  { level: 3, space: 4.5, q: "Of 200 people surveyed, 120 read news online, 90 watch TV news, 60 listen to radio news, 40 do online and TV, 25 online and radio, 20 TV and radio, and 10 do all three. How many use none of the three?", fig: svgT(vennSvg({ A: "online", B: "TV", C: "radio", n: { abc: 10 }, U: "200" }), 4.6), ans: S`$120+90+60-40-25-20+10=195$ use at least one; none: $5$` },
  { level: 3, space: 5, q: "A pizza can have any of 3 cheeses (each on or off), 6 toppings (each on or off), and either thin or thick crust. How many different pizzas are possible if at least one cheese must be used?", ans: S`cheese: $2^3-1=7$; toppings: $2^6=64$; crust: 2; $7\times64\times2=896$` },
];

export const WS = {
  code: "1.6",
  title: "Combinations with Cases & the Complement",
  bigideas: S`For “at least”, “at most” and “exactly” problems, either add the cases that satisfy the condition (multiply within a case, add between cases) or subtract the cases that break it from the total (the complement). At least one of $n$ distinct items: $2^n-1$; with identical items multiply $(k+1)$ for each type. Overlapping groups: $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.`,
  goals: ["Split selection problems into cases.", "Use the complement.", "Count selections of any size.", "Use inclusion–exclusion with Venn diagrams."],
  curriculum: "A2.3 (additive and multiplicative counting principles); A2.2 (combinations); A1.5 connection (Venn diagrams, complements)",
  vocab: [["At least k", "k or more"], ["At most k", "k or fewer"], ["Complement", "total $-$ unwanted"], ["Inclusion–exclusion", "$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$"]],
  hook: "A coach says: “Pick one girl first, then fill the other 4 spots with anyone.” Why does that count some teams twice?",
  concepts: [
    ["1. Direct method", S`List the cases (e.g. 2, 3 or 4 girls). Multiply across groups inside each case; add the cases.`],
    ["2. Indirect method", S`All selections minus the unwanted ones. Best for “at least one” (unwanted: none).`],
    ["3. Any size and overlaps", S`${svgT(vennSvg({ A: "A", B: "B", shade: ["a", "ab", "b"] }), 3.6)}Distinct items: $2^n-1$. Identical items: $\prod(k_i+1)-1$. Overlaps: inclusion–exclusion.`],
  ],
  tips: ["Write every case in a table.", "Each case must add up to the group size.", "Never fix one item and choose the rest freely for “at least one”.", "Subtract the empty selection.", "Check by computing both ways."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
