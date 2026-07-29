// ALG1 Chapter 1 — Linear Equations, Inequalities & Absolute Value.
// ~60 questions per topic (20 easy / 20 medium / 20 hard). Numeric answers are
// computed in code, so they're correct by construction.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";

const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);
const lin = (a, b) => `${a === 1 ? "" : a === -1 ? "-" : a}x ${sign(b)}`.replace("+ 0", "").replace("- 0", "").trim();

// ── 1.1 Multi-Step Equations in One Variable ─────────────────
function g11() {
  const q = [];
  // EASY — two-step ax + b = c
  for (let i = 0; i < 14; i++) {
    const x = ri(-6, 9), a = ri(2, 6), b = rnz(-9, 9), c = a * x + b;
    q.push(num("easy", `Solve for $x$: $${a}x ${sign(b)} = ${c}$.`, x, 0));
  }
  q.push(tf("easy", "To solve $2x = 10$ you divide both sides by 2.", true));
  q.push(tf("easy", "Adding the same number to both sides keeps an equation balanced.", true));
  q.push(mc("easy", "First step to solve $3x + 4 = 19$?", ["Subtract 4 from both sides", "Divide by 3 first", "Add 4 to both sides", "Multiply by 3"], 0));
  q.push(fill("easy", "The solution of $x + 7 = 12$ is $x =$ ___.", ["5"]));
  q.push(fill("easy", "The solution of $5x = 35$ is $x =$ ___.", ["7"]));
  q.push(num("easy", "Solve: $x - 8 = -3$.", 5, 0));
  // MEDIUM — variables both sides, and distribute
  for (let i = 0; i < 8; i++) {
    const x = ri(-5, 8), a = ri(3, 7), c = ri(1, 2), b = rnz(-8, 8), d = a * x + b - c * x;
    q.push(num("medium", `Solve for $x$: $${a}x ${sign(b)} = ${c}x ${sign(d)}$.`, x, 0));
  }
  for (let i = 0; i < 8; i++) {
    const x = ri(-5, 8), k = ri(2, 5), m = rnz(-6, 6), p = k * (x + m);
    q.push(num("medium", `Solve for $x$: $${k}(x ${sign(m)}) = ${p}$.`, x, 0));
  }
  q.push(mc("medium", "Solve $2(x - 3) = 10$.", ["$x = 8$", "$x = 2$", "$x = 5$", "$x = 7$"], 0));
  q.push(tf("medium", "The equation $3x + 1 = 3x - 4$ has no solution.", true, "Subtracting $3x$ leaves $1 = -4$, which is false."));
  q.push(fill("medium", "Solve $4(x + 1) = 20$: $x =$ ___.", ["4"]));
  q.push(num("medium", "Solve: $6x - 5 = 2x + 19$.", 6, 0));
  // HARD — nested / fractions
  for (let i = 0; i < 8; i++) {
    const x = ri(-4, 7), k = ri(2, 4), a = ri(2, 4), c = ri(1, 3), b = rnz(-5, 5);
    const d = k * a * x + k * b - c * x;
    q.push(num("hard", `Solve for $x$: $${k}(${a}x ${sign(b)}) = ${c}x ${sign(d)}$.`, x, 0));
  }
  for (let i = 0; i < 6; i++) {
    const x = 6 * ri(-2, 3), c = x / 3 + x / 2; // (x/3 + x/2) = 5x/6, x multiple of 6 → integer c
    q.push(num("hard", `Solve for $x$: $\\dfrac{x}{3} + \\dfrac{x}{2} = ${c}$.`, x, 0));
  }
  q.push(mc("hard", "How many solutions has $2(x + 3) = 2x + 6$?", ["Infinitely many", "No solution", "Exactly one", "Two"], 0, "Both sides are identical, so every $x$ works."));
  q.push(mc("hard", "How many solutions has $5x + 2 = 5x - 7$?", ["No solution", "Infinitely many", "One", "Zero is the solution"], 0));
  q.push(num("hard", "Solve: $\\dfrac{x}{2} - \\dfrac{1}{3} = \\dfrac{2}{3}$.", 2, 0));
  q.push(tf("hard", "Multiplying every term by the LCD is a valid way to clear fractions.", true));
  q.push(fill("hard", "Solve $3(2x - 4) = 2(x + 2)$: $x =$ ___.", ["4"]));
  q.push(num("hard", "Solve: $\\dfrac{2x}{3} = 8$.", 12, 0));
  return q;
}

