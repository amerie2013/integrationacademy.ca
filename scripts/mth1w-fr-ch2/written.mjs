// Chapitre 2 (MTH1W-FR) — questions à réponse construite (long_answer) pour la partie C des évaluations imprimées.
// Mirror of ../mth1w-ch2/written.mjs. Teacher-marked: `points` are the marks, `feedback` is the model solution + marking notes.
//   node scripts/mth1w-fr-ch2/written.mjs           -> dry run (also checks against the English set)
//   node scripts/mth1w-fr-ch2/written.mjs --apply   -> inserts rows not already in the French bank (matched by prompt)
// Rows: course CID_FR, topic = French lesson title, lesson_id = lessonId(2, k). Money written as "dollars" (never \$).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { createRequire } from "module";
import { CID_FR, lessonId } from "../mth1w-fr/common.mjs";

const T = {
  1: "2.1 Des mots aux expressions algébriques",
  2: "2.2 Expressions équivalentes",
  3: "2.3 Simplifier des expressions",
  4: "2.4 Créer et résoudre des équations",
  5: "2.5 Résoudre des équations à plusieurs étapes",
  6: "2.6 Transformer des formules",
};
const W = (t, difficulty, points, prompt, feedback) => ({ topic: T[t], lesson_id: lessonId(2, t), difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null });

