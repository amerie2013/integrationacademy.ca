// MHF4U-FR chapitre 3 — questions à réponse construite (long_answer) de la banque, pour la partie C des tests imprimés.
// Chaque question a une figure (SVG téléversé dans graph-images, clés mhf4u-fr-…; les tests imprimés utilisent image_url).
//   node scripts/mhf4u-fr-ch3/written.mjs           -> essai à blanc (lecture seule)
//   node scripts/mhf4u-fr-ch3/written.mjs --apply   -> téléverse les figures, insère les lignes absentes (repérées par l'énoncé)
// À lancer avec --apply seulement après le chargement des leçons françaises (chaque ligne est liée à lessonId(3, k)).
// (c, d de (ax + b)/(cx + d) sont des coefficients : aucune permutation c↔d.)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P, RG } from "./bank/fig.mjs";
import { CID_FR, lessonId, FIG_PREFIX } from "../mhf4u-fr/common.mjs";
import { TITLE as T1 } from "./l3_1.mjs";
import { TITLE as T2 } from "./l3_2.mjs";
import { TITLE as T3 } from "./l3_3.mjs";
import { TITLE as T4 } from "./l3_4.mjs";
import { TITLE as T5 } from "./l3_5.mjs";

const S = String.raw;
const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], k: t, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const grid = (view, step) => planeDoc({ view, ...(step ? { step } : {}) });

