// MCF3M Unit 4 — Financial Mathematics. Deep single-card lessons (MCR3U theme) PLUS
// interactive parameter-slider graphs (animation).
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u4 = {};

u4["4.1"] = L("4.1", "Simple & Compound Interest", [
  html(String.raw`<div class="lecture-box">
  <h1>💵 Simple &amp; Compound Interest</h1>
  <p><strong>Overview.</strong> Interest is the price of money over time. <strong>Simple interest</strong> pays only on the original principal, so the balance grows in a straight line. <strong>Compound interest</strong> pays interest <em>on the interest already earned</em>, so the balance grows like an exponential — slowly at first, then dramatically. Telling these two apart, and handling different compounding frequencies, is the heart of this unit.</p>
  <h2>📌 The two formulas</h2>
  <ul>
    <li><strong>Simple:</strong> \(I=Prt\) and \(A=P(1+rt)\) — \(P\) principal, \(r\) annual rate (decimal), \(t\) years. Linear growth.</li>
    <li><strong>Compound:</strong> \(A=P(1+i)^{n}\) — \(i\) is the rate <em>per compounding period</em>, \(n\) the number of periods. Exponential growth.</li>
    <li><strong>Compounding frequency:</strong> \(i=\dfrac{r}{\text{periods per year}}\) and \(n=(\text{periods per year})\times(\text{years})\). Annually: 1; semi-annually: 2; quarterly: 4; monthly: 12.</li>
  </ul>
  ${gframe(["y = 1 + 0.1*x", "y = 1.1^x"], { title: "Simple 1+0.1n (line) vs compound 1.1ⁿ (curve), 10% per year" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Simple interest</h3><p>Find the simple interest on $500 at 4% for 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(I=500(0.04)(3)\).</div><em>Conclusion: \(\$60\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Compound interest</h3><p>$1000 at 5% compounded annually for 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A=1000(1.05)^3\).</div><em>Conclusion: \(\approx\$1157.63\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Quarterly compounding</h3><p>$1000 at 6% compounded quarterly for 1 year.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(i=\dfrac{0.06}{4}=0.015,\ n=4\).</div><div class="step"><strong>Step 2:</strong> \(A=1000(1.015)^4\).</div><em>Conclusion: \(\approx\$1061.36\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Simple vs compound</h3><p>Compare $1000 at 5% for 5 years, simple vs compound (annual).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Simple \(=1000(1+0.25)=\$1250\); compound \(=1000(1.05)^5\approx\$1276.28\).</div><em>Conclusion: compound earns more. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Find the periodic rate</h3><p>For 6% per year compounded monthly, find \(i\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(i=\dfrac{0.06}{12}\).</div><em>Conclusion: \(0.005\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simple interest on $1000 at 5% for 4 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1000(0.05)(4)=\$200\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>$1000 at 5% compounded annually for 4 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1000(1.05)^4\approx\$1215.51\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>$2000 at 4% compounded semi-annually for 1 year?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(i=0.02,\ n=2\): \(2000(1.02)^2\approx\$2080.80\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>For 8% compounded quarterly, find \(i\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0.02\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>For 6% compounded monthly over 2 years, find \(n\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(24\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the difference between simple and compound interest?</h3><p><em>Simple pays only on the principal (linear); compound pays on interest too (exponential).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I get \(i\) and \(n\)?</h3><p><em>\(i=\) annual rate ÷ periods per year; \(n=\) periods per year × years.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Does more frequent compounding help?</h3><p><em>Yes, slightly — more periods means more compounding.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why does compound beat simple over time?</h3><p><em>Each period multiplies the whole balance, so the gap widens exponentially.</em></p></div>
</div>`),
  graph("(1+i)^x", "i", { xMin: 0, xMax: 12, yMin: 0, yMax: 6, paramMin: 0.01, paramMax: 0.15, paramInit: 0.05, caption: "Animation: slide the periodic rate i in (1+i)ⁿ — the growth factor of $1. Higher rates compound visibly faster." }),
]);

