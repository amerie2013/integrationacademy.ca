// MCR3U Unit 7 — Financial Applications. Single-card lessons (Grade 9/10 pattern).
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u7 = {};

u7["7.1"] = L("7.1", "Simple Interest", [html(String.raw`<div class="lecture-box">
  <h1>💵 Simple Interest</h1>
  <p><strong>Overview.</strong> <strong>Simple interest</strong> is paid only on the original principal. It grows the amount <em>linearly</em>, so it connects to arithmetic sequences.</p>
  <h2>📌 The formulas</h2>
  <ul>
    <li>Interest: \(I=Prt\) (\(P=\) principal, \(r=\) annual rate as a decimal, \(t=\) time in years).</li>
    <li>Amount: \(A=P+I=P(1+rt)\).</li>
  </ul>
  ${gframe(["y = 2*x + 1"], { title: "Simple interest is linear: A = P + (Pr)t" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Interest</h3><p>Find the interest on $500 at 4% for 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(I=500(0.04)(3)\).</div><em>Conclusion: \(I=\$60\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Amount</h3><p>Find the total amount in Example 1.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A=500+60\).</div><em>Conclusion: \(A=\$560\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Find the time</h3><p>$800 at 5% earns $120 interest. Find \(t\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(t=\dfrac{I}{Pr}=\dfrac{120}{40}\).</div><em>Conclusion: \(t=3\) years. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Find the principal</h3><p>An investment at 3% for 2 years earns $90. Find \(P\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P=\dfrac{I}{rt}=\dfrac{90}{0.06}\).</div><em>Conclusion: \(P=\$1500\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Find the rate</h3><p>$2000 earns $160 in 2 years. Find \(r\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(r=\dfrac{I}{Pt}=\dfrac{160}{4000}\).</div><em>Conclusion: \(r=0.04=4\%\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Interest on $1000 at 5% for 4 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1000(0.05)(4)=\$200\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Total amount for $1000 at 5% for 4 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\$1200\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>$600 at 6% earns $108. Find \(t\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(t=\dfrac{108}{36}=3\) years.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>At 4% for 5 years an investment earns $200. Find \(P\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(P=\dfrac{200}{0.20}=\$1000\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>$2500 earns $300 in 3 years. Find \(r\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(r=\dfrac{300}{7500}=0.04=4\%\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Decimal or percent for \(r\)?</h3><p><em>Always a decimal in the formula: 5% becomes 0.05.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why "linear"?</h3><p><em>\(A=P+(Pr)t\) is a line with slope \(Pr\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Interest vs amount?</h3><p><em>Interest \(I\) is the money earned; amount \(A=P+I\) is the total.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How does it connect to sequences?</h3><p><em>Adding the same interest each year is an arithmetic sequence.</em></p></div>
</div>`)]);

u7["7.2"] = L("7.2", "Compound Interest", [html(String.raw`<div class="lecture-box">
  <h1>📈 Compound Interest</h1>
  <p><strong>Overview.</strong> <strong>Compound interest</strong> pays interest on previous interest, so the amount grows <em>exponentially</em> — connecting to geometric sequences.</p>
  <h2>📌 The formula</h2>
  <ul>
    <li>\(A=P(1+i)^{n}\), where \(i=\) interest rate <em>per period</em> and \(n=\) number of periods.</li>
    <li>Compounded monthly: \(i=\dfrac{r}{12}\), \(n=12\times(\text{years})\).</li>
  </ul>
  ${gframe(["y = 1.5^x"], { title: "Compound interest grows exponentially" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Annual compounding</h3><p>$1000 at 5% compounded annually for 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A=1000(1.05)^{3}\).</div><em>Conclusion: \(\approx\$1157.63\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Interest earned</h3><p>How much interest in Example 1?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A-P=1157.63-1000\).</div><em>Conclusion: \(\approx\$157.63\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Monthly compounding</h3><p>$2000 at 6% compounded monthly for 2 years. Give \(i\) and \(n\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(i=\dfrac{0.06}{12}=0.005\), \(n=24\).</div><em>Conclusion: \(A=2000(1.005)^{24}\approx\$2254.32\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Five years</h3><p>$2000 at 4% compounded annually for 5 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2000(1.04)^{5}\).</div><em>Conclusion: \(\approx\$2433.31\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Beats simple interest</h3><p>$1000 at 6% for 10 years: simple vs compound (annual).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Simple \(=1000(1+0.6)=\$1600\); compound \(=1000(1.06)^{10}\approx\$1790.85\).</div><em>Conclusion: compound earns more. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>$500 at 4% compounded annually for 3 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(500(1.04)^{3}\approx\$562.43\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>$1500 at 5% compounded annually for 4 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1500(1.05)^{4}\approx\$1823.26\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>$1000 at 8% compounded annually for 5 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1000(1.08)^{5}\approx\$1469.33\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>For 6% compounded monthly, state \(i\) and \(n\) for 3 years.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(i=0.005\), \(n=36\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Interest earned on $1000 at 5% compounded annually for 2 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1000(1.05)^2-1000=\$102.50\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \(i\) vs \(r\)?</h3><p><em>\(r\) is the annual rate; \(i\) is the rate per compounding period.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I get \(n\)?</h3><p><em>Periods per year times the number of years.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why does compound beat simple?</h3><p><em>You earn interest on previous interest — exponential vs linear.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Does more frequent compounding help?</h3><p><em>Yes, slightly — more periods means more compounding.</em></p></div>
</div>`)]);

