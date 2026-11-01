// 2.7 Applications of Linear Systems — 20 easy + 20 medium questions
import { tf, fill, ms } from "./kit.mjs";
import { am } from "./la.mjs";
import { vdoc } from "../vecfig.mjs";

/** one grid point T with its four neighbours (top, right, bottom, left) */
const starSvg = (t) => vdoc({ width: 300, view: { xmin: -1.8, xmax: 1.8, ymin: -1.6, ymax: 1.6 }, grid: false, axes: false, segs: [{ pts: [[-1.2, 0], [1.2, 0]], color: "#cbd5e1", w: 1.5 }, { pts: [[0, -1.2], [0, 1.2]], color: "#cbd5e1", w: 1.5 }], points: [{ x: 0, y: 0, label: "T", color: "amber", dx: 8, dy: -8 }, ...[[0, 1], [1, 0], [0, -1], [-1, 0]].map(([x, y], i) => ({ x, y, label: `${t[i]}°`, color: "red", dx: 8, dy: -8 }))] });
import { S, num, mc, modelQ, chemQ, plateRows, plateSvg, networkSvg, circuitSvg, curveSvg, circleSvg } from "./app27.mjs";

const A = ["a_0", "a_1", "a_2"], A4 = ["a_0", "a_1", "a_2", "a_3"], X4 = ["x_1", "x_2", "x_3", "x_4"], I = ["I_1", "I_2", "I_3"], T = ["T_1", "T_2", "T_3", "T_4"];
const pointsText = (pts) => pts.map(([x, y]) => `p(${x})=${y}`).join(",\\ ");

/** the medium-level traffic network (one free variable) */
const NETM = networkSvg({ A: [0, 3], B: [4, 3], C: [4, 0], D: [0, 0] }, [["A", "B", "x₁"], ["B", "C", "x₂"], ["D", "C", "x₃"], ["A", "D", "x₄"]], [["A", -1.4, 0, "400", true], ["B", 1.4, 0, "150", false], ["C", 1.4, 0, "300", false], ["D", -1.4, 0, "50", true]], { xmin: -2, xmax: 6, ymin: -0.9, ymax: 3.9 });
const NETM_ROWS = [[1, 0, 0, 1, 400], [1, -1, 0, 0, 150], [0, 1, 1, 0, 300], [0, 0, 1, -1, 50]];
const NETM_SETUP = "Node equations (in = out): A: $x_1+x_4=400$; B: $x_1=150+x_2$; C: $x_2+x_3=300$; D: $x_4+50=x_3$.";

