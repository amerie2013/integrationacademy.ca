// MCR3U Unit 3 — Exponential Functions. Single-card lessons matching the
// Grade 9/10 pattern (🔵 Examples / 🟡 Practice Questions / ❓ Q&A Summary),
// with interactive graphs embedded inline via gframe.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u3 = {};

u3["3.1"] = L("3.1", "Exponent Laws & Rational Exponents", [html(String.raw`<div class="lecture-box">
  <h1>⚡ Exponent Laws &amp; Rational Exponents</h1>
  <p><strong>Overview.</strong> A few laws simplify any power expression — including negative and fractional exponents.</p>
  <h2>📌 The laws</h2>
  <ul>
    <li><strong>Product:</strong> \(x^m x^n=x^{m+n}\). <strong>Quotient:</strong> \(\dfrac{x^m}{x^n}=x^{m-n}\). <strong>Power:</strong> \((x^m)^n=x^{mn}\).</li>
    <li><strong>Zero:</strong> \(x^0=1\). <strong>Negative:</strong> \(x^{-n}=\dfrac{1}{x^n}\). <strong>Rational:</strong> \(x^{m/n}=\sqrt[n]{x^m}\).</li>
  </ul>
  ${gframe(["y = 2^x"], { title: "The exponential parent y = 2^x" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Product</h3><p>Simplify \(x^5\cdot x^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Add exponents.</div><em>Conclusion: \(x^{8}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Power of a power</h3><p>Simplify \((x^4)^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Multiply exponents.</div><em>Conclusion: \(x^{12}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Quotient</h3><p>Simplify \(\dfrac{x^9}{x^4}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Subtract exponents.</div><em>Conclusion: \(x^{5}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Negative exponent</h3><p>Evaluate \(2^{-3}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Reciprocal: \(\dfrac{1}{2^3}\).</div><em>Conclusion: \(\dfrac{1}{8}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Rational exponent</h3><p>Evaluate \(27^{2/3}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((\sqrt[3]{27})^2=3^2\).</div><em>Conclusion: \(9\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simplify \(x^6\cdot x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Simplify \((2x^3)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x^6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Simplify \(\dfrac{y^8}{y^3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y^5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Evaluate \(5^{-2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{1}{25}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Evaluate \(16^{3/4}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\((\sqrt[4]{16})^3=2^3\). <em>\(8\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why is \(x^0=1\)?</h3><p><em>By the quotient law \(\frac{x^n}{x^n}=x^{0}\), and anything over itself is 1.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Does a negative exponent make a number negative?</h3><p><em>No — it means reciprocal. \(2^{-3}=\frac18\), still positive.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does the denominator of a rational exponent do?</h3><p><em>It is the root: \(x^{1/2}=\sqrt{x}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Best order for \(x^{m/n}\)?</h3><p><em>Take the root first to keep numbers small.</em></p></div>
</div>`)]);

