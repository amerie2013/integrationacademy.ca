// IB Math AA SL — Unit 1: Number & Algebra. Original content and examples,
// informed by (but not copied from) the standard AA SL syllabus and its scope.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u1 = {};

u1["1.1"] = L("1.1", "Arithmetic Sequences & Series", [
  html(String.raw`<div class="lecture-box">
  <h1>📏 Arithmetic Sequences &amp; Series</h1>
  <p><strong>Overview.</strong> A sequence lists numbers in order; a series is what you get when you add them up. In an <strong>arithmetic sequence</strong>, the same value — the <strong>common difference</strong> \(d\) — is added at every step. This lesson builds the two formulas that unlock every arithmetic problem: one for a single term, one for a running total.</p>
  <h2>📌 The General Term</h2>
  <p>Starting from a first term \(u_1\) and adding \(d\) repeatedly, the \(n\)th term is</p>
  <p style="text-align:center;">\( u_n = u_1 + (n-1)d \)</p>
  <p>Find \(d\) from any two terms: \(d = u_n - u_{n-1}\), or more generally \(d = \dfrac{u_m - u_k}{m-k}\).</p>
  <h2>📌 The Sum of an Arithmetic Series</h2>
  <p>Pairing the first and last terms, second and second-last, and so on, gives</p>
  <p style="text-align:center;">\( S_n = \dfrac{n}{2}\big(u_1 + u_n\big) = \dfrac{n}{2}\big(2u_1 + (n-1)d\big) \)</p>
  <p>Use whichever form matches what you already know — the first if you have \(u_n\), the second if you only have \(d\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Find \(u_{15}\) for the sequence \(4, 9, 14, 19, \dots\)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The common difference is \(d = 9-4 = 5\).</div>
      <div class="step"><strong>Step 2:</strong> \(u_{15} = u_1 + 14d = 4 + 14(5)\).</div>
      <em>Conclusion: \(u_{15} = 74\). ✓</em>
      <div style="text-align:center;margin:10px 0;"><svg viewBox="0 0 220 90" width="220" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;"><line x1="15" y1="75" x2="205" y2="75" stroke="#94a3b8" stroke-width="1.2"/><circle cx="30" cy="65" r="4" fill="#4a90e2"/><circle cx="60" cy="55" r="4" fill="#4a90e2"/><circle cx="90" cy="45" r="4" fill="#4a90e2"/><circle cx="120" cy="35" r="4" fill="#4a90e2"/><circle cx="190" cy="10" r="5" fill="#c2185b"/><text x="30" y="85" font-size="9" text-anchor="middle" fill="#1e3a5f">4</text><text x="190" y="10" font-size="10" text-anchor="middle" fill="#7a1044">u₁₅=74</text></svg></div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>An arithmetic sequence has \(u_5 = 23\) and \(u_9 = 43\). Find \(u_1\) and \(d\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Four steps separate the terms, so \(d = \dfrac{43-23}{9-5} = \dfrac{20}{4} = 5\).</div>
      <div class="step"><strong>Step 2:</strong> From \(u_5 = u_1 + 4d\): \(23 = u_1 + 20\), so \(u_1 = 3\).</div>
      <em>Conclusion: \(u_1 = 3\), \(d = 5\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Find the sum of the first 20 terms of \(6, 10, 14, 18, \dots\)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(d = 4\), so \(u_{20} = 6 + 19(4) = 82\).</div>
      <div class="step"><strong>Step 2:</strong> \(S_{20} = \dfrac{20}{2}(6 + 82) = 10(88)\).</div>
      <em>Conclusion: \(S_{20} = 880\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>How many terms of \(3, 7, 11, 15, \dots\) are needed for the sum to reach \(275\)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(S_n = \dfrac{n}{2}\big(2(3) + (n-1)(4)\big) = \dfrac{n}{2}(4n+2) = 2n^2+n\).</div>
      <div class="step"><strong>Step 2:</strong> Solve \(2n^2 + n = 275 \Rightarrow 2n^2+n-275=0\).</div>
      <div class="step"><strong>Step 3:</strong> Factoring (or the quadratic formula) gives \(n = \dfrac{-1+\sqrt{1+2200}}{4} = \dfrac{-1+47}{4} = 11.5\), so round up.</div>
      <em>Conclusion: 12 terms are needed (11 terms gives 253, one short of 275). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — A seating plan</h3><p>A theatre has 18 seats in the front row, and each row behind has 3 more seats than the row in front. Find the total number of seats in the first 12 rows.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> This is arithmetic with \(u_1 = 18\), \(d = 3\), \(n = 12\).</div>
      <div class="step"><strong>Step 2:</strong> \(S_{12} = \dfrac{12}{2}\big(2(18) + 11(3)\big) = 6(36+33) = 6(69)\).</div>
      <em>Conclusion: 414 seats. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(u_{10}\) for the sequence \(7, 11, 15, \dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(u_{10} = 7+9(4)=43\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>An arithmetic sequence has \(u_3=14\) and \(u_7=30\). Find \(d\) and \(u_1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(d=4\), \(u_1=6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(S_{15}\) for \(5, 9, 13, \dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step">\(u_{15}=5+14(4)=61\). <em>Answer: \(S_{15}=\tfrac{15}{2}(5+61)=495\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>How many terms of \(2,5,8,\dots\) sum to \(210\)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(S_n = \tfrac{n}{2}(3n+1)=210 \Rightarrow 3n^2+n-420=0\). <em>Answer: \(n=11.5\)… so 12 terms (n must be a whole number; check: 11 terms give 187, 12 terms give 222 — the sum passes 210 at the 12th term).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A stack of logs has 20 logs on the bottom row, one fewer in each row above, ending with 1 log on top. How many logs in total?</p><details><summary>View answer</summary><div class="solution"><div class="step">Arithmetic, \(u_1=20,d=-1,n=20\). <em>Answer: \(S_{20}=\tfrac{20}{2}(20+1)=210\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What makes a sequence arithmetic?</h3><p><em>The same value \(d\) is added to get each next term.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Which sum formula should I use?</h3><p><em>Use \(S_n=\tfrac n2(u_1+u_n)\) if you know the last term; use \(S_n=\tfrac n2(2u_1+(n-1)d)\) otherwise.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Can \(d\) be negative?</h3><p><em>Yes — the sequence then decreases, like the log-stack question above.</em></p></div>
</div>`),
]);

