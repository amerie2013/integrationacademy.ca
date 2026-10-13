// MCR3U 2.1 — Adding & Multiplying Polynomials (rebuilt, deep version).
// Exports: lessonBlocks(), W21 (worksheet), LEARN21, bank(), ASSIGNMENT.
// Every expansion is computed by the polynomial engine in lib2.mjs. Each one typed here is ALSO asserted against a
// hand-typed expected string, so a slip in the algebra stops the build instead of reaching students.
import assert from "node:assert";
import {
  html, gframe, ex, pr, qa, watchOut, EX, PR,
  P, padd, psub, pmul, pmulAll, ppow, peval, pdeg, lin, ptex, prodTex, gx, verify,
  eqTable, areaModel, mistake, steps, callout, sameGraph, challenge, gview, graphSvg,
} from "./lib2.mjs";
import { pgf, eqTableTex } from "./lib2tex.mjs";
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

export const CODE = "2.1";
export const TITLE = "Adding & Multiplying Polynomials";
export const FULL_TITLE = `${CODE} ${TITLE}`;
const M = (s) => `\\(${s}\\)`;
const T = (p) => `$${ptex(p)}$`;
const r = String.raw;

/** Multiply factors (strings), assert against the hand-typed expectation, register a numeric identity check. */
function X(name, expected, ...fs) {
  const ps = fs.map((f) => (typeof f === "string" ? P(f) : f));
  const out = pmulAll(...ps);
  if (expected !== null) assert.strictEqual(ptex(out), expected, `${name}: expected ${expected} but engine says ${ptex(out)}`);
  verify(name, (x) => ps.reduce((a, p) => a * peval(p, x), 1), (x) => peval(out, x));
  return out;
}
/** Add (sign=1) or subtract (sign=-1) with the same discipline. */
function S(name, expected, a, b, sign = 1) {
  const pa = typeof a === "string" ? P(a) : a, pb = typeof b === "string" ? P(b) : b;
  const out = sign > 0 ? padd(pa, pb) : psub(pa, pb);
  assert.strictEqual(ptex(out), expected, `${name}: expected ${expected} but engine says ${ptex(out)}`);
  verify(name, (x) => peval(pa, x) + sign * peval(pb, x), (x) => peval(out, x));
  return out;
}

// ───────────────────────── lesson data ─────────────────────────
const e1 = S("L-E1", "2x^2 + 6", "3x^2-7x+2", "x^2-7x-4", -1);
const e2 = X("L-E2", "-6x^3 + 2x^2 - 10x", "-2x", "3x^2-x+5");
const e3 = X("L-E3", "2x^2 + x - 15", "x+3", "2x-5");
const e4 = X("L-E4", "12x^2 + 13x - 14", "3x-2", "4x+7");
const e5a = X("L-E5a", "25x^2 - 40x + 16", "5x-4", "5x-4");
const e5b = X("L-E5b", "9x^2 - 49", "3x+7", "3x-7");
const e6 = X("L-E6", "2x^3 - x^2 - 11x + 10", "x^2-3x+2", "2x+5");
const e7 = X("L-E7", "x^3 - 6x^2 + 12x - 8", "x-2", "x-2", "x-2");
const e10 = X("L-E10", "x^4 - 1", "x-1", "x+1", "x^2+1");
const boxV = X("L-E9", "4x^3 - 36x^2 + 80x", "x", "10-2x", "8-2x");
const ch = X("L-CH", "x^4 + 10x^3 + 35x^2 + 50x + 24", "x+1", "x+2", "x+3", "x+4");
verify("L-E8 y=2", (x) => (2 * x - 3 * 2) * (x + 4 * 2), (x) => 2 * x * x + 5 * x * 2 - 12 * 4);
verify("L-E8 y=1.3", (x) => (2 * x - 3 * 1.3) * (x + 4 * 1.3), (x) => 2 * x * x + 5 * x * 1.3 - 12 * 1.69);
verify("L-CH perfect square", (x) => (x + 1) * (x + 2) * (x + 3) * (x + 4) + 1, (x) => (x * x + 5 * x + 5) ** 2);
verify("L-P4 y=1.7", (x) => (4 * x - 3 * 1.7) ** 2, (x) => 16 * x * x - 24 * x * 1.7 + 9 * 1.7 * 1.7);
verify("L-P4 y=-2", (x) => (4 * x + 6) ** 2, (x) => 16 * x * x + 48 * x + 36);
const p1 = S("L-P1", "-x^2 + 4x - 13", "-2x^2+9x-5", "-x^2+5x+8", -1);
const p2 = X("L-P2", "-12x^3 + 20x^2 - 8x", "-4x", "3x^2-5x+2");
const p3 = X("L-P3", "6x^2 + 19x - 36", "2x+9", "3x-4");
const p5 = X("L-P5", "x^3 - 2x^2 - 9x + 4", "x^2+2x-1", "x-4");
const p6 = X("L-P6", "x^3 + 15x^2 + 75x + 125", "x+5", "x+5", "x+5");
const p7 = psub(ppow(P("3x-1"), 2), ppow(P("3x+1"), 2)); assert.strictEqual(ptex(p7), "-12x");
verify("L-P7", (x) => (3 * x - 1) ** 2 - (3 * x + 1) ** 2, (x) => -12 * x);
const p8 = psub(ppow(P("x+6"), 2), ppow(P("x+1"), 2)); assert.strictEqual(ptex(p8), "10x + 35");
verify("L-P8", (x) => (x + 6) ** 2 - (x + 1) ** 2, (x) => 10 * x + 35);

const xm = (72 - Math.sqrt(72 * 72 - 4 * 12 * 80)) / 24, Vm = peval(boxV, xm); // max of 4x^3-36x^2+80x on (0,4)
const eqF = (tex, f) => ({ tex, f });
const g3 = sameGraph(["y = (x+3)*(2x-5)".replace("2x", "2*x"), `y = ${gx(e3)}`], [-5, 4, -17, 12], "(x+3)(2x−5) and 2x²+x−15 are ONE curve", [{ x: -3, y: 0, t: "(−3, 0)", c: "#15803d" }, { x: 2.5, y: 0, t: "(2.5, 0)", c: "#15803d" }, { x: 0, y: -15, t: "(0, −15)", c: "#be123c" }]);
const g10 = sameGraph(["y = (x-1)*(x+1)*(x^2+1)", `y = ${gx(e10)}`], [-2, 2, -2, 15], "(x−1)(x+1)(x²+1) and x⁴−1 coincide", [{ x: -1, y: 0, t: "(−1, 0)", c: "#15803d" }, { x: 1, y: 0, t: "(1, 0)", c: "#15803d" }]);
const g9 = gframe([{ kind: "cartesian", expr: `y = ${gx(boxV)}`, dMin: "0", dMax: "4" }], { title: "Volume V(x) of the open box", labels: [{ x: +xm.toFixed(2), y: +Vm.toFixed(1), t: `max ≈ ${Vm.toFixed(1)} at x ≈ ${xm.toFixed(2)}`, c: "#be123c" }], ...gview(0, 4, 0, 60) });

