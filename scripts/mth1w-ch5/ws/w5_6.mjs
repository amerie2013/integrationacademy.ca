// Worksheet 5.6 — Changing Dimensions: Area (teacher edition)
import { figT } from "./figT.mjs";
import { rect, polygon } from "../figs5.mjs";

const arc = (cx, cy, r, a0, a1, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

const EXAMPLES = [
  { title: "Area by subtraction", q: String.raw`A $20$ m by $14$ m lawn has a circular flower bed of radius $3$ m in the middle. Find the area of grass.`,
    fig: figT([...rect(20, 14, { lw: "20 m", lh: "14 m", fill: "green" }), { circle: [10, 7, 3], fill: "#fce7f3", color: "red" }, { seg: [[10, 7], [13, 7]], color: "red" }, { text: "3 m", at: [11.5, 7.8], color: "red", bold: true }], 4.2),
    steps: [String.raw`Rectangle: $20\times14=280$ m$^2$.`, String.raw`Circle: $\pi(3)^2=9\pi\approx28.27$ m$^2$.`, String.raw`Grass $\approx280-28.27=251.73$ m$^2$.`], ans: String.raw`$\approx251.7$ m$^2$` },
  { title: "Parallelogram", q: String.raw`A parallelogram has base $12$ cm, slanted side $7$ cm and height $5$ cm. Find its area.`,
    steps: [String.raw`$A=bh$ uses the perpendicular height: $12\times5=60$ cm$^2$.`, String.raw`The slanted side ($7$) is not used.`], ans: String.raw`$60$ cm$^2$` },
  { title: "Trapezoid with Pythagoras", q: String.raw`An isosceles trapezoid has parallel sides $10$ cm and $22$ cm and slanted sides $10$ cm. Find its area.`,
    fig: figT([...polygon([[0, 0], [22, 0], [16, 8], [6, 8]], { sides: ["22", "10", "10", "10"], fill: "amber", color: "amber" }), { seg: [[6, 0], [6, 8]], color: "red", dash: true }, { right: [[7, 0], [6, 0], [6, 8]] }, { text: "h", at: [6.8, 4], color: "red", bold: true }], 4.4),
    steps: [String.raw`Overhang each side: $(22-10)\div2=6$; $h=\sqrt{10^2-6^2}=8$ cm.`, String.raw`$A=\tfrac12(10+22)(8)=128$ cm$^2$.`], ans: String.raw`$128$ cm$^2$` },
  { title: "Area scale factor", q: String.raw`A map has scale $1:50\,000$. A park on the map covers $6$ cm$^2$. Find the real area in km$^2$.`,
    steps: [String.raw`Area factor $=50\,000^2=2.5\times10^9$: real area $=1.5\times10^{10}$ cm$^2$.`, String.raw`$1$ km$^2=10^{10}$ cm$^2$ (since $1$ km $=10^5$ cm), so $1.5$ km$^2$.`], ans: String.raw`$1.5$ km$^2$` },
  { title: "Working back from area", q: String.raw`A logo's area increases from $20$ cm$^2$ to $125$ cm$^2$ when it is scaled. Find the scale factor.`,
    steps: [String.raw`$k^2=125\div20=6.25$.`, String.raw`$k=\sqrt{6.25}=2.5$.`], ans: "$k=2.5$" },
  { title: "Doubling the radius", q: String.raw`A pizza with diameter $25$ cm costs $12$ dollars. A pizza with diameter $35$ cm costs $20$ dollars. Which is the better deal per cm$^2$?`,
    steps: [String.raw`Small: $\pi(12.5)^2\approx490.9$ cm$^2$; $12\div490.9\approx0.0244$ dollars/cm$^2$.`, String.raw`Large: $\pi(17.5)^2\approx962.1$ cm$^2$; $20\div962.1\approx0.0208$ dollars/cm$^2$.`], ans: "the large pizza" },
  { title: "Maximum area table", q: String.raw`With $36$ m of fence, make a table of whole-number widths and find the greatest rectangular area.`,
    steps: [String.raw`$l=18-w$: $w=3$: $45$; $w=6$: $72$; $w=8$: $80$; $w=9$: $81$; $w=10$: $80$.`, String.raw`Greatest at $w=9$, a $9\times9$ square.`], ans: String.raw`$81$ m$^2$` },
  { title: "Maximum area with a wall", q: String.raw`$50$ m of fence encloses a rectangle against a straight river bank (no fence on that side). Find the greatest area.`,
    steps: [String.raw`$w=50\div4=12.5$ m, $l=50\div2=25$ m.`, String.raw`Area $=12.5\times25=312.5$ m$^2$.`], ans: String.raw`$312.5$ m$^2$` },
  { title: "Window area", q: String.raw`A Norman window is a $90$ cm by $120$ cm rectangle (width $90$) topped with a semicircle. Find its area.`,
    fig: figT([{ poly: [[0, 0], [9, 0], [9, 12], ...arc(4.5, 12, 4.5, 0, 180).slice(1, -1), [0, 12]], fill: "blue", color: "blue" }, { text: "90 cm", at: [4.5, -1.1], bold: true, color: "blue" }, { text: "120 cm", at: [9.6, 6], bold: true, color: "blue", anchor: "start" }], 2.8),
    steps: [String.raw`Rectangle $90\times120=10\,800$ cm$^2$.`, String.raw`Semicircle $\tfrac12\pi(45)^2\approx3180.9$ cm$^2$; total $\approx13\,980.9$ cm$^2$.`], ans: String.raw`$\approx13\,981$ cm$^2$ ($\approx1.4$ m$^2$)` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the area of a triangle with base $14$ cm and height $9$ cm, and of a circle with diameter $10$ cm.`, recap: "Triangle 14, 9; circle d = 10.", ans: String.raw`$63$ cm$^2$; $25\pi\approx78.5$ cm$^2$` },
  { level: 1, q: String.raw`A shape with area $15$ cm$^2$ is scaled by $k=4$. Find the new area.`, recap: "A = 15, k = 4.", ans: String.raw`$240$ cm$^2$` },
  { level: 1, q: String.raw`Find the greatest area of a rectangle with perimeter $28$ m.`, recap: "P = 28.", ans: String.raw`$7\times7=49$ m$^2$` },
  { level: 2, q: String.raw`A trapezoid has parallel sides $9$ m and $15$ m and height $6$ m. Find its area.`, recap: "Trapezoid 9, 15, h 6.", ans: String.raw`$72$ m$^2$` },
  { level: 2, q: String.raw`A $5$ m by $8$ m room has its length increased by $50\%$. By what percent does the area increase? What if both dimensions increase by $50\%$?`, recap: "+50% one side vs both.", ans: String.raw`$50\%$; $125\%$ ($1.5^2=2.25$)` },
  { level: 2, q: String.raw`A circular rug has area $12.57$ m$^2$. Find its radius. If the radius is tripled, what is the new area?`, recap: "Rug A = 12.57.", ans: String.raw`$r\approx2$ m; $9\times12.57\approx113.1$ m$^2$` },
  { level: 2, q: String.raw`A square patio has a $1$ m wide path around it. The patio is $6$ m by $6$ m. Find the area of the path.`, recap: "Path around 6 × 6 patio.", ans: String.raw`$8^2-6^2=28$ m$^2$` },
  { level: 2, q: String.raw`$80$ m of fence makes a pen along a wall. Find the dimensions and the greatest area.`, recap: "80 m with a wall.", ans: String.raw`$20$ m by $40$ m; $800$ m$^2$` },
  { level: 3, space: 5, q: String.raw`A target has a bull's-eye of radius $5$ cm and two rings, each $5$ cm wide.
(a) Find the area of each region.
(b) What fraction of the whole target is the outer ring?`, recap: "Target with rings.", ans: String.raw`(a) $25\pi$, $75\pi$, $125\pi$ cm$^2$ (b) $\frac{125}{225}=\frac59$` },
  { level: 3, space: 5, q: String.raw`A rectangle has perimeter $P$. Show that its greatest area is $\frac{P^2}{16}$. Then compare with the area of a circle of circumference $P$.`, recap: "Max area formula.", ans: String.raw`square side $\frac P4$: $\frac{P^2}{16}$; circle $r=\frac{P}{2\pi}$: $\frac{P^2}{4\pi}\approx\frac{P^2}{12.57}$, larger` },
  { level: 3, space: 5, q: String.raw`A photo $10$ cm by $15$ cm is enlarged so its area is $600$ cm$^2$.
(a) Find the scale factor.
(b) Find the new dimensions and the new perimeter.`, recap: "Photo to 600 cm².", ans: String.raw`(a) $k^2=4$, $k=2$ (b) $20$ by $30$ cm; $P=100$ cm` },
  { level: 3, space: 5, q: String.raw`A farmer has $200$ m of fence to make three equal side-by-side rectangular pens (two inner dividers parallel to the width).
(a) Write the fence equation using $w$ and total length $l$.
(b) Find the dimensions that give the greatest total area.`, recap: "Three pens, 200 m.", ans: String.raw`(a) $4w+2l=200$ (b) $w=25$, $l=50$, $1250$ m$^2$` },
  { level: 3, space: 5, q: String.raw`Explain, using a diagram of unit squares, why scaling a shape by $k=3$ multiplies its area by $9$, not $3$. Then predict the area factor for $k=\frac12$.`, recap: "Why area scales by k².", ans: String.raw`each unit square becomes a $3\times3$ block of $9$ squares; $k=\frac12$: $\frac14$` },
];

export const WS = {
  code: "5.6",
  title: "Changing Dimensions: Area",
  bigideas: String.raw`Area measures two-dimensional space. Composite areas are found by adding and subtracting simple shapes. Changing one dimension by a factor multiplies the area by that factor, but scaling \emph{every} length by $k$ multiplies the area by $k^2$. For a fixed perimeter the greatest rectangular area is a square; with a wall it is half a square ($l=2w$).`,
  goals: ["Use area formulas for common shapes.", "Find composite areas by adding and subtracting.", "Apply the $k^2$ rule and work backward to $k$.", "Maximize area for a fixed perimeter, with and without walls."],
  curriculum: "E1.4",
  book: "Nelson Principles of Mathematics 9, 8.1, 8.2, 9.1--9.2",
  vocab: [["Area", "number of unit squares covering a region"], ["Perpendicular height", "height at right angles to the base"], ["Trapezoid", "$A=\\frac12(a+b)h$"], ["Area factor", "$k^2$ for a scale factor $k$"]],
  hook: String.raw`Show two pizzas: a $30$ cm pizza and a $40$ cm pizza. Ask: “The bigger one is only $10$ cm wider. How much more pizza is it?” Students usually guess $33\%$; the answer is about $78\%$.`,
  concepts: [
    ["1. Formulas", String.raw`$lw$; $bh$; $\frac12bh$; $\frac12(a+b)h$; $\pi r^2$. Always use the perpendicular height.`],
    ["2. Scaling", String.raw`Lengths $\times k$ $\Rightarrow$ area $\times k^2$. Working back: $k=\sqrt{\text{area factor}}$.
${figT([...rect(2, 2, { lw: "1", lh: "" }), ...rect(6, 6, { lw: "3", lh: "", fill: "violet", at: [3, 0] }), ...[2, 4].flatMap((v) => [{ seg: [[3 + v, 0], [3 + v, 6]], color: "violet", dash: true, width: 1.2 }, { seg: [[3, v], [9, v]], color: "violet", dash: true, width: 1.2 }])], 4, "k = 3: one square becomes 9.")}`],
    ["3. Greatest area", String.raw`Perimeter $P$: square of side $\frac P4$. Wall: $w=\frac P4$, $l=\frac P2$. More dividers: write the fence equation and test values in a table.`],
  ],
  tips: ["Watch for the slanted side being used as a height.", "Diameter vs radius is the top error in circle areas.", "Area factor k² — students often apply k.", "Units: cm² to m² divides by 10 000.", "Tables make optimization visible before the rule is stated."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
