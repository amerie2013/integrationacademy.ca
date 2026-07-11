// MBF3C Unit 2 — Exponential Relations. Deep single-card lessons + interactive slider graphs.
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u2 = {};

u2["2.1"] = L("2.1", "Exponent Laws", [
  html(String.raw`<div class="lecture-box">
  <h1>⚡ Exponent Laws</h1>
  <p><strong>Overview.</strong> A <strong>power</strong> \(x^n\) is repeated multiplication. A few laws let us combine powers without expanding — and they keep working when the exponent is <em>zero</em> or <em>negative</em>, which is exactly what exponential relations need.</p>
  <h2>📌 The laws (and why)</h2>
  <ul>
    <li><strong>Product</strong> \(x^m x^n=x^{m+n}\) (count the factors); <strong>Quotient</strong> \(\dfrac{x^m}{x^n}=x^{m-n}\) (cancel); <strong>Power</strong> \((x^m)^n=x^{mn}\).</li>
    <li><strong>Zero:</strong> \(x^0=1\) — because \(\dfrac{x^n}{x^n}=x^{0}\) and anything over itself is 1.</li>
    <li><strong>Negative:</strong> \(x^{-n}=\dfrac{1}{x^n}\) — continue the pattern, dividing by \(x\) each step.</li>
  </ul>
  ${gframe(["y = 2^x"], { title: "The exponential parent y = 2^x" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Product</h3><p>Simplify \(x^5\cdot x^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Add exponents.</div><em>Conclusion: \(x^{8}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Quotient</h3><p>Simplify \(\dfrac{x^9}{x^4}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Subtract exponents.</div><em>Conclusion: \(x^{5}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Power of a power</h3><p>Simplify \((x^4)^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Multiply exponents.</div><em>Conclusion: \(x^{12}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Zero exponent</h3><p>Evaluate \(5^0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Any non-zero base to the 0 is 1.</div><em>Conclusion: \(1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Negative exponent</h3><p>Evaluate \(2^{-3}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Reciprocal: \(\dfrac{1}{2^3}\).</div><em>Conclusion: \(\dfrac{1}{8}\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simplify \(x^6\cdot x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Simplify \((2x^3)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x^6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Simplify \(\dfrac{y^8}{y^3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y^5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Evaluate \(4^0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Evaluate \(5^{-2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{1}{25}\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why is \(x^0=1\)?</h3><p><em>From the quotient law \(\frac{x^n}{x^n}=x^{0}\), and anything over itself is 1.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Does a negative exponent make a number negative?</h3><p><em>No — it means reciprocal. \(2^{-3}=\frac18\), still positive.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: \(x^3\cdot x^4\) — add or multiply the exponents?</h3><p><em>Add: \(x^7\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: \((x^2)^3\) — add or multiply?</h3><p><em>Multiply: \(x^6\).</em></p></div>
</div>`),
  graph("b^x", "b", { xMin: -4, xMax: 4, yMin: -1, yMax: 16, paramMin: 0.2, paramMax: 4, paramInit: 2, caption: "Animation: slide the base b in y = bˣ. b>1 grows, 0<b<1 decays, b=1 is the flat line y=1; every curve passes through (0,1)." }),
]);

