// MCR3U 2.2 — Factoring Polynomials (rebuilt, deep version).
// Exports: lessonBlocks(), W22 (worksheet), LEARN22, bank(), ASSIGNMENT.
// Every factorisation is built with F(): the engine EXPANDS the factored form and the result is asserted against the
// hand-typed polynomial, so a factorisation that does not multiply back can never be published. Distractors are
// asserted to expand to something DIFFERENT, so a "wrong" choice is really wrong.
import assert from "node:assert";
import {
  html, gframe, ex, pr, qa, watchOut, EX, PR,
  P, padd, psub, pmul, pmulAll, ppow, pscale, peval, pdeg, ptex, prodTex, gx, verify,
  eqTable, areaModel, mistake, steps, callout, sameGraph, challenge, gview, graphSvg,
} from "./lib2.mjs";
import { pgf } from "./lib2tex.mjs";
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

export const CODE = "2.2";
export const TITLE = "Factoring Polynomials";
export const FULL_TITLE = `${CODE} ${TITLE}`;
const M = (s) => `\\(${s}\\)`;
const T = (s) => `$${s}$`;
const r = String.raw;

/** A factored form c·f1·f2·… . Returns { tex, poly, ps, c } where poly is the EXPANDED polynomial. */
function F(c, ...fs) {
  const ps = fs.map((f) => (typeof f === "string" ? P(f) : f));
  const groups = [];
  for (const p of ps) { const g = groups.find((q) => q[0].join() === p.join()); if (g) g[1]++; else groups.push([p, 1]); }
  const poly = pscale(pmulAll(...ps), c);
  const tex = prodTex(c, groups.map(([p, e]) => (e === 1 ? p : [p, e])));
  verify(`F ${tex}`, (x) => c * ps.reduce((a, p) => a * peval(p, x), 1), (x) => peval(poly, x));
  return { tex, poly, ps, c };
}
/** F() plus an assertion that it expands to the hand-typed polynomial. */
function FX(expanded, c, ...fs) { const f = F(c, ...fs); assert.strictEqual(ptex(f.poly), expanded, `factored ${f.tex} expands to ${ptex(f.poly)}, not ${expanded}`); return f; }
const tt = (s) => s.replace(/x/g, "t"); // show an x-polynomial in the variable t
const same = (a, b) => a.join() === b.join();
/** Two-variable identity, checked at several fixed y-values. */
function V2(name, f, g) { for (const y of [-2, 1.3, 3]) verify(`${name} y=${y}`, (x) => f(x, y), (x) => g(x, y)); }

let _pos = 0;
/** Multiple choice of factored forms; every wrong choice is checked to expand to something different. */
function MCF(diff, prompt, correct, wrongs, fb = "") {
  const tex = [correct.tex, ...wrongs.map((w) => w.tex)];
  assert.strictEqual(new Set(tex).size, tex.length, `duplicate choices in: ${prompt}`);
  for (const w of wrongs) assert.ok(!same(w.poly, correct.poly), `distractor ${w.tex} expands to the correct polynomial! (${prompt})`);
  const pos = _pos++ % tex.length, ch = wrongs.map((w) => T(w.tex)); ch.splice(pos, 0, T(correct.tex));
  return mc(diff, prompt, ch, pos, fb);
}
function MC(diff, prompt, correct, bad, fb = "") {
  assert.strictEqual(new Set([correct, ...bad]).size, bad.length + 1, `duplicate choices in: ${prompt}`);
  const pos = _pos++ % (bad.length + 1), ch = [...bad]; ch.splice(pos, 0, correct);
  return mc(diff, prompt, ch, pos, fb);
}
/** Accepted spellings for a fill-in: every order of the factors, with and without spaces, Unicode squares. */
function spell(f) {
  const groups = []; for (const p of f.ps) { const g = groups.find((q) => q[0].join() === p.join()); if (g) g[1]++; else groups.push([p, 1]); }
  const perms = (a) => (a.length <= 1 ? [a] : a.flatMap((x, i) => perms([...a.slice(0, i), ...a.slice(i + 1)]).map((p) => [x, ...p])));
  const out = new Set();
  for (const pm of perms(groups)) {
    const t = prodTex(f.c, pm.map(([p, e]) => (e === 1 ? p : [p, e])));
    out.add(t.replace(/ /g, "")); out.add(t); out.add(t.replace(/ /g, "").replace(/\^2/g, "²")); out.add(t.replace(/\^2/g, "²"));
  }
  return [...out];
}
/** Table of integer factor pairs of n with their sums; the row whose sum is `target` is highlighted. */
function pairsTable(n, target) {
  const pairs = [];
  for (let a = -Math.abs(n); a <= Math.abs(n); a++) { if (a === 0 || n % a !== 0) continue; const b = n / a; if (a <= b) pairs.push([a, b]); }
  const th = `style="border:1px solid #c7d2fe;padding:5px 10px;background:#eef2ff;color:#3730a3;"`, td = "border:1px solid #e2e8f0;padding:4px 10px;text-align:center;";
  return `<div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;font-size:14px;"><thead><tr><th ${th}>pair with product \\(${n}\\)</th><th ${th}>sum</th></tr></thead><tbody>${pairs.map(([u, v]) => { const s = u + v, hit = s === target; return `<tr style="background:${hit ? "#dcfce7" : "#fff"};font-weight:${hit ? 800 : 400};"><td style="${td}">\\(${u},\\ ${v}\\)</td><td style="${td}">\\(${s}\\)${hit ? " ✓" : ""}</td></tr>`; }).join("")}</tbody></table></div>`;
}

// ───────────────────────── lesson data ─────────────────────────
const e1 = FX("12x^3 - 18x^2 + 30x", 6, "x", "2x^2-3x+5");
const e2 = FX("3x^2 - 11x - 20", 1, "x-5", "3x+4");
const e3 = FX("2x^3 - 6x^2 + 5x - 15", 1, "x-3", "2x^2+5");
const e4 = FX("x^2 - x - 30", 1, "x-6", "x+5");
const e5 = FX("6x^2 + 7x - 20", 1, "2x+5", "3x-4");
const e6 = FX("25x^2 - 81", 1, "5x-9", "5x+9");
const e7 = FX("9x^2 - 42x + 49", 1, "3x-7", "3x-7");
const e8a = FX("4x^3 - 36x", 4, "x", "x-3", "x+3");
const e8b = FX("-2x^2 + 14x - 24", -2, "x-3", "x-4");
const e9 = FX("x^4 - 13x^2 + 36", 1, "x-2", "x+2", "x-3", "x+3");
const e10 = FX("2x^2 - 5x - 12", 1, "2x+3", "x-4");
const e11 = FX("2x^2 + 11x + 12", 1, "2x+3", "x+4");
const e12 = FX("x^2 + 2x - 48", 1, "x-6", "x+8");
const e13 = FX("x^3 - 27", 1, "x-3", "x^2+3x+9");
const e0 = FX("x^2 - x - 6", 1, "x-3", "x+2");
const p2 = FX("x^2 + 3x - 54", 1, "x+9", "x-6");
const p3 = FX("8x^2 - 10x - 3", 1, "4x+1", "2x-3");
const p5 = FX("3x^3 + 12x^2 - 2x - 8", 1, "x+4", "3x^2-2");
const p6 = FX("3x^4 - 48", 3, "x-2", "x+2", "x^2+4");
const p7 = FX("x^2 - 6x - 16", 1, "x-8", "x+2");
assert.strictEqual(ptex(psub(ppow(P("x-3"), 2), [25])), "x^2 - 6x - 16");
const p8 = FX("15x^2 + x - 6", 1, "5x-3", "3x+2");
const ch = FX("x^4 + 4", 1, "x^2+2x+2", "x^2-2x+2");
V2("L-P1", (x, y) => 20 * x * x * y - 35 * x * y * y, (x, y) => 5 * x * y * (4 * x - 7 * y));
V2("L-P4", (x, y) => 4 * x * x - 49 * y * y, (x, y) => (2 * x - 7 * y) * (2 * x + 7 * y));
assert.strictEqual(peval(P("15x^2+x-6"), 4), 238); assert.strictEqual((3 * 4 + 2) * (5 * 4 - 3), 238);
const zeroGraph = (f, zeros, ymin, ymax, title, bx = [-5, 6]) => sameGraph([`y = ${gx(f.poly)}`], [bx[0], bx[1], ymin, ymax], title, zeros.map((z) => ({ x: z, y: 0, t: `(${z}, 0)`, c: "#15803d" })));