u1["1.2"] = L("1.2", "Geometric Sequences & Series", [
  html(String.raw`<div class="lecture-box">
  <h1>📐 Geometric Sequences &amp; Series</h1>
  <p><strong>Overview.</strong> In a <strong>geometric sequence</strong>, every term is <strong>multiplied</strong> by the same <strong>common ratio</strong> \(r\) to get the next. This lesson covers the general term, the sum of a finite geometric series, and the special case where an infinite geometric series settles on a finite total.</p>
  <h2>📌 The General Term</h2>
  <p style="text-align:center;">\( u_n = u_1 \, r^{\,n-1} \)</p>
  <p>Find \(r\) by dividing any term by the one before it: \(r = \dfrac{u_n}{u_{n-1}}\).</p>
  <h2>📌 The Sum of a Finite Geometric Series</h2>
  <p style="text-align:center;">\( S_n = \dfrac{u_1(r^n-1)}{r-1}, \quad r \neq 1 \)</p>
  <h2>📌 Sum to Infinity</h2>
  <p>If \(-1 < r < 1\), the terms shrink toward \(0\) and the running total <strong>converges</strong> to a finite value:</p>
  <p style="text-align:center;">\( S_\infty = \dfrac{u_1}{1-r} \)</p>
  <p>If \(|r| \geq 1\), the series has no finite sum — it diverges.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Find \(u_8\) for the sequence \(3, 6, 12, 24, \dots\)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(r = \dfrac{6}{3} = 2\).</div>
      <div class="step"><strong>Step 2:</strong> \(u_8 = 3(2)^7 = 3(128)\).</div>
      <em>Conclusion: \(u_8 = 384\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>A geometric sequence has \(u_1 = 100\) and \(u_4 = 12.5\). Find \(r\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(u_4 = u_1 r^3 \Rightarrow 12.5 = 100\,r^3\).</div>
      <div class="step"><strong>Step 2:</strong> \(r^3 = 0.125 \Rightarrow r = \sqrt[3]{0.125}\).</div>
      <em>Conclusion: \(r = 0.5\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Find the sum of the first 10 terms of \(5, 15, 45, \dots\)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(r = 3\), \(u_1 = 5\), \(n = 10\).</div>
      <div class="step"><strong>Step 2:</strong> \(S_{10} = \dfrac{5(3^{10}-1)}{3-1} = \dfrac{5(59048)}{2}\).</div>
      <em>Conclusion: \(S_{10} = 147\,620\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Find the sum to infinity of \(8, 4, 2, 1, \dots\)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(r = \tfrac12\), which satisfies \(-1<r<1\), so the sum converges.</div>
      <div class="step"><strong>Step 2:</strong> \(S_\infty = \dfrac{8}{1-\tfrac12} = \dfrac{8}{\tfrac12}\).</div>
      <em>Conclusion: \(S_\infty = 16\). ✓</em>
      <div style="text-align:center;margin:10px 0;"><svg viewBox="0 0 200 90" width="200" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;"><line x1="15" y1="75" x2="185" y2="75" stroke="#94a3b8" stroke-width="1.2"/><circle cx="30" cy="20" r="4" fill="#4a90e2"/><circle cx="60" cy="47" r="4" fill="#4a90e2"/><circle cx="90" cy="60" r="4" fill="#4a90e2"/><circle cx="120" cy="67" r="4" fill="#4a90e2"/><circle cx="150" cy="70" r="4" fill="#4a90e2"/><line x1="15" y1="75" x2="185" y2="75" stroke="#c2185b" stroke-width="1" stroke-dasharray="3,2"/><text x="170" y="72" font-size="9" fill="#7a1044">→16</text></svg></div>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — A bouncing ball</h3><p>A ball is dropped from a height of \(10\) m. Each time it bounces, it rises to \(60\%\) of its previous height. Find the total vertical distance the ball travels (down and up) before it comes to rest, in theory.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The first drop is \(10\) m. Every bounce after that goes up \(h\) and back down \(h\), so each contributes \(2h\), where the heights \(h\) form a geometric sequence \(6, 3.6, 2.16, \dots\) with \(u_1=6\), \(r=0.6\).</div>
      <div class="step"><strong>Step 2:</strong> The total bounce distance is \(2 \times S_\infty = 2 \times \dfrac{6}{1-0.6} = 2(15) = 30\).</div>
      <div class="step"><strong>Step 3:</strong> Add the very first drop: total \(= 10 + 30\).</div>
      <em>Conclusion: 40 m. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(u_6\) for \(2, 6, 18, \dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(u_6=2(3)^5=486\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A geometric sequence has \(u_1=64\) and \(u_5=4\). Find \(r\) (assume \(r>0\)).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(r^4=\tfrac{4}{64}=\tfrac1{16}\). <em>Answer: \(r=\tfrac12\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(S_8\) for \(4, 8, 16, \dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(S_8=\dfrac{4(2^8-1)}{1}=1020\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the sum to infinity of \(20, 5, 1.25, \dots\)</p><details><summary>View answer</summary><div class="solution"><div class="step">\(r=0.25\). <em>Answer: \(S_\infty=\dfrac{20}{0.75}=26.\overline{6}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A photocopier reduces an image to \(80\%\) of its size each time it's copied. Starting from a \(100\) cm wide original, find the sum to infinity of all the widths if the process were repeated forever.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(u_1=100, r=0.8\). <em>Answer: \(S_\infty=\dfrac{100}{0.2}=500\) cm.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What makes a sequence geometric?</h3><p><em>Each term is multiplied by the same ratio \(r\) to get the next.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When does an infinite geometric series have a finite sum?</h3><p><em>Only when \(-1<r<1\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Can \(r\) be negative?</h3><p><em>Yes — the terms then alternate in sign.</em></p></div>
</div>`),
]);

