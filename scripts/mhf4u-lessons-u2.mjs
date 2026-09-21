// MHF4U Unit 2 — Polynomial Equations & Inequalities. Deep single-card lessons.
import { html, gframe, graph } from "./seed-mpm2d.mjs";
import { signChart, lin, linPow } from "./mhf4u-signtable.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u2 = {};

// Long-division tableau (grid school-division layout), like the classic 432÷15 figure — adapted to polynomial terms.
// divisor: label to the left of the bracket. quot: quotient terms, one per column. rows: dividend + each subtract/result row (`line:true` draws the rule under it).
const ldiv = (divisor, quot, rows) => {
  const cw = "min-width:40px;padding:3px 8px;text-align:center;white-space:nowrap;";
  const cell = (v, extra = "") => `<td style="${cw}${extra}">${v || ""}</td>`;
  let out = `<div style="overflow-x:auto;margin:10px 0;"><table style="border-collapse:collapse;font-family:'Courier New',Consolas,monospace;font-size:15px;color:#0f172a;">`;
  out += `<tr><td></td>${quot.map((v) => cell(v)).join("")}</tr>`;
  rows.forEach((r, i) => {
    const first = i === 0;
    const divCell = first
      ? `<td style="${cw}border-right:2px solid #0f172a;text-align:right;padding-right:8px;">${divisor}</td>`
      : `<td></td>`;
    out += `<tr>${divCell}${r.cells.map((v) => cell(v, `${first ? "border-top:2px solid #0f172a;" : ""}${r.line ? "border-bottom:1.5px solid #0f172a;" : ""}`)).join("")}</tr>`;
  });
  out += `</table></div>`;
  return out;
};

// Synthetic-division box: root | coefficients, products shifted one column, a rule, then the sums (quotient coeffs + remainder).
const syndiv = (root, coeffs, prods, sums) => {
  const cw = "min-width:40px;padding:3px 10px;text-align:center;white-space:nowrap;";
  const cell = (v, extra = "") => `<td style="${cw}${extra}">${v ?? ""}</td>`;
  let out = `<div style="overflow-x:auto;margin:10px 0;"><table style="border-collapse:collapse;font-family:'Courier New',Consolas,monospace;font-size:15px;color:#0f172a;">`;
  out += `<tr><td rowspan="2" style="${cw}border-right:2px solid #0f172a;text-align:center;">${root}</td>${coeffs.map((v) => cell(v)).join("")}</tr>`;
  out += `<tr>${prods.map((v) => cell(v)).join("")}</tr>`;
  out += `<tr><td style="border-right:2px solid #0f172a;"></td>${sums.map((v) => cell(v, "border-top:2px solid #0f172a;")).join("")}</tr>`;
  out += `</table></div>`;
  return out;
};

