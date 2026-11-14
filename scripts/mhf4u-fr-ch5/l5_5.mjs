// MHF4U-FR 5.5 — Modèles trigonométriques et taux de variation : construire des modèles sinusoïdaux, trouver des
// instants, et taux de variation moyen et instantané (notation française : y = a sin(k(t − c)) + d)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";
import { PI } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "5.5 Modèles trigonométriques et taux de variation";
export const ID = lessonId(5, 5);

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const M = (f, view, step, points = [], labels = {}, more = []) => plane({ view, curves: [{ f, a: view.xmin, b: view.xmax, color: "violet" }, ...more], points, step, ...labels });
export const blocks = () => [
  intro({
    icon: "🎡",
    title: "Modèles trigonométriques et taux de variation",
    overview: S`Les marées, les grandes roues, la durée du jour et les ressorts se répètent tous. Un modèle sinusoïdal traduit leur comportement en équation : l'axe est le niveau moyen, l'amplitude est la taille de l'oscillation et la période est la durée d'un cycle. Une fois le modèle établi, tu peux trouver quand un événement se produit en résolvant une équation, et à quelle vitesse la grandeur change à l'aide d'une sécante ou d'un très petit intervalle.`,
    goals: [
      "construire un modèle sinusoïdal à partir d'une description ou d'un graphique;",
      "interpréter l'amplitude, la période et l'axe dans le contexte;",
      "trouver les instants où une condition est remplie;",
      "calculer des taux de variation moyens sur un intervalle;",
      "estimer des taux de variation instantanés et dire où ils sont les plus grands.",
    ],
    curriculum: "B2.7 (résoudre des problèmes à l'aide de modèles trigonométriques), D1.4, D1.8 (taux de variation en contexte)",
    prior: [
      [S`Période de \(\sin\left(\frac\pi6t\right)\) ?`, S`\(12\).`],
      [S`Axe d'une courbe de max 8 et de min 2 ?`, S`\(y=5\).`],
      [S`Taux moyen de \(f\) sur \([a,b]\) ?`, S`\(\frac{f(b)-f(a)}{b-a}\).`],
    ],
    words: [
      ["Modèle", "une équation qui décrit une situation réelle", ""],
      ["Axe", "le niveau moyen", "la profondeur moyenne de l'eau"],
      ["Taux moyen", "la pente d'une sécante", ""],
      ["Taux instantané", "la pente de la tangente", ""],
    ],
  }),

  section("📌 Construire un modèle", S`
  ${table(["Grandeur", "Comment la trouver", "Grande roue : rayon 15 m, centre à 17 m, 60 s par tour"], [
    ["|a|", "(max − min)/2", "15"],
    ["d", "(max + min)/2", "17"],
    ["k", "2π/période", "π/30"],
    ["c", "instant d'un point connu", "part du bas : utilise −cos"],
  ])}
  ${M((t) => -15 * Math.cos((PI / 30) * t) + 17, { xmin: 0, xmax: 120, ymin: 0, ymax: 35 }, { x: 15, y: 5 }, [lab(30, 32, "(30, 32)")], { xlabel: "t (s)", ylabel: "h (m)" })}
  ${keyIdea(S`Le taux de variation d'une sinusoïde est le plus grand sur l'axe et vaut 0 à chaque maximum et à chaque minimum. Pour \(y=a\sin(kt)+d\), le plus grand taux est \(|a|k\).`)}`),

  section("📌 Explorer", S`<p>Choisis un ensemble de données et ajuste une sinusoïde à l'aide des curseurs. Décide d'abord de l'axe et de l'amplitude, puis de la période, puis du déphasage.</p>`),

  widget("modelLab", { dataset: "tide" }),

  section("📌 Les taux sur une courbe sinusoïdale", S`
  <p>Utilise un petit intervalle pour estimer un taux instantané : \(\frac{f(a+0.001)-f(a)}{0.001}\). Indique les unités et lis le signe : positif signifie que la grandeur augmente.</p>
  ${watchOut([
    "Utilise les radians dans le calcul du taux; règle ta calculatrice en conséquence.",
    "Convertis les temps dans les unités du modèle avant de les substituer.",
    "Choisis le sinus ou le cosinus selon le début de la situation.",
    "Une réponse en dehors du domaine de la situation est rejetée.",
    "Un modèle donne des approximations; des données réelles ne s'y ajustent pas parfaitement.",
  ])}`),

  examples([
    ["Une marée", S`La profondeur de l'eau est \(d(t)=3\sin\left(\dfrac\pi6t\right)+5\) m, où \(t\) est en heures. Trouve la profondeur maximale, la période et les moments où la profondeur est d'au moins \(6.5\) m pendant les 12 premières heures.`,
      [S`<b>Maximum.</b> L'axe plus l'amplitude : \(5+3=8\) m.`,
        S`<b>Période.</b> \(\dfrac{2\pi}{\pi/6}=12\) h.`,
        S`<b>Inéquation.</b> \(3\sin\frac\pi6t+5\ge6.5\) donne \(\sin\frac\pi6t\ge\frac12\).`,
        S`<b>Angles.</b> Le sinus vaut au moins \(\frac12\) de \(\frac\pi6\) à \(\frac{5\pi}6\) : \(\frac\pi6\le\frac\pi6t\le\frac{5\pi}6\).`,
        S`<b>Résoudre.</b> On multiplie par \(\frac6\pi\) : \(1\le t\le5\).`,
        S`<b>Vérification.</b> \(d(3)=8\ge6.5\), et \(d(6)=5\lt6.5\) ✓`],
      S`8 m; 12 h; \(1\le t\le5\)`,
      M((t) => 3 * Math.sin((PI / 6) * t) + 5, { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, { x: 3, y: 2 }, [lab(1, 6.5, "(1, 6.5)"), lab(5, 6.5, "(5, 6.5)")], { xlabel: "t (h)", ylabel: "d (m)" }, [{ f: () => 6.5, color: "green" }])],
    ["Une grande roue", S`Une roue de 20 m de rayon a son centre à 22 m au-dessus du sol et fait un tour toutes les 80 s. Un passager part du bas. Écris \(h(t)\) et trouve \(h(20)\).`,
      [S`<b>Paramètres.</b> L'amplitude est le rayon, 20. L'axe est la hauteur du centre, 22.`,
        S`<b>k.</b> \(k=\frac{2\pi}{80}=\frac\pi{40}\).`,
        S`<b>Point de départ.</b> Le passager part d'un min, et \(-\cos\) commence à un min : \(h(t)=-20\cos\left(\frac\pi{40}t\right)+22\).`,
        S`<b>Évaluer.</b> \(h(20)=-20\cos\frac\pi2+22=22\) m.`,
        S`<b>Vérification.</b> \(h(0)=2\) est le bas, et 20 s correspond à un quart de tour, à la hauteur du centre ✓`],
      S`\(h(t)=-20\cos\left(\frac\pi{40}t\right)+22\); 22 m`,
      M((t) => -20 * Math.cos((PI / 40) * t) + 22, { xmin: 0, xmax: 160, ymin: 0, ymax: 45 }, { x: 20, y: 5 }, [lab(20, 22, "(20, 22)")], { xlabel: "t (s)", ylabel: "h (m)" })],
    ["Taux de variation moyen", S`Pour \(d(t)=3\sin\left(\dfrac\pi6t\right)+5\), trouve le taux de variation moyen sur \([0,3]\) et sur \([3,6]\).`,
      [S`<b>Valeurs.</b> \(d(0)=5\), \(d(3)=3\sin\frac\pi2+5=8\), \(d(6)=3\sin\pi+5=5\).`,
        S`<b>Premier intervalle.</b> \(\frac{8-5}{3-0}=1\) m/h.`,
        S`<b>Deuxième intervalle.</b> \(\frac{5-8}{6-3}=-1\) m/h.`,
        S`<b>Signification.</b> La marée monte en moyenne pendant 3 h, puis descend au même rythme. La courbe est symétrique par rapport au sommet ✓`],
      S`\(1\) m/h et \(-1\) m/h`,
      M((t) => 3 * Math.sin((PI / 6) * t) + 5, { xmin: 0, xmax: 12, ymin: 0, ymax: 10 }, { x: 1, y: 2 }, [lab(0, 5, "(0, 5)"), lab(3, 8, "(3, 8)"), lab(6, 5, "(6, 5)")], { xlabel: "t (h)", ylabel: "d (m)", segs: [{ pts: [[0, 5], [3, 8]], color: "amber" }, { pts: [[3, 8], [6, 5]], color: "red" }] })],
    ["Taux instantané", S`Estime à quelle vitesse la marée \(d(t)\) monte en \(t=0\) et en \(t=2\).`,
      [S`<b>Méthode.</b> Utilise un très petit intervalle, \(h=0.001\).`,
        S`<b>En \(t=0\).</b> \(\dfrac{d(0.001)-d(0)}{0.001}\approx1.57\) m/h.`,
        S`<b>En \(t=2\).</b> \(\dfrac{d(2.001)-d(2)}{0.001}\approx0.79\) m/h.`,
        S`<b>Signification.</b> Le taux est le plus grand sur l'axe, en \(t=0\). Il diminue à l'approche du sommet en \(t=3\) ✓`],
      S`environ \(1.57\) m/h et \(0.79\) m/h`,
      M((t) => 3 * Math.sin((PI / 6) * t) + 5, { xmin: 0, xmax: 12, ymin: 0, ymax: 10 }, { x: 1, y: 2 }, [lab(0, 5, "t = 0"), lab(2, 3 * Math.sin(PI / 3) + 5, "t = 2")], { xlabel: "t (h)", ylabel: "d (m)" })],
    ["La durée du jour", S`La durée du jour, en heures, est \(L(n)=3.5\sin\left(\dfrac{2\pi}{365}(n-80)\right)+12\) au jour \(n\). Trouve la plus longue durée du jour et le jour où elle se produit.`,
      [S`<b>Maximum.</b> L'axe plus l'amplitude : \(12+3.5=15.5\) h.`,
        S`<b>Quand.</b> Le sinus vaut 1 lorsque son argument vaut \(\frac\pi2\) : \(\frac{2\pi}{365}(n-80)=\frac\pi2\).`,
        S`<b>Résoudre.</b> \(n-80=\frac{365}4=91.25\), donc \(n\approx171\).`,
        S`<b>Vérification.</b> Un sinus atteint son sommet un quart de période après son début : \(80+91.25\approx171\), soit environ le 20 juin ✓`],
      S`15.5 h, vers le jour 171`,
      M((n) => 3.5 * Math.sin(((2 * PI) / 365) * (n - 80)) + 12, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 50, y: 2 }, [lab(171, 15.5, "(171, 15.5)")], { xlabel: "jour", ylabel: "heures" })],
  ]),

  practice([
    q("max", S`\(h(t)=4\cos\left(\dfrac\pi5t\right)+9\). Trouve la hauteur maximale.`, num(13),
      "d + |a|.", [S`\(9+4\).`], S`\(13\)`),
    q("période", S`Trouve la période de \(h(t)=4\cos\left(\dfrac\pi5t\right)+9\).`, num(10),
      "2π/k.", [S`\(\frac{2\pi}{\pi/5}\).`], S`\(10\)`),
    q("valeur", S`Évalue \(h(5)\) pour \(h(t)=4\cos\left(\dfrac\pi5t\right)+9\).`, num(5),
      "cos π = −1.", [S`\(-4+9\).`], S`\(5\)`),
    q("taux", S`Trouve le taux de variation moyen de \(h(t)=4\cos\left(\dfrac\pi5t\right)+9\) sur \([0,5]\).`, num(-1.6, 0.001),
      "(h(5) − h(0))/5.", [S`\(\frac{5-13}5\).`], S`\(-1.6\)`),
    q("modèle", S`Un ressort oscille entre 4 cm et 16 cm. Quelle est son amplitude ?`, num(6),
      "(max − min)/2.", [S`\(\frac{16-4}2\).`], S`\(6\)`),
  ]),

  ...hard([
    ["Temps passé au-dessus d'une hauteur", S`Une roue a pour modèle \(h(t)=-12\cos\left(\dfrac\pi{30}t\right)+14\) m. Pendant combien de temps, sur un tour de 60 s, un passager est-il à plus de 20 m ?`,
      [S`\(-12\cos\frac\pi{30}t+14>20\Rightarrow\cos\frac\pi{30}t\lt-\frac12\).`, S`\(\frac{2\pi}3\lt\frac\pi{30}t\lt\frac{4\pi}3\Rightarrow20\lt t\lt40\).`],
      S`20 s`,
      M((t) => -12 * Math.cos((PI / 30) * t) + 14, { xmin: 0, xmax: 60, ymin: 0, ymax: 30 }, { x: 10, y: 5 }, [lab(20, 20, "(20, 20)"), lab(40, 20, "(40, 20)")], { xlabel: "t (s)", ylabel: "h (m)" }, [{ f: () => 20, color: "green" }])],
    ["Le plus grand taux", S`Trouve le plus grand taux de variation de \(y=8\sin\left(\dfrac\pi4t\right)+10\), et le premier instant \(t\ge0\) où il se produit. Vérifie à l'aide d'un petit intervalle.`,
      [S`Il est le plus grand sur l'axe, en montant : \(t=0\).`, S`Taux \(=|a|k=8\cdot\frac\pi4=2\pi\approx6.28\).`, S`Vérification : \(\frac{8\sin(\pi/4\cdot0.001)}{0.001}\approx6.28\).`],
      S`\(2\pi\approx6.28\) par unité de temps, en \(t=0\)`],
  ], [
    q("difficile", S`Une marée a une pleine mer de 11 m en \(t=2\) h et la basse mer suivante de 3 m en \(t=8\) h. Trouve \(d(5)\).`, num(7),
      "t = 5 est à mi-chemin : c'est l'axe.", [S`L'axe vaut \(\frac{11+3}2\).`], S`\(7\)`),
    q("difficile", S`Pour la même marée, quelle est la valeur de \(k\) ? (3 décimales)`, num(0.524, 0.002),
      "La période est de 12 h.", [S`\(\frac{2\pi}{12}=\frac\pi6\).`], S`\(0.524\)`),
    q("difficile", S`Pour \(y=5\cos(2t)\), estime le taux de variation en \(t=\dfrac\pi4\) (1 décimale).`, num(-10, 0.1),
      "Sur l'axe, en descendant.", [S`\(|a|k=10\), avec un signe négatif.`], S`\(-10\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment choisir entre le sinus et le cosinus ?", "Le cosinus convient à une situation qui commence à un max (ou −cosinus à un min); le sinus convient à une situation qui part de l'axe en montant."],
      ["Pourquoi le taux est-il le plus grand sur l'axe ?", "La courbe y est la plus abrupte, et elle est plate aux sommets."],
      ["Quelles sont les unités d'un taux ?", "Les unités de sortie par unité d'entrée : des mètres par heure, par exemple."],
      ["Et si les données ne forment pas une courbe parfaite ?", "Détermine l'axe et l'amplitude à partir de moyennes; utilise la technologie pour faire une régression."],
      ["Pourquoi les modèles ne sont-ils qu'approximatifs ?", "Les systèmes réels comportent du bruit et d'autres effets; une sinusoïde décrit le motif principal qui se répète."],
    ],
    summary: [
      "Amplitude = (max − min)/2; axe = (max + min)/2; k = 2π/période.",
      "Résous une équation pour trouver des instants.",
      "Le taux moyen est la pente d'une sécante; le taux instantané utilise un petit intervalle.",
      "Le plus grand taux se produit sur l'axe et vaut |a|k.",
    ],
    next: "En 5.6, on révise tout le chapitre.",
  }),
];
