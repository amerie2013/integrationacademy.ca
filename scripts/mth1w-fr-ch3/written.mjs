// MTH1W-FR chapitre 3 — questions à réponse construite (long_answer) de la banque, pour la partie C des tests imprimés.
// Les programmes sont joints en figures SVG (téléversées dans graph-images, clés mth1w-fr-…); les sorties des
// solutions modèles sont calculées avec lib/miniPython.
//   node scripts/mth1w-fr-ch3/written.mjs           -> essai à blanc (lecture seule)
//   node scripts/mth1w-fr-ch3/written.mjs --apply   -> téléverse les figures, insère seulement les énoncés absents (CID_FR)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { codeFig, out } from "./bank/code.mjs";
import { CID_FR, lessonId, FIG_PREFIX } from "../mth1w-fr/common.mjs";

// The English written.mjs runs its main block when argv[1] ends in "written.mjs" — hide argv[1] while importing it.
const a1 = process.argv[1]; process.argv[1] = "x";
const EN = await import("../mth1w-ch3/written.mjs");
process.argv[1] = a1;

const T = { 1: "3.1 Coder des concepts algébriques", 2: "3.2 Construire du code à partir d'étapes", 3: "3.3 Lire, prédire et modifier du code" };
const W = (t, difficulty, points, prompt, feedback, code = null) => ({ topic: T[t], lesson: t, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, code });

const C1 = `for x in range(-10, 11):
    if -3 < 2 * x - 5 <= 9:
        print(x, end=" ")`;
const C4 = `argent = 180
semaines = 0
while argent < 700:
    argent = argent + 22
    semaines = semaines + 1
print(semaines, argent)`;
const C5 = `def frais(mois):
    if mois <= 3:
        return 60
    return 45

total = 0
for m in range(1, 13):
    total = total + frais(m)
print(total)`;
const C6 = `v = 1
n = 0
while v < 2:
    v = v * 1.05
    n = n + 1
print(n)`;
const C7 = `a = 1
b = 4
for i in range(3):
    a = a + b
    b = b + a
print(a, b)`;
const C8 = `# Objectif : afficher la moyenne des notes
notes = [72, 65, 88]
total = 0
for m in notes:
    total = total + m
print(total / 2)
print(Total)`;
const C9 = `valeur = 24000
annee = 0
while valeur > 12000:
    valeur = valeur * 0.85
    annee = annee + 1
print(annee, round(valeur, 2))`;
const C9b = `valeur = 24000
annee = 0
while valeur < 36000:
    valeur = valeur * 1.06
    annee = annee + 1
print(annee, round(valeur, 2))`;