u1["1.3"] = L("1.3", "Sigma Notation", [
  html(String.raw`<div class="lecture-box">
  <h1>Σ Sigma Notation</h1>
  <p><strong>Overview.</strong> Sigma notation, \(\displaystyle\sum\), is compact shorthand for "add up all these terms". It's built from a general term, a starting index, and an ending index — and once you can read it, it unlocks a fast way to write and evaluate any series, arithmetic or geometric.</p>
  <h2>📌 Reading Sigma Notation</h2>
  <p style="text-align:center;">\( \displaystyle\sum_{n=1}^{5} (2n+1) \)</p>
  <p>This means: substitute \(n=1,2,3,4,5\) into \(2n+1\) in turn, and add the results. The number on top is the <strong>upper limit</strong> (last value of \(n\)); the number on the bottom is the <strong>lower limit</strong> (first value).</p>
  <h2>📌 Sigma Notation for Arithmetic &amp; Geometric Series</h2>
  <p>An arithmetic series with general term \(u_1+(n-1)d\) or a geometric series with general term \(u_1 r^{n-1}\) can each be written directly under a sigma sign — the general term goes inside, the term numbers go on top and bottom.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Evaluate \(\displaystyle\sum_{n=1}^{5}(2n+1)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Substitute \(n=1,\dots,5\): \(3,5,7,9,11\).</div>
      <div class="step"><strong>Step 2:</strong> Add them: \(3+5+7+9+11\).</div>
      <em>Conclusion: \(35\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Evaluate \(\displaystyle\sum_{n=1}^{6}3(2)^{n-1}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> This is a geometric series with \(u_1=3\), \(r=2\), \(n=6\).</div>
      <div class="step"><strong>Step 2:</strong> \(S_6 = \dfrac{3(2^6-1)}{2-1} = 3(63)\).</div>
      <em>Conclusion: \(189\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Write \(5+8+11+\cdots+38\) in sigma notation, then evaluate it.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> This is arithmetic with \(u_1=5\), \(d=3\), general term \(3n+2\).</div>
      <div class="step"><strong>Step 2:</strong> Find how many terms: \(3n+2=38 \Rightarrow n=12\).</div>
      <div class="step"><strong>Step 3:</strong> So the sum is \(\displaystyle\sum_{n=1}^{12}(3n+2) = \dfrac{12}{2}(5+38)\).</div>
      <em>Conclusion: \(\displaystyle\sum_{n=1}^{12}(3n+2) = 258\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Evaluate \(\displaystyle\sum_{k=3}^{7}(k^2-1)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> This is neither arithmetic nor geometric, so substitute directly: \(k=3,4,5,6,7\) give \(8,15,24,35,48\).</div>
      <div class="step"><strong>Step 2:</strong> Add them: \(8+15+24+35+48\).</div>
      <em>Conclusion: \(130\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — A savings model</h3><p>Deposits into an account are modelled by \(D_n = 50 + 10n\) dollars in month \(n\). Write the total deposited over the first year as a sigma sum and evaluate it.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Twelve months means \(\displaystyle\sum_{n=1}^{12}(50+10n)\).</div>
      <div class="step"><strong>Step 2:</strong> This is arithmetic: \(u_1=60\), \(u_{12}=50+120=170\).</div>
      <div class="step"><strong>Step 3:</strong> \(S_{12} = \dfrac{12}{2}(60+170)\).</div>
      <em>Conclusion: \(\$1380\) total. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Evaluate \(\displaystyle\sum_{n=1}^{4}(3n-2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(1+4+7+10\). <em>Answer: \(22\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Evaluate \(\displaystyle\sum_{n=1}^{5}2^{n}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(2+4+8+16+32\). <em>Answer: \(62\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Write \(4+7+10+\cdots+31\) in sigma notation.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\displaystyle\sum_{n=1}^{10}(3n+1)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Evaluate \(\displaystyle\sum_{k=1}^{4}(k^2+k)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(2+6+12+20\). <em>Answer: \(40\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Evaluate \(\displaystyle\sum_{n=1}^{20}n\) using the arithmetic sum formula, and explain why this matches the well-known result \(\tfrac{n(n+1)}{2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(u_1=1,u_{20}=20\). <em>Answer: \(S_{20}=\tfrac{20}{2}(1+20)=210=\tfrac{20(21)}{2}\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What do the numbers above and below \(\sum\) mean?</h3><p><em>The lower limit is the first value of the index; the upper limit is the last.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Do I always need a sum formula?</h3><p><em>No — if the series isn't arithmetic or geometric, substitute and add directly.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Can the index start somewhere other than 1?</h3><p><em>Yes, as in Example 4 where \(k\) starts at 3.</em></p></div>
</div>`),
]);

