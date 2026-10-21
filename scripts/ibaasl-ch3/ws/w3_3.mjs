// IB AA SL Worksheet 3.3 — Transformations of Functions (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Two translations", q: S`Describe $y=x^2-5$ and $y=(x+4)^2$ as transformations of $y=x^2$.`,
    steps: [S`$f(x)-5$: down 5. $f(x+4)$: left 4.`], ans: "down 5; left 4" },
  { title: "Images of one point", q: S`$(2,6)$ is on $y=f(x)$. Find its images on $y=f(x)-3$, $y=f(x-1)$, $y=-f(x)$ and $y=f(-x)$.`,
    steps: [S`$(2,3)$, $(3,6)$, $(2,-6)$, $(-2,6)$.`], ans: S`$(2,3)$, $(3,6)$, $(2,-6)$, $(-2,6)$` },
  { title: "Stretches", q: S`$(8,2)$ is on $y=f(x)$. Find its images on $y=4f(x)$ and $y=f(4x)$.`,
    steps: [S`Vertical ×4: $(8,8)$. Horizontal ×$\frac14$: $(2,2)$.`], ans: S`$(8,8)$ and $(2,2)$` },
  { title: "A reflected root graph", q: S`$y=\sqrt x$ is reflected in the x-axis and then translated up 3. Write the new equation and sketch it.`,
    fig: F({ view: { xmin: -1, xmax: 10, ymin: -2, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 3 - Math.sqrt(x), a: 0 }], points: [pt(0, 3), pt(9, 0)] }),
    steps: [S`$-\sqrt x$, then $-\sqrt x+3$.`], ans: S`$y=3-\sqrt x$` },
  { title: "A translated reciprocal", q: S`$y=\frac1x$ is translated 2 left and 1 down. Write the equation and its asymptotes.`,
    fig: F({ view: { xmin: -7, xmax: 4, ymin: -6, ymax: 4 }, curves: [{ f: (x) => 1 / (x + 2) - 1, a: -7, b: -2.1 }, { f: (x) => 1 / (x + 2) - 1, a: -1.9, b: 4 }], vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: -1, color: "red", dash: true }] }),
    steps: [S`$y=\frac{1}{x+2}-1$.`], ans: S`asymptotes $x=-2$, $y=-1$` },
  { title: "From the parent to vertex form", q: S`Describe $y=3(x+2)^2-4$ as transformations of $y=x^2$.`,
    steps: [S`Left 2, vertical stretch ×3, down 4; vertex $(-2,-4)$.`], ans: "left 2, ×3 vertically, down 4" },
  { title: "A horizontal stretch", q: S`Describe $y=f\left(\frac x3\right)$.`,
    steps: [S`$q=\frac13$: x-coordinates ×3.`], ans: "horizontal stretch, scale factor 3" },
  { title: "Equivalent transformations", q: S`$y=|x|$ is translated 1 right and then reflected in the y-axis. Show the result is the same as translating 1 left.`,
    steps: [S`$|x-1|$, then $|-x-1|=|x+1|$.`], ans: S`$y=|x+1|$` },
  { title: "Finding the stretch factor", q: S`$y=a(x-1)^2+5$ passes through $(3,-3)$. Find $a$.`,
    steps: [S`$4a+5=-3$.`], ans: S`$a=-2$` },
];

