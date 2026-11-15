// MCR3U-FR 3.1 — Les trois formes d'une fonction du second degré : sens d'ouverture, sommet, axe, zéros, ordonnée à l'origine, domaine et image
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "3.1 Les trois formes d'une fonction du second degré";
export const ID = lessonId(3, 1);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "⛰️",
    title: "Les trois formes d'une fonction du second degré",
    overview: S`Une fonction du second degré peut s'écrire sous forme générale \(f(x)=ax^2+bx+c\), sous forme canonique \(f(x)=a(x-h)^2+k\) ou sous forme factorisée \(f(x)=a(x-r)(x-s)\). Le graphique est la même parabole, peu importe la forme utilisée, mais chaque forme montre des caractéristiques différentes au premier coup d'œil. Dans cette leçon, tu liras le sens d'ouverture, le sommet, l'axe, les zéros et l'ordonnée à l'origine à partir de chaque forme, et tu donneras le domaine, l'image et la valeur maximale ou minimale.`,
    goals: [
      "reconnaître la forme générale, la forme canonique et la forme factorisée;",
      "utiliser le signe de a pour déterminer le sens d'ouverture et savoir si le sommet est un maximum ou un minimum;",
      "lire le sommet et l'axe à partir de la forme canonique, les zéros et l'axe à partir de la forme factorisée, et l'ordonnée à l'origine à partir de la forme générale;",
      "donner le domaine, l'image et la valeur maximale ou minimale d'une fonction du second degré;",
      "esquisser une parabole à partir de ses caractéristiques.",
    ],
    curriculum: "A1.2 (représenter des fonctions du second degré à l'aide de la notation fonctionnelle, à partir d'équations, de tables de valeurs et de graphiques), A2.2 (déterminer le maximum ou le minimum d'une fonction du second degré)",
    prior: [
      [S`Évalue \(3(0-2)^2-5\).`, S`\(3(4)-5=7\).`],
      [S`Résous \((x-4)(x+1)=0\).`, S`\(x=4\) ou \(x=-1\).`],
      [S`Quel nombre est à mi-chemin entre \(-6\) et \(2\)?`, S`\(\frac{-6+2}{2}=-2\).`],
    ],
    words: [
      ["Sommet", "le point de retournement \\((h,k)\\) de la parabole", "\\((1,9)\\)"],
      ["Axe de symétrie", "la droite verticale \\(x=h\\) qui passe par le sommet", "\\(x=1\\)"],
      ["Zéros", "les valeurs de x pour lesquelles \\(f(x)=0\\) (les abscisses à l'origine)", "\\(x=-2,\\ x=4\\)"],
      ["Valeur optimale", "la valeur maximale ou minimale de \\(f\\), le k du sommet", "maximum 9"],
      ["Image", "toutes les valeurs de y que prend la fonction", "\\(y\\le 9\\)"],
    ],
  }),

  section("📌 Une parabole, trois formes", S`
  <p>Les trois équations ci-dessous décrivent la <em>même</em> parabole. Développe l'une des deux premières et tu obtiens la troisième.</p>
  ${table(["Forme", "Équation", "Ce qu'on lit au premier coup d'œil"], [
    ["Factorisée", S`\(f(x)=-(x+2)(x-4)\)`, "zéros −2 et 4"],
    ["Canonique", S`\(f(x)=-(x-1)^2+9\)`, "sommet (1, 9), axe x = 1, maximum 9"],
    ["Générale", S`\(f(x)=-x^2+2x+8\)`, "ordonnée à l'origine 8"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 11 }, curves: [{ f: (x) => -(x + 2) * (x - 4), color: "violet" }], vlines: [{ x: 1, color: "gray", dash: true }], points: [{ x: 1, y: 9, label: "sommet (1, 9)", color: "blue" }, { x: -2, y: 0, label: "(−2, 0)" }, { x: 4, y: 0, label: "(4, 0)" }, { x: 0, y: 8, label: "(0, 8)", color: "green" }], step: { x: 1, y: 1 } }, "Même parabole : les zéros viennent de la forme factorisée, le sommet de la forme canonique, l'ordonnée à l'origine de la forme générale")}
  <p>Les trois formes ont le même coefficient dominant \(a\) (ici \(a=-1\)), et \(a\) détermine à lui seul le sens d'ouverture.</p>
  ${keyIdea(S`Si \(a>0\), la parabole est ouverte vers le haut et le sommet est un <strong>minimum</strong>; si \(a<0\), elle est ouverte vers le bas et le sommet est un <strong>maximum</strong>. Le domaine est toujours l'ensemble des nombres réels; l'image est \(y\ge k\) (ouverte vers le haut) ou \(y\le k\) (ouverte vers le bas).`)}`),

  section("📌 Explore", S`<p>Déplace les zéros et modifie \(a\). Le graphique, le sommet et l'ordonnée à l'origine changent tous, et les trois équations sous le graphique se mettent à jour ensemble. Remarque que le sommet se trouve toujours sur l'axe en pointillé, à mi-chemin entre les zéros.</p>`),

  widget("quadForms", { init: [-1, -2, 4] }),

  section("📌 Lire chaque forme", S`
  <p><strong>Forme canonique</strong> \(f(x)=a(x-h)^2+k\) : le sommet est \((h,k)\), l'axe est \(x=h\) et \(k\) est la valeur maximale ou minimale. Le signe dans la parenthèse est l'opposé de la coordonnée : \((x-1)^2\) donne \(h=1\), \((x+3)^2\) donne \(h=-3\).</p>
  <p><strong>Forme factorisée</strong> \(f(x)=a(x-r)(x-s)\) : les zéros sont \(r\) et \(s\). L'axe est à mi-chemin entre eux, \(x=\frac{r+s}{2}\). Substitue cette valeur de x pour obtenir la valeur optimale.</p>
  <p><strong>Forme générale</strong> \(f(x)=ax^2+bx+c\) : l'ordonnée à l'origine est \(c\), car \(f(0)=c\). L'axe est \(x=-\frac{b}{2a}\) (tu verras pourquoi en 3.2).</p>
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -6, ymax: 7 }, curves: [{ f: (x) => 0.5 * (x + 2) ** 2 - 4, color: "violet" }, { f: (x) => -((x - 2) ** 2) + 5, color: "blue" }], points: [{ x: -2, y: -4, label: "min (−2, −4)", color: "violet" }, { x: 2, y: 5, label: "max (2, 5)", color: "blue" }], step: { x: 1, y: 1 } }, "Violet : a = 0.5 > 0, image y ≥ −4. Bleu : a = −1 < 0, image y ≤ 5")}
  ${watchOut([
    "Dans la forme canonique, le signe dans la parenthèse est inversé : a(x + 3)² a son sommet en x = −3.",
    "L'axe de symétrie est une droite; écris-le donc sous forme d'équation : x = 1, pas seulement 1.",
    "L'image dépend de k et du sens d'ouverture, jamais des zéros.",
    "Une parabole ouverte vers le haut dont le sommet est au-dessus de l'axe des x n'a aucun zéro; elle n'a donc pas de forme factorisée.",
  ])}`),

  examples([
    ["Forme canonique", S`Donne le sommet, l'axe, le sens d'ouverture, la valeur optimale, l'ordonnée à l'origine, les zéros et l'image de \(f(x)=3(x+2)^2-12\).`,
      [S`<b>Lis le sommet.</b> Dans \(a(x-h)^2+k\), le sommet est \((h,k)\). Puisque \(x+2=x-(-2)\), \(h=-2\), et \(k=-12\). Le sommet est donc \((-2,-12)\) et l'axe est \(x=-2\).`,
        S`<b>Sens d'ouverture et valeur optimale.</b> \(a=3>0\) : la parabole est ouverte vers le haut et le sommet est le point le plus bas. Le minimum est \(-12\); l'image est donc \(y\ge-12\).`,
        S`<b>Ordonnée à l'origine.</b> Substitue \(x=0\) : \(f(0)=3(2)^2-12=12-12=0\).`,
        S`<b>Zéros.</b> Pose \(f(x)=0\) : \(3(x+2)^2=12\), donc \((x+2)^2=4\). Alors \(x+2=\pm2\), ce qui donne \(x=0\) ou \(x=-4\).`,
        S`<b>Vérification.</b> Les zéros doivent être à égale distance de l'axe : \(-4\) et \(0\) sont chacun à 2 de \(-2\) ✓. \(f(-4)=3(4)-12=0\) ✓`],
      S`sommet \((-2,-12)\), axe \(x=-2\), ouverte vers le haut, minimum \(-12\), ordonnée à l'origine 0, zéros \(-4\) et 0, image \(y\ge-12\)`,
      plane({ view: { xmin: -6, xmax: 2, ymin: -13, ymax: 4 }, curves: [{ f: (x) => 3 * (x + 2) ** 2 - 12, color: "violet" }], vlines: [{ x: -2, color: "gray", dash: true }], points: [{ x: -2, y: -12, label: "(−2, −12)", color: "blue" }, { x: -4, y: 0, label: "(−4, 0)" }, { x: 0, y: 0, label: "(0, 0)", color: "green" }], step: { x: 1, y: 2 } })],
    ["Forme factorisée", S`Donne les zéros, l'axe, le sommet, l'ordonnée à l'origine et l'image de \(f(x)=-2(x-1)(x-7)\).`,
      [S`<b>Zéros.</b> Un produit est nul lorsqu'un facteur est nul : \(x-1=0\) ou \(x-7=0\). Les zéros sont donc 1 et 7.`,
        S`<b>Axe.</b> Une parabole est symétrique; l'axe est donc à mi-chemin entre les zéros : \(x=\frac{1+7}2=4\).`,
        S`<b>Sommet.</b> Substitue la valeur de l'axe : \(f(4)=-2(3)(-3)=18\). Le sommet est donc \((4,18)\). Puisque \(a=-2<0\), la parabole est ouverte vers le bas et 18 est un maximum.`,
        S`<b>Ordonnée à l'origine.</b> \(f(0)=-2(-1)(-7)=-14\).`,
        S`<b>Image.</b> Le maximum est 18, donc \(y\le18\).`,
        S`<b>Vérification.</b> Par symétrie par rapport à \(x=4\), \(f(8)\) doit être égal à \(f(0)\) : \(-2(7)(1)=-14\) ✓`],
      S`zéros 1 et 7, axe \(x=4\), maximum 18 en \((4,18)\), ordonnée à l'origine \(-14\), image \(y\le18\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -16, ymax: 21 }, curves: [{ f: (x) => -2 * (x - 1) * (x - 7), color: "violet" }], vlines: [{ x: 4, color: "gray", dash: true }], points: [{ x: 4, y: 18, label: "(4, 18)", color: "blue" }, { x: 1, y: 0, label: "(1, 0)" }, { x: 7, y: 0, label: "(7, 0)" }, { x: 0, y: -14, label: "(0, −14)", color: "green" }], step: { x: 1, y: 4 } })],
    ["Forme générale", S`Pour \(f(x)=x^2-8x+12\), donne l'ordonnée à l'origine, puis utilise les zéros pour trouver le sommet.`,
      [S`<b>Ordonnée à l'origine.</b> Dans \(ax^2+bx+c\), poser \(x=0\) laisse \(c\). L'ordonnée à l'origine est donc 12.`,
        S`<b>Factorise.</b> Il faut deux nombres dont le produit est 12 et la somme \(-8\) : ce sont \(-2\) et \(-6\). Donc \(f(x)=(x-2)(x-6)\), et les zéros sont 2 et 6.`,
        S`<b>Axe.</b> À mi-chemin entre les zéros : \(x=\frac{2+6}2=4\).`,
        S`<b>Sommet.</b> \(f(4)=16-32+12=-4\). Puisque \(a=1>0\), c'est un minimum.`,
        S`<b>Vérification avec la formule de l'axe.</b> \(-\frac b{2a}=\frac82=4\) ✓`],
      S`ordonnée à l'origine 12, zéros 2 et 6, sommet \((4,-4)\), minimum \(-4\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -5, ymax: 13 }, curves: [{ f: (x) => x * x - 8 * x + 12, color: "violet" }], points: [{ x: 0, y: 12, label: "(0, 12)", color: "green" }, { x: 2, y: 0, label: "(2, 0)" }, { x: 6, y: 0, label: "(6, 0)" }, { x: 4, y: -4, label: "(4, −4)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Esquisse à partir des caractéristiques", S`Esquisse \(f(x)=\tfrac12(x-4)^2+2\). Combien de zéros a-t-elle? Donne son image.`,
      [S`<b>Sommet et forme.</b> Le sommet est \((4,2)\). \(a=\tfrac12>0\) : la parabole est ouverte vers le haut. Puisque \(|a|<1\), elle est plus large que \(y=x^2\).`,
        S`<b>Un point et son symétrique.</b> \(f(0)=\tfrac12(16)+2=10\). Le point \((0,10)\) est à 4 unités à gauche de l'axe; \((8,10)\) est donc aussi sur le graphique.`,
        S`<b>Zéros par le raisonnement.</b> Le point le plus bas est à la hauteur 2, au-dessus de l'axe des x, et la courbe ne fait que monter à partir de là. Elle n'atteint donc jamais 0.`,
        S`<b>Zéros par l'algèbre.</b> \(\tfrac12(x-4)^2+2=0\) donne \((x-4)^2=-4\). Aucun nombre réel n'a un carré négatif ✓`,
        S`<b>Image.</b> Le minimum est 2, donc \(y\ge2\).`],
      S`aucun zéro; image \(y\ge2\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 0.5 * (x - 4) ** 2 + 2, color: "violet" }], vlines: [{ x: 4, color: "gray", dash: true }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "blue" }, { x: 0, y: 10, label: "(0, 10)", color: "green" }, { x: 8, y: 10, label: "(8, 10)" }], step: { x: 1, y: 1 } })],
    ["Domaine et image en contexte", S`On frappe un ballon du pied à partir du sol. Sa hauteur est de \(h(t)=-5t(t-4)\) mètres après \(t\) secondes. Donne un domaine et une image raisonnables.`,
      [S`<b>Les zéros et leur signification.</b> La forme factorisée donne \(t=0\) (le moment du coup de pied) et \(t=4\) (le moment où il touche le sol).`,
        S`<b>Hauteur maximale.</b> L'axe est à mi-chemin : \(t=2\). Donc \(h(2)=-5(2)(-2)=20\) m. Puisque \(a=-5<0\), c'est un maximum.`,
        S`<b>Domaine.</b> La formule accepte n'importe quel \(t\), mais seul le vol a du sens; donc \(0\le t\le4\). En dehors de cet intervalle, la hauteur serait négative.`,
        S`<b>Image.</b> Pendant le vol, la hauteur passe de 0 à 20, puis revient à 0; donc \(0\le h\le20\).`,
        S`<b>Vérification.</b> \(h(1)=-5(1)(-3)=15\) et \(h(3)=-5(3)(-1)=15\). Les instants 1 et 3 sont symétriques par rapport à \(t=2\) ✓`],
      S`domaine \(0\le t\le4\), image \(0\le h\le20\)`,
      plane({ view: { xmin: -0.5, xmax: 5, ymin: -2, ymax: 23 }, curves: [{ f: (x) => -5 * x * (x - 4), a: 0, b: 4, color: "violet" }], points: [{ x: 2, y: 20, label: "(2, 20)", color: "blue" }, { x: 0, y: 0, label: "(0, 0)" }, { x: 4, y: 0, label: "(4, 0)" }, { x: 1, y: 15, label: "(1, 15)" }, { x: 3, y: 15, label: "(3, 15)" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 1, y: 5 } })],
  ]),

  practice([
    q("forme canonique", S`Quelle est la valeur minimale de \(f(x)=4(x+5)^2-3\)?`, num(-3),
      "a > 0 : le sommet est le point le plus bas.", [S`Sommet \((-5,-3)\).`], S`\(-3\)`),
    q("forme factorisée", S`Quel est l'axe de symétrie de \(f(x)=(x-9)(x+3)\)? Entre la valeur de x.`, num(3),
      "Fais la moyenne des zéros.", [S`\(\frac{9+(-3)}{2}\).`], S`\(x=3\)`),
    q("forme générale", S`Quelle est l'ordonnée à l'origine de \(f(x)=-2x^2+7x-11\)?`, num(-11),
      "f(0) = c.", [S`Chaque terme en x vaut 0 lorsque \(x=0\).`], S`\(-11\)`),
    q("image", S`Quelle est l'image de \(f(x)=-(x-6)^2+2\)?`, choice(["y ≤ 2", "y ≥ 2", "y ≤ 6", "tous les nombres réels"], 0),
      "a < 0 : le sommet est le point le plus haut.", [S`Sommet \((6,2)\), ouverte vers le bas.`], S`\(y\le2\)`),
    q("zéros", S`Combien de zéros \(f(x)=2(x-1)^2+5\) a-t-elle?`, num(0),
      "Où est le sommet, et dans quel sens la parabole est-elle ouverte?", [S`Sommet \((1,5)\) au-dessus de l'axe, ouverte vers le haut.`], S`\(0\)`),
  ]),

  ...hard([
    ["Deux formes, une parabole", S`Une parabole a les zéros \(-2\) et \(8\) et l'ordonnée à l'origine \(-32\). Écris-la sous forme canonique et donne son image.`,
      [S`\(f(x)=a(x+2)(x-8)\) et \(f(0)=a(2)(-8)=-16a=-32\), donc \(a=2\).`, S`Axe \(x=\frac{-2+8}{2}=3\); \(f(3)=2(5)(-5)=-50\).`, S`Forme canonique \(f(x)=2(x-3)^2-50\); la parabole est ouverte vers le haut, donc l'image est \(y\ge-50\).`],
      S`\(f(x)=2(x-3)^2-50\), image \(y\ge-50\)`,
      plane({ view: { xmin: -4, xmax: 10, ymin: -55, ymax: 15 }, curves: [{ f: (x) => 2 * (x + 2) * (x - 8), color: "violet" }], vlines: [{ x: 3, color: "gray", dash: true }], points: [{ x: -2, y: 0, label: "(−2, 0)" }, { x: 8, y: 0, label: "(8, 0)" }, { x: 0, y: -32, label: "(0, −32)", color: "green" }, { x: 3, y: -50, label: "(3, −50)", color: "blue" }], step: { x: 1, y: 5 } })],
    ["Un zéro manquant", S`Pour \(f(x)=-\tfrac12(x-2)(x-m)\), l'abscisse du sommet est 5. Trouve \(m\), la valeur maximale et l'ordonnée à l'origine.`,
      [S`L'axe est à mi-chemin entre les zéros : \(\frac{2+m}{2}=5\Rightarrow m=8\).`, S`\(f(5)=-\tfrac12(3)(-3)=4.5\), un maximum puisque \(a<0\).`, S`\(f(0)=-\tfrac12(-2)(-8)=-8\).`],
      S`\(m=8\), maximum 4.5, ordonnée à l'origine \(-8\)`],
  ], [
    q("difficile", S`Une parabole a le sommet \((4,-18)\) et \(a=2\). Trouve son plus grand zéro.`, num(7),
      "Écris-la sous forme canonique et pose-la égale à 0.", [S`\(2(x-4)^2=18\Rightarrow(x-4)^2=9\Rightarrow x=1\) ou \(7\).`], S`\(7\)`),
    q("difficile", S`\(f(x)=(x+4)(x-b)\) a l'axe \(x=1\). Trouve \(b\).`, num(6),
      "L'axe est la moyenne des zéros.", [S`\(\frac{-4+b}{2}=1\).`], S`\(6\)`),
    q("difficile", S`L'image de \(f(x)=a(x-1)(x-5)\) est \(y\le12\). Trouve \(a\).`, num(-3),
      "Le sommet est sur l'axe x = 3, et sa hauteur est 12.", [S`\(f(3)=a(2)(-2)=-4a=12\).`], S`\(-3\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle forme dois-je utiliser?", "Celle qui répond à la question : zéros → forme factorisée, maximum ou minimum → forme canonique, ordonnée à l'origine → forme générale."],
      ["Comment trouver le sommet à partir de la forme factorisée?", "Fais la moyenne des zéros pour obtenir l'axe, puis substitue cette valeur de x."],
      ["Toute fonction du second degré peut-elle s'écrire sous forme factorisée?", "Seulement si elle a des zéros réels. Si la parabole n'atteint jamais l'axe des x, il n'y a pas de forme factorisée."],
      ["Une fonction du second degré peut-elle avoir exactement un zéro?", "Oui — lorsque le sommet est sur l'axe des x, p. ex. 3(x − 4)². Alors k = 0."],
      ["Le domaine est-il parfois restreint?", "Pas pour la fonction elle-même, mais un contexte (temps, longueur) peut le restreindre, comme pour le ballon frappé du pied."],
    ],
    summary: [
      "La forme factorisée montre les zéros; la forme canonique montre le sommet; la forme générale montre l'ordonnée à l'origine.",
      "a > 0 : ouverte vers le haut, minimum; a < 0 : ouverte vers le bas, maximum.",
      "Axe = moyenne des zéros = h.",
      "Image : y ≥ k ou y ≤ k; domaine : tous les nombres réels, sauf si un contexte le restreint.",
    ],
    next: "La leçon 3.2 passe d'une forme à l'autre : développer pour obtenir la forme générale, factoriser, et utiliser l'axe pour obtenir la forme canonique.",
  }),
];
