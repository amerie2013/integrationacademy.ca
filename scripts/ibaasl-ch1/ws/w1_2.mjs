// IB AA SL Worksheet 1.2 — Arithmetic and Geometric Sequences (teacher edition)
import { pt, svgT } from "./figT.mjs";
import { seqDoc } from "../figs.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "A decreasing arithmetic sequence", q: S`For $20, 17, 14, \dots$ find $u_n$ and $u_{15}$.`,
    steps: [S`$d=-3$: $u_n=20+(n-1)(-3)=23-3n$.`, S`$u_{15}=23-45=-22$.`], ans: S`$u_n=23-3n$; $u_{15}=-22$` },
  { title: "A geometric general term", q: S`For $5, 15, 45, \dots$ find $u_n$ and $u_8$.`,
    steps: [S`$r=3$: $u_n=5\cdot3^{n-1}$.`, S`$u_8=5\cdot3^7=10935$.`], ans: S`$u_n=5\cdot3^{n-1}$; $10935$` },
  { title: "Two arithmetic terms", q: S`An arithmetic sequence has $u_4=19$ and $u_{10}=43$. Find $u_1$ and $d$.`,
    steps: [S`$6d=43-19=24$, so $d=4$.`, S`$u_1=19-3(4)=7$.`], ans: S`$u_1=7$, $d=4$` },
  { title: "Two geometric terms", q: S`A geometric sequence has $u_2=12$ and $u_5=324$. Find $r$ and $u_1$.`,
    steps: [S`$r^3=\frac{324}{12}=27$, so $r=3$.`, S`$u_1=\frac{12}{3}=4$.`], ans: S`$r=3$, $u_1=4$` },
  { title: "Two possible ratios", q: S`A geometric sequence has $u_3=18$ and $u_5=162$. Find the possible values of $r$ and $u_1$.`,
    steps: [S`$r^2=\frac{162}{18}=9$, so $r=3$ or $r=-3$.`, S`Either way $u_1=\frac{18}{r^2}=2$.`], ans: S`$r=\pm3$, $u_1=2$` },
  { title: "Finding a position", q: S`Which term of $2, 9, 16, \dots$ is 352?`,
    steps: [S`$2+7(n-1)=352\Rightarrow n-1=50$.`], ans: S`$n=51$` },
  { title: "Three arithmetic terms", q: S`$k$, $12$ and $2k+3$ are consecutive terms of an arithmetic sequence. Find $k$.`,
    steps: [S`Middle term = mean of the others: $2(12)=k+2k+3$.`, S`$24=3k+3\Rightarrow k=7$: terms $7, 12, 17$.`], ans: S`$k=7$` },
  { title: "First term below 1", q: S`For $500, 250, 125, \dots$ which is the first term less than 1?`,
    fig: svgT(seqDoc([500, 250, 125, 62.5, 31.25, 15.625], { color: "red", label: "ends" }), 6),
    steps: [S`$500(0.5)^{n-1}<1\Rightarrow2^{n-1}>500$.`, S`$2^8=256$, $2^9=512$: $n-1=9$, $n=10$, $u_{10}\approx0.977$.`], ans: S`$u_{10}\approx0.977$` },
  { title: "Reading a graph", q: "The points show the first four terms of a sequence. Identify it and write its general term.",
    fig: svgT(seqDoc([3, 6, 12, 24], { color: "violet", label: "all" }), 6),
    steps: [S`Ratios $6/3=12/6=24/12=2$: geometric.`, S`$u_n=3\cdot2^{n-1}$.`], ans: S`geometric, $u_n=3\cdot2^{n-1}$` },
];

