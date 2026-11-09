// MCF3M 4.3 — The Quadratic Formula: development by completing the square (numeric example beside the general case),
// using the formula, exact and decimal roots, rearranging first, choosing a strategy, a context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, rootsT, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "4.3 The Quadratic Formula";

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "The Quadratic Formula",
    overview: S`Factoring only works when a quadratic splits into nice factors, and graphing gives estimates. The <b>quadratic formula</b> always works: the roots of \(ax^2+bx+c=0\) are \[x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.\] It comes from completing the square on the general equation, exactly the steps you used in 4.2. This lesson follows that development beside a numeric example, then uses the formula to find exact and decimal roots and compares it with factoring and graphing.`,
    goals: [
      "follow the development of the quadratic formula by completing the square, step by step beside a numeric example;",
      "identify \\(a\\), \\(b\\) and \\(c\\) after writing an equation in the form \\(ax^2+bx+c=0\\);",
      "use the formula to find exact roots (with radicals) and decimal approximations;",
      "check roots by substitution or with a graph;",
      "choose between factoring, graphing and the formula, and describe the advantages of each.",
    ],
    curriculum: "A1.6 (explore the algebraic development of the quadratic formula and apply it to solve quadratic equations, using technology), A1.8 (determine real roots of quadratic equations and describe the advantages and disadvantages of graphing, factoring and the quadratic formula)",
    prior: [
      [S`Complete the square: \(x^2+6x+2\).`, S`\((x+3)^2-7\).`],
      [S`Simplify \(\sqrt{48}\).`, S`\(4\sqrt3\).`],
      [S`Solve \((x-2)^2=5\).`, S`\(x=2\pm\sqrt5\).`],
    ],
    words: [
      ["Quadratic formula", "\\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)", "roots of \\(ax^2+bx+c=0\\)"],
      ["Coefficients", "a, b, c in standard form", "\\(2x^2-3x-5\\): a = 2, b = −3, c = −5"],
      ["Discriminant", "\\(b^2-4ac\\), the part under the root", "next lesson"],
      ["Exact root", "a root written with a radical", "\\(2+\\sqrt5\\)"],
      ["Approximate root", "a rounded decimal", "\\(\\approx4.24\\)"],
    ],
  }),

  section("📌 Where the formula comes from", S`
  ${table(["Step", "Numeric: \\(2x^2+8x+3=0\\)", "General: \\(ax^2+bx+c=0\\)"], [
    ["Divide by a", "\\(x^2+4x+\\tfrac32=0\\)", "\\(x^2+\\tfrac bax+\\tfrac ca=0\\)"],
    ["Move the constant", "\\(x^2+4x=-\\tfrac32\\)", "\\(x^2+\\tfrac bax=-\\tfrac ca\\)"],
    ["Add (half of x-coefficient)²", "\\(x^2+4x+4=-\\tfrac32+4\\)", "\\(x^2+\\tfrac bax+\\tfrac{b^2}{4a^2}=\\tfrac{b^2}{4a^2}-\\tfrac ca\\)"],
    ["Write the square", "\\((x+2)^2=\\tfrac52\\)", "\\(\\left(x+\\tfrac b{2a}\\right)^2=\\tfrac{b^2-4ac}{4a^2}\\)"],
    ["Square-root both sides", "\\(x+2=\\pm\\sqrt{\\tfrac52}\\)", "\\(x+\\tfrac b{2a}=\\pm\\tfrac{\\sqrt{b^2-4ac}}{2a}\\)"],
    ["Solve for x", "\\(x=-2\\pm\\sqrt{2.5}\\)", "\\(x=\\tfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)"],
  ])}
  ${keyIdea(S`To use the formula: (1) write the equation as \(ax^2+bx+c=0\); (2) list \(a,b,c\) with their signs; (3) substitute, using brackets; (4) simplify the discriminant \(b^2-4ac\) first; (5) give exact roots and/or decimals as asked.`)}
  ${plane({ view: { xmin: -5, xmax: 1, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 2 * x * x + 8 * x + 3, color: "violet" }], points: [{ x: -2 + Math.sqrt(2.5), y: 0, label: "(−0.42, 0)", color: "amber" }, { x: -2 - Math.sqrt(2.5), y: 0, label: "(−3.58, 0)", color: "amber" }], step: { x: 1, y: 1 } }, "The roots −2 ± √2.5 ≈ −0.42 and −3.58 are the x-intercepts of y = 2x² + 8x + 3.")}`),

  widget("formulaLab", { init: [2, 8, 3] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The whole numerator −b ± √(…) is divided by 2a, not just the square root.",
    "If b is negative, −b is positive: for b = −5, −b = 5.",
    "Square b with its sign: (−5)² = 25, not −25.",
    "Rearrange to = 0 first; the formula does not apply to 2x² = 3x + 1 as written.",
    "A negative discriminant means no real roots — you cannot take its square root.",
  ])}`),

  examples([
    ["Roots that are integers", S`Solve \(x^2-2x-15=0\) with the formula and check by factoring.`,
      [S`<b>Coefficients.</b> \(a=1\), \(b=-2\), \(c=-15\).`,
        S`<b>Discriminant.</b> \(b^2-4ac=(-2)^2-4(1)(-15)=4+60=64\).`,
        S`<b>Formula.</b> \(x=\frac{2\pm\sqrt{64}}{2}=\frac{2\pm8}2\), so \(x=5\) or \(x=-3\).`,
        S`<b>Check by factoring.</b> \((x-5)(x+3)=0\) ✓`,
        S`<b>Conclusion.</b> When the discriminant is a perfect square, the equation also factors over the integers.`],
      S`\(x=5\) or \(x=-3\)`,
      plane({ view: { xmin: -5, xmax: 7, ymin: -17, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x - 15, color: "violet" }], points: [{ x: 5, y: 0, label: "(5, 0)", color: "amber" }, { x: -3, y: 0, label: "(−3, 0)", color: "amber" }], step: { x: 1, y: 3 } })],

    ["Irrational roots", S`Solve \(2x^2-6x+1=0\). Give exact roots and decimals to two places.`,
      [S`<b>Coefficients.</b> \(a=2\), \(b=-6\), \(c=1\).`,
        S`<b>Discriminant.</b> \(36-8=28\).`,
        S`<b>Formula.</b> \(x=\frac{6\pm\sqrt{28}}{4}=\frac{6\pm2\sqrt7}{4}=\frac{3\pm\sqrt7}{2}\).`,
        S`<b>Decimals.</b> \(\sqrt7\approx2.6458\): \(x\approx2.82\) or \(x\approx0.18\).`,
        S`<b>Check.</b> \(2(2.82)^2-6(2.82)+1\approx15.90-16.92+1\approx-0.02\approx0\) ✓ (rounding)`],
      S`\(x=\frac{3\pm\sqrt7}{2}\approx2.82,\ 0.18\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 2 * x * x - 6 * x + 1, color: "violet" }], points: [{ x: (3 + Math.sqrt(7)) / 2, y: 0, label: "(2.82, 0)", color: "amber" }, { x: (3 - Math.sqrt(7)) / 2, y: 0, label: "(0.18, 0)", color: "amber" }], step: { x: 1, y: 1 } })],

    ["Rearrange first", S`Solve \(3x^2=5x+4\) to two decimal places.`,
      [S`<b>Standard form.</b> \(3x^2-5x-4=0\): \(a=3\), \(b=-5\), \(c=-4\).`,
        S`<b>Discriminant.</b> \(25-4(3)(-4)=25+48=73\).`,
        S`<b>Formula.</b> \(x=\frac{5\pm\sqrt{73}}{6}\); \(\sqrt{73}\approx8.544\).`,
        S`<b>Roots.</b> \(x\approx\frac{13.544}6\approx2.26\) or \(x\approx\frac{-3.544}6\approx-0.59\).`,
        S`<b>Check.</b> \(3(2.26)^2\approx15.32\) and \(5(2.26)+4=15.30\) ✓`],
      S`\(x\approx2.26\) or \(x\approx-0.59\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -7, ymax: 10 }, curves: [{ f: (x) => 3 * x * x - 5 * x - 4, color: "violet" }], points: [{ x: (5 + Math.sqrt(73)) / 6, y: 0, label: "(2.26, 0)", color: "amber" }, { x: (5 - Math.sqrt(73)) / 6, y: 0, label: "(−0.59, 0)", color: "amber" }], step: { x: 1, y: 2 } })],

    ["When there are no real roots", S`Use the formula on \(x^2+2x+5=0\).`,
      [S`<b>Coefficients.</b> \(a=1\), \(b=2\), \(c=5\).`,
        S`<b>Discriminant.</b> \(4-20=-16\).`,
        S`<b>Interpret.</b> No real number squares to \(-16\), so there are no real roots.`,
        S`<b>Graph check.</b> \(y=(x+1)^2+4\) has minimum \(4>0\): it never meets the \(x\)-axis ✓`],
      S`no real roots`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -1, ymax: 10 }, curves: [{ f: (x) => x * x + 2 * x + 5, color: "violet" }], points: [{ x: -1, y: 4, label: "(−1, 4)", color: "amber" }], step: { x: 1, y: 1 } })],

    ["A ball's flight", S`A ball is kicked: \(h(t)=-4.9t^2+15t+0.5\) m. When does it land (two decimals)?`,
      [S`<b>Equation.</b> \(-4.9t^2+15t+0.5=0\): \(a=-4.9\), \(b=15\), \(c=0.5\). It does not factor nicely, so use the formula.`,
        S`<b>Discriminant.</b> \(225-4(-4.9)(0.5)=225+9.8=234.8\); \(\sqrt{234.8}\approx15.323\).`,
        S`<b>Formula.</b> \(t=\frac{-15\pm15.323}{-9.8}\): \(t\approx-0.03\) or \(t\approx3.09\).`,
        S`<b>Interpret.</b> Reject the negative time: the ball lands after about \(3.09\) s.`,
        S`<b>Check.</b> \(h(3.09)\approx-46.79+46.35+0.5=0.06\approx0\) ✓`],
      S`about 3.09 s`,
      plane({ view: { xmin: -0.3, xmax: 3.6, ymin: -1, ymax: 13 }, curves: [{ f: (t) => -4.9 * t * t + 15 * t + 0.5, a: 0, b: 3.094, color: "violet" }], points: [{ x: 3.094, y: 0, label: "(3.09, 0)", color: "amber" }, { x: 0, y: 0.5, label: "(0, 0.5)", color: "blue" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("int", S`Solve \(x^2+3x-10=0\) with the formula. Enter both roots.`, roots(2, -5), "D = 49.", [S`\(x=\frac{-3\pm7}2\).`], S`\(2,\ -5\)`),
    q("disc", S`For \(2x^2-5x+1=0\), enter the value of \(b^2-4ac\).`, num(17), "(−5)² − 4(2)(1).", [S`\(25-8=17\).`], S`\(17\)`),
    q("dec", S`Solve \(x^2-4x+1=0\). Enter both roots to two decimals.`, rootsT(0.01, 2 + Math.sqrt(3), 2 - Math.sqrt(3)), "x = 2 ± √3.", [S`\(\frac{4\pm\sqrt{12}}2=2\pm\sqrt3\).`], S`\(3.73,\ 0.27\)`),
    q("rearr", S`Solve \(2x^2=3x+2\). Enter both roots.`, roots(2, -0.5), "2x² − 3x − 2 = 0.", [S`\(D=25\): \(x=\frac{3\pm5}4\).`], S`\(2,\ -0.5\)`),
    q("none", S`How many real roots does \(3x^2+x+2=0\) have?`, num(0), "D = 1 − 24.", [S`\(D=-23<0\).`], S`\(0\)`),
  ]),

  ...hard([
    ["Exact form with a radical", S`Solve \(x^2+6x+4=0\) exactly and simplify.`,
      [S`<b>Discriminant.</b> \(36-16=20\).`,
        S`<b>Formula.</b> \(x=\frac{-6\pm\sqrt{20}}2=\frac{-6\pm2\sqrt5}2=-3\pm\sqrt5\).`,
        S`<b>Check with completing the square.</b> \((x+3)^2=5\Rightarrow x=-3\pm\sqrt5\) ✓`],
      S`x = −3 ± √5`,
      plane({ view: { xmin: -7, xmax: 1, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x * x + 6 * x + 4, color: "violet" }], points: [{ x: -3 + Math.sqrt(5), y: 0, label: "(−0.76, 0)", color: "amber" }, { x: -3 - Math.sqrt(5), y: 0, label: "(−5.24, 0)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Power in a circuit", S`A device's power is \(P=24I-1.5I^2\) watts at current \(I\) amperes. For which currents is the power \(90\) W?`,
      [S`<b>Equation.</b> \(-1.5I^2+24I-90=0\Rightarrow I^2-16I+60=0\).`,
        S`<b>Formula.</b> \(D=256-240=16\): \(I=\frac{16\pm4}2=10\) or \(6\).`,
        S`<b>Check.</b> \(P(6)=144-54=90\) ✓; \(P(10)=240-150=90\) ✓`],
      S`I = 6 A or I = 10 A`],
  ], [
    q("hard", S`Solve \(5x^2-2x-1=0\). Enter both roots to two decimals.`, rootsT(0.01, (2 + Math.sqrt(24)) / 10, (2 - Math.sqrt(24)) / 10), "D = 4 + 20 = 24.", [S`\(x=\frac{2\pm\sqrt{24}}{10}\approx0.69,\ -0.29\).`], S`\(0.69,\ -0.29\)`),
    q("hard", S`Solve \(x(x-3)=2x+1\). Enter the larger root to two decimals.`, num((5 + Math.sqrt(29)) / 2, 0.01), "x² − 5x − 1 = 0.", [S`\(x=\frac{5\pm\sqrt{29}}2\).`], S`\(\approx5.19\)`),
    q("hard", S`\(h(t)=-5t^2+20t+3\). Enter the landing time (s) to two decimals.`, num((20 + Math.sqrt(460)) / 10, 0.01), "D = 400 + 60 = 460.", [S`\(t=\frac{-20-\sqrt{460}}{-10}\approx4.14\).`], S`\(\approx4.14\)`),
    q("hard", S`The roots of \(x^2+bx+c=0\) are \(4\pm\sqrt3\). Enter \(c\).`, num(13), "Product of roots.", [S`\((4+\sqrt3)(4-\sqrt3)=16-3=13\).`], S`\(13\)`),
    q("hard", S`Solve \(0.5x^2+2x-3=0\). Enter the positive root to two decimals.`, num(-2 + Math.sqrt(10), 0.01), "Multiply by 2: x² + 4x − 6 = 0.", [S`\(x=-2\pm\sqrt{10}\).`], S`\(\approx1.16\)`),
  ]),

  wrapUp({
    qas: [
      ["Where does the quadratic formula come from?", "Completing the square on ax² + bx + c = 0."],
      ["When should I use it?", "When the quadratic does not factor easily, or you need decimal roots."],
      ["Why use brackets when substituting?", "So negative b and c keep their signs: (−5)² = 25."],
      ["What if b² − 4ac < 0?", "There are no real roots."],
      ["How do the three methods compare?", "Factoring is fast when it works; graphing shows the picture but estimates; the formula always works and is exact."],
    ],
    summary: [
      "x = (−b ± √(b² − 4ac)) / (2a).",
      "Rearrange to = 0 and read a, b, c with signs.",
      "Simplify radicals for exact roots; round for decimals.",
      "Reject roots that make no sense in context.",
    ],
    next: "4.4 uses the discriminant to count the roots without solving.",
  }),
];
