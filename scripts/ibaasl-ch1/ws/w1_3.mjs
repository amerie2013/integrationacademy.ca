// IB AA SL Worksheet 1.3 — Arithmetic and Geometric Series (teacher edition)
import { svgT } from "./figT.mjs";
import { barsDoc, bounceDoc } from "../figs.mjs";

const S = String.raw;
const partial = (terms) => { let s = 0; return terms.map((t) => Math.round((s += t) * 1e4) / 1e4); };
const EXAMPLES = [
  { title: "An arithmetic series", q: S`Find the sum of the first 25 terms of $4+7+10+\dots$`,
    steps: [S`$u_{25}=4+24(3)=76$.`, S`$S_{25}=\frac{25}{2}(4+76)=1000$.`], ans: "1000" },
  { title: "Using the last term", q: S`Find $2+5+8+\dots+59$.`,
    steps: [S`$2+3(n-1)=59\Rightarrow n=20$.`, S`$S_{20}=\frac{20}{2}(2+59)=610$.`], ans: "610" },
  { title: "A geometric series", q: S`Find the sum of the first 7 terms of $5+10+20+\dots$`,
    steps: [S`$S_7=\frac{5(2^7-1)}{2-1}=5(127)$.`], ans: "635" },
  { title: "Ratio less than 1", q: S`Find the sum of the first 6 terms of $64+32+16+\dots$`,
    fig: svgT(barsDoc(partial([64, 32, 16, 8, 4, 2]), { limit: 128, xlab: "n" }), 5.5),
    steps: [S`$r=\frac12$: $S_6=\frac{64\left(1-\frac1{64}\right)}{\frac12}=128\cdot\frac{63}{64}$.`], ans: "126" },
  { title: "Sum to infinity", q: S`Find the sum to infinity of $30+10+\frac{10}{3}+\dots$`,
    steps: [S`$r=\frac13$, $|r|<1$.`, S`$S_\infty=\frac{30}{1-\frac13}=45$.`], ans: "45" },
  { title: "How many terms?", q: S`How many terms of $5+9+13+\dots$ add up to 495?`,
    steps: [S`$S_n=\frac n2(10+4(n-1))=n(2n+3)$.`, S`$2n^2+3n-495=0\Rightarrow n=\frac{-3+63}{4}=15$.`], ans: "15 terms" },
  { title: "Finding the ratio", q: S`A geometric series has $u_1=4$ and $S_\infty=12$. Find $r$.`,
    steps: [S`$\frac{4}{1-r}=12\Rightarrow1-r=\frac13$.`], ans: S`$r=\frac23$` },
  { title: "A recurring decimal", q: S`Write $0.\overline{4}=0.444\dots$ as a fraction.`,
    steps: [S`$0.4+0.04+\dots$: $u_1=0.4$, $r=0.1$.`, S`$S_\infty=\frac{0.4}{0.9}$.`], ans: S`$\frac49$` },
  { title: "A geometric sum in sigma notation", q: S`Evaluate $\sum_{k=1}^{10}3(0.5)^{k-1}$ to 3 d.p.`,
    steps: [S`$u_1=3$, $r=0.5$, $n=10$: $S_{10}=\frac{3(1-0.5^{10})}{0.5}=6\left(1-\frac1{1024}\right)$.`], ans: S`$\approx5.994$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the sum of the first 12 terms of $1+4+7+\dots$`, recap: "Arithmetic sum.", ans: "210" },
  { level: 1, q: S`Find the sum of the first 5 terms of $2+6+18+\dots$`, recap: "Geometric sum.", ans: "242" },
  { level: 1, q: S`Find the sum to infinity of $9+3+1+\dots$`, recap: "Sum to infinity.", ans: "13.5" },
  { level: 2, q: S`An arithmetic series has $u_1=50$ and $d=-4$. Find $S_{10}$.`, recap: "Negative d.", ans: "320" },
  { level: 2, q: S`Find the sum of the odd numbers from 1 to 99.`, recap: "Arithmetic sum.", ans: "2500" },
  { level: 2, q: S`Find the sum of the first 8 terms of $3-6+12-\dots$`, recap: "Negative r.", ans: S`$-255$` },
  { level: 2, q: S`A geometric series has $S_\infty=20$ and $r=0.6$. Find $u_1$.`, recap: "Find u1.", ans: "8" },
  { level: 2, q: S`Write $0.\overline{15}=0.151515\dots$ as a fraction in lowest terms.`, recap: "Recurring decimal.", ans: S`$\frac{5}{33}$` },
  { level: 3, space: 5, q: S`Find the least $n$ for which $10+15+20+\dots$ ($n$ terms) exceeds 2000.`, recap: "Least n.", ans: "27" },
  { level: 3, space: 4, q: S`A geometric series has $S_\infty=3u_1$. Find $r$.`, recap: "Ratio from S infinity.", ans: S`$r=\frac23$` },
  { level: 3, space: 5, q: S`The sum of the first $n$ terms of a series is $S_n=2^{n+1}-2$. Find $u_n$ and show the series is geometric.`, recap: "Terms from sums.", ans: S`$u_n=2^n$, ratio 2` },
  { level: 3, space: 5, q: S`A ball dropped from 8 m rebounds to $\frac34$ of each height (shown). Find the total distance travelled.`, recap: "Bouncing ball.", ans: S`$8+2\left(\frac{6}{1/4}\right)=56$ m`,
    fig: svgT(bounceDoc(8, 0.75, 4), 6) },
  { level: 3, space: 5, q: S`A geometric series has $S_3=13$ and $S_\infty=13.5$. Find $r$ and $u_1$.`, recap: "Two sums.", ans: S`$1-r^3=\frac{13}{13.5}$: $r=\frac13$, $u_1=9$` },
];

