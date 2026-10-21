// IB AA SL chapter 1 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { seqDoc, barsDoc, moneyDoc, pascalDoc } from "./figs.mjs";

const T = {
  1: "1.1 Number Patterns and Sigma Notation", 2: "1.2 Arithmetic and Geometric Sequences", 3: "1.3 Arithmetic and Geometric Series",
  4: "1.4 Financial Applications of Sequences", 5: "1.5 The Binomial Theorem", 6: "1.6 Proof",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const yrs = (n, f) => Array.from({ length: n + 1 }, (_, t) => Math.round(f(t) * 100) / 100);

/** nested squares: each square joins the midpoints of the previous one */
function nestedSquares(side = 8, levels = 5) {
  const w = 300, c = w / 2, sc = 260 / side;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${w}" width="${w}" height="${w}" font-family="Arial, sans-serif"><rect width="${w}" height="${w}" fill="#fff"/>`;
  let pts = [[-side / 2, -side / 2], [side / 2, -side / 2], [side / 2, side / 2], [-side / 2, side / 2]];
  const cols = ["#1d4ed8", "#6d28d9", "#15803d", "#b45309", "#b91c1c"];
  for (let k = 0; k < levels; k++) {
    s += `<polygon points="${pts.map(([x, y]) => `${c + x * sc},${c + y * sc}`).join(" ")}" fill="none" stroke="${cols[k % 5]}" stroke-width="2.2"/>`;
    pts = pts.map((p, i) => { const q = pts[(i + 1) % 4]; return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; });
  }
  return s + `<text x="${c}" y="${c - 130 * 1 - 2}" font-size="12" text-anchor="middle" fill="#1d4ed8">side ${side}</text></svg>`;
}

export const WRITTEN = [
  W(1, "medium", 4, S`A tiling pattern uses $4, 10, 18, 28, \dots$ tiles (shown). (a) Write a recursive rule for $u_{n+1}$. (b) Show that $u_n=n^2+3n$ fits the first four terms. (c) Evaluate $\sum_{n=1}^{10}u_n$, given $\sum_{n=1}^{10}n^2=385$.`,
    S`(a) differences $6, 8, 10$: $u_{n+1}=u_n+2n+4$, $u_1=4$. (b) $1+3=4$, $4+6=10$, $9+9=18$, $16+12=28$. (c) $385+3(55)=550$. [1, 1, 2.]`,
    barsDoc([4, 10, 18, 28], { color: "#6d28d9", xlab: "pattern n" })),
  W(1, "hard", 5, S`(a) Find $n$ if $\sum_{k=1}^{n}(3k+1)=246$. (b) Hence find $\sum_{k=13}^{24}(3k+1)$.`,
    S`(a) $\frac{3n(n+1)}{2}+n=246\Rightarrow3n^2+5n-492=0\Rightarrow(n-12)(3n+41)=0$, so $n=12$. (b) $\sum_{k=1}^{24}=\frac{3(24)(25)}{2}+24=924$; $924-246=678$. [3, 2.]`,
    barsDoc([4, 7, 10, 13, 16, 19], { color: "#1d4ed8", xlab: "k", title: "The first terms 3k + 1" })),
  W(2, "medium", 4, S`$x$, $x+6$ and $4x$ are consecutive terms of a geometric sequence. (a) Find the two possible values of $x$. (b) For each, write the three terms and the common ratio. (c) For the positive case, find the 10th term if $x$ is the first term.`,
    S`(a) $(x+6)^2=4x^2\Rightarrow x+6=\pm2x\Rightarrow x=6$ or $x=-2$. (b) $6, 12, 24$ ($r=2$); $-2, 4, -8$ ($r=-2$). (c) $6(2^9)=3072$. [2, 1, 1.]`,
    seqDoc([6, 12, 24], { color: "violet", label: "all" })),
  W(2, "hard", 5, S`A geometric sequence has $u_1=2$ and $r=3$. An arithmetic sequence also has first term 2, and its 5th term equals the 3rd term of the geometric sequence. (a) Find the common difference. (b) Find the first $n$ for which the geometric term is more than 50 times the arithmetic term (the first terms are shown).`,
    S`(a) $2+4d=18\Rightarrow d=4$, so $a_n=4n-2$. (b) $g_n=2\cdot3^{n-1}$: $n=6$: $486<50(22)=1100$; $n=7$: $1458>50(26)=1300$. So $n=7$. [2, 3.]`,
    seqDoc([2, 6, 10, 14, 18], { color: "blue", label: "none", extra: [2, 6, 18, 54].map((y, i) => ({ x: i + 1, y, color: "violet" })) })),
  W(3, "medium", 4, S`A display of cans has 25 cans in the bottom row, 2 fewer in each row above, and 1 can in the top row (bottom rows shown). (a) How many rows are there? (b) How many cans are there altogether? (c) How many rows from the bottom are needed to use at least 100 cans?`,
    S`(a) $25-2(n-1)=1\Rightarrow n=13$. (b) $\frac{13}{2}(25+1)=169$. (c) $S_n=n(26-n)\ge100$: $n=5$ gives $105$ ($n=4$ gives $88$), so 5 rows. [1, 1, 2.]`,
    barsDoc([25, 23, 21, 19, 17, 15], { color: "#b45309", xlab: "row from the bottom" })),
  W(3, "hard", 5, S`A square of side 8 cm has the midpoints of its sides joined to form a second square, and the process continues forever (shown). (a) Show that the areas form a geometric sequence and state $r$. (b) Find the total area of all the squares. (c) Find the total perimeter of all the squares (2 d.p.).`,
    S`(a) each new side is $\frac{1}{\sqrt2}$ of the previous, so each area is half: $64, 32, 16, \dots$, $r=\frac12$. (b) $S_\infty=\frac{64}{1/2}=128$ cm². (c) perimeters $32, \frac{32}{\sqrt2}, \dots$: $\frac{32}{1-1/\sqrt2}\approx109.25$ cm. [2, 1, 2.]`,
    nestedSquares(8, 5)),
  W(4, "medium", 4, S`Maya invests 12 000 at 3.6% per year compounded monthly. Her car, worth 15 000, depreciates by 12% per year. (a) Find the value of the investment after 5 years. (b) Find the value of the car after 5 years. (c) After how many whole years is the investment first worth more than the car?`,
    S`(a) $12000(1.003)^{60}\approx14362.74$. (b) $15000(0.88)^5\approx7915.98$. (c) after 1 year: $12438.98<13200$; after 2 years: $12894.47>11616$, so 2 years. [1, 1, 2.]`,
    moneyDoc([yrs(5, (t) => 12000 * 1.003 ** (12 * t)), yrs(5, (t) => 15000 * 0.88 ** t)], { years: 5, colors: ["green", "red"], labels: ["invest ", "car "] })),
  W(4, "hard", 5, S`Sam deposits 2000 at the start of every year into an account paying 4.5% per year compounded annually. (a) Find the balance at the end of years 1 and 2. (b) Show that the balance at the end of year $n$ is $\frac{2090(1.045^n-1)}{0.045}$. (c) After how many whole years does the balance first exceed 30 000?`,
    S`(a) $2090$; $(2090+2000)(1.045)\approx4274.05$. (b) $2000(1.045+1.045^2+\dots+1.045^n)$, a geometric series with $u_1=2090$, $r=1.045$. (c) year 11: $\approx28928.06$; year 12: $\approx32319.83$, so 12 years. [1, 2, 2.]`,
    barsDoc(yrs(11, (t) => 2090 * (1.045 ** (t + 1) - 1) / 0.045), { color: "#15803d", xlab: "year", labels: false })),
  W(5, "medium", 4, S`(a) Expand $(2-x)^5$ fully. (b) Use the first four terms to estimate $1.99^5$ to 5 d.p., and compare with the calculator value.`,
    S`(a) $32-80x+80x^2-40x^3+10x^4-x^5$. (b) $x=0.01$: $32-0.8+0.008-0.00004=31.20796$; calculator $31.20796$ (to 5 d.p.). [2, 2.]`,
    pascalDoc(5, [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5]])),
  W(5, "hard", 5, S`In the expansion of $(1+ax)^n$ the coefficient of $x$ is 24 and the coefficient of $x^2$ is 252. (a) Find $n$ and $a$. (b) Find the coefficient of $x^3$.`,
    S`(a) $na=24$ and $\frac{n(n-1)}{2}a^2=252$. Substituting $a=\frac{24}{n}$: $\frac{288(n-1)}{n}=252\Rightarrow36n=288$, so $n=8$, $a=3$. (b) $\binom83 3^3=56(27)=1512$. [3, 2.]`,
    pascalDoc(8, [[8, 1], [8, 2], [8, 3]])),
  W(6, "medium", 4, S`(a) Prove that the sum of any three consecutive odd numbers is a multiple of 3. (b) Show that this sum is always odd. (c) Find the three consecutive odd numbers whose sum is 129.`,
    S`(a) $(2n-1)+(2n+1)+(2n+3)=6n+3=3(2n+1)$. (b) $6n+3=2(3n+1)+1$. (c) $6n+3=129\Rightarrow n=21$: $41, 43, 45$. [2, 1, 1.]`,
    barsDoc([9, 15, 21, 27, 33], { color: "#1d4ed8", xlab: "n", title: "(2n − 1) + (2n + 1) + (2n + 3) for n = 1 to 5" })),
  W(6, "hard", 5, S`(a) Prove that $(2n+1)^2-1$ is a multiple of 8 for every integer $n$. (b) Disprove: "$(2n+1)^2-1$ is a multiple of 16 for every integer $n$". (c) The values for $n=1$ to $4$ are shown. Explain why every value is $8$ times a triangular number.`,
    S`(a) $4n^2+4n=4n(n+1)$, and $n(n+1)$ is even, so it is a multiple of 8. (b) $n=1$ gives 8, not a multiple of 16. (c) $4n(n+1)=8\cdot\frac{n(n+1)}{2}$, and $\frac{n(n+1)}{2}$ is the $n$th triangular number. [2, 1, 2.]`,
    seqDoc([8, 24, 48, 80], { color: "green", label: "all" })),
];