const dtl = (arr) => arr.join(" ");
const lessonHtml = r`<div class="lecture-box">
  <h1>➕ Adding &amp; Multiplying Polynomials</h1>
  <p><strong>Overview.</strong> Two expressions are <strong>equivalent</strong> when they give the <em>same value for every</em> \(x\) — which means they draw <em>exactly the same graph</em>. All of this chapter is about rewriting an expression into an equivalent form that is easier to use. In this lesson you will master the two moves behind everything else: <strong>collecting like terms</strong> and <strong>expanding products</strong>.</p>
  ${callout("The big idea of Chapter 2.", "Rewriting never changes the value. If a rewrite changes the graph, it was wrong. We can <em>test</em> any rewrite two ways: plug in numbers, or graph both forms and see whether they sit on top of each other.", "green")}

  <h2>📌 The vocabulary</h2>
  <ul>
    <li>A <strong>term</strong> is a number times powers of a variable: \(7x^2\), \(-4x\), \(9\). The number is the <strong>coefficient</strong>; a term with no variable is the <strong>constant term</strong>.</li>
    <li>The <strong>degree</strong> of a term is its exponent; the <strong>degree of a polynomial</strong> is the highest one. \(4x^3-x^2+9\) has degree 3.</li>
    <li><strong>Like terms</strong> have the <em>same variable part</em>: \(3x^2\) and \(-8x^2\) are like; \(3x^2\) and \(3x\) are not. Only like terms can be combined.</li>
    <li>A polynomial with 1, 2, or 3 terms is a <strong>monomial</strong>, <strong>binomial</strong>, or <strong>trinomial</strong>. <strong>Standard form</strong> lists terms from highest degree to lowest.</li>
    <li>Exponents on a polynomial's variables are whole numbers \(\ge0\): \(\sqrt x\), \(x^{-1}\) and \(\dfrac1x\) are <em>not</em> polynomial terms.</li>
  </ul>

  <h2>📌 The equivalence detector</h2>
  <p>Is \((x+2)^2\) the same as \(x^2+4\)? The quickest honest test is to evaluate both at several \(x\)-values. One mismatch is enough to prove two expressions are <em>not</em> equivalent:</p>
  ${eqTable([eqF("(x+2)^2", (x) => (x + 2) ** 2), eqF("x^2+4", (x) => x * x + 4), eqF("x^2+4x+4", (x) => x * x + 4 * x + 4)], [-2, -1, 0, 1, 2], "Evaluate each expression at the same x-values")}
  <p>\(x^2+4\) fails at every value except \(x=0\) — a test that happens to agree at one point proves nothing. \(x^2+4x+4\) matches in every column, and we will prove it by expanding below. Remember: <strong>numbers can disprove an equivalence but only algebra (or a graph that matches everywhere) proves it.</strong></p>
  ${mistake("\\((x+2)^2 = x^2+4\\)", "Squaring a binomial means multiplying it by <em>itself</em>: \\((x+2)(x+2)\\). The two cross-terms \\(2x+2x\\) are missing. At \\(x=1\\): \\((1+2)^2=9\\) but \\(1^2+4=5\\).", "\\((x+2)^2=x^2+4x+4\\).")}

  <h2>📌 Adding and subtracting</h2>
  <p>Remove the brackets, then combine like terms. When a <strong>minus sign sits in front of a bracket</strong>, it flips <em>every</em> sign inside — that is the single most common error in this unit.</p>
  <h2>📌 Multiplying: the area model</h2>
  <p>The distributive property says every term in the first factor must meet every term in the second. An <strong>area model</strong> keeps score: the factors label the sides of a rectangle, and each box holds one partial product. Boxes with the same colour are like terms.</p>

  <h2>🔵 Examples</h2>
  ${ex("Example 1: Subtracting polynomials", `Simplify ${M("(3x^2-7x+2)-(x^2-7x-4)")}.`, [
    `The minus sign flips every sign inside the second bracket: ${M("3x^2-7x+2\\;-\\;x^2\\;+\\;7x\\;+\\;4")}.`,
    `Group like terms: ${M("(3x^2-x^2)+(-7x+7x)+(2+4)")}.`,
  ], `${M(ptex(e1))}. The \\(x\\)-terms cancelled completely, so the result is a binomial. (Check at \\(x=2\\): original \\(12-14+2-(4-14-4)=0+14=14\\); answer \\(8+6=14\\).)`)}
  ${ex("Example 2: Monomial × trinomial", `Expand ${M("-2x(3x^2-x+5)")}.`, [
    `Multiply <em>each</em> term inside by \\(-2x\\): \\((-2x)(3x^2)=-6x^3\\), \\((-2x)(-x)=+2x^2\\), \\((-2x)(5)=-10x\\).`,
  ], `${M(ptex(e2))}. The degree is 1 + 2 = 3: <em>degrees add when you multiply</em>.`)}
  ${ex("Example 3: Binomial × binomial with an area model", `Expand ${M("(x+3)(2x-5)")} and test it with a graph.`, [
    `Put \\(x+3\\) along the top and \\(2x-5\\) down the side; fill each box with a product.`,
    `Collect the like terms \\(-5x\\) and \\(+6x\\) (same colour).`,
  ], `${M(ptex(e3))}.`, areaModel(P("x+3"), P("2x-5"), "Area model: (x + 3) × (2x − 5)") + g3)}
  ${ex("Example 4: FOIL with bigger coefficients", `Expand ${M("(3x-2)(4x+7)")}.`, [
    `<strong>F</strong>irst \\(12x^2\\), <strong>O</strong>uter \\(21x\\), <strong>I</strong>nner \\(-8x\\), <strong>L</strong>ast \\(-14\\).`,
    `Combine the middle terms: \\(21x-8x=13x\\).`,
  ], `${M(ptex(e4))}. FOIL is just the area model written in a row — it only works for two binomials.`)}
  ${ex("Example 5: Special products", `Expand (a) ${M("(5x-4)^2")} and (b) ${M("(3x+7)(3x-7)")}.`, [
    `(a) Square pattern \\((a-b)^2=a^2-2ab+b^2\\) with \\(a=5x,\\ b=4\\): \\((5x)^2-2(5x)(4)+4^2\\).`,
    `(b) Product of a sum and a difference: the two middle terms are opposites and cancel, leaving \\(a^2-b^2\\).`,
  ], `(a) ${M(ptex(e5a))}; (b) ${M(ptex(e5b))}.`, areaModel(P("3x+7"), P("3x-7"), "(3x + 7)(3x − 7): the two ±21x boxes cancel"))}
  ${ex("Example 6: Trinomial × binomial", `Expand ${M("(x^2-3x+2)(2x+5)")}.`, [
    `A \\(3\\times2\\) area model has six boxes — every term of the trinomial meets both terms of the binomial.`,
    `Like terms: \\(5x^2\\) and \\(-6x^2\\) give \\(-x^2\\); \\(-15x\\) and \\(4x\\) give \\(-11x\\).`,
  ], `${M(ptex(e6))}. Degree 2 + 1 = 3 ✓, and the constant term \\(2\\times5=10\\) ✓.`, areaModel(P("x^2-3x+2"), P("2x+5"), "Six partial products"))}
  ${ex("Example 7: A binomial cubed", `Expand ${M("(x-2)^3")}.`, [
    `Split it: \\((x-2)^3=(x-2)\\cdot(x-2)^2\\). First \\((x-2)^2=x^2-4x+4\\).`,
    `Then \\((x-2)(x^2-4x+4)=x^3-4x^2+4x-2x^2+8x-8\\).`,
  ], `${M(ptex(e7))}. The coefficients \\(1,\\,-6,\\,12,\\,-8\\) are the row \\(1,3,3,1\\) of Pascal's triangle times powers of \\(-2\\): \\(1,\\ 3(-2),\\ 3(-2)^2,\\ (-2)^3\\).`)}
  ${ex("Example 8: Two variables", `Expand ${M("(2x-3y)(x+4y)")}.`, [
    `Same moves, more letters: \\(2x\\cdot x=2x^2\\), \\(2x\\cdot4y=8xy\\), \\(-3y\\cdot x=-3xy\\), \\(-3y\\cdot4y=-12y^2\\).`,
    `Like terms need the <em>same letters and powers</em>: \\(8xy\\) and \\(-3xy\\) combine.`,
  ], `${M("2x^2+5xy-12y^2")}. (Check with \\(x=2,\\ y=1\\): \\((4-3)(2+4)=6\\) and \\(8+10-12=6\\).)`)}
  ${ex("Example 9: An application — the open box", `A sheet of card is \\(10\\) cm by \\(8\\) cm. Squares of side \\(x\\) are cut from the four corners and the sides folded up. Write the volume as a polynomial.`, [
    `Length \\(10-2x\\), width \\(8-2x\\), height \\(x\\): \\(V=x(10-2x)(8-2x)\\).`,
    `Expand the two binomials first: \\((10-2x)(8-2x)=4x^2-36x+80\\). Then multiply by \\(x\\).`,
  ], `\\(V(x)=${ptex(boxV)}\\), with \\(0<x<4\\) (cut-outs must leave a positive width). The graph shows the best cut is about \\(x\\approx${xm.toFixed(2)}\\) cm, giving \\(V\\approx${Vm.toFixed(1)}\\) cm³.`, g9)}
  ${ex("Example 10: Chaining the moves", `Show that ${M("(x-1)(x+1)(x^2+1)=x^4-1")}.`, [
    `Multiply the first two (a sum times a difference): \\((x-1)(x+1)=x^2-1\\).`,
    `Now \\((x^2-1)(x^2+1)\\) is a sum times a difference again, with \\(a=x^2\\): \\(a^2-1=x^4-1\\).`,
  ], `${M(ptex(e10))}. Special products can be <em>reused</em> — spotting the pattern twice saved all the long multiplication.`, g10)}

  ${watchOut([
    "A minus sign before a bracket changes <strong>every</strong> sign inside it: \\(-(x-4)=-x+4\\), not \\(-x-4\\).",
    "\\((a+b)^2\\ne a^2+b^2\\). Write the bracket twice and multiply.",
    "Exponents <strong>add</strong> when you multiply (\\(x^2\\cdot x^3=x^5\\)); they do <strong>not</strong> multiply or stay put.",
    "Only terms with identical variable parts combine: \\(3x^2+4x\\) cannot be simplified.",
    "Degree of a product = sum of degrees. Degree of a sum \\(\\le\\) the larger degree — it can be <em>smaller</em> if leading terms cancel (Example 1).",
  ])}

  <h2>🟡 Practice Questions</h2>
  ${pr(1, "Knowledge", `Simplify ${M("(-2x^2+9x-5)-(-x^2+5x+8)")}.`, `${M(ptex(p1))}. Careful with \\(-(-x^2)=+x^2\\) and \\(-(+8)=-8\\).`)}
  ${pr(2, "Knowledge", `Expand ${M("-4x(3x^2-5x+2)")}.`, M(ptex(p2)))}
  ${pr(3, "Knowledge", `Expand ${M("(2x+9)(3x-4)")}.`, `${M(ptex(p3))}. (Outer \\(-8x\\) and inner \\(27x\\) combine to \\(19x\\).)`)}
  ${pr(4, "Thinking", `Expand ${M("(4x-3y)^2")}.`, `${M("16x^2-24xy+9y^2")}. (Check \\(x=1,\\ y=1\\): \\(1\\) and \\(16-24+9=1\\).)`)}
  ${pr(5, "Thinking", `Expand ${M("(x^2+2x-1)(x-4)")}.`, `${M(ptex(p5))}.`)}
  ${pr(6, "Thinking", `Expand ${M("(x+5)^3")} and compare its coefficients with Pascal's row \\(1,3,3,1\\).`, `${M(ptex(p6))}. The coefficients are \\(1,\\ 3\\cdot5,\\ 3\\cdot5^2,\\ 5^3\\).`)}
  ${pr(7, "Thinking", `Simplify ${M("(3x-1)^2-(3x+1)^2")} <em>without</em> expanding the squares fully — look for a shortcut.`, `Both squares contain \\(9x^2+1\\); only the middle terms differ: \\(-6x-(+6x)=\\)${M(ptex(p7))}.`)}
  ${pr(8, "Application", `A square of side \\((x+6)\\) cm has a smaller square of side \\((x+1)\\) cm cut from one corner. Write the remaining area as a simplified polynomial, then find \\(x\\) if the remaining area is \\(135\\) cm².`, `\\((x+6)^2-(x+1)^2=${ptex(p8)}\\). Setting \\(10x+35=135\\) gives \\(x=10\\).`)}
  ${challenge(`Show that the product of <em>four consecutive integers</em> plus 1 is always a perfect square. Test it on \\(1\\cdot2\\cdot3\\cdot4+1\\), then prove it for \\(n(n+1)(n+2)(n+3)+1\\).`, `\\(1\\cdot2\\cdot3\\cdot4+1=25=5^2\\). Pair the outer and inner factors: \\(n(n+3)=n^2+3n\\) and \\((n+1)(n+2)=n^2+3n+2\\). With \\(u=n^2+3n\\) the product is \\(u(u+2)\\), so \\(u(u+2)+1=u^2+2u+1=(u+1)^2=(n^2+3n+1)^2\\). (For \\(n=1\\): \\(1^2+3+1=5\\) and \\(5^2=25\\) ✓.)`)}

  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: What is the degree of the product of a degree-2 and a degree-3 polynomial?", "Degree 5 — degrees add when you multiply.")}
  ${qa("Q2: Why is \\((a+b)^2\\ne a^2+b^2\\)?", "Because \\((a+b)^2=(a+b)(a+b)\\) has four partial products, including two cross-terms \\(ab+ab=2ab\\).")}
  ${qa("Q3: How can I check an expansion quickly?", "Substitute a simple number (like \\(x=1\\) or \\(x=-1\\)) into <em>both</em> forms. A mismatch proves an error; a match at several values makes it very likely correct — and graphing both forms should give one curve.")}
  ${qa("Q4: Can the sum of two cubics be a quadratic?", "Yes, if the \\(x^3\\) terms cancel, e.g. \\((x^3+x)+(-x^3+2x^2)=2x^2+x\\). The degree of a sum is at most the larger degree.")}
  ${qa("Q5: When is FOIL not enough?", "FOIL only multiplies two <em>binomials</em>. For trinomials or three factors use the area model or distribute term by term.")}
  ${qa("Q6: What does it mean that two expressions are equivalent?", "They give the same output for every input, so their graphs are identical.")}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

