// MCR3U Unit 1 — Characteristics of Functions. Single-card lessons matching the
// Grade 9/10 pattern, with interactive graphs embedded inline via gframe.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const MI = `style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u1 = {};

u1["1.1"] = L("1.1", "Functions, Relations & Function Notation", [html(String.raw`<div class="lecture-box">
  <h1>📈 Functions, Relations &amp; Function Notation</h1>
  <p><strong>Overview.</strong> A <strong>relation</strong> is any set of ordered pairs. A <strong>function</strong> is a relation where every input \(x\) gives exactly one output \(y\).</p>
  <h2>📌 Is it a function?</h2>
  <ul>
    <li><strong>Vertical-line test:</strong> if a vertical line meets the graph more than once, it is not a function.</li>
    <li><strong>Mapping:</strong> a function is one-to-one or many-to-one — never one-to-many.</li>
    <li><strong>Notation:</strong> \(f(x)\) is the output at \(x\); it is not multiplication. To evaluate, substitute for every \(x\).</li>
  </ul>
  ${gframe(["y = x^2"], { title: "y = x^2 passes the vertical-line test — it is a function" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Function or not?</h3><p>Is \(x=y^2\) a function?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(y=\pm\sqrt{x}\): \(x=4\) gives \(y=2\) and \(y=-2\).</div><em>Conclusion: not a function. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Evaluate</h3><p>For \(f(x)=2x^2+3x-1\), find \(f(2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2(4)+3(2)-1\).</div><em>Conclusion: \(13\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Negative input</h3><p>For \(f(x)=2x^2+3x-1\), find \(f(-1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2(1)-3-1\).</div><em>Conclusion: \(-2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: From a set</h3><p>Is \(\{(1,2),(1,3),(2,5)\}\) a function?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Input \(1\) maps to both \(2\) and \(3\).</div><em>Conclusion: not a function. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Evaluate</h3><p>For \(f(x)=x^2-4\), find \(f(3)\).</p><div class="solution"><em>Conclusion: \(9-4=5\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>For \(f(x)=x^2-4\), find \(f(-2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Does \(y=3x+1\) pass the vertical-line test?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Yes — it is a function.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>For \(g(x)=5-2x\), find \(g(4)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Is \(\{(2,1),(3,1),(4,1)\}\) a function?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Yes — many-to-one is allowed.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>For \(f(x)=x^2+x\), find \(f(-3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(9-3=6\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Can two inputs share one output?</h3><p><em>Yes — that is many-to-one and still a function. One input giving two outputs is forbidden.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Does \(f(x)\) mean \(f\times x\)?</h3><p><em>No — it is the output of \(f\) at \(x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Common evaluation slip?</h3><p><em>Square before applying the sign: \((-1)^2=1\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Fast function test on a graph?</h3><p><em>The vertical-line test.</em></p></div>
</div>`)]);

