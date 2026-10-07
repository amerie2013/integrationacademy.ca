// MCR3U Unit 2 — Equivalent Algebraic Expressions: question bank (60 per topic).
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

// ── 2.1 Adding & Multiplying Polynomials ─────────────────────
function g21() {
  const q = [];
  q.push(mc("easy", "$(2x+3)+(x-5)$ =", ["$3x-2$", "$3x+8$", "$x-2$", "$2x-2$"], 0));
  q.push(mc("easy", "$(3x^2-x)+(x^2+4x)$ =", ["$4x^2+3x$", "$4x^2-3x$", "$2x^2+3x$", "$4x^2+5x$"], 0));
  q.push(mc("easy", "$2(x+4)$ =", ["$2x+8$", "$2x+4$", "$x+8$", "$2x+6$"], 0));
  q.push(mc("easy", "$x\\cdot x$ =", ["$x^2$", "$2x$", "$x$", "$2x^2$"], 0));
  q.push(mc("easy", "$(x+2)(x+3)$ =", ["$x^2+5x+6$", "$x^2+6x+5$", "$x^2+6$", "$x^2+5x+5$"], 0));
  q.push(mc("easy", "$3x\\cdot 2x$ =", ["$6x^2$", "$5x^2$", "$6x$", "$5x$"], 0));
  q.push(ms("easy", "Like terms:", ["$3x$ and $5x$", "$2x^2$ and $-x^2$", "$4$ and $7$", "$x$ and $x^2$"], [0, 1, 2]));
  q.push(ms("easy", "$(x+2)(x+3)$ expands using:", ["distribute each term", "FOIL", "result $x^2+5x+6$", "adding the binomials"], [0, 1, 2]));
  q.push(ms("easy", "Adding polynomials:", ["combine like terms", "keep $x^2$ with $x^2$", "$3x^2+x^2=4x^2$", "multiply them"], [0, 1, 2]));
  q.push(ms("easy", "$2(x+4)$:", ["distribute the 2", "$2x+8$", "each term times 2", "$2x+4$"], [0, 1, 2]));
  q.push(tf("easy", "$3x+5x=8x$.", true));
  q.push(tf("easy", "$x\\cdot x=2x$.", false));
  q.push(tf("easy", "$(x+2)(x+3)=x^2+5x+6$.", true));
  q.push(fill("easy", "Expand $(x+1)(x+4)$.", ["x^2+5x+4", "x²+5x+4"]));
  q.push(fill("easy", "Simplify $(2x+1)+(3x-4)$.", ["5x-3"]));
  q.push(fill("easy", "Expand $3(2x-5)$.", ["6x-15"]));
  q.push(num("easy", "Coefficient of $x$ in $(x+2)(x+3)$.", 5, 0));
  q.push(num("easy", "Constant term in $(x+2)(x+3)$.", 6, 0));
  q.push(num("easy", "Coefficient of $(4x)(3x)$.", 12, 0));
  q.push(match("easy", "Match each product.", ["$x\\cdot x$", "$2x\\cdot3x$", "$(x)(4)$"], ["$x^2$", "$6x^2$", "$4x$"], [0, 1, 2]));
  q.push(mc("medium", "$(x+5)(x-2)$ =", ["$x^2+3x-10$", "$x^2-3x-10$", "$x^2+3x+10$", "$x^2-7x-10$"], 0));
  q.push(mc("medium", "$(2x-3)(x+4)$ =", ["$2x^2+5x-12$", "$2x^2-5x-12$", "$2x^2+5x+12$", "$2x^2+11x-12$"], 0));
  q.push(mc("medium", "$(x+3)^2$ =", ["$x^2+6x+9$", "$x^2+9$", "$x^2+3x+9$", "$x^2+6x+6$"], 0));
  q.push(mc("medium", "$(x-4)(x+4)$ =", ["$x^2-16$", "$x^2+16$", "$x^2-8x-16$", "$x^2-8$"], 0));
  q.push(mc("medium", "$-2(3x-5)$ =", ["$-6x+10$", "$-6x-10$", "$6x+10$", "$-6x-5$"], 0));
  q.push(mc("medium", "$(x+2)(x^2-3)$ =", ["$x^3+2x^2-3x-6$", "$x^3-3x-6$", "$x^3+2x^2-6$", "$x^3-6$"], 0));
  q.push(ms("medium", "$(x+3)^2$:", ["$=(x+3)(x+3)$", "$x^2+6x+9$", "a perfect square", "$x^2+9$"], [0, 1, 2]));
  q.push(ms("medium", "$(x-4)(x+4)$:", ["difference of squares", "$x^2-16$", "middle terms cancel", "$x^2+16$"], [0, 1, 2]));
  q.push(ms("medium", "Expanding $(2x-3)(x+4)$:", ["$2x^2$", "$8x-3x=5x$", "$-12$", "$2x^2+5x-12$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Distributing $-2(3x-5)$:", ["$-6x$", "$+10$", "the sign flips", "$-6x-10$"], [0, 1, 2]));
  q.push(tf("medium", "$(x+3)^2=x^2+9$.", false));
  q.push(tf("medium", "$(x-4)(x+4)=x^2-16$.", true));
  q.push(tf("medium", "$(2x-3)(x+4)=2x^2+5x-12$.", true));
  q.push(fill("medium", "Expand $(x+5)(x-2)$.", ["x^2+3x-10", "x²+3x-10"]));
  q.push(fill("medium", "Expand $(x-3)^2$.", ["x^2-6x+9", "x²-6x+9"]));
  q.push(fill("medium", "Expand $(x+6)(x-6)$.", ["x^2-36", "x²-36"]));
  q.push(num("medium", "Coefficient of $x$ in $(2x-3)(x+4)$.", 5, 0));
  q.push(num("medium", "Constant in $(x+5)(x-2)$.", -10, 0));
  q.push(num("medium", "Coefficient of $x$ in $(x+3)^2$.", 6, 0));
  q.push(match("medium", "Match each expansion.", ["$(x+3)^2$", "$(x-4)(x+4)$", "$(x+5)(x-2)$"], ["$x^2+6x+9$", "$x^2-16$", "$x^2+3x-10$"], [0, 1, 2]));
  q.push(mc("hard", "$(x+2)(x^2-3x+1)$ =", ["$x^3-x^2-5x+2$", "$x^3-x^2+5x+2$", "$x^3+x^2-5x+2$", "$x^3-5x+2$"], 0));
  q.push(mc("hard", "$(2x-1)^2$ =", ["$4x^2-4x+1$", "$4x^2+1$", "$2x^2-4x+1$", "$4x^2-2x+1$"], 0));
  q.push(mc("hard", "$(x+1)(x-1)(x+2)$ =", ["$x^3+2x^2-x-2$", "$x^3-2$", "$x^3+2x^2+x-2$", "$x^3-x-2$"], 0));
  q.push(mc("hard", "Simplify $(x+3)^2-(x-3)^2$.", ["$12x$", "$0$", "$18$", "$6x$"], 0));
  q.push(mc("hard", "$3(x-2)^2$ =", ["$3x^2-12x+12$", "$3x^2-4x+4$", "$3x^2-12x+4$", "$3x^2-6x+12$"], 0));
  q.push(ms("hard", "Expanding $(2x-1)^2$:", ["$4x^2$", "$-4x$", "$+1$", "$4x^2-4x+1$"], [0, 1, 2, 3]));
  q.push(ms("hard", "$(x+1)(x-1)(x+2)$:", ["first $(x^2-1)$", "then $\\times(x+2)$", "$x^3+2x^2-x-2$", "$x^3-2$"], [0, 1, 2]));
  q.push(ms("hard", "$(x+3)^2-(x-3)^2$:", ["expand both", "$=12x$", "the $x^2$ and $9$ cancel", "$=0$"], [0, 1, 2]));
  q.push(ms("hard", "Multiplying three factors:", ["multiply two first", "then the third", "stay organized", "all at once"], [0, 1, 2]));
  q.push(tf("hard", "$(2x-1)^2=4x^2-4x+1$.", true));
  q.push(tf("hard", "$(x+3)^2-(x-3)^2=12x$.", true));
  q.push(tf("hard", "$(x+1)(x-1)(x+2)=x^3-2$.", false));
  q.push(fill("hard", "Expand $(2x-1)^2$.", ["4x^2-4x+1", "4x²-4x+1"]));
  q.push(fill("hard", "Simplify $(x+3)^2-(x-3)^2$.", ["12x"]));
  q.push(fill("hard", "Expand $3(x-2)^2$.", ["3x^2-12x+12", "3x²-12x+12"]));
  q.push(num("hard", "Coefficient of $x$ in $(2x-1)^2$.", -4, 0));
  q.push(num("hard", "Coefficient of $x^2$ in $(x+1)(x-1)(x+2)$.", 2, 0));
  q.push(num("hard", "Value of $(x+3)^2-(x-3)^2$ at $x=5$.", 60, 0));
  q.push(order("hard", "Order the steps to expand $(x+1)(x-1)(x+2)$.", ["Multiply $(x+1)(x-1)=x^2-1$", "Multiply by $(x+2)$", "Collect like terms", "$x^3+2x^2-x-2$"]));
  q.push(match("hard", "Match each expansion.", ["$(2x-1)^2$", "$3(x-2)^2$", "$(x+3)^2-(x-3)^2$"], ["$4x^2-4x+1$", "$3x^2-12x+12$", "$12x$"], [0, 1, 2]));
  return q;
}

// ── 2.2 Factoring Polynomials ────────────────────────────────
// 60 questions (20 easy / 20 medium / 20 hard). The ax^2+bx+c (a != 1) pattern is
// the focus. Trinomial questions are generated from a factor pair so the
// polynomial, the correct answer, the distractors and the worked feedback always
// agree. Correct answers are spread across positions by MCV22.
let _k22 = 0;
const MCV22 = (d, prompt, correct, wrong, fb = "") => {
  const pos = (_k22++ * 3 + 1) % (wrong.length + 1);
  const ch = [...wrong]; ch.splice(pos, 0, correct);
  return mc(d, prompt, ch, pos, fb);
};
const t22 = (n) => (n < 0 ? "-" + -n : "" + n);
const lin22 = (p, q) => `${p === 1 ? "" : p}x${q > 0 ? "+" + q : q < 0 ? "-" + -q : ""}`;
const polyTex22 = (a, b, c) => {
  const T = (k, v) => (k === 0 ? "" : (k > 0 ? "+" : "-") + (Math.abs(k) === 1 && v ? "" : Math.abs(k)) + v);
  return (T(a, "x^2") + T(b, "x") + T(c, "")).replace(/^\+/, "");
};
const expand22 = (p, q, r, s) => [p * r, p * s + q * r, q * s];
const pre22 = (g, neg) => (neg ? "-" : "") + (g > 1 ? g : "");
const facTex22 = (g, neg, p, q, r, s) => `$${pre22(g, neg)}(${lin22(p, q)})(${lin22(r, s)})$`;
// worked solution used as feedback
function fb22(g, neg, p, q, r, s) {
  const [A, B, C] = expand22(p, q, r, s);
  const m = p * s, n = q * r;
  const pieces = (x) => (x > 0 ? "+" : "-") + Math.abs(x) + "x";
  const lead = g > 1 ? `Take out the GCF ${g} first: ${g}(${polyTex22(A, B, C)}). ` : "";
  const sign = neg ? "Factor out -1 first so the leading coefficient is positive. " : "";
  if (p === 1 && r === 1) return `${sign}${lead}Find two numbers that multiply to $${C}$ and add to $${B}$: $${q}$ and $${s}$. So $${polyTex22(A, B, C)}=(${lin22(1, q)})(${lin22(1, s)})$. Check by expanding.`;
  return `${sign}${lead}ac $=${A}\\times${C < 0 ? "(" + C + ")" : C}=${A * C}$. Two numbers that multiply to $${A * C}$ and add to $${B}$: $${m}$ and $${n}$. Split: $${A}x^2${pieces(m)}${pieces(n)}${C < 0 ? "" : "+"}${C}$. Group: $${p === 1 ? "" : p}x(${lin22(r, s)})${q < 0 ? "-" : "+"}${Math.abs(q)}(${lin22(r, s)})=(${lin22(p, q)})(${lin22(r, s)})$${g > 1 ? "; put the GCF back: " + facTex22(g, neg, p, q, r, s) : ""}. Check by expanding.`;
}
// multiple-choice factoring question built from a factor pair
function tri22(d, p, q, r, s, g = 1, neg = false) {
  const [A, B, C] = expand22(p, q, r, s);
  const poly = polyTex22(g * (neg ? -A : A), g * (neg ? -B : B), g * (neg ? -C : C));
  const correct = facTex22(g, neg, p, q, r, s);
  const canon = (pp, qq, rr, ss) => [lin22(pp, qq), lin22(rr, ss)].sort().join("|");
  const key = canon(p, q, r, s);
  const same = (pp, qq, rr, ss) => { const e = expand22(pp, qq, rr, ss); return e[0] === A && e[1] === B && e[2] === C; };
  const cands = [[p, -q, r, -s], [p, s, r, q], [p, q, r, -s], [p, -q, r, s], [A, q, 1, s]];
  const seen = new Set([key]), wrong = [];
  for (const [pp, qq, rr, ss] of cands) {
    const k = canon(pp, qq, rr, ss);
    if (seen.has(k) || same(pp, qq, rr, ss)) continue;
    seen.add(k); wrong.push(facTex22(g, neg, pp, qq, rr, ss));
    if (wrong.length === 3) break;
  }
  if (wrong.length < 3) throw new Error("not enough distractors for " + poly);
  return MCV22(d, `Factor fully $${poly}$.`, correct, wrong, fb22(g, neg, p, q, r, s));
}
// fill-in version: accepts either factor order, with or without spaces
function triFill22(d, p, q, r, s, g = 1, neg = false) {
  const [A, B, C] = expand22(p, q, r, s);
  const poly = polyTex22(g * (neg ? -A : A), g * (neg ? -B : B), g * (neg ? -C : C));
  const f1 = lin22(p, q), f2 = lin22(r, s), pf = (neg ? "-" : "") + (g > 1 ? g : "");
  const spaced = (x) => x.replace(/([+-])/g, " $1 ");
  const acc = new Set();
  for (const [x, y] of [[f1, f2], [f2, f1]]) { acc.add(`${pf}(${x})(${y})`); acc.add(`${pf}(${spaced(x)})(${spaced(y)})`); }
  return fill(d, `Factor fully $${poly}$.`, [...acc], fb22(g, neg, p, q, r, s));
}
function g22() {
  const q = [];
  // EASY ---------------------------------------------------------------
  q.push(MCV22("easy", "Factor fully $12x+18$.", "$6(2x+3)$", ["$2(6x+9)$", "$3(4x+6)$", "$6(2x+18)$"], "The greatest common factor of $12$ and $18$ is $6$. $2(6x+9)$ and $3(4x+6)$ are only partly factored."));
  q.push(MCV22("easy", "Factor fully $10x^3-15x^2$.", "$5x^2(2x-3)$", ["$5x(2x^2-3x)$", "$5(2x^3-3x^2)$", "$x^2(10x-15)$"], "The GCF is $5x^2$: the number part is $5$ and the lowest power of $x$ is $x^2$. Divide each term by it."));
  q.push(fill("easy", "Factor fully $21x^2+14x$.", ["7x(3x+2)", "7x(2+3x)"], "GCF $=7x$: $\\frac{21x^2}{7x}=3x$ and $\\frac{14x}{7x}=2$."));
  q.push(num("easy", "What is the numerical part of the greatest common factor of $24x^2-36x$?", 12, 0, "The greatest common factor of $24$ and $36$ is $12$."));
  q.push(tri22("easy", 1, 4, 1, 5));
  q.push(tri22("easy", 1, 2, 1, -9));
  q.push(tri22("easy", 1, -3, 1, -8));
  q.push(tri22("easy", 1, 11, 1, -4));
  q.push(MCV22("easy", "Factor $36x^2-1$.", "$(6x-1)(6x+1)$", ["$(6x-1)^2$", "$(18x-1)(2x+1)$", "$(36x-1)(x+1)$"], "Difference of squares: $(6x)^2-1^2=(6x-1)(6x+1)$."));
  q.push(MCV22("easy", "Factor $x^2-81$.", "$(x-9)(x+9)$", ["$(x-9)^2$", "$(x-81)(x+1)$", "$(x+9)^2$"], "$x^2-81=x^2-9^2=(x-9)(x+9)$."));
  q.push(fill("easy", "Factor $4x^2-25$.", ["(2x-5)(2x+5)", "(2x+5)(2x-5)", "(2x - 5)(2x + 5)", "(2x + 5)(2x - 5)"], "$(2x)^2-5^2=(2x-5)(2x+5)$."));
  q.push(tf("easy", "$x^2+16=(x+4)(x-4)$.", false, "$(x+4)(x-4)=x^2-16$. A sum of squares does not factor over the integers."));
  q.push(tf("easy", "When factoring, you should look for a common factor first.", true));
  q.push(ms("easy", "To factor $x^2-5x-24$, which statements are true?", ["the two numbers have opposite signs", "the number with the larger absolute value is negative", "the two numbers multiply to $-24$", "the two numbers add to $+5$"], [0, 1, 2], "Product $-24<0$ means opposite signs; sum $-5<0$ means the larger one is negative. The numbers are $-8$ and $3$."));
  q.push(num("easy", "For $5x^2+11x+2$, what is the product $ac$?", 10, 0, "$ac=5\\times2=10$."));
  q.push(num("easy", "For $4x^2-7x-15$, what is the product $ac$?", -60, 0, "$ac=4\\times(-15)=-60$."));
  q.push(MCV22("easy", "To factor $2x^2+11x+12$ by decomposition, which two numbers multiply to $ac$ and add to $b$?", "$3$ and $8$", ["$4$ and $6$", "$2$ and $12$", "$1$ and $24$"], "$ac=24$ and $b=11$. The pairs of $24$ sum to $25,\\ 14,\\ 11,\\ 10$ for $(1,24),(2,12),(3,8),(4,6)$; only $3+8=11$."));
  q.push(order("easy", "Put the steps of factoring $ax^2+bx+c$ (with $a\\ne1$) in order.", ["Take out any common factor", "Find $ac$", "Find two numbers that multiply to $ac$ and add to $b$", "Split the middle term into those two pieces", "Group and pull out the common bracket", "Check by expanding"]));
  q.push(match("easy", "Match each trinomial to its value of $ac$.", ["$2x^2+7x+6$", "$3x^2-5x-2$", "$4x^2+4x+1$"], ["$-6$", "$4$", "$12$"], [2, 0, 1]));
  q.push(MCV22("easy", "Which expression is fully factored?", "$2(x+3)(x-3)$", ["$2(x^2-9)$", "$(2x+6)(x-3)$", "$(x+3)(2x-6)$"], "$2(x^2-9)$ still has a difference of squares inside; $(2x+6)(x-3)$ and $(x+3)(2x-6)$ each have a bracket with a common factor of $2$."));

  // MEDIUM -------------------------------------------------------------
  q.push(tri22("medium", 2, 3, 1, 5));
  q.push(tri22("medium", 3, 1, 1, 4));
  q.push(tri22("medium", 5, 2, 1, 3));
  q.push(tri22("medium", 4, 3, 1, 2));
  q.push(tri22("medium", 2, -5, 1, -3));
  q.push(tri22("medium", 3, -2, 1, -4));
  q.push(tri22("medium", 4, -1, 1, -5));
  q.push(tri22("medium", 2, 5, 1, -3));
  q.push(tri22("medium", 3, -4, 1, 2));
  q.push(tri22("medium", 5, 3, 1, -4));
  q.push(tri22("medium", 2, -7, 1, 4));
  q.push(triFill22("medium", 3, 2, 1, 4));
  q.push(triFill22("medium", 2, -3, 2, 1));
  q.push(tri22("medium", 3, 1, 1, 4, 2));
  q.push(tri22("medium", 2, -1, 1, -5, 3));
  q.push(MCV22("medium", "Factor $9x^2+12x+4$.", "$(3x+2)^2$", ["$(3x+2)(3x-2)$", "$(9x+2)(x+2)$", "$(3x-2)^2$"], "$(3x)^2=9x^2$, $2^2=4$ and $2(3x)(2)=12x$ matches the middle term, so it is a perfect square: $(3x+2)^2$."));
  q.push(fill("medium", "Factor $49x^2-14x+1$.", ["(7x-1)^2", "(7x-1)(7x-1)", "(7x - 1)^2", "(7x - 1)(7x - 1)"], "$(7x)^2=49x^2$, $1^2=1$ and $2(7x)(1)=14x$; the middle term is negative, so $(7x-1)^2$."));
  q.push(tf("medium", "$10x^2-x-3=(5x+3)(2x-1)$.", false, "Expanding $(5x+3)(2x-1)=10x^2-5x+6x-3=10x^2+x-3$. The middle term is $+x$, not $-x$; the correct factoring is $(5x-3)(2x+1)$."));
  q.push(ms("medium", "Which statements are correct for factoring $6x^2+13x+6$?", ["$ac=36$", "the pair that multiplies to $36$ and adds to $13$ is $4$ and $9$", "split: $6x^2+4x+9x+6$", "the answer is $(6x+1)(x+6)$"], [0, 1, 2], "Group: $2x(3x+2)+3(3x+2)=(2x+3)(3x+2)$. $(6x+1)(x+6)=6x^2+37x+6$."));
  q.push(num("medium", "In factoring $3x^2+14x+8$ by decomposition, what is the larger of the two numbers used to split the middle term?", 12, 0, "$ac=24$; $2+12=14$ and $2\\times12=24$. Split $14x=2x+12x$."));

  // HARD ---------------------------------------------------------------
  q.push(tri22("hard", 6, 5, 1, -4));
  q.push(tri22("hard", 4, -9, 3, 2));
  q.push(tri22("hard", 8, 3, 1, -5));
  q.push(tri22("hard", 7, -3, 2, -5));
  q.push(tri22("hard", 2, 1, 1, -3, 6));
  q.push(tri22("hard", 3, -2, 2, 3, 5));
  q.push(MCV22("hard", "Factor fully $4x^3-23x^2-6x$.", "$x(4x+1)(x-6)$", ["$(4x+1)(x-6)$", "$x(4x-1)(x+6)$", "$x^2(4x+1)(x-6)$"], "Take out $x$ first: $x(4x^2-23x-6)$. Inside, $ac=-24$ and the pair $1,-24$ sums to $-23$: $4x^2+x-24x-6=x(4x+1)-6(4x+1)=(4x+1)(x-6)$."));
  q.push(MCV22("hard", "Factor fully $-2x^2+7x+15$.", "$-(2x+3)(x-5)$", ["$(2x+3)(x-5)$", "$-(2x-3)(x+5)$", "$-(2x+5)(x-3)$"], "Factor out $-1$: $-(2x^2-7x-15)$. Inside, $ac=-30$ and the pair $3,-10$ sums to $-7$: $2x^2+3x-10x-15=x(2x+3)-5(2x+3)=(2x+3)(x-5)$. So the answer is $-(2x+3)(x-5)$, which can also be written $(2x+3)(5-x)$."));
  q.push(MCV22("hard", "Factor fully $-3x^2-11x+4$.", "$-(3x-1)(x+4)$", ["$-(3x+1)(x-4)$", "$(3x-1)(x+4)$", "$-(3x-4)(x+1)$"], "Factor out $-1$: $-(3x^2+11x-4)$. Inside, $ac=-12$; the pair $12,-1$ sums to $11$: $3x^2+12x-x-4=3x(x+4)-1(x+4)=(3x-1)(x+4)$."));
  q.push(tf("hard", "$3x^2+x+5$ cannot be factored over the integers.", true, "$ac=15$ and the middle coefficient is $+1$. Both numbers would have to be positive with product $15$, but the pairs $(1,15)$ and $(3,5)$ add to $16$ and $8$, never $1$. No pair works, so it is prime."));
  q.push(tf("hard", "$5x^2+7x-3$ cannot be factored over the integers.", true, "$ac=-15$, so the numbers have opposite signs, with the larger one positive. The pairs $(15,-1)$ and $(5,-3)$ add to $14$ and $2$, never $7$. No pair works, so it is prime."));
  q.push(MCV22("hard", "Which of these trinomials is prime over the integers?", "$2x^2+x+4$", ["$2x^2+5x+3$", "$6x^2-x-2$", "$3x^2-7x+2$"], "$2x^2+5x+3=(2x+3)(x+1)$, $6x^2-x-2=(3x-2)(2x+1)$ and $3x^2-7x+2=(3x-1)(x-2)$. For $2x^2+x+4$: $ac=8$, positive pairs $(1,8),(2,4)$ have sums $9,6$, never $1$."));
  q.push(num("hard", "How many different positive integers $k$ make $x^2+kx+12$ factorable over the integers?", 3, 0, "Positive $k$ come from positive pairs of $12$: $1+12=13$, $2+6=8$, $3+4=7$. So $k=7,8,13$: three values."));
  q.push(num("hard", "What is the largest positive integer $k$ for which $2x^2+kx+3$ factors over the integers?", 7, 0, "$ac=6$; positive pairs $(1,6)$ and $(2,3)$ give $k=7$ and $k=5$. The largest is $7$."));
  q.push(MCV22("hard", "A student writes $6x^2-5x-6=(3x-2)(2x+3)$. Which statement is correct?", "It is wrong: expanding gives $6x^2+5x-6$; the correct factoring is $(3x+2)(2x-3)$", ["It is correct", "It is wrong; the correct factoring is $(3x+2)(2x+3)$", "It is wrong because $6x^2-5x-6$ is prime"], "$(3x-2)(2x+3)=6x^2+9x-4x-6=6x^2+5x-6$, so the middle sign is wrong. The pair for $ac=-36$ and sum $-5$ is $4$ and $-9$: $6x^2+4x-9x-6=2x(3x+2)-3(3x+2)=(2x-3)(3x+2)$."));
  q.push(MCV22("hard", "A student writes $4x^2+12x+8=(2x+2)(2x+4)$. What is the problem?", "Each bracket still has a common factor; fully factored it is $4(x+1)(x+2)$", ["The expansion does not match the original", "It is already fully factored", "The trinomial is prime"], "The expansion matches, but the answer is not fully factored: $(2x+2)(2x+4)=2(x+1)\\cdot2(x+2)=4(x+1)(x+2)$. Taking out the GCF $4$ first avoids this."));
  q.push(MCV22("hard", "A rectangle has area $6x^2+17x+12$. Which pair of expressions could be its length and width?", "$(2x+3)$ and $(3x+4)$", ["$(6x+3)$ and $(x+4)$", "$(2x+4)$ and $(3x+3)$", "$(3x+3)$ and $(2x+4)$"], "$ac=72$ and the pair $8,9$ gives $17$: $6x^2+8x+9x+12=2x(3x+4)+3(3x+4)=(2x+3)(3x+4)$. The other pairs expand to different trinomials."));
  q.push(order("hard", "Put the steps in order to factor $2x^3-18x$ fully.", ["Take out the GCF $2x$: $2x(x^2-9)$", "Recognise $x^2-9$ as a difference of squares", "Write $2x(x-3)(x+3)$", "Check by expanding"]));
  q.push(match("hard", "Match each trinomial to its factors.", ["$12x^2+x-6$", "$12x^2-x-6$", "$12x^2+25x+12$"], ["$(3x+4)(4x+3)$", "$(4x+3)(3x-2)$", "$(4x-3)(3x+2)$"], [1, 2, 0]));
  q.push(MCV22("hard", "Factor fully $3x^3-75x$.", "$3x(x-5)(x+5)$", ["$3x(x^2-25)$", "$3x(x-5)^2$", "$3(x-5)(x+5)$"], "GCF $3x$: $3x(x^2-25)$, then the difference of squares: $3x(x-5)(x+5)$. $3x(x^2-25)$ is not fully factored; $3(x-5)(x+5)=3x^2-75$ lost an $x$."));
  return q;
}

// ── 2.3 Simplifying Rational Expressions ─────────────────────
function g23() {
  const q = [];
  q.push(mc("easy", "Simplify $\\dfrac{2x}{4}$.", ["$\\dfrac{x}{2}$", "$2x$", "$\\dfrac{x}{4}$", "$\\dfrac{1}{2}$"], 0));
  q.push(mc("easy", "Simplify $\\dfrac{x^2}{x}$.", ["$x$", "$x^2$", "$1$", "$x^3$"], 0));
  q.push(mc("easy", "Simplify $\\dfrac{6x^2}{3x}$.", ["$2x$", "$2$", "$3x$", "$2x^2$"], 0));
  q.push(mc("easy", "$\\dfrac{x+2}{x+2}$ =", ["$1$", "$0$", "$x+2$", "$2$"], 0));
  q.push(mc("easy", "Restriction on $\\dfrac{1}{x-3}$.", ["$x\\ne3$", "$x\\ne0$", "$x\\ne-3$", "none"], 0));
  q.push(mc("easy", "Simplify $\\dfrac{4x}{8x}$.", ["$\\dfrac12$", "$\\dfrac{x}{2}$", "$2$", "$4$"], 0));
  q.push(ms("easy", "Simplifying rationals:", ["factor first", "cancel common factors", "state restrictions", "cancel terms"], [0, 1, 2]));
  q.push(ms("easy", "Restrictions:", ["denominator $\\ne0$", "find where it is $0$", "exclude those $x$", "numerator $\\ne0$"], [0, 1, 2]));
  q.push(ms("easy", "$\\dfrac{6x^2}{3x}$:", ["$=2x$", "divide the coefficients", "subtract exponents", "$=2$"], [0, 1, 2]));
  q.push(ms("easy", "Cancelling:", ["only common factors", "not terms", "$\\dfrac{x^2}{x}=x$", "any number"], [0, 1, 2]));
  q.push(tf("easy", "$\\dfrac{x^2}{x}=x$ for $x\\ne0$.", true));
  q.push(tf("easy", "$\\dfrac{x+2}{2}=x$.", false));
  q.push(tf("easy", "$\\dfrac{1}{x-3}$ needs $x\\ne3$.", true));
  q.push(fill("easy", "Simplify $\\dfrac{10x}{5}$.", ["2x"]));
  q.push(fill("easy", "Simplify $\\dfrac{x^3}{x}$.", ["x^2", "x²"]));
  q.push(fill("easy", "Restriction on $\\dfrac{5}{x+4}$.", ["x!=-4", "x \\ne -4", "x≠-4"]));
  q.push(num("easy", "$\\dfrac{9x^2}{3x}$ at $x=2$.", 6, 0));
  q.push(num("easy", "Excluded value of $\\dfrac{1}{x-7}$.", 7, 0));
  q.push(num("easy", "$\\dfrac{8x}{4x}$ as a number.", 2, 0));
  q.push(match("easy", "Match each to its simplest form.", ["$\\dfrac{2x}{4}$", "$\\dfrac{x^2}{x}$", "$\\dfrac{6x^2}{3x}$"], ["$\\dfrac{x}{2}$", "$x$", "$2x$"], [0, 1, 2]));
  q.push(mc("medium", "Simplify $\\dfrac{x^2-9}{x-3}$.", ["$x+3$", "$x-3$", "$x+9$", "$x^2$"], 0));
  q.push(mc("medium", "Simplify $\\dfrac{x^2+5x+6}{x+2}$.", ["$x+3$", "$x+2$", "$x+6$", "$x-3$"], 0));
  q.push(mc("medium", "Simplify $\\dfrac{x^2-x}{x}$.", ["$x-1$", "$x+1$", "$-1$", "$x$"], 0));
  q.push(mc("medium", "Restriction(s) on $\\dfrac{x^2-9}{x-3}$.", ["$x\\ne3$", "$x\\ne\\pm3$", "$x\\ne-3$", "none"], 0));
  q.push(mc("medium", "Simplify $\\dfrac{2x^2-8}{x-2}$.", ["$2(x+2)$", "$2(x-2)$", "$x+2$", "$2x+8$"], 0));
  q.push(mc("medium", "Simplify $\\dfrac{x^2-4}{x^2+4x+4}$.", ["$\\dfrac{x-2}{x+2}$", "$\\dfrac{x+2}{x-2}$", "$1$", "$\\dfrac{x-2}{x+4}$"], 0));
  q.push(ms("medium", "Simplifying $\\dfrac{x^2-9}{x-3}$:", ["factor numerator", "$(x-3)(x+3)$", "cancel $(x-3)$", "$=x+3$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Restrictions come from:", ["the original denominator", "$x-3\\ne0$", "$x\\ne3$", "the simplified form"], [0, 1, 2]));
  q.push(ms("medium", "$\\dfrac{x^2-4}{x^2+4x+4}$:", ["$(x-2)(x+2)$ over $(x+2)^2$", "cancel one $(x+2)$", "$\\dfrac{x-2}{x+2}$", "cancel $x^2$"], [0, 1, 2]));
  q.push(ms("medium", "Factor both parts:", ["numerator and denominator", "then cancel", "find restrictions", "add them"], [0, 1, 2]));
  q.push(tf("medium", "$\\dfrac{x^2-9}{x-3}=x+3$, $x\\ne3$.", true));
  q.push(tf("medium", "You may cancel the $x^2$ in $\\dfrac{x^2-4}{x^2+4x+4}$.", false));
  q.push(tf("medium", "$\\dfrac{x^2-x}{x}=x-1$.", true));
  q.push(fill("medium", "Simplify $\\dfrac{x^2-9}{x-3}$.", ["x+3"]));
  q.push(fill("medium", "Simplify $\\dfrac{x^2+5x+6}{x+2}$.", ["x+3"]));
  q.push(fill("medium", "Simplify $\\dfrac{2x^2-8}{x-2}$.", ["2(x+2)", "2x+4"]));
  q.push(num("medium", "$\\dfrac{x^2-9}{x-3}$ at $x=10$.", 13, 0));
  q.push(num("medium", "Excluded value of $\\dfrac{x^2-9}{x-3}$.", 3, 0));
  q.push(num("medium", "$\\dfrac{x^2-x}{x}$ at $x=5$.", 4, 0));
  q.push(match("medium", "Match each to its simplest form.", ["$\\dfrac{x^2-9}{x-3}$", "$\\dfrac{x^2-x}{x}$", "$\\dfrac{2x^2-8}{x-2}$"], ["$x+3$", "$x-1$", "$2(x+2)$"], [0, 1, 2]));
  q.push(mc("hard", "Multiply $\\dfrac{x^2-4}{x}\\cdot\\dfrac{x}{x+2}$.", ["$x-2$", "$x+2$", "$\\dfrac{x-2}{x}$", "$x^2-4$"], 0));
  q.push(mc("hard", "Divide $\\dfrac{x^2-1}{x}\\div\\dfrac{x-1}{x}$.", ["$x+1$", "$x-1$", "$\\dfrac{1}{x+1}$", "$x^2$"], 0));
  q.push(mc("hard", "Simplify $\\dfrac{x^2-5x+6}{x^2-9}$.", ["$\\dfrac{x-2}{x+3}$", "$\\dfrac{x-3}{x+3}$", "$\\dfrac{x-2}{x-3}$", "$1$"], 0));
  q.push(mc("hard", "Restrictions on $\\dfrac{x^2-5x+6}{x^2-9}$.", ["$x\\ne\\pm3$", "$x\\ne3$", "$x\\ne-3$", "$x\\ne2,3$"], 0));
  q.push(mc("hard", "Simplify $\\dfrac{2x^2+5x-3}{x^2-9}$.", ["$\\dfrac{2x-1}{x-3}$", "$\\dfrac{2x-1}{x+3}$", "$\\dfrac{2x+1}{x-3}$", "$1$"], 0));
  q.push(ms("hard", "Multiplying rationals:", ["factor everything", "cancel across", "multiply what remains", "add numerators"], [0, 1, 2]));
  q.push(ms("hard", "Dividing rationals:", ["multiply by the reciprocal", "flip the divisor", "then simplify", "subtract"], [0, 1, 2]));
  q.push(ms("hard", "$\\dfrac{x^2-5x+6}{x^2-9}$:", ["$(x-2)(x-3)$ on top", "$(x-3)(x+3)$ on bottom", "cancel $(x-3)$", "$\\dfrac{x-2}{x+3}$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Restrictions include:", ["zeros of every denominator", "factors that were cancelled", "$x\\ne\\pm3$", "only the final denominator"], [0, 1, 2]));
  q.push(tf("hard", "$\\dfrac{x^2-1}{x}\\div\\dfrac{x-1}{x}=x+1$.", true));
  q.push(tf("hard", "$\\dfrac{x^2-5x+6}{x^2-9}=\\dfrac{x-2}{x+3}$.", true));
  q.push(tf("hard", "When dividing, multiply by the reciprocal of the first fraction.", false));
  q.push(fill("hard", "Simplify $\\dfrac{x^2-5x+6}{x^2-9}$.", ["(x-2)/(x+3)", "\\dfrac{x-2}{x+3}"]));
  q.push(fill("hard", "$\\dfrac{x^2-4}{x}\\cdot\\dfrac{x}{x+2}=$", ["x-2"]));
  q.push(fill("hard", "$\\dfrac{x^2-1}{x}\\div\\dfrac{x-1}{x}=$", ["x+1"]));
  q.push(num("hard", "$\\dfrac{x^2-5x+6}{x^2-9}$ at $x=5$ (decimal).", 0.375, 0.01));
  q.push(num("hard", "Number of restrictions on $\\dfrac{x^2-5x+6}{x^2-9}$.", 2, 0));
  q.push(num("hard", "$\\dfrac{x^2-4}{x}\\cdot\\dfrac{x}{x+2}$ at $x=10$.", 8, 0));
  q.push(order("hard", "Order the steps to simplify $\\dfrac{x^2-5x+6}{x^2-9}$.", ["Factor top: $(x-2)(x-3)$", "Factor bottom: $(x-3)(x+3)$", "Cancel $(x-3)$", "$\\dfrac{x-2}{x+3}$"]));
  q.push(match("hard", "Match each to its result.", ["$\\dfrac{x^2-4}{x}\\cdot\\dfrac{x}{x+2}$", "$\\dfrac{x^2-1}{x}\\div\\dfrac{x-1}{x}$", "$\\dfrac{x^2-5x+6}{x^2-9}$"], ["$x-2$", "$x+1$", "$\\dfrac{x-2}{x+3}$"], [0, 1, 2]));
  return q;
}

// ── 2.4 Adding & Subtracting Rational Expressions ────────────
function g24() {
  const q = [];
  q.push(mc("easy", "$\\dfrac{1}{x}+\\dfrac{2}{x}$ =", ["$\\dfrac{3}{x}$", "$\\dfrac{2}{x}$", "$\\dfrac{3}{2x}$", "$\\dfrac{3}{x^2}$"], 0));
  q.push(mc("easy", "$\\dfrac{3}{x}-\\dfrac{1}{x}$ =", ["$\\dfrac{2}{x}$", "$\\dfrac{4}{x}$", "$\\dfrac{2}{x^2}$", "$2$"], 0));
  q.push(mc("easy", "LCD of $\\dfrac{1}{2}$ and $\\dfrac{1}{3}$.", ["$6$", "$5$", "$2$", "$3$"], 0));
  q.push(mc("easy", "$\\dfrac{x}{4}+\\dfrac{x}{4}$ =", ["$\\dfrac{x}{2}$", "$\\dfrac{2x}{8}$", "$\\dfrac{x}{4}$", "$\\dfrac{x}{8}$"], 0));
  q.push(mc("easy", "LCD of $\\dfrac{1}{x}$ and $\\dfrac{1}{x^2}$.", ["$x^2$", "$x$", "$x^3$", "$1$"], 0));
  q.push(mc("easy", "$\\dfrac{2}{5}+\\dfrac{1}{5}$ =", ["$\\dfrac{3}{5}$", "$\\dfrac{3}{10}$", "$\\dfrac{2}{5}$", "$\\dfrac{3}{25}$"], 0));
  q.push(ms("easy", "Adding fractions:", ["need a common denominator", "add the numerators", "keep the denominator", "add denominators"], [0, 1, 2]));
  q.push(ms("easy", "With the same denominator:", ["just add the tops", "$\\dfrac1x+\\dfrac2x=\\dfrac3x$", "denominator unchanged", "add the bottoms"], [0, 1, 2]));
  q.push(ms("easy", "Finding the LCD:", ["use each factor", "highest power of each", "$x$ and $x^2$ give $x^2$", "always multiply"], [0, 1, 2]));
  q.push(ms("easy", "Subtracting:", ["common denominator first", "subtract numerators", "watch the signs", "subtract denominators"], [0, 1, 2]));
  q.push(tf("easy", "$\\dfrac1x+\\dfrac2x=\\dfrac3x$.", true));
  q.push(tf("easy", "$\\dfrac1x+\\dfrac1y=\\dfrac{1}{x+y}$.", false));
  q.push(tf("easy", "The LCD of $\\dfrac1x,\\dfrac1{x^2}$ is $x^2$.", true));
  q.push(fill("easy", "$\\dfrac{2}{x}+\\dfrac{3}{x}$ =", ["5/x", "\\dfrac{5}{x}"]));
  q.push(fill("easy", "$\\dfrac{5}{x}-\\dfrac{2}{x}$ =", ["3/x", "\\dfrac{3}{x}"]));
  q.push(fill("easy", "LCD of $\\dfrac{1}{6}$ and $\\dfrac{1}{4}$.", ["12"]));
  q.push(num("easy", "$\\dfrac{1}{x}+\\dfrac{2}{x}$ at $x=3$.", 1, 0));
  q.push(num("easy", "$x^2$ at $x=3$ (LCD of $\\dfrac1x,\\dfrac1{x^2}$).", 9, 0));
  q.push(num("easy", "$\\dfrac{3}{x}-\\dfrac{1}{x}$ at $x=4$ (decimal).", 0.5, 0.01));
  q.push(match("easy", "Match each result.", ["$\\dfrac1x+\\dfrac2x$", "$\\dfrac3x-\\dfrac1x$", "$\\dfrac{x}{4}+\\dfrac{x}{4}$"], ["$\\dfrac3x$", "$\\dfrac2x$", "$\\dfrac{x}{2}$"], [0, 1, 2]));
  q.push(mc("medium", "$\\dfrac{1}{x}+\\dfrac{1}{x+1}$ =", ["$\\dfrac{2x+1}{x(x+1)}$", "$\\dfrac{2}{2x+1}$", "$\\dfrac{1}{2x+1}$", "$\\dfrac{2x+1}{x+1}$"], 0));
  q.push(mc("medium", "$\\dfrac{2}{x}-\\dfrac{1}{x+2}$ =", ["$\\dfrac{x+4}{x(x+2)}$", "$\\dfrac{1}{x+2}$", "$\\dfrac{x-4}{x(x+2)}$", "$\\dfrac{3}{x+2}$"], 0));
  q.push(mc("medium", "$\\dfrac{3}{x}+\\dfrac{2}{x^2}$ =", ["$\\dfrac{3x+2}{x^2}$", "$\\dfrac{5}{x^2}$", "$\\dfrac{5}{x^3}$", "$\\dfrac{3x+2}{x^3}$"], 0));
  q.push(mc("medium", "LCD of $\\dfrac{1}{x-1}$ and $\\dfrac{1}{x+1}$.", ["$(x-1)(x+1)$", "$x^2$", "$x-1$", "$x+1$"], 0));
  q.push(mc("medium", "$\\dfrac{x}{x+1}+\\dfrac{1}{x+1}$ =", ["$1$", "$x$", "$\\dfrac{x}{x+1}$", "$x+1$"], 0));
  q.push(mc("medium", "$\\dfrac{1}{x-2}-\\dfrac{1}{x}$ =", ["$\\dfrac{2}{x(x-2)}$", "$\\dfrac{1}{x(x-2)}$", "$\\dfrac{-2}{x(x-2)}$", "$0$"], 0));
  q.push(ms("medium", "Adding $\\dfrac1x+\\dfrac1{x+1}$:", ["LCD $x(x+1)$", "$\\dfrac{(x+1)+x}{x(x+1)}$", "$\\dfrac{2x+1}{x(x+1)}$", "add denominators"], [0, 1, 2]));
  q.push(ms("medium", "LCD when denominators differ:", ["multiply the distinct factors", "$(x-1)(x+1)$", "rewrite each fraction", "just pick one"], [0, 1, 2]));
  q.push(ms("medium", "$\\dfrac{2}{x}-\\dfrac{1}{x+2}$:", ["LCD $x(x+2)$", "numerator $2(x+2)-x$", "$=x+4$", "$\\dfrac{x+4}{x(x+2)}$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Sign care when subtracting:", ["distribute the minus sign", "to every term", "avoid sign errors", "ignore signs"], [0, 1, 2]));
  q.push(tf("medium", "$\\dfrac1x+\\dfrac1{x+1}=\\dfrac{2x+1}{x(x+1)}$.", true));
  q.push(tf("medium", "$\\dfrac{x}{x+1}+\\dfrac{1}{x+1}=1$.", true));
  q.push(tf("medium", "The LCD of $\\dfrac1{x-1},\\dfrac1{x+1}$ is $x^2-1$.", true));
  q.push(fill("medium", "$\\dfrac1x+\\dfrac1{x+1}$ =", ["(2x+1)/(x(x+1))", "\\dfrac{2x+1}{x(x+1)}"]));
  q.push(fill("medium", "$\\dfrac{x}{x+1}+\\dfrac{1}{x+1}$ =", ["1"]));
  q.push(fill("medium", "$\\dfrac{1}{x-2}-\\dfrac{1}{x}$ =", ["2/(x(x-2))", "\\dfrac{2}{x(x-2)}"]));
  q.push(num("medium", "$\\dfrac1x+\\dfrac1{x+1}$ at $x=2$ (decimal).", 0.833, 0.01));
  q.push(num("medium", "$\\dfrac{x}{x+1}+\\dfrac1{x+1}$ at $x=9$.", 1, 0));
  q.push(num("medium", "$\\dfrac{1}{x-2}-\\dfrac{1}{x}$ at $x=4$ (decimal).", 0.25, 0.01));
  q.push(match("medium", "Match each result.", ["$\\dfrac1x+\\dfrac1{x+1}$", "$\\dfrac{x}{x+1}+\\dfrac{1}{x+1}$", "$\\dfrac1{x-2}-\\dfrac1x$"], ["$\\dfrac{2x+1}{x(x+1)}$", "$1$", "$\\dfrac{2}{x(x-2)}$"], [0, 1, 2]));
  q.push(mc("hard", "$\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$ =", ["$\\dfrac{2x}{x^2-1}$", "$\\dfrac{2}{x^2-1}$", "$\\dfrac{2x}{x+1}$", "$\\dfrac{1}{x^2-1}$"], 0));
  q.push(mc("hard", "$\\dfrac{x}{x-2}-\\dfrac{2}{x-2}$ =", ["$1$", "$x-2$", "$\\dfrac{x}{x-2}$", "$\\dfrac{x+2}{x-2}$"], 0));
  q.push(mc("hard", "$\\dfrac{3}{x-1}-\\dfrac{2}{x+1}$ =", ["$\\dfrac{x+5}{x^2-1}$", "$\\dfrac{1}{x^2-1}$", "$\\dfrac{x-5}{x^2-1}$", "$\\dfrac{5}{x^2-1}$"], 0));
  q.push(mc("hard", "The LCD of $\\dfrac{1}{x}+\\dfrac{1}{x+1}+\\dfrac{1}{x+2}$ is:", ["$x(x+1)(x+2)$", "$x^3$", "$x+3$", "$(x+1)$"], 0));
  q.push(mc("hard", "$\\dfrac{2x}{x^2-1}-\\dfrac{1}{x-1}$ =", ["$\\dfrac{1}{x+1}$", "$\\dfrac{2x-1}{x^2-1}$", "$\\dfrac{1}{x-1}$", "$\\dfrac{x}{x^2-1}$"], 0));
  q.push(ms("hard", "$\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$:", ["LCD $(x-1)(x+1)$", "numerator $2x$", "$\\dfrac{2x}{x^2-1}$", "add denominators"], [0, 1, 2]));
  q.push(ms("hard", "$\\dfrac{3}{x-1}-\\dfrac{2}{x+1}$:", ["LCD $x^2-1$", "$3(x+1)-2(x-1)$", "$=x+5$", "$\\dfrac{x+5}{x^2-1}$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Recognising a common factor:", ["$x^2-1=(x-1)(x+1)$", "helps find the LCD", "rewrite each fraction", "ignore it"], [0, 1, 2]));
  q.push(ms("hard", "Simplify after combining:", ["factor the result", "cancel if possible", "state restrictions", "never simplify"], [0, 1, 2]));
  q.push(tf("hard", "$\\dfrac{1}{x-1}+\\dfrac{1}{x+1}=\\dfrac{2x}{x^2-1}$.", true));
  q.push(tf("hard", "$\\dfrac{2x}{x^2-1}-\\dfrac{1}{x-1}=\\dfrac{1}{x+1}$.", true));
  q.push(tf("hard", "$\\dfrac{x}{x-2}-\\dfrac{2}{x-2}=x$.", false));
  q.push(fill("hard", "$\\dfrac1{x-1}+\\dfrac1{x+1}$ =", ["2x/(x^2-1)", "\\dfrac{2x}{x^2-1}"]));
  q.push(fill("hard", "$\\dfrac{3}{x-1}-\\dfrac{2}{x+1}$ =", ["(x+5)/(x^2-1)", "\\dfrac{x+5}{x^2-1}"]));
  q.push(fill("hard", "$\\dfrac{x}{x-2}-\\dfrac{2}{x-2}$ =", ["1"]));
  q.push(num("hard", "$\\dfrac1{x-1}+\\dfrac1{x+1}$ at $x=3$ (decimal).", 0.75, 0.01));
  q.push(num("hard", "$\\dfrac{3}{x-1}-\\dfrac2{x+1}$ at $x=2$ (decimal).", 2.333, 0.01));
  q.push(num("hard", "$\\dfrac{2x}{x^2-1}-\\dfrac1{x-1}$ at $x=3$ (decimal).", 0.25, 0.01));
  q.push(order("hard", "Order the steps to add $\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$.", ["LCD is $(x-1)(x+1)$", "Rewrite: $\\dfrac{(x+1)+(x-1)}{(x-1)(x+1)}$", "Numerator $2x$", "$\\dfrac{2x}{x^2-1}$"]));
  q.push(match("hard", "Match each result.", ["$\\dfrac1{x-1}+\\dfrac1{x+1}$", "$\\dfrac3{x-1}-\\dfrac2{x+1}$", "$\\dfrac{x}{x-2}-\\dfrac2{x-2}$"], ["$\\dfrac{2x}{x^2-1}$", "$\\dfrac{x+5}{x^2-1}$", "$1$"], [0, 1, 2]));
  return q;
}

// ── 2.5 Radicals & Equivalent Expressions ────────────────────
function g25() {
  const q = [];
  q.push(mc("easy", "$\\sqrt{16}$ =", ["$4$", "$8$", "$2$", "$16$"], 0));
  q.push(mc("easy", "$\\sqrt{9}\\cdot\\sqrt{4}$ =", ["$6$", "$13$", "$36$", "$5$"], 0));
  q.push(mc("easy", "Simplify $\\sqrt{8}$.", ["$2\\sqrt2$", "$4\\sqrt2$", "$2\\sqrt4$", "$\\sqrt8$"], 0));
  q.push(mc("easy", "$\\sqrt{25}$ =", ["$5$", "$\\pm5$", "$12.5$", "$625$"], 0));
  q.push(mc("easy", "$3\\sqrt2+2\\sqrt2$ =", ["$5\\sqrt2$", "$5\\sqrt4$", "$6\\sqrt2$", "$5$"], 0));
  q.push(mc("easy", "$\\sqrt{x^2}$ (for $x\\ge0$) =", ["$x$", "$x^2$", "$2x$", "$\\sqrt x$"], 0));
  q.push(ms("easy", "Simplifying $\\sqrt8$:", ["$\\sqrt{4\\cdot2}$", "$2\\sqrt2$", "find perfect-square factors", "$8\\sqrt1$"], [0, 1, 2]));
  q.push(ms("easy", "Like radicals:", ["$3\\sqrt2$ and $2\\sqrt2$", "add the coefficients", "$=5\\sqrt2$", "$\\sqrt2+\\sqrt3$"], [0, 1, 2]));
  q.push(ms("easy", "Product rule:", ["$\\sqrt a\\cdot\\sqrt b=\\sqrt{ab}$", "$\\sqrt9\\cdot\\sqrt4=6$", "$\\sqrt{36}=6$", "$\\sqrt a+\\sqrt b$"], [0, 1, 2]));
  q.push(ms("easy", "Perfect squares:", ["$4,9,16,25$", "$\\sqrt{16}=4$", "help simplify radicals", "$2,3,5$"], [0, 1, 2]));
  q.push(tf("easy", "$\\sqrt{16}=4$.", true));
  q.push(tf("easy", "$\\sqrt2+\\sqrt2=\\sqrt4$.", false));
  q.push(tf("easy", "$\\sqrt8=2\\sqrt2$.", true));
  q.push(fill("easy", "Simplify $\\sqrt{12}$.", ["2√3", "2\\sqrt3", "2 sqrt 3"]));
  q.push(fill("easy", "$\\sqrt{49}$ =", ["7"]));
  q.push(fill("easy", "$4\\sqrt3+\\sqrt3$ =", ["5√3", "5\\sqrt3"]));
  q.push(num("easy", "$\\sqrt{36}$.", 6, 0));
  q.push(num("easy", "$\\sqrt{9}\\cdot\\sqrt{16}$.", 12, 0));
  q.push(num("easy", "$\\sqrt{100}$.", 10, 0));
  q.push(match("easy", "Match each radical.", ["$\\sqrt{16}$", "$\\sqrt8$", "$\\sqrt{49}$"], ["$4$", "$2\\sqrt2$", "$7$"], [0, 1, 2]));
  q.push(mc("medium", "Simplify $\\sqrt{50}$.", ["$5\\sqrt2$", "$25\\sqrt2$", "$2\\sqrt5$", "$5\\sqrt5$"], 0));
  q.push(mc("medium", "$\\sqrt{18}+\\sqrt{2}$ =", ["$4\\sqrt2$", "$\\sqrt{20}$", "$3\\sqrt2$", "$2\\sqrt5$"], 0));
  q.push(mc("medium", "$\\sqrt{3}\\cdot\\sqrt{12}$ =", ["$6$", "$\\sqrt{15}$", "$36$", "$3\\sqrt{12}$"], 0));
  q.push(mc("medium", "Rationalize $\\dfrac{1}{\\sqrt2}$.", ["$\\dfrac{\\sqrt2}{2}$", "$\\sqrt2$", "$\\dfrac{2}{\\sqrt2}$", "$\\dfrac{1}{2}$"], 0));
  q.push(mc("medium", "$(\\sqrt5)^2$ =", ["$5$", "$\\sqrt{25}$", "$25$", "$\\sqrt5$"], 0));
  q.push(mc("medium", "Simplify $2\\sqrt{12}$.", ["$4\\sqrt3$", "$2\\sqrt3$", "$4\\sqrt6$", "$12\\sqrt2$"], 0));
  q.push(ms("medium", "$\\sqrt{50}=5\\sqrt2$ because:", ["$50=25\\cdot2$", "$\\sqrt{25}=5$", "factor out the square", "$50=2\\cdot25$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Combining radicals:", ["only like radicals add", "$\\sqrt{18}=3\\sqrt2$", "$3\\sqrt2+\\sqrt2=4\\sqrt2$", "$\\sqrt2+\\sqrt3=\\sqrt5$"], [0, 1, 2]));
  q.push(ms("medium", "Rationalizing $\\dfrac1{\\sqrt2}$:", ["multiply by $\\dfrac{\\sqrt2}{\\sqrt2}$", "$=\\dfrac{\\sqrt2}{2}$", "removes the root from the denominator", "leave it as is"], [0, 1, 2]));
  q.push(ms("medium", "$\\sqrt3\\cdot\\sqrt{12}$:", ["$=\\sqrt{36}$", "$=6$", "product rule", "$=\\sqrt{15}$"], [0, 1, 2]));
  q.push(tf("medium", "$\\sqrt{50}=5\\sqrt2$.", true));
  q.push(tf("medium", "$\\sqrt2+\\sqrt3=\\sqrt5$.", false));
  q.push(tf("medium", "$\\dfrac1{\\sqrt2}=\\dfrac{\\sqrt2}{2}$.", true));
  q.push(fill("medium", "Simplify $\\sqrt{50}$.", ["5√2", "5\\sqrt2"]));
  q.push(fill("medium", "$\\sqrt{18}+\\sqrt2$ =", ["4√2", "4\\sqrt2"]));
  q.push(fill("medium", "Rationalize $\\dfrac{1}{\\sqrt3}$.", ["√3/3", "\\dfrac{\\sqrt3}{3}"]));
  q.push(num("medium", "$\\sqrt3\\cdot\\sqrt{12}$.", 6, 0));
  q.push(num("medium", "$(\\sqrt7)^2$.", 7, 0));
  q.push(num("medium", "$\\sqrt{18}\\cdot\\sqrt2$.", 6, 0));
  q.push(match("medium", "Match each simplified radical.", ["$\\sqrt{50}$", "$\\sqrt{18}$", "$\\sqrt{12}$"], ["$5\\sqrt2$", "$3\\sqrt2$", "$2\\sqrt3$"], [0, 1, 2]));
  q.push(mc("hard", "Expand $(\\sqrt3+1)(\\sqrt3-1)$.", ["$2$", "$\\sqrt3$", "$4$", "$3$"], 0));
  q.push(mc("hard", "Expand $(\\sqrt5+2)^2$.", ["$9+4\\sqrt5$", "$9$", "$5+4\\sqrt5$", "$7+4\\sqrt5$"], 0));
  q.push(mc("hard", "Rationalize $\\dfrac{1}{\\sqrt3-1}$.", ["$\\dfrac{\\sqrt3+1}{2}$", "$\\sqrt3+1$", "$\\dfrac{\\sqrt3-1}{2}$", "$\\dfrac{1}{2}$"], 0));
  q.push(mc("hard", "Simplify $\\sqrt{75}-\\sqrt{12}$.", ["$3\\sqrt3$", "$\\sqrt{63}$", "$5\\sqrt3$", "$\\sqrt3$"], 0));
  q.push(mc("hard", "$\\dfrac{\\sqrt{18}}{\\sqrt2}$ =", ["$3$", "$\\sqrt{15}$", "$9$", "$\\sqrt{16}$"], 0));
  q.push(ms("hard", "$(\\sqrt3+1)(\\sqrt3-1)$:", ["difference of squares", "$(\\sqrt3)^2-1^2$", "$3-1=2$", "$=\\sqrt3$"], [0, 1, 2]));
  q.push(ms("hard", "$(\\sqrt5+2)^2$:", ["$5+4\\sqrt5+4$", "$9+4\\sqrt5$", "square the binomial", "$=9$"], [0, 1, 2]));
  q.push(ms("hard", "Rationalizing with a conjugate:", ["multiply by the conjugate", "$\\sqrt3-1$ uses $\\sqrt3+1$", "denominator becomes $2$", "square it"], [0, 1, 2]));
  q.push(ms("hard", "$\\sqrt{75}-\\sqrt{12}$:", ["$5\\sqrt3-2\\sqrt3$", "$=3\\sqrt3$", "both reduce to $\\sqrt3$", "$=\\sqrt{63}$"], [0, 1, 2]));
  q.push(tf("hard", "$(\\sqrt3+1)(\\sqrt3-1)=2$.", true));
  q.push(tf("hard", "$\\sqrt{75}-\\sqrt{12}=3\\sqrt3$.", true));
  q.push(tf("hard", "$(\\sqrt5+2)^2=9$.", false));
  q.push(fill("hard", "Expand $(\\sqrt3+1)(\\sqrt3-1)$.", ["2"]));
  q.push(fill("hard", "Simplify $\\sqrt{75}-\\sqrt{12}$.", ["3√3", "3\\sqrt3"]));
  q.push(fill("hard", "Rationalize $\\dfrac{1}{\\sqrt3-1}$.", ["(√3+1)/2", "\\dfrac{\\sqrt3+1}{2}"]));
  q.push(num("hard", "Value of $(\\sqrt3+1)(\\sqrt3-1)$.", 2, 0));
  q.push(num("hard", "$\\dfrac{\\sqrt{18}}{\\sqrt2}$.", 3, 0));
  q.push(num("hard", "Value of $(\\sqrt5+2)^2-4\\sqrt5$.", 9, 0));
  q.push(order("hard", "Order the steps to rationalize $\\dfrac{1}{\\sqrt3-1}$.", ["Multiply by $\\dfrac{\\sqrt3+1}{\\sqrt3+1}$", "Denominator $(\\sqrt3)^2-1=2$", "Numerator $\\sqrt3+1$", "$\\dfrac{\\sqrt3+1}{2}$"]));
  q.push(match("hard", "Match each to its value/form.", ["$(\\sqrt3+1)(\\sqrt3-1)$", "$\\sqrt{75}-\\sqrt{12}$", "$\\dfrac{\\sqrt{18}}{\\sqrt2}$"], ["$2$", "$3\\sqrt3$", "$3$"], [0, 1, 2]));
  return q;
}

export default [
  { code: "2.1", gen: g21 },
  { code: "2.2", gen: g22 },
  { code: "2.3", gen: g23 },
  { code: "2.4", gen: g24 },
  { code: "2.5", gen: g25 },
];
