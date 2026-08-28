// IB Math AA SL — Unit 4: Statistics & Probability. Original content and examples.
// Pitched at the harder end of SL: grouped-data calculations, the 1.5×IQR rule,
// without-replacement trees, reverse-conditional problems, and inverse normal
// systems — matching Unit 3's step-up in difficulty.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u4 = {};

u4["4.1"] = L("4.1", "Sampling & Presenting Data", [
  html(String.raw`<div class="lecture-box">
  <h1>📋 Sampling &amp; Presenting Data</h1>
  <p><strong>Overview.</strong> Statistics starts with getting a fair sample and organizing it clearly. This lesson covers sampling methods, spotting bias, and reading (or building) frequency tables and histograms — including estimating a mean from grouped data, where individual values are lost.</p>
  <h2>📌 Sampling Methods</h2>
  <p><strong>Simple random:</strong> every member has an equal chance. <strong>Stratified:</strong> the population is split into groups (strata), and a sample is drawn from each group <em>proportionally</em> to its size. <strong>Systematic:</strong> every \(k\)th member. <strong>Convenience:</strong> whoever's easiest to reach — usually biased.</p>
  <h2>📌 Estimating the Mean from Grouped Data</h2>
  <p>When data is grouped into class intervals, use the <strong>midpoint</strong> of each class as a stand-in for every value in it:</p>
  <p style="text-align:center;">\( \bar x \approx \dfrac{\sum fm}{\sum f} \)</p>
  <p>where \(f\) is each class's frequency and \(m\) is its midpoint.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 260 170" width="280" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="150" x2="250" y2="150" stroke="#333" stroke-width="1.5"/>
      <line x1="30" y1="150" x2="30" y2="20" stroke="#333" stroke-width="1.5"/>
      <rect x="40" y="110" width="35" height="40" fill="#4a90e2"/>
      <rect x="80" y="70" width="35" height="80" fill="#4a90e2"/>
      <rect x="120" y="40" width="35" height="110" fill="#4a90e2"/>
      <rect x="160" y="90" width="35" height="60" fill="#4a90e2"/>
      <rect x="200" y="130" width="35" height="20" fill="#4a90e2"/>
      <text x="45" y="163" font-size="9" fill="#666">0–10</text>
      <text x="85" y="163" font-size="9" fill="#666">10–20</text>
      <text x="125" y="163" font-size="9" fill="#666">20–30</text>
      <text x="165" y="163" font-size="9" fill="#666">30–40</text>
      <text x="205" y="163" font-size="9" fill="#666">40–50</text>
      <text x="8" y="45" font-size="10" fill="#666">freq</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">a histogram: bar heights show frequency for each equal-width class interval</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>A school wants a sample of 60 students from a population of 900 (400 Grade 11, 500 Grade 12). Describe how to take a stratified sample and find how many students should come from each grade.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The sampling fraction is \(\dfrac{60}{900}=\dfrac{1}{15}\).</div>
      <div class="step"><strong>Step 2:</strong> Apply it to each stratum: Grade 11: \(400\times\tfrac1{15}\approx26.7\to27\). Grade 12: \(500\times\tfrac1{15}\approx33.3\to33\).</div>
      <em>Conclusion: sample 27 Grade 11 students and 33 Grade 12 students, each chosen by simple random sampling within their grade. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — bias critique</h3><p>A researcher wants to know how many hours per week the "average student" spends on homework, and surveys every student leaving the school library after 6pm. Identify the sampling method and explain the bias it introduces.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> This is <strong>convenience sampling</strong> — the researcher surveys whoever is easy to reach.</div>
      <em>Conclusion: this systematically over-represents students who study a lot (they're the ones at the library late), so the estimate of average homework time will likely be biased upward. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — grouped mean</h3><p>Estimate the mean of this grouped data: 0–10 (freq 4), 10–20 (freq 9), 20–30 (freq 12), 30–40 (freq 5).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Midpoints: \(5, 15, 25, 35\).</div>
      <div class="step"><strong>Step 2:</strong> \(\sum fm = 4(5)+9(15)+12(25)+5(35) = 20+135+300+175=630\).</div>
      <div class="step"><strong>Step 3:</strong> \(\sum f=4+9+12+5=30\).</div>
      <em>Conclusion: \(\bar x\approx\dfrac{630}{30}=21\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Identify the modal class of the data in Example 3, and explain why the true mean can't be found exactly from a grouped table.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The class with the highest frequency (12) is \(20\text{–}30\), so that's the modal class.</div>
      <em>Conclusion: modal class is 20–30; the exact mean is unknown because individual data values inside each class were lost when grouped — only the midpoint approximation is available. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — evaluating a sampling design</h3><p>A city wants to estimate average household income by randomly selecting 200 houses from a single, randomly-chosen neighbourhood. Evaluate this design and suggest an improvement.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Although the houses are chosen randomly, they are only drawn from <em>one</em> neighbourhood — neighbourhoods often differ systematically in income, so this is not representative of the whole city.</div>
      <div class="step"><strong>Step 2:</strong> A stratified sample — treating each neighbourhood as a stratum and sampling proportionally from every one — would better reflect the city's actual income spread.</div>
      <em>Conclusion: the design has a hidden bias from clustering in one area; stratifying across all neighbourhoods fixes it. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>A population of 800 has 300 in group A and 500 in group B. Find the stratified sample sizes for a total sample of 40.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: fraction $=40/800=1/20$; A: $300/20=15$; B: $500/20=25$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A pollster only surveys people who answer their landline during weekday afternoons. Name the bias this introduces.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: it over-represents people who are home during the day (e.g., retirees, non-working adults) and under-represents those working or in school.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Estimate the mean from: 0–4 (freq 3), 4–8 (freq 7), 8–12 (freq 10).</p><details><summary>View answer</summary><div class="solution"><div class="step">Midpoints $2,6,10$. $\sum fm=6+42+100=148$, $\sum f=20$. <em>Answer: $\bar x\approx7.4$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>State the modal class for Question 3's data.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 8–12 (frequency 10, the highest).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A survey estimates a grouped mean of 21 from Example 3's table, but the true (ungrouped) mean turns out to be 20.4. Explain why these differ.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: the grouped estimate assumes every value in a class sits exactly at the midpoint, which is rarely true — the actual values within each class may be unevenly distributed, so the estimate carries some error.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why use stratified sampling instead of simple random sampling?</h3><p><em>It guarantees proportional representation from every subgroup, which pure randomness can accidentally skew, especially with a small sample.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why use the midpoint for grouped data?</h3><p><em>It's the best single guess for an unknown value's location within its class interval, assuming values are roughly spread evenly across it.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the general test for sampling bias?</h3><p><em>Ask whether every member of the population had a genuinely equal (or proportionally fair) chance of being included — if some group is systematically over- or under-represented, the sample is biased.</em></p></div>
</div>`),
]);

