// ALG1 Chapter 5 — Factoring & Quadratic Functions. ~50 per topic.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";
const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);

// ── 5.1 GCF and Factoring by Grouping ────────────────────────
function g51() {
  const q = [];
  for (let i = 0; i < 8; i++) { const g = ri(2, 6), a = ri(2, 5), b = rnz(1, 6); q.push(mcv("easy", `Factor $${g * a}x^2 ${sign(g * b)}x$.`, `$${g}x(${a}x ${sign(b)})$`, [`$${g}x(${a}x ${sign(-b)})$`, `$x(${g * a}x ${sign(g * b)})$`, `$${g}(${a}x^2 ${sign(b)}x)$`])); }
  q.push(mc("easy", "The first step in factoring is always to look for the…", ["GCF", "quadratic formula", "vertex", "discriminant"], 0));
  q.push(tf("easy", "Factoring reverses multiplication.", true));
  q.push(fill("easy", "The GCF of $6x^2$ and $9x$ is $3\\text{___}$.", ["x"]));
  q.push(mcv("easy", "Factor $10x^2 + 15x$.", "$5x(2x + 3)$", ["$5(2x^2 + 3x)$", "$x(10x + 15)$", "$5x(2x - 3)$"]));
  q.push(mcv("medium", "Factor $12x^3 - 8x^2$.", "$4x^{2}(3x - 2)$", ["$4x(3x^2 - 2x)$", "$2x^{2}(6x - 4)$", "$4x^{2}(3x + 2)$"]));
  q.push(mcv("medium", "Factor $x^3 + 2x^2 + 3x + 6$ by grouping.", "$(x + 2)(x^2 + 3)$", ["$(x + 3)(x^2 + 2)$", "$(x + 2)(x^2 - 3)$", "$(x^2 + 2)(x + 3)$"]));
  q.push(mcv("medium", "Factor $x^3 + 4x^2 + 2x + 8$.", "$(x + 4)(x^2 + 2)$", ["$(x + 2)(x^2 + 4)$", "$(x + 4)(x^2 - 2)$", "$(x + 8)(x^2 + 1)$"]));
  q.push(mcv("medium", "Factor $2x^3 + 6x^2 + x + 3$.", "$(x + 3)(2x^2 + 1)$", ["$(x + 3)(2x^2 - 1)$", "$(2x + 3)(x^2 + 1)$", "$(x + 1)(2x^2 + 3)$"]));
  q.push(tf("medium", "In grouping, the two leftover binomials must match.", true));
  q.push(fill("medium", "Factor $6x^4 - 9x^2 = 3x^2(2x^2 \\text{___} 3)$.", ["-", "- "]));
  q.push(mcv("hard", "Factor $2x^3 - 8x$ completely.", "$2x(x - 2)(x + 2)$", ["$2x(x^2 - 4)$", "$2(x^3 - 4x)$", "$2x(x - 4)(x + 2)$"]));
  q.push(mcv("hard", "Factor $3x^3 - 3x^2 + x - 1$.", "$(x - 1)(3x^2 + 1)$", ["$(x + 1)(3x^2 - 1)$", "$(3x - 1)(x^2 + 1)$", "$(x - 1)(3x^2 - 1)$"]));
  q.push(mcv("hard", "Factor $5x^3 - 20x$ completely.", "$5x(x - 2)(x + 2)$", ["$5x(x^2 - 4)$", "$5(x^3 - 4x)$", "$5x(x - 4)(x + 1)$"]));
  q.push(tf("hard", "You should always factor the GCF before trying to group.", true));
  return q;
}

