// ALG1 Chapter 4 — Exponents, Radicals & Polynomial Operations. ~55 per topic.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";
const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);

// ── 4.1 Laws of Exponents & Rational Exponents ───────────────
function g41() {
  const q = [];
  for (let i = 0; i < 6; i++) { const base = ri(2, 5), e = ri(2, 4); q.push(num("easy", `Evaluate $${base}^{${e}}$.`, base ** e, 0)); }
  for (let i = 0; i < 6; i++) { const m = ri(2, 6), n = ri(2, 6); q.push(mcv("easy", `Simplify $x^{${m}} \\cdot x^{${n}}$.`, `$x^{${m + n}}$`, [`$x^{${m * n}}$`, `$x^{${Math.abs(m - n)}}$`, `$x^{${m + n + 1}}$`])); }
  q.push(mc("easy", "Simplify $(x^2)^3$.", ["$x^6$", "$x^5$", "$x^8$", "$x^9$"], 0));
  q.push(num("easy", "Evaluate $5^0$.", 1, 0));
  q.push(mc("easy", "Evaluate $2^{-2}$.", ["$\\tfrac14$", "$-4$", "$4$", "$-\\tfrac14$"], 0));
  q.push(tf("easy", "$a^m \\cdot a^n = a^{m+n}$.", true));
  q.push(tf("easy", "$a^m + a^n = a^{m+n}$.", false));
  q.push(mc("easy", "Simplify $\\dfrac{x^5}{x^2}$.", ["$x^3$", "$x^7$", "$x^{2.5}$", "$x^{10}$"], 0));
  q.push(fill("easy", "$x^7 \\cdot x^3 = x^{\\text{___}}$.", ["10"]));
  q.push(num("easy", "Evaluate $10^{-2}$ as a decimal.", 0.01, 0.001));
  q.push(mc("medium", "Simplify $(2x^3)^4$.", ["$16x^{12}$", "$8x^{12}$", "$16x^7$", "$2x^{12}$"], 0));
  q.push(num("medium", "Evaluate $27^{2/3}$.", 9, 0));
  q.push(num("medium", "Evaluate $16^{3/4}$.", 8, 0));
  q.push(num("medium", "Evaluate $64^{2/3}$.", 16, 0));
  q.push(num("medium", "Evaluate $81^{1/2}$.", 9, 0));
  q.push(mc("medium", "Simplify $a^{1/2}\\cdot a^{1/3}$.", ["$a^{5/6}$", "$a^{1/6}$", "$a^{2/5}$", "$a^{1/5}$"], 0));
  q.push(mc("medium", "Evaluate $\\left(\\tfrac12\\right)^{-3}$.", ["$8$", "$-8$", "$\\tfrac18$", "$6$"], 0));
  q.push(mcv("medium", "Simplify $\\dfrac{6a^5}{2a^2}$.", "$3a^3$", ["$3a^7$", "$4a^3$", "$3a^{2.5}$"]));
  q.push(num("medium", "Evaluate $3^4$.", 81, 0));
  q.push(num("medium", "Evaluate $2^6$.", 64, 0));
  q.push(mc("medium", "Simplify $(3x)^2$.", ["$9x^2$", "$3x^2$", "$6x^2$", "$9x$"], 0));
  q.push(fill("medium", "$100^{1/2} =$ ___.", ["10"]));
  q.push(tf("medium", "$8^{2/3} = 4$.", true));
  q.push(mc("hard", "Simplify $\\dfrac{x^4 \\cdot x^{-1}}{x^2}$.", ["$x$", "$x^2$", "$x^5$", "$x^{-1}$"], 0));
  q.push(mc("hard", "If $2^x = 5$, find $2^{x+3}$.", ["$40$", "$15$", "$8$", "$125$"], 0));
  q.push(num("hard", "Evaluate $32^{3/5}$.", 8, 0));
  q.push(num("hard", "Evaluate $125^{2/3}$.", 25, 0));
  q.push(mc("hard", "Simplify $(4x^{-2})^{-1}$.", ["$\\tfrac{x^2}{4}$", "$\\tfrac{4}{x^2}$", "$4x^2$", "$\\tfrac{1}{4x^2}$"], 0));
  q.push(mc("hard", "Simplify $\\dfrac{2^{n+1}}{2^{n-1}}$.", ["$4$", "$2$", "$2^{2n}$", "$1$"], 0));
  q.push(mcv("hard", "Simplify $\\left(\\dfrac{x^3}{y^{-2}}\\right)^2$.", "$x^6 y^4$", ["$\\tfrac{x^6}{y^4}$", "$x^6 y^{-4}$", "$x^5 y^2$"]));
  q.push(num("hard", "Evaluate $\\left(\\tfrac{8}{27}\\right)^{2/3} \\times 9$.", 4, 0.01, "$(8/27)^{2/3}=4/9$; $\\times 9 = 4$."));
  q.push(tf("hard", "$(a^{2/3})^6 = a^4$.", true));
  q.push(fill("hard", "In $(3a^2)^3$, the numerical coefficient is ___.", ["27"]));
  q.push(mc("hard", "Simplify $\\sqrt{50x^4}$ for $x \\ge 0$.", ["$5x^2\\sqrt2$", "$25x^2$", "$5x^2$", "$50x^2$"], 0));
  return q;
}

