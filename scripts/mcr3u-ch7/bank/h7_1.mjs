// 7.1 Arithmetic Sequences — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD } from "./fig.mjs";

const S = String.raw;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);

export const TOPIC = "7.1 Arithmetic Sequences";
export const Q = [
  num(S`An arithmetic sequence has \(t_7=-4\) and \(t_{19}=44\). Find \(t_{50}\).`, 168, "12d = 48 ⇒ d = 4; t₅₀ = t₁₉ + 31(4)."),
  num(S`An arithmetic sequence has \(t_4=31\) and \(t_{13}=-5\). Find the first negative term.`, -1, "d = −4, a = 43: 47 − 4n < 0 ⇒ n = 12."),
  num(S`\(k+2\), \(2k+1\) and \(4k-4\) are consecutive terms of an arithmetic sequence. Find k.`, 4, "2(2k + 1) = (k + 2) + (4k − 4) ⇒ 4k + 2 = 5k − 2."),
  num("How many multiples of 6 lie between 100 and 1000?", 150, "102, 108, …, 996: (996 − 102)/6 + 1."),
  num("How many three-digit numbers leave remainder 2 when divided by 9?", 100, "101, 110, …, 992: (992 − 101)/9 + 1."),
  num("The 5th term of an arithmetic sequence is 3 times the 1st term, and the 10th term is 55. Find the first term.", 10, "a + 4d = 3a ⇒ d = a/2; a + 9(a/2) = 5.5a = 55."),
  num("A tower of cubes is 12 cm tall with 1 cube and each extra cube adds 4.5 cm. How many cubes make the tower first exceed 2 m?", 43, "12 + 4.5(n − 1) > 200 ⇒ n > 42.8."),
  num(S`The general term of an arithmetic sequence is \(t_n=an+b\). If \(t_2=1\) and \(t_7=26\), find \(b\).`, -9, "5a = 25 ⇒ a = 5; 10 + b = 1."),
  tf("If every term of an arithmetic sequence is doubled, the result is still arithmetic.", true, "The difference doubles too."),
  tf("If every term of an arithmetic sequence is squared, the result is still arithmetic.", false, "1, 2, 3 → 1, 4, 9."),
  ms("A sequence has tₙ = 8 − 3n. Which are true? Select all.", ["d = −3", "t₁ = 5", "−22 is a term", "the 4th term is −4", "the graph rises"], [0, 1, 2, 3], "−22: n = 10. It falls."),
  mc("Two arithmetic sequences 5, 12, 19, … and 2, 11, 20, … share a first common term. What is it?", "47", ["33", "29", "56"], "List both: 5, 12, 19, 26, 33, 40, 47 and 2, 11, 20, 29, 38, 47."),
  num("Insert four numbers between 9 and 44 so that the six numbers form an arithmetic sequence. What is the third number in the sequence?", 23, "5d = 35 ⇒ d = 7: 9, 16, 23, …"),
  num("A taxi charges a flag fare plus a fixed amount per km. A 6 km trip costs 15.40 dollars and a 14 km trip costs 30.60 dollars. What is the flag fare (dollars)?", 4, "Per km 15.20/8 = 1.90; 15.40 − 6(1.90).", null, 0.001),
  num(S`For which n is \(t_n=3n-7\) first greater than \(t_n=200-2n\)?`, 42, "5n > 207 ⇒ n > 41.4."),
  num(S`\(t_1=a\), \(t_n=t_{n-1}+d\), \(t_6=0\) and \(t_{11}=-30\). Find \(a\).`, 30, "5d = −30 ⇒ d = −6; a + 5d = 0."),
  num("Find t₁₀₀ of the sequence graphed.", 304, "a = 7, d = 3: 7 + 99(3).", dotsD(arr(7, 3, 6), { labels: true })),
  num("The graphed sequence continues. Which term is −95?", 31, "tₙ = 29 − 4n = −95.", dotsD(arr(25, -4, 6), { labels: true })),
  num("The graph shows t₁ to t₆ of an arithmetic sequence. For which n is tₙ = 100?", 17, "a = 4, d = 6: 6n − 2 = 100.", dotsD(arr(4, 6, 6), { labels: true })),
  num("Read the graph: what is the sum of t₄ and t₅?", 17.5, "9.5 + 8.", dotsD(arr(14, -1.5, 6), { labels: true }), 0.001),
];
