// MCR3U-FR 3.4 — Valeurs maximales et minimales : compléter le carré (a ≠ 1, fractions), factorisation partielle, moyenne des zéros,
// revenu selon les hausses de prix, profit = revenu − coût, optimisation d'aires
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "3.4 Valeurs maximales et minimales";
export const ID = lessonId(3, 4);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🏔️",
    title: "Valeurs maximales et minimales",
    overview: S`Le sommet d'une parabole donne la plus grande ou la plus petite valeur d'une fonction du second degré — le meilleur prix, la plus grande aire, le coût le plus bas. Dans cette leçon, tu le trouveras algébriquement de trois façons (compléter le carré, la factorisation partielle et la moyenne des zéros) et tu l'utiliseras pour résoudre des problèmes de revenu, de profit et d'aire.`,
    goals: [
      "compléter le carré, y compris lorsque a ≠ 1 ou que b est impair;",
      "utiliser la factorisation partielle pour trouver l'axe sans les zéros;",
      "trouver le sommet en faisant la moyenne des zéros;",
      "construire des fonctions de revenu et de profit et les maximiser;",
      "interpréter la valeur optimale en contexte (y compris les réponses en nombres entiers).",
    ],
    curriculum: "A2.2 (déterminer la valeur maximale ou minimale d'une fonction du second degré de la forme f(x) = ax² + bx + c à l'aide d'une méthode algébrique), A2.3 (résoudre des problèmes portant sur des fonctions du second degré tirés de situations réelles)",
    prior: [
      [S`Développe \((x-4)^2\).`, S`\(x^2-8x+16\).`],
      [S`Quel nombre complète \(x^2+10x+\square\) pour former un carré?`, S`\(25\).`],
      [S`Factorise \(3x^2-12x\).`, S`\(3x(x-4)\).`],
    ],
    words: [
      ["Valeur optimale", "le maximum ou le minimum de la fonction", ""],
      ["Compléter le carré", "réécrire \\(ax^2+bx+c\\) sous la forme \\(a(x-h)^2+k\\)", ""],
      ["Factorisation partielle", "\\(ax^2+bx+c=x(ax+b)+c\\)", ""],
      ["Revenu / profit", "prix × quantité / revenu − coût", ""],
    ],
  }),

  section("📌 Trois méthodes algébriques", S`
  ${table(["Méthode", "Comment", "Idéale lorsque"], [
    ["Compléter le carré", "mettre \\(a\\) en évidence dans les termes en x, ajouter et soustraire \\((\\frac{b}{2a})^2\\) à l'intérieur", "on veut la forme canonique"],
    ["Factorisation partielle", "\\(x(ax+b)+c\\) vaut \\(c\\) en \\(x=0\\) et en \\(x=-\\frac ba\\); l'axe est à mi-chemin", "elle ne se factorise pas"],
    ["Moyenne des zéros", "axe \\(=\\frac{r+s}2\\), puis substituer", "elle se factorise, ou elle est donnée sous forme factorisée"],
  ])}
  ${keyIdea(S`Les trois méthodes donnent le même axe \(x=-\frac{b}{2a}\). Substitue cette valeur de x pour obtenir la valeur optimale.`)}`),

  section("📌 Explore : le revenu", S`<p>Un magasin augmente son prix par paliers égaux et perd des clients à chaque palier. Le revenu \(=\) prix \(\times\) quantité est le produit de deux facteurs linéaires — une parabole dont les zéros sont faciles à lire. Le meilleur nombre de paliers est à mi-chemin entre eux.</p>`),

  widget("revenueLab", { init: [18, 400, 1, 15] }),

  section("📌 Compléter le carré avec des fractions", S`
  <p>\(f(x)=x^2+5x-2\) : la moitié de 5 est \(\tfrac52\), et \((\tfrac52)^2=6.25\) :</p>
  <p style="text-align:center">\(f(x)=(x^2+5x+6.25)-6.25-2=(x+2.5)^2-8.25\)</p>
  ${plane({ view: { xmin: -7, xmax: 3, ymin: -9, ymax: 5 }, curves: [{ f: (x) => x * x + 5 * x - 2, color: "violet" }], points: [{ x: -2.5, y: -8.25, label: "(−2.5, −8.25)" }], step: { x: 1, y: 1 } })}
  ${watchOut([
    "Mets a en évidence seulement dans les termes en x, pas dans la constante.",
    "Lorsque le carré sort de la parenthèse, il est multiplié par a.",
    "Revenu = prix × nombre vendu — les deux changent avec le nombre de paliers.",
    "Si les paliers doivent être des nombres entiers, teste les nombres entiers les plus proches du sommet.",
  ])}`),

  examples([
    ["Compléter le carré, a ≠ 1", S`Trouve le minimum de \(f(x)=3x^2-12x+7\).`,
      [S`<b>But.</b> La forme canonique montre directement la valeur optimale; on complète donc le carré.`,
        S`<b>Mets \(a\) en évidence dans les termes en \(x\).</b> \(f(x)=3(x^2-4x)+7\). Laisse la constante à l'extérieur.`,
        S`<b>Ajoute et soustrais le carré.</b> La moitié de \(-4\) est \(-2\), et \((-2)^2=4\). Donc \(f(x)=3(x^2-4x+4-4)+7\).`,
        S`<b>Forme le carré parfait.</b> \(f(x)=3(x-2)^2-3(4)+7\). Le \(-4\) sort multiplié par 3.`,
        S`<b>Simplifie.</b> \(f(x)=3(x-2)^2-5\). Puisque \(a=3>0\), le sommet \((2,-5)\) est un minimum.`,
        S`<b>Vérification.</b> \(f(2)=12-24+7=-5\) ✓`],
      S`minimum \(-5\) en \(x=2\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 10 }, curves: [{ f: (x) => 3 * x * x - 12 * x + 7, color: "violet" }], vlines: [{ x: 2, color: "gray", dash: true }], points: [{ x: 2, y: -5, label: "(2, −5)", color: "amber" }, { x: 0, y: 7, label: "(0, 7)" }, { x: 4, y: 7, label: "(4, 7)" }], step: { x: 1, y: 2 } })],
    ["Factorisation partielle", S`Trouve le maximum de \(f(x)=-2x^2+10x+3\).`,
      [S`<b>Idée.</b> On n'a pas besoin des zéros, seulement de deux points à la même hauteur, car l'axe est à mi-chemin entre eux.`,
        S`<b>Factorise les termes en \(x\).</b> \(f(x)=-2x(x-5)+3\).`,
        S`<b>Deux hauteurs égales.</b> Lorsque \(x=0\) ou \(x=5\), le produit vaut 0; donc \(f(0)=f(5)=3\).`,
        S`<b>Axe.</b> \(x=\frac{0+5}2=2.5\).`,
        S`<b>Maximum.</b> \(f(2.5)=-2(6.25)+25+3=-12.5+25+3=15.5\). Puisque \(a=-2<0\), c'est un maximum.`,
        S`<b>Vérification avec la formule.</b> \(-\frac b{2a}=-\frac{10}{-4}=2.5\) ✓`],
      S`maximum \(15.5\) en \(x=2.5\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 17 }, curves: [{ f: (x) => -2 * x * x + 10 * x + 3, color: "violet" }], points: [{ x: 0, y: 3, label: "(0, 3)", color: "green" }, { x: 5, y: 3, label: "(5, 3)", color: "green" }, { x: 2.5, y: 15.5, label: "(2.5, 15.5)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Un b impair", S`Écris \(f(x)=x^2+5x-2\) sous forme canonique.`,
      [S`<b>Trouve le carré.</b> La moitié de 5 est \(2.5\), et \(2.5^2=6.25\). Un \(b\) impair donne simplement un nombre décimal ou une fraction.`,
        S`<b>Ajoute-le et soustrais-le.</b> \(f(x)=x^2+5x+6.25-6.25-2\).`,
        S`<b>Forme le carré.</b> \(x^2+5x+6.25=(x+2.5)^2\).`,
        S`<b>Regroupe les constantes.</b> \(-6.25-2=-8.25\), donc \(f(x)=(x+2.5)^2-8.25\).`,
        S`<b>Vérification.</b> Développe : \(x^2+5x+6.25-8.25=x^2+5x-2\) ✓. Le sommet \((-2.5,-8.25)\) est un minimum, puisque \(a=1>0\).`],
      S`\(f(x)=(x+2.5)^2-8.25\); minimum \(-8.25\)`,
      plane({ view: { xmin: -7, xmax: 2, ymin: -10, ymax: 6 }, curves: [{ f: (x) => x * x + 5 * x - 2, color: "violet" }], points: [{ x: -2.5, y: -8.25, label: "(−2.5, −8.25)", color: "amber" }, { x: 0, y: -2, label: "(0, −2)" }, { x: -5, y: -2, label: "(−5, −2)" }], step: { x: 1, y: 2 } })],
    ["Revenu maximal", S`Les billets coûtent 18 dollars et on en vend 400. Chaque hausse de 1 dollar fait perdre 15 ventes. Quel prix maximise le revenu?`,
      [S`<b>Construis le modèle.</b> Soit \(x\) le nombre de hausses de 1 dollar. Le prix est \(18+x\) et les ventes sont \(400-15x\). Revenu = prix × ventes : \(R(x)=(18+x)(400-15x)\).`,
        S`<b>Zéros.</b> \(18+x=0\) donne \(x=-18\). \(400-15x=0\) donne \(x=\frac{80}3\approx26.67\).`,
        S`<b>Axe.</b> À mi-chemin : \(x=\frac{-18+26.67}2\approx4.33\).`,
        S`<b>Dollars entiers.</b> Les prix augmentent par dollars entiers; compare donc les valeurs les plus proches. ${tv(["\\(x\\)", "3", "4", "5"], ["prix", "21", "22", "23"], ["ventes", "355", "340", "325"], ["revenu", "7455", "7480", "7475"])}`,
        S`<b>Décide.</b> Le plus grand revenu est en \(x=4\); le prix est donc \(18+4=22\) dollars.`],
      "demander 22 dollars : revenu de 7480 dollars",
      plane({ view: { xmin: -20, xmax: 30, ymin: -500, ymax: 8500 }, curves: [{ f: (x) => (18 + x) * (400 - 15 * x), color: "violet" }], points: [{ x: -18, y: 0, label: "(−18, 0)" }, { x: 26.67, y: 0, label: "(26.67, 0)" }, { x: 4, y: 7480, label: "(4, 7480)", color: "amber" }], step: { x: 5, y: 1000 }, ylabel: "R" })],
    ["Profit maximal", S`Le revenu d'une entreprise est \(R(x)=-2x^2+60x\) et son coût est \(C(x)=10x+200\) (en milliers de dollars, \(x\) en milliers d'articles). Trouve le profit maximal.`,
      [S`<b>Construis la fonction profit.</b> Profit = revenu − coût. Soustrais tout le coût : \(P(x)=-2x^2+60x-10x-200=-2x^2+50x-200\).`,
        S`<b>Axe.</b> \(x=-\frac b{2a}=-\frac{50}{-4}=12.5\).`,
        S`<b>Maximum.</b> \(P(12.5)=-2(156.25)+625-200=-312.5+625-200=112.5\).`,
        S`<b>Interprète les unités.</b> \(x=12.5\) signifie 12 500 articles, et \(P=112.5\) signifie 112.5 milliers de dollars.`,
        S`<b>Vérification avec les zéros.</b> \(P=-2(x-5)(x-20)\), de zéros 5 et 20. Leur point milieu est \(12.5\) ✓`],
      "112.5 milliers de dollars pour 12 500 articles",
      plane({ view: { xmin: 0, xmax: 25, ymin: -60, ymax: 130 }, curves: [{ f: (x) => -2 * x * x + 50 * x - 200, color: "violet" }], points: [{ x: 5, y: 0, label: "(5, 0)" }, { x: 20, y: 0, label: "(20, 0)" }, { x: 12.5, y: 112.5, label: "(12.5, 112.5)", color: "amber" }], step: { x: 5, y: 20 }, ylabel: "P" })],
  ]),

  practice([
    q("compléter le carré", S`Trouve la valeur minimale de \(f(x)=x^2-8x+21\).`, num(5),
      "La moitié de −8 est −4.", [S`\((x-4)^2-16+21\).`], S`\(5\)`),
    q("a ≠ 1", S`Trouve la valeur maximale de \(f(x)=-4x^2+24x-11\).`, num(25),
      "Axe −b/(2a).", [S`\(x=3\) : \(-36+72-11\).`], S`\(25\)`),
    q("axe", S`Trouve l'abscisse du sommet de \(f(x)=5x^2+15x-2\).`, num(-1.5),
      "Factorisation partielle : 5x(x + 3) − 2.", [S`À mi-chemin entre 0 et −3.`], S`\(-1.5\)`),
    q("revenu", S`\(R(x)=(10+x)(200-8x)\). Pour quelle valeur de \(x\) le revenu est-il le plus grand?`, num(7.5),
      "Fais la moyenne des zéros.", [S`Zéros \(-10\) et \(25\).`], S`\(7.5\)`),
    q("profit", S`Le profit est \(P(x)=-x^2+14x-24\) (en milliers de dollars). Trouve le profit maximal.`, num(25),
      "x = 7.", [S`\(-49+98-24\).`], S`\(25\) milliers de dollars`),
  ]),

  ...hard([
    ["Trois enclos", S`Un agriculteur dispose de 240 m de clôture pour construire un rectangle divisé en 3 enclos par 2 clôtures parallèles à la largeur. Quelles dimensions donnent la plus grande aire totale?`,
      [S`Avec une largeur \(w\) et une longueur \(L\) : \(4w+2L=240\Rightarrow L=120-2w\).`, S`\(A(w)=w(120-2w)\), zéros 0 et 60, axe \(w=30\).`, S`\(L=60\), \(A=1800\).`],
      "30 m sur 60 m, 1800 m²",
      plane({ view: { xmin: 0, xmax: 62, ymin: 0, ymax: 2000 }, curves: [{ f: (w) => w * (120 - 2 * w), a: 0, b: 60, color: "violet" }], points: [{ x: 30, y: 1800, label: "(30, 1800)" }], step: { x: 10, y: 200 }, xlabel: "w (m)", ylabel: "A (m²)" })],
    ["Demande et coût", S`Le prix qui permet de vendre \(x\) milliers d'articles est \(p(x)=-0.5x+25\) dollars, et le coût est \(C(x)=5x+60\) milliers de dollars. Trouve le prix qui maximise le profit et le profit maximal.`,
      [S`Revenu \(R=x(-0.5x+25)=-0.5x^2+25x\).`, S`Profit \(P=-0.5x^2+20x-60\); axe \(x=20\).`, S`\(P(20)=-200+400-60=140\); prix \(p(20)=15\).`],
      "prix de 15 dollars, profit de 140 milliers de dollars"],
  ], [
    q("difficile", S`Trouve la valeur minimale de \(x^2+7x+15\).`, num(2.75),
      "La moitié de 7 est 3.5.", [S`\((x+3.5)^2-12.25+15\).`], S`\(2.75\)`),
    q("difficile", "Deux nombres ont une différence de 10. Quel est le plus petit produit possible?", num(-25),
      "Utilise x et x + 10.", [S`\(x(x+10)\) a son sommet en \(x=-5\).`], S`\(-25\)`),
    q("difficile", S`Un kiosque vend 800 boissons à 4 dollars. Chaque hausse de 0.25 dollar fait perdre 40 ventes. Quel est le revenu maximal?`, num(3240),
      "R(x) = (4 + 0.25x)(800 − 40x).", [S`Zéros \(-16\) et 20; axe \(x=2\) : prix 4.50, 720 boissons.`], S`\(3240\) dollars`),
  ]),

  wrapUp({
    qas: [
      ["Quelle méthode est la plus rapide?", "Si l'expression se factorise, fais la moyenne des zéros. Sinon, la factorisation partielle donne l'axe rapidement; compléter le carré donne la forme canonique complète."],
      ["Pourquoi le revenu est-il une parabole?", "C'est (prix) × (quantité), et les deux sont linéaires par rapport au nombre de paliers; le produit est donc du second degré."],
      ["Et si le sommet n'est pas un nombre entier?", "Si seuls des paliers entiers ont du sens, compare les deux nombres entiers les plus proches."],
      ["Le profit maximal est-il le même que le revenu maximal?", "Non. Les coûts déplacent le sommet : le profit atteint son maximum pour une autre quantité."],
      ["Comment savoir s'il s'agit d'un maximum et non d'un minimum?", "Regarde a : s'il est négatif, la parabole est ouverte vers le bas, donc le sommet est un maximum."],
    ],
    summary: [
      "Compléter le carré : a(x − h)² + k.",
      "Factorisation partielle : x(ax + b) + c; l'axe est à mi-chemin entre 0 et −b/a.",
      "Axe = moyenne des zéros = −b/(2a).",
      "Revenu = prix × quantité; profit = revenu − coût.",
    ],
    next: "La leçon 3.5 résout des équations du second degré issues de modèles.",
  }),
];
