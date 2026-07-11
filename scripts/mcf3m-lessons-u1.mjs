// MCF3M Unit 1 — Quadratic Expressions & Equations. Single-card lessons matching
// the Grade 9/10/MCR3U pattern (🔵 Examples / 🟡 Practice Questions / ❓ Q&A Summary),
// with interactive graphs embedded inline via gframe.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u1 = {};

u1["1.1"] = L("1.1", "Expanding & Simplifying Quadratic Expressions", [html(String.raw`<div class="lecture-box">
  <h1>✖️ Expanding &amp; Simplifying Quadratic Expressions</h1>
  <p><strong>Overview.</strong> To <strong>expand</strong> means to remove brackets by multiplying, then collect like terms into <em>standard form</em> \(ax^2+bx+c\). Mastering this lets us move freely between factored and standard forms of the same parabola.</p>
  <h2>📌 The tools</h2>
  <ul>
    <li><strong>Distribute:</strong> \(a(b+c)=ab+ac\). <strong>FOIL:</strong> \((x+p)(x+q)=x^2+(p+q)x+pq\).</li>
    <li><strong>Special products:</strong> \((a+b)^2=a^2+2ab+b^2\); \((a-b)^2=a^2-2ab+b^2\); \((a-b)(a+b)=a^2-b^2\).</li>
  </ul>
  ${gframe(["y = x^2 + 5*x + 6"], { title: "Factored (x+2)(x+3) and expanded x²+5x+6 are one parabola" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Distribute a monomial</h3><p>Expand \(3(x+4)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Multiply each term by 3.</div><em>Conclusion: \(3x+12\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Monomial × binomial</h3><p>Expand \(2x(x-5)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2x\cdot x-2x\cdot5\).</div><em>Conclusion: \(2x^2-10x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: FOIL</h3><p>Expand \((x+2)(x+3)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2+3x+2x+6\).</div><em>Conclusion: \(x^2+5x+6\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Perfect square</h3><p>Expand \((x+5)^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2+2(5)x+25\).</div><em>Conclusion: \(x^2+10x+25\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Difference of squares</h3><p>Expand \((x-4)(x+4)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Middle terms cancel.</div><em>Conclusion: \(x^2-16\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Expand \(4(x-3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x-12\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Expand \(x(2x+7)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x^2+7x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Expand \((x+1)(x+6)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2+7x+6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Expand \((x-3)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2-6x+9\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Expand \((2x-1)(2x+1)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x^2-1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does FOIL stand for?</h3><p><em>First, Outer, Inner, Last — the four products when multiplying two binomials.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Is \((x+5)^2=x^2+25\)?</h3><p><em>No — you must include the middle term \(2(5)x\): it is \(x^2+10x+25\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: When do middle terms cancel?</h3><p><em>In a difference of squares \((a-b)(a+b)=a^2-b^2\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is standard form?</h3><p><em>\(ax^2+bx+c\), with terms collected in descending degree.</em></p></div>
</div>`)]);

