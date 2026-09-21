// MHF4U Unit 2 worksheets — Polynomial Equations & Inequalities.
const r = String.raw;
const U = "2: Polynomial Equations and Inequalities";

// ── Worksheet 2.4: sign tables are generated (signs + solution set are computed) ──
import { signChart, lin, linPow } from "../../mhf4u-signtable.mjs";
const sigsOf = (c) => c.cols.filter((x) => x.kind === "int").map((x) => (x.p > 0 ? "+" : "-")).join(",");
const zerosOf = (c) => c.zeros.map((z) => z[1]).join(",\\,");
const ANS = (c) => `Zeros $${zerosOf(c)}$; signs $${sigsOf(c)}$; $${c.ineq}$, i.e.\\ $${c.interval}$`;
const st = (n, t) => `\\textbf{Step ${n}:} ${t}`;
const fin = (c) => `\\textbf{Answer:} $${c.ineq}$, i.e.\\ $${c.interval}$.`;
const W = {
  e1: signChart({ factors: [lin(2), lin(-4)], ineq: ">" }),
  e2: signChart({ factors: [lin(2), lin(-4)], ineq: "<" }),
  e3: signChart({ factors: [lin(-4), lin(3)], ineq: ">" }),
  e4: signChart({ factors: [lin(0), lin(-4), lin(1)], ineq: ">" }),
  e5: signChart({ factors: [linPow(3, 2), lin(-2)], ineq: ">", ans: "x>-2,\\ x\\ne3" }),
  e6: signChart({ factors: [lin(4), lin(-4)], ineq: "<" }),
  e7: signChart({ factors: [lin(5), lin(-2)], ineq: ">=" }),
  e8: signChart({ factors: [lin(-3), lin(1), lin(4)], ineq: "<" }),
  e9: signChart({ factors: [lin(0), lin(1), lin(-1)], ineq: "<" }),
};
const WQ = [
  signChart({ factors: [lin(-5), lin(3)], ineq: ">" }),
  signChart({ factors: [lin(4), lin(-3)], ineq: "<" }),
  signChart({ factors: [lin(6), lin(-6)], ineq: "<" }),
  signChart({ factors: [lin(0), lin(4), lin(-1)], ineq: ">" }),
  signChart({ factors: [lin(5), lin(-1)], ineq: ">=" }),
  signChart({ factors: [lin(3), lin(-3)], ineq: ">" }),
  signChart({ factors: [lin(-1), lin(4)], ineq: "<" }),
  signChart({ factors: [lin(0), lin(2), lin(-2)], ineq: "<" }),
  signChart({ factors: [linPow(2, 2), lin(-1)], ineq: ">", ans: "x>-1,\\ x\\ne2" }),
  signChart({ factors: [lin(2), lin(3)], ineq: "<=" }),
  signChart({ factors: [lin(0), lin(3), lin(-2)], ineq: "<" }),
  signChart({ factors: [lin(-3), lin(2)], ineq: ">=" }),
  signChart({ factors: [lin(0), lin(1), lin(2), lin(-1)], ineq: ">" }),
];