// ───────────────────────── worksheet (LaTeX) ─────────────────────────
const w1 = S("W-E1", "5x^3 + 5x^2 - 5x - 2", "4x^3-2x+7", "x^3+5x^2-3x-9");
const w2a = P("6x-3"), w2 = padd(padd(psub(P("6x-3"), P("4x-20")), P("2x^2+6x")), [0]); assert.strictEqual(ptex(w2), "2x^2 + 8x + 17");
verify("W-E2", (x) => 3 * (2 * x - 1) - 4 * (x - 5) + 2 * x * (x + 3), (x) => peval(w2, x));
const w3 = X("W-E3", "2x^2 + 13x + 6", "2x+1", "x+6");
const w4 = X("W-E4", "8x^2 + 2x - 15", "4x-5", "2x+3");
const w5a = X("W-E5a", "36x^2 - 12x + 1", "6x-1", "6x-1");
const w5b = X("W-E5b", "4x^2 - 81", "2x+9", "2x-9");
const w6 = X("W-E6", "2x^3 - 5x^2 - 7x + 12", "2x^2+x-4", "x-3");
const w7 = X("W-E7", "x^4 + 4x^3 + 6x^2 + 4x + 1", "x+1", "x+1", "x+1", "x+1");
const w8 = psub(pmul(P("2x+30"), P("2x+20")), [600]); assert.strictEqual(ptex(w8), "4x^2 + 100x");
verify("W-E8", (x) => (30 + 2 * x) * (20 + 2 * x) - 600, (x) => 4 * x * x + 100 * x);
verify("W-E9", (x) => (x + 2) ** 2 - (x - 2) ** 2, (x) => 8 * x);
const q1 = S("W-Q1", "4x^2 - 2x - 8", "7x^2-3x+4", "3x^2-x+12", -1);
const q2 = X("W-Q2", "-15x^3 + 6x^2 + 3x", "-3x", "5x^2-2x-1");
const q3 = X("W-Q3", "10x^2 + 29x - 21", "5x-3", "2x+7");
const q4 = X("W-Q4", "49x^2 + 56x + 16", "7x+4", "7x+4");
const q5 = X("W-Q5", "25x^2 - 36", "5x+6", "5x-6");
const q6 = X("W-Q6", "3x^3 - 14x^2 + 2x + 24", "3x^2-2x-6", "x-4");
const q7 = X("W-Q7", "x^3 - 12x^2 + 48x - 64", "x-4", "x-4", "x-4");
const q8 = psub(ppow(P("x+9"), 2), ppow(P("x-3"), 2)); assert.strictEqual(ptex(q8), "24x + 72");
verify("W-Q8", (x) => (x + 9) ** 2 - (x - 3) ** 2, (x) => 24 * x + 72);
const q9 = X("W-Q9", "x^3 + 3x^2 - 10x - 24", "x+2", "x-3", "x+4");
const q10 = X("W-Q10", "2x^3 - 7x^2 - 10x + 24", "2x-3", "x^2-2x-8");
const q11 = X("W-Q11", "x^2 - 100", "x+10", "x-10");
const q12 = psub(ppow(P("2x+1"), 2), pmul(P("x-3"), P("x+3"))); assert.strictEqual(ptex(q12), "3x^2 + 4x + 10");
verify("W-Q12", (x) => (2 * x + 1) ** 2 - (x - 3) * (x + 3), (x) => 3 * x * x + 4 * x + 10);
const q13 = X("W-Q13", "4x^3 - 84x^2 + 432x", "x", "24-2x", "18-2x");
verify("W-CH", (x) => (x + 1) ** 2 + x * x, (x) => 2 * x * x + 2 * x + 1);
const NUMX = (n) => (n < 0 ? `-${-n}` : `${n}`);
const evalPow = [-2, -1, 0, 1, 2];
const eqEx = [{ tex: "(x+2)^2-(x-2)^2", f: (x) => (x + 2) ** 2 - (x - 2) ** 2 }, { tex: "8x", f: (x) => 8 * x }];
const eqQ = [{ tex: "(x-3)^2", f: (x) => (x - 3) ** 2 }, { tex: "x^2-9", f: (x) => x * x - 9 }, { tex: "x^2-6x+9", f: (x) => x * x - 6 * x + 9 }];

