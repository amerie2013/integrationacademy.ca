// MCV4U Unit 2 — Derivative Rules. Deep single-card lessons with f-vs-f' graphs.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u2 = {};

u2["2.1"] = L("2.1", "Power, Constant & Sum Rules", [
  html(String.raw`<div class="lecture-box">
  <h1>⚡ Power, Constant &amp; Sum Rules</h1>
  <p><strong>Overview.</strong> First principles is the definition — but you rarely need it. The <strong>power rule</strong> \(\frac{d}{dx}x^n=nx^{n-1}\), together with the <strong>constant-multiple</strong> and <strong>sum/difference</strong> rules, differentiates any polynomial in seconds. The same power rule handles negative and fractional exponents once you rewrite radicals and reciprocals as powers.</p>
  <h2>📌 The rules</h2>
  <ul>
    <li><strong>Power:</strong> \(\frac{d}{dx}x^n=nx^{n-1}\) (any real \(n\)). <strong>Constant:</strong> \(\frac{d}{dx}c=0\).</li>
    <li><strong>Constant multiple:</strong> \(\frac{d}{dx}[c\,f]=c\,f'\). <strong>Sum/Difference:</strong> \((f\pm g)'=f'\pm g'\).</li>
    <li>Rewrite first: \(\sqrt{x}=x^{1/2}\), \(\dfrac1{x^k}=x^{-k}\).</li>
  </ul>
  ${gframe(["y = x^3 - 3*x", "y = 3*x^2 - 3"], { title: "f(x)=x³−3x and f'(x)=3x²−3: f' is zero exactly where f has its turning points (x = ±1)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Power rule</h3><p>Differentiate \(f(x)=x^5\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(nx^{n-1}=5x^{4}\).</div><em>Conclusion: \(f'(x)=5x^4\). ✓</em></div>${gframe(["y = x^5", "y = 5*x^4"], { title: "f(x)=x⁵ and its derivative f'(x)=5x⁴" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: A whole polynomial</h3><p>Differentiate \(f(x)=3x^4-2x^2+7\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Term by term: \(3(4x^3)-2(2x)+0\).</div><em>Conclusion: \(f'(x)=12x^3-4x\) (the constant \(7\) vanishes). ✓</em></div>${gframe(["y = 3*x^4 - 2*x^2 + 7", "y = 12*x^3 - 4*x"], { title: "f(x)=3x⁴−2x²+7 and its derivative 12x³−4x" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Negative &amp; fractional exponents (radical + reciprocal)</h3><p>Differentiate \(f(x)=\sqrt{x}+\dfrac1{x^2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Rewrite: \(x^{1/2}+x^{-2}\).</div><div class="step"><strong>Step 2:</strong> Power rule: \(\tfrac12x^{-1/2}-2x^{-3}\).</div><em>Conclusion: \(f'(x)=\dfrac1{2\sqrt{x}}-\dfrac2{x^3}\). ✓</em></div>${gframe(["y = sqrt(x) + 1/x^2", "y = 1/(2*sqrt(x)) - 2/x^3"], { title: "f(x)=√x+1/x² and its derivative" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Slope at a point</h3><p>For \(f(x)=x^3-3x\), find the slope of the tangent at \(x=2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=3x^2-3\); \(f'(2)=3(4)-3\).</div><em>Conclusion: slope \(=9\). ✓</em></div>${gframe(["y = x^3 - 3*x", "y = 3*x^2 - 3"], { title: "f(x)=x³−3x and f'(x)=3x²−3: at x=2 the height of f' is 9" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Where is the tangent horizontal?</h3><p>Find where \(f(x)=x^3-3x\) has a horizontal tangent.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Set \(f'(x)=3x^2-3=0\).</div><div class="step"><strong>Step 2:</strong> \(x^2=1\Rightarrow x=\pm1\) — exactly where \(f'\) crosses zero.</div><em>Conclusion: at \(x=1\) and \(x=-1\). ✓</em></div>${gframe(["y = x^3 - 3*x"], { title: "f(x)=x³−3x: the tangent is horizontal at the peak (x=−1) and valley (x=1)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Differentiate \(f(x)=x^7\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(7x^6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Differentiate \(f(x)=4x^3-6x^2+x-9\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(12x^2-12x+1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Differentiate \(f(x)=\dfrac1{x^3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^{-3}\to-3x^{-4}=-\dfrac3{x^4}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(f'(1)\) for \(f(x)=x^4-2x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'(x)=4x^3-2\Rightarrow f'(1)=2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Where does \(f(x)=x^2-4x\) have a horizontal tangent?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'(x)=2x-4=0\Rightarrow x=2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the power rule?</h3><p><em>\(\frac{d}{dx}x^n=nx^{n-1}\), for any real \(n\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What happens to a constant?</h3><p><em>Its derivative is \(0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you handle \(\sqrt{x}\) or \(\tfrac1{x^k}\)?</h3><p><em>Rewrite as a power first: \(x^{1/2}\), \(x^{-k}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does \(f'(a)=0\) mean?</h3><p><em>A horizontal tangent — a turning point of \(f\).</em></p></div>
</div>`),
]);

