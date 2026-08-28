// IB Math AA SL — Unit 2: Functions. Original content and examples.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u2 = {};

u2["2.1"] = L("2.1", "Function Basics: Domain, Range & Notation", [
  html(String.raw`<div class="lecture-box">
  <h1>🔤 Function Basics: Domain, Range &amp; Notation</h1>
  <p><strong>Overview.</strong> A <strong>function</strong> is a rule that assigns exactly <em>one</em> output to every input. This lesson covers function notation, how to test whether a relation qualifies as a function, and how to find a function's <strong>domain</strong> (allowed inputs) and <strong>range</strong> (resulting outputs).</p>
  <h2>📌 Function Notation</h2>
  <p>\(f(x)\) means "the output of function \(f\) when the input is \(x\)". To evaluate \(f(3)\), substitute \(3\) everywhere \(x\) appears in the rule.</p>
  <h2>📌 The Vertical Line Test</h2>
  <p>A graph represents a function exactly when <strong>no vertical line</strong> crosses it more than once — otherwise, one input would have two different outputs, which breaks the definition.</p>
  <h2>📌 Domain &amp; Range</h2>
  <p>The <strong>domain</strong> is every \(x\)-value the function is allowed to use. Watch for two restrictions: you can't divide by \(0\), and you can't take the square root of a negative number. The <strong>range</strong> is every value the output actually reaches.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Given \(f(x) = 2x^2-5x+1\), find \(f(3)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Substitute \(x=3\): \(2(3)^2-5(3)+1\).</div>
      <div class="step"><strong>Step 2:</strong> \(2(9)-15+1 = 18-15+1\).</div>
      <em>Conclusion: \(f(3)=4\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Find the domain of \(f(x) = \sqrt{x-4}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> A square root needs a non-negative argument: \(x-4 \geq 0\).</div>
      <div class="step"><strong>Step 2:</strong> Solve: \(x \geq 4\).</div>
      <em>Conclusion: domain is \(x \geq 4\), or \([4,\infty)\). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = sqrt(x-4)"], { title: "y = √(x−4): the graph only exists from x = 4 onward", xMin: -1, xMax: 12, yMin: -1, yMax: 6 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Find the domain of \(f(x) = \dfrac{3}{x-2}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The denominator can never equal \(0\): \(x-2 \neq 0\).</div>
      <div class="step"><strong>Step 2:</strong> So \(x \neq 2\).</div>
      <em>Conclusion: domain is all real \(x\) except \(2\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Explain, using the vertical line test, why \(x^2+y^2=9\) (a circle of radius 3) is <em>not</em> a function of \(x\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Solve for \(y\): \(y = \pm\sqrt{9-x^2}\) — two values for most \(x\).</div>
      <div class="step"><strong>Step 2:</strong> A vertical line through, say, \(x=0\) crosses the circle at both \(y=3\) and \(y=-3\).</div>
      <em>Conclusion: one input gives two outputs, so the circle fails the vertical line test — it is not a function. ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = sqrt(9-x*x)", "y = -sqrt(9-x*x)"], { title: "the top and bottom halves of a circle — two y-values for one x", xMin: -4, xMax: 4, yMin: -4, yMax: 4 })}</div>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Range from a graph</h3><p>Find the range of \(f(x) = \sqrt{x-1}+2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The domain is \(x \geq 1\), so the smallest input gives the smallest output: at \(x=1\), \(f(1)=\sqrt0+2=2\).</div>
      <div class="step"><strong>Step 2:</strong> As \(x\) increases without bound, \(\sqrt{x-1}\) grows without bound, so \(f(x)\) grows without bound too.</div>
      <em>Conclusion: range is \(f(x) \geq 2\), or \([2,\infty)\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Given \(f(x)=3x^2+x-2\), find \(f(-2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(f(-2)=12-2-2=8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the domain of \(f(x)=\sqrt{2x+6}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x \geq -3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the domain of \(f(x)=\dfrac{5}{x+7}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: all real \(x\) except \(x=-7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Does the graph of \(y=x^3\) pass the vertical line test? Justify.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: yes — every \(x\) gives exactly one \(y\), so it is a function.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Find the range of \(f(x)=-\sqrt{x+3}+1\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Domain is $x\ge-3$; at $x=-3$, $f=1$; the square root grows, so $-\sqrt{\phantom x}$ falls without bound. <em>Answer: \(f(x)\le1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What defines a function?</h3><p><em>Every input produces exactly one output.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What two things restrict a domain?</h3><p><em>Division by zero, and square roots of negative numbers.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I find a range?</h3><p><em>Think about the smallest and largest values the output can actually take, often by considering the domain's endpoints and the function's behaviour.</em></p></div>
</div>`),
]);

