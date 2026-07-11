// MCR3U Unit 6 — Discrete Functions: Sequences & Series. Single-card lessons.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u6 = {};

u6["6.1"] = L("6.1", "Arithmetic Sequences", [html(String.raw`<div class="lecture-box">
  <h1>➕ Arithmetic Sequences</h1>
  <p><strong>Overview.</strong> An <strong>arithmetic sequence</strong> adds the same <strong>common difference</strong> \(d\) each step: \(3,7,11,15,\dots\) (here \(d=4\)).</p>
  <h2>📌 The general term</h2>
  <p>\(t_n=a+(n-1)d\), where \(a=t_1\) is the first term. Because the term number multiplies a constant, arithmetic sequences are <em>linear</em>.</p>
  ${gframe(["y = 4*x - 1"], { title: "Arithmetic terms lie on a straight line (here t_n = 4n - 1)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Common difference</h3><p>Find \(d\) for \(3,7,11,15,\dots\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(7-3\).</div><em>Conclusion: \(d=4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: General term</h3><p>For \(a=3,\ d=4\), write \(t_n\) and find \(t_{10}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(t_n=3+(n-1)4=4n-1\).</div><em>Conclusion: \(t_{10}=39\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: A specific term</h3><p>Find \(t_{20}\) of \(5,8,11,\dots\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=5,\ d=3\): \(5+19(3)\).</div><em>Conclusion: \(62\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Which term?</h3><p>Which term of \(2,5,8,\dots\) equals \(50\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(50=2+(n-1)3\Rightarrow n-1=16\).</div><em>Conclusion: \(n=17\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Find the first term</h3><p>If \(d=4\) and \(t_5=20\), find \(a\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(20=a+4(4)\).</div><em>Conclusion: \(a=4\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(d\) for \(10,7,4,1,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(d=-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>For \(a=2,\ d=5\), find \(t_8\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2+7(5)=37\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(t_{15}\) of \(4,9,14,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4+14(5)=74\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Which term of \(3,7,11,\dots\) equals \(43\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(43=3+(n-1)4\Rightarrow n=11\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>If \(d=6\) and \(t_4=25\), find \(a\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(25=a+18\Rightarrow a=7\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I find \(d\)?</h3><p><em>Subtract any term from the next.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why \((n-1)\) and not \(n\)?</h3><p><em>The first term has had \(d\) added zero times.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why "linear"?</h3><p><em>\(t_n=dn+(a-d)\) is a line with slope \(d\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Can \(d\) be negative?</h3><p><em>Yes — then the sequence decreases.</em></p></div>
</div>`)]);

u6["6.2"] = L("6.2", "Geometric Sequences", [html(String.raw`<div class="lecture-box">
  <h1>✖️ Geometric Sequences</h1>
  <p><strong>Overview.</strong> A <strong>geometric sequence</strong> multiplies by the same <strong>common ratio</strong> \(r\) each step: \(2,6,18,54,\dots\) (here \(r=3\)).</p>
  <h2>📌 The general term</h2>
  <p>\(t_n=a\,r^{\,n-1}\). Because each step multiplies, geometric sequences are <em>exponential</em>.</p>
  ${gframe(["y = 2^x"], { title: "Geometric terms grow exponentially" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Common ratio</h3><p>Find \(r\) for \(2,6,18,54,\dots\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(6\div2\).</div><em>Conclusion: \(r=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: A specific term</h3><p>For \(a=2,\ r=3\), find \(t_5\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2\cdot3^{4}=2\cdot81\).</div><em>Conclusion: \(162\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Another term</h3><p>Find \(t_6\) of \(3,6,12,\dots\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=3,\ r=2\): \(3\cdot2^{5}\).</div><em>Conclusion: \(96\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Which term?</h3><p>Which term of \(3,6,12,\dots\) equals \(192\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(192=3\cdot2^{\,n-1}\Rightarrow2^{\,n-1}=64\).</div><em>Conclusion: \(n=7\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Find the ratio</h3><p>If \(t_1=5\) and \(t_3=45\), find \(r\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(45=5r^{2}\Rightarrow r^{2}=9\).</div><em>Conclusion: \(r=3\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(r\) for \(4,12,36,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(r=3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>For \(a=5,\ r=2\), find \(t_4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\cdot2^{3}=40\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(t_5\) of \(1,3,9,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1\cdot3^{4}=81\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Which term of \(2,4,8,\dots\) equals \(128\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\cdot2^{\,n-1}=128\Rightarrow n=7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>If \(t_1=4\) and \(t_3=36\), find \(r\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(36=4r^2\Rightarrow r=3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I find \(r\)?</h3><p><em>Divide any term by the previous one.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Arithmetic vs geometric?</h3><p><em>Arithmetic adds \(d\); geometric multiplies by \(r\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Can \(r\) be a fraction?</h3><p><em>Yes — then the terms shrink (e.g. \(r=\tfrac12\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why exponential?</h3><p><em>\(t_n=a r^{\,n-1}\) has \(n\) in the exponent.</em></p></div>
</div>`)]);