u1["1.2"] = L("1.2", "Domain and Range", [html(String.raw`<div class="lecture-box">
  <h1>🎯 Domain and Range</h1>
  <p><strong>Overview.</strong> The <strong>domain</strong> is all allowed inputs \(x\); the <strong>range</strong> is all resulting outputs \(y\). Every function has its own natural domain and range, and the same restriction shows up again and again — a line has none, a square or absolute value restricts the outputs, a square root restricts the inputs, and a reciprocal restricts both. Once you know the five parent functions, you can read off the domain and range of any shifted version of them.</p>
  <h2>📌 Where restrictions come from</h2>
  <ul>
    <li><strong>Denominators cannot be zero</strong> — excludes one \(x\)-value from the domain (as in \(y=\dfrac1x\)).</li>
    <li><strong>Even roots need a non-negative radicand</strong> — the expression under a square root must be \(\ge0\), which limits the domain (as in \(y=\sqrt{x}\)).</li>
    <li><strong>Squares and absolute values are never negative</strong> — the output is always \(\ge0\) (or \(\le0\) if reflected), which limits the range, not the domain.</li>
    <li><strong>A shift moves the restriction, it doesn't remove it.</strong> Shifting \(y=\sqrt{x}\) right by \(4\) moves the domain boundary from \(x\ge0\) to \(x\ge4\); shifting \(y=\dfrac1x\) down by \(2\) moves the range boundary from \(y\ne0\) to \(y\ne-2\).</li>
  </ul>
  <h2>📚 The five parent functions: domain and range</h2>
  <div style="overflow-x:auto;margin:10px 0;">
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <thead>
        <tr style="background:#eef2ff;color:#3730a3;">
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Parent function</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Domain</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Range</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Why restricted</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=x\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\in\mathbb{R}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\in\mathbb{R}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">no denominator, root, or square — nothing to restrict</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=x^2\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\in\mathbb{R}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\ge0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">squaring can never give a negative output</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=|x|\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\in\mathbb{R}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\ge0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">absolute value can never give a negative output</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=\sqrt{x}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\ge0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\ge0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">the radicand must be \(\ge0\) (even root)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=\dfrac1x\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\ne0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\ne0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">the denominator can never be \(0\)</td></tr>
      </tbody>
    </table>
  </div>
  ${gframe(["y = sqrt(x - 2)"], { title: "y = √(x − 2): the shift moves the domain boundary from x≥0 to x≥2, range stays y≥0" })}
  <h2>🔵 Examples — one per parent function, each shifted</h2>
  <div class="example-box" ${EX}><h3>Example 1: Linear, \(y=x\)</h3><p>Find the domain and range of \(g(x)=-3x+4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(g\) is linear with no denominator, root, or square — nothing restricts \(x\).</div><div class="step"><strong>Step 2:</strong> Since the slope \(-3\ne0\), the line rises and falls through every \(y\)-value — nothing restricts \(y\) either.</div></div><em>Conclusion: domain \(x\in\mathbb{R}\), range \(y\in\mathbb{R}\) — unlike the other four parent functions, a (non-flat) line restricts neither. ✓</em>${gframe(["y = -3*x + 4"], { title: "y=-3x+4: a straight line covers every x and every y" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Quadratic, \(y=x^2\)</h3><p>Find the domain and range of \(g(x)=2(x-1)^2-5\).</p><div class="solution"><div class="step"><strong>Step 1 (domain):</strong> Squaring \((x-1)\) works for every real \(x\) — no restriction.</div><div class="step"><strong>Step 2 (range):</strong> Vertex form gives vertex \((1,-5)\); since \(a=2>0\), the parabola opens up, so \(-5\) is the minimum output.</div></div><em>Conclusion: domain \(x\in\mathbb{R}\), range \(y\ge-5\). ✓</em>${gframe(["y = 2*(x-1)^2 - 5"], { title: "vertex (1,−5), opens up: the range is y≥−5", labels: [{ x: 1, y: -5, t: "(1,−5)", c: "#1b7a44" }] })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Absolute value, \(y=|x|\)</h3><p>Find the domain and range of \(g(x)=-|x+2|+3\).</p><div class="solution"><div class="step"><strong>Step 1 (domain):</strong> Absolute value is defined for every real \(x\) — no restriction.</div><div class="step"><strong>Step 2 (range):</strong> The corner is at \(x+2=0\Rightarrow x=-2\), giving \((-2,3)\); since \(a=-1<0\), the V is reflected and opens down, so \(3\) is the maximum output.</div></div><em>Conclusion: domain \(x\in\mathbb{R}\), range \(y\le3\). ✓</em>${gframe(["y = -abs(x+2) + 3"], { title: "corner (−2,3), opens down: the range is y≤3", labels: [{ x: -2, y: 3, t: "(−2,3)", c: "#1b7a44" }] })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Square root, \(y=\sqrt{x}\)</h3><p>Find the domain and range of \(g(x)=\sqrt{x-4}+1\).</p><div class="solution"><div class="step"><strong>Step 1 (domain):</strong> Need the radicand \(\ge0\): \(x-4\ge0\Rightarrow x\ge4\).</div><div class="step"><strong>Step 2 (range):</strong> A square root's output is always \(\ge0\); shifting the whole function up \(1\) makes the output always \(\ge1\).</div></div><em>Conclusion: domain \(x\ge4\), range \(y\ge1\) — both boundaries moved by the shift, exactly like \(y=\sqrt{x-2}\) above. ✓</em>${gframe([{ kind: "cartesian", expr: "y = sqrt(x-4)+1", dMin: "4" }], { title: "y=√(x−4)+1: domain x≥4, range y≥1" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Reciprocal, \(y=\dfrac1x\)</h3><p>Find the domain and range of \(g(x)=\dfrac{1}{x+3}-2\).</p><div class="solution"><div class="step"><strong>Step 1 (domain):</strong> The denominator can't be \(0\): \(x+3=0\Rightarrow x=-3\) is excluded.</div><div class="step"><strong>Step 2 (range):</strong> \(\dfrac1x\) never equals \(0\); shifting the whole function down \(2\) means the output never equals \(-2\) — this is the horizontal asymptote.</div></div><em>Conclusion: domain \(x\ne-3\), range \(y\ne-2\). ✓</em>${gframe(["y = 1/(x+3) - 2"], { title: "y=1/(x+3)−2: asymptotes at x=−3 and y=−2" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1 (linear)</h3><p>Domain and range of \(g(x)=5x-7\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Domain \(x\in\mathbb{R}\), range \(y\in\mathbb{R}\) — a non-flat line always covers both.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2 (quadratic)</h3><p>Domain and range of \(g(x)=-(x+3)^2+2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Domain \(x\in\mathbb{R}\). Vertex \((-3,2)\), opens down (\(a=-1<0\)): range \(y\le2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3 (absolute value)</h3><p>Domain and range of \(g(x)=2|x-1|\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Domain \(x\in\mathbb{R}\). Corner \((1,0)\), opens up (\(a=2>0\)): range \(y\ge0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4 (square root)</h3><p>Domain and range of \(g(x)=\sqrt{x+5}-3\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Need \(x+5\ge0\): domain \(x\ge-5\). Output shifted down \(3\): range \(y\ge-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 (reciprocal)</h3><p>Domain and range of \(g(x)=\dfrac{1}{x-6}+4\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Denominator \(0\) at \(x=6\): domain \(x\ne6\). Asymptote shifted up \(4\): range \(y\ne4\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do shifts change domain and range?</h3><p><em>A horizontal shift (the \(d\) inside, like \(\sqrt{x-4}\)) moves the domain boundary; a vertical shift (the \(c\) added on, like \(+1\)) moves the range boundary — the same \(d\) and \(c\) you'll meet again in transformations.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I write domain/range?</h3><p><em>Set-builder \(\{x\in\mathbb{R}\mid x\ge4\}\) or interval \([4,\infty)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Most common slip?</h3><p><em>Forgetting a square root needs the inside \(\ge0\), or that a denominator can't be \(0\) — always check for these two before writing "all real numbers."</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Which of the five parent functions have no restriction at all?</h3><p><em>Only \(y=x\) has an unrestricted domain <em>and</em> range. The other four each restrict at least one side: \(x^2\) and \(|x|\) restrict the range, \(\sqrt{x}\) restricts both, and \(\dfrac1x\) restricts both (by excluding one value from each).</em></p></div>
</div>`)]);

