// AP Calculus AB worksheets — Unit 1 (Limits and Continuity).
// Original problems throughout, different from those in the lessons and the
// question bank. Written in LaTeX; build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 1: Limits and Continuity";
const L = (to, v = "x") => `\\displaystyle\\lim_{${v}\\to ${to}}`;
// a small table of values: tab("t", [..], "V(t)", [..])
const tab = (a, xs, b, ys) => r`\begin{center}\renewcommand{\arraystretch}{1.25}\begin{tabular}{|c|${"c|".repeat(xs.length)}}\hline $${a}$ & ${xs.map((x) => `$${x}$`).join(" & ")} \\ \hline $${b}$ & ${ys.map((y) => `$${y}$`).join(" & ")} \\ \hline\end{tabular}\end{center}`;

// The graph used throughout worksheet 1.2:
//   x+4 on [−4,−1), p(−1)=1, 4−x² on (−1,2], x−1 on (2,5].
const GRAPH_P = r`\begin{apgraph}{-5}{6}{-1.5}{5.5}
\addplot[domain=-4:-1]{x+4};
\addplot[domain=-1:2]{4-x^2};
\addplot[domain=2:5]{x-1};
\closeddot{-4}{0}\closeddot{-1}{1}\closeddot{2}{0}\closeddot{5}{4}
\opendot{-1}{3}\opendot{2}{1}
\node[font=\small, color=ink] at (axis cs:4.1,2.1) {$y=p(x)$};
\end{apgraph}`;