const PROBLEMS = [
  { level: 1, q: S`$u_1=8$ and $d=-2$. Find $u_{12}$.`, recap: "Arithmetic term.", ans: S`$-14$` },
  { level: 1, q: S`$u_1=0.5$ and $r=4$. Find $u_5$.`, recap: "Geometric term.", ans: "128" },
  { level: 1, q: S`Is $3, 3.5, 4, 4.5, \dots$ arithmetic or geometric? State $d$ or $r$.`, recap: "Classify.", ans: S`arithmetic, $d=0.5$` },
  { level: 2, q: S`An arithmetic sequence has $u_6=27$ and $u_{15}=63$. Find $u_1$ and $d$.`, recap: "Two terms.", ans: S`$d=4$, $u_1=7$` },
  { level: 2, q: S`A geometric sequence has $u_2=-6$ and $u_5=48$. Find $r$ and $u_1$.`, recap: "Two terms.", ans: S`$r=-2$, $u_1=3$` },
  { level: 2, q: S`How many terms are in $100, 96, 92, \dots, -40$?`, recap: "Number of terms.", ans: "36" },
  { level: 2, q: S`Find the first term of $4, 12, 36, \dots$ that is greater than 10 000.`, recap: "First term above.", ans: S`$u_9=26244$` },
  { level: 2, q: S`$2x$, $x+6$ and $4x$ are consecutive terms of an arithmetic sequence. Find $x$ and the terms.`, recap: "Three terms.", ans: S`$x=3$: $6, 9, 12$` },
  { level: 3, space: 5, q: S`$x$, $x+6$ and $x+18$ are consecutive terms of a geometric sequence. Find $x$ and $r$.`, recap: "Geometric condition.", ans: S`$(x+6)^2=x(x+18)$: $x=6$, $r=2$` },
  { level: 3, space: 5, q: S`Sequence A is arithmetic with $u_1=5$, $d=3$. Sequence B is geometric with $v_1=5$, $r=1.5$. Find the first $n$ for which $v_n>u_n$.`, recap: "Compare growth.", ans: S`$n=3$ ($11.25>11$)`,
    fig: svgT(seqDoc([5, 8, 11, 14, 17], { color: "blue", label: "none", extra: [5, 7.5, 11.25, 16.875, 25.3125].map((y, i) => ({ x: i + 1, y, color: "violet" })) }), 6) },
  { level: 3, space: 4, q: S`A geometric sequence has $u_4=54$ and $u_7=1458$. Find $u_1$ and $u_{10}$.`, recap: "Far term.", ans: S`$r=3$, $u_1=2$, $u_{10}=39366$` },
  { level: 3, space: 4, q: S`Show that $u_n=3\cdot2^n$ defines a geometric sequence and state $u_1$ and $r$.`, recap: "Prove geometric.", ans: S`$\frac{u_{n+1}}{u_n}=2$; $u_1=6$, $r=2$` },
  { level: 3, space: 5, q: S`In an arithmetic sequence $u_m=n$ and $u_n=m$, where $m\ne n$. Show that $d=-1$.`, recap: "General arithmetic.", ans: S`$(n-m)d=m-n$, so $d=-1$` },
];

export const WS = {
  code: "1.2",
  title: "Arithmetic and Geometric Sequences",
  bigideas: S`Arithmetic sequences add a common difference $d$: $u_n=u_1+(n-1)d$, and their terms lie on a line. Geometric sequences multiply by a common ratio $r$: $u_n=u_1r^{n-1}$, and their terms follow an exponential curve. Two known terms give $d$ (subtract) or $r$ (divide, then root). Consecutive terms $a, b, c$ satisfy $2b=a+c$ (arithmetic) or $b^2=ac$ (geometric).`,
  goals: ["Recognise arithmetic and geometric sequences.", "Use the general-term formulas.", "Find d or r from two terms.", "Find positions and first terms past a value."],
  curriculum: "SL 1.2, SL 1.3",
  vocab: [["Common difference", S`$d=u_{n+1}-u_n$`], ["Common ratio", S`$r=u_{n+1}/u_n$`], ["Position", "the whole number $n$ of a term"]],
  hook: "Offer a choice: 1000 dollars now plus 1000 more every day for 30 days, or 1 cent doubling every day for 30 days. Let students guess, then compute both.",
  concepts: [
    ["1. Two kinds of sequence", S`${svgT(seqDoc([2, 5, 8, 11, 14, 17], { color: "blue", label: "none", extra: [1, 2, 4, 8, 16, 32].map((y, i) => ({ x: i + 1, y, color: "violet" })) }), 6)} Blue: arithmetic ($d=3$), a straight line. Violet: geometric ($r=2$), an exponential curve.`],
    ["2. Two known terms", S`From $u_p$ to $u_q$ is $q-p$ steps: $(q-p)d=u_q-u_p$ or $r^{q-p}=\frac{u_q}{u_p}$. An even power gives two possible ratios.`],
    ["3. Inequalities in n", S`Solve for $n$ with logarithms or a table, then round up: $n$ must be a whole number.`],
  ],
  tips: ["The power is n − 1, not n.", "r = next ÷ this.", "Check both signs when solving r squared.", "Round n up for 'first term greater than'.", "Negative r alternates the signs."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
