// ALG1 Chapter 4 — Exponents, Radicals & Polynomial Operations. ~50 per topic.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";
const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);
const tri = (b, c) => { let s = "x^{2}"; if (b !== 0) s += ` ${sign(b)}x`; if (c !== 0) s += ` ${sign(c)}`; return `$${s}$`; };

// ── 4.1 Laws of Exponents & Rational Exponents ───────────────
function g41() {
  const q = [];
  for (let i = 0; i < 12; i++) { const b = ri(2, 6), e = ri(2, 4); q.push(num("easy", `Evaluate $${b}^{${e}}$.`, b ** e, 0)); }
  q.push(mcv("easy", "Simplify $x^3 \\cdot x^5$.", "$x^{8}$", ["$x^{15}$", "$x^{2}$", "$2x^{8}$"]));
  q.push(mcv("easy", "Simplify $\\dfrac{x^7}{x^3}$.", "$x^{4}$", ["$x^{10}$", "$x^{21}$", "$x^{2.3}$"]));
  q.push(mcv("easy", "Simplify $(x^2)^3$.", "$x^{6}$", ["$x^{5}$", "$x^{8}$", "$x^{9}$"]));
  q.push(num("easy", "Evaluate $5^0$.", 1, 0));
  q.push(num("easy", "Evaluate $2^{-2}$ as a decimal.", 0.25, 0.001));
  q.push(tf("easy", "$a^m \\cdot a^n = a^{m+n}$.", true));
  q.push(tf("easy", "$a^m + a^n = a^{m+n}$.", false));
  q.push(fill("easy", "$x^7 \\cdot x^3 = x^{\\text{___}}$.", ["10"]));
  q.push(fill("easy", "Any nonzero base to the power 0 equals ___.", ["1"]));
  q.push(mcv("medium", "Simplify $(2x^3)^4$.", "$16x^{12}$", ["$8x^{12}$", "$16x^{7}$", "$2x^{12}$"]));
  q.push(mcv("medium", "Simplify $(3x)^2$.", "$9x^{2}$", ["$3x^{2}$", "$6x^{2}$", "$9x$"]));
  q.push(num("medium", "Evaluate $27^{2/3}$.", 9, 0));
  q.push(num("medium", "Evaluate $16^{3/4}$.", 8, 0));
  q.push(num("medium", "Evaluate $64^{2/3}$.", 16, 0));
  q.push(num("medium", "Evaluate $\\left(\\tfrac12\\right)^{-3}$.", 8, 0));
  q.push(mcv("medium", "Rewrite $a^{-3}$ with a positive exponent.", "$\\dfrac{1}{a^{3}}$", ["$-a^{3}$", "$a^{3}$", "$3a$"]));
  q.push(mcv("medium", "Write $\\sqrt[3]{a^2}$ with a rational exponent.", "$a^{2/3}$", ["$a^{3/2}$", "$a^{6}$", "$a^{-2/3}$"]));
  q.push(tf("medium", "$8^{2/3} = 4$.", true));
  q.push(fill("medium", "$100^{1/2} =$ ___.", ["10"]));
  for (let i = 0; i < 6; i++) { const b = ri(2, 5), e = ri(2, 3); q.push(num("medium", `Evaluate $${b}^{${e}}$.`, b ** e, 0)); }
  q.push(mcv("hard", "Simplify $\\dfrac{x^4 \\cdot x^{-1}}{x^2}$.", "$x$", ["$x^{2}$", "$x^{5}$", "$\\dfrac{1}{x}$"]));
  q.push(mcv("hard", "Simplify $\\left(\\dfrac{x^3}{y^{-2}}\\right)^2$.", "$x^{6}y^{4}$", ["$\\dfrac{x^6}{y^4}$", "$x^{6}y^{-4}$", "$x^{5}y^{2}$"]));
  q.push(num("hard", "Evaluate $32^{3/5}$.", 8, 0));
  q.push(num("hard", "Evaluate $81^{3/4}$.", 27, 0));
  q.push(num("hard", "If $2^x = 5$, find $2^{x+2}$.", 20, 0));
  q.push(mcv("hard", "Simplify $\\dfrac{6a^5b^2}{2a^2b^5}$.", "$\\dfrac{3a^3}{b^3}$", ["$3a^{3}b^{3}$", "$\\dfrac{a^3}{3b^3}$", "$3a^{7}b^{7}$"]));
  q.push(mcv("hard", "Simplify $a^{1/2} \\cdot a^{1/3}$.", "$a^{5/6}$", ["$a^{1/6}$", "$a^{2/5}$", "$a^{1/5}$"]));
  q.push(tf("hard", "$(a^{2/3})^6 = a^4$.", true));
  q.push(num("hard", "Evaluate $\\left(\\tfrac{8}{27}\\right)^{2/3}$ as a fraction $\\tfrac{a}{b}$; enter $a$ if the answer is $\\tfrac{4}{9}$.", 4, 0));
  return q;
}

