// 1.2 Factorials & Permutations of Distinct Objects — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { slotsSvg, hbarsSvg, tilesSvg } from "../../mdm4u/figs.mjs";
import { fact, P, countPerms } from "../../mdm4u/count.mjs";

const solve = (f, target, lo = 1, hi = 60) => { for (let n = lo; n <= hi; n++) if (f(n) === target) return n; return NaN; };
const trailingZeros = (n) => { let z = 0; for (let p = 5; p <= n; p *= 5) z += Math.floor(n / p); return z; };

export const TOPIC = "1.2 Factorials & Permutations of Distinct Objects";
export const Q = [
  num("Solve $P(n,3)=336$.", solve((n) => P(n, 3), 336, 3), "n(n − 1)(n − 2) = 336 = 8 × 7 × 6."),
  num("Solve $P(2n,2)=132$ for the positive integer $n$.", solve((n) => P(2 * n, 2), 132), "2n(2n − 1) = 132 = 12 × 11, so 2n = 12."),
  num("Solve $\\dfrac{(n+1)!}{(n-1)!}=110$.", solve((n) => (n + 1) * n, 110), "(n + 1)n = 110."),
  num("How many zeros are at the end of $25!$?", trailingZeros(25), "Count factors of 5: 5, 10, 15, 20 and two in 25."),
  num("What is the largest $n$ for which $n!$ is less than one million?", (() => { let n = 1; while (fact(n + 1) < 1e6) n++; return n; })(), "9! = 362 880; 10! = 3 628 800."),
  num("Evaluate $\\dfrac{1}{8!}+\\dfrac{1}{9!}$ written as $\\dfrac{k}{9!}$. What is $k$?", 10, "1/8! = 9/9!."),
  num("In how many ways can 5 different books be arranged on a shelf using all of them or only 4 of them?", fact(5) + P(5, 4), "Add the two cases: 120 + 120."),
  num("How many arrangements of the letters of FRIDAY have F before A? (F need not be directly before A.)", fact(6) / 2, "Half of 6! by symmetry."),
  num("How many arrangements of the letters of TRIANGLE start with a vowel and end with a consonant?", countPerms("TRIANGLE".split(""), (a) => "AEI".includes(a[0]) && !"AEI".includes(a[7])), "3 vowels for the first slot, 5 consonants for the last, then 6!."),
  num("Show that $P(n,r)=n\\cdot P(n-1,r-1)$ by evaluating both sides for $n=9$, $r=4$. What is the common value?", P(9, 4), "9 × P(8, 3) = 9 × 336."),
  num("Find the value of $r$ for which $P(10,r)=5040$.", solve((r) => P(10, r), 5040, 0, 10), "10 × 9 × 8 × 7 = 5040."),
  num("How many 4-digit numbers with distinct digits can be made from 0, 1, 2, 3, 4, 5?", (() => { let c = 0; for (let x = 1000; x <= 5432; x++) { const s = String(x); if (new Set(s).size === 4 && [...s].every((d) => "012345".includes(d))) c++; } return c; })(), "First digit 1–5 (5 ways), then ₅P₃ = 60: 300."),
  num("Read the chart: by what factor does each factorial grow from 9! to 10!?", 10, "10! = 10 × 9!.", hbarsSvg([7, 8, 9, 10].map((k) => [`${k}!`, fact(k)]))),
  num("The slot diagram counts arrangements of 7 people in 7 seats with Ana in seat 1. What number belongs in the last slot?", 1, "Only one person is left for the last seat.", slotsSvg([["seat 1", 1, "red"], ["seat 2", 6], ["…", "…"], ["seat 7", "?"]])),
  num("The tiles show 8 different letters. How many 5-letter arrangements contain the letter X?", P(8, 5) - P(7, 5), "All ₈P₅ minus those without X: ₇P₅.", tilesSvg(["Q", "R", "S", "T", "U", "V", "W", "X"], { colors: { X: "red" } })),
  num("The tiles show 4 red and 3 blue cards, all different. In how many ways can all 7 be laid in a row with colours alternating?", fact(4) * fact(3), "Pattern R B R B R B R: 4! × 3!.", tilesSvg(["R", "B", "R", "B", "R", "B", "R"], { colors: { R: "red", B: "blue" } })),
  ms("Which statements are true? Select all.", ["$(n+1)!-n!=n\\cdot n!$", "$\\dfrac{(2n)!}{n!}=2^n$ for all n", "$P(n,n-1)=P(n,n)$", "$P(n,0)=1$", "$(n!)^2=(n^2)!$"], [0, 2, 3], "Check each with n = 3."),
  mc("Which is largest?", "$P(10,6)$", ["$P(12,4)$", "$8!$ divided by 2", "$P(20,3)$"], "151 200 vs 11 880 vs 20 160 vs 6840."),
  tf("$P(n,r)$ is always a multiple of $r!$.", true, "P(n, r) = C(n, r) × r!."),
  tf("If $n!$ ends in exactly 2 zeros, then $n$ is between 10 and 14.", true, "10! to 14! have two factors of 5."),
];