// ── 1.2 Rearranging Formulas & Solving Literal Equations ─────
function g12() {
  const q = [];
  // EASY
  q.push(mcv("easy", "Solve $d = rt$ for $t$.", "$t = \\dfrac{d}{r}$", ["$t = dr$", "$t = \\dfrac{r}{d}$", "$t = d - r$"]));
  q.push(mcv("easy", "Solve $C = 2\\pi r$ for $r$.", "$r = \\dfrac{C}{2\\pi}$", ["$r = 2\\pi C$", "$r = \\dfrac{2\\pi}{C}$", "$r = C - 2\\pi$"]));
  q.push(mcv("easy", "Solve $F = ma$ for $a$.", "$a = \\dfrac{F}{m}$", ["$a = Fm$", "$a = \\dfrac{m}{F}$", "$a = F - m$"]));
  q.push(mcv("easy", "Solve $A = lw$ for $w$.", "$w = \\dfrac{A}{l}$", ["$w = Al$", "$w = A - l$", "$w = \\dfrac{l}{A}$"]));
  q.push(mcv("easy", "Solve $P = 4s$ for $s$.", "$s = \\dfrac{P}{4}$", ["$s = 4P$", "$s = P - 4$", "$s = \\dfrac{4}{P}$"]));
  q.push(mcv("easy", "Solve $y = x + b$ for $x$.", "$x = y - b$", ["$x = y + b$", "$x = b - y$", "$x = \\dfrac{y}{b}$"]));
  q.push(mcv("easy", "Solve $E = mc^2$ for $m$.", "$m = \\dfrac{E}{c^2}$", ["$m = Ec^2$", "$m = \\dfrac{c^2}{E}$", "$m = E - c^2$"]));
  q.push(tf("easy", "To solve $y = mx$ for $x$, divide both sides by $m$.", true));
  q.push(tf("easy", "In $A = \\tfrac12 bh$, the variables $b$ and $h$ are treated as constants when solving for one of them.", true));
  q.push(fill("easy", "Solve $2x = k$ for $x$: $x = \\dfrac{k}{\\text{___}}$.", ["2"]));
  q.push(mcv("easy", "Solve $V = IR$ for $R$.", "$R = \\dfrac{V}{I}$", ["$R = VI$", "$R = \\dfrac{I}{V}$", "$R = V - I$"]));
  q.push(mcv("easy", "Solve $W = Fd$ for $d$.", "$d = \\dfrac{W}{F}$", ["$d = WF$", "$d = \\dfrac{F}{W}$", "$d = W - F$"]));
  q.push(mcv("easy", "Solve $A = bh$ for $h$.", "$h = \\dfrac{A}{b}$", ["$h = Ab$", "$h = A - b$", "$h = \\dfrac{b}{A}$"]));
  q.push(mcv("easy", "Solve $p = 2a$ for $a$.", "$a = \\dfrac{p}{2}$", ["$a = 2p$", "$a = p - 2$", "$a = \\dfrac{2}{p}$"]));
  q.push(mcv("easy", "Solve $y = kx$ for $k$.", "$k = \\dfrac{y}{x}$", ["$k = yx$", "$k = \\dfrac{x}{y}$", "$k = y - x$"]));
  q.push(tf("easy", "Solving a formula for a variable means isolating it on one side.", true));
  q.push(mcv("easy", "Solve $m = \\dfrac{a+b}{2}$ for the sum $a+b$.", "$a+b = 2m$", ["$a+b = \\dfrac{m}{2}$", "$a+b = m - 2$", "$a+b = \\dfrac{2}{m}$"]));
  q.push(fill("easy", "Solve $C = \\pi d$ for $d$: $d = \\dfrac{C}{\\text{___}}$.", ["\\pi", "pi"]));
  q.push(mcv("easy", "Solve $T = 3n$ for $n$.", "$n = \\dfrac{T}{3}$", ["$n = 3T$", "$n = T - 3$", "$n = \\dfrac{3}{T}$"]));
  q.push(mcv("easy", "Solve $y = ax$ for $x$.", "$x = \\dfrac{y}{a}$", ["$x = ya$", "$x = y - a$", "$x = \\dfrac{a}{y}$"]));
  // MEDIUM
  q.push(mcv("medium", "Solve $P = 2l + 2w$ for $w$.", "$w = \\dfrac{P - 2l}{2}$", ["$w = P - 2l$", "$w = \\dfrac{P}{2} - l$ (equivalent shown as distractor)", "$w = 2P - l$"], "Also equal to $\\tfrac{P}{2} - l$."));
  q.push(mcv("medium", "Solve $A = \\tfrac12 bh$ for $h$.", "$h = \\dfrac{2A}{b}$", ["$h = \\dfrac{A}{2b}$", "$h = 2Ab$", "$h = \\dfrac{b}{2A}$"]));
  q.push(mcv("medium", "Solve $y = mx + b$ for $x$.", "$x = \\dfrac{y - b}{m}$", ["$x = \\dfrac{y + b}{m}$", "$x = y - b - m$", "$x = m(y - b)$"]));
  q.push(mcv("medium", "Solve $2x + 3y = 12$ for $y$.", "$y = \\dfrac{12 - 2x}{3}$", ["$y = 12 - 2x$", "$y = \\dfrac{2x - 12}{3}$", "$y = \\dfrac{12}{3} - 2x$"]));
  q.push(mcv("medium", "Solve $S = \\dfrac{n}{2}(a + l)$ for $(a+l)$.", "$a + l = \\dfrac{2S}{n}$", ["$a + l = \\dfrac{S}{2n}$", "$a + l = 2Sn$", "$a + l = \\dfrac{n}{2S}$"]));
  q.push(mcv("medium", "Solve $ax + b = c$ for $x$.", "$x = \\dfrac{c - b}{a}$", ["$x = \\dfrac{c + b}{a}$", "$x = c - b - a$", "$x = \\dfrac{a}{c - b}$"]));
  q.push(mcv("medium", "Solve $A = P(1 + rt)$ for $t$.", "$t = \\dfrac{A - P}{Pr}$", ["$t = \\dfrac{A}{P} - 1$ (distractor)", "$t = \\dfrac{A - P}{r}$", "$t = A - P - Pr$"]));
  q.push(mcv("medium", "Solve $V = \\pi r^2 h$ for $h$.", "$h = \\dfrac{V}{\\pi r^2}$", ["$h = \\dfrac{\\pi r^2}{V}$", "$h = V\\pi r^2$", "$h = \\dfrac{V}{\\pi r}$"]));
  q.push(mcv("medium", "Solve $y - y_1 = m(x - x_1)$ for $m$.", "$m = \\dfrac{y - y_1}{x - x_1}$", ["$m = (y - y_1)(x - x_1)$", "$m = \\dfrac{x - x_1}{y - y_1}$", "$m = y - y_1 - x + x_1$"]));
  q.push(mcv("medium", "Solve $ax - b = cx$ for $x$ (assume $a \\ne c$).", "$x = \\dfrac{b}{a - c}$", ["$x = \\dfrac{b}{a + c}$", "$x = \\dfrac{a - c}{b}$", "$x = b(a - c)$"]));
  q.push(tf("medium", "Solving $P = 2l + 2w$ for $l$ gives $l = \\dfrac{P - 2w}{2}$.", true));
  q.push(tf("medium", "Solving $A = \\tfrac12 bh$ for $b$ gives $b = \\dfrac{A}{2h}$.", false, "It's $b = \\dfrac{2A}{h}$."));
  q.push(fill("medium", "Solve $3x + y = 9$ for $y$: $y = 9 - \\text{___}$.", ["3x", "3 x"]));
  q.push(mcv("medium", "Solve $I = Prt$ for $r$.", "$r = \\dfrac{I}{Pt}$", ["$r = \\dfrac{I}{P + t}$", "$r = IPt$", "$r = \\dfrac{Pt}{I}$"]));
  q.push(mcv("medium", "Solve $D = \\dfrac{m}{V}$ for $V$.", "$V = \\dfrac{m}{D}$", ["$V = mD$", "$V = \\dfrac{D}{m}$", "$V = m - D$"]));
  q.push(mcv("medium", "Solve $2(x + y) = z$ for $y$.", "$y = \\dfrac{z}{2} - x$", ["$y = z - 2x$", "$y = 2z - x$", "$y = \\dfrac{z - x}{2}$"]));
  q.push(mcv("medium", "Solve $ax = bx + c$ for $x$ (assume $a \\ne b$).", "$x = \\dfrac{c}{a - b}$", ["$x = \\dfrac{c}{a + b}$", "$x = c(a - b)$", "$x = \\dfrac{a - b}{c}$"]));
  q.push(mcv("medium", "Solve $y = \\dfrac{x}{4} + 3$ for $x$.", "$x = 4(y - 3)$", ["$x = 4y - 3$", "$x = \\dfrac{y - 3}{4}$", "$x = 4y + 12$"]));
  q.push(fill("medium", "Solve $A = lw$ for $l$: $l = \\dfrac{A}{\\text{___}}$.", ["w"]));
  q.push(mcv("medium", "Solve $9C = 5(F - 32)$ for $F$.", "$F = \\dfrac{9C}{5} + 32$", ["$F = \\dfrac{5C}{9} + 32$", "$F = 9C - 32$", "$F = \\dfrac{9C - 32}{5}$"]));
  // HARD
  q.push(mcv("hard", "Solve $A = P + Prt$ for $P$.", "$P = \\dfrac{A}{1 + rt}$", ["$P = A - rt$", "$P = \\dfrac{A}{rt}$", "$P = A(1 + rt)$"], "Factor $P$: $A = P(1 + rt)$."));
  q.push(mcv("hard", "Solve $S = 2\\pi r^2 + 2\\pi rh$ for $h$.", "$h = \\dfrac{S - 2\\pi r^2}{2\\pi r}$", ["$h = \\dfrac{S}{2\\pi r} - r$ (distractor)", "$h = S - 2\\pi r^2$", "$h = \\dfrac{S - 2\\pi r^2}{2\\pi}$"]));
  q.push(mcv("hard", "Solve $\\dfrac{1}{f} = \\dfrac{1}{a} + \\dfrac{1}{b}$ for $f$.", "$f = \\dfrac{ab}{a + b}$", ["$f = a + b$", "$f = \\dfrac{a + b}{ab}$", "$f = ab$"]));
  q.push(mcv("hard", "Solve $ab = c + ad$ for $a$.", "$a = \\dfrac{c}{b - d}$", ["$a = \\dfrac{c}{b + d}$", "$a = c(b - d)$", "$a = \\dfrac{b - d}{c}$"], "Factor $a$: $ab - ad = c$."));
  q.push(mcv("hard", "Solve $y = \\dfrac{2x - 1}{3}$ for $x$.", "$x = \\dfrac{3y + 1}{2}$", ["$x = \\dfrac{3y - 1}{2}$", "$x = 3y + 1$", "$x = \\dfrac{y + 1}{6}$"]));
  q.push(mcv("hard", "Solve $Q = \\dfrac{a + b + c}{3}$ for $c$.", "$c = 3Q - a - b$", ["$c = 3Q + a + b$", "$c = \\dfrac{Q}{3} - a - b$", "$c = Q - a - b$"]));
  q.push(mcv("hard", "Solve $mx + n = px + q$ for $x$ (assume $m \\ne p$).", "$x = \\dfrac{q - n}{m - p}$", ["$x = \\dfrac{n - q}{m - p}$", "$x = \\dfrac{q - n}{m + p}$", "$x = (q - n)(m - p)$"]));
  q.push(mcv("hard", "Solve $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$ for $L$.", "$L = \\dfrac{gT^2}{4\\pi^2}$", ["$L = \\dfrac{T^2}{4\\pi^2 g}$", "$L = \\dfrac{gT}{2\\pi}$", "$L = 4\\pi^2 g T^2$"]));
  q.push(mcv("hard", "Solve $k = \\dfrac{y}{x - z}$ for $x$.", "$x = \\dfrac{y}{k} + z$", ["$x = \\dfrac{y}{k} - z$", "$x = ky + z$", "$x = \\dfrac{y + z}{k}$"]));
  q.push(mcv("hard", "Solve $3(x + a) = b(x - 1)$ for $x$ (assume $b \\ne 3$).", "$x = \\dfrac{-3a - b}{3 - b}$", ["$x = \\dfrac{3a + b}{3 - b}$", "$x = \\dfrac{b - 3a}{3 - b}$", "$x = 3a - b$"], "Expand: $3x + 3a = bx - b$."));
  q.push(tf("hard", "To solve $A = P + Prt$ for $P$, you factor $P$ from both terms first.", true));
  q.push(tf("hard", "$\\dfrac{1}{f} = \\dfrac{1}{a} + \\dfrac{1}{b}$ solved for $f$ gives $f = a + b$.", false, "It's $f = \\dfrac{ab}{a+b}$."));
  q.push(fill("hard", "When the target variable appears twice, you must ___ it out before dividing.", ["factor"]));
  q.push(mcv("hard", "Solve $v^2 = u^2 + 2as$ for $s$.", "$s = \\dfrac{v^2 - u^2}{2a}$", ["$s = \\dfrac{v^2 + u^2}{2a}$", "$s = \\dfrac{v - u}{2a}$", "$s = v^2 - u^2 - 2a$"]));
  q.push(mcv("hard", "Solve $A = \\dfrac{h(a + b)}{2}$ for $b$.", "$b = \\dfrac{2A}{h} - a$", ["$b = \\dfrac{2A}{h} + a$", "$b = 2A - h - a$", "$b = \\dfrac{A - a}{h}$"]));
  q.push(mcv("hard", "Solve $y = ax^2$ for $x$ (assume $x \\ge 0,\\ a > 0$).", "$x = \\sqrt{\\dfrac{y}{a}}$", ["$x = \\dfrac{y}{a}$", "$x = \\dfrac{\\sqrt{y}}{a}$", "$x = \\sqrt{ay}$"]));
  q.push(mcv("hard", "Solve $n = \\dfrac{2s}{a + l}$ for $l$.", "$l = \\dfrac{2s}{n} - a$", ["$l = \\dfrac{2s}{n} + a$", "$l = \\dfrac{2s - a}{n}$", "$l = 2sn - a$"]));
  q.push(mcv("hard", "Solve $px - r = qx + t$ for $x$ (assume $p \\ne q$).", "$x = \\dfrac{t + r}{p - q}$", ["$x = \\dfrac{t - r}{p - q}$", "$x = \\dfrac{r - t}{p - q}$", "$x = \\dfrac{t + r}{p + q}$"]));
  q.push(fill("hard", "Solve $C = \\tfrac59(F - 32)$ for $F$: $F = \\tfrac95 C + \\text{___}$.", ["32"]));
  q.push(tf("hard", "Rearranging a formula uses the same inverse operations as solving a numeric equation.", true));
  return q;
}

