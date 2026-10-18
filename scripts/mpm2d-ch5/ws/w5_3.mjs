// MPM2D Worksheet 5.3 — The Quadratic Formula (teacher edition)
import { F, gridT, parT, rectT, svgT } from "./figT.mjs";

const rightTri = svgT(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 230" width="360" height="230" font-family="Arial, sans-serif"><rect width="360" height="230" fill="#fff"/><polygon points="60,190 300,190 60,40" fill="#dbeafe" stroke="#1e40af" stroke-width="3"/><polyline points="60,172 78,172 78,190" fill="none" stroke="#1e40af" stroke-width="2"/><text x="180" y="214" font-size="18" font-weight="700" text-anchor="middle" fill="#0f172a">x + 7</text><text x="48" y="120" font-size="18" font-weight="700" text-anchor="end" fill="#0f172a">x</text><text x="196" y="106" font-size="18" font-weight="700" fill="#0f172a">13</text><text x="300" y="30" font-size="13" text-anchor="end" fill="#64748b">not to scale</text></svg>`, 5);

const EXAMPLES = [
  { title: "Rational roots", q: String.raw`Solve $x^2+3x-10=0$ with the formula.`,
    steps: [String.raw`$a=1$, $b=3$, $c=-10$: $b^2-4ac=9+40=49$.`, String.raw`$x=\frac{-3\pm7}{2}$: $2$ or $-5$.`], ans: String.raw`$x=2$ or $x=-5$` },
  { title: "a ≠ 1", q: String.raw`Solve $3x^2-7x+2=0$.`,
    steps: [String.raw`$b^2-4ac=49-24=25$.`, String.raw`$x=\frac{7\pm5}{6}$: $2$ or $\frac13$.`], ans: String.raw`$x=2$ or $x=\tfrac13$` },
  { title: "Irrational roots", q: String.raw`Solve $x^2-4x-7=0$. Give exact roots and decimals.`,
    fig: parT((x) => x * x - 4 * x - 7, [2 - Math.sqrt(11), 2 + Math.sqrt(11)], { xmin: -3, xmax: 7, ymin: -12, ymax: 8 }, { step: { x: 1, y: 2 } }),
    steps: [String.raw`$b^2-4ac=16+28=44$, $\sqrt{44}=2\sqrt{11}$.`, String.raw`$x=\frac{4\pm2\sqrt{11}}{2}=2\pm\sqrt{11}$.`], ans: String.raw`$x=2\pm\sqrt{11}\approx5.32,\ -1.32$` },
  { title: "Simplify the radical", q: String.raw`Solve $2x^2+6x+1=0$.`,
    fig: parT((x) => 2 * x * x + 6 * x + 1, [(-3 - Math.sqrt(7)) / 2, (-3 + Math.sqrt(7)) / 2], { xmin: -4, xmax: 1, ymin: -4, ymax: 6 }),
    steps: [String.raw`$b^2-4ac=36-8=28=4\cdot7$.`, String.raw`$x=\frac{-6\pm2\sqrt7}{4}=\frac{-3\pm\sqrt7}{2}$.`], ans: String.raw`$x=\frac{-3\pm\sqrt7}{2}\approx-0.18,\ -2.82$` },
  { title: "Rearrange first", q: String.raw`Solve $5x^2=3x+1$ to two decimal places.`,
    steps: [String.raw`$5x^2-3x-1=0$: $b^2-4ac=9+20=29$.`, String.raw`$x=\frac{3\pm\sqrt{29}}{10}$.`], ans: String.raw`$x\approx0.84$ or $x\approx-0.24$` },
  { title: "Negative a", q: String.raw`Solve $-x^2+4x+6=0$.`,
    fig: parT((x) => -x * x + 4 * x + 6, [2 - Math.sqrt(10), 2 + Math.sqrt(10)], { xmin: -3, xmax: 7, ymin: -6, ymax: 12 }, { step: { x: 1, y: 2 } }),
    steps: [String.raw`$a=-1$: $b^2-4ac=16+24=40$.`, String.raw`$x=\frac{-4\pm2\sqrt{10}}{-2}=2\mp\sqrt{10}$.`], ans: String.raw`$x=2\pm\sqrt{10}\approx5.16,\ -1.16$` },
  { title: "No real roots", q: String.raw`Solve $x^2+2x+7=0$.`,
    fig: F({ view: { xmin: -4, xmax: 2, ymin: -1, ymax: 12 }, curves: [{ f: (x) => x * x + 2 * x + 7, color: "violet" }], points: [{ x: -1, y: 6, label: "(−1, 6)", color: "blue" }], step: { x: 1, y: 2 } }),
    steps: [String.raw`$b^2-4ac=4-28=-24<0$.`], ans: "no real roots" },
  { title: "Decimal coefficients", q: String.raw`Solve $0.5x^2-1.5x-2=0$.`,
    steps: [String.raw`$b^2-4ac=2.25+4=6.25$, $\sqrt{6.25}=2.5$.`, String.raw`$x=\frac{1.5\pm2.5}{1}$.`], ans: String.raw`$x=4$ or $x=-1$` },
  { title: "A kicked ball", q: String.raw`A ball's height is $h=-4.9t^2+12t+1.5$ metres. When does it land?`,
    fig: F({ view: { xmin: -0.3, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: (t) => -4.9 * t * t + 12 * t + 1.5, a: 0, b: 2.568, color: "blue" }], points: [{ x: 0, y: 1.5, label: "(0, 1.5)", color: "green" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 1 } }),
    steps: [String.raw`$b^2-4ac=144+29.4=173.4$.`, String.raw`$t=\frac{-12\pm\sqrt{173.4}}{-9.8}$: $t\approx2.57$ or $t\approx-0.12$ (reject).`], ans: String.raw`after about $2.57$ s` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Write $4x^2-x=9$ in standard form and state $a$, $b$, $c$.`, recap: "a, b, c.", ans: String.raw`$4x^2-x-9=0$: $a=4$, $b=-1$, $c=-9$` },
  { level: 1, q: String.raw`Evaluate $b^2-4ac$ for $x^2+5x+3=0$.`, recap: "Discriminant.", ans: "$13$" },
  { level: 1, q: String.raw`Solve $x^2-5x+6=0$ using the formula.`, recap: "Formula.", ans: String.raw`$x=2$ or $x=3$` },
  { level: 2, q: String.raw`Solve $2x^2+x-6=0$.`, recap: "Rational roots.", ans: String.raw`$x=\tfrac32$ or $x=-2$` },
  { level: 2, q: String.raw`Solve $x^2+6x+2=0$. Give exact roots and decimals, then sketch $y=x^2+6x+2$ using the roots and the vertex.`, recap: "Irrational roots, sketch.", ans: String.raw`$x=-3\pm\sqrt7\approx-0.35,\ -5.65$; vertex $(-3,-7)$`, fig: gridT({ xmin: -8, xmax: 2, ymin: -8, ymax: 6 }) },
  { level: 2, q: String.raw`Solve $3x^2-4x-2=0$. Give exact roots and decimals.`, recap: "Simplify the radical.", ans: String.raw`$x=\frac{2\pm\sqrt{10}}{3}\approx1.72,\ -0.39$` },
  { level: 2, q: String.raw`Solve $x^2=8x-13$.`, recap: "Rearrange.", ans: String.raw`$x=4\pm\sqrt3\approx5.73,\ 2.27$` },
  { level: 2, q: String.raw`Solve $4x^2+4x+3=0$.`, recap: "Negative discriminant.", ans: String.raw`$b^2-4ac=-32$: no real roots` },
  { level: 3, space: 5, q: String.raw`A stone is thrown from a $30$ m cliff: $h=-4.9t^2+8t+30$. When does it hit the ground (to two decimals)?`, recap: "Cliff.", ans: String.raw`$t\approx3.42$ s` },
  { level: 3, space: 5, q: String.raw`Use the formula to show that the two roots of $x^2+bx+c=0$ always add to $-b$.`, recap: "Sum of roots.", ans: String.raw`$\frac{-b+\sqrt D}{2}+\frac{-b-\sqrt D}{2}=\frac{-2b}{2}=-b$` },
  { level: 3, space: 5, q: String.raw`To solve $2x^2-3x-5=0$, a student writes $x=\frac{-3\pm\sqrt{9+40}}{4}$. Find the error and solve correctly.`, recap: "Find the error.", ans: String.raw`$-b=+3$: $x=\frac{3\pm7}{4}$, so $x=\tfrac52$ or $x=-1$` },
  { level: 3, space: 5, q: String.raw`A right triangle has legs $x$ and $x+7$ and hypotenuse $13$ (all in cm). Find the legs.`, recap: "Pythagorean.", ans: String.raw`$x^2+(x+7)^2=169\Rightarrow x^2+7x-60=0$: $5$ cm and $12$ cm`, fig: rightTri },
  { level: 3, space: 5, q: String.raw`A rectangle's length is $4$ m more than its width and its area is $30$ m$^2$. Find its dimensions to two decimals.`, recap: "Area to decimals.", ans: String.raw`$w^2+4w-30=0$: $w=-2+\sqrt{34}\approx3.83$ m by $7.83$ m`, fig: rectT("w + 4", "w", "area 30 m²") },
];

export const WS = {
  code: "5.3",
  title: "The Quadratic Formula",
  bigideas: String.raw`Completing the square on $ax^2+bx+c=0$ gives $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$, which solves every quadratic equation. Write the equation in standard form, read $a$, $b$, $c$ with their signs, compute $b^2-4ac$ first, simplify the radical, and round only at the end. A negative value under the root means no real roots.`,
  goals: ["Follow the development of the formula.", "Identify a, b, c in standard form.", "Find exact and approximate roots.", "Apply the formula to models."],
  curriculum: "QR3, QR4",
  vocab: [["Quadratic formula", "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$"], ["Discriminant", "$b^2-4ac$"], ["Simplified radical", "$\\sqrt{44}=2\\sqrt{11}$"]],
  hook: String.raw`Give the class $3x^2-7x-1=0$ and ask them to complete the square. When the fractions pile up, offer to do it once for every equation.`,
  concepts: [
    ["1. Development", String.raw`$x^2+\frac bax=-\frac ca\Rightarrow\left(x+\frac{b}{2a}\right)^2=\frac{b^2-4ac}{4a^2}\Rightarrow x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$.`],
    ["2. Using it", String.raw`Standard form; $a$, $b$, $c$ with signs; $b^2-4ac$; substitute; simplify.
${parT((x) => x * x - 2 * x - 4, [1 - Math.sqrt(5), 1 + Math.sqrt(5)], { xmin: -3, xmax: 5, ymin: -6, ymax: 6 })}`],
    ["3. Symmetry", String.raw`The roots are $-\frac{b}{2a}$ plus and minus $\frac{\sqrt{b^2-4ac}}{2a}$: symmetric about the axis.`],
  ],
  tips: ["−b flips the sign of b.", "Square b in brackets.", "Divide everything by 2a.", "Rearrange to = 0 first.", "Round at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
