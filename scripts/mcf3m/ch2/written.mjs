// MCF3M chapter 2 written-response questions (Part C of printed tests), each with a figure and a marking guide.
import { planeDoc, areaBox } from "../figs.mjs";
import { lesson } from "../plan.mjs";
const S = String.raw;
const W = (code, difficulty, points, prompt, feedback, fig) => ({ topic: lesson(code).full, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W("2.1", "medium", 4, S`(a) Use the area model to expand $(2x-5)(3x+4)$. (b) Expand and simplify $(x+4)^2-2(x-1)(x+3)$.`,
    S`(a) $6x^2+8x-15x-20=6x^2-7x-20$. (b) $x^2+8x+16-2x^2-4x+6=-x^2+4x+22$. [2, 2.]`,
    areaBox(["3x", "+4"], ["2x", "−5"], [["", ""], ["", ""]], "(2x − 5)(3x + 4)")),
  W("2.1", "hard", 5, S`A $30$ m by $20$ m field has a walkway of width $x$ m around it. (a) Write the walkway area in standard form. (b) Find the walkway area when $x=2.5$. (c) Explain why the answer to (a) has no constant term.`,
    S`(a) $(30+2x)(20+2x)-600=4x^2+100x$. (b) $25+250=275$ m$^2$. (c) the field's $600$ is subtracted. [2, 1, 2.]`,
    areaBox(["30", "+2x"], ["20", "+2x"], [["600", "40x"], ["60x", "4x²"]])),
  W("2.2", "medium", 4, S`(a) Factor fully $12x^3-18x^2$. (b) Factor by grouping $2x^2+10x-3x-15$. (c) Check (b) by expanding.`,
    S`(a) $6x^2(2x-3)$. (b) $2x(x+5)-3(x+5)=(x+5)(2x-3)$. (c) $2x^2-3x+10x-15$ \checkmark. [1, 2, 1.]`,
    areaBox(["2x", "−3"], ["x", "+5"], [["2x²", "−3x"], ["10x", "−15"]])),
  W("2.2", "hard", 5, S`A rocket's height is $h(t)=-4.9t^2+39.2t$ m (graph shown). (a) Factor $h(t)$. (b) Find when it lands. (c) Use symmetry to find its maximum height.`,
    S`(a) $-4.9t(t-8)$. (b) $t=8$ s. (c) vertex at $t=4$: $-78.4+156.8=78.4$ m. [1, 2, 2.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 9, ymin: -5, ymax: 90 }, curves: [{ f: (t) => -4.9 * t * t + 39.2 * t, a: 0, b: 8, color: "violet" }], step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W("2.3", "medium", 4, S`Factor fully and state the zeros: (a) $x^2-3x-54$; (b) $2x^2+14x+20$. (c) Sketch (a) using its zeros on the grid.`,
    S`(a) $(x-9)(x+6)$: $9$, $-6$. (b) $2(x+2)(x+5)$: $-2$, $-5$. (c) parabola up through $(9,0)$, $(-6,0)$, $(0,-54)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -8, xmax: 11, ymin: -65, ymax: 20 }, step: { x: 1, y: 10 } })),
  W("2.3", "hard", 5, S`(a) Find all integers $b$ for which $x^2+bx-20$ factors. (b) Factor $x^4-29x^2+100$ completely. (c) A profit $P(x)=-x^2+14x-40$; find the break-even points.`,
    S`(a) $\pm19,\pm8,\pm1$. (b) $(x-2)(x+2)(x-5)(x+5)$. (c) $-(x-4)(x-10)$: $4$ and $10$. [2, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 14, ymin: -20, ymax: 12 }, curves: [{ f: (x) => -x * x + 14 * x - 40, color: "violet" }], step: { x: 1, y: 4 } })),
  W("2.4", "medium", 4, S`Factor by decomposition, showing the split: (a) $3x^2+14x+8$; (b) $6x^2-7x-5$. (c) State the zeros of (b) and mark them on the graph.`,
    S`(a) $12,2$: $(3x+2)(x+4)$. (b) $-10,3$: $(3x-5)(2x+1)$. (c) $\tfrac53$, $-\tfrac12$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 3, ymin: -8, ymax: 10 }, curves: [{ f: (x) => 6 * x * x - 7 * x - 5, color: "violet" }], step: { x: 0.5, y: 2 } })),
  W("2.4", "hard", 5, S`A ball is thrown: $h(t)=-5t^2+17t+12$ m. (a) Factor fully. (b) When does it land? (c) Is it higher than $20$ m at $t=2$? (d) Explain why one zero is rejected.`,
    S`(a) $-(5t+3)(t-4)$. (b) $4$ s. (c) $h(2)=-20+34+12=26>20$: yes. (d) $t=-0.6$ is before the throw. [2, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 4.5, ymin: -5, ymax: 30 }, curves: [{ f: (t) => -5 * t * t + 17 * t + 12, color: "violet" }], step: { x: 0.5, y: 5 }, xlabel: "t", ylabel: "h" })),
  W("2.5", "medium", 4, S`Factor: (a) $49x^2-36$; (b) $x^2-18x+81$; (c) $4x^2+20x+25$; (d) explain from the graph why $x^2+16$ does not factor.`,
    S`(a) $(7x-6)(7x+6)$. (b) $(x-9)^2$. (c) $(2x+5)^2$. (d) the graph never meets the $x$-axis. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 5, ymin: -2, ymax: 30 }, curves: [{ f: (x) => x * x + 16, color: "red" }], step: { x: 1, y: 4 } })),
  W("2.5", "hard", 5, S`(a) Factor fully $3x^4-48$. (b) Find $k$ so that $kx^2-60x+25$ is a perfect square. (c) Compute $998\times1002$ by factoring.`,
    S`(a) $3(x-2)(x+2)(x^2+4)$. (b) $2\sqrt k\cdot5=60$: $k=36$. (c) $1000^2-4=999\,996$. [2, 2, 1.]`,
    areaBox(["x²", "+4"], ["x²", "−4"], [["x⁴", "4x²"], ["−4x²", "−16"]], "(x² − 4)(x² + 4)")),
];