export const WRITTEN = [
  W(1, "medium", 3, String.raw`Un taxi demande $3.75$ dollars plus $1.95$ dollars par km. (a) Écris une fonction Python tarif(d) qui renvoie le prix de la course. (b) Explique ce qu'est le paramètre. (c) Donne le prix pour $d=2, 4, 6, 8$.`,
    String.raw`(a) def tarif(d): return 3.75 + 1.95 * d. (b) d est le paramètre : l'entrée (la distance en km) qui fait changer la sortie. (c) ${[2, 4, 6, 8].map((d) => out(`def tarif(d):\n    return 3.75 + 1.95 * d\nprint(round(tarif(${d}), 2))`)).join(", ")} dollars. [1 code correct avec *, 1 paramètre expliqué, 1 table.]`),
  W(1, "hard", 4, String.raw`(a) Prédis la sortie du programme montré. (b) Résous $-3<2x-5\le9$ avec l'algèbre. (c) Explique pourquoi le programme ne montre pas la solution complète de l'inéquation.`,
    String.raw`(a) ${out(C1).trim()}. (b) $2<2x\le14$, donc $1<x\le7$. (c) La boucle teste seulement les nombres entiers de $-10$ à $10$; des valeurs comme $1.5$ ou $6.9$ vérifient aussi l'inéquation. [1, 2, 1.]`, C1),
  W(1, "hard", 3, String.raw`Explique la différence entre = et == en Python. Utilise un exemple pour montrer pourquoi x = x + 4 est une instruction valide en code, alors que $x=x+4$ n'a pas de solution en algèbre.`,
    String.raw`= range la valeur du membre de droite dans la variable de gauche; == compare deux valeurs et donne True ou False. Avec x = 3, x = x + 4 calcule 7 et le range, donc x devient 7. En algèbre, $x=x+4$ signifierait $0=4$, ce qui est faux pour tout $x$. [1 pour chaque sens, 1 pour l'exemple.]`),
  W(2, "medium", 4, String.raw`Kai a $180$ dollars et épargne $22$ dollars par semaine. Il veut avoir au moins $700$ dollars. (a) Indique l'entrée, le traitement et la sortie. (b) Prédis la sortie du programme montré. (c) Vérifie ta réponse avec une inéquation.`,
    String.raw`(a) Entrée : 180, 22, 700; traitement : ajouter 22 chaque semaine tant que le total est inférieur à 700, en comptant les semaines; sortie : le nombre de semaines. (b) ${out(C4)}. (c) $180+22w\ge700$, $w\ge23.6$, donc $24$ semaines. [1, 2, 1.]`, C4),
  W(2, "hard", 4, String.raw`Un centre de conditionnement physique demande $60$ dollars par mois pour les $3$ premiers mois et $45$ dollars par mois ensuite. (a) Explique comment la fonction du programme modélise cette règle. (b) Prédis la sortie. (c) Écris une expression pour le coût total de $n>3$ mois, et vérifie-la avec $n=12$.`,
    String.raw`(a) Un if : les mois 1 à 3 renvoient 60, les mois suivants renvoient 45 (sélection). (b) ${out(C5)}. (c) $180+45(n-3)$; $n=12$ : $180+405=585$ ✓. [1, 1, 2.]`, C5),
  W(2, "hard", 4, String.raw`(a) À quelle question sur une valeur qui augmente de $5\%$ à chaque étape le programme montré répond-il? (b) Prédis la sortie. (c) Pourquoi utilise-t-on une boucle while plutôt qu'une boucle for? (d) Explique comment modifier le programme pour trouver combien de temps il faut pour que la valeur triple.`,
    String.raw`(a) Combien d'étapes il faut pour que la valeur double. (b) ${out(C6)} ($1.05^{14}\approx1.98$, $1.05^{15}\approx2.08$). (c) Le nombre de passages n'est pas connu d'avance; la boucle se répète jusqu'à ce qu'une condition soit remplie. (d) Remplace la condition par v < 3 (le programme affiche alors ${out(C6.replace("v < 2", "v < 3"))}). [1 chacune.]`, C6),
  W(3, "medium", 3, String.raw`Fais une table de traçage (colonnes i, a, b) pour le programme montré et donne sa sortie.`,
    String.raw`Après le passage 1 : a = 5, b = 9; passage 2 : a = 14, b = 23; passage 3 : a = 37, b = 60. Sortie : ${out(C7)}. [2 pour la table, 1 pour la sortie.]`, C7),
  W(3, "hard", 4, String.raw`Le programme montré devrait afficher la moyenne des notes. (a) Quelle erreur arrête le programme, et de quel type d'erreur s'agit-il? (b) Quelle ligne donne une mauvaise réponse même après la correction de (a), et de quel type d'erreur s'agit-il? (c) Écris la sortie du programme corrigé.`,
    String.raw`(a) La dernière ligne utilise Total (T majuscule) : NameError, une erreur d'exécution — elle se produit après le premier print. (b) total / 2 divise par 2 au lieu de 3 (ou len(notes)) : une erreur de logique. (c) ${out("print(round((72 + 65 + 88) / 3, 2))")} (la moyenne $225\div3=75$). [1, 1, 1, 1.]`, C8),
  W(3, "hard", 4, String.raw`Le programme montré modélise une voiture qui perd $15\%$ de sa valeur chaque année. (a) Prédis sa sortie. (b) Modifie-le pour modéliser un objet de collection qui vaut $24\,000$ dollars et qui prend $6\%$ de valeur par année, et trouve quand il vaut au moins $36\,000$ dollars. (c) Fais la liste de chaque ligne que tu as changée et explique si chaque changement touche un paramètre, une contrainte ou la formule.`,
    String.raw`(a) ${out(C9)}. (b) Multiplier par 1.06 et répéter tant que valeur < 36000 : ${out(C9b)}. (c) Multiplicateur 0.85 → 1.06 (formule/paramètre : de la décroissance à la croissance); condition valeur > 12000 → valeur < 36000 (contrainte : une nouvelle question). [1, 2, 1.]`, C9),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop()) && /mth1w-fr-ch3/.test(process.argv[1].replace(/\\/g, "/"))) {
  let bad = 0;
  const fail = (m) => { bad++; console.log("  FAIL:", m); };
  if (WRITTEN.length !== EN.WRITTEN.length) fail(`${WRITTEN.length} written questions, English has ${EN.WRITTEN.length}`);
  WRITTEN.forEach((w, i) => {
    const e = EN.WRITTEN[i];
    if (!e) return;
    if (w.difficulty !== e.difficulty || w.points !== e.points || !!w.code !== !!e.code || w.lesson !== Number(e.topic.split(" ")[0].split(".")[1])) fail(`Q${i + 1}: difficulty/points/figure/topic differ from English`);
    for (const s of [w.prompt, w.feedback]) if ((s.match(/\$/g) || []).length % 2 || /\bundefined\b/.test(s)) fail(`Q${i + 1}: bad text "${s.slice(0, 50)}"`);
  });
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const course = (await db.from("courses").select("id, code").eq("id", CID_FR).single()).data;
  if (!course || course.code !== "MTH1W-FR") throw new Error(`course ${CID_FR} is not MTH1W-FR`);
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", CID_FR).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions (English ${EN.WRITTEN.length}); ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks (English ${EN.WRITTEN.reduce((s, r) => s + r.points, 0)}); ${WRITTEN.filter((w) => w.code).length} with code figures`);
  if (bad) { console.log(`${bad} PROBLEM(S)`); process.exit(1); }
  if (!APPLY) { console.log("Essai à blanc — relancer avec --apply."); process.exit(0); }
  for (const w of todo) {
    let image_url = null;
    if (w.code) {
      const svg = codeFig(w.code);
      const key = `${FIG_PREFIX}-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 10)}.svg`;
      const up = await db.storage.from("graph-images").upload(key, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
      if (up.error) throw up.error;
      image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    }
    const { code, lesson, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: CID_FR, lesson_id: lessonId(3, lesson) });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
