// MCR3U Worksheet 7.6 — Geometric Series (teacher edition)
import { barsT, dotsT } from "./seqT.mjs";

const S = String.raw;
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);
const partial = (a, r, n) => Array.from({ length: n }, (_, i) => (r === 1 ? a * (i + 1) : (a * (r ** (i + 1) - 1)) / (r - 1)));
const f2 = (v) => (Math.round(v * 100) / 100).toFixed(2);

const EXAMPLES = [
  { title: "Derivation", q: S`Use $S-rS$ to find $2+6+18+54+162$.`, steps: [S`$S=2+6+18+54+162$; $3S=6+18+54+162+486$.`, S`$3S-S=486-2\Rightarrow S=242$.`], ans: "242" },
  { title: "Formula", q: S`Find $S_7$ for $5+10+20+\cdots$`, steps: [S`$5(2^7-1)$.`], ans: "635" },
  { title: "Ratio less than 1", q: S`Find $S_6$ for $729+243+81+\cdots$`, steps: [S`$\frac{729(1-(1/3)^6)}{2/3}=\frac{729-1}{2/3}$.`], ans: "1092" },
  { title: "Count first", q: "Find 3 + 12 + 48 + … + 12 288.", steps: [S`$4^{n-1}=4096=4^6\Rightarrow n=7$.`, S`$\frac{3(4^7-1)}3$.`], ans: "16 383" },
  { title: "Alternating", q: S`Find $4-12+36-\cdots$ to 7 terms.`, steps: [S`$\frac{4((-3)^7-1)}{-4}=-(-2187-1)$.`], ans: "2188" },
  { title: "Using the last term", q: S`Use $S_n=\frac{rt_n-a}{r-1}$ to find $1+5+25+\cdots+15625$.`, steps: [S`$\frac{5(15625)-1}4$.`], ans: "19 531" },
  { title: "Saving with growth", q: "Leo saves 10 dollars in week 1 and each week saves 10% more than the week before. How much has he saved after 12 weeks?",
    fig: barsT(partial(10, 1.1, 12), { xlabel: "week", ylabel: "total saved" }),
    steps: [S`$S_{12}=\frac{10(1.1^{12}-1)}{0.1}$.`], ans: S`$\approx${f2((10 * (1.1 ** 12 - 1)) / 0.1)}$ dollars` },
  { title: "Partial sums levelling off", q: S`Compute $S_1$ to $S_6$ for $9+3+1+\cdots$ and describe the trend.`,
    fig: dotsT(partial(9, 1 / 3, 6).map((v) => Math.round(v * 100) / 100), { lines: [{ m: 0, b: 13.5, color: "amber", dash: true }], ylabel: "Sₙ" }),
    steps: ["9, 12, 13, 13.33, 13.44, 13.48"], ans: S`they approach $\frac9{1-1/3}=13.5$` },
  { title: "Finding n", q: "How many terms of 1 + 2 + 4 + … give 4095?", steps: [S`$2^n-1=4095\Rightarrow2^n=4096$.`], ans: "12" },
];

const PROBLEMS = [
  { level: 1, q: S`Find $S_6$ for $1+3+9+\cdots$`, recap: "Sum.", ans: "364" },
  { level: 1, q: S`Find $S_5$ for $2+8+32+\cdots$`, recap: "Sum.", ans: "682" },
  { level: 1, q: S`Find $S_4$ for $1000+100+10+1$.`, recap: "Shrinking.", ans: "1111" },
  { level: 2, q: "Find 5 + 15 + 45 + … + 10 935.", recap: "Count first.", ans: S`8 terms: 16 400` },
  { level: 2, q: S`Find $S_8$ for $6-12+24-\cdots$`, recap: "Alternating.", ans: S`$\frac{6(256-1)}{-3}=-510$` },
  { level: 2, q: S`Find $S_{10}$ for $512+256+128+\cdots$`, recap: "r = ½.", ans: "1023" },
  { level: 2, q: "A chain email is sent to 4 people, who each send it to 4 more, and so on. How many emails are sent in the first 6 rounds?", recap: "Chain.", ans: "5460", fig: barsT(geo(4, 4, 6), { xlabel: "round", ylabel: "emails" }) },
  { level: 2, q: "A pendulum's first swing is 60 cm and each swing is 90% of the previous one. Find the total length of the first 10 swings.", recap: "Shrinking.", ans: S`$\frac{60(1-0.9^{10})}{0.1}\approx${f2((60 * (1 - 0.9 ** 10)) / 0.1)}$ cm` },
  { level: 3, space: 4, q: "How many terms of 4 + 12 + 36 + … are needed for the sum to exceed 100 000?", recap: "Inequality.", ans: S`$2(3^n-1)>100000$: $3^n>50001$: $n=10$` },
  { level: 3, space: 4, q: S`A geometric series has $a=3$, $r>0$ and $S_3=63$. Find $r$ and $S_6$.`, recap: "Find r.", ans: S`$1+r+r^2=21\Rightarrow r=4$; $S_6=4095$` },
  { level: 3, space: 5, q: "A ball dropped from 12 m rebounds to 2/3 of its previous height each time. Find the total vertical distance travelled when it hits the ground for the 8th time.", recap: "Up and down.", ans: S`$12+2\cdot\frac{8(1-(2/3)^7)}{1/3}\approx${f2(12 + 2 * ((8 * (1 - (2 / 3) ** 7)) / (1 / 3)))}$ m` },
  { level: 3, space: 4, q: S`Show that $1+2+4+\cdots+2^{n-1}=2^n-1$ and explain the result in words.`, recap: "Prove.", ans: "formula with a = 1, r = 2; the sum of all smaller powers of 2 is one less than the next power" },
  { level: 3, space: 4, q: "Explain why the formula a(rⁿ − 1)/(r − 1) cannot be used when r = 1, and give the correct sum.", recap: "Explain.", ans: "it would divide by 0; all terms equal a, so Sₙ = na" },
];

export const WS = {
  code: "7.6",
  title: "Geometric Series",
  bigideas: S`For a geometric series, $S_n=\frac{a(r^n-1)}{r-1}$ ($r\ne1$), found by subtracting $S_n$ from $rS_n$. Count the terms first. When $0<r<1$ the partial sums level off near $\frac a{1-r}$.`,
  goals: ["Derive the sum formula.", "Find sums of n terms.", "Count terms; handle r < 0.", "Solve problems."],
  curriculum: "C3.3, C3.4",
  vocab: [["Geometric series", "$a+ar+ar^2+\\cdots$"], ["Sum formula", "$\\frac{a(r^n-1)}{r-1}$"], ["Partial sum", "$S_n$"]],
  hook: "A grain of rice on square 1 of a chessboard, 2 on square 2, 4 on square 3, … How much rice is on the whole board?",
  concepts: [
    ["1. Multiply and subtract", S`${barsT(geo(1, 2, 7), { width: 5 })}$S=1+2+\cdots+64$; $2S-S=128-1$: $S=127$.`],
    ["2. Two forms", S`$\frac{a(r^n-1)}{r-1}=\frac{a(1-r^n)}{1-r}$.`],
    ["3. Last-term form", S`$S_n=\frac{rt_n-a}{r-1}$ when you know the last term.`],
  ],
  tips: ["Count terms.", "Bracket (−r).", "r = 1: Sₙ = na.", "Round only at the end.", "Up-and-down distances double."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
