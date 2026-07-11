// MFM2P-only lessons (full depth, Grade-9 theme) that override the scaffolds
// in seed-mfm2p.mjs. Keyed by subject code. Uses the shared html/gframe helpers.
import { html, gframe, graph, mg } from "./seed-mpm2d.mjs";

const EX = `background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;`;
const PR = `background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;`;
const MI = `background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;`;
const QA = `background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;`;

export const authored = {};
const L = (code, title, blocks) => { authored[code] = { code, title, blocks }; };

// ── 1.1 Review of Expressions & Integers ─────────────────────
L("1.1", "Review of Expressions & Integers", [html(String.raw`<div class="lecture-box">
  <h1>🧮 Review of Expressions & Integers</h1>
  <p><strong>Overview.</strong> Everything in Grade 10 Applied math rests on confident algebra. This lesson rebuilds the basics: integer arithmetic with signs, evaluating expressions by substitution, and the order of operations.</p>

  <h2>📌 Integer Rules</h2>
  <ul>
    <li><strong>Adding:</strong> same signs → add and keep the sign; different signs → subtract and keep the bigger size's sign. \( -3+(-5)=-8 \), \( -3+7=4 \).</li>
    <li><strong>Subtracting:</strong> add the opposite. \( 4-(-6)=4+6=10 \).</li>
    <li><strong>Multiplying / dividing:</strong> same signs → positive; different signs → negative. \( (-4)(3)=-12 \), \( (-20)\div(-5)=4 \).</li>
  </ul>

  <h2>📌 Evaluating Expressions</h2>
  <p>To <strong>evaluate</strong>, substitute the given value(s) and compute. Keep substituted negatives in brackets. For \( 2x^2-3x \) at \( x=-2 \): \( 2(-2)^2-3(-2)=2(4)+6=14 \).</p>

  <h2>📌 Order of Operations (BEDMAS)</h2>
  <p><strong>B</strong>rackets, <strong>E</strong>xponents, <strong>D</strong>ivision/<strong>M</strong>ultiplication (left→right), <strong>A</strong>ddition/<strong>S</strong>ubtraction (left→right).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Adding & subtracting integers</h3>
    <p>Evaluate \( -3+7-5 \).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \( -3+7=4 \).</div><div class="step"><strong>Step 2:</strong> \( 4-5=-1 \).</div><em>Conclusion: \( -1 \). ✓</em></div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Multiplying & dividing</h3>
    <p>Evaluate \( (-4)(3) \) and \( -20\div(-5) \).</p>
    <div class="solution"><div class="step">Different signs → negative: \( (-4)(3)=-12 \).</div><div class="step">Same signs → positive: \( -20\div(-5)=4 \).</div><em>Conclusion: \( -12 \) and \( 4 \). ✓</em></div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Evaluate by substitution</h3>
    <p>Evaluate \( 2x^2-3x \) at \( x=-2 \).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \( 2(-2)^2-3(-2) \).</div><div class="step"><strong>Step 2:</strong> \( 2(4)+6=8+6 \).</div><em>Conclusion: \( 14 \). ✓</em></div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Order of operations</h3>
    <p>Evaluate \( 5+2\times3^2-4 \).</p>
    <div class="solution"><div class="step"><strong>Exponent:</strong> \( 3^2=9 \).</div><div class="step"><strong>Multiply:</strong> \( 2\times9=18 \).</div><div class="step"><strong>Add/subtract:</strong> \( 5+18-4=19 \).</div><em>Conclusion: \( 19 \). ✓</em></div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: A two-variable expression</h3>
    <p>Evaluate \( \dfrac{a-b}{c} \) at \( a=7,\ b=-3,\ c=2 \).</p>
    <div class="solution"><div class="step"><strong>Step 1:</strong> \( a-b=7-(-3)=10 \).</div><div class="step"><strong>Step 2:</strong> \( 10\div2=5 \).</div><em>Conclusion: \( 5 \). ✓</em></div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Evaluate \( -8+3-(-2) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( -8+3+2=-3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Evaluate \( (-6)(-4) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( 24 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Evaluate \( 3x-x^2 \) at \( x=-1 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3(-1)-(-1)^2=-3-1 \). <em>Answer: \( -4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Evaluate \( 12-3\times2+4 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 12-6+4 \). <em>Answer: \( 10 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Evaluate \( \dfrac{2a+b}{a-b} \) at \( a=4,\ b=-2 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{8-2}{4+2}=\dfrac{6}{6} \). <em>Answer: \( 1 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}">
    <h3>⚠️ Common Mistakes</h3>
    <ul><li>Dropping a negative sign when substituting — use brackets: \( (-2)^2=4 \), not \( -4 \).</li><li>Doing addition before multiplication — follow BEDMAS.</li><li>Treating \( -x^2 \) and \( (-x)^2 \) as the same.</li></ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I subtract a negative?</h3><p><em>Add its opposite: \( a-(-b)=a+b \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why use brackets when substituting?</h3><p><em>So the sign and the exponent apply correctly, e.g. \( (-3)^2=9 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What does BEDMAS stand for?</h3><p><em>Brackets, Exponents, Division/Multiplication, Addition/Subtraction.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Same-sign product?</h3><p><em>Two same signs multiply/divide to a positive; different signs give a negative.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Left-to-right?</h3><p><em>Within the same level (× and ÷, or + and −), work left to right.</em></p></div>
</div>`)]);

// ── 1.2 Like Terms & the Distributive Property ───────────────
L("1.2", "Like Terms & the Distributive Property", [html(String.raw`<div class="lecture-box">
  <h1>➕ Like Terms & the Distributive Property</h1>
  <p><strong>Overview.</strong> Simplifying comes before solving. This lesson collects like terms and removes brackets with the distributive property.</p>

  <h2>📌 Like Terms</h2>
  <p><strong>Like terms</strong> have the <em>same variable to the same power</em>. Add/subtract only their coefficients: \( 3x+5x=8x \), but \( 3x+5x^2 \) cannot combine.</p>

  <h2>📌 The Distributive Property</h2>
  <p>\( a(b+c)=ab+ac \). Multiply the outside factor by <em>every</em> term inside: \( 3(x+4)=3x+12 \). A negative out front flips every sign: \( -2(2x-5)=-4x+10 \).</p>

  <h2>📌 Expand, then Collect</h2>
  <p>Often you expand first, then collect like terms: \( 2(x+3)+4x=2x+6+4x=6x+6 \).</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Collect like terms</h3><p>Simplify \( 4x+7-2x+3 \).</p><div class="solution"><div class="step">Group: \( (4x-2x)+(7+3) \).</div><em>Conclusion: \( 2x+10 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Distribute</h3><p>Expand \( 3(x+4) \).</p><div class="solution"><div class="step">\( 3\cdot x+3\cdot4 \).</div><em>Conclusion: \( 3x+12 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Negative factor</h3><p>Expand \( -2(2x-5) \).</p><div class="solution"><div class="step">\( -2(2x)+(-2)(-5) \).</div><em>Conclusion: \( -4x+10 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Expand then collect</h3><p>Simplify \( 2(x+3)+4x \).</p><div class="solution"><div class="step">Expand: \( 2x+6+4x \).</div><div class="step">Collect: \( 6x+6 \).</div><em>Conclusion: \( 6x+6 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Two brackets</h3><p>Simplify \( 3(x-1)-2(x+4) \).</p><div class="solution"><div class="step">Expand: \( 3x-3-2x-8 \).</div><div class="step">Collect: \( x-11 \).</div><em>Conclusion: \( x-11 \). ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Simplify \( 5x+2-3x+6 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( 2x+8 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Expand \( 4(2x-3) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( 8x-12 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Expand \( -(x-6) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( -x+6 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Simplify \( 3(x+2)+5x \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3x+6+5x \). <em>Answer: \( 8x+6 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Simplify \( 2(3x-1)-4(x-2) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 6x-2-4x+8 \). <em>Answer: \( 2x+6 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Combining unlike terms (\( 3x+5x^2 \) does not simplify).</li><li>Distributing to only the first term.</li><li>Forgetting the negative flips every sign inside.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What are like terms?</h3><p><em>Terms with the same variable and exponent; only their coefficients combine.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What does the distributive property do?</h3><p><em>Multiplies the outside factor by every term inside the brackets.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Why does \( -(x-6)=-x+6 \)?</h3><p><em>The implied \( -1 \) multiplies both terms, flipping each sign.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Expand or collect first?</h3><p><em>Expand brackets first, then collect like terms.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Is \( 3x \) like \( 3 \)?</h3><p><em>No — one has a variable, the other is a constant.</em></p></div>
</div>`)]);