u2["2.2"] = L("2.2", "Product & Quotient Rules", [
  html(String.raw`<div class="lecture-box">
  <h1>✖️ Product &amp; Quotient Rules</h1>
  <p><strong>Overview.</strong> The derivative of a product is <em>not</em> the product of the derivatives. The <strong>product rule</strong> is \((fg)'=f'g+fg'\), and the <strong>quotient rule</strong> is \(\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}\). They let you differentiate combinations you can't (or don't want to) expand.</p>
  <h2>📌 The rules</h2>
  <ul>
    <li><strong>Product:</strong> \((fg)'=f'g+fg'\).</li>
    <li><strong>Quotient:</strong> \(\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}\) (order matters — top derivative first).</li>
  </ul>
  ${gframe(["y = x^2*(x-3)", "y = 3*x^2 - 6*x"], { title: "f(x)=x²(x−3)=x³−3x² and its derivative 3x²−6x: f' is zero at x=0 and x=2" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Product rule</h3><p>Differentiate \(f(x)=x^2(x+1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'=2x(x+1)+x^2(1)\).</div><div class="step"><strong>Step 2:</strong> Simplify: \(2x^2+2x+x^2\).</div><em>Conclusion: \(3x^2+2x\) (check: expand to \(x^3+x^2\), derivative \(3x^2+2x\) ✓). ✓</em></div>${gframe(["y = x^2*(x+1)", "y = 3*x^2 + 2*x"], { title: "f(x)=x²(x+1) and its derivative 3x²+2x" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Two nontrivial factors</h3><p>Differentiate \(f(x)=(2x+1)(x^2-3)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'=2(x^2-3)+(2x+1)(2x)\).</div><div class="step"><strong>Step 2:</strong> \(2x^2-6+4x^2+2x\).</div><em>Conclusion: \(6x^2+2x-6\). ✓</em></div>${gframe(["y = (2*x+1)*(x^2-3)", "y = 6*x^2 + 2*x - 6"], { title: "f(x)=(2x+1)(x²−3) and its derivative 6x²+2x−6" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Quotient rule</h3><p>Differentiate \(f(x)=\dfrac{x+1}{x-1}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{(1)(x-1)-(x+1)(1)}{(x-1)^2}\).</div><div class="step"><strong>Step 2:</strong> Numerator \(=x-1-x-1=-2\).</div><em>Conclusion: \(f'(x)=\dfrac{-2}{(x-1)^2}\). ✓</em></div>${gframe(["y = (x+1)/(x-1)", "y = -2/(x-1)^2"], { title: "f(x)=(x+1)/(x−1) and its derivative −2/(x−1)² (always negative)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Quotient with a polynomial top</h3><p>Differentiate \(f(x)=\dfrac{x^2}{x+1}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{2x(x+1)-x^2(1)}{(x+1)^2}\).</div><div class="step"><strong>Step 2:</strong> Numerator \(=2x^2+2x-x^2=x^2+2x\).</div><em>Conclusion: \(f'(x)=\dfrac{x^2+2x}{(x+1)^2}\). ✓</em></div>${gframe(["y = x^2/(x+1)", "y = (x^2+2*x)/(x+1)^2"], { title: "f(x)=x²/(x+1) and its derivative" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Work from a table of values</h3><p>Given \(f(2)=3,\ f'(2)=1,\ g(2)=4,\ g'(2)=-2\), find \((fg)'(2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((fg)'=f'g+fg'\Rightarrow (1)(4)+(3)(-2)\).</div><em>Conclusion: \(4-6=-2\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Differentiate \(f(x)=x^3(x-2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3x^2(x-2)+x^3=4x^3-6x^2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Differentiate \(f(x)=(x+2)(x^2+1)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x^2+1)+(x+2)(2x)=3x^2+4x+1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Differentiate \(f(x)=\dfrac{x}{x+2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{(x+2)-x}{(x+2)^2}=\dfrac{2}{(x+2)^2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Differentiate \(f(x)=\dfrac{x-1}{x+1}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{(x+1)-(x-1)}{(x+1)^2}=\dfrac{2}{(x+1)^2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>With \(f(1)=2,f'(1)=3,g(1)=5,g'(1)=-1\), find \((fg)'(1)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3)(5)+(2)(-1)=13\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the product rule?</h3><p><em>\((fg)'=f'g+fg'\) — not \(f'g'\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the quotient rule?</h3><p><em>\(\dfrac{f'g-fg'}{g^2}\) — top derivative first, then square the bottom.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Can you avoid the product rule?</h3><p><em>Sometimes — if expanding is easy, expand and use the power rule.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why does order matter in the quotient rule?</h3><p><em>The minus sign: \(f'g-fg'\ne fg'-f'g\).</em></p></div>
</div>`),
]);