u4["4.2"] = L("4.2", "Measures of Central Tendency & Spread", [
  html(String.raw`<div class="lecture-box">
  <h1>📊 Measures of Central Tendency &amp; Spread</h1>
  <p><strong>Overview.</strong> A single "average" rarely tells the whole story — you also need to know how spread out the data is. This lesson covers standard deviation, the five-number summary, box plots, the outlier rule, and how transformations of the data affect these measures.</p>
  <h2>📌 Standard Deviation</h2>
  <p style="text-align:center;">\( \sigma = \sqrt{\dfrac{\sum(x-\bar x)^2}{n}} \)</p>
  <h2>📌 Five-Number Summary &amp; the Outlier Rule</h2>
  <p>Minimum, \(Q_1\), median, \(Q_3\), maximum. The interquartile range is \(IQR=Q_3-Q_1\). A value is an <strong>outlier</strong> if it lies below \(Q_1-1.5\times IQR\) or above \(Q_3+1.5\times IQR\).</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 260 100" width="280" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="50" x2="60" y2="50" stroke="#333" stroke-width="1.5"/>
      <rect x="60" y="25" width="70" height="50" fill="#dbeeff" stroke="#4a90e2" stroke-width="1.5"/>
      <line x1="100" y1="25" x2="100" y2="75" stroke="#2e7d32" stroke-width="2"/>
      <line x1="130" y1="50" x2="220" y2="50" stroke="#333" stroke-width="1.5"/>
      <line x1="20" y1="30" x2="20" y2="70" stroke="#333" stroke-width="1.5"/>
      <line x1="220" y1="30" x2="220" y2="70" stroke="#333" stroke-width="1.5"/>
      <text x="15" y="90" font-size="9" fill="#666">min</text>
      <text x="55" y="90" font-size="9" fill="#666">Q1</text>
      <text x="95" y="90" font-size="9" fill="#666">med</text>
      <text x="125" y="90" font-size="9" fill="#666">Q3</text>
      <text x="212" y="90" font-size="9" fill="#666">max</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">a box-and-whisker plot built from the five-number summary</div>
  </div>
  <h2>📌 Linear Transformations</h2>
  <p>Adding a constant \(c\) to every value shifts the mean by \(c\) but leaves the standard deviation <strong>unchanged</strong>. Multiplying every value by \(k\) scales <em>both</em> the mean and the standard deviation by \(k\) (variance scales by \(k^2\)).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Find the mean, median, and mode of \(4, 7, 7, 9, 12, 15\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Mean \(=\dfrac{4+7+7+9+12+15}{6}=\dfrac{54}{6}=9\).</div>
      <div class="step"><strong>Step 2:</strong> Median (average of the two middle values 7 and 9) \(=8\).</div>
      <em>Conclusion: mean 9, median 8, mode 7. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Find the standard deviation of \(2,4,6,8,10\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Mean \(=6\). Deviations: \(-4,-2,0,2,4\); squared: \(16,4,0,4,16\).</div>
      <div class="step"><strong>Step 2:</strong> \(\sum(x-\bar x)^2=40\); divide by \(n=5\): \(8\).</div>
      <em>Conclusion: \(\sigma=\sqrt8\approx2.83\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — the outlier rule</h3><p>A data set has \(Q_1=20\), \(Q_3=32\). Determine whether the value \(50\) is an outlier.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(IQR=32-20=12\), so \(1.5\times IQR=18\).</div>
      <div class="step"><strong>Step 2:</strong> Upper fence: \(Q_3+18=32+18=50\).</div>
      <em>Conclusion: \(50\) is exactly on the fence, not beyond it — so by the strict rule ($>$fence), it is <strong>not</strong> classified as an outlier. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — comparing spread</h3><p>Class A has median 75, IQR 10. Class B has median 72, IQR 22. Compare the two classes' test performance and consistency.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Class A's higher median suggests slightly better typical performance.</div>
      <div class="step"><strong>Step 2:</strong> Class A's much smaller IQR (10 vs 22) means its scores are far more tightly clustered — more consistent.</div>
      <em>Conclusion: Class A performed slightly better on average and much more consistently than Class B. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — transformations</h3><p>A data set has mean \(60\) and standard deviation \(8\). Every score is first increased by \(5\) points (a curve), then converted to a percentage out of a new total by multiplying by \(1.2\). Find the new mean and standard deviation.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Adding 5: new mean \(=65\), SD unchanged \(=8\).</div>
      <div class="step"><strong>Step 2:</strong> Multiplying by \(1.2\): mean \(=65\times1.2=78\), SD \(=8\times1.2=9.6\).</div>
      <em>Conclusion: new mean \(78\), new standard deviation \(9.6\). ✓ (order matters — the shift doesn't affect SD, but the scaling affects both)</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the mean and median of \(3,3,8,10,21\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: mean $=9$, median $=8$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the standard deviation of \(1,3,5,7,9\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Mean $=5$; deviations squared: $16,4,0,4,16$; sum$=40$; $\sigma=\sqrt{8}$. <em>Answer: $\approx2.83$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>A data set has $Q_1=15$, $Q_3=25$. Is the value $42$ an outlier?</p><details><summary>View answer</summary><div class="solution"><div class="step">$IQR=10$, upper fence $=25+15=40$. <em>Answer: yes, $42>40$, so it is an outlier.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A data set has mean 40 and SD 5. Every value has 10 subtracted. Find the new mean and SD.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: new mean $=30$; SD unchanged $=5$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A data set has mean 50 and SD 4. Every value is doubled, then 3 is added. Find the new mean and SD.</p><details><summary>View answer</summary><div class="solution"><div class="step">Doubling: mean $100$, SD $8$; adding 3 changes mean only. <em>Answer: new mean $=103$, SD $=8$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why does adding a constant not change the standard deviation?</h3><p><em>Every value shifts by the same amount, so the distances between values — and between each value and the (also shifted) mean — stay exactly the same.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why use the 1.5×IQR rule instead of just "far from the mean"?</h3><p><em>It's based on the resistant median and quartiles, so a single extreme value can't distort the boundary the way it can distort the mean and standard deviation.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: When is the median a better measure than the mean?</h3><p><em>When the data has outliers or is heavily skewed — the median isn't dragged toward extreme values the way the mean is.</em></p></div>
</div>`),
]);

