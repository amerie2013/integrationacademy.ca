// MTH1W-FR chapitre 7 — questions à réponse construite (long_answer) de la banque, pour les tests imprimés (partie C).
// Miroir de ../mth1w-ch7/written.mjs. Chaque question comporte une figure (SVG téléversé dans graph-images; les tests
// papier impriment image_url). L'argent s'écrit en « dollars », car le texte de la banque utilise $...$ pour les maths.
//   node scripts/mth1w-fr-ch7/written.mjs           -> dry run
//   node scripts/mth1w-fr-ch7/written.mjs --apply   -> téléverse les figures, insère les lignes absentes (repérées par l'énoncé)
// N'exécuter --apply qu'après le chargement des leçons françaises du chapitre 7 (chaque ligne est liée à sa leçon).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { barChartDoc } from "../mth1w-ch6/figs6.mjs";
import { planeDoc } from "../mth1w-ch4/figs4.mjs";
import { CID_FR, lessonId, FIG_PREFIX } from "../mth1w-fr/common.mjs";
import { TITLE as T1 } from "./l7_1.mjs";
import { TITLE as T2 } from "./l7_2.mjs";
import { TITLE as T3 } from "./l7_3.mjs";
import { TITLE as T4 } from "./l7_4.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], k: t, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 5, String.raw`Le graphique montre deux forfaits de téléphone. a) Écris une équation pour chaque forfait. b) Trouve le seuil de rentabilité de façon algébrique. c) Quel forfait recommanderais-tu à une personne qui utilise environ $8$ Go par mois? Explique. d) Trouve le coût de ce forfait, TVH de $13\%$ incluse.`,
    String.raw`a) A : $C=45$; B : $C=3g+15$. b) $3g+15=45\Rightarrow g=10$ Go ($45$ dollars). c) B : $3(8)+15=39<45$. d) $39\times1.13=44.07$ dollars. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 16, ymin: 0, ymax: 70 }, lines: [{ m: 0, b: 45, color: "blue", label: "A", lx: 1 }, { m: 3, b: 15, color: "red", label: "B", lx: 13 }], step: { x: 2, y: 10 }, xlabel: "Go utilisés", ylabel: "coût ($)" })),
  W(1, "hard", 5, String.raw`La facture d'épicerie d'une famille était de $250$ dollars par semaine en 2020. Le diagramme à bandes montre l'inflation alimentaire des quatre années suivantes. a) Trouve la facture hebdomadaire en 2024. b) Trouve l'augmentation globale en pourcentage. c) Si le revenu de la famille a augmenté de $10\%$ au total pendant la même période, son pouvoir d'achat pour la nourriture a-t-il augmenté ou diminué? Explique.`,
    String.raw`a) $250(1.03)(1.09)(1.08)(1.04)\approx315.25$ dollars. b) $\approx26.1\%$. c) Il a diminué : les prix ont augmenté de $26.1\%$, mais le revenu de seulement $10\%$ ($\frac{1.10}{1.261}\approx0.87$). [2, 1, 2.]`,
    barChartDoc({ bars: [["2021", 3], ["2022", 9], ["2023", 8], ["2024", 4]], base: 0, top: 10, step: 2, ylabel: "inflation alimentaire (%)" })),
  W(2, "medium", 5, String.raw`Une auto neuve coûte $34\,000$ dollars et se déprécie de $18\%$ par année. a) Écris un modèle de sa valeur. b) Trouve sa valeur après $4$ ans. c) Compare avec une dépréciation linéaire de $4000$ dollars par année. d) Quel modèle décrit le mieux les autos? Explique.`,
    String.raw`a) $V=34\,000(0.82)^t$. b) $\approx15\,372$ dollars. c) $34\,000-16\,000=18\,000$ dollars. d) En pourcentage : les autos perdent le plus de valeur dans les premières années et n'atteignent jamais tout à fait zéro. [1, 1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 36000 }, lines: [{ m: -4000, b: 34000, color: "gray", dash: true }], curves: [{ f: (t) => 34000 * 0.82 ** t, color: "red" }], step: { x: 1, y: 4000 }, xlabel: "années", ylabel: "valeur ($)" })),
  W(2, "hard", 4, String.raw`Un condo acheté $380\,000$ dollars valait $418\,950$ dollars deux ans plus tard. a) Trouve le taux annuel d'appréciation. b) Prédis sa valeur $5$ ans après l'achat. c) Utilise la règle de $72$ pour estimer quand sa valeur doublera. d) Donne deux facteurs qui pourraient rendre la prédiction fausse.`,
    String.raw`a) $(1+r)^2=1.1025$ : $5\%$. b) $380\,000(1.05)^5\approx484\,987$ dollars. c) environ $14.4$ ans. d) p. ex. les taux d'intérêt augmentent, l'économie locale s'affaiblit, plus de logements sont construits. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 600000 }, curves: [{ f: (t) => 380000 * 1.05 ** t, color: "green" }], points: [{ x: 0, y: 380000 }, { x: 2, y: 418950 }], step: { x: 1, y: 100000 }, xlabel: "années", ylabel: "valeur ($)" })),
  W(3, "medium", 5, String.raw`On investit $2500$ dollars pendant $10$ ans à $5\%$ par année. a) Trouve le montant avec l'intérêt simple. b) Trouve le montant avec un intérêt composé annuellement. c) Trouve le montant avec un intérêt composé mensuellement. d) Explique, à l'aide du graphique, pourquoi l'intérêt composé prend de l'avance avec le temps.`,
    String.raw`a) $3750$ dollars. b) $2500(1.05)^{10}\approx4072.24$ dollars. c) $2500(1+\frac{0.05}{12})^{120}\approx4117.52$ dollars. d) L'intérêt composé rapporte des intérêts sur les intérêts, donc le gain de chaque année est plus grand : une courbe exponentielle contre une droite. [1, 1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 5000 }, lines: [{ m: 125, b: 2500, color: "blue", label: "simple", lx: 9 }], curves: [{ f: (t) => 2500 * 1.05 ** t, color: "green" }], step: { x: 1, y: 500 }, xlabel: "années", ylabel: "montant ($)" })),
  W(3, "hard", 5, String.raw`Sam a un solde de carte de crédit de $1800$ dollars à $19.8\%$ par année, composé mensuellement. a) Trouve le taux d'intérêt mensuel. b) Trouve l'intérêt exigé le premier mois. c) Si Sam ne fait aucun paiement, combien doit-il après un an? d) Sam peut payer $120$ dollars par mois. Explique pourquoi il est important de payer plus que le minimum.`,
    String.raw`a) $1.65\%$. b) $29.70$ dollars. c) $1800(1.0165)^{12}\approx2190.59$ dollars. d) La plus grande partie d'un petit paiement va à l'intérêt; des paiements plus élevés réduisent le solde plus vite et diminuent l'intérêt total. [1, 1, 2, 1.]`,
    barChartDoc({ bars: [["début", 1800], ["6 mois", 1986], ["12 mois", 2191]], base: 0, top: 2500, step: 500, ylabel: "solde ($)", color: "red" })),
  W(4, "medium", 5, String.raw`Le revenu net mensuel de Maya est de $2300$ dollars. Ses dépenses sont présentées dans le diagramme. a) Trouve ses dépenses totales et son surplus ou son déficit. b) Trouve le pourcentage du revenu consacré aux besoins, aux désirs et à l'épargne. c) Compare son budget avec la règle 50/30/20 et propose un changement.`,
    String.raw`a) Besoins $1350$, désirs $520$, épargne $230$ : total $2100$; surplus de $200$ dollars. b) $58.7\%$, $22.6\%$, $10\%$. c) Les besoins sont élevés et l'épargne est faible; verser le surplus de $200$ à l'épargne donne $\approx18.7\%$. [2, 2, 1.]`,
    barChartDoc({ bars: [["besoins", 1350], ["désirs", 520], ["épargne", 230]], base: 0, top: 1500, step: 300, ylabel: "dollars par mois", color: "green" })),
  W(4, "hard", 5, String.raw`Léo gagne $17.50$ dollars l'heure, travaille $24$ heures par semaine et $14\%$ est retenu. a) Trouve son revenu net mensuel ($52$ semaines par année). b) Ses dépenses sont de $1450$ dollars par mois. Trouve le surplus. c) Ses heures sont réduites à $18$ par semaine. Trouve le nouveau surplus ou déficit. d) Décris comment il devrait ajuster son budget.`,
    String.raw`a) $17.50\times24\times52\div12\times0.86\approx1565.20$ dollars. b) $\approx115.20$ dollars. c) $1173.90-1450\approx-276.10$ : un déficit. d) Protéger les besoins, réduire les désirs, suspendre l'épargne temporairement, chercher des heures supplémentaires. [2, 1, 1, 1.]`,
    barChartDoc({ bars: [["24 h/sem.", 1565], ["18 h/sem.", 1174], ["dépenses", 1450]], base: 0, top: 1800, step: 300, ylabel: "dollars par mois", color: "blue" })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop()) && /mth1w-fr-ch7/.test(process.argv[1].replace(/\\/g, "/"))) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = CID_FR;
  let bad = 0;
  for (const w of WRITTEN) {
    if ((w.prompt.match(/\$/g) || []).length % 2 || (w.feedback.match(/\$/g) || []).length % 2) { bad++; console.log("ÉCHEC : nombre impair de $ :", w.prompt.slice(0, 60)); }
    if (/\bundefined\b|\bNaN\b/.test(w.prompt + w.feedback)) { bad++; console.log("ÉCHEC : undefined/NaN :", w.prompt.slice(0, 60)); }
  }
  // version anglaise (lecture seule) : on cache argv[1] pour que son bloc principal ne s'exécute jamais
  const a1 = process.argv[1]; process.argv[1] = "x"; const EN = await import("../mth1w-ch7/written.mjs"); process.argv[1] = a1;
  const same = EN.WRITTEN.length === WRITTEN.length && EN.WRITTEN.every((e, i) => e.difficulty === WRITTEN[i].difficulty && e.points === WRITTEN[i].points && e.topic.split(" ")[0] === WRITTEN[i].topic.split(" ")[0]);
  if (!same) { bad++; console.log("ÉCHEC : la liste ne correspond pas à l'anglais (nombre, difficulté, points ou sujet)"); }
  const { data: lessons, error: le } = await db.from("lessons").select("id, title").eq("course_id", cid);
  if (le) throw le;
  const missing = WRITTEN.filter((w) => !lessons.some((l) => l.id === lessonId(7, w.k)));
  if (missing.length) console.log(`(leçons françaises pas encore chargées : ${[...new Set(missing.map((w) => w.topic))].join(", ")} — nécessaire avant --apply)`);
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} questions à réponse construite (EN ${EN.WRITTEN.length}); ${todo.length} pas encore dans la banque; ${WRITTEN.reduce((s, r) => s + r.points, 0)} points; ${WRITTEN.filter((w) => w.fig).length} avec figures`);
  if (bad) { console.log(`${bad} PROBLÈME(S)`); process.exit(1); }
  if (!APPLY) { console.log("Dry run — utilise --apply."); process.exit(0); }
  if (missing.length) { console.log("Charge d'abord les leçons françaises du chapitre 7."); process.exit(1); }
  for (const w of todo) {
    const key = `${FIG_PREFIX}-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const upl = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (upl.error) throw upl.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, k, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessonId(7, k) });
    if (r.error) throw r.error;
  }
  console.log(`${todo.length} insérée(s)`);
}
