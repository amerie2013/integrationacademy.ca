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
  <p><strong>Overview.</strong> The <strong>domain</strong> is all allowed inputs \(x\); the <strong>range</strong> is all resulting outputs \(y\).</p>
  <h2>📌 Watch for restrictions</h2>
  <ul>
    <li>Denominators cannot be zero.</li>
    <li>Square roots need a non-negative radicand.</li>
    <li>Context can limit values (time \(\ge0\), etc.).</li>
  </ul>
  ${gframe(["y = sqrt(x - 2)"], { title: "y = √(x − 2): domain x ≥ 2, range y ≥ 0" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Square-root domain</h3><p>Domain of \(f(x)=\sqrt{x-2}\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Need \(x-2\ge0\).</div><em>Conclusion: \(x\ge2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Square-root range</h3><p>Range of \(f(x)=\sqrt{x-2}\)?</p><div class="solution"><em>Conclusion: \(y\ge0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Quadratic range</h3><p>Range of \(f(x)=x^2+1\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Vertex \((0,1)\), opens up.</div><em>Conclusion: \(y\ge1\). ✓</em></div>${gframe(["y = x^2 + 1"], { title: "x²+1: the lowest point is (0,1), so the range is y≥1" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Rational domain</h3><p>Domain of \(g(x)=\dfrac{1}{x-3}\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Denominator \(\ne0\).</div><em>Conclusion: \(x\ne3\). ✓</em></div>${gframe(["y = 1/(x-3)"], { title: "1/(x−3): undefined at x=3 (vertical asymptote), so the domain is x≠3" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Quadratic domain</h3><p>Domain of \(f(x)=x^2-5\)?</p><div class="solution"><em>Conclusion: all real numbers. ✓</em></div>${gframe(["y = x^2 - 5"], { title: "x²−5: defined for every x — the domain is all real numbers" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Domain of \(\sqrt{x+5}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x\ge-5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Domain of \(\dfrac{1}{x+2}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x\ne-2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Range of \(y=x^2-3\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y\ge-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Range of \(y=-x^2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y\le0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Domain of \(\sqrt{2x-6}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x\ge3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I write domain/range?</h3><p><em>Set-builder \(\{x\in\mathbb{R}\mid x\ge2\}\) or interval \([2,\infty)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Most common slip?</h3><p><em>Forgetting \(\sqrt{\;}\) needs the inside \(\ge0\), or a denominator \(\ne0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Domain of a plain polynomial?</h3><p><em>All real numbers.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do I get the range of a parabola?</h3><p><em>Find the vertex; it is the min (opens up) or max (opens down).</em></p></div>
</div>`)]);

u1["1.3"] = L("1.3", "Inverse Functions", [html(String.raw`<div class="lecture-box">
  <h1>🔄 Inverse Functions</h1>
  <p><strong>Overview.</strong> The inverse \(f^{-1}\) undoes \(f\) — it reverses the operations, in the opposite order.</p>
  <h2>📌 Finding an inverse</h2>
  <ol><li>Write \(y=f(x)\).</li><li>Swap \(x\) and \(y\).</li><li>Solve for \(y\).</li></ol>
  <p>The graph of \(f^{-1}\) is the reflection of \(f\) in the line \(y=x\); domain and range swap.</p>
  ${gframe(["y = 2*x + 3", "y = (x - 3)/2", "y = x"], { title: "A function and its inverse reflect over y = x" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Linear inverse</h3><p>Find the inverse of \(f(x)=2x+3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=2y+3\) (swap).</div><div class="step"><strong>Step 2:</strong> \(y=\dfrac{x-3}{2}\).</div><em>Conclusion: \(f^{-1}(x)=\dfrac{x-3}{2}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Linear inverse</h3><p>Find the inverse of \(f(x)=3x-6\).</p><div class="solution"><em>Conclusion: \(f^{-1}(x)=\dfrac{x+6}{3}\). ✓</em></div>${gframe(["y = 3*x - 6", "y = (x+6)/3", "y = x"], { title: "f(x)=3x−6 and its inverse (x+6)/3 are mirror images across the line y=x" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: When it isn't a function</h3><p>Is the inverse of \(f(x)=x^2\) a function?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(y=\pm\sqrt{x}\) fails the vertical-line test.</div><em>Conclusion: no, unless we restrict the domain (e.g. \(x\ge0\)). ✓</em></div>${gframe(["y = x^2", "y = sqrt(x)", "y = x"], { title: "reflecting y=x² across y=x gives a sideways parabola — only the y=√x half is a function" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Check by composition</h3><p>Verify \(f^{-1}\) for \(f(x)=2x+3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f(f^{-1}(x))=2\cdot\dfrac{x-3}{2}+3\).</div><em>Conclusion: \(=x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Domain/range swap</h3><p>If \(f\) has domain \(x\ge0\), range \(y\ge1\), what is the domain of \(f^{-1}\)?</p><div class="solution"><em>Conclusion: \(x\ge1\) (they swap). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the inverse of \(f(x)=4x-8\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{x+8}{4}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the inverse of \(f(x)=\dfrac{x}{2}+1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2(x-1)=2x-2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Is the inverse of \(f(x)=x^2\) (all reals) a function?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>No.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>The graph of an inverse is a reflection in which line?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find the inverse of \(f(x)=5x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{x}{5}\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Is the inverse the reciprocal?</h3><p><em>No — \(f^{-1}(x)\ne\dfrac{1}{f(x)}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Quick check?</h3><p><em>\(f(f^{-1}(x))=x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: When is the inverse a function?</h3><p><em>When the original passes the horizontal-line test (one-to-one).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What swaps?</h3><p><em>Domain and range swap between \(f\) and \(f^{-1}\).</em></p></div>
</div>`)]);

u1["1.4"] = L("1.4", "Transformations of Functions", [html(String.raw`<div class="lecture-box">
  <h1>🪄 Transformations of Functions</h1>
  <p><strong>Overview.</strong> Every transformed function has the form \(g(x)=a\,f\big(k(x-d)\big)+c\); each parameter moves or reshapes the parent.</p>
  <h2>📌 The four parameters</h2>
  <ul>
    <li>\(a\): vertical stretch by \(|a|\) (reflect if \(a<0\)).</li>
    <li>\(k\): horizontal stretch by \(\tfrac{1}{|k|}\) (reflect if \(k<0\)).</li>
    <li>\(d\): horizontal shift right by \(d\) (opposite sign inside). \(c\): vertical shift up by \(c\).</li>
  </ul>
  ${gframe(["y = x^2", "y = -2*(x - 3)^2 + 1"], { title: "f(x)=x^2 transformed to g(x) = -2(x-3)^2 + 1" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Full description</h3><p>Describe \(g(x)=-2(x-3)^2+1\) from \(f(x)=x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=-2\): stretch by 2, reflect.</div><div class="step"><strong>Step 2:</strong> right 3, up 1; vertex \((3,1)\).</div><em>Conclusion: described. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Radical</h3><p>Describe \(y=\sqrt{x+4}-2\).</p><div class="solution"><em>Conclusion: left 4, down 2. ✓</em></div>${gframe(["y = sqrt(x+4) - 2"], { title: "√(x+4)−2: the root graph shifted left 4 and down 2" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Reflection</h3><p>Describe \(y=-x^2\).</p><div class="solution"><em>Conclusion: reflection in the \(x\)-axis. ✓</em></div>${gframe(["y = x^2", "y = -x^2"], { title: "−x²: y=x² flipped over the x-axis (now opens downward)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Stretch</h3><p>Describe \(y=3x^2\).</p><div class="solution"><em>Conclusion: vertical stretch by 3. ✓</em></div>${gframe(["y = x^2", "y = 3*x^2"], { title: "3x²: y=x² stretched vertically by 3 — three times as tall, so it looks narrower" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Vertex from form</h3><p>State the vertex of \(y=(x+1)^2-5\).</p><div class="solution"><em>Conclusion: \((-1,-5)\). ✓</em></div>${gframe(["y = (x+1)^2 - 5"], { title: "(x+1)²−5: vertex form — the lowest point is the vertex (−1,−5)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Describe \(y=(x-2)^2+3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Right 2, up 3.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Describe \(y=\sqrt{x}-4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Down 4.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>State the vertex of \(y=-(x-4)^2+2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((4,2)\), opens down.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>What does \(a=-1\) do?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Reflects in the \(x\)-axis.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Describe \(y=2(x+1)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Stretch by 2, left 1.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why is the horizontal shift "opposite"?</h3><p><em>\((x-3)\) shifts right 3 — it asks where the inside equals zero.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Order of transformations?</h3><p><em>Stretches/reflections first, then translations.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I read the vertex from \(a(x-h)^2+k\)?</h3><p><em>Vertex is \((h,k)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Does \(a\) change the vertex?</h3><p><em>No — it changes width/direction, not the vertex.</em></p></div>
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
