// MTH1W-FR chapitre 6 — questions à réponse construite (long_answer) de la banque pour les tests imprimés (partie C).
// Miroir de ../mth1w-ch6/written.mjs. Chaque question a une figure de données (SVG téléversé dans graph-images sous
// mth1w-fr-6-k/…; les tests papier impriment image_url).
//   node scripts/mth1w-fr-ch6/written.mjs           -> essai à blanc (lecture seule; compare au nombre anglais en direct)
//   node scripts/mth1w-fr-ch6/written.mjs --apply   -> téléverse les figures, insère les rangées absentes (comparées par énoncé)
// Le fichier anglais n'est PAS importé (son bloc principal s'exécuterait aussi sous ce nom de fichier).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { boxPlotDoc, barChartDoc, scatterDoc, dotPlotDoc } from "./figs6.mjs";
import { planeDoc } from "../mth1w-ch4/figs4.mjs";
import { CID_FR, CID_EN, FIG_PREFIX, lessonId } from "../mth1w-fr/common.mjs";
import { TITLE as T1 } from "./l6_1.mjs";
import { TITLE as T2 } from "./l6_2.mjs";
import { TITLE as T3 } from "./l6_3.mjs";
import { TITLE as T4 } from "./l6_4.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], lesson_id: lessonId(6, t), difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`Un journal a publié ce graphique avec le titre « L'appui au nouveau parc EXPLOSE! ». (a) Combien de fois plus haute la bande de 2024 semble-t-elle par rapport à celle de 2023? (b) Quelle est l'augmentation réelle en points de pourcentage? (c) Explique en quoi le graphique est trompeur et décris une version juste.`,
    String.raw`(a) Hauteurs visibles $4$ et $12$ (l'axe commence à $40$) : $3$ fois. (b) $52\%-44\%=8$ points. (c) L'axe vertical commence à $40$, ce qui exagère la variation; il faut commencer l'axe à $0$ avec une échelle régulière. [1, 1, 2.]`,
    barChartDoc({ bars: [["2023", 44], ["2024", 52]], base: 40, top: 54, step: 2, ylabel: "% d'appui" })),
  W(1, "hard", 5, String.raw`Une école de $1200$ élèves ($400$ dans chacune des 9e, 10e et 11e années) veut savoir combien d'élèves s'inscriraient à un club de sports électroniques. (a) Décris un échantillon stratifié de $60$ élèves. (b) Explique pourquoi sonder les élèves du laboratoire d'informatique serait biaisé. (c) L'échantillon révèle que $15$ élèves s'inscriraient. Estime le nombre d'élèves de l'école. (d) Rédige une question de sondage neutre.`,
    String.raw`(a) $20$ élèves choisis au hasard dans chaque année d'études. (b) Biais d'échantillonnage : les utilisateurs du laboratoire sont plus susceptibles d'aimer les jeux vidéo, ce qui surestime l'intérêt. (c) $\frac{15}{60}=0.25$; $0.25\times1200=300$. (d) p. ex. « T'inscrirais-tu à un club de sports électroniques s'il en existait un? (oui / non / peut-être) ». [1, 1, 2, 1.]`,
    barChartDoc({ bars: [["9e", 400], ["10e", 400], ["11e", 400]], base: 0, top: 500, step: 100, ylabel: "élèves" })),
  W(2, "medium", 5, String.raw`Le diagramme à points montre le nombre de livres que $13$ élèves ont lus pendant l'été. (a) Trouve la moyenne, la médiane et le mode. (b) Trouve le résumé en cinq nombres et l'écart interquartile (EI). (c) La valeur $12$ est-elle aberrante? Montre ton test. (d) Quelle mesure de tendance centrale décrit le mieux les données? Explique.`,
    String.raw`Données : $0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 12$. (a) Moyenne $45\div13\approx3.46$; médiane $3$; mode $2$. (b) $0, 1.5, 3, 4.5, 12$; EI $=3$. (c) Borne $4.5+4.5=9$; $12>9$ : valeur aberrante. (d) La médiane (ou le mode) : la valeur aberrante tire la moyenne vers le haut. [1, 2, 1, 1.]`,
    dotPlotDoc({ data: [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 12], lo: 0, hi: 13, step: 1, label: "livres" })),
  W(2, "hard", 5, String.raw`Les diagrammes de quartiles comparent le temps d'écran quotidien (minutes) de deux classes. (a) Trouve la médiane et l'EI de chaque classe. (b) Environ quel pourcentage de la classe A passe plus de $150$ min devant un écran? (c) Rédige une comparaison des deux classes à l'aide de la tendance centrale et de la dispersion. (d) Quelle classe a le temps d'écran le plus régulier?`,
    String.raw`(a) A : médiane $150$, EI $190-110=80$; B : médiane $130$, EI $150-115=35$. (b) $50\%$. (c) Le temps d'écran typique de la classe A est de $20$ min plus élevé, et sa moitié centrale s'étend sur $80$ min contre $35$ min pour la classe B. (d) La classe B. [2, 1, 1, 1.]`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 260" width="440" height="260"><rect width="440" height="260" fill="#fff"/><svg y="14">${boxPlotDoc({ five: [60, 110, 150, 190, 260], lo: 40, hi: 280, step: 20, showValues: true })}</svg><svg y="144">${boxPlotDoc({ five: [70, 115, 130, 150, 230], lo: 40, hi: 280, step: 20, showValues: true })}</svg><text x="8" y="16" font-family="Arial" font-size="13" font-weight="700">Classe A</text><text x="8" y="146" font-family="Arial" font-size="13" font-weight="700">Classe B</text></svg>`),
  W(3, "medium", 5, String.raw`Le nuage de points montre les heures d'entraînement par semaine et les points marqués par match pour une équipe de basketball. (a) Décris la corrélation. (b) Une droite la mieux ajustée passe par $(2, 6)$ et $(10, 22)$. Trouve son équation. (c) Prédis le nombre de points pour $7$ heures d'entraînement. (d) Une prédiction pour $25$ heures est-elle fiable? Explique.`,
    String.raw`(a) Forte positive. (b) $m=\frac{16}{8}=2$; $6=4+b$, $b=2$ : $y=2x+2$. (c) $16$ points. (d) Non : c'est une extrapolation loin au-delà des données; le nombre de points ne peut pas augmenter indéfiniment. [1, 2, 1, 1.]`,
    scatterDoc({ pts: [[1, 5], [2, 7], [3, 7], [4, 11], [5, 11], [6, 15], [7, 15], [8, 19], [9, 19], [10, 23]], view: { xmin: 0, xmax: 12, ymin: 0, ymax: 26 }, step: { x: 1, y: 2 }, xlabel: "entraînement (h)", ylabel: "points" })),
  W(3, "hard", 4, String.raw`Le graphique montre la distance entre Sam et sa maison pendant une balade à vélo. (a) Décris chaque partie de la balade. (b) Trouve la vitesse de Sam en km/h sur chaque partie en mouvement. (c) Trouve la vitesse moyenne pour tout le trajet.`,
    String.raw`(a) De 0 à 20 min : Sam s'éloigne de $8$ km; de 20 à 35 min : arrêt; de 35 à 50 min : Sam parcourt $4$ km de plus; de 50 à 80 min : retour à la maison. (b) $24$ km/h, $16$ km/h, $24$ km/h. (c) $24$ km en $80$ min $=18$ km/h. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 85, ymin: 0, ymax: 14 }, segs: [{ pts: [[0, 0], [20, 8], [35, 8], [50, 12], [80, 0]] }], step: { x: 10, y: 2 }, xlabel: "temps (min)", ylabel: "km de la maison" })),
  W(4, "medium", 5, String.raw`Un bol de soupe refroidit dans une pièce à $20$ °C. Sa température est illustrée. (a) Explique pourquoi un modèle linéaire ne convient pas. (b) Montre que $T-20$ est multiplié à peu près par le même nombre toutes les $5$ minutes. (c) Écris un modèle et prédis la température à $30$ min. (d) Énonce une hypothèse de ton modèle.`,
    String.raw`(a) Les baisses diminuent ($24, 16, 11, 7$) et une droite finirait par prédire une température sous celle de la pièce. (b) $T-20$ : $72, 48, 32, 21, 14$; rapport $\approx\frac23$. (c) $T=20+72\left(\frac23\right)^{t/5}$; $t=30$ : $\approx26.3$ °C. (d) La température de la pièce reste à $20$ °C. [1, 1, 2, 1.]`,
    scatterDoc({ pts: [[0, 92], [5, 68], [10, 52], [15, 41], [20, 34]], view: { xmin: 0, xmax: 35, ymin: 0, ymax: 100 }, step: { x: 5, y: 10 }, xlabel: "temps (min)", ylabel: "T (°C)", curve: (t) => 20 + 72 * (2 / 3) ** (t / 5) })),
  W(4, "hard", 5, String.raw`Un club vend $240$ billets à $10$ dollars chacun. Un sondage suggère que chaque hausse de prix de $1$ dollar fait perdre $12$ ventes. (a) Écris le revenu $R$ pour un prix de $10+x$ dollars. (b) Remplis un tableau pour $x=0, 2, 4, 6, 8$. (c) Quel prix donne le plus grand revenu? (d) Donne une raison pour laquelle le modèle pourrait ne pas correspondre à la réalité.`,
    String.raw`(a) $R=(10+x)(240-12x)$. (b) $2400$, $2592$, $2688$, $2688$, $2592$. (c) Entre $14$ et $16$ dollars — exactement $15$ dollars ($x=5$) : $R=15\times180=2700$. (d) La demande peut ne pas baisser uniformément; le sondage peut ne pas représenter tous les acheteurs. [1, 1, 2, 1.]`,
    scatterDoc({ pts: [[10, 2400], [12, 2592], [14, 2688], [16, 2688], [18, 2592]], view: { xmin: 8, xmax: 22, ymin: 0, ymax: 3000 }, step: { x: 2, y: 500 }, xlabel: "prix ($)", ylabel: "revenu ($)", curve: (p) => p * (240 - 12 * (p - 10)) })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && process.argv[1].replace(/\\/g, "/").endsWith("mth1w-fr-ch6/written.mjs")) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  // vérifications : mêmes nombres que l'anglais en direct, aucun $ impair, aucun mot anglais dans les figures
  let bad = 0;
  const { count: enCount, error: e0 } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID_EN).eq("kind", "long_answer").like("topic", "6.%");
  if (e0) throw e0;
  if (enCount !== WRITTEN.length) { bad++; console.log(`ÉCHEC : ${WRITTEN.length} questions ≠ EN en direct ${enCount}`); }
  for (const w of WRITTEN) {
    for (const s of [w.prompt, w.feedback]) if ((s.match(/\$/g) || []).length % 2) { bad++; console.log("ÉCHEC : $ impair dans", s.slice(0, 60)); }
    const words = [...w.fig.matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map((m) => m[1]).join(" | ");
    if (/\b(the|support|students|books|practice|time|from|home|price|revenue|Class|Gr)\b/.test(words)) { bad++; console.log("ÉCHEC : mot anglais dans la figure :", words.slice(0, 80)); }
  }
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", CID_FR);
  const missing = WRITTEN.filter((w) => !lessons.some((l) => l.id === w.lesson_id && l.title === w.topic));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", CID_FR).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} questions à réponse construite (EN en direct ${enCount}); ${todo.length} pas encore dans la banque; ${WRITTEN.reduce((s, r) => s + r.points, 0)} points; ${WRITTEN.filter((w) => w.fig).length} avec figures`);
  if (missing.length) console.log(`(leçons françaises pas encore chargées : ${[...new Set(missing.map((w) => w.topic))].join(" | ")} — charger les leçons avant --apply)`);
  if (bad) { console.log(`${bad} PROBLÈME(S)`); process.exit(1); }
  if (!APPLY) { console.log("Essai à blanc — utilise --apply."); process.exit(0); }
  if (missing.length) { console.log("Leçons manquantes : rien n'est inséré."); process.exit(1); }
  for (const w of todo) {
    const key = `${FIG_PREFIX}-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const upl = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (upl.error) throw upl.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: CID_FR });
    if (r.error) throw r.error;
  }
  console.log(`${todo.length} insérées`);
}
