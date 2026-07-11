// MCF3M Unit 3 — Exponential Functions. Deep single-card lessons (MCR3U theme) PLUS
// interactive parameter-slider graphs (animation) via graph(expr, param, opts).
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u3 = {};

u3["3.1"] = L("3.1", "Exponent Laws & Rational Exponents", [
  html(String.raw`<div class="lecture-box">
  <h1>⚡ Exponent Laws &amp; Rational Exponents</h1>
  <p><strong>Overview.</strong> A <strong>power</strong> \(x^n\) is repeated multiplication: \(x\) used as a factor \(n\) times. Exponentials grow so fast that expanding is hopeless — instead a handful of <strong>laws</strong> let us combine powers directly. In this lesson we don't just memorize the laws; we see <em>why</em> each one is true, then extend exponents to zero, negatives, and fractions so that every law keeps working.</p>
  <h2>📌 The five core laws (and why)</h2>
  <ul>
    <li><strong>Product</strong> \(x^m\cdot x^n=x^{m+n}\): you simply <em>count the factors</em> — \(m\) of them times \(n\) more is \(m+n\).</li>
    <li><strong>Quotient</strong> \(\dfrac{x^m}{x^n}=x^{m-n}\): the \(n\) factors on the bottom <em>cancel</em> \(n\) of the top.</li>
    <li><strong>Power of a power</strong> \((x^m)^n=x^{mn}\): \(n\) copies of \(x^m\), each contributing \(m\) factors.</li>
    <li><strong>Power of a product/quotient</strong> \((xy)^n=x^n y^n\) and \(\left(\tfrac xy\right)^n=\tfrac{x^n}{y^n}\): the exponent reaches every factor.</li>
  </ul>
  <h2>📌 Extending the exponent</h2>
  <ul>
    <li><strong>Zero:</strong> \(x^0=1\). Why? \(\dfrac{x^n}{x^n}=x^{n-n}=x^0\), and anything over itself is \(1\).</li>
    <li><strong>Negative:</strong> \(x^{-n}=\dfrac{1}{x^n}\) — continue the pattern \(\dots,x^2,x^1,x^0,x^{-1}\), dividing by \(x\) each step.</li>
    <li><strong>Rational:</strong> \(x^{1/n}=\sqrt[n]{x}\) and \(x^{m/n}=\left(\sqrt[n]{x}\right)^m\) — the <em>denominator is a root</em>, the <em>numerator is a power</em>.</li>
  </ul>
  ${gframe(["y = 2^x"], { title: "The exponential parent y = 2^x" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Product law</h3><p>Simplify \(x^5\cdot x^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Add the exponents: \(5+3\).</div><em>Conclusion: \(x^{8}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Power of a power</h3><p>Simplify \((x^4)^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Multiply the exponents: \(4\times3\).</div><em>Conclusion: \(x^{12}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Quotient law</h3><p>Simplify \(\dfrac{x^9}{x^4}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Subtract the exponents: \(9-4\).</div><em>Conclusion: \(x^{5}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Negative exponent</h3><p>Evaluate \(2^{-3}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Take the reciprocal: \(\dfrac{1}{2^3}\).</div><em>Conclusion: \(\dfrac{1}{8}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Rational exponent</h3><p>Evaluate \(27^{2/3}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Root first (smaller numbers): \(\sqrt[3]{27}=3\).</div><div class="step"><strong>Step 2:</strong> Then the power: \(3^2\).</div><em>Conclusion: \(9\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simplify \(x^6\cdot x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Simplify \((2x^3)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x^6\) (the exponent reaches both the 2 and the \(x^3\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Simplify \(\dfrac{y^8}{y^3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y^5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Evaluate \(5^{-2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{1}{25}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Evaluate \(16^{3/4}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\left(\sqrt[4]{16}\right)^3=2^3\). <em>\(8\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why is \(x^0=1\)?</h3><p><em>From the quotient law, \(\frac{x^n}{x^n}=x^0\), and anything divided by itself is 1.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Does a negative exponent make a number negative?</h3><p><em>No — it means reciprocal. \(2^{-3}=\frac18\), still positive.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does the denominator of a rational exponent do?</h3><p><em>It is the root: \(x^{1/2}=\sqrt{x}\), \(x^{1/3}=\sqrt[3]{x}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Best order for \(x^{m/n}\)?</h3><p><em>Take the root first, then the power — the numbers stay small.</em></p></div>
</div>`),
  graph("b^x", "b", { xMin: -4, xMax: 4, yMin: -1, yMax: 16, paramMin: 0.2, paramMax: 4, paramInit: 2, caption: "Animation: slide the base b in y = bˣ. b>1 grows, 0<b<1 decays, b=1 is the flat line y=1. Every curve passes through (0,1)." }),
]);