// ── 1.3 Solving One- & Two-Step Equations ────────────────────
L("1.3", "Solving One- & Two-Step Equations", [html(String.raw`<div class="lecture-box">
  <h1>⚖️ Solving One- & Two-Step Equations</h1>
  <p><strong>Overview.</strong> An equation is a balance. To solve it, <strong>isolate the variable</strong> by undoing operations — doing the same thing to both sides.</p>

  <h2>📌 Inverse Operations</h2>
  <p>Undo \( + \) with \( - \), \( \times \) with \( \div \). Always keep both sides equal. <strong>Check</strong> by substituting your answer back.</p>

  <h2>📌 Two-Step Strategy</h2>
  <p>Undo addition/subtraction <em>first</em>, then multiplication/division. For \( 2x+1=9 \): subtract \(1\) (\( 2x=8 \)), then divide by \(2\) (\( x=4 \)).</p>

  <h2>📌 Solving Graphically</h2>
  <p>An equation like \( 2x+1=9 \) is asking "where does \( y=2x+1 \) equal \( y=9 \)?" The lines cross at \( x=4 \) — explore below.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: One step (add)</h3><p>Solve \( x+5=12 \).</p><div class="solution"><div class="step">Subtract \(5\): \( x=7 \).</div><em>Check: \( 7+5=12 \) ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: One step (multiply)</h3><p>Solve \( 3x=21 \).</p><div class="solution"><div class="step">Divide by \(3\): \( x=7 \).</div><em>Check: \( 3(7)=21 \) ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Two steps</h3><p>Solve \( 2x+1=9 \).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Subtract \(1\): \( 2x=8 \).</div><div class="step"><strong>Step 2:</strong> Divide by \(2\): \( x=4 \).</div><em>Conclusion: \( x=4 \). ✓</em></div>
    ${gframe(["y = 2*x + 1", "y = 9"], { title: "2x + 1 = 9  →  x = 4", labels: [{ x: 4, y: 9, t: "(4, 9)", c: "#a3327a" }] })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 4: Division step</h3><p>Solve \( \dfrac{x}{4}=3 \).</p><div class="solution"><div class="step">Multiply by \(4\): \( x=12 \).</div><em>Check: \( 12\div4=3 \) ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Negative coefficient</h3><p>Solve \( 5-x=2 \).</p><div class="solution"><div class="step">Subtract \(5\): \( -x=-3 \).</div><div class="step">Multiply by \(-1\): \( x=3 \).</div><em>Conclusion: \( x=3 \). ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Solve \( x-7=2 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( x=9 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \( 4x=20 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( x=5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Solve \( 3x-2=10 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3x=12 \). <em>Answer: \( x=4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( \dfrac{x}{2}+1=5 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{x}{2}=4 \). <em>Answer: \( x=8 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Solve \( 7-2x=1 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( -2x=-6 \). <em>Answer: \( x=3 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Dividing before undoing the added/subtracted term.</li><li>Doing an operation to only one side.</li><li>Forgetting the sign when the variable is negative.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does "isolate the variable" mean?</h3><p><em>Get the variable alone on one side using inverse operations.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which step first in a two-step equation?</h3><p><em>Undo addition/subtraction, then multiplication/division.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I check?</h3><p><em>Substitute your answer back; both sides should match.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: What if \( -x=-3 \)?</h3><p><em>Multiply both sides by \( -1 \): \( x=3 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: How does graphing solve it?</h3><p><em>The solution is the \(x\) where the two sides (as lines) intersect.</em></p></div>
</div>`)]);

// ── 1.4 Solving Multi-Step Equations ─────────────────────────
L("1.4", "Solving Multi-Step Equations", [html(String.raw`<div class="lecture-box">
  <h1>🔧 Solving Multi-Step Equations</h1>
  <p><strong>Overview.</strong> Real equations have brackets, variables on both sides, and fractions. The strategy is always the same: simplify each side, gather the variable on one side, then isolate it.</p>

  <h2>📌 The Plan</h2>
  <ol class="math"><li>Expand any brackets.</li><li>Collect like terms on each side.</li><li>Move the variable to one side, numbers to the other.</li><li>Divide to isolate the variable; check.</li></ol>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Variables on both sides</h3><p>Solve \( 2x+3=x+8 \).</p><div class="solution"><div class="step">Subtract \(x\): \( x+3=8 \).</div><div class="step">Subtract \(3\): \( x=5 \).</div><em>Check: \( 2(5)+3=13=5+8 \) ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Brackets</h3><p>Solve \( 3(x-2)=12 \).</p><div class="solution"><div class="step">Expand: \( 3x-6=12 \).</div><div class="step">\( 3x=18\Rightarrow x=6 \).</div><em>Conclusion: \( x=6 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Both sides + collect</h3><p>Solve \( 4x-7=2x+5 \).</p><div class="solution"><div class="step">Subtract \(2x\): \( 2x-7=5 \).</div><div class="step">\( 2x=12\Rightarrow x=6 \).</div><em>Conclusion: \( x=6 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: A fraction</h3><p>Solve \( \dfrac{x}{3}-2=4 \).</p><div class="solution"><div class="step">Add \(2\): \( \dfrac{x}{3}=6 \).</div><div class="step">Multiply by \(3\): \( x=18 \).</div><em>Conclusion: \( x=18 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Brackets both sides</h3><p>Solve \( 2(x+1)=3(x-2) \).</p><div class="solution"><div class="step">Expand: \( 2x+2=3x-6 \).</div><div class="step">Subtract \(2x\): \( 2=x-6 \).</div><div class="step">Add \(6\): \( x=8 \).</div><em>Conclusion: \( x=8 \). ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Solve \( 5x-3=2x+9 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3x=12 \). <em>Answer: \( x=4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \( 2(x+4)=14 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2x+8=14 \). <em>Answer: \( x=3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Solve \( 6x-5=4x+7 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2x=12 \). <em>Answer: \( x=6 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( \dfrac{x}{2}+3=7 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{x}{2}=4 \). <em>Answer: \( x=8 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Solve \( 3(x-1)=2(x+4) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3x-3=2x+8\Rightarrow x=11 \). <em>Answer: \( x=11 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Forgetting to expand brackets before collecting.</li><li>Moving a term without changing its sign.</li><li>Dividing only part of a side.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Where do I start?</h3><p><em>Expand brackets and collect like terms on each side first.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which side for the variable?</h3><p><em>Either — usually the side that keeps the coefficient positive.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How to clear a fraction?</h3><p><em>Multiply the whole equation by the denominator.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Always check?</h3><p><em>Yes — substitute back to catch sign errors.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: No solution / all values?</h3><p><em>If variables cancel and a false statement remains → no solution; a true one → infinitely many.</em></p></div>
</div>`)]);

// ── 1.5 Rearranging Formulas ─────────────────────────────────
L("1.5", "Rearranging Formulas", [html(String.raw`<div class="lecture-box">
  <h1>🔄 Rearranging Formulas</h1>
  <p><strong>Overview.</strong> A formula can be solved for any of its variables using the same inverse-operation rules as equations. This is essential for measurement and modelling.</p>

  <h2>📌 The Idea</h2>
  <p>Treat the variable you want as "the unknown" and isolate it, doing the same operation to both sides. For \( A=lw \), solving for \( l \): divide both sides by \( w \) → \( l=\dfrac{A}{w} \).</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Area of a rectangle</h3><p>Solve \( A=lw \) for \( w \).</p><div class="solution"><div class="step">Divide by \( l \): \( w=\dfrac{A}{l} \).</div><em>Conclusion: \( w=\dfrac{A}{l} \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Perimeter</h3><p>Solve \( P=2(l+w) \) for \( w \).</p><div class="solution"><div class="step">Divide by \(2\): \( \dfrac{P}{2}=l+w \).</div><div class="step">Subtract \( l \): \( w=\dfrac{P}{2}-l \).</div><em>Conclusion. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Circumference</h3><p>Solve \( C=2\pi r \) for \( r \).</p><div class="solution"><div class="step">Divide by \( 2\pi \): \( r=\dfrac{C}{2\pi} \).</div><em>Conclusion. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Distance–speed–time</h3><p>Solve \( d=vt \) for \( t \).</p><div class="solution"><div class="step">Divide by \( v \): \( t=\dfrac{d}{v} \).</div><em>Conclusion. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Line equation</h3><p>Solve \( y=mx+b \) for \( x \).</p><div class="solution"><div class="step">Subtract \( b \): \( y-b=mx \).</div><div class="step">Divide by \( m \): \( x=\dfrac{y-b}{m} \).</div><em>Conclusion. ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Solve \( A=lw \) for \( l \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( l=\dfrac{A}{w} \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \( d=vt \) for \( v \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( v=\dfrac{d}{t} \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Solve \( P=4s \) for \( s \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( s=\dfrac{P}{4} \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Solve \( y=mx+b \) for \( b \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( b=y-mx \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Solve \( A=\dfrac{1}{2}bh \) for \( h \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Multiply by \(2\), divide by \( b \). <em>Answer: \( h=\dfrac{2A}{b} \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Dividing by only part of the other side.</li><li>Forgetting a formula like \( P=2(l+w) \) needs the bracket handled first.</li><li>Mixing up which variable to isolate.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Is rearranging like solving?</h3><p><em>Yes — same inverse operations, but the "numbers" are letters.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why rearrange?</h3><p><em>To compute a different variable, or to graph in \( y=mx+b \) form.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: \( P=2(l+w) \) for \( w \)?</h3><p><em>\( w=\dfrac{P}{2}-l \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Order of steps?</h3><p><em>Undo the outermost operation on the target variable first.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Can the answer be a fraction?</h3><p><em>Yes — formulas often rearrange to a fraction.</em></p></div>
</div>`)]);

