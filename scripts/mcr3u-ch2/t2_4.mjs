// MCR3U 2.4 — Adding & Subtracting Rational Expressions (rebuilt, deep version).
// Exports: lessonBlocks(), W24 (worksheet), LEARN24, bank(), ASSIGNMENT.
// Every sum/difference is registered with verify(): the combined fraction must equal the sum of the original terms at
// every x where all are defined. Answers are written with an EXPANDED numerator over a FACTORED denominator (the usual
// textbook form), built from the engine, and distractors are asserted to be numerically different.
import assert from "node:assert";
import {
  html, gframe, ex, pr, qa, watchOut, EX, PR,
  P, pmulAll, ppow, pscale, padd, psub, peval, ptex, prodTex, gx, verify,
  eqTable, mistake, steps, callout, challenge, gview, graphSvg,
} from "./lib2.mjs";
import { pgf, eqTableTex } from "./lib2tex.mjs";
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

export const CODE = "2.4";
export const TITLE = "Adding & Subtracting Rational Expressions";
export const FULL_TITLE = `${CODE} ${TITLE}`;
const M = (s) => `\\(${s}\\)`;
const T = (s) => `$${s}$`;
const r = String.raw;

const grp = (ps) => { const g = []; for (const p of ps) { const q = g.find((z) => z[0].join() === p.join()); if (q) q[1]++; else g.push([p, 1]); } return g.map(([p, e]) => (e === 1 ? p : [p, e])); };
const ft = (ps) => prodTex(1, grp(ps));
const dfr = (n, d) => `\\dfrac{${n}}{${d}}`;
const toP = (f) => (typeof f === "string" ? P(f) : f);
/** Fraction with FACTORED numerator and denominator: R(["x+3"],["x-2","x+1"]). */
function R(nf, df) {
  const n = nf.map(toP), d = df.map(toP), N = pmulAll(...n), D = pmulAll(...d);
  const isOne = d.every((p) => p.length === 1 && p[0] === 1);
  return { n, d, N, D, f: (x) => peval(N, x) / peval(D, x), tex: isOne ? ft(n) : dfr(ft(n), ft(d)), exp: dfr(ptex(N), ptex(D)) };
}
/** Fraction with an EXPANDED numerator string over a FACTORED denominator: RE("7x+13", ["x+3","x-1"]). */
function RE(nStr, df) {
  const N = P(nStr), d = df.map(toP), D = pmulAll(...d);
  return { N, D, d, f: (x) => peval(N, x) / peval(D, x), tex: dfr(ptex(N), ft(d)), exp: dfr(ptex(N), ptex(D)) };
}
/** Raw function-valued term, e.g. ["1/x"]. */
const F = (f, tex) => ({ f, tex });
const plus = (...rs) => ({ f: (x) => rs.reduce((a, q) => a + q.f(x), 0) });
const minus = (a, b) => ({ f: (x) => a.f(x) - b.f(x) });
const eqv = (name, a, b) => verify(name, a.f, b.f);
const isNum = (v) => Number.isFinite(v);
let _pos = 0;
function RC(diff, prompt, correct, wrongs, fb = "") {
  const all = [correct, ...wrongs], texs = all.map((a) => a.tex);
  assert.strictEqual(new Set(texs).size, texs.length, `duplicate choices in: ${prompt}`);
  for (const w of wrongs) { let differs = false; for (const x of [-3.3, -1.7, 0.6, 2.4, 4.9, 7.1]) { const u = correct.f(x), v = w.f(x); if (isNum(u) && isNum(v) && Math.abs(u - v) > 1e-9) differs = true; } assert.ok(differs, `distractor ${w.tex} is equivalent to the correct answer! (${prompt})`); }
  const pos = _pos++ % all.length, ch = wrongs.map((w) => T(w.tex)); ch.splice(pos, 0, T(correct.tex));
  return mc(diff, prompt, ch, pos, fb);
}
function MC(diff, prompt, correct, bad, fb = "") {
  assert.strictEqual(new Set([correct, ...bad]).size, bad.length + 1, `duplicate choices in: ${prompt}`);
  const pos = _pos++ % (bad.length + 1), ch = [...bad]; ch.splice(pos, 0, correct);
  return mc(diff, prompt, ch, pos, fb);
}
function V2(name, f, g) { for (const y of [-2, 1.3, 3]) verify(`${name} y=${y}`, (x) => f(x, y), (x) => g(x, y)); }
const hollowPt = (x, y, label, extra = {}) => ({ x, y, label, color: "#1e293b", hollow: true, ...extra });

// ───────────────────────── lesson data ─────────────────────────
const t = (nStr, dStr) => R([nStr], [dStr]);
// E1: (5x+1)/(x-2) - (2x-7)/(x-2) = (3x+8)/(x-2)
const E1 = RE("3x+8", ["x-2"]); eqv("L-E1", minus(t("5x+1", "x-2"), t("2x-7", "x-2")), E1); assert.strictEqual(ptex(psub(P("5x+1"), P("2x-7"))), "3x + 8");
// E2: 3/(4x) + 5/(6x^2) = (9x+10)/(12x^2)
const E2 = RE("9x+10", ["12", "x", "x"]); verify("L-E2", (x) => 3 / (4 * x) + 5 / (6 * x * x), E2.f);
// E3: 2/(x+3) + 5/(x-1) = (7x+13)/((x+3)(x-1))
const E3 = RE("7x+13", ["x+3", "x-1"]); verify("L-E3", (x) => 2 / (x + 3) + 5 / (x - 1), E3.f);
// E4: 4/(x-2) - 3/(x+5) = (x+26)/((x-2)(x+5))
const E4 = RE("x+26", ["x-2", "x+5"]); verify("L-E4", (x) => 4 / (x - 2) - 3 / (x + 5), E4.f);
// E5: 5/(x^2-9) - 2/(x^2+x-12) = (3x+14)/((x-3)(x+3)(x+4))
const E5 = RE("3x+14", ["x-3", "x+3", "x+4"]); verify("L-E5", (x) => 5 / (x * x - 9) - 2 / (x * x + x - 12), E5.f);
assert.strictEqual(ptex(pmulAll(P("x-3"), P("x+3"))), "x^2 - 9"); assert.strictEqual(ptex(pmulAll(P("x+4"), P("x-3"))), "x^2 + x - 12");
// E6: 3/(x-4) + 5/(4-x) = -2/(x-4)
verify("L-E6", (x) => 3 / (x - 4) + 5 / (4 - x), (x) => -2 / (x - 4));
// E7: x/(x-2) - 4/(x^2-2x) = (x+2)/x
verify("L-E7", (x) => x / (x - 2) - 4 / (x * x - 2 * x), (x) => (x + 2) / x); assert.strictEqual(ptex(psub(pmulAll(P("x"), P("x")), [4])), "x^2 - 4");
// E8: 1/x + 1/(x+1) + 1/(x(x+1)) = 2/x
verify("L-E8", (x) => 1 / x + 1 / (x + 1) + 1 / (x * (x + 1)), (x) => 2 / x);
// E9: (1 + 1/x)/(1 - 1/x^2) = x/(x-1)
verify("L-E9", (x) => (1 + 1 / x) / (1 - 1 / (x * x)), (x) => x / (x - 1));
// E10: work rate 1/x + 1/(x+3) = (2x+3)/(x(x+3)); together time x(x+3)/(2x+3); x=6 -> 3.6
verify("L-E10", (x) => 1 / (1 / x + 1 / (x + 3)), (x) => (x * (x + 3)) / (2 * x + 3)); assert.ok(Math.abs((6 * 9) / 15 - 3.6) < 1e-12);
// E11: parallel resistors R1=x, R2=2x: 1/R = 3/(2x), R = 2x/3
verify("L-E11", (x) => 1 / (1 / x + 1 / (2 * x)), (x) => (2 * x) / 3);
// practice
const P1 = RE("4x-8", ["x+4"]); eqv("L-P1", minus(t("7x-2", "x+4"), t("3x+6", "x+4")), P1);
const P2 = RE("15x-4", ["18", "x", "x"]); verify("L-P2", (x) => 5 / (6 * x) - 2 / (9 * x * x), P2.f);
const P3 = RE("7x-14", ["x-5", "x+2"]); verify("L-P3", (x) => 3 / (x - 5) + 4 / (x + 2), P3.f);
const P4 = RE("5x+7", ["x-1", "x+1", "x+2"]); verify("L-P4", (x) => 2 / (x * x - 1) + 3 / (x * x + x - 2), P4.f);
assert.strictEqual(ptex(pmulAll(P("x+2"), P("x-1"))), "x^2 + x - 2");
verify("L-P5", (x) => x / (x + 2) - 4 / (x * x + 2 * x), (x) => (x - 2) / x);
verify("L-P6", (x) => 4 / (x - 3) + 6 / (3 - x), (x) => -2 / (x - 3));
verify("L-P7", (x) => (1 / x - 1 / 3) / (x - 3), (x) => -1 / (3 * x));
verify("L-P8", (x) => 1 / (1 / x + 1 / (x - 2)), (x) => (x * (x - 2)) / (2 * x - 2)); assert.ok(Math.abs((6 * 4) / 10 - 2.4) < 1e-12);
for (const n of [1, 2, 3]) verify(`L-CH${n}`, (x) => 1 / x - 1 / (x + 1), (x) => 1 / (x * (x + 1)));
assert.ok(Math.abs([...Array(9)].map((_, i) => 1 / ((i + 1) * (i + 2))).reduce((a, b) => a + b, 0) - 0.9) < 1e-12);

