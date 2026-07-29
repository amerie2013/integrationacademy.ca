// ALG1 Chapter 5 — Factoring & Quadratic Functions. ~55 per topic.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";
const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);
const gcdn = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };

// ── 5.1 GCF and Factoring by Grouping ────────────────────────
function g51() {
  const q = [];
  for (let i = 0; i < 8; i++) { const g = ri(2, 6), a = rnz(2, 6), b = rnz(1, 8); q.push(mcv("easy", `Factor $${g * a}x^2 ${sign(g * b)}x$.`, `$${g}x(${a}x ${sign(b)})$`, [`$${g}x(${a}x ${sign(-b)})$`, `$x(${g * a}x ${sign(g * b)})$`, `$${g}(${a}x^2 ${sign(b)}x)$`])); }
  q.push(mc("easy", "The first step in factoring is always to look for the…", ["GCF", "vertex", "discriminant", "slope"], 0));
  q.push(mc("easy", "GCF of $6x^2 + 9x$?", ["$3x$", "$3$", "$x$", "$6x$"], 0));
  q.push(tf("easy", "Factoring reverses multiplying.", true));
  q.push(fill("easy", "Factor $10x^2 + 15x = 5x(2x + \\text{___})$.", ["3"]));
  q.push(mcv("easy", "Factor $12x^3 - 8x^2$.", "$4x^2(3x - 2)$", ["$4x(3x^2 - 2x)$", "$2x^2(6x - 4)$", "$4x^2(3x + 2)$"]));
  q.push(mc("easy", "To check a factorization, you…", ["expand it", "graph it", "square it", "differentiate it"], 0));
  q.push(mcv("medium", "Factor by grouping $x^3 + 2x^2 + 3x + 6$.", "$(x + 2)(x^2 + 3)$", ["$(x + 3)(x^2 + 2)$", "$(x + 2)(x^2 - 3)$", "$(x - 2)(x^2 + 3)$"]));
  q.push(mcv("medium", "Factor by grouping $2x^3 + 6x^2 + x + 3$.", "$(x + 3)(2x^2 + 1)$", ["$(x + 3)(2x^2 - 1)$", "$(2x + 3)(x^2 + 1)$", "$(x - 3)(2x^2 + 1)$"]));
  q.push(mcv("medium", "Factor $2x^3 - 8x$.", "$2x(x - 2)(x + 2)$", ["$2x(x^2 - 4)$ only", "$2(x^3 - 4x)$", "$2x(x - 4)(x + 4)$"], "Factor GCF then difference of squares."));
  q.push(mcv("medium", "Factor $6x^4 - 9x^2$.", "$3x^2(2x^2 - 3)$", ["$3x(2x^3 - 3x)$", "$3x^2(2x^2 + 3)$", "$x^2(6x^2 - 9)$"]));
  q.push(tf("medium", "After grouping, the two leftover binomials must match.", true));
  q.push(fill("medium", "Factor $x^3 + 4x^2 + 2x + 8 = (x + 4)(x^2 + \\text{___})$.", ["2"]));
  q.push(mcv("medium", "Factor $5x^3 - 20x$.", "$5x(x - 2)(x + 2)$", ["$5x(x^2 - 4)$ only", "$5(x^3 - 4x)$", "$5x(x - 4)(x + 4)$"]));
  q.push(mcv("hard", "Factor $3x^3 - 3x^2 + x - 1$.", "$(x - 1)(3x^2 + 1)$", ["$(x + 1)(3x^2 + 1)$", "$(x - 1)(3x^2 - 1)$", "$(3x - 1)(x^2 + 1)$"]));
  q.push(mcv("hard", "Factor completely $4x^3 - 16x$.", "$4x(x - 2)(x + 2)$", ["$4x(x^2 - 4)$", "$4(x^3 - 4x)$", "$4x(x - 4)(x + 4)$"]));
  q.push(mcv("hard", "Factor $x^3 - 5x^2 + 2x - 10$.", "$(x - 5)(x^2 + 2)$", ["$(x + 5)(x^2 + 2)$", "$(x - 5)(x^2 - 2)$", "$(x - 2)(x^2 - 5)$"]));
  q.push(tf("hard", "$18x^3 - 12x^2$ has GCF $6x^2$.", true));
  q.push(mc("hard", "After pulling the GCF from $2x^2 - 18$, what remains factors as…", ["$(x - 3)(x + 3)$", "$(x - 9)(x + 9)$", "$(x - 3)^2$", "prime"], 0));
  return q;
}

