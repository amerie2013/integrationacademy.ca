// MCR3U Worksheet 5.3 — Reciprocal Ratios and Trigonometric Identities (teacher edition)
import { polyT, armT, sin, cos, tan, f } from "./trigT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Reciprocal ratios from a triangle", q: "A right triangle has sides 11, 60 and 61, with ∠A opposite 11. Find csc A, sec A and cot A.",
    fig: polyT([[0, 0], [60, 0], [60, 11]], ["A", "", ""], { marks: [[30, 0, "60"], [60, 5.5, "11"], [28, 9, "61"]] }),
    steps: [S`$\csc A=\frac{\text{hyp}}{\text{opp}}=\frac{61}{11}$, $\sec A=\frac{61}{60}$, $\cot A=\frac{60}{11}$.`], ans: S`$\frac{61}{11}$, $\frac{61}{60}$, $\frac{60}{11}$` },
  { title: "Exact reciprocal values", q: S`Evaluate $\csc60^\circ$, $\sec30^\circ$ and $\cot45^\circ$.`, steps: [S`$\frac1{\sqrt3/2}=\frac2{\sqrt3}$ for both of the first two; $\frac11=1$.`], ans: S`$\frac2{\sqrt3}$, $\frac2{\sqrt3}$, $1$` },
  { title: "Calculator values", q: S`Evaluate $\sec72^\circ$, $\csc35^\circ$ and $\cot20^\circ$ to 3 decimals.`, steps: [S`Use $\frac1{\cos72^\circ}$, $\frac1{\sin35^\circ}$, $\frac1{\tan20^\circ}$ (there are no csc/sec/cot keys).`], ans: S`$${f(1 / cos(72), 3)}$, $${f(1 / sin(35), 3)}$, $${f(1 / tan(20), 3)}$` },
  { title: "Using the Pythagorean identity", q: S`θ is acute and $\cos\theta=0.28$. Find $\sin\theta$ and $\sec\theta$.`, steps: [S`$\sin^2\theta=1-0.0784=0.9216\Rightarrow\sin\theta=0.96$.`, S`$\sec\theta=\frac1{0.28}$.`], ans: S`$0.96$; $\approx${f(1 / 0.28, 4)}$` },
  { title: "All six ratios", q: S`$\tan\theta=-\frac34$ and θ is in Quadrant 4. Find the other five ratios.`,
    fig: armT(4, -3, "(4, −3)"),
    steps: [S`Q4: $x=4$, $y=-3$, $r=5$.`, S`$\sin\theta=-\frac35$, $\cos\theta=\frac45$, $\csc\theta=-\frac53$, $\sec\theta=\frac54$, $\cot\theta=-\frac43$.`], ans: "as listed" },
  { title: "Proof with the quotient identity", q: S`Prove $\sin\theta\cot\theta=\cos\theta$.`, steps: [S`LS $=\sin\theta\cdot\frac{\cos\theta}{\sin\theta}=\cos\theta=$ RS.`], ans: "LS = RS ∎" },
  { title: "A second Pythagorean identity", q: S`Prove $1+\cot^2\theta=\csc^2\theta$.`, steps: [S`LS $=1+\frac{\cos^2\theta}{\sin^2\theta}=\frac{\sin^2\theta+\cos^2\theta}{\sin^2\theta}=\frac1{\sin^2\theta}=$ RS.`], ans: "LS = RS ∎" },
  { title: "Difference of squares", q: S`Prove $(1-\cos\theta)(1+\cos\theta)=\sin^2\theta$.`, steps: [S`LS $=1-\cos^2\theta=\sin^2\theta=$ RS.`], ans: "LS = RS ∎" },
  { title: "Not an identity", q: S`Show that $\sin\theta+\cos\theta=1$ is not an identity.`, steps: [S`Try $\theta=45^\circ$: LS $=\frac1{\sqrt2}+\frac1{\sqrt2}=\sqrt2\ne1$.`], ans: "one counter-example disproves it" },
];