u1["1.2"] = L("1.2", "Factoring Quadratic Expressions", [html(String.raw`<div class="lecture-box">
  <h1>🧩 Factoring Quadratic Expressions</h1>
  <p><strong>Overview.</strong> <strong>Factoring</strong> reverses expanding: it rewrites \(ax^2+bx+c\) as a product of factors. Always look for a common factor first, then a pattern.</p>
  <h2>📌 The strategies</h2>
  <ul>
    <li><strong>Common factor:</strong> pull out the GCF. <strong>Simple trinomial:</strong> \(x^2+bx+c=(x+p)(x+q)\) with \(p+q=b,\ pq=c\).</li>
    <li><strong>Decomposition</strong> for \(ax^2+bx+c\); <strong>difference of squares</strong> \(a^2-b^2=(a-b)(a+b)\); <strong>perfect square</strong> \(a^2\pm2ab+b^2=(a\pm b)^2\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Common factor</h3><p>Factor \(6x^2+9x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> GCF is \(3x\).</div><em>Conclusion: \(3x(2x+3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Simple trinomial</h3><p>Factor \(x^2+7x+12\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Two numbers with sum 7, product 12: \(3,4\).</div><em>Conclusion: \((x+3)(x+4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: \(ax^2+bx+c\)</h3><p>Factor \(2x^2+7x+3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(ac=6\); split \(7x=6x+x\) and group.</div><em>Conclusion: \((2x+1)(x+3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Difference of squares</h3><p>Factor \(x^2-25\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=x,\ b=5\).</div><em>Conclusion: \((x-5)(x+5)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Perfect square trinomial</h3><p>Factor \(x^2-10x+25\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> First &amp; last are squares; middle \(=2(5)x\).</div><em>Conclusion: \((x-5)^2\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Factor \(4x^2+8x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x(x+2)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Factor \(x^2+5x+6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x+2)(x+3)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Factor \(3x^2+13x-10\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3x-2)(x+5)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Factor \(x^2-49\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x-7)(x+7)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Factor \(9x^2+24x+16\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3x+4)^2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is factoring the reverse of?</h3><p><em>Expanding — multiply the factors back to check.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What should you always look for first?</h3><p><em>A greatest common factor (GCF).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: When does the difference-of-squares pattern apply?</h3><p><em>Only for two perfect squares separated by subtraction.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How does decomposition help with \(ax^2+bx+c\)?</h3><p><em>Find two numbers multiplying to \(ac\) and adding to \(b\), then factor by grouping.</em></p></div>
</div>`)]);

u1["1.3"] = L("1.3", "Solving Quadratic Equations by Factoring", [html(String.raw`<div class="lecture-box">
  <h1>🟰 Solving Quadratic Equations by Factoring</h1>
  <p><strong>Overview.</strong> A quadratic equation \(ax^2+bx+c=0\) can be solved by factoring and using the <strong>zero product property</strong>: if a product is 0, at least one factor is 0. The solutions are the <em>x-intercepts</em> of the matching parabola.</p>
  <h2>📌 The method</h2>
  <ol>
    <li>Rearrange so one side equals \(0\).</li>
    <li>Factor the other side.</li>
    <li>Set each factor equal to \(0\) and solve.</li>
  </ol>
  ${gframe(["y = x^2 - 5*x + 6"], { title: "The roots x=2, x=3 are exactly the x-intercepts" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Simple trinomial</h3><p>Solve \(x^2-5x+6=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-2)(x-3)=0\).</div><em>Conclusion: \(x=2\) or \(x=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Difference of squares</h3><p>Solve \(x^2-9=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-3)(x+3)=0\).</div><em>Conclusion: \(x=\pm3\). ✓</em></div>${gframe(["y = x^2 - 9"], { title: "x²−9=0: the parabola crosses the x-axis at x=−3 and 3" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Negative constant</h3><p>Solve \(x^2+2x-8=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x+4)(x-2)=0\).</div><em>Conclusion: \(x=-4\) or \(x=2\). ✓</em></div>${gframe(["y = x^2 + 2*x - 8"], { title: "x²+2x−8=0: roots at x=−4 and 2" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Leading coefficient</h3><p>Solve \(2x^2-7x+3=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((2x-1)(x-3)=0\).</div><em>Conclusion: \(x=\tfrac12\) or \(x=3\). ✓</em></div>${gframe(["y = 2*x^2 - 7*x + 3"], { title: "2x²−7x+3=0: a narrower parabola crossing at x=½ and 3" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Common factor</h3><p>Solve \(x^2-6x=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x(x-6)=0\).</div><em>Conclusion: \(x=0\) or \(x=6\). ✓</em></div>${gframe(["y = x^2 - 6*x"], { title: "x²−6x=0: roots at x=0 and 6 (one of them at the origin)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(x^2-7x+10=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=2\) or \(x=5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(x^2-16=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=\pm4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(x^2+5x+6=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=-2\) or \(x=-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(3x^2-5x-2=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3x+1)(x-2)=0\Rightarrow x=-\tfrac13\) or \(x=2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(x^2-4x=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=0\) or \(x=4\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the zero product property?</h3><p><em>If \(AB=0\), then \(A=0\) or \(B=0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Must the equation equal 0 first?</h3><p><em>Yes — move everything to one side before factoring.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How many solutions can a quadratic have?</h3><p><em>Zero, one, or two real solutions.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What do the solutions mean graphically?</h3><p><em>They are the x-intercepts of the parabola \(y=ax^2+bx+c\).</em></p></div>
</div>`)]);