// ── 5.2 Factoring Trinomials ─────────────────────────────────
function g52() {
  const q = [];
  for (let i = 0; i < 10; i++) { const p = rnz(-6, 6), r = rnz(-6, 6); const b = p + r, c = p * r; q.push(mcv("easy", `Factor $x^2 ${sign(b)}x ${sign(c)}$.`, `$(x ${sign(p)})(x ${sign(r)})$`, [`$(x ${sign(-p)})(x ${sign(-r)})$`, `$(x ${sign(p)})(x ${sign(-r)})$`, `$(x ${sign(b)})(x ${sign(c)})$`])); }
  q.push(mc("easy", "To factor $x^2 + bx + c$, find two numbers that…", ["multiply to $c$, add to $b$", "add to $c$, multiply to $b$", "multiply to $b$", "are equal"], 0));
  q.push(fill("easy", "Factor $x^2 + 7x + 12 = (x + 3)(x + \\text{___})$.", ["4"]));
  q.push(mcv("easy", "Factor $x^2 - 5x + 6$.", "$(x - 2)(x - 3)$", ["$(x + 2)(x + 3)$", "$(x - 1)(x - 6)$", "$(x - 2)(x + 3)$"]));
  q.push(mcv("easy", "Factor $x^2 + 2x - 15$.", "$(x + 5)(x - 3)$", ["$(x - 5)(x + 3)$", "$(x + 5)(x + 3)$", "$(x + 15)(x - 1)$"]));
  q.push(mcv("medium", "Factor $x^2 + 8x + 15$.", "$(x + 3)(x + 5)$", ["$(x + 1)(x + 15)$", "$(x - 3)(x - 5)$", "$(x + 3)(x - 5)$"]));
  q.push(mcv("medium", "Factor $x^2 - 7x + 10$.", "$(x - 2)(x - 5)$", ["$(x + 2)(x + 5)$", "$(x - 1)(x - 10)$", "$(x - 2)(x + 5)$"]));
  q.push(mcv("medium", "Factor $x^2 - x - 12$.", "$(x - 4)(x + 3)$", ["$(x + 4)(x - 3)$", "$(x - 4)(x - 3)$", "$(x - 6)(x + 2)$"]));
  q.push(mcv("medium", "Factor $2x^2 + 7x + 3$.", "$(2x + 1)(x + 3)$", ["$(2x + 3)(x + 1)$", "$(2x - 1)(x - 3)$", "$(x + 1)(x + 3)$"]));
  q.push(mcv("medium", "Factor $2x^2 + 5x + 2$.", "$(2x + 1)(x + 2)$", ["$(2x + 2)(x + 1)$", "$(2x - 1)(x - 2)$", "$(x + 1)(x + 2)$"]));
  q.push(tf("medium", "$x^2 + 5x + 6 = (x + 2)(x + 3)$.", true));
  q.push(fill("medium", "Factor $x^2 - 9x + 20 = (x - 4)(x - \\text{___})$.", ["5"]));
  q.push(mcv("hard", "Factor $3x^2 - 10x + 8$.", "$(3x - 4)(x - 2)$", ["$(3x - 2)(x - 4)$", "$(3x + 4)(x + 2)$", "$(x - 4)(x - 2)$"]));
  q.push(mcv("hard", "Factor $3x^2 + 7x - 6$.", "$(3x - 2)(x + 3)$", ["$(3x + 2)(x - 3)$", "$(3x - 3)(x + 2)$", "$(x + 3)(x - 2)$"]));
  q.push(mcv("hard", "Factor $6x^2 + x - 2$.", "$(3x + 2)(2x - 1)$", ["$(3x - 2)(2x + 1)$", "$(6x + 2)(x - 1)$", "$(3x + 1)(2x - 2)$"]));
  q.push(mcv("hard", "Factor $4x^2 - 12x + 9$.", "$(2x - 3)^2$", ["$(2x + 3)^2$", "$(2x - 3)(2x + 3)$", "$(4x - 3)(x - 3)$"]));
  q.push(mc("hard", "$x^2 + x + 1$ over the integers is…", ["prime (can't factor)", "$(x + 1)^2$", "$(x + 1)(x - 1)$", "$x(x + 1)$"], 0));
  q.push(tf("hard", "$2x^2 + 5x + 2 = (2x + 1)(x + 2)$.", true));
  q.push(fill("hard", "For $ax^2 + bx + c$ with $a \\ne 1$, use the ___ method.", ["ac"]));
  return q;
}