// ── 4.2 Operations with Radical Expressions ──────────────────
function g42() {
  const q = [];
  for (let i = 0; i < 5; i++) { const r = ri(2, 9); q.push(num("easy", `Evaluate $\\sqrt{${r * r}}$.`, r, 0)); }
  q.push(mc("easy", "Simplify $\\sqrt{50}$.", ["$5\\sqrt2$", "$25\\sqrt2$", "$2\\sqrt5$", "$\\sqrt{50}$"], 0));
  q.push(mc("easy", "Simplify $3\\sqrt2 + 4\\sqrt2$.", ["$7\\sqrt2$", "$7\\sqrt4$", "$12\\sqrt2$", "$7$"], 0));
  q.push(tf("easy", "$\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}$.", true));
  q.push(tf("easy", "$\\sqrt{9} + \\sqrt{16} = \\sqrt{25}$.", false, "$3 + 4 = 7$, not $5$."));
  q.push(mc("easy", "You can add radicals only when they are…", ["like radicals", "different", "perfect squares", "negative"], 0));
  q.push(fill("easy", "$\\sqrt{100} =$ ___.", ["10"]));
  q.push(mc("easy", "Simplify $5\\sqrt3 - 2\\sqrt3$.", ["$3\\sqrt3$", "$3$", "$7\\sqrt3$", "$3\\sqrt6$"], 0));
  q.push(mc("medium", "Simplify $\\sqrt{72}$.", ["$6\\sqrt2$", "$8\\sqrt3$", "$2\\sqrt{18}$", "$36\\sqrt2$"], 0));
  q.push(mc("medium", "Simplify $\\sqrt{12} + \\sqrt{27}$.", ["$5\\sqrt3$", "$\\sqrt{39}$", "$5\\sqrt6$", "$6\\sqrt3$"], 0));
  q.push(mc("medium", "Simplify $\\sqrt3 \\cdot \\sqrt6$.", ["$3\\sqrt2$", "$\\sqrt9$", "$18$", "$9\\sqrt2$"], 0));
  q.push(mc("medium", "Rationalize $\\dfrac{1}{\\sqrt2}$.", ["$\\tfrac{\\sqrt2}{2}$", "$\\sqrt2$", "$\\tfrac{1}{2}$", "$2\\sqrt2$"], 0));
  q.push(mc("medium", "Simplify $\\sqrt8 + \\sqrt{18}$.", ["$5\\sqrt2$", "$\\sqrt{26}$", "$5\\sqrt4$", "$6\\sqrt2$"], 0));
  q.push(mc("medium", "Simplify $\\sqrt5 \\cdot \\sqrt{10}$.", ["$5\\sqrt2$", "$\\sqrt{15}$", "$50$", "$5\\sqrt5$"], 0));
  q.push(num("medium", "Simplify $\\sqrt{48}$ as $a\\sqrt3$. Enter $a$.", 4, 0));
  q.push(fill("medium", "$\\sqrt{75} = \\text{___}\\sqrt3$.", ["5"]));
  q.push(tf("medium", "$2\\sqrt3 + 3\\sqrt3 = 5\\sqrt3$.", true));
  q.push(num("medium", "Simplify $\\sqrt{200}$ as $a\\sqrt2$. Enter $a$.", 10, 0));
  q.push(mc("hard", "Rationalize $\\dfrac{3}{\\sqrt5}$.", ["$\\tfrac{3\\sqrt5}{5}$", "$\\tfrac{3}{5}$", "$3\\sqrt5$", "$\\tfrac{\\sqrt5}{3}$"], 0));
  q.push(mc("hard", "Simplify $2\\sqrt3 \\cdot 3\\sqrt3$.", ["$18$", "$6\\sqrt3$", "$6$", "$5\\sqrt3$"], 0));
  q.push(mc("hard", "Simplify $\\sqrt{50} - \\sqrt{8}$.", ["$3\\sqrt2$", "$\\sqrt{42}$", "$7\\sqrt2$", "$2\\sqrt2$"], 0));
  q.push(mc("hard", "Simplify $(\\sqrt3)^2 + \\sqrt{16}$.", ["$7$", "$\\sqrt{19}$", "$3\\sqrt{16}$", "$12$"], 0));
  q.push(mc("hard", "Simplify $\\sqrt{18} + \\sqrt{50} - \\sqrt{8}$.", ["$6\\sqrt2$", "$4\\sqrt2$", "$\\sqrt{60}$", "$8\\sqrt2$"], 0));
  q.push(num("hard", "Simplify $\\sqrt{98}$ as $a\\sqrt2$. Enter $a$.", 7, 0));
  q.push(tf("hard", "$\\sqrt{a^2} = |a|$ for all real $a$.", true));
  q.push(mc("hard", "Simplify $\\dfrac{\\sqrt{12}}{\\sqrt3}$.", ["$2$", "$\\sqrt4$", "$4$", "$\\sqrt{9}$"], 0));
  q.push(fill("hard", "$\\sqrt{45} = \\text{___}\\sqrt5$.", ["3"]));
  return q;
}

