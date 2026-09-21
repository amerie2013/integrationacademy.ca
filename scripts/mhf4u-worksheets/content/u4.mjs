// MHF4U Unit 4 worksheets — Exponential & Logarithmic Functions.
const r = String.raw;
const U = "4: Exponential and Logarithmic Functions";

// pgfplots: log base b is ln(x)/ln(b). Exponential 2^x, 0.5^x render directly.
const expPlot = r`\eplot{-3}{3}{-1}{9}{\addplot[exblue,very thick,domain=-3:3.1,samples=80]{2^x};}`;
const logPlot = r`\eplot{0}{8}{-4}{4}{\addplot[exblue,very thick,domain=0.08:8,samples=140]{ln(x)/ln(2)};}`;
const invPlot = r`\eplot{-4}{8}{-4}{8}{\addplot[exblue,very thick,domain=-4:3,samples=80]{2^x};\addplot[qorange,very thick,domain=0.08:8,samples=140]{ln(x)/ln(2)};\addplot[gray,dashed,domain=-4:8]{x};}`;
const gdPlot = r`\eplot{-3}{3}{-1}{9}{\addplot[exblue,very thick,domain=-3:3.1,samples=80]{2^x};\addplot[qorange,very thick,domain=-3.1:3,samples=80]{0.5^x};}`;

// ── Unit 4 worksheet helpers: worked-solution body builder and a labelled-point plot ──
const W = (prompt, steps, ans, plot = "") =>
  prompt + String.raw`\soln ` + steps.map(([l, t], i) => String.raw`\textbf{Step ${i + 1}${l ? ` (${l})` : ""}:} ${t}`).join("\n\n") + "\n\n" + String.raw`\textbf{Answer:} ${ans}` + (plot ? "\n\n" + plot : "");
// pl(xmin,xmax,ymin,ymax,{curves:[{f,dom,col}],v:[x..],h:[y..],pts:[[x,y,label?,pos?]]})
const pl = (xmin, xmax, ymin, ymax, o) => {
  let b = "";
  for (const c of o.curves) b += String.raw`\addplot[${c.col ?? "exblue"},very thick,domain=${c.dom},samples=${c.s ?? 120}]{${c.f}};`;
  for (const x of o.v ?? []) b += String.raw`\draw[dashed,gray] (axis cs:${x},${ymin})--(axis cs:${x},${ymax});`;
  for (const y of o.h ?? []) b += String.raw`\draw[dashed,gray] (axis cs:${xmin},${y})--(axis cs:${xmax},${y});`;
  const pts = o.pts ?? [];
  if (pts.length) b += String.raw`\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {${pts.map(([x, y]) => `(${x},${y})`).join(" ")}};`;
  for (const [x, y, t, pos] of pts) if (t !== false) b += String.raw`\node[font=\tiny,${pos ?? "above right"}] at (axis cs:${x},${y}) {$${t ?? `(${x},${y})`}$};`;
  const xt = o.xt ?? Math.max(1, Math.round((xmax - xmin) / 5)), yt = o.yt ?? Math.max(1, Math.round((ymax - ymin) / 5));
  return String.raw`\eplotx{${xmin}}{${xmax}}{${ymin}}{${ymax}}{${xt}}{${yt}}{${b}}`;
};