u2["2.2"] = L("2.2", "Transformations of Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🔄 Transformations of Functions</h1>
  <p><strong>Overview.</strong> Every new graph you meet is often just a familiar <strong>parent function</strong> — shifted, stretched, or reflected. Once you can read a transformation from an equation, you can sketch almost anything without plotting a single point.</p>
  <h2>📌 Translations</h2>
  <p style="text-align:center;">\( y = f(x) + k \) shifts <strong>up/down</strong> by \(k\) \(\qquad\) \( y = f(x+k) \) shifts <strong>left/right</strong> by \(k\) (opposite to the sign)</p>
  <h2>📌 Stretches</h2>
  <p style="text-align:center;">\( y = a\,f(x) \) stretches <strong>vertically</strong> by factor \(a\) \(\qquad\) \( y = f(bx) \) stretches <strong>horizontally</strong> by factor \(\tfrac1b\)</p>
  <h2>📌 Reflections</h2>
  <p>\( y=-f(x) \) reflects in the \(x\)-axis; \( y=f(-x) \) reflects in the \(y\)-axis. A negative \(a\) or \(b\) above combines a stretch with a reflection.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Describe the transformation from \(y=x^2\) to \(y=(x-3)^2+2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The \((x-3)\) shifts the graph <strong>right</strong> \(3\) units.</div>
      <div class="step"><strong>Step 2:</strong> The \(+2\) shifts it <strong>up</strong> \(2\) units.</div>
      <em>Conclusion: \(y=x^2\) translated right 3, up 2 — new vertex \((3,2)\). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = x*x", "y = (x-3)*(x-3)+2"], { title: "y = x² (blue) shifted to y = (x−3)² + 2 (pink)", xMin: -4, xMax: 7, yMin: -2, yMax: 10 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Given \(f(x)=x^2\), describe and sketch \(y=-2f(x)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The factor of \(2\) stretches the graph vertically, making it narrower.</div>
      <div class="step"><strong>Step 2:</strong> The negative sign reflects it in the \(x\)-axis, so it opens downward.</div>
      <em>Conclusion: \(y=-2x^2\) is \(y=x^2\) stretched vertically by 2 and reflected in the x-axis. ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = x*x", "y = -2*x*x"], { title: "y = x² (blue) vs y = −2x² (pink)", xMin: -4, xMax: 4, yMin: -8, yMax: 8 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Describe the transformations from \(y=\sqrt{x}\) to \(y=\sqrt{x+4}-1\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The \(+4\) inside the root shifts <strong>left</strong> \(4\) units.</div>
      <div class="step"><strong>Step 2:</strong> The \(-1\) outside shifts <strong>down</strong> \(1\) unit.</div>
      <em>Conclusion: \(y=\sqrt x\) shifted left 4, down 1. ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = sqrt(x)", "y = sqrt(x+4)-1"], { title: "y = √x (blue) shifted to y = √(x+4) − 1 (pink)", xMin: -5, xMax: 8, yMin: -2, yMax: 5 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Given \(f(x)=x^2\), sketch \(y=f(2x)\) and describe the transformation.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Replacing \(x\) with \(2x\) compresses the graph horizontally by a factor of \(\tfrac12\).</div>
      <div class="step"><strong>Step 2:</strong> \(y=(2x)^2=4x^2\) — every point moves twice as close to the \(y\)-axis.</div>
      <em>Conclusion: \(y=x^2\) compressed horizontally by \(\tfrac12\) (equivalently, stretched vertically by 4). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = x*x", "y = 4*x*x"], { title: "y = x² (blue) vs y = (2x)² = 4x² (pink)", xMin: -3, xMax: 3, yMin: -1, yMax: 9 })}</div>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Modelling a shifted temperature</h3><p>A city's average daily temperature is modelled by \(T(d) = f(d)\), peaking in summer. A neighbouring city's temperature is consistently \(3°\text{C}\) cooler at every point in the year, and its seasons arrive \(10\) days later. Write its model in terms of \(f\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> "\(3°C\) cooler at every point" is a vertical shift down: subtract \(3\).</div>
      <div class="step"><strong>Step 2:</strong> "Arrives 10 days later" means the same temperatures happen at a later day — a shift <strong>right</strong> by \(10\).</div>
      <em>Conclusion: the second city's model is \(T_2(d) = f(d-10)-3\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Describe the transformation from \(y=x^2\) to \(y=(x+2)^2-5\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: shifted left 2, down 5.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Describe \(y=3x^2\) as a transformation of \(y=x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: vertical stretch by factor 3.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Describe \(y=\sqrt{-x}\) as a transformation of \(y=\sqrt{x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: reflection in the y-axis.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Describe \(y=-x^2+4\) as two transformations of \(y=x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: reflected in the x-axis, then shifted up 4.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A graph \(y=f(x)\) has a maximum point at \((2,5)\). State the coordinates of the maximum point on \(y=-f(x-1)+3\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Shift right 1, reflect (max becomes min in y), shift up 3: y-value $-5+3=-2$. <em>Answer: \((3,-2)\), now a minimum point.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why does \(f(x+k)\) shift left, not right?</h3><p><em>Because it takes a smaller \(x\) to produce the same output the original function gave at a larger \(x\) — the whole graph moves left to compensate.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the order when there are several transformations?</h3><p><em>Apply stretches/reflections before translations, matching the order operations would be applied to a specific input.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How can I check a transformation is right?</h3><p><em>Track one known point (like a vertex or intercept) through each transformation step by step.</em></p></div>
</div>`),
]);

u2["2.3"] = L("2.3", "Composite & Inverse Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🔗 Composite &amp; Inverse Functions</h1>
  <p><strong>Overview.</strong> A <strong>composite function</strong> chains two functions together, feeding the output of one into the other. An <strong>inverse function</strong> undoes a function completely, swapping its inputs and outputs.</p>
  <h2>📌 Composite Functions</h2>
  <p style="text-align:center;">\( (f\circ g)(x) = f(g(x)) \)</p>
  <p>Work from the <strong>inside out</strong>: evaluate \(g(x)\) first, then feed that result into \(f\).</p>
  <h2>📌 Finding an Inverse</h2>
  <p><strong>1.</strong> Write \(y=f(x)\). <strong>2.</strong> Swap \(x\) and \(y\). <strong>3.</strong> Solve for \(y\) — this is \(f^{-1}(x)\).</p>
  <p>Graphically, \(f\) and \(f^{-1}\) are reflections of each other in the line \(y=x\). A function only has an inverse (that is itself a function) if it passes the <strong>horizontal</strong> line test.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Given \(f(x)=2x+3\) and \(g(x)=x^2-1\), find \(f(g(2))\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Find \(g(2)\) first: \(g(2)=4-1=3\).</div>
      <div class="step"><strong>Step 2:</strong> Now find \(f(3)=2(3)+3\).</div>
      <em>Conclusion: \(f(g(2))=9\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Given \(f(x)=2x+3\) and \(g(x)=x^2-1\), find an expression for \((f\circ g)(x)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Replace \(x\) in \(f\) with the whole expression \(g(x)\): \(f(g(x)) = 2\big(x^2-1\big)+3\).</div>
      <div class="step"><strong>Step 2:</strong> Simplify: \(2x^2-2+3\).</div>
      <em>Conclusion: \((f\circ g)(x) = 2x^2+1\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Find the inverse of \(f(x)=3x-4\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Write \(y=3x-4\), then swap: \(x=3y-4\).</div>
      <div class="step"><strong>Step 2:</strong> Solve for \(y\): \(x+4=3y \Rightarrow y=\dfrac{x+4}{3}\).</div>
      <em>Conclusion: \(f^{-1}(x)=\dfrac{x+4}{3}\). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = 3*x-4", "y = (x+4)/3", "y = x"], { title: "f(x) = 3x−4 and its inverse — mirror images across y = x", xMin: -6, xMax: 6, yMin: -8, yMax: 8 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Find the inverse of \(f(x)=x^2+1\), restricted to \(x\geq0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Write \(y=x^2+1\), then swap: \(x=y^2+1\).</div>
      <div class="step"><strong>Step 2:</strong> Solve for \(y\): \(y^2=x-1 \Rightarrow y=\pm\sqrt{x-1}\).</div>
      <div class="step"><strong>Step 3:</strong> Since the original domain was \(x\geq0\), keep only the positive root.</div>
      <em>Conclusion: \(f^{-1}(x)=\sqrt{x-1}\). ✓ (the restriction was needed — without it, \(f\) would fail the horizontal line test)</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Verifying an inverse</h3><p>Show that \(f(x)=\dfrac{x-5}{2}\) and \(g(x)=2x+5\) are inverses of each other.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Check \(f(g(x))\): \(f(2x+5)=\dfrac{(2x+5)-5}{2}=\dfrac{2x}{2}\).</div>
      <div class="step"><strong>Step 2:</strong> This gives \(x\), confirming one direction.</div>
      <div class="step"><strong>Step 3:</strong> Check \(g(f(x))\): \(g\!\left(\dfrac{x-5}{2}\right)=2\!\left(\dfrac{x-5}{2}\right)+5 = (x-5)+5\).</div>
      <em>Conclusion: both compositions give back \(x\), so \(f\) and \(g\) are true inverses. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Given \(f(x)=x+5\), \(g(x)=3x\), find \(g(f(1))\).</p><details><summary>View answer</summary><div class="solution"><div class="step">$f(1)=6$. <em>Answer: \(g(6)=18\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Given \(f(x)=x+5\), \(g(x)=3x\), find \((f\circ g)(x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(f(3x)=3x+5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the inverse of \(f(x)=\dfrac{x}{2}+7\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(f^{-1}(x)=2(x-7)=2x-14\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the inverse of \(f(x)=x^3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(f^{-1}(x)=\sqrt[3]{x}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Given \(f(x)=2x-1\), find \(f^{-1}(f(5))\) without finding \(f^{-1}\)'s formula first, and explain why your shortcut works.</p><details><summary>View answer</summary><div class="solution"><div class="step">$f$ and $f^{-1}$ undo each other. <em>Answer: \(f^{-1}(f(5))=5\), since applying a function then its inverse always returns the original input.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: In what order do I evaluate \(f(g(x))\)?</h3><p><em>Inside out — \(g\) first, then \(f\) on that result.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I find an inverse algebraically?</h3><p><em>Swap \(x\) and \(y\) in \(y=f(x)\), then solve for \(y\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why do some functions need a restricted domain to have an inverse?</h3><p><em>Otherwise the "inverse" would assign two outputs to one input, failing to be a function itself.</em></p></div>
</div>`),
]);

