// MCR3U 2.5 — Radicals & Equivalent Expressions (rebuilt, deep version).
// Exports: lessonBlocks(), W25 (worksheet), LEARN25, bank(), ASSIGNMENT.
// Every radical identity is checked numerically (|difference| < 1e-9) with JavaScript's own square root, independent of
// the hand-typed exact forms. Multiple-choice distractors are asserted to have a DIFFERENT value from the correct answer.
import assert from "node:assert";
import {
  html, gframe, ex, pr, qa, watchOut, EX, PR,
  P, peval, ptex, gx, verify, simp, radTex,
  eqTable, mistake, steps, callout, challenge, gview, graphSvg,
} from "./lib2.mjs";
import { pgf, eqTableTex } from "./lib2tex.mjs";
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

export const CODE = "2.5";
export const TITLE = "Radicals & Equivalent Expressions";
export const FULL_TITLE = `${CODE} ${TITLE}`;
const M = (s) => `\\(${s}\\)`;
const T = (s) => `$${s}$`;
const r = String.raw;
const s = Math.sqrt;
/** Register "a equals b" as a numeric identity (constants, so every test point counts). */
const same = (name, a, b) => { assert.ok(Math.abs(a - b) < 1e-9, `${name}: ${a} vs ${b}`); verify(name, () => a, () => b); };
const V = (tex, val) => ({ tex, val });
let _pos = 0;
/** MC over exact-form choices {tex,val}: the correct value must equal the expression's value; wrongs must differ. */
function RD(diff, prompt, exprVal, correct, wrongs, fb = "") {
  same(`MC ${prompt.slice(0, 40)}`, correct.val, exprVal);
  const all = [correct, ...wrongs], texs = all.map((a) => a.tex);
  assert.strictEqual(new Set(texs).size, texs.length, `duplicate choices in: ${prompt}`);
  for (const w of wrongs) assert.ok(Math.abs(w.val - exprVal) > 1e-6, `distractor ${w.tex} equals the correct value! (${prompt})`);
  const pos = _pos++ % all.length, ch = wrongs.map((w) => T(w.tex)); ch.splice(pos, 0, T(correct.tex));
  return mc(diff, prompt, ch, pos, fb);
}
function MC(diff, prompt, correct, bad, fb = "") {
  assert.strictEqual(new Set([correct, ...bad]).size, bad.length + 1, `duplicate choices in: ${prompt}`);
  const pos = _pos++ % (bad.length + 1), ch = [...bad]; ch.splice(pos, 0, correct);
  return mc(diff, prompt, ch, pos, fb);
}
/** Accepted typed spellings of a·√b (and a·√b + …): sqrt() and √ forms, with and without spaces/asterisks. */
const rtypes = (a, b) => { const A = a === 1 ? "" : String(a); const out = [`${A}√${b}`, `${A}sqrt(${b})`, `${A}*sqrt(${b})`, `${A}\\sqrt{${b}}`, `${A} √${b}`, `${A}√(${b})`, `${A}*√${b}`]; return [...new Set(out)]; };
const hollowPt = (x, y, label, extra = {}) => ({ x, y, label, color: "#1e293b", hollow: true, ...extra });

/** Right-triangle (or rectangle) figure for bank questions. kind: "tri" or "rect". */
function shapeSvg({ kind = "tri", w, h, wl, hl, dl = "?", title = "" }) {
  const W = 360, H = 240, L = 50, B = 190, bw = 230, bh = 130;
  let sv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Inter,Arial,sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>`;
  if (title) sv += `<text x="${W / 2}" y="18" font-size="12" font-weight="700" text-anchor="middle" fill="#334155">${title}</text>`;
  if (kind === "tri") {
    sv += `<polygon points="${L},${B} ${L + bw},${B} ${L},${B - bh}" fill="#eff6ff" stroke="#2563a0" stroke-width="2.2"/><polyline points="${L},${B - 14} ${L + 14},${B - 14} ${L + 14},${B}" fill="none" stroke="#2563a0" stroke-width="1.6"/>`;
    sv += `<text x="${L + bw / 2}" y="${B + 20}" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">${wl}</text><text x="${L - 8}" y="${B - bh / 2}" font-size="14" font-weight="700" text-anchor="end" fill="#0f172a">${hl}</text><text x="${L + bw / 2 + 12}" y="${B - bh / 2 - 8}" font-size="14" font-weight="700" fill="#be123c">${dl}</text>`;
  } else {
    sv += `<rect x="${L}" y="${B - bh}" width="${bw}" height="${bh}" fill="#eff6ff" stroke="#2563a0" stroke-width="2.2"/><line x1="${L}" y1="${B}" x2="${L + bw}" y2="${B - bh}" stroke="#be123c" stroke-width="2" stroke-dasharray="6 4"/>`;
    sv += `<text x="${L + bw / 2}" y="${B + 20}" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">${wl}</text><text x="${L - 8}" y="${B - bh / 2}" font-size="14" font-weight="700" text-anchor="end" fill="#0f172a">${hl}</text><text x="${L + bw / 2 - 40}" y="${B - bh / 2 - 12}" font-size="14" font-weight="700" fill="#be123c">${dl}</text>`;
  }
  return sv + "</svg>";
}

// ───────────────────────── lesson data ─────────────────────────
same("L-E1", s(72), 6 * s(2)); same("L-E2", 5 * s(12), 10 * s(3)); same("L-E3", 7 * s(2), s(98));
same("L-E4", 3 * s(20) - s(45) + 2 * s(5), 5 * s(5)); same("L-E5", 2 * s(3) * 5 * s(6), 30 * s(2));
same("L-E6", s(2) * (3 * s(8) - s(2)), 10); same("L-E7", (3 + s(5)) * (2 - s(5)), 1 - s(5));
same("L-E8a", (4 + s(7)) * (4 - s(7)), 9); same("L-E8b", (2 * s(3) - 5) * (2 * s(3) + 5), -13);
same("L-E9", 6 / s(8), (3 * s(2)) / 2); same("L-E10", 5 / (3 - s(2)), (15 + 5 * s(2)) / 7);
verify("L-E11", (x) => s(45 * x ** 3), (x) => 3 * x * s(5 * x));
same("L-E12", s(36 + 81), 3 * s(13)); same("L-E13", s(3 + 2 * s(2)), 1 + s(2));
same("L-P1", s(150), 5 * s(6)); same("L-P2", 3 * s(75), 15 * s(3)); same("L-P3", 2 * s(45) + 5 * s(20) - s(80), 12 * s(5));
same("L-P4", 4 * s(6) * 3 * s(2), 24 * s(3)); same("L-P5", (2 + 3 * s(2)) * (1 - s(2)), -4 + s(2));
same("L-P6a", (5 + s(3)) * (5 - s(3)), 22); same("L-P6b", (s(7) + s(3)) ** 2, 10 + 2 * s(21));
same("L-P7", 10 / (s(5) + 1), (5 * s(5) - 5) / 2); same("L-P8a", (2 + s(3)) * (2 - s(3)), 1); same("L-P8b", 2 * (2 + s(3) + 2 - s(3)), 8);
same("L-CH", ((1 + s(5)) / 2) ** 2, (1 + s(5)) / 2 + 1);
assert.deepStrictEqual(simp(72), [6, 2]); assert.deepStrictEqual(simp(150), [5, 6]); assert.deepStrictEqual(simp(98), [7, 2]);

const squaresTable = `<div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;font-size:14px;"><tbody><tr>${[...Array(15)].map((_, i) => `<td style="border:1px solid #c7d2fe;padding:4px 8px;text-align:center;background:#eef2ff;color:#3730a3;font-weight:700;">${(i + 1) ** 2}</td>`).join("")}</tr><tr>${[...Array(15)].map((_, i) => `<td style="border:1px solid #e2e8f0;padding:4px 8px;text-align:center;">\\(${i + 1}^2\\)</td>`).join("")}</tr></tbody></table></div>`;