// ── 1.6 Modelling with Equations ─────────────────────────────
L("1.6", "Modelling with Equations", [html(String.raw`<div class="lecture-box">
  <h1>📝 Modelling with Equations</h1>
  <p><strong>Overview.</strong> The power of algebra is turning a real situation into an equation. This lesson translates words into equations, solves them, and interprets the answer.</p>

  <h2>📌 Strategy</h2>
  <ol class="math"><li>Define a variable (let \( x= \) the unknown).</li><li>Write an equation from the words.</li><li>Solve it.</li><li>Answer in a sentence and check it fits.</li></ol>

  <h2>📌 Cost Models</h2>
  <p>Many costs are linear: \( C=(\text{rate})x+(\text{fixed fee}) \). A plumber charging \$50 plus \$40/hour is \( C=40x+50 \) — the graph below lets you read the cost at any number of hours.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: A number problem</h3><p>Five more than twice a number is \(17\). Find the number.</p><div class="solution"><div class="step">\( 2x+5=17 \).</div><div class="step">\( 2x=12\Rightarrow x=6 \).</div><em>Conclusion: the number is \(6\). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Perimeter</h3><p>A rectangle's length is \(3\) m more than its width and its perimeter is \(26\) m. Find the width.</p><div class="solution"><div class="step">\( 2(w+3)+2w=26 \).</div><div class="step">\( 4w+6=26\Rightarrow w=5 \).</div><em>Conclusion: width \(5\) m. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Cost model</h3><p>A plumber charges \$50 plus \$40/hour. How long a job costs \$210?</p><div class="solution"><div class="step">\( 40x+50=210 \).</div><div class="step">\( 40x=160\Rightarrow x=4 \) hours.</div><em>Conclusion: \(4\) hours. ✓</em></div>
    ${gframe(["y = 40*x + 50", "y = 210"], { title: "C = 40x + 50  →  $210 at x = 4 h", labels: [{ x: 4, y: 210, t: "(4 h, $210)", c: "#a3327a" }], zoom: 1.1, ox: -3, oy: -120 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 4: Consecutive integers</h3><p>Three consecutive integers add to \(48\). Find them.</p><div class="solution"><div class="step">\( x+(x+1)+(x+2)=48 \).</div><div class="step">\( 3x+3=48\Rightarrow x=15 \).</div><em>Conclusion: \(15,16,17\). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Comparing two plans</h3><p>Plan A: \$5/visit. Plan B: \$3/visit plus \$4. When do they cost the same?</p><div class="solution"><div class="step">\( 5x=3x+4 \).</div><div class="step">\( 2x=4\Rightarrow x=2 \) visits.</div><em>Conclusion: \(2\) visits (both \$10). ✓</em></div>
    ${gframe(["y = 5*x", "y = 3*x + 4"], { title: "Plans equal at 2 visits ($10)", labels: [{ x: 2, y: 10, t: "(2, $10)", c: "#a3327a" }], zoom: 16 })}
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Seven less than three times a number is \(11\). Find the number.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3x-7=11\Rightarrow x=6 \). <em>Answer: \(6\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A taxi charges \$3 plus \$2/km. What distance costs \$15?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2d+3=15\Rightarrow d=6 \). <em>Answer: \(6\) km.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>A rectangle's length is twice its width; the perimeter is \(36\). Find the width.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2(2w)+2w=36\Rightarrow w=6 \). <em>Answer: \(6\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Two consecutive integers sum to \(35\). Find them.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x+(x+1)=35\Rightarrow x=17 \). <em>Answer: \(17,18\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Gym A: \$8/visit. Gym B: \$5/visit plus \$12. When is the cost equal?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 8x=5x+12\Rightarrow x=4 \). <em>Answer: \(4\) visits.</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Not defining the variable clearly.</li><li>Mistranslating "less than" (order matters).</li><li>Forgetting to answer the actual question in words.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: First step?</h3><p><em>Define a variable for the unknown.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: "Five more than twice a number"?</h3><p><em>\( 2x+5 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What does a cost model look like?</h3><p><em>\( C=(\text{rate})x+(\text{fixed fee}) \) — a line.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: How do two plans "cost the same"?</h3><p><em>Set the two expressions equal and solve.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Final step?</h3><p><em>State the answer in a sentence and check it makes sense.</em></p></div>
</div>`)]);

// ── 2.1 Rate of Change & Slope ───────────────────────────────
L("2.1", "Rate of Change & Slope", [html(String.raw`<div class="lecture-box">
  <h1>📈 Rate of Change & Slope</h1>
  <p><strong>Overview.</strong> Slope is the heart of linear relations: it measures a <strong>constant rate of change</strong>. This lesson finds slope from points, tables, and graphs.</p>

  <h2>📌 Slope = Rise over Run</h2>
  <p style="text-align:center;">\( m=\dfrac{\text{rise}}{\text{run}}=\dfrac{y_2-y_1}{x_2-x_1} \)</p>
  <p>It tells how much \( y \) changes for each \(1\) unit increase in \( x \). Positive rises, negative falls, zero is flat. Slide the slope below to feel it.</p>

  <h2>📌 From a Table</h2>
  <p>If \( x \) goes up by a constant step, slope \( =\dfrac{\Delta y}{\Delta x} \). For \( x:0,1,2 \) and \( y:3,5,7 \): \( \Delta y=2,\ \Delta x=1 \Rightarrow m=2 \).</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Slope from two points</h3><p>Find the slope through \( (1,2) \) and \( (4,8) \).</p><div class="solution"><div class="step">\( m=\dfrac{8-2}{4-1}=\dfrac{6}{3}=2 \).</div><em>Conclusion: \( m=2 \). ✓</em></div>
    ${gframe(["y = 2*x"], { title: "slope m = 2 through (1,2),(4,8)", labels: [{ x: 1, y: 2, t: "(1, 2)", c: "#2563a0" }, { x: 4, y: 8, t: "(4, 8)", c: "#2563a0" }], zoom: 18 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 2: Negative slope</h3><p>Find the slope through \( (-2,5) \) and \( (2,-3) \).</p><div class="solution"><div class="step">\( m=\dfrac{-3-5}{2-(-2)}=\dfrac{-8}{4}=-2 \).</div><em>Conclusion: \( m=-2 \) (falls). ✓</em>${gframe(["y = -2*x + 1"], { title: "slope -2 through (-2,5) and (2,-3)" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: From a table</h3><p>\( x:0,1,2,3 \), \( y:1,4,7,10 \). Find the rate of change.</p><div class="solution"><div class="step">Each \( \Delta x=1 \) gives \( \Delta y=3 \).</div><em>Conclusion: \( m=3 \). ✓</em>${gframe(["y = 3*x + 1"], { title: "table x:0..3, y:1,4,7,10 — a straight line of slope 3" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Horizontal line</h3><p>Find the slope through \( (1,4) \) and \( (5,4) \).</p><div class="solution"><div class="step">\( m=\dfrac{4-4}{5-1}=0 \).</div><em>Conclusion: \( m=0 \) — horizontal. ✓</em>${gframe(["y = 4"], { title: "through (1,4) and (5,4): a horizontal line, slope 0" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Rate in context</h3><p>A candle burns from \(20\) cm to \(8\) cm in \(4\) hours. Find the rate of change.</p><div class="solution"><div class="step">\( m=\dfrac{8-20}{4-0}=\dfrac{-12}{4}=-3 \).</div><em>Conclusion: \(-3\) cm/hour (shrinking). ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Slope through \( (0,1) \) and \( (3,7) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( m=2 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Slope through \( (2,5) \) and \( (6,1) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{1-5}{6-2} \). <em>Answer: \( -1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>From the table \( x:0,1,2 \), \( y:5,8,11 \), find the slope.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( m=3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Slope through \( (3,2) \) and \( (3,9) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Run is \(0\). <em>Answer: undefined (vertical).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A pool fills from \(30\) L to \(150\) L in \(8\) min. Find the rate.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \dfrac{150-30}{8}=15 \). <em>Answer: \(15\) L/min.</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Writing run over rise.</li><li>Subtracting points in different orders top vs bottom.</li><li>Calling a vertical line's slope \(0\) (it's undefined).</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does slope measure?</h3><p><em>The constant rate of change of \( y \) per unit \( x \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Slope of a horizontal line?</h3><p><em>\(0\).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Slope of a vertical line?</h3><p><em>Undefined (run \(=0\)).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: From a table?</h3><p><em>\( m=\dfrac{\Delta y}{\Delta x} \) when \( x \) steps evenly.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Units of slope?</h3><p><em>\( y\)-units per \( x\)-unit, e.g. cm/hour.</em></p></div>
</div>`),
  graph("m*x", "m", { xMin: -6, xMax: 6, yMin: -6, yMax: 6, paramMin: -3, paramMax: 3, paramInit: 1, caption: "y = m·x — slide m to feel the rate of change." })]);

// ── 2.2 Direct & Partial Variation ───────────────────────────
L("2.2", "Direct & Partial Variation", [html(String.raw`<div class="lecture-box">
  <h1>📊 Direct & Partial Variation</h1>
  <p><strong>Overview.</strong> Linear relations come in two types. <strong>Direct variation</strong> passes through the origin; <strong>partial variation</strong> has a starting value.</p>

  <h2>📌 Direct Variation</h2>
  <p>\( y=kx \): \( y \) is a constant multiple of \( x \), and the graph goes through \( (0,0) \). \( k \) is the constant of variation. Example: cost \( =2.5\times\)litres.</p>

  <h2>📌 Partial Variation</h2>
  <p>\( y=mx+b \): a fixed amount \( b \) plus a rate \( m \). Example: taxi cost \( =2d+3 \) — \$3 even before moving. The graph below: slide the intercept to see direct (through origin) vs partial.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Identify the type</h3><p>Is \( y=4x \) direct or partial?</p><div class="solution"><div class="step">No constant term → passes through \( (0,0) \).</div><em>Conclusion: direct variation, \( k=4 \). ✓</em>${gframe(["y = 4*x"], { title: "y = 4x: direct variation — a line straight through the origin" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Partial</h3><p>Is \( y=3x+5 \) direct or partial?</p><div class="solution"><div class="step">Starting value \( b=5\neq0 \).</div><em>Conclusion: partial; initial value \(5\), rate \(3\). ✓</em></div>
    ${gframe(["y = 3*x + 5"], { title: "Partial: initial value 5, rate 3", labels: [{ x: 0, y: 5, t: "(0, 5)", c: "#3b7d3b" }], zoom: 16 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 3: Find \( k \)</h3><p>\( y \) varies directly with \( x \), and \( y=12 \) when \( x=3 \). Find \( k \) and the equation.</p><div class="solution"><div class="step">\( k=\dfrac{y}{x}=\dfrac{12}{3}=4 \).</div><em>Conclusion: \( y=4x \). ✓</em>${gframe(["y = 4*x"], { title: "y = 4x passes through (3,12): the constant of variation is k = 4" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Write a partial model</h3><p>A gym charges \$20 to join plus \$5 per visit. Write the equation.</p><div class="solution"><div class="step">Fixed \(20\), rate \(5\).</div><em>Conclusion: \( C=5v+20 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Compare</h3><p>Plan A: \( C=2x \). Plan B: \( C=x+10 \). Which is cheaper at \( x=5 \)?</p><div class="solution"><div class="step">A: \(10\); B: \(15\).</div><em>Conclusion: Plan A is cheaper at \(5\). ✓</em></div>
    ${gframe(["y = 2*x", "y = x + 10"], { title: "Direct (2x) vs partial (x+10)", labels: [{ x: 10, y: 20, t: "equal at x=10", c: "#a3327a" }], zoom: 9 })}
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Is \( y=7x \) direct or partial?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Direct (\( k=7 \)).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Is \( y=2x-1 \) direct or partial?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Partial (initial \(-1\)).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( y \) varies directly with \( x \); \( y=20 \) at \( x=4 \). Find \( k \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( k=5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>A printer costs \$60 plus \$0.10 per page. Write the equation.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( C=0.10p+60 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>For \( C=4n+8 \), state the fixed cost and the rate, and find \( C \) at \( n=6 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Fixed \(8\), rate \(4\); \( C=32 \). <em>Answer: \$32.</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Calling a line through the origin "partial".</li><li>Forgetting the fixed value in a partial model.</li><li>Computing \( k \) as \( x/y \) instead of \( y/x \).</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Direct vs partial?</h3><p><em>Direct \( y=kx \) (through origin); partial \( y=mx+b \) (has a start value).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is \( k \)?</h3><p><em>The constant of variation, \( k=\dfrac{y}{x} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is \( b \)?</h3><p><em>The initial/fixed value where \( x=0 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Is direct variation linear?</h3><p><em>Yes — it's a line through the origin.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Real example of partial?</h3><p><em>A flat fee plus a per-unit rate (taxi, gym, phone plan).</em></p></div>
</div>`)]);

