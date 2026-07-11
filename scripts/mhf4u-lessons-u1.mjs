// MHF4U Unit 1 — Polynomial Functions. Deep single-card lessons (MCR3U theme)
// PLUS professional interactive graphs with parameter sliders (animation).
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u1 = {};

u1["1.1"] = L("1.1", "Power Functions & End Behaviour", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Power Functions &amp; End Behaviour</h1>
  <p><strong>Overview.</strong> A <strong>power function</strong> is \(f(x)=ax^{n}\) — a single term. Every polynomial behaves like its highest-degree term at the far edges of the graph, so understanding power functions tells you the <strong>end behaviour</strong> of <em>any</em> polynomial: what happens to \(y\) as \(x\to-\infty\) and \(x\to+\infty\). Two things decide it — the parity of the degree \(n\) and the sign of the leading coefficient \(a\).</p>
  <h2>📌 The end-behaviour rules</h2>
  <ul>
    <li><strong>Even \(n\)</strong> (\(x^2,x^4,\dots\)): both ends go the <em>same</em> way — up–up if \(a>0\), down–down if \(a<0\).</li>
    <li><strong>Odd \(n\)</strong> (\(x^3,x^5,\dots\)): the ends go <em>opposite</em> ways — down–up if \(a>0\), up–down if \(a<0\).</li>
    <li>We write this with limits: e.g. for \(y=x^3\), as \(x\to+\infty,\ y\to+\infty\) and as \(x\to-\infty,\ y\to-\infty\).</li>
  </ul>
  ${gframe(["y = x^2", "y = x^4"], { title: "Even degree: both ends up (x² and x⁴)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: End behaviour of a full polynomial</h3><p>Determine the end behaviour of \(f(x)=-3x^5+2x^3-7x+4\), using limit notation.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Far from the origin only the <em>leading term</em> matters: here that is \(-3x^5\).</div><div class="step"><strong>Step 2:</strong> Degree \(5\) is odd ⇒ the ends go opposite ways; \(a=-3<0\) ⇒ the left end rises and the right end falls.</div><em>Conclusion: as \(x\to-\infty,\ f(x)\to+\infty\); as \(x\to+\infty,\ f(x)\to-\infty\). ✓</em></div>${gframe(["y = -3*x^5 + 2*x^3 - 7*x + 4"], { title: "f(x)=−3x⁵+2x³−7x+4: left end up, right end down — the −3x⁵ term decides (zoom out)" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Why the leading term dominates</h3><p>For the same \(f(x)=-3x^5+2x^3-7x+4\), show numerically why the leading term decides the right end.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Evaluate each term at \(x=10\): \(-3x^5=-300{,}000\), \(2x^3=2{,}000\), \(-7x=-70\), constant \(+4\).</div><div class="step"><strong>Step 2:</strong> The \(-300{,}000\) dwarfs the other terms (about \(+1934\) combined), so \(f(10)\approx-298{,}066<0\).</div><em>Conclusion: at large \(|x|\) the leading term sets the sign, confirming \(f(x)\to-\infty\) as \(x\to+\infty\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: End behaviour from factored form</h3><p>Find the end behaviour of \(g(x)=-2(x-1)(x+3)(x-2)^2\) <em>without expanding</em>.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Multiply only the leading part of each factor: \((-2)(x)(x)(x^2)=-2x^4\).</div><div class="step"><strong>Step 2:</strong> Degree \(4\) is even ⇒ both ends go the same way; \(a=-2<0\) ⇒ both fall.</div><em>Conclusion: as \(x\to\pm\infty,\ g(x)\to-\infty\) (down–down). ✓</em></div>${gframe(["y = -2*(x-1)*(x+3)*(x-2)^2"], { title: "g(x)=−2(x−1)(x+3)(x−2)²: a degree-4 curve with both ends falling" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Group functions by end behaviour</h3><p>Which of these have the <em>same</em> end behaviour as \(h(x)=2-x^4\)? &nbsp;(i) \(3x^4\)&nbsp; (ii) \(-x^6\)&nbsp; (iii) \(-5x^2\)&nbsp; (iv) \(x^3\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(h\) has leading term \(-x^4\): even degree, \(a<0\) ⇒ down–down.</div><div class="step"><strong>Step 2:</strong> Compare: (i) \(3x^4\) up–up; (ii) \(-x^6\) down–down ✓; (iii) \(-5x^2\) down–down ✓; (iv) \(x^3\) down–up.</div><em>Conclusion: (ii) and (iii) match \(h\). ✓</em></div>${gframe(["y = 2 - x^4", "y = -x^6", "y = -5*x^2"], { title: "h=2−x⁴, −x⁶, −5x² all fall at both ends — the same end behaviour" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Interpret an applied model</h3><p>A firm's profit (in thousands of dollars) is \(P(x)=-2x^3+30x^2-50x\), where \(x\ge0\) is output in hundreds of units. Describe and interpret the long-run end behaviour.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Leading term \(-2x^3\): odd degree, \(a<0\), so as \(x\to+\infty,\ P\to-\infty\).</div><div class="step"><strong>Step 2:</strong> Only \(x\ge0\) is meaningful, so we read the right end only.</div><em>Conclusion: for very large output the model predicts mounting losses — past some point, overproduction destroys profit. ✓</em></div>${gframe(["y = -2*x^3 + 30*x^2 - 50*x"], { title: "P(x)=−2x³+30x²−50x: profit rises then plunges — as output grows, P→−∞" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Give the end behaviour of \(f(x)=4x^3-2x^2+7\) in limit notation.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Leading term \(4x^3\) (odd, \(a>0\)): as \(x\to-\infty,\ f\to-\infty\); as \(x\to+\infty,\ f\to+\infty\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>End behaviour of \(f(x)=-x^6+10x^4-3\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Leading \(-x^6\) (even, \(a<0\)): both ends \(\to-\infty\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>From factored form, find the end behaviour of \(y=(x+1)(x-2)(3-x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Leading product \((x)(x)(-x)=-x^3\) (odd, \(a<0\)): as \(x\to-\infty,\ y\to+\infty\); as \(x\to+\infty,\ y\to-\infty\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Which has the same end behaviour as \(-2x^4\): &nbsp;\(x^2\), \(-x^6\), or \(x^4\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-x^6\) (both ends down). \(-2x^4\) is down–down; \(x^2\) and \(x^4\) are up–up.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>A degree-7 polynomial has a negative leading coefficient. Describe both ends with limits.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Odd degree, \(a<0\): as \(x\to-\infty,\ f\to+\infty\); as \(x\to+\infty,\ f\to-\infty\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: For a multi-term polynomial, how do you find the end behaviour?</h3><p><em>Look only at the leading term — its degree (parity) and sign — and ignore the rest.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you get the leading term from factored form?</h3><p><em>Multiply the leading term of each factor (don't expand the whole thing).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How should end behaviour be written formally?</h3><p><em>With limits, e.g. as \(x\to+\infty,\ f(x)\to-\infty\) — not just "down–up".</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why is it valid to ignore the lower terms?</h3><p><em>At large \(|x|\) the leading term's magnitude vastly exceeds all the others combined (see Example 2).</em></p></div>
</div>`),
  graph("a*x^4", "a", { xMin: -3, xMax: 3, yMin: -9, yMax: 9, paramMin: -2, paramMax: 2, paramInit: 1, caption: "Animation: slide a in y = a·x⁴ (even degree). a>0 gives up–up; a<0 flips it to down–down." }),
  graph("a*x^3", "a", { xMin: -3, xMax: 3, yMin: -9, yMax: 9, paramMin: -2, paramMax: 2, paramInit: 1, caption: "Animation: slide a in y = a·x³ (odd degree). a>0 gives down–up; a<0 flips it to up–down." }),
]);

u1["1.2"] = L("1.2", "Characteristics of Polynomial Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🔎 Characteristics of Polynomial Functions</h1>
  <p><strong>Overview.</strong> The <strong>degree</strong> \(n\) of a polynomial sets hard limits on its graph: at most \(n\) x-intercepts and at most \(n-1\) turning points. The degree also shows up in a table of values — the \(n\)-th <strong>finite differences</strong> are constant. Some polynomials have symmetry: <em>even</em> functions mirror over the y-axis, <em>odd</em> functions rotate about the origin.</p>
  <h2>📌 Key features</h2>
  <ul>
    <li><strong>Degree \(n\):</strong> ≤ \(n\) real zeros (x-intercepts), ≤ \(n-1\) turning points.</li>
    <li><strong>Finite differences:</strong> the \(n\)-th differences of a degree-\(n\) polynomial are constant.</li>
    <li><strong>Even function:</strong> \(f(-x)=f(x)\) (only even powers), symmetric about the y-axis. <strong>Odd function:</strong> \(f(-x)=-f(x)\) (only odd powers), symmetric about the origin.</li>
  </ul>
  ${gframe(["y = x^3 - 3*x"], { title: "A cubic: 2 turning points, 3 x-intercepts (max for degree 3)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Read every characteristic at once</h3><p>For \(f(x)=2x^5-4x^3+x-6\), state the degree, the maximum number of x-intercepts, and the maximum number of turning points.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Highest power is \(x^5\), so the degree is \(n=5\).</div><div class="step"><strong>Step 2:</strong> A degree-\(n\) polynomial has at most \(n\) real zeros and at most \(n-1\) turning points.</div><em>Conclusion: degree 5; up to 5 x-intercepts; up to 4 turning points. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Find the degree from a table (finite differences)</h3><p>A polynomial gives \(f(0..4)=1,2,9,28,65\). Find its degree.</p><div class="solution"><div class="step"><strong>Step 1:</strong> First differences: \(1,7,19,37\).</div><div class="step"><strong>Step 2:</strong> Second differences: \(6,12,18\). Third differences: \(6,6\) — constant.</div><em>Conclusion: the 3rd differences are constant, so the degree is 3. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Test symmetry algebraically — incl. "neither"</h3><p>Classify \(f(x)=x^3+x^2\) using \(f(-x)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f(-x)=(-x)^3+(-x)^2=-x^3+x^2\).</div><div class="step"><strong>Step 2:</strong> Compare: \(f(-x)\ne f(x)\) (not even) and \(-f(x)=-x^3-x^2\ne f(-x)\) (not odd).</div><em>Conclusion: neither — mixing odd and even powers breaks both symmetries. ✓</em></div>${gframe(["y = x^3 + x^2"], { title: "x³+x²: neither even (no y-axis mirror) nor odd (no origin symmetry)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Deduce the degree from a description</h3><p>A polynomial has exactly 3 turning points and both ends pointing up. What is the least possible degree?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Turning points \(\le n-1\), so \(3\le n-1\Rightarrow n\ge4\).</div><div class="step"><strong>Step 2:</strong> Both ends the same way ⇒ even degree.</div><em>Conclusion: the least even degree that is \(\ge4\) is \(\boxed{4}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Full analysis of one function</h3><p>For \(f(x)=x^4-5x^2+4\): give degree, end behaviour, symmetry, and the actual number of x-intercepts.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Degree 4, leading \(+x^4\) ⇒ both ends \(\to+\infty\).</div><div class="step"><strong>Step 2:</strong> Only even powers ⇒ even function (y-axis symmetry).</div><div class="step"><strong>Step 3:</strong> Factor: \((x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2)\) ⇒ zeros \(\pm1,\pm2\).</div><em>Conclusion: degree 4, up–up, even, and it hits the maximum 4 x-intercepts. ✓</em></div>${gframe(["y = x^4 - 5*x^2 + 4"], { title: "x⁴−5x²+4: even (y-axis symmetry), both ends up, 4 x-intercepts at ±1, ±2" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>For \(f(x)=3x^6-2x^4+x\), state the max x-intercepts and max turning points.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Degree 6 ⇒ up to 6 x-intercepts and up to 5 turning points.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A table's <em>first</em> differences are constant. What degree, and what kind of function?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Degree 1 — a linear function.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Use \(f(-x)\) to classify \(f(x)=x^4+x^3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f(-x)=x^4-x^3\): not equal to \(f(x)\) or \(-f(x)\) ⇒ neither.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>An even, degree-4 polynomial: what is the most x-intercepts it can have — and must it have any?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Up to 4; but it need not have any (e.g. \(x^4+1\) has none).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Build a difference table for \(0,1,8,27,64\). What degree is the pattern?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>1st: \(1,7,19,37\); 2nd: \(6,12,18\); 3rd: \(6,6\) constant ⇒ degree 3 (these are \(x^3\)).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do the degree's limits work together?</h3><p><em>Degree \(n\) ⇒ at most \(n\) x-intercepts and \(n-1\) turning points.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you actually use a difference table?</h3><p><em>Keep differencing until a row is constant; that row's level is the degree.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you confirm symmetry — and catch "neither"?</h3><p><em>Compute \(f(-x)\): equals \(f(x)\) → even, equals \(-f(x)\) → odd, otherwise neither.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Does an even-degree polynomial have to be an even function?</h3><p><em>No — it must have only even powers (e.g. \(x^4+x^3\) is degree 4 but neither).</em></p></div>
</div>`),
]);

u1["1.3"] = L("1.3", "Equations & Graphs of Polynomial Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🪧 Equations &amp; Graphs of Polynomial Functions</h1>
  <p><strong>Overview.</strong> In <strong>factored form</strong> \(f(x)=a(x-r_1)^{m_1}(x-r_2)^{m_2}\cdots\), the <strong>zeros</strong> are \(r_1,r_2,\dots\) and each exponent \(m_i\) is its <strong>multiplicity</strong>. The multiplicity controls how the graph meets the x-axis: <em>odd</em> multiplicity crosses; <em>even</em> multiplicity touches and turns back. With the zeros, the end behaviour, and the y-intercept, you can sketch the whole curve.</p>
  <h2>📌 Reading factored form</h2>
  <ul>
    <li><strong>Zeros:</strong> set each factor to \(0\). <strong>Multiplicity 1 or odd:</strong> the graph crosses; <strong>even:</strong> it touches (bounces).</li>
    <li><strong>y-intercept:</strong> evaluate \(f(0)\). <strong>Leading coefficient \(a\):</strong> from one extra point.</li>
  </ul>
  ${gframe(["y = (x+2)*(x-1)^2"], { title: "Crosses at x = −2 (mult 1); touches at x = 1 (mult 2)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Read the whole skeleton</h3><p>For \(f(x)=(x+2)(x-1)^2\), state the zeros and their behaviour, the end behaviour, and the y-intercept.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Zeros: \(x=-2\) (mult 1 ⇒ crosses), \(x=1\) (mult 2 ⇒ touches).</div><div class="step"><strong>Step 2:</strong> Degree \(1+2=3\), leading \(+x^3\) ⇒ end behaviour down–up.</div><div class="step"><strong>Step 3:</strong> \(f(0)=(2)(-1)^2=2\) ⇒ y-intercept \((0,2)\).</div><em>Conclusion: enough to sketch it — cross at −2, bounce at 1, rising to the right. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Multiplicity 1 vs 2 vs 3</h3><p>Describe how \(f(x)=x^3(x-2)\) meets the x-axis at each zero.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=0\) has multiplicity 3 (odd) ⇒ it crosses, but <em>flattens</em> against the axis like \(x^3\).</div><div class="step"><strong>Step 2:</strong> \(x=2\) has multiplicity 1 ⇒ a plain straight crossing.</div><em>Conclusion: a flattened crossing at 0, an ordinary crossing at 2. ✓</em></div>${gframe(["y = x^3*(x-2)"], { title: "x³(x−2): a flattened crossing at x=0 (mult 3) and a plain crossing at x=2" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Find \(a\) for a quartic</h3><p>A quartic has a double zero at \(x=2\) and single zeros at \(x=-1\) and \(x=3\), and passes through \((0,6)\). Find \(a\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f(x)=a(x-2)^2(x+1)(x-3)\).</div><div class="step"><strong>Step 2:</strong> \(f(0)=a(4)(1)(-3)=-12a=6\).</div><em>Conclusion: \(a=-\tfrac12\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Build an equation from a description</h3><p>Write an equation for a cubic that <em>crosses</em> at \(x=-3\), <em>touches</em> at \(x=1\), with a positive leading coefficient.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Cross ⇒ factor \((x+3)\); touch ⇒ even factor \((x-1)^2\).</div><div class="step"><strong>Step 2:</strong> Degrees add to \(1+2=3\) ✓ (a cubic), choose any \(a>0\).</div><em>Conclusion: \(f(x)=a(x+3)(x-1)^2,\ a>0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Least possible degree</h3><p>A polynomial <em>touches</em> the x-axis at two points and <em>crosses</em> at one. What is its least possible degree?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Each touch needs even multiplicity, so at least 2 each; the crossing needs at least 1.</div><div class="step"><strong>Step 2:</strong> Minimum total \(=2+2+1\).</div><em>Conclusion: least degree \(5\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>For \(y=(x-1)(x+3)^2\): give the zeros (with behaviour), the end behaviour, and the y-intercept.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Zeros: 1 (cross), −3 (touch); degree 3 ⇒ down–up; \(f(0)=(-1)(9)=-9\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>At \(x=0\) in \(y=x^3(x+2)\), does it cross or touch? Describe the shape.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Crosses, but flattened (multiplicity 3).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>A cubic with zeros \(-2,1,3\) passes through \((0,6)\). Find \(a\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f(0)=a(2)(-1)(-3)=6a=6\Rightarrow a=1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Write a quartic that touches at \(x=2\) and crosses at \(x=-1\) and \(x=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=a\,x(x+1)(x-2)^2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Least possible degree of a polynomial with one double zero and two single zeros?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2+1+1=4\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What four things let you sketch from factored form?</h3><p><em>Zeros, each multiplicity, the end behaviour, and the y-intercept.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How does multiplicity 3 differ from multiplicity 1?</h3><p><em>Both cross, but mult 3 flattens against the axis first.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you build an equation from "cross/touch" clues?</h3><p><em>Cross → linear factor; touch → squared factor; then fix \(a\) with a point.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you find the least degree?</h3><p><em>Add the minimum multiplicities: 2 for each touch, 1 for each cross.</em></p></div>
</div>`),
]);

u1["1.4"] = L("1.4", "Transformations of Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🔧 Transformations of Functions</h1>
  <p><strong>Overview.</strong> Any function can be transformed with \(g(x)=a\,f\big(k(x-d)\big)+c\). Each parameter changes the parent graph in a predictable way — for power functions \(f(x)=x^n\), this lets you build and read off complicated polynomials at a glance.</p>
  <h2>📌 The four parameters</h2>
  <ul>
    <li><strong>\(a\):</strong> vertical stretch by \(|a|\); reflection in the x-axis if \(a<0\).</li>
    <li><strong>\(k\):</strong> horizontal stretch by \(\tfrac{1}{|k|}\); reflection in the y-axis if \(k<0\).</li>
    <li><strong>\(d\):</strong> horizontal shift (opposite to the sign). <strong>\(c\):</strong> vertical shift.</li>
  </ul>
  ${gframe(["y = 2*(x-1)^3 + 3"], { title: "y = 2(x−1)³ + 3: stretch 2, right 1, up 3" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Describe all four parameters</h3><p>Describe \(y=-2(x+3)^4-5\) as a sequence of transformations of \(y=x^4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=-2\): vertical stretch by 2 <em>and</em> a reflection in the x-axis.</div><div class="step"><strong>Step 2:</strong> \(d=-3\): left 3 (opposite the sign). \(c=-5\): down 5.</div><em>Conclusion: reflect, stretch ×2, left 3, down 5. ✓</em></div>${gframe(["y = -2*(x+3)^4 - 5"], { title: "y=−2(x+3)⁴−5: reflected (opens down), stretched ×2, left 3, down 5" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Map a point through a stretch</h3><p>The point \((2,8)\) lies on \(y=x^3\). Find its image on \(y=-\tfrac12(x-1)^3+4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> New \(x\): apply \(d=1\) ⇒ \(2+1=3\).</div><div class="step"><strong>Step 2:</strong> New \(y\): apply \(a=-\tfrac12\) then \(c=4\) ⇒ \(-\tfrac12(8)+4=0\).</div><em>Conclusion: image \((3,0)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Horizontal stretch vs compression</h3><p>Compare the effect of \(k\) in \(y=f(2x)\) and \(y=f\!\big(\tfrac12 x\big)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Horizontal change is by \(\tfrac1{|k|}\): \(k=2\) ⇒ compress by \(\tfrac12\); \(k=\tfrac12\) ⇒ stretch by 2.</div><div class="step"><strong>Step 2:</strong> So a point at \(x=4\) moves to \(x=2\) (compress) or to \(x=8\) (stretch).</div><em>Conclusion: \(k>1\) squeezes toward the y-axis; \(0<k<1\) pulls away. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Write the equation from a description</h3><p>Write \(y=x^4\) after: reflect in the x-axis, vertical stretch 3, left 2, up 1.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Reflect + stretch ⇒ \(a=-3\). Left 2 ⇒ \(d=-2\). Up 1 ⇒ \(c=1\).</div><em>Conclusion: \(y=-3(x+2)^4+1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Factor out \(k\) before reading it</h3><p>Describe the transformations in \(y=(2x-6)^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Factor the inside: \(2x-6=2(x-3)\), so \(y=\big(2(x-3)\big)^3\).</div><div class="step"><strong>Step 2:</strong> \(k=2\) ⇒ horizontal compression by \(\tfrac12\); \(d=3\) ⇒ right 3.</div><em>Conclusion: compress horizontally by \(\tfrac12\), then right 3 — you must factor out \(k\) first. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Describe \(y=-(x-4)^3+2\) fully.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Reflect in the x-axis, right 4, up 2.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the image of \((1,1)\) on \(y=x^3\) under \(y=2(x+1)^3-3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x:1-1=0\); \(y:2(1)-3=-1\) ⇒ \((0,-1)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Write \(y=x^4\): reflected, stretched ×2, right 3, down 1.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=-2(x-3)^4-1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Describe \(y=(3x+9)^2\) (factor \(k\) first).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3(x+3))^2\): compress by \(\tfrac13\), left 3.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>What single transformation maps \(y=x^3\) to \(y=8x^3\)? Give two equivalent answers.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Vertical stretch ×8 — or, since \((2x)^3=8x^3\), a horizontal compression by \(\tfrac12\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does \(a\) control?</h3><p><em>Vertical stretch by \(|a|\) and (if \(a<0\)) reflection in the x-axis.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why must you factor out \(k\) first?</h3><p><em>The shift is read from \(k(x-d)\); in \(2x-6\) the shift is \(3\), not \(6\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you map a point?</h3><p><em>Apply \(d\) to \(x\), and \(a\) then \(c\) to \(y\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Can a vertical stretch equal a horizontal one?</h3><p><em>For power functions, yes — e.g. \(8x^3=(2x)^3\).</em></p></div>
</div>`),
  graph("a*x^3", "a", { xMin: -3, xMax: 3, yMin: -9, yMax: 9, paramMin: -2, paramMax: 2, paramInit: 1, caption: "Slider a — y = a·x³: vertical stretch by |a|, and a reflection in the x-axis when a<0." }),
  graph("(x-d)^3", "d", { xMin: -6, xMax: 6, yMin: -9, yMax: 9, paramMin: -3, paramMax: 3, paramInit: 0, caption: "Slider d — y = (x−d)³: the curve slides horizontally to centre at x = d." }),
  graph("x^3+c", "c", { xMin: -3, xMax: 3, yMin: -9, yMax: 9, paramMin: -5, paramMax: 5, paramInit: 0, caption: "Slider c — y = x³ + c: the whole curve slides vertically by c." }),
]);
