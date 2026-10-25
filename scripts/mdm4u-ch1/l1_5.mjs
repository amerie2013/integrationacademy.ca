// MDM4U 1.5 — Combinations: selections where order does not matter, nCr = nPr / r! = n!/(r!(n−r)!), the symmetry
// nCr = nC(n−r), handshakes and diagonals, and combining selections with the multiplicative principle
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, slotsSvg, poolSvg, seatsSvg, barsSvg } from "./lib.mjs";
import { P, C, t, n } from "../mdm4u/count.mjs";

export const TITLE = "1.5 Combinations";
export const ID = "758c9525-2fb7-4035-9de0-59ff3e80970c";
const S = String.raw;

/** handshakes among k people drawn as a polygon with all chords */
function handshakeSvg(k) {
  const R = 80, cx = 120, cy = 104, pts = Array.from({ length: k }, (_, i) => [cx + R * Math.cos(-Math.PI / 2 + (2 * Math.PI * i) / k), cy + R * Math.sin(-Math.PI / 2 + (2 * Math.PI * i) / k)]);
  let s = "";
  for (let i = 0; i < k; i++) for (let j = i + 1; j < k; j++) s += `<line x1="${pts[i][0]}" y1="${pts[i][1]}" x2="${pts[j][0]}" y2="${pts[j][1]}" stroke="#6d28d9" stroke-width="1.6" opacity="0.75"/>`;
  pts.forEach(([x, y], i) => { s += `<circle cx="${x}" cy="${y}" r="13" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/><text x="${x}" y="${y + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="#1e40af">${"ABCDEFGH"[i]}</text>`; });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 210" width="240" height="210" font-family="Arial, sans-serif"><rect width="240" height="210" fill="#fff"/>${s}</svg>`;
}

