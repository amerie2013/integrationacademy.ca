// 7.2 Geometric Sequences — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD, rd } from "./fig.mjs";

const S = String.raw;
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);

export const TOPIC = "7.2 Geometric Sequences";
export const Q = [
  num(S`A geometric sequence has \(t_3=50\) and \(t_6=-6250\). Find \(t_1\).`, 2, "r³ = −125 ⇒ r = −5; a = 50/25."),
  num(S`A geometric sequence has \(t_2=24\) and \(t_5=3\). Find \(t_8\).`, 0.375, "r³ = ⅛ ⇒ r = ½; t₈ = 3 · ⅛.", null, 0.0001),
  num("Which term of 3, 6, 12, … is the first to exceed 1 000 000?", 20, "3 · 2ⁿ⁻¹ > 10⁶ ⇒ 2ⁿ⁻¹ > 333 333; 2¹⁹ = 524 288."),
  num(S`\(k\), \(k+4\) and \(k+16\) are consecutive terms of a geometric sequence. Find k.`, 2, "(k + 4)² = k(k + 16) ⇒ 8k + 16 = 16k; the terms are 2, 6, 18."),
  num("A geometric sequence has positive terms; the 3rd term is 4 times the 1st and the 5th term is 80. Find the 1st term.", 5, "r² = 4 ⇒ r = 2; a · 16 = 80."),
  num("Insert three numbers between 7 and 567 to form a geometric sequence with positive terms. What is the middle number of the five?", 63, "r⁴ = 81 ⇒ r = 3: 7, 21, 63, …"),
  num("A sample of 640 mg of a medicine decreases by 25% each hour. After how many full hours is less than 100 mg left?", 7, "640(0.75)ⁿ < 100 ⇒ 0.75ⁿ < 0.156; 0.75⁶ = 0.178, 0.75⁷ = 0.133."),
  num("A town of 12 000 grows by 3% a year. In which year does it first exceed 15 000 (year 1 = 12 000)? ", 9, "12 000(1.03)ⁿ⁻¹ > 15 000 ⇒ 1.03ⁿ⁻¹ > 1.25; 1.03⁸ = 1.267."),
  tf("If every term of a geometric sequence is squared, the result is geometric.", true, "The ratio becomes r²."),
  tf("If 5 is added to every term of a geometric sequence, the result is geometric.", false, "1, 2, 4 → 6, 7, 9."),
  ms(S`For \(t_n=-3(2)^{n-1}\), which are true? Select all.`, ["r = 2", "t₁ = −3", "all terms are negative", "−192 is a term", "the terms alternate in sign"], [0, 1, 2, 3], "−192 = −3 · 64 = t₇; r > 0, so no alternation."),
  mc("The sequences 2, 6, 18, … and 162, 54, 18, … share which term?", "18", ["6", "54", "they share none"], "t₃ of both."),
  num("A paper strip is cut in half, then each piece is cut in half, and so on. After how many rounds of cutting are there 4096 pieces?", 12, "2ⁿ = 4096."),
  num(S`The product of the first three terms of a geometric sequence is 1000 and \(t_1=2\). Find \(r\) (r > 0).`, 5, "t₂³ = 1000 ⇒ t₂ = 10."),
  num("A ball dropped from 25 m bounces to 80% of its height each time. On which bounce is the height first below 5 m?", 8, "20(0.8)ⁿ⁻¹ < 5 ⇒ 0.8ⁿ⁻¹ < 0.25; 0.8⁶ = 0.262, 0.8⁷ = 0.210."),
  num("The graph shows a geometric sequence. Which term is 3125?", 6, "a = 1, r = 5: 5⁵ = 3125.", dotsD(geo(1, 5, 4), { labels: true })),
  num("The graph shows a geometric sequence. Find t₁₀ (4 decimals).", rd(81 * (1 / 3) ** 9, 4), "a = 81, r = ⅓.", dotsD(geo(81, 1 / 3, 5).map((v) => rd(v, 3)), { labels: true }), 0.0001),
  num("The graph shows an alternating geometric sequence. Find t₇.", 1458, "a = 2, r = −3: 2(−3)⁶.", dotsD(geo(2, -3, 5), { labels: true })),
  num("The graph shows the value of an investment at the start of each year. What is the annual growth rate (percent)?", 8, "Ratio 1.08.", dotsD(geo(1000, 1.08, 5).map((v) => rd(v, 2)), { labels: true, xlabel: "year", ylabel: "value" })),
  num(S`The 2nd and 3rd terms of a geometric sequence are \(-6\) and \(-2\). Find the 1st term.`, -18, "r = ⅓; a = −6 ÷ ⅓."),
];