const lessonHtml = r`<div class="lecture-box">
  <h1>🧩 Factoring Polynomials</h1>
  <p><strong>Overview.</strong> <strong>Factoring is expanding in reverse.</strong> Expanding turns a product into a sum of terms; factoring turns a sum back into a product. It is the most useful rewrite in the course: factors reveal the <em>zeros</em> of a function (where its graph crosses the \(x\)-axis), they let you <em>cancel</em> in rational expressions (2.3), and they turn equations into easy ones.</p>
  ${callout("The golden rule.", "Every factorisation can be <em>checked</em> by expanding it. If the expansion does not give back the original, the factorisation is wrong — so you never need to be unsure.", "green")}

  <h2>📌 Factors are the graph's x-intercepts</h2>
  <p>The expression \(x^2-x-6\) and the product \((x-3)(x+2)\) are equivalent, so they draw the <em>same parabola</em>. Look at where it meets the \(x\)-axis: at \(x=3\) and \(x=-2\) — the numbers that make a factor zero. Every factor \((x-a)\) of an expression gives an \(x\)-intercept at \(a\).</p>
  ${zeroGraph(e0, [-2, 3], -8, 6, "y = x² − x − 6 = (x − 3)(x + 2): factors ↔ zeros", [-4, 5])}
  <p>A wrong factorisation draws a <em>different</em> curve. Compare the three candidates numerically — only one matches \(x^2-x-6\) in every column:</p>
  ${eqTable([{ tex: "x^2-x-6", f: (x) => x * x - x - 6 }, { tex: "(x-3)(x+2)", f: (x) => (x - 3) * (x + 2) }, { tex: "(x+3)(x-2)", f: (x) => (x + 3) * (x - 2) }, { tex: "(x-6)(x+1)", f: (x) => (x - 6) * (x + 1) }], [-3, -2, 0, 3, 4], "Which factorisation really equals x² − x − 6?")}

  ${steps("Order of attack — always work down this list", [
    "<strong>Take out the greatest common factor (GCF)</strong> first — numbers <em>and</em> variables. It makes every later step smaller.",
    "<strong>Count the terms.</strong> Two terms → look for a <em>difference of squares</em>. Three terms → a trinomial. Four terms → try <em>grouping</em>.",
    "<strong>Trinomial \\(x^2+bx+c\\):</strong> find two numbers with <em>product \\(c\\)</em> and <em>sum \\(b\\)</em>. <strong>\\(ax^2+bx+c\\):</strong> find two numbers with product \\(ac\\) and sum \\(b\\), split the middle term, then group (decomposition).",
    "<strong>Factor completely.</strong> Check every factor: can it be factored again? (A factor like \\(x^2-4\\) can.)",
    "<strong>Check by expanding.</strong> Compare with the original.",
  ])}

  <h2>🔵 Examples</h2>
  ${ex("Example 1: Greatest common factor", `Factor ${M("12x^3-18x^2+30x")}.`, [
    `Numbers: \\(\\gcd(12,18,30)=6\\). Variables: the lowest power of \\(x\\) present in every term is \\(x\\). GCF \\(=6x\\).`,
    `Divide each term by \\(6x\\): \\(2x^2,\\ -3x,\\ 5\\).`,
  ], `${M(e1.tex)}. Check: \\(6x\\cdot2x^2=12x^3\\) ✓, \\(6x\\cdot(-3x)=-18x^2\\) ✓, \\(6x\\cdot5=30x\\) ✓.`)}
  ${ex("Example 2: A common binomial factor", `Factor ${M("3x(x-5)+4(x-5)")}.`, [
    `Both terms contain the whole bracket \\((x-5)\\). Treat it like a single number and take it out.`,
  ], `${M(e2.tex)}. (Expanded: \\(${ptex(e2.poly)}\\).)`)}
  ${ex("Example 3: Factoring by grouping (4 terms)", `Factor ${M("2x^3-6x^2+5x-15")}.`, [
    `Group in pairs: \\((2x^3-6x^2)+(5x-15)\\).`,
    `Take the GCF of each pair: \\(2x^2(x-3)+5(x-3)\\). The brackets match — that is the sign grouping works.`,
    `Take out the common bracket: \\((x-3)(2x^2+5)\\).`,
  ], `${M(e3.tex)}.`)}
  ${ex("Example 4: Simple trinomial \\(x^2+bx+c\\)", `Factor ${M("x^2-x-30")}.`, [
    `We need two numbers with <strong>product \\(-30\\)</strong> and <strong>sum \\(-1\\)</strong>. The negative product means one is positive and one negative. List the pairs:`,
    `The pair \\(-6\\) and \\(5\\) works. So \\(x^2-x-30=(x-6)(x+5)\\).`,
  ], `${M(e4.tex)}. Check: \\(x^2+5x-6x-30=x^2-x-30\\) ✓.`, pairsTable(-30, -1))}
  ${callout("Sign guide for \\(x^2+bx+c\\).", "If <strong>\\(c>0\\)</strong> the two numbers have the <em>same sign</em> as \\(b\\) (both + if \\(b>0\\), both − if \\(b<0\\)). If <strong>\\(c<0\\)</strong> they have <em>opposite signs</em>, and the larger one (in size) takes the sign of \\(b\\).", "blue")}
  ${ex("Example 5: Complex trinomial \\(ax^2+bx+c\\) — decomposition", `Factor ${M("6x^2+7x-20")}.`, [
    `Multiply \\(a\\cdot c=6\\times(-20)=-120\\). Find two numbers with product \\(-120\\) and sum \\(+7\\): \\(15\\) and \\(-8\\).`,
    `Split the middle term: \\(6x^2+15x-8x-20\\).`,
    `Group: \\(3x(2x+5)-4(2x+5)\\). The brackets match ✓. Take them out: \\((2x+5)(3x-4)\\).`,
  ], `${M(e5.tex)}.`, areaModel(P("2x+5"), P("3x-4"), "Area-model check: the four boxes are 6x², −8x, 15x, −20"))}
  ${ex("Example 6: Difference of squares", `Factor ${M("25x^2-81")}.`, [
    `Both terms are perfect squares: \\(25x^2=(5x)^2\\) and \\(81=9^2\\), separated by a minus sign.`,
    `Use \\(a^2-b^2=(a-b)(a+b)\\) with \\(a=5x,\\ b=9\\).`,
  ], `${M(e6.tex)}. A <em>sum</em> of squares such as \\(25x^2+81\\) cannot be factored over the integers.`)}
  ${ex("Example 7: Perfect-square trinomial", `Factor ${M("9x^2-42x+49")}.`, [
    `First and last terms are squares: \\((3x)^2\\) and \\(7^2\\). Is the middle term \\(2(3x)(7)=42x\\)? Yes (with a minus sign).`,
    `So it is \\((a-b)^2\\) with \\(a=3x,\\ b=7\\).`,
  ], `${M(e7.tex)}. (A perfect square has a double zero: the parabola <em>touches</em> the \\(x\\)-axis at \\(x=\\tfrac73\\).)`)}
  ${ex("Example 8: Factor completely — GCF first", `Factor (a) ${M("4x^3-36x")} and (b) ${M("-2x^2+14x-24")}.`, [
    `(a) GCF \\(4x\\): \\(4x(x^2-9)\\). Now \\(x^2-9\\) is a difference of squares: \\(4x(x-3)(x+3)\\).`,
    `(b) Take out \\(-2\\) (making the leading coefficient positive helps): \\(-2(x^2-7x+12)\\). Numbers with product \\(12\\) and sum \\(-7\\): \\(-3,-4\\).`,
  ], `(a) ${M(e8a.tex)}; (b) ${M(e8b.tex)}. Stopping at \\(4x(x^2-9)\\) would be <em>incomplete</em>.`)}
  ${ex("Example 9: Quadratic form — a trinomial in disguise", `Factor ${M("x^4-13x^2+36")}.`, [
    `Let \\(u=x^2\\). Then the expression is \\(u^2-13u+36\\), which factors as \\((u-4)(u-9)\\).`,
    `Replace \\(u\\) by \\(x^2\\): \\((x^2-4)(x^2-9)\\). Both are differences of squares.`,
  ], `${M(e9.tex)}. Four linear factors → four \\(x\\)-intercepts: \\(\\pm2,\\ \\pm3\\).`)}
  ${ex("Example 10: From a factorisation to the graph", `Factor ${M("2x^2-5x-12")} and use the factors to sketch the graph.`, [
    `\\(ac=-24\\); numbers with sum \\(-5\\): \\(3\\) and \\(-8\\). Split: \\(2x^2+3x-8x-12=x(2x+3)-4(2x+3)\\).`,
    `Result \\((2x+3)(x-4)\\). Set each factor to \\(0\\): \\(x=-\\tfrac32\\) and \\(x=4\\) are the \\(x\\)-intercepts; the \\(y\\)-intercept is the constant \\(-12\\).`,
  ], `${M(e10.tex)}; the parabola opens up (\\(a=2>0\\)) with the intercepts shown.`, zeroGraph(e10, [-1.5, 4], -16, 10, "y = (2x + 3)(x − 4)", [-3, 6]))}
  ${ex("Example 11: Dimensions from an area", `A rectangular patio has area \\(2x^2+11x+12\\) square metres and width \\((x+4)\\) m. Find its length.`, [
    `Area \\(=\\) length \\(\\times\\) width, so factor the area: \\(ac=24\\), numbers with sum \\(11\\): \\(3\\) and \\(8\\).`,
    `\\(2x^2+3x+8x+12=x(2x+3)+4(2x+3)=(2x+3)(x+4)\\).`,
  ], `The length is \\((2x+3)\\) m. For \\(x=2\\): a \\(7\\) m by \\(6\\) m patio, area \\(42=8+22+12\\) ✓.`)}
  ${ex("Example 12: A difference of squares with a bracket", `Factor ${M("(x+1)^2-49")}.`, [
    `Treat \\((x+1)\\) as one block: \\(a=x+1,\\ b=7\\). Then \\(a^2-b^2=(a-b)(a+b)\\).`,
    `\\((x+1-7)(x+1+7)\\).`,
  ], `${M(e12.tex)}. Expanding \\((x+1)^2-49\\) gives \\(${ptex(e12.poly)}\\), so the two forms agree ✓.`)}
  ${ex("Example 13: Going further — sum and difference of cubes", `Factor ${M("x^3-27")}.`, [
    `\\(x^3-27=x^3-3^3\\). The pattern is \\(a^3-b^3=(a-b)(a^2+ab+b^2)\\) and \\(a^3+b^3=(a+b)(a^2-ab+b^2)\\).`,
  ], `${M(e13.tex)}. The quadratic factor \\(x^2+3x+9\\) has no integer factors, so we stop. (Enrichment: you will need this for the Factor Theorem in Grade 12.)`)}

  ${mistake("\\(x^2-25=(x-5)^2\\)", "Expanding \\((x-5)^2\\) gives \\(x^2-10x+25\\) — the middle term is there and the sign of 25 is wrong. At \\(x=0\\): \\(0-25=-25\\) but \\((0-5)^2=25\\).", "\\(x^2-25=(x-5)(x+5)\\): a <em>difference</em> of squares has two <em>different</em> brackets.")}
  ${mistake("\\(2x^2-8=(2x-4)(x+2)\\)", "That is a valid rewrite — expanding gives \\(2x^2-8\\) — but it is <em>not factored completely</em>: \\(2x-4\\) still has the common factor \\(2\\), and \\(x^2-4\\) is a difference of squares.", "\\(2x^2-8=2(x^2-4)=2(x-2)(x+2)\\). Always take the GCF <em>first</em>.")}
  ${watchOut([
    "<strong>\\(x^2+25\\) does not factor</strong> (over the integers). Only a <em>difference</em> of squares does.",
    "When factoring \\(-x^2+5x+14\\), take out \\(-1\\) first: \\(-(x^2-5x-14)\\) — otherwise the signs get tangled.",
    "A GCF of a whole term is <strong>1</strong>, not nothing: \\(6x^2+9x\\) divided by \\(3x\\) leaves \\(2x+3\\), and \\(3x\\) divided by \\(3x\\) leaves \\(1\\).",
    "Grouping only works when the two brackets <em>match exactly</em>. If they don't, try a different pairing — or factor out \\(-1\\) from one pair.",
    "Always check: expand your answer, or test one number such as \\(x=2\\) in both forms.",
  ])}

  <h2>🟡 Practice Questions</h2>
  ${pr(1, "Knowledge", `Factor ${M("20x^2y-35xy^2")}.`, `GCF \\(=5xy\\): ${M("5xy(4x-7y)")}.`)}
  ${pr(2, "Knowledge", `Factor ${M("x^2+3x-54")}.`, `Product \\(-54\\), sum \\(+3\\): \\(9\\) and \\(-6\\). ${M(p2.tex)}.`)}
  ${pr(3, "Knowledge", `Factor ${M("8x^2-10x-3")}.`, `\\(ac=-24\\), sum \\(-10\\): \\(-12\\) and \\(2\\). \\(8x^2-12x+2x-3=4x(2x-3)+1(2x-3)\\). ${M(p3.tex)}.`)}
  ${pr(4, "Thinking", `Factor ${M("4x^2-49y^2")}.`, `Difference of squares with \\(a=2x,\\ b=7y\\): ${M("(2x-7y)(2x+7y)")}.`)}
  ${pr(5, "Thinking", `Factor ${M("3x^3+12x^2-2x-8")} by grouping.`, `\\(3x^2(x+4)-2(x+4)\\). ${M(p5.tex)}.`)}
  ${pr(6, "Thinking", `Factor completely ${M("3x^4-48")}.`, `\\(3(x^4-16)=3(x^2-4)(x^2+4)\\), and \\(x^2-4\\) factors again: ${M(p6.tex)}.`)}
  ${pr(7, "Thinking", `Factor ${M("(x-3)^2-25")} and expand your answer to check.`, `\\(a=x-3,\\ b=5\\): \\((x-3-5)(x-3+5)\\) = ${M(p7.tex)}, which expands to \\(${ptex(p7.poly)}\\) ✓.`)}
  ${pr(8, "Application", `A rectangle has area \\(15x^2+x-6\\) (in cm²). Factor to find expressions for its sides. If \\(x=4\\), what are the dimensions and the area?`, `\\(15x^2+x-6=${p8.tex}\\). For \\(x=4\\): \\(17\\) cm by \\(14\\) cm; area \\(238\\) cm² (and \\(15\\cdot16+4-6=238\\) ✓).`)}
  ${challenge("Factor \\(x^4+4\\). (Hint: a sum of squares can sometimes be rewritten as a <em>difference</em> of squares by adding and subtracting a middle term.)", `\\(x^4+4=(x^4+4x^2+4)-4x^2=(x^2+2)^2-(2x)^2=(x^2+2-2x)(x^2+2+2x)\\). So ${M(ch.tex)} — a sum of squares that <em>does</em> factor.`)}

  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: Why always take the GCF first?", "It shrinks the numbers and keeps the leading coefficient simple; many trinomials and differences of squares only appear <em>after</em> it is removed.")}
  ${qa("Q2: How do I know when I have factored completely?", "When none of the factors can be factored again. Check each bracket: is it a difference of squares? a trinomial? has a common factor?")}
  ${qa("Q3: What do the factors tell me about the graph?", "Each factor \\((x-a)\\) gives an \\(x\\)-intercept at \\(x=a\\). A repeated factor means the curve only touches the axis there.")}
  ${qa("Q4: Can every trinomial be factored?", "No. If no pair of integers has the right product and sum, the trinomial is <em>prime</em> over the integers, e.g. \\(x^2+x+1\\).")}
  ${qa("Q5: How do I factor when the leading coefficient is negative?", "Take out \\(-1\\) (or the negative GCF) first, then factor the rest as usual: \\(-x^2+5x+14=-(x^2-5x-14)=-(x-7)(x+2)\\).")}
  ${qa("Q6: How do I check a factorisation?", "Expand it and compare with the original, or substitute any number into both forms.")}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

// ───────────────────────── worksheet ─────────────────────────
const w2 = FX("10x^2 - x - 3", 1, "2x+1", "5x-3");
const w3 = FX("6x^3 + 9x^2 - 10x - 15", 1, "2x+3", "3x^2-5");
const w4 = FX("x^2 - 2x - 48", 1, "x-8", "x+6");
const w5 = FX("10x^2 - x - 21", 1, "5x+7", "2x-3");
const w6a = FX("64x^2 - 49", 1, "8x-7", "8x+7");
const w6b = FX("16x^2 + 40x + 25", 1, "4x+5", "4x+5");
const w7a = FX("5x^3 - 45x", 5, "x", "x-3", "x+3");
const w7b = FX("-3x^2 + 3x + 36", -3, "x-4", "x+3");
const w8 = FX("x^4 - 5x^2 + 4", 1, "x-1", "x+1", "x-2", "x+2");
const w9 = FX("-5x^2 + 15x + 20", -5, "x-4", "x+1");
const w10 = FX("x^2 - 2x - 15", 1, "x-5", "x+3");
V2("W-E1", (x, y) => 18 * x ** 3 * y - 24 * x * x * y * y + 6 * x * y, (x, y) => 6 * x * y * (3 * x * x - 4 * x * y + 1));
const q1 = FX("14x^2 - 21x", 7, "x", "2x-3");
V2("W-Q2", (a, b) => 12 * a * a * b ** 3 - 18 * a * b * b + 6 * a * b, (a, b) => 6 * a * b * (2 * a * b * b - 3 * b + 1));
const q3 = FX("x^3 + 5x^2 - 4x - 20", 1, "x+5", "x-2", "x+2");
const q4 = FX("x^2 + 11x + 28", 1, "x+4", "x+7");
const q5 = FX("x^2 - 3x - 40", 1, "x-8", "x+5");
const q6 = FX("6x^2 - 17x + 12", 1, "2x-3", "3x-4");
const q7 = FX("12x^2 + 5x - 2", 1, "4x-1", "3x+2");
const q8a = FX("81x^2 - 16", 1, "9x-4", "9x+4");
const q8b = FX("25x^2 + 30x + 9", 1, "5x+3", "5x+3");
const q9 = FX("2x^3 - 18x", 2, "x", "x-3", "x+3");
const q10 = FX("x^4 - 17x^2 + 16", 1, "x-1", "x+1", "x-4", "x+4");
const q11 = FX("x^2 - 4x - 32", 1, "x-8", "x+4");
assert.strictEqual(ptex(psub(ppow(P("x-2"), 2), [36])), "x^2 - 4x - 32");
const q12 = FX("-5x^2 + 10x + 15", -5, "x-3", "x+1");
const q14 = FX("x^4 + x^2 + 1", 1, "x^2+x+1", "x^2-x+1");
assert.strictEqual(peval(q12.poly, 1), 20);

export const W22 = {
  code: "2.2", unit: "2: Equivalent Algebraic Expressions", title: "Factoring Polynomials",
  intro: r`\textbf{Factoring is expanding in reverse}: it turns a sum of terms into a product. Factors are useful because each factor $(x-a)$ gives an $x$-intercept of the graph at $x=a$, and because they let us cancel in fractions. \textbf{Every factorisation can be checked by expanding it.}`,
  ideas: [
    r`\textbf{Order of attack:} (1) GCF first; (2) count the terms --- 2: difference of squares; 3: trinomial; 4: grouping; (3) factor \textbf{completely}; (4) check by expanding.`,
    r`\textbf{Simple trinomial} $x^2+bx+c$: two numbers with product $c$ and sum $b$. \textbf{Complex trinomial} $ax^2+bx+c$: product $ac$, sum $b$; split the middle term and group.`,
    r`\textbf{Patterns:} $a^2-b^2=(a-b)(a+b)$ and $a^2\pm2ab+b^2=(a\pm b)^2$. A \emph{sum} of squares $a^2+b^2$ does not factor over the integers.`,
    r`\textbf{Quadratic form:} $x^4-13x^2+36$ is a trinomial in $u=x^2$; factor it, then factor again.`,
    r`\textbf{Graph link:} the factored form shows the $x$-intercepts at a glance: $y=(x-5)(x+3)$ crosses at $5$ and $-3$.`,
  ],
  examples: [
    { t: "Greatest common factor (two variables)", body: String.raw`Factor $18x^3y-24x^2y^2+6xy$.\soln Numbers: $\gcd(18,24,6)=6$; variables: $xy$ is in every term. GCF $=6xy$. \\ Divide each term: $3x^2,\ -4xy,\ 1$. \\ $=6xy(3x^2-4xy+1)$ --- note the last term leaves a \emph{1}, not nothing.` },
    { t: "Common binomial factor", body: String.raw`Factor $5x(2x+1)-3(2x+1)$.\soln The bracket $(2x+1)$ appears in both terms: take it out. \\ $=${w2.tex}$ \quad (expanded: $${ptex(w2.poly)}$).` },
    { t: "Grouping", body: String.raw`Factor $6x^3+9x^2-10x-15$.\soln Pair the terms: $(6x^3+9x^2)+(-10x-15)=3x^2(2x+3)-5(2x+3)$. \\ The brackets match, so take out $(2x+3)$: $${w3.tex}$. \\ Note the $-5$: taking out $-5$ from $-10x-15$ keeps the brackets equal.` },
    { t: "Simple trinomial", body: String.raw`Factor $x^2-2x-48$.\soln Product $-48$, sum $-2$. Opposite signs; the larger number is negative: $-8$ and $6$. \\ $=${w4.tex}$. Check: $x^2+6x-8x-48$ \checkmark.` },
    { t: "Complex trinomial by decomposition", body: String.raw`Factor $10x^2-x-21$.\soln $ac=-210$; we need product $-210$ and sum $-1$: $14$ and $-15$. \\ $10x^2+14x-15x-21=2x(5x+7)-3(5x+7)$. \\ $=${w5.tex}$.` },
    { t: "Difference of squares and perfect squares", body: String.raw`Factor (a) $64x^2-49$ \quad (b) $16x^2+40x+25$.\soln (a) $(8x)^2-7^2=${w6a.tex}$. \\ (b) $(4x)^2$, $5^2$ and $2(4x)(5)=40x$ \checkmark, so $=${w6b.tex}$.` },
    { t: "Factor completely", body: String.raw`Factor (a) $5x^3-45x$ \quad (b) $-3x^2+3x+36$.\soln (a) $5x(x^2-9)=${w7a.tex}$. \\ (b) Take out $-3$: $-3(x^2-x-12)$; product $-12$, sum $-1$: $-4,3$. $=${w7b.tex}$.` },
    { t: "Quadratic form", body: String.raw`Factor $x^4-5x^2+4$.\soln Let $u=x^2$: $u^2-5u+4=(u-1)(u-4)$. \\ Back-substitute: $(x^2-1)(x^2-4)=${w8.tex}$.` },
    { t: "Application: when does the ball land?", body: String.raw`A ball's height is $h=-5t^2+15t+20$ (metres, $t$ in seconds). When does it hit the ground?\soln Factor: $h=${tt(w9.tex)}$. \\ $h=0$ when $t-4=0$ or $t+1=0$: $t=4$ or $t=-1$. Time cannot be negative, so the ball lands at $t=4$ s. \\ The zeros $-1$ and $4$ are symmetric about $t=1.5$, so the maximum is at $t=1.5$ s.` },
    { t: "Reading a graph from the factored form", body: String.raw`Factor $y=x^2-2x-15$ and describe its graph.\soln $y=${w10.tex}$: $x$-intercepts $5$ and $-3$; $y$-intercept $-15$; opens up. The vertex lies halfway between the intercepts, at $x=1$, where $y=-16$.` +
      pgf({ curves: [{ f: "x^2-2*x-15" }], bounds: [-5, 7, -18, 10], dots: [[5, 0, "(5,0)"], [-3, 0, "(-3,0)"], [0, -15, "(0,-15)"], [1, -16, "(1,-16)"]], xt: 1, yt: 4, note: "The factors give the intercepts; symmetry gives the vertex." }) },
  ],
  questions: [
    { ask: String.raw`Factor $14x^2-21x$.`, ws: "1.6cm" },
    { ask: String.raw`Factor $12a^2b^3-18ab^2+6ab$.`, ws: "2.2cm" },
    { ask: String.raw`Factor completely $x^3+5x^2-4x-20$ (use grouping, then look again).`, ws: "3cm" },
    { ask: String.raw`Factor (a) $x^2+11x+28$ \quad (b) $x^2-3x-40$. Say why the signs in (b) are opposite.`, ws: "2.8cm" },
    { ask: String.raw`Factor $6x^2-17x+12$ by decomposition. Show the split of the middle term.`, ws: "3.4cm" },
    { ask: String.raw`Factor $12x^2+5x-2$ and check by expanding.`, ws: "3.4cm" },
    { ask: String.raw`Factor (a) $81x^2-16$ \quad (b) $25x^2+30x+9$.`, ws: "2.6cm" },
    { ask: String.raw`Factor completely (a) $2x^3-18x$ \quad (b) $x^4-17x^2+16$.`, ws: "3.4cm" },
    { ask: String.raw`Factor $(x-2)^2-36$ and simplify. Then check by expanding the original.`, ws: "3cm" },
    { ask: String.raw`A ball's height is $h=-5t^2+10t+15$. Factor, find when it lands, and find its maximum height. (The maximum is halfway between the zeros.)`, ws: "4cm" },
    { ask: String.raw`A rectangle has area $x^2+14x+48$ and width $x+6$. Find its length, then its perimeter when $x=3$.`, ws: "3.4cm" },
    { ask: String.raw`A student claims that $x^2+16=(x+4)(x-4)$. Test the claim with $x=1$, then explain why $x^2+16$ cannot be written as $(x+a)(x+b)$ for integers $a,b$.`, ws: "3.6cm" },
    { ask: String.raw`Sketch $y=(x+2)(x-1)(x-4)$ by finding its $x$-intercepts and $y$-intercept. Does the graph go up or down on the far right? On the far left?`, grid: true },
    { ask: String.raw`Show that $x^4+x^2+1=(x^2+x+1)(x^2-x+1)$. (Hint: write $x^4+x^2+1=(x^2+1)^2-x^2$.)`, ws: "3.6cm", challenge: true },
  ],
  answers: [
    String.raw`$${q1.tex}$.`,
    String.raw`$6ab(2ab^2-3b+1)$. Check: $6ab\cdot2ab^2=12a^2b^3$ \checkmark.`,
    String.raw`$x^2(x+5)-4(x+5)=(x+5)(x^2-4)=${q3.tex}$.`,
    String.raw`(a) $${q4.tex}$ \quad (b) $${q5.tex}$. In (b) the product $-40$ is negative, so one number is positive and one negative; their sum is $-3$, so the larger in size ($-8$) is negative.`,
    String.raw`$ac=72$, sum $-17$: $-8$ and $-9$. $6x^2-8x-9x+12=2x(3x-4)-3(3x-4)=${q6.tex}$.`,
    String.raw`$ac=-24$, sum $5$: $8$ and $-3$. $12x^2+8x-3x-2=4x(3x+2)-1(3x+2)=${q7.tex}$.`,
    String.raw`(a) $${q8a.tex}$ \quad (b) $${q8b.tex}$.`,
    String.raw`(a) $${q9.tex}$ \quad (b) $${q10.tex}$.`,
    String.raw`$(x-2-6)(x-2+6)=${q11.tex}$. Expanding: $x^2-4x+4-36=x^2-4x-32$ \checkmark.`,
    String.raw`$h=${tt(q12.tex)}$. Lands at $t=3$ s (the other zero $-1$ is rejected). Zeros $-1$ and $3$, so the maximum is at $t=1$: $h(1)=-5+10+15=20$ m.`,
    String.raw`$x^2+14x+48=(x+6)(x+8)$: the length is $x+8$. For $x=3$: $9$ by $11$, perimeter $2(9+11)=40$.`,
    String.raw`At $x=1$: $1+16=17$ but $(1+4)(1-4)=-15$, so the claim is false. For $(x+a)(x+b)=x^2+(a+b)x+ab$ we would need $a+b=0$ and $ab=16$; but $a+b=0$ means $b=-a$, so $ab=-a^2\le0$, never $16$.`,
    String.raw`Intercepts: $x=-2,\ 1,\ 4$; $y$-intercept: $(2)(-1)(-4)=8$. The leading term is $x^3$, so the right end goes \emph{up} and the left end goes \emph{down}.`,
    String.raw`$(x^2+1)^2-x^2=x^4+2x^2+1-x^2=x^4+x^2+1$, and it is a difference of squares: $(x^2+1-x)(x^2+1+x)=${q14.tex}$.`,
  ],
};