// Long-division tableau (grid layout, divisor bracket + subtraction rules) as a LaTeX tabular.
const texRow = (cells) => cells.join(" & ") + r` \\`;
const ldivTex = (divisor, quot, rows) => {
  const n = quot.length;
  const colspec = "c".repeat(n + 1);
  const lines = [];
  lines.push(r`\begin{center}\renewcommand{\arraystretch}{1.2}\begin{tabular}{` + colspec + `}`);
  lines.push("& " + texRow(quot));
  lines.push(r`\cline{2-` + (n + 1) + `}`);
  rows.forEach((row, i) => {
    const divCell = i === 0 ? r`\multicolumn{1}{r|}{` + divisor + `}` : r`\multicolumn{1}{r|}{}`;
    lines.push(divCell + " & " + texRow(row.cells));
    if (row.line) lines.push(r`\cline{2-` + (n + 1) + `}`);
  });
  lines.push(r`\end{tabular}\end{center}`);
  return lines.join("\n");
};
// Synthetic-division box: root | coefficients, products, a rule, then the sums.
const syndivTex = (root, coeffs, prods, sums) => {
  const n = coeffs.length;
  const colspec = "c".repeat(n + 1);
  const lines = [];
  lines.push(r`\begin{center}\renewcommand{\arraystretch}{1.2}\begin{tabular}{` + colspec + `}`);
  lines.push(r`\multicolumn{1}{r|}{` + root + `} & ` + texRow(coeffs));
  lines.push(r`\multicolumn{1}{r|}{} & ` + texRow(prods));
  lines.push(r`\cline{2-` + (n + 1) + `}`);
  lines.push(r`\multicolumn{1}{r|}{} & ` + texRow(sums));
  lines.push(r`\end{tabular}\end{center}`);
  return lines.join("\n");
};

