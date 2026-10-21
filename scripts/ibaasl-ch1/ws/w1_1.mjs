// IB AA SL Worksheet 1.1 — Number Patterns and Sigma Notation (teacher edition)
import { F, pt, svgT } from "./figT.mjs";
import { dotsDoc, barsDoc, seqDoc } from "../figs.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "General term from a pattern", q: S`Find the general term of $2, 5, 10, 17, 26, \dots$ and use it to find $u_{15}$.`,
    steps: [S`Each term is one more than a square: $1+1, 4+1, 9+1, \dots$`, S`$u_n=n^2+1$, so $u_{15}=225+1=226$.`], ans: S`$u_n=n^2+1$; $u_{15}=226$` },
  { title: "Triangular numbers", q: S`The dot patterns give $1, 3, 6, 10, \dots$ Find a formula for the $n$th pattern and the number of dots in pattern 20.`,
    fig: svgT(dotsDoc([1, 3, 6, 10], "tri"), 6),
    steps: [S`Pattern $n$ has $1+2+\dots+n=\frac{n(n+1)}{2}$ dots.`, S`$u_{20}=\frac{20(21)}{2}=210$.`], ans: S`$u_n=\frac{n(n+1)}{2}$; 210` },
  { title: "A recursive rule", q: S`$u_1=3$ and $u_{n+1}=u_n^2-2$. Find $u_2$, $u_3$ and $u_4$.`,
    steps: [S`$u_2=9-2=7$, $u_3=49-2=47$.`, S`$u_4=2209-2=2207$.`], ans: S`$7, 47, 2207$` },
  { title: "Two previous terms", q: S`$u_1=u_2=1$ and $u_{n+2}=u_{n+1}+u_n$. List the first eight terms.`,
    steps: [S`Each term is the sum of the two before it.`], ans: S`$1, 1, 2, 3, 5, 8, 13, 21$` },
  { title: "Expanding a sum", q: S`Evaluate $\sum_{k=1}^{4}k^3$.`,
    fig: svgT(barsDoc([1, 8, 27, 64], { color: "#1d4ed8", xlab: "k" }), 5.5),
    steps: [S`$1+8+27+64$.`], ans: S`$100$` },
  { title: "Alternating signs", q: S`Evaluate $\sum_{k=0}^{5}(-1)^k(k+1)$.`,
    steps: [S`$k=0$ to $5$: $1-2+3-4+5-6$.`], ans: S`$-3$` },
  { title: "Writing a sum in sigma notation", q: S`Write $5+10+15+\dots+60$ in sigma notation.`,
    steps: [S`The terms are $5k$ for $k=1$ to $12$ (since $60=5\times12$).`], ans: S`$\sum_{k=1}^{12}5k$` },
  { title: "Fractions with alternating signs", q: S`Write $1-\frac12+\frac13-\frac14+\frac15$ in sigma notation.`,
    steps: [S`The denominators are $k=1$ to $5$; the sign is $+$ for odd $k$, so use $(-1)^{k+1}$.`], ans: S`$\sum_{k=1}^{5}\frac{(-1)^{k+1}}{k}$` },
  { title: "Using the sum of k", q: S`Evaluate $\sum_{k=1}^{30}(3k-2)$ without listing terms.`,
    steps: [S`$3\sum k-\sum 2=3\cdot\frac{30(31)}{2}-2(30)$.`, S`$=3(465)-60=1335$.`], ans: S`$1335$` },
];