export const LEARN22 = [
  ["Factoring undoes expanding", r`Factoring writes a sum as a product. Always \textbf{check by expanding}. Start with the \textbf{GCF}, then count terms: 2 terms $\to$ difference of squares; 3 terms $\to$ trinomial; 4 terms $\to$ grouping. Keep going until no factor can be factored again.`],
  ["Trinomials", r`$x^2+bx+c$: find two numbers with product $c$ and sum $b$. $ax^2+bx+c$: find two numbers with product $ac$ and sum $b$, split the middle term, and group. If no pair works, the trinomial is prime.`],
  ["Why factors matter", r`Each factor $(x-a)$ means the graph crosses the $x$-axis at $a$. Factors also let you cancel in rational expressions (2.3) and solve equations (the zero-product property).`],
];

// ───────────────────────── question bank (60) ─────────────────────────
export function bank() {
  const q = [];
  // ── easy (20) ──
  q.push(MC("easy", "What is the greatest common factor of $12x^3$ and $18x^2$?", "$6x^2$", ["$6x$", "$12x^2$", "$3x^2$"], "Largest number dividing both: 6. Lowest power of $x$: $x^2$."));
  q.push(MCF("easy", "Factor $5x^2+15x$.", FX("5x^2 + 15x", 5, "x", "x+3"), [F(5, "x", "x+15"), F(5, "x+3"), F(5, "x", "x-3")], "GCF $=5x$; dividing leaves $x+3$."));
  q.push(MCF("easy", "Factor $x^2+7x+12$.", FX("x^2 + 7x + 12", 1, "x+3", "x+4"), [F(1, "x+2", "x+6"), F(1, "x-3", "x-4"), F(1, "x+1", "x+12")], "Product $12$, sum $7$: $3$ and $4$."));
  q.push(MCF("easy", "Factor $x^2-9x+20$.", FX("x^2 - 9x + 20", 1, "x-4", "x-5"), [F(1, "x+4", "x+5"), F(1, "x-4", "x+5"), F(1, "x-2", "x-10")], "Product $20$ and sum $-9$: both numbers negative, $-4$ and $-5$."));
  q.push(MCF("easy", "Factor $x^2+x-20$.", FX("x^2 + x - 20", 1, "x+5", "x-4"), [F(1, "x-5", "x+4"), F(1, "x+5", "x+4"), F(1, "x+10", "x-2")], "Product $-20$, sum $+1$: $5$ and $-4$."));
  q.push(MCF("easy", "Factor $x^2-49$.", FX("x^2 - 49", 1, "x-7", "x+7"), [F(1, "x-7", "x-7"), F(1, "x+7", "x+7"), F(1, "x-49", "x+1")], "Difference of squares."));
  q.push(MCF("easy", "Factor $x^2+10x+25$.", FX("x^2 + 10x + 25", 1, "x+5", "x+5"), [F(1, "x+25", "x+1"), F(1, "x+5", "x-5"), F(1, "x-5", "x-5")], "Perfect square: $(x+5)^2$."));
  q.push(num("easy", "Two numbers have product $18$ and sum $9$. What is the larger number?", 6, 0, "$3$ and $6$: $3\\cdot6=18$ and $3+6=9$."));
  q.push(num("easy", "What is the numerical part of the GCF of $24x^2y$ and $36xy^2$?", 12, 0, "$\\gcd(24,36)=12$ (the full GCF is $12xy$)."));
  { const f = FX("x^2 - 100", 1, "x-10", "x+10"); q.push(fill("easy", "Factor $x^2-100$: ___", spell(f), "Difference of squares.")); }
  { const f = FX("3x + 12", 3, "x+4"); q.push(fill("easy", "Factor $3x+12$: ___", spell(f), "GCF $=3$.")); }
  q.push(tf("easy", "$x^2+9=(x+3)(x-3)$.", false, "$(x+3)(x-3)=x^2-9$. A sum of squares does not factor."));
  q.push(tf("easy", "You can check a factorisation by expanding it and comparing with the original.", true));
  { assert.deepStrictEqual(pmul(P("2x-3"), P("2x-3")), P("4x^2-12x+9"));
    q.push(ms("easy", "Which of these trinomials are perfect squares?", ["$x^2+6x+9$", "$x^2+6x+8$", "$4x^2-12x+9$", "$x^2-4x-4$"], [0, 2], "$(x+3)^2=x^2+6x+9$ and $(2x-3)^2=4x^2-12x+9$.")); }
  { const f = FX("x^2 - 5x - 14", 1, "x-7", "x+2"); q.push(ms("easy", "Which are factors of $x^2-5x-14$?", ["$(x-7)$", "$(x+2)$", "$(x+7)$", "$(x-2)$"], [0, 1], `$x^2-5x-14=${f.tex}$.`)); }
  { const a = F(1, "x-1", "x+1"), b = F(1, "x+1", "x+1"), c = F(1, "x-1", "x-1"), d = F(1, "x", "x+1");
    q.push(match("easy", "Match each expression to its factored form.", ["$x^2-1$", "$x^2+2x+1$", "$x^2-2x+1$", "$x^2+x$"], [T(a.tex), T(b.tex), T(c.tex), T(d.tex)], [0, 1, 2, 3])); }
  { const f = FX("x^2 - x - 6", 1, "x+2", "x-3");
    q.push({ ...MCF("easy", "The graph of $y=x^2-x-6$ is shown. Which factored form is equivalent?", f, [F(1, "x-2", "x+3"), F(1, "x+2", "x+3"), F(1, "x-1", "x+6")], "The graph crosses the $x$-axis at $-2$ and $3$, so the factors are $(x+2)$ and $(x-3)$."),
      image: graphSvg({ fn: (x) => peval(f.poly, x), xmin: -4, xmax: 5, ymin: -8, ymax: 6, points: [{ x: -2, y: 0, label: "(-2, 0)", color: "#1e293b", dy: 16 }, { x: 3, y: 0, label: "(3, 0)", color: "#1e293b", dy: 16 }], title: "y = x² − x − 6" }) }); }
  q.push(MC("easy", "Which expression is a difference of squares?", "$x^2-36$", ["$x^2+36$", "$x^3-36$", "$x^2-35$"], "Both terms must be perfect squares and the sign between them negative."));
  q.push(num("easy", "Since $x^2-5x+6=(x-2)(x-3)$, find the value of $x^2-5x+6$ at $x=5$.", 6, 0, "$(5-2)(5-3)=3\\cdot2=6$; also $25-25+6=6$."));
  q.push(order("easy", "Put the steps in order to factor $x^2+5x+6$.", ["Find two numbers with product $6$ and sum $5$", "The numbers are $2$ and $3$", "Write $(x+2)(x+3)$", "Expand $(x+2)(x+3)$ to check"]));

  // ── medium (20) ──
  q.push(MCF("medium", "Factor $6x^2-x-12$.", FX("6x^2 - x - 12", 1, "2x-3", "3x+4"), [F(1, "2x+3", "3x-4"), F(1, "6x-3", "x+4"), F(1, "2x-4", "3x+3")], "$ac=-72$; sum $-1$: $-9$ and $8$. $6x^2+8x-9x-12=2x(3x+4)-3(3x+4)$."));
  q.push(MCF("medium", "Factor $15x^2+22x+8$.", FX("15x^2 + 22x + 8", 1, "3x+2", "5x+4"), [F(1, "3x+4", "5x+2"), F(1, "15x+2", "x+4"), F(1, "3x+8", "5x+1")], "$ac=120$; sum $22$: $10$ and $12$."));
  q.push(MCF("medium", "Factor $2x^2-7x+3$.", FX("2x^2 - 7x + 3", 1, "2x-1", "x-3"), [F(1, "2x+1", "x+3"), F(1, "2x-3", "x-1"), F(1, "2x-1", "x+3")], "$ac=6$; sum $-7$: $-1$ and $-6$."));
  q.push(MCF("medium", "Factor $4x^2-25$.", FX("4x^2 - 25", 1, "2x-5", "2x+5"), [F(1, "4x-5", "x+5"), F(1, "2x-5", "2x-5"), F(1, "2x+5", "2x+5")], "$(2x)^2-5^2$."));
  q.push(MCF("medium", "Factor $9x^2+30x+25$.", FX("9x^2 + 30x + 25", 1, "3x+5", "3x+5"), [F(1, "3x-5", "3x-5"), F(1, "9x+5", "x+5"), F(1, "3x+5", "3x-5")], "$(3x)^2+2(3x)(5)+5^2$."));
  q.push(MCF("medium", "Factor $x^3+3x^2-2x-6$ by grouping.", FX("x^3 + 3x^2 - 2x - 6", 1, "x+3", "x^2-2"), [F(1, "x-3", "x^2+2"), F(1, "x+3", "x^2+2"), F(1, "x+2", "x^2-3")], "$x^2(x+3)-2(x+3)=(x+3)(x^2-2)$."));
  q.push(MCF("medium", "Factor completely $3x^2-15x+18$.", FX("3x^2 - 15x + 18", 3, "x-2", "x-3"), [F(3, "x-2", "x+3"), F(1, "x-6", "x-3"), F(3, "x+2", "x+3")], "GCF $3$ first: $3(x^2-5x+6)$."));
  q.push(MCF("medium", "Factor $-x^2-4x+12$.", FX("-x^2 - 4x + 12", -1, "x+6", "x-2"), [F(-1, "x-6", "x+2"), F(1, "x+6", "x-2"), F(-1, "x+6", "x+2")], "Take out $-1$: $-(x^2+4x-12)=-(x+6)(x-2)$."));
  q.push(num("medium", "If $x^2+kx-18=(x+9)(x-2)$, find $k$.", 7, 0, "$9+(-2)=7$."));
  { const f = FX("6x^2 - 7x - 5", 1, "3x-5", "2x+1"); q.push(num("medium", "If $6x^2+bx-5=(3x-5)(2x+1)$, find $b$.", -7, 0, `Outer $3x$, inner $-10x$: $b=-7$ (indeed $${ptex(f.poly)}$).`)); }
  { const f = FX("2x^2 - 8", 2, "x-2", "x+2"); q.push(fill("medium", "Factor completely $2x^2-8$: ___", spell(f), "GCF first: $2(x^2-4)=2(x-2)(x+2)$.")); }
  { V2("B-32", (x, y) => 12 * x * x * y + 8 * x * y * y, (x, y) => 4 * x * y * (3 * x + 2 * y));
    q.push(fill("medium", "Factor $12x^2y+8xy^2$ completely: ___", ["4xy(3x+2y)", "4xy(2y+3x)", "4xy(3x + 2y)", "4xy(2y + 3x)", "4yx(3x+2y)", "4yx(2y+3x)", "(4xy)(3x+2y)"], "GCF $=4xy$.")); }
  q.push(tf("medium", "$x^2-4x+4=(x-2)^2$.", true, "$(x-2)(x-2)=x^2-4x+4$."));
  q.push(tf("medium", "$2x^2-18=2(x-3)^2$.", false, "$2x^2-18=2(x^2-9)=2(x-3)(x+3)$."));
  { const a = F(1, "x+2", "x+3"), b = F(1, "x-2", "x-3"), c = F(1, "x+3", "x-2"), d = F(1, "x-3", "x+2");
    q.push(match("medium", "Match each trinomial to its factors.", ["$x^2+5x+6$", "$x^2-5x+6$", "$x^2+x-6$", "$x^2-x-6$"], [T(a.tex), T(b.tex), T(c.tex), T(d.tex)], [0, 1, 2, 3])); }
  q.push(ms("medium", "Which expressions are factored completely?", ["$2(x^2-4)$", "$2(x-2)(x+2)$", "$(x-3)(x^2-4)$", "$(x+1)(x^2+1)$"], [1, 3], "$x^2-4$ can be factored again, so choices 1 and 3 are incomplete."));
  q.push(ms("medium", "Which of these are differences of squares?", ["$x^2-81$", "$4x^2-9$", "$x^2+81$", "$16-x^2$"], [0, 1, 3], "$16-x^2=(4-x)(4+x)$; $x^2+81$ is a <em>sum</em>."));
  { const f = FX("3x^2 + 10x - 8", 1, "3x-2", "x+4"); q.push(num("medium", "A rectangle has area $3x^2+10x-8$ and length $3x-2$. Find its width when $x=5$.", 9, 0, `Width $=x+4$ (since $${ptex(f.poly)}=(3x-2)(x+4)$), so $5+4=9$.`)); }
  { const f = FX("2x^2 - x - 6", 1, "2x+3", "x-2");
    q.push({ ...MCF("medium", "The graph of $y=2x^2-x-6$ is shown. Which factored form is equivalent?", f, [F(1, "2x-3", "x+2"), F(1, "x+3", "2x-2"), F(1, "2x+3", "x+2")], "The $x$-intercepts are $-1.5$ and $2$, so the factors are $(2x+3)$ and $(x-2)$."),
      image: graphSvg({ fn: (x) => peval(f.poly, x), xmin: -3, xmax: 4, ymin: -8, ymax: 8, points: [{ x: -1.5, y: 0, label: "(-1.5, 0)", color: "#1e293b", dy: 16, dx: -50 }, { x: 2, y: 0, label: "(2, 0)", color: "#1e293b", dy: 16 }, { x: 0, y: -6, label: "(0, -6)", color: "#1e293b" }], title: "y = 2x² − x − 6" }) }); }
  { const f = FX("6x^2 + 7x - 3", 1, "3x-1", "2x+3");
    q.push(order("medium", "Put the steps in order to factor $6x^2+7x-3$.", ["Multiply $ac=6\\times(-3)=-18$ and find two numbers with sum $7$: $9$ and $-2$", "Split the middle term: $6x^2+9x-2x-3$", "Group: $3x(2x+3)-1(2x+3)$", `Take out the common bracket: $${f.tex}$`])); }

  // ── hard (20) ──
  q.push(MCF("hard", "Factor completely $x^4-81$.", FX("x^4 - 81", 1, "x-3", "x+3", "x^2+9"), [F(1, "x-3", "x-3", "x+3", "x+3"), F(1, "x-9", "x+9", "x^2+1"), F(1, "x-3", "x+3", "x+3")], "$(x^2-9)(x^2+9)$, then factor $x^2-9$ again; $x^2+9$ is prime."));
  q.push(MCF("hard", "Factor completely $x^4-10x^2+9$.", FX("x^4 - 10x^2 + 9", 1, "x-1", "x+1", "x-3", "x+3"), [F(1, "x-1", "x-1", "x-3", "x-3"), F(1, "x-1", "x+1", "x-9", "x+9"), F(1, "x^2+1", "x-3", "x+3")], "$u=x^2$: $(u-1)(u-9)$, then two differences of squares."));
  { let ks = 0; for (let a = -36; a <= 36; a++) if (a !== 0 && 36 % a === 0 && a <= 36 / a) ks += a === 36 / a ? 1 : 1; const set = new Set(); for (let a = -36; a <= 36; a++) if (a !== 0 && 36 % a === 0) set.add(a + 36 / a); assert.strictEqual(set.size, 10);
    q.push(num("hard", "For how many integer values of $k$ can $x^2+kx+36$ be factored into two binomials with integer coefficients?", 10, 0, "$k=a+b$ for integer pairs with $ab=36$: $(1,36),(2,18),(3,12),(4,9),(6,6)$ and their negatives give $\\pm37,\\pm20,\\pm15,\\pm13,\\pm12$: $10$ values.")); }
  q.push(MCF("hard", "Factor $12x^2-5x-2$.", FX("12x^2 - 5x - 2", 1, "3x-2", "4x+1"), [F(1, "3x+2", "4x-1"), F(1, "6x-1", "2x+2"), F(1, "12x+1", "x-2"), F(1, "3x-1", "4x+2")], "$ac=-24$, sum $-5$: $-8$ and $3$. $12x^2-8x+3x-2=4x(3x-2)+1(3x-2)$."));
  q.push(MCF("hard", "Factor completely $2x^3-x^2-18x+9$.", FX("2x^3 - x^2 - 18x + 9", 1, "2x-1", "x-3", "x+3"), [F(1, "2x-1", "x-3", "x-3"), F(1, "2x+1", "x-3", "x+3"), F(1, "2x-1", "x^2+9")], "$x^2(2x-1)-9(2x-1)=(2x-1)(x^2-9)$, and $x^2-9$ factors again."));
  { assert.strictEqual(2025 ** 2 - 2023 ** 2, 8096); q.push(num("hard", "Without a calculator, evaluate $2025^2-2023^2$ by factoring.", 8096, 0, "$(2025-2023)(2025+2023)=2\\times4048=8096$.")); }
  { const c = F(3, "2x+1"); verify("B-47", (x) => (x + 2) ** 2 - (x - 1) ** 2, (x) => peval(c.poly, x));
    q.push(MCF("hard", "Factor and simplify $(x+2)^2-(x-1)^2$ completely.", c, [F(3, "2x-1"), F(1, "x+2", "x-1"), F(2, "x", "x+3")], "$a=x+2,\\ b=x-1$: $(a-b)(a+b)=(3)(2x+1)$.")); }
  { V2("B-48", (x, y) => x * x - 2 * x * y - 8 * y * y, (x, y) => (x - 4 * y) * (x + 2 * y));
    q.push(fill("hard", "Factor $x^2-2xy-8y^2$: ___", ["(x-4y)(x+2y)", "(x+2y)(x-4y)", "(x - 4y)(x + 2y)", "(x + 2y)(x - 4y)"], "Product $-8$, sum $-2$: $-4$ and $2$.")); }
  { const f = FX("6x^2 + x - 12", 1, "2x+3", "3x-4"); assert.ok(Math.abs(peval(f.poly, -1.5)) < 1e-9 && Math.abs(peval(f.poly, 4 / 3)) < 1e-9);
    q.push(num("hard", "A quadratic with integer coefficients and leading coefficient $6$ has zeros $-\\tfrac32$ and $\\tfrac43$. Find the coefficient of $x$.", 1, 0, `$(2x+3)(3x-4)=${ptex(f.poly)}$.`)); }
  { const f = FX("x^3 - 7x + 6", 1, "x-1", "x-2", "x+3"); q.push(ms("hard", "$x^3-7x+6=0$ has three integer solutions. (Try $x=1$.) Which are <em>factors</em> of $x^3-7x+6$?", ["$(x-1)$", "$(x-2)$", "$(x+3)$", "$(x+2)$"], [0, 1, 2], `$x^3-7x+6=${f.tex}$; $x=-2$ gives $-8+14+6=12\\ne0$.`)); }
  q.push(num("hard", "If $x^2-y^2=45$ and $x-y=5$, find $x$.", 7, 0, "$x^2-y^2=(x-y)(x+y)$, so $x+y=9$; then $x=\\tfrac{9+5}2=7$."));
  q.push(num("hard", "If $x+y=12$ and $x^2-y^2=60$, find $x-y$.", 5, 0, "$(x-y)(x+y)=60$, so $x-y=60\\div12=5$."));
  q.push(ms("hard", "For which values of $k$ is $x^2+kx+49$ a perfect-square trinomial?", ["$14$", "$7$", "$-14$", "$-7$"], [0, 2], "$(x\\pm7)^2=x^2\\pm14x+49$."));
  q.push(MCF("hard", "Factor completely $3x^3-12x^2-27x+108$.", FX("3x^3 - 12x^2 - 27x + 108", 3, "x-4", "x-3", "x+3"), [F(3, "x-4", "x^2+9"), F(3, "x-4", "x-3", "x-3"), F(3, "x+4", "x-3", "x+3")], "GCF $3$, then group: $3[x^2(x-4)-9(x-4)]$, then a difference of squares."));
  { V2("B-55", (x, y) => 6 * x * x + x * y - 12 * y * y, (x, y) => (3 * x - 4 * y) * (2 * x + 3 * y));
    q.push(mc("hard", "Factor $6x^2+xy-12y^2$.", ["$(3x-4y)(2x+3y)$", "$(3x+4y)(2x-3y)$", "$(6x-4y)(x+3y)$", "$(3x-3y)(2x+4y)$"], 0, "$ac=-72$; sum $1$: $9$ and $-8$. $6x^2+9xy-8xy-12y^2=3x(2x+3y)-4y(2x+3y)$.")); }
  { V2("B-56", (x) => x ** 4 + 64, (x) => (x * x + 4 * x + 8) * (x * x - 4 * x + 8));
    q.push(MC("hard", "Which is a correct factorisation of $x^4+64$?", "$(x^2+4x+8)(x^2-4x+8)$", ["$(x^2+8)^2$", "$(x^2+8)(x^2-8)$", "$(x^2+4)(x^2+16)$"], "$x^4+64=(x^2+8)^2-16x^2$, a difference of squares.")); }
  { const f = FX("x^3 - 6x^2 - x + 30", 1, "x-3", "x+2", "x-5"); q.push(num("hard", "Find the sum of the solutions of $x^3-6x^2-x+30=0$.", 6, 0, `$${f.tex}=0$ gives $x=3,-2,5$; the sum is $6$.`)); }
  { const f = FX("4x^4 - 64", 4, "x-2", "x+2", "x^2+4"); q.push(order("hard", "Put the steps in order to factor $4x^4-64$ completely.", ["Take out the GCF: $4(x^4-16)$", "Difference of squares: $4(x^2-4)(x^2+4)$", "Factor $x^2-4$ again: $4(x-2)(x+2)(x^2+4)$", `Stop: $x^2+4$ is prime, and expanding gives $${ptex(f.poly)}$ ✓`])); }
  { const a = F(1, "2x-3", "2x-3"), b = F(1, "2x-3", "2x+3"), c = F(1, "2x-1", "2x-3"), d = F(1, "2x+1", "2x+3");
    assert.strictEqual(ptex(a.poly), "4x^2 - 12x + 9"); assert.strictEqual(ptex(b.poly), "4x^2 - 9"); assert.strictEqual(ptex(c.poly), "4x^2 - 8x + 3"); assert.strictEqual(ptex(d.poly), "4x^2 + 8x + 3");
    q.push(match("hard", "Match each trinomial to its factors — the four look alike!", ["$4x^2-12x+9$", "$4x^2-9$", "$4x^2-8x+3$", "$4x^2+8x+3$"], [T(a.tex), T(b.tex), T(c.tex), T(d.tex)], [0, 1, 2, 3])); }
  { const f = FX("-x^2 - 2x + 3", -1, "x+3", "x-1");
    q.push({ ...MCF("hard", "The graph opens down and crosses the $x$-axis at $-3$ and $1$. Which equation matches it?", f, [F(-1, "x-3", "x+1"), F(1, "x+3", "x-1"), F(-1, "x+3", "x+1")], "Opens down means a negative leading coefficient: $y=-(x+3)(x-1)=-x^2-2x+3$."),
      image: graphSvg({ fn: (x) => peval(f.poly, x), xmin: -5, xmax: 3, ymin: -6, ymax: 6, points: [{ x: -3, y: 0, label: "(-3, 0)", color: "#1e293b", dy: 16, dx: -50 }, { x: 1, y: 0, label: "(1, 0)", color: "#1e293b", dy: 16 }, { x: 0, y: 3, label: "(0, 3)", color: "#1e293b" }], title: "A parabola" }) }); }
  const c = { easy: 0, medium: 0, hard: 0 }; for (const x of q) c[x.difficulty]++;
  assert.ok(q.length === 60 && c.easy === 20 && c.medium === 20 && c.hard === 20, `counts ${q.length} ${JSON.stringify(c)}`);
  return q;
}

