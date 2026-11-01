// LINALG1 Worksheet 2.7 — Applications of Linear Systems
// Self-contained: complete notes (modelling, interpolation, networks, chemical equations, circuits, steady-state
// heat, mixtures), 9 worked examples with figures, 13 practice problems, answer key.
import { gridT, svgT, planeT } from "./figT.mjs";
import { S, VF, def, thm, side } from "./wkit.mjs";
import { flowSvg } from "./fig2.mjs";
import { sys, am, steps } from "../bank/la.mjs";

const F = (svg, w = 5.2) => svgT(svg, w);
const sysT = (rows, names) => S`\left\{${sys(rows, names)}\right.`;

// ── diagram builders (drawn with the vector-figure engine) ──
/** a network: nodes {name: [x, y]}, edges [[from, to, label, colour?]], external [[node, dx, dy, label, inward]] */
function network(nodes, edges, ext, view) {
  const arrows = edges.map(([a, b, l, c]) => { const [x1, y1] = nodes[a], [x2, y2] = nodes[b], L = Math.hypot(x2 - x1, y2 - y1), u = [(x2 - x1) / L, (y2 - y1) / L]; return { from: [x1 + 0.35 * u[0], y1 + 0.35 * u[1]], to: [x2 - 0.35 * u[0], y2 - 0.35 * u[1]], color: c ?? "blue", label: l, off: 12 }; });
  for (const [n, dx, dy, l, inward] of ext) { const [x, y] = nodes[n], far = [x + dx, y + dy], near = [x + 0.35 * Math.sign(dx), y + 0.35 * Math.sign(dy)]; arrows.push(inward ? { from: far, to: near, color: "red", label: l, off: 12 } : { from: near, to: far, color: "red", label: l, off: 12 }); }
  return VF({ view, grid: false, axes: false, arrows, points: Object.entries(nodes).map(([t, [x, y]]) => ({ x, y, label: t, color: "amber", dx: 8, dy: -8 })) }, 5);
}
/** a two-loop circuit with source V and resistors r1 (top left), r2 (middle), r3 (right) */
function circuit(V, r1, r2, r3) {
  return VF({ view: { xmin: -0.8, xmax: 7.6, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false,
    segs: [{ pts: [[0, 0], [0, 4], [7, 4], [7, 0], [0, 0]], color: "black", w: 2.2 }, { pts: [[3.5, 4], [3.5, 0]], color: "black", w: 2.2 }, { pts: [[-0.35, 2.2], [0.35, 2.2]], color: "black", w: 3 }, { pts: [[-0.2, 1.85], [0.2, 1.85]], color: "black", w: 4 }],
    polys: [{ pts: [[1.2, 3.8], [2.4, 3.8], [2.4, 4.2], [1.2, 4.2]], fill: "#fff7ed", stroke: "amber" }, { pts: [[3.3, 1.4], [3.7, 1.4], [3.7, 2.6], [3.3, 2.6]], fill: "#fff7ed", stroke: "amber" }, { pts: [[6.8, 1.4], [7.2, 1.4], [7.2, 2.6], [6.8, 2.6]], fill: "#fff7ed", stroke: "amber" }],
    arrows: [{ from: [2.6, 4], to: [3.3, 4], color: "red", label: "I₁", off: 14 }, { from: [3.5, 1.2], to: [3.5, 0.5], color: "red", label: "I₂", off: -14 }, { from: [4.3, 4], to: [5.2, 4], color: "red", label: "I₃", off: 14 }],
    texts: [{ x: -0.55, y: 2.6, t: `${V} V`, color: "black" }, { x: 1.8, y: 4.45, t: `${r1} Ω`, color: "amber" }, { x: 4.15, y: 2.0, t: `${r2} Ω`, color: "amber" }, { x: 6.35, y: 2.0, t: `${r3} Ω`, color: "amber" }] }, 5);
}
/** a square plate with four interior points and edge temperatures */
function plate(top, right, bottom, left, labels = ["T₁", "T₂", "T₃", "T₄"]) {
  return VF({ view: { xmin: -0.9, xmax: 3.9, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false,
    polys: [{ pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: "#f8fafc", stroke: "gray" }],
    segs: [{ pts: [[1, 0], [1, 3]], color: "#cbd5e1", w: 1 }, { pts: [[2, 0], [2, 3]], color: "#cbd5e1", w: 1 }, { pts: [[0, 1], [3, 1]], color: "#cbd5e1", w: 1 }, { pts: [[0, 2], [3, 2]], color: "#cbd5e1", w: 1 }],
    points: [[1, 2], [2, 2], [1, 1], [2, 1]].map(([x, y], i) => ({ x, y, label: labels[i], color: "amber", dx: 6, dy: -6 })),
    texts: [{ x: 1.5, y: 3.3, t: `${top}°`, color: "red" }, { x: 3.5, y: 1.5, t: `${right}°`, color: "red" }, { x: 1.5, y: -0.45, t: `${bottom}°`, color: "blue" }, { x: -0.5, y: 1.5, t: `${left}°`, color: "blue" }] }, 4.4);
}
const curve = (f, pts, view, w = 4.8) => planeT({ view, step: { x: 1, y: view.ymax - view.ymin > 12 ? 2 : 1 }, width: 300, curves: [{ f, color: "violet" }], points: pts.map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: "red" })) }, w);

