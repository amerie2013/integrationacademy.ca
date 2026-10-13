// MCV4U Unit 1 worksheets — Rates of Change & Limits. Full \soln solutions + TikZ figures.
const r = String.raw;
const U = "1: Rates of Change and Limits";

export default [
  {
    code: "1.1", unit: U, title: "Average & Instantaneous Rate of Change",
    intro: r`Average rate $=\dfrac{f(b)-f(a)}{b-a}$ (secant slope). Instantaneous rate (tangent slope) is \emph{estimated} by plugging a tiny spacing $h$ (e.g.\ $h=0.001$) into the difference quotient $\dfrac{f(x+h)-f(x)}{h}$ --- the smaller $h$, the better the estimate. (Limits make this exact in the next lesson.)`,
    ideas: [r`Average rate over $[a,b]$: $\dfrac{f(b)-f(a)}{b-a}$.`, r`Difference quotient: $\dfrac{f(x+h)-f(x)}{h}$ --- the secant slope for spacing $h$.`, r`Estimate the instantaneous rate by using a very small $h$; shrinking $h$ further improves the estimate.`],
    examples: [
      { t: "Average rate (secant)", body: r`Average rate of change of $f(x)=x^2+1$ on $[1,3]$.\soln
\textbf{Step 1 (evaluate the endpoints):} $f(1)=1^2+1=2$ and $f(3)=3^2+1=10$.\\[3pt]
\textbf{Step 2 (apply the formula):} $\dfrac{f(3)-f(1)}{3-1}=\dfrac{10-2}{2}$.\\[3pt]
\textbf{Step 3 (simplify):} $=\dfrac{8}{2}=4$.\\[3pt]
\textbf{Conclusion:} average rate $=4$ --- the secant through $(1,2)$ and $(3,10)$:` + r`\eplot{-1}{4}{-2}{12}{\addplot[exblue,very thick,domain=-1.4:3.4]{x^2+1};\addplot[qorange,thick,domain=0:4]{4*x-2};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(1,2) (3,10)};}` },
      { t: "Average rate", body: r`Average rate of change of $f(x)=x^2$ on $[2,4]$.\soln
\textbf{Step 1 (evaluate the endpoints):} $f(2)=4$ and $f(4)=16$.\\[3pt]
\textbf{Step 2 (apply the formula):} $\dfrac{f(4)-f(2)}{4-2}=\dfrac{16-4}{2}$.\\[3pt]
\textbf{Step 3 (simplify):} $=\dfrac{12}{2}=6$.\\[3pt]
\textbf{Conclusion:} average rate $=6$ --- the secant through $(2,4)$ and $(4,16)$:` + r`\eplot{1}{5}{-2}{18}{\addplot[exblue,very thick,domain=1:4.24]{x^2};\addplot[qorange,thick,domain=1:5]{6*x-8};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(2,4) (4,16)};}` },
      { t: "Difference quotient", body: r`Simplify the difference quotient of $f(x)=x^2$ at a general $x$.\soln
\textbf{Step 1 (form the quotient):} $\dfrac{f(x+h)-f(x)}{h}=\dfrac{(x+h)^2-x^2}{h}$.\\[3pt]
\textbf{Step 2 (expand):} $(x+h)^2=x^2+2xh+h^2$, so the numerator is $2xh+h^2$.\\[3pt]
\textbf{Step 3 (factor and cancel $h$):} $\dfrac{2xh+h^2}{h}=\dfrac{h(2x+h)}{h}=2x+h$.\\[3pt]
\textbf{Conclusion:} the difference quotient simplifies to $2x+h$.` },
      { t: "Instantaneous rate --- estimated", body: r`Estimate the instantaneous rate of $f(x)=x^2$ at $x=2$ using $h=0.001$.\soln
\textbf{Step 1 (plug into the difference quotient):} $\dfrac{f(2.001)-f(2)}{0.001}=\dfrac{(2.001)^2-2^2}{0.001}$.\\[3pt]
\textbf{Step 2 (compute the squares):} $(2.001)^2=4.004001$ and $2^2=4$.\\[3pt]
\textbf{Step 3 (subtract and divide):} $\dfrac{4.004001-4}{0.001}=\dfrac{0.004001}{0.001}=4.001$.\\[3pt]
\textbf{Conclusion:} $\approx4$ --- the near-tangent line at $x=2$:` + r`\eplot{0}{4}{-2}{10}{\addplot[exblue,very thick,domain=0:3.2]{x^2};\addplot[qorange,thick,domain=0:4]{4*x-4};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(2,4)};}` },
      { t: "Instantaneous rate --- estimated", body: r`Estimate the instantaneous rate of $f(x)=3x^2$ at $x=2$ using $h=0.001$.\soln
\textbf{Step 1 (plug into the difference quotient):} $\dfrac{3(2.001)^2-3(2)^2}{0.001}$.\\[3pt]
\textbf{Step 2 (compute each term):} $3(2.001)^2=3(4.004001)=12.012003$ and $3(2)^2=12$.\\[3pt]
\textbf{Step 3 (subtract and divide):} $\dfrac{12.012003-12}{0.001}=\dfrac{0.012003}{0.001}=12.003$.\\[3pt]
\textbf{Conclusion:} $\approx12$ --- the near-tangent line at $x=2$:` + r`\eplot{0}{2.8}{-4}{20}{\addplot[exblue,very thick,domain=0:2.58]{3*x^2};\addplot[qorange,thick,domain=0.5:2.8]{12*x-12};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(2,12)};}` },
      { t: "Velocity --- estimated", body: r`For $s(t)=t^2$, estimate the instantaneous velocity at $t=4$ using $h=0.001$.\soln
\textbf{Step 1 (plug into the difference quotient):} $\dfrac{s(4.001)-s(4)}{0.001}=\dfrac{(4.001)^2-4^2}{0.001}$.\\[3pt]
\textbf{Step 2 (compute the squares):} $(4.001)^2=16.008001$ and $4^2=16$.\\[3pt]
\textbf{Step 3 (subtract and divide):} $\dfrac{16.008001-16}{0.001}=\dfrac{0.008001}{0.001}=8.001$.\\[3pt]
\textbf{Conclusion:} $\approx8$ --- the near-tangent line at $t=4$:` + r`\begin{center}\begin{tikzpicture}\begin{axis}[width=6.8cm,height=4.4cm,axis lines=middle,xlabel={\tiny$t$},ylabel={\tiny$s$},grid=both,grid style={gray!16},xmin=1,xmax=5.5,ymin=-4,ymax=30,xtick distance=1,ytick distance=5,tick label style={font=\tiny},axis line style={-},samples=120]\addplot[exblue,very thick,domain=1:5.4]{x^2};\addplot[qorange,thick,domain=1.5:5.5]{8*x-16};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(4,16)};\end{axis}\end{tikzpicture}\end{center}` },
      { t: "Average rate (cubic)", body: r`Average rate of change of $f(x)=x^3$ on $[1,2]$.\soln
\textbf{Step 1 (evaluate the endpoints):} $f(1)=1^3=1$ and $f(2)=2^3=8$.\\[3pt]
\textbf{Step 2 (apply the formula):} $\dfrac{f(2)-f(1)}{2-1}=\dfrac{8-1}{1}$.\\[3pt]
\textbf{Step 3 (simplify):} $=7$.\\[3pt]
\textbf{Conclusion:} average rate $=7$ --- the secant through $(1,1)$ and $(2,8)$:` + r`\eplot{0}{2.5}{-2}{10}{\addplot[exblue,very thick,domain=0:2.15]{x^3};\addplot[qorange,thick,domain=0:2.5]{7*x-6};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(1,1) (2,8)};}` },
      { t: "Velocity from a model --- estimated", body: r`A ball's height is $h(t)=20t-5t^2$. Estimate its instantaneous velocity at $t=1$ using $h=0.001$.\soln
\textbf{Step 1 (plug into the difference quotient):} $\dfrac{h(1.001)-h(1)}{0.001}=\dfrac{[20(1.001)-5(1.001)^2]-[20(1)-5(1)^2]}{0.001}$.\\[3pt]
\textbf{Step 2 (compute each height):} $h(1.001)=20.02-5.010005=15.009995$ and $h(1)=20-5=15$.\\[3pt]
\textbf{Step 3 (subtract and divide):} $\dfrac{15.009995-15}{0.001}=\dfrac{0.009995}{0.001}=9.995$.\\[3pt]
\textbf{Conclusion:} $\approx10$ m/s --- the near-tangent line at $t=1$:` + r`\begin{center}\begin{tikzpicture}\begin{axis}[width=6.8cm,height=4.4cm,axis lines=middle,xlabel={\tiny$t$},ylabel={\tiny$h$},grid=both,grid style={gray!16},xmin=0,xmax=4,ymin=0,ymax=22,xtick distance=1,ytick distance=5,tick label style={font=\tiny},axis line style={-},samples=120]\addplot[exblue,very thick,domain=0:4]{20*x-5*x^2};\addplot[qorange,thick,domain=0:1.7]{10*x+5};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(1,15)};\end{axis}\end{tikzpicture}\end{center}` },
      { t: "Difference quotient", body: r`Simplify the difference quotient of $f(x)=2x^2$ at $x=1$.\soln
\textbf{Step 1 (form the quotient):} $\dfrac{f(1+h)-f(1)}{h}=\dfrac{2(1+h)^2-2(1)^2}{h}$.\\[3pt]
\textbf{Step 2 (expand):} $2(1+h)^2=2(1+2h+h^2)=2+4h+2h^2$, so the numerator is $2+4h+2h^2-2=4h+2h^2$.\\[3pt]
\textbf{Step 3 (factor and cancel $h$):} $\dfrac{4h+2h^2}{h}=\dfrac{h(4+2h)}{h}=4+2h$.\\[3pt]
\textbf{Conclusion:} the difference quotient simplifies to $4+2h$.` },
    ],
    questions: [
      { ask: r`Average rate of change of $f(x)=x^2-3$ on $[2,5]$?` },
      { ask: r`Average rate of change of $f(x)=x^2$ on $[0,4]$?` },
      { ask: r`Simplify the difference quotient of $f(x)=x^2$ at $x=3$.` },
      { ask: r`Estimate the instantaneous rate of $f(x)=x^2$ at $x=5$ using $h=0.001$?` },
      { ask: r`Estimate the instantaneous rate of $f(x)=4x^2$ at $x=1$ using $h=0.001$?` },
      { ask: r`For $s(t)=t^2$, estimate the instantaneous velocity at $t=6$ using $h=0.001$?` },
      { ask: r`Average rate of change of $f(x)=x^3$ on $[0,2]$?` },
      { ask: r`Simplify $\dfrac{3(2+h)^2-12}{h}$.` },
      { ask: r`A ball's height is $h(t)=30t-5t^2$; estimate its instantaneous velocity at $t=2$ using $h=0.001$?` },
      { ask: r`Average rate of change of $f(x)=2x+1$ on $[1,4]$?` },
      { ask: r`Estimate the instantaneous rate of $f(x)=x^2$ at $x=-3$ using $h=0.001$?` },
      { ask: r`For $s(t)=t^2+t$, estimate the instantaneous velocity at $t=1$ using $h=0.001$?` },
      { ask: r`A population is $P(t)=100+t^2$; estimate its instantaneous rate of growth at $t=5$ using $h=0.001$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$\tfrac{22-1}{3}=7$`, r`$4$`, r`$6+h$`, r`$\approx10$`, r`$\approx8$`, r`$\approx12$`, r`$\tfrac{8-0}{2}=4$`, r`$12+3h$`, r`$\approx10$ m/s`, r`$2$`, r`$\approx-6$`, r`$\approx3$`, r`$\approx10$`],
  },
  {
    code: "1.2", unit: U, title: "The Limit of a Function",
    intro: r`$\displaystyle\lim_{x\to a}f(x)=L$ is the value $f$ approaches near $a$. Substitute when continuous; for $\tfrac00$ factor or rationalize first.`,
    ideas: [r`Direct substitution when continuous.`, r`$\tfrac00$ indeterminate $\Rightarrow$ factor / rationalize, then substitute.`, r`One-sided limits must agree; at infinity, divide by the highest power.`],
    examples: [
      { t: "Direct substitution", body: r`$\displaystyle\lim_{x\to3}(2x+1)$.\soln
\textbf{Step 1 (check continuity):} $2x+1$ is a polynomial, so it's continuous everywhere --- direct substitution applies.\\[3pt]
\textbf{Step 2 (substitute):} $2(3)+1$.\\[3pt]
\textbf{Conclusion:} $=7$. The line passes straight through $(3,7)$ --- no hole, no jump:` + r`\eplot{-1}{5}{-1}{11}{\addplot[exblue,very thick,domain=-1:5]{2*x+1};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(3,7)};}` },
      { t: "Factor out 0/0", body: r`$\displaystyle\lim_{x\to2}\dfrac{x^2-4}{x-2}$.\soln
\textbf{Step 1 (try substitution):} $\dfrac{2^2-4}{2-2}=\dfrac{0}{0}$ --- indeterminate, so we must factor.\\[3pt]
\textbf{Step 2 (factor the numerator):} $x^2-4=(x-2)(x+2)$.\\[3pt]
\textbf{Step 3 (cancel the common factor):} $\dfrac{(x-2)(x+2)}{x-2}=x+2$ (valid for $x\ne2$).\\[3pt]
\textbf{Step 4 (substitute into the simplified form):} $2+2=4$.\\[3pt]
\textbf{Conclusion:} $=4$. The graph is $y=x+2$ with a hole at $(2,4)$:` + r`\eplot{-1}{5}{-1}{7}{\addplot[exblue,very thick,domain=-1:1.9]{x+2};\addplot[exblue,very thick,domain=2.1:5]{x+2};\addplot[red,only marks,mark=o,mark size=2.4pt] coordinates {(2,4)};}` },
      { t: "Rationalize 0/0", body: r`$\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+9}-3}{x}$.\soln
\textbf{Step 1 (try substitution):} $\dfrac{\sqrt9-3}{0}=\dfrac00$ --- indeterminate, so we rationalize.\\[3pt]
\textbf{Step 2 (multiply by the conjugate):} $\dfrac{\sqrt{x+9}-3}{x}\cdot\dfrac{\sqrt{x+9}+3}{\sqrt{x+9}+3}=\dfrac{(x+9)-9}{x(\sqrt{x+9}+3)}=\dfrac{x}{x(\sqrt{x+9}+3)}$.\\[3pt]
\textbf{Step 3 (cancel $x$):} $=\dfrac{1}{\sqrt{x+9}+3}$.\\[3pt]
\textbf{Step 4 (substitute):} $\dfrac{1}{\sqrt9+3}=\dfrac{1}{3+3}$.\\[3pt]
\textbf{Conclusion:} $=\dfrac16$. The function is undefined at $x=0$ but approaches the hole at $(0,\tfrac16)$:` + r`\eplot{-8}{6}{0}{0.3}{\addplot[exblue,very thick,domain=-8:-0.1]{(sqrt(x+9)-3)/x};\addplot[exblue,very thick,domain=0.1:6]{(sqrt(x+9)-3)/x};\addplot[red,only marks,mark=o,mark size=2.4pt] coordinates {(0,0.1667)};}` },
      { t: "One-sided (DNE)", body: r`$\displaystyle\lim_{x\to0}\dfrac{|x|}{x}$.\soln
\textbf{Step 1 (right-hand limit, $x>0$):} here $|x|=x$, so $\dfrac{|x|}{x}=\dfrac{x}{x}=1$; thus $\lim_{x\to0^+}=1$.\\[3pt]
\textbf{Step 2 (left-hand limit, $x<0$):} here $|x|=-x$, so $\dfrac{|x|}{x}=\dfrac{-x}{x}=-1$; thus $\lim_{x\to0^-}=-1$.\\[3pt]
\textbf{Step 3 (compare):} $1\ne-1$, so the one-sided limits disagree.\\[3pt]
\textbf{Conclusion:} the limit does not exist. The graph jumps from $-1$ to $1$ at $x=0$:` + r`\eplot{-3}{3}{-2}{2}{\addplot[exblue,very thick,domain=-3:-0.03,samples=2]{abs(x)/x};\addplot[exblue,very thick,domain=0.03:3,samples=2]{abs(x)/x};\addplot[red,only marks,mark=o,mark size=2.4pt] coordinates {(0,-1) (0,1)};}` },
      { t: "Limit at infinity", body: r`$\displaystyle\lim_{x\to\infty}\dfrac{3x^2-x}{x^2+5}$.\soln
\textbf{Step 1 (identify the highest power):} the highest power of $x$ in the denominator is $x^2$.\\[3pt]
\textbf{Step 2 (divide every term by $x^2$):} $\dfrac{3x^2/x^2-x/x^2}{x^2/x^2+5/x^2}=\dfrac{3-1/x}{1+5/x^2}$.\\[3pt]
\textbf{Step 3 (let $x\to\infty$):} $\tfrac1x\to0$ and $\tfrac5{x^2}\to0$, leaving $\dfrac{3-0}{1+0}$.\\[3pt]
\textbf{Conclusion:} $=3$ (the ratio of leading coefficients). The curve flattens toward the asymptote $y=3$:` + r`\eplot{-12}{12}{-2}{6}{\addplot[exblue,very thick,domain=-12:12]{(3*x^2-x)/(x^2+5)};\addplot[qorange,dashed,domain=-12:12]{3};}` },
      { t: "Direct substitution", body: r`$\displaystyle\lim_{x\to4}(x^2-1)$.\soln
\textbf{Step 1 (check continuity):} $x^2-1$ is a polynomial, so it's continuous everywhere.\\[3pt]
\textbf{Step 2 (substitute):} $4^2-1=16-1$.\\[3pt]
\textbf{Conclusion:} $=15$.` + r`\eplot{-1}{5}{-2}{16}{\addplot[exblue,very thick,domain=-1:5]{x^2-1};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(4,15)};}` },
      { t: "Factor", body: r`$\displaystyle\lim_{x\to3}\dfrac{x^2-9}{x-3}$.\soln
\textbf{Step 1 (try substitution):} $\dfrac{9-9}{0}=\dfrac00$ --- factor first.\\[3pt]
\textbf{Step 2 (factor and cancel):} $\dfrac{(x-3)(x+3)}{x-3}=x+3$.\\[3pt]
\textbf{Step 3 (substitute):} $3+3$.\\[3pt]
\textbf{Conclusion:} $=6$. The graph is $y=x+3$ with a hole at $(3,6)$:` + r`\eplot{-6}{6}{-4}{10}{\addplot[exblue,very thick,domain=-6:2.8]{x+3};\addplot[exblue,very thick,domain=3.2:6]{x+3};\addplot[red,only marks,mark=o,mark size=2.4pt] coordinates {(3,6)};}` },
      { t: "At infinity", body: r`$\displaystyle\lim_{x\to\infty}\dfrac{5x-2}{x+1}$.\soln
\textbf{Step 1 (divide by the highest power, $x$):} $\dfrac{5-2/x}{1+1/x}$.\\[3pt]
\textbf{Step 2 (let $x\to\infty$):} the fractions $\tfrac2x$ and $\tfrac1x$ both vanish, leaving $\dfrac{5}{1}$.\\[3pt]
\textbf{Conclusion:} $=5$ (the ratio of leading coefficients). Away from the asymptote at $x=-1$, the curve flattens toward $y=5$:` + r`\eplot{-6}{10}{-5}{15}{\addplot[exblue,very thick,domain=-6:-1.8]{(5*x-2)/(x+1)};\addplot[exblue,very thick,domain=-0.2:10]{(5*x-2)/(x+1)};\addplot[qorange,dashed,domain=-6:10]{5};}` },
      { t: "Factor", body: r`$\displaystyle\lim_{x\to1}\dfrac{x^2+x-2}{x-1}$.\soln
\textbf{Step 1 (try substitution):} $\dfrac{1+1-2}{0}=\dfrac00$ --- factor first.\\[3pt]
\textbf{Step 2 (factor the numerator):} $x^2+x-2=(x+2)(x-1)$.\\[3pt]
\textbf{Step 3 (cancel and substitute):} $\dfrac{(x+2)(x-1)}{x-1}=x+2\to1+2$.\\[3pt]
\textbf{Conclusion:} $=3$. The graph is $y=x+2$ with a hole at $(1,3)$:` + r`\eplot{-3}{3}{-2}{6}{\addplot[exblue,very thick,domain=-3:0.8]{x+2};\addplot[exblue,very thick,domain=1.2:3]{x+2};\addplot[red,only marks,mark=o,mark size=2.4pt] coordinates {(1,3)};}` },
    ],
    questions: [
      { ask: r`$\displaystyle\lim_{x\to5}(3x-2)$?` },
      { ask: r`$\displaystyle\lim_{x\to2}\dfrac{x^2-4}{x-2}$?` },
      { ask: r`$\displaystyle\lim_{x\to\infty}\dfrac{4x-1}{2x+3}$?` },
      { ask: r`$\displaystyle\lim_{x\to1}\dfrac{x^2-1}{x-1}$?` },
      { ask: r`Does $\displaystyle\lim_{x\to0}\dfrac1x$ exist?` },
      { ask: r`$\displaystyle\lim_{x\to-2}\dfrac{x^2-4}{x+2}$?` },
      { ask: r`$\displaystyle\lim_{x\to\infty}\dfrac{2x^2+1}{x^2-3}$?` },
      { ask: r`$\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+4}-2}{x}$?` },
      { ask: r`$\displaystyle\lim_{x\to3}(x^2-2x)$?` },
      { ask: r`$\displaystyle\lim_{x\to4}\dfrac{x^2-16}{x-4}$?` },
      { ask: r`$\displaystyle\lim_{x\to\infty}\dfrac{x+5}{x^2+1}$?` },
      { ask: r`$\displaystyle\lim_{x\to2}\dfrac{x^2+x-6}{x-2}$?` },
      { ask: r`$\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+1}-1}{x}$ (rationalize).`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$13$`, r`$4$`, r`$2$`, r`$2$`, r`no ($\pm\infty$)`, r`$-4$`, r`$2$`, r`$\tfrac14$`, r`$3$`, r`$8$`, r`$0$`, r`$5$`, r`$\tfrac12$`],
  },
  {
    code: "1.3", unit: U, title: "Continuity & Limit Laws",
    intro: r`Continuous at $a$: $f(a)$ defined, the limit exists, and they are equal. Discontinuities are removable, jump, or infinite.`,
    ideas: [r`Three conditions: $f(a)$ defined, limit exists, $\lim=f(a)$.`, r`Removable (hole), jump (one-sided differ), infinite (asymptote).`, r`Limit laws split sums, products and quotients.`],
    examples: [
      { t: "Verify continuity", body: r`Is $f(x)=x^2+1$ continuous at $x=2$?\soln
\textbf{Step 1 ($f(a)$ defined?):} $f(2)=2^2+1=5$, which is defined.\\[3pt]
\textbf{Step 2 (limit exists?):} $f$ is a polynomial, so $\lim_{x\to2}(x^2+1)=2^2+1=5$ by direct substitution.\\[3pt]
\textbf{Step 3 (do they match?):} $f(2)=5$ and $\lim_{x\to2}f(x)=5$ --- equal.\\[3pt]
\textbf{Conclusion:} all three conditions hold, so $f$ is continuous at $x=2$.` },
      { t: "Removable", body: r`Classify the discontinuity of $\dfrac{x^2-4}{x-2}$ at $x=2$.\soln
\textbf{Step 1 ($f(a)$ defined?):} at $x=2$ the denominator is $0$, so $f(2)$ is undefined.\\[3pt]
\textbf{Step 2 (does the limit exist?):} $\dfrac{x^2-4}{x-2}=\dfrac{(x-2)(x+2)}{x-2}=x+2$ for $x\ne2$, so $\lim_{x\to2}f(x)=4$, which exists.\\[3pt]
\textbf{Step 3 (compare):} the limit exists ($4$) but $f(2)$ doesn't --- a single missing point.\\[3pt]
\textbf{Conclusion:} removable discontinuity (a hole at $(2,4)$).` },
      { t: "Infinite", body: r`Classify the discontinuity of $\dfrac1{x-3}$ at $x=3$.\soln
\textbf{Step 1 (right-hand limit):} as $x\to3^+$, $x-3\to0^+$ (small positive), so $\dfrac1{x-3}\to+\infty$.\\[3pt]
\textbf{Step 2 (left-hand limit):} as $x\to3^-$, $x-3\to0^-$ (small negative), so $\dfrac1{x-3}\to-\infty$.\\[3pt]
\textbf{Step 3 (interpret):} the function grows without bound on both sides --- no finite limit, no hole to fill in.\\[3pt]
\textbf{Conclusion:} infinite discontinuity (a vertical asymptote at $x=3$):` + r`\eplot{-1}{7}{-6}{6}{\addplot[exblue,very thick,domain=-1:2.82,samples=120]{1/(x-3)};\addplot[exblue,very thick,domain=3.18:7,samples=120]{1/(x-3)};\draw[dashed,gray] (axis cs:3,-6)--(axis cs:3,6);}` },
      { t: "Jump", body: r`For $f(x)=\begin{cases}x,&x<1\\x+2,&x\ge1\end{cases}$, what happens at $x=1$?\soln
\textbf{Step 1 (left-hand limit):} for $x<1$, $f(x)=x$, so $\lim_{x\to1^-}f(x)=1$.\\[3pt]
\textbf{Step 2 (right-hand limit):} for $x\ge1$, $f(x)=x+2$, so $\lim_{x\to1^+}f(x)=1+2=3$.\\[3pt]
\textbf{Step 3 (compare):} $1\ne3$ --- the one-sided limits disagree, so the two-sided limit does not exist.\\[3pt]
\textbf{Conclusion:} a jump discontinuity at $x=1$.` },
      { t: "Make it continuous", body: r`Find $k$ so $f(x)=\begin{cases}x^2,&x\le2\\kx,&x>2\end{cases}$ is continuous at $2$.\soln
\textbf{Step 1 (left piece at $x=2$):} $f(2)=2^2=4$.\\[3pt]
\textbf{Step 2 (right piece's limit at $x=2$):} $\lim_{x\to2^+}kx=2k$.\\[3pt]
\textbf{Step 3 (set them equal):} for continuity the pieces must meet, so $2k=4$.\\[3pt]
\textbf{Conclusion:} $k=2$.` },
      { t: "Where discontinuous", body: r`Where is $\dfrac1{x^2-9}$ discontinuous?\soln
\textbf{Step 1 (find where the denominator is $0$):} solve $x^2-9=0$.\\[3pt]
\textbf{Step 2 (factor):} $(x-3)(x+3)=0$.\\[3pt]
\textbf{Step 3 (solve):} $x=3$ or $x=-3$.\\[3pt]
\textbf{Conclusion:} discontinuous (infinite, vertical asymptotes) at $x=3$ and $x=-3$.` },
      { t: "Removable", body: r`Classify $\dfrac{x^2-1}{x-1}$ at $x=1$.\soln
\textbf{Step 1 ($f(1)$ defined?):} the denominator is $0$ at $x=1$, so $f(1)$ is undefined.\\[3pt]
\textbf{Step 2 (does the limit exist?):} $\dfrac{x^2-1}{x-1}=\dfrac{(x-1)(x+1)}{x-1}=x+1$ for $x\ne1$, so $\lim_{x\to1}f(x)=2$.\\[3pt]
\textbf{Conclusion:} removable discontinuity (a hole at $(1,2)$).` },
      { t: "Limit laws", body: r`$\displaystyle\lim_{x\to2}(3x^2-x)$.\soln
\textbf{Step 1 (split by the sum/difference law):} $\lim_{x\to2}3x^2-\lim_{x\to2}x$.\\[3pt]
\textbf{Step 2 (evaluate each piece by substitution, since both are continuous):} $3(2)^2-2=3(4)-2$.\\[3pt]
\textbf{Conclusion:} $=12-2=10$.` },
      { t: "Domain & continuity", body: r`Where is $\sqrt{x}$ continuous?\soln
\textbf{Step 1 (find the domain):} $\sqrt{x}$ is only defined for $x\ge0$.\\[3pt]
\textbf{Step 2 (check continuity on that domain):} for every $a\ge0$, $\lim_{x\to a}\sqrt{x}=\sqrt{a}=f(a)$, so the three conditions hold throughout.\\[3pt]
\textbf{Conclusion:} $\sqrt{x}$ is continuous on its whole domain, $x\ge0$.` },
    ],
    questions: [
      { ask: r`Is $\dfrac{x+1}{x-2}$ continuous at $x=2$?` },
      { ask: r`Classify the discontinuity of $\dfrac{x^2-1}{x-1}$ at $x=1$.` },
      { ask: r`$\displaystyle\lim_{x\to3}(2x^2-x)$?` },
      { ask: r`Find $k$: $\begin{cases}3x,&x<1\\x+k,&x\ge1\end{cases}$ continuous at $1$.` },
      { ask: r`Where is $\dfrac1{x^2-4}$ discontinuous?` },
      { ask: r`Classify the discontinuity of $\dfrac1{x+5}$ at $x=-5$.` },
      { ask: r`Is $f(x)=x^3-2x$ continuous at $x=0$?` },
      { ask: r`$\displaystyle\lim_{x\to1}(4x^2+2x)$?` },
      { ask: r`Find $k$: $\begin{cases}x^2,&x\le3\\kx,&x>3\end{cases}$ continuous at $3$.` },
      { ask: r`Where is $\dfrac{x}{x^2-x}$ discontinuous?` },
      { ask: r`Classify the discontinuity of $\dfrac{x^2-9}{x-3}$ at $x=3$.` },
      { ask: r`State the three conditions for continuity at $a$.` },
      { ask: r`For $\begin{cases}x^2+1,&x<2\\ax+1,&x\ge2\end{cases}$, find $a$ making it continuous at $2$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`no (infinite)`, r`removable`, r`$15$`, r`$k=2$`, r`$x=\pm2$`, r`infinite`, r`yes`, r`$6$`, r`$k=3$`, r`$x=0,1$`, r`removable`, r`$f(a)$ defined, limit exists, equal`, r`$5=2a+1\Rightarrow a=2$`],
  },
  {
    code: "1.4", unit: U, title: "Slope of Tangent",
    intro: r`Now that limits are exact (Lessons 1.2--1.3), find the tangent slope at a specific point $x=a$ exactly: $m=\displaystyle\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}$. Then the tangent line is $y-f(a)=m(x-a)$.`,
    ideas: [r`$m=\displaystyle\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}$ --- expand, simplify to cancel $h$, then let $h\to0$.`, r`Tangent line at $a$: $y-f(a)=m(x-a)$.`, r`This is the exact version of Lesson 1.1's estimate.`],
    examples: [
      { t: "Confirming the estimate", body: r`Find the exact tangent slope of $f(x)=3x^2$ at $x=2$.\soln
\textbf{Step 1 (form the quotient):} $\dfrac{f(2+h)-f(2)}{h}=\dfrac{3(2+h)^2-12}{h}$.\\[3pt]
\textbf{Step 2 (expand):} $3(2+h)^2=3(4+4h+h^2)=12+12h+3h^2$, so the numerator is $12h+3h^2$.\\[3pt]
\textbf{Step 3 (factor and cancel $h$):} $\dfrac{12h+3h^2}{h}=12+3h$.\\[3pt]
\textbf{Step 4 (limit):} $\lim_{h\to0}(12+3h)=12$.\\[3pt]
\textbf{Conclusion:} $m=12$ exactly --- matching Lesson 1.1's estimate of $\approx12$:` + r`\eplot{-1}{3}{-2}{18}{\addplot[exblue,very thick,domain=-1:2.44]{3*x^2};\addplot[qorange,thick,domain=0.9:2.5]{12*x-12};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(2,12)};}` },
      { t: "Tangent line", body: r`Find the tangent line to $y=x^2$ at $x=-3$.\soln
\textbf{Step 1 (find the slope):} $\dfrac{(-3+h)^2-9}{h}=\dfrac{-6h+h^2}{h}=-6+h\to-6$.\\[3pt]
\textbf{Step 2 (find the point):} $f(-3)=9$, so the point is $(-3,9)$.\\[3pt]
\textbf{Step 3 (point-slope form):} $y-9=-6(x+3)$.\\[3pt]
\textbf{Conclusion:} $y=-6x-9$:` + r`\eplot{-5}{1}{-2}{16}{\addplot[exblue,very thick,domain=-4:1]{x^2};\addplot[qorange,thick,domain=-4.2:-1]{-6*x-9};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-3,9)};}` },
      { t: "Polynomial", body: r`Find the exact tangent slope of $f(x)=2x^2+x$ at $x=-1$.\soln
\textbf{Step 1 (form the quotient):} $\dfrac{f(-1+h)-f(-1)}{h}=\dfrac{[2(-1+h)^2+(-1+h)]-1}{h}$.\\[3pt]
\textbf{Step 2 (expand):} $2(-1+h)^2+(-1+h)=2(1-2h+h^2)-1+h=2-4h+2h^2-1+h=1-3h+2h^2$, so the numerator is $-3h+2h^2$.\\[3pt]
\textbf{Step 3 (factor and cancel $h$):} $\dfrac{-3h+2h^2}{h}=-3+2h$.\\[3pt]
\textbf{Step 4 (limit):} $\lim_{h\to0}(-3+2h)=-3$.\\[3pt]
\textbf{Conclusion:} $m=-3$.` },
      { t: "Reciprocal", body: r`Find the exact tangent slope of $f(x)=\dfrac1x$ at $x=4$.\soln
\textbf{Step 1 (form the quotient):} $\dfrac{f(4+h)-f(4)}{h}=\dfrac{\frac1{4+h}-\frac14}{h}$.\\[3pt]
\textbf{Step 2 (combine the fractions):} $\dfrac1{4+h}-\dfrac14=\dfrac{4-(4+h)}{4(4+h)}=\dfrac{-h}{4(4+h)}$.\\[3pt]
\textbf{Step 3 (divide by $h$ and cancel):} $\dfrac{-h}{4(4+h)h}=\dfrac{-1}{4(4+h)}$.\\[3pt]
\textbf{Step 4 (limit):} $\lim_{h\to0}\dfrac{-1}{4(4+h)}=\dfrac{-1}{16}$.\\[3pt]
\textbf{Conclusion:} $m=-\dfrac1{16}$.` },
      { t: "Radical", body: r`Find the exact tangent slope of $f(x)=\sqrt{x}$ at $x=16$.\soln
\textbf{Step 1 (form the quotient):} $\dfrac{\sqrt{16+h}-\sqrt{16}}{h}=\dfrac{\sqrt{16+h}-4}{h}$.\\[3pt]
\textbf{Step 2 (multiply by the conjugate):} $\dfrac{(16+h)-16}{h(\sqrt{16+h}+4)}=\dfrac{h}{h(\sqrt{16+h}+4)}$.\\[3pt]
\textbf{Step 3 (cancel $h$):} $=\dfrac{1}{\sqrt{16+h}+4}$.\\[3pt]
\textbf{Step 4 (limit):} $\lim_{h\to0}\dfrac{1}{\sqrt{16+h}+4}=\dfrac{1}{4+4}$.\\[3pt]
\textbf{Conclusion:} $m=\dfrac18$.` },
      { t: "Polynomial", body: r`Find the exact tangent slope of $f(x)=x^2+5x$ at $x=2$.\soln
\textbf{Step 1 (form the quotient):} $\dfrac{[(2+h)^2+5(2+h)]-14}{h}$.\\[3pt]
\textbf{Step 2 (expand):} $(2+h)^2+5(2+h)=4+4h+h^2+10+5h=14+9h+h^2$, so the numerator is $9h+h^2$.\\[3pt]
\textbf{Step 3 (factor and cancel $h$):} $\dfrac{9h+h^2}{h}=9+h$.\\[3pt]
\textbf{Step 4 (limit):} $\lim_{h\to0}(9+h)=9$.\\[3pt]
\textbf{Conclusion:} $m=9$.` },
      { t: "Tangent line", body: r`Find the tangent line to $y=2x^2$ at $x=1$.\soln
\textbf{Step 1 (find the slope):} $\dfrac{2(1+h)^2-2}{h}=\dfrac{4h+2h^2}{h}=4+2h\to4$.\\[3pt]
\textbf{Step 2 (find the point):} $f(1)=2$, so the point is $(1,2)$.\\[3pt]
\textbf{Step 3 (point-slope form):} $y-2=4(x-1)$.\\[3pt]
\textbf{Conclusion:} $y=4x-2$:` + r`\eplot{-1}{3}{-2}{10}{\addplot[exblue,very thick,domain=-1:2.24]{2*x^2};\addplot[qorange,thick,domain=-1:3]{4*x-2};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(1,2)};}` },
      { t: "Linear", body: r`Find the exact tangent slope of $f(x)=5x-3$ at $x=4$.\soln
\textbf{Step 1 (form the quotient):} $\dfrac{[5(4+h)-3]-17}{h}$.\\[3pt]
\textbf{Step 2 (expand):} $5(4+h)-3=20+5h-3=17+5h$, so the numerator is $5h$.\\[3pt]
\textbf{Step 3 (divide by $h$):} $\dfrac{5h}{h}=5$ --- no $h$ remains.\\[3pt]
\textbf{Conclusion:} $m=5$ (a line's slope is constant everywhere).` },
      { t: "Polynomial", body: r`Find the exact tangent slope of $f(x)=4x^2-x$ at $x=-1$.\soln
\textbf{Step 1 (form the quotient):} $\dfrac{[4(-1+h)^2-(-1+h)]-5}{h}$.\\[3pt]
\textbf{Step 2 (expand):} $4(-1+h)^2-(-1+h)=4(1-2h+h^2)+1-h=4-8h+4h^2+1-h=5-9h+4h^2$, so the numerator is $-9h+4h^2$.\\[3pt]
\textbf{Step 3 (factor and cancel $h$):} $\dfrac{-9h+4h^2}{h}=-9+4h$.\\[3pt]
\textbf{Step 4 (limit):} $\lim_{h\to0}(-9+4h)=-9$.\\[3pt]
\textbf{Conclusion:} $m=-9$.` },
    ],
    questions: [
      { ask: r`Find the exact tangent slope of $f(x)=x^2$ at $x=7$.` },
      { ask: r`Find the tangent line to $y=x^2$ at $x=-4$.` },
      { ask: r`Find the exact tangent slope of $f(x)=2x^2$ at $x=4$.` },
      { ask: r`Find the exact tangent slope of $f(x)=\dfrac1x$ at $x=-3$.` },
      { ask: r`Find the exact tangent slope of $f(x)=\sqrt{x}$ at $x=9$.` },
      { ask: r`Find the exact tangent slope of $f(x)=3x^2-x$ at $x=2$.` },
      { ask: r`Find the tangent line to $y=x^2$ at $x=-2$.` },
      { ask: r`Find the exact tangent slope of $f(x)=5x-3$ at $x=10$.` },
      { ask: r`Find the exact tangent slope of $f(x)=x^2+5x$ at $x=0$.` },
      { ask: r`Find the exact tangent slope of $f(x)=4x^2-x$ at $x=1$.` },
      { ask: r`Find the tangent line to $y=3x^2$ at $x=1$.` },
      { ask: r`Find the exact tangent slope of $f(x)=\dfrac1x$ at $x=-1$.` },
      { ask: r`Find the exact tangent slope of $f(x)=\sqrt{x}$ at $x=1$ (rationalize).`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$14$`, r`$y=-8x-16$`, r`$16$`, r`$-\tfrac19$`, r`$\tfrac16$`, r`$11$`, r`$y=-4x-4$`, r`$5$`, r`$5$`, r`$7$`, r`$y=6x-3$`, r`$-1$`, r`$\tfrac12$`],
  },
  {
    code: "1.5", unit: U, title: "Derivative Using Definition",
    intro: r`$f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$, with $x$ left general (unlike Lesson 1.4's single point). Expand, simplify to cancel $h$, then let $h\to0$.`,
    ideas: [r`$f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$.`, r`Layout: Step 1 --- find $f(x+h)$ and expand it. Step 2 --- substitute into the definition, cross out the terms that cancel, factor out $h$, cancel it, and box the answer.`, r`Combine fractions / rationalize so $h$ cancels.`, r`Once $f'(x)$ is known, the slope at any point $a$ is just $f'(a)$ --- no limit needed.`],
    examples: [
      { t: "Polynomial", body: r`Differentiate $f(x)=x^2$ using the definition.\soln
\textbf{Step 1:} Find $f(x+h)$: $f(x+h)=(x+h)^2=x^2+2xh+h^2$.\\[3pt]
\textbf{Step 2:} Substitute into the definition, cross out what cancels, factor out $h$, and cancel it:
\begin{align*}
f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\
&=\lim_{h\to0}\frac{(x^2+2xh+h^2)-(x)^2}{h}\\
&=\lim_{h\to0}\frac{\cancel{x^2}+2xh+h^2-\cancel{x^2}}{h}\\
&=\lim_{h\to0}\frac{\cancel{h}(2x+h)}{\cancel{h}}\\
&=\boxed{2x}
\end{align*}` + r`\eplot{-3}{3}{-6}{9}{\addplot[exblue,very thick,domain=-3:3]{x^2};\addplot[qorange,thick,domain=-3:3]{2*x};}` },
      { t: "Polynomial", body: r`Differentiate $f(x)=3x^2-x$ using the definition.\soln
\textbf{Step 1:} Find $f(x+h)$: $f(x+h)=3(x+h)^2-(x+h)=3x^2+6xh+3h^2-x-h$.\\[3pt]
\textbf{Step 2:} Substitute into the definition, cross out what cancels, factor out $h$, and cancel it:
\begin{align*}
f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\
&=\lim_{h\to0}\frac{(3x^2+6xh+3h^2-x-h)-(3x^2-x)}{h}\\
&=\lim_{h\to0}\frac{\cancel{3x^2}+6xh+3h^2-\cancel{x}-h-\cancel{3x^2}+\cancel{x}}{h}\\
&=\lim_{h\to0}\frac{\cancel{h}(6x+3h-1)}{\cancel{h}}\\
&=\boxed{6x-1}
\end{align*}` },
      { t: "Reciprocal", body: r`Differentiate $f(x)=\dfrac1x$ using the definition.\soln
\textbf{Step 1:} Find $f(x+h)$: $f(x+h)=\dfrac{1}{x+h}$.\\[3pt]
\textbf{Step 2:} Substitute into the definition, combine the fractions over the common denominator $x(x+h)$, cross out what cancels, and cancel $h$:
\begin{align*}
f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\
&=\lim_{h\to0}\dfrac{\dfrac{1}{x+h}-\dfrac{1}{x}}{h}\\
&=\lim_{h\to0}\dfrac{\dfrac{x-(x+h)}{x(x+h)}}{h}\\
&=\lim_{h\to0}\frac{\cancel{x}-\cancel{x}-h}{x(x+h)\cdot h}\\
&=\lim_{h\to0}\frac{-\cancel{h}}{x(x+h)\cancel{h}}\\
&=\lim_{h\to0}\frac{-1}{x(x+h)}\\
&=\boxed{-\frac{1}{x^2}}
\end{align*}` + r`\eplot{0.6}{3}{-3}{3}{\addplot[exblue,very thick,domain=0.6:3]{1/x};\addplot[qorange,thick,domain=0.6:3]{-1/x^2};}` },
      { t: "Using the formula", body: r`From Example 1, $f'(x)=2x$. Find the tangent slope of $f(x)=x^2$ at $x=5$.\soln
\textbf{Step 1:} We already have $f'(x)=2x$ as a formula valid for every $x$ --- no need to redo the limit.\\[3pt]
\textbf{Step 2 (substitute):} $f'(5)=2(5)$.\\[3pt]
\textbf{Conclusion:} $10$ --- instant, once $f'(x)$ is known (compare to redoing the limit in Lesson 1.4).` },
      { t: "Radical", body: r`Differentiate $f(x)=\sqrt{x}$ using the definition.\soln
\textbf{Step 1:} Find $f(x+h)$: $f(x+h)=\sqrt{x+h}$.\\[3pt]
\textbf{Step 2:} Substitute into the definition, multiply top and bottom by the conjugate $\sqrt{x+h}+\sqrt{x}$, cross out what cancels, and cancel $h$:
\begin{align*}
f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\
&=\lim_{h\to0}\frac{\sqrt{x+h}-\sqrt{x}}{h}\\
&=\lim_{h\to0}\frac{\left(\sqrt{x+h}-\sqrt{x}\right)\left(\sqrt{x+h}+\sqrt{x}\right)}{h\left(\sqrt{x+h}+\sqrt{x}\right)}\\
&=\lim_{h\to0}\frac{\cancel{x}+h-\cancel{x}}{h\left(\sqrt{x+h}+\sqrt{x}\right)}\\
&=\lim_{h\to0}\frac{\cancel{h}}{\cancel{h}\left(\sqrt{x+h}+\sqrt{x}\right)}\\
&=\lim_{h\to0}\frac{1}{\sqrt{x+h}+\sqrt{x}}\\
&=\boxed{\frac{1}{2\sqrt{x}}}
\end{align*}` + r`\eplot{0}{4}{0}{2.5}{\addplot[exblue,very thick,domain=0:4]{sqrt(x)};\addplot[qorange,thick,domain=0.15:4]{1/(2*sqrt(x))};}` },
      { t: "Polynomial", body: r`Differentiate $f(x)=x^2+5x$ using the definition.\soln
\textbf{Step 1:} Find $f(x+h)$: $f(x+h)=(x+h)^2+5(x+h)=x^2+2xh+h^2+5x+5h$.\\[3pt]
\textbf{Step 2:} Substitute into the definition, cross out what cancels, factor out $h$, and cancel it:
\begin{align*}
f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\
&=\lim_{h\to0}\frac{(x^2+2xh+h^2+5x+5h)-(x^2+5x)}{h}\\
&=\lim_{h\to0}\frac{\cancel{x^2}+2xh+h^2+\cancel{5x}+5h-\cancel{x^2}-\cancel{5x}}{h}\\
&=\lim_{h\to0}\frac{\cancel{h}(2x+h+5)}{\cancel{h}}\\
&=\boxed{2x+5}
\end{align*}` },
      { t: "Polynomial", body: r`Differentiate $f(x)=2x^2$ using the definition.\soln
\textbf{Step 1:} Find $f(x+h)$: $f(x+h)=2(x+h)^2=2x^2+4xh+2h^2$.\\[3pt]
\textbf{Step 2:} Substitute into the definition, cross out what cancels, factor out $h$, and cancel it:
\begin{align*}
f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\
&=\lim_{h\to0}\frac{(2x^2+4xh+2h^2)-(2x^2)}{h}\\
&=\lim_{h\to0}\frac{\cancel{2x^2}+4xh+2h^2-\cancel{2x^2}}{h}\\
&=\lim_{h\to0}\frac{\cancel{h}(4x+2h)}{\cancel{h}}\\
&=\boxed{4x}
\end{align*}` + r`\eplot{-2}{2}{-8}{8}{\addplot[exblue,very thick,domain=-2:2]{2*x^2};\addplot[qorange,thick,domain=-2:2]{4*x};}` },
      { t: "Using the formula", body: r`From Example 7, $f'(x)=4x$ for $f(x)=2x^2$. Find the tangent slope at $x=1$.\soln
\textbf{Step 1:} Substitute directly into the formula $f'(x)=4x$.\\[3pt]
\textbf{Step 2:} $f'(1)=4(1)$.\\[3pt]
\textbf{Conclusion:} $4$ --- no limit needed.` },
      { t: "Linear", body: r`Differentiate $f(x)=5x-3$ using the definition.\soln
\textbf{Step 1:} Find $f(x+h)$: $f(x+h)=5(x+h)-3=5x+5h-3$.\\[3pt]
\textbf{Step 2:} Substitute into the definition, cross out what cancels, and cancel $h$:
\begin{align*}
f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\
&=\lim_{h\to0}\frac{(5x+5h-3)-(5x-3)}{h}\\
&=\lim_{h\to0}\frac{\cancel{5x}+5h-\cancel{3}-\cancel{5x}+\cancel{3}}{h}\\
&=\lim_{h\to0}\frac{5\cancel{h}}{\cancel{h}}\\
&=\boxed{5}
\end{align*}
A line's derivative is its constant slope.` },
    ],
    questions: [
      { ask: r`Using the definition, differentiate $f(x)=x^2$.` },
      { ask: r`Using the definition, differentiate $f(x)=x^2+5x$.` },
      { ask: r`Using the definition, differentiate $f(x)=2x^2$.` },
      { ask: r`Given $f'(x)=2x$ for $f(x)=x^2$, find the tangent slope at $x=1$.` },
      { ask: r`Using the definition, differentiate $f(x)=5x-3$.` },
      { ask: r`Using the definition, differentiate $f(x)=4x^2-x$.` },
      { ask: r`Using the definition, differentiate $f(x)=\dfrac1x$.` },
      { ask: r`Given $f'(x)=2x$ for $f(x)=x^2$, find the tangent slope at $x=2$.` },
      { ask: r`Using the definition, differentiate $f(x)=x^2-3x$.` },
      { ask: r`Using the definition, differentiate $f(x)=7$.` },
      { ask: r`Given $f'(x)=2x$ for $f(x)=x^2$, find the tangent slope at $x=-1$.` },
      { ask: r`Using the definition, differentiate $f(x)=3x^2$.` },
      { ask: r`Using the definition, differentiate $f(x)=\sqrt{x}$ (rationalize).`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$2x$`, r`$2x+5$`, r`$4x$`, r`$2$`, r`$5$`, r`$8x-1$`, r`$-\tfrac1{x^2}$`, r`$4$`, r`$2x-3$`, r`$0$`, r`$-2$`, r`$6x$`, r`$\tfrac1{2\sqrt{x}}$`],
  },
];