// ── 4.3 Adding, Subtracting & Multiplying Polynomials ────────
function g43() {
  const q = [];
  q.push(mcv("easy", "Add $(3x^2 + 2x - 1) + (x^2 - 5x + 4)$.", "$4x^2 - 3x + 3$", ["$4x^2 + 7x + 3$", "$2x^2 - 3x + 3$", "$4x^2 - 3x - 5$"]));
  q.push(mcv("easy", "Add $(2x + 5) + (3x - 2)$.", "$5x + 3$", ["$5x + 7$", "$6x + 3$", "$5x - 3$"]));
  q.push(mc("easy", "Like terms are terms with the same…", ["variable and exponent", "coefficient", "sign", "number of letters"], 0));
  q.push(mc("easy", "Combine $5x + 3x$.", ["$8x$", "$8x^2$", "$15x$", "$2x$"], 0));
  q.push(tf("easy", "$3x^2$ and $3x$ are like terms.", false));
  q.push(mcv("easy", "Expand $3x(x + 4)$.", "$3x^2 + 12x$", ["$3x^2 + 4$", "$3x + 12x$", "$3x^2 + 12$"]));
  q.push(fill("easy", "$4x + 2x =$ ___$x$.", ["6"]));
  q.push(mcv("easy", "Subtract $(5x - 2) - (2x + 1)$.", "$3x - 3$", ["$3x - 1$", "$3x + 3$", "$7x - 3$"]));
  q.push(mcv("medium", "Subtract $(5x^2 - 3x) - (2x^2 + x - 4)$.", "$3x^2 - 4x + 4$", ["$3x^2 - 2x + 4$", "$3x^2 - 4x - 4$", "$7x^2 - 4x + 4$"]));
  q.push(mcv("medium", "Expand $2x(3x^2 - x + 5)$.", "$6x^3 - 2x^2 + 10x$", ["$6x^3 - x + 5$", "$6x^2 - 2x^2 + 10x$", "$6x^3 - 2x^2 + 5$"]));
  q.push(mcv("medium", "Expand $(x + 3)(x - 5)$.", "$x^2 - 2x - 15$", ["$x^2 + 2x - 15$", "$x^2 - 15$", "$x^2 - 8x - 15$"]));
  q.push(mcv("medium", "Expand $(x - 2)(x + 7)$.", "$x^2 + 5x - 14$", ["$x^2 - 5x - 14$", "$x^2 + 5x + 14$", "$x^2 - 14$"]));
  q.push(mcv("medium", "Expand $2x^2(3x - 4)$.", "$6x^3 - 8x^2$", ["$6x^2 - 8x^2$", "$6x^3 - 8x$", "$5x^3 - 8x^2$"]));
  q.push(mcv("medium", "Add $(2x^2 + x) + (3x^2 - 4x + 2)$.", "$5x^2 - 3x + 2$", ["$5x^2 + 5x + 2$", "$5x^2 - 3x - 2$", "$6x^2 - 3x + 2$"]));
  q.push(mc("medium", "FOIL stands for…", ["First, Outer, Inner, Last", "Factor Out In Line", "Four Order Integer Law", "none"], 0));
  q.push(tf("medium", "To subtract polynomials, distribute the minus to every term.", true));
  q.push(mcv("hard", "Expand $(x + 2)(x^2 + 3x + 1)$.", "$x^3 + 5x^2 + 7x + 2$", ["$x^3 + 5x^2 + 6x + 2$", "$x^3 + 3x^2 + 7x + 2$", "$x^3 + 6x^2 + 7x + 2$"]));
  q.push(mcv("hard", "Expand $(2x + 1)(x^2 - x + 3)$.", "$2x^3 - x^2 + 5x + 3$", ["$2x^3 + x^2 + 5x + 3$", "$2x^3 - x^2 + 6x + 3$", "$2x^3 - 2x^2 + 5x + 3$"]));
  q.push(mcv("hard", "Expand $(x - 3)(x + 3)$.", "$x^2 - 9$", ["$x^2 + 9$", "$x^2 - 6x - 9$", "$x^2 - 3x - 9$"]));
  q.push(mcv("hard", "Subtract $(4x^2 - 2x + 1) - (x^2 - 3x)$.", "$3x^2 + x + 1$", ["$3x^2 - x + 1$", "$3x^2 + x - 1$", "$5x^2 + x + 1$"]));
  q.push(mc("hard", "The degree of $(x^2 + 1)(x + 3)$ is…", ["3", "2", "4", "1"], 0));
  q.push(mcv("hard", "Expand $(2x - 3)(2x + 3)$.", "$4x^2 - 9$", ["$4x^2 + 9$", "$4x^2 - 12x - 9$", "$2x^2 - 9$"]));
  q.push(tf("hard", "$(x+2)(x+3) = x^2 + 5x + 6$.", true));
  q.push(mcv("hard", "Expand $(x + 4)^2$ (as a product).", "$x^2 + 8x + 16$", ["$x^2 + 16$", "$x^2 + 4x + 16$", "$x^2 + 8x + 8$"]));
  q.push(fill("hard", "The constant term of $(x + 2)(x + 5)$ is ___.", ["10"]));
  return q;
}