// ── 2.3 Slope–Intercept Form ─────────────────────────────────
L("2.3", "Slope–Intercept Form ($y = mx + b$)", [html(String.raw`<div class="lecture-box">
  <h1>📐 Slope–Intercept Form</h1>
  <p><strong>Overview.</strong> \( y=mx+b \) is the most useful form of a line: \( m \) is the slope and \( b \) is the \( y\)-intercept. Read them straight off.</p>

  <h2>📌 The Meaning of \( m \) and \( b \)</h2>
  <p>\( m \) = steepness/direction; \( b \) = where the line crosses the \( y\)-axis (\( x=0 \)). For \( y=2x-3 \): slope \(2\), \( y\)-intercept \(-3\). Slide \( m \) and \( b \) in the graph below.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Read \( m \) and \( b \)</h3><p>State the slope and \( y\)-intercept of \( y=-3x+5 \).</p><div class="solution"><div class="step">\( m=-3,\ b=5 \).</div><em>Conclusion: slope \(-3\), \( y\)-intercept \( (0,5) \). ✓</em>${gframe(["y = -3*x + 5"], { title: "y = -3x + 5: slope -3, y-intercept (0,5)" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Build from words</h3><p>Slope \(4\), \( y\)-intercept \(-2\). Write the equation.</p><div class="solution"><div class="step">\( y=mx+b \).</div><em>Conclusion: \( y=4x-2 \). ✓</em>${gframe(["y = 4*x - 2"], { title: "slope 4, y-intercept -2: y = 4x - 2" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: From standard form</h3><p>Write \( 2x+y=5 \) in slope–intercept form.</p><div class="solution"><div class="step">\( y=-2x+5 \).</div><em>Conclusion: slope \(-2\), \( b=5 \). ✓</em></div>
    ${gframe(["y = -2*x + 5"], { title: "y = −2x + 5", labels: [{ x: 0, y: 5, t: "(0, 5)", c: "#3b7d3b" }], zoom: 14 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 4: Divide to isolate \( y \)</h3><p>Write \( 4x-2y=6 \) in \( y=mx+b \) form.</p><div class="solution"><div class="step">\( -2y=-4x+6 \).</div><div class="step">Divide by \(-2\): \( y=2x-3 \).</div><em>Conclusion: slope \(2\), \( b=-3 \). ✓</em>${gframe(["y = 2*x - 3"], { title: "4x - 2y = 6 rearranges to y = 2x - 3" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Interpret in context</h3><p>A phone plan: \( C=0.10t+15 \). What do \(0.10\) and \(15\) mean?</p><div class="solution"><div class="step">\(0.10\) = cost per minute; \(15\) = fixed monthly fee.</div><em>Conclusion. ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Slope and \( y\)-intercept of \( y=5x-1 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( m=5,\ b=-1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Write the line with slope \( -\tfrac12 \), \( y\)-intercept \(4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( y=-\tfrac12x+4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Write \( 3x+y=7 \) in \( y=mx+b \) form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( y=-3x+7 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Write \( 6x-3y=9 \) in \( y=mx+b \) form.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( -3y=-6x+9 \). <em>Answer: \( y=2x-3 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A line has slope \(2\) and passes through \( (0,-4) \). Write it and find \( y \) at \( x=3 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( y=2x-4 \); at \( x=3 \), \( y=2 \). <em>Answer: \( (3,2) \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Forgetting to divide every term when isolating \( y \).</li><li>Reading \( b \) as the slope.</li><li>Sign errors moving the \( x\)-term across.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is \( m \)?</h3><p><em>The slope.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is \( b \)?</h3><p><em>The \( y\)-intercept (value of \( y \) when \( x=0 \)).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Why isolate \( y \)?</h3><p><em>So slope and intercept are visible and you can graph quickly.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Does dividing change the line?</h3><p><em>No — it's the same line in a friendlier form.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Negative \( b \)?</h3><p><em>The line crosses the \( y\)-axis below the origin.</em></p></div>
</div>`),
  graph("m*x + b", "b", { xMin: -6, xMax: 6, yMin: -6, yMax: 6, paramMin: -4, paramMax: 4, paramInit: 0, caption: "y = 1·x + b — slide b: the line slides up and down through (0, b)." })]);

// ── 2.4 Graphing Lines ───────────────────────────────────────
L("2.4", "Graphing Lines", [html(String.raw`<div class="lecture-box">
  <h1>✏️ Graphing Lines</h1>
  <p><strong>Overview.</strong> A picture makes a line clear. This lesson graphs from slope–intercept form, from a table, and from intercepts.</p>

  <h2>📌 From \( y=mx+b \)</h2>
  <p>Plot \( b \) on the \( y\)-axis, then step with the slope \( \tfrac{\text{rise}}{\text{run}} \). For \( y=2x-3 \): start at \( (0,-3) \), up \(2\) / right \(1\).</p>

  <h2>📌 From Intercepts</h2>
  <p>For \( Ax+By=C \), find both intercepts: set \( x=0 \) for the \( y\)-intercept, \( y=0 \) for the \( x\)-intercept; join them.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: From slope–intercept</h3><p>Graph \( y=2x-3 \).</p><div class="solution"><div class="step">Start at \( (0,-3) \), up \(2\)/right \(1\) to \( (1,-1) \).</div><em>Conclusion below. ✓</em></div>
    ${gframe(["y = 2*x - 3"], { title: "y = 2x − 3", labels: [{ x: 0, y: -3, t: "(0, −3)", c: "#3b7d3b" }, { x: 1, y: -1, t: "(1, −1)", c: "#2563a0" }], zoom: 18 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 2: Negative slope</h3><p>Graph \( y=-x+4 \).</p><div class="solution"><div class="step">Start at \( (0,4) \), down \(1\)/right \(1\).</div><em>Conclusion below. ✓</em></div>
    ${gframe(["y = -x + 4"], { title: "y = −x + 4", labels: [{ x: 0, y: 4, t: "(0, 4)", c: "#3b7d3b" }, { x: 4, y: 0, t: "(4, 0)", c: "#a3327a" }], zoom: 16 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 3: Using intercepts</h3><p>Graph \( 2x+3y=6 \).</p><div class="solution"><div class="step">\( x=0\Rightarrow y=2 \); \( y=0\Rightarrow x=3 \).</div><em>Join \( (0,2) \) and \( (3,0) \). ✓</em></div>
    ${gframe(["y = -2/3*x + 2"], { title: "2x + 3y = 6 via intercepts", labels: [{ x: 0, y: 2, t: "(0, 2)", c: "#3b7d3b" }, { x: 3, y: 0, t: "(3, 0)", c: "#a3327a" }], zoom: 16 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 4: Horizontal & vertical</h3><p>Graph \( y=3 \) and \( x=-2 \).</p><div class="solution"><div class="step">\( y=3 \) is horizontal; \( x=-2 \) is vertical.</div><em>Conclusion. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Fractional slope</h3><p>Graph \( y=\tfrac23x-1 \).</p><div class="solution"><div class="step">Start at \( (0,-1) \), up \(2\)/right \(3\).</div><em>Conclusion below. ✓</em></div>
    ${gframe(["y = 2/3*x - 1"], { title: "y = ⅔x − 1", labels: [{ x: 0, y: -1, t: "(0, −1)", c: "#3b7d3b" }, { x: 3, y: 1, t: "(3, 1)", c: "#2563a0" }], zoom: 18 })}
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Graph \( y=x+2 \): name two points.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( (0,2) \) and \( (1,3) \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Graph \( y=-2x+1 \): name two points.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( (0,1) \) and \( (1,-1) \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Find the intercepts of \( x+2y=4 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( (0,2) \) and \( (4,0) \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>What kind of line is \( y=-1 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Horizontal.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Graph \( 3x-4y=12 \) using intercepts.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( (4,0) \) and \( (0,-3) \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Stepping the slope the wrong direction.</li><li>Swapping the \( x\)- and \( y\)-intercepts.</li><li>Plotting only one point.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Where do I start?</h3><p><em>At the \( y\)-intercept \( b \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How many points to draw a line?</h3><p><em>Two.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Best method for \( Ax+By=C \)?</h3><p><em>Intercepts.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Slope of \( y=3 \)?</h3><p><em>\(0\) — horizontal.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: How to graph \( \tfrac23 \) slope?</h3><p><em>Up \(2\), right \(3\) from the intercept.</em></p></div>
</div>`)]);