u1["1.4"] = L("1.4", "The Quadratic Formula & the Discriminant", [html(String.raw`<div class="lecture-box">
  <h1>📐 The Quadratic Formula &amp; the Discriminant</h1>
  <p><strong>Overview.</strong> When a quadratic will not factor nicely, the <strong>quadratic formula</strong> solves any \(ax^2+bx+c=0\). The <strong>discriminant</strong> \(b^2-4ac\) tells you how many real roots there are <em>before</em> you solve.</p>
  <h2>📌 The formulas</h2>
  <ul>
    <li><strong>Quadratic formula:</strong> \(x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\).</li>
    <li><strong>Discriminant</strong> \(D=b^2-4ac\): \(D>0\) two roots, \(D=0\) one root, \(D<0\) no real roots.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Apply the formula</h3><p>Solve \(x^2-4x+1=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=\dfrac{4\pm\sqrt{16-4}}{2}=\dfrac{4\pm\sqrt{12}}{2}\).</div><em>Conclusion: \(x=2\pm\sqrt3\). ✓</em></div>${gframe(["y = x^2 - 4*x + 1"], { title: "x²−4x+1=0: crosses the axis at the two irrational roots 2±√3 ≈ 0.27 and 3.73" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: With a leading coefficient</h3><p>Solve \(2x^2+3x-2=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(D=9+16=25\); \(x=\dfrac{-3\pm5}{4}\).</div><em>Conclusion: \(x=\tfrac12\) or \(x=-2\). ✓</em></div>${gframe(["y = 2*x^2 + 3*x - 2"], { title: "2x²+3x−2=0: roots at x=½ and −2" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: No real roots</h3><p>How many roots has \(x^2+2x+5=0\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(D=4-20=-16<0\).</div><em>Conclusion: no real roots. ✓</em></div>${gframe(["y = x^2 + 2*x + 5"], { title: "x²+2x+5: discriminant<0 — the parabola floats entirely above the axis, so no real roots" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: One (double) root</h3><p>How many roots has \(x^2-6x+9=0\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(D=36-36=0\).</div><em>Conclusion: one root, \(x=3\). ✓</em></div>${gframe(["y = x^2 - 6*x + 9"], { title: "x²−6x+9=(x−3)²: discriminant=0 — the parabola just touches the axis at x=3 (one double root)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Irrational roots</h3><p>Solve \(x^2+x-1=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=\dfrac{-1\pm\sqrt{5}}{2}\).</div><em>Conclusion: \(x=\dfrac{-1\pm\sqrt5}{2}\). ✓</em></div>${gframe(["y = x^2 + x - 1"], { title: "x²+x−1=0: two irrational roots (−1±√5)/2 ≈ −1.62 and 0.62" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(x^2-2x-1=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=1\pm\sqrt2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the discriminant of \(x^2-4x+4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(D=0\) (one root).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(3x^2-5x-2=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=2\) or \(x=-\tfrac13\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>How many real roots has \(2x^2+x+3=0\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(D=1-24<0\): none.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(x^2-6x+7=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=3\pm\sqrt2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When should I use the formula instead of factoring?</h3><p><em>When the quadratic does not factor over the integers.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does the discriminant tell you?</h3><p><em>The number of real roots, from the sign of \(b^2-4ac\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does \(D=0\) mean?</h3><p><em>Exactly one (repeated) real root.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does \(D<0\) mean?</h3><p><em>No real roots — the parabola never crosses the x-axis.</em></p></div>
</div>`)]);

