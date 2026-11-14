// MHF4U-FR chapitre 5 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mhf4u-ch5/written.mjs. Chaque question a une figure (SVG téléversé dans graph-images, clés mhf4u-fr-…).
//   node scripts/mhf4u-fr-ch5/written.mjs           -> essai à blanc
//   node scripts/mhf4u-fr-ch5/written.mjs --apply   -> téléverse les figures et insère les lignes absentes (repérées par l'énoncé)
// N'exécuter --apply qu'après le chargement des leçons françaises du chapitre 5 (chaque ligne est liée à sa leçon par le titre).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "./bank/fig.mjs";
import { TG, UC } from "./trigfig.mjs";
import { CID_FR, FIG_PREFIX } from "../mhf4u-fr/common.mjs";
import { TITLE as T1 } from "./l5_1.mjs";
import { TITLE as T2 } from "./l5_2.mjs";
import { TITLE as T3 } from "./l5_3.mjs";
import { TITLE as T4 } from "./l5_4.mjs";
import { TITLE as T5 } from "./l5_5.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5 };
const S = String.raw;
const P = Math.PI;
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };
const cut = (g) => (x) => (Math.abs(g(x)) < 0.07 ? NaN : 1 / g(x));
const vl = (xs) => ({ vlines: xs.map((x) => ({ x, color: "red", dash: true })) });

