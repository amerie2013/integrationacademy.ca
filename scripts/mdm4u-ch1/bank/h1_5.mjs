// 1.5 Combinations — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { poolSvg, barsSvg, slotsSvg } from "../../mdm4u/figs.mjs";
import { P, C } from "../../mdm4u/count.mjs";

const solve = (f, target, lo = 1, hi = 80) => { for (let n = lo; n <= hi; n++) if (f(n) === target) return n; return NaN; };

export const TOPIC = "1.5 Combinations";
export const Q = [
  num("Solve $\\binom{n}{3}=4\\binom{n}{2}$.", solve((n) => C(n, 3) - 4 * C(n, 2), 0, 3), "(n − 2)/3 = 4 ⇒ n = 14."),
  num("Solve $\\binom{n+1}{2}=55$.", solve((n) => C(n + 1, 2), 55), "(n + 1)n = 110."),
  num("How many 5-card hands contain exactly one pair (two cards of one rank and three cards of three other different ranks)?", 13 * C(4, 2) * C(12, 3) * 4 ** 3, "Rank of the pair 13, its suits ₄C₂; three other ranks ₁₂C₃, each with 4 suits."),
  num("How many 5-card hands contain cards of exactly two suits?", (() => { // count by suit-pattern: choose 2 suits, distribute 5 cards with each suit at least 1
    let total = 0; for (let k = 1; k <= 4; k++) total += C(13, k) * C(13, 5 - k); return C(4, 2) * total; })(), "Choose the 2 suits (₄C₂), then split 5 cards 1–4, 2–3, 3–2, 4–1 between them."),
  num("A polygon has 44 diagonals. How many sides does it have?", solve((n) => C(n, 2) - n, 44, 4), "n(n − 3)/2 = 44."),
  num("Twelve points are in a plane; 5 of them lie on one line and no other three are collinear. How many triangles do the points form?", C(12, 3) - C(5, 3), "All triples minus the collinear triples from the 5."),
  num("Twelve points are in a plane; 5 of them lie on one line and no other three are collinear. How many different lines do the points determine?", C(12, 2) - C(5, 2) + 1, "All pairs minus the pairs on the line, plus that one line."),
  num("A committee of 4 is chosen from 6 couples so that no couple is on the committee together. How many committees?", C(6, 4) * 2 ** 4, "Choose 4 couples, then one person from each."),
  num("In how many ways can 12 students be split into 3 unlabelled groups of 4?", C(12, 4) * C(8, 4) / 6, "₁₂C₄ × ₈C₄ × ₄C₄ ÷ 3! because the groups are unlabelled."),
  num("In how many ways can 10 players be split into two teams of 5 for a pickup game (teams unlabelled)?", C(10, 5) / 2, "₁₀C₅ ÷ 2."),
  num("Show that $P(n,r)=\\binom{n}{r}\\,r!$ for $n=9$, $r=3$: what is $\\binom 93\\times3!$?", P(9, 3), "84 × 6."),
  num("How many rectangles (of any size) are in a 4 by 3 grid of unit squares?", C(5, 2) * C(4, 2), "Choose 2 of the 5 vertical lines and 2 of the 4 horizontal lines."),
  num("The bars show $\\binom{n}{r}$ for one row. Which $n$ is it? (Read the second bar.)", 9, "ₙC₁ = n.", barsSvg([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((r) => C(9, r)), { labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], top: true, xlabel: "r", ylabel: "nCr" })),
  num("The pool shows 4 seniors, 5 juniors and 6 sophomores. How many 6-person teams have exactly 2 from each grade?", C(4, 2) * C(5, 2) * C(6, 2), "₄C₂ × ₅C₂ × ₆C₂.", poolSvg([[4, "red", "seniors"], [5, "blue", "juniors"], [6, "green", "sophomores"]], { per: 15 })),
  num("The slot diagram shows choosing 3 officers in order from 10 people. How many unordered groups of 3 does it correspond to?", C(10, 3), "720 ÷ 3!.", slotsSvg([["1st", 10], ["2nd", 9], ["3rd", 8]], { result: 720 })),
  num("The pool shows 10 men and 8 women. A mixed-doubles match needs 2 men and 2 women split into two man–woman teams. How many matches are possible?", C(10, 2) * C(8, 2) * 2, "Choose the men and women, then pair them: 2 ways.", poolSvg([[10, "blue", "men"], [8, "red", "women"]], { per: 9 })),
  ms("Which are true? Select all.", ["$\\binom{2n}{2}=2\\binom n2+n^2$", "$\\binom{n}{r}=\\binom{n}{r+1}$ for every $r$", "$\\binom{n}{1}\\binom{n-1}{r-1}=r\\binom nr$", "$\\binom{10}{3}+\\binom{10}{7}=240$", "$\\binom{n}{2}$ is always even"], [0, 2, 3], "Check with numbers: e.g. n = 4."),
  mc("A lottery draws 6 numbers from 49. How many tickets match exactly 5 of the 6 winning numbers?", String(C(6, 5) * C(43, 1)), [String(C(6, 5)), String(C(49, 5)), String(C(6, 5) * C(49, 1))], "5 of the 6 winning numbers and 1 of the 43 others."),
  tf("The number of ways to choose 5 of 12 is the same as the number of ways to divide 12 people into a group of 5 and a group of 7.", true, "Choosing the 5 decides the 7."),
  tf("$\\binom{n}{r}$ is largest when $r$ is as close as possible to $\\frac n2$.", true, "The row rises to the middle and falls."),
];