// ── 2.5 Writing Equations of Lines ───────────────────────────
L("2.5", "Writing Equations of Lines", [html(String.raw`<div class="lecture-box">
  <h1>✒️ Writing Equations of Lines</h1>
  <p><strong>Overview.</strong> Given a slope and a point, two points, or a graph, you can write the line's equation \( y=mx+b \).</p>

  <h2>📌 From Slope and a Point</h2>
  <p>Use \( y=mx+b \): substitute \( m \) and the point to find \( b \). Slope \(2\) through \( (1,5) \): \( 5=2(1)+b\Rightarrow b=3 \), so \( y=2x+3 \).</p>

  <h2>📌 From Two Points</h2>
  <p>Find the slope first, then \( b \). Through \( (1,2) \) and \( (3,8) \): \( m=3 \), then \( 2=3(1)+b\Rightarrow b=-1 \), so \( y=3x-1 \).</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Slope + point</h3><p>Slope \(4\) through \( (0,-2) \).</p><div class="solution"><div class="step">\( b=-2 \) (the point is the intercept).</div><em>Conclusion: \( y=4x-2 \). ✓</em>${gframe(["y = 4*x - 2"], { title: "slope 4 through (0,-2): y = 4x - 2" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Slope + point (general)</h3><p>Slope \(-2\) through \( (3,1) \).</p><div class="solution"><div class="step">\( 1=-2(3)+b\Rightarrow b=7 \).</div><em>Conclusion: \( y=-2x+7 \). ✓</em></div>
    ${gframe(["y = -2*x + 7"], { title: "slope −2 through (3, 1)", labels: [{ x: 3, y: 1, t: "(3, 1)", c: "#2563a0" }], zoom: 12 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 3: Two points</h3><p>Through \( (1,2) \) and \( (3,8) \).</p><div class="solution"><div class="step">\( m=\dfrac{8-2}{3-1}=3 \).</div><div class="step">\( 2=3(1)+b\Rightarrow b=-1 \).</div><em>Conclusion: \( y=3x-1 \). ✓</em>${gframe(["y = 3*x - 1"], { title: "through (1,2) and (3,8): y = 3x - 1" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: From a graph</h3><p>A line crosses \( (0,4) \) and falls \(1\) for every \(2\) across. Write it.</p><div class="solution"><div class="step">\( m=-\tfrac12,\ b=4 \).</div><em>Conclusion: \( y=-\tfrac12x+4 \). ✓</em>${gframe(["y = -0.5*x + 4"], { title: "crosses (0,4) and falls 1 for every 2 across: y = -½x + 4" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Context</h3><p>A candle is \(20\) cm and burns \(3\) cm/hour. Write height \( h \) vs time \( t \).</p><div class="solution"><div class="step">Start \(20\), rate \(-3\).</div><em>Conclusion: \( h=-3t+20 \). ✓</em></div>
    ${gframe(["y = -3*x + 20"], { title: "h = −3t + 20 (candle)", labels: [{ x: 0, y: 20, t: "(0, 20)", c: "#3b7d3b" }, { x: 20 / 3, y: 0, t: "burns out", c: "#a3327a" }], zoom: 1.4, ox: -5, oy: -8 })}
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Slope \(3\) through \( (0,5) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( y=3x+5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Slope \(-1\) through \( (2,3) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3=-1(2)+b\Rightarrow b=5 \). <em>Answer: \( y=-x+5 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Through \( (0,1) \) and \( (2,7) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( m=3,\ b=1 \). <em>Answer: \( y=3x+1 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Through \( (1,4) \) and \( (3,4) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Slope \(0\). <em>Answer: \( y=4 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Through \( (-1,2) \) and \( (2,-7) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( m=-3 \); \( 2=-3(-1)+b\Rightarrow b=-1 \). <em>Answer: \( y=-3x-1 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Forgetting to find the slope first from two points.</li><li>Sign error when solving for \( b \).</li><li>Mixing up which value is \( x \) and which is \( y \).</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: From slope + point?</h3><p><em>Substitute into \( y=mx+b \) to find \( b \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: From two points?</h3><p><em>Find the slope first, then \( b \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: If the point is on the \( y\)-axis?</h3><p><em>That point's \( y \) is \( b \) directly.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Two points with equal \( y \)?</h3><p><em>Horizontal line \( y=\) that value.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: How to check?</h3><p><em>Both points should satisfy your equation.</em></p></div>
</div>`)]);

// ── 2.6 Interpreting Linear Models ───────────────────────────
L("2.6", "Interpreting Linear Models", [html(String.raw`<div class="lecture-box">
  <h1>🔎 Interpreting Linear Models</h1>
  <p><strong>Overview.</strong> A line can model cost, distance, or temperature. This lesson reads slope and intercept <em>in context</em> and uses the model to predict.</p>

  <h2>📌 Slope & Intercept in Context</h2>
  <p>In \( C=2d+3 \): the slope \(2\) is the cost per km (rate); the intercept \(3\) is the fixed fee (value at \( d=0 \)).</p>

  <h2>📌 Predicting</h2>
  <p>Substitute a value to predict. To find the cost at \(7\) km: \( C=2(7)+3=17 \). To find when the cost is \$23: solve \( 2d+3=23 \).</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Read the model</h3><p>A pool drains by \( V=-20t+500 \) (litres). What do \(-20\) and \(500\) mean?</p><div class="solution"><div class="step">\(-20\) = drains \(20\) L/min; \(500\) = starting volume.</div><em>Conclusion. ✓</em></div>
    ${gframe(["y = -20*x + 500"], { title: "V = −20t + 500 (draining)", labels: [{ x: 0, y: 500, t: "(0, 500)", c: "#3b7d3b" }, { x: 25, y: 0, t: "empty at 25 min", c: "#a3327a" }], zoom: 0.5, ox: -18, oy: -240 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 2: Predict a value</h3><p>For \( C=2d+3 \), find the cost of a \(10\) km trip.</p><div class="solution"><div class="step">\( C=2(10)+3=23 \).</div><em>Conclusion: \$23. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Predict the input</h3><p>For \( C=2d+3 \), how far for \$15?</p><div class="solution"><div class="step">\( 2d+3=15\Rightarrow d=6 \).</div><em>Conclusion: \(6\) km. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Interpret the intercept</h3><p>A phone plan is \( C=0.05t+20 \). What is the cost with \(0\) minutes?</p><div class="solution"><div class="step">\( C=20 \) — the fixed monthly fee.</div><em>Conclusion: \$20. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Compare two models</h3><p>Plan A: \( C=0.10t+10 \); Plan B: \( C=0.05t+20 \). Which is cheaper at \(100\) min?</p><div class="solution"><div class="step">A: \(20\); B: \(25\).</div><em>Conclusion: Plan A. ✓</em></div>
    ${gframe(["y = 0.10*x + 10", "y = 0.05*x + 20"], { title: "Plans equal at 200 min", labels: [{ x: 200, y: 30, t: "(200, $30)", c: "#a3327a" }], zoom: 0.6, ox: -150, oy: -18 })}
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>For \( C=3h+25 \), what is the fixed fee?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\$25.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>For \( C=3h+25 \), find \( C \) at \( h=4 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\$37.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>For \( C=3h+25 \), find \( h \) when \( C=49 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3h=24 \). <em>Answer: \(8\) h.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>For \( V=-5t+60 \), what does \(-5\) mean?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Decreasing \(5\) units per unit time.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>\( V=-5t+60 \): when is \( V=0 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 5t=60 \). <em>Answer: \( t=12 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Swapping the meaning of slope and intercept.</li><li>Predicting an input by substituting it as the output.</li><li>Ignoring units in the answer.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does slope mean in context?</h3><p><em>The rate of change (per-unit amount).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What does the intercept mean?</h3><p><em>The starting/fixed value at \( x=0 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Predict an output?</h3><p><em>Substitute the input and compute.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Predict an input?</h3><p><em>Set the model equal to the output and solve.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Comparing plans?</h3><p><em>Find where they're equal, then test on each side.</em></p></div>
</div>`)]);

// ── 4.1 Measurement Systems & Unit Conversion ────────────────
L("4.1", "Measurement Systems & Unit Conversion", [html(String.raw`<div class="lecture-box">
  <h1>📏 Measurement Systems & Unit Conversion</h1>
  <p><strong>Overview.</strong> Applied math uses two systems: <strong>metric</strong> (m, kg, L — powers of ten) and <strong>imperial</strong> (inch, foot, pound). This lesson converts within and between them.</p>

  <h2>📌 Metric (powers of 10)</h2>
  <p>km → m → cm → mm: each step ×10 (down) or ÷10 (up). \( 1 \text{ m}=100 \text{ cm} \), \( 1 \text{ km}=1000 \text{ m} \), \( 1 \text{ L}=1000 \text{ mL} \).</p>

  <h2>📌 Imperial</h2>
  <p>\( 1 \text{ ft}=12 \text{ in} \), \( 1 \text{ yd}=3 \text{ ft} \), \( 1 \text{ mile}=5280 \text{ ft} \), \( 1 \text{ lb}=16 \text{ oz} \).</p>

  <h2>📌 Between Systems</h2>
  <p>\( 1 \text{ in}=2.54 \text{ cm} \), \( 1 \text{ mile}\approx1.6 \text{ km} \), \( 1 \text{ kg}\approx2.2 \text{ lb} \). Multiply or divide by the conversion factor.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Metric (m → cm)</h3><p>Convert \( 3.5 \) m to cm.</p><div class="solution"><div class="step">\( \times100 \): \( 3.5\times100=350 \).</div><em>Conclusion: \(350\) cm. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Metric (mL → L)</h3><p>Convert \( 2500 \) mL to L.</p><div class="solution"><div class="step">\( \div1000 \): \( 2.5 \).</div><em>Conclusion: \(2.5\) L. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Imperial (ft → in)</h3><p>Convert \( 5 \) ft to inches.</p><div class="solution"><div class="step">\( \times12 \): \( 60 \).</div><em>Conclusion: \(60\) in. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Between (in → cm)</h3><p>Convert \( 10 \) in to cm.</p><div class="solution"><div class="step">\( \times2.54 \): \( 25.4 \).</div><em>Conclusion: \(25.4\) cm. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Between (km → miles)</h3><p>Convert \( 8 \) km to miles.</p><div class="solution"><div class="step">\( \div1.6 \): \( 5 \).</div><em>Conclusion: \(5\) miles. ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Convert \( 4.2 \) km to m.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4200\) m.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Convert \( 350 \) cm to m.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3.5\) m.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Convert \( 3 \) yd to feet.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(9\) ft.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Convert \( 5 \) kg to pounds.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \times2.2 \). <em>Answer: \(11\) lb.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A road is \( 12 \) miles. About how many km?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \times1.6 \). <em>Answer: \(\approx19.2\) km.</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Multiplying when you should divide (going to a bigger unit).</li><li>Mixing systems without converting first.</li><li>Forgetting \( 1 \text{ ft}=12 \text{ in} \), not \(10\).</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Metric step size?</h3><p><em>Powers of ten (×10 or ÷10 between adjacent units).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: m → cm?</h3><p><em>×100.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: in → cm?</h3><p><em>×2.54.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: km ↔ miles?</h3><p><em>1 mile ≈ 1.6 km.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: To a bigger unit, ×or÷?</h3><p><em>Divide (fewer of a larger unit).</em></p></div>
</div>`)]);

