// MHF4U-FR chapitre 6 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mhf4u-ch6/written.mjs. Chaque question a une figure (SVG téléversé dans graph-images sous mhf4u-fr-6-k/…).
//   node scripts/mhf4u-fr-ch6/written.mjs           -> essai à blanc (lecture seule)
//   node scripts/mhf4u-fr-ch6/written.mjs --apply   -> téléverse les figures et insère les rangées absentes (trouvées par énoncé)
// Lance --apply seulement après le chargement des leçons françaises (chaque rangée est liée à sa leçon par lessonId(6, k)).
// NOTATION FRANÇAISE (6.3) : y = a log₂(x − c) + d (c horizontale, d verticale).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";
import { CID_FR, FIG_PREFIX, lessonId } from "../mhf4u-fr/common.mjs";

const T = { 1: "6.1 La fonction exponentielle et son inverse", 2: "6.2 Logarithmes", 3: "6.3 Transformations des fonctions logarithmiques", 4: "6.4 La loi de la puissance des logarithmes", 5: "6.5 Échelles logarithmiques" };
const S = String.raw;
const L = Math.log10;
const va = (x) => ({ x, color: "red", dash: true });
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig, k: t });
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };

export const WRITTEN = [
  W(1, "medium", 4, String.raw`Le graphique de $y=\left(\tfrac32\right)^x$ est illustré. (a) Construis une table de valeurs pour $x=-2,-1,0,1,2$ et la table correspondante de son inverse. (b) Esquisse l'inverse dans le quadrillage. (c) Donne le domaine, l'image, le point d'intersection avec un axe et l'asymptote de l'inverse.`,
    String.raw`(a) $\tfrac49,\tfrac23,1,\tfrac32,\tfrac94$; points de l'inverse $(\tfrac49,-2)$, $(\tfrac23,-1)$, $(1,0)$, $(\tfrac32,1)$, $(\tfrac94,2)$. (b) réflexion dans $y=x$, croissante, collée à l'axe des y lorsque $x\to0^+$. (c) domaine $x>0$, image $\mathbb R$, abscisse à l'origine 1, AV $x=0$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, lines: [YX], curves: [{ f: (x) => 1.5 ** x, color: "blue" }], points: [P(0, 1), P(2, 2.25)], step: { x: 1, y: 1 } })),
  W(1, "hard", 4, String.raw`Pour $f(x)=4\cdot2^x-2$ : (a) trouve l'inverse en isolant la puissance; (b) donne son domaine, son image et son asymptote verticale; (c) trouve les points d'intersection exacts de l'inverse avec les axes; (d) esquisse $f$ et son inverse dans le quadrillage et explique le lien entre les asymptotes.`,
    String.raw`(a) $x=4\cdot2^y-2\Rightarrow2^y=\tfrac{x+2}4$. (b) domaine $x>-2$, image $\mathbb R$, AV $x=-2$. (c) $f(0)=2$ → abscisse à l'origine de l'inverse $(2,0)$; $f(x)=0\Rightarrow2^x=\tfrac12\Rightarrow x=-1$ → ordonnée à l'origine de l'inverse $(0,-1)$. (d) images miroirs dans $y=x$; l'asymptote horizontale $y=-2$ de $f$ se réfléchit en $x=-2$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, lines: [YX], step: { x: 1, y: 1 } })),
  W(2, "medium", 4, S`Le graphique de $y=\log_2x$ est illustré. (a) Écris $\log_2 32=5$ sous forme exponentielle. (b) Évalue $\log_2\frac18$ et $\log_2\sqrt[3]{4}$ de façon exacte. (c) Utilise le graphique pour expliquer pourquoi $\log_2 20$ est entre 4 et 5.`,
    S`(a) $2^5=32$. (b) $-3$; $4^{1/3}=2^{2/3}$, donc $\frac23$. (c) $2^4=16$ et $2^5=32$, et $16<20<32$; la courbe est croissante. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 34, ymin: -4, ymax: 6 }, curves: [{ f: lg(2), a: 0.01, color: "violet" }], points: [P(16, 4), P(32, 5)], step: { x: 4, y: 1 } })),
  W(2, "hard", 4, S`(a) Évalue $\log_{16}8$ et $\log_{1/8}4$ de façon exacte. (b) Trouve $x$ si $\log_x 32=\frac52$. (c) Évalue $\log_3\left(\log_2 512\right)$ de façon exacte. Montre ton raisonnement.`,
    S`(a) $2^{4y}=2^3\Rightarrow\frac34$; $2^{-3y}=2^2\Rightarrow-\frac23$. (b) $x^{5/2}=32\Rightarrow x=32^{2/5}=4$. (c) $\log_2512=9$, $\log_39=2$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 17, ymin: -2, ymax: 3 }, curves: [{ f: lg(16), a: 0.01, color: "violet" }], points: [P(8, 0.75)], step: { x: 2, y: 0.5 } })),
  W(3, "medium", 4, S`Pour $y=\log_3(x+2)-1$ : (a) donne l'asymptote, le domaine et l'image; (b) transforme les points $\left(\frac13,-1\right)$, $(1,0)$, $(3,1)$, $(9,2)$ de $y=\log_3x$; (c) trouve l'abscisse à l'origine.`,
    S`(a) $x=-2$; $x>-2$; $\mathbb R$. (b) $\left(-\frac53,-2\right)$, $(-1,-1)$, $(1,0)$, $(7,1)$. (c) $\log_3(x+2)=1\Rightarrow x=1$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 10, ymin: -4, ymax: 3 }, vlines: [va(-2)], curves: [{ f: (x) => lg(3)(x + 2) - 1, a: -1.995, color: "violet" }], step: { x: 1, y: 1 } })),
  W(3, "hard", 4, S`Le graphique illustré est de la forme $y=a\log_2(x-c)+d$. Il a l'asymptote $x=1$ et passe par $(2,3)$ et $(5,-1)$. (a) Trouve $c$, $d$ et $a$. (b) Donne le domaine. (c) Trouve l'abscisse à l'origine.`,
    S`(a) $c=1$; $(2,3)$ : $\log_21=0$, donc $d=3$; $(5,-1)$ : $2a+3=-1$, $a=-2$. (b) $x>1$. (c) $-2\log_2(x-1)+3=0\Rightarrow x-1=2^{1.5}\Rightarrow x\approx3.83$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 9, ymin: -4, ymax: 6 }, vlines: [va(1)], curves: [{ f: (x) => -2 * lg(2)(x - 1) + 3, a: 1.003, color: "violet" }], points: [P(2, 3), P(5, -1)], step: { x: 1, y: 1 } })),
  W(4, "medium", 4, S`(a) Démontre que $\log_b x^n=n\log_bx$. (b) Utilise ce résultat pour évaluer $\log_9 27^4$. (c) Résous $1.03^t=2$ et interprète la réponse comme un temps de doublement.`,
    S`(a) pose $\log_bx=m$, $x=b^m$, $x^n=b^{mn}$, donc $\log_bx^n=mn$. (b) $4\log_927=4\cdot\frac32=6$. (c) $t=\frac{\log2}{\log1.03}\approx23.45$ : environ 23.4 années à 3\%. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 30, ymin: -0.2, ymax: 3 }, lines: [{ m: 0, b: 2, color: "blue", dash: true }], curves: [{ f: (t) => 1.03 ** t, color: "violet" }], step: { x: 5, y: 0.5 } })),
  W(4, "hard", 4, S`(a) Résous $4^x=3^{x+1}$ de façon exacte et au millième près. (b) Vérifie ta réponse par substitution. (c) Les graphiques de $y=4^x$ et de $y=3^{x+1}$ sont illustrés; explique ce que la solution représente sur le graphique.`,
    S`(a) $x\log4=(x+1)\log3\Rightarrow x=\frac{\log3}{\log4-\log3}\approx3.819$. (b) les deux membres valent $\approx199$. (c) l'abscisse du point d'intersection. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -10, ymax: 260 }, curves: [{ f: (x) => 4 ** x, color: "violet" }, { f: (x) => 3 ** (x + 1), color: "green" }], step: { x: 1, y: 50 } })),
  W(5, "medium", 4, S`(a) Trouve le pH d'une solution où $[\text{H}^+]=5.6\times10^{-5}$. (b) Une deuxième solution a un pH de $7.8$; trouve sa $[\text{H}^+]$. (c) Combien de fois la première solution est-elle plus acide?`,
    S`(a) $\approx4.25$. (b) $10^{-7.8}\approx1.6\times10^{-8}$. (c) $10^{7.8-4.25}=10^{3.55}\approx3550$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 14.5, ymin: -1, ymax: 1.5 }, points: [{ x: 4.25, y: 0, label: "A", color: "red" }, { x: 7.8, y: 0, label: "B", color: "blue" }], step: { x: 1, y: 1 } })),
  W(5, "hard", 4, S`Une machine produit $70$ dB. (a) Trouve son intensité ($I_0=10^{-12}$). (b) Trouve le niveau sonore de cinq de ces machines ensemble. (c) Combien de machines faut-il pour atteindre $80$ dB? Explique.`,
    S`(a) $10^{-5}$ W/m$^2$. (b) $10\log\left(5\times10^7\right)\approx77.0$ dB. (c) $80$ dB correspondent à $10$ fois l'intensité d'une machine : $10$ machines. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 10.5, ymin: 68, ymax: 82 }, curves: [{ f: (n) => 70 + 10 * L(n), a: 1, color: "violet" }], points: [P(5, 76.99), P(10, 80)], step: { x: 1, y: 2 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  // vérifications hors ligne : mêmes nombres, difficultés et points que l'anglais; sujets = titres des leçons françaises
  // (le script anglais s'exécute s'il croit être lancé directement : on masque argv[1] pendant l'import)
  const argv1 = process.argv[1];
  process.argv[1] = "";
  const { WRITTEN: EN } = await import("../mhf4u-ch6/written.mjs");
  process.argv[1] = argv1;
  let bad = 0;
  if (EN.length !== WRITTEN.length) { bad++; console.log(`ÉCHEC : ${WRITTEN.length} questions ≠ EN ${EN.length}`); }
  for (const [i, w] of WRITTEN.entries()) {
    const e = EN[i];
    const lesson = await import(`./l6_${w.k}.mjs`);
    if (w.topic !== lesson.TITLE) { bad++; console.log(`ÉCHEC : sujet « ${w.topic} » ≠ « ${lesson.TITLE} »`); }
    if (w.difficulty !== e.difficulty || w.points !== e.points || e.topic.split(" ")[0] !== w.topic.split(" ")[0]) { bad++; console.log(`ÉCHEC : question ${i + 1} ≠ EN`); }
    if ((w.prompt.match(/\$/g) || []).length % 2 || (w.feedback.match(/\$/g) || []).length % 2) { bad++; console.log(`ÉCHEC : $ impair, question ${i + 1}`); }
  }
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const ids = [...new Set(WRITTEN.map((w) => lessonId(6, w.k)))];
  const { data: lessons } = await db.from("lessons").select("id, title").in("id", ids);
  const missing = ids.filter((id) => !(lessons ?? []).some((l) => l.id === id));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", CID_FR).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} questions à réponse construite; ${todo.length} pas encore dans la banque; ${WRITTEN.reduce((s, r) => s + r.points, 0)} points; ${WRITTEN.filter((w) => w.fig).length} avec figures`);
  console.log(bad ? `${bad} PROBLÈME(S)` : "vérifications hors ligne réussies");
  if (missing.length) console.log("leçons françaises pas encore chargées :", missing.length);
  if (!APPLY || bad) { console.log("Essai à blanc — utilise --apply."); process.exitCode = bad ? 1 : 0; }
  else if (missing.length) { console.log("Charge d'abord les leçons."); process.exitCode = 1; }
  else {
    for (const w of todo) {
      const key = `${FIG_PREFIX}-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
      const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
      if (up.error) throw up.error;
      const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
      const { fig, k, ...row } = w;
      const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: CID_FR, lesson_id: lessonId(6, k) });
      if (r.error) throw r.error;
    }
    console.log(`${todo.length} insérées`);
  }
}