const sheets = [
  // ───────────── 1.1 ─────────────
  {
    code: "1.1", title: "The Instant Problem: From Average Rates to Limits", unit: UNIT,
    ideas: [
      r`The \textbf{average rate of change} of $f$ on $[a,b]$ is $\dfrac{f(b)-f(a)}{b-a}$, with units of $f$ per unit of $x$.`,
      r`An \textbf{instantaneous} rate is the limit of average rates as the interval shrinks to a point.`,
      r`$${L("c")}f(x)$ describes the values of $f$ \emph{near} $c$. The value $f(c)$ plays no part.`,
      r`A two-sided limit exists exactly when the left-hand and right-hand limits exist and are equal.`,
    ],
    examples: [
      { t: "Average rate from a formula", q: r`Find the average rate of change of $f(x)=x^2-5x$ on $[2,6]$.`, s: r`$f(6)=6$ and $f(2)=-6$, so $\dfrac{6-(-6)}{6-2}=\dfrac{12}{4}$.`, r: r`The average rate of change is $3$.` },
      { t: "Shrinking the interval", q: r`For $s(t)=2t^2+t$, simplify the average rate of change on $[3,3+h]$, $h\neq0$, and find what it approaches as $h\to0$.`, s: r`$\dfrac{2(3+h)^2+(3+h)-21}{h}=\dfrac{13h+2h^2}{h}=13+2h$.`, r: r`As $h\to0$ the average rates approach $13$.` },
      { t: "Interpreting in context", q: r`The depth of water in a pool, $D(t)$ cm, is measured at times $t$ minutes.` + tab("t", [0, 4, 10, 15], "D(t)", [60, 52, 34, 29]) + r`Find the average rate of change of $D$ on $[4,10]$ and interpret it.`, s: r`$\dfrac{D(10)-D(4)}{10-4}=\dfrac{34-52}{6}=-3$.`, r: r`From $t=4$ to $t=10$ minutes, the depth of the water decreased at an average rate of 3 cm per minute.` },
    ],
    core: [
      r`Find the average rate of change of $f(x)=x^3$ on $[-1,2]$.`,
      r`Find the average rate of change of $f(x)=\dfrac1x$ on $[1,4]$.`,
      r`A function has $${L("3^-")}f(x)=5$, $${L("3^+")}f(x)=5$ and $f(3)=1$. State $${L("3")}f(x)$.`,
      r`A function has $${L("0^-")}g(x)=-2$ and $${L("0^+")}g(x)=2$. Does $${L("0")}g(x)$ exist? Explain.`,
    ],
    exam: [
      r`For $s(t)=t^2-3t$, simplify the average rate of change on $[2,2+h]$, $h\neq0$, and state the instantaneous rate of change at $t=2$.`,
      r`Let $g(x)=\dfrac{x^2-1}{x-1}$ for $x\neq1$ and $g(1)=7$. Find $${L("1")}g(x)$.`,
      r`Using the pool table in Example 3, find the average rate of change of $D$ on $[10,15]$ and interpret it with units.`,
      r`The average rate of change of $f$ on $[2,5]$ is $-4$, and $f(5)=1$. Find $f(2)$.`,
    ],
    fr: {
      intro: r`The volume of water in a tank, $V(t)$ litres, is recorded at selected times $t$ minutes.` + tab("t", [0, 3, 8, 12], "V(t)", [200, 170, 130, 122]),
      parts: [
        r`Find the average rate of change of $V$ on $[3,8]$. Indicate units of measure.`,
        r`Using correct units, interpret your answer to part (a) in context.`,
        r`On which of the intervals $[0,3]$, $[3,8]$, $[8,12]$ is the water draining fastest on average? Show the work that leads to your answer.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac{8-(-1)}{2-(-1)}=\dfrac93=3$.`,
        r`$\dfrac{\frac14-1}{4-1}=\dfrac{-\frac34}{3}=-\dfrac14$.`,
        r`$5$. The one-sided limits agree; the value $f(3)=1$ is irrelevant.`,
        r`No. The one-sided limits exist but are not equal.`,
      ],
      exam: [
        r`$\dfrac{(2+h)^2-3(2+h)-(-2)}{h}=\dfrac{h+h^2}{h}=1+h$, which approaches $1$.`,
        r`For $x\neq1$, $g(x)=x+1$, so the limit is $2$ (not $g(1)=7$).`,
        r`$\dfrac{29-34}{15-10}=-1$. From $t=10$ to $t=15$ minutes the depth decreased at an average rate of 1 cm per minute.`,
        r`$\dfrac{1-f(2)}{3}=-4$ gives $f(2)=13$.`,
      ],
      fr: [
        r`$\dfrac{V(8)-V(3)}{8-3}=\dfrac{130-170}{5}=-8$ litres per minute.`,
        r`From $t=3$ to $t=8$ minutes, the volume of water in the tank decreased at an average rate of 8 litres per minute.`,
        r`$[0,3]$: $\dfrac{170-200}{3}=-10$. $[3,8]$: $-8$. $[8,12]$: $\dfrac{122-130}{4}=-2$. The water drains fastest on $[0,3]$, at an average of 10 litres per minute.`,
      ],
    },
  },

  // ───────────── 1.2 ─────────────
  {
    code: "1.2", title: "Reading Limits off a Graph", unit: UNIT,
    ideas: [
      r`To read a limit, cover the point and follow the curve toward it from each side.`,
      r`A filled dot gives the \textbf{value} $f(c)$; it says nothing about the limit.`,
      r`A limit fails to exist at a jump, where the function is unbounded, or where it oscillates.`,
      r`For $${L("c")}f(g(x))$: find what $g(x)$ approaches \emph{and from which side}, then take that one-sided limit of $f$.`,
    ],
    pre: r`All questions on this page refer to the graph of $p$ below, defined on $[-4,5]$.` + "\n" + GRAPH_P,
    examples: [
      { t: "Limit and value at the same point", q: r`The graph of $p$ is shown on the next page. Find $${L("-1")}p(x)$ and $p(-1)$.`, s: r`From both sides the graph heads for the open circle at height 3. The filled dot at $x=-1$ is at height 1.`, r: r`$${L("-1")}p(x)=3$ and $p(-1)=1$.` },
      { t: "A jump", q: r`For the same function, find $${L("2^-")}p(x)$, $${L("2^+")}p(x)$ and $${L("2")}p(x)$.`, s: r`From the left the parabola comes down to the filled dot at height 0. From the right the line starts at the open circle at height 1.`, r: r`$${L("2^-")}p(x)=0$, $${L("2^+")}p(x)=1$, and $${L("2")}p(x)$ does not exist.` },
      { t: "A composition", q: r`For the same function, find $${L("2^-")}p\big(p(x)\big)$.`, s: r`As $x\to2^-$, $p(x)=4-x^2\to0$ through values \emph{greater} than 0. So we need $${L("0^+", "u")}p(u)=4$.`, r: r`$${L("2^-")}p\big(p(x)\big)=4$.` },
    ],
    core: [
      r`Find $${L("0")}p(x)$.`,
      r`Find $p(2)$.`,
      r`Find $${L("-1^+")}p(x)$.`,
      r`Find $${L("5^-")}p(x)$.`,
    ],
    exam: [
      r`Evaluate $${L("-1")}p(x)+p(2)$.`,
      r`Evaluate $${L("1")}\big[p(x)\big]^2$.`,
      r`For which value(s) of $a$ in $(-4,5)$ does $${L("a")}p(x)$ exist but differ from $p(a)$?`,
      r`At how many values of $x$ in $(-4,5)$ is $p$ discontinuous? List them.`,
    ],
    fr: {
      intro: r`Use the graph of $p$ on the previous page.`,
      parts: [
        r`Does $${L("2")}p(x)$ exist? Justify your answer.`,
        r`Find $${L("2^+")}p\big(p(x)\big)$. Show your reasoning.`,
        r`Does $${L("2")}p\big(p(x)\big)$ exist? Justify, using part (b) and Example 3.`,
      ],
    },
    space: { core: "1.2cm", exam: "1.8cm", fr: "2.2cm" },
    sol: {
      core: [r`$4$.`, r`$0$ (the filled dot).`, r`$3$.`, r`$4$.`],
      exam: [
        r`$3+0=3$.`,
        r`$p(x)\to3$ as $x\to1$, so the limit is $9$.`,
        r`$a=-1$ only: the limit is 3 but $p(-1)=1$. (At $x=2$ the limit does not exist.)`,
        r`Two: $x=-1$ (limit 3, value 1) and $x=2$ (a jump).`,
      ],
      fr: [
        r`No. $${L("2^-")}p(x)=0$ and $${L("2^+")}p(x)=1$. Since the one-sided limits are not equal, the limit does not exist.`,
        r`As $x\to2^+$, $p(x)=x-1\to1$ through values greater than 1. Near $u=1$ the graph is the parabola, which is continuous there, so the limit is $p(1)=4-1=3$.`,
        r`No. $${L("2^-")}p(p(x))=4$ (Example 3) and $${L("2^+")}p(p(x))=3$. They are not equal, so the limit does not exist.`,
      ],
    },
  },

  // ───────────── 1.3 ─────────────
  {
    code: "1.3", title: "Limits from Numerical Evidence", unit: UNIT,
    ideas: [
      r`Estimate $${L("c")}f(x)$ from a table by looking at inputs approaching $c$ from \textbf{both} sides.`,
      r`Read the \emph{trend} of the outputs, not the single entry nearest to $c$.`,
      r`A table is evidence, not proof: write \textquotedblleft{}the table suggests\ldots\textquotedblright{}.`,
      r`For trigonometric functions the calculator must be in \textbf{radian} mode.`,
    ],
    examples: [
      { t: "Estimating a limit", q: r`Selected values of $f$ are shown. Estimate $${L("4")}f(x)$.` + tab("x", ["3.9", "3.99", "4.01", "4.1"], "f(x)", ["1.9", "1.99", "2.01", "2.1"]), s: r`From the left the values rise toward 2; from the right they fall toward 2.`, r: r`The table suggests the limit is $2$.` },
      { t: "Sides that disagree", q: r`Selected values of $g$ are shown. What does the table suggest about $${L("1")}g(x)$?` + tab("x", ["0.9", "0.99", "1.01", "1.1"], "g(x)", ["-1.2", "-1.02", "3.03", "3.3"]), s: r`Left-hand values approach $-1$; right-hand values approach $3$.`, r: r`The table suggests that the two-sided limit does not exist.` },
      { t: "Building a table (calculator)", q: r`Estimate $${L("0")}\dfrac{e^{3x}-1}{x}$ to three decimal places.`, s: r`At $x=0.001$ the value is $3.0045$; at $x=-0.001$ it is $2.9955$. At $x=\pm0.0001$ the values are $3.00045$ and $2.99955$.`, r: r`The limit is approximately $3.000$.` },
    ],
    core: [
      r`A table gives $f(5.9)=11.8$, $f(5.99)=11.98$, $f(6.01)=12.02$, $f(6.1)=12.2$. Estimate $${L("6")}f(x)$.`,
      r`A table gives $h(1.9)=6.7$, $h(1.99)=6.97$, $h(2)=-4$, $h(2.01)=7.03$, $h(2.1)=7.3$. Estimate $${L("2")}h(x)$.`,
      r`A table gives values of $k$ only at $x=2.9,\ 2.99,\ 2.999$, which approach 8. What can and cannot be concluded?`,
      r`Which inputs would you choose to investigate $${L("-3")}f(x)$? Give six.`,
    ],
    exam: [
      r`(Calculator) Estimate $${L("0")}\dfrac{\sin(2x)}{\sin(5x)}$ to three decimal places.`,
      r`(Calculator) Estimate $${L("1")}\dfrac{x^5-1}{x-1}$.`,
      r`A student finds $\dfrac{\sin x}{x}\approx0.01745$ at $x=0.001$. What has gone wrong, and what is the correct value?`,
      r`A function $f$ is defined for all real numbers. A table shows $f(2.9)=5.8$, $f(2.99)=5.98$, $f(3.01)=6.02$ and $f(3.1)=6.2$. Must $${L("3")}f(x)=6$? Explain.`,
    ],
    fr: {
      intro: r`(Calculator) Let $h(x)=\dfrac{\sqrt{x+1}-1}{x}$ for $x\neq0$.`,
      parts: [
        r`Find $h(-0.1)$, $h(-0.01)$, $h(0.01)$ and $h(0.1)$ to four decimal places.`,
        r`Use your values to estimate $${L("0")}h(x)$.`,
        r`Explain why part (b) is not a proof, and confirm the limit algebraically.`,
      ],
    },
    sol: {
      core: [
        r`$12$.`,
        r`$7$. The entry $h(2)=-4$ is the function value, not the limit.`,
        r`The table suggests $${L("3^-")}k(x)=8$. It gives no information about the right-hand limit, so nothing can be said about the two-sided limit.`,
        r`For example $-3.1,\ -3.01,\ -3.001,\ -2.999,\ -2.99,\ -2.9$: three on each side, closing in.`,
      ],
      exam: [
        r`At $x=\pm0.01$ the value is $0.40014$; at $\pm0.001$ it is $0.4000014$. The limit is about $0.400$.`,
        r`At $x=1.001$: $5.0100$. At $x=0.999$: $4.9900$. The limit is about $5$.`,
        r`The calculator is in degree mode ($0.01745\approx\tfrac{\pi}{180}$). In radian mode the value is $0.9999998$, close to 1.`,
        r`No. Four values suggest the limit is 6 but cannot force it; $f$ is unrestricted at inputs closer to 3 than those listed.`,
      ],
      fr: [
        r`$h(-0.1)=0.5132$, $h(-0.01)=0.5013$, $h(0.01)=0.4988$, $h(0.1)=0.4881$.`,
        r`From both sides the values approach $0.5$.`,
        r`A table samples only finitely many inputs. Algebraically, $\dfrac{\sqrt{x+1}-1}{x}\cdot\dfrac{\sqrt{x+1}+1}{\sqrt{x+1}+1}=\dfrac{1}{\sqrt{x+1}+1}\to\dfrac12$.`,
      ],
    },
  },

  // ───────────── 1.4 ─────────────
  {
    code: "1.4", title: "Limit Laws and Direct Substitution", unit: UNIT,
    ideas: [
      r`If $${L("c")}f(x)=L$ and $${L("c")}g(x)=M$ are real numbers, limits of sums, differences, products and constant multiples are found termwise.`,
      r`The quotient law requires $M\neq0$.`,
      r`For polynomial, rational, root, trigonometric, exponential and logarithmic functions, $${L("c")}f(x)=f(c)$ at every $c$ in the domain.`,
      r`$${L("c")}f\big(g(x)\big)=f\big(${L("c")}g(x)\big)$ only when $f$ is continuous at that inner limit.`,
    ],
    examples: [
      { t: "Direct substitution", q: r`Evaluate $${L("-1")}\dfrac{2x^3-x+4}{x^2+3}$.`, s: r`The denominator at $x=-1$ is $4\neq0$, so substitute: $\dfrac{-2+1+4}{4}$.`, r: r`The limit is $\dfrac34$.` },
      { t: "Laws with unknown functions", q: r`Given $${L("1")}f(x)=3$ and $${L("1")}g(x)=-4$, find $${L("1")}\dfrac{[f(x)]^2-2g(x)}{f(x)+g(x)+5}$.`, s: r`Numerator: $9+8=17$. Denominator: $3-4+5=4\neq0$.`, r: r`The limit is $\dfrac{17}{4}$.` },
      { t: "Working backwards", q: r`Suppose $${L("5")}\dfrac{f(x)-2}{x-5}=7$. Find $${L("5")}f(x)$.`, s: r`$f(x)-2=\dfrac{f(x)-2}{x-5}\cdot(x-5)\to7\cdot0=0$.`, r: r`$${L("5")}f(x)=2$.` },
    ],
    core: [
      r`Evaluate $${L("2")}\left(x^4-3x\right)$.`,
      r`Evaluate $${L("\\pi/4")}\sin x\cos x$.`,
      r`Evaluate $${L("0")}\dfrac{3e^x-2}{x+1}$.`,
      r`Evaluate $${L("4")}\sqrt{x^2+9}$.`,
    ],
    exam: [
      r`Given $${L("3")}f(x)=-2$ and $${L("3")}g(x)=6$, find $${L("3")}\big[g(x)-(f(x))^2\big]f(x)$.`,
      r`With the same $f$ and $g$, find $${L("3")}\sqrt{g(x)+f(x)+5}$.`,
      r`With the same $f$ and $g$, what can be said about $${L("3")}\dfrac{f(x)}{g(x)-6}$? Explain.`,
      r`Suppose $${L("-1")}\dfrac{f(x)+4}{x+1}=3$. Find $${L("-1")}f(x)$.`,
    ],
    fr: {
      intro: r`Let $f(x)=4+(x-2)^2$ and $g(u)=\begin{cases}u^2,&u\le4\\10-u,&u>4.\end{cases}$`,
      parts: [
        r`Find $${L("2")}f(x)$, and state whether $f(x)$ approaches this value from above, from below, or from both sides.`,
        r`Explain why $${L("2")}g\big(f(x)\big)$ cannot be found by computing $g\big(${L("2")}f(x)\big)$.`,
        r`Find $${L("2")}g\big(f(x)\big)$.`,
        r`Find $${L("2")}g\big(k(x)\big)$ where $k(x)=4-(x-2)^2$.`,
      ],
    },
    space: { fr: "2cm" },
    sol: {
      core: [r`$16-6=10$.`, r`$\dfrac{\sqrt2}{2}\cdot\dfrac{\sqrt2}{2}=\dfrac12$.`, r`$\dfrac{3-2}{1}=1$.`, r`$\sqrt{25}=5$.`],
      exam: [
        r`$(6-4)(-2)=-4$.`,
        r`$\sqrt{6-2+5}=3$.`,
        r`It does not exist. The denominator tends to 0 while the numerator tends to $-2\neq0$, so the quotient is unbounded; the quotient law does not apply.`,
        r`$f(x)+4=\dfrac{f(x)+4}{x+1}(x+1)\to3\cdot0=0$, so the limit is $-4$.`,
      ],
      fr: [
        r`$4$. Since $(x-2)^2>0$ for $x\neq2$, $f(x)>4$: it approaches 4 from above only.`,
        r`$g$ is not continuous at $u=4$: $${L("4^-", "u")}g(u)=16$ but $${L("4^+", "u")}g(u)=6$.`,
        r`$f(x)\to4^+$, so the limit is $${L("4^+", "u")}g(u)=6$.`,
        r`Now $k(x)<4$ for $x\neq2$, so $k(x)\to4^-$ and the limit is $16$.`,
      ],
    },
  },

  // ───────────── 1.5 ─────────────
  {
    code: "1.5", title: "Resolving 0/0: Factoring, Conjugates and Compound Fractions", unit: UNIT,
    ideas: [
      r`$\tfrac00$ is \textbf{indeterminate}: a signal to rewrite, never an answer.`,
      r`Polynomials: factor and cancel. Square roots: multiply by the conjugate. Fractions within fractions: use a common denominator.`,
      r`Absolute values and piecewise rules: take one-sided limits separately.`,
      r`Keep \textquotedblleft{}$\lim$\textquotedblright{} on every line that still contains the variable; drop it on the line where you substitute.`,
    ],
    examples: [
      { t: "Factoring", q: r`Evaluate $${L("2")}\dfrac{x^2+3x-10}{x^2-4}$.`, s: r`$${L("2")}\dfrac{(x+5)(x-2)}{(x-2)(x+2)}=${L("2")}\dfrac{x+5}{x+2}$.`, r: r`The limit is $\dfrac74$.` },
      { t: "Conjugate", q: r`Evaluate $${L("0")}\dfrac{\sqrt{x+25}-5}{x}$.`, s: r`Multiply by $\dfrac{\sqrt{x+25}+5}{\sqrt{x+25}+5}$: $\dfrac{x}{x\left(\sqrt{x+25}+5\right)}=\dfrac{1}{\sqrt{x+25}+5}$.`, r: r`The limit is $\dfrac1{10}$.` },
      { t: "Compound fraction", q: r`Evaluate $${L("3")}\dfrac{\frac1x-\frac13}{x-3}$.`, s: r`$\dfrac1x-\dfrac13=\dfrac{3-x}{3x}$, so the expression is $\dfrac{3-x}{3x(x-3)}=-\dfrac{1}{3x}$.`, r: r`The limit is $-\dfrac19$.` },
    ],
    core: [
      r`Evaluate $${L("-1")}\dfrac{x^2-1}{x+1}$.`,
      r`Evaluate $${L("3")}\dfrac{x^2-2x-3}{x-3}$.`,
      r`Evaluate $${L("0", "h")}\dfrac{(4+h)^2-16}{h}$.`,
      r`Evaluate $${L("1")}\dfrac{x^3-1}{x-1}$.`,
    ],
    exam: [
      r`Evaluate $${L("25")}\dfrac{\sqrt x-5}{x-25}$.`,
      r`Evaluate $${L("1")}\dfrac{\frac{1}{x+2}-\frac13}{x-1}$.`,
      r`Find the value of $k$ for which $${L("-2")}\dfrac{x^2+kx+6}{x+2}$ exists, and find the limit.`,
      r`Evaluate $${L("5^-")}\dfrac{|x-5|}{x^2-25}$.`,
    ],
    fr: {
      intro: r`Let $f(x)=\dfrac{x^2-9}{\sqrt{x+1}-2}$ for $x\neq3$, $x\ge-1$.`,
      parts: [
        r`Show that direct substitution at $x=3$ gives an indeterminate form.`,
        r`Evaluate $${L("3")}f(x)$, showing correct limit notation at each step.`,
        r`What value must be assigned to $f(3)$ to make $f$ continuous at $x=3$? Give a reason.`,
      ],
    },
    sol: {
      core: [
        r`$x-1\to-2$.`,
        r`$\dfrac{(x-3)(x+1)}{x-3}=x+1\to4$.`,
        r`$\dfrac{8h+h^2}{h}=8+h\to8$.`,
        r`$x^2+x+1\to3$.`,
      ],
      exam: [
        r`$\dfrac{\sqrt x-5}{(\sqrt x-5)(\sqrt x+5)}=\dfrac{1}{\sqrt x+5}\to\dfrac1{10}$.`,
        r`$\dfrac{3-(x+2)}{3(x+2)(x-1)}=\dfrac{-(x-1)}{3(x+2)(x-1)}=-\dfrac{1}{3(x+2)}\to-\dfrac19$.`,
        r`The numerator must vanish at $-2$: $4-2k+6=0$, so $k=5$. Then $x^2+5x+6=(x+2)(x+3)$ and the limit is $1$.`,
        r`For $x<5$, $|x-5|=-(x-5)$, so the expression is $-\dfrac{1}{x+5}\to-\dfrac1{10}$.`,
      ],
      fr: [
        r`Numerator: $9-9=0$. Denominator: $\sqrt4-2=0$. The form is $\tfrac00$.`,
        r`$${L("3")}\dfrac{(x^2-9)\left(\sqrt{x+1}+2\right)}{(x+1)-4}=${L("3")}\dfrac{(x-3)(x+3)\left(\sqrt{x+1}+2\right)}{x-3}=${L("3")}(x+3)\left(\sqrt{x+1}+2\right)=6\cdot4=24$.`,
        r`$f(3)=24$, because continuity at 3 requires $f(3)=${L("3")}f(x)$.`,
      ],
    },
  },

  // ───────────── 1.6 ─────────────
  {
    code: "1.6", title: "Trapping a Limit: The Squeeze Theorem", unit: UNIT,
    ideas: [
      r`\textbf{Squeeze theorem.} If $g(x)\le f(x)\le h(x)$ near $c$ and $${L("c")}g(x)=${L("c")}h(x)=L$, then $${L("c")}f(x)=L$.`,
      r`Bounds usually come from $-1\le\sin(\cdot)\le1$ or $-1\le\cos(\cdot)\le1$, multiplied by a non-negative factor.`,
      r`$${L("0", "\\theta")}\dfrac{\sin\theta}{\theta}=1$ and $${L("0", "\\theta")}\dfrac{1-\cos\theta}{\theta}=0$, with $\theta$ in radians.`,
      r`The expression inside the sine must match the expression underneath it.`,
    ],
    examples: [
      { t: "Matching the argument", q: r`Evaluate $${L("0")}\dfrac{\sin(7x)}{2x}$.`, s: r`$\dfrac{\sin(7x)}{2x}=\dfrac72\cdot\dfrac{\sin(7x)}{7x}\to\dfrac72\cdot1$.`, r: r`The limit is $\dfrac72$.` },
      { t: "A function known only by its bounds", q: r`A function satisfies $2x+1\le f(x)\le x^2+2$ for all $x$. Find $${L("1")}f(x)$.`, s: r`$${L("1")}(2x+1)=3$ and $${L("1")}(x^2+2)=3$.`, r: r`By the squeeze theorem, $${L("1")}f(x)=3$.` },
      { t: "A full squeeze argument", q: r`Show that $${L("0")}x^2\sin\!\left(\dfrac3x\right)=0$.`, s: r`For $x\neq0$, $-1\le\sin\!\left(\tfrac3x\right)\le1$. Since $x^2\ge0$, $-x^2\le x^2\sin\!\left(\tfrac3x\right)\le x^2$. Also $${L("0")}(-x^2)=0$ and $${L("0")}x^2=0$.`, r: r`By the squeeze theorem the limit is $0$.` },
    ],
    core: [
      r`Evaluate $${L("0")}\dfrac{\sin(4x)}{x}$.`,
      r`Evaluate $${L("0")}\dfrac{\sin x}{5x}$.`,
      r`Evaluate $${L("0")}\dfrac{\tan(3x)}{x}$.`,
      r`Evaluate $${L("0")}\dfrac{x}{\sin(2x)}$.`,
    ],
    exam: [
      r`Evaluate $${L("0")}\dfrac{\sin(6x)}{\sin(2x)}$.`,
      r`Evaluate $${L("0")}\dfrac{1-\cos(2x)}{x^2}$.`,
      r`A function satisfies $5-x^2\le g(x)\le5+x^4$ for all $x$. Find $${L("0")}g(x)$, with justification.`,
      r`Evaluate $${L("\\infty")}\dfrac{3+\sin x}{x}$, with justification.`,
    ],
    fr: {
      intro: r`Let $f(x)=x^3\cos\!\left(\dfrac1x\right)$ for $x\neq0$.`,
      parts: [
        r`Explain why $${L("0")}f(x)$ cannot be found with the product law.`,
        r`Use the squeeze theorem to find $${L("0")}f(x)$. (Take care: $x^3$ can be negative.)`,
        r`Does the same method show that $${L("0")}(x+1)\cos\!\left(\dfrac1x\right)$ exists? Explain.`,
      ],
    },
    sol: {
      core: [r`$4$.`, r`$\dfrac15$.`, r`$\dfrac{\sin(3x)}{x}\cdot\dfrac{1}{\cos(3x)}\to3$.`, r`$\dfrac12\cdot\dfrac{2x}{\sin(2x)}\to\dfrac12$.`],
      exam: [
        r`$\dfrac{\sin 6x}{6x}\cdot\dfrac{2x}{\sin 2x}\cdot\dfrac{6}{2}\to3$.`,
        r`$\dfrac{1-\cos2x}{x^2}\cdot\dfrac{1+\cos2x}{1+\cos2x}=\dfrac{\sin^2(2x)}{x^2}\cdot\dfrac{1}{1+\cos2x}\to4\cdot\dfrac12=2$.`,
        r`$${L("0")}(5-x^2)=5$ and $${L("0")}(5+x^4)=5$, so by the squeeze theorem the limit is $5$.`,
        r`For $x>0$, $\dfrac2x\le\dfrac{3+\sin x}{x}\le\dfrac4x$. Both bounds tend to 0 as $x\to\infty$, so by the squeeze theorem the limit is $0$.`,
      ],
      fr: [
        r`$${L("0")}\cos\!\left(\tfrac1x\right)$ does not exist (the values oscillate), and the product law needs both limits to exist.`,
        r`$\left|\cos\tfrac1x\right|\le1$, so $-|x|^3\le x^3\cos\tfrac1x\le|x|^3$. Both bounds tend to 0 as $x\to0$, so by the squeeze theorem the limit is $0$.`,
        r`No. The bounds would be $-|x+1|$ and $|x+1|$, which tend to $-1$ and $1$: not equal. In fact the values oscillate between about $-1$ and $1$, and the limit does not exist.`,
      ],
    },
  },

  // ───────────── 1.7 ─────────────
  {
    code: "1.7", title: "Where Graphs Break: Classifying Discontinuities", unit: UNIT,
    ideas: [
      r`\textbf{Removable:} the limit exists but $f(c)$ is undefined or different. A hole.`,
      r`\textbf{Jump:} both one-sided limits exist and are unequal.`,
      r`\textbf{Infinite:} a one-sided limit is $\pm\infty$. A vertical asymptote.`,
      r`For a rational function, factor first: a cancelled factor gives a hole; a surviving factor gives an asymptote.`,
    ],
    examples: [
      { t: "A rational function", q: r`Find and classify the discontinuities of $f(x)=\dfrac{x^2-4x}{x^2-16}$.`, s: r`$f(x)=\dfrac{x(x-4)}{(x-4)(x+4)}$. At $x=4$ the factor cancels and $${L("4")}f(x)=\dfrac48=\dfrac12$. At $x=-4$ the factor remains and the numerator tends to $-4\neq0$.`, r: r`Removable at $x=4$; infinite at $x=-4$.` },
      { t: "A piecewise function", q: r`Classify the discontinuity at $x=2$ of $g(x)=\begin{cases}2x-1,&x<2\\6,&x=2\\x+1,&x>2.\end{cases}$`, s: r`$${L("2^-")}g(x)=3$ and $${L("2^+")}g(x)=3$, so the limit is 3; but $g(2)=6$.`, r: r`Removable.` },
      { t: "An absolute value", q: r`Classify the discontinuity at $x=3$ of $h(x)=\dfrac{x^2-9}{|x-3|}$.`, s: r`For $x>3$: $h(x)=x+3\to6$. For $x<3$: $h(x)=-(x+3)\to-6$.`, r: r`Jump.` },
    ],
    core: [
      r`Classify the discontinuity of $f(x)=\dfrac{x^2-1}{x-1}$ at $x=1$.`,
      r`Classify the discontinuity of $f(x)=\dfrac{3}{x-2}$ at $x=2$.`,
      r`Classify the discontinuity at $x=0$ of $f(x)=\begin{cases}x,&x<0\\x+2,&x\ge0.\end{cases}$`,
      r`Classify the discontinuity of $f(x)=\dfrac{x-5}{(x-5)^2}$ at $x=5$.`,
    ],
    exam: [
      r`Find and classify all discontinuities of $f(x)=\dfrac{x^2+x-2}{x^2-x-6}$.`,
      r`How many vertical asymptotes does the graph of $f(x)=\dfrac{x^2-9}{x^3-9x}$ have? Justify.`,
      r`For what value of $a$ does $f(x)=\dfrac{x^2+ax-8}{x-4}$ have a removable discontinuity at $x=4$? Give the coordinates of the hole.`,
      r`Classify the discontinuity of $f(x)=\dfrac{1-\cos x}{x}$ at $x=0$.`,
    ],
    fr: {
      intro: r`Let $g(x)=\begin{cases}\dfrac{x^2-1}{x-1},&x<1\\[2mm]k,&x=1\\[1mm]3-x,&x>1\end{cases}$ where $k$ is a constant.`,
      parts: [
        r`Find $${L("1^-")}g(x)$ and $${L("1^+")}g(x)$.`,
        r`If $k=5$, what type of discontinuity does $g$ have at $x=1$? Give a reason.`,
        r`For what value of $k$ is $g$ continuous at $x=1$?`,
      ],
    },
    sol: {
      core: [
        r`Removable: $f(x)=x+1$ for $x\neq1$, limit 2, $f(1)$ undefined.`,
        r`Infinite: numerator 3, denominator tends to 0.`,
        r`Jump: left limit 0, right limit 2.`,
        r`Infinite: $f(x)=\dfrac{1}{x-5}$ for $x\neq5$; one factor remains.`,
      ],
      exam: [
        r`$f(x)=\dfrac{(x+2)(x-1)}{(x-3)(x+2)}$. Removable at $x=-2$ (limit $\dfrac{-3}{-5}=\dfrac35$); infinite at $x=3$.`,
        r`One. $f(x)=\dfrac{(x-3)(x+3)}{x(x-3)(x+3)}=\dfrac1x$ for $x\neq\pm3$: holes at $x=\pm3$, an asymptote only at $x=0$.`,
        r`$16+4a-8=0$ gives $a=-2$. Then $x^2-2x-8=(x-4)(x+2)$ and the hole is at $(4,6)$.`,
        r`Removable: $f(0)$ is undefined but $${L("0")}\dfrac{1-\cos x}{x}=0$.`,
      ],
      fr: [
        r`For $x<1$, $g(x)=x+1$, so $${L("1^-")}g(x)=2$. $${L("1^+")}g(x)=3-1=2$.`,
        r`Removable, because $${L("1")}g(x)=2$ exists but $g(1)=5\neq2$.`,
        r`$k=2$, so that $g(1)$ equals the limit.`,
      ],
    },
  },

  // ───────────── 1.8 ─────────────
  {
    code: "1.8", title: "The Three-Part Continuity Test", unit: UNIT,
    ideas: [
      r`$f$ is continuous at $c$ when $f(c)$ is defined, $${L("c")}f(x)$ exists, and the two are equal.`,
      r`For a piecewise function the justification is one line: $${L("c^-")}f(x)=${L("c^+")}f(x)=f(c)$.`,
      r`Polynomial, rational, root, trigonometric, exponential and logarithmic functions are continuous on their domains.`,
      r`To make pieces join, set the limits equal at each boundary: one equation per boundary.`,
    ],
    examples: [
      { t: "Verifying continuity", q: r`Is $f(x)=\begin{cases}x^3,&x\le1\\3x-2,&x>1\end{cases}$ continuous at $x=1$?`, s: r`$${L("1^-")}f(x)=1$, $${L("1^+")}f(x)=3-2=1$, and $f(1)=1$.`, r: r`Yes: the three values are equal.` },
      { t: "One constant", q: r`Find $k$ so that $f(x)=\begin{cases}kx-3,&x<2\\x^2+k,&x\ge2\end{cases}$ is continuous at $x=2$.`, s: r`$2k-3=4+k$.`, r: r`$k=7$. Check: both sides give 11.` },
      { t: "A function value and two constants", q: r`Find $a$ and $b$ so that $f(x)=\begin{cases}ax+2,&x<1\\5,&x=1\\bx^2,&x>1\end{cases}$ is continuous at $x=1$.`, s: r`Left limit: $a+2$. Right limit: $b$. Both must equal $f(1)=5$.`, r: r`$a=3$ and $b=5$.` },
    ],
    core: [
      r`Is $f(x)=\begin{cases}4-x,&x<3\\x-2,&x\ge3\end{cases}$ continuous at $x=3$? Justify.`,
      r`On what set is $f(x)=\dfrac{1}{x^2-9}$ continuous?`,
      r`On what interval is $f(x)=\sqrt{x-2}$ continuous?`,
      r`What value should be assigned to $f(6)$ to make $f(x)=\dfrac{x^2-36}{x-6}$ continuous at $x=6$?`,
    ],
    exam: [
      r`Find $k$ so that $f(x)=\begin{cases}x^2-k,&x\le2\\kx+1,&x>2\end{cases}$ is continuous at $x=2$.`,
      r`Find $k$ so that $f(x)=\begin{cases}\dfrac{\sin(4x)}{x},&x\neq0\\k,&x=0\end{cases}$ is continuous at $x=0$.`,
      r`Find $a$ and $b$ so that $f(x)=\begin{cases}x+a,&x<0\\x^2+3,&0\le x\le2\\bx-1,&x>2\end{cases}$ is continuous for all real $x$.`,
      r`On what interval is $f(x)=\ln(5-x)$ continuous?`,
    ],
    fr: {
      intro: r`Let $f(x)=\begin{cases}x^2+1,&x<2\\5,&x=2\\7-x,&x>2.\end{cases}$`,
      parts: [
        r`Find $${L("2^-")}f(x)$ and $${L("2^+")}f(x)$.`,
        r`Is $f$ continuous at $x=2$? Justify your answer.`,
        r`Let $h(x)=f(x)$ for $x\neq2$ and $h(2)=4$. Is $h$ continuous at $x=2$? If not, name the type of discontinuity.`,
      ],
    },
    sol: {
      core: [
        r`$${L("3^-")}f(x)=1$, $${L("3^+")}f(x)=1$, $f(3)=1$. All equal, so yes.`,
        r`All real numbers except $x=3$ and $x=-3$.`,
        r`$[2,\infty)$.`,
        r`$12$, the limit of $x+6$.`,
      ],
      exam: [
        r`$4-k=2k+1$ gives $k=1$.`,
        r`$${L("0")}\dfrac{\sin4x}{x}=4$, so $k=4$.`,
        r`At 0: $a=3$. At 2: $7=2b-1$, so $b=4$.`,
        r`$5-x>0$: the interval $(-\infty,5)$.`,
      ],
      fr: [
        r`$${L("2^-")}f(x)=4+1=5$ and $${L("2^+")}f(x)=7-2=5$.`,
        r`Yes. $${L("2^-")}f(x)=${L("2^+")}f(x)=f(2)=5$.`,
        r`No. $${L("2")}h(x)=5$ but $h(2)=4$: a removable discontinuity.`,
      ],
    },
  },

  // ───────────── 1.9 ─────────────
  {
    code: "1.9", title: "Unbounded Behaviour: Vertical and Horizontal Asymptotes", unit: UNIT,
    ideas: [
      r`$x=c$ is a \textbf{vertical asymptote} if a one-sided limit at $c$ is $\pm\infty$. Find the sign factor by factor.`,
      r`$y=L$ is a \textbf{horizontal asymptote} if $f(x)\to L$ as $x\to\infty$ or $x\to-\infty$.`,
      r`Rational functions at infinity: compare degrees; equal degrees give the ratio of leading coefficients.`,
      r`$\sqrt{x^2}=|x|$, which equals $-x$ when $x\to-\infty$. Growth: $\ln x\ll x^p\ll e^x$.`,
    ],
    examples: [
      { t: "The sign of an infinite limit", q: r`Find $${L("1^-")}\dfrac{x+3}{x-1}$ and $${L("1^+")}\dfrac{x+3}{x-1}$.`, s: r`The numerator is near 4. For $x<1$ the denominator is a small negative number; for $x>1$ a small positive number.`, r: r`$-\infty$ from the left; $\infty$ from the right. The line $x=1$ is a vertical asymptote.` },
      { t: "Rational limits at infinity", q: r`Evaluate $${L("\\infty")}\dfrac{2x^2-7}{3x^2+x}$ and $${L("-\\infty")}\dfrac{x+1}{x^2+4}$.`, s: r`First: equal degrees, ratio of leading coefficients. Second: the denominator has the higher degree.`, r: r`$\dfrac23$ and $0$.` },
      { t: "A square root as $x\\to-\\infty$", q: r`Evaluate $${L("-\\infty")}\dfrac{\sqrt{x^2+9}}{2x-1}$.`, s: r`$\sqrt{x^2+9}=|x|\sqrt{1+\tfrac{9}{x^2}}=-x\sqrt{1+\tfrac9{x^2}}$ for $x<0$. The expression is $\dfrac{-\sqrt{1+\frac9{x^2}}}{2-\frac1x}$.`, r: r`The limit is $-\dfrac12$.` },
    ],
    core: [
      r`Evaluate $${L("\\infty")}\dfrac{5x^3-x}{2x^3+4}$.`,
      r`Evaluate $${L("-2^+")}\dfrac{1}{x+2}$.`,
      r`Evaluate $${L("\\infty")}\dfrac{4x+1}{x^2-3}$.`,
      r`Evaluate $${L("-\\infty")}e^x$.`,
    ],
    exam: [
      r`Find both horizontal asymptotes of $f(x)=\dfrac{4e^x-1}{2e^x+3}$.`,
      r`Find all vertical and horizontal asymptotes, and any holes, of $f(x)=\dfrac{x^2-4}{x^2-5x+6}$.`,
      r`Evaluate $${L("-\\infty")}\dfrac{3x+2}{\sqrt{4x^2+1}}$.`,
      r`Evaluate $${L("\\infty")}\left(\sqrt{x^2+8x}-x\right)$.`,
    ],
    fr: {
      intro: r`Let $f(x)=\dfrac{3x^2-12}{x^2+x-6}$.`,
      parts: [
        r`Show that $f$ has a removable discontinuity at $x=2$, and find $${L("2")}f(x)$.`,
        r`Write an equation for the vertical asymptote of the graph of $f$. Justify with a limit.`,
        r`Write an equation for the horizontal asymptote of the graph of $f$. Justify with a limit.`,
      ],
    },
    sol: {
      core: [r`$\dfrac52$.`, r`$\infty$.`, r`$0$.`, r`$0$.`],
      exam: [
        r`As $x\to\infty$: $\dfrac{4-e^{-x}}{2+3e^{-x}}\to2$. As $x\to-\infty$: $\dfrac{0-1}{0+3}=-\dfrac13$. Asymptotes $y=2$ and $y=-\dfrac13$.`,
        r`$f(x)=\dfrac{(x-2)(x+2)}{(x-2)(x-3)}=\dfrac{x+2}{x-3}$ for $x\neq2$. Vertical asymptote $x=3$; horizontal asymptote $y=1$; hole at $(2,-4)$.`,
        r`$\sqrt{4x^2+1}=-x\sqrt{4+\tfrac1{x^2}}$ for $x<0$, so the limit is $\dfrac{3}{-2}=-\dfrac32$.`,
        r`$\dfrac{8x}{\sqrt{x^2+8x}+x}=\dfrac{8}{\sqrt{1+\frac8x}+1}\to4$.`,
      ],
      fr: [
        r`$f(x)=\dfrac{3(x-2)(x+2)}{(x+3)(x-2)}=\dfrac{3(x+2)}{x+3}$ for $x\neq2$. So $${L("2")}f(x)=\dfrac{12}{5}$ exists while $f(2)$ is undefined: removable.`,
        r`$x=-3$, because $${L("-3^+")}f(x)=-\infty$ (numerator near $-3$, denominator small and positive).`,
        r`$y=3$, because $${L("\\infty")}f(x)=3$.`,
      ],
    },
  },

  // ───────────── 1.10 ─────────────
  {
    code: "1.10", title: "Guaranteed Values: The Intermediate Value Theorem", unit: UNIT,
    ideas: [
      r`\textbf{IVT.} If $f$ is continuous on $[a,b]$ and $N$ is between $f(a)$ and $f(b)$, then $f(c)=N$ for at least one $c$ in $(a,b)$.`,
      r`A justification has three parts: continuity, the inequality with numbers, and the theorem named.`,
      r`The theorem guarantees \emph{at least one} value; it does not locate it or count them.`,
      r`To show $f(c)=g(c)$ for some $c$, apply the theorem to $h=f-g$.`,
    ],
    examples: [
      { t: "A root in an interval", q: r`Show that $x^3-4x+1=0$ has a solution in $(0,1)$.`, s: r`Let $f(x)=x^3-4x+1$, a polynomial, so $f$ is continuous on $[0,1]$. $f(0)=1$ and $f(1)=-2$, so $f(1)<0<f(0)$.`, r: r`By the Intermediate Value Theorem there is a $c$ in $(0,1)$ with $f(c)=0$.` },
      { t: "Counting from a table", q: r`A function $f$ is continuous on $[0,9]$.` + tab("x", [0, 2, 4, 7, 9], "f(x)", [5, -1, 2, 6, -3]) + r`What is the least number of zeros of $f$ on $[0,9]$?`, s: r`The sign changes on $[0,2]$, $[2,4]$ and $[7,9]$, but not on $[4,7]$.`, r: r`At least $3$.` },
      { t: "Two functions", q: r`$f$ and $g$ are continuous, with $f(2)=1$, $g(2)=6$, $f(5)=9$, $g(5)=4$. Show that $f(c)=g(c)$ for some $c$ in $(2,5)$.`, s: r`Let $h=f-g$, continuous on $[2,5]$. $h(2)=-5<0$ and $h(5)=5>0$.`, r: r`By the Intermediate Value Theorem $h(c)=0$ for some $c$ in $(2,5)$, so $f(c)=g(c)$.` },
    ],
    core: [
      r`State the hypothesis of the Intermediate Value Theorem.`,
      r`$f$ is continuous on $[0,3]$ with $f(0)=-2$ and $f(3)=7$. Which of the values $0$, $5$, $8$ must $f$ take on $(0,3)$?`,
      r`Show that $x^5+x-1=0$ has a solution in $(0,1)$.`,
      r`Explain why the Intermediate Value Theorem cannot be applied to $f(x)=\dfrac{1}{x-1}$ on $[0,2]$.`,
    ],
    exam: [
      r`Show that the equation $e^x=4-x^2$ has a solution in $(1,2)$.`,
      r`A differentiable function $P$ has $P(1)=12$ and $P(4)=-3$. Must there be a $t$ in $(1,4)$ with $P(t)=5$? Justify.`,
      r`$f$ is continuous on $[1,6]$ with $f(1)=4$ and $f(6)=4$. Must $f$ have a zero in $(1,6)$? Explain.`,
      r`For which values of $k$ does the theorem guarantee that $f(x)=x^2+x+k$ has a zero in $(0,1)$?`,
    ],
    fr: {
      intro: r`The temperature in a greenhouse, $T(t)$ $^\circ$C, is a continuous function of time $t$ hours.` + tab("t", [0, 5, 10, 20], "T(t)", [18, 25, 21, 30]),
      parts: [
        r`Must there be a time $t$, $0<t<5$, at which $T(t)=23$? Justify your answer.`,
        r`What is the least number of times in $[0,20]$ at which $T(t)=23$? Show your reasoning.`,
        r`A student claims the table shows the temperature never fell below 18 $^\circ$C. Is the claim justified?`,
      ],
    },
    sol: {
      core: [
        r`$f$ is continuous on the closed interval $[a,b]$.`,
        r`$0$ and $5$ (both lie between $-2$ and $7$). Not necessarily $8$.`,
        r`$f(x)=x^5+x-1$ is continuous on $[0,1]$; $f(0)=-1<0<1=f(1)$. By the IVT there is a $c$ in $(0,1)$ with $f(c)=0$.`,
        r`$f$ is not continuous on $[0,2]$: it is undefined at $x=1$.`,
      ],
      exam: [
        r`Let $h(x)=e^x+x^2-4$, continuous on $[1,2]$. $h(1)=e-3<0$ and $h(2)=e^2>0$. By the IVT $h(c)=0$ for some $c$ in $(1,2)$.`,
        r`Yes. $P$ is differentiable, hence continuous, on $[1,4]$, and $P(4)=-3<5<12=P(1)$. By the IVT such a $t$ exists.`,
        r`Not necessarily. $0$ is not between $f(1)$ and $f(6)$, so the theorem guarantees nothing.`,
        r`$f(0)=k$ and $f(1)=2+k$. Zero lies between them when $k<0<2+k$: $-2<k<0$.`,
      ],
      fr: [
        r`Yes. $T$ is continuous on $[0,5]$ and $T(0)=18<23<25=T(5)$. By the Intermediate Value Theorem there is a time $t$ in $(0,5)$ with $T(t)=23$.`,
        r`23 lies between the endpoint values on $[0,5]$ (18 and 25), on $[5,10]$ (25 and 21) and on $[10,20]$ (21 and 30). At least $3$ times.`,
        r`No. The table gives the temperature at four times only; between them $T$ may have dipped below 18 and returned.`,
      ],
    },
  },
];

