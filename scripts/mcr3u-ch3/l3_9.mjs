// MCR3U 3.9 — Chapter 3 Review: quadratic forms, optimisation, solving, discriminant, families, linear–quadratic systems
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, roots, hard, plane } from "./lib.mjs";

export const TITLE = "3.9 Chapter 3 Review";
export const ID = "5c3e0001-0001-4001-8001-000000000307";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 3 Review",
    overview: S`This review connects the whole chapter. The summary table lists each skill; the examples combine two or more of them; the practice and hard-level problems are at chapter-test level.`,
    goals: [
      "move between standard, vertex and factored form;",
      "find and interpret maximum and minimum values;",
      "solve quadratic equations exactly and in context;",
      "use the discriminant and families of parabolas;",
      "solve linear–quadratic systems.",
    ],
    curriculum: "A2.1–A2.5 (zeros, maximum and minimum, problems, families with given zeros, linear–quadratic systems)",
    prior: [
      ["What does the discriminant tell you?", "The number of real zeros (or intersection points)."],
      [S`What is the axis of \(y=a(x-r)(x-s)\)?`, S`\(x=\frac{r+s}{2}\).`],
      ["How do you find a tangent line?", "Set the line equal to the parabola and make D = 0."],
    ],
    words: [
      ["3.1–3.3", "forms, converting, finite differences", ""],
      ["3.4", "maximum and minimum, optimisation", ""],
      ["3.5–3.6", "solving, discriminant", ""],
      ["3.7", "families with given zeros", ""],
      ["3.8", "linear–quadratic systems", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Question", "Tool"], [
    ["Which features can I read off?", "factored: zeros · vertex: vertex and max/min · standard: y-intercept"],
    ["I need a different form", "expand, factor, or use the axis \\(x=-\\frac{b}{2a}\\)"],
    ["Is this table quadratic? What is its equation?", "constant second differences \\(=2ah^2\\); c at x = 0; one more point for b"],
    ["Where is the max/min?", "vertex form, partial factoring, or average the zeros"],
    ["When is f(x) = k?", "rearrange, factor or formula"],
    ["How many zeros?", "\\(D=b^2-4ac\\) or the signs of a and k"],
    ["Which parabola has these zeros and passes through P?", "\\(y=a(x-r)(x-s)\\), substitute P"],
    ["Where does the line meet it?", "set equal, discriminant, solve"],
  ])}
  ${keyIdea("Many test questions are two-step: build the quadratic from a story, then optimise or solve it.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the forms and features of any parabola from the examples.</p>`),

  widget("quadForms", { init: [-1, 0, 6] }),

  examples([
    ["Forms and features", S`For \(f(x)=-2x^2+8x+10\), find the zeros, the vertex and the range.`,
      [S`<b>Common factor.</b> Take out \(-2\), so the trinomial has leading coefficient 1: \(f(x)=-2(x^2-4x-5)\).`,
        S`<b>Factor.</b> Product \(-5\), sum \(-4\): \(-5\) and \(1\). So \(f(x)=-2(x-5)(x+1)\), and the zeros are 5 and \(-1\).`,
        S`<b>Axis.</b> \(x=\frac{5+(-1)}2=2\).`,
        S`<b>Vertex.</b> \(f(2)=-8+16+10=18\). So the vertex is \((2,18)\).`,
        S`<b>Range.</b> \(a<0\), so 18 is the maximum: \(y\le18\).`,
        S`<b>Check.</b> Vertex form: \(-2(x-2)^2+18=-2x^2+8x-8+18=-2x^2+8x+10\) ✓`],
      S`zeros \(-1,5\); vertex \((2,18)\); range \(y\le18\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -8, ymax: 21 }, curves: [{ f: (x) => -2 * x * x + 8 * x + 10, color: "violet" }], points: [{ x: 2, y: 18, label: "(2, 18)", color: "amber" }, { x: -1, y: 0, label: "(−1, 0)" }, { x: 5, y: 0, label: "(5, 0)" }, { x: 0, y: 10, label: "(0, 10)" }], step: { x: 1, y: 3 } })],
    ["Optimisation", S`A rectangular play area uses a wall for one side and 36 m of fence for the other three. Find the largest area.`,
      [S`<b>Variables.</b> Let \(w\) be each side touching the wall. The fence covers two widths and one length, so the length is \(36-2w\).`,
        S`<b>Model.</b> \(A(w)=w(36-2w)\).`,
        S`<b>Zeros.</b> \(w=0\) and \(w=18\), since \(36-2w=0\) at \(w=18\).`,
        S`<b>Axis.</b> \(w=\frac{0+18}2=9\). The parabola opens down, so this gives the maximum.`,
        S`<b>Dimensions and area.</b> Length \(36-18=18\) m, so \(A=9\times18=162\) m².`,
        S`<b>Check nearby.</b> \(A(8)=8(20)=160\) and \(A(10)=10(16)=160\), both less ✓`],
      "9 m by 18 m, 162 m²",
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 180 }, curves: [{ f: (w) => w * (36 - 2 * w), a: 0, b: 18, color: "violet" }], points: [{ x: 9, y: 162, label: "(9, 162)", color: "amber" }, { x: 8, y: 160 }, { x: 10, y: 160 }], step: { x: 2, y: 20 }, xlabel: "w (m)", ylabel: "A (m²)" })],
    ["Exact solutions", S`Solve \(2x^2+4x-1=0\) exactly.`,
      [S`<b>Identify.</b> \(a=2\), \(b=4\), \(c=-1\). It does not factor over the integers.`,
        S`<b>Formula.</b> \(x=\frac{-4\pm\sqrt{16+8}}4=\frac{-4\pm\sqrt{24}}4\).`,
        S`<b>Simplify the root.</b> \(\sqrt{24}=2\sqrt6\), so \(x=\frac{-4\pm2\sqrt6}4\).`,
        S`<b>Reduce.</b> Divide the top and bottom by 2: \(x=\frac{-2\pm\sqrt6}2\).`,
        S`<b>Check.</b> Sum of roots \(=-2=-\frac ba\) ✓. In decimals, the roots are about \(0.22\) and \(-2.22\), as the graph shows.`],
      S`\(x=\frac{-2\pm\sqrt6}{2}\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 2 * x * x + 4 * x - 1, color: "violet" }], points: [{ x: 0.2247, y: 0, label: "(0.22, 0)", color: "amber" }, { x: -2.2247, y: 0, label: "(−2.22, 0)", color: "amber" }, { x: -1, y: -3, label: "(−1, −3)" }], step: { x: 1, y: 1 } })],
    ["Family and discriminant", S`Find the quadratic with zeros \(1\pm\sqrt3\) through \((0,-4)\), then find \(k\) so that \(y=k\) is tangent to it.`,
      [S`<b>Family.</b> The factors combine as a difference of squares: \(y=a\left[(x-1)^2-3\right]=a(x^2-2x-2)\).`,
        S`<b>Use the point.</b> \(-4=a(-2)\), so \(a=2\). This gives \(y=2x^2-4x-4\).`,
        S`<b>Vertex form.</b> \(y=2\left[(x-1)^2-3\right]=2(x-1)^2-6\).`,
        S`<b>Tangent.</b> A horizontal line touches a parabola only at the vertex, so \(k=-6\).`,
        S`<b>Check with \(D=0\).</b> \(2x^2-4x-4-k=0\): \(D=16+8(4+k)=48+8k\). Setting \(D=0\) gives \(k=-6\) ✓`],
      S`\(y=2x^2-4x-4\); \(k=-6\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -7, ymax: 7 }, curves: [{ f: (x) => 2 * x * x - 4 * x - 4, color: "violet" }], lines: [{ m: 0, b: -6, color: "amber", dash: true }], points: [{ x: 1, y: -6, label: "(1, −6)" }, { x: 0, y: -4, label: "(0, −4)" }], step: { x: 1, y: 1 } })],
    ["Linear–quadratic in context", S`Revenue is \(R(x)=-x^2+20x\) and cost is \(C(x)=4x+39\) (thousands; \(x\) thousand items). Find the break-even quantities.`,
      [S`<b>Meaning.</b> Break-even means revenue equals cost, which is where the two graphs meet.`,
        S`<b>Set equal.</b> \(-x^2+20x=4x+39\).`,
        S`<b>Standard form.</b> \(x^2-16x+39=0\).`,
        S`<b>Factor.</b> Product 39, sum \(-16\): \(-3\) and \(-13\). So \((x-3)(x-13)=0\).`,
        S`<b>Check.</b> \(x=3\): \(R=51\), \(C=51\) ✓. \(x=13\): \(R=91\), \(C=91\) ✓. Between these, the curve is above the line, so the company makes a profit.`],
      "3000 and 13 000 items",
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 110 }, curves: [{ f: (x) => -x * x + 20 * x, a: 0, b: 20, color: "violet" }], lines: [{ m: 4, b: 39, color: "blue" }], points: [{ x: 3, y: 51, label: "(3, 51)", color: "amber" }, { x: 13, y: 91, label: "(13, 91)", color: "amber" }], step: { x: 2, y: 10 } }, "violet revenue, blue cost")],
  ]),

  practice([
    q("vertex", S`Find the minimum value of \(f(x)=2x^2-12x+23\).`, num(5),
      "Axis x = 3.", [S`\(18-36+23\).`], S`\(5\)`),
    q("solve", S`Solve \(x^2-2x-24=0\).`, roots(6, -4),
      "Factor.", [S`\((x-6)(x+4)\).`], S`\(x=6,\ -4\)`),
    q("discriminant", S`How many zeros does \(3x^2-6x+3\) have?`, num(1),
      "D = 36 − 36.", [S`\(D=0\).`], S`\(1\)`),
    q("family", S`Find \(a\) if \(y=a(x-2)(x-6)\) passes through \((4,-8)\).`, num(2),
      "Substitute.", [S`\(a(2)(-2)=-4a=-8\).`], S`\(2\)`),
    q("system", S`How many points do \(y=x^2-3\) and \(y=-2x-5\) share?`, num(0),
      "x² + 2x + 2 = 0.", [S`\(D=4-8<0\).`], S`\(0\)`),
  ]),

  ...hard([
    ["Profit with a price change", S`A gym has 600 members paying 50 dollars a month. Each 2-dollar increase loses 10 members. What fee maximises revenue, and for which fees is revenue at least 31 500 dollars?`,
      [S`\(R(x)=(50+2x)(600-10x)\); zeros \(-25\) and 60; axis \(x=17.5\): fee 85 dollars, \(R=85(425)=36\,125\).`, S`\(R\ge31500\): \(-20x^2+700x+30000\ge31500\Rightarrow x^2-35x+75\le0\).`, S`\(x=\frac{35\pm\sqrt{925}}{2}\approx2.29\) and \(32.71\): fees from about 54.59 to 115.41 dollars.`],
      "85 dollars a month; fees between about 54.59 and 115.41 dollars give at least 31 500 dollars",
      plane({ view: { xmin: -26, xmax: 62, ymin: 0, ymax: 40000 }, curves: [{ f: (x) => (50 + 2 * x) * (600 - 10 * x), a: -25, b: 60, color: "violet" }], lines: [{ m: 0, b: 31500, color: "amber", dash: true }], points: [{ x: 17.5, y: 36125, label: "(17.5, 36 125)" }], step: { x: 10, y: 5000 }, xlabel: "steps x", ylabel: "R" })],
    ["Tangent from a family", S`For which \(a\) is the line \(y=4x-3\) tangent to \(y=a(x-1)(x-3)\)?`,
      [S`\(a(x^2-4x+3)=4x-3\Rightarrow ax^2-(4a+4)x+(3a+3)=0\).`, S`\(D=(4a+4)^2-4a(3a+3)=16a^2+32a+16-12a^2-12a=4a^2+20a+16\).`, S`\(D=0\Rightarrow a^2+5a+4=0\Rightarrow a=-1\) or \(a=-4\).`],
      S`\(a=-1\) or \(a=-4\)`],
  ], [
    q("hard", S`\(y=x^2+bx+16\) has exactly one zero and \(b>0\). Find \(b\).`, num(8),
      "D = 0.", [S`\(b^2=64\).`], S`\(8\)`),
    q("hard", S`A parabola has vertex \((3,-8)\) and one zero at \(x=5\). Find its y-intercept.`, num(10),
      "The other zero is 1; find a.", [S`\(y=a(x-3)^2-8\); \(4a-8=0\Rightarrow a=2\); \(2(9)-8\).`], S`\(10\)`),
    q("hard", S`\(y=x+k\) meets \(y=-x^2+4x\) twice. What is the largest integer \(k\)?`, num(2),
      "−x² + 3x − k = 0, D > 0.", [S`\(9-4k>0\Rightarrow k<2.25\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What should I memorise?", "The three forms, the formula, D = b² − 4ac, and axis = average of the zeros."],
      ["How do I set up an optimisation problem?", "Write the quantity to optimise as a product of two linear expressions, find the zeros, and average them."],
      ["When is a root inadmissible?", "When it gives a negative length or time, or falls outside the context's domain."],
      ["How do families and systems connect?", "A tangent line from a family gives a condition on a — solve D = 0 for it."],
      ["How should I review?", "Redo each lesson's hard-level problems without notes, then check with the explorers."],
    ],
    summary: [
      "Forms: factored (zeros), vertex (max/min), standard (y-intercept).",
      "Optimise at the vertex; solve with factoring or the formula.",
      "Discriminant counts zeros and intersections.",
      "Families: y = a(x − r)(x − s); one point fixes a.",
    ],
    next: "Chapter 4 studies exponential functions.",
  }),
];