// ── Lesson 2.3 layout helpers: every solution follows Step 1 identify → Step 2 apply the rule → Step 3 simplify ──
const cstep = (n, label, text) => `<div class="step"><strong>Step ${n}${label ? ` (${label})` : ""}:</strong> ${text}</div>`;
const cex = (title, prompt, steps, concl, extra = "") =>
  `<div class="example-box" ${EX}><h3>${title}</h3><p>${prompt}</p><div class="solution">${steps.map(([l, t], i) => cstep(i + 1, l, t)).join("")}<em>Conclusion: ${concl} ✓</em></div>${extra}</div>`;
const cpr = (n, prompt, steps, concl) =>
  `<div class="practice-box" ${PR}><h3>Question ${n}</h3><p>${prompt}</p><details><summary>View answer</summary><div class="solution">${steps.map(([l, t], i) => cstep(i + 1, l, t)).join("")}<em>Conclusion: ${concl} ✓</em></div></details></div>`;
const cqa = (q, a) => `<div class="qa-box" ${QA}><h3>${q}</h3><p><em>${a}</em></p></div>`;
const cr = String.raw;
// the two lines shown in Step 1: outer and inner, each with its derivative
const OI = (outer, outerD, inner, innerD) => cr`<span style="display:block;margin:4px 0 0 14px;">Outer: \(${outer}\ \Rightarrow\ ${outerD}\)</span><span style="display:block;margin:2px 0 4px 14px;">Inner: \(g(x)=${inner}\ \Rightarrow\ g'(x)=${innerD}\)</span>`;