u1["1.3"] = L("1.3", "Inverse Functions", [html(String.raw`<div class="lecture-box">
  <h1>🔄 Inverse Functions</h1>
  <p><strong>Overview.</strong> The inverse \(f^{-1}\) "undoes" \(f\): if \((a,b)\) is a point on \(f\), then \((b,a)\) is a point on \(f^{-1}\). Graphically, this means the graph of \(f^{-1}\) is the <strong>reflection of \(f\) in the line \(y=x\)</strong>. Algebraically, you find it by <strong>switching \(x\) and \(y\)</strong> in the equation and solving for \(y\). This works the same way for <em>any</em> function — a line, a parabola, an absolute value, a square root, or a reciprocal.</p>
  <h2>📌 Finding an inverse</h2>
  <ol>
    <li>Write \(y=f(x)\).</li>
    <li>Switch \(x\) and \(y\).</li>
    <li>Solve for \(y\) — this is \(f^{-1}(x)\).</li>
  </ol>
  <p><strong>Domain and range swap:</strong> the domain of \(f^{-1}\) is the range of \(f\), and the range of \(f^{-1}\) is the domain of \(f\).</p>
  <p><strong>Not every inverse is a function.</strong> Use the <strong>horizontal line test</strong>: if any horizontal line crosses the graph of \(f\) more than once, \(f\) is not one-to-one, and its inverse relation fails the vertical-line test — it is not a function. The fix is to <strong>restrict the domain</strong> of \(f\) to a piece where it is one-to-one, then find the inverse of that piece.</p>
  <h2>📚 The five parent functions, inverted</h2>
  <div style="overflow-x:auto;margin:10px 0;">
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <thead>
        <tr style="background:#eef2ff;color:#3730a3;">
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Function</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">One-to-one?</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Inverse</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=x\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">yes</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=x\) (self-inverse)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=x^2\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">no — restrict to \(x\ge0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=\sqrt{x}\)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=|x|\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">no — restrict to \(x\ge0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=x\) (for \(x\ge0\))</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=\sqrt{x}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">yes</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=x^2\) (for \(x\ge0\))</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=\dfrac1x\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">yes</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=\dfrac1x\) (self-inverse)</td></tr>
      </tbody>
    </table>
  </div>
  ${gframe(["y = 2*x + 3", "y = (x - 3)/2", "y = x"], { title: "A function and its inverse reflect over the line y = x" })}
  <h2>🔵 Examples — one per parent function</h2>
  <div class="example-box" ${EX}><h3>Example 1: Linear, \(y=x\)</h3><p>Find the inverse of \(f(x)=x\), and explain what the result means.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Write \(y=x\).</div><div class="step"><strong>Step 2:</strong> Switch \(x\) and \(y\): \(x=y\).</div><div class="step"><strong>Step 3:</strong> Solve for \(y\): \(y=x\) — the same equation.</div></div><em>Conclusion: \(f^{-1}(x)=x\) — \(y=x\) is its own inverse; it reflects onto itself across the mirror line \(y=x\). ✓</em>${gframe(["y = x"], { title: "y = x is symmetric about itself — it is its own inverse" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Quadratic, \(y=x^2\) (restricted)</h3><p>Explain why \(f(x)=x^2\) does not have an inverse function over all reals, then find the inverse after restricting the domain to \(x\ge0\).</p><div class="solution"><div class="step"><strong>Step 1 (horizontal line test):</strong> The line \(y=4\) crosses \(y=x^2\) twice, at \(x=2\) and \(x=-2\), so \(f\) is not one-to-one and its full inverse is not a function.</div><div class="step"><strong>Step 2 (restrict):</strong> Restrict the domain to \(x\ge0\), the half where \(f\) is one-to-one.</div><div class="step"><strong>Step 3 (switch and solve):</strong> Write \(y=x^2\); switch: \(x=y^2\); solve: \(y=\sqrt{x}\) (taking the positive root, since the restricted range is \(y\ge0\)).</div></div><em>Conclusion: for \(x\ge0\), \(f^{-1}(x)=\sqrt{x}\). ✓</em>${gframe([{ kind: "cartesian", expr: "y = x^2", dMin: "0" }, "y = sqrt(x)", "y = x"], { title: "y=x² (x≥0, red) and its inverse y=√x (green) — reflections across y=x (grey)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Absolute value, \(y=|x|\)</h3><p>Show that \(f(x)=|x|\) fails the horizontal line test, then find its inverse after restricting the domain to \(x\ge0\).</p><div class="solution"><div class="step"><strong>Step 1 (horizontal line test):</strong> The line \(y=3\) crosses \(y=|x|\) twice, at \(x=-3\) and \(x=3\) — the graph below shows both points at the same height.</div><div class="step"><strong>Step 2 (restrict):</strong> Restrict the domain to \(x\ge0\). There, \(|x|=x\), so the restricted function is just \(f(x)=x\).</div><div class="step"><strong>Step 3 (switch and solve):</strong> Since \(f(x)=x\) on \(x\ge0\) is already the identity, switching \(x\) and \(y\) gives the same rule back: \(y=x\).</div></div><em>Conclusion: for \(x\ge0\), \(f^{-1}(x)=x\) — restricting \(|x|\) to its positive branch turns it into a line, which is its own inverse. ✓</em>${gframe(["y = abs(x)"], { title: "y=|x| fails the horizontal line test: (−3,3) and (3,3) share the same y-value", labels: [{ x: -3, y: 3, t: "(−3, 3)", c: "#b91c1c" }, { x: 3, y: 3, t: "(3, 3)", c: "#b91c1c" }] })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Square root, \(y=\sqrt{x}\)</h3><p>Find the inverse of \(f(x)=\sqrt{x}\), and state its domain and range.</p><div class="solution"><div class="step"><strong>Step 1 (one-to-one?):</strong> \(f(x)=\sqrt{x}\) is increasing throughout its whole domain \(x\ge0\), so it passes the horizontal line test — no restriction is needed.</div><div class="step"><strong>Step 2 (switch and solve):</strong> Write \(y=\sqrt{x}\); switch: \(x=\sqrt{y}\); solve by squaring both sides: \(y=x^2\).</div><div class="step"><strong>Step 3 (domain/range swap):</strong> \(f\) has domain \(x\ge0\), range \(y\ge0\), so \(f^{-1}\) has domain \(x\ge0\), range \(y\ge0\) — matching \(y=x^2\) restricted to \(x\ge0\).</div></div><em>Conclusion: \(f^{-1}(x)=x^2\) for \(x\ge0\) — the exact reverse of Example 2. ✓</em>${gframe(["y = sqrt(x)", { kind: "cartesian", expr: "y = x^2", dMin: "0" }, "y = x"], { title: "y=√x (red) and its inverse y=x², x≥0 (green) — reflections across y=x (grey)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Reciprocal, \(y=\dfrac1x\)</h3><p>Find the inverse of \(f(x)=\dfrac1x\), and verify it with the point \((2,0.5)\).</p><div class="solution"><div class="step"><strong>Step 1 (one-to-one?):</strong> \(f(x)=\dfrac1x\) never repeats a \(y\)-value (positive \(x\) gives positive \(y\), negative \(x\) gives negative \(y\), and each branch is strictly decreasing), so no restriction is needed.</div><div class="step"><strong>Step 2 (switch and solve):</strong> Write \(y=\dfrac1x\); switch: \(x=\dfrac1y\); solve: \(y=\dfrac1x\) — the same equation.</div><div class="step"><strong>Step 3 (verify with a point):</strong> \((2,0.5)\) is on \(f\), since \(\dfrac12=0.5\). Swapping coordinates gives \((0.5,2)\), and indeed \(\dfrac1{0.5}=2\) ✓.</div></div><em>Conclusion: \(f^{-1}(x)=\dfrac1x\) — \(y=\dfrac1x\) is its own inverse, like \(y=x\) in Example 1. ✓</em>${gframe(["y = 1/x", "y = x"], { title: "y=1/x is symmetric about the line y=x — it is its own inverse" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1 (linear)</h3><p>Find the inverse of \(f(x)=2x+3\), and verify your answer at the point \((1,5)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Switch and solve: \(x=2y+3\Rightarrow y=\dfrac{x-3}{2}\), so \(f^{-1}(x)=\dfrac{x-3}{2}\). Check: \((1,5)\) on \(f\) becomes \((5,1)\) on \(f^{-1}\), and \(\dfrac{5-3}{2}=1\) ✓.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2 (quadratic)</h3><p>Explain why \(f(x)=x^2\) restricted to \(x\le0\) still needs restriction to have an inverse function, then find that inverse.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>On \(x\le0\), \(f\) is one-to-one (it's already restricted to one branch), so it does have an inverse function. Switching and solving \(y=x^2\) gives \(y=\pm\sqrt{x}\); since the original range is \(y\ge0\) mapping from \(x\le0\), the inverse is \(y=-\sqrt{x}\) (the negative root, matching the restricted domain).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3 (absolute value)</h3><p>Find two points on \(y=|x|\) that show it fails the horizontal line test.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Any pair like \((-4,4)\) and \((4,4)\): both give \(y=4\), so a horizontal line at \(y=4\) crosses the graph twice.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4 (square root)</h3><p>Find the inverse of \(f(x)=\sqrt{x-1}\), and state its domain.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Switch and solve: \(x=\sqrt{y-1}\Rightarrow x^2=y-1\Rightarrow y=x^2+1\), so \(f^{-1}(x)=x^2+1\) for \(x\ge0\) (the domain of \(f^{-1}\) is the range of \(f\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 (reciprocal)</h3><p>Find the inverse of \(f(x)=\dfrac{1}{x-2}\), and verify with the point \((3,1)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Switch and solve: \(x=\dfrac{1}{y-2}\Rightarrow y-2=\dfrac1x\Rightarrow y=\dfrac1x+2\), so \(f^{-1}(x)=\dfrac1x+2\). Check: \((3,1)\) on \(f\) becomes \((1,3)\) on \(f^{-1}\), and \(\dfrac11+2=3\) ✓.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Is the inverse the same as the reciprocal?</h3><p><em>No — \(f^{-1}(x)\ne\dfrac{1}{f(x)}\). The inverse undoes the function; the reciprocal divides \(1\) by it. They only coincide for \(f(x)=\dfrac1x\), which happens to be self-inverse.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you quickly check an inverse?</h3><p><em>Pick a point \((a,b)\) on \(f\) and confirm \((b,a)\) is on your answer for \(f^{-1}\) — or confirm \(f(f^{-1}(x))=x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: When is the inverse of a function also a function?</h3><p><em>When the original passes the horizontal line test (is one-to-one) — otherwise, restrict the domain to a piece that does.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What swaps between f and its inverse?</h3><p><em>The domain and range: domain of \(f^{-1}\) = range of \(f\), and range of \(f^{-1}\) = domain of \(f\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q5: Which parent functions are their own inverse?</h3><p><em>\(y=x\) and \(y=\dfrac1x\) — both are symmetric about the line \(y=x\) already, so reflecting them gives back the same graph.</em></p></div>
</div>`)]);