u6["6.3"] = L("6.3", "Arithmetic Series", [html(String.raw`<div class="lecture-box">
  <h1>∑ Arithmetic Series</h1>
  <p><strong>Overview.</strong> A <strong>series</strong> is the sum of the terms of a sequence. For an arithmetic sequence the sum of the first \(n\) terms is \(S_n=\dfrac{n}{2}\big(a+t_n\big)=\dfrac{n}{2}\big(2a+(n-1)d\big)\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Gauss' sum</h3><p>Find \(1+2+3+\dots+100\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{100}{2}(1+100)\).</div><em>Conclusion: \(5050\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: First 10 terms</h3><p>Sum the first \(10\) terms of \(3,7,11,\dots\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(t_{10}=39\); \(S_{10}=\dfrac{10}{2}(3+39)\).</div><em>Conclusion: \(210\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Using \(2a+(n-1)d\)</h3><p>Sum the first \(20\) terms of \(5,8,11,\dots\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(S_{20}=\dfrac{20}{2}\big(2(5)+19(3)\big)=10(67)\).</div><em>Conclusion: \(670\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Given first and last</h3><p>An arithmetic series has \(a=4\), \(t_n=44\), \(n=11\). Find \(S_{11}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{11}{2}(4+44)\).</div><em>Conclusion: \(264\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Sum of evens</h3><p>Find \(2+4+6+\dots+50\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(25\) terms; \(\dfrac{25}{2}(2+50)\).</div><em>Conclusion: \(650\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(1+2+\dots+50\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{50}{2}(1+50)=1275\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Sum the first \(10\) terms of \(2,5,8,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(t_{10}=29\); \(S_{10}=155\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Sum the first \(15\) terms of \(1,4,7,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(S_{15}=\dfrac{15}{2}(2+14(3))=330\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(a=6\), \(t_n=60\), \(n=10\). Find \(S_{10}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{10}{2}(6+60)=330\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find \(5+10+15+\dots+100\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(20\) terms; \(\dfrac{20}{2}(5+100)=1050\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Sequence vs series?</h3><p><em>A sequence is a list; a series is the sum of its terms.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Which formula should I use?</h3><p><em>Use \(\dfrac{n}{2}(a+t_n)\) if you know the last term; otherwise \(\dfrac{n}{2}(2a+(n-1)d)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I count the terms?</h3><p><em>Solve \(t_n=a+(n-1)d\) for \(n\) first.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why does the formula work?</h3><p><em>Pairing first+last terms gives \(n/2\) equal pairs each summing to \(a+t_n\).</em></p></div>
</div>`)]);

