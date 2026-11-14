// MCV4U-FR 3.2 — Maximums et minimums : extremums relatifs et test de la dérivée première, nombres critiques où f′ = 0
// ou f′ n'existe pas, nombres critiques qui ne sont pas des extremums, et extremums absolus sur un intervalle fermé
// (bornes comprises). Miroir de ../mcv4u-ch3/l3_2.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "3.2 Maximums et minimums";
export const ID = lessonId(3, 2);

const S = String.raw;
const h = (x) => 0.1 * x ** 3 - 1.5 * x * x + 6 * x + 10;
export const blocks = () => [
  intro({
    icon: "⛰️",
    title: "Maximums et minimums",
    overview: S`Un <strong>maximum relatif</strong> est un point plus haut que tous les points voisins — un sommet de colline; un <strong>minimum relatif</strong> est le fond d'une vallée. Là où un graphique lisse tourne, sa tangente est horizontale; les extremums relatifs ne peuvent donc se trouver qu'en des <strong>nombres critiques</strong> : là où \(f'(x)=0\) ou \(f'(x)\) n'existe pas. Le <strong>test de la dérivée première</strong> décide lequel : si \(f'\) passe de \(+\) à \(-\), c'est un maximum; de \(-\) à \(+\), un minimum; sans changement, ni l'un ni l'autre. Sur un intervalle fermé \([a,b]\), on trouve le maximum et le minimum <strong>absolus</strong> en comparant \(f\) aux nombres critiques <em>et</em> aux bornes.`,
    goals: [
      "distinguer les extremums relatifs et absolus;",
      "trouver les nombres critiques, y compris là où f′ n'existe pas;",
      "classer les points critiques à l'aide du test de la dérivée première;",
      "reconnaître les nombres critiques qui ne sont pas des extremums;",
      "trouver les extremums absolus sur un intervalle fermé.",
    ],
    curriculum: "B1.2 (déterminer les points de maximum et de minimum relatifs à l'aide de la dérivée première), B1.3 (reconnaître que les points critiques ne sont pas toujours des extremums)",
    prior: [
      [S`Où \(f(x)=x^3-12x+1\) est-elle croissante?`, S`Sur \((-\infty,-2)\) et \((2,\infty)\).`],
      [S`Dérivée de \(x^{2/3}\)?`, S`\(\frac23x^{-1/3}\).`],
      [S`Valeur de \(x^3-3x\) en \(x=-1\)?`, S`\(2\).`],
    ],
    words: [
      ["Maximum relatif", "\\(f(c)\\ge f(x)\\) pour tous les x près de c", "un sommet de colline"],
      ["Maximum absolu", "\\(f(c)\\ge f(x)\\) pour tous les x du domaine ou de l'intervalle", "le point le plus haut"],
      ["Point critique", "\\((c,f(c))\\) où \\(f'(c)=0\\) ou \\(f'(c)\\) n'existe pas", ""],
      ["Test de la dérivée première", "classer c selon le changement de signe de \\(f'\\)", "+ → − est un max"],
    ],
  }),

  section("📌 Le test de la dérivée première", S`
  ${table(["Signe de f′ autour de c", "Forme", "Conclusion"], [
    ["\\(+\\) puis \\(-\\)", "monte, puis descend", "maximum relatif en c"],
    ["\\(-\\) puis \\(+\\)", "descend, puis monte", "minimum relatif en c"],
    ["même signe des deux côtés", "s'aplatit, puis continue", "aucun extremum"],
  ])}
  ${plane({ view: { xmin: -0.5, xmax: 3.2, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 2 * x ** 3 - 9 * x * x + 12 * x, color: "violet" }, { f: () => 5, color: "green", a: 0.4, b: 1.6 }, { f: () => 4, color: "green", a: 1.4, b: 2.6 }], points: [{ x: 1, y: 5, label: "max. relatif (1, 5)", color: "red" }, { x: 2, y: 4, label: "min. relatif (2, 4)", color: "blue" }], step: { x: 0.5, y: 1 } }, "f(x) = 2x³ − 9x² + 12x : tangentes horizontales au maximum relatif et au minimum relatif.")}
  ${keyIdea(S`Les extremums relatifs ne se trouvent qu'en des nombres critiques, mais chaque nombre critique n'en donne pas un — utilise le signe de \(f'\) de chaque côté. Pour les extremums absolus sur \([a,b]\) : évalue \(f\) en chaque nombre critique de l'intervalle et aux deux bornes; la plus grande valeur est le maximum absolu, la plus petite est le minimum absolu.`)}`),

  section("📌 Explore", S`<p>Choisis une fonction et fais glisser les bornes de l'intervalle. Les candidats sont les nombres critiques à l'intérieur de l'intervalle (en bleu) et les bornes (en ambre); les gagnants sont étiquetés. Fais en sorte qu'une borne soit le maximum absolu, puis essaie \(f(x)=x^3\), dont le nombre critique n'est pas un extremum.</p>`),

  widget("extremaLab", { init: { fn: "quartic", a: -1.5, b: 2.5 } }),

  section("📌 Relatif ou absolu?", S`
  <p>Un maximum relatif n'est pas nécessairement le point le plus haut de tout le graphique, et sur un intervalle fermé les extrêmes absolus se trouvent souvent aux bornes. Dresse toujours la liste de tous les candidats dans un tableau avant de décider.</p>
  ${watchOut([
    "f′(c) = 0 ne garantit pas un extremum : f(x) = x³ s'aplatit en 0 et continue de monter.",
    "Les nombres critiques comprennent aussi les endroits où f′ n'existe pas, comme les coins et les points de rebroussement.",
    "Sur un intervalle fermé, n'oublie jamais les bornes.",
    "Seuls les nombres critiques à l'intérieur de l'intervalle sont des candidats.",
    "Donne la valeur extrême (la valeur de y) et l'endroit où elle est atteinte (la valeur de x).",
  ])}`),

  examples([
    ["Le test de la dérivée première", S`Trouve et classe les points critiques de \(f(x)=2x^3-9x^2+12x\).`,
      [S`<b>Règle : le test de la dérivée première.</b> En un nombre critique \(c\) : si \(f'\) passe de \(+\) à \(-\), \(f(c)\) est un maximum relatif; de \(-\) à \(+\), un minimum relatif; sans changement, ni l'un ni l'autre.`,
        S`<b>Dérive et factorise.</b> \(f'(x)=6x^2-18x+12=6(x^2-3x+2)=6(x-1)(x-2)\). Nombres critiques : \(x=1\) et \(x=2\).`,
        S`<b>Tableau de signes.</b> ${chart({ cuts: [[1, "1"], [2, "2"]], factors: [["x-1", (x) => x - 1], ["x-2", (x) => x - 2]], d: ["f'(x)", (x) => 6 * x * x - 18 * x + 12], tests: [0, 1.5, 3] })}`,
        S`<b>Les valeurs de y.</b> \(f(1)=2-9+12=5\) et \(f(2)=16-36+24=4\).`,
        S`<b>Vérifie avec des valeurs voisines.</b> \(f(0.9)=4.968\lt5\) et \(f(1.1)=4.972\lt5\), donc \((1,5)\) est plus haut que ses voisins ✓. \(f(1.9)=4.028\) et \(f(2.1)=4.032\) sont tous deux au-dessus de 4 ✓`],
      S`maximum relatif \((1,5)\); minimum relatif \((2,4)\)`,
      plane({ view: { xmin: -0.5, xmax: 3, ymin: -2, ymax: 9 }, curves: [{ f: (x) => 2 * x ** 3 - 9 * x * x + 12 * x, color: "violet" }], points: [{ x: 1, y: 5, label: "max (1, 5)", color: "red" }, { x: 2, y: 4, label: "min (2, 4)", color: "blue" }], lines: [{ m: 0, b: 5, color: "gray", dash: true }, { m: 0, b: 4, color: "gray", dash: true }], step: { x: 0.5, y: 1 } }, "En pointillé : les tangentes horizontales aux deux points critiques.")],
    ["Extremums absolus sur un intervalle", S`Trouve les extremums absolus de \(f(x)=x^3-3x^2-9x+2\) sur \([-2,4]\).`,
      [S`<b>Règle : la méthode de l'intervalle fermé.</b> Une fonction continue sur un intervalle fermé \([a,b]\) a un maximum et un minimum absolus. Ils se trouvent en des nombres critiques à l'intérieur de l'intervalle ou aux bornes; compare donc \(f\) en tous ces points.`,
        S`<b>Nombres critiques.</b> \(f'(x)=3x^2-6x-9=3(x^2-2x-3)=3(x-3)(x+1)\). Zéros \(x=-1\) et \(x=3\), tous deux dans \([-2,4]\).`,
        S`<b>Évalue en chaque candidat.</b> ${tv(["\\(x\\)", "\\(-2\\) (borne)", "\\(-1\\) (critique)", "\\(3\\) (critique)", "\\(4\\) (borne)"], ["\\(f(x)\\)", "\\(-8-12+18+2=0\\)", "\\(-1-3+9+2=7\\)", "\\(27-27-27+2=-25\\)", "\\(64-48-36+2=-18\\)"])}`,
        S`<b>Compare.</b> La plus grande valeur du tableau est 7 et la plus petite est \(-25\).`,
        S`<b>Vérifie avec le graphique.</b> Aucun point de la courbe sur \([-2,4]\) ne monte au-dessus de 7 ni ne descend sous \(-25\). La borne de droite \((4,-18)\) n'est pas le point le plus bas, car la courbe est déjà remontée après \(x=3\) ✓`],
      S`maximum absolu 7 en \(x=-1\); minimum absolu \(-25\) en \(x=3\)`,
      plane({ view: { xmin: -2.5, xmax: 4.5, ymin: -28, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 9 * x + 2, a: -2, b: 4, color: "violet" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "amber" }, { x: -1, y: 7, label: "max (−1, 7)", color: "green" }, { x: 3, y: -25, label: "min (3, −25)", color: "red" }, { x: 4, y: -18, label: "(4, −18)", color: "amber" }], step: { x: 1, y: 4 } }, "Seule la partie sur [−2, 4] est tracée; les bornes sont en ambre.")],
    ["Un nombre critique qui n'est pas un extremum", S`Classe le point critique de \(f(x)=(x-1)^3+2\).`,
      [S`<b>Nombre critique.</b> Selon la règle de dérivation en chaîne, \(f'(x)=3(x-1)^2\), qui vaut 0 seulement en \(x=1\). Le point est \((1,f(1))=(1,2)\).`,
        S`<b>Applique le test de la dérivée première.</b> \((x-1)^2\) est un carré, donc il est positif des deux côtés de 1. ${chart({ cuts: [[1, "1"]], d: ["f'(x)", (x) => 3 * (x - 1) ** 2] })}`,
        S`<b>Conclusion.</b> \(f'\) ne change pas de signe, donc \(f\) continue de monter en passant par \(x=1\). La tangente y est horizontale, mais le point n'est ni un maximum ni un minimum.`,
        S`<b>Vérifie.</b> \(f(0)=1\lt2\lt f(2)=3\) : les points à gauche sont plus bas et ceux à droite plus hauts, donc \((1,2)\) ne peut être ni un sommet ni un creux ✓`],
      S`\((1,2)\) est un point critique, mais ni un maximum ni un minimum`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -3, ymax: 7 }, curves: [{ f: (x) => (x - 1) ** 3 + 2, color: "violet" }, { f: () => 2, color: "green", a: 0.3, b: 1.7 }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "red" }, { x: 0, y: 1, label: "(0, 1)", color: "amber" }, { x: 2, y: 3, label: "(2, 3)", color: "amber" }], step: { x: 0.5, y: 1 } }, "Vert : la tangente horizontale en (1, 2). La courbe la traverse.")],
    ["Là où f′ n'existe pas", S`Trouve les nombres critiques de \(f(x)=x^{2/3}\) et classe-les.`,
      [S`<b>Définition.</b> Un nombre critique est une valeur \(c\) du domaine où \(f'(c)=0\) ou \(f'(c)\) n'existe pas. Vérifie donc les deux cas.`,
        S`<b>Dérive.</b> Règle de la puissance : \(f'(x)=\tfrac23x^{-1/3}=\dfrac{2}{3\sqrt[3]{x}}\).`,
        S`<b>Trouve les nombres critiques.</b> Le numérateur vaut 2, donc \(f'(x)\) n'est jamais 0. En \(x=0\), le dénominateur vaut 0, donc \(f'(0)\) n'existe pas. Mais \(f(0)=0\) est défini, donc \(x=0\) est un nombre critique.`,
        S`<b>Tableau de signes.</b> \(\sqrt[3]{x}\) a le signe de \(x\). ${chart({ cuts: [[0, "0"]], dne: [0], d: ["f'(x)", (x) => 2 / (3 * Math.cbrt(x))] })}`,
        S`<b>Forme en 0.</b> Les pentes deviennent de plus en plus raides des deux côtés (\(f'(x)\to\pm\infty\)), donc le graphique y présente une pointe, appelée point de rebroussement.`,
        S`<b>Vérifie.</b> \(f(x)=\left(\sqrt[3]x\right)^2\ge0\) pour tout \(x\), et \(f(0)=0\). Donc \((0,0)\) est le point le plus bas de tout le graphique ✓`],
      S`nombre critique \(x=0\) : minimum relatif (et absolu) \((0,0)\), en une pointe appelée point de rebroussement`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => Math.cbrt(x * x), color: "violet" }], points: [{ x: 0, y: 0, label: "rebroussement (0, 0)", color: "red" }, { x: -1, y: 1, label: "(−1, 1)", color: "amber" }, { x: 1, y: 1, label: "(1, 1)", color: "amber" }], step: { x: 1, y: 0.5 } })],
    ["Le profil d'une piste", S`La piste d'une montagne russe a une hauteur \(h(x)=0.1x^3-1.5x^2+6x+10\) m pour \(0\le x\le12\). Trouve les points le plus haut et le plus bas.`,
      [S`<b>Plan.</b> La piste est une fonction continue sur l'intervalle fermé \([0,12]\). Ses points le plus haut et le plus bas se trouvent parmi les nombres critiques et les bornes.`,
        S`<b>Nombres critiques.</b> \(h'(x)=0.3x^2-3x+6=0.3(x^2-10x+20)\). La formule quadratique donne \(x=\dfrac{10\pm\sqrt{100-80}}{2}=5\pm\sqrt5\approx2.76\) et \(7.24\). Les deux sont dans \([0,12]\).`,
        S`<b>Classe les changements de direction.</b> ${chart({ from: [0, "0"], to: [12, "12"], cuts: [[5 - Math.sqrt(5), "5-\\sqrt5"], [5 + Math.sqrt(5), "5+\\sqrt5"]], d: ["h'(x)", (x) => 0.3 * x * x - 3 * x + 6], f: "h" })}`,
        S`<b>Compare tous les candidats.</b> ${tv(["\\(x\\)", "0", "\\(5-\\sqrt5\\approx2.76\\)", "\\(5+\\sqrt5\\approx7.24\\)", "12"], ["\\(h(x)\\) (m)", "10", "\\(\\approx17.24\\)", "\\(\\approx12.76\\)", "38.8"])}`,
        S`<b>Conclus.</b> La plus grande valeur est 38.8 m à la borne \(x=12\); la plus petite est 10 m à la borne \(x=0\). La colline en \(x\approx2.76\) n'est qu'un maximum relatif, puisque la piste monte plus haut plus loin.`,
        S`<b>Vérifie.</b> \(h(12)=172.8-216+72+10=38.8\) ✓. La piste continue de monter après \(x\approx7.24\), comme le montre le tableau, donc la fin de la piste est le sommet ✓`],
      S`le plus haut : 38.8 m en \(x=12\) (une borne); le plus bas : 10 m en \(x=0\); la colline en \(x\approx2.76\) n'est qu'un maximum relatif`,
      plane({ view: { xmin: 0, xmax: 12.5, ymin: 0, ymax: 42 }, curves: [{ f: h, a: 0, b: 12, color: "violet" }], points: [{ x: 0, y: 10, label: "(0, 10)", color: "red" }, { x: 5 - Math.sqrt(5), y: h(5 - Math.sqrt(5)), label: "max. relatif", color: "blue" }, { x: 5 + Math.sqrt(5), y: h(5 + Math.sqrt(5)), label: "min. relatif", color: "blue" }, { x: 12, y: 38.8, label: "(12, 38.8)", color: "green" }], step: { x: 1, y: 5 } })],
  ]),

  practice([
    q("min. relatif", S`En quelle valeur de \(x\) la fonction \(f(x)=x^2-8x+3\) a-t-elle un minimum relatif?`, num(4),
      "f′(x) = 2x − 8.", [S`\(2x-8=0\).`], S`\(4\)`),
    q("max. relatif", S`Trouve la valeur du maximum relatif de \(f(x)=x^3-12x\).`, num(16),
      "f′ = 3x² − 12; + puis − en x = −2.", [S`\(f(-2)=-8+24\).`], S`\(16\)`),
    q("absolu", S`Trouve le maximum absolu de \(f(x)=x^2-4x\) sur \([0,5]\).`, num(5),
      "Compare f(0), f(2), f(5).", [S`\(0,\ -4,\ 5\).`], S`\(5\)`),
    q("signification", S`Si \(f'(c)=0\), alors :`, choice(["c est un nombre critique, mais f n'a peut-être aucun extremum en c", "f a un maximum relatif en c", "f a un minimum relatif en c", "f a un extremum absolu en c"], 0),
      "Pense à x³ en 0.", ["Le signe de f′ doit changer pour qu'il y ait un extremum."], "c est seulement un nombre critique"),
    q("absolu", S`Trouve le minimum absolu de \(f(x)=x^3-3x\) sur \([0,2]\).`, num(-2),
      "Le nombre critique 1 est à l'intérieur.", [S`\(f(0)=0\), \(f(1)=-2\), \(f(2)=2\).`], S`\(-2\)`),
  ]),

  ...hard([
    ["Imposer un minimum", S`Trouve \(a\) et \(b\) pour que \(f(x)=x^3+ax^2+b\) ait un minimum relatif en \((2,-1)\).`,
      [S`\(f'(x)=3x^2+2ax\); \(f'(2)=12+4a=0\Rightarrow a=-3\).`, S`\(f(2)=8-12+b=-1\Rightarrow b=3\).`, S`Vérification : \(f'(x)=3x(x-2)\) passe de \(-\) à \(+\) en 2 ✓.`],
      S`\(a=-3\), \(b=3\) : \(f(x)=x^3-3x^2+3\)`,
      plane({ view: { xmin: -1.5, xmax: 3.5, ymin: -3, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 3, color: "violet" }], points: [{ x: 2, y: -1, label: "min (2, −1)", color: "red" }, { x: 0, y: 3, label: "max (0, 3)", color: "blue" }], step: { x: 0.5, y: 1 } })],
    ["Extremums absolus d'une fonction rationnelle", S`Trouve les extremums absolus de \(f(x)=\dfrac{x}{x^2+9}\) sur \([0,6]\).`,
      [S`\(f'(x)=\dfrac{9-x^2}{(x^2+9)^2}=0\Rightarrow x=3\) (à l'intérieur).`, S`\(f(0)=0\), \(f(3)=\tfrac{3}{18}=\tfrac16\), \(f(6)=\tfrac{6}{45}\approx0.133\).`],
      S`maximum absolu \(\tfrac16\) en \(x=3\); minimum absolu 0 en \(x=0\)`,
      plane({ view: { xmin: -0.5, xmax: 7, ymin: -0.03, ymax: 0.2 }, curves: [{ f: (x) => x / (x * x + 9), a: 0, b: 6, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 3, y: 1 / 6, label: "(3, 1/6)", color: "green" }, { x: 6, y: 6 / 45, label: "(6, 0.13)", color: "amber" }], step: { x: 1, y: 0.05 } })],
  ], [
    q("difficile", S`Trouve le maximum absolu de \(f(x)=x^4-8x^2+3\) sur \([-1,3]\).`, num(12),
      "Nombres critiques dans l'intervalle : 0 et 2.", [S`\(f(-1)=-4\), \(f(0)=3\), \(f(2)=-13\), \(f(3)=12\).`], S`\(12\)`),
    q("difficile", S`Combien de nombres critiques \(f(x)=x^4-10x^3\) a-t-elle?`, num(2),
      "f′(x) = 4x³ − 30x² = 2x²(2x − 15).", [S`\(x=0\) et \(x=7.5\).`], S`\(2\)`),
    q("difficile", S`Trouve le minimum absolu de \(f(x)=x+\dfrac9x\) sur \([1,6]\).`, num(6),
      "f′ = 1 − 9/x².", [S`Nombre critique 3 : \(f(1)=10\), \(f(3)=6\), \(f(6)=7.5\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi un extremum relatif doit-il se trouver en un nombre critique?", "Si f′(c) était positive ou négative, f serait encore en train de monter ou de descendre en c, donc des points juste à côté de c seraient plus hauts ou plus bas."],
      ["Pourquoi vérifier les bornes?", "Sur un intervalle fermé, le graphique peut continuer de monter jusqu'au bout; le point le plus haut peut donc être une borne où f′ n'est pas 0."],
      ["Une fonction peut-elle n'avoir aucun maximum absolu?", "Sur un intervalle ouvert ou sur l'ensemble des réels, oui : x³ n'en a aucun. Sur un intervalle fermé, une fonction continue a toujours les deux."],
      ["Qu'est-ce qu'un point de rebroussement?", "Une pointe où les pentes tendent vers ±∞ de part et d'autre, comme x^(2/3) en 0; f′ n'y existe pas."],
      ["Comment présenter la réponse?", "Un tableau des candidats avec leurs valeurs de f, puis l'énoncé des valeurs extrêmes et des endroits où elles sont atteintes."],
    ],
    summary: [
      "Nombres critiques : f′ = 0 ou f′ n'existe pas.",
      "+ → − : max; − → + : min; aucun changement : ni l'un ni l'autre.",
      "Absolus sur [a, b] : compare les valeurs critiques et les bornes.",
      "Donne la valeur et l'endroit où elle est atteinte.",
    ],
    next: "La section 3.3 utilise la dérivée seconde pour décrire la courbure du graphique.",
  }),
];
