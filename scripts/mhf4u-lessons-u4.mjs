// MHF4U Unit 4 — Exponential & Logarithmic Functions. Deep single-card lessons.
// Every solution names the whole equation/function in each step, and every example and practice
// answer has a graph whose labelled points are checked against the curves when this file loads.
import { html, graph } from "./seed-mpm2d.mjs";
import { pgraph, onCurve, C } from "./mhf4u-graph.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const r = String.raw;
export const u4 = {};

// ── layout helpers: steps are [label, text]; each step names the whole equation ──
const step = (n, label, text) => `<div class="step"><strong>Step ${n}${label ? ` (${label})` : ""}:</strong> ${text}</div>`;
const ex = (title, prompt, steps, concl, extra = "") =>
  `<div class="example-box" ${EX}><h3>${title}</h3><p>${prompt}</p><div class="solution">${steps.map(([l, t], i) => step(i + 1, l, t)).join("")}<em>Conclusion: ${concl} ✓</em></div>${extra}</div>`;
const pr = (n, prompt, steps, concl, extra = "") =>
  `<div class="practice-box" ${PR}><h3>Question ${n}</h3><p>${prompt}</p><details><summary>View answer</summary><div class="solution">${steps.map(([l, t], i) => step(i + 1, l, t)).join("")}<em>Conclusion: ${concl} ✓</em>${extra}</div></details></div>`;
const qa = (q, a) => `<div class="qa-box" ${QA}><h3>${q}</h3><p><em>${a}</em></p></div>`;
const note = (t) => `<p style="margin:8px 0;"><strong>Graph:</strong> ${t}</p>`;

const lg = (b) => (x) => Math.log(x) / Math.log(b);
const lg2 = lg(2), lg3 = lg(3), lg10 = Math.log10;
const P = C.parent, G = C.main, O = C.alt;