u2["2.1"] = L("2.1", "Dividing Polynomials", [
  html(String.raw`<div class="lecture-box">
  <h1>➗ Dividing Polynomials</h1>
  <p><strong>Overview.</strong> Just like numbers, polynomials can be divided to give a <strong>quotient</strong> and a <strong>remainder</strong>. Two methods do the job: <strong>long division</strong> (always works) and <strong>synthetic division</strong> (a fast shortcut when dividing by \(x-a\)). Every division can be written as the <strong>division statement</strong> \(P(x)=D(x)\,Q(x)+R(x)\), where \(\deg R<\deg D\).</p>
  <h2>📌 The two methods</h2>
  <ul>
    <li><strong>Long division:</strong> divide leading terms, multiply back, subtract, bring down — repeat.</li>
    <li><strong>Synthetic division (by \(x-a\)):</strong> list the coefficients, bring down the first, multiply by \(a\), add, repeat. The last number is the remainder.</li>
    <li><strong>Division statement:</strong> \(\dfrac{P(x)}{x-a}=Q(x)+\dfrac{R}{x-a}\iff P(x)=(x-a)Q(x)+R\).</li>
  </ul>
  ${gframe(["y = x^2 + 5*x + 6"], { title: "x² + 5x + 6 = (x+2)(x+3): zeros at −2 and −3" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Exact long division</h3><p>Divide \((x^2+5x+6)\div(x+2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2\div x=x\); \(x(x+2)=x^2+2x\); subtract → \(3x+6\).</div><div class="step"><strong>Step 2:</strong> \(3x\div x=3\); \(3(x+2)=3x+6\); subtract → \(0\).</div><em>Conclusion: quotient \(x+3\), remainder \(0\). ✓</em></div>${ldiv("x + 2", ["", "x", "+3"], [
    { cells: ["x²", "+5x", "+6"] },
    { cells: ["x²", "+2x", ""], line: true },
    { cells: ["", "+3x", "+6"] },
    { cells: ["", "+3x", "+6"], line: true },
    { cells: ["", "", "0"] },
  ])}</div>
  <div class="example-box" ${EX}><h3>Example 2: Long division with a missing term</h3><p>Divide \((x^3+2x^2-5)\div(x-1)\) by long division.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Insert the missing term: \(x^3+2x^2+0x-5\).</div><div class="step"><strong>Step 2:</strong> \(x^3\div x=x^2\); subtract \(x^3-x^2\) → \(3x^2+0x\). Then \(3x^2\div x=3x\); subtract \(3x^2-3x\) → \(3x-5\). Then \(3x\div x=3\); subtract \(3x-3\) → \(-2\).</div><em>Conclusion: quotient \(x^2+3x+3\), remainder \(-2\). ✓</em></div>${ldiv("x − 1", ["", "x²", "3x", "+3"], [
    { cells: ["x³", "+2x²", "+0x", "−5"] },
    { cells: ["x³", "−x²", "", ""], line: true },
    { cells: ["", "3x²", "+0x", "−5"] },
    { cells: ["", "3x²", "−3x", ""], line: true },
    { cells: ["", "", "3x", "−5"] },
    { cells: ["", "", "3x", "−3"], line: true },
    { cells: ["", "", "", "−2"] },
  ])}</div>
  <div class="example-box" ${EX}><h3>Example 3: Synthetic division</h3><p>Divide \((x^3-4x^2+x+6)\div(x-2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Coefficients \(1,-4,1,6\), root \(2\). Bring down \(1\).</div><div class="step"><strong>Step 2:</strong> \(1{\cdot}2=2\Rightarrow-4{+}2=-2\); \(-2{\cdot}2=-4\Rightarrow1{-}4=-3\); \(-3{\cdot}2=-6\Rightarrow6{-}6=0\).</div><em>Conclusion: quotient \(x^2-2x-3\), R \(0\). ✓</em></div>${syndiv(2, [1, -4, 1, 6], ["", 2, -4, -6], [1, -2, -3, 0])}</div>
  <div class="example-box" ${EX}><h3>Example 4: Division statement</h3><p>Write the division statement for Example 1.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P=(x+2)(x+3)+0\).</div><em>Conclusion: \(x^2+5x+6=(x+2)(x+3)\). ✓</em></div>${ldiv("x + 2", ["", "x", "+3"], [
    { cells: ["x²", "+5x", "+6"] },
    { cells: ["x²", "+2x", ""], line: true },
    { cells: ["", "+3x", "+6"] },
    { cells: ["", "+3x", "+6"], line: true },
    { cells: ["", "", "0"] },
  ])}</div>
  <div class="example-box" ${EX}><h3>Example 5: Nonzero remainder</h3><p>Divide \((x^2+3x+5)\div(x+1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Quotient \(x+2\), and \(x+2\) times \(x+1\) is \(x^2+3x+2\); subtract → \(3\).</div><em>Conclusion: \(x^2+3x+5=(x+1)(x+2)+3\). ✓</em></div>${ldiv("x + 1", ["", "x", "+2"], [
    { cells: ["x²", "+3x", "+5"] },
    { cells: ["x²", "+x", ""], line: true },
    { cells: ["", "+2x", "+5"] },
    { cells: ["", "+2x", "+2"], line: true },
    { cells: ["", "", "+3"] },
  ])}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\((x^2+6x+8)\div(x+2)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x+4\), R 0.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\((x^2+x-6)\div(x-2)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x+3\), R 0.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Synthetic: \((x^3-1)\div(x-1)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2+x+1\), R 0.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\((x^2+4x+1)\div(x+1)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x+3\), R \(-2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Write the division statement for Q4.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2+4x+1=(x+1)(x+3)-2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When can you use synthetic division?</h3><p><em>When the divisor is linear, \(x-a\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the division statement?</h3><p><em>\(P(x)=D(x)Q(x)+R(x)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How big can the remainder be?</h3><p><em>Its degree is less than the divisor's.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does a remainder of 0 mean?</h3><p><em>The divisor is a factor.</em></p></div>
</div>`),
]);