// ───────────────────────── assignment ─────────────────────────
const a3 = FX("6x^2 + x - 35", 1, "2x+5", "3x-7");
V2("A-K1", (x, y) => 12 * x * x * y - 18 * x * y * y + 6 * x * y, (x, y) => 6 * x * y * (2 * x - 3 * y + 1));
const a2 = FX("x^2 + 2x - 63", 1, "x+9", "x-7");
const t1 = FX("2x^4 - 32", 2, "x-2", "x+2", "x^2+4");
const c2a = FX("x^2 + 7x - 18", 1, "x+9", "x-2");
const c2b = FX("x^2 - 7x - 18", 1, "x-9", "x+2");
const aa1 = FX("3x^2 + 14x + 8", 1, "3x+2", "x+4");
const aa2 = FX("-5x^2 + 25x + 30", -5, "x-6", "x+1");
const aa3 = FX("-20x^2 + 600x", -20, "x", "x-30");
assert.strictEqual(peval(aa2.poly, 2.5), 61.25); assert.strictEqual(peval(aa3.poly, 15), 4500);

export const ASSIGNMENT = (() => {
  let n = 0;
  const sec = (arr) => arr.map((t) => `${++n}. ${t}`);
  const description = [
    "Knowledge & Understanding",
    ...sec([
      "Factor $12x^2y-18xy^2+6xy$.",
      "Factor $x^2+2x-63$ and check your answer by expanding.",
      "Factor $6x^2+x-35$ by decomposition. Show how you split the middle term.",
    ]),
    "Thinking",
    ...sec([
      "Factor completely $2x^4-32$.",
      "For which integers $k$ can $x^2+kx+20$ be factored into two binomials with integer coefficients? List every value of $k$ and give the factorisation for one of them.",
    ]),
    "Communication",
    ...sec([
      "Describe the order of strategies you would follow to factor any polynomial (what you try first, second, third), and explain why taking out the GCF first makes the later steps easier. Use $3x^3-12x$ as your example.",
      "A student factors $x^2+7x-18$ as $(x-9)(x+2)$. Use expansion to show the factorisation is wrong, explain what went wrong, and give the correct factorisation.",
    ]),
    "Application",
    ...sec([
      "A rectangular lawn has area $3x^2+14x+8$ square metres and width $(x+4)$ metres. (a) Find an expression for its length. (b) For $x=3$, state the dimensions and the perimeter.",
      "A projectile's height in metres is $h(t)=-5t^2+25t+30$, with $t$ in seconds. (a) Factor $h(t)$. (b) Use the factors to find when it lands. (c) The maximum is halfway between the zeros: find the time and the maximum height.",
      "A theatre sells $(600-20p)$ tickets when the price is $p$ dollars, so revenue is $R=p(600-20p)$. (a) Write $R$ in factored form with $-20$ taken out. (b) At what prices is the revenue zero? (c) Use the symmetry of the zeros to find the best price and the maximum revenue.",
    ]),
  ].join("\n");
  return { title: `Assignment ${CODE} — ${TITLE}`, description };
})();