// ── 4.2 Operations with Radical Expressions ──────────────────
function g42() {
  const q = [];
  for (let i = 0; i < 18; i++) { const r = ri(2, 15); q.push(num(i < 12 ? "easy" : "medium", `Evaluate $\\sqrt{${r * r}}$.`, r, 0)); }
  q.push(mcv("easy", "Simplify $\\sqrt{50}$.", "$5\\sqrt{2}$", ["$25\\sqrt{2}$", "$5\\sqrt{5}$", "$2\\sqrt{5}$"]));
  q.push(mcv("easy", "Simplify $3\\sqrt{2} + 4\\sqrt{2}$.", "$7\\sqrt{2}$", ["$7\\sqrt{4}$", "$12\\sqrt{2}$", "$7$"]));
  q.push(tf("easy", "$\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}$.", true));
  q.push(tf("easy", "$\\sqrt{a} + \\sqrt{b} = \\sqrt{a+b}$.", false));
  q.push(fill("easy", "$\\sqrt{81} =$ ___.", ["9"]));
  q.push(mc("easy", "You can add radicals only when they are…", ["like radicals (same root)", "both even", "both prime", "different"], 0));
  q.push(mcv("medium", "Simplify $\\sqrt{72}$.", "$6\\sqrt{2}$", ["$8\\sqrt{2}$", "$6\\sqrt{3}$", "$36\\sqrt{2}$"]));
  q.push(mcv("medium", "Simplify $\\sqrt{12} + \\sqrt{27}$.", "$5\\sqrt{3}$", ["$5\\sqrt{6}$", "$\\sqrt{39}$", "$6\\sqrt{3}$"]));
  q.push(mcv("medium", "Simplify $\\sqrt{8} + \\sqrt{18}$.", "$5\\sqrt{2}$", ["$\\sqrt{26}$", "$5\\sqrt{4}$", "$6\\sqrt{2}$"]));
  q.push(mcv("medium", "Simplify $\\sqrt{3}\\cdot\\sqrt{6}$.", "$3\\sqrt{2}$", ["$\\sqrt{9}$", "$3\\sqrt{3}$", "$9$"]));
  q.push(mcv("medium", "Simplify $\\sqrt{5}\\cdot\\sqrt{10}$.", "$5\\sqrt{2}$", ["$\\sqrt{15}$", "$5\\sqrt{5}$", "$50$"]));
  q.push(mcv("medium", "Simplify $5\\sqrt{3} - 2\\sqrt{3}$.", "$3\\sqrt{3}$", ["$3$", "$7\\sqrt{3}$", "$3\\sqrt{6}$"]));
  q.push(mcv("medium", "Simplify $\\sqrt{20}$.", "$2\\sqrt{5}$", ["$4\\sqrt{5}$", "$2\\sqrt{10}$", "$5\\sqrt{2}$"]));
  q.push(fill("medium", "$\\sqrt{50} = 5\\sqrt{\\text{___}}$.", ["2"]));
  q.push(mcv("hard", "Rationalize $\\dfrac{1}{\\sqrt{2}}$.", "$\\dfrac{\\sqrt{2}}{2}$", ["$\\sqrt{2}$", "$\\dfrac{1}{2}$", "$2\\sqrt{2}$"]));
  q.push(mcv("hard", "Rationalize $\\dfrac{3}{\\sqrt{5}}$.", "$\\dfrac{3\\sqrt{5}}{5}$", ["$3\\sqrt{5}$", "$\\dfrac{3}{5}$", "$\\dfrac{\\sqrt{5}}{5}$"]));
  q.push(mcv("hard", "Simplify $\\sqrt{50x^4}$ (for $x \\ge 0$).", "$5x^{2}\\sqrt{2}$", ["$25x^{2}$", "$5x^{2}$", "$50x^{2}$"]));
  q.push(mcv("hard", "Simplify $2\\sqrt{3}\\cdot 3\\sqrt{6}$.", "$18\\sqrt{2}$", ["$6\\sqrt{18}$", "$5\\sqrt{9}$", "$18\\sqrt{18}$"]));
  q.push(mcv("hard", "Simplify $\\sqrt{75} - \\sqrt{12}$.", "$3\\sqrt{3}$", ["$\\sqrt{63}$", "$3\\sqrt{6}$", "$7\\sqrt{3}$"]));
  q.push(tf("hard", "$\\sqrt{9 + 16} = 3 + 4$.", false, "$\\sqrt{25}=5$, not 7."));
  q.push(num("hard", "$\\left(\\sqrt{7}\\right)^2 = $ ___.", 7, 0));
  q.push(num("hard", "$\\sqrt{144} + \\sqrt{25} = $ ___.", 17, 0));
  return q;
}

