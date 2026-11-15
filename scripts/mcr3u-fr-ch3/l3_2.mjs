// MCR3U-FR 3.2 — Passer d'une forme à l'autre : développer, factoriser, l'axe x = −b/(2a), équations à partir d'un sommet ou des zéros et d'un point
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "3.2 Passer d'une forme à l'autre";
export const ID = lessonId(3, 2);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Passer d'une forme à l'autre",
    overview: S`En 3.1, tu as lu différentes caractéristiques à partir de différentes formes. Souvent, la question demande une caractéristique que la forme donnée cache : les zéros d'une fonction sous forme canonique, ou le sommet d'une fonction sous forme générale. Dans cette leçon, tu développeras pour obtenir la forme générale, tu factoriseras pour obtenir la forme factorisée, tu utiliseras l'axe \(x=-\frac{b}{2a}\) pour obtenir la forme canonique, et tu construiras une équation sous la forme la plus utile à partir d'un sommet ou des zéros et d'un autre point.`,
    goals: [
      "développer la forme canonique et la forme factorisée pour obtenir la forme générale;",
      "factoriser la forme générale (mise en évidence d'abord) pour trouver les zéros;",
      "trouver le sommet à partir de la forme factorisée en faisant la moyenne des zéros;",
      "expliquer et utiliser la formule de l'axe \\(x=-\\frac{b}{2a}\\) pour écrire la forme générale sous forme canonique;",
      "écrire l'équation d'une parabole à partir de son sommet et d'un point, ou de ses zéros et d'un point, sous les trois formes.",
    ],
    curriculum: "A1.2 (représenter des fonctions du second degré à l'aide de la notation fonctionnelle, à partir d'équations, de tables de valeurs et de graphiques), A2.2 (déterminer le maximum ou le minimum d'une fonction du second degré)",
    prior: [
      [S`Développe \((x+6)^2\).`, S`\(x^2+12x+36\).`],
      [S`Factorise \(x^2+3x-10\).`, S`\((x+5)(x-2)\).`],
      [S`Factorise \(4x^2-20x\).`, S`\(4x(x-5)\).`],
    ],
    words: [
      ["Développer", "effectuer les multiplications des parenthèses et regrouper les termes semblables", "\\((x-2)^2=x^2-4x+4\\)"],
      ["Factoriser", "écrire sous forme de produit; mettre d'abord un facteur commun en évidence", "\\(2x^2-8=2(x-2)(x+2)\\)"],
      ["Formule de l'axe", "l'axe de \\(ax^2+bx+c\\) est \\(x=-\\frac{b}{2a}\\)", "\\(x^2+4x-7\\) : \\(x=-2\\)"],
      ["Coefficient dominant", "la valeur de \\(a\\); la même dans les trois formes", "\\(a=-3\\)"],
    ],
  }),

  section("📌 Les chemins entre les formes", S`
  ${table(["De → à", "Méthode"], [
    ["canonique → générale", "développer le carré, distribuer a, ajouter k"],
    ["factorisée → générale", "multiplier les deux parenthèses, puis distribuer a"],
    ["générale → factorisée", "mise en évidence d'abord, puis factoriser le trinôme (seulement s'il a des zéros réels)"],
    ["factorisée → canonique", "faire la moyenne des zéros pour h, substituer pour obtenir k"],
    ["générale → canonique", "axe h = −b/(2a), substituer pour obtenir k (la leçon 3.4 montre une deuxième méthode : compléter le carré)"],
  ])}
  ${keyIdea(S`Le coefficient dominant \(a\) ne change jamais lors d'une conversion. Si ta nouvelle forme a un \(a\) différent, il y a une erreur.`)}`),

  section("📌 Pourquoi l'axe est \\(x=-\\frac{b}{2a}\\)", S`
  <p>Trouve où \(f(x)=ax^2+bx+c\) a la hauteur \(c\) : \(ax^2+bx+c=c\Rightarrow x(ax+b)=0\Rightarrow x=0\) ou \(x=-\frac{b}{a}\). Deux points à la même hauteur sont symétriques par rapport à l'axe; l'axe est donc à mi-chemin entre eux :</p>
  <p style="text-align:center">\(h=\dfrac{0+\left(-\frac{b}{a}\right)}{2}=-\dfrac{b}{2a}\).</p>
  ${plane({ view: { xmin: -6, xmax: 2, ymin: -7, ymax: 4 }, curves: [{ f: (x) => x * x + 4 * x - 2, color: "violet" }], lines: [{ m: 0, b: -2, color: "green", dash: true }], vlines: [{ x: -2, color: "gray", dash: true }], points: [{ x: 0, y: -2, label: "(0, −2)", color: "green" }, { x: -4, y: -2, label: "(−4, −2)", color: "green" }, { x: -2, y: -6, label: "(−2, −6)", color: "blue" }], step: { x: 1, y: 1 } }, "y = x² + 4x − 2 a la hauteur −2 en x = 0 et en x = −4; son axe est donc x = −2")}
  <p>Cela fonctionne même lorsque la parabole n'a pas de zéros; c'est donc le chemin le plus rapide de la forme générale au sommet.</p>`),

  section("📌 Explore", S`<p>Choisis \(a\), \(h\) et \(k\). En mode <em>canonique → générale</em>, l'outil développe étape par étape et t'indique si une forme factorisée existe. Passe au mode <em>générale → canonique</em> pour voir la formule de l'axe te ramener au point de départ.</p>`),

  widget("formConverter", { init: [2, -1, -8] }),

  section("📌 Construire une équation sous la bonne forme", S`
  <p>Choisis la forme qui utilise les renseignements donnés, puis utilise un autre point pour trouver \(a\).</p>
  <p><strong>Les zéros et un point.</strong> Zéros \(-3\) et \(2\), passant par \((1,-8)\) : \(f(x)=a(x+3)(x-2)\), donc \(a(4)(-1)=-8\) et \(a=2\).</p>
  ${plane({ view: { xmin: -5, xmax: 4, ymin: -14, ymax: 8 }, curves: [{ f: (x) => 2 * (x + 3) * (x - 2), color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)" }, { x: 2, y: 0, label: "(2, 0)" }, { x: 1, y: -8, label: "(1, −8)", color: "green" }], step: { x: 1, y: 2 } }, "f(x) = 2(x + 3)(x − 2)")}
  <p><strong>Le sommet et un point.</strong> Pars de \(f(x)=a(x-h)^2+k\) et substitue le point (exemple 5).</p>
  ${watchOut([
    "Développe le carré avant de multiplier par a : −3(x + 1)² + 5 est −3(x² + 2x + 1) + 5, et non (−3x − 3)² + 5.",
    "Mets d'abord un facteur commun en évidence : 3x² − 12x − 36 = 3(x² − 4x − 12) est beaucoup plus facile à factoriser.",
    "Dans x = −b/(2a), garde les signes : pour −2x² + 8x, h = −8/(−4) = 2.",
    "Après avoir trouvé h, il te faut encore k : substitue h dans l'équation de départ.",
  ])}`),

  examples([
    ["Canonique → générale", S`Écris \(f(x)=-3(x+1)^2+5\) sous forme générale.`,
      [S`<b>Plan.</b> La forme générale n'a pas de parenthèses; on développe donc. Ordre des opérations : d'abord le carré, puis la multiplication par \(a\), puis l'addition de \(k\).`,
        S`<b>Développe le carré.</b> \((x+1)^2=x^2+2x+1\). Le terme du milieu \(2x\) est facile à oublier.`,
        S`<b>Distribue \(-3\).</b> \(-3(x^2+2x+1)=-3x^2-6x-3\).`,
        S`<b>Ajoute 5.</b> \(-3x^2-6x-3+5=-3x^2-6x+2\).`,
        S`<b>Vérification.</b> Les deux formes doivent donner la même ordonnée à l'origine : \(f(0)=-3(1)+5=2\) ✓, ce qui est \(c=2\). La formule de l'axe donne \(-\frac b{2a}=-\frac{-6}{-6}=-1\), ce qui correspond au sommet ✓`],
      S`\(f(x)=-3x^2-6x+2\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -8, ymax: 7 }, curves: [{ f: (x) => -3 * (x + 1) ** 2 + 5, color: "violet" }], points: [{ x: -1, y: 5, label: "(−1, 5)", color: "blue" }, { x: 0, y: 2, label: "(0, 2)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Factorisée → générale et canonique", S`Écris \(f(x)=2(x+5)(x-1)\) sous forme générale et sous forme canonique.`,
      [S`<b>Multiplie les parenthèses.</b> \((x+5)(x-1)=x^2-x+5x-5=x^2+4x-5\).`,
        S`<b>Distribue le 2.</b> \(2x^2+8x-10\). C'est la forme générale.`,
        S`<b>Trouve l'axe à partir des zéros.</b> Les zéros sont \(-5\) et 1; l'axe est donc \(x=\frac{-5+1}2=-2\).`,
        S`<b>Trouve \(k\).</b> \(f(-2)=2(3)(-3)=-18\). Le sommet est donc \((-2,-18)\), et la forme canonique est \(2(x+2)^2-18\). La valeur \(a=2\) est la même dans toutes les formes.`,
        S`<b>Vérification.</b> Développe : \(2(x^2+4x+4)-18=2x^2+8x+8-18=2x^2+8x-10\) ✓`],
      S`\(2x^2+8x-10=2(x+2)^2-18\)`,
      plane({ view: { xmin: -7, xmax: 3, ymin: -20, ymax: 6 }, curves: [{ f: (x) => 2 * (x + 5) * (x - 1), color: "violet" }], vlines: [{ x: -2, color: "gray", dash: true }], points: [{ x: -5, y: 0, label: "(−5, 0)" }, { x: 1, y: 0, label: "(1, 0)" }, { x: -2, y: -18, label: "(−2, −18)", color: "blue" }, { x: 0, y: -10, label: "(0, −10)", color: "green" }], step: { x: 1, y: 2 } })],
    ["Générale → factorisée → canonique", S`Trouve les zéros et le sommet de \(f(x)=3x^2-12x-36\).`,
      [S`<b>Mise en évidence d'abord.</b> Chaque coefficient est divisible par 3 : \(f(x)=3(x^2-4x-12)\).`,
        S`<b>Factorise le trinôme.</b> Produit \(-12\), somme \(-4\) : les nombres sont \(-6\) et \(2\). Donc \(f(x)=3(x-6)(x+2)\), et les zéros sont 6 et \(-2\).`,
        S`<b>Axe.</b> \(x=\frac{6+(-2)}2=2\).`,
        S`<b>Sommet.</b> \(f(2)=3(-4)(4)=-48\). Le sommet est donc \((2,-48)\), et \(f(x)=3(x-2)^2-48\).`,
        S`<b>Vérification.</b> \(3(x^2-4x+4)-48=3x^2-12x+12-48=3x^2-12x-36\) ✓`],
      S`zéros \(-2\) et 6; sommet \((2,-48)\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -52, ymax: 12 }, curves: [{ f: (x) => 3 * x * x - 12 * x - 36, color: "violet" }], vlines: [{ x: 2, color: "gray", dash: true }], points: [{ x: -2, y: 0, label: "(−2, 0)" }, { x: 6, y: 0, label: "(6, 0)" }, { x: 2, y: -48, label: "(2, −48)", color: "blue" }, { x: 0, y: -36, label: "(0, −36)", color: "green" }], step: { x: 1, y: 8 } })],
    ["Générale → canonique avec la formule de l'axe", S`Écris \(f(x)=2x^2+6x-1\) sous forme canonique.`,
      [S`<b>Pourquoi ne pas factoriser?</b> Aucune paire d'entiers ne convient ici; on trouve donc le sommet directement. Les points à la même hauteur sont symétriques : \(f(0)=f(-3)=-1\), donc l'axe est à mi-chemin, en \(x=-1.5\).`,
        S`<b>La formule est d'accord.</b> \(h=-\frac b{2a}=-\frac64=-1.5\).`,
        S`<b>Trouve \(k\).</b> \(k=f(-1.5)=2(2.25)+6(-1.5)-1=4.5-9-1=-5.5\).`,
        S`<b>Écris-la.</b> \(f(x)=2(x+1.5)^2-5.5\), avec le même \(a=2\).`,
        S`<b>Vérification.</b> \(2(x^2+3x+2.25)-5.5=2x^2+6x+4.5-5.5=2x^2+6x-1\) ✓`],
      S`\(f(x)=2(x+1.5)^2-5.5\)`,
      plane({ view: { xmin: -5, xmax: 2, ymin: -7, ymax: 5 }, curves: [{ f: (x) => 2 * x * x + 6 * x - 1, color: "violet" }], lines: [{ m: 0, b: -1, color: "green", dash: true }], vlines: [{ x: -1.5, color: "gray", dash: true }], points: [{ x: 0, y: -1, label: "(0, −1)", color: "green" }, { x: -3, y: -1, label: "(−3, −1)", color: "green" }, { x: -1.5, y: -5.5, label: "(−1.5, −5.5)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Le sommet et un point → les trois formes", S`Une parabole a le sommet \((3,8)\) et passe par \((5,0)\). Écris-la sous forme canonique, factorisée et générale.`,
      [S`<b>Forme canonique.</b> \(f(x)=a(x-3)^2+8\). Substitue \((5,0)\) : \(0=4a+8\), donc \(a=-2\).`,
        S`<b>Zéros.</b> \((5,0)\) est un zéro, à 2 unités à droite de l'axe \(x=3\). Par symétrie, l'autre zéro est à 2 unités à gauche : \(x=1\).`,
        S`<b>Forme factorisée.</b> \(f(x)=-2(x-1)(x-5)\), avec le même \(a\).`,
        S`<b>Forme générale.</b> \((x-1)(x-5)=x^2-6x+5\). Multiplie par \(-2\) : \(-2x^2+12x-10\).`,
        S`<b>Vérification.</b> Toutes les formes doivent donner la même ordonnée à l'origine. Forme canonique : \(-2(9)+8=-10\). Forme factorisée : \(-2(-1)(-5)=-10\). Forme générale : \(c=-10\) ✓`],
      S`\(-2(x-3)^2+8=-2(x-1)(x-5)=-2x^2+12x-10\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -12, ymax: 10 }, curves: [{ f: (x) => -2 * (x - 3) ** 2 + 8, color: "violet" }], points: [{ x: 3, y: 8, label: "(3, 8)", color: "blue" }, { x: 5, y: 0, label: "(5, 0)", color: "green" }, { x: 1, y: 0, label: "(1, 0)" }, { x: 0, y: -10, label: "(0, −10)" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("canonique → générale", S`Écris \(f(x)=(x-4)^2+1\) sous forme générale. Quel est le terme constant \(c\)?`, num(17),
      "Développe d'abord le carré.", [S`\(x^2-8x+16+1\).`], S`\(17\)`),
    q("factorisée → générale", S`Écris \(f(x)=2(x+4)(x-1)\) sous forme générale. Quelle est la valeur de \(b\)?`, num(6),
      "Multiplie les parenthèses, puis distribue le 2.", [S`\(2(x^2+3x-4)=2x^2+6x-8\).`], S`\(6\)`),
    q("formule de l'axe", S`Utilise \(x=-\frac{b}{2a}\) pour trouver l'axe de \(f(x)=3x^2-18x+4\). Entre la valeur de x.`, num(3),
      "b = −18, a = 3.", [S`\(-\frac{-18}{6}\).`], S`\(x=3\)`),
    q("sommet", S`Trouve l'ordonnée du sommet de \(f(x)=x^2+10x+21\).`, num(-4),
      "L'axe d'abord, puis substitue.", [S`\(h=-5\); \(25-50+21\).`], S`\(-4\)`),
    q("factoriser", S`Quelle est la forme factorisée de \(x^2-2x-15\)?`, choice(["(x − 5)(x + 3)", "(x + 5)(x − 3)", "(x − 15)(x + 1)", "(x − 5)(x − 3)"], 0),
      "Deux nombres dont le produit est −15 et la somme −2.", [S`\(-5\) et \(3\).`], S`\((x-5)(x+3)\)`),
  ]),

  ...hard([
    ["Choisir b et c", S`Trouve \(b\) et \(c\) pour que \(f(x)=2x^2+bx+c\) ait le sommet \((-3,4)\). Explique ensuite pourquoi elle n'a aucun zéro.`,
      [S`La forme canonique doit être \(f(x)=2(x+3)^2+4\) (même \(a\)).`, S`Développe : \(2(x^2+6x+9)+4=2x^2+12x+22\), donc \(b=12\), \(c=22\).`, S`Elle est ouverte vers le haut et sa plus petite valeur est 4; donc \(f(x)\ge4>0\) pour tout \(x\).`],
      S`\(b=12\), \(c=22\); minimum 4, donc aucun zéro`,
      plane({ view: { xmin: -7, xmax: 1, ymin: -1, ymax: 14 }, curves: [{ f: (x) => 2 * (x + 3) ** 2 + 4, color: "violet" }], vlines: [{ x: -3, color: "gray", dash: true }], points: [{ x: -3, y: 4, label: "(−3, 4)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Les zéros et un point → les trois formes", S`Une parabole a les zéros \(-4\) et \(6\) et passe par \((2,-12)\). Écris-la sous forme factorisée, générale et canonique.`,
      [S`\(f(x)=a(x+4)(x-6)\); \(a(6)(-4)=-24a=-12\Rightarrow a=\tfrac12\).`, S`Forme générale : \(\tfrac12(x^2-2x-24)=\tfrac12x^2-x-12\).`, S`Axe \(x=1\); \(f(1)=\tfrac12(5)(-5)=-12.5\), donc \(f(x)=\tfrac12(x-1)^2-12.5\).`],
      S`\(\tfrac12(x+4)(x-6)=\tfrac12x^2-x-12=\tfrac12(x-1)^2-12.5\)`],
  ], [
    q("difficile", S`\(f(x)=-(x-2)^2+k\) a l'ordonnée à l'origine 5. Trouve \(k\).`, num(9),
      "Substitue x = 0.", [S`\(-4+k=5\).`], S`\(9\)`),
    q("difficile", S`\(f(x)=x^2+bx+c\) a le sommet \((4,-1)\). Trouve \(c\).`, num(15),
      "Écris la forme canonique avec a = 1 et développe.", [S`\((x-4)^2-1=x^2-8x+15\).`], S`\(15\)`),
    q("difficile", S`L'axe de \(f(x)=5x^2+bx-3\) est \(x=-0.8\). Trouve \(b\).`, num(8),
      "Pose −b/(2a) égal à −0.8.", [S`\(-\frac{b}{10}=-0.8\).`], S`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["Dois-je toujours convertir?", "Non. Convertis seulement lorsque la forme que tu as cache la caractéristique dont tu as besoin."],
      ["Pourquoi mettre d'abord un facteur commun en évidence?", "Il reste un trinôme plus simple (souvent avec a = 1), et a demeure visible dans la forme factorisée."],
      ["Et si la forme générale ne se factorise pas?", "Utilise x = −b/(2a) pour le sommet. Les zéros peuvent quand même exister; la leçon 3.5 les trouve avec la formule quadratique."],
      ["Comment vérifier une conversion?", "Compare les ordonnées à l'origine (substitue x = 0 dans les deux formes) et vérifie que a est le même."],
      ["Quel point dois-je utiliser pour trouver a?", "N'importe quel point de la parabole autre que les zéros ou le sommet que tu as déjà utilisés."],
    ],
    summary: [
      "Canonique ou factorisée → générale : développer, puis distribuer a.",
      "Générale → factorisée : mise en évidence, puis factoriser le trinôme.",
      "Axe : moyenne des zéros, ou x = −b/(2a); puis substituer pour obtenir k.",
      "Si on connaît le sommet ou les zéros, partir de cette forme et utiliser un point pour trouver a.",
    ],
    next: "La leçon 3.3 reconnaît les fonctions du second degré à partir de tables de valeurs et trouve leurs équations à partir de données.",
  }),
];