// ── 4.2 Surface Area of Prisms & Cylinders ───────────────────
L("4.2", "Surface Area of Prisms & Cylinders", [html(String.raw`<div class="lecture-box">
  <h1>📦 Surface Area of Prisms & Cylinders</h1>
  <p><strong>Overview.</strong> Surface area (SA) is the total area of every face. This lesson covers rectangular and triangular prisms and cylinders.</p>

  <h2>📌 Formulas</h2>
  <ul>
    <li><strong>Rectangular prism:</strong> \( SA=2(lw+lh+wh) \).</li>
    <li><strong>Cylinder:</strong> \( SA=2\pi r^2+2\pi rh \) (two circles + the wrap).</li>
    <li><strong>Triangular prism:</strong> \( SA=(\text{perimeter of triangle})\times\text{length}+2\times\text{area of triangle} \).</li>
  </ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Rectangular prism</h3><p>\( SA \) of a \( 4\times3\times2 \) box.</p><div class="solution"><div class="step">\( 2(12+8+6) \).</div><em>Conclusion: \( 52 \) units². ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Cube</h3><p>\( SA \) of a cube with side \(5\).</p><div class="solution"><div class="step">\( 6\times5^2 \).</div><em>Conclusion: \( 150 \) units². ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Cylinder</h3><p>\( SA \) of a cylinder, \( r=3,\ h=10 \).</p><div class="solution"><div class="step">\( 2\pi(9)+2\pi(3)(10)=18\pi+60\pi \).</div><em>Conclusion: \( 78\pi\approx245.0 \) units². ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Triangular prism</h3><p>Triangle legs \(3,4\) (hyp \(5\)), prism length \(10\).</p><div class="solution"><div class="step">Lateral: \( (3+4+5)\times10=120 \).</div><div class="step">Two triangles: \( 2\times\tfrac12(3)(4)=12 \).</div><em>Conclusion: \( 132 \) units². ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Open-top box</h3><p>\( SA \) of a \( 4\times4\times3 \) box with no top.</p><div class="solution"><div class="step">Base \(16\) + 4 sides \( 4\times(4\times3)=48 \).</div><em>Conclusion: \( 64 \) units². ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( SA \) of a \( 5\times2\times3 \) prism.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2(10+15+6) \). <em>Answer: \(62\) units².</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\( SA \) of a cube, side \(4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(96\) units².</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( SA \) of a cylinder \( r=2,\ h=5 \) (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 8\pi+20\pi \). <em>Answer: \(28\pi\approx88.0\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Lateral area of a cylinder \( r=3,\ h=7 \) (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2\pi(3)(7) \). <em>Answer: \(42\pi\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>\( SA \) of a triangular prism: triangle base \(6\), height \(4\) (sides \(5,5\)), length \(12\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Lateral \( (6+5+5)(12)=192 \); two triangles \( 2(\tfrac12\cdot6\cdot4)=24 \). <em>Answer: \(216\) units².</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Counting a face twice or missing one.</li><li>Using diameter instead of radius in the cylinder formula.</li><li>Forgetting the two triangular ends of a prism.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is surface area?</h3><p><em>The total area of all the faces of a solid.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Cylinder SA?</h3><p><em>\( 2\pi r^2+2\pi rh \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What units?</h3><p><em>Square units (cm², m², …).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Radius or diameter?</h3><p><em>Always the radius; halve the diameter first.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Open top?</h3><p><em>Leave out the missing face.</em></p></div>
</div>`)]);

// ── 4.3 Volume of Prisms & Cylinders ─────────────────────────
L("4.3", "Volume of Prisms & Cylinders", [html(String.raw`<div class="lecture-box">
  <h1>🧊 Volume of Prisms & Cylinders</h1>
  <p><strong>Overview.</strong> Volume measures the space inside. For any prism or cylinder, \( V=(\text{area of base})\times\text{height} \).</p>

  <h2>📌 Formulas</h2>
  <ul><li><strong>Rectangular prism:</strong> \( V=lwh \).</li><li><strong>Cylinder:</strong> \( V=\pi r^2 h \).</li><li><strong>Triangular prism:</strong> \( V=(\text{triangle area})\times\text{length} \).</li></ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Rectangular prism</h3><p>\( V \) of a \( 4\times3\times2 \) box.</p><div class="solution"><div class="step">\( 4\times3\times2 \).</div><em>Conclusion: \( 24 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Cube</h3><p>\( V \) of a cube, side \(5\).</p><div class="solution"><div class="step">\( 5^3 \).</div><em>Conclusion: \( 125 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Cylinder</h3><p>\( V \) of a cylinder \( r=3,\ h=10 \).</p><div class="solution"><div class="step">\( \pi(9)(10) \).</div><em>Conclusion: \( 90\pi\approx282.7 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Triangular prism</h3><p>Triangle area \(6\), length \(10\).</p><div class="solution"><div class="step">\( 6\times10 \).</div><em>Conclusion: \( 60 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Water tank</h3><p>A cylindrical tank \( r=2 \) m, \( h=5 \) m. Find the volume (exact and to 1 dp).</p><div class="solution"><div class="step">\( \pi(4)(5)=20\pi \).</div><em>Conclusion: \( 20\pi\approx62.8 \) m³. ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( V \) of a \( 6\times2\times3 \) prism.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(36\) units³.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\( V \) of a cube, side \(4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(64\) units³.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( V \) of a cylinder \( r=5,\ h=4 \) (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(100\pi\approx314.2\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( V \) of a triangular prism: triangle area \(10\), length \(7\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(70\) units³.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A cylinder holds \( 48\pi \) cm³ with \( r=4 \). Find its height.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \pi(16)h=48\pi\Rightarrow h=3 \). <em>Answer: \(3\) cm.</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Using square units for volume (it's cubic).</li><li>Using diameter instead of radius.</li><li>Forgetting volume = base area × height.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: General volume rule?</h3><p><em>\( V=(\text{base area})\times\text{height} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Cylinder volume?</h3><p><em>\( \pi r^2h \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Units?</h3><p><em>Cubic units (cm³, m³, …).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Find a missing height?</h3><p><em>Divide the volume by the base area.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: 1 L = ?</h3><p><em>\( 1000 \) cm³.</em></p></div>
</div>`)]);

// ── 4.4 Pyramids & Cones ─────────────────────────────────────
L("4.4", "Pyramids & Cones", [html(String.raw`<div class="lecture-box">
  <h1>🔺 Pyramids & Cones</h1>
  <p><strong>Overview.</strong> Pyramids and cones taper to a point, so their volume is <strong>one-third</strong> of the matching prism or cylinder.</p>

  <h2>📌 Formulas</h2>
  <ul>
    <li><strong>Volume:</strong> \( V=\tfrac13(\text{base area})\times h \). Cone: \( V=\tfrac13\pi r^2 h \).</li>
    <li><strong>Cone SA:</strong> \( SA=\pi r^2+\pi r s \) (\( s= \) slant height).</li>
    <li><strong>Square pyramid SA:</strong> base \( +\ \tfrac12(\text{perimeter})\times s \).</li>
    <li><strong>Slant height:</strong> \( s=\sqrt{r^2+h^2} \) (cone) — from the Pythagorean theorem.</li>
  </ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Cone volume</h3><p>\( V \) of a cone \( r=3,\ h=4 \).</p><div class="solution"><div class="step">\( \tfrac13\pi(9)(4)=12\pi \).</div><em>Conclusion: \( 12\pi\approx37.7 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Pyramid volume</h3><p>Square pyramid base \(6\times6\), height \(10\).</p><div class="solution"><div class="step">\( \tfrac13(36)(10) \).</div><em>Conclusion: \( 120 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Slant height</h3><p>Cone \( r=3,\ h=4 \). Find the slant height \( s \).</p><div class="solution"><div class="step">\( s=\sqrt{3^2+4^2}=\sqrt{25} \).</div><em>Conclusion: \( s=5 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Cone surface area</h3><p>Cone \( r=3,\ s=5 \). Find \( SA \).</p><div class="solution"><div class="step">\( \pi(9)+\pi(3)(5)=9\pi+15\pi \).</div><em>Conclusion: \( 24\pi\approx75.4 \) units². ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Pyramid surface area</h3><p>Square pyramid base \(6\), slant \(5\).</p><div class="solution"><div class="step">Base \(36\) + \( \tfrac12(24)(5)=60 \).</div><em>Conclusion: \( 96 \) units². ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( V \) of a cone \( r=6,\ h=10 \) (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac13\pi(36)(10) \). <em>Answer: \(120\pi\approx377.0\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\( V \) of a square pyramid base \(4\times4\), height \(9\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac13(16)(9) \). <em>Answer: \(48\) units³.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Slant height of a cone \( r=6,\ h=8 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{36+64} \). <em>Answer: \(10\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( SA \) of a cone \( r=5,\ s=13 \) (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 25\pi+65\pi \). <em>Answer: \(90\pi\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A cone has \( r=3,\ h=4 \). Find its total surface area (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( s=5 \); \( SA=9\pi+15\pi=24\pi \). <em>Answer: \(24\pi\approx75.4\).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Forgetting the \( \tfrac13 \) for pyramids/cones.</li><li>Using height instead of slant height in cone SA.</li><li>Not finding \( s \) with the Pythagorean theorem first.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Why \( \tfrac13 \)?</h3><p><em>A cone/pyramid holds one-third of its matching cylinder/prism.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Slant height?</h3><p><em>\( s=\sqrt{r^2+h^2} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Cone SA?</h3><p><em>\( \pi r^2+\pi r s \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Height vs slant?</h3><p><em>Height is vertical; slant runs up the surface. SA uses slant.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Pyramid volume?</h3><p><em>\( \tfrac13(\text{base area})h \).</em></p></div>
</div>`)]);