export const W21 = {
  code: "2.1", unit: "2: Equivalent Algebraic Expressions", title: "Adding & Multiplying Polynomials",
  intro: r`Two expressions are \textbf{equivalent} when they have the same value for every $x$ --- so they draw the \emph{same graph}. Rewriting by collecting like terms and expanding products is how we turn one form into another without changing its value. Every rewrite below is tested: by substituting numbers, and by comparing graphs.`,
  ideas: [
    r`\textbf{Like terms} (same variable part) combine; a minus sign before a bracket flips \emph{every} sign inside.`,
    r`\textbf{Distribute:} every term of one factor meets every term of the other. The \textbf{area model} keeps score; FOIL is its shortcut for two binomials.`,
    r`\textbf{Special products:} $(a\pm b)^2=a^2\pm2ab+b^2$ and $(a+b)(a-b)=a^2-b^2$.`,
    r`\textbf{Degrees:} the degree of a product is the \emph{sum} of the degrees; the degree of a sum is at most the larger one.`,
    r`\textbf{Test it:} one mismatch proves two expressions are \emph{not} equivalent; a match at every tested value (or a single overlapping graph) supports --- and algebra proves --- equivalence.`,
  ],
  examples: [
    { t: "Adding polynomials", body: String.raw`Simplify $(4x^3-2x+7)+(x^3+5x^2-3x-9)$.\soln Group like terms by degree: $(4x^3+x^3)+5x^2+(-2x-3x)+(7-9)$. \\ $=${ptex(w1)}$.` },
    { t: "Distribute, then collect", body: String.raw`Simplify $3(2x-1)-4(x-5)+2x(x+3)$.\soln Distribute: $6x-3-4x+20+2x^2+6x$. \\ Note the $-4$ multiplies \emph{both} terms: $-4\cdot(-5)=+20$. \\ Collect: $${ptex(w2)}$.` },
    { t: "Area model", body: String.raw`Expand $(2x+1)(x+6)$.\soln The boxes are $2x\cdot x=2x^2$, $2x\cdot6=12x$, $1\cdot x=x$, $1\cdot6=6$. \\ The two $x$-boxes are like terms: $12x+x=13x$. \\ $=${ptex(w3)}$.` },
    { t: "FOIL with a negative", body: String.raw`Expand $(4x-5)(2x+3)$.\soln First $8x^2$; Outer $12x$; Inner $-10x$; Last $-15$. \\ Middle: $12x-10x=2x$. \\ $=${ptex(w4)}$.` },
    { t: "Special products", body: String.raw`Expand (a) $(6x-1)^2$ and (b) $(2x+9)(2x-9)$.\soln (a) $(6x)^2-2(6x)(1)+1^2=${ptex(w5a)}$. \\ (b) The middle terms $\pm18x$ cancel: $(2x)^2-9^2=${ptex(w5b)}$.` },
    { t: "Trinomial times binomial", body: String.raw`Expand $(2x^2+x-4)(x-3)$.\soln Six partial products: $2x^3-6x^2+x^2-3x-4x+12$. \\ Collect: $${ptex(w6)}$. \\ Check the degree ($2+1=3$) and the constant term ($-4\cdot-3=12$).` },
    { t: "A power of a binomial", body: String.raw`Expand $(x+1)^4$.\soln The coefficients are Pascal's row $1,4,6,4,1$ and every power of $1$ is $1$. \\ $=${ptex(w7)}$. \\ Check at $x=1$: $2^4=16$ and $1+4+6+4+1=16$.` },
    { t: "Application: a picture frame", body: String.raw`A photo is $30$ cm by $20$ cm. A frame of width $x$ goes all the way around it. Write the area of the frame alone.\soln Outer rectangle: $(30+2x)(20+2x)$. Subtract the photo, $600$. \\ $(30+2x)(20+2x)-600=600+100x+4x^2-600=${ptex(w8)}$. \\ For a $2$ cm frame: $4(4)+100(2)=216$ cm$^2$.` },
    { t: "Are they equivalent?", body: String.raw`Test whether $(x+2)^2-(x-2)^2$ and $8x$ are equivalent.
${eqTableTex(eqEx, evalPow, { check: true })}
\soln The values match at all five points. To \emph{prove} it, expand: $(x^2+4x+4)-(x^2-4x+4)=8x$ --- the $x^2$ and constants cancel.` +
      pgf({ curves: [{ f: "(x+2)^2-(x-2)^2", color: "exblue" }, { f: "8*x", dash: true }], bounds: [-3, 3, -26, 26], xt: 1, yt: 8, note: "Both expressions draw the same line, so the dashed graph lies exactly on the solid one." }) },
  ],
  questions: [
    { ask: String.raw`Simplify $(7x^2-3x+4)-(3x^2-x+12)$. Then test your answer at $x=2$.`, ws: "2.6cm" },
    { ask: String.raw`Expand $-3x(5x^2-2x-1)$.`, ws: "2.2cm" },
    { ask: String.raw`Expand and simplify $(5x-3)(2x+7)$ using an area model.`, ws: "3.6cm" },
    { ask: String.raw`Expand (a) $(7x+4)^2$ \quad (b) $(5x+6)(5x-6)$. Explain why (b) has no $x$-term.`, ws: "3.6cm" },
    { ask: String.raw`Expand $(3x^2-2x-6)(x-4)$.`, ws: "3.8cm" },
    { ask: String.raw`Expand $(x-4)^3$ using $(x-4)^3=(x-4)(x-4)^2$. Check your answer at $x=5$.`, ws: "3.8cm" },
    { ask: String.raw`Simplify $(x+9)^2-(x-3)^2$. Which special-product pattern gives a quicker route?`, ws: "3.2cm" },
    { ask: String.raw`Expand and simplify $(x+2)(x-3)(x+4)$.`, ws: "4.2cm" },
    { ask: String.raw`Expand $(2x-3)(x^2-2x-8)$ and state the degree and the constant term \emph{before} you multiply. Do they match your result?`, ws: "4cm" },
    { ask: String.raw`Complete the table to decide whether $(x-3)^2$ is equivalent to (a) $x^2-9$ or (b) $x^2-6x+9$. Then expand to confirm.
${eqTableTex(eqQ, [-1, 0, 1, 2, 3], { blank: true, check: true })}`, ws: "2.2cm" },
    { ask: String.raw`A student writes $(2x+1)^2-(x-3)(x+3)=3x^2+4x-8$. Find the error and give the correct simplified answer.`, ws: "3.4cm" },
    { ask: String.raw`A $24$ cm by $18$ cm sheet has squares of side $x$ cut from each corner and the sides folded to make an open box. Write the volume as an expanded polynomial and find $V$ when $x=3$.`, ws: "4cm" },
    { ask: String.raw`Explain in a sentence or two why the degree of $(x^3+x)+(-x^3+2x^2)$ is smaller than the degree of either bracket. Give your own example of a sum of two cubics that is a quadratic.`, ws: "3cm" },
    { ask: String.raw`Show that $n^2+(n+1)^2$ is always odd, for any integer $n$. Then show that $(n+1)^2-n^2$ equals the sum of the two numbers $n$ and $n+1$.`, ws: "4.2cm", challenge: true },
  ],
  answers: [
    String.raw`$${ptex(q1)}$. At $x=2$: original $(28-6+4)-(12-2+12)=26-22=4$; answer $16-4-8=4$.`,
    String.raw`$${ptex(q2)}$.`,
    String.raw`$${ptex(q3)}$ (boxes $10x^2,\ 35x,\ -6x,\ -21$).`,
    String.raw`(a) $${ptex(q4)}$ \quad (b) $${ptex(q5)}$. The two middle terms $\pm30x$ are opposites and cancel.`,
    String.raw`$${ptex(q6)}$.`,
    String.raw`$${ptex(q7)}$. At $x=5$: $(1)^3=1$ and $125-300+240-64=1$.`,
    String.raw`$${ptex(q8)}$. Difference of squares with $a=x+9,\ b=x-3$: $(a-b)(a+b)=12(2x+6)=24x+72$.`,
    String.raw`$${ptex(q9)}$.`,
    String.raw`Degree $1+2=3$, constant term $(-3)(-8)=24$. Result $${ptex(q10)}$ \quad \checkmark.`,
    String.raw`Row values: $(x-3)^2$: $16,9,4,1,0$; $x^2-9$: $-8,-9,-8,-5,0$; $x^2-6x+9$: $16,9,4,1,0$. So (b) is equivalent, (a) is not. Expanding $(x-3)(x-3)$ gives $x^2-6x+9$.`,
    String.raw`$(2x+1)^2=4x^2+4x+1$ and $(x-3)(x+3)=x^2-9$, so the subtraction gives $4x^2+4x+1-x^2+9$. The student wrote $-8$ instead of $+10$ (forgot the minus flips $-9$ to $+9$). Correct: $${ptex(q12)}$.`,
    String.raw`$V=x(30-2x)(20-2x)=${ptex(q13)}$. At $x=3$: $3\cdot18\cdot12=648$ cm$^3$; check $108-756+1296=648$.`,
    String.raw`The $x^3$ terms cancel ($x^3-x^3$), leaving $2x^2+x$. A sum can have lower degree than its parts. Example: $(x^3+4x)+(-x^3+x^2)=x^2+4x$.`,
    String.raw`$n^2+(n+1)^2=2n^2+2n+1=2(n^2+n)+1$, which is $2\times$ an integer plus $1$: odd. And $(n+1)^2-n^2=2n+1=n+(n+1)$.`,
  ],
};