// ── 5.3 Features of Parabolas ────────────────────────────────
function g53() {
  const q = [];
  for (let i = 0; i < 8; i++) { const h = ri(-4, 4), c = rnz(-6, 6); const b = -2 * h; const yv = h * h + b * h + c; q.push(num("easy", `Find the axis of symmetry of $y = x^2 ${sign(b)}x ${sign(c)}$ (enter the $x$-value).`, h, 0)); }
  q.push(mc("easy", "$y = ax^2 + bx + c$ opens up when…", ["$a > 0$", "$a < 0$", "$a = 0$", "$b > 0$"], 0));
  q.push(mc("easy", "The turning point of a parabola is the…", ["vertex", "intercept", "axis", "slope"], 0));
  q.push(mc("easy", "The $y$-intercept of $y = x^2 - 4x + 3$ is…", ["$(0, 3)$", "$(3, 0)$", "$(0, -4)$", "$(0, 1)$"], 0));
  q.push(tf("easy", "$a < 0$ means the parabola opens down (has a maximum).", true));
  q.push(fill("easy", "The axis of symmetry of $y = x^2$ is $x = \\text{___}$.", ["0"]));
  q.push(mc("easy", "Axis of symmetry formula?", ["$x = -\\tfrac{b}{2a}$", "$x = \\tfrac{b}{2a}$", "$x = -\\tfrac{a}{2b}$", "$x = \\tfrac{c}{a}$"], 0));
  for (let i = 0; i < 6; i++) { const h = ri(-4, 4), c = rnz(-6, 6); const b = -2 * h; const yv = h * h + b * h + c; q.push(num("medium", `Find the $y$-coordinate of the vertex of $y = x^2 ${sign(b)}x ${sign(c)}$.`, yv, 0)); }
  q.push(mc("medium", "Axis of $y = x^2 - 6x + 5$?", ["$x = 3$", "$x = -3$", "$x = 6$", "$x = 5$"], 0));
  q.push(mc("medium", "Vertex of $y = x^2 - 6x + 5$?", ["$(3, -4)$", "$(3, 4)$", "$(-3, -4)$", "$(6, 5)$"], 0));
  q.push(mc("medium", "$x$-intercepts of $y = x^2 - 6x + 5$?", ["$1$ and $5$", "$-1$ and $-5$", "$2$ and $3$", "$6$ and $5$"], 0));
  q.push(mc("medium", "Vertex of $y = (x - 2)^2 - 1$?", ["$(2, -1)$", "$(-2, -1)$", "$(2, 1)$", "$(1, 2)$"], 0));
  q.push(tf("medium", "In vertex form $y = (x - h)^2 + k$, the vertex is $(h, k)$.", true));
  q.push(mc("medium", "Does $y = -2x^2 + x + 1$ open up or down?", ["down", "up", "sideways", "neither"], 0));
  q.push(mc("hard", "Vertex of $y = x^2 + 4x + 1$?", ["$(-2, -3)$", "$(2, -3)$", "$(-2, 3)$", "$(-4, 1)$"], 0));
  q.push(mc("hard", "Vertex of $y = (x + 3)^2 + 2$?", ["$(-3, 2)$", "$(3, 2)$", "$(-3, -2)$", "$(3, -2)$"], 0));
  q.push(num("hard", "Axis of symmetry of $y = 2x^2 - 8x + 1$ (enter the $x$-value).", 2, 0));
  q.push(mc("hard", "The minimum value of $y = x^2 - 6x + 5$ is…", ["$-4$", "$3$", "$5$", "$0$"], 0, "It's the vertex $y$-value."));
  q.push(tf("hard", "A parabola with $a > 0$ has a minimum, not a maximum.", true));
  q.push(fill("hard", "Vertex of $y = (x - 5)^2 + 7$ is $(5, \\text{___})$.", ["7"]));
  q.push(mc("hard", "If a parabola has vertex $(1, -4)$ and opens up, its range is…", ["$y \\ge -4$", "$y \\le -4$", "all reals", "$y \\ge 1$"], 0));
  return q;
}