export default sheets;

// ── Free-response set and scoring guide ─────────────────────────────────────
const HEAD = (right) => r`\documentclass[11pt]{article}
\input{_preamble}
\fancyhead[R]{\footnotesize\color{black!60}${right}}
\begin{document}
`;

const FR_Q = HEAD("Unit 1 free response") + r`
\wstitle{1.12}{Unit 1 Free-Response Practice}{${UNIT} \textperiodcentered{} two questions, 9 points each \textperiodcentered{} suggested time 30 minutes}

\begin{scorebox}{Instructions}
\begin{itemize}[leftmargin=*,itemsep=2pt,topsep=2pt]
  \item Show all your work. A correct answer with no supporting work may not earn credit.
  \item Use correct notation: \textquotedblleft{}$\lim$\textquotedblright{} stays until you substitute, and \textquotedblleft{}$=$\textquotedblright{} joins only equal things.
  \item When asked to justify, name the theorem and state its conditions.
  \item Question 1: no calculator. Question 2: a graphing calculator is required; give decimals to three places.
\end{itemize}
\end{scorebox}

\begin{frbox}{Question 1 \textperiodcentered{} No calculator}
Let $f$ be the function defined by
\[ f(x)=\begin{cases}\dfrac{x^2-x-2}{x-2},&x<2\\[2mm]k,&x=2\\[1mm]\sqrt{x+7},&x>2\end{cases}\]
where $k$ is a constant.
\begin{enumerate}[label=(\alph*),leftmargin=*,itemsep=2pt]
  \item Find $${L("2^-")}f(x)$ and $${L("2^+")}f(x)$. Show the work that leads to your answers.\work{3.4cm}
  \item For what value of $k$ is $f$ continuous at $x=2$? Justify your answer.\work{2.6cm}
  \item Suppose instead that $k=5$. What type of discontinuity does $f$ have at $x=2$? Give a reason.\work{2.2cm}
  \item Evaluate $${L("\\infty")}\dfrac{f(x)}{\sqrt{x}}$.\work{2.6cm}
  \item Let $k$ have the value found in part (b). Is there a number $c$, $2<c<9$, such that $f(c)=3.5$? Justify your answer.\work{2.8cm}
\end{enumerate}
\end{frbox}

\newpage
\begin{frbox}{Question 2 \textperiodcentered{} Graphing calculator required}
The amount of water in a reservoir, $W(t)$ megalitres, is a continuous function of time $t$ days. Selected values are shown.
` + tab("t", [0, 2, 6, 10], "W(t)", [40, 52, 46, 61]) + r`
\begin{enumerate}[label=(\alph*),leftmargin=*,itemsep=2pt]
  \item Find the average rate of change of $W$ on the interval $2\le t\le6$. Using correct units, interpret your answer in context.\work{3cm}
  \item What is the least number of times $t$ in $0\le t\le10$ at which $W(t)=50$? Justify your answer.\work{3.2cm}
  \item An engineer models the reservoir with $M(t)=60-20e^{-0.3t}$. Find $${L("\\infty", "t")}M(t)$ and interpret it in context.\work{2.6cm}
  \item Use the model to estimate $${L("0", "t")}\dfrac{M(t)-40}{t}$ to three decimal places, showing the values you used.\work{3cm}
\end{enumerate}
\end{frbox}
\end{document}
`;