export const LEARN21 = [
  ["Equivalent means the same graph", r`Two expressions are equivalent if they give the same output for every $x$. Rewriting (collecting like terms, expanding) must never change the value: \textbf{test} a rewrite by substituting numbers --- one mismatch proves it wrong.`],
  ["Expanding", r`Every term in one factor multiplies every term in the other. An \textbf{area model} lays the partial products in a grid; \textbf{like terms} (same colour) are then collected. Degrees \emph{add} when you multiply.`],
  ["Special products", r`$(a+b)^2=a^2+2ab+b^2$, $(a-b)^2=a^2-2ab+b^2$, $(a+b)(a-b)=a^2-b^2$. They are shortcuts you will use \emph{backwards} when factoring in 2.2.`],
];

// ───────────────────────── question bank (60) ─────────────────────────
let _pos = 0;
const wrongs = (...a) => a;
/** Multiple choice with the correct answer rotated through positions 0..3 so it is never predictable. */
function MC(diff, prompt, correct, bad, fb = "") {
  const set = new Set([correct, ...bad]);
  assert.strictEqual(set.size, bad.length + 1, `duplicate choices in: ${prompt}`);
  const pos = _pos++ % (bad.length + 1), ch = [...bad]; ch.splice(pos, 0, correct);
  return mc(diff, prompt, ch, pos, fb);
}
const pexp = (p) => ptex(p);
/** Accepted fill-in spellings of a polynomial: compact, spaced, with Unicode powers. */
const spell = (p) => { const s = ptex(p), compact = s.replace(/ /g, ""), uni = (t) => t.replace(/\^2/g, "²").replace(/\^3/g, "³").replace(/\^4/g, "⁴"); return [...new Set([compact, s, uni(compact), uni(s), compact.replace(/\^/g, "**")])]; };
const prodChk = (name, ...fs) => X(name, null, ...fs);