u6["6.4"] = L("6.4", "Geometric Series", [html(String.raw`<div class="lecture-box">
  <h1>∑ Geometric Series</h1>
  <p><strong>Overview.</strong> The sum of the first \(n\) terms of a geometric sequence is \(S_n=\dfrac{a\,(r^{n}-1)}{r-1}\) (for \(r\ne1\)).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Five terms</h3><p>Find \(2+6+18+54+162\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=2,\ r=3,\ n=5\): \(\dfrac{2(3^{5}-1)}{3-1}=\dfrac{2(242)}{2}\).</div><em>Conclusion: \(242\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Powers of 2</h3><p>Find the sum of the first \(6\) terms of \(1,2,4,\dots\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{1(2^{6}-1)}{2-1}=63\).</div><em>Conclusion: \(63\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: With a larger first term</h3><p>Sum the first \(4\) terms of \(5,10,20,\dots\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{5(2^{4}-1)}{1}=5(15)\).</div><em>Conclusion: \(75\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Ratio 4</h3><p>Sum the first \(3\) terms of \(2,8,32,\dots\)</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{2(4^{3}-1)}{4-1}=\dfrac{2(63)}{3}\).</div><em>Conclusion: \(42\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: A real model</h3><p>A salary starts at \(\$1000\) and triples each year. Total over the first \(4\) years?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{1000(3^{4}-1)}{3-1}=\dfrac{1000(80)}{2}\).</div><em>Conclusion: \(\$40000\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(3+6+12+24+48\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{3(2^{5}-1)}{1}=93\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Sum the first \(5\) terms of \(1,3,9,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{1(3^{5}-1)}{2}=121\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Sum the first \(4\) terms of \(2,6,18,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{2(3^{4}-1)}{2}=80\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Sum the first \(6\) terms of \(1,2,4,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(63\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Sum the first \(3\) terms of \(4,12,36,\dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{4(3^{3}-1)}{2}=52\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When can't I use the formula?</h3><p><em>When \(r=1\) (then it is just \(na\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What if \(r<1\)?</h3><p><em>The formula still works; terms shrink and the sum approaches a limit.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Common slip?</h3><p><em>Use \(r^{n}\), not \(r^{n-1}\), in the series formula.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How does this connect to finance?</h3><p><em>Compound interest and annuities are geometric series.</em></p></div>
</div>`)]);

u6["6.5"] = L("6.5", "Pascal's Triangle & the Binomial Theorem", [html(String.raw`<div class="lecture-box">
  <h1>🔺 Pascal's Triangle &amp; the Binomial Theorem</h1>
  <p><strong>Overview.</strong> <strong>Pascal's triangle</strong> builds each entry by adding the two above it. Its rows give the coefficients when expanding \((a+b)^n\).</p>
  <h2>📌 The triangle (rows 0–4)</h2>
  <ul>
    <li>\(n=0:\ 1\)</li>
    <li>\(n=1:\ 1\quad1\)</li>
    <li>\(n=2:\ 1\quad2\quad1\)</li>
    <li>\(n=3:\ 1\quad3\quad3\quad1\)</li>
    <li>\(n=4:\ 1\quad4\quad6\quad4\quad1\)</li>
  </ul>
  <p>In each expansion the power of \(a\) decreases while the power of \(b\) increases.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: A row</h3><p>Write row \(4\) of Pascal's triangle.</p><div class="solution"><em>Conclusion: \(1,4,6,4,1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Cube of a binomial</h3><p>Expand \((a+b)^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Coefficients \(1,3,3,1\).</div><em>Conclusion: \(a^3+3a^2b+3ab^2+b^3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: With numbers</h3><p>Expand \((x+2)^3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^3+3x^2(2)+3x(4)+8\).</div><em>Conclusion: \(x^3+6x^2+12x+8\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Fourth power</h3><p>Expand \((x+1)^4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Coefficients \(1,4,6,4,1\).</div><em>Conclusion: \(x^4+4x^3+6x^2+4x+1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: A single coefficient</h3><p>What is the coefficient of \(a^2b^2\) in \((a+b)^4\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> The middle entry of row \(4\).</div><em>Conclusion: \(6\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Write row \(3\) of Pascal's triangle.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1,3,3,1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Expand \((a+b)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(a^2+2ab+b^2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Expand \((x+1)^3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^3+3x^2+3x+1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Expand \((x+3)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2+6x+9\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>What is the coefficient of \(x^3\) in \((x+1)^4\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How is each entry made?</h3><p><em>By adding the two entries directly above it.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Which row do I use for \((a+b)^n\)?</h3><p><em>Row \(n\) (the top is row \(0\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do the exponents behave?</h3><p><em>The power of \(a\) drops from \(n\) to \(0\) while the power of \(b\) rises.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Do the coefficients in a row sum to anything nice?</h3><p><em>Yes — row \(n\) sums to \(2^{n}\).</em></p></div>
</div>`)]);