u7["7.3"] = L("7.3", "Present Value", [html(String.raw`<div class="lecture-box">
  <h1>⏮️ Present Value</h1>
  <p><strong>Overview.</strong> <strong>Present value</strong> answers: how much must I invest <em>now</em> to reach a future amount? It "discounts" the future back to today.</p>
  <h2>📌 The formula</h2>
  <p>\(PV=\dfrac{A}{(1+i)^{n}}\), the compound-interest formula solved for the principal.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Discount a future amount</h3><p>What is the present value of $1000 in 5 years at 6% annually?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(PV=\dfrac{1000}{(1.06)^{5}}\).</div><em>Conclusion: \(\approx\$747.26\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Lower rate</h3><p>Present value of $5000 in 3 years at 4%?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{5000}{(1.04)^{3}}\).</div><em>Conclusion: \(\approx\$4445.00\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: How much to invest now</h3><p>How much now to have $2000 in 4 years at 5%?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{2000}{(1.05)^{4}}\).</div><em>Conclusion: \(\approx\$1645.40\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Goal saving</h3><p>To have $10000 in 6 years at 5%, invest now?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{10000}{(1.05)^{6}}\).</div><em>Conclusion: \(\approx\$7462.15\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Compare</h3><p>Which is worth more today: $1000 now or $1100 in 2 years at 6%?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(PV=\dfrac{1100}{(1.06)^{2}}\approx\$978.99\).</div><em>Conclusion: $1000 now is worth more. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Present value of $2000 in 3 years at 5%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{2000}{(1.05)^{3}}\approx\$1727.68\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Present value of $5000 in 5 years at 6%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{5000}{(1.06)^{5}}\approx\$3736.29\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>How much now to have $3000 in 4 years at 4%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{3000}{(1.04)^{4}}\approx\$2564.39\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Present value of $1000 in 10 years at 7%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{1000}{(1.07)^{10}}\approx\$508.35\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Is $500 now or $600 in 3 years at 5% worth more today?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{600}{(1.05)^{3}}\approx\$518.30>\$500\): the future $600.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does present value mean?</h3><p><em>Today's worth of money you will receive later.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How does it relate to compound interest?</h3><p><em>It is \(A=P(1+i)^n\) solved for \(P\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Bigger rate, bigger or smaller PV?</h3><p><em>Smaller — a higher rate discounts the future more.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why compare using PV?</h3><p><em>It puts all amounts in today's dollars, so they are comparable.</em></p></div>
</div>`)]);

u7["7.4"] = L("7.4", "Annuities", [html(String.raw`<div class="lecture-box">
  <h1>🔁 Annuities</h1>
  <p><strong>Overview.</strong> An <strong>annuity</strong> is a series of equal, regular payments. Each payment earns compound interest, so the total is a <em>geometric series</em>.</p>
  <h2>📌 The formulas</h2>
  <ul>
    <li><strong>Future value:</strong> \(FV=R\cdot\dfrac{(1+i)^{n}-1}{i}\) (\(R=\) regular payment).</li>
    <li><strong>Present value:</strong> \(PV=R\cdot\dfrac{1-(1+i)^{-n}}{i}\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Future value</h3><p>$500/year for 4 years at 5%. Find the future value.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(FV=500\cdot\dfrac{(1.05)^{4}-1}{0.05}\).</div><em>Conclusion: \(\approx\$2155.06\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Future value</h3><p>$1000/year for 3 years at 6%.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(1000\cdot\dfrac{(1.06)^{3}-1}{0.06}\).</div><em>Conclusion: \(\approx\$3183.60\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Present value</h3><p>$200/year for 5 years at 5%. Find the present value.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(200\cdot\dfrac{1-(1.05)^{-5}}{0.05}\).</div><em>Conclusion: \(\approx\$865.90\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Bigger payment</h3><p>$1200/year for 4 years at 4% (future value).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(1200\cdot\dfrac{(1.04)^{4}-1}{0.04}\).</div><em>Conclusion: \(\approx\$5097.98\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: FV vs PV</h3><p>Why is the present value of an annuity smaller than its future value?</p><div class="solution"><em>Conclusion: future value includes all the interest still to be earned; present value discounts it back to today. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Future value of $1000/year for 4 years at 5%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1000\cdot\dfrac{(1.05)^{4}-1}{0.05}\approx\$4310.13\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Future value of $500/year for 3 years at 6%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\approx\$1591.80\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Present value of $300/year for 4 years at 5%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(300\cdot\dfrac{1-(1.05)^{-4}}{0.05}\approx\$1063.79\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Future value of $2000/year for 3 years at 4%?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\approx\$6243.20\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>What kind of series is an annuity?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>A geometric series.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \(R\)?</h3><p><em>The regular (equal) payment each period.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Future vs present value of an annuity?</h3><p><em>FV is the total at the end; PV is what it is worth today.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why is an annuity a geometric series?</h3><p><em>Each payment grows by the same factor \((1+i)\) — a geometric pattern.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Real examples?</h3><p><em>Regular savings deposits, loan repayments, pensions.</em></p></div>
</div>`)]);