export function bank() {
  const q = [];
  // ── easy (20) ──
  q.push(MC("easy", "What is the degree of $5x^4-x^2+9$?", "$4$", ["$2$", "$9$", "$5$"], "The degree is the highest exponent, not the coefficient."));
  q.push(MC("easy", "Which pair are like terms?", "$3x^2y$ and $-5x^2y$", ["$3x^2y$ and $3xy^2$", "$4x$ and $4x^2$", "$7$ and $7x$"], "Like terms have exactly the same variables with the same exponents."));
  { const a = P("5x^2-3x+2"), b = P("2x^2+x-7"), c = S("B-3", "7x^2 - 2x - 5", a, b); q.push(MC("easy", `Simplify $(5x^2-3x+2)+(2x^2+x-7)$.`, T(c), ["$7x^4-2x-5$", "$7x^2-4x-5$", "$3x^2-4x+9$"], "Add coefficients of like terms; exponents stay the same.")); }
  { const c = S("B-4", "4x + 5", "6x+1", "2x-4", -1); q.push(MC("easy", "Simplify $(6x+1)-(2x-4)$.", T(c), ["$4x-3$", "$4x-5$", "$8x-3$"], "The minus flips both signs in the bracket: $6x+1-2x+4$.")); }
  q.push(num("easy", "What is the coefficient of $x$ in $7x^2-11x+3$?", -11, 0, "The coefficient includes its sign."));
  q.push(num("easy", "Evaluate $2x^2-3x+1$ at $x=-2$.", 15, 0, "$2(4)-3(-2)+1=8+6+1=15$."));
  { const c = X("B-7", "3x - 12", "3", "x-4"); q.push(MC("easy", "Expand $3(x-4)$.", T(c), ["$3x-4$", "$3x+12$", "$x-12$"], "Multiply both terms by 3.")); }
  { const c = X("B-8", "-4x^2 + 8x", "-4x", "x-2"); q.push(MC("easy", "Expand $-4x(x-2)$.", T(c), ["$-4x^2-8x$", "$4x^2-8x$", "$-4x^2+2$"], "$(-4x)(x)=-4x^2$ and $(-4x)(-2)=+8x$.")); }
  { const c = X("B-9", "x^2 + 13x + 36", "x+4", "x+9"); q.push(MC("easy", "Expand $(x+4)(x+9)$.", T(c), ["$x^2+36$", "$x^2+36x+13$", "$x^2+13x+13$"], "Middle term $=4x+9x=13x$; constant $=4\\cdot9=36$.")); }
  { const c = X("B-10", "x^2 - 4x - 12", "x-6", "x+2"); q.push(MC("easy", "Expand $(x-6)(x+2)$.", T(c), ["$x^2+4x-12$", "$x^2-4x+12$", "$x^2-12$"], "Middle: $2x-6x=-4x$; constant: $-12$.")); }
  { const c = X("B-11", "x^2 + 10x + 25", "x+5", "x+5"); q.push(fill("easy", "Expand $(x+5)^2$: ___", spell(c), "Perfect-square pattern: $a^2+2ab+b^2$.")); }
  { const c = X("B-12", "x^2 - 64", "x-8", "x+8"); q.push(fill("easy", "Expand $(x-8)(x+8)$: ___", spell(c), "Difference of squares.")); }
  q.push(tf("easy", "$(x+3)^2=x^2+9$.", false, "$(x+3)^2=x^2+6x+9$; the cross-term is missing."));
  q.push(tf("easy", "The product $(x^2+1)(x-2)$ has degree $3$.", true, "$2+1=3$."));
  q.push(ms("easy", "Which of these are polynomials?", ["$3x^2-5$", "$\\dfrac1x+2$", "$\\sqrt{x}$", "$4x^3-x$"], [0, 3], "A polynomial has only whole-number exponents $\\ge0$ on its variable."));
  q.push(ms("easy", "Which expressions are equivalent to $2(x+3)$?", ["$2x+6$", "$2x+3$", "$x+3+x+3$", "$2x\\cdot3$"], [0, 2], "Test with $x=1$: $2(4)=8$; $2x+6=8$ ✓, $2x+3=5$ ✗, $x+3+x+3=8$ ✓, $2x\\cdot3=6$ ✗."));
  { const c = X("B-17", "x^2 - 2x - 3", "x+1", "x-3"); const f = (x) => peval(c, x);
    q.push({ ...MC("easy", "The graph shows $y=(x+1)(x-3)$. Which expanded form is equivalent?", T(c), ["$x^2+2x-3$", "$x^2-3$", "$x^2-2x+3$"], "The graph crosses the $y$-axis at $-3$ and the $x$-axis at $-1$ and $3$; only $x^2-2x-3$ gives all three."),
      image: graphSvg({ fn: f, xmin: -3, xmax: 5, ymin: -5, ymax: 6, points: [{ x: -1, y: 0, label: "(-1, 0)", color: "#1e293b", dy: 16 }, { x: 3, y: 0, label: "(3, 0)", color: "#1e293b", dy: 16 }, { x: 0, y: -3, label: "(0, -3)", color: "#1e293b" }], title: "y = (x + 1)(x - 3)" }) }); }
  q.push(match("easy", "Match each polynomial to its name.", ["$7x^2$", "$x-4$", "$x^2+3x-1$"], ["monomial", "binomial", "trinomial"], [0, 1, 2]));
  q.push(num("easy", "What is the constant term of the expanded product $(x+5)(x-3)$?", -15, 0, "$5\\cdot(-3)=-15$."));
  { const c = X("B-20", "x^2 + 9x + 14", "x+2", "x+7"); q.push(MC("easy", "A rectangle has sides $(x+2)$ and $(x+7)$. Its area is:", T(c), ["$x^2+14$", "$x^2+9x+9$", "$2x+9$"], "Area $=$ length $\\times$ width, then expand.")); }

  // ── medium (20) ──
  { const c = X("B-21", "15x^2 + 14x - 8", "5x-2", "3x+4"); q.push(MC("medium", "Expand $(5x-2)(3x+4)$.", T(c), ["$15x^2-8$", "$15x^2+26x-8$", "$8x^2+14x-8$"], "Outer $20x$, inner $-6x$, combine to $14x$.")); }
  { const c = X("B-22", "4x^2 - 28x + 49", "2x-7", "2x-7"); q.push(MC("medium", "Expand $(2x-7)^2$.", T(c), ["$4x^2+49$", "$4x^2-14x+49$", "$4x^2-28x-49$"], "$(2x)^2-2(2x)(7)+7^2$.")); }
  { const c = X("B-23", "36x^2 - 1", "6x+1", "6x-1"); q.push(MC("medium", "Expand $(6x+1)(6x-1)$.", T(c), ["$36x^2+1$", "$12x^2-1$", "$36x^2-12x-1$"], "Sum times difference: $a^2-b^2$.")); }
  { const c = X("B-24", "x^3 + 2x^2 + x + 12", "x^2-x+4", "x+3"); q.push(MC("medium", "Expand $(x^2-x+4)(x+3)$.", T(c), ["$x^3+4x^2+x+12$", "$x^3+2x^2-x+12$", "$x^3-3x^2+4x+12$"], "$x^3+3x^2-x^2-3x+4x+12$.")); }
  { const c = X("B-25", "2x^2 - 11x - 21", "2x+3", "x-7"); q.push(num("medium", "What is the coefficient of $x$ in the expansion of $(2x+3)(x-7)$?", c[1], 0, `$${ptex(c)}$.`)); }
  { const c = psub(ppow(P("x+4"), 2), ppow(P("x-4"), 2)); assert.strictEqual(ptex(c), "16x"); verify("B-26", (x) => (x + 4) ** 2 - (x - 4) ** 2, (x) => 16 * x); q.push(num("medium", "$(x+4)^2-(x-4)^2$ simplifies to $kx$. Find $k$.", 16, 0, "$(x^2+8x+16)-(x^2-8x+16)=16x$.")); }
  { const c = X("B-27", "x^3 + 2x^2 - 5x - 6", "x+1", "x-2", "x+3"); q.push(MC("medium", "Expand $(x+1)(x-2)(x+3)$.", T(c), ["$x^3+6x^2-5x-6$", "$x^3+2x^2-6$", "$x^3-2x^2-5x+6$"], "Multiply two factors first, then the third.")); }
  { const c = X("B-28", "x^3 + 9x^2 + 27x + 27", "x+3", "x+3", "x+3"); q.push(MC("medium", "Expand $(x+3)^3$.", T(c), ["$x^3+27$", "$x^3+9x^2+9x+27$", "$x^3+3x^2+9x+27$"], "Pascal's row $1,3,3,1$ with $3^k$: $1,\\ 9,\\ 27,\\ 27$.")); }
  { const c = X("B-29", "2x^4 + 5x^3 - 2x^2 + 17x - 10", "x^2+3x-2", "2x^2-x+5"); q.push(num("medium", "Find the coefficient of $x^2$ in the product $(x^2+3x-2)(2x^2-x+5)$.", c[2], 0, "Pick only the products that give $x^2$: $x^2\\cdot5$, $3x\\cdot(-x)$, $(-2)\\cdot2x^2$ → $5-3-4=-2$.")); }
  { const c = padd(X("B-30a", null, "2x", "x-3"), X("B-30b", null, "4", "x-3")); assert.strictEqual(ptex(c), "2x^2 - 2x - 12"); q.push(fill("medium", "Expand and simplify $2x(x-3)+4(x-3)$: ___", spell(c), "$2x^2-6x+4x-12$.")); }
  q.push(tf("medium", "$(a-b)^2=a^2-b^2$.", false, "$(a-b)^2=a^2-2ab+b^2$."));
  q.push(tf("medium", "Multiplying a degree-3 polynomial by a degree-4 polynomial gives a degree-7 polynomial.", true, "Degrees add: $3+4=7$."));
  q.push(ms("medium", "Which are equivalent to $x^2-16$?", ["$(x-4)(x+4)$", "$(x+4)(x-4)$", "$x^2-4^2$", "$x^2-8x+16$"], [0, 1, 2], "$(x-4)^2$ has a middle term; the others are the same product."));
  { const f1 = (x) => (x + 5) ** 2, f2 = (x) => x * x + 25; assert.deepStrictEqual(psub(P("x^2+10x+25"), P("x^2+25")), P("10x"));
    q.push({ ...num("medium", "A student claims $(x+5)^2=x^2+25$. The graphs of both sides are drawn. At how many points do they meet, and what does that say about the claim?", 1, 0, "Setting $x^2+10x+25=x^2+25$ gives $10x=0$, so they meet only at $(0,25)$. Equivalent expressions must meet at <em>every</em> point, so the claim is false. (Answer: 1.)"),
      image: graphSvg({ fn: f1, extraCurves: [{ fn: f2, color: "#be123c" }], xmin: -8, xmax: 3, ymin: 0, ymax: 64, points: [{ x: 0, y: 25, label: "(0, 25)", color: "#1e293b" }], title: "blue: y = (x + 5)²    red: y = x² + 25" }) }); }
  q.push(MC("medium", "An area model has partial products $6x^2,\\ -9x,\\ 4x,\\ -6$. Which product is it?", "$(3x+2)(2x-3)$", ["$(3x-2)(2x+3)$", "$(6x+2)(x-3)$", "$(3x+2)(2x+3)$"], "$3x\\cdot2x=6x^2$, $3x\\cdot(-3)=-9x$, $2\\cdot2x=4x$, $2\\cdot(-3)=-6$."));
  q.push(order("medium", "Put the steps in order to expand $(x+3)(2x-1)$.", ["Multiply the first terms: $x\\cdot2x=2x^2$", "Multiply the outer terms: $x\\cdot(-1)=-x$", "Multiply the inner terms: $3\\cdot2x=6x$", "Multiply the last terms: $3\\cdot(-1)=-3$", "Collect like terms: $2x^2+5x-3$"]));
  { const r1 = X("B-37a", "x^2 + 4x - 12", "x+6", "x-2"), r2 = X("B-37b", "2x^2 + 5x - 12", "2x-3", "x+4"), r3 = X("B-37c", "x^2 - 10x + 25", "x-5", "x-5"), r4 = X("B-37d", "3x^2 - 2x - 1", "3x+1", "x-1");
    q.push(match("medium", "Match each product to its expansion.", ["$(x+6)(x-2)$", "$(2x-3)(x+4)$", "$(x-5)^2$", "$(3x+1)(x-1)$"], [T(r1), T(r2), T(r3), T(r4)], [0, 1, 2, 3])); }
  q.push(num("medium", "For what value of $k$ is $x^2-18x+k$ a perfect-square trinomial?", 81, 0, "$(x-9)^2=x^2-18x+81$: $k=(18/2)^2$."));
  { const a = psub(pmul(P("2x-1"), P("x+4")), pmul(P("x-3"), P("x+2"))); assert.strictEqual(ptex(a), "x^2 + 8x + 2"); verify("B-39", (x) => (2 * x - 1) * (x + 4) - (x - 3) * (x + 2), (x) => peval(a, x));
    q.push(MC("medium", "Simplify $(2x-1)(x+4)-(x-3)(x+2)$.", T(a), ["$x^2+6x-10$", "$x^2+8x-10$", "$3x^2+6x+2$"], "$(2x^2+7x-4)-(x^2-x-6)$.")); }
  { const t = pmulAll(P("x+2"), P("x-5"), P("x+1")); q.push(num("medium", "Find the sum of all the coefficients of the expansion of $(x+2)(x-5)(x+1)$. (Hint: what value of $x$ makes every power equal $1$?)", t.reduce((a, c) => a + c, 0), 0, "Put $x=1$: $(3)(-4)(2)=-24$.")); }

  // ── hard (20) ──
  { const c = ppow(P("x+2"), 4); assert.strictEqual(c[2], 24); q.push(num("hard", "Find the coefficient of $x^2$ in the expansion of $(x+2)^4$.", 24, 0, "Pascal's row $1,4,6,4,1$: the $x^2$ term is $6\\cdot x^2\\cdot2^2=24x^2$.")); }
  { const c = X("B-H2", "x^4 + 2x^3 - 13x^2 - 14x + 24", "x-1", "x+2", "x-3", "x+4"); q.push(num("hard", "Find the coefficient of $x$ in the expansion of $(x-1)(x+2)(x-3)(x+4)$.", c[1], 0, "Pair $(x-1)(x+2)=x^2+x-2$ and $(x-3)(x+4)=x^2+x-12$; with $u=x^2+x$: $(u-2)(u-12)=u^2-14u+24$, so the $x$-coefficient is $-14$.")); }
  { const k = 1.5; const c = pmul(P("2x+3"), [-k, 1]); assert.strictEqual(c[1], 0); q.push(num("hard", "For what value of $k$ does the expansion of $(2x+3)(x-k)$ have <em>no</em> $x$-term?", 1.5, 0.001, "Expanded: $2x^2+(3-2k)x-3k$. Set $3-2k=0$.")); }
  { const c = pmul(P("x^2+2x+3"), P("x^2-2x+3")); assert.strictEqual(ptex(c), "x^4 + 2x^2 + 9"); q.push(num("hard", "$(x^2+ax+3)(x^2-2x+b)$ has no $x^3$-term and no $x$-term. Find $a+b$.", 5, 0, "$x^3$: $a-2=0\\Rightarrow a=2$. $x$: $ab-6=0\\Rightarrow b=3$. So $a+b=5$, and the product is $x^4+2x^2+9$.")); }
  q.push(num("hard", "Without a calculator, evaluate $1003\\times997$ using a special product.", 999991, 0, "$(1000+3)(1000-3)=1000^2-3^2=1\\,000\\,000-9$."));
  q.push(num("hard", "If $x+y=7$ and $xy=10$, find $x^2+y^2$.", 29, 0, "$(x+y)^2=x^2+2xy+y^2$, so $x^2+y^2=49-20=29$."));
  q.push(num("hard", "If $x-\\dfrac1x=3$, find $x^2+\\dfrac1{x^2}$.", 11, 0, "Square both sides: $x^2-2+\\dfrac1{x^2}=9$."));
  { const a = psub(ppow(P("x^2+3"), 3), ppow(P("x^3+1"), 2)); assert.strictEqual(pdeg(a), 4); verify("B-H8", (x) => (x * x + 3) ** 3 - (x ** 3 + 1) ** 2, (x) => peval(a, x));
    q.push(MC("hard", "What is the degree of $(x^2+3)^3-(x^3+1)^2$?", "$4$", ["$6$", "$5$", "$2$"], `Both start with $x^6$, which cancels. The result is $${ptex(a)}$.`)); }
  { const t = ppow(P("2x^2-x+1"), 3); q.push(num("hard", "Find the sum of the coefficients in the expansion of $(2x^2-x+1)^3$.", t.reduce((a, c) => a + c, 0), 0, "Substitute $x=1$: $(2-1+1)^3=8$.")); }
  { const cube = ppow(P("2x-1"), 3); assert.strictEqual(ptex(cube), "8x^3 - 12x^2 + 6x - 1"); assert.deepStrictEqual(pmul(P("2x-1"), P("4x^2-4x+1")), cube);
    q.push(ms("hard", "Which expressions equal $(2x-1)^3$?", ["$8x^3-12x^2+6x-1$", "$(2x-1)(4x^2-4x+1)$", "$8x^3-1$", "$(2x-1)(2x-1)(2x-1)$"], [0, 1, 3], "$(a-b)^3=a^3-3a^2b+3ab^2-b^3$, not $a^3-b^3$.")); }
  { const c = pmul(P("2x+3"), [5, 1]); assert.strictEqual(c[1], 13); q.push(num("hard", "A rectangle has sides $(2x+3)$ and $(x+k)$. The coefficient of $x$ in its area is $13$. Find $k$.", 5, 0, "Area $=2x^2+(2k+3)x+3k$; $2k+3=13$.")); }
  { const c = X("B-H12", "x^4 - 81", "x+3", "x-3", "x^2+9"); q.push(fill("hard", "Expand $(x+3)(x-3)(x^2+9)$: ___", spell(c), "Two differences of squares in a row: $(x^2-9)(x^2+9)=x^4-81$.")); }
  q.push(num("hard", "$Q(x)=x(x+2)(x+4)(x+6)+16$ is the square of a quadratic polynomial. Find $Q(3)$ and give the number whose square it is.", 31, 0, "Pair $x(x+6)=x^2+6x$ and $(x+2)(x+4)=x^2+6x+8$; with $u=x^2+6x$ we get $u(u+8)+16=(u+4)^2$. At $x=3$: $u=27$, so $31^2=961$. Check: $3\\cdot5\\cdot7\\cdot9+16=961$."));
  { assert.strictEqual(pmul(P("3x-2"), P("2x+5")).join(), P("6x^2+11x-10").join()); q.push(num("hard", "The integers $b$ and $d$ satisfy $(3x+b)(2x+d)=6x^2+11x-10$. Find $b+d$.", 3, 0, "$bd=-10$ and $3d+2b=11$. The pair $b=-2,\\ d=5$ works, so $b+d=3$.")); }
  q.push(num("hard", "A square of side $(x+7)$ has a square of side $(x+2)$ cut from its corner. The remaining area is $125$. Find $x$.", 8, 0, "$(x+7)^2-(x+2)^2=10x+45=125$, so $x=8$."));
  q.push(tf("hard", "The sum of two cubic polynomials always has degree $3$.", false, "$(x^3+x)+(-x^3+2)=x+2$ has degree $1$."));
  { const c = X("B-H17", "4x^3 - 120x^2 + 864x", "x", "36-2x", "24-2x"); q.push(num("hard", "A $36$ cm by $24$ cm sheet has squares of side $x$ cut from each corner to make an open box with volume $V=x(36-2x)(24-2x)$. Find the coefficient of $x^2$ in the expanded form of $V$.", c[2], 0, `$V=${ptex(c)}$.`)); }
  q.push(order("hard", "Put the steps in order to expand $(2x-1)(x^2+3x-4)$.", ["Multiply $2x$ by each term of the trinomial: $2x^3+6x^2-8x$", "Multiply $-1$ by each term of the trinomial: $-x^2-3x+4$", "Write all six partial products in one line", "Collect like terms by degree", "State the result: $2x^3+5x^2-11x+4$"]));
  { const a = X("B-H19a", "x^2 - 8x + 16", "x-4", "x-4"), b = X("B-H19b", "x^2 - 16", "x+4", "x-4"), c = X("B-H19c", "x^2 - 3x - 4", "x-4", "x+1"), d = X("B-H19d", "x^2 - 5x + 4", "x-4", "x-1");
    q.push(match("hard", "Match each product to its expansion — they look alike, so be careful.", ["$(x-4)^2$", "$(x+4)(x-4)$", "$(x-4)(x+1)$", "$(x-4)(x-1)$"], [T(a), T(b), T(c), T(d)], [0, 1, 2, 3])); }
  q.push(MC("hard", "Which expression is NOT equivalent to $(2x-3)^2$?", "$4x^2-9$", ["$4x^2-12x+9$", "$(3-2x)^2$", "$(2x-3)(2x-3)$"], "$(2x-3)^2=4x^2-12x+9$; $4x^2-9$ is $(2x-3)(2x+3)$."));
  return finish(q);
}
function finish(q) {
  const c = { easy: 0, medium: 0, hard: 0 }; for (const x of q) c[x.difficulty]++;
  assert.ok(q.length === 60 && c.easy === 20 && c.medium === 20 && c.hard === 20, JSON.stringify(c));
  return q;
}

