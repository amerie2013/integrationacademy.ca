// MHF4U-FR 7.5 — Modèles exponentiels et logarithmiques : intérêt composé avec plusieurs périodes,
// demi-vie à partir de données, modèle passant par deux points, refroidissement de Newton et modèle logarithmique.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "7.5 Modèles exponentiels et logarithmiques";
export const ID = lessonId(7, 5);

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Modèles exponentiels et logarithmiques",
    overview: S`L'argent dans un compte d'épargne, un médicament dans le sang, une tasse de café qui refroidit et une culture de bactéries en croissance suivent tous des modèles exponentiels. Une fois le modèle écrit, des questions comme « quand atteindra-t-on…? » deviennent des équations exponentielles, qu'on résout avec les logarithmes. D'autres quantités, comme une habileté qui s'améliore vite au début puis plafonne, suivent des modèles logarithmiques, qu'on résout en réécrivant sous forme exponentielle. Dans cette leçon, tu construis les modèles à partir d'un énoncé ou de données et tu t'en sers pour répondre à des questions.`,
    goals: [
      "écrire des modèles de croissance et de décroissance \\(A=A_0b^{t/p}\\) à partir d'un taux, d'un temps de doublement ou d'une demi-vie;",
      "utiliser l'intérêt composé avec plusieurs périodes de capitalisation par année;",
      "trouver un modèle à partir de deux points de données;",
      "résoudre pour le temps dans des modèles exponentiels et pour la variable indépendante dans des modèles logarithmiques;",
      "interpréter les réponses selon le contexte et les vérifier.",
    ],
    curriculum: "A3.4 (résoudre algébriquement des problèmes comportant des équations exponentielles et logarithmiques, y compris des problèmes tirés de situations réelles), D1.9 (résoudre des problèmes à l'aide de graphiques et d'équations de fonctions exponentielles et logarithmiques)",
    prior: [
      [S`Résous \(1.05^t=2\).`, S`\(t=\frac{\log2}{\log1.05}\approx14.2\).`],
      [S`Une quantité perd \(15\,\%\) par année. Quel est le facteur annuel?`, S`\(0.85\).`],
      [S`Résous \(\log(t+1)=2\).`, S`\(t+1=100\), donc \(t=99\).`],
    ],
    words: [
      ["Facteur de croissance ou de décroissance", "le nombre par lequel on multiplie à chaque période", "\\(+8\\,\\%\\Rightarrow1.08,\\ -8\\,\\%\\Rightarrow0.92\\)"],
      ["Demi-vie", "le temps nécessaire pour qu'une quantité diminue de moitié", "\\(A=A_0\\left(\\tfrac12\\right)^{t/h}\\)"],
      ["Intérêt composé", "\\(A=P\\left(1+\\tfrac rn\\right)^{nt}\\), \\(n\\) périodes par année", "mensuel : \\(n=12\\)"],
      ["Modèle logarithmique", "la variable dépendante augmente de quantités égales quand la variable indépendante est multipliée", "\\(N=20+30\\log(t+1)\\)"],
    ],
  }),

  section("📌 Construire le modèle", S`
  ${table(["Situation", "Modèle", "Sens de chaque partie"], [
    ["croissance ou décroissance à un taux \\(r\\) par période", "\\(A=A_0(1\\pm r)^t\\)", "\\(A_0\\) = valeur initiale, \\(t\\) = nombre de périodes"],
    ["temps de doublement \\(d\\)", "\\(A=A_0(2)^{t/d}\\)", "\\(t/d\\) = nombre de doublements"],
    ["demi-vie \\(h\\)", "\\(A=A_0\\left(\\tfrac12\\right)^{t/h}\\)", "\\(t/h\\) = nombre de réductions de moitié"],
    ["intérêt composé", "\\(A=P\\left(1+\\tfrac rn\\right)^{nt}\\)", "\\(n\\) = périodes de capitalisation par année"],
    ["refroidissement (Newton)", "\\(T=T_s+(T_0-T_s)b^t\\)", "c'est l'<i>écart</i> avec la température ambiante qui décroît"],
  ])}
  ${keyIdea(S`Pour répondre à « quand? » dans un modèle exponentiel : isole la puissance, prends les logarithmes, puis divise (7.2). Pour répondre à « quand? » dans un modèle logarithmique : isole le logarithme et réécris sous forme exponentielle (7.4).`)}`),

  widget("ibExpGraph", { init: [100, 1.2, 0, 0] }),

  section("📌 Lire le graphique d'un modèle", S`
  <p>Un modèle de croissance exponentielle monte de plus en plus vite; un modèle de décroissance descend vers une asymptote (souvent \(0\), ou la température ambiante dans le cas du refroidissement). Un modèle logarithmique monte rapidement, puis s'aplatit : chaque <b>multiplication</b> de la variable indépendante ajoute la <b>même quantité</b> à la variable dépendante.</p>
  ${plane({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 30 * L(t + 1), a: 0, color: "violet" }], points: [{ x: 9, y: 50, label: "(9, 50)", color: "amber" }, { x: 30.6, y: 65, label: "(30.6, 65)", color: "blue" }], step: { x: 5, y: 10 }, xlabel: "t (semaines)", ylabel: "N (mots/min)" }, "Vitesse de frappe N = 20 + 30 log(t + 1) : les 9 premières semaines ajoutent 30 mots/min; les 15 mots/min suivants prennent environ 21 semaines de plus.")}
  ${watchOut([
    "Une perte de 12 % donne un facteur de 0.88, et non de 0.12.",
    "Avec une capitalisation mensuelle, le taux par période est r/12 et le nombre de périodes est 12t.",
    "Dans un modèle de refroidissement, c'est l'écart avec la température ambiante qui décroît, et non la température elle-même.",
    "Réponds à la question posée : convertis les mois en années, arrondis de façon raisonnable et indique les unités.",
    "Vérifie que la réponse est raisonnable : une demi-vie doit être positive, un temps de doublement devrait concorder avec la règle de 70.",
  ])}`),

  examples([
    ["Intérêt composé mensuellement", S`On investit \(2500\ \$\) à \(4.8\,\%\) par année, capitalisé mensuellement. Quand le placement atteindra-t-il \(4000\ \$\)?`,
      [S`<b>Données et objectif.</b> \(P=2500\), \(r=0.048\), \(n=12\) périodes par année et \(A=4000\). L'inconnue est le temps \(t\), qui se trouve dans l'exposant; il faudra donc utiliser les logarithmes.`,
        S`<b>Modèle.</b> \(A=P\left(1+\frac rn\right)^{nt}\). Le taux par mois est \(\frac{0.048}{12}=0.004\), et il y a \(12t\) mois : \(A=2500(1.004)^{12t}\).`,
        S`<b>Isoler la puissance.</b> Pose \(A=4000\) et divise par \(2500\) : \(1.004^{12t}=\dfrac{4000}{2500}=1.6\).`,
        S`<b>Prendre les logarithmes.</b> \(12t\log1.004=\log1.6\), donc \(12t=\dfrac{\log1.6}{\log1.004}\approx117.7\) mois.`,
        S`<b>Interpréter.</b> L'intérêt est ajouté une fois par mois, donc le solde dépasse \(4000\ \$\) pour la première fois quand l'intérêt est ajouté à la fin du mois \(118\). En années, \(t\approx9.81\).`,
        S`<b>Vérification.</b> \(2500(1.004)^{117}\approx3988<4000\) et \(2500(1.004)^{118}\approx4004>4000\) ✓. La règle de 72 à \(4.8\,\%\) donne environ \(15\) ans pour doubler, et croître d'un facteur \(1.6\) devrait prendre moins de temps ✓`],
      S`environ \(9.8\) ans (\(118\) mois)`,
      plane({ view: { xmin: 0, xmax: 15, ymin: 2000, ymax: 5500 }, curves: [{ f: (t) => 2500 * 1.004 ** (12 * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 4000, color: "blue", dash: true }], points: [{ x: 9.81, y: 4000, label: "(9.81, 4000)", color: "amber" }], step: { x: 1, y: 500 } })],
    ["Demi-vie à partir de données", S`Une dose de \(80\) mg d'un médicament diminue à \(25\) mg en \(12\) heures. Trouve sa demi-vie.`,
      [S`<b>Données et objectif.</b> \(A_0=80\), et \(A=25\) quand \(t=12\). L'inconnue est la demi-vie \(h\).`,
        S`<b>Modèle.</b> Après \(t\) heures, la quantité a diminué de moitié \(\frac th\) fois, donc \(A=80\left(\tfrac12\right)^{t/h}\).`,
        S`<b>Substituer et isoler.</b> \(25=80\left(\tfrac12\right)^{12/h}\). Divise par \(80\) : \(\left(\tfrac12\right)^{12/h}=0.3125\).`,
        S`<b>Prendre les logarithmes.</b> L'exposant descend : \(\dfrac{12}{h}\log0.5=\log0.3125\).`,
        S`<b>Résoudre pour \(h\).</b> Multiplie par \(h\) et divise par \(\log0.3125\) : \(h=\dfrac{12\log0.5}{\log0.3125}\approx7.15\) h. Les deux logarithmes sont négatifs, donc \(h\) est positif.`,
        S`<b>Vérification.</b> \(80(0.5)^{12/7.151}\approx25.0\) ✓. Vraisemblance : \(25\) mg se situe entre la moitié (\(40\)) et le quart (\(20\)) de la dose, donc \(12\) h correspond à entre \(1\) et \(2\) demi-vies ✓. Le graphique passe par \((7.15,\,40)\).`],
      S`environ \(7.15\) h`,
      plane({ view: { xmin: -1, xmax: 25, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 80 * 0.5 ** (t / 7.151), a: 0, color: "violet" }], points: [{ x: 0, y: 80, label: "(0, 80)", color: "blue" }, { x: 7.15, y: 40, label: "(7.15, 40)", color: "amber" }, { x: 12, y: 25, label: "(12, 25)", color: "blue" }], step: { x: 2, y: 10 } })],
    ["Un modèle passant par deux points", S`Une culture compte \(300\) bactéries après \(2\) h et \(1200\) après \(5\) h. Trouve un modèle \(N=ab^t\) et le moment où la culture atteint \(10\,000\) bactéries.`,
      [S`<b>Établir deux équations.</b> Les points donnent \(ab^2=300\) et \(ab^5=1200\). Il y a deux inconnues, \(a\) et \(b\).`,
        S`<b>Diviser pour éliminer \(a\).</b> \(\dfrac{ab^5}{ab^2}=\dfrac{1200}{300}\), donc \(b^3=4\) et \(b=4^{1/3}\approx1.5874\).`,
        S`<b>Trouver \(a\).</b> Substitue dans la première équation : \(a=\dfrac{300}{b^2}\approx\dfrac{300}{2.5198}\approx119.06\). Le modèle est \(N\approx119.06(1.5874)^t\).`,
        S`<b>Isoler la puissance pour \(N=10\,000\).</b> \(b^t=\dfrac{10\,000}{119.06}\approx83.99\).`,
        S`<b>Prendre les logarithmes.</b> \(t=\dfrac{\log83.99}{\log1.5874}\approx9.59\) h.`,
        S`<b>Vérification.</b> Le modèle donne \(300\) en \(t=2\) et \(1200\) en \(t=5\) ✓. Le nombre quadruple toutes les \(3\) h : \(1200\to4800\to19\,200\) en \(t=5,\,8,\,11\), donc \(10\,000\) se situe entre \(8\) h et \(11\) h ✓`],
      S`\(N\approx119.06(1.5874)^t\); environ \(9.6\) h`,
      plane({ view: { xmin: -0.5, xmax: 11, ymin: -500, ymax: 12000 }, curves: [{ f: (t) => 119.06 * 1.5874 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 10000, color: "blue", dash: true }], points: [{ x: 5, y: 1200, label: "(5, 1200)", color: "blue" }, { x: 9.59, y: 10000, label: "(9.59, 10 000)", color: "amber" }], step: { x: 1, y: 2000 } })],
    ["La loi du refroidissement de Newton", S`Un café à \(90^\circ\)C est laissé dans une pièce à \(20^\circ\)C. L'écart avec la température ambiante diminue de moitié toutes les \(12\) minutes. Quand le café sera-t-il à \(45^\circ\)C?`,
      [S`<b>Qu'est-ce qui décroît?</b> Pas la température elle-même, qui s'arrête à \(20^\circ\)C, mais l'écart avec la pièce. Il vaut au départ \(90-20=70\).`,
        S`<b>Modèle.</b> Écart \(=70\left(\tfrac12\right)^{t/12}\), donc \(T=20+70\left(\tfrac12\right)^{t/12}\).`,
        S`<b>Poser \(T=45\) et isoler.</b> Soustrais \(20\) : \(70\left(\tfrac12\right)^{t/12}=25\). Divise par \(70\) : \(\left(\tfrac12\right)^{t/12}=\dfrac{25}{70}\).`,
        S`<b>Prendre les logarithmes.</b> \(\dfrac t{12}\log0.5=\log\dfrac{25}{70}\), donc \(t=\dfrac{12\log(25/70)}{\log0.5}\approx17.8\) min.`,
        S`<b>Vérification avec des demi-périodes entières.</b> Après \(12\) min, l'écart vaut \(35\), donc \(T=55\). Après \(24\) min, il vaut \(17.5\), donc \(T=37.5\). \(45^\circ\)C se situe entre les deux, donc \(t\) est entre \(12\) et \(24\) ✓`,
        S`<b>Lire le graphique.</b> La courbe s'approche de l'asymptote rouge \(T=20\), la température ambiante, et coupe \(T=45\) près de \(t=18\) ✓`],
      S`environ \(17.8\) min`,
      plane({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 70 * 0.5 ** (t / 12), a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "red", dash: true }, { m: 0, b: 45, color: "blue", dash: true }], points: [{ x: 17.83, y: 45, label: "(17.8, 45)", color: "amber" }], step: { x: 5, y: 10 } })],
    ["Un modèle logarithmique", S`Après \(t\) semaines de pratique, un élève tape \(N=20+30\log(t+1)\) mots par minute. Quand atteint-il \(50\) mots/min? \(65\) mots/min?`,
      [S`<b>Plan.</b> Ici, l'inconnue est dans un logarithme; isole donc le logarithme et réécris sous forme exponentielle.`,
        S`<b>Cible 50.</b> \(20+30\log(t+1)=50\). Soustrais \(20\) : \(30\log(t+1)=30\). Divise par \(30\) : \(\log(t+1)=1\).`,
        S`<b>Forme exponentielle.</b> \(t+1=10^1\), donc \(t=9\) semaines.`,
        S`<b>Cible 65.</b> \(30\log(t+1)=45\), donc \(\log(t+1)=1.5\), \(t+1=10^{1.5}\approx31.6\) et \(t\approx30.6\) semaines.`,
        S`<b>Interpréter.</b> Le premier gain de \(30\) mots/min prend \(9\) semaines, mais les \(15\) mots/min suivants prennent environ \(21.6\) semaines de plus. Dans un modèle logarithmique, multiplier \(t+1\) par \(10\) ajoute toujours la même quantité (\(30\)), donc les progrès ralentissent.`,
        S`<b>Vérification.</b> \(20+30\log10=50\) ✓ et \(20+30\log31.6\approx65.0\) ✓. La courbe qui s'aplatit sur le graphique montre la même chose.`],
      S`\(9\) semaines; environ \(30.6\) semaines`,
      plane({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 30 * L(t + 1), a: 0, color: "violet" }], lines: [{ m: 0, b: 50, color: "blue", dash: true }, { m: 0, b: 65, color: "blue", dash: true }], points: [{ x: 9, y: 50, label: "(9, 50)", color: "amber" }, { x: 30.6, y: 65, label: "(30.6, 65)", color: "amber" }], step: { x: 5, y: 10 } })],
  ]),

  practice([
    q("intérêt", S`Combien d'années faut-il pour que \(1200\ \$\) devienne \(2000\ \$\) à \(5\,\%\) par année, capitalisé annuellement? (au centième près)`, num(L(5 / 3) / L(1.05), 0.01), "1.05ᵗ = 2000/1200.", [S`\(t=\frac{\log(5/3)}{\log1.05}\approx10.47\).`], S`\(\approx10.47\)`),
    q("demi-vie", S`Une substance a une demi-vie de \(6\) h. Combien de milligrammes d'un échantillon de \(200\) mg reste-t-il après \(15\) h? (au centième près)`, num(200 * 0.5 ** 2.5, 0.01), "15/6 = 2.5 demi-vies.", [S`\(200(0.5)^{2.5}\approx35.36\).`], S`\(\approx35.36\)`),
    q("modèle logarithmique", S`Avec \(N=20+30\log(t+1)\), quand l'élève atteint-il \(56\) mots/min? (au centième près)`, num(10 ** 1.2 - 1, 0.01), "log(t + 1) = 1.2.", [S`\(t=10^{1.2}-1\approx14.85\).`], S`\(\approx14.85\)`),
    q("quel modèle?", S`Une quantité diminue de moitié tous les \(3\) ans. Quel modèle convient?`, choice(["A = A₀(0.5)^(t/3)", "A = A₀(0.5)^(3t)", "A = A₀ − 0.5t/3", "A = 3A₀(0.5)^t"], 0), "t/3 compte les réductions de moitié.", [S`Après \(t\) années, la quantité a diminué de moitié \(t/3\) fois.`], S`\(A=A_0(0.5)^{t/3}\)`),
    q("deux points", S`Une population compte \(50\) individus en \(t=0\) et \(80\) en \(t=4\). Quel est son taux de croissance par unité de temps, en pourcentage? (au centième près)`, num((1.6 ** 0.25 - 1) * 100, 0.01), "b⁴ = 1.6.", [S`\(b=1.6^{1/4}\approx1.1247\), donc environ \(12.47\,\%\).`], S`\(\approx12.47\)`),
  ]),

  ...hard([
    ["Comparer deux comptes", S`Le compte A rapporte \(6\,\%\) capitalisé annuellement; le compte B rapporte \(5.85\,\%\) capitalisé mensuellement. Lequel double l'argent le plus vite, et de combien?`,
      [S`<b>Facteurs annuels :</b> A : \(1.06\). B : \(\left(1+\frac{0.0585}{12}\right)^{12}\approx1.06009\), légèrement plus grand.`,
        S`<b>Temps de doublement :</b> A : \(t=\dfrac{\log2}{\log1.06}\approx11.896\) ans. B : \(t=\dfrac{\log2}{\log1.06009}\approx11.878\) ans.`,
        S`<b>Comparer :</b> B est plus rapide d'environ \(0.018\) an, soit à peu près \(7\) jours.`,
        S`<b>Raison :</b> la capitalisation mensuelle produit de l'intérêt sur l'intérêt pendant l'année, ce qui compense largement le taux annoncé plus bas.`],
      S`B, d'environ une semaine`],
    ["Datation au carbone 14", S`Le carbone 14 a une demi-vie de \(5730\) ans. Un os contient \(35\,\%\) de son carbone 14 initial. Quel est son âge?`,
      [S`<b>Modèle :</b> \(\dfrac{A}{A_0}=\left(\tfrac12\right)^{t/5730}\); pose cette fraction égale à \(0.35\).`,
        S`<b>Prendre les logarithmes :</b> \(\dfrac{t}{5730}\log0.5=\log0.35\Rightarrow t=\dfrac{5730\log0.35}{\log0.5}\approx8679\) ans.`,
        S`<b>Vérification :</b> \(35\,\%\) se situe entre \(50\,\%\) (une demi-vie, \(5730\) ans) et \(25\,\%\) (deux demi-vies, \(11\,460\) ans) ✓`],
      S`environ \(8700\) ans`,
      plane({ view: { xmin: -500, xmax: 20000, ymin: 0, ymax: 1.1 }, curves: [{ f: (t) => 0.5 ** (t / 5730), a: 0, color: "violet" }], lines: [{ m: 0, b: 0.35, color: "blue", dash: true }], points: [{ x: 8679, y: 0.35, label: "(8679, 0.35)", color: "amber" }, { x: 5730, y: 0.5, label: "(5730, 0.5)", color: "blue" }], step: { x: 2000, y: 0.1 } })],
  ], [
    q("difficile", S`Un fossile contient \(60\,\%\) de son carbone 14 (demi-vie de \(5730\) ans). Trouve son âge à l'année près.`, num(5730 * L(0.6) / L(0.5), 1), "(1/2)^(t/5730) = 0.6.", [S`\(t=\frac{5730\log0.6}{\log0.5}\approx4223\).`], S`\(\approx4223\)`),
    q("difficile", S`Un thé à \(95^\circ\)C refroidit à \(70^\circ\)C en \(10\) min dans une pièce à \(22^\circ\)C. Quand sera-t-il à \(40^\circ\)C? (en minutes, au centième près)`, num(10 * L(18 / 73) / L(48 / 73), 0.02), "L'écart passe de 73 à 48 en 10 min.", [S`\(b^{10}=\frac{48}{73}\); résous \(\left(\frac{48}{73}\right)^{t/10}=\frac{18}{73}\) : \(t\approx33.39\).`], S`\(\approx33.39\)`),
    q("difficile", S`À \(3.6\,\%\) par année, capitalisé mensuellement, combien d'années faut-il pour qu'un placement augmente de \(50\,\%\)? (au centième près)`, num(L(1.5) / L(1.003) / 12, 0.01), "1.003^(12t) = 1.5.", [S`\(12t=\frac{\log1.5}{\log1.003}\approx135.36\), donc \(t\approx11.28\).`], S`\(\approx11.28\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment transformer une demi-vie en modèle?", "A = A₀(1/2)^(t/h) : t/h compte les réductions de moitié."],
      ["Qu'est-ce qui change avec une capitalisation mensuelle?", "Le taux par période est r/12 et il y a 12t périodes."],
      ["Comment trouver un modèle à partir de deux points?", "Divise les deux équations pour éliminer a, résous pour b, puis substitue pour trouver a."],
      ["Pourquoi le modèle de refroidissement contient-il +20?", "Le café s'approche de la température ambiante; seul l'écart avec 20 °C décroît."],
      ["Comment résoudre un modèle logarithmique pour t?", "Isole le logarithme, réécris sous forme exponentielle, puis résous."],
    ],
    summary: [
      "Croissance ou décroissance : A = A₀bᵗ; doublement 2^(t/d); demi-vie (1/2)^(t/h).",
      "Intérêt : A = P(1 + r/n)^(nt).",
      "Questions « quand? » : isoler, prendre les logarithmes, diviser.",
      "Vérifie les réponses à l'aide des données et du graphique.",
    ],
    next: "En 7.6, tu révises tout le chapitre.",
  }),
];
