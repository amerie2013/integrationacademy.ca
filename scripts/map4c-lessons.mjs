// Fully-authored MAP4C lessons (deep examples & questions), keyed by code.
// seed-map4c.mjs splices these over the scaffolds; anything absent stays a
// scaffold. Filled unit by unit. Same lecture-box theme as the other courses.
import { html, gframe } from "./seed-mpm2d.mjs";

// Shared inline styles (match the flagship lessons).
const EX = "background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;";
const PR = "background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;";
const MK = "background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;";
const QA = "background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;";

export const authored = {
  // ── 1.1 Exponent Laws & Rational Exponents ──────────────────
  "1.1": { code: "1.1", title: "Exponent Laws & Rational Exponents", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔢 Exponent Laws &amp; Rational Exponents</h1>
  <p><strong>Overview.</strong> Every exponential model in this course — interest, populations, decay — is built on powers, so the exponent laws must be automatic. This lesson reviews the laws for a <strong>common base</strong>, extends them to <strong>zero, negative, and rational</strong> exponents, and shows how to evaluate awkward powers like \( 32^{3/5} \) by hand. The one rule behind everything: a law only applies when the powers share the <strong>same base</strong>.</p>

  <h2>📌 The Core Laws (same base)</h2>
  <ul>
    <li><strong>Product:</strong> \( a^m\cdot a^n=a^{m+n} \) — multiply powers, <em>add</em> exponents.</li>
    <li><strong>Quotient:</strong> \( \dfrac{a^m}{a^n}=a^{m-n} \) — divide, <em>subtract</em> exponents.</li>
    <li><strong>Power of a power:</strong> \( (a^m)^n=a^{mn} \) — <em>multiply</em> exponents.</li>
    <li><strong>Power of a product:</strong> \( (ab)^n=a^n b^n \), and \( \left(\dfrac{a}{b}\right)^n=\dfrac{a^n}{b^n} \).</li>
  </ul>

  <h2>📌 Zero &amp; Negative Exponents</h2>
  <p>\( a^0=1 \) for any non-zero base, and \( a^{-n}=\dfrac{1}{a^n} \). A negative exponent means a <strong>reciprocal</strong>, not a negative value: \( 2^{-3}=\dfrac{1}{8} \), which is positive. To clear a negative exponent, move the factor across the fraction bar and flip the sign of its exponent.</p>

  <h2>📌 Rational Exponents Are Roots</h2>
  <p>\( a^{1/n}=\sqrt[n]{a} \) and \( a^{m/n}=\left(\sqrt[n]{a}\right)^m \). The <strong>denominator is the root</strong> and the <strong>numerator is the power</strong>. Take the root first to keep the numbers small: \( 8^{2/3}=(\sqrt[3]{8})^2=2^2=4 \).</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Combining powers</h3>
    <p>Simplify \( \dfrac{x^5\cdot x^2}{x^3} \).</p>
    <div class="solution">
      <div class="step"><strong>Product law (top):</strong> \( x^5\cdot x^2=x^{7} \).</div>
      <div class="step"><strong>Quotient law:</strong> \( \dfrac{x^7}{x^3}=x^{7-3}=x^4 \).</div>
      <em>Conclusion: \( x^4 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: A power of a product</h3>
    <p>Simplify \( (2x^3)^4\cdot x^{-5} \).</p>
    <div class="solution">
      <div class="step"><strong>Power of a product:</strong> \( (2x^3)^4=2^4x^{12}=16x^{12} \).</div>
      <div class="step"><strong>Product law:</strong> \( 16x^{12}\cdot x^{-5}=16x^{7} \).</div>
      <em>Conclusion: \( 16x^7 \). ✓ (Do not forget the coefficient's exponent: \( 2^4=16 \).)</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Rational powers by hand</h3>
    <p>Evaluate without a calculator: (a) \( 27^{2/3} \); (b) \( 16^{-3/4} \); (c) \( 32^{3/5} \).</p>
    <div class="solution">
      <div class="step"><strong>(a)</strong> Root first: \( (\sqrt[3]{27})^2=3^2=9 \).</div>
      <div class="step"><strong>(b)</strong> Negative \(\Rightarrow\) reciprocal: \( \dfrac{1}{(\sqrt[4]{16})^3}=\dfrac{1}{2^3}=\dfrac18 \).</div>
      <div class="step"><strong>(c)</strong> \( (\sqrt[5]{32})^3=2^3=8 \).</div>
      <em>Conclusion: \( 9,\ \tfrac18,\ 8 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Negative exponents with variables</h3>
    <p>Simplify with positive exponents: \( (4x^{-2}y^{5})^{-1} \).</p>
    <div class="solution">
      <div class="step"><strong>Apply the outer power:</strong> \( 4^{-1}x^{2}y^{-5} \).</div>
      <div class="step"><strong>Clear negatives:</strong> \( \dfrac{x^{2}}{4y^{5}} \).</div>
      <em>Conclusion: \( \dfrac{x^2}{4y^5} \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: An interest formula in disguise</h3>
    <p>A rate written as a growth factor is \( 1.06 \). Show that three years of growth, \( (1.06)^{3} \), is a single power, and estimate it.</p>
    <div class="solution">
      <div class="step"><strong>Meaning:</strong> \( (1.06)^3=1.06\times1.06\times1.06 \) — the balance is multiplied by \( 1.06 \) three times.</div>
      <div class="step"><strong>Estimate:</strong> \( 1.06^2=1.1236 \), then \( 1.1236\times1.06\approx1.191 \).</div>
      <em>Conclusion: \( (1.06)^3\approx1.191 \), a \( 19.1\% \) total increase over three years. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Simplify \( (3x^2)^3\cdot x \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 27x^6\cdot x=27x^{7} \). <em>Answer: \( 27x^7 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Simplify \( \dfrac{6a^5b^2}{2a^2b^5} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3a^{3}b^{-3}=\dfrac{3a^3}{b^3} \). <em>Answer: \( \dfrac{3a^3}{b^3} \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Evaluate \( 81^{3/4} \) without a calculator.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (\sqrt[4]{81})^3=3^3=27 \). <em>Answer: \( 27 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Evaluate \( \left(\dfrac{1}{8}\right)^{-2/3} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 8^{2/3}=(\sqrt[3]{8})^2=4 \). <em>Answer: \( 4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Evaluate \( 25^{3/2}\cdot 4^{-1}\cdot 7^{0} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 25^{3/2}=(\sqrt{25})^3=125 \); \( 4^{-1}=\tfrac14 \); \( 7^0=1 \). Product \( =125\cdot\tfrac14=\tfrac{125}{4}=31.25 \). <em>Answer: \( 31.25 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Combining powers of <strong>different</strong> bases — the laws need a common base.</li>
    <li>Reading \( a^{-n} \) as a negative number; it is the <strong>reciprocal</strong> \( \tfrac{1}{a^n} \).</li>
    <li>Forgetting the coefficient's exponent: \( (2x^3)^4=16x^{12} \), not \( 2x^{12} \).</li>
    <li>For \( a^{m/n} \), squaring before rooting and fighting huge numbers — take the root first.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When can I add exponents?</h3><p><em>Only when the bases are the same and the powers are multiplied: \( a^m\cdot a^n=a^{m+n} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What does a fractional exponent mean?</h3><p><em>A root: \( a^{m/n}=\left(\sqrt[n]{a}\right)^m \). The bottom is the root, the top is the power.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Is \( a^0 \) really \( 1 \)?</h3><p><em>Yes, for any non-zero base — it keeps the quotient law consistent, since \( \tfrac{a^n}{a^n}=a^0=1 \).</em></p></div>
</div>`)] },

  // ── 1.2 Solving Exponential Equations by Common Bases ───────
  "1.2": { code: "1.2", title: "Solving Exponential Equations by Common Bases", blocks: [html(String.raw`<div class="lecture-box">
  <h1>⚖️ Solving Exponential Equations by Common Bases</h1>
  <p><strong>Overview.</strong> If both sides of an exponential equation can be written as powers of the <strong>same base</strong>, then the exponents must be equal — turning the exponential equation into a simple linear one. This lesson shows how to spot hidden powers (\( 8=2^3 \), \( 27=3^3 \), \( \tfrac14=2^{-2} \)) and use them to solve exactly.</p>

  <h2>📌 The Key Idea</h2>
  <p>If \( b^{\,M}=b^{\,N} \) (same base \( b>0,\ b\ne1 \)), then \( M=N \). So the plan is: rewrite each side as a power of one common base, set the exponents equal, and solve.</p>

  <h2>📌 Spotting Hidden Powers</h2>
  <p>Rewrite every number as a power of the smallest base you can: \( 4=2^2,\ 8=2^3,\ 16=2^4,\ 32=2^5 \); \( 9=3^2,\ 27=3^3,\ 81=3^4 \); \( 25=5^2,\ 125=5^3 \). Fractions use negative exponents: \( \tfrac18=2^{-3} \), \( \tfrac19=3^{-2} \).</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: A single power</h3>
    <p>Solve \( 2^{x}=32 \).</p>
    <div class="solution">
      <div class="step"><strong>Common base:</strong> \( 32=2^5 \), so \( 2^{x}=2^{5} \).</div>
      <div class="step"><strong>Equate exponents:</strong> \( x=5 \).</div>
      <em>Conclusion: \( x=5 \). ✓ (Check: \( 2^5=32 \).)</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Rewrite one side</h3>
    <p>Solve \( 9^{x}=27 \).</p>
    <div class="solution">
      <div class="step"><strong>Base 3:</strong> \( 9=3^2 \) and \( 27=3^3 \), so \( 3^{2x}=3^{3} \).</div>
      <div class="step"><strong>Equate:</strong> \( 2x=3\Rightarrow x=\tfrac32 \).</div>
      <em>Conclusion: \( x=\tfrac32 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: An exponent expression</h3>
    <p>Solve \( 8^{\,x-1}=16 \).</p>
    <div class="solution">
      <div class="step"><strong>Base 2:</strong> \( 2^{3(x-1)}=2^{4} \).</div>
      <div class="step"><strong>Equate and solve:</strong> \( 3(x-1)=4\Rightarrow 3x-3=4\Rightarrow x=\tfrac73 \).</div>
      <em>Conclusion: \( x=\tfrac73 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: A fractional base</h3>
    <p>Solve \( \left(\dfrac14\right)^{x}=8 \).</p>
    <div class="solution">
      <div class="step"><strong>Base 2:</strong> \( \tfrac14=2^{-2} \) and \( 8=2^{3} \), so \( 2^{-2x}=2^{3} \).</div>
      <div class="step"><strong>Equate:</strong> \( -2x=3\Rightarrow x=-\tfrac32 \).</div>
      <em>Conclusion: \( x=-\tfrac32 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Powers on both sides</h3>
    <p>Solve \( 4^{\,x+1}=8^{\,x-1} \).</p>
    <div class="solution">
      <div class="step"><strong>Base 2:</strong> \( 2^{2(x+1)}=2^{3(x-1)} \).</div>
      <div class="step"><strong>Equate exponents:</strong> \( 2x+2=3x-3 \).</div>
      <div class="step"><strong>Solve:</strong> \( 2+3=3x-2x\Rightarrow x=5 \).</div>
      <em>Conclusion: \( x=5 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Solve \( 3^{x}=81 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 81=3^4\Rightarrow x=4 \). <em>Answer: \( x=4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \( 25^{x}=125 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 5^{2x}=5^{3}\Rightarrow x=\tfrac32 \). <em>Answer: \( x=\tfrac32 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Solve \( \left(\dfrac19\right)^{x}=27 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3^{-2x}=3^{3}\Rightarrow x=-\tfrac32 \). <em>Answer: \( x=-\tfrac32 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( 4^{\,x-1}=64 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2^{2(x-1)}=2^{6}\Rightarrow 2x-2=6\Rightarrow x=4 \). <em>Answer: \( x=4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Solve \( 27^{\,x-1}=9^{\,2x+1} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3^{3(x-1)}=3^{2(2x+1)}\Rightarrow 3x-3=4x+2\Rightarrow x=-5 \). <em>Answer: \( x=-5 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Equating exponents before the bases match — rewrite to a common base first.</li>
    <li>Forgetting to distribute a power over an exponent expression: \( 8^{x-1}=2^{3(x-1)} \), not \( 2^{3x-1} \).</li>
    <li>Mishandling a fractional base — \( \tfrac14=2^{-2} \), so the exponent picks up a negative sign.</li>
    <li>Using this method when no common base exists (e.g. \( 3^x=10 \)) — that case needs a graph or table.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Why can I set the exponents equal?</h3><p><em>Because an exponential function is one-to-one: \( b^M=b^N \) forces \( M=N \) for a fixed base \( b>0,\ b\ne1 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I pick the common base?</h3><p><em>Use the smallest base that expresses every number as a power — often \( 2 \), \( 3 \), or \( 5 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What if there is no common base?</h3><p><em>Then solve graphically or with a table of values (next lesson).</em></p></div>
</div>`)] },

  // ── 1.3 Solving Exponential Equations Graphically ───────────
  "1.3": { code: "1.3", title: "Solving Exponential Equations Graphically", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📈 Solving Exponential Equations Graphically</h1>
  <p><strong>Overview.</strong> Many real exponential equations — like \( 1.05^{x}=1.276 \) — have no common base, so you cannot solve them by matching powers. Instead, solve them <strong>graphically</strong> or with a <strong>table of values</strong>: the solution is where the curve reaches the target value, or where two curves cross.</p>

  <h2>📌 The Intersection Idea</h2>
  <p>To solve \( b^{x}=k \), graph \( y=b^{x} \) and the horizontal line \( y=k \). The \( x \)-coordinate of their intersection is the solution. Equivalently, read across a table of values to the row whose output is \( k \).</p>

  <h2>📌 Narrowing With a Table</h2>
  <p>A table lets you trap the answer between two \( x \)-values, then zoom in. If \( 3^{1}=3 \) and \( 3^{2}=9 \), the solution of \( 3^{x}=5 \) lies between \( 1 \) and \( 2 \); testing \( x=1.4 \) and \( x=1.5 \) narrows it further.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Reading a solution from a graph</h3>
    <p>Use the graph of \( y=2^{x} \) to solve \( 2^{x}=8 \).</p>
    <div class="solution">
      <div class="step"><strong>Draw the line:</strong> add \( y=8 \) to the graph of \( y=2^{x} \).</div>
      <div class="step"><strong>Read the intersection:</strong> the curve reaches \( 8 \) at \( x=3 \) (since \( 2^3=8 \)).</div>
      <em>Conclusion: \( x=3 \). ✓ (Here a common base also works — a useful check.)</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Trapping a non-integer solution</h3>
    <p>Estimate the solution of \( 3^{x}=5 \) from a table of values.</p>
    <div class="solution">
      <div class="step"><strong>Bracket it:</strong> \( 3^{1}=3 \) (too small), \( 3^{2}=9 \) (too big), so \( 1<x<2 \).</div>
      <div class="step"><strong>Zoom in:</strong> \( 3^{1.4}\approx4.66 \), \( 3^{1.5}\approx5.20 \), so \( 1.4<x<1.5 \).</div>
      <div class="step"><strong>Refine:</strong> \( 3^{1.46}\approx5.00 \).</div>
      <em>Conclusion: \( x\approx1.46 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: An interest question</h3>
    <p>\( \$1000 \) grows by \( 1.05^{x} \) times after \( x \) years. When does it reach \( \$1276 \)? Solve \( 1.05^{x}=1.276 \).</p>
    <div class="solution">
      <div class="step"><strong>Table:</strong> \( 1.05^{4}\approx1.216 \), \( 1.05^{5}\approx1.276 \).</div>
      <div class="step"><strong>Match:</strong> the output equals \( 1.276 \) at \( x=5 \).</div>
      <em>Conclusion: about \( 5 \) years. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: A decay model</h3>
    <p>A drug in the blood follows \( R=0.8^{t} \) (fraction remaining after \( t \) hours). Estimate when half remains, \( 0.8^{t}=0.5 \).</p>
    <div class="solution">
      <div class="step"><strong>Bracket:</strong> \( 0.8^{3}\approx0.512 \), \( 0.8^{4}\approx0.410 \), so \( 3<t<4 \).</div>
      <div class="step"><strong>Zoom:</strong> \( 0.8^{3.1}\approx0.501 \).</div>
      <em>Conclusion: about \( 3.1 \) hours (the half-life). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Two curves crossing</h3>
    <p>Two colonies grow as \( y=2^{x} \) and \( y=3x+4 \). Estimate where the exponential overtakes the line for \( x>0 \).</p>
    <div class="solution">
      <div class="step"><strong>Table:</strong> at \( x=3 \), \( 2^3=8 \) vs \( 3(3)+4=13 \) (line ahead); at \( x=4 \), \( 16 \) vs \( 16 \) (equal).</div>
      <div class="step"><strong>Read the crossing:</strong> they are equal at \( x=4 \), and the exponential is larger after that.</div>
      <em>Conclusion: the curves cross at \( x=4 \); \( 2^{x} \) overtakes the line beyond \( x=4 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Use \( y=2^{x} \) to solve \( 2^{x}=16 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Curve reaches \( 16 \) at \( x=4 \). <em>Answer: \( x=4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Between which two integers does the solution of \( 2^{x}=10 \) lie?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2^3=8 \), \( 2^4=16 \), so \( 3<x<4 \). <em>Answer: between \( 3 \) and \( 4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Estimate the solution of \( 3^{x}=20 \) to one decimal place.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3^{2.7}\approx19.4 \), \( 3^{2.73}\approx20.0 \). <em>Answer: \( x\approx2.7 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( 1.08^{x}=2 \) models doubling at \( 8\%/\)yr. Estimate \( x \) to the nearest year.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1.08^{9}\approx2.0 \). <em>Answer: about \( 9 \) years.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Estimate when \( 0.9^{t}=0.5 \) (a \( 10\% \)/step decay reaching half).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 0.9^{6}\approx0.531 \), \( 0.9^{7}\approx0.478 \); \( 0.9^{6.6}\approx0.50 \). <em>Answer: about \( 6.6 \) steps.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Reading the \( y \)-coordinate of the intersection instead of the \( x \)-coordinate — the solution is \( x \).</li>
    <li>Stopping at a bracket like \( 1<x<2 \) when the question wants a decimal estimate — zoom in.</li>
    <li>Assuming a graphical solution is exact; it is an estimate, so state the accuracy.</li>
    <li>Trying common bases on an equation like \( 1.05^x=1.276 \) — no clean base exists, so graph or tabulate.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When do I graph instead of using common bases?</h3><p><em>When the numbers are not clean powers of one base — most real interest and decay problems.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I get more decimal places?</h3><p><em>Trap the solution between two \( x \)-values, then test values between them until the output is close enough.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What does the intersection represent?</h3><p><em>The input \( x \) at which the exponential expression equals the target value.</em></p></div>
</div>`)] },

  // ── 1.4 Exponential Growth & Decay Applications ─────────────
  "1.4": { code: "1.4", title: "Exponential Growth & Decay Applications", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🌱 Exponential Growth &amp; Decay Applications</h1>
  <p><strong>Overview.</strong> Exponential relations model anything that changes by a constant <strong>percentage</strong> each period: populations, radioactive material, cooling coffee, and money. This lesson builds the model \( A=A_0\,b^{t} \), interprets the base as a growth or decay factor, and answers real questions with a graph or table.</p>

  <h2>📌 Building the Model</h2>
  <p>Start with the initial amount \( A_0 \). Each period multiplies by the <strong>base</strong> \( b \): for growth of \( r \) per period, \( b=1+r \); for decay, \( b=1-r \). After \( t \) periods, \( A=A_0\,b^{t} \).</p>

  <h2>📌 Doubling &amp; Half-Life</h2>
  <p>A quantity that <strong>doubles</strong> every \( d \) units is \( A=A_0\,2^{t/d} \); one that <strong>halves</strong> every \( h \) units (its <em>half-life</em>) is \( A=A_0\left(\tfrac12\right)^{t/h} \). The exponent counts how many doubling or halving periods have passed.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Population growth</h3>
    <p>A town of \( 5000 \) grows \( 3\% \) per year. Write the model and find the population after \( 10 \) years.</p>
    <div class="solution">
      <div class="step"><strong>Model:</strong> \( P=5000(1.03)^{t} \).</div>
      <div class="step"><strong>Evaluate:</strong> \( P=5000(1.03)^{10}\approx5000(1.344)\approx6720 \).</div>
      <em>Conclusion: about \( 6720 \) people. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Half-life</h3>
    <p>A \( 80\text{ mg} \) sample has a half-life of \( 6 \) hours. How much remains after \( 18 \) hours?</p>
    <div class="solution">
      <div class="step"><strong>Model:</strong> \( A=80\left(\tfrac12\right)^{t/6} \).</div>
      <div class="step"><strong>Evaluate at \( t=18 \):</strong> exponent \( \tfrac{18}{6}=3 \), so \( A=80\left(\tfrac12\right)^{3}=80\cdot\tfrac18=10 \).</div>
      <em>Conclusion: \( 10\text{ mg} \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Depreciation</h3>
    <p>A \( \$30\,000 \) car loses \( 12\% \) of its value each year. What is it worth after \( 4 \) years?</p>
    <div class="solution">
      <div class="step"><strong>Decay factor:</strong> \( b=1-0.12=0.88 \), so \( V=30000(0.88)^{t} \).</div>
      <div class="step"><strong>Evaluate at \( t=4 \):</strong> \( 0.88^{4}\approx0.5997 \), so \( V\approx30000(0.5997)\approx17\,992 \).</div>
      <em>Conclusion: about \( \$17\,990 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Compound interest</h3>
    <p>\( \$2000 \) is invested at \( 4\% \) per year, compounded annually. Find its value after \( 5 \) years.</p>
    <div class="solution">
      <div class="step"><strong>Model:</strong> \( A=2000(1.04)^{n} \).</div>
      <div class="step"><strong>Evaluate at \( n=5 \):</strong> \( 1.04^{5}\approx1.2167 \), so \( A\approx2000(1.2167)\approx2433 \).</div>
      <em>Conclusion: about \( \$2433 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Solving for time with a table</h3>
    <p>At \( 6\%/\)yr, when does an investment double? Solve \( 1.06^{t}=2 \).</p>
    <div class="solution">
      <div class="step"><strong>Bracket:</strong> \( 1.06^{11}\approx1.898 \), \( 1.06^{12}\approx2.012 \), so \( 11<t<12 \).</div>
      <div class="step"><strong>Zoom:</strong> \( 1.06^{11.9}\approx2.00 \).</div>
      <em>Conclusion: about \( 11.9 \) years to double. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Write a model for a \( 40\text{ mg} \) sample with a \( 5 \)-hour half-life, and find the amount after \( 15 \) hours.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( A=40\left(\tfrac12\right)^{t/5} \); at \( 15 \): \( 40\left(\tfrac12\right)^{3}=5 \). <em>Answer: \( 5\text{ mg} \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A bacteria count of \( 200 \) doubles every \( 3 \) hours. Find the count after \( 9 \) hours.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 200\cdot2^{9/3}=200\cdot2^{3}=1600 \). <em>Answer: \( 1600 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( \$1500 \) at \( 5\% \)/yr compounded annually — value after \( 4 \) years?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1500(1.05)^{4}\approx1500(1.2155)\approx1823 \). <em>Answer: about \( \$1823 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>A \( \$20\,000 \) machine depreciates \( 10\% \)/yr. Value after \( 3 \) years?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 20000(0.9)^{3}=20000(0.729)=14\,580 \). <em>Answer: \( \$14\,580 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A substance decays \( 15\% \)/yr. Use a table to estimate when \( 25\% \) remains, \( 0.85^{t}=0.25 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 0.85^{8}\approx0.272 \), \( 0.85^{9}\approx0.232 \); \( 0.85^{8.5}\approx0.25 \). <em>Answer: about \( 8.5 \) years.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using \( b=r \) instead of \( b=1+r \) (growth) or \( b=1-r \) (decay).</li>
    <li>Putting the time straight into the exponent for half-life — divide by the half-life first: \( t/h \).</li>
    <li>Adding the percentage each year instead of multiplying (that would be linear, not exponential).</li>
    <li>Rounding the base too early; keep several digits until the final step.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I find the base from a percentage?</h3><p><em>Growth: \( b=1+r \); decay: \( b=1-r \), where \( r \) is the rate as a decimal.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why is the half-life exponent \( t/h \)?</h3><p><em>It counts halving periods: after \( t \) time with half-life \( h \), the number of halvings is \( t/h \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I find the time without logarithms?</h3><p><em>Use a table or graph to trap and zoom in on the value, as in Example 5.</em></p></div>
</div>`)] },

  // ── 1.5 Interpreting Graphs & Describing Trends ─────────────
  "1.5": { code: "1.5", title: "Interpreting Graphs & Describing Trends", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔎 Interpreting Graphs &amp; Describing Trends</h1>
  <p><strong>Overview.</strong> A graph communicates a relationship at a glance. This lesson builds the skill of <strong>reading</strong> a graph to describe how two quantities are related, <strong>identifying the trend</strong>, and using it to make predictions or justify a decision — always with language and units suited to the context, and with stated assumptions.</p>

  <h2>📌 Describing a Relationship</h2>
  <p>Say what happens to the output as the input increases: does it rise, fall, level off, or reverse? Name the quantities and their units (e.g. "distance in km rises steadily as time in hours increases"). Note any special points: a maximum, a minimum, or where the graph crosses an axis.</p>

  <h2>📌 Trends &amp; Predictions</h2>
  <p>A <strong>trend</strong> is the overall direction ignoring small bumps. Extending a trend beyond the data (<em>extrapolating</em>) makes a prediction — but it relies on the trend continuing, so state that <strong>assumption</strong>. Predictions far outside the data are less reliable.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Describing a distance–time graph</h3>
    <p>A graph of distance (km) versus time (h) rises as a straight line from \( (0,0) \) to \( (2,120) \). Describe the relationship.</p>
    <div class="solution">
      <div class="step"><strong>Shape:</strong> a straight line through the origin means constant speed.</div>
      <div class="step"><strong>Rate:</strong> \( \tfrac{120\text{ km}}{2\text{ h}}=60\text{ km/h} \).</div>
      <em>Conclusion: distance increases steadily at \( 60 \) km/h. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: A levelling-off trend</h3>
    <p>A cooling-coffee graph starts high and falls quickly, then flattens toward room temperature. Describe the trend.</p>
    <div class="solution">
      <div class="step"><strong>Early:</strong> temperature drops rapidly (large negative rate of change).</div>
      <div class="step"><strong>Later:</strong> the drop slows and the curve levels off toward a horizontal asymptote (room temperature).</div>
      <em>Conclusion: a decreasing trend that flattens — typical exponential decay toward a limit. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Making a prediction</h3>
    <p>A company's yearly sales (in \( \$1000 \)) are \( 20, 24, 28, 32 \) for years \( 1\text{–}4 \). Predict year \( 6 \) and state your assumption.</p>
    <div class="solution">
      <div class="step"><strong>Trend:</strong> sales rise by \( \$4000 \) each year — a linear trend.</div>
      <div class="step"><strong>Extrapolate:</strong> year \( 5\to36 \), year \( 6\to40 \).</div>
      <em>Conclusion: about \( \$40\,000 \) in year \( 6 \), assuming the steady \( \$4000 \)/yr increase continues. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Reading a maximum</h3>
    <p>A profit graph rises, peaks at \( (50, 900) \), then falls. What does the peak mean?</p>
    <div class="solution">
      <div class="step"><strong>Peak:</strong> the highest point is the maximum profit.</div>
      <div class="step"><strong>Interpret:</strong> selling \( 50 \) units gives the greatest profit, \( \$900 \); beyond that, profit declines.</div>
      <em>Conclusion: maximum profit of \( \$900 \) at \( 50 \) units. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Cautious extrapolation</h3>
    <p>A graph of a runner's world-record time trends downward over \( 100 \) years. Why is predicting the record in \( 2100 \) risky?</p>
    <div class="solution">
      <div class="step"><strong>Trend:</strong> times fall, but the improvements get smaller — the curve is flattening.</div>
      <div class="step"><strong>Caution:</strong> extending a flattening trend far ahead may predict impossible times; physical limits apply.</div>
      <em>Conclusion: far extrapolation is unreliable because the trend need not continue unchanged. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A graph rises then stays flat. Describe the trend in words.</p><details><summary>View answer</summary><div class="solution"><div class="step">The quantity increases, then levels off to a constant value. <em>Answer: increasing, then constant.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Distance–time graph goes from \( (0,0) \) to \( (4,200) \) as a straight line. Find the speed.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 200/4=50 \). <em>Answer: \( 50 \) km/h.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Sales are \( 10, 20, 40, 80 \) over four years. Predict year \( 5 \) and name the pattern.</p><details><summary>View answer</summary><div class="solution"><div class="step">Doubling each year (exponential): year \( 5\to160 \). <em>Answer: \( 160 \), exponential.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>A temperature graph falls and flattens. Is the rate of change increasing or decreasing in size?</p><details><summary>View answer</summary><div class="solution"><div class="step">The drop slows, so the size of the rate of change decreases. <em>Answer: decreasing.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A graph of app users climbs steeply then bends toward a ceiling of \( 1\,000\,000 \). What does the ceiling suggest, and why predict cautiously beyond the data?</p><details><summary>View answer</summary><div class="solution"><div class="step">The ceiling suggests a maximum market size; growth slows as it nears the limit, so linear extrapolation of the early steep part would overpredict. <em>Answer: a saturation limit; extrapolate cautiously.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Describing values without describing the <strong>trend</strong> (the overall direction).</li>
    <li>Omitting units, so "increases by 60" is ambiguous — 60 what, per what?</li>
    <li>Extrapolating a curved trend as if it were a straight line.</li>
    <li>Stating a prediction without the assumption that the trend continues.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What should a good description include?</h3><p><em>The direction (rise/fall/level), the quantities with units, and any special points like a maximum.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is extrapolation?</h3><p><em>Extending a trend beyond the data to predict; it assumes the trend keeps going.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Why can predictions be wrong?</h3><p><em>Because the underlying trend can change — limits, new factors, or a bending curve.</em></p></div>
</div>`)] },

  // ── 1.6 Rate of Change from Graphs & Tables ─────────────────
  "1.6": { code: "1.6", title: "Rate of Change from Graphs & Tables", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📊 Rate of Change from Graphs &amp; Tables</h1>
  <p><strong>Overview.</strong> The <strong>rate of change</strong> measures how fast one quantity changes with another — kilometres per hour, dollars per year, litres per minute. This lesson reads rate of change from graphs and tables, attaches the right units, and classifies a relation by whether its rate is <strong>zero, constant, or changing</strong>.</p>

  <h2>📌 Computing a Rate of Change</h2>
  <p>Between two points, the rate of change is \( \dfrac{\text{change in output}}{\text{change in input}} \) — the same as slope. Its units are the output's unit "per" the input's unit (e.g. \( \tfrac{\text{km}}{\text{h}} \)).</p>

  <h2>📌 Zero, Constant, or Changing</h2>
  <p>A <strong>constant</strong> rate gives a straight line (equal first differences in a table) — a linear relation. A <strong>zero</strong> rate is a flat, horizontal graph. A <strong>changing</strong> rate curves the graph (unequal first differences) — quadratic or exponential relations.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Rate from two points</h3>
    <p>A car travels \( 90 \) km in \( 1.5 \) h at steady speed. Find the rate of change of distance with time.</p>
    <div class="solution">
      <div class="step"><strong>Compute:</strong> \( \dfrac{90\text{ km}}{1.5\text{ h}}=60\text{ km/h} \).</div>
      <em>Conclusion: \( 60 \) km/h — a constant rate. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Units of rate</h3>
    <p>A part-time job pays such that earnings go from \( \$0 \) to \( \$180 \) over \( 12 \) hours. State the rate and its units.</p>
    <div class="solution">
      <div class="step"><strong>Compute:</strong> \( \dfrac{\$180}{12\text{ h}}=\$15/\text{h} \).</div>
      <em>Conclusion: \( \$15 \) per hour. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Constant vs changing (a table)</h3>
    <p>For \( x=0,1,2,3 \), outputs are \( 2,5,8,11 \). Is the rate constant?</p>
    <div class="solution">
      <div class="step"><strong>First differences:</strong> \( 5-2=3,\ 8-5=3,\ 11-8=3 \) — all equal.</div>
      <em>Conclusion: constant rate of \( 3 \) per step — a linear relation. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: A changing rate</h3>
    <p>For \( x=0,1,2,3 \), outputs are \( 3,6,12,24 \). Describe the rate of change.</p>
    <div class="solution">
      <div class="step"><strong>First differences:</strong> \( 3,6,12 \) — not equal, so the rate is changing.</div>
      <div class="step"><strong>Look closer:</strong> each output is \( 2\times \) the last (a constant ratio), so it is exponential, not linear.</div>
      <em>Conclusion: an increasing, changing rate — exponential growth. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Comparing two graphs</h3>
    <p>Car A's distance–time graph is a straight line; car B's curves upward. Compare their rates of change.</p>
    <div class="solution">
      <div class="step"><strong>Car A:</strong> straight line \(\Rightarrow\) constant speed.</div>
      <div class="step"><strong>Car B:</strong> curve steepening \(\Rightarrow\) increasing speed (accelerating).</div>
      <em>Conclusion: A moves at a constant rate; B's rate increases over time. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A tank fills \( 40 \) L in \( 8 \) min. Find the rate with units.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 40/8=5 \). <em>Answer: \( 5 \) L/min.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Outputs \( 4,7,10,13 \) at \( x=0,1,2,3 \). Constant or changing?</p><details><summary>View answer</summary><div class="solution"><div class="step">Differences all \( 3 \). <em>Answer: constant (linear).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Outputs \( 1,4,9,16 \). Constant or changing rate?</p><details><summary>View answer</summary><div class="solution"><div class="step">Differences \( 3,5,7 \) — changing (quadratic). <em>Answer: changing.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>A horizontal graph at \( y=25 \). What is the rate of change?</p><details><summary>View answer</summary><div class="solution"><div class="step">No change in output. <em>Answer: zero.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A phone plan charges a \( \$20 \) base plus \( \$0.10 \)/min. What is the rate of change of cost with minutes, and what does the \( \$20 \) represent?</p><details><summary>View answer</summary><div class="solution"><div class="step">Rate \( =\$0.10 \)/min (the slope); \( \$20 \) is the fixed starting cost (the intercept). <em>Answer: \( \$0.10 \)/min; \( \$20 \) is the base fee.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Dropping the units — a rate is meaningless without "output per input".</li>
    <li>Confusing a constant <em>value</em> (flat graph, zero rate) with a constant <em>rate</em> (straight sloped line).</li>
    <li>Calling a changing relation linear because it increases — check that first differences are equal.</li>
    <li>Mixing up which quantity is the input (denominator) and which is the output.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I compute rate of change?</h3><p><em>Change in output divided by change in input, between two points.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What does a constant rate look like?</h3><p><em>A straight line, with equal first differences in a table.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What does a changing rate mean?</h3><p><em>The graph curves; the relation is quadratic or exponential, not linear.</em></p></div>
</div>`)] },

  // ── 1.7 Choosing a Model: Linear, Quadratic, or Exponential ─
  "1.7": { code: "1.7", title: "Choosing a Model: Linear, Quadratic, or Exponential", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧩 Choosing a Model: Linear, Quadratic, or Exponential</h1>
  <p><strong>Overview.</strong> Given data, which relation fits — a line, a parabola, or an exponential curve? Each has a fingerprint. This lesson uses <strong>first and second differences</strong> and <strong>ratios</strong> to recognize the pattern, then selects a model to represent the data graphically and algebraically.</p>

  <h2>📌 The Fingerprints</h2>
  <ul>
    <li><strong>Linear:</strong> constant <em>first differences</em> (adds the same amount each step). Model \( y=mx+b \).</li>
    <li><strong>Quadratic:</strong> constant <em>second differences</em> (the differences of the differences). Model \( y=ax^2+bx+c \).</li>
    <li><strong>Exponential:</strong> constant <em>ratio</em> between successive outputs (multiplies by the same factor). Model \( y=a\,b^{x} \).</li>
  </ul>

  <h2>📌 Linear vs Exponential in Words</h2>
  <p>A linear model means a constant <strong>amount</strong> of change per step; an exponential model means a constant <strong>percentage</strong> of change per step. "Adds \( \$50 \) a month" is linear; "grows \( 5\% \) a month" is exponential.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Spotting linear</h3>
    <p>For \( x=0,1,2,3 \), \( y=7,10,13,16 \). Which model fits?</p>
    <div class="solution">
      <div class="step"><strong>First differences:</strong> \( 3,3,3 \) — constant.</div>
      <div class="step"><strong>Model:</strong> starts at \( 7 \), adds \( 3 \): \( y=3x+7 \).</div>
      <em>Conclusion: linear, \( y=3x+7 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Spotting exponential</h3>
    <p>For \( x=0,1,2,3 \), \( y=5,10,20,40 \). Which model fits?</p>
    <div class="solution">
      <div class="step"><strong>Ratios:</strong> \( \tfrac{10}{5}=\tfrac{20}{10}=\tfrac{40}{20}=2 \) — constant.</div>
      <div class="step"><strong>Model:</strong> starts at \( 5 \), multiplies by \( 2 \): \( y=5\cdot2^{x} \).</div>
      <em>Conclusion: exponential, \( y=5\cdot2^{x} \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Spotting quadratic</h3>
    <p>For \( x=0,1,2,3 \), \( y=1,4,9,16 \). Which model fits?</p>
    <div class="solution">
      <div class="step"><strong>First differences:</strong> \( 3,5,7 \) — not constant.</div>
      <div class="step"><strong>Second differences:</strong> \( 5-3=2,\ 7-5=2 \) — constant.</div>
      <em>Conclusion: quadratic; in fact \( y=x^{2} \) (the perfect squares). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Choosing from a description</h3>
    <p>Account A adds \( \$100 \)/month; account B grows \( 4\% \)/month. Which is linear and which is exponential?</p>
    <div class="solution">
      <div class="step"><strong>A:</strong> constant dollar amount added \(\Rightarrow\) linear.</div>
      <div class="step"><strong>B:</strong> constant percentage \(\Rightarrow\) exponential.</div>
      <em>Conclusion: A is linear, B is exponential. ✓ (Over time, B eventually outgrows A.)</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Building the model</h3>
    <p>A colony is \( 3 \) at \( x=0 \) and triples each step. Write the model and predict \( x=4 \).</p>
    <div class="solution">
      <div class="step"><strong>Constant ratio \( 3 \):</strong> \( y=3\cdot3^{x} \).</div>
      <div class="step"><strong>Predict:</strong> \( y=3\cdot3^{4}=3\cdot81=243 \).</div>
      <em>Conclusion: \( y=3\cdot3^{x} \); \( 243 \) at \( x=4 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( y=2,6,10,14 \) at \( x=0,1,2,3 \). Model?</p><details><summary>View answer</summary><div class="solution"><div class="step">First differences \( 4 \) — linear \( y=4x+2 \). <em>Answer: linear.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\( y=2,6,18,54 \). Model?</p><details><summary>View answer</summary><div class="solution"><div class="step">Ratio \( 3 \) — exponential \( y=2\cdot3^{x} \). <em>Answer: exponential.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( y=0,3,8,15 \) at \( x=0,1,2,3 \). Linear, quadratic, or exponential?</p><details><summary>View answer</summary><div class="solution"><div class="step">First differences \( 3,5,7 \); second differences \( 2 \) — quadratic. <em>Answer: quadratic.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Write the model for data starting at \( 100 \) and dropping \( 20\% \) each step.</p><details><summary>View answer</summary><div class="solution"><div class="step">Constant ratio \( 0.8 \) — \( y=100(0.8)^{x} \). <em>Answer: exponential decay.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>\( y=5,8,13,20,29 \). Identify the model and give its equation.</p><details><summary>View answer</summary><div class="solution"><div class="step">First differences \( 3,5,7,9 \); second differences \( 2 \) — quadratic. Fits \( y=x^2+2x+5 \) (check \( x=2:\ 4+4+5=13 \)). <em>Answer: quadratic, \( y=x^2+2x+5 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Checking only first differences and missing a quadratic (check second differences too).</li>
    <li>Confusing a constant difference (linear) with a constant ratio (exponential).</li>
    <li>Assuming any increasing data is exponential — many rising patterns are linear or quadratic.</li>
    <li>Forgetting the starting value \( a \) when writing \( y=a\,b^x \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I tell linear from exponential?</h3><p><em>Linear has a constant difference; exponential has a constant ratio between outputs.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: When is it quadratic?</h3><p><em>When the second differences are constant while the first differences are not.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Constant amount or constant percent?</h3><p><em>Constant amount per step is linear; constant percent per step is exponential.</em></p></div>
</div>`)] },

  // ── 1.8 Powers, Roots & Working with Formulas ───────────────
  "1.8": { code: "1.8", title: "Powers, Roots & Working with Formulas", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧮 Powers, Roots &amp; Working with Formulas</h1>
  <p><strong>Overview.</strong> Real formulas mix powers and roots — the volume of a sphere, the interest formula, the side of a square. This lesson solves equations of the form \( x^{n}=a \), finds a variable raised to a power, and rearranges and evaluates formulas that arise in applications.</p>

  <h2>📌 Solving \( x^{n}=a \)</h2>
  <p>To undo a power, take the matching root: \( x^{n}=a\Rightarrow x=\sqrt[n]{a}=a^{1/n} \). For an <strong>even</strong> \( n \) with \( a>0 \) there are two real answers, \( \pm\sqrt[n]{a} \); for an <strong>odd</strong> \( n \) there is one. In measurement problems, keep only the positive root.</p>

  <h2>📌 Rearranging Formulas</h2>
  <p>To isolate a variable, undo the operations around it in reverse order, treating the other letters as constants. A power is undone with a root; a root is undone with a power.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: A cube root</h3>
    <p>Solve \( x^{3}=64 \).</p>
    <div class="solution">
      <div class="step"><strong>Cube root:</strong> \( x=\sqrt[3]{64}=4 \).</div>
      <em>Conclusion: \( x=4 \) (odd power, one real root). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: An even power</h3>
    <p>Solve \( x^{2}=49 \).</p>
    <div class="solution">
      <div class="step"><strong>Square root:</strong> \( x=\pm\sqrt{49}=\pm7 \).</div>
      <em>Conclusion: \( x=7 \) or \( x=-7 \) (even power, two roots). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: The radius of a sphere</h3>
    <p>A sphere has volume \( V=\tfrac43\pi r^{3}=1000\text{ cm}^3 \). Find the radius.</p>
    <div class="solution">
      <div class="step"><strong>Isolate \( r^3 \):</strong> \( r^{3}=\dfrac{3V}{4\pi}=\dfrac{3(1000)}{4\pi}\approx238.7 \).</div>
      <div class="step"><strong>Cube root:</strong> \( r=\sqrt[3]{238.7}\approx6.2\text{ cm} \).</div>
      <em>Conclusion: about \( 6.2 \) cm (positive root only). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Rearranging a formula</h3>
    <p>Solve \( A=\pi r^{2} \) for \( r \).</p>
    <div class="solution">
      <div class="step"><strong>Isolate \( r^2 \):</strong> \( r^{2}=\dfrac{A}{\pi} \).</div>
      <div class="step"><strong>Square root:</strong> \( r=\sqrt{\dfrac{A}{\pi}} \) (positive, since \( r \) is a length).</div>
      <em>Conclusion: \( r=\sqrt{A/\pi} \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Connecting a formula to a relation</h3>
    <p>The compound-interest formula is \( A=P(1+i)^{n} \). If \( P \) and \( i \) are fixed, what kind of relation is \( A \) as a function of \( n \)? If \( i \) and \( n \) are fixed, what kind is \( A \) as a function of \( P \)?</p>
    <div class="solution">
      <div class="step"><strong>Vary \( n \):</strong> \( A=P(1+i)^{n} \) has \( n \) in the exponent \(\Rightarrow\) <strong>exponential</strong> in \( n \).</div>
      <div class="step"><strong>Vary \( P \):</strong> \( A=(1+i)^{n}\cdot P \) is a constant times \( P \) \(\Rightarrow\) <strong>linear</strong> in \( P \).</div>
      <em>Conclusion: exponential in \( n \), linear in \( P \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Solve \( x^{3}=125 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x=\sqrt[3]{125}=5 \). <em>Answer: \( x=5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \( x^{2}=81 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x=\pm9 \). <em>Answer: \( x=\pm9 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>A cube has volume \( V=s^{3}=216\text{ cm}^3 \). Find the side length.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( s=\sqrt[3]{216}=6 \). <em>Answer: \( 6 \) cm.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( V=lwh \) for \( h \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( h=\dfrac{V}{lw} \). <em>Answer: \( h=V/(lw) \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A square has area \( 200\text{ cm}^2 \). Find its side to one decimal place, and explain why only the positive root is used.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( s^2=200\Rightarrow s=\sqrt{200}\approx14.1\text{ cm} \); a length cannot be negative, so reject \( -\sqrt{200} \). <em>Answer: \( \approx14.1 \) cm.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Giving only one answer to \( x^2=a \) — an even power has \( \pm \) roots (unless a length forces the positive one).</li>
    <li>Taking the root before isolating the power (isolate \( r^3 \) first, then cube-root).</li>
    <li>Undoing operations in the wrong order when rearranging a formula.</li>
    <li>Keeping a negative root for a physical measurement.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I solve \( x^n=a \)?</h3><p><em>Take the \( n \)th root: \( x=\sqrt[n]{a} \). Even \( n \) gives \( \pm \); odd \( n \) gives one root.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I isolate a variable inside a power?</h3><p><em>Undo everything around it, then take the matching root of both sides.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: When do I keep only the positive root?</h3><p><em>Whenever the variable is a physical measurement like a length or radius.</em></p></div>
</div>`)] },
  // ── 2.1 Simple & Compound Interest ─────────────────────────
  "2.1": { code: "2.1", title: "Simple & Compound Interest", blocks: [html(String.raw`<div class="lecture-box">
  <h1>💰 Simple &amp; Compound Interest</h1>
  <p><strong>Overview.</strong> Interest is the price of money — what you pay to borrow or earn to save. This lesson computes <strong>simple interest</strong> (charged only on the original amount) and <strong>compound interest</strong> (charged on the growing balance), and shows why compounding pulls ahead over time.</p>

  <h2>📌 Simple Interest</h2>
  <p>Simple interest is \( I=Prt \): principal \( P \), annual rate \( r \) (a decimal), time \( t \) in years. The total amount is \( A=P+I=P(1+rt) \) — a <strong>linear</strong> growth.</p>

  <h2>📌 Compound Interest</h2>
  <p>Compound interest adds each period's interest to the balance, so future interest is earned on interest: \( A=P(1+i)^{n} \), where \( i \) is the rate <em>per compounding period</em> and \( n \) is the number of periods. If a rate is compounded \( k \) times a year for \( t \) years, then \( i=\dfrac{r}{k} \) and \( n=kt \).</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Simple interest</h3>
    <p>Find the interest and amount on \( \$2000 \) at \( 5\% \)/yr simple interest for \( 3 \) years.</p>
    <div class="solution">
      <div class="step"><strong>Interest:</strong> \( I=2000(0.05)(3)=\$300 \).</div>
      <div class="step"><strong>Amount:</strong> \( A=2000+300=\$2300 \).</div>
      <em>Conclusion: \( \$300 \) interest; \( \$2300 \) total. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Compound interest</h3>
    <p>Find the amount on \( \$2000 \) at \( 5\% \)/yr compounded annually for \( 3 \) years.</p>
    <div class="solution">
      <div class="step"><strong>Model:</strong> \( A=2000(1.05)^{3} \).</div>
      <div class="step"><strong>Evaluate:</strong> \( 1.05^{3}\approx1.157625 \), so \( A\approx\$2315.25 \).</div>
      <em>Conclusion: \( \$2315.25 \) — \( \$15.25 \) more than simple interest. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Simple vs compound over time</h3>
    <p>Compare \( \$1000 \) at \( 6\% \)/yr for \( 10 \) years, simple vs compounded annually.</p>
    <div class="solution">
      <div class="step"><strong>Simple:</strong> \( A=1000(1+0.06\cdot10)=\$1600 \).</div>
      <div class="step"><strong>Compound:</strong> \( A=1000(1.06)^{10}\approx\$1790.85 \).</div>
      <em>Conclusion: compounding earns about \( \$190.85 \) more over \( 10 \) years. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Compounding more often</h3>
    <p>Find the amount on \( \$5000 \) at \( 8\% \)/yr compounded quarterly for \( 2 \) years.</p>
    <div class="solution">
      <div class="step"><strong>Rate and periods:</strong> \( i=\tfrac{0.08}{4}=0.02 \), \( n=4\cdot2=8 \).</div>
      <div class="step"><strong>Evaluate:</strong> \( A=5000(1.02)^{8}\approx\$5858.30 \).</div>
      <em>Conclusion: \( \$5858.30 \). ✓ (More frequent compounding earns slightly more.)</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Working backwards for the principal</h3>
    <p>How much must be invested now at \( 5\% \)/yr compounded annually to have \( \$3000 \) in \( 4 \) years?</p>
    <div class="solution">
      <div class="step"><strong>Rearrange:</strong> \( P=\dfrac{A}{(1+i)^n}=\dfrac{3000}{1.05^{4}} \).</div>
      <div class="step"><strong>Evaluate:</strong> \( 1.05^{4}\approx1.21551 \), so \( P\approx\$2468.11 \).</div>
      <em>Conclusion: about \( \$2468.11 \) today. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Simple interest on \( \$1500 \) at \( 4\% \)/yr for \( 5 \) years.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( I=1500(0.04)(5)=\$300 \). <em>Answer: \( \$300 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Amount on \( \$1000 \) at \( 5\% \)/yr compounded annually for \( 3 \) years.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1000(1.05)^3\approx\$1157.63 \). <em>Answer: \( \$1157.63 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( \$4000 \) at \( 6\% \)/yr compounded semi-annually for \( 3 \) years — find the amount.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( i=0.03,\ n=6 \): \( 4000(1.03)^6\approx\$4776.21 \). <em>Answer: \( \$4776.21 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>How much invested now at \( 4\% \)/yr compounded annually gives \( \$5000 \) in \( 6 \) years?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( P=5000/1.04^6\approx\$3951.57 \). <em>Answer: \( \$3951.57 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>\( \$2000 \) at \( 6\% \)/yr for \( 5 \) years: how much MORE does monthly compounding earn than simple interest?</p><details><summary>View answer</summary><div class="solution"><div class="step">Simple: \( 2000(1+0.06\cdot5)=\$2600 \). Monthly: \( 2000(1.005)^{60}\approx\$2697.70 \). Difference \( \approx\$97.70 \). <em>Answer: about \( \$97.70 \) more.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using the annual rate as \( i \) when compounding more often — divide by the number of periods: \( i=r/k \).</li>
    <li>Forgetting to match \( n \) to the compounding: \( n=kt \), not just \( t \).</li>
    <li>Writing the rate as a percent instead of a decimal (\( 5\%=0.05 \)).</li>
    <li>Treating compound interest as linear — it multiplies, not adds.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is the difference between simple and compound interest?</h3><p><em>Simple interest is on the principal only; compound interest is on the growing balance.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I handle quarterly or monthly compounding?</h3><p><em>Use \( i=r/k \) and \( n=kt \), where \( k \) is the number of periods per year.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I find the principal from a future amount?</h3><p><em>Divide by the growth factor: \( P=A/(1+i)^n \).</em></p></div>
</div>`)] },

  // ── 2.2 Annuities: Future Value ─────────────────────────────
  "2.2": { code: "2.2", title: "Annuities: Future Value", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🏦 Annuities: Future Value</h1>
  <p><strong>Overview.</strong> An <strong>annuity</strong> is a series of equal, regular payments — RRSP deposits, a savings plan, loan instalments. This lesson finds the <strong>future value</strong>: what a stream of deposits grows to by the end, once each deposit has earned compound interest.</p>

  <h2>📌 The Future-Value Formula</h2>
  <p>For an <em>ordinary simple annuity</em> (payments at the end of each period, compounding period equal to the payment period), the future value is
  \[ FV=R\cdot\dfrac{(1+i)^{n}-1}{i}, \]
  where \( R \) is the regular payment, \( i \) the interest rate per period, and \( n \) the number of payments.</p>

  <h2>📌 Reading the Conditions</h2>
  <p>Match \( i \) and \( n \) to the payment schedule: monthly payments at an annual rate \( r \) use \( i=\tfrac{r}{12} \) and \( n=12\times(\text{years}) \). Larger payments, higher rates, or more frequent deposits all raise the future value.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Yearly deposits</h3>
    <p>You deposit \( \$500 \) at the end of each year into an account earning \( 6\% \)/yr. Find the value after \( 10 \) years.</p>
    <div class="solution">
      <div class="step"><strong>Values:</strong> \( R=500,\ i=0.06,\ n=10 \).</div>
      <div class="step"><strong>Factor:</strong> \( \dfrac{(1.06)^{10}-1}{0.06}\approx13.1808 \).</div>
      <div class="step"><strong>Future value:</strong> \( 500(13.1808)\approx\$6590.40 \).</div>
      <em>Conclusion: about \( \$6590.40 \) (you deposited \( \$5000 \); interest added \( \approx\$1590 \)). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Monthly deposits</h3>
    <p>You save \( \$200 \) at the end of each month at \( 6\% \)/yr compounded monthly for \( 5 \) years.</p>
    <div class="solution">
      <div class="step"><strong>Values:</strong> \( R=200,\ i=\tfrac{0.06}{12}=0.005,\ n=60 \).</div>
      <div class="step"><strong>Evaluate:</strong> \( FV=200\cdot\dfrac{(1.005)^{60}-1}{0.005}\approx\$13\,954.01 \).</div>
      <em>Conclusion: about \( \$13\,954 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Doubling the payment</h3>
    <p>In Example 1, what happens to the future value if you deposit \( \$1000 \)/year instead of \( \$500 \)?</p>
    <div class="solution">
      <div class="step"><strong>The factor is unchanged;</strong> only \( R \) doubles.</div>
      <div class="step"><strong>New future value:</strong> \( 1000(13.1808)\approx\$13\,180.80 \) — exactly double.</div>
      <em>Conclusion: doubling the payment doubles the future value. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: The power of starting early</h3>
    <p>Compare depositing \( \$100 \)/month at \( 6\% \)/yr compounded monthly for \( 40 \) years vs \( 30 \) years.</p>
    <div class="solution">
      <div class="step"><strong>40 years (\( n=480 \)):</strong> \( FV\approx\$199\,149 \).</div>
      <div class="step"><strong>30 years (\( n=360 \)):</strong> \( FV\approx\$100\,452 \).</div>
      <em>Conclusion: ten extra years nearly <strong>doubles</strong> the result — starting early matters enormously. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: A short plan</h3>
    <p>Deposit \( \$1000 \) at the end of each year at \( 5\% \)/yr for \( 3 \) years.</p>
    <div class="solution">
      <div class="step"><strong>Evaluate:</strong> \( FV=1000\cdot\dfrac{(1.05)^{3}-1}{0.05}=1000(3.1525)=\$3152.50 \).</div>
      <em>Conclusion: \( \$3152.50 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( \$300 \)/year at \( 5\% \)/yr for \( 4 \) years — find the future value.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 300\cdot\dfrac{1.05^4-1}{0.05}\approx300(4.3101)\approx\$1293.04 \). <em>Answer: \( \$1293.04 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\( \$150 \)/month at \( 6\% \)/yr compounded monthly for \( 2 \) years.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( i=0.005,\ n=24 \): \( 150\cdot\dfrac{1.005^{24}-1}{0.005}\approx\$3814.79 \). <em>Answer: \( \$3814.79 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>What total did you deposit in Question 2, and how much is interest?</p><details><summary>View answer</summary><div class="solution"><div class="step">Deposits \( =150\cdot24=\$3600 \); interest \( \approx3814.79-3600=\$214.79 \). <em>Answer: \( \$214.79 \) interest.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( \$1000 \)/year at \( 6\% \)/yr for \( 10 \) years — future value?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1000(13.1808)\approx\$13\,180.79 \). <em>Answer: \( \$13\,180.79 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Explain, using the formula, why a \( \$50 \) monthly deposit at \( 6\% \)/yr for \( 40 \) years grows to far more than \( \$50\times12\times40=\$24\,000 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 50\cdot\dfrac{1.005^{480}-1}{0.005}\approx\$99\,575 \). The factor \( \dfrac{(1+i)^n-1}{i} \) is huge because early deposits compound for decades. <em>Answer: about \( \$99\,575 \) — compounding on early deposits.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using the annual rate for \( i \) with monthly payments — use \( i=r/12 \) and \( n=12t \).</li>
    <li>Confusing future value (what deposits grow to) with present value (a single equivalent amount today).</li>
    <li>Multiplying the payment by \( n \) — that ignores the interest earned.</li>
    <li>Rounding \( (1+i)^n \) too early, which throws off the large factor.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does future value mean?</h3><p><em>The total an annuity is worth at the end, after every deposit has earned compound interest.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is an ordinary simple annuity?</h3><p><em>Payments at the end of each period, with the compounding period equal to the payment period.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Why start early?</h3><p><em>Early deposits compound for longer, so the earliest dollars contribute the most.</em></p></div>
</div>`)] },

  // ── 2.3 Annuities: Present Value ────────────────────────────
  "2.3": { code: "2.3", title: "Annuities: Present Value", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎯 Annuities: Present Value</h1>
  <p><strong>Overview.</strong> The <strong>present value</strong> of an annuity is the single amount today that is equivalent to a whole stream of future payments. It answers "how big a loan can these payments repay?" and "what is a series of payments worth now?"</p>

  <h2>📌 The Present-Value Formula</h2>
  <p>For an ordinary simple annuity,
  \[ PV=R\cdot\dfrac{1-(1+i)^{-n}}{i}, \]
  with regular payment \( R \), rate per period \( i \), and \( n \) payments. For a loan, \( PV \) is the amount borrowed and \( R \) is the regular repayment.</p>

  <h2>📌 Finding the Payment</h2>
  <p>Rearranging gives the payment on a loan of \( PV \): \( R=\dfrac{PV\cdot i}{1-(1+i)^{-n}} \). Multiplying \( R \) by \( n \) gives the total repaid; subtracting \( PV \) gives the total interest.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Value of a payment stream</h3>
    <p>What is the present value of \( \$500 \)/year for \( 10 \) years at \( 6\% \)/yr?</p>
    <div class="solution">
      <div class="step"><strong>Factor:</strong> \( \dfrac{1-(1.06)^{-10}}{0.06}\approx7.3601 \).</div>
      <div class="step"><strong>Present value:</strong> \( 500(7.3601)\approx\$3680.04 \).</div>
      <em>Conclusion: \( \$3680.04 \) today is equivalent to that stream. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: How big a loan?</h3>
    <p>You can repay \( \$300 \)/month for \( 4 \) years at \( 9\% \)/yr compounded monthly. What loan does that repay?</p>
    <div class="solution">
      <div class="step"><strong>Values:</strong> \( R=300,\ i=\tfrac{0.09}{12}=0.0075,\ n=48 \).</div>
      <div class="step"><strong>Evaluate:</strong> \( PV=300\cdot\dfrac{1-(1.0075)^{-48}}{0.0075}\approx\$12\,055.43 \).</div>
      <em>Conclusion: about \( \$12\,055 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Payment on a loan</h3>
    <p>Find the monthly payment on a \( \$10\,000 \) loan at \( 8\% \)/yr compounded monthly over \( 2 \) years, and the total interest.</p>
    <div class="solution">
      <div class="step"><strong>Values:</strong> \( PV=10\,000,\ i=\tfrac{0.08}{12}\approx0.006667,\ n=24 \).</div>
      <div class="step"><strong>Payment:</strong> \( R=\dfrac{10\,000(0.006667)}{1-(1.006667)^{-24}}\approx\$452.27 \).</div>
      <div class="step"><strong>Total interest:</strong> \( 452.27(24)-10\,000\approx10\,854.55-10\,000=\$854.55 \).</div>
      <em>Conclusion: \( \$452.27 \)/month; about \( \$854.55 \) interest. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Present vs future value</h3>
    <p>For the same annuity, why is the present value smaller than the future value?</p>
    <div class="solution">
      <div class="step"><strong>Present value</strong> discounts every payment back to today, shrinking it.</div>
      <div class="step"><strong>Future value</strong> grows every payment forward to the end, enlarging it.</div>
      <em>Conclusion: PV < deposits < FV — time moves value in opposite directions. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: A short present value</h3>
    <p>Present value of \( \$1000 \)/year for \( 3 \) years at \( 5\% \)/yr.</p>
    <div class="solution">
      <div class="step"><strong>Evaluate:</strong> \( 1000\cdot\dfrac{1-(1.05)^{-3}}{0.05}=1000(2.72325)\approx\$2723.25 \).</div>
      <em>Conclusion: \( \$2723.25 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Present value of \( \$400 \)/year for \( 5 \) years at \( 6\% \)/yr.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 400\cdot\dfrac{1-1.06^{-5}}{0.06}\approx400(4.2124)\approx\$1684.95 \). <em>Answer: \( \$1684.95 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>What loan can \( \$200 \)/month repay over \( 3 \) years at \( 6\% \)/yr compounded monthly?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( i=0.005,\ n=36 \): \( 200\cdot\dfrac{1-1.005^{-36}}{0.005}\approx\$6574.20 \). <em>Answer: \( \$6574.20 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Monthly payment on a \( \$5000 \) loan at \( 12\% \)/yr compounded monthly over \( 1 \) year.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( i=0.01,\ n=12 \): \( R=\dfrac{5000(0.01)}{1-1.01^{-12}}\approx\$444.24 \). <em>Answer: \( \$444.24 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Total interest paid in Question 3.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 444.24(12)-5000\approx5330.88-5000=\$330.88 \). <em>Answer: about \( \$330.88 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A prize pays \( \$1000 \)/year for \( 20 \) years at \( 5\% \)/yr. Would you rather take \( \$13\,000 \) now? Justify with present value.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( PV=1000\cdot\dfrac{1-1.05^{-20}}{0.05}\approx\$12\,462 \). Since \( \$13\,000>\$12\,462 \), take the lump sum. <em>Answer: take \( \$13\,000 \) now.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using the future-value formula for a loan — a loan is a <strong>present-value</strong> problem.</li>
    <li>Forgetting the negative exponent \( -n \) in \( (1+i)^{-n} \).</li>
    <li>Mismatching \( i \) and \( n \) with the payment frequency.</li>
    <li>Reporting the payment as the loan's total cost — multiply by \( n \) for the total repaid.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is present value?</h3><p><em>The single amount today equivalent to a stream of future payments.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I get the loan payment?</h3><p><em>Rearrange: \( R=\dfrac{PV\cdot i}{1-(1+i)^{-n}} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I find total interest?</h3><p><em>Total repaid minus the loan: \( R\cdot n-PV \).</em></p></div>
</div>`)] },

  // ── 2.4 Mortgages & Amortization ────────────────────────────
  "2.4": { code: "2.4", title: "Mortgages & Amortization", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🏠 Mortgages &amp; Amortization</h1>
  <p><strong>Overview.</strong> A <strong>mortgage</strong> is a loan to buy a home — an annuity whose <em>present value</em> is the amount borrowed. This lesson finds the mortgage payment, reads and builds an <strong>amortization table</strong>, and shows how the term and rate change the total interest. (Note: in Canada mortgage interest is compounded semi-annually; we use a per-payment rate here to keep the arithmetic clear.)</p>

  <h2>📌 The Mortgage Payment</h2>
  <p>Borrowing \( PV \) at rate \( i \) per payment for \( n \) payments, the regular payment is
  \[ R=\dfrac{PV\cdot i}{1-(1+i)^{-n}}. \]
  The <strong>down payment</strong> is paid up front, so the mortgage is (price − down payment).</p>

  <h2>📌 The Amortization Table</h2>
  <p>Each payment splits into <strong>interest</strong> (= current balance \( \times i \)) and <strong>principal</strong> (the rest, which reduces the balance). Early on, most of the payment is interest; as the balance shrinks, more goes to principal.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: The monthly payment</h3>
    <p>A \( \$200\,000 \) mortgage at \( 6\% \)/yr (\( i=0.005 \)/month) over \( 25 \) years (\( n=300 \)). Find the payment.</p>
    <div class="solution">
      <div class="step"><strong>Evaluate:</strong> \( R=\dfrac{200\,000(0.005)}{1-(1.005)^{-300}}\approx\$1288.60 \).</div>
      <em>Conclusion: about \( \$1288.60 \)/month. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: The first row of the table</h3>
    <p>For that mortgage, split the first payment into interest and principal, and find the new balance.</p>
    <div class="solution">
      <div class="step"><strong>Interest:</strong> \( 200\,000(0.005)=\$1000 \).</div>
      <div class="step"><strong>Principal:</strong> \( 1288.60-1000=\$288.60 \).</div>
      <div class="step"><strong>New balance:</strong> \( 200\,000-288.60=\$199\,711.40 \).</div>
      <em>Conclusion: of the first payment, \( \$1000 \) is interest and only \( \$288.60 \) reduces the debt. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Total interest over the mortgage</h3>
    <p>Find the total paid and total interest for the \( 25 \)-year mortgage in Example 1.</p>
    <div class="solution">
      <div class="step"><strong>Total paid:</strong> \( 1288.60\times300\approx\$386\,580 \).</div>
      <div class="step"><strong>Total interest:</strong> \( 386\,580-200\,000\approx\$186\,580 \).</div>
      <em>Conclusion: interest nearly equals the amount borrowed. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: A shorter term</h3>
    <p>Compare with a \( 20 \)-year term (\( n=240 \)) at the same rate.</p>
    <div class="solution">
      <div class="step"><strong>Payment:</strong> \( R=\dfrac{200\,000(0.005)}{1-(1.005)^{-240}}\approx\$1432.86 \).</div>
      <div class="step"><strong>Total interest:</strong> \( 1432.86(240)-200\,000\approx\$143\,887 \).</div>
      <em>Conclusion: a higher payment but about \( \$42\,700 \) less interest than \( 25 \) years. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Down payment</h3>
    <p>A \( \$250\,000 \) home with a \( \$25\,000 \) down payment. What is the mortgage amount?</p>
    <div class="solution">
      <div class="step"><strong>Subtract the down payment:</strong> \( 250\,000-25\,000=\$225\,000 \).</div>
      <em>Conclusion: the mortgage (present value) is \( \$225\,000 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Mortgage amount for a \( \$300\,000 \) home with a \( \$45\,000 \) down payment.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 300\,000-45\,000=\$255\,000 \). <em>Answer: \( \$255\,000 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>First-payment interest on a \( \$150\,000 \) balance at \( i=0.004 \)/month.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 150\,000(0.004)=\$600 \). <em>Answer: \( \$600 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Payment on a \( \$100\,000 \) mortgage at \( 6\% \)/yr (\( i=0.005 \)) over \( 20 \) years.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( R=\dfrac{100\,000(0.005)}{1-1.005^{-240}}\approx\$716.43 \). <em>Answer: \( \$716.43 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Total interest on the \( \$100\,000 \), \( 20 \)-year mortgage in Question 3.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 716.43(240)-100\,000\approx171\,943-100\,000=\$71\,943 \). <em>Answer: about \( \$71\,943 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>For the mortgage in Example 1, after the first payment the balance is \( \$199\,711.40 \). Find the interest and principal in the SECOND payment.</p><details><summary>View answer</summary><div class="solution"><div class="step">Interest \( =199\,711.40(0.005)\approx\$998.56 \); principal \( =1288.60-998.56=\$290.04 \). <em>Answer: \( \$998.56 \) interest, \( \$290.04 \) principal.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Forgetting to subtract the down payment before computing the payment.</li>
    <li>Computing interest on the original principal every month — use the <strong>current</strong> balance.</li>
    <li>Thinking the payment is all principal — early payments are mostly interest.</li>
    <li>Comparing terms by payment alone; a lower payment (longer term) usually costs far more interest.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Why is a mortgage a present-value annuity?</h3><p><em>The amount borrowed today is the present value of all the future payments.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I split a payment?</h3><p><em>Interest = balance \( \times i \); principal = payment − interest; subtract principal from the balance.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Does a shorter term save money?</h3><p><em>Yes — a higher payment but much less total interest.</em></p></div>
</div>`)] },

  // ── 2.5 Renting vs Owning Accommodation ─────────────────────
  "2.5": { code: "2.5", title: "Renting vs Owning Accommodation", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔑 Renting vs Owning Accommodation</h1>
  <p><strong>Overview.</strong> Housing is most people's biggest expense. This lesson compares the <strong>fixed</strong> and <strong>variable</strong> costs of renting and owning, tests <strong>affordability</strong>, and weighs the financial and non-financial trade-offs of each choice.</p>

  <h2>📌 Fixed vs Variable Costs</h2>
  <p><strong>Fixed</strong> costs stay roughly constant each month (mortgage or rent, insurance, property tax); <strong>variable</strong> costs change with use (utilities, maintenance). Owning adds costs a renter avoids — property tax and repairs — but builds <em>equity</em>.</p>

  <h2>📌 Affordability</h2>
  <p>A common guideline: total housing cost should be at most about \( 30\% \) of gross (before-tax) income. Compare the full monthly cost of each option against this limit and your budget.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Monthly cost of owning</h3>
    <p>Mortgage \( \$1288.60 \), property tax \( \$250 \), home insurance \( \$100 \), maintenance \( \$150 \). Find the monthly cost.</p>
    <div class="solution">
      <div class="step"><strong>Add:</strong> \( 1288.60+250+100+150=\$1788.60 \).</div>
      <em>Conclusion: about \( \$1789 \)/month to own. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Monthly cost of renting</h3>
    <p>Rent \( \$1400 \) plus tenant insurance \( \$30 \). Find the monthly cost.</p>
    <div class="solution">
      <div class="step"><strong>Add:</strong> \( 1400+30=\$1430 \).</div>
      <em>Conclusion: \( \$1430 \)/month to rent — about \( \$359 \) less than owning here. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Affordability check</h3>
    <p>Gross income is \( \$60\,000 \)/year. Is the \( \$1789 \) owning cost within the \( 30\% \) guideline?</p>
    <div class="solution">
      <div class="step"><strong>Monthly income:</strong> \( 60\,000/12=\$5000 \).</div>
      <div class="step"><strong>Limit:</strong> \( 0.30(5000)=\$1500 \).</div>
      <em>Conclusion: \( \$1789>\$1500 \), so owning exceeds the guideline; renting at \( \$1430 \) is within it. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Cost over a year</h3>
    <p>How much more does owning cost than renting over one year here?</p>
    <div class="solution">
      <div class="step"><strong>Difference:</strong> \( 1788.60-1430=\$358.60 \)/month.</div>
      <div class="step"><strong>Yearly:</strong> \( 358.60\times12\approx\$4303 \).</div>
      <em>Conclusion: about \( \$4303 \) more per year to own — though part of the mortgage builds equity. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Weighing the trade-offs</h3>
    <p>List one financial and one non-financial reason for each choice.</p>
    <div class="solution">
      <div class="step"><strong>Owning:</strong> builds equity (financial); freedom to renovate (non-financial), but repairs are your responsibility.</div>
      <div class="step"><strong>Renting:</strong> lower up-front cost and no repair bills (financial); flexibility to move (non-financial), but no equity.</div>
      <em>Conclusion: the "better" choice depends on finances, stability, and goals. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Owning: mortgage \( \$1100 \), tax \( \$200 \), insurance \( \$90 \), maintenance \( \$120 \). Monthly cost?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1100+200+90+120=\$1510 \). <em>Answer: \( \$1510 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Which of these is a variable cost: property tax, rent, or utilities?</p><details><summary>View answer</summary><div class="solution"><div class="step">Utilities change with use. <em>Answer: utilities.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Gross income \( \$48\,000 \)/yr. What monthly housing cost is the \( 30\% \) limit?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 0.30(48\,000/12)=0.30(4000)=\$1200 \). <em>Answer: \( \$1200 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Rent \( \$1350 \) + insurance \( \$25 \). Is it within the \( \$1200 \) limit from Question 3?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1375>1200 \) — over the limit. <em>Answer: no, it exceeds \( \$1200 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Owning costs \( \$1789 \)/month, of which \( \$289 \) of the first payment reduces the mortgage (builds equity). Compared with renting at \( \$1430 \), what is the "true" extra cost after removing equity?</p><details><summary>View answer</summary><div class="solution"><div class="step">Non-equity owning cost \( \approx1789-289=\$1500 \); vs renting \( \$1430 \), extra \( \approx\$70 \)/month (the equity portion is savings, not spending). <em>Answer: about \( \$70 \)/month.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Comparing rent to the mortgage payment only — owning adds tax, insurance, and repairs.</li>
    <li>Ignoring that part of a mortgage payment builds equity (it is not all "spent").</li>
    <li>Using net (after-tax) income for the \( 30\% \) rule — it uses gross income.</li>
    <li>Forgetting one-time costs of owning (down payment, closing costs, moving).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is a fixed vs a variable cost?</h3><p><em>Fixed costs stay about the same each month; variable costs change with usage.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is the \( 30\% \) guideline?</h3><p><em>Keep total housing cost at or below about \( 30\% \) of gross monthly income.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Why can owning be "cheaper" than it looks?</h3><p><em>The principal portion of the payment builds equity — it is savings, not an expense.</em></p></div>
</div>`)] },

  // ── 2.6 Designing Budgets ───────────────────────────────────
  "2.6": { code: "2.6", title: "Designing Budgets", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📋 Designing Budgets</h1>
  <p><strong>Overview.</strong> A <strong>budget</strong> plans income against expenses so you can live within your means and reach goals. This lesson designs and justifies a monthly budget, builds a <strong>savings plan</strong> toward a target, and <strong>adjusts</strong> a budget when circumstances change.</p>

  <h2>📌 Income vs Expenses</h2>
  <p>List all <strong>income</strong>, then all <strong>expenses</strong>, split into <strong>fixed</strong> (rent, insurance, phone) and <strong>variable</strong> (food, transport, entertainment). A budget <em>balances</em> when expenses plus savings do not exceed income; the leftover is a <strong>surplus</strong>.</p>

  <h2>📌 Savings Plans &amp; Adjusting</h2>
  <p>To reach a goal, divide the target by the number of months: monthly saving \( =\dfrac{\text{goal}}{\text{months}} \). When income or costs change, cut discretionary (variable) spending first to keep the budget balanced.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: A balanced budget</h3>
    <p>Monthly income \( \$3200 \). Expenses: rent \( \$1100 \), food \( \$450 \), transport \( \$300 \), utilities \( \$160 \), phone \( \$60 \), insurance \( \$80 \), entertainment \( \$200 \), savings \( \$300 \). Is it balanced?</p>
    <div class="solution">
      <div class="step"><strong>Total out:</strong> \( 1100+450+300+160+60+80+200+300=\$2650 \).</div>
      <div class="step"><strong>Surplus:</strong> \( 3200-2650=\$550 \).</div>
      <em>Conclusion: balanced with a \( \$550 \) surplus. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Fixed vs variable</h3>
    <p>From Example 1, total the fixed and the variable expenses (excluding savings).</p>
    <div class="solution">
      <div class="step"><strong>Fixed:</strong> rent \( 1100 \) + phone \( 60 \) + insurance \( 80 =\$1240 \).</div>
      <div class="step"><strong>Variable:</strong> food \( 450 \) + transport \( 300 \) + utilities \( 160 \) + entertainment \( 200 =\$1110 \).</div>
      <em>Conclusion: \( \$1240 \) fixed, \( \$1110 \) variable. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: A savings plan</h3>
    <p>You want \( \$6000 \) for a car down payment in \( 2 \) years. How much per month?</p>
    <div class="solution">
      <div class="step"><strong>Months:</strong> \( 2\times12=24 \).</div>
      <div class="step"><strong>Monthly:</strong> \( 6000/24=\$250 \).</div>
      <em>Conclusion: save \( \$250 \)/month (well within the \( \$550 \) surplus). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Adjusting to a pay cut</h3>
    <p>Income drops by \( \$400 \) to \( \$2800 \). Rebalance the Example 1 budget.</p>
    <div class="solution">
      <div class="step"><strong>New surplus before cuts:</strong> \( 2800-2650=\$150 \) — still positive but tight.</div>
      <div class="step"><strong>Protect savings:</strong> trim variable spending, e.g. entertainment \( 200\to100 \) and food \( 450\to400 \), freeing \( \$150 \).</div>
      <em>Conclusion: cutting \( \$150 \) of variable costs restores a comfortable surplus. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: A percentage of income</h3>
    <p>What fraction of the \( \$3200 \) income goes to rent in Example 1?</p>
    <div class="solution">
      <div class="step"><strong>Divide:</strong> \( \dfrac{1100}{3200}\approx0.344=34.4\% \).</div>
      <em>Conclusion: rent is about \( 34\% \) of income — slightly above the \( 30\% \) housing guideline. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Income \( \$2500 \); expenses total \( \$2150 \). Find the surplus.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2500-2150=\$350 \). <em>Answer: \( \$350 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Classify as fixed or variable: groceries.</p><details><summary>View answer</summary><div class="solution"><div class="step">Changes with use. <em>Answer: variable.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Save \( \$4800 \) in \( 16 \) months — how much per month?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 4800/16=\$300 \). <em>Answer: \( \$300 \)/month.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Rent \( \$900 \) on income \( \$3000 \). What percent of income is rent?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 900/3000=0.30=30\% \). <em>Answer: \( 30\% \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A budget has income \( \$3000 \), fixed \( \$1500 \), variable \( \$1100 \), and a \( \$500 \) savings goal. Is it feasible, and if not, what is the smallest variable cut needed?</p><details><summary>View answer</summary><div class="solution"><div class="step">Out \( =1500+1100+500=\$3100>\$3000 \), short by \( \$100 \). Cut \( \$100 \) of variable spending. <em>Answer: not feasible; cut \( \$100 \) from variable costs.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Leaving savings out of the budget — treat it as a planned "expense".</li>
    <li>Underestimating variable costs (they add up), leaving no surplus.</li>
    <li>Cutting fixed costs first — variable costs are easier to adjust.</li>
    <li>Forgetting occasional expenses (gifts, car repairs) that break a tight budget.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What makes a budget balanced?</h3><p><em>Expenses plus planned savings do not exceed income.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I plan for a goal?</h3><p><em>Divide the target amount by the number of months available.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What do I cut when money is tight?</h3><p><em>Variable, discretionary spending first — it is the easiest to adjust.</em></p></div>
</div>`)] },
  // ── 3.1 Unit Conversion (Metric & Imperial) ────────────────
  "3.1": { code: "3.1", title: "Unit Conversion (Metric & Imperial)", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📏 Unit Conversion (Metric &amp; Imperial)</h1>
  <p><strong>Overview.</strong> Trades and daily life mix measurement systems — a recipe in millilitres, lumber in feet, a road sign in kilometres. This lesson converts <strong>within</strong> the metric system and <strong>between</strong> metric and imperial units using unit ratios.</p>

  <h2>📌 Metric Conversions</h2>
  <p>Metric units scale by powers of ten: \( 1\text{ m}=100\text{ cm} \), \( 1\text{ km}=1000\text{ m} \), \( 1\text{ L}=1000\text{ mL} \), \( 1\text{ kg}=1000\text{ g} \). Moving to a <em>bigger</em> unit divides; to a <em>smaller</em> unit multiplies.</p>

  <h2>📌 Metric ↔ Imperial</h2>
  <p>Useful bridges: \( 1\text{ in}=2.54\text{ cm} \), \( 1\text{ ft}\approx0.3048\text{ m} \), \( 1\text{ mile}\approx1.609\text{ km} \), \( 1\text{ kg}\approx2.205\text{ lb} \), \( 1\text{ gal}\approx3.785\text{ L} \). Multiply by a ratio equal to \( 1 \) so the old unit cancels.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Within metric</h3>
    <p>Convert \( 250\text{ cm} \) to metres.</p>
    <div class="solution">
      <div class="step"><strong>Ratio:</strong> \( 250\text{ cm}\times\dfrac{1\text{ m}}{100\text{ cm}}=2.5\text{ m} \).</div>
      <em>Conclusion: \( 2.5 \) m. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Kilometres to metres</h3>
    <p>Convert \( 5\text{ km} \) to metres.</p>
    <div class="solution">
      <div class="step"><strong>Multiply:</strong> \( 5\times1000=5000\text{ m} \).</div>
      <em>Conclusion: \( 5000 \) m. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Inches to centimetres</h3>
    <p>Convert \( 12\text{ in} \) to cm.</p>
    <div class="solution">
      <div class="step"><strong>Ratio:</strong> \( 12\times2.54=30.48\text{ cm} \).</div>
      <em>Conclusion: \( 30.48 \) cm (one foot). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Feet to metres</h3>
    <p>Convert \( 10\text{ ft} \) to metres.</p>
    <div class="solution">
      <div class="step"><strong>Ratio:</strong> \( 10\times0.3048=3.048\text{ m}\approx3.05\text{ m} \).</div>
      <em>Conclusion: about \( 3.05 \) m. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Kilometres to miles</h3>
    <p>A trip is \( 100\text{ km} \). How many miles?</p>
    <div class="solution">
      <div class="step"><strong>Divide by the bridge:</strong> \( \dfrac{100}{1.609}\approx62.15\text{ miles} \).</div>
      <em>Conclusion: about \( 62 \) miles. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Convert \( 3.5\text{ m} \) to cm.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3.5\times100=350 \). <em>Answer: \( 350 \) cm.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Convert \( 8\text{ ft} \) to inches.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 8\times12=96 \). <em>Answer: \( 96 \) in.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Convert \( 20\text{ in} \) to cm.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 20\times2.54=50.8 \). <em>Answer: \( 50.8 \) cm.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Convert \( 2 \) miles to km.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2\times1.609=3.218 \). <em>Answer: about \( 3.22 \) km.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A recipe needs \( 2 \) US gallons of stock. How many litres, to one decimal?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2\times3.785=7.57 \). <em>Answer: about \( 7.6 \) L.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Multiplying when you should divide (going to a bigger unit divides).</li>
    <li>Dropping the units, so you cannot check that the old unit cancels.</li>
    <li>Confusing US and imperial gallons — state which you use.</li>
    <li>Rounding a bridge like \( 1\text{ mi}=1.609\text{ km} \) too early.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I convert without memorizing "multiply or divide"?</h3><p><em>Multiply by a ratio equal to \( 1 \) arranged so the unwanted unit cancels.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is the inch–centimetre bridge?</h3><p><em>Exactly \( 1\text{ in}=2.54\text{ cm} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I go from km to miles?</h3><p><em>Divide by \( 1.609 \) (since \( 1\text{ mi}\approx1.609\text{ km} \)).</em></p></div>
</div>`)] },

  // ── 3.2 Areas of Composite Shapes ──────────────────────────
  "3.2": { code: "3.2", title: "Areas of Composite Shapes", blocks: [html(String.raw`<div class="lecture-box">
  <h1>▱ Areas of Composite Shapes</h1>
  <p><strong>Overview.</strong> Real regions — a room with an alcove, a window with a rounded top, a garden bed — are made of simpler shapes. This lesson finds total area by <strong>decomposing</strong> a region into rectangles, triangles, and circles, then adding the pieces or subtracting a cut-out.</p>

  <h2>📌 The Building-Block Formulas</h2>
  <p>Rectangle \( A=lw \); triangle \( A=\tfrac12bh \); circle \( A=\pi r^2 \); a semicircle is \( \tfrac12\pi r^2 \). Keep every length in the same unit and report area in square units.</p>

  <h2>📌 Add or Subtract</h2>
  <p>If a shape is attached (a semicircle on a rectangle), <strong>add</strong> its area. If a piece is removed (a circular hole in a plate), <strong>subtract</strong> it.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: A rectangle</h3>
    <p>Find the area of an \( 8\text{ m}\times5\text{ m} \) rectangle.</p>
    <div class="solution">
      <div class="step"><strong>Multiply:</strong> \( 8\times5=40\text{ m}^2 \).</div>
      <em>Conclusion: \( 40\text{ m}^2 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: A triangle</h3>
    <p>Find the area of a triangle with base \( 10 \) and height \( 6 \).</p>
    <div class="solution">
      <div class="step"><strong>Half base times height:</strong> \( \tfrac12(10)(6)=30 \).</div>
      <em>Conclusion: \( 30 \) square units. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: A circle</h3>
    <p>Find the area of a circle of radius \( 4 \).</p>
    <div class="solution">
      <div class="step"><strong>Formula:</strong> \( \pi(4)^2=16\pi\approx50.27 \).</div>
      <em>Conclusion: about \( 50.27 \) square units. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: An L-shape (subtract)</h3>
    <p>A \( 10\times8 \) rectangle has a \( 4\times3 \) corner removed. Find the area.</p>
    <div class="solution">
      <div class="step"><strong>Whole minus cut-out:</strong> \( 80-12=68 \).</div>
      <em>Conclusion: \( 68 \) square units. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: A rectangle capped by a semicircle (add)</h3>
    <p>A window is a \( 12\times6 \) rectangle with a semicircle of diameter \( 6 \) (radius \( 3 \)) on top. Find the area.</p>
    <div class="solution">
      <div class="step"><strong>Rectangle:</strong> \( 12\times6=72 \).</div>
      <div class="step"><strong>Semicircle:</strong> \( \tfrac12\pi(3)^2=\tfrac92\pi\approx14.14 \).</div>
      <div class="step"><strong>Total:</strong> \( 72+14.14=86.14 \).</div>
      <em>Conclusion: about \( 86.14 \) square units. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Area of a \( 15\times9 \) rectangle.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 135 \). <em>Answer: \( 135 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Area of a triangle, base \( 12 \), height \( 7 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac12(12)(7)=42 \). <em>Answer: \( 42 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Area of a circle of radius \( 5 \) (to 2 decimals).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 25\pi\approx78.54 \). <em>Answer: \( 78.54 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>The area between two circles of radius \( 6 \) and \( 4 \) (a ring).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \pi(36-16)=20\pi\approx62.83 \). <em>Answer: \( 62.83 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A \( 10\times6 \) rectangle has a semicircle of radius \( 3 \) added on one short end. Total area?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 60+\tfrac12\pi(3)^2=60+14.14=74.14 \). <em>Answer: about \( 74.14 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using the diameter as the radius in \( \pi r^2 \).</li>
    <li>Forgetting to halve a semicircle's area.</li>
    <li>Mixing units (cm with m) before computing.</li>
    <li>Adding a removed region instead of subtracting it.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I handle a complex region?</h3><p><em>Break it into rectangles, triangles, and circles, then add or subtract.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: When do I subtract?</h3><p><em>When a piece is cut out or hollow.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is a semicircle's area?</h3><p><em>Half a circle: \( \tfrac12\pi r^2 \).</em></p></div>
</div>`)] },

  // ── 3.3 Surface Area & Volume of Composite Figures ─────────
  "3.3": { code: "3.3", title: "Surface Area & Volume of Composite Figures", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📦 Surface Area &amp; Volume of Composite Figures</h1>
  <p><strong>Overview.</strong> Packaging, tanks, and machine parts are solids you can measure. This lesson computes the <strong>surface area</strong> and <strong>volume</strong> of prisms and cylinders, and of <strong>composite</strong> solids formed by joining them or drilling a hole.</p>

  <h2>📌 Key Formulas</h2>
  <p>Rectangular prism: \( V=lwh \), \( SA=2(lw+lh+wh) \). Cylinder: \( V=\pi r^2h \), \( SA=2\pi r^2+2\pi rh \). Any prism: \( V=(\text{base area})\times h \).</p>

  <h2>📌 Composite Solids</h2>
  <p>Add the volumes of joined pieces; <strong>subtract</strong> the volume of a hole. For surface area, ignore the internal faces hidden where solids meet.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: A box</h3>
    <p>Find the volume and surface area of a \( 4\times5\times6 \) box.</p>
    <div class="solution">
      <div class="step"><strong>Volume:</strong> \( 4\cdot5\cdot6=120 \).</div>
      <div class="step"><strong>Surface area:</strong> \( 2(20+24+30)=148 \).</div>
      <em>Conclusion: \( V=120 \), \( SA=148 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: A cylinder</h3>
    <p>Find the volume and surface area of a cylinder with radius \( 3 \), height \( 10 \).</p>
    <div class="solution">
      <div class="step"><strong>Volume:</strong> \( \pi(3)^2(10)=90\pi\approx282.74 \).</div>
      <div class="step"><strong>Surface area:</strong> \( 2\pi(9)+2\pi(3)(10)=18\pi+60\pi=78\pi\approx245.04 \).</div>
      <em>Conclusion: \( V\approx282.74 \), \( SA\approx245.04 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: A cylindrical tank</h3>
    <p>How much does a tank of radius \( 5 \) and height \( 8 \) hold?</p>
    <div class="solution">
      <div class="step"><strong>Volume:</strong> \( \pi(5)^2(8)=200\pi\approx628.32 \).</div>
      <em>Conclusion: about \( 628.3 \) cubic units. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: A drilled block (subtract)</h3>
    <p>A \( 10\times8\times6 \) block has a cylindrical hole of radius \( 2 \) drilled through its height \( 6 \). Find the remaining volume.</p>
    <div class="solution">
      <div class="step"><strong>Block:</strong> \( 10\cdot8\cdot6=480 \).</div>
      <div class="step"><strong>Hole:</strong> \( \pi(2)^2(6)=24\pi\approx75.40 \).</div>
      <div class="step"><strong>Remaining:</strong> \( 480-75.40=404.60 \).</div>
      <em>Conclusion: about \( 404.6 \) cubic units. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: A triangular prism</h3>
    <p>A prism has a triangular cross-section (base \( 6 \), height \( 4 \)) and length \( 10 \). Find its volume.</p>
    <div class="solution">
      <div class="step"><strong>Base area:</strong> \( \tfrac12(6)(4)=12 \).</div>
      <div class="step"><strong>Volume:</strong> \( 12\times10=120 \).</div>
      <em>Conclusion: \( 120 \) cubic units. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Surface area of a cube of side \( 5 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 6(5^2)=150 \). <em>Answer: \( 150 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Volume of a \( 3\times4\times10 \) prism.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 120 \). <em>Answer: \( 120 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Volume of a cylinder, radius \( 4 \), height \( 9 \) (2 decimals).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \pi(16)(9)=144\pi\approx452.39 \). <em>Answer: \( 452.39 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Surface area of a closed cylinder, radius \( 5 \), height \( 8 \) (2 decimals).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2\pi(25)+2\pi(5)(8)=50\pi+80\pi=130\pi\approx408.41 \). <em>Answer: \( 408.41 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A \( 12\times10\times8 \) box has a cylindrical hole of radius \( 3 \) through its height \( 8 \). Remaining volume (2 decimals)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 960-\pi(9)(8)=960-72\pi\approx960-226.19=733.81 \). <em>Answer: about \( 733.81 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using diameter for radius in \( \pi r^2h \).</li>
    <li>Adding a drilled hole's volume instead of subtracting it.</li>
    <li>Counting hidden internal faces in a composite surface area.</li>
    <li>Reporting volume in square units instead of cubic units.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is a prism's volume?</h3><p><em>Base area times height.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I handle a hole?</h3><p><em>Compute the solid, then subtract the hole's volume.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Which units?</h3><p><em>Volume in cubic units; surface area in square units.</em></p></div>
</div>`)] },

  // ── 3.4 Optimizing Perimeter & Area (2-D) ──────────────────
  "3.4": { code: "3.4", title: "Optimizing Perimeter & Area (2-D)", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎯 Optimizing Perimeter &amp; Area (2-D)</h1>
  <p><strong>Overview.</strong> For a fixed amount of fencing or a fixed area, one shape is best — the most enclosed space, or the least material. This lesson investigates <strong>optimal dimensions</strong> for rectangles using a table of values, and explains why the answer matters (least cost, most space).</p>

  <h2>📌 The Two Big Results</h2>
  <ul>
    <li>For a <strong>fixed perimeter</strong>, the rectangle with the <strong>maximum area</strong> is a <strong>square</strong>.</li>
    <li>For a <strong>fixed area</strong>, the rectangle with the <strong>minimum perimeter</strong> is a <strong>square</strong>.</li>
  </ul>

  <h2>📌 How to Find It</h2>
  <p>Write the quantity to optimize in terms of one variable (using the constraint), then make a table of values or graph it and read the maximum or minimum.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Max area for a fixed perimeter</h3>
    <p>A rectangle has perimeter \( 24 \) m (so \( l+w=12 \)). Which dimensions give the greatest area?</p>
    <div class="solution">
      <div class="step"><strong>Area in one variable:</strong> \( A=l(12-l) \).</div>
      <div class="step"><strong>Table:</strong> \( 4\times8=32,\ 5\times7=35,\ 6\times6=36,\ 7\times5=35 \).</div>
      <em>Conclusion: the \( 6\times6 \) square gives the maximum area, \( 36\text{ m}^2 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Min perimeter for a fixed area</h3>
    <p>A rectangle must have area \( 36\text{ m}^2 \). Which dimensions minimize the perimeter?</p>
    <div class="solution">
      <div class="step"><strong>Table of perimeters:</strong> \( 4\times9\Rightarrow26,\ 6\times6\Rightarrow24,\ 3\times12\Rightarrow30 \).</div>
      <em>Conclusion: the \( 6\times6 \) square has the least perimeter, \( 24\text{ m} \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: A garden with fixed fencing</h3>
    <p>You have \( 48 \) m of fence for a rectangular garden. What dimensions maximize the area?</p>
    <div class="solution">
      <div class="step"><strong>Constraint:</strong> \( l+w=24 \).</div>
      <div class="step"><strong>Square is best:</strong> \( 12\times12 \) gives \( 144\text{ m}^2 \).</div>
      <em>Conclusion: a \( 12\text{ m}\times12\text{ m} \) square, area \( 144\text{ m}^2 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: A pen against a wall</h3>
    <p>A rectangular pen uses a wall as one side and \( 30 \) m of fence for the other three sides. Maximize the area.</p>
    <div class="solution">
      <div class="step"><strong>Constraint:</strong> two widths and one length: \( 2x+y=30 \), so \( y=30-2x \).</div>
      <div class="step"><strong>Area:</strong> \( A=x(30-2x) \); table peaks at \( x=7.5,\ y=15 \).</div>
      <div class="step"><strong>Value:</strong> \( A=7.5(15)=112.5\text{ m}^2 \).</div>
      <em>Conclusion: \( 7.5\text{ m}\times15\text{ m} \), area \( 112.5\text{ m}^2 \). ✓ (With a free wall side, the best is not a square.)</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Why optimal dimensions matter</h3>
    <p>Two \( 36\text{ m}^2 \) gardens: a \( 6\times6 \) and a \( 3\times12 \). Which needs less fencing, and by how much?</p>
    <div class="solution">
      <div class="step"><strong>Perimeters:</strong> \( 6\times6\Rightarrow24 \); \( 3\times12\Rightarrow30 \).</div>
      <em>Conclusion: the square saves \( 6 \) m of fence for the same area. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Perimeter \( 40 \) m — which rectangle has the greatest area?</p><details><summary>View answer</summary><div class="solution"><div class="step">Square \( 10\times10 \), area \( 100 \). <em>Answer: \( 10\times10 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Area \( 64\text{ m}^2 \) — which rectangle has the least perimeter?</p><details><summary>View answer</summary><div class="solution"><div class="step">Square \( 8\times8 \), perimeter \( 32 \). <em>Answer: \( 8\times8 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>With \( 20 \) m of fence, greatest rectangular area?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( l+w=10 \), square \( 5\times5 \), area \( 25 \). <em>Answer: \( 25\text{ m}^2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>A pen against a wall uses \( 20 \) m for three sides. Best area?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2x+y=20 \), peak at \( x=5,\ y=10 \), area \( 50\text{ m}^2 \). <em>Answer: \( 5\times10 \), \( 50\text{ m}^2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Explain why a square is best for a full rectangle but a \( 1{:}2 \) rectangle is best against a wall.</p><details><summary>View answer</summary><div class="solution"><div class="step">A free wall replaces one fenced side, so the optimum shifts: the width uses two fence lengths and the length one, giving \( y=2x \) at the maximum. <em>Answer: the free side changes the constraint.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Assuming a square is always optimal — with a free wall side it is a \( 1{:}2 \) rectangle.</li>
    <li>Optimizing perimeter when the question asks for area (or vice versa).</li>
    <li>Forgetting to use the constraint to reduce to one variable.</li>
    <li>Reading the wrong end of the table (a maximum vs a minimum).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What shape maximizes area for a fixed perimeter?</h3><p><em>A square.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What about a pen against a wall?</h3><p><em>The best is a \( 1{:}2 \) rectangle (length twice each width).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I find the optimum?</h3><p><em>Reduce to one variable with the constraint, then use a table or graph.</em></p></div>
</div>`)] },

  // ── 3.5 Optimizing Surface Area & Volume (3-D) ─────────────
  "3.5": { code: "3.5", title: "Optimizing Surface Area & Volume (3-D)", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧊 Optimizing Surface Area &amp; Volume (3-D)</h1>
  <p><strong>Overview.</strong> A package should hold the most with the least material. This lesson finds the <strong>optimal dimensions</strong> of a rectangular prism (and, conceptually, a cylinder) for a given constraint — the shape that <strong>minimizes surface area</strong> for a fixed volume.</p>

  <h2>📌 The Big Result</h2>
  <p>For a fixed <strong>volume</strong>, the rectangular prism with the <strong>least surface area</strong> is a <strong>cube</strong>. (For a cylinder, the least surface area occurs when the height equals the diameter, \( h=2r \).)</p>

  <h2>📌 How to Find It</h2>
  <p>Use the volume constraint to write surface area in terms of the dimensions, then build a table of possible sizes and read the minimum surface area.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Least material for a fixed volume</h3>
    <p>A box must hold \( 64\text{ cm}^3 \). Among \( 2\times2\times16 \), \( 2\times4\times8 \), and \( 4\times4\times4 \), which uses the least material?</p>
    <div class="solution">
      <div class="step"><strong>Surface areas:</strong> \( 2\times2\times16\Rightarrow136 \); \( 2\times4\times8\Rightarrow112 \); \( 4\times4\times4\Rightarrow96 \).</div>
      <em>Conclusion: the cube \( 4\times4\times4 \) has the least surface area, \( 96\text{ cm}^2 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Confirming the cube</h3>
    <p>Verify the cube's surface area in Example 1.</p>
    <div class="solution">
      <div class="step"><strong>Six equal faces:</strong> \( 6\times(4\times4)=6\times16=96 \).</div>
      <em>Conclusion: \( 96\text{ cm}^2 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: A different volume</h3>
    <p>What are the dimensions of the least-material box holding \( 27\text{ cm}^3 \), and its surface area?</p>
    <div class="solution">
      <div class="step"><strong>Cube:</strong> \( \sqrt[3]{27}=3 \), so \( 3\times3\times3 \).</div>
      <div class="step"><strong>Surface area:</strong> \( 6(9)=54\text{ cm}^2 \).</div>
      <em>Conclusion: a \( 3\text{-cm} \) cube, \( SA=54\text{ cm}^2 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Why it matters</h3>
    <p>A \( 64\text{ cm}^3 \) product ships as a \( 2\times4\times8 \) box or a cube. How much cardboard does the cube save?</p>
    <div class="solution">
      <div class="step"><strong>Difference:</strong> \( 112-96=16\text{ cm}^2 \) per box.</div>
      <em>Conclusion: the cube saves \( 16\text{ cm}^2 \) of material each — real money over thousands of boxes. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: The cylinder rule</h3>
    <p>For a fixed volume, what shape of cylinder uses the least material?</p>
    <div class="solution">
      <div class="step"><strong>Rule:</strong> the surface area is least when the height equals the diameter, \( h=2r \).</div>
      <div class="step"><strong>Meaning:</strong> a "square" cylinder (as tall as it is wide) — like a well-designed soup can.</div>
      <em>Conclusion: minimize material with \( h=2r \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Least-material box for \( 8\text{ cm}^3 \) — dimensions and surface area?</p><details><summary>View answer</summary><div class="solution"><div class="step">Cube \( 2\times2\times2 \), \( SA=6(4)=24 \). <em>Answer: \( 2 \)-cm cube, \( 24\text{ cm}^2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Surface area of a \( 5\times5\times5 \) cube.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 6(25)=150 \). <em>Answer: \( 150 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Least-material box for \( 1000\text{ cm}^3 \) — dimensions?</p><details><summary>View answer</summary><div class="solution"><div class="step">Cube \( \sqrt[3]{1000}=10 \), so \( 10\times10\times10 \). <em>Answer: \( 10 \)-cm cube.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Surface area of that \( 10 \)-cm cube.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 6(100)=600 \). <em>Answer: \( 600\text{ cm}^2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Compare the surface area of a \( 1\times1\times64 \) box with the cube for the same \( 64\text{ cm}^3 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1\times1\times64\Rightarrow SA=2(1+64+64)=258 \); cube \( =96 \). The long box uses \( 162\text{ cm}^2 \) more. <em>Answer: cube \( 96 \) vs \( 258 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Assuming the tallest or flattest box is efficient — the cube is best.</li>
    <li>Confusing "maximize volume for fixed surface area" with "minimize surface area for fixed volume" (both give the cube).</li>
    <li>Reporting volume units for a surface area.</li>
    <li>Forgetting the cylinder rule \( h=2r \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What box uses the least material?</h3><p><em>A cube, for a fixed volume.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What about a cylinder?</h3><p><em>Least material when \( h=2r \) (height equals diameter).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I find it?</h3><p><em>Use the volume constraint and a table of surface areas.</em></p></div>
</div>`)] },

  // ── 3.6 Right-Triangle Trigonometry ────────────────────────
  "3.6": { code: "3.6", title: "Right-Triangle Trigonometry", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 Right-Triangle Trigonometry</h1>
  <p><strong>Overview.</strong> The primary trig ratios connect a right triangle's sides and angles, letting you find heights and distances you cannot measure directly. This lesson uses <strong>sine, cosine, and tangent</strong> (SOH-CAH-TOA) to find unknown sides and angles.</p>

  <h2>📌 The Three Ratios</h2>
  <p>Relative to an acute angle: \( \sin=\dfrac{\text{opp}}{\text{hyp}} \), \( \cos=\dfrac{\text{adj}}{\text{hyp}} \), \( \tan=\dfrac{\text{opp}}{\text{adj}} \). Label the sides first, then pick the ratio that uses what you know and what you want.</p>

  <h2>📌 Finding Sides vs Angles</h2>
  <p>To find a <strong>side</strong>, set up a ratio and solve. To find an <strong>angle</strong>, use the inverse ratio (\( \sin^{-1},\cos^{-1},\tan^{-1} \)). Angles of <strong>elevation</strong> (up) and <strong>depression</strong> (down) from the horizontal build these triangles.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Find the opposite side</h3>
    <p>A right triangle has hypotenuse \( 10 \) and an angle of \( 30^\circ \). Find the opposite side.</p>
    <div class="solution">
      <div class="step"><strong>Choose sine:</strong> \( \sin30^\circ=\dfrac{\text{opp}}{10} \).</div>
      <div class="step"><strong>Solve:</strong> \( \text{opp}=10\sin30^\circ=10(0.5)=5 \).</div>
      <em>Conclusion: \( 5 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Find the hypotenuse</h3>
    <p>The side opposite a \( 40^\circ \) angle is \( 8 \). Find the hypotenuse.</p>
    <div class="solution">
      <div class="step"><strong>Sine:</strong> \( \sin40^\circ=\dfrac{8}{\text{hyp}} \).</div>
      <div class="step"><strong>Solve:</strong> \( \text{hyp}=\dfrac{8}{\sin40^\circ}\approx12.45 \).</div>
      <em>Conclusion: about \( 12.45 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Find an angle</h3>
    <p>A right triangle has opposite \( 5 \) and adjacent \( 12 \). Find the angle.</p>
    <div class="solution">
      <div class="step"><strong>Tangent:</strong> \( \tan\theta=\dfrac{5}{12} \).</div>
      <div class="step"><strong>Inverse:</strong> \( \theta=\tan^{-1}\!\left(\tfrac{5}{12}\right)\approx22.6^\circ \).</div>
      <em>Conclusion: about \( 22.6^\circ \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Angle of elevation</h3>
    <p>From \( 20 \) m away, the angle of elevation to the top of a building is \( 55^\circ \). Find the building's height.</p>
    <div class="solution">
      <div class="step"><strong>Tangent:</strong> \( \tan55^\circ=\dfrac{h}{20} \).</div>
      <div class="step"><strong>Solve:</strong> \( h=20\tan55^\circ\approx28.56\text{ m} \).</div>
      <em>Conclusion: about \( 28.6 \) m tall. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Find the adjacent side</h3>
    <p>A \( 15 \)-m ramp makes a \( 25^\circ \) angle with the ground. How far does it reach horizontally?</p>
    <div class="solution">
      <div class="step"><strong>Cosine:</strong> \( \cos25^\circ=\dfrac{\text{adj}}{15} \).</div>
      <div class="step"><strong>Solve:</strong> \( \text{adj}=15\cos25^\circ\approx13.59\text{ m} \).</div>
      <em>Conclusion: about \( 13.6 \) m horizontally. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Hypotenuse \( 12 \), angle \( 35^\circ \) — find the opposite side.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 12\sin35^\circ\approx6.88 \). <em>Answer: about \( 6.88 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Hypotenuse \( 20 \), angle \( 40^\circ \) — find the adjacent side.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 20\cos40^\circ\approx15.32 \). <em>Answer: about \( 15.32 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Opposite \( 7 \), adjacent \( 24 \) — find the angle.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tan^{-1}(7/24)\approx16.26^\circ \). <em>Answer: about \( 16.3^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Opposite \( 10 \) to a \( 30^\circ \) angle — find the hypotenuse.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{10}{\sin30^\circ}=\dfrac{10}{0.5}=20 \). <em>Answer: \( 20 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>From the top of a \( 40 \)-m cliff, the angle of depression to a boat is \( 20^\circ \). How far is the boat from the base?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tan20^\circ=\dfrac{40}{d}\Rightarrow d=\dfrac{40}{\tan20^\circ}\approx109.9\text{ m} \). <em>Answer: about \( 109.9 \) m.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Mislabelling opposite and adjacent — they are relative to the angle you use.</li>
    <li>Forgetting to switch the calculator to degree mode.</li>
    <li>Using the inverse ratio to find a side, or a direct ratio to find an angle.</li>
    <li>Treating an angle of depression as measured from the vertical — it is from the horizontal.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I pick the ratio?</h3><p><em>Choose the one that uses the known side and the side you want, via SOH-CAH-TOA.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I find an angle?</h3><p><em>Form the ratio from two sides, then apply the inverse function.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is an angle of elevation?</h3><p><em>The angle up from the horizontal to a line of sight.</em></p></div>
</div>`)] },

  // ── 3.7 The Sine Law & the Cosine Law ──────────────────────
  "3.7": { code: "3.7", title: "The Sine Law & the Cosine Law", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔺 The Sine Law &amp; the Cosine Law</h1>
  <p><strong>Overview.</strong> Not every triangle has a right angle. The <strong>sine law</strong> and <strong>cosine law</strong> solve <em>oblique</em> triangles that arise in surveying and navigation, and they work with obtuse angles too.</p>

  <h2>📌 The Two Laws</h2>
  <p><strong>Sine law:</strong> \( \dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C} \) — use it with a matched side–angle pair. <strong>Cosine law:</strong> \( a^2=b^2+c^2-2bc\cos A \) — use it with two sides and the included angle (SAS) or all three sides (SSS).</p>

  <h2>📌 Obtuse Angles</h2>
  <p>For an obtuse angle, the cosine is <strong>negative</strong> (e.g. \( \cos120^\circ=-0.5 \)) while the sine stays positive (\( \sin120^\circ\approx0.866 \)). The cosine law handles obtuse triangles directly.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Sine law, find a side</h3>
    <p>In a triangle, \( A=40^\circ \), \( B=60^\circ \), and \( a=10 \). Find \( b \).</p>
    <div class="solution">
      <div class="step"><strong>Sine law:</strong> \( \dfrac{b}{\sin60^\circ}=\dfrac{10}{\sin40^\circ} \).</div>
      <div class="step"><strong>Solve:</strong> \( b=\dfrac{10\sin60^\circ}{\sin40^\circ}\approx13.47 \).</div>
      <em>Conclusion: about \( 13.47 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Sine law, find an angle</h3>
    <p>\( a=8 \), \( b=6 \), and \( A=50^\circ \). Find \( B \).</p>
    <div class="solution">
      <div class="step"><strong>Sine law:</strong> \( \dfrac{\sin B}{6}=\dfrac{\sin50^\circ}{8} \), so \( \sin B=\dfrac{6\sin50^\circ}{8}\approx0.5745 \).</div>
      <div class="step"><strong>Inverse:</strong> \( B=\sin^{-1}(0.5745)\approx35.1^\circ \).</div>
      <em>Conclusion: about \( 35.1^\circ \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Cosine law, find a side</h3>
    <p>\( b=7 \), \( c=9 \), and the included angle \( A=60^\circ \). Find \( a \).</p>
    <div class="solution">
      <div class="step"><strong>Cosine law:</strong> \( a^2=7^2+9^2-2(7)(9)\cos60^\circ=49+81-63=67 \).</div>
      <div class="step"><strong>Root:</strong> \( a=\sqrt{67}\approx8.19 \).</div>
      <em>Conclusion: about \( 8.19 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Cosine law, find an angle</h3>
    <p>A triangle has sides \( 6,8,10 \). Find the largest angle (opposite the side \( 10 \)).</p>
    <div class="solution">
      <div class="step"><strong>Cosine law:</strong> \( \cos C=\dfrac{6^2+8^2-10^2}{2(6)(8)}=\dfrac{0}{96}=0 \).</div>
      <div class="step"><strong>Inverse:</strong> \( C=\cos^{-1}(0)=90^\circ \).</div>
      <em>Conclusion: a right angle — the \( 6,8,10 \) triangle is right-angled. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: An obtuse triangle</h3>
    <p>\( b=5 \), \( c=8 \), and the included angle \( A=120^\circ \). Find \( a \).</p>
    <div class="solution">
      <div class="step"><strong>Cosine law:</strong> \( a^2=25+64-2(5)(8)\cos120^\circ=89-80(-0.5)=89+40=129 \).</div>
      <div class="step"><strong>Root:</strong> \( a=\sqrt{129}\approx11.36 \).</div>
      <em>Conclusion: about \( 11.36 \) (the negative cosine made the side longer). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( A=45^\circ \), \( a=14 \), \( B=60^\circ \) — find \( b \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( b=\dfrac{14\sin60^\circ}{\sin45^\circ}\approx17.15 \). <em>Answer: about \( 17.15 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\( b=12 \), \( c=15 \), included \( A=50^\circ \) — find \( a \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( a=\sqrt{144+225-2(12)(15)\cos50^\circ}\approx11.72 \). <em>Answer: about \( 11.72 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Sides \( 5,6,7 \) — find the largest angle (opposite \( 7 \)).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \cos C=\dfrac{25+36-49}{60}=0.2\Rightarrow C\approx78.46^\circ \). <em>Answer: about \( 78.5^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( a=9 \), \( A=40^\circ \), \( b=7 \) — find \( B \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sin B=\dfrac{7\sin40^\circ}{9}\approx0.500\Rightarrow B\approx30.0^\circ \). <em>Answer: about \( 30.0^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Two roads leave a town at a \( 70^\circ \) angle. After driving \( 8 \) km and \( 5 \) km, how far apart are the cars?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( d=\sqrt{8^2+5^2-2(8)(5)\cos70^\circ}\approx\sqrt{89-27.36}\approx\sqrt{61.64}\approx7.85\text{ km} \). <em>Answer: about \( 7.85 \) km.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using the sine law without a matched side–angle pair.</li>
    <li>Dropping the negative sign of an obtuse angle's cosine.</li>
    <li>Forgetting the \( -2bc\cos A \) term in the cosine law.</li>
    <li>Leaving the calculator in radian mode.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When do I use each law?</h3><p><em>Sine law for a matched side–angle pair; cosine law for SAS or SSS.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is special about an obtuse angle?</h3><p><em>Its cosine is negative, which lengthens the opposite side in the cosine law.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I find an angle from three sides?</h3><p><em>Rearrange the cosine law and take the inverse cosine.</em></p></div>
</div>`)] },
  // ── 4.1 One-Variable Statistics & Displaying Data ──────────
  "4.1": { code: "4.1", title: "One-Variable Statistics & Displaying Data", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📊 One-Variable Statistics &amp; Displaying Data</h1>
  <p><strong>Overview.</strong> A list of numbers becomes meaningful once you summarize its <strong>centre</strong> and <strong>spread</strong> and display it well. This lesson computes the mean, median, mode, and range, and chooses an appropriate graph for a data set.</p>

  <h2>📌 Measures of Centre</h2>
  <p>The <strong>mean</strong> is the average (sum ÷ count). The <strong>median</strong> is the middle value in order (average the two middle values if there is an even count). The <strong>mode</strong> is the most frequent value.</p>

  <h2>📌 Spread &amp; Choosing a Graph</h2>
  <p>The <strong>range</strong> (highest − lowest) shows how spread out the data is. <strong>Bar graphs</strong> and <strong>circle graphs</strong> suit categories; <strong>histograms</strong> suit numeric data grouped into intervals.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: The mean</h3>
    <p>Find the mean of \( 12, 15, 15, 18, 20 \).</p>
    <div class="solution">
      <div class="step"><strong>Sum ÷ count:</strong> \( \dfrac{12+15+15+18+20}{5}=\dfrac{80}{5}=16 \).</div>
      <em>Conclusion: mean \( =16 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: The median (odd count)</h3>
    <p>Find the median of \( 7, 3, 9, 5, 11 \).</p>
    <div class="solution">
      <div class="step"><strong>Order:</strong> \( 3, 5, 7, 9, 11 \).</div>
      <div class="step"><strong>Middle value:</strong> \( 7 \).</div>
      <em>Conclusion: median \( =7 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: The median (even count)</h3>
    <p>Find the median of \( 4, 8, 10, 14 \).</p>
    <div class="solution">
      <div class="step"><strong>Two middle values:</strong> \( 8 \) and \( 10 \).</div>
      <div class="step"><strong>Average them:</strong> \( \dfrac{8+10}{2}=9 \).</div>
      <em>Conclusion: median \( =9 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Mode and range</h3>
    <p>For \( 5, 8, 8, 8, 10, 12 \), find the mode and the range.</p>
    <div class="solution">
      <div class="step"><strong>Mode:</strong> \( 8 \) appears most often.</div>
      <div class="step"><strong>Range:</strong> \( 12-5=7 \).</div>
      <em>Conclusion: mode \( =8 \), range \( =7 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Choosing a graph</h3>
    <p>Which graph suits (a) favourite sport of a class, and (b) the distribution of test scores?</p>
    <div class="solution">
      <div class="step"><strong>(a) Categories:</strong> a bar graph or circle graph.</div>
      <div class="step"><strong>(b) Numeric ranges:</strong> a histogram (scores grouped into intervals).</div>
      <em>Conclusion: bar/circle for categories, histogram for numeric intervals. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Mean of \( 3, 6, 9, 12, 15 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 45/5=9 \). <em>Answer: \( 9 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Median of \( 2, 4, 6, 8, 10, 12 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (6+8)/2=7 \). <em>Answer: \( 7 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Mode of \( 4, 4, 7, 9, 9, 9 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 9 \) appears three times. <em>Answer: \( 9 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Range of \( 45, 12, 33, 28 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 45-12=33 \). <em>Answer: \( 33 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A data set is \( 4, 5, 6, 7, 100 \). Find the mean and median, and say which better represents a "typical" value.</p><details><summary>View answer</summary><div class="solution"><div class="step">Mean \( =122/5=24.4 \); median \( =6 \). The outlier \( 100 \) inflates the mean, so the median (\( 6 \)) is more typical. <em>Answer: median is better here.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Finding the median without ordering the data first.</li>
    <li>Forgetting to average the two middle values for an even count.</li>
    <li>Letting an outlier make the mean misrepresent a "typical" value.</li>
    <li>Using a histogram for categories or a bar graph for continuous intervals.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I find the median of an even list?</h3><p><em>Order it, then average the two middle values.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: When is the median better than the mean?</h3><p><em>When outliers would distort the mean.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Which graph for categories?</h3><p><em>A bar graph or circle graph; a histogram is for numeric intervals.</em></p></div>
</div>`)] },

  // ── 4.2 Sampling, Bias & the Misuse of Statistics ──────────
  "4.2": { code: "4.2", title: "Sampling, Bias & the Misuse of Statistics", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎯 Sampling, Bias &amp; the Misuse of Statistics</h1>
  <p><strong>Overview.</strong> A conclusion is only as trustworthy as the data behind it. This lesson distinguishes a <strong>population</strong> from a <strong>sample</strong>, describes what makes a sample good, identifies <strong>bias</strong>, and recognizes how statistics can be misused to mislead.</p>

  <h2>📌 Population vs Sample</h2>
  <p>The <strong>population</strong> is everyone of interest; a <strong>sample</strong> is the part you actually study. We sample because studying everyone is often too costly or slow. A <strong>good sample</strong> is <em>random</em>, <em>representative</em>, and large enough.</p>

  <h2>📌 Bias &amp; Misuse</h2>
  <p><strong>Bias</strong> makes a sample systematically misrepresent the population — from a poor sampling frame, leading questions, or non-response. Media can mislead with tiny samples, cherry-picked data, or misleading graph scales.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Population vs sample</h3>
    <p>A school has \( 1200 \) students. A survey asks \( 100 \) of them about lunch. Identify the population and the sample.</p>
    <div class="solution">
      <div class="step"><strong>Population:</strong> all \( 1200 \) students.</div>
      <div class="step"><strong>Sample:</strong> the \( 100 \) surveyed.</div>
      <em>Conclusion: population \( =1200 \), sample \( =100 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: A biased sample</h3>
    <p>To gauge the whole school's music taste, you survey only the band class. Is the sample good?</p>
    <div class="solution">
      <div class="step"><strong>Problem:</strong> band members are not representative of all students.</div>
      <em>Conclusion: biased — the sample favours a musical subgroup. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: A leading question</h3>
    <p>"Don't you agree our great cafeteria should stay open later?" Why is this biased?</p>
    <div class="solution">
      <div class="step"><strong>Wording:</strong> "great" and "Don't you agree" push respondents toward "yes".</div>
      <em>Conclusion: response bias from a leading question. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: A misleading percentage</h3>
    <p>An ad says "\( 80\% \) preferred Brand X" — from a survey of \( 5 \) people. What is the concern?</p>
    <div class="solution">
      <div class="step"><strong>Tiny sample:</strong> \( 80\% \) is just \( 4 \) of \( 5 \) — far too few to generalize.</div>
      <em>Conclusion: the sample is too small to be reliable. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: A better design</h3>
    <p>How would you fairly sample the whole school's lunch preference?</p>
    <div class="solution">
      <div class="step"><strong>Random &amp; representative:</strong> randomly select students across all grades (e.g. by student number).</div>
      <div class="step"><strong>Large enough:</strong> survey a sizeable, varied group and neutral questions.</div>
      <em>Conclusion: a random, representative, adequately sized sample. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A city has \( 50\,000 \) voters; a poll asks \( 800 \). Name the population and sample.</p><details><summary>View answer</summary><div class="solution"><div class="step">Population \( 50\,000 \); sample \( 800 \). <em>Answer: as stated.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Surveying shoppers only at a luxury store about spending — biased or not?</p><details><summary>View answer</summary><div class="solution"><div class="step">Not representative of all shoppers. <em>Answer: biased.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Name one feature of a good sample.</p><details><summary>View answer</summary><div class="solution"><div class="step">Random, representative, or large enough. <em>Answer: any one of these.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Why is "\( 9 \) out of \( 10 \) dentists" weak if only \( 10 \) were asked?</p><details><summary>View answer</summary><div class="solution"><div class="step">The sample is tiny, so the result may not hold for all dentists. <em>Answer: sample too small.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A graph's vertical axis starts at \( 90 \) (not \( 0 \)), making a rise from \( 92 \) to \( 96 \) look huge. What is this an example of?</p><details><summary>View answer</summary><div class="solution"><div class="step">A misleading scale that exaggerates a small change. <em>Answer: misuse of a graph scale.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Confusing the population (everyone) with the sample (the part studied).</li>
    <li>Trusting a percentage without checking the sample size.</li>
    <li>Ignoring how question wording steers answers.</li>
    <li>Overlooking a truncated axis that exaggerates differences.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Why sample instead of surveying everyone?</h3><p><em>Time, cost, or practicality — a good sample represents the whole.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What makes a sample biased?</h3><p><em>Anything that makes it systematically unrepresentative — a skewed frame, leading questions, non-response.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How can a graph mislead?</h3><p><em>A truncated or stretched axis can exaggerate or hide changes.</em></p></div>
</div>`)] },

  // ── 4.3 Two-Variable Data & Scatter Plots ──────────────────
  "4.3": { code: "4.3", title: "Two-Variable Data & Scatter Plots", blocks: [html(String.raw`<div class="lecture-box">
  <h1>✴️ Two-Variable Data &amp; Scatter Plots</h1>
  <p><strong>Overview.</strong> When each item has <em>two</em> measurements — height and shoe size, hours studied and test score — a <strong>scatter plot</strong> reveals whether the two are related. This lesson plots paired data, names the independent and dependent variables, and describes the pattern.</p>

  <h2>📌 Plotting Paired Data</h2>
  <p>Each data point is an ordered pair \( (x,y) \). The <strong>independent variable</strong> (the cause or input) goes on the horizontal axis; the <strong>dependent variable</strong> (the effect or output) goes on the vertical axis.</p>

  <h2>📌 Reading the Pattern</h2>
  <p>Look at the cloud of points: do they trend <strong>upward</strong> (as \( x \) rises, \( y \) rises), <strong>downward</strong>, or show <strong>no pattern</strong>? A tight, line-like cloud is a strong relationship; a scattered cloud is weak.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Choosing the axes</h3>
    <p>You study how <em>hours studied</em> affects a <em>test score</em>. Which is independent and which is dependent?</p>
    <div class="solution">
      <div class="step"><strong>Independent (horizontal):</strong> hours studied — the input.</div>
      <div class="step"><strong>Dependent (vertical):</strong> test score — the outcome.</div>
      <em>Conclusion: hours on the \( x \)-axis, score on the \( y \)-axis. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: An upward trend</h3>
    <p>Points \( (1,55),(2,60),(3,68),(4,75),(5,82) \) plot a study–score data set. Describe the pattern.</p>
    <div class="solution">
      <div class="step"><strong>Trend:</strong> as hours increase, score increases steadily.</div>
      <em>Conclusion: an upward (positive) pattern. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: A downward trend</h3>
    <p>Points \( (0,100),(2,80),(4,65),(6,45) \) show phone battery vs hours used. Describe the pattern.</p>
    <div class="solution">
      <div class="step"><strong>Trend:</strong> as hours of use increase, battery percentage decreases.</div>
      <em>Conclusion: a downward (negative) pattern. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: No pattern</h3>
    <p>Shoe size vs math mark gives a scattered cloud with no trend. What does this mean?</p>
    <div class="solution">
      <div class="step"><strong>No trend:</strong> the points do not rise or fall together.</div>
      <em>Conclusion: no relationship between shoe size and math mark. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Reading a point</h3>
    <p>On a height–weight scatter plot, a point sits at \( (170, 68) \). Interpret it.</p>
    <div class="solution">
      <div class="step"><strong>Read the pair:</strong> a person \( 170 \) cm tall weighs \( 68 \) kg.</div>
      <em>Conclusion: that data point represents one \( 170 \)-cm, \( 68 \)-kg person. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Temperature affects ice-cream sales. Which variable is independent?</p><details><summary>View answer</summary><div class="solution"><div class="step">Temperature (the input). <em>Answer: temperature.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Points \( (1,3),(2,5),(3,7),(4,9) \) — describe the trend.</p><details><summary>View answer</summary><div class="solution"><div class="step">Steady rise. <em>Answer: positive (upward) pattern.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Points \( (1,20),(2,16),(3,12),(4,8) \) — describe the trend.</p><details><summary>View answer</summary><div class="solution"><div class="step">Steady fall. <em>Answer: negative (downward) pattern.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>On an axis pair, where does the dependent variable go?</p><details><summary>View answer</summary><div class="solution"><div class="step">The vertical axis. <em>Answer: vertical (\( y \)).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A scatter plot of study hours vs score is tightly clustered along a rising line for one class, but widely scattered for another. What differs about the relationship?</p><details><summary>View answer</summary><div class="solution"><div class="step">The first shows a strong positive relationship; the second is weak (more variability). <em>Answer: strength of the relationship.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Putting the dependent variable on the horizontal axis.</li>
    <li>Joining scatter points with a line — a scatter plot shows separate points.</li>
    <li>Claiming a relationship from a shapeless cloud.</li>
    <li>Reading a point's coordinates in the wrong order.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does a scatter plot show?</h3><p><em>Whether two variables are related, from the shape of the point cloud.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which variable goes where?</h3><p><em>Independent on the horizontal axis, dependent on the vertical.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What does a shapeless cloud mean?</h3><p><em>No relationship between the two variables.</em></p></div>
</div>`)] },

  // ── 4.4 Correlation, Trends & the Line of Best Fit ─────────
  "4.4": { code: "4.4", title: "Correlation, Trends & the Line of Best Fit", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📉 Correlation, Trends &amp; the Line of Best Fit</h1>
  <p><strong>Overview.</strong> A <strong>line of best fit</strong> summarizes the trend in a scatter plot and lets you make predictions. This lesson describes <strong>correlation</strong> (direction and strength), fits a trend line, and predicts — while distinguishing correlation from causation.</p>

  <h2>📌 Describing Correlation</h2>
  <p>Points trending upward show <strong>positive</strong> correlation; downward, <strong>negative</strong>; no trend, <strong>none</strong>. A tight, line-like cloud is a <strong>strong</strong> correlation; a loose cloud is <strong>weak</strong>.</p>

  <h2>📌 Line of Best Fit &amp; Predictions</h2>
  <p>The line of best fit \( y=mx+b \) (found with technology) runs through the middle of the trend. Substitute an \( x \) to predict a \( y \). <strong>Interpolating</strong> within the data is reliable; <strong>extrapolating</strong> far beyond it is risky.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: Naming the correlation</h3>
    <p>A scatter plot of temperature vs ice-cream sales trends clearly upward. Describe the correlation.</p>
    <div class="solution">
      <div class="step"><strong>Direction:</strong> upward — positive.</div>
      <div class="step"><strong>Strength:</strong> a clear line-like trend — strong.</div>
      <em>Conclusion: a strong positive correlation. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: A negative correlation</h3>
    <p>Hours of TV vs test score trends downward but loosely. Describe it.</p>
    <div class="solution">
      <div class="step"><strong>Direction:</strong> downward — negative.</div>
      <div class="step"><strong>Strength:</strong> loose cloud — weak.</div>
      <em>Conclusion: a weak negative correlation. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: Predicting from the line</h3>
    <p>A line of best fit is \( y=2x+3 \) (score vs hours). Predict the score for \( 10 \) hours.</p>
    <div class="solution">
      <div class="step"><strong>Substitute:</strong> \( y=2(10)+3=23 \).</div>
      <em>Conclusion: a predicted score of \( 23 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Interpolate vs extrapolate</h3>
    <p>The data covers \( 0 \) to \( 8 \) hours. Which prediction is safer: at \( 5 \) hours or at \( 40 \) hours?</p>
    <div class="solution">
      <div class="step"><strong>At \( 5 \):</strong> inside the data — interpolation, reliable.</div>
      <div class="step"><strong>At \( 40 \):</strong> far outside — extrapolation, risky (and a score may exceed \( 100 \)).</div>
      <em>Conclusion: the \( 5 \)-hour prediction is safer. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Correlation is not causation</h3>
    <p>Ice-cream sales and drownings both rise in summer, so they are correlated. Does ice cream cause drownings?</p>
    <div class="solution">
      <div class="step"><strong>Hidden variable:</strong> hot weather increases both.</div>
      <em>Conclusion: a correlation, not a cause — a third factor explains both. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Points trend downward in a tight line. Describe the correlation.</p><details><summary>View answer</summary><div class="solution"><div class="step">Strong negative. <em>Answer: strong negative.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Line of best fit \( y=1.5x+2 \). Predict \( y \) at \( x=8 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1.5(8)+2=14 \). <em>Answer: \( 14 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Is predicting inside the data range interpolation or extrapolation?</p><details><summary>View answer</summary><div class="solution"><div class="step">Inside the data. <em>Answer: interpolation.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>A scattered cloud with no trend has what correlation?</p><details><summary>View answer</summary><div class="solution"><div class="step">None. <em>Answer: no correlation.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Data on \( 1\text{–}6 \) hours gives \( y=8x+40 \) (score). The prediction at \( 12 \) hours is \( 136 \). Why is this prediction unreliable?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 12 \) hours is far outside the data (extrapolation), and a score of \( 136 \) exceeds \( 100 \) — impossible. <em>Answer: extrapolation beyond a realistic range.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Confusing correlation with causation.</li>
    <li>Trusting predictions far outside the data (extrapolation).</li>
    <li>Describing only the direction and forgetting the strength.</li>
    <li>Forcing a line of best fit onto data with no real trend.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does the line of best fit do?</h3><p><em>Summarizes the trend and lets you predict a \( y \) from an \( x \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Interpolation or extrapolation — which is safer?</h3><p><em>Interpolation (within the data); extrapolation is risky.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Does correlation prove cause?</h3><p><em>No — a hidden third variable may drive both quantities.</em></p></div>
</div>`)] },

  // ── 4.5 Probability & Making Decisions ─────────────────────
  "4.5": { code: "4.5", title: "Probability & Making Decisions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎲 Probability &amp; Making Decisions</h1>
  <p><strong>Overview.</strong> Probability measures how likely an event is. This lesson computes <strong>theoretical</strong> probability as a ratio, compares it with <strong>experimental</strong> probability from trials, and uses probability to make informed decisions.</p>

  <h2>📌 Theoretical Probability</h2>
  <p>When outcomes are equally likely, \( P(\text{event})=\dfrac{\text{number of favourable outcomes}}{\text{total number of outcomes}} \), a value from \( 0 \) (impossible) to \( 1 \) (certain). It can be written as a fraction, decimal, or percent.</p>

  <h2>📌 Experimental Probability</h2>
  <p>Experimental probability comes from actually running trials: \( \dfrac{\text{times the event happened}}{\text{number of trials}} \). As the number of trials grows, it tends to approach the theoretical value.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}">
    <h3>Example 1: A single die</h3>
    <p>Find the probability of rolling an even number on a fair die.</p>
    <div class="solution">
      <div class="step"><strong>Favourable:</strong> \( 2,4,6 \) — three outcomes.</div>
      <div class="step"><strong>Ratio:</strong> \( \dfrac{3}{6}=\dfrac12 \).</div>
      <em>Conclusion: \( \tfrac12 \) (or \( 50\% \)). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 2: Two dice</h3>
    <p>Find the probability that two dice sum to \( 7 \).</p>
    <div class="solution">
      <div class="step"><strong>Total outcomes:</strong> \( 6\times6=36 \).</div>
      <div class="step"><strong>Favourable sums to 7:</strong> \( (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) \) — six.</div>
      <div class="step"><strong>Ratio:</strong> \( \dfrac{6}{36}=\dfrac16 \).</div>
      <em>Conclusion: \( \tfrac16 \). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 3: A deck of cards</h3>
    <p>Find the probability of drawing a heart from a standard \( 52 \)-card deck.</p>
    <div class="solution">
      <div class="step"><strong>Ratio:</strong> \( \dfrac{13}{52}=\dfrac14 \).</div>
      <em>Conclusion: \( \tfrac14 \) (or \( 25\% \)). ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 4: Experimental vs theoretical</h3>
    <p>A coin is flipped \( 20 \) times and lands heads \( 12 \) times. Compare the experimental and theoretical probabilities.</p>
    <div class="solution">
      <div class="step"><strong>Experimental:</strong> \( \dfrac{12}{20}=0.6 \).</div>
      <div class="step"><strong>Theoretical:</strong> \( \dfrac12=0.5 \); more flips would bring the experimental value closer to \( 0.5 \).</div>
      <em>Conclusion: \( 0.6 \) vs \( 0.5 \) — close, and closer with more trials. ✓</em>
    </div>
  </div>
  <div class="example-box" style="${EX}">
    <h3>Example 5: Making a decision</h3>
    <p>A game costs \( \$2 \) to play; you win \( \$10 \) with probability \( \tfrac16 \). Is it worth playing on average?</p>
    <div class="solution">
      <div class="step"><strong>Expected win:</strong> \( \tfrac16\times\$10\approx\$1.67 \) per play.</div>
      <div class="step"><strong>Compare to cost:</strong> \( \$1.67<\$2 \), so on average you lose about \( \$0.33 \) each play.</div>
      <em>Conclusion: not worth it in the long run. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Probability of rolling a \( 5 \) on a fair die.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac16 \). <em>Answer: \( \tfrac16 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Probability of drawing a red card from a \( 52 \)-card deck.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac{26}{52}=\tfrac12 \). <em>Answer: \( \tfrac12 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Probability of NOT rolling a \( 6 \) on a die.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac56 \). <em>Answer: \( \tfrac56 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Two dice: probability the sum is \( 8 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (2,6),(3,5),(4,4),(5,3),(6,2)=5 \) ways: \( \tfrac{5}{36} \). <em>Answer: \( \tfrac{5}{36} \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A spinner lands on red \( 18 \) times in \( 60 \) spins. What is the experimental probability, and if the spinner has \( 3 \) equal colours, how does it compare to theoretical?</p><details><summary>View answer</summary><div class="solution"><div class="step">Experimental \( =\tfrac{18}{60}=0.3 \); theoretical \( =\tfrac13\approx0.333 \). Close, and it should approach \( \tfrac13 \) over more spins. <em>Answer: \( 0.3 \) vs \( \tfrac13 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Counting outcomes that are not equally likely.</li>
    <li>Expecting experimental results to match theory exactly in a few trials.</li>
    <li>Forgetting the total is \( 36 \) for two dice (not \( 12 \)).</li>
    <li>Giving a probability greater than \( 1 \) or less than \( 0 \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is theoretical probability?</h3><p><em>Favourable outcomes divided by total equally-likely outcomes.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How does experimental probability relate to it?</h3><p><em>It comes from trials and approaches the theoretical value as trials increase.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How does probability help decisions?</h3><p><em>Compare expected value to cost to judge whether a choice is worthwhile.</em></p></div>
</div>`)] },
};

export default authored;
