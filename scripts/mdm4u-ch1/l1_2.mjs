// MDM4U 1.2 — Factorials & Permutations of Distinct Objects: n!, simplifying factorial expressions, nPr = n!/(n−r)!,
// 0! = 1, permutations as slot diagrams, solving nPr equations
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, slotsSvg, hbarsSvg, tilesSvg } from "./lib.mjs";
import { fact, P, t, n } from "../mdm4u/count.mjs";

export const TITLE = "1.2 Factorials & Permutations of Distinct Objects";
export const ID = "deda48c3-be30-4068-986f-68b044182bb3";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Factorials & Permutations of Distinct Objects",
    overview: S`A <strong>permutation</strong> is an arrangement of objects in which <em>order matters</em>: ABC and CBA are different permutations. Arranging \(n\) different objects in a row uses the multiplicative principle with one fewer choice at each step, which gives \(n!=n(n-1)(n-2)\cdots(2)(1)\), read “\(n\) factorial”. Arranging only \(r\) of the \(n\) objects gives \({}_nP_r=\dfrac{n!}{(n-r)!}\), also written \(P(n,r)\).`,
    goals: [
      "evaluate and simplify factorial expressions;",
      "count arrangements of n distinct objects with n!;",
      "count arrangements of r objects chosen from n with nPr = n!/(n − r)!;",
      "explain why 0! = 1;",
      "solve simple equations involving nPr.",
    ],
    curriculum: "A2.2 (solve problems using techniques for counting permutations where all objects are distinct; express solutions with n! and P(n, r)); A2.1 (recognize permutations as a counting technique)",
    prior: [
      ["How many ways can 3 people stand in a line? Use the multiplicative principle.", "3 × 2 × 1 = 6."],
      ["Calculate 7 × 6 × 5.", "210."],
      ["Simplify 12/3.", "4."],
    ],
    words: [
      ["Permutation", "an ordered arrangement of objects", "the race results 1st, 2nd, 3rd"],
      ["n factorial, n!", "n(n − 1)(n − 2)⋯(2)(1)", "5! = 120"],
      ["nPr or P(n, r)", "arrangements of r objects chosen from n distinct objects", "₈P₃ = 336"],
      ["Distinct", "all different from each other", "the letters of WORD"],
    ],
  }),

  section("📌 Factorials", S`
  <p>Arrange 5 different books on a shelf. The first spot has 5 choices, the second 4, then 3, 2 and 1:</p>
  ${fig(slotsSvg([["1st", 5], ["2nd", 4], ["3rd", 3], ["4th", 2], ["5th", 1]], { result: 120 }), "\\(5!=5\\times4\\times3\\times2\\times1=120\\)")}
  <p>Factorials grow extremely fast — the bars below are on a logarithmic scale:</p>
  ${fig(hbarsSvg(Array.from({ length: 10 }, (_, i) => [`${i + 1}!`, fact(i + 1)]), { log: true, hl: [9] }), "10! = 3,628,800")}
  <p>To simplify a quotient of factorials, expand the larger one only until the smaller one appears: \(\dfrac{9!}{6!}=\dfrac{9\times8\times7\times6!}{6!}=9\times8\times7=504\).</p>
  ${keyIdea(S`\(n!=n\times(n-1)!\). By definition \(0!=1\), which keeps this rule true for \(n=1\): \(1!=1\times0!\).`)}`),

  section("📌 Permutations of r objects from n", S`
  <p>Gold, silver and bronze are awarded among 8 finalists. Only 3 positions are filled:</p>
  ${fig(slotsSvg([["gold", 8, "amber"], ["silver", 7, "gray"], ["bronze", 6, "red"]], { result: 336 }), "\\({}_8P_3=8\\times7\\times6=336\\)")}
  <p>In factorial form: \(8\times7\times6=\dfrac{8\times7\times6\times5!}{5!}=\dfrac{8!}{5!}\). In general</p>
  \[{}_nP_r=P(n,r)=\frac{n!}{(n-r)!}=\underbrace{n(n-1)(n-2)\cdots(n-r+1)}_{r\text{ factors}}.\]
  ${table(["Case", "Formula", "Example"], [["all n objects", "\\({}_nP_n=n!\\)", "\\({}_4P_4=24\\)"], ["r of the n objects", "\\({}_nP_r=\\frac{n!}{(n-r)!}\\)", "\\({}_6P_2=30\\)"], ["no objects", "\\({}_nP_0=1\\)", "\\({}_5P_0=\\frac{5!}{5!}=1\\)"]])}
  ${keyIdea(S`Use permutations when the objects are all different, each is used at most once, and the order (position, rank, job) matters.`)}`),

  section("📌 Explore", S`<p>Change \(n\) and \(r\). The slots show the falling choices; the readout gives the factorial form. Set \(r=n\) to see \(n!\).</p>`),

  widget("permLab", { init: [8, 3] }),

  section("📌 Watch out", watchOut([
    "\\(\\frac{8!}{4!}\\) is not \\(2!\\): factorials do not divide like ordinary numbers. Expand: \\(8\\times7\\times6\\times5=1680\\).",
    "\\((2n)!\\neq2\\,n!\\) and \\((n+1)!\\neq n!+1\\).",
    "\\(0!=1\\), not 0.",
    "Permutations need order to matter. Choosing 3 people for a team (no roles) is not a permutation — that is a combination (1.5).",
  ])),

  examples([
    ["Simplifying factorials", "Evaluate \\(\\dfrac{10!}{7!\\,3!}\\).",
      [S`\(\frac{10!}{7!}=10\times9\times8=720\).`, S`\(\frac{720}{3!}=\frac{720}{6}=120\).`],
      "120"],
    ["Arranging everyone", "In how many orders can 7 different songs be played?",
      [S`7 choices for the first, 6 for the second, …: \(7!\).`, S`\(7!=${t(fact(7))}\).`],
      `${n(fact(7))} orders`],
    ["Permutations of r from n", "A club of 15 members elects a president, vice-president, secretary and treasurer. In how many ways?",
      [S`Four different jobs, so order matters: \({}_{15}P_4\).`, S`\(15\times14\times13\times12=${t(P(15, 4))}\).`],
      `${n(P(15, 4))} ways`,
      fig(slotsSvg([["pres.", 15], ["V-P", 14], ["sec.", 13], ["treas.", 12]], { result: n(P(15, 4)) }))],
    ["Algebra with factorials", "Simplify \\(\\dfrac{(n+3)!}{(n+1)!}\\).",
      [S`\((n+3)!=(n+3)(n+2)\,(n+1)!\).`, S`Divide by \((n+1)!\).`],
      "(n + 3)(n + 2) = n² + 5n + 6"],
    ["Solving for n", "Solve \\({}_nP_2=56\\).",
      [S`\({}_nP_2=n(n-1)\).`, S`\(n(n-1)=56\Rightarrow n^2-n-56=0\Rightarrow (n-8)(n+7)=0\).`, S`\(n\) must be a positive integer, so \(n=8\).`],
      "n = 8"],
  ]),

  practice([
    q("factorial", "Evaluate 6!.", num(720), "6 × 5 × 4 × 3 × 2 × 1.", [S`\(6!=720\).`], "720"),
    q("quotient", "Evaluate 11!/9!.", num(110), "Cancel 9!.", [S`\(11\times10\).`], "110"),
    q("nPr", "Evaluate ₉P₃.", num(504), "Three falling factors.", [S`\(9\times8\times7\).`], "504"),
    q("arrange", "How many ways can 4 runners finish 1st to 4th in a race of 10 (no ties)?", num(P(10, 4)), "Order matters: ₁₀P₄.", [S`\(10\times9\times8\times7\).`], "5040"),
    q("zero", "What is the value of 0!?", num(1), "By definition.", [S`\(0!=1\) keeps \(n!=n(n-1)!\) true for \(n=1\).`], "1"),
  ]),

  ...hard([
    ["A factorial equation", "Solve \\(\\dfrac{(n+1)!}{(n-1)!}=72\\).",
      [S`\((n+1)!=(n+1)\,n\,(n-1)!\), so the left side is \((n+1)n\).`, S`\(n^2+n-72=0\Rightarrow (n+9)(n-8)=0\).`, S`\(n=8\) (reject \(-9\)).`],
      "n = 8"],
    ["Different shelves", "6 different math books and 4 different novels are put on a shelf with all the math books first, then all the novels. How many arrangements? How many if the two groups may be in either order?",
      [S`Math books: \(6!=720\) orders; novels: \(4!=24\) orders.`, S`Math first: \(720\times24=${t(720 * 24)}\).`, S`Either group first: 2 orders of the groups, so \(2\times${t(720 * 24)}=${t(2 * 720 * 24)}\).`],
      `${n(720 * 24)}; ${n(2 * 720 * 24)}`,
      fig(tilesSvg(["M", "M", "M", "M", "M", "M", "N", "N", "N", "N"], { colors: { M: "blue", N: "amber" }, groups: [[0, 5], [6, 9]], tw: 34 }), "block of 6 math books, block of 4 novels")],
  ], [
    q("hard", "Solve ₙP₃ = 56n for n (n ≥ 3).", num(9), "Divide both sides by n.", [S`\(n(n-1)(n-2)=56n\Rightarrow (n-1)(n-2)=56\).`, S`\(n^2-3n-54=0\Rightarrow(n-9)(n+6)=0\), so \(n=9\).`], "9"),
    q("hard", "How many 5-letter arrangements of the letters A, B, C, D, E, F, G (no repeats) begin with a vowel?", num(2 * P(6, 4)),
      "Fill the first slot first: A or E.", [S`2 choices for the first letter, then \({}_6P_4=360\) for the rest.`, S`\(2\times360\).`], "720"),
    q("hard", "Simplify n!/(n − 2)! and use it to find n when it equals 110.", num(11),
      "n!/(n − 2)! = n(n − 1).", [S`\(n(n-1)=110\Rightarrow n^2-n-110=0\Rightarrow(n-11)(n+10)=0\).`], "11"),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between n! and ₙPᵣ?", "n! arranges all n objects; ₙPᵣ arranges only r of them, so it stops after r factors."],
      ["Why is 0! = 1?", "So that n! = n(n − 1)! holds for n = 1 and ₙPₙ = n!/0! = n!. There is exactly one way to arrange nothing."],
      ["How do I simplify 12!/9!?", "Write 12! = 12 × 11 × 10 × 9! and cancel: 1320."],
      ["How do I recognize a permutation problem?", "Different objects, no repeats, and order or position matters (ranks, jobs, seats, codes)."],
      ["Why are factorials useful?", "They give compact formulas; calculators and spreadsheets evaluate them instantly (n! key, FACT, PERMUT)."],
    ],
    summary: [
      "n! = n(n − 1)(n − 2)⋯(1); 0! = 1.",
      "ₙPᵣ = n!/(n − r)! = n(n − 1)⋯(n − r + 1).",
      "Order matters, no repetition, distinct objects.",
      "Simplify factorial quotients by cancelling the smaller factorial.",
    ],
    next: "1.3 counts arrangements when some objects are identical.",
  }),
];
