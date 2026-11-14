// MHF4U-FR chapitre 7 — questions à réponse construite (long_answer) de la banque, pour les tests imprimés (partie C).
// Chaque question comporte une figure (SVG téléversé dans graph-images; les tests papier impriment image_url).
//   node scripts/mhf4u-fr-ch7/written.mjs           -> dry run
//   node scripts/mhf4u-fr-ch7/written.mjs --apply   -> téléverse les figures, insère les lignes absentes (repérées par l'énoncé)
// N'exécuter --apply qu'après le chargement des leçons françaises du chapitre 7 (chaque ligne est liée à sa leçon par le titre).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";
import { CID_FR, FIG_PREFIX } from "../mhf4u-fr/common.mjs";
import { TITLE as T1 } from "./l7_1.mjs";
import { TITLE as T2 } from "./l7_2.mjs";
import { TITLE as T3 } from "./l7_3.mjs";
import { TITLE as T4 } from "./l7_4.mjs";
import { TITLE as T5 } from "./l7_5.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5 };
const L = Math.log10;
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`a) Écris $\frac{8^{x}\cdot4}{2^{x-1}}$ comme une seule puissance de $2$. b) Résous $8^{x}\cdot4=2^{x-1}\cdot64$. c) Le graphique montre $y=2^{x+2}$ et $y=4\cdot2^x$; explique pourquoi il s'agit de la même courbe.`,
    String.raw`a) $2^{3x+2-(x-1)}=2^{2x+3}$. b) $2^{3x+2}=2^{x+5}\Rightarrow x=\tfrac32$. c) $2^{x+2}=2^x\cdot2^2=4\cdot2^x$ : une translation de 2 vers la gauche équivaut à un agrandissement vertical de facteur 4. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 2.5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** (x + 2), color: "violet" }], points: [P(-2, 1), P(0, 4)], step: { x: 1, y: 2 } })),
  W(1, "hard", 5, String.raw`Résous $5^{x^2-3}=25^{x}$ et $3^{x+2}-3^{x}=72$. Pour la première équation, utilise le graphique de $y=x^2-2x-3$ pour montrer les deux racines, et vérifie chaque racine dans l'équation de départ.`,
    String.raw`Première : $x^2-3=2x\Rightarrow(x-3)(x+1)=0$, $x=3$ ou $x=-1$; vérifications $5^6=25^3$ et $5^{-2}=25^{-1}$. Deuxième : $3^x(9-1)=72\Rightarrow3^x=9$, $x=2$. [3, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], step: { x: 1, y: 1 } })),
  W(2, "medium", 4, String.raw`Résous $4\cdot3^{x-1}+2=50$ au millième près. Montre l'étape où tu isoles la puissance, l'étape des logarithmes et une vérification. Indique la solution sur le graphique de $y=4\cdot3^{x-1}+2$.`,
    String.raw`$3^{x-1}=12\Rightarrow x=1+\frac{\log12}{\log3}\approx3.262$; vérification $4(12)+2=50$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 80 }, curves: [{ f: (x) => 4 * 3 ** (x - 1) + 2, color: "violet" }], lines: [{ m: 0, b: 50, color: "blue", dash: true }], step: { x: 1, y: 10 } })),
  W(2, "hard", 5, String.raw`a) Résous $9^x-7\cdot3^x+10=0$ de façon exacte. b) Résous $2^{x+1}=5^{x-1}$ de façon exacte et au millième près. c) Utilise le graphique pour expliquer combien de solutions la partie a) possède.`,
    String.raw`a) $u=3^x$ : $(u-2)(u-5)=0$, $x=\frac{\log2}{\log3}$ ou $\frac{\log5}{\log3}$. b) $x=\frac{\log2+\log5}{\log5-\log2}=\frac{1}{\log2.5}\approx2.513$. c) la courbe coupe l'axe deux fois. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 2, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 9 ** x - 7 * 3 ** x + 10, color: "violet" }], step: { x: 0.5, y: 1 } })),
  W(3, "medium", 4, String.raw`a) Développe $\log_2\dfrac{16x^3}{\sqrt y}$. b) Condense $2\log a+\log b-3\log c$. c) Évalue $\log_4 2+\log_4 32$. d) Utilise le graphique de $y=\log_2x$ pour vérifier la partie c) avec $2\times32=64$.`,
    String.raw`a) $4+3\log_2x-\tfrac12\log_2y$. b) $\log\frac{a^2b}{c^3}$. c) $\log_464=3$. d) $\log_22+\log_232=6=\log_264$, et $\log_464=\frac{6}{2}=3$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 70, ymin: -1, ymax: 7 }, curves: [{ f: (x) => Math.log2(x), a: 0.05, color: "violet" }], points: [P(2, 1), P(32, 5), P(64, 6)], step: { x: 8, y: 1 } })),
  W(4, "medium", 4, String.raw`Résous $\log_2x+\log_2(x-6)=4$. Indique le domaine, montre l'étape de condensation, rejette toute racine étrangère et confirme à l'aide du graphique.`,
    String.raw`Domaine $x>6$; $x(x-6)=16\Rightarrow(x-8)(x+2)=0$; $x=8$ ($-2$ rejetée); vérification $3+1=4$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 5, xmax: 12, ymin: -2, ymax: 7 }, curves: [{ f: (x) => Math.log2(x) + Math.log2(x - 6), a: 6.01, color: "violet" }], lines: [{ m: 0, b: 4, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  W(4, "hard", 5, String.raw`a) Résous $(\log_3x)^2-\log_3\left(x^2\right)=3$. b) Résous $\log(x+3)-\log(x-1)=\log x$. c) Explique, à l'aide du graphique, pourquoi b) n'a qu'une seule solution.`,
    String.raw`a) $u^2-2u-3=0$ : $x=27$ ou $x=\frac13$. b) $x+3=x^2-x\Rightarrow x^2-2x-3=0$, $x=3$ ($-1$ rejetée). c) les deux membres n'existent que pour $x>1$ et se coupent une seule fois. [2, 2, 1.]`,
    planeDoc({ view: { xmin: 0.5, xmax: 7, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => L((x + 3) / (x - 1)), a: 1.05, color: "violet" }, { f: (x) => L(x), a: 0.5, color: "blue" }], step: { x: 1, y: 0.5 } })),
  W(5, "hard", 6, String.raw`Un thé à $92^\circ$C est placé dans une pièce à $20^\circ$C; il est à $64^\circ$C après $10$ min. a) Écris un modèle $T=20+72b^t$. b) Quand sera-t-il à $35^\circ$C? c) Combien de temps faut-il pour que l'écart de température diminue de moitié? d) Explique l'asymptote illustrée sur le graphique.`,
    String.raw`a) $b^{10}=\frac{44}{72}$, $b\approx0.9519$. b) $72b^t=15\Rightarrow t=\frac{10\log(15/72)}{\log(44/72)}\approx31.9$ min. c) $t=\frac{10\log0.5}{\log(44/72)}\approx14.1$ min. d) $T\to20$ : le thé s'approche de la température ambiante. [1, 2, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 72 * (44 / 72) ** (t / 10), a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "red", dash: true }], step: { x: 5, y: 10 } })),
  W(5, "medium", 4, String.raw`Un placement de 6000 dollars rapporte $4.2\%$ par année, capitalisé mensuellement. a) Écris le modèle. b) Quand atteindra-t-il 9000 dollars? c) Trouve le taux annuel effectif. d) Indique la réponse à b) sur le graphique.`,
    String.raw`a) $A=6000(1.0035)^{12t}$. b) $12t=\frac{\log1.5}{\log1.0035}\approx116.0$ mois, $t\approx9.67$ ans. c) $1.0035^{12}-1\approx4.28\%$. d) la courbe coupe $A=9000$ près de $t\approx9.7$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 15, ymin: 5000, ymax: 12000 }, curves: [{ f: (t) => 6000 * 1.0035 ** (12 * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 9000, color: "blue", dash: true }], step: { x: 1, y: 1000 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = CID_FR;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !lessons.some((l) => l.title === t));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures`);
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