// ── 4.3 Add/Subtract/Multiply Polynomials ────────────────────
function g43() {
  const q = [];
  q.push(mcv("easy", "Add $(3x^2 + 2x - 1) + (x^2 - 5x + 4)$.", "$4x^{2} - 3x + 3$", ["$4x^{2} + 7x + 3$", "$2x^{2} - 3x + 3$", "$4x^{2} - 3x - 5$"]));
  q.push(mcv("easy", "Add $(2x^2 + x) + (3x^2 - 4x + 2)$.", "$5x^{2} - 3x + 2$", ["$5x^{2} + 5x + 2$", "$6x^{2} - 3x + 2$", "$5x^{2} - 3x$"]));
  q.push(mcv("easy", "Expand $3x(2x^2 - x + 5)$.", "$6x^{3} - 3x^{2} + 15x$", ["$6x^{3} - x + 5$", "$6x^{2} - 3x + 15$", "$5x^{3} - 3x^{2} + 15x$"]));
  q.push(mc("easy", "Like terms have the same…", ["variable and exponent", "coefficient", "sign", "degree only"], 0));
  q.push(tf("easy", "$3x^2$ and $5x^2$ are like terms.", true));
  q.push(tf("easy", "$3x^2$ and $3x$ are like terms.", false));
  q.push(fill("easy", "$(2x + 3) + (x - 1) = 3x + \\text{___}$.", ["2"]));
  q.push(mc("easy", "FOIL is used to multiply two…", ["binomials", "monomials", "fractions", "radicals"], 0));
  q.push(mcv("medium", "Subtract $(5x^2 - 3x) - (2x^2 + x - 4)$.", "$3x^{2} - 4x + 4$", ["$3x^{2} - 2x - 4$", "$7x^{2} - 4x + 4$", "$3x^{2} - 4x - 4$"]));
  q.push(mcv("medium", "Subtract $(4x^2 - 2x + 1) - (x^2 - 3x)$.", "$3x^{2} + x + 1$", ["$3x^{2} - 5x + 1$", "$5x^{2} + x + 1$", "$3x^{2} + x - 1$"]));
  q.push(mcv("medium", "Expand $(x + 3)(x - 5)$.", "$x^{2} - 2x - 15$", ["$x^{2} + 2x - 15$", "$x^{2} - 15$", "$x^{2} - 8x - 15$"]));
  q.push(mcv("medium", "Expand $(x - 2)(x + 7)$.", "$x^{2} + 5x - 14$", ["$x^{2} - 5x - 14$", "$x^{2} + 5x + 14$", "$x^{2} - 14$"]));
  q.push(mcv("medium", "Expand $2x^2(3x - 4)$.", "$6x^{3} - 8x^{2}$", ["$6x^{3} - 8x$", "$5x^{3} - 8x^{2}$", "$6x^{2} - 8x^{2}$"]));
  q.push(mcv("medium", "Expand $(2x + 1)(x + 3)$.", "$2x^{2} + 7x + 3$", ["$2x^{2} + 5x + 3$", "$2x^{2} + 4x + 3$", "$2x^{2} + 7x + 4$"]));
  q.push(fill("medium", "The degree of $(x+2)(x^2+1)$ is ___.", ["3"]));
  q.push(mcv("hard", "Expand $(x + 2)(x^2 + 3x + 1)$.", "$x^{3} + 5x^{2} + 7x + 2$", ["$x^{3} + 3x^{2} + 7x + 2$", "$x^{3} + 5x^{2} + 5x + 2$", "$x^{3} + 6x^{2} + 7x + 2$"]));
  q.push(mcv("hard", "Expand $(2x + 1)(x^2 - x + 3)$.", "$2x^{3} - x^{2} + 5x + 3$", ["$2x^{3} + x^{2} + 5x + 3$", "$2x^{3} - x^{2} + 6x + 3$", "$2x^{3} - 2x^{2} + 5x + 3$"]));
  q.push(mcv("hard", "Simplify $(3x^2 - x + 2) - (x^2 - 4x - 1)$.", "$2x^{2} + 3x + 3$", ["$2x^{2} - 5x + 1$", "$2x^{2} + 3x + 1$", "$4x^{2} + 3x + 3$"]));
  q.push(mcv("hard", "Expand $(x - 4)(2x^2 + x - 3)$.", "$2x^{3} - 7x^{2} - 7x + 12$", ["$2x^{3} + 7x^{2} - 7x + 12$", "$2x^{3} - 7x^{2} + 7x + 12$", "$2x^{3} - 9x^{2} - 7x + 12$"]));
  q.push(tf("hard", "Subtracting a polynomial means adding the opposite of every term.", true));
  q.push(num("hard", "The degree of $(x^2+1)(x^3-2)$ is ___.", 5, 0));
  q.push(mcv("hard", "Simplify $3(x^2 - 2x) - 2(x^2 + x)$.", "$x^{2} - 8x$", ["$x^{2} - 4x$", "$5x^{2} - 8x$", "$x^{2} - 8$"]));
  // randomized FOIL expansions (answers built by construction)
  for (let i = 0; i < 20; i++) {
    const p = rnz(-6, 6), r = rnz(-6, 6), b = p + r, c = p * r;
    q.push(mcv(i < 8 ? "easy" : i < 14 ? "medium" : "hard", `Expand $(x ${sign(p)})(x ${sign(r)})$.`, tri(b, c), [tri(b, -c), tri(-b, c), tri(b + 2, c)]));
  }
  return q;
}