u2["2.4"] = L("2.4", "Linear & Quadratic Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Linear &amp; Quadratic Functions</h1>
  <p><strong>Overview.</strong> Linear and quadratic functions are the two building blocks behind most modelling problems. This lesson reviews building a line's equation, then focuses on the <strong>vertex form</strong> of a quadratic — the form that reveals its turning point at a glance.</p>
  <h2>📌 Linear Functions</h2>
  <p style="text-align:center;">\( y = mx+b, \qquad m = \dfrac{y_2-y_1}{x_2-x_1} \)</p>
  <h2>📌 Vertex Form of a Quadratic</h2>
  <p style="text-align:center;">\( y = a(x-h)^2+k \)</p>
  <p>The vertex is \((h,k)\) directly. Complete the square on \(y=ax^2+bx+c\) to convert to this form.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Find the equation of the line through \((1,4)\) and \((5,12)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(m = \dfrac{12-4}{5-1} = \dfrac{8}{4} = 2\).</div>
      <div class="step"><strong>Step 2:</strong> Use point-slope with \((1,4)\): \(y-4=2(x-1) \Rightarrow y=2x+2\).</div>
      <em>Conclusion: \(y=2x+2\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Convert \(y=x^2-6x+5\) to vertex form and state the vertex.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Take half the \(x\)-coefficient and square it: \(\left(\dfrac{-6}{2}\right)^2=9\).</div>
      <div class="step"><strong>Step 2:</strong> Add and subtract \(9\): \(y=(x^2-6x+9)-9+5 = (x-3)^2-4\).</div>
      <em>Conclusion: \(y=(x-3)^2-4\), vertex \((3,-4)\). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = (x-3)*(x-3)-4"], { title: "y = (x−3)² − 4, vertex at (3, −4)", xMin: -2, xMax: 8, yMin: -6, yMax: 10 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Sketch \(y=-2(x+1)^2+8\) and state its key features.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The vertex is at \((-1,8)\), read directly from the form.</div>
      <div class="step"><strong>Step 2:</strong> The negative leading coefficient means the parabola opens <strong>downward</strong>, so \((-1,8)\) is a maximum.</div>
      <em>Conclusion: maximum at \((-1,8)\), opening downward, narrower than \(y=x^2\) (stretch factor 2). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = -2*(x+1)*(x+1)+8"], { title: "y = −2(x+1)² + 8, maximum at (−1, 8)", xMin: -5, xMax: 3, yMin: -5, yMax: 10 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Find the equation of a parabola with vertex \((2,-3)\) that passes through \((4,5)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Start from vertex form: \(y=a(x-2)^2-3\).</div>
      <div class="step"><strong>Step 2:</strong> Substitute the point \((4,5)\): \(5=a(4-2)^2-3 \Rightarrow 5=4a-3\).</div>
      <div class="step"><strong>Step 3:</strong> Solve: \(8=4a \Rightarrow a=2\).</div>
      <em>Conclusion: \(y=2(x-2)^2-3\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Maximum height</h3><p>A ball's height is modelled by \(h(t) = -5(t-2)^2+21\), where \(t\) is time in seconds and \(h\) is in metres. Find the maximum height and when it occurs.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The equation is already in vertex form, with vertex \((2,21)\).</div>
      <div class="step"><strong>Step 2:</strong> Since \(a=-5<0\), the parabola opens downward, so the vertex is a maximum.</div>
      <em>Conclusion: maximum height of \(21\) m, reached at \(t=2\) s. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the equation of the line through \((0,-3)\) and \((4,5)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(y=2x-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Convert \(y=x^2+4x+1\) to vertex form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(y=(x+2)^2-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>State the vertex and direction of opening for \(y=3(x-1)^2+4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: vertex \((1,4)\), opens upward.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the equation of a parabola with vertex \((-1,2)\) through \((1,10)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">$10=a(2)^2+2\Rightarrow a=2$. <em>Answer: \(y=2(x+1)^2+2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Convert \(y=-2x^2+8x-3\) to vertex form.</p><details><summary>View answer</summary><div class="solution"><div class="step">$y=-2(x^2-4x)-3=-2(x^2-4x+4-4)-3=-2(x-2)^2+8-3$. <em>Answer: \(y=-2(x-2)^2+5\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does vertex form show immediately?</h3><p><em>The vertex \((h,k)\) and whether the parabola opens up or down (the sign of \(a\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I complete the square when \(a \neq 1\)?</h3><p><em>Factor \(a\) out of the \(x^2\) and \(x\) terms first, complete the square inside, then distribute \(a\) back through.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: When is a vertex a maximum vs a minimum?</h3><p><em>A maximum when \(a<0\) (opens down); a minimum when \(a>0\) (opens up).</em></p></div>
</div>`),
]);

u2["2.5"] = L("2.5", "The Quadratic Formula & Discriminant", [
  html(String.raw`<div class="lecture-box">
  <h1>➗ The Quadratic Formula &amp; Discriminant</h1>
  <p><strong>Overview.</strong> The <strong>quadratic formula</strong> solves any quadratic equation, even ones that don't factor nicely. Buried inside it, the <strong>discriminant</strong> \(b^2-4ac\) tells you — before you even finish solving — how many real solutions to expect.</p>
  <h2>📌 The Quadratic Formula</h2>
  <p>For \(ax^2+bx+c=0\):</p>
  <p style="text-align:center;">\( x = \dfrac{-b \pm \sqrt{b^2-4ac}}{2a} \)</p>
  <h2>📌 The Discriminant</h2>
  <p>The discriminant is \(\Delta = b^2-4ac\), the part under the square root:</p>
  <ul>
    <li><strong>\(\Delta > 0\):</strong> two distinct real roots.</li>
    <li><strong>\(\Delta = 0\):</strong> one repeated real root (the parabola touches the \(x\)-axis once).</li>
    <li><strong>\(\Delta < 0\):</strong> no real roots (the parabola doesn't cross the \(x\)-axis).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Solve \(2x^2-5x-3=0\) using the quadratic formula.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Here \(a=2,b=-5,c=-3\). Compute the discriminant: \((-5)^2-4(2)(-3)=25+24=49\).</div>
      <div class="step"><strong>Step 2:</strong> \(x = \dfrac{5\pm\sqrt{49}}{4} = \dfrac{5\pm7}{4}\).</div>
      <em>Conclusion: \(x=3\) or \(x=-\tfrac12\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Without solving, determine the nature of the roots of \(x^2+4x+7=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\Delta = 4^2-4(1)(7) = 16-28 = -12\).</div>
      <div class="step"><strong>Step 2:</strong> Since \(\Delta<0\), there are no real roots.</div>
      <em>Conclusion: no real solutions — the graph never crosses the x-axis. ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = x*x+4*x+7"], { title: "y = x² + 4x + 7 stays entirely above the x-axis", xMin: -6, xMax: 2, yMin: -1, yMax: 10 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Find the discriminant of \(4x^2-12x+9=0\) and describe the roots.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\Delta = (-12)^2-4(4)(9) = 144-144=0\).</div>
      <div class="step"><strong>Step 2:</strong> \(\Delta = 0\) means exactly one repeated real root.</div>
      <em>Conclusion: one repeated root, \(x=\dfrac{12}{8}=1.5\) — the parabola just touches the x-axis. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Find the value(s) of \(k\) for which \(x^2+kx+9=0\) has exactly one repeated root.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> A repeated root means \(\Delta=0\): \(k^2-4(1)(9)=0\).</div>
      <div class="step"><strong>Step 2:</strong> \(k^2=36 \Rightarrow k=\pm6\).</div>
      <em>Conclusion: \(k=6\) or \(k=-6\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Does a ball reach a height?</h3><p>A ball's height is \(h(t)=-5t^2+20t+1\). Determine, using the discriminant, whether it ever reaches \(25\) m.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Set \(h(t)=25\): \(-5t^2+20t+1=25 \Rightarrow -5t^2+20t-24=0\).</div>
      <div class="step"><strong>Step 2:</strong> Compute \(\Delta = 20^2-4(-5)(-24) = 400-480=-80\).</div>
      <em>Conclusion: \(\Delta<0\), so there is no real solution — the ball never reaches 25 m. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(x^2-2x-8=0\) using the quadratic formula.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x=4\) or \(x=-2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the discriminant of \(3x^2+2x+5=0\) and describe the roots.</p><details><summary>View answer</summary><div class="solution"><div class="step">$\Delta=4-60=-56$. <em>Answer: no real roots.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the discriminant of \(x^2-8x+16=0\) and describe the roots.</p><details><summary>View answer</summary><div class="solution"><div class="step">$\Delta=64-64=0$. <em>Answer: one repeated root, \(x=4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(k\) so that \(2x^2+kx+8=0\) has a repeated root (\(k>0\)).</p><details><summary>View answer</summary><div class="solution"><div class="step">$k^2=64\Rightarrow k=8$ (taking $k>0$). <em>Answer: \(k=8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>For what values of \(k\) does \(x^2+6x+k=0\) have two distinct real roots?</p><details><summary>View answer</summary><div class="solution"><div class="step">Need $\Delta>0$: $36-4k>0$. <em>Answer: \(k<9\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When should I use the quadratic formula instead of factoring?</h3><p><em>Whenever the quadratic doesn't factor easily, or when you just need the roots quickly.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does the discriminant tell you graphically?</h3><p><em>How many times the parabola crosses the x-axis: twice, once (tangent), or never.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Can I find the discriminant without solving the whole equation?</h3><p><em>Yes — just compute \(b^2-4ac\) from the coefficients.</em></p></div>
</div>`),
]);

u2["2.6"] = L("2.6", "Rational Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>➰ Rational Functions</h1>
  <p><strong>Overview.</strong> A <strong>rational function</strong> is built from a ratio of expressions, and its graph often has <strong>asymptotes</strong> — lines the curve approaches but never touches. This lesson starts from the simplest case, \(y=\dfrac1x\), and builds up to reading and sketching its transformations.</p>
  <h2>📌 The Reciprocal Function</h2>
  <p>\(y = \dfrac1x\) has a <strong>vertical asymptote</strong> at \(x=0\) (undefined there) and a <strong>horizontal asymptote</strong> at \(y=0\) (never reaches it, however large \(x\) gets).</p>
  <h2>📌 Transformed Rational Functions</h2>
  <p style="text-align:center;">\( y = \dfrac{a}{x-h}+k \)</p>
  <p>This shifts the reciprocal function's asymptotes to \(x=h\) (vertical) and \(y=k\) (horizontal), and \(a\) stretches/reflects it exactly as with any other function.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Sketch \(y=\dfrac1x\) and state its asymptotes.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The function is undefined at \(x=0\): vertical asymptote \(x=0\).</div>
      <div class="step"><strong>Step 2:</strong> As \(x \to \pm\infty\), \(y \to 0\): horizontal asymptote \(y=0\).</div>
      <em>Conclusion: asymptotes \(x=0\) and \(y=0\); two separate branches in opposite quadrants. ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = 1/x"], { title: "y = 1/x — vertical asymptote x = 0, horizontal asymptote y = 0", xMin: -5, xMax: 5, yMin: -5, yMax: 5 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>State the asymptotes of \(y=\dfrac{3}{x+2}-1\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Write the shift as \(x-(-2)\): the vertical asymptote is \(x=-2\).</div>
      <div class="step"><strong>Step 2:</strong> The \(-1\) shifts the horizontal asymptote to \(y=-1\).</div>
      <em>Conclusion: asymptotes \(x=-2\) and \(y=-1\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Sketch \(y=\dfrac{2}{x-3}+4\) as a transformation of \(y=\dfrac1x\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The \(2\) stretches the branches vertically (they lie further from the asymptotes).</div>
      <div class="step"><strong>Step 2:</strong> Shift right \(3\) (new vertical asymptote \(x=3\)) and up \(4\) (new horizontal asymptote \(y=4\)).</div>
      <em>Conclusion: \(y=\tfrac1x\) stretched by 2, shifted right 3 and up 4; asymptotes \(x=3,\,y=4\). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = 2/(x-3)+4"], { title: "y = 2/(x−3) + 4 — asymptotes x = 3 and y = 4", xMin: -2, xMax: 8, yMin: -2, yMax: 10 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Find the domain and vertical asymptote of \(y=\dfrac{x+1}{x-2}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The denominator can't be \(0\): \(x \neq 2\).</div>
      <div class="step"><strong>Step 2:</strong> This gives a vertical asymptote at \(x=2\).</div>
      <em>Conclusion: domain is all real \(x\) except \(2\); vertical asymptote \(x=2\). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = (x+1)/(x-2)"], { title: "y = (x+1)/(x−2) — vertical asymptote x = 2", xMin: -6, xMax: 10, yMin: -6, yMax: 8 })}</div>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Cost per unit</h3><p>A company's average cost per item is modelled by \(C(x)=\dfrac{500}{x}+8\), where \(x\) is the number of items produced. Explain the meaning of each asymptote in context.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The vertical asymptote is \(x=0\) — you can't average a fixed cost over zero items, so the model breaks down there.</div>
      <div class="step"><strong>Step 2:</strong> The horizontal asymptote is \(y=8\) — as production \(x\) grows very large, the fixed cost per item shrinks toward \(0\), so the average cost settles near \(\$8\).</div>
      <em>Conclusion: \(\$8\) represents the "floor" cost per item once fixed costs are spread thin enough. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>State the asymptotes of \(y=\dfrac{1}{x-5}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x=5\), \(y=0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>State the asymptotes of \(y=\dfrac{4}{x}+3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x=0\), \(y=3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>State the asymptotes of \(y=\dfrac{-2}{x+1}-4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x=-1\), \(y=-4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the domain of \(y=\dfrac{x-3}{x+6}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: all real \(x\) except \(x=-6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A function \(y=\dfrac{a}{x-h}+k\) has asymptotes \(x=4\) and \(y=-2\), and passes through \((5,1)\). Find \(a\).</p><details><summary>View answer</summary><div class="solution"><div class="step">$1=\dfrac{a}{5-4}-2\Rightarrow a=3$. <em>Answer: \(a=3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is an asymptote?</h3><p><em>A line the graph gets arbitrarily close to, but never actually reaches.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I find the asymptotes of \(y=\dfrac{a}{x-h}+k\) instantly?</h3><p><em>Vertical asymptote at \(x=h\), horizontal asymptote at \(y=k\) — read straight from the equation.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why is the domain restricted at a vertical asymptote?</h3><p><em>Because that's exactly where the denominator would be zero, which is undefined.</em></p></div>
</div>`),
]);
