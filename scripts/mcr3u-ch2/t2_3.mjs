// MCR3U 2.3 — Simplifying Rational Expressions (rebuilt, deep version).
// Exports: lessonBlocks(), W23 (worksheet), LEARN23, bank(), ASSIGNMENT.
// Rational expressions are built from FACTOR LISTS (so the factored form is exact), the expanded form comes from the
// engine, and every claimed simplification is registered with verify(): original and simplified must agree at every x
// where both are defined (the removable points are skipped, which is exactly the point of the lesson).
import assert from "node:assert";
import {
  html, gframe, ex, pr, qa, watchOut, EX, PR,
  P, pmulAll, ppow, pscale, peval, ptex, prodTex, gx, verify,
  eqTable, mistake, steps, callout, challenge, gview, graphSvg,
} from "./lib2.mjs";
import { pgf, eqTableTex } from "./lib2tex.mjs";
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

export const CODE = "2.3";
export const TITLE = "Simplifying Rational Expressions";
export const FULL_TITLE = `${CODE} ${TITLE}`;
const M = (s) => `\\(${s}\\)`;
const T = (s) => `$${s}$`;
const r = String.raw;

const grp = (ps) => { const g = []; for (const p of ps) { const q = g.find((z) => z[0].join() === p.join()); if (q) q[1]++; else g.push([p, 1]); } return g.map(([p, e]) => (e === 1 ? p : [p, e])); };
const ft = (ps) => prodTex(1, grp(ps));
const dfr = (n, d) => `\\dfrac{${n}}{${d}}`;
const isOne = (ps) => ps.every((p) => p.length === 1 && p[0] === 1);
const toP = (f) => (typeof f === "string" ? P(f) : f);
/** A rational expression from lists of factor strings, e.g. R(["x-3","x+3"], ["x+4","x-3"]). */
function R(nf, df) {
  const n = nf.map(toP), d = df.map(toP), N = pmulAll(...n), D = pmulAll(...d);
  const fac = isOne(d) ? ft(n) : dfr(ft(n), ft(d));
  return { n, d, N, D, f: (x) => peval(N, x) / peval(D, x), tex: fac, fac, exp: dfr(ptex(N), ptex(D)) };
}
/** Product / quotient of rational expressions as functions. */
const times = (...rs) => ({ f: (x) => rs.reduce((a, q) => a * q.f(x), 1) });
const divide = (a, b) => ({ f: (x) => a.f(x) / b.f(x) });
const eqv = (name, a, b) => verify(name, a.f, b.f);
/** Restricted values from linear factors: roots of every non-constant linear factor in the given factor lists. */
function roots(...lists) {
  const set = new Map();
  for (const l of lists) for (const f of l.map(toP)) if (f.length === 2) { const num_ = -f[0], den = f[1]; const g = (a, b) => (b ? g(b, a % b) : Math.abs(a)); const k = g(num_, den) || 1; let a = num_ / k, b = den / k; if (b < 0) { a = -a; b = -b; } set.set(a / b, b === 1 ? `${a}` : `${a < 0 ? "-" : ""}\\tfrac{${Math.abs(a)}}{${b}}`); }
  return [...set.entries()].sort((p, q) => p[0] - q[0]);
}
const restrTex = (...lists) => roots(...lists).map(([, t]) => t).join(",\\ ");
const neTex = (...lists) => `x\\ne ${restrTex(...lists)}`;
const restrVals = (...lists) => roots(...lists).map(([v]) => v);
let _pos = 0;
/** MC whose choices are rational expressions {tex,f}; every wrong choice must differ numerically from the correct one. */
function RC(diff, prompt, correct, wrongs, fb = "") {
  const all = [correct, ...wrongs], texs = all.map((a) => a.tex);
  assert.strictEqual(new Set(texs).size, texs.length, `duplicate choices in: ${prompt}`);
  for (const w of wrongs) { let differs = false; for (const x of [-3.3, -1.7, 0.6, 2.4, 4.9, 7.1]) { const u = correct.f(x), v = w.f(x); if (Number.isFinite(u) && Number.isFinite(v) && Math.abs(u - v) > 1e-9) differs = true; } assert.ok(differs, `distractor ${w.tex} is equivalent to the correct answer! (${prompt})`); }
  const pos = _pos++ % all.length, ch = wrongs.map((w) => T(w.tex)); ch.splice(pos, 0, T(correct.tex));
  return mc(diff, prompt, ch, pos, fb);
}
function MC(diff, prompt, correct, bad, fb = "") {
  assert.strictEqual(new Set([correct, ...bad]).size, bad.length + 1, `duplicate choices in: ${prompt}`);
  const pos = _pos++ % (bad.length + 1), ch = [...bad]; ch.splice(pos, 0, correct);
  return mc(diff, prompt, ch, pos, fb);
}
const rx = (x) => (x === 1 ? "" : x);
const holeY = (orig, simp, a) => { const v = simp.f(a); assert.ok(Number.isFinite(v)); assert.ok(!Number.isFinite(orig.f(a))); return v; };

// ───────────────────────── lesson data ─────────────────────────
const L1 = R(["3x-1"], ["x-1", "x-3"]);
const L3o = R(["x-3", "x+3"], ["x+4", "x-3"]), L3s = R(["x+3"], ["x+4"]); eqv("L-E3", L3o, L3s);
const L4o = R(["6x", "x-2"], ["3", "x-2", "x+2"]), L4s = R(["2x"], ["x+2"]); eqv("L-E4", L4o, L4s);
assert.strictEqual(ptex(L4o.N), "6x^2 - 12x"); assert.strictEqual(ptex(L4o.D), "3x^2 - 12");
const L5o = R(["x-5", "x+5"], ["-1", "x-5"]), L5s = R(["-1", "x+5"], ["1"]); eqv("L-E5", L5o, L5s);
verify("L-E5b", (x) => (4 - x) / (x - 4), () => -1);
const L6o = R(["2x-1", "x+4"], ["2x-1", "x-3"]), L6s = R(["x+4"], ["x-3"]); eqv("L-E6", L6o, L6s);
assert.strictEqual(ptex(L6o.N), "2x^2 + 7x - 4"); assert.strictEqual(ptex(L6o.D), "2x^2 - 7x + 3");
const L7a = R(["x-4", "x+3"], ["x-2", "x+2"]), L7b = R(["x-2"], ["x-4"]), L7s = R(["x+3"], ["x+2"]);
assert.strictEqual(ptex(L7a.N), "x^2 - x - 12"); assert.strictEqual(ptex(L7a.D), "x^2 - 4");
eqv("L-E7", times(L7a, L7b), L7s);
const L8a = R(["x+2", "x+3"], ["x-1", "x+1"]), L8b = R(["x+3"], ["x+2", "x-1"]), L8s = R(["x+2", "x+2"], ["x+1"]);
assert.strictEqual(ptex(L8a.N), "x^2 + 5x + 6"); assert.strictEqual(ptex(L8a.D), "x^2 - 1"); assert.strictEqual(ptex(L8b.D), "x^2 + x - 2");
eqv("L-E8", divide(L8a, L8b), L8s);
const L10o = R(["x-6", "x+2"], ["x-6"]), L10s = R(["x+2"], ["1"]); eqv("L-E10", L10o, L10s); assert.strictEqual(ptex(L10o.N), "x^2 - 4x - 12");
const L11o = R(["x", "x-1", "x+1"], ["x", "x+1"]), L11s = R(["x-1"], ["1"]); eqv("L-E11", L11o, L11s); assert.strictEqual(ptex(L11o.N), "x^3 - x"); assert.strictEqual(ptex(L11o.D), "x^2 + x");
verify("L-E2", (a) => (18 * a ** 3 * 4) / (24 * a * a * 32), (a) => (3 * a) / (4 * 8)); // b=2: 18a^3 b^2/(24 a^2 b^5) = 3a/(4 b^3)
verify("L-E9a", (x) => (x * x - 4) / (x - 2), (x) => x + 2);
const L12 = R(["x-2"], ["x-6"]); // restrictions only
const P1 = R(["x+7"], ["x+5", "x-3"]); assert.strictEqual(ptex(P1.D), "x^2 + 2x - 15");
const P3o = R(["x-7", "x+3"], ["x-7", "x+7"]), P3s = R(["x+3"], ["x+7"]); eqv("L-P3", P3o, P3s); assert.strictEqual(ptex(P3o.N), "x^2 - 4x - 21"); assert.strictEqual(ptex(P3o.D), "x^2 - 49");
const P4o = R(["3x+2", "2x-1"], ["3x-2", "3x+2"]), P4s = R(["2x-1"], ["3x-2"]); eqv("L-P4", P4o, P4s); assert.strictEqual(ptex(P4o.N), "6x^2 + x - 2"); assert.strictEqual(ptex(P4o.D), "9x^2 - 4");
const P5a = R(["x-3", "x+2"], ["x-2", "x+2"]), P5b = R(["x+1", "x+2"], ["x-3", "x+1"]), P5s = R(["x+2"], ["x-2"]);
assert.strictEqual(ptex(P5a.N), "x^2 - x - 6"); assert.strictEqual(ptex(P5b.N), "x^2 + 3x + 2"); assert.strictEqual(ptex(P5b.D), "x^2 - 2x - 3");
eqv("L-P5", times(P5a, P5b), P5s);
const P6a = R(["x+3", "x-1"], ["x-1", "x+1"]), P6b = R(["x+3"], ["x+1"]);
assert.strictEqual(ptex(P6a.N), "x^2 + 2x - 3"); eqv("L-P6", divide(P6a, P6b), { f: () => 1 });
const P7o = R(["x-4", "x+3"], ["x-4"]), P7s = R(["x+3"], ["1"]); assert.strictEqual(ptex(P7o.N), "x^2 - x - 12"); eqv("L-P7", P7o, P7s);
const P8o = R(["4x+3", "2x-1"], ["2x-1"]), P8s = R(["4x+3"], ["1"]); assert.strictEqual(ptex(P8o.N), "8x^2 + 2x - 3"); eqv("L-P8", P8o, P8s);
const CHo = R(["x-1", "x+1", "x^2+1"], ["x-1", "x^2+1"]), CHs = R(["x+1"], ["1"]); eqv("L-CH", CHo, CHs);
assert.strictEqual(ptex(CHo.N), "x^4 - 1"); assert.strictEqual(ptex(CHo.D), "x^3 - x^2 + x - 1");

