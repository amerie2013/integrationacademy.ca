// MTH1W-FR chapitre 5 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mth1w-ch5/written.mjs. Chaque question a une figure (SVG téléversé dans graph-images, clés mth1w-fr-…).
//   node scripts/mth1w-fr-ch5/written.mjs           -> essai à blanc (compare aussi avec l'anglais)
//   node scripts/mth1w-fr-ch5/written.mjs --apply   -> téléverse les figures et insère les lignes absentes (repérées par l'énoncé)
// N'exécuter --apply qu'après le chargement des leçons françaises du chapitre 5 (lesson_id = lessonId(5, k)).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { figDoc, rightTri, rect, prism, cylinder, cone, pyramid } from "../mth1w-ch5/figs5.mjs";
import { CID_FR, FIG_PREFIX, lessonId } from "../mth1w-fr/common.mjs";
import { TITLE as T1 } from "./l5_1.mjs";
import { TITLE as T2 } from "./l5_2.mjs";
import { TITLE as T3 } from "./l5_3.mjs";
import { TITLE as T4 } from "./l5_4.mjs";
import { TITLE as T5 } from "./l5_5.mjs";
import { TITLE as T6 } from "./l5_6.mjs";
import { TITLE as T7 } from "./l5_7.mjs";
import { TITLE as T8 } from "./l5_8.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6, 7: T7, 8: T8 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig, lesson_id: lessonId(5, t) });
const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
const arc = (cx, cy, r, a0, a1, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });
const doc = (items, w = 300) => figDoc({ w, items });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`Le schéma montre la méthode d'Ératosthène. À midi, le Soleil est directement au-dessus de S, tandis qu'en A, $800$ km plus au nord, l'ombre d'un bâton vertical montre que le Soleil est à $7.2^\circ$ de la verticale. (a) Explique pourquoi l'angle au centre de la Terre mesure aussi $7.2^\circ$. (b) Estime la circonférence de la Terre. (c) Estime son rayon.`,
    String.raw`(a) Les rayons du Soleil sont parallèles, donc l'angle de l'ombre et l'angle au centre sont des angles alternes-internes. (b) $360\div7.2=50$; $50\times800=40\,000$ km. (c) $r=40\,000\div(2\pi)\approx6366$ km. [1, 2, 1.]`,
    doc([{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { seg: [[0, 0], P(90)], color: "blue" }, { seg: [[0, 0], P(110)], color: "blue" }, { arc: [P(90), [0, 0], P(110)], label: "7.2°", r: 0.25 }, { text: "S", at: P(90, 1.12), bold: true }, { text: "A", at: P(110, 1.12), bold: true }, { seg: [[-0.2, 1.55], [-0.2, 1.15]], color: "amber" }, { seg: [[0.2, 1.55], [0.2, 1.15]], color: "amber" }, { text: "rayons du Soleil", at: [0.75, 1.45], color: "amber", size: 12 }], 240)),
  W(1, "hard", 4, String.raw`Un hexagone régulier est tracé à l'intérieur d'un cercle de diamètre $1$ et un autre autour de celui-ci (voir le schéma). L'hexagone intérieur a des côtés de $0.5$ et l'hexagone extérieur, des côtés de $0.5774$. (a) Utilise les périmètres pour écrire des bornes de $\pi$. (b) Explique pourquoi la circonférence du cercle doit se trouver entre les deux périmètres. (c) Décris comment Archimède a amélioré ces bornes.`,
    String.raw`(a) $3<\pi<3.464$. (b) Le cercle entoure l'hexagone intérieur et se trouve à l'intérieur de l'hexagone extérieur; une courbe située entre deux figures convexes a une longueur comprise entre leurs périmètres. (c) Il a doublé le nombre de côtés à 12, 24, 48 puis 96, ce qui donne $3\frac{10}{71}<\pi<3\frac17$. [2, 1, 1.]`,
    doc([{ circle: [0, 0, 1], color: "ink" }, { poly: [0, 1, 2, 3, 4, 5].map((k) => P(60 * k)), fill: "none", color: "blue" }, { poly: [0, 1, 2, 3, 4, 5].map((k) => P(30 + 60 * k, 1 / Math.cos(Math.PI / 6))), fill: "none", color: "amber" }], 220)),
  W(2, "medium", 4, String.raw`Dans le schéma, $O$ est le centre, $AB$ est un diamètre et $\angle BOC=70^\circ$. (a) Trouve $\angle BAC$. (b) Trouve $\angle ACB$ et explique. (c) Trouve $\angle ABC$. Nomme la propriété utilisée à chaque étape.`,
    String.raw`(a) $35^\circ$ : l'angle inscrit est la moitié de l'angle au centre qui intercepte l'arc $BC$. (b) $90^\circ$ : angle inscrit dans un demi-cercle. (c) $180-90-35=55^\circ$ : somme des angles d'un triangle. [1, 1, 2.]`,
    doc([{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { text: "O", at: [0, -0.15], bold: true }, { seg: [P(180), P(0)], color: "blue" }, { seg: [[0, 0], P(70)], color: "blue" }, { seg: [P(180), P(70)], color: "red" }, { seg: [P(0), P(70)], color: "red" }, { arc: [P(0), [0, 0], P(70)], label: "70°", r: 0.22 }, { text: "A", at: P(180, 1.13), bold: true }, { text: "B", at: P(0, 1.13), bold: true }, { text: "C", at: P(70, 1.13), bold: true }], 240)),
  W(2, "hard", 4, String.raw`On crée un logo en inscrivant un octogone régulier dans un cercle et en reliant le centre à deux sommets voisins $A$ et $B$. (a) Trouve $\angle AOB$. (b) Trouve $\angle OAB$. (c) Utilise (b) pour trouver chaque angle intérieur de l'octogone et vérifie avec $(n-2)\times180^\circ$. (d) Trouve l'angle inscrit en tout autre sommet $P$ qui intercepte le côté $AB$.`,
    String.raw`(a) $45^\circ$. (b) $(180-45)\div2=67.5^\circ$. (c) $2\times67.5=135^\circ$; $1080\div8=135^\circ$ ✓. (d) $22.5^\circ$. [1, 1, 1, 1.]`,
    doc([{ circle: [0, 0, 1], color: "gray" }, { poly: [0, 1, 2, 3, 4, 5, 6, 7].map((k) => P(90 + 45 * k)), fill: "none", color: "violet" }, { poly: [[0, 0], P(270), P(315)], fill: "#ede9fe", color: "violet" }, { text: "O", at: [-0.12, 0.08], bold: true }, { text: "A", at: P(270, 1.14), bold: true }, { text: "B", at: P(315, 1.14), bold: true }], 230)),
  W(3, "medium", 4, String.raw`Un patio mesure $16$ pi sur $12$ pi (voir le schéma). Les dalles de patio sont vendues au mètre carré. (a) Convertis les dimensions en mètres. (b) Trouve l'aire en m$^2$. (c) Les dalles coûtent $38$ dollars le m$^2$ et tu en achètes $10\%$ de plus pour les coupes. Trouve le coût.`,
    String.raw`(a) $16\times0.3048=4.877$ m; $12\times0.3048=3.658$ m. (b) $\approx17.84$ m$^2$. (c) $17.84\times1.1\times38\approx746$ dollars. [1, 1, 2.]`,
    doc(rect(16, 12, { lw: "16 pi", lh: "12 pi" }), 240)),
  W(3, "hard", 4, String.raw`Le réservoir illustré mesure $1.2$ m de long, $50$ cm de large et $60$ cm de haut. (a) Trouve sa capacité en litres. (b) Une pompe le remplit à raison de $9$ L/min. Combien de temps faut-il pour le remplir ? (c) Combien de gallons américains contient-il ($1$ gal $\approx3.785$ L) ?`,
    String.raw`(a) $120\times50\times60=360\,000$ cm$^3=360$ L. (b) $40$ min. (c) $\approx95.1$ gal. [2, 1, 1.]`,
    doc(prism(12, 5, 6, { ll: "1.2 m", lw: "50 cm", lh: "60 cm" }), 260)),
  W(4, "medium", 4, String.raw`Une échelle de $6.5$ m est appuyée contre un mur, son pied étant à $2.5$ m du mur. (a) À quelle hauteur atteint-elle le mur ? (b) Le pied glisse jusqu'à $3.9$ m du mur. De combien le haut de l'échelle descend-il ? (c) Explique pourquoi le haut se déplace moins que le pied.`,
    String.raw`(a) $\sqrt{42.25-6.25}=6$ m. (b) $\sqrt{42.25-15.21}=5.2$ m; il descend de $0.8$ m. (c) La longueur de l'échelle est fixe; près du haut du mur, la hauteur change lentement pendant que le pied se déplace (les réponses peuvent varier). [1, 2, 1.]`,
    doc(rightTri(2.5, 6, { la: "2.5 m", lb: "h", lc: "6.5 m", fill: "amber" }), 200)),
  W(4, "hard", 5, String.raw`Une pièce mesure $5$ m de long, $4$ m de large et $3$ m de haut. Une araignée, au coin $A$ du plancher, veut atteindre le coin opposé $G$ du plafond. (a) Trouve la distance en ligne droite $AG$. (b) L'araignée doit marcher sur les surfaces. Trouve la longueur du trajet qui traverse le plancher jusqu'au coin opposé, puis monte tout droit. (c) Déplie les murs pour trouver le trajet de marche le plus court, et compare.`,
    String.raw`(a) $\sqrt{25+16+9}=\sqrt{50}\approx7.07$ m. (b) $\sqrt{41}+3\approx9.40$ m. (c) En dépliant le plancher et le mur du fond : $\sqrt{5^2+(4+3)^2}=\sqrt{74}\approx8.60$ m (les autres dépliages donnent $\sqrt{80}$ et $\sqrt{90}$); c'est plus court que (b). [1, 1, 3.]`,
    doc([...prism(5, 4, 3, { ll: "5 m", lw: "4 m", lh: "3 m" }), { text: "A", at: [-0.4, -0.3], bold: true }, { text: "G", at: [5 + 4 * 0.45 + 0.35, 3 + 4 * 0.32 + 0.2], bold: true }], 260)),
  W(5, "hard", 5, String.raw`Un agriculteur a $240$ m de clôture pour aménager un champ rectangulaire le long d'une rivière rectiligne (pas de clôture du côté de la rivière). (a) Écris l'aire $A$ en fonction de la largeur $w$. (b) Dresse une table pour $w=40, 50, 60, 70, 80$. (c) Indique les dimensions qui donnent la plus grande aire. (d) Compare avec le meilleur champ si les quatre côtés étaient clôturés.`,
    String.raw`(a) $A=w(240-2w)$. (b) $6400$, $7000$, $7200$, $7000$, $6400$. (c) $60$ m sur $120$ m : $7200$ m$^2$. (d) Carré de $60\times60=3600$ m$^2$ : la rivière double l'aire. [1, 1, 1, 2.]`,
    doc([...rect(12, 6, { lw: "", lh: "w", fill: "green" }), { seg: [[-1, 6], [13, 6]], color: "blue", width: 5 }, { text: "rivière", at: [6, 6.8], color: "blue", bold: true }], 260)),
  W(6, "medium", 4, String.raw`Une fenêtre est un rectangle de $90$ cm sur $120$ cm surmonté d'un demi-cercle (voir le schéma). (a) Trouve l'aire de la vitre. (b) Trouve la longueur de moulure qui fait le tour extérieur. (c) On fabrique une fenêtre plus grande en multipliant chaque longueur par $1.5$. Trouve l'aire de sa vitre et sa moulure sans refaire le calcul.`,
    String.raw`(a) $10\,800+\tfrac12\pi(45)^2\approx13\,981$ cm$^2$. (b) $90+2(120)+45\pi\approx471.4$ cm. (c) Aire $\times2.25\approx31\,457$ cm$^2$; moulure $\times1.5\approx707.1$ cm. [1, 1, 2.]`,
    doc([{ poly: [[0, 0], [9, 0], [9, 12], ...arc(4.5, 12, 4.5, 0, 180).slice(1, -1), [0, 12]], fill: "blue", color: "blue" }, { text: "90 cm", at: [4.5, -1], bold: true, color: "blue" }, { text: "120 cm", at: [9.5, 6], bold: true, color: "blue", anchor: "start" }], 180)),
  W(7, "medium", 4, String.raw`Un silo cylindrique (rayon $3$ m, hauteur $10$ m) a un toit conique de $2$ m de hauteur. (a) Trouve le volume du cylindre. (b) Trouve le volume du cône. (c) Trouve la capacité totale en litres.`,
    String.raw`(a) $90\pi\approx282.7$ m$^3$. (b) $\tfrac13\pi(9)(2)=6\pi\approx18.8$ m$^3$. (c) $96\pi\approx301.6$ m$^3\approx301\,600$ L. [1, 1, 2.]`,
    doc([...cylinder(3, 10, { lr: "", lh: "10 m" }), ...cone(3, 2, { lr: "r = 3 m", lh: "2 m" }).map((it) => up(it, 10))], 170)),
  W(8, "hard", 5, String.raw`Une pyramide à base carrée a une base de $10$ cm et une hauteur de $12$ cm. (a) Trouve l'apothème. (b) Trouve l'aire totale. (c) Trouve le volume. (d) Une pyramide semblable a toutes ses longueurs doublées. Trouve son aire totale et son volume, et explique les facteurs.`,
    String.raw`(a) $\sqrt{144+25}=13$ cm. (b) $100+260=360$ cm$^2$. (c) $400$ cm$^3$. (d) $1440$ cm$^2$ ($\times4=2^2$) et $3200$ cm$^3$ ($\times8=2^3$). [1, 1, 1, 2.]`,
    doc(pyramid(10, 12, { lb: "10 cm", lh: "12 cm", ls: "s" }), 220)),
];

