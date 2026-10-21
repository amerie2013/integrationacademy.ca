// IB AA SL 3.8 — Chapter 3 Review: lines, transformations, quadratic forms, solving, discriminant, models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "3.8 Chapter 3 Review";
export const ID = "1baa0003-0001-4001-8001-000000000308";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 3 Review",
    overview: S`This review connects the whole chapter. The summary table lists each skill and the tool for it; the examples combine two or more skills the way exam questions do; the practice and hard-level questions are exam style, from short Paper 1 items to multi-step Paper 2 problems.`,
    goals: [
      "find gradients and equations of lines, including parallel and perpendicular lines;",
      "describe and apply transformations of graphs;",
      "move between the three forms of a quadratic and sketch parabolas;",
      "solve quadratics by factorising, completing the square or the formula, and use the discriminant;",
      "build and use linear and quadratic models.",
    ],
    curriculum: "SL 2.1, 2.4, 2.6, 2.7, 2.11 (lines, key features, quadratics, quadratic equations and inequalities, transformations)",
    prior: [
      ["What is the gradient of a line perpendicular to one with gradient 3?", S`\(-\frac13\).`],
      [S`What does \(y=f(x-2)\) do to the graph of \(f\)?`, "Translates it 2 units right."],
      [S`What does \(\Delta<0\) tell you?`, "No real roots: the parabola does not meet the x-axis."],
    ],
    words: [
      ["3.1–3.2", "gradient, equations of lines, linear models", ""],
      ["3.3", "transformations of graphs", ""],
      ["3.4", "graphing quadratics", ""],
      ["3.5–3.6", "solving quadratics; the discriminant", ""],
      ["3.7", "quadratic models", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Question", "Tool"], [
    ["gradient, parallel, perpendicular", S`\(m=\frac{y_2-y_1}{x_2-x_1}\); \(m_1=m_2\); \(m_1m_2=-1\)`],
    ["equation of a line", S`\(y-y_1=m(x-x_1)\); general form \(ax+by+d=0\)`],
    ["transform a graph", S`\(af(b(x-h))+k\): outside vertical, inside horizontal (opposite)`],
    ["features of a parabola", "vertex form → vertex; intercept form → zeros; standard form → y-intercept"],
    ["solve a quadratic", "factorise, complete the square, or the formula"],
    ["how many roots / tangent", S`\(\Delta=b^2-4ac\)`],
    ["maximum or minimum in context", S`the vertex, \(x=-\frac{b}{2a}\)`],
  ])}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -2, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 3 * x + 6, color: "violet" }, { f: (x) => x + 2, color: "blue" }], points: [P(2, 4, "(2, 4)", "red")] }, "y = x + 2 is a tangent to y = x² − 3x + 6 at (2, 4) (Hard level, Challenge 1)")}
  ${keyIdea("Most exam questions in this chapter need two steps: set up the right equation (a line through a point, a quadratic model, a line meeting a curve), then solve it with the right tool.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the forms and key features of the parabolas in the examples.</p>`),

  widget("ibQuadratic", { init: [2, -1, -18] }),

  examples([
    ["Level 1 · A perpendicular line", S`Find the line through \((-3,2)\) perpendicular to \(3x+y=5\), in general form.`,
      [S`\(3x+y=5\) has gradient \(-3\), so the perpendicular gradient is \(\frac13\).`, S`\(y-2=\frac13(x+3)\Rightarrow3y-6=x+3\).`, S`\(x-3y+9=0\).`],
      S`\(x-3y+9=0\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -3, ymax: 7 }, step: { x: 1, y: 1 }, lines: [{ m: -3, b: 5, color: "gray" }, { m: 1 / 3, b: 3, color: "violet" }], points: [P(-3, 2, "(−3, 2)")] })],
    ["Level 2 · Transformations", S`\(f(x)=x^2\). Describe \(g(x)=f(x-2)+1\) and \(h(x)=3f(x)\), and find the images of \((1,1)\).`,
      [S`\(g\): right 2, up 1; vertex \((2,1)\); \((1,1)\to(3,2)\).`, S`\(h\): vertical stretch ×3; \((1,1)\to(1,3)\).`],
      S`\((3,2)\) and \((1,3)\)`],
    ["Level 2 · Between forms", S`\(f(x)=2(x+1)^2-18\). Find its zeros and its standard form.`,
      [S`\((x+1)^2=9\Rightarrow x+1=\pm3\Rightarrow x=2\) or \(-4\).`, S`\(2(x^2+2x+1)-18=2x^2+4x-16\).`],
      S`zeros \(2, -4\); \(2x^2+4x-16\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -20, ymax: 10 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 2 * (x + 1) ** 2 - 18, color: "violet" }], points: [P(-1, -18, "(−1, −18)", "amber"), P(2, 0, "(2, 0)"), P(-4, 0, "(−4, 0)")] })],
    ["Level 2 · Equal roots", S`Find \(k\) so that \(kx^2-6x+k=0\) has equal roots.`,
      [S`\(\Delta=36-4k^2=0\Rightarrow k^2=9\).`, S`\(k=\pm3\).`],
      S`\(k=\pm3\)`],
    ["Level 3 · A model", S`A stone is thrown from a bridge: \(h(t)=25+12t-4.9t^2\) m above the water. Find its maximum height and when it hits the water.`,
      [S`\(t=\frac{12}{9.8}\approx1.22\) s; \(h\approx32.3\) m.`, S`\(4.9t^2-12t-25=0\Rightarrow t=\frac{12+\sqrt{144+490}}{9.8}\approx3.79\) s (the negative root is rejected).`],
      "about 32.3 m; about 3.79 s",
      plane({ view: { xmin: -0.2, xmax: 4.2, ymin: -2, ymax: 36 }, step: { x: 0.5, y: 5 }, curves: [{ f: (t) => 25 + 12 * t - 4.9 * t * t, a: 0, b: 3.794, color: "violet" }], points: [P(1.224, 32.35, "(1.22, 32.35)", "amber"), P(3.794, 0, "(3.79, 0)")], xlabel: "t", ylabel: "h" })],
  ]),

  practice([
    q("Level 1 · gradient", S`Find the gradient of the line through \((2,-1)\) and \((6,7)\).`, num(2),
      "Rise over run.", [S`\(\frac{8}{4}\).`], S`\(2\)`),
    q("Level 1 · intercept", S`Find the y-intercept of \(4x-2y+6=0\).`, num(3),
      "Put x = 0.", [S`\(-2y+6=0\).`], S`\(3\)`),
    q("Level 2 · transformation", S`\((3,5)\) lies on \(y=f(x)\). Find the y-coordinate of its image on \(y=f(x+2)-4\).`, num(1),
      "Left 2, down 4.", [S`\((1,1)\).`], S`\(1\)`),
    q("Level 2 · vertex", S`Find the y-coordinate of the vertex of \(y=x^2+6x+1\).`, num(-8),
      "Complete the square.", [S`\((x+3)^2-8\).`], S`\(-8\)`),
    q("Level 2 · discriminant", S`Find the discriminant of \(3x^2-2x+5\).`, num(-56),
      "b² − 4ac.", [S`\(4-60\).`], S`\(-56\)`),
  ]),

  ...hard([
    ["A tangent line", S`Find \(c\) so that \(y=x+c\) is a tangent to \(y=x^2-3x+6\), and find the point of contact.`,
      [S`\(x^2-3x+6=x+c\Rightarrow x^2-4x+(6-c)=0\).`, S`Tangent: \(\Delta=16-4(6-c)=0\Rightarrow c=2\).`, S`\(x^2-4x+4=0\Rightarrow x=2\), \(y=4\).`],
      S`\(c=2\); \((2,4)\)`],
    ["A quadratic inequality", S`Solve \(2x^2-5x-3>0\).`,
      [S`\((2x+1)(x-3)=0\Rightarrow x=-\frac12\) or \(3\).`, S`The parabola opens up, so it is above the axis outside the roots.`, S`\(x<-\frac12\) or \(x>3\).`],
      S`\(x<-0.5\) or \(x>3\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -7, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x * x - 5 * x - 3, a: -3, b: -0.5, color: "green" }, { f: (x) => 2 * x * x - 5 * x - 3, a: -0.5, b: 3, color: "gray" }, { f: (x) => 2 * x * x - 5 * x - 3, a: 3, b: 5, color: "green" }], points: [P(-0.5, 0, "(−0.5, 0)"), P(3, 0, "(3, 0)")] }, "Green: where 2x² − 5x − 3 > 0")],
  ], [
    q("Level 3 · transformation", S`\(y=x^2\) is translated 3 right and 2 up, then stretched vertically by factor 2. Find the y-intercept of the result.`, num(22),
      "2[(x − 3)² + 2] at x = 0.", [S`\(2(9+2)\).`], S`\(22\)`),
    q("Level 3 · always positive", S`Find the largest integer \(k\) for which \(x^2+kx+16>0\) for every \(x\).`, num(7),
      "Δ < 0.", [S`\(k^2<64\Rightarrow-8<k<8\).`], S`\(7\)`),
    q("Level 3 · revenue", S`\(R=(30-x)(50+5x)\). Find the maximum revenue.`, num(2000),
      "Roots 30 and −10.", [S`\(x=10\): \(20\times100\).`], S`\(2000\)`),
  ]),

  wrapUp({
    qas: [
      ["What should I revise first?", "Moving between the forms of a quadratic and using the discriminant — they appear in most papers."],
      ["How do I recognise a tangent question?", "'Touches', 'tangent' or 'meets at exactly one point' means Δ = 0."],
      ["How do I check a transformation answer?", "Track one easy point (the vertex or an intercept) through every step."],
      ["When do I use a GDC on these topics?", "Paper 2: intersections, zeros, maxima. Paper 1: algebra only."],
      ["What makes a model answer complete?", "A value with units, a check that it makes sense, and any rejected roots explained."],
    ],
    summary: [
      "Lines: m, y − y₁ = m(x − x₁), parallel/perpendicular rules.",
      "Transformations: af(b(x − h)) + k.",
      "Quadratics: three forms; solve by factors, completing the square or the formula.",
      "Δ for the number of roots and tangents; vertex for optimisation.",
    ],
    next: "Chapter 4 studies rational functions, starting from the reciprocal function y = 1/x.",
  }),
];