u4["4.2"] = L("4.2", "Present Value", [
  html(String.raw`<div class="lecture-box">
  <h1>⏮️ Present Value</h1>
  <p><strong>Overview.</strong> Compound interest tells you what money becomes in the future. <strong>Present value</strong> runs the clock backwards: how much must you invest <em>today</em> to reach a target amount later? This is called <strong>discounting</strong>, and it is the fair way to compare amounts of money that arrive at different times — by converting them all to today's dollars.</p>
  <h2>📌 The formula</h2>
  <ul>
    <li>\(PV=\dfrac{A}{(1+i)^{n}}=A(1+i)^{-n}\) — the compound-interest formula solved for the principal.</li>
    <li>A <strong>higher rate</strong> or a <strong>longer time</strong> gives a <em>smaller</em> present value: the future amount is discounted more.</li>
  </ul>
  ${gframe(["y = 1000 * 1.06^(-x)"], { title: "Discounting $1000: present value falls as the years (n) increase" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Discount a future amount</h3><p>What is the present value of $1000 in 5 years at 6%?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(PV=\dfrac{1000}{(1.06)^5}\).</div><em>Conclusion: \(\approx\$747.26\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Lower rate</h3><p>Present value of $2000 in 3 years at 5%?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{2000}{(1.05)^3}\).</div><em>Conclusion: \(\approx\$1727.68\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: How much to invest now</h3><p>How much now to have $5000 in 4 years at 5%?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{5000}{(1.05)^4}\).</div><em>Conclusion: \(\approx\$4113.51\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Compare options</h3><p>Which is worth more today: $1000 now or $1100 in 2 years at 6%?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(PV=\dfrac{1100}{(1.06)^2}\approx\$978.99\).</div><em>Conclusion: $1000 now is worth more. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Goal saving</h3><p>How much now to have $10000 in 6 years at 5%?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{10000}{(1.05)^6}\).</div><em>Conclusion: \(\approx\$7462.15\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Present value of $1000 in 5 years at 6%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\approx\$747.26\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>How much now to have $2000 in 4 years at 5%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{2000}{1.05^4}\approx\$1645.40\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Present value of $3000 in 3 years at 4%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{3000}{1.04^3}\approx\$2666.99\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Does a higher interest rate raise or lower the present value?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Lower it — more discounting.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Present value of $5000 in 5 years at 6%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\approx\$3736.29\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does present value mean?</h3><p><em>Today's worth of money you will receive later.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How does it relate to compound interest?</h3><p><em>It is \(A=P(1+i)^n\) solved for \(P\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Bigger rate — bigger or smaller PV?</h3><p><em>Smaller; a higher rate discounts the future more.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why compare using present value?</h3><p><em>It puts every amount in today's dollars, so they are comparable.</em></p></div>
</div>`),
  graph("(1+i)^(-x)", "i", { xMin: 0, xMax: 20, yMin: 0, yMax: 1, paramMin: 0.01, paramMax: 0.2, paramInit: 0.06, caption: "Animation: slide the rate i — the present-value (discount) factor (1+i)⁻ⁿ falls toward 0, and faster for higher rates." }),
]);

u4["4.3"] = L("4.3", "Annuities", [
  html(String.raw`<div class="lecture-box">
  <h1>🔁 Annuities</h1>
  <p><strong>Overview.</strong> An <strong>annuity</strong> is a sequence of <em>equal, regular payments</em> — saving the same amount each month, or repaying a loan. Because each payment then earns compound interest for a different length of time, the total is a <strong>geometric series</strong>. We use one formula for the value at the end (future value) and another for its worth today (present value).</p>
  <h2>📌 The formulas (ordinary simple annuity)</h2>
  <ul>
    <li><strong>Future value:</strong> \(FV=R\cdot\dfrac{(1+i)^{n}-1}{i}\), where \(R\) is the regular payment.</li>
    <li><strong>Present value:</strong> \(PV=R\cdot\dfrac{1-(1+i)^{-n}}{i}\).</li>
    <li>Payments are made at the <em>end</em> of each period, and the compounding period matches the payment period.</li>
  </ul>
  ${gframe(["y = 1.05^x"], { title: "Each annuity payment compounds — the totals form a geometric series" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Future value</h3><p>$500 per year for 4 years at 5%. Find the future value.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(FV=500\cdot\dfrac{(1.05)^4-1}{0.05}\).</div><em>Conclusion: \(\approx\$2155.06\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Future value</h3><p>$1000 per year for 3 years at 6%.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(1000\cdot\dfrac{(1.06)^3-1}{0.06}\).</div><em>Conclusion: \(\approx\$3183.60\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Present value</h3><p>$200 per year for 5 years at 5%. Find the present value.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(200\cdot\dfrac{1-(1.05)^{-5}}{0.05}\).</div><em>Conclusion: \(\approx\$865.90\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Future vs present value</h3><p>Why is an annuity's present value smaller than its future value?</p><div class="solution"><em>Conclusion: future value includes all the interest still to be earned; present value discounts it back to today. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Total deposits vs interest</h3><p>For Example 1, how much was deposited, and how much is interest?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Deposits \(=4\times500=\$2000\).</div><em>Conclusion: interest \(\approx2155.06-2000=\$155.06\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Future value of $1000/year for 4 years at 5%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1000\cdot\dfrac{1.05^4-1}{0.05}\approx\$4310.13\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Future value of $500/year for 3 years at 6%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\approx\$1591.80\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Present value of $300/year for 4 years at 5%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(300\cdot\dfrac{1-1.05^{-4}}{0.05}\approx\$1063.79\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>What kind of series is an annuity?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>A geometric series.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>What does \(R\) represent in the formulas?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>The regular (equal) payment each period.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is an annuity?</h3><p><em>A series of equal, regular payments.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Future vs present value of an annuity?</h3><p><em>FV is the total at the end; PV is what it is worth today.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why is an annuity a geometric series?</h3><p><em>Each payment grows by the same factor \((1+i)\) — a geometric pattern.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Real examples?</h3><p><em>Regular savings deposits, loan repayments, pensions.</em></p></div>
</div>`),
  graph("((1+i)^x - 1)/i", "i", { xMin: 0, xMax: 20, yMin: 0, yMax: 40, paramMin: 0.01, paramMax: 0.12, paramInit: 0.05, caption: "Animation: slide the rate i — the annuity accumulation factor [(1+i)ⁿ−1]/i grows with both the number of payments n and the rate." }),
]);
