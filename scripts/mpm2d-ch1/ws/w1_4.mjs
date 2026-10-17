// MPM2D Worksheet 1.4 — Solving by Elimination (teacher edition)
import { planeT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Equivalent systems", q: String.raw`Show that $x+y=5$, $x-y=1$ and the system $2x=6$, $x+y=5$ have the same solution.`,
    fig: planeT({ view: { xmin: -1, xmax: 6, ymin: -2, ymax: 6 }, lines: [{ m: -1, b: 5, color: "blue" }, { m: 1, b: -1, color: "red" }], vlines: [{ x: 3, color: "green", dash: true }], points: [{ x: 3, y: 2, label: "(3, 2)", color: "green" }], step: { x: 1, y: 1 } }, 4.5),
    steps: [String.raw`Adding the equations gives $2x=6$, the vertical line $x=3$.`, String.raw`It passes through $(3,2)$, the original intersection.`], ans: "both have solution $(3,2)$" },
  { title: "Adding", q: String.raw`Solve $3x+2y=7$ and $5x-2y=17$.`,
    steps: [String.raw`Add: $8x=24\Rightarrow x=3$.`, String.raw`$9+2y=7\Rightarrow y=-1$. Check: $15+2=17$ ✓`], ans: "$(3,-1)$" },
  { title: "Subtracting", q: String.raw`Solve $4x+3y=18$ and $4x-y=2$.`,
    steps: [String.raw`Subtract: $4y=16\Rightarrow y=4$.`, String.raw`$4x-4=2\Rightarrow x=\frac32$. Check: $6+12=18$ ✓`], ans: String.raw`$\left(\frac32,4\right)$` },
  { title: "Multiplying one equation", q: String.raw`Solve $2x+y=4$ and $5x+3y=9$.`,
    steps: [String.raw`$\times3$: $6x+3y=12$. Subtract the second: $x=3$.`, String.raw`$6+y=4\Rightarrow y=-2$. Check: $15-6=9$ ✓`], ans: "$(3,-2)$" },
  { title: "Multiplying both equations", q: String.raw`Solve $5x+4y=6$ and $3x-6y=-30$.`,
    steps: [String.raw`$\times3$: $15x+12y=18$; $\times2$: $6x-12y=-60$.`, String.raw`Add: $21x=-42\Rightarrow x=-2$; $-10+4y=6\Rightarrow y=4$.`, String.raw`Check: $-6-24=-30$ ✓`], ans: "$(-2,4)$" },
  { title: "Eliminating x instead", q: String.raw`Solve $3x-5y=1$ and $2x+3y=7$ by eliminating $x$.`,
    steps: [String.raw`$\times2$: $6x-10y=2$; $\times3$: $6x+9y=21$.`, String.raw`Subtract: $19y=19\Rightarrow y=1$; $3x-5=1\Rightarrow x=2$.`], ans: "$(2,1)$" },
  { title: "Rearranging first", q: String.raw`Solve $3y=2x-11$ and $5x=4y+21$.`,
    steps: [String.raw`$2x-3y=11$ and $5x-4y=21$.`, String.raw`$\times4$, $\times3$: $8x-12y=44$, $15x-12y=63$; subtract: $7x=19\Rightarrow x=\frac{19}{7}$.`, String.raw`$y=\frac{2x-11}{3}=\frac{\frac{38}{7}-\frac{77}{7}}{3}=-\frac{13}{7}$.`], ans: String.raw`$\left(\frac{19}{7},-\frac{13}{7}\right)$` },
  { title: "Decimals", q: String.raw`Solve $0.3x+0.2y=1.6$ and $0.5x-0.4y=0.2$.`,
    steps: [String.raw`$\times10$: $3x+2y=16$ and $5x-4y=2$.`, String.raw`$\times2$ the first and add: $11x=34\Rightarrow x=\frac{34}{11}$; $y=\frac{16-3x}{2}=\frac{37}{11}$.`], ans: String.raw`$\left(\frac{34}{11},\frac{37}{11}\right)$` },
  { title: "When both variables cancel", q: String.raw`Solve $6x-9y=12$ and $-4x+6y=-8$.`,
    steps: [String.raw`$\times2$ and $\times3$: $12x-18y=24$, $-12x+18y=-24$.`, String.raw`Add: $0=0$.`], ans: "infinitely many solutions (the same line)" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve $x+y=12$ and $x-y=2$.`, recap: "x + y = 12, x − y = 2.", ans: "$(7,5)$" },
  { level: 1, q: String.raw`Solve $2x+5y=1$ and $2x-y=13$.`, recap: "2x + 5y = 1, 2x − y = 13.", ans: "$(\\tfrac{11}{2},-2)$" },
  { level: 1, q: String.raw`Solve $3x+y=11$ and $x-y=1$.`, recap: "3x + y = 11, x − y = 1.", ans: "$(3,2)$" },
  { level: 2, q: String.raw`Solve $4x-3y=5$ and $2x+y=5$.`, recap: "4x − 3y = 5, 2x + y = 5.", ans: "$(2,1)$" },
  { level: 2, q: String.raw`Solve $5x+2y=-1$ and $3x+4y=5$.`, recap: "5x + 2y = −1, 3x + 4y = 5.", ans: "$(-1,2)$" },
  { level: 2, q: String.raw`Solve $7x-3y=13$ and $4x+5y=-6$.`, recap: "7x − 3y = 13, 4x + 5y = −6.", ans: "$(1,-2)$" },
  { level: 2, q: String.raw`Solve $\frac{x}{2}+\frac{y}{3}=5$ and $\frac{x}{4}-\frac{y}{6}=\frac12$.`, recap: "Fractions: elimination.", ans: "$(6,6)$" },
  { level: 2, q: String.raw`Solve $2y=x+6$ and $3x=5y-17$.`, recap: "Rearrange first.", ans: "$(-4,1)$" },
  { level: 3, space: 5, q: String.raw`Solve $0.04x+0.06y=3.4$ and $x+y=70$. Then describe a situation the system could model.`, recap: "Decimal system.", ans: String.raw`$x=40$, $y=30$; e.g. a 70 L mixture of 4\% and 6\% salt solutions containing 3.4 L of salt` },
  { level: 3, space: 5, q: String.raw`Find $a$ and $b$ if $(2,-1)$ is the solution of $ax+by=7$ and $bx-ay=4$.`, recap: "Find a and b.", ans: String.raw`$2a-b=7$, $2b+a=4$: $a=\frac{18}{5}$, $b=\frac15$` },
  { level: 3, space: 5, q: String.raw`Solve the system $\frac{3}{x}+\frac{2}{y}=4$, $\frac{1}{x}-\frac{4}{y}=-1$ by letting $u=\frac1x$ and $v=\frac1y$.`, recap: "Substitution u = 1/x, v = 1/y.", ans: String.raw`$3u+2v=4$, $u-4v=-1$: $u=1$, $v=\frac12$: $x=1$, $y=2$` },
  { level: 3, space: 5, q: String.raw`Explain why multiplying an equation by a non-zero constant does not change the solution of a system, using the graph of $x+2y=6$ and $3x+6y=18$.`, recap: "Why multiplying is allowed.", ans: "both equations have exactly the same points (same intercepts (6, 0) and (0, 3)): it is the same line" },
  { level: 3, space: 5, q: String.raw`For what value of $k$ does elimination give $0=0$ for $4x-ky=10$ and $-6x+9y=-15$?`, recap: "Find k for 0 = 0.", ans: String.raw`$\frac{4}{-6}=\frac{-k}{9}=\frac{10}{-15}\Rightarrow k=6$` },
];

export const WS = {
  code: "1.4",
  title: "Solving by Elimination",
  bigideas: String.raw`Multiplying an equation by a non-zero constant, or adding two equations, produces an equivalent system --- different lines through the same point. Elimination uses this to make one variable's coefficients opposite (then add) or equal (then subtract), leaving one equation in one variable. It is the most efficient method for systems in standard form.`,
  goals: ["Explain equivalent systems.", "Eliminate by adding or subtracting.", "Multiply one or both equations first.", "Rearrange into standard form.", "Recognize special cases."],
  curriculum: "AG1",
  vocab: [["Equivalent systems", "systems with the same solution"], ["Eliminate", "cancel one variable"], ["LCM", "lowest common multiple of the coefficients"]],
  hook: String.raw`Put two receipts on the board: “3 burgers and 2 drinks cost \$27; 3 burgers and 4 drinks cost \$33.” Ask what one drink costs. Students subtract the receipts — that is elimination.`,
  concepts: [
    ["1. Why it works", String.raw`A solution of both equations also satisfies their sum and any multiple of either. Each new equation is a line through the same point.`],
    ["2. The method", String.raw`Standard form, line up terms; multiply to make coefficients opposite or equal; add or subtract; solve; back-substitute; check.`],
    ["3. Special cases", String.raw`$0=0$: infinitely many solutions. $0=k$, $k\ne0$: no solution.`],
  ],
  tips: ["When subtracting, put brackets around the whole second equation.", "Multiply both sides.", "Choose the variable needing smaller multipliers.", "Clear fractions and decimals first.", "Always check in both originals."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