export const blocks = () => [
  intro({
    icon: "🤝",
    title: "Combinations",
    overview: S`A <strong>combination</strong> is a selection in which <em>order does not matter</em>: choosing Ana, Bo and Cy for a team is the same as choosing Cy, Ana and Bo. Every selection of \(r\) objects can be ordered in \(r!\) ways, so the permutation count \({}_nP_r\) counts each selection \(r!\) times. Dividing gives the number of combinations: \[{}_nC_r=\binom nr=C(n,r)=\frac{{}_nP_r}{r!}=\frac{n!}{r!\,(n-r)!}.\]`,
    goals: [
      "decide whether a situation is a permutation (order matters) or a combination (order does not);",
      "calculate nCr with factorials and with technology;",
      "explain the connection nCr = nPr / r!;",
      "use the symmetry nCr = nC(n−r);",
      "combine selections from different groups with the multiplicative principle.",
    ],
    curriculum: "A2.1 (distinguish permutations from combinations by considering whether order matters; connect and calculate them); A2.2 (express solutions using n!, P(n, r) and C(n, r)); A2.3 (multiplicative principle with selections)",
    prior: [
      ["Evaluate ₆P₂.", "30."],
      ["In how many orders can 3 people be listed?", "3! = 6."],
      ["Evaluate 10!/(3! 7!).", "120."],
    ],
    words: [
      ["Combination", "a selection where order does not matter", "a 3-person committee"],
      ["nCr, C(n, r), (n r)", "the number of ways to choose r objects from n distinct objects", "₅C₂ = 10"],
      ["“n choose r”", "how the binomial coefficient is read", "(10 choose 4) = 210"],
      ["Symmetry", "choosing r to take = choosing n − r to leave", "₁₀C₃ = ₁₀C₇"],
    ],
  }),

  section("📌 Permutation or combination?", S`
  <p>A club of 10 members chooses 4 people. Two versions:</p>
  ${table(["Version", "Order matters?", "Count"], [["president, vice, secretary, treasurer", "yes — the jobs are different", `\\({}_{10}P_4=${t(P(10, 4))}\\)`], ["a steering committee of 4 equals", "no — just a group", `\\({}_{10}C_4=\\frac{${t(P(10, 4))}}{4!}=${C(10, 4)}\\)`]])}
  ${fig(slotsSvg([["pres.", 10], ["vice", 9], ["sec.", 8], ["treas.", 7]], { result: n(P(10, 4)) }), "the executive (ordered) — then divide by the 4! ways to hand out the jobs to the same 4 people")}
  ${keyIdea(S`Ask: “If I swap two of the chosen objects, do I get a different result?” Yes → permutation. No → combination.`)}`),

  section("📌 Counting combinations", S`
  <p>Handshakes: when 6 people each shake hands once with everyone else, each handshake is a <em>pair</em> of people (order does not matter):</p>
  ${fig(handshakeSvg(6), "\\({}_6C_2=15\\) handshakes = 15 segments joining 6 points")}
  <p>Choosing \(r\) to take is the same as choosing \(n-r\) to leave behind, so \(\binom nr=\binom n{n-r}\). The values rise to a maximum in the middle and fall again:</p>
  ${fig(barsSvg(Array.from({ length: 11 }, (_, r) => C(10, r)), { labels: Array.from({ length: 11 }, (_, r) => r), top: true, xlabel: "r", ylabel: "₁₀Cᵣ" }), "\\(\\binom{10}{r}\\) for \\(r=0\\) to \\(10\\): symmetric, largest at \\(r=5\\)")}
  ${table(["Useful values", ""], [["\\(\\binom n0=\\binom nn=1\\)", "one way to take nothing / everything"], ["\\(\\binom n1=\\binom n{n-1}=n\\)", "choose one to take / one to leave"], ["\\(\\binom n2=\\frac{n(n-1)}{2}\\)", "pairs (handshakes, games in a round robin)"]])}
  ${keyIdea(S`Technology: nCr on a calculator, =COMBIN(n, r) in a spreadsheet. Show the setup \(\binom nr\) in your solution, not only the number.`)}`),

  section("📌 Explore", S`<p>Compare \({}_nP_r\) and \({}_nC_r\) for the same \(n\) and \(r\). For small \(n\) the explorer lists every selection; each one stands for \(r!\) different orders.</p>`),

  widget("combLab", { init: [5, 3] }),

  section("📌 Watch out", watchOut([
    "Combinations divide by r! — they are always ≤ permutations of the same size.",
    "Jobs, ranks, positions, codes, arrangements → order matters. Teams, committees, hands of cards, samples → order does not matter.",
    "Selecting from two groups (e.g. 2 boys AND 3 girls) means multiply the two combinations.",
    "\\(\\binom{n}{r}\\) is not a fraction \\(\\frac nr\\): no fraction bar between n and r.",
  ])),

  examples([
    ["Committee", "How many 5-person committees can be chosen from 12 people?",
      [S`Order does not matter: \(\binom{12}5\).`, S`\(\frac{12\times11\times10\times9\times8}{5!}=\frac{95040}{120}=792\).`],
      "792"],
    ["From the permutation count", "There are 2730 ways to award gold, silver and bronze among 15 skaters. How many ways are there to choose 3 skaters for the podium (no medals assigned)?",
      [S`\({}_{15}P_3=2730\) counts each group of 3 in \(3!=6\) orders.`, S`\(\frac{2730}{6}=455=\binom{15}3\).`],
      "455"],
    ["Diagonals", "How many diagonals does a decagon (10 sides) have?",
      [S`Any 2 of the 10 vertices form a segment: \(\binom{10}2=45\).`, S`10 of those segments are sides, not diagonals: \(45-10=35\).`],
      "35 diagonals"],
    ["Two groups", "A team of 2 teachers and 3 students is chosen from 6 teachers and 9 students. How many teams?",
      [S`Teachers: \(\binom62=15\). Students: \(\binom93=84\).`, S`Both together (AND): \(15\times84=1260\).`],
      "1260",
      fig(poolSvg([[6, "amber", "teachers"], [9, "blue", "students"]], { per: 8 }))],
    ["Cards", "How many 5-card hands from a standard deck of 52 contain exactly 3 hearts?",
      [S`3 of the 13 hearts: \(\binom{13}3=286\).`, S`2 of the 39 non-hearts: \(\binom{39}2=741\).`, S`\(286\times741=${t(286 * 741)}\).`],
      `${n(286 * 741)} hands`],
  ]),

  practice([
    q("nCr", "Evaluate ₈C₃.", num(56), "8 × 7 × 6 / 3!.", [S`\(\frac{336}{6}\).`], "56"),
    q("choose", "How many ways can a coach choose 4 players from a squad of 11 to go to a clinic?", num(C(11, 4)), "Order does not matter.", [S`\(\binom{11}4\).`], "330"),
    q("type", "Choosing a captain and an assistant captain from 20 players is a …", choice(["permutation: 380", "combination: 190", "combination: 380", "permutation: 190"], 0), "Different roles.", [S`\({}_{20}P_2=380\).`], "permutation: 380"),
    q("handshakes", "Nine people each shake hands once with everyone else. How many handshakes?", num(36), "Pairs.", [S`\(\binom92\).`], "36"),
    q("two groups", "Choose 2 of 5 novels AND 3 of 6 magazines to take on a trip. How many choices?", num(C(5, 2) * C(6, 3)), "Multiply the two selections.", [S`\(10\times20\).`], "200"),
  ]),

  ...hard([
    ["Solving for n", "A round-robin tournament has 66 games: every team plays every other team once. How many teams are there?",
      [S`\(\binom n2=66\Rightarrow \frac{n(n-1)}2=66\Rightarrow n^2-n-132=0\).`, S`\((n-12)(n+11)=0\Rightarrow n=12\).`],
      "12 teams",
      fig(handshakeSvg(8), "with 8 teams there would be 28 games (segments)")],
    ["Triangles from points", "Ten points lie on a circle. How many triangles have their vertices among these points? How many quadrilaterals?",
      [S`No 3 points on a circle are collinear, so any 3 points make a triangle: \(\binom{10}3=120\).`, S`Any 4 points make a quadrilateral: \(\binom{10}4=210\).`],
      "120 triangles, 210 quadrilaterals"],
  ], [
    q("hard", "Solve ₙC₂ = 45.", num(10), "n(n − 1)/2 = 45.", [S`\(n^2-n-90=0\Rightarrow(n-10)(n+9)=0\).`], "10"),
    q("hard", "How many 5-card hands contain all four aces?", num(48), "4 aces AND 1 other card.", [S`\(\binom44\binom{48}1\).`], "48"),
    q("hard", "There are 8 points in a plane, no three collinear. How many lines and how many triangles do they determine? Enter lines + triangles.", num(C(8, 2) + C(8, 3)), "Lines: pairs; triangles: triples.", [S`\(\binom82=28\), \(\binom83=56\).`], "84"),
  ]),

  wrapUp({
    qas: [
      ["How are nPr and nCr related?", "nPr = nCr × r!: first choose the r objects, then arrange them in r! orders."],
      ["Why is ₁₀C₃ = ₁₀C₇?", "Every choice of 3 to take leaves exactly 7 behind; the two lists match one to one."],
      ["How do I recognize a combination problem?", "The result is a group, a set or a hand; swapping two chosen objects does not change it."],
      ["What do I do with two groups?", "Choose from each group separately, then multiply (AND)."],
      ["Is ₙC₀ = 1 sensible?", "Yes: there is exactly one way to choose nothing."],
    ],
    summary: [
      "Combination: order does not matter.",
      "nCr = nPr / r! = n! / (r!(n − r)!).",
      "nCr = nC(n − r); nC0 = nCn = 1; nC2 = n(n − 1)/2.",
      "Selections from different groups: multiply.",
    ],
    next: "1.6 adds conditions to selections: “at least”, “at most”, cases and the complement.",
  }),
];
