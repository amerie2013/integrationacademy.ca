// IB AA SL 1.2 — Arithmetic and Geometric Sequences: general terms, finding d and r, terms from two facts, linear vs exponential growth
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, seqDoc } from "./figs.mjs";

export const TITLE = "1.2 Arithmetic and Geometric Sequences";
export const ID = "7808e07c-33e3-4490-880a-8d8e63236d22";
const S = String.raw;
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);
const ari = (a, d, n) => Array.from({ length: n }, (_, i) => a + d * i);

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Arithmetic and Geometric Sequences",
    overview: S`Two patterns appear again and again: adding the same amount each step (an arithmetic sequence) and multiplying by the same factor each step (a geometric sequence). In this lesson you will recognise both, write their general terms, find a missing common difference or ratio from two known terms, and decide when a sequence first passes a given value.`,
    goals: [
      "recognise arithmetic and geometric sequences from their terms or graphs;",
      "use \\(u_n=u_1+(n-1)d\\) and \\(u_n=u_1r^{\\,n-1}\\);",
      "find \\(u_1\\), \\(d\\) or \\(r\\) from two given terms;",
      "find the position of a term, or the first term that passes a value;",
      "use the conditions for three consecutive terms (\\(2b=a+c\\), \\(b^2=ac\\)).",
    ],
    curriculum: "SL 1.2 (arithmetic sequences: general term, use of the formula), SL 1.3 (geometric sequences: general term, use of the formula)",
    prior: [
      [S`Solve \(7d=28\).`, S`\(d=4\).`],
      [S`Solve \(r^3=-8\).`, S`\(r=-2\).`],
      [S`Evaluate \(81\left(\tfrac13\right)^3\).`, S`\(3\).`],
    ],
    words: [
      ["Arithmetic sequence", "each term is the previous term plus a constant", "\\(7, 11, 15, 19, \\dots\\)"],
      ["Common difference \\(d\\)", "\\(d=u_{n+1}-u_n\\)", "\\(d=4\\)"],
      ["Geometric sequence", "each term is the previous term times a constant", "\\(81, 27, 9, 3, \\dots\\)"],
      ["Common ratio \\(r\\)", "\\(r=\\dfrac{u_{n+1}}{u_n}\\)", "\\(r=\\tfrac13\\)"],
      ["Position \\(n\\)", "the place of a term in the sequence (a positive whole number)", "\\(u_{40}=157\\)"],
    ],
  }),

  section("📌 Two kinds of growth", S`
  ${table(["", "Arithmetic", "Geometric"], [
    ["step", S`add \(d\)`, S`multiply by \(r\)`],
    ["general term", S`\(u_n=u_1+(n-1)d\)`, S`\(u_n=u_1r^{\,n-1}\)`],
    ["test", S`differences \(u_{n+1}-u_n\) all equal`, S`ratios \(u_{n+1}/u_n\) all equal`],
    ["graph of the terms", "points on a straight line", "points on an exponential curve"],
    ["three terms a, b, c", S`\(b=\frac{a+c}{2}\) (\(2b=a+c\))`, S`\(b^2=ac\)`],
  ])}
  ${fig(seqDoc(ari(2, 3, 7), { color: "blue", label: "ends" }), "Arithmetic: 2, 5, 8, … (d = 3). The points lie on a line with gradient d")}
  ${fig(seqDoc(geo(1, 2, 7), { color: "violet", label: "ends" }), "Geometric: 1, 2, 4, … (r = 2). The gaps double each step")}
  ${keyIdea(S`Arithmetic sequences are linear functions of \(n\); geometric sequences are exponential functions of \(n\). With \(r>1\) a geometric sequence eventually overtakes any arithmetic one.`)}`),

  section("📌 Ratios that are negative or less than 1", S`
  <p>If \(0<r<1\) the terms shrink towards 0 (decay). If \(r<0\) the signs alternate. Both are still geometric.</p>
  ${fig(seqDoc(geo(16, -0.5, 7), { color: "red", label: "all" }), "16, −8, 4, −2, … has r = −0.5: the terms alternate in sign and shrink towards 0")}
  ${watchOut([
    "The exponent is n − 1, not n: the first term has no factor of r.",
    "r = (next term) ÷ (this term), in that order: for 81, 27, … r = 27/81 = 1/3, not 3.",
    "A position n must be a positive whole number — round a solution of an inequality UP to the next whole number.",
    "r³ = −8 has one real solution r = −2, but r² = 9 has two, r = ±3: check both.",
  ])}`),

  section("📌 Explore", S`<p>Switch between arithmetic and geometric, and move \(u_1\), \(d\) or \(r\). Notice the straight-line pattern for arithmetic sequences and the curving pattern for geometric ones, and what a negative \(r\) does.</p>`),

  widget("sequenceLab", { init: ["ari", 3, 2] }),

  examples([
    ["Level 1 · Arithmetic general term", S`For \(7, 11, 15, \dots\) find the general term and \(u_{20}\).`,
      [S`\(d=11-7=4\).`, S`\(u_n=7+(n-1)4=4n+3\).`, S`\(u_{20}=80+3=83\).`],
      S`\(u_n=4n+3\), \(u_{20}=83\)`,
      fig(seqDoc(ari(7, 4, 5), { color: "blue", label: "all" }))],
    ["Level 1 · Geometric general term", S`For \(81, 27, 9, \dots\) find the general term and \(u_7\).`,
      [S`\(r=\frac{27}{81}=\frac13\).`, S`\(u_n=81\left(\tfrac13\right)^{n-1}\).`, S`\(u_7=81\left(\tfrac13\right)^6=\frac{81}{729}=\frac19\).`],
      S`\(u_n=81\left(\tfrac13\right)^{n-1}\), \(u_7=\tfrac19\)`,
      fig(seqDoc(geo(81, 1 / 3, 5), { color: "violet", label: "all" }))],
    ["Level 2 · Two arithmetic terms", S`An arithmetic sequence has \(u_5=17\) and \(u_{12}=45\). Find \(u_1\) and \(d\), and decide which term equals 157.`,
      [S`From \(u_5\) to \(u_{12}\) is 7 steps: \(7d=45-17=28\), so \(d=4\).`, S`\(u_1=17-4(4)=1\), so \(u_n=4n-3\).`, S`\(4n-3=157\Rightarrow n=40\).`],
      S`\(u_1=1\), \(d=4\); \(u_{40}=157\)`],
    ["Level 2 · Two geometric terms", S`A geometric sequence has \(u_3=12\) and \(u_6=-96\). Find \(r\), \(u_1\) and \(u_{10}\).`,
      [S`\(\frac{u_6}{u_3}=r^3=\frac{-96}{12}=-8\), so \(r=-2\).`, S`\(u_1=\frac{12}{(-2)^2}=3\).`, S`\(u_{10}=3(-2)^9=-1536\).`],
      S`\(r=-2\), \(u_1=3\), \(u_{10}=-1536\)`,
      fig(seqDoc(geo(3, -2, 6), { color: "red", label: "all" }))],
    ["Level 3 · The first term above a value", S`For \(3, 4.5, 6.75, \dots\), find the first term greater than 1000.`,
      [S`\(r=1.5\), so \(u_n=3(1.5)^{n-1}\). Solve \(3(1.5)^{n-1}>1000\).`, S`\((1.5)^{n-1}>333.3\Rightarrow n-1>\frac{\ln 333.3}{\ln 1.5}\approx14.33\).`, S`So \(n-1=15\), \(n=16\): \(u_{16}=3(1.5)^{15}\approx1313.7\). Check: \(u_{15}\approx875.8<1000\).`],
      S`\(u_{16}\approx1313.7\)`],
  ]),

  practice([
    q("Level 1 · arithmetic", S`\(u_1=-4\) and \(d=3\). Find \(u_{15}\).`, num(38),
      "u₁ + 14d.", [S`\(-4+42\).`], S`\(38\)`),
    q("Level 1 · geometric", S`\(u_1=5\) and \(r=2\). Find \(u_6\).`, num(160),
      "u₁ r⁵.", [S`\(5(32)\).`], S`\(160\)`),
    q("Level 2 · two terms", S`An arithmetic sequence has \(u_3=10\) and \(u_8=35\). Find \(u_1\).`, num(0),
      "Find d first.", [S`\(5d=25\Rightarrow d=5\); \(u_1=10-2(5)\).`], S`\(0\)`),
    q("Level 2 · number of terms", S`How many terms are in \(12, 17, 22, \dots, 222\)?`, num(43),
      "Solve uₙ = 222.", [S`\(12+5(n-1)=222\Rightarrow n-1=42\).`], S`\(43\)`),
    q("Level 2 · classify", S`The sequence \(5, -10, 20, -40, \dots\) is:`, choice(["geometric with r = −2", "arithmetic with d = −15", "geometric with r = 2", "neither"], 0),
      "Divide consecutive terms.", [S`\(-10\div5=-2\), \(20\div(-10)=-2\).`], S`geometric, \(r=-2\)`),
  ]),

  ...hard([
    ["Three consecutive terms", S`\(x-2\), \(10\) and \(x+19\) are consecutive terms of a geometric sequence. Find the possible values of \(x\) and the common ratio in each case.`,
      [S`For geometric terms \(b^2=ac\): \((x-2)(x+19)=100\).`, S`\(x^2+17x-38=100\Rightarrow x^2+17x-138=0\Rightarrow(x-6)(x+23)=0\).`, S`\(x=6\): terms \(4, 10, 25\), \(r=2.5\). \(x=-23\): terms \(-25, 10, -4\), \(r=-0.4\).`],
      S`\(x=6\) (\(r=2.5\)) or \(x=-23\) (\(r=-0.4\))`,
      fig(seqDoc([4, 10, 25], { color: "violet", label: "all" }), "The case x = 6: 4, 10, 25")],
    ["Arithmetic terms that are geometric", S`An arithmetic sequence has \(u_1=2\) and \(d\ne0\). Its 1st, 3rd and 9th terms are consecutive terms of a geometric sequence. Find \(d\) and the common ratio.`,
      [S`The terms are \(2\), \(2+2d\), \(2+8d\).`, S`Geometric: \((2+2d)^2=2(2+8d)\Rightarrow4+8d+4d^2=4+16d\Rightarrow4d^2-8d=0\).`, S`\(d\ne0\), so \(d=2\): the terms are \(2, 6, 18\), ratio 3.`],
      S`\(d=2\), ratio 3`],
  ], [
    q("Level 3 · geometric", S`A geometric sequence has \(u_2=6\) and \(u_5=162\). Find \(u_8\).`, num(4374),
      "r³ = 162/6.", [S`\(r=3\), \(u_1=2\), \(u_8=2(3^7)\).`], S`\(4374\)`),
    q("Level 3 · first term above", S`For \(7, 19, 31, \dots\), what is the first term greater than 500?`, num(511),
      "Solve 7 + 12(n − 1) > 500.", [S`\(n-1>41.08\Rightarrow n=43\); \(7+12(42)\).`], S`\(511\)`),
    q("Level 3 · first term below", S`For \(2000, 1600, 1280, \dots\), which term is the first below 100? Give \(n\).`, num(15),
      "r = 0.8; solve 2000(0.8)ⁿ⁻¹ < 100.", [S`\((0.8)^{n-1}<0.05\Rightarrow n-1>13.4\).`], S`\(n=15\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I tell the two apart quickly?", "Check differences first; if they are not equal, check ratios. If neither is constant, the sequence is neither arithmetic nor geometric."],
      ["Why n − 1 in both formulas?", "Getting from u₁ to uₙ takes n − 1 steps."],
      ["How do I solve for n in a geometric sequence?", "Use logarithms (or a GDC table): n − 1 > ln(target/u₁) / ln r for r > 1. Logarithms are developed fully in chapter 9."],
      ["Can r be 0 or 1?", "r = 1 gives a constant sequence; r = 0 is not used, because every later term would be 0."],
      ["Does a negative d mean the sequence is geometric?", "No. A negative d just means an arithmetic sequence that decreases."],
    ],
    summary: [
      "Arithmetic: uₙ = u₁ + (n − 1)d, linear points.",
      "Geometric: uₙ = u₁rⁿ⁻¹, exponential points; r < 0 alternates, 0 < r < 1 decays.",
      "Two terms: the gap in positions gives d (subtract) or r (divide, then take a root).",
      "Positions are whole numbers: round up when solving an inequality.",
    ],
    next: "1.3 adds the terms: arithmetic and geometric series, and the sum to infinity.",
  }),
];
