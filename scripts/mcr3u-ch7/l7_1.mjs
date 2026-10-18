// MCR3U 7.1 — Arithmetic Sequences: common difference, general term, recursive formula, function notation, discrete
// linear graphs, finding a term number, finding a and d from two terms
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.1 Arithmetic Sequences";
export const ID = "e008e3d6-ea57-408c-b466-d7628de67198";
const S = String.raw;
const pts = (f, n) => Array.from({ length: n }, (_, i) => ({ x: i + 1, y: f(i + 1) }));

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Arithmetic Sequences",
    overview: S`A <strong>sequence</strong> is an ordered list of numbers called terms. In an <strong>arithmetic sequence</strong> you add the same number, the common difference \(d\), to get from one term to the next. In this lesson you will write a formula for the \(n\)th term, \(t_n=a+(n-1)d\), describe the same sequence recursively, and see that its graph is a set of points on a straight line — a discrete linear function.`,
    goals: [
      "recognise an arithmetic sequence and find its common difference;",
      "write the general term t_n = a + (n − 1)d and use it for any term;",
      "write a recursive formula and convert between the two forms;",
      "find which term has a given value;",
      "find a and d from any two terms.",
    ],
    curriculum: "C1.1 (make connections between sequences and discrete functions, represent sequences using function notation, and distinguish between a discrete function and a continuous function), C1.3, C1.4 (represent a sequence algebraically using a recursion formula, function notation or the formula for the nth term), C3.1, C3.2 (determine the formula for the general term of an arithmetic sequence and apply it)",
    prior: [
      ["What is the slope of y = 4x − 1?", "4."],
      ["Solve 3n + 2 = 59.", "n = 19."],
      ["Find the next number: 11, 8, 5, …", "2."],
    ],
    words: [
      ["Term \\(t_n\\)", "the term in position n; \\(t_1=a\\) is the first term", ""],
      ["Common difference d", "\\(t_n-t_{n-1}\\), the same for every n", ""],
      ["General (explicit) term", "\\(t_n=a+(n-1)d\\)", ""],
      ["Recursive formula", "\\(t_1=a,\\ t_n=t_{n-1}+d\\)", ""],
    ],
  }),

  section("📌 Four ways to describe one sequence", S`
  ${table(["Form", "Example: 3, 7, 11, 15, …"], [["List", "3, 7, 11, 15, 19, …"], ["General term", "\\(t_n=3+(n-1)4=4n-1\\)"], ["Recursive", "\\(t_1=3,\\ t_n=t_{n-1}+4\\)"], ["Function", "\\(f(n)=4n-1\\), \\(n\\in\\{1,2,3,\\ldots\\}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 26 }, points: pts((n) => 4 * n - 1, 6), lines: [{ m: 4, b: -1, color: "gray", dash: true }], step: { x: 1, y: 2 }, xlabel: "n", ylabel: "tₙ" }, "the terms are points on the line y = 4x − 1 — but only at whole numbers n")}
  ${keyIdea(S`A sequence is a <strong>discrete</strong> function: its domain is \(\{1,2,3,\ldots\}\), so its graph is separate points, not a solid line. For an arithmetic sequence the points lie on a line with slope \(d\).`)}`),

  section("📌 Explore", S`<p>Change the first term and the common difference. Watch the slope of the points and the general term.</p>`),

  widget("arithLab", { init: [5, 3] }),

  section("📌 Watch out", watchOut([
    "d = (any term) − (the term before it), not the other way around.",
    "The formula uses (n − 1), because the first term has had no differences added yet.",
    "A term number n must be a positive whole number; if you get a fraction, the value is not a term.",
    "Do not join the points with a line when graphing a sequence.",
  ])),

  examples([
    ["Extending a sequence", "Is 7, 12, 17, 22, … arithmetic? Give the next two terms.",
      ["Each difference is 5, so yes, with d = 5."],
      "27, 32"],
    ["The general term", S`Find \(t_n\) and \(t_{20}\) for \(40, 34, 28,\ldots\)`,
      [S`\(a=40\), \(d=-6\): \(t_n=40+(n-1)(-6)=46-6n\).`, S`\(t_{20}=46-120\).`],
      S`\(t_n=46-6n\), \(t_{20}=-74\)`],
    ["Which term?", "Which term of 5, 9, 13, … is 201?",
      [S`\(t_n=4n+1=201\Rightarrow n=50\).`],
      "the 50th term"],
    ["From two terms", S`An arithmetic sequence has \(t_4=19\) and \(t_{11}=54\). Find its general term.`,
      [S`From term 4 to term 11 is 7 differences: \(7d=35\Rightarrow d=5\).`, S`\(t_4=a+3(5)=19\Rightarrow a=4\).`],
      S`\(t_n=5n-1\)`,
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 60 }, points: [{ x: 4, y: 19, label: "(4, 19)" }, { x: 11, y: 54, label: "(11, 54)" }, ...pts((n) => 5 * n - 1, 11).filter((p) => p.x !== 4 && p.x !== 11).map((p) => ({ ...p, color: "gray" }))], step: { x: 1, y: 5 }, xlabel: "n", ylabel: "tₙ" })],
    ["Recursive to explicit", S`A sequence has \(t_1=-3\) and \(t_n=t_{n-1}+4\). Write it in function notation and find \(f(10)\).`,
      [S`Arithmetic with \(a=-3\), \(d=4\): \(f(n)=-3+4(n-1)=4n-7\).`],
      S`\(f(10)=33\)`],
  ]),

  practice([
    q("difference", "Find the common difference of 2, 9, 16, 23, …", num(7),
      "Subtract consecutive terms.", [S`\(9-2\).`], S`\(7\)`),
    q("term", S`Find \(t_{15}\) for \(3, 8, 13,\ldots\)`, num(73),
      "a + 14d.", [S`\(3+14(5)\).`], S`\(73\)`),
    q("which term", "Which term of 6, 10, 14, … is 150?", num(37),
      "Solve 4n + 2 = 150.", [S`\(4n=148\).`], S`\(n=37\)`),
    q("recognise", "Which sequence is arithmetic?", choice(["−4, −1, 2, 5, …", "1, 2, 4, 8, …", "1, 4, 9, 16, …", "2, −2, 2, −2, …"], 0),
      "Look for a constant difference.", ["Each step adds 3."], "−4, −1, 2, 5, …"),
    q("formula", S`For \(t_n=2-3n\), find \(t_{10}\).`, num(-28),
      "Substitute n = 10.", [S`\(2-30\).`], S`\(-28\)`),
  ]),

  ...hard([
    ["Two terms and a sign change", S`An arithmetic sequence has \(t_5=23\) and \(t_{12}=-5\). Find \(a\), \(d\) and the first negative term.`,
      [S`\(7d=-28\Rightarrow d=-4\); \(a+4(-4)=23\Rightarrow a=39\).`, S`\(t_n=43-4n<0\Rightarrow n>10.75\): first negative term is \(t_{11}=-1\).`],
      S`\(a=39\), \(d=-4\), \(t_{11}=-1\)`],
    ["Rows of seats", "A theatre's first row has 18 seats and each row has 2 more than the row in front. The last row has 64 seats. How many rows are there?",
      [S`\(18+2(n-1)=64\Rightarrow2(n-1)=46\).`],
      "24 rows",
      plane({ view: { xmin: 0, xmax: 26, ymin: 0, ymax: 70 }, points: pts((n) => 16 + 2 * n, 24).map((p, i) => ({ ...p, label: i === 0 ? "18" : i === 23 ? "64" : undefined })), step: { x: 2, y: 10 }, xlabel: "row", ylabel: "seats" })],
  ], [
    q("hard", "x, 2x + 3 and 5x − 2 are consecutive terms of an arithmetic sequence. Find x.", num(4),
      "The middle term is the average of its neighbours.", [S`\(2(2x+3)=x+5x-2\Rightarrow4x+6=6x-2\).`], S`\(x=4\)`),
    q("hard", "How many terms are in 7, 11, 15, …, 403?", num(100),
      "Solve t_n = 403.", [S`\(7+4(n-1)=403\Rightarrow n-1=99\).`], S`\(100\)`),
    q("hard", S`An arithmetic sequence has \(t_3=11\) and \(t_9=35\). Find \(t_{20}\).`, num(79),
      "Six differences make 24.", [S`\(d=4\), \(a=3\): \(3+19(4)\).`], S`\(79\)`),
  ]),

  wrapUp({
    qas: [
      ["Why (n − 1) and not n?", "To reach term n from term 1 you add the difference n − 1 times."],
      ["How is an arithmetic sequence like a linear function?", "Its terms lie on a line with slope d; only the whole-number points count."],
      ["When is a recursive formula useful?", "When you build terms step by step, as in a spreadsheet; the general term is faster for far-away terms."],
      ["How can I tell a value is not a term?", "Solving t_n = value gives a non-whole n."],
      ["What if I know two terms but not the first?", "Divide their difference by the number of steps between them to get d, then work back to a."],
    ],
    summary: [
      "t_n = a + (n − 1)d.",
      "Recursive: t₁ = a, tₙ = tₙ₋₁ + d.",
      "Graph: discrete points on a line of slope d.",
      "Two terms → d → a.",
    ],
    next: "7.2 studies sequences with a common ratio.",
  }),
];
