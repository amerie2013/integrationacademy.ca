// MTH1W-FR chapitre 4 — questions à réponse construite (long_answer) de la banque, pour la partie C des tests imprimés.
// Chaque question est accompagnée d'un plan cartésien (SVG téléversé dans graph-images, clés mth1w-fr-…, étiquettes françaises).
//   node scripts/mth1w-fr-ch4/written.mjs           -> essai à blanc (lecture seule)
//   node scripts/mth1w-fr-ch4/written.mjs --apply   -> téléverse les figures, insère seulement les énoncés absents (CID_FR)
// Les leçons françaises (lessonId(4, k)) doivent être chargées avant --apply (lesson_id).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "./figs4.mjs";
import { CID_FR, lessonId, FIG_PREFIX } from "../mth1w-fr/common.mjs";

// Le written.mjs anglais exécute son bloc principal quand argv[1] se termine par « written.mjs » — on masque argv[1] pendant l'import.
const a1 = process.argv[1]; process.argv[1] = "x";
const EN = await import("../mth1w-ch4/written.mjs");
process.argv[1] = a1;

const T = {
  1: "4.1 Relations", 2: "4.2 Relations linéaires et non linéaires", 3: "4.3 Représenter des relations linéaires et non linéaires",
  4: "4.4 Comparer des droites", 5: "4.5 Tracer des droites particulières", 6: "4.6 Transformations de droites",
  7: "4.7 Déterminer l'équation d'une droite", 8: "4.8 Forme générale et forme fonctionnelle", 9: "4.9 Droites parallèles et perpendiculaires",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], lesson: t, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`Le graphique montre la distance entre Léna et sa maison pendant une promenade. a) Nomme la variable indépendante et la variable dépendante. b) Décris ce qui se passe sur chacun des trois segments. c) Trouve sa vitesse à l'aller et au retour.`,
    String.raw`a) Indépendante : le temps (min); dépendante : la distance de la maison (m). b) 0–4 min : elle s'éloigne à pied jusqu'à 600 m; 4–10 min : elle s'arrête (distance constante); 10–16 min : elle rentre à pied. c) Aller : $600\div4=150$ m/min; retour : $600\div6=100$ m/min. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 18, ymin: 0, ymax: 700 }, segs: [{ pts: [[0, 0], [4, 600], [10, 600], [16, 0]] }], step: { x: 2, y: 100 }, xlabel: "temps (min)", ylabel: "distance (m)" })),
  W(2, "hard", 4, String.raw`Le graphique montre $y=3x+2$ (bleu) et $y=x^2+2$ (rouge). a) Construis une table de valeurs pour les deux pour $x=0,1,2,3,4$ et trouve les premières différences. b) Utilise les différences pour décider quelle relation est linéaire. c) Trouve le taux de variation moyen de la courbe de $x=0$ à $x=3$ et compare-le à la pente de la droite. Explique ce que cette comparaison signifie sur le graphique.`,
    String.raw`a) Droite : $2,5,8,11,14$ (différences $3,3,3,3$). Courbe : $2,3,6,11,18$ (différences $1,3,5,7$). b) La droite est linéaire : premières différences constantes; la courbe ne l'est pas. c) $(11-2)\div3=3$, égal à la pente de la droite : les deux passent par $(0,2)$ et $(3,11)$, donc le segment qui relie ces points de la courbe est sur la droite. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 20 }, lines: [{ m: 3, b: 2, color: "blue" }], curves: [{ f: (x) => x * x + 2, color: "red" }], points: [{ x: 0, y: 2 }, { x: 3, y: 11 }], step: { x: 1, y: 2 } })),
  W(3, "medium", 4, String.raw`Le graphique montre le coût $C$ (dollars) de la location d'une voiture pour une journée en parcourant $d$ km. a) Utilise les points indiqués pour écrire l'équation. b) Construis une table de valeurs pour $d=0,100,200,300$. c) Décris la relation en mots, en précisant le sens de chaque nombre de ton équation.`,
    String.raw`a) $m=(95-45)\div200=0.25$; $C=0.25d+45$. b) $45, 70, 95, 120$. c) Des frais fixes de $45$ dollars plus $0.25$ dollar (25 cents) par km; le coût augmente de 25 dollars par tranche de 100 km. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 320, ymin: 0, ymax: 140 }, lines: [{ m: 0.25, b: 45 }], points: [{ x: 0, y: 45, label: "(0, 45)" }, { x: 200, y: 95, label: "(200, 95)" }], step: { x: 40, y: 20 }, xlabel: "d (km)", ylabel: "C ($)" })),
  W(4, "hard", 4, String.raw`Le centre A demande $C=0.5n+20$ et le centre B demande $C=1.25n+8$ dollars pour $n$ cours (graphique ci-joint). a) Quel forfait a la plus grande valeur initiale, et lequel a le plus grand taux de variation? b) Trouve le point d'intersection par l'algèbre et donne sa signification. c) Recommande un forfait pour 10 cours et pour 25 cours, avec les coûts.`,
    String.raw`a) A a la plus grande valeur initiale (20 contre 8); B a le plus grand taux (1.25 contre 0.50 par cours). b) $0.5n+20=1.25n+8\Rightarrow0.75n=12\Rightarrow n=16$, $C=28$ : les deux coûtent $28$ dollars pour 16 cours. c) 10 cours : A $25$, B $20.50$ → B. 25 cours : A $32.50$, B $39.25$ → A. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 50 }, lines: [{ m: 0.5, b: 20, color: "blue", label: "A", lx: 26 }, { m: 1.25, b: 8, color: "red", label: "B", lx: 24 }], step: { x: 5, y: 10 }, xlabel: "n", ylabel: "C" })),
  W(5, "medium", 4, String.raw`Le graphique montre trois droites. a) Écris l'équation de chaque droite. b) Trouve les trois sommets du triangle qu'elles forment. c) Trouve l'aire du triangle.`,
    String.raw`a) Bleue : $y=x+2$; rouge : $x=4$ (verticale); verte : $y=-3$ (horizontale). b) $(4,6)$, $(4,-3)$, $(-5,-3)$. c) Triangle rectangle dont les côtés de l'angle droit mesurent $9$ et $9$ : $\tfrac12\times9\times9=40.5$ unités carrées. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, lines: [{ m: 1, b: 2, color: "blue" }, { m: 0, b: -3, color: "green" }], vlines: [{ x: 4, color: "red" }] })),
  W(6, "hard", 4, String.raw`Les droites A et B sont illustrées. a) Écris l'équation de chaque droite. b) Décris une suite de transformations qui applique A sur B. c) Trouve, par l'algèbre, où les droites se rencontrent.`,
    String.raw`a) A : $y=2x-3$; B : $y=-2x+5$. b) Réflexion de A par rapport à l'axe des y ($y=-2x-3$), puis translation de $8$ unités vers le haut. (Toute autre suite correcte reçoit tous les points.) c) $2x-3=-2x+5\Rightarrow x=2$, $y=1$ : $(2,1)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: -3, color: "blue", label: "A", lx: 3.2 }, { m: -2, b: 5, color: "red", label: "B", lx: 3.6 }] })),
  W(7, "medium", 4, String.raw`Une piscine se vide à un rythme constant. Le graphique montre le volume $V$ (L) après $t$ minutes. a) Trouve le taux de variation, avec ses unités. b) Écris l'équation de la droite. c) Quand la piscine sera-t-elle vide? d) Que signifient la pente et l'ordonnée à l'origine (sur l'axe des V)?`,
    String.raw`a) $(1350-2100)\div(8-3)=-150$ L/min. b) $2100=-150(3)+b\Rightarrow b=2550$ : $V=-150t+2550$. c) $0=-150t+2550\Rightarrow t=17$ min. d) Elle perd 150 L chaque minute; elle contenait 2550 L au départ. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 2800 }, lines: [{ m: -150, b: 2550 }], points: [{ x: 3, y: 2100, label: "(3, 2100)" }, { x: 8, y: 1350, label: "(8, 1350)" }], step: { x: 2, y: 400 }, xlabel: "t (min)", ylabel: "V (L)" })),
  W(8, "medium", 3, String.raw`a) Utilise les coordonnées à l'origine indiquées sur le graphique pour écrire l'équation de la droite sous la forme générale. b) Réécris-la sous la forme fonctionnelle. c) Quelle forme était la plus rapide pour trouver les coordonnées à l'origine, et laquelle pour la pente? Explique.`,
    String.raw`a) Coordonnées à l'origine $(4,0)$ et $(0,-3)$ : pente $\tfrac34$, $y=\tfrac34x-3$; ×4 : $3x-4y-12=0$. b) $y=0.75x-3$. c) Forme générale : on pose directement $x=0$ ou $y=0$; la forme fonctionnelle montre la pente, $m$. [1, 1, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 0.75, b: -3 }], points: [{ x: 4, y: 0 }, { x: 0, y: -3 }] })),
  W(9, "hard", 4, String.raw`Le triangle ABC a pour sommets $A(-4,-1)$, $B(2,2)$ et $C(4,-2)$. a) Montre que le triangle a un angle droit, et indique où. b) Écris l'équation de la droite passant par C parallèle à AB. c) Écris l'équation de la hauteur issue de B vers le côté AC.`,
    String.raw`a) $m_{AB}=\tfrac36=\tfrac12$, $m_{BC}=\tfrac{-4}{2}=-2$; produit $-1$, donc $\angle B=90^\circ$. b) $y=\tfrac12x+b$, $-2=2+b$ : $y=\tfrac12x-4$. c) $m_{AC}=\tfrac{-1}{8}$, donc la hauteur a une pente de $8$ : $2=16+b$, $y=8x-14$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[-4, -1], [2, 2], [4, -2], [-4, -1]] }], points: [{ x: -4, y: -1, label: "A" }, { x: 2, y: 2, label: "B" }, { x: 4, y: -2, label: "C" }] })),
  W(9, "hard", 4, String.raw`Deux villages sont situés en $A(-2,5)$ et $B(6,1)$ sur un quadrillage de carte (km). Un château d'eau doit être à la même distance des deux villages. a) Trouve le point milieu de AB. b) Écris l'équation de la médiatrice de AB. c) Montre que le point $(5,9)$ est sur la médiatrice et qu'il est à la même distance de A et de B.`,
    String.raw`a) $(2,3)$. b) $m_{AB}=\tfrac{-4}{8}=-\tfrac12$, donc pente $2$ : $3=4+b$, $y=2x-1$. c) $2(5)-1=9$ ✓; $d_A=\sqrt{7^2+4^2}=\sqrt{65}$, $d_B=\sqrt{1^2+8^2}=\sqrt{65}$ ✓. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 8, ymin: -2, ymax: 10 }, segs: [{ pts: [[-2, 5], [6, 1]] }], points: [{ x: -2, y: 5, label: "A" }, { x: 6, y: 1, label: "B" }], step: { x: 1, y: 1 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop()) && /mth1w-fr-ch4/.test(process.argv[1].replace(/\\/g, "/"))) {
  let bad = 0;
  const fail = (m) => { bad++; console.log("  FAIL:", m); };
  if (WRITTEN.length !== EN.WRITTEN.length) fail(`${WRITTEN.length} written questions, English has ${EN.WRITTEN.length}`);
  WRITTEN.forEach((w, i) => {
    const e = EN.WRITTEN[i];
    if (!e) return;
    if (w.difficulty !== e.difficulty || w.points !== e.points || !!w.fig !== !!e.fig || w.lesson !== Number(e.topic.split(" ")[0].split(".")[1])) fail(`Q${i + 1}: difficulty/points/figure/topic differ from English`);
    for (const s of [w.prompt, w.feedback]) if ((s.match(/\$/g) || []).length % 2 || /\bundefined\b/.test(s)) fail(`Q${i + 1}: bad text "${s.slice(0, 50)}"`);
  });
  // le sujet doit être identique au titre de la leçon française
  for (const k of new Set(WRITTEN.map((w) => w.lesson))) {
    const L = await import(new URL(`./l4_${k}.mjs`, import.meta.url).href);
    if (L.TITLE !== T[k]) fail(`topic "${T[k]}" ≠ lesson title "${L.TITLE}"`);
  }
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const course = (await db.from("courses").select("id, code").eq("id", CID_FR).single()).data;
  if (!course || course.code !== "MTH1W-FR") throw new Error(`course ${CID_FR} is not MTH1W-FR`);
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", CID_FR).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions (English ${EN.WRITTEN.length}); ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks (English ${EN.WRITTEN.reduce((s, r) => s + r.points, 0)}); ${WRITTEN.filter((w) => w.fig).length} with figures`);
  if (bad) { console.log(`${bad} PROBLEM(S)`); process.exit(1); }
  if (!APPLY) { console.log("Essai à blanc — relancer avec --apply."); process.exit(0); }
  for (const w of todo) {
    const key = `${FIG_PREFIX}-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, lesson, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: CID_FR, lesson_id: lessonId(4, lesson) });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
