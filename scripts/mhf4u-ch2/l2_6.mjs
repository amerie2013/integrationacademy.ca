// MHF4U 2.6 — Solving Factorable Polynomial Inequalities Algebraically: rearrange, factor, critical values, sign
// charts (factor tables) and test values, zeros of higher order, and applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "2.6 Solving Factorable Polynomial Inequalities Algebraically";
export const ID = "75919f24-1ec3-4810-9e4c-5b46f23dcbe4";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Solving Factorable Polynomial Inequalities Algebraically",
    overview: S`When a polynomial factors, its inequality can be solved exactly — no graph needed. Move every term to one side, factor completely, and mark the zeros on a number line. Between consecutive zeros the polynomial keeps one sign, so a <strong>sign chart</strong> (a table of the sign of each factor on each interval) or a single test value per interval tells you where the inequality holds.`,
    goals: [
      "rearrange and factor a polynomial inequality;",
      "build a sign chart (factor table) for a factored polynomial;",
      "use test values to check signs;",
      "handle zeros of even order and non-strict inequalities;",
      "solve problems with polynomial inequalities.",
    ],
    curriculum: "C4.3 (solve factorable polynomial inequalities of degree ≤ 4 algebraically, using a factor table or test values, and represent the solutions on a number line or in interval notation)",
    prior: [
      [S`Sign of \((x-3)\) when \(x=1\)?`, S`Negative.`],
      [S`Factor \(x^3-x^2-12x\).`, S`\(x(x-4)(x+3)\).`],
      [S`Solve \(x^2-x-6\lt0\).`, S`\(-2\lt x\lt3\).`],
    ],
    words: [
      ["Critical value", "a zero of the factored polynomial: a possible boundary", ""],
      ["Sign chart / factor table", "the sign of every factor on every interval", ""],
      ["Test value", "one x in an interval used to find the sign there", ""],
      ["Number line solution", "open dot = excluded, closed dot = included", ""],
    ],
  }),

  section("📌 The sign chart method", S`
  <p>For \((x+2)(x-1)(x-4)\lt0\): the zeros \(-2, 1, 4\) split the line into four intervals.</p>
  ${table(["", "x < −2", "−2 < x < 1", "1 < x < 4", "x > 4"], [
    ["x + 2", "−", "+", "+", "+"],
    ["x − 1", "−", "−", "+", "+"],
    ["x − 4", "−", "−", "−", "+"],
    ["product", "<strong>−</strong>", "+", "<strong>−</strong>", "+"],
  ])}
  ${keyIdea(S`(1) One side 0. (2) Factor completely. (3) Mark critical values. (4) Sign of each factor on each interval → sign of the product. (5) Pick the intervals that fit; include critical values for \(\le\) and \(\ge\). For \((x+2)(x-1)(x-4)\lt0\): \(x\lt-2\) or \(1\lt x\lt4\).`)}
  ${plane({ view: { xmin: -3, xmax: 5, ymin: -20, ymax: 14 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 4), color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 4, y: 0, label: "4", color: "red" }], step: { x: 1, y: 2 } }, "The graph agrees with the sign chart: below the axis for x < −2 and for 1 < x < 4.")}`),

  section("📌 Explore", S`<p>Set the zeros, their orders and \(a\). The factor table fills in automatically; the product row matches the graph, and the solution of the chosen inequality is shaded.</p>`),

  widget("signChart", { init: { a: 1, zeros: [[-3, 1], [0, 1], [4, 1]], op: "≥" } }),

  section("📌 Higher-order zeros", S`
  <p>A squared factor like \((x-1)^2\) is never negative, so it does not change the sign of the product: the signs on both sides of \(x=1\) are the same. Its zero is still a critical value — included for \(\ge\) and \(\le\), excluded for \(>\) and \(\lt\).</p>
  ${watchOut([
    "Never divide both sides by a variable expression — its sign is unknown. Factor instead.",
    "Move everything to one side before factoring: x³ > 4x becomes x³ − 4x > 0.",
    "A negative leading coefficient flips every sign in the product row; include it as a row.",
    "At an even-order zero the sign does not change; the zero itself may still be a solution (≥, ≤).",
    "Check one interval with a test value to catch sign errors.",
  ])}`),

  examples([
    ["A sign chart", S`Solve \((x-2)(x+3)(x-5)\lt0\).`,
      [S`Critical values \(-3, 2, 5\).`, S`Signs of the product: \(x\lt-3\): −; \(-3\lt x\lt2\): +; \(2\lt x\lt5\): −; \(x>5\): +.`],
      S`\(x\lt-3\) or \(2\lt x\lt5\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -40, ymax: 40 }, curves: [{ f: (x) => (x - 2) * (x + 3) * (x - 5), color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: 2, y: 0, label: "2", color: "red" }, { x: 5, y: 0, label: "5", color: "red" }], step: { x: 1, y: 10 } })],
    ["Factor first", S`Solve \(x^3-x^2-12x\ge0\).`,
      [S`\(x(x-4)(x+3)\ge0\); critical values \(-3, 0, 4\).`, S`Test \(x=-4\): \((-4)(-8)(-1)=-32\) → −. Signs: −, +, −, +.`, S`Include the zeros (≥).`],
      S`\(x\in[-3,0]\cup[4,\infty)\)`,
      plane({ view: { xmin: -4.5, xmax: 5.5, ymin: -30, ymax: 30 }, curves: [{ f: (x) => x ** 3 - x * x - 12 * x, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: 0, y: 0, label: "0", color: "red" }, { x: 4, y: 0, label: "4", color: "red" }], step: { x: 1, y: 10 } })],
    ["Using the factor theorem", S`Solve \(2x^3+3x^2-11x-6\le0\).`,
      [S`\(P(2)=16+12-22-6=0\). Divide: \(2x^2+7x+3=(2x+1)(x+3)\).`, S`\((x-2)(2x+1)(x+3)\le0\); critical values \(-3, -\tfrac12, 2\).`, S`Degree 3, \(a>0\): signs −, +, −, +.`],
      S`\(x\le-3\) or \(-\tfrac12\le x\le2\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -16, ymax: 16 }, curves: [{ f: (x) => 2 * x ** 3 + 3 * x * x - 11 * x - 6, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: -0.5, y: 0, label: "−½", color: "red" }, { x: 2, y: 0, label: "2", color: "red" }], step: { x: 1, y: 4 } })],
    ["A double zero", S`Solve \((x-1)^2(x+4)>0\).`,
      [S`Critical values \(-4\) and \(1\) (order 2).`, S`\(x\lt-4\): −; \(-4\lt x\lt1\): +; \(x>1\): + (no change at 1).`, S`Strict: exclude \(x=1\).`],
      S`\(x>-4\), \(x\ne1\): \((-4,1)\cup(1,\infty)\)`],
    ["A volume condition", S`A box has dimensions \(x\), \(x-1\) and \(x+3\) cm. For which \(x\) is its volume greater than \(5x\) cm³?`,
      [S`\(x(x-1)(x+3)>5x\Rightarrow x[(x-1)(x+3)-5]>0\Rightarrow x(x^2+2x-8)>0\Rightarrow x(x+4)(x-2)>0\).`, S`Solution of the inequality: \(-4\lt x\lt0\) or \(x>2\).`, S`Every dimension must be positive: \(x>1\).`],
      S`\(x>2\)`],
  ]),

  practice([
    q("solve", S`Solve \((x+1)(x-3)\le0\).`, choice([S`\([-1,3]\)`, S`\((-1,3)\)`, S`\((-\infty,-1]\cup[3,\infty)\)`, S`\([-3,1]\)`], 0),
      "A parabola opening up is below the axis between its zeros.", [S`Signs +, −, +; include the zeros.`], S`\([-1,3]\)`),
    q("count", S`How many integers from \(-5\) to \(5\) satisfy \((x+3)(x-1)(x-4)\lt0\)?`, num(4),
      "Solution: x < −3 or 1 < x < 4.", [S`\(-5,-4\) and \(2,3\).`], S`\(4\)`),
    q("solve", S`Solve \(x^3-4x>0\).`, choice([S`\((-2,0)\cup(2,\infty)\)`, S`\((-\infty,-2)\cup(0,2)\)`, S`\((2,\infty)\)`, S`\((-2,2)\)`], 0),
      "Factor: x(x − 2)(x + 2).", [S`Signs −, +, −, +.`], S`\((-2,0)\cup(2,\infty)\)`),
    q("smallest", S`What is the smallest positive integer that satisfies \(x^3-9x^2+14x>0\)?`, num(1),
      "x(x − 2)(x − 7).", [S`\(0\lt x\lt2\) or \(x>7\): \(x=1\) works.`], S`\(1\)`),
    q("double zero", S`Solve \((x+2)^2(x-3)\ge0\).`, choice([S`\(\{-2\}\cup[3,\infty)\)`, S`\([3,\infty)\)`, S`\([-2,3]\)`, S`\([-2,\infty)\)`], 0),
      "The squared factor never changes the sign.", [S`Negative for \(x\lt3\) except at \(x=-2\), where it is 0.`], S`\(x=-2\) or \(x\ge3\)`),
  ]),

  ...hard([
    ["A quartic with a double zero", S`Solve \(x^4-3x^3-10x^2\le0\).`,
      [S`\(x^2(x^2-3x-10)=x^2(x-5)(x+2)\le0\).`, S`Critical values \(-2, 0\) (order 2), \(5\). Signs: \(x\lt-2\): +; \(-2\lt x\lt0\): −; \(0\lt x\lt5\): −; \(x>5\): +.`, S`Include every zero.`],
      S`\(x\in[-2,5]\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -160, ymax: 60 }, curves: [{ f: (x) => x ** 4 - 3 * x ** 3 - 10 * x * x, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 0, y: 0, label: "0", color: "amber" }, { x: 5, y: 0, label: "5", color: "red" }], step: { x: 1, y: 20 } })],
    ["Rearrange, then factor", S`Solve \(x^3+3x^2\ge4\).`,
      [S`\(x^3+3x^2-4\ge0\); \(P(1)=0\). Divide: \(x^2+4x+4=(x+2)^2\).`, S`\((x-1)(x+2)^2\ge0\): the squared factor is never negative, so the sign is that of \(x-1\), except that the product is 0 at \(x=-2\).`],
      S`\(x\ge1\) or \(x=-2\)`],
  ], [
    q("hard", S`How many integers satisfy \(x^4-13x^2+36\lt0\)?`, num(0),
      "(x² − 4)(x² − 9) < 0.", [S`\(4\lt x^2\lt9\): \(2\lt|x|\lt3\) — no integers.`], S`\(0\)`),
    q("hard", S`Solve \((x-1)^3(x+2)\lt0\).`, choice([S`\(-2\lt x\lt1\)`, S`\(x\lt-2\) or \(x>1\)`, S`\(x\lt1\)`, S`\(x>-2\)`], 0),
      "Order 3 still changes sign.", [S`Degree 4, \(a>0\): +, −, +.`], S`\(-2\lt x\lt1\)`),
    q("hard", S`What is the largest integer that satisfies \(2x^3-x^2-8x+4\lt0\)?`, num(1),
      "Group: x²(2x − 1) − 4(2x − 1).", [S`\((2x-1)(x-2)(x+2)\lt0\): \(x\lt-2\) or \(\tfrac12\lt x\lt2\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Why can't I divide both sides by x?", "If x is negative the inequality sign must flip, and if x = 0 you can't divide at all; factoring keeps every case."],
      ["Do I need a full sign chart?", "Not always — one test value per interval works too. The sign chart shows why the signs are what they are."],
      ["What changes for ≥ or ≤?", "The critical values themselves are solutions, so use closed dots and square brackets."],
      ["How do I handle a factor like x² + 1?", "It is always positive, so it never changes the sign; leave it out of the chart (but not out of the reasoning)."],
      ["How do I check my answer?", "Pick a value inside your solution and one outside; substitute into the original inequality."],
    ],
    summary: [
      "One side 0; factor completely.",
      "Critical values split the number line.",
      "Sign chart or test values give each interval's sign.",
      "Even-order zeros don't change the sign.",
    ],
    next: "2.7 reviews the whole chapter.",
  }),
];
