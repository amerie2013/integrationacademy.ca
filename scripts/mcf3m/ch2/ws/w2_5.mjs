// MCF3M Worksheet 2.5 — Factoring Special Quadratics (teacher edition)
import { F, pt, svgT } from "../../ws/figT.mjs";
import { areaBox } from "../../figs.mjs";
const S = String.raw;
const B = (cols, rows, cells, t) => svgT(areaBox(cols, rows, cells, t), 5.2);
const Z = (f, view, zeros, step) => F({ view, curves: [{ f, color: "violet" }], points: zeros.map((z) => pt(z, 0, null, "amber")), step });

const EXAMPLES = [
  { title: "Difference of squares", q: S`Factor $x^2-64$.`,
    fig: Z((x) => x * x - 64, { xmin: -10, xmax: 10, ymin: -70, ymax: 40 }, [-8, 8], { x: 2, y: 10 }),
    steps: [S`\textbf{Recognise:} $x^2-8^2$.`, S`$(x-8)(x+8)$.`, S`\textbf{Check:} zeros $\pm8$, symmetric about the $y$-axis \checkmark`],
    ans: S`$(x-8)(x+8)$` },
  { title: "Coefficient squares", q: S`Factor $49x^2-100$.`,
    fig: B(["7x", "+10"], ["7x", "−10"], [["49x²", "70x"], ["−70x", "−100"]], "(7x − 10)(7x + 10)"),
    steps: [S`$49x^2=(7x)^2$, $100=10^2$.`, S`$(7x-10)(7x+10)$.`, S`The middle cells cancel \checkmark`],
    ans: S`$(7x-10)(7x+10)$` },
  { title: "Reversed order", q: S`Factor $36-25x^2$.`,
    fig: Z((x) => 36 - 25 * x * x, { xmin: -2, xmax: 2, ymin: -10, ymax: 40 }, [-1.2, 1.2], { x: 0.5, y: 5 }),
    steps: [S`$6^2-(5x)^2$.`, S`$(6-5x)(6+5x)$.`, S`Zeros $\pm1.2$; the parabola opens down \checkmark`],
    ans: S`$(6-5x)(6+5x)$` },
  { title: "Perfect square (+)", q: S`Factor $x^2+20x+100$.`,
    fig: Z((x) => x * x + 20 * x + 100, { xmin: -16, xmax: -4, ymin: -2, ymax: 30 }, [-10], { x: 2, y: 5 }),
    steps: [S`\textbf{Ends:} $x^2$, $100=10^2$. \textbf{Middle:} $2(x)(10)=20x$ \checkmark`, S`$(x+10)^2$.`, S`The graph touches the axis only at $x=-10$ \checkmark`],
    ans: S`$(x+10)^2$` },
  { title: "Perfect square (−)", q: S`Factor $16x^2-40x+25$.`,
    fig: B(["4x", "−5"], ["4x", "−5"], [["16x²", "−20x"], ["−20x", "25"]], "(4x − 5)²"),
    steps: [S`\textbf{Ends:} $(4x)^2$, $5^2$. \textbf{Middle:} $2(4x)(5)=40x$, sign $-$.`, S`$(4x-5)^2$.`, S`\textbf{Check:} $16x^2-20x-20x+25$ \checkmark`],
    ans: S`$(4x-5)^2$` },
  { title: "Not a perfect square", q: S`Is $x^2+12x+20$ a perfect square? Factor it.`,
    fig: Z((x) => x * x + 12 * x + 20, { xmin: -12, xmax: 1, ymin: -18, ymax: 22 }, [-2, -10], { x: 1, y: 5 }),
    steps: [S`$20$ is not a perfect square, so no.`, S`\textbf{Product–sum:} $2$ and $10$.`, S`$(x+2)(x+10)$; two zeros \checkmark`],
    ans: S`$(x+2)(x+10)$` },
  { title: "GCF then pattern", q: S`Factor fully $7x^2-63$ and $2x^2+24x+72$.`,
    fig: Z((x) => 2 * x * x + 24 * x + 72, { xmin: -10, xmax: -2, ymin: -2, ymax: 20 }, [-6], { x: 1, y: 2 }),
    steps: [S`$7(x^2-9)=7(x-3)(x+3)$.`, S`$2(x^2+12x+36)=2(x+6)^2$.`, S`\textbf{Check at $x=0$:} $-63=7(-3)(3)$ and $72=2(36)$ \checkmark`],
    ans: S`$7(x-3)(x+3)$; $2(x+6)^2$` },
  { title: "Sum of squares", q: S`Explain why $4x^2+9$ cannot be factored over the real numbers.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 30 }, curves: [{ f: (x) => 4 * x * x + 9, color: "violet" }], points: [pt(0, 9, null, "amber")], step: { x: 1, y: 5 } }),
    steps: [S`$4x^2\ge0$, so $4x^2+9\ge9>0$ for every $x$: there is no zero.`, S`A real factor $(px-q)$ would give a zero $x=\frac qp$.`, S`So no real linear factors; the graph never reaches the axis \checkmark`],
    ans: S`it is never zero` },
  { title: "Squares of binomials", q: S`Factor $(x+5)^2-(x-1)^2$.`,
    fig: F({ view: { xmin: -4, xmax: 2, ymin: -20, ymax: 30 }, lines: [{ m: 12, b: 24, color: "violet" }], points: [pt(-2, 0, null, "amber")], step: { x: 1, y: 5 } }),
    steps: [S`$a=x+5$, $b=x-1$: $(a-b)(a+b)$.`, S`$a-b=6$; $a+b=2x+4$.`, S`$6(2x+4)=12(x+2)$; the result is linear, zero at $x=-2$ \checkmark`],
    ans: S`$12(x+2)$` },
];

const PROBLEMS = [
  { level: 1, q: S`Factor $x^2-144$.`, ans: S`$(x-12)(x+12)$` },
  { level: 1, q: S`Factor $x^2-6x+9$.`, ans: S`$(x-3)^2$` },
  { level: 1, q: S`Factor $25x^2-1$.`, ans: S`$(5x-1)(5x+1)$` },
  { level: 2, q: S`Factor $9x^2+12x+4$.`, ans: S`$(3x+2)^2$` },
  { level: 2, q: S`Factor fully $3x^2-75$.`, ans: S`$3(x-5)(x+5)$` },
  { level: 2, q: S`Factor fully $-x^2+22x-121$.`, ans: S`$-(x-11)^2$` },
  { level: 2, q: S`Factor $81-x^2$.`, ans: S`$(9-x)(9+x)$` },
  { level: 2, q: S`Which of $x^2+49$, $x^2-49$, $x^2+14x+49$ cannot be factored? Explain.`, ans: S`$x^2+49$: a sum of squares` },
  { level: 3, space: 5, q: S`Factor fully $x^4-16$.`, ans: S`$(x-2)(x+2)(x^2+4)$` },
  { level: 3, space: 5, q: S`Find $k$ so that $25x^2+kx+4$ is a perfect square (both values).`, ans: S`$k=\pm20$` },
  { level: 3, space: 5, q: S`Factor $(2x+1)^2-9$ and state the zeros. Sketch the graph.`, fig: F({ view: { xmin: -4, xmax: 3, ymin: -10, ymax: 10 } }), ans: S`$(2x-2)(2x+4)=4(x-1)(x+2)$; $1$, $-2$` },
  { level: 3, space: 5, q: S`Use a difference of squares to compute $98\times102$ without a calculator.`, ans: S`$100^2-2^2=9996$` },
  { level: 3, space: 5, q: S`A square of side $x$ has a square of side $3$ removed from one corner. Show the remaining area is $(x-3)(x+3)$ and explain how to rearrange it into a rectangle.`, ans: S`$x^2-9$; cut the L-shape and move a strip to form $(x+3)$ by $(x-3)$` },
];

export const WS = {
  code: "2.5",
  title: "Factoring Special Quadratics",
  bigideas: S`A \textbf{difference of squares} $a^2-b^2$ factors as $(a-b)(a+b)$, and a \textbf{perfect square trinomial} $a^2\pm2ab+b^2$ factors as $(a\pm b)^2$. A sum of squares $a^2+b^2$ has no real factors. On a graph, a difference of squares $x^2-k^2$ has zeros $\pm k$, and a perfect square touches the axis at one point.`,
  goals: ["Recognise and factor differences of squares.", "Recognise and factor perfect square trinomials.", "Take out a GCF first.", "Explain why sums of squares do not factor."],
  curriculum: "A1.3",
  vocab: [["Difference of squares", "$a^2-b^2$"], ["Perfect square trinomial", "$a^2\\pm2ab+b^2$"], ["Sum of squares", "$a^2+b^2$"], ["Double root", "repeated zero"]],
  hook: S`Compute $21\times19$ and $20^2-1$. Then $31\times29$ and $30^2-1$. Explain the pattern with algebra.`,
  concepts: [
    ["1. Difference of squares", S`$(a-b)(a+b)=a^2-ab+ab-b^2=a^2-b^2$: the middle terms cancel.
${B(["x", "+6"], ["x", "−6"], [["x²", "6x"], ["−6x", "−36"]], "(x − 6)(x + 6) = x² − 36")}`],
    ["2. Perfect square trinomials", S`Roots of the end terms are $a$ and $b$; the middle must be exactly $\pm2ab$. Then the trinomial is $(a\pm b)^2$.`],
    ["3. Graphs", S`$y=x^2-k^2$: zeros $\pm k$. $y=(x-r)^2$: one zero, the vertex on the axis. $y=x^2+k^2$: no zeros.
${F({ view: { xmin: -5, xmax: 5, ymin: -10, ymax: 14 }, curves: [{ f: (x) => x * x - 9, color: "violet" }, { f: (x) => (x - 2) ** 2, color: "blue" }, { f: (x) => x * x + 4, color: "red" }], step: { x: 1, y: 2 } }, 6, "x² − 9 (two zeros), (x − 2)² (one), x² + 4 (none).")}`],
  ],
  tips: ["Ask students to name $a$ and $b$ before writing factors.", "Common error: $x^2+16=(x+4)^2$; test with $x=1$.", "Look for a GCF before any pattern."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
