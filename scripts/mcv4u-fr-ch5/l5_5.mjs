// MCV4U-FR 5.5 — Établir des liens : modèles exponentiels (miroir de ../mcv4u-ch5/l5_5.mjs) : croissance et
// décroissance avec P′ = kP, temps de doublement et demi-vie, intérêt composé continu, loi du refroidissement de Newton,
// concentration d'un médicament et croissance logistique
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "5.5 Établir des liens : modèles exponentiels";
export const ID = lessonId(5, 5);

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🦠",
    title: "Établir des liens : modèles exponentiels",
    overview: S`Quand une quantité varie à un taux proportionnel à sa taille — plus de bactéries produisent plus de bactéries, une boisson plus chaude se refroidit plus vite — elle suit un modèle exponentiel. Si \(P(t)=P_0e^{kt}\), alors \(P'(t)=kP(t)\) : le taux est \(k\) fois la quantité. Un \(k\) positif signifie une croissance avec un <strong>temps de doublement</strong> fixe \(\frac{\ln2}{k}\); un \(k\) négatif signifie une décroissance avec une <strong>demi-vie</strong> fixe \(\frac{\ln2}{|k|}\). La même dérivée apparaît dans l'intérêt composé de façon continue, dans la loi du refroidissement de Newton et — quand une population s'approche d'une limite — dans le modèle logistique.`,
    goals: [
      "utiliser P(t) = P₀e^(kt) et sa dérivée P′ = kP;",
      "trouver des temps de doublement et des demi-vies;",
      "trouver des taux de variation dans des modèles d'intérêt, de refroidissement et de désintégration;",
      "trouver le maximum d'un modèle de concentration;",
      "interpréter le point le plus abrupt d'une courbe logistique.",
    ],
    curriculum: "A3.5, B2.1–B2.5 (résoudre des problèmes portant sur les taux de variation de modèles exponentiels tirés de situations réelles)",
    prior: [
      [S`\((e^{0.2t})'\)?`, S`\(0.2e^{0.2t}\).`],
      [S`Résous \(e^{kt}=2\).`, S`\(t=\frac{\ln2}{k}\).`],
      [S`Valeur de \(e^0\)?`, S`\(1\).`],
    ],
    words: [
      ["Constante de croissance", "k dans \\(P=P_0e^{kt}\\)", "\\(k\\gt0\\) : croissance"],
      ["Temps de doublement", "\\(\\frac{\\ln 2}{k}\\)", "indépendant de \\(P_0\\)"],
      ["Demi-vie", "\\(\\frac{\\ln2}{|k|}\\)", "décroissance"],
      ["Modèle logistique", "\\(P=\\frac{M}{1+Ae^{-kt}}\\)", "se stabilise à M"],
    ],
  }),

  section("📌 Un taux proportionnel à la quantité", S`
  ${table(["Modèle", "Formule", "Taux"], [
    ["croissance / décroissance", "\\(P_0e^{kt}\\)", "\\(kP\\)"],
    ["intérêt continu", "\\(A=A_0e^{rt}\\)", "\\(rA\\)"],
    ["refroidissement jusqu'à la température ambiante \\(T_s\\)", "\\(T_s+(T_0-T_s)e^{-kt}\\)", "\\(-k(T-T_s)\\)"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 1100 }, curves: [{ f: (t) => 100 * Math.exp(0.2 * t), color: "violet" }, { f: (t) => 1000 * Math.exp(-0.25 * t), color: "blue" }], points: [{ x: Math.log(2) / 0.2, y: 200, label: "doublé", color: "red" }, { x: Math.log(2) / 0.25, y: 500, label: "réduit de moitié", color: "red" }], step: { x: 1, y: 100 } }, "La croissance 100e^(0.2t) (violet) double toutes les 3.47 unités; la décroissance 1000e^(−0.25t) (bleu) diminue de moitié toutes les 2.77 unités.")}
  ${keyIdea(S`Si \(P(t)=P_0e^{kt}\), alors \(P'(t)=kP(t)\). Temps de doublement \(=\frac{\ln2}{k}\); demi-vie \(=\frac{\ln2}{|k|}\). Lis les unités : \(P'\) s'exprime en unités de \(P\) par unité de temps.`)}`),

  section("📌 Explore", S`<p>Fixe la quantité initiale et la constante \(k\). Avance dans le temps et compare \(P\) avec la pente \(P'\) : leur rapport est toujours \(k\). Rends \(k\) négatif pour voir une décroissance et sa demi-vie.</p>`),

  widget("growthModelLab", { init: { P0: 500, k: 0.2, t: 3 } }),

  section("📌 Construire le modèle", S`
  <p>Repère \(P_0\) (la valeur en \(t=0\)) et \(k\) — souvent à partir d'un temps de doublement ou d'une demi-vie. Ensuite, dérive et évalue au temps demandé.</p>
  ${watchOut([
    "k est négatif pour une décroissance.",
    "Le temps de doublement et la demi-vie ne dépendent pas de la quantité initiale.",
    "Utilise les mêmes unités de temps partout (années, heures…).",
    "Un taux est par unité de temps — indique les unités.",
    "La croissance logistique est la plus rapide à la moitié de la valeur limite, pas au début.",
  ])}`),

  examples([
    ["Des bactéries", S`Une culture compte \(P(t)=800e^{0.35t}\) bactéries après \(t\) heures. À quelle vitesse croît-elle en \(t=4\)?`,
      [S`\(P'(t)=0.35\cdot800e^{0.35t}\).`, S`\(P'(4)=280e^{1.4}\approx1135.5\).`],
      S`environ 1135 bactéries par heure`],
    ["Le carbone 14", S`Le carbone 14 a une demi-vie de 5730 ans. À quelle vitesse un échantillon de 50 g se désintègre-t-il?`,
      [S`\(k=-\frac{\ln2}{5730}\approx-1.210\times10^{-4}\) par année.`, S`\(P'=kP=-1.210\times10^{-4}\times50\).`],
      S`environ 0.00605 g par année`],
    ["L'intérêt continu", S`Un montant de 5000 dollars croît selon \(A(t)=5000e^{0.04t}\). À quelle vitesse croît-il après 10 ans?`,
      [S`\(A'(t)=0.04\cdot5000e^{0.04t}\); \(A'(10)=200e^{0.4}\).`],
      S`environ 298.36 dollars par année`,
      plane({ view: { xmin: 0, xmax: 25, ymin: 4, ymax: 14 }, curves: [{ f: (t) => 5 * Math.exp(0.04 * t), a: 0, b: 25, color: "violet" }, { f: (t) => 5 * Math.exp(0.4) + 0.29836 * (t - 10), color: "green", a: 4, b: 16 }], points: [{ x: 10, y: 5 * Math.exp(0.4), label: "(10, 7.46)", color: "red" }], step: { x: 5, y: 1 }, xlabel: "t (années)", ylabel: "A (milliers de dollars)" })],
    ["Un café qui refroidit", S`Un café refroidit selon \(T(t)=20+70e^{-0.08t}\) °C après \(t\) minutes. Trouve \(T'(5)\).`,
      [S`\(T'(t)=-0.08\cdot70e^{-0.08t}\); \(T'(5)=-5.6e^{-0.4}\).`],
      S`environ −3.75 °C par minute`,
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 95 }, curves: [{ f: (t) => 20 + 70 * Math.exp(-0.08 * t), a: 0, b: 40, color: "violet" }, { f: () => 20, color: "gray" }], points: [{ x: 5, y: 20 + 70 * Math.exp(-0.4), label: "(5, 66.9)", color: "red" }], step: { x: 5, y: 10 } })],
    ["La concentration d'un médicament", S`La concentration d'un médicament est \(C(t)=10te^{-0.5t}\) mg/L après \(t\) heures. Quand est-elle la plus élevée?`,
      [S`\(C'(t)=10e^{-0.5t}-5te^{-0.5t}=5e^{-0.5t}(2-t)\).`, S`Nulle en \(t=2\) : \(C(2)=20e^{-1}\approx7.36\).`],
      S`après 2 heures, environ 7.36 mg/L`,
      plane({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 8.5 }, curves: [{ f: (t) => 10 * t * Math.exp(-0.5 * t), a: 0, b: 14, color: "violet" }], points: [{ x: 2, y: 20 / E, label: "max (2, 7.36)", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("taux", S`Pour \(P(t)=1000e^{0.1t}\), trouve \(P'(0)\).`, num(100),
      "0.1 · 1000.", [S`\(100\).`], S`\(100\)`),
    q("doublement", S`Trouve le temps de doublement lorsque \(k=0.05\) (2 décimales).`, num(13.86, 0.01),
      "ln 2 / k.", [S`\(\frac{0.6931}{0.05}\).`], S`\(13.86\)`),
    q("demi-vie", S`Trouve la demi-vie lorsque \(k=-0.2\) (3 décimales).`, num(3.466, 0.002),
      "ln 2 / 0.2.", [S`\(3.466\).`], S`\(3.466\)`),
    q("intérêt", S`Pour \(A(t)=2000e^{0.03t}\), trouve \(A'(0)\) en dollars par année.`, num(60),
      "0.03 · 2000.", [S`\(60\).`], S`\(60\)`),
    q("signification", S`\(P'=kP\) signifie :`, choice(["le taux de variation est proportionnel à la quantité", "la quantité est constante", "le taux de variation est constant", "la quantité est proportionnelle au temps"], 0),
      "Taux = k × quantité.", ["Plus il y en a, plus ça change vite."], "taux proportionnel à la quantité"),
  ]),

  ...hard([
    ["La croissance logistique", S`Une population croît selon \(P(t)=\dfrac{1000}{1+9e^{-0.5t}}\). Quand croît-elle le plus vite, et à quelle vitesse?`,
      [S`La courbe logistique est la plus abrupte à la moitié de la limite, \(P=500\) : \(9e^{-0.5t}=1\Rightarrow t=\frac{\ln9}{0.5}\approx4.394\).`, S`À ce moment, \(P'=0.5P\left(1-\frac{P}{1000}\right)=0.5\cdot500\cdot0.5=125\).`],
      S`en \(t\approx4.39\), avec une croissance de 125 par unité de temps`,
      plane({ view: { xmin: 0, xmax: 16, ymin: 0, ymax: 1100 }, curves: [{ f: (t) => 1000 / (1 + 9 * Math.exp(-0.5 * t)), a: 0, b: 16, color: "violet" }, { f: (t) => 500 + 125 * (t - Math.log(9) / 0.5), color: "green", a: 2, b: 6.8 }, { f: () => 1000, color: "gray" }], points: [{ x: Math.log(9) / 0.5, y: 500, label: "plus abrupt (4.39, 500)", color: "red" }], step: { x: 2, y: 100 } })],
    ["Après la fin de la publicité", S`Après la fin d'une campagne publicitaire, les ventes quotidiennes sont \(S(t)=5000e^{-0.1t}\). Quand le taux de diminution devient-il inférieur à 100 ventes par jour?`,
      [S`\(S'(t)=-500e^{-0.1t}\); il faut \(500e^{-0.1t}\lt100\).`, S`\(e^{-0.1t}\lt0.2\Rightarrow t\gt10\ln5\approx16.09\).`],
      S`après environ 16.1 jours`,
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 5500 }, curves: [{ f: (t) => 5000 * Math.exp(-0.1 * t), a: 0, b: 40, color: "violet" }], points: [{ x: 16.09, y: 1000, label: "(16.1, 1000)", color: "red" }], step: { x: 5, y: 500 } })],
  ], [
    q("difficile", S`Une substance a une demi-vie de 8 jours. À quelle vitesse un échantillon de 40 g se désintègre-t-il (g/jour, 4 décimales)?`, num(-3.4657, 0.0005),
      "k = −ln 2 / 8; taux kP.", [S`\(-\frac{40\ln2}{8}\).`], S`\(-3.4657\)`),
    q("difficile", S`Quel taux d'intérêt continu double un montant en 10 ans (4 décimales)?`, num(0.0693, 0.0005),
      "e^(10r) = 2.", [S`\(r=\frac{\ln2}{10}\).`], S`\(0.0693\)`),
    q("difficile", S`Trouve la plus grande valeur de \(C(t)=5te^{-t}\) (4 décimales).`, num(1.8394, 0.0005),
      "C′ = 5e^(−t)(1 − t).", [S`\(C(1)=\frac5e\).`], S`\(1.8394\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi P′ = kP pour P = P₀e^(kt)?", "La règle de dérivation en chaîne fait apparaître k : (P₀e^(kt))′ = kP₀e^(kt) = kP."],
      ["Pourquoi le temps de doublement ne dépend-il pas de P₀?", "Doubler signifie e^(kt) = 2, ce qui ne fait intervenir que k et t."],
      ["Comment trouver k à partir d'une demi-vie?", "k = −ln 2 / (demi-vie)."],
      ["Que dit la loi du refroidissement de Newton?", "L'écart de température avec le milieu ambiant décroît de façon exponentielle; le taux est donc proportionnel à cet écart."],
      ["Pourquoi utiliser un modèle logistique?", "Les vraies populations manquent d'espace ou de nourriture; la courbe logistique croît d'abord de façon exponentielle, puis se stabilise à une limite."],
    ],
    summary: [
      "P = P₀e^(kt) ⇒ P′ = kP.",
      "Temps de doublement ln 2/k; demi-vie ln 2/|k|.",
      "L'intérêt, le refroidissement et la désintégration partagent la même dérivée.",
      "Logistique : croissance la plus rapide à la moitié de la limite.",
    ],
    next: "La leçon 5.6 fait la révision du chapitre.",
  }),
];