const holeG = (expr, bounds, title, holes, extra = []) => gframe([`y = ${expr}`], { title, labels: [...holes.map(([x, y]) => ({ x, y, t: `hole (${x}, ${y})`, c: "#be123c" })), ...extra], ...gview(...bounds) });
const gHole1 = holeG("(x^2-9)/(x-3)", [-6, 6, -4, 10], "y = (x² − 9)/(x − 3): the line y = x + 3 with a HOLE at (3, 6)", [[3, 6]]);
const gHole2 = holeG("(x^2-4)/(x-2)", [-4, 6, -3, 9], "(x² − 4)/(x − 2) = x + 2: a hole at (2, 4)", [[2, 4]]);
const gAsy = gframe(["y = 1/(x-2)"], { title: "1/(x − 2): a vertical ASYMPTOTE at x = 2 (nothing cancels)", labels: [{ x: 2, y: 0, t: "x = 2", c: "#be123c" }], ...gview(-2, 6, -5, 5) });
const gE11 = holeG("(x^3-x)/(x^2+x)", [-4, 4, -5, 4], "(x³ − x)/(x² + x) = x − 1: holes at (0, −1) and (−1, −2)", [[0, -1], [-1, -2]]);

const lessonHtml = r`<div class="lecture-box">
  <h1>➗ Simplifying Rational Expressions</h1>
  <p><strong>Overview.</strong> A <strong>rational expression</strong> is a ratio of two polynomials, like \(\dfrac{x^2-9}{x-3}\). Just as \(\dfrac{6}{9}=\dfrac{2}{3}\), we simplify by <strong>cancelling common <em>factors</em></strong> — which is why the factoring from 2.2 matters. But there is one new idea: a fraction is <em>undefined</em> when its denominator is 0, so some values of \(x\) are <strong>restricted</strong> — and those restrictions never go away, even after cancelling.</p>
  ${callout("Cancel factors, never terms.", "You may only cancel something that multiplies the <em>whole</em> numerator and the <em>whole</em> denominator. In \\(\\dfrac{x+6}{6}\\) the \\(6\\) is added, not multiplied, so it cannot be cancelled.", "amber")}

  <h2>📌 The same graph — with one missing point</h2>
  <p>\(\dfrac{x^2-9}{x-3}=\dfrac{(x-3)(x+3)}{x-3}=x+3\) — but only when \(x\ne3\). At \(x=3\) the original has no value at all (\(\tfrac{0}{0}\)), while \(x+3\) happily gives 6. So the two expressions draw the same line <em>except for one missing point</em>, a <strong>hole</strong> at \((3,6)\):</p>
  ${gHole1}
  ${eqTable([{ tex: "\\dfrac{x^2-9}{x-3}", f: (x) => (x * x - 9) / (x - 3) }, { tex: "x+3", f: (x) => x + 3 }], [-2, 0, 2, 3, 4, 6], "Equal everywhere — except where the original is undefined")}
  <p>This is the key idea of the whole lesson: <strong>a simplified expression is equivalent to the original <em>for every allowed \(x\)</em></strong>, so we always state the restrictions from the <em>original</em> denominator.</p>

  ${steps("How to simplify a rational expression", [
    "<strong>Factor</strong> numerator and denominator completely (GCF, trinomial, difference of squares, grouping).",
    "<strong>State the restrictions</strong> — every value that makes a factor of the <em>original</em> denominator zero.",
    "<strong>Cancel</strong> factors that appear in both. Watch for <em>opposites</em> like \\((a-b)\\) and \\((b-a)\\): they cancel to \\(-1\\).",
    "<strong>Write what remains</strong>, and keep the restrictions with it.",
  ])}

  <h2>🔵 Examples</h2>
  ${ex("Example 1: Finding restrictions", `State the restrictions on ${M(L1.exp)}.`, [
    `Only the denominator matters. Factor it: \\(x^2-4x+3=(x-1)(x-3)\\).`,
    `Set each factor to zero: \\(x-1=0\\) and \\(x-3=0\\).`,
  ], `${M(neTex(L1.d))} (that is, \\(x\\ne1\\) and \\(x\\ne3\\)). The numerator \\(3x-1\\) never creates a restriction — a numerator of 0 is allowed.`)}
  ${ex("Example 2: Monomials", `Simplify ${M("\\dfrac{18a^3b^2}{24a^2b^5}")}.`, [
    `Divide numbers by their GCF, \\(6\\): \\(\\dfrac{3}{4}\\).`,
    `Subtract exponents: \\(a^{3-2}=a\\) in the numerator; \\(b^{2-5}=b^{-3}\\), so \\(b^3\\) goes to the denominator.`,
  ], `${M("\\dfrac{3a}{4b^3}")}, with \\(a\\ne0,\\ b\\ne0\\).`)}
  ${ex("Example 3: Trinomial and difference of squares", `Simplify ${M(L3o.exp)} and state the restrictions.`, [
    `Factor: numerator \\((x-3)(x+3)\\); denominator \\(x^2+x-12=(x+4)(x-3)\\). So the expression is ${M(L3o.fac)}.`,
    `Restrictions come from the <em>original</em> denominator: \\(x\\ne-4\\) and \\(x\\ne3\\).`,
    `Cancel \\((x-3)\\).`,
  ], `${M(L3s.tex)}, ${M(neTex(L3o.d))}. (At \\(x=3\\) the simplified form would give \\(\\tfrac67\\), but the original is undefined there — a hole at \\((3,\\tfrac67)\\).)`)}
  ${ex("Example 4: GCF first", `Simplify ${M(L4o.exp)}.`, [
    `Factor with the GCF first: numerator \\(6x(x-2)\\); denominator \\(3(x^2-4)=3(x-2)(x+2)\\).`,
    `Cancel the number \\(6\\div3=2\\) and the factor \\((x-2)\\).`,
  ], `${M(L4s.tex)}, ${M(neTex(L4o.d))}.`)}
  ${ex("Example 5: Opposite factors", `Simplify (a) ${M("\\dfrac{4-x}{x-4}")} and (b) ${M("\\dfrac{x^2-25}{5-x}")}.`, [
    `(a) \\(4-x=-(x-4)\\), so \\(\\dfrac{-(x-4)}{x-4}=-1\\).`,
    `(b) Rewrite \\(5-x=-(x-5)\\): \\(\\dfrac{(x-5)(x+5)}{-(x-5)}=-(x+5)\\).`,
  ], `(a) \\(-1\\), \\(x\\ne4\\); (b) \\(-x-5\\), \\(x\\ne5\\). Spotting that two brackets are <em>opposites</em> is a major time-saver.`)}
  ${ex("Example 6: A complex trinomial", `Simplify ${M(L6o.exp)}.`, [
    `Decompose each: \\(2x^2+7x-4=(2x-1)(x+4)\\) and \\(2x^2-7x+3=(2x-1)(x-3)\\).`,
    `Cancel \\((2x-1)\\). Restrictions: \\(x\\ne\\tfrac12\\) and \\(x\\ne3\\).`,
  ], `${M(L6s.tex)}, ${M(neTex(L6o.d))}.`)}
  ${ex("Example 7: Multiplying", `Simplify ${M(L7a.exp + "\\times" + L7b.exp)}.`, [
    `Factor everything: ${M(L7a.fac + "\\times" + L7b.fac)}.`,
    `You may cancel <em>across</em> the fractions: \\((x-4)\\) cancels with \\((x-4)\\) and \\((x-2)\\) with \\((x-2)\\).`,
  ], `${M(L7s.tex)}, ${M(neTex(L7a.d, L7b.d))}. Restrictions come from <em>every</em> denominator.`)}
  ${ex("Example 8: Dividing", `Simplify ${M(L8a.exp + "\\div" + L8b.exp)}.`, [
    `Factor: \\(\\dfrac{(x+2)(x+3)}{(x-1)(x+1)}\\div\\dfrac{x+3}{(x+2)(x-1)}\\).`,
    `<strong>Multiply by the reciprocal</strong> of the second fraction: \\(\\dfrac{(x+2)(x+3)}{(x-1)(x+1)}\\times\\dfrac{(x+2)(x-1)}{x+3}\\).`,
    `Cancel \\((x+3)\\) and \\((x-1)\\).`,
  ], `${M(L8s.tex)}. Restrictions: \\(x\\ne1,-1\\) (first denominator), \\(x\\ne-2,1\\) (second denominator) and also \\(x\\ne-3\\) — we are <em>dividing by</em> \\(\\tfrac{x+3}{\\ldots}\\), which would be dividing by 0. So ${M(neTex(L8a.d, L8b.d, L8b.n))}.`)}
  ${ex("Example 9: Hole or asymptote?", `Compare ${M("\\dfrac{x^2-4}{x-2}")} and ${M("\\dfrac{1}{x-2}")}. Both are undefined at \\(x=2\\).`, [
    `The first factors to \\(\\dfrac{(x-2)(x+2)}{x-2}\\) — the factor <em>cancels</em>, leaving \\(x+2\\) with a <strong>hole</strong> at \\((2,4)\\).`,
    `In the second nothing cancels. As \\(x\\to2\\) the denominator shrinks and the values blow up: a <strong>vertical asymptote</strong> at \\(x=2\\).`,
  ], `A restriction that <em>cancels</em> is a hole; a restriction that <em>survives</em> in the denominator is a vertical asymptote.`, gHole2 + gAsy)}
  ${ex("Example 10: An application — time from distance and speed", `A cyclist rides \\((x^2-4x-12)\\) km at an average speed of \\((x-6)\\) km/h. Write her time, in hours, as a simplified expression.`, [
    `Time \\(=\\) distance \\(\\div\\) speed \\(=\\dfrac{x^2-4x-12}{x-6}=\\dfrac{(x-6)(x+2)}{x-6}\\).`,
    `Cancel \\((x-6)\\). Restriction: \\(x\\ne6\\); and since a speed must be positive, \\(x>6\\).`,
  ], `Time \\(=(x+2)\\) hours. For \\(x=10\\): the ride is \\(100-40-12=48\\) km at \\(4\\) km/h, which takes \\(12\\) hours \\(=10+2\\) ✓.`)}
  ${ex("Example 11: Several holes", `Simplify ${M(L11o.exp)} and find the holes in its graph.`, [
    `Factor: \\(\\dfrac{x(x-1)(x+1)}{x(x+1)}\\). Restrictions: \\(x\\ne0\\) and \\(x\\ne-1\\).`,
    `Cancel \\(x(x+1)\\), leaving \\(x-1\\). Evaluate \\(x-1\\) at each restriction to find the holes: \\(x=0\\to-1\\) and \\(x=-1\\to-2\\).`,
  ], `${M("x-1")}, with holes at \\((0,-1)\\) and \\((-1,-2)\\).`, gE11)}

  ${mistake("\\(\\dfrac{x+6}{6}=x+1\\)", "The 6 in the numerator is <em>added</em> to \\(x\\); only factors can be cancelled. At \\(x=6\\): \\(\\dfrac{12}{6}=2\\), but \\(x+1=7\\).", "\\(\\dfrac{x+6}{6}\\) cannot be simplified. (It is equivalent to \\(\\tfrac{x}{6}+1\\).)")}
  ${mistake("\\(\\dfrac{x^2-9}{x-3}=x+3\\) for all \\(x\\)", "At \\(x=3\\) the left side is undefined but \\(x+3=6\\). They are not equivalent <em>everywhere</em>.", "\\(\\dfrac{x^2-9}{x-3}=x+3,\\ x\\ne3\\). Always keep the restriction.")}
  ${watchOut([
    "Restrictions come from the <strong>original</strong> denominator(s) — <em>before</em> cancelling. A factor that cancels still leaves a restriction (a hole).",
    "When dividing, also exclude values that make the <em>numerator of the divisor</em> zero.",
    "\\(\\dfrac{a-b}{b-a}=-1\\), not \\(1\\). Look for opposite brackets before you decide nothing cancels.",
    "Factor <em>everything</em> first. If you cannot factor a numerator or denominator, ask whether it is a sum of squares (prime) or whether you took out the GCF.",
    "A numerator equal to 0 is allowed (the fraction is just 0). Only a zero denominator is forbidden.",
  ])}

  <h2>🟡 Practice Questions</h2>
  ${pr(1, "Knowledge", `State the restrictions on ${M(P1.exp)}.`, `\\(x^2+2x-15=(x+5)(x-3)\\), so ${M(neTex(P1.d))}.`)}
  ${pr(2, "Knowledge", `Simplify ${M("\\dfrac{28x^4y}{42x^2y^3}")}.`, `${M("\\dfrac{2x^2}{3y^2}")}, \\(x\\ne0,\\ y\\ne0\\).`)}
  ${pr(3, "Knowledge", `Simplify ${M(P3o.exp)} and state the restrictions.`, `\\(\\dfrac{(x-7)(x+3)}{(x-7)(x+7)}=\\)${M(P3s.tex)}, ${M(neTex(P3o.d))}.`)}
  ${pr(4, "Thinking", `Simplify ${M(P4o.exp)}.`, `\\(\\dfrac{(3x+2)(2x-1)}{(3x-2)(3x+2)}=\\)${M(P4s.tex)}, ${M(neTex(P4o.d))}.`)}
  ${pr(5, "Thinking", `Simplify ${M(P5a.exp + "\\times" + P5b.exp)}.`, `Factor: \\(\\dfrac{(x-3)(x+2)}{(x-2)(x+2)}\\times\\dfrac{(x+1)(x+2)}{(x-3)(x+1)}=\\)${M(P5s.tex)}, ${M(neTex(P5a.d, P5b.d))}.`)}
  ${pr(6, "Thinking", `Simplify ${M(P6a.exp + "\\div\\dfrac{x+3}{x+1}")}. State all the restrictions.`, `\\(\\dfrac{(x+3)(x-1)}{(x-1)(x+1)}\\times\\dfrac{x+1}{x+3}=1\\). Restrictions: ${M(neTex(P6a.d, ["x+1"], ["x+3"]))}. The result is \\(1\\) everywhere except three missing points.`)}
  ${pr(7, "Thinking", `The graph of \\(y=${P7o.exp}\\) has a hole. Find its coordinates.`, `\\(y=x+3\\) for \\(x\\ne4\\); at \\(x=4\\) the line has \\(y=7\\). The hole is at \\((4,7)\\).`)}
  ${pr(8, "Application", `A metal block has mass \\((8x^2+2x-3)\\) g and volume \\((2x-1)\\) cm³. Write its density (mass ÷ volume) in simplest form and find the density when \\(x=2\\).`, `\\(\\dfrac{(4x+3)(2x-1)}{2x-1}=4x+3\\) g/cm³, with \\(x\\ne\\tfrac12\\). At \\(x=2\\): \\(11\\) g/cm³ (check: \\(\\dfrac{32+4-3}{3}=11\\) ✓).`)}
  ${challenge("Simplify \\(\\dfrac{x^4-1}{x^3-x^2+x-1}\\). (Factor the denominator by grouping first.)", `Denominator: \\(x^2(x-1)+1(x-1)=(x-1)(x^2+1)\\). Numerator: \\((x^2-1)(x^2+1)=(x-1)(x+1)(x^2+1)\\). Cancel \\((x-1)(x^2+1)\\): ${M(CHs.tex)}, \\(x\\ne1\\).`)}

  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: Why do restrictions stay after I cancel?", "Because the original expression is still undefined there. Cancelling creates an equivalent expression only for the <em>allowed</em> values of \\(x\\).")}
  ${qa("Q2: Can I cancel \\(x\\) in \\(\\dfrac{x+3}{x}\\)?", "No. \\(x\\) is a term of the numerator, not a factor of the whole numerator. Test \\(x=3\\): \\(\\tfrac63=2\\), not \\(4\\).")}
  ${qa("Q3: What is the difference between a hole and an asymptote?", "A restricted value whose factor <em>cancels</em> gives a hole (a single missing point). A restricted value whose factor <em>stays</em> in the denominator gives a vertical asymptote.")}
  ${qa("Q4: How do I find the \\(y\\)-coordinate of a hole?", "Substitute the restricted \\(x\\)-value into the <em>simplified</em> expression.")}
  ${qa("Q5: When dividing rational expressions, why are there extra restrictions?", "Dividing by a fraction means multiplying by its reciprocal, so the fraction you divide by cannot be 0 — its numerator must be non-zero as well as its denominator.")}
  ${qa("Q6: How can I check a simplification quickly?", "Choose an allowed value (not a restriction), evaluate both forms, and compare. A graph of both forms should overlap with only a hole difference.")}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

// ───────────────────────── worksheet ─────────────────────────
const W1 = R(["x+5"], ["x-5", "x+2"]); assert.strictEqual(ptex(W1.D), "x^2 - 3x - 10");
const W3o = R(["x-4", "x+4"], ["x-4", "x+3"]), W3s = R(["x+4"], ["x+3"]); eqv("W-E3", W3o, W3s); assert.strictEqual(ptex(W3o.N), "x^2 - 16"); assert.strictEqual(ptex(W3o.D), "x^2 - x - 12");
const W4o = R(["2x-3", "2x+3"], ["2x-3", "x+2"]), W4s = R(["2x+3"], ["x+2"]); eqv("W-E4", W4o, W4s); assert.strictEqual(ptex(W4o.N), "4x^2 - 9"); assert.strictEqual(ptex(W4o.D), "2x^2 + x - 6");
const W5o = R(["-1", "x-3"], ["x-3", "x+3"]), W5s = R(["-1"], ["x+3"]); eqv("W-E5", W5o, W5s); verify("W-E5b", (x) => (3 - x) / (x * x - 9), (x) => -1 / (x + 3));
const W6a = R(["x+5", "x-3"], ["x-3", "x+3"]), W6b = R(["x+3"], ["x+5"]); assert.strictEqual(ptex(W6a.N), "x^2 + 2x - 15"); assert.strictEqual(ptex(W6a.D), "x^2 - 9"); eqv("W-E6", times(W6a, W6b), { f: () => 1 });
const W7a = R(["2", "x-2", "x+2"], ["x+3", "x+3"]), W7b = R(["x-2"], ["x+3"]), W7s = R(["2", "x+2"], ["x+3"]);
assert.strictEqual(ptex(W7a.N), "2x^2 - 8"); assert.strictEqual(ptex(W7a.D), "x^2 + 6x + 9"); eqv("W-E7", divide(W7a, W7b), W7s);
const W8o = R(["5x+2", "3x-2"], ["3x-2"]); assert.strictEqual(ptex(W8o.N), "15x^2 - 4x - 4"); eqv("W-E8", W8o, R(["5x+2"], ["1"]));
verify("W-E2", (m) => (20 * m ** 4 * 1.5 ** 2) / (35 * m * 1.5 ** 6), (m) => (4 * m ** 3) / (7 * 1.5 ** 4));
const W9o = R(["x-3", "x+2"], ["x-3"]); assert.strictEqual(ptex(W9o.N), "x^2 - x - 6"); eqv("W-E9", W9o, R(["x+2"], ["1"]));
const Q1 = R(["2x-1"], ["x-4", "x+3"]); assert.strictEqual(ptex(Q1.D), "x^2 - x - 12");
verify("W-Q2", (a) => (36 * a * a * 1.7 ** 5) / (48 * a ** 4 * 1.7 * 1.7), (a) => (3 * 1.7 ** 3) / (4 * a * a));
const Q3o = R(["x-5", "x+4"], ["x-5", "x+5"]), Q3s = R(["x+4"], ["x+5"]); assert.strictEqual(ptex(Q3o.N), "x^2 - x - 20"); assert.strictEqual(ptex(Q3o.D), "x^2 - 25"); eqv("W-Q3", Q3o, Q3s);
const Q4o = R(["3x-2", "x+1"], ["3x-2", "x-1"]), Q4s = R(["x+1"], ["x-1"]); assert.strictEqual(ptex(Q4o.N), "3x^2 + x - 2"); assert.strictEqual(ptex(Q4o.D), "3x^2 - 5x + 2"); eqv("W-Q4", Q4o, Q4s);
verify("W-Q5", (x) => (2 - x) / (x * x - 4 * x + 4), (x) => -1 / (x - 2));
const Q6a = R(["x-1", "x+1"], ["x+1", "x+2"]), Q6b = R(["x+2"], ["x-1"]); assert.strictEqual(ptex(Q6a.N), "x^2 - 1"); assert.strictEqual(ptex(Q6a.D), "x^2 + 3x + 2"); eqv("W-Q6", times(Q6a, Q6b), { f: () => 1 });
const Q7a = R(["x-3", "x-3"], ["x-2", "x+2"]), Q7b = R(["x-3"], ["x+2"]), Q7s = R(["x-3"], ["x-2"]); assert.strictEqual(ptex(Q7a.N), "x^2 - 6x + 9"); eqv("W-Q7", divide(Q7a, Q7b), Q7s);
const Q8o = R(["2", "x", "x-2", "x+2"], ["x", "x-2"]), Q8s = R(["2", "x+2"], ["1"]); assert.strictEqual(ptex(Q8o.N), "2x^3 - 8x"); assert.strictEqual(ptex(Q8o.D), "x^2 - 2x"); eqv("W-Q8", Q8o, Q8s);
const Q9o = R(["x-3", "x+4"], ["x-3", "x+3"]), Q9s = R(["x+4"], ["x+3"]); assert.strictEqual(ptex(Q9o.N), "x^2 + x - 12"); assert.strictEqual(ptex(Q9o.D), "x^2 - 9"); eqv("W-Q9", Q9o, Q9s);
const Q10o = R(["5x-3", "2x+1"], ["2x+1"]); assert.strictEqual(ptex(Q10o.N), "10x^2 - x - 3"); eqv("W-Q10", Q10o, R(["5x-3"], ["1"]));
const Q9s2 = Q9s; // hole of (x^2+x-12)/(x^2-9) at x = 3 is (3, 7/6)
assert.ok(Math.abs(Q9s.f(3) - 7 / 6) < 1e-12);
const Q10o2 = R(["5x-3", "2x+1"], ["2x+1"]);
const Q11s = R(["x-2"], ["x-3"]), Q11o = R(["x-2", "x+3"], ["x-3", "x+3"]); assert.strictEqual(ptex(Q11o.N), "x^2 + x - 6"); assert.strictEqual(ptex(Q11o.D), "x^2 - 9"); eqv("W-Q11", Q11o, Q11s);
const Q14o = R(["x-1", "x+1", "x-2", "x+2"], ["x-1", "x-2", "x+2"]), Q14s = R(["x+1"], ["1"]); assert.strictEqual(ptex(Q14o.N), "x^4 - 5x^2 + 4"); assert.strictEqual(ptex(Q14o.D), "x^3 - x^2 - 4x + 4"); eqv("W-Q14", Q14o, Q14s);
const Q13o = R(["x-2", "x+2"], ["x+2"]); assert.strictEqual(ptex(Q13o.N), "x^2 - 4"); eqv("W-Q13", Q13o, R(["x-2"], ["1"]));
const eqTrap = [{ tex: String.raw`\dfrac{x^2+9}{x+3}`, f: (x) => (x * x + 9) / (x + 3) }, { tex: "x+3", f: (x) => x + 3 }];

export const W23 = {
  code: "2.3", unit: "2: Equivalent Algebraic Expressions", title: "Simplifying Rational Expressions",
  intro: r`A \textbf{rational expression} is a ratio of polynomials. We simplify it by \textbf{factoring} and \textbf{cancelling common factors} --- never terms --- and we always record the \textbf{restrictions}: the values of $x$ that make an \emph{original} denominator zero. A simplified expression is equivalent to the original only for allowed values of $x$; where a cancelled factor is zero the graph has a \textbf{hole}.`,
  ideas: [
    r`\textbf{Steps:} (1) factor completely; (2) write the restrictions from the \emph{original} denominators; (3) cancel common factors; (4) keep the restrictions.`,
    r`\textbf{Cancel factors, not terms:} $\dfrac{x+6}{6}\ne x+1$ because the $6$ is \emph{added}.`,
    r`\textbf{Opposites:} $\dfrac{a-b}{b-a}=-1$. Rewrite $b-a=-(a-b)$ before cancelling.`,
    r`\textbf{Dividing} means multiplying by the reciprocal --- and the divisor's \emph{numerator} becomes a restriction too.`,
    r`\textbf{Hole vs asymptote:} a restriction whose factor cancels is a hole; a restriction that survives in the denominator is a vertical asymptote. Find the hole's $y$ by substituting into the simplified form.`,
  ],
  examples: [
    { t: "Restrictions", body: String.raw`State the restrictions on $${W1.exp}$.\soln Factor the denominator: $x^2-3x-10=(x-5)(x+2)$. Set each factor to $0$. \\ $${neTex(W1.d)}$. The numerator never creates a restriction.` },
    { t: "Monomials", body: String.raw`Simplify $\dfrac{20m^4n^2}{35mn^6}$.\soln Numbers: $\dfrac{20}{35}=\dfrac47$. Variables: $m^{4-1}=m^3$ stays on top; $n^{2-6}=n^{-4}$, so $n^4$ goes to the bottom. \\ $=\dfrac{4m^3}{7n^4}$, with $m\ne0,\ n\ne0$.` },
    { t: "Trinomial and difference of squares", body: String.raw`Simplify $${W3o.exp}$.\soln $\dfrac{(x-4)(x+4)}{(x-4)(x+3)}$; restrictions $${neTex(W3o.d)}$. Cancel $(x-4)$. \\ $=${W3s.tex}$, $${neTex(W3o.d)}$.` },
    { t: "Complex trinomial", body: String.raw`Simplify $${W4o.exp}$.\soln $4x^2-9=(2x-3)(2x+3)$ and $2x^2+x-6=(2x-3)(x+2)$. \\ Restrictions: $x\ne\tfrac32,\ -2$. Cancel $(2x-3)$. \\ $=${W4s.tex}$.` },
    { t: "Opposite factors", body: String.raw`Simplify $\dfrac{3-x}{x^2-9}$.\soln $3-x=-(x-3)$ and $x^2-9=(x-3)(x+3)$. \\ $\dfrac{-(x-3)}{(x-3)(x+3)}=-\dfrac{1}{x+3}$, with $x\ne\pm3$.` },
    { t: "Multiplying", body: String.raw`Simplify $${W6a.exp}\times${W6b.exp}$.\soln Factor: $\dfrac{(x+5)(x-3)}{(x-3)(x+3)}\times\dfrac{x+3}{x+5}$. Restrictions: $${neTex(W6a.d, W6b.d)}$. \\ Everything cancels: $=1$, $${neTex(W6a.d, W6b.d)}$ --- the answer is $1$ \emph{except} at three missing points.` },
    { t: "Dividing", body: String.raw`Simplify $${W7a.exp}\div${W7b.exp}$.\soln Factor and flip the second fraction: $\dfrac{2(x-2)(x+2)}{(x+3)^2}\times\dfrac{x+3}{x-2}$. \\ Cancel $(x-2)$ and one $(x+3)$: $=${W7s.tex}$. \\ Restrictions: $x\ne-3$ (denominators) and $x\ne2$ (we divided by $\frac{x-2}{x+3}$). So $${neTex(W7a.d, W7b.d, W7b.n)}$.` },
    { t: "Application: density", body: String.raw`A block has mass $(15x^2-4x-4)$ g and volume $(3x-2)$ cm$^3$. Write its density as a simplified expression and evaluate at $x=2$.\soln Density $=\dfrac{\text{mass}}{\text{volume}}=\dfrac{(5x+2)(3x-2)}{3x-2}=5x+2$ g/cm$^3$, $x\ne\tfrac23$. \\ At $x=2$: $12$ g/cm$^3$. Check: $\dfrac{60-8-4}{4}=12$ \checkmark.` },
    { t: "Finding a hole", body: String.raw`Simplify $y=\dfrac{x^2-x-6}{x-3}$ and find the coordinates of the hole.\soln $\dfrac{(x-3)(x+2)}{x-3}=x+2$, $x\ne3$. \\ At $x=3$ the line has $y=5$, so the hole is at $(3,5)$.` +
      pgf({ curves: [{ f: "x+2" }], bounds: [-4, 6, -3, 9], holes: [[3, 5]], xt: 1, yt: 2, note: "The graph is the line $y=x+2$ with one point removed." }) },
    { t: "Test before you trust", body: String.raw`A student says $\dfrac{x^2+9}{x+3}=x+3$. Test the claim.
${eqTableTex(eqTrap, [0, 1, 2, 3], { check: true })}
\soln The values agree at $x=0$ and $x=3$ but not at $x=1$ or $x=2$. One mismatch is enough to prove the expressions are \emph{not} equivalent. $x^2+9$ is a sum of squares and does not factor, so nothing cancels: the claim confuses a \emph{term} with a \emph{factor}.` },
  ],
  questions: [
    { ask: String.raw`State the restrictions on $${Q1.exp}$.`, ws: "1.8cm" },
    { ask: String.raw`Simplify $\dfrac{36a^2b^5}{48a^4b^2}$.`, ws: "2cm" },
    { ask: String.raw`Simplify $${Q3o.exp}$ and state the restrictions.`, ws: "3cm" },
    { ask: String.raw`Simplify $${Q4o.exp}$ and state the restrictions.`, ws: "3.4cm" },
    { ask: String.raw`Simplify $\dfrac{2-x}{x^2-4x+4}$. (Look for opposites.)`, ws: "3cm" },
    { ask: String.raw`Simplify $${Q6a.exp}\times${Q6b.exp}$. State all the restrictions.`, ws: "3.6cm" },
    { ask: String.raw`Simplify $${Q7a.exp}\div${Q7b.exp}$. State all the restrictions.`, ws: "3.8cm" },
    { ask: String.raw`Simplify $${Q8o.exp}$ and state the restrictions.`, ws: "3.2cm" },
    { ask: String.raw`The graph of $y=\dfrac{x^2+x-12}{x^2-9}$ has one hole and one vertical asymptote. Find the coordinates of the hole and the equation of the asymptote.`, ws: "3.8cm" },
    { ask: String.raw`A metal bar has mass $(10x^2-x-3)$ g and volume $(2x+1)$ cm$^3$. Find its density in simplest form, and the density when $x=4$.`, ws: "3.2cm" },
    { ask: String.raw`A student writes $\dfrac{x^2+x-6}{x^2-9}=\dfrac{x-6}{-9}$, \emph{cancelling the $x^2$ terms}. Test the claim at $x=4$, explain the mistake, and simplify correctly.`, ws: "3.8cm" },
    { ask: String.raw`Explain why $\dfrac{x+4}{4}$ is not equal to $x+1$. Use the value $x=4$ and the words \emph{term} and \emph{factor}.`, ws: "3cm" },
    { ask: String.raw`Simplify $\dfrac{x^2-4}{x+2}$, then sketch its graph, marking the hole.`, grid: true },
    { ask: String.raw`Simplify $${Q14o.exp}$ and list all restrictions. (Factor the denominator by grouping.)`, ws: "4.4cm", challenge: true },
  ],
  answers: [
    String.raw`$x^2-x-12=(x-4)(x+3)$, so $${neTex(Q1.d)}$.`,
    String.raw`$\dfrac{3b^3}{4a^2}$, with $a\ne0,\ b\ne0$.`,
    String.raw`$\dfrac{(x-5)(x+4)}{(x-5)(x+5)}=${Q3s.tex}$, $${neTex(Q3o.d)}$.`,
    String.raw`$\dfrac{(3x-2)(x+1)}{(3x-2)(x-1)}=${Q4s.tex}$, $${neTex(Q4o.d)}$.`,
    String.raw`$\dfrac{-(x-2)}{(x-2)^2}=-\dfrac{1}{x-2}$, $x\ne2$.`,
    String.raw`$\dfrac{(x-1)(x+1)}{(x+1)(x+2)}\times\dfrac{x+2}{x-1}=1$, $${neTex(Q6a.d, Q6b.d)}$.`,
    String.raw`$\dfrac{(x-3)^2}{(x-2)(x+2)}\times\dfrac{x+2}{x-3}=${Q7s.tex}$, $${neTex(Q7a.d, Q7b.d, Q7b.n)}$.`,
    String.raw`$\dfrac{2x(x-2)(x+2)}{x(x-2)}=2(x+2)$, $${neTex(Q8o.d)}$.`,
    String.raw`$\dfrac{(x+4)(x-3)}{(x-3)(x+3)}=\dfrac{x+4}{x+3}$. Hole: $x=3$, $y=\tfrac76$, at $(3,\tfrac76)$. The factor $(x+3)$ survives, so the vertical asymptote is $x=-3$.`,
    String.raw`$\dfrac{(5x-3)(2x+1)}{2x+1}=5x-3$ g/cm$^3$, $x\ne-\tfrac12$. At $x=4$: $17$ g/cm$^3$.`,
    String.raw`At $x=4$: $\dfrac{16+4-6}{16-9}=2$ but $\dfrac{4-6}{-9}=\tfrac29$. The student cancelled $x^2$, which is a \emph{term} in each part. Correct: $\dfrac{(x-2)(x+3)}{(x-3)(x+3)}=\dfrac{x-2}{x-3}$, $x\ne\pm3$ (at $x=4$ this gives $2$ \checkmark).`,
    String.raw`At $x=4$: $\dfrac{8}{4}=2$ but $x+1=5$. The $4$ in the numerator is \emph{added} to $x$ (a term), so it cannot be cancelled; only a \emph{factor} that multiplies the whole numerator and the whole denominator can be cancelled.`,
    String.raw`$\dfrac{(x-2)(x+2)}{x+2}=x-2$, $x\ne-2$. The graph is the line $y=x-2$ with a hole at $(-2,-4)$.`,
    String.raw`Denominator: $x^2(x-1)-4(x-1)=(x-1)(x-2)(x+2)$. Numerator: $(x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2)$. Result $${Q14s.tex}$, $${neTex(Q14o.d)}$.`,
  ],
};