u4["4.3"] = L("4.3", "Bivariate Data & Correlation", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Bivariate Data &amp; Correlation</h1>
  <p><strong>Overview.</strong> Bivariate data pairs up two variables per subject, letting you ask whether they're related. This lesson covers reading scatter plots, interpreting the correlation coefficient \(r\), using a regression line to predict, and the real danger of extrapolating too far.</p>
  <h2>📌 Correlation</h2>
  <p>The correlation coefficient \(r\) ranges from \(-1\) to \(1\). Values near \(\pm1\) indicate a strong linear relationship; values near \(0\) indicate little to none. The sign shows direction (positive: both increase together; negative: one increases as the other decreases).</p>
  <h2>📌 The Regression Line</h2>
  <p>The least-squares regression line \(y=ax+b\) is the "best fit" straight line through the data, and can be used to <strong>interpolate</strong> (predict inside the data range — usually reliable) or <strong>extrapolate</strong> (predict outside it — much riskier, since the relationship might not continue).</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 240 180" width="260" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="160" x2="230" y2="160" stroke="#333" stroke-width="1.5"/>
      <line x1="30" y1="160" x2="30" y2="20" stroke="#333" stroke-width="1.5"/>
      <circle cx="55" cy="140" r="3" fill="#4a90e2"/>
      <circle cx="80" cy="120" r="3" fill="#4a90e2"/>
      <circle cx="95" cy="130" r="3" fill="#4a90e2"/>
      <circle cx="120" cy="95" r="3" fill="#4a90e2"/>
      <circle cx="140" cy="100" r="3" fill="#4a90e2"/>
      <circle cx="160" cy="70" r="3" fill="#4a90e2"/>
      <circle cx="180" cy="60" r="3" fill="#4a90e2"/>
      <circle cx="200" cy="40" r="3" fill="#4a90e2"/>
      <line x1="45" y1="150" x2="215" y2="35" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="5 3"/>
      <text x="150" y="30" font-size="10" fill="#2e7d32">regression line</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">a scatter plot with a positive correlation and its regression line</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>A scatter plot of hours studied vs test score shows points climbing steadily from bottom-left to top-right, tightly clustered around a line. Describe the correlation.</p>
    <div class="solution">
      <em>Conclusion: strong, positive linear correlation. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>A study finds \(r=-0.91\) between a car's age and its resale value. Interpret this value.</p>
    <div class="solution">
      <em>Conclusion: a strong negative correlation — as a car's age increases, its resale value tends to decrease, and the relationship is close to linear. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — interpolation</h3><p>A regression line for plant height (cm) vs weeks of growth is \(h=3.2w+5\), fitted on data from \(w=1\) to \(w=10\). Predict the height at \(w=6\), and comment on the reliability of this prediction.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(h=3.2(6)+5=19.2+5\).</div>
      <div class="step"><strong>Step 2:</strong> \(w=6\) falls inside the original data range \([1,10]\), so this is interpolation.</div>
      <em>Conclusion: predicted height \(\approx24.2\) cm; this is a reasonably reliable prediction since it interpolates within the observed range. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — extrapolation danger</h3><p>Using the same line \(h=3.2w+5\), predict the height at \(w=50\), and explain why this prediction should be treated with caution.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(h=3.2(50)+5=160+5=165\) cm.</div>
      <em>Conclusion: mathematically \(165\) cm, but \(w=50\) is far outside the original data range \([1,10]\) — plants don't grow linearly forever, so this extrapolated value is almost certainly unrealistic. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — interpreting slope and intercept in context</h3><p>A regression line relating monthly advertising spend \(x\) (in \$100s) to monthly sales \(y\) (in units) is \(y=12x+340\). Interpret the slope and the \(y\)-intercept in context, and state one reason correlation here might not imply causation.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Slope \(12\): each additional \$100 spent on advertising is associated with about \(12\) more units sold, on average.</div>
      <div class="step"><strong>Step 2:</strong> Intercept \(340\): the model predicts \(340\) units sold even with \$0 advertising spend (baseline sales from repeat customers, word of mouth, etc.).</div>
      <em>Conclusion: a third factor — like overall economic conditions or seasonality — could be driving both advertising spend and sales upward together, without advertising directly causing the extra sales. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Describe the correlation implied by \(r=0.15\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: very weak positive correlation — little to no meaningful linear relationship.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Describe the correlation implied by \(r=-0.68\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: moderate to strong negative correlation.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>A regression line \(y=2.5x+10\) is fitted on data from $x=0$ to $x=20$. Predict $y$ at $x=15$ and state whether this is interpolation or extrapolation.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $y=47.5$; interpolation, since $x=15$ is inside $[0,20]$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Using the same line, predict $y$ at $x=100$ and explain the risk.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $y=260$; this is extrapolation, far outside the fitted range, so the linear trend may not hold there.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Ice cream sales and drowning incidents are strongly positively correlated across a year of data. Explain why this doesn't mean ice cream causes drowning.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: a confounding variable — hot weather — increases both ice cream sales and swimming (and thus drowning risk) independently; the correlation reflects a shared cause, not a direct causal link.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Does a strong correlation prove causation?</h3><p><em>No — it only shows the two variables tend to move together; a third (confounding) variable, reverse causation, or coincidence could explain it instead.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why is extrapolation riskier than interpolation?</h3><p><em>The regression line is only justified by the data actually observed — outside that range, there's no evidence the same linear pattern continues.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does the sign of $r$ tell you that its size doesn't?</h3><p><em>The sign gives the direction of the relationship (both variables rising together, or one falling as the other rises); the size (closeness to $\pm1$) gives the strength.</em></p></div>
</div>`),
]);

u4["4.4"] = L("4.4", "Probability Basics & Venn Diagrams", [
  html(String.raw`<div class="lecture-box">
  <h1>⭕ Probability Basics &amp; Venn Diagrams</h1>
  <p><strong>Overview.</strong> Venn diagrams turn set relationships into pictures, making the addition rule and "mutually exclusive vs independent" distinction much easier to reason through — especially when a region has to be found algebraically.</p>
  <h2>📌 The Addition Rule</h2>
  <p style="text-align:center;">\( P(A\cup B) = P(A)+P(B)-P(A\cap B) \)</p>
  <h2>📌 Mutually Exclusive vs Independent</h2>
  <p><strong>Mutually exclusive:</strong> \(A\) and \(B\) can't both happen, so \(P(A\cap B)=0\). <strong>Independent:</strong> one event doesn't affect the other's probability, so \(P(A\cap B)=P(A)\times P(B)\). These are different conditions — mutually exclusive events (with nonzero probabilities) are automatically <em>not</em> independent, since knowing one happened tells you the other definitely didn't.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 260 160" width="260" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="240" height="140" fill="none" stroke="#999" stroke-width="1"/>
      <circle cx="105" cy="80" r="55" fill="#dbeeff" fill-opacity="0.6" stroke="#4a90e2" stroke-width="1.5"/>
      <circle cx="155" cy="80" r="55" fill="#e8f5e9" fill-opacity="0.6" stroke="#2e7d32" stroke-width="1.5"/>
      <text x="75" y="85" font-size="12" fill="#222">A only</text>
      <text x="125" y="85" font-size="12" fill="#222">A∩B</text>
      <text x="172" y="85" font-size="12" fill="#222">B only</text>
      <text x="15" y="25" font-size="10" fill="#666">U</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">a Venn diagram: the overlap represents A∩B</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>In a class of 30, 18 study French, 14 study Spanish, and 7 study both. Find the probability a randomly chosen student studies at least one of the two languages.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(P(F)=\tfrac{18}{30}\), \(P(S)=\tfrac{14}{30}\), \(P(F\cap S)=\tfrac{7}{30}\).</div>
      <div class="step"><strong>Step 2:</strong> \(P(F\cup S)=\tfrac{18}{30}+\tfrac{14}{30}-\tfrac{7}{30}=\tfrac{25}{30}\).</div>
      <em>Conclusion: \(P(F\cup S)=\tfrac{25}{30}=\tfrac56\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — unknown region</h3><p>In a survey of 50 people, 28 like coffee, 22 like tea, and 10 like neither. Find how many like both.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Number liking at least one \(=50-10=40\).</div>
      <div class="step"><strong>Step 2:</strong> Use the addition rule on counts: \(40=28+22-\text{both}\).</div>
      <em>Conclusion: both \(=28+22-40=10\) people. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — testing independence</h3><p>In a group, \(P(A)=0.4\), \(P(B)=0.5\), and \(P(A\cap B)=0.2\). Determine whether \(A\) and \(B\) are independent.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> If independent, \(P(A)\times P(B)\) should equal \(P(A\cap B)\).</div>
      <div class="step"><strong>Step 2:</strong> \(P(A)\times P(B)=0.4\times0.5=0.2\), which matches \(P(A\cap B)=0.2\) exactly.</div>
      <em>Conclusion: \(A\) and \(B\) are independent. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — mutually exclusive check</h3><p>Events \(C\) and \(D\) have \(P(C)=0.3\) and \(P(D)=0.6\), and it's known that \(P(C\cup D)=0.9\). Determine whether \(C\) and \(D\) are mutually exclusive.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> From the addition rule: \(P(C\cap D)=P(C)+P(D)-P(C\cup D)=0.3+0.6-0.9=0\).</div>
      <em>Conclusion: \(P(C\cap D)=0\), so \(C\) and \(D\) are mutually exclusive. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — three unknowns from a Venn diagram</h3><p>Of 40 gym members, 25 use the weights room, 20 use the cardio room, and \(x\) use both. If 5 members use neither, find \(x\), then find the probability a random member uses <em>only</em> the weights room.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Using at least one \(=40-5=35\).</div>
      <div class="step"><strong>Step 2:</strong> \(35=25+20-x \Rightarrow x=10\).</div>
      <div class="step"><strong>Step 3:</strong> "Only weights" \(=25-x=25-10=15\) members.</div>
      <em>Conclusion: \(x=10\); \(P(\text{weights only})=\dfrac{15}{40}=\dfrac38\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>$P(A)=0.5$, $P(B)=0.3$, $P(A\cap B)=0.1$. Find $P(A\cup B)$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $0.7$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>In a group of 60, 35 play soccer, 25 play basketball, 12 play neither. Find how many play both.</p><details><summary>View answer</summary><div class="solution"><div class="step">At least one $=48$. <em>Answer: both $=35+25-48=12$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>$P(A)=0.6$, $P(B)=0.25$, $P(A\cap B)=0.15$. Are $A$ and $B$ independent?</p><details><summary>View answer</summary><div class="solution"><div class="step">$P(A)P(B)=0.15$, matches $P(A\cap B)$. <em>Answer: yes, independent.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>$P(C)=0.4$, $P(D)=0.35$. If $C$ and $D$ are mutually exclusive, find $P(C\cup D)$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $0.75$ (since $P(C\cap D)=0$).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Of 100 students, 60 take Math, 45 take Physics, and $y$ take both. Every student takes at least one. Find $y$ and $P(\text{Math only})$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$100=60+45-y\Rightarrow y=5$. Math only $=60-5=55$. <em>Answer: $y=5$, $P(\text{Math only})=0.55$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do "neither" totals help find an unknown intersection?</h3><p><em>Subtracting "neither" from the total gives "at least one," which the addition rule then relates directly to the unknown overlap.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Can two mutually exclusive events (with nonzero probability) also be independent?</h3><p><em>No — if they're mutually exclusive, one happening guarantees the other didn't, which is the opposite of independence.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the quickest independence check?</h3><p><em>Compute $P(A)\times P(B)$ and compare it to the given $P(A\cap B)$ — equal means independent.</em></p></div>
</div>`),
]);

u4["4.5"] = L("4.5", "Conditional Probability & Tree Diagrams", [
  html(String.raw`<div class="lecture-box">
  <h1>🌳 Conditional Probability &amp; Tree Diagrams</h1>
  <p><strong>Overview.</strong> Tree diagrams handle sequences of events cleanly, especially when probabilities change between stages (without replacement) — and, run in reverse, they can answer the trickiest question in this topic: given the outcome, what was the likely cause?</p>
  <h2>📌 Conditional Probability</h2>
  <p style="text-align:center;">\( P(A\mid B)=\dfrac{P(A\cap B)}{P(B)} \)</p>
  <h2>📌 Tree Diagrams</h2>
  <p>Multiply <strong>along</strong> a branch to get the probability of that whole sequence; add <strong>across</strong> branches that lead to the same outcome. For "without replacement," the second-stage probabilities depend on what happened first.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 260 150" width="280" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="75" x2="110" y2="30" stroke="#333" stroke-width="1.3"/>
      <line x1="20" y1="75" x2="110" y2="120" stroke="#333" stroke-width="1.3"/>
      <line x1="110" y1="30" x2="200" y2="10" stroke="#333" stroke-width="1.3"/>
      <line x1="110" y1="30" x2="200" y2="50" stroke="#333" stroke-width="1.3"/>
      <line x1="110" y1="120" x2="200" y2="100" stroke="#333" stroke-width="1.3"/>
      <line x1="110" y1="120" x2="200" y2="140" stroke="#333" stroke-width="1.3"/>
      <text x="55" y="45" font-size="10" fill="#4a90e2">0.6</text>
      <text x="55" y="105" font-size="10" fill="#4a90e2">0.4</text>
      <text x="145" y="15" font-size="9" fill="#666">p</text>
      <text x="145" y="45" font-size="9" fill="#666">1−p</text>
      <text x="145" y="90" font-size="9" fill="#666">q</text>
      <text x="145" y="135" font-size="9" fill="#666">1−q</text>
      <text x="205" y="12" font-size="9" fill="#333">outcome 1</text>
      <text x="205" y="52" font-size="9" fill="#333">outcome 2</text>
      <text x="205" y="102" font-size="9" fill="#333">outcome 2</text>
      <text x="205" y="142" font-size="9" fill="#333">outcome 3</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">a two-stage tree — multiply along a path, add across matching outcomes</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>In a class, \(P(\text{plays sport})=0.7\), and \(P(\text{plays sport and studies music})=0.21\). Find \(P(\text{studies music}\mid\text{plays sport})\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(P(\text{music}\mid\text{sport})=\dfrac{0.21}{0.7}\).</div>
      <em>Conclusion: \(0.3\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — without replacement</h3><p>A bag has 5 red and 3 blue balls. Two are drawn without replacement. Find the probability both are red.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(P(\text{1st red})=\dfrac58\).</div>
      <div class="step"><strong>Step 2:</strong> After removing one red, 4 red remain out of 7 total: \(P(\text{2nd red}\mid\text{1st red})=\dfrac47\).</div>
      <em>Conclusion: \(P(\text{both red})=\dfrac58\times\dfrac47=\dfrac{20}{56}=\dfrac{5}{14}\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — at least one</h3><p>Using the same bag (5 red, 3 blue, no replacement), find the probability that at least one of the two balls drawn is blue.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> It's easier to find the complement: \(P(\text{no blue}) = P(\text{both red})=\dfrac{5}{14}\) (from Example 2).</div>
      <em>Conclusion: \(P(\text{at least one blue})=1-\dfrac{5}{14}=\dfrac{9}{14}\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Two independent machines each have a \(5\%\) chance of producing a defective item on a given run. Find the probability that exactly one of the two produces a defective item.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Two ways this happens: (machine 1 defective, machine 2 not) or (machine 1 not, machine 2 defective).</div>
      <div class="step"><strong>Step 2:</strong> Each way: \(0.05\times0.95=0.0475\). Add both ways (they're mutually exclusive): \(2\times0.0475\).</div>
      <em>Conclusion: \(P(\text{exactly one defective})=0.095\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — reversing a tree diagram</h3><p>Factory line A produces 60% of a company's items, with a 4% defect rate; line B produces the other 40%, with a 9% defect rate. An item is chosen at random and found to be defective. Find the probability it came from line B.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Build the tree: \(P(A\cap\text{def})=0.6\times0.04=0.024\). \(P(B\cap\text{def})=0.4\times0.09=0.036\).</div>
      <div class="step"><strong>Step 2:</strong> Total probability of "defective," combining both paths: \(P(\text{def})=0.024+0.036=0.06\).</div>
      <div class="step"><strong>Step 3:</strong> Reverse the conditional: \(P(B\mid\text{def})=\dfrac{P(B\cap\text{def})}{P(\text{def})}=\dfrac{0.036}{0.06}\).</div>
      <em>Conclusion: \(P(B\mid\text{def})=0.6\), i.e. 60% — even though line B makes fewer items overall, its higher defect rate means most defective items actually come from it. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>$P(A)=0.5$, $P(A\cap B)=0.15$. Find $P(B\mid A)$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $0.3$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A bag has 4 green and 6 yellow marbles. Two are drawn without replacement. Find $P(\text{both green})$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$\tfrac{4}{10}\times\tfrac{3}{9}$. <em>Answer: $\tfrac{12}{90}=\tfrac{2}{15}$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Using the same bag, find $P(\text{at least one yellow})$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $1-\tfrac{2}{15}=\tfrac{13}{15}$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Two independent events each have probability 0.1 of occurring. Find the probability exactly one occurs.</p><details><summary>View answer</summary><div class="solution"><div class="step">$2\times(0.1\times0.9)$. <em>Answer: $0.18$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Urn A has 70% of the balls and a 10% chance of being red; Urn B has 30% of the balls and a 50% chance of being red. A red ball is drawn. Find $P(\text{from Urn B})$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$P(A\cap R)=0.07$, $P(B\cap R)=0.15$, total $=0.22$. <em>Answer: $P(B\mid R)=0.15/0.22\approx0.682$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why do probabilities change on the second draw in "without replacement"?</h3><p><em>Removing an item changes both the count of that type remaining and the total number of items left, so the fraction changes.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the fastest way to handle "at least one" questions?</h3><p><em>Find the probability of the complement ("none") and subtract from 1 — usually far fewer cases to compute.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you "reverse" a tree diagram?</h3><p><em>Find every path's probability that leads to the known outcome, add them for the total, then divide the one path you care about by that total.</em></p></div>
</div>`),
]);

u4["4.6"] = L("4.6", "Discrete Random Variables & the Binomial Distribution", [
  html(String.raw`<div class="lecture-box">
  <h1>🎲 Discrete Random Variables &amp; the Binomial Distribution</h1>
  <p><strong>Overview.</strong> A discrete random variable assigns probabilities to a countable set of outcomes. The binomial distribution is the most important special case — modelling a fixed number of independent yes/no trials — and this lesson covers its formula, mean, variance, and solving for an unknown parameter.</p>
  <h2>📌 Expected Value</h2>
  <p style="text-align:center;">\( E(X) = \sum xP(X=x) \)</p>
  <h2>📌 The Binomial Distribution</h2>
  <p>If \(X\sim B(n,p)\) — \(n\) independent trials, each with success probability \(p\) — then:</p>
  <p style="text-align:center;">\( P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}, \qquad E(X)=np, \qquad \text{Var}(X)=np(1-p) \)</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 260 150" width="270" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="130" x2="250" y2="130" stroke="#333" stroke-width="1.5"/>
      <line x1="30" y1="130" x2="30" y2="10" stroke="#333" stroke-width="1.5"/>
      <rect x="45" y="115" width="25" height="15" fill="#4a90e2"/>
      <rect x="80" y="80" width="25" height="50" fill="#4a90e2"/>
      <rect x="115" y="30" width="25" height="100" fill="#4a90e2"/>
      <rect x="150" y="55" width="25" height="75" fill="#4a90e2"/>
      <rect x="185" y="105" width="25" height="25" fill="#4a90e2"/>
      <text x="55" y="143" font-size="9" fill="#666">0</text>
      <text x="90" y="143" font-size="9" fill="#666">1</text>
      <text x="125" y="143" font-size="9" fill="#666">2</text>
      <text x="160" y="143" font-size="9" fill="#666">3</text>
      <text x="195" y="143" font-size="9" fill="#666">4</text>
      <text x="6" y="20" font-size="9" fill="#666">P(X=k)</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">a binomial distribution's shape — probability bars for each value of k</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1 — unknown table entry</h3><p>A discrete random variable \(X\) has \(P(X=0)=0.2\), \(P(X=1)=0.3\), \(P(X=2)=k\), \(P(X=3)=0.1\). Find \(k\) and \(E(X)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Probabilities sum to 1: \(0.2+0.3+k+0.1=1 \Rightarrow k=0.4\).</div>
      <div class="step"><strong>Step 2:</strong> \(E(X)=0(0.2)+1(0.3)+2(0.4)+3(0.1)=0+0.3+0.8+0.3\).</div>
      <em>Conclusion: \(k=0.4\), \(E(X)=1.4\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>\(X\sim B(8,0.3)\). Find \(P(X=3)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(P(X=3)=\binom83(0.3)^3(0.7)^5\).</div>
      <div class="step"><strong>Step 2:</strong> \(\binom83=56\); \((0.3)^3=0.027\); \((0.7)^5\approx0.16807\).</div>
      <em>Conclusion: \(P(X=3)\approx56\times0.027\times0.16807\approx0.254\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — "at least"</h3><p>\(X\sim B(5,0.2)\). Find \(P(X\geq1)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Use the complement: \(P(X\geq1)=1-P(X=0)\).</div>
      <div class="step"><strong>Step 2:</strong> \(P(X=0)=\binom50(0.2)^0(0.8)^5=(0.8)^5\approx0.328\).</div>
      <em>Conclusion: \(P(X\geq1)\approx1-0.328=0.672\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>\(X\sim B(20,0.15)\). Find the mean and variance of \(X\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(E(X)=np=20(0.15)=3\).</div>
      <div class="step"><strong>Step 2:</strong> \(\text{Var}(X)=np(1-p)=20(0.15)(0.85)\).</div>
      <em>Conclusion: mean \(=3\), variance \(=2.55\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — solving for an unknown parameter</h3><p>A factory tests batches of 6 items. If \(X\sim B(6,p)\) is the number defective, and it's known that \(P(X=0)=0.531441\), find \(p\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(P(X=0)=\binom60p^0(1-p)^6=(1-p)^6\).</div>
      <div class="step"><strong>Step 2:</strong> \((1-p)^6=0.531441 \Rightarrow 1-p=0.531441^{1/6}\).</div>
      <div class="step"><strong>Step 3:</strong> \(0.531441^{1/6}=0.9\) (recognizing \(0.9^6=0.531441\)), so \(1-p=0.9\).</div>
      <em>Conclusion: \(p=0.1\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>$P(X=0)=0.1$, $P(X=1)=k$, $P(X=2)=0.5$. Find $k$ and $E(X)$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$k=0.4$. <em>Answer: $E(X)=0(0.1)+1(0.4)+2(0.5)=1.4$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>$X\sim B(6,0.5)$. Find $P(X=4)$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$\binom64(0.5)^4(0.5)^2=15\times0.015625$. <em>Answer: $\approx0.234$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>$X\sim B(10,0.1)$. Find $P(X\geq1)$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$P(X=0)=(0.9)^{10}\approx0.3487$. <em>Answer: $\approx0.6513$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>$X\sim B(50,0.04)$. Find the mean and variance.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: mean $=2$, variance $=50(0.04)(0.96)=1.92$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>$X\sim B(4,p)$ and $P(X=4)=0.0625$. Find $p$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$p^4=0.0625=1/16$. <em>Answer: $p=0.5$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What four conditions make a situation binomial?</h3><p><em>A fixed number of trials, only two outcomes per trial, a constant success probability, and independence between trials.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why is $P(X=0)$ often the shortcut for "at least one"?</h3><p><em>Because "at least one success" is the complement of "zero successes," and $P(X=0)$ is usually the single easiest term to compute directly.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why does variance use $p(1-p)$?</h3><p><em>It's largest when $p=0.5$ (maximum unpredictability per trial) and shrinks toward 0 as $p$ approaches 0 or 1 (near-certain outcomes), matching how spread-out the results actually are.</em></p></div>
</div>`),
]);

u4["4.7"] = L("4.7", "The Normal Distribution", [
  html(String.raw`<div class="lecture-box">
  <h1>🔔 The Normal Distribution</h1>
  <p><strong>Overview.</strong> The normal distribution is the classic "bell curve," used to model countless continuous real-world quantities. This lesson covers standardizing with z-scores, finding probabilities and percentiles, and the harder skill of finding an unknown mean or standard deviation from given probabilities.</p>
  <h2>📌 The Standard Score</h2>
  <p style="text-align:center;">\( z = \dfrac{x-\mu}{\sigma} \)</p>
  <p>A z-score measures how many standard deviations \(x\) is from the mean. The <strong>empirical rule</strong>: about 68% of data lies within 1 SD of the mean, 95% within 2 SD, and 99.7% within 3 SD.</p>
  <div style="text-align:center;margin:14px 0;">
    ${gframe(["y = (1/(1.5*sqrt(2*pi)))*exp(-((x-0)^2)/(2*1.5^2))"], { title: "the standard normal bell curve, symmetric about the mean", xMin: -6, xMax: 6, yMin: -0.02, yMax: 0.3 })}
  </div>
  <h2>📌 Inverse Normal</h2>
  <p>Given a probability (or percentile), you can work backward through the z-score formula to find the corresponding \(x\)-value: \(x=\mu+z\sigma\), where \(z\) comes from the known probability (typically read from a GDC or table).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Test scores are normally distributed with \(\mu=70\), \(\sigma=8\). Find the z-score for a score of \(x=86\), and use the empirical rule to estimate \(P(X<86)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(z=\dfrac{86-70}{8}=2\).</div>
      <div class="step"><strong>Step 2:</strong> By the empirical rule, about 95% of data lies within 2 SD, so about 2.5% lies above \(z=2\) (half of the remaining 5%, since the curve is symmetric).</div>
      <em>Conclusion: \(z=2\); \(P(X<86)\approx1-0.025=0.975\) (97.5%). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Heights are normally distributed with \(\mu=170\) cm, \(\sigma=6\) cm. Find \(P(X<178)\) (given \(P(Z<1.33)\approx0.9082\) from a GDC).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(z=\dfrac{178-170}{6}=1.33\overline3\).</div>
      <em>Conclusion: \(P(X<178)\approx0.908\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — inverse normal</h3><p>Using the same distribution (\(\mu=170\), \(\sigma=6\)), find the height that marks the 90th percentile, given \(P(Z<1.2816)\approx0.90\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The z-score for the 90th percentile is \(z\approx1.2816\).</div>
      <div class="step"><strong>Step 2:</strong> \(x=\mu+z\sigma=170+1.2816(6)\).</div>
      <em>Conclusion: \(x\approx177.7\) cm. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — between two values</h3><p>Using \(\mu=170\), \(\sigma=6\), find \(P(164<X<178)\) given \(P(Z<-1)\approx0.1587\) and \(P(Z<1.33)\approx0.9082\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(z_1=\dfrac{164-170}{6}=-1\), \(z_2=\dfrac{178-170}{6}\approx1.33\).</div>
      <em>Conclusion: \(P(164<X<178)\approx0.9082-0.1587=0.7495\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — solving for μ and σ</h3><p>A machine fills bottles with volumes that are normally distributed. It's known that \(P(X<490)=0.1587\) and \(P(X>520)=0.0228\). Find \(\mu\) and \(\sigma\), given \(P(Z<-1)\approx0.1587\) and \(P(Z<2)\approx0.9772\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> From the first fact, \(z_1=-1\) corresponds to \(x=490\): \(\dfrac{490-\mu}{\sigma}=-1 \Rightarrow 490-\mu=-\sigma\).</div>
      <div class="step"><strong>Step 2:</strong> \(P(X>520)=0.0228 \Rightarrow P(X<520)=0.9772\), which matches \(z_2=2\): \(\dfrac{520-\mu}{\sigma}=2 \Rightarrow 520-\mu=2\sigma\).</div>
      <div class="step"><strong>Step 3:</strong> Two equations: \(\mu-\sigma=490\) and \(\mu+2\sigma=520\). Subtract the first from the second: \(3\sigma=30 \Rightarrow \sigma=10\).</div>
      <em>Conclusion: \(\sigma=10\), and \(\mu=490+\sigma=500\). ✓ (a classic system-of-equations application of two z-scores)</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>$\mu=50$, $\sigma=5$. Find the z-score for $x=62$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $z=2.4$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>$\mu=100$, $\sigma=15$. Find $P(X<115)$ given $P(Z<1)\approx0.8413$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $\approx0.8413$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>$\mu=100$, $\sigma=15$. Find the score at the 95th percentile, given $P(Z<1.645)\approx0.95$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$x=100+1.645(15)$. <em>Answer: $\approx124.7$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>$\mu=100$, $\sigma=15$. Find $P(85<X<130)$ given $P(Z<-1)\approx0.1587$ and $P(Z<2)\approx0.9772$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $\approx0.9772-0.1587=0.8185$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>$P(X<40)=0.1587$ and $P(X<70)=0.8413$ for a normal distribution. Find $\mu$ and $\sigma$ (using $P(Z<-1)\approx0.1587$, $P(Z<1)\approx0.8413$).</p><details><summary>View answer</summary><div class="solution"><div class="step">$\mu-\sigma=40$, $\mu+\sigma=70$; adding gives $2\mu=110$. <em>Answer: $\mu=55$, $\sigma=15$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does a z-score actually measure?</h3><p><em>How many standard deviations a value sits above (positive) or below (negative) the mean — it converts any normal distribution to a common, comparable scale.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How is "inverse normal" different from a regular normal probability question?</h3><p><em>A regular question gives you an $x$-value and asks for a probability; inverse normal gives you a probability (or percentile) and asks you to work backward for the $x$-value.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why do two probability facts let you find both μ and σ?</h3><p><em>Each fact gives one linear equation relating μ and σ (through a z-score) — two equations in two unknowns can be solved simultaneously, exactly like any other system.</em></p></div>
</div>`),
]);
