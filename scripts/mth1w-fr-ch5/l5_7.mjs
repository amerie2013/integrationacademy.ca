// MTH1W-FR 5.7 — Le volume (format autonome) : prismes, cylindres, pyramides, cônes, sphères, solides composés, k³
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, prism, triPrism, cylinder, cone, pyramid, sphere } from "../mth1w-ch5/figs5.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "5.7 Le volume";
export const ID = lessonId(5, 7);

const shift = (items, dx, dy = 0) => items.map((it) => {
  const m = (p) => [p[0] + dx, p[1] + dy];
  const o = { ...it };
  if (o.poly) o.poly = o.poly.map(m); if (o.seg) o.seg = o.seg.map(m); if (o.dot) o.dot = m(o.dot); if (o.at) o.at = m(o.at);
  if (o.circle) o.circle = [o.circle[0] + dx, o.circle[1] + dy, o.circle[2]]; if (o.ellipse) o.ellipse = [o.ellipse[0] + dx, o.ellipse[1] + dy, o.ellipse[2], o.ellipse[3]];
  if (o.right) o.right = o.right.map(m); if (o.dim) o.dim = o.dim.map(m); if (o.arc) o.arc = o.arc.map(m);
  return o;
});

export const blocks = () => [
  intro({
    icon: "🧊",
    title: "Le volume",
    overview: String.raw`Le volume est l'espace qu'occupe un solide — le béton d'une fondation, l'eau d'une piscine, les céréales d'une boîte. Une seule idée couvre tous les prismes et tous les cylindres : l'aire de la base multipliée par la hauteur. Les pyramides et les cônes en contiennent exactement le tiers, et la sphère a sa propre formule. Tu utiliseras ces formules, tu les combineras pour des solides composés et tu verras pourquoi doubler chaque longueur rend le volume huit fois plus grand.`,
    goals: [
      "trouver le volume de tout prisme ou cylindre comme (aire de la base) × hauteur;",
      "trouver le volume des pyramides et des cônes comme le tiers du prisme ou du cylindre correspondant;",
      "trouver le volume d'une sphère;",
      "trouver le volume de solides composés et le convertir en capacité (mL, L);",
      "expliquer pourquoi multiplier chaque longueur par \\(k\\) multiplie le volume par \\(k^3\\).",
    ],
    curriculum: "E1.4 (effet de la modification des dimensions sur le volume), E1.6 (résoudre des problèmes portant sur le volume de prismes, de pyramides, de cylindres, de cônes et de sphères)",
    prior: [
      [String.raw`Aire d'un cercle de rayon \(3\) ?`, String.raw`\(9\pi\approx28.3\).`],
      [String.raw`\(\tfrac13\times27=?\)`, String.raw`\(9\).`],
      [String.raw`Combien de mL y a-t-il dans \(1\ \text{cm}^3\) ?`, String.raw`\(1\) mL.`],
    ],
    words: [
      ["Volume", "nombre de cubes-unités qui remplissent un solide", "\\(\\text{cm}^3\\)"],
      ["Prisme", "solide ayant deux bases identiques et parallèles reliées par des rectangles", "prisme à base triangulaire"],
      ["Cylindre", "solide semblable à un prisme, à bases circulaires", "une boîte de conserve"],
      ["Pyramide / cône", "solide qui se rétrécit d'une base jusqu'à un seul point (l'apex)", "\\(\\tfrac13Bh\\)"],
      ["Sphère", "tous les points situés à une distance r d'un centre", "\\(\\tfrac43\\pi r^3\\)"],
    ],
  }),

  section("📌 Prismes et cylindres : base × hauteur", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;">
  ${fig({ w: 200, items: prism(5, 3, 4, { ll: "l", lw: "w", lh: "h" }) }, "V = lwh")}
  ${fig({ w: 200, items: triPrism(4, 3, 6, { lb: "b", lt: "t", lL: "L" }) }, "V = (½bt) × L")}
  ${fig({ w: 150, items: cylinder(2, 5, { lr: "r", lh: "h" }) }, "V = πr²h")}
  </div>
  ${keyIdea(String.raw`Pour tout prisme et tout cylindre : \(V=(\text{aire de la base})\times(\text{hauteur})\). Empile des couches identiques ayant la forme de la base, d'une unité d'épaisseur, jusqu'à la hauteur. La « hauteur » est la distance entre les deux bases — pour un prisme couché, elle peut être horizontale.`)}`),

  section("📌 Pyramides, cônes et sphères", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;">
  ${fig({ w: 190, items: pyramid(4, 5, { lb: "b", lh: "h" }) }, "V = ⅓ b²h")}
  ${fig({ w: 160, items: cone(2, 5, { lr: "r", lh: "h" }) }, "V = ⅓ πr²h")}
  ${fig({ w: 160, items: sphere(2, { lr: "r" }) }, "V = ⁴⁄₃ πr³")}
  </div>
  ${keyIdea(String.raw`Une pyramide ou un cône contient exactement \(\tfrac13\) du prisme ou du cylindre de même base et de même hauteur : \(V=\tfrac13(\text{aire de la base})h\). Remplis un cône d'eau trois fois pour remplir le cylindre correspondant. Une sphère contient \(\tfrac23\) du cylindre qui l'entoure tout juste : \(\tfrac23\pi r^2(2r)=\tfrac43\pi r^3\).`)}
  ${table(["Solide", "Volume"], [["prisme à base rectangulaire", "\\(V=lwh\\)"], ["tout prisme", "\\(V=Bh\\) (B = aire de la base)"], ["cylindre", "\\(V=\\pi r^2h\\)"], ["pyramide", "\\(V=\\tfrac13Bh\\)"], ["cône", "\\(V=\\tfrac13\\pi r^2h\\)"], ["sphère", "\\(V=\\tfrac43\\pi r^3\\)"]])}`),

  widget("solidVolume", { init: "cone" }),

  section("📌 Agrandissement : le volume est multiplié par k³", String.raw`
  <p>Double chaque arête d'un cube de \(1\times1\times1\) : il devient \(2\times2\times2\) et contient \(8\) cubes initiaux.</p>
  ${fig({ w: 300, items: [...prism(1, 1, 1, { ll: "1", lw: "", lh: "" }), ...shift(prism(2, 2, 2, { ll: "2", lw: "", lh: "" }), 2.2)] }, "k = 2 : volume × 2³ = 8.")}
  ${keyIdea(String.raw`Multiplier chaque longueur par \(k\) multiplie le volume par \(k^3\). Modifier une seule dimension (par exemple la hauteur) selon un facteur multiplie le volume par ce facteur une seule fois.`)}
  ${watchOut([
    "Utilise le rayon : si on te donne le diamètre, divise-le d'abord par deux.",
    "La hauteur d'une pyramide ou d'un cône est perpendiculaire à la base — ce n'est pas l'apothème.",
    "Cônes et pyramides : n'oublie pas le ⅓.",
    "Les unités de volume sont au cube : cm³, m³. 1 cm³ = 1 mL.",
  ])}`),

  examples([
    ["Une tente (prisme à base triangulaire)", String.raw`Une tente est un prisme à base triangulaire. Son extrémité triangulaire a une base de \(3\) m et une hauteur de \(2\) m, et la tente mesure \(4\) m de long. Trouve le volume d'air à l'intérieur.`,
      [String.raw`<b>Formule pour tout prisme.</b> \[V=(\text{aire de la base})\times(\text{longueur})\] La base est la figure qui se répète le long du prisme : ici, le triangle.`,
        String.raw`<b>Aire de la base :</b> \(A=\tfrac12bh=\tfrac12(3)(2)=3\ \text{m}^2\).`,
        String.raw`<b>Volume :</b> \(V=3\times4=12\ \text{m}^3\).`,
        String.raw`<b>Vérification.</b> La tente est la moitié d'une boîte de \(3\times2\times4\) : \(\tfrac12(24)=12\) ✓.`],
      String.raw`\(12\ \text{m}^3\)`,
      fig({ w: 260, items: triPrism(3, 2, 4, { lb: "3 m", lt: "2 m", lL: "4 m", ax: 1.5 }) })],
    ["Une boîte de soupe (cylindre)", String.raw`Une boîte de conserve a un rayon de \(3.5\) cm et une hauteur de \(11\) cm. Combien de millilitres contient-elle ?`,
      [String.raw`<b>Formule.</b> Un cylindre est un prisme à base circulaire : \[V=\pi r^2h\]`,
        String.raw`<b>Aire de la base :</b> \(\pi(3.5)^2=12.25\pi\ \text{cm}^2\).`,
        String.raw`<b>Volume :</b> \(12.25\pi\times11=134.75\pi\approx423.3\ \text{cm}^3\).`,
        String.raw`<b>Capacité.</b> \(1\ \text{cm}^3=1\) mL, donc la boîte contient environ \(423\) mL.`],
      String.raw`environ \(423\) mL`,
      fig({ w: 150, items: cylinder(3.5, 11, { lr: "3.5 cm", lh: "11 cm" }) })],
    ["La Grande Pyramide", String.raw`La Grande Pyramide de Gizeh avait une base carrée d'environ \(230\) m de côté et une hauteur d'environ \(146\) m. Estime son volume.`,
      [String.raw`<b>Formule.</b> Une pyramide est le tiers du prisme de même base et de même hauteur : \[V=\tfrac13(\text{aire de la base})(h)\]`,
        String.raw`<b>Aire de la base</b> (un carré) : \(230^2=52\,900\ \text{m}^2\).`,
        String.raw`<b>Multiplier par la hauteur :</b> \(52\,900\times146=7\,723\,400\).`,
        String.raw`<b>Prendre le tiers :</b> \(7\,723\,400\div3\approx2\,574\,467\ \text{m}^3\).`],
      String.raw`environ \(2.6\) millions de \(\text{m}^3\)`,
      fig({ w: 240, items: pyramid(10, 6.3, { lb: "230 m", lh: "146 m" }) })],
    ["Cône ou cylindre", String.raw`Un gobelet conique en papier a un rayon de \(4\) cm et une hauteur de \(9\) cm. Un verre cylindrique a le même rayon et la même hauteur. Combien de gobelets remplissent le verre ?`,
      [String.raw`<b>Formules.</b> \[V_{\text{cylindre}}=\pi r^2h,\qquad V_{\text{cône}}=\tfrac13\pi r^2h\]`,
        String.raw`<b>Cône :</b> \(\tfrac13\pi(4)^2(9)=\tfrac13\pi(16)(9)=48\pi\approx150.8\ \text{cm}^3\).`,
        String.raw`<b>Cylindre :</b> \(\pi(4)^2(9)=144\pi\approx452.4\ \text{cm}^3\).`,
        String.raw`<b>Comparer :</b> \(144\pi\div48\pi=3\).`,
        String.raw`<b>Pourquoi exactement 3 ?</b> La formule du cône est celle du cylindre multipliée par \(\tfrac13\), donc tout cône contient exactement le tiers du cylindre correspondant.`],
      "exactement 3 gobelets",
      fig({ w: 260, items: [...cylinder(4, 9, { lr: "4 cm", lh: "9 cm" }), ...shift(cone(4, 9, { lr: "4 cm", lh: "9 cm" }), 12)] })],
    ["Solide composé : un cornet de crème glacée", String.raw`Un cône de rayon \(3\) cm et de hauteur \(12\) cm est rempli de crème glacée et surmonté d'une demi-sphère de même rayon. Trouve le volume total de crème glacée.`,
      [String.raw`<b>Plan.</b> Solide composé \(=\) cône \(+\) demi-sphère (la moitié d'une sphère).`,
        String.raw`<b>Cône :</b> \(V=\tfrac13\pi r^2h=\tfrac13\pi(3)^2(12)=\tfrac13\pi(9)(12)=36\pi\).`,
        String.raw`<b>Demi-sphère.</b> Sphère : \(V=\tfrac43\pi r^3\); la moitié : \(\tfrac12\cdot\tfrac43\pi(3)^3=\tfrac23\pi(27)=18\pi\).`,
        String.raw`<b>Total :</b> \(36\pi+18\pi=54\pi\approx169.6\ \text{cm}^3\).`],
      String.raw`\(54\pi\approx169.6\ \text{cm}^3\)`,
      fig({ w: 160, items: [
        { poly: Array.from({ length: 31 }, (_, i) => [3 * Math.cos((Math.PI * i) / 30), 12 + 3 * Math.sin((Math.PI * i) / 30)]), fill: "#fce7f3", color: "red" },
        { poly: [[-3, 12], [0, 0], [3, 12]], fill: "amber", color: "amber" },
        { ellipse: [0, 12, 3, 0.9], fill: "#fde68a", color: "amber", width: 1.5 },
        { seg: [[0, 12], [3, 12]], color: "red", width: 1.6 }, { text: "3 cm", at: [1.5, 12.9], color: "red", bold: true, size: 12 },
        { seg: [[0, 0], [0, 12]], color: "gray", dash: true, width: 1.3 }, { text: "12 cm", at: [0.4, 5], color: "gray", bold: true, anchor: "start", size: 12 },
      ] })],
  ]),

  practice([
    q("prisme", String.raw`Trouve le volume d'un prisme à base rectangulaire de \(2.5\) cm sur \(4\) cm sur \(6\) cm.`, num(60),
      "V = lwh.", [String.raw`\(2.5\times4\times6=60\).`], String.raw`\(60\ \text{cm}^3\)`),
    q("cylindre", String.raw`Trouve le volume d'un cylindre de rayon \(5\) m et de hauteur \(8\) m, au dixième près.`, num(628.3, 0.06),
      "V = πr²h.", [String.raw`\(\pi(25)(8)=200\pi\approx628.32\).`], String.raw`\(\approx628.3\ \text{m}^3\)`),
    q("pyramide", String.raw`Une pyramide a une base carrée de \(9\) cm sur \(9\) cm et une hauteur de \(10\) cm. Trouve son volume.`, num(270),
      "V = ⅓ × aire de la base × hauteur.", [String.raw`\(\tfrac13(81)(10)=270\).`], String.raw`\(270\ \text{cm}^3\)`),
    q("sphère", String.raw`Trouve le volume d'une sphère de rayon \(6\) cm, au dixième près.`, num(904.8, 0.06),
      "V = ⁴⁄₃πr³.", [String.raw`\(\tfrac43\pi(216)=288\pi\approx904.78\).`], String.raw`\(\approx904.8\ \text{cm}^3\)`),
    q("agrandissement", String.raw`On double chaque arête d'une boîte. Par quel nombre le volume est-il multiplié ?`, num(8),
      "Facteur de volume = k³.", [String.raw`\(2^3=8\).`], String.raw`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi un cône est-il exactement le tiers d'un cylindre ?", "On peut le montrer par des expériences de remplissage et le démontrer avec des mathématiques plus avancées (le calcul différentiel et intégral). Pour les pyramides, trois pyramides identiques peuvent s'assembler pour former un cube."],
      ["Qu'est-ce qui compte comme base d'un prisme ?", "Les deux faces identiques et parallèles. La base d'un prisme à base triangulaire est un triangle, même quand le prisme repose sur une face rectangulaire."],
      ["Pourquoi le volume est-il multiplié par k³ ?", "Le volume a trois dimensions — longueur, largeur et hauteur — et chacune est multipliée par k, donc le volume est multiplié par k × k × k."],
      ["Comment traiter un solide composé ?", "Décompose-le en solides que tu connais, trouve chaque volume, puis additionne (ou soustrais un trou). Assure-toi que les morceaux ne se chevauchent pas."],
      ["Comment transformer un volume en litres ?", "En cm³ : divise par 1000 pour obtenir des litres (1000 cm³ = 1 L). En m³ : multiplie par 1000 (1 m³ = 1000 L)."],
    ],
    summary: [
      "Prisme ou cylindre : V = (aire de la base) × hauteur; cylindre V = πr²h.",
      "Pyramide ou cône : V = ⅓ (aire de la base) × hauteur.",
      "Sphère : V = ⁴⁄₃πr³.",
      "Un agrandissement de facteur k multiplie le volume par k³; 1 cm³ = 1 mL.",
    ],
    next: "En 5.8, tu trouveras l'aire totale de ces mêmes solides.",
  }),
];