export const LEARN23 = [
  ["Cancel factors, not terms", r`A rational expression is simplified by factoring numerator and denominator and cancelling common \textbf{factors}. $\dfrac{x+6}{6}$ cannot be cancelled: the $6$ is a \emph{term}. $\dfrac{a-b}{b-a}=-1$.`],
  ["Restrictions", r`Every value that makes an \emph{original} denominator zero is excluded --- and stays excluded after cancelling. When dividing, also exclude values that make the divisor's numerator zero.`],
  ["Holes and asymptotes", r`A cancelled factor leaves a \textbf{hole}: substitute the restricted $x$ into the simplified expression for its $y$. A factor that stays in the denominator gives a vertical \textbf{asymptote}.`],
];

// ───────────────────────── question bank (60) ─────────────────────────
const one = R(["1"], ["1"]);
function withTex(rr, tex) { return { ...rr, tex }; }
const hollowPt = (x, y, label, extra = {}) => ({ x, y, label, color: "#1e293b", hollow: true, ...extra });

export function bank() {
  const q = [];
  // ── easy (20) ──
  q.push(MC("easy", "State the restriction on $\\dfrac{5}{x-4}$.", "$x\\ne4$", ["$x\\ne5$", "$x\\ne-4$", "$x\\ne0$"], "The denominator $x-4$ is zero when $x=4$."));
  q.push(MC("easy", "State the restrictions on $\\dfrac{x+1}{x^2-9}$.", "$x\\ne3$ and $x\\ne-3$", ["$x\\ne-1$", "$x\\ne9$", "$x\\ne3$ only"], "$x^2-9=(x-3)(x+3)$."));
  { const o = R(["3", "x", "5", "x"], ["5", "x"]); verify("B-3", (x) => (15 * x * x) / (5 * x), (x) => 3 * x);
    q.push(RC("easy", "Simplify $\\dfrac{15x^2}{5x}$.", R(["3", "x"], ["1"]), [R(["3"], ["x"]), R(["x"], ["3"]), R(["10", "x"], ["1"])], "Divide $15\\div5=3$ and $x^2\\div x=x$ (with $x\\ne0$).")); }
  { const o = R(["x+2"], ["x", "x+2"]), s = R(["1"], ["x"]); eqv("B-4", o, s);
    q.push(RC("easy", "Simplify $\\dfrac{x+2}{x^2+2x}$.", s, [R(["1"], ["x+2"]), R(["x"], ["1"]), R(["x+2"], ["x"])], "$x^2+2x=x(x+2)$; cancel $(x+2)$.")); }
  { const o = R(["x-4", "x+4"], ["x-4"]), s = R(["x+4"], ["1"]); eqv("B-5", o, s);
    q.push(RC("easy", "Simplify $\\dfrac{x^2-16}{x-4}$.", s, [R(["x-4"], ["1"]), R(["x+4"], ["x-4"]), R(["x+16"], ["1"])], "$x^2-16=(x-4)(x+4)$.")); }
  { const o = R(["6", "x-1"], ["2", "x-1"]), s = R(["3"], ["1"]); eqv("B-6", o, s);
    q.push(RC("easy", "Simplify $\\dfrac{6(x-1)}{2(x-1)}$.", s, [R(["4"], ["1"]), R(["3", "x-1"], ["1"]), R(["1"], ["3"])], "Cancel $2$ and $(x-1)$; restriction $x\\ne1$.")); }
  q.push(tf("easy", "$\\dfrac{x+3}{3}=x+1$.", false, "Only factors can be cancelled. At $x=3$: $\\dfrac63=2$ but $x+1=4$."));
  q.push(tf("easy", "After cancelling a common factor, the simplified expression is equivalent to the original for every $x$ that the original allows.", true));
  q.push(num("easy", "Evaluate the simplified form of $\\dfrac{x^2-1}{x-1}$ at $x=5$.", 6, 0, "$\\dfrac{(x-1)(x+1)}{x-1}=x+1=6$."));
  q.push(num("easy", "How many values of $x$ are restricted in $\\dfrac{x-2}{(x+1)(x-5)}$?", 2, 0, "$x=-1$ and $x=5$. The numerator $x-2$ creates no restriction."));
  q.push(fill("easy", "Simplify $\\dfrac{x^2-25}{x-5}$: ___", ["x+5", "5+x", "x + 5", "5 + x"], "Difference of squares, then cancel $(x-5)$."));
  q.push(fill("easy", "The expression $\\dfrac{7}{x+9}$ is undefined when $x=$ ___", ["-9", "−9"], "$x+9=0$."));
  q.push(ms("easy", "Which expressions are equivalent to $x+2$ for every allowed $x$?", ["$\\dfrac{x^2-4}{x-2}$", "$\\dfrac{x^2+4x+4}{x+2}$", "$\\dfrac{x^2+4}{x+2}$", "$\\dfrac{2x+4}{2}$"], [0, 1, 3], "$x^2+4$ does not factor, so nothing cancels."));
  q.push(ms("easy", "Which are restrictions on $\\dfrac{x+1}{(x-3)(x+4)}$?", ["$x\\ne3$", "$x\\ne-4$", "$x\\ne-1$", "$x\\ne0$"], [0, 1], "Only values that make the denominator zero."));
  q.push(match("easy", "Match each expression to its simplified form (for allowed $x$).", ["$\\dfrac{x^2-9}{x-3}$", "$\\dfrac{x^2-9}{x+3}$", "$\\dfrac{x^2-9}{3-x}$"], ["$x+3$", "$x-3$", "$-(x+3)$"], [0, 1, 2], "The last denominator is $-(x-3)$."));
  { const f = (x) => x + 2;
    q.push({ ...mc("easy", "The graph shows $y=\\dfrac{x^2-4}{x-2}$. What is special about $x=2$?", ["a hole at $(2,4)$", "a vertical asymptote at $x=2$", "an $x$-intercept at $(2,0)$", "the maximum point"], 0, "$\\dfrac{(x-2)(x+2)}{x-2}=x+2$ for $x\\ne2$: the line $y=x+2$ with a hole where $x=2$ ($y=4$)."),
      image: graphSvg({ fn: f, xmin: -4, xmax: 6, ymin: -2, ymax: 8, domain: [-4, 6], points: [hollowPt(2, 4, "hole (2, 4)", { dx: 8, dy: -10 })], title: "y = (x² − 4)/(x − 2)" }) }); }
  q.push(MC("easy", "Which factor can be cancelled from $\\dfrac{(x+3)(x-2)}{(x+3)(x+5)}$?", "$(x+3)$", ["$x$", "$3$", "$(x-2)$"], "Only a factor common to the whole numerator and the whole denominator."));
  q.push(order("easy", "Put the steps in order to simplify $\\dfrac{x^2-4}{x^2+2x}$.", ["Factor the numerator and denominator: $\\dfrac{(x-2)(x+2)}{x(x+2)}$", "State the restrictions: $x\\ne0,\\ -2$", "Cancel the common factor $(x+2)$", "Write the result: $\\dfrac{x-2}{x}$"]));
  { const o = R(["5", "x+3"], ["x+3"]); eqv("B-19", o, R(["5"], ["1"]));
    q.push(num("easy", "$\\dfrac{5x+15}{x+3}$ simplifies to a constant $k$. Find $k$.", 5, 0, "$5x+15=5(x+3)$.")); }
  q.push(tf("easy", "$\\dfrac{x^2-1}{x-1}$ still has the restriction $x\\ne1$ after it is simplified to $x+1$.", true, "The original expression is undefined at $x=1$."));

  // ── medium (20) ──
  { const o = R(["x-5", "x+5"], ["x+5", "x-2"]), s = R(["x-5"], ["x-2"]); assert.strictEqual(ptex(o.N), "x^2 - 25"); assert.strictEqual(ptex(o.D), "x^2 + 3x - 10"); eqv("B-21", o, s);
    q.push(RC("medium", "Simplify $\\dfrac{x^2-25}{x^2+3x-10}$.", s, [R(["x-5"], ["x+2"]), R(["x+5"], ["x-2"]), R(["x-5"], ["x+5"])], "$x^2+3x-10=(x+5)(x-2)$; cancel $(x+5)$.")); }
  { const o = R(["12", "x", "x-2"], ["4", "x-2", "x+2"]), s = R(["3", "x"], ["x+2"]); assert.strictEqual(ptex(o.N), "12x^2 - 24x"); assert.strictEqual(ptex(o.D), "4x^2 - 16"); eqv("B-22", o, s);
    q.push(RC("medium", "Simplify $\\dfrac{12x^2-24x}{4x^2-16}$.", s, [R(["3", "x"], ["x-2"]), R(["3"], ["x+2"]), R(["12", "x"], ["x+2"])], "Factor $12x(x-2)$ and $4(x-2)(x+2)$; cancel $4$ and $(x-2)$.")); }
  { const o = R(["3x-2", "x+4"], ["3x-2", "x-5"]), s = R(["x+4"], ["x-5"]); assert.strictEqual(ptex(o.N), "3x^2 + 10x - 8"); assert.strictEqual(ptex(o.D), "3x^2 - 17x + 10"); eqv("B-23", o, s);
    q.push(RC("medium", "Simplify $\\dfrac{3x^2+10x-8}{3x^2-17x+10}$.", s, [R(["x-4"], ["x+5"]), R(["x+4"], ["x+5"]), R(["3x+4"], ["3x-5"])], "$(3x-2)(x+4)$ over $(3x-2)(x-5)$.")); }
  { const o = R(["2", "x-3"], ["-1", "x-3"]); verify("B-24", (x) => (2 * x - 6) / (3 - x), () => -2);
    q.push(RC("medium", "Simplify $\\dfrac{2x-6}{3-x}$.", R(["-2"], ["1"]), [R(["2"], ["1"]), R(["-1"], ["2"]), R(["-1"], ["1"])], "$3-x=-(x-3)$, so $\\dfrac{2(x-3)}{-(x-3)}=-2$.")); }
  { const o = R(["x-7", "x+2"], ["x-2", "x+2"]), s = R(["x-7"], ["x-2"]); assert.strictEqual(ptex(o.N), "x^2 - 5x - 14"); eqv("B-25", o, s);
    q.push(RC("medium", "Simplify $\\dfrac{x^2-5x-14}{x^2-4}$.", s, [R(["x+7"], ["x+2"]), R(["x-7"], ["x+2"]), R(["x-2"], ["x-7"])], "$(x-7)(x+2)$ over $(x-2)(x+2)$.")); }
  { const a = R(["x-2", "x+2"], ["x+3"]), b = R(["x+3"], ["x-2"]); eqv("B-26", times(a, b), R(["x+2"], ["1"]));
    q.push(RC("medium", "Simplify $\\dfrac{x^2-4}{x+3}\\times\\dfrac{x+3}{x-2}$.", R(["x+2"], ["1"]), [R(["x-2"], ["1"]), R(["x+2"], ["x+3"]), R(["x^2-4"], ["x+3"])], "$(x-2)(x+2)$ and $(x+3)$ cancel across the fractions.")); }
  { const a = R(["x-1", "x+1"], ["x+2"]), b = R(["x-1"], ["x+2"]); eqv("B-27", divide(a, b), R(["x+1"], ["1"]));
    q.push(RC("medium", "Simplify $\\dfrac{x^2-1}{x+2}\\div\\dfrac{x-1}{x+2}$.", R(["x+1"], ["1"]), [R(["x-1"], ["1"]), R(["x+1"], ["x+2"]), R(["x+1", "x-1"], ["x+2"])], "Multiply by the reciprocal: $\\dfrac{(x-1)(x+1)}{x+2}\\times\\dfrac{x+2}{x-1}$.")); }
  q.push(MC("medium", "Which are ALL the restrictions on $\\dfrac{x-1}{x+2}\\div\\dfrac{x-3}{x+4}$?", "$x\\ne-2,\\ -4,\\ 3$", ["$x\\ne-2,\\ -4$", "$x\\ne-2,\\ 3$", "$x\\ne1,\\ 3$"], "Denominators give $-2$ and $-4$; dividing by $\\dfrac{x-3}{x+4}$ also excludes $x=3$."));
  { const o = R(["x-4", "x+3"], ["x+3"]); verify("B-29", (x) => (x * x - x - 12) / (x + 3), (x) => x - 4); q.push(num("medium", "Simplify $\\dfrac{x^2-x-12}{x+3}$ and evaluate it at $x=10$.", 6, 0, "$\\dfrac{(x-4)(x+3)}{x+3}=x-4$; at $x=10$ this is $6$.")); }
  { const o = R(["x+5", "x-3"], ["x-3"]); assert.strictEqual(ptex(o.N), "x^2 + 2x - 15"); verify("B-30", o.f, (x) => x + 5); q.push(num("medium", "The graph of $y=\\dfrac{x^2+2x-15}{x-3}$ has a hole. Find its $y$-coordinate.", 8, 0, "$y=x+5$ for $x\\ne3$, so the hole is at $(3,8)$.")); }
  { const o = R(["x", "x+3"], ["x-3", "x+3"]), s = R(["x"], ["x-3"]); assert.strictEqual(ptex(o.N), "x^2 + 3x"); eqv("B-31", o, s);
    q.push(fill("medium", "Simplify $\\dfrac{x^2+3x}{x^2-9}$: ___", ["x/(x-3)", "x/(-3+x)", "x/(x - 3)"], "$\\dfrac{x(x+3)}{(x-3)(x+3)}=\\dfrac{x}{x-3}$.")); }
  q.push(fill("medium", "The graph of $\\dfrac{x^2-2x-8}{x-4}$ has a hole at $x=$ ___", ["4"], "$\\dfrac{(x-4)(x+2)}{x-4}$: the cancelled factor is zero at $x=4$."));
  q.push(tf("medium", "$\\dfrac{x^2-49}{x+7}$ simplifies to $x-7$ with no restrictions.", false, "The restriction $x\\ne-7$ remains: the graph has a hole at $(-7,-14)$."));
  q.push(tf("medium", "A rational expression is undefined wherever its numerator equals $0$.", false, "A zero numerator just gives the value $0$; only a zero denominator is undefined."));
  { for (const [a, b] of [[(x) => (3 - x) / (x - 3), -1], [(x) => (x - 5) / (5 - x), -1], [(x) => (-x - 1) / (x + 1), -1]]) verify("B-35", a, () => b);
    q.push(ms("medium", "Which expressions equal $-1$ for every allowed $x$?", ["$\\dfrac{3-x}{x-3}$", "$\\dfrac{x-5}{5-x}$", "$\\dfrac{x+2}{x-2}$", "$\\dfrac{-x-1}{x+1}$"], [0, 1, 3], "Each numerator is the opposite of the denominator.")); }
  { const o = R(["x-1", "x+1"], ["x", "x-1"]), s = R(["x+1"], ["x"]); assert.strictEqual(ptex(o.N), "x^2 - 1"); assert.strictEqual(ptex(o.D), "x^2 - x"); eqv("B-36", o, s); assert.strictEqual(s.f(1), 2);
    q.push(ms("medium", "Consider $\\dfrac{x^2-1}{x^2-x}$. Which statements are true?", ["$x\\ne0$ and $x\\ne1$", "it simplifies to $\\dfrac{x+1}{x}$", "its graph has a hole at $(1,2)$", "its graph has a vertical asymptote at $x=1$"], [0, 1, 2], "$x=1$ cancels (hole); $x=0$ survives (asymptote).")); }
  { const p = [[R(["x-2", "x+2"], ["x-2", "x-2"]), R(["x+2"], ["x-2"])], [R(["x", "x+1"], ["x", "x-1"]), R(["x+1"], ["x-1"])], [R(["x", "x-2"], ["x-2", "x+2"]), R(["x"], ["x+2"])], [R(["x", "x+2"], ["x+2"]), R(["x"], ["1"])]];
    assert.strictEqual(ptex(p[0][0].N), "x^2 - 4"); assert.strictEqual(ptex(p[0][0].D), "x^2 - 4x + 4"); assert.strictEqual(ptex(p[1][0].N), "x^2 + x"); assert.strictEqual(ptex(p[1][0].D), "x^2 - x"); assert.strictEqual(ptex(p[2][0].N), "x^2 - 2x"); assert.strictEqual(ptex(p[3][0].N), "x^2 + 2x");
    p.forEach(([a, b], i) => eqv(`B-37-${i}`, a, b));
    q.push(match("medium", "Match each expression to its simplified form.", p.map(([a]) => T(a.exp)), p.map(([, b]) => T(b.tex)), [0, 1, 2, 3])); }
  { const o = R(["x-7", "x+3"], ["x-7"]); assert.strictEqual(ptex(o.N), "x^2 - 4x - 21"); verify("B-38", o.f, (x) => x + 3);
    q.push(num("medium", "A truck travels $(x^2-4x-21)$ km at an average speed of $(x-7)$ km/h. Its travel time in hours simplifies to $x+3$. Find the time when $x=12$.", 15, 0, "$\\dfrac{(x-7)(x+3)}{x-7}=x+3=15$ hours (and $x>7$).")); }
  { const f = (x) => x - 2;
    q.push({ ...mc("medium", "The graph has a hole at $(-2,-4)$ and is otherwise a straight line. Which expression has this graph?", ["$\\dfrac{x^2-4}{x+2}$", "$\\dfrac{1}{x+2}$", "$\\dfrac{x^2-4}{x-2}$", "$x-2$"], 0, "$\\dfrac{(x-2)(x+2)}{x+2}=x-2$ with a hole where $x=-2$. The expression $x-2$ alone has no hole."),
      image: graphSvg({ fn: f, xmin: -6, xmax: 5, ymin: -8, ymax: 4, points: [hollowPt(-2, -4, "hole (-2, -4)", { dx: 8, dy: -10 })], title: "A straight line with a hole" }) }); }
  q.push(order("medium", "Put the steps in order to simplify $\\dfrac{x^2-9}{x^2+4x}\\times\\dfrac{x+4}{x-3}$.", ["Factor every numerator and denominator", "List the restrictions from every denominator", "Cancel common factors across the two fractions", "Write the simplified product and keep the restrictions"]));

  // ── hard (20) ──
  { const o = R(["x-3", "x+3", "x^2+9"], ["x-3", "x^2+9"]), s = R(["x+3"], ["1"]); assert.strictEqual(ptex(o.N), "x^4 - 81"); assert.strictEqual(ptex(o.D), "x^3 - 3x^2 + 9x - 27"); eqv("B-41", o, s);
    q.push(RC("hard", "Simplify $\\dfrac{x^4-81}{x^3-3x^2+9x-27}$.", s, [R(["x-3"], ["1"]), R(["x+3", "x^2+9"], ["1"]), R(["x^2+9"], ["x-3"])], "Denominator by grouping: $x^2(x-3)+9(x-3)=(x-3)(x^2+9)$. Numerator: $(x^2-9)(x^2+9)$.")); }
  { const o = R(["x+1", "x-2", "x+2"], ["x+1", "x+2"]), s = R(["x-2"], ["1"]); assert.strictEqual(ptex(o.N), "x^3 + x^2 - 4x - 4"); assert.strictEqual(ptex(o.D), "x^2 + 3x + 2"); eqv("B-42", o, s);
    q.push(RC("hard", "Simplify $\\dfrac{x^3+x^2-4x-4}{x^2+3x+2}$.", s, [R(["x+2"], ["1"]), R(["x-2", "x+1"], ["1"]), R(["x-2"], ["x+2"])], "Numerator by grouping: $x^2(x+1)-4(x+1)=(x+1)(x-2)(x+2)$.")); }
  { const d1 = R(["1"], ["x-2", "x-3"]), d2 = R(["1"], ["x+4", "x-3"]); assert.strictEqual(ptex(pmulAll(P("x-2"), P("x-3"))), "x^2 - 5x + 6"); assert.strictEqual(ptex(pmulAll(P("x+4"), P("x-3"))), "x^2 + x - 12");
    const sum = restrVals(["x-2", "x-3"], ["x+4", "x-3"]).reduce((a, b) => a + b, 0); assert.strictEqual(sum, 1);
    q.push(num("hard", "Find the sum of all the restricted values of $x$ in $\\dfrac{x-1}{(x^2-5x+6)(x^2+x-12)}$.", 1, 0, "Zeros of the denominator: $x=2,\\ 3$ and $x=-4,\\ 3$. Distinct values $2,3,-4$ sum to $1$ (count $3$ only once).")); }
  { const o = R(["x+3", "x-2"], ["x-2", "x+2"]), s = R(["x+3"], ["x+2"]); assert.strictEqual(ptex(o.N), "x^2 + x - 6"); assert.strictEqual(ptex(o.D), "x^2 - 4"); eqv("B-44", o, s);
    q.push(num("hard", "The graph of $y=\\dfrac{x^2+x-6}{x^2-4}$ has a hole. Find the $y$-coordinate of the hole.", 1.25, 0.001, `The cancelled factor is $(x-2)$, so the hole is at $x=2$. $y=\\dfrac{x+3}{x+2}=\\dfrac54$.`)); }
  { const k = 3; assert.strictEqual(ptex(pmulAll(P("x+5"), P("x-2"))), "x^2 + 3x - 10");
    q.push(num("hard", "For what value of $k$ does $\\dfrac{x^2+kx-10}{x-2}$ simplify to a polynomial (no denominator left)?", k, 0, "$x-2$ must be a factor of the numerator, so $4+2k-10=0$ and $k=3$: $\\dfrac{(x+5)(x-2)}{x-2}=x+5$.")); }
  { assert.strictEqual(ptex(pmulAll(P("x+1"), P("x-3"))), "x^2 - 2x - 3"); eqv("B-46", R(["x+1", "x-3"], ["x-3", "x+2"]), R(["x+1"], ["x+2"])); assert.strictEqual(ptex(pmulAll(P("x-3"), P("x+2"))), "x^2 - x - 6");
    q.push(num("hard", "$\\dfrac{x^2+ax+b}{x^2-x-6}$ simplifies to $\\dfrac{x+1}{x+2}$. Find $a+b$.", -5, 0, "$x^2-x-6=(x-3)(x+2)$, so the numerator must be $(x+1)(x-3)=x^2-2x-3$: $a=-2,\\ b=-3$.")); }
  { const o = R(["2x+3", "x-2"], ["-1", "x-2", "x+2"]); assert.strictEqual(ptex(o.N), "2x^2 - x - 6"); assert.strictEqual(ptex(o.D), "-x^2 + 4");
    const s = withTex(R(["-1", "2x+3"], ["x+2"]), "-\\dfrac{2x+3}{x+2}"); eqv("B-47", o, s);
    q.push(RC("hard", "Simplify $\\dfrac{2x^2-x-6}{4-x^2}$.", s, [R(["2x+3"], ["x+2"]), R(["2x+3"], ["x-2"]), withTex(R(["-1", "2x-3"], ["x+2"]), "-\\dfrac{2x-3}{x+2}")], "$4-x^2=-(x-2)(x+2)$ and $2x^2-x-6=(2x+3)(x-2)$; the factors $(x-2)$ cancel, leaving the minus sign.")); }
  { const a = R(["x-2", "x+2"], ["x-3", "x+3"]), b = R(["x+2"], ["x-3"]), s = R(["x-2"], ["x+3"]); assert.strictEqual(ptex(a.D), "x^2 - 9"); eqv("B-48", divide(a, b), s);
    q.push(RC("hard", "Simplify $\\dfrac{x^2-4}{x^2-9}\\div\\dfrac{x+2}{x-3}$.", s, [R(["x-2"], ["x-3"]), R(["x+2"], ["x+3"]), R(["x-2"], ["x+3", "x-3"])], "Multiply by $\\dfrac{x-3}{x+2}$: $\\dfrac{(x-2)(x+2)}{(x-3)(x+3)}\\times\\dfrac{x-3}{x+2}$.")); }
  { const o = R(["x-2", "x-3"], ["x-2", "x+1"]), s = R(["x-3"], ["x+1"]); assert.strictEqual(ptex(o.N), "x^2 - 5x + 6"); assert.strictEqual(ptex(o.D), "x^2 - x - 2"); eqv("B-49", o, s);
    q.push(num("hard", "The graph of $y=\\dfrac{x^2-5x+6}{x^2-x-2}$ has a hole. Find its $y$-coordinate, correct to $3$ decimal places.", -0.333, 0.001, "The hole is at $x=2$; $y=\\dfrac{x-3}{x+1}=-\\dfrac13$.")); }
  { const o = R(["x-3", "x+2"], ["x-3", "x-1"]), s = R(["x+2"], ["x-1"]); assert.strictEqual(ptex(o.N), "x^2 - x - 6"); assert.strictEqual(ptex(o.D), "x^2 - 4x + 3"); eqv("B-50", o, s);
    q.push(ms("hard", "For $f(x)=\\dfrac{x^2-x-6}{x^2-4x+3}$, which statements are true?", ["there is a hole at $x=3$", "there is a vertical asymptote at $x=1$", "there is an $x$-intercept at $x=-2$", "there is an $x$-intercept at $x=3$"], [0, 1, 2], "$f(x)=\\dfrac{x+2}{x-1}$ for $x\\ne3$. At $x=3$ the factor cancels (hole, not an intercept).")); }
  q.push(tf("hard", "The graphs of $y=\\dfrac{x^2-4}{x-2}$ and $y=x+2$ are exactly the same.", false, "The first has a hole at $(2,4)$; the line is complete."));
  q.push(tf("hard", "If two expressions give the same value at $x=0,\\,1,\\,2,\\,3$, they must be equivalent.", false, "Counterexample: $x(x-1)(x-2)(x-3)$ and $0$ agree at those four values but are different expressions."));
  { V2("B-53", (x, y) => (x * x - y * y) / (x * x + 2 * x * y + y * y), (x, y) => (x - y) / (x + y));
    q.push(fill("hard", "Simplify $\\dfrac{x^2-y^2}{x^2+2xy+y^2}$: ___", ["(x-y)/(x+y)", "(x - y)/(x + y)", "(x−y)/(x+y)"], "$\\dfrac{(x-y)(x+y)}{(x+y)^2}$.")); }
  { verify("B-54", (a) => (a ** 3 - 1) / (a - 1), (a) => a * a + a + 1); q.push(num("hard", "Using $a^3-b^3=(a-b)(a^2+ab+b^2)$, simplify $\\dfrac{a^3-b^3}{a-b}$ and evaluate it at $a=4,\\ b=1$.", 21, 0, "$a^2+ab+b^2=16+4+1=21$ (and $\\dfrac{64-1}{3}=21$ ✓).")); }
  { const f = (x) => (x + 2) / (x - 1);
    const wrong = (tex) => tex;
    q.push({ ...mc("hard", "The graph shows a curve with a vertical asymptote at $x=1$ and a hole at $(3,\\,2.5)$. Which expression matches?", ["$\\dfrac{x^2-x-6}{x^2-4x+3}$", "$\\dfrac{x+2}{x-1}$", "$\\dfrac{x^2-x-6}{x-1}$", "$\\dfrac{x+2}{x-3}$"], 0, "$\\dfrac{(x-3)(x+2)}{(x-3)(x-1)}=\\dfrac{x+2}{x-1}$ with a hole at $x=3$, $y=\\dfrac{5}{2}$. $\\dfrac{x+2}{x-1}$ alone has no hole."),
      image: graphSvg({ fn: f, domain: [-5, 0.93], extraCurves: [{ fn: f, domain: [1.07, 7], color: "#2563a0" }], xmin: -5, xmax: 7, ymin: -6, ymax: 8, points: [hollowPt(3, 2.5, "hole (3, 2.5)", { dx: 8, dy: -10 })], title: "A curve with a hole" }) }); }
  { const a = R(["x-1", "x+1"], ["x-2", "x+2"]), b = R(["x+1"], ["x+2"]), c = R(["x-2"], ["x-1"]); eqv("B-56", times(divide(a, b), c), { f: () => 1 });
    assert.strictEqual(restrVals(["x-2", "x+2"], ["x+2"], ["x-1"], ["x+1"]).length, 4);
    q.push(num("hard", "$\\dfrac{x^2-1}{x^2-4}\\div\\dfrac{x+1}{x+2}\\times\\dfrac{x-2}{x-1}$ simplifies to $1$. For how many real values of $x$ is the <em>original</em> expression undefined?", 4, 0, "Undefined at $x=\\pm2$ (first denominator), $x=-1$ (divisor numerator, and $-2$ again), and $x=1$ (last denominator): $\\{-2,\\,-1,\\,1,\\,2\\}$, so $4$ values.")); }
  q.push(order("hard", "Put the steps in order to simplify $\\dfrac{x^2-4}{x^2+x}\\div\\dfrac{x-2}{x^2-1}$.", ["Factor every numerator and denominator", "List restrictions from both denominators and from the divisor's numerator", "Replace the division by multiplication by the reciprocal", "Cancel common factors and write the result with its restrictions"]));
  { const a = R(["x-2"], ["-1", "x-2"]), b = R(["x-2", "x+2"], ["x-2", "x-2"]), c = R(["1"], ["x+2"]), d = R(["-1", "x"], ["1"]);
    assert.strictEqual(ptex(R(["x+2", "x+2"], ["1"]).N), "x^2 + 4x + 4"); assert.strictEqual(ptex(R(["x"], ["x-1"]).N), "x");
    verify("B-58a", (x) => (x - 2) / (2 - x), () => -1); eqv("B-58b", b, R(["x+2"], ["x-2"])); verify("B-58c", (x) => (x + 2) / (x * x + 4 * x + 4), (x) => 1 / (x + 2)); verify("B-58d", (x) => (x * x - x) / (1 - x), (x) => -x);
    q.push(match("hard", "Match each expression to its simplified form — watch the signs and the squares.", ["$\\dfrac{x-2}{2-x}$", "$\\dfrac{x^2-4}{(x-2)^2}$", "$\\dfrac{x+2}{x^2+4x+4}$", "$\\dfrac{x^2-x}{1-x}$"], ["$-1$", "$\\dfrac{x+2}{x-2}$", "$\\dfrac{1}{x+2}$", "$-x$"], [0, 1, 2, 3])); }
  q.push(MC("hard", "Which values of $x$ are excluded from $\\dfrac{x+1}{x-2}\\div\\dfrac{x-5}{x+3}$?", "$x\\ne2,\\ -3,\\ 5$", ["$x\\ne2,\\ -3$", "$x\\ne2,\\ 5$", "$x\\ne-3,\\ 5$"], "Denominators: $x=2$ and $x=-3$. The divisor's numerator $x-5$ cannot be $0$ either."));
  { verify("B-60", (x) => (x ** 3 + 8) / (x + 2), (x) => x * x - 2 * x + 4); q.push(num("hard", "Using $a^3+b^3=(a+b)(a^2-ab+b^2)$, simplify $\\dfrac{x^3+8}{x+2}$ and evaluate at $x=3$.", 7, 0, "$x^3+8=(x+2)(x^2-2x+4)$; at $x=3$: $9-6+4=7$ (and $\\dfrac{35}{5}=7$ ✓).")); }
  const c = { easy: 0, medium: 0, hard: 0 }; for (const x of q) c[x.difficulty]++;
  assert.ok(q.length === 60 && c.easy === 20 && c.medium === 20 && c.hard === 20, `counts ${q.length} ${JSON.stringify(c)}`);
  return q;
}
function V2(name, f, g) { for (const y of [-2, 1.3, 3]) verify(`${name} y=${y}`, (x) => f(x, y), (x) => g(x, y)); }