u2["2.2"] = L("2.2", "Exponential Relations & Graphs", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Exponential Relations &amp; Graphs</h1>
  <p><strong>Overview.</strong> An <strong>exponential relation</strong> has the form \(y=a\cdot b^{x}\): the variable is in the <em>exponent</em>, so the value is <em>multiplied</em> by the same factor each step. That makes it grow (or shrink) far faster than a linear or quadratic relation.</p>
  <h2>📌 Key features &amp; how to tell them apart</h2>
  <ul>
    <li><strong>y-intercept</strong> \((0,a)\); <strong>horizontal asymptote</strong> \(y=0\); <strong>range</strong> \(y>0\) (for \(a>0\)).</li>
    <li><strong>Growth</strong> if \(b>1\); <strong>decay</strong> if \(0<b<1\).</li>
    <li><strong>Linear</strong> adds a constant; <strong>quadratic</strong> squares; <strong>exponential</strong> multiplies — so it eventually outgrows both.</li>
  </ul>
  ${gframe(["y = 2^x"], { title: "y = 2^x: y-intercept (0,1), asymptote y = 0, always positive" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Evaluate</h3><p>For \(y=2^x\), find the value at \(x=3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2^3=8\).</div><em>Conclusion: \(8\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: y-intercept</h3><p>State the y-intercept of \(y=3\cdot2^x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> At \(x=0\), \(y=3(1)\).</div><em>Conclusion: \((0,3)\). ✓</em></div>${gframe(["y = 3*2^x"], { title: "3·2ˣ: at x=0 the curve passes through 3 — the y-intercept (0,3)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Growth or decay?</h3><p>Is \(y=\left(\tfrac12\right)^x\) growth or decay?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Base \(0<b<1\).</div><em>Conclusion: decay. ✓</em></div>${gframe(["y = 0.5^x"], { title: "(½)ˣ: base between 0 and 1, so the curve falls — decay" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Distinguish relations</h3><p>Which grows fastest for large \(x\): \(y=2x\), \(y=x^2\), or \(y=2^x\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Multiplying beats adding or squaring eventually.</div><em>Conclusion: \(2^x\). ✓</em></div>${gframe(["y = 2*x", "y = x^2", "y = 2^x"], { title: "for large x the exponential 2ˣ overtakes both the line 2x and the parabola x²" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Compare bases</h3><p>Which grows faster, \(y=2^x\) or \(y=5^x\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Both pass \((0,1)\); the larger base is steeper.</div><em>Conclusion: \(5^x\). ✓</em></div>${gframe(["y = 2^x", "y = 5^x"], { title: "2ˣ vs 5ˣ: both pass through (0,1), but the larger base 5ˣ climbs far steeper" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(2^x\) at \(x=4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(16\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>State the y-intercept of \(y=5\cdot2^x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((0,5)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Is \(y=3^x\) growth or decay?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Growth.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>State the domain and range of \(y=2^x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Domain all reals; range \(y>0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>State the asymptote of \(y=2^x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=0\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How is an exponential relation different from a quadratic?</h3><p><em>The variable is in the exponent, so it multiplies (not squares).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why is \(y=b^x\) always positive?</h3><p><em>A positive base to any power stays positive; it only approaches 0.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is the y-intercept of \(y=a\cdot b^x\)?</h3><p><em>\((0,a)\), since \(b^0=1\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Which base grows fastest?</h3><p><em>The largest base.</em></p></div>
</div>`),
  graph("a*2^x", "a", { xMin: -4, xMax: 4, yMin: -8, yMax: 8, paramMin: -3, paramMax: 5, paramInit: 1, caption: "Slider a — y = a·2ˣ: it stretches the curve, sets the y-intercept (0, a), and reflects below the axis when a<0." }),
  graph("2^x + c", "c", { xMin: -4, xMax: 4, yMin: -6, yMax: 10, paramMin: -5, paramMax: 5, paramInit: 0, caption: "Slider c — y = 2ˣ + c: the whole curve and its horizontal asymptote y = c move up or down." }),
]);

u2["2.3"] = L("2.3", "Exponential Growth & Decay Applications", [
  html(String.raw`<div class="lecture-box">
  <h1>🌱 Exponential Growth &amp; Decay Applications</h1>
  <p><strong>Overview.</strong> Anything that changes by the same <em>percentage</em> each period is exponential: populations, bacteria, radioactive material, a bouncing ball, money. One model captures it all: \(y=a\cdot b^{t}\), where \(a\) is the starting amount and \(b\) is the multiplier per period.</p>
  <h2>📌 Building the model</h2>
  <ul>
    <li><strong>Growth</strong> of \(r\): \(b=1+r\) (e.g. \(+8\%\Rightarrow1.08\)). <strong>Decay</strong> of \(r\): \(b=1-r\) (e.g. \(-15\%\Rightarrow0.85\)).</li>
    <li><strong>Doubling:</strong> \(b=2\). <strong>Half-life</strong> \(h\): \(y=a\left(\tfrac12\right)^{t/h}\).</li>
    <li><strong>Compound interest</strong> \(A=P(1+i)^n\) is exponential growth of money — the bridge to Unit 3.</li>
  </ul>
  ${gframe(["y = 0.5^x"], { title: "Decay: y = (½)ˣ halves each step, approaching y = 0" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Doubling</h3><p>A colony of 200 doubles yearly: \(P=200(2)^t\). Find \(P\) after 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(200(2)^3=200(8)\).</div><em>Conclusion: \(1600\). ✓</em></div>${gframe(["y = 200*2^x"], { title: "P=200·2ᵗ: the colony doubles each year — 1600 after 3 years" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Half-life</h3><p>80 g halves every 5 years. How much after 10 years?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(10/5=2\) half-lives: \(80\left(\tfrac12\right)^2\).</div><em>Conclusion: \(20\) g. ✓</em></div>${gframe(["y = 80*0.5^(x/5)"], { title: "80(½)^(t/5): halves every 5 years — down to 20 g after 10 years" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Growth factor</h3><p>A town grows \(8\%\) per year. State the growth factor.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(b=1+0.08\).</div><em>Conclusion: \(1.08\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Decay factor</h3><p>A car loses \(15\%\) of its value each year. State the decay factor.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(b=1-0.15\).</div><em>Conclusion: \(0.85\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: A bouncing ball</h3><p>The height after \(n\) bounces is \(h=100(0.6)^n\) cm. Find the height after 3 bounces.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(100(0.6)^3=100(0.216)\).</div><em>Conclusion: \(21.6\) cm. ✓</em></div>${gframe(["y = 100*0.6^x"], { title: "h=100(0.6)ⁿ: each bounce reaches 60% of the last — about 21.6 cm after 3 bounces" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>For \(P=200(2)^t\), find \(P\) after 4 years.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(200(16)=3200\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>State the growth factor for \(+5\%\) per year.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1.05\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>State the decay factor for \(-10\%\) per year.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0.90\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A 100 g sample halves every 3 h. How much after 9 h?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>3 half-lives: \(100\left(\tfrac12\right)^3=12.5\) g.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>For \(h=100(0.6)^n\), find the height after 2 bounces.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(100(0.36)=36\) cm.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I find \(b\) from a percentage?</h3><p><em>Growth: \(b=1+r\). Decay: \(b=1-r\), with \(r\) as a decimal.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does \(a\) represent?</h3><p><em>The starting amount, at \(t=0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do half-life problems work?</h3><p><em>Count the number of half-lives \(t/h\), and raise \(\tfrac12\) to that power.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why is compound interest exponential?</h3><p><em>The balance is multiplied by \(1+i\) every period.</em></p></div>
</div>`),
  graph("b^x", "b", { xMin: -2, xMax: 5, yMin: -1, yMax: 10, paramMin: 0.3, paramMax: 1.8, paramInit: 1.1, caption: "Animation: slide the per-period factor b in y = bˣ. b>1 models growth (rising), b<1 models decay (falling toward 0)." }),
]);