u1["1.4"] = L("1.4", "The Binomial Theorem", [
  html(String.raw`<div class="lecture-box">
  <h1>🔺 The Binomial Theorem</h1>
  <p><strong>Overview.</strong> Expanding \((a+b)^n\) by hand gets unwieldy fast. The <strong>binomial theorem</strong> gives every term of the expansion directly, using combinations \(\binom{n}{r}\) (read "n choose r") as coefficients — the same numbers that appear in Pascal's triangle.</p>
  <h2>📌 The Binomial Coefficients</h2>
  <p style="text-align:center;">\( \binom{n}{r} = \dfrac{n!}{r!(n-r)!} \)</p>
  <div style="text-align:center;margin:10px 0;"><svg viewBox="0 0 220 100" width="220" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;"><text x="110" y="15" font-size="11" text-anchor="middle" fill="#1e3a5f">1</text><text x="95" y="35" font-size="11" text-anchor="middle" fill="#1e3a5f">1</text><text x="125" y="35" font-size="11" text-anchor="middle" fill="#1e3a5f">1</text><text x="80" y="55" font-size="11" text-anchor="middle" fill="#1e3a5f">1</text><text x="110" y="55" font-size="11" text-anchor="middle" fill="#1e3a5f">2</text><text x="140" y="55" font-size="11" text-anchor="middle" fill="#1e3a5f">1</text><text x="65" y="75" font-size="11" text-anchor="middle" fill="#c2185b">1</text><text x="95" y="75" font-size="11" text-anchor="middle" fill="#c2185b">3</text><text x="125" y="75" font-size="11" text-anchor="middle" fill="#c2185b">3</text><text x="155" y="75" font-size="11" text-anchor="middle" fill="#c2185b">1</text><text x="110" y="92" font-size="9" text-anchor="middle" fill="#64748b">Pascal's triangle, row n=3</text></svg></div>
  <h2>📌 The Binomial Theorem</h2>
  <p style="text-align:center;">\( (a+b)^n = \displaystyle\sum_{r=0}^{n}\binom{n}{r}a^{\,n-r}b^{\,r} \)</p>
  <p>The general term — useful for finding just <em>one</em> term without expanding everything — is \(T_{r+1} = \binom{n}{r}a^{n-r}b^r\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Expand \((x+2)^4\) fully.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Row \(n=4\) of Pascal's triangle gives coefficients \(1,4,6,4,1\).</div>
      <div class="step"><strong>Step 2:</strong> \((x+2)^4 = x^4 + 4x^3(2) + 6x^2(2)^2 + 4x(2)^3 + (2)^4\).</div>
      <em>Conclusion: \(x^4+8x^3+24x^2+32x+16\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Find the coefficient of \(x^3\) in the expansion of \((x+3)^6\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The general term is \(T_{r+1} = \binom{6}{r}x^{6-r}(3)^r\). We need \(6-r=3\), so \(r=3\).</div>
      <div class="step"><strong>Step 2:</strong> \(T_4 = \binom{6}{3}x^3(3)^3 = 20 \times 27 \times x^3\).</div>
      <em>Conclusion: the coefficient is \(540\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Find the term independent of \(x\) (the constant term) in the expansion of \(\left(x^2+\dfrac{1}{x}\right)^6\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The general term is \(\binom{6}{r}(x^2)^{6-r}\left(\dfrac1x\right)^r = \binom{6}{r}x^{12-2r-r}=\binom{6}{r}x^{12-3r}\).</div>
      <div class="step"><strong>Step 2:</strong> The term is constant when \(12-3r=0 \Rightarrow r=4\).</div>
      <div class="step"><strong>Step 3:</strong> \(T_5=\binom{6}{4}=15\).</div>
      <em>Conclusion: the constant term is \(15\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Expand \((2x-1)^5\) fully.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Row \(n=5\) gives coefficients \(1,5,10,10,5,1\); treat \(-1\) as \(b\), so signs alternate.</div>
      <div class="step"><strong>Step 2:</strong> \((2x)^5 - 5(2x)^4(1) + 10(2x)^3(1)^2 - 10(2x)^2(1)^3 + 5(2x)(1)^4 - (1)^5\).</div>
      <em>Conclusion: \(32x^5-80x^4+80x^3-40x^2+10x-1\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Approximating a power</h3><p>Use the first three terms of the binomial expansion of \((1+0.02)^5\) to approximate \(1.02^5\), to 4 decimal places.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \((1+0.02)^5 \approx 1 + 5(0.02) + 10(0.02)^2\) (first three terms).</div>
      <div class="step"><strong>Step 2:</strong> \(= 1 + 0.1 + 0.004\).</div>
      <em>Conclusion: \(\approx 1.1040\) (the true value is \(1.10408...\), so this is accurate to 4 dp). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Expand \((x+1)^3\) fully.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x^3+3x^2+3x+1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the coefficient of \(x^2\) in \((x+4)^5\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(r=3\): \(\binom53(4)^3=10(64)\). <em>Answer: \(640\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the constant term in \(\left(x+\dfrac1x\right)^4\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Need \(4-2r=0\Rightarrow r=2\). <em>Answer: \(\binom42=6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Expand \((x-3)^4\) fully.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x^4-12x^3+54x^2-108x+81\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Find the term containing \(x^4\) in \((2x-1)^7\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Need \(7-r=4\Rightarrow r=3\): \(\binom73(2x)^4(-1)^3=-35(16)x^4\). <em>Answer: \(-560x^4\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does \(\binom{n}{r}\) mean?</h3><p><em>The number of ways to choose \(r\) items from \(n\), and the coefficient of the term with \(b^r\) in \((a+b)^n\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why do signs alternate when there's a minus sign?</h3><p><em>Because \((a-b)^n=(a+(-b))^n\), so every odd power of \(b\) carries a negative sign.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Do I need to expand the whole thing to find one term?</h3><p><em>No — the general term \(T_{r+1}=\binom{n}{r}a^{n-r}b^r\) finds any single term directly.</em></p></div>
</div>`),
]);