// ── 5.4 Solving Quadratics by Factoring & Square Roots ───────
function g54() {
  const q = [];
  for (let i = 0; i < 8; i++) { const r = rnz(-6, 7), s = rnz(-6, 7); const big = Math.max(r, s); q.push(num("easy", `Solve $(x ${sign(-r)})(x ${sign(-s)}) = 0$ — enter the larger solution.`, big, 0)); }
  q.push(mc("easy", "The zero-product property says if $AB = 0$ then…", ["$A = 0$ or $B = 0$", "$A = B$", "$A + B = 0$", "$AB = 1$"], 0));
  q.push(mc("easy", "Solve $x^2 = 49$.", ["$x = \\pm 7$", "$x = 7$", "$x = 49$", "$x = \\pm 24.5$"], 0));
  q.push(tf("easy", "$x^2 = k$ has two solutions $\\pm\\sqrt{k}$ when $k > 0$.", true));
  q.push(num("easy", "Solve $x^2 = 81$ — enter the positive solution.", 9, 0));
  q.push(fill("easy", "Solve $(x - 2)(x + 5) = 0$: the solutions are $2$ and ___.", ["-5"]));
  q.push(mc("easy", "First step to solve $x^2 + 3x - 10 = 0$ by factoring?", ["factor the left side", "take square roots", "divide by $x$", "add 10 to both sides only"], 0));
  for (let i = 0; i < 6; i++) { const r = rnz(-6, 7), s = rnz(-6, 7); const small = Math.min(r, s); q.push(num("medium", `Solve $x^2 ${sign(-(r + s))}x ${sign(r * s)} = 0$ — enter the smaller solution.`, small, 0)); }
  q.push(num("medium", "Solve $x^2 - 6x = 0$ — enter the nonzero solution.", 6, 0));
  q.push(mc("medium", "Solve $x^2 + 3x - 10 = 0$.", ["$x = -5$ or $x = 2$", "$x = 5$ or $x = -2$", "$x = \\pm 10$", "$x = -3, 10$"], 0));
  q.push(mc("medium", "Solve $(x - 3)^2 = 16$.", ["$x = 7$ or $x = -1$", "$x = \\pm 4$", "$x = 7$ or $x = 1$", "$x = 19$"], 0));
  q.push(num("medium", "Solve $(x + 2)^2 = 25$ — enter the larger solution.", 3, 0));
  q.push(tf("medium", "$x^2 = -9$ has no real solution.", true));
  q.push(mc("medium", "Solve $x^2 - 7x + 12 = 0$.", ["$x = 3$ or $x = 4$", "$x = -3$ or $x = -4$", "$x = 7, 12$", "$x = \\pm 12$"], 0));
  q.push(mc("hard", "Solve $2x^2 - 8 = 0$.", ["$x = \\pm 2$", "$x = \\pm 4$", "$x = 2$", "$x = \\pm 8$"], 0));
  q.push(mc("hard", "Solve $x^2 + 5x = 0$.", ["$x = 0$ or $x = -5$", "$x = \\pm 5$", "$x = 5$", "$x = 0$ only"], 0));
  q.push(num("hard", "Solve $(x - 4)^2 = 9$ — enter the smaller solution.", 1, 0));
  q.push(mc("hard", "Solve $3x^2 = 12$.", ["$x = \\pm 2$", "$x = \\pm 4$", "$x = 2$", "$x = \\pm \\sqrt{12}$ only"], 0));
  q.push(tf("hard", "Move everything to one side ($= 0$) before using the zero-product property.", true));
  q.push(num("hard", "Solve $x^2 - 9 = 0$ — enter the positive solution.", 3, 0));
  q.push(fill("hard", "Solve $(2x)^2 = 36$: the positive solution is $x = \\text{___}$.", ["3"]));
  return q;
}