// ── 4.4 Special Polynomial Products ──────────────────────────
function g44() {
  const q = [];
  for (let i = 0; i < 16; i++) { const a = ri(2, 9); q.push(mcv(i < 8 ? "easy" : i < 12 ? "medium" : "hard", `Expand $(x + ${a})(x - ${a})$.`, `$x^{2} - ${a * a}$`, [`$x^{2} + ${a * a}$`, `$x^{2} - ${2 * a}x - ${a * a}$`, `$x^{2} - ${a}$`])); }
  q.push(mc("easy", "$(a+b)(a-b) = $", ["$a^2 - b^2$", "$a^2 + b^2$", "$a^2 - 2ab + b^2$", "$a^2 + 2ab + b^2$"], 0));
  q.push(mc("easy", "$(a+b)^2 = $", ["$a^2 + 2ab + b^2$", "$a^2 + b^2$", "$a^2 - 2ab + b^2$", "$a^2 - b^2$"], 0));
  q.push(tf("easy", "$(x+5)^2 = x^2 + 25$.", false, "Missing the middle term $10x$."));
  q.push(fill("easy", "$(x-3)(x+3) = x^2 - \\text{___}$.", ["9"]));
  for (let i = 0; i < 12; i++) { const a = ri(2, 8); q.push(mcv(i < 6 ? "medium" : "hard", `Expand $(x + ${a})^2$.`, `$x^{2} + ${2 * a}x + ${a * a}$`, [`$x^{2} + ${a * a}$`, `$x^{2} + ${a}x + ${a * a}$`, `$x^{2} + ${2 * a}x + ${a}$`])); }
  for (let i = 0; i < 12; i++) { const a = ri(2, 8); q.push(mcv(i < 6 ? "medium" : "hard", `Expand $(x - ${a})^2$.`, `$x^{2} - ${2 * a}x + ${a * a}$`, [`$x^{2} + ${a * a}$`, `$x^{2} - ${a}x + ${a * a}$`, `$x^{2} - ${2 * a}x - ${a * a}$`])); }
  q.push(mcv("medium", "Expand $(2x + 3)(2x - 3)$.", "$4x^{2} - 9$", ["$4x^{2} + 9$", "$2x^{2} - 9$", "$4x^{2} - 6x - 9$"]));
  q.push(mcv("hard", "Expand $(3x - 1)^2$.", "$9x^{2} - 6x + 1$", ["$9x^{2} + 1$", "$3x^{2} - 6x + 1$", "$9x^{2} - 3x + 1$"]));
  q.push(mcv("hard", "Expand $(5x + 4)(5x - 4)$.", "$25x^{2} - 16$", ["$25x^{2} + 16$", "$5x^{2} - 16$", "$25x^{2} - 40x - 16$"]));
  q.push(mcv("hard", "Expand $(2x - 5)^2$.", "$4x^{2} - 20x + 25$", ["$4x^{2} + 25$", "$4x^{2} - 10x + 25$", "$4x^{2} - 20x - 25$"]));
  q.push(mcv("hard", "Expand $(4x + 1)^2$.", "$16x^{2} + 8x + 1$", ["$16x^{2} + 1$", "$16x^{2} + 4x + 1$", "$8x^{2} + 8x + 1$"]));
  q.push(mc("hard", "Why do the middle terms cancel in $(a-b)(a+b)$?", ["$+ab$ and $-ab$ sum to 0", "there is no middle term", "$a=b$", "both are squared"], 0));
  q.push(tf("hard", "$(a - b)^2 = a^2 - 2ab + b^2$.", true));
  q.push(fill("hard", "$(x + 6)^2 = x^2 + \\text{___}x + 36$.", ["12"]));
  return q;
}

export default [
  { code: "4.1", gen: g41 },
  { code: "4.2", gen: g42 },
  { code: "4.3", gen: g43 },
  { code: "4.4", gen: g44 },
];
