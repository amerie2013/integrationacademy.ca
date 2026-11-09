// MCF3M 4.4 — The Discriminant and the Number of Roots: D > 0, D = 0, D < 0; link to x-intercepts; finding k for a
// given number of roots; perfect-square D and factoring; a context (can it reach a height?).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "4.4 The Discriminant and the Number of Roots";

export const blocks = () => [
  intro({
    icon: "🔎",
    title: "The Discriminant and the Number of Roots",
    overview: S`In the quadratic formula, the expression under the square root, \(D=b^2-4ac\), is called the <b>discriminant</b>. It decides how many real roots the equation has, without solving it: a positive number has two square roots, zero has one, and a negative number has none. On the graph this is the number of \(x\)-intercepts. The discriminant also answers questions such as "can this ball ever reach 30 m?" in one line of arithmetic.`,
    goals: [
      "compute the discriminant \\(D=b^2-4ac\\);",
      "relate \\(D>0\\), \\(D=0\\), \\(D<0\\) to two, one or no real roots and x-intercepts;",
      "use the discriminant to decide whether a quadratic factors over the integers;",
      "find values of a parameter k that give a required number of roots;",
      "use the discriminant to decide whether a value can be reached in context.",
    ],
    curriculum: "A1.7 (relate the real roots of a quadratic equation to the x-intercepts of the graph, and connect the number of real roots to the value of the discriminant)",
    prior: [
      [S`Evaluate \((-6)^2-4(2)(3)\).`, S`\(36-24=12\).`],
      [S`How many x-intercepts does \(y=(x-2)^2\) have?`, S`One.`],
      [S`Is \(49\) a perfect square?`, S`Yes, \(7^2\).`],
    ],
    words: [
      ["Discriminant", "\\(D=b^2-4ac\\)", "\\(x^2-4x+1\\): \\(D=12\\)"],
      ["Two distinct roots", "D > 0", "graph crosses twice"],
      ["One (double) root", "D = 0", "graph touches the axis"],
      ["No real roots", "D < 0", "graph misses the axis"],
      ["Rational roots", "D is a perfect square (a, b, c integers)", "factors over the integers"],
    ],
  }),

  section("📌 What the discriminant tells you", S`
  ${table(["Discriminant", "Real roots", "Graph of y = ax² + bx + c", "Example"], [
    ["\\(D>0\\)", "two different", "crosses the x-axis twice", "\\(x^2-2x-3\\): D = 16"],
    ["\\(D=0\\)", "one (repeated)", "touches the x-axis at the vertex", "\\(x^2-6x+9\\): D = 0"],
    ["\\(D<0\\)", "none", "does not meet the x-axis", "\\(x^2+x+3\\): D = −11"],
  ])}
  ${plane({ view: { xmin: -3, xmax: 6, ymin: -5, ymax: 9 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }, { f: (x) => (x - 3) ** 2, color: "blue" }, { f: (x) => x * x + x + 3, color: "red" }], step: { x: 1, y: 1 } }, "Violet D = 16 (two), blue D = 0 (one), red D = −11 (none).")}
  ${keyIdea(S`Why it works: the formula gives \(x=\frac{-b\pm\sqrt D}{2a}\). If \(D>0\) the \(\pm\) gives two different values; if \(D=0\) both are \(-\frac b{2a}\); if \(D<0\) the square root is not a real number. Extra: when \(a,b,c\) are integers and \(D\) is a perfect square, the roots are rational and the quadratic factors over the integers.`)}`),

  widget("discriminantLab", { init: [1, -4, 1] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Rearrange to ax² + bx + c = 0 before reading a, b, c.",
    "Square b with its sign: b = −7 gives b² = 49.",
    "−4ac with a and c both negative is negative: a = −2, c = −3 gives −4ac = −24.",
    "D = 0 still means one REAL root, not none.",
    "A positive D that is not a perfect square still gives two real (irrational) roots.",
  ])}`),

  examples([
    ["Count the roots", S`Find the number of real roots of (a) \(2x^2-5x+1=0\); (b) \(4x^2-12x+9=0\); (c) \(3x^2+2x+4=0\).`,
      [S`<b>(a)</b> \(D=25-8=17>0\): two real roots.`,
        S`<b>(b)</b> \(D=144-144=0\): one real root (the graph touches the axis at \(x=1.5\)).`,
        S`<b>(c)</b> \(D=4-48=-44<0\): no real roots.`,
        S`<b>Check (b).</b> \(4x^2-12x+9=(2x-3)^2\) ✓`],
      S`(a) two; (b) one; (c) none`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 9 }, curves: [{ f: (x) => 2 * x * x - 5 * x + 1, color: "violet" }, { f: (x) => 4 * x * x - 12 * x + 9, color: "blue" }, { f: (x) => 3 * x * x + 2 * x + 4, color: "red" }], step: { x: 1, y: 1 } })],

    ["Does it factor?", S`Use the discriminant to decide whether each factors over the integers: (a) \(6x^2+x-12\); (b) \(x^2+5x+2\).`,
      [S`<b>(a)</b> \(D=1+288=289=17^2\): a perfect square, so it factors. Roots \(\frac{-1\pm17}{12}=\frac43\) or \(-\frac32\): \((3x-4)(2x+3)\).`,
        S`<b>(b)</b> \(D=25-8=17\), not a perfect square: no integer factors (the roots are irrational).`,
        S`<b>Check (a).</b> \((3x-4)(2x+3)=6x^2+9x-8x-12\) ✓`],
      S`(a) factors: (3x − 4)(2x + 3); (b) does not factor over the integers`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -14, ymax: 10 }, curves: [{ f: (x) => 6 * x * x + x - 12, color: "violet" }], points: [{ x: 4 / 3, y: 0, label: "(1.33, 0)", color: "amber" }, { x: -1.5, y: 0, label: "(−1.5, 0)", color: "amber" }], step: { x: 1, y: 2 } })],

    ["Find k for one root", S`For which values of \(k\) does \(x^2+kx+16=0\) have exactly one real root?`,
      [S`<b>Condition.</b> One root means \(D=0\).`,
        S`<b>Discriminant.</b> \(D=k^2-4(1)(16)=k^2-64\).`,
        S`<b>Solve.</b> \(k^2=64\Rightarrow k=8\) or \(k=-8\).`,
        S`<b>Check.</b> \(k=8\): \((x+4)^2\); \(k=-8\): \((x-4)^2\) ✓`],
      S`k = 8 or k = −8`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -1, ymax: 12 }, curves: [{ f: (x) => (x + 4) ** 2, color: "violet" }, { f: (x) => (x - 4) ** 2, color: "blue" }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "violet" }, { x: 4, y: 0, label: "(4, 0)", color: "blue" }], step: { x: 1, y: 2 } })],

    ["Find k for two roots", S`For which values of \(k\) does \(2x^2-4x+k=0\) have two real roots?`,
      [S`<b>Condition.</b> \(D>0\).`,
        S`<b>Discriminant.</b> \(16-8k\).`,
        S`<b>Inequality.</b> \(16-8k>0\Rightarrow8k<16\Rightarrow k<2\).`,
        S`<b>Graph check.</b> \(y=2x^2-4x\) has minimum \(-2\) at \(x=1\); adding \(k\) lifts it to \(k-2\). Two crossings need \(k-2<0\) ✓`],
      S`k < 2`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 6 }, curves: [{ f: (x) => 2 * x * x - 4 * x, color: "violet" }, { f: (x) => 2 * x * x - 4 * x + 2, color: "blue" }, { f: (x) => 2 * x * x - 4 * x + 3, color: "red" }], step: { x: 1, y: 1 } })],

    ["Can it reach that height?", S`A ball's height is \(h(t)=-5t^2+18t+1\) m. Can it reach \(18\) m? \(17\) m?`,
      [S`<b>18 m.</b> \(-5t^2+18t-17=0\): \(D=324-4(-5)(-17)=324-340=-16<0\). No.`,
        S`<b>17 m.</b> \(-5t^2+18t-16=0\): \(D=324-320=4>0\). Yes, at two times.`,
        S`<b>Interpret.</b> The maximum height lies between \(17\) and \(18\) m: vertex at \(t=1.8\), \(h=-16.2+32.4+1=17.2\) m ✓`,
        S`<b>Times for 17 m.</b> \(t=\frac{-18\pm2}{-10}=1.6\) or \(2\).`],
      S`18 m: no (D < 0); 17 m: yes, at t = 1.6 s and 2 s`,
      plane({ view: { xmin: -0.3, xmax: 4, ymin: -1, ymax: 20 }, curves: [{ f: (t) => -5 * t * t + 18 * t + 1, a: 0, b: 3.65, color: "violet" }], lines: [{ m: 0, b: 18, color: "red", dash: true }, { m: 0, b: 17, color: "green", dash: true }], points: [{ x: 1.8, y: 17.2, label: "(1.8, 17.2)", color: "amber" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("d", S`Enter the discriminant of \(3x^2-7x+2=0\).`, num(25), "49 − 24.", [S`\(D=25\).`], S`\(25\)`),
    q("count", S`How many real roots does \(x^2-10x+25=0\) have?`, num(1), "D = 100 − 100.", [S`\(D=0\).`], S`\(1\)`),
    q("count", S`How many real roots does \(-2x^2+3x-5=0\) have?`, num(0), "D = 9 − 40.", [S`\(D=-31<0\).`], S`\(0\)`),
    q("k", S`Enter the positive \(k\) for which \(x^2+kx+25=0\) has one root.`, num(10), "k² = 100.", [S`\(k^2-100=0\).`], S`\(10\)`),
    q("factor", S`Does \(2x^2+7x+4\) factor over the integers?`, choice(["No", "Yes"], 0), "D = 49 − 32 = 17.", [S`\(17\) is not a perfect square.`], S`No`),
  ]),

  ...hard([
    ["A range of k", S`For which values of \(k\) does \(kx^2+6x+3=0\) have no real roots?`,
      [S`<b>Condition.</b> \(D<0\): \(36-12k<0\Rightarrow k>3\).`,
        S`<b>Check \(k=4\).</b> \(D=36-48=-12<0\) ✓; \(k=3\): \(D=0\) (one root).`,
        S`<b>Answer.</b> \(k>3\).`],
      S`k > 3`],
    ["A line and a parabola", S`Find the values of \(m\) for which the line \(y=mx\) touches the parabola \(y=x^2+4\) at exactly one point.`,
      [S`<b>Set equal.</b> \(x^2+4=mx\Rightarrow x^2-mx+4=0\).`,
        S`<b>One intersection.</b> \(D=m^2-16=0\Rightarrow m=\pm4\).`,
        S`<b>Check \(m=4\).</b> \(x^2-4x+4=(x-2)^2\): touch at \((2,\,8)\) ✓`],
      S`m = 4 or m = −4`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -12, ymax: 14 }, curves: [{ f: (x) => x * x + 4, color: "violet" }], lines: [{ m: 4, b: 0, color: "blue" }, { m: -4, b: 0, color: "green" }], points: [{ x: 2, y: 8, label: "(2, 8)", color: "amber" }, { x: -2, y: 8, label: "(−2, 8)", color: "amber" }], step: { x: 1, y: 2 } })],
  ], [
    q("hard", S`Enter the largest integer \(k\) for which \(x^2-6x+k=0\) has two real roots.`, num(8), "36 − 4k > 0.", [S`\(k<9\).`], S`\(8\)`),
    q("hard", S`For which \(k\) does \(4x^2+kx+9=0\) have one root with \(k<0\)?`, num(-12), "k² = 144.", [S`\(k=-12\).`], S`\(-12\)`),
    q("hard", S`\(h(t)=-5t^2+20t+2\). Enter the largest whole number of metres the object reaches.`, num(22), "Max at t = 2.", [S`\(h(2)=22\); for \(h=23\), \(D=400-4(-5)(-21)=-20<0\).`], S`\(22\)`),
    q("hard", S`How many times does the line \(y=2x-1\) meet \(y=x^2\)?`, num(1), "x² − 2x + 1 = 0.", [S`\(D=4-4=0\).`], S`\(1\)`),
    q("hard", S`For which \(c\) is the discriminant of \(x^2+7x+c\) equal to \(1\)? (Then it factors.)`, num(12), "49 − 4c = 1.", [S`\(c=12\): \((x+3)(x+4)\).`], S`\(12\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the discriminant?", "D = b² − 4ac, the expression under the square root in the quadratic formula."],
      ["How does D count the roots?", "D > 0: two; D = 0: one; D < 0: none."],
      ["What does D mean on the graph?", "The number of x-intercepts of y = ax² + bx + c."],
      ["How can D show a quadratic factors?", "With integer coefficients, D must be a perfect square."],
      ["How do I find k for one root?", "Set D = 0 and solve for k."],
    ],
    summary: [
      "D = b² − 4ac.",
      "D > 0 two roots; D = 0 one; D < 0 none.",
      "Perfect-square D ⇒ rational roots ⇒ factors.",
      "Use D to answer reach/touch questions.",
    ],
    next: "4.5 solves maximum and minimum problems using the vertex.",
  }),
];
