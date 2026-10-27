// MHF4U Worksheet 6.2 — Logarithms & the Laws of Logarithms (teacher edition)
import { F, pt } from "./figT.mjs";

const lg = (b) => (x) => Math.log(x) / Math.log(b);

const EXAMPLES = [
  { title: "A fractional logarithm", q: String.raw`Evaluate $\log_{27}9$.`,
    steps: [String.raw`Let $y=\log_{27}9$, so $27^y=9$.`, String.raw`Write both sides as powers of 3: $3^{3y}=3^2$.`, String.raw`Equate exponents: $3y=2$, so $y=\tfrac23$. Check: $27^{2/3}=\left(\sqrt[3]{27}\right)^2=9$ ✓.`], ans: String.raw`$\log_{27}9=\tfrac23$` },
  { title: "A fractional base", q: String.raw`Evaluate $\log_{1/2}\left(8\sqrt2\right)$.`,
    steps: [String.raw`$8\sqrt2=2^3\cdot2^{1/2}=2^{7/2}$ and $\left(\tfrac12\right)^y=2^{-y}$.`, String.raw`So $2^{-y}=2^{7/2}$, giving $-y=\tfrac72$.`], ans: String.raw`$\log_{1/2}(8\sqrt2)=-\tfrac72$` },
  { title: "Find the base", q: String.raw`Solve $\log_x 64=\tfrac32$ and check the answer on the graph of $y=\log_x t$.`,
    fig: F({ view: { xmin: -5, xmax: 72, ymin: -1, ymax: 2.5 }, curves: [{ f: lg(16), a: 0.05, color: "violet" }], points: [pt(16, 1, null, "violet"), pt(64, 1.5, null, "amber")], step: { x: 10, y: 0.5 } }),
    steps: [String.raw`Exponential form: $x^{3/2}=64$.`, String.raw`Raise both sides to the power $\tfrac23$: $x=64^{2/3}=\left(\sqrt[3]{64}\right)^2=16$.`, String.raw`The base must be positive and not 1, so $x=16$ is valid; $(64,1.5)$ lies on $y=\log_{16}t$.`], ans: String.raw`$x=16$` },
  { title: "Three laws at once", q: String.raw`Evaluate $\log_3 54+\log_3 6-\log_3 4$.`,
    steps: [String.raw`Product law, then quotient law: $\log_3\dfrac{54\cdot6}{4}$.`, String.raw`$\dfrac{324}{4}=81=3^4$, so the value is $\log_3 3^4=4$.`], ans: String.raw`$4$` },
  { title: "Expand fully", q: String.raw`Expand $\log\dfrac{x^3\sqrt y}{z^2}$ into sums and differences of $\log x$, $\log y$, $\log z$.`,
    steps: [String.raw`Quotient law: $\log\left(x^3\sqrt y\right)-\log z^2$.`, String.raw`Product law: $\log x^3+\log y^{1/2}-\log z^2$.`, String.raw`Power law on each term: $3\log x+\tfrac12\log y-2\log z$.`], ans: String.raw`$3\log x+\tfrac12\log y-2\log z$` },
  { title: "Condense to one logarithm", q: String.raw`Write $2\log_5x-\tfrac12\log_5y+3\log_5z$ as a single logarithm.`,
    steps: [String.raw`Power law backwards: $\log_5x^2-\log_5\sqrt y+\log_5z^3$.`, String.raw`Positive terms go in the numerator, negative in the denominator.`], ans: String.raw`$\log_5\dfrac{x^2z^3}{\sqrt y}$` },
  { title: "Logs in terms of p and q", q: String.raw`If $\log_b2=p$ and $\log_b3=q$, write $\log_b72$ and $\log_b4.5$ in terms of $p$ and $q$.`,
    steps: [String.raw`Factor into 2s and 3s: $72=2^3\cdot3^2$ and $4.5=\tfrac92=\tfrac{3^2}{2}$.`, String.raw`$\log_b72=3\log_b2+2\log_b3=3p+2q$.`, String.raw`$\log_b4.5=2\log_b3-\log_b2=2q-p$.`], ans: String.raw`$3p+2q$ and $2q-p$` },
  { title: "Change of base", q: String.raw`Evaluate $\log_3 50$ to 3 decimal places and check that it is reasonable.`,
    fig: F({ view: { xmin: -3, xmax: 60, ymin: -1, ymax: 4.5 }, curves: [{ f: lg(3), a: 0.02, color: "violet" }], vlines: [{ x: 50, color: "green", dash: true }], points: [pt(27, 3, null, "violet"), pt(50, 3.56, null, "amber")], step: { x: 10, y: 1 } }),
    steps: [String.raw`$\log_350=\dfrac{\log50}{\log3}=\dfrac{1.69897}{0.47712}$.`, String.raw`$\approx3.561$. Since $3^3=27<50<81=3^4$, the answer must lie between 3 and 4 ✓.`], ans: String.raw`$\log_350\approx3.561$` },
  { title: "Inverse properties", q: String.raw`Evaluate (a) $\log_2\left(\log_3 81\right)$ (b) $5^{2\log_5 3}$ (c) $2^{\log_2 7+\log_2 3}$.`,
    steps: [String.raw`(a) Work inside out: $\log_381=4$, then $\log_24=2$.`, String.raw`(b) $2\log_53=\log_59$, and $5^{\log_59}=9$.`, String.raw`(c) $\log_27+\log_23=\log_221$, and $2^{\log_221}=21$.`], ans: String.raw`(a) 2 (b) 9 (c) 21` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate exactly: (a) $\log_4 32$ (b) $\log_{1/3}27$ (c) $\log_{25}\dfrac1{125}$`, ans: String.raw`(a) $\tfrac52$ (b) $-3$ (c) $-\tfrac32$` },
  { level: 1, q: String.raw`Rewrite in the other form: (a) $8^{-2/3}=\tfrac14$ (b) $\log_{\sqrt2}16=8$ (c) $\log_b a=c$`, ans: String.raw`(a) $\log_8\tfrac14=-\tfrac23$ (b) $(\sqrt2)^8=16$ (c) $b^c=a$` },
  { level: 1, q: String.raw`Use the laws to evaluate: (a) $\log_6 9+\log_6 4$ (b) $\log_2 80-\log_2 5$ (c) $\log_5\sqrt{125}$`, ans: String.raw`(a) $2$ (b) $4$ (c) $\tfrac32$` },
  { level: 2, q: String.raw`Expand fully: $\log_3\dfrac{9x^4}{y\sqrt z}$. Simplify any numerical logarithm.`, ans: String.raw`$2+4\log_3x-\log_3y-\tfrac12\log_3z$` },
  { level: 2, q: String.raw`Write as a single logarithm and simplify: $\tfrac12\log_a x+3\log_a y-2\log_a(xy)$.`, ans: String.raw`$\log_a\dfrac{y}{x^{3/2}}=\log_a\dfrac{y}{x\sqrt x}$` },
  { level: 2, q: String.raw`If $\log_b2=m$ and $\log_b5=n$, write in terms of $m$ and $n$: (a) $\log_b40$ (b) $\log_b0.08$ (c) $\log_b\sqrt{10b}$`, ans: String.raw`(a) $3m+n$ (b) $m-2n$ (c) $\tfrac12(m+n+1)$` },
  { level: 2, q: String.raw`Evaluate exactly: $\log_2\sqrt{32}+\log_3\dfrac1{\sqrt{27}}+\log_{1/4}8$.`, ans: String.raw`$\tfrac52-\tfrac32-\tfrac32=-\tfrac12$` },
  { level: 2, space: 4, q: String.raw`The graph of $y=\log_b x$ passes through $(9,2)$. (a) Find $b$. (b) Find the exact $x$ where $y=2.5$. (c) Use change of base to find $y$ when $x=20$, to 3 decimals.`, ans: String.raw`(a) $b=3$ (b) $x=3^{5/2}=9\sqrt3\approx15.59$ (c) $\tfrac{\log20}{\log3}\approx2.727$`,
    fig: F({ view: { xmin: -2, xmax: 25, ymin: -2, ymax: 3.5 }, curves: [{ f: lg(3), a: 0.02, color: "violet" }], points: [pt(9, 2, null, "amber"), pt(1, 0, null, "violet")], step: { x: 5, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`Solve, and check each answer is allowed: (a) $\log_x 8=-\tfrac32$ (b) $\log_4\left(\log_3x\right)=\tfrac12$ (c) $\log_2\left(x^2-x\right)=1$`, ans: String.raw`(a) $x=\tfrac14$ (b) $\log_3x=2$, $x=9$ (c) $x^2-x-2=0$, $x=2$ or $x=-1$ (both give $x^2-x=2>0$)` },
  { level: 3, space: 5, q: String.raw`Each statement is false. Show it with numbers, then correct it.
(a) $\log(A+B)=\log A+\log B$ (try $A=2$, $B=8$)
(b) $\dfrac{\log_2 32}{\log_2 4}=\log_2 8$`, ans: String.raw`(a) $\log10=1$ but $\log2+\log8=\log16\approx1.204$; correct: $\log(AB)=\log A+\log B$ (b) left side $=\tfrac52$, not 3; by change of base it equals $\log_4 32$` },
  { level: 3, space: 5, q: String.raw`(a) Use change of base to prove $\log_a b\cdot\log_b c=\log_a c$.
(b) Hence evaluate $\log_2 3\cdot\log_3 4\cdot\log_4 5\cdots\log_{31}32$.`, ans: String.raw`(a) $\tfrac{\log b}{\log a}\cdot\tfrac{\log c}{\log b}=\tfrac{\log c}{\log a}$ (b) the product telescopes to $\log_2 32=5$` },
  { level: 3, space: 4, q: String.raw`Evaluate exactly, showing the law used at each step: (a) $3^{2\log_3 5-\log_3 2}$ (b) $100^{\log 6}$ (c) $\log_2\left(\log_4 256\right)$`, ans: String.raw`(a) $\tfrac{25}{2}$ (b) $36$ (c) $2$` },
  { level: 3, space: 5, q: String.raw`The graphs of $y=\log_2x$ and $y=\log_2(8x)$ are shown.
(a) Use a law of logarithms to explain why the second graph is the first shifted up 3 units. Find its x-intercept.
(b) Are $y=\log_2\left(x^2\right)$ and $y=2\log_2x$ the same function? Compare their domains and sketch both.`, ans: String.raw`(a) $\log_2(8x)=3+\log_2x$; x-intercept $\tfrac18$ (b) no: $\log_2(x^2)$ has domain $x\ne0$ and is symmetric in the y-axis; $2\log_2x$ needs $x>0$; they agree only for $x>0$`,
    fig: F({ view: { xmin: -1, xmax: 8, ymin: -4, ymax: 7 }, curves: [{ f: lg(2), a: 0.01, color: "blue" }, { f: (x) => lg(2)(8 * x), a: 0.002, color: "violet" }], points: [pt(1, 0, null, "blue"), pt(1, 3, null, "violet")], step: { x: 1, y: 1 } }) },
];

export const WS = {
  code: "6.2",
  title: "Logarithms & the Laws of Logarithms",
  bigideas: String.raw`A logarithm is an exponent: $\log_b x=y$ means $b^y=x$ ($b>0$, $b\ne1$, $x>0$). Because logarithms are exponents, the exponent laws become the laws of logarithms: product $\log_b(xy)=\log_bx+\log_by$, quotient $\log_b\tfrac xy=\log_bx-\log_by$, power $\log_b x^n=n\log_bx$. Change of base, $\log_bx=\tfrac{\log x}{\log b}$, evaluates any logarithm on a calculator, and $b^{\log_bx}=x$, $\log_b b^x=x$ undo each other.`,
  goals: ["Evaluate logarithms with fractional and negative answers and unusual bases.", "Expand and condense expressions with the product, quotient and power laws.", "Use change of base and the inverse properties to evaluate and simplify.", "Solve simple logarithmic equations and test which answers are allowed."],
  curriculum: "A1.1, A1.2, A1.3",
  vocab: [["Logarithm", "$\\log_bx$: the exponent on $b$ that gives $x$"], ["Common logarithm", "$\\log x$ means $\\log_{10}x$"], ["Change of base", "$\\log_bx=\\dfrac{\\log x}{\\log b}$"]],
  hook: String.raw`Without a calculator: is $\log_2 3\cdot\log_3 4\cdot\log_4 5\cdots\log_{31}32$ closer to 5, 30 or 1000? Take a vote, then come back to it at the end of the lesson (Problem 11).`,
  concepts: [
    ["1. A logarithm is an exponent", String.raw`To evaluate $\log_b x$, write $b^y=x$ with both sides as powers of a common base. Answers can be fractions or negative: $\log_2\tfrac14=-2$, $\log_8 2=\tfrac13$.
${F({ view: { xmin: -1, xmax: 9, ymin: -3, ymax: 4 }, curves: [{ f: lg(2), a: 0.01, color: "violet" }], points: [pt(0.25, -2, null, "violet"), pt(1, 0, null, "violet"), pt(2, 1, null, "violet"), pt(8, 3, null, "violet")], step: { x: 1, y: 1 } })}`],
    ["2. The laws come from exponent laws", String.raw`If $x=b^m$ and $y=b^n$, then $xy=b^{m+n}$, so $\log_b(xy)=m+n=\log_bx+\log_by$. In the same way $\tfrac xy=b^{m-n}$ and $x^k=b^{km}$ give the quotient and power laws. Expanding uses them left to right; condensing uses them right to left.`],
    ["3. Change of base and inverse properties", String.raw`$\log_b x=\dfrac{\log x}{\log b}$ for any base. Bracket the answer between whole-number powers to check it. Since $b^x$ and $\log_bx$ are inverses, $b^{\log_bx}=x$ and $\log_bb^x=x$.`],
  ],
  tips: [String.raw`$\log(x+y)$ is NOT $\log x+\log y$; there is no law for a sum inside a logarithm.`, String.raw`$\dfrac{\log x}{\log y}$ is NOT $\log\dfrac xy$; it is the change-of-base form of $\log_y x$.`, String.raw`Apply the power law only to the factor that carries the power: $\log(3x^2)=\log3+2\log x$.`, "The base must be positive and not 1, and the argument must be positive: test every answer.", "Check a change-of-base answer by bracketing it between whole-number powers."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