// ── 4.5 Spheres ──────────────────────────────────────────────
L("4.5", "Spheres", [html(String.raw`<div class="lecture-box">
  <h1>🌐 Spheres</h1>
  <p><strong>Overview.</strong> A sphere is the set of all points a fixed distance \( r \) from a centre. Two formulas describe it.</p>

  <h2>📌 Formulas</h2>
  <ul><li><strong>Volume:</strong> \( V=\tfrac43\pi r^3 \).</li><li><strong>Surface area:</strong> \( SA=4\pi r^2 \).</li><li><strong>Hemisphere</strong> (half): volume \( \tfrac12\cdot\tfrac43\pi r^3 \); curved area \( 2\pi r^2 \).</li></ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Volume</h3><p>\( V \) of a sphere \( r=3 \).</p><div class="solution"><div class="step">\( \tfrac43\pi(27)=36\pi \).</div><em>Conclusion: \( 36\pi\approx113.1 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Surface area</h3><p>\( SA \) of a sphere \( r=3 \).</p><div class="solution"><div class="step">\( 4\pi(9)=36\pi \).</div><em>Conclusion: \( 36\pi\approx113.1 \) units². ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Larger sphere</h3><p>\( V \) of a sphere \( r=6 \).</p><div class="solution"><div class="step">\( \tfrac43\pi(216)=288\pi \).</div><em>Conclusion: \( 288\pi\approx904.8 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: From diameter</h3><p>\( SA \) of a ball with diameter \(10\).</p><div class="solution"><div class="step">\( r=5 \): \( 4\pi(25)=100\pi \).</div><em>Conclusion: \( 100\pi\approx314.2 \) units². ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Hemisphere</h3><p>Volume of a hemisphere \( r=3 \).</p><div class="solution"><div class="step">\( \tfrac12(36\pi)=18\pi \).</div><em>Conclusion: \( 18\pi\approx56.5 \) units³. ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( V \) of a sphere \( r=2 \) (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac43\pi(8) \). <em>Answer: \(\tfrac{32}{3}\pi\approx33.5\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\( SA \) of a sphere \( r=5 \) (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(100\pi\approx314.2\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( SA \) of a sphere with diameter \(8\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( r=4 \). <em>Answer: \(64\pi\approx201.1\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( V \) of a hemisphere \( r=6 \) (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \tfrac12(288\pi) \). <em>Answer: \(144\pi\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A sphere has \( SA=36\pi \). Find its radius.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 4\pi r^2=36\pi\Rightarrow r^2=9 \). <em>Answer: \( r=3 \).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Swapping the volume and surface-area formulas.</li><li>Using the diameter as the radius.</li><li>Cubing only the number, not applying \( \tfrac43\pi \).</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Sphere volume?</h3><p><em>\( \tfrac43\pi r^3 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Sphere surface area?</h3><p><em>\( 4\pi r^2 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Given diameter?</h3><p><em>Halve it to get \( r \) first.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Hemisphere volume?</h3><p><em>Half the sphere's volume.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Find \( r \) from SA?</h3><p><em>Divide by \( 4\pi \), then square-root.</em></p></div>
</div>`)]);

// ── 4.6 Composite Figures & Measurement Problems ─────────────
L("4.6", "Composite Figures & Measurement Problems", [html(String.raw`<div class="lecture-box">
  <h1>🏗️ Composite Figures & Measurement Problems</h1>
  <p><strong>Overview.</strong> Real objects combine simple solids. Break a composite figure into known shapes, then <strong>add</strong> (or <strong>subtract</strong>) their measurements.</p>

  <h2>📌 Strategy</h2>
  <ol class="math"><li>Identify the simple solids (prism, cylinder, cone, hemisphere).</li><li>Compute each one's volume (or surface area).</li><li>Add the parts — or subtract a hollowed-out part.</li><li>For surface area, count only the <em>exposed</em> faces.</li></ol>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Silo (cylinder + hemisphere)</h3><p>A cylinder \( r=3,\ h=10 \) topped by a hemisphere \( r=3 \). Find the volume (exact).</p><div class="solution"><div class="step">Cylinder \( \pi(9)(10)=90\pi \).</div><div class="step">Hemisphere \( \tfrac12\cdot\tfrac43\pi(27)=18\pi \).</div><em>Conclusion: \( 108\pi\approx339.3 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: House (prism + triangular prism roof)</h3><p>Box \( 6\times4\times3 \) with a triangular-prism roof (triangle base \(6\), height \(2\), length \(4\)). Volume?</p><div class="solution"><div class="step">Box \( 72 \).</div><div class="step">Roof \( \tfrac12(6)(2)\times4=24 \).</div><em>Conclusion: \( 96 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Pipe (subtract a hole)</h3><p>A cylinder \( R=5 \) with a cylindrical hole \( r=3 \), length \(10\). Volume of material?</p><div class="solution"><div class="step">\( \pi(25)(10)-\pi(9)(10)=250\pi-90\pi \).</div><em>Conclusion: \( 160\pi\approx502.7 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Ice-cream cone + scoop</h3><p>Cone \( r=3,\ h=8 \) with a hemisphere \( r=3 \) scoop. Volume?</p><div class="solution"><div class="step">Cone \( \tfrac13\pi(9)(8)=24\pi \).</div><div class="step">Hemisphere \( 18\pi \).</div><em>Conclusion: \( 42\pi\approx131.9 \) units³. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Painting a solid (surface area)</h3><p>A cube side \(4\) sits on the ground (bottom not painted). Painted area?</p><div class="solution"><div class="step">\(5\) faces \( \times16=80 \).</div><em>Conclusion: \( 80 \) units². ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Cylinder \( r=2,\ h=6 \) + hemisphere \( r=2 \). Volume (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 24\pi+\tfrac{16}{3}\pi \). <em>Answer: \(\tfrac{88}{3}\pi\approx92.2\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Box \( 5\times5\times2 \) + pyramid (base \(5\times5\), height \(6\)). Volume.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 50+\tfrac13(25)(6)=50+50 \). <em>Answer: \(100\) units³.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>A washer: disc \( R=4 \) with hole \( r=2 \), thickness \(1\). Volume (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \pi(16)(1)-\pi(4)(1) \). <em>Answer: \(12\pi\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>A cube side \(3\) with a \(1\times1\times3\) hole drilled through. Volume.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 27-3 \). <em>Answer: \(24\) units³.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A silo: cylinder \( r=4,\ h=12 \) + cone top \( r=4,\ h=3 \). Volume (exact).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 192\pi+\tfrac13\pi(16)(3)=192\pi+16\pi \). <em>Answer: \(208\pi\approx653.5\).</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Adding surfaces that are hidden where parts join.</li><li>Forgetting to subtract a hollow part.</li><li>Mixing up which formula goes with which piece.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: First step?</h3><p><em>Break the figure into simple solids.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Add or subtract?</h3><p><em>Add parts that combine; subtract holes.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Surface area of composites?</h3><p><em>Count only exposed faces; drop hidden joins.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Hemisphere on a cylinder?</h3><p><em>Add their volumes; the circle where they meet isn't a surface.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Keep π exact?</h3><p><em>Yes until the end, then round if asked.</em></p></div>
</div>`)]);

// ── 5.1 Ratio, Proportion & Scale ────────────────────────────
L("5.1", "Ratio, Proportion & Scale", [html(String.raw`<div class="lecture-box">
  <h1>⚖️ Ratio, Proportion & Scale</h1>
  <p><strong>Overview.</strong> A <strong>ratio</strong> compares quantities; a <strong>proportion</strong> sets two ratios equal; a <strong>scale</strong> shrinks or enlarges by a constant factor. These ideas power similar triangles.</p>

  <h2>📌 Ratios & Proportions</h2>
  <p>Simplify a ratio like a fraction: \( 12:18=2:3 \). Solve a proportion by <strong>cross-multiplying</strong>: \( \dfrac34=\dfrac{x}{12}\Rightarrow 4x=36\Rightarrow x=9 \).</p>

  <h2>📌 Scale</h2>
  <p>A scale \( 1:50 \) means \(1\) unit on the drawing is \(50\) in real life. Real \( =\) drawing \( \times \) scale.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Simplify a ratio</h3><p>Simplify \( 12:18 \).</p><div class="solution"><div class="step">Divide both by \(6\).</div><em>Conclusion: \( 2:3 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Solve a proportion</h3><p>Solve \( \dfrac34=\dfrac{x}{12} \).</p><div class="solution"><div class="step">Cross-multiply: \( 4x=36 \).</div><em>Conclusion: \( x=9 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Scale drawing</h3><p>On a \( 1:50 \) plan a wall is \(4\) cm. Find the real length.</p><div class="solution"><div class="step">\( 4\times50=200 \) cm.</div><em>Conclusion: \(2\) m. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Recipe ratio</h3><p>Flour : sugar \(=3:1\). With \(9\) cups flour, how much sugar?</p><div class="solution"><div class="step">\( \dfrac31=\dfrac{9}{s}\Rightarrow s=3 \).</div><em>Conclusion: \(3\) cups. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Map scale</h3><p>A map is \( 1:100000 \). Two towns are \(7.5\) cm apart. Real distance?</p><div class="solution"><div class="step">\( 7.5\times100000=750000 \) cm.</div><em>Conclusion: \(7.5\) km. ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Simplify \( 20:35 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( 4:7 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \( \dfrac{5}{8}=\dfrac{x}{24} \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\( x=15 \).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>On a \( 1:25 \) model a car is \(18\) cm. Real length?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 18\times25 \). <em>Answer: \(450\) cm.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Paint mixes blue : white \(=2:5\). With \(10\) L blue, how much white?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(25\) L.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A \( 1:50000 \) map: two points are \(6\) cm apart. Real distance in km?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 6\times50000=300000 \) cm. <em>Answer: \(3\) km.</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Cross-multiplying the wrong pairs.</li><li>Mixing up drawing and real units.</li><li>Not simplifying the final ratio.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is a proportion?</h3><p><em>Two equal ratios.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How to solve one?</h3><p><em>Cross-multiply, then solve.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What does \( 1:50 \) mean?</h3><p><em>1 drawing unit = 50 real units.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Real from drawing?</h3><p><em>Multiply by the scale.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Why do ratios matter here?</h3><p><em>Similar triangles have proportional sides.</em></p></div>
</div>`)]);