u1["1.5"] = L("1.5", "Exponents & Radicals", [
  html(String.raw`<div class="lecture-box">
  <h1>⚡ Exponents &amp; Radicals</h1>
  <p><strong>Overview.</strong> The laws of exponents let you simplify complicated expressions without a calculator, and radicals (roots) are just exponents in disguise. This lesson reviews the exponent laws, radical simplification, rational exponents, and solving simple exponential equations by matching bases.</p>
  <h2>📌 The Laws of Exponents</h2>
  <p style="text-align:center;">\( a^m \cdot a^n = a^{m+n} \qquad \dfrac{a^m}{a^n}=a^{m-n} \qquad (a^m)^n = a^{mn} \qquad a^{-n}=\dfrac{1}{a^n} \qquad a^{1/n}=\sqrt[n]{a} \)</p>
  <h2>📌 Simplifying Radicals</h2>
  <p>Pull out perfect-square (or perfect-\(n\)th-power) factors: \(\sqrt{50}=\sqrt{25\cdot2}=5\sqrt2\). Radicals with the same "leftover" root can be combined like like terms.</p>
  <h2>📌 Solving Exponential Equations by Matching Bases</h2>
  <p>If both sides can be written with the <strong>same base</strong>, the exponents must be equal: \(3^{2x}=3^5 \Rightarrow 2x=5\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Simplify \(\dfrac{(x^3y^{-2})^2}{(x^{-1}y)^3}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Expand the powers: \(\dfrac{x^6y^{-4}}{x^{-3}y^3}\).</div>
      <div class="step"><strong>Step 2:</strong> Subtract exponents: \(x^{6-(-3)}y^{-4-3} = x^9y^{-7}\).</div>
      <em>Conclusion: \(\dfrac{x^9}{y^7}\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Simplify \(\sqrt{50} - \sqrt{18} + \sqrt{8}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\sqrt{50}=5\sqrt2\), \(\sqrt{18}=3\sqrt2\), \(\sqrt8=2\sqrt2\).</div>
      <div class="step"><strong>Step 2:</strong> Combine: \(5\sqrt2-3\sqrt2+2\sqrt2\).</div>
      <em>Conclusion: \(4\sqrt2\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Solve \(3^{2x-1}=27\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Write \(27\) with base \(3\): \(27=3^3\).</div>
      <div class="step"><strong>Step 2:</strong> Equate exponents: \(2x-1=3\).</div>
      <em>Conclusion: \(x=2\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Simplify \(27^{2/3}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The denominator of the exponent is a root, the numerator is a power: \(27^{2/3}=\left(\sqrt[3]{27}\right)^2\).</div>
      <div class="step"><strong>Step 2:</strong> \(\sqrt[3]{27}=3\), so \(3^2\).</div>
      <em>Conclusion: \(9\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Rationalizing a denominator</h3><p>Rationalize \(\dfrac{5}{\sqrt7-2}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Multiply top and bottom by the conjugate \(\sqrt7+2\): \(\dfrac{5(\sqrt7+2)}{(\sqrt7-2)(\sqrt7+2)}\).</div>
      <div class="step"><strong>Step 2:</strong> The denominator becomes \(7-4=3\).</div>
      <em>Conclusion: \(\dfrac{5(\sqrt7+2)}{3} = \dfrac{5\sqrt7+10}{3}\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simplify \(\dfrac{x^5}{x^{-2}}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x^7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Simplify \(\sqrt{75}+\sqrt{27}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(5\sqrt3+3\sqrt3\). <em>Answer: \(8\sqrt3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(2^{3x}=16\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(16=2^4\Rightarrow3x=4\). <em>Answer: \(x=\tfrac43\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Simplify \(64^{1/2}\) and \(8^{2/3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(8\) and \(4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Solve \(4^{x+1}=8^{x-1}\) by writing both sides with base \(2\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(2^{2x+2}=2^{3x-3}\Rightarrow2x+2=3x-3\). <em>Answer: \(x=5\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does a negative exponent mean?</h3><p><em>Take the reciprocal: \(a^{-n}=\tfrac1{a^n}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does a fractional exponent mean?</h3><p><em>The denominator is a root, the numerator is a power: \(a^{m/n}=\left(\sqrt[n]{a}\right)^m\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why rationalize a denominator?</h3><p><em>It's a standard convention for a "tidy" final answer with no radical left on the bottom.</em></p></div>
</div>`),
]);

