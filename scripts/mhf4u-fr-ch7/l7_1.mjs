// MHF4U-FR 7.1 — Formes équivalentes des équations exponentielles : écrire des nombres comme puissances d'une base
// commune, réécrire des expressions avec les lois des exposants et résoudre b^f(x) = b^g(x) en égalant les exposants.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, roots } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "7.1 Formes équivalentes des équations exponentielles";
export const ID = lessonId(7, 1);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Formes équivalentes des équations exponentielles",
    overview: S`Un même nombre peut s'écrire comme puissance de plusieurs façons : \(64=2^6=4^3=8^2\). Si on réécrit les deux membres d'une équation exponentielle comme puissances d'une même base, on obtient une équation ordinaire : si \(2^{3x}=2^{x+4}\), les exposants doivent être égaux, donc \(3x=x+4\). Dans cette leçon, tu t'exerces à faire cette réécriture, puis tu l'utilises pour résoudre des équations de façon exacte, sans calculatrice.`,
    goals: [
      "écrire des nombres, des racines et des fractions comme puissances d'une base choisie;",
      "utiliser les lois des exposants pour réécrire une expression exponentielle sous une forme équivalente;",
      "expliquer pourquoi \\(b^m=b^n\\) signifie \\(m=n\\) (pour \\(b>0,\\ b\\ne1\\));",
      "résoudre des équations exponentielles en écrivant les deux membres avec une base commune;",
      "vérifier une solution en la substituant dans l'équation.",
    ],
    curriculum: "A3.1 (reconnaître des expressions algébriques équivalentes comportant des exposants et résoudre des équations exponentielles simples en les réécrivant avec une base commune), A1.4 (établir le lien entre les lois des exposants et les lois des logarithmes)",
    prior: [
      [S`Simplifie \(2^3\cdot2^5\).`, S`\(2^8\).`],
      [S`Simplifie \((3^2)^4\).`, S`\(3^8\).`],
      [S`Écris \(\frac1{25}\) comme une puissance de \(5\).`, S`\(5^{-2}\).`],
    ],
    words: [
      ["Base commune", "une seule base utilisée pour écrire toutes les puissances d'une équation", "\\(8=2^3,\\ 32=2^5\\)"],
      ["Formes équivalentes", "deux expressions égales pour toutes les valeurs de la variable", "\\(4^x=2^{2x}\\)"],
      ["Égaler les exposants", "si \\(b^m=b^n\\), alors \\(m=n\\)", "\\(2^x=2^5\\Rightarrow x=5\\)"],
      ["Exposant rationnel", "\\(b^{m/n}=\\sqrt[n]{b^m}\\)", "\\(\\sqrt{27}=3^{3/2}\\)"],
    ],
  }),

  section("📌 Écrire des nombres comme puissances", S`
  <p>Avant de pouvoir résoudre une équation en égalant les exposants, il faut que chaque nombre de l'équation soit une puissance de la <b>même</b> base. Ce sont les lois des exposants qui permettent cette réécriture.</p>
  ${table(["Règle", "Signification", "Exemple"], [
    ["\\(b^m\\cdot b^n=b^{m+n}\\)", "multiplier : additionner les exposants", "\\(2^{x}\\cdot2^3=2^{x+3}\\)"],
    ["\\(\\dfrac{b^m}{b^n}=b^{m-n}\\)", "diviser : soustraire les exposants", "\\(\\dfrac{3^{2x}}{3}=3^{2x-1}\\)"],
    ["\\((b^m)^n=b^{mn}\\)", "puissance d'une puissance : multiplier", "\\(4^x=(2^2)^x=2^{2x}\\)"],
    ["\\(b^{-n}=\\dfrac1{b^n}\\)", "inverse : exposant négatif", "\\(\\dfrac1{8}=2^{-3}\\)"],
    ["\\(b^{m/n}=\\sqrt[n]{b^m}\\)", "racine : exposant fractionnaire", "\\(\\sqrt[3]{25}=5^{2/3}\\)"],
  ])}
  ${keyIdea(S`Si \(b>0\) et \(b\ne1\), alors \[b^m=b^n\iff m=n.\] La fonction \(y=b^x\) est biunivoque (elle est toujours croissante ou toujours décroissante), donc deux images égales proviennent nécessairement de valeurs de départ égales.`)}
  ${plane({ view: { xmin: -3, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 0, b: 8, color: "blue", dash: true }], points: [{ x: 3, y: 8, label: "(3, 8)", color: "amber" }], step: { x: 1, y: 1 } }, "y = 2ˣ coupe la droite y = 8 une seule fois, donc 2ˣ = 8 a l'unique solution x = 3.")}`),

  widget("ibExpGraph", { init: [8, 2, 0, 0] }),

  section("📌 Formes équivalentes d'une même fonction", S`
  <p>Des expressions d'apparence différente peuvent décrire la même fonction. Par exemple, \(2^{x+3}=2^x\cdot2^3=8\cdot2^x\) : une translation horizontale de \(3\) vers la gauche équivaut à un agrandissement vertical de facteur \(8\). Essaie-le dans l'explorateur : règle \(a=8\), puis compare avec \(a=1,\ h=-3\).</p>
  ${plane({ view: { xmin: -5, xmax: 2, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "gray" }, { f: (x) => 2 ** (x + 3), color: "violet" }], points: [{ x: 0, y: 8, label: "(0, 8)", color: "amber" }, { x: -3, y: 1, label: "(−3, 1)", color: "blue" }], step: { x: 1, y: 2 } }, "y = 2ˣ⁺³ et y = 8·2ˣ sont la même courbe : les deux passent par (−3, 1) et (0, 8).")}
  ${watchOut([
    "Tu ne peux égaler les exposants que si chaque membre est une seule puissance de la même base : on ne peut pas résoudre 2ˣ + 2ˣ = 2⁵ en écrivant x + x = 5.",
    "4ˣ est égal à (2²)ˣ = 2²ˣ, et non à 2ˣ⁺² : pour une puissance d'une puissance, on multiplie.",
    "Mets l'exposant entier entre parenthèses : 8ˣ⁺¹ = (2³)ˣ⁺¹ = 2³⁽ˣ⁺¹⁾ = 2³ˣ⁺³, et non 2³ˣ⁺¹.",
    "Une fraction comme 1/27 est une puissance négative (3⁻³), pas un nombre négatif.",
    "Vérifie toujours en substituant la réponse dans l'équation de DÉPART.",
  ])}`),

  examples([
    ["Réécrire avec une seule base", S`Écris chaque nombre comme une puissance de \(2\) : \(32\), \(\frac1{16}\), \(\sqrt{8}\), \(4^{x}\).`,
      [S`<b>Objectif.</b> Pour chaque quantité, trouve l'exposant \(n\) tel que \(2^n\) lui soit égal. Un exposant négatif représente un inverse, car \(b^{-n}=\frac1{b^n}\). Un exposant fractionnaire représente une racine, car \(b^{1/n}=\sqrt[n]{b}\).`,
        S`<b>Nombre entier.</b> Divise par \(2\) jusqu'à obtenir \(1\) : \(32\to16\to8\to4\to2\to1\). Il y a \(5\) divisions, donc \(32=2^5\).`,
        S`<b>Fraction.</b> Le dénominateur est une puissance de \(2\) : \(16=2^4\). Le nombre est l'inverse de \(2^4\), et prendre l'inverse change le signe de l'exposant, donc \(\frac1{16}=2^{-4}\).`,
        S`<b>Racine.</b> Écris d'abord la racine comme une puissance : \(\sqrt8=8^{1/2}\). Écris ensuite la base comme une puissance de \(2\) : \(8=2^3\). Pour une puissance d'une puissance, on multiplie les exposants : \((2^3)^{1/2}=2^{3\times\frac12}=2^{3/2}\).`,
        S`<b>Exposant variable.</b> La même loi s'applique avec \(x\) : \(4^x=(2^2)^x=2^{2x}\). Les exposants se multiplient. Ils ne s'additionnent pas, donc \(4^x\) n'est pas \(2^{x+2}\). Le test avec \(x=3\) le montre : \(4^3=64=2^6\), mais \(2^{3+2}=32\).`,
        S`<b>Vérification sur le graphique.</b> Chaque nombre ici est un point de \(y=2^x\) : l'exposant est l'abscisse et le nombre est l'ordonnée. Le graphique montre \((5,\,32)\), \(\left(1.5,\,2.83\right)\) et \(\left(-4,\,0.06\right)\), et \(\sqrt8\approx2.83\), \(\frac1{16}\approx0.06\) ✓`],
      S`\(32=2^5\), \(\frac1{16}=2^{-4}\), \(\sqrt8=2^{3/2}\), \(4^x=2^{2x}\)`,
      plane({ view: { xmin: -5, xmax: 6, ymin: -2, ymax: 36 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], points: [{ x: 5, y: 32, label: "(5, 32)", color: "amber" }, { x: 1.5, y: 2 ** 1.5, label: "(1.5, 2.83)", color: "amber" }, { x: -4, y: 1 / 16, label: "(−4, 0.06)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Simplifier en une seule puissance", S`Écris \(\dfrac{9^{x}\cdot 27}{3^{x-1}}\) comme une seule puissance de \(3\).`,
      [S`<b>Objectif et plan.</b> Les lois des exposants ne combinent que des puissances de même base. Écris donc d'abord chaque facteur comme une puissance de \(3\), puis multiplie, puis divise.`,
        S`<b>Même base.</b> \(9^x=(3^2)^x=3^{2x}\) et \(27=3^3\). Le dénominateur \(3^{x-1}\) est déjà en base \(3\).`,
        S`<b>Multiplier au numérateur.</b> Multiplier des puissances de même base revient à additionner les exposants : \(3^{2x}\cdot3^3=3^{2x+3}\).`,
        S`<b>Diviser.</b> Diviser revient à soustraire les exposants. On soustrait l'exposant entier du dénominateur, donc on le met entre parenthèses : \(3^{(2x+3)-(x-1)}\).`,
        S`<b>Simplifier l'exposant.</b> Le signe moins change les deux termes de la parenthèse : \(2x+3-x+1=x+4\), donc l'expression est \(3^{x+4}\).`,
        S`<b>Vérification avec deux valeurs.</b> Pour \(x=1\) : l'expression de départ vaut \(\dfrac{9\cdot27}{3^0}=243\), et \(3^{5}=243\) ✓. Pour \(x=-1\) : l'expression de départ vaut \(\dfrac{\frac19\cdot27}{3^{-2}}=3\times9=27\), et \(3^{3}=27\) ✓. Les deux formes donnent les mêmes valeurs, donc le graphique montre une seule courbe.`],
      S`\(3^{x+4}\)`,
      plane({ view: { xmin: -5, xmax: 1.5, ymin: -5, ymax: 260 }, curves: [{ f: (x) => 3 ** (x + 4), color: "violet" }], points: [{ x: -1, y: 27, label: "(−1, 27)", color: "amber" }, { x: 1, y: 243, label: "(1, 243)", color: "amber" }], step: { x: 1, y: 20 } })],
    ["Résoudre en égalant les exposants", S`Résous \(2^{3x-1}=32\).`,
      [S`<b>Objectif et règle.</b> L'inconnue se trouve dans un exposant. Si les deux membres sont des puissances de la même base \(b\) (avec \(b>0\), \(b\ne1\)), alors les exposants doivent être égaux, car \(y=b^x\) ne prend jamais deux fois la même valeur.`,
        S`<b>Base commune.</b> Le membre de gauche est déjà en base \(2\). Comme \(2^5=32\), l'équation devient \(2^{3x-1}=2^5\).`,
        S`<b>Égaler les exposants.</b> Les deux membres sont des puissances uniques de \(2\), donc \(3x-1=5\). L'équation exponentielle est maintenant une équation linéaire.`,
        S`<b>Résoudre.</b> Ajoute \(1\) aux deux membres : \(3x=6\). Divise par \(3\) : \(x=2\).`,
        S`<b>Vérification par substitution.</b> Membre de gauche : \(2^{3(2)-1}=2^{5}=32\). Membre de droite : \(32\) ✓`,
        S`<b>Vérification sur le graphique.</b> La courbe \(y=2^{3x-1}\) est toujours croissante, donc elle ne peut couper la droite \(y=32\) qu'une seule fois. Elles se coupent en \((2,\,32)\), donc \(x=2\) est l'unique solution ✓`],
      S`\(x=2\)`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -4, ymax: 40 }, curves: [{ f: (x) => 2 ** (3 * x - 1), color: "violet" }], lines: [{ m: 0, b: 32, color: "blue", dash: true }], points: [{ x: 2, y: 32, label: "(2, 32)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Bases différentes de chaque côté", S`Résous \(4^{x+1}=8^{x-1}\).`,
      [S`<b>Objectif et plan.</b> Les bases sont différentes, donc on ne peut pas encore comparer les exposants. Comme \(4\) et \(8\) sont tous deux des puissances de \(2\), \(2\) est la base commune.`,
        S`<b>Réécrire le membre de gauche.</b> \(4^{x+1}=(2^2)^{x+1}=2^{2(x+1)}=2^{2x+2}\). Le facteur \(2\) multiplie l'exposant entier, donc les deux termes sont doublés.`,
        S`<b>Réécrire le membre de droite.</b> \(8^{x-1}=(2^3)^{x-1}=2^{3(x-1)}=2^{3x-3}\).`,
        S`<b>Égaler les exposants.</b> On a maintenant \(2^{2x+2}=2^{3x-3}\), et les deux membres sont des puissances uniques de \(2\), donc \(2x+2=3x-3\).`,
        S`<b>Résoudre.</b> Soustrais \(2x\) des deux membres : \(2=x-3\). Ajoute \(3\) : \(x=5\).`,
        S`<b>Vérification par substitution.</b> Membre de gauche : \(4^{6}=4096\). Membre de droite : \(8^{4}=4096\) ✓. Sur le graphique, les deux courbes se coupent en \((5,\,4096)\) ✓`],
      S`\(x=5\)`,
      plane({ view: { xmin: 0, xmax: 6.5, ymin: -200, ymax: 5000 }, curves: [{ f: (x) => 4 ** (x + 1), color: "violet" }, { f: (x) => 8 ** (x - 1), color: "blue" }], points: [{ x: 5, y: 4096, label: "(5, 4096)", color: "amber" }], step: { x: 1, y: 500 } })],
    ["Fractions et racines", S`Résous \(\left(\tfrac19\right)^{x}=\sqrt{27}\).`,
      [S`<b>Objectif et plan.</b> Une fraction et une racine peuvent toutes deux s'écrire comme puissances de \(3\) : un inverse donne un exposant négatif et une racine donne un exposant fractionnaire.`,
        S`<b>Réécrire le membre de gauche.</b> \(\frac19=\frac1{3^2}=3^{-2}\), donc \(\left(\frac19\right)^x=(3^{-2})^x=3^{-2x}\).`,
        S`<b>Réécrire le membre de droite.</b> \(\sqrt{27}=27^{1/2}=(3^3)^{1/2}=3^{3/2}\).`,
        S`<b>Égaler les exposants.</b> \(3^{-2x}=3^{3/2}\) donne \(-2x=\frac32\).`,
        S`<b>Résoudre.</b> Divise les deux membres par \(-2\) : \(x=\frac32\times\left(-\frac12\right)=-\frac34\).`,
        S`<b>Vérification par substitution.</b> Un exposant négatif renverse la fraction : \(\left(\frac19\right)^{-3/4}=9^{3/4}=(3^2)^{3/4}=3^{3/2}=\sqrt{27}\) ✓`,
        S`<b>Le signe est-il logique?</b> \(\sqrt{27}\approx5.2\) est supérieur à \(1\). La courbe \(y=\left(\frac19\right)^x\) est décroissante et passe par \((0,\,1)\), donc elle est au-dessus de \(1\) seulement pour des \(x\) négatifs. Le graphique montre l'intersection en \((-0.75,\,5.2)\) ✓`],
      S`\(x=-\frac34\)`,
      plane({ view: { xmin: -1.5, xmax: 1, ymin: -1, ymax: 20 }, curves: [{ f: (x) => (1 / 9) ** x, color: "violet" }], lines: [{ m: 0, b: Math.sqrt(27), color: "blue", dash: true }], points: [{ x: -0.75, y: Math.sqrt(27), label: "(−0.75, 5.2)", color: "amber" }, { x: 0, y: 1, label: "(0, 1)", color: "gray" }], step: { x: 0.5, y: 2 } })],
  ]),

  practice([
    q("réécrire", S`Écris \(\frac1{125}\) comme une puissance de \(5\). Entre l'exposant.`, num(-3), "125 = 5³.", [S`\(\frac1{125}=5^{-3}\).`], S`\(-3\)`),
    q("simplifier", S`\(\dfrac{8^{x}}{2^{x+2}}=2^{n}\). Quelle expression est égale à \(n\)?`, choice(["2x − 2", "3x + 2", "4x − 2", "x − 2"], 0), "8ˣ = 2³ˣ; soustrais les exposants.", [S`\(3x-(x+2)=2x-2\).`], S`\(2x-2\)`),
    q("résoudre", S`Résous \(3^{2x+1}=243\).`, num(2), "243 = 3⁵.", [S`\(2x+1=5\Rightarrow x=2\).`], S`\(2\)`),
    q("résoudre", S`Résous \(25^{x}=125^{x-2}\).`, num(6), "Base 5.", [S`\(2x=3(x-2)=3x-6\Rightarrow x=6\).`], S`\(6\)`),
    q("résoudre", S`Résous \(\left(\tfrac12\right)^{x}=16\).`, num(-4), "1/2 = 2⁻¹ et 16 = 2⁴.", [S`\(2^{-x}=2^4\Rightarrow x=-4\).`], S`\(-4\)`),
  ]),

  ...hard([
    ["Une équation du second degré dans l'exposant", S`Résous \(3^{x^2}=9^{x+4}\).`,
      [S`<b>Base commune 3 :</b> \(9^{x+4}=3^{2(x+4)}=3^{2x+8}\).`,
        S`<b>Égaler les exposants :</b> \(x^2=2x+8\), donc \(x^2-2x-8=0\).`,
        S`<b>Factoriser :</b> \((x-4)(x+2)=0\), donc \(x=4\) ou \(x=-2\).`,
        S`<b>Vérifier \(x=4\) :</b> \(3^{16}\) et \(9^{8}=3^{16}\) ✓. <b>Vérifier \(x=-2\) :</b> \(3^{4}=81\) et \(9^{2}=81\) ✓`],
      S`\(x=4\) ou \(x=-2\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -10, ymax: 20 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 2, b: 8, color: "blue" }], points: [{ x: 4, y: 16, label: "(4, 16)", color: "amber" }, { x: -2, y: 4, label: "(−2, 4)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Mettre une puissance commune en évidence", S`Résous \(2^{x+3}-2^{x}=56\).`,
      [S`<b>Pourquoi ne pas égaler les exposants?</b> Le membre de gauche est une différence de deux puissances, et non une seule puissance; il faut donc d'abord le réécrire.`,
        S`<b>Forme équivalente :</b> \(2^{x+3}=2^x\cdot2^3=8\cdot2^x\).`,
        S`<b>Facteur commun :</b> \(8\cdot2^x-2^x=7\cdot2^x\), donc \(7\cdot2^x=56\) et \(2^x=8=2^3\).`,
        S`<b>Égaler les exposants :</b> \(x=3\).`,
        S`<b>Vérification :</b> \(2^6-2^3=64-8=56\) ✓`],
      S`\(x=3\)`],
  ], [
    q("difficile", S`Résous \(2^{x^2-3x}=\frac1{4}\). Entre les deux racines.`, roots(1, 2), "1/4 = 2⁻².", [S`\(x^2-3x=-2\Rightarrow(x-1)(x-2)=0\).`], S`\(x=1,\ 2\)`),
    q("difficile", S`Résous \(3^{x+2}+3^{x}=90\).`, num(2), "Mets 3ˣ en évidence.", [S`\(3^x(9+1)=90\Rightarrow3^x=9\Rightarrow x=2\).`], S`\(2\)`),
    q("difficile", S`Résous \(\sqrt[3]{16^{x}}=\left(\tfrac18\right)^{1-x}\).`, num(9 / 5, 0.0001), "Base 2 : 2^(4x/3) = 2^(3x − 3).", [S`\(\sqrt[3]{16^x}=2^{4x/3}\) et \(\left(\frac18\right)^{1-x}=2^{-3(1-x)}=2^{3x-3}\).`, S`\(\frac{4x}3=3x-3\Rightarrow4x=9x-9\Rightarrow x=\frac95\).`], S`\(\frac95\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi puis-je égaler les exposants?", "Parce que y = bˣ est biunivoque pour b > 0, b ≠ 1 : des images égales proviennent de valeurs de départ égales."],
      ["Comment choisir la base commune?", "Prends la plus petite base dont chaque nombre est une puissance : 4, 8, 16 et 1/2 sont tous des puissances de 2."],
      ["Comment écrire une racine comme une puissance?", "ⁿ√(bᵐ) = b^(m/n), par exemple √27 = 3^(3/2)."],
      ["2ˣ⁺³ est-il égal à 8·2ˣ?", "Oui : 2ˣ⁺³ = 2ˣ·2³ = 8·2ˣ."],
      ["Que faire si l'équation contient une somme de puissances?", "Mets d'abord la puissance commune en évidence, par exemple 2ˣ⁺³ − 2ˣ = 7·2ˣ."],
    ],
    summary: [
      "Réécris chaque nombre comme une puissance d'une même base.",
      "bᵐ = bⁿ ⇔ m = n (b > 0, b ≠ 1).",
      "Mets l'exposant entier entre parenthèses quand tu appliques (bᵐ)ⁿ.",
      "Factorise les sommes de puissances avant d'égaler les exposants.",
    ],
    next: "En 7.2, tu résoudras des équations exponentielles dont les membres ne peuvent pas s'écrire avec une base commune, à l'aide des logarithmes.",
  }),
];