u2["2.2"] = L("2.2", "Remainder & Factor Theorems", [
  html(String.raw`<div class="lecture-box">
  <h1>🧩 Remainder &amp; Factor Theorems</h1>
  <p><strong>Overview.</strong> These two theorems let you test factors and find remainders <em>without</em> doing the division. The <strong>Remainder Theorem</strong> says the remainder of \(P(x)\div(x-a)\) is simply \(P(a)\). The <strong>Factor Theorem</strong> is the special case \(P(a)=0\): then \(x-a\) is a factor. The <strong>Rational Root Theorem</strong> narrows the search for those \(a\) values.</p>
  <h2>📌 The theorems</h2>
  <ul>
    <li><strong>Remainder Theorem:</strong> remainder \(=P(a)\) when dividing by \(x-a\).</li>
    <li><strong>Factor Theorem:</strong> \(x-a\) is a factor \(\iff P(a)=0\).</li>
    <li><strong>Rational Root Theorem:</strong> any rational zero \(\tfrac{p}{q}\) has \(p\mid\) constant, \(q\mid\) leading coefficient.</li>
  </ul>
  ${gframe(["y = x^3 - x"], { title: "x³ − x = x(x−1)(x+1): P(1)=P(−1)=P(0)=0, so each is a factor" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Find a remainder</h3><p>Remainder of \(P(x)=x^3-2x+1\) divided by \(x-2\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(2)=8-4+1\).</div><em>Conclusion: remainder \(5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Test a factor</h3><p>Is \(x-1\) a factor of \(x^3-1\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(1)=1-1=0\).</div><em>Conclusion: yes, \(x-1\) is a factor. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: When it is NOT a factor</h3><p>Is \(x-2\) a factor of \(P(x)=x^3+x-3\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(2)=8+2-3=7\).</div><div class="step"><strong>Step 2:</strong> \(P(2)\ne0\), so \(x-2\) is <em>not</em> a factor — and by the Remainder Theorem the remainder of \(P\div(x-2)\) is exactly \(7\).</div><em>Conclusion: not a factor; remainder \(7\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Solve for a parameter</h3><p>Find \(k\) so that \(x-1\) is a factor of \(x^3+kx-2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(1)=1+k-2=0\).</div><em>Conclusion: \(k=1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Find a zero with rational roots</h3><p>Find a rational zero of \(P(x)=x^3-2x^2-x+2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Candidates \(\pm1,\pm2\). \(P(1)=1-2-1+2=0\).</div><em>Conclusion: \(x=1\) is a zero, so \(x-1\) is a factor. ✓</em></div>${gframe(["y = x^3 - 2*x^2 - x + 2"], { title: "P(x)=x³−2x²−x+2: it crosses the x-axis at x=1 (and at −1 and 2)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Remainder of \(x^3+1\) divided by \(x-1\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(P(1)=2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Is \(x-2\) a factor of \(x^3-8\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(P(2)=0\): yes.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Is \(x+1\) a factor of \(x^3+x^2-x-1\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(P(-1)=-1+1+1-1=0\): yes.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(k\) so \(x+1\) is a factor of \(x^3+kx+4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(P(-1)=-1-k+4=0\Rightarrow k=3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>A rational zero of \(x^3-x^2-4x+4\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(P(1)=0\), so \(x=1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the remainder of \(P(x)\div(x-a)\)?</h3><p><em>\(P(a)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When is \(x-a\) a factor?</h3><p><em>Exactly when \(P(a)=0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Where do you look for rational zeros?</h3><p><em>\(\tfrac{p}{q}\): \(p\) divides the constant, \(q\) the leading coefficient.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why is this faster than dividing?</h3><p><em>You only evaluate \(P(a)\) — no full division needed.</em></p></div>
</div>`),
]);