const sumGraph = gframe(["y = 1/x + 1/(x+1) + 1/(x*(x+1))", "y = 2/x"], { title: "The three-term sum and 2/x are ONE curve", labels: [{ x: 0, y: 0, t: "asymptotes at x = 0 and x = −1", c: "#be123c", point: false }], ...gview(-5, 5, -8, 8) });

const lessonHtml = r`<div class="lecture-box">
  <h1>➕ Adding &amp; Subtracting Rational Expressions</h1>
  <p><strong>Overview.</strong> You can only add fractions that count the same-sized pieces: \(\tfrac13+\tfrac16\) needs a <strong>common denominator</strong>. Algebraic fractions work the same way — the only new ingredient is that the denominators contain variables, so we find the <strong>lowest common denominator (LCD)</strong> by <em>factoring</em>. Afterwards the result is simplified exactly as in 2.3, and the restrictions from <em>every</em> original denominator are kept.</p>
  ${callout("Same recipe, bigger numbers.", "Numbers: \\(\\dfrac{1}{6}+\\dfrac{1}{10}\\). Factor the denominators: \\(6=2\\cdot3\\) and \\(10=2\\cdot5\\). The LCD uses each factor at its <em>highest power</em>: \\(2\\cdot3\\cdot5=30\\). Algebra: \\(\\dfrac{1}{x^2-3x}+\\dfrac{1}{x^2-9}\\). \\(x(x-3)\\) and \\((x-3)(x+3)\\) → LCD \\(=x(x-3)(x+3)\\). The factor \\((x-3)\\) is counted <em>once</em>.", "green")}

  <h2>📌 Finding the LCD</h2>
  <ol>
    <li><strong>Factor</strong> every denominator completely.</li>
    <li>The LCD contains <strong>every different factor</strong>, each at the <strong>highest power</strong> it has in any one denominator (numbers too: the LCD of 4 and 6 is 12).</li>
  </ol>
  ${steps("How to add or subtract rational expressions", [
    "<strong>Factor</strong> the denominators and write the <strong>restrictions</strong>.",
    "Find the <strong>LCD</strong>.",
    "<strong>Build equivalent fractions:</strong> multiply the top <em>and</em> bottom of each fraction by the factors it is missing.",
    "<strong>Combine the numerators over the LCD.</strong> When subtracting, put the whole second numerator in brackets so the minus sign changes <em>every</em> term.",
    "<strong>Expand and collect</strong> the numerator, then <strong>factor it and cancel</strong> anything common with the denominator.",
  ])}

  <h2>🔵 Examples</h2>
  ${ex("Example 1: Same denominator", `Simplify ${M("\\dfrac{5x+1}{x-2}-\\dfrac{2x-7}{x-2}")}.`, [
    `The denominators already match, so keep one and combine the numerators — with brackets: \\(\\dfrac{(5x+1)-(2x-7)}{x-2}\\).`,
    `The minus changes both signs in the bracket: \\(5x+1-2x+7=3x+8\\).`,
  ], `${M(E1.tex)}, \\(x\\ne2\\). Forgetting the bracket would give \\(3x-6\\) — a very common error.`)}
  ${ex("Example 2: Monomial denominators", `Simplify ${M("\\dfrac{3}{4x}+\\dfrac{5}{6x^2}")}.`, [
    `\\(4x=2^2\\cdot x\\) and \\(6x^2=2\\cdot3\\cdot x^2\\). LCD \\(=2^2\\cdot3\\cdot x^2=12x^2\\).`,
    `Build: \\(\\dfrac{3}{4x}\\cdot\\dfrac{3x}{3x}=\\dfrac{9x}{12x^2}\\) and \\(\\dfrac{5}{6x^2}\\cdot\\dfrac{2}{2}=\\dfrac{10}{12x^2}\\). Add.`,
  ], `${M(E2.tex)}, \\(x\\ne0\\).`)}
  ${ex("Example 3: Two different binomials", `Simplify ${M("\\dfrac{2}{x+3}+\\dfrac{5}{x-1}")}.`, [
    `Nothing is common, so the LCD is the product \\((x+3)(x-1)\\). Each fraction is missing the other's factor.`,
    `\\(\\dfrac{2(x-1)+5(x+3)}{(x+3)(x-1)}=\\dfrac{2x-2+5x+15}{(x+3)(x-1)}\\).`,
  ], `${M(E3.tex)}, \\(x\\ne-3,\\ 1\\). The numerator \\(7x+13\\) does not factor with either bracket, so we stop.`)}
  ${ex("Example 4: Subtracting — watch the sign", `Simplify ${M("\\dfrac{4}{x-2}-\\dfrac{3}{x+5}")}.`, [
    `LCD \\((x-2)(x+5)\\). Numerator: \\(4(x+5)-3(x-2)\\) — the bracket after the minus is essential.`,
    `\\(4x+20-3x+6=x+26\\). (The \\(-3\\cdot-2\\) gives \\(+6\\).)`,
  ], `${M(E4.tex)}, \\(x\\ne2,\\ -5\\).`)}
  ${ex("Example 5: Factor the denominators first", `Simplify ${M("\\dfrac{5}{x^2-9}-\\dfrac{2}{x^2+x-12}")}.`, [
    `\\(x^2-9=(x-3)(x+3)\\) and \\(x^2+x-12=(x+4)(x-3)\\). Restrictions: \\(x\\ne3,-3,-4\\).`,
    `LCD \\(=(x-3)(x+3)(x+4)\\) — the shared factor \\((x-3)\\) appears <strong>once</strong>. The first fraction is missing \\((x+4)\\), the second \\((x+3)\\).`,
    `Numerator: \\(5(x+4)-2(x+3)=5x+20-2x-6=3x+14\\).`,
  ], `${M(E5.tex)}. Multiplying the two denominators instead would give a much bigger (but still correct) fraction — the LCD keeps it small.`)}
  ${ex("Example 6: Opposite denominators", `Simplify ${M("\\dfrac{3}{x-4}+\\dfrac{5}{4-x}")}.`, [
    `\\(4-x=-(x-4)\\), so \\(\\dfrac{5}{4-x}=-\\dfrac{5}{x-4}\\).`,
    `Now the denominators match: \\(\\dfrac{3-5}{x-4}\\).`,
  ], `${M("\\dfrac{-2}{x-4}")}, \\(x\\ne4\\). Recognising opposites avoids a long common-denominator calculation.`)}
  ${ex("Example 7: Add, then simplify", `Simplify ${M("\\dfrac{x}{x-2}-\\dfrac{4}{x^2-2x}")}.`, [
    `\\(x^2-2x=x(x-2)\\), so the LCD is \\(x(x-2)\\) and the first fraction is missing \\(x\\).`,
    `\\(\\dfrac{x\\cdot x-4}{x(x-2)}=\\dfrac{x^2-4}{x(x-2)}=\\dfrac{(x-2)(x+2)}{x(x-2)}\\). Cancel \\((x-2)\\).`,
  ], `${M("\\dfrac{x+2}{x}")}, \\(x\\ne0,\\ 2\\). Always <em>factor the final numerator</em> — it often cancels. The graphs agree except at the hole \\((2,2)\\), where the cancelled factor \\((x-2)\\) was zero:`, gframe(["y = x/(x-2) - 4/(x^2-2*x)", "y = (x+2)/x"], { title: "x/(x−2) − 4/(x²−2x) = (x+2)/x, with a hole at (2, 2)", labels: [{ x: 2, y: 2, t: "hole (2, 2)", c: "#be123c" }], ...gview(-5, 6, -5, 6) }))}
  ${ex("Example 8: Three terms — a surprise", `Simplify ${M("\\dfrac{1}{x}+\\dfrac{1}{x+1}+\\dfrac{1}{x(x+1)}")}.`, [
    `LCD \\(=x(x+1)\\). Numerator: \\((x+1)+x+1=2x+2=2(x+1)\\).`,
    `\\(\\dfrac{2(x+1)}{x(x+1)}\\): cancel \\((x+1)\\).`,
  ], `${M("\\dfrac2x")}, \\(x\\ne0,\\ -1\\). Three fractions collapsed into one very simple one — the graphs coincide:`, sumGraph)}
  ${ex("Example 9: A compound fraction", `Simplify ${M("\\dfrac{1+\\frac1x}{1-\\frac1{x^2}}")}.`, [
    `Combine the top: \\(1+\\dfrac1x=\\dfrac{x+1}{x}\\). Combine the bottom: \\(1-\\dfrac1{x^2}=\\dfrac{x^2-1}{x^2}\\).`,
    `Divide by multiplying by the reciprocal: \\(\\dfrac{x+1}{x}\\times\\dfrac{x^2}{(x-1)(x+1)}\\). Cancel \\(x\\) and \\((x+1)\\).`,
  ], `${M("\\dfrac{x}{x-1}")}, with \\(x\\ne0,\\ 1,\\ -1\\).`)}
  ${ex("Example 10: Work rates", `Pipe A fills a tank in \\(x\\) hours; pipe B fills it in \\((x+3)\\) hours. Write the time to fill the tank with both pipes open.`, [
    `Rates add: in one hour A fills \\(\\dfrac1x\\) of the tank and B fills \\(\\dfrac{1}{x+3}\\). Together: \\(\\dfrac1x+\\dfrac1{x+3}=\\dfrac{(x+3)+x}{x(x+3)}=\\dfrac{2x+3}{x(x+3)}\\).`,
    `Time \\(=1\\div\\text{rate}\\): flip the fraction.`,
  ], `Time \\(=\\dfrac{x(x+3)}{2x+3}\\) hours. If A takes \\(6\\) h and B takes \\(9\\) h: \\(\\dfrac{54}{15}=3.6\\) h (check: \\(\\tfrac16+\\tfrac19=\\tfrac5{18}\\), and \\(\\tfrac{18}{5}=3.6\\) ✓).`)}
  ${ex("Example 11: Resistors in parallel", `Two resistors of \\(x\\) and \\(2x\\) ohms are connected in parallel. The total resistance \\(R\\) satisfies \\(\\dfrac1R=\\dfrac1x+\\dfrac1{2x}\\). Find \\(R\\).`, [
    `LCD \\(2x\\): \\(\\dfrac{2}{2x}+\\dfrac{1}{2x}=\\dfrac{3}{2x}\\).`,
    `Flip: \\(R=\\dfrac{2x}{3}\\).`,
  ], `\\(R=\\dfrac{2x}{3}\\) ohms — always smaller than the smaller resistor, as parallel circuits require. For \\(x=9\\): \\(6\\) Ω (\\(\\tfrac19+\\tfrac1{18}=\\tfrac16\\) ✓).`)}

  ${mistake("\\(\\dfrac2x+\\dfrac35=\\dfrac{5}{x+5}\\)", "Fractions are added over a <em>common</em> denominator — you never add the denominators. At \\(x=5\\): \\(\\tfrac25+\\tfrac35=1\\) but \\(\\tfrac{5}{5+5}=\\tfrac12\\).", "\\(\\dfrac2x+\\dfrac35=\\dfrac{10+3x}{5x}\\).")}
  ${mistake("\\(\\dfrac{5}{x}-\\dfrac{x-1}{x}=\\dfrac{5-x-1}{x}\\)", "The minus must apply to <em>both</em> terms of \\((x-1)\\). The numerator becomes \\(5-x+1\\), not \\(5-x-1\\). At \\(x=2\\): \\(\\tfrac52-\\tfrac12=2\\), but \\(\\tfrac{5-2-1}{2}=1\\).", "\\(\\dfrac{5-(x-1)}{x}=\\dfrac{6-x}{x}\\).")}
  ${watchOut([
    "Use the <strong>lowest</strong> common denominator: it keeps the numbers small and often lets you cancel at the end.",
    "Brackets around the second numerator when subtracting: \\(\\dfrac{a}{D}-\\dfrac{b+c}{D}=\\dfrac{a-(b+c)}{D}\\).",
    "Multiply the <em>numerator</em> by whatever you multiplied the denominator by — fractions must stay equivalent.",
    "Opposite denominators: \\(\\dfrac{a}{x-4}\\) and \\(\\dfrac{b}{4-x}\\) share a denominator once you factor out \\(-1\\).",
    "Never cancel terms: in \\(\\dfrac{x+3}{x(x+3)}\\) you cancel the <em>factor</em> \\((x+3)\\), but in \\(\\dfrac{x+3}{x+5}\\) nothing cancels.",
    "Keep the restrictions from <strong>every</strong> original denominator, even ones that vanish from the final answer.",
  ])}

  <h2>🟡 Practice Questions</h2>
  ${pr(1, "Knowledge", `Simplify ${M("\\dfrac{7x-2}{x+4}-\\dfrac{3x+6}{x+4}")}.`, `${M(P1.tex)}, i.e. \\(\\dfrac{4(x-2)}{x+4}\\), \\(x\\ne-4\\).`)}
  ${pr(2, "Knowledge", `Simplify ${M("\\dfrac{5}{6x}-\\dfrac{2}{9x^2}")}.`, `LCD \\(18x^2\\): \\(\\dfrac{15x-4}{18x^2}\\), \\(x\\ne0\\).`)}
  ${pr(3, "Knowledge", `Simplify ${M("\\dfrac{3}{x-5}+\\dfrac{4}{x+2}")}.`, `${M(P3.tex)}, which factors as \\(\\dfrac{7(x-2)}{(x-5)(x+2)}\\) (nothing cancels).`)}
  ${pr(4, "Thinking", `Simplify ${M("\\dfrac{2}{x^2-1}+\\dfrac{3}{x^2+x-2}")}.`, `\\(x^2-1=(x-1)(x+1)\\), \\(x^2+x-2=(x+2)(x-1)\\). LCD \\((x-1)(x+1)(x+2)\\): numerator \\(2(x+2)+3(x+1)=5x+7\\). ${M(P4.tex)}.`)}
  ${pr(5, "Thinking", `Simplify ${M("\\dfrac{x}{x+2}-\\dfrac{4}{x^2+2x}")}.`, `LCD \\(x(x+2)\\): \\(\\dfrac{x^2-4}{x(x+2)}=\\dfrac{(x-2)(x+2)}{x(x+2)}=\\dfrac{x-2}{x}\\), \\(x\\ne0,-2\\).`)}
  ${pr(6, "Thinking", `Simplify ${M("\\dfrac{4}{x-3}+\\dfrac{6}{3-x}")}.`, `\\(\\dfrac{4}{x-3}-\\dfrac{6}{x-3}=\\dfrac{-2}{x-3}\\), \\(x\\ne3\\).`)}
  ${pr(7, "Thinking", `Simplify the compound fraction ${M("\\dfrac{\\frac1x-\\frac13}{x-3}")}.`, `Top: \\(\\dfrac{3-x}{3x}=\\dfrac{-(x-3)}{3x}\\). Dividing by \\((x-3)\\): \\(\\dfrac{-1}{3x}\\), \\(x\\ne0,3\\).`)}
  ${pr(8, "Application", `Machine A completes a job in \\(x\\) hours and machine B in \\((x-2)\\) hours. Write the time to finish together as one fraction. If A takes \\(6\\) hours, how long do they take together?`, `\\(\\text{time}=\\dfrac{x(x-2)}{2x-2}\\). With \\(x=6\\): \\(\\dfrac{24}{10}=2.4\\) hours (check: \\(\\tfrac16+\\tfrac14=\\tfrac5{12}\\), and \\(\\tfrac{12}{5}=2.4\\) ✓).`)}
  ${challenge("Show that \\(\\dfrac1x-\\dfrac1{x+1}=\\dfrac{1}{x(x+1)}\\), then use it to find \\(\\dfrac1{1\\cdot2}+\\dfrac1{2\\cdot3}+\\dfrac1{3\\cdot4}+\\cdots+\\dfrac1{9\\cdot10}\\) without adding nine fractions.", `\\(\\dfrac1x-\\dfrac1{x+1}=\\dfrac{(x+1)-x}{x(x+1)}=\\dfrac1{x(x+1)}\\). So each term is a difference: \\((1-\\tfrac12)+(\\tfrac12-\\tfrac13)+(\\tfrac13-\\tfrac14)+\\cdots+(\\tfrac19-\\tfrac1{10})\\). Everything cancels except the ends: \\(1-\\tfrac1{10}=\\tfrac{9}{10}\\). (This is called a <em>telescoping</em> sum.)`)}

  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: What is the LCD and why use it?", "It is the smallest expression that every denominator divides into. Using it keeps the numerator small and usually allows cancelling at the end.")}
  ${qa("Q2: How do I find the LCD of \\(x^2-9\\) and \\(x^2+x-12\\)?", "Factor: \\((x-3)(x+3)\\) and \\((x+4)(x-3)\\). Take each different factor once: \\((x-3)(x+3)(x+4)\\).")}
  ${qa("Q3: When subtracting, what is the most common mistake?", "Forgetting to change the sign of every term of the second numerator. Put it in brackets first.")}
  ${qa("Q4: What if the denominators are opposites like \\(x-4\\) and \\(4-x\\)?", "Rewrite \\(4-x\\) as \\(-(x-4)\\); then the denominators match and you just combine the numerators.")}
  ${qa("Q5: Do I need restrictions after combining?", "Yes — from every original denominator. A restriction can disappear from the simplified form but still applies.")}
  ${qa("Q6: How do I handle a fraction inside a fraction?", "Combine the top and the bottom each into a single fraction, then divide by multiplying by the reciprocal of the bottom.")}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