const FR_KEY = HEAD("Unit 1 free response: scoring guide") + r`
\wstitle{1.12}{Unit 1 Free-Response Practice: Scoring Guide}{${UNIT} \textperiodcentered{} 18 points}

\begin{scorebox}{Question 1 \textperiodcentered{} 9 points}
\textbf{(a)} For $x<2$, $\dfrac{x^2-x-2}{x-2}=\dfrac{(x-2)(x+1)}{x-2}=x+1$, so $${L("2^-")}f(x)=3$. \pts{1 point: left-hand limit with supporting work}

$${L("2^+")}f(x)=\sqrt{2+7}=3$. \pts{1 point: right-hand limit}

\medskip\textbf{(b)} $k=3$. $f$ is continuous at $x=2$ when $${L("2^-")}f(x)=${L("2^+")}f(x)=f(2)$, and both one-sided limits equal 3. \pts{1 point: $k=3$; 1 point: justification using the limits}

\medskip\textbf{(c)} A removable discontinuity, because $${L("2")}f(x)=3$ exists but $f(2)=5\neq3$. \pts{1 point: type with reason}

\medskip\textbf{(d)} For large $x$, $f(x)=\sqrt{x+7}$, so $${L("\\infty")}\dfrac{\sqrt{x+7}}{\sqrt x}=${L("\\infty")}\sqrt{1+\dfrac7x}=1$. \pts{1 point: uses the correct piece; 1 point: answer}

\medskip\textbf{(e)} Yes. With $k=3$, $f$ is continuous on $[2,9]$. $f(2)=3$ and $f(9)=\sqrt{16}=4$, so $f(2)<3.5<f(9)$. By the Intermediate Value Theorem there is a $c$ in $(2,9)$ with $f(c)=3.5$. \pts{1 point: continuity and $f(2)<3.5<f(9)$; 1 point: conclusion naming the theorem}
\end{scorebox}

\begin{scorebox}{Question 2 \textperiodcentered{} 9 points}
\textbf{(a)} $\dfrac{W(6)-W(2)}{6-2}=\dfrac{46-52}{4}=-1.5$ megalitres per day. \pts{1 point: difference quotient and value}

From $t=2$ to $t=6$ days, the amount of water in the reservoir decreased at an average rate of 1.5 megalitres per day. \pts{1 point: interpretation with units and interval}

\medskip\textbf{(b)} $W$ is continuous on $[0,10]$. $50$ lies between $W(0)=40$ and $W(2)=52$, between $W(2)=52$ and $W(6)=46$, and between $W(6)=46$ and $W(10)=61$. By the Intermediate Value Theorem, $W(t)=50$ at least once in each of $(0,2)$, $(2,6)$ and $(6,10)$: at least $3$ times. \pts{1 point: continuity stated; 1 point: 50 between the values on the three intervals; 1 point: answer 3}

\medskip\textbf{(c)} $${L("\\infty", "t")}\left(60-20e^{-0.3t}\right)=60$, since $e^{-0.3t}\to0$. \pts{1 point: limit}

In the long run the model predicts that the amount of water in the reservoir approaches 60 megalitres. \pts{1 point: interpretation}

\medskip\textbf{(d)} With $t=0.01$: $\dfrac{M(0.01)-40}{0.01}=5.991$. With $t=-0.01$: $6.009$. With $t=\pm0.001$: $5.999$ and $6.001$. The limit is approximately $6.000$. \pts{1 point: values on both sides of 0; 1 point: estimate}
\end{scorebox}

\begin{scorebox}{Using your score}
Mark each question out of 9. As a rough guide for a single unit: 14 or more out of 18 is strong; 10 to 13 is on track; below 10, rework the lessons named beside the points you missed (limits: 1.5; continuity: 1.8; discontinuity types: 1.7; limits at infinity: 1.9; Intermediate Value Theorem: 1.10; rates and interpretation: 1.1; tables: 1.3).
\end{scorebox}
\end{document}
`;

export const documents = [
  { file: "1.12", tex: FR_Q },
  { file: "1.12-key", tex: FR_KEY },
];