const easy = [
  modelQ(S`A quadratic $p(x)=a_0+a_1x+a_2x^2$ passes through $(0,1)$, $(1,2)$ and $(2,7)$ (figure). Find $a_2$.`, [[1, 0, 0, 1], [1, 1, 1, 2], [1, 2, 4, 7]], A, (x) => x[2],
    curveSvg((x) => 1 - x + 2 * x * x, [[0, 1], [1, 2], [2, 7]], { xmin: -1, xmax: 3, ymin: -1, ymax: 9 }), S`Each point gives one equation: $${pointsText([[0, 1], [1, 2], [2, 7]])}$.`),
  modelQ(S`Find the quadratic $p(x)=a_0+a_1x+a_2x^2$ with $p(0)=-2$, $p(1)=0$, $p(2)=4$, and give $p(3)$.`, [[1, 0, 0, -2], [1, 1, 1, 0], [1, 2, 4, 4]], A, (x) => x[0] + 3 * x[1] + 9 * x[2], undefined, S`Then $p(3)=a_0+3a_1+9a_2$.`),
  modelQ(S`The line $y=a_0+a_1x$ passes through $(1,4)$ and $(3,8)$. Find $a_0$.`, [[1, 1, 4], [1, 3, 8]], ["a_0", "a_1"], (x) => x[0]),
  tf("Through any three points with different x-coordinates there is exactly one polynomial of degree at most 2.", true, "The interpolation system is square with rank 3, so it has exactly one solution."),
  tf("Through any three points in the plane there is exactly one parabola y = a₀ + a₁x + a₂x² with a₂ ≠ 0.", false, "Collinear points give a₂ = 0 (a line), and two points with the same x give no function at all."),
  mc("How many unknown coefficients are there when a polynomial of degree at most 3 is fitted through 4 points?", "4", ["3", "5", "8"], "p(x) = a₀ + a₁x + a₂x² + a₃x³ has four coefficients; each point gives one equation."),
  num(S`Flows of 120 cars per hour and $x$ cars per hour enter a junction; 80 and 95 cars per hour leave (figure). Find $x$.`, 55, "Flow in = flow out: 120 + x = 80 + 95, so x = 55.",
    networkSvg({ J: [0, 0] }, [], [["J", -2.2, 0, "120", true], ["J", 0, 1.8, "x", true], ["J", 2.2, 0, "80", false], ["J", 0, -1.8, "95", false]], { xmin: -3, xmax: 3, ymin: -2.4, ymax: 2.4 })),
  tf("In a network-flow model each node gives one linear equation: flow in = flow out.", true, "Nothing is created or lost at a node."),
  chemQ(S`Balance $x_1\,\mathrm{H_2}+x_2\,\mathrm{Cl_2}\to x_3\,\mathrm{HCl}$ with the smallest whole numbers. Give $x_3$.`, [[2, 0, -1], [0, 2, -1]], 2, "H: $2x_1=x_3$; Cl: $2x_2=x_3$"),
  chemQ(S`Balance $x_1\,\mathrm{Mg}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{MgO}$ with the smallest whole numbers. Give $x_1$.`, [[1, 0, -1], [0, 2, -1]], 0, "Mg: $x_1=x_3$; O: $2x_2=x_3$"),
  fill("Kirchhoff's ___ law: the total current entering a junction equals the total current leaving it.", ["current", "junction", "first"], "The current (junction) law; the voltage (loop) law says the voltage rises around a loop equal the drops."),
  mc("By Ohm's law, the voltage drop across a resistor of R ohms carrying a current of I amperes is:", "RI volts", ["R/I volts", "R + I volts", "I/R volts"], "V = RI."),
  num(S`At steady state an interior grid point has neighbours at $10^\circ$, $20^\circ$, $30^\circ$ and $40^\circ$ (figure). What is its temperature (degrees)?`, 25, "The averaging rule: T = (10 + 20 + 30 + 40)/4 = 25.",
    starSvg([10, 20, 30, 40])),
  modelQ(S`A shop mixes coffee worth 8 dollars per kg with coffee worth 12 dollars per kg to make 10 kg worth 100 dollars. How many kg of the 8-dollar coffee are used?`, [[1, 1, 10], [8, 12, 100]], ["x", "y"], (x) => x[0], undefined, S`Mass: $x+y=10$; value: $8x+12y=100$.`),
  modelQ(S`5000 dollars is split between an account paying 3% and one paying 5% per year; the total interest is 210 dollars. How much is in the 3% account?`, [[1, 1, 5000], [3, 5, 21000]], ["x", "y"], (x) => x[0], undefined, S`Total: $x+y=5000$; interest $0.03x+0.05y=210$, i.e. $3x+5y=21000$.`),
  num(S`A single loop has a 12 V source and resistors of 2 Ω and 4 Ω in series. Find the current (amperes).`, 2, "Loop law: 2I + 4I = 12, so I = 2."),
  mc(S`Which is the coefficient matrix for fitting $p(x)=a_0+a_1x+a_2x^2$ through points with $x=0,1,2$?`, S`$${am([[1, 0, 0], [1, 1, 1], [1, 2, 4]], false)}$`, [S`$${am([[0, 1, 2], [0, 1, 4], [1, 1, 1]], false)}$`, S`$${am([[1, 0, 0], [1, 1, 1], [1, 2, 2]], false)}$`, S`$${am([[0, 0, 1], [1, 1, 1], [4, 2, 1]], false)}$`], "Row for x is (1, x, x²), in the order a₀, a₁, a₂."),
  tf("Balancing a chemical equation leads to a homogeneous linear system.", true, "Each element gives (atoms left) − (atoms right) = 0."),
  num(S`A network has 5 streets, and its node equations have rank 3. How many flows can be chosen freely?`, 2, "Free variables = unknowns − rank = 5 − 3."),
  num(S`The circle $x^2+y^2+F=0$ passes through $(3,4)$. Find $F$.`, -25, "9 + 16 + F = 0."),
];

