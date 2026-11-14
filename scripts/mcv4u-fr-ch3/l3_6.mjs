// MCV4U-FR 3.6 — Problèmes d'optimisation : une méthode étape par étape (variables, contrainte, fonction d'une variable,
// domaine, dérivée, bornes), problèmes de nombres, de clôtures, de boîtes, de boîtes de conserve et de prix, et modèles
// plus difficiles de distance et de coût. Miroir de ../mcv4u-ch3/l3_6.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { dia, field, box, can, poster } from "./diagrams.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "3.6 Problèmes d'optimisation";
export const ID = lessonId(3, 6);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Problèmes d'optimisation",
    overview: S`Les ingénieurs veulent utiliser le moins de matériau possible, les entreprises veulent le plus grand profit, les voyageurs veulent le trajet le plus court. Dans chaque cas, une quantité doit être rendue aussi grande ou aussi petite que possible en respectant une condition — c'est un <strong>problème d'optimisation</strong>. La méthode est toujours la même : nomme les variables, écris la quantité à optimiser, utilise la condition (la <strong>contrainte</strong>) pour la ramener à une seule variable, énonce le domaine réaliste, puis trouve le maximum ou le minimum absolu à l'aide de la dérivée, en vérifiant les nombres critiques et les bornes. Enfin, réponds à la question en mots, avec les unités.`,
    goals: [
      "traduire une situation en une fonction d'une seule variable;",
      "utiliser une contrainte pour éliminer une variable;",
      "énoncer un domaine réaliste;",
      "trouver et justifier le maximum ou le minimum absolu;",
      "interpréter la réponse en contexte.",
    ],
    curriculum: "B2.4 (résoudre des problèmes d'optimisation portant sur des fonctions polynomiales, rationnelles simples et autres), B2.5 (résoudre des problèmes tirés d'applications réelles en appliquant un modèle mathématique et les concepts de dérivée)",
    prior: [
      [S`Maximum absolu de \(x(10-x)\) sur \([0,10]\)?`, S`25, en \(x=5\).`],
      [S`Si \(xy=100\), écris \(y\) en fonction de \(x\).`, S`\(y=\frac{100}{x}\).`],
      [S`Volume d'un cylindre?`, S`\(V=\pi r^2h\).`],
    ],
    words: [
      ["Fonction objectif", "la quantité à maximiser ou à minimiser", "aire, coût, volume"],
      ["Contrainte", "une équation qui relie les variables", "périmètre fixe, volume fixe"],
      ["Domaine", "les valeurs réalistes de la variable", "longueurs ≥ 0"],
      ["Extremum absolu", "la plus grande ou la plus petite valeur sur tout le domaine", ""],
    ],
  }),

  section("📌 La méthode", S`
  ${table(["Étape", "Action"], [
    ["1", "Fais un schéma; nomme les variables avec leurs unités"],
    ["2", "Écris la fonction objectif (ce qu'on optimise)"],
    ["3", "Utilise la contrainte pour l'écrire avec une seule variable"],
    ["4", "Énonce le domaine"],
    ["5", "Trouve les nombres critiques; compare-les aux bornes (ou utilise un test de la dérivée)"],
    ["6", "Réponds à la question posée, avec les unités"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 150, ymin: 0, ymax: 600 }, curves: [{ f: (x) => 2 * x + 7200 / x, a: 12, b: 150, color: "violet" }], points: [{ x: 60, y: 240, label: "min (60, 240)", color: "red" }], step: { x: 10, y: 50 } }, "Clôture nécessaire, L(x) = 2x + 7200/x, pour un champ de 2400 m² divisé en deux enclos : le moins de clôture en x = 60 m.")}
  ${keyIdea(S`Une réponse d'optimisation doit être justifiée : montre que le nombre critique donne l'extremum absolu sur le domaine — en comparant avec les bornes, par le test de la dérivée première (un seul nombre critique, changement de signe) ou par le test de la dérivée seconde.`)}`),

  section("📌 Explore", S`<p>Choisis la boîte ou l'enclos. Déplace le curseur pour modifier la conception et observe le volume ou l'aire sur le graphique. Trouve la meilleure conception à l'œil, puis compare-la à la réponse obtenue par le calcul différentiel dans le panneau. Remarque que les deux bornes donnent zéro — la meilleure conception est entre les deux.</p>`),

  widget("optimizationLab", { init: { kind: "box", x: 2 } }),

  section("📌 Éviter les erreurs habituelles", S`
  <p>La plupart des erreurs se produisent avant tout calcul différentiel : une fonction objectif à deux variables, ou un domaine trop grand. Écris le domaine avant de dériver.</p>
  ${watchOut([
    "Ramène la fonction à UNE seule variable avant de dériver.",
    "Énonce le domaine : les longueurs, les prix et les quantités sont habituellement positifs ou nuls et bornés.",
    "Rejette les nombres critiques à l'extérieur du domaine.",
    "Justifie que le nombre critique donne un maximum (ou un minimum) — ne le suppose pas.",
    "Réponds à la question posée : des dimensions, un prix, un temps — pas seulement x.",
  ])}`),

  examples([
    ["Un problème de nombres", S`Deux nombres positifs ont une somme de 40. Trouve-les de façon que le produit de l'un par le carré de l'autre soit le plus grand possible.`,
      [S`<b>Variables et contrainte.</b> Soit \(x\) le nombre qu'on élève au carré. L'autre est \(40-x\), car leur somme est 40. Les deux sont positifs, donc \(0\lt x\lt40\); on inclut les bornes 0 et 40 pour comparer les valeurs.`,
        S`<b>Objectif.</b> Maximiser \(P(x)=x^2(40-x)=40x^2-x^3\) sur \([0,40]\).`,
        S`<b>Nombres critiques.</b> \(P'(x)=80x-3x^2=x(80-3x)=0\) donne \(x=0\) ou \(x=\tfrac{80}{3}\approx26.67\).`,
        S`<b>Confirme que c'est un maximum.</b> ${chart({ from: [0, "0"], to: [40, "40"], cuts: [[80 / 3, "\\tfrac{80}{3}"]], d: ["P'(x)", (x) => 80 * x - 3 * x * x], f: "P" })} De plus, \(P(0)=P(40)=0\), alors que \(P\left(\tfrac{80}3\right)=\tfrac{6400}{9}\cdot\tfrac{40}{3}=\tfrac{256\,000}{27}\approx9481.5\).`,
        S`<b>Réponse et vérification.</b> Les nombres sont \(\tfrac{80}{3}\) et \(40-\tfrac{80}{3}=\tfrac{40}{3}\). Les nombres entiers voisins donnent moins : \(P(26)=26^2\cdot14=9464\) et \(P(27)=27^2\cdot13=9477\), tous deux sous 9481.5 ✓`],
      S`\(\tfrac{80}{3}\approx26.67\) (le nombre élevé au carré) et \(\tfrac{40}{3}\approx13.33\)`,
      plane({ view: { xmin: 0, xmax: 42, ymin: 0, ymax: 10.5 }, curves: [{ f: (x) => (x * x * (40 - x)) / 1000, a: 0, b: 40, color: "violet" }], points: [{ x: 80 / 3, y: 9.4815, label: "(26.67, 9481.5)", color: "red" }], step: { x: 5, y: 1 }, xlabel: "x", ylabel: "P (milliers)" })],
    ["Le moins de clôture", S`Un champ rectangulaire de 2400 m² est divisé en deux enclos par une clôture parallèle à l'un des côtés. Trouve les dimensions qui utilisent le moins de clôture.`,
      [S`<b>Fais un schéma et nomme les variables.</b> Soit \(x\) et \(y\) les côtés, la séparation étant parallèle aux côtés de longueur \(y\). ${dia(field({ top: "x", side: "y", pens: 2, note: "séparation y" }), "Clôture : deux côtés de longueur x, trois de longueur y.")}`,
        S`<b>Objectif et contrainte.</b> Clôture \(L=2x+3y\). Aire \(xy=2400\), donc \(y=\dfrac{2400}{x}\) et \(L(x)=2x+\dfrac{7200}{x}\), avec \(x\gt0\).`,
        S`<b>Nombre critique.</b> \(L'(x)=2-\dfrac{7200}{x^2}=0\Rightarrow x^2=3600\Rightarrow x=60\) (la racine négative n'est pas une longueur).`,
        S`<b>Minimum?</b> ${chart({ from: [0, "0"], cuts: [[60, "60"]], d: ["L'(x)", (x) => 2 - 7200 / (x * x)], f: "L" })} De façon équivalente, \(L''(x)=\dfrac{14400}{x^3}\gt0\) pour \(x\gt0\) : une tasse, donc le seul nombre critique est le minimum absolu.`,
        S`<b>Dimensions.</b> \(y=\dfrac{2400}{60}=40\) et \(L=120+120=240\) m.`,
        S`<b>Vérifie.</b> \(L(50)=100+144=244\) et \(L(72)=144+100=244\), tous deux supérieurs à 240 ✓. Remarque qu'au minimum, la clôture se partage également : 120 m dans la direction de \(x\) et 120 m dans la direction de \(y\).`],
      S`60 m sur 40 m (séparation de 40 m), avec 240 m de clôture`,
      plane({ view: { xmin: 0, xmax: 160, ymin: 0, ymax: 500 }, curves: [{ f: (x) => 2 * x + 7200 / x, a: 15, b: 160, color: "violet" }], points: [{ x: 60, y: 240, label: "min (60, 240)", color: "red" }], step: { x: 20, y: 50 }, xlabel: "x (m)", ylabel: "L (m)" })],
    ["Le moins de matériau pour une boîte", S`Une boîte sans couvercle à base carrée doit contenir 32 000 cm³. Trouve les dimensions qui utilisent le moins de matériau.`,
      [S`<b>Fais un schéma et nomme les variables.</b> Base \(x\) sur \(x\), hauteur \(h\). ${dia(box({ base: "x", h: "h" }), "Matériau = base + quatre côtés (pas de dessus).")}`,
        S`<b>Contrainte.</b> Volume \(x^2h=32\,000\), donc \(h=\dfrac{32\,000}{x^2}\).`,
        S`<b>Objectif.</b> Aire \(A=x^2+4xh=x^2+4x\cdot\dfrac{32\,000}{x^2}=x^2+\dfrac{128\,000}{x}\), \(x\gt0\).`,
        S`<b>Nombre critique.</b> \(A'(x)=2x-\dfrac{128\,000}{x^2}=0\Rightarrow2x^3=128\,000\Rightarrow x^3=64\,000\Rightarrow x=40\).`,
        S`<b>Minimum et dimensions.</b> \(A''(x)=2+\dfrac{256\,000}{x^3}\gt0\) : une tasse, donc \(x=40\) donne le minimum. \(h=\dfrac{32\,000}{1600}=20\) et \(A=1600+3200=4800\) cm².`,
        S`<b>Vérifie.</b> \(A(30)=900+4266.7\approx5167\) et \(A(50)=2500+2560=5060\), tous deux plus grands ✓. Le volume est \(40\cdot40\cdot20=32\,000\) ✓`],
      S`base de 40 cm sur 40 cm, hauteur de 20 cm (4800 cm² de matériau)`,
      plane({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 16 }, curves: [{ f: (x) => (x * x + 128000 / x) / 1000, a: 9, b: 100, color: "violet" }], points: [{ x: 40, y: 4.8, label: "min (40, 4800 cm²)", color: "red" }], step: { x: 10, y: 2 }, xlabel: "x (cm)", ylabel: "A (milliers de cm²)" })],
    ["La boîte de conserve la moins coûteuse", S`Une boîte de conserve cylindrique doit contenir 500 cm³. Trouve le rayon et la hauteur qui minimisent son aire totale.`,
      [S`<b>Fais un schéma et nomme les variables.</b> Rayon \(r\), hauteur \(h\). La surface comprend deux disques plus la surface latérale. ${dia(can(), "Aire totale A = 2πr² + 2πrh.")}`,
        S`<b>Contrainte.</b> \(\pi r^2h=500\), donc \(h=\dfrac{500}{\pi r^2}\).`,
        S`<b>Objectif.</b> \(A=2\pi r^2+2\pi r\cdot\dfrac{500}{\pi r^2}=2\pi r^2+\dfrac{1000}{r}\), \(r\gt0\).`,
        S`<b>Nombre critique.</b> \(A'(r)=4\pi r-\dfrac{1000}{r^2}=0\Rightarrow4\pi r^3=1000\Rightarrow r^3=\dfrac{250}{\pi}\Rightarrow r=\sqrt[3]{250/\pi}\approx4.30\).`,
        S`<b>Minimum?</b> ${chart({ v: "r", f: "A", from: [0, "0"], cuts: [[Math.cbrt(250 / Math.PI), "4.30"]], d: ["A'(r)", (r) => 4 * Math.PI * r - 1000 / (r * r)] })}`,
        S`<b>La hauteur, exactement.</b> De \(\pi r^3=250\) : \(h=\dfrac{500}{\pi r^2}=\dfrac{2\cdot\pi r^3}{\pi r^2}=2r\approx8.60\). La meilleure boîte est aussi haute que large. \(A\approx2\pi(4.30)^2+\dfrac{1000}{4.30}\approx348.7\) cm².`,
        S`<b>Vérifie.</b> \(A(4)=100.5+250=350.5\) et \(A(5)=157.1+200=357.1\), tous deux au-dessus de 348.7 ✓`],
      S`rayon d'environ 4.30 cm, hauteur d'environ 8.60 cm — la hauteur est égale au diamètre`,
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 1200 }, curves: [{ f: (r) => 2 * Math.PI * r * r + 1000 / r, a: 1, b: 12, color: "violet" }], points: [{ x: 4.3013, y: 348.73, label: "min (4.30, 348.7)", color: "red" }], step: { x: 1, y: 100 }, xlabel: "r", ylabel: "A" })],
    ["Le meilleur prix de billet", S`À 40 dollars le billet, 2000 billets se vendent; chaque baisse de 1 dollar fait vendre 75 billets de plus. Quel prix maximise le revenu?`,
      [S`<b>Modélise la demande.</b> Au prix \(p\), le prix a baissé de \(40-p\) dollars, donc \(75(40-p)\) billets de plus se vendent : billets \(=2000+75(40-p)=5000-75p\).`,
        S`<b>Objectif et domaine.</b> Revenu \(R(p)=p(5000-75p)=5000p-75p^2\). Le nombre de billets ne peut pas être négatif : \(5000-75p\ge0\), donc \(0\le p\le\tfrac{200}{3}\approx66.67\).`,
        S`<b>Nombre critique.</b> \(R'(p)=5000-150p=0\Rightarrow p=\tfrac{100}{3}\approx33.33\).`,
        S`<b>Maximum?</b> ${chart({ v: "p", f: "R", from: [0, "0"], to: [200 / 3, "\\tfrac{200}{3}"], cuts: [[100 / 3, "\\tfrac{100}{3}"]], d: ["R'(p)", (p) => 5000 - 150 * p] })} Aux bornes, \(R=0\), donc le nombre critique donne le maximum absolu.`,
        S`<b>Résultats.</b> Billets \(5000-75\cdot\tfrac{100}{3}=2500\); revenu \(\tfrac{100}{3}\cdot2500\approx83\,333\) dollars, plus que \(R(40)=40\cdot2000=80\,000\).`,
        S`<b>Vérifie avec des prix en dollars entiers.</b> ${tv(["\\(p\\)", "32", "33", "34", "35"], ["billets", "2600", "2525", "2450", "2375"], ["\\(R\\)", "83 200", "83 325", "83 300", "83 125"])} Le meilleur prix en dollars entiers est 33 dollars, tout près de 33.33 ✓`],
      S`environ 33.33 dollars le billet, ce qui donne 2500 billets et environ 83 333 dollars`,
      plane({ view: { xmin: 0, xmax: 70, ymin: 0, ymax: 90 }, curves: [{ f: (p) => (5000 * p - 75 * p * p) / 1000, a: 0, b: 200 / 3, color: "violet" }], points: [{ x: 100 / 3, y: 83.333, label: "max (33.33, 83.3)", color: "red" }, { x: 40, y: 80, label: "(40, 80)", color: "amber" }], step: { x: 10, y: 10 }, xlabel: "p (dollars)", ylabel: "R (milliers de dollars)" })],
  ]),

  practice([
    q("produit", S`Deux nombres ont une somme de 18. Trouve le plus grand produit possible.`, num(81),
      "P = x(18 − x).", [S`\(x=9\).`], S`\(81\)`),
    q("aire", S`Un rectangle a un périmètre de 60 m. Trouve sa plus grande aire possible (m²).`, num(225),
      "A = x(30 − x).", [S`Un carré, \(15\times15\).`], S`\(225\)`),
    q("minimum", S`Pour \(x\gt0\), en quelle valeur de \(x\) l'expression \(x+\dfrac{16}{x}\) est-elle la plus petite?`, num(4),
      "1 − 16/x² = 0.", [S`\(x^2=16\).`], S`\(4\)`),
    q("bornes", S`Pourquoi faut-il vérifier les bornes du domaine?`, choice(["l'extremum absolu peut se trouver à une borne", "la dérivée y vaut toujours 0", "les nombres critiques ne sont jamais des extremums", "la fonction n'y est pas définie"], 0),
      "Pense à la montagne russe de la section 3.2.", ["La dérivée n'a pas besoin de valoir 0 à la meilleure valeur."], "l'extremum peut se trouver à une borne"),
    q("inscrit", S`Un rectangle a sa base sur l'axe des x et ses coins supérieurs sur \(y=12-x^2\). Trouve sa plus grande aire.`, num(32),
      "A(x) = 2x(12 − x²), 0 ≤ x ≤ √12.", [S`\(A'=24-6x^2=0\Rightarrow x=2\); \(A=4\cdot8\).`], S`\(32\)`),
  ]),

  ...hard([
    ["Le point le plus proche", S`Trouve le point de \(y=\sqrt x\) le plus proche de \((4,0)\).`,
      [S`Minimise le carré de la distance \(D(x)=(x-4)^2+x\), \(x\ge0\) (même point minimum que la distance).`, S`\(D'(x)=2(x-4)+1=0\Rightarrow x=3.5\); \(D''=2\gt0\).`, S`Point \((3.5,\sqrt{3.5})\approx(3.5,1.87)\); distance \(\sqrt{3.75}\approx1.94\).`],
      S`\((3.5,1.87)\), à environ 1.94 unité`,
      plane({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 6.5, color: "violet" }, { f: (x) => (Math.sqrt(3.5) / -0.5) * (x - 4), a: 3.5, b: 4, color: "green" }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "red" }, { x: 3.5, y: Math.sqrt(3.5), label: "(3.5, 1.87)", color: "blue" }], step: { x: 0.5, y: 0.5 } })],
    ["Le pipeline le moins coûteux", S`Une plateforme est à 3 km au large. Une raffinerie se trouve sur la côte, à 8 km le long du rivage à partir du point le plus proche de la plateforme. Le tuyau coûte 50 milliers de dollars par km sous l'eau et 30 milliers de dollars par km sur terre. Où le tuyau doit-il atteindre le rivage?`,
      [S`Suppose qu'il touche le rivage à \(x\) km le long de la côte : \(C(x)=50\sqrt{9+x^2}+30(8-x)\), \(0\le x\le8\).`, S`\(C'(x)=\dfrac{50x}{\sqrt{9+x^2}}-30=0\Rightarrow25x^2=9(9+x^2)\Rightarrow x=2.25\).`, S`\(C(0)=390\), \(C(2.25)=360\), \(C(8)\approx427.2\) (milliers de dollars).`],
      S`à 2.25 km le long de la côte; coût minimal de 360 milliers de dollars`,
      plane({ view: { xmin: 0, xmax: 8.5, ymin: 300, ymax: 450 }, curves: [{ f: (x) => 50 * Math.sqrt(9 + x * x) + 30 * (8 - x), a: 0, b: 8, color: "violet" }], points: [{ x: 2.25, y: 360, label: "min (2.25, 360)", color: "red" }, { x: 0, y: 390, label: "(0, 390)", color: "amber" }, { x: 8, y: 427.2, label: "(8, 427.2)", color: "amber" }], step: { x: 1, y: 25 } })],
  ], [
    q("difficile", S`Un cylindre sans couvercle doit contenir \(1000\pi\) cm³. Trouve le rayon (cm) qui utilise le moins de matériau.`, num(10),
      "A = πr² + 2000π/r.", [S`\(2\pi r-\frac{2000\pi}{r^2}=0\Rightarrow r^3=1000\).`], S`\(10\)`),
    q("difficile", S`Trouve la plus grande aire d'un rectangle inscrit dans un cercle de rayon 5.`, num(50),
      "A = 4xy avec x² + y² = 25; le meilleur rectangle est un carré.", [S`Côté \(5\sqrt2\), aire 50.`], S`\(50\)`),
    q("difficile", S`Une agricultrice dispose de 1200 m de clôture pour faire un enclos adossé à une grange, divisé en trois sections par deux clôtures perpendiculaires à la grange. Trouve la plus grande aire totale (m²).`, num(90000),
      "4x + y = 1200; A = x(1200 − 4x).", [S`\(x=150\), \(y=600\).`], S`\(90\,000\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi minimiser le carré d'une distance?", "√ est croissante, donc la distance et son carré sont minimaux au même point, et le carré est plus facile à dériver."],
      ["Et s'il y a deux nombres critiques?", "Évalue la fonction objectif en chacun (et aux bornes) et compare; ou garde seulement ceux qui sont dans le domaine."],
      ["Ai-je besoin d'un test de la dérivée si je vérifie les bornes?", "Non : sur un intervalle fermé, comparer tous les candidats est une justification complète. Sur un domaine ouvert, utilise un test de la dérivée."],
      ["Pourquoi la hauteur de la meilleure boîte de conserve est-elle égale à son diamètre?", "C'est ce que donne le calcul différentiel pour n'importe quel volume : h = 2r minimise 2πr² + 2πrh lorsque πr²h est fixe."],
      ["Comment poser un problème de prix?", "Écris le nombre d'articles vendus en fonction du prix, multiplie par le prix pour obtenir le revenu, puis maximise."],
    ],
    summary: [
      "Schéma, variables, objectif, contrainte.",
      "Une seule variable et un domaine.",
      "Nombres critiques + bornes (ou un test).",
      "Réponds en mots, avec les unités.",
    ],
    next: "La section 3.7 révise tout le chapitre.",
  }),
];