export default [
  {
    code: "4.1", unit: U, title: "Logarithms & the Laws of Logarithms",
    intro: r`A logarithm answers "what exponent?": $\log_b x=y\iff b^y=x$. The laws turn products, quotients and powers into sums, differences and multiples. In every step write the \textbf{whole expression or equation}, and name the law you use.`,
    ideas: [r`Switch forms: $\log_b x=y\iff b^y=x$; the base stays the base and the exponent is the logarithm. The argument $x$ must be positive.`, r`Product $\log_b(xy)=\log_b x+\log_b y$; Quotient $\log_b\frac{x}{y}=\log_b x-\log_b y$; Power $\log_b(x^n)=n\log_b x$.`, r`Change of base: $\log_b x=\dfrac{\log x}{\log b}$. Mistakes to avoid: $\log(x+y)\ne\log x+\log y$.`],
    examples: [
      { t: "Evaluate", body: W(r`Find $\log_2 64$.`, [["ask the question", r`$\log_2 64$ asks: 2 to what power gives $64$?`], ["exponential form", r`Write $\log_2 64=y$ as $2^y=64$.`], ["solve", r`Since $64=2^6$, the equation $2^y=64$ becomes $2^y=2^6$, so $y=6$.`], ["check", r`$2^6=64$ $\checkmark$; the point $(64,6)$ is on the graph of $y=\log_2x$.`]], r`$\log_2 64=6$.`, pl(0, 70, -2, 7, { curves: [{ f: "ln(x)/ln(2)", dom: "0.05:70" }], v: [0], pts: [[2, 1, "(2,1)", "below right"], [8, 3, "(8,3)", "below right"], [64, 6, "(64,6)", "below left"]], xt: 10, yt: 2 })) },
      { t: "Convert to log form", body: W(r`Write $10^4=10000$ in logarithmic form.`, [["identify the parts", r`In $10^4=10000$ the base is $10$, the exponent is $4$ and the result is $10000$.`], ["logarithmic form", r`The exponent is the logarithm and the result is the argument: $\log_{10}10000=4$, i.e.\ $\log10000=4$ (no written base means base $10$).`], ["check", r`Reverse it: $\log_{10}10000=4\iff10^4=10000$ $\checkmark$.`]], r`$\log10000=4$.`) },
      { t: "Evaluate", body: W(r`Find $\log_5 25$.`, [["exponential form", r`Write $\log_525=y$ as $5^y=25$.`], ["solve", r`Since $25=5^2$, $5^y=25$ becomes $5^y=5^2$, so $y=2$.`], ["check", r`$5^2=25$ $\checkmark$; the points $(5,1)$ and $(25,2)$ are on $y=\log_5x$.`]], r`$\log_525=2$.`, pl(0, 30, -2, 3, { curves: [{ f: "ln(x)/ln(5)", dom: "0.05:30" }], v: [0], pts: [[5, 1, "(5,1)", "below right"], [25, 2, "(25,2)", "below right"]], xt: 5, yt: 1 })) },
      { t: "Product law", body: W(r`Simplify $\log_2(8\cdot16)$.`, [["product law", r`$\log_2(8\cdot16)=\log_28+\log_216$.`], ["evaluate each term", r`$\log_28+\log_216=3+4=7$, because $2^3=8$ and $2^4=16$.`], ["check", r`$8\cdot16=128=2^7$, so $\log_2128=7$ $\checkmark$.`]], r`$\log_2(8\cdot16)=7$.`, pl(0, 135, -2, 8, { curves: [{ f: "ln(x)/ln(2)", dom: "0.05:135" }], v: [0], pts: [[8, 3, "(8,3)", "below right"], [16, 4, "(16,4)", "below right"], [128, 7, "(128,7)", "below left"]], xt: 20, yt: 2 })) },
      { t: "Power law", body: W(r`Simplify $\log_3(9^3)$.`, [["power law", r`$\log_3(9^3)=3\log_39$.`], ["evaluate", r`$3\log_39=3\cdot2=6$, because $3^2=9$.`], ["check", r`$9^3=(3^2)^3=3^6$, so $\log_3(3^6)=6$ $\checkmark$.`]], r`$\log_3(9^3)=6$.`) },
      { t: "Evaluate", body: W(r`Find $\log_7 49$.`, [["exponential form", r`Write $\log_749=y$ as $7^y=49$.`], ["solve", r`Since $49=7^2$, $7^y=7^2$ gives $y=2$.`], ["check", r`$7^2=49$ $\checkmark$; the point $(49,2)$ is on $y=\log_7x$.`]], r`$\log_749=2$.`, pl(0, 55, -2, 3, { curves: [{ f: "ln(x)/ln(7)", dom: "0.05:55" }], v: [0], pts: [[7, 1, "(7,1)", "below right"], [49, 2, "(49,2)", "below left"]], xt: 10, yt: 1 })) },
      { t: "Base 10", body: W(r`Find $\log 100000$.`, [["base", r`$\log100000$ has no written base, so it is $\log_{10}100000$.`], ["exponential form", r`Write $\log_{10}100000=y$ as $10^y=100000=10^5$, so $y=5$.`], ["check", r`Count the zeros: $100000$ has $5$ zeros, so $\log100000=5$ $\checkmark$.`]], r`$\log100000=5$.`) },
      { t: "Quotient law", body: W(r`Simplify $\log_2\dfrac{32}{4}$.`, [["quotient law", r`$\log_2\dfrac{32}{4}=\log_232-\log_24$.`], ["evaluate", r`$\log_232-\log_24=5-2=3$.`], ["check", r`$\dfrac{32}{4}=8=2^3$, so $\log_28=3$ $\checkmark$.`]], r`$\log_2\dfrac{32}{4}=3$.`, pl(0, 36, -2, 6, { curves: [{ f: "ln(x)/ln(2)", dom: "0.05:36" }], v: [0], pts: [[4, 2, "(4,2)", "below right"], [8, 3, "(8,3)", "below right"], [32, 5, "(32,5)", "below left"]], xt: 5, yt: 1 })) },
      { t: "Change of base", body: W(r`Express $\log_2 10$ with base-10 logs and evaluate it.`, [["change of base", r`$\log_210=\dfrac{\log10}{\log2}$.`], ["calculate", r`$\dfrac{\log10}{\log2}=\dfrac{1}{0.3010}\approx3.32$.`], ["check", r`$2^3=8<10<16=2^4$, so an exponent between $3$ and $4$ is reasonable $\checkmark$.`]], r`$\log_210\approx3.32$.`, pl(0, 18, -2, 5, { curves: [{ f: "ln(x)/ln(2)", dom: "0.05:18" }], v: [0], pts: [[8, 3, "(8,3)", "below right"], [10, 3.32, "(10,3.32)", "below right"], [16, 4, "(16,4)", "below right"]], xt: 4, yt: 1 })) },
    ],
    questions: [
      { ask: r`Evaluate $\log_2 16$.` },
      { ask: r`Write $3^4=81$ in log form.` },
      { ask: r`Evaluate $\log 10^6$.` },
      { ask: r`Simplify $\log_2(16\cdot32)$.` },
      { ask: r`Simplify $\log_2(4^5)$.` },
      { ask: r`Evaluate $\log_4 64$.` },
      { ask: r`Simplify $\log_2\dfrac{64}{8}$.` },
      { ask: r`Evaluate $\log_2 1$.` },
      { ask: r`Express $\log_3 20$ with base-10 logs.` },
      { ask: r`Simplify $\log_b b^7$.` },
      { ask: r`Evaluate $\log_{10} 0.01$.` },
      { ask: r`Simplify $\log 2+\log 5$.` },
      { ask: r`Write $\log_2 40$ as a sum/difference of $\log_2 2,\log_2 5$ (note $40=2^3\cdot5$).`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$\log_216=y\iff2^y=16=2^4$, so $y=4$`, r`base $3$, exponent $4$, result $81$: $\log_381=4$`, r`$\log10^6=\log_{10}10^6=6$, since $10^6=10^6$`, r`$\log_2(16\cdot32)=\log_216+\log_232=4+5=9$`, r`$\log_2(4^5)=5\log_24=5\cdot2=10$`, r`$\log_464=y\iff4^y=64=4^3$, so $y=3$`, r`$\log_2\dfrac{64}{8}=\log_264-\log_28=6-3=3$`, r`$\log_21=y\iff2^y=1=2^0$, so $y=0$`, r`$\log_320=\dfrac{\log20}{\log3}$ (base-10 logs)`, r`$\log_bb^7=7\log_bb=7\cdot1=7$`, r`$\log_{10}0.01=y\iff10^y=0.01=10^{-2}$, so $y=-2$`, r`$\log2+\log5=\log(2\cdot5)=\log10=1$`, r`$\log_240=\log_2(2^3\cdot5)=\log_22^3+\log_25=3\log_22+\log_25=3+\log_25$`],
  },
  {
    code: "4.2", unit: U, title: "Graphs of Logarithmic Functions",
    intro: r`$y=\log_b x$ is the reflection of $y=b^x$ in $y=x$: vertical asymptote $x=0$, domain $x>0$, range all reals, through $(1,0)$. In every step write the \textbf{whole function}, e.g.\ \emph{the argument of $y=\log(x-2)$ must be positive}.`,
    ideas: [r`VA at $x=0$; domain $x>0$ (the argument must be positive); range all reals.`, r`Passes through $(1,0)$ and $(b,1)$; increasing for $b>1$.`, r`For $y=a\log_b\big(k(x-d)\big)+c$ the VA is $x=d$ and points map by $(x,y)\to\left(\tfrac xk+d,\ ay+c\right)$.`],
    examples: [
      { t: "The log graph", body: W(r`Sketch $y=\log_4 x$.`, [["vertical asymptote and domain", r`The argument of $y=\log_4x$ must be positive, so the domain is $x>0$ and the VA is $x=0$.`], ["key points", r`From $4^y=x$: $y=-1\Rightarrow x=\tfrac14$; $y=0\Rightarrow x=1$; $y=1\Rightarrow x=4$; $y=2\Rightarrow x=16$. So $\left(\tfrac14,-1\right),(1,0),(4,1),(16,2)$ are on $y=\log_4x$.`], ["shape", r`The base $4>1$, so the curve is increasing, with range all reals.`]], r`$y=\log_4x$: VA $x=0$, increasing, through $(1,0)$ and $(4,1)$.`, pl(0, 18, -3, 3, { curves: [{ f: "ln(x)/ln(4)", dom: "0.05:18" }], v: [0], pts: [[0.25, -1, "(1/4,-1)", "right"], [1, 0, "(1,0)", "below right"], [4, 1, "(4,1)", "below right"], [16, 2, "(16,2)", "below left"]], xt: 4, yt: 1 })) },
      { t: "Domain", body: W(r`Domain of $y=\log x$?`, [["positive argument", r`The argument of $y=\log x$ must be positive: $x>0$.`], ["test values", r`$y=\log5$ is defined, but $y=\log0$ and $y=\log(-3)$ are not.`]], r`the domain of $y=\log x$ is $x>0$.`, pl(0, 12, -2, 3, { curves: [{ f: "log10(x)", dom: "0.05:12" }], v: [0], pts: [[1, 0, "(1,0)", "below right"], [10, 1, "(10,1)", "below right"]], xt: 2, yt: 1 })) },
      { t: "Inverse pair", body: W(r`How are $y=5^x$ and $y=\log_5 x$ related?`, [["swap x and y", r`Start from $y=5^x$ and swap $x$ and $y$: $x=5^y\iff y=\log_5x$.`], ["points swap", r`A point $(a,b)$ on $y=5^x$ becomes $(b,a)$ on $y=\log_5x$: $(0,1)\to(1,0)$ and $(1,5)\to(5,1)$.`], ["reflect", r`The graphs are mirror images across the line $y=x$; the horizontal asymptote $y=0$ of $y=5^x$ becomes the vertical asymptote $x=0$ of $y=\log_5x$.`]], r`$y=5^x$ and $y=\log_5x$ are inverses (reflections in $y=x$).`, pl(-2, 6, -2, 6, { curves: [{ f: "5^x", dom: "-2:1.1", s: 80 }, { f: "ln(x)/ln(5)", dom: "0.05:6" }, { f: "x", dom: "-2:6", col: "gray,dashed" }], v: [0], pts: [[0, 1, "(0,1)", "above left"], [1, 5, "(1,5)", "right"], [1, 0, "(1,0)", "below right"], [5, 1, "(5,1)", "below right"]], xt: 2, yt: 2 })) },
      { t: "Vertical asymptote", body: W(r`VA of $y=\log x$?`, [["look near zero", r`For $y=\log x$: $\log0.1=-1$, $\log0.001=-3$, $\log0.000001=-6$. As $x\to0^+$, $y\to-\infty$.`], ["asymptote", r`The curve $y=\log x$ falls without bound but never reaches the y-axis.`]], r`the vertical asymptote of $y=\log x$ is $x=0$.`) },
      { t: "Key point", body: W(r`What point is on every graph $y=\log_b x$?`, [["log of 1", r`For $y=\log_bx$ set $x=1$: $\log_b1=y\iff b^y=1$, so $y=0$ for every base $b$.`], ["also (b, 1)", r`Since $\log_bb=1$, the point $(b,1)$ is also on $y=\log_bx$: $(2,1)$, $(5,1)$, $(10,1)$.`]], r`$(1,0)$, whatever the base.`, pl(0, 12, -2, 3, { curves: [{ f: "ln(x)/ln(2)", dom: "0.05:12" }, { f: "ln(x)/ln(5)", dom: "0.05:12", col: "qorange" }, { f: "log10(x)", dom: "0.05:12", col: "red" }], v: [0], pts: [[1, 0, "(1,0)", "below right"]], xt: 2, yt: 1 })) },
      { t: "Transformation", body: W(r`VA of $y=\log(x-2)$?`, [["positive argument", r`The argument of $y=\log(x-2)$ must be positive: $x-2>0\Rightarrow x>2$.`], ["asymptote", r`As $x\to2^+$, $y=\log(x-2)\to-\infty$, so the VA is $x=2$: the graph of $y=\log x$ has moved right $2$.`], ["points", r`$(1,0)\to(3,0)$ and $(10,1)\to(12,1)$. Check: $\log(3-2)=\log1=0$ $\checkmark$.`]], r`the vertical asymptote of $y=\log(x-2)$ is $x=2$.`, pl(0, 14, -3, 3, { curves: [{ f: "log10(x-2)", dom: "2.05:14" }], v: [2], pts: [[3, 0, "(3,0)", "below right"], [12, 1, "(12,1)", "below left"]], xt: 2, yt: 1 })) },
      { t: "Range", body: W(r`Range of $y=\log x$?`, [["can y be any number?", r`For $y=\log x$, every real $y$ has an $x$ with $\log x=y$, namely $x=10^y$.`], ["examples", r`$y=5$ comes from $x=10^5$; $y=-5$ comes from $x=10^{-5}$.`]], r`the range of $y=\log x$ is all real numbers.`) },
      { t: "Inverse", body: W(r`Inverse of $y=7^x$?`, [["swap x and y", r`Start from $y=7^x$ and swap: $x=7^y$.`], ["logarithmic form", r`$x=7^y$ is the same as $y=\log_7x$.`], ["check with a point", r`$(1,7)$ on $y=7^x$ becomes $(7,1)$ on $y=\log_7x$, and $\log_77=1$ $\checkmark$.`]], r`the inverse of $y=7^x$ is $y=\log_7x$.`) },
      { t: "Transformation", body: W(r`VA of $y=\log(x+6)$?`, [["positive argument", r`The argument of $y=\log(x+6)$ must be positive: $x+6>0\Rightarrow x>-6$.`], ["asymptote", r`As $x\to-6^+$, $y=\log(x+6)\to-\infty$, so the VA is $x=-6$: the graph of $y=\log x$ has moved left $6$.`], ["points", r`$(1,0)\to(-5,0)$ and $(10,1)\to(4,1)$. Check: $\log(4+6)=\log10=1$ $\checkmark$.`]], r`the vertical asymptote of $y=\log(x+6)$ is $x=-6$.`, pl(-8, 8, -3, 3, { curves: [{ f: "log10(x+6)", dom: "-5.95:8" }], v: [-6], pts: [[-5, 0, "(-5,0)", "below right"], [4, 1, "(4,1)", "below right"]], xt: 2, yt: 1 })) },
    ],
    questions: [
      { ask: r`Domain of $y=\log_6 x$?` },
      { ask: r`VA of $y=\log(x+8)$?` },
      { ask: r`What is $\log_b b$?` },
      { ask: r`Is $y=\log_7 x$ increasing or decreasing?` },
      { ask: r`Inverse of $y=4^x$?` },
      { ask: r`Range of $y=\log x$?` },
      { ask: r`VA of $y=\log(x-5)$?` },
      { ask: r`Domain of $y=\log(x-1)$?` },
      { ask: r`Through which point does $y=\log_9 x$ pass on the x-axis?` },
      { ask: r`Inverse of $y=10^x$?` },
      { ask: r`VA of $y=\log(x)+4$?` },
      { ask: r`As $x\to0^+$, what does $y=\log x$ do?` },
      { ask: r`State the domain, range, VA and a key point of $y=\log_2(x-1)$.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`For $y=\log_6x$ the argument must be positive, so the domain is $x>0$`, r`For $y=\log(x+8)$: $x+8>0\Rightarrow x>-8$, so the VA is $x=-8$`, r`$\log_bb=y\iff b^y=b^1$, so $\log_bb=1$`, r`For $y=\log_7x$ the base $7>1$, so the function is increasing`, r`Swap $x$ and $y$ in $y=4^x$: $x=4^y\iff y=\log_4x$`, r`The range of $y=\log x$ is all reals (e.g.\ $\log10^5=5$ and $\log10^{-5}=-5$)`, r`For $y=\log(x-5)$: $x-5>0\Rightarrow x>5$, so the VA is $x=5$`, r`For $y=\log(x-1)$: $x-1>0\Rightarrow x>1$, so the domain is $x>1$`, r`Set $y=0$ in $y=\log_9x$: $\log_9x=0\Rightarrow x=9^0=1$, so the point is $(1,0)$`, r`Swap $x$ and $y$ in $y=10^x$: $x=10^y\iff y=\log x$ ($=\log_{10}x$)`, r`For $y=\log x+4$ the argument is still $x$, so $x>0$ and the VA is $x=0$ (the $+4$ only moves the graph up)`, r`For $y=\log x$: $\log0.01=-2$ and $\log0.0001=-4$, so $y\to-\infty$`, r`For $y=\log_2(x-1)$: $x-1>0$ gives domain $x>1$ and VA $x=1$; range all reals; key points $(1,0)\to(2,0)$ and $(2,1)\to(3,1)$, so $(2,0)$ and $(3,1)$ are on the graph`],
  },
  {
    code: "4.3", unit: U, title: "Solving Exponential & Logarithmic Equations",
    intro: r`Match bases and set exponents equal, or isolate the power and take logs of both sides; for log equations rewrite in exponential form and check the argument is positive. In every step write the \textbf{whole equation}. The solution of $f(x)=c$ is where the curve $y=f(x)$ meets the line $y=c$.`,
    ideas: [r`Same base: $b^{f}=b^{g}\Rightarrow f=g$. Write numbers as powers of the same base first.`, r`Different bases: isolate the power, then $b^x=c\Rightarrow x=\dfrac{\log c}{\log b}$.`, r`$\log_b x=k\Rightarrow x=b^k$; state the restriction (argument $>0$) and reject any solution that breaks it.`],
    examples: [
      { t: "Same base", body: W(r`Solve $2^x=\tfrac14$.`, [["common base", r`Write $\tfrac14=2^{-2}$, so $2^x=\tfrac14$ becomes $2^x=2^{-2}$.`], ["equate the exponents", r`Both sides have the base $2$, so $x=-2$.`], ["check", r`$2^{-2}=\tfrac1{2^2}=\tfrac14$ $\checkmark$. The curve $y=2^x$ meets $y=\tfrac14$ at $\left(-2,\tfrac14\right)$.`]], r`$x=-2$.`, pl(-4, 3, -1, 4, { curves: [{ f: "2^x", dom: "-4:3" }], h: [0.25], pts: [[-2, 0.25, "(-2,1/4)", "above right"]], xt: 1, yt: 1 })) },
      { t: "Same base", body: W(r`Solve $3^x=81$.`, [["common base", r`Write $81=3^4$, so $3^x=81$ becomes $3^x=3^4$.`], ["equate the exponents", r`$x=4$.`], ["check", r`$3^4=81$ $\checkmark$; the curve $y=3^x$ meets $y=81$ at $(4,81)$.`]], r`$x=4$.`, pl(-1, 5, -10, 95, { curves: [{ f: "3^x", dom: "-1:4.2" }], h: [81], pts: [[4, 81, "(4,81)", "below right"]], xt: 1, yt: 20 })) },
      { t: "Take logs", body: W(r`Solve $2^x=7$.`, [["why logs", r`$7$ is not a power of $2$, so the bases cannot be matched. Take the logarithm of both sides of $2^x=7$: $\log(2^x)=\log7$.`], ["power law", r`$\log(2^x)=\log7$ becomes $x\log2=\log7$.`], ["solve", r`$x=\dfrac{\log7}{\log2}\approx\dfrac{0.8451}{0.3010}\approx2.81$.`], ["check", r`$2^{2.81}\approx7$: $2^2=4$ and $2^3=8$, so an exponent just below $3$ is reasonable $\checkmark$.`]], r`$x\approx2.81$.`, pl(-1, 4, -1, 9, { curves: [{ f: "2^x", dom: "-1:3.2" }], h: [7], pts: [[2.81, 7, "(2.81,7)", "below right"]], xt: 1, yt: 2 })) },
      { t: "Log equation", body: W(r`Solve $\log_2 x=7$.`, [["restriction", r`The argument of $\log_2x=7$ must be positive: $x>0$.`], ["exponential form", r`Rewrite $\log_2x=7$ as $2^7=x$, so $x=128$.`], ["check", r`$128>0$ $\checkmark$ and $\log_2128=7$ because $2^7=128$ $\checkmark$.`]], r`$x=128$.`, pl(0, 140, -2, 9, { curves: [{ f: "ln(x)/ln(2)", dom: "0.05:140" }], v: [0], h: [7], pts: [[128, 7, "(128,7)", "below left"]], xt: 20, yt: 2 })) },
      { t: "Log equation", body: W(r`Solve $\log(x-1)=1$.`, [["restriction", r`The argument of $\log(x-1)=1$ must be positive: $x-1>0\Rightarrow x>1$.`], ["exponential form", r`Base $10$: $\log(x-1)=1$ becomes $x-1=10^1=10$.`], ["solve", r`$x-1=10\Rightarrow x=11$.`], ["check", r`$11>1$ $\checkmark$ and $\log(11-1)=\log10=1$ $\checkmark$.`]], r`$x=11$.`, pl(0, 14, -3, 3, { curves: [{ f: "log10(x-1)", dom: "1.05:14" }], v: [1], h: [1], pts: [[11, 1, "(11,1)", "below right"]], xt: 2, yt: 1 })) },
      { t: "Same base", body: W(r`Solve $7^x=343$.`, [["common base", r`Write $343=7^3$, so $7^x=343$ becomes $7^x=7^3$.`], ["equate the exponents", r`$x=3$.`], ["check", r`$7^3=7\cdot7\cdot7=343$ $\checkmark$.`]], r`$x=3$.`, pl(-1, 4, -30, 400, { curves: [{ f: "7^x", dom: "-1:3.2" }], h: [343], pts: [[3, 343, "(3,343)", "below right"]], xt: 1, yt: 100 })) },
      { t: "Log equation", body: W(r`Solve $\log_6 x=3$.`, [["restriction", r`The argument of $\log_6x=3$ must be positive: $x>0$.`], ["exponential form", r`Rewrite $\log_6x=3$ as $x=6^3=216$.`], ["check", r`$216>0$ $\checkmark$ and $\log_6216=3$ because $6^3=216$ $\checkmark$.`]], r`$x=216$.`, pl(0, 230, -1, 5, { curves: [{ f: "ln(x)/ln(6)", dom: "0.05:230" }], v: [0], h: [3], pts: [[216, 3, "(216,3)", "below left"]], xt: 50, yt: 1 })) },
      { t: "Rewrite first", body: W(r`Solve $2^{x+1}=16$.`, [["common base", r`Write $16=2^4$, so $2^{x+1}=16$ becomes $2^{x+1}=2^4$.`], ["equate the exponents", r`From $2^{x+1}=2^4$: $x+1=4$.`], ["solve", r`$x+1=4\Rightarrow x=3$.`], ["check", r`$2^{3+1}=2^4=16$ $\checkmark$.`]], r`$x=3$.`, pl(-2, 5, -2, 20, { curves: [{ f: "2^(x+1)", dom: "-2:3.3" }], h: [16], pts: [[3, 16, "(3,16)", "below right"]], xt: 1, yt: 4 })) },
      { t: "Take logs", body: W(r`Solve $5^x=30$.`, [["why logs", r`$30$ is not a power of $5$. Take the logarithm of both sides of $5^x=30$: $\log(5^x)=\log30$.`], ["power law", r`$\log(5^x)=\log30$ becomes $x\log5=\log30$.`], ["solve", r`$x=\dfrac{\log30}{\log5}\approx\dfrac{1.4771}{0.6990}\approx2.11$.`], ["check", r`$5^{2.11}\approx30$: $5^2=25$ and $5^3=125$ $\checkmark$.`]], r`$x\approx2.11$.`, pl(-1, 4, -10, 130, { curves: [{ f: "5^x", dom: "-1:3" }], h: [30], pts: [[2.11, 30, "(2.11,30)", "above left"]], xt: 1, yt: 30 })) },
    ],
    questions: [
      { ask: r`Solve $3^x=243$.` },
      { ask: r`Solve $2^x=128$.` },
      { ask: r`Solve $4^x=9$ (2 d.p.).` },
      { ask: r`Solve $\log_4 x=3$.` },
      { ask: r`Solve $\log(x+5)=2$.` },
      { ask: r`Solve $4^x=64$.` },
      { ask: r`Solve $2^{x-1}=32$.` },
      { ask: r`Solve $\log_2 x=6$.` },
      { ask: r`Solve $10^x=500$ (2 d.p.).` },
      { ask: r`Solve $\log(x-4)=2$.` },
      { ask: r`Solve $3^{2x}=81$.` },
      { ask: r`Solve $\log_5 x=2$.` },
      { ask: r`Solve $2^{x}=50$ to two decimal places, showing the log step.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`For $3^x=243$: $243=3^5$, so $3^x=3^5$ and $x=5$`, r`For $2^x=128$: $128=2^7$, so $2^x=2^7$ and $x=7$`, r`For $4^x=9$: take logs, $x\log4=\log9$, so $x=\dfrac{\log9}{\log4}\approx1.58$`, r`For $\log_4x=3$: $x>0$; exponential form $x=4^3=64$`, r`For $\log(x+5)=2$: $x+5>0$; exponential form $x+5=10^2=100$, so $x=95$`, r`For $4^x=64$: $64=4^3$, so $4^x=4^3$ and $x=3$`, r`For $2^{x-1}=32$: $32=2^5$, so $x-1=5$ and $x=6$`, r`For $\log_2x=6$: $x>0$; exponential form $x=2^6=64$`, r`For $10^x=500$: take logs, $x=\log500\approx2.70$`, r`For $\log(x-4)=2$: $x-4>0$; exponential form $x-4=10^2=100$, so $x=104$`, r`For $3^{2x}=81$: $81=3^4$, so $3^{2x}=3^4$, $2x=4$ and $x=2$`, r`For $\log_5x=2$: $x>0$; exponential form $x=5^2=25$`, r`For $2^x=50$: take logs, $x\log2=\log50$, so $x=\dfrac{\log50}{\log2}\approx\dfrac{1.6990}{0.3010}\approx5.64$`],
  },
  {
    code: "4.4", unit: U, title: "Applications of Exponential & Log Models",
    intro: r`Model with $A=A_0\,b^{t/p}$ (growth $b>1$, decay $0<b<1$); use logs for doubling time and half-life; log scales (pH, dB, Richter) step by factors of ten. State the model, name what each letter means, and write the \textbf{whole model} in every step.`,
    ideas: [r`$A=A_0\,b^{t/p}$: $A_0$ is the start, $b$ the factor per period ($2$ for doubling, $\tfrac12$ for half-life), $p$ the length of a period.`, r`Finding a time: isolate the power, then match bases or take logs. Doubling time $=\dfrac{\log2}{\log(\text{growth factor})}$.`, r`$\text{pH}=-\log[\text{H}^+]$; each Richter step is $\times10$, so a difference of $d$ steps is $10^d$.`],
    examples: [
      { t: "Growth", body: W(r`$P=120\cdot2^{t/2}$. Find $P$ at $t=6$.`, [["read the model", r`In $P=120\cdot2^{t/2}$: $P_0=120$, the factor is $2$ (doubling) and the period is $p=2$.`], ["substitute", r`Put $t=6$ into $P=120\cdot2^{t/2}$: $P=120\cdot2^{6/2}=120\cdot2^3$.`], ["evaluate", r`$120\cdot8=960$.`], ["check", r`Three periods pass, so the amount doubles three times: $120\to240\to480\to960$ $\checkmark$.`]], r`$P=960$.`, pl(0, 8, -100, 1300, { curves: [{ f: "120*2^(x/2)", dom: "0:8" }], pts: [[0, 120, "(0,120)", "above right"], [2, 240, "(2,240)", "above left"], [4, 480, "(4,480)", "above left"], [6, 960, "(6,960)", "above left"]], xt: 2, yt: 300 })) },
      { t: "Half-life", body: W(r`$A=96\left(\tfrac12\right)^{t/2}$. Find $A$ at $t=6$.`, [["read the model", r`In $A=96\left(\tfrac12\right)^{t/2}$: $A_0=96$, the factor is $\tfrac12$ (halving) and the half-life is $p=2$.`], ["substitute", r`Put $t=6$ into $A=96\left(\tfrac12\right)^{t/2}$: $A=96\left(\tfrac12\right)^{6/2}=96\left(\tfrac12\right)^3$.`], ["evaluate", r`$96\cdot\tfrac18=12$.`], ["check", r`Three half-lives: $96\to48\to24\to12$ $\checkmark$.`]], r`$A=12$ mg.`, pl(0, 8, -10, 110, { curves: [{ f: "96*0.5^(x/2)", dom: "0:8" }], pts: [[0, 96, "(0,96)", "above right"], [2, 48, "(2,48)", "above right"], [4, 24, "(4,24)", "above right"], [6, 12, "(6,12)", "above right"]], xt: 2, yt: 20 })) },
      { t: "Doubling time", body: W(r`How long to double at 3\% /yr?`, [["model", r`The yearly growth factor is $1.03$, so $A=A_0(1.03)^t$.`], ["set up the doubling", r`Doubling means $A=2A_0$: $2A_0=A_0(1.03)^t$, so $2=1.03^t$.`], ["take logs", r`Take the logarithm of both sides of $2=1.03^t$: $\log2=t\log1.03$.`], ["solve", r`$t=\dfrac{\log2}{\log1.03}\approx\dfrac{0.3010}{0.01284}\approx23.4$.`], ["check", r`$1.03^{23.4}\approx2.00$ $\checkmark$.`]], r`about $23.4$ years.`, pl(0, 28, 0.5, 2.6, { curves: [{ f: "1.03^x", dom: "0:28" }], h: [2], pts: [[0, 1, "(0,1)", "above right"], [23.4, 2, "(23.4,2)", "below right"]], xt: 5, yt: 1 })) },
      { t: "pH scale", body: W(r`Find the pH if $[\text{H}^+]=10^{-6}$.`, [["substitute", r`$\text{pH}=-\log[\text{H}^+]$ becomes $\text{pH}=-\log(10^{-6})$.`], ["evaluate", r`$\log(10^{-6})=-6$, so $\text{pH}=-(-6)=6$.`]], r`$\text{pH}=6$.`) },
      { t: "Richter scale", body: W(r`How much stronger is magnitude 8 than magnitude 7?`, [["the scale", r`Each unit of magnitude multiplies the amplitude by $10$, so the ratio is $10^d$ where $d$ is the difference.`], ["difference", r`$d=8-7=1$.`], ["ratio", r`$10^d=10^1=10$.`]], r`$10\times$ the amplitude.`) },
      { t: "Growth", body: W(r`$P=250\cdot2^{t/4}$. Find $P$ at $t=12$.`, [["read the model", r`In $P=250\cdot2^{t/4}$: $P_0=250$, doubling, period $p=4$.`], ["substitute", r`Put $t=12$ into $P=250\cdot2^{t/4}$: $P=250\cdot2^{12/4}=250\cdot2^3$.`], ["evaluate", r`$250\cdot8=2000$.`], ["check", r`Three doublings: $250\to500\to1000\to2000$ $\checkmark$.`]], r`$P=2000$.`, pl(0, 14, -200, 2400, { curves: [{ f: "250*2^(x/4)", dom: "0:14" }], pts: [[0, 250, "(0,250)", "above right"], [4, 500, "(4,500)", "above left"], [8, 1000, "(8,1000)", "above left"], [12, 2000, "(12,2000)", "above left"]], xt: 2, yt: 500 })) },
      { t: "Half-life", body: W(r`$A=200\left(\tfrac12\right)^{t/6}$. Find $A$ at $t=12$.`, [["read the model", r`In $A=200\left(\tfrac12\right)^{t/6}$: $A_0=200$, halving, half-life $p=6$.`], ["substitute", r`Put $t=12$ into $A=200\left(\tfrac12\right)^{t/6}$: $A=200\left(\tfrac12\right)^{12/6}=200\left(\tfrac12\right)^2$.`], ["evaluate", r`$200\cdot\tfrac14=50$.`], ["check", r`Two half-lives: $200\to100\to50$ $\checkmark$.`]], r`$A=50$.`, pl(0, 14, -20, 230, { curves: [{ f: "200*0.5^(x/6)", dom: "0:14" }], pts: [[0, 200, "(0,200)", "above right"], [6, 100, "(6,100)", "above right"], [12, 50, "(12,50)", "above right"]], xt: 2, yt: 50 })) },
      { t: "Doubling time", body: W(r`How long to double at 6\% /yr?`, [["model", r`The yearly growth factor is $1.06$, so $A=A_0(1.06)^t$.`], ["set up the doubling", r`$2A_0=A_0(1.06)^t$, so $2=1.06^t$.`], ["take logs and solve", r`Take logs of both sides of $2=1.06^t$: $\log2=t\log1.06$, so $t=\dfrac{\log2}{\log1.06}\approx\dfrac{0.3010}{0.02531}\approx11.9$.`], ["check", r`$1.06^{11.9}\approx2.00$ $\checkmark$.`]], r`about $11.9$ years.`, pl(0, 16, 0.5, 2.6, { curves: [{ f: "1.06^x", dom: "0:16" }], h: [2], pts: [[0, 1, "(0,1)", "above right"], [11.9, 2, "(11.9,2)", "below right"]], xt: 2, yt: 1 })) },
      { t: "Solve for time", body: W(r`$P=250\cdot2^{t/4}$. When does $P$ reach $4000$?`, [["set up", r`Set $P=4000$ in $P=250\cdot2^{t/4}$: $250\cdot2^{t/4}=4000$.`], ["isolate the power", r`Divide both sides of $250\cdot2^{t/4}=4000$ by $250$: $2^{t/4}=16$.`], ["common base", r`$16=2^4$, so $2^{t/4}=2^4$.`], ["equate the exponents", r`$\dfrac t4=4\Rightarrow t=16$.`], ["check", r`Four doublings: $250\to500\to1000\to2000\to4000$ $\checkmark$.`]], r`$P=4000$ at $t=16$ (no logs needed).`, pl(0, 18, -300, 4600, { curves: [{ f: "250*2^(x/4)", dom: "0:17" }], h: [4000], pts: [[16, 4000, "(16,4000)", "below right"]], xt: 4, yt: 1000 })) },
    ],
    questions: [
      { ask: r`$P=300\cdot2^{t/6}$. Find $P$ at $t=12$.` },
      { ask: r`$A=240(\tfrac12)^{t/4}$. Find $A$ at $t=8$.` },
      { ask: r`How long to double at 8\% /yr (2 d.p.)?` },
      { ask: r`pH if $[\text{H}^+]=10^{-3}$?` },
      { ask: r`How much stronger is magnitude 6 than magnitude 3?` },
      { ask: r`$P=100\cdot2^{t/10}$. Find $P$ at $t=20$.` },
      { ask: r`$A=64(\tfrac12)^{t/2}$. Find $A$ at $t=6$.` },
      { ask: r`How long to triple at 5\% /yr (2 d.p.)?` },
      { ask: r`pH if $[\text{H}^+]=10^{-9}$?` },
      { ask: r`A quake is $10^4$ times stronger than another. What is the magnitude difference?` },
      { ask: r`$P=50\cdot3^{t/5}$. Find $P$ at $t=5$.` },
      { ask: r`How long for 5\% /yr growth to reach 1.5 times the start (2 d.p.)?` },
      { ask: r`Bacteria double every 3 h from 500. Write the model and find the count at $t=9$ h.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$P=300\cdot2^{12/6}=300\cdot2^2=1200$`, r`$A=240\left(\tfrac12\right)^{8/4}=240\left(\tfrac12\right)^2=60$`, r`Solve $2=1.08^t$: $t=\dfrac{\log2}{\log1.08}\approx9.01$ yr`, r`$\text{pH}=-\log(10^{-3})=3$`, r`$10^{6-3}=10^3=1000\times$`, r`$P=100\cdot2^{20/10}=100\cdot2^2=400$`, r`$A=64\left(\tfrac12\right)^{6/2}=64\left(\tfrac12\right)^3=8$`, r`Solve $3=1.05^t$: $t=\dfrac{\log3}{\log1.05}\approx22.52$ yr`, r`$\text{pH}=-\log(10^{-9})=9$`, r`$10^d=10^4\Rightarrow d=4$`, r`$P=50\cdot3^{5/5}=50\cdot3=150$`, r`Solve $1.5=1.05^t$: $t=\dfrac{\log1.5}{\log1.05}\approx8.31$ yr`, r`Model $P=500\cdot2^{t/3}$; $P(9)=500\cdot2^{9/3}=500\cdot2^3=4000$`],
  },
];