// ── 5.2 Factoring Trinomials ─────────────────────────────────
function g52() {
  const q = [];
  for (let i = 0; i < 10; i++) { const p = ri(1, 7), r = ri(1, 7); const b = p + r, c = p * r; q.push(mcv(i < 4 ? "easy" : "medium", `Factor $x^2 + ${b}x + ${c}$.`, `$(x + ${p})(x + ${r})$`, [`$(x - ${p})(x - ${r})$`, `$(x + ${c})(x + 1)$`, `$(x + ${p})(x - ${r})$`])); }
  for (let i = 0; i < 6; i++) { const p = ri(1, 6), r = ri(1, 6); const b = -(p + r), c = p * r; q.push(mcv("medium", `Factor $x^2 ${sign(b)}x + ${c}$.`, `$(x - ${p})(x - ${r})$`, [`$(x + ${p})(x + ${r})$`, `$(x - ${p})(x + ${r})$`, `$(x - ${c})(x - 1)$`])); }
  q.push(mc("easy", "To factor $x^2 + bx + c$, find two numbers that…", ["multiply to c and add to b", "multiply to b and add to c", "are both b", "subtract to c"], 0));
  q.push(mcv("easy", "Factor $x^2 + 7x + 12$.", "$(x + 3)(x + 4)$", ["$(x + 2)(x + 6)$", "$(x + 12)(x + 1)$", "$(x - 3)(x - 4)$"]));
  q.push(mcv("easy", "Factor $x^2 - 5x + 6$.", "$(x - 2)(x - 3)$", ["$(x + 2)(x + 3)$", "$(x - 1)(x - 6)$", "$(x - 2)(x + 3)$"]));
  q.push(mcv("medium", "Factor $x^2 + 2x - 15$.", "$(x + 5)(x - 3)$", ["$(x - 5)(x + 3)$", "$(x + 15)(x - 1)$", "$(x + 5)(x + 3)$"]));
  q.push(mcv("medium", "Factor $x^2 - x - 12$.", "$(x - 4)(x + 3)$", ["$(x + 4)(x - 3)$", "$(x - 6)(x + 2)$", "$(x - 4)(x - 3)$"]));
  q.push(mcv("hard", "Factor $2x^2 + 7x + 3$.", "$(2x + 1)(x + 3)$", ["$(2x + 3)(x + 1)$", "$(2x + 1)(x - 3)$", "$(x + 1)(x + 3)$"]));
  q.push(mcv("hard", "Factor $3x^2 - 10x + 8$.", "$(3x - 4)(x - 2)$", ["$(3x - 2)(x - 4)$", "$(3x + 4)(x + 2)$", "$(3x - 4)(x + 2)$"]));
  q.push(mcv("hard", "Factor $2x^2 + 5x + 2$.", "$(2x + 1)(x + 2)$", ["$(2x + 2)(x + 1)$", "$(2x + 1)(x - 2)$", "$(x + 1)(x + 2)$"]));
  q.push(mcv("hard", "Factor $3x^2 + 7x - 6$.", "$(3x - 2)(x + 3)$", ["$(3x + 2)(x - 3)$", "$(3x - 3)(x + 2)$", "$(3x - 2)(x - 3)$"]));
  q.push(tf("hard", "If no integer pair works, the trinomial is prime (over the integers).", true));
  q.push(mc("hard", "For $ac$-method on $ax^2+bx+c$, you split the middle using two numbers that multiply to…", ["ac", "a+c", "bc", "a/c"], 0));
  return q;
}