// ── 4.4 Special Products ─────────────────────────────────────
function g44() {
  const q = [];
  for (let i = 0; i < 6; i++) { const b = ri(2, 9); q.push(mcv("easy", `Expand $(x + ${b})(x - ${b})$.`, `$x^2 - ${b * b}$`, [`$x^2 + ${b * b}$`, `$x^2 - ${2 * b}x - ${b * b}$`, `$x^2 - ${b * b}x$`])); }
  q.push(mc("easy", "$(a + b)(a - b) = $", ["$a^2 - b^2$", "$a^2 + b^2$", "$a^2 - 2ab + b^2$", "$a^2 + 2ab + b^2$"], 0));
  q.push(mc("easy", "$(a + b)^2 = $", ["$a^2 + 2ab + b^2$", "$a^2 + b^2$", "$a^2 - 2ab + b^2$", "$a^2 - b^2$"], 0));
  q.push(tf("easy", "$(x + 5)^2 = x^2 + 25$.", false, "You must add the middle term $10x$."));
  q.push(mcv("easy", "Expand $(x + 5)^2$.", "$x^2 + 10x + 25$", ["$x^2 + 25$", "$x^2 + 5x + 25$", "$x^2 + 10x + 5$"]));
  q.push(mc("easy", "In a difference of squares, the middle terms…", ["cancel", "double", "add", "stay"], 0));
  q.push(fill("easy", "$(x - 4)(x + 4) = x^2 - \\text{___}$.", ["16"]));
  for (let i = 0; i < 5; i++) { const b = ri(2, 8); q.push(mcv("medium", `Expand $(x + ${b})^2$.`, `$x^2 + ${2 * b}x + ${b * b}$`, [`$x^2 + ${b * b}$`, `$x^2 + ${b}x + ${b * b}$`, `$x^2 + ${2 * b}x + ${b}$`])); }
  for (let i = 0; i < 5; i++) { const b = ri(2, 8); q.push(mcv("medium", `Expand $(x - ${b})^2$.`, `$x^2 - ${2 * b}x + ${b * b}$`, [`$x^2 - ${b * b}$`, `$x^2 - ${b}x + ${b * b}$`, `$x^2 + ${2 * b}x + ${b * b}$`])); }
  q.push(mcv("medium", "Expand $(2x + 3)(2x - 3)$.", "$4x^2 - 9$", ["$4x^2 + 9$", "$2x^2 - 9$", "$4x^2 - 12x - 9$"]));
  q.push(mcv("medium", "Expand $(3x - 1)^2$.", "$9x^2 - 6x + 1$", ["$9x^2 + 1$", "$9x^2 - 6x - 1$", "$3x^2 - 6x + 1$"]));
  q.push(tf("medium", "$(x - 3)^2 = x^2 - 6x + 9$.", true));
  q.push(mcv("hard", "Expand $(5x + 4)(5x - 4)$.", "$25x^2 - 16$", ["$25x^2 + 16$", "$10x^2 - 16$", "$25x^2 - 40x - 16$"]));
  q.push(mcv("hard", "Expand $(2x - 5)^2$.", "$4x^2 - 20x + 25$", ["$4x^2 + 25$", "$4x^2 - 20x - 25$", "$2x^2 - 20x + 25$"]));
  q.push(mcv("hard", "Expand $(x + 7)(x - 7)$.", "$x^2 - 49$", ["$x^2 + 49$", "$x^2 - 14x - 49$", "$x^2 - 49x$"]));
  q.push(mcv("hard", "Expand $(4x + 1)^2$.", "$16x^2 + 8x + 1$", ["$16x^2 + 1$", "$16x^2 + 8x - 1$", "$8x^2 + 8x + 1$"]));
  q.push(mc("hard", "Which is a perfect square trinomial?", ["$x^2 + 6x + 9$", "$x^2 + 6x + 8$", "$x^2 - 9$", "$x^2 + 5x + 6$"], 0));
  q.push(mc("hard", "Which is a difference of squares?", ["$x^2 - 25$", "$x^2 + 25$", "$x^2 + 10x + 25$", "$x^2 - 5x$"], 0));
  q.push(tf("hard", "$(3x + 2)(3x - 2) = 9x^2 - 4$.", true));
  q.push(fill("hard", "$(x + 6)^2 = x^2 + \\text{___}x + 36$.", ["12"]));
  q.push(mc("hard", "$(a - b)^2 = $", ["$a^2 - 2ab + b^2$", "$a^2 - b^2$", "$a^2 + 2ab + b^2$", "$a^2 + b^2$"], 0));
  return q;
}

export default [
  { code: "4.1", gen: g41 },
  { code: "4.2", gen: g42 },
  { code: "4.3", gen: g43 },
  { code: "4.4", gen: g44 },
];