// ───────────────────────── worksheet ─────────────────────────
const w1 = RE("6x+9", ["2x-1"]); eqv("W-E1", minus(t("9x+4", "2x-1"), t("3x-5", "2x-1")), w1);
const w2 = RE("14x^2+15", ["20", "x", "x", "x"]); verify("W-E2", (x) => 7 / (10 * x) + 3 / (4 * x ** 3), w2.f);
const w3 = RE("7x-18", ["x+1", "x-4"]); verify("W-E3", (x) => 5 / (x + 1) + 2 / (x - 4), w3.f);
const w4 = RE("x+15", ["x-6", "x+1"]); verify("W-E4", (x) => 3 / (x - 6) - 2 / (x + 1), w4.f);
const w5 = RE("5x+6", ["x-2", "x+2", "x+1"]); verify("W-E5", (x) => 4 / (x * x - 4) + 1 / (x * x - x - 2), w5.f);
assert.strictEqual(ptex(pmulAll(P("x-2"), P("x+1"))), "x^2 - x - 2");
verify("W-E6", (x) => 7 / (x - 5) - 2 / (5 - x), (x) => 9 / (x - 5));
verify("W-E7", (x) => x / (x - 5) - 25 / (x * x - 5 * x), (x) => (x + 5) / x);
verify("W-E8", (x) => 2 / x + 3 / (x + 2) - 4 / (x * (x + 2)), (x) => 5 / (x + 2));
verify("W-E9", (x) => (x - 4 / x) / (1 - 2 / x), (x) => x + 2);
verify("W-E10", (x) => 1 / (1 / x + 1 / (x + 4)), (x) => (x * (x + 4)) / (2 * x + 4)); assert.ok(Math.abs(60 / 16 - 3.75) < 1e-12);
const eqSum = [{ tex: String.raw`\frac1x+\frac13`, f: (x) => 1 / x + 1 / 3 }, { tex: String.raw`\frac{2}{x+3}`, f: (x) => 2 / (x + 3) }, { tex: String.raw`\frac{x+3}{3x}`, f: (x) => (x + 3) / (3 * x) }];
const q1 = RE("6x-6", ["3x-2"]); eqv("W-Q1", minus(t("8x+1", "3x-2"), t("2x+7", "3x-2")), q1);
const q2 = RE("6x+5", ["8", "x", "x"]); verify("W-Q2", (x) => 5 / (8 * x * x) + 3 / (4 * x), q2.f);
const q3 = RE("7x-16", ["x+2", "x-3"]); verify("W-Q3", (x) => 6 / (x + 2) + 1 / (x - 3), q3.f);
const q4 = RE("-3x+13", ["x-1", "x+4"]); verify("W-Q4", (x) => 2 / (x - 1) - 5 / (x + 4), q4.f);
const q5 = RE("5x-17", ["x-4", "x+4", "x-3"]); verify("W-Q5", (x) => 3 / (x * x - 16) + 2 / (x * x + x - 12), q5.f);
assert.strictEqual(ptex(pmulAll(P("x-4"), P("x+4"))), "x^2 - 16");
verify("W-Q6", (x) => (x - 1) / (x - 6) + (x + 8) / (6 - x), (x) => -9 / (x - 6));
verify("W-Q7", (x) => x / (x + 3) - 9 / (x * x + 3 * x), (x) => (x - 3) / x);
verify("W-Q8", (x) => 1 / (x - 2) - 1 / (x + 2) - 4 / (x * x - 4), () => 0);
verify("W-Q9", (x) => (1 + 3 / x) / (1 - 9 / (x * x)), (x) => x / (x - 3));
verify("W-Q10", (x) => 1 / (1 / x + 1 / (x + 6)), (x) => (x * (x + 6)) / (2 * x + 6)); assert.strictEqual((6 * 12) / 18, 4);
const q12 = RE("2x+1", ["x", "x-1", "x+1"]); verify("W-Q12", (x) => 1 / (x * x - x) + 1 / (x * x - 1), q12.f);
verify("W-Q13", (x) => 1 / (1 / x + 1 / (3 * x)), (x) => (3 * x) / 4); assert.strictEqual((3 * 8) / 4, 6);
assert.ok(Math.abs([...Array(18)].map((_, i) => 1 / ((i + 2) * (i + 3))).reduce((a, b) => a + b, 0) - 0.45) < 1e-12);

