// MCF3M Worksheet 4.5 — Maximum and Minimum Problems (teacher edition)
import { F, pt } from "../../ws/figT.mjs";
const S = String.raw;
const G = (f, view, pts, step, a, b, xl = "x", yl = "y") => F({ view, curves: [{ f, a, b, color: "violet" }], points: pts, step, xlabel: xl, ylabel: yl });

const EXAMPLES = [
  { title: "Maximum height", q: S`$h(t)=-5t^2+40t+5$. Find the maximum height.`,
    fig: G((t) => -5 * t * t + 40 * t + 5, { xmin: -0.5, xmax: 8.5, ymin: -2, ymax: 90 }, [pt(4, 85, null, "amber")], { x: 1, y: 10 }, 0, 8.12, "t", "h"),
    steps: [S`$-5(t^2-8t+16-16)+5=-5(t-4)^2+85$.`, S`Maximum $85$ m at $t=4$ s.`, S`\textbf{Check:} $-80+160+5=85$ \checkmark`],
    ans: S`$85$ m at $4$ s` },
  { title: "Rectangle with fixed perimeter", q: S`Find the largest area of a rectangle with perimeter $48$ m.`,
    fig: G((x) => x * (24 - x), { xmin: -1, xmax: 25, ymin: -5, ymax: 160 }, [pt(12, 144, null, "amber")], { x: 2, y: 20 }, 0, 24),
    steps: [S`$A=x(24-x)$; zeros $0$, $24$.`, S`Vertex $x=12$: $A=144$.`, S`A $12\times12$ square.`],
    ans: S`$144$ m$^2$` },
  { title: "Fence against a wall", q: S`$90$ m of fence encloses three sides of a pen against a wall. Find the maximum area.`,
    fig: G((x) => x * (90 - 2 * x), { xmin: -1, xmax: 46, ymin: -20, ymax: 1100 }, [pt(22.5, 1012.5, null, "amber")], { x: 5, y: 100 }, 0, 45),
    steps: [S`$A=x(90-2x)$; zeros $0$, $45$.`, S`$x=22.5$: $A=22.5\times45=1012.5$.`, S`Dimensions $22.5$ m by $45$ m.`],
    ans: S`$1012.5$ m$^2$` },
  { title: "Revenue (increase)", q: S`$800$ tickets sell at $15$ dollars; each $1$-dollar increase loses $40$ sales. Find the best price.`,
    fig: G((x) => (15 + x) * (800 - 40 * x), { xmin: -16, xmax: 21, ymin: -500, ymax: 14000 }, [pt(2.5, 12250, null, "amber")], { x: 5, y: 2000 }, -15, 20),
    steps: [S`$R=(15+x)(800-40x)$; zeros $-15$, $20$.`, S`$x=2.5$: price $17.50$, sales $700$.`, S`$R=12\,250$ dollars.`],
    ans: S`$17.50$ dollars` },
  { title: "Revenue (decrease)", q: S`A café sells $150$ drinks at $6$ dollars; each $0.25$ decrease sells $10$ more. Find the best price.`,
    fig: G((x) => (6 - 0.25 * x) * (150 + 10 * x), { xmin: -16, xmax: 25, ymin: -50, ymax: 1050 }, [pt(4.5, 950.625, null, "amber")], { x: 5, y: 100 }, -15, 24),
    steps: [S`$R=(6-0.25x)(150+10x)$; zeros $24$, $-15$; vertex midway at $x=4.5$.`, S`Price $6-0.25(4.5)=4.875\approx4.88$ dollars; drinks $150+45=195$.`, S`$R=4.875\times195=950.63$ dollars, up from $6\times150=900$ \checkmark`],
    ans: S`about $4.88$ dollars (revenue $950.63$)` },
  { title: "Two numbers", q: S`Two numbers sum to $26$. Find their maximum product.`,
    fig: G((n) => n * (26 - n), { xmin: -1, xmax: 27, ymin: -10, ymax: 180 }, [pt(13, 169, null, "amber")], { x: 2, y: 20 }),
    steps: [S`$P=n(26-n)$.`, S`Vertex $n=13$: $P=169$.`],
    ans: S`$169$` },
  { title: "Minimum cost", q: S`$C(x)=2x^2-48x+500$ dollars to produce $x$ items. Find the minimum cost.`,
    fig: G((x) => 2 * x * x - 48 * x + 500, { xmin: -1, xmax: 25, ymin: 150, ymax: 520 }, [pt(12, 212, null, "amber")], { x: 2, y: 50 }),
    steps: [S`$2(x^2-24x+144-144)+500=2(x-12)^2+212$.`, S`Minimum $212$ dollars at $x=12$.`],
    ans: S`$212$ dollars at $12$ items` },
  { title: "Power", q: S`$P=12I-3I^2$ watts. Find the maximum power.`,
    fig: G((i) => 12 * i - 3 * i * i, { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 14 }, [pt(2, 12, null, "amber")], { x: 0.5, y: 2 }, 0, 4, "I", "P"),
    steps: [S`Zeros $0$ and $4$; $I=2$.`, S`$P=24-12=12$ W.`],
    ans: S`$12$ W at $2$ A` },
  { title: "Is the vertex allowed?", q: S`$A=x(30-x)$ for a pen, but local rules require $x\le10$. Find the maximum allowed area.`,
    fig: G((x) => x * (30 - x), { xmin: -1, xmax: 31, ymin: -10, ymax: 240 }, [pt(10, 200, null, "amber"), pt(15, 225)], { x: 5, y: 25 }, 0, 30),
    steps: [S`The vertex $x=15$ is not allowed.`, S`On $0<x\le10$ the area increases, so the maximum is at $x=10$.`, S`$A=10\times20=200$.`],
    ans: S`$200$ at $x=10$` },
];