// ── 1.3 Compound Inequalities & Set Notation ─────────────────
function g13() {
  const q = [];
  // EASY — solve a simple inequality, give the boundary value
  for (let i = 0; i < 10; i++) {
    const x = ri(-6, 8), a = ri(2, 5), b = rnz(-8, 8), c = a * x + b;
    q.push(num("easy", `Solve $${a}x ${sign(b)} < ${c + a}$. The solution is $x < $ ___. Enter the boundary value.`, x + 1, 0));
  }
  q.push(mc("easy", "Which describes $x < 5$ in interval notation?", ["$(-\\infty, 5)$", "$(-\\infty, 5]$", "$(5, \\infty)$", "$[5, \\infty)$"], 0));
  q.push(mc("easy", "Which describes $x \\ge -2$ in interval notation?", ["$[-2, \\infty)$", "$(-2, \\infty)$", "$(-\\infty, -2]$", "$(-\\infty, -2)$"], 0));
  q.push(tf("easy", "You flip the inequality sign when dividing both sides by a negative number.", true));
  q.push(tf("easy", "Adding 3 to both sides of an inequality flips its sign.", false));
  q.push(mc("easy", "A round bracket in interval notation means the endpoint is…", ["excluded", "included", "infinite", "negative"], 0));
  q.push(mc("easy", "A square bracket means the endpoint is…", ["included", "excluded", "doubled", "negative"], 0));
  q.push(fill("easy", "$\\{x \\mid x > 3\\}$ in interval notation is $(3, \\text{___})$.", ["\\infty", "infinity", "inf"]));
  q.push(mc("easy", "Solve $x + 4 \\le 9$.", ["$x \\le 5$", "$x \\ge 5$", "$x \\le 13$", "$x \\le 36$"], 0));
  q.push(tf("easy", "The solution of an inequality is usually a range of values, not a single number.", true));
  q.push(mc("easy", "$-\\infty$ always gets which bracket?", ["round", "square", "either", "none"], 0));
  // MEDIUM — flip sign, compound "and"
  for (let i = 0; i < 6; i++) {
    const x = ri(-5, 6), a = ri(2, 5), b = rnz(-7, 7), rhs = -a * x + b;
    q.push(num("medium", `Solve $-${a}x ${sign(b)} \\ge ${rhs}$. The solution is $x \\le$ ___. Enter the boundary.`, x, 0));
  }
  q.push(mc("medium", "Solve $-3x > 12$.", ["$x < -4$", "$x > -4$", "$x < 4$", "$x > 4$"], 0));
  q.push(mc("medium", "Solve $-1 < 2x + 1 \\le 5$.", ["$-1 < x \\le 2$", "$0 < x \\le 3$", "$-1 \\le x < 2$", "$-2 < x \\le 4$"], 0));
  q.push(mc("medium", "$\\{x \\mid -1 < x \\le 2\\}$ in interval notation is…", ["$(-1, 2]$", "$[-1, 2)$", "$(-1, 2)$", "$[-1, 2]$"], 0));
  q.push(mc("medium", "An 'and' compound inequality corresponds to which set operation?", ["intersection", "union", "complement", "difference"], 0));
  q.push(mc("medium", "An 'or' compound inequality corresponds to…", ["union", "intersection", "complement", "product"], 0));
  q.push(tf("medium", "The solution of $x < -1$ or $x > 3$ is written $(-\\infty,-1)\\cup(3,\\infty)$.", true));
  q.push(fill("medium", "Solve $3x + 4 \\le 19$: $x \\le$ ___.", ["5"]));
  q.push(fill("medium", "Solve $0 \\le 2x - 4 < 6$ for the lower boundary of $x$.", ["2"]));
  q.push(num("medium", "Solve $2x - 3 < 7$. Enter the boundary value of $x$.", 5, 0));
  q.push(mc("medium", "Which inequality matches the interval $[2, 5)$?", ["$2 \\le x < 5$", "$2 < x \\le 5$", "$2 < x < 5$", "$2 \\le x \\le 5$"], 0));
  q.push(tf("medium", "$x < -2$ or $x > 3$ describes two separate pieces of the number line.", true));
  q.push(mc("medium", "Solve $\\dfrac{x}{2} \\ge 4$.", ["$x \\ge 8$", "$x \\ge 2$", "$x \\le 8$", "$x \\ge 4$"], 0));
  q.push(fill("medium", "$\\{x \\mid -3 < x \\le 4\\}$ in interval notation is $(-3, \\text{___}]$.", ["4"]));
  // HARD — 3-part compound, unions
  q.push(mc("hard", "Solve $-4 \\le 3x - 1 < 8$.", ["$-1 \\le x < 3$", "$-1 < x \\le 3$", "$-5 \\le x < 7$", "$-1 \\le x \\le 3$"], 0));
  q.push(mc("hard", "Solve $2 < \\dfrac{x + 1}{3} \\le 4$.", ["$5 < x \\le 11$", "$5 \\le x < 11$", "$1 < x \\le 3$", "$6 < x \\le 12$"], 0));
  q.push(mc("hard", "Solve $x - 5 < -3$ or $2x > 10$.", ["$x < 2$ or $x > 5$", "$x < 2$ and $x > 5$", "$2 < x < 5$", "$x > 2$ or $x < 5$"], 0));
  q.push(mc("hard", "Solve $-2x + 1 \\le 7$ and $x - 3 < 2$.", ["$-3 \\le x < 5$", "$-3 < x \\le 5$", "$x \\ge -3$ only", "$x < 5$ only"], 0));
  q.push(mc("hard", "Which interval is $(-\\infty, -1) \\cup (3, \\infty)$ the solution of?", ["$|x - 1| > 2$", "$|x - 1| < 2$", "$-1 < x < 3$", "$x > 3$"], 0));
  q.push(tf("hard", "Solving $-5 < -x \\le 2$ gives $-2 \\le x < 5$.", true, "Multiplying by $-1$ flips both signs and swaps the ends."));
  q.push(mc("hard", "Solve $3(x - 2) \\ge x + 4$.", ["$x \\ge 5$", "$x \\le 5$", "$x \\ge 1$", "$x \\ge 10$"], 0));
  q.push(mc("hard", "The empty set results from…", ["'and' of two non-overlapping ranges", "'or' of any two ranges", "a single inequality", "$x \\ge 0$"], 0));
  q.push(num("hard", "Solve $-3 \\le 2x + 5 \\le 11$. Enter the largest integer $x$ in the solution.", 3, 0));
  q.push(num("hard", "Solve $-3 \\le 2x + 5 \\le 11$. Enter the smallest integer $x$ in the solution.", -4, 0));
  q.push(mc("hard", "Solve $\\dfrac{2x - 1}{3} > 3$.", ["$x > 5$", "$x > 4$", "$x < 5$", "$x > 8$"], 0));
  q.push(fill("hard", "Solve $-2x > 10$: $x <$ ___.", ["-5"]));
  q.push(tf("hard", "The union of $(-\\infty, 2]$ and $[2, \\infty)$ is all real numbers.", true));
  q.push(mc("hard", "Solve $5 - 2x \\le 1$.", ["$x \\ge 2$", "$x \\le 2$", "$x \\ge 3$", "$x \\le 3$"], 0));
  q.push(mc("hard", "Solve $1 < 5 - x < 4$.", ["$1 < x < 4$", "$-4 < x < -1$", "$1 < x < 5$", "$4 < x < 6$"], 0));
  q.push(num("hard", "How many integers satisfy $-2 \\le x < 5$?", 7, 0));
  q.push(tf("hard", "$[3, 3]$ represents just the single number 3.", true));
  q.push(mc("hard", "Solve $4x + 1 \\ge 2x - 5$.", ["$x \\ge -3$", "$x \\le -3$", "$x \\ge 3$", "$x \\ge -2$"], 0));
  q.push(fill("hard", "The overlap of $x > 1$ and $x < 4$ is $1 < x < \\text{___}$.", ["4"]));
  q.push(mc("hard", "Solve $-1 \\le \\dfrac{3 - x}{2} \\le 2$.", ["$-1 \\le x \\le 5$", "$-1 \\le x \\le 4$", "$1 \\le x \\le 5$", "$-5 \\le x \\le 1$"], 0));
  return q;
}