export const W24 = {
  code: "2.4", unit: "2: Equivalent Algebraic Expressions", title: "Adding & Subtracting Rational Expressions",
  intro: r`Fractions can only be added when they count equal-sized pieces, so we rewrite them over a \textbf{lowest common denominator (LCD)} found by \emph{factoring} the denominators. After combining, factor the numerator, cancel, and keep the restrictions from \emph{every} original denominator.`,
  ideas: [
    r`\textbf{LCD:} factor every denominator; use each different factor at its \emph{highest power}, counting shared factors once.`,
    r`\textbf{Build equivalent fractions:} multiply top and bottom by the factors a fraction is missing.`,
    r`\textbf{Subtracting:} bracket the whole second numerator --- the minus sign changes \emph{every} term inside.`,
    r`\textbf{Opposites:} $\dfrac{a}{x-4}$ and $\dfrac{b}{4-x}$ have a common denominator once you write $4-x=-(x-4)$.`,
    r`\textbf{Work rates and parallel circuits:} rates and reciprocals add: $\dfrac1x+\dfrac1y=\dfrac{x+y}{xy}$.`,
  ],
  examples: [
    { t: "Same denominator", body: String.raw`Simplify $\dfrac{9x+4}{2x-1}-\dfrac{3x-5}{2x-1}$.\soln $\dfrac{(9x+4)-(3x-5)}{2x-1}=\dfrac{9x+4-3x+5}{2x-1}$. \\ $=${w1.tex}=\dfrac{3(2x+3)}{2x-1}$, $x\ne\tfrac12$.` },
    { t: "Monomial denominators", body: String.raw`Simplify $\dfrac{7}{10x}+\dfrac{3}{4x^3}$.\soln $10x=2\cdot5\cdot x$ and $4x^3=2^2\cdot x^3$, so LCD $=2^2\cdot5\cdot x^3=20x^3$. \\ $\dfrac{7\cdot2x^2}{20x^3}+\dfrac{3\cdot5}{20x^3}=${w2.tex}$, $x\ne0$.` },
    { t: "Two binomial denominators", body: String.raw`Simplify $\dfrac{5}{x+1}+\dfrac{2}{x-4}$.\soln LCD $(x+1)(x-4)$. \\ $\dfrac{5(x-4)+2(x+1)}{(x+1)(x-4)}=\dfrac{5x-20+2x+2}{(x+1)(x-4)}=${w3.tex}$, $x\ne-1,4$.` },
    { t: "Subtracting", body: String.raw`Simplify $\dfrac{3}{x-6}-\dfrac{2}{x+1}$.\soln $\dfrac{3(x+1)-2(x-6)}{(x-6)(x+1)}$. Bracket the second product! \\ $3x+3-2x+12=x+15$: $${w4.tex}$, $x\ne6,-1$.` },
    { t: "Factor the denominators first", body: String.raw`Simplify $\dfrac{4}{x^2-4}+\dfrac{1}{x^2-x-2}$.\soln $x^2-4=(x-2)(x+2)$; $x^2-x-2=(x-2)(x+1)$. LCD $(x-2)(x+2)(x+1)$ --- $(x-2)$ is counted once. \\ Numerator: $4(x+1)+1(x+2)=5x+6$. \\ $${w5.tex}$, $x\ne2,-2,-1$.` },
    { t: "Opposite denominators", body: String.raw`Simplify $\dfrac{7}{x-5}-\dfrac{2}{5-x}$.\soln $\dfrac{2}{5-x}=-\dfrac{2}{x-5}$, so $\dfrac{7}{x-5}+\dfrac{2}{x-5}=\dfrac{9}{x-5}$, $x\ne5$.` },
    { t: "Combine, then simplify", body: String.raw`Simplify $\dfrac{x}{x-5}-\dfrac{25}{x^2-5x}$.\soln $x^2-5x=x(x-5)$; LCD $x(x-5)$. \\ $\dfrac{x\cdot x-25}{x(x-5)}=\dfrac{(x-5)(x+5)}{x(x-5)}=\dfrac{x+5}{x}$, $x\ne0,5$.` },
    { t: "Three terms", body: String.raw`Simplify $\dfrac2x+\dfrac{3}{x+2}-\dfrac{4}{x(x+2)}$.\soln LCD $x(x+2)$: $\dfrac{2(x+2)+3x-4}{x(x+2)}=\dfrac{5x}{x(x+2)}=\dfrac{5}{x+2}$, $x\ne0,-2$.` },
    { t: "A compound fraction", body: String.raw`Simplify $\dfrac{x-\frac4x}{1-\frac2x}$.\soln Top: $\dfrac{x^2-4}{x}$. Bottom: $\dfrac{x-2}{x}$. Divide: $\dfrac{x^2-4}{x}\times\dfrac{x}{x-2}=\dfrac{(x-2)(x+2)}{x-2}=x+2$, with $x\ne0,2$.` },
    { t: "Application: working together", body: String.raw`Alex mows a lawn in $x$ hours and Bea takes $(x+4)$ hours. Write the time together, and find it when Alex takes $6$ hours.\soln Rates add: $\dfrac1x+\dfrac1{x+4}=\dfrac{2x+4}{x(x+4)}$. Time $=\dfrac{x(x+4)}{2x+4}$. \\ For $x=6$: $\dfrac{60}{16}=3.75$ h. Check: $\tfrac16+\tfrac1{10}=\tfrac{16}{60}$ and $\tfrac{60}{16}=3.75$ \checkmark.` },
    { t: "Test the shortcut", body: String.raw`Is $\dfrac1x+\dfrac13=\dfrac{2}{x+3}$? Compare with $\dfrac{x+3}{3x}$.
${eqTableTex(eqSum, [1, 2, 3, 6], { check: true })}
\soln The second row disagrees with the first at every value tested, so $\frac{2}{x+3}$ is \emph{not} equivalent: you never add denominators. The third row, built over the LCD $3x$, matches the first in every column.` },
  ],
  questions: [
    { ask: String.raw`Simplify $\dfrac{8x+1}{3x-2}-\dfrac{2x+7}{3x-2}$ and state the restriction.`, ws: "2.4cm" },
    { ask: String.raw`Simplify $\dfrac{5}{8x^2}+\dfrac{3}{4x}$.`, ws: "2.6cm" },
    { ask: String.raw`Simplify $\dfrac{6}{x+2}+\dfrac{1}{x-3}$ and state the restrictions.`, ws: "3cm" },
    { ask: String.raw`Simplify $\dfrac{2}{x-1}-\dfrac{5}{x+4}$ and state the restrictions.`, ws: "3cm" },
    { ask: String.raw`Simplify $\dfrac{3}{x^2-16}+\dfrac{2}{x^2+x-12}$. State the LCD first.`, ws: "3.8cm" },
    { ask: String.raw`Simplify $\dfrac{x-1}{x-6}+\dfrac{x+8}{6-x}$.`, ws: "3cm" },
    { ask: String.raw`Simplify $\dfrac{x}{x+3}-\dfrac{9}{x^2+3x}$. Factor the final numerator.`, ws: "3.4cm" },
    { ask: String.raw`Show that $\dfrac{1}{x-2}-\dfrac{1}{x+2}-\dfrac{4}{x^2-4}$ equals $0$ for every allowed $x$. State the restrictions.`, ws: "3.8cm" },
    { ask: String.raw`Simplify the compound fraction $\dfrac{1+\frac3x}{1-\frac9{x^2}}$ and state the restrictions.`, ws: "3.8cm" },
    { ask: String.raw`Pipe A fills a pool in $x$ hours and pipe B in $(x+6)$ hours. Write the time with both open as one fraction and evaluate it when $x=6$.`, ws: "3.4cm" },
    { ask: String.raw`A student writes $\dfrac2x+\dfrac34=\dfrac{5}{x+4}$. Test the claim at $x=4$, explain the error, and give the correct sum.`, ws: "3.2cm" },
    { ask: String.raw`Find the LCD of $x^2-x$ and $x^2-1$, then simplify $\dfrac{1}{x^2-x}+\dfrac{1}{x^2-1}$.`, ws: "3.8cm" },
    { ask: String.raw`Two resistors $x$ and $3x$ ohms are in parallel: $\dfrac1R=\dfrac1x+\dfrac1{3x}$. Find $R$ in terms of $x$, and its value for $x=8$.`, ws: "3cm" },
    { ask: String.raw`Show that $\dfrac1n-\dfrac1{n+1}=\dfrac{1}{n(n+1)}$. Use it to evaluate $\dfrac1{2\cdot3}+\dfrac1{3\cdot4}+\cdots+\dfrac1{19\cdot20}$.`, ws: "4.4cm", challenge: true },
  ],
  answers: [
    String.raw`$\dfrac{(8x+1)-(2x+7)}{3x-2}=${q1.tex}=\dfrac{6(x-1)}{3x-2}$, $x\ne\tfrac23$.`,
    String.raw`LCD $8x^2$: $\dfrac{5+3\cdot2x}{8x^2}=${q2.tex}$, $x\ne0$.`,
    String.raw`$\dfrac{6(x-3)+(x+2)}{(x+2)(x-3)}=${q3.tex}$, $x\ne-2,3$.`,
    String.raw`$\dfrac{2(x+4)-5(x-1)}{(x-1)(x+4)}=${q4.tex}$, $x\ne1,-4$.`,
    String.raw`LCD $(x-4)(x+4)(x-3)$. Numerator $3(x-3)+2(x-4)=5x-17$. $${q5.tex}$, $x\ne4,-4,3$.`,
    String.raw`$\dfrac{x-1}{x-6}-\dfrac{x+8}{x-6}=\dfrac{-9}{x-6}$, $x\ne6$.`,
    String.raw`LCD $x(x+3)$: $\dfrac{x^2-9}{x(x+3)}=\dfrac{(x-3)(x+3)}{x(x+3)}=\dfrac{x-3}{x}$, $x\ne0,-3$.`,
    String.raw`LCD $(x-2)(x+2)$: $\dfrac{(x+2)-(x-2)-4}{(x-2)(x+2)}=\dfrac{0}{(x-2)(x+2)}=0$, $x\ne\pm2$.`,
    String.raw`$\dfrac{x+3}{x}\times\dfrac{x^2}{(x-3)(x+3)}=\dfrac{x}{x-3}$, $x\ne0,3,-3$.`,
    String.raw`$\dfrac1x+\dfrac1{x+6}=\dfrac{2x+6}{x(x+6)}$, so time $=\dfrac{x(x+6)}{2x+6}$. At $x=6$: $\dfrac{72}{18}=4$ hours.`,
    String.raw`At $x=4$: $\tfrac24+\tfrac34=\tfrac54$ but $\tfrac{5}{8}$. Denominators are never added; use the LCD $4x$: $\dfrac2x+\dfrac34=\dfrac{8+3x}{4x}$.`,
    String.raw`$x(x-1)$ and $(x-1)(x+1)$: LCD $x(x-1)(x+1)$. $\dfrac{(x+1)+x}{x(x-1)(x+1)}=${q12.tex}$, $x\ne0,1,-1$.`,
    String.raw`$\dfrac1R=\dfrac{3+1}{3x}=\dfrac{4}{3x}$, so $R=\dfrac{3x}{4}$. For $x=8$: $6$ ohms.`,
    String.raw`$\dfrac1n-\dfrac1{n+1}=\dfrac{(n+1)-n}{n(n+1)}=\dfrac1{n(n+1)}$. The sum is $(\tfrac12-\tfrac13)+(\tfrac13-\tfrac14)+\cdots+(\tfrac1{19}-\tfrac1{20})=\tfrac12-\tfrac1{20}=\tfrac{9}{20}$.`,
  ],
};