export const WS = {
  code: "1.3",
  title: "Arithmetic and Geometric Series",
  bigideas: S`Arithmetic: $S_n=\frac n2\big(2u_1+(n-1)d\big)=\frac n2(u_1+u_n)$. Geometric: $S_n=\frac{u_1(1-r^n)}{1-r}$ for $r\ne1$. A geometric series with $|r|<1$ converges to $S_\infty=\frac{u_1}{1-r}$; every other series (except all zeros) has no sum to infinity. A term can be recovered from sums by $u_n=S_n-S_{n-1}$.`,
  goals: ["Use the arithmetic and geometric sum formulas.", "Solve for the number of terms.", "Find and use the sum to infinity.", "Write recurring decimals as fractions."],
  curriculum: "SL 1.2, SL 1.3, SL 1.8",
  vocab: [["Partial sum", "$S_n$, the first $n$ terms added"], ["Converge", "partial sums approach a fixed value"], ["Sum to infinity", S`$S_\infty=\frac{u_1}{1-r}$, $|r|<1$`]],
  hook: "Fold a strip of paper in half, then half the remainder, and so on. Ask: if you keep going forever, what total length do the pieces make?",
  concepts: [
    ["1. Pairing", S`Write the series forwards and backwards: every column adds to $u_1+u_n$, so $2S_n=n(u_1+u_n)$.`],
    ["2. Multiply and subtract", S`$S_n-rS_n=u_1-u_1r^n$, giving the geometric formula. If $|r|<1$, $r^n\to0$. ${svgT(barsDoc(partial([8, 4, 2, 1, 0.5, 0.25, 0.125]), { limit: 16, xlab: "n", labels: false }), 5.5)}`],
    ["3. Using the sum to infinity", S`State $|r|<1$ before writing $S_\infty$. A recurring decimal is an infinite geometric series with $r=0.1$, $0.01$, ….`],
  ],
  tips: ["Sn is a sum, un one term.", "Bracket 2u1 + (n − 1)d carefully.", "State |r| < 1 for S infinity.", "Round n up for 'least n'.", "un = Sn − S(n−1)."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