const PROBLEMS = [
  { level: 1, q: S`$h(t)=-5t^2+20t+1$. Find the maximum height.`, ans: S`$21$ m` },
  { level: 1, q: S`Find two numbers with sum $40$ and maximum product.`, ans: S`$20$ and $20$` },
  { level: 1, q: S`Find the minimum value of $y=x^2-10x+30$.`, ans: S`$5$` },
  { level: 2, q: S`A rectangle has perimeter $60$ cm. Find its maximum area.`, ans: S`$225$ cm$^2$` },
  { level: 2, q: S`$R=(8+x)(500-25x)$. Find the best price.`, ans: S`$x=6$: $14$ dollars` },
  { level: 2, q: S`$C=3x^2-36x+150$. Find the minimum cost and the quantity.`, ans: S`$42$ at $x=6$` },
  { level: 2, q: S`$80$ m of fence against a wall. Maximum area?`, ans: S`$800$ m$^2$` },
  { level: 2, q: S`Two numbers differ by $10$. Minimum product?`, ans: S`$-25$` },
  { level: 3, space: 5, q: S`A bus company carries $1200$ riders at $3$ dollars. Each $0.10$ increase loses $30$ riders. Find the fare for maximum revenue.`, ans: S`$x=5$: $3.50$ dollars` },
  { level: 3, space: 5, q: S`A rectangular field uses $300$ m of fencing and is split into three equal parts by two fences parallel to the width. Find the maximum area.`, fig: F({ view: { xmin: -2, xmax: 80, ymin: -100, ymax: 3000 }, step: { x: 10, y: 500 } }), ans: S`$4w+2l=300$: $w=37.5$, $A=2812.5$ m$^2$` },
  { level: 3, space: 5, q: S`$P=24I-1.5I^2$. Find the maximum power and the currents that give $72$ W.`, ans: S`$96$ W at $8$ A; $4$ A and $12$ A` },
  { level: 3, space: 5, q: S`A ball's maximum height is $45$ m at $t=3$ s, launched from the ground. Find its model and when it lands.`, ans: S`$h=-5(t-3)^2+45$; $6$ s` },
  { level: 3, space: 5, q: S`Show that of all rectangles with perimeter $P$, the square has the largest area.`, ans: S`$A=x(\frac P2-x)$, vertex $x=\frac P4$` },
];

export const WS = {
  code: "4.5",
  title: "Maximum and Minimum Problems",
  bigideas: S`When a quantity is modelled by a quadratic, its greatest or least value is at the vertex: a maximum when $a<0$, a minimum when $a>0$. Find the vertex by averaging the zeros, completing the square or using $x=-\frac b{2a}$, and report both the optimal value and the input that produces it, checking it lies in the allowed domain.`,
  goals: ["Model optimization situations.", "Find the vertex efficiently.", "Interpret optimal value and input.", "Check the domain."],
  curriculum: "A3.3, A2.4, A2.11",
  vocab: [["Optimal value", "max or min"], ["Revenue", "price $\\times$ quantity"], ["Vertex", "turning point"], ["Domain", "allowed inputs"]],
  hook: S`With $40$ m of rope, what rectangle encloses the most area? Try $5\times15$, $8\times12$, $10\times10$. What do you notice?`,
  concepts: [
    ["1. Finding the optimum", S`Factored form: average the zeros. Standard form: complete the square or $x=-\frac b{2a}$.
${G((x) => x * (20 - x), { xmin: -1, xmax: 21, ymin: -5, ymax: 110 }, [pt(10, 100, null, "amber")], { x: 2, y: 20 }, 0, 20)}`],
    ["2. Revenue models", S`$R=(\text{price})(\text{quantity})$ with each written in terms of the number of price changes $x$.`],
    ["3. Answer in context", S`Give the optimal value with units and the input that produces it; check the domain.`],
  ],
  tips: ["Write the price and quantity expressions separately first.", "Ask for both the optimum and where it occurs.", "Discuss when the vertex is outside the domain."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