export const LEARN24 = [
  ["The lowest common denominator", r`Factor every denominator. The LCD contains each different factor at its \textbf{highest power}; a factor shared by two denominators is counted \emph{once}. Multiply top and bottom of each fraction by what it is missing.`],
  ["Subtracting safely", r`Put the whole second numerator in brackets: $\dfrac{a}{D}-\dfrac{b+c}{D}=\dfrac{a-(b+c)}{D}$. After combining, \textbf{factor the numerator} and cancel; keep the restrictions of every original denominator.`],
  ["Opposites and compound fractions", r`$4-x=-(x-4)$ turns opposite denominators into equal ones. For a fraction inside a fraction, combine top and bottom separately, then multiply by the reciprocal.`],
];

// ───────────────────────── question bank (60) ─────────────────────────
export function bank() {
  const q = [];
  // ── easy (20) ──
  q.push(MC("easy", "What is the LCD of $\\dfrac{1}{4x}$ and $\\dfrac{1}{6x^2}$?", "$12x^2$", ["$24x^3$", "$12x$", "$2x^2$"], "$\\mathrm{lcm}(4,6)=12$ and the higher power of $x$ is $x^2$."));
  q.push(MC("easy", "What is the LCD of $\\dfrac{1}{x+2}$ and $\\dfrac{1}{x-3}$?", "$(x+2)(x-3)$", ["$x+2$", "$x-3$", "$x^2-1$"], "No common factor, so the LCD is the product."));
  q.push(MC("easy", "What is the LCD of $\\dfrac{3}{x(x-1)}$ and $\\dfrac{2}{x^2}$?", "$x^2(x-1)$", ["$x(x-1)$", "$x^2$", "$x^3(x-1)$"], "Highest power of each factor: $x^2$ and $(x-1)$."));
  { const a = RE("4x+6", ["x-2"]); verify("B-4", (x) => (3 * x + 1) / (x - 2) + (x + 5) / (x - 2), a.f);
    q.push(RC("easy", "Simplify $\\dfrac{3x+1}{x-2}+\\dfrac{x+5}{x-2}$.", a, [RE("4x+6", ["2x-4"]), RE("4x+6", ["x-2", "x-2"]), RE("3x+5", ["x-2"])], "Same denominator: add the numerators, $3x+1+x+5=4x+6$.")); }
  { const a = RE("3x+6", ["x+1"]); verify("B-5", (x) => (5 * x + 2) / (x + 1) - (2 * x - 4) / (x + 1), a.f);
    q.push(RC("easy", "Simplify $\\dfrac{5x+2}{x+1}-\\dfrac{2x-4}{x+1}$.", a, [RE("3x-2", ["x+1"]), RE("7x-2", ["x+1"]), RE("3x+6", ["x-1"])], "$5x+2-(2x-4)=5x+2-2x+4=3x+6$.")); }
  q.push(MC("easy", "Simplify $\\dfrac{1}{x}+\\dfrac{2}{x}$.", "$\\dfrac{3}{x}$", ["$\\dfrac{3}{2x}$", "$\\dfrac{3}{x^2}$", "$\\dfrac{2}{x^2}$"], "Same denominator: add the numerators only."));
  { verify("B-7", (x) => 3 / (2 * x) + 1 / (3 * x), (x) => 11 / (6 * x)); q.push(MC("easy", "Simplify $\\dfrac{3}{2x}+\\dfrac{1}{3x}$.", "$\\dfrac{11}{6x}$", ["$\\dfrac{4}{5x}$", "$\\dfrac{4}{6x}$", "$\\dfrac{11}{5x}$"], "LCD $6x$: $\\dfrac{9}{6x}+\\dfrac{2}{6x}$.")); }
  q.push(num("easy", "What is the numerical part of the LCD of $\\dfrac{1}{6x}$ and $\\dfrac{1}{9x}$?", 18, 0, "$\\mathrm{lcm}(6,9)=18$."));
  q.push(tf("easy", "$\\dfrac1x+\\dfrac1y=\\dfrac{2}{x+y}$.", false, "Denominators are never added. $\\dfrac1x+\\dfrac1y=\\dfrac{y+x}{xy}$."));
  q.push(tf("easy", "To add fractions with different denominators you must first rewrite them over a common denominator.", true));
  q.push(fill("easy", "$\\dfrac{2}{x}+\\dfrac{5}{x}=$ ___", ["7/x", "7 / x"], "Same denominator."));
  q.push(fill("easy", "The LCD of $\\dfrac1x$ and $\\dfrac1{x+1}$ is ___", ["x(x+1)", "(x+1)x", "x(1+x)", "x*(x+1)", "x(x + 1)"], "No shared factor, so multiply."));
  q.push(ms("easy", "Which are valid common denominators for $\\dfrac1x$ and $\\dfrac1{x+2}$?", ["$x(x+2)$", "$x^2(x+2)$", "$x+2$", "$2x(x+2)$"], [0, 1, 3], "A common denominator must be divisible by both denominators; the <em>lowest</em> is $x(x+2)$."));
  q.push(ms("easy", "Which are restrictions on $\\dfrac{3}{x-1}+\\dfrac{2}{x+4}$?", ["$x\\ne1$", "$x\\ne-4$", "$x\\ne3$", "$x\\ne2$"], [0, 1], "Values that make a denominator zero."));
  q.push(match("easy", "Match each sum to its result.", ["$\\dfrac1x+\\dfrac2x$", "$\\dfrac2x-\\dfrac3x$", "$\\dfrac5x-\\dfrac5x$"], ["$\\dfrac3x$", "$-\\dfrac1x$", "$0$"], [0, 1, 2]));
  { const f = (x) => (2 * x) / (x * x - 1); verify("B-16", (x) => 1 / (x - 1) + 1 / (x + 1), f);
    q.push({ ...mc("easy", "The graph is $y=\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$. Where are its vertical asymptotes?", ["$x=1$ and $x=-1$", "$x=0$ only", "$x=2$ and $x=-2$", "there are none"], 0, "The denominators $x-1$ and $x+1$ are zero at $x=\\pm1$."),
      image: graphSvg({ fn: f, domain: [-5, -1.06], extraCurves: [{ fn: f, domain: [-0.95, 0.95], color: "#2563a0" }, { fn: f, domain: [1.06, 5], color: "#2563a0" }], xmin: -5, xmax: 5, ymin: -6, ymax: 6, title: "y = 1/(x − 1) + 1/(x + 1)" }) }); }
  q.push(MC("easy", "Simplify $\\dfrac5x-\\dfrac3x$.", "$\\dfrac2x$", ["$\\dfrac{2}{0}$", "$\\dfrac8x$", "$2x$"], "Subtract the numerators over the same denominator."));
  q.push(order("easy", "Put the steps in order to add $\\dfrac{1}{x}+\\dfrac{1}{x+2}$.", ["Find the LCD: $x(x+2)$", "Rewrite each fraction over the LCD", "Add the numerators", "Simplify and state the restrictions $x\\ne0,\\ -2$"]));
  q.push(num("easy", "Evaluate $\\dfrac{1}{x}+\\dfrac{1}{2x}$ at $x=3$.", 0.5, 0.001, "$\\dfrac13+\\dfrac16=\\dfrac12$."));
  q.push(tf("easy", "The denominators $x-3$ and $3-x$ can be made equal by factoring out $-1$.", true, "$3-x=-(x-3)$."));

  // ── medium (20) ──
  { const a = RE("7x+23", ["x-1", "x+4"]); verify("B-21", (x) => 6 / (x - 1) + 1 / (x + 4), a.f);
    q.push(RC("medium", "Simplify $\\dfrac{6}{x-1}+\\dfrac{1}{x+4}$.", a, [RE("7x+5", ["x-1", "x+4"]), RE("7", ["x-1", "x+4"]), RE("7x+23", ["x+3"])], "$6(x+4)+1(x-1)=6x+24+x-1=7x+23$.")); }
  { const a = RE("4x-34", ["x+2", "x-4"]); verify("B-22", (x) => 7 / (x + 2) - 3 / (x - 4), a.f);
    q.push(RC("medium", "Simplify $\\dfrac{7}{x+2}-\\dfrac{3}{x-4}$.", a, [RE("4x-22", ["x+2", "x-4"]), RE("10x-34", ["x+2", "x-4"]), RE("4", ["x+2", "x-4"])], "$7(x-4)-3(x+2)=7x-28-3x-6=4x-34$.")); }
  { const a = RE("x+1", ["x", "x-1"]); verify("B-23", (x) => 1 / (x * x - x) + 1 / (x - 1), a.f);
    q.push(RC("medium", "Simplify $\\dfrac{1}{x^2-x}+\\dfrac{1}{x-1}$.", a, [RE("2", ["x", "x-1"]), RE("x+1", ["x-1"]), RE("1", ["x", "x-1", "x-1"])], "$x^2-x=x(x-1)$; the second fraction is missing $x$.")); }
  { verify("B-24", (x) => 3 / (x - 4) + 2 / (4 - x), (x) => 1 / (x - 4));
    q.push(RC("medium", "Simplify $\\dfrac{3}{x-4}+\\dfrac{2}{4-x}$.", RE("1", ["x-4"]), [RE("5", ["x-4"]), RE("-1", ["x-4"]), RE("5", ["x-4", "x-4"])], "$\\dfrac{2}{4-x}=-\\dfrac{2}{x-4}$, so $\\dfrac{3-2}{x-4}$.")); }
  { verify("B-25", (x) => (2 * x) / (x * x - 9) - 1 / (x - 3), (x) => 1 / (x + 3));
    q.push(RC("medium", "Simplify $\\dfrac{2x}{x^2-9}-\\dfrac{1}{x-3}$.", RE("1", ["x+3"]), [RE("1", ["x-3"]), RE("x-3", ["x+3"]), RE("2x-1", ["x-3", "x+3"])], "$\\dfrac{2x-(x+3)}{(x-3)(x+3)}=\\dfrac{x-3}{(x-3)(x+3)}=\\dfrac{1}{x+3}$.")); }
  { const a = RE("8", ["x+1", "x+3"]); verify("B-26", (x) => 4 / (x + 1) - 4 / (x + 3), a.f);
    q.push(RC("medium", "Simplify $\\dfrac{4}{x+1}-\\dfrac{4}{x+3}$.", a, [RE("8", ["x+1"]), RE("4", ["x+1", "x+3"]), RE("-8", ["x+1", "x+3"])], "$\\dfrac{4(x+3)-4(x+1)}{(x+1)(x+3)}=\\dfrac{8}{(x+1)(x+3)}$.")); }
  { const a = RE("2x^2+2", ["x-1", "x+1"]); verify("B-27", (x) => (x + 1) / (x - 1) + (x - 1) / (x + 1), a.f);
    q.push(RC("medium", "Simplify $\\dfrac{x+1}{x-1}+\\dfrac{x-1}{x+1}$.", a, [RE("2x", ["x-1", "x+1"]), RE("2", ["x-1", "x+1"]), RE("2x^2", ["x-1", "x+1"])], "$(x+1)^2+(x-1)^2=2x^2+2$ over $(x-1)(x+1)$.")); }
  q.push(MC("medium", "What is the LCD of $\\dfrac{1}{x^2-4}$ and $\\dfrac{1}{x^2+4x+4}$?", "$(x-2)(x+2)^2$", ["$(x-2)(x+2)$", "$(x-2)^2(x+2)^2$", "$(x^2-4)(x+2)$"], "$(x-2)(x+2)$ and $(x+2)^2$: the highest power of $(x+2)$ is 2."));
  q.push(MC("medium", "What is the LCD of $\\dfrac{1}{x^2-x-6}$ and $\\dfrac{1}{x^2-9}$?", "$(x-3)(x+2)(x+3)$", ["$(x-3)(x+2)$", "$(x-3)^2(x+2)(x+3)$", "$(x+2)(x+3)$"], "$(x-3)(x+2)$ and $(x-3)(x+3)$: $(x-3)$ is shared."));
  q.push(num("medium", "Evaluate $\\dfrac13+\\dfrac1x$ at $x=6$.", 0.5, 0.001, "$\\dfrac13+\\dfrac16=\\dfrac12$."));
  q.push(fill("medium", "$\\dfrac4x-\\dfrac1{2x}=$ ___", ["7/(2x)", "7/(2*x)", "7 / (2x)", "7/2x"], "LCD $2x$: $\\dfrac{8-1}{2x}$."));
  q.push(fill("medium", "$\\dfrac1x-\\dfrac1{x+1}=$ ___", ["1/(x(x+1))", "1/(x^2+x)", "1/(x²+x)", "1/((x+1)x)", "1/(x(x+1))"], "$\\dfrac{(x+1)-x}{x(x+1)}$."));
  q.push(tf("medium", "$\\dfrac ab+\\dfrac cd=\\dfrac{a+c}{b+d}$.", false, "Add over a common denominator: $\\dfrac{ad+bc}{bd}$."));
  q.push(tf("medium", "When subtracting rational expressions, the minus sign applies to every term of the second numerator.", true));
  { verify("B-35a", (x) => 3 / (x - 2) - 3 / (x + 2), (x) => 12 / (x * x - 4)); assert.strictEqual(3 / (0 - 2) - 3 / (0 + 2), -3);
    q.push(ms("medium", "Consider $\\dfrac{3}{x-2}-\\dfrac{3}{x+2}$. Which statements are true?", ["it equals $\\dfrac{12}{x^2-4}$", "its restrictions are $x\\ne\\pm2$", "its value at $x=0$ is $-3$", "it simplifies to $\\dfrac{3}{4}$"], [0, 1, 2], "$\\dfrac{3(x+2)-3(x-2)}{(x-2)(x+2)}=\\dfrac{12}{x^2-4}$; at $x=0$: $\\dfrac{12}{-4}=-3$.")); }
  q.push(ms("medium", "For $\\dfrac{1}{x^2-1}$ and $\\dfrac{1}{x^2+x}$, which statements are true?", ["the LCD is $x(x-1)(x+1)$", "$x^2-1$ is missing the factor $x$", "$x^2+x$ is missing the factor $(x-1)$", "the LCD is $x^2-1$"], [0, 1, 2], "$x^2-1=(x-1)(x+1)$, $x^2+x=x(x+1)$."));
  { const items = [[(x) => 1 / x + 2 / x, "$\\dfrac3x$"], [(x) => 2 / x - 3 / x, "$-\\dfrac1x$"], [(x) => 1 / x + 1 / (x + 1), "$\\dfrac{2x+1}{x(x+1)}$"], [(x) => 1 / x - 1 / (x + 1), "$\\dfrac{1}{x(x+1)}$"]];
    verify("B-37a", items[0][0], (x) => 3 / x); verify("B-37b", items[1][0], (x) => -1 / x); verify("B-37c", items[2][0], (x) => (2 * x + 1) / (x * (x + 1))); verify("B-37d", items[3][0], (x) => 1 / (x * (x + 1)));
    q.push(match("medium", "Match each sum or difference to its simplified form.", ["$\\dfrac1x+\\dfrac2x$", "$\\dfrac2x-\\dfrac3x$", "$\\dfrac1x+\\dfrac1{x+1}$", "$\\dfrac1x-\\dfrac1{x+1}$"], items.map((i) => i[1]), [0, 1, 2, 3])); }
  q.push(num("medium", "Tap A fills a tank in $10$ minutes and tap B in $15$ minutes. How many minutes do they take together?", 6, 0, "Rates add: $\\dfrac1{10}+\\dfrac1{15}=\\dfrac{5}{30}=\\dfrac16$ of the tank per minute, so $6$ minutes."));
  { const f = (x) => 2 / (x - 2); verify("B-39", (x) => 3 / (x - 2) - 1 / (x - 2), f);
    q.push({ ...mc("medium", "The graph shows $y=\\dfrac{3}{x-2}-\\dfrac{1}{x-2}$. Which single fraction equals it?", ["$\\dfrac{2}{x-2}$", "$\\dfrac{4}{x-2}$", "$\\dfrac{2}{(x-2)^2}$", "$\\dfrac{3}{x-2}$"], 0, "Same denominator: $3-1=2$. The graph passes through $(3,2)$, which fits $\\dfrac{2}{x-2}$."),
      image: graphSvg({ fn: f, domain: [-4, 1.7], extraCurves: [{ fn: f, domain: [2.3, 8], color: "#2563a0" }], xmin: -4, xmax: 8, ymin: -5, ymax: 6, points: [{ x: 3, y: 2, label: "(3, 2)", color: "#1e293b" }], title: "A rational graph" }) }); }
  q.push(order("medium", "Put the steps in order to simplify $\\dfrac{3}{x-1}-\\dfrac{2}{x+2}$.", ["Find the LCD $(x-1)(x+2)$", "Write $\\dfrac{3(x+2)-2(x-1)}{(x-1)(x+2)}$, bracketing the second product", "Expand: $3x+6-2x+2=x+8$", "State the result $\\dfrac{x+8}{(x-1)(x+2)}$ and the restrictions"]));

  // ── hard (20) ──
  { const a = RE("-2x+12", ["x", "x-4", "x+4"]); verify("B-41", (x) => 3 / (x * x - 4 * x) - 5 / (x * x - 16), a.f); assert.strictEqual(ptex(pmulAll(P("x"), P("x-4"))), "x^2 - 4x");
    q.push(RC("hard", "Simplify $\\dfrac{3}{x^2-4x}-\\dfrac{5}{x^2-16}$.", a, [RE("-2x+12", ["x", "x-4"]), RE("2x+12", ["x", "x-4", "x+4"]), RE("-2x-12", ["x", "x-4", "x+4"]), RE("-2", ["x-4", "x+4"])], "LCD $x(x-4)(x+4)$: $3(x+4)-5x=-2x+12$.")); }
  { verify("B-42", (x) => 2 / (x - 3) + 3 / (x + 3) - (5 * x - 3) / (x * x - 9), () => 0);
    q.push(mc("hard", "Simplify $\\dfrac{2}{x-3}+\\dfrac{3}{x+3}-\\dfrac{5x-3}{x^2-9}$.", ["$\\dfrac{4x-12}{x^2-9}$", "$0$", "$\\dfrac{2}{x^2-9}$", "$\\dfrac{10x-3}{x^2-9}$"], 1, "$2(x+3)+3(x-3)-(5x-3)=2x+6+3x-9-5x+3=0$. The expression is $0$ everywhere it is defined ($x\\ne\\pm3$).")); }
  { verify("B-43", (x) => (x - 4 / x) / (1 + 2 / x), (x) => x - 2);
    q.push(RC("hard", "Simplify the compound fraction $\\dfrac{x-\\frac4x}{1+\\frac2x}$.", R(["x-2"], ["1"]), [R(["x+2"], ["1"]), R(["x-2"], ["x"]), RE("x^2+4", ["x+2"])], "Top $\\dfrac{x^2-4}{x}$, bottom $\\dfrac{x+2}{x}$: $\\dfrac{(x-2)(x+2)}{x}\\times\\dfrac{x}{x+2}=x-2$.")); }
  { const s = [...Array(22)].map((_, i) => 1 / ((i + 3) * (i + 4))).reduce((a, b) => a + b, 0); assert.ok(Math.abs(s - (1 / 3 - 1 / 25)) < 1e-12);
    q.push(num("hard", "Evaluate $\\dfrac{1}{3\\cdot4}+\\dfrac1{4\\cdot5}+\\dfrac1{5\\cdot6}+\\cdots+\\dfrac1{24\\cdot25}$, correct to $3$ decimal places.", 0.293, 0.001, "Each term is $\\dfrac1n-\\dfrac1{n+1}$; the sum telescopes to $\\dfrac13-\\dfrac1{25}=\\dfrac{22}{75}\\approx0.293$.")); }
  { verify("B-45", (x) => 1 / (x - 2) - 1 / (x + 5), (x) => 7 / ((x - 2) * (x + 5)));
    q.push(num("hard", "$\\dfrac{7}{(x-2)(x+5)}=\\dfrac{A}{x-2}+\\dfrac{B}{x+5}$. Find $A-B$.", 2, 0, "$A(x+5)+B(x-2)=7$: $A+B=0$ and $5A-2B=7$, so $A=1,\\ B=-1$ and $A-B=2$.")); }
  { const k = 2; verify("B-46", (x) => 3 / (x - 2) + k / (x + 1), (x) => (5 * x - 1) / ((x - 2) * (x + 1)));
    q.push(num("hard", "$\\dfrac{3}{x-2}+\\dfrac{k}{x+1}=\\dfrac{5x-1}{(x-2)(x+1)}$. Find $k$.", 2, 0, "$3(x+1)+k(x-2)=5x-1$: comparing $x$-terms, $3+k=5$, so $k=2$ (check the constants: $3-2k=-1$ ✓).")); }
  { const a = RE("2", ["x-1", "x+1"]); verify("B-47", (x) => 1 / (x * x + x) + 1 / (x * x - x), a.f);
    q.push(RC("hard", "Simplify $\\dfrac{1}{x^2+x}+\\dfrac{1}{x^2-x}$ and give the answer in simplest form.", a, [RE("2", ["x", "x-1", "x+1"]), RE("2x", ["x-1", "x+1"]), RE("x", ["x-1", "x+1"])], "$x(x+1)$ and $x(x-1)$: LCD $x(x-1)(x+1)$. Numerator $(x-1)+(x+1)=2x$, and then $x$ cancels: $\\dfrac{2}{(x-1)(x+1)}$ with $x\\ne0,\\pm1$.")); }
  { V2("B-48", (x, h) => (1 / (x + h) - 1 / x) / h, (x, h) => -1 / (x * (x + h)));
    q.push(mc("hard", "Simplify $\\dfrac{\\frac{1}{x+h}-\\frac{1}{x}}{h}$ (a difference quotient).", ["$\\dfrac{-1}{x(x+h)}$", "$\\dfrac{1}{x(x+h)}$", "$\\dfrac{-h}{x(x+h)}$", "$\\dfrac{-1}{h}$"], 0, "$\\dfrac1{x+h}-\\dfrac1x=\\dfrac{x-(x+h)}{x(x+h)}=\\dfrac{-h}{x(x+h)}$; dividing by $h$ cancels the $h$. (You will meet this again in calculus.)")); }
  q.push(num("hard", "A lens satisfies $\\dfrac1f=\\dfrac1{d_o}+\\dfrac1{d_i}$. If $f=8$ cm and $d_o=24$ cm, find $d_i$ in cm.", 12, 0, "$\\dfrac1{d_i}=\\dfrac18-\\dfrac1{24}=\\dfrac{3-1}{24}=\\dfrac1{12}$."));
  { verify("B-50", (x) => 1 / x - 1 / (x + 1), (x) => 1 / (x * (x + 1))); assert.strictEqual(1 / 1 - 1 / 2, 0.5);
    q.push(ms("hard", "Consider $\\dfrac1x-\\dfrac1{x+1}$. Which statements are true?", ["its restrictions are $x\\ne0,\\ -1$", "it equals $\\dfrac{1}{x(x+1)}$", "it is positive for every allowed $x$", "its value at $x=1$ is $\\dfrac12$"], [0, 1, 3], "$\\dfrac1{x(x+1)}$ is negative for $-1<x<0$, so it is not always positive.")); }
  q.push(tf("hard", "The LCD of two rational expressions is always the product of their denominators.", false, "Shared factors are counted once: the LCD of $x(x-1)$ and $(x-1)(x+1)$ is $x(x-1)(x+1)$, not the product."));
  q.push(tf("hard", "$\\dfrac{1}{x-3}+\\dfrac{1}{3-x}=0$ for every $x\\ne3$.", true, "$\\dfrac1{3-x}=-\\dfrac1{x-3}$."));
  { verify("B-53", (x) => 1 / (x - 2) + 1 / (x + 2), (x) => (2 * x) / (x * x - 4));
    q.push(fill("hard", "Simplify $\\dfrac{1}{x-2}+\\dfrac{1}{x+2}$: ___", ["2x/(x^2-4)", "2x/(x²-4)", "2x/((x-2)(x+2))", "2x/((x+2)(x-2))", "2x/(x^2 - 4)"], "$\\dfrac{(x+2)+(x-2)}{(x-2)(x+2)}$.")); }
  { const v = (49 - 24) / 144; q.push(num("hard", "If $a+b=7$ and $ab=12$, find $\\dfrac1{a^2}+\\dfrac1{b^2}$ correct to $3$ decimal places.", 0.174, 0.001, "$\\dfrac{a^2+b^2}{(ab)^2}=\\dfrac{(a+b)^2-2ab}{(ab)^2}=\\dfrac{49-24}{144}=\\dfrac{25}{144}\\approx0.174$.")); }
  { const f = (x) => (2 * x) / (x * x - 4); verify("B-55", (x) => 1 / (x - 2) + 1 / (x + 2), f);
    q.push({ ...mc("hard", "The graph has vertical asymptotes at $x=2$ and $x=-2$ and passes through the origin. Which expression is it?", ["$\\dfrac{1}{x-2}+\\dfrac{1}{x+2}$", "$\\dfrac{1}{x-2}-\\dfrac{1}{x+2}$", "$\\dfrac{2}{x^2-4}$", "$\\dfrac{1}{x-2}+\\dfrac{1}{x+2}+1$"], 0, "$\\dfrac{2x}{x^2-4}$ has numerator $0$ at $x=0$. $\\dfrac1{x-2}-\\dfrac1{x+2}=\\dfrac{4}{x^2-4}$ does not pass through the origin."),
      image: graphSvg({ fn: f, domain: [-6, -2.1], extraCurves: [{ fn: f, domain: [-1.9, 1.9], color: "#2563a0" }, { fn: f, domain: [2.1, 6], color: "#2563a0" }], xmin: -6, xmax: 6, ymin: -6, ymax: 6, title: "A rational graph" }) }); }
  { verify("B-56", (x) => 30 / (x - 3) + 30 / (x + 3), (x) => (60 * x) / (x * x - 9)); assert.ok(Math.abs(30 / 9 + 30 / 15 - 16 / 3) < 1e-12);
    q.push(num("hard", "A boat's speed in still water is $x$ km/h and the current is $3$ km/h. It travels $30$ km upstream and $30$ km back downstream, taking $\\dfrac{30}{x-3}+\\dfrac{30}{x+3}$ hours in total. Find the total time when $x=12$, correct to $3$ decimal places.", 5.333, 0.001, "$\\dfrac{30}{9}+\\dfrac{30}{15}=\\dfrac{10}{3}+2=\\dfrac{16}{3}\\approx5.333$ hours.")); }
  q.push(order("hard", "Put the steps in order to simplify $\\dfrac{\\frac1x-\\frac1y}{\\frac1x+\\frac1y}$.", ["Write the top over a common denominator: $\\dfrac{y-x}{xy}$", "Write the bottom over a common denominator: $\\dfrac{y+x}{xy}$", "Divide by multiplying by the reciprocal of the bottom", "Cancel the common factor $xy$: $\\dfrac{y-x}{y+x}$"]));
  { verify("B-58a", (x) => 1 / (x - 1) - 1 / (1 - x), (x) => 2 / (x - 1)); verify("B-58b", (x) => 1 / (x - 1) + 1 / (x + 1), (x) => (2 * x) / (x * x - 1)); verify("B-58c", (x) => x / (x - 1) - 1 / (x - 1), () => 1); verify("B-58d", (x) => 1 / (x * x) - 1 / x, (x) => (1 - x) / (x * x));
    q.push(match("hard", "Match each expression to its simplified form — watch the signs.", ["$\\dfrac{1}{x-1}-\\dfrac{1}{1-x}$", "$\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$", "$\\dfrac{x}{x-1}-\\dfrac{1}{x-1}$", "$\\dfrac{1}{x^2}-\\dfrac{1}{x}$"], ["$\\dfrac{2}{x-1}$", "$\\dfrac{2x}{x^2-1}$", "$1$", "$\\dfrac{1-x}{x^2}$"], [0, 1, 2, 3])); }
  { verify("B-59", (x) => 2 / (x - 3) - (x + 1) / (x - 3), (x) => (1 - x) / (x - 3));
    q.push(RC("hard", "Simplify $\\dfrac{2}{x-3}-\\dfrac{x+1}{x-3}$.", RE("-x+1", ["x-3"]), [RE("x+3", ["x-3"]), RE("x-1", ["x-3"]), RE("-x+1", ["x-3", "x-3"])], "$2-(x+1)=2-x-1=1-x$. Forgetting the bracket gives the wrong $x+3$.")); }
  { verify("B-60", (x) => 1 / (x * (x + 1)) + 1 / ((x + 1) * (x + 2)) + 1 / ((x + 2) * (x + 3)), (x) => 3 / (x * (x + 3))); assert.ok(Math.abs(3 / (2 * 5) - 0.3) < 1e-12);
    q.push(num("hard", "$\\dfrac{1}{x(x+1)}+\\dfrac{1}{(x+1)(x+2)}+\\dfrac{1}{(x+2)(x+3)}$ simplifies to a single fraction. Find its value at $x=2$.", 0.3, 0.001, "Telescoping: $\\left(\\tfrac1x-\\tfrac1{x+1}\\right)+\\left(\\tfrac1{x+1}-\\tfrac1{x+2}\\right)+\\left(\\tfrac1{x+2}-\\tfrac1{x+3}\\right)=\\dfrac1x-\\dfrac1{x+3}=\\dfrac{3}{x(x+3)}$. At $x=2$: $\\dfrac3{10}$.")); }
  const c = { easy: 0, medium: 0, hard: 0 }; for (const x of q) c[x.difficulty]++;
  assert.ok(q.length === 60 && c.easy === 20 && c.medium === 20 && c.hard === 20, `counts ${q.length} ${JSON.stringify(c)}`);
  return q;
}

