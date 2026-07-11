// MBF3C Unit 3 — Personal Finance. Deep single-card lessons + interactive graphs.
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u3 = {};

u3["3.1"] = L("3.1", "Simple & Compound Interest", [
  html(String.raw`<div class="lecture-box">
  <h1>💵 Simple &amp; Compound Interest</h1>
  <p><strong>Overview.</strong> Interest is the price of money over time. <strong>Simple interest</strong> is paid only on the original principal, so the balance grows in a straight line. <strong>Compound interest</strong> pays interest <em>on the interest already earned</em>, so it grows exponentially — the engine behind savings, loans, and credit.</p>
  <h2>📌 The two formulas</h2>
  <ul>
    <li><strong>Simple:</strong> \(I=Prt\) and \(A=P(1+rt)\) — \(P\) principal, \(r\) annual rate (decimal), \(t\) years.</li>
    <li><strong>Compound:</strong> \(A=P(1+i)^{n}\) — \(i=\dfrac{r}{\text{periods/yr}}\), \(n=(\text{periods/yr})\times\text{years}\).</li>
    <li><strong>Total interest:</strong> \(I=A-P\).</li>
  </ul>
  ${gframe(["y = 1 + 0.1*x", "y = 1.1^x"], { title: "Simple 1+0.1n (line) vs compound 1.1ⁿ (curve), 10% per year" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Simple interest</h3><p>Find the simple interest on $500 at 4% for 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(I=500(0.04)(3)\).</div><em>Conclusion: \(\$60\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Compound interest</h3><p>$1000 at 5% compounded annually for 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A=1000(1.05)^3\).</div><em>Conclusion: \(\approx\$1157.63\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Quarterly compounding</h3><p>$1000 at 6% compounded quarterly for 1 year.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(i=\dfrac{0.06}{4}=0.015,\ n=4\).</div><em>Conclusion: \(1000(1.015)^4\approx\$1061.36\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Total interest</h3><p>How much interest is earned in Example 2?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(I=A-P=1157.63-1000\).</div><em>Conclusion: \(\approx\$157.63\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Simple vs compound</h3><p>Compare $1000 at 5% for 5 years, simple vs compound (annual).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Simple \(=1000(1.25)=\$1250\); compound \(=1000(1.05)^5\approx\$1276.28\).</div><em>Conclusion: compound earns more. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simple interest on $1000 at 5% for 4 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\$200\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>$1000 at 5% compounded annually for 4 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\approx\$1215.51\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(i\) for 6% compounded monthly.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0.005\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(n\) for 6% compounded monthly over 2 years.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(24\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Total interest on $2000 at 4% compounded annually for 3 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2000(1.04)^3-2000\approx\$249.73\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Difference between simple and compound interest?</h3><p><em>Simple pays only on the principal (linear); compound pays on interest too (exponential).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I get \(i\) and \(n\)?</h3><p><em>\(i=\) annual rate ÷ periods/yr; \(n=\) periods/yr × years.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I find total interest?</h3><p><em>\(I=A-P\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why does compound beat simple?</h3><p><em>Each period multiplies the whole balance, so the gap widens.</em></p></div>
</div>`),
  graph("(1+i)^x", "i", { xMin: 0, xMax: 12, yMin: 0, yMax: 6, paramMin: 0.01, paramMax: 0.15, paramInit: 0.05, caption: "Animation: slide the periodic rate i in (1+i)ⁿ — the growth factor of $1. Higher rates compound visibly faster." }),
]);

