// MCV4U-FR chapitre 3 — schémas étiquetés des exemples d'optimisation. Copie française de ../mcv4u-ch3/diagrams.mjs :
// mêmes dessins, mots en français (mur / rivière (sans clôture), dessus ouvert / fermé, zone imprimée).
// Chaque fonction renvoie un SVG; dia() l'enveloppe pour les leçons, les fiches le passent à svgT().
const C = { line: "#1e293b", blue: "#1e40af", red: "#be123c", green: "#15803d", violet: "#6d28d9", fill: "#eef2ff", fill2: "#fef3c7" };
const T = (x, y, s, col = C.blue, size = 17, anchor = "middle") => `<text x="${x}" y="${y}" font-size="${size}" font-weight="700" fill="${col}" text-anchor="${anchor}" font-family="Arial, sans-serif">${s}</text>`;
const open = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="#fff"/>`;

/** enveloppe pour les leçons */
export const dia = (svg, caption = "") => `<div style="text-align:center;margin:10px 0;">${svg.replace(/width="(\d+)" height="(\d+)"/, 'width="$1" height="$2" style="max-width:100%;height:auto;"')}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`;

/** rectangle divisé par `pens - 1` séparations parallèles au côté `side` */
export function field({ top = "x", side = "y", pens = 2, note = "", river = false } = {}) {
  let s = open(380, 230);
  s += `<rect x="60" y="40" width="260" height="140" fill="${C.fill}" stroke="${C.line}" stroke-width="3"/>`;
  for (let k = 1; k < pens; k++) { const x = 60 + (260 * k) / pens; s += `<line x1="${x}" y1="40" x2="${x}" y2="180" stroke="${C.violet}" stroke-width="3" stroke-dasharray="7 5"/>`; }
  if (river) s += `<rect x="40" y="182" width="300" height="16" fill="${river === "wall" ? "#cbd5e1" : "#bfdbfe"}"/>` + T(190, 220, river === "wall" ? "mur (sans clôture)" : "rivière (sans clôture)", C.line, 14);
  s += T(190, 30, top) + (river ? "" : T(190, 200, top)) + T(45, 116, side, C.red, 17, "end") + T(335, 116, side, C.red, 17, "start");
  if (note) s += T(60 + 260 / pens + 8, 116, note, C.violet, 14, "start");
  return s + "</svg>";
}

/** boîte sans couvercle à base carrée */
export function box({ base = "x", h = "h", lid = false } = {}) {
  let s = open(360, 240);
  const P = (x, y) => `${x},${y}`;
  s += `<polygon points="${P(70, 90)} ${P(230, 90)} ${P(230, 200)} ${P(70, 200)}" fill="${C.fill}" stroke="${C.line}" stroke-width="2.5"/>`;
  s += `<polygon points="${P(230, 90)} ${P(300, 50)} ${P(300, 160)} ${P(230, 200)}" fill="#e0e7ff" stroke="${C.line}" stroke-width="2.5"/>`;
  s += `<polygon points="${P(70, 90)} ${P(140, 50)} ${P(300, 50)} ${P(230, 90)}" fill="${lid ? "#c7d2fe" : "#fff"}" stroke="${C.line}" stroke-width="2.5"${lid ? "" : ` stroke-dasharray="6 4"`}/>`;
  s += T(150, 222, base) + T(282, 192, base) + T(52, 150, h, C.red, 17, "end") + T(185, 40, lid ? "dessus fermé" : "dessus ouvert", C.violet, 13);
  return s + "</svg>";
}

/** cylindre (boîte de conserve fermée) */
export function can({ r = "r", h = "h" } = {}) {
  let s = open(300, 260);
  s += `<path d="M90 60 L90 200 A60 18 0 0 0 210 200 L210 60" fill="${C.fill}" stroke="${C.line}" stroke-width="2.5"/>`;
  s += `<ellipse cx="150" cy="60" rx="60" ry="18" fill="#e0e7ff" stroke="${C.line}" stroke-width="2.5"/>`;
  s += `<path d="M90 200 A60 18 0 0 1 210 200" fill="none" stroke="${C.line}" stroke-width="1.5" stroke-dasharray="5 4"/>`;
  s += `<line x1="150" y1="60" x2="210" y2="60" stroke="${C.blue}" stroke-width="2.5"/>` + T(180, 52, r);
  s += `<line x1="235" y1="60" x2="235" y2="200" stroke="${C.red}" stroke-width="2"/>` + T(250, 136, h, C.red, 17, "start");
  return s + "</svg>";
}

/** affiche : zone imprimée à l'intérieur des marges du haut/bas et des côtés */
export function poster({ tb = "6", sides = "4", w = "x", hh = "384/x" } = {}) {
  let s = open(340, 300);
  s += `<rect x="70" y="20" width="200" height="260" fill="${C.fill2}" stroke="${C.line}" stroke-width="3"/>`;
  s += `<rect x="110" y="70" width="120" height="160" fill="#fff" stroke="${C.violet}" stroke-width="2.5" stroke-dasharray="7 5"/>`;
  s += T(170, 155, "zone imprimée", C.violet, 14) + T(170, 92, w, C.blue, 15) + T(222, 175, hh, C.red, 14, "end");
  s += T(170, 52, `${tb} cm`, C.line, 13) + T(170, 260, `${tb} cm`, C.line, 13) + T(90, 155, sides, C.line, 13) + T(250, 155, sides, C.line, 13);
  return s + "</svg>";
}