u1["1.4"] = L("1.4", "Transformations of Functions", [html(String.raw`<div class="lecture-box">
  <h1>🪄 Transformations of Functions</h1>
  <p><strong>Overview.</strong> Every transformed function can be written in the general form \(g(x)=a\,f\big(k(x-d)\big)+c\), where \(f(x)\) is a <strong>parent function</strong> (the basic, un-transformed graph) and \(a,k,d,c\) are numbers that stretch, reflect, and slide it. Once you know what each parameter does, you can transform <em>any</em> parent function the same way — a line, a parabola, an absolute value, a square root, or a reciprocal.</p>
  <h2>📌 The four parameters, one at a time</h2>
  <ul>
    <li><strong>\(a\)</strong> (multiplies the output): vertical stretch by \(|a|\); if \(a<0\), also a <strong>reflection in the \(x\)-axis</strong>.</li>
    <li><strong>\(k\)</strong> (multiplies the input): horizontal stretch by \(\tfrac{1}{|k|}\); if \(k<0\), also a <strong>reflection in the \(y\)-axis</strong>.</li>
    <li><strong>\(d\)</strong> (subtracted from the input): horizontal shift — right by \(d\) if \(d>0\), left if \(d<0\). It moves <em>opposite</em> to what the sign inside the brackets looks like, because \(x-d=0\) exactly when \(x=d\).</li>
    <li><strong>\(c\)</strong> (added at the end): vertical shift — up by \(c\) if \(c>0\), down if \(c<0\).</li>
  </ul>
  <p><strong>Mapping a point.</strong> If \((x,y)\) is a point on the parent graph \(y=f(x)\), the same point moves to \(\left(\dfrac{x}{k}+d,\ a\,y+c\right)\) on \(g(x)=a\,f\big(k(x-d)\big)+c\). Applying this rule to a few key points is the fastest way to sketch a transformed graph — stretch/reflect first (the \(a\) and \(k\)), then shift (\(d\) and \(c\)).</p>
  <h2>📚 The five parent functions</h2>
  <div style="overflow-x:auto;margin:10px 0;">
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <thead>
        <tr style="background:#eef2ff;color:#3730a3;">
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Parent function</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Shape</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Domain</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Range</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=x\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">straight line through the origin</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\in\mathbb{R}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\in\mathbb{R}\)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=x^2\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">parabola, vertex \((0,0)\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\in\mathbb{R}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\ge0\)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=|x|\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">V-shape, corner \((0,0)\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\in\mathbb{R}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\ge0\)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=\sqrt{x}\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">half a sideways parabola, starts at \((0,0)\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\ge0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\ge0\)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y=\dfrac1x\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">two branches, asymptotes on both axes</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(x\ne0\)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">\(y\ne0\)</td></tr>
      </tbody>
    </table>
  </div>
  ${gframe(["y = x^2", "y = -2*(x - 3)^2 + 1"], { title: "The general idea: f(x)=x² transformed to g(x) = -2(x-3)² + 1 — a stretch/reflection, then a shift" })}
  <h2>🔵 Examples — one per parent function</h2>
  <div class="example-box" ${EX}><h3>Example 1: Linear, \(y=x\)</h3><p>Describe \(g(x)=2(x-3)+1\) as a transformation of \(f(x)=x\), then simplify it.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Match to \(a\,f(k(x-d))+c\): \(a=2,\ k=1,\ d=3,\ c=1\).</div><div class="step"><strong>Step 2:</strong> \(a=2\): vertical stretch by \(2\) (steeper line). \(d=3,\ c=1\): shift right \(3\), up \(1\).</div><div class="step"><strong>Step 3 (map a point):</strong> \((0,0)\) on \(y=x\) moves to \(\left(\tfrac01+3,\ 2(0)+1\right)=(3,1)\).</div><em>Conclusion: \(g(x)=2x-5\), a steeper line through \((3,1)\). ✓</em></div>${gframe(["y = x", "y = 2*(x - 3) + 1"], { title: "y=x stretched by 2, then shifted right 3 and up 1 — passes through (3,1)" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Quadratic, \(y=x^2\)</h3><p>Describe \(g(x)=-2(x-3)^2+1\) from \(f(x)=x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=-2,\ k=1,\ d=3,\ c=1\).</div><div class="step"><strong>Step 2:</strong> \(a=-2\): stretch by \(2\) and reflect (opens down). Shift right \(3\), up \(1\).</div><div class="step"><strong>Step 3 (map the vertex):</strong> \((0,0)\to(0+3,\ -2(0)+1)=(3,1)\).</div><em>Conclusion: vertex \((3,1)\), opens down. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Absolute value, \(y=|x|\)</h3><p>Describe \(g(x)=3|x+2|-4\) from \(f(x)=|x|\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Write \(x+2\) as \(x-(-2)\): \(a=3,\ k=1,\ d=-2,\ c=-4\).</div><div class="step"><strong>Step 2:</strong> \(a=3\): stretch by \(3\) (narrower V). \(d=-2\): shift left \(2\). \(c=-4\): shift down \(4\).</div><div class="step"><strong>Step 3 (map the corner):</strong> \((0,0)\to(0-2,\ 3(0)-4)=(-2,-4)\).</div><em>Conclusion: corner at \((-2,-4)\), narrower than \(y=|x|\). ✓</em></div>${gframe(["y = abs(x)", "y = 3*abs(x+2) - 4"], { title: "y=|x| stretched by 3, shifted left 2 and down 4 — corner at (-2,-4)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Square root, \(y=\sqrt{x}\)</h3><p>Describe \(g(x)=2\sqrt{x+1}-3\) from \(f(x)=\sqrt{x}\), and state its domain.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Write \(x+1\) as \(x-(-1)\): \(a=2,\ k=1,\ d=-1,\ c=-3\).</div><div class="step"><strong>Step 2:</strong> \(a=2\): stretch by \(2\). Shift left \(1\), down \(3\).</div><div class="step"><strong>Step 3 (map the start point):</strong> \((0,0)\to(0-1,\ 2(0)-3)=(-1,-3)\).</div><div class="step"><strong>Step 4 (domain):</strong> The parent needs \(x\ge0\); after the shift, the new starting point is \(x=-1\), so the domain is \(x\ge-1\).</div><em>Conclusion: starts at \((-1,-3)\), domain \(x\ge-1\). ✓</em></div>${gframe(["y = sqrt(x)", "y = 2*sqrt(x+1) - 3"], { title: "y=√x stretched by 2, shifted left 1 and down 3 — now starts at (-1,-3)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Reciprocal, \(y=\dfrac1x\)</h3><p>Describe \(g(x)=\dfrac{1}{x-2}+3\) from \(f(x)=\dfrac1x\), and state its asymptotes.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=1,\ k=1,\ d=2,\ c=3\).</div><div class="step"><strong>Step 2:</strong> The parent's asymptotes are \(x=0\) and \(y=0\). Shifting right \(2\) and up \(3\) moves them the same way.</div><em>Conclusion: vertical asymptote \(x=2\), horizontal asymptote \(y=3\). ✓</em></div>${gframe(["y = 1/x", "y = 1/(x - 2) + 3"], { title: "y=1/x shifted right 2 and up 3 — asymptotes move from x=0, y=0 to x=2, y=3" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1 (linear)</h3><p>Describe \(y=-(x-4)\) as a transformation of \(y=x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Reflection in the \(x\)-axis, shift right \(4\) (it's the line \(y=-x+4\)).</em></div></div>${gframe(["y = x", "y = -(x - 4)"], { title: "y=x reflected in the x-axis and shifted right 4 — the line y=-x+4" })}</details></div>
  <div class="practice-box" ${PR}><h3>Question 2 (quadratic)</h3><p>Describe \(y=(x-2)^2+3\) as a transformation of \(y=x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Right \(2\), up \(3\); vertex \((2,3)\).</em></div></div>${gframe(["y = x^2", "y = (x - 2)^2 + 3"], { title: "y=x² shifted right 2 and up 3 — vertex at (2,3)" })}</details></div>
  <div class="practice-box" ${PR}><h3>Question 3 (absolute value)</h3><p>Describe \(y=|x+5|-1\) as a transformation of \(y=|x|\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Left \(5\), down \(1\); corner \((-5,-1)\).</em></div></div>${gframe(["y = abs(x)", "y = abs(x + 5) - 1"], { title: "y=|x| shifted left 5 and down 1 — corner at (-5,-1)" })}</details></div>
  <div class="practice-box" ${PR}><h3>Question 4 (square root)</h3><p>Describe \(y=\sqrt{x-6}+2\) as a transformation of \(y=\sqrt{x}\), and state its domain.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Right \(6\), up \(2\); domain \(x\ge6\).</em></div></div>${gframe(["y = sqrt(x)", "y = sqrt(x - 6) + 2"], { title: "y=√x shifted right 6 and up 2 — now starts at (6,2)" })}</details></div>
  <div class="practice-box" ${PR}><h3>Question 5 (reciprocal)</h3><p>State the asymptotes of \(y=\dfrac{1}{x+3}-5\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Vertical asymptote \(x=-3\); horizontal asymptote \(y=-5\).</em></div></div>${gframe(["y = 1/x", "y = 1/(x + 3) - 5"], { title: "y=1/x shifted left 3 and down 5 — asymptotes move to x=-3, y=-5" })}</details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What do a, k, d and c each do?</h3><p><em>\(a\) stretches vertically (and reflects in the \(x\)-axis if negative); \(k\) stretches horizontally (and reflects in the \(y\)-axis if negative); \(d\) shifts horizontally; \(c\) shifts vertically.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why is the horizontal shift "opposite" to the sign inside the brackets?</h3><p><em>\((x-d)\) equals zero exactly when \(x=d\), so a "\(-3\)" inside means the graph's key point is now at \(x=3\) — a shift right, even though the sign looks negative.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What order should I apply the transformations in?</h3><p><em>Stretches and reflections (\(a\) and \(k\)) first, then shifts (\(d\) and \(c\)) — the same order the point-mapping rule uses.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Does this general form work for every parent function?</h3><p><em>Yes — \(g(x)=a\,f(k(x-d))+c\) transforms any \(f(x)\) the same way, whether \(f\) is a line, a parabola, an absolute value, a square root, or a reciprocal.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q5: How does a transformation change the domain and range?</h3><p><em>A horizontal shift \(d\) shifts the domain by \(d\); a vertical shift \(c\) shifts the range by \(c\). This matters most for \(y=\sqrt{x}\) (domain) and \(y=\tfrac1x\) (asymptotes).</em></p></div>
</div>`)]);