u3["3.2"] = L("3.2", "Saving, Investing & Credit", [
  html(String.raw`<div class="lecture-box">
  <h1>🏦 Saving, Investing &amp; Credit</h1>
  <p><strong>Overview.</strong> Financial institutions offer accounts, investments, and credit — each with its own costs and trade-offs. The key skill is comparing options: account fees, an investment's <em>risk vs return</em>, and the real <strong>cost of buying on credit</strong>, which uses the same compound-interest math from the last lesson.</p>
  <h2>📌 Key ideas</h2>
  <ul>
    <li><strong>Accounts:</strong> weigh monthly/transaction fees; sometimes a flat-fee package is cheaper.</li>
    <li><strong>Investments:</strong> higher potential return usually means higher risk (savings/GICs are low-risk; stocks are higher-risk).</li>
    <li><strong>Credit:</strong> an unpaid card balance is charged interest. Monthly rate \(=\dfrac{\text{annual rate}}{12}\); for partial periods use \(I=Prt\) with \(t\) in years.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Credit-card interest (one month)</h3><p>A $1500 balance at 19.9% per year is not paid for one month. Find the interest.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Monthly rate \(=\dfrac{0.199}{12}\approx0.01658\).</div><em>Conclusion: \(1500(0.01658)\approx\$24.88\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Cost of a purchase on credit</h3><p>A $1500 purchase is paid 55 days late at 19.9% per year (simple). Find the interest.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(I=Prt=1500(0.199)\left(\dfrac{55}{365}\right)\).</div><em>Conclusion: \(\approx\$45.00\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: A GIC</h3><p>$2000 in a GIC at 3% compounded annually for 2 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2000(1.03)^2\).</div><em>Conclusion: \(\approx\$2121.80\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Choosing an account</h3><p>Account A: flat $10/month. Account B: $0.50 per transaction. You make 25 transactions a month. Which is cheaper?</p><div class="solution"><div class="step"><strong>Step 1:</strong> B costs \(25(0.50)=\$12.50\) vs A's \$10.</div><em>Conclusion: Account A. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Comparing two cards</h3><p>On a $1000 balance unpaid for one month, compare Card A (19.9%) and Card B (21.5%).</p><div class="solution"><div class="step"><strong>Step 1:</strong> A: \(1000\cdot\tfrac{0.199}{12}\approx\$16.58\); B: \(1000\cdot\tfrac{0.215}{12}\approx\$17.92\).</div><em>Conclusion: Card A costs less. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Interest on a $2000 card balance at 18% per year for one month?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2000\cdot\tfrac{0.18}{12}=\$30\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>$3000 in a GIC at 4% compounded annually for 2 years?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3000(1.04)^2\approx\$3244.80\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Which is riskier: a savings account or stocks?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Stocks (higher risk, higher potential return).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Account A: $12/month flat. Account B: $0.60 per transaction, 18 transactions. Which is cheaper?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>B costs \(18(0.60)=\$10.80<\$12\): Account B.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Interest on a $1200 purchase paid 30 days late at 20% per year (simple)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1200(0.20)(30/365)\approx\$19.73\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I get a monthly interest rate?</h3><p><em>Divide the annual rate by 12.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does "risk vs return" mean?</h3><p><em>Higher potential return usually comes with a higher chance of loss.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I compare account fees?</h3><p><em>Total each option's monthly cost and pick the lower.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why is carrying a card balance expensive?</h3><p><em>Interest compounds on the unpaid balance — it grows quickly.</em></p></div>
</div>`),
  graph("1000*(1+0.199/12)^x", "x", { xMin: 0, xMax: 24, yMin: 900, yMax: 1500, paramMin: 0, paramMax: 24, paramInit: 12, caption: "Animation: an unpaid $1000 credit-card balance at 19.9%/yr — slide the number of months to watch the debt compound." }),
]);

u3["3.3"] = L("3.3", "Owning & Operating a Vehicle", [
  html(String.raw`<div class="lecture-box">
  <h1>🚗 Owning &amp; Operating a Vehicle</h1>
  <p><strong>Overview.</strong> A vehicle's sticker price is only the start. The <strong>total cost of ownership</strong> adds financing, insurance, fuel, and maintenance — and the car loses value (<em>depreciates</em>) every year. Adding these up, and finding the cost per kilometre, is essential budgeting math.</p>
  <h2>📌 The cost pieces</h2>
  <ul>
    <li><strong>Fuel:</strong> \(\text{cost}=\dfrac{\text{km}}{100}\times(\text{L/100 km})\times(\text{price/L})\).</li>
    <li><strong>Insurance &amp; maintenance:</strong> usually quoted per year; divide by 12 for monthly.</li>
    <li><strong>Depreciation:</strong> exponential decay — value \(=\text{price}\times(1-r)^{t}\).</li>
    <li><strong>Cost per km:</strong> \(\dfrac{\text{total annual cost}}{\text{km per year}}\).</li>
  </ul>
  ${gframe(["y = 0.85^x"], { title: "Depreciation: value decays ~15% per year (shape of 0.85ᵗ)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Fuel cost</h3><p>A car drives 12 000 km/yr at 8 L/100 km; fuel is $1.50/L. Find the yearly fuel cost.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{12000}{100}\times8\times1.50=120\times8\times1.50\).</div><em>Conclusion: \(\$1440\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Insurance per month</h3><p>Insurance costs $1800 per year. Find the monthly cost.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{1800}{12}\).</div><em>Conclusion: \(\$150\)/month. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Depreciation</h3><p>A $30 000 car loses 15% of its value per year. Find its value after 1 year.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(30000(0.85)^1\).</div><em>Conclusion: \(\$25\,500\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Total annual cost</h3><p>Financing $4000, insurance $1800, fuel $1440, maintenance $600. Find the total.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Add them: \(4000+1800+1440+600\).</div><em>Conclusion: \(\$7840\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Cost per km</h3><p>Using Example 4, find the cost per km for 12 000 km/yr.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{7840}{12000}\).</div><em>Conclusion: \(\approx\$0.65\)/km. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Yearly fuel: 10 000 km at 9 L/100 km, $1.40/L.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(100\times9\times1.40=\$1260\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Insurance $2400/yr. Monthly cost?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\$200\)/month.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>A $25 000 car depreciates 20%/yr. Value after 1 year?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(25000(0.80)=\$20\,000\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Total annual cost: financing $3600, insurance $2000, fuel $1500, maintenance $500.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\$7600\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Cost per km for $7600/yr over 10 000 km.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\$0.76\)/km.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I find yearly fuel cost?</h3><p><em>\(\dfrac{\text{km}}{100}\times\text{L/100 km}\times\text{price/L}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is depreciation?</h3><p><em>The yearly loss of value — exponential decay at rate \(r\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What goes into total cost of ownership?</h3><p><em>Financing, insurance, fuel, and maintenance.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do I find cost per km?</h3><p><em>Divide the total annual cost by the kilometres driven that year.</em></p></div>
</div>`),
]);