// ───────────────────────── assignment ─────────────────────────
const asg = { k1: P("7x^2-3x+4"), k2: P("2x^2+x-3") };
const A1 = S("A-K1", "5x^2 - 8x + 13", "7x^2-3x+4", "2x^2+5x-9", -1);
const A2 = X("A-K2", "6x^2 + 11x - 35", "3x-5", "2x+7");
const A3 = X("A-K3", "16x^2 - 24x + 9", "4x-3", "4x-3");
const A4 = X("A-T1", "x^3 + 4x^2 - 11x - 30", "x+2", "x-3", "x+5");
const A5 = X("A-T2", "x^3 - 5x - 12", "x^2+3x+4", "x-3"); // k=3: x^2+3x+4 times x-3... ( x^2+kx+4)(x-3), k=3
assert.strictEqual(A5[2], 0);
const A6 = pmul(P("12+2x"), P("8+2x")); assert.strictEqual(ptex(A6), "4x^2 + 40x + 96");
verify("A-A1", (x) => (12 + 2 * x) * (8 + 2 * x) - 96, (x) => 4 * x * x + 40 * x);
const A7 = pmul(P("25-x"), P("80+4x")); assert.strictEqual(ptex(A7), "-4x^2 + 20x + 2000");
verify("A-A2", (x) => (25 - x) * (80 + 4 * x), (x) => peval(A7, x));
const A8 = X("A-A3", "4x^3 - 140x^2 + 1200x", "x", "40-2x", "30-2x");
assert.strictEqual(peval(A8, 5), 3000);