// ── 5.4 The Pythagorean Theorem ──────────────────────────────
L("5.4", "The Pythagorean Theorem", [html(String.raw`<div class="lecture-box">
  <h1>📐 The Pythagorean Theorem</h1>
  <p><strong>Overview.</strong> In a right triangle, the square of the hypotenuse equals the sum of the squares of the legs: \( a^2+b^2=c^2 \), where \( c \) is the hypotenuse (opposite the right angle).</p>

  <h2>📌 Finding a Side</h2>
  <p><strong>Hypotenuse:</strong> \( c=\sqrt{a^2+b^2} \). <strong>Leg:</strong> \( a=\sqrt{c^2-b^2} \). The graph below marks a 3-4-5 right triangle.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Find the hypotenuse</h3><p>Legs \(3\) and \(4\). Find \( c \).</p><div class="solution"><div class="step">\( c=\sqrt{9+16}=\sqrt{25} \).</div><em>Conclusion: \( c=5 \). ✓</em></div>
    ${gframe([], { title: "3-4-5 right triangle", labels: [{ x: 0, y: 0, t: "(0,0)", c: "#2563a0" }, { x: 4, y: 0, t: "(4,0)", c: "#2563a0" }, { x: 4, y: 3, t: "(4,3)", c: "#a3327a" }], zoom: 26 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 2: Bigger triangle</h3><p>Legs \(6\) and \(8\). Find \( c \).</p><div class="solution"><div class="step">\( \sqrt{36+64}=\sqrt{100} \).</div><em>Conclusion: \( c=10 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Find a leg</h3><p>Hypotenuse \(13\), one leg \(5\). Find the other.</p><div class="solution"><div class="step">\( b=\sqrt{169-25}=\sqrt{144} \).</div><em>Conclusion: \( b=12 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Decimal answer</h3><p>Legs \(5\) and \(7\). Find \( c \) (1 dp).</p><div class="solution"><div class="step">\( \sqrt{25+49}=\sqrt{74} \).</div><em>Conclusion: \( c\approx8.6 \). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Application (ladder)</h3><p>A \(5\) m ladder's base is \(3\) m from a wall. How high up does it reach?</p><div class="solution"><div class="step">\( h=\sqrt{5^2-3^2}=\sqrt{16} \).</div><em>Conclusion: \(4\) m. ✓</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Legs \(8\) and \(15\). Find \( c \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{64+225} \). <em>Answer: \(17\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Legs \(9\) and \(12\). Find \( c \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(15\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Hypotenuse \(25\), leg \(7\). Find the other leg.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{625-49}=\sqrt{576} \). <em>Answer: \(24\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Legs \(2\) and \(6\). Find \( c \) (1 dp).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{40} \). <em>Answer: \(\approx6.3\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A TV is \(40\) in wide and \(30\) in tall. Find its diagonal.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \sqrt{1600+900}=\sqrt{2500} \). <em>Answer: \(50\) in.</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Using \( a^2+b^2=c^2 \) when the triangle isn't right-angled.</li><li>Treating a leg as the hypotenuse (\( c \) is the longest side).</li><li>Forgetting to square-root at the end.</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What is \( c \)?</h3><p><em>The hypotenuse — the side opposite the right angle (the longest).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Find a leg?</h3><p><em>\( a=\sqrt{c^2-b^2} \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Does it need a right angle?</h3><p><em>Yes — only right triangles.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Common triples?</h3><p><em>3-4-5, 5-12-13, 8-15-17, 7-24-25.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Exact vs decimal?</h3><p><em>Leave a radical for exact; round if a decimal is asked.</em></p></div>
</div>`)]);

// ── 7.5 Interpreting Quadratic Graphs in Context ─────────────
L("7.5", "Interpreting Quadratic Graphs in Context", [html(String.raw`<div class="lecture-box">
  <h1>🎯 Interpreting Quadratic Graphs in Context</h1>
  <p><strong>Overview.</strong> Parabolas model thrown objects, profit, and arches. The <strong>vertex</strong> is a maximum or minimum, the <strong>zeros</strong> are where the quantity is \(0\), and the <strong>\(y\)-intercept</strong> is the starting value.</p>

  <h2>📌 What Each Feature Means</h2>
  <ul>
    <li><strong>Vertex:</strong> the most/least — max height, max profit, lowest point.</li>
    <li><strong>Zeros (\(x\)-intercepts):</strong> when height \(=0\) (lands), break-even points.</li>
    <li><strong>\(y\)-intercept:</strong> the value at the start (\( x=0 \)).</li>
  </ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Projectile</h3><p>\( h=-5t^2+20t \). Find the maximum height and when it lands.</p><div class="solution"><div class="step">Vertex at \( t=2 \): \( h=-20+40=20 \).</div><div class="step">Zeros: \( -5t(t-4)=0\Rightarrow t=0,4 \).</div><em>Conclusion: max \(20\) m at \(2\) s; lands at \(4\) s. ✓</em></div>
    ${gframe(["y = -5*x^2 + 20*x"], { title: "h = −5t² + 20t", labels: [{ x: 2, y: 20, t: "max (2, 20)", c: "#a3327a" }, { x: 4, y: 0, t: "lands (4, 0)", c: "#3b7d3b" }], zoom: 12, ox: -2, oy: -9 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 2: Profit (break-even)</h3><p>\( P=-x^2+10x-16 \) (thousands). Find the break-even points and the max profit.</p><div class="solution"><div class="step">Zeros: \( (x-2)(x-8)=0\Rightarrow x=2,8 \).</div><div class="step">Vertex at \( x=5 \): \( P=-25+50-16=9 \).</div><em>Conclusion: break even at \(2\) and \(8\); max profit \(9\) at \(x=5\). ✓</em></div>
    ${gframe(["y = -x^2 + 10*x - 16"], { title: "P = −x² + 10x − 16", labels: [{ x: 5, y: 9, t: "max (5, 9)", c: "#a3327a" }, { x: 2, y: 0, t: "break-even", c: "#3b7d3b" }, { x: 8, y: 0, t: "break-even", c: "#3b7d3b" }], zoom: 12, ox: -2, oy: -6 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 3: Read the vertex</h3><p>A ball's path is \( y=-(x-3)^2+9 \). What is the greatest height and where?</p><div class="solution"><div class="step">Vertex \( (3,9) \).</div><em>Conclusion: max height \(9\) at \(x=3\). ✓</em>${gframe(["y = -(x-3)^2 + 9"], { title: "y = -(x-3)² + 9: the vertex (3,9) is the greatest height" })}</div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Starting value</h3><p>\( h=-5t^2+10t+15 \). How high was the object released?</p><div class="solution"><div class="step">At \( t=0 \): \( h=15 \).</div><em>Conclusion: released from \(15\) m. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: When does it land?</h3><p>\( h=-5t^2+10t+15 \). Find the landing time.</p><div class="solution"><div class="step">\( -5t^2+10t+15=0\Rightarrow t^2-2t-3=0\Rightarrow (t-3)(t+1)=0 \).</div><em>Conclusion: \( t=3 \) s. ✓</em></div>
    ${gframe(["y = -5*x^2 + 10*x + 15"], { title: "h = −5t² + 10t + 15", labels: [{ x: 0, y: 15, t: "start (0, 15)", c: "#3b7d3b" }, { x: 3, y: 0, t: "lands (3, 0)", c: "#a3327a" }], zoom: 10, ox: -2, oy: -8 })}
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\( h=-5t^2+30t \). When does it land?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( -5t(t-6)=0 \). <em>Answer: \(6\) s.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\( h=-5t^2+30t \). Find the maximum height.</p><details><summary>View answer</summary><div class="solution"><div class="step">Vertex \( t=3 \): \( h=45 \). <em>Answer: \(45\) m.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\( y=(x-4)^2-9 \). What are the zeros?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( (x-4)^2=9\Rightarrow x=1,7 \). <em>Answer: \(1\) and \(7\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\( P=-(x-5)^2+12 \). What is the maximum profit and where?</p><details><summary>View answer</summary><div class="solution"><div class="step">Vertex \( (5,12) \). <em>Answer: \(12\) at \(x=5\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>\( h=-5t^2+20t+25 \). Find the max height and the landing time.</p><details><summary>View answer</summary><div class="solution"><div class="step">Vertex \( t=2 \): \( h=45 \). Land: \( t^2-4t-5=0\Rightarrow t=5 \). <em>Answer: max \(45\) m; lands at \(5\) s.</em></div></div></details></div>

  <div class="mistake-box" style="${MI}"><h3>⚠️ Common Mistakes</h3><ul><li>Reporting the \(t\)-value as the height (use the \(y\)-value at the vertex).</li><li>Taking a negative time as a real answer.</li><li>Confusing the \(y\)-intercept (start) with the vertex (max/min).</li></ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does the vertex tell you?</h3><p><em>The maximum or minimum value (and where it happens).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What do the zeros mean?</h3><p><em>Where the quantity is \(0\) — landing time, break-even.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is the \(y\)-intercept?</h3><p><em>The starting value at \( x=0 \).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q4: Max height — \(t\) or \(h\)?</h3><p><em>The height is the \(y\)-value at the vertex; \(t\) is when.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q5: Reject which root?</h3><p><em>A negative time (or other impossible value) in context.</em></p></div>
</div>`)]);