u1["1.5"] = L("1.5", "Quadratic Functions: Zeros, Max & Min", [html(String.raw`<div class="lecture-box">
  <h1>⛰️ Quadratic Functions: Zeros, Max &amp; Min</h1>
  <p><strong>Overview.</strong> A quadratic \(f(x)=ax^2+bx+c\) graphs as a parabola. Its <strong>vertex</strong> is the max (if \(a<0\)) or min (if \(a>0\)); its <strong>zeros</strong> are where it crosses the \(x\)-axis.</p>
  <h2>📌 Completing the square → vertex form</h2>
  <p>Rewriting as \(a(x-h)^2+k\) shows the vertex \((h,k)\) directly.</p>
  ${gframe(["y = x^2 - 6*x + 5"], { title: "Vertex (3, -4); zeros at 1 and 5", labels: [{ x: 3, y: -4, t: "(3,-4)", c: "#1b7a44" }] })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Complete the square</h3><p>For \(f(x)=x^2-6x+5\), find the vertex form.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-3)^2-9+5\).</div><em>Conclusion: \((x-3)^2-4\); vertex \((3,-4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Minimum value</h3><p>Minimum of \(f(x)=x^2-6x+5\)?</p><div class="solution"><em>Conclusion: \(-4\) (the vertex \(y\)). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Zeros</h3><p>Zeros of \(f(x)=x^2-6x+5\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-3)^2=4\Rightarrow x-3=\pm2\).</div><em>Conclusion: \(x=1,5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Another vertex</h3><p>Vertex of \(f(x)=x^2+4x+1\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x+2)^2-3\).</div><em>Conclusion: \((-2,-3)\). ✓</em></div>${gframe(["y = x^2 + 4*x + 1"], { title: "x²+4x+1 = (x+2)²−3: the vertex (lowest point) is (−2,−3)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Axis of symmetry</h3><p>Axis of symmetry of \(f(x)=x^2-6x+5\)?</p><div class="solution"><em>Conclusion: \(x=3\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Vertex of \(y=(x-5)^2+2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((5,2)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Complete the square: \(x^2+8x+10\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x+4)^2-6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Minimum of \(y=x^2-2x+5\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x-1)^2+4\): min \(4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Does \(y=-x^2+4\) have a max or min?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Maximum (opens down), value 4.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Zeros of \(y=x^2-9\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=\pm3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Where is the axis of symmetry?</h3><p><em>\(x=h\), the vertical line through the vertex.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Common completing-the-square slip?</h3><p><em>Subtract back the square you added: \(x^2-6x=(x-3)^2-9\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Max or min?</h3><p><em>\(a>0\) min; \(a<0\) max.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How many zeros can a parabola have?</h3><p><em>Zero, one, or two.</em></p></div>
</div>`)]);

