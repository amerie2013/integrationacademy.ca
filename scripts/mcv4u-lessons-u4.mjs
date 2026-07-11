// MCV4U Unit 4 — Curve Sketching. Deep lessons connecting f, f', f''.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u4 = {};

u4["4.1"] = L("4.1", "Increasing/Decreasing & the First Derivative Test", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Increasing/Decreasing &amp; the First Derivative Test</h1>
  <p><strong>Overview.</strong> The sign of \(f'\) tells you where \(f\) rises and falls: \(f\) is <strong>increasing</strong> where \(f'>0\) and <strong>decreasing</strong> where \(f'<0\). The places where \(f'=0\) (or is undefined) are the <strong>critical numbers</strong> — the only candidates for local maxima and minima. The <strong>first derivative test</strong> classifies each: \(f'\) changing \(+\!\to\!-\) gives a local max, \(-\!\to\!+\) a local min.</p>
  <h2>📌 The method</h2>
  <ul>
    <li><strong>Increasing:</strong> \(f'>0\); <strong>decreasing:</strong> \(f'<0\).</li>
    <li><strong>Critical numbers:</strong> where \(f'=0\) or \(f'\) is undefined.</li>
    <li><strong>First derivative test:</strong> sign change \(+\to-\Rightarrow\) local max; \(-\to+\Rightarrow\) local min; no change \(\Rightarrow\) neither.</li>
  </ul>
  ${gframe(["y = x^3 - 3*x", "y = 3*x^2 - 3"], { title: "f(x)=x³−3x rises where f'(x)=3x²−3 is positive (|x|>1) and falls where f' is negative (|x|<1)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Intervals of increase/decrease</h3><p>Where is \(f(x)=x^2-4x\) increasing or decreasing?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=2x-4\); set \(=0\Rightarrow x=2\).</div><div class="step"><strong>Step 2:</strong> \(f'<0\) for \(x<2\), \(f'>0\) for \(x>2\).</div><em>Conclusion: decreasing on \((-\infty,2)\), increasing on \((2,\infty)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Critical numbers</h3><p>Find the critical numbers of \(f(x)=x^3-3x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=3x^2-3=0\).</div><em>Conclusion: \(x=\pm1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Classify with the first derivative test</h3><p>Classify the critical points of \(f(x)=x^3-3x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> At \(x=-1\), \(f'\) goes \(+\to-\): local max, \(f(-1)=2\).</div><div class="step"><strong>Step 2:</strong> At \(x=1\), \(f'\) goes \(-\to+\): local min, \(f(1)=-2\).</div><em>Conclusion: max \((-1,2)\), min \((1,-2)\). ✓</em></div>${gframe(["y = x^3 - 3*x", "y = 3*x^2 - 3"], { title: "f rises where f'>0 and falls where f'<0; f'=0 at the max (−1) and min (1)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: A critical number that is neither</h3><p>Classify the critical point of \(f(x)=x^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=3x^2=0\Rightarrow x=0\), but \(f'\ge0\) on both sides.</div><em>Conclusion: no sign change ⇒ neither max nor min (an inflection point). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Several critical numbers</h3><p>Find and classify the critical points of \(f(x)=x^4-2x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=4x^3-4x=4x(x-1)(x+1)=0\Rightarrow x=0,\pm1\).</div><div class="step"><strong>Step 2:</strong> Signs of \(f'\): \(-,+,-,+\) across the intervals.</div><em>Conclusion: local min at \(x=\pm1\) (\(f=-1\)), local max at \(x=0\) (\(f=0\)). ✓</em></div>${gframe(["y = x^4 - 2*x^2", "y = 4*x^3 - 4*x"], { title: "f(x)=x⁴−2x² and f'(x)=4x³−4x: f' crosses zero at the three critical points" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Where is \(f(x)=x^2-6x\) decreasing?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'=2x-6<0\Rightarrow x<3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Critical numbers of \(f(x)=x^3-12x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3x^2-12=0\Rightarrow x=\pm2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Classify the critical points of \(f(x)=x^2-4x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Local min at \(x=2\) (\(-\to+\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Is \(f(x)=x^3+x\) ever decreasing?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'=3x^2+1>0\) always — never decreasing.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>At a critical number, \(f'\) goes \(+\to-\). What is it?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>A local maximum.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When is \(f\) increasing?</h3><p><em>Where \(f'>0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is a critical number?</h3><p><em>Where \(f'=0\) or \(f'\) is undefined.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How does the first derivative test work?</h3><p><em>\(+\to-\) max, \(-\to+\) min, no change ⇒ neither.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Does every critical number give an extremum?</h3><p><em>No — \(x^3\) has a critical number at \(0\) but no extremum.</em></p></div>
</div>`),
]);

u4["4.2"] = L("4.2", "Concavity & the Second Derivative", [
  html(String.raw`<div class="lecture-box">
  <h1>🥣 Concavity &amp; the Second Derivative</h1>
  <p><strong>Overview.</strong> The second derivative describes the <em>bending</em> of a curve. Where \(f''>0\) the graph is <strong>concave up</strong> (holds water); where \(f''<0\) it is <strong>concave down</strong>. An <strong>inflection point</strong> is where concavity switches. The <strong>second derivative test</strong> also classifies extrema: at a critical point, \(f''>0\) means a local min, \(f''<0\) a local max.</p>
  <h2>📌 The rules</h2>
  <ul>
    <li><strong>Concave up:</strong> \(f''>0\); <strong>concave down:</strong> \(f''<0\).</li>
    <li><strong>Inflection point:</strong> where \(f''\) changes sign.</li>
    <li><strong>Second derivative test:</strong> \(f'(c)=0\) with \(f''(c)>0\Rightarrow\) min; \(f''(c)<0\Rightarrow\) max.</li>
  </ul>
  ${gframe(["y = x^3", "y = 6*x"], { title: "f(x)=x³ and f''(x)=6x: concave down where f''<0 (x<0), concave up where f''>0 (x>0), inflection at x=0" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Concave up everywhere</h3><p>Describe the concavity of \(f(x)=x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f''(x)=2>0\) for all \(x\).</div><em>Conclusion: concave up everywhere. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Concavity that switches</h3><p>Describe the concavity of \(f(x)=x^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f''(x)=6x\): negative for \(x<0\), positive for \(x>0\).</div><em>Conclusion: concave down then up, inflection at \((0,0)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Second derivative test</h3><p>Classify the critical point of \(f(x)=x^2-4x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=2x-4=0\Rightarrow x=2\); \(f''(x)=2>0\).</div><em>Conclusion: local minimum at \(x=2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Find the inflection point</h3><p>Find the inflection point of \(f(x)=x^3-3x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f''(x)=6x-6=0\Rightarrow x=1\), and \(f''\) changes sign there.</div><div class="step"><strong>Step 2:</strong> \(f(1)=1-3=-2\).</div><em>Conclusion: inflection point \((1,-2)\). ✓</em></div>${gframe(["y = x^3 - 3*x^2", "y = 6*x - 6"], { title: "f(x)=x³−3x² and f''(x)=6x−6: the inflection is where f'' crosses zero (x=1)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Classify all extrema</h3><p>Use the second derivative test on \(f(x)=x^4-2x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'=4x^3-4x=0\Rightarrow x=0,\pm1\); \(f''=12x^2-4\).</div><div class="step"><strong>Step 2:</strong> \(f''(0)=-4<0\) (max); \(f''(\pm1)=8>0\) (min).</div><em>Conclusion: local max at \((0,0)\), local minima at \((\pm1,-1)\). ✓</em></div>${gframe(["y = x^4 - 2*x^2", "y = 12*x^2 - 4"], { title: "f(x)=x⁴−2x² with f''(x)=12x²−4: f''<0 at x=0 (max), f''>0 at x=±1 (mins)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Concavity of \(f(x)=-x^2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f''=-2<0\): concave down everywhere.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Where is \(f(x)=x^3\) concave up?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f''=6x>0\Rightarrow x>0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Use the 2nd-derivative test on \(f(x)=x^2+6x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'=2x+6=0\Rightarrow x=-3\); \(f''=2>0\): local min.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Inflection point of \(f(x)=x^3-6x^2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f''=6x-12=0\Rightarrow x=2\); \(f(2)=-16\): \((2,-16)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>At a critical point \(f''(c)<0\). What is it?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>A local maximum.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does \(f''>0\) mean?</h3><p><em>Concave up.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is an inflection point?</h3><p><em>Where concavity changes (\(f''\) changes sign).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does the second derivative test say?</h3><p><em>\(f''(c)>0\) min, \(f''(c)<0\) max.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: When is the test inconclusive?</h3><p><em>When \(f''(c)=0\) — fall back on the first derivative test.</em></p></div>
</div>`),
]);

u4["4.3"] = L("4.3", "Critical, Inflection & End Behaviour", [
  html(String.raw`<div class="lecture-box">
  <h1>🧩 Critical, Inflection &amp; End Behaviour</h1>
  <p><strong>Overview.</strong> Before sketching, you gather every key feature: <strong>domain</strong>, <strong>intercepts</strong>, <strong>asymptotes</strong>, <strong>critical points</strong> and extrema (from \(f'\)), <strong>inflection points</strong> and concavity (from \(f''\)), and the <strong>end behaviour</strong>. Reading \(f\), \(f'\), and \(f''\) together is the heart of curve sketching.</p>
  <h2>📌 The feature checklist</h2>
  <ul>
    <li><strong>From \(f\):</strong> domain, intercepts, asymptotes, end behaviour.</li>
    <li><strong>From \(f'\):</strong> intervals of increase/decrease, local extrema.</li>
    <li><strong>From \(f''\):</strong> concavity and inflection points.</li>
  </ul>
  ${gframe(["y = x^3 - 3*x^2"], { title: "f(x)=x³−3x²: local max at (0,0), local min at (2,−4), inflection at (1,−2)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: List the key features</h3><p>For \(f(x)=x^3-3x\), give the critical points, local extrema, inflection point, and end behaviour.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'=3x^2-3\Rightarrow x=\pm1\): max \((-1,2)\), min \((1,-2)\).</div><div class="step"><strong>Step 2:</strong> \(f''=6x\Rightarrow\) inflection \((0,0)\); ends down–up (odd, \(a>0\)).</div><em>Conclusion: all features identified. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Read \(f\) from \(f'\)</h3><p>A function has \(f'(x)>0\) on \((-\infty,1)\) and \(f'(x)<0\) on \((1,\infty)\). Describe \(f\) near \(x=1\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'\) changes \(+\to-\) at \(x=1\).</div><em>Conclusion: \(f\) increases then decreases — a local max at \(x=1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Classify from \(f''\)</h3><p>A critical point satisfies \(f'(2)=0\) and \(f''(2)=-3\). Classify it.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f''(2)<0\) ⇒ concave down at a critical point.</div><em>Conclusion: local maximum at \(x=2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Features of a rational function</h3><p>List the asymptotes of \(f(x)=\dfrac{x}{x-2}\) (which guide the sketch).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Denominator \(0\) at \(x=2\) ⇒ vertical asymptote \(x=2\).</div><div class="step"><strong>Step 2:</strong> Equal degrees ⇒ horizontal asymptote \(y=1\).</div><em>Conclusion: VA \(x=2\), HA \(y=1\). ✓</em></div>${gframe(["y = x/(x-2)"], { title: "f(x)=x/(x−2): vertical asymptote x=2, horizontal asymptote y=1" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Inflection without an extremum</h3><p>Find the inflection point of \(f(x)=x^3+1\) and explain why it isn't an extremum.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f''=6x=0\Rightarrow x=0\), sign change ⇒ inflection \((0,1)\).</div><div class="step"><strong>Step 2:</strong> \(f'=3x^2\ge0\), no sign change ⇒ no max/min.</div><em>Conclusion: inflection at \((0,1)\); the curve keeps rising. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Critical numbers of \(f(x)=x^3-3x^2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'=3x^2-6x=0\Rightarrow x=0,2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>If \(f'(3)=0\) and \(f''(3)>0\), classify \(x=3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Local minimum.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Inflection point of \(f(x)=x^3-3x^2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f''=6x-6=0\Rightarrow x=1\); \((1,-2)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Asymptotes of \(f(x)=\dfrac1{x-3}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>VA \(x=3\), HA \(y=0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>End behaviour of \(f(x)=-x^3+2x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Odd, \(a<0\): up–down (\(x\to-\infty,\ f\to+\infty\); \(x\to+\infty,\ f\to-\infty\)).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What do you read from \(f'\)?</h3><p><em>Increase/decrease and local extrema.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What do you read from \(f''\)?</h3><p><em>Concavity and inflection points.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What guides a rational sketch?</h3><p><em>Its vertical and horizontal asymptotes.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Can an inflection point not be an extremum?</h3><p><em>Yes — e.g. \(x^3\) at the origin.</em></p></div>
</div>`),
]);

u4["4.4"] = L("4.4", "Full Curve Sketching", [
  html(String.raw`<div class="lecture-box">
  <h1>🎨 Full Curve Sketching</h1>
  <p><strong>Overview.</strong> Now put it all together. The <strong>full analysis</strong> runs the checklist in order — domain, intercepts, asymptotes, \(f'\) (increase/decrease + extrema), \(f''\) (concavity + inflection), end behaviour — and then draws a curve consistent with every feature.</p>
  <h2>📌 The checklist</h2>
  <ol>
    <li>Domain &amp; symmetry; intercepts.</li>
    <li>Asymptotes (for rationals).</li>
    <li>\(f'\): critical numbers, intervals of increase/decrease, extrema.</li>
    <li>\(f''\): concavity, inflection points.</li>
    <li>End behaviour; then sketch.</li>
  </ol>
  ${gframe(["y = x^3 - 3*x"], { title: "The finished sketch of f(x)=x³−3x: max (−1,2), min (1,−2), inflection (0,0), ends down–up" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Cubic</h3><p>Sketch \(f(x)=x^3-3x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> x-ints \(0,\pm\sqrt3\); y-int \(0\); domain all reals.</div><div class="step"><strong>Step 2:</strong> \(f'=3x^2-3\): max \((-1,2)\), min \((1,-2)\). \(f''=6x\): inflection \((0,0)\).</div><div class="step"><strong>Step 3:</strong> Ends down–up.</div><em>Conclusion: the curve in the graph above. ✓</em></div>${gframe(["y = x^3 - 3*x"], { title: "f(x)=x³−3x: max (−1,2), min (1,−2), inflection (0,0)" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Quartic (even)</h3><p>Sketch \(f(x)=x^4-2x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Even (y-axis symmetry); x-ints \(0,\pm\sqrt2\).</div><div class="step"><strong>Step 2:</strong> \(f'=4x^3-4x\): max \((0,0)\), mins \((\pm1,-1)\). \(f''=12x^2-4\): inflections at \(x=\pm\tfrac1{\sqrt3}\).</div><div class="step"><strong>Step 3:</strong> Ends up–up. A "W" shape.</div><em>Conclusion: symmetric W with two minima. ✓</em></div>${gframe(["y = x^4 - 2*x^2"], { title: "f(x)=x⁴−2x²: a symmetric 'W' with minima at (±1,−1) and a local max at (0,0)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Cubic with an inflection plateau region</h3><p>Sketch \(f(x)=x^3-3x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> x-ints \(0,3\); \(f'=3x^2-6x\): max \((0,0)\), min \((2,-4)\).</div><div class="step"><strong>Step 2:</strong> \(f''=6x-6\): inflection \((1,-2)\); ends down–up.</div><em>Conclusion: rise to \((0,0)\), dip to \((2,-4)\), rise again. ✓</em></div>${gframe(["y = x^3 - 3*x^2"], { title: "f(x)=x³−3x²: max (0,0), min (2,−4), inflection (1,−2)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Reconstruct from clues</h3><p>Sketch a function with: \(f'(x)>0\) on \((-\infty,0)\) and \((2,\infty)\), \(f'(x)<0\) on \((0,2)\), \(f''>0\) on \((1,\infty)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Up, then down, then up ⇒ local max at \(0\), local min at \(2\).</div><div class="step"><strong>Step 2:</strong> Concave down before \(x=1\), up after ⇒ inflection at \(x=1\).</div><em>Conclusion: a cubic-shaped curve matching all the signs. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Match a function to its derivative</h3><p>If \(f\) has a local max at \(x=-1\) and a local min at \(x=1\), what must \(f'\) look like?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'=0\) at \(x=\pm1\); \(f'>0\) outside \([-1,1]\), \(f'<0\) inside.</div><em>Conclusion: \(f'\) is an upward parabola with roots at \(\pm1\) (e.g. \(3x^2-3\)). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>x-intercepts of \(f(x)=x^3-3x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x(x^2-3)=0\Rightarrow 0,\pm\sqrt3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Local extrema of \(f(x)=x^3-3x^2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Max \((0,0)\), min \((2,-4)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Inflection point of \(f(x)=x^3-3x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((0,0)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Is \(f(x)=x^4-2x^2\) even or odd?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Even (only even powers).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>If \(f'\) is positive everywhere, what does the graph do?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Always increasing.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the first step of a full sketch?</h3><p><em>Domain, symmetry, and intercepts.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does \(f'\) contribute?</h3><p><em>Increase/decrease and extrema.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does \(f''\) contribute?</h3><p><em>Concavity and inflection points.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you finish?</h3><p><em>Draw a curve consistent with every feature, including end behaviour.</em></p></div>
</div>`),
]);
