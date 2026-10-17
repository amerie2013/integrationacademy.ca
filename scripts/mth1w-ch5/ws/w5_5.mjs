// Worksheet 5.5 — Changing Dimensions: Perimeter (teacher edition)
import { figT } from "./figT.mjs";
import { rect, polygon } from "../figs5.mjs";

const arc = (cx, cy, r, a0, a1, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

const EXAMPLES = [
  { title: "Composite with a semicircle", q: String.raw`A stage is a $10$ m by $6$ m rectangle with a semicircle on one $6$ m side. Find the length of trim around its edge.`,
    fig: figT([{ poly: [[0, 0], [10, 0], ...arc(10, 3, 3, -90, 90).slice(1, -1), [10, 6], [0, 6]], fill: "amber", color: "amber" }, { seg: [[10, 0], [10, 6]], color: "amber", dash: true, width: 1.2 }, { text: "10 m", at: [5, -0.9], bold: true, color: "blue" }, { text: "6 m", at: [-0.5, 3], bold: true, color: "blue", anchor: "end" }], 4.4),
    steps: [String.raw`Straight edges: $10+6+10=26$ m (the joining side is not on the boundary).`, String.raw`Semicircle: $\tfrac12\pi(6)=3\pi\approx9.42$ m.`, String.raw`Total $\approx35.42$ m.`], ans: String.raw`$\approx35.4$ m` },
  { title: "L-shape", q: String.raw`An L-shaped room is $9$ m by $7$ m with a $4$ m by $3$ m corner removed. Find its perimeter.`,
    fig: figT(polygon([[0, 0], [9, 0], [9, 4], [5, 4], [5, 7], [0, 7]], { sides: ["9", "4", "4", "3", "5", "7"], fill: "blue" }), 3.8),
    steps: [String.raw`Walk around: $9+4+4+3+5+7=32$ m.`, String.raw`Check: an L-shape has the same perimeter as its bounding rectangle, $2(9+7)=32$ ✓`], ans: "$32$ m" },
  { title: "Adding to one side", q: String.raw`A $14$ cm by $9$ cm rectangle has its length increased by $5$ cm and its width decreased by $2$ cm. Find the change in perimeter.`,
    steps: [String.raw`Old $P=2(14+9)=46$.`, String.raw`New $P=2(19+7)=52$; change $=+6$ $=2(5-2)$.`], ans: "increase of 6 cm" },
  { title: "Scaling a composite shape", q: String.raw`The stage in Example 1 is scaled by $k=0.5$ for a model. Find the model's trim length.`,
    steps: [String.raw`Perimeter scales by $k$: $0.5\times35.42\approx17.71$ m.`], ans: String.raw`$\approx17.7$ m` },
  { title: "Finding the scale factor", q: String.raw`A triangle with perimeter $24$ cm is enlarged; its longest side goes from $10$ cm to $25$ cm. Find the new perimeter.`,
    steps: [String.raw`$k=25\div10=2.5$.`, String.raw`New perimeter $=2.5\times24=60$ cm.`], ans: "$60$ cm" },
  { title: "Circumference and radius", q: String.raw`A bicycle wheel has diameter $66$ cm. How many full turns does it make in $1$ km?`,
    steps: [String.raw`$C=\pi(66)\approx207.3$ cm per turn.`, String.raw`$100\,000\div207.3\approx482.3$: $482$ full turns.`], ans: "482 full turns" },
  { title: "Least perimeter, whole numbers", q: String.raw`A rectangle of area $48$ m$^2$ has whole-number sides. Which has the least perimeter?`,
    steps: [String.raw`Pairs: $1\times48$ ($98$), $2\times24$ ($52$), $3\times16$ ($38$), $4\times12$ ($32$), $6\times8$ ($28$).`, String.raw`$6\times8$ is closest to a square ($\sqrt{48}\approx6.93$).`], ans: String.raw`$6$ m by $8$ m, $P=28$ m` },
  { title: "Least fence with a wall", q: String.raw`A $72$ m$^2$ rectangular garden is built against a house wall. Find the dimensions that use the least fence.`,
    steps: [String.raw`Best: wall side $=2\times$ width. $w(2w)=72\Rightarrow w^2=36\Rightarrow w=6$.`, String.raw`Length $12$ m; fence $=6+12+6=24$ m.`], ans: String.raw`$6$ m by $12$ m (along the wall); $24$ m of fence` },
  { title: "Comparing shapes", q: String.raw`Which needs less fence for $100$ m$^2$: a square or a circle?`,
    steps: [String.raw`Square: side $10$, $P=40$ m.`, String.raw`Circle: $\pi r^2=100\Rightarrow r\approx5.64$; $C=2\pi r\approx35.4$ m.`], ans: String.raw`the circle ($\approx35.4$ m vs $40$ m)` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the circumference of a circle with radius $4.5$ cm, to the nearest tenth.`, recap: "r = 4.5.", ans: String.raw`$9\pi\approx28.3$ cm` },
  { level: 1, q: String.raw`A $15$ m by $8$ m rectangle has $4$ m added to its width. What is the new perimeter?`, recap: "15 × 8, width + 4.", ans: "$54$ m" },
  { level: 1, q: String.raw`A hexagon with perimeter $27$ cm is scaled by $k=3$. Find the new perimeter.`, recap: "P = 27, k = 3.", ans: "$81$ cm" },
  { level: 2, q: String.raw`Find the perimeter of a $12$ cm by $12$ cm square with a semicircle attached outside on each of two opposite sides.`, recap: "Square + two semicircles.", ans: String.raw`$24+12\pi\approx61.7$ cm` },
  { level: 2, q: String.raw`A rectangle's length is doubled and its width tripled. Its old perimeter was $2(l+w)$. Write the new perimeter. Is it double, triple, or neither?`, recap: "Double l, triple w.", ans: String.raw`$2(2l+3w)=4l+6w$: neither (between double and triple)` },
  { level: 2, q: String.raw`What is the least perimeter for a rectangle of area $90$ m$^2$ (any real sides)? Round to the nearest tenth.`, recap: "Area 90.", ans: String.raw`square side $\sqrt{90}\approx9.49$; $P\approx37.9$ m` },
  { level: 2, q: String.raw`A running track has two $100$ m straights and semicircular ends of diameter $64$ m. Find the length of one lap.`, recap: "Track 100 m, d = 64.", ans: String.raw`$200+64\pi\approx401.1$ m` },
  { level: 2, q: String.raw`A rectangular pen against a barn must enclose $50$ m$^2$. Find the least amount of fence.`, recap: "Barn pen 50 m².", ans: String.raw`$w=5$, $l=10$: $20$ m` },
  { level: 3, space: 5, q: String.raw`A rectangle has perimeter $40$ cm. Its length is increased by $20\%$ and its width is decreased by $20\%$.
(a) Can you tell whether the perimeter increases or decreases without knowing the dimensions? Explain.
(b) Find the new perimeter if the original was $12$ cm by $8$ cm.`, recap: "+20% length, −20% width.", ans: String.raw`(a) no: change $=2(0.2l-0.2w)$ depends on $l-w$ (b) $14.4$ by $6.4$: $41.6$ cm` },
  { level: 3, space: 5, q: String.raw`Ali has $60$ m of fence for a rectangular dog run.
(a) Make a table of widths $5, 10, 15, 20, 25$ m with the matching length and area.
(b) Which width is best? What shape is it?`, recap: "60 m fence table.", ans: String.raw`(a) lengths $25,20,15,10,5$; areas $125,200,225,200,125$ (b) $15$ m: a square` },
  { level: 3, space: 5, q: String.raw`A picture is $40$ cm by $30$ cm and has a frame $5$ cm wide around it.
(a) Find the outer perimeter of the frame.
(b) A frame $w$ cm wide gives outer perimeter $P=140+8w$. Explain where each term comes from.`, recap: "Picture frame.", ans: String.raw`(a) $50$ by $40$: $180$ cm (b) $140$ = picture's perimeter; each of $4$ sides grows by $2w$` },
  { level: 3, space: 5, q: String.raw`A farmer has $120$ m of fence to build two equal side-by-side pens (a rectangle split by one fence parallel to the width).
(a) Write the fence used in terms of the width $w$ and total length $l$.
(b) Find $l$ and $w$ for the greatest total area.`, recap: "Two pens, 120 m.", ans: String.raw`(a) $3w+2l=120$ (b) $w=20$, $l=30$, area $600$ m$^2$` },
  { level: 3, space: 5, q: String.raw`Prove that if every side of a polygon is multiplied by $k$, its perimeter is multiplied by $k$. Then explain why a circle behaves the same way.`, recap: "Why perimeter scales by k.", ans: String.raw`$ka_1+ka_2+\dots+ka_n=k(a_1+\dots+a_n)$; $C=2\pi(kr)=k(2\pi r)$` },
];

export const WS = {
  code: "5.5",
  title: "Changing Dimensions: Perimeter",
  bigideas: String.raw`Perimeter is a length. Adding $x$ to one dimension of a rectangle adds $2x$ to the perimeter; multiplying \emph{every} length by $k$ multiplies the perimeter by $k$. For a fixed area, the rectangle with the least perimeter is a square, and against a wall the best shape is half a square (the wall side is twice the width). Of all shapes, a circle encloses a given area with the least boundary.`,
  goals: ["Find perimeters of composite shapes, including arcs.", "Predict the effect of changing one dimension.", "Use the scale-factor rule for perimeter.", "Minimize perimeter for a fixed area, with and without a wall."],
  curriculum: "E1.4",
  book: "Nelson Principles of Mathematics 9, 8.1, 8.2, Ch. 9",
  vocab: [["Perimeter", "length of the boundary"], ["Circumference", "$C=\\pi d=2\\pi r$"], ["Composite shape", "made of simpler shapes"], ["Scale factor", "the multiplier for every length"], ["Optimal", "best possible (least or greatest)"]],
  hook: String.raw`Give each pair $24$ toothpicks (or a $24$ cm loop of string) and grid paper. Ask: “Make rectangles with an area of exactly $36$ squares. Which uses the fewest toothpicks?” Then turn it around for 5.6.`,
  concepts: [
    ["1. Composite perimeters", String.raw`Trace the outside only. Semicircle arc $=\pi r$; quarter circle $=\tfrac12\pi r$.`],
    ["2. Changing dimensions", String.raw`One side $+x$ (rectangle): $P+2x$. Every length $\times k$: $P\times k$.
${figT([...rect(3, 2, { lw: "3", lh: "2" }), ...rect(6, 4, { lw: "6", lh: "4", fill: "violet", at: [4, 0] })], 4.6, "k = 2: perimeter 10 becomes 20.")}`],
    ["3. Least perimeter", String.raw`Fixed area $A$: square of side $\sqrt A$. With a wall: $w=\sqrt{A/2}$, $l=2w$.`],
  ],
  tips: ["Students often count internal edges of composite shapes.", "Remind them a semicircle's arc is half of πd.", "A table of whole-number dimensions makes the optimum visible.", "Distinguish “+x to a side” from “×k for all sides”.", "Keep π in the answer until the last step."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