u3["3.2"] = L("3.2", "Exponential Functions & Their Graphs", [html(String.raw`<div class="lecture-box">
  <h1>📈 Exponential Functions &amp; Their Graphs</h1>
  <p><strong>Overview.</strong> An exponential function \(y=a\,b^{x}\) has the variable in the exponent. The base \(b\) decides growth or decay.</p>
  <h2>📌 Key features</h2>
  <ul>
    <li>Growth if \(b>1\); decay if \(0<b<1\).</li>
    <li>\(y\)-intercept is \(a\); horizontal asymptote \(y=0\); domain all reals; range \(y>0\).</li>
  </ul>
  ${gframe(["y = 2^x", "y = 0.5^x"], { title: "Growth (2^x) vs decay (0.5^x) — both pass through (0, 1)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Growth or decay?</h3><p>\(y=3\cdot2^{x}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Base \(2>1\).</div><em>Conclusion: growth. ✓</em></div>${gframe(["y = 3*2^x"], { title: "y=3·2ˣ: base 2>1, so the curve climbs — exponential growth" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Decay</h3><p>\(y=5\left(\tfrac12\right)^{x}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Base \(0<b<1\).</div><em>Conclusion: decay. ✓</em></div>${gframe(["y = 5*0.5^x"], { title: "y=5·(½)ˣ: base between 0 and 1, so the curve falls — exponential decay" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: y-intercept</h3><p>Find the \(y\)-intercept of \(y=4\cdot3^{x}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> At \(x=0\), \(3^0=1\).</div><em>Conclusion: \(4\). ✓</em></div>${gframe(["y = 4*3^x"], { title: "y=4·3ˣ: at x=0 the curve passes through 4 — the y-intercept" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Evaluate</h3><p>For \(y=2^{x}\), find \(y\) at \(x=5\) and \(x=-2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2^5=32\); \(2^{-2}=\tfrac14\).</div><em>Conclusion: \(32\) and \(\tfrac14\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Domain &amp; range</h3><p>State the domain and range of \(y=2^{x}\).</p><div class="solution"><em>Conclusion: domain all reals; range \(y>0\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Is \(y=2\cdot5^{x}\) growth or decay?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Growth.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Is \(y=(0.8)^{x}\) growth or decay?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Decay.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the \(y\)-intercept of \(y=7\cdot2^{x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Evaluate \(y=3^{x}\) at \(x=4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(81\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>State the range of \(y=5\cdot2^{x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y>0\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why do all \(y=b^{x}\) pass through \((0,1)\)?</h3><p><em>Because \(b^0=1\) for any base.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Can the curve touch the \(x\)-axis?</h3><p><em>No — it approaches \(y=0\) but never reaches it.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does \(a\) do?</h3><p><em>Stretches vertically and sets the \(y\)-intercept.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Growth vs decay quickly?</h3><p><em>Base \(>1\) rises; base between 0 and 1 falls.</em></p></div>
</div>`)]);

u3["3.3"] = L("3.3", "Transformations of Exponential Functions", [html(String.raw`<div class="lecture-box">
  <h1>🪄 Transformations of Exponential Functions</h1>
  <p><strong>Overview.</strong> Apply \(y=a\,b^{\,k(x-d)}+c\) to the parent \(b^{x}\). The vertical shift \(c\) moves the asymptote to \(y=c\).</p>
  <h2>📌 What each does</h2>
  <ul>
    <li>\(a\): vertical stretch / reflection; \(d\): horizontal shift; \(c\): vertical shift (asymptote \(y=c\)).</li>
    <li>Domain stays all reals; range is \(y>c\) (or \(y<c\) if reflected).</li>
  </ul>
  ${gframe(["y = 2^x", "y = 2^x + 3"], { title: "y = 2^x shifted up 3: the asymptote rises to y = 3" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Vertical shift</h3><p>Describe \(y=2^{x}+3\).</p><div class="solution"><em>Conclusion: up 3; asymptote \(y=3\); range \(y>3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Horizontal shift</h3><p>Describe \(y=2^{x-1}\).</p><div class="solution"><em>Conclusion: right 1. ✓</em></div>${gframe(["y = 2^x", "y = 2^(x-1)"], { title: "2^(x−1): y=2ˣ shifted right by 1" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Reflection</h3><p>Describe \(y=-2^{x}\).</p><div class="solution"><em>Conclusion: reflect in the \(x\)-axis; range \(y<0\). ✓</em></div>${gframe(["y = 2^x", "y = -2^x"], { title: "−2ˣ: y=2ˣ flipped over the x-axis — now entirely below it (range y<0)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Stretch</h3><p>Describe \(y=3\cdot2^{x}\).</p><div class="solution"><em>Conclusion: vertical stretch by 3; \(y\)-intercept 3. ✓</em></div>${gframe(["y = 2^x", "y = 3*2^x"], { title: "3·2ˣ: y=2ˣ stretched vertically by 3, lifting the y-intercept from 1 to 3" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Range from a shift</h3><p>State the range of \(y=2^{x}-4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Asymptote \(y=-4\).</div><em>Conclusion: range \(y>-4\). ✓</em></div>${gframe(["y = 2^x - 4"], { title: "2ˣ−4: shifted down 4, so the horizontal asymptote is y=−4 and the range is y>−4" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Asymptote of \(y=2^{x}+5\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Describe the shift in \(y=3^{x+2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Left 2.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Range of \(y=2^{x}+1\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y>1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>What does the negative do in \(y=-3^{x}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Reflects over the \(x\)-axis; range \(y<0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Range of \(y=2^{x}-6\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y>-6\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Does the asymptote move horizontally?</h3><p><em>No — it stays horizontal at \(y=c\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Does any transformation change the domain?</h3><p><em>No, the domain is always all real numbers.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Range fast?</h3><p><em>Find \(c\): opens up gives \(y>c\), reflected gives \(y<c\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Order of transformations?</h3><p><em>Stretch/reflect first, then shift.</em></p></div>
</div>`)]);