u3["3.2"] = L("3.2", "Exponential Functions & Their Graphs", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Exponential Functions &amp; Their Graphs</h1>
  <p><strong>Overview.</strong> An <strong>exponential function</strong> has the form \(f(x)=a\cdot b^{x}\), where the variable sits <em>in the exponent</em> (unlike a quadratic, where it sits in the base). That single difference changes everything: instead of a curve that turns around, an exponential keeps multiplying by the same factor, so it rises (or falls) ever faster while hugging a horizontal line on the other side.</p>
  <h2>📌 Key features of \(y=a\cdot b^{x}\)</h2>
  <ul>
    <li><strong>y-intercept</strong> \((0,a)\): at \(x=0\), \(b^0=1\), so \(y=a\).</li>
    <li><strong>Horizontal asymptote</strong> \(y=0\): the curve approaches the x-axis but never reaches it.</li>
    <li><strong>Domain</strong> all real numbers; <strong>range</strong> \(y>0\) (when \(a>0\)) — it is never negative and never zero.</li>
    <li><strong>Growth vs decay:</strong> \(b>1\) grows; \(0<b<1\) decays. A <em>larger</em> base grows faster (steeper).</li>
  </ul>
  <p><strong>Tell them apart:</strong> linear \(y=2x\) adds a constant, quadratic \(y=x^2\) squares, exponential \(y=2^x\) <em>multiplies</em> by a constant each step — so it eventually outgrows any polynomial.</p>
  ${gframe(["y = 2^x"], { title: "y = 2^x: y-intercept (0,1), asymptote y = 0, always positive" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Evaluate</h3><p>For \(f(x)=2^x\), find \(f(3)\) and \(f(-1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2^3=8\); \(2^{-1}=\tfrac12\).</div><em>Conclusion: \(8\) and \(\tfrac12\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: y-intercept</h3><p>State the y-intercept of \(y=3\cdot2^x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> At \(x=0\), \(y=3(1)\).</div><em>Conclusion: \((0,3)\). ✓</em></div>${gframe(["y = 3*2^x"], { title: "3·2ˣ: at x=0 the curve passes through 3 — the y-intercept (0,3)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Growth or decay?</h3><p>Is \(y=\left(\tfrac12\right)^x\) growth or decay?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Base \(0<b<1\).</div><em>Conclusion: decay. ✓</em></div>${gframe(["y = 0.5^x"], { title: "(½)ˣ: base between 0 and 1, so the curve falls — decay" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Asymptote</h3><p>State the horizontal asymptote of \(y=2^x+3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The \(+3\) lifts the whole graph by 3.</div><em>Conclusion: \(y=3\). ✓</em></div>${gframe(["y = 2^x + 3"], { title: "2ˣ+3: lifted up 3, so the horizontal asymptote rises to y=3" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Compare bases</h3><p>Which grows faster, \(y=2^x\) or \(y=5^x\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Both pass \((0,1)\); the larger base is steeper.</div><em>Conclusion: \(5^x\). ✓</em></div>${gframe(["y = 2^x", "y = 5^x"], { title: "2ˣ vs 5ˣ: both pass through (0,1), but the larger base 5ˣ climbs far steeper" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(f(4)\) for \(f(x)=2^x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(16\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>State the y-intercept of \(y=5\cdot2^x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((0,5)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Is \(y=3^x\) growth or decay?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Growth (\(b>1\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>State the asymptote of \(y=2^x-5\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=-5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>State the domain and range of \(y=2^x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Domain all reals; range \(y>0\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How is an exponential different from a quadratic?</h3><p><em>The variable is in the exponent, so it multiplies (not squares) — and never turns around.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why is \(y=b^x\) always positive?</h3><p><em>A positive base raised to any power stays positive; it only approaches 0.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What moves the horizontal asymptote?</h3><p><em>A vertical shift: \(y=b^x+c\) has asymptote \(y=c\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Which base grows fastest?</h3><p><em>The largest base — it multiplies by more each step.</em></p></div>
</div>`),
  graph("a*2^x", "a", { xMin: -4, xMax: 4, yMin: -8, yMax: 8, paramMin: -3, paramMax: 5, paramInit: 1, caption: "Animation: slide a in y = a·2ˣ. It vertically stretches the curve, sets the y-intercept (0, a), and reflects it below the x-axis when a<0." }),
  graph("2^x + c", "c", { xMin: -4, xMax: 4, yMin: -6, yMax: 10, paramMin: -5, paramMax: 5, paramInit: 0, caption: "Animation: slide c in y = 2ˣ + c. The whole curve (and its horizontal asymptote y = c) moves up or down." }),
]);

u3["3.3"] = L("3.3", "Exponential Growth & Decay Applications", [
  html(String.raw`<div class="lecture-box">
  <h1>🌱 Exponential Growth &amp; Decay Applications</h1>
  <p><strong>Overview.</strong> Anything that changes by the <em>same percentage</em> each period is exponential: populations, bacteria, radioactive material, a cooling drink, money in the bank. We capture it all with one model, \(y=a\cdot b^{t}\), where \(a\) is the <strong>starting amount</strong> and \(b\) is the <strong>multiplier per period</strong>. The whole skill is turning a story into \(a\) and \(b\).</p>
  <h2>📌 Building the model</h2>
  <ul>
    <li><strong>Growth</strong> of \(r\) per period: \(b=1+r\) (e.g. \(+8\%\Rightarrow b=1.08\)).</li>
    <li><strong>Decay</strong> of \(r\) per period: \(b=1-r\) (e.g. \(-15\%\Rightarrow b=0.85\)).</li>
    <li><strong>Doubling:</strong> \(b=2\). <strong>Half-life:</strong> \(b=\tfrac12\); over a half-life \(h\), use \(y=a\left(\tfrac12\right)^{t/h}\).</li>
    <li><strong>Compound interest</strong> \(A=P(1+i)^n\) is just exponential growth of money — the bridge to Unit 4.</li>
  </ul>
  ${gframe(["y = 0.5^x"], { title: "Decay: y = (½)ˣ halves each step, approaching y = 0" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Population doubling</h3><p>A colony of 200 doubles yearly: \(P=200(2)^t\). Find \(P\) after 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(200(2)^3=200(8)\).</div><em>Conclusion: \(1600\). ✓</em></div>${gframe(["y = 200*2^x"], { title: "P=200·2ᵗ: the colony doubles each year — 1600 after 3 years" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Half-life</h3><p>80 g of a substance halves every 5 years. How much remains after 10 years?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(10/5=2\) half-lives: \(80\left(\tfrac12\right)^2\).</div><em>Conclusion: \(20\) g. ✓</em></div>${gframe(["y = 80*0.5^(x/5)"], { title: "80(½)^(t/5): halves every 5 years — down to 20 g after 10 years" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Growth factor</h3><p>A town grows \(8\%\) per year. State the growth factor.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(b=1+0.08\).</div><em>Conclusion: \(1.08\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Decay factor</h3><p>A car loses \(15\%\) of its value each year. State the decay factor.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(b=1-0.15\).</div><em>Conclusion: \(0.85\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Compound interest</h3><p>\$1000 grows at \(5\%\) per year, compounded annually. Find its value after 2 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(1000(1.05)^2\).</div><em>Conclusion: \(\approx\$1102.50\). ✓</em></div>${gframe(["y = 1000*1.05^x"], { title: "$1000 at 5%/yr compounded: about $1102.50 after 2 years" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>For \(P=200(2)^t\), find \(P\) after 4 years.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(200(16)=3200\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>State the growth factor for \(+5\%\) per year.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1.05\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>State the decay factor for \(-10\%\) per year.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0.90\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A 100 g sample halves every 3 hours. How much remains after 9 hours?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>3 half-lives: \(100\left(\tfrac12\right)^3=12.5\) g.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>\$500 grows at \(4\%\) per year for 3 years. Write the expression for its value.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(500(1.04)^3\approx\$562.43\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I find \(b\) from a percentage?</h3><p><em>Growth: \(b=1+r\). Decay: \(b=1-r\), with \(r\) as a decimal.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does \(a\) represent?</h3><p><em>The starting amount, at \(t=0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do half-life problems work?</h3><p><em>Count the number of half-lives, \(t/h\), and raise \(\tfrac12\) to that power.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why is compound interest exponential?</h3><p><em>The balance is multiplied by \(1+i\) every period — the same multiplier each time.</em></p></div>
</div>`),
  graph("b^x", "b", { xMin: -2, xMax: 5, yMin: -1, yMax: 10, paramMin: 0.3, paramMax: 1.8, paramInit: 1.1, caption: "Animation: slide the per-period factor b in y = bˣ. b>1 models growth (rising), b<1 models decay (falling toward 0)." }),
]);
