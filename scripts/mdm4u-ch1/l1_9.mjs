// MDM4U 1.9 — Chapter 1 Review: choosing the counting technique (principle, permutation, identical objects,
// constraints, combination, cases/complement, Pascal, binomial theorem), mixed problems
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, tilesSvg, gridSvg, vennSvg, slotsSvg } from "./lib.mjs";
import { fact, P, C, multi, t, n, countPerms, binTerm } from "../mdm4u/count.mjs";

export const TITLE = "1.9 Chapter 1 Review";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00109";
const S = String.raw;

/** decision flow for choosing a counting method */
function flowSvg() {
  const box = (x, y, w, h, txt, fill, stroke) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>` + txt.split("|").map((l, i, a) => `<text x="${x + w / 2}" y="${y + h / 2 + 5 + (i - (a.length - 1) / 2) * 15}" font-size="12.5" font-weight="700" text-anchor="middle" fill="#0f172a">${l}</text>`).join("");
  const arrow = (x1, y1, x2, y2, lab) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#475569" stroke-width="1.8" marker-end="url(#ar)"/>` + (lab ? `<text x="${(x1 + x2) / 2 + 6}" y="${(y1 + y2) / 2 - 3}" font-size="11.5" font-weight="700" fill="#be123c">${lab}</text>` : "");
  let s = `<defs><marker id="ar" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#475569"/></marker></defs>`;
  s += box(170, 8, 220, 40, "Does order matter?", "#ede9fe", "#6d28d9");
  s += arrow(220, 48, 120, 92, "yes") + arrow(340, 48, 440, 92, "no");
  s += box(20, 92, 200, 48, "PERMUTATION|nPr, n!", "#dbeafe", "#1e40af");
  s += box(340, 92, 200, 48, "COMBINATION|nCr", "#dcfce7", "#15803d");
  s += arrow(70, 140, 70, 180, "") + arrow(170, 140, 170, 180, "");
  s += box(4, 180, 134, 54, "identical objects?|n!/(a! b! …)", "#fff", "#94a3b8") + box(146, 180, 134, 54, "conditions?|block, gaps,|complement, circle", "#fff", "#94a3b8");
  s += arrow(390, 140, 360, 180, "") + arrow(490, 140, 500, 180, "");
  s += box(290, 180, 134, 54, "two groups?|multiply", "#fff", "#94a3b8") + box(432, 180, 128, 54, "at least / at most?|cases or complement", "#fff", "#94a3b8");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 244" width="566" height="244" font-family="Arial, sans-serif"><rect width="566" height="244" fill="#fff"/>${s}</svg>`;
}

