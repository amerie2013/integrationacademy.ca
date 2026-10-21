// 1.2 Arithmetic and Geometric Sequences — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { seqDoc, planeDoc } from "../figs.mjs";

const S = String.raw;

export const TOPIC = "1.2 Arithmetic and Geometric Sequences";
export const Q = [
  num(S`A geometric sequence has $u_3=20$ and $u_6=-160$ (first terms shown). Find $u_9$.`, 1280, "r³ = −8, r = −2, u₁ = 5; 5(−2)⁸.", seqDoc([5, -10, 20, -40, 80, -160], { color: "red", label: "none" })),
  num(S`An arithmetic sequence has $u_7=3u_2$ and $u_5=22$. Find $d$.`, 4, "u₁ + 6d = 3u₁ + 3d → 3d = 2u₁; u₁ + 4d = 22 → u₁ = 6."),
  num(S`$x+1$, $3x$ and $4x+2$ are consecutive terms of an arithmetic sequence. Find $x$.`, 3, "6x = 5x + 3."),
  num(S`$x-4$, $x$ and $x+12$ are consecutive terms of a geometric sequence. Find $x$.`, 6, "x² = x² + 8x − 48."),
  num(S`Find the position $n$ of the first term of $5, 7.5, 11.25, \dots$ that is greater than 500.`, 13, "1.5ⁿ⁻¹ > 100 → n − 1 > 11.36."),
  num(S`A geometric sequence with $r>0$ has $u_1+u_2=12$ and $u_3+u_4=108$. Find $u_5$.`, 243, "r² = 9, r = 3; u₁ = 3; 3(81)."),
  tf(S`If $u_n=5\cdot3^n$, the common ratio is 5.`, false, "uₙ₊₁/uₙ = 3."),
  num(S`An arithmetic sequence has $u_1=4$ and $d\ne0$. Its 1st, 2nd and 5th terms form a geometric sequence. Find $d$.`, 8, "(4 + d)² = 4(4 + 4d) → d² = 8d."),
  num("The points show a geometric sequence 64, 48, 36, 27, … Find the position of the first term less than 5.", 10, "r = 0.75: 64(0.75)⁸ ≈ 6.4, 64(0.75)⁹ ≈ 4.8.", seqDoc([64, 48, 36, 27], { color: "red", label: "all" })),
  num("Sequence A (blue) is arithmetic and sequence B (violet) is geometric, as shown. Find the first n for which B's term is larger than A's.", 5, "A: 10, 14, 18, 22, 26; B: 2, 4, 8, 16, 32.", seqDoc([10, 14, 18], { color: "blue", label: "all", extra: [2, 4, 8].map((y, i) => ({ x: i + 1, y, color: "violet" })) })),
  mc("Which sequence is both arithmetic and geometric?", "5, 5, 5, 5, …", ["1, 2, 4, 8, …", "2, 4, 6, 8, …", "1, −1, 1, −1, …"], "d = 0 and r = 1."),
  num(S`A geometric sequence has $u_2=6$, $u_4=54$ and $r<0$. Find $u_6$.`, 486, "r = −3, u₁ = −2; −2(−3)⁵."),
  num(S`How many terms of $1000, 980, 960, \dots$ are positive?`, 50, "1000 − 20(n − 1) > 0 → n < 51."),
  num("A geometric sequence with r > 0 has u₁ = 3 and u₃ = 12 (shown). Find u₆.", 96, "r² = 4, r = 2; 3(2⁵).", planeDoc({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 16 }, step: { x: 1, y: 2 }, points: [{ x: 1, y: 3, label: "(1, 3)", color: "violet" }, { x: 3, y: 12, label: "(3, 12)", color: "violet" }], xlabel: "n", ylabel: "uₙ" })),
  ms(S`For $u_n=3n-7$, which statements are true? Select all.`, ["d = 3", "u₁ = −4", "u₁₀ = 23", "the sequence is geometric"], [0, 1, 2], "uₙ is linear in n."),
  num(S`A geometric sequence has $u_1=1$ and $r=1.1$. Find the position of the first term greater than 2.`, 9, "1.1ⁿ⁻¹ > 2 → n − 1 > 7.27."),
  num(S`In an arithmetic sequence $u_3+u_7=40$. Find $u_5$.`, 20, "u₃ + u₇ = 2u₅."),
  tf(S`$u_n=n^2$ is arithmetic because its terms increase.`, false, "The differences 3, 5, 7, … are not constant."),
  num(S`In a geometric sequence $u_5\div u_2=125$. Find $r$.`, 5, "r³ = 125."),
  num(S`An arithmetic sequence has $u_1=-20$ and $d=1.5$. Find the value of its first positive term.`, 1, "n − 1 > 13.3 → n = 15; −20 + 21.", null, 1e-9),
];