export const ASSIGNMENT = (() => {
  let n = 0;
  const sec = (arr) => arr.map((t) => `${++n}. ${t}`);
  const description = [
    "Knowledge & Understanding",
    ...sec([
      "Simplify $(7x^2-3x+4)-(2x^2+5x-9)$.",
      "Expand and simplify $(3x-5)(2x+7)$.",
      "Expand $(4x-3)^2$ and identify which special-product pattern you used.",
    ]),
    "Thinking",
    ...sec([
      "Expand and simplify $(x+2)(x-3)(x+5)$. State the degree and the constant term of the product before you multiply, then confirm both in your answer.",
      "The product $(x^2+kx+4)(x-3)$ has no $x^2$-term. Find $k$ and write the full expanded product.",
    ]),
    "Communication",
    ...sec([
      "A student expands $(x+6)^2$ and gets $x^2+36$. Using both an area model and a numerical check, explain the error and give the correct result.",
      "Two expressions look different: $(x+5)^2-(x-5)^2$ and $20x$. Describe two different ways to decide whether they are equivalent (one numerical, one algebraic), and carry out both.",
    ]),
    "Application",
    ...sec([
      "A rectangular garden is 12 m by 8 m. A path of constant width $x$ metres is built around it. (a) Write and expand an expression for the area of the garden plus path. (b) Find the area of the path alone as a polynomial, and evaluate it for $x=1.5$. (c) Show that a 2 m wide path has area 96 square metres.",
      "A shop sells an item at $(25-x)$ dollars after a discount of $x$ dollars, and sells $(80+4x)$ items. (a) Write and expand the revenue $R(x)$. (b) Find $R(3)$ and $R(5)$. (c) Explain why $R(0)$ and $R(5)$ are equal, and what that says about the best discount.",
      "A 40 cm by 30 cm sheet of card has a square of side $x$ cm cut from each corner and the sides folded up to make an open box. (a) Write the volume as an expanded polynomial. (b) Find the volume for $x=5$ cm and check it by multiplying the three dimensions directly. (c) State a sensible domain for $x$.",
    ]),
  ].join("\n");
  return { title: `Assignment ${CODE} — ${TITLE}`, description };
})();
