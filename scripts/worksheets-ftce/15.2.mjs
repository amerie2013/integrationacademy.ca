import { FULL } from "../bank-ftce/u15-data.mjs";
const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "15.2",
  title: "Full-Length Practice Test (80 Questions)",
  intro: "A full-length practice exam mirroring the real FTCE Mathematics 6–12 in length and coverage. Take it under timed conditions (2 hours 30 minutes), then review every explanation. The on-screen version in Practice is multiple-choice and auto-scored.",
  lesson: [
    ["Test format", R`$80$ multiple-choice questions in $2$ hours $30$ minutes ($150$ minutes). Passing is roughly $66\%$ — about $53$ correct. The exam is graded pass/fail.`],
    ["How to use it", R`Simulate test day: one uninterrupted sitting, a scientific calculator only, and no notes. Answer every question — guessing beats leaving a blank.`],
    ["Strategy & review", R`Budget under $2$ minutes per item and flag the hard ones for a second pass. Afterward, review each missed item, identify the competency, and return to that unit's lessons and worksheets.`],
  ],
  examples: [
    ["Worked Example — Algebra", R`Solve $x^2+4x-1=0$.`, R`$x=\dfrac{-4\pm\sqrt{16+4}}{2}=\dfrac{-4\pm2\sqrt5}{2}=-2\pm\sqrt5$.`],
    ["Worked Example — Functions", R`Find $(f\circ g)(x)$ for $f(x)=x^2$, $g(x)=x+3$.`, R`$f(g(x))=(x+3)^2$.`],
    ["Worked Example — Trigonometry", R`If $\sin A=\tfrac35$ and $\cos A=\tfrac45$, find $\sin 2A$.`, R`$2\sin A\cos A=2\cdot\tfrac35\cdot\tfrac45=\tfrac{24}{25}$.`],
    ["Worked Example — Calculus", R`Evaluate $\displaystyle\int_1^3 2x\,dx$.`, R`$\left[x^2\right]_1^3=9-1=8$.`],
    ["Worked Example — Number Sense", R`Multiply $(3+i)(2+i)$.`, R`$6+3i+2i+i^2=6+5i-1=5+5i$.`],
  ],
  questions: FULL.map((q, i) => [`Question ${i + 1}`, q[1], q[2]]),
};