u1["1.6"] = L("1.6", "Solving Quadratics & Linear–Quadratic Systems", [html(String.raw`<div class="lecture-box">
  <h1>✖️ Solving Quadratics &amp; Linear–Quadratic Systems</h1>
  <p><strong>Overview.</strong> Solve quadratics by factoring or the quadratic formula, then find where a line meets a parabola.</p>
  <h2>📌 The quadratic formula</h2>
  <p>For \(ax^2+bx+c=0\): \(\;x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\). The discriminant \(b^2-4ac\) tells how many real solutions.</p>
  ${gframe(["y = x^2 - 2", "y = x"], { title: "Line meets parabola at (2, 2) and (-1, -1)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Factor</h3><p>Solve \(x^2-5x+6=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-2)(x-3)=0\).</div><em>Conclusion: \(x=2,3\). ✓</em></div>${gframe(["y = x^2 - 5*x + 6"], { title: "x²−5x+6=0: the parabola crosses the x-axis at the roots x=2 and 3" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Linear–quadratic system</h3><p>Where do \(y=x^2-2\) and \(y=x\) meet?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2-2=x\Rightarrow x^2-x-2=0\).</div><div class="step"><strong>Step 2:</strong> \((x-2)(x+1)=0\).</div><em>Conclusion: \((2,2)\) and \((-1,-1)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Factor</h3><p>Solve \(x^2+2x-8=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x+4)(x-2)=0\).</div><em>Conclusion: \(x=-4,2\). ✓</em></div>${gframe(["y = x^2 + 2*x - 8"], { title: "x²+2x−8=0: roots where the parabola meets the axis, x=−4 and 2" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Quadratic formula</h3><p>Solve \(x^2-4x+1=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=\dfrac{4\pm\sqrt{16-4}}{2}=\dfrac{4\pm2\sqrt3}{2}\).</div><em>Conclusion: \(x=2\pm\sqrt3\). ✓</em></div>${gframe(["y = x^2 - 4*x + 1"], { title: "x²−4x+1=0: two irrational roots x=2±√3 ≈ 0.27 and 3.73" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Discriminant</h3><p>How many real solutions does \(x^2+x+1=0\) have?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(b^2-4ac=1-4=-3<0\).</div><em>Conclusion: no real solutions. ✓</em></div>${gframe(["y = x^2 + x + 1"], { title: "x²+x+1 sits entirely above the x-axis — it never crosses, so there are no real solutions" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(x^2-7x+10=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=2,5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(x^2-x-6=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=3,-2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Where do \(y=x^2\) and \(y=x+2\) meet?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(x^2-x-2=0\). <em>\((2,4)\) and \((-1,1)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(x^2-2x-1=0\) (quadratic formula).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=1\pm\sqrt2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>How many real solutions does \(x^2-6x+9=0\) have?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(b^2-4ac=0\). <em>One (a double root, \(x=3\)).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Factoring or the formula?</h3><p><em>Try factoring first; use the formula when it won't factor nicely.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does the discriminant tell me?</h3><p><em>\(>0\): two roots; \(=0\): one; \(<0\): none (real).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I solve a linear–quadratic system?</h3><p><em>Set the expressions equal and solve the resulting quadratic.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Formula slip to avoid?</h3><p><em>The whole \(-b\) is over \(2a\); compute \(b^2-4ac\) carefully with signs.</em></p></div>
</div>`)]);
