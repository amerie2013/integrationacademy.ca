// MCV4U Unit 2 — Derivative Rules. Deep single-card lessons with f-vs-f' graphs.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u2 = {};

// ── Unit 2 layout helpers: every solution follows Step 1 identify → Step 2 apply the rule → Step 3 simplify ──
const cstep = (n, label, text) => `<div class="step"><strong>Step ${n}${label ? ` (${label})` : ""}:</strong> ${text}</div>`;
const cex = (title, prompt, steps, concl, extra = "") =>
  `<div class="example-box" ${EX}><h3>${title}</h3><p>${prompt}</p><div class="solution">${steps.map(([l, t], i) => cstep(i + 1, l, t)).join("")}<em>Conclusion: ${concl} ✓</em></div>${extra}</div>`;
const cpr = (n, prompt, steps, concl) =>
  `<div class="practice-box" ${PR}><h3>Question ${n}</h3><p>${prompt}</p><details><summary>View answer</summary><div class="solution">${steps.map(([l, t], i) => cstep(i + 1, l, t)).join("")}<em>Conclusion: ${concl} ✓</em></div></details></div>`;
const cqa = (q, a) => `<div class="qa-box" ${QA}><h3>${q}</h3><p><em>${a}</em></p></div>`;
const cr = String.raw;
// the two lines shown in Step 1: outer and inner, each with its derivative
const OI = (outer, outerD, inner, innerD) => cr`<span style="display:block;margin:4px 0 0 14px;">Outer: \(${outer}\ \Rightarrow\ ${outerD}\)</span><span style="display:block;margin:2px 0 4px 14px;">Inner: \(g(x)=${inner}\ \Rightarrow\ g'(x)=${innerD}\)</span>`;

// aligned display: AL(["f'(x)&=...", "&=..."]) -> \[\begin{aligned}...\end{aligned}\]
const AL = (lines) => `\\[\\begin{aligned}${lines.join("\\\\")}\\end{aligned}\\]`;