// ── 5.3 Features of Parabolas ────────────────────────────────
function g53() {
  const q = [];
  for (let i = 0; i < 10; i++) { const a = pick([1, 1, 2]), h = ri(-4, 4); const b = -2 * a * h; q.push(num(i < 5 ? "easy" : "medium", `Find the axis of symmetry $x = -\\dfrac{b}{2a}$ for $y = ${a === 1 ? "" : a}x^2 ${sign(b)}x ${sign(ri(-5, 5))}$.`, h, 0)); }
  q.push(mc("easy", "$y = ax^2 + bx + c$ opens up when…", ["$a > 0$", "$a < 0$", "$a = 0$", "$c > 0$"], 0));
  q.push(mc("easy", "$y = ax^2 + bx + c$ opens down when…", ["$a < 0$", "$a > 0$", "$b < 0$", "$c < 0$"], 0));
  q.push(mc("easy", "The $y$-intercept of $y = x^2 - 4x + 3$ is…", ["$(0, 3)$", "$(3, 0)$", "$(0, -4)$", "$(0, 1)$"], 0));
  q.push(tf("easy", "The vertex lies on the axis of symmetry.", true));
  q.push(fill("easy", "For $y = x^2 - 6x + 5$, the axis of symmetry is $x = $ ___.", ["3"]));
  q.push(mc("medium", "Vertex of $y = (x - 2)^2 - 1$?", ["$(2, -1)$", "$(-2, -1)$", "$(2, 1)$", "$(1, 2)$"], 0));
  q.push(mc("medium", "Vertex of $y = (x + 3)^2 + 2$?", ["$(-3, 2)$", "$(3, 2)$", "$(-3, -2)$", "$(2, -3)$"], 0));
  q.push(mc("medium", "$x$-intercepts of $y = x^2 - 4x + 3$?", ["$x = 1, 3$", "$x = -1, -3$", "$x = 2, 3$", "$x = 4, 3$"], 0));
  q.push(num("medium", "For $y = x^2 - 6x + 5$, the $y$-value of the vertex is…", -4, 0));
  q.push(mc("medium", "Does $y = -2x^2 + x + 1$ open up or down?", ["Down", "Up", "Neither", "Both"], 0));
  q.push(num("hard", "Axis of symmetry of $y = 2x^2 - 8x + 1$? ($x = -b/2a$)", 2, 0));
  q.push(num("hard", "Vertex $x$-coordinate of $y = x^2 - 10x + 7$?", 5, 0));
  q.push(mc("hard", "Vertex of $y = (x + 5)^2 - 1$?", ["$(-5, -1)$", "$(5, -1)$", "$(-5, 1)$", "$(5, 1)$"], 0));
  q.push(mc("hard", "If $a > 0$, the vertex is a…", ["minimum", "maximum", "root", "y-intercept"], 0));
  q.push(fill("hard", "The vertex of $y = (x - 2)^2 + 7$ is $(2, \\text{___})$.", ["7"]));
  q.push(num("hard", "Number of $x$-intercepts of $y = x^2 - 4x + 4$?", 1, 0));
  return q;
}

// ── 5.4 Solving Quadratics by Factoring & Square Roots ───────
function g54() {
  const q = [];
  for (let i = 0; i < 10; i++) { const r1 = ri(-6, 6), r2 = ri(-6, 6); const b = -(r1 + r2), c = r1 * r2; q.push(num(i < 5 ? "easy" : "medium", `Solve $x^2 ${sign(b)}x ${sign(c)} = 0$. Enter the LARGER root.`, Math.max(r1, r2), 0)); }
  for (let i = 0; i < 6; i++) { const k = ri(2, 12); q.push(num("easy", `Solve $x^2 = ${k * k}$. Enter the positive solution.`, k, 0)); }
  q.push(mc("easy", "The zero-product property says if $AB = 0$ then…", ["$A = 0$ or $B = 0$", "$A = B$", "$A + B = 0$", "$AB = 1$"], 0));
  q.push(mc("easy", "Solve $(x - 2)(x + 5) = 0$.", ["$x = 2, -5$", "$x = -2, 5$", "$x = 2, 5$", "$x = 10$"], 0));
  q.push(tf("easy", "$x^2 = 49$ has two solutions, $7$ and $-7$.", true));
  q.push(fill("easy", "Solve $x^2 = 81$: $x = \\pm\\text{___}$.", ["9"]));
  q.push(mc("medium", "Solve $x^2 - 6x = 0$.", ["$x = 0, 6$", "$x = 6$", "$x = -6, 0$", "$x = 0$"], 0));
  q.push(mc("medium", "Solve $(x - 3)^2 = 16$.", ["$x = 7, -1$", "$x = 7, 1$", "$x = \\pm 4$", "$x = 19$"], 0));
  q.push(num("medium", "Solve $(x + 2)^2 = 25$. Enter the larger solution.", 3, 0));
  q.push(mc("hard", "How many real solutions has $x^2 = -9$?", ["0", "1", "2", "infinitely many"], 0));
  q.push(num("hard", "Solve $x^2 - 7x + 12 = 0$. Enter the larger root.", 4, 0));
  q.push(num("hard", "Solve $x^2 + 5x = 0$. Enter the larger root.", 0, 0));
  q.push(mc("hard", "Before using the zero-product property you must first…", ["set the equation equal to 0", "divide by x", "take the square root", "graph"], 0));
  q.push(tf("hard", "Dividing both sides of $x^2 = 5x$ by $x$ can lose the solution $x = 0$.", true));
  return q;
}