u1["1.6"] = L("1.6", "Logarithms", [
  html(String.raw`<div class="lecture-box">
  <h1>📊 Logarithms</h1>
  <p><strong>Overview.</strong> A logarithm answers the question "what power gives this number?" It is the <strong>inverse</strong> operation of an exponential, and it's the key that unlocks exponential equations that don't share a common base.</p>
  <h2>📌 The Definition</h2>
  <p style="text-align:center;">\( \log_b(x) = y \quad \Longleftrightarrow \quad b^y = x \)</p>
  <h2>📌 The Laws of Logarithms</h2>
  <p style="text-align:center;">\( \log_b(mn)=\log_b m+\log_b n \qquad \log_b\!\left(\dfrac{m}{n}\right)=\log_b m-\log_b n \qquad \log_b(m^k)=k\log_b m \)</p>
  <h2>📌 Change of Base</h2>
  <p>Most calculators only have \(\log_{10}\) or \(\ln\) (base \(e\)). Convert any base with</p>
  <p style="text-align:center;">\( \log_b x = \dfrac{\ln x}{\ln b} \)</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Evaluate \(\log_2(32)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Ask: "2 to what power gives 32?"</div>
      <div class="step"><strong>Step 2:</strong> \(2^5=32\).</div>
      <em>Conclusion: \(\log_2(32)=5\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Solve \(5^x=40\), giving the answer to 3 decimal places.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Take \(\ln\) of both sides: \(\ln(5^x)=\ln(40)\).</div>
      <div class="step"><strong>Step 2:</strong> \(x\ln5=\ln40 \Rightarrow x=\dfrac{\ln40}{\ln5}\).</div>
      <em>Conclusion: \(x \approx 2.292\). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = 5^x", "y = 40"], { title: "y = 5ˣ crosses y = 40 at x ≈ 2.292", xMin: -1, xMax: 4, yMin: -5, yMax: 60 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Simplify \(\log_3(9)+\log_3(27)-\log_3(3)\) without a calculator.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Evaluate each: \(\log_3(9)=2\), \(\log_3(27)=3\), \(\log_3(3)=1\).</div>
      <div class="step"><strong>Step 2:</strong> \(2+3-1\).</div>
      <em>Conclusion: \(4\). ✓ (this also matches \(\log_3\left(\tfrac{9\times27}{3}\right)=\log_3(81)=4\))</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Solve \(\log_2(x)+\log_2(x-2)=3\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Combine using the product law: \(\log_2\big(x(x-2)\big)=3\).</div>
      <div class="step"><strong>Step 2:</strong> Rewrite in exponential form: \(x(x-2)=2^3=8\), so \(x^2-2x-8=0\).</div>
      <div class="step"><strong>Step 3:</strong> Factor: \((x-4)(x+2)=0 \Rightarrow x=4\) or \(x=-2\).</div>
      <div class="step"><strong>Step 4 (check domain):</strong> \(x\) and \(x-2\) must both be positive, so \(x=-2\) is rejected.</div>
      <em>Conclusion: \(x=4\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Sound intensity</h3><p>The loudness of a sound in decibels is modelled by \(L = 10\log_{10}\left(\dfrac{I}{I_0}\right)\), where \(I\) is the sound's intensity and \(I_0\) is a reference intensity. If a sound is \(1000\) times more intense than \(I_0\), find \(L\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Here \(\dfrac{I}{I_0}=1000\), so \(L=10\log_{10}(1000)\).</div>
      <div class="step"><strong>Step 2:</strong> \(\log_{10}(1000)=3\), so \(L=10(3)\).</div>
      <em>Conclusion: \(30\) decibels. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Evaluate \(\log_5(125)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(3^x=50\) to 3 decimal places.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x=\dfrac{\ln50}{\ln3}\approx3.561\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Simplify \(\log_2(8)+\log_2(4)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(3+2\). <em>Answer: \(5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(\log_3(x)-\log_3(x-6)=1\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{x}{x-6}=3\Rightarrow x=3x-18\Rightarrow x=9\). <em>Answer: \(x=9\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A population model is \(P=200(1.05)^t\). Find, to the nearest year, when the population first exceeds \(500\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(1.05^t=2.5\Rightarrow t=\dfrac{\ln2.5}{\ln1.05}\approx18.78\). <em>Answer: 19 years.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \(\log_b(x)\), in plain words?</h3><p><em>The power you'd raise \(b\) to, to get \(x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why do I need to check the domain after solving a log equation?</h3><p><em>Because \(\log_b\) of a non-positive number is undefined — a solution that makes the original argument \(\le 0\) must be rejected.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I solve for an exponent with a calculator?</h3><p><em>Take \(\ln\) (or \(\log_{10}\)) of both sides, then use the power law to bring the exponent down.</em></p></div>
</div>`),
]);