u2["2.3"] = L("2.3", "Solving Polynomial Equations", [
  html(String.raw`<div class="lecture-box">
  <h1>🎯 Solving Polynomial Equations</h1>
  <p><strong>Overview.</strong> To solve \(P(x)=0\), <strong>factor fully</strong>, then set each factor to zero. The tools: common factoring, factoring by grouping, and the factor theorem (find one zero, then divide it out). A degree-\(n\) polynomial has \(n\) roots in total (counting multiplicity and complex roots).</p>
  <h2>📌 The strategy</h2>
  <ul>
    <li>Take out any <strong>common factor</strong> first.</li>
    <li>Try <strong>grouping</strong>, or use the <strong>factor theorem</strong> + division to peel off a factor.</li>
    <li>Set each factor to \(0\) and solve.</li>
  </ul>
  ${gframe(["y = x^3 - 4*x"], { title: "x³ − 4x = x(x−2)(x+2): roots at x = −2, 0, 2" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Common factor</h3><p>Solve \(x^3-4x=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x(x^2-4)=x(x-2)(x+2)=0\).</div><em>Conclusion: \(x=0,2,-2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Quadratic in \(x^2\)</h3><p>Solve \(x^4-5x^2+4=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Treat it as a quadratic in \(x^2\): \(x^4-5x^2+4=(x^2-1)(x^2-4)=0\).</div><div class="step"><strong>Step 2:</strong> Factor each difference of squares: \((x-1)(x+1)(x-2)(x+2)=0\).</div><em>Conclusion: \(x=\pm1,\pm2\). ✓</em></div>${gframe(["y = x^4 - 5*x^2 + 4"], { title: "x⁴−5x²+4=0: the curve crosses the x-axis at all four roots ±1, ±2" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Factor by grouping</h3><p>Solve \(x^3+2x^2-x-2=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2(x+2)-(x+2)=(x+2)(x^2-1)\).</div><div class="step"><strong>Step 2:</strong> \((x+2)(x-1)(x+1)=0\).</div><em>Conclusion: \(x=-2,1,-1\). ✓</em></div>${gframe(["y = x^3 + 2*x^2 - x - 2"], { title: "x³+2x²−x−2=0: roots at x=−2, −1, 1" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Use the factor theorem</h3><p>Solve \(x^3-7x-6=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(-1)=-1+7-6=0\), so \(x+1\) is a factor.</div><div class="step"><strong>Step 2:</strong> Divide: \((x+1)(x^2-x-6)=(x+1)(x-3)(x+2)\).</div><em>Conclusion: \(x=-1,3,-2\). ✓</em></div>${gframe(["y = x^3 - 7*x - 6"], { title: "x³−7x−6=0: roots at x=−2, −1, 3" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Application</h3><p>A box has volume \(x(x-1)(x+2)=0\) at its limiting dimensions. Find them.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Set each factor to 0.</div><em>Conclusion: \(x=0,1,-2\) (only \(x=1\) is physically valid). ✓</em></div>${gframe(["y = x*(x-1)*(x+2)"], { title: "x(x−1)(x+2)=0: roots at x=−2, 0, 1 (only x=1 makes sense as a length)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(x^3-9x=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=0,3,-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(x^3-x^2-2x=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=0,2,-1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(x^3+3x^2-x-3=0\) by grouping.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x+3)(x-1)(x+1)=0\Rightarrow x=-3,1,-1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(x^3-4x^2+x+6=0\) (hint: \(x=-1\)).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x+1)(x-2)(x-3)=0\Rightarrow x=-1,2,3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(x^4-5x^2+4=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x^2-1)(x^2-4)=0\Rightarrow x=\pm1,\pm2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: First step in solving?</h3><p><em>Take out the common factor.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find a first zero?</h3><p><em>Test rational-root candidates with the factor theorem.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How many roots does a degree-\(n\) polynomial have?</h3><p><em>\(n\) in total (counting multiplicity and complex roots).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is "factoring by grouping"?</h3><p><em>Pair terms, factor each pair, then factor out the common bracket.</em></p></div>
</div>`),
]);