u2["2.3"] = L("2.3", "The Chain Rule", [
  html(`<div class="lecture-box">
  <h1>🔗 The Chain Rule</h1>
  ${cr`<p><strong>Overview.</strong> Composite functions — a function inside a function — need the <strong>chain rule</strong>: \(\dfrac{d}{dx}f\big(g(x)\big)=f'\big(g(x)\big)\cdot g'(x)\). In words: <em>derivative of the outside (leaving the inside alone), times the derivative of the inside.</em> The most common case is a power of a function: \(\dfrac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x)\).</p>
  <h2>📌 The rule</h2>
  <ul>
    <li><strong>Chain rule:</strong> \(\dfrac{d}{dx}f(g(x))=f'(g(x))\cdot g'(x)\).</li>
    <li><strong>Power of a function:</strong> \(\dfrac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}\,g'(x)\).</li>
  </ul>
  <h2>🧭 A three-step layout for every chain-rule problem</h2>
  <ol>
    <li><strong>Identify.</strong> Split the function into the <em>outer</em> function (the operation done last: the power, the root, the reciprocal) and the <em>inner</em> function \(g(x)\) (what sits inside the brackets or root). Write the derivative of each.</li>
    <li><strong>Apply the rule.</strong> Take the derivative of the outer function, leave \(g(x)\) unchanged inside it, and multiply by \(g'(x)\).</li>
    <li><strong>Simplify.</strong> Multiply the constants, and factor if you can.</li>
  </ol>
  <div style="overflow-x:auto;margin:10px 0;"><table style="border-collapse:collapse;font-size:14px;">
    <thead><tr style="background:#eef2ff;color:#3730a3;"><th style="border:1px solid #c7d2fe;padding:6px 10px;">Function</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Outer</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Inner \(g(x)\)</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">\((x^2+1)^3\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\([g(x)]^3\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(x^2+1\)</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\sqrt{x^2+1}\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\sqrt{g(x)}=[g(x)]^{1/2}\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(x^2+1\)</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\dfrac1{(x+1)^2}\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\([g(x)]^{-2}\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(x+1\)</td></tr>
    </tbody>
  </table></div>`}
  ${gframe(["y = (x^2-1)^2", "y = 4*x*(x^2-1)"], { title: "f(x)=(x²−1)² and its chain-rule derivative 4x(x²−1): f' is zero at x=0, ±1" })}
  <h2>🔵 Examples</h2>
  ${cex("Example 1: Power of a function", cr`Differentiate \(f(x)=(x^2+1)^3\).`, [
    ["identify the outer and inner functions", cr`Write \(f(x)=(x^2+1)^3\) as a power of the inner function.${OI("[g(x)]^3", "3[g(x)]^2", "x^2+1", "2x")}`],
    ["apply the chain rule", cr`Take the outer derivative, keep \(g(x)=x^2+1\) inside it, and multiply by \(g'(x)\):\[\begin{aligned}f'(x)&=3\,[g(x)]^2\cdot g'(x)\\&=3\,(x^2+1)^2\cdot 2x\end{aligned}\]`],
    ["simplify", cr`Multiply the constants \(3\cdot2x=6x\): \(f'(x)=6x\,(x^2+1)^2\).`]],
    cr`\(f'(x)=6x\,(x^2+1)^2\).`, gframe(["y = (x^2+1)^3", "y = 6*x*(x^2+1)^2"], { title: "f(x)=(x²+1)³ and its derivative 6x(x²+1)² — zoom out to see the growth" }))}
  ${cex("Example 2: Radical (fractional power)", cr`Differentiate \(f(x)=\sqrt{x^2+1}\).`, [
    ["identify the outer and inner functions", cr`Rewrite the root as a power: \(f(x)=(x^2+1)^{1/2}\).${OI("[g(x)]^{1/2}", cr`\tfrac12[g(x)]^{-1/2}`, "x^2+1", "2x")}`],
    ["apply the chain rule", cr`\[\begin{aligned}f'(x)&=\tfrac12\,[g(x)]^{-1/2}\cdot g'(x)\\&=\tfrac12\,(x^2+1)^{-1/2}\cdot 2x\end{aligned}\]`],
    ["simplify", cr`Multiply \(\tfrac12\cdot2x=x\), then write the negative power as a denominator: \(f'(x)=x\,(x^2+1)^{-1/2}=\dfrac{x}{\sqrt{x^2+1}}\).`]],
    cr`\(f'(x)=\dfrac{x}{\sqrt{x^2+1}}\).`, gframe(["y = sqrt(x^2+1)", "y = x/sqrt(x^2+1)"], { title: "f(x)=√(x²+1) and its derivative x/√(x²+1) (which levels off at ±1)" }))}
  ${cex("Example 3: Linear inside", cr`Differentiate \(f(x)=(3x-2)^5\).`, [
    ["identify the outer and inner functions", cr`\(f(x)=(3x-2)^5\) is a fifth power of a linear function.${OI("[g(x)]^5", "5[g(x)]^4", "3x-2", "3")}`],
    ["apply the chain rule", cr`\[\begin{aligned}f'(x)&=5\,[g(x)]^4\cdot g'(x)\\&=5\,(3x-2)^4\cdot 3\end{aligned}\]`],
    ["simplify", cr`Multiply the constants \(5\cdot3=15\): \(f'(x)=15\,(3x-2)^4\).`]],
    cr`\(f'(x)=15\,(3x-2)^4\).`)}
  ${cex("Example 4: Cubic inside", cr`Differentiate \(f(x)=(x^3+x)^4\).`, [
    ["identify the outer and inner functions", cr`\(f(x)=(x^3+x)^4\) is a fourth power of a cubic.${OI("[g(x)]^4", "4[g(x)]^3", "x^3+x", "3x^2+1")}`],
    ["apply the chain rule", cr`\[\begin{aligned}f'(x)&=4\,[g(x)]^3\cdot g'(x)\\&=4\,(x^3+x)^3\cdot(3x^2+1)\end{aligned}\]`],
    ["simplify", cr`Nothing more to multiply out; write the factors in a neat order: \(f'(x)=4\,(3x^2+1)\,(x^3+x)^3\).`]],
    cr`\(f'(x)=4\,(3x^2+1)\,(x^3+x)^3\).`)}
  ${cex("Example 5: Chain inside a product", cr`Differentiate \(f(x)=x\,(2x+1)^3\).`, [
    ["identify the rules needed", cr`\(f(x)=x\,(2x+1)^3\) is a <strong>product</strong> of \(p(x)=x\) and \(q(x)=(2x+1)^3\), and \(q\) is a <strong>composite</strong>, so use the product rule and the chain rule together.`],
    ["differentiate each part", cr`\(p'(x)=1\). For \(q(x)=(2x+1)^3\) use the chain rule:${OI("[g(x)]^3", "3[g(x)]^2", "2x+1", "2")}\[\begin{aligned}q'(x)&=3\,[g(x)]^2\cdot g'(x)\\&=3\,(2x+1)^2\cdot 2\\&=6\,(2x+1)^2\end{aligned}\]`],
    ["apply the product rule", cr`\[\begin{aligned}f'(x)&=p'(x)\,q(x)+p(x)\,q'(x)\\&=(1)(2x+1)^3+x\cdot 6\,(2x+1)^2\end{aligned}\]`],
    ["simplify by factoring", cr`Factor out the common factor \((2x+1)^2\):\[\begin{aligned}f'(x)&=(2x+1)^2\big[(2x+1)+6x\big]\\&=(2x+1)^2\,(8x+1)\end{aligned}\]`]],
    cr`\(f'(x)=(2x+1)^2\,(8x+1)\).`, gframe(["y = x*(2*x+1)^3", "y = (2*x+1)^2*(8*x+1)"], { title: "f(x)=x(2x+1)³ and its derivative (2x+1)²(8x+1)" }))}
  <h2>🟡 Practice Questions</h2>
  ${cpr(1, cr`Differentiate \(f(x)=(x^2-4)^3\).`, [
    ["identify", cr`${OI("[g(x)]^3", "3[g(x)]^2", "x^2-4", "2x")}`],
    ["apply the chain rule", cr`\[\begin{aligned}f'(x)&=3\,[g(x)]^2\cdot g'(x)\\&=3\,(x^2-4)^2\cdot 2x\end{aligned}\]`],
    ["simplify", cr`\(f'(x)=6x\,(x^2-4)^2\).`]],
    cr`\(f'(x)=6x\,(x^2-4)^2\).`)}
  ${cpr(2, cr`Differentiate \(f(x)=(5x+1)^4\).`, [
    ["identify", cr`${OI("[g(x)]^4", "4[g(x)]^3", "5x+1", "5")}`],
    ["apply the chain rule", cr`\[\begin{aligned}f'(x)&=4\,[g(x)]^3\cdot g'(x)\\&=4\,(5x+1)^3\cdot 5\end{aligned}\]`],
    ["simplify", cr`\(f'(x)=20\,(5x+1)^3\).`]],
    cr`\(f'(x)=20\,(5x+1)^3\).`)}
  ${cpr(3, cr`Differentiate \(f(x)=\sqrt{2x+1}\).`, [
    ["identify", cr`Rewrite \(f(x)=(2x+1)^{1/2}\).${OI("[g(x)]^{1/2}", cr`\tfrac12[g(x)]^{-1/2}`, "2x+1", "2")}`],
    ["apply the chain rule", cr`\[\begin{aligned}f'(x)&=\tfrac12\,[g(x)]^{-1/2}\cdot g'(x)\\&=\tfrac12\,(2x+1)^{-1/2}\cdot 2\end{aligned}\]`],
    ["simplify", cr`\(\tfrac12\cdot2=1\), so \(f'(x)=(2x+1)^{-1/2}=\dfrac1{\sqrt{2x+1}}\).`]],
    cr`\(f'(x)=\dfrac1{\sqrt{2x+1}}\).`)}
  ${cpr(4, cr`Differentiate \(f(x)=(x^2+3x)^5\).`, [
    ["identify", cr`${OI("[g(x)]^5", "5[g(x)]^4", "x^2+3x", "2x+3")}`],
    ["apply the chain rule", cr`\[\begin{aligned}f'(x)&=5\,[g(x)]^4\cdot g'(x)\\&=5\,(x^2+3x)^4\cdot(2x+3)\end{aligned}\]`],
    ["simplify", cr`Write the factors in a neat order: \(f'(x)=5\,(2x+3)\,(x^2+3x)^4\).`]],
    cr`\(f'(x)=5\,(2x+3)\,(x^2+3x)^4\).`)}
  ${cpr(5, cr`Differentiate \(f(x)=\dfrac1{(x+1)^2}\).`, [
    ["identify", cr`Rewrite the reciprocal as a negative power: \(f(x)=(x+1)^{-2}\).${OI("[g(x)]^{-2}", "-2[g(x)]^{-3}", "x+1", "1")}`],
    ["apply the chain rule", cr`\[\begin{aligned}f'(x)&=-2\,[g(x)]^{-3}\cdot g'(x)\\&=-2\,(x+1)^{-3}\cdot 1\end{aligned}\]`],
    ["simplify", cr`Write the negative power as a denominator: \(f'(x)=\dfrac{-2}{(x+1)^3}\).`]],
    cr`\(f'(x)=\dfrac{-2}{(x+1)^3}\).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${cqa("Q1: What is the chain rule?", "Derivative of the outside (inside untouched) times the derivative of the inside.")}
  ${cqa("Q2: How do you differentiate a power of a function?", cr`\(n[g(x)]^{n-1}g'(x)\).`)}
  ${cqa("Q3: What's the most-forgotten part?", cr`The inner derivative \(g'(x)\).`)}
  ${cqa("Q4: How do you combine it with other rules?", "Apply product/quotient on the outside, chain on each composite piece.")}
  ${cqa("Q5: How do you set out a chain-rule solution?", "Step 1: identify the outer and inner functions and their derivatives. Step 2: apply the rule (outer derivative with the inside unchanged, times the inner derivative). Step 3: simplify.")}
  ${cqa("Q6: How do you handle a root or a reciprocal?", cr`Rewrite it as a power first: \(\sqrt{g(x)}=[g(x)]^{1/2}\) and \(\dfrac1{[g(x)]^k}=[g(x)]^{-k}\), then use the chain rule.`)}
</div>`),
]);

u2["2.4"] = L("2.4", "Rational, Radical & Higher-Order Derivatives", [
  html(String.raw`<div class="lecture-box">
  <h1>🧮 Rational, Radical &amp; Higher-Order Derivatives</h1>
  <p><strong>Overview.</strong> Rewriting as powers handles many <strong>rational</strong> and <strong>radical</strong> functions with the power rule alone. Differentiating again gives the <strong>second derivative</strong> \(f''=(f')'\) (and beyond). And when \(y\) is tangled with \(x\), <strong>implicit differentiation</strong> finds \(\dfrac{dy}{dx}\) without solving for \(y\).</p>
  <h2>📌 The tools</h2>
  <ul>
    <li><strong>Rewrite then power rule:</strong> \(\dfrac1{x^k}=x^{-k}\), \(\sqrt[n]{x^m}=x^{m/n}\).</li>
    <li><strong>Second derivative:</strong> \(f''=\dfrac{d}{dx}\big(f'\big)\) — measures concavity (Unit 4).</li>
    <li><strong>Implicit:</strong> differentiate both sides w.r.t. \(x\), treating \(y\) as a function (every \(y\) gets a \(\tfrac{dy}{dx}\)).</li>
  </ul>
  ${gframe(["y = x^3", "y = 3*x^2", "y = 6*x"], { title: "f(x)=x³, f'(x)=3x², f''(x)=6x: each curve is the slope function of the one before it" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Rational via powers</h3><p>Differentiate \(f(x)=\dfrac1{x^2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^{-2}\Rightarrow -2x^{-3}\).</div><em>Conclusion: \(f'(x)=-\dfrac2{x^3}\). ✓</em></div>${gframe(["y = 1/x^2", "y = -2/x^3"], { title: "f(x)=1/x² and its derivative −2/x³" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Radical via powers</h3><p>Differentiate \(f(x)=\sqrt[3]{x^2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^{2/3}\Rightarrow \tfrac23x^{-1/3}\).</div><em>Conclusion: \(f'(x)=\dfrac{2}{3\sqrt[3]{x}}\). ✓</em></div>${gframe(["y = (x^2)^(1/3)"], { title: "f(x)=∛(x²): a sharp cusp at x=0 (where the derivative blows up)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Second derivative</h3><p>Find \(f''(x)\) for \(f(x)=x^4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=4x^3\).</div><div class="step"><strong>Step 2:</strong> \(f''(x)=12x^2\).</div><em>Conclusion: \(f''(x)=12x^2\). ✓</em></div>${gframe(["y = x^4", "y = 4*x^3", "y = 12*x^2"], { title: "f=x⁴, f'=4x³, f''=12x²: each is the slope function of the one before it" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Second derivative of a polynomial</h3><p>Find \(f''(x)\) for \(f(x)=x^3-3x\), and evaluate \(f''(1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=3x^2-3\Rightarrow f''(x)=6x\).</div><div class="step"><strong>Step 2:</strong> \(f''(1)=6>0\) (concave up there).</div><em>Conclusion: \(f''(x)=6x,\ f''(1)=6\). ✓</em></div>${gframe(["y = x^3 - 3*x", "y = 3*x^2 - 3", "y = 6*x"], { title: "f=x³−3x, f'=3x²−3, f''=6x" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Implicit differentiation</h3><p>Find \(\dfrac{dy}{dx}\) for the circle \(x^2+y^2=25\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Differentiate both sides: \(2x+2y\dfrac{dy}{dx}=0\).</div><div class="step"><strong>Step 2:</strong> Solve: \(\dfrac{dy}{dx}=-\dfrac{x}{y}\).</div><em>Conclusion: \(\dfrac{dy}{dx}=-\dfrac{x}{y}\) (e.g. slope \(-\tfrac34\) at \((3,4)\)). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Differentiate \(f(x)=\dfrac1{x^4}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^{-4}\to-4x^{-5}=-\dfrac4{x^5}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Differentiate \(f(x)=x^{3/2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac32x^{1/2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(f''(x)\) for \(f(x)=x^5\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'=5x^4,\ f''=20x^3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(f''(x)\) for \(f(x)=2x^3-x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'=6x^2-2x,\ f''=12x-2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find \(\dfrac{dy}{dx}\) for \(x^2+y^2=9\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x+2yy'=0\Rightarrow y'=-\dfrac xy\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you differentiate \(\tfrac1{x^k}\) and roots?</h3><p><em>Rewrite as a power, then use the power rule.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the second derivative?</h3><p><em>The derivative of the derivative; it measures concavity.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is implicit differentiation?</h3><p><em>Differentiating both sides w.r.t. \(x\), attaching \(\tfrac{dy}{dx}\) to every \(y\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does the slider show?</h3><p><em>\(x^3\to 3x^2\to 6x\): each is the slope function of the previous.</em></p></div>
</div>`),
]);