const PROBLEMS = [
  { level: 1, q: S`Describe $y=x^2+7$ as a transformation of $y=x^2$.`, recap: "Vertical translation.", ans: "up 7" },
  { level: 1, q: S`Describe $y=(x-6)^2$ as a transformation of $y=x^2$.`, recap: "Horizontal translation.", ans: "right 6" },
  { level: 1, q: S`$(3,4)$ is on $y=f(x)$. Find its image on $y=f(x)+2$.`, recap: "Image.", ans: S`$(3,6)$` },
  { level: 2, q: S`$(-2,5)$ is on $y=f(x)$. Find its image on $y=f(x+4)$.`, recap: "Image.", ans: S`$(2,5)$` },
  { level: 2, q: S`$(-2,5)$ is on $y=f(x)$. Find its image on $y=-2f(x)$.`, recap: "Image.", ans: S`$(-2,-10)$` },
  { level: 2, q: S`$y=|x|$ is stretched vertically by 3 and translated 2 right. Write the equation.`, recap: "Equation from words.", ans: S`$y=3|x-2|$` },
  { level: 2, q: S`Describe $y=\sqrt{x+1}-2$ as transformations of $y=\sqrt x$, and sketch it.`, recap: "Describe.", ans: S`left 1, down 2; starts at $(-1,-2)$`,
    fig: F({ view: { xmin: -2, xmax: 8, ymin: -3, ymax: 3 } }) },
  { level: 2, q: S`$(6,3)$ is on $y=f(x)$. Find its image on $y=f(3x)$.`, recap: "Horizontal stretch.", ans: S`$(2,3)$` },
  { level: 3, space: 5, q: S`Describe in order how $y=-(x-2)^2+5$ is obtained from $y=x^2$, and find the image of $(1,1)$.`, recap: "Chain.", ans: S`right 2, reflect in x-axis, up 5; $(3,4)$` },
  { level: 3, space: 5, q: S`Describe $y=\frac{2}{x-3}+1$ as transformations of $y=\frac1x$, state its asymptotes, and find the image of $(1,1)$.`, recap: "Reciprocal.", ans: S`right 3, vertical ×2, up 1; $x=3$, $y=1$; $(4,3)$` },
  { level: 3, space: 4, q: S`From $y=x^2$, compare 'translate up 1 then stretch vertically by 3' with 'stretch by 3 then translate up 1'.`, recap: "Order.", ans: S`$3x^2+3$ vs $3x^2+1$` },
  { level: 3, space: 5, q: S`The graph of $f$ joins $(0,0)$, $(2,4)$ and $(4,0)$. Find the images of these points on $y=f(x-1)+2$ and sketch both graphs.`, recap: "Piecewise graph.", ans: S`$(1,2)$, $(3,6)$, $(5,2)$`,
    fig: F({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 7 }, segs: [{ pts: [[0, 0], [2, 4], [4, 0]] }] }) },
  { level: 3, space: 4, q: S`Find the transformations that map $y=x^2$ onto $y=x^2-6x+11$.`, recap: "Complete the square first.", ans: S`$(x-3)^2+2$: right 3, up 2` },
];

export const WS = {
  code: "3.3",
  title: "Transformations of Functions",
  bigideas: S`$y=f(x)+b$ and $y=f(x-a)$ translate; $y=-f(x)$ and $y=f(-x)$ reflect in the x- and y-axes; $y=pf(x)$ stretches vertically by $p$ and $y=f(qx)$ horizontally by $\frac1q$. Changes outside act on outputs; changes inside act on inputs, in the opposite sense. Apply composite transformations in the stated order.`,
  goals: ["Translate, reflect and stretch graphs.", "Find images of points.", "Write equations of transformed graphs.", "Apply transformations in order."],
  curriculum: "SL 2.11",
  vocab: [["Translation", "slide"], ["Reflection", "mirror in an axis"], ["Stretch", "scale one coordinate"]],
  hook: "Graph y = x² on a GDC, then type y = (x − 3)². Ask students to predict, then explain why 'minus 3' moves the graph right.",
  concepts: [
    ["1. Translations", S`${F({ view: { xmin: -5, xmax: 6, ymin: -3, ymax: 9 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => (x + 2) ** 2 - 1 }], points: [pt(-2, -1)] }, 5)} $y=(x+2)^2-1$: left 2, down 1.`],
    ["2. Reflections and stretches", S`$-f(x)$ flips $y$; $f(-x)$ flips $x$; $pf(x)$ multiplies $y$ by $p$; $f(qx)$ multiplies $x$ by $\frac1q$.`],
    ["3. Order", S`Track a point step by step; a stretch after a translation also stretches the translation.`],
  ],
  tips: ["Inside changes act on x, opposite way.", "f(2x) is a stretch by factor ½.", "Track one easy point.", "Order matters for stretch + translate.", "Asymptotes move with translations."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