export default [
  {
    code: "2.1", unit: U, title: "Dividing Polynomials",
    intro: r`Long division always works; synthetic division is a shortcut for dividing by $x-a$. Every result is a division statement $P(x)=D(x)Q(x)+R(x)$.`,
    ideas: [r`Long division: divide, multiply, subtract, bring down.`, r`Synthetic (by $x-a$): bring down, multiply by $a$, add.`, r`$\deg R<\deg D$; remainder $0$ means $D$ is a factor.`],
    examples: [
      { t: "Exact long division", body: r`$(x^2+8x+15)\div(x+3)$.\soln $x^2\div x=x$; subtract $x^2+3x$ → $5x+15$; $5x\div x=5$; subtract → $0$. Quotient $x+5$, R $0$. The graph confirms a zero at $x=-3$:\eplot{-7}{0}{-2}{6}{\addplot[exblue,very thick,domain=-6.4:-1.6]{x^2+8*x+15};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-3,0) (-5,0)};}` + ldivTex("$x+3$", ["","$x$","$+5$"], [{"cells":["$x^2$","$+8x$","$+15$"]},{"cells":["$x^2$","$+3x$",""],"line":true},{"cells":["","$+5x$","$+15$"]},{"cells":["","$+5x$","$+15$"],"line":true},{"cells":["","","$0$"]}]) },
      { t: "Exact long division", body: r`$(x^2+7x+10)\div(x+5)$.\soln Quotient $x+2$, R $0$, so $x^2+7x+10=(x+5)(x+2)$.` + ldivTex("$x+5$", ["", "$x$", "$+2$"], [
        { cells: ["$x^2$", "$+7x$", "$+10$"] },
        { cells: ["$x^2$", "$+5x$", ""], line: true },
        { cells: ["", "$+2x$", "$+10$"] },
        { cells: ["", "$+2x$", "$+10$"], line: true },
        { cells: ["", "", "$0$"] },
      ]) },
      { t: "Synthetic division", body: r`$(x^3-5x^2+2x+8)\div(x-4)$.\soln Coefficients $1,-5,2,8$, root $4$: bring down $1$; $1{\cdot}4=4,\ -5{+}4=-1$; $-1{\cdot}4=-4,\ 2{-}4=-2$; $-2{\cdot}4=-8,\ 8{-}8=0$. Quotient $x^2-x-2$, R $0$.` + syndivTex("$4$", ["$1$","$-5$","$2$","$8$"], ["","$4$","$-4$","$-8$"], ["$1$","$-1$","$-2$","$0$"]) },
      { t: "Division statement", body: r`Write the statement for $(x^2+2x-15)\div(x+5)$.\soln $x^2+2x-15=(x+5)(x-3)+0$.` + ldivTex("$x+5$", ["","$x$","$-3$"], [{"cells":["$x^2$","$+2x$","$-15$"]},{"cells":["$x^2$","$+5x$",""],"line":true},{"cells":["","$-3x$","$-15$"]},{"cells":["","$-3x$","$-15$"],"line":true},{"cells":["","","$0$"]}]) },
      { t: "Nonzero remainder", body: r`$(x^2+5x+9)\div(x+2)$.\soln Quotient $x+3$; $(x+2)(x+3)=x^2+5x+6$; subtract → $3$. So $x^2+5x+9=(x+2)(x+3)+3$.` + ldivTex("$x+2$", ["","$x$","$+3$"], [{"cells":["$x^2$","$+5x$","$+9$"]},{"cells":["$x^2$","$+2x$",""],"line":true},{"cells":["","$+3x$","$+9$"]},{"cells":["","$+3x$","$+6$"],"line":true},{"cells":["","","$+3$"]}]) },
      { t: "Synthetic", body: r`$(x^3+8)\div(x+2)$.\soln Coefficients $1,0,0,8$, root $-2$: $1,-2,4,0$. Quotient $x^2-2x+4$, R $0$.` + syndivTex("$-2$", ["$1$","$0$","$0$","$8$"], ["","$-2$","$4$","$-8$"], ["$1$","$-2$","$4$","$0$"]) },
      { t: "Linear over linear", body: r`$(x^2-x-12)\div(x-4)$.\soln Quotient $x+3$, R $0$, so $(x-4)(x+3)$.` + ldivTex("$x-4$", ["","$x$","$+3$"], [{"cells":["$x^2$","$-x$","$-12$"]},{"cells":["$x^2$","$-4x$",""],"line":true},{"cells":["","$+3x$","$-12$"]},{"cells":["","$+3x$","$-12$"],"line":true},{"cells":["","","$0$"]}]) },
      { t: "Remainder", body: r`$(x^2+6x+3)\div(x+1)$.\soln Quotient $x+5$, remainder $-2$: $x^2+6x+3=(x+1)(x+5)-2$.` + ldivTex("$x+1$", ["","$x$","$+5$"], [{"cells":["$x^2$","$+6x$","$+3$"]},{"cells":["$x^2$","$+x$",""],"line":true},{"cells":["","$+5x$","$+3$"]},{"cells":["","$+5x$","$+5$"],"line":true},{"cells":["","","$-2$"]}]) },
      { t: "Cubic remainder", body: r`$(x^3+3x^2-2)\div(x-1)$.\soln Synthetic with root $1$ on $1,3,0,-2$: $1,4,4,2$. Quotient $x^2+4x+4$, R $2$.` + syndivTex("$1$", ["$1$","$3$","$0$","$-2$"], ["","$1$","$4$","$4$"], ["$1$","$4$","$4$","$2$"]) },
    ],
    questions: [
      { ask: r`$(x^2+10x+21)\div(x+3)$?` },
      { ask: r`$(x^2-3x-10)\div(x-5)$?` },
      { ask: r`Synthetic: $(x^3-27)\div(x-3)$?` },
      { ask: r`$(x^2+3x+7)\div(x+2)$, with remainder?` },
      { ask: r`Write the division statement for $(x^2+8x+5)\div(x+3)$.` },
      { ask: r`$(x^2+9x+20)\div(x+4)$?` },
      { ask: r`$(x^3-8)\div(x-2)$?` },
      { ask: r`$(x^2-5x+6)\div(x-3)$?` },
      { ask: r`$(x^3+4x^2-7)\div(x-2)$, quotient and remainder?` },
      { ask: r`Is $x+5$ a factor of $x^2+3x-10$? (use the remainder)` },
      { ask: r`$(2x^2+7x+3)\div(x+3)$?` },
      { ask: r`$(x^2+1)\div(x+1)$, remainder?` },
      { ask: r`Divide $(x^3-2x^2-5x+6)\div(x-1)$ and state quotient and remainder.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$x+7$, R 0`, r`$x+2$, R 0`, r`$x^2+3x+9$, R 0`, r`$x+1$, R 5`, r`$(x+3)(x+5)-10$`, r`$x+5$, R 0`, r`$x^2+2x+4$, R 0`, r`$x-2$, R 0`, r`$x^2+6x+12$, R 17`, r`yes (R 0)`, r`$2x+1$, R 0`, r`$x-1$, R 2`, r`$x^2-x-6$, R 0`],
  },
  {
    code: "2.2", unit: U, title: "Remainder & Factor Theorems",
    intro: r`The remainder of $P(x)\div(x-a)$ is $P(a)$; and $x-a$ is a factor exactly when $P(a)=0$.`,
    ideas: [r`Remainder Theorem: remainder $=P(a)$.`, r`Factor Theorem: $x-a$ is a factor $\iff P(a)=0$.`, r`Rational Root Theorem: $\tfrac{p}{q}$ with $p\mid$ constant, $q\mid$ leading coeff.`],
    examples: [
      { t: "Find a remainder", body: r`Remainder of $P(x)=x^3-4x+3$ divided by $x-3$.\soln $P(3)=27-12+3=18$.` },
      { t: "Test a factor", body: r`Is $x-1$ a factor of $x^3+x^2-2$?\soln $P(1)=1+1-2=0$: yes. The graph crosses at $x=1$:\eplot{-2.5}{2}{-8}{8}{\addplot[exblue,very thick,domain=-2:1.5]{x^3+x^2-2};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(1,0)};}` },
      { t: "Sum of cubes", body: r`Is $x+2$ a factor of $x^3+8$?\soln $P(-2)=-8+8=0$: yes.` },
      { t: "Solve for k", body: r`Find $k$ so $x-2$ is a factor of $x^3+kx-6$.\soln $P(2)=8+2k-6=0\Rightarrow k=-1$.` },
      { t: "Find a zero", body: r`A rational zero of $P(x)=x^3-3x^2-x+3$?\soln Candidates $\pm1,\pm3$. $P(1)=1-3-1+3=0$, so $x=1$.` },
      { t: "Remainder", body: r`Remainder of $x^3+5$ divided by $x-2$.\soln $P(2)=13$.` },
      { t: "Difference of cubes", body: r`Is $x-5$ a factor of $x^3-125$?\soln $P(5)=125-125=0$: yes.` },
      { t: "Solve for k", body: r`Find $k$ so $x+2$ is a factor of $x^3+kx+10$.\soln $P(-2)=-8-2k+10=0\Rightarrow k=1$.` },
      { t: "Find a zero", body: r`A rational zero of $x^3-2x^2-9x+18$?\soln $P(2)=8-8-18+18=0$, so $x=2$.` },
    ],
    questions: [
      { ask: r`Remainder of $x^3+4$ divided by $x+1$?` },
      { ask: r`Is $x-4$ a factor of $x^3-64$?` },
      { ask: r`Is $x+2$ a factor of $x^3+2x^2-4x-8$?` },
      { ask: r`Find $k$ so $x-3$ is a factor of $x^3+kx^2-9$.` },
      { ask: r`A rational zero of $x^3+x^2-4x-4$?` },
      { ask: r`Remainder of $x^3-3x+2$ divided by $x-1$?` },
      { ask: r`Is $x-3$ a factor of $x^3-27$?` },
      { ask: r`Find $k$ so $x-2$ is a factor of $x^3-kx+2$.` },
      { ask: r`Remainder of $2x^3-x+5$ divided by $x+1$?` },
      { ask: r`Is $x+3$ a factor of $x^3+27$?` },
      { ask: r`List the rational-root candidates for $x^3-2x^2-5x+6$.` },
      { ask: r`Remainder of $x^4-1$ divided by $x-1$?` },
      { ask: r`Show that $x-1$ is a factor of $x^3-2x^2-x+2$, then state another factor.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$3$`, r`yes`, r`yes`, r`$k=-2$`, r`$x=-1$`, r`$0$`, r`yes`, r`$k=5$`, r`$4$`, r`yes`, r`$\pm1,\pm2,\pm3,\pm6$`, r`$0$`, r`$P(1)=0$; e.g. $(x-2)$ or $(x+1)$`],
  },
  {
    code: "2.3", unit: U, title: "Solving Polynomial Equations",
    intro: r`Factor fully — common factor, grouping, or the factor theorem — then set each factor to zero.`,
    ideas: [r`Take out the common factor first.`, r`Try grouping, or the factor theorem + division.`, r`A degree-$n$ polynomial has $n$ roots (with multiplicity).`],
    examples: [
      { t: "Common factor", body: r`Solve $3x^3-12x=0$.\soln $3x(x-2)(x+2)=0\Rightarrow x=0,2,-2$. The graph crosses at all three:\eplot{-3}{3}{-12}{14}{\addplot[exblue,very thick,domain=-2.4:2.4]{3*x^3-12*x};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-2,0) (0,0) (2,0)};}` },
      { t: "Factor a trinomial", body: r`Solve $x^3-2x^2-3x=0$.\soln $x(x-3)(x+1)=0\Rightarrow x=0,3,-1$:` + r`\eplot{-1.6}{3.6}{-7}{10}{\addplot[exblue,very thick,domain=-1.5:3.5]{x^3-2*x^2-3*x};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-1,0) (0,0) (3,0)};}` },
      { t: "Grouping", body: r`Solve $x^3+4x^2-4x-16=0$.\soln $x^2(x+4)-4(x+4)=(x+4)(x-2)(x+2)=0\Rightarrow x=-4,2,-2$:\eplot{-5}{3}{-20}{14}{\addplot[exblue,very thick,domain=-4.4:2.4]{x^3+4*x^2-4*x-16};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-4,0) (-2,0) (2,0)};}` },
      { t: "Factor theorem", body: r`Solve $x^3-3x^2-6x+8=0$.\soln $P(1)=1-3-6+8=0$; divide → $(x-1)(x-4)(x+2)=0\Rightarrow x=1,4,-2$:\eplot{-3}{5}{-12}{12}{\addplot[exblue,very thick,domain=-2.4:4.4]{x^3-3*x^2-6*x+8};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-2,0) (1,0) (4,0)};}` },
      { t: "Quadratic in $x^2$", body: r`Solve $x^4-3x^2-4=0$.\soln $(x^2-4)(x^2+1)=0$; $x^2+1\ne0$ for real $x$, so $x=\pm2$:\eplot{-2.6}{2.6}{-8}{14}{\addplot[exblue,very thick,domain=-2.4:2.4]{x^4-3*x^2-4};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-2,0) (2,0)};}` },
      { t: "Repeated factor", body: r`Solve $x^3-6x^2+9x=0$.\soln $x(x^2-6x+9)=x(x-3)^2=0\Rightarrow x=0,3$ (a double root at $3$, where the graph touches):\eplot{-1}{4.5}{-6}{7}{\addplot[exblue,very thick,domain=-0.5:4.2]{x^3-6*x^2+9*x};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(0,0) (3,0)};}` },
      { t: "Trinomial", body: r`Solve $x^3+x^2-6x=0$.\soln $x(x+3)(x-2)=0\Rightarrow x=0,-3,2$:\eplot{-4}{3}{-9}{10}{\addplot[exblue,very thick,domain=-3.4:2.4]{x^3+x^2-6*x};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-3,0) (0,0) (2,0)};}` },
      { t: "Grouping", body: r`Solve $x^3-2x^2-4x+8=0$.\soln $x^2(x-2)-4(x-2)=(x-2)(x-2)(x+2)=0\Rightarrow x=2$ (double), $x=-2$:\eplot{-3}{3.2}{-9}{12}{\addplot[exblue,very thick,domain=-2.4:3.0]{x^3-2*x^2-4*x+8};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-2,0) (2,0)};}` },
      { t: "Factor theorem", body: r`Solve $x^3+2x^2-11x-12=0$ (hint $x=-1$).\soln $(x+1)(x+4)(x-3)=0\Rightarrow x=-1,-4,3$:\eplot{-5}{4}{-23}{16}{\addplot[exblue,very thick,domain=-4.4:3.4]{x^3+2*x^2-11*x-12};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-4,0) (-1,0) (3,0)};}` },
    ],
    questions: [
      { ask: r`Solve $x^3-49x=0$.` },
      { ask: r`Solve $x^3+x^2-12x=0$.` },
      { ask: r`Solve $x^3-5x^2-x+5=0$ by grouping.` },
      { ask: r`Solve $x^3-x^2-14x+24=0$ (hint $x=2$).` },
      { ask: r`Solve $x^4-5x^2-36=0$.` },
      { ask: r`Solve $x^3-16x=0$.` },
      { ask: r`Solve $x^3-3x^2-4x=0$.` },
      { ask: r`Solve $x^3-x=0$.` },
      { ask: r`Solve $x^4-13x^2+36=0$.` },
      { ask: r`Solve $x^3+x^2-9x-9=0$ by grouping.` },
      { ask: r`Solve $x^3-2x^2-5x+6=0$ (hint $x=1$).` },
      { ask: r`Solve $2x^3-8x=0$.` },
      { ask: r`Solve $x^3-6x^2+11x-6=0$ (hint: try $x=1$).`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$0,7,-7$`, r`$0,-4,3$`, r`$5,1,-1$`, r`$2,-4,3$`, r`$\pm3$`, r`$0,4,-4$`, r`$0,4,-1$`, r`$0,1,-1$`, r`$\pm2,\pm3$`, r`$-1,3,-3$`, r`$1,3,-2$`, r`$0,2,-2$`, r`$1,2,3$`],
  },
  {
    code: "2.4", unit: U, title: "Polynomial Inequalities",
    intro: r`Find the zeros, then use a \textbf{sign table} to find the sign of the polynomial on every interval. The sign flips at odd multiplicity but not at even multiplicity.`,
    ideas: [r`Move everything to one side, factor completely, and find the zeros (with their multiplicities).`, r`Build a sign table: a column for each interval and each zero, a row for each factor and one for the product.`, r`Multiply the signs in each column ($-\times-=+$); keep the columns that satisfy the inequality, and include the zeros only for $\ge$ or $\le$.`],
    examples: [
      { t: "Product positive", body: r`Solve $(x-2)(x+4)>0$.\soln ` + st(1, r`It is already compared with $0$ and factored.`) + "\n\n" + st(2, r`Zeros: $x-2=0\Rightarrow x=2$ and $x+4=0\Rightarrow x=-4$, each of multiplicity $1$, so the sign changes at each. They split the number line into $x<-4$, $-4<x<2$ and $x>2$.`) + "\n\n" + st(3, r`Sign table (one test point in each interval):`) + W.e1.tex() + st(4, r`Keep the $\checkmark$ columns ($P>0$). The zeros give $0$, which is not $>0$, so they are excluded.`) + "\n\n" + fin(W.e1) + r` The graph is above the axis there:` + r`\eplot{-6}{4}{-10}{12}{\addplot[exblue,very thick,domain=-5.4:3.4]{(x-2)*(x+4)};\addplot[red,only marks,mark=*,mark size=1.6pt] coordinates {(-4,0) (2,0)};}` },
      { t: "Product negative", body: r`Solve $(x-2)(x+4)<0$.\soln ` + st(1, r`Same factors and zeros as Example 1, so the same table. Now we want $P<0$.`) + W.e2.tex() + st(2, r`Keep the $-$ column. The strict inequality excludes the zeros.`) + "\n\n" + fin(W.e2) },
      { t: "Factor first", body: r`Solve $x^2+x-12>0$.\soln ` + st(1, r`Factor: two numbers with product $-12$ and sum $1$ are $4$ and $-3$, so $(x+4)(x-3)>0$.`) + "\n\n" + st(2, r`Zeros $-4$ and $3$; sign table:`) + W.e3.tex() + st(3, r`Keep the $+$ columns.`) + "\n\n" + fin(W.e3) },
      { t: "Three factors", body: r`Solve $x(x+4)(x-1)>0$.\soln ` + st(1, r`Zeros $-4,\,0,\,1$, all of multiplicity $1$: four intervals, and the sign of $P$ alternates from one to the next.`) + W.e4.tex() + st(2, r`Keep the $+$ columns. Check: for a positive leading coefficient the right-most interval is $+$.`) + "\n\n" + fin(W.e4) },
      { t: "Even multiplicity", body: r`Solve $(x-3)^2(x+2)>0$.\soln ` + st(1, r`Zeros: $x=3$ (multiplicity $2$, even) and $x=-2$ (multiplicity $1$). The factor $(x-3)^2$ is never negative, so it does not change the sign of $P$ at $x=3$.`) + W.e5.tex() + st(2, r`$P$ is positive on both sides of $x=3$, but $P(3)=0$ is not $>0$, so $x=3$ is left out.`) + "\n\n" + fin(W.e5) },
      { t: "Difference of squares", body: r`Solve $x^2-16<0$.\soln ` + st(1, r`Factor: $x^2-16=(x-4)(x+4)$, so the zeros are $4$ and $-4$.`) + W.e6.tex() + st(2, r`Keep the $-$ column (strict, so the zeros are excluded).`) + "\n\n" + fin(W.e6) },
      { t: "With equality", body: r`Solve $x^2-3x-10\ge0$.\soln ` + st(1, r`Factor: two numbers with product $-10$ and sum $-3$ are $-5$ and $2$, so $(x-5)(x+2)\ge0$.`) + W.e7.tex() + st(2, r`The inequality is $\ge$, so the zero columns \emph{are} included along with the $+$ intervals.`) + "\n\n" + fin(W.e7) },
      { t: "Three factors", body: r`Solve $(x+3)(x-1)(x-4)<0$.\soln ` + st(1, r`Zeros $-3,\,1,\,4$, each of multiplicity $1$.`) + W.e8.tex() + st(2, r`Keep the $-$ columns.`) + "\n\n" + fin(W.e8) },
      { t: "Cubic", body: r`Solve $x^3-x<0$.\soln ` + st(1, r`Factor: take out $x$, then a difference of squares: $x^3-x=x(x-1)(x+1)$. Zeros $-1,\,0,\,1$.`) + W.e9.tex() + st(2, r`Keep the $-$ columns.`) + "\n\n" + fin(W.e9) },
    ],
    questions: [
      { ask: r`Solve $(x+5)(x-3)>0$.` },
      { ask: r`Solve $(x-4)(x+3)<0$.` },
      { ask: r`Solve $x^2-36<0$.` },
      { ask: r`Solve $x(x-4)(x+1)>0$.` },
      { ask: r`Solve $x^2-4x-5\ge0$.` },
      { ask: r`Solve $x^2-9>0$.` },
      { ask: r`Solve $(x+1)(x-4)<0$.` },
      { ask: r`Solve $x^3-4x<0$.` },
      { ask: r`Solve $(x-2)^2(x+1)>0$.` },
      { ask: r`Solve $x^2-5x+6\le0$.` },
      { ask: r`Solve $x(x-3)(x+2)<0$.` },
      { ask: r`Solve $x^2+x-6\ge0$.` },
      { ask: r`Solve $x(x-1)(x-2)(x+1)>0$ using a sign chart.`, challenge: true, ws: "3.5cm" },
    ],
    answers: WQ.map(ANS),
  },
];