export const WRITTEN = [
  W(1, "medium", 4, S`Pour $g(x)=\dfrac1{2x-6}$ : a) donne les asymptotes, le domaine et l'image; b) trouve l'ordonnée à l'origine et les points invariants avec $f(x)=2x-6$; c) esquisse $f$ et $g$ sur la grille.`,
    S`a) AV $x=3$, AH $y=0$; $x\ne3$; $y\ne0$. b) $-\frac16$; $2x-6=\pm1$ : $\left(\frac72,1\right)$, $\left(\frac52,-1\right)$. c) la droite et deux branches passant par ces points. [2, 1, 1.]`,
    grid({ xmin: -2, xmax: 8, ymin: -5, ymax: 5 })),
  W(1, "hard", 4, S`$g(x)=\dfrac1{kx+c}$ est représentée. a) Utilise les points marqués pour trouver $k$ et $c$. b) Trouve le taux de variation moyen sur $[1,2]$. c) Résous $g(x)\gt1$ et explique le résultat à l'aide du graphique.`,
    S`a) En $(0,\frac12)$ : $c=2$; en $(2,\frac14)$ : $2k+2=4$, $k=1$. b) $g(1)=\frac13$, $g(2)=\frac14$ : $-\frac1{12}$. c) $0\lt x+2\lt1$ : $-2\lt x\lt-1$; la branche de droite n'est au-dessus de $y=1$ que juste après l'asymptote. [2, 1, 1.]`,
    RG((x) => 1 / (x + 2), [-2], { xmin: -6, xmax: 5, ymin: -3, ymax: 3 }, 0, [P(0, 0.5), P(2, 0.25)], { step: { x: 1, y: 0.5 } })),
  W(2, "medium", 4, S`Pour $g(x)=\dfrac1{x^2-6x+5}$ : a) trouve les asymptotes verticales; b) trouve le point tournant et l'ordonnée à l'origine; c) esquisse $g$ sur la grille et donne ses intervalles de croissance.`,
    S`a) $(x-1)(x-5)$ : $x=1$, $x=5$. b) sommet $(3,-4)$ : $\left(3,-\frac14\right)$; ordonnée à l'origine $\frac15$. c) croissante sur $(-\infty,1)$ et sur $(1,3)$. [1, 2, 1.]`,
    grid({ xmin: -2, xmax: 8, ymin: -2, ymax: 2 }, { x: 1, y: 0.5 })),
  W(2, "hard", 4, S`Le graphique représente $g(x)=\dfrac a{x^2+bx+c}$. a) Trouve $a$, $b$ et $c$. b) Donne l'image. c) Résous $g(x)\ge1$.`,
    S`a) Aucun zéro; max $2$ en $x=-1$; $g(0)=1$ : $a/(1+k)=1$, $a/k=2$ avec $f=(x+1)^2+k$ donne $k=1$, $a=2$ : $g=\frac2{x^2+2x+2}$, $b=2$, $c=2$. b) $(0,2]$. c) $x^2+2x+2\le2$ : $-2\le x\le0$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 3, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => 2 / (x * x + 2 * x + 2), color: "violet" }], points: [P(-1, 2), P(0, 1)], step: { x: 1, y: 0.5 } })),
  W(3, "medium", 4, S`Pour $f(x)=\dfrac{2x-8}{x+2}$ : a) donne les asymptotes et les coordonnées à l'origine; b) écris $f$ sous la forme $a+\dfrac k{x-h}$; c) esquisse $f$ sur la grille.`,
    S`a) AV $x=-2$, AH $y=2$, $(4,0)$, $(0,-4)$. b) $2-\frac{12}{x+2}$. c) deux branches croissantes. [2, 1, 1.]`,
    grid({ xmin: -10, xmax: 8, ymin: -8, ymax: 12 }, { x: 2, y: 2 })),
  W(3, "hard", 4, S`Le graphique est de la forme $f(x)=\dfrac{ax+b}{cx+d}$. a) Trouve une équation. b) Trouve $f^{-1}$ et explique le lien entre ses asymptotes et celles de $f$. c) Trouve où $f(x)=f^{-1}(x)$ sur la droite $y=x$.`,
    S`a) AV $x=1$, AH $y=-2$, abscisse à l'origine 3 : $f=\frac{-2x+6}{x-1}$. b) $y(x-1)=-2x+6\Rightarrow x(y+2)=y+6$ : $f^{-1}(x)=\frac{x+6}{x+2}$; les asymptotes sont échangées. c) $x(x-1)=-2x+6\Rightarrow x^2+x-6=0$ : $x=2$ ou $x=-3$. [1, 2, 1.]`,
    RG((x) => (-2 * x + 6) / (x - 1), [1], { xmin: -8, xmax: 8, ymin: -10, ymax: 8 }, -2, [P(3, 0), P(0, -6)])),
  W(4, "medium", 4, S`a) Résous $\dfrac{x+2}{x-1}=x-1$ algébriquement. b) Utilise les graphiques fournis pour expliquer ta réponse. c) Résous $\dfrac{x+2}{x-1}\ge0$.`,
    S`a) $x+2=x^2-2x+1\Rightarrow x^2-3x-1=0$ : $x=\frac{3\pm\sqrt{13}}2$. b) ce sont les abscisses des deux points d'intersection. c) $(-\infty,-2]\cup(1,\infty)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 8, ymin: -8, ymax: 8 }, curves: [{ f: (x) => (x + 2) / (x - 1), a: -6, b: 0.996, color: "violet" }, { f: (x) => (x + 2) / (x - 1), a: 1.004, b: 8, color: "violet" }, { f: (x) => x - 1, color: "green" }], step: { x: 1, y: 1 } })),
  W(4, "hard", 4, S`Résous $\dfrac{x^2-4x}{x+2}\le x-2$. a) Écris une seule fraction. b) Fais un tableau de signes. c) Donne la solution en expliquant le rôle de $x=-2$.`,
    S`a) $\frac{x^2-4x-(x-2)(x+2)}{x+2}=\frac{4-4x}{x+2}\le0$. b) valeurs critiques $-2$, $1$ : signes $-,+,-$. c) $x\lt-2$ ou $x\ge1$; $-2$ annule le dénominateur et est exclue. [1, 2, 1.]`,
    grid({ xmin: -8, xmax: 6, ymin: -6, ymax: 6 })),
  W(5, "medium", 4, S`Le graphique représente $A(x)=\dfrac{1000+8x}x$, le coût moyen en dollars pour $x$ articles. a) Trouve $A(125)$. b) Donne et interprète l'asymptote horizontale. c) Combien d'articles donnent un coût moyen de 12 dollars?`,
    S`a) $16$. b) $y=8$ : le coût unitaire pour de très grosses commandes. c) $1000=4x$ : 250 articles. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 500, ymin: 0, ymax: 40 }, curves: [{ f: (x) => (1000 + 8 * x) / x, a: 35, b: 500, color: "violet" }], lines: [{ m: 0, b: 8, color: "red", dash: true }], points: [P(125, 16), P(250, 12)], step: { x: 50, y: 5 } })),
  W(5, "hard", 4, S`Une dose a une concentration $C(t)=\dfrac{15t}{t^2+36}$ mg/L après $t$ h. a) Trouve le taux de variation moyen sur $[6,12]$. b) Quand a-t-on $C\ge1$? c) Utilise le graphique pour décrire ce qui arrive quand $t$ augmente, et explique-le à partir de l'équation.`,
    S`a) $C(6)=1.25$, $C(12)=1$ : $-\frac{0.25}6\approx-0.042$. b) $t^2-15t+36\le0$ : $3\le t\le12$. c) $C\to0$ : le degré du dénominateur est plus élevé, donc le rapport diminue. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 2 }, curves: [{ f: (t) => 15 * t / (t * t + 36), a: 0, b: 30, color: "violet" }, { f: () => 1, color: "green" }], points: [P(3, 1), P(12, 1)], step: { x: 3, y: 0.5 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  // offline checks: KaTeX, no leftover English, every topic is a French lesson title
  const katex = (await import("module")).createRequire(import.meta.url)("katex");
  let bad = 0;
  for (const w of WRITTEN) for (const s of [w.prompt, w.feedback]) {
    for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { bad++; console.log("  FAIL KaTeX:", m[1].slice(0, 50)); } }
    if (/\b(the|and|Find|Solve|Show|which|State|Explain|Sketch|graph of)\b/.test(s.replace(/\$[^$]*\$/g, " "))) { bad++; console.log("  FAIL English left:", s.slice(0, 60)); }
  }
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = CID_FR;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.k))].filter((k) => !lessons.some((l) => l.id === lessonId(3, k)));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} questions à réponse construite; ${todo.length} pas encore dans la banque; ${WRITTEN.reduce((s, r) => s + r.points, 0)} points; ${WRITTEN.filter((w) => w.fig).length} avec figures`);
  for (const t of Object.values(T)) console.log(`  ${t}: ${WRITTEN.filter((w) => w.topic === t).length}`);
  if (missing.length) console.log("leçons pas encore chargées : 3." + missing.join(", 3."));
  if (bad) { console.log(`${bad} PROBLEM(S)`); process.exit(1); }
  if (!APPLY) { console.log("Essai à blanc OK — relancer avec --apply."); process.exit(0); }
  if (missing.length) { console.log("Charge d'abord les leçons."); process.exit(1); }
  for (const w of todo) {
    const key = `${FIG_PREFIX}-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, k, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessonId(3, k) });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
