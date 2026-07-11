// MBF3C Unit 1 — Quadratic Relations: question bank (60 per topic).
// 1.1 combines expanding + factoring (authored). 1.2/1.3/1.4 match MCF3M topics — reuse those generators.
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";
import mcf3m1 from "../bank-mcf3m/u1.mjs";
import mcf3m2 from "../bank-mcf3m/u2.mjs";

const g1 = Object.fromEntries(mcf3m1.map((t) => [t.code, t.gen]));
const g2 = Object.fromEntries(mcf3m2.map((t) => [t.code, t.gen]));

// ── 1.1 Expanding & Factoring Quadratics ─────────────────────
function g11() {
  const q = [];
  q.push(mc("easy", "$3(x+4)$ =", ["$3x+12$", "$3x+4$", "$x+12$", "$3x+7$"], 0));
  q.push(mc("easy", "$(x+2)(x+3)$ =", ["$x^2+5x+6$", "$x^2+6x+5$", "$x^2+6$", "$x^2+5$"], 0));
  q.push(mc("easy", "Factor $x^2+5x+6$.", ["$(x+2)(x+3)$", "$(x+1)(x+6)$", "$(x-2)(x-3)$", "$(x+5)(x+6)$"], 0));
  q.push(mc("easy", "$(x-4)(x+4)$ =", ["$x^2-16$", "$x^2+16$", "$x^2-8x-16$", "$x^2-8$"], 0));
  q.push(mc("easy", "Factor $x^2-9$.", ["$(x-3)(x+3)$", "$(x-9)(x+1)$", "$(x-3)^2$", "$(x+3)^2$"], 0));
  q.push(mc("easy", "Common factor of $4x+8$.", ["$4$", "$2$", "$x$", "$8$"], 0));
  q.push(ms("easy", "Expanding:", ["distribute", "FOIL", "collect like terms", "add exponents"], [0, 1, 2]));
  q.push(ms("easy", "Factoring:", ["take out a common factor first", "the reverse of expanding", "product $c$, sum $b$", "add the terms"], [0, 1, 2]));
  q.push(ms("easy", "$(x+5)^2$:", ["$x^2+10x+25$", "middle term $2\\cdot5x$", "a perfect square", "$x^2+25$"], [0, 1, 2]));
  q.push(ms("easy", "Difference of squares:", ["$a^2-b^2=(a-b)(a+b)$", "$x^2-9=(x-3)(x+3)$", "two perfect squares", "$a^2+b^2$"], [0, 1, 2]));
  q.push(tf("easy", "$(x+2)(x+3)=x^2+5x+6$.", true));
  q.push(tf("easy", "$(x+5)^2=x^2+25$.", false));
  q.push(tf("easy", "$x^2-9=(x-3)(x+3)$.", true));
  q.push(fill("easy", "Expand $(x+1)(x+4)$.", ["x^2+5x+4", "x²+5x+4"]));
  q.push(fill("easy", "Factor $x^2+8x+15$.", ["(x+3)(x+5)", "(x+5)(x+3)"]));
  q.push(fill("easy", "Factor $2x^2+8x$.", ["2x(x+4)"]));
  q.push(num("easy", "Coefficient of $x$ in $(x+2)(x+3)$.", 5, 0));
  q.push(num("easy", "Constant in $(x+5)(x-2)$.", -10, 0));
  q.push(num("easy", "GCF of $6x+9$.", 3, 0));
  q.push(match("easy", "Match each.", ["$(x+3)^2$", "$x^2-x-6$", "$(x-4)(x+4)$"], ["$x^2+6x+9$", "$(x-3)(x+2)$", "$x^2-16$"], [0, 1, 2]));
  q.push(mc("medium", "$(2x-3)(x+5)$ =", ["$2x^2+7x-15$", "$2x^2-7x-15$", "$2x^2+13x-15$", "$2x^2+7x+15$"], 0));
  q.push(mc("medium", "$(3x+2)^2$ =", ["$9x^2+12x+4$", "$9x^2+4$", "$9x^2+6x+4$", "$6x^2+12x+4$"], 0));
  q.push(mc("medium", "Factor $x^2-2x-15$.", ["$(x-5)(x+3)$", "$(x+5)(x-3)$", "$(x-15)(x+1)$", "$(x-5)(x-3)$"], 0));
  q.push(mc("medium", "Factor $x^2-10x+25$.", ["$(x-5)^2$", "$(x+5)^2$", "$(x-5)(x+5)$", "$(x-25)(x-1)$"], 0));
  q.push(mc("medium", "$-2(x^2-3x+1)$ =", ["$-2x^2+6x-2$", "$-2x^2-6x-2$", "$-2x^2+6x+2$", "$-2x^2-3x+1$"], 0));
  q.push(mc("medium", "Factor fully $5x^2-20$.", ["$5(x-2)(x+2)$", "$5(x^2-4)$", "$(5x-4)(x+5)$", "$5(x-4)(x+1)$"], 0));
  q.push(ms("medium", "$(2x-3)(x+5)$:", ["$2x^2$", "$10x-3x=7x$", "$-15$", "$2x^2+7x-15$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Perfect-square trinomial:", ["$x^2-10x+25=(x-5)^2$", "first & last are squares", "middle $=2ab$", "$x^2+25$"], [0, 1, 2]));
  q.push(ms("medium", "Factor fully:", ["GCF first", "then a pattern", "$5x^2-20=5(x^2-4)$", "stop early"], [0, 1, 2]));
  q.push(ms("medium", "Collecting like terms:", ["combine $x^2$ with $x^2$", "watch the signs", "after distributing", "add exponents"], [0, 1, 2]));
  q.push(tf("medium", "$(3x+2)^2=9x^2+12x+4$.", true));
  q.push(tf("medium", "$5x^2-20=5(x-2)(x+2)$.", true));
  q.push(tf("medium", "$(x-6)(x+2)=x^2+4x-12$.", false));
  q.push(fill("medium", "Expand $(x-3)^2$.", ["x^2-6x+9", "x²-6x+9"]));
  q.push(fill("medium", "Factor $x^2+4x-21$.", ["(x+7)(x-3)", "(x-3)(x+7)"]));
  q.push(fill("medium", "Expand $(2x+1)(x+3)$.", ["2x^2+7x+3", "2x²+7x+3"]));
  q.push(num("medium", "Coefficient of $x$ in $(2x-3)(x+5)$.", 7, 0));
  q.push(num("medium", "Repeated root of $(x-5)^2$.", 5, 0));
  q.push(num("medium", "GCF to remove from $5x^2-20$.", 5, 0));
  q.push(match("medium", "Match each.", ["$(2x-3)(x+5)$", "$x^2-10x+25$", "$5x^2-20$"], ["$2x^2+7x-15$", "$(x-5)^2$", "$5(x-2)(x+2)$"], [0, 1, 2]));
  q.push(mc("hard", "$(x+2)(x^2-3x+1)$ =", ["$x^3-x^2-5x+2$", "$x^3-x^2+5x+2$", "$x^3+x^2-5x+2$", "$x^3-5x+2$"], 0));
  q.push(mc("hard", "$(x+2)(x+3)-(x+1)(x-1)$ =", ["$5x+7$", "$5x+5$", "$x^2+5x+7$", "$5x-7$"], 0));
  q.push(mc("hard", "Factor fully $2x^2-18$.", ["$2(x-3)(x+3)$", "$(2x-3)(x+6)$", "$2(x^2-9)$", "$(x-3)(2x+6)$"], 0));
  q.push(mc("hard", "$3(x-2)^2$ =", ["$3x^2-12x+12$", "$3x^2-4x+4$", "$3x^2-12x+4$", "$3x^2-6x+12$"], 0));
  q.push(mc("hard", "$(x+1)^3$ =", ["$x^3+3x^2+3x+1$", "$x^3+1$", "$x^3+3x+1$", "$x^3+x^2+x+1$"], 0));
  q.push(ms("hard", "$(x+2)(x^2-3x+1)$:", ["multiply term by term", "collect like terms", "$x^3-x^2-5x+2$", "$x^3-5x+2$"], [0, 1, 2]));
  q.push(ms("hard", "$2x^2-18$ fully:", ["common factor 2", "$2(x^2-9)$", "$2(x-3)(x+3)$", "cannot factor"], [0, 1, 2]));
  q.push(ms("hard", "$3(x-2)^2$:", ["square first", "$x^2-4x+4$", "then times 3", "$3x^2-12x+12$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Subtracting expansions:", ["expand both", "distribute the minus", "combine like terms", "ignore signs"], [0, 1, 2]));
  q.push(tf("hard", "$(x+2)(x+3)-(x+1)(x-1)=5x+7$.", true));
  q.push(tf("hard", "$2x^2-18$ factors fully to $2(x-3)(x+3)$.", true));
  q.push(tf("hard", "$3(x-2)^2=3x^2-12x+4$.", false));
  q.push(fill("hard", "Expand $3(x-2)^2$.", ["3x^2-12x+12", "3x²-12x+12"]));
  q.push(fill("hard", "Factor fully $2x^2-18$.", ["2(x-3)(x+3)", "2(x+3)(x-3)"]));
  q.push(fill("hard", "Simplify $(x+2)(x+3)-(x+1)(x-1)$.", ["5x+7"]));
  q.push(num("hard", "Coefficient of $x^2$ in $(x+2)(x^2-3x+1)$.", -1, 0));
  q.push(num("hard", "Value of $(x+2)(x+3)-(x+1)(x-1)$ at $x=3$.", 22, 0));
  q.push(num("hard", "Constant term of $(x+1)^3$.", 1, 0));
  q.push(order("hard", "Order the steps to factor fully $2x^2-18$.", ["Common factor: $2(x^2-9)$", "Recognize a difference of squares", "$2(x-3)(x+3)$", "State fully factored"]));
  q.push(match("hard", "Match each.", ["$(x+1)^3$", "$3(x-2)^2$", "$2x^2-18$"], ["$x^3+3x^2+3x+1$", "$3x^2-12x+12$", "$2(x-3)(x+3)$"], [0, 1, 2]));
  return q;
}

export default [
  { code: "1.1", gen: g11 },          // Expanding & Factoring Quadratics
  { code: "1.2", gen: g2["2.2"] },    // Quadratic Relations & Their Graphs (= MCF3M 2.2)
  { code: "1.3", gen: g1["1.3"] },    // Solving Quadratic Equations (= MCF3M 1.3)
  { code: "1.4", gen: g2["2.5"] },    // Quadratic Models & Applications (= MCF3M 2.5)
];
