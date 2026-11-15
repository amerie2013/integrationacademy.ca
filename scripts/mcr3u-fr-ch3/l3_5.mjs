// MCR3U-FR 3.5 — Résoudre des équations du second degré : factorisation, formule avec racines exactes (radicaux), réarrangement,
// modèles de projectiles et d'aires, seuils de rentabilité et intervalles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, roots, rootsT, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "3.5 Résoudre des équations du second degré";
export const ID = lessonId(3, 5);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Résoudre des équations du second degré",
    overview: S`Beaucoup de questions sur les modèles du second degré — quand le ballon touche-t-il le sol, quand l'entreprise atteint-elle le seuil de rentabilité, quelle est la largeur de l'allée — se terminent par une équation du second degré. Dans cette leçon, tu les résoudras par factorisation ou à l'aide de la formule quadratique, tu donneras des réponses exactes avec des radicaux simplifiés, tu réarrangeras d'abord les équations sous forme générale et tu décideras quelles solutions ont du sens dans le contexte.`,
    goals: [
      "résoudre des équations du second degré par factorisation;",
      "résoudre à l'aide de la formule quadratique et donner les racines exactes et arrondies;",
      "réarranger d'abord une équation sous la forme ax² + bx + c = 0;",
      "résoudre f(x) = k pour un modèle et interpréter les deux racines;",
      "rejeter les racines qui ne conviennent pas au contexte.",
    ],
    curriculum: "A2.3 (résoudre des problèmes portant sur des fonctions du second degré tirés de situations réelles et représentés à l'aide de la notation fonctionnelle), A3.2 (simplifier les radicaux dans les réponses)",
    prior: [
      [S`Factorise \(2x^2+x-6\).`, S`\((2x-3)(x+2)\).`],
      [S`Simplifie \(\sqrt{44}\).`, S`\(2\sqrt{11}\).`],
      [S`Énonce la formule quadratique.`, S`\(x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\).`],
    ],
    words: [
      ["Racine", "une solution de \\(f(x)=0\\) (un zéro de \\(f\\))", ""],
      ["Forme exacte", "réponse conservée sous forme de fractions et de radicaux", "\\(2\\pm\\sqrt{11}\\)"],
      ["Seuil de rentabilité", "le point où le profit vaut 0", ""],
      ["Racine inadmissible", "une solution qui ne convient pas au contexte", "un temps négatif"],
    ],
  }),

  section("📌 Choisir une méthode", S`
  <p>Écris d'abord l'équation sous la forme \(ax^2+bx+c=0\). Si elle se factorise facilement, factorise et utilise la propriété du produit nul. Sinon, utilise la formule. La formule fonctionne toujours et donne des réponses exactes; arrondis seulement à la fin.</p>
  ${keyIdea(S`\(x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\). Simplifie le radical, puis réduis : \(\frac{4\pm2\sqrt{11}}{2}=2\pm\sqrt{11}\).`)}`),

  section("📌 Explore", S`<p>Utilise l'outil sur la formule pour voir chaque étape de la formule pour différentes équations.</p>`),

  widget("formulaLab", { init: [1, -4, -7] }),

  section("📌 Hauteurs et intervalles", S`
  <p>Pour un projectile \(h(t)=-4.9t^2+v_0t+h_0\), résoudre \(h(t)=H\) donne les deux moments où l'objet passe à la hauteur \(H\) — à la montée et à la descente. Le temps entre ces deux moments est la durée pendant laquelle il reste au-dessus de \(H\).</p>`),

  widget("heightInterval", { init: [14.7, 2, 12] }),

  section("📌 Attention", watchOut([
    "Pose l'équation égale à 0 avant de factoriser.",
    "Divise tout le numérateur par 2a — pas seulement le premier terme.",
    "Le temps et les longueurs ne peuvent pas être négatifs : vérifie chaque racine selon le contexte.",
    "Garde les valeurs exactes jusqu'à la dernière étape; les valeurs intermédiaires arrondies ajoutent de l'erreur.",
  ])),

  examples([
    ["Factorisation", S`Résous \(3x^2-5x-2=0\).`,
      [S`<b>Méthode.</b> Cherche deux nombres dont le produit est \(ac=-6\) et la somme \(b=-5\) : ce sont \(-6\) et \(1\).`,
        S`<b>Décompose le terme du milieu.</b> \(3x^2-6x+x-2=0\). Regroupe : \(3x(x-2)+1(x-2)=0\), donc \((3x+1)(x-2)=0\).`,
        S`<b>Produit nul.</b> Un produit vaut 0 seulement si un facteur vaut 0 : \(3x+1=0\) ou \(x-2=0\).`,
        S`<b>Résous.</b> \(x=-\tfrac13\) ou \(x=2\).`,
        S`<b>Vérification.</b> \(x=2\) : \(12-10-2=0\) ✓. \(x=-\tfrac13\) : \(\tfrac13+\tfrac53-2=0\) ✓. La parabole coupe l'axe des x en ces deux valeurs.`],
      S`\(x=-\tfrac13\) ou \(x=2\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -6, ymax: 8 }, curves: [{ f: (x) => 3 * x * x - 5 * x - 2, color: "violet" }], points: [{ x: -1 / 3, y: 0, label: "(−1/3, 0)", color: "amber" }, { x: 2, y: 0, label: "(2, 0)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Racines exactes", S`Résous \(x^2-4x-7=0\) de façon exacte.`,
      [S`<b>Choisis la méthode.</b> Aucun entier n'a un produit de \(-7\) et une somme de \(-4\); on utilise donc la formule quadratique avec \(a=1\), \(b=-4\), \(c=-7\).`,
        S`<b>Substitue.</b> \(x=\frac{4\pm\sqrt{(-4)^2-4(1)(-7)}}{2}=\frac{4\pm\sqrt{16+28}}2=\frac{4\pm\sqrt{44}}2\).`,
        S`<b>Simplifie la racine.</b> \(\sqrt{44}=\sqrt{4\cdot11}=2\sqrt{11}\).`,
        S`<b>Divise.</b> Les deux termes du numérateur sont divisibles par 2 : \(x=2\pm\sqrt{11}\).`,
        S`<b>Vérification.</b> Somme des racines \(=4=-\frac ba\) ✓. Produit \(=4-11=-7=\frac ca\) ✓. En nombres décimaux, les racines valent environ \(5.32\) et \(-1.32\), comme le montre le graphique.`],
      S`\(x=2\pm\sqrt{11}\approx5.32,\ -1.32\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -12, ymax: 8 }, curves: [{ f: (x) => x * x - 4 * x - 7, color: "violet" }], points: [{ x: 5.317, y: 0, label: "(5.32, 0)", color: "amber" }, { x: -1.317, y: 0, label: "(−1.32, 0)", color: "amber" }, { x: 2, y: -11, label: "(2, −11)" }], step: { x: 1, y: 2 } })],
    ["Réarranger d'abord", S`Résous \(2x(x-3)=x+5\).`,
      [S`<b>La forme générale d'abord.</b> La règle du produit nul et la formule exigent toutes deux qu'un membre soit égal à 0. Développe : \(2x^2-6x=x+5\).`,
        S`<b>Regroupe.</b> Soustrais \(x+5\) : \(2x^2-7x-5=0\). Donc \(a=2\), \(b=-7\), \(c=-5\).`,
        S`<b>Formule.</b> \(x=\frac{7\pm\sqrt{49+40}}4=\frac{7\pm\sqrt{89}}4\).`,
        S`<b>Nombres décimaux.</b> \(\sqrt{89}\approx9.434\), donc \(x\approx\frac{16.434}4\approx4.11\) ou \(x\approx\frac{-2.434}4\approx-0.61\).`,
        S`<b>Vérification dans l'équation de départ.</b> Pour \(x\approx4.11\) : membre de gauche \(\approx2(4.11)(1.11)\approx9.12\); membre de droite \(\approx9.11\) ✓ (arrondi). Sur le graphique, la parabole et la droite se rencontrent en ces valeurs de x.`],
      S`\(x=\frac{7\pm\sqrt{89}}{4}\), donc \(x\approx4.11\) ou \(x\approx-0.61\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 14 }, curves: [{ f: (x) => 2 * x * (x - 3), color: "violet" }], lines: [{ m: 1, b: 5, color: "blue" }], points: [{ x: 4.11, y: 9.11, label: "(4.11, 9.11)", color: "amber" }, { x: -0.61, y: 4.39, label: "(−0.61, 4.39)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Modèle de hauteur", S`La hauteur d'un ballon est \(h(t)=-4.9t^2+14.7t+2\) m. Pendant combien de temps est-il au-dessus de 12 m?`,
      [S`<b>Plan.</b> Trouve quand la hauteur est égale à 12, puisque le ballon est au-dessus de 12 m entre ces deux instants.`,
        S`<b>Mise en équation.</b> \(-4.9t^2+14.7t+2=12\), donc \(-4.9t^2+14.7t-10=0\).`,
        S`<b>Discriminant.</b> \(D=14.7^2-4(-4.9)(-10)=216.09-196=20.09\). Sa racine vaut environ \(4.482\).`,
        S`<b>Formule.</b> \(t=\frac{-14.7\pm4.482}{-9.8}\), ce qui donne \(t\approx1.04\) et \(t\approx1.96\).`,
        S`<b>Durée.</b> \(1.96-1.04\approx0.91\) s, à partir des valeurs non arrondies.`,
        S`<b>Vérification.</b> L'axe est \(t=1.5\), et \(1.04\) et \(1.96\) sont symétriques par rapport à celui-ci ✓`],
      "environ 0.91 s (de 1.04 s à 1.96 s)",
      plane({ view: { xmin: 0, xmax: 3.5, ymin: 0, ymax: 16 }, curves: [{ f: (t) => -4.9 * t * t + 14.7 * t + 2, a: 0, color: "violet" }], lines: [{ m: 0, b: 12, color: "amber", dash: true }], points: [{ x: 1.04, y: 12, label: "(1.04, 12)" }, { x: 1.96, y: 12, label: "(1.96, 12)" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Seuil de rentabilité", S`Le profit est \(P(x)=-2x^2+28x-66\) milliers de dollars pour \(x\) milliers d'articles. Quand l'entreprise fait-elle un profit?`,
      [S`<b>Plan.</b> Le profit change de signe aux seuils de rentabilité, où \(P=0\).`,
        S`<b>Simplifie.</b> Divise \(P=0\) par \(-2\) : \(x^2-14x+33=0\).`,
        S`<b>Résous.</b> \(x=\frac{14\pm\sqrt{196-132}}2=\frac{14\pm8}2\), donc \(x=11\) ou \(x=3\).`,
        S`<b>De quel côté est le profit?</b> \(a=-2<0\) : la parabole est ouverte vers le bas et se trouve au-dessus de l'axe entre ses zéros.`,
        S`<b>Vérification.</b> \(P(7)=-98+196-66=32>0\) ✓. \(P(1)=-2+28-66=-40<0\) ✓`],
      S`pour \(3<x<11\) (entre 3000 et 11 000 articles)`,
      plane({ view: { xmin: 0, xmax: 14, ymin: -45, ymax: 40 }, curves: [{ f: (x) => -2 * x * x + 28 * x - 66, color: "violet" }], points: [{ x: 3, y: 0, label: "(3, 0)", color: "amber" }, { x: 11, y: 0, label: "(11, 0)", color: "amber" }, { x: 7, y: 32, label: "(7, 32)" }, { x: 1, y: -40, label: "(1, −40)" }], step: { x: 1, y: 10 }, ylabel: "P" })],
  ]),

  practice([
    q("factoriser", S`Résous \(x^2-x-12=0\).`, roots(4, -3),
      "Deux nombres dont le produit est −12 et la somme −1.", [S`\((x-4)(x+3)=0\).`], S`\(x=4,\ -3\)`),
    q("factoriser, a ≠ 1", S`Résous \(2x^2+7x+3=0\).`, roots(-0.5, -3),
      "Décompose 7x en 6x + x.", [S`\((2x+1)(x+3)=0\).`], S`\(x=-\tfrac12,\ -3\)`),
    q("formule", S`Résous \(x^2+6x+2=0\). Arrondis au centième.`, rootsT(0.01, -3 + Math.sqrt(7), -3 - Math.sqrt(7)),
      "D = 36 − 8 = 28.", [S`\(x=\frac{-6\pm\sqrt{28}}{2}=-3\pm\sqrt7\).`], S`\(x\approx-0.35,\ -5.65\)`),
    q("modèle", S`La hauteur d'une pierre est \(h(t)=-5t^2+20t+25\) m. Quand touche-t-elle le sol?`, num(5),
      "Pose h = 0 et divise par −5.", [S`\(t^2-4t-5=0\Rightarrow(t-5)(t+1)=0\); rejette \(-1\).`], S`\(t=5\) s`),
    q("aire", "Un rectangle mesure 3 m de plus en longueur qu'en largeur et a une aire de 70 m². Trouve la largeur.", num(7),
      "w(w + 3) = 70.", [S`\(w^2+3w-70=0\Rightarrow(w+10)(w-7)=0\).`], S`\(7\) m`),
  ]),

  ...hard([
    ["Une allée autour d'un jardin", S`Un jardin de 12 m sur 8 m est entouré d'une allée de largeur uniforme. Le jardin et l'allée couvrent ensemble 192 m². Quelle est la largeur de l'allée?`,
      [S`\((12+2w)(8+2w)=192\Rightarrow96+40w+4w^2=192\).`, S`\(4w^2+40w-96=0\Rightarrow w^2+10w-24=0\Rightarrow(w+12)(w-2)=0\).`, S`Rejette \(w=-12\).`],
      "2 m",
      plane({ view: { xmin: -1, xmax: 17, ymin: -1, ymax: 13 }, segs: [{ pts: [[0, 0], [16, 0], [16, 12], [0, 12], [0, 0]], color: "amber" }, { pts: [[2, 2], [14, 2], [14, 10], [2, 10], [2, 2]], color: "green" }], step: { x: 2, y: 2 } })],
    ["Exacte et simplifiée", S`Résous \(3x^2-2x-4=0\) de façon exacte, sous la forme la plus simple.`,
      [S`\(x=\frac{2\pm\sqrt{4+48}}{6}=\frac{2\pm\sqrt{52}}{6}\).`, S`\(\sqrt{52}=2\sqrt{13}\) : \(x=\frac{2\pm2\sqrt{13}}{6}=\frac{1\pm\sqrt{13}}{3}\).`],
      S`\(x=\frac{1\pm\sqrt{13}}{3}\approx1.54,\ -0.87\)`],
  ], [
    q("difficile", "Deux entiers impairs positifs consécutifs ont un produit de 323. Quel est le plus petit?", num(17),
      "n(n + 2) = 323.", [S`\(n^2+2n-323=0\Rightarrow(n+19)(n-17)=0\).`], S`\(17\)`),
    q("difficile", S`\(h(t)=-4.9t^2+19.6t+1.5\). Pendant combien de secondes l'objet est-il au-dessus de 16.2 m?`, num(2),
      "Résous h(t) = 16.2.", [S`\(-4.9t^2+19.6t-14.7=0\Rightarrow t^2-4t+3=0\Rightarrow t=1,\ 3\).`], S`\(2\) s`),
    q("difficile", S`Résous \(x^2-10x+18=0\). Arrondis au centième.`, rootsT(0.01, 5 + Math.sqrt(7), 5 - Math.sqrt(7)),
      "Complète le carré ou utilise la formule.", [S`\((x-5)^2=7\Rightarrow x=5\pm\sqrt7\).`], S`\(x\approx7.65,\ 2.35\)`),
  ]),

  wrapUp({
    qas: [
      ["Quand faut-il factoriser plutôt qu'utiliser la formule?", "Lorsque les facteurs sont faciles à voir. La formule fonctionne toujours; utilise-la lorsque la factorisation bloque."],
      ["Pourquoi garder des réponses exactes?", "Les radicaux sont exacts; les nombres décimaux sont des approximations. Arrondis seulement pour une mesure finale."],
      ["Et si le contexte donne deux réponses positives?", "Les deux peuvent avoir du sens — p. ex. passer à une certaine hauteur à la montée et à la descente."],
      ["Quel est le lien entre les seuils de rentabilité et le graphique?", "Ce sont les zéros de la fonction profit; le profit est positif entre eux lorsque la parabole est ouverte vers le bas."],
      ["Une équation du second degré peut-elle n'avoir aucune solution?", "Oui, lorsque b² − 4ac < 0. La leçon 3.6 étudie ce cas."],
    ],
    summary: [
      "La forme générale d'abord : ax² + bx + c = 0.",
      "Factoriser, ou utiliser x = (−b ± √(b² − 4ac)) / (2a).",
      "Simplifier les radicaux; réduire toute la fraction.",
      "Vérifier les racines selon le contexte.",
    ],
    next: "La leçon 3.6 prédit le nombre de zéros à l'aide du discriminant.",
  }),
];