u1["1.5"] = L("1.5", "Roots and x-Intercepts", [html(String.raw`<div class="lecture-box">
  <h1>📍 Roots and x-Intercepts</h1>
  <p><strong>Overview.</strong> The <strong>real roots</strong> of \(ax^2+bx+c=0\) are exactly the <strong>x-intercepts</strong> of the graph \(y=ax^2+bx+c\). The discriminant therefore predicts how many times the parabola crosses the x-axis.</p>
  <h2>📌 The connection</h2>
  <ul>
    <li>\(D>0\): two x-intercepts. \(D=0\): one (the vertex sits on the x-axis). \(D<0\): no x-intercepts.</li>
    <li>Factoring and graphing agree because both find where \(y=0\).</li>
  </ul>
  ${gframe(["y = x^2 - 4*x + 3"], { title: "Two x-intercepts at x=1 and x=3 (D>0)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Two intercepts</h3><p>Find the x-intercepts of \(y=x^2-4x+3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-1)(x-3)=0\).</div><em>Conclusion: \(x=1\) and \(x=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: One intercept</h3><p>How many x-intercepts has \(y=x^2-6x+9\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-3)^2\), \(D=0\).</div><em>Conclusion: one, at \(x=3\). ✓</em></div>${gframe(["y = x^2 - 6*x + 9"], { title: "y=x²−6x+9=(x−3)²: the vertex sits on the axis, giving exactly one x-intercept at x=3" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: No intercepts</h3><p>How many x-intercepts has \(y=x^2+1\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(D=0-4=-4<0\).</div><em>Conclusion: none. ✓</em></div>${gframe(["y = x^2 + 1"], { title: "y=x²+1: the whole parabola sits above the axis — no x-intercepts" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Count from the discriminant</h3><p>How many x-intercepts has \(y=2x^2-3x-5\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(D=9+40=49>0\).</div><em>Conclusion: two. ✓</em></div>${gframe(["y = 2*x^2 - 3*x - 5"], { title: "y=2x²−3x−5: discriminant>0 — it crosses the axis twice (x=−1 and 2.5)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Application — profit</h3><p>A company's profit (in $1000s) is \(P=-5x^2+550x-5000\), where \(x\) is advertising spending (in $1000s). For what \(x\) is the profit $0?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(-5(x^2-110x+1000)=-5(x-10)(x-100)=0\).</div><em>Conclusion: \(x=10\) or \(x=100\) (thousand dollars). ✓</em></div>${gframe(["y = -5*x^2 + 550*x - 5000"], { title: "P=−5x²+550x−5000: profit is $0 where the curve meets the axis (x=10 and 100), positive between them" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the x-intercepts of \(y=x^2-x-6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=3\) and \(x=-2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>How many x-intercepts has \(y=x^2-2x+5\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(D=4-20<0\): none.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>How many x-intercepts has \(y=4x^2-12x+9\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(D=0\): one (it is \((2x-3)^2\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the x-intercepts of \(y=x^2-9\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=\pm3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>How many x-intercepts has \(y=x^2+x-12\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(D=1+48>0\): two.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do roots and x-intercepts relate?</h3><p><em>The real roots of the equation are the x-intercepts of the graph.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does "no real roots" look like graphically?</h3><p><em>The parabola does not touch or cross the x-axis.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does a double root mean?</h3><p><em>The vertex sits on the x-axis — the parabola just touches it.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why do factoring and graphing give the same answer?</h3><p><em>Both find the values of \(x\) where \(y=0\).</em></p></div>
</div>`)]);