const PROBLEMS = [
  { level: 1, q: S`Evaluate $\csc45^\circ$ exactly.`, recap: "Exact csc.", ans: S`$\sqrt2$` },
  { level: 1, q: S`Write $\cot\theta$ in terms of $\sin\theta$ and $\cos\theta$.`, recap: "Quotient form.", ans: S`$\frac{\cos\theta}{\sin\theta}$` },
  { level: 1, q: S`Evaluate $\sec50^\circ$ to 4 decimals.`, recap: "Calculator sec.", ans: S`$${f(1 / cos(50), 4)}$` },
  { level: 2, q: S`θ is acute and $\sin\theta=0.8$. Find $\csc\theta$ and $\cot\theta$.`, recap: "From sin.", ans: S`$\cos\theta=0.6$: $\csc\theta=1.25$, $\cot\theta=0.75$` },
  { level: 2, q: S`Simplify $\cos\theta\tan\theta$.`, recap: "Simplify.", ans: S`$\sin\theta$` },
  { level: 2, q: S`Prove $\tan\theta\csc\theta=\sec\theta$.`, recap: "Short proof.", ans: S`$\frac{\sin\theta}{\cos\theta}\cdot\frac1{\sin\theta}=\frac1{\cos\theta}$` },
  { level: 2, q: S`Evaluate exactly: $\csc^2 30^\circ-\cot^2 30^\circ$.`, recap: "Exact expression.", ans: S`$4-3=1$` },
  { level: 2, q: S`$\sec\theta=-2$ and θ is in Quadrant 2. Find θ.`, recap: "Angle from sec.", ans: S`$\cos\theta=-\frac12$: $120^\circ$` },
  { level: 3, space: 4, q: S`Prove $(\sin\theta+\cos\theta)^2+(\sin\theta-\cos\theta)^2=2$.`, recap: "Expand two squares.", ans: S`$2\sin^2\theta+2\cos^2\theta=2$` },
  { level: 3, space: 4, q: S`Prove $\dfrac1{\cos^2\theta}-\tan^2\theta=1$.`, recap: "Common denominator.", ans: S`$\frac{1-\sin^2\theta}{\cos^2\theta}=1$` },
  { level: 3, space: 5, q: S`Prove $\dfrac{\sin\theta}{1-\cos\theta}=\dfrac{1+\cos\theta}{\sin\theta}$.`, recap: "Cross-multiply idea.", ans: S`multiply LS by $\frac{1+\cos\theta}{1+\cos\theta}$: $\frac{\sin\theta(1+\cos\theta)}{\sin^2\theta}$` },
  { level: 3, space: 5, q: S`Decide whether $\tan^2\theta-\sin^2\theta=\tan^2\theta\sin^2\theta$ is an identity. Prove it or give a counter-example.`, recap: "Decide and justify.", ans: S`identity: LS $=\frac{\sin^2\theta-\sin^2\theta\cos^2\theta}{\cos^2\theta}=\frac{\sin^2\theta\sin^2\theta}{\cos^2\theta}$` },
  { level: 3, space: 4, q: S`$\cot\theta=-2.4$ and $\sin\theta<0$. Find $\csc\theta$ and $\cos\theta$.`, recap: "cot + sign.", ans: S`Q4, point $(12,-5)$, $r=13$: $\csc\theta=-\frac{13}5=-2.6$, $\cos\theta=\frac{12}{13}$`, fig: armT(12, -5, "(12, −5)") },
];

export const WS = {
  code: "5.3",
  title: "Reciprocal Ratios and Trigonometric Identities",
  bigideas: S`$\csc\theta=\frac1{\sin\theta}$, $\sec\theta=\frac1{\cos\theta}$, $\cot\theta=\frac1{\tan\theta}$. An identity is true for all angles where both sides are defined. Use $\tan\theta=\frac{\sin\theta}{\cos\theta}$ and $\sin^2\theta+\cos^2\theta=1$ to prove identities by working on one side at a time.`,
  goals: ["Define and evaluate csc, sec, cot.", "Find all six ratios from one.", "Prove simple identities.", "Disprove a non-identity."],
  curriculum: "D1.4, D1.5",
  vocab: [["Reciprocal ratio", "csc, sec, cot"], ["Identity", "true for every allowed angle"], ["Counter-example", "one value where an equation fails"]],
  hook: S`Ask students to test $\sin^2\theta+\cos^2\theta$ for three angles of their choice on a calculator. Why is the answer always 1?`,
  concepts: [
    ["1. Reciprocals", S`${polyT([[0, 0], [4, 0], [4, 3]], ["θ", "", ""], { marks: [[2, 0, "adj"], [4, 1.5, "opp"], [1.8, 1.8, "hyp"]], width: 5 })}$\csc=\frac{\text{hyp}}{\text{opp}}$, $\sec=\frac{\text{hyp}}{\text{adj}}$, $\cot=\frac{\text{adj}}{\text{opp}}$.`],
    ["2. Identities", S`Quotient: $\tan\theta=\frac{\sin\theta}{\cos\theta}$. Pythagorean: $\sin^2\theta+\cos^2\theta=1$, and its forms $1+\tan^2\theta=\sec^2\theta$, $1+\cot^2\theta=\csc^2\theta$.`],
    ["3. Proof format", S`Write LS and RS. Transform one side only (usually the more complicated) until it matches. Rewrite in sin and cos; combine fractions; factor.`],
  ],
  tips: [S`Don't confuse $\csc x$ with $\sin^{-1}x$.`, "Never move terms across the = sign in a proof.", "Numerical checks are evidence, not proof.", "Look for 1 − sin² or 1 − cos².", "Factor before cancelling."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
