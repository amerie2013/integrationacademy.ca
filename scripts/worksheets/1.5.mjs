// Fraction bar helper: n cells, first `shaded` filled light blue, each numbered.
function bar(n, shaded) {
  const w = 200 / n;
  let cells = "";
  for (let i = 0; i < n; i++) {
    const x = (i * w).toFixed(1);
    const fill = i < shaded ? "#bfdbfe" : "#ffffff";
    cells += `<rect x="${x}" y="0.5" width="${w.toFixed(1)}" height="25" fill="${fill}" stroke="#94a3b8" stroke-width="1"/><text x="${(i * w + w / 2).toFixed(1)}" y="17.0" font-size="11" font-weight="700" text-anchor="middle" fill="#1e3a8a">${i + 1}</text>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 26" width="200" height="26" style="display:block;margin:4px 0;max-width:100%">${cells}</svg>`;
}
function fig(inner, cap) {
  return `<div style="margin:7px 0 2px;padding:7px 9px;background:#f8fbff;border:1px solid #dbe4f0;border-radius:6px">${inner}<div style="font-size:9pt;color:#5b6b7f;margin-top:3px">${cap}</div></div>`;
}

export default {
  grade: "MTH1W",
  code: "1.5",
  title: "Fractions & Operations with Positive/Negative Fractions",
  intro: "A full fractions review: proper and improper fractions, adding, subtracting, multiplying, dividing, complex fractions, and order of operations — all with positive and negative signs. The problems are deliberately <i>above the usual Grade&nbsp;9 level</i>: expect several steps, negatives, and word problems.",
  examples: [
    ["Example 1: Simplify with a large GCF", "Simplify $\\dfrac{24}{36}$.", "The GCF of $24$ and $36$ is $12$: $\\dfrac{24\\div12}{36\\div12} = \\dfrac{2}{3}$." + fig(bar(9, 6) + bar(3, 2), "Both bars shade two-thirds — $\\tfrac{24}{36}$ reduces to $\\tfrac{2}{3}$.")],
    ["Example 2: Order three fractions", "Order $\\dfrac{5}{8}, \\dfrac{2}{3}, \\dfrac{7}{12}$ from least to greatest.", "Common denominator $24$: $\\dfrac{5}{8}=\\dfrac{15}{24}$, $\\dfrac{2}{3}=\\dfrac{16}{24}$, $\\dfrac{7}{12}=\\dfrac{14}{24}$.<br>Since $14<15<16$: $\\dfrac{7}{12}, \\dfrac{5}{8}, \\dfrac{2}{3}$."],
    ["Example 3: Proper, improper &amp; mixed", "Classify $\\dfrac{5}{8}$ and $\\dfrac{23}{6}$, then write $\\dfrac{23}{6}$ as a mixed number and $3\\dfrac{3}{4}$ as improper.", "$\\dfrac{5}{8}$ is <b>proper</b> (top $<$ bottom); $\\dfrac{23}{6}$ is <b>improper</b>. $23\\div6 = 3$ r $5$, so $\\dfrac{23}{6}=3\\dfrac{5}{6}$; and $3\\dfrac{3}{4}=\\dfrac{3\\times4+3}{4}=\\dfrac{15}{4}$."],
    ["Example 4: Add, then write as mixed", "Evaluate $\\dfrac{5}{6} + \\dfrac{3}{8}$.", "Common denominator $24$: $\\dfrac{20}{24}+\\dfrac{9}{24}=\\dfrac{29}{24}=1\\dfrac{5}{24}$."],
    ["Example 5: Subtract with negatives", "Evaluate $-\\dfrac{3}{4} - \\dfrac{1}{6}$.", "Common denominator $12$: $-\\dfrac{9}{12}-\\dfrac{2}{12}=-\\dfrac{11}{12}$." + fig(bar(12, 9) + bar(12, 2), "$9$ twelfths and $2$ twelfths combine to $11$ twelfths; both negative &rarr; $-\\tfrac{11}{12}$.")],
    ["Example 6: Multiply &mdash; cancel then sign", "Evaluate $-\\dfrac{8}{9} \\times \\dfrac{3}{4}$.", "Cancel: $\\dfrac{8}{4}=2$, $\\dfrac{3}{9}=\\dfrac{1}{3}$, giving $\\dfrac{2}{3}$. Different signs &rarr; $-\\dfrac{2}{3}$."],
    ["Example 7: Divide two negatives", "Evaluate $-\\dfrac{5}{6} \\div \\left(-\\dfrac{5}{12}\\right)$.", "Multiply by the reciprocal: $-\\dfrac{5}{6}\\times\\left(-\\dfrac{12}{5}\\right)=\\dfrac{60}{30}=2$ (same signs &rarr; positive)."],
    ["Example 8: Order of operations", "Evaluate $\\dfrac{1}{2} + \\dfrac{2}{3} \\times \\left(-\\dfrac{3}{4}\\right)$.", "Multiply first: $\\dfrac{2}{3}\\times\\left(-\\dfrac{3}{4}\\right)=-\\dfrac{1}{2}$. Then $\\dfrac{1}{2}+\\left(-\\dfrac{1}{2}\\right)=0$."],
    ["Example 9: Word problem", "A tank is $\\dfrac{2}{3}$ full. After adding $10$ L it is $\\dfrac{5}{6}$ full. Find the capacity.", "$\\dfrac{5}{6}-\\dfrac{2}{3}=\\dfrac{1}{6}$ of the tank $=10$ L, so the capacity is $6\\times10=60$ L."],
    ["Example 10: Complex fraction", "Simplify $\\dfrac{\\frac{1}{2}}{\\frac{3}{4}}$.", "The middle bar means divide: $\\dfrac{1}{2}\\div\\dfrac{3}{4}=\\dfrac{1}{2}\\times\\dfrac{4}{3}=\\dfrac{4}{6}=\\dfrac{2}{3}$."],
    ["Example 11: Complex fraction with a sum", "Simplify $\\dfrac{\\frac{2}{3}+\\frac{1}{6}}{\\frac{5}{6}}$.", "Combine the top: $\\dfrac{2}{3}+\\dfrac{1}{6}=\\dfrac{5}{6}$. Then $\\dfrac{5}{6}\\div\\dfrac{5}{6}=1$."],
  ],
  questions: [
    ["Problem 1: Simplify", "Simplify $\\dfrac{45}{60}$.", "$\\dfrac{3}{4}$"],
    ["Problem 2: Order", "Order $\\dfrac{3}{4}, \\dfrac{5}{8}, \\dfrac{2}{3}$ from least to greatest.", "$\\dfrac{5}{8}, \\dfrac{2}{3}, \\dfrac{3}{4}$"],
    ["Problem 3: Mixed to improper", "Write $3\\dfrac{5}{6}$ as an improper fraction.", "$\\dfrac{23}{6}$"],
    ["Problem 4: Subtract", "Evaluate $\\dfrac{5}{6} - \\dfrac{3}{4}$.", "$\\dfrac{1}{12}$"],
    ["Problem 5: Multiply negative", "Evaluate $-\\dfrac{2}{3} \\times \\dfrac{9}{10}$.", "$-\\dfrac{3}{5}$"],
    ["Problem 6: Divide negatives", "Evaluate $-\\dfrac{7}{8} \\div \\left(-\\dfrac{7}{16}\\right)$.", "$2$"],
    ["Problem 7: Order of operations", "Evaluate $\\dfrac{3}{4} - \\dfrac{1}{2} \\times \\dfrac{1}{3}$.", "$\\dfrac{7}{12}$"],
    ["Problem 8: Add", "Evaluate $\\dfrac{1}{4} + \\dfrac{2}{3}$.", "$\\dfrac{11}{12}$"],
    ["Problem 9: Add negatives", "Evaluate $-\\dfrac{1}{2} - \\dfrac{1}{3}$.", "$-\\dfrac{5}{6}$"],
    ["Problem 10: Multiply negative", "Evaluate $\\dfrac{5}{6} \\times \\left(-\\dfrac{3}{10}\\right)$.", "$-\\dfrac{1}{4}$"],
    ["Problem 11: Divide negative", "Evaluate $\\dfrac{4}{5} \\div \\left(-\\dfrac{2}{5}\\right)$.", "$-2$"],
    ["Problem 12: Three fractions", "Evaluate $\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{6}$.", "$1$"],
    ["Problem 13: Word problem", "A jug is $\\dfrac{1}{2}$ full. After adding $150$ mL it is $\\dfrac{3}{4}$ full. Find its capacity.", "$600$ mL"],
    ["Problem 14: Proper or improper?", "Classify $\\dfrac{4}{9}, \\dfrac{9}{4}, \\dfrac{6}{6}$, and write $\\dfrac{9}{4}$ as a mixed number.", "proper, improper, improper; $\\dfrac{9}{4}=2\\dfrac{1}{4}$"],
    ["Problem 15: Complex fraction", "Simplify $\\dfrac{\\frac{3}{4}}{\\frac{1}{2}}$.", "$\\dfrac{3}{2}$"],
    ["Problem 16: Complex fraction", "Simplify $\\dfrac{\\frac{5}{6}}{\\frac{2}{3}}$.", "$\\dfrac{5}{4}$"],
  ],
};
