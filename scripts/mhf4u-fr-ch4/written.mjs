// MHF4U-FR chapitre 4 — questions à réponse construite (long_answer) de la banque, pour les tests imprimés (partie C).
// Chaque question a une figure (SVG téléversé dans graph-images; les tests papier impriment image_url).
//   node scripts/mhf4u-fr-ch4/written.mjs           -> essai
//   node scripts/mhf4u-fr-ch4/written.mjs --apply   -> téléverse les figures (clés mhf4u-fr-…) et insère les questions absentes
//                                                     (comparées par énoncé); chaque ligne est liée à sa leçon par le titre.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "./bank/fig.mjs";
import { UC, ARM, SECTOR, TG } from "./trigfig.mjs";
import { CID_FR, FIG_PREFIX } from "../mhf4u-fr/common.mjs";

const S = String.raw;
const T = {
  1: "4.1 Mesure en radians", 2: "4.2 Rapports trigonométriques et angles remarquables", 3: "4.3 Expressions trigonométriques équivalentes",
  4: "4.4 Formules d'addition (angles composés)", 5: "4.5 Formules de l'angle double", 6: "4.6 Démonstration d'identités trigonométriques",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, S`Le secteur illustré a un rayon de 9 cm et un angle de $\frac{4\pi}3$. (a) Convertis l'angle en degrés. (b) Trouve la longueur d'arc. (c) Trouve l'aire.`,
    S`(a) $240^\circ$. (b) $s=12\pi\approx37.70$ cm. (c) $A=\frac12(81)\frac{4\pi}3=54\pi\approx169.65$ cm$^2$. [1, 1, 2.]`,
    planeDoc(SECTOR(9, (4 * Math.PI) / 3))),
  W(1, "hard", 4, S`Une courroie relie deux poulies de rayons 9 cm et 15 cm. La petite poulie tourne à 100 tours par minute. (a) Trouve sa vitesse angulaire en rad/s. (b) Trouve la vitesse de la courroie en cm/s. (c) Trouve la vitesse angulaire de la grande poulie en rad/s.`,
    S`(a) $\frac{100\cdot2\pi}{60}=\frac{10\pi}3$. (b) $9\cdot\frac{10\pi}3=30\pi\approx94.25$ cm/s. (c) $\frac{30\pi}{15}=2\pi$ rad/s. [1, 1, 2.]`,
    planeDoc(SECTOR(9, 2))),
  W(2, "medium", 4, S`Le côté terminal de $\theta$ passe par $(-8,15)$. (a) Trouve $r$. (b) Trouve les six rapports. (c) Trouve $\theta$ en radians, au centième près.`,
    S`(a) 17. (b) $\sin=\frac{15}{17}$, $\cos=-\frac8{17}$, $\tan=-\frac{15}8$, $\csc=\frac{17}{15}$, $\sec=-\frac{17}8$, $\cot=-\frac8{15}$. (c) $\pi-\tan^{-1}\frac{15}8\approx2.06$. [1, 2, 1.]`,
    planeDoc(ARM(-8, 15, "(−8, 15)"))),
  W(2, "hard", 4, S`(a) Trouve toutes les valeurs de $\theta$ dans $[0,2\pi]$ telles que $2\sin^2\theta=1$, et place-les sur le cercle trigonométrique. (b) Évalue $\tan\theta$ pour chacune. (c) Explique pourquoi $\sec\theta$ existe pour toutes ces valeurs.`,
    S`(a) $\sin\theta=\pm\frac{\sqrt2}2$ : $\frac\pi4,\frac{3\pi}4,\frac{5\pi}4,\frac{7\pi}4$. (b) $1,-1,1,-1$. (c) $\cos\theta=\pm\frac{\sqrt2}2\ne0$ pour chacune. [2, 1, 1.]`,
    planeDoc(UC(45, "π/4"))),
  W(3, "medium", 4, S`Les graphiques de $y=\cos x$ et de $y=\sin\left(\frac\pi2-x\right)$ sont illustrés. (a) Explique pourquoi ils se superposent, à l'aide du cercle trigonométrique. (b) Simplifie $\sin\left(\frac\pi2-x\right)+\cos(\pi+x)$. (c) Sachant que $\cos\frac{\pi}{5}\approx0.8090$, trouve $\sin\frac{3\pi}{10}$.`,
    S`(a) la réflexion par rapport à $y=x$ échange les coordonnées. (b) $\cos x-\cos x=0$. (c) $\frac\pi2-\frac\pi5=\frac{3\pi}{10}$ : $0.8090$. [2, 1, 1.]`,
    planeDoc(TG([[Math.cos, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  W(3, "hard", 4, S`Soit $\sin x=a$, avec $x$ dans le quadrant 2. (a) Exprime $\cos x$ en fonction de $a$. (b) Exprime $\sin(\pi+x)$, $\cos(\pi-x)$ et $\tan\left(\frac\pi2-x\right)$ en fonction de $a$. (c) Évalue tes expressions pour $a=\frac35$.`,
    S`(a) $-\sqrt{1-a^2}$. (b) $-a$; $\sqrt{1-a^2}$; $\cot x=-\frac{\sqrt{1-a^2}}a$. (c) $-\frac35,\ \frac45,\ -\frac43$. [1, 2, 1.]`,
    planeDoc(ARM(-4, 3, "(−4, 3)"))),
  W(4, "medium", 4, S`(a) Trouve la valeur exacte de $\sin\frac{5\pi}{12}$. (b) Trouve la valeur exacte de $\cos\frac{5\pi}{12}$. (c) Utilise (a) et (b) pour trouver la valeur exacte de $\tan\frac{5\pi}{12}$, sous sa forme la plus simple.`,
    S`(a) $\frac{\sqrt6+\sqrt2}4$. (b) $\frac{\sqrt6-\sqrt2}4$. (c) $\frac{\sqrt6+\sqrt2}{\sqrt6-\sqrt2}=2+\sqrt3$. [1, 1, 2.]`,
    planeDoc(UC(75, "5π/12"))),
  W(4, "hard", 4, S`L'angle $a$ a le côté terminal illustré, et $\sin b=-\frac{15}{17}$ avec $b$ dans le quadrant 3. (a) Trouve $\sin(a+b)$. (b) Trouve $\cos(a+b)$. (c) Indique le quadrant de $a+b$, en justifiant.`,
    S`$\sin a=\frac45,\cos a=-\frac35,\cos b=-\frac8{17}$. (a) $\frac45\left(-\frac8{17}\right)+\left(-\frac35\right)\left(-\frac{15}{17}\right)=\frac{13}{85}$. (b) $\left(-\frac35\right)\left(-\frac8{17}\right)-\frac45\left(-\frac{15}{17}\right)=\frac{84}{85}$. (c) les deux sont positifs, donc le côté terminal de $a+b$ est dans le quadrant 1. [2, 1, 1.]`,
    planeDoc(ARM(-3, 4, "a : (−3, 4)"))),
  W(5, "medium", 4, S`$\cos x=-\frac{5}{13}$ avec $x$ dans le quadrant 2. (a) Trouve $\sin x$. (b) Trouve $\sin2x$ et $\cos2x$. (c) Indique le quadrant de $2x$, à l'aide des signes obtenus en (b).`,
    S`(a) $\frac{12}{13}$. (b) $-\frac{120}{169}$; $-\frac{119}{169}$. (c) les deux sont négatifs : quadrant 3. [1, 2, 1.]`,
    planeDoc(ARM(-5, 12, "(−5, 12)"))),
  W(5, "hard", 4, S`(a) Utilise une formule de l'angle double pour écrire $y=4\sin x\cos x+1$ sous la forme d'une seule sinusoïde. (b) Donne son amplitude, sa période et son image. (c) Résous $y=3$ dans $[0,\pi]$.`,
    S`(a) $y=2\sin2x+1$. (b) 2; $\pi$; $[-1,3]$. (c) $\sin2x=1$ : $x=\frac\pi4$. [1, 2, 1.]`,
    planeDoc(TG([[(x) => 2 * Math.sin(2 * x) + 1, "violet"]], { xmin: -3.5, xmax: 3.5, ymin: -2, ymax: 4 }))),
  W(6, "medium", 4, S`(a) Démontre que $\dfrac{\sin^2x}{1-\cos x}=1+\cos x$. (b) Indique la restriction sur $x$. (c) Le membre de gauche et le membre de droite donnent une seule courbe. Explique pourquoi le graphique n'est pas une démonstration.`,
    S`(a) $\frac{1-\cos^2x}{1-\cos x}=\frac{(1-\cos x)(1+\cos x)}{1-\cos x}=1+\cos x$. (b) $\cos x\ne1$ : $x\ne2n\pi$. (c) un graphique ne montre qu'un nombre fini de valeurs, avec une précision limitée. [2, 1, 1.]`,
    planeDoc(TG([[(x) => 1 + Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 3 }))),
  W(6, "hard", 4, S`(a) Démontre que $\dfrac{\sin x+\sin2x}{1+\cos x+\cos2x}=\tan x$. (b) $\dfrac{\sin x+\sin2x}{\cos x+\cos2x}=\tan x$ est-elle une identité? Justifie. (c) Indique les restrictions de l'identité en (a).`,
    S`(a) numérateur $\sin x(1+2\cos x)$; dénominateur $\cos x+2\cos^2x=\cos x(1+2\cos x)$. (b) non : en $x=\frac\pi4$, MG $\approx2.41$, mais MD $=1$. (c) $\cos x\ne0$, $\cos x\ne-\frac12$. [2, 1, 1.]`,
    planeDoc(TG([[Math.tan, "violet"]], { xmin: -1.4, xmax: 1.4, ymin: -4, ymax: 4 }))),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = CID_FR;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !(lessons ?? []).some((l) => l.title === t));
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