const lessonHtml = r`<div class="lecture-box">
  <h1>√ Radicals &amp; Equivalent Expressions</h1>
  <p><strong>Overview.</strong> A radical like \(\sqrt{72}\) is an <strong>exact</strong> number: the calculator's \(8.485\ldots\) is only an approximation. Mathematicians prefer exact forms — and they like them <em>simplified</em>, so that equivalent numbers look the same. In this lesson you will learn to simplify radicals, combine them, multiply them, and <strong>rationalise denominators</strong>. As always, the test of a correct rewrite is that the <em>value does not change</em> — and with radicals your calculator can confirm it.</p>
  ${callout("The two golden facts.", "\\(\\sqrt{a}\\cdot\\sqrt{b}=\\sqrt{ab}\\) and \\(\\dfrac{\\sqrt a}{\\sqrt b}=\\sqrt{\\dfrac ab}\\) (for \\(a,b\\ge0\\)). Everything in this lesson is a clever use of these two rules — in reverse as well as forwards. <strong>But \\(\\sqrt{a+b}\\ne\\sqrt a+\\sqrt b\\)</strong>: \\(\\sqrt{9+16}=5\\), not \\(3+4\\).", "amber")}

  <p>You can <em>see</em> the product rule: \(\sqrt{4x}\) and \(2\sqrt x\) are equivalent, so they draw exactly one curve.</p>
  ${gframe(["y = sqrt(4*x)", "y = 2*sqrt(x)"], { title: "√(4x) and 2√x are ONE curve (the product rule)", ...gview(0, 12, 0, 8) })}

  <h2>📌 Vocabulary</h2>
  <ul>
    <li>In \(5\sqrt{12}\): \(5\) is the <strong>coefficient</strong>, \(\sqrt{\ }\) is the <strong>radical sign</strong>, and \(12\) is the <strong>radicand</strong>.</li>
    <li>An <strong>entire radical</strong> has coefficient 1 (\(\sqrt{48}\)); a <strong>mixed radical</strong> has a coefficient outside (\(4\sqrt3\)). They can be the same number: \(\sqrt{48}=4\sqrt3\).</li>
    <li>A radical is in <strong>simplest form</strong> when the radicand has <em>no perfect-square factor</em> other than 1, and there is no radical in a denominator.</li>
    <li><strong>Like radicals</strong> have the same radicand (\(3\sqrt5\) and \(7\sqrt5\)); only like radicals can be added or subtracted — just like like terms.</li>
  </ul>
  <p>Learn to recognise the perfect squares quickly:</p>
  ${squaresTable}

  ${steps("To simplify \\(\\sqrt{n}\\)", [
    "Find the <strong>largest perfect square</strong> that divides \\(n\\) (check 4, 9, 16, 25, 36, 49, …).",
    "Write \\(n\\) as <em>(perfect square) × (rest)</em>.",
    "Split with \\(\\sqrt{ab}=\\sqrt a\\sqrt b\\) and take the square root of the perfect square.",
    "If you did not use the <em>largest</em> square, simplify again.",
  ])}

  <h2>🔵 Examples</h2>
  ${ex("Example 1: Simplify a radical", `Simplify ${M("\\sqrt{72}")}.`, [
    `The largest perfect square dividing 72 is \\(36\\): \\(72=36\\times2\\).`,
    `\\(\\sqrt{72}=\\sqrt{36}\\cdot\\sqrt2=6\\sqrt2\\).`,
  ], `\\(6\\sqrt2\\). Check with a calculator: \\(\\sqrt{72}=8.4853\\) and \\(6\\sqrt2=6(1.41421)=8.4853\\) ✓. (Using \\(4\\) first gives \\(2\\sqrt{18}\\) — still not finished: \\(18=9\\cdot2\\).)`)}
  ${ex("Example 2: A radical with a coefficient", `Simplify ${M("5\\sqrt{12}")}.`, [
    `\\(\\sqrt{12}=\\sqrt{4}\\cdot\\sqrt3=2\\sqrt3\\).`,
    `Multiply the coefficients: \\(5\\times2\\sqrt3\\).`,
  ], `\\(10\\sqrt3\\).`)}
  ${ex("Example 3: Write as an entire radical", `Write ${M("7\\sqrt2")} as an entire radical.`, [
    `Move the coefficient <em>inside</em> by squaring it: \\(7=\\sqrt{49}\\).`,
    `\\(7\\sqrt2=\\sqrt{49}\\cdot\\sqrt2=\\sqrt{98}\\).`,
  ], `\\(\\sqrt{98}\\). This helps when <em>comparing</em> sizes: \\(7\\sqrt2=\\sqrt{98}\\) is just a little smaller than \\(\\sqrt{100}=10\\).`)}
  ${ex("Example 4: Adding and subtracting", `Simplify ${M("3\\sqrt{20}-\\sqrt{45}+2\\sqrt5")}.`, [
    `<strong>Simplify each radical first</strong>: \\(\\sqrt{20}=2\\sqrt5\\) and \\(\\sqrt{45}=3\\sqrt5\\).`,
    `Now they are like radicals: \\(3(2\\sqrt5)-3\\sqrt5+2\\sqrt5=6\\sqrt5-3\\sqrt5+2\\sqrt5\\).`,
  ], `\\(5\\sqrt5\\). The radicand stays; only the coefficients combine (\\(6-3+2=5\\)). Check: \\(3(4.472)-6.708+4.472=11.180=5\\sqrt5\\) ✓.`)}
  ${ex("Example 5: Multiplying radicals", `Simplify ${M("(2\\sqrt3)(5\\sqrt6)")}.`, [
    `Multiply coefficients and radicands separately: \\(2\\cdot5\\cdot\\sqrt{3\\cdot6}=10\\sqrt{18}\\).`,
    `Simplify: \\(\\sqrt{18}=3\\sqrt2\\), so \\(10\\cdot3\\sqrt2\\).`,
  ], `\\(30\\sqrt2\\).`)}
  ${ex("Example 6: Distributing", `Simplify ${M("\\sqrt2\\left(3\\sqrt8-\\sqrt2\\right)")}.`, [
    `Distribute: \\(3\\sqrt{16}-\\sqrt{4}\\).`,
    `\\(3(4)-2=12-2\\).`,
  ], `\\(10\\) — the radicals disappeared completely, because \\(\\sqrt2\\cdot\\sqrt2=2\\).`)}
  ${ex("Example 7: Multiplying binomials (FOIL)", `Expand ${M("(3+\\sqrt5)(2-\\sqrt5)")}.`, [
    `First \\(6\\); Outer \\(-3\\sqrt5\\); Inner \\(+2\\sqrt5\\); Last \\(-(\\sqrt5)^2=-5\\).`,
    `Collect: \\(6-5=1\\) and \\(-3\\sqrt5+2\\sqrt5=-\\sqrt5\\).`,
  ], `\\(1-\\sqrt5\\). Check: \\((5.236)(-0.236)=-1.236\\) and \\(1-2.236=-1.236\\) ✓.`)}
  ${ex("Example 8: Conjugates make radicals vanish", `Expand (a) ${M("(4+\\sqrt7)(4-\\sqrt7)")} and (b) ${M("(2\\sqrt3-5)(2\\sqrt3+5)")}.`, [
    `Binomials that differ only in the middle sign are <strong>conjugates</strong>. Their product is a difference of squares, so the middle terms cancel: \\((a+b)(a-b)=a^2-b^2\\).`,
    `(a) \\(4^2-(\\sqrt7)^2=16-7\\). (b) \\((2\\sqrt3)^2-5^2=12-25\\).`,
  ], `(a) \\(9\\) (b) \\(-13\\). A conjugate product is always <em>rational</em> — the secret behind rationalising.`)}
  ${ex("Example 9: Rationalising a monomial denominator", `Rationalise ${M("\\dfrac{6}{\\sqrt8}")}.`, [
    `Simplify first: \\(\\sqrt8=2\\sqrt2\\), so \\(\\dfrac{6}{2\\sqrt2}=\\dfrac{3}{\\sqrt2}\\).`,
    `Multiply top and bottom by \\(\\sqrt2\\) (that is multiplying by 1): \\(\\dfrac{3\\sqrt2}{\\sqrt2\\cdot\\sqrt2}=\\dfrac{3\\sqrt2}{2}\\).`,
  ], `\\(\\dfrac{3\\sqrt2}{2}\\). Check: \\(6\\div2.828=2.121\\) and \\(3(1.414)/2=2.121\\) ✓.`)}
  ${ex("Example 10: Rationalising a binomial denominator", `Rationalise ${M("\\dfrac{5}{3-\\sqrt2}")}.`, [
    `Multiply top and bottom by the <strong>conjugate</strong> of the denominator, \\(3+\\sqrt2\\).`,
    `Bottom: \\((3-\\sqrt2)(3+\\sqrt2)=9-2=7\\). Top: \\(5(3+\\sqrt2)=15+5\\sqrt2\\).`,
  ], `\\(\\dfrac{15+5\\sqrt2}{7}\\). Check: \\(5\\div1.586=3.153\\) and \\((15+7.071)/7=3.153\\) ✓.`)}
  ${ex("Example 11: Radicals with variables", `Simplify ${M("\\sqrt{45x^3}")}, where \\(x\\ge0\\).`, [
    `Pull out perfect squares: \\(45=9\\cdot5\\) and \\(x^3=x^2\\cdot x\\).`,
    `\\(\\sqrt{9\\cdot x^2\\cdot5x}=3x\\sqrt{5x}\\).`,
  ], `\\(3x\\sqrt{5x}\\). (We say \\(x\\ge0\\) because \\(\\sqrt{x^2}=|x|\\); for negative \\(x\\) the expression \\(\\sqrt{45x^3}\\) is not even real.)`)}
  ${ex("Example 12: An application — the diagonal", `A rectangular tablet screen is \\(6\\) cm by \\(9\\) cm. Find the exact length of its diagonal.`, [
    `Pythagoras: \\(d^2=6^2+9^2=36+81=117\\), so \\(d=\\sqrt{117}\\).`,
    `\\(117=9\\cdot13\\), so \\(\\sqrt{117}=3\\sqrt{13}\\).`,
  ], `\\(d=3\\sqrt{13}\\) cm \\(\\approx10.82\\) cm. The exact form is shorter and carries no rounding error.`, `<div style="text-align:center;">${shapeSvg({ kind: "rect", wl: "9 cm", hl: "6 cm", dl: "d" })}</div>`)}
  ${ex("Example 13: A nested radical", `Show that ${M("\\sqrt{3+2\\sqrt2}=1+\\sqrt2")}.`, [
    `A positive number equals \\(\\sqrt{N}\\) exactly when its square is \\(N\\) (and it is positive). Square the right side: \\((1+\\sqrt2)^2=1+2\\sqrt2+2\\).`,
    `\\(=3+2\\sqrt2\\) ✓, and \\(1+\\sqrt2>0\\).`,
  ], `So \\(\\sqrt{3+2\\sqrt2}=1+\\sqrt2\\). Numerically \\(\\sqrt{5.828}=2.414=1+1.414\\) ✓ — a radical inside a radical collapsed to a simple one.`)}

  ${mistake("\\(\\sqrt{x+9}=\\sqrt x+3\\)", "There is no sum rule for radicals. Test \\(x=16\\): \\(\\sqrt{25}=5\\) but \\(\\sqrt{16}+3=7\\).", "\\(\\sqrt{x+9}\\) cannot be split. Only <em>products</em> and <em>quotients</em> split: \\(\\sqrt{9x}=3\\sqrt x\\).")}
  ${gframe(["y = sqrt(x+9)", "y = sqrt(x)+3"], { title: "√(x + 9) and √x + 3 are DIFFERENT curves — they only meet where x = 0", ...gview(0, 20, 0, 9) })}
  ${mistake("\\(\\sqrt{12}+\\sqrt3=\\sqrt{15}\\)", "Radicals are added only when they are <em>like</em> after simplifying. \\(\\sqrt{12}=2\\sqrt3\\), so the sum is \\(2\\sqrt3+\\sqrt3=3\\sqrt3\\approx5.196\\), not \\(\\sqrt{15}\\approx3.873\\).", "\\(\\sqrt{12}+\\sqrt3=3\\sqrt3\\).")}
  ${watchOut([
    "<strong>Simplify every radical first</strong> — only then can you see which ones are like radicals.",
    "\\(\\sqrt{a}\\cdot\\sqrt{a}=a\\), but \\(\\sqrt a+\\sqrt a=2\\sqrt a\\). Don't confuse multiplying with adding.",
    "A denominator with a radical is not 'finished': rationalise it. Use \\(\\sqrt{b}\\) for a monomial, the <strong>conjugate</strong> for a binomial.",
    "When you multiply top and bottom by something, you must multiply <em>every term</em> of the numerator.",
    "\\(\\sqrt{x^2}=|x|\\). We write answers like \\(3x\\sqrt{5x}\\) only when \\(x\\ge0\\).",
    "Use the calculator as a <em>check</em>, not as the answer: the question asks for an <em>exact</em> form.",
  ])}

  <h2>🟡 Practice Questions</h2>
  ${pr(1, "Knowledge", `Simplify ${M("\\sqrt{150}")}.`, `\\(150=25\\cdot6\\), so ${M("5\\sqrt6")}.`)}
  ${pr(2, "Knowledge", `Simplify ${M("3\\sqrt{75}")}.`, `\\(\\sqrt{75}=5\\sqrt3\\), so ${M("15\\sqrt3")}.`)}
  ${pr(3, "Knowledge", `Simplify ${M("2\\sqrt{45}+5\\sqrt{20}-\\sqrt{80}")}.`, `\\(6\\sqrt5+10\\sqrt5-4\\sqrt5=\\)${M("12\\sqrt5")}.`)}
  ${pr(4, "Thinking", `Simplify ${M("(4\\sqrt6)(3\\sqrt2)")}.`, `\\(12\\sqrt{12}=12\\cdot2\\sqrt3=\\)${M("24\\sqrt3")}.`)}
  ${pr(5, "Thinking", `Expand and simplify ${M("(2+3\\sqrt2)(1-\\sqrt2)")}.`, `\\(2-2\\sqrt2+3\\sqrt2-3\\cdot2=\\)${M("-4+\\sqrt2")}.`)}
  ${pr(6, "Thinking", `Expand (a) ${M("(5+\\sqrt3)(5-\\sqrt3)")} and (b) ${M("(\\sqrt7+\\sqrt3)^2")}.`, `(a) \\(25-3=22\\). (b) \\(7+2\\sqrt{21}+3=10+2\\sqrt{21}\\).`)}
  ${pr(7, "Thinking", `Rationalise the denominator of ${M("\\dfrac{10}{\\sqrt5+1}")}.`, `Multiply by \\(\\dfrac{\\sqrt5-1}{\\sqrt5-1}\\): denominator \\(5-1=4\\); numerator \\(10(\\sqrt5-1)\\). Result \\(\\dfrac{10(\\sqrt5-1)}{4}=\\)${M("\\dfrac{5\\sqrt5-5}{2}")}.`)}
  ${pr(8, "Application", `A rectangle measures \\((2+\\sqrt3)\\) cm by \\((2-\\sqrt3)\\) cm. Find its exact area and perimeter.`, `Area \\(=(2+\\sqrt3)(2-\\sqrt3)=4-3=1\\) cm². Perimeter \\(=2[(2+\\sqrt3)+(2-\\sqrt3)]=2(4)=8\\) cm. The radicals cancel in both.`)}
  ${challenge("The <strong>golden ratio</strong> is \\(\\varphi=\\dfrac{1+\\sqrt5}{2}\\). Show that \\(\\varphi^2=\\varphi+1\\), and use this to write \\(\\varphi^3\\) in the form \\(a+b\\sqrt5\\).", `\\(\\varphi^2=\\dfrac{1+2\\sqrt5+5}{4}=\\dfrac{6+2\\sqrt5}{4}=\\dfrac{3+\\sqrt5}{2}\\), and \\(\\varphi+1=\\dfrac{1+\\sqrt5}{2}+\\dfrac22=\\dfrac{3+\\sqrt5}{2}\\) ✓. Then \\(\\varphi^3=\\varphi\\cdot\\varphi^2=\\varphi(\\varphi+1)=\\varphi^2+\\varphi=2\\varphi+1=2+\\sqrt5\\) (\\(\\approx4.236\\)).`)}

  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: How do I know a radical is fully simplified?", "The radicand has no perfect-square factor (4, 9, 16, 25, …) other than 1, and nothing is under a radical in a denominator.")}
  ${qa("Q2: Why can I add \\(3\\sqrt5+7\\sqrt5\\) but not \\(\\sqrt2+\\sqrt3\\)?", "Like radicals combine just like like terms: \\(3\\sqrt5+7\\sqrt5=10\\sqrt5\\) (think \\(3x+7x\\)). \\(\\sqrt2\\) and \\(\\sqrt3\\) are different 'units', so \\(\\sqrt2+\\sqrt3\\) cannot be simplified.")}
  ${qa("Q3: What is a conjugate and why does it help?", "The conjugate of \\(a+\\sqrt b\\) is \\(a-\\sqrt b\\). Their product is \\(a^2-b\\), which is rational — so multiplying by it removes radicals from a denominator.")}
  ${qa("Q4: Is \\(\\sqrt{x^2}=x\\)?", "Only when \\(x\\ge0\\). In general \\(\\sqrt{x^2}=|x|\\): for \\(x=-3\\), \\(\\sqrt9=3\\), not \\(-3\\).")}
  ${qa("Q5: How can I check a radical simplification?", "Evaluate the original and the simplified form on a calculator; they must agree to every decimal place shown.")}
  ${qa("Q6: Are radicals related to exponents?", "Yes: \\(\\sqrt{x}=x^{1/2}\\), so the product rule \\(\\sqrt a\\sqrt b=\\sqrt{ab}\\) is the exponent law \\(a^{1/2}b^{1/2}=(ab)^{1/2}\\).")}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

// ───────────────────────── worksheet ─────────────────────────
same("W-E1", s(200), 10 * s(2)); same("W-E2", s(63), 3 * s(7)); same("W-E2b", 7 * s(3), s(147));
same("W-E3", 5 * s(12) - 2 * s(27) + s(48), 8 * s(3)); same("W-E4", 3 * s(7) * 2 * s(14), 42 * s(2));
same("W-E5", s(3) * (s(12) + 2 * s(5)), 6 + 2 * s(15)); same("W-E6", (2 * s(3) + 1) * (s(3) - 4), 2 - 7 * s(3));
same("W-E7", (s(5) - 2 * s(3)) ** 2, 17 - 4 * s(15)); same("W-E8a", 12 / s(6), 2 * s(6)); same("W-E8b", 4 / (s(7) - s(3)), s(7) + s(3));
verify("W-E9", (a) => s(72 * a ** 5), (a) => 6 * a * a * s(2 * a)); same("W-E10", s((4 - -2) ** 2 + (5 - 1) ** 2), 2 * s(13));
const sqrtEq = [{ tex: String.raw`\sqrt{x^2+9}`, f: (x) => s(x * x + 9) }, { tex: "x+3", f: (x) => x + 3 }];
same("W-Q1", s(120), 2 * s(30)); same("W-Q2", s(675), 15 * s(3)); same("W-Q3", 5 * s(6), s(150)); same("W-Q4", 4 * s(8) + 3 * s(18) - s(50), 12 * s(2));
same("W-Q5", 5 * s(2) * 3 * s(6), 30 * s(3)); same("W-Q6", s(5) * (4 * s(10) - 3), 20 * s(2) - 3 * s(5)); same("W-Q7", (3 * s(2) - 4) * (2 * s(2) + 5), -8 + 7 * s(2));
same("W-Q8a", (s(11) + s(5)) * (s(11) - s(5)), 6); same("W-Q8b", (2 * s(3) + s(7)) ** 2, 19 + 4 * s(21)); same("W-Q9", 9 / (2 * s(3)), (3 * s(3)) / 2);
same("W-Q10", 6 / (4 - s(10)), 4 + s(10)); verify("W-Q11", (x) => s(98 * x ** 4 * 1.7 ** 3), (x) => 7 * x * x * 1.7 * s(2 * 1.7)); same("W-Q12", s(9 + 16 + 25), 5 * s(2));
assert.notStrictEqual(s(16 + 9), s(16) + 3);
same("W-Q14", s(9 + 4 * s(5)), 2 + s(5)); same("W-Q3b", 4 * s(7), s(112)); assert.notStrictEqual(Math.sqrt(25 - 9), 5 - 3);

export const W25 = {
  code: "2.5", unit: "2: Equivalent Algebraic Expressions", title: "Radicals & Equivalent Expressions",
  intro: r`A radical such as $\sqrt{72}$ is an \textbf{exact} number; the calculator's $8.485\ldots$ is only an approximation. We simplify radicals so that equal numbers look equal, and we always check a rewrite on a calculator: \emph{the value must not change}. The two key rules are $\sqrt a\sqrt b=\sqrt{ab}$ and $\dfrac{\sqrt a}{\sqrt b}=\sqrt{\dfrac ab}$. There is \textbf{no} rule $\sqrt{a+b}=\sqrt a+\sqrt b$.`,
  ideas: [
    r`\textbf{Simplify:} divide out the \emph{largest perfect square}: $\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2$. Perfect squares: $4,9,16,25,36,49,64,81,100,121,144,\ldots$`,
    r`\textbf{Add/subtract} only \emph{like} radicals, after simplifying each: $3\sqrt5+7\sqrt5=10\sqrt5$, but $\sqrt2+\sqrt3$ stays as it is.`,
    r`\textbf{Multiply:} $(a\sqrt b)(c\sqrt d)=ac\sqrt{bd}$; use FOIL for binomials and remember $(\sqrt a)^2=a$.`,
    r`\textbf{Conjugates:} $(a+\sqrt b)(a-\sqrt b)=a^2-b$ is rational. To rationalise a binomial denominator multiply top and bottom by the conjugate.`,
    r`\textbf{Variables:} $\sqrt{x^2}=|x|$; we assume the variables are non-negative to write $\sqrt{18x^3}=3x\sqrt{2x}$.`,
  ],
  examples: [
    { t: "Simplify a radical", body: String.raw`Simplify $\sqrt{200}$.\soln The largest perfect square dividing $200$ is $100$: $\sqrt{200}=\sqrt{100\cdot2}=10\sqrt2$. \\ Check: $\sqrt{200}=14.142$ and $10\sqrt2=14.142$ \checkmark.` },
    { t: "Mixed and entire radicals", body: String.raw`(a) Simplify $\sqrt{63}$. (b) Write $7\sqrt3$ as an entire radical.\soln (a) $\sqrt{63}=\sqrt{9\cdot7}=3\sqrt7$. \\ (b) Square the coefficient and move it inside: $7\sqrt3=\sqrt{49\cdot3}=\sqrt{147}$.` },
    { t: "Adding and subtracting", body: String.raw`Simplify $5\sqrt{12}-2\sqrt{27}+\sqrt{48}$.\soln Simplify first: $\sqrt{12}=2\sqrt3$, $\sqrt{27}=3\sqrt3$, $\sqrt{48}=4\sqrt3$. \\ $10\sqrt3-6\sqrt3+4\sqrt3=8\sqrt3$.` },
    { t: "Multiplying", body: String.raw`Simplify $(3\sqrt7)(2\sqrt{14})$.\soln $6\sqrt{98}=6\cdot7\sqrt2=42\sqrt2$. \\ Check: $3(2.646)\cdot2(3.742)=59.40$ and $42(1.4142)=59.40$ \checkmark.` },
    { t: "Distributing", body: String.raw`Simplify $\sqrt3\left(\sqrt{12}+2\sqrt5\right)$.\soln $\sqrt{36}+2\sqrt{15}=6+2\sqrt{15}$. \\ The terms $6$ and $2\sqrt{15}$ are not like terms, so this is final.` },
    { t: "FOIL with radicals", body: String.raw`Expand $(2\sqrt3+1)(\sqrt3-4)$.\soln First $2\cdot3=6$; Outer $-8\sqrt3$; Inner $\sqrt3$; Last $-4$. \\ $6-4=2$ and $-8\sqrt3+\sqrt3=-7\sqrt3$: $2-7\sqrt3$.` },
    { t: "Squaring a binomial", body: String.raw`Expand $\left(\sqrt5-2\sqrt3\right)^2$.\soln $a^2-2ab+b^2$ with $a=\sqrt5$, $b=2\sqrt3$: $5-2(\sqrt5)(2\sqrt3)+4\cdot3=5-4\sqrt{15}+12$. \\ $=17-4\sqrt{15}$.` },
    { t: "Rationalising denominators", body: String.raw`Rationalise (a) $\dfrac{12}{\sqrt6}$ \quad (b) $\dfrac{4}{\sqrt7-\sqrt3}$.\soln (a) Multiply by $\dfrac{\sqrt6}{\sqrt6}$: $\dfrac{12\sqrt6}{6}=2\sqrt6$. \\ (b) Multiply by the conjugate $\dfrac{\sqrt7+\sqrt3}{\sqrt7+\sqrt3}$: the denominator is $7-3=4$, so $\dfrac{4(\sqrt7+\sqrt3)}{4}=\sqrt7+\sqrt3$.` },
    { t: "Radicals with variables", body: String.raw`Simplify $\sqrt{72a^5}$ where $a\ge0$.\soln $72=36\cdot2$ and $a^5=a^4\cdot a$, so $\sqrt{36\cdot a^4\cdot2a}=6a^2\sqrt{2a}$.` },
    { t: "Application: distance between points", body: String.raw`Find the exact distance between $A(-2,1)$ and $B(4,5)$.\soln $d=\sqrt{(4-(-2))^2+(5-1)^2}=\sqrt{36+16}=\sqrt{52}$. \\ $\sqrt{52}=\sqrt{4\cdot13}=2\sqrt{13}\approx7.21$ units.` },
    { t: "Test before you trust", body: String.raw`A student claims $\sqrt{x^2+9}=x+3$. Test it.
${eqTableTex(sqrtEq, [0, 1, 2, 4], { check: true })}
\soln The two sides agree at $x=0$ only. One mismatch is enough to prove the claim false: there is no sum rule $\sqrt{a+b}=\sqrt a+\sqrt b$ (here $\sqrt{x^2+9}\ne\sqrt{x^2}+\sqrt9$).` },
  ],
  questions: [
    { ask: String.raw`Simplify $\sqrt{120}$.`, ws: "1.8cm" },
    { ask: String.raw`Simplify $\sqrt{675}$.`, ws: "2cm" },
    { ask: String.raw`Write $4\sqrt7$ as an entire radical and check both forms with a calculator.`, ws: "2.2cm" },
    { ask: String.raw`Simplify $4\sqrt8+3\sqrt{18}-\sqrt{50}$.`, ws: "2.8cm" },
    { ask: String.raw`Simplify $(5\sqrt2)(3\sqrt6)$.`, ws: "2.2cm" },
    { ask: String.raw`Expand and simplify $\sqrt5\left(4\sqrt{10}-3\right)$.`, ws: "2.6cm" },
    { ask: String.raw`Expand and simplify $\left(3\sqrt2-4\right)\left(2\sqrt2+5\right)$.`, ws: "3cm" },
    { ask: String.raw`Expand (a) $\left(\sqrt{11}+\sqrt5\right)\left(\sqrt{11}-\sqrt5\right)$ \quad (b) $\left(2\sqrt3+\sqrt7\right)^2$.`, ws: "3.2cm" },
    { ask: String.raw`Rationalise the denominator of $\dfrac{9}{2\sqrt3}$.`, ws: "2.6cm" },
    { ask: String.raw`Rationalise the denominator of $\dfrac{6}{4-\sqrt{10}}$ and simplify.`, ws: "3.2cm" },
    { ask: String.raw`Simplify $\sqrt{98x^4y^3}$, where $x,y\ge0$.`, ws: "2.6cm" },
    { ask: String.raw`A box is $3$ m by $4$ m by $5$ m. Find the exact length of its longest diagonal, $\sqrt{l^2+w^2+h^2}$, and a decimal approximation to $2$ decimal places.`, ws: "3cm" },
    { ask: String.raw`A student writes $\sqrt{a^2-b^2}=a-b$. Test the claim with $a=5,\ b=3$, then explain which rule the student mis-used.`, ws: "3.2cm" },
    { ask: String.raw`Show that $\sqrt{9+4\sqrt5}=2+\sqrt5$ by squaring the right-hand side, and then check both sides with a calculator.`, ws: "4cm", challenge: true },
  ],
  answers: [
    String.raw`$\sqrt{120}=\sqrt{4\cdot30}=2\sqrt{30}$.`,
    String.raw`$675=225\cdot3$, so $15\sqrt3$.`,
    String.raw`$4\sqrt7=\sqrt{16\cdot7}=\sqrt{112}$. Both are $10.583$.`,
    String.raw`$8\sqrt2+9\sqrt2-5\sqrt2=12\sqrt2$.`,
    String.raw`$15\sqrt{12}=15\cdot2\sqrt3=30\sqrt3$.`,
    String.raw`$4\sqrt{50}-3\sqrt5=20\sqrt2-3\sqrt5$.`,
    String.raw`$12+15\sqrt2-8\sqrt2-20=-8+7\sqrt2$.`,
    String.raw`(a) $11-5=6$. \quad (b) $12+4\sqrt{21}+7=19+4\sqrt{21}$.`,
    String.raw`$\dfrac{9\sqrt3}{2\cdot3}=\dfrac{3\sqrt3}{2}$.`,
    String.raw`Multiply by $\dfrac{4+\sqrt{10}}{4+\sqrt{10}}$: denominator $16-10=6$; $\dfrac{6(4+\sqrt{10})}{6}=4+\sqrt{10}$.`,
    String.raw`$\sqrt{49\cdot2\cdot x^4\cdot y^2\cdot y}=7x^2y\sqrt{2y}$.`,
    String.raw`$\sqrt{9+16+25}=\sqrt{50}=5\sqrt2\approx7.07$ m.`,
    String.raw`With $a=5,\ b=3$: $\sqrt{25-9}=4$ but $5-3=2$. The student treated the root as if it distributed over subtraction; the root rules apply to \emph{products and quotients} only. ($\sqrt{a^2-b^2}=\sqrt{(a-b)(a+b)}$.)`,
    String.raw`$(2+\sqrt5)^2=4+4\sqrt5+5=9+4\sqrt5$ and $2+\sqrt5>0$, so $\sqrt{9+4\sqrt5}=2+\sqrt5$. Calculator: $\sqrt{17.944}=4.236$ and $2+2.236=4.236$ \checkmark.`,
  ],
};

