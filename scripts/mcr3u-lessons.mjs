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
  <p><strong>Overview.</strong> Factoring is expansion <em>in reverse</em>: rewrite a sum as a product. It is the key to simplifying rational expressions and reading a parabola's \(x\)-intercepts.</p>

  <h2>📌 The factoring toolbox (in order)</h2>
  <ul>
    <li><strong>Common factor:</strong> \(6x^2+9x=3x(2x+3)\) — always check first.</li>
    <li><strong>Simple trinomial</strong> \(x^2+bx+c\): two numbers that multiply to \(c\), add to \(b\).</li>
    <li><strong>Complex trinomial</strong> \(ax^2+bx+c\): decomposition.</li>
    <li><strong>Difference of squares:</strong> \(a^2-b^2=(a+b)(a-b)\). <strong>Perfect square:</strong> \(a^2\pm2ab+b^2=(a\pm b)^2\).</li>
  </ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Common factor</h3><p>Factor \(8x^3-12x^2\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> GCF \(=4x^2\).</div><em>Conclusion: \(4x^2(2x-3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Simple trinomial</h3><p>Factor \(x^2+7x+12\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> Multiply to \(12\), add to \(7\): \(3,4\).</div><em>Conclusion: \((x+3)(x+4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Complex trinomial</h3><p>Factor \(2x^2+7x+3\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \(ac=6\), split \(6x+x\): \(2x^2+6x+x+3\).</div><div class="step"><strong>Step 2:</strong> Group: \(2x(x+3)+1(x+3)\).</div><em>Conclusion: \((x+3)(2x+1)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Difference of squares</h3><p>Factor \(9x^2-25\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \((3x)^2-5^2\).</div><em>Conclusion: \((3x+5)(3x-5)\). ✓</em></div>
    ${gframe(["y = (x-2)*(x+3)"], { title: "Factored form shows the zeros: x = 2 and x = -3", labels: [{ x: 2, y: 0, t: "(2,0)", c: "#1b7a44" }, { x: -3, y: 0, t: "(-3,0)", c: "#1b7a44" }] })}
  </div>
  <div class="example-box" ${EX}><h3>Example 5: Factor fully</h3><p>Factor \(2x^2-50\).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> Common factor \(2\): \(2(x^2-25)\).</div><em>Conclusion: \(2(x-5)(x+5)\). ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Factor \(15x^2+20x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5x(3x+4)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Factor \(x^2-x-12\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x-4)(x+3)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Factor \(3x^2-11x-4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3x+1)(x-4)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Factor \(49-x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((7-x)(7+x)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Factor fully \(2x^2-18\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Common factor first. <em>\(2(x+3)(x-3)\).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What should I always do first?</h3><p><em>Look for a common factor. "Factor fully" means nothing is left to factor.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I check a factoring?</h3><p><em>Expand it back — you should get the original.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: It won't factor with integers — now what?</h3><p><em>It may be prime; later you'll use the quadratic formula for its zeros.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How does factoring connect to graphs?</h3><p><em>Each factor \((x-r)\) gives a zero at \(x=r\) — where the parabola crosses the \(x\)-axis.</em></p></div>
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
