// MHF4U-FR chapitre 2 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mhf4u-ch2/written.mjs. Chaque question a une figure (SVG téléversé dans graph-images, clés mhf4u-fr-…).
//   node scripts/mhf4u-fr-ch2/written.mjs           -> essai à blanc
//   node scripts/mhf4u-fr-ch2/written.mjs --apply   -> téléverse les figures et insère les lignes absentes (repérées par l'énoncé)
// N'exécuter --apply qu'après le chargement des leçons françaises du chapitre 2 (chaque ligne est liée à sa leçon par le titre).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";
import { CID_FR, FIG_PREFIX } from "../mhf4u-fr/common.mjs";
import { TITLE as T1 } from "./l2_1.mjs";
import { TITLE as T2 } from "./l2_2.mjs";
import { TITLE as T3 } from "./l2_3.mjs";
import { TITLE as T4 } from "./l2_4.mjs";
import { TITLE as T5 } from "./l2_5.mjs";
import { TITLE as T6 } from "./l2_6.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`Le graphique de $P(x)=2x^3-3x^2+4x+7$ est illustré. (a) Divise $P(x)$ par $x-2$ à l'aide de la division synthétique. (b) Écris l'énoncé de la division. (c) Utilise le théorème du reste pour vérifier ton reste, et explique sa signification sur le graphique.`,
    String.raw`(a) $2;\ 1;\ 6;\ 19$ : $Q=2x^2+x+6$, $R=19$. (b) $P(x)=(x-2)(2x^2+x+6)+19$. (c) $P(2)=16-12+8+7=19$ : le graphique passe par $(2,19)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 3, ymin: -20, ymax: 40 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x + 4 * x + 7, color: "violet" }], step: { x: 0.5, y: 5 } })),
  W(1, "hard", 4, String.raw`$P(x)=x^3+ax^2+bx-4$ passe par les deux points marqués. (a) Utilise le théorème du reste pour trouver $a$ et $b$. (b) Factorise $P(x)$ complètement. (c) Trouve le reste lorsque $P(x)$ est divisé par $x-3$.`,
    String.raw`(a) $P(1)=a+b-3=-6\Rightarrow a+b=-3$; $P(2)=4+4a+2b=0\Rightarrow2a+b=-2$ : $a=1$, $b=-4$. (b) $x^2(x+1)-4(x+1)=(x+1)(x-2)(x+2)$. (c) $P(3)=27+9-12-4=20$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -8, ymax: 6 }, points: [P(1, -6), P(2, 0)], step: { x: 1, y: 1 } })),
  W(2, "medium", 4, String.raw`Pour $P(x)=2x^3-5x^2-4x+3$ : (a) dresse la liste des zéros rationnels possibles; (b) factorise $P(x)$ complètement en montrant ton test; (c) esquisse $y=P(x)$ sur la grille en indiquant les points d'intersection avec les axes.`,
    String.raw`(a) $\pm1,\pm3,\pm\tfrac12,\pm\tfrac32$. (b) $P(3)=54-45-12+3=0$; quotient $2x^2+x-1=(2x-1)(x+1)$ : $P(x)=(x-3)(2x-1)(x+1)$. (c) zéros $-1,\tfrac12,3$; ordonnée à l'origine 3; du 3e au 1er quadrant. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 4, ymin: -12, ymax: 8 }, step: { x: 0.5, y: 2 } })),
  W(2, "hard", 4, String.raw`$x-1$ et $x+2$ sont des facteurs de $P(x)=x^4+kx^3-7x^2+mx+12$. (a) Trouve $k$ et $m$. (b) Factorise $P(x)$ complètement. (c) Esquisse $y=P(x)$ sur la grille.`,
    String.raw`(a) $P(1)=k+m+6=0$; $P(-2)=-8k-2m=0\Rightarrow m=-4k$; donc $k=2$, $m=-8$. (b) $P(x)=(x^2+x-2)(x^2+x-6)=(x-1)(x+2)(x+3)(x-2)$. (c) zéros $-3,-2,1,2$; ordonnée à l'origine 12; vers le haut aux deux extrémités. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 3, ymin: -12, ymax: 20 }, step: { x: 1, y: 4 } })),
  W(3, "medium", 4, String.raw`(a) Résous $x^3-7x^2+7x+15=0$ algébriquement. (b) Explique comment le graphique de $y=x^3-7x^2+7x+15$ confirme ta réponse. (c) Esquisse-le sur la grille.`,
    String.raw`(a) $P(-1)=-1-7-7+15=0$; quotient $x^2-8x+15=(x-3)(x-5)$ : $x=-1, 3, 5$. (b) les racines sont les abscisses à l'origine. (c) du 3e au 1er quadrant, coupe l'axe en $-1,3,5$, ordonnée à l'origine 15. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -20, ymax: 30 }, step: { x: 1, y: 5 } })),
  W(3, "hard", 4, String.raw`On fabrique une boîte sans couvercle à partir d'une feuille de 20 cm sur 12 cm en découpant des carrés de côté $x$ cm dans les coins. (a) Montre que le volume est de 256 cm³ lorsque $x^3-16x^2+60x-64=0$. (b) Résous l'équation et détermine quelles solutions ont du sens. (c) Utilise le graphique pour expliquer pourquoi il y a deux boîtes possibles.`,
    String.raw`(a) $x(20-2x)(12-2x)=256\Rightarrow4x^3-64x^2+240x-256=0$, divise par 4. (b) $x=2$ convient : $(x-2)(x^2-14x+32)=0$, $x=7\pm\sqrt{17}$; avec $0\lt x\lt6$ : $x=2$ ou $x=7-\sqrt{17}\approx2.88$. (c) la courbe du volume monte jusqu'à un maximum puis redescend, et coupe la droite $V=256$ deux fois. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 6.2, ymin: 0, ymax: 300 }, curves: [{ f: (x) => x * (20 - 2 * x) * (12 - 2 * x), a: 0, b: 6, color: "violet" }, { f: () => 256, color: "green" }], step: { x: 0.5, y: 50 }, xlabel: "x (cm)", ylabel: "V (cm³)" })),
  W(3, "hard", 4, String.raw`(a) Résous $(x^2+2x)^2-11(x^2+2x)+24=0$ en posant $u=x^2+2x$. (b) Vérifie une solution. (c) Explique pourquoi une équation de degré 4 peut avoir au plus 4 racines réelles, et combien celle-ci en a.`,
    String.raw`(a) $u^2-11u+24=0\Rightarrow u=3$ ou $8$. $x^2+2x-3=0\Rightarrow x=1,-3$; $x^2+2x-8=0\Rightarrow x=2,-4$. (b) p. ex. $x=2$ : $u=8$, $64-88+24=0$. (c) un polynôme de degré 4 a au plus 4 facteurs linéaires; celui-ci les a tous les 4. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 3, ymin: -10, ymax: 30 }, curves: [{ f: (x) => (x * x + 2 * x) ** 2 - 11 * (x * x + 2 * x) + 24, color: "violet" }], step: { x: 1, y: 5 } })),
  W(4, "medium", 4, String.raw`(a) Écris la famille de fonctions de degré 3 ayant pour zéros $-2$, $1$ et $3$. (b) Trouve le membre qui passe par $(2,8)$ et son ordonnée à l'origine. (c) Esquisse ce membre et le membre $k=1$ sur la grille, et décris le lien entre eux.`,
    String.raw`(a) $y=k(x+2)(x-1)(x-3)$. (b) $k(4)(1)(-1)=-4k=8\Rightarrow k=-2$; ordonnée à l'origine $-2(2)(-1)(-3)=-12$. (c) $k=1$ a une ordonnée à l'origine de 6; $k=-2$ est ce graphique étiré par un facteur de 2 et réfléchi par rapport à l'axe des x; mêmes abscisses à l'origine. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 4, ymin: -20, ymax: 20 }, step: { x: 1, y: 4 } })),
  W(4, "hard", 4, String.raw`Une fonction de degré 4 a un zéro double en $-1$ et les zéros $2\pm\sqrt3$, et son ordonnée à l'origine est 3. (a) Trouve son équation. (b) Trouve $f(1)$. (c) Esquisse le graphique en montrant le comportement à chaque zéro.`,
    String.raw`(a) $(x-2)^2-3=x^2-4x+1$ : $y=k(x+1)^2(x^2-4x+1)$; $f(0)=k=3$. (b) $f(1)=3(4)(-2)=-24$. (c) vers le haut aux deux extrémités; touche l'axe en $-1$; le coupe en $2-\sqrt3\approx0.27$ et en $2+\sqrt3\approx3.73$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 4.5, ymin: -40, ymax: 20 }, step: { x: 0.5, y: 5 } })),
  W(5, "medium", 4, String.raw`Le graphique de $f(x)=x^3-2x^2-5x+6$ est illustré. (a) Lis les zéros et confirmes-en un algébriquement. (b) Résous $f(x)\ge0$ et $f(x)\lt0$ en notation d'intervalle. (c) Explique pourquoi les bornes sont incluses dans une réponse et pas dans l'autre.`,
    String.raw`(a) zéros $-2, 1, 3$; p. ex. $f(1)=1-2-5+6=0$. (b) $f\ge0$ : $[-2,1]\cup[3,\infty)$; $f\lt0$ : $(-\infty,-2)\cup(1,3)$. (c) aux zéros $f=0$, ce qui vérifie $\ge$ mais pas $\lt$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 4, ymin: -10, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 2 * x * x - 5 * x + 6, color: "violet" }], step: { x: 1, y: 2 } })),
  W(5, "hard", 4, String.raw`Les graphiques de $y=x^3$ et de $y=3x+2$ sont illustrés. (a) Trouve algébriquement leurs points de rencontre. (b) Résous $x^3\le3x+2$ et explique le rôle du point de contact. (c) Pour quelles valeurs de $k$ l'équation $x^3=3x+k$ a-t-elle trois solutions réelles?`,
    String.raw`(a) $x^3-3x-2=(x+1)^2(x-2)=0$ : $x=-1$ (contact) et $x=2$. (b) $(x+1)^2(x-2)\le0\Rightarrow x\le2$; en $x=-1$, la courbe touche la droite sans la traverser, donc le signe ne change pas. (c) $x^3-3x$ a pour valeurs aux points tournants $2$ et $-2$ : $-2\lt k\lt2$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -8, ymax: 10 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 3 * x + 2, color: "green" }], step: { x: 0.5, y: 2 } })),
  W(6, "medium", 4, String.raw`Résous $x^3+2x^2-11x-12\ge0$. (a) Factorise complètement. (b) Construis un tableau de signes. (c) Donne la solution en notation d'intervalle et représente-la sur une droite numérique (utilise l'axe des x de la grille).`,
    String.raw`(a) $P(-1)=0$; quotient $x^2+x-12=(x+4)(x-3)$ : $(x+1)(x+4)(x-3)$. (b) signes sur $x\lt-4$, $(-4,-1)$, $(-1,3)$, $x>3$ : −, +, −, +. (c) $[-4,-1]\cup[3,\infty)$, points pleins. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 5, ymin: -2, ymax: 2 }, step: { x: 1, y: 1 } })),
  W(6, "hard", 4, String.raw`(a) Résous $x^4-5x^3+4x^2\lt0$ algébriquement. (b) Explique pourquoi $x=0$ ne fait pas partie de la solution, même si le polynôme ne change pas de signe en ce point. (c) Résous $x^4-5x^3+4x^2\le0$ et compare.`,
    String.raw`(a) $x^2(x-1)(x-4)\lt0$ : signes +, +, −, + : $1\lt x\lt4$. (b) en $x=0$ la valeur est 0, qui n'est pas $\lt0$; de part et d'autre, elle est positive. (c) $\le0$ : $\{0\}\cup[1,4]$ — le zéro de contact devient une solution isolée. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1.5, xmax: 5, ymin: -12, ymax: 8 }, curves: [{ f: (x) => x ** 4 - 5 * x ** 3 + 4 * x * x, color: "violet" }], step: { x: 0.5, y: 2 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  // The English module runs its own main block when argv[1] ends in "written.mjs" (it would act on the ENGLISH course),
  // so hide our argv while importing it read-only for the comparison.
  const argv = process.argv.splice(1);
  const { WRITTEN: EN } = await import("../mhf4u-ch2/written.mjs");
  process.argv.push(...argv);
  let bad = 0;
  if (EN.length !== WRITTEN.length) { bad++; console.log(`FAIL: ${WRITTEN.length} written questions, English has ${EN.length}`); }
  WRITTEN.forEach((w, i) => { const e = EN[i]; if (!e || e.fig !== w.fig || e.points !== w.points || e.difficulty !== w.difficulty || e.topic.split(" ")[0] !== w.topic.split(" ")[0]) { bad++; console.log(`FAIL: question ${i + 1} differs from English (figure/points/difficulty/topic)`); } });
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = CID_FR;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !lessons.some((l) => l.title === t));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions (English ${EN.length}); ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures${bad ? `; ${bad} PROBLEM(S)` : "; checks OK"}`);
  if (missing.length) console.log("lessons not loaded yet:", missing);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(bad ? 1 : 0); }
  if (bad) process.exit(1);
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