const medium = [
  modelQ(S`Find the quadratic through $(-1,6)$, $(1,2)$ and $(2,3)$ (figure) and give its constant term $a_0$.`, [[1, -1, 1, 6], [1, 1, 1, 2], [1, 2, 4, 3]], A, (x) => x[0],
    curveSvg((x) => 3 - 2 * x + x * x, [[-1, 6], [1, 2], [2, 3]], { xmin: -2, xmax: 3, ymin: -1, ymax: 8 }), S`Each point gives $a_0+a_1x+a_2x^2=y$.`),
  modelQ(S`Fit $p(x)=a_0+a_1x+a_2x^2+a_3x^3$ through $(0,1)$, $(1,0)$, $(-1,4)$, $(2,1)$. Find $a_3$.`, [[1, 0, 0, 0, 1], [1, 1, 1, 1, 0], [1, -1, 1, -1, 4], [1, 2, 4, 8, 1]], A4, (x) => x[3], undefined, S`Rows $(1,x,x^2,x^3\mid y)$; $a_3=0$ means the four points lie on a parabola.`),
  modelQ(S`In the network shown (cars per hour, one-way streets), suppose $x_4=100$. Find $x_2$.`, [...NETM_ROWS, [0, 0, 0, 1, 100]], X4, (x) => x[1], NETM, NETM_SETUP + " Add the condition $x_4=100$ as a fifth row."),
  num(S`For the network shown (all flows must be $\ge0$), what is the largest possible value of $x_4$?`, 250, NETM_SETUP + " Reducing gives, with $x_4=t$ free: $x_1=400-t$, $x_2=250-t$, $x_3=50+t$. All flows $\ge0$: $t\le250$ (from $x_2$) and $t\le400$ (from $x_1$), so the largest value is $250$.", NETM),
  num(S`For the same network (cars per hour, flows $\ge0$), what is the smallest possible value of $x_3$?`, 50, NETM_SETUP + " With $x_4=t\ge0$: $x_3=50+t$, smallest when $t=0$: $x_3=50$.", NETM),
  chemQ(S`Balance $x_1\,\mathrm{CH_4}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{CO_2}+x_4\,\mathrm{H_2O}$ with the smallest whole numbers. Give $x_2$.`, [[1, 0, -1, 0], [4, 0, 0, -2], [0, 2, -2, -1]], 1, "C, H, O"),
  chemQ(S`Balance $x_1\,\mathrm{Al}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{Al_2O_3}$ with the smallest whole numbers. Give $x_1$.`, [[1, 0, -2], [0, 2, -3]], 0, "Al, O"),
  chemQ(S`Balance $x_1\,\mathrm{C_2H_6O}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{CO_2}+x_4\,\mathrm{H_2O}$ with the smallest whole numbers. Give $x_2$.`, [[2, 0, -1, 0], [6, 0, 0, -2], [1, 2, -2, -1]], 1, "C, H, O"),
  chemQ(S`Balance $x_1\,\mathrm{Fe_2O_3}+x_2\,\mathrm{C}\to x_3\,\mathrm{Fe}+x_4\,\mathrm{CO_2}$ with the smallest whole numbers. Give $x_3$.`, [[2, 0, -1, 0], [3, 0, 0, -2], [0, 1, 0, -1]], 2, "Fe, O, C"),
  modelQ(S`In the circuit shown (36 V source; 4 Ω, 6 Ω, 3 Ω), find $I_3$ in amperes.`, [[1, -1, -1, 0], [4, 6, 0, 36], [0, 6, -3, 0]], I, (x) => x[2], circuitSvg(36, 4, 6, 3), S`Junction: $I_1=I_2+I_3$. Left loop: $4I_1+6I_2=36$. Right loop: $6I_2-3I_3=0$.`),
  modelQ(S`In the circuit shown (15 V source; 1 Ω, 4 Ω, 4 Ω), find $I_2$ in amperes.`, [[1, -1, -1, 0], [1, 4, 0, 15], [0, 4, -4, 0]], I, (x) => x[1], circuitSvg(15, 1, 4, 4), S`Junction: $I_1=I_2+I_3$. Left loop: $I_1+4I_2=15$. Right loop: $4I_2-4I_3=0$.`),
  modelQ(S`A square plate has edge temperatures $80^\circ$ (top), $40^\circ$ (right), $0^\circ$ (bottom), $40^\circ$ (left), as shown. Find $T_1$ (degrees).`, plateRows(80, 40, 0, 40), T, (x) => x[0], plateSvg(80, 40, 0, 40), "Averaging rule at each point, times 4: e.g. $4T_1-T_2-T_3=80+40$."),
  modelQ(S`A square plate has its top edge at $100^\circ$ and the other three edges at $0^\circ$, as shown. Find $T_3$ (degrees).`, plateRows(100, 0, 0, 0), T, (x) => x[2], plateSvg(100, 0, 0, 0), "Averaging rule at each point, times 4: e.g. $4T_3-T_1-T_4=0$."),
  modelQ(S`10000 dollars is invested in three funds paying 2%, 4% and 6% per year, for a total income of 440 dollars. The amount in the 6% fund is twice the amount in the 2% fund. How much is in the 4% fund?`, [[1, 1, 1, 10000], [2, 4, 6, 44000], [-2, 0, 1, 0]], ["x", "y", "z"], (x) => x[1], undefined, S`$x+y+z=10000$; $2x+4y+6z=44000$ (income times 100); $z=2x$.`),
  modelQ(S`The circle $x^2+y^2+Dx+Ey+F=0$ passes through $(1,0)$, $(-1,2)$ and $(3,2)$ (figure). Find its radius.`, [[1, 0, 1, -1], [-1, 2, 1, -5], [3, 2, 1, -13]], ["D", "E", "F"], (x) => Math.sqrt(x[0] ** 2 / 4 + x[1] ** 2 / 4 - x[2]),
    circleSvg([1, 2], 2, [[1, 0], [-1, 2], [3, 2]], { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }), S`Each point gives $Dx+Ey+F=-(x^2+y^2)$. Then the radius is $\sqrt{D^2/4+E^2/4-F}$.`),
  modelQ(S`A polynomial $p(x)=a_0+a_1x+a_2x^2$ has $p(0)=1$, $p(1)=2$ and $p'(1)=3$. Find $a_2$.`, [[1, 0, 0, 1], [1, 1, 1, 2], [0, 1, 2, 3]], A, (x) => x[2], undefined, S`$p'(x)=a_1+2a_2x$, so $p'(1)=3$ is the linear equation $a_1+2a_2=3$.`),
  modelQ(S`Food A has 2 g of protein and 1 g of fat per serving; food B has 1 g of protein and 3 g of fat. How many servings of B give exactly 11 g of protein and 13 g of fat together with some servings of A?`, [[2, 1, 11], [1, 3, 13]], ["a", "b"], (x) => x[1], undefined, S`Protein: $2a+b=11$; fat: $a+3b=13$.`),
  tf("If the node equations of a traffic network have a free variable, the street flows are not determined by the external flows alone.", true, "Different values of the free variable give different valid flows (traffic can circulate in a loop)."),
  mc("A chemical equation has 4 compounds and involves 3 elements; its balancing system has rank 3. The balanced coefficients form:", "one free variable: all multiples of one balance", ["a unique balance", "two free variables", "no balance"], "4 unknowns − rank 3 = 1 parameter; choose the smallest whole-number multiple."),
  ms(S`For $p(x)=a_0+a_1x+a_2x^2$, which conditions are linear equations in $a_0,a_1,a_2$?`, [S`$p(2)=5$`, S`$p'(1)=0$`, S`$p(1)\,p(2)=3$`, S`$\int_0^1p(x)\,dx=1$`], [0, 1, 3], "Values, derivatives and integrals of p are linear in the coefficients; a product of two values is not."),
];

export const E = easy;
export const M = medium;