// ── notes figures ──
const F_MODEL = F(flowSvg([["1. Choose the unknowns", "what do you need to find?", "blue"], ["2. One linear equation per condition", "a point, a node, an element, a loop, a grid point", "blue"], ["3. Row reduce", "one solution / free variables / none", "amber"], ["4. Interpret", "units, signs, whole numbers, limits", "green"]], 330), 5.6);
const F_POLY = curve((x) => 3 - 4 * x + 2 * x * x, [[0, 3], [1, 1], [3, 9]], { xmin: -1, xmax: 4, ymin: -1, ymax: 10 });
const NET1 = { A: [0, 3], B: [4, 3], C: [4, 0], D: [0, 0] };
const F_NET = network(NET1, [["A", "B", "x₁"], ["B", "C", "x₂"], ["D", "C", "x₃"], ["A", "D", "x₄"]], [["A", -1.4, 0, "500", true], ["B", 1.4, 0, "200", false], ["C", 1.4, 0, "450", false], ["D", -1.4, 0, "150", true]], { xmin: -2, xmax: 6, ymin: -0.9, ymax: 3.9 });
const F_CIRC = circuit(24, 2, 6, 3);
const F_PLATE = plate(40, 60, 20, 0);

const NOTES = [
  { h: "1. How to build a linear model",
    lead: S`Every application in this worksheet follows the same four steps (figure). The modelling is in steps 1, 2 and 4; step 3 is the elimination of Worksheets 2.3--2.5.

The key question in step 2 is: \emph{what must be balanced or matched?} Each condition gives one equation that is \emph{linear} in the unknowns --- even when the situation involves squares (interpolation) or circles, because the unknowns are coefficients, not the variable $x$.`,
    fig: F_MODEL, w: 0.5,
    body: S`\textbf{Interpreting free variables.} If the model has free variables, the situation genuinely allows choices (several traffic patterns, several reaction mixtures). Real constraints --- flows $\ge0$, capacities, whole numbers --- then restrict the parameters to an interval or a finite set.` },

  { h: "2. Polynomial interpolation",
    lead: S`To find $p(x)=a_0+a_1x+\dots+a_{k-1}x^{k-1}$ through $k$ points $(x_i,y_i)$, each point gives one linear equation in the coefficients:
\[a_0+a_1x_i+a_2x_i^2+\dots+a_{k-1}x_i^{k-1}=y_i.\]
${thm("unique interpolation", S`If the $x_i$ are distinct, exactly one polynomial of degree $\le k-1$ passes through the $k$ points.`)}
The figure shows $p(x)=3-4x+2x^2$ through $(0,3)$, $(1,1)$, $(3,9)$ (Example 1).`,
    fig: F_POLY, w: 0.54,
    body: S`\pf{With all $y_i=0$, a solution is a polynomial of degree $\le k-1$ with $k$ distinct roots, hence the zero polynomial. So the homogeneous system has only the trivial solution, the $k\times k$ coefficient matrix has rank $k$, and the system has exactly one solution for any $y_i$.}
The same idea fits other curves whose equation is linear in the unknown coefficients, for instance circles $x^2+y^2+Dx+Ey+F=0$ (Example 9).` },

  { h: "3. Networks: conservation of flow",
    lead: S`A network has nodes joined by directed branches carrying flows (cars per hour, litres per second, dollars per day). At every node
\[\text{flow in}=\text{flow out}.\]
One equation per node gives a linear system in the unknown branch flows. Adding all the node equations cancels every internal flow, so the system can only be consistent if the total external inflow equals the total external outflow.`,
    fig: F_NET, w: 0.5,
    body: S`Networks usually have free variables (the traffic can be routed in several ways). For one-way streets every flow must be $\ge0$, which turns the free parameter into an interval of possibilities; capacities shrink it further.` },

  { h: "4. Balancing chemical equations",
    lead: S`Give each molecule an unknown coefficient and require each element to have the same number of atoms on both sides. Every equation has the form "(atoms on the left) $-$ (atoms on the right) $=0$", so the system is \textbf{homogeneous}.

There is at least one free variable (any multiple of a balanced equation is balanced). Choose the parameter that makes all coefficients the \emph{smallest positive whole numbers}.

If there are two or more free variables, the "reaction" is really a combination of independent reactions (Problem 11).`,
    body: S`\textbf{Example.} $x_1\,\mathrm{Fe}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{Fe_2O_3}$: iron $x_1=2x_3$, oxygen $2x_2=3x_3$. With $x_3=2$: $4\,\mathrm{Fe}+3\,\mathrm{O_2}\to2\,\mathrm{Fe_2O_3}$.` },

  { h: "5. Electrical circuits",
    lead: S`For currents $I_k$ in a circuit of batteries and resistors:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Junction law:} current into a junction = current out.
\item \textbf{Loop law:} going once around a closed loop, the voltage supplied by sources equals the sum of the drops $RI$ across resistors (Ohm's law, $V=RI$), with signs following the chosen current directions.
\end{itemize}
In the figure: $I_1=I_2+I_3$; left loop $2I_1+6I_2=24$; right loop (no source) $6I_2-3I_3=0$.`,
    fig: F_CIRC, w: 0.5,
    body: S`If a computed current is negative, the current simply flows opposite to the arrow you drew. Circuits of resistors with at least one source almost always give a unique solution.` },

  { h: "6. Steady-state temperatures",
    lead: S`A thin square plate has its edges held at fixed temperatures. Once the temperatures stop changing, each interior grid point has (approximately) the \textbf{average} of its four neighbours:
\[T=\tfrac14(T_{\text{up}}+T_{\text{down}}+T_{\text{left}}+T_{\text{right}}).\]
Each interior point gives one linear equation; edge temperatures are known numbers that move to the right-hand side.`,
    fig: F_PLATE, w: 0.56,
    body: S`Finer grids give better approximations and much bigger systems --- engineering software solves exactly such systems with millions of unknowns, by elimination or by iterative methods. Symmetry of the edge temperatures often halves the work.` },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "A parabola through three points", q: S`Find the quadratic through $(0,3)$, $(1,1)$ and $(3,9)$.`,
    fig: F_POLY,
    steps: [S`Write $p(x)=a_0+a_1x+a_2x^2$. Each point gives one linear equation in the unknowns $a_0,a_1,a_2$: $x=0$: $a_0=3$; $x=1$: $a_0+a_1+a_2=1$; $x=3$: $a_0+3a_1+9a_2=9$.`,
      ...steps([[1, 0, 0, 3], [1, 1, 1, 1], [1, 3, 9, 9]], [
        [S`Column 1: clear rows 2 and 3.`, ["R2-R1", "R3-R1"]],
        [S`Column 2: clear the $3$ below the pivot of row 2.`, ["R3-3R2"]],
      ]).steps,
      S`Back substitution: $6a_2=12$, so $a_2=2$; $a_1+a_2=-2$, so $a_1=-4$; $a_0=3$.`,
      S`$p(x)=3-4x+2x^2$. Check: $p(0)=3$ \checkmark,\ $p(1)=3-4+2=1$ \checkmark,\ $p(3)=3-12+18=9$ \checkmark.`],
    ans: S`$p(x)=3-4x+2x^2$` },
  { title: "When the 'parabola' is a line", q: S`Find the polynomial of degree $\le2$ through $(0,1)$, $(1,3)$ and $(2,5)$.`,
    fig: curve((x) => 1 + 2 * x, [[0, 1], [1, 3], [2, 5]], { xmin: -1, xmax: 3, ymin: -1, ymax: 7 }, 4.4),
    steps: [S`Equations for $p(x)=a_0+a_1x+a_2x^2$: $a_0=1$, $a_0+a_1+a_2=3$, $a_0+2a_1+4a_2=5$.`,
      ...steps([[1, 0, 0, 1], [1, 1, 1, 3], [1, 2, 4, 5]], [
        [S`Column 1: clear rows 2 and 3.`, ["R2-R1", "R3-R1"]],
        [S`Column 2: clear the $2$ below the pivot.`, ["R3-2R2"]],
      ]).steps,
      S`$2a_2=0$, so $a_2=0$; $a_1=2$; $a_0=1$. So $p(x)=1+2x$.`,
      S`The three points are collinear (slope $2$ each time), so the unique interpolating polynomial of degree $\le2$ is this line. Check: $p(2)=5$ \checkmark.`],
    ans: S`$p(x)=1+2x$ ($a_2=0$)` },
  { title: "Traffic with limits", q: S`For the network in the figure (cars per hour, one-way streets), find all possible flows. What are the largest and smallest possible values of $x_3$?`,
    fig: F_NET,
    steps: [S`At each intersection, flow in $=$ flow out. $A$: $500=x_1+x_4$. $B$: $x_1=200+x_2$. $C$: $x_2+x_3=450$. $D$: $x_4+150=x_3$. (Total in: $500+150=650$; total out: $200+450=650$ \checkmark.)`,
      ...steps([[1, 0, 0, 1, 500], [1, -1, 0, 0, 200], [0, 1, 1, 0, 450], [0, 0, 1, -1, 150]], [
        [S`Column 1: clear row 2.`, ["R2-R1"]],
        [S`Column 2: clear row 3 with row 2.`, ["R3+R2"]],
        [S`Column 3: row 4 equals row 3; subtract.`, ["R4-R3"]],
        [S`RREF: make the pivot of row 2 equal to $1$.`, ["R2*-1"]],
      ]).steps,
      S`$x_4=t$ free: $x_1=500-t$, $x_2=300-t$, $x_3=150+t$.`,
      S`One-way streets: all flows $\ge0$. $x_4=t\ge0$, $x_2=300-t\ge0$ gives $t\le300$ (and $x_1\ge0$ needs only $t\le500$). So $0\le t\le300$ and $150\le x_3\le450$.`],
    ans: S`$(500-t,\ 300-t,\ 150+t,\ t)$, $0\le t\le300$; $x_3$ from 150 to 450` },
  { title: "Burning propane", q: S`Balance $x_1\,\mathrm{C_3H_8}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{CO_2}+x_4\,\mathrm{H_2O}$.`,
    fig: F(flowSvg([["C: 3x₁ = x₃", "carbon", "blue"], ["H: 8x₁ = 2x₄", "hydrogen", "blue"], ["O: 2x₂ = 2x₃ + x₄", "oxygen", "blue"]], 220), 4.4),
    steps: [S`One equation per element, everything moved to the left: C: $3x_1-x_3=0$; H: $8x_1-2x_4=0$; O: $2x_2-2x_3-x_4=0$. A homogeneous system.`,
      ...steps([[3, 0, -1, 0, 0], [8, 0, 0, -2, 0], [0, 2, -2, -1, 0]], [
        [S`Column 1: make the pivot $1$,`, ["R1*1/3"]],
        [S`and clear the $8$ below it.`, ["R2-8R1"]],
        [S`Column 2 is zero in row 2; swap row 3 up.`, ["R2<->R3"]],
        [S`Make the pivots of rows 2 and 3 equal to $1$.`, ["R2*1/2", "R3*3/8"]],
        [S`Clear column 3 above its pivot (RREF).`, ["R2+R3", "R1+1/3R3"]],
      ]).steps,
      S`$x_4=t$ free: $x_1=\tfrac14t$, $x_2=\tfrac54t$, $x_3=\tfrac34t$. The smallest whole numbers come from $t=4$: $(1,5,3,4)$.`,
      S`Check: C: $3=3$ \checkmark; H: $8=2(4)$ \checkmark; O: $2(5)=2(3)+4$ \checkmark.`],
    ans: S`$\mathrm{C_3H_8}+5\,\mathrm{O_2}\to3\,\mathrm{CO_2}+4\,\mathrm{H_2O}$` },
  { title: "Five elements", q: S`Balance $x_1\,\mathrm{Ca_3(PO_4)_2}+x_2\,\mathrm{H_2SO_4}\to x_3\,\mathrm{CaSO_4}+x_4\,\mathrm{H_3PO_4}$.`,
    fig: F(flowSvg([["Ca: 3x₁ = x₃    P: 2x₁ = x₄", "", "blue"], ["S: x₂ = x₃    H: 2x₂ = 3x₄", "", "blue"], ["O: 8x₁ + 4x₂ = 4x₃ + 4x₄", "", "blue"]], 230), 4.8),
    steps: [S`Five elements give five homogeneous equations (rows: Ca, P, S, H, O) in four unknowns.`,
      ...steps([[3, 0, -1, 0, 0], [2, 0, 0, -1, 0], [0, 1, -1, 0, 0], [0, 2, 0, -3, 0], [8, 4, -4, -4, 0]], [
        [S`Column 1: make the pivot $1$,`, ["R1*1/3"]],
        [S`and clear rows 2 and 5.`, ["R2-2R1", "R5-8R1"]],
        [S`Column 2: row 2 has $0$ there; swap row 3 up.`, ["R2<->R3"]],
        [S`Clear column 2 below the pivot.`, ["R4-2R2", "R5-4R2"]],
        [S`Column 3: make the pivot $1$,`, ["R3*3/2"]],
        [S`and clear below it --- rows 4 and 5 vanish.`, ["R4-2R3", "R5-8/3R3"]],
        [S`Clear column 3 above the pivot (RREF).`, ["R2+R3", "R1+1/3R3"]],
      ]).steps,
      S`Two zero rows: the hydrogen and oxygen equations were consequences of the others, so the system is consistent with rank 3 and one free variable. $x_4=t$: $x_1=\tfrac12t$, $x_2=\tfrac32t$, $x_3=\tfrac32t$.`,
      S`$t=2$ gives $(1,3,3,2)$. Check: Ca $3=3$, P $2=2$, S $3=3$, H $6=6$, O $8+12=12+8$ \checkmark.`],
    ans: S`$\mathrm{Ca_3(PO_4)_2}+3\,\mathrm{H_2SO_4}\to3\,\mathrm{CaSO_4}+2\,\mathrm{H_3PO_4}$` },
  { title: "Currents in two loops", q: S`Find $I_1$, $I_2$, $I_3$ in the circuit (24 V source; 2 Ω, 6 Ω, 3 Ω).`,
    fig: F_CIRC,
    steps: [S`Junction rule (current in $=$ current out): $I_1-I_2-I_3=0$. Left loop (voltage rises $=$ drops): $2I_1+6I_2=24$. Right loop (no source): $6I_2-3I_3=0$.`,
      ...steps([[1, -1, -1, 0], [2, 6, 0, 24], [0, 6, -3, 0]], [
        [S`Column 1: clear the $2$.`, ["R2-2R1"]],
        [S`Column 2: clear the $6$ below the pivot $8$ (multiplier $\tfrac68=\tfrac34$).`, ["R3-3/4R2"]],
      ]).steps,
      S`Back substitution: $-\tfrac92I_3=-18$, so $I_3=4$; $8I_2+2I_3=24$, so $I_2=2$; $I_1=I_2+I_3=6$.`,
      S`Check: $6-2-4=0$ \checkmark,\ $12+12=24$ \checkmark,\ $12-12=0$ \checkmark.`],
    ans: S`$I_1=6$ A, $I_2=2$ A, $I_3=4$ A` },
  { title: "A plate with four different edges", q: S`The plate has edges at $40^\circ$ (top), $60^\circ$ (right), $20^\circ$ (bottom), $0^\circ$ (left). Find $T_1,\dots,T_4$.`,
    fig: F_PLATE,
    steps: [S`Each interior temperature is the average of its four neighbours, e.g. $T_1=\tfrac14(40+0+T_2+T_3)$. Multiply by 4 and collect: $4T_1-T_2-T_3=40$, $-T_1+4T_2-T_4=100$, $-T_1+4T_3-T_4=20$, $-T_2-T_3+4T_4=80$.`,
      ...steps([[4, -1, -1, 0, 40], [-1, 4, 0, -1, 100], [-1, 0, 4, -1, 20], [0, -1, -1, 4, 80]], [
        [S`Pivot on a $-1$ to avoid fractions: swap rows 1 and 2.`, ["R1<->R2"]],
        [S`Column 1: clear rows 2 and 3.`, ["R2+4R1", "R3-R1"]],
        [S`Row 3 is divisible by $-4$; scale it,`, ["R3*-1/4"]],
        [S`and swap it up to be the pivot of column 2.`, ["R2<->R3"]],
        [S`Column 2: clear rows 3 and 4.`, ["R3-15R2", "R4+R2"]],
        [S`Column 3: swap to pivot on $-2$,`, ["R3<->R4"]],
        [S`and clear the $14$ below it.`, ["R4+7R3"]],
      ]).steps,
      S`Back substitution: $24T_4=840$, so $T_4=35$; $-2T_3+4(35)=100$, so $T_3=20$; $T_2-T_3=20$, so $T_2=40$; $-T_1+4(40)-35=100$, so $T_1=25$.`,
      S`Check the averages: $T_1=\tfrac14(40+0+40+20)=25$ \checkmark,\ $T_4=\tfrac14(60+20+40+20)=35$ \checkmark.`],
    ans: S`$T_1=25^\circ$, $T_2=40^\circ$, $T_3=20^\circ$, $T_4=35^\circ$` },
  { title: "Mixing fertilisers", q: S`Fertilisers $F_1$, $F_2$, $F_3$ contain (N, P, K) in the proportions $(10\%,10\%,10\%)$, $(20\%,5\%,0\%)$, $(0\%,10\%,20\%)$. How many kg of each give exactly 40 kg N, 40 kg P and 50 kg K?`,
    fig: F(flowSvg([["N: 0.10a + 0.20b = 40", "", "blue"], ["P: 0.10a + 0.05b + 0.10c = 40", "", "blue"], ["K: 0.10a + 0.20c = 50", "", "blue"]], 230), 4.8),
    steps: [S`Let $a,b,c$ be the kg of $F_1,F_2,F_3$. Clear decimals: multiply N and K by 10 and P by 20: $a+2b=400$, $2a+b+2c=800$, $a+2c=500$.`,
      ...steps([[1, 2, 0, 400], [2, 1, 2, 800], [1, 0, 2, 500]], [
        [S`Column 1: clear rows 2 and 3.`, ["R2-2R1", "R3-R1"]],
        [S`Column 2: clear the $-2$ below the pivot $-3$.`, ["R3-2/3R2"]],
      ]).steps,
      S`Back substitution: $\tfrac23c=100$, so $c=150$; $-3b+2c=0$, so $b=100$; $a+2b=400$, so $a=200$. All amounts are $\ge0$, so the mix is possible.`,
      S`Check: N $20+20=40$ \checkmark; P $20+5+15=40$ \checkmark; K $20+30=50$ \checkmark.`],
    ans: S`200 kg of $F_1$, 100 kg of $F_2$, 150 kg of $F_3$` },
  { title: "A circle through three points", q: S`Find the circle $x^2+y^2+Dx+Ey+F=0$ through $(0,0)$, $(4,0)$ and $(0,2)$, with its centre and radius.`,
    fig: planeT({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 4 }, step: { x: 1, y: 1 }, width: 300, curves: [{ f: (x) => 1 + Math.sqrt(Math.max(0, 5 - (x - 2) ** 2)), a: 2 - Math.sqrt(5), b: 2 + Math.sqrt(5), color: "violet" }, { f: (x) => 1 - Math.sqrt(Math.max(0, 5 - (x - 2) ** 2)), a: 2 - Math.sqrt(5), b: 2 + Math.sqrt(5), color: "violet" }], points: [{ x: 0, y: 0, label: "", color: "red" }, { x: 4, y: 0, label: "", color: "red" }, { x: 0, y: 2, label: "", color: "red" }, { x: 2, y: 1, label: "centre", color: "green" }] }, 4.4),
    steps: [S`The equation is \emph{linear} in $D,E,F$. Substitute each point and move the numbers right: $(0,0)$: $F=0$; $(4,0)$: $4D+F=-16$; $(0,2)$: $2E+F=-4$.`,
      ...steps([[0, 0, 1, 0], [4, 0, 1, -16], [0, 2, 1, -4]], [
        [S`Bring a nonzero entry into column 1,`, ["R1<->R2"]],
        [S`and one into column 2. The matrix is now triangular.`, ["R2<->R3"]],
      ], { intro: S`Augmented matrix (unknowns $D,E,F$)` }).steps,
      S`Back substitution: $F=0$; $2E=-4$, so $E=-2$; $4D=-16$, so $D=-4$.`,
      S`$x^2+y^2-4x-2y=0$. Complete the squares: $(x-2)^2+(y-1)^2=5$: centre $(2,1)$, radius $\sqrt5$. Check $(4,0)$: $4+1=5$ \checkmark.`],
    ans: S`$x^2+y^2-4x-2y=0$: centre $(2,1)$, radius $\sqrt5$` },
];