// ── 5.5 Completing the Square & The Quadratic Formula ────────
function g55() {
  const q = [];
  for (let i = 0; i < 10; i++) { const a = ri(1, 3), b = rnz(-8, 8), c = rnz(-8, 8); q.push(num(i < 5 ? "easy" : "medium", `Find the discriminant $b^2 - 4ac$ for $${a === 1 ? "" : a}x^2 ${sign(b)}x ${sign(c)} = 0$.`, b * b - 4 * a * c, 0)); }
  q.push(mc("easy", "The quadratic formula is $x = $", ["$\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", "$\\dfrac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$", "$\\dfrac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}$", "$-b \\pm \\sqrt{b^2 - 4ac}$"], 0));
  q.push(mc("easy", "The discriminant is…", ["$b^2 - 4ac$", "$b^2 + 4ac$", "$-b/2a$", "$4ac - b^2$"], 0));
  q.push(mc("easy", "If the discriminant is negative, the number of real roots is…", ["0", "1", "2", "infinite"], 0));
  q.push(mc("easy", "If the discriminant is 0, the number of real roots is…", ["1", "0", "2", "infinite"], 0));
  q.push(tf("easy", "To complete the square on $x^2 + bx$, add $(b/2)^2$.", true));
  q.push(num("medium", "How many real roots has $x^2 - 4x + 4 = 0$? (discriminant)", 1, 0));
  q.push(num("medium", "Discriminant of $2x^2 - 3x + 5 = 0$?", -31, 0));
  q.push(mc("medium", "Solve $x^2 - 5x + 6 = 0$ (formula).", ["$x = 2, 3$", "$x = -2, -3$", "$x = 1, 6$", "$x = 5, 6$"], 0));
  q.push(mc("medium", "Complete the square: $x^2 + 6x + 5 = 0$ becomes…", ["$(x + 3)^2 = 4$", "$(x + 3)^2 = 14$", "$(x + 6)^2 = 5$", "$(x + 3)^2 = -4$"], 0));
  q.push(fill("medium", "To complete the square on $x^2 + 8x$, add ___.", ["16"]));
  q.push(num("hard", "Solve $x^2 + 6x + 5 = 0$. Enter the larger root.", -1, 0));
  q.push(mc("hard", "Solve $x^2 + 4x + 1 = 0$.", ["$x = -2 \\pm \\sqrt{3}$", "$x = 2 \\pm \\sqrt{3}$", "$x = -2 \\pm \\sqrt{5}$", "$x = -4 \\pm \\sqrt{3}$"], 0));
  q.push(num("hard", "How many real roots has $9x^2 - 6x + 1 = 0$?", 1, 0));
  q.push(num("hard", "How many real roots has $x^2 + x + 1 = 0$?", 0, 0));
  q.push(mc("hard", "When should you reach for the quadratic formula?", ["It always works, especially when factoring is hard", "Only when a = 1", "Only for perfect squares", "Never"], 0));
  q.push(tf("hard", "A discriminant of 0 means the parabola touches the x-axis at exactly one point.", true));
  return q;
}

export default [
  { code: "5.1", gen: g51 },
  { code: "5.2", gen: g52 },
  { code: "5.3", gen: g53 },
  { code: "5.4", gen: g54 },
  { code: "5.5", gen: g55 },
];
