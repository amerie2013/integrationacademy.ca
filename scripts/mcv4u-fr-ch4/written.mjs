// MCV4U-FR chapitre 4 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcv4u-ch4/written.mjs. Chaque question a une figure (SVG téléversé dans graph-images, clés mcv4u-fr-…).
//   node scripts/mcv4u-fr-ch4/written.mjs           -> essai à blanc
//   node scripts/mcv4u-fr-ch4/written.mjs --apply   -> téléverse les figures et insère les lignes absentes (repérées par l'énoncé)
// N'exécuter --apply qu'après le chargement des leçons françaises du chapitre 4 (chaque ligne est liée à sa leçon par le titre).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";
import { CID_FR, FIG_PREFIX } from "../mcv4u-fr/common.mjs";
import { TITLE as T1 } from "./l4_1.mjs";
import { TITLE as T2 } from "./l4_2.mjs";
import { TITLE as T3 } from "./l4_3.mjs";
import { TITLE as T4 } from "./l4_4.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const PI = Math.PI;

export const WRITTEN = [
  W(1, "medium", 4, S`Pour $f(x)=\sin x$ en $a=\frac\pi3$ : (a) évalue $\frac{f(a+h)-f(a)}{h}$ pour $h=0.1,\ 0.01,\ 0.001$; (b) donne le taux de variation instantané que ces valeurs suggèrent; (c) explique pourquoi les pentes des sécantes sont toutes légèrement inférieures à cette valeur.`,
    S`(a) $0.4559$, $0.4957$, $0.4996$. (b) $0.5=\cos\frac\pi3$. (c) La courbe est concave vers le bas près de $\frac\pi3$; les sécantes vers la droite sont donc moins inclinées que la tangente. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 2.2, ymin: 0.4, ymax: 1.1 }, curves: [{ f: Math.sin, color: "violet" }, { f: (x) => Math.sin(PI / 3) + 0.5 * (x - PI / 3), color: "green", a: 0.4, b: 1.8 }, { f: (x) => Math.sin(PI / 3) + 0.4559 * (x - PI / 3), color: "amber", a: 0.4, b: 1.8 }], points: [P(PI / 3, Math.sin(PI / 3)), P(PI / 3 + 0.1, Math.sin(PI / 3 + 0.1), false)], step: { x: 0.25, y: 0.1 } })),
  W(1, "hard", 4, S`(a) Évalue $\frac{\sin h}{h}$ et $\frac{\cos h-1}{h}$ pour $h=0.01$. (b) Utilise $\cos(x+h)=\cos x\cos h-\sin x\sin h$ et ces limites pour démontrer que la pente de $y=\cos x$ est $-\sin x$.`,
    S`(a) $\approx0.99998$ et $\approx-0.00500$, ce qui suggère les limites 1 et 0. (b) $\frac{\cos(x+h)-\cos x}{h}=\cos x\cdot\frac{\cos h-1}{h}-\sin x\cdot\frac{\sin h}{h}\to\cos x\cdot0-\sin x\cdot1=-\sin x$. [1, 3.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -0.4, ymax: 1.2 }, curves: [{ f: (h) => (Math.abs(h) < 1e-6 ? 1 : Math.sin(h) / h), color: "violet" }], points: [{ x: 0, y: 1, color: "red", open: true }], step: { x: 0.5, y: 0.2 } })),
  W(2, "medium", 4, S`Pour $f(x)=x\cos x+\sin x$ : (a) trouve $f'(x)$ et simplifie; (b) trouve l'équation de la tangente en $x=\pi$; (c) vérifie la pente sur le graphique.`,
    S`(a) $f'=\cos x-x\sin x+\cos x=2\cos x-x\sin x$. (b) $f(\pi)=-\pi$, $f'(\pi)=-2$ : $y=-2x+\pi$. (c) Au point $(\pi,-\pi)$, la tangente descend de 2 unités pour chaque unité vers la droite. [2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 5, ymin: -5, ymax: 2.5 }, curves: [{ f: (x) => x * Math.cos(x) + Math.sin(x), color: "violet" }, { f: (x) => -2 * x + PI, color: "green", a: 2, b: 4.3 }], points: [P(PI, -PI)], step: { x: 0.5, y: 1 } })),
  W(2, "hard", 4, S`(a) Utilise la règle du quotient pour montrer que $\frac{d}{dx}\tan x=\sec^2x$. (b) Trouve les extremums relatifs de $y=\tan x-2x$ sur $\left(-\frac\pi2,\frac\pi2\right)$.`,
    S`(a) $\frac{\cos x\cos x-\sin x(-\sin x)}{\cos^2x}=\frac1{\cos^2x}$. (b) $y'=\sec^2x-2=0\Rightarrow\cos x=\pm\frac1{\sqrt2}\Rightarrow x=\pm\frac\pi4$. Maximum relatif en $-\frac\pi4$ : $-1+\frac\pi2\approx0.571$; minimum relatif en $\frac\pi4$ : $1-\frac\pi2\approx-0.571$. [1, 3.]`,
    planeDoc({ view: { xmin: -1.6, xmax: 1.6, ymin: -2.5, ymax: 2.5 }, curves: [{ f: (x) => Math.tan(x) - 2 * x, a: -1.45, b: 1.45, color: "violet" }], vlines: [{ x: -PI / 2, color: "red", dash: true }, { x: PI / 2, color: "red", dash: true }], points: [P(-PI / 4, -1 + PI / 2), P(PI / 4, 1 - PI / 2)], step: { x: 0.5, y: 0.5 } })),
  W(3, "medium", 4, S`Pour $y=3\cos\left(2x-\frac\pi3\right)+1$ : (a) trouve $y'$; (b) donne la plus grande pente et explique comment $A$, $k$, $c$ et $d$ l'influencent; (c) trouve la tangente en $x=\frac\pi6$.`,
    S`(a) $y'=-6\sin\left(2x-\frac\pi3\right)$. (b) 6 $=|Ak|$; $c$ et $d$ ne font que translater le graphique. (c) En $\frac\pi6$, l'angle intérieur vaut 0 : $y=4$, pente 0, tangente $y=4$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -2.5, ymax: 4.8 }, curves: [{ f: (x) => 3 * Math.cos(2 * x - PI / 3) + 1, color: "violet" }, { f: () => 4, color: "green", a: -0.2, b: 1.2 }], points: [P(PI / 6, 4)], step: { x: 0.5, y: 1 } })),
  W(3, "hard", 4, S`Trouve les extremums absolus de $y=\sin^2x+\cos x$ sur $[0,2\pi]$, en montrant la dérivée et chaque valeur candidate.`,
    S`$y'=2\sin x\cos x-\sin x=\sin x(2\cos x-1)$ : nulle en $0,\pi,2\pi$ et en $\frac\pi3,\frac{5\pi}3$. Valeurs : $y(0)=y(2\pi)=1$, $y\left(\frac\pi3\right)=y\left(\frac{5\pi}3\right)=\frac34+\frac12=1.25$, $y(\pi)=-1$. Maximum absolu 1.25, minimum absolu $-1$. [2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 6.5, ymin: -1.4, ymax: 1.6 }, curves: [{ f: (x) => Math.sin(x) ** 2 + Math.cos(x), a: 0, b: 2 * PI, color: "violet" }], points: [P(PI / 3, 1.25), P((5 * PI) / 3, 1.25), P(PI, -1)], step: { x: 0.5, y: 0.5 } })),
  W(4, "medium", 4, S`Une masse se déplace selon $s(t)=4\cos(\pi t)$ cm. (a) Trouve $v(t)$ et $a(t)$. (b) Trouve le module maximal de la vitesse et la position de la masse à ce moment. (c) Montre que $a=-\pi^2s$ et explique ce que cela signifie.`,
    S`(a) $v=-4\pi\sin(\pi t)$, $a=-4\pi^2\cos(\pi t)$. (b) $4\pi\approx12.6$ cm/s, en $s=0$. (c) $a=-\pi^2(4\cos\pi t)=-\pi^2s$ : l'accélération pointe toujours vers le centre (mouvement harmonique simple). [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 4.2, ymin: -55, ymax: 55 }, curves: [{ f: (t) => 4 * Math.cos(PI * t), a: 0, b: 4.2, color: "violet" }, { f: (t) => -4 * PI * Math.sin(PI * t), a: 0, b: 4.2, color: "blue" }, { f: (t) => -4 * PI * PI * Math.cos(PI * t), a: 0, b: 4.2, color: "amber" }], step: { x: 0.5, y: 10 }, xlabel: "t (s)" })),
  W(4, "hard", 4, S`Une grande roue de 16 m de rayon a son centre à 18 m au-dessus du sol et fait un tour toutes les 48 s. Un passager monte au bas de la roue. (a) Écris $h(t)$. (b) Trouve la plus grande vitesse verticale. (c) Trouve le premier instant où le passager monte à 1 m/s.`,
    S`(a) $h(t)=18-16\cos\left(\frac{\pi}{24}t\right)$. (b) $h'=\frac{2\pi}3\sin\left(\frac\pi{24}t\right)$ : au plus $\frac{2\pi}3\approx2.09$ m/s. (c) $\sin\left(\frac\pi{24}t\right)=\frac{3}{2\pi}\approx0.477\Rightarrow t\approx3.80$ s. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 38 }, curves: [{ f: (t) => 18 - 16 * Math.cos((PI / 24) * t), a: 0, b: 96, color: "violet" }], points: [P(3.8, 18 - 16 * Math.cos((PI / 24) * 3.8)), P(12, 18)], step: { x: 10, y: 5 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W(4, "hard", 4, S`Un rectangle est inscrit dans l'ellipse $\frac{x^2}{25}+\frac{y^2}{9}=1$, ses côtés étant parallèles aux axes. À l'aide du sommet $(5\cos\theta,3\sin\theta)$, trouve la plus grande aire et les dimensions correspondantes.`,
    S`$A(\theta)=4(5\cos\theta)(3\sin\theta)=30\sin2\theta$, $0\lt\theta\lt\frac\pi2$. $A'=60\cos2\theta=0\Rightarrow\theta=\frac\pi4$. Maximum 30, avec des côtés $10\cos\frac\pi4\approx7.07$ et $6\sin\frac\pi4\approx4.24$. [2, 2.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 3 * Math.sqrt(Math.max(0, 1 - (x * x) / 25)), a: -5, b: 5, color: "violet" }, { f: (x) => -3 * Math.sqrt(Math.max(0, 1 - (x * x) / 25)), a: -5, b: 5, color: "violet" }], segs: [{ pts: [[-3.536, -2.121], [3.536, -2.121], [3.536, 2.121], [-3.536, 2.121], [-3.536, -2.121]], color: "green" }], points: [P(3.536, 2.121)], step: { x: 1, y: 1 } })),
  W(2, "hard", 3, S`Trouve $\frac{d^{n}}{dx^{n}}(\sin x+\cos x)$ pour $n=1,2,3,4$, décris la régularité observée et utilise-la pour évaluer la 2026e dérivée en $x=0$.`,
    S`$n=1$ : $\cos x-\sin x$; $n=2$ : $-\sin x-\cos x$; $n=3$ : $-\cos x+\sin x$; $n=4$ : $\sin x+\cos x$ — période 4. $2026=4\cdot506+2$; la 2026e dérivée est donc $-\sin x-\cos x$, qui vaut $-1$ en 0. [1, 1, 1.]`,
    planeDoc({ view: { xmin: -2 * PI, xmax: 2 * PI, ymin: -1.7, ymax: 1.7 }, curves: [{ f: (x) => Math.sin(x) + Math.cos(x), color: "violet" }, { f: (x) => -Math.sin(x) - Math.cos(x), color: "blue" }], step: { x: 1, y: 0.5 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  // The English file's own main-guard compares only the script's base name ("written.mjs"), so importing it from
  // here would run ITS dry run / --apply against the English course. Hide argv[1] while importing.
  const argv1 = process.argv[1];
  process.argv[1] = "imported-for-comparison";
  const { WRITTEN: EN } = await import("../mcv4u-ch4/written.mjs");
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