// ═════════════════════════ 4.1 ═════════════════════════
const G41_PAIR = pgraph({
  title: "y = 2ˣ and y = log₂x", zx: 45, zy: 38, cx: 3, cy: 3,
  curves: [{ expr: "2^x", color: P }, { expr: "ln(x)/ln(2)", color: G }, { expr: "x", color: C.line, w: 1.6 }],
  points: [
    ...onCurve([-1, 0, 1, 3], (x) => 2 ** x, P, "left"),
    ...onCurve([0.5, 1, 2, 8], lg2, G, "below"),
  ],
  vlines: [0],
});
const G41_LOG2 = pgraph({
  title: "y = log₂x", zx: 16, zy: 55, cx: 16, cy: 2.5,
  curves: [{ expr: "ln(x)/ln(2)", color: G }], vlines: [0],
  points: onCurve([2, 4, 8, 16, 32], lg2, G, "below"),
});
const G41_Q3 = pgraph({
  title: "y = log x", zx: 30, zy: 60, cx: 50, cy: 1, vlines: [0],
  curves: [{ expr: "log(x)", color: G }],
  points: onCurve([1, 10, 100], lg10, G, "below"),
});
const G41_E3 = pgraph({ title: "y = log₉x", zx: 17.5, zy: 80, cx: 15, cy: 1, vlines: [0], curves: [{ expr: "ln(x)/ln(9)", color: G }], points: onCurve([3, 9, 27], lg(9), G, "below") });
const G41_E5 = pgraph({ title: "y = log₃x", zx: 9, zy: 60, cx: 30, cy: 2, vlines: [0], curves: [{ expr: "ln(x)/ln(3)", color: G }], points: onCurve([2, 27, 54], lg3, G, "below") });
const G41_E6 = pgraph({ title: "y = log₂x", zx: 8, zy: 45, cx: 34, cy: 3, vlines: [0], curves: [{ expr: "ln(x)/ln(2)", color: G }], points: onCurve([8, 64], lg2, G, "below") });
const G41_E9 = pgraph({ title: "y = log₅x", zx: 13, zy: 70, cx: 20, cy: 1.5, vlines: [0], curves: [{ expr: "ln(x)/ln(5)", color: G }], points: onCurve([5, 25, 40], lg(5), G, "below") });
const G41_Q1 = pgraph({ title: "y = log₃x", zx: 17.5, zy: 70, cx: 15, cy: 1.5, vlines: [0], curves: [{ expr: "ln(x)/ln(3)", color: G }], points: onCurve([3, 9, 27], lg3, G, "below") });
u4["4.1"] = L("4.1", "Logarithms & the Laws of Logarithms", [
  html(`<div class="lecture-box">
  <h1>🔢 Logarithms &amp; the Laws of Logarithms</h1>
  ${r`<p><strong>Overview.</strong> A <strong>logarithm answers the question "what exponent?"</strong> By definition \(\log_b x=y\iff b^y=x\) — the logarithm is the <em>inverse</em> of the exponential. Once you can switch between exponential and logarithmic form, three <strong>laws</strong> turn products, quotients, and powers into sums, differences, and multiples.</p>
  <p><strong>How to write your solutions.</strong> Write the <em>whole</em> expression or equation in every step, even when you change only one part of it — for example "\(\log_2(4\cdot8)=\log_24+\log_28\)". Name the law you use at each step.</p>
  <h2>📌 Switching between the two forms</h2>
  <div style="overflow-x:auto;margin:10px 0;"><table style="border-collapse:collapse;font-size:14px;">
    <thead><tr style="background:#eef2ff;color:#3730a3;"><th style="border:1px solid #c7d2fe;padding:6px 10px;">Exponential form</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Logarithmic form</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Reading it</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(b^{y}=x\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\log_b x=y\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">the base stays the base; the exponent is the logarithm</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(2^3=8\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\log_2 8=3\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">"2 to the power 3 is 8"</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(10^{-2}=0.01\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\log 0.01=-2\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">no base written means base 10</td></tr>
    </tbody>
  </table></div>
  <ul>
    <li><strong>Definition:</strong> \(\log_b x=y\iff b^y=x\) (with \(b>0,\ b\ne1,\ x>0\)). The argument \(x\) of a logarithm must be <em>positive</em>.</li>
    <li><strong>Special values:</strong> \(\log_b 1=0\) (since \(b^0=1\)), \(\log_b b=1\) (since \(b^1=b\)), \(\log_b(b^n)=n\), and \(b^{\log_b x}=x\).</li>
    <li><strong>Product:</strong> \(\log_b(xy)=\log_b x+\log_b y\). <strong>Quotient:</strong> \(\log_b\dfrac{x}{y}=\log_b x-\log_b y\).</li>
    <li><strong>Power:</strong> \(\log_b(x^n)=n\log_b x\). <strong>Change of base:</strong> \(\log_b x=\dfrac{\log x}{\log b}\).</li>
  </ul>
  <div style="background:#fef2f2;border-left:4px solid #dc2626;padding:8px 12px;border-radius:6px;margin:8px 0;"><strong>Common mistakes.</strong> \(\log(x+y)\ne\log x+\log y\); \(\dfrac{\log x}{\log y}\ne\log\dfrac{x}{y}\); and \(\log(x^n)=n\log x\) but \((\log x)^n\ne n\log x\).</div>
  <p><strong>Why the two graphs mirror each other.</strong> The point \((3,8)\) on \(y=2^x\) means \(2^3=8\), which is the same fact as \(\log_2 8=3\), so \((8,3)\) lies on \(y=\log_2 x\). Swapping \(x\) and \(y\) reflects the graph in the line \(y=x\).</p>`}
  ${G41_PAIR}
  ${note(r`\(y=2^x\) (grey) and its inverse \(y=\log_2x\) (green). Each exponential point \((a,b)\) becomes the logarithmic point \((b,a)\): \((0,1)\to(1,0)\), \((1,2)\to(2,1)\), \((3,8)\to(8,3)\).`)}
  <h2>🔵 Examples</h2>
  ${ex("Example 1: Evaluate", r`Find \(\log_2 8\).`, [
    ["ask the question", r`\(\log_2 8\) asks: <em>2 to what power gives 8?</em>`],
    ["exponential form", r`Write \(\log_2 8=y\) in exponential form: \(2^y=8\).`],
    ["solve", r`Since \(8=2^3\), the equation \(2^y=8\) becomes \(2^y=2^3\), so \(y=3\).`],
    ["check", r`\(2^3=8\) ✓, and the point \((8,3)\) is on the graph of \(y=\log_2x\) below.`]],
    r`\(\log_2 8=3\).`, G41_LOG2 + note(r`the labelled points read off values of \(\log_2x\): \(\log_22=1\), \(\log_24=2\), \(\log_28=3\), \(\log_216=4\), \(\log_232=5\).`))}
  ${ex("Example 2: Convert between forms", r`(a) Write \(10^3=1000\) in logarithmic form. (b) Write \(\log_5 25=2\) in exponential form. (c) Write \(\log_2\tfrac18=-3\) in exponential form.`, [
    ["(a)", r`In \(10^3=1000\) the base is \(10\), the exponent is \(3\) and the result is \(1000\), so \(\log_{10}1000=3\), i.e. \(\log 1000=3\).`],
    ["(b)", r`In \(\log_5 25=2\) the base is \(5\), the logarithm (exponent) is \(2\) and the argument is \(25\), so \(5^2=25\).`],
    ["(c)", r`In \(\log_2\tfrac18=-3\) the base is \(2\) and the exponent is \(-3\), so \(2^{-3}=\tfrac18\). Check: \(2^{-3}=\tfrac{1}{2^3}=\tfrac18\) ✓.`]],
    r`(a) \(\log 1000=3\); (b) \(5^2=25\); (c) \(2^{-3}=\tfrac18\).`)}
  ${ex("Example 3: Evaluate with a common base", r`Find \(\log_9 27\).`, [
    ["exponential form", r`Write \(\log_9 27=y\) as \(9^y=27\).`],
    ["common base", r`Write both sides of \(9^y=27\) as powers of \(3\): \(9=3^2\) and \(27=3^3\), so \((3^2)^y=3^3\), i.e. \(3^{2y}=3^3\).`],
    ["equate exponents", r`From \(3^{2y}=3^3\): \(2y=3\), so \(y=\tfrac32\).`],
    ["check", r`\(9^{3/2}=(\sqrt9)^3=3^3=27\) ✓.`]],
    r`\(\log_9 27=\tfrac32\).`, G41_E3 + note(r`the point \((27,\tfrac32)\) is on \(y=\log_9x\), so \(\log_927=1.5\).`))}
  ${ex("Example 4: Product law", r`Simplify \(\log_2(4\cdot8)\).`, [
    ["product law", r`\(\log_2(4\cdot8)=\log_24+\log_28\).`],
    ["evaluate each term", r`\(\log_24+\log_28=2+3\), because \(2^2=4\) and \(2^3=8\).`],
    ["check", r`\(\log_2(4\cdot8)=\log_232=5\) because \(2^5=32\) ✓ (the point \((32,5)\) is on the graph in Example 1).`]],
    r`\(\log_2(4\cdot8)=5\).`)}
  ${ex("Example 5: Quotient law", r`Simplify \(\log_3 54-\log_3 2\).`, [
    ["quotient law", r`\(\log_354-\log_32=\log_3\dfrac{54}{2}\).`],
    ["simplify the argument", r`\(\log_3\dfrac{54}{2}=\log_327\).`],
    ["evaluate", r`\(\log_327=3\) because \(3^3=27\).`]],
    r`\(\log_354-\log_32=3\).`, G41_E5 + note(r`\(\log_354\approx3.63\) and \(\log_32\approx0.63\); their difference is \(3=\log_327\), the point \((27,3)\).`))}
  ${ex("Example 6: Power law", r`Simplify \(\log_2(8^2)\).`, [
    ["power law", r`\(\log_2(8^2)=2\log_28\).`],
    ["evaluate", r`\(2\log_28=2\cdot3=6\).`],
    ["check", r`\(8^2=64=2^6\), so \(\log_264=6\) ✓.`]],
    r`\(\log_2(8^2)=6\).`, G41_E6 + note(r`\(\log_28=3\) and \(\log_264=6\): squaring the argument doubles the logarithm.`))}
  ${ex("Example 7: Combine several laws", r`Simplify \(3\log_26-\log_227\).`, [
    ["power law", r`\(3\log_26-\log_227=\log_2(6^3)-\log_227=\log_2216-\log_227\).`],
    ["quotient law", r`\(\log_2216-\log_227=\log_2\dfrac{216}{27}=\log_28\).`],
    ["evaluate", r`\(\log_28=3\) because \(2^3=8\).`]],
    r`\(3\log_26-\log_227=3\).`)}
  ${ex("Example 8: Expand", r`Expand \(\log_2\dfrac{8x^2}{y}\) (with \(x>0,\ y>0\)).`, [
    ["quotient law", r`\(\log_2\dfrac{8x^2}{y}=\log_2(8x^2)-\log_2y\).`],
    ["product law", r`\(\log_2(8x^2)-\log_2y=\log_28+\log_2(x^2)-\log_2y\).`],
    ["power law and evaluate", r`\(\log_28+\log_2(x^2)-\log_2y=3+2\log_2x-\log_2y\).`]],
    r`\(\log_2\dfrac{8x^2}{y}=3+2\log_2x-\log_2y\).`)}
  ${ex("Example 9: Change of base", r`Evaluate \(\log_5 40\) to two decimal places.`, [
    ["change of base", r`\(\log_540=\dfrac{\log40}{\log5}\), using base-10 logs on a calculator.`],
    ["calculate", r`\(\dfrac{\log40}{\log5}\approx\dfrac{1.6021}{0.6990}\approx2.29\).`],
    ["check", r`\(5^{2.29}\approx40\): \(5^2=25\) and \(5^3=125\), and \(40\) is between them, so an exponent between \(2\) and \(3\) is reasonable ✓.`]],
    r`\(\log_540\approx2.29\).`, G41_E9 + note(r`\(\log_55=1\) and \(\log_525=2\), so \(\log_540\) lies between them, at about \(2.29\).`))}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, r`Find \(\log_3 27\).`, [
    ["exponential form", r`Write \(\log_327=y\) as \(3^y=27\).`],
    ["solve", r`Since \(27=3^3\), \(3^y=3^3\) gives \(y=3\).`]],
    r`\(\log_327=3\).`, G41_Q1 + note(r`the point \((27,3)\) is on \(y=\log_3x\), so \(\log_327=3\).`))}
  ${pr(2, r`Write \(2^5=32\) in log form.`, [
    ["identify the parts", r`In \(2^5=32\) the base is \(2\), the exponent is \(5\), and the result is \(32\).`],
    ["logarithmic form", r`The exponent is the logarithm and the result is the argument: \(\log_232=5\).`]],
    r`\(\log_232=5\).`)}
  ${pr(3, r`Find \(\log 100\).`, [
    ["base", r`\(\log100\) has no written base, so it is \(\log_{10}100\).`],
    ["exponential form", r`Write \(\log_{10}100=y\) as \(10^y=100=10^2\), so \(y=2\).`]],
    r`\(\log100=2\).`, G41_Q3 + note(r`\(y=\log x\) passes through \((1,0)\), \((10,1)\) and \((100,2)\), so \(\log100=2\).`))}
  ${pr(4, r`Simplify \(\log_3(9\cdot 27)\).`, [
    ["product law", r`\(\log_3(9\cdot27)=\log_39+\log_327\).`],
    ["evaluate", r`\(\log_39+\log_327=2+3=5\), because \(3^2=9\) and \(3^3=27\).`],
    ["check", r`\(9\cdot27=243=3^5\), so \(\log_3243=5\) ✓.`]],
    r`\(\log_3(9\cdot27)=5\).`)}
  ${pr(5, r`Simplify \(\log_5(25^3)\).`, [
    ["power law", r`\(\log_5(25^3)=3\log_525\).`],
    ["evaluate", r`\(3\log_525=3\cdot2=6\), because \(5^2=25\).`],
    ["check", r`\(25^3=(5^2)^3=5^6\), so \(\log_5(5^6)=6\) ✓.`]],
    r`\(\log_5(25^3)=6\).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: What does a logarithm represent?", "The exponent you raise the base to.")}
  ${qa("Q2: How do exponential and log form relate?", r`\(\log_b x=y\iff b^y=x\).`)}
  ${qa("Q3: What do the laws do?", "Turn products/quotients/powers into sums/differences/multiples.")}
  ${qa("Q4: What is change of base for?", r`Evaluating any base with a calculator's \(\log\) or \(\ln\).`)}
  ${qa("Q5: What must be true of the argument of a logarithm?", r`It must be positive: \(\log_b x\) is only defined for \(x>0\). So \(\log(-5)\) and \(\log 0\) are undefined.`)}
  ${qa("Q6: Is \\(\\log(x+y)=\\log x+\\log y\\)?", r`No. Only the product law holds: \(\log(xy)=\log x+\log y\). Sums inside a logarithm cannot be split.`)}
</div>`),
]);

// ═════════════════════════ 4.2 ═════════════════════════
const f42a = (x) => lg10(x - 2) + 1;
const G42_1 = pgraph({
  title: "y = log x", zx: 40, zy: 60, cx: 6, cy: 0.5, vlines: [0],
  curves: [{ expr: "log(x)", color: G }],
  points: onCurve([0.1, 1, 10], lg10, G, "below"),
});
const G42_2 = pgraph({
  title: "y = log(x−2) + 1", zx: 40, zy: 60, cx: 6, cy: 1, vlines: [2],
  curves: [{ expr: "log(x)", color: P }, { expr: "log(x-2)+1", color: G }],
  points: [...onCurve([1, 10], lg10, P, "below"), ...onCurve([3, 12], f42a, G, "above")],
});
const G42_3 = pgraph({
  title: "y = 2ˣ and its inverse", zx: 45, zy: 38, cx: 2.5, cy: 2.5,
  curves: [{ expr: "2^x", color: P }, { expr: "ln(x)/ln(2)", color: G }, { expr: "x", color: C.line, w: 1.6 }], vlines: [0],
  points: [...onCurve([1, 2, 3], (x) => 2 ** x, P, "left"), ...onCurve([2, 4, 8], lg2, G, "below")],
});
const f42d = (x) => lg10(-x);
const G42_4 = pgraph({
  title: "y = log(−x)", zx: 40, zy: 60, cx: -5, cy: 0.5, vlines: [0],
  curves: [{ expr: "log(x)", color: P }, { expr: "log(-x)", color: G }],
  points: [...onCurve([1, 10], lg10, P, "below"), ...onCurve([-1, -10], f42d, G, "below")],
});
const f42e = (x) => lg10(2 * x - 6);
const G42_5 = pgraph({
  title: "y = log(2x − 6)", zx: 40, zy: 60, cx: 6, cy: 0.5, vlines: [3],
  curves: [{ expr: "log(x)", color: P }, { expr: "log(2*x-6)", color: G }],
  points: [...onCurve([1, 10], lg10, P, "below"), ...onCurve([3.5, 8], f42e, G, "above")],
});
const f42f = (x) => 2 * lg2(x - 3) - 1;
const G42_6 = pgraph({
  title: "y = 2·log₂(x−3) − 1", zx: 40, zy: 30, cx: 6, cy: 1, vlines: [3],
  curves: [{ expr: "ln(x)/ln(2)", color: P }, { expr: "2*ln(x-3)/ln(2)-1", color: G }],
  points: [...onCurve([0.5, 1, 2, 4], lg2, P, "below"), ...onCurve([3.5, 4, 5, 7], f42f, G, "right")],
});
const G42_Q1 = pgraph({ title: "y = log₂x", zx: 40, zy: 60, cx: 4, cy: 1, vlines: [0], curves: [{ expr: "ln(x)/ln(2)", color: G }], points: onCurve([0.5, 1, 2, 4, 8], lg2, G, "below") });
const f42q2 = (x) => lg10(x + 3);
const G42_Q2 = pgraph({ title: "y = log(x+3)", zx: 40, zy: 60, cx: 3, cy: 0.5, vlines: [-3], curves: [{ expr: "log(x+3)", color: G }], points: onCurve([-2.9, -2, 7], f42q2, G, "below") });
const G42_Q3 = pgraph({
  title: "y = log₂x, log x, log₅x", zx: 40, zy: 60, cx: 6, cy: 0.5, vlines: [0],
  curves: [{ expr: "ln(x)/ln(2)", color: G }, { expr: "log(x)", color: O }, { expr: "ln(x)/ln(5)", color: P }],
  points: [{ x: 1, y: 0, c: G, on: lg2, pos: "below" }],
});
const G42_Q5 = pgraph({
  title: "y = 3ˣ and y = log₃x", zx: 45, zy: 38, cx: 3, cy: 3,
  curves: [{ expr: "3^x", color: P }, { expr: "ln(x)/ln(3)", color: G }, { expr: "x", color: C.line, w: 1.6 }], vlines: [0],
  points: [...onCurve([0, 1, 2], (x) => 3 ** x, P, "left"), ...onCurve([1, 3, 9], lg3, G, "below")],
});
u4["4.2"] = L("4.2", "Graphs of Logarithmic Functions", [
  html(`<div class="lecture-box">
  <h1>📈 Graphs of Logarithmic Functions</h1>
  ${r`<p><strong>Overview.</strong> The graph of \(y=\log_b x\) is the <strong>reflection of \(y=b^x\) in the line \(y=x\)</strong> — they are inverses. So the exponential's horizontal asymptote becomes the logarithm's <strong>vertical asymptote</strong> at \(x=0\). The log graph has domain \(x>0\), range all reals, and always passes through \((1,0)\).</p>
  <p><strong>How to write your solutions.</strong> Write the whole function in each step, e.g. "the argument of \(y=\log(x-2)+1\) must be positive: \(x-2>0\)".</p>
  <h2>📌 Key features of \(y=\log_b x\)</h2>
  <ul>
    <li><strong>Vertical asymptote:</strong> \(x=0\) (the y-axis). <strong>Domain:</strong> \(x>0\); <strong>range:</strong> all reals.</li>
    <li>Passes through \((1,0)\) and \((b,1)\); increasing for \(b>1\).</li>
    <li><strong>Transformations of \(y=a\log_b\big(k(x-d)\big)+c\):</strong> the vertical asymptote moves to \(x=d\); the domain is the set where \(k(x-d)>0\).</li>
  </ul>
  <div style="background:#eef2ff;border-left:4px solid #6366f1;padding:8px 12px;border-radius:6px;margin:8px 0;"><strong>Mapping rule (as in lesson 1.4).</strong> Every point \((x,y)\) on \(y=\log_b x\) moves to \(\left(\dfrac{x}{k}+d,\ a\,y+c\right)\). Use the key points \(\left(\tfrac1b,-1\right),\ (1,0),\ (b,1),\ (b^2,2)\) of the parent and map each one.</div>
  <h2>🧭 How to graph a transformed logarithm</h2>
  <ol>
    <li>Match the function to \(y=a\log_b\big(k(x-d)\big)+c\) and read \(a,\ k,\ d,\ c\).</li>
    <li>Draw the vertical asymptote \(x=d\); state the domain.</li>
    <li>Map the parent's key points with the mapping rule and plot them.</li>
    <li>Sketch the curve through the points, approaching the asymptote (never touching it).</li>
    <li>Find the intercepts: set \(y=0\) for the x-intercept; substitute \(x=0\) for the y-intercept (only if \(0\) is in the domain).</li>
  </ol>`}
  <h2>🔵 Examples</h2>
  ${ex("Example 1: Read every feature at once", r`For \(y=\log x\), state the domain, range, vertical asymptote, key points, and whether it increases.`, [
    ["domain", r`The argument of \(y=\log x\) must be positive, so the domain is \(x>0\).`],
    ["vertical asymptote", r`As \(x\to0^+\), \(y=\log x\to-\infty\), so the vertical asymptote is \(x=0\).`],
    ["range and direction", r`\(y=\log x\) takes every real value, so the range is \(\mathbb{R}\). The base \(10>1\), so the function is increasing.`],
    ["key points", r`\(\log0.1=-1\), \(\log1=0\), \(\log10=1\), so \((0.1,-1)\), \((1,0)\) and \((10,1)\) are on \(y=\log x\).`]],
    r`for \(y=\log x\): domain \(x>0\), range \(\mathbb{R}\), VA \(x=0\), through \((1,0)\), increasing.`, G42_1)}
  ${ex("Example 2: Transform — track all features", r`Describe \(y=\log(x-2)+1\): give its vertical asymptote and the image of the points \((1,0)\) and \((10,1)\).`, [
    ["parameters", r`Compare \(y=\log(x-2)+1\) with \(y=a\log\big(k(x-d)\big)+c\): \(a=1,\ k=1,\ d=2,\ c=1\).`],
    ["domain and asymptote", r`The argument of \(y=\log(x-2)+1\) must be positive: \(x-2>0\Rightarrow x>2\). So the domain is \(x>2\) and the VA is \(x=2\).`],
    ["mapping rule", r`\((x,y)\to\left(\tfrac{x}{1}+2,\ y+1\right)=(x+2,\ y+1)\). So \((1,0)\to(3,1)\) and \((10,1)\to(12,2)\).`],
    ["check", r`\(y=\log(3-2)+1=\log1+1=1\) ✓ and \(y=\log(12-2)+1=\log10+1=2\) ✓.`]],
    r`for \(y=\log(x-2)+1\): VA \(x=2\), domain \(x>2\), passes through \((3,1)\) and \((12,2)\).`, G42_2 + note(r`the parent \(y=\log x\) (grey) and \(y=\log(x-2)+1\) (green), with the vertical asymptote \(x=2\).`))}
  ${ex("Example 3: Inverse of an exponential", r`Find the inverse of \(y=2^x\) and state how the graphs are related.`, [
    ["swap x and y", r`Start from \(y=2^x\). Swap \(x\) and \(y\): \(x=2^y\).`],
    ["solve for y", r`In logarithmic form, \(x=2^y\) is \(y=\log_2x\).`],
    ["points swap too", r`A point \((a,b)\) on \(y=2^x\) becomes \((b,a)\) on \(y=\log_2x\): \((1,2)\to(2,1)\), \((2,4)\to(4,2)\), \((3,8)\to(8,3)\).`],
    ["features swap", r`\(y=2^x\) has domain \(\mathbb{R}\), range \(y>0\) and horizontal asymptote \(y=0\). Its inverse \(y=\log_2x\) has domain \(x>0\), range \(\mathbb{R}\) and vertical asymptote \(x=0\).`]],
    r`the inverse of \(y=2^x\) is \(y=\log_2x\), the reflection of \(y=2^x\) in the line \(y=x\).`, G42_3)}
  ${ex("Example 4: Reflection flips the domain", r`State the domain and vertical asymptote of \(y=\log(-x)\), and map the points \((1,0)\) and \((10,1)\).`, [
    ["domain", r`The argument of \(y=\log(-x)\) must be positive: \(-x>0\Rightarrow x<0\).`],
    ["asymptote", r`\(y=\log(-x)\to-\infty\) as \(x\to0^-\), so the vertical asymptote is still \(x=0\).`],
    ["mapping rule", r`Here \(k=-1,\ a=1,\ d=0,\ c=0\), so \((x,y)\to\left(\tfrac{x}{-1},\ y\right)=(-x,\ y)\). Then \((1,0)\to(-1,0)\) and \((10,1)\to(-10,1)\).`],
    ["check", r`\(y=\log(-(-10))=\log10=1\) ✓.`]],
    r`for \(y=\log(-x)\): domain \(x<0\), VA \(x=0\); the graph is \(y=\log x\) reflected in the y-axis.`, G42_4)}
  ${ex("Example 5: Find the domain of a transformed log", r`For what \(x\) is \(y=\log(2x-6)\) defined? Give its asymptote and two points.`, [
    ["require a positive argument", r`For \(y=\log(2x-6)\) we need \(2x-6>0\).`],
    ["solve", r`\(2x>6\Rightarrow x>3\), so the domain is \(x>3\) and the VA is \(x=3\).`],
    ["factor out k", r`\(2x-6=2(x-3)\), so \(y=\log\big(2(x-3)\big)\) has \(k=2,\ d=3\). The mapping rule is \((x,y)\to\left(\tfrac{x}{2}+3,\ y\right)\).`],
    ["points and check", r`\((1,0)\to(3.5,0)\) and \((10,1)\to(8,1)\). Check: \(y=\log(2\cdot8-6)=\log10=1\) ✓.`]],
    r`for \(y=\log(2x-6)\): domain \(x>3\), VA \(x=3\), passes through \((3.5,0)\) and \((8,1)\).`, G42_5)}
  ${ex("Example 6: A full transformation", r`Analyse \(y=2\log_2(x-3)-1\): domain, asymptote, range, key points, and intercepts.`, [
    ["parameters", r`Compare \(y=2\log_2(x-3)-1\) with \(y=a\log_2\big(k(x-d)\big)+c\): \(a=2,\ k=1,\ d=3,\ c=-1\).`],
    ["domain, asymptote, range", r`The argument of \(y=2\log_2(x-3)-1\) must be positive: \(x-3>0\), so the domain is \(x>3\) and the VA is \(x=3\). The range is \(\mathbb{R}\). Since \(a>0\) and \(2>1\), the function is increasing.`],
    ["mapping rule", r`\((x,y)\to\left(\tfrac{x}{1}+3,\ 2y-1\right)\). Map the parent points of \(y=\log_2x\): \(\left(\tfrac12,-1\right)\to(3.5,-3)\), \((1,0)\to(4,-1)\), \((2,1)\to(5,1)\), \((4,2)\to(7,3)\).`],
    ["x-intercept", r`Set \(y=0\) in \(y=2\log_2(x-3)-1\): \(2\log_2(x-3)=1\Rightarrow\log_2(x-3)=\tfrac12\Rightarrow x-3=2^{1/2}\), so \(x=3+\sqrt2\approx4.41\).`],
    ["y-intercept", r`\(x=0\) is not in the domain \(x>3\) of \(y=2\log_2(x-3)-1\), so there is no y-intercept.`]],
    r`for \(y=2\log_2(x-3)-1\): domain \(x>3\), VA \(x=3\), range \(\mathbb{R}\), x-intercept \(\approx4.41\), no y-intercept.`, G42_6)}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, r`Domain of \(y=\log_2 x\)?`, [
    ["positive argument", r`The argument of \(y=\log_2x\) must be positive, so \(x>0\).`],
    ["check", r`The graph exists only to the right of the y-axis: \(\log_20\) and \(\log_2(-1)\) are undefined.`]],
    r`the domain of \(y=\log_2x\) is \(x>0\).`, G42_Q1)}
  ${pr(2, r`VA of \(y=\log(x+3)\)?`, [
    ["positive argument", r`The argument of \(y=\log(x+3)\) must be positive: \(x+3>0\Rightarrow x>-3\).`],
    ["asymptote", r`As \(x\to-3^+\), \(y=\log(x+3)\to-\infty\). Here \(d=-3\), so the graph of \(y=\log x\) has moved left 3.`]],
    r`the vertical asymptote of \(y=\log(x+3)\) is \(x=-3\).`, G42_Q2)}
  ${pr(3, r`What is \(\log_b 1\)?`, [
    ["exponential form", r`Write \(\log_b1=y\) as \(b^y=1\).`],
    ["solve", r`Any base to the power \(0\) is \(1\), so \(y=0\). This holds for every base \(b>0,\ b\ne1\).`]],
    r`\(\log_b1=0\); every graph \(y=\log_bx\) passes through \((1,0)\).`, G42_Q3)}
  ${pr(4, r`Is \(y=\log_2 x\) increasing or decreasing?`, [
    ["look at the base", r`The base of \(y=\log_2x\) is \(2>1\), so the function is increasing.`],
    ["check with values", r`\(\log_22=1<\log_24=2<\log_28=3\): as \(x\) grows, \(y\) grows.`]],
    r`\(y=\log_2x\) is increasing.`, G42_Q1)}
  ${pr(5, r`What is the inverse of \(y=3^x\)?`, [
    ["swap x and y", r`Start from \(y=3^x\) and swap: \(x=3^y\).`],
    ["logarithmic form", r`\(x=3^y\) is the same as \(y=\log_3x\).`],
    ["check with points", r`\((1,3)\) on \(y=3^x\) becomes \((3,1)\) on \(y=\log_3x\) ✓.`]],
    r`the inverse of \(y=3^x\) is \(y=\log_3x\).`, G42_Q5)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: How is the log graph related to the exponential?", r`It's the reflection in \(y=x\) — they're inverses.`)}
  ${qa("Q2: Where is the vertical asymptote?", r`At \(x=0\), shifted to \(x=d\) by a horizontal translation.`)}
  ${qa("Q3: What is the domain?", r`\(x>0\) (the argument must be positive). For a transformed log, solve argument \(>0\).`)}
  ${qa("Q4: What point is always on the graph?", r`\((1,0)\) for \(y=\log_bx\); the transformed point comes from the mapping rule.`)}
  ${qa("Q5: How do you graph a transformed log quickly?", r`Read \(a,k,d,c\), draw \(x=d\), map the key points \(\left(\tfrac1b,-1\right),(1,0),(b,1)\) with \((x,y)\to\left(\tfrac{x}{k}+d,\ ay+c\right)\), and sketch.`)}
</div>`),
  graph("ln(x)/ln(b)", "b", { xMin: 0, xMax: 8, yMin: -4, yMax: 4, paramMin: 2, paramMax: 10, paramInit: 2, caption: "Animation: y = log_b(x). Slide the base b — a larger base makes the curve rise more slowly." }),
]);

// ═════════════════════════ 4.3 ═════════════════════════
const e2x = (x) => 2 ** x;
const G43_1 = pgraph({ title: "2ˣ = 8", zx: 55, zy: 30, cx: 2, cy: 4, curves: [{ expr: "2^x", color: G }], hlines: [8], points: [{ x: 3, y: 8, c: G, on: e2x, pos: "above", text: "(3, 8)" }] });
const G43_2 = pgraph({ title: "4ˣ = 8", zx: 70, zy: 30, cx: 1, cy: 4, curves: [{ expr: "4^x", color: G }], hlines: [8], points: [{ x: 1.5, y: 8, c: G, on: (x) => 4 ** x, pos: "above", text: "(1.5, 8)" }] });
const G43_3 = pgraph({
  title: "2^(x+1) = 4^(x−1)", zx: 60, zy: 15, cx: 2.5, cy: 10,
  curves: [{ expr: "2^(x+1)", color: G }, { expr: "4^(x-1)", color: O }],
  points: [{ x: 3, y: 16, c: G, on: (x) => 2 ** (x + 1), pos: "left", text: "(3, 16)" }, { x: 3, y: 16, c: O, on: (x) => 4 ** (x - 1), pos: "right", text: "" }],
});
const G43_4 = pgraph({ title: "2ˣ = 10", zx: 60, zy: 25, cx: 2.5, cy: 6, curves: [{ expr: "2^x", color: G }], hlines: [10], points: [{ x: lg2(10), y: 10, c: G, on: e2x, pos: "above", text: "(3.32, 10)" }] });
const G43_5 = pgraph({ title: "5·3ˣ = 200", zx: 60, zy: 0.8, cx: 2.5, cy: 100, curves: [{ expr: "5*3^x", color: G }], hlines: [200], points: [{ x: lg3(40), y: 200, c: G, on: (x) => 5 * 3 ** x, pos: "above", text: "(3.36, 200)" }] });
const G43_6 = pgraph({ title: "log₂x = 5", zx: 13, zy: 40, cx: 20, cy: 2.5, vlines: [0], curves: [{ expr: "ln(x)/ln(2)", color: G }], hlines: [5], points: [{ x: 32, y: 5, c: G, on: lg2, pos: "below", text: "(32, 5)" }] });
const G43_7 = pgraph({ title: "log₃(2x−1) = 2", zx: 45, zy: 50, cx: 4, cy: 1, vlines: [0.5], curves: [{ expr: "ln(2*x-1)/ln(3)", color: G }], hlines: [2], points: [{ x: 5, y: 2, c: G, on: (x) => lg3(2 * x - 1), pos: "below", text: "(5, 2)" }] });
const G43_8 = pgraph({ title: "log x + log(x−3) = 1", zx: 40, zy: 60, cx: 5, cy: 0, vlines: [3], curves: [{ expr: "log(x)+log(x-3)", color: G }], hlines: [1], points: [{ x: 5, y: 1, c: G, on: (x) => lg10(x) + lg10(x - 3), pos: "above", text: "(5, 1)" }] });
const f439 = (x) => 9 ** x - 4 * 3 ** x + 3;
const G43_9 = pgraph({ title: "y = 9ˣ − 4·3ˣ + 3", zx: 120, zy: 45, cx: 0.5, cy: 0, curves: [{ expr: "9^x-4*3^x+3", color: G }], points: [{ x: 0, y: 0, c: G, on: f439, pos: "above" }, { x: 1, y: 0, c: G, on: f439, pos: "above" }] });
const G43_Q1 = pgraph({ title: "2ˣ = 16", zx: 55, zy: 8, cx: 2, cy: 8, curves: [{ expr: "2^x", color: G }], hlines: [16], points: [{ x: 4, y: 16, c: G, on: e2x, pos: "above", text: "(4, 16)" }] });
const G43_Q2 = pgraph({ title: "5ˣ = 125", zx: 60, zy: 1.8, cx: 2, cy: 60, curves: [{ expr: "5^x", color: G }], hlines: [125], points: [{ x: 3, y: 125, c: G, on: (x) => 5 ** x, pos: "left", text: "(3, 125)" }] });
const G43_Q3 = pgraph({ title: "3ˣ = 20", zx: 60, zy: 12, cx: 2, cy: 10, curves: [{ expr: "3^x", color: G }], hlines: [20], points: [{ x: lg3(20), y: 20, c: G, on: (x) => 3 ** x, pos: "above", text: "(2.73, 20)" }] });
const G43_Q4 = pgraph({ title: "log₃x = 4", zx: 6, zy: 50, cx: 45, cy: 2, vlines: [0], curves: [{ expr: "ln(x)/ln(3)", color: G }], hlines: [4], points: [{ x: 81, y: 4, c: G, on: lg3, pos: "below", text: "(81, 4)" }] });
const G43_Q5 = pgraph({ title: "log(x+2) = 1", zx: 30, zy: 60, cx: 4, cy: 0.5, vlines: [-2], curves: [{ expr: "log(x+2)", color: G }], hlines: [1], points: [{ x: 8, y: 1, c: G, on: (x) => lg10(x + 2), pos: "below", text: "(8, 1)" }] });
u4["4.3"] = L("4.3", "Solving Exponential & Logarithmic Equations", [
  html(`<div class="lecture-box">
  <h1>🧩 Solving Exponential &amp; Logarithmic Equations</h1>
  ${r`<p><strong>Overview.</strong> Two main moves. If both sides can be written with the <strong>same base</strong>, set the exponents equal. Otherwise, <strong>take the logarithm of both sides</strong> and use the power law to bring the exponent down. For <strong>logarithmic</strong> equations, rewrite in exponential form (or combine logs first), then always <strong>check</strong> that each argument stays positive.</p>
  <p><strong>How to write your solutions.</strong> Write the <em>whole</em> equation in every step, even when you change only one side.</p>
  <h2>📌 The strategies</h2>
  <div style="overflow-x:auto;margin:10px 0;"><table style="border-collapse:collapse;font-size:14px;">
    <thead><tr style="background:#eef2ff;color:#3730a3;"><th style="border:1px solid #c7d2fe;padding:6px 10px;">Type of equation</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Method</th><th style="border:1px solid #c7d2fe;padding:6px 10px;">Example</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">Same base is possible</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(b^{f(x)}=b^{g(x)}\Rightarrow f(x)=g(x)\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(2^x=8\)</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">Different bases</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">isolate the power, take logs: \(b^x=c\Rightarrow x=\dfrac{\log c}{\log b}\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(2^x=10\)</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">One logarithm</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">exponential form: \(\log_bx=k\Rightarrow x=b^k\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\log_2x=5\)</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">Several logarithms</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">combine with the laws first, then exponential form</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(\log x+\log(x-3)=1\)</td></tr>
      <tr><td style="border:1px solid #e2e8f0;padding:6px 10px;">Quadratic in \(b^x\)</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">substitute \(u=b^x\), solve, then back-substitute</td><td style="border:1px solid #e2e8f0;padding:6px 10px;">\(9^x-4\cdot3^x+3=0\)</td></tr>
    </tbody>
  </table></div>
  <ul>
    <li><strong>Isolate first.</strong> If a number multiplies the power (as in \(5\cdot3^x=200\)), divide it away <em>before</em> taking logs.</li>
    <li><strong>Check every answer.</strong> For a logarithmic equation, each argument must be positive; reject any solution that is not.</li>
    <li><strong>Graphical meaning:</strong> the solution of \(f(x)=c\) is the x-coordinate where the curve \(y=f(x)\) meets the line \(y=c\).</li>
  </ul>`}
  <h2>🔵 Examples</h2>
  ${ex("Example 1: Same base", r`Solve \(2^x=8\).`, [
    ["common base", r`Write \(8\) as a power of \(2\): \(8=2^3\), so \(2^x=8\) becomes \(2^x=2^3\).`],
    ["equate the exponents", r`Both sides of \(2^x=2^3\) have the base \(2\), so \(x=3\).`],
    ["check", r`\(2^3=8\) ✓. On the graph, the curve \(y=2^x\) meets the line \(y=8\) at \((3,8)\).`]],
    r`\(x=3\).`, G43_1)}
  ${ex("Example 2: Rewrite both sides to a common base", r`Solve \(4^x=8\).`, [
    ["common base", r`Write each side of \(4^x=8\) as a power of \(2\): \((2^2)^x=2^3\), i.e. \(2^{2x}=2^3\).`],
    ["equate the exponents", r`From \(2^{2x}=2^3\): \(2x=3\).`],
    ["solve", r`\(2x=3\Rightarrow x=\tfrac32\).`],
    ["check", r`\(4^{3/2}=(\sqrt4)^3=2^3=8\) ✓.`]],
    r`\(x=\tfrac32\).`, G43_2)}
  ${ex("Example 3: Unknown in both exponents", r`Solve \(2^{x+1}=4^{x-1}\).`, [
    ["common base", r`Write \(4=2^2\): \(2^{x+1}=(2^2)^{x-1}=2^{2(x-1)}=2^{2x-2}\).`],
    ["equate the exponents", r`From \(2^{x+1}=2^{2x-2}\): \(x+1=2x-2\).`],
    ["solve", r`\(x+1=2x-2\Rightarrow3=x\).`],
    ["check", r`\(2^{3+1}=16\) and \(4^{3-1}=16\) ✓. The two curves meet at \((3,16)\).`]],
    r`\(x=3\).`, G43_3)}
  ${ex("Example 4: Take logs", r`Solve \(2^x=10\).`, [
    ["why logs", r`\(10\) is not a power of \(2\), so the bases cannot be matched. Take the logarithm of both sides of \(2^x=10\): \(\log(2^x)=\log10\).`],
    ["power law", r`\(\log(2^x)=\log10\) becomes \(x\log2=\log10=1\).`],
    ["solve", r`\(x\log2=1\Rightarrow x=\dfrac{\log10}{\log2}\approx\dfrac{1}{0.3010}\approx3.32\).`],
    ["check", r`\(2^{3.32}\approx10\): \(2^3=8\) and \(2^4=16\), and \(10\) lies between them ✓.`]],
    r`\(x\approx3.32\).`, G43_4)}
  ${ex("Example 5: Isolate the power first", r`Solve \(5\cdot3^x=200\).`, [
    ["isolate the power", r`Divide both sides of \(5\cdot3^x=200\) by \(5\): \(3^x=40\).`],
    ["take logs", r`Take the logarithm of both sides of \(3^x=40\): \(x\log3=\log40\).`],
    ["solve", r`\(x=\dfrac{\log40}{\log3}\approx\dfrac{1.6021}{0.4771}\approx3.36\).`],
    ["check", r`\(5\cdot3^{3.36}\approx5\cdot40=200\) ✓.`]],
    r`\(x\approx3.36\).`, G43_5)}
  ${ex("Example 6: Log equation", r`Solve \(\log_2 x=5\).`, [
    ["restriction", r`The argument of \(\log_2x=5\) must be positive: \(x>0\).`],
    ["exponential form", r`Rewrite \(\log_2x=5\) as \(2^5=x\), so \(x=32\).`],
    ["check", r`\(32>0\) ✓ and \(\log_232=5\) because \(2^5=32\) ✓.`]],
    r`\(x=32\).`, G43_6)}
  ${ex("Example 7: Log equation with a linear argument", r`Solve \(\log_3(2x-1)=2\).`, [
    ["restriction", r`The argument of \(\log_3(2x-1)=2\) must be positive: \(2x-1>0\Rightarrow x>\tfrac12\).`],
    ["exponential form", r`Rewrite \(\log_3(2x-1)=2\) as \(2x-1=3^2=9\).`],
    ["solve", r`\(2x-1=9\Rightarrow2x=10\Rightarrow x=5\).`],
    ["check", r`\(x=5>\tfrac12\) ✓, and \(\log_3(2\cdot5-1)=\log_39=2\) ✓.`]],
    r`\(x=5\).`, G43_7)}
  ${ex("Example 8: Combine logs, then check", r`Solve \(\log x+\log(x-3)=1\).`, [
    ["restrictions", r`Both arguments of \(\log x+\log(x-3)=1\) must be positive: \(x>0\) and \(x-3>0\), so \(x>3\).`],
    ["product law", r`\(\log x+\log(x-3)=1\) becomes \(\log\big(x(x-3)\big)=1\).`],
    ["exponential form", r`Base 10: \(x(x-3)=10^1\), so \(x^2-3x-10=0\).`],
    ["factor and solve", r`\((x-5)(x+2)=0\Rightarrow x=5\) or \(x=-2\).`],
    ["check the restriction", r`\(x=-2\) fails \(x>3\) (it makes \(\log x\) undefined) — reject it. For \(x=5\): \(\log5+\log2=\log10=1\) ✓.`]],
    r`\(x=5\) only.`, G43_8 + note(r`the curve \(y=\log x+\log(x-3)\) exists only for \(x>3\), and meets the line \(y=1\) once, at \((5,1)\).`))}
  ${ex("Example 9: A quadratic in the exponential", r`Solve \(9^x-4\cdot3^x+3=0\).`, [
    ["same base", r`Write \(9^x=(3^2)^x=(3^x)^2\), so \(9^x-4\cdot3^x+3=0\) becomes \((3^x)^2-4\cdot3^x+3=0\).`],
    ["substitute", r`Let \(u=3^x\): \(u^2-4u+3=0\).`],
    ["solve for u", r`\((u-1)(u-3)=0\Rightarrow u=1\) or \(u=3\).`],
    ["back-substitute", r`\(3^x=1\Rightarrow x=0\); \(3^x=3\Rightarrow x=1\).`],
    ["check", r`\(x=0\): \(9^0-4\cdot3^0+3=1-4+3=0\) ✓. \(x=1\): \(9-12+3=0\) ✓.`]],
    r`\(x=0\) or \(x=1\).`, G43_9 + note(r`the curve \(y=9^x-4\cdot3^x+3\) crosses the x-axis at \((0,0)\) and \((1,0)\).`))}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, r`Solve \(2^x=16\).`, [
    ["common base", r`Write \(16=2^4\): \(2^x=16\) becomes \(2^x=2^4\).`],
    ["equate the exponents", r`\(x=4\). Check: \(2^4=16\) ✓.`]],
    r`\(x=4\).`, G43_Q1)}
  ${pr(2, r`Solve \(5^x=125\).`, [
    ["common base", r`Write \(125=5^3\): \(5^x=125\) becomes \(5^x=5^3\).`],
    ["equate the exponents", r`\(x=3\). Check: \(5^3=125\) ✓.`]],
    r`\(x=3\).`, G43_Q2)}
  ${pr(3, r`Solve \(3^x=20\) (to 2 d.p.).`, [
    ["why logs", r`\(20\) is not a power of \(3\). Take the logarithm of both sides of \(3^x=20\): \(x\log3=\log20\).`],
    ["solve", r`\(x=\dfrac{\log20}{\log3}\approx\dfrac{1.3010}{0.4771}\approx2.73\).`],
    ["check", r`\(3^{2.73}\approx20\): \(3^2=9\) and \(3^3=27\) ✓.`]],
    r`\(x\approx2.73\).`, G43_Q3)}
  ${pr(4, r`Solve \(\log_3 x=4\).`, [
    ["restriction", r`The argument of \(\log_3x=4\) must be positive: \(x>0\).`],
    ["exponential form", r`Rewrite \(\log_3x=4\) as \(x=3^4=81\).`],
    ["check", r`\(81>0\) ✓ and \(\log_381=4\) ✓.`]],
    r`\(x=81\).`, G43_Q4)}
  ${pr(5, r`Solve \(\log(x+2)=1\).`, [
    ["restriction", r`The argument of \(\log(x+2)=1\) must be positive: \(x+2>0\Rightarrow x>-2\).`],
    ["exponential form", r`Base 10: \(\log(x+2)=1\) becomes \(x+2=10^1=10\), so \(x=8\).`],
    ["check", r`\(8>-2\) ✓ and \(\log(8+2)=\log10=1\) ✓.`]],
    r`\(x=8\).`, G43_Q5)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: When can you set exponents equal?", "When both sides share the same base.")}
  ${qa("Q2: What if the bases differ?", "Isolate the power, take logs of both sides, and use the power law.")}
  ${qa("Q3: How do you undo a logarithm?", r`Rewrite in exponential form: \(\log_b x=k\Rightarrow x=b^k\).`)}
  ${qa("Q4: Why check solutions?", "Logarithm arguments must be positive — reject the rest (extraneous roots).")}
  ${qa("Q5: What if a number multiplies the power?", r`Divide it away first: in \(5\cdot3^x=200\) the logs are taken of \(3^x=40\), not of \(200\) alone.`)}
  ${qa("Q6: What does the solution look like on a graph?", r`It is the x-coordinate where the curve meets the horizontal line: \(2^x=8\) is where \(y=2^x\) crosses \(y=8\).`)}
</div>`),
  graph("a^x", "a", { xMin: -3, xMax: 3, yMin: -1, yMax: 9, paramMin: 1.2, paramMax: 4, paramInit: 2, caption: "Animation: y = aˣ. A larger base grows faster — the curve you read across to solve aˣ = c." }),
]);

// ═════════════════════════ 4.4 ═════════════════════════
const g1 = (x) => 100 * 2 ** (x / 5);
const G44_1 = pgraph({ title: "P = 100·2^(t/5)", zx: 45, zy: 0.9, cx: 6, cy: 250, curves: [{ expr: "100*2^(x/5)", color: G }], points: onCurve([0, 5, 10], g1, G, "above") });
const g2 = (x) => 80 * 0.5 ** (x / 3);
const G44_2 = pgraph({ title: "A = 80·(½)^(t/3)", zx: 45, zy: 5, cx: 5, cy: 40, curves: [{ expr: "80*0.5^(x/3)", color: G }], points: onCurve([0, 3, 6], g2, G, "above") });
const G44_3 = pgraph({ title: "1.05ᵗ = 2", zx: 20, zy: 120, cx: 12, cy: 1.5, curves: [{ expr: "1.05^x", color: G }], hlines: [2], points: [{ x: Math.log(2) / Math.log(1.05), y: 2, c: G, on: (x) => 1.05 ** x, pos: "below", text: "(14.21, 2)" }, { x: 0, y: 1, c: G, on: (x) => 1.05 ** x, pos: "above" }] });
const tB = 4 * lg3(40);
const G44_4 = pgraph({ title: "P = 500·3^(t/4)", zx: 32, zy: 0.02, cx: 8, cy: 10000, curves: [{ expr: "500*3^(x/4)", color: G }], hlines: [20000], points: [{ x: tB, y: 20000, c: G, on: (x) => 500 * 3 ** (x / 4), pos: "below", text: "(13.43, 20000)" }, { x: 0, y: 500, c: G, on: (x) => 500 * 3 ** (x / 4), pos: "above" }] });
const G44_5 = pgraph({ title: "A = 80·(½)^(t/3) = 10", zx: 40, zy: 5, cx: 6, cy: 40, curves: [{ expr: "80*0.5^(x/3)", color: G }], hlines: [10], points: [{ x: 9, y: 10, c: G, on: g2, pos: "above", text: "(9, 10)" }, ...onCurve([0, 3, 6], g2, G, "above")] });
const G44_7 = pgraph({ title: "amplitude ratio = 10^d", zx: 100, zy: 0.25, cx: 1.5, cy: 500, curves: [{ expr: "10^x", color: G }], points: onCurve([0, 1, 2, 3], (x) => 10 ** x, G, "above") });
const q1 = (x) => 200 * 2 ** (x / 4), q2 = (x) => 160 * 0.5 ** (x / 5);
const G44_Q1 = pgraph({ title: "P = 200·2^(t/4)", zx: 45, zy: 0.5, cx: 5, cy: 400, curves: [{ expr: "200*2^(x/4)", color: G }], points: onCurve([0, 4, 8], q1, G, "above") });
const G44_Q2 = pgraph({ title: "A = 160·(½)^(t/5)", zx: 40, zy: 2.5, cx: 6, cy: 80, curves: [{ expr: "160*0.5^(x/5)", color: G }], points: onCurve([0, 5, 10], q2, G, "above") });
const G44_Q3 = pgraph({ title: "1.1ᵗ = 2", zx: 30, zy: 120, cx: 8, cy: 1.5, curves: [{ expr: "1.1^x", color: G }], hlines: [2], points: [{ x: Math.log(2) / Math.log(1.1), y: 2, c: G, on: (x) => 1.1 ** x, pos: "below", text: "(7.27, 2)" }, { x: 0, y: 1, c: G, on: (x) => 1.1 ** x, pos: "above" }] });
const G44_Q5 = pgraph({ title: "amplitude ratio = 10^d", zx: 100, zy: 0.25, cx: 1.5, cy: 500, curves: [{ expr: "10^x", color: G }], points: [{ x: 3, y: 1000, c: G, on: (x) => 10 ** x, pos: "left", text: "(3, 1000)" }, { x: 0, y: 1, c: G, on: (x) => 10 ** x, pos: "above" }] });
u4["4.4"] = L("4.4", "Applications of Exponential & Log Models", [
  html(`<div class="lecture-box">
  <h1>🌍 Applications of Exponential &amp; Log Models</h1>
  ${r`<p><strong>Overview.</strong> Exponential models \(A=A_0\,b^{\,t/p}\) describe growth (\(b>1\)) and decay (\(0<b<1\)); logarithms solve for the <em>time</em> (doubling time, half-life) and underlie compressed <strong>log scales</strong> like pH, decibels, and the Richter scale, where each unit means a factor of ten.</p>
  <p><strong>How to write your solutions.</strong> State the model first, name what each letter means, and write the <em>whole</em> model in every step (for example "\(P=100\cdot2^{10/5}\)").</p>
  <h2>📌 The models</h2>
  <ul>
    <li><strong>Growth/decay:</strong> \(A=A_0\,b^{\,t/p}\) — \(A_0\) is the starting amount, \(b\) the factor per period (2 for doubling, \(\tfrac12\) for half-life), \(t\) the time, and \(p\) the length of one period.</li>
    <li><strong>Finding an amount:</strong> substitute \(t\) and evaluate. <strong>Finding a time:</strong> isolate the power, then use the same base or take logs.</li>
    <li><strong>Doubling time</strong> for a growth factor \(1+r\): solve \(2=(1+r)^t\), so \(t=\dfrac{\log2}{\log(1+r)}\).</li>
    <li><strong>Log scales:</strong> \(\text{pH}=-\log[\text{H}^+]\); each Richter/decibel step is \(\times10\).</li>
  </ul>
  <div style="background:#eef2ff;border-left:4px solid #6366f1;padding:8px 12px;border-radius:6px;margin:8px 0;"><strong>Which method?</strong> If the target is a whole number of periods (like \(\left(\tfrac12\right)^{t/3}=\tfrac18\)), match the bases. Otherwise take logs of both sides.</div>`}
  <h2>🔵 Examples</h2>
  ${ex("Example 1: Growth", r`A colony of 100 doubles every 5 h: \(P=100\cdot2^{\,t/5}\). Find \(P\) at \(t=10\).`, [
    ["read the model", r`In \(P=100\cdot2^{t/5}\): \(P_0=100\), the factor is \(2\) (doubling) and the period is \(p=5\) h.`],
    ["substitute", r`Put \(t=10\) into \(P=100\cdot2^{t/5}\): \(P=100\cdot2^{10/5}=100\cdot2^{2}\).`],
    ["evaluate", r`\(100\cdot2^2=100\cdot4=400\).`],
    ["check", r`Two periods of 5 h pass, so the colony doubles twice: \(100\to200\to400\) ✓ (the points on the graph).`]],
    r`\(P=400\).`, G44_1)}
  ${ex("Example 2: Half-life", r`80 mg decays with half-life 3 h: \(A=80\left(\tfrac12\right)^{t/3}\). Find \(A\) at \(t=6\).`, [
    ["read the model", r`In \(A=80\left(\tfrac12\right)^{t/3}\): \(A_0=80\) mg, the factor is \(\tfrac12\) and the half-life is \(p=3\) h.`],
    ["substitute", r`Put \(t=6\) into \(A=80\left(\tfrac12\right)^{t/3}\): \(A=80\left(\tfrac12\right)^{6/3}=80\left(\tfrac12\right)^2\).`],
    ["evaluate", r`\(80\cdot\tfrac14=20\).`],
    ["check", r`Two half-lives pass: \(80\to40\to20\) ✓.`]],
    r`\(A=20\) mg.`, G44_2)}
  ${ex("Example 3: Solve for time (doubling)", r`An investment grows at 5%/yr. How long to double?`, [
    ["model", r`The yearly growth factor is \(1.05\), so \(A=A_0(1.05)^t\).`],
    ["set up the doubling", r`Doubling means \(A=2A_0\): \(2A_0=A_0(1.05)^t\), so \(2=1.05^{\,t}\).`],
    ["take logs", r`Take the logarithm of both sides of \(2=1.05^t\): \(\log2=t\log1.05\).`],
    ["solve", r`\(t=\dfrac{\log2}{\log1.05}\approx\dfrac{0.3010}{0.02119}\approx14.2\).`],
    ["check", r`\(1.05^{14.2}\approx2.00\) ✓.`]],
    r`the investment doubles in about \(14.2\) years.`, G44_3)}
  ${ex("Example 4: Solve for time (growth)", r`Bacteria triple every 4 h from 500: \(P=500\cdot3^{\,t/4}\). When do they reach 20 000?`, [
    ["set up", r`Set \(P=20000\) in \(P=500\cdot3^{t/4}\): \(500\cdot3^{t/4}=20000\).`],
    ["isolate the power", r`Divide both sides of \(500\cdot3^{t/4}=20000\) by \(500\): \(3^{t/4}=40\).`],
    ["take logs", r`Take the logarithm of both sides of \(3^{t/4}=40\): \(\tfrac t4\log3=\log40\).`],
    ["solve", r`\(t=4\cdot\dfrac{\log40}{\log3}\approx4\cdot\dfrac{1.6021}{0.4771}\approx13.4\).`],
    ["check", r`\(500\cdot3^{13.4/4}=500\cdot3^{3.36}\approx500\cdot40=20000\) ✓.`]],
    r`they reach 20 000 after about \(13.4\) hours.`, G44_4)}
  ${ex("Example 5: Solve for time (half-life, same base)", r`For \(A=80\left(\tfrac12\right)^{t/3}\), when is \(A=10\) mg?`, [
    ["set up", r`Set \(A=10\) in \(A=80\left(\tfrac12\right)^{t/3}\): \(80\left(\tfrac12\right)^{t/3}=10\).`],
    ["isolate the power", r`Divide both sides by \(80\): \(\left(\tfrac12\right)^{t/3}=\tfrac18\).`],
    ["common base", r`\(\tfrac18=\left(\tfrac12\right)^3\), so \(\left(\tfrac12\right)^{t/3}=\left(\tfrac12\right)^3\).`],
    ["equate the exponents", r`\(\tfrac t3=3\Rightarrow t=9\).`],
    ["check", r`Three half-lives: \(80\to40\to20\to10\) ✓ (the point \((9,10)\)).`]],
    r`\(A=10\) mg after \(9\) hours (no logs needed).`, G44_5)}
  ${ex("Example 6: pH scale", r`(a) Find the pH if \([\text{H}^+]=10^{-4}\). (b) Find \([\text{H}^+]\) if the pH is \(8.2\).`, [
    ["(a) substitute", r`\(\text{pH}=-\log[\text{H}^+]\) becomes \(\text{pH}=-\log(10^{-4})\).`],
    ["(a) evaluate", r`\(\log(10^{-4})=-4\), so \(\text{pH}=-(-4)=4\).`],
    ["(b) exponential form", r`Start from \(8.2=-\log[\text{H}^+]\), so \(\log[\text{H}^+]=-8.2\), and \([\text{H}^+]=10^{-8.2}\).`],
    ["(b) evaluate", r`\(10^{-8.2}\approx6.3\times10^{-9}\) mol/L.`]],
    r`(a) pH \(=4\); (b) \([\text{H}^+]\approx6.3\times10^{-9}\) mol/L.`)}
  ${ex("Example 7: Richter scale", r`How much stronger is a magnitude-7 quake than a magnitude-5 one?`, [
    ["the scale", r`Each unit of magnitude multiplies the amplitude by \(10\): the ratio is \(10^{d}\), where \(d\) is the difference in magnitude.`],
    ["difference", r`\(d=7-5=2\).`],
    ["ratio", r`\(10^{d}=10^{2}=100\). On the graph of \(y=10^d\), the point \((2,100)\) gives this ratio.`]],
    r`a magnitude-7 quake has \(100\times\) the amplitude of a magnitude-5 quake.`, G44_7)}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, r`\(P=200\cdot2^{\,t/4}\). Find \(P\) at \(t=8\).`, [
    ["substitute", r`Put \(t=8\) into \(P=200\cdot2^{t/4}\): \(P=200\cdot2^{8/4}=200\cdot2^2\).`],
    ["evaluate", r`\(200\cdot4=800\). Check: two doublings, \(200\to400\to800\) ✓.`]],
    r`\(P=800\).`, G44_Q1)}
  ${pr(2, r`\(A=160\left(\tfrac12\right)^{t/5}\). Find \(A\) at \(t=10\).`, [
    ["substitute", r`Put \(t=10\) into \(A=160\left(\tfrac12\right)^{t/5}\): \(A=160\left(\tfrac12\right)^{10/5}=160\left(\tfrac12\right)^2\).`],
    ["evaluate", r`\(160\cdot\tfrac14=40\). Check: two half-lives, \(160\to80\to40\) ✓.`]],
    r`\(A=40\).`, G44_Q2)}
  ${pr(3, r`How long to double at 10%/yr?`, [
    ["model", r`The growth factor is \(1.1\), so \(A=A_0(1.1)^t\).`],
    ["set up the doubling", r`\(2A_0=A_0(1.1)^t\), so \(2=1.1^t\).`],
    ["take logs and solve", r`\(\log2=t\log1.1\Rightarrow t=\dfrac{\log2}{\log1.1}\approx\dfrac{0.3010}{0.04139}\approx7.3\).`]],
    r`the investment doubles in about \(7.3\) years.`, G44_Q3)}
  ${pr(4, r`pH if \([\text{H}^+]=10^{-7}\)?`, [
    ["substitute", r`\(\text{pH}=-\log[\text{H}^+]\) becomes \(\text{pH}=-\log(10^{-7})\).`],
    ["evaluate", r`\(\log(10^{-7})=-7\), so \(\text{pH}=7\) (neutral water).`]],
    r`\(\text{pH}=7\).`)}
  ${pr(5, r`How much stronger is a magnitude-6 quake than a magnitude-3 one?`, [
    ["difference", r`\(d=6-3=3\).`],
    ["ratio", r`The amplitude ratio is \(10^{d}=10^{3}=1000\), the point \((3,1000)\) on \(y=10^d\).`]],
    r`a magnitude-6 quake has \(1000\times\) the amplitude.`, G44_Q5)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: What is the general model?", r`\(A=A_0\,b^{\,t/p}\) (growth if \(b>1\), decay if \(0<b<1\)).`)}
  ${qa("Q2: How do you find a doubling time?", r`Solve with logs: \(t=\dfrac{\log2}{\log(\text{growth factor})}\).`)}
  ${qa("Q3: What is a log scale?", "One where each unit means a factor of ten (pH, dB, Richter).")}
  ${qa("Q4: What is pH?", r`\(-\log[\text{H}^+]\).`)}
  ${qa("Q5: When do you need logs to find a time?", r`When the target is not a whole number of periods. If it is (like \(\tfrac18=\left(\tfrac12\right)^3\)), match the bases instead.`)}
  ${qa("Q6: How do you check a time you solved for?", r`Substitute it back into the whole model: the result should equal the target amount.`)}
</div>`),
  graph("100*1.05^x", "x", { xMin: 0, xMax: 30, yMin: 0, yMax: 450, paramMin: 0, paramMax: 30, paramInit: 14, caption: "Animation: A = 100·1.05ˣ. Slide t to watch a 5%/yr investment double around t ≈ 14.2 years." }),
]);
