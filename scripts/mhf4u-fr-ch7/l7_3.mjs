// MHF4U-FR 7.3 — Loi du produit et loi du quotient des logarithmes : démonstrations à partir des lois des exposants,
// évaluer, développer et condenser, et utiliser des logarithmes connus pour en trouver d'autres.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "7.3 Loi du produit et loi du quotient des logarithmes";
export const ID = lessonId(7, 3);

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Loi du produit et loi du quotient des logarithmes",
    overview: S`Multiplier des puissances additionne les exposants, et diviser les soustrait. Comme un logarithme <i>est</i> un exposant, il en va de même pour les logarithmes : \(\log_b(xy)=\log_bx+\log_by\) et \(\log_b\frac xy=\log_bx-\log_by\). Avec la loi de la puissance vue en 6.4, ces lois permettent de séparer un logarithme compliqué en morceaux simples (développer) ou de combiner plusieurs logarithmes en un seul (condenser). Condenser est l'étape clé pour résoudre les équations logarithmiques en 7.4.`,
    goals: [
      "démontrer la loi du produit et la loi du quotient à partir des lois des exposants;",
      "évaluer de façon exacte des sommes et des différences de logarithmes;",
      "développer le logarithme d'un produit, d'un quotient ou d'une puissance;",
      "condenser plusieurs logarithmes en un seul logarithme;",
      "utiliser des valeurs connues comme \\(\\log2\\) et \\(\\log3\\) pour trouver d'autres logarithmes.",
    ],
    curriculum: "A1.4 (établir des liens entre les lois des exposants et les lois des logarithmes, vérifier ces lois et les utiliser pour simplifier et évaluer), A3.1 (reconnaître des expressions algébriques équivalentes comportant des logarithmes)",
    prior: [
      [S`Simplifie \(5^3\cdot5^4\) et \(\dfrac{5^7}{5^2}\).`, S`\(5^7\) et \(5^5\).`],
      [S`Évalue \(\log_2 64\).`, S`\(6\).`],
      [S`Applique la loi de la puissance : \(\log x^4=\ ?\)`, S`\(4\log x\).`],
    ],
    words: [
      ["Loi du produit", "\\(\\log_b(xy)=\\log_bx+\\log_by\\)", "\\(\\log_26+\\log_2\\tfrac{4}{3}=\\log_28=3\\)"],
      ["Loi du quotient", "\\(\\log_b\\dfrac xy=\\log_bx-\\log_by\\)", "\\(\\log 500-\\log5=\\log100=2\\)"],
      ["Développer", "écrire un logarithme comme une somme ou une différence de logarithmes plus simples", "\\(\\log(x^2y)=2\\log x+\\log y\\)"],
      ["Condenser", "écrire plusieurs logarithmes en un seul", "\\(\\log a-\\log b=\\log\\frac ab\\)"],
    ],
  }),

  section("📌 D'où viennent les lois", S`
  <p>Pose \(\log_bx=m\) et \(\log_by=n\), donc \(x=b^m\) et \(y=b^n\).</p>
  <ul>
    <li><b>Produit :</b> \(xy=b^m\cdot b^n=b^{m+n}\), donc \(\log_b(xy)=m+n=\log_bx+\log_by\).</li>
    <li><b>Quotient :</b> \(\dfrac xy=\dfrac{b^m}{b^n}=b^{m-n}\), donc \(\log_b\dfrac xy=m-n=\log_bx-\log_by\).</li>
  </ul>
  ${table(["Loi des exposants", "Loi des logarithmes (x, y > 0)"], [
    ["\\(b^m\\cdot b^n=b^{m+n}\\)", "\\(\\log_b(xy)=\\log_bx+\\log_by\\)"],
    ["\\(\\dfrac{b^m}{b^n}=b^{m-n}\\)", "\\(\\log_b\\dfrac xy=\\log_bx-\\log_by\\)"],
    ["\\((b^m)^n=b^{mn}\\)", "\\(\\log_b(x^n)=n\\log_bx\\)"],
  ])}
  ${keyIdea(S`Les logarithmes transforment la multiplication en addition, la division en soustraction et les puissances en multiplication. Les trois lois exigent la même base pour chaque logarithme et des arguments positifs.`)}`),

  widget("ibLogLaws", { init: [0, 8, 4] }),

  section("📌 Voir la loi du produit sur un graphique", S`
  <p>Selon la loi du produit, \(\log(10x)=\log10+\log x=1+\log x\). Le graphique de \(y=\log(10x)\) est donc celui de \(y=\log x\) déplacé de <b>1 vers le haut</b> : une compression horizontale de facteur 10 équivaut à une translation verticale.</p>
  ${plane({ view: { xmin: -0.5, xmax: 10.5, ymin: -2, ymax: 2.5 }, curves: [{ f: (x) => L(x), a: 0.01, color: "gray" }, { f: (x) => L(10 * x), a: 0.001, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "blue" }, { x: 1, y: 1, label: "(1, 1)", color: "amber" }, { x: 0.1, y: 0, color: "amber" }], step: { x: 1, y: 0.5 } }, "y = log(10x) (violet) est y = log x (gris) translaté de 1 vers le haut.")}
  ${watchOut([
    "log(x + y) n'est PAS égal à log x + log y. La loi du produit porte sur log(xy).",
    "log x · log y n'est PAS égal à log(xy); et log x ÷ log y n'est PAS égal à log(x/y) (c'est un changement de base).",
    "Dans log(x/y), l'ordre compte : log x − log y, et non log y − log x.",
    "Applique la loi de la puissance au bon facteur seulement : log(3x²) = log 3 + 2 log x, et non 2 log(3x).",
    "Condense seulement des logarithmes de même base.",
  ])}`),

  examples([
    ["Évaluer une somme", S`Évalue \(\log_6 9+\log_6 4\) de façon exacte.`,
      [S`<b>Objectif et règle.</b> Aucun des deux logarithmes n'est un nombre entier, donc les évaluer séparément ne donnerait que des décimales. La loi du produit les combine : \(\log_bx+\log_by=\log_b(xy)\), pourvu que les bases soient les mêmes.`,
        S`<b>Vérifier les conditions.</b> Les deux logarithmes sont en base \(6\) et les deux arguments sont positifs, donc la loi s'applique.`,
        S`<b>Combiner.</b> \(\log_69+\log_64=\log_6(9\times4)=\log_636\).`,
        S`<b>Évaluer.</b> \(\log_636\) pose la question : à quelle puissance faut-il élever \(6\) pour obtenir \(36\)? Comme \(6^2=36\), la valeur est \(2\).`,
        S`<b>Vérification par changement de base.</b> \(\log_69\approx1.2263\) et \(\log_64\approx0.7737\), et \(1.2263+0.7737=2.0000\) ✓. Sur le graphique, les hauteurs en \(x=9\) et en \(x=4\) s'additionnent pour donner la hauteur en \(x=36\) ✓`],
      S`\(2\)`,
      plane({ view: { xmin: -1, xmax: 40, ymin: -1, ymax: 3 }, curves: [{ f: (x) => Math.log(x) / Math.log(6), a: 0.1, color: "violet" }], points: [{ x: 4, y: 0.7737, label: "(4, 0.77)", color: "blue" }, { x: 9, y: 1.2263, label: "(9, 1.23)", color: "blue" }, { x: 36, y: 2, label: "(36, 2)", color: "amber" }], step: { x: 4, y: 0.5 } })],
    ["Évaluer une différence", S`Évalue \(\log_2 48-\log_2 3\) et \(\log 0.5+\log 200\).`,
      [S`<b>Règle pour une différence.</b> Soustraire des logarithmes de même base revient à diviser les arguments : \(\log_bx-\log_by=\log_b\frac xy\).`,
        S`<b>Première expression.</b> \(\log_248-\log_23=\log_2\dfrac{48}{3}=\log_216\). Comme \(2^4=16\), la valeur est \(4\).`,
        S`<b>Règle pour une somme.</b> Additionner des logarithmes de même base revient à multiplier les arguments.`,
        S`<b>Deuxième expression.</b> \(\log0.5+\log200=\log(0.5\times200)=\log100\). Comme \(10^2=100\), la valeur est \(2\).`,
        S`<b>Vérifier la première.</b> \(\log_248\approx5.585\) et \(\log_23\approx1.585\), et la différence vaut \(4.000\) ✓`,
        S`<b>Vérifier la deuxième.</b> \(\log0.5\approx-0.3010\) est négatif parce que \(0.5<1\), et \(\log200\approx2.3010\). La somme vaut \(2\) ✓`],
      S`\(4\) et \(2\)`,
      plane({ view: { xmin: -2, xmax: 52, ymin: -1, ymax: 7 }, curves: [{ f: (x) => Math.log2(x), a: 0.2, color: "violet" }], points: [{ x: 3, y: Math.log2(3), label: "(3, 1.58)", color: "blue" }, { x: 16, y: 4, label: "(16, 4)", color: "amber" }, { x: 48, y: Math.log2(48), label: "(48, 5.58)", color: "blue" }], step: { x: 4, y: 1 } })],
    ["Développer", S`Développe \(\log_3\dfrac{9x^2}{\sqrt y}\) le plus possible (\(x,y>0\)).`,
      [S`<b>Plan.</b> Travaille de l'extérieur vers l'intérieur. La dernière opération de l'argument est la division; applique donc d'abord la loi du quotient, puis la loi du produit, puis la loi de la puissance.`,
        S`<b>Loi du quotient.</b> \(\log_3\dfrac{9x^2}{\sqrt y}=\log_3(9x^2)-\log_3\sqrt y\).`,
        S`<b>Loi du produit au numérateur.</b> \(\log_3(9x^2)=\log_39+\log_3x^2\).`,
        S`<b>Écrire la racine comme une puissance.</b> \(\sqrt y=y^{1/2}\), donc l'expression est \(\log_39+\log_3x^2-\log_3y^{1/2}\).`,
        S`<b>Loi de la puissance et évaluation.</b> \(\log_39=2\), \(\log_3x^2=2\log_3x\) et \(\log_3y^{1/2}=\tfrac12\log_3y\). Le résultat est \(2+2\log_3x-\tfrac12\log_3y\).`,
        S`<b>Vérification avec \(x=3\), \(y=9\).</b> Expression de départ : \(\log_3\dfrac{9\cdot9}{3}=\log_327=3\). Forme développée : \(2+2(1)-\tfrac12(2)=3\) ✓. Le graphique fixe \(y=9\) : les deux formes deviennent \(1+2\log_3x\) et passent par \((3,\,3)\).`],
      S`\(2+2\log_3x-\tfrac12\log_3y\)`,
      plane({ view: { xmin: -0.5, xmax: 10, ymin: -3, ymax: 6 }, curves: [{ f: (x) => 1 + 2 * Math.log(x) / Math.log(3), a: 0.1, color: "violet" }], points: [{ x: 3, y: 3, label: "(3, 3)", color: "amber" }, { x: 1, y: 1, label: "(1, 1)", color: "blue" }], step: { x: 1, y: 1 } }, "Avec y = 9 fixé, l'expression vaut 1 + 2 log₃ x.")],
    ["Condenser", S`Écris \(2\log a+3\log b-\tfrac12\log c\) comme un seul logarithme.`,
      [S`<b>Plan.</b> La loi du produit et la loi du quotient exigent des coefficients égaux à \(1\). Fais donc d'abord monter chaque coefficient dans un exposant, en appliquant la loi de la puissance à l'envers.`,
        S`<b>Loi de la puissance.</b> \(2\log a=\log a^2\), \(3\log b=\log b^3\) et \(\tfrac12\log c=\log c^{1/2}=\log\sqrt c\). L'expression devient \(\log a^2+\log b^3-\log\sqrt c\).`,
        S`<b>Loi du produit pour la somme.</b> \(\log a^2+\log b^3=\log(a^2b^3)\).`,
        S`<b>Loi du quotient pour la différence.</b> \(\log(a^2b^3)-\log\sqrt c=\log\dfrac{a^2b^3}{\sqrt c}\). Un terme soustrait se retrouve au dénominateur.`,
        S`<b>Vérification avec \(a=2\), \(b=1\), \(c=4\).</b> Expression de départ : \(2\log2+3\log1-\tfrac12\log4=2\log2+0-\log2=\log2\). Forme condensée : \(\log\dfrac{4\cdot1}{2}=\log2\) ✓`,
        S`<b>Sur le graphique.</b> Avec \(b=1\) et \(c=4\) fixés, les deux formes valent \(2\log a-\log2\), qui passe par \((2,\,0.30)\) ✓`],
      S`\(\log\dfrac{a^2b^3}{\sqrt c}\)`,
      plane({ view: { xmin: -0.5, xmax: 10, ymin: -2, ymax: 2 }, curves: [{ f: (a) => 2 * L(a) - L(2), a: 0.1, color: "violet" }], points: [{ x: 2, y: L(2), label: "(2, 0.30)", color: "amber" }, { x: Math.SQRT2, y: 0, label: "(1.41, 0)", color: "blue" }], step: { x: 1, y: 0.5 } }, "Avec b = 1 et c = 4 fixés, en fonction de a.")],
    ["Construire des logarithmes à partir de valeurs connues", S`Sachant que \(\log2\approx0.3010\) et \(\log3\approx0.4771\), trouve \(\log18\), \(\log1.5\) et \(\log0.6\) sans utiliser la touche log.`,
      [S`<b>Plan.</b> Les lois transforment la multiplication en addition. Écris donc chaque nombre en n'utilisant que les facteurs \(2\), \(3\) et \(10\), dont les logarithmes sont connus (\(\log10=1\)).`,
        S`<b>Factoriser.</b> \(18=2\times3^2\), \(\ 1.5=\dfrac32\) et \(0.6=\dfrac{6}{10}=\dfrac{2\times3}{10}\).`,
        S`<b>\(\log18\).</b> Lois du produit et de la puissance : \(\log2+2\log3\approx0.3010+0.9542=1.2552\).`,
        S`<b>\(\log1.5\).</b> Loi du quotient : \(\log3-\log2\approx0.4771-0.3010=0.1761\).`,
        S`<b>\(\log0.6\).</b> Les deux lois : \(\log2+\log3-\log10\approx0.3010+0.4771-1=-0.2219\).`,
        S`<b>Vérification.</b> Une calculatrice donne \(1.2553\), \(0.1761\) et \(-0.2218\) ✓; les petits écarts viennent de l'arrondissement des valeurs données. Comme \(0.6<1\), son logarithme doit être négatif, et le graphique montre ce point sous l'axe des \(x\) ✓`],
      S`\(\approx1.2552,\ 0.1761,\ -0.2219\)`,
      plane({ view: { xmin: -0.5, xmax: 20, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => L(x), a: 0.3, color: "violet" }], points: [{ x: 18, y: 1.2552, label: "(18, 1.26)", color: "amber" }, { x: 1.5, y: 0.1761, label: "(1.5, 0.18)", color: "blue" }, { x: 0.6, y: -0.2219, label: "(0.6, −0.22)", color: "red" }], step: { x: 2, y: 0.25 } })],
  ]),

  practice([
    q("produit", S`Évalue \(\log_4 8+\log_4 32\).`, num(4), "8 × 32 = 256.", [S`\(\log_4256=4\).`], S`\(4\)`),
    q("quotient", S`Évalue \(\log_3 54-\log_3 2\).`, num(3), "54 ÷ 2 = 27.", [S`\(\log_327=3\).`], S`\(3\)`),
    q("condenser", S`Quelle expression est égale à \(\log x+\log y-\log z\)?`, choice(["log(xy/z)", "log(x + y − z)", "log x · log y / log z", "log(xy) / log z"], 0), "Les sommes multiplient, les différences divisent.", [S`\(\log(xy)-\log z=\log\frac{xy}z\).`], S`\(\log\frac{xy}{z}\)`),
    q("développer", S`\(\log_2(8x^3)=a+b\log_2x\). Entre \(a+b\).`, num(6), "Loi du produit, puis loi de la puissance.", [S`\(\log_28+\log_2x^3=3+3\log_2x\), donc \(a+b=6\).`], S`\(6\)`),
    q("valeurs connues", S`Sachant que \(\log2\approx0.3010\) et \(\log3\approx0.4771\), estime \(\log12\).`, num(1.0791, 0.0015), "12 = 2² × 3.", [S`\(2(0.3010)+0.4771=1.0791\).`], S`\(1.0791\)`),
  ]),

  ...hard([
    ["Simplifier avec un argument factorisé", S`Simplifie \(\log_2(x^2-9)-\log_2(x+3)\), indique où l'expression est définie, puis évalue-la en \(x=11\).`,
      [S`<b>Loi du quotient :</b> \(\log_2\dfrac{x^2-9}{x+3}\).`,
        S`<b>Factoriser la différence de carrés :</b> \(\dfrac{(x-3)(x+3)}{x+3}=x-3\), donc l'expression est \(\log_2(x-3)\).`,
        S`<b>Domaine :</b> l'expression de départ exige \(x^2-9>0\) et \(x+3>0\), donc \(x>3\) (la même condition que \(x-3>0\)).`,
        S`<b>Évaluer :</b> \(\log_2(11-3)=\log_28=3\).`,
        S`<b>Vérification :</b> \(\log_2112-\log_214=\log_2\dfrac{112}{14}=\log_28=3\) ✓`],
      S`\(\log_2(x-3)\) pour \(x>3\); valeur \(3\)`],
    ["Écrire en fonction de lettres données", S`Si \(\log_b2=p\) et \(\log_b5=q\), écris \(\log_b\dfrac{40}{b^2}\) en fonction de \(p\) et de \(q\).`,
      [S`<b>Loi du quotient :</b> \(\log_b40-\log_bb^2\).`,
        S`<b>Factoriser 40 :</b> \(40=2^3\times5\), donc \(\log_b40=3\log_b2+\log_b5=3p+q\).`,
        S`<b>Loi de la puissance :</b> \(\log_bb^2=2\log_bb=2\).`,
        S`<b>Combiner :</b> \(3p+q-2\).`,
        S`<b>Vérification avec \(b=10\) :</b> \(\log0.4\approx-0.3979\) et \(3(0.30103)+0.69897-2\approx-0.3979\) ✓`],
      S`\(3p+q-2\)`],
  ], [
    q("difficile", S`Évalue \(\log_6 4+2\log_6 3\).`, num(2), "Loi de la puissance, puis loi du produit.", [S`\(\log_64+\log_69=\log_636=2\).`], S`\(2\)`),
    q("difficile", S`Simplifie \(\log_5(x^2-4)-\log_5(x-2)\) et évalue l'expression en \(x=23\).`, num(2), "Factorise x² − 4.", [S`\(\log_5(x+2)\); en \(x=23\) : \(\log_525=2\).`], S`\(2\)`),
    q("difficile", S`Si \(\log_b2=0.4\) et \(\log_b3=0.6\), trouve \(\log_b4.5\).`, num(0.8, 0.0001), "4.5 = 9/2 = 3²/2.", [S`\(2(0.6)-0.4=0.8\).`], S`\(0.8\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi log(xy) = log x + log y?", "Parce que multiplier des puissances de b additionne leurs exposants, et que les logarithmes sont des exposants."],
      ["A-t-on log(x + y) = log x + log y?", "Non. Il n'existe aucune loi pour le logarithme d'une somme."],
      ["Dans quel ordre dois-je condenser?", "D'abord la loi de la puissance (les coefficients montent dans les exposants), ensuite les lois du produit et du quotient."],
      ["Comment trouver log 18 à partir de log 2 et de log 3?", "18 = 2 × 3², donc log 18 = log 2 + 2 log 3."],
      ["Pourquoi le graphique de log(10x) est-il celui de log x translaté de 1 vers le haut?", "log(10x) = log 10 + log x = 1 + log x."],
    ],
    summary: [
      "log_b(xy) = log_b x + log_b y.",
      "log_b(x/y) = log_b x − log_b y.",
      "log_b(xⁿ) = n log_b x.",
      "Même base, arguments positifs.",
    ],
    next: "En 7.4, tu condenseras des logarithmes pour résoudre des équations comme log x + log(x − 3) = 1.",
  }),
];