// ───────────────────────── assignment ─────────────────────────
const A1 = R(["x+4"], ["x-3", "x-4"]); assert.strictEqual(ptex(A1.D), "x^2 - 7x + 12");
const A2o = R(["2", "x-3", "x+3"], ["x+3", "x-2"]), A2s = R(["2", "x-3"], ["x-2"]); assert.strictEqual(ptex(A2o.N), "2x^2 - 18"); assert.strictEqual(ptex(A2o.D), "x^2 + x - 6"); eqv("A-K2", A2o, A2s);
const A3o = R(["x-5", "x+1"], ["x-1", "x+1"]), A3s = R(["x-5"], ["x-1"]); assert.strictEqual(ptex(A3o.N), "x^2 - 4x - 5"); assert.strictEqual(ptex(A3o.D), "x^2 - 1"); eqv("A-K3", A3o, A3s);
const T1a = R(["x-4", "x+2"], ["x", "x+3"]), T1b = R(["x+3"], ["x-4", "x+4"]), T1s = R(["x+2"], ["x", "x+4"]); assert.strictEqual(ptex(T1a.N), "x^2 - 2x - 8"); assert.strictEqual(ptex(T1a.D), "x^2 + 3x"); assert.strictEqual(ptex(T1b.D), "x^2 - 16"); eqv("A-T1", times(T1a, T1b), T1s);
assert.strictEqual(ptex(pmulAll(P("x+4"), P("x-3"))), "x^2 + x - 12");
const Aa2 = R(["3x-1", "2x+3"], ["3x-1"]); assert.strictEqual(ptex(Aa2.N), "6x^2 + 7x - 3"); eqv("A-A2", Aa2, R(["2x+3"], ["1"]));
verify("A-A3", (x) => ((x + 5) ** 2 - (x - 2) ** 2) / (x + 5) ** 2, (x) => (7 * (2 * x + 3)) / (x + 5) ** 2);
verify("A-A1", (x) => (x * x - 2 * x - 24) / (x - 6), (x) => x + 4); assert.strictEqual(ptex(pmulAll(P("x-6"), P("x+4"))), "x^2 - 2x - 24");