// ── Lesson 2.4 sign tables (signs and answers are computed by mhf4u-signtable.mjs) ──
const S = {
  demo: signChart({ factors: [lin(1), lin(-2)], ineq: ">" }),
  e1: signChart({ factors: [lin(1), lin(-2)], ineq: ">" }),
  e2: signChart({ factors: [lin(-3), lin(1)], ineq: ">=" }),
  e3: signChart({ factors: [lin(3), lin(-2)], ineq: ">" }),
  e4: signChart({ factors: [lin(0), lin(2), lin(-1)], ineq: "<" }),
  e5: signChart({ factors: [linPow(1, 2), lin(-3)], ineq: ">", ans: "x>-3,\\ x\\ne1" }),
  e6: signChart({ factors: [lin(-2), linPow(1, 2), lin(3)], ineq: "<=" }),
  q1: signChart({ factors: [lin(3), lin(-1)], ineq: ">" }),
  q2: signChart({ factors: [lin(3), lin(-1)], ineq: "<" }),
  q3: signChart({ factors: [lin(2), lin(-2)], ineq: "<" }),
  q4: signChart({ factors: [lin(0), lin(1), lin(-2)], ineq: ">" }),
  q5: signChart({ factors: [lin(3), lin(-1)], ineq: ">=" }),
};
const T = (c) => `\\(${c.testList}\\)`;
const concl = (c) => `<em>Conclusion: \\(${c.ineq}\\), in interval notation \\(${c.interval}\\). ✓</em>`;

