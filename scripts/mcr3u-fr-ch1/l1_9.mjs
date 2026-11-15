// MCR3U-FR 1.9 — Révision du chapitre 1 : fonctions, notation, fonctions de base, domaine et image, réciproques,
// transformations. Miroir de ../mcr3u-ch1/l1_9.mjs (c horizontal, d vertical en français).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";
const S = String.raw;

export const TITLE = "1.9 Révision du chapitre 1";
export const ID = lessonId(1, 9);

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Révision du chapitre 1",
    overview: String.raw`Cette révision rassemble tout le chapitre. Parcours le tableau récapitulatif, puis les exemples variés, qui combinent chacun des idées de deux leçons ou plus. Termine par la pratique corrigée et les problèmes de niveau difficile — ils sont du niveau d'un test de chapitre.`,
    goals: [
      "déterminer si une relation est une fonction et utiliser la notation fonctionnelle;",
      "donner des domaines et des images, y compris des restrictions et des contextes;",
      "trouver et tracer des réciproques, en restreignant le domaine au besoin;",
      "tracer y = af(k(x − c)) + d pour les cinq fonctions de base;",
      "résoudre des problèmes à plusieurs étapes qui combinent ces habiletés.",
    ],
    curriculum: "A1.1–A1.9 (caractéristiques des fonctions : représenter des fonctions, domaine et image, réciproques, transformations de f(x) = x, x², √x, 1/x)",
    prior: [
      ["Quel test indique qu'un graphique représente une fonction?", "Le test de la droite verticale."],
      [String.raw`Quelle est la règle de correspondance pour \(y=af(k(x-c))+d\)?`, String.raw`\((x,y)\to\left(\frac xk+c,\ ay+d\right)\).`],
      [String.raw`Comment trouve-t-on \(f^{-1}\) algébriquement?`, "On échange x et y, puis on isole y."],
    ],
    words: [
      ["1.1–1.2", "fonction, test de la droite verticale, f(a), résoudre f(x) = v", ""],
      ["1.3–1.4", "fonctions de base, domaine et image, restrictions", ""],
      ["1.5", "réciproque, réflexion par rapport à y = x", ""],
      ["1.6–1.8", "a, k, c, d et la règle de correspondance", ""],
    ],
  }),

  section("📌 Le chapitre en une page", String.raw`
  ${table(["Habileté", "Fait clé", "Vérification rapide"], [
    ["Fonction?", "une seule sortie par entrée", "test de la droite verticale"],
    ["\\(f(a)\\)", "remplacer chaque x par a", "le point \\((a,f(a))\\) est sur le graphique"],
    ["Domaine", "racines : intérieur \\(\\ge0\\); dénominateurs \\(\\ne0\\); contexte", "ombre sur l'axe des x"],
    ["Image", "sommet / point de départ / asymptote", "ombre sur l'axe des y"],
    ["Réciproque", "échanger x et y; réflexion par rapport à \\(y=x\\)", "\\(f(f^{-1}(x))=x\\)"],
    ["Transformations", "\\((x,y)\\to(\\frac xk+c,\\ ay+d)\\)", "substituer un point image"],
  ])}
  ${keyIdea("La plupart des questions de test combinent deux idées : une transformation et son domaine ou son image, une réciproque et une restriction, ou un contexte et la notation fonctionnelle.")}`),

  section("📌 Explore", String.raw`<p>Utilise l'explorateur pour vérifier tes esquisses dans les exemples et les problèmes de niveau difficile.</p>`),

  widget("funcTransform", { parent: "recip", show: ["a", "k", "d", "c"], init: { a: 2, k: 1, d: -2, c: 1 } }),

  examples([
    ["Fonction et notation", S`\(g(x)=\frac{12}{x-1}\). \(g\) est-elle une fonction? Trouve \(g(5)\) et résous \(g(x)=-4\).`,
      [S`<b>Est-ce une fonction?</b> Pour chaque entrée permise, la règle effectue une soustraction et une division, donc il n'y a qu'une seule sortie. La seule entrée exclue est \(x=1\), où le dénominateur vaut 0.`,
        S`<b>Évalue.</b> \(g(5)=\frac{12}{5-1}=\frac{12}4=3\).`,
        S`<b>Résous.</b> \(\frac{12}{x-1}=-4\). Multiplie les deux membres par \(x-1\) : \(12=-4(x-1)\). Divise par \(-4\) : \(x-1=-3\). Donc \(x=-2\).`,
        S`<b>Vérifie.</b> \(g(-2)=\frac{12}{-3}=-4\) ✓. Le graphique réussit le test de la droite verticale et montre les deux points.`],
      S`une fonction; \(g(5)=3\); \(x=-2\)`,
      plane({ view: { xmin: -6, xmax: 8, ymin: -8, ymax: 8 }, curves: [{ f: (x) => 12 / (x - 1), color: "violet" }], vlines: [{ x: 1, color: "gray", dash: true }], points: [{ x: 5, y: 3, label: "(5, 3)", color: "amber" }, { x: -2, y: -4, label: "(−2, −4)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Domaine et image à partir d'une transformation", S`Donne le domaine et l'image de \(y=-3\sqrt{x+2}+5\) et esquisse-la.`,
      [S`<b>Lis les paramètres.</b> \(a=-3\) : étirement de facteur 3 et réflexion par rapport à l'axe des x. \(c=-2\) : 2 vers la gauche. \(d=5\) : 5 vers le haut. La règle est \((x,y)\to(x-2,\ -3y+5)\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=\\sqrt x\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((4,2)\\)", "\\((9,3)\\)"], ["image", "\\((-2,5)\\)", "\\((-1,2)\\)", "\\((2,-1)\\)", "\\((7,-4)\\)"])}`,
        S`<b>Domaine.</b> \(x+2\ge0\), donc \(x\ge-2\).`,
        S`<b>Image.</b> La réflexion fait descendre la courbe à partir de son point de départ \((-2,5)\), donc 5 est la plus grande valeur : \(y\le5\).`,
        S`<b>Vérifie.</b> En \(x=2\) : \(-3\sqrt4+5=-1\) ✓`],
      S`domaine \(x\ge-2\), image \(y\le5\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -5, ymax: 7 }, curves: [{ f: (x) => -3 * Math.sqrt(x + 2) + 5, a: -2, color: "green" }], points: [{ x: -2, y: 5, label: "(−2, 5)" }, { x: -1, y: 2, label: "(−1, 2)" }, { x: 2, y: -1, label: "(2, −1)" }, { x: 7, y: -4, label: "(7, −4)" }], step: { x: 1, y: 1 } })],
    ["Réciproque avec une restriction", S`\(f(x)=(x+4)^2-3\) pour \(x\ge-4\). Trouve \(f^{-1}\), son domaine et son image.`,
      [S`<b>Échange et résous.</b> \(x=(y+4)^2-3\). Ajoute 3 : \((y+4)^2=x+3\). Prends les racines : \(y+4=\pm\sqrt{x+3}\).`,
        S`<b>Choisis le signe.</b> Les sorties de \(f^{-1}\) sont les entrées de \(f\), donc \(y\ge-4\). Cela signifie \(y+4\ge0\), c'est-à-dire la racine positive : \(y=-4+\sqrt{x+3}\).`,
        S`<b>Domaine et image.</b> Ils s'échangent. Le sommet de \(f\) est \((-4,-3)\), donc \(f\) a pour image \(y\ge-3\). Ainsi, \(f^{-1}\) a pour domaine \(x\ge-3\) et pour image \(y\ge-4\).`,
        S`<b>Vérifie.</b> \(f(-2)=4-3=1\), et \(f^{-1}(1)=-4+\sqrt4=-2\) ✓`],
      S`\(f^{-1}(x)=-4+\sqrt{x+3}\), domaine \(x\ge-3\), image \(y\ge-4\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, curves: [{ f: (x) => (x + 4) ** 2 - 3, a: -4, color: "blue" }, { f: (x) => -4 + Math.sqrt(x + 3), a: -3, color: "red" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [{ x: -2, y: 1, label: "(−2, 1)", color: "blue" }, { x: 1, y: -2, label: "(1, −2)", color: "red" }, { x: -4, y: -3, label: "(−4, −3)", color: "blue" }, { x: -3, y: -4, label: "(−3, −4)", color: "red" }], step: { x: 1, y: 1 } }, "en bleu f, en rouge sa réciproque, en pointillé y = x")],
    ["Équation à partir d'un graphique", "Une parabole a pour sommet (3, −2) et passe par (5, 6). Décris-la comme une transformation de y = x² et écris son équation.",
      [S`<b>Utilise le sommet.</b> \(y=x^2\) a pour sommet \((0,0)\). Le déplacer en \((3,-2)\) donne \(y=a(x-3)^2-2\).`,
        S`<b>Utilise l'autre point.</b> Substitue \((5,6)\) : \(6=a(5-3)^2-2\), donc \(6=4a-2\).`,
        S`<b>Résous.</b> Ajoute 2 : \(8=4a\), donc \(a=2\).`,
        S`<b>Décris.</b> \(a=2>0\) : un étirement vertical de facteur 2, sans réflexion. Puis 3 vers la droite et 2 vers le bas.`,
        S`<b>Vérifie par symétrie.</b> L'axe est \(x=3\), donc \((1,6)\) doit aussi être sur la courbe : \(2(-2)^2-2=6\) ✓`],
      S`\(y=2(x-3)^2-2\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -3, ymax: 9 }, curves: [{ f: (x) => 2 * (x - 3) ** 2 - 2, color: "blue" }], points: [{ x: 3, y: -2, label: "(3, −2)", color: "amber" }, { x: 5, y: 6, label: "(5, 6)" }, { x: 1, y: 6, label: "(1, 6)" }], step: { x: 1, y: 1 } })],
    ["Un contexte", S`Une piscine se vide de sorte que la profondeur de l'eau est \(D(t)=0.002(t-30)^2\) mètres après \(t\) minutes, jusqu'à ce qu'elle soit vide. Trouve un domaine et une image qui ont du sens, \(D(10)\), et le moment où la profondeur est de 0.2 m.`,
      [S`<b>Domaine.</b> Le modèle commence à \(t=0\) et s'arrête lorsque la piscine est vide. \(D=0\) lorsque \(t=30\), donc \(0\le t\le30\).`,
        S`<b>Image.</b> La profondeur part de \(D(0)=0.002(900)=1.8\) et diminue jusqu'à 0. Donc \(0\le D\le1.8\).`,
        S`<b>Évalue.</b> \(D(10)=0.002(-20)^2=0.002(400)=0.8\) m.`,
        S`<b>Résous pour la profondeur.</b> \(0.002(t-30)^2=0.2\). Divise par 0.002 : \((t-30)^2=100\). Prends les racines : \(t-30=\pm10\), donc \(t=20\) ou \(t=40\).`,
        S`<b>Utilise le domaine.</b> \(t=40\) survient après que la piscine est vide, sur la partie de la parabole qui ne s'applique pas. Donc \(t=20\).`,
        S`<b>Vérifie.</b> \(D(20)=0.002(100)=0.2\) ✓`],
      S`domaine \(0\le t\le30\), image \(0\le D\le1.8\); \(D(10)=0.8\) m; \(t=20\) min`,
      plane({ view: { xmin: 0, xmax: 34, ymin: 0, ymax: 2 }, curves: [{ f: (t) => 0.002 * (t - 30) ** 2, a: 0, b: 30, color: "violet" }], lines: [{ m: 0, b: 0.2, color: "amber", dash: true }], points: [{ x: 0, y: 1.8, label: "(0, 1.8)" }, { x: 10, y: 0.8, label: "(10, 0.8)" }, { x: 20, y: 0.2, label: "(20, 0.2)", color: "amber" }, { x: 30, y: 0, label: "(30, 0)" }], step: { x: 5, y: 0.2 }, xlabel: "t (min)", ylabel: "D (m)" })],
  ]),

  practice([
    q("test de fonction", String.raw`Combien de ces relations sont des fonctions : \(y=x^2-1\), \(x^2+y^2=4\), \(y=\sqrt x\), \(x=y^2\)?`, num(2),
      "Isole y dans chacune.", [String.raw`Le cercle et \(x=y^2\) donnent un \(\pm\).`], String.raw`\(2\)`),
    q("notation", String.raw`Pour \(f(x)=2x^2-3x\), trouve \(f(-2)\).`, num(14),
      "Le carré d'abord.", [String.raw`\(8+6\).`], String.raw`\(14\)`),
    q("domaine", String.raw`Quelle est la valeur exclue de \(y=\frac{4}{2x+5}\)?`, num(-2.5),
      "Dénominateur = 0.", [String.raw`\(2x+5=0\).`], String.raw`\(-2.5\)`),
    q("réciproque", String.raw`Trouve \(f^{-1}(x)\) pour \(f(x)=5x-2\).`, expr("(x+2)/5"),
      "Additionne 2, puis divise par 5.", [String.raw`Échange : \(x=5y-2\Rightarrow y=\frac{x+2}{5}\).`], String.raw`\(f^{-1}(x)=\frac{x+2}{5}\)`),
    q("transformation", String.raw`Quelle équation correspond à \(y=|x|\) étirée verticalement par un facteur 2, puis translatée de 1 vers la gauche et de 3 vers le bas?`, choice([String.raw`\(y=2|x+1|-3\)`, String.raw`\(y=2|x-1|-3\)`, String.raw`\(y=|2x+1|-3\)`, String.raw`\(y=2|x+1|+3\)`], 0),
      "1 vers la gauche signifie x + 1.", [String.raw`\(a=2\), \(c=-1\), \(d=-3\).`], String.raw`\(y=2|x+1|-3\)`),
  ]),

  ...hard([
    ["Transformation, réciproque et domaine ensemble", String.raw`\(g(x)=\tfrac12(x-2)^2+1\) pour \(x\le2\). a) Décris \(g\) comme une transformation de \(y=x^2\). b) Trouve \(g^{-1}\). c) Où \(g\) et \(g^{-1}\) se rencontrent-elles?`,
      [String.raw`a) Compression verticale de facteur \(\tfrac12\), puis 2 vers la droite et 1 vers le haut (moitié gauche de la parabole).`, String.raw`b) Échange : \(x=\tfrac12(y-2)^2+1\Rightarrow(y-2)^2=2(x-1)\Rightarrow y=2-\sqrt{2(x-1)}\) (signe moins, puisque \(y\le2\)).`, String.raw`c) Un point commun \((p,q)\) exige \(g(p)=q\) et \(g(q)=p\). En soustrayant, on obtient \(p=q\) ou \(p+q=2\); comme \(p,q\ge1\) (l'image de \(g\)) et \(g(1)=1.5\ne1\), la deuxième possibilité est exclue, donc le point est sur \(y=x\).`, String.raw`Résous \(\tfrac12(x-2)^2+1=x\Rightarrow x^2-6x+6=0\Rightarrow x=3-\sqrt3\approx1.27\) (la racine \(3+\sqrt3\) n'est pas dans \(x\le2\)).`],
      String.raw`\(g^{-1}(x)=2-\sqrt{2(x-1)}\); elles se rencontrent sur \(y=x\) en \(x=3-\sqrt3\approx1.27\)`],
    ["Lire des paramètres à partir de deux graphiques", String.raw`Le graphique de \(y=f(x)\) a un sommet en \((1,4)\) et une abscisse à l'origine égale à \(3\). Trouve le sommet et les abscisses à l'origine de \(y=-2f(3x)+8\).`,
      [String.raw`Correspondance \((x,y)\to\left(\tfrac x3,\ -2y+8\right)\).`, String.raw`Sommet \((1,4)\to\left(\tfrac13,\ 0\right)\).`, String.raw`Les nouvelles abscisses à l'origine exigent \(-2y+8=0\Rightarrow y=4\) : le seul point d'origine avec \(y=4\) est le sommet, donc l'image touche l'axe des x une seule fois, en \(x=\tfrac13\).`],
      String.raw`sommet \(\left(\tfrac13,0\right)\); une seule abscisse à l'origine, \(\tfrac13\)`],
  ], [
    q("difficile", String.raw`\(f(x)=\sqrt{x}\). Le graphique de \(y=a\sqrt{x-c}+d\) commence en \((-1,2)\) et passe par \((8,-4)\). Trouve \(a\).`, num(-2),
      "c et d proviennent du point de départ.", [String.raw`\(-4=a\sqrt9+2\Rightarrow3a=-6\).`], String.raw`\(-2\)`),
    q("difficile", String.raw`\(f\) a pour image \(y\ge-3\). Quelle est la plus petite valeur de l'image de \(y=4f(2x-1)+5\)?`, num(-7),
      "Seuls a et d influent sur l'image.", [String.raw`\(4(-3)+5\).`], String.raw`\(-7\)`),
    q("difficile", String.raw`\(h(t)=-5(t-2)^2+45\) est la hauteur d'une balle (m). Pendant combien de secondes la balle est-elle à au moins 25 m de hauteur?`, num(4),
      "Résous h(t) = 25 et trouve la durée entre les deux réponses.", [String.raw`\((t-2)^2=4\Rightarrow t=0\) ou \(t=4\).`], String.raw`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Que dois-je mémoriser?", "Les points clés des cinq fonctions de base, la règle de correspondance et les restrictions dues aux racines et aux dénominateurs. Tout le reste peut se déduire."],
      ["Comment éviter les erreurs de signe avec c?", "Mets k en évidence, puis pose la parenthèse intérieure égale à zéro : cette valeur de x est c."],
      ["Quand une réciproque n'est-elle pas une fonction?", "Lorsque f n'est pas un à un, p. ex. une parabole complète. Restreins le domaine à un seul côté du sommet."],
      ["Qu'est-ce qui rend un domaine « sensé » dans un contexte?", "Les valeurs qui peuvent réellement se produire : le temps du début à la fin, des longueurs non négatives, des nombres entiers d'objets."],
      ["Comment étudier pour le test?", "Refais sans regarder les problèmes de niveau difficile de chaque leçon, puis vérifie avec les explorateurs."],
    ],
    summary: [
      "Fonctions : une seule sortie par entrée; notation f(a).",
      "Domaine et image : restrictions dues aux racines, aux dénominateurs et au contexte.",
      "Réciproques : échanger, réfléchir par rapport à y = x, restreindre au besoin.",
      "Transformations : (x, y) → (x/k + c, ay + d).",
    ],
    next: "Le chapitre 2 porte sur les expressions algébriques équivalentes.",
  }),
];