export const ASSIGNMENT = (() => {
  let n = 0;
  const sec = (arr) => arr.map((t) => `${++n}. ${t}`);
  const description = [
    "Knowledge & Understanding",
    ...sec([
      "State the restrictions on $\\dfrac{x+4}{x^2-7x+12}$.",
      "Simplify $\\dfrac{2x^2-18}{x^2+x-6}$ and state the restrictions.",
      "Simplify $\\dfrac{x^2-4x-5}{x^2-1}$ and state the restrictions.",
    ]),
    "Thinking",
    ...sec([
      "Simplify $\\dfrac{x^2-2x-8}{x^2+3x}\\times\\dfrac{x+3}{x^2-16}$ and state all the restrictions.",
      "Find the value of $k$ for which $\\dfrac{x^2+kx-12}{x-3}$ simplifies to a polynomial, and write that polynomial.",
    ]),
    "Communication",
    ...sec([
      "A student simplifies $\\dfrac{x^2+5}{x+5}$ to $x$ by cancelling the 5s and the $x$s. Test the claim at $x=1$, explain exactly what is wrong using the words <em>term</em> and <em>factor</em>, and say what the correct simplified form is.",
      "Compare $\\dfrac{x^2-36}{x-6}$ and $\\dfrac{1}{x-6}$. Both are undefined at $x=6$. Explain how their graphs differ (hole versus asymptote), and say how you can tell from the algebra which one occurs.",
    ]),
    "Application",
    ...sec([
      "A courier drives $(x^2-2x-24)$ kilometres at an average speed of $(x-6)$ kilometres per hour. (a) Write the time as a simplified expression and state the restriction. (b) What must be true about $x$ for the speed to make sense? (c) Find the time when $x=10$ and check it with the original fraction.",
      "A block of metal has mass $(6x^2+7x-3)$ grams and volume $(3x-1)$ cubic centimetres. (a) Write the density as a simplified expression with its restriction. (b) Find the density when $x=2$ and verify it with the original numbers.",
      "A large square has side $(x+5)$ cm. A smaller square of side $(x-2)$ cm is removed from one corner. (a) Show that the area remaining divided by the area of the large square equals $\\dfrac{7(2x+3)}{(x+5)^2}$. (b) State the restrictions on $x$ and any further restriction needed for the shape to exist. (c) Evaluate the ratio for $x=4$ as a fraction.",
    ]),
  ].join("\n");
  return { title: `Assignment ${CODE} — ${TITLE}`, description };
})();