const NET2 = { P: [0, 0], Q: [3, 2.5], R: [6, 0] };
const F_NET2 = network(NET2, [["P", "Q", "x₁"], ["Q", "R", "x₂"], ["P", "R", "x₃"]], [["P", -1.4, 0, "100", true], ["Q", 0, 1.3, "30", false], ["R", 1.4, 0, "70", false]], { xmin: -2, xmax: 8, ymin: -0.9, ymax: 4.3 });

const PROBLEMS = [
  { level: 1, q: S`Find the quadratic through $(0,2)$, $(1,3)$, $(2,6)$ and evaluate it at $x=3$.`, ans: S`$p(x)=2+x^2$; $p(3)=11$`,
    sol: [...steps([[1, 0, 0, 2], [1, 1, 1, 3], [1, 2, 4, 6]], [
      [S`Column 1: clear rows 2 and 3.`, ["R2-R1", "R3-R1"]],
      [S`Column 2: clear the $2$.`, ["R3-2R2"]],
    ], { intro: S`Equations $a_0=2$, $a_0+a_1+a_2=3$, $a_0+2a_1+4a_2=6$; augmented matrix` }).steps,
      S`$a_2=1$, $a_1=1-1=0$, $a_0=2$: $p(x)=2+x^2$, and $p(3)=11$.`] },
  { level: 1, q: S`Balance $x_1\,\mathrm{N_2}+x_2\,\mathrm{H_2}\to x_3\,\mathrm{NH_3}$.`, ans: S`$\mathrm{N_2}+3\,\mathrm{H_2}\to2\,\mathrm{NH_3}$`,
    sol: [...steps([[2, 0, -1, 0], [0, 2, -3, 0]], [[S`Make the pivots $1$.`, ["R1*1/2", "R2*1/2"]]], { intro: S`N: $2x_1-x_3=0$; H: $2x_2-3x_3=0$` }).steps,
      S`$x_3=t$: $x_1=\tfrac12t$, $x_2=\tfrac32t$. $t=2$: $(1,3,2)$.`] },
  { level: 1, q: S`Flows of 250 and 175 cars per hour and an unknown flow $x$ enter a junction; 600 leave. Find $x$.`, ans: S`$x=175$`,
    sol: [S`In $=$ out: $250+175+x=600$, so $x=175$.`] },
  { level: 2, space: 4, q: S`Find the quadratic through $(-1,0)$, $(1,4)$, $(2,9)$ and draw it with the points.`, ans: S`$p(x)=1+2x+x^2=(x+1)^2$`, fig: gridT({ xmin: -3, xmax: 3, ymin: -1, ymax: 10 }),
    sol: [...steps([[1, -1, 1, 0], [1, 1, 1, 4], [1, 2, 4, 9]], [
      [S`Column 1: clear rows 2 and 3.`, ["R2-R1", "R3-R1"]],
      [S`Row 2 is divisible by $2$.`, ["R2*1/2"]],
      [S`Clear the $3$ below the pivot.`, ["R3-3R2"]],
    ], { intro: S`Unknowns $a_0,a_1,a_2$; augmented matrix` }).steps,
      S`$a_2=1$, $a_1=2$, $a_0=0+a_1-a_2=1$: $p(x)=1+2x+x^2=(x+1)^2$, vertex $(-1,0)$. Check $p(2)=9$ \checkmark.`] },
  { level: 2, q: S`Find all flows in the network shown (one-way streets) and the range of the free parameter.`, ans: S`$x_3=t$, $x_1=100-t$, $x_2=70-t$, $0\le t\le70$`, fig: F_NET2,
    sol: [S`$P$: $x_1+x_3=100$. $Q$: $x_1=x_2+30$. $R$: $x_2+x_3=70$.`,
      ...steps([[1, 0, 1, 100], [1, -1, 0, 30], [0, 1, 1, 70]], [
        [S`Column 1: clear row 2.`, ["R2-R1"]],
        [S`Column 2: clear row 3.`, ["R3+R2"]],
        [S`RREF.`, ["R2*-1"]],
      ]).steps,
      S`$x_3=t$: $x_1=100-t$, $x_2=70-t$. All $\ge0$: $0\le t\le70$.`] },
  { level: 2, q: S`Balance $x_1\,\mathrm{C_2H_6}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{CO_2}+x_4\,\mathrm{H_2O}$.`, ans: S`$2,\ 7,\ 4,\ 6$`,
    sol: [S`C: $2x_1-x_3=0$; H: $6x_1-2x_4=0$; O: $2x_2-2x_3-x_4=0$.`,
      ...steps([[2, 0, -1, 0, 0], [6, 0, 0, -2, 0], [0, 2, -2, -1, 0]], [
        [S`Column 1: pivot $1$,`, ["R1*1/2"]],
        [S`clear the $6$.`, ["R2-6R1"]],
        [S`Swap to get a pivot in column 2.`, ["R2<->R3"]],
        [S`Pivots $1$.`, ["R2*1/2", "R3*1/3"]],
        [S`Clear column 3 above.`, ["R2+R3", "R1+1/2R3"]],
      ]).steps,
      S`$x_4=t$: $x_1=\tfrac13t$, $x_2=\tfrac76t$, $x_3=\tfrac23t$. $t=6$: $(2,7,4,6)$. Check O: $14=8+6$ \checkmark.`] },
  { level: 2, q: S`In a two-loop circuit, $I_1=I_2+I_3$, $4I_1+2I_2=22$ and $2I_2-6I_3=0$. Find the currents.`, ans: S`$I_1=4$, $I_2=3$, $I_3=1$`, fig: circuit("?", 4, 2, 6),
    sol: [...steps([[1, -1, -1, 0], [4, 2, 0, 22], [0, 2, -6, 0]], [
      [S`Column 1: clear the $4$.`, ["R2-4R1"]],
      [S`Column 2: clear the $2$ below the pivot $6$.`, ["R3-1/3R2"]],
    ]).steps,
      S`$-\tfrac{22}3I_3=-\tfrac{22}3$, so $I_3=1$; $6I_2+4=22$, so $I_2=3$; $I_1=4$. Check: $16+6=22$ \checkmark.`] },
  { level: 2, q: S`A plate has edges $0^\circ$ (top and bottom) and $100^\circ$ (left and right). Find the four interior temperatures.`, ans: S`all four are $50^\circ$`, fig: plate(0, 100, 0, 100),
    sol: [S`Each point has one hot and one cold edge neighbour: $4T_1-T_2-T_3=100$, $-T_1+4T_2-T_4=100$, $-T_1+4T_3-T_4=100$, $-T_2-T_3+4T_4=100$.`,
      ...steps([[4, -1, -1, 0, 100], [-1, 4, 0, -1, 100], [-1, 0, 4, -1, 100], [0, -1, -1, 4, 100]], [
        [S`Pivot on $-1$.`, ["R1<->R2"]],
        [S`Column 1.`, ["R2+4R1", "R3-R1"]],
        [S`Scale row 3,`, ["R3*-1/4"]],
        [S`swap it up.`, ["R2<->R3"]],
        [S`Column 2.`, ["R3-15R2", "R4+R2"]],
        [S`Swap for column 3,`, ["R3<->R4"]],
        [S`clear below.`, ["R4+7R3"]],
      ]).steps,
      S`$T_4=1200/24=50$; $-2T_3+200=100$, $T_3=50$; $T_2=T_3=50$; $-T_1+200-50=100$, $T_1=50$. (By symmetry all four must be equal, and $4T-2T=100$.)`] },
  { level: 3, space: 5, q: S`Find the circle through $(1,1)$, $(3,1)$ and $(1,5)$: its equation, centre and radius.`, ans: S`$x^2+y^2-4x-6y+8=0$; centre $(2,3)$, radius $\sqrt5$`, fig: gridT({ xmin: -1, xmax: 5, ymin: -1, ymax: 6 }),
    sol: [S`$x^2+y^2+Dx+Ey+F=0$: $(1,1)$: $D+E+F=-2$; $(3,1)$: $3D+E+F=-10$; $(1,5)$: $D+5E+F=-26$.`,
      ...steps([[1, 1, 1, -2], [3, 1, 1, -10], [1, 5, 1, -26]], [
        [S`Column 1.`, ["R2-3R1", "R3-R1"]],
        [S`Column 2.`, ["R3+2R2"]],
      ]).steps,
      S`$F=8$; $-2E-16=-4$, $E=-6$; $D=-2+6-8=-4$. $(x-2)^2+(y-3)^2=-8+4+9=5$: centre $(2,3)$, radius $\sqrt5$.`] },
  { level: 3, space: 5, q: S`Row reduce the coefficient matrix for interpolation at $x=1,2,3$ by a quadratic, $${am([[1, 1, 1], [1, 2, 4], [1, 3, 9]], false)}$, and show it has rank 3.`, ans: S`$R_2-R_1$, $R_3-R_1$, then $R_3-2R_2$ give pivots $1,1,2$: rank 3`,
    sol: [...steps([[1, 1, 1], [1, 2, 4], [1, 3, 9]], [
      [S`Column 1.`, ["R2-R1", "R3-R1"]],
      [S`Column 2.`, ["R3-2R2"]],
    ], { bar: false, intro: "Start" }).steps,
      S`Pivots $1,1,2$: rank 3, so every choice of three values at $x=1,2,3$ has exactly one interpolating quadratic.`] },
  { level: 3, space: 5, q: S`Try to balance $x_1\,\mathrm{H_2}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{H_2O}+x_4\,\mathrm{H_2O_2}$. How many free variables are there, and what does that mean chemically?`, ans: S`$x_3=s$, $x_4=t$: $x_1=s+t$, $x_2=\tfrac s2+t$; two free variables --- the equation combines two independent reactions`,
    sol: [...steps([[2, 0, -2, -2, 0], [0, 2, -1, -2, 0]], [[S`Make the pivots $1$.`, ["R1*1/2", "R2*1/2"]]], { intro: S`H: $2x_1-2x_3-2x_4=0$; O: $2x_2-x_3-2x_4=0$` }).steps,
      S`Two free variables $x_3=s$, $x_4=t$: $x_1=s+t$, $x_2=\tfrac12s+t$, i.e. $\vec x=s(1,\tfrac12,1,0)+t(1,1,0,1)$.`,
      S`$2\mathrm{H_2}+\mathrm{O_2}\to2\mathrm{H_2O}$ and $\mathrm{H_2}+\mathrm{O_2}\to\mathrm{H_2O_2}$ can run in any proportion, so the balance is not unique.`] },
  { level: 3, space: 5, q: S`In the network of Problem 5, every street can carry at most 60 cars per hour. Which flows are now possible?`, ans: S`$100-t\le60$, $70-t\le60$, $t\le60$: $40\le t\le60$`,
    sol: [S`From Problem 5: $(x_1,x_2,x_3)=(100-t,\,70-t,\,t)$ with $0\le t\le70$.`,
      S`Capacity: $100-t\le60\Rightarrow t\ge40$; $70-t\le60\Rightarrow t\ge10$; $t\le60$. Together $40\le t\le60$.`] },
  { level: 3, space: 5, q: S`With the fertilisers of Example 8, can you obtain exactly 50 kg N, 35 kg P and 30 kg K? Is fertiliser $F_3$ needed?`, ans: S`yes: 300 kg $F_1$, 100 kg $F_2$, 0 kg $F_3$ --- $F_3$ is not needed`,
    sol: [...steps([[1, 2, 0, 500], [2, 1, 2, 700], [1, 0, 2, 300]], [
      [S`Column 1.`, ["R2-2R1", "R3-R1"]],
      [S`Column 2.`, ["R3-2/3R2"]],
    ], { intro: S`N: $a+2b=500$; P ($\times20$): $2a+b+2c=700$; K: $a+2c=300$` }).steps,
      S`$c=0$; $-3b=-300$, $b=100$; $a=300$. All $\ge0$: possible, and $F_3$ is not needed.`] },
];

