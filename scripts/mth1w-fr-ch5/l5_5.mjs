// MTH1W-FR 5.5 — Modifier les dimensions : le périmètre (format autonome) : périmètre/circonférence, figures composées,
// modifier une dimension ou toutes, périmètre minimal pour une aire donnée
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, rect } from "../mth1w-ch5/figs5.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "5.5 Modifier les dimensions : le périmètre";
export const ID = lessonId(5, 5);

const semi = (cx, cy, r, from, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((from + (180 * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Modifier les dimensions : le périmètre",
    overview: String.raw`Le périmètre est la longueur d'une frontière : une clôture, une moulure, une bordure, une piste de course. Dans cette leçon, tu trouveras le périmètre de figures composées qui comprennent des cercles, puis tu examineras ce qui arrive au périmètre quand tu modifies une dimension ou que tu les agrandis toutes. Enfin, tu trouveras le rectangle qui entoure une aire donnée avec le moins de clôture possible — un problème d'optimisation.`,
    goals: [
      "trouver le périmètre de polygones et la circonférence de cercles (\\(C=\\pi d=2\\pi r\\));",
      "trouver le périmètre de figures composées en comptant seulement la frontière extérieure;",
      "décrire comment la modification d'une dimension change le périmètre;",
      "expliquer pourquoi multiplier chaque longueur par \\(k\\) multiplie le périmètre par \\(k\\);",
      "trouver le rectangle de périmètre minimal pour une aire donnée (un carré), avec et sans mur.",
    ],
    curriculum: "E1.4 (effet de la modification des dimensions sur le périmètre; optimisation)",
    prior: [
      [String.raw`Périmètre d'un rectangle de \(7\) sur \(3\) ?`, String.raw`\(2(7+3)=20\).`],
      [String.raw`Circonférence d'un cercle de diamètre \(10\) ?`, String.raw`\(10\pi\approx31.4\).`],
      [String.raw`Quels nombres entiers ont un produit de \(36\) ?`, String.raw`\(1\times36, 2\times18, 3\times12, 4\times9, 6\times6\).`],
    ],
    words: [
      ["Périmètre", "longueur totale de la frontière d'une figure à deux dimensions", "\\(P=2(l+w)\\)"],
      ["Circonférence", "périmètre d'un cercle", "\\(C=2\\pi r\\)"],
      ["Figure composée", "une figure formée de figures plus simples", "rectangle + demi-cercles"],
      ["Facteur d'échelle k", "le nombre par lequel on multiplie chaque longueur", "\\(k=1.5\\)"],
      ["Optimisation", "trouver la meilleure valeur (la plus petite ou la plus grande)", "le moins de clôture"],
    ],
  }),

  section("📌 Périmètres des figures", String.raw`
  ${table(["Figure", "Périmètre"], [["rectangle", "\\(P=2l+2w\\)"], ["carré", "\\(P=4s\\)"], ["tout polygone", "additionne les longueurs des côtés"], ["cercle", "\\(C=\\pi d=2\\pi r\\)"], ["demi-cercle (partie courbe seulement)", "\\(\\tfrac12\\pi d=\\pi r\\)"]])}
  <p>Pour une figure <strong>composée</strong>, suis la frontière extérieure et additionne chaque morceau. Les côtés où deux parties se rejoignent sont à l'intérieur de la figure et ne sont <strong>pas</strong> comptés.</p>
  ${fig({ w: 340, items: [{ poly: [[0, 0], [8, 0], ...semi(8, 2.5, 2.5, -90), [0, 5], ...semi(0, 2.5, 2.5, 90)], fill: "green", color: "green" }, { seg: [[0, 0], [0, 5]], color: "green", dash: true, width: 1.3 }, { seg: [[8, 0], [8, 5]], color: "green", dash: true, width: 1.3 }, { text: "80 m", at: [4, -0.8], bold: true, color: "blue" }, { text: "50 m", at: [9.4, 2.5], bold: true, color: "blue", anchor: "start" }] }, "Une piste de course : deux lignes droites et deux extrémités en demi-cercle. Les lignes pointillées ne font pas partie de la frontière.")}`),

  section("📌 Modifier une dimension ou agrandir toutes les dimensions", String.raw`
  <p>Si tu ajoutes \(x\) à la longueur d'un rectangle, deux côtés s'allongent, donc le périmètre augmente de \(2x\). Si tu multiplies <em>chaque</em> longueur par \(k\), chaque morceau de la frontière est multiplié par \(k\) :</p>
  ${keyIdea(String.raw`Nouveau périmètre \(=k\times\) ancien périmètre. Le périmètre est une longueur, donc il change selon le même facteur que les côtés — même pour les cercles (\(C=2\pi r\) : double \(r\), et \(C\) double).`)}
  <p>Essaie aussi un facteur d'échelle inférieur à \(1\) : la figure rapetisse, et le périmètre aussi.</p>`),

  widget("scaleShape", { initShape: "rectangle" }),

  section("📌 Le plus petit périmètre pour une aire donnée", String.raw`
  <p>Un jardin doit avoir une aire de \(36\ \text{m}^2\). Voici quelques rectangles qui conviennent :</p>
  ${table(["largeur (m)", "1", "2", "3", "4", "6"], [["longueur (m)", "36", "18", "12", "9", "6"], ["périmètre (m)", "74", "40", "30", "26", "24"]])}
  ${keyIdea(String.raw`Pour une aire fixe, le rectangle de <strong>périmètre minimal est un carré</strong> : côté \(=\sqrt{A}\). Si un côté longe un mur (pas de clôture à cet endroit), la clôture minimale utilise un côté le long du mur qui est le <strong>double</strong> de la largeur : \(w=\sqrt{A/2}\), \(l=2w\).`)}
  <p>Dans l'explorateur, choisis « aire fixe → périmètre minimal », déplace la largeur et observe la longueur de clôture sur le graphique. Coche ensuite l'option du mur.</p>`),

  widget("rectOptimizer", { initMode: "area" }),

  section("📌 Stratégie", watchOut([
    "Figures composées : compte seulement les côtés extérieurs; le côté courbe d'un demi-cercle mesure πr, la moitié de 2πr.",
    "Ajouter x à une dimension d'un rectangle ajoute 2x au périmètre — cela ne le double pas.",
    "Un agrandissement de facteur k multiplie le périmètre par k (pas par k² : ça, c'est l'aire, en 5.6).",
    "Avec un mur, la clôture ne couvre que trois côtés : P = 2w + l.",
  ])),

  examples([
    ["Une piste de course", String.raw`Une piste a deux côtés droits de \(80\) m et deux extrémités en demi-cercle de diamètre \(50\) m. Trouve la distance autour de la piste.`,
      [String.raw`<b>Plan.</b> Le périmètre est la longueur totale de la frontière : additionne les parties droites et les parties courbes.`,
        String.raw`<b>Parties droites :</b> \(2\times80=160\) m.`,
        String.raw`<b>Parties courbes.</b> Deux demi-cercles de même diamètre forment un cercle complet. \[C=\pi d\] \(C=\pi\times50\approx157.1\) m.`,
        String.raw`<b>Total :</b> \(160+157.1=317.1\) m.`],
      String.raw`\(\approx317.1\) m`,
      fig({ w: 320, items: [{ poly: [...semi(8, 2.5, 2.5, -90), ...semi(0, 2.5, 2.5, 90)], fill: "green", color: "green" }, { seg: [[0, 0], [0, 5]], color: "gray", dash: true, width: 1.2 }, { text: "80 m", at: [4, -0.9], bold: true, color: "green" }, { text: "d = 50 m", at: [0.3, 2.5], bold: true, color: "gray", anchor: "start", size: 12 }] })],
    ["Modifier une dimension", String.raw`Un patio de \(12\) m sur \(5\) m est allongé de \(3\) m. Comment le périmètre change-t-il ?`,
      [String.raw`<b>Formule.</b> \[P=2(l+w)\]`,
        String.raw`<b>Ancien périmètre :</b> \(2(12+5)=2(17)=34\) m.`,
        String.raw`<b>Nouveau périmètre</b> (\(l=15\)) : \(2(15+5)=2(20)=40\) m.`,
        String.raw`<b>Variation :</b> \(40-34=6\) m.`,
        String.raw`<b>Pourquoi 6 et non 3 ?</b> La longueur apparaît deux fois dans le périmètre (en haut et en bas), et chacune augmente de 3 : \(2\times3=6\).`],
      String.raw`il augmente de \(6\) m, passant de \(34\) m à \(40\) m`,
      fig({ w: 300, items: [...rect(12, 5, { lw: "12 m", lh: "5 m" }), { poly: [[12, 0], [15, 0], [15, 5], [12, 5]], fill: "amber", color: "amber", dash: true }, { text: "+3", at: [13.5, 2.5], bold: true, color: "amber" }] })],
    ["Agrandir un triangle", String.raw`Un triangle a des côtés de \(5\), \(7\) et \(9\) cm. Chaque côté est multiplié par \(1.5\). Trouve le nouveau périmètre de deux façons.`,
      [String.raw`<b>Règle.</b> Si chaque longueur est multipliée par un facteur d'échelle \(k\), le périmètre est aussi multiplié par \(k\).`,
        String.raw`<b>Façon 1.</b> Ancien périmètre : \(5+7+9=21\) cm. Nouveau : \(1.5\times21=31.5\) cm.`,
        String.raw`<b>Façon 2.</b> Nouveaux côtés : \(1.5\times5=7.5\), \(1.5\times7=10.5\), \(1.5\times9=13.5\). Somme : \(7.5+10.5+13.5=31.5\) cm ✓.`],
      String.raw`\(31.5\) cm`],
    ["Doubler un rayon", String.raw`Une plate-bande circulaire a un rayon de \(3\) m. On double le rayon. Compare la bordure nécessaire.`,
      [String.raw`<b>Formule.</b> \[C=2\pi r\]`,
        String.raw`<b>Avant :</b> \(C=2\pi(3)=6\pi\approx18.8\) m.`,
        String.raw`<b>Après</b> (\(r=6\)) : \(C=2\pi(6)=12\pi\approx37.7\) m.`,
        String.raw`<b>Comparer :</b> \(12\pi\div6\pi=2\).`,
        String.raw`<b>Pourquoi.</b> \(C=2\pi\times r\) est une constante multipliée par \(r\), donc doubler \(r\) double \(C\).`],
      String.raw`deux fois plus de bordure : environ \(37.7\) m au lieu de \(18.8\) m`,
      fig({ w: 300, items: [{ circle: [0, 0, 3], fill: "#dcfce7", color: "green" }, { seg: [[0, 0], [3, 0]], color: "green" }, { text: "3 m", at: [1.5, 0.6], bold: true, color: "green", size: 12 }, { circle: [11, 0, 6], fill: "#ede9fe", color: "violet" }, { seg: [[11, 0], [17, 0]], color: "violet" }, { text: "6 m", at: [14, 0.7], bold: true, color: "violet", size: 12 }] })],
    ["Le moins de clôture", String.raw`Un enclos rectangulaire pour chien doit avoir une aire de \(64\ \text{m}^2\). Trouve les dimensions qui demandent le moins de clôture, et compare avec un enclos de \(4\) m sur \(16\) m.`,
      [String.raw`<b>Règle.</b> Pour une aire fixe, le rectangle de périmètre minimal est un carré.`,
        String.raw`<b>Voir la régularité.</b> Rectangles d'aire 64 : \(1\times64\) : \(P=130\); \(2\times32\) : \(P=68\); \(4\times16\) : \(P=40\); \(8\times8\) : \(P=32\). Plus la figure s'approche d'un carré, moins il faut de clôture.`,
        String.raw`<b>Côté du carré :</b> \(s^2=64\), donc \(s=\sqrt{64}=8\) m, et \(P=4\times8=32\) m.`,
        String.raw`<b>Comparer avec \(4\times16\) :</b> \(P=2(4+16)=40\) m, soit \(40-32=8\) m de clôture de plus pour la même aire.`],
      String.raw`\(8\) m sur \(8\) m, avec \(32\) m de clôture`,
      fig({ w: 300, items: [...rect(8, 8, { lw: "8 m", lh: "8 m", fill: "green" }), ...rect(16, 4, { lw: "16 m", lh: "4 m", fill: "amber", at: [11.5, 0] })] })],
  ]),

  practice([
    q("une dimension", String.raw`On augmente de \(2\) cm la largeur d'un rectangle de \(9\) cm sur \(4\) cm. Trouve le nouveau périmètre.`, num(30),
      "Nouvelle largeur = 6; P = 2(l + w).", [String.raw`\(2(9+6)=30\).`], String.raw`\(30\) cm`),
    q("agrandissement", String.raw`Un pentagone régulier a des côtés de \(6\) cm. On l'agrandit selon un facteur d'échelle de \(2.5\). Trouve le nouveau périmètre.`, num(75),
      "Ancien périmètre × k.", [String.raw`\(5\times6=30\); \(30\times2.5=75\).`], String.raw`\(75\) cm`),
    q("demi-cercle", String.raw`Trouve le périmètre d'une région en demi-cercle de diamètre \(10\) cm (côté courbe plus le diamètre), au centième près.`, num(25.71, 0.006),
      "Partie courbe = ½πd; ajoute ensuite le côté droit.", [String.raw`\(\tfrac12\pi(10)=5\pi\approx15.71\); \(15.71+10=25.71\).`], String.raw`\(\approx25.71\) cm`),
    q("périmètre minimal", String.raw`Quel est le plus petit périmètre possible d'un rectangle d'aire \(49\ \text{m}^2\) ?`, num(28),
      "Le meilleur rectangle est un carré.", [String.raw`Côté \(\sqrt{49}=7\); \(4\times7=28\).`], String.raw`\(28\) m`),
    q("facteur d'échelle", String.raw`Après que chaque longueur d'une figure a été multipliée par \(k\), son périmètre passe de \(36\) cm à \(54\) cm. Trouve \(k\).`, num(1.5),
      "k = nouveau ÷ ancien.", [String.raw`\(54\div36=1.5\).`], String.raw`\(k=1.5\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi le carré est-il le meilleur rectangle pour une aire fixe ?", "Pour une aire fixe, les rectangles longs et minces ont beaucoup de frontière pour peu d'aire. À mesure que les côtés se rapprochent en longueur, la frontière diminue; elle est minimale quand ils sont égaux."],
      ["La même idée fonctionne-t-elle pour d'autres figures ?", "Oui. De toutes les figures d'aire donnée, le cercle a le plus petit périmètre. C'est une des raisons pour lesquelles les tuyaux, les conserves et les troncs d'arbres sont ronds."],
      ["Qu'est-ce qui change quand un côté est un mur ?", "Tu paies seulement pour trois côtés, donc le côté le long du mur peut être plus long. La meilleure figure est la moitié d'un carré : le côté du mur est le double de chacun des autres côtés."],
      ["Si je double la longueur et la largeur, le périmètre double-t-il ?", "Oui. Doubler chaque longueur, c'est un agrandissement de facteur k = 2, donc le périmètre double. Doubler seulement la longueur ne double pas le périmètre."],
      ["Pourquoi utiliser π ≈ 3.14 seulement à la fin ?", "Écrire des réponses comme 12π les garde exactes. Arrondir à la fin évite d'ajouter de l'erreur."],
    ],
    summary: [
      "Périmètre d'une figure composée : additionne seulement les côtés extérieurs; arc d'un demi-cercle = πr.",
      "Ajouter x à un côté d'un rectangle ajoute 2x au périmètre.",
      "Multiplier toutes les longueurs par k multiplie le périmètre par k.",
      "Périmètre minimal pour une aire fixe : un carré (côté √A); avec un mur, l = 2w.",
    ],
    next: "En 5.6, tu feras la même chose pour l'aire — où un agrandissement a un effet beaucoup plus grand.",
  }),
];