// ───────────────────────── assignment ─────────────────────────
const aK1 = RE("4x+6", ["x-3"]); eqv("A-K1", minus(t("6x+5", "x-3"), t("2x-1", "x-3")), aK1);
const aK2 = RE("8x+5", ["6", "x", "x"]); verify("A-K2", (x) => 4 / (3 * x) + 5 / (6 * x * x), aK2.f);
const aK3 = RE("5x+5", ["x+4", "x-1"]); verify("A-K3", (x) => 3 / (x + 4) + 2 / (x - 1), aK3.f);
const aT1 = RE("x+4", ["x-3", "x+2", "x+3"]); verify("A-T1", (x) => 2 / (x * x - x - 6) - 1 / (x * x - 9), aT1.f);
verify("A-T2", (x) => 5 / ((x - 1) * (x + 4)), (x) => 1 / (x - 1) - 1 / (x + 4));
verify("A-C1", (x) => (5 * x + 2) / (x - 3) - (x - 4) / (x - 3), (x) => (4 * x + 6) / (x - 3));
verify("A-A1", (x) => 1 / (1 / x + 1 / (x + 1)), (x) => (x * (x + 1)) / (2 * x + 1)); assert.ok(Math.abs((5 * 6) / 11 - 30 / 11) < 1e-12 && Math.abs(1 / 5 + 1 / 6 - 11 / 30) < 1e-12);
verify("A-A2", (x) => 1 / (1 / x + 1 / (2 * x + 6)), (x) => (x * (2 * x + 6)) / (3 * x + 6)); assert.ok(Math.abs((3 * 12) / 15 - 2.4) < 1e-12);
verify("A-A3", (x) => 12 / (x - 2) + 12 / (x + 2), (x) => (24 * x) / (x * x - 4)); assert.ok(Math.abs(12 / 8 + 12 / 12 - 2.5) < 1e-12);

