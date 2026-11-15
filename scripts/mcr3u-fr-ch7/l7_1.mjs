// MCR3U-FR 7.1 — Suites arithmétiques : raison, terme général, formule de récurrence, notation fonctionnelle,
// graphiques linéaires discrets, trouver le rang d'un terme, trouver a et d à partir de deux termes.
// Miroir de ../mcr3u-ch7/l7_1.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "7.1 Suites arithmétiques";
export const ID = lessonId(7, 1);
const S = String.raw;
const pts = (f, n) => Array.from({ length: n }, (_, i) => ({ x: i + 1, y: f(i + 1) }));

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Suites arithmétiques",
    overview: S`Une <strong>suite</strong> est une liste ordonnée de nombres appelés termes. Dans une <strong>suite arithmétique</strong>, on additionne toujours le même nombre, la raison \(d\), pour passer d'un terme au suivant. Dans cette leçon, tu vas écrire une formule pour le \(n\)<sup>e</sup> terme, \(t_n=a+(n-1)d\), décrire la même suite par récurrence et constater que son graphique est un ensemble de points sur une droite — une fonction linéaire discrète.`,
    goals: [
      "reconnaître une suite arithmétique et trouver sa raison;",
      "écrire le terme général t_n = a + (n − 1)d et l'utiliser pour trouver n'importe quel terme;",
      "écrire une formule de récurrence et passer d'une forme à l'autre;",
      "trouver le rang du terme qui a une valeur donnée;",
      "trouver a et d à partir de deux termes quelconques.",
    ],
    curriculum: "C1.1 (établir des liens entre les suites et les fonctions discrètes, représenter des suites à l'aide de la notation fonctionnelle et distinguer une fonction discrète d'une fonction continue), C1.3, C1.4 (représenter une suite algébriquement à l'aide d'une formule de récurrence, de la notation fonctionnelle ou de la formule du n-ième terme), C3.1, C3.2 (déterminer la formule du terme général d'une suite arithmétique et l'appliquer)",
    prior: [
      ["Quelle est la pente de y = 4x − 1?", "4."],
      ["Résous 3n + 2 = 59.", "n = 19."],
      ["Trouve le nombre suivant : 11, 8, 5, …", "2."],
    ],
    words: [
      ["Terme \\(t_n\\)", "le terme au rang n; \\(t_1=a\\) est le premier terme", ""],
      ["Raison d", "\\(t_n-t_{n-1}\\), la même pour chaque n", ""],
      ["Terme général (formule explicite)", "\\(t_n=a+(n-1)d\\)", ""],
      ["Formule de récurrence", "\\(t_1=a,\\ t_n=t_{n-1}+d\\)", ""],
    ],
  }),

  section("📌 Quatre façons de décrire une même suite", S`
  ${table(["Forme", "Exemple : 3, 7, 11, 15, …"], [["Liste", "3, 7, 11, 15, 19, …"], ["Terme général", "\\(t_n=3+(n-1)4=4n-1\\)"], ["Récurrence", "\\(t_1=3,\\ t_n=t_{n-1}+4\\)"], ["Fonction", "\\(f(n)=4n-1\\), \\(n\\in\\{1,2,3,\\ldots\\}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 26 }, points: pts((n) => 4 * n - 1, 6), lines: [{ m: 4, b: -1, color: "gray", dash: true }], step: { x: 1, y: 2 }, xlabel: "n", ylabel: "tₙ" }, "les termes sont des points sur la droite y = 4x − 1 — mais seulement aux valeurs entières de n")}
  ${keyIdea(S`Une suite est une fonction <strong>discrète</strong> : son domaine est \(\{1,2,3,\ldots\}\), donc son graphique est formé de points séparés, et non d'une ligne continue. Pour une suite arithmétique, les points sont sur une droite de pente \(d\).`)}`),

  section("📌 Explore", S`<p>Modifie le premier terme et la raison. Observe la pente des points et le terme général.</p>`),

  widget("arithLab", { init: [5, 3] }),

  section("📌 Attention", watchOut([
    "d = (un terme quelconque) − (le terme qui le précède), et non l'inverse.",
    "La formule utilise (n − 1), parce qu'on n'a encore ajouté aucune raison au premier terme.",
    "Le rang n doit être un nombre entier positif; si tu obtiens une fraction, la valeur n'est pas un terme.",
    "Ne relie pas les points par une droite quand tu traces le graphique d'une suite.",
  ])),

  examples([
    ["Prolonger une suite", "La suite 7, 12, 17, 22, … est-elle arithmétique? Donne les deux termes suivants.",
      [S`<b>Définition.</b> Une suite est arithmétique si la différence entre deux termes consécutifs est constante.`,
        S`<b>Test.</b> \(12-7=5\), \(17-12=5\), \(22-17=5\). La différence est toujours 5, donc \(d=5\).`,
        S`<b>Prolonger.</b> \(22+5=27\) et \(27+5=32\).`,
        S`<b>Vérification sur le graphique.</b> Représentés en fonction de \(n\), les termes sont sur une droite de pente 5 ✓`],
      "oui, avec d = 5; les termes suivants sont 27 et 32",
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 36 }, points: pts((n) => 5 * n + 2, 6), step: { x: 1, y: 4 }, xlabel: "n", ylabel: "tₙ" })],
    ["Le terme général", S`Trouve \(t_n\) et \(t_{20}\) pour \(40, 34, 28,\ldots\)`,
      [S`<b>Lire \(a\) et \(d\).</b> \(a=40\), et \(d=34-40=-6\).`,
        S`<b>Formule.</b> Pour atteindre le terme \(n\) à partir du terme 1, on additionne \(d\) exactement \(n-1\) fois : \(t_n=a+(n-1)d\).`,
        S`<b>Substituer.</b> \(t_n=40+(n-1)(-6)=40-6n+6=46-6n\).`,
        S`<b>Évaluer.</b> \(t_{20}=46-6(20)=46-120=-74\).`,
        S`<b>Vérification.</b> \(t_3=46-18=28\) ✓, ce qui correspond au terme donné.`],
      S`\(t_n=46-6n\), \(t_{20}=-74\)`,
      plane({ view: { xmin: 0, xmax: 22, ymin: -80, ymax: 50 }, points: [...pts((n) => 46 - 6 * n, 3), { x: 20, y: -74, label: "(20, −74)", color: "amber" }], lines: [{ m: -6, b: 46, color: "gray", dash: true }], step: { x: 2, y: 10 }, xlabel: "n", ylabel: "tₙ" })],
    ["Quel rang?", "Quel est le rang du terme 201 dans la suite 5, 9, 13, …?",
      [S`<b>Terme général.</b> \(a=5\), \(d=4\) : \(t_n=5+(n-1)4=4n+1\).`,
        S`<b>Mise en équation.</b> On connaît la valeur et on cherche le rang : \(4n+1=201\).`,
        S`<b>Résoudre.</b> \(4n=200\), donc \(n=50\).`,
        S`<b>Pourquoi c'est important.</b> \(n\) doit être un nombre entier positif. Sinon, la valeur ne ferait pas partie de la suite.`,
        S`<b>Vérification.</b> \(t_{50}=4(50)+1=201\) ✓`],
      "le 50<sup>e</sup> terme",
      plane({ view: { xmin: 0, xmax: 55, ymin: 0, ymax: 220 }, lines: [{ m: 4, b: 1, color: "gray", dash: true }], points: [{ x: 1, y: 5 }, { x: 2, y: 9 }, { x: 3, y: 13 }, { x: 50, y: 201, label: "(50, 201)", color: "amber" }], step: { x: 5, y: 20 }, xlabel: "n", ylabel: "tₙ" })],
    ["À partir de deux termes", S`Une suite arithmétique a \(t_4=19\) et \(t_{11}=54\). Trouve son terme général.`,
      [S`<b>Compter les écarts.</b> Du terme 4 au terme 11, il y a \(11-4=7\) raisons, donc \(7d=54-19=35\).`,
        S`<b>Trouver \(d\).</b> \(d=5\).`,
        S`<b>Trouver \(a\).</b> \(t_4=a+3d\), donc \(19=a+15\) et \(a=4\).`,
        S`<b>Terme général.</b> \(t_n=4+(n-1)5=5n-1\).`,
        S`<b>Vérification.</b> \(t_{11}=55-1=54\) ✓ et \(t_4=20-1=19\) ✓`],
      S`\(t_n=5n-1\)`,
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 60 }, points: [{ x: 4, y: 19, label: "(4, 19)" }, { x: 11, y: 54, label: "(11, 54)" }, ...pts((n) => 5 * n - 1, 11).filter((p) => p.x !== 4 && p.x !== 11).map((p) => ({ ...p, color: "gray" }))], step: { x: 1, y: 5 }, xlabel: "n", ylabel: "tₙ" })],
    ["De la récurrence à la formule explicite", S`Une suite a \(t_1=-3\) et \(t_n=t_{n-1}+4\). Écris-la en notation fonctionnelle et trouve \(f(10)\).`,
      [S`<b>Lire la règle.</b> On commence à \(-3\) et on additionne 4 pour obtenir chaque terme à partir du précédent. La suite est donc arithmétique, avec \(a=-3\), \(d=4\).`,
        S`<b>Énumérer quelques termes.</b> ${tv(["\\(n\\)", "1", "2", "3", "4"], ["\\(t_n\\)", "\\(-3\\)", "1", "5", "9"])}`,
        S`<b>Règle explicite.</b> \(f(n)=-3+4(n-1)=4n-7\). Le domaine est l'ensemble des nombres naturels.`,
        S`<b>Évaluer.</b> \(f(10)=40-7=33\).`,
        S`<b>Vérification.</b> \(f(4)=16-7=9\) ✓. Une règle explicite donne directement le terme 10, alors qu'une règle de récurrence exigerait tous les termes précédents.`],
      S`\(f(n)=4n-7\); \(f(10)=33\)`,
      plane({ view: { xmin: 0, xmax: 11, ymin: -5, ymax: 36 }, points: [...pts((n) => 4 * n - 7, 9), { x: 10, y: 33, label: "(10, 33)", color: "amber" }], step: { x: 1, y: 4 }, xlabel: "n", ylabel: "f(n)" })],
  ]),

  practice([
    q("raison", "Trouve la raison de 2, 9, 16, 23, …", num(7),
      "Soustrais des termes consécutifs.", [S`\(9-2\).`], S`\(7\)`),
    q("terme", S`Trouve \(t_{15}\) pour \(3, 8, 13,\ldots\)`, num(73),
      "a + 14d.", [S`\(3+14(5)\).`], S`\(73\)`),
    q("quel rang", "Quel est le rang du terme 150 dans 6, 10, 14, …?", num(37),
      "Résous 4n + 2 = 150.", [S`\(4n=148\).`], S`\(n=37\)`),
    q("reconnaître", "Quelle suite est arithmétique?", choice(["−4, −1, 2, 5, …", "1, 2, 4, 8, …", "1, 4, 9, 16, …", "2, −2, 2, −2, …"], 0),
      "Cherche une différence constante.", ["Chaque étape ajoute 3."], "−4, −1, 2, 5, …"),
    q("formule", S`Pour \(t_n=2-3n\), trouve \(t_{10}\).`, num(-28),
      "Remplace n par 10.", [S`\(2-30\).`], S`\(-28\)`),
  ]),

  ...hard([
    ["Deux termes et un changement de signe", S`Une suite arithmétique a \(t_5=23\) et \(t_{12}=-5\). Trouve \(a\), \(d\) et le premier terme négatif.`,
      [S`\(7d=-28\Rightarrow d=-4\); \(a+4(-4)=23\Rightarrow a=39\).`, S`\(t_n=43-4n<0\Rightarrow n>10.75\) : le premier terme négatif est \(t_{11}=-1\).`],
      S`\(a=39\), \(d=-4\), \(t_{11}=-1\)`],
    ["Des rangées de sièges", "La première rangée d'un théâtre compte 18 sièges, et chaque rangée compte 2 sièges de plus que celle qui la précède. La dernière rangée compte 64 sièges. Combien y a-t-il de rangées?",
      [S`\(18+2(n-1)=64\Rightarrow2(n-1)=46\).`],
      "24 rangées",
      plane({ view: { xmin: 0, xmax: 26, ymin: 0, ymax: 70 }, points: pts((n) => 16 + 2 * n, 24).map((p, i) => ({ ...p, label: i === 0 ? "18" : i === 23 ? "64" : undefined })), step: { x: 2, y: 10 }, xlabel: "rangée", ylabel: "sièges" })],
  ], [
    q("difficile", "x, 2x + 3 et 5x − 2 sont des termes consécutifs d'une suite arithmétique. Trouve x.", num(4),
      "Le terme du milieu est la moyenne de ses voisins.", [S`\(2(2x+3)=x+5x-2\Rightarrow4x+6=6x-2\).`], S`\(x=4\)`),
    q("difficile", "Combien de termes compte la suite 7, 11, 15, …, 403?", num(100),
      "Résous t_n = 403.", [S`\(7+4(n-1)=403\Rightarrow n-1=99\).`], S`\(100\)`),
    q("difficile", S`Une suite arithmétique a \(t_3=11\) et \(t_9=35\). Trouve \(t_{20}\).`, num(79),
      "Six raisons donnent 24.", [S`\(d=4\), \(a=3\) : \(3+19(4)\).`], S`\(79\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi (n − 1) et non n?", "Pour atteindre le terme n à partir du terme 1, on additionne la raison n − 1 fois."],
      ["En quoi une suite arithmétique ressemble-t-elle à une fonction linéaire?", "Ses termes sont sur une droite de pente d; seuls les points aux valeurs entières comptent."],
      ["Quand une formule de récurrence est-elle utile?", "Quand on construit les termes étape par étape, comme dans un tableur; le terme général est plus rapide pour les termes éloignés."],
      ["Comment savoir qu'une valeur n'est pas un terme?", "En résolvant t_n = valeur, on obtient un n qui n'est pas entier."],
      ["Et si je connais deux termes, mais pas le premier?", "Divise leur différence par le nombre d'écarts qui les séparent pour obtenir d, puis remonte jusqu'à a."],
    ],
    summary: [
      "t_n = a + (n − 1)d.",
      "Récurrence : t₁ = a, tₙ = tₙ₋₁ + d.",
      "Graphique : des points discrets sur une droite de pente d.",
      "Deux termes → d → a.",
    ],
    next: "En 7.2, on étudie les suites qui ont une raison multiplicative.",
  }),
];
