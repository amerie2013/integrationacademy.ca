// MHF4U Unit 2 — Polynomial Equations & Inequalities. Deep single-card lessons.
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u2 = {};

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
  <div class="example-box" ${EX}><h3>Example 1: Exact long division</h3><p>Divide \((x^2+5x+6)\div(x+2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2\div x=x\); \(x(x+2)=x^2+2x\); subtract → \(3x+6\).</div><div class="step"><strong>Step 2:</strong> \(3x\div x=3\); \(3(x+2)=3x+6\); subtract → \(0\).</div><em>Conclusion: quotient \(x+3\), remainder \(0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Long division with a missing term</h3><p>Divide \((x^3+2x^2-5)\div(x-1)\) by long division.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Insert the missing term: \(x^3+2x^2+0x-5\).</div><div class="step"><strong>Step 2:</strong> \(x^3\div x=x^2\); subtract \(x^3-x^2\) → \(3x^2+0x\). Then \(3x^2\div x=3x\); subtract \(3x^2-3x\) → \(3x-5\). Then \(3x\div x=3\); subtract \(3x-3\) → \(-2\).</div><em>Conclusion: quotient \(x^2+3x+3\), remainder \(-2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Synthetic division</h3><p>Divide \((x^3-4x^2+x+6)\div(x-2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Coefficients \(1,-4,1,6\), root \(2\). Bring down \(1\).</div><div class="step"><strong>Step 2:</strong> \(1{\cdot}2=2\Rightarrow-4{+}2=-2\); \(-2{\cdot}2=-4\Rightarrow1{-}4=-3\); \(-3{\cdot}2=-6\Rightarrow6{-}6=0\).</div><em>Conclusion: quotient \(x^2-2x-3\), R \(0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Division statement</h3><p>Write the division statement for Example 1.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P=(x+2)(x+3)+0\).</div><em>Conclusion: \(x^2+5x+6=(x+2)(x+3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Nonzero remainder</h3><p>Divide \((x^2+3x+5)\div(x+1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Quotient \(x+2\), and \(x+2\) times \(x+1\) is \(x^2+3x+2\); subtract → \(3\).</div><em>Conclusion: \(x^2+3x+5=(x+1)(x+2)+3\). ✓</em></div></div>
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
  <div class="example-box" ${EX}><h3>Example 2: Quadratic in \(x^2\) (substitution)</h3><p>Solve \(x^4-5x^2+4=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Let \(u=x^2\): \(u^2-5u+4=(u-1)(u-4)=0\).</div><div class="step"><strong>Step 2:</strong> \(u=1\Rightarrow x^2=1\Rightarrow x=\pm1\); \(u=4\Rightarrow x^2=4\Rightarrow x=\pm2\).</div><em>Conclusion: \(x=\pm1,\pm2\). ✓</em></div>${gframe(["y = x^4 - 5*x^2 + 4"], { title: "x⁴−5x²+4=0: the curve crosses the x-axis at all four roots ±1, ±2" })}</div>
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

u2["2.4"] = L("2.4", "Polynomial Inequalities", [
  html(String.raw`<div class="lecture-box">
  <h1>⚖️ Polynomial Inequalities</h1>
  <p><strong>Overview.</strong> To solve \(P(x)>0\) or \(P(x)<0\), first find the zeros — they split the number line into intervals. On each interval \(P\) keeps a constant sign, so a single <strong>test point</strong> reveals it. A <strong>sign chart</strong> organizes the work. Remember: the sign flips at a zero of odd multiplicity but <em>not</em> at one of even multiplicity.</p>
  <h2>📌 The method</h2>
  <ul>
    <li>Move everything to one side; <strong>factor</strong> to find the zeros.</li>
    <li>Mark the zeros on a number line and <strong>test a point</strong> in each interval.</li>
    <li>Pick the intervals matching the inequality; include endpoints for \(\ge\) or \(\le\).</li>
  </ul>
  ${gframe(["y = (x-1)*(x+2)"], { title: "(x−1)(x+2): positive outside [−2, 1], negative inside" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Product positive</h3><p>Solve \((x-1)(x+2)>0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Zeros \(1,-2\). Test \(x=-3\) (+), \(x=0\) (−), \(x=2\) (+).</div><em>Conclusion: \(x<-2\) or \(x>1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Rearrange to one side first</h3><p>Solve \(x^2+2x\ge3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Move everything to one side: \(x^2+2x-3\ge0\).</div><div class="step"><strong>Step 2:</strong> Factor \((x+3)(x-1)\ge0\); zeros \(-3,1\). Test points give \(+,-,+\), and \(\ge\) includes the zeros.</div><em>Conclusion: \(x\le-3\) or \(x\ge1\). ✓</em></div>${gframe(["y = x^2 + 2*x - 3"], { title: "x²+2x−3≥0 holds where the parabola sits on or above the axis: x≤−3 or x≥1" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Factor first</h3><p>Solve \(x^2-x-6>0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-3)(x+2)>0\); zeros \(3,-2\).</div><em>Conclusion: \(x<-2\) or \(x>3\). ✓</em></div>${gframe(["y = x^2 - x - 6"], { title: "x²−x−6>0 holds where the parabola is above the axis: x<−2 or x>3" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Three factors</h3><p>Solve \(x(x-2)(x+1)<0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Zeros \(-1,0,2\). Signs by interval: \((-\infty,-1)\) −, \((-1,0)\) +, \((0,2)\) −, \((2,\infty)\) +.</div><em>Conclusion: \(x<-1\) or \(0<x<2\). ✓</em></div>${gframe(["y = x*(x-2)*(x+1)"], { title: "x(x−2)(x+1)<0 holds where the cubic dips below the axis: x<−1 or 0<x<2" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Even multiplicity</h3><p>Solve \((x-1)^2(x+3)>0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-1)^2\ge0\) always; the sign comes from \(x+3\) (and \(x\ne1\)).</div><em>Conclusion: \(x>-3,\ x\ne1\). ✓</em></div>${gframe(["y = (x-1)^2*(x+3)"], { title: "(x−1)²(x+3)>0: above the axis for x>−3, but it only touches (doesn't cross) at x=1" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \((x-3)(x+1)>0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x<-1\) or \(x>3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \((x-3)(x+1)<0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-1<x<3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(x^2-4<0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-2<x<2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(x(x-1)(x+2)>0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-2<x<0\) or \(x>1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(x^2-2x-3\ge0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x\le-1\) or \(x\ge3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What do the zeros do?</h3><p><em>Split the number line into intervals of constant sign.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find the sign on each interval?</h3><p><em>Substitute a single test point.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Does the sign always change at a zero?</h3><p><em>Only at odd multiplicity; even multiplicity keeps the same sign.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: When are endpoints included?</h3><p><em>For \(\ge\) or \(\le\) (not for strict \(>\) or \(<\)).</em></p></div>
</div>`),
  graph("x^3 - a*x", "a", { xMin: -3, xMax: 3, yMin: -6, yMax: 6, paramMin: 0, paramMax: 5, paramInit: 4, caption: "Animation: y = x³ − a·x. As a grows the two outer roots spread out — watch where the curve is above (P>0) vs below (P<0) the axis." }),
]);
