// IB AA SL 5.7 — Chapter 5 Review: limits, first principles, rules, tangents and normals, stationary points, concavity, optimisation, kinematics
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "5.7 Chapter 5 Review";
export const ID = "1baa0005-0001-4001-8001-000000000507";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 5 Review",
    overview: S`This review connects the chapter. The table lists each question type and its tool; the examples combine several skills the way exam questions do, and the practice and hard-level questions are exam style, from short Paper 1 items to multi-step problems.`,
    goals: [
      "evaluate limits and differentiate from first principles;",
      "differentiate with the power rule and find tangents and normals;",
      "find and classify stationary points and points of inflection;",
      "solve optimisation problems and justify the answer;",
      "use velocity and acceleration to describe motion.",
    ],
    curriculum: "SL 5.1–5.4, 5.6–5.9 (limits, derivatives, tangents and normals, second derivative, stationary points, optimisation, kinematics)",
    prior: [
      [S`Find \(\lim_{x\to1}\frac{x^2-1}{x-1}\).`, S`\(2\).`],
      [S`Differentiate \(4x^3-\frac{2}{x}\).`, S`\(12x^2+\frac{2}{x^2}\).`],
      [S`What does \(f''(a)>0\) at a stationary point mean?`, "A local minimum."],
    ],
    words: [
      ["5.1", "limits and convergence", ""],
      ["5.2", "the derivative function", ""],
      ["5.3", "rules, tangents and normals", ""],
      ["5.4", "f′, f″ and graphs", ""],
      ["5.5–5.6", "optimisation; kinematics", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Question", "Tool"], [
    ["limit giving 0/0", "factorise and cancel, then substitute"],
    ["first principles", S`\(\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\)`],
    ["differentiate", S`\((x^n)'=nx^{n-1}\), term by term, after rewriting`],
    ["tangent / normal", S`\(y-y_1=m(x-x_1)\), \(m=f'(x_1)\) or \(-\frac{1}{f'(x_1)}\)`],
    ["stationary points", S`\(f'=0\); classify with \(f''\) or a sign table`],
    ["inflection", S`\(f''=0\) and changes sign`],
    ["optimise", "one-variable model, f′ = 0, justify, check endpoints"],
    ["motion", S`\(v=s'\), \(a=v'\); at rest \(v=0\); distance: split at \(v=0\)`],
  ])}
  ${plane({ view: { xmin: -2, xmax: 5, ymin: -8, ymax: 10 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 2, color: "violet" }, { f: (x) => 9 * (x - 3) + 2, color: "red" }], points: [P(0, 2, "max (0, 2)"), P(2, -2, "min (2, −2)"), P(1, 0, "inflection (1, 0)", "green"), P(3, 2, "(3, 2)", "red")] }, "y = x³ − 3x² + 2 with its tangent at x = 3 (Example 2)")}
  ${keyIdea("Almost every question here is: differentiate, set something equal (to 0, to a given gradient, to a given rate), solve, then interpret the answer.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the stationary points and inflection points of the cubics in the examples.</p>`),

  widget("ibShape", { init: [1, -3, 0, 2] }),

  examples([
    ["Level 1 · A limit and a derivative", S`Find \(\lim_{x\to-3}\frac{x^2+x-6}{x+3}\), and differentiate \(f(x)=\frac{x^4-2x}{x}\).`,
      [S`\(\frac{(x+3)(x-2)}{x+3}=x-2\to-5\).`, S`\(f(x)=x^3-2\) for \(x\ne0\), so \(f'(x)=3x^2\).`],
      S`\(-5\); \(3x^2\)`],
    ["Level 2 · Tangent and stationary points", S`For \(y=x^3-3x^2+2\), find the tangent at \(x=3\) and the stationary points.`,
      [S`\(y'=3x^2-6x\); at \(x=3\): \(y=2\), \(y'=9\): tangent \(y=9x-25\).`, S`\(3x(x-2)=0\Rightarrow\) max \((0,2)\) (\(y''=-6\)), min \((2,-2)\) (\(y''=6\)).`],
      S`\(y=9x-25\); max \((0,2)\), min \((2,-2)\)`],
    ["Level 2 · Normal meeting an axis", S`Find where the normal to \(y=\sqrt x\) at \(x=4\) meets the x-axis.`,
      [S`\(y'=\frac{1}{2\sqrt x}=\frac14\) at \(x=4\); point \((4,2)\).`, S`Normal gradient \(-4\): \(y-2=-4(x-4)\).`, S`\(y=0\Rightarrow x=4.5\).`],
      S`\((4.5,0)\)`,
      plane({ view: { xmin: -0.5, xmax: 7, ymin: -1, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }, { f: (x) => -4 * (x - 4) + 2, a: 3.3, b: 4.8, color: "green" }], points: [P(4, 2, "(4, 2)"), P(4.5, 0, "(4.5, 0)", "red")] })],
    ["Level 2 · Optimisation", S`A rectangle has one side on the x-axis and its top corners on \(y=12-x^2\). Find the maximum area.`,
      [S`Corners at \(\pm x\): \(A=2x(12-x^2)=24x-2x^3\), \(0<x<\sqrt{12}\).`, S`\(A'=24-6x^2=0\Rightarrow x=2\); \(A''=-12x<0\).`, S`\(A=4\times8=32\).`],
      S`\(32\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 13 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 12 - x * x, color: "violet" }], segs: [{ pts: [[-2, 0], [-2, 8], [2, 8], [2, 0]], color: "red" }], points: [P(2, 8, "(2, 8)")] })],
    ["Level 3 · Kinematics", S`\(s=t^3-6t^2+9t-2\) m for \(0\le t\le4\). Find when the particle is at rest, the distance travelled, and when it is speeding up.`,
      [S`\(v=3(t-1)(t-3)\): rest at \(t=1, 3\).`, S`\(s(0)=-2\), \(s(1)=2\), \(s(3)=-2\), \(s(4)=2\): distance \(4+4+4=12\) m.`, S`\(a=6t-12\). Same signs: \(1<t<2\) (both −) and \(t>3\) (both +).`],
      S`\(t=1,3\); 12 m; \(1<t<2\) and \(3<t\le4\)`,
      plane({ view: { xmin: -0.2, xmax: 4.3, ymin: -4, ymax: 10 }, step: { x: 0.5, y: 1 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 9 * t - 2, a: 0, b: 4, color: "violet" }, { f: (t) => 3 * t * t - 12 * t + 9, a: 0, b: 4, color: "green" }], points: [P(1, 2, "(1, 2)"), P(3, -2, "(3, −2)"), P(4, 2, "(4, 2)")], xlabel: "t", ylabel: "" }, "s (violet) and v (green)")],
  ]),

  practice([
    q("Level 1 · limit", S`Find \(\lim_{x\to4}\frac{x^2-16}{x-4}\).`, num(8),
      "Factorise.", [S`\(x+4\).`], S`\(8\)`),
    q("Level 1 · derivative", S`For \(f(x)=5x^3-2x\), find \(f'(1)\).`, num(13),
      "15x² − 2.", [S`\(15-2\).`], S`\(13\)`),
    q("Level 2 · stationary value", S`Find the minimum value of \(y=x^2-8x+20\).`, num(4),
      "y′ = 0 at x = 4.", [S`\(16-32+20\).`], S`\(4\)`),
    q("Level 2 · tangent gradient", S`Find the gradient of \(y=\frac{4}{x}\) at \(x=2\).`, num(-1),
      "y′ = −4/x².", [S`\(-\frac44\).`], S`\(-1\)`),
    q("Level 2 · velocity", S`\(s=4t^2-t^3\). Find \(v\) at \(t=2\).`, num(4),
      "v = 8t − 3t².", [S`\(16-12\).`], S`\(4\)`),
  ]),

  ...hard([
    ["Unknown coefficients from a tangent", S`The tangent to \(y=ax^2+bx\) at \((1,-1)\) has gradient 3. Find \(a\) and \(b\).`,
      [S`\(a+b=-1\); \(2a+b=3\).`, S`\(a=4\), \(b=-5\).`],
      S`\(a=4\), \(b=-5\)`],
    ["A can of fixed volume", S`A closed cylinder has volume \(250\pi\) cm³. Find the radius that minimises its surface area, and justify.`,
      [S`\(h=\frac{250}{r^2}\); \(A=2\pi r^2+2\pi rh=2\pi r^2+\frac{500\pi}{r}\).`, S`\(A'=4\pi r-\frac{500\pi}{r^2}=0\Rightarrow r^3=125\Rightarrow r=5\).`, S`\(A''=4\pi+\frac{1000\pi}{r^3}>0\): a minimum (\(h=10\)).`],
      S`\(r=5\) cm`,
      plane({ view: { xmin: 0, xmax: 12, ymin: -20, ymax: 900 }, step: { x: 1, y: 100 }, curves: [{ f: (r) => 2 * Math.PI * r * r + (500 * Math.PI) / r, a: 1.5, b: 12, color: "violet" }], points: [P(5, 150 * Math.PI, "min (5, 471)", "red")], xlabel: "r", ylabel: "A" })],
  ], [
    q("Level 3 · inflection", S`Find the x-coordinate of the point of inflection of \(y=2x^3+6x^2-5\).`, num(-1),
      "y″ = 12x + 12.", [S`\(x=-1\).`], S`\(-1\)`),
    q("Level 3 · optimisation", S`The product of two positive numbers is 36. Find the least possible value of their sum.`, num(12),
      "S = x + 36/x.", [S`\(1-\frac{36}{x^2}=0\Rightarrow x=6\).`], S`\(12\)`),
    q("Level 3 · acceleration", S`\(v=t^3-6t\). Find the acceleration when \(t=2\).`, num(6),
      "a = 3t² − 6.", [S`\(12-6\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["What should I revise first?", "Differentiating quickly and accurately (rewriting powers), then stationary points and their classification."],
      ["How do I set out an optimisation answer?", "Variable and domain, objective function, derivative = 0, justification, final value with units."],
      ["How do I avoid sign errors in kinematics?", "Keep s, v and a signed; only take sizes when finding speed or distance."],
      ["When do I need first principles?", "Only when the question asks for it — otherwise use the rules."],
      ["What does a GDC help with?", "Paper 2: checking stationary points, intersections and values from graphs."],
    ],
    summary: [
      "Limits: simplify 0/0; f′ from first principles.",
      "(xⁿ)′ = nxⁿ⁻¹; tangents and normals.",
      "f′ = 0, f″ for max/min; f″ sign change for inflection.",
      "Optimisation and kinematics apply the same tools.",
    ],
    next: "Chapter 6 turns to statistics for univariate data.",
  }),
];