u2["2.4"] = L("2.4", "Polynomial Inequalities", [
  html(String.raw`<div class="lecture-box">
  <h1>⚖️ Polynomial Inequalities</h1>
  <p><strong>Overview.</strong> To solve \(P(x)>0\) or \(P(x)<0\), first find the zeros — they split the number line into intervals. On each interval \(P\) keeps a constant sign, so one <strong>test point</strong> reveals it. A <strong>sign table</strong> (interval table) organizes the work: it shows the sign of every factor on every interval, and the sign of the product \(P(x)\) follows from them. Remember: the sign flips at a zero of odd multiplicity but <em>not</em> at one of even multiplicity.</p>
  <h2>📌 The method: six steps</h2>
  <ol>
    <li><strong>Compare with zero.</strong> Move every term to one side so the other side is \(0\). Never divide or cancel a factor that contains \(x\) — you would lose solutions and can flip the inequality by mistake.</li>
    <li><strong>Factor completely</strong> (common factor, trinomial, grouping, or the factor theorem).</li>
    <li><strong>Find the zeros:</strong> set each factor equal to \(0\) and note its multiplicity (the exponent of the factor).</li>
    <li><strong>Build the sign table:</strong> one column for each interval <em>and</em> one for each zero; one row for each factor and one for the product.</li>
    <li><strong>Fill it in:</strong> pick a test point in each interval, find the sign of each factor there, then multiply the signs. An <em>even</em> number of negative factors gives \(+\); an <em>odd</em> number gives \(-\). At a zero the product is \(0\).</li>
    <li><strong>Read the answer:</strong> keep the columns that satisfy the inequality. Include the zero columns for \(\ge\) or \(\le\) only. Write the answer as inequalities and in interval notation.</li>
  </ol>
  <h2>🧮 How to read a sign table</h2>
  <p>Here is the table for \((x-1)(x+2)>0\). The first row lists the intervals and the zeros, the second row gives a test point, each factor gets a row, and the last rows give the product and whether it satisfies the inequality.</p>
  ${S.demo.html()}
  <ul>
    <li><strong>Factor rows:</strong> the sign of \(x-1\) is \(-\) to the left of \(1\) and \(+\) to the right; \(x+2\) changes sign at \(-2\).</li>
    <li><strong>Product row:</strong> multiply the signs down each column. \((-)(-)=+\), \((-)(+)=-\), \((+)(+)=+\).</li>
    <li><strong>Highlighted columns</strong> (✓) satisfy \(P(x)>0\). The zero columns show \(0\), which is not \(>0\), so the endpoints are excluded.</li>
  </ul>
  <div style="background:#eef2ff;border-left:4px solid #6366f1;padding:8px 12px;border-radius:6px;margin:8px 0;">
    <strong>Multiplicity rule.</strong> A factor \((x-r)^m\) with \(m\) <em>odd</em> changes sign at \(r\); with \(m\) <em>even</em> it stays \(\ge0\) and touches zero without changing sign. <strong>Quick check:</strong> if the leading coefficient of \(P\) is positive, the right-most interval is always \(+\).
  </div>
  ${gframe(["y = (x-1)*(x+2)"], { title: "(x−1)(x+2): positive outside [−2, 1], negative inside" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Product positive</h3><p>Solve \((x-1)(x+2)>0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The inequality is already compared with \(0\) and factored: \((x-1)(x+2)>0\).</div><div class="step"><strong>Step 2:</strong> Zeros: \(x-1=0\Rightarrow x=1\) and \(x+2=0\Rightarrow x=-2\). Both have multiplicity 1, so the sign changes at each. They split the number line into \(x<-2\), \(-2<x<1\) and \(x>1\).</div><div class="step"><strong>Step 3:</strong> Build the sign table with test points ${T(S.e1)}.</div>${S.e1.html()}<div class="step"><strong>Step 4:</strong> We want \(P(x)>0\), so we keep the two ✓ columns. The zeros give \(0\), which is not \(>0\), so \(-2\) and \(1\) are excluded. Check: at \(x=-3\), \((-4)(-1)=4>0\) ✓.</div>${concl(S.e1)}</div></div>
  <div class="example-box" ${EX}><h3>Example 2: Rearrange to one side first</h3><p>Solve \(x^2+2x\ge3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Move everything to one side so the other side is \(0\): \(x^2+2x-3\ge0\). (Do not divide by \(x\).)</div><div class="step"><strong>Step 2:</strong> Factor: find two numbers with product \(-3\) and sum \(2\), namely \(3\) and \(-1\). So \((x+3)(x-1)\ge0\), with zeros \(-3\) and \(1\).</div><div class="step"><strong>Step 3:</strong> Sign table with test points ${T(S.e2)}.</div>${S.e2.html()}<div class="step"><strong>Step 4:</strong> The inequality is \(\ge\), so the zero columns (where \(P=0\)) <em>are</em> included along with the ✓ intervals. Check: \(x=-3\): \(9-6=3\ge3\) ✓.</div>${concl(S.e2)}${gframe(["y = x^2 + 2*x - 3"], { title: "x²+2x−3≥0 holds where the parabola sits on or above the axis: x≤−3 or x≥1" })}</div></div>
  <div class="example-box" ${EX}><h3>Example 3: Factor first</h3><p>Solve \(x^2-x-6>0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Factor: two numbers with product \(-6\) and sum \(-1\) are \(-3\) and \(2\). So \((x-3)(x+2)>0\).</div><div class="step"><strong>Step 2:</strong> Zeros \(x=3\) and \(x=-2\). Test points ${T(S.e3)}.</div>${S.e3.html()}<div class="step"><strong>Step 3:</strong> Keep the intervals where the product is positive. The inequality is strict, so \(-2\) and \(3\) are excluded.</div>${concl(S.e3)}${gframe(["y = x^2 - x - 6"], { title: "x²−x−6>0 holds where the parabola is above the axis: x<−2 or x>3" })}</div></div>
  <div class="example-box" ${EX}><h3>Example 4: Three factors</h3><p>Solve \(x(x-2)(x+1)<0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Zeros: \(x=0\), \(x=2\), \(x=-1\), all of multiplicity 1. Three zeros make four intervals, and the sign of the product <em>alternates</em> from one interval to the next.</div><div class="step"><strong>Step 2:</strong> Sign table with test points ${T(S.e4)}.</div>${S.e4.html()}<div class="step"><strong>Step 3:</strong> We want \(P(x)<0\), so we keep the \(-\) columns. Check the right-most interval: the leading coefficient is \(+1\), so it is \(+\) ✓.</div>${concl(S.e4)}${gframe(["y = x*(x-2)*(x+1)"], { title: "x(x−2)(x+1)<0 holds where the cubic dips below the axis: x<−1 or 0<x<2" })}</div></div>
  <div class="example-box" ${EX}><h3>Example 5: Even multiplicity</h3><p>Solve \((x-1)^2(x+3)>0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Zeros: \(x=1\) with multiplicity 2 (even) and \(x=-3\) with multiplicity 1 (odd). The factor \((x-1)^2\) is never negative, so it does <em>not</em> change the sign of the product at \(x=1\).</div><div class="step"><strong>Step 2:</strong> Sign table with test points ${T(S.e5)}.</div>${S.e5.html()}<div class="step"><strong>Step 3:</strong> The product is positive on both \(-3<x<1\) and \(x>1\), but \(P(1)=0\), which is not \(>0\). So \(x=1\) is a hole in the solution set.</div>${concl(S.e5)}${gframe(["y = (x-1)^2*(x+3)"], { title: "(x−1)²(x+3)>0: above the axis for x>−3, but it only touches (doesn't cross) at x=1" })}</div></div>
  <div class="example-box" ${EX}><h3>Example 6: Mixed multiplicities with ≤</h3><p>Solve \((x+2)(x-1)^2(x-3)\le0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Zeros: \(-2\) (multiplicity 1), \(1\) (multiplicity 2), \(3\) (multiplicity 1). The sign changes at \(-2\) and \(3\) but <em>not</em> at \(1\).</div><div class="step"><strong>Step 2:</strong> Sign table with test points ${T(S.e6)}.</div>${S.e6.html()}<div class="step"><strong>Step 3:</strong> The inequality is \(\le\), so we keep the \(-\) columns <em>and</em> every zero column. The zero at \(x=1\) sits between two \(-\) intervals, so it joins them into one solution set.</div>${concl(S.e6)}<div class="step"><strong>Compare:</strong> for the strict inequality \((x+2)(x-1)^2(x-3)<0\), the zeros are excluded, so the answer would be \(-2<x<3,\ x\ne1\).</div>${gframe(["y = (x+2)*(x-1)^2*(x-3)"], { title: "(x+2)(x−1)²(x−3)≤0: on or below the axis for −2≤x≤3 (it touches the axis at x=1)" })}</div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \((x-3)(x+1)>0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Step 1:</strong> Zeros \(x=3\) and \(x=-1\), each of multiplicity 1. Test points ${T(S.q1)}.</div>${S.q1.html()}<div class="step"><strong>Step 2:</strong> Keep the \(+\) columns; the zeros are excluded because the inequality is strict.</div>${concl(S.q1)}</div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \((x-3)(x+1)<0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Step 1:</strong> Same factors and zeros as Question 1, so the same table — now we keep the \(-\) column.</div>${S.q2.html()}<div class="step"><strong>Step 2:</strong> Only the middle interval is negative, and the strict inequality excludes \(-1\) and \(3\).</div>${concl(S.q2)}</div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(x^2-4<0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Step 1:</strong> Factor the difference of squares: \(x^2-4=(x-2)(x+2)\), with zeros \(2\) and \(-2\). Test points ${T(S.q3)}.</div>${S.q3.html()}<div class="step"><strong>Step 2:</strong> Keep the \(-\) column. Check: \(x=0\) gives \(-4<0\) ✓.</div>${concl(S.q3)}</div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(x(x-1)(x+2)>0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Step 1:</strong> Zeros \(0,1,-2\), all of multiplicity 1, so the signs alternate. Test points ${T(S.q4)}.</div>${S.q4.html()}<div class="step"><strong>Step 2:</strong> Keep the \(+\) columns.</div>${concl(S.q4)}</div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(x^2-2x-3\ge0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><strong>Step 1:</strong> Factor: \(x^2-2x-3=(x-3)(x+1)\), with zeros \(3\) and \(-1\). Test points ${T(S.q5)}.</div>${S.q5.html()}<div class="step"><strong>Step 2:</strong> The inequality is \(\ge\), so include the zero columns as well as the \(+\) intervals.</div>${concl(S.q5)}</div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What do the zeros do?</h3><p><em>They split the number line into intervals of constant sign — one column of the sign table for each interval, plus one for each zero.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find the sign on each interval?</h3><p><em>Substitute one test point, find the sign of each factor, and multiply the signs (an even number of negatives gives \(+\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Does the sign always change at a zero?</h3><p><em>Only at odd multiplicity; even multiplicity keeps the same sign on both sides.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: When are endpoints included?</h3><p><em>For \(\ge\) or \(\le\) (the zero columns satisfy the inequality), not for strict \(>\) or \(<\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q5: Why move everything to one side instead of dividing?</h3><p><em>The sign table needs \(P(x)\) compared with \(0\). Dividing by a factor that contains \(x\) can lose solutions, and it flips the inequality when the factor is negative.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q6: How can you check an answer?</h3><p><em>Test one number inside the solution and one outside in the original inequality, and compare with the graph: \(P>0\) where the curve is above the x-axis.</em></p></div>
</div>`),
  graph("x^3 - a*x", "a", { xMin: -3, xMax: 3, yMin: -6, yMax: 6, paramMin: 0, paramMax: 5, paramInit: 4, caption: "Animation: y = x³ − a·x. As a grows the two outer roots spread out — watch where the curve is above (P>0) vs below (P<0) the axis." }),
]);
