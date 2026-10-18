// MCR3U 3.5 — Families of Quadratic Functions: same zeros, varying a; equations from zeros (rational and irrational)
// and a point; from the vertex and a point; parabolic arches
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.5 Families of Quadratic Functions";
export const ID = "5c3e0001-0001-4001-8001-000000000305";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "👪",
    title: "Families of Quadratic Functions",
    overview: S`All parabolas \(y=a(x-r)(x-s)\) with the same zeros form a <strong>family</strong>: they share their zeros and axis, and differ only in the vertical stretch \(a\). One more point picks out a single member. In this lesson you will describe families, find equations from the zeros and a point (including irrational zeros like \(1\pm\sqrt5\)), and model parabolic arches.`,
    goals: [
      "describe what members of a family y = a(x − r)(x − s) share and how they differ;",
      "find the member of a family that passes through a given point;",
      "build a quadratic from irrational zeros h ± √m;",
      "find an equation from the vertex and one point;",
      "model arches and decide whether an object fits.",
    ],
    curriculum: "A2.4 (determine, through investigation, the transformational relationship among the family of quadratic functions that have the same zeros, and determine the algebraic representation of a quadratic function, given the real roots and a point on the function)",
    prior: [
      [S`Expand \((x-3-\sqrt2)(x-3+\sqrt2)\).`, S`\((x-3)^2-2=x^2-6x+7\).`],
      [S`What is the axis of \(y=a(x-1)(x-7)\)?`, S`\(x=4\).`],
      [S`If \(5=-2a+1\), what is \(a\)?`, S`\(a=-2\).`],
    ],
    words: [
      ["Family", "functions sharing a feature, differing in one parameter", "\\(y=a(x-2)(x+5)\\)"],
      ["Member", "one function of the family (a fixed a)", "\\(a=-2\\)"],
      ["Conjugate roots", "roots \\(h+\\sqrt m\\) and \\(h-\\sqrt m\\)", "\\(3\\pm\\sqrt2\\)"],
      ["Sum and product", "for \\(x^2-(\\text{sum})x+(\\text{product})\\)", ""],
    ],
  }),

  section("📌 What a family shares", S`
  ${plane({ view: { xmin: -7, xmax: 4, ymin: -12, ymax: 12 }, curves: [-2, -1, -0.5, 0.5, 1, 2].map((a, i) => ({ f: (x) => a * (x - 2) * (x + 5), color: ["red", "amber", "gray", "blue", "green", "violet"][i] })), points: [{ x: -5, y: 0, label: "(−5, 0)" }, { x: 2, y: 0, label: "(2, 0)" }], step: { x: 1, y: 2 } }, "y = a(x − 2)(x + 5) for a = ±½, ±1, ±2")}
  ${keyIdea(S`Members share zeros and axis \(x=\frac{r+s}{2}\). Changing \(a\) is a vertical stretch about the x-axis, so the zeros never move. To pick a member, substitute one point that is not a zero and solve for \(a\).`)}`),

  section("📌 Explore", S`<p>Set the zeros, then move the point. The violet curve is the member through it; grey curves are other members. Switch to irrational zeros \(h\pm\sqrt m\).</p>`),

  widget("familyLab", { init: [-2, 4] }),

  section("📌 Irrational zeros", S`
  <p>Zeros \(h\pm\sqrt m\) come in conjugate pairs. Multiply them as a difference of squares:</p>
  <p style="text-align:center">\((x-h-\sqrt m)(x-h+\sqrt m)=(x-h)^2-m\)</p>
  <p>So the family is \(y=a\left[(x-h)^2-m\right]\) — and it is already in vertex form, with vertex \((h,-am)\).</p>
  ${watchOut([
    "A point that is a zero cannot determine a — choose another point.",
    "Keep the brackets when you substitute: a(1 − 2)(1 + 5) = −6a.",
    "Irrational zeros: multiply the conjugates as (x − h)² − m.",
    "For arches, put the origin at one foot of the arch so one zero is 0.",
  ])}`),

  examples([
    ["Describe a family", S`What do the members of \(y=a(x-2)(x+5)\) share?`,
      [S`Zeros \(2\) and \(-5\); axis \(x=-1.5\).`, S`They differ in \(a\): direction of opening and steepness (graph above).`],
      "same zeros and axis; different a"],
    ["The member through a point", S`Find the member of \(y=a(x-2)(x+5)\) through \((1,12)\).`,
      [S`\(12=a(1-2)(1+5)=-6a\).`],
      S`\(a=-2\): \(y=-2(x-2)(x+5)\)`],
    ["Irrational zeros", S`Find the quadratic with zeros \(3\pm\sqrt2\) through \((1,4)\).`,
      [S`\(y=a\left[(x-3)^2-2\right]=a(x^2-6x+7)\).`, S`\(4=a(1-6+7)=2a\Rightarrow a=2\).`],
      S`\(y=2x^2-12x+14\)`],
    ["Vertex and a point", S`A parabola has vertex \((-2,5)\) and passes through \((0,-3)\). Find it.`,
      [S`\(y=a(x+2)^2+5\); \(-3=4a+5\Rightarrow a=-2\).`],
      S`\(y=-2(x+2)^2+5\)`],
    ["A parabolic arch", "An arch is 10 m wide at the ground and 6 m high in the middle. How high is it 2 m from one foot?",
      [S`Feet at \(x=0\) and \(x=10\): \(y=ax(x-10)\); top \((5,6)\): \(6=a(5)(-5)\Rightarrow a=-0.24\).`, S`\(y(2)=-0.24(2)(-8)=3.84\).`],
      "3.84 m",
      plane({ view: { xmin: -1, xmax: 11, ymin: -1, ymax: 7 }, curves: [{ f: (x) => -0.24 * x * (x - 10), a: 0, b: 10, color: "violet" }], points: [{ x: 5, y: 6, label: "(5, 6)" }, { x: 2, y: 3.84, label: "(2, 3.84)" }], step: { x: 1, y: 1 }, xlabel: "x (m)", ylabel: "y (m)" })],
  ]),

  practice([
    q("find a", S`Find \(a\) so that \(y=a(x-1)(x-7)\) passes through \((3,16)\).`, num(-2),
      "Substitute x = 3.", [S`\(16=a(2)(-4)=-8a\).`], S`\(-2\)`),
    q("find a", S`Find \(a\) so that \(y=a(x+3)(x-3)\) has y-intercept \(-18\).`, num(2),
      "Substitute (0, −18).", [S`\(-18=a(3)(-3)=-9a\).`], S`\(2\)`),
    q("irrational zeros", S`The quadratic \(y=x^2+bx+c\) has zeros \(2\pm\sqrt5\). Find \(c\).`, num(-1),
      "c is the product of the zeros.", [S`\((x-2)^2-5=x^2-4x-1\).`], S`\(-1\)`),
    q("vertex and point", S`A parabola has vertex \((4,-1)\) and passes through \((6,7)\). Find \(a\).`, num(2),
      "y = a(x − 4)² − 1.", [S`\(7=4a-1\).`], S`\(2\)`),
    q("family", S`What do all members of \(y=a(x-4)(x+2)\) share?`, choice(["the zeros and the axis of symmetry", "the vertex", "the y-intercept", "the direction of opening"], 0),
      "Which features do not depend on a?", [S`Zeros 4, −2; axis \(x=1\).`], "the zeros and the axis"),
  ]),

  ...hard([
    ["Will the truck fit?", "A tunnel has a parabolic arch 14 m wide at the road. 3 m from one edge the arch is 7 m high. Can a truck 4 m wide and 6 m tall pass through, driving down the middle?",
      [S`Edges at \(x=0\) and \(x=14\): \(y=ax(x-14)\); \(7=a(3)(-11)\Rightarrow a=-\tfrac{7}{33}\).`, S`The truck occupies \(5\le x\le9\). Lowest arch height over it, at \(x=5\): \(-\tfrac7{33}(5)(-9)=\tfrac{315}{33}\approx9.55\) m.`, S`9.55 m > 6 m.`],
      "yes, with about 3.5 m to spare",
      plane({ view: { xmin: -1, xmax: 15, ymin: -1, ymax: 12 }, curves: [{ f: (x) => (-7 / 33) * x * (x - 14), a: 0, b: 14, color: "violet" }], segs: [{ pts: [[5, 0], [5, 6], [9, 6], [9, 0]], color: "blue" }], points: [{ x: 3, y: 7, label: "(3, 7)" }], step: { x: 1, y: 1 } })],
    ["Conjugate zeros and a point", S`Find the quadratic with zeros \(-1\pm\sqrt3\) that passes through \((1,-4)\), in standard form.`,
      [S`\(y=a\left[(x+1)^2-3\right]=a(x^2+2x-2)\).`, S`\(-4=a(1+2-2)=a\).`],
      S`\(y=-4x^2-8x+8\)`],
  ], [
    q("hard", S`\(y=a(x^2-6x+4)\) passes through \((0,-8)\). What is its maximum value?`, num(10),
      "Find a, then write it in vertex form.", [S`\(4a=-8\Rightarrow a=-2\); \(y=-2\left[(x-3)^2-5\right]\).`], S`\(10\)`),
    q("hard", S`A parabola has zeros \(-4\) and \(6\) and passes through \((2,-48)\). Find the y-coordinate of its vertex.`, num(-50),
      "Find a, then evaluate at the axis x = 1.", [S`\(-48=a(6)(-4)\Rightarrow a=2\); \(2(5)(-5)\).`], S`\(-50\)`),
    q("hard", "A parabolic bridge arch is 40 m wide and 10 m high. How high is it 5 m from one end?", num(4.375),
      "y = ax(x − 40) with vertex (20, 10).", [S`\(10=a(20)(-20)\Rightarrow a=-0.025\); \(-0.025(5)(-35)\).`], S`\(4.375\) m`),
  ]),

  wrapUp({
    qas: [
      ["Why is changing a a vertical stretch?", "Every y-value is multiplied by a; points with y = 0 (the zeros) stay where they are."],
      ["What if I know the zeros and the vertex?", "The vertex is a point: substitute it to find a."],
      ["Why do irrational zeros come in pairs?", "With integer coefficients, the formula gives h ± √m together."],
      ["Where should I put the axes for an arch?", "At one foot (zeros 0 and the width) or at the centre (zeros ±half-width) — choose what makes the numbers simplest."],
      ["Can two different families share a member?", "Only if their zeros agree — the zeros define the family."],
    ],
    summary: [
      "Family: y = a(x − r)(x − s) — same zeros and axis.",
      "One extra point determines a.",
      "Zeros h ± √m: y = a[(x − h)² − m].",
      "Vertex and point: y = a(x − h)² + k, substitute to find a.",
    ],
    next: "3.6 finds where a line meets a parabola.",
  }),
];
