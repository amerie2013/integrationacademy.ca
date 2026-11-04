// MHF4U 4.7 — Chapter 4 Review (NEW lesson): radians, special angles, equivalent expressions, compound and double
// angle formulas, and identities
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { UC, ARM, SECTOR, TG } from "./trigfig.mjs";

export const TITLE = "4.7 Chapter 4 Review";
export const ID = "6d4f0004-0001-4001-8001-000000000407";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 4 Review — Trigonometry",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, multi-step examples that combine several skills, mixed practice, a readiness checklist and a hard level. Try each example before opening its solution.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "convert angles and solve arc length problems;",
      "evaluate ratios exactly at special angles;",
      "apply equivalent expressions, compound angle and double angle formulas;",
      "prove identities and disprove false claims.",
    ],
    curriculum: "B1.1–B1.4, B3.1–B3.3 (whole chapter)",
    prior: [
      [S`\(135^\circ\) in radians?`, S`\(\frac{3\pi}4\).`],
      [S`\(\sin\left(\frac\pi2-x\right)\)?`, S`\(\cos x\).`],
      [S`\(\cos2x\) in terms of \(\sin x\)?`, S`\(1-2\sin^2x\).`],
    ],
    words: [
      ["Radian", "arc length ÷ radius", ""],
      ["Reference angle", "acute angle to the x-axis", ""],
      ["Cofunction", "pairs through π/2 − x", ""],
      ["Identity", "true at every allowed value", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["4.1 Radians", "π rad = 180°; s = rθ", "\\(120^\\circ=\\frac{2\\pi}3\\)", "θ must be in radians"],
    ["4.2 Special angles", "quadrant, reference angle, CAST", "\\(\\cos\\frac{2\\pi}3=-\\frac12\\)", "csc pairs with sin"],
    ["4.3 Equivalent expressions", "symmetry of the circle", "\\(\\cos(\\pi-x)=-\\cos x\\)", "only π/2 and 3π/2 swap names"],
    ["4.4 Compound angles", "sin keeps the sign; cos flips it", "\\(\\cos\\frac\\pi{12}=\\frac{\\sqrt6+\\sqrt2}4\\)", "sine does not distribute"],
    ["4.5 Double angles", "three forms of cos 2x", "\\(\\sin2x=2\\sin x\\cos x\\)", "sin 2x ≠ 2 sin x"],
    ["4.6 Identities", "one side at a time", "\\(1+\\tan^2x=\\sec^2x\\)", "don't move across ="],
  ])),

  section("📌 Explore", S`<p>Use the identity checker to test the double angle formulas, and to see that both sides of a true identity draw the same curve.</p>`),

  widget("ibIdentity", { init: [3, 50] }),

  section("📌 The big picture", keyIdea(S`Everything in this chapter is the geometry of one circle. Radians measure along it, ratios read its coordinates, equivalent expressions come from its symmetry, and the compound angle formulas come from distances on it.`)),

  examples([
    ["A sector problem", S`A sector of a circle of radius 9 cm has arc length \(6\pi\) cm. Find the angle in radians and degrees, and the area.`,
      [S`\(\theta=\frac sr=\frac{6\pi}9=\frac{2\pi}3\), which is \(120^\circ\).`, S`\(A=\frac12r^2\theta=\frac12(81)\frac{2\pi}3=27\pi\).`],
      S`\(\frac{2\pi}3\), \(120^\circ\), \(27\pi\) cm²`,
      plane(SECTOR(9, (2 * Math.PI) / 3))],
    ["Exact evaluation", S`Evaluate \(\sec\dfrac{4\pi}3+\tan\dfrac{3\pi}4\).`,
      [S`\(\cos\frac{4\pi}3=-\frac12\Rightarrow\sec\frac{4\pi}3=-2\).`, S`\(\tan\frac{3\pi}4=-1\). The sum is \(-3\).`],
      S`\(-3\)`,
      plane(UC(240, "4π/3"))],
    ["Compound angle with given ratios", S`\(\sin a=\dfrac{12}{13}\) in Q2 and \(\cos b=\dfrac45\) in Q4. Find \(\cos(a+b)\).`,
      [S`\(\cos a=-\frac5{13}\); \(\sin b=-\frac35\).`, S`\(\cos a\cos b-\sin a\sin b=-\frac{20}{65}+\frac{36}{65}\).`],
      S`\(\dfrac{16}{65}\)`,
      plane(ARM(-5, 12, "a: (−5, 12)"))],
    ["Double angle", S`\(\cos x=-\dfrac7{25}\) in Q3. Find \(\sin2x\) and \(\cos2x\).`,
      [S`\(\sin x=-\frac{24}{25}\).`, S`\(\sin2x=2\left(-\frac{24}{25}\right)\left(-\frac7{25}\right)=\frac{336}{625}\).`, S`\(\cos2x=2\cdot\frac{49}{625}-1=-\frac{527}{625}\).`],
      S`\(\frac{336}{625},\ -\frac{527}{625}\)`],
    ["An identity", S`Prove \(\dfrac{\sin2x}{\sin x}-\dfrac{\cos2x}{\cos x}=\sec x\).`,
      [S`\(\text{LS}=2\cos x-\dfrac{2\cos^2x-1}{\cos x}\).`, S`\(=\dfrac{2\cos^2x-2\cos^2x+1}{\cos x}=\dfrac1{\cos x}=\text{RS}\).`],
      S`\(\text{LS}=\text{RS}\)`,
      plane(TG([[(x) => 1 / Math.cos(x), "violet"]], { xmin: -1.4, xmax: 1.4, ymin: -1, ymax: 6 }))],
  ]),

  practice([
    q("radians", S`A wheel of radius 0.4 m turns through \(5\pi\) rad. How far, in metres, does a point on the rim travel (2 decimals)?`, num(6.28, 0.01),
      "s = rθ.", [S`\(0.4\times5\pi=2\pi\).`], S`\(6.28\)`),
    q("special", S`Evaluate \(\sin\dfrac{7\pi}6\cos\dfrac{5\pi}3\).`, num(-0.25, 0.001),
      "Find each value.", [S`\(-\frac12\cdot\frac12\).`], S`\(-0.25\)`),
    q("equivalent", S`Which equals \(\sin\left(\dfrac\pi2+x\right)\)?`, choice([S`\(\cos x\)`, S`\(-\cos x\)`, S`\(\sin x\)`, S`\(-\sin x\)`], 0),
      "Quarter-turn.", [S`\(\cos x\).`], S`\(\cos x\)`),
    q("compound", S`Evaluate \(\cos\dfrac{3\pi}8\cos\dfrac\pi8+\sin\dfrac{3\pi}8\sin\dfrac\pi8\) (4 decimals).`, num(0.7071, 0.001),
      "cos(a − b).", [S`\(\cos\frac\pi4\).`], S`\(0.7071\)`),
    q("double", S`\(\sin x=0.8\). Find \(\cos2x\).`, num(-0.28, 0.001),
      "1 − 2sin²x.", [S`\(1-1.28\).`], S`\(-0.28\)`),
  ]),

  ...hard([
    ["A multi-step ratio", S`\(\tan x=-\dfrac34\) with \(\dfrac{3\pi}2\lt x\lt2\pi\). Find \(\sin\left(x+\dfrac\pi6\right)\) exactly.`,
      [S`Q4: \(\sin x=-\frac35\), \(\cos x=\frac45\).`, S`\(\sin x\cos\frac\pi6+\cos x\sin\frac\pi6=-\frac35\cdot\frac{\sqrt3}2+\frac45\cdot\frac12\).`],
      S`\(\dfrac{4-3\sqrt3}{10}\)`,
      plane(ARM(4, -3, "(4, −3)"))],
    ["A longer identity", S`Prove \(\dfrac{1+\sin2x+\cos2x}{1+\sin2x-\cos2x}=\cot x\).`,
      [S`Numerator: \(1+\cos2x+\sin2x=2\cos^2x+2\sin x\cos x=2\cos x(\cos x+\sin x)\).`, S`Denominator: \(1-\cos2x+\sin2x=2\sin^2x+2\sin x\cos x=2\sin x(\sin x+\cos x)\).`, S`The quotient is \(\frac{\cos x}{\sin x}=\cot x=\text{RS}\).`],
      S`\(\text{LS}=\text{RS}\)`],
  ], [
    q("hard", S`\(\sin x+\cos x=\dfrac43\). Find \(\sin2x\) (4 decimals).`, num(0.7778, 0.001),
      "Square both sides.", [S`\(1+\sin2x=\frac{16}9\), so \(\sin2x=\frac79\).`], S`\(0.7778\)`),
    q("hard", S`Two pulleys share a belt. Radii 6 cm and 18 cm. The large one makes 2 turns. How many radians does the small one turn (2 decimals)?`, num(37.7, 0.01),
      "Equal arc lengths.", [S`\(18\times4\pi=6\theta\), so \(\theta=12\pi\approx37.70\).`], S`\(37.70\)`),
    q("hard", S`Evaluate \(\sin\dfrac\pi{12}\cos\dfrac\pi{12}\).`, num(0.25, 0.001),
      "Half of sin 2x.", [S`\(\frac12\sin\frac\pi6=\frac14\).`], S`\(0.25\)`),
  ]),

  section("✅ Ready for the test?", S`<ul>
    <li>I can convert between degrees and radians, and use \(s=r\theta\).</li>
    <li>I can give exact ratios at special angles in any quadrant, including csc, sec and cot.</li>
    <li>I can write equivalent expressions using \(\frac\pi2-x\), \(\pi\pm x\), \(2\pi-x\) and \(-x\).</li>
    <li>I can use the compound and double angle formulas, with correct quadrant signs.</li>
    <li>I can prove identities one side at a time, and disprove claims with a counterexample.</li>
  </ul>`),

  wrapUp({
    qas: [
      ["What should I memorize?", "The special values, the Pythagorean identity, and the sum formulas. The rest can be derived quickly."],
      ["What is the most common error?", "Quadrant signs when finding a missing ratio, and treating sine as if it distributes."],
      ["How do I check an identity quickly?", "Substitute a non-special value such as x = 1 into both sides."],
      ["Should I give decimals?", "Use exact values unless the question asks for decimals."],
      ["What comes next?", "Graphs of the trigonometric functions, in radians, in chapter 5."],
    ],
    summary: [
      "π rad = 180°; s = rθ.",
      "Quadrant + reference angle + CAST.",
      "Compound angle and double angle formulas give new exact values.",
      "Prove one side at a time.",
    ],
    next: "Chapter 5 graphs the trigonometric functions and solves trigonometric equations.",
  }),
];
