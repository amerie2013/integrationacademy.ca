// MHF4U-FR 8.5 — Modélisation à l'aide de fonctions combinées (miroir français de ../mhf4u-ch8/l8_5.mjs).
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, mg } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "8.5 Modélisation à l'aide de fonctions combinées";
export const ID = lessonId(8, 5);

const S = String.raw;
const C = (t) => 10 * t * 0.6 ** t;
export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Modélisation à l'aide de fonctions combinées",
    overview: S`Les données réelles suivent rarement une seule fonction simple. Les ventes mensuelles augmentent selon une tendance <i>et</i> montent et descendent selon les saisons; un pendule oscille <i>et</i> ralentit; le rayon d'une nappe de pétrole augmente avec le temps <i>et</i> son aire dépend du rayon. Chacune de ces situations est une combinaison : une somme, un produit ou une composée de fonctions que tu connais déjà. Dans cette leçon, tu construis de tels modèles, tu interprètes leurs parties et tu les utilises pour répondre à des questions.`,
    goals: [
      "reconnaître quand une situation demande une somme, une différence, un produit, un quotient ou une composée;",
      "construire un modèle combiné à partir d'une description;",
      "expliquer ce que représente chaque partie d'un modèle combiné;",
      "répondre à des questions à l'aide du modèle, par l'algèbre ou à l'aide d'un graphique;",
      "juger si la réponse donnée par un modèle a du sens.",
    ],
    curriculum: "D3.1 (comparer, par exploration, les caractéristiques de fonctions), D3.2 (vérifier les caractéristiques de fonctions combinées), D3.3 (résoudre des problèmes en modélisant et en raisonnant à l'aide de fonctions, y compris des problèmes dont les solutions ne peuvent pas être obtenues par les techniques algébriques habituelles)",
    prior: [
      [S`Amplitude et période de \(y=40\sin\left(\frac{\pi}{6}t\right)\)?`, S`\(40\) et \(12\).`],
      [S`Modèle de demi-vie pour \(80\) g, avec une demi-vie de \(5\) h?`, S`\(80\left(\frac12\right)^{t/5}\).`],
      [S`Si \(r=3t+2\), que vaut \(\pi r^2\) à \(t=1\)?`, S`\(25\pi\).`],
    ],
    words: [
      ["Tendance + cycle", "une somme : une variation régulière plus une régularité qui se répète", "\\(200+15t+40\\sin\\frac{\\pi t}6\\)"],
      ["Amortissement", "un produit : une onde multipliée par une enveloppe décroissante", "\\(20(0.9)^t\\cos(\\pi t)\\)"],
      ["Taux en chaîne", "une composée : une quantité dépend d'une autre qui dépend du temps", "\\(A(r(t))\\)"],
      ["Coût moyen", "un quotient : coût total ÷ nombre d'articles", "\\(\\frac{2000+15x}{x}\\)"],
    ],
  }),

  section("📌 Choisir la combinaison", S`
  ${table(["La situation dit…", "Combinaison", "Exemple"], [
    ["« une variation régulière plus une régularité saisonnière »", "somme", "\\(S(t)=200+15t+40\\sin\\frac{\\pi t}6\\)"],
    ["« une oscillation qui s'éteint »", "produit", "\\(\\theta(t)=20(0.9)^t\\cos(\\pi t)\\)"],
    ["« A dépend de B, et B dépend du temps »", "composée", "\\(A(r(t))=\\pi(3t+2)^2\\)"],
    ["« par article », « par personne », « moyenne »", "quotient", "\\(\\bar C(x)=\\frac{C(x)}x\\)"],
    ["« combien de plus », « profit », « écart »", "différence", "\\(P=R-C\\)"],
  ])}
  ${keyIdea(S`Construis le modèle à partir de ses parties, donne un sens à chaque partie, puis réponds aux questions en évaluant, en résolvant ou en lisant le graphique. Vérifie toujours la réponse par rapport à la situation (unités, signe, ordre de grandeur raisonnable).`)}`),

  mg([{ expr: "200 + 15*x", label: "tendance 200 + 15t", color: "#64748b" }, { expr: "200 + 15*x + a*sin(pi*x/6)", label: "ventes 200 + 15t + a·sin(πt/6)", color: "#7c3aed" }], { param: "a", paramMin: 0, paramMax: 80, paramInit: 40, xMin: 0, xMax: 24, yMin: 100, yMax: 650, caption: "Fais glisser a, l'ampleur de la variation saisonnière. La courbe des ventes oscille toujours autour de la droite de tendance; a = 0 ne laisse que la tendance." }),

  section("📌 Lire un modèle combiné", S`
  <p>Dans \(S(t)=200+15t+40\sin\left(\frac{\pi t}6\right)\) : \(200\) est le niveau de départ, \(15\) unités par mois est la tendance, \(40\) est la variation saisonnière et \(12\) mois est sa période. Les ventes ne s'éloignent jamais de plus de \(40\) de la droite de tendance.</p>
  ${plane({ view: { xmin: -1, xmax: 25, ymin: 100, ymax: 650 }, curves: [{ f: (t) => 200 + 15 * t, color: "gray" }, { f: (t) => 200 + 15 * t + 40 * Math.sin(Math.PI * t / 6), color: "violet" }], points: [{ x: 3, y: 285, label: "(3, 285)", color: "amber" }, { x: 9, y: 295, label: "(9, 295)", color: "amber" }], step: { x: 2, y: 50 } }, "Les ventes (en violet) oscillent autour de la tendance (en gris).")}
  ${watchOut([
    "Vérifie la période d'un terme saisonnier : 12 mois donne sin(πt/6), et non sin(t).",
    "Une enveloppe d'amortissement doit décroître : un facteur entre 0 et 1, ou un exposant négatif.",
    "Dans un modèle composé, fais concorder les unités : r en mètres, donc A en mètres carrés.",
    "Une fonction coût moyen n'est pas définie à x = 0 et s'approche du coût par article pour les grandes valeurs de x.",
    "Un modèle n'est valable que sur un domaine raisonnable (p. ex. t ≥ 0).",
  ])}`),

  examples([
    ["Tendance plus saison", S`Les ventes mensuelles sont \(S(t)=200+15t+40\sin\left(\frac{\pi t}6\right)\) unités (\(t\) en mois). Détermine \(S(3)\) et \(S(9)\), et explique pourquoi \(S(9)\) n'est qu'un peu plus grand.`,
      [S`<b>Lis les parties.</b> \(200+15t\) est la tendance : un départ de \(200\), qui augmente de \(15\) par mois. Le terme sinus est la saison, d'amplitude \(40\) et de période \(\frac{2\pi}{\pi/6}=12\) mois.`,
        S`<b>\(S(3)\).</b> Tendance : \(200+45=245\). Saison : \(40\sin\frac\pi2=40\). Total : \(285\).`,
        S`<b>\(S(9)\).</b> Tendance : \(200+135=335\). Saison : \(40\sin\frac{3\pi}2=-40\). Total : \(295\).`,
        S`<b>Interprète.</b> La tendance ajoute \(90\) entre les mois \(3\) et \(9\). Mais la saison passe de son sommet (\(+40\)) à son creux (\(-40\)), ce qui enlève \(80\). La variation nette n'est que de \(90-80=10\).`,
        S`<b>Vérifie.</b> \(295-285=10\) ✓. Sur le graphique, le mois \(3\) est au-dessus de la droite de tendance et le mois \(9\) est en dessous ✓`],
      S`\(285\) et \(295\)`,
      plane({ view: { xmin: -1, xmax: 25, ymin: 100, ymax: 650 }, curves: [{ f: (t) => 200 + 15 * t, color: "gray" }, { f: (t) => 200 + 15 * t + 40 * Math.sin(Math.PI * t / 6), color: "violet" }], points: [{ x: 3, y: 285, label: "(3, 285)", color: "amber" }, { x: 9, y: 295, label: "(9, 295)", color: "amber" }], step: { x: 2, y: 50 } })],
    ["Un pendule amorti", S`L'angle d'un pendule est \(\theta(t)=20(0.9)^t\cos(\pi t)\) degrés. Détermine son amplitude d'oscillation à \(t=2\) et le moment où l'oscillation reste pour la première fois sous \(5^\circ\).`,
      [S`<b>Lis les parties.</b> C'est un produit. L'enveloppe \(20(0.9)^t\) est l'amplitude qui diminue; elle perd \(10\%\) chaque seconde. Le facteur \(\cos(\pi t)\) a une période de \(\frac{2\pi}\pi=2\) s.`,
        S`<b>À \(t=2\).</b> \(\cos2\pi=1\), donc \(\theta(2)=20(0.9)^2=20(0.81)=16.2^\circ\).`,
        S`<b>Pose la condition.</b> L'oscillation reste sous \(5^\circ\) dès que l'enveloppe est inférieure à \(5\) : \(20(0.9)^t<5\), donc \(0.9^t<0.25\).`,
        S`<b>Résous.</b> Prends le logarithme : \(t\log0.9<\log0.25\). Comme \(\log0.9<0\), diviser inverse le sens de l'inégalité : \(t>\dfrac{\log0.25}{\log0.9}\approx13.2\) s.`,
        S`<b>Vérifie.</b> \(20(0.9)^{13.2}\approx4.98\), juste sous \(5\) ✓`],
      S`\(16.2^\circ\); après environ \(13.2\) s`,
      plane({ view: { xmin: -0.5, xmax: 16, ymin: -22, ymax: 22 }, curves: [{ f: (t) => 20 * 0.9 ** t, a: 0, color: "gray" }, { f: (t) => -20 * 0.9 ** t, a: 0, color: "gray" }, { f: (t) => 20 * 0.9 ** t * Math.cos(Math.PI * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 5, color: "blue", dash: true }], points: [{ x: 2, y: 16.2, label: "(2, 16.2)", color: "amber" }], step: { x: 1, y: 5 } })],
    ["Une nappe qui s'étend", S`Le rayon d'une nappe de pétrole est \(r(t)=3t+2\) m après \(t\) h, et son aire est \(A(r)=\pi r^2\). Détermine \(A(r(t))\), l'aire après \(4\) h et le moment où l'aire atteint \(1000\ \text{m}^2\).`,
      [S`<b>Pourquoi une composée?</b> L'aire dépend du rayon, et le rayon dépend du temps; on remplace donc \(r\) par \(r(t)\) dans \(A\).`,
        S`<b>Compose.</b> \(A(r(t))=\pi(3t+2)^2\).`,
        S`<b>Après 4 h.</b> \(r(4)=14\) m, donc \(A=\pi(14)^2=196\pi\approx615.8\ \text{m}^2\).`,
        S`<b>Aire de 1000 : isole le carré.</b> \((3t+2)^2=\dfrac{1000}\pi\approx318.3\).`,
        S`<b>Prends la racine.</b> \(3t+2=\pm17.84\). Le rayon doit être positif; rejette donc la racine négative : \(3t+2\approx17.84\), \(3t\approx15.84\), \(t\approx5.28\) h.`,
        S`<b>Vérifie.</b> \(\pi(17.84)^2\approx1000\) ✓. La courbe de l'aire s'incurve vers le haut, parce que l'aire augmente plus vite à mesure que le rayon augmente ✓`],
      S`\(\pi(3t+2)^2\); \(615.8\ \text{m}^2\); environ \(5.3\) h`,
      plane({ view: { xmin: -0.3, xmax: 7, ymin: -50, ymax: 1600 }, curves: [{ f: (t) => Math.PI * (3 * t + 2) ** 2, a: 0, color: "violet" }], lines: [{ m: 0, b: 1000, color: "blue", dash: true }], points: [{ x: 4, y: 615.8, label: "(4, 615.8)", color: "amber" }, { x: 5.28, y: 1000, label: "(5.28, 1000)", color: "amber" }], step: { x: 1, y: 200 } })],
    ["Coût moyen", S`Fabriquer \(x\) articles coûte \(C(x)=2000+15x\) dollars. Détermine le coût moyen par article et le nombre d'articles pour lequel il est d'au plus \(20\) dollars.`,
      [S`<b>Pourquoi un quotient?</b> « Par article » veut dire le coût total divisé par le nombre d'articles : \(\bar C(x)=\dfrac{C(x)}x\), avec \(x>0\).`,
        S`<b>Simplifie.</b> Divise chaque terme par \(x\) : \(\bar C(x)=\dfrac{2000+15x}{x}=15+\dfrac{2000}x\).`,
        S`<b>Signification.</b> \(15\) dollars est le coût de fabrication de chaque article. \(\frac{2000}x\) est le coût fixe réparti entre tous les articles.`,
        S`<b>Inéquation.</b> \(15+\frac{2000}x\le20\), donc \(\frac{2000}x\le5\). On peut multiplier par \(x\) sans danger, car \(x>0\) : \(2000\le5x\), donc \(x\ge400\).`,
        S`<b>À long terme.</b> Quand \(x\) augmente, \(\frac{2000}x\to0\); le coût moyen s'approche donc de \(15\) dollars : c'est l'asymptote horizontale en rouge.`,
        S`<b>Vérifie.</b> \(\bar C(400)=15+5=20\) ✓. \(\bar C(500)=19\), ce qui est plus bas ✓`],
      S`\(15+\frac{2000}x\); au moins \(400\) articles`,
      plane({ view: { xmin: -20, xmax: 1000, ymin: 0, ymax: 60 }, curves: [{ f: (x) => 15 + 2000 / x, a: 40, color: "violet" }], lines: [{ m: 0, b: 15, color: "red", dash: true }, { m: 0, b: 20, color: "blue", dash: true }], points: [{ x: 400, y: 20, label: "(400, 20)", color: "amber" }], step: { x: 100, y: 5 } })],
    ["Un modèle qui monte puis descend", S`La concentration d'un médicament est \(C(t)=10t(0.6)^t\) mg/L après \(t\) h. Utilise le modèle pour déterminer quand elle est supérieure à \(5\) mg/L ainsi que son maximum.`,
      [S`<b>Lis les parties.</b> C'est un produit. Le facteur \(10t\) fait d'abord monter la concentration pendant que le médicament est absorbé. Le facteur \((0.6)^t\) en élimine \(40\%\) chaque heure et finit par l'emporter; la concentration diminue donc.`,
        S`<b>Table.</b> \(C(1)=6\), \(C(2)=7.2\), \(C(3)\approx6.48\), \(C(4)\approx5.18\), \(C(5)\approx3.89\).`,
        S`<b>Pourquoi un graphique?</b> Dans \(10t(0.6)^t=5\), \(t\) est à la fois dans un exposant et à l'extérieur; les logarithmes ne peuvent donc pas l'isoler. Raffine plutôt à partir d'une table ou d'un graphique.`,
        S`<b>Croisements avec \(C=5\).</b> La montée croise entre \(t=0\) et \(t=1\), à \(t\approx0.72\). La descente croise entre \(t=4\) et \(t=5\), à \(t\approx4.14\).`,
        S`<b>Réponse.</b> La concentration est supérieure à \(5\) mg/L pour environ \(0.72<t<4.14\) h, soit à peu près \(3.4\) h. Le maximum est d'environ \(7.2\) mg/L vers \(t\approx2\) h.`,
        S`<b>Vérifie.</b> \(C(0.72)=7.2(0.6)^{0.72}\approx5.0\) ✓`],
      S`\(0.72<t<4.14\) h; maximum \(\approx7.2\) mg/L vers \(2\) h`,
      plane({ view: { xmin: -0.3, xmax: 10, ymin: -0.5, ymax: 8.5 }, curves: [{ f: C, a: 0, color: "violet" }], lines: [{ m: 0, b: 5, color: "blue", dash: true }], points: [{ x: 1.96, y: 7.2, label: "(1.96, 7.2)", color: "amber" }, { x: 0.72, y: 5, label: "(0.72, 5)", color: "blue" }, { x: 4.14, y: 5, label: "(4.14, 5)", color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("modèle somme", S`\(S(t)=100+5t+20\sin\left(\frac{\pi t}6\right)\). Détermine \(S(3)\).`, num(135), "sin(π/2) = 1.", [S`\(100+15+20=135\).`], S`\(135\)`),
    q("coût moyen", S`\(\bar C(x)=12+\frac{600}x\). Détermine \(\bar C(50)\).`, num(24), "600 ÷ 50 = 12.", [S`\(12+12=24\).`], S`\(24\)`),
    q("composée", S`\(r(t)=2t\) cm et \(A=\pi r^2\). Détermine l'aire à \(t=3\) au dixième près.`, num(36 * Math.PI, 0.1), "r = 6.", [S`\(36\pi\approx113.1\).`], S`\(\approx113.1\)`),
    q("choisir", S`Une population de poissons augmente de \(3\%\) par année et, en plus, monte et descend d'environ \(80\) tous les \(4\) ans. Quel modèle convient?`, choice(["P = 500(1.03)ᵗ + 80 sin(πt/2)", "P = 500(1.03)ᵗ · 80 sin(πt/2)", "P = 500 + 0.03t + 80 sin t", "P = 80 sin(500(1.03)ᵗ)"], 0), "Tendance plus cycle : c'est une somme.", [S`Période \(\frac{2\pi}{\pi/2}=4\) ans.`], S`\(500(1.03)^t+80\sin\frac{\pi t}2\)`),
    q("amortie", S`\(\theta(t)=15(0.8)^t\cos(2\pi t)\). Détermine \(\theta(2)\).`, num(9.6, 0.0001), "cos 4π = 1.", [S`\(15(0.64)=9.6\).`], S`\(9.6\)`),
  ]),

  ...hard([
    ["Coût de chauffage à l'aide d'une composée", S`La température d'une pièce est \(T(t)=18+4\sin\left(\frac{\pi t}{12}\right)\) °C (\(t\) en heures) et le taux de coût du chauffage est \(K(T)=0.5(22-T)\) dollars par heure. Détermine \(K(T(t))\) et sa plus grande valeur.`,
      [S`<b>Compose :</b> \(K(T(t))=0.5\left(22-18-4\sin\frac{\pi t}{12}\right)=2-2\sin\frac{\pi t}{12}\).`,
        S`<b>Plus grande valeur :</b> quand \(\sin\frac{\pi t}{12}=-1\), c'est-à-dire à \(t=18\) : \(K=2+2=4\) dollars par heure.`,
        S`<b>Plus petite :</b> \(t=6\) : \(K=0\) (la pièce est déjà à \(22\) °C).`,
        S`<b>Vérifie :</b> \(T(18)=18-4=14\) °C et \(0.5(22-14)=4\) ✓`],
      S`\(2-2\sin\frac{\pi t}{12}\); maximum de \(4\) dollars/h à \(t=18\)`],
    ["Tendance contre décroissance", S`Les dépenses d'une ville sont \(E(t)=50+4t\) (en milliers de dollars) et son budget est \(B(t)=120(0.97)^t\). Quand les dépenses dépassent-elles le budget?`,
      [S`<b>Inéquation :</b> \(50+4t>120(0.97)^t\), c'est-à-dire \(h(t)=50+4t-120(0.97)^t>0\).`,
        S`<b>Table :</b> \(h(8)\approx82-94.0<0\); \(h(9)\approx86-91.2<0\); \(h(10)\approx90-88.5>0\).`,
        S`<b>Raffine :</b> le croisement est à \(t\approx9.8\).`,
        S`<b>Réponse :</b> les dépenses dépassent le budget après environ \(9.8\) ans; comme \(E\) augmente et \(B\) diminue, elles ne redescendent jamais sous le budget.`],
      S`après environ \(9.8\) ans`,
      plane({ view: { xmin: -0.5, xmax: 20, ymin: 0, ymax: 140 }, curves: [{ f: (t) => 50 + 4 * t, a: 0, color: "blue" }, { f: (t) => 120 * 0.97 ** t, a: 0, color: "violet" }], step: { x: 2, y: 10 } })],
  ], [
    q("difficile", S`\(\bar C(x)=15+\frac{2000}x\). Quel est le plus petit nombre entier d'articles pour lequel \(\bar C\le18\)?`, num(667), "2000/x ≤ 3.", [S`\(x\ge666.7\), donc \(667\).`], S`\(667\)`),
    q("difficile", S`\(C(t)=10t(0.6)^t\). Détermine \(C(4)\) au centième près.`, num(C(4), 0.01), "40 × 0.6⁴.", [S`\(40(0.1296)\approx5.18\).`], S`\(\approx5.18\)`),
    q("difficile", S`Avec \(A=\pi(3t+2)^2\), quand l'aire vaut-elle \(500\ \text{m}^2\)? (au centième près)`, num((Math.sqrt(500 / Math.PI) - 2) / 3, 0.01), "3t + 2 = √(500/π).", [S`\(3t+2\approx12.62\Rightarrow t\approx3.54\).`], S`\(\approx3.54\)`),
  ]),

  wrapUp({
    qas: [
      ["Quand une somme est-elle le bon modèle?", "Quand une quantité a une tendance régulière plus une partie qui se répète ou s'ajoute."],
      ["Quand un produit est-il le bon modèle?", "Quand une partie en multiplie une autre, comme dans une onde qui s'éteint."],
      ["Quand une composée est-elle le bon modèle?", "Quand une quantité dépend d'une deuxième qui dépend du temps."],
      ["Pourquoi le coût moyen s'approche-t-il de 15 dans 15 + 2000/x?", "Le coût fixe est réparti sur un plus grand nombre d'articles, donc 2000/x → 0."],
      ["Que faire si je ne peux pas résoudre le modèle algébriquement?", "Utilise une table ou un graphique pour trouver les points de croisement, puis interprète."],
    ],
    summary: [
      "Somme : tendance + cycle; différence : écart ou profit.",
      "Produit : enveloppe × onde.",
      "Composée : dépendance en chaîne.",
      "Quotient : valeurs par article ou moyennes.",
    ],
    next: "En 8.6, tu révises tout le chapitre.",
  }),
];