export const LEARN25 = [
  ["Simplifying radicals", r`Divide out the \textbf{largest perfect square} factor: $\sqrt{72}=6\sqrt2$. Add or subtract only \textbf{like radicals}, after simplifying each. Multiply radicands: $(a\sqrt b)(c\sqrt d)=ac\sqrt{bd}$, and $(\sqrt a)^2=a$.`],
  ["Conjugates and rationalising", r`$(a+\sqrt b)(a-\sqrt b)=a^2-b$ is rational. To remove a radical from a denominator multiply top and bottom by $\sqrt b$ (monomial) or by the \textbf{conjugate} (binomial).`],
  ["Checking", r`There is no sum rule: $\sqrt{a+b}\ne\sqrt a+\sqrt b$. Check any rewrite on a calculator --- equivalent exact forms have the same decimal value.`],
];

// ───────────────────────── question bank (60) ─────────────────────────
export function bank() {
  const q = [];
  // ── easy (20) ──
  q.push(RD("easy", "Simplify $\\sqrt{50}$.", s(50), V("5\\sqrt{2}", 5 * s(2)), [V("25\\sqrt{2}", 25 * s(2)), V("10\\sqrt{5}", 10 * s(5)), V("2\\sqrt{5}", 2 * s(5))], "$50=25\\cdot2$."));
  q.push(RD("easy", "Simplify $\\sqrt{12}$.", s(12), V("2\\sqrt{3}", 2 * s(3)), [V("4\\sqrt{3}", 4 * s(3)), V("3\\sqrt{2}", 3 * s(2)), V("6\\sqrt{2}", 6 * s(2))], "$12=4\\cdot3$."));
  q.push(RD("easy", "Simplify $3\\sqrt8$.", 3 * s(8), V("6\\sqrt{2}", 6 * s(2)), [V("3\\sqrt{2}", 3 * s(2)), V("12\\sqrt{2}", 12 * s(2)), V("9\\sqrt{2}", 9 * s(2))], "$\\sqrt8=2\\sqrt2$, then $3\\cdot2=6$."));
  q.push(RD("easy", "Simplify $\\sqrt{80}$.", s(80), V("4\\sqrt{5}", 4 * s(5)), [V("16\\sqrt{5}", 16 * s(5)), V("8\\sqrt{10}", 8 * s(10)), V("5\\sqrt{4}", 5 * 2)], "$80=16\\cdot5$."));
  q.push(RD("easy", "Simplify $\\sqrt{18}+\\sqrt2$.", s(18) + s(2), V("4\\sqrt{2}", 4 * s(2)), [V("\\sqrt{20}", s(20)), V("5\\sqrt{2}", 5 * s(2)), V("3\\sqrt{2}", 3 * s(2))], "$\\sqrt{18}=3\\sqrt2$, then $3\\sqrt2+\\sqrt2$."));
  q.push(RD("easy", "Simplify $5\\sqrt3-2\\sqrt3$.", 3 * s(3), V("3\\sqrt{3}", 3 * s(3)), [V("3", 3), V("7\\sqrt{3}", 7 * s(3)), V("3\\sqrt{9}", 3 * 3)], "Subtract the coefficients of like radicals."));
  q.push(RD("easy", "Evaluate $(\\sqrt7)^2$.", 7, V("7", 7), [V("\\sqrt{7}", s(7)), V("49", 49), V("14", 14)], "Squaring undoes the square root."));
  q.push(RD("easy", "Simplify $\\sqrt3\\cdot\\sqrt{12}$.", 6, V("6", 6), [V("\\sqrt{15}", s(15)), V("15", 15), V("36", 36)], "$\\sqrt{36}=6$."));
  q.push(num("easy", "$\\sqrt{75}=k\\sqrt3$. Find $k$.", 5, 0, "$75=25\\cdot3$."));
  q.push(num("easy", "$3\\sqrt2=\\sqrt{a}$. Find $a$.", 18, 0, "$3^2\\cdot2=18$."));
  q.push(fill("easy", "Simplify $\\sqrt{128}$: ___", rtypes(8, 2), "$128=64\\cdot2$."));
  q.push(fill("easy", "Simplify $\\sqrt{45}$: ___", rtypes(3, 5), "$45=9\\cdot5$."));
  q.push(tf("easy", "$\\sqrt{9+16}=\\sqrt9+\\sqrt{16}$.", false, "$\\sqrt{25}=5$ but $3+4=7$."));
  q.push(tf("easy", "$\\sqrt2+\\sqrt3=\\sqrt5$.", false, "$1.414+1.732=3.146$ but $\\sqrt5=2.236$."));
  q.push(ms("easy", "Which are like radicals with $3\\sqrt5$ (after simplifying)?", ["$7\\sqrt5$", "$\\sqrt{20}$", "$5\\sqrt3$", "$\\sqrt{45}$"], [0, 1, 3], "$\\sqrt{20}=2\\sqrt5$ and $\\sqrt{45}=3\\sqrt5$."));
  q.push(ms("easy", "Which radicals are in simplest form?", ["$3\\sqrt5$", "$\\sqrt{12}$", "$2\\sqrt7$", "$\\sqrt{50}$"], [0, 2], "$\\sqrt{12}=2\\sqrt3$ and $\\sqrt{50}=5\\sqrt2$ still contain perfect-square factors."));
  q.push(match("easy", "Match each radical to its simplified form.", ["$\\sqrt8$", "$\\sqrt{27}$", "$\\sqrt{45}$"], ["$2\\sqrt2$", "$3\\sqrt3$", "$3\\sqrt5$"], [0, 1, 2]));
  q.push({ ...mc("easy", "The graph of $y=\\sqrt{x}$ is shown. What is the exact $y$-value at $x=8$, in simplest form?", ["$2\\sqrt2$", "$4\\sqrt2$", "$8$", "$2$"], 0, "$\\sqrt8=2\\sqrt2\\approx2.83$, between $y=2$ (at $x=4$) and $y=3$ (at $x=9$)."),
    image: graphSvg({ fn: s, xmin: 0, xmax: 10, ymin: 0, ymax: 4, domain: [0, 10], points: [{ x: 1, y: 1, label: "(1, 1)", color: "#1e293b" }, { x: 4, y: 2, label: "(4, 2)", color: "#1e293b" }, { x: 9, y: 3, label: "(9, 3)", color: "#1e293b" }], title: "y = √x" }) });
  q.push(order("easy", "Put the steps in order to simplify $\\sqrt{108}$.", ["Find the largest perfect square factor of 108: $36$", "Write $\\sqrt{108}=\\sqrt{36\\cdot3}$", "Split: $\\sqrt{36}\\cdot\\sqrt3$", "Evaluate: $6\\sqrt3$"]));
  q.push(num("easy", "Evaluate $\\sqrt{50}$ correct to $2$ decimal places.", 7.07, 0.01, "$5\\sqrt2\\approx7.07$."));

  // ── medium (20) ──
  q.push(RD("medium", "Simplify $4\\sqrt{27}-2\\sqrt{12}+\\sqrt{75}$.", 4 * s(27) - 2 * s(12) + s(75), V("13\\sqrt{3}", 13 * s(3)), [V("3\\sqrt{3}", 3 * s(3)), V("11\\sqrt{3}", 11 * s(3)), V("13\\sqrt{15}", 13 * s(15))], "$12\\sqrt3-4\\sqrt3+5\\sqrt3=13\\sqrt3$."));
  q.push(RD("medium", "Simplify $(3\\sqrt5)(4\\sqrt{10})$.", 12 * s(50), V("60\\sqrt{2}", 60 * s(2)), [V("12\\sqrt{15}", 12 * s(15)), V("60\\sqrt{5}", 60 * s(5)), V("7\\sqrt{15}", 7 * s(15))], "$12\\sqrt{50}=12\\cdot5\\sqrt2=60\\sqrt2$."));
  q.push(RD("medium", "Simplify $\\sqrt3\\left(2\\sqrt{12}+\\sqrt3\\right)$.", s(3) * (2 * s(12) + s(3)), V("15", 15), [V("12+\\sqrt{3}", 12 + s(3)), V("9", 9), V("2\\sqrt{15}+3", 2 * s(15) + 3)], "$2\\sqrt{36}+\\sqrt9=12+3$."));
  q.push(RD("medium", "Expand $(4-\\sqrt3)(1+2\\sqrt3)$.", (4 - s(3)) * (1 + 2 * s(3)), V("-2+7\\sqrt{3}", -2 + 7 * s(3)), [V("4+9\\sqrt{3}", 4 + 9 * s(3)), V("10+7\\sqrt{3}", 10 + 7 * s(3)), V("-2-7\\sqrt{3}", -2 - 7 * s(3))], "$4+8\\sqrt3-\\sqrt3-2(3)=-2+7\\sqrt3$."));
  q.push(RD("medium", "Expand $(5+\\sqrt6)(5-\\sqrt6)$.", 19, V("19", 19), [V("31", 31), V("25-\\sqrt{6}", 25 - s(6)), V("25", 25)], "$25-6=19$."));
  q.push(RD("medium", "Expand $\\left(\\sqrt5+\\sqrt2\\right)^2$.", (s(5) + s(2)) ** 2, V("7+2\\sqrt{10}", 7 + 2 * s(10)), [V("7", 7), V("7+\\sqrt{10}", 7 + s(10)), V("5+2\\sqrt{2}", 5 + 2 * s(2))], "$5+2\\sqrt{10}+2$."));
  q.push(RD("medium", "Rationalise $\\dfrac{8}{\\sqrt6}$.", 8 / s(6), V("\\dfrac{4\\sqrt{6}}{3}", (4 * s(6)) / 3), [V("\\dfrac{4\\sqrt{6}}{6}", (4 * s(6)) / 6), V("\\dfrac{8\\sqrt{6}}{3}", (8 * s(6)) / 3), V("\\dfrac{4}{\\sqrt{6}}", 4 / s(6))], "$\\dfrac{8\\sqrt6}{6}=\\dfrac{4\\sqrt6}{3}$."));
  q.push(RD("medium", "Rationalise $\\dfrac{6}{\\sqrt7-1}$.", 6 / (s(7) - 1), V("\\sqrt{7}+1", s(7) + 1), [V("\\sqrt{7}-1", s(7) - 1), V("6\\sqrt{7}+6", 6 * s(7) + 6), V("\\dfrac{\\sqrt{7}+1}{6}", (s(7) + 1) / 6)], "Multiply by the conjugate: the denominator is $7-1=6$."));
  { const g = (x) => s(32 * x ** 3); const opts = [["4x\\sqrt{2x}", (x) => 4 * x * s(2 * x)], ["16x\\sqrt{2x}", (x) => 16 * x * s(2 * x)], ["4x^2\\sqrt{2}", (x) => 4 * x * x * s(2)], ["8x\\sqrt{x}", (x) => 8 * x * s(x)]];
    for (const x of [1.3, 2.5, 4]) assert.ok(Math.abs(g(x) - opts[0][1](x)) < 1e-9); for (const o of opts.slice(1)) assert.ok(Math.abs(g(2.5) - o[1](2.5)) > 1e-6); verify("B-29", g, opts[0][1]);
    q.push(MC("medium", "Simplify $\\sqrt{32x^3}$, where $x\\ge0$.", "$4x\\sqrt{2x}$", ["$16x\\sqrt{2x}$", "$4x^2\\sqrt{2}$", "$8x\\sqrt{x}$"], "$32=16\\cdot2$ and $x^3=x^2\\cdot x$.")); }
  q.push(num("medium", "$\\sqrt{28}+\\sqrt{63}=k\\sqrt7$. Find $k$.", 5, 0, "$2\\sqrt7+3\\sqrt7=5\\sqrt7$."));
  q.push(num("medium", "The area of a rectangle with sides $2\\sqrt6$ and $3\\sqrt3$ is $k\\sqrt2$. Find $k$.", 18, 0, "$6\\sqrt{18}=6\\cdot3\\sqrt2=18\\sqrt2$."));
  q.push(fill("medium", "Expand $(\\sqrt3+2)(\\sqrt3-2)$: ___", ["-1", "−1"], "$3-4=-1$."));
  q.push(fill("medium", "Rationalise $\\dfrac{12}{\\sqrt3}$: ___", rtypes(4, 3), "$\\dfrac{12\\sqrt3}{3}$."));
  q.push(tf("medium", "$(a\\sqrt b)^2=a^2b$ for $a\\ge0,\\ b\\ge0$.", true, "Square the coefficient and the radical separately: $a^2\\cdot b$."));
  q.push(tf("medium", "$\\sqrt{x^2}=x$ for every real number $x$.", false, "$\\sqrt{x^2}=|x|$: for $x=-3$ it is $3$."));
  q.push(ms("medium", "Which expressions equal $2\\sqrt3$?", ["$\\sqrt{12}$", "$\\sqrt{3\\cdot4}$", "$\\dfrac{12}{\\sqrt{12}}$", "$\\sqrt6$"], [0, 1, 2], "$\\dfrac{12}{\\sqrt{12}}=\\sqrt{12}=2\\sqrt3$."));
  { const L = [["$\\sqrt8\\cdot\\sqrt2$", s(8) * s(2), "$4$", 4], ["$(\\sqrt5)^2$", 5, "$5$", 5], ["$\\sqrt3\\cdot\\sqrt{27}$", s(3) * s(27), "$9$", 9], ["$\\sqrt2+\\sqrt2$", 2 * s(2), "$2\\sqrt2$", 2 * s(2)]]; for (const [, a, , b] of L) assert.ok(Math.abs(a - b) < 1e-9);
    q.push(match("medium", "Match each expression to its value.", L.map((l) => l[0]), L.map((l) => l[2]), [0, 1, 2, 3])); }
  q.push(num("medium", "A rectangle is $8$ cm by $12$ cm. Its diagonal is $k\\sqrt{13}$ cm. Find $k$.", 4, 0, "$\\sqrt{64+144}=\\sqrt{208}=\\sqrt{16\\cdot13}=4\\sqrt{13}$."));
  q.push({ ...RD("medium", "A right triangle has legs $6$ and $12$. What is the exact length of its hypotenuse?", s(36 + 144), V("6\\sqrt{5}", 6 * s(5)), [V("18", 18), V("6\\sqrt{3}", 6 * s(3)), V("12\\sqrt{5}", 12 * s(5))], "$\\sqrt{36+144}=\\sqrt{180}=\\sqrt{36\\cdot5}=6\\sqrt5$."),
    image: shapeSvg({ kind: "tri", wl: "12", hl: "6", dl: "?", title: "A right triangle" }) });
  q.push(order("medium", "Put the steps in order to rationalise $\\dfrac{4}{5-\\sqrt3}$.", ["Identify the conjugate of the denominator: $5+\\sqrt3$", "Multiply top and bottom by the conjugate", "Simplify the denominator: $25-3=22$", "Write the result $\\dfrac{20+4\\sqrt3}{22}=\\dfrac{10+2\\sqrt3}{11}$"]));

  // ── hard (20) ──
  q.push(RD("hard", "Simplify $\\sqrt{7+4\\sqrt3}$.", s(7 + 4 * s(3)), V("2+\\sqrt{3}", 2 + s(3)), [V("7+2\\sqrt{3}", 7 + 2 * s(3)), V("4+\\sqrt{3}", 4 + s(3)), V("\\sqrt{7}+2\\sqrt{3}", s(7) + 2 * s(3))], "$(2+\\sqrt3)^2=4+4\\sqrt3+3=7+4\\sqrt3$."));
  { assert.ok(Math.abs((1 + s(2)) ** 3 - (7 + 5 * s(2))) < 1e-9); q.push(num("hard", "$(1+\\sqrt2)^3=a+b\\sqrt2$ with $a,b$ integers. Find $b$.", 5, 0, "$(1+\\sqrt2)^2=3+2\\sqrt2$; times $(1+\\sqrt2)$: $3+3\\sqrt2+2\\sqrt2+4=7+5\\sqrt2$.")); }
  q.push(RD("hard", "Simplify $\\dfrac{2}{\\sqrt3-\\sqrt2}+\\dfrac{3}{\\sqrt3+\\sqrt2}$.", 2 / (s(3) - s(2)) + 3 / (s(3) + s(2)), V("5\\sqrt{3}-\\sqrt{2}", 5 * s(3) - s(2)), [V("5\\sqrt{3}+\\sqrt{2}", 5 * s(3) + s(2)), V("5\\sqrt{3}", 5 * s(3)), V("\\sqrt{3}+5\\sqrt{2}", s(3) + 5 * s(2))], "Each conjugate product is $3-2=1$: $2(\\sqrt3+\\sqrt2)+3(\\sqrt3-\\sqrt2)$."));
  { same("B-44", (2 + s(3)) ** 2 + (2 - s(3)) ** 2, 14); q.push(num("hard", "Evaluate $(2+\\sqrt3)^2+(2-\\sqrt3)^2$.", 14, 0, "$(7+4\\sqrt3)+(7-4\\sqrt3)=14$: the radical terms cancel.")); }
  { const x = 3 + 2 * s(2); same("B-45", x + 1 / x, 6); q.push(num("hard", "If $x=3+2\\sqrt2$, find $x+\\dfrac1x$.", 6, 0, "$\\dfrac1x=\\dfrac{1}{3+2\\sqrt2}=3-2\\sqrt2$ (conjugate, since $9-8=1$). The sum is $6$.")); }
  { const v = { "3√5": 3 * s(5), "2√11": 2 * s(11), "4√3": 4 * s(3), "5√2": 5 * s(2) }; assert.strictEqual(Object.entries(v).sort((a, b) => a[1] - b[1])[0][0], "2√11");
    q.push(MC("hard", "Which is the smallest?", "$2\\sqrt{11}$", ["$3\\sqrt{5}$", "$4\\sqrt{3}$", "$5\\sqrt{2}$"], "Write as entire radicals: $\\sqrt{44},\\ \\sqrt{45},\\ \\sqrt{48},\\ \\sqrt{50}$.")); }
  q.push(num("hard", "$\\sqrt{k}+\\sqrt{18}=5\\sqrt2$. Find $k$.", 8, 0, "$\\sqrt{18}=3\\sqrt2$, so $\\sqrt k=2\\sqrt2=\\sqrt8$."));
  { for (const e of [(s(2) + s(3)) ** 2, 5 + s(24)]) assert.ok(Math.abs(e - (5 + 2 * s(6))) < 1e-9); assert.ok(Math.abs(5 + s(12) - (5 + 2 * s(6))) > 1e-6);
    q.push(ms("hard", "Which expressions equal $5+2\\sqrt6$?", ["$(\\sqrt2+\\sqrt3)^2$", "$(\\sqrt3+\\sqrt2)^2$", "$5+\\sqrt{24}$", "$5+\\sqrt{12}$"], [0, 1, 2], "$(\\sqrt2+\\sqrt3)^2=5+2\\sqrt6$ and $2\\sqrt6=\\sqrt{24}$; $\\sqrt{12}=2\\sqrt3$.")); }
  { let sum = 0; for (let n = 1; n <= 99; n++) sum += 1 / (s(n) + s(n + 1)); same("B-49", sum, 9); q.push(num("hard", "Evaluate $\\dfrac{1}{\\sqrt1+\\sqrt2}+\\dfrac{1}{\\sqrt2+\\sqrt3}+\\dfrac{1}{\\sqrt3+\\sqrt4}+\\cdots+\\dfrac{1}{\\sqrt{99}+\\sqrt{100}}$.", 9, 0, "Rationalise each term: $\\dfrac{1}{\\sqrt n+\\sqrt{n+1}}=\\sqrt{n+1}-\\sqrt n$. The sum telescopes to $\\sqrt{100}-\\sqrt1=9$.")); }
  { same("B-50", s(11 - 6 * s(2)), 3 - s(2)); q.push(num("hard", "$\\sqrt{11-6\\sqrt2}=a-\\sqrt{b}$ with $a,b$ positive integers. Find $a+b$.", 5, 0, "$(3-\\sqrt2)^2=9-6\\sqrt2+2=11-6\\sqrt2$, so $a=3,\\ b=2$.")); }
  q.push(tf("hard", "For $a,b\\ge0$, $\\sqrt{a^2+b^2}=a+b$ only when $a=0$ or $b=0$.", true, "Squaring: $a^2+b^2=a^2+2ab+b^2$, so $ab=0$."));
  q.push(tf("hard", "The sum of two irrational numbers is always irrational.", false, "$(3+\\sqrt2)+(3-\\sqrt2)=6$ is rational."));
  { same("B-53", 1 / (s(3) - 1), (s(3) + 1) / 2); q.push(fill("hard", "Rationalise $\\dfrac{1}{\\sqrt3-1}$: ___", ["(√3+1)/2", "(1+√3)/2", "(sqrt(3)+1)/2", "(1+sqrt(3))/2", "(√3 + 1)/2", "(1 + √3)/2"], "Multiply by $\\dfrac{\\sqrt3+1}{\\sqrt3+1}$: denominator $3-1=2$.")); }
  { same("B-54", 0.5 * 2 * s(3) * 4 * s(3), 12); q.push(num("hard", "A right triangle has legs $2\\sqrt3$ and $4\\sqrt3$. Find its area.", 12, 0, "$\\tfrac12(2\\sqrt3)(4\\sqrt3)=\\tfrac12\\cdot8\\cdot3=12$.")); }
  q.push({ ...RD("hard", "A rectangle has sides $(\\sqrt5+1)$ and $(\\sqrt5-1)$. What is the exact length of its diagonal?", s((s(5) + 1) ** 2 + (s(5) - 1) ** 2), V("2\\sqrt{3}", 2 * s(3)), [V("2\\sqrt{5}", 2 * s(5)), V("4", 4), V("2\\sqrt{6}", 2 * s(6))], "$d^2=(6+2\\sqrt5)+(6-2\\sqrt5)=12$, so $d=\\sqrt{12}=2\\sqrt3$."),
    image: shapeSvg({ kind: "rect", wl: "√5 + 1", hl: "√5 − 1", dl: "d = ?", title: "A rectangle" }) });
  q.push(num("hard", "Find $k$ so that $(3+\\sqrt{k})(3-\\sqrt{k})=2$.", 7, 0, "$9-k=2$."));
  q.push(order("hard", "Put the steps in order to simplify $\\dfrac{2+\\sqrt3}{2-\\sqrt3}$.", ["Multiply top and bottom by the conjugate $2+\\sqrt3$", "Numerator: $(2+\\sqrt3)^2=7+4\\sqrt3$", "Denominator: $4-3=1$", "Result: $7+4\\sqrt3$"]));
  { const L = [["$\\sqrt2\\cdot\\sqrt8$", s(2) * s(8), "$4$", 4], ["$\\dfrac{\\sqrt{50}}{\\sqrt2}$", s(50) / s(2), "$5$", 5], ["$(\\sqrt3+1)(\\sqrt3-1)$", (s(3) + 1) * (s(3) - 1), "$2$", 2], ["$\\sqrt{(-7)^2}$", s(49), "$7$", 7]]; for (const [, a, , b] of L) assert.ok(Math.abs(a - b) < 1e-9);
    q.push(match("hard", "Match each expression to its value — watch the tricks.", L.map((l) => l[0]), L.map((l) => l[2]), [0, 1, 2, 3])); }
  q.push(RD("hard", "Rationalise $\\dfrac{5}{2\\sqrt3-\\sqrt2}$.", 5 / (2 * s(3) - s(2)), V("\\dfrac{2\\sqrt{3}+\\sqrt{2}}{2}", (2 * s(3) + s(2)) / 2), [V("\\dfrac{2\\sqrt{3}-\\sqrt{2}}{2}", (2 * s(3) - s(2)) / 2), V("2\\sqrt{3}+\\sqrt{2}", 2 * s(3) + s(2)), V("\\dfrac{2\\sqrt{3}+\\sqrt{2}}{5}", (2 * s(3) + s(2)) / 5)], "The conjugate gives $12-2=10$, so $\\dfrac{5(2\\sqrt3+\\sqrt2)}{10}=\\dfrac{2\\sqrt3+\\sqrt2}{2}$."));
  { same("B-60", (3 + 2 * s(2)) ** 10 * (3 - 2 * s(2)) ** 10, 1); q.push(num("hard", "Evaluate $(3+2\\sqrt2)^{10}(3-2\\sqrt2)^{10}$.", 1, 0.0001, "Combine: $[(3+2\\sqrt2)(3-2\\sqrt2)]^{10}=(9-8)^{10}=1$.")); }
  const c = { easy: 0, medium: 0, hard: 0 }; for (const x of q) c[x.difficulty]++;
  assert.ok(q.length === 60 && c.easy === 20 && c.medium === 20 && c.hard === 20, `counts ${q.length} ${JSON.stringify(c)}`);
  return q;
}