const ex4 = countPerms("ABCDEFG".split(""), (a) => a[0] !== "A" && a[6] !== "B");

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Chapter 1 Review: Counting",
    overview: S`This review pulls the chapter together. The hardest part of a counting problem is choosing the method, so start with the decision chart, then work through mixed examples and practice. Every problem here can be checked a second way — a smaller case, a list, a different method — and good solutions do exactly that.`,
    goals: [
      "choose between the counting principles, permutations and combinations;",
      "handle identical objects, constraints and circular arrangements;",
      "use cases and the complement for “at least / at most” problems;",
      "use Pascal's triangle for identities and grid routes;",
      "apply the binomial theorem to find terms and coefficients.",
    ],
    curriculum: "A2.1–A2.4 (counting techniques: additive and multiplicative principles, permutations, combinations, Pascal's triangle)",
    prior: [
      ["When do you multiply and when do you add?", "AND (stages) multiply; OR (non-overlapping groups or cases) add."],
      ["How are ₙPᵣ and ₙCᵣ related?", "ₙPᵣ = ₙCᵣ × r!."],
      ["How many routes with 3 east and 2 north moves?", "₅C₂ = 10."],
    ],
    words: [
      ["Permutation", "ordered arrangement", "ₙPᵣ = n!/(n − r)!"],
      ["Combination", "unordered selection", "ₙCᵣ = n!/(r!(n − r)!)"],
      ["Complement", "total − unwanted", "at least 1 = all − none"],
      ["Pascal's rule", "nCr = (n−1)C(r−1) + (n−1)Cr", "row building"],
    ],
  }),

  section("📌 Choosing a method", S`
  ${fig(flowSvg(), "start at the top; a problem can use several boxes")}
  ${table(["Lesson", "Key result"], [["1.1", "multiply for AND (stages), add for OR (no overlap)"], ["1.2", "\\(n!\\), \\({}_nP_r=\\frac{n!}{(n-r)!}\\)"], ["1.3", "\\(\\frac{n!}{a!\\,b!\\,c!\\cdots}\\) for identical objects"], ["1.4", "restriction first; block; gaps; complement; circle \\((n-1)!\\)"], ["1.5", "\\({}_nC_r=\\frac{n!}{r!(n-r)!}\\); two groups multiply"], ["1.6", "cases add; complement; \\(2^n-1\\); inclusion–exclusion"], ["1.7", "Pascal's rule, row sums \\(2^n\\), grid routes \\(\\binom{a+b}a\\)"], ["1.8", "\\(t_{k+1}=\\binom nk a^{n-k}b^k\\)"]])}
  ${keyIdea(S`Check a big count with a small version you can list. If 4 people give \(4!=24\) by your method and by listing, the method is probably right for 10 people too.`)}`),

  section("📌 Watch out", watchOut([
    "Decide “order matters?” before reaching for a formula.",
    "Restrictions first; glue blocks; remember the arrangements inside the block.",
    "“At least one” → complement. Do not fix one item and choose the rest freely (double counting).",
    "Pascal's triangle starts at row 0; the (k + 1)th binomial term uses k.",
  ])),

  examples([
    ["Permutation or combination?", "A class of 25 sends 3 students to a conference (a) as delegates of equal standing, (b) as speaker, note-taker and photographer. Count both.",
      [S`(a) Order does not matter: \(\binom{25}3=${t(C(25, 3))}\).`, S`(b) Different roles: \({}_{25}P_3=${t(P(25, 3))}=${t(C(25, 3))}\times3!\).`],
      `(a) ${n(C(25, 3))}; (b) ${n(P(25, 3))}`],
    ["Identical letters and a restriction", "How many arrangements of the letters of ALBERTA start and end with A?",
      [S`ALBERTA: A 2, L, B, E, R, T. Fix A at both ends.`, S`The middle 5 letters L, B, E, R, T are all different: \(5!=120\).`],
      `${countPerms("ALBERTA".split(""), (a) => a[0] === "A" && a[6] === "A")}`,
      fig(tilesSvg(["A", "_", "_", "_", "_", "_", "A"], { colors: { A: "red" } }))],
    ["Cases with two groups", "A jury of 6 is chosen from 7 women and 8 men. How many juries have at least 4 women?",
      [S`Cases: 4 W 2 M, 5 W 1 M, 6 W 0 M.`, S`\(\binom74\binom82+\binom75\binom81+\binom76\binom80=35(28)+21(8)+7(1)\).`, S`\(980+168+7=1155\).`],
      `${C(7, 4) * C(8, 2) + C(7, 5) * C(8, 1) + C(7, 6)}`],
    ["Two restrictions, inclusion–exclusion", "Seven people A to G line up. In how many lines is A not first and B not last?",
      [S`All: \(7!=5040\). A first: \(6!=720\). B last: \(720\). Both: \(5!=120\).`, S`Bad lines \(=720+720-120=1320\) (inclusion–exclusion).`, S`Good lines \(=5040-1320=3720\).`],
      `${ex4}`,
      fig(vennSvg({ A: "A first", B: "B last", n: { a: 600, ab: 120, b: 600, out: ex4 }, U: "5040 lines" }))],
    ["Routes and the binomial theorem", "How many shortest routes on a 6 × 2 grid? Which binomial coefficient in (a + b)⁸ has the same value?",
      [S`8 moves, choose the 2 north ones: \(\binom82=28\).`, S`It is the coefficient of \(a^6b^2\) (and of \(a^2b^6\)) in \((a+b)^8\).`],
      "28; the coefficient of a⁶b² (or a²b⁶)",
      fig(gridSvg(6, 2, { counts: true }))],
  ]),

  practice([
    q("principle", "A lock has 3 dials with digits 0–9. How many codes have no repeated digit?", num(720), "10 × 9 × 8.", [S`\({}_{10}P_3\).`], "720"),
    q("identical", "How many arrangements of the letters of ONTARIO?", num(multi("ONTARIO")), "O appears twice.", [S`\(\frac{7!}{2!}\).`], "2520"),
    q("combination", "How many 4-person groups can be chosen from 9 people if 2 particular people must both be in the group?", num(C(7, 2)), "The 2 are in; choose 2 more from 7.", [S`\(\binom72\).`], "21"),
    q("complement", "How many 3-letter arrangements of the letters A–H (no repeats) contain at least one vowel (A or E)?", num(P(8, 3) - P(6, 3)), "All − no vowels.", [S`\({}_8P_3-{}_6P_3=336-120\).`], "216"),
    q("binomial", "What is the coefficient of x² in (x + 5)⁴?", num(binTerm(1, 5, 4, 2)), "k = 2.", [S`\(\binom42\cdot25\).`], "150"),
  ]),

  ...hard([
    ["A full problem", "A 5-card hand is dealt from a standard deck. How many hands contain exactly 2 aces and at least 1 king?",
      [S`2 aces: \(\binom42=6\). The other 3 cards come from the 48 non-aces and must include at least 1 king.`, S`From 48 non-aces: \(\binom{48}3=17296\); with no king (44 cards): \(\binom{44}3=13244\). At least one king: \(4052\).`, S`\(6\times4052=24312\).`],
      `${C(4, 2) * (C(48, 3) - C(44, 3))}`],
    ["Seating with conditions", "Four couples sit around a round table so that every couple sits together. How many seatings?",
      [S`Glue each couple: 4 blocks around a circle → \((4-1)!=6\).`, S`Each couple can sit in 2 orders: \(2^4=16\).`, S`\(6\times16=96\).`],
      "96",
      fig(slotsSvg([["blocks around circle", 6, "violet"], ["orders inside", 16, "red"]], { result: 96, bw: 90 }))],
  ], [
    q("hard", "How many 4-digit numbers (1000–9999) have digits in strictly increasing order (like 1357)?", num(C(9, 4)), "Choose 4 different digits from 1–9 (0 cannot be used); there is one increasing order.", [S`\(\binom94\).`], "126"),
    q("hard", "How many arrangements of the letters of SUCCESS have the three S's together?", num(multi([1, 1, 2, 1])), "Block SSS + U, C, C, E.", [S`5 items with C twice: \(\frac{5!}{2!}\).`], "60"),
    q("hard", "In (x + 2y)⁷, find the coefficient of x³y⁴.", num(binTerm(1, 2, 7, 4)), "k = 4: ₇C₄ (2)⁴.", [S`\(35\times16\).`], "560"),
  ]),

  wrapUp({
    qas: [
      ["What is the first question to ask?", "Does order matter? Then: are there identical objects, conditions, groups or “at least” wording?"],
      ["How can I check an answer?", "Try a smaller version you can list, or solve the problem a second way (direct vs complement)."],
      ["When do I use inclusion–exclusion?", "When two restrictions can happen at the same time: subtract each, add back the overlap."],
      ["Where does Pascal's triangle show up?", "In combinations (rows), grid routes (corner sums) and binomial coefficients."],
      ["What does the next chapter need from this one?", "Probability with equally likely outcomes: P = (favourable count)/(total count), both found with these techniques."],
    ],
    summary: [
      "Order matters → permutation; not → combination.",
      "Identical objects: divide by a! b! …",
      "Conditions first; complement for “at least”.",
      "Pascal's triangle and the binomial theorem connect all of it.",
    ],
    next: "Chapter 2 uses these counting methods to calculate probabilities.",
  }),
];
