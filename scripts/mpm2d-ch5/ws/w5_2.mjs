// MPM2D Worksheet 5.2 — Completing the Square (solving) (teacher edition)
import { F, gridT, parT, rectT } from "./figT.mjs";


const EXAMPLES = [
  { title: "Square-root principle", q: String.raw`Solve $x^2=64$.`,
    steps: [String.raw`$x=\pm\sqrt{64}$.`], ans: String.raw`$x=\pm8$` },
  { title: "A shifted square", q: String.raw`Solve $(x-3)^2=49$.`,
    steps: [String.raw`$x-3=\pm7$.`, String.raw`$x=3+7=10$ or $x=3-7=-4$.`], ans: String.raw`$x=10$ or $x=-4$` },
  { title: "Isolate the square first", q: String.raw`Solve $2(x+1)^2=18$.`,
    fig: parT((x) => 2 * (x + 1) ** 2 - 18, [-4, 2], { xmin: -6, xmax: 4, ymin: -20, ymax: 8 }, { step: { x: 1, y: 2 } }),
    steps: [String.raw`Divide by $2$: $(x+1)^2=9$.`, String.raw`$x+1=\pm3\Rightarrow x=2$ or $x=-4$.`], ans: String.raw`$x=2$ or $x=-4$` },
  { title: "Complete the square (rational roots)", q: String.raw`Solve $x^2+10x+21=0$ by completing the square.`,
    fig: parT((x) => x * x + 10 * x + 21, [-7, -3], { xmin: -9, xmax: -1, ymin: -5, ymax: 6 }),
    steps: [String.raw`$x^2+10x=-21$; add $5^2=25$: $(x+5)^2=4$.`, String.raw`$x+5=\pm2\Rightarrow x=-3$ or $x=-7$.`], ans: String.raw`$x=-3$ or $x=-7$` },
  { title: "Irrational roots", q: String.raw`Solve $x^2-6x-2=0$. Give exact and decimal roots.`,
    fig: parT((x) => x * x - 6 * x - 2, [3 - Math.sqrt(11), 3 + Math.sqrt(11)], { xmin: -2, xmax: 8, ymin: -12, ymax: 8 }, { step: { x: 1, y: 2 } }),
    steps: [String.raw`$x^2-6x=2$; add $9$: $(x-3)^2=11$.`, String.raw`$x=3\pm\sqrt{11}\approx6.32$ or $-0.32$.`], ans: String.raw`$x=3\pm\sqrt{11}\approx6.32,\ -0.32$` },
  { title: "No real roots", q: String.raw`Solve $x^2+8x+20=0$.`,
    fig: F({ view: { xmin: -8, xmax: 0, ymin: -1, ymax: 12 }, curves: [{ f: (x) => x * x + 8 * x + 20, color: "violet" }], points: [{ x: -4, y: 4, label: "(−4, 4)", color: "blue" }], step: { x: 1, y: 2 } }),
    steps: [String.raw`$x^2+8x=-20$; add $16$: $(x+4)^2=-4$.`, String.raw`A square cannot be negative.`], ans: "no real roots" },
  { title: "Divide by a first", q: String.raw`Solve $3x^2-12x-15=0$.`,
    steps: [String.raw`Divide by $3$: $x^2-4x-5=0$.`, String.raw`$x^2-4x=5$; add $4$: $(x-2)^2=9$.`, String.raw`$x-2=\pm3$.`], ans: String.raw`$x=5$ or $x=-1$` },
  { title: "Zeros from vertex form", q: String.raw`Find the zeros of $y=-(x+2)^2+5$.`,
    fig: parT((x) => -((x + 2) ** 2) + 5, [-2 - Math.sqrt(5), -2 + Math.sqrt(5)], { xmin: -6, xmax: 2, ymin: -4, ymax: 6 }),
    steps: [String.raw`$(x+2)^2=5$.`, String.raw`$x=-2\pm\sqrt5\approx0.24$ or $-4.24$.`], ans: String.raw`$x=-2\pm\sqrt5$` },
  { title: "A bigger square", q: String.raw`Each side of a square patio is increased by $3$ m, and the new area is $50$ m$^2$. Find the original side length to the nearest hundredth.`,
    fig: rectT("s + 3", "s + 3", "area 50 m²"),
    steps: [String.raw`$(s+3)^2=50\Rightarrow s+3=\pm\sqrt{50}$.`, String.raw`$s=-3+\sqrt{50}\approx4.07$ (the negative root is impossible).`], ans: String.raw`about $4.07$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve $x^2=121$.`, recap: "± roots.", ans: String.raw`$x=\pm11$` },
  { level: 1, q: String.raw`Solve $(x+4)^2=9$.`, recap: "(x + h)² = k.", ans: String.raw`$x=-1$ or $x=-7$` },
  { level: 1, q: String.raw`Solve $x^2-20=0$. Give exact and decimal roots.`, recap: "Irrational ± roots.", ans: String.raw`$x=\pm2\sqrt5\approx\pm4.47$` },
  { level: 2, q: String.raw`Solve $x^2-2x-8=0$ by completing the square.`, recap: "Complete the square.", ans: String.raw`$(x-1)^2=9$: $x=4$ or $x=-2$` },
  { level: 2, q: String.raw`Solve $x^2+12x+11=0$ by completing the square.`, recap: "Complete the square.", ans: String.raw`$(x+6)^2=25$: $x=-1$ or $x=-11$` },
  { level: 2, q: String.raw`Solve $x^2-10x+18=0$. Give exact roots and decimals.`, recap: "Irrational roots.", ans: String.raw`$(x-5)^2=7$: $x=5\pm\sqrt7\approx7.65,\ 2.35$` },
  { level: 2, q: String.raw`Solve $2x^2+8x-10=0$.`, recap: "Divide first.", ans: String.raw`$(x+2)^2=9$: $x=1$ or $x=-5$` },
  { level: 2, q: String.raw`Solve $x^2+6x+13=0$. Sketch $y=x^2+6x+13$ to explain your answer.`, recap: "No real roots.", ans: String.raw`$(x+3)^2=-4$: no real roots; vertex $(-3,4)$ is above the x-axis`, fig: gridT({ xmin: -7, xmax: 1, ymin: -2, ymax: 12 }, { x: 1, y: 2 }) },
  { level: 3, space: 5, q: String.raw`Find the zeros of $y=2(x-4)^2-32$, then sketch the parabola using its vertex and zeros.`, recap: "Zeros from vertex form.", ans: String.raw`$(x-4)^2=16$: zeros $0$ and $8$; vertex $(4,-32)$`, fig: gridT({ xmin: -2, xmax: 10, ymin: -34, ymax: 10 }, { x: 1, y: 4 }) },
  { level: 3, space: 4.5, q: String.raw`For which values of $k$ does $(x-2)^2=k$ have two roots, one root, no real roots? Explain using the graph of $y=(x-2)^2$.`, recap: "Depends on k.", ans: String.raw`two if $k>0$, one if $k=0$, none if $k<0$ (the line $y=k$ meets the parabola twice, once, never)` },
  { level: 3, space: 5, q: String.raw`Show by completing the square that $x^2-4x+c=0$ has roots $2\pm\sqrt{4-c}$. For which values of $c$ are there no real roots?`, recap: "General c.", ans: String.raw`$(x-2)^2=4-c$; no real roots when $c>4$` },
  { level: 3, space: 5, q: String.raw`A ball's height is $h=-5(t-2)^2+45$ metres after $t$ seconds. Find when it hits the ground by isolating the square.`, recap: "Landing from vertex form.", ans: String.raw`$(t-2)^2=9$: $t=5$ s (reject $t=-1$)` },
  { level: 3, space: 5, q: String.raw`A rectangle is $6$ cm longer than it is wide and has area $40$ cm$^2$. Solve by completing the square to find its dimensions.`, recap: "Area by completing the square.", ans: String.raw`$w^2+6w=40\Rightarrow(w+3)^2=49$: $4$ cm by $10$ cm`, fig: rectT("w + 6", "w", "area 40 cm²") },
];

