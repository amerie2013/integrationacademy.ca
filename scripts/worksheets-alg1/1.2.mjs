const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "1.2",
  title: "Rearranging Formulas & Solving Literal Equations",
  intro: "A literal equation has several letters (like a formula). Solving for one variable means isolating it while treating the others as constants. This worksheet practises rearranging common formulas.",
  lesson: [
    ["What a literal equation is", R`A literal equation contains more than one letter, such as $A = lw$. To solve for a variable, isolate it and treat every other letter as if it were a number.`],
    ["Same moves, letters instead of numbers", "Use the same inverse operations as with numbers — add/subtract, multiply/divide, distribute, combine — just carry the other letters along."],
    ["When the variable appears twice", "Collect every term containing the target variable on one side, factor it out, then divide by whatever multiplies it."],
  ],
  examples: [
    ["Example 1: Area of a rectangle", R`Solve $A = lw$ for $w$.`, R`Divide both sides by $l$: $w = \dfrac{A}{l}$.`],
    ["Example 2: Perimeter", R`Solve $P = 2l + 2w$ for $l$.`, R`Subtract $2w$: $P - 2w = 2l$. Divide by $2$: $l = \dfrac{P - 2w}{2}$.`],
    ["Example 3: Slope-intercept form", R`Solve $y = mx + b$ for $x$.`, R`Subtract $b$: $y - b = mx$. Divide by $m$: $x = \dfrac{y - b}{m}$.`],
    ["Example 4: A formula with a bracket", R`Solve $C = \dfrac{5}{9}(F - 32)$ for $F$.`, R`Multiply by $\dfrac{9}{5}$: $\dfrac{9}{5}C = F - 32$. Add $32$: $F = \dfrac{9}{5}C + 32$.`],
    ["Example 5: Standard form", R`Solve $2x + 3y = 12$ for $y$.`, R`Subtract $2x$: $3y = 12 - 2x$. Divide by $3$: $y = 4 - \dfrac{2}{3}x$.`],
    ["Example 6: Variable appears twice", R`Solve $ax + b = cx + d$ for $x$.`, R`Collect $x$-terms: $ax - cx = d - b$. Factor: $x(a - c) = d - b$. Divide: $x = \dfrac{d - b}{a - c}$.`],
  ],
  questions: [
    ["Problem 1", R`Solve $d = rt$ for $t$.`, R`$t = \dfrac{d}{r}$`],
    ["Problem 2", R`Solve $A = \dfrac{1}{2}bh$ for $h$.`, R`$h = \dfrac{2A}{b}$`],
    ["Problem 3", R`Solve $V = lwh$ for $h$.`, R`$h = \dfrac{V}{lw}$`],
    ["Problem 4", R`Solve $P = 2l + 2w$ for $w$.`, R`$w = \dfrac{P - 2l}{2}$`],
    ["Problem 5", R`Solve $y = mx + b$ for $m$.`, R`$m = \dfrac{y - b}{x}$`],
    ["Problem 6", R`Solve $3x + 4y = 24$ for $y$.`, R`$y = 6 - \dfrac{3}{4}x$`],
    ["Problem 7", R`Solve $I = Prt$ for $r$.`, R`$r = \dfrac{I}{Pt}$`],
    ["Problem 8", R`Solve $C = 2\pi r$ for $r$.`, R`$r = \dfrac{C}{2\pi}$`],
    ["Problem 9", R`Solve $ax - b = c$ for $x$.`, R`$x = \dfrac{c + b}{a}$`],
    ["Problem 10", R`Solve $\dfrac{x}{a} = b$ for $x$.`, R`$x = ab$`],
    ["Problem 11", R`Solve $F = \dfrac{9}{5}C + 32$ for $C$.`, R`$C = \dfrac{5}{9}(F - 32)$`],
    ["Problem 12", R`Solve $S = 2\pi r^2 + 2\pi r h$ for $h$.`, R`$h = \dfrac{S - 2\pi r^2}{2\pi r}$`],
  ],
};