u1["1.7"] = L("1.7", "Mathematical Proof", [
  html(String.raw`<div class="lecture-box">
  <h1>🧠 Mathematical Proof</h1>
  <p><strong>Overview.</strong> A mathematical <strong>proof</strong> is a logical argument that a statement is true for <em>every</em> case it claims to cover — not just the few cases you happened to check. This lesson covers direct (deductive) proof, proof by exhaustion (checking every possible case when there are only finitely many), and how a single <strong>counterexample</strong> is enough to disprove a general claim.</p>
  <h2>📌 Direct Proof</h2>
  <p>Start from known facts or definitions (e.g. "an even number can be written \(2k\) for some integer \(k\)") and reason forward, step by step, to the conclusion.</p>
  <h2>📌 Proof by Exhaustion</h2>
  <p>When a claim only involves a small, finite number of cases, you can prove it by checking <strong>every single one</strong>.</p>
  <h2>📌 Disproof by Counterexample</h2>
  <p>A statement that claims something is true <strong>for all</strong> cases is disproved by finding just <strong>one</strong> case where it fails — no matter how many cases it happens to work for.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Prove algebraically that the sum of any two consecutive integers is odd.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let the two consecutive integers be \(n\) and \(n+1\), for any integer \(n\).</div>
      <div class="step"><strong>Step 2:</strong> Their sum is \(n+(n+1)=2n+1\).</div>
      <div class="step"><strong>Step 3:</strong> Any number of the form \(2n+1\) is, by definition, odd.</div>
      <em>Conclusion: the sum of any two consecutive integers is odd. ✓ (proven directly, for every integer \(n\) at once)</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Disprove the claim: "\(n^2-n+11\) is prime for every positive integer \(n\)."</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The claim is a "for all" statement, so one counterexample is enough to disprove it.</div>
      <div class="step"><strong>Step 2:</strong> Try \(n=11\): \(11^2-11+11 = 121-11+11 = 121\).</div>
      <div class="step"><strong>Step 3:</strong> \(121=11\times11\) is not prime.</div>
      <em>Conclusion: false — \(n=11\) is a counterexample, even though the formula does give primes for many smaller \(n\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Prove that \(n(n+1)\) is always even, for any integer \(n\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 (case n even):</strong> If \(n\) is even, \(n=2k\), so \(n(n+1)=2k(n+1)\), which is even.</div>
      <div class="step"><strong>Step 2 (case n odd):</strong> If \(n\) is odd, then \(n+1\) is even, so \(n+1=2k\), giving \(n(n+1)=2kn\), which is even.</div>
      <div class="step"><strong>Step 3:</strong> Every integer is either even or odd, so both cases together cover everything.</div>
      <em>Conclusion: \(n(n+1)\) is always even. ✓ (this is essentially proof by exhaustion of the two possible cases)</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Prove that if \(n\) is even, then \(n^2\) is even.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Since \(n\) is even, write \(n=2k\) for some integer \(k\).</div>
      <div class="step"><strong>Step 2:</strong> Then \(n^2=(2k)^2=4k^2=2(2k^2)\).</div>
      <div class="step"><strong>Step 3:</strong> \(2k^2\) is an integer, so \(n^2\) is \(2\) times an integer — the definition of even.</div>
      <em>Conclusion: \(n^2\) is even whenever \(n\) is even. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — A false inequality</h3><p>Disprove the claim: "for every real number \(x\), \(x^2 \geq x\)."</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Try a fraction between \(0\) and \(1\), since squaring a proper fraction makes it smaller.</div>
      <div class="step"><strong>Step 2:</strong> Let \(x=0.5\): \(x^2=0.25\).</div>
      <div class="step"><strong>Step 3:</strong> Compare: \(0.25 < 0.5\), so \(x^2 \geq x\) fails here.</div>
      <em>Conclusion: false — \(x=0.5\) is a counterexample. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Prove that the sum of any two odd numbers is even.</p><details><summary>View answer</summary><div class="solution"><div class="step">Let the numbers be \(2a+1\) and \(2b+1\); their sum is \(2a+2b+2=2(a+b+1)\), which is even. <em>Answer: proven directly.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Disprove: "\(n^2+1\) is always prime for positive integers \(n\)."</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(n=3\) gives \(9+1=10=2\times5\), not prime — a counterexample.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Prove that the product of any two even numbers is divisible by \(4\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\((2a)(2b)=4ab\). <em>Answer: proven directly — always a multiple of 4.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Disprove: "for all real \(x\), \(|x|>0\)."</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x=0\) gives \(|0|=0\), not greater than \(0\) — a counterexample.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Prove by exhaustion that every integer from \(1\) to \(5\) is either prime or can be written as a product of primes.</p><details><summary>View answer</summary><div class="solution"><div class="step">1 (neither, by convention — a special case to note); 2,3,5 prime; 4=2×2. <em>Answer: checked all five cases directly.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How many counterexamples are needed to disprove a "for all" claim?</h3><p><em>Just one.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the difference between direct proof and proof by exhaustion?</h3><p><em>Direct proof reasons algebraically for every case at once; exhaustion checks each of a small, finite number of cases individually.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Does checking many examples count as a proof?</h3><p><em>No — however many cases work, the claim could still fail on a case you haven't tried, unless the total number of cases is finite and you've checked all of them.</em></p></div>
</div>`),
]);
