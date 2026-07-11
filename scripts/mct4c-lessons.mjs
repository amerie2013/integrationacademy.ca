// Fully-authored MCT4C lessons (deep, hard examples & questions), keyed by code.
// The seed (seed-mct4c.mjs) splices these over the scaffolds. Filled unit by unit;
// anything not present stays a scaffold.
import { html, gframe } from "./seed-mpm2d.mjs";

// Shared inline styles (match the flagship lessons).
const EX = "background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;";
const PR = "background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;";
const MK = "background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;";
const QA = "background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;";

export const authored = {
  // ── 1.1 Exponent Laws ───────────────────────────────────────
  "1.1": { code: "1.1", title: "Exponent Laws", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔢 Exponent Laws</h1>
  <p><strong>Overview.</strong> Exponential and polynomial work — the heart of MCT4C — rests on fluent algebra with powers. This lesson consolidates the laws of exponents and extends them to <strong>zero, negative, and rational</strong> exponents, so you can simplify any expression to a single power form and evaluate awkward powers like \( 27^{2/3} \) by hand. The single rule behind everything: a law only applies when the powers share the <strong>same base</strong>.</p>

  <h2>📌 The Core Laws (same base)</h2>
  <p>For any base \( a\ne0 \) and integers/rationals \( m,n \):</p>
  <ul>
    <li><strong>Product:</strong> \( a^m\cdot a^n=a^{m+n} \) — multiply powers, <em>add</em> exponents.</li>
    <li><strong>Quotient:</strong> \( \dfrac{a^m}{a^n}=a^{m-n} \) — divide, <em>subtract</em> exponents.</li>
    <li><strong>Power of a power:</strong> \( (a^m)^n=a^{mn} \) — <em>multiply</em> exponents.</li>
    <li><strong>Power of a product/quotient:</strong> \( (ab)^n=a^n b^n \), \( \left(\dfrac{a}{b}\right)^n=\dfrac{a^n}{b^n} \).</li>
  </ul>

  <h2>📌 Zero and Negative Exponents</h2>
  <p>\( a^0=1 \) (any non-zero base), and \( a^{-n}=\dfrac{1}{a^n} \). A negative exponent means <strong>reciprocal</strong>, not a negative value: \( 2^{-3}=\dfrac18 \), which is positive. To clear negatives, move the factor across the fraction bar and flip the sign of its exponent.</p>

  <h2>📌 Rational Exponents = Roots</h2>
  <p>\( a^{1/n}=\sqrt[n]{a} \) and \( a^{m/n}=\left(\sqrt[n]{a}\right)^m=\sqrt[n]{a^m} \). The denominator is the <strong>root</strong>; the numerator is the <strong>power</strong>. Take the root <em>first</em> to keep the numbers small: \( 8^{2/3}=(\sqrt[3]{8})^2=2^2=4 \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Multi-variable simplification</h3>
    <p>Simplify \( \dfrac{(3x^2y^3)^2\,(2xy^4)^3}{6x^3y^5} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 — power of a product:</strong> \( (3x^2y^3)^2=9x^4y^6 \) and \( (2xy^4)^3=8x^3y^{12} \).</div>
      <div class="step"><strong>Step 2 — multiply the numerator:</strong> \( 9x^4y^6\cdot8x^3y^{12}=72x^7y^{18} \).</div>
      <div class="step"><strong>Step 3 — quotient law:</strong> \( \dfrac{72x^7y^{18}}{6x^3y^5}=12x^{7-3}y^{18-5} \).</div>
      <em>Conclusion: \( 12x^4y^{13} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Negative and zero exponents</h3>
    <p>Simplify and write with positive exponents: \( (2a^{-3}b^2)^{-2}\cdot a^5b^{-1} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 — distribute the outer \(-2\):</strong> \( (2)^{-2}(a^{-3})^{-2}(b^2)^{-2}=\tfrac14\,a^{6}b^{-4} \).</div>
      <div class="step"><strong>Step 2 — multiply by \( a^5b^{-1} \):</strong> \( \tfrac14\,a^{6+5}b^{-4-1}=\tfrac14\,a^{11}b^{-5} \).</div>
      <div class="step"><strong>Step 3 — clear the negative exponent:</strong> \( b^{-5}=\dfrac{1}{b^5} \).</div>
      <em>Conclusion: \( \dfrac{a^{11}}{4b^5} \). ✓ (The negative exponent made a reciprocal, not a negative.)</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Evaluating rational powers by hand</h3>
    <p>Evaluate without a calculator: (a) \( 27^{2/3} \); (b) \( 16^{-3/4} \); (c) \( \left(\dfrac{8}{27}\right)^{-2/3} \).</p>
    <div class="solution">
      <div class="step"><strong>(a)</strong> Root first: \( 27^{2/3}=(\sqrt[3]{27})^2=3^2=9 \).</div>
      <div class="step"><strong>(b)</strong> Negative \(\Rightarrow\) reciprocal: \( 16^{-3/4}=\dfrac{1}{(\sqrt[4]{16})^3}=\dfrac{1}{2^3}=\dfrac18 \).</div>
      <div class="step"><strong>(c)</strong> Negative flips the fraction: \( \left(\dfrac{8}{27}\right)^{-2/3}=\left(\dfrac{27}{8}\right)^{2/3}=\left(\dfrac{3}{2}\right)^2=\dfrac94 \).</div>
      <em>Conclusion: \( 9,\ \tfrac18,\ \tfrac94 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Rational exponents with variables</h3>
    <p>Simplify with positive exponents: \( \dfrac{(x^{1/2}y^{-2})^4}{x^3y^{-5}} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 — power of a power:</strong> \( (x^{1/2})^4=x^{2} \) and \( (y^{-2})^4=y^{-8} \), so the top is \( x^2y^{-8} \).</div>
      <div class="step"><strong>Step 2 — quotient law:</strong> \( \dfrac{x^2y^{-8}}{x^3y^{-5}}=x^{2-3}\,y^{-8-(-5)}=x^{-1}y^{-3} \).</div>
      <div class="step"><strong>Step 3 — positive exponents:</strong> \( x^{-1}y^{-3}=\dfrac{1}{xy^3} \).</div>
      <em>Conclusion: \( \dfrac{1}{xy^3} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Simplify, then evaluate</h3>
    <p>Simplify \( \left(\dfrac{a^{2/3}b^{-1/2}}{a^{-1/3}b^{1/2}}\right)^{6} \), then evaluate at \( a=2,\ b=2 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 — simplify inside (quotient law):</strong> \( a^{\,2/3-(-1/3)}\,b^{\,-1/2-1/2}=a^{1}b^{-1} \).</div>
      <div class="step"><strong>Step 2 — apply the outer power:</strong> \( (a^{1}b^{-1})^6=a^{6}b^{-6}=\dfrac{a^6}{b^6} \).</div>
      <div class="step"><strong>Step 3 — evaluate:</strong> \( \dfrac{2^6}{2^6}=1 \).</div>
      <em>Conclusion: \( \dfrac{a^6}{b^6} \), which equals \( 1 \) here. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Simplify \( (2x^3)^4\cdot x^{-5} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 16x^{12}\cdot x^{-5}=16x^{7} \). <em>Answer: \( 16x^7 \).</em></div></div></details></div>

  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Simplify \( \dfrac{a^5b^2\cdot a^2b^4}{a^3b} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Top: \( a^7b^6 \); divide: \( a^{7-3}b^{6-1}=a^4b^5 \). <em>Answer: \( a^4b^5 \).</em></div></div></details></div>

  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Evaluate \( 32^{3/5} \) without a calculator.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (\sqrt[5]{32})^3=2^3=8 \). <em>Answer: \( 8 \).</em></div></div></details></div>

  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Simplify with positive exponents: \( (4x^{-2}y^5)^{-1} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 4^{-1}x^{2}y^{-5}=\dfrac{x^2}{4y^5} \). <em>Answer: \( \dfrac{x^2}{4y^5} \).</em></div></div></details></div>

  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Evaluate \( 16^{3/4}\cdot 27^{-2/3}\cdot 5^{0} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 16^{3/4}=(\sqrt[4]{16})^3=2^3=8 \); \( 27^{-2/3}=\dfrac{1}{(\sqrt[3]{27})^2}=\dfrac19 \); \( 5^0=1 \). Product \( =8\cdot\tfrac19\cdot1=\tfrac89 \). <em>Answer: \( \dfrac89 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Adding exponents for <strong>different</strong> bases — the laws only apply with a common base.</li>
    <li>Reading \( a^{-n} \) as negative. It is the <strong>reciprocal</strong> \( \tfrac{1}{a^n} \), which stays positive for \( a>0 \).</li>
    <li>Writing \( (a+b)^n=a^n+b^n \). A power does <strong>not</strong> distribute over a sum.</li>
    <li>For \( a^{m/n} \), squaring before rooting and fighting huge numbers — take the \( n \)th root first.</li>
    <li>Forgetting the coefficient's exponent: \( (2a^3)^4=2^4a^{12}=16a^{12} \), not \( 2a^{12} \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I combine \( a^m\cdot a^n \)?</h3><p><em>Same base, so add the exponents: \( a^{m+n} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What does a negative exponent do?</h3><p><em>It takes the reciprocal: \( a^{-n}=\tfrac{1}{a^n} \). Move the factor across the fraction bar and flip the sign.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I evaluate \( a^{m/n} \) by hand?</h3><p><em>Take the \( n \)th root, then raise to the \( m \)th power (root first keeps the arithmetic small).</em></p></div>
</div>`)] },

  // ── 1.2 Exponential Functions & Their Graphs ────────────────
  "1.2": { code: "1.2", title: "Exponential Functions & Their Graphs", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📈 Exponential Functions &amp; Their Graphs</h1>
  <p><strong>Overview.</strong> An <strong>exponential function</strong> \( y=a\,b^{x} \) multiplies by the constant factor \( b \) every time \( x \) increases by \( 1 \) — the signature of populations, radioactive decay, and compound interest. This lesson reads the graph: the base \( b \) sets growth versus decay, \( a \) sets the \( y \)-intercept, and every such curve hugs a <strong>horizontal asymptote</strong>.</p>

  <h2>📌 The Form \( y=a\,b^{x} \)</h2>
  <p>The <strong>base</strong> \( b>0,\ b\ne1 \) is the multiplier per unit step; the <strong>coefficient</strong> \( a \) is the value at \( x=0 \) (the \( y \)-intercept \( (0,a) \)). When \( b>1 \) the curve <strong>grows</strong>; when \( 0<b<1 \) it <strong>decays</strong>.</p>

  <h2>📌 Key Features</h2>
  <ul>
    <li><strong>\( y \)-intercept:</strong> \( (0,a) \), since \( b^0=1 \).</li>
    <li><strong>Horizontal asymptote:</strong> \( y=0 \) (the curve approaches but never reaches it).</li>
    <li><strong>Domain:</strong> all real numbers; <strong>range:</strong> \( y>0 \) when \( a>0 \).</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Reading the features</h3>
    <p>For \( y=3\cdot2^{x} \), state the \( y \)-intercept, asymptote, and whether it grows or decays.</p>
    <div class="solution">
      <div class="step"><strong>\( y \)-intercept:</strong> at \( x=0 \), \( y=3\cdot2^0=3 \), so \( (0,3) \).</div>
      <div class="step"><strong>Asymptote:</strong> \( y=0 \).</div>
      <div class="step"><strong>Base \( 2>1 \):</strong> the function grows (doubles each step).</div>
      <em>Conclusion: \( (0,3) \), asymptote \( y=0 \), exponential growth. ✓</em>
    </div>
    ` + gframe(["y = 3*2^x"], { title: "y = 3·2ˣ — growth, y-intercept (0,3), asymptote y = 0", zoom: 70, zoomY: 22, ox: 70, oy: 130 }) + `
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Growth vs. decay</h3>
    <p>Compare \( y=2^{x} \) and \( y=\left(\tfrac12\right)^{x} \).</p>
    <div class="solution">
      <div class="step"><strong>\( 2^x \):</strong> base \( >1 \) — grows to the right.</div>
      <div class="step"><strong>\( (1/2)^x=2^{-x} \):</strong> base \( <1 \) — decays; it is the reflection of \( 2^x \) in the \( y \)-axis.</div>
      <div class="step"><strong>Shared:</strong> both pass \( (0,1) \) with asymptote \( y=0 \).</div>
      <em>Conclusion: same intercept and asymptote; opposite direction (mirror images). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Table of values and shape</h3>
    <p>Build a table for \( y=4\left(\tfrac12\right)^{x} \) at \( x=-1,0,1,2,3 \) and describe the trend.</p>
    <div class="solution">
      <div class="step"><strong>Values:</strong> \( x=-1\!:8,\ \ 0\!:4,\ \ 1\!:2,\ \ 2\!:1,\ \ 3\!:\tfrac12 \) — each output is <em>half</em> the previous.</div>
      <div class="step"><strong>Feature check:</strong> \( y \)-intercept \( (0,4) \); asymptote \( y=0 \); decay.</div>
      <em>Conclusion: a halving (decay) curve from \( (0,4) \) toward \( y=0 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Find the equation</h3>
    <p>An exponential function has \( y \)-intercept \( 5 \) and passes through \( (2,45) \). Find \( y=a\,b^{x} \).</p>
    <div class="solution">
      <div class="step"><strong>Use the intercept:</strong> \( a=5 \).</div>
      <div class="step"><strong>Use the point:</strong> \( 45=5b^{2}\Rightarrow b^{2}=9\Rightarrow b=3 \).</div>
      <em>Conclusion: \( y=5\cdot3^{x} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Domain, range, asymptote</h3>
    <p>State the domain, range, and asymptote of \( y=5\cdot3^{x} \), and evaluate \( y \) at \( x=-1 \).</p>
    <div class="solution">
      <div class="step"><strong>Domain:</strong> all real \( x \). <strong>Range:</strong> \( y>0 \). <strong>Asymptote:</strong> \( y=0 \).</div>
      <div class="step"><strong>At \( x=-1 \):</strong> \( 5\cdot3^{-1}=\tfrac53 \).</div>
      <em>Conclusion: domain \( \mathbb{R} \), range \( y>0 \), asymptote \( y=0 \); \( y(-1)=\tfrac53 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>State the \( y \)-intercept and asymptote of \( y=2\cdot5^{x} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (0,2) \); asymptote \( y=0 \). <em>Answer: \( (0,2),\ y=0 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Does \( y=6\left(\tfrac34\right)^{x} \) grow or decay?</p><details><summary>View answer</summary><div class="solution"><div class="step">Base \( \tfrac34<1 \). <em>Answer: decay.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Evaluate \( y=4\cdot3^{x} \) at \( x=2 \) and \( x=-1 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 4\cdot9=36 \); \( 4\cdot\tfrac13=\tfrac43 \). <em>Answer: \( 36 \) and \( \tfrac43 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>An exponential passes through \( (0,7) \) and \( (1,21) \). Find its equation.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( a=7 \); \( 21=7b\Rightarrow b=3 \). <em>Answer: \( y=7\cdot3^{x} \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A function passes through \( (1,12) \) and \( (3,48) \). Find \( y=a\,b^{x} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Divide: \( \tfrac{48}{12}=b^{2}=4\Rightarrow b=2 \); then \( 12=a\cdot2\Rightarrow a=6 \). <em>Answer: \( y=6\cdot2^{x} \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Confusing \( a\,b^x \) with \( (ab)^x \) — the coefficient \( a \) is <strong>not</strong> inside the power.</li>
    <li>Thinking the curve reaches \( y=0 \). It only approaches the asymptote.</li>
    <li>Calling \( b<1 \) "negative growth" — it is <strong>decay</strong>; the outputs stay positive.</li>
    <li>Reading the \( y \)-intercept as \( b \) instead of \( a \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Growth or decay?</h3><p><em>Base \( b>1 \) grows; \( 0<b<1 \) decays.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Where is the \( y \)-intercept?</h3><p><em>At \( (0,a) \), because \( b^0=1 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is the asymptote of \( y=a\,b^x \)?</h3><p><em>\( y=0 \) (until a vertical shift moves it).</em></p></div>
</div>`)] },

  // ── 1.3 Transformations of Exponential Functions ────────────
  "1.3": { code: "1.3", title: "Transformations of Exponential Functions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔧 Transformations of Exponential Functions</h1>
  <p><strong>Overview.</strong> Every exponential model is the parent \( y=b^{x} \) stretched, reflected, and shifted. In \( y=a\,b^{\,k(x-d)}+c \), each constant plays a fixed role — and the vertical shift \( c \) is special because it <strong>moves the asymptote</strong> to \( y=c \).</p>

  <h2>📌 The Roles of \( a,k,d,c \)</h2>
  <ul>
    <li><strong>\( a \):</strong> vertical stretch by \( |a| \); reflect in the \( x \)-axis if \( a<0 \).</li>
    <li><strong>\( k \):</strong> horizontal stretch/compression by \( \tfrac1{|k|} \); reflect in the \( y \)-axis if \( k<0 \).</li>
    <li><strong>\( d \):</strong> horizontal shift right by \( d \).</li>
    <li><strong>\( c \):</strong> vertical shift up by \( c \) — the <strong>asymptote becomes \( y=c \)</strong>.</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Describe the transformations</h3>
    <p>Describe how \( y=2^{\,x-3}+1 \) comes from \( y=2^{x} \), and give its asymptote.</p>
    <div class="solution">
      <div class="step"><strong>\( x-3 \):</strong> shift right \( 3 \).</div>
      <div class="step"><strong>\( +1 \):</strong> shift up \( 1 \), so the asymptote moves to \( y=1 \).</div>
      <em>Conclusion: right \( 3 \), up \( 1 \); asymptote \( y=1 \). ✓</em>
    </div>
    ` + gframe(["y = 2^(x-3)+1"], { title: "y = 2^(x−3) + 1 — shifted right 3, up 1; asymptote y = 1", zoom: 55, zoomY: 26, ox: -30, oy: 120 }) + `
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Reflection and vertical shift</h3>
    <p>Find the \( y \)-intercept and asymptote of \( y=-3\cdot2^{x}+4 \).</p>
    <div class="solution">
      <div class="step"><strong>\( y \)-intercept:</strong> \( x=0\Rightarrow y=-3\cdot1+4=1 \), so \( (0,1) \).</div>
      <div class="step"><strong>\( a=-3<0 \):</strong> reflected down and stretched by \( 3 \).</div>
      <div class="step"><strong>\( +4 \):</strong> asymptote \( y=4 \); the curve sits <em>below</em> it and falls away.</div>
      <em>Conclusion: intercept \( (0,1) \); asymptote \( y=4 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Graph by transformations</h3>
    <p>Graph \( y=2^{\,x+1}-3 \) by transforming \( y=2^{x} \).</p>
    <div class="solution">
      <div class="step"><strong>\( x+1 \):</strong> shift left \( 1 \).</div>
      <div class="step"><strong>\( -3 \):</strong> shift down \( 3 \); asymptote \( y=-3 \).</div>
      <div class="step"><strong>Anchor:</strong> \( (0,1)\to(-1,-2) \) after the shifts; \( y \)-intercept is \( 2^{1}-3=-1 \).</div>
      <em>Conclusion: left \( 1 \), down \( 3 \); asymptote \( y=-3 \), \( y \)-intercept \( -1 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Write the equation</h3>
    <p>\( y=3^{x} \) is stretched vertically by \( 2 \), reflected in the \( x \)-axis, and shifted up \( 5 \). Write the new equation and its asymptote.</p>
    <div class="solution">
      <div class="step"><strong>Stretch \( \times2 \), reflect:</strong> \( a=-2 \).</div>
      <div class="step"><strong>Up \( 5 \):</strong> \( +5 \).</div>
      <em>Conclusion: \( y=-2\cdot3^{x}+5 \); asymptote \( y=5 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Range from the transformation</h3>
    <p>State the range of \( y=-4\cdot2^{x}+10 \).</p>
    <div class="solution">
      <div class="step"><strong>Asymptote:</strong> \( y=10 \).</div>
      <div class="step"><strong>\( a=-4<0 \):</strong> outputs sit below the asymptote and decrease without bound.</div>
      <em>Conclusion: range \( y<10 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Describe the transformations in \( y=2^{\,x-4} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Shift right \( 4 \). <em>Answer: right 4.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Give the asymptote of \( y=5\cdot3^{x}-2 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y=-2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Find the \( y \)-intercept of \( y=-2\cdot4^{x}+9 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( -2\cdot1+9=7 \). <em>Answer: \( (0,7) \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Write the equation for \( y=2^{x} \) shifted left \( 3 \) and down \( 1 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y=2^{\,x+3}-1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>State the range of \( y=3\cdot2^{\,x-1}-6 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Asymptote \( y=-6 \), \( a>0 \Rightarrow \) above it. <em>Answer: \( y>-6 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Shifting the asymptote for a horizontal move — only \( c \) (the vertical shift) moves the asymptote.</li>
    <li>Reading \( x-d \) as a shift <em>left</em>; \( x-3 \) shifts <strong>right</strong> \( 3 \).</li>
    <li>Forgetting a reflection when \( a<0 \).</li>
    <li>Stating the range as \( y>0 \) after a vertical shift — the boundary is \( y=c \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What moves the asymptote?</h3><p><em>Only the vertical shift \( c \); the asymptote becomes \( y=c \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which way does \( x-d \) shift?</h3><p><em>Right by \( d \) (subtracting inside shifts right).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What does \( a<0 \) do?</h3><p><em>Reflects the curve in the \( x \)-axis (it opens downward from the asymptote).</em></p></div>
</div>`)] },

  // ── 1.4 Solving Exponential Equations by Common Bases ───────
  "1.4": { code: "1.4", title: "Solving Exponential Equations by Common Bases", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🟰 Solving Exponential Equations by Common Bases</h1>
  <p><strong>Overview.</strong> If both sides of an exponential equation can be written as powers of the <strong>same base</strong>, then the exponents must be equal. This turns an exponential equation into a simple linear one — no logarithms needed.</p>

  <h2>📌 The Method</h2>
  <p>To solve \( b^{f(x)}=b^{g(x)} \): rewrite each side to a common base, then set \( f(x)=g(x) \) and solve. Always look for the small primes \( 2,3,5 \) hiding inside \( 4,8,9,16,25,27,\dots \)</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Same base already</h3>
    <p>Solve \( 2^{x}=32 \).</p>
    <div class="solution">
      <div class="step"><strong>Common base:</strong> \( 32=2^{5} \), so \( 2^{x}=2^{5} \).</div>
      <div class="step"><strong>Equate exponents:</strong> \( x=5 \).</div>
      <em>Conclusion: \( x=5 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Rewrite both sides</h3>
    <p>Solve \( 9^{x}=27 \).</p>
    <div class="solution">
      <div class="step"><strong>Base 3:</strong> \( 3^{2x}=3^{3} \).</div>
      <div class="step"><strong>Equate:</strong> \( 2x=3\Rightarrow x=\tfrac32 \).</div>
      <em>Conclusion: \( x=\tfrac32 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Exponent expressions</h3>
    <p>Solve \( 8^{\,x-1}=16 \).</p>
    <div class="solution">
      <div class="step"><strong>Base 2:</strong> \( 2^{3(x-1)}=2^{4} \).</div>
      <div class="step"><strong>Equate:</strong> \( 3(x-1)=4\Rightarrow 3x-3=4\Rightarrow x=\tfrac73 \).</div>
      <em>Conclusion: \( x=\tfrac73 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: A fractional base</h3>
    <p>Solve \( \left(\tfrac14\right)^{x}=8 \).</p>
    <div class="solution">
      <div class="step"><strong>Base 2:</strong> \( \left(2^{-2}\right)^{x}=2^{3}\Rightarrow 2^{-2x}=2^{3} \).</div>
      <div class="step"><strong>Equate:</strong> \( -2x=3\Rightarrow x=-\tfrac32 \).</div>
      <em>Conclusion: \( x=-\tfrac32 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Variable on both sides</h3>
    <p>Solve \( 4^{\,x+1}=8^{\,x-1} \).</p>
    <div class="solution">
      <div class="step"><strong>Base 2:</strong> \( 2^{2(x+1)}=2^{3(x-1)} \).</div>
      <div class="step"><strong>Equate:</strong> \( 2x+2=3x-3 \).</div>
      <div class="step"><strong>Solve:</strong> \( x=5 \).</div>
      <em>Conclusion: \( x=5 \). ✓ (Check: \( 4^{6}=4096=8^{4} \).)</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Solve \( 3^{x}=81 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3^x=3^4 \). <em>Answer: \( x=4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \( 25^{x}=125 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 5^{2x}=5^{3}\Rightarrow 2x=3 \). <em>Answer: \( x=\tfrac32 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Solve \( 2^{\,3x}=32 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2^{3x}=2^{5}\Rightarrow 3x=5 \). <em>Answer: \( x=\tfrac53 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( \left(\tfrac19\right)^{x}=27 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3^{-2x}=3^{3}\Rightarrow -2x=3 \). <em>Answer: \( x=-\tfrac32 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Solve \( 27^{\,x-1}=9^{\,2x+1} \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3^{3(x-1)}=3^{2(2x+1)}\Rightarrow 3x-3=4x+2\Rightarrow x=-5 \). <em>Answer: \( x=-5 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Equating exponents when the bases are <strong>different</strong> — rewrite to a common base first.</li>
    <li>Forgetting to distribute the power over an exponent expression: \( 8^{x-1}=2^{3(x-1)} \), not \( 2^{3x-1} \).</li>
    <li>Dropping the negative on a reciprocal base: \( \tfrac14=2^{-2} \).</li>
    <li>Not checking the solution by substitution.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When can I equate exponents?</h3><p><em>Only after both sides share the same base.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I handle \( 8,27,\tfrac14,\dots \)?</h3><p><em>Write them as powers of a prime: \( 8=2^3,\ 27=3^3,\ \tfrac14=2^{-2} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What if no common base exists?</h3><p><em>Use logarithms (Lesson 1.7).</em></p></div>
</div>`)] },

  // ── 1.5 Introduction to Logarithms ──────────────────────────
  "1.5": { code: "1.5", title: "Introduction to Logarithms", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔁 Introduction to Logarithms</h1>
  <p><strong>Overview.</strong> A <strong>logarithm answers the question "what exponent?"</strong> It is the inverse of an exponential: \( \log_b x=y \) means exactly \( b^{y}=x \). Fluently switching between the two forms is the whole skill.</p>

  <h2>📌 The Definition</h2>
  <p>\( \log_b x = y \iff b^{y}=x \), for base \( b>0,\ b\ne1 \) and \( x>0 \). The base-10 logarithm is written \( \log x \), and the natural logarithm (base \( e \)) is \( \ln x \).</p>

  <h2>📌 Reading a Logarithm</h2>
  <p>\( \log_2 8=3 \) because \( 2^{3}=8 \). \( \log_5\tfrac{1}{25}=-2 \) because \( 5^{-2}=\tfrac{1}{25} \). And \( \log_b 1=0 \) always, since \( b^0=1 \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Switching forms</h3>
    <p>Rewrite \( 2^{5}=32 \) in logarithmic form, and \( \log_3 81=4 \) in exponential form.</p>
    <div class="solution">
      <div class="step"><strong>Exponential \(\to\) log:</strong> \( \log_2 32=5 \).</div>
      <div class="step"><strong>Log \(\to\) exponential:</strong> \( 3^{4}=81 \).</div>
      <em>Conclusion: \( \log_2 32=5 \); \( 3^4=81 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Evaluating logarithms</h3>
    <p>Evaluate (a) \( \log_2 16 \); (b) \( \log_5\tfrac{1}{25} \); (c) \( \log 1000 \); (d) \( \log_9 3 \).</p>
    <div class="solution">
      <div class="step"><strong>(a)</strong> \( 2^{4}=16\Rightarrow 4 \).</div>
      <div class="step"><strong>(b)</strong> \( 5^{-2}=\tfrac1{25}\Rightarrow -2 \).</div>
      <div class="step"><strong>(c)</strong> base 10: \( 10^{3}=1000\Rightarrow 3 \).</div>
      <div class="step"><strong>(d)</strong> \( 9^{1/2}=3\Rightarrow \tfrac12 \).</div>
      <em>Conclusion: \( 4,\ -2,\ 3,\ \tfrac12 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Solve for the argument</h3>
    <p>Solve \( \log_2 x=5 \).</p>
    <div class="solution">
      <div class="step"><strong>Exponential form:</strong> \( x=2^{5} \).</div>
      <em>Conclusion: \( x=32 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Solve for the base</h3>
    <p>Solve \( \log_x 64=3 \).</p>
    <div class="solution">
      <div class="step"><strong>Exponential form:</strong> \( x^{3}=64 \).</div>
      <div class="step"><strong>Cube root:</strong> \( x=\sqrt[3]{64}=4 \).</div>
      <em>Conclusion: \( x=4 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: A fractional value</h3>
    <p>Evaluate \( \log_4 8 \).</p>
    <div class="solution">
      <div class="step"><strong>Set up:</strong> \( 4^{y}=8\Rightarrow 2^{2y}=2^{3} \).</div>
      <div class="step"><strong>Equate:</strong> \( 2y=3\Rightarrow y=\tfrac32 \).</div>
      <em>Conclusion: \( \log_4 8=\tfrac32 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Rewrite \( 10^{4}=10000 \) in log form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( \log 10000=4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Evaluate \( \log_3 27 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3^3=27 \). <em>Answer: \( 3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Evaluate \( \log_2\tfrac18 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2^{-3}=\tfrac18 \). <em>Answer: \( -3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( \log_x 81=4 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x^4=81\Rightarrow x=3 \). <em>Answer: \( x=3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Evaluate \( \log_8 32 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2^{3y}=2^{5}\Rightarrow 3y=5 \). <em>Answer: \( \tfrac53 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Taking the log of a negative number or zero — the argument must be positive.</li>
    <li>Confusing \( \log_b x \) with \( \tfrac{1}{b^x} \); a log is an <strong>exponent</strong>.</li>
    <li>Forgetting that \( \log x \) means base \( 10 \) and \( \ln x \) means base \( e \).</li>
    <li>Mixing up which number is the base when converting forms.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is a logarithm?</h3><p><em>The exponent: \( \log_b x=y \) means \( b^y=x \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why must \( x>0 \)?</h3><p><em>A positive base to any power is positive, so only positive arguments have logs.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What are \( \log \) and \( \ln \)?</h3><p><em>\( \log \) is base \( 10 \); \( \ln \) is base \( e \).</em></p></div>
</div>`)] },

  // ── 1.6 Laws of Logarithms ──────────────────────────────────
  "1.6": { code: "1.6", title: "Laws of Logarithms", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📜 Laws of Logarithms</h1>
  <p><strong>Overview.</strong> Because logarithms are exponents, the exponent laws become <strong>logarithm laws</strong>: products turn into sums, quotients into differences, and powers into multipliers. These let you expand, condense, and evaluate logarithmic expressions — and the change-of-base rule lets your calculator handle any base.</p>

  <h2>📌 The Three Laws</h2>
  <ul>
    <li><strong>Product:</strong> \( \log_b(MN)=\log_b M+\log_b N \).</li>
    <li><strong>Quotient:</strong> \( \log_b\!\left(\tfrac{M}{N}\right)=\log_b M-\log_b N \).</li>
    <li><strong>Power:</strong> \( \log_b(M^{p})=p\,\log_b M \).</li>
  </ul>

  <h2>📌 Change of Base</h2>
  <p>\( \log_b x=\dfrac{\log x}{\log b}=\dfrac{\ln x}{\ln b} \). Use it to evaluate \( \log_2 10 \) or any base your calculator lacks.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Expand</h3>
    <p>Expand \( \log\!\left(\dfrac{x^{2}y}{z}\right) \) into separate logarithms.</p>
    <div class="solution">
      <div class="step"><strong>Quotient:</strong> \( \log(x^2y)-\log z \).</div>
      <div class="step"><strong>Product then power:</strong> \( 2\log x+\log y-\log z \).</div>
      <em>Conclusion: \( 2\log x+\log y-\log z \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Condense</h3>
    <p>Write \( 2\log a+\log b-3\log c \) as a single logarithm.</p>
    <div class="solution">
      <div class="step"><strong>Power law:</strong> \( \log a^{2}+\log b-\log c^{3} \).</div>
      <div class="step"><strong>Product/quotient:</strong> \( \log\!\left(\dfrac{a^{2}b}{c^{3}}\right) \).</div>
      <em>Conclusion: \( \log\!\left(\dfrac{a^{2}b}{c^{3}}\right) \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Evaluate with the product law</h3>
    <p>Evaluate \( \log_6 9+\log_6 4 \).</p>
    <div class="solution">
      <div class="step"><strong>Combine:</strong> \( \log_6(9\cdot4)=\log_6 36 \).</div>
      <div class="step"><strong>Evaluate:</strong> \( 6^{2}=36\Rightarrow 2 \).</div>
      <em>Conclusion: \( 2 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Power law shortcut</h3>
    <p>Evaluate \( \log_2 8^{4} \).</p>
    <div class="solution">
      <div class="step"><strong>Power law:</strong> \( 4\log_2 8=4\cdot3 \).</div>
      <em>Conclusion: \( 12 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Change of base</h3>
    <p>Evaluate \( \log_2 10 \) to three decimals.</p>
    <div class="solution">
      <div class="step"><strong>Change base:</strong> \( \dfrac{\log 10}{\log 2}=\dfrac{1}{0.30103} \).</div>
      <em>Conclusion: \( \log_2 10\approx3.322 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Expand \( \log(ab^{3}) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( \log a+3\log b \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Condense \( \log x+\log y-\log z \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( \log\!\left(\dfrac{xy}{z}\right) \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Evaluate \( \log_3 6+\log_3 \tfrac32 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \log_3 9=2 \). <em>Answer: \( 2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Evaluate \( \log_5 100-\log_5 4 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \log_5 25=2 \). <em>Answer: \( 2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Evaluate \( \log_3 20 \) to three decimals.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{\log 20}{\log 3}=\dfrac{1.30103}{0.47712} \). <em>Answer: \( \approx2.727 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Writing \( \log(M+N)=\log M+\log N \). The product law is for \( \log(MN) \), not a sum.</li>
    <li>Applying the power law to a coefficient: \( 3\log x=\log x^3 \), not \( \log 3x \).</li>
    <li>Forgetting the change-of-base denominator: \( \log_b x=\tfrac{\log x}{\log b} \).</li>
    <li>Splitting \( \log\tfrac{M}{N} \) as \( \tfrac{\log M}{\log N} \) — it is \( \log M-\log N \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How does a product behave?</h3><p><em>\( \log(MN)=\log M+\log N \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How does a power behave?</h3><p><em>It comes out front: \( \log M^p=p\log M \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I evaluate an unusual base?</h3><p><em>Change of base: \( \log_b x=\tfrac{\log x}{\log b} \).</em></p></div>
</div>`)] },

  // ── 1.7 Solving Exponential Equations Using Logarithms ──────
  "1.7": { code: "1.7", title: "Solving Exponential Equations Using Logarithms", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧮 Solving Exponential Equations Using Logarithms</h1>
  <p><strong>Overview.</strong> When both sides can't be written with a common base, take the <strong>logarithm of both sides</strong>. The power law then drops the variable out of the exponent, leaving a linear equation to solve.</p>

  <h2>📌 The Method</h2>
  <p>To solve \( b^{x}=k \): isolate the power, take \( \log \) (or \( \ln \)) of both sides, apply \( \log b^{x}=x\log b \), then divide. So \( x=\dfrac{\log k}{\log b} \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Basic solve</h3>
    <p>Solve \( 3^{x}=20 \) to three decimals.</p>
    <div class="solution">
      <div class="step"><strong>Take logs:</strong> \( x\log 3=\log 20 \).</div>
      <div class="step"><strong>Divide:</strong> \( x=\dfrac{\log 20}{\log 3}=\dfrac{1.30103}{0.47712} \).</div>
      <em>Conclusion: \( x\approx2.727 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Shifted exponent</h3>
    <p>Solve \( 2^{\,x+1}=7 \).</p>
    <div class="solution">
      <div class="step"><strong>Take logs:</strong> \( (x+1)\log 2=\log 7 \).</div>
      <div class="step"><strong>Isolate:</strong> \( x+1=\dfrac{\log 7}{\log 2}\approx2.807 \).</div>
      <em>Conclusion: \( x\approx1.807 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Isolate the power first</h3>
    <p>Solve \( 4\cdot3^{x}=100 \).</p>
    <div class="solution">
      <div class="step"><strong>Isolate:</strong> \( 3^{x}=25 \).</div>
      <div class="step"><strong>Take logs:</strong> \( x=\dfrac{\log 25}{\log 3}=\dfrac{1.39794}{0.47712} \).</div>
      <em>Conclusion: \( x\approx2.930 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Base 10 and base \( e \)</h3>
    <p>Solve \( e^{\,2x}=15 \).</p>
    <div class="solution">
      <div class="step"><strong>Take \( \ln \):</strong> \( 2x=\ln 15\approx2.708 \).</div>
      <div class="step"><strong>Divide:</strong> \( x=\dfrac{\ln 15}{2} \).</div>
      <em>Conclusion: \( x\approx1.354 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: An applied equation</h3>
    <p>An investment grows as \( 1000(1.05)^{t} \). When does it reach \( 2000 \)?</p>
    <div class="solution">
      <div class="step"><strong>Set up:</strong> \( 1000(1.05)^{t}=2000\Rightarrow (1.05)^{t}=2 \).</div>
      <div class="step"><strong>Take logs:</strong> \( t=\dfrac{\log 2}{\log 1.05}=\dfrac{0.30103}{0.021189} \).</div>
      <em>Conclusion: \( t\approx14.2 \) years. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Solve \( 2^{x}=13 \) to three decimals.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x=\dfrac{\log 13}{\log 2} \). <em>Answer: \( \approx3.700 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \( 5^{x}=200 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x=\dfrac{\log 200}{\log 5} \). <em>Answer: \( \approx3.292 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Solve \( 3^{\,x-2}=50 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x-2=\dfrac{\log 50}{\log 3}\approx3.561 \). <em>Answer: \( \approx5.561 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( e^{x}=8 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x=\ln 8 \). <em>Answer: \( \approx2.079 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A colony \( 200(1.08)^{t} \) reaches \( 1000 \). Find \( t \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (1.08)^{t}=5\Rightarrow t=\dfrac{\log 5}{\log 1.08}\approx20.9 \). <em>Answer: \( \approx20.9 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Taking logs before isolating the power — clear coefficients first.</li>
    <li>Writing \( \dfrac{\log 20}{\log 3}=\log\tfrac{20}{3} \). Division of logs is <strong>not</strong> a quotient law.</li>
    <li>Forgetting to undo a shift after solving for the exponent expression.</li>
    <li>Rounding too early — keep decimals until the final step.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Why take logs?</h3><p><em>The power law drops the variable out of the exponent.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Base 10 or base \( e \)?</h3><p><em>Either works; use \( \ln \) when the base is \( e \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Is \( \tfrac{\log k}{\log b} \) a quotient law?</h3><p><em>No — it is the result of dividing, not \( \log\tfrac{k}{b} \).</em></p></div>
</div>`)] },

  // ── 1.8 Growth, Decay & Compound Interest ───────────────────
  "1.8": { code: "1.8", title: "Growth, Decay & Compound Interest", blocks: [html(String.raw`<div class="lecture-box">
  <h1>💹 Growth, Decay &amp; Compound Interest</h1>
  <p><strong>Overview.</strong> Exponentials are the mathematics of anything that changes by a fixed <em>percentage</em> per period — populations, radioactive samples, and money. Build a model \( A=A_0\,b^{t} \), read off doubling time and half-life, and compute compound interest.</p>

  <h2>📌 Growth and Decay Models</h2>
  <p>\( A=A_0\,b^{t} \), where \( A_0 \) is the initial amount and \( b \) is the per-period factor: \( b=1+r \) for growth at rate \( r \), and \( b=1-r \) for decay. <strong>Half-life</strong> uses \( A=A_0\left(\tfrac12\right)^{t/h} \); <strong>doubling</strong> uses \( A=A_0\,2^{\,t/D} \).</p>

  <h2>📌 Compound Interest</h2>
  <p>\( A=P(1+i)^{n} \), where \( P \) is the principal, \( i \) the interest rate per compounding period, and \( n \) the number of periods.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Population growth</h3>
    <p>A town of \( 500 \) grows \( 3\% \) per year: \( P=500(1.03)^{t} \). Find the population after \( 10 \) years.</p>
    <div class="solution">
      <div class="step"><strong>Substitute:</strong> \( P=500(1.03)^{10} \).</div>
      <div class="step"><strong>Evaluate:</strong> \( (1.03)^{10}\approx1.3439 \), so \( P\approx671.96 \).</div>
      <em>Conclusion: about \( 672 \) people. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Half-life</h3>
    <p>A \( 80 \) mg sample has a half-life of \( 6 \) hours. Model it and find the amount after \( 18 \) hours.</p>
    <div class="solution">
      <div class="step"><strong>Model:</strong> \( A=80\left(\tfrac12\right)^{t/6} \).</div>
      <div class="step"><strong>At \( t=18 \):</strong> \( 80\left(\tfrac12\right)^{3}=80\cdot\tfrac18=10 \).</div>
      <em>Conclusion: \( 10 \) mg remain. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Compound interest</h3>
    <p>\( \$2000 \) is invested at \( 4\% \) per year, compounded annually, for \( 5 \) years. Find the amount.</p>
    <div class="solution">
      <div class="step"><strong>Model:</strong> \( A=2000(1.04)^{5} \).</div>
      <div class="step"><strong>Evaluate:</strong> \( (1.04)^{5}\approx1.21665 \).</div>
      <em>Conclusion: \( A\approx\$2433.31 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Doubling time</h3>
    <p>Money grows at \( 6\% \) per year. How long to double?</p>
    <div class="solution">
      <div class="step"><strong>Set up:</strong> \( (1.06)^{t}=2 \).</div>
      <div class="step"><strong>Take logs:</strong> \( t=\dfrac{\log 2}{\log 1.06}=\dfrac{0.30103}{0.025306} \).</div>
      <em>Conclusion: \( t\approx11.9 \) years. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Decay to a target</h3>
    <p>A substance decays \( 5\% \) per year: \( A=A_0(0.95)^{t} \). When is \( 50\% \) left?</p>
    <div class="solution">
      <div class="step"><strong>Set up:</strong> \( (0.95)^{t}=0.5 \).</div>
      <div class="step"><strong>Take logs:</strong> \( t=\dfrac{\log 0.5}{\log 0.95}=\dfrac{-0.30103}{-0.022276} \).</div>
      <em>Conclusion: \( t\approx13.5 \) years. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( \$1500 \) at \( 5\% \)/yr compounded annually for \( 4 \) years — find the amount.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1500(1.05)^{4}=1500(1.21551) \). <em>Answer: \( \approx\$1823.26 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A \( 60 \) mg sample, half-life \( 4 \) h — how much after \( 12 \) h?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 60\left(\tfrac12\right)^{3}=7.5 \). <em>Answer: \( 7.5 \) mg.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>A population \( 800(1.02)^{t} \) — find it after \( 15 \) years.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 800(1.02)^{15}=800(1.3459) \). <em>Answer: \( \approx1077 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Money at \( 8\% \)/yr — how long to double?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( t=\dfrac{\log 2}{\log 1.08}\approx9.0 \). <em>Answer: \( \approx9.0 \) years.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A car worth \( \$30\,000 \) depreciates \( 12\% \)/yr. When is it worth \( \$15\,000 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (0.88)^{t}=0.5\Rightarrow t=\dfrac{\log 0.5}{\log 0.88}\approx5.4 \). <em>Answer: \( \approx5.4 \) years.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using \( b=r \) instead of \( b=1+r \) (growth) or \( b=1-r \) (decay).</li>
    <li>Confusing the number of periods with years when compounding is not annual.</li>
    <li>For half-life, forgetting the exponent is \( t/h \), not \( t \).</li>
    <li>Reading a \( 12\% \) <em>decline</em> as \( b=0.12 \) instead of \( 0.88 \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Growth vs. decay factor?</h3><p><em>\( b=1+r \) grows; \( b=1-r \) decays.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I find doubling time / half-life?</h3><p><em>Set the model equal to \( 2A_0 \) or \( \tfrac12A_0 \) and solve with logs.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is compound interest?</h3><p><em>\( A=P(1+i)^n \), with \( i \) per period and \( n \) periods.</em></p></div>
</div>`)] },

  // ── 2.1 Polynomial Expressions & Functions ──────────────────
  "2.1": { code: "2.1", title: "Polynomial Expressions & Functions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>➕ Polynomial Expressions &amp; Functions</h1>
  <p><strong>Overview.</strong> A <strong>polynomial</strong> is a sum of terms, each a real coefficient times a power of \( x \) with a <strong>whole-number</strong> exponent — like \( x^3-5x^2+2x-1 \). This lesson names their parts: degree, leading coefficient, and standard form, and treats familiar lines and parabolas as low-degree polynomials.</p>

  <h2>📌 What Counts as a Polynomial</h2>
  <p>Exponents must be non-negative integers. So \( 2^{x} \) (variable exponent), \( \sqrt{x}=x^{1/2} \) (fractional), and \( \tfrac{4}{x}=4x^{-1} \) (negative) are <strong>not</strong> polynomials.</p>

  <h2>📌 Degree, Leading Coefficient, Standard Form</h2>
  <p>The <strong>degree</strong> is the highest exponent; the <strong>leading coefficient</strong> multiplies that term. <strong>Standard form</strong> lists terms from highest to lowest degree. Lines are degree 1; parabolas are degree 2.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Identify polynomials</h3>
    <p>Which are polynomials? (a) \( x^3-5x^2+2x-1 \); (b) \( 2^{x} \); (c) \( \sqrt{x}+3 \); (d) \( 4x^{-2}+x \).</p>
    <div class="solution">
      <div class="step"><strong>(a)</strong> whole-number exponents — yes.</div>
      <div class="step"><strong>(b)</strong> variable exponent — no. <strong>(c)</strong> \( x^{1/2} \) — no. <strong>(d)</strong> \( x^{-2} \) — no.</div>
      <em>Conclusion: only (a) is a polynomial. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Degree and leading coefficient</h3>
    <p>State the degree and leading coefficient of \( -4x^{5}+2x^{3}-7 \).</p>
    <div class="solution">
      <div class="step"><strong>Highest power:</strong> \( x^5 \), so degree \( 5 \).</div>
      <div class="step"><strong>Its coefficient:</strong> \( -4 \).</div>
      <em>Conclusion: degree \( 5 \), leading coefficient \( -4 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Evaluating with function notation</h3>
    <p>For \( P(x)=2x^{3}-x+5 \), find \( P(2) \) and \( P(-1) \).</p>
    <div class="solution">
      <div class="step"><strong>\( P(2) \):</strong> \( 2(8)-2+5=16-2+5=19 \).</div>
      <div class="step"><strong>\( P(-1) \):</strong> \( 2(-1)-(-1)+5=-2+1+5=4 \).</div>
      <em>Conclusion: \( P(2)=19,\ P(-1)=4 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Standard form</h3>
    <p>Write \( 3x-5x^{4}+2-x^{2} \) in standard form.</p>
    <div class="solution">
      <div class="step"><strong>Order by degree:</strong> \( -5x^{4}-x^{2}+3x+2 \).</div>
      <em>Conclusion: \( -5x^{4}-x^{2}+3x+2 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Classify</h3>
    <p>Classify \( 4x^{3}-2x+7 \) by degree and number of terms.</p>
    <div class="solution">
      <div class="step"><strong>Degree 3:</strong> cubic. <strong>Three terms:</strong> trinomial.</div>
      <em>Conclusion: a cubic trinomial. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Is \( 3x^{2}-\tfrac{1}{x} \) a polynomial?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac1x=x^{-1} \). <em>Answer: no.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Degree and leading coefficient of \( 6-2x^{3}+x^{7} \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: degree \( 7 \), leading coefficient \( 1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>For \( P(x)=x^{3}-2x^{2}+4 \), find \( P(3) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 27-18+4=13 \). <em>Answer: \( 13 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Write \( 2x-x^{3}+5 \) in standard form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( -x^{3}+2x+5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>For \( P(x)=x^{4}-3x^{2}+2x \), find \( P(-2) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 16-12-4=0 \). <em>Answer: \( 0 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Calling \( \sqrt{x} \) or \( \tfrac1x \) polynomial terms — the exponents aren't whole numbers.</li>
    <li>Confusing degree (highest exponent) with the number of terms.</li>
    <li>Sign errors when evaluating negative inputs in odd powers.</li>
    <li>Leaving standard form out of order.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What makes an expression a polynomial?</h3><p><em>Whole-number exponents and real coefficients only.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is the degree?</h3><p><em>The highest exponent on the variable.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is standard form?</h3><p><em>Terms written from highest to lowest degree.</em></p></div>
</div>`)] },

  // ── 2.2 Graphs of Polynomial Functions ──────────────────────
  "2.2": { code: "2.2", title: "Graphs of Polynomial Functions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📉 Graphs of Polynomial Functions</h1>
  <p><strong>Overview.</strong> Before plotting a single point you can predict a polynomial's <strong>end behaviour</strong> from its degree (even or odd) and the sign of its leading coefficient — and bound how many times it can cross the \( x \)-axis or turn.</p>

  <h2>📌 End Behaviour</h2>
  <ul>
    <li><strong>Even degree:</strong> both ends go the <em>same</em> way — up if the leading coefficient is \( + \), down if \( - \).</li>
    <li><strong>Odd degree:</strong> ends go <em>opposite</em> ways — up-right/down-left if \( + \); reversed if \( - \).</li>
  </ul>

  <h2>📌 Intercepts and Turning Points</h2>
  <p>A degree-\( n \) polynomial has at most \( n \) real \( x \)-intercepts and at most \( n-1 \) turning points.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Odd degree, positive leading coefficient</h3>
    <p>Describe the end behaviour of \( y=2x^{3}-5x+1 \).</p>
    <div class="solution">
      <div class="step"><strong>Odd degree, \( +\) leading:</strong> falls to the left, rises to the right.</div>
      <em>Conclusion: down-left, up-right. ✓</em>
    </div>
    ` + gframe(["y = x^3 - 3*x"], { title: "A cubic (odd degree, + leading): down-left, up-right", zoom: 90, zoomY: 40, ox: 0, oy: 0 }) + `
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Even degree, negative leading coefficient</h3>
    <p>Describe the end behaviour of \( y=-x^{4}+3x^{2} \).</p>
    <div class="solution">
      <div class="step"><strong>Even degree, \( -\) leading:</strong> both ends point down.</div>
      <em>Conclusion: down on both ends. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Counting intercepts and turns</h3>
    <p>What is the maximum number of \( x \)-intercepts and turning points of a quartic?</p>
    <div class="solution">
      <div class="step"><strong>Degree 4:</strong> up to \( 4 \) \( x \)-intercepts and up to \( 3 \) turning points.</div>
      <em>Conclusion: at most \( 4 \) intercepts, \( 3 \) turns. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Reason from the graph</h3>
    <p>A polynomial rises on <em>both</em> ends. What can you conclude about its degree and leading coefficient?</p>
    <div class="solution">
      <div class="step"><strong>Both ends same way (up):</strong> even degree, positive leading coefficient.</div>
      <em>Conclusion: even degree, \( +\) leading coefficient. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Degree 5, negative leading coefficient</h3>
    <p>Describe the end behaviour of \( y=-x^{5}+2x^{2} \).</p>
    <div class="solution">
      <div class="step"><strong>Odd degree, \( -\) leading:</strong> rises to the left, falls to the right.</div>
      <em>Conclusion: up-left, down-right. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>End behaviour of \( y=x^{4}-2x^{2} \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: up on both ends.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>End behaviour of \( y=-2x^{3}+x \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: up-left, down-right.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Max number of \( x \)-intercepts of a cubic?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>A graph falls on both ends. Degree and leading sign?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: even degree, negative leading coefficient.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Max turning points of a degree-6 polynomial?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 5 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Mixing up even/odd end behaviour — even degree matches ends, odd degree opposes them.</li>
    <li>Ignoring the sign of the leading coefficient.</li>
    <li>Claiming a degree-\( n \) graph must have \( n \) intercepts — that's the maximum, not a requirement.</li>
    <li>Confusing turning points with intercepts.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What sets end behaviour?</h3><p><em>Degree parity and the leading coefficient's sign.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How many intercepts can there be?</h3><p><em>At most the degree.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How many turning points?</h3><p><em>At most one less than the degree.</em></p></div>
</div>`)] },

  // ── 2.3 Factored Form & Zeros ───────────────────────────────
  "2.3": { code: "2.3", title: "Factored Form & Zeros", blocks: [html(String.raw`<div class="lecture-box">
  <h1>✖️ Factored Form &amp; Zeros</h1>
  <p><strong>Overview.</strong> Factored form is the most graph-friendly way to write a polynomial: each factor \( (x-r) \) names a <strong>zero</strong> (an \( x \)-intercept), and the exponent on that factor — its <strong>multiplicity</strong> — tells you whether the graph crosses or just touches.</p>

  <h2>📌 Factors, Zeros, Multiplicity</h2>
  <p>\( (x-r) \) a factor \(\Rightarrow\) \( x=r \) is a zero. <strong>Odd</strong> multiplicity \(\Rightarrow\) the graph <em>crosses</em> the axis; <strong>even</strong> multiplicity \(\Rightarrow\) it <em>touches</em> and turns back. Higher odd multiplicity flattens as it crosses.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Read the zeros</h3>
    <p>State the zeros of \( y=(x-2)(x+3)(x-1) \).</p>
    <div class="solution">
      <div class="step"><strong>Set each factor to 0:</strong> \( x=2,\ x=-3,\ x=1 \).</div>
      <em>Conclusion: zeros at \( 2,-3,1 \). ✓</em>
    </div>
    ` + gframe(["y = (x-1)^2*(x+2)"], { title: "y = (x−1)²(x+2): touches at x = 1 (even), crosses at x = −2 (odd)", zoom: 80, zoomY: 34, ox: 0, oy: 20 }) + `
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Multiplicity</h3>
    <p>Describe the behaviour of \( y=(x-1)^{2}(x+2) \) at each zero.</p>
    <div class="solution">
      <div class="step"><strong>\( x=1 \), multiplicity 2 (even):</strong> the graph touches and turns.</div>
      <div class="step"><strong>\( x=-2 \), multiplicity 1 (odd):</strong> the graph crosses.</div>
      <em>Conclusion: touch at \( 1 \), cross at \( -2 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Build from zeros</h3>
    <p>Write a cubic with zeros \( -1,2,3 \).</p>
    <div class="solution">
      <div class="step"><strong>One factor per zero:</strong> \( y=a(x+1)(x-2)(x-3) \).</div>
      <em>Conclusion: \( y=a(x+1)(x-2)(x-3) \) for any \( a\ne0 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Find the leading coefficient</h3>
    <p>The cubic above passes through \( (0,12) \). Find \( a \).</p>
    <div class="solution">
      <div class="step"><strong>Substitute \( (0,12) \):</strong> \( 12=a(1)(-2)(-3)=6a \).</div>
      <div class="step"><strong>Solve:</strong> \( a=2 \).</div>
      <em>Conclusion: \( y=2(x+1)(x-2)(x-3) \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: A triple root</h3>
    <p>Describe \( y=x(x-2)^{3} \) at each zero.</p>
    <div class="solution">
      <div class="step"><strong>\( x=0 \), multiplicity 1:</strong> crosses normally.</div>
      <div class="step"><strong>\( x=2 \), multiplicity 3 (odd):</strong> crosses but <em>flattens</em> through the axis.</div>
      <em>Conclusion: cross at \( 0 \); flatten-and-cross at \( 2 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Zeros of \( y=(x+4)(x-5) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( -4,\ 5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>At \( x=3 \), does \( y=(x-3)^{2}(x+1) \) cross or touch?</p><details><summary>View answer</summary><div class="solution"><div class="step">Even multiplicity. <em>Answer: touches.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Write a quadratic with zeros \( 2 \) and \( -5 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y=a(x-2)(x+5) \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>A cubic has zeros \( 0,1,-2 \) and passes \( (2,8) \). Find \( a \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 8=a(2)(1)(4)=8a\Rightarrow a=1 \). <em>Answer: \( a=1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>How does \( y=(x+1)^{4} \) behave at \( x=-1 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Even multiplicity 4. <em>Answer: touches (and flattens) — does not cross.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Reading the zero of \( (x-2) \) as \( -2 \) instead of \( 2 \).</li>
    <li>Assuming every zero is a crossing — even multiplicity means a touch.</li>
    <li>Forgetting the leading coefficient \( a \) when building an equation.</li>
    <li>Miscounting multiplicity from the exponent on a factor.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do factors relate to zeros?</h3><p><em>\( (x-r) \) means \( x=r \) is a zero (an \( x \)-intercept).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Cross or touch?</h3><p><em>Odd multiplicity crosses; even multiplicity touches.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I find \( a \)?</h3><p><em>Substitute a known point into the factored form and solve.</em></p></div>
</div>`)] },

  // ── 2.4 Dividing Polynomials ────────────────────────────────
  "2.4": { code: "2.4", title: "Dividing Polynomials", blocks: [html(String.raw`<div class="lecture-box">
  <h1>➗ Dividing Polynomials</h1>
  <p><strong>Overview.</strong> Dividing rewrites a polynomial as \( P(x)=D(x)\,Q(x)+R \): divisor times quotient plus remainder. <strong>Long division</strong> works for any divisor; <strong>synthetic division</strong> is a fast shortcut when the divisor is \( x-a \).</p>

  <h2>📌 Synthetic Division (divisor \( x-a \))</h2>
  <p>Write the coefficients (including zeros for missing terms), bring down the first, then repeatedly multiply by \( a \) and add. The last number is the remainder; the rest are the quotient's coefficients.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Long division</h3>
    <p>Divide \( (x^{3}-2x^{2}-5x+6)\div(x-1) \).</p>
    <div class="solution">
      <div class="step"><strong>Divide term by term:</strong> \( x^{3}\div x=x^{2} \); subtract to get \( -x^{2}-5x \); then \( -x \); then \( -6 \).</div>
      <div class="step"><strong>Result:</strong> quotient \( x^{2}-x-6 \), remainder \( 0 \).</div>
      <em>Conclusion: \( x^{2}-x-6 \), R \( 0 \) (so \( x-1 \) is a factor). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Synthetic division (same problem)</h3>
    <p>Redo \( (x^{3}-2x^{2}-5x+6)\div(x-1) \) synthetically.</p>
    <div class="solution">
      <div class="step"><strong>Use \( a=1 \) on \( 1,-2,-5,6 \):</strong> bring \( 1 \); \( 1,-1,-6 \); last add \( 6+(-6)=0 \).</div>
      <div class="step"><strong>Read off:</strong> quotient \( x^{2}-x-6 \), remainder \( 0 \).</div>
      <em>Conclusion: matches the long division. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: A non-zero remainder</h3>
    <p>Divide \( (2x^{3}+3x^{2}-1)\div(x+2) \).</p>
    <div class="solution">
      <div class="step"><strong>Coefficients (fill the missing \( x \)):</strong> \( 2,3,0,-1 \), with \( a=-2 \).</div>
      <div class="step"><strong>Synthetic:</strong> \( 2,\ -1,\ 2,\ -5 \) — quotient \( 2x^{2}-x+2 \), remainder \( -5 \).</div>
      <em>Conclusion: \( 2x^{2}-x+2 \), R \( -5 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Dividing to find a factor</h3>
    <p>Divide \( (x^{3}-7x-6)\div(x+1) \).</p>
    <div class="solution">
      <div class="step"><strong>Coefficients:</strong> \( 1,0,-7,-6 \), \( a=-1 \).</div>
      <div class="step"><strong>Synthetic:</strong> \( 1,-1,-6,0 \) — quotient \( x^{2}-x-6 \), remainder \( 0 \).</div>
      <em>Conclusion: \( x^{2}-x-6 \), R \( 0 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Write the identity</h3>
    <p>Using Example 3, write \( 2x^{3}+3x^{2}-1 \) in the form \( D(x)Q(x)+R \).</p>
    <div class="solution">
      <div class="step"><strong>Assemble:</strong> \( 2x^{3}+3x^{2}-1=(x+2)(2x^{2}-x+2)-5 \).</div>
      <em>Conclusion: verified identity. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Divide \( (x^{2}+5x+6)\div(x+2) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( x+3 \), R \( 0 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Divide \( (x^{3}-1)\div(x-1) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Coefficients \( 1,0,0,-1 \), \( a=1 \). <em>Answer: \( x^{2}+x+1 \), R \( 0 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Divide \( (x^{3}+2x^{2}-3)\div(x-1) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1,3,3,0 \). <em>Answer: \( x^{2}+3x+3 \), R \( 0 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Divide \( (2x^{2}-3x+1)\div(x-2) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2, 1, 3 \). <em>Answer: \( 2x+1 \), R \( 3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Divide \( (x^{4}-16)\div(x-2) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1,0,0,0,-16 \), \( a=2 \): \( 1,2,4,8,0 \). <em>Answer: \( x^{3}+2x^{2}+4x+8 \), R \( 0 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Forgetting to insert \( 0 \) coefficients for missing terms.</li>
    <li>Using \( a \) with the wrong sign — for \( x+2 \), use \( a=-2 \).</li>
    <li>Misreading the last synthetic number as a quotient coefficient instead of the remainder.</li>
    <li>Dropping the quotient's degree by one — it is one less than \( P \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does division produce?</h3><p><em>\( P(x)=D(x)Q(x)+R \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: When can I use synthetic division?</h3><p><em>When the divisor is \( x-a \) (linear, leading coefficient 1).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Where is the remainder?</h3><p><em>The last number in the synthetic row.</em></p></div>
</div>`)] },

  // ── 2.5 The Remainder Theorem ───────────────────────────────
  "2.5": { code: "2.5", title: "The Remainder Theorem", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧾 The Remainder Theorem</h1>
  <p><strong>Overview.</strong> The <strong>Remainder Theorem</strong> says the remainder when \( P(x) \) is divided by \( x-a \) is simply \( P(a) \). That turns division into a single substitution — perfect for checking factors and finding unknown coefficients.</p>

  <h2>📌 The Theorem</h2>
  <p>Remainder of \( P(x)\div(x-a) \) equals \( P(a) \). (For a divisor \( bx-a \), evaluate at \( x=\tfrac{a}{b} \).)</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Remainder by substitution</h3>
    <p>Find the remainder of \( (x^{3}-4x+1)\div(x-2) \).</p>
    <div class="solution">
      <div class="step"><strong>Evaluate \( P(2) \):</strong> \( 8-8+1=1 \).</div>
      <em>Conclusion: remainder \( 1 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: A negative divisor value</h3>
    <p>Find the remainder of \( (x^{3}-4x+1)\div(x+3) \).</p>
    <div class="solution">
      <div class="step"><strong>Evaluate \( P(-3) \):</strong> \( -27+12+1=-14 \).</div>
      <em>Conclusion: remainder \( -14 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Find an unknown coefficient</h3>
    <p>When \( P(x)=x^{3}+kx-6 \) is divided by \( x-2 \), the remainder is \( 4 \). Find \( k \).</p>
    <div class="solution">
      <div class="step"><strong>Set \( P(2)=4 \):</strong> \( 8+2k-6=4 \).</div>
      <div class="step"><strong>Solve:</strong> \( 2+2k=4\Rightarrow k=1 \).</div>
      <em>Conclusion: \( k=1 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: A linear divisor \( 2x-1 \)</h3>
    <p>Find the remainder of \( (2x^{3}-3x^{2}+1)\div(2x-1) \).</p>
    <div class="solution">
      <div class="step"><strong>Evaluate at \( x=\tfrac12 \):</strong> \( 2\cdot\tfrac18-3\cdot\tfrac14+1=\tfrac14-\tfrac34+1 \).</div>
      <em>Conclusion: remainder \( \tfrac12 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Fast evaluation</h3>
    <p>Use the theorem to evaluate \( P(-1) \) for \( P(x)=x^{3}+2x^{2}-x+5 \).</p>
    <div class="solution">
      <div class="step"><strong>Substitute:</strong> \( -1+2+1+5=7 \).</div>
      <em>Conclusion: \( P(-1)=7 \) (the remainder on dividing by \( x+1 \)). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Remainder of \( (x^{2}+3x-2)\div(x-1) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( P(1)=2 \). <em>Answer: \( 2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Remainder of \( (x^{3}-2x+4)\div(x+2) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( P(-2)=-8+4+4=0 \). <em>Answer: \( 0 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( P(x)=x^{3}+ax+2 \) leaves remainder \( 8 \) on \( \div(x-1) \). Find \( a \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1+a+2=8\Rightarrow a=5 \). <em>Answer: \( a=5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Remainder of \( (x^{4}-1)\div(x-1) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( P(1)=0 \). <em>Answer: \( 0 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Remainder of \( (3x^{3}-x+2)\div(3x-1) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x=\tfrac13 \): \( 3\cdot\tfrac1{27}-\tfrac13+2=\tfrac19-\tfrac39+\tfrac{18}9=\tfrac{16}9 \). <em>Answer: \( \tfrac{16}{9} \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using \( P(a) \) with the wrong sign — for \( x+3 \), evaluate at \( -3 \).</li>
    <li>Forgetting to divide by the leading coefficient for divisors like \( 2x-1 \) (use \( x=\tfrac12 \)).</li>
    <li>Confusing the remainder with the quotient.</li>
    <li>Arithmetic slips in high powers of negatives.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is the remainder on \( \div(x-a) \)?</h3><p><em>\( P(a) \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I find an unknown coefficient?</h3><p><em>Set \( P(a) \) equal to the given remainder and solve.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What about \( bx-a \)?</h3><p><em>Evaluate at \( x=\tfrac{a}{b} \).</em></p></div>
</div>`)] },

  // ── 2.6 The Factor Theorem ──────────────────────────────────
  "2.6": { code: "2.6", title: "The Factor Theorem", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔑 The Factor Theorem</h1>
  <p><strong>Overview.</strong> The <strong>Factor Theorem</strong> is the special case of the Remainder Theorem where the remainder is zero: \( x-a \) is a factor of \( P(x) \) exactly when \( P(a)=0 \). Test the divisors of the constant term to find a first factor, then divide to factor completely.</p>

  <h2>📌 The Theorem &amp; the Search</h2>
  <p>\( x-a \) is a factor \(\Leftrightarrow P(a)=0 \). Possible integer zeros are the factors of the constant term (\( \pm1,\pm2,\dots \)). Find one, divide it out, and factor the leftover quadratic.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Test a factor</h3>
    <p>Is \( x-2 \) a factor of \( x^{3}-3x^{2}+4 \)?</p>
    <div class="solution">
      <div class="step"><strong>Evaluate \( P(2) \):</strong> \( 8-12+4=0 \).</div>
      <em>Conclusion: yes, \( x-2 \) is a factor. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Factor completely</h3>
    <p>Fully factor \( x^{3}-3x^{2}+4 \).</p>
    <div class="solution">
      <div class="step"><strong>Divide by \( x-2 \):</strong> quotient \( x^{2}-x-2 \).</div>
      <div class="step"><strong>Factor the quadratic:</strong> \( x^{2}-x-2=(x-2)(x+1) \).</div>
      <em>Conclusion: \( (x-2)^{2}(x+1) \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Find the first zero, then factor</h3>
    <p>Factor \( x^{3}+2x^{2}-5x-6 \).</p>
    <div class="solution">
      <div class="step"><strong>Test \( x=-1 \):</strong> \( -1+2+5-6=0 \) — factor \( x+1 \).</div>
      <div class="step"><strong>Divide:</strong> quotient \( x^{2}+x-6=(x+3)(x-2) \).</div>
      <em>Conclusion: \( (x+1)(x+3)(x-2) \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: List and test candidates</h3>
    <p>Factor \( x^{3}-4x^{2}+x+6 \).</p>
    <div class="solution">
      <div class="step"><strong>Candidates:</strong> \( \pm1,\pm2,\pm3,\pm6 \). Test \( x=-1 \): \( -1-4-1+6=0 \) — factor \( x+1 \).</div>
      <div class="step"><strong>Divide:</strong> quotient \( x^{2}-5x+6=(x-2)(x-3) \).</div>
      <em>Conclusion: \( (x+1)(x-2)(x-3) \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: A quartic</h3>
    <p>Factor \( x^{4}-1 \).</p>
    <div class="solution">
      <div class="step"><strong>Difference of squares:</strong> \( (x^{2}-1)(x^{2}+1) \).</div>
      <div class="step"><strong>Factor again:</strong> \( (x-1)(x+1)(x^{2}+1) \) (the last is irreducible over the reals).</div>
      <em>Conclusion: \( (x-1)(x+1)(x^{2}+1) \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Is \( x-1 \) a factor of \( x^{3}-1 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( P(1)=0 \). <em>Answer: yes.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Factor \( x^{3}-x \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x(x^{2}-1)=x(x-1)(x+1) \). <em>Answer: \( x(x-1)(x+1) \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Factor \( x^{3}-2x^{2}-x+2 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x=1 \) works; quotient \( x^{2}-x-2 \). <em>Answer: \( (x-1)(x-2)(x+1) \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Factor \( x^{3}+3x^{2}-4 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x=1 \) works; quotient \( x^{2}+4x+4 \). <em>Answer: \( (x-1)(x+2)^{2} \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Factor \( 2x^{3}-3x^{2}-11x+6 \) given \( x=3 \) is a zero.</p><details><summary>View answer</summary><div class="solution"><div class="step">Divide by \( x-3 \): quotient \( 2x^{2}+3x-2=(2x-1)(x+2) \). <em>Answer: \( (x-3)(2x-1)(x+2) \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Concluding \( x-a \) is a factor when \( P(a)\ne0 \).</li>
    <li>Testing only positive candidates — try the negatives too.</li>
    <li>Stopping after one factor instead of factoring completely.</li>
    <li>Trying to factor \( x^{2}+1 \) over the reals (it doesn't).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When is \( x-a \) a factor?</h3><p><em>When \( P(a)=0 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Where do candidate zeros come from?</h3><p><em>The factors of the constant term.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What after finding one factor?</h3><p><em>Divide it out and factor the remaining quadratic.</em></p></div>
</div>`)] },

  // ── 2.7 Solving Polynomial Equations ────────────────────────
  "2.7": { code: "2.7", title: "Solving Polynomial Equations", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎯 Solving Polynomial Equations</h1>
  <p><strong>Overview.</strong> To solve a polynomial equation, set it to zero, factor completely (degree four or less), and apply the <strong>zero-product property</strong>: a product is zero only when a factor is zero. Each factor gives a real root, and repeated factors give repeated roots.</p>

  <h2>📌 The Strategy</h2>
  <p>Move everything to one side; take out a common factor; use the Factor Theorem for a first zero; factor the leftover; then read the roots. Watch for a hidden "quadratic in \( x^2 \)."</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Repeated root</h3>
    <p>Solve \( x^{3}-3x^{2}+4=0 \).</p>
    <div class="solution">
      <div class="step"><strong>Factor:</strong> \( (x-2)^{2}(x+1)=0 \).</div>
      <div class="step"><strong>Zero-product:</strong> \( x=2 \) (double) or \( x=-1 \).</div>
      <em>Conclusion: \( x=2,\ 2,\ -1 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Three distinct roots</h3>
    <p>Solve \( x^{3}+2x^{2}-5x-6=0 \).</p>
    <div class="solution">
      <div class="step"><strong>Factor:</strong> \( (x+1)(x+3)(x-2)=0 \).</div>
      <em>Conclusion: \( x=-1,\ -3,\ 2 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Quadratic in \( x^{2} \)</h3>
    <p>Solve \( x^{4}-5x^{2}+4=0 \).</p>
    <div class="solution">
      <div class="step"><strong>Factor as a quadratic:</strong> \( (x^{2}-1)(x^{2}-4)=0 \).</div>
      <div class="step"><strong>Solve each:</strong> \( x^{2}=1 \) or \( x^{2}=4 \).</div>
      <em>Conclusion: \( x=\pm1,\ \pm2 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Factor by grouping</h3>
    <p>Solve \( 2x^{3}-x^{2}-8x+4=0 \).</p>
    <div class="solution">
      <div class="step"><strong>Group:</strong> \( x^{2}(2x-1)-4(2x-1)=(2x-1)(x^{2}-4) \).</div>
      <div class="step"><strong>Factor and solve:</strong> \( (2x-1)(x-2)(x+2)=0 \).</div>
      <em>Conclusion: \( x=\tfrac12,\ 2,\ -2 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Common factor first</h3>
    <p>Solve \( x^{3}-4x=0 \).</p>
    <div class="solution">
      <div class="step"><strong>Common factor:</strong> \( x(x^{2}-4)=0 \).</div>
      <div class="step"><strong>Factor and solve:</strong> \( x(x-2)(x+2)=0 \).</div>
      <em>Conclusion: \( x=0,\ 2,\ -2 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Solve \( (x-3)(x+4)=0 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( x=3,\ -4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \( x^{3}-9x=0 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x(x-3)(x+3)=0 \). <em>Answer: \( x=0,\ 3,\ -3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Solve \( x^{3}-2x^{2}-x+2=0 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (x-1)(x-2)(x+1)=0 \). <em>Answer: \( x=1,\ 2,\ -1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( x^{4}-13x^{2}+36=0 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (x^{2}-4)(x^{2}-9)=0 \). <em>Answer: \( x=\pm2,\ \pm3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Solve \( x^{3}-x^{2}-4x+4=0 \) by grouping.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x^{2}(x-1)-4(x-1)=(x-1)(x^{2}-4) \). <em>Answer: \( x=1,\ 2,\ -2 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Solving without moving everything to one side first.</li>
    <li>Cancelling a variable factor and losing the root \( x=0 \).</li>
    <li>Forgetting the \( \pm \) when solving \( x^{2}=k \).</li>
    <li>Stopping at a quadratic factor instead of finding all real roots.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is the zero-product property?</h3><p><em>A product is zero only when a factor is zero.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do repeated factors show up?</h3><p><em>As repeated (double, triple) roots.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is a "quadratic in \( x^2 \)"?</h3><p><em>An equation like \( x^4-5x^2+4=0 \) that factors like a quadratic in \( x^2 \).</em></p></div>
</div>`)] },

  // ── 2.8 Applications of Polynomial Functions ────────────────
  "2.8": { code: "2.8", title: "Applications of Polynomial Functions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🏗️ Applications of Polynomial Functions</h1>
  <p><strong>Overview.</strong> Boxes, projectiles, profit, and beams all lead to polynomial equations. The workflow is: build a model from the situation, set up the equation, solve by factoring, and keep only solutions that make physical sense.</p>

  <h2>📌 The Modelling Cycle</h2>
  <p>Translate the words into a polynomial (often a volume or height), set it equal to a target, solve, and check each root against the domain (e.g. lengths must be positive).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Open-top box</h3>
    <p>Squares of side \( x \) are cut from the corners of a \( 12\times12 \) sheet and the sides folded up. For what \( x \) is the volume \( 128 \)?</p>
    <div class="solution">
      <div class="step"><strong>Model:</strong> \( V=x(12-2x)^{2} \), with \( 0<x<6 \).</div>
      <div class="step"><strong>Test \( x=2 \):</strong> \( 2(8)^{2}=2\cdot64=128 \). ✓</div>
      <em>Conclusion: \( x=2 \) cm gives a \( 2\times8\times8 \) box of volume \( 128 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Projectile</h3>
    <p>A ball's height is \( h(t)=-5t^{2}+30t \) metres. When does it hit the ground?</p>
    <div class="solution">
      <div class="step"><strong>Set \( h=0 \):</strong> \( t(-5t+30)=0 \).</div>
      <div class="step"><strong>Solve:</strong> \( t=0 \) (launch) or \( t=6 \).</div>
      <em>Conclusion: it lands at \( t=6 \) s. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Volume from factored form</h3>
    <p>A box has volume \( V=x^{3}+4x^{2}+3x \) cm³. Factor it and find \( V \) at \( x=2 \).</p>
    <div class="solution">
      <div class="step"><strong>Factor:</strong> \( x(x+1)(x+3) \) — the three dimensions.</div>
      <div class="step"><strong>At \( x=2 \):</strong> \( 2\cdot3\cdot5=30 \).</div>
      <em>Conclusion: dimensions \( x,\,x+1,\,x+3 \); \( V=30 \) cm³ at \( x=2 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Break-even (cubic model)</h3>
    <p>A profit model gives \( x^{3}-7x-6=0 \) (in thousands of units). Find the positive break-even value.</p>
    <div class="solution">
      <div class="step"><strong>Factor:</strong> test \( x=3 \): \( 27-21-6=0 \); \( (x-3)(x^{2}+3x+2)=(x-3)(x+1)(x+2) \).</div>
      <div class="step"><strong>Roots:</strong> \( 3,-1,-2 \); only \( x=3 \) is positive.</div>
      <em>Conclusion: break-even at \( x=3 \) (thousand units). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Beam deflection</h3>
    <p>A beam's deflection is \( d(x)=x^{3}-12x \). Where is the deflection zero?</p>
    <div class="solution">
      <div class="step"><strong>Set \( d=0 \):</strong> \( x(x^{2}-12)=0 \).</div>
      <div class="step"><strong>Solve:</strong> \( x=0 \) or \( x=\pm\sqrt{12}=\pm2\sqrt{3} \).</div>
      <em>Conclusion: \( x=0 \) and \( x=2\sqrt3\approx3.46 \) (positive length). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A ball's height is \( h(t)=-5t^{2}+20t \). When does it land?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( t(-5t+20)=0 \). <em>Answer: \( t=4 \) s.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A box has volume \( x(x-1)(x+2) \). Find \( V \) at \( x=3 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3\cdot2\cdot5=30 \). <em>Answer: \( 30 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Solve the design equation \( x^{3}-9x=0 \) (positive length).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x(x-3)(x+3)=0 \). <em>Answer: \( x=3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Cut \( x \) from a \( 10\times10 \) sheet: is \( V=x(10-2x)^{2}=72 \) satisfied by \( x=1 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 1(8)^{2}=64\ne72 \). Try \( x=... \) — check \( x=1 \) fails. <em>Answer: no (\( V=64 \) at \( x=1 \)).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Solve the model \( x^{3}-2x^{2}-5x+6=0 \) (from Lesson 2.4) for its positive roots.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (x-1)(x-3)(x+2)=0 \). <em>Answer: positive roots \( x=1,\ 3 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Keeping negative or out-of-range roots that make no physical sense.</li>
    <li>Forgetting the domain restriction (e.g. \( 0<x<6 \) for the box).</li>
    <li>Dropping the \( t=0 \) or \( x=0 \) root when it is physically meaningful (or not).</li>
    <li>Setting up the volume/height model with the wrong dimensions.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I start an application?</h3><p><em>Translate the situation into a polynomial model, then set up an equation.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which roots do I keep?</h3><p><em>Only those satisfying the physical domain (e.g. positive lengths).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is a common box model?</h3><p><em>\( V=x(\text{length}-2x)(\text{width}-2x) \) for cut-and-fold boxes.</em></p></div>
</div>`)] },

  // ── 3.1 Trigonometric Ratios to 360° ────────────────────────
  "3.1": { code: "3.1", title: "Trigonometric Ratios to 360°", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 Trigonometric Ratios to 360°</h1>
  <p><strong>Overview.</strong> Sine, cosine, and tangent are defined for <em>every</em> angle, not just those in a right triangle. Using the <strong>CAST rule</strong> and a <strong>reference angle</strong>, you can find any ratio in \( [0^\circ,360^\circ] \) and solve for all angles that produce a given ratio.</p>

  <h2>📌 CAST and Reference Angles</h2>
  <p>The <strong>reference angle</strong> is the acute angle to the \( x \)-axis. <strong>CAST</strong> (starting in Q4, going counter-clockwise) tells which ratio is positive: <strong>A</strong>ll in Q1, <strong>S</strong>ine in Q2, <strong>T</strong>angent in Q3, <strong>C</strong>osine in Q4.</p>

  <h2>📌 Special Angles</h2>
  <p>\( \sin30^\circ=\tfrac12,\ \cos30^\circ=\tfrac{\sqrt3}{2},\ \tan45^\circ=1,\ \sin60^\circ=\tfrac{\sqrt3}{2} \), and so on — combine these with a reference angle for any multiple.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: All three ratios of \( 150^\circ \)</h3>
    <p>Find \( \sin,\cos,\tan \) of \( 150^\circ \).</p>
    <div class="solution">
      <div class="step"><strong>Quadrant II, reference \( 30^\circ \):</strong> sine is positive; cosine and tangent negative.</div>
      <div class="step"><strong>Values:</strong> \( \sin150^\circ=\tfrac12,\ \cos150^\circ=-\tfrac{\sqrt3}{2},\ \tan150^\circ=-\tfrac{1}{\sqrt3} \).</div>
      <em>Conclusion: \( \tfrac12,\ -\tfrac{\sqrt3}{2},\ -\tfrac{1}{\sqrt3} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: A Q3 cosine</h3>
    <p>Evaluate \( \cos225^\circ \).</p>
    <div class="solution">
      <div class="step"><strong>Quadrant III, reference \( 45^\circ \):</strong> cosine is negative.</div>
      <em>Conclusion: \( \cos225^\circ=-\tfrac{\sqrt2}{2} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Solve for all angles (sine)</h3>
    <p>Solve \( \sin\theta=\tfrac12 \) for \( 0^\circ\le\theta<360^\circ \).</p>
    <div class="solution">
      <div class="step"><strong>Reference angle:</strong> \( 30^\circ \).</div>
      <div class="step"><strong>Sine positive:</strong> quadrants I and II.</div>
      <em>Conclusion: \( \theta=30^\circ,\ 150^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Solve for all angles (cosine)</h3>
    <p>Solve \( \cos\theta=-\tfrac{\sqrt3}{2} \) for \( 0^\circ\le\theta<360^\circ \).</p>
    <div class="solution">
      <div class="step"><strong>Reference angle:</strong> \( 30^\circ \).</div>
      <div class="step"><strong>Cosine negative:</strong> quadrants II and III.</div>
      <em>Conclusion: \( \theta=150^\circ,\ 210^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Solve for all angles (tangent)</h3>
    <p>Solve \( \tan\theta=1 \) for \( 0^\circ\le\theta<360^\circ \).</p>
    <div class="solution">
      <div class="step"><strong>Reference angle:</strong> \( 45^\circ \).</div>
      <div class="step"><strong>Tangent positive:</strong> quadrants I and III.</div>
      <em>Conclusion: \( \theta=45^\circ,\ 225^\circ \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Evaluate \( \sin210^\circ \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Q3, ref \( 30^\circ \), sine negative. <em>Answer: \( -\tfrac12 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Evaluate \( \cos120^\circ \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Q2, ref \( 60^\circ \), cosine negative. <em>Answer: \( -\tfrac12 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Solve \( \sin\theta=-\tfrac{\sqrt2}{2} \) on \( [0^\circ,360^\circ) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Ref \( 45^\circ \); sine negative (Q3, Q4). <em>Answer: \( 225^\circ,\ 315^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( \cos\theta=\tfrac12 \) on \( [0^\circ,360^\circ) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Ref \( 60^\circ \); cosine positive (Q1, Q4). <em>Answer: \( 60^\circ,\ 300^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Solve \( \tan\theta=-\sqrt3 \) on \( [0^\circ,360^\circ) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Ref \( 60^\circ \); tangent negative (Q2, Q4). <em>Answer: \( 120^\circ,\ 300^\circ \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Giving only one solution when two angles share a reference angle.</li>
    <li>Getting the sign wrong — check the quadrant with CAST.</li>
    <li>Confusing the reference angle with the actual angle.</li>
    <li>Forgetting that \( \tan \) is positive in Q1 and Q3.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is a reference angle?</h3><p><em>The acute angle between the terminal arm and the \( x \)-axis.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I get the sign?</h3><p><em>CAST: All/Sine/Tangent/Cosine positive in Q1/Q2/Q3/Q4.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Why two answers?</h3><p><em>Two quadrants share the same reference angle for a given ratio sign.</em></p></div>
</div>`)] },

  // ── 3.2 The Sine Law & the Ambiguous Case ───────────────────
  "3.2": { code: "3.2", title: "The Sine Law & the Ambiguous Case", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔺 The Sine Law &amp; the Ambiguous Case</h1>
  <p><strong>Overview.</strong> The <strong>sine law</strong> relates each side of any triangle to the sine of its opposite angle. It solves triangles when you know an angle and its opposite side — but the <strong>SSA</strong> situation can produce zero, one, or <em>two</em> triangles.</p>

  <h2>📌 The Sine Law</h2>
  <p>\( \dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C} \). Use side/angle pairs to find a missing side or angle.</p>

  <h2>📌 The Ambiguous (SSA) Case</h2>
  <p>Given two sides and a non-included angle, compare \( a \) to the height \( h=b\sin A \): if \( a<h \) no triangle; if \( a=h \) one (right) triangle; if \( h<a<b \) <strong>two</strong> triangles; if \( a\ge b \) one triangle.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Find a side</h3>
    <p>In \( \triangle ABC \), \( A=40^\circ,\ B=75^\circ,\ a=10 \). Find \( b \).</p>
    <div class="solution">
      <div class="step"><strong>Sine law:</strong> \( \dfrac{b}{\sin75^\circ}=\dfrac{10}{\sin40^\circ} \).</div>
      <div class="step"><strong>Solve:</strong> \( b=\dfrac{10\sin75^\circ}{\sin40^\circ}\approx\dfrac{9.659}{0.643} \).</div>
      <em>Conclusion: \( b\approx15.0 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Find an angle (one triangle)</h3>
    <p>In \( \triangle ABC \), \( a=8,\ b=6,\ A=50^\circ \). Find \( B \).</p>
    <div class="solution">
      <div class="step"><strong>Sine law:</strong> \( \sin B=\dfrac{b\sin A}{a}=\dfrac{6\sin50^\circ}{8}\approx0.5745 \).</div>
      <div class="step"><strong>Since \( a>b \), only the acute \( B \):</strong> \( B\approx35.1^\circ \).</div>
      <em>Conclusion: \( B\approx35.1^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: The ambiguous case — two triangles</h3>
    <p>\( a=7,\ b=10,\ A=30^\circ \). How many triangles, and find \( B \).</p>
    <div class="solution">
      <div class="step"><strong>Height:</strong> \( h=b\sin A=10(0.5)=5 \). Since \( 5<7<10 \) (\( h<a<b \)): <strong>two</strong> triangles.</div>
      <div class="step"><strong>Sine law:</strong> \( \sin B=\dfrac{10\sin30^\circ}{7}\approx0.7143 \).</div>
      <div class="step"><strong>Both angles:</strong> \( B\approx45.6^\circ \) or \( B\approx134.4^\circ \).</div>
      <em>Conclusion: two triangles, \( B\approx45.6^\circ \) or \( 134.4^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: No triangle</h3>
    <p>\( a=4,\ b=10,\ A=30^\circ \). How many triangles?</p>
    <div class="solution">
      <div class="step"><strong>Height:</strong> \( h=10(0.5)=5 \). Since \( a=4<h=5 \): the side is too short to reach.</div>
      <em>Conclusion: no triangle exists. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Applied — surveying</h3>
    <p>From two points \( 200 \) m apart, a tree is sighted at angles \( 65^\circ \) and \( 50^\circ \) from the baseline. Find the tree's distance from the first point.</p>
    <div class="solution">
      <div class="step"><strong>Third angle:</strong> \( 180^\circ-65^\circ-50^\circ=65^\circ \).</div>
      <div class="step"><strong>Sine law:</strong> \( \dfrac{d}{\sin50^\circ}=\dfrac{200}{\sin65^\circ}\Rightarrow d=\dfrac{200\sin50^\circ}{\sin65^\circ} \).</div>
      <em>Conclusion: \( d\approx169 \) m. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( A=35^\circ,\ B=80^\circ,\ a=12 \). Find \( b \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( b=\dfrac{12\sin80^\circ}{\sin35^\circ} \). <em>Answer: \( \approx20.6 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\( a=9,\ b=5,\ A=60^\circ \). Find \( B \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sin B=\dfrac{5\sin60^\circ}{9}\approx0.481 \). <em>Answer: \( B\approx28.7^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( a=5,\ b=8,\ A=25^\circ \) — how many triangles? (\( h=b\sin A \))</p><details><summary>View answer</summary><div class="solution"><div class="step">\( h=8\sin25^\circ\approx3.38 \); \( 3.38<5<8 \). <em>Answer: two triangles.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( a=3,\ b=9,\ A=40^\circ \) — how many triangles?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( h=9\sin40^\circ\approx5.79>3 \). <em>Answer: none.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>\( a=6,\ b=4,\ A=70^\circ \). Find \( B \) and \( C \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sin B=\dfrac{4\sin70^\circ}{6}\approx0.626\Rightarrow B\approx38.8^\circ \) (one triangle, \( a>b \)); \( C\approx71.2^\circ \). <em>Answer: \( B\approx38.8^\circ,\ C\approx71.2^\circ \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Ignoring the second (obtuse) angle in the ambiguous case when it is valid.</li>
    <li>Reporting two triangles when \( a\ge b \) (only one exists).</li>
    <li>Using the sine law when you have SAS or SSS (use the cosine law).</li>
    <li>Calculator in radian mode instead of degrees.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When does the sine law apply?</h3><p><em>When you have a side and its opposite angle (AAS, ASA, or SSA).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: When are there two triangles?</h3><p><em>SSA with \( h<a<b \) (where \( h=b\sin A \)).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I get the obtuse option?</h3><p><em>Subtract the acute angle from \( 180^\circ \).</em></p></div>
</div>`)] },

  // ── 3.3 The Cosine Law ──────────────────────────────────────
  "3.3": { code: "3.3", title: "The Cosine Law", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔻 The Cosine Law</h1>
  <p><strong>Overview.</strong> When the sine law can't start — you have two sides and the <em>included</em> angle (<strong>SAS</strong>) or all three sides (<strong>SSS</strong>) — the <strong>cosine law</strong> finds the missing side or angle.</p>

  <h2>📌 The Cosine Law</h2>
  <p>\( c^{2}=a^{2}+b^{2}-2ab\cos C \). Rearranged for an angle: \( \cos C=\dfrac{a^{2}+b^{2}-c^{2}}{2ab} \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: SAS — find the third side</h3>
    <p>\( a=8,\ b=5,\ C=60^\circ \). Find \( c \).</p>
    <div class="solution">
      <div class="step"><strong>Cosine law:</strong> \( c^{2}=64+25-2(8)(5)\cos60^\circ=89-80(0.5)=49 \).</div>
      <em>Conclusion: \( c=7 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: SSS — find the largest angle</h3>
    <p>A triangle has sides \( 6,7,8 \). Find its largest angle.</p>
    <div class="solution">
      <div class="step"><strong>Largest angle is opposite the \( 8 \):</strong> \( \cos\theta=\dfrac{6^{2}+7^{2}-8^{2}}{2(6)(7)}=\dfrac{21}{84}=0.25 \).</div>
      <em>Conclusion: \( \theta\approx75.5^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: SAS with an obtuse angle</h3>
    <p>\( a=5,\ b=7,\ C=120^\circ \). Find \( c \).</p>
    <div class="solution">
      <div class="step"><strong>Cosine law:</strong> \( c^{2}=25+49-2(5)(7)\cos120^\circ=74-70(-0.5)=109 \).</div>
      <em>Conclusion: \( c=\sqrt{109}\approx10.4 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: SSS — a right triangle in disguise</h3>
    <p>Find the angle opposite the side \( 13 \) in a triangle with sides \( 5,12,13 \).</p>
    <div class="solution">
      <div class="step"><strong>Cosine law:</strong> \( \cos\theta=\dfrac{25+144-169}{2(5)(12)}=\dfrac{0}{120}=0 \).</div>
      <em>Conclusion: \( \theta=90^\circ \) (a right triangle). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Applied — distance across a lake</h3>
    <p>Two paths of \( 300 \) m and \( 400 \) m meet at a \( 110^\circ \) angle. How far apart are their far ends?</p>
    <div class="solution">
      <div class="step"><strong>Cosine law:</strong> \( d^{2}=300^{2}+400^{2}-2(300)(400)\cos110^\circ \).</div>
      <div class="step"><strong>Compute:</strong> \( 250000-240000(-0.342)\approx250000+82084=332084 \).</div>
      <em>Conclusion: \( d\approx576 \) m. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( a=4,\ b=6,\ C=90^\circ \). Find \( c \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( c^{2}=16+36-0=52 \). <em>Answer: \( c=\sqrt{52}\approx7.2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Sides \( 5,6,7 \): find the angle opposite the \( 7 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \cos\theta=\dfrac{25+36-49}{60}=0.2 \). <em>Answer: \( \approx78.5^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( a=10,\ b=10,\ C=40^\circ \). Find \( c \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( c^{2}=200-200\cos40^\circ\approx200-153.2=46.8 \). <em>Answer: \( \approx6.8 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Sides \( 8,15,17 \): find the angle opposite the \( 17 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \cos\theta=\dfrac{64+225-289}{240}=0 \). <em>Answer: \( 90^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>\( a=12,\ b=9,\ C=135^\circ \). Find \( c \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( c^{2}=144+81-216\cos135^\circ\approx225+152.7=377.7 \). <em>Answer: \( \approx19.4 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using \( +2ab\cos C \) instead of \( -2ab\cos C \).</li>
    <li>Pairing the wrong angle with the wrong side — \( C \) is opposite \( c \).</li>
    <li>Forgetting to take the square root for the side.</li>
    <li>Sign errors when \( \cos C \) is negative (obtuse angle).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When do I use the cosine law?</h3><p><em>For SAS (find a side) or SSS (find an angle).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I find an angle?</h3><p><em>\( \cos C=\dfrac{a^2+b^2-c^2}{2ab} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I know an angle is obtuse?</h3><p><em>Its cosine comes out negative.</em></p></div>
</div>`)] },

  // ── 3.4 Solving Oblique-Triangle Problems ───────────────────
  "3.4": { code: "3.4", title: "Solving Oblique-Triangle Problems", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧭 Solving Oblique-Triangle Problems</h1>
  <p><strong>Overview.</strong> Real problems in surveying, navigation, and construction come as triangles with no right angle. The skill is choosing the right tool: use the <strong>sine law</strong> when you have a side–angle pair, and the <strong>cosine law</strong> for SAS or SSS — sometimes both in one problem.</p>

  <h2>📌 Choosing a Law</h2>
  <ul>
    <li><strong>Sine law:</strong> AAS, ASA, or SSA (a side and its opposite angle).</li>
    <li><strong>Cosine law:</strong> SAS (two sides + included angle) or SSS (three sides).</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Pick the tool</h3>
    <p>Which law: (a) know \( A,B,a \); (b) know \( a,b,C \); (c) know \( a,b,c \)?</p>
    <div class="solution">
      <div class="step"><strong>(a)</strong> side + opposite angle → sine law.</div>
      <div class="step"><strong>(b)</strong> SAS → cosine law.</div>
      <div class="step"><strong>(c)</strong> SSS → cosine law.</div>
      <em>Conclusion: sine, cosine, cosine. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Navigation</h3>
    <p>A ship sails \( 60 \) km on a bearing, turns \( 40^\circ \), and sails \( 80 \) km. How far is it from the start?</p>
    <div class="solution">
      <div class="step"><strong>Included angle:</strong> the interior angle is \( 180^\circ-40^\circ=140^\circ \).</div>
      <div class="step"><strong>Cosine law:</strong> \( d^{2}=60^{2}+80^{2}-2(60)(80)\cos140^\circ\approx10000+7352=17352 \).</div>
      <em>Conclusion: \( d\approx131.7 \) km. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Height of a tower</h3>
    <p>From two points \( 50 \) m apart in line with a tower, the angles of elevation to the top are \( 30^\circ \) and \( 45^\circ \). Find the tower's height. (Use the triangle formed by the two sightlines.)</p>
    <div class="solution">
      <div class="step"><strong>Interior angles:</strong> the sightline angles give a triangle with angles \( 30^\circ,\ 135^\circ,\ 15^\circ \).</div>
      <div class="step"><strong>Sine law for the far slant \( s \):</strong> \( \dfrac{s}{\sin30^\circ}=\dfrac{50}{\sin15^\circ}\Rightarrow s\approx96.6 \).</div>
      <div class="step"><strong>Height:</strong> \( h=s\sin45^\circ\approx96.6(0.707)\approx68.3 \).</div>
      <em>Conclusion: about \( 68 \) m. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Surveying a plot</h3>
    <p>A triangular lot has sides \( 40 \) m and \( 55 \) m meeting at \( 80^\circ \). Find the third side.</p>
    <div class="solution">
      <div class="step"><strong>SAS → cosine law:</strong> \( c^{2}=40^{2}+55^{2}-2(40)(55)\cos80^\circ\approx4625-764=3861 \).</div>
      <em>Conclusion: \( c\approx62.1 \) m. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Two-step problem</h3>
    <p>In \( \triangle ABC \), \( a=12,\ b=15,\ c=9 \). Find angle \( A \).</p>
    <div class="solution">
      <div class="step"><strong>SSS → cosine law for \( A \):</strong> \( \cos A=\dfrac{15^{2}+9^{2}-12^{2}}{2(15)(9)}=\dfrac{162}{270}=0.6 \).</div>
      <em>Conclusion: \( A\approx53.1^\circ \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Which law for known \( A,B,C \) and one side? </p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: sine law.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Two roads of \( 5 \) km and \( 7 \) km meet at \( 100^\circ \). Find the direct distance.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( d^{2}=25+49-70\cos100^\circ\approx74+12.2=86.2 \). <em>Answer: \( \approx9.3 \) km.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Sides \( 9,10,11 \): find the smallest angle.</p><details><summary>View answer</summary><div class="solution"><div class="step">Opposite \( 9 \): \( \cos\theta=\dfrac{100+121-81}{220}=0.636 \). <em>Answer: \( \approx50.5^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( A=48^\circ,\ a=20,\ b=15 \). Find \( B \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sin B=\dfrac{15\sin48^\circ}{20}\approx0.557 \). <em>Answer: \( \approx33.9^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Two observers \( 100 \) m apart see a balloon at elevations \( 40^\circ \) and \( 55^\circ \) (balloon between them, in a vertical plane). Find its height. (Triangle angles \( 40^\circ,125^\circ,15^\circ \).)</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{s}{\sin40^\circ}=\dfrac{100}{\sin15^\circ}\Rightarrow s\approx248.4 \); \( h=s\sin55^\circ\approx203.5 \). <em>Answer: \( \approx204 \) m.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Reaching for the cosine law when the sine law is simpler (side–angle pair known).</li>
    <li>Using the bearing angle directly instead of the interior triangle angle.</li>
    <li>Forgetting to convert a slant distance to a vertical height.</li>
    <li>Not sketching the triangle first.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I choose a law?</h3><p><em>Side–angle pair → sine law; SAS or SSS → cosine law.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is the first step?</h3><p><em>Draw and label the triangle, marking what's known.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do bearings enter?</h3><p><em>Convert them into the triangle's interior angles.</em></p></div>
</div>`)] },

  // ── 3.5 Graphs of Sinusoidal Functions ──────────────────────
  "3.5": { code: "3.5", title: "Graphs of Sinusoidal Functions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🌊 Graphs of Sinusoidal Functions</h1>
  <p><strong>Overview.</strong> The graphs of \( y=\sin x \) and \( y=\cos x \) are smooth, repeating waves. Reading their <strong>amplitude</strong>, <strong>period</strong>, and <strong>midline</strong> is the foundation for every sinusoidal model.</p>

  <h2>📌 The Parent Waves</h2>
  <p>Over \( [0^\circ,360^\circ] \): \( \sin x \) starts at \( 0 \), peaks at \( 90^\circ \), returns to \( 0 \) at \( 180^\circ \), bottoms at \( 270^\circ \). \( \cos x \) starts at its peak \( 1 \). Both have amplitude \( 1 \), period \( 360^\circ \), midline \( y=0 \).</p>

  <h2>📌 Amplitude, Period, Midline</h2>
  <p><strong>Amplitude</strong> \( =\dfrac{\max-\min}{2} \); <strong>midline</strong> \( =\dfrac{\max+\min}{2} \); the <strong>period</strong> is the length of one full cycle.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Features of the parent</h3>
    <p>State the amplitude, period, max, and min of \( y=\sin x \).</p>
    <div class="solution">
      <div class="step"><strong>Amplitude:</strong> \( 1 \). <strong>Period:</strong> \( 360^\circ \).</div>
      <div class="step"><strong>Max \( 1 \) at \( 90^\circ \); min \( -1 \) at \( 270^\circ \).</strong></div>
      <em>Conclusion: amp \( 1 \), period \( 360^\circ \), range \( [-1,1] \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: A vertical stretch</h3>
    <p>Give the amplitude and range of \( y=3\sin x \).</p>
    <div class="solution">
      <div class="step"><strong>Coefficient \( 3 \):</strong> amplitude \( 3 \).</div>
      <em>Conclusion: amplitude \( 3 \), range \( [-3,3] \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Key points of cosine</h3>
    <p>List the key points of \( y=\cos x \) over one cycle.</p>
    <div class="solution">
      <div class="step"><strong>Points:</strong> \( (0,1),(90^\circ,0),(180^\circ,-1),(270^\circ,0),(360^\circ,1) \).</div>
      <em>Conclusion: cosine starts high, dips to \( -1 \), returns. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Amplitude and midline together</h3>
    <p>Find the amplitude, midline, and range of \( y=2\cos x+1 \).</p>
    <div class="solution">
      <div class="step"><strong>Amplitude:</strong> \( 2 \). <strong>Midline:</strong> \( y=1 \).</div>
      <div class="step"><strong>Range:</strong> \( 1\pm2 \), i.e. \( [-1,3] \).</div>
      <em>Conclusion: amp \( 2 \), midline \( 1 \), range \( [-1,3] \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Period from a horizontal factor</h3>
    <p>Find the period of \( y=\sin(2x) \).</p>
    <div class="solution">
      <div class="step"><strong>Period:</strong> \( \dfrac{360^\circ}{2}=180^\circ \).</div>
      <em>Conclusion: period \( 180^\circ \) (the wave repeats twice as fast). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Amplitude of \( y=5\sin x \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Range of \( y=\cos x-2 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Midline \( -2 \), amp \( 1 \). <em>Answer: \( [-3,-1] \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Period of \( y=\cos(3x) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{360^\circ}{3} \). <em>Answer: \( 120^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Midline and amplitude of \( y=4\sin x+3 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: midline \( y=3 \), amplitude \( 4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Max and min of \( y=6\sin x-1 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Midline \( -1 \pm6 \). <em>Answer: max \( 5 \), min \( -7 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Confusing amplitude (half the height) with the full range.</li>
    <li>Using \( 360^\circ\cdot k \) for the period instead of \( \dfrac{360^\circ}{k} \).</li>
    <li>Forgetting the vertical shift when finding max/min.</li>
    <li>Mixing up where sine vs. cosine starts.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is amplitude?</h3><p><em>Half the distance between max and min: \( \tfrac{\max-\min}{2} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is the period of \( \sin(kx) \)?</h3><p><em>\( \dfrac{360^\circ}{k} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is the midline?</h3><p><em>The horizontal centre line, \( y=\tfrac{\max+\min}{2} \).</em></p></div>
</div>`)] },

  // ── 3.6 Transformations of Sinusoidal Functions ─────────────
  "3.6": { code: "3.6", title: "Transformations of Sinusoidal Functions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎛️ Transformations of Sinusoidal Functions</h1>
  <p><strong>Overview.</strong> In \( y=a\sin\!\big(k(x-d)\big)+c \), each constant reshapes the wave: \( a \) sets amplitude, \( k \) sets period, \( d \) shifts it horizontally (phase), and \( c \) raises the midline.</p>

  <h2>📌 The Four Constants</h2>
  <ul>
    <li><strong>Amplitude:</strong> \( |a| \) (reflect if \( a<0 \)).</li>
    <li><strong>Period:</strong> \( \dfrac{360^\circ}{|k|} \).</li>
    <li><strong>Phase shift:</strong> right by \( d \).</li>
    <li><strong>Vertical shift / midline:</strong> \( y=c \).</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Read all four</h3>
    <p>For \( y=2\sin(x-30^\circ)+1 \), state amplitude, period, phase shift, and midline.</p>
    <div class="solution">
      <div class="step"><strong>\( a=2 \):</strong> amplitude \( 2 \). <strong>\( k=1 \):</strong> period \( 360^\circ \).</div>
      <div class="step"><strong>\( d=30^\circ \):</strong> right \( 30^\circ \). <strong>\( c=1 \):</strong> midline \( y=1 \).</div>
      <em>Conclusion: amp \( 2 \), period \( 360^\circ \), phase right \( 30^\circ \), midline \( 1 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: A period change</h3>
    <p>Find the amplitude and period of \( y=3\cos(2x) \).</p>
    <div class="solution">
      <div class="step"><strong>\( a=3 \):</strong> amplitude \( 3 \).</div>
      <div class="step"><strong>\( k=2 \):</strong> period \( \dfrac{360^\circ}{2}=180^\circ \).</div>
      <em>Conclusion: amp \( 3 \), period \( 180^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: A reflection</h3>
    <p>Describe \( y=-\sin x \).</p>
    <div class="solution">
      <div class="step"><strong>\( a=-1 \):</strong> reflected in the \( x \)-axis (starts by going down).</div>
      <em>Conclusion: the parent sine flipped vertically. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Period from \( k \)</h3>
    <p>Find the period of \( y=\sin(3x) \) and the range of \( y=\sin(3x)+4 \).</p>
    <div class="solution">
      <div class="step"><strong>Period:</strong> \( \dfrac{360^\circ}{3}=120^\circ \).</div>
      <div class="step"><strong>Range:</strong> midline \( 4 \), amplitude \( 1 \Rightarrow [3,5] \).</div>
      <em>Conclusion: period \( 120^\circ \); range \( [3,5] \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Write the equation</h3>
    <p>Write a sine function with amplitude \( 4 \), period \( 180^\circ \), and midline \( y=2 \).</p>
    <div class="solution">
      <div class="step"><strong>\( a=4 \); midline \( c=2 \).</strong></div>
      <div class="step"><strong>Period \( 180^\circ \Rightarrow k=\dfrac{360^\circ}{180^\circ}=2 \).</strong></div>
      <em>Conclusion: \( y=4\sin(2x)+2 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Amplitude and midline of \( y=5\sin x-3 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: amplitude \( 5 \), midline \( y=-3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Period of \( y=\cos(4x) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 90^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Phase shift of \( y=\sin(x+45^\circ) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x-(-45^\circ) \). <em>Answer: left \( 45^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Range of \( y=3\cos(2x)-1 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Midline \( -1\pm3 \). <em>Answer: \( [-4,2] \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Write a cosine function, amplitude \( 6 \), period \( 120^\circ \), midline \( y=10 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( k=\dfrac{360^\circ}{120^\circ}=3 \). <em>Answer: \( y=6\cos(3x)+10 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Computing period as \( 360^\circ\cdot k \) instead of \( \dfrac{360^\circ}{k} \).</li>
    <li>Reading \( x+45^\circ \) as a right shift (it shifts left).</li>
    <li>Forgetting the vertical shift when stating the range.</li>
    <li>Missing the reflection when \( a<0 \).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I get \( k \) from a period?</h3><p><em>\( k=\dfrac{360^\circ}{\text{period}} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which way does \( x-d \) shift?</h3><p><em>Right by \( d \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What sets the midline?</h3><p><em>The vertical shift \( c \).</em></p></div>
</div>`)] },

  // ── 3.7 Modelling with Sinusoidal Functions ─────────────────
  "3.7": { code: "3.7", title: "Modelling with Sinusoidal Functions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎡 Modelling with Sinusoidal Functions</h1>
  <p><strong>Overview.</strong> Ferris wheels, tides, and daily temperatures rise and fall in a wave. Building a model means finding the <strong>amplitude</strong>, <strong>midline</strong>, <strong>period</strong>, and starting point from the situation, then using the equation to answer questions.</p>

  <h2>📌 Building the Model</h2>
  <p>Amplitude \( =\dfrac{\max-\min}{2} \); midline \( =\dfrac{\max+\min}{2} \); \( k=\dfrac{360^\circ}{\text{period}} \). Use a <strong>cosine</strong> (starting at max or min) or <strong>sine</strong> (starting at the midline) to match the start.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Ferris wheel</h3>
    <p>A wheel of diameter \( 20 \) m has its centre \( 12 \) m up and turns once every \( 40 \) s. A rider boards at the bottom. Model the height \( h(t) \).</p>
    <div class="solution">
      <div class="step"><strong>Amplitude:</strong> radius \( 10 \). <strong>Midline:</strong> \( 12 \). <strong>Period \( 40 \Rightarrow k=\dfrac{360^\circ}{40}=9^\circ/\text{s} \).</strong></div>
      <div class="step"><strong>Starts at the bottom (min):</strong> use \( -\cos \).</div>
      <em>Conclusion: \( h(t)=-10\cos(9^\circ t)+12 \) (min \( 2 \) m, max \( 22 \) m). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Tides</h3>
    <p>High tide is \( 6 \) m at \( t=0 \); low tide is \( 2 \) m; the cycle is \( 12 \) h. Model the depth \( d(t) \).</p>
    <div class="solution">
      <div class="step"><strong>Amplitude:</strong> \( \dfrac{6-2}{2}=2 \). <strong>Midline:</strong> \( 4 \). <strong>\( k=\dfrac{360^\circ}{12}=30^\circ/\text{h} \).</strong></div>
      <div class="step"><strong>Starts at max:</strong> use \( +\cos \).</div>
      <em>Conclusion: \( d(t)=2\cos(30^\circ t)+4 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Daily temperature</h3>
    <p>A city's temperature ranges from \( 8^\circ \) to \( 24^\circ \) over \( 24 \) h. Find the amplitude and midline of a model.</p>
    <div class="solution">
      <div class="step"><strong>Amplitude:</strong> \( \dfrac{24-8}{2}=8 \). <strong>Midline:</strong> \( 16 \).</div>
      <div class="step"><strong>Period \( 24 \Rightarrow k=\dfrac{360^\circ}{24}=15^\circ/\text{h} \).</strong></div>
      <em>Conclusion: amplitude \( 8 \), midline \( 16 \), \( k=15^\circ/\text{h} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Read a value from the model</h3>
    <p>Using \( d(t)=2\cos(30^\circ t)+4 \), find the depth at \( t=3 \) h.</p>
    <div class="solution">
      <div class="step"><strong>Substitute:</strong> \( d(3)=2\cos(90^\circ)+4=2(0)+4 \).</div>
      <em>Conclusion: \( 4 \) m (the midline — halfway between tides). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Ferris-wheel height</h3>
    <p>Using \( h(t)=-10\cos(9^\circ t)+12 \), find the rider's height after \( 10 \) s.</p>
    <div class="solution">
      <div class="step"><strong>Substitute:</strong> \( h(10)=-10\cos(90^\circ)+12=-10(0)+12 \).</div>
      <em>Conclusion: \( 12 \) m (level with the centre, a quarter turn up). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A wheel: radius \( 8 \) m, centre \( 10 \) m up. What are the amplitude and midline?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: amplitude \( 8 \), midline \( 10 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A tide cycles every \( 12 \) h. Find \( k \) (deg/h).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{360^\circ}{12} \). <em>Answer: \( 30^\circ/\text{h} \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Temperature \( 10^\circ \) to \( 30^\circ \): amplitude and midline?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: amplitude \( 10 \), midline \( 20 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>For \( d(t)=2\cos(30^\circ t)+4 \), find \( d(6) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2\cos(180^\circ)+4=-2+4 \). <em>Answer: \( 2 \) m (low tide).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A wheel with min \( 1 \) m, max \( 19 \) m, period \( 60 \) s, boarding at the bottom. Write \( h(t) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Amp \( 9 \), midline \( 10 \), \( k=\dfrac{360^\circ}{60}=6^\circ/\text{s} \), start at min. <em>Answer: \( h(t)=-9\cos(6^\circ t)+10 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using the diameter as the amplitude instead of the radius.</li>
    <li>Choosing sine when the motion starts at a max/min (use \( \pm\cos \)).</li>
    <li>Forgetting the negative on \( -\cos \) for a "start at the bottom".</li>
    <li>Computing \( k \) as period\( /360^\circ \) instead of \( 360^\circ/ \)period.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I get amplitude and midline?</h3><p><em>Amplitude \( =\tfrac{\max-\min}{2} \); midline \( =\tfrac{\max+\min}{2} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Sine or cosine?</h3><p><em>Start at the midline → sine; start at a max/min → \( \pm\cos \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I find \( k \)?</h3><p><em>\( k=\dfrac{360^\circ}{\text{period}} \).</em></p></div>
</div>`)] },

  // ── 4.1 Introduction to Vectors ─────────────────────────────
  "4.1": { code: "4.1", title: "Introduction to Vectors", blocks: [html(String.raw`<div class="lecture-box">
  <h1>➡️ Introduction to Vectors</h1>
  <p><strong>Overview.</strong> A <strong>vector</strong> has both <strong>magnitude</strong> (size) and <strong>direction</strong> — velocity, force, and displacement are vectors, while speed, mass, and distance are <strong>scalars</strong> (magnitude only). This lesson sets up the language and the tools for finding a vector's magnitude and direction.</p>

  <h2>📌 Vectors vs. Scalars</h2>
  <p>A <strong>scalar</strong> is a plain number (with units). A <strong>vector</strong> also points somewhere; we draw it as an arrow whose length is the magnitude, written \( \vec{v} \) with magnitude \( |\vec{v}| \).</p>

  <h2>📌 Equal, Opposite, Parallel</h2>
  <p>Two vectors are <strong>equal</strong> if they have the same magnitude and direction (position doesn't matter). \( -\vec{v} \) has the same magnitude but the opposite direction. <strong>Parallel</strong> vectors point the same or opposite way.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Scalar or vector?</h3>
    <p>Classify: (a) a speed of \( 60 \) km/h; (b) a velocity of \( 60 \) km/h north; (c) a mass of \( 5 \) kg; (d) a force of \( 10 \) N downward.</p>
    <div class="solution">
      <div class="step"><strong>(a)</strong> scalar (no direction). <strong>(b)</strong> vector.</div>
      <div class="step"><strong>(c)</strong> scalar. <strong>(d)</strong> vector.</div>
      <em>Conclusion: scalar, vector, scalar, vector. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Magnitude and direction</h3>
    <p>Describe the vector "\( 5 \) units at \( 30^\circ \) above the horizontal."</p>
    <div class="solution">
      <div class="step"><strong>Magnitude:</strong> \( 5 \). <strong>Direction:</strong> \( 30^\circ \) above horizontal.</div>
      <em>Conclusion: \( |\vec{v}|=5 \), direction \( 30^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Magnitude of a displacement</h3>
    <p>A hiker walks \( 3 \) km east then \( 4 \) km north. Find the magnitude of the displacement.</p>
    <div class="solution">
      <div class="step"><strong>Perpendicular legs → Pythagoras:</strong> \( \sqrt{3^{2}+4^{2}}=\sqrt{25} \).</div>
      <em>Conclusion: \( 5 \) km. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Direction as a bearing</h3>
    <p>For that displacement (\( 3 \) km E, \( 4 \) km N), find the direction as an angle east of north.</p>
    <div class="solution">
      <div class="step"><strong>Angle east of north:</strong> \( \tan^{-1}\!\left(\dfrac{3}{4}\right)\approx36.9^\circ \).</div>
      <em>Conclusion: about \( N\,37^\circ E \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Equal and opposite</h3>
    <p>\( \vec{u} \) is \( 6 \) units east. Describe \( \vec{v}=\vec{u} \) and \( \vec{w}=-\vec{u} \).</p>
    <div class="solution">
      <div class="step"><strong>\( \vec{v} \):</strong> \( 6 \) units east (same magnitude and direction).</div>
      <div class="step"><strong>\( \vec{w} \):</strong> \( 6 \) units west (same magnitude, opposite direction).</div>
      <em>Conclusion: equal points east; the negative points west. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Is "temperature \( 20^\circ \)" a scalar or vector?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: scalar.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Magnitude of a displacement \( 6 \) m east and \( 8 \) m north?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{36+64}=10 \). <em>Answer: \( 10 \) m.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Direction (east of north) for \( 6 \) m E, \( 8 \) m N?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tan^{-1}(6/8)\approx36.9^\circ \). <em>Answer: \( \approx N\,37^\circ E \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Describe \( -\vec{u} \) if \( \vec{u} \) is \( 5 \) units north.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 5 \) units south.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A plane flies \( 12 \) km east and \( 5 \) km south. Find its distance from the start and direction (south of east).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{144+25}=13 \); \( \tan^{-1}(5/12)\approx22.6^\circ \). <em>Answer: \( 13 \) km, \( \approx E\,23^\circ S \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Treating speed/distance (scalars) as vectors, or dropping direction from a vector answer.</li>
    <li>Confusing a vector's position with its identity — equal vectors can start anywhere.</li>
    <li>Getting the reference direction wrong (east of north vs. north of east).</li>
    <li>Forgetting the negative reverses direction, not just sign.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Scalar vs. vector?</h3><p><em>A scalar has magnitude only; a vector has magnitude and direction.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I find a displacement's magnitude?</h3><p><em>Pythagoras on the perpendicular components.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is \( -\vec{v} \)?</h3><p><em>Same magnitude, opposite direction.</em></p></div>
</div>`)] },

  // ── 4.2 Adding & Subtracting Vectors ────────────────────────
  "4.2": { code: "4.2", title: "Adding & Subtracting Vectors", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔗 Adding &amp; Subtracting Vectors</h1>
  <p><strong>Overview.</strong> Vectors combine <strong>tip-to-tail</strong>: the <strong>resultant</strong> runs from the start of the first to the tip of the last. When the vectors aren't perpendicular, find the resultant's magnitude with the cosine law and its direction with the sine law.</p>

  <h2>📌 Methods</h2>
  <p><strong>Triangle:</strong> place vectors tip-to-tail; the resultant closes the triangle. <strong>Parallelogram:</strong> draw both from a common start; the diagonal is the resultant. <strong>Subtraction:</strong> \( \vec{a}-\vec{b}=\vec{a}+(-\vec{b}) \).</p>

  <h2>📌 Resultant Magnitude</h2>
  <p>For vectors of magnitudes \( a,b \) with angle \( \theta \) between them, \( |\vec R|=\sqrt{a^{2}+b^{2}+2ab\cos\theta} \) (parallelogram rule).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Perpendicular vectors</h3>
    <p>Add \( \vec{a}=3 \) (east) and \( \vec{b}=4 \) (north). Find the resultant's magnitude and direction.</p>
    <div class="solution">
      <div class="step"><strong>Magnitude:</strong> \( \sqrt{3^{2}+4^{2}}=5 \).</div>
      <div class="step"><strong>Direction:</strong> \( \tan^{-1}(3/4)\approx36.9^\circ \) east of north.</div>
      <em>Conclusion: \( 5 \) units, \( \approx N\,37^\circ E \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Vectors at \( 60^\circ \)</h3>
    <p>Find the magnitude of the resultant of \( 6 \) and \( 8 \) with \( 60^\circ \) between them.</p>
    <div class="solution">
      <div class="step"><strong>Parallelogram rule:</strong> \( |\vec R|=\sqrt{6^{2}+8^{2}+2(6)(8)\cos60^\circ}=\sqrt{100+48} \).</div>
      <em>Conclusion: \( |\vec R|=\sqrt{148}\approx12.2 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Direction of the resultant</h3>
    <p>For Example 2, find the angle between \( \vec R \) and the \( 6 \)-vector.</p>
    <div class="solution">
      <div class="step"><strong>Sine law in the triangle (angle \( 120^\circ \) opposite \( \vec R \)):</strong> \( \dfrac{\sin\alpha}{8}=\dfrac{\sin120^\circ}{12.17} \).</div>
      <div class="step"><strong>Solve:</strong> \( \sin\alpha=\dfrac{8\sin120^\circ}{12.17}\approx0.569 \Rightarrow \alpha\approx34.7^\circ \).</div>
      <em>Conclusion: \( \vec R \) is about \( 34.7^\circ \) from the \( 6 \)-vector. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Subtraction</h3>
    <p>If \( \vec{a} \) is \( 7 \) east and \( \vec{b} \) is \( 4 \) east, find \( \vec{a}-\vec{b} \).</p>
    <div class="solution">
      <div class="step"><strong>Add the opposite:</strong> \( 7 \) east \( +\,4 \) west.</div>
      <em>Conclusion: \( 3 \) units east. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Obtuse angle between</h3>
    <p>Find the resultant magnitude of \( 5 \) and \( 9 \) with \( 120^\circ \) between them.</p>
    <div class="solution">
      <div class="step"><strong>Parallelogram rule:</strong> \( \sqrt{25+81+2(5)(9)\cos120^\circ}=\sqrt{106-45} \).</div>
      <em>Conclusion: \( \sqrt{61}\approx7.8 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Resultant of \( 8 \) east and \( 6 \) north (magnitude)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{64+36}=10 \). <em>Answer: \( 10 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Resultant magnitude of \( 4 \) and \( 6 \) at \( 90^\circ \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{16+36}=\sqrt{52}\approx7.2 \). <em>Answer: \( \approx7.2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Resultant magnitude of \( 10 \) and \( 10 \) at \( 60^\circ \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{100+100+100}=\sqrt{300}\approx17.3 \). <em>Answer: \( \approx17.3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( \vec{a}=9 \) north, \( \vec{b}=5 \) north. Find \( \vec{a}-\vec{b} \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 4 \) north.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Resultant magnitude of \( 7 \) and \( 12 \) at \( 100^\circ \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{49+144+168\cos100^\circ}\approx\sqrt{193-29.2}=\sqrt{163.8} \). <em>Answer: \( \approx12.8 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Adding magnitudes directly (\( 6+8=14 \)) instead of using the resultant rule.</li>
    <li>Using \( -2ab\cos\theta \) (cosine law for a side) when the parallelogram rule needs \( +2ab\cos\theta \).</li>
    <li>Forgetting to reverse a vector when subtracting.</li>
    <li>Reporting only a magnitude when direction is asked.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do vectors add?</h3><p><em>Tip-to-tail; the resultant closes the triangle.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is the resultant magnitude?</h3><p><em>\( \sqrt{a^2+b^2+2ab\cos\theta} \) for angle \( \theta \) between them.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I subtract?</h3><p><em>Add the opposite: \( \vec a-\vec b=\vec a+(-\vec b) \).</em></p></div>
</div>`)] },

  // ── 4.3 Vector Applications ─────────────────────────────────
  "4.3": { code: "4.3", title: "Vector Applications", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🛩️ Vector Applications</h1>
  <p><strong>Overview.</strong> A plane in a crosswind, a boat against a current, forces on a bracket — each combines vectors. Add the vectors to find a <strong>resultant</strong> velocity or force, and use the opposite to find a <strong>balancing</strong> (equilibrium) vector.</p>

  <h2>📌 Common Setups</h2>
  <ul>
    <li><strong>Navigation:</strong> ground velocity \( = \) heading \( + \) wind/current.</li>
    <li><strong>Statics:</strong> for equilibrium, the resultant of all forces is zero.</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Plane and wind</h3>
    <p>A plane flies \( 200 \) km/h north; a \( 50 \) km/h wind blows east. Find the ground speed and direction.</p>
    <div class="solution">
      <div class="step"><strong>Perpendicular → Pythagoras:</strong> \( \sqrt{200^{2}+50^{2}}=\sqrt{42500}\approx206.2 \).</div>
      <div class="step"><strong>Direction:</strong> \( \tan^{-1}(50/200)\approx14.0^\circ \) east of north.</div>
      <em>Conclusion: \( \approx206 \) km/h at \( N\,14^\circ E \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Boat and current</h3>
    <p>A boat heads north at \( 5 \) m/s across a river; the current flows east at \( 3 \) m/s. Find the actual speed and direction.</p>
    <div class="solution">
      <div class="step"><strong>Magnitude:</strong> \( \sqrt{25+9}=\sqrt{34}\approx5.8 \) m/s.</div>
      <div class="step"><strong>Direction:</strong> \( \tan^{-1}(3/5)\approx31.0^\circ \) east of north.</div>
      <em>Conclusion: \( \approx5.8 \) m/s at \( N\,31^\circ E \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Two forces</h3>
    <p>Forces of \( 10 \) N and \( 15 \) N act at \( 60^\circ \) to each other. Find the resultant force.</p>
    <div class="solution">
      <div class="step"><strong>Parallelogram rule:</strong> \( \sqrt{10^{2}+15^{2}+2(10)(15)\cos60^\circ}=\sqrt{325+150} \).</div>
      <em>Conclusion: \( \sqrt{475}\approx21.8 \) N. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Equilibrium</h3>
    <p>Two forces give a resultant of \( 21.8 \) N in some direction. What single force keeps the object in equilibrium?</p>
    <div class="solution">
      <div class="step"><strong>Equilibrant:</strong> equal magnitude, opposite direction to the resultant.</div>
      <em>Conclusion: \( 21.8 \) N in the exactly opposite direction. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Orienteering</h3>
    <p>A runner goes \( 4 \) km east, then \( 3 \) km north. Find the straight-line distance and bearing from start.</p>
    <div class="solution">
      <div class="step"><strong>Distance:</strong> \( \sqrt{16+9}=5 \) km.</div>
      <div class="step"><strong>Bearing:</strong> \( \tan^{-1}(4/3)\approx53.1^\circ \) east of north.</div>
      <em>Conclusion: \( 5 \) km at \( \approx N\,53^\circ E \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A plane flies \( 300 \) km/h north with a \( 40 \) km/h east wind. Ground speed?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{90000+1600}=\sqrt{91600}\approx302.7 \). <em>Answer: \( \approx303 \) km/h.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A swimmer at \( 2 \) m/s north, current \( 1.5 \) m/s east. Actual speed?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{4+2.25}=\sqrt{6.25}=2.5 \). <em>Answer: \( 2.5 \) m/s.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Forces \( 8 \) N and \( 6 \) N at \( 90^\circ \). Resultant?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{64+36}=10 \). <em>Answer: \( 10 \) N.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Two \( 12 \) N forces at \( 60^\circ \). Resultant?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{144+144+144}=\sqrt{432}\approx20.8 \). <em>Answer: \( \approx20.8 \) N.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A boat heads \( 6 \) m/s at \( N\,20^\circ E \)... simplify: it heads north at \( 6 \) m/s, current \( 4 \) m/s west. Find the resultant speed.</p><details><summary>View answer</summary><div class="solution"><div class="step">Perpendicular: \( \sqrt{36+16}=\sqrt{52}\approx7.2 \). <em>Answer: \( \approx7.2 \) m/s.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Adding speeds arithmetically when the motions are perpendicular.</li>
    <li>Confusing the equilibrant (opposite) with the resultant.</li>
    <li>Mixing up which component is which when stating a bearing.</li>
    <li>Forgetting to report direction in a navigation answer.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I find ground velocity?</h3><p><em>Add the heading vector and the wind/current vector.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is the equilibrant?</h3><p><em>The vector equal and opposite to the resultant (produces equilibrium).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Perpendicular vectors?</h3><p><em>Use Pythagoras for magnitude and \( \tan^{-1} \) for direction.</em></p></div>
</div>`)] },

  // ── 4.4 Areas of Composite 2-D Shapes ───────────────────────
  "4.4": { code: "4.4", title: "Areas of Composite 2-D Shapes", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧩 Areas of Composite 2-D Shapes</h1>
  <p><strong>Overview.</strong> A complex region is just a combination of familiar shapes. <strong>Decompose</strong> it into rectangles, triangles, trapezoids, and circles, find each area, and add (or subtract a cut-out).</p>

  <h2>📌 The Standard Areas</h2>
  <p>Rectangle \( =lw \); triangle \( =\tfrac12bh \); trapezoid \( =\tfrac12(a+b)h \); circle \( =\pi r^{2} \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Rectangle plus semicircle</h3>
    <p>A window is a \( 10\times6 \) rectangle topped by a semicircle of radius \( 3 \). Find the total area.</p>
    <div class="solution">
      <div class="step"><strong>Rectangle:</strong> \( 10\times6=60 \).</div>
      <div class="step"><strong>Semicircle:</strong> \( \tfrac12\pi(3)^{2}=\tfrac{9\pi}{2}\approx14.14 \).</div>
      <em>Conclusion: \( \approx74.1 \) square units. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: An L-shape (subtraction)</h3>
    <p>A \( 10\times8 \) rectangle has a \( 4\times3 \) rectangle removed from one corner. Find the area.</p>
    <div class="solution">
      <div class="step"><strong>Whole minus cut-out:</strong> \( 80-12 \).</div>
      <em>Conclusion: \( 68 \) square units. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Trapezoid</h3>
    <p>Find the area of a trapezoid with parallel sides \( 8 \) and \( 12 \) and height \( 5 \).</p>
    <div class="solution">
      <div class="step"><strong>Formula:</strong> \( \tfrac12(8+12)(5)=\tfrac12(20)(5) \).</div>
      <em>Conclusion: \( 50 \) square units. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Triangle plus rectangle</h3>
    <p>A house-shaped region is a \( 6\times5 \) rectangle with a triangular roof of base \( 6 \) and height \( 4 \). Find the area.</p>
    <div class="solution">
      <div class="step"><strong>Rectangle:</strong> \( 30 \). <strong>Triangle:</strong> \( \tfrac12(6)(4)=12 \).</div>
      <em>Conclusion: \( 42 \) square units. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: An annulus (ring)</h3>
    <p>Find the area between two circles with outer radius \( 5 \) and inner radius \( 3 \).</p>
    <div class="solution">
      <div class="step"><strong>Subtract:</strong> \( \pi(5)^{2}-\pi(3)^{2}=\pi(25-9)=16\pi \).</div>
      <em>Conclusion: \( 16\pi\approx50.3 \) square units. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Area of a \( 12\times5 \) rectangle plus a triangle base \( 12 \), height \( 4 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 60+24=84 \). <em>Answer: \( 84 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Trapezoid with parallel sides \( 6,10 \) and height \( 4 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac12(16)(4)=32 \). <em>Answer: \( 32 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>A \( 9\times9 \) square with a \( 3\times3 \) square removed?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 81-9=72 \). <em>Answer: \( 72 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Full circle radius \( 4 \) minus a semicircle radius \( 2 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 16\pi-2\pi=14\pi\approx44.0 \). <em>Answer: \( 14\pi\approx44.0 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A running track is a \( 20\times40 \) rectangle with a semicircle (radius \( 10 \)) on each short end. Find the total area.</p><details><summary>View answer</summary><div class="solution"><div class="step">Rectangle \( 800 \) + two semicircles \( =\pi(10)^{2}=100\pi\approx314.2 \). <em>Answer: \( \approx1114.2 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using diameter instead of radius in \( \pi r^2 \).</li>
    <li>Forgetting to halve for a semicircle or a triangle.</li>
    <li>Adding a cut-out region instead of subtracting it.</li>
    <li>Mismatching units (mixing cm and m).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I handle a composite region?</h3><p><em>Split into standard shapes, add areas (subtract cut-outs).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Area of a trapezoid?</h3><p><em>\( \tfrac12(a+b)h \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Area of a ring?</h3><p><em>Outer circle minus inner circle: \( \pi(R^2-r^2) \).</em></p></div>
</div>`)] },

  // ── 4.5 Properties of Circles ───────────────────────────────
  "4.5": { code: "4.5", title: "Properties of Circles", blocks: [html(String.raw`<div class="lecture-box">
  <h1>⭕ Properties of Circles</h1>
  <p><strong>Overview.</strong> Circles obey precise angle and chord relationships that solve design problems. The key facts: a <strong>central angle is twice the inscribed angle</strong> on the same arc, an <strong>angle in a semicircle is \( 90^\circ \)</strong>, a <strong>tangent is perpendicular to the radius</strong>, and a <strong>perpendicular from the centre bisects a chord</strong>.</p>

  <h2>📌 Angle Relationships</h2>
  <ul>
    <li>Central angle \( =2\times \) inscribed angle (same arc).</li>
    <li>Angle inscribed in a semicircle \( =90^\circ \).</li>
    <li>A tangent meets the radius at the point of contact at \( 90^\circ \).</li>
  </ul>

  <h2>📌 Arc Length and Sector Area</h2>
  <p>Arc length \( =\dfrac{\theta}{360^\circ}\cdot2\pi r \); sector area \( =\dfrac{\theta}{360^\circ}\cdot\pi r^{2} \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Central and inscribed angles</h3>
    <p>A central angle subtends an arc of \( 80^\circ \). Find the inscribed angle on the same arc.</p>
    <div class="solution">
      <div class="step"><strong>Half the central angle:</strong> \( \tfrac12(80^\circ) \).</div>
      <em>Conclusion: \( 40^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Angle in a semicircle</h3>
    <p>A triangle is inscribed in a circle with one side a diameter. What is the angle opposite the diameter?</p>
    <div class="solution">
      <div class="step"><strong>Semicircle rule:</strong> the inscribed angle on a diameter is a right angle.</div>
      <em>Conclusion: \( 90^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Tangent and radius</h3>
    <p>A tangent line touches a circle at \( P \). What is the angle between the tangent and the radius \( OP \)?</p>
    <div class="solution">
      <div class="step"><strong>Tangent–radius property:</strong> they are perpendicular.</div>
      <em>Conclusion: \( 90^\circ \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Chord and the perpendicular from the centre</h3>
    <p>A chord of length \( 8 \) is drawn in a circle of radius \( 5 \). How far is the chord from the centre?</p>
    <div class="solution">
      <div class="step"><strong>The perpendicular bisects the chord:</strong> half-chord \( =4 \).</div>
      <div class="step"><strong>Right triangle:</strong> \( d=\sqrt{5^{2}-4^{2}}=\sqrt{9} \).</div>
      <em>Conclusion: \( 3 \) units from the centre. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Sector area and arc length</h3>
    <p>A sector has radius \( 6 \) and central angle \( 60^\circ \). Find its arc length and area.</p>
    <div class="solution">
      <div class="step"><strong>Arc length:</strong> \( \tfrac{60}{360}\cdot2\pi(6)=2\pi\approx6.28 \).</div>
      <div class="step"><strong>Sector area:</strong> \( \tfrac{60}{360}\cdot\pi(6)^{2}=6\pi\approx18.85 \).</div>
      <em>Conclusion: arc \( \approx6.28 \), area \( \approx18.85 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Inscribed angle for a central angle of \( 100^\circ \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 50^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Central angle if an inscribed angle is \( 35^\circ \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 70^\circ \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Distance from centre to a chord of length \( 24 \) in a circle of radius \( 13 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Half-chord \( 12 \); \( \sqrt{169-144}=5 \). <em>Answer: \( 5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Arc length for radius \( 10 \), central angle \( 90^\circ \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac14\cdot2\pi(10)=5\pi\approx15.7 \). <em>Answer: \( 5\pi\approx15.7 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Sector area for radius \( 8 \), central angle \( 135^\circ \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac{135}{360}\cdot\pi(64)=24\pi\approx75.4 \). <em>Answer: \( 24\pi\approx75.4 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Swapping the central/inscribed relationship (central is the <em>bigger</em> one, \( 2\times \)).</li>
    <li>Forgetting the perpendicular from the centre <strong>bisects</strong> the chord.</li>
    <li>Using \( 2\pi r \) for a sector without the \( \tfrac{\theta}{360^\circ} \) fraction.</li>
    <li>Mixing arc length (uses \( 2\pi r \)) with sector area (uses \( \pi r^2 \)).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Central vs. inscribed angle?</h3><p><em>Central \( =2\times \) inscribed on the same arc.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Angle in a semicircle?</h3><p><em>Always \( 90^\circ \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Arc length vs. sector area?</h3><p><em>\( \tfrac{\theta}{360^\circ}\cdot2\pi r \) vs. \( \tfrac{\theta}{360^\circ}\cdot\pi r^2 \).</em></p></div>
</div>`)] },

  // ── 4.6 Surface Area & Volume ───────────────────────────────
  "4.6": { code: "4.6", title: "Surface Area & Volume", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📦 Surface Area &amp; Volume</h1>
  <p><strong>Overview.</strong> Prisms, cylinders, and spheres have set formulas for <strong>volume</strong> (space inside) and <strong>surface area</strong> (skin outside). Knowing which formula fits — and using the radius, not the diameter — is the whole game.</p>

  <h2>📌 The Formulas</h2>
  <ul>
    <li><strong>Right prism:</strong> \( V=(\text{base area})\times h \); \( SA=2(\text{base area})+(\text{base perimeter})\times h \).</li>
    <li><strong>Cylinder:</strong> \( V=\pi r^{2}h \); \( SA=2\pi r^{2}+2\pi rh \).</li>
    <li><strong>Sphere:</strong> \( V=\tfrac43\pi r^{3} \); \( SA=4\pi r^{2} \).</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Cylinder</h3>
    <p>Find the volume and surface area of a cylinder with radius \( 4 \) and height \( 10 \).</p>
    <div class="solution">
      <div class="step"><strong>Volume:</strong> \( \pi(4)^{2}(10)=160\pi\approx502.7 \).</div>
      <div class="step"><strong>Surface area:</strong> \( 2\pi(16)+2\pi(4)(10)=32\pi+80\pi=112\pi\approx351.9 \).</div>
      <em>Conclusion: \( V\approx502.7 \), \( SA\approx351.9 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Sphere</h3>
    <p>Find the volume and surface area of a sphere of radius \( 6 \).</p>
    <div class="solution">
      <div class="step"><strong>Volume:</strong> \( \tfrac43\pi(6)^{3}=\tfrac43\pi(216)=288\pi\approx904.8 \).</div>
      <div class="step"><strong>Surface area:</strong> \( 4\pi(6)^{2}=144\pi\approx452.4 \).</div>
      <em>Conclusion: \( V\approx904.8 \), \( SA\approx452.4 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Rectangular prism</h3>
    <p>Find the volume and surface area of a \( 5\times4\times3 \) box.</p>
    <div class="solution">
      <div class="step"><strong>Volume:</strong> \( 5\cdot4\cdot3=60 \).</div>
      <div class="step"><strong>Surface area:</strong> \( 2(5\cdot4+4\cdot3+5\cdot3)=2(20+12+15)=94 \).</div>
      <em>Conclusion: \( V=60 \), \( SA=94 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Triangular prism</h3>
    <p>A prism has a right-triangular cross-section with legs \( 3 \) and \( 4 \) (hypotenuse \( 5 \)) and length \( 10 \). Find the volume and surface area.</p>
    <div class="solution">
      <div class="step"><strong>Base area:</strong> \( \tfrac12(3)(4)=6 \). <strong>Volume:</strong> \( 6\times10=60 \).</div>
      <div class="step"><strong>Surface area:</strong> \( 2(6)+(3+4+5)(10)=12+120=132 \).</div>
      <em>Conclusion: \( V=60 \), \( SA=132 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: A tank's capacity</h3>
    <p>A cylindrical tank has radius \( 3 \) m and height \( 7 \) m. What is its capacity (volume)?</p>
    <div class="solution">
      <div class="step"><strong>Volume:</strong> \( \pi(3)^{2}(7)=63\pi\approx197.9 \) m³.</div>
      <em>Conclusion: \( \approx197.9 \) m³. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Volume of a cylinder, radius \( 5 \), height \( 8 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \pi(25)(8)=200\pi\approx628.3 \). <em>Answer: \( 200\pi\approx628.3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Surface area of a sphere, radius \( 3 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 4\pi(9)=36\pi\approx113.1 \). <em>Answer: \( 36\pi\approx113.1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Volume of a \( 6\times6\times10 \) box?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 360 \). <em>Answer: \( 360 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Volume of a sphere, radius \( 3 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac43\pi(27)=36\pi\approx113.1 \). <em>Answer: \( 36\pi\approx113.1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Surface area of a cylinder, radius \( 2 \), height \( 9 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2\pi(4)+2\pi(2)(9)=8\pi+36\pi=44\pi\approx138.2 \). <em>Answer: \( 44\pi\approx138.2 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Using diameter for \( r \) in \( \pi r^2 \) or \( \tfrac43\pi r^3 \).</li>
    <li>Forgetting the two circular ends when finding a cylinder's surface area.</li>
    <li>Cubing incorrectly in the sphere volume.</li>
    <li>Mixing volume (cubic) and surface-area (square) units.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Cylinder volume?</h3><p><em>\( \pi r^2h \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Sphere volume and surface area?</h3><p><em>\( \tfrac43\pi r^3 \) and \( 4\pi r^2 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Prism volume?</h3><p><em>Base area times height.</em></p></div>
</div>`)] },

  // ── 4.7 Composite Figures ───────────────────────────────────
  "4.7": { code: "4.7", title: "Composite Figures", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🏭 Composite Figures</h1>
  <p><strong>Overview.</strong> Real objects — a grain silo, a machine part, a capsule — are combinations of prisms, cylinders, and spheres. Find the total volume by adding the pieces, and the surface area by adding only the <strong>exposed</strong> faces (a shared/internal face doesn't count).</p>

  <h2>📌 The Approach</h2>
  <p>Split the solid into standard pieces. For volume, add (or subtract a hole). For surface area, add each exposed surface and drop any face where two pieces join.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Silo volume (cylinder + hemisphere)</h3>
    <p>A silo is a cylinder of radius \( 3 \) and height \( 8 \) topped by a hemisphere of radius \( 3 \). Find the volume.</p>
    <div class="solution">
      <div class="step"><strong>Cylinder:</strong> \( \pi(9)(8)=72\pi \).</div>
      <div class="step"><strong>Hemisphere:</strong> \( \tfrac12\cdot\tfrac43\pi(3)^{3}=18\pi \).</div>
      <em>Conclusion: \( 72\pi+18\pi=90\pi\approx282.7 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Silo surface area</h3>
    <p>For the same silo, find the surface area (curved cylinder + hemisphere dome + flat base; the top of the cylinder is covered by the dome).</p>
    <div class="solution">
      <div class="step"><strong>Cylinder side:</strong> \( 2\pi(3)(8)=48\pi \). <strong>Base circle:</strong> \( \pi(3)^{2}=9\pi \).</div>
      <div class="step"><strong>Hemisphere dome:</strong> \( 2\pi(3)^{2}=18\pi \) (half a sphere's area).</div>
      <em>Conclusion: \( 48\pi+9\pi+18\pi=75\pi\approx235.6 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: A prism with a hole (subtraction)</h3>
    <p>A \( 10\times10\times20 \) block has a cylindrical hole of radius \( 2 \) drilled through its length. Find the remaining volume.</p>
    <div class="solution">
      <div class="step"><strong>Block:</strong> \( 10\cdot10\cdot20=2000 \). <strong>Hole:</strong> \( \pi(2)^{2}(20)=80\pi\approx251.3 \).</div>
      <em>Conclusion: \( 2000-80\pi\approx1748.7 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: A capsule (cylinder + two hemispheres)</h3>
    <p>A capsule is a cylinder of radius \( 2 \), height \( 5 \), with a hemisphere of radius \( 2 \) on each end. Find the volume.</p>
    <div class="solution">
      <div class="step"><strong>Cylinder:</strong> \( \pi(4)(5)=20\pi \). <strong>Two hemispheres \( = \) one sphere:</strong> \( \tfrac43\pi(2)^{3}=\tfrac{32}{3}\pi \).</div>
      <em>Conclusion: \( 20\pi+\tfrac{32}{3}\pi=\tfrac{92}{3}\pi\approx96.3 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Box with a dome</h3>
    <p>A \( 6\times6\times10 \) rectangular prism has a hemisphere of radius \( 3 \) sitting on top. Find the total volume.</p>
    <div class="solution">
      <div class="step"><strong>Prism:</strong> \( 6\cdot6\cdot10=360 \). <strong>Hemisphere:</strong> \( \tfrac12\cdot\tfrac43\pi(3)^{3}=18\pi\approx56.5 \).</div>
      <em>Conclusion: \( 360+18\pi\approx416.5 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Volume of a cylinder (r \( 2 \), h \( 6 \)) with a hemisphere (r \( 2 \)) on top?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 24\pi+\tfrac{16}{3}\pi=\tfrac{88}{3}\pi\approx92.2 \). <em>Answer: \( \approx92.2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Volume of a \( 8\times8\times8 \) cube with a hemisphere (r \( 4 \)) removed from the top? </p><details><summary>View answer</summary><div class="solution"><div class="step">\( 512-\tfrac12\cdot\tfrac43\pi(64)=512-\tfrac{128}{3}\pi\approx377.9 \). <em>Answer: \( \approx377.9 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Volume of a \( 5\times5\times12 \) prism with a cylindrical hole (r \( 1 \)) through its length?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 300-\pi(1)^{2}(12)=300-12\pi\approx262.3 \). <em>Answer: \( \approx262.3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Surface area of a cylinder (r \( 3 \), h \( 5 \)) with a hemisphere (r \( 3 \)) on top (base + side + dome)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2\pi(3)(5)+\pi(9)+2\pi(9)=30\pi+9\pi+18\pi=57\pi\approx179.1 \). <em>Answer: \( 57\pi\approx179.1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A tank is a cylinder (r \( 4 \), h \( 10 \)) with a hemisphere (r \( 4 \)) on each end. Find its total volume.</p><details><summary>View answer</summary><div class="solution"><div class="step">Cylinder \( 160\pi \) + sphere \( \tfrac43\pi(64)=\tfrac{256}{3}\pi \); total \( \tfrac{736}{3}\pi\approx770.7 \). <em>Answer: \( \approx770.7 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Counting the covered face (e.g. the cylinder's top under a dome) in surface area.</li>
    <li>Using a full sphere's area for a hemisphere dome (it's \( 2\pi r^2 \), plus its flat circle if exposed).</li>
    <li>Adding a drilled hole instead of subtracting it.</li>
    <li>Forgetting that two hemispheres make one whole sphere.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I find a composite volume?</h3><p><em>Add the standard pieces (subtract any hole).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What about surface area?</h3><p><em>Add only the exposed faces; drop shared/internal ones.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: A hemisphere dome's curved area?</h3><p><em>\( 2\pi r^2 \) (half a sphere).</em></p></div>
</div>`)] },
};
