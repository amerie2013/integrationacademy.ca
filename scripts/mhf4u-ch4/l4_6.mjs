// MHF4U 4.6 — Proving Trigonometric Identities: quotient, reciprocal and Pythagorean identities; working one side at a
// time; proofs with compound and double angle formulas; disproving with a counterexample
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { TG } from "./trigfig.mjs";

export const TITLE = "4.6 Proving Trigonometric Identities";
export const ID = "9024f137-c123-436f-a5c3-f22210aa707d";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧾",
    title: "Proving Trigonometric Identities",
    overview: S`An identity is an equation that is true for every value where both sides are defined. A proof shows this using known facts. Work on each side separately, never moving terms across the equals sign, because that would assume what you are trying to prove. A graph can suggest an identity; only an algebraic argument establishes it, while one failing value is enough to disprove it.`,
    goals: [
      "use the reciprocal, quotient and Pythagorean identities;",
      "prove an identity by working on each side separately;",
      "use common denominators and factoring in a proof;",
      "use compound and double angle formulas in a proof;",
      "disprove a false statement with a counterexample.",
    ],
    curriculum: "B3.3 (prove trigonometric identities using reciprocal, quotient, Pythagorean, compound and double angle identities)",
    prior: [
      [S`\(\tan x\) in terms of sine and cosine?`, S`\(\frac{\sin x}{\cos x}\).`],
      [S`Factor \(1-\cos^2x\).`, S`\((1-\cos x)(1+\cos x)\).`],
      [S`\(\sin2x\)?`, S`\(2\sin x\cos x\).`],
    ],
    words: [
      ["Identity", "true for all values in the domain", "\\(\\sin^2x+\\cos^2x=1\\)"],
      ["LS, RS", "left side, right side", ""],
      ["Counterexample", "one value that makes a statement false", ""],
    ],
  }),

  section("📌 The tool kit", S`
  ${table(["Type", "Identities"], [
    ["Reciprocal", "csc x = 1/sin x, sec x = 1/cos x, cot x = 1/tan x"],
    ["Quotient", "tan x = sin x / cos x, cot x = cos x / sin x"],
    ["Pythagorean", "sin²x + cos²x = 1, 1 + tan²x = sec²x, 1 + cot²x = csc²x"],
    ["Double angle", "sin 2x = 2 sin x cos x; cos 2x = cos²x − sin²x"],
    ["Compound", "sin(a ± b), cos(a ± b), tan(a ± b)"],
  ])}
  ${keyIdea(S`A dependable routine: (1) start with the more complicated side; (2) rewrite in sine and cosine; (3) find common denominators or factor; (4) look for \(\sin^2x+\cos^2x\); (5) stop when both sides match, and write \(\text{LS}=\text{RS}\).`)}`),

  section("📌 Explore", S`<p>Pick an identity and drag \(x\). Both sides stay equal for every value, so the two curves coincide. Remember that this is evidence, not a proof.</p>`),

  widget("ibIdentity", { init: [2, 70] }),

  section("📌 Graph evidence", S`
  ${plane(TG([[(x) => Math.tan(x) * Math.cos(x), "violet"], [Math.sin, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }), "tan x cos x and sin x coincide, but tan x cos x is not defined where cos x = 0.")}
  ${watchOut([
    "Don't move terms across the equals sign in a proof.",
    "Don't square both sides: this can make a false statement look true.",
    "An identity may have restrictions where a denominator is 0; state them when asked.",
    "One value that works does not prove an identity. One value that fails disproves it.",
    "Write each line as an equality with the line above it.",
  ])}`),

  examples([
    ["Rewriting in sine and cosine", S`Prove \(\tan x\cos x\csc x=1\).`,
      [S`\(\text{LS}=\frac{\sin x}{\cos x}\cdot\cos x\cdot\frac1{\sin x}\).`, S`Everything cancels: \(\text{LS}=1=\text{RS}\).`],
      S`\(\text{LS}=\text{RS}\)`],
    ["A Pythagorean identity", S`Prove \(\sec^2x-\sin^2x\sec^2x=1\).`,
      [S`\(\text{LS}=\sec^2x(1-\sin^2x)=\sec^2x\cos^2x\).`, S`\(=\frac1{\cos^2x}\cos^2x=1=\text{RS}\).`],
      S`\(\text{LS}=\text{RS}\)`],
    ["A common denominator", S`Prove \(\dfrac1{1-\sin x}+\dfrac1{1+\sin x}=2\sec^2x\).`,
      [S`\(\text{LS}=\dfrac{(1+\sin x)+(1-\sin x)}{(1-\sin x)(1+\sin x)}=\dfrac2{1-\sin^2x}\).`, S`\(=\dfrac2{\cos^2x}=2\sec^2x=\text{RS}\).`],
      S`\(\text{LS}=\text{RS}\)`],
    ["Double angle", S`Prove \(\dfrac{\sin2x}{1+\cos2x}=\tan x\).`,
      [S`\(\text{LS}=\dfrac{2\sin x\cos x}{1+(2\cos^2x-1)}=\dfrac{2\sin x\cos x}{2\cos^2x}\).`, S`\(=\dfrac{\sin x}{\cos x}=\tan x=\text{RS}\).`],
      S`\(\text{LS}=\text{RS}\)`,
      plane(TG([[(x) => Math.sin(2 * x) / (1 + Math.cos(2 * x)), "violet"]], { xmin: -1.4, xmax: 1.4, ymin: -4, ymax: 4 }))],
    ["A counterexample", S`Is \(\sin2x=2\sin x\) an identity?`,
      [S`Try \(x=\frac\pi2\): \(\text{LS}=\sin\pi=0\).`, S`\(\text{RS}=2\sin\frac\pi2=2\).`, S`\(0\ne2\), so the statement is false.`],
      S`not an identity`,
      plane(TG([[(x) => Math.sin(2 * x), "violet"], [(x) => 2 * Math.sin(x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -3, ymax: 3 }))],
  ]),

  practice([
    q("simplify", S`Simplify \(\cos x\tan x\). Which ratio is it?`, choice([S`\(\sin x\)`, S`\(\cos x\)`, S`\(\sec x\)`, S`\(1\)`], 0),
      "tan = sin/cos.", [S`\(\cos x\cdot\frac{\sin x}{\cos x}\).`], S`\(\sin x\)`),
    q("simplify", S`Simplify \(\dfrac{1-\cos^2x}{\sin^2x}\) and give the value.`, num(1),
      "Pythagorean identity.", [S`\(\frac{\sin^2x}{\sin^2x}\).`], S`\(1\)`),
    q("simplify", S`Which ratio equals \(1+\tan^2x\)?`, choice([S`\(\sec^2x\)`, S`\(\csc^2x\)`, S`\(\cot^2x\)`, S`\(\sin^2x\)`], 0),
      "Divide sin² + cos² = 1 by cos².", [S`\(\sec^2x\).`], S`\(\sec^2x\)`),
    q("value", S`Evaluate \((\sin x+\cos x)^2-\sin2x\).`, num(1),
      "Expand.", [S`\(1+2\sin x\cos x-2\sin x\cos x\).`], S`\(1\)`),
    q("counterexample", S`At \(x=\dfrac\pi4\), find the value of \(\tan x+\cot x\).`, num(2),
      "Both are 1.", [S`\(1+1\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Working on both sides", S`Prove \(\dfrac{\cos x}{1-\sin x}-\dfrac{\cos x}{1+\sin x}=2\tan x\).`,
      [S`\(\text{LS}=\dfrac{\cos x(1+\sin x)-\cos x(1-\sin x)}{1-\sin^2x}\).`, S`\(=\dfrac{2\sin x\cos x}{\cos^2x}=\dfrac{2\sin x}{\cos x}\).`, S`\(=2\tan x=\text{RS}\).`],
      S`\(\text{LS}=\text{RS}\)`],
    ["A compound and double angle proof", S`Prove \(\cos(x+y)\cos(x-y)=\cos^2x-\sin^2y\).`,
      [S`\(\text{LS}=(\cos x\cos y-\sin x\sin y)(\cos x\cos y+\sin x\sin y)=\cos^2x\cos^2y-\sin^2x\sin^2y\).`, S`Replace \(\cos^2y=1-\sin^2y\) and \(\sin^2x=1-\cos^2x\): \(\cos^2x-\cos^2x\sin^2y-\sin^2y+\cos^2x\sin^2y\).`, S`\(=\cos^2x-\sin^2y=\text{RS}\).`],
      S`\(\text{LS}=\text{RS}\)`],
  ], [
    q("hard", S`Which is an identity?`, choice([S`\(\dfrac{1-\cos2x}{\sin2x}=\tan x\)`, S`\(\sin(x+y)=\sin x+\sin y\)`, S`\(\cos2x=2\cos x\)`, S`\(\tan2x=2\tan x\)`], 0),
      "Use the double angle formulas.", [S`\(\frac{2\sin^2x}{2\sin x\cos x}=\tan x\).`], S`\(\frac{1-\cos2x}{\sin2x}=\tan x\)`),
    q("hard", S`\(\sec^4x-\tan^4x=A+B\tan^2x\). Find \(A+B\).`, num(3),
      "Factor as a difference of squares.", [S`\((\sec^2x-\tan^2x)(\sec^2x+\tan^2x)=1+2\tan^2x\): \(A=1,\ B=2\).`], S`\(3\)`),
    q("hard", S`\(\dfrac{\sin3x}{\sin x}-\dfrac{\cos3x}{\cos x}\) is a constant. Find it.`, num(2),
      "Combine the fractions.", [S`\(\frac{\sin3x\cos x-\cos3x\sin x}{\sin x\cos x}=\frac{\sin2x}{\frac12\sin2x}=2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why can't I move terms across?", "That assumes the identity is already true. Starting from what you want to prove can reach a true statement even from a false claim."],
      ["Where should I start?", "On the more complicated side: there is more to simplify."],
      ["What if I get stuck?", "Change everything to sine and cosine, combine fractions, or multiply by a conjugate such as 1 + sin x."],
      ["Is a graph a proof?", "No. A graph shows only a finite set of values at a limited accuracy."],
      ["How do I disprove a claim?", "Find one value where both sides are defined and unequal."],
    ],
    summary: [
      "Work on one side at a time.",
      "Use reciprocal, quotient, Pythagorean, compound and double angle identities.",
      "Common denominators and factoring do most of the work.",
      "One counterexample disproves a claim.",
    ],
    next: "4.7 reviews the whole chapter.",
  }),
];