export const WRITTEN = [
  // 2.1
  W(1, "medium", 3, String.raw`Imprimer $n$ t-shirts coûte $85$ dollars pour l'écran plus $6.50$ dollars par t-shirt. a) Écris une expression pour le coût. b) Trouve le coût de $40$ t-shirts. c) Explique ce que représente chaque nombre de ton expression.`,
    String.raw`a) $85+6.5n$. b) $85+6.5(40)=85+260=345$ dollars. c) $85$ est le coût unique (fixe), qui ne dépend pas de $n$; $6.5$ est le coût par t-shirt, la quantité ajoutée pour chaque t-shirt supplémentaire. [1, 1, 1.]`),
  W(1, "hard", 4, String.raw`Des tables carrées sont placées côte à côte en rangée : $1$ table accueille $4$ personnes, $2$ tables en accueillent $6$, $3$ tables en accueillent $8$. a) Écris une expression pour le nombre de places avec $n$ tables. b) Combien de personnes peuvent s'asseoir à $30$ tables? c) Quel est le plus petit nombre de tables nécessaires pour asseoir $100$ personnes? d) Explique ce que représente le terme constant de ton expression.`,
    String.raw`a) $2n+2$. b) $2(30)+2=62$. c) $2n+2\ge100$ donne $n\ge49$, donc $49$ tables. d) Les $2$ places aux deux bouts de la rangée, qui sont là peu importe le nombre de tables réunies. [1 chacune.]`),
  W(1, "hard", 3, String.raw`Décris les trois étapes du développement de la notation algébrique. Nomme un mathématicien, sa culture et sa contribution. Donne un avantage de la notation symbolique moderne.`,
    String.raw`Rhétorique (tout en mots, p. ex. Babylone, Égypte); syncopée (abréviations, p. ex. Diophante à Alexandrie); symbolique (lettres et signes, p. ex. Viète et Descartes en France). Exemple : Brahmagupta (Inde, 628) a donné des règles pour le zéro et les nombres négatifs; al-Khwārizmī (Bagdad, vers 820) a écrit l'ouvrage dont le titre nous a donné le mot « algèbre ». Avantage : une courte expression décrit une infinité de cas et peut être transformée à l'aide de règles. [1 étapes, 1 contributeur avec culture et contribution, 1 avantage.]`),
  // 2.2
  W(2, "medium", 3, String.raw`Simplifie $(3x^2-2xy+5y^2)-(x^2+4xy-2y^2)$. Vérifie ta réponse en substituant $x=1$ et $y=2$ dans l'expression de départ et dans ta réponse.`,
    String.raw`$3x^2-2xy+5y^2-x^2-4xy+2y^2=2x^2-6xy+7y^2$. Vérification : départ $(3-4+20)-(1+8-8)=19-1=18$; réponse $2-12+28=18$ ✓. [1 opposé de chaque terme, 1 simplification, 1 vérification.]`),
  W(2, "hard", 4, String.raw`Indique si chaque énoncé est toujours, parfois ou jamais vrai, et justifie avec des exemples. a) La différence de deux trinômes est un trinôme. b) La somme d'un polynôme de degré $3$ et d'un polynôme de degré $2$ est de degré $3$.`,
    String.raw`a) Parfois : $(x^2+2x+1)-(x^2+x+5)=x-4$ (binôme), mais $(2x^2+x+1)-(x^2+3x+5)=x^2-2x-4$ (trinôme). b) Toujours : le polynôme de degré $2$ n'a aucun terme en $x^3$ pour annuler le terme de degré $3$. [2 chacune : réponse + justification.]`),
  W(2, "hard", 3, String.raw`Utilise des tuiles algébriques (dessine-les ou décris-les) pour expliquer pourquoi on ne peut pas regrouper $2x$ et $x^2$. Utilise ensuite des tuiles et le principe du zéro pour simplifier $(2x^2-3x+1)+(-x^2+3x+2)$.`,
    String.raw`Une tuile $x$ mesure $x$ sur $1$ et une tuile $x^2$ mesure $x$ sur $x$ — des formes et des aires différentes, donc ce ne sont pas des termes semblables. Somme : une paire nulle de $x^2$, trois paires nulles de $x$; il reste une tuile $x^2$ et trois tuiles unités : $x^2+3$. [1 explication, 1 paires nulles montrées, 1 réponse.]`),
  // 2.3
  W(3, "medium", 3, String.raw`Développe et simplifie $3x(2x-5)-2(x^2-4x+1)$. Évalue ensuite l'expression de départ et ta réponse pour $x=2$ afin de vérifier.`,
    String.raw`$6x^2-15x-2x^2+8x-2=4x^2-7x-2$. Vérification pour $x=2$ : départ $6(-1)-2(4-8+1)=-6+6=0$; réponse $16-14-2=0$ ✓. [1 développement avec les signes, 1 simplification, 1 vérification.]`),
  W(3, "hard", 4, String.raw`Factorise complètement $24a^3b-36a^2b^2+12a^2b$. Explique comment tu sais que la factorisation est complète, et vérifie en développant.`,
    String.raw`PGFC : $12$ (de $24, 36, 12$), $a^2$, $b$ : $12a^2b(2a-3b+1)$. Complète parce que $2a$, $-3b$ et $1$ n'ont aucun facteur commun. Le développement donne $24a^3b-36a^2b^2+12a^2b$ ✓. [1 PGFC, 1 parenthèse, 1 raison, 1 vérification.]`),
  W(3, "hard", 4, String.raw`Une cour rectangulaire mesure $3x$ m sur $(2x+5)$ m. Une terrasse de $2x$ m sur $x$ m est construite dans un coin. a) Écris une expression simplifiée pour l'aire de pelouse qui reste. b) Trouve l'aire de la pelouse lorsque $x=4$. c) Les semences de gazon coûtent $0.80$ dollar par mètre carré. Combien coûte l'ensemencement de la pelouse lorsque $x=4$?`,
    String.raw`a) $3x(2x+5)-2x(x)=6x^2+15x-2x^2=4x^2+15x$. b) $64+60=124$ m². c) $124\times0.80=99.20$ dollars. [2, 1, 1.]`),
  // 2.4
  W(4, "medium", 3, String.raw`Résous $7-4x=31$. Nomme l'opération inverse utilisée à chaque étape, et vérifie ta solution.`,
    String.raw`Soustrais $7$ des deux côtés : $-4x=24$. Divise les deux côtés par $-4$ : $x=-6$. Vérification : $7-4(-6)=7+24=31$ ✓. [1 chaque étape avec son opération inverse, 1 vérification.]`),
  W(4, "hard", 4, String.raw`Voici les tarifs d'une électricienne : $0$ h — $70$ dollars, $1$ h — $115$ dollars, $2$ h — $160$ dollars, $3$ h — $205$ dollars. a) Écris une relation pour le coût $C$ pour $h$ heures. b) Écris et résous une équation pour trouver la durée d'un travail de $340$ dollars. c) Une facture s'élevait à $300$ dollars. Résous, et explique ce que signifie la réponse.`,
    String.raw`a) $C=70+45h$. b) $70+45h=340$, $45h=270$, $h=6$ h. c) $45h=230$, $h\approx5.11$ h, environ $5$ h $7$ min; une réponse non entière convient parce que le temps est continu (ou, si elle ne facture que des heures entières, cela montre que la facture ne portait pas sur des heures entières). [1, 2, 1.]`),
  W(4, "hard", 3, String.raw`Utilise $5(x-3)+2=27$ pour expliquer pourquoi il faut annuler les opérations dans l'ordre inverse. Résous l'équation.`,
    String.raw`Pour construire le membre de gauche à partir de $x$ : soustraire $3$, multiplier par $5$, ajouter $2$. On annule d'abord la dernière opération : $-2$ donne $5(x-3)=25$; $\div5$ donne $x-3=5$; $+3$ donne $x=8$. Annuler dans un autre ordre (p. ex. diviser $27$ par $5$ d'abord) ne tient pas compte du fait que le $+2$ a été ajouté après la multiplication. Vérification : $5(5)+2=27$ ✓. [1 explication, 1 étapes, 1 réponse.]`),
  // 2.5
  W(5, "medium", 4, String.raw`Résous $\dfrac{x+4}{3}-\dfrac{x-2}{5}=2$. Montre comment tu élimines les fractions et vérifie ta réponse.`,
    String.raw`Multiplie chaque terme par $15$ : $5(x+4)-3(x-2)=30$; $5x+20-3x+6=30$; $2x+26=30$; $x=2$. Vérification : $\frac63-\frac05=2$ ✓. [1 PPCD avec parenthèses, 1 développement, 1 réponse, 1 vérification.]`),
  W(5, "hard", 4, String.raw`La longueur d'un rectangle est de $5$ cm de moins que le triple de sa largeur. Si on double la largeur (et que la longueur ne change pas), le périmètre augmente de $18$ cm. Trouve les dimensions de départ.`,
    String.raw`Soit $w$ la largeur; la longueur est $3w-5$. Périmètre de départ $2(w+3w-5)=8w-10$. Nouveau périmètre $2(2w+3w-5)=10w-10$. $10w-10=8w-10+18$ donne $2w=18$, $w=9$; longueur $22$ cm. Vérification : $62$ cm et $80$ cm diffèrent de $18$ ✓. [1 variables, 1 périmètres, 1 équation, 1 réponse.]`),
  W(5, "hard", 4, String.raw`Explique la différence entre une équation sans solution et une identité. Crée un exemple de chacune sous la forme $a(x+b)=cx+d$, et montre le travail qui permet de les reconnaître.`,
    String.raw`Aucune solution : la variable s'annule et il reste un énoncé faux, p. ex. $2(x+3)=2x+1$ donne $6=1$. Identité : la variable s'annule et il reste un énoncé vrai, donc toute valeur convient, p. ex. $3(x-2)=3x-6$ donne $-6=-6$. [1 chaque définition, 1 chaque exemple avec le travail.]`),
  // 2.6
  W(6, "medium", 3, String.raw`Isole $b$ dans $A=\frac12bh$. Une voile triangulaire a une aire de $6.3$ m² et une hauteur de $4.2$ m. Trouve la longueur de sa base.`,
    String.raw`$2A=bh$, donc $b=\frac{2A}{h}$. $b=\frac{12.6}{4.2}=3$ m. [1 formule transformée, 1 substitution, 1 réponse avec unités.]`),
  W(6, "hard", 4, String.raw`Transforme $3x-5y=30$ sous la forme $y=mx+b$. Donne la pente, l'ordonnée à l'origine et l'abscisse à l'origine, et explique ce que le signe de la pente t'indique sur la droite.`,
    String.raw`$-5y=-3x+30$, $y=\frac35x-6$. Pente $\frac35$, ordonnée à l'origine $-6$, abscisse à l'origine $10$ (pose $y=0$ : $3x=30$). Pente positive : la droite monte de gauche à droite. [1 formule transformée, 1 pente et ordonnée à l'origine, 1 abscisse à l'origine, 1 explication.]`),
  W(6, "hard", 4, String.raw`a) Isole $C$ dans $F=1.8C+32$. b) Montre que $-40$ degrés est la même valeur sur les deux échelles. c) Un tableau météo donne $50$ températures en degrés Fahrenheit. Explique pourquoi il vaut mieux transformer la formule une seule fois plutôt que de résoudre $50$ équations.`,
    String.raw`a) $C=\frac{F-32}{1.8}$. b) $\frac{-40-32}{1.8}=\frac{-72}{1.8}=-40$ (ou résous $C=1.8C+32$ : $-0.8C=32$, $C=-40$). c) La formule transformée est une seule règle qu'on peut entrer une fois dans un tableur ou une calculatrice et appliquer à chaque valeur; résoudre $50$ équations répète les mêmes étapes et multiplie les risques d'erreur. [1, 1, 2.]`),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith("mth1w-fr-ch2/written.mjs") && process.argv[1].replace(/\\/g, "/").endsWith("mth1w-fr-ch2/written.mjs")) {
  // compare with the English set — hide argv[1] so the English module's main block cannot run (it would write to the English course)
  const a1 = process.argv[1]; process.argv[1] = "x";
  const EN = (await import("../mth1w-ch2/written.mjs")).WRITTEN;
  process.argv[1] = a1;
  const katex = createRequire(import.meta.url)("katex");
  let bad = 0;
  const fail = (m) => { bad++; console.log("  FAIL:", m); };
  const mathOf = (s) => [...s.matchAll(/\$([^$]+)\$/g)].map((m) => m[1].replace(/\s+/g, "")).filter((x) => x.length > 1).sort().join(" | ");
  if (EN.length !== WRITTEN.length) fail(`${WRITTEN.length} French vs ${EN.length} English`);
  WRITTEN.forEach((w, i) => {
    const e = EN[i];
    const L = `#${i + 1} ${w.topic.split(" ")[0]}`;
    if (!e || e.topic.split(" ")[0] !== w.topic.split(" ")[0] || e.difficulty !== w.difficulty || e.points !== w.points) fail(`${L}: topic/difficulty/points differ from English`);
    for (const s of [w.prompt, w.feedback]) {
      if ((s.match(/\$/g) || []).length % 2) fail(`${L}: odd number of $`);
      if (/\bundefined\b/.test(s)) fail(`${L}: "undefined" in text`);
      for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (er) { fail(`${L}: KaTeX ${m[1].slice(0, 40)}`); } }
    }
    if (e && mathOf(w.prompt) !== mathOf(e.prompt)) fail(`${L}: prompt math differs`);
    if (e && mathOf(w.feedback) !== mathOf(e.feedback)) fail(`${L}: feedback math differs\n     EN ${mathOf(e.feedback)}\n     FR ${mathOf(w.feedback)}`);
  });
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const { data: existing, error } = await db.from("bank_questions").select("prompt").eq("course_id", CID_FR).eq("kind", "long_answer");
  if (error) throw error;
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const rows = WRITTEN.map((w) => ({ ...w, course_id: CID_FR }));
  const todo = rows.filter((r) => !have.has(r.prompt));
  const per = WRITTEN.reduce((a, w) => ((a[w.topic.split(" ")[0]] = (a[w.topic.split(" ")[0]] || 0) + 1), a), {});
  console.log(`${WRITTEN.length} written questions (English: ${EN.length}); per topic ${JSON.stringify(per)}; ${todo.length} not yet in the French bank; ${rows.reduce((s, r) => s + r.points, 0)} marks in total`);
  if (bad) { console.log(`${bad} PROBLEM(S) — nothing written`); process.exit(1); }
  if (APPLY) {
    if (todo.length) { const r = await db.from("bank_questions").insert(todo); if (r.error) throw r.error; }
    console.log(`inserted ${todo.length}`);
  } else console.log("ALL CHECKS PASSED. Dry run — use --apply (MTH1W-FR course).");
}