export const WS = {
  code: "5.2",
  title: "Completing the Square",
  bigideas: String.raw`If $X^2=k$ with $k\ge0$, then $X=\pm\sqrt k$ — two roots, symmetric about the axis. Completing the square turns $x^2+bx+c=0$ into $\left(x+\tfrac b2\right)^2=\text{number}$: move $c$, add $\left(\tfrac b2\right)^2$ to both sides, factor, take $\pm$ roots. A negative number on the right means no real roots. Divide by $a$ first when every term shares it.`,
  goals: ["Solve X² = k with ±.", "Solve by completing the square.", "Give exact and decimal roots.", "Recognise no real roots; zeros from vertex form."],
  curriculum: "QR3",
  vocab: [["Square-root principle", "$X^2=k\\Rightarrow X=\\pm\\sqrt k$"], ["Perfect square", "$x^2+2px+p^2=(x+p)^2$"], ["Exact root", "e.g. $3\\pm\\sqrt{11}$"]],
  hook: String.raw`Ask the class for every number whose square is 49. When someone says −7, ask how that shows up on the graph of $y=x^2-49$.`,
  concepts: [
    ["1. Taking square roots", String.raw`$(x-3)^2=11$ gives $x=3\pm\sqrt{11}$ — two zeros at equal distances from the axis $x=3$.
${parT((x) => (x - 3) ** 2 - 11, [3 - Math.sqrt(11), 3 + Math.sqrt(11)], { xmin: -2, xmax: 8, ymin: -12, ymax: 8 }, { step: { x: 1, y: 2 } })}`],
    ["2. Completing the square", String.raw`Move $c$; add $\left(\tfrac b2\right)^2$ to both sides; write $(x+\tfrac b2)^2$; take $\pm$ roots.`],
    ["3. How many roots?", String.raw`Right side $>0$: two; $=0$: one; $<0$: none.`],
  ],
  tips: ["Don't forget ±.", "Add (b/2)² to both sides.", "Divide by a first.", "A square can't be negative.", "Keep exact values until the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
