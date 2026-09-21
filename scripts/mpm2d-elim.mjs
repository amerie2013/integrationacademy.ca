// Formats elimination solutions in the handwritten layout used in class:
//   Step 1 — eliminate one variable (vertical add/subtract, cancelled terms crossed out),
//   Step 2 — substitute back into equation ① or ②, one line per move,
//   Conclusion — (x,y) = (…).
// `elimHtml` output is KaTeX (lesson); `elimTex` output is LaTeX (worksheet, needs \usepackage{cancel}).
// Text fields (note, answer) are written with $...$ for math; the HTML formatter converts to \(...\).

const CIRC = { 1: "①", 2: "②" };
const texCirc = (n) => String.raw`\textcircled{\scriptsize ${n}}`;
const circs = (s, fmt) => s.replace(/#([12])/g, (_, n) => (fmt === "html" ? CIRC[n] : texCirc(n)));
const toHtmlMath = (s) => s.replace(/\$([^$]+)\$/g, (_, m) => String.raw`\(${m}\)`);

// spec: { sys:[eq1,eq2], note, op:"+"|"-", top, bottom, result:[...], subInto, subVal, subLines:[...], answer }
function eliminationArray(spec) {
  const sign = spec.op === "-" ? String.raw`-\,(` : String.raw`+\,(`;
  return String.raw`\begin{array}{rl} & ${spec.top}\\ ${sign} & ${spec.bottom}\,)\\ \hline & ${spec.result.join(String.raw`\\ & `)} \end{array}`;
}
const chain = (lines) => String.raw`\begin{array}{l} ${lines.join(String.raw`\\ `)} \end{array}`;

export function elimSys(spec, fmt) {
  const c = (n) => String.raw`\text{${texCirc(n)}}`;
  const [a, b] = spec.sys.map((e) => e.split("="));
  const row = (e, n) => `${e[0]} & = ${e[1]} & ${c(n)}`;
  return String.raw`\begin{array}{rll} ${row(a, 1)}\\ ${row(b, 2)} \end{array}`;
}

export function elimHtml(spec) {
  const s1 = `<div class="step"><strong>Step 1:</strong> ${toHtmlMath(circs(spec.note, "html"))}\\[${eliminationArray(spec)}\\]</div>`;
  const s2 = spec.subLines
    ? `<div class="step"><strong>Step 2:</strong> Substitute \\(${spec.subVal}\\) into ${CIRC[spec.subInto]}:\\[${chain(spec.subLines)}\\]</div>`
    : "";
  return `${s1}${s2}<em>Conclusion: ${toHtmlMath(spec.answer)}. ✓</em>`;
}

export function elimTex(spec) {
  const s1 = String.raw`\textbf{Step 1:} ${circs(spec.note, "tex")}` + String.raw`\[${eliminationArray(spec)}\]`;
  const s2 = spec.subLines
    ? String.raw`\textbf{Step 2:} Substitute $${spec.subVal}$ into ${texCirc(spec.subInto)}:` + String.raw`\[${chain(spec.subLines)}\]`
    : "";
  return `${s1}\n${s2}\n` + String.raw`\textbf{Conclusion:} ${spec.answer}.`;
}
