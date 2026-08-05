import { DIAG } from "../bank-ftce/u15-data.mjs";
const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "15.1",
  title: "Diagnostic Test (40 Questions)",
  intro: "A half-length diagnostic spanning all nine mathematics competencies. Take it under timed conditions (about 75 minutes), then use your results to target the units that need review. The on-screen version in Practice is multiple-choice and auto-scored.",
  lesson: [
    ["Test format", R`The real FTCE Mathematics 6–12 is about $80$ multiple-choice questions in $2$ hours $30$ minutes; you must answer roughly $66\%$ correctly to pass. This diagnostic is <b>half length</b>: $40$ questions in about $75$ minutes.`],
    ["How to use it", R`Work under real conditions — no notes, one sitting, a scientific calculator only. Mark every answer (there is no penalty for guessing), then check the key and note which competencies to review.`],
    ["Strategy", R`Read all four options before choosing, use process of elimination, and pace yourself (about $2$ minutes per item). Flag hard questions and return to them.`],
  ],
  examples: [
    ["Worked Example — Algebra", R`Solve $x^2-5x+6=0$.`, R`Factor: $(x-2)(x-3)=0$, so $x=2$ or $x=3$.`],
    ["Worked Example — Geometry", R`Find the distance between $(0,0)$ and $(5,12)$.`, R`$\sqrt{5^2+12^2}=\sqrt{169}=13$.`],
    ["Worked Example — Trigonometry", R`Convert $60^\circ$ to radians.`, R`$60\cdot\dfrac{\pi}{180}=\dfrac{\pi}{3}$.`],
    ["Worked Example — Calculus", R`Evaluate $\lim_{x\to2}\dfrac{x^2-4}{x-2}$.`, R`$\dfrac{(x-2)(x+2)}{x-2}=x+2\to 4$.`],
    ["Worked Example — Probability", R`Evaluate $C(5,2)$.`, R`$\dfrac{5!}{2!\,3!}=10$.`],
  ],
  questions: DIAG.map((q, i) => [`Question ${i + 1}`, q[1], q[2]]),
};
