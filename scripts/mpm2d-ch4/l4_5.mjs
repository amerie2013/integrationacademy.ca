// MPM2D 4.5 — Factored Form & the Zeros (self-study format): reading zeros, axis halfway between, vertex by
// substitution, factoring standard form first, writing equations from zeros and a point, an arch problem
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "4.5 Factored Form & the Zeros";

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Factored Form & the Zeros",
    overview: String.raw`In factored form \(y=a(x-r)(x-s)\) the zeros can be read directly: \(y=0\) exactly when \(x=r\) or \(x=s\). The axis of symmetry is halfway between the zeros, and substituting the axis value gives the vertex. In this lesson you will use factored form to sketch parabolas, factor standard form to find zeros (using Chapter 3), write equations from given zeros and a point, and solve a problem about an arch.`,
    goals: [
      "explain why the zeros of y = a(x − r)(x − s) are r and s;",
      "find the axis of symmetry and vertex from the zeros;",
      "factor y = ax² + bx + c to find its zeros and sketch it;",
      "write the equation of a parabola from its zeros and one other point;",
      "solve problems using factored form.",
    ],
    curriculum: "QR3 (determine the zeros and the maximum or minimum value of y = a(x − r)(x − s); sketch using intercepts and symmetry; determine an equation from zeros and a point)",
    prior: [
      [String.raw`Factor \(x^2-2x-15\).`, String.raw`\((x-5)(x+3)\).`],
      [String.raw`When is \((x+4)(x-1)=0\)?`, String.raw`\(x=-4\) or \(x=1\).`],
      [String.raw`Midpoint of \(-4\) and \(1\)?`, String.raw`\(-1.5\).`],
    ],
    words: [
      ["Factored form", "\\(y=a(x-r)(x-s)\\)", "\\(y=2(x-1)(x+3)\\)"],
      ["Zero", "an x-value where y = 0", ""],
      ["Zero product property", "a product is 0 only if a factor is 0", ""],
      ["Arch", "a parabola opening down", ""],
    ],
  }),

  section("📌 Reading factored form", String.raw`
  ${plane({ view: { xmin: -2, xmax: 8, ymin: -5, ymax: 12 }, curves: [{ f: (x) => (x - 2) * (x - 6), color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "red" }, { x: 6, y: 0, label: "(6, 0)", color: "red" }, { x: 4, y: -4, label: "(4, −4)", color: "blue" }, { x: 0, y: 12, label: "(0, 12)", color: "green" }], step: { x: 1, y: 2 } }, "y = (x − 2)(x − 6): zeros 2 and 6, axis x = 4, vertex (4, −4), y-intercept 12.")}
  ${keyIdea(String.raw`For \(y=a(x-r)(x-s)\): zeros \(r\) and \(s\); axis \(x=\frac{r+s}{2}\); vertex by substituting the axis value; \(y\)-intercept \(a\cdot r\cdot s\); \(a\) gives the direction and stretch.`)}`),

  section("📌 Explore", String.raw`<p>Move the zeros and change \(a\). The vertex always stays halfway between the zeros; \(a\) only changes how high or low it is.</p>`),

  widget("factoredForm", { init: [1, 2, 6] }),

  section("📌 From standard form", String.raw`
  <p>To find the zeros of \(y=ax^2+bx+c\), factor it (Chapter 3), then read the zeros. To write an equation from given zeros, start with \(y=a(x-r)(x-s)\) and use one more point to find \(a\).</p>
  ${watchOut([
    "(x + 4) gives the zero x = −4, not 4.",
    "A common factor does not change the zeros, but it is part of a.",
    "The vertex is not halfway between the zeros vertically — find its y by substitution.",
    "With only the zeros, many parabolas fit; you need one more point to find a.",
  ])}`),

  examples([
    ["All the features", String.raw`For \(y=-3(x+1)(x-3)\), find the zeros, axis, vertex and \(y\)-intercept.`,
      [String.raw`Zeros \(-1\) and \(3\); axis \(x=1\).`, String.raw`Vertex: \(-3(2)(-2)=12\), so \((1,12)\), a maximum.`, String.raw`\(y\)-intercept: \(-3(1)(-3)=9\).`],
      String.raw`zeros \(-1\), \(3\); axis \(x=1\); vertex \((1,12)\); \(y\)-intercept \(9\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -4, ymax: 14 }, curves: [{ f: (x) => -3 * (x + 1) * (x - 3), color: "violet" }], points: [{ x: -1, y: 0, color: "red" }, { x: 3, y: 0, color: "red" }, { x: 1, y: 12, label: "(1, 12)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Factor first", String.raw`Find the zeros and vertex of \(y=x^2-2x-15\).`,
      [String.raw`\(y=(x-5)(x+3)\): zeros \(5\) and \(-3\).`, String.raw`Axis \(x=1\); \(y=(1-5)(1+3)=-16\).`],
      String.raw`zeros \(-3\), \(5\); vertex \((1,-16)\)`],
    ["A common factor", String.raw`Find the zeros of \(y=2x^2-8x-24\).`,
      [String.raw`\(y=2(x^2-4x-12)=2(x-6)(x+2)\).`, String.raw`Zeros \(6\) and \(-2\).`],
      String.raw`\(x=-2\) and \(x=6\)`],
    ["Equation from zeros and a point", String.raw`A parabola has zeros \(-4\) and \(2\) and \(y\)-intercept \(-16\). Find its equation.`,
      [String.raw`\(y=a(x+4)(x-2)\).`, String.raw`At \((0,-16)\): \(-16=a(4)(-2)=-8a\Rightarrow a=2\).`],
      String.raw`\(y=2(x+4)(x-2)\)`],
    ["An arch", String.raw`A parabolic arch is \(40\) m wide at ground level and \(10\) m high in the middle. Write an equation with the origin at one foot of the arch.`,
      [String.raw`Zeros \(0\) and \(40\): \(y=ax(x-40)\).`, String.raw`Vertex \((20,10)\): \(10=a(20)(-20)\Rightarrow a=-\frac{1}{40}\).`],
      String.raw`\(y=-\tfrac{1}{40}x(x-40)\)`,
      plane({ view: { xmin: -5, xmax: 45, ymin: -2, ymax: 14 }, curves: [{ f: (x) => -(x * (x - 40)) / 40, a: 0, b: 40, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 40, y: 0, label: "(40, 0)", color: "red" }, { x: 20, y: 10, label: "(20, 10)", color: "blue" }], xlabel: "m", ylabel: "m", step: { x: 5, y: 2 } })],
  ]),

  practice([
    q("zeros", String.raw`What is the positive zero of \(y=(x+7)(x-3)\)?`, num(3),
      "Set each bracket to zero.", [String.raw`\(x-3=0\).`], String.raw`\(3\)`),
    q("axis", String.raw`Find the axis of symmetry of \(y=2(x-1)(x-9)\) (the value of \(x\)).`, num(5),
      "Halfway between the zeros.", [String.raw`\(\frac{1+9}{2}\).`], String.raw`\(x=5\)`),
    q("vertex", String.raw`Find the \(y\)-coordinate of the vertex of \(y=(x-1)(x-5)\).`, num(-4),
      "Axis x = 3; substitute.", [String.raw`\((3-1)(3-5)=-4\).`], String.raw`\(-4\)`),
    q("y-intercept", String.raw`Find the \(y\)-intercept of \(y=-2(x+3)(x-4)\).`, num(24),
      "Substitute x = 0.", [String.raw`\(-2(3)(-4)=24\).`], String.raw`\(24\)`),
    q("find a", String.raw`A parabola has zeros \(1\) and \(5\) and passes through \((0,10)\). Find \(a\).`, num(2),
      "y = a(x − 1)(x − 5).", [String.raw`\(10=a(-1)(-5)=5a\).`], String.raw`\(a=2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why are the zeros the opposites of the numbers in the brackets?", "y = 0 when a bracket is 0: x − r = 0 gives x = r. (x + 4) is x − (−4), so its zero is −4."],
      ["Why is the axis halfway between the zeros?", "The parabola is symmetric, and the two zeros have the same y-value (0), so they are mirror images across the axis."],
      ["What if the parabola has only one zero?", "Then it is y = a(x − r)², and the vertex is (r, 0)."],
      ["Does every parabola have a factored form?", "Only if it has zeros. y = x² + 1 has none, so it has no factored form with real numbers."],
      ["When is factored form the best choice?", "When a question asks for zeros, x-intercepts, or where something is at ground level."],
    ],
    summary: [
      "y = a(x − r)(x − s): zeros r and s.",
      "Axis x = (r + s)/2; vertex by substitution.",
      "Factor standard form to find zeros.",
      "Zeros plus one point give a.",
    ],
    next: "4.6 converts between standard, vertex and factored form — including completing the square.",
  }),
];
