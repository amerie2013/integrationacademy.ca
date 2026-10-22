// 9.4 Laws of Logarithms — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "9.4 Laws of Logarithms";
export const Q = [
  num(S`Solve $\log_4(x+3)+\log_4(x-3)=2$.`, 5, "x² − 9 = 16; reject −5."),
  num(S`Solve $\log_2(x+5)-\log_2(x-2)=3$.`, 3, "x + 5 = 8x − 16."),
  num(S`Solve $2\log x-\log(x-2)=\log 9$. Give the larger solution.`, 6, "x² = 9x − 18 ⇒ x = 3 or 6.", planeDoc({ view: { xmin: 2, xmax: 9, ymin: 0, ymax: 1.5 }, curves: [{ f: (x) => 2 * Math.log10(x) - Math.log10(x - 2), a: 2.05, b: 9 }], lines: [{ m: 0, b: Math.log10(9), color: "amber", dash: true }], points: [P(3, Math.log10(9), "", "red"), P(6, Math.log10(9), "", "red")], step: { x: 1, y: 0.25 } })),
  num(S`Solve $(\log_3 x)^2-\log_3 x^4=-3$. Give the larger solution.`, 27, "u² − 4u + 3 = 0: u = 1 or 3; x = 3 or 27."),
  num(S`Solve $\log_x 8+\log_x 2=4$ ($x>0$).`, 2, "log_x 16 = 4 ⇒ x⁴ = 16."),
  num(S`Solve $\log_3 x=\log_9(4x+5)$.`, 5, "x² = 4x + 5 ⇒ x = 5 (reject −1)."),
  num(S`Solve $\log_2 x+\log_4 x=6$.`, 16, "log₂ x + ½ log₂ x = 6 ⇒ log₂ x = 4."),
  mc(S`Given $\log_a 5=p$, express $\log_{25}a$ in terms of $p$.`, S`$\dfrac{1}{2p}$`, [S`$2p$`, S`$\dfrac p2$`, S`$\dfrac2p$`], "log₂₅ a = 1/log_a 25 = 1/(2p)."),
  mc(S`If $\log 2=a$ and $\log 3=b$, then $\log 1.5$ is:`, S`$b-a$`, [S`$a-b$`, S`$\frac ba$`, S`$b+a-1$`], "1.5 = 3/2."),
  mc(S`If $\log 2=a$ and $\log 3=b$, then $\log 0.6$ is:`, S`$a+b-1$`, [S`$ab-1$`, S`$a+b$`, S`$\frac{ab}{10}$`], "0.6 = 6/10."),
  num(S`Evaluate $\log_2 5\cdot\log_5 7\cdot\log_7 64$.`, 6, "Telescopes to log₂ 64."),
  num(S`Evaluate $\dfrac{1}{\log_2 6}+\dfrac{1}{\log_3 6}$.`, 1, "1/log_a b = log_b a: log₆ 2 + log₆ 3 = log₆ 6 = 1."),
  ms(S`Which equal $\log_b\sqrt[3]{b^2}$? Select all.`, [S`$\frac23$`, S`$\log_b b^{2/3}$`, S`$\frac{2}{3}\log_b b$`, S`$\frac32$`], [0, 1, 2], "Power law."),
  tf(S`If $\log_a x=2$ and $\log_a y=5$, then $\log_a(x^3y)=11$.`, true, "3(2) + 5."),
  tf(S`The equation $\log(x-4)+\log(x+1)=\log 6$ has two valid solutions.`, false, "(x − 4)(x + 1) = 6 ⇒ x = 5 or −2; −2 is invalid."),
  mc("The graph shows y = ln x + ln(x − 3) and y = ln 10. Where do they meet?", "x = 5", ["x = 2", "x = −2 and x = 5", "x = 10"], "x² − 3x − 10 = 0; reject −2.", planeDoc({ view: { xmin: 2, xmax: 9, ymin: -2, ymax: 5 }, curves: [{ f: (x) => Math.log(x) + Math.log(x - 3), a: 3.02, b: 9 }], lines: [{ m: 0, b: Math.log(10), color: "amber", dash: true }], vlines: [{ x: 3, color: "red", dash: true }], points: [P(5, Math.log(10), "", "red")], step: { x: 1, y: 1 } })),
  mc("The graph shows y = log₃(9x) and y = log₃ x. The first is the second:", "shifted up 2", ["stretched by 9", "shifted left 9", "shifted up 9"], "log₃ 9x = 2 + log₃ x.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 5 }, curves: [{ f: (x) => Math.log(x) / Math.log(3), a: 0.01, b: 10 }, { f: (x) => Math.log(9 * x) / Math.log(3), a: 0.003, b: 10, color: "amber" }], points: [P(1, 0, "", "blue"), P(1, 2, "", "amber")], step: { x: 1, y: 1 } })),
  num(S`Solve $\log_5(x^2+x)=\log_5(x+4)$ for $x>0$.`, 2, "x² + x = x + 4 ⇒ x² = 4."),
  num(S`Find $x$ if $\log_2 x=\log_2 3+2\log_2 5-\log_2 15$.`, 5, "x = 3 · 25/15."),
  mc("The graph shows y = 2 log x (violet) and y = log(x + 6) (amber). They meet at:", "x = 3", ["x = −2", "x = 2", "x = 6"], "x² = x + 6; x > 0.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: -1, ymax: 2 }, curves: [{ f: (x) => 2 * Math.log10(x), a: 0.1, b: 8 }, { f: (x) => Math.log10(x + 6), a: 0, b: 8, color: "amber" }], points: [P(3, Math.log10(9), "", "red")], step: { x: 1, y: 0.5 } })),
];
