// MPM2D 5.7 — Chapter 5 Review (NEW lesson, placed after 5.6)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, roots, rootsT } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "5.7 Chapter 5 Review";
export const NEW = { id: "2d1e7c1a-0a17-4d1e-9c17-d1a9f0000507", position: 34 };

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 5 Review — Quadratic Equations",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, practice choosing the best solving method, multi-step problems, mixed practice and a readiness checklist. Work through it after 5.1–5.6 and return to any lesson where you get stuck.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "choose the most efficient method to solve a quadratic equation;",
      "solve multi-step problems with quadratic models;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "QR3, QR4 (whole chapter); 5.6 enrichment",
    prior: [
      [S`Solve \((x-4)(x+2)=0\).`, S`\(x=4\) or \(x=-2\).`],
      [S`Discriminant of \(x^2+x+1\)?`, S`\(-3\).`],
      [S`Write the quadratic formula.`, S`\(x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\).`],
    ],
    words: [
      ["Root", "a solution of \\(ax^2+bx+c=0\\)", ""],
      ["Discriminant", "\\(b^2-4ac\\)", ""],
      ["Double root", "\\(D=0\\)", ""],
      ["Non-real roots", "\\(D\\lt0\\)", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["5.1 Factoring", "= 0, factor, each factor = 0", "\\(x^2-x-6=0\\Rightarrow-2,\\ 3\\)", "never divide by x"],
    ["5.2 Completing the square", "\\((x+p)^2=k\\Rightarrow x=-p\\pm\\sqrt k\\)", "\\((x-1)^2=5\\)", "remember ±"],
    ["5.3 Formula", "\\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)", "\\(x^2+2x-4=0\\)", "signs of a, b, c"],
    ["5.4 Discriminant", "\\(D>0\\): 2, \\(D=0\\): 1, \\(D\\lt0\\): none", "\\(x^2+2x+3\\): \\(D=-8\\)", "standard form first"],
    ["5.5 Problems", "vertex for max/min; solve = 0 or = H", "above H between the roots", "reject impossible roots"],
    ["5.6 Systems (enrichment)", "set equal, = 0, solve; D counts points", "\\(x^2=x+2\\)", "find y from the line"],
  ])),

  section("📌 Which method?", keyIdea(S`<strong>No \(x\) term</strong> (like \(3x^2=48\) or \((x-2)^2=9\))? Isolate the square and take \(\pm\) roots. <strong>Factors easily</strong> (\(D\) a perfect square)? Factor. <strong>\(a=1\), \(b\) even?</strong> Completing the square is quick. <strong>Anything else</strong>, or decimals? The quadratic formula. <strong>Only need how many roots?</strong> The discriminant.`)),

  practice([
    q("method", S`Fastest method for \(4x^2=100\)?`, choice(["isolate x² and take ± roots", "the quadratic formula", "completing the square", "graphing"], 0),
      "There is no x term.", [S`\(x^2=25\Rightarrow x=\pm5\).`], "isolate and take roots"),
    q("method", S`Fastest method for \(x^2+5x+6=0\)?`, choice(["factoring", "the quadratic formula", "completing the square", "the discriminant"], 0),
      "Product 6, sum 5.", [S`\((x+2)(x+3)=0\).`], "factoring"),
    q("method", S`Best method for \(2.5x^2-1.3x-4=0\)?`, choice(["the quadratic formula", "factoring", "isolating the square", "the zero product property alone"], 0),
      "Decimals.", ["Decimal coefficients rarely factor."], "the quadratic formula"),
    q("method", S`A question asks only whether \(7x^2-3x+2=0\) has real roots. What do you compute?`, choice(["the discriminant", "both roots", "the vertex", "the y-intercept"], 0),
      "‘Whether’ = how many.", [S`\(D=9-56\lt0\): no.`], "the discriminant"),
    q("method", S`Which equation can be solved by factoring over the integers?`, choice([S`\(x^2-2x-8=0\)`, S`\(x^2-2x-7=0\)`, S`\(x^2-2x+7=0\)`, S`\(x^2-2x-6=0\)`], 0),
      "Find D: a perfect square factors.", [S`\(D=4+32=36\), a perfect square.`], S`\(x^2-2x-8=0\)`),
  ]),

  examples([
    ["Same equation, three methods", S`Solve \(x^2-2x-15=0\) by factoring, by completing the square and by the formula.`,
      [S`Factoring: \((x-5)(x+3)=0\).`, S`Square: \((x-1)^2=16\Rightarrow x=1\pm4\).`, S`Formula: \(D=4+60=64\); \(x=\frac{2\pm8}{2}\).`],
      S`\(x=5\) or \(x=-3\) every way`],
    ["Exact and decimal", S`Solve \(2x^2+4x-3=0\). Give exact roots and decimals.`,
      [S`\(D=16+24=40\), \(\sqrt{40}=2\sqrt{10}\).`, S`\(x=\frac{-4\pm2\sqrt{10}}{4}=\frac{-2\pm\sqrt{10}}{2}\).`, S`\(x\approx0.58\) or \(x\approx-2.58\).`],
      S`\(x=\frac{-2\pm\sqrt{10}}{2}\approx0.58,\ -2.58\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 2 * x * x + 4 * x - 3, color: "violet" }], points: [{ x: (-2 + Math.sqrt(10)) / 2, y: 0, label: "≈ 0.58", color: "red" }, { x: (-2 - Math.sqrt(10)) / 2, y: 0, label: "≈ −2.58", color: "red" }], step: { x: 1, y: 1 } })],
    ["Unknown coefficient", S`For which values of \(k\) does \(kx^2+6x+3=0\) have no real roots?`,
      [S`No real roots: \(D\lt0\): \(36-12k\lt0\).`, S`\(36\lt12k\Rightarrow k>3\).`],
      S`\(k>3\)`],
    ["A full problem", S`A ball's height is \(h=-5t^2+20t+1.8\). Find the maximum height, when it lands, and how long it is above \(16.8\) m.`,
      [S`Axis \(t=2\): \(h=-20+40+1.8=21.8\).`, S`\(h=0\): \(D=400+36=436\); \(t=\frac{-20-\sqrt{436}}{-10}\approx4.09\).`, S`\(h=16.8\): \(-5t^2+20t-15=0\Rightarrow t^2-4t+3=0\Rightarrow t=1\) or \(t=3\).`],
      S`maximum \(21.8\) m; lands after about \(4.09\) s; above \(16.8\) m for \(2\) s`,
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t + 1.8, a: 0, b: 4.09, color: "violet" }], lines: [{ m: 0, b: 16.8, color: "red", dash: true }], points: [{ x: 1, y: 16.8, label: "1 s", color: "red" }, { x: 3, y: 16.8, label: "3 s", color: "red" }, { x: 2, y: 21.8, label: "(2, 21.8)", color: "blue" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 2 } })],
    ["Area equation", S`A rectangular photo is \(5\) cm longer than it is wide. A \(2\) cm frame around it makes a total area of \(204\) cm². Find the photo's dimensions.`,
      [S`Width \(w\): the framed size is \((w+4)\) by \((w+9)\).`, S`\((w+4)(w+9)=204\Rightarrow w^2+13w-168=0\).`, S`\((w+21)(w-8)=0\); reject \(w=-21\).`],
      S`\(8\) cm by \(13\) cm`],
  ]),

  section("📌 Mixed review", S`<p>Each question uses one lesson's skill — decide which first.</p>`),

  practice([
    q("factoring", S`Solve \(x^2-11x+24=0\).`, roots(3, 8),
      "Product 24, sum −11.", [S`\((x-3)(x-8)=0\).`], S`\(x=3\) or \(x=8\)`),
    q("square", S`Solve \((x-5)^2=3\) to two decimal places.`, rootsT(0.01, 5 + Math.sqrt(3), 5 - Math.sqrt(3)),
      "x − 5 = ±√3.", [S`\(x=5\pm\sqrt3\).`], S`about \(6.73\) and \(3.27\)`),
    q("formula", S`Solve \(3x^2-x-2=0\).`, roots(1, -2 / 3),
      "D = 1 + 24.", [S`\(x=\frac{1\pm5}{6}\).`], S`\(x=1\) or \(x=-\tfrac23\)`),
    q("discriminant", S`Find the discriminant of \(2x^2+5x+4=0\).`, num(-7),
      "b² − 4ac.", [S`\(25-32=-7\).`], S`\(-7\)`),
    q("problem", S`A ball's height is \(h=-5t^2+10t+15\). After how many seconds does it land?`, num(3),
      "Set h = 0 and divide by −5.", [S`\(t^2-2t-3=0\Rightarrow(t-3)(t+1)=0\).`], S`\(3\) s`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["5.1", "I can solve a quadratic equation by factoring, after rearranging to = 0."],
      ["5.2", "I can solve by taking ± square roots and by completing the square."],
      ["5.3", "I can use the quadratic formula and give exact and decimal roots."],
      ["5.4", "I can use the discriminant to state the number of real roots and find k."],
      ["5.5", "I can solve maximum, zero and interval problems and answer in context."],
      ["5.6", "(Enrichment) I can find where a line meets a parabola."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("formulaLab", { init: [1, 2, -4] }),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set, then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Factoring before getting 0 on one side, dividing by x, forgetting ±, sign errors with −b and b², and keeping a negative time or length."],
      ["How do I check my roots?", "Substitute them into the original equation. For decimals, the result should be close to 0. The roots should also be symmetric about x = −b/(2a)."],
      ["How much work should I show?", "Write the equation in standard form, the method, each step, and a sentence with units for word problems."],
      ["How does this chapter lead into Chapter 6?", "Chapter 6 turns to geometry: similar triangles and trigonometry. You will still solve equations, including some quadratic ones from the Pythagorean theorem."],
    ],
    summary: [
      "Rearrange to ax² + bx + c = 0 first.",
      "Factor, isolate a square, complete the square, or use the formula.",
      "D = b² − 4ac counts the real roots.",
      "In problems: vertex for max/min; solve = 0 or = H; check context.",
    ],
    next: "Write the Chapter 5 test. Chapter 6 starts similar triangles.",
  }),
];
