// 1.2 Arithmetic and Geometric Sequences — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { seqDoc } from "../figs.mjs";

const S = String.raw;

export const E = [
  num(S`An arithmetic sequence has $u_1=3$ and $d=5$. Find $u_{10}$.`, 48, "3 + 9(5)."),
  num(S`A geometric sequence has $u_1=2$ and $r=3$. Find $u_4$.`, 54, "2(27)."),
  num(S`Find the common difference of $12, 9, 6, \dots$`, -3, "9 − 12."),
  num(S`Find the common ratio of $80, 20, 5, \dots$`, 0.25, "20 ÷ 80."),
  mc(S`The sequence $4, 8, 16, 32, \dots$ is:`, "geometric with r = 2", ["arithmetic with d = 4", "geometric with r = 4", "neither"], "Each term is double the one before."),
  tf(S`$1, 3, 6, 10, \dots$ is an arithmetic sequence.`, false, "The differences 2, 3, 4 are not constant."),
  num(S`For $u_n=7+2(n-1)$, find $u_{20}$.`, 45, "7 + 38."),
  num(S`For $u_n=5\cdot2^{n-1}$, find $u_5$.`, 80, "5(16)."),
  fill("In a geometric sequence, the constant factor between consecutive terms is called the common ___.", ["ratio", "Ratio"], "Arithmetic sequences have a common difference instead."),
  num(S`Find the 8th term of $-5, -1, 3, \dots$`, 23, "−5 + 7(4)."),
  num(S`Find the 5th term of $1000, 100, 10, \dots$`, 0.1, "Divide by 10 each time.", null, 1e-9),
  tf("A geometric sequence with r = −1 alternates between two values.", true, "e.g. 3, −3, 3, −3, …"),
  mc(S`Which is the general term of $10, 13, 16, \dots$?`, S`$u_n=3n+7$`, [S`$u_n=3n+10$`, S`$u_n=10n+3$`, S`$u_n=13n-3$`], "d = 3 and u₁ = 10 = 3 + 7."),
  num("The points show an arithmetic sequence. What is its common difference?", 3, "The points rise by 3 each step.", seqDoc([4, 7, 10, 13], { color: "blue", label: "all" })),
  num("The points show a geometric sequence. Find its 5th term.", 81, "1, 3, 9, 27, 81.", seqDoc([1, 3, 9, 27], { color: "violet", label: "all" })),
  num(S`A geometric sequence has $u_1=6$ and $r=0.5$. Find $u_4$.`, 0.75, "6(0.125).", null, 1e-9),
  num(S`In $50, 45, 40, \dots$, which term is 0?`, 11, "50 − 5(n − 1) = 0."),
  tf(S`$2, 6, 18, 54, \dots$ has common ratio 3.`, true, "6 ÷ 2 = 3."),
  num(S`Find the 6th term of $2, -4, 8, \dots$`, -64, "2(−2)⁵."),
  mc("Which sequence is arithmetic?", "1.5, 3, 4.5, 6", ["1, 2, 4, 7", "3, 9, 27, 81", "1, 1, 2, 3"], "It goes up by 1.5 each time."),
];

export const M = [
  num(S`An arithmetic sequence has $u_3=11$ and $u_7=27$. Find $u_1$.`, 3, "4d = 16, so d = 4; u₁ = 11 − 8."),
  num(S`A geometric sequence has $u_1=5$ and $u_4=40$. Find $r$.`, 2, "r³ = 8."),
  num(S`How many terms are in $7, 11, 15, \dots, 99$?`, 24, "(99 − 7)/4 + 1."),
  num(S`A geometric sequence has $u_2=10$ and $u_4=40$, with $r>0$. Find $u_1$.`, 5, "r² = 4, r = 2; u₁ = 10/2."),
  num(S`An arithmetic sequence has $u_1=4$ and $u_{10}=2u_3$. Find $d$.`, 0.8, "4 + 9d = 2(4 + 2d) → 5d = 4.", null, 1e-9),
  num(S`$k$, $9$ and $2k$ are consecutive terms of an arithmetic sequence. Find $k$.`, 6, "2(9) = k + 2k."),
  num(S`$3$, $x$, $27$ are consecutive terms of a geometric sequence with $x>0$. Find $x$.`, 9, "x² = 81."),
  num(S`Find the first term of $2, 6, 18, \dots$ that is greater than 1000.`, 1458, "2(3⁶) = 1458; 2(3⁵) = 486."),
  num(S`For $u_n=5n-2$, which term equals 248?`, 50, "5n = 250."),
  tf("If the terms of a sequence lie on a straight line when plotted against n, the sequence is arithmetic.", true, "Equal steps in n give equal changes in uₙ."),
  num(S`A geometric sequence has $u_1=2$ and $r=-3$. Find $u_5$.`, 162, "2(−3)⁴."),
  mx(S`Write the general term $u_n$ of $12, 7, 2, -3, \dots$`, "17-5*n", "d = −5 and u₁ = 12 = 17 − 5."),
  num("The points show a geometric sequence. Find its 7th term.", 0.625, "r = 0.5: 40(0.5)⁶.", seqDoc([40, 20, 10, 5], { color: "red", label: "all" }), 1e-9),
  num("The points show an arithmetic sequence. Find its 20th term.", 55, "u₁ = −2, d = 3: −2 + 19(3).", seqDoc([-2, 1, 4], { color: "blue", label: "all" })),
  ms("Which sequences are geometric? Select all.", ["5, 10, 20, …", "1, −1, 1, −1, …", "2, 4, 6, …", "100, 10, 1, …"], [0, 1, 3], "2, 4, 6 is arithmetic."),
  num(S`An arithmetic sequence has $u_5=0$ and $u_9=12$. Find $u_1$.`, -12, "d = 3; u₁ = 0 − 4(3)."),
  num(S`A geometric sequence has $u_1=81$ and $r=\frac13$. Which term equals 1?`, 5, "81(1/3)ⁿ⁻¹ = 1 → n − 1 = 4."),
  num(S`$4$, $x$, $25$ are consecutive terms of a geometric sequence with $x<0$. Find $x$.`, -10, "x² = 100."),
  num(S`How many terms of $3, 6, 12, \dots$ are less than 1000?`, 9, "3(2⁸) = 768, 3(2⁹) = 1536."),
  num(S`An arithmetic sequence has $u_1=40$ and $d=-2.5$. Which is the first negative term? Give $n$.`, 18, "u₁₇ = 0, u₁₈ = −2.5."),
];
