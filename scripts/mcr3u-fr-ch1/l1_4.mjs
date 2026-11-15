// MCR3U-FR 1.4 — Domaine et image : notation ensembliste, lecture de graphiques, restrictions algébriques et
// restrictions imposées par un contexte. Miroir de ../mcr3u-ch1/l1_4.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";
const S = String.raw;

export const TITLE = "1.4 Domaine et image";
export const ID = lessonId(1, 4);

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Domaine et image",
    overview: String.raw`Le <strong>domaine</strong> d'une fonction est l'ensemble de toutes les entrées qu'elle accepte; l'<strong>image</strong> est l'ensemble de toutes les sorties qu'elle produit. Dans cette leçon, tu vas écrire les deux en notation ensembliste, les lire sur des graphiques, trouver les restrictions créées par les racines carrées et les dénominateurs, et déterminer les valeurs qui ont du sens lorsqu'une fonction modélise une situation réelle.`,
    goals: [
      "écrire le domaine et l'image en notation ensembliste;",
      "lire le domaine et l'image sur un graphique;",
      "trouver les restrictions causées par les racines carrées et les dénominateurs;",
      "utiliser le sommet pour trouver l'image d'une fonction du second degré;",
      "restreindre le domaine et l'image pour qu'ils conviennent à un contexte.",
    ],
    curriculum: "A1.3 (domaine et image à l'aide de représentations numériques, graphiques et algébriques; décrire correctement le domaine et l'image d'une fonction et expliquer les restrictions dans des contextes tirés d'applications de la vie réelle)",
    prior: [
      [String.raw`Résous \(5-2x\ge0\).`, String.raw`\(x\le2.5\) (diviser par \(-2\) inverse le sens de l'inégalité).`],
      [String.raw`Quel est le sommet de \(y=-(x-3)^2+4\)?`, String.raw`\((3,4)\), un maximum.`],
      [String.raw`Pour quelle valeur de \(x\) l'expression \(\frac{1}{x-6}\) n'a-t-elle pas de valeur?`, String.raw`\(x=6\).`],
    ],
    words: [
      ["Notation ensembliste", "\\(\\{x\\in\\mathbb R\\mid \\text{condition}\\}\\)", "\\(\\{x\\in\\mathbb R\\mid x\\ge2\\}\\)"],
      ["\\(\\mathbb R\\)", "l'ensemble de tous les nombres réels", ""],
      ["Restriction", "une valeur qui doit être exclue", "\\(x\\ne3\\)"],
      ["Domaine discret", "seulement des valeurs séparées (dénombrements)", "\\(\\{0,1,2,3\\}\\)"],
    ],
  }),

  section("📌 Domaine et image à partir d'un graphique", String.raw`
  <p>Imagine qu'une lumière éclaire le graphique d'en haut vers l'axe des x : l'ombre du graphique sur cet axe est le domaine. Éclaire-le de côté vers l'axe des y : cette ombre est l'image. Un point plein est inclus; un point vide ou une asymptote ne l'est pas.</p>
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -3, ymax: 7 }, curves: [{ f: (x) => -((x + 1) ** 2) + 5, color: "violet" }], points: [{ x: -1, y: 5, label: "sommet (−1, 5)" }], step: { x: 1, y: 1 } }, "Domaine : tous les x réels. Image : y ≤ 5")}
  ${keyIdea(String.raw`Écris \(\{x\in\mathbb R\mid \ldots\}\) pour le domaine et \(\{y\in\mathbb R\mid \ldots\}\) pour l'image. Cherche trois choses : les racines carrées (intérieur \(\ge0\)), les dénominateurs (\(\ne0\)) et le contexte.`)}`),

  section("📌 Explore", String.raw`<p>Choisis un type de fonction et fais varier \(h\), \(k\) et \(a\). L'ombre verte est le domaine et l'ombre rouge, l'image. Active ensuite l'option qui restreint x pour voir comment un contexte modifie les deux.</p>`),

  widget("domainRangeLab", { start: "root" }),

  section("📌 Restrictions algébriques", String.raw`
  ${table(["La fonction contient", "Règle", "Exemple"], [
    ["\\(\\sqrt{\\text{expression}}\\)", "expression \\(\\ge0\\)", "\\(\\sqrt{x+3}\\) : \\(x\\ge-3\\)"],
    ["\\(\\frac{\\ldots}{\\text{expression}}\\)", "expression \\(\\ne0\\)", "\\(\\frac{2}{x-5}\\) : \\(x\\ne5\\)"],
    ["seulement un polynôme", "aucune restriction", "\\(x^3-2x\\) : \\(x\\in\\mathbb R\\)"],
  ])}
  ${watchOut([
    "L'image concerne les sorties — ne recopie pas le domaine.",
    "Lorsque tu divises une inéquation par un nombre négatif, inverse le sens de l'inégalité.",
    "Un contexte peut restreindre une fonction davantage que l'algèbre (temps ≥ 0, longueurs > 0, nombres entiers d'objets).",
    "Pour une parabole, l'image commence à l'ordonnée du sommet.",
  ])}`),

  examples([
    ["À partir d'un graphique", S`Donne le domaine et l'image de \(f(x)=-(x+1)^2+5\).`,
      [S`<b>Domaine : quelles entrées sont permises?</b> La règle ne fait qu'additionner, élever au carré et changer le signe. Tout nombre réel peut subir ces opérations, donc rien n'est exclu.`,
        S`<b>Trouve le sommet.</b> Sous la forme \(a(x-h)^2+k\), le sommet est \((h,k)\). Ici, \(x+1=x-(-1)\), donc le sommet est \((-1,5)\).`,
        S`<b>Image : quelles sorties sont obtenues?</b> \((x+1)^2\ge0\), donc \(-(x+1)^2\le0\). En ajoutant 5, on obtient \(f(x)\le5\), et la valeur 5 est atteinte en \(x=-1\).`,
        S`<b>Toutes les valeurs plus basses sont atteintes.</b> Lorsque \(x\) s'éloigne de \(-1\), la sortie diminue sans limite, donc chaque valeur sous 5 est atteinte.`,
        S`<b>Vérifie sur le graphique.</b> La parabole s'étend indéfiniment vers la gauche et vers la droite, et son point le plus haut est \((-1,5)\) ✓`],
      S`domaine \(\{x\in\mathbb R\}\), image \(\{y\in\mathbb R\mid y\le5\}\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -5, ymax: 7 }, curves: [{ f: (x) => -((x + 1) ** 2) + 5, color: "violet" }], lines: [{ m: 0, b: 5, color: "amber", dash: true }], points: [{ x: -1, y: 5, label: "(−1, 5)", color: "amber" }, { x: 0, y: 4, label: "(0, 4)" }, { x: 1, y: 1, label: "(1, 1)" }], step: { x: 1, y: 1 } })],
    ["Restriction due à une racine carrée", S`Trouve le domaine et l'image de \(f(x)=\sqrt{6-2x}\).`,
      [S`<b>Règle.</b> Une racine carrée réelle exige un radicande non négatif; on impose donc \(6-2x\ge0\).`,
        S`<b>Résous l'inéquation.</b> Soustrais 6 : \(-2x\ge-6\). Divise par \(-2\) et <em>inverse le sens</em>, car le diviseur est négatif : \(x\le3\).`,
        S`<b>Image.</b> Une racine carrée n'est jamais négative, donc \(y\ge0\). La valeur 0 est atteinte en \(x=3\). Lorsque \(x\) diminue, \(6-2x\) augmente sans limite, donc \(y\) n'a pas de borne supérieure.`,
        S`<b>Table de valeurs.</b> ${tv(["\\(x\\)", "\\(-5\\)", "\\(1\\)", "\\(3\\)", "\\(4\\)"], ["\\(6-2x\\)", "16", "4", "0", "\\(-2\\)"], ["\\(f(x)\\)", "4", "2", "0", "non réel"])}`,
        S`<b>Vérifie sur le graphique.</b> La courbe se termine en \((3,0)\) et monte vers la gauche ✓`],
      S`domaine \(\{x\in\mathbb R\mid x\le3\}\), image \(\{y\in\mathbb R\mid y\ge0\}\)`,
      plane({ view: { xmin: -6, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(6 - 2 * x), b: 3, color: "green" }], points: [{ x: 3, y: 0, label: "(3, 0)", color: "amber" }, { x: 1, y: 2, label: "(1, 2)" }, { x: -5, y: 4, label: "(−5, 4)" }], step: { x: 1, y: 1 } })],
    ["Restriction due à un dénominateur", S`Trouve le domaine et l'image de \(g(x)=\frac{3}{x+4}-1\).`,
      [S`<b>Domaine.</b> Une division par 0 n'a pas de valeur. Le dénominateur vaut 0 lorsque \(x+4=0\), donc \(x=-4\) est la seule entrée exclue.`,
        S`<b>Image.</b> Une fraction vaut 0 seulement si son numérateur vaut 0. Le numérateur est 3, donc \(\frac3{x+4}\ne0\). Par conséquent, \(g(x)\) ne peut jamais être égal à \(0-1=-1\).`,
        S`<b>Toutes les autres sorties sont atteintes.</b> Résous \(\frac3{x+4}-1=y\) : \(x+4=\frac3{y+1}\). Cela donne un \(x\) pour chaque \(y\ne-1\).`,
        S`<b>Place quelques points.</b> ${tv(["\\(x\\)", "\\(-7\\)", "\\(-5\\)", "\\(-3\\)", "\\(-1\\)"], ["\\(g(x)\\)", "\\(-2\\)", "\\(-4\\)", "\\(2\\)", "\\(0\\)"])}`,
        S`<b>Vérifie sur le graphique.</b> Les asymptotes \(x=-4\) et \(y=-1\) marquent l'entrée exclue et la sortie exclue ✓`],
      S`domaine \(\{x\in\mathbb R\mid x\ne-4\}\), image \(\{y\in\mathbb R\mid y\ne-1\}\)`,
      plane({ view: { xmin: -10, xmax: 4, ymin: -7, ymax: 5 }, curves: [{ f: (x) => 3 / (x + 4) - 1, color: "red" }], vlines: [{ x: -4, color: "gray", dash: true }], lines: [{ m: 0, b: -1, color: "gray", dash: true }], points: [{ x: -3, y: 2, label: "(−3, 2)" }, { x: -1, y: 0, label: "(−1, 0)" }, { x: -5, y: -4, label: "(−5, −4)" }], step: { x: 1, y: 1 } })],
    ["Une restriction imposée par le contexte", S`La hauteur d'une balle est \(h(t)=-5t^2+30t+35\) mètres après \(t\) secondes. Trouve un domaine et une image qui ont du sens.`,
      [S`<b>Réfléchis à la situation.</b> La règle fonctionne pour tout \(t\), mais le modèle ne décrit que le vol : du lancer (\(t=0\)) jusqu'à ce que la balle touche le sol (\(h=0\)).`,
        S`<b>Trouve le moment de l'atterrissage.</b> Pose \(h=0\) et mets \(-5\) en évidence : \(-5(t^2-6t-7)=0\), donc \((t-7)(t+1)=0\). Alors \(t=7\) ou \(t=-1\).`,
        S`<b>Rejette la racine superflue.</b> Un temps négatif précède le lancer, donc \(t=7\). Le domaine est \(0\le t\le7\).`,
        S`<b>Trouve le point le plus haut.</b> Le sommet est à mi-chemin entre les racines : \(t=\frac{7+(-1)}2=3\). Alors \(h(3)=-45+90+35=80\).`,
        S`<b>Image.</b> Pendant le vol, la hauteur passe de 35 à 80, puis redescend à 0. La plus petite valeur est donc 0 et la plus grande, 80.`,
        S`<b>Vérifie.</b> \(h(7)=-245+210+35=0\) ✓`],
      S`domaine \(\{t\in\mathbb R\mid0\le t\le7\}\), image \(\{h\in\mathbb R\mid0\le h\le80\}\)`,
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 90 }, curves: [{ f: (t) => -5 * t * t + 30 * t + 35, a: 0, b: 7, color: "violet" }], points: [{ x: 0, y: 35, label: "(0, 35)" }, { x: 3, y: 80, label: "(3, 80)" }, { x: 7, y: 0, label: "(7, 0)" }], step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Un domaine discret", S`Les billets de concert coûtent 12 dollars chacun, et un client peut en acheter au plus 5. Donne le domaine et l'image du coût \(C(n)=12n\).`,
      [S`<b>Quelles entrées ont du sens?</b> \(n\) compte des billets. Il doit être un nombre entier, d'au plus 5. Des valeurs comme \(n=2.5\) ou \(n=-1\) n'ont aucun sens ici.`,
        S`<b>Énumère les entrées et calcule chaque sortie.</b> ${tv(["\\(n\\)", "0", "1", "2", "3", "4", "5"], ["\\(C(n)\\)", "0", "12", "24", "36", "48", "60"])}`,
        S`<b>Lis les ensembles.</b> Le domaine est la ligne du haut et l'image, la ligne du bas.`,
        S`<b>Trace le graphique correctement.</b> Comme le domaine est une liste de valeurs séparées, le graphique est formé de six points isolés. Les relier par une droite laisserait croire, à tort, qu'on peut acheter des fractions de billet.`,
        S`<b>Vérifie.</b> Chaque point est sur la droite \(y=12x\), par exemple \(12\times5=60\) ✓`],
      S`domaine \(\{0,1,2,3,4,5\}\), image \(\{0,12,24,36,48,60\}\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -5, ymax: 70 }, points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 1, y: 12 }, { x: 2, y: 24 }, { x: 3, y: 36, label: "(3, 36)" }, { x: 4, y: 48 }, { x: 5, y: 60, label: "(5, 60)", color: "amber" }], step: { x: 1, y: 10 }, xlabel: "n", ylabel: "C" })],
  ]),

  practice([
    q("racine carrée", String.raw`Quel est le plus petit nombre du domaine de \(f(x)=\sqrt{x-7}\)?`, num(7),
      "Pose l'intérieur ≥ 0.", [String.raw`\(x-7\ge0\Rightarrow x\ge7\).`], String.raw`\(7\)`),
    q("image d'une parabole", String.raw`L'image de \(g(x)=2(x-3)^2-8\) est \(y\ge m\). Trouve \(m\).`, num(-8),
      "Où est le sommet? Dans quel sens la parabole s'ouvre-t-elle?", [String.raw`Sommet \((3,-8)\), ouverte vers le haut.`], String.raw`\(-8\)`),
    q("dénominateur", String.raw`Quelle valeur de x est exclue du domaine de \(h(x)=\frac{5}{2x-6}\)?`, num(3),
      "Pose le dénominateur égal à 0.", [String.raw`\(2x-6=0\Rightarrow x=3\).`], String.raw`\(3\)`),
    q("contexte", String.raw`La hauteur d'une pierre est \(h(t)=-5t^2+20t\) (lancée à partir du sol). Quelle est la plus grande valeur d'un domaine qui a du sens?`, num(4),
      "Quand revient-elle au sol?", [String.raw`\(-5t(t-4)=0\Rightarrow t=0\) ou \(t=4\).`], String.raw`\(4\)`),
    q("choisir", String.raw`Quel est le domaine de \(f(x)=\sqrt{x+2}+1\)?`, choice([String.raw`\(x\ge-2\)`, String.raw`\(x\ge1\)`, String.raw`\(x\ge2\)`, String.raw`\(x\in\mathbb R\)`], 0),
      "Seul l'intérieur de la racine compte pour le domaine.", [String.raw`\(x+2\ge0\).`], String.raw`\(\{x\in\mathbb R\mid x\ge-2\}\)`),
  ]),

  ...hard([
    ["Deux restrictions à la fois", String.raw`Trouve le domaine de \(f(x)=\dfrac{\sqrt{x+3}}{x-2}\).`,
      [String.raw`La racine exige \(x+3\ge0\Rightarrow x\ge-3\).`, String.raw`Le dénominateur exige \(x-2\ne0\Rightarrow x\ne2\).`, String.raw`Les deux conditions doivent être respectées.`],
      String.raw`\(\{x\in\mathbb R\mid x\ge-3,\ x\ne2\}\)`],
    ["Optimiser dans un contexte", String.raw`Un rectangle a un périmètre de 40 cm et une largeur de \(x\) cm. Écris son aire \(A(x)\) et donne le domaine et l'image.`,
      [String.raw`Longueur \(=20-x\), donc \(A(x)=x(20-x)\).`, String.raw`Les deux côtés doivent être positifs : \(0<x<20\).`, String.raw`Le sommet est à mi-chemin entre les zéros 0 et 20 : \(A(10)=100\). Près des extrémités, l'aire s'approche de 0.`],
      String.raw`domaine \(\{x\in\mathbb R\mid0<x<20\}\), image \(\{A\in\mathbb R\mid0<A\le100\}\)`,
      plane({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 110 }, curves: [{ f: (x) => x * (20 - x), a: 0, b: 20, color: "violet" }], points: [{ x: 10, y: 100, label: "(10, 100)" }], step: { x: 2, y: 10 }, xlabel: "largeur (cm)", ylabel: "aire (cm²)" })],
  ], [
    q("difficile", String.raw`Combien d'entiers appartiennent au domaine de \(f(x)=\sqrt{12-3x}+\sqrt{x+1}\)?`, num(6),
      "Les deux racines exigent un intérieur non négatif.", [String.raw`\(12-3x\ge0\Rightarrow x\le4\); \(x+1\ge0\Rightarrow x\ge-1\).`, String.raw`Les entiers \(-1,0,1,2,3,4\).`], String.raw`\(6\)`),
    q("difficile", String.raw`\(f(x)=-2(x-1)^2+7\) a pour domaine \(-1\le x\le4\). Quelle est la plus petite valeur de son image?`, num(-11),
      "Vérifie le sommet et les deux extrémités.", [String.raw`\(f(1)=7\), \(f(-1)=-1\), \(f(4)=-18+7\).`], String.raw`\(-11\)`),
    q("difficile", String.raw`Combien de nombres réels sont exclus du domaine de \(f(x)=\frac{1}{x^2-9}\)?`, num(2),
      "Résous x² − 9 = 0.", [String.raw`\(x=3\) ou \(x=-3\).`], String.raw`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi utiliser la notation ensembliste?", "Elle indique exactement quels nombres sont inclus, sans ambiguïté sur les extrémités."],
      ["Comment trouver une image sans graphique?", "Utilise ce que tu sais : le sommet d'une parabole, la valeur de départ d'une racine, l'asymptote horizontale d'une fonction inverse."],
      ["Le domaine peut-il ne contenir que quelques nombres?", "Oui — un ensemble de couples ou un contexte de dénombrement a un domaine discret."],
      ["Dois-je inclure t = 0 dans un problème de balle?", "Oui, si la balle est lancée à t = 0. Inclus aussi le moment de l'atterrissage : la hauteur vaut alors 0."],
      ["Faut-il ≤ ou < à une extrémité?", "Utilise ≤ si la valeur est réellement atteinte (point plein); < si on s'en approche sans l'atteindre."],
    ],
    summary: [
      "Domaine = entrées (ombre sur l'axe des x); image = sorties (ombre sur l'axe des y).",
      "Racines : intérieur ≥ 0. Dénominateurs : ≠ 0.",
      "Paraboles : l'image commence au sommet.",
      "Un contexte peut restreindre le domaine à un intervalle ou à des nombres entiers.",
    ],
    next: "La section 1.5 inverse les fonctions : la réciproque échange le domaine et l'image.",
  }),
];
