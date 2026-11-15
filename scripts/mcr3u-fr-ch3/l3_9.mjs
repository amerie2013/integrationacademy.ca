// MCR3U-FR 3.9 — Révision du chapitre 3 : formes, optimisation, résolution, discriminant, familles, systèmes linéaires-quadratiques
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, roots, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "3.9 Révision du chapitre 3";
export const ID = lessonId(3, 9);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Révision du chapitre 3",
    overview: S`Cette révision relie tout le chapitre. Le tableau récapitulatif énumère chaque habileté; les exemples en combinent deux ou plus; les exercices et les problèmes de niveau difficile sont du niveau d'un test de chapitre.`,
    goals: [
      "passer de la forme générale à la forme canonique et à la forme factorisée;",
      "trouver et interpréter des valeurs maximales et minimales;",
      "résoudre des équations du second degré de façon exacte et en contexte;",
      "utiliser le discriminant et les familles de paraboles;",
      "résoudre des systèmes linéaires-quadratiques.",
    ],
    curriculum: "A2.1–A2.5 (zéros, maximum et minimum, problèmes, familles ayant des zéros donnés, systèmes linéaires-quadratiques)",
    prior: [
      ["Que t'indique le discriminant?", "Le nombre de zéros réels (ou de points d'intersection)."],
      [S`Quel est l'axe de \(y=a(x-r)(x-s)\)?`, S`\(x=\frac{r+s}{2}\).`],
      ["Comment trouver une tangente?", "Pose la droite égale à la parabole et rends D = 0."],
    ],
    words: [
      ["3.1–3.3", "formes, conversions, différences finies", ""],
      ["3.4", "maximum et minimum, optimisation", ""],
      ["3.5–3.6", "résolution, discriminant", ""],
      ["3.7", "familles ayant des zéros donnés", ""],
      ["3.8", "systèmes linéaires-quadratiques", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", S`
  ${table(["Question", "Outil"], [
    ["Quelles caractéristiques puis-je lire directement?", "factorisée : zéros · canonique : sommet et max./min. · générale : ordonnée à l'origine"],
    ["J'ai besoin d'une autre forme", "développer, factoriser ou utiliser l'axe \\(x=-\\frac{b}{2a}\\)"],
    ["Cette table est-elle du second degré? Quelle est son équation?", "deuxièmes différences constantes \\(=2ah^2\\); c en x = 0; un autre point pour b"],
    ["Où est le max./min.?", "forme canonique, factorisation partielle ou moyenne des zéros"],
    ["Quand f(x) = k?", "réarranger, factoriser ou utiliser la formule"],
    ["Combien de zéros?", "\\(D=b^2-4ac\\) ou les signes de a et de k"],
    ["Quelle parabole a ces zéros et passe par P?", "\\(y=a(x-r)(x-s)\\), substituer P"],
    ["Où la droite la rencontre-t-elle?", "poser égales, discriminant, résoudre"],
  ])}
  ${keyIdea("Beaucoup de questions de test se font en deux étapes : construire la fonction du second degré à partir d'une situation, puis l'optimiser ou résoudre l'équation.")}`),

  section("📌 Explore", S`<p>Utilise l'outil pour vérifier les formes et les caractéristiques de n'importe quelle parabole des exemples.</p>`),

  widget("quadForms", { init: [-1, 0, 6] }),

  examples([
    ["Formes et caractéristiques", S`Pour \(f(x)=-2x^2+8x+10\), trouve les zéros, le sommet et l'image.`,
      [S`<b>Mise en évidence.</b> Mets \(-2\) en évidence pour que le trinôme ait un coefficient dominant de 1 : \(f(x)=-2(x^2-4x-5)\).`,
        S`<b>Factorise.</b> Produit \(-5\), somme \(-4\) : \(-5\) et \(1\). Donc \(f(x)=-2(x-5)(x+1)\), et les zéros sont 5 et \(-1\).`,
        S`<b>Axe.</b> \(x=\frac{5+(-1)}2=2\).`,
        S`<b>Sommet.</b> \(f(2)=-8+16+10=18\). Le sommet est donc \((2,18)\).`,
        S`<b>Image.</b> \(a<0\), donc 18 est le maximum : \(y\le18\).`,
        S`<b>Vérification.</b> Forme canonique : \(-2(x-2)^2+18=-2x^2+8x-8+18=-2x^2+8x+10\) ✓`],
      S`zéros \(-1,5\); sommet \((2,18)\); image \(y\le18\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -8, ymax: 21 }, curves: [{ f: (x) => -2 * x * x + 8 * x + 10, color: "violet" }], points: [{ x: 2, y: 18, label: "(2, 18)", color: "amber" }, { x: -1, y: 0, label: "(−1, 0)" }, { x: 5, y: 0, label: "(5, 0)" }, { x: 0, y: 10, label: "(0, 10)" }], step: { x: 1, y: 3 } })],
    ["Optimisation", S`Une aire de jeu rectangulaire utilise un mur pour un côté et 36 m de clôture pour les trois autres. Trouve la plus grande aire.`,
      [S`<b>Variables.</b> Soit \(w\) chacun des côtés qui touchent le mur. La clôture couvre deux largeurs et une longueur; la longueur est donc \(36-2w\).`,
        S`<b>Modèle.</b> \(A(w)=w(36-2w)\).`,
        S`<b>Zéros.</b> \(w=0\) et \(w=18\), puisque \(36-2w=0\) en \(w=18\).`,
        S`<b>Axe.</b> \(w=\frac{0+18}2=9\). La parabole est ouverte vers le bas; cela donne donc le maximum.`,
        S`<b>Dimensions et aire.</b> Longueur \(36-18=18\) m, donc \(A=9\times18=162\) m².`,
        S`<b>Vérifie les valeurs voisines.</b> \(A(8)=8(20)=160\) et \(A(10)=10(16)=160\), toutes deux plus petites ✓`],
      "9 m sur 18 m, 162 m²",
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 180 }, curves: [{ f: (w) => w * (36 - 2 * w), a: 0, b: 18, color: "violet" }], points: [{ x: 9, y: 162, label: "(9, 162)", color: "amber" }, { x: 8, y: 160 }, { x: 10, y: 160 }], step: { x: 2, y: 20 }, xlabel: "w (m)", ylabel: "A (m²)" })],
    ["Solutions exactes", S`Résous \(2x^2+4x-1=0\) de façon exacte.`,
      [S`<b>Identifie.</b> \(a=2\), \(b=4\), \(c=-1\). L'expression ne se factorise pas dans les entiers.`,
        S`<b>Formule.</b> \(x=\frac{-4\pm\sqrt{16+8}}4=\frac{-4\pm\sqrt{24}}4\).`,
        S`<b>Simplifie la racine.</b> \(\sqrt{24}=2\sqrt6\), donc \(x=\frac{-4\pm2\sqrt6}4\).`,
        S`<b>Réduis.</b> Divise le numérateur et le dénominateur par 2 : \(x=\frac{-2\pm\sqrt6}2\).`,
        S`<b>Vérification.</b> Somme des racines \(=-2=-\frac ba\) ✓. En nombres décimaux, les racines valent environ \(0.22\) et \(-2.22\), comme le montre le graphique.`],
      S`\(x=\frac{-2\pm\sqrt6}{2}\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 2 * x * x + 4 * x - 1, color: "violet" }], points: [{ x: 0.2247, y: 0, label: "(0.22, 0)", color: "amber" }, { x: -2.2247, y: 0, label: "(−2.22, 0)", color: "amber" }, { x: -1, y: -3, label: "(−1, −3)" }], step: { x: 1, y: 1 } })],
    ["Famille et discriminant", S`Trouve la fonction du second degré de zéros \(1\pm\sqrt3\) qui passe par \((0,-4)\), puis trouve \(k\) pour que \(y=k\) lui soit tangente.`,
      [S`<b>Famille.</b> Les facteurs se combinent en une différence de carrés : \(y=a\left[(x-1)^2-3\right]=a(x^2-2x-2)\).`,
        S`<b>Utilise le point.</b> \(-4=a(-2)\), donc \(a=2\). Cela donne \(y=2x^2-4x-4\).`,
        S`<b>Forme canonique.</b> \(y=2\left[(x-1)^2-3\right]=2(x-1)^2-6\).`,
        S`<b>Tangente.</b> Une droite horizontale ne touche une parabole qu'à son sommet; donc \(k=-6\).`,
        S`<b>Vérification avec \(D=0\).</b> \(2x^2-4x-4-k=0\) : \(D=16+8(4+k)=48+8k\). Poser \(D=0\) donne \(k=-6\) ✓`],
      S`\(y=2x^2-4x-4\); \(k=-6\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -7, ymax: 7 }, curves: [{ f: (x) => 2 * x * x - 4 * x - 4, color: "violet" }], lines: [{ m: 0, b: -6, color: "amber", dash: true }], points: [{ x: 1, y: -6, label: "(1, −6)" }, { x: 0, y: -4, label: "(0, −4)" }], step: { x: 1, y: 1 } })],
    ["Système linéaire-quadratique en contexte", S`Le revenu est \(R(x)=-x^2+20x\) et le coût est \(C(x)=4x+39\) (en milliers; \(x\) en milliers d'articles). Trouve les quantités au seuil de rentabilité.`,
      [S`<b>Sens.</b> Le seuil de rentabilité signifie que le revenu est égal au coût, c'est-à-dire là où les deux graphiques se rencontrent.`,
        S`<b>Pose-les égaux.</b> \(-x^2+20x=4x+39\).`,
        S`<b>Forme générale.</b> \(x^2-16x+39=0\).`,
        S`<b>Factorise.</b> Produit 39, somme \(-16\) : \(-3\) et \(-13\). Donc \((x-3)(x-13)=0\).`,
        S`<b>Vérification.</b> \(x=3\) : \(R=51\), \(C=51\) ✓. \(x=13\) : \(R=91\), \(C=91\) ✓. Entre ces valeurs, la courbe est au-dessus de la droite; l'entreprise fait donc un profit.`],
      "3000 et 13 000 articles",
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 110 }, curves: [{ f: (x) => -x * x + 20 * x, a: 0, b: 20, color: "violet" }], lines: [{ m: 4, b: 39, color: "blue" }], points: [{ x: 3, y: 51, label: "(3, 51)", color: "amber" }, { x: 13, y: 91, label: "(13, 91)", color: "amber" }], step: { x: 2, y: 10 } }, "violet : revenu, bleu : coût")],
  ]),

  practice([
    q("sommet", S`Trouve la valeur minimale de \(f(x)=2x^2-12x+23\).`, num(5),
      "Axe x = 3.", [S`\(18-36+23\).`], S`\(5\)`),
    q("résoudre", S`Résous \(x^2-2x-24=0\).`, roots(6, -4),
      "Factorise.", [S`\((x-6)(x+4)\).`], S`\(x=6,\ -4\)`),
    q("discriminant", S`Combien de zéros \(3x^2-6x+3\) a-t-elle?`, num(1),
      "D = 36 − 36.", [S`\(D=0\).`], S`\(1\)`),
    q("famille", S`Trouve \(a\) si \(y=a(x-2)(x-6)\) passe par \((4,-8)\).`, num(2),
      "Substitue.", [S`\(a(2)(-2)=-4a=-8\).`], S`\(2\)`),
    q("système", S`Combien de points \(y=x^2-3\) et \(y=-2x-5\) ont-elles en commun?`, num(0),
      "x² + 2x + 2 = 0.", [S`\(D=4-8<0\).`], S`\(0\)`),
  ]),

  ...hard([
    ["Revenu et hausse de prix", S`Un centre sportif compte 600 membres qui paient 50 dollars par mois. Chaque hausse de 2 dollars fait perdre 10 membres. Quel tarif maximise le revenu, et pour quels tarifs le revenu est-il d'au moins 31 500 dollars?`,
      [S`\(R(x)=(50+2x)(600-10x)\); zéros \(-25\) et 60; axe \(x=17.5\) : tarif de 85 dollars, \(R=85(425)=36\,125\).`, S`\(R\ge31500\) : \(-20x^2+700x+30000\ge31500\Rightarrow x^2-35x+75\le0\).`, S`\(x=\frac{35\pm\sqrt{925}}{2}\approx2.29\) et \(32.71\) : des tarifs d'environ 54.59 à 115.41 dollars.`],
      "85 dollars par mois; des tarifs entre environ 54.59 et 115.41 dollars donnent au moins 31 500 dollars",
      plane({ view: { xmin: -26, xmax: 62, ymin: 0, ymax: 40000 }, curves: [{ f: (x) => (50 + 2 * x) * (600 - 10 * x), a: -25, b: 60, color: "violet" }], lines: [{ m: 0, b: 31500, color: "amber", dash: true }], points: [{ x: 17.5, y: 36125, label: "(17.5, 36 125)" }], step: { x: 10, y: 5000 }, xlabel: "paliers x", ylabel: "R" })],
    ["Tangente à un membre d'une famille", S`Pour quelles valeurs de \(a\) la droite \(y=4x-3\) est-elle tangente à \(y=a(x-1)(x-3)\)?`,
      [S`\(a(x^2-4x+3)=4x-3\Rightarrow ax^2-(4a+4)x+(3a+3)=0\).`, S`\(D=(4a+4)^2-4a(3a+3)=16a^2+32a+16-12a^2-12a=4a^2+20a+16\).`, S`\(D=0\Rightarrow a^2+5a+4=0\Rightarrow a=-1\) ou \(a=-4\).`],
      S`\(a=-1\) ou \(a=-4\)`],
  ], [
    q("difficile", S`\(y=x^2+bx+16\) a exactement un zéro et \(b>0\). Trouve \(b\).`, num(8),
      "D = 0.", [S`\(b^2=64\).`], S`\(8\)`),
    q("difficile", S`Une parabole a le sommet \((3,-8)\) et un zéro en \(x=5\). Trouve son ordonnée à l'origine.`, num(10),
      "L'autre zéro est 1; trouve a.", [S`\(y=a(x-3)^2-8\); \(4a-8=0\Rightarrow a=2\); \(2(9)-8\).`], S`\(10\)`),
    q("difficile", S`\(y=x+k\) rencontre \(y=-x^2+4x\) deux fois. Quel est le plus grand entier \(k\)?`, num(2),
      "−x² + 3x − k = 0, D > 0.", [S`\(9-4k>0\Rightarrow k<2.25\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Que dois-je mémoriser?", "Les trois formes, la formule, D = b² − 4ac, et axe = moyenne des zéros."],
      ["Comment poser un problème d'optimisation?", "Écris la quantité à optimiser sous forme de produit de deux expressions linéaires, trouve les zéros et fais-en la moyenne."],
      ["Quand une racine est-elle inadmissible?", "Lorsqu'elle donne une longueur ou un temps négatif, ou qu'elle est hors du domaine du contexte."],
      ["Quel lien y a-t-il entre les familles et les systèmes?", "Une tangente à un membre d'une famille donne une condition sur a — résous D = 0 pour la trouver."],
      ["Comment devrais-je réviser?", "Refais sans notes les problèmes de niveau difficile de chaque leçon, puis vérifie avec les outils d'exploration."],
    ],
    summary: [
      "Formes : factorisée (zéros), canonique (max./min.), générale (ordonnée à l'origine).",
      "Optimiser au sommet; résoudre par factorisation ou avec la formule.",
      "Le discriminant compte les zéros et les intersections.",
      "Familles : y = a(x − r)(x − s); un point fixe a.",
    ],
    next: "Le chapitre 4 étudie les fonctions exponentielles.",
  }),
];