// ── 1.4 Absolute Value Equations & Inequalities ──────────────
function g14() {
  const q = [];
  // EASY
  for (let i = 0; i < 8; i++) {
    const k = ri(1, 12);
    q.push(num("easy", `Evaluate $|-${k}|$.`, k, 0));
  }
  q.push(num("easy", "Evaluate $|7|$.", 7, 0));
  q.push(num("easy", "Evaluate $|0|$.", 0, 0));
  q.push(mc("easy", "Solve $|x| = 6$.", ["$x = \\pm 6$", "$x = 6$", "$x = -6$", "no solution"], 0));
  q.push(mc("easy", "Solve $|x| = 0$.", ["$x = 0$", "$x = \\pm 0$", "no solution", "all reals"], 0));
  q.push(mc("easy", "How many solutions does $|x| = 9$ have?", ["2", "1", "0", "infinitely many"], 0));
  q.push(tf("easy", "Absolute value can never be negative.", true));
  q.push(tf("easy", "$|x| = -4$ has no solution.", true));
  q.push(mc("easy", "$|x|$ represents the ___ of $x$ from zero.", ["distance", "sign", "square", "reciprocal"], 0));
  q.push(fill("easy", "$|-15| =$ ___.", ["15"]));
  q.push(fill("easy", "The two solutions of $|x| = 3$ are $3$ and ___.", ["-3"]));
  q.push(num("easy", "Evaluate $|3 - 8|$.", 5, 0));
  // MEDIUM — |x - h| = k, and inequalities
  for (let i = 0; i < 6; i++) {
    const h = rnz(-6, 6), k = ri(2, 8);
    q.push(mcv("medium", `Solve $|x ${sign(-h)}| = ${k}$.`, `$x = ${h + k}$ or $x = ${h - k}$`, [`$x = ${h + k}$ or $x = ${-(h - k)}$`, `$x = ${k}$ or $x = ${-k}$`, `$x = ${h}$`]));
  }
  q.push(mc("medium", "Solve $|2x + 1| = 9$.", ["$x = 4$ or $x = -5$", "$x = 4$ or $x = 5$", "$x = \\pm 9$", "$x = 4$"], 0));
  q.push(mc("medium", "Solve $|x - 2| < 4$.", ["$-2 < x < 6$", "$x < 6$", "$x > -2$", "$-4 < x < 4$"], 0));
  q.push(mc("medium", "Solve $|x + 1| \\le 3$.", ["$-4 \\le x \\le 2$", "$-2 \\le x \\le 4$", "$x \\le 2$", "$-3 \\le x \\le 3$"], 0));
  q.push(mc("medium", "Solve $|x| > 5$.", ["$x < -5$ or $x > 5$", "$-5 < x < 5$", "$x > 5$", "$x < 5$"], 0));
  q.push(tf("medium", "$|x| < 3$ is the same as $-3 < x < 3$.", true));
  q.push(tf("medium", "$|x| > 2$ is the same as $-2 < x < 2$.", false, "It's $x < -2$ or $x > 2$."));
  q.push(mc("medium", "$|x - 3| < 5$ becomes which compound inequality?", ["$-5 < x - 3 < 5$", "$x - 3 < 5$ only", "$x - 3 > 5$", "$-3 < x < 5$"], 0));
  q.push(fill("medium", "Solve $|x - 4| = 0$: $x =$ ___.", ["4"]));
  q.push(num("medium", "Solve $|2x| = 10$. Enter the positive solution.", 5, 0));
  q.push(mc("medium", "Solve $|3x| = 12$.", ["$x = \\pm 4$", "$x = \\pm 12$", "$x = 4$", "$x = \\pm 36$"], 0));
  q.push(tf("medium", "$|x - 5| \\le 0$ has exactly one solution, $x = 5$.", true));
  q.push(fill("medium", "$|x + 2| < 4$ solves to $-6 < x < \\text{___}$.", ["2"]));
  // HARD
  q.push(mc("hard", "Solve $|2x + 1| \\ge 5$.", ["$x \\le -3$ or $x \\ge 2$", "$-3 \\le x \\le 2$", "$x \\ge 2$", "$x \\le -3$"], 0));
  q.push(mc("hard", "Solve $|3x - 6| < 9$.", ["$-1 < x < 5$", "$x < 5$", "$-3 < x < 3$", "$x > -1$"], 0));
  q.push(mc("hard", "Solve $|x - 4| > 2$.", ["$x < 2$ or $x > 6$", "$2 < x < 6$", "$x > 6$", "$x < 2$"], 0));
  q.push(mc("hard", "Solve $2|x| - 3 = 5$.", ["$x = \\pm 4$", "$x = \\pm 1$", "$x = 4$", "$x = \\pm 8$"], 0, "Isolate: $|x| = 4$."));
  q.push(mc("hard", "Solve $|x + 3| + 2 = 9$.", ["$x = 4$ or $x = -10$", "$x = 4$ or $x = 10$", "$x = \\pm 7$", "$x = 4$"], 0));
  q.push(mc("hard", "How many solutions has $|x - 1| = -2$?", ["0", "1", "2", "infinitely many"], 0));
  q.push(mc("hard", "For which $c$ does $|x| = c$ have exactly one solution?", ["$c = 0$", "$c > 0$", "$c < 0$", "any $c$"], 0));
  q.push(tf("hard", "$|2x - 6| \\le 0$ has exactly one solution.", true, "Only $x = 3$ makes it zero."));
  q.push(tf("hard", "$|x| > -1$ is true for every real number.", true));
  q.push(mc("hard", "Solve $|5 - x| = 3$.", ["$x = 2$ or $x = 8$", "$x = \\pm 3$", "$x = 2$ or $x = -8$", "$x = 8$"], 0));
  q.push(num("hard", "Solve $|x - 7| = 4$. Enter the larger solution.", 11, 0));
  q.push(num("hard", "Solve $|x - 7| = 4$. Enter the smaller solution.", 3, 0));
  q.push(mc("hard", "Solve $\\left|\\dfrac{x}{2} + 1\\right| = 3$.", ["$x = 4$ or $x = -8$", "$x = 4$ or $x = 8$", "$x = \\pm 6$", "$x = 4$"], 0));
  q.push(mc("hard", "The solution $-2 < x < 6$ comes from which inequality?", ["$|x - 2| < 4$", "$|x + 2| < 4$", "$|x - 2| > 4$", "$|x - 4| < 2$"], 0));
  q.push(mc("hard", "The solution $x \\le -3$ or $x \\ge 2$ comes from…", ["$|2x + 1| \\ge 5$", "$|2x + 1| \\le 5$", "$|x - 1| \\ge 5$", "$|2x - 1| \\ge 5$"], 0));
  q.push(fill("hard", "Solve $|4x| = 20$. The positive solution is $x =$ ___.", ["5"]));
  q.push(tf("hard", "'Less thAND' reminds you $|x|<c$ gives one 'and' interval.", true));
  q.push(mc("hard", "Solve $3 - |x| = 1$.", ["$x = \\pm 2$", "$x = \\pm 4$", "$x = 2$", "no solution"], 0));
  q.push(num("hard", "Solve $|x + 5| = 5$. Enter the smaller solution.", -10, 0));
  q.push(mc("hard", "Solve $|2x - 4| \\le 6$.", ["$-1 \\le x \\le 5$", "$x \\le 5$", "$-5 \\le x \\le 1$", "$-1 \\le x \\le 6$"], 0));
  return q;
}