u3["3.4"] = L("3.4", "Applications: Growth, Decay & Compound Interest", [html(String.raw`<div class="lecture-box">
  <h1>🌱 Applications: Growth, Decay &amp; Compound Interest</h1>
  <p><strong>Overview.</strong> Exponential functions model anything that multiplies by a fixed factor each period.</p>
  <h2>📌 The models</h2>
  <ul>
    <li>Growth/decay: \(A=A_0(1\pm r)^{t}\). Half-life/doubling: \(A=A_0\left(\tfrac12\right)^{t/h}\) or \(A_0(2)^{t/d}\).</li>
    <li>Compound interest: \(A=P(1+i)^{n}\).</li>
  </ul>
  ${gframe(["y = 1.06^x"], { title: "Growth factor 1.06^x — the shape of money at 6% compound interest" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Population growth</h3><p>A town of \(500\) grows \(8\%\)/year. Population after \(10\) years?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P=500(1.08)^{10}\).</div><em>Conclusion: \(\approx 1079\). ✓</em></div>${gframe(["y = 500*1.08^x"], { title: "P=500(1.08)ᵗ: 8%/yr growth climbs to about 1079 by year 10" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Half-life</h3><p>\(80\) mg, half-life \(5\) years; after \(15\) years?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(80\left(\tfrac12\right)^{15/5}=80\left(\tfrac12\right)^{3}\).</div><em>Conclusion: \(10\) mg. ✓</em></div>${gframe(["y = 80*0.5^(x/5)"], { title: "80(½)^(t/5): halves every 5 years — down to 10 mg after 15 years" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Doubling</h3><p>Bacteria start at \(200\), double every \(3\) h; after \(9\) h?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(200\cdot2^{9/3}=200\cdot8\).</div><em>Conclusion: \(1600\). ✓</em></div>${gframe(["y = 200*2^(x/3)"], { title: "200·2^(t/3): doubles every 3 h — reaching 1600 after 9 h" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Compound interest</h3><p>\(\$1000\) at \(6\%\)/year compounded annually for \(5\) years?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A=1000(1.06)^{5}\).</div><em>Conclusion: \(\approx \$1338.23\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Depreciation</h3><p>A \(\$24000\) car loses \(15\%\)/year; after \(3\) years?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(V=24000(0.85)^{3}\).</div><em>Conclusion: \(\approx \$14737\). ✓</em></div>${gframe(["y = 24000*0.85^x"], { title: "V=24000(0.85)ᵗ: loses 15%/yr — about $14,737 after 3 years" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>A \(\$2000\) investment grows \(5\%\)/year. Write \(A(t)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(A=2000(1.05)^{t}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\(64\) mg, half-life \(2\) days; after \(6\) days?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(64\left(\tfrac12\right)^{3}=8\) mg.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(100\) bacteria double every hour; after \(4\) h?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(100\cdot2^{4}=1600\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(\$500\) at \(4\%\) compounded annually for \(3\) years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(500(1.04)^{3}\approx\$562.43\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>A population of \(8000\) decreases \(10\%\)/year. Write \(P(t)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(P=8000(0.90)^{t}\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Growth factor for a \(7\%\) increase?</h3><p><em>\(1.07\). For a \(7\%\) decrease, \(0.93\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do half-life and doubling fit the formula?</h3><p><em>Use exponent \(t/h\): every \(h\) units the factor applies once.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is \(i\) for \(6\%\) compounded monthly?</h3><p><em>\(i=\tfrac{0.06}{12}=0.005\), \(n=12\times\text{years}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why does compound beat simple interest?</h3><p><em>You earn interest on previous interest — exponential, not linear.</em></p></div>
</div>`)]);
