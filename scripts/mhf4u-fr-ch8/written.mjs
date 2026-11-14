// MHF4U-FR chapitre 8 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mhf4u-ch8/written.mjs. Chaque question a une figure (SVG téléversé dans graph-images, clés mhf4u-fr-…).
//   node scripts/mhf4u-fr-ch8/written.mjs           -> essai à blanc
//   node scripts/mhf4u-fr-ch8/written.mjs --apply   -> téléverse les figures et insère les lignes absentes (repérées par l'énoncé)
// N'exécuter --apply qu'après le chargement des leçons françaises du chapitre 8 (chaque ligne est liée à sa leçon par le titre).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";
import { CID_FR, FIG_PREFIX } from "../mhf4u-fr/common.mjs";
import { TITLE as T1 } from "./l8_1.mjs";
import { TITLE as T2 } from "./l8_2.mjs";
import { TITLE as T3 } from "./l8_3.mjs";
import { TITLE as T4 } from "./l8_4.mjs";
import { TITLE as T5 } from "./l8_5.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5 };
const S = String.raw;
const L = Math.log10;
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`$f(x)=x^2-4$ et $g(x)=2x-1$. (a) Détermine $(f+g)(x)$ et $(f-g)(x)$. (b) Détermine les zéros de $f-g$. (c) Explique, à l'aide du graphique, ce que représentent ces zéros.`,
    String.raw`(a) $x^2+2x-5$; $x^2-2x-3$. (b) $(x-3)(x+1)=0$ : $x=3$, $-1$. (c) la parabole et la droite se croisent à $x=-1$ et à $x=3$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 10 }, curves: [{ f: (x) => x * x - 4, color: "blue" }], lines: [{ m: 2, b: -1, color: "gray" }], step: { x: 1, y: 1 } })),
  W(1, "hard", 5, String.raw`Le revenu est $R(x)=24x$ et le coût est $C(x)=0.03x^2+6x+1500$ dollars pour $x$ articles. (a) Détermine $P(x)$. (b) Détermine les quantités correspondant aux seuils de rentabilité. (c) Détermine le profit maximal. (d) Indique ces éléments sur le graphique.`,
    String.raw`(a) $P=-0.03x^2+18x-1500$. (b) $x^2-600x+50\,000=0$ : $x=300\pm\sqrt{40\,000}=100$ ou $500$. (c) sommet à $x=300$, $P=1200$. (d) zéros à $100$ et à $500$; sommet $(300,1200)$. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -20, xmax: 620, ymin: -1600, ymax: 1600 }, curves: [{ f: (x) => -0.03 * x * x + 18 * x - 1500, color: "violet" }], step: { x: 50, y: 200 } })),
  W(2, "medium", 4, String.raw`$f(x)=x^2-9$ et $g(x)=x^2+x-6$. (a) Simplifie $\frac fg$. (b) Donne son domaine. (c) Détermine son trou et son asymptote verticale. (d) Esquisse-la sur la grille.`,
    String.raw`(a) $\frac{(x-3)(x+3)}{(x+3)(x-2)}=\frac{x-3}{x-2}$. (b) $x\ne-3,\ 2$. (c) trou en $(-3,\frac65)$; asymptote verticale $x=2$. (d) asymptote horizontale $y=1$, zéro à $3$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 } })),
  W(2, "hard", 5, String.raw`Une vibration est décrite par $d(t)=6(0.8)^t\cos(2\pi t)$ mm. (a) Indique l'enveloppe et la période. (b) Détermine $d(1)$ et $d(1.5)$. (c) Quand l'enveloppe devient-elle pour la première fois inférieure à $0.5$ mm? (d) Explique la forme du graphique.`,
    String.raw`(a) $6(0.8)^t$; période $1$ s. (b) $4.8$; $6(0.8)^{1.5}\cos3\pi\approx-4.29$. (c) $t>\frac{\log(1/12)}{\log0.8}\approx11.14$ s. (d) une onde cosinus comprimée entre $\pm6(0.8)^t$. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -0.2, xmax: 8, ymin: -6.5, ymax: 6.5 }, curves: [{ f: (t) => 6 * 0.8 ** t, a: 0, color: "gray" }, { f: (t) => -6 * 0.8 ** t, a: 0, color: "gray" }, { f: (t) => 6 * 0.8 ** t * Math.cos(2 * Math.PI * t), a: 0, color: "violet" }], step: { x: 1, y: 1 } })),
  W(3, "medium", 4, String.raw`$f(x)=\sqrt{x+1}$ et $g(x)=x^2-1$. (a) Détermine $f(g(x))$ et son domaine. (b) Détermine $g(f(x))$ et son domaine. (c) Utilise le graphique pour expliquer pourquoi les formules semblent plus simples que les domaines.`,
    String.raw`(a) $\sqrt{x^2}=|x|$, tous les $x$ réels. (b) $(\sqrt{x+1})^2-1=x$, domaine $x\ge-1$. (c) $g(f(x))=x$ n'est que la partie de la droite où $x\ge-1$, parce que la racine intérieure exige $x\ge-1$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 4 }, curves: [{ f: (x) => x, a: -1, color: "violet" }, { f: (x) => Math.abs(x), color: "blue" }], step: { x: 1, y: 1 } })),
  W(3, "hard", 5, String.raw`Une onde circulaire a un rayon $r(t)=1.5t+0.5$ m et une aire $A(r)=\pi r^2$. (a) Écris $A(r(t))$. (b) Détermine l'aire à $t=4$. (c) Quand l'aire vaut-elle $100\ \text{m}^2$? (d) Explique pourquoi une fonction composée est le bon modèle.`,
    String.raw`(a) $\pi(1.5t+0.5)^2$. (b) $r=6.5$, $A\approx132.7\ \text{m}^2$. (c) $1.5t+0.5=\sqrt{100/\pi}\approx5.642\Rightarrow t\approx3.43$ s. (d) l'aire dépend du rayon, qui dépend du temps. [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 300 }, curves: [{ f: (t) => Math.PI * (1.5 * t + 0.5) ** 2, a: 0, color: "violet" }], step: { x: 1, y: 50 } })),
  W(4, "medium", 4, String.raw`Résous $x^3-x^2-12x\ge0$. Montre la factorisation, un tableau de signes et la solution sur le graphique.`,
    String.raw`$x(x-4)(x+3)\ge0$; signes $-,+,-,+$ sur $x<-3$, $-3<x<0$, $0<x<4$, $x>4$; solution $-3\le x\le0$ ou $x\ge4$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 6, ymin: -30, ymax: 30 }, curves: [{ f: (x) => x ** 3 - x * x - 12 * x, color: "violet" }], step: { x: 1, y: 5 } })),
  W(4, "hard", 5, String.raw`(a) Résous $\dfrac{x+3}{x-2}\le4$ algébriquement. (b) Résous $2^x>3x$ à l'aide du graphique, en donnant le point de croisement non exact au centième près. (c) Explique pourquoi il ne faut pas multiplier par $x-2$ en (a).`,
    String.raw`(a) $\frac{11-3x}{x-2}\le0$ : $x<2$ ou $x\ge\frac{11}3$. (b) points de croisement $x\approx0.46$ et $x\approx3.31$; $x<0.46$ ou $x>3.31$. (c) $x-2$ peut être négatif, ce qui inverserait le sens de l'inéquation. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 3, b: 0, color: "blue" }], step: { x: 0.5, y: 2 } })),
  W(5, "hard", 6, String.raw`Les ventes mensuelles sont $S(t)=250+12t+60\sin\left(\frac{\pi t}6\right)$ unités. (a) Indique la tendance, la variation et la période. (b) Détermine $S(3)$ et $S(9)$. (c) Utilise le graphique pour estimer le premier mois où les ventes dépassent $500$. (d) Explique pourquoi les ventes peuvent diminuer d'un mois à l'autre même si la tendance augmente.`,
    String.raw`(a) tendance $250+12t$, variation $60$, période $12$ mois. (b) $346$; $298$. (c) vers $t\approx23.1$ (mois 24); au sommet précédent, $S(15)=490$ n'y arrive pas tout à fait. (d) la partie saisonnière peut diminuer de plus de $12$ par mois. [1, 2, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 30, ymin: 150, ymax: 750 }, curves: [{ f: (t) => 250 + 12 * t + 60 * Math.sin(Math.PI * t / 6), color: "violet" }], lines: [{ m: 0, b: 500, color: "blue", dash: true }], step: { x: 2, y: 50 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const argv1 = process.argv[1]; process.argv[1] = "imported-for-comparison"; // the English written.mjs runs its own dry run / --apply when argv[1] ends in written.mjs
  const { WRITTEN: EN } = await import("../mhf4u-ch8/written.mjs");
  process.argv[1] = argv1;
  let bad = 0;
  if (EN.length !== WRITTEN.length) { bad++; console.log(`FAIL: ${WRITTEN.length} questions, English has ${EN.length}`); }
  WRITTEN.forEach((w, i) => { const e = EN[i]; if (!e || e.points !== w.points || e.difficulty !== w.difficulty || e.fig !== w.fig || e.topic.split(" ")[0] !== w.topic.split(" ")[0]) { bad++; console.log(`FAIL: question ${i + 1} differs from English in points/difficulty/figure/topic`); } });
  if (bad) process.exit(1);
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = CID_FR;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !lessons.some((l) => l.title === t));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions (EN ${EN.length}); ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures`);
  if (missing.length) console.log("lessons not loaded yet:", missing);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  if (missing.length) { console.log("Load the lessons first."); process.exit(1); }
  for (const w of todo) {
    const key = `${FIG_PREFIX}-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