export const ASSIGNMENT = (() => {
  let n = 0;
  const sec = (arr) => arr.map((tt) => `${++n}. ${tt}`);
  const description = [
    "Knowledge & Understanding",
    ...sec([
      "Simplify $\\dfrac{6x+5}{x-3}-\\dfrac{2x-1}{x-3}$ and state the restriction.",
      "Simplify $\\dfrac{4}{3x}+\\dfrac{5}{6x^2}$ and state the restriction.",
      "Simplify $\\dfrac{3}{x+4}+\\dfrac{2}{x-1}$ and state the restrictions.",
    ]),
    "Thinking",
    ...sec([
      "Simplify $\\dfrac{2}{x^2-x-6}-\\dfrac{1}{x^2-9}$. Show the factored denominators, the LCD, and all restrictions.",
      "Find constants $A$ and $B$ so that $\\dfrac{5}{(x-1)(x+4)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+4}$. Verify your answer by adding the two fractions.",
    ]),
    "Communication",
    ...sec([
      "A student simplifies $\\dfrac{5x+2}{x-3}-\\dfrac{x-4}{x-3}$ as $\\dfrac{4x-2}{x-3}$. Find the error, explain why it happens, and give the correct answer. Check your answer with $x=5$.",
      "Explain why the LCD of $x^2-4x$ and $x^2-16$ is $x(x-4)(x+4)$ and not the product of the two denominators. Then explain what happens to the restrictions if the final answer simplifies.",
    ]),
    "Application",
    ...sec([
      "Mia can paint a fence in $x$ hours and Jon can paint it in $(x+1)$ hours. (a) Write, as one fraction, how long they take together. (b) If Mia takes $5$ hours, how long do they take together? (c) Check your answer using the rates $\\tfrac15$ and $\\tfrac16$ of the fence per hour.",
      "A boat can travel $x$ km/h in still water and the current is $2$ km/h. It goes $12$ km upstream and $12$ km back downstream. (a) Write the total time as a single simplified fraction. (b) Find the total time when $x=10$ and check it by computing each leg separately. (c) State the restrictions on $x$ that make sense for the situation.",
      "In an electrical circuit, two resistors of $x$ and $(2x+6)$ ohms are connected in parallel, so $\\dfrac1R=\\dfrac1x+\\dfrac1{2x+6}$. (a) Write $R$ as a single fraction. (b) Find $R$ when $x=3$, and show that it is smaller than both resistors.",
    ]),
  ].join("\n");
  return { title: `Assignment ${CODE} — ${TITLE}`, description };
})();