export const WS = {
  code: "2.7",
  title: "Applications of Linear Systems",
  bigideas: S`Many real problems are linear systems in disguise. A curve through given points, traffic through a network, atoms in a chemical reaction, currents in a circuit, temperatures in a plate, ingredients of a mixture: in each case every condition is one \textbf{linear equation in the unknowns}, and elimination does the rest. The real skill is \textbf{modelling} --- choosing the unknowns, writing one equation per condition --- and \textbf{interpreting}: what free variables, negative values and whole-number requirements mean in the situation.`,
  goals: ["Model a situation as a linear system: choose unknowns and write one equation per condition.", "Find interpolating polynomials and circles through points, and explain uniqueness.", "Solve network-flow problems and interpret free flows and their limits.", "Balance chemical equations with homogeneous systems.", "Find currents with Kirchhoff's laws and steady-state temperatures with the averaging rule."],
  curriculum: "Systems of linear equations — modelling and applications",
  vocab: [["Interpolating polynomial", "polynomial through given points"], ["Conservation of flow", "in = out at every node"], ["Balanced equation", "same atoms on both sides"], ["Kirchhoff's laws", "junction and loop laws"], ["Steady state", "each interior temperature = average of neighbours"]],
  hook: S`A delivery company records that a parcel van was 2 km from the depot at 9:00, 5 km at 10:00 and 12 km at 11:00. Is there a quadratic $d(t)=a+bt+ct^2$ that fits exactly? How many such quadratics? What equations do $a,b,c$ satisfy?`,
  concepts: NOTES,
  summary: [
    S`Model: unknowns $\to$ one linear equation per condition $\to$ row reduce $\to$ interpret.`,
    S`Interpolation: $k$ distinct points give exactly one polynomial of degree $\le k-1$.`,
    S`Networks: in = out at each node; free flows limited by $x_i\ge0$ and capacities.`,
    S`Chemistry: homogeneous system; scale to the smallest positive whole numbers.`,
    S`Circuits: junction law + loop law ($V=RI$); heat: each interior point = average of 4 neighbours.`,
  ],
  tips: ["The unknowns of an interpolation are the coefficients; the $x_i$ are numbers.", "Count every external flow at a node and check its direction.", "Negative flows or currents mean 'the other way' --- not allowed on one-way streets.", "Clear fractions in a balanced equation with the parameter.", "Use one sign convention around each loop.", "Check the answer against the original conditions, not just the reduced matrix."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
