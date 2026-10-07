// Fully-authored MCR3U lessons. EACH lesson is a SINGLE lecture-box html block,
// matching the Grade 9/10 pattern exactly: 🔵 Examples (Example N: title, Step/
// Conclusion), 🟡 Practice Questions (Question N + View answer), ❓ Q&A Summary
// (Q1: ...). Interactive graphs are embedded inline via gframe (as Grade 9/10 do).
import { html, gframe } from "./seed-mpm2d.mjs";
import { u1 } from "./mcr3u-lessons-u1.mjs";
import { u3 } from "./mcr3u-lessons-u3.mjs";
import { u4 } from "./mcr3u-lessons-u4.mjs";
import { u5 } from "./mcr3u-lessons-u5.mjs";
import { u6 } from "./mcr3u-lessons-u6.mjs";
import { u7 } from "./mcr3u-lessons-u7.mjs";

const L = (code, title, blocks) => ({ code, title, blocks });
// canonical inline box styles (identical to Grade 9/10)
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const MI = `style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
// table styles for the 2.2 factoring tables
const LTH = "padding:4px 10px;border:1px solid #cbd5e1;background:#e2e8f0;text-align:left;font-weight:700;";
const LTD = "padding:4px 10px;border:1px solid #cbd5e1;text-align:center;";
const LTL = "padding:4px 10px;border:1px solid #cbd5e1;text-align:left;";

export const authored = {};
Object.assign(authored, u1); // Unit 1 lessons (override seed versions)
Object.assign(authored, u3); // Unit 3 lessons
Object.assign(authored, u4); // Unit 4 lessons
Object.assign(authored, u5); // Unit 5 lessons
Object.assign(authored, u6); // Unit 6 lessons
Object.assign(authored, u7); // Unit 7 lessons

// ══════════════ UNIT 2 — EQUIVALENT ALGEBRAIC EXPRESSIONS ══════════════

authored["2.1"] = L("2.1", "Adding & Multiplying Polynomials", [html(String.raw`<div class="lecture-box">
  <h1>➕ Adding &amp; Multiplying Polynomials</h1>
  <p><strong>Overview.</strong> A <strong>polynomial</strong> is a sum of terms like \(3x^2-5x+7\). Two expressions are <strong>equivalent</strong> if they give the same value for every \(x\). This unit is about rewriting expressions into equivalent, simpler forms.</p>

  <h2>📌 The vocabulary</h2>
  <p><strong>Like terms</strong> have the same variable part (\(3x^2\) and \(-7x^2\)); only like terms combine. The <strong>degree</strong> is the highest exponent.</p>

  <h2>📌 The two moves</h2>
  <ul>
    <li><strong>Distributive property:</strong> \(a(b+c)=ab+ac\).</li>
    <li><strong>FOIL:</strong> \((a+b)(c+d)=ac+ad+bc+bd\).</li>
    <li><strong>Special products:</strong> \((a\pm b)^2=a^2\pm2ab+b^2\) and \((a+b)(a-b)=a^2-b^2\).</li>
  </ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Collecting like terms</h3><p>Simplify \(3(2x-1)+4(x+2)\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> Distribute: \(6x-3+4x+8\).</div><em>Conclusion: \(10x+5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Monomial × polynomial</h3><p>Expand \(2x(3x^2-x+4)\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> Multiply each term by \(2x\).</div><em>Conclusion: \(6x^3-2x^2+8x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: FOIL</h3><p>Expand \((x+5)(x-3)\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2-3x+5x-15\).</div><div class="step"><strong>Step 2:</strong> Combine the middle: \(x^2+2x-15\).</div><em>Conclusion: the factored and expanded forms graph as the same curve. ✓</em></div>
    ${gframe(["y = (x+5)*(x-3)", "y = x^2+2*x-15"], { title: "(x+5)(x-3) = x^2+2x-15" })}
  </div>
  <div class="example-box" ${EX}><h3>Example 4: Perfect square</h3><p>Expand \((2x-3)^2\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \((2x)^2-2(2x)(3)+3^2\).</div><em>Conclusion: \(4x^2-12x+9\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Area model</h3><p>A rectangle is \((x+4)\) by \((x+6)\). Write its area.</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \((x+4)(x+6)\).</div><em>Conclusion: \(x^2+10x+24\). ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simplify \(5(x-2)-3(2x-1)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(5x-10-6x+3\). <em>Answer: \(-x-7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Expand \(-3x(x^2+2x-5)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(-3x^3-6x^2+15x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Expand \((x-7)(x+2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x^2-5x-14\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Expand \((3x+1)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(9x^2+6x+1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Expand and simplify \((x+3)(x-3)+(x-2)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\((x^2-9)+(x^2-4x+4)\). <em>Answer: \(2x^2-4x-5\).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What degree is the product of a degree-2 and a degree-3 polynomial?</h3><p><em>Degree 5 — you add the degrees when multiplying.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why is \((a+b)^2\ne a^2+b^2\)?</h3><p><em>You must include the middle term \(2ab\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How can I check an expansion?</h3><p><em>Substitute a number (say \(x=1\)) into both forms — equivalent expressions match. Graphing both overlays them.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Does order matter when collecting like terms?</h3><p><em>No, but writing in descending degree is standard form and avoids errors.</em></p></div>
</div>`)]);

authored["2.2"] = L("2.2", "Factoring Polynomials", [html(String.raw`<div class="lecture-box">
  <h1>🧩 Factoring Polynomials</h1>
  <p><strong>Overview.</strong> Factoring is expansion <em>in reverse</em>: rewrite a sum as a product. It is the key to simplifying rational expressions and to reading a parabola's \(x\)-intercepts. There are several patterns, so this lesson is organised around <strong>one decision order</strong> — a short checklist you run on every expression — and spends the most time on the hardest pattern, the trinomial \(ax^2+bx+c\) with \(a\ne1\), explaining <em>why</em> the method works and how to run it without guessing.</p>

  <h2>📌 Step 0: The decision order</h2>
  <p>Run this checklist <strong>top to bottom</strong> every time. Each step either finishes the job or hands a simpler expression to the next step.</p>
  <div style="overflow-x:auto;"><table style="border-collapse:collapse;font-size:14px;margin:8px 0;width:100%;">
    <tr><th style="${LTH}">Look at…</th><th style="${LTH}">If you see…</th><th style="${LTH}">Do this</th></tr>
    <tr><td style="${LTL}"><strong>1. Every term</strong></td><td style="${LTL}">a number or variable shared by all terms</td><td style="${LTL}">Take out the <strong>greatest common factor (GCF)</strong>, then look at what is left.</td></tr>
    <tr><td style="${LTL}"><strong>2. Number of terms</strong></td><td style="${LTL}">two terms, both perfect squares, subtracted</td><td style="${LTL}"><strong>Difference of squares:</strong> \(a^2-b^2=(a+b)(a-b)\).</td></tr>
    <tr><td style="${LTL}"></td><td style="${LTL}">three terms with \(a=1\): \(x^2+bx+c\)</td><td style="${LTL}"><strong>Sum and product:</strong> find two numbers that multiply to \(c\) and add to \(b\).</td></tr>
    <tr><td style="${LTL}"></td><td style="${LTL}">three terms with \(a\ne1\): \(ax^2+bx+c\)</td><td style="${LTL}"><strong>Decomposition</strong> (below). First check for a perfect square \(a^2\pm2ab+b^2=(a\pm b)^2\).</td></tr>
    <tr><td style="${LTL}"><strong>3. The result</strong></td><td style="${LTL}">any factor that can still be factored</td><td style="${LTL}">Repeat from step 1. Finish with a <strong>check by expanding</strong>.</td></tr>
  </table></div>

  <h2>📌 Trinomials \(x^2+bx+c\) (where \(a=1\)): sum and product</h2>
  <p>Because \((x+p)(x+q)=x^2+(p+q)x+pq\), the numbers \(p,q\) must <strong>multiply to \(c\)</strong> and <strong>add to \(b\)</strong>. List the factor pairs of \(c\) in an organised table and read off the pair with the right sum.</p>
  <p><strong>Sign rule.</strong> If \(c>0\), \(p\) and \(q\) have the <em>same</em> sign — both take the sign of \(b\). If \(c<0\), they have <em>opposite</em> signs — the number with the larger absolute value takes the sign of \(b\).</p>

  <h2>📌 Trinomials \(ax^2+bx+c\) (where \(a\ne1\)): decomposition</h2>
  <p><strong>Why it works.</strong> Expand a product of two binomials: \((px+q)(rx+s)=pr\,x^2+(ps+qr)\,x+qs\). The two pieces of the middle term, \(ps\) and \(qr\), <em>add to \(b\)</em> and <em>multiply to \((ps)(qr)=(pr)(qs)=ac\)</em>. So to undo the expansion we look for two numbers that <strong>multiply to \(ac\)</strong> and <strong>add to \(b\)</strong>, split the middle term into those two pieces, and <strong>group</strong>. The same "sum and product" idea as \(a=1\) — the product target is just \(ac\) instead of \(c\).</p>
  <p><strong>The five steps.</strong></p>
  <ol>
    <li><strong>Clear the way:</strong> factor out any GCF first, and make the leading coefficient positive.</li>
    <li><strong>Find \(ac\)</strong> (multiply the first and last coefficients).</li>
    <li><strong>Find the pair:</strong> two numbers that multiply to \(ac\) and add to \(b\). Use the sign rule above and list factor pairs of \(|ac|\) in a table.</li>
    <li><strong>Split</strong> the middle term into those two pieces: \(ax^2+\underline{m}\,x+\underline{n}\,x+c\).</li>
    <li><strong>Group</strong> the first two and last two terms, factor each pair, and pull out the <em>common bracket</em>. If the brackets do not match, recheck the signs.</li>
  </ol>
  <p><strong>Two safety nets.</strong> (1) <em>Check by expanding</em> — you must return to the original. (2) If <em>no</em> pair of factors of \(ac\) adds to \(b\), the trinomial is <strong>prime</strong> over the integers and cannot be factored further. The order of the two pieces does not matter: \(6x+x\) and \(x+6x\) lead to the same final answer.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" ${EX}><h3>Example 1: Common factor — and keep going</h3><p>Factor fully \(8x^3-12x^2+4x\).</p>
    <div class="solution">
    <div class="step"><strong>Step 1 — the GCF.</strong> Numbers: the greatest number dividing \(8,12,4\) is \(4\). Variables: the lowest power of \(x\) present in every term is \(x^1\). So the GCF is \(4x\).</div>
    <div class="step"><strong>Step 2 — divide each term by \(4x\):</strong> \(\tfrac{8x^3}{4x}=2x^2,\ \ \tfrac{-12x^2}{4x}=-3x,\ \ \tfrac{4x}{4x}=1\). So \(8x^3-12x^2+4x=4x(2x^2-3x+1)\).</div>
    <div class="step"><strong>Step 3 — look inside the bracket.</strong> \(2x^2-3x+1\) is a trinomial with \(a=2\), so it may factor again. \(ac=2\): the pair \(-1,-2\) multiplies to \(2\) and adds to \(-3\). Split: \(2x^2-2x-x+1=2x(x-1)-1(x-1)=(2x-1)(x-1)\).</div>
    <div class="step"><strong>Check.</strong> \(4x(2x-1)(x-1)=4x(2x^2-3x+1)=8x^3-12x^2+4x\). ✓</div>
    <em>Conclusion: \(8x^3-12x^2+4x=4x(2x-1)(x-1)\). "Factor fully" means you must check the bracket again. ✓</em></div></div>

  <div class="example-box" ${EX}><h3>Example 2: \(x^2+bx+c\) with a negative constant</h3><p>Factor \(x^2-3x-40\).</p>
    <div class="solution">
    <div class="step"><strong>Step 1 — what we need.</strong> Two numbers that multiply to \(-40\) and add to \(-3\). Since the product is negative, one is positive and one is negative; since the sum is negative, the one with the <em>larger absolute value</em> is the negative one.</div>
    <div class="step"><strong>Step 2 — list the pairs</strong> (larger one negative):
      <div style="overflow-x:auto;"><table style="border-collapse:collapse;font-size:13px;margin:6px 0;"><tr><th style="${LTH}">Pair with product \(-40\)</th><td style="${LTD}">\(1,-40\)</td><td style="${LTD}">\(2,-20\)</td><td style="${LTD}">\(4,-10\)</td><td style="${LTD}">\(5,-8\)</td></tr><tr><th style="${LTH}">Sum</th><td style="${LTD}">\(-39\)</td><td style="${LTD}">\(-18\)</td><td style="${LTD}">\(-6\)</td><td style="${LTD}"><strong>\(-3\) ✓</strong></td></tr></table></div></div>
    <div class="step"><strong>Step 3 — write the factors:</strong> \((x+5)(x-8)\).</div>
    <div class="step"><strong>Check.</strong> \((x+5)(x-8)=x^2-8x+5x-40=x^2-3x-40\). ✓</div>
    <em>Conclusion: \(x^2-3x-40=(x+5)(x-8)\). ✓</em></div></div>

  <div class="example-box" ${EX}><h3>Example 3: \(ax^2+bx+c\), \(a\ne1\) — every step explained</h3><p>Factor \(2x^2+7x+3\).</p>
    <div class="solution">
    <div class="step"><strong>Step 1 — clear the way.</strong> No common factor, and \(a=2>0\).</div>
    <div class="step"><strong>Step 2 — find \(ac\).</strong> \(ac=2\times3=6\).</div>
    <div class="step"><strong>Step 3 — find the pair.</strong> Need two numbers that multiply to \(6\) and add to \(7\). All terms are positive, so both numbers are positive. Pairs of \(6\): \(1\times6\) (sum \(7\) ✓), \(2\times3\) (sum \(5\)). The pair is \(1\) and \(6\).</div>
    <div class="step"><strong>Step 4 — split the middle term.</strong> \(7x=6x+x\), so \(2x^2+7x+3=2x^2+6x+x+3\).</div>
    <div class="step"><strong>Step 5 — group.</strong> \((2x^2+6x)+(x+3)=2x(x+3)+1(x+3)\). Both groups produce the <em>same bracket</em> \((x+3)\) — that is the sign the split worked. Pull it out: \((x+3)(2x+1)\).</div>
    <div class="step"><strong>Picture it.</strong> The four pieces fill a rectangle with sides \((2x+1)\) and \((x+3)\):
      <div style="overflow-x:auto;"><table style="border-collapse:collapse;font-size:14px;margin:6px auto;text-align:center;"><tr><td style="${LTD}"></td><th style="${LTH}">\(x\)</th><th style="${LTH}">\(+3\)</th></tr><tr><th style="${LTH}">\(2x\)</th><td style="${LTD}">\(2x^2\)</td><td style="${LTD}">\(6x\)</td></tr><tr><th style="${LTH}">\(+1\)</th><td style="${LTD}">\(x\)</td><td style="${LTD}">\(3\)</td></tr></table></div>
      The middle pieces \(6x\) and \(x\) are exactly the split from Step 4.</div>
    <div class="step"><strong>Check.</strong> \((x+3)(2x+1)=2x^2+x+6x+3=2x^2+7x+3\). ✓</div>
    <em>Conclusion: \(2x^2+7x+3=(x+3)(2x+1)\). ✓</em></div>
    ${gframe(["y = 2*x^2+7*x+3"], { title: "Zeros at x = -3 and x = -1/2 match the factors (x+3) and (2x+1)", zoom: 60, zoomY: 24, ox: 60, oy: 72, labels: [{ x: -3, y: 0, t: "(-3, 0)", c: "#1b7a44" }, { x: -0.5, y: 0, t: "(-1/2, 0)", c: "#1b7a44" }] })}
  </div>

  <div class="example-box" ${EX}><h3>Example 4: \(a\ne1\) with a negative middle term (the grouping sign trap)</h3><p>Factor \(3x^2-11x+6\).</p>
    <div class="solution">
    <div class="step"><strong>Step 1–2.</strong> No common factor. \(ac=3\times6=18\).</div>
    <div class="step"><strong>Step 3 — find the pair.</strong> Product \(+18\) means the two numbers have the <em>same sign</em>; sum \(-11\) means they are <em>both negative</em>.
      <div style="overflow-x:auto;"><table style="border-collapse:collapse;font-size:13px;margin:6px 0;"><tr><th style="${LTH}">Pair with product \(18\)</th><td style="${LTD}">\(-1,-18\)</td><td style="${LTD}">\(-2,-9\)</td><td style="${LTD}">\(-3,-6\)</td></tr><tr><th style="${LTH}">Sum</th><td style="${LTD}">\(-19\)</td><td style="${LTD}"><strong>\(-11\) ✓</strong></td><td style="${LTD}">\(-9\)</td></tr></table></div></div>
    <div class="step"><strong>Step 4 — split.</strong> \(3x^2-9x-2x+6\).</div>
    <div class="step"><strong>Step 5 — group, watching the sign.</strong> First pair: \(3x^2-9x=3x(x-3)\). Second pair: \(-2x+6\). To get the same bracket \((x-3)\), factor out a <strong>negative</strong>: \(-2x+6=-2(x-3)\). Then \(3x(x-3)-2(x-3)=(3x-2)(x-3)\).</div>
    <div class="step"><strong>Check.</strong> \((3x-2)(x-3)=3x^2-9x-2x+6=3x^2-11x+6\). ✓</div>
    <em>Conclusion: \(3x^2-11x+6=(3x-2)(x-3)\). When the second group starts with a minus, factor out the minus so the brackets match. ✓</em></div></div>

  <div class="example-box" ${EX}><h3>Example 5: \(a\ne1\) with a negative constant — a systematic search</h3><p>Factor \(6x^2-7x-20\).</p>
    <div class="solution">
    <div class="step"><strong>Step 1–2.</strong> No common factor. \(ac=6\times(-20)=-120\).</div>
    <div class="step"><strong>Step 3 — find the pair.</strong> Product \(-120\): one number is positive, one is negative. Sum \(-7\): the <em>larger absolute value is negative</em>. List the factor pairs of \(120\) and look for two whose <strong>difference</strong> is \(7\):
      <div style="overflow-x:auto;"><table style="border-collapse:collapse;font-size:13px;margin:6px 0;"><tr><th style="${LTH}">Factors of 120</th><td style="${LTD}">1, 120</td><td style="${LTD}">2, 60</td><td style="${LTD}">3, 40</td><td style="${LTD}">4, 30</td><td style="${LTD}">5, 24</td><td style="${LTD}">6, 20</td><td style="${LTD}">8, 15</td><td style="${LTD}">10, 12</td></tr><tr><th style="${LTH}">Difference</th><td style="${LTD}">119</td><td style="${LTD}">58</td><td style="${LTD}">37</td><td style="${LTD}">26</td><td style="${LTD}">19</td><td style="${LTD}">14</td><td style="${LTD}"><strong>7 ✓</strong></td><td style="${LTD}">2</td></tr></table></div>
      So the numbers are \(+8\) and \(-15\) (sum \(-7\), product \(-120\)).</div>
    <div class="step"><strong>Step 4 — split.</strong> \(6x^2-15x+8x-20\).</div>
    <div class="step"><strong>Step 5 — group.</strong> \(3x(2x-5)+4(2x-5)=(3x+4)(2x-5)\). The common bracket \((2x-5)\) appeared, so the pair was right.</div>
    <div class="step"><strong>Check.</strong> \((3x+4)(2x-5)=6x^2-15x+8x-20=6x^2-7x-20\). ✓</div>
    <em>Conclusion: \(6x^2-7x-20=(3x+4)(2x-5)\). A table of factor pairs turns "guessing" into a short search. ✓</em></div></div>

  <div class="example-box" ${EX}><h3>Example 6: A common factor first, then \(a\ne1\)</h3><p>Factor fully \(12x^2+22x-20\).</p>
    <div class="solution">
    <div class="step"><strong>Step 1 — GCF.</strong> All three coefficients are even: \(12x^2+22x-20=2(6x^2+11x-10)\). <em>Why bother?</em> Working with \(ac=-60\) is far easier than with \(ac=12\times(-20)=-240\).</div>
    <div class="step"><strong>Step 2 — find \(ac\) for the bracket.</strong> \(6\times(-10)=-60\). Need numbers that multiply to \(-60\) and add to \(11\): the larger one is positive. Pairs of \(60\) with difference \(11\): \(1,60\ (59)\); \(2,30\ (28)\); \(3,20\ (17)\); \(4,15\ (\mathbf{11}\ \checkmark)\). So \(+15\) and \(-4\).</div>
    <div class="step"><strong>Step 3 — split and group.</strong> \(6x^2+15x-4x-10=3x(2x+5)-2(2x+5)=(3x-2)(2x+5)\).</div>
    <div class="step"><strong>Step 4 — put the GCF back.</strong> \(12x^2+22x-20=2(3x-2)(2x+5)\).</div>
    <div class="step"><strong>Check.</strong> \((3x-2)(2x+5)=6x^2+15x-4x-10=6x^2+11x-10\); times \(2\) gives \(12x^2+22x-20\). ✓</div>
    <em>Conclusion: \(2(3x-2)(2x+5)\). Forgetting the leading 2 is the most common error — always carry the GCF to the end. ✓</em></div></div>

  <div class="example-box" ${EX}><h3>Example 7: When it will not factor</h3><p>Can \(2x^2+3x+4\) be factored over the integers?</p>
    <div class="solution">
    <div class="step"><strong>Step 1.</strong> \(ac=2\times4=8\). We need two numbers with product \(8\) and sum \(3\). Both must be positive.</div>
    <div class="step"><strong>Step 2 — exhaust the pairs:</strong> \(1\times8\) has sum \(9\); \(2\times4\) has sum \(6\). Neither sum is \(3\).</div>
    <em>Conclusion: no pair works, so \(2x^2+3x+4\) is <strong>prime</strong> over the integers — it cannot be factored. Listing <em>all</em> pairs is what proves it; do not just stop after one failed guess. ✓</em></div></div>

  <div class="example-box" ${EX}><h3>Example 8: Special patterns — difference of squares and perfect squares</h3><p>Factor (a) \(25x^2-16\) and (b) \(9x^2-30x+25\).</p>
    <div class="solution">
    <div class="step"><strong>(a) Recognise it.</strong> Two terms, subtracted, both perfect squares: \(25x^2=(5x)^2\) and \(16=4^2\). Use \(a^2-b^2=(a+b)(a-b)\) with \(a=5x,\ b=4\): \((5x+4)(5x-4)\).</div>
    <div class="step"><strong>(b) Test for a perfect square.</strong> First term \(9x^2=(3x)^2\), last term \(25=5^2\). The middle term must equal \(\pm2(3x)(5)=\pm30x\). It is \(-30x\), so the pattern \(a^2-2ab+b^2=(a-b)^2\) applies: \((3x-5)^2\).</div>
    <div class="step"><strong>Check (b).</strong> \((3x-5)^2=9x^2-30x+25\). ✓ (Decomposition would also give this: \(ac=225\), pair \(-15,-15\).)</div>
    <em>Conclusion: (a) \((5x+4)(5x-4)\); (b) \((3x-5)^2\). The patterns are shortcuts for cases the general method also covers. ✓</em></div></div>

  <div class="example-box" ${EX}><h3>Example 9: A negative leading coefficient</h3><p>Factor \(-2x^2-x+6\).</p>
    <div class="solution">
    <div class="step"><strong>Step 1 — make \(a\) positive.</strong> Factor out \(-1\): \(-2x^2-x+6=-(2x^2+x-6)\). (This makes the signs easy to manage.)</div>
    <div class="step"><strong>Step 2.</strong> For \(2x^2+x-6\): \(ac=-12\). Need product \(-12\), sum \(+1\): larger one positive. Pairs of \(12\): \(1,12\ (11)\); \(2,6\ (4)\); \(3,4\ (\mathbf{1}\ \checkmark)\). So \(+4\) and \(-3\).</div>
    <div class="step"><strong>Step 3 — split and group.</strong> \(2x^2+4x-3x-6=2x(x+2)-3(x+2)=(2x-3)(x+2)\).</div>
    <div class="step"><strong>Step 4 — restore the \(-1\).</strong> \(-2x^2-x+6=-(2x-3)(x+2)\), which can also be written \((3-2x)(x+2)\).</div>
    <div class="step"><strong>Check.</strong> \((3-2x)(x+2)=3x+6-2x^2-4x=-2x^2-x+6\). ✓</div>
    <em>Conclusion: \(-(2x-3)(x+2)\). Take out the \(-1\) <em>first</em>, and remember to put it back. ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Factor \(9x^2+12x\).</p><details><summary>View answer</summary><div class="solution"><div class="step">The GCF of \(9\) and \(12\) is \(3\), and the lowest power of \(x\) is \(x\), so the GCF is \(3x\). Divide each term: \(\tfrac{9x^2}{3x}=3x\), \(\tfrac{12x}{3x}=4\). <em>Answer: \(3x(3x+4)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Factor \(x^2-x-12\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Product \(-12\), sum \(-1\): the larger number is negative. Pairs: \(1,-12\ (-11)\); \(2,-6\ (-4)\); \(3,-4\ (-1\ \checkmark)\). <em>Answer: \((x+3)(x-4)\). Check: \(x^2-4x+3x-12=x^2-x-12\). ✓</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Factor \(2x^2-5x-12\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Find \(ac\):</strong> \(2\times(-12)=-24\). Need product \(-24\), sum \(-5\): larger is negative. Pairs of \(24\) with difference \(5\): \(3,8\). So \(+3\) and \(-8\).</div><div class="step"><strong>Split and group:</strong> \(2x^2-8x+3x-12=2x(x-4)+3(x-4)\). <em>Answer: \((2x+3)(x-4)\). Check: \(2x^2-8x+3x-12=2x^2-5x-12\). ✓</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Factor \(5x^2+13x+6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Find \(ac\):</strong> \(5\times6=30\), all terms positive so both numbers are positive. Pairs of \(30\): \(1,30\ (31)\); \(2,15\ (17)\); \(3,10\ (13\ \checkmark)\); \(5,6\ (11)\).</div><div class="step"><strong>Split and group:</strong> \(5x^2+10x+3x+6=5x(x+2)+3(x+2)\). <em>Answer: \((5x+3)(x+2)\). Check: \(5x^2+10x+3x+6\). ✓</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Factor \(4x^2-12x+9\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Spot the pattern:</strong> \(4x^2=(2x)^2\), \(9=3^2\), and \(2(2x)(3)=12x\) matches the middle term \(-12x\).</div><div class="step"><em>Answer: \((2x-3)^2\). Check: \((2x-3)^2=4x^2-12x+9\). ✓</em> (By decomposition: \(ac=36\), pair \(-6,-6\), \(4x^2-6x-6x+9=2x(2x-3)-3(2x-3)\).)</div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 6</h3><p>Factor fully \(18x^2-8\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>GCF first:</strong> \(18x^2-8=2(9x^2-4)\). <strong>Then</strong> \(9x^2-4=(3x)^2-2^2\) is a difference of squares. <em>Answer: \(2(3x+2)(3x-2)\). Check: \(2(9x^2-4)=18x^2-8\). ✓</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 7 — Challenge</h3><p>Factor \(6x^2+x-15\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Find \(ac\):</strong> \(6\times(-15)=-90\). Need product \(-90\), sum \(+1\): the larger number is positive. Pairs of \(90\): \(1,90\ (89)\); \(2,45\ (43)\); \(3,30\ (27)\); \(5,18\ (13)\); \(6,15\ (9)\); \(9,10\ (\mathbf{1}\ \checkmark)\). So \(+10\) and \(-9\).</div><div class="step"><strong>Split and group:</strong> \(6x^2+10x-9x-15=2x(3x+5)-3(3x+5)\). <em>Answer: \((2x-3)(3x+5)\). Check: \(6x^2+10x-9x-15=6x^2+x-15\). ✓</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 8 — Challenge</h3><p>Factor fully \(12x^2-26x+10\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>GCF first:</strong> \(12x^2-26x+10=2(6x^2-13x+5)\).</div><div class="step"><strong>Inside:</strong> \(ac=30\), both numbers negative (product \(+30\), sum \(-13\)): pairs \(-1,-30\); \(-2,-15\); \(-3,-10\ (\mathbf{-13}\ \checkmark)\); \(-5,-6\). Split: \(6x^2-10x-3x+5=2x(3x-5)-1(3x-5)\) (factor out \(-1\) from \(-3x+5\) to match the bracket).</div><div class="step"><em>Answer: \(2(2x-1)(3x-5)\). Check: \((2x-1)(3x-5)=6x^2-10x-3x+5=6x^2-13x+5\); times \(2\) gives \(12x^2-26x+10\). ✓</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 9 — Challenge</h3><p>Show that \(3x^2+2x+4\) cannot be factored over the integers.</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Find \(ac\):</strong> \(3\times4=12\); all terms positive so we need two positive numbers with product \(12\) and sum \(2\). Pairs: \(1,12\ (13)\); \(2,6\ (8)\); \(3,4\ (7)\). No pair has sum \(2\). <em>Answer: no pair works, so the trinomial is prime.</em></div></div></details></div>

  <div class="mistake-box" ${MI}><h3>⚠️ Common Mistakes</h3><ul><li>Skipping the common factor (or forgetting to put it back at the end).</li><li>Using the product \(c\) instead of \(ac\) when \(a\ne1\).</li><li>Sign errors when grouping — when a pair starts with a minus, factor out the minus so the brackets match.</li><li>Stopping after one failed guess instead of listing <em>all</em> factor pairs; and declaring something "factored" while a bracket still factors.</li><li>Treating \(x^2+16\) (a <em>sum</em> of squares) as a difference of squares — it does not factor over the integers.</li><li>Not checking by expanding.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What should I always do first?</h3><p><em>Look for a common factor. "Factor fully" means nothing is left to factor, so check each bracket again.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I factor \(ax^2+bx+c\) when \(a\ne1\)?</h3><p><em>Multiply \(ac\); find two numbers that multiply to \(ac\) and add to \(b\); split the middle term; group and pull out the common bracket.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I know the trinomial is prime?</h3><p><em>List <strong>every</strong> factor pair of \(ac\) (with the right signs). If none adds to \(b\), it cannot be factored over the integers.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do I check a factoring?</h3><p><em>Expand it back — you must get the original expression.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q5: How does factoring connect to graphs?</h3><p><em>Each factor \((x-r)\) gives a zero at \(x=r\) — where the parabola crosses the \(x\)-axis. For \((2x+1)\) the zero is \(x=-\tfrac12\).</em></p></div>
</div>`)]);

authored["2.3"] = L("2.3", "Simplifying Rational Expressions", [html(String.raw`<div class="lecture-box">
  <h1>➗ Simplifying Rational Expressions</h1>
  <p><strong>Overview.</strong> A <strong>rational expression</strong> is a fraction of polynomials. Simplify exactly like number fractions: <strong>factor, then cancel common factors</strong> — and state <strong>restrictions</strong> (values making a denominator zero).</p>

  <h2>📌 The method</h2>
  <ul>
    <li>Factor every numerator and denominator.</li>
    <li>State restrictions from the <em>original</em> denominators.</li>
    <li>Cancel common factors. Multiply: cancel across. Divide: multiply by the reciprocal.</li>
  </ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Cancel a factor</h3><p>Simplify \(\dfrac{x^2-1}{x-1}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> Factor: \(\dfrac{(x-1)(x+1)}{x-1}\), \(x\ne1\).</div><em>Conclusion: \(x+1,\ x\ne1\) (a hole at \(x=1\)). ✓</em></div>
    ${gframe(["y = (x^2-1)/(x-1)"], { title: "(x^2-1)/(x-1) = x+1 with a hole at x=1", labels: [{ x: 1, y: 2, t: "hole", c: "#dc2626" }] })}
  </div>
  <div class="example-box" ${EX}><h3>Example 2: Trinomials</h3><p>Simplify \(\dfrac{x^2+5x+6}{x^2-9}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{(x+2)(x+3)}{(x+3)(x-3)}\), \(x\ne\pm3\).</div><em>Conclusion: \(\dfrac{x+2}{x-3}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Multiply</h3><p>\(\dfrac{x^2-4}{x}\cdot\dfrac{3x}{x+2}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{(x-2)(x+2)}{x}\cdot\dfrac{3x}{x+2}\), \(x\ne0,-2\).</div><em>Conclusion: \(3(x-2)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Divide</h3><p>\(\dfrac{x+1}{x-2}\div\dfrac{x+1}{x}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> Multiply by reciprocal: \(\dfrac{x+1}{x-2}\cdot\dfrac{x}{x+1}\), \(x\ne2,0,-1\).</div><em>Conclusion: \(\dfrac{x}{x-2}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Common factor</h3><p>Simplify \(\dfrac{2x^2+6x}{x^2+3x}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{2x(x+3)}{x(x+3)}\), \(x\ne0,-3\).</div><em>Conclusion: \(2\). ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simplify \(\dfrac{x^2-9}{x+3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x-3,\ x\ne-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Simplify \(\dfrac{x^2-x-6}{x^2-4}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{x-3}{x-2},\ x\ne\pm2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(\dfrac{x^2-1}{x+2}\cdot\dfrac{x+2}{x-1}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x+1,\ x\ne-2,1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(\dfrac{x}{x-3}\div\dfrac{x^2}{x-3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{1}{x},\ x\ne3,0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Simplify \(\dfrac{4x+8}{x^2+2x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{4}{x},\ x\ne0,-2\).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why state restrictions from the original denominators?</h3><p><em>Cancelling hides them — the original is still undefined there (the hole).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Can I cancel across a + sign?</h3><p><em>No! Only common <strong>factors</strong>, never terms in a sum.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does the graph's hole mean?</h3><p><em>The simplified function equals \(x+1\) everywhere except \(x=1\) — an open circle.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Do I collect restrictions when dividing?</h3><p><em>Yes — include the divisor's numerator when you flip it.</em></p></div>
</div>`)]);

authored["2.4"] = L("2.4", "Adding & Subtracting Rational Expressions", [html(String.raw`<div class="lecture-box">
  <h1>➕➗ Adding &amp; Subtracting Rational Expressions</h1>
  <p><strong>Overview.</strong> Like number fractions, you need a <strong>common denominator</strong> before adding or subtracting algebraic fractions.</p>

  <h2>📌 The method</h2>
  <ul>
    <li>Factor denominators; find the <strong>lowest common denominator (LCD)</strong>.</li>
    <li>Rewrite each fraction over the LCD; add/subtract numerators.</li>
    <li>Simplify and state restrictions.</li>
  </ul>
  <div class="mistake-box" ${MI}><p><strong>Watch the subtraction!</strong> Subtracting a fraction subtracts <em>every</em> term in its numerator: \(-(2x-1)=-2x+1\).</p></div>

  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Like denominators</h3><p>\(\dfrac{3}{x}+\dfrac{5}{x}\).</p>
    <div class="solution"><em>Conclusion: \(\dfrac{8}{x},\ x\ne0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Numeric denominators</h3><p>\(\dfrac{x}{3}+\dfrac{x}{4}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> LCD \(=12\): \(\dfrac{4x}{12}+\dfrac{3x}{12}\).</div><em>Conclusion: \(\dfrac{7x}{12}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Variable denominators</h3><p>\(\dfrac{2}{x}+\dfrac{3}{x+1}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> LCD \(=x(x+1)\): \(\dfrac{2(x+1)+3x}{x(x+1)}\).</div><em>Conclusion: \(\dfrac{5x+2}{x(x+1)},\ x\ne0,-1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Subtraction</h3><p>\(\dfrac{x+3}{x}-\dfrac{2}{x}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{(x+3)-2}{x}\).</div><em>Conclusion: \(\dfrac{x+1}{x},\ x\ne0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Factor to find the LCD</h3><p>\(\dfrac{1}{x-2}+\dfrac{1}{x^2-4}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2-4=(x-2)(x+2)\); LCD \(=(x-2)(x+2)\).</div><em>Conclusion: \(\dfrac{x+3}{(x-2)(x+2)},\ x\ne\pm2\). ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(\dfrac{5}{x}-\dfrac{2}{x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{3}{x},\ x\ne0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\(\dfrac{x}{2}+\dfrac{x}{5}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{7x}{10}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(\dfrac{3}{x}+\dfrac{1}{x-2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{4x-6}{x(x-2)},\ x\ne0,2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(\dfrac{2x-1}{x+1}-\dfrac{x-3}{x+1}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{x+2}{x+1},\ x\ne-1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>\(\dfrac{1}{x+3}+\dfrac{2}{x^2+3x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(x^2+3x=x(x+3)\). <em>\(\dfrac{x+2}{x(x+3)},\ x\ne0,-3\).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I find the LCD with variables?</h3><p><em>Factor every denominator; include each distinct factor the greatest number of times it appears.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Biggest source of errors?</h3><p><em>Subtraction signs — bracket the numerator being subtracted, then distribute the minus.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Do I always multiply the denominators?</h3><p><em>Only if they share no factors; if they do, the LCD is smaller.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: When do I state restrictions?</h3><p><em>From every denominator before combining.</em></p></div>
</div>`)]);

authored["2.5"] = L("2.5", "Radicals & Equivalent Expressions", [html(String.raw`<div class="lecture-box">
  <h1>√ Radicals &amp; Equivalent Expressions</h1>
  <p><strong>Overview.</strong> A <strong>radical</strong> like \(\sqrt{50}\) simplifies using \(\sqrt{ab}=\sqrt{a}\cdot\sqrt{b}\). Like radicals add; products use the distributive property, including \((a+\sqrt b)(a-\sqrt b)=a^2-b\).</p>

  <h2>📌 The moves</h2>
  <ul>
    <li><strong>Simplify:</strong> pull out the largest perfect-square factor: \(\sqrt{50}=5\sqrt2\).</li>
    <li><strong>Add/subtract:</strong> only like radicals: \(3\sqrt2+\sqrt8=5\sqrt2\).</li>
    <li><strong>Multiply:</strong> distribute, then simplify.</li>
  </ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Simplify</h3><p>Simplify \(\sqrt{72}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(\sqrt{36\cdot2}\).</div><em>Conclusion: \(6\sqrt2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Add like radicals</h3><p>\(\sqrt{12}+\sqrt{27}\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(2\sqrt3+3\sqrt3\).</div><em>Conclusion: \(5\sqrt3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Multiply</h3><p>\(\sqrt2(\sqrt6-\sqrt2)\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(\sqrt{12}-2\).</div><em>Conclusion: \(2\sqrt3-2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Conjugates</h3><p>Expand \((3+\sqrt5)(3-\sqrt5)\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(3^2-(\sqrt5)^2=9-5\).</div><em>Conclusion: \(4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Verify equivalence</h3><p>Is \(\sqrt8+\sqrt{18}=5\sqrt2\)?</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(2\sqrt2+3\sqrt2\).</div><em>Conclusion: \(5\sqrt2\) — yes, equivalent. ✓</em></div>
    ${gframe(["y = sqrt(x)"], { title: "The radical parent y = √x (domain x ≥ 0)" })}
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simplify \(\sqrt{98}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(7\sqrt2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\(5\sqrt3-\sqrt{12}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3\sqrt3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(\sqrt5(\sqrt{10}+\sqrt5)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\sqrt2+5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Expand \((2+\sqrt3)(2-\sqrt3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Simplify \(\sqrt{20}+\sqrt{45}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\sqrt5\).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why can't I add \(\sqrt2+\sqrt3\)?</h3><p><em>Unlike radicals — different numbers under the root. It stays \(\sqrt2+\sqrt3\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I find the perfect-square factor fast?</h3><p><em>List 4, 9, 16, 25, 36, 49… and use the largest that divides the number.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why do conjugates give a whole number?</h3><p><em>\((a+\sqrt b)(a-\sqrt b)=a^2-b\) — the radical cross-terms cancel.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is the domain of \(\sqrt{x}\)?</h3><p><em>\(x\ge0\) — you can't square-root a negative real number.</em></p></div>
</div>`)]);