u2["2.1"] = L("2.1", "Power, Constant & Sum Rules", [
  html(`<div class="lecture-box">
  <h1>⚡ Power, Constant &amp; Sum Rules</h1>
  ${cr`<p><strong>Overview.</strong> First principles is the definition — but you rarely need it. The <strong>power rule</strong> \(\frac{d}{dx}x^n=nx^{n-1}\), together with the <strong>constant-multiple</strong> and <strong>sum/difference</strong> rules, differentiates any polynomial in seconds. The same power rule handles negative and fractional exponents once you rewrite radicals and reciprocals as powers.</p>
  <h2>📌 The rules</h2>
  <ul>
    <li><strong>Power:</strong> \(\frac{d}{dx}x^n=nx^{n-1}\) (any real \(n\)). <strong>Constant:</strong> \(\frac{d}{dx}c=0\).</li>
    <li><strong>Constant multiple:</strong> \(\frac{d}{dx}[c\,f]=c\,f'\). <strong>Sum/Difference:</strong> \((f\pm g)'=f'\pm g'\).</li>
    <li>Rewrite first: \(\sqrt{x}=x^{1/2}\), \(\dfrac1{x^k}=x^{-k}\).</li>
  </ul>
  <h2>🧭 A three-step layout for every derivative</h2>
  <ol>
    <li><strong>Identify.</strong> Split the function into terms and rewrite each one as a constant times a power of \(x\) (radicals and reciprocals become fractional and negative powers).</li>
    <li><strong>Apply the rules.</strong> Differentiate term by term: power rule \(nx^{n-1}\), keep the constant multiple, and a constant term gives \(0\).</li>
    <li><strong>Simplify.</strong> Multiply the constants, and write negative or fractional powers as fractions or radicals again if the question was written that way.</li>
  </ol>
  <div style="overflow-x:auto;margin:10px 0;"><table style="border-collapse:collapse;font-size:14px;">
    <thead><tr style="background:#eef2ff;color:#3730a3;"><th style="border:1px solid #c7d2fe;padding:6px 10px;">Written as</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Rewrite as a power</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Derivative</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\sqrt{x}\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(x^{1/2}\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\tfrac12x^{-1/2}\)</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\dfrac1{x^2}\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(x^{-2}\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(-2x^{-3}\)</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(7\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">constant</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(0\)</td></tr>
    </tbody>
  </table></div>`}
  ${gframe(["y = x^3 - 3*x", "y = 3*x^2 - 3"], { title: "f(x)=x³−3x and f'(x)=3x²−3: f' is zero exactly where f has its turning points (x = ±1)" })}
  <h2>🔵 Examples</h2>
  ${cex("Example 1: Power rule", cr`Differentiate \(f(x)=x^5\).`, [
    ["identify", cr`\(f(x)=x^5\) is a single power of \(x\), with exponent \(n=5\).`],
    ["apply the power rule", `${AL(["f'(x)&=n\\,x^{n-1}", "&=5\\,x^{5-1}"])}`],
    ["simplify", cr`\(5-1=4\), so \(f'(x)=5x^4\).`]],
    cr`\(f'(x)=5x^4\).`, gframe(["y = x^5", "y = 5*x^4"], { title: "f(x)=x⁵ and its derivative f'(x)=5x⁴" }))}
  ${cex("Example 2: A whole polynomial", cr`Differentiate \(f(x)=3x^4-2x^2+7\).`, [
    ["identify the terms", cr`\(f(x)=3x^4-2x^2+7\) has three terms: \(3x^4\), \(-2x^2\), and the constant \(7\).`],
    ["apply the rules term by term", `Keep each constant multiple and use the power rule; the constant term gives \\(0\\).${AL(["f'(x)&=3\\,(4x^3)-2\\,(2x^1)+0", "&=12x^3-4x"])}`],
    ["simplify", cr`Multiply the constants: \(3\cdot4=12\) and \(2\cdot2=4\). The constant \(7\) vanishes.`]],
    cr`\(f'(x)=12x^3-4x\).`, gframe(["y = 3*x^4 - 2*x^2 + 7", "y = 12*x^3 - 4*x"], { title: "f(x)=3x⁴−2x²+7 and its derivative 12x³−4x" }))}
  ${cex("Example 3: Negative & fractional exponents (radical + reciprocal)", cr`Differentiate \(f(x)=\sqrt{x}+\dfrac1{x^2}\).`, [
    ["identify and rewrite", cr`Write each term as a power: \(\sqrt{x}=x^{1/2}\) and \(\dfrac1{x^2}=x^{-2}\), so \(f(x)=x^{1/2}+x^{-2}\).`],
    ["apply the power rule to each term", `${AL(["f'(x)&=\\tfrac12\\,x^{\\frac12-1}+(-2)\\,x^{-2-1}", "&=\\tfrac12\\,x^{-1/2}-2x^{-3}"])}`],
    ["simplify", cr`Write the negative powers as fractions again: \(x^{-1/2}=\dfrac1{\sqrt{x}}\) and \(x^{-3}=\dfrac1{x^3}\).`]],
    cr`\(f'(x)=\dfrac1{2\sqrt{x}}-\dfrac2{x^3}\).`, gframe(["y = sqrt(x) + 1/x^2", "y = 1/(2*sqrt(x)) - 2/x^3"], { title: "f(x)=√x+1/x² and its derivative" }))}
  ${cex("Example 4: Slope at a point", cr`For \(f(x)=x^3-3x\), find the slope of the tangent at \(x=2\).`, [
    ["identify", cr`The slope of the tangent at \(x=2\) is \(f'(2)\), so first find \(f'(x)\).`],
    ["differentiate", `${AL(["f'(x)&=3x^{3-1}-3\\,x^{1-1}", "&=3x^2-3"])}`],
    ["substitute x = 2", `${AL(["f'(2)&=3(2)^2-3", "&=12-3"])}`]],
    cr`the slope at \(x=2\) is \(f'(2)=9\).`, gframe(["y = x^3 - 3*x", "y = 3*x^2 - 3"], { title: "f(x)=x³−3x and f'(x)=3x²−3: at x=2 the height of f' is 9" }))}
  ${cex("Example 5: Where is the tangent horizontal?", cr`Find where \(f(x)=x^3-3x\) has a horizontal tangent.`, [
    ["identify", cr`A horizontal tangent has slope \(0\), so solve \(f'(x)=0\).`],
    ["differentiate", cr`\(f'(x)=3x^2-3\).`],
    ["solve f′(x) = 0", `${AL(["3x^2-3&=0", "x^2&=1", "x&=\\pm1"])}`],
    ["find the points", cr`\(f(1)=1-3=-2\) and \(f(-1)=-1+3=2\), so the points are \((1,-2)\) and \((-1,2)\).`]],
    cr`horizontal tangents at \(x=1\) and \(x=-1\), i.e. at \((1,-2)\) and \((-1,2)\).`, gframe(["y = x^3 - 3*x"], { title: "f(x)=x³−3x: the tangent is horizontal at the peak (x=−1) and valley (x=1)" }))}
  <h2>🟡 Practice Questions</h2>
  ${cpr(1, cr`Differentiate \(f(x)=x^7\).`, [
    ["identify", cr`\(f(x)=x^7\) is a single power with \(n=7\).`],
    ["apply the power rule", `${AL(["f'(x)&=7\\,x^{7-1}", "&=7x^6"])}`]],
    cr`\(f'(x)=7x^6\).`)}
  ${cpr(2, cr`Differentiate \(f(x)=4x^3-6x^2+x-9\).`, [
    ["identify the terms", cr`Four terms: \(4x^3\), \(-6x^2\), \(x\) (which is \(1\cdot x^1\)), and the constant \(-9\).`],
    ["apply the rules term by term", `${AL(["f'(x)&=4\\,(3x^2)-6\\,(2x)+1-0", "&=12x^2-12x+1"])}`]],
    cr`\(f'(x)=12x^2-12x+1\).`)}
  ${cpr(3, cr`Differentiate \(f(x)=\dfrac1{x^3}\).`, [
    ["identify and rewrite", cr`\(f(x)=\dfrac1{x^3}=x^{-3}\).`],
    ["apply the power rule", `${AL(["f'(x)&=-3\\,x^{-3-1}", "&=-3x^{-4}"])}`],
    ["simplify", cr`Write the negative power as a fraction: \(-3x^{-4}=-\dfrac3{x^4}\).`]],
    cr`\(f'(x)=-\dfrac3{x^4}\).`)}
  ${cpr(4, cr`Find \(f'(1)\) for \(f(x)=x^4-2x\).`, [
    ["differentiate", cr`\(f'(x)=4x^3-2\).`],
    ["substitute x = 1", `${AL(["f'(1)&=4(1)^3-2", "&=4-2"])}`]],
    cr`\(f'(1)=2\).`)}
  ${cpr(5, cr`Where does \(f(x)=x^2-4x\) have a horizontal tangent?`, [
    ["differentiate", cr`\(f'(x)=2x-4\).`],
    ["solve f′(x) = 0", `${AL(["2x-4&=0", "x&=2"])}`],
    ["find the point", cr`\(f(2)=4-8=-4\), so the point is \((2,-4)\).`]],
    cr`horizontal tangent at \(x=2\), i.e. at \((2,-4)\).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${cqa("Q1: What is the power rule?", cr`\(\frac{d}{dx}x^n=nx^{n-1}\), for any real \(n\).`)}
  ${cqa("Q2: What happens to a constant?", cr`Its derivative is \(0\).`)}
  ${cqa("Q3: How do you handle \\(\\sqrt{x}\\) or \\(\\tfrac1{x^k}\\)?", cr`Rewrite as a power first: \(x^{1/2}\), \(x^{-k}\).`)}
  ${cqa("Q4: What does \\(f'(a)=0\\) mean?", "A horizontal tangent — a turning point of f.")}
  ${cqa("Q5: How do you set out a solution?", "Step 1: identify the terms and rewrite each as a power. Step 2: apply the power, constant-multiple and sum rules term by term. Step 3: simplify.")}
</div>`),
]);

u2["2.2"] = L("2.2", "Product & Quotient Rules", [
  html(`<div class="lecture-box">
  <h1>✖️ Product &amp; Quotient Rules</h1>
  ${cr`<p><strong>Overview.</strong> The derivative of a product is <em>not</em> the product of the derivatives. The <strong>product rule</strong> is \((fg)'=f'g+fg'\), and the <strong>quotient rule</strong> is \(\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}\). They let you differentiate combinations you can't (or don't want to) expand.</p>
  <h2>📌 The rules</h2>
  <ul>
    <li><strong>Product:</strong> \((fg)'=f'g+fg'\).</li>
    <li><strong>Quotient:</strong> \(\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}\) (order matters — top derivative first).</li>
  </ul>
  <h2>🧭 A three-step layout for every product or quotient</h2>
  <p>In the examples the function being differentiated is called \(h(x)\), so that \(f(x)\) and \(g(x)\) can stand for its two pieces, exactly as in the rules.</p>
  <ol>
    <li><strong>Identify.</strong> Name the two pieces \(f(x)\) and \(g(x)\) (for a quotient, \(f\) is the top and \(g\) is the bottom) and find \(f'(x)\) and \(g'(x)\).</li>
    <li><strong>Apply the rule.</strong> Write the rule with the pieces substituted in — the top-derivative-first order matters for a quotient.</li>
    <li><strong>Simplify.</strong> Expand the numerator, collect like terms, and factor if possible. Keep the denominator as \(g^2\).</li>
  </ol>`}
  ${gframe(["y = x^2*(x-3)", "y = 3*x^2 - 6*x"], { title: "f(x)=x²(x−3)=x³−3x² and its derivative 3x²−6x: f' is zero at x=0 and x=2" })}
  <h2>🔵 Examples</h2>
  ${cex("Example 1: Product rule", cr`Differentiate \(h(x)=x^2(x+1)\).`, [
    ["identify the pieces", cr`\(f(x)=x^2\Rightarrow f'(x)=2x\)<br>\(g(x)=x+1\Rightarrow g'(x)=1\)`],
    ["apply the product rule", `${AL(["h'(x)&=f'(x)\\,g(x)+f(x)\\,g'(x)", "&=2x\\,(x+1)+x^2\\,(1)"])}`],
    ["simplify", `Expand and collect like terms:${AL(["h'(x)&=2x^2+2x+x^2", "&=3x^2+2x"])}`],
    ["check", cr`Expand first: \(h(x)=x^3+x^2\), so \(h'(x)=3x^2+2x\) ✓.`]],
    cr`\(h'(x)=3x^2+2x\).`, gframe(["y = x^2*(x+1)", "y = 3*x^2 + 2*x"], { title: "h(x)=x²(x+1) and its derivative 3x²+2x" }))}
  ${cex("Example 2: Two nontrivial factors", cr`Differentiate \(h(x)=(2x+1)(x^2-3)\).`, [
    ["identify the pieces", cr`\(f(x)=2x+1\Rightarrow f'(x)=2\)<br>\(g(x)=x^2-3\Rightarrow g'(x)=2x\)`],
    ["apply the product rule", `${AL(["h'(x)&=f'(x)\\,g(x)+f(x)\\,g'(x)", "&=2\\,(x^2-3)+(2x+1)(2x)"])}`],
    ["simplify", `Expand each product and collect like terms:${AL(["h'(x)&=2x^2-6+4x^2+2x", "&=6x^2+2x-6"])}`]],
    cr`\(h'(x)=6x^2+2x-6\).`, gframe(["y = (2*x+1)*(x^2-3)", "y = 6*x^2 + 2*x - 6"], { title: "h(x)=(2x+1)(x²−3) and its derivative 6x²+2x−6" }))}
  ${cex("Example 3: Quotient rule", cr`Differentiate \(h(x)=\dfrac{x+1}{x-1}\).`, [
    ["identify the pieces", cr`Top: \(f(x)=x+1\Rightarrow f'(x)=1\)<br>Bottom: \(g(x)=x-1\Rightarrow g'(x)=1\)`],
    ["apply the quotient rule", `${AL(["h'(x)&=\\dfrac{f'(x)\\,g(x)-f(x)\\,g'(x)}{[g(x)]^2}", "&=\\dfrac{(1)(x-1)-(x+1)(1)}{(x-1)^2}"])}`],
    ["simplify the numerator", `${AL(["(1)(x-1)-(x+1)(1)&=x-1-x-1", "&=-2"])}`]],
    cr`\(h'(x)=\dfrac{-2}{(x-1)^2}\).`, gframe(["y = (x+1)/(x-1)", "y = -2/(x-1)^2"], { title: "h(x)=(x+1)/(x−1) and its derivative −2/(x−1)² (always negative)" }))}
  ${cex("Example 4: Quotient with a polynomial top", cr`Differentiate \(h(x)=\dfrac{x^2}{x+1}\).`, [
    ["identify the pieces", cr`Top: \(f(x)=x^2\Rightarrow f'(x)=2x\)<br>Bottom: \(g(x)=x+1\Rightarrow g'(x)=1\)`],
    ["apply the quotient rule", `${AL(["h'(x)&=\\dfrac{f'(x)\\,g(x)-f(x)\\,g'(x)}{[g(x)]^2}", "&=\\dfrac{2x\\,(x+1)-x^2\\,(1)}{(x+1)^2}"])}`],
    ["simplify the numerator", `${AL(["2x(x+1)-x^2&=2x^2+2x-x^2", "&=x^2+2x"])}`],
    ["factor (optional)", cr`\(x^2+2x=x(x+2)\), so the derivative can also be written \(\dfrac{x(x+2)}{(x+1)^2}\).`]],
    cr`\(h'(x)=\dfrac{x^2+2x}{(x+1)^2}\).`, gframe(["y = x^2/(x+1)", "y = (x^2+2*x)/(x+1)^2"], { title: "h(x)=x²/(x+1) and its derivative" }))}
  ${cex("Example 5: Work from a table of values", cr`Given \(f(2)=3,\ f'(2)=1,\ g(2)=4,\ g'(2)=-2\), find \((fg)'(2)\).`, [
    ["identify what is given", cr`At \(x=2\): \(f=3\), \(f'=1\), \(g=4\), \(g'=-2\).`],
    ["apply the product rule at x = 2", `${AL(["(fg)'(2)&=f'(2)\\,g(2)+f(2)\\,g'(2)", "&=(1)(4)+(3)(-2)"])}`],
    ["simplify", cr`\(4+(-6)=-2\).`]],
    cr`\((fg)'(2)=-2\).`)}
  <h2>🟡 Practice Questions</h2>
  ${cpr(1, cr`Differentiate \(h(x)=x^3(x-2)\).`, [
    ["identify the pieces", cr`\(f(x)=x^3\Rightarrow f'(x)=3x^2\)<br>\(g(x)=x-2\Rightarrow g'(x)=1\)`],
    ["apply the product rule", `${AL(["h'(x)&=f'(x)\\,g(x)+f(x)\\,g'(x)", "&=3x^2\\,(x-2)+x^3\\,(1)"])}`],
    ["simplify", `${AL(["h'(x)&=3x^3-6x^2+x^3", "&=4x^3-6x^2"])}`]],
    cr`\(h'(x)=4x^3-6x^2\).`)}
  ${cpr(2, cr`Differentiate \(h(x)=(x+2)(x^2+1)\).`, [
    ["identify the pieces", cr`\(f(x)=x+2\Rightarrow f'(x)=1\)<br>\(g(x)=x^2+1\Rightarrow g'(x)=2x\)`],
    ["apply the product rule", `${AL(["h'(x)&=f'(x)\\,g(x)+f(x)\\,g'(x)", "&=(1)(x^2+1)+(x+2)(2x)"])}`],
    ["simplify", `${AL(["h'(x)&=x^2+1+2x^2+4x", "&=3x^2+4x+1"])}`]],
    cr`\(h'(x)=3x^2+4x+1\).`)}
  ${cpr(3, cr`Differentiate \(h(x)=\dfrac{x}{x+2}\).`, [
    ["identify the pieces", cr`Top: \(f(x)=x\Rightarrow f'(x)=1\)<br>Bottom: \(g(x)=x+2\Rightarrow g'(x)=1\)`],
    ["apply the quotient rule", `${AL(["h'(x)&=\\dfrac{f'(x)\\,g(x)-f(x)\\,g'(x)}{[g(x)]^2}", "&=\\dfrac{(1)(x+2)-x\\,(1)}{(x+2)^2}"])}`],
    ["simplify the numerator", cr`\(x+2-x=2\).`]],
    cr`\(h'(x)=\dfrac{2}{(x+2)^2}\).`)}
  ${cpr(4, cr`Differentiate \(h(x)=\dfrac{x-1}{x+1}\).`, [
    ["identify the pieces", cr`Top: \(f(x)=x-1\Rightarrow f'(x)=1\)<br>Bottom: \(g(x)=x+1\Rightarrow g'(x)=1\)`],
    ["apply the quotient rule", `${AL(["h'(x)&=\\dfrac{f'(x)\\,g(x)-f(x)\\,g'(x)}{[g(x)]^2}", "&=\\dfrac{(1)(x+1)-(x-1)(1)}{(x+1)^2}"])}`],
    ["simplify the numerator", cr`\(x+1-x+1=2\).`]],
    cr`\(h'(x)=\dfrac{2}{(x+1)^2}\).`)}
  ${cpr(5, cr`With \(f(1)=2,f'(1)=3,g(1)=5,g'(1)=-1\), find \((fg)'(1)\).`, [
    ["identify what is given", cr`At \(x=1\): \(f=2\), \(f'=3\), \(g=5\), \(g'=-1\).`],
    ["apply the product rule at x = 1", `${AL(["(fg)'(1)&=f'(1)\\,g(1)+f(1)\\,g'(1)", "&=(3)(5)+(2)(-1)"])}`],
    ["simplify", cr`\(15+(-2)=13\).`]],
    cr`\((fg)'(1)=13\).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${cqa("Q1: What is the product rule?", cr`\((fg)'=f'g+fg'\) — not \(f'g'\).`)}
  ${cqa("Q2: What is the quotient rule?", cr`\(\dfrac{f'g-fg'}{g^2}\) — top derivative first, then square the bottom.`)}
  ${cqa("Q3: Can you avoid the product rule?", "Sometimes — if expanding is easy, expand and use the power rule.")}
  ${cqa("Q4: Why does order matter in the quotient rule?", cr`The minus sign: \(f'g-fg'\ne fg'-f'g\).`)}
  ${cqa("Q5: How do you set out a solution?", "Step 1: name the pieces f(x) and g(x) and find f′(x) and g′(x). Step 2: write the rule with the pieces substituted. Step 3: simplify the numerator (and factor if you can).")}
</div>`),
]);

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
  html(`<div class="lecture-box">
  <h1>🧮 Rational, Radical &amp; Higher-Order Derivatives</h1>
  ${cr`<p><strong>Overview.</strong> Rewriting as powers handles many <strong>rational</strong> and <strong>radical</strong> functions with the power rule alone. Differentiating again gives the <strong>second derivative</strong> \(f''=(f')'\) (and beyond). And when \(y\) is tangled with \(x\), <strong>implicit differentiation</strong> finds \(\dfrac{dy}{dx}\) without solving for \(y\).</p>
  <h2>📌 The tools</h2>
  <ul>
    <li><strong>Rewrite then power rule:</strong> \(\dfrac1{x^k}=x^{-k}\), \(\sqrt[n]{x^m}=x^{m/n}\).</li>
    <li><strong>Second derivative:</strong> \(f''=\dfrac{d}{dx}\big(f'\big)\) — measures concavity (Unit 4).</li>
    <li><strong>Implicit:</strong> differentiate both sides w.r.t. \(x\), treating \(y\) as a function (every \(y\) gets a \(\tfrac{dy}{dx}\)).</li>
  </ul>
  <h2>🧭 The three-step layout for each type</h2>
  <div style="overflow-x:auto;margin:10px 0;"><table style="border-collapse:collapse;font-size:14px;">
    <thead><tr style="background:#eef2ff;color:#3730a3;"><th style="border:1px solid #c7d2fe;padding:6px 10px;">Type</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Step 1</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Step 2</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Step 3</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">Rational / radical</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">Identify and rewrite as a power</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">Apply the power rule</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">Simplify (positive exponents, radicals)</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">Second derivative</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">Find \(f'(x)\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">Differentiate \(f'\) to get \(f''(x)\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">Evaluate or interpret</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">Implicit</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">Differentiate both sides w.r.t. \(x\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">Collect the \(\frac{dy}{dx}\) terms</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">Solve for \(\frac{dy}{dx}\)</td></tr>
    </tbody>
  </table></div>`}
  ${gframe(["y = x^3", "y = 3*x^2", "y = 6*x"], { title: "f(x)=x³, f'(x)=3x², f''(x)=6x: each curve is the slope function of the one before it" })}
  <h2>🔵 Examples</h2>
  ${cex("Example 1: Rational via powers", cr`Differentiate \(f(x)=\dfrac1{x^2}\).`, [
    ["identify and rewrite", cr`Write the reciprocal as a negative power: \(f(x)=\dfrac1{x^2}=x^{-2}\).`],
    ["apply the power rule", `${AL(["f'(x)&=-2\\,x^{-2-1}", "&=-2x^{-3}"])}`],
    ["simplify", cr`Write the negative power as a fraction: \(-2x^{-3}=-\dfrac2{x^3}\).`]],
    cr`\(f'(x)=-\dfrac2{x^3}\).`, gframe(["y = 1/x^2", "y = -2/x^3"], { title: "f(x)=1/x² and its derivative −2/x³" }))}
  ${cex("Example 2: Radical via powers", cr`Differentiate \(f(x)=\sqrt[3]{x^2}\).`, [
    ["identify and rewrite", cr`Write the radical as a fractional power: \(f(x)=\sqrt[3]{x^2}=x^{2/3}\).`],
    ["apply the power rule", `${AL(["f'(x)&=\\tfrac23\\,x^{\\frac23-1}", "&=\\tfrac23\\,x^{-1/3}"])}`],
    ["simplify", cr`Write the negative power as a fraction and a radical: \(x^{-1/3}=\dfrac1{\sqrt[3]{x}}\).`]],
    cr`\(f'(x)=\dfrac{2}{3\sqrt[3]{x}}\).`, gframe(["y = (x^2)^(1/3)"], { title: "f(x)=∛(x²): a sharp cusp at x=0 (where the derivative blows up)" }))}
  ${cex("Example 3: Second derivative", cr`Find \(f''(x)\) for \(f(x)=x^4\).`, [
    ["find the first derivative", cr`\(f'(x)=4x^3\).`],
    ["differentiate again", `${AL(["f''(x)&=\\dfrac{d}{dx}\\big(4x^3\\big)", "&=4\\,(3x^2)"])}`],
    ["simplify", cr`\(4\cdot3=12\), so \(f''(x)=12x^2\), which is never negative: the graph of \(f\) is concave up everywhere.`]],
    cr`\(f''(x)=12x^2\).`, gframe(["y = x^4", "y = 4*x^3", "y = 12*x^2"], { title: "f=x⁴, f'=4x³, f''=12x²: each is the slope function of the one before it" }))}
  ${cex("Example 4: Second derivative of a polynomial", cr`Find \(f''(x)\) for \(f(x)=x^3-3x\), and evaluate \(f''(1)\).`, [
    ["find the first derivative", cr`\(f'(x)=3x^2-3\).`],
    ["differentiate again", `${AL(["f''(x)&=\\dfrac{d}{dx}\\big(3x^2-3\\big)", "&=6x"])}`],
    ["evaluate at x = 1", `${AL(["f''(1)&=6(1)", "&=6"])}Since \\(f''(1)>0\\), the graph is concave up at \\(x=1\\).`]],
    cr`\(f''(x)=6x\) and \(f''(1)=6\).`, gframe(["y = x^3 - 3*x", "y = 3*x^2 - 3", "y = 6*x"], { title: "f=x³−3x, f'=3x²−3, f''=6x" }))}
  ${cex("Example 5: Implicit differentiation", cr`Find \(\dfrac{dy}{dx}\) for the circle \(x^2+y^2=25\).`, [
    ["differentiate both sides with respect to x", `Every \\(y\\)-term gets a factor \\(\\dfrac{dy}{dx}\\) (chain rule):${AL(["\\frac{d}{dx}\\big(x^2\\big)+\\frac{d}{dx}\\big(y^2\\big)&=\\frac{d}{dx}(25)", "2x+2y\\,\\dfrac{dy}{dx}&=0"])}`],
    ["collect the dy/dx term", `${AL(["2y\\,\\dfrac{dy}{dx}&=-2x"])}`],
    ["solve for dy/dx", `Divide both sides by \\(2y\\):${AL(["\\dfrac{dy}{dx}&=\\dfrac{-2x}{2y}", "&=-\\dfrac{x}{y}"])}`],
    ["check at (3, 4)", cr`\(3^2+4^2=25\), so \((3,4)\) is on the circle, and the slope there is \(-\dfrac34\).`]],
    cr`\(\dfrac{dy}{dx}=-\dfrac{x}{y}\).`)}
  <h2>🟡 Practice Questions</h2>
  ${cpr(1, cr`Differentiate \(f(x)=\dfrac1{x^4}\).`, [
    ["identify and rewrite", cr`\(f(x)=\dfrac1{x^4}=x^{-4}\).`],
    ["apply the power rule", `${AL(["f'(x)&=-4\\,x^{-4-1}", "&=-4x^{-5}"])}`],
    ["simplify", cr`\(-4x^{-5}=-\dfrac4{x^5}\).`]],
    cr`\(f'(x)=-\dfrac4{x^5}\).`)}
  ${cpr(2, cr`Differentiate \(f(x)=x^{3/2}\).`, [
    ["identify", cr`\(f(x)=x^{3/2}\) is already a power, with \(n=\tfrac32\).`],
    ["apply the power rule", `${AL(["f'(x)&=\\tfrac32\\,x^{\\frac32-1}", "&=\\tfrac32\\,x^{1/2}"])}`],
    ["simplify", cr`Write the power as a radical: \(x^{1/2}=\sqrt{x}\).`]],
    cr`\(f'(x)=\tfrac32\sqrt{x}\).`)}
  ${cpr(3, cr`Find \(f''(x)\) for \(f(x)=x^5\).`, [
    ["find the first derivative", cr`\(f'(x)=5x^4\).`],
    ["differentiate again", `${AL(["f''(x)&=\\dfrac{d}{dx}\\big(5x^4\\big)", "&=5\\,(4x^3)"])}`],
    ["simplify", cr`\(5\cdot4=20\).`]],
    cr`\(f''(x)=20x^3\).`)}
  ${cpr(4, cr`Find \(f''(x)\) for \(f(x)=2x^3-x^2\).`, [
    ["find the first derivative", cr`\(f'(x)=2(3x^2)-2x=6x^2-2x\).`],
    ["differentiate again", `${AL(["f''(x)&=\\dfrac{d}{dx}\\big(6x^2-2x\\big)", "&=6\\,(2x)-2"])}`],
    ["simplify", cr`\(f''(x)=12x-2\).`]],
    cr`\(f''(x)=12x-2\).`)}
  ${cpr(5, cr`Find \(\dfrac{dy}{dx}\) for \(x^2+y^2=9\).`, [
    ["differentiate both sides with respect to x", `${AL(["\\frac{d}{dx}\\big(x^2\\big)+\\frac{d}{dx}\\big(y^2\\big)&=\\frac{d}{dx}(9)", "2x+2y\\,\\dfrac{dy}{dx}&=0"])}`],
    ["collect the dy/dx term", `${AL(["2y\\,\\dfrac{dy}{dx}&=-2x"])}`],
    ["solve for dy/dx", `${AL(["\\dfrac{dy}{dx}&=\\dfrac{-2x}{2y}", "&=-\\dfrac{x}{y}"])}`]],
    cr`\(\dfrac{dy}{dx}=-\dfrac{x}{y}\).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${cqa("Q1: How do you differentiate \\(\\tfrac1{x^k}\\) and roots?", "Rewrite as a power, then use the power rule.")}
  ${cqa("Q2: What is the second derivative?", "The derivative of the derivative; it measures concavity.")}
  ${cqa("Q3: What is implicit differentiation?", cr`Differentiating both sides w.r.t. \(x\), attaching \(\tfrac{dy}{dx}\) to every \(y\).`)}
  ${cqa("Q4: What does the slider show?", cr`\(x^3\to 3x^2\to 6x\): each is the slope function of the previous.`)}
  ${cqa("Q5: How do you set out a solution?", "Step 1: identify (rewrite as a power, or differentiate both sides). Step 2: apply the rule (power rule, differentiate again, or collect the dy/dx terms). Step 3: simplify or solve.")}
</div>`),
]);