function up(it, dy) {
  const m = (p) => [p[0], p[1] + dy];
  const o = { ...it };
  if (o.poly) o.poly = o.poly.map(m); if (o.seg) o.seg = o.seg.map(m); if (o.dot) o.dot = m(o.dot); if (o.at) o.at = m(o.at);
  if (o.circle) o.circle = [o.circle[0], o.circle[1] + dy, o.circle[2]]; if (o.ellipse) o.ellipse = [o.ellipse[0], o.ellipse[1] + dy, o.ellipse[2], o.ellipse[3]];
  if (o.right) o.right = o.right.map(m); if (o.dim) o.dim = o.dim.map(m); if (o.arc) o.arc = o.arc.map(m);
  return o;
}

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  // Le fichier anglais a sa propre garde qui ne compare que le nom de base (« written.mjs ») : l'importer d'ici
  // lancerait SON essai / --apply sur le cours anglais. On cache argv[1] pendant l'importation.
  const argv1 = process.argv[1];
  process.argv[1] = "imported-for-comparison";
  const { WRITTEN: EN } = await import("../mth1w-ch5/written.mjs");
  process.argv[1] = argv1;
  let bad = 0;
  if (EN.length !== WRITTEN.length) { bad++; console.log(`FAIL: ${WRITTEN.length} questions, l'anglais en a ${EN.length}`); }
  WRITTEN.forEach((w, i) => { const e = EN[i]; if (!e || e.points !== w.points || e.difficulty !== w.difficulty || !!e.fig !== !!w.fig || e.topic.split(" ")[0] !== w.topic.split(" ")[0]) { bad++; console.log(`FAIL: question ${i + 1} différente de l'anglais (points/difficulté/figure/sujet)`); } });
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
  console.log(`${WRITTEN.length} questions écrites (EN ${EN.length}); ${todo.length} pas encore dans la banque; ${WRITTEN.reduce((s, r) => s + r.points, 0)} points; ${WRITTEN.filter((w) => w.fig).length} avec figure`);
  if (missing.length) console.log("leçons pas encore chargées :", missing);
  if (!APPLY) { console.log("Essai à blanc — utilise --apply."); process.exit(0); }
  if (missing.length) { console.log("Charge d'abord les leçons."); process.exit(1); }
  for (const w of todo) {
    const key = `${FIG_PREFIX}-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const upl = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (upl.error) throw upl.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid });
    if (r.error) throw r.error;
  }
  console.log(`${todo.length} insérées`);
}