// ── 5.5 Completing the Square & The Quadratic Formula ────────
function g55() {
  const q = [];
  for (let i = 0; i < 8; i++) { const a = 1, b = ri(-8, 8), c = ri(-8, 8); q.push(num("easy", `Find the discriminant $b^2 - 4ac$ of $x^2 ${sign(b)}x ${sign(c)}$.`, b * b - 4 * c, 0)); }
  q.push(mc("easy", "The quadratic formula is $x = $", ["$\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", "$\\dfrac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$", "$\\dfrac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}$", "$\\dfrac{-b}{2a}$"], 0));
  q.push(mc("easy", "The discriminant is…", ["$b^2 - 4ac$", "$b^2 + 4ac$", "$-\\tfrac{b}{2a}$", "$4ac - b^2$"], 0));
  q.push(mc("easy", "If the discriminant is negative, the equation has…", ["no real roots", "two real roots", "one real root", "infinite roots"], 0));
  q.push(tf("easy", "The quadratic formula works for any quadratic.", true));
  q.push(fill("easy", "To complete the square on $x^2 + 6x$, add $\\left(\\tfrac{6}{2}\\right)^2 = \\text{___}$.", ["9"]));
  q.push(mc("medium", "How many real roots has $x^2 - 4x + 4 = 0$? (discriminant $= 0$)", ["one", "two", "none", "infinite"], 0));
  q.push(mc("medium", "How many real roots has $2x^2 - 3x + 5 = 0$? ($D = -31$)", ["none", "one", "two", "infinite"], 0));
  q.push(mc("medium", "How many real roots has $x^2 - 5x + 6 = 0$? ($D = 1$)", ["two", "one", "none", "infinite"], 0));
  q.push(mc("medium", "Solve $x^2 + 6x + 5 = 0$ by completing the square.", ["$x = -1$ or $-5$", "$x = 1$ or $5$", "$x = -1$ or $5$", "$x = \\pm 5$"], 0));
  q.push(mc("medium", "Solve $x^2 - 5x + 6 = 0$ with the formula.", ["$x = 2$ or $3$", "$x = -2$ or $-3$", "$x = 5$ or $6$", "$x = \\pm 6$"], 0));
  q.push(num("medium", "Discriminant of $x^2 + 4x + 1$?", 12, 0));
  q.push(num("medium", "Discriminant of $9x^2 - 6x + 1$?", 0, 0));
  q.push(tf("medium", "$D = 0$ means exactly one (repeated) real root.", true));
  q.push(mc("hard", "Solve $x^2 + 4x + 1 = 0$.", ["$x = -2 \\pm \\sqrt3$", "$x = 2 \\pm \\sqrt3$", "$x = -2 \\pm \\sqrt5$", "$x = -4 \\pm \\sqrt3$"], 0));
  q.push(mc("hard", "Solve $x^2 - 2x - 8 = 0$.", ["$x = 4$ or $-2$", "$x = -4$ or $2$", "$x = 4$ or $2$", "$x = \\pm 8$"], 0));
  q.push(mc("hard", "Solve $x^2 + 6x + 4 = 0$.", ["$x = -3 \\pm \\sqrt5$", "$x = 3 \\pm \\sqrt5$", "$x = -3 \\pm \\sqrt7$", "$x = -6 \\pm \\sqrt5$"], 0));
  q.push(num("hard", "For $x^2 - 4x + 4 = 0$, the single root is $x = $ ___.", 2, 0));
  q.push(mc("hard", "How many real roots has $x^2 + x + 1 = 0$?", ["none", "one", "two", "three"], 0));
  q.push(mc("hard", "How many real roots has $9x^2 - 6x + 1 = 0$?", ["one", "two", "none", "infinite"], 0));
  q.push(fill("hard", "To complete the square on $x^2 - 10x$, add ___.", ["25"]));
  q.push(tf("hard", "If $D > 0$, the parabola crosses the $x$-axis twice.", true));
  q.push(mc("hard", "Complete the square: $x^2 + 8x + 7 = 0$ gives $(x + 4)^2 = $", ["$9$", "$7$", "$16$", "$23$"], 0));
  return q;
}

export default [
  { code: "5.1", gen: g51 },
  { code: "5.2", gen: g52 },
  { code: "5.3", gen: g53 },
  { code: "5.4", gen: g54 },
  { code: "5.5", gen: g55 },
];