// ───────────────────────── assignment ─────────────────────────
same("A-K1", s(288), 12 * s(2)); same("A-K2", 3 * s(50) - 2 * s(18) + s(8), 11 * s(2)); same("A-K3", (4 - s(3)) * (2 + 3 * s(3)), -1 + 10 * s(3));
same("A-T1", 7 / (5 - s(11)), (5 + s(11)) / 2); same("A-T2", s(17 + 12 * s(2)), 3 + 2 * s(2));
same("A-C1", s(8) + s(2), 3 * s(2)); assert.notStrictEqual(Math.round((s(8) + s(2)) * 1000), Math.round(s(10) * 1000));
same("A-A1", s(400 + 100), 10 * s(5)); same("A-A2", s((3 + s(2)) ** 2 + (3 - s(2)) ** 2), s(22)); same("A-A2a", (3 + s(2)) * (3 - s(2)), 7); same("A-A2b", 0.5 * (3 + s(2)) * (3 - s(2)), 3.5);
same("A-A3", s(36 + 16), 2 * s(13)); same("A-A3b", (2 * s(13)) / s(13), 2);

export const ASSIGNMENT = (() => {
  let n = 0;
  const sec = (arr) => arr.map((t) => `${++n}. ${t}`);
  const description = [
    "Knowledge & Understanding",
    ...sec([
      "Simplify $\\sqrt{288}$.",
      "Simplify $3\\sqrt{50}-2\\sqrt{18}+\\sqrt8$.",
      "Expand and simplify $(4-\\sqrt3)(2+3\\sqrt3)$.",
    ]),
    "Thinking",
    ...sec([
      "Rationalise the denominator of $\\dfrac{7}{5-\\sqrt{11}}$ and simplify your answer completely.",
      "Find integers $a$ and $b$ such that $(a+b\\sqrt2)^2=17+12\\sqrt2$, and hence write $\\sqrt{17+12\\sqrt2}$ in simplest form. Verify with a calculator.",
    ]),
    "Communication",
    ...sec([
      "A student writes $\\sqrt8+\\sqrt2=\\sqrt{10}$. Use decimal values to show the claim is false, explain the mistake, and write the correct simplified sum.",
      "Explain what it means to \"rationalise a denominator\", why multiplying top and bottom by the same number does not change the value of a fraction, and why the conjugate works for a binomial denominator. Use $\\dfrac{6}{\\sqrt3}$ as an example and check with a calculator.",
    ]),
    "Application",
    ...sec([
      "A rectangular screen is 20 cm by 10 cm. (a) Find the exact length of its diagonal in simplest form. (b) Give the diagonal to the nearest tenth of a centimetre. (c) A cable of length 22 cm is available; is it long enough to run along the diagonal? Justify with your exact value.",
      "A rectangle has sides $(3+\\sqrt2)$ cm and $(3-\\sqrt2)$ cm. (a) Show that its area is exactly 7 cm². (b) Find the exact length of its diagonal. (c) Find the exact area of the right triangle formed by the diagonal and two sides.",
      "Point $A$ is at $(1,2)$ and point $B$ is at $(7,6)$ on a map (units in km). (a) Find the exact distance $AB$ in simplest form. (b) A drone flies from $A$ to $B$ at a speed of $\\sqrt{13}$ km per hour; show that the trip takes exactly 2 hours. (c) State the decimal distance to 2 decimal places.",
    ]),
  ].join("\n");
  return { title: `Assignment ${CODE} — ${TITLE}`, description };
})();