const PROBLEMS = [
  { level: 1, q: S`For $u_n=2n^2-3$, find $u_6$.`, recap: "General term.", ans: "69" },
  { level: 1, q: S`$u_1=5$ and $u_{n+1}=u_n+4$. Find $u_5$.`, recap: "Recursive rule.", ans: "21" },
  { level: 1, q: S`Evaluate $\sum_{k=1}^{4}(2k+1)$.`, recap: "Expand a sum.", ans: S`$3+5+7+9=24$` },
  { level: 2, q: S`Find the general term of $0, 3, 8, 15, 24, \dots$`, recap: "Pattern to formula.", ans: S`$u_n=n^2-1$`,
    fig: svgT(seqDoc([0, 3, 8, 15, 24], { color: "violet", label: "all" }), 6) },
  { level: 2, q: S`How many terms are in $\sum_{k=7}^{31}(k+2)$?`, recap: "Count terms.", ans: "25" },
  { level: 2, q: S`Write $2+4+8+\dots+256$ in sigma notation.`, recap: "Write in sigma.", ans: S`$\sum_{k=1}^{8}2^k$` },
  { level: 2, q: S`$u_1=3$ and $u_{n+1}=3u_n-4$. Find $u_5$.`, recap: "Recursive rule.", ans: S`$3, 5, 11, 29, 83$: $u_5=83$` },
  { level: 2, q: S`Evaluate $\sum_{r=1}^{6}r(r-1)$.`, recap: "Expand a sum.", ans: S`$0+2+6+12+20+30=70$` },
  { level: 3, space: 5, q: S`Show that $\sum_{k=1}^{n}(6k-1)=3n^2+2n$, then find $n$ if the sum is 456.`, recap: "Sum formula, then solve.", ans: S`$6\cdot\frac{n(n+1)}2-n$; $n=12$` },
  { level: 3, space: 5, q: S`$u_1=2$ and $u_{n+1}=u_n+3n$. Find an explicit formula for $u_n$ and $u_{10}$.`, recap: "Recursive to explicit.", ans: S`$u_n=2+\frac{3n(n-1)}{2}$; $u_{10}=137$` },
  { level: 3, space: 4, q: S`Find $n$ if $\sum_{k=1}^{n}k=210$.`, recap: "Solve for n.", ans: S`$n(n+1)=420$: $n=20$` },
  { level: 3, space: 4, q: S`Given $\sum_{k=1}^{20}k^2=2870$ and $\sum_{k=1}^{10}k^2=385$, find $\sum_{k=11}^{20}k^2$.`, recap: "Split a sum.", ans: "2485" },
  { level: 3, space: 5, q: S`Prove that $\sum_{k=1}^{n}2k=n(n+1)$, and use it to find $2+4+\dots+100$.`, recap: "Prove, then apply.", ans: S`$2\cdot\frac{n(n+1)}2$; $n=50$: 2550` },
];

export const WS = {
  code: "1.1",
  title: "Number Patterns and Sigma Notation",
  bigideas: S`A sequence can be described by a general term $u_n$ (any term directly) or by a recursive rule (each term from the previous one, plus a starting value). Sigma notation $\sum_{k=a}^{b}f(k)$ adds $b-a+1$ terms. Constants factor out of a sum, sums split, $\sum_{k=1}^{n}c=nc$ and $\sum_{k=1}^{n}k=\frac{n(n+1)}{2}$.`,
  goals: ["Find general terms of patterns.", "Generate terms from recursive rules.", "Expand and write sums in sigma notation.", "Evaluate sums with the properties of sigma."],
  curriculum: "SL 1.2, SL 1.3",
  vocab: [["General term", "$u_n$, a formula in $n$"], ["Recursive rule", S`$u_{n+1}$ from $u_n$, with a start value`], ["Sigma notation", S`$\sum$, add the terms for each whole $k$`]],
  hook: "Show four dot patterns (1, 3, 6, 10 dots). Ask: how many dots in pattern 100? Collect strategies (drawing, adding, a formula) before introducing general terms.",
  concepts: [
    ["1. Explicit and recursive rules", S`Explicit: $u_n=n(n+1)$ gives $u_{10}=110$ at once. Recursive: $u_1=2$, $u_{n+1}=u_n+2(n+1)$ builds the same terms step by step. ${svgT(dotsDoc([2, 6, 12, 20], "rect"), 6)}`],
    ["2. Sigma notation", S`$\sum_{k=2}^{6}(3k-1)=5+8+11+14+17=55$: the index runs over every whole number from the lower to the upper limit, giving $6-2+1=5$ terms.`],
    ["3. Properties", S`$\sum c\,u_k=c\sum u_k$, $\sum(u_k+v_k)=\sum u_k+\sum v_k$, $\sum_{k=1}^{n}c=nc$, $\sum_{k=1}^{n}k=\frac{n(n+1)}{2}$.`],
  ],
  tips: ["Count terms as upper − lower + 1.", "A recursive rule needs a starting value.", "A constant inside sigma is added once per term.", "Use (−1) to the power k for alternating signs.", "Check a formula against the first two terms."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
