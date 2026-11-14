// MHF4U-FR chapitre 1 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mhf4u-ch1/written.mjs. Chaque question a une figure (SVG téléversé dans graph-images, clés mhf4u-fr-…).
// NOTATION FRANÇAISE en 1.4 : y = a(x − c)³ + d (c horizontal, d vertical).
//   node scripts/mhf4u-fr-ch1/written.mjs           -> essai à blanc
//   node scripts/mhf4u-fr-ch1/written.mjs --apply   -> téléverse les figures et insère les lignes absentes (repérées par l'énoncé)
// N'exécuter --apply qu'après le chargement des leçons françaises du chapitre 1 (chaque ligne est liée à sa leçon par le titre).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";
import { CID_FR, FIG_PREFIX } from "../mhf4u-fr/common.mjs";
import { TITLE as T1 } from "./l1_1.mjs";
import { TITLE as T2 } from "./l1_2.mjs";
import { TITLE as T3 } from "./l1_3.mjs";
import { TITLE as T4 } from "./l1_4.mjs";
import { TITLE as T5 } from "./l1_5.mjs";
import { TITLE as T6 } from "./l1_6.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`Le graphique montre quatre fonctions puissance en bleu, en rouge, en vert et en ambre. (a) Associe chaque couleur à l'une des fonctions $y=0.5x^4$, $y=-x^3$, $y=x^5$, $y=-2x^2$, en justifiant chaque choix. (b) Indique la symétrie de chacune. (c) Lesquelles ont pour image $\mathbb R$?`,
    String.raw`(a) bleu $0.5x^4$ (monte aux deux extrémités, plate près de 0); ambre $-2x^2$ (descend aux deux extrémités); rouge $-x^3$ (Q2 → Q4); vert $x^5$ (Q3 → Q1, plus plate que $x^3$ près de 0). (b) $0.5x^4$ et $-2x^2$ : axe des y; $-x^3$ et $x^5$ : origine. (c) les fonctions impaires, $-x^3$ et $x^5$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 2, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 0.5 * x ** 4, color: "blue" }, { f: (x) => -(x ** 3), color: "red" }, { f: (x) => x ** 5, color: "green" }, { f: (x) => -2 * x * x, color: "amber" }], step: { x: 0.5, y: 1 } })),
  W(1, "hard", 4, String.raw`Une fonction puissance $y=ax^n$ passe par les deux points illustrés. (a) Trouve $a$ et $n$. (b) Décris son comportement à l'infini et sa symétrie. (c) Résous $ax^n=ax$ pour cette fonction.`,
    String.raw`(a) $(1,3)$ : $a=3$. $(-2,-96)$ : $3(-2)^n=-96\Rightarrow(-2)^n=-32\Rightarrow n=5$. (b) degré impair, $a>0$ : Q3 → Q1; symétrique par rapport à l'origine. (c) $3x^5=3x\Rightarrow x(x^4-1)=0\Rightarrow x=0,\pm1$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -100, ymax: 20 }, points: [P(1, 3), P(-2, -96)], step: { x: 1, y: 10 } })),
  W(2, "medium", 4, String.raw`Les points illustrés proviennent d'une fonction polynomiale en $x=0,1,2,3,4,5$. (a) Utilise les différences finies pour trouver son degré et son coefficient dominant. (b) Décris son comportement à l'infini et donne le plus grand nombre possible de points tournants. (c) Relie les points par une courbe lisse cohérente avec (a) et (b).`,
    String.raw`Valeurs $-2, 2, 8, 10, 2, -22$. Premières différences $4, 6, 2, -8, -24$; deuxièmes $2, -4, -10, -16$; troisièmes $-6, -6, -6$. (a) degré 3, $a\cdot3!=-6\Rightarrow a=-1$. (b) Q2 → Q4; au plus 2 points tournants. (c) une fonction cubique qui monte jusqu'à un maximum près de $x=3$, puis descend (la fonction est $-x^3+4x^2+x-2$). [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 6, ymin: -24, ymax: 14 }, points: [P(0, -2), P(1, 2), P(2, 8), P(3, 10), P(4, 2), P(5, -22)], step: { x: 1, y: 2 } })),
  W(2, "hard", 4, String.raw`Le graphique montre une fonction polynomiale. (a) Indique le plus petit degré possible et le signe du coefficient dominant, en justifiant. (b) La fonction est-elle paire, impaire ou ni l'une ni l'autre? Explique à l'aide du graphique. (c) Écris une équation possible, et explique pourquoi un polynôme impair ayant le même comportement à l'infini ne pourrait pas avoir exactement 4 zéros réels.`,
    String.raw`(a) 4 points tournants → degré au moins 5; Q3 → Q1, donc $a>0$. (b) impaire : une rotation de 180° autour de l'origine donne le même graphique. (c) zéros $0,\pm2,\pm3$ : $y=0.1x(x^2-4)(x^2-9)$. Une fonction impaire vérifie $f(0)=0$ et ses zéros non nuls vont par paires $\pm r$; elle a donc un nombre impair de zéros réels. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 0.1 * x * (x * x - 4) * (x * x - 9), color: "violet" }], step: { x: 1, y: 1 } })),
  W(3, "medium", 4, String.raw`Pour $f(x)=-(x+2)(x-1)^2(x-3)$ : (a) donne les zéros, leur ordre, le degré et le comportement à l'infini; (b) trouve l'ordonnée à l'origine et les intervalles où $f(x)>0$; (c) esquisse le graphique sur la grille.`,
    String.raw`(a) $-2$ (ordre 1), $1$ (ordre 2), $3$ (ordre 1); degré 4, $a=-1$ : descend aux deux extrémités. (b) $f(0)=-(2)(1)(-3)=6$. $f>0$ sur $-2<x<1$ et $1<x<3$. (c) traverse en $-2$ et en $3$, touche en $1$, passe par $(0,6)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 4, ymin: -10, ymax: 12 }, step: { x: 1, y: 2 } })),
  W(3, "hard", 4, String.raw`La fonction quartique illustrée touche l'axe des x en $-2$, le coupe en $1$ et en $4$, et son ordonnée à l'origine est indiquée. (a) Trouve son équation. (b) Résous $f(x)\ge0$. (c) Écris un polynôme d'un autre degré ayant les mêmes abscisses à l'origine et la même ordonnée à l'origine.`,
    String.raw`(a) $f=a(x+2)^2(x-1)(x-4)$; $f(0)=16a=-16\Rightarrow a=-1$. (b) $x=-2$ ou $1\le x\le4$. (c) p. ex. $g(x)=a(x+2)(x-1)(x-4)$ avec $8a=-16$ : $g=-2(x+2)(x-1)(x-4)$ (degré 3). [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -30, ymax: 60 }, curves: [{ f: (x) => -((x + 2) ** 2) * (x - 1) * (x - 4), color: "violet" }], points: [P(-2, 0), P(1, 0), P(4, 0), P(0, -16)], step: { x: 1, y: 10 } })),
  W(3, "hard", 4, String.raw`Une boîte a une base carrée de côté $x$ cm et une hauteur de $(10-x)$ cm, donc $V(x)=x^2(10-x)$. (a) Donne les zéros et leur ordre, ainsi qu'un domaine raisonnable. (b) Esquisse $V$ sur la grille. (c) Trouve toutes les valeurs de $x$ pour lesquelles $V=128$, sachant que $x=8$ en est une.`,
    String.raw`(a) $0$ (ordre 2) et $10$; $0<x<10$. (b) touche en 0, traverse en 10, positive entre les deux, maximum près de $x\approx6.7$. (c) $x^3-10x^2+128=0=(x-8)(x^2-2x-16)$ : $x=8$ ou $x=1+\sqrt{17}\approx5.12$ (la racine négative est rejetée). [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 160 }, step: { x: 1, y: 20 } })),
  W(4, "medium", 4, String.raw`$y=-2(x+1)^4+3$ est une transformation de $y=x^4$ (en gris). (a) Décris les transformations dans l'ordre. (b) Trouve les images des points $(-1,1)$, $(0,0)$, $(1,1)$ et donne le sommet. (c) Esquisse le graphique et donne le domaine et l'image.`,
    String.raw`(a) étirement vertical de facteur 2, réflexion par rapport à l'axe des x, translation de 1 vers la gauche et de 3 vers le haut. (b) $(x,y)\to(x-1,-2y+3)$ : $(-2,1)$, $(-1,3)$, $(0,1)$; sommet $(-1,3)$. (c) $D=\mathbb R$, $y\le3$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 3, ymin: -4, ymax: 5 }, curves: [{ f: (x) => x ** 4, color: "gray" }], step: { x: 1, y: 1 } })),
  W(4, "hard", 4, String.raw`La fonction cubique illustrée est une transformation de $y=x^3$; son point de symétrie et un autre point sont indiqués. (a) Trouve son équation sous la forme $y=a(x-c)^3+d$. (b) Trouve son abscisse à l'origine au centième près. (c) Montre que le même graphique peut s'écrire $y=[k(x-c)]^3+d$ et trouve $k$; interprète $k$.`,
    String.raw`(a) $(2,-1)$ et $(3,1)$ : $a(1)^3-1=1\Rightarrow a=2$; $y=2(x-2)^3-1$. (b) $(x-2)^3=\tfrac12\Rightarrow x=2+\sqrt[3]{0.5}\approx2.79$. (c) $k^3=2\Rightarrow k=\sqrt[3]2\approx1.26$ : une compression horizontale de facteur $\tfrac1{\sqrt[3]2}$ équivaut à un étirement vertical de facteur 2. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 4, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 2 * (x - 2) ** 3 - 1, color: "violet" }], points: [P(2, -1), P(3, 1)], step: { x: 0.5, y: 1 } })),
  W(5, "medium", 4, String.raw`Le graphique montre la température d'une serre (°C) à $t=0,2,4,6,8$ heures. (a) Trouve le taux de variation moyen sur $[0,4]$ et sur $[4,8]$. (b) Quel intervalle de 2 heures a le plus grand taux de variation moyen? (c) Interprète un taux moyen négatif dans ce contexte.`,
    String.raw`Valeurs $5, 9, 15, 18, 16$. (a) $\tfrac{15-5}{4}=2.5$ °C/h; $\tfrac{16-15}{4}=0.25$ °C/h. (b) taux $2, 3, 1.5, -1$ : $[2,4]$. (c) sur $[6,8]$, la serre s'est refroidie de 1 °C par heure en moyenne. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 9, ymin: 0, ymax: 20 }, segs: [{ pts: [[0, 5], [2, 9], [4, 15], [6, 18], [8, 16]], color: "violet" }], points: [P(0, 5), P(2, 9), P(4, 15), P(6, 18), P(8, 16)], step: { x: 1, y: 2 }, xlabel: "t (h)", ylabel: "T (°C)" })),
  W(5, "hard", 4, String.raw`La hauteur d'une balle est $h(t)=-5t^2+25t+1$ m (graphique illustré). (a) Trouve la vitesse moyenne sur $[0,2]$ et sur $[2,4]$. (b) Trouve $b>0$ pour que la vitesse moyenne sur $[0,b]$ soit 0. (c) Explique ce qu'une vitesse moyenne de 0 t'apprend, et ce qu'elle ne t'apprend pas, sur le mouvement de la balle.`,
    String.raw`(a) $h(0)=1$, $h(2)=31$, $h(4)=21$ : $15$ m/s et $-5$ m/s. (b) $\tfrac{h(b)-h(0)}{b}=\tfrac{-5b^2+25b}{b}=25-5b=0\Rightarrow b=5$. (c) la balle est revenue à sa hauteur de départ; elle a bien bougé (montée puis descente), donc 0 ne signifie pas qu'elle est restée immobile. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 5.5, ymin: -2, ymax: 34 }, curves: [{ f: (t) => -5 * t * t + 25 * t + 1, a: 0, b: 5.04, color: "violet" }], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W(6, "medium", 4, String.raw`Pour $f(x)=x^2-2x$ et le point indiqué sur le graphique : (a) estime la pente de la tangente en $x=3$ à l'aide de sécantes avec $h=0.1$ et $h=0.01$; (b) trouve la pente exacte à l'aide de $\dfrac{f(3+h)-f(3)}{h}$; (c) écris l'équation de la tangente et trace-la.`,
    String.raw`(a) $\tfrac{f(3.1)-3}{0.1}=\tfrac{3.41-3}{0.1}=4.1$; $\tfrac{3.0401-3}{0.01}=4.01$. (b) $\tfrac{(9+6h+h^2-6-2h)-3}{h}=4+h\to4$. (c) $y-3=4(x-3)$ : $y=4x-9$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 10 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }], points: [P(3, 3)], step: { x: 1, y: 1 } })),
  W(6, "hard", 4, String.raw`Un objet se déplace sur une droite; sa position est $s(t)=t^3-6t^2+9t$ m (graphique illustré). (a) Trouve sa vitesse moyenne sur $[0,3]$. (b) Montre que sa vitesse au temps $t=a$ est $3a^2-12a+9$. (c) Quand l'objet est-il immobile, et quand se déplace-t-il dans le sens négatif?`,
    String.raw`(a) $s(0)=s(3)=0$ : 0 m/s. (b) $\tfrac{s(a+h)-s(a)}{h}=3a^2+3ah+h^2-12a-6h+9\to3a^2-12a+9$. (c) $3(a-1)(a-3)=0$ : immobile en $t=1$ et en $t=3$; sens négatif pour $1<t<3$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 4.3, ymin: -1, ymax: 5 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 9 * t, a: 0, color: "violet" }], step: { x: 0.5, y: 1 }, xlabel: "t (s)", ylabel: "s (m)" })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  // The English file's own main-guard compares only the script's base name ("written.mjs"), so importing it from
  // here would run ITS dry run / --apply against the English course. Hide argv[1] while importing.
  const argv1 = process.argv[1];
  process.argv[1] = "imported-for-comparison";
  const { WRITTEN: EN } = await import("../mhf4u-ch1/written.mjs");
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