export const WRITTEN = [
  W(1, "medium", 4, S`Les graphiques de $y=\sin x$ et de $y=\cos x$ sont représentés pour $0\le x\le2\pi$. (a) Trouve les points de croisement exacts. (b) Indique où $\sin x>\cos x$. (c) Explique pourquoi les croisements sont espacés de $\pi$.`,
    S`(a) $\tan x=1$ : $\left(\frac\pi4,\frac{\sqrt2}2\right)$, $\left(\frac{5\pi}4,-\frac{\sqrt2}2\right)$. (b) $\frac\pi4<x<\frac{5\pi}4$ (test en $x=\frac\pi2$). (c) $\tan$ a une période de $\pi$. [2, 1, 1.]`,
    planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V))),
  W(1, "hard", 4, S`(a) Montre que $\tan(x+\pi)=\tan x$ à l'aide du cercle trigonométrique. (b) Donne les asymptotes et les zéros de $y=\tan x$ sur $[-\pi,\pi]$. (c) Combien de solutions l'équation $\tan x=-4$ a-t-elle sur $[-\pi,2\pi]$ ? Explique.`,
    S`(a) $\frac{-\sin x}{-\cos x}=\tan x$. (b) asymptotes $x=\pm\frac\pi2$; zéros $-\pi,0,\pi$. (c) $3$ : une dans chacun de $\left(-\frac\pi2,\frac\pi2\right)$, $\left(\frac\pi2,\frac{3\pi}2\right)$, $\left(\frac{3\pi}2,2\pi\right)$; sur $\left(-\pi,-\frac\pi2\right)$, la tangente est positive. [1, 1, 2.]`,
    planeDoc(UC(210, "x + π", [{ x: Math.cos(P / 6), y: 0.5, label: "x", color: "blue" }]))),
  W(2, "medium", 4, S`Les graphiques de $y=\sin x$ et de $y=\csc x$ sont représentés. (a) Explique d'où viennent les asymptotes de $y=\csc x$. (b) Donne ses points tournants sur $(0,2\pi)$. (c) Résous $\csc x=-2$ sur $[0,2\pi]$.`,
    S`(a) des zéros de $\sin x$ : $x=0,\pi,2\pi$. (b) $\left(\frac\pi2,1\right)$ min, $\left(\frac{3\pi}2,-1\right)$ max. (c) $\sin x=-\frac12$ : $\frac{7\pi}6,\frac{11\pi}6$. [1, 1, 2.]`,
    planeDoc(TG([[Math.sin, "violet"], [cut(Math.sin), "red"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }, [], vl([0, P, 2 * P])))),
  W(2, "hard", 4, S`(a) Donne le domaine et l'image de $y=3\sec x$. (b) Résous $\sec^2x=2$ sur $[0,2\pi]$. (c) Explique pourquoi $\sec x=\frac12$ n'a aucune solution, à l'aide de l'image.`,
    S`(a) $x\ne\frac\pi2+n\pi$; $y\le-3$ ou $y\ge3$. (b) $\cos x=\pm\frac{\sqrt2}2$ : $\frac\pi4,\frac{3\pi}4,\frac{5\pi}4,\frac{7\pi}4$. (c) l'image de sec est $|y|\ge1$ ($\cos x=2$ est impossible). [1, 2, 1.]`,
    planeDoc(TG([[Math.cos, "green"], [cut(Math.cos), "red"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }, [], vl([P / 2, 1.5 * P])))),
  W(3, "medium", 4, S`Le graphique montre une sinusoïde qui a un maximum en $\left(\frac\pi6,5\right)$ et le minimum suivant en $\left(\frac{2\pi}3,-1\right)$. (a) Trouve l'amplitude, l'axe et la période. (b) Écris une équation avec le cosinus. (c) Écris une équation avec le sinus.`,
    S`(a) $3$; $y=2$; $\pi$. (b) $y=3\cos\left(2\left(x-\frac\pi6\right)\right)+2$. (c) $y=3\sin\left(2\left(x+\frac\pi{12}\right)\right)+2$. [2, 1, 1.]`,
    planeDoc(TG([[(x) => 3 * Math.cos(2 * (x - P / 6)) + 2, "violet"]], { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 6 }))),
  W(3, "hard", 4, S`(a) Décris les transformations qui appliquent $y=\sin x$ sur $y=-2\sin(3x+\pi)+4$. (b) Donne l'image et la période. (c) Trouve le premier maximum avec $x>0$.`,
    S`(a) $3x+\pi=3\left(x+\frac\pi3\right)$ : réflexion, agrandissement vertical de facteur 2, compression horizontale de facteur $\frac13$, $\frac\pi3$ vers la gauche, 4 vers le haut. (b) $[2,6]$; $\frac{2\pi}3$. (c) $\sin(3x+\pi)=-1$ : $3x+\pi=\frac{3\pi}2$, $x=\frac\pi6$, point $\left(\frac\pi6,6\right)$. [2, 1, 1.]`,
    planeDoc(TG([[(x) => -2 * Math.sin(3 * x + P) + 4, "violet"]], { xmin: -0.5, xmax: 6.8, ymin: 0, ymax: 7 }))),
  W(4, "medium", 4, S`Résous $2\sin^2x-\sin x-1=0$ pour $0\le x\le2\pi$. Montre la factorisation et vérifie une solution dans l'équation de départ. Le graphique de $y=\sin x$ est fourni.`,
    S`$(2\sin x+1)(\sin x-1)=0$ : $\sin x=1\Rightarrow\frac\pi2$; $\sin x=-\frac12\Rightarrow\frac{7\pi}6,\frac{11\pi}6$. Vérification en $\frac\pi2$ : $2-1-1=0$. [1, 2, 1.]`,
    planeDoc(TG([[Math.sin, "violet"], [() => -0.5, "blue"], [() => 1, "blue"]], V))),
  W(4, "hard", 4, S`(a) Résous $\sin2x=\sqrt3\cos x$ pour $0\le x\le2\pi$. (b) Explique pourquoi diviser par $\cos x$ ferait perdre des solutions. (c) Écris la solution générale.`,
    S`(a) $\cos x(2\sin x-\sqrt3)=0$ : $\frac\pi3,\frac\pi2,\frac{2\pi}3,\frac{3\pi}2$. (b) les solutions où $\cos x=0$ disparaissent. (c) $x=\frac\pi2+n\pi$, $x=\frac\pi3+2n\pi$, $x=\frac{2\pi}3+2n\pi$. [2, 1, 1.]`,
    planeDoc(TG([[(x) => Math.sin(2 * x), "violet"], [(x) => Math.sqrt(3) * Math.cos(x), "green"]], { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 }))),
  W(5, "medium", 4, S`Une grande roue a un rayon de 16 m, son centre est à 18 m au-dessus du sol, et elle fait un tour toutes les 48 s. Un passager monte au bas de la roue en $t=0$. (a) Écris $h(t)$. (b) Trouve $h(12)$ et $h(20)$. (c) Trouve le taux de variation moyen de $t=12$ à $t=20$.`,
    S`(a) $h=-16\cos\left(\frac\pi{24}t\right)+18$. (b) $18$; $-16\cos\frac{5\pi}6+18\approx31.86$. (c) $\frac{31.86-18}8\approx1.73$ m/s. [2, 1, 1.]`,
    planeDoc(TG([[(t) => -16 * Math.cos((P / 24) * t) + 18, "violet"]], { xmin: -2, xmax: 100, ymin: 0, ymax: 36 }, [], { step: { x: 10, y: 4 }, xlabel: "t (s)" }))),
  W(5, "hard", 4, S`La profondeur d'un port est $d(t)=2.5\cos\left(\frac\pi6(t-3)\right)+6$ m, $t$ heures après minuit. (a) Trouve la plus grande et la plus petite profondeur et le premier instant où chacune se produit. (b) Un navire a besoin de 7.25 m. Trouve quand il peut entrer au port pendant $0\le t\le12$. (c) Estime le taux de variation en $t=6$.`,
    S`(a) $8.5$ m en $t=3$; $3.5$ m en $t=9$. (b) $\cos\ge\frac12$ : $|t-3|\le2$, donc $1\le t\le5$. (c) traversée de l'axe, en descendant : $-2.5\cdot\frac\pi6\approx-1.31$ m/h. [1, 2, 1.]`,
    planeDoc(TG([[(t) => 2.5 * Math.cos((P / 6) * (t - 3)) + 6, "violet"], [() => 7.25, "blue"]], { xmin: -0.5, xmax: 13, ymin: 0, ymax: 10 }, [], { step: { x: 1, y: 1 }, xlabel: "t (h)" }))),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  // The English file's own main-guard compares only the script's base name ("written.mjs"), so importing it from
  // here would run ITS dry run / --apply against the English course. Hide argv[1] while importing.
  const argv1 = process.argv[1];
  process.argv[1] = "imported-for-comparison";
  const { WRITTEN: EN } = await import("../mhf4u-ch5/written.mjs");
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