// ── 1.5 Modeling Real-World Contexts with Linear Constraints ─
function g15() {
  const q = [];
  // EASY — fixed + rate·quantity, direct evaluation
  for (let i = 0; i < 8; i++) {
    const fixed = ri(2, 10) * 5, rate = ri(2, 8), n = ri(2, 9), total = fixed + rate * n;
    q.push(num("easy", `A service charges $\\$${fixed}$ plus $\\$${rate}$ per hour. What is the cost of a ${n}-hour job (in dollars)?`, total, 0));
  }
  q.push(mc("easy", "'At most' translates to which symbol?", ["$\\le$", "$\\ge$", "$=$", "$>$"], 0));
  q.push(mc("easy", "'At least' translates to which symbol?", ["$\\ge$", "$\\le$", "$<$", "$=$"], 0));
  q.push(mc("easy", "'Per item' in a cost model usually means…", ["a rate you multiply", "a fixed fee", "a total", "a discount"], 0));
  q.push(tf("easy", "A fixed starting fee is the constant term in a linear cost model.", true));
  q.push(fill("easy", "Cost model: $C = 5 + 2x$. The fixed fee is ___ dollars.", ["5"]));
  q.push(num("easy", "Tickets cost $\\$6$ each. What do 7 tickets cost (dollars)?", 42, 0));
  q.push(mc("easy", "Which is an equation (not an inequality)?", ["$3 + 2m = 15$", "$8n \\le 50$", "$12h \\ge 180$", "$x > 5$"], 0));
  q.push(tf("easy", "Word 'exactly' suggests an equation rather than an inequality.", true));
  q.push(fill("easy", "A phone plan is $C = 25 + 0.10x$. The cost per text is ___ dollars.", ["0.10", "0.1", ".1"]));
  q.push(num("easy", "A gym costs $\\$20$ to join plus $\\$10$/month. Cost after 3 months (dollars)?", 50, 0));
  q.push(num("easy", "Save $\\$15$/week for 6 weeks. Total saved (dollars)?", 90, 0));
  // MEDIUM — solve the model
  for (let i = 0; i < 6; i++) {
    const fixed = ri(1, 6) * 5, rate = ri(2, 6), target = fixed + rate * ri(3, 9);
    const n = (target - fixed) / rate;
    q.push(num("medium", `A taxi charges $\\$${fixed}$ plus $\\$${rate}$ per mile. For $\\$${target}$, how many miles can you go?`, n, 0));
  }
  q.push(num("medium", "Notebooks cost $\\$8$ each and you have $\\$50$. At most how many can you buy?", 6, 0));
  q.push(num("medium", "You earn $\\$12$/hour and need at least $\\$180$. Minimum hours to work?", 15, 0));
  q.push(num("medium", "A gym: $\\$20$ join $+ \\$10$/month, budget $\\$100$. Most months you can afford?", 8, 0));
  q.push(mc("medium", "Notebooks $\\$8$ each, budget $\\$50$. Which inequality models it?", ["$8n \\le 50$", "$8n \\ge 50$", "$8 + n \\le 50$", "$n \\le 8$"], 0));
  q.push(mc("medium", "'Raise at least $\\$200$ at $\\$5$ per item' is modeled by…", ["$5x \\ge 200$", "$5x \\le 200$", "$5 + x \\ge 200$", "$x \\ge 5$"], 0));
  q.push(tf("medium", "If $8n \\le 50$ gives $n \\le 6.25$, you can buy at most 6 (round down).", true));
  q.push(num("medium", "A plumber charges $\\$40 + \\$25$/hour. Cost of a 3-hour job (dollars)?", 115, 0));
  q.push(num("medium", "Tickets $\\$9$ each, budget $\\$60$. At most how many tickets?", 6, 0));
  q.push(num("medium", "Save $\\$15$/week for a $\\$120$ goal. Minimum weeks?", 8, 0));
  q.push(mc("medium", "A phone plan $C = 25 + 0.10x$. Cost of 200 texts?", ["$\\$45$", "$\\$25$", "$\\$225$", "$\\$20$"], 0));
  q.push(num("medium", "Rideshare: $\\$3$ base $+ \\$2$/mile. Miles for a $\\$15$ ride?", 6, 0));
  q.push(fill("medium", "'No more than 12' translates to $x \\le \\text{___}$.", ["12"]));
  q.push(num("medium", "A car rental is $\\$30 + \\$0.20$/mile. Cost for 100 miles (dollars)?", 50, 0));
  // HARD — comparisons, two-step models
  q.push(mc("hard", "Plan A: $\\$30$ flat. Plan B: $\\$6$ per class. Plan A is cheaper when…", ["6 or more classes", "5 or more classes", "fewer than 6", "exactly 5"], 0));
  q.push(mc("hard", "Ride A: $\\$2$/lap. Ride B: $\\$10$ flat. Ride A is cheaper when…", ["fewer than 5 laps", "more than 5 laps", "exactly 5 laps", "5 or more laps"], 0));
  q.push(num("hard", "Gym A: $\\$50 + \\$5$/visit. Gym B: $\\$10$/visit. At how many visits do they cost the same?", 10, 0));
  q.push(num("hard", "Company A: $\\$100 + \\$20$/hr. Company B: $\\$40$/hr. Break-even hours?", 5, 0));
  q.push(mc("hard", "Two plans cost the same at 10 units; beyond that the flat-fee plan is cheaper. Below 10 units…", ["the per-unit plan is cheaper", "the flat plan is cheaper", "they're equal", "both are free"], 0));
  q.push(num("hard", "$\\$40$ budget, each item $\\$7$, plus a $\\$5$ fee. At most how many items ($7x + 5 \\le 40$)?", 5, 0));
  q.push(num("hard", "Perimeter of a rectangle is 40 and the length is 12. Find the width.", 8, 0));
  q.push(num("hard", "A number tripled, then increased by 7, is 28. Find the number.", 7, 0));
  q.push(num("hard", "Two consecutive integers sum to 45. The smaller one is…", 22, 0));
  q.push(mc("hard", "'The total, fixed plus rate times quantity' is best modeled as…", ["$y = b + mx$", "$y = mx$", "$y = b$", "$y = \\dfrac{b}{x}$"], 0));
  q.push(num("hard", "A tank has 50 L and drains 5 L/min. After how many minutes is it empty?", 10, 0));
  q.push(num("hard", "Phone A: $\\$20 + \\$0.05$/min. Phone B: $\\$0.10$/min. Break-even minutes?", 400, 0));
  q.push(tf("hard", "For a savings goal you usually round the number of periods UP.", true));
  q.push(tf("hard", "For a spending budget you usually round the quantity DOWN.", true));
  q.push(num("hard", "A worker earns $\\$15$/hr plus a $\\$50$ bonus. To make $\\$200$, how many hours?", 10, 0));
  q.push(mc("hard", "Which situation needs an inequality (not an equation)?", ["Spending at most $\\$50$", "Cost of exactly 5 items", "The total after 3 hours", "The break-even point"], 0));
  q.push(num("hard", "$\\$18$ each, plus $\\$6$ shipping, total $\\$96$. How many items ($18x + 6 = 96$)?", 5, 0));
  q.push(num("hard", "A rectangle's perimeter is 30; its length is twice its width. Find the width.", 5, 0));
  q.push(fill("hard", "In $y = mx + b$, the fixed starting amount is ___.", ["b"]));
  q.push(mc("hard", "You need $\\ge \\$300$, earning $\\$25$/hr with a $\\$50$ start. Which models it?", ["$50 + 25h \\ge 300$", "$25h \\ge 300$", "$50 + 25h \\le 300$", "$25 + 50h \\ge 300$"], 0));
  return q;
}

export default [
  { code: "1.1", gen: g11 },
  { code: "1.2", gen: g12 },
  { code: "1.3", gen: g13 },
  { code: "1.4", gen: g14 },
  { code: "1.5", gen: g15 },
];
