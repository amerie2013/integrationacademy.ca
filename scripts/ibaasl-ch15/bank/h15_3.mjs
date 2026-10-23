// 15.3 Communicating Mathematics — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
import { probDoc, normalDoc } from "../figs15.mjs";

const S = String.raw;

export const TOPIC = "15.3 Communicating Mathematics";
export const Q = [
  num("The graph shows d against t with the model line drawn. Read off the gradient of the model (to 1 d.p.).", 2.5, "Rise 10 over run 4.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 22 }, step: { x: 1, y: 2 }, lines: [{ m: 2.5, b: 2, color: "red" }], points: [P(0, 2, false), P(4, 12, false)], xlabel: "time t (s)", ylabel: "distance d (m)" }), 0.05),
  num("For the model above, d = 2.5t + 2. Predict d at t = 6.4 s and report to a sensible precision (1 d.p.).", 18, "2.5(6.4) + 2 = 18.0.", null, 0.05),
  num(S`Evaluate $\frac{3.2\times10^5}{8\times10^2}$.`, 400, "0.4 × 10³."),
  num(S`Evaluate $(1.5\times10^{-3})\times(4\times10^{5})$.`, 600, "6 × 10²."),
  num("Measurements to 2 s.f. give a calculated area of 7.83214 cm². Report it to 2 s.f.", 7.8, "Match the least precise data.", null, 0.001),
  mc(S`Which sentence best introduces a model?`, S`"Let h be the height (m) of the ball t seconds after release; I model it by $h=-4.9t^2+12t+1.5$."`, [S`"h = -4.9t^2 + 12t + 1.5"`, S`"My equation is below."`, S`"The calculator gave this."`], "Defines variables and units."),
  mc("A student shows 20 near-identical integrals in full. Which criterion is most affected?", "A Presentation (concision)", ["C Personal engagement", "D Reflection", "none"], "Unnecessary repetition."),
  tf("A table of results and a graph of the same data can both be useful if each is interpreted.", true, "Multiple representations."),
  ms("A graph of 'score vs hours' has no units and no title. Which fixes are needed? Select all.", ["add 'hours studied (h)' and 'score (%)'", "add a descriptive title", "add a figure number referenced in the text", "remove the data points"], [0, 1, 2], "Do not remove data."),
  num("The histogram shows 200 reaction times. How many fall in the 0.30–0.35 s class or higher?", 166, "52 + 58 + 36 + 15 + 5.", probDoc(["0.20", "0.25", "0.30", "0.35", "0.40", "0.45", "0.50"], [9, 25, 52, 58, 36, 15, 5], { xlab: "reaction time (s, class start)", ylab: "frequency", labels: true }), 0.5),
  num("For the histogram above, what proportion of the 200 times are in the two tallest classes (2 d.p.)?", 0.55, "(52 + 58)/200.", null, 0.005),
  num(S`A model $h=-4.9t^2+12t+1.5$ is used. Find h at $t=1.2$ to 3 s.f.`, 8.84, "−7.056 + 14.4 + 1.5 = 8.844.", null, 0.005),
  num(S`Write $\frac{1}{8}$ as a decimal, then in standard form $a\times10^n$. Enter n.`, -1, "0.125 = 1.25 × 10⁻¹."),
  mc("Which is the most appropriate precision for the mean of times measured to 0.01 s?", "0.01 s or 0.001 s", ["0.000001 s", "1 s", "10 s"], "Match or slightly exceed the data."),
  num("The normal curve shows heights N(170, 8²) with the region within one standard deviation shaded. State its approximate probability (2 d.p.).", 0.68, "Empirical rule.", normalDoc(170, 8, [{ a: 162, b: 178, color: "green" }]), 0.005),
  num(S`A student writes "$\pi=3.14$" and computes the area of a circle of radius 10 as 314. What is the exact area to 2 d.p. using π?`, 314.16, "100π ≈ 314.16.", null, 0.005),
  tf("Graphs created by software need no explanation in the text.", false, "Every figure should be interpreted."),
  num(S`Evaluate $\sqrt{2.25\times10^{4}}$.`, 150, "√22500."),
  num("The chart shows page counts per section of a 16-page exploration. What percentage is mathematics?", 62.5, "10/16.", probDoc(["intro", "maths", "conclusion", "reflection"], [2, 10, 1, 3], { xlab: "section", ylab: "pages" }), 0.01),
  num("A result of 0.0009876 is reported as 0.001. How many significant figures does 0.001 show?", 1, "Only the 1."),
];
