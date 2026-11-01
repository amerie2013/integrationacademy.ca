// Keep wide display math inside the lesson card. A display \[ ... \] with three or more matrices is
// broken into lines: at top-level \qquad/\quad separators (one item per line), otherwise at each
// top-level "=" (an aligned chain: first piece, then "= piece" per line). Displays that already use
// aligned/gathered are left alone.
const MAT = /\\begin\{(bmatrix|array)\}/g;

/** split s at top-level occurrences of a token (outside {}, \left..\right and \begin..\end) */
function splitTop(s, re) {
  const parts = [];
  let depth = 0, last = 0;
  for (let i = 0; i < s.length; ) {
    const env = s.slice(i).match(/^\\(begin|end)\{[a-z*]+\}/);
    if (env) { depth += env[1] === "begin" ? 1 : -1; i += env[0].length; continue; }
    const lr = s.slice(i).match(/^\\(left|right)(?![a-zA-Z])/);
    if (lr) { depth += lr[1] === "left" ? 1 : -1; i += lr[0].length; continue; }
    const c = s[i];
    if (c === "\\" && (s[i + 1] === "{" || s[i + 1] === "}")) { i += 2; continue; }
    if (c === "{") depth++;
    else if (c === "}") depth--;
    else if (depth === 0) {
      const m = s.slice(i).match(re);
      if (m && m.index === 0) { parts.push(s.slice(last, i)); i += m[0].length; last = i; continue; }
    }
    i++;
  }
  parts.push(s.slice(last));
  return parts;
}

export function fitDisplay(body) {
  if (/\\begin\{(aligned|gathered)\}/.test(body)) return body;
  if ((body.match(MAT) || []).length < 3) return body;
  const items = splitTop(body, /^\\q?quad/).map((t) => t.trim().replace(/,$/, ",")).filter(Boolean);
  // the space after each row break keeps "\\(" and "\\[" from reading as math delimiters on the site
  if (items.length > 1) return `\\begin{gathered}${items.map(fitLine).join("\\\\ ")}\\end{gathered}`;
  return fitLine(body);
}

/** one chain a = b = c ... as an aligned block when it holds 3+ matrices */
function fitLine(t) {
  if ((t.match(MAT) || []).length < 3) return t;
  const eq = splitTop(t, /^=/);
  if (eq.length < 3) return t;
  // a chain that opens with a product (no name on the left): every piece on its own line, flush left
  if (/\\begin\{(bmatrix|array)\}/.test(eq[0])) return `\\begin{aligned}&${eq[0]}${eq.slice(1).map((p) => `\\\\&=${p}`).join("")}\\end{aligned}`;
  return `\\begin{aligned}${eq[0]}&=${eq[1]}${eq.slice(2).map((p) => `\\\\&=${p}`).join("")}\\end{aligned}`;
}

/** apply to every \[ ... \] in a string */
export const fitHtml = (s) => s.replace(/\\\[([\s\S]*?)\\\]/g, (_, b) => `\\[${fitDisplay(b)}\\]`);

/** apply to every string in a block tree */
export const fitBlocks = (x) => (typeof x === "string" ? fitHtml(x) : Array.isArray(x) ? x.map(fitBlocks) : x && typeof x === "object" ? Object.fromEntries(Object.entries(x).map(([k, v]) => [k, fitBlocks(v)])) : x);
