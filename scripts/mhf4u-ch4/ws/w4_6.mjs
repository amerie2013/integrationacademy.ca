// MHF4U Worksheet 4.6 — Proving Trigonometric Identities (teacher edition)
import { F } from "./figT.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;

const EXAMPLES = [
  { title: "Rewriting in sine and cosine", q: S`Prove $\sin x\cot x\sec x=1$.`,
    steps: [S`$\text{LS}=\sin x\cdot\frac{\cos x}{\sin x}\cdot\frac1{\cos x}$.`, S`Everything cancels: $\text{LS}=1=\text{RS}$.`], ans: S`LS $=$ RS` },
  { title: "Factoring", q: S`Prove $\csc^2x-\cos^2x\csc^2x=1$.`,
    steps: [S`$\text{LS}=\csc^2x(1-\cos^2x)=\csc^2x\sin^2x$.`, S`$=\frac1{\sin^2x}\sin^2x=1=\text{RS}$.`], ans: S`LS $=$ RS` },
  { title: "A common denominator", q: S`Prove $\dfrac1{1+\cos x}+\dfrac1{1-\cos x}=2\csc^2x$.`,
    steps: [S`$\text{LS}=\frac{(1-\cos x)+(1+\cos x)}{1-\cos^2x}=\frac2{\sin^2x}$.`, S`$=2\csc^2x=\text{RS}$.`], ans: S`LS $=$ RS` },
  { title: "A conjugate", q: S`Prove $\dfrac{\cos x}{1+\sin x}=\dfrac{1-\sin x}{\cos x}$.`,
    steps: [S`Multiply the LS by $\frac{1-\sin x}{1-\sin x}$: $\frac{\cos x(1-\sin x)}{1-\sin^2x}$.`, S`$=\frac{\cos x(1-\sin x)}{\cos^2x}=\frac{1-\sin x}{\cos x}=\text{RS}$.`], ans: S`LS $=$ RS` },
  { title: "Working on both sides", q: S`Prove $\tan^2x-\sin^2x=\tan^2x\sin^2x$.`,
    steps: [S`$\text{LS}=\frac{\sin^2x}{\cos^2x}-\sin^2x=\frac{\sin^2x-\sin^2x\cos^2x}{\cos^2x}$.`, S`$=\frac{\sin^2x(1-\cos^2x)}{\cos^2x}=\frac{\sin^2x\sin^2x}{\cos^2x}$.`, S`$\text{RS}=\frac{\sin^2x}{\cos^2x}\sin^2x$, which matches.`], ans: S`LS $=$ RS` },
  { title: "Double angle", q: S`Prove $\dfrac{1-\cos2x}{\sin2x}=\tan x$.`, fig: F(TG([[(x) => (1 - Math.cos(2 * x)) / Math.sin(2 * x), "violet"]], { xmin: -1.4, xmax: 1.4, ymin: -4, ymax: 4 })),
    steps: [S`$\text{LS}=\frac{1-(1-2\sin^2x)}{2\sin x\cos x}=\frac{2\sin^2x}{2\sin x\cos x}$.`, S`$=\frac{\sin x}{\cos x}=\tan x=\text{RS}$.`], ans: S`LS $=$ RS` },
  { title: "Compound angle", q: S`Prove $\sin(x+y)+\sin(x-y)=2\sin x\cos y$.`,
    steps: [S`$\text{LS}=\sin x\cos y+\cos x\sin y+\sin x\cos y-\cos x\sin y$.`, S`$=2\sin x\cos y=\text{RS}$.`], ans: S`LS $=$ RS` },
  { title: "Squares", q: S`Prove $(\sin x-\cos x)^2=1-\sin2x$.`, fig: F(TG([[(x) => (Math.sin(x) - Math.cos(x)) ** 2, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 3 })),
    steps: [S`$\text{LS}=\sin^2x-2\sin x\cos x+\cos^2x$.`, S`$=1-2\sin x\cos x=1-\sin2x=\text{RS}$.`], ans: S`LS $=$ RS` },
  { title: "A counterexample", q: S`Is $\cos(x+y)=\cos x+\cos y$ an identity?`, fig: F(TG([[(x) => Math.cos(x + 1), "violet"], [(x) => Math.cos(x) + Math.cos(1), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 })),
    steps: [S`Try $x=y=0$: $\text{LS}=\cos0=1$.`, S`$\text{RS}=\cos0+\cos0=2$.`, S`$1\ne2$.`], ans: "not an identity" },
];

const PROBLEMS = [
  { level: 1, q: S`Prove $\cos x\tan x=\sin x$.`, ans: S`$\cos x\cdot\frac{\sin x}{\cos x}$` },
  { level: 1, q: S`Prove $\sec x\cos x=1$.`, ans: S`$\frac1{\cos x}\cos x$` },
  { level: 1, q: S`Prove $\sin^2x\sec^2x=\tan^2x$.`, ans: S`$\frac{\sin^2x}{\cos^2x}$` },
  { level: 2, q: S`Prove $1+\cot^2x=\csc^2x$.`, ans: S`divide $\sin^2x+\cos^2x=1$ by $\sin^2x$` },
  { level: 2, q: S`Prove $(1-\sin x)(1+\sin x)=\cos^2x$.`, ans: S`$1-\sin^2x$` },
  { level: 2, q: S`Prove $\dfrac{\sin x}{\csc x}+\dfrac{\cos x}{\sec x}=1$.`, ans: S`$\sin^2x+\cos^2x$` },
  { level: 2, q: S`Prove $\tan x+\cot x=\sec x\csc x$.`, ans: S`$\frac{\sin^2x+\cos^2x}{\sin x\cos x}$` },
  { level: 2, q: S`Show that $\sin2x=2\sin x$ is not an identity, using a counterexample.`, ans: S`$x=\frac\pi2$: $0\ne2$` },
  { level: 3, space: 5, q: S`Prove $\dfrac{\sin x}{1-\cos x}-\dfrac{\sin x}{1+\cos x}=2\cot x$.`, ans: S`$\frac{2\sin x\cos x}{\sin^2x}$` },
  { level: 3, space: 5, q: S`Prove $\dfrac{\sin2x}{1-\cos2x}=\cot x$.`, ans: S`$\frac{2\sin x\cos x}{2\sin^2x}$` },
  { level: 3, space: 5, q: S`Prove $\cos^4x-\sin^4x=\cos2x$.`, ans: S`$(\cos^2x-\sin^2x)(\cos^2x+\sin^2x)$` },
  { level: 3, space: 5, q: S`Prove $\tan(x+y)\tan(x-y)=\dfrac{\tan^2x-\tan^2y}{1-\tan^2x\tan^2y}$.`, ans: S`multiply the two tangent formulas; both are differences of squares` },
  { level: 3, space: 5, q: S`Prove $\dfrac{\sin3x}{\sin x}-\dfrac{\cos3x}{\cos x}=2$, and state the restrictions on $x$.`, ans: S`$\frac{\sin2x}{\sin x\cos x}=2$; $x\ne\frac{n\pi}2$` },
];

export const WS = {
  code: "4.6",
  title: "Proving Trigonometric Identities",
  bigideas: S`An identity is an equation true at every value where both sides are defined. To prove one, work on each side separately, using known facts, until the two match. Graphs and test values can support a claim, but only algebra proves it. One value where the two sides differ is enough to disprove it.`,
  goals: ["Use reciprocal, quotient and Pythagorean identities.", "Prove identities one side at a time.", "Use common denominators, factoring and conjugates.", "Use compound and double angle formulas in proofs.", "Disprove a claim with a counterexample."],
  curriculum: "B3.3",
  vocab: [["Identity", "true for all values in the domain"], ["LS, RS", "left side, right side"], ["Conjugate", "$1-\\sin x$ paired with $1+\\sin x$"], ["Counterexample", "one value that makes a claim false"]],
  hook: S`Enter $x=1$ on a calculator into $\frac{\sin2x}{1+\cos2x}$ and into $\tan x$. Try another value. Is this enough to say the two are always equal? What would be enough?`,
  concepts: [
    ["1. The tool kit", S`\begin{center}\begin{tabular}{@{}ll@{}}\textbf{Reciprocal} & $\csc x=\frac1{\sin x}$, $\sec x=\frac1{\cos x}$, $\cot x=\frac1{\tan x}$\\ \textbf{Quotient} & $\tan x=\frac{\sin x}{\cos x}$, $\cot x=\frac{\cos x}{\sin x}$\\ \textbf{Pythagorean} & $\sin^2x+\cos^2x=1$, $1+\tan^2x=\sec^2x$, $1+\cot^2x=\csc^2x$\\ \textbf{Double angle} & $\sin2x=2\sin x\cos x$, $\cos2x=\cos^2x-\sin^2x$\\ \textbf{Compound} & $\sin(a\pm b)$, $\cos(a\pm b)$, $\tan(a\pm b)$\end{tabular}\end{center}`],
    ["2. A routine", S`\textbf{(a)} Start with the more complicated side. \textbf{(b)} Rewrite in sine and cosine. \textbf{(c)} Find a common denominator or factor. \textbf{(d)} Look for $\sin^2x+\cos^2x$, or for a difference of squares. \textbf{(e)} Multiply by a conjugate if a denominator has $1\pm\sin x$ or $1\pm\cos x$. \textbf{(f)} End with LS $=$ RS.`],
    ["3. Why you may not move terms", S`Moving terms assumes the two sides are already equal. For example, starting from the false claim $1=-1$ and squaring gives $1=1$. A chain of correct steps from a false start proves nothing, so each side is simplified on its own.`],
    ["4. What a graph shows", S`If two sides graph as one curve, the identity is plausible. Two different curves disprove it at once.
${F(TG([[(x) => Math.sin(x) ** 2, "violet"], [(x) => (1 - Math.cos(2 * x)) / 2 + 0.03, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 2 }), 6.5, "sin²x and (1 − cos 2x)/2 coincide (drawn slightly apart here).")}`],
  ],
  tips: ["Do not move terms across the equals sign.", "Do not square both sides.", "State restrictions where a denominator can be 0.", "A test value is evidence, not proof.", "Write LS and RS clearly, with each line equal to the one above."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
