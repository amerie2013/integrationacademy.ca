// MTH1W-FR 5.3 — Unités et conversion d'unités (format autonome) : système métrique, système impérial, unités d'aire et de volume, taux
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, rect, prism } from "../mth1w-ch5/figs5.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "5.3 Unités et conversion d'unités";
export const ID = lessonId(5, 3);

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Unités et conversion d'unités",
    overview: String.raw`Le Canada utilise officiellement le système métrique, mais les constructeurs achètent encore le bois en pouces et en pieds, les recettes utilisent des tasses, et un voyage aux États-Unis signifie des milles et des gallons. Dans cette leçon, tu feras des conversions à l'intérieur du système métrique, entre les unités métriques et impériales et — l'étape où la plupart des gens se trompent — entre les unités d'aire et de volume. Une seule méthode suffit pour tout : multiplier par une fraction de conversion égale à 1.`,
    goals: [
      "convertir les unités métriques de longueur, de masse et de capacité à l'aide des puissances de dix;",
      "convertir entre unités impériales (pouces, pieds, verges, milles) et entre unités impériales et métriques;",
      "convertir des unités d'aire (×100 par échelon métrique) et de volume (×1000 par échelon);",
      "relier le volume et la capacité : 1 cm³ = 1 mL et 1000 cm³ = 1 L;",
      "convertir des taux, comme des km/h en m/s, à l'aide de la méthode des facteurs de conversion.",
    ],
    curriculum: "E1.3 (résoudre des problèmes comportant différentes unités à l'intérieur d'un système de mesure et entre des systèmes de mesure)",
    prior: [
      [String.raw`\(3.6\times1000=?\)`, String.raw`\(3600\) : déplace la virgule décimale de 3 positions vers la droite.`],
      [String.raw`\(450\div100=?\)`, String.raw`\(4.5\).`],
      [String.raw`Combien y a-t-il de pouces dans un pied ?`, String.raw`\(12\).`],
    ],
    words: [
      ["Préfixe métrique", "kilo = 1000, centi = 1/100, milli = 1/1000", "1 km = 1000 m"],
      ["Unités impériales", "pouce, pied, verge, mille; once, livre; gallon", "1 pi = 12 po"],
      ["Facteur de conversion", "une fraction égale à 1 qui change les unités", "\\(\\frac{100\\text{ cm}}{1\\text{ m}}\\)"],
      ["Capacité", "ce qu'un contenant peut contenir (L, mL)", "1 L = 1000 mL"],
      ["Taux", "une comparaison de deux quantités exprimées dans des unités différentes", "90 km/h"],
    ],
  }),

  section("📌 Unités métriques : les puissances de dix", String.raw`
  ${table(["kilo (k)", "hecto (h)", "déca (da)", "unité de base", "déci (d)", "centi (c)", "milli (m)"], [["1000", "100", "10", "1 (m, g, L)", "0.1", "0.01", "0.001"]])}
  ${keyIdea(String.raw`Passer à une unité <strong>plus petite</strong> donne un <strong>plus grand nombre</strong> (on multiplie); passer à une unité plus grande donne un plus petit nombre (on divise). Chaque échelon de l'échelle correspond à un facteur de \(10\).`)}
  <p>La <strong>méthode des facteurs de conversion</strong> : multiplie par une fraction dont le numérateur et le dénominateur sont des quantités égales, avec l'unité voulue au numérateur pour que l'ancienne unité s'annule.</p>
  \[4.8\ \text{km}\times\frac{1000\ \text{m}}{1\ \text{km}}=4800\ \text{m}\]`),

  section("📌 Les unités impériales et le passage d'un système à l'autre", String.raw`
  ${table(["Impérial", "Égale", "Métrique (environ)"], [
    ["1 pouce (po)", "—", "2.54 cm (exact)"], ["1 pied (pi)", "12 po", "30.48 cm"], ["1 verge (vg)", "3 pi = 36 po", "0.9144 m"], ["1 mille (mi)", "5280 pi = 1760 vg", "1.609 km"],
    ["1 livre (lb)", "16 onces (oz)", "0.454 kg"], ["1 gallon américain", "4 pintes", "3.785 L"],
  ])}
  <p>Les tailles et le bois d'œuvre mélangent souvent les unités : \(5\) pi \(7\) po signifie \(5\times12+7=67\) po. Convertis d'abord en une seule unité, puis passe au système métrique avec \(1\) po \(=2.54\) cm.</p>`),

  section("📌 Unités d'aire et de volume", String.raw`
  <p>Un mètre carré est un carré de \(1\) m sur \(1\) m — c'est-à-dire \(100\) cm sur \(100\) cm; il contient donc \(100\times100\) centimètres carrés.</p>
  ${fig({ w: 280, items: [...rect(10, 10, { lw: "1 m = 100 cm", lh: "100 cm", fill: "#eff6ff" }), ...[1, 2, 3, 4, 5, 6, 7, 8, 9].flatMap((k) => [{ seg: [[k, 0], [k, 10]], color: "#bfdbfe", width: 1 }, { seg: [[0, k], [10, k]], color: "#bfdbfe", width: 1 }]), { poly: [[0, 9], [1, 9], [1, 10], [0, 10]], fill: "red", color: "red", width: 1.5 }, { text: "chaque petit carré mesure 10 cm × 10 cm", at: [5, -1.6], size: 11.5, color: "gray" }] }, "1 m² = 100 cm × 100 cm = 10 000 cm².")}
  ${keyIdea(String.raw`Élève le facteur de longueur au carré pour l'aire et au cube pour le volume : \(1\ \text{m}^2=100^2=10\,000\ \text{cm}^2\) et \(1\ \text{m}^3=100^3=1\,000\,000\ \text{cm}^3\).`)}
  ${table(["Volume", "Capacité"], [["\\(1\\ \\text{cm}^3\\)", "1 mL"], ["\\(1000\\ \\text{cm}^3\\)", "1 L"], ["\\(1\\ \\text{m}^3\\)", "1000 L"]])}`),

  widget("unitLadder"),

  section("📌 Les taux", String.raw`
  <p>Un taux comporte deux unités. Convertis chacune avec son propre facteur :</p>
  \[90\ \frac{\text{km}}{\text{h}}\times\frac{1000\ \text{m}}{1\ \text{km}}\times\frac{1\ \text{h}}{3600\ \text{s}}=25\ \frac{\text{m}}{\text{s}}\]
  ${watchOut([
    "Aire : 1 m² vaut 10 000 cm², pas 100 cm². Volume : 1 m³ vaut 1 000 000 cm³.",
    "Vérifie le sens : unité plus petite → plus grand nombre.",
    "5 pi 7 po font 67 po, pas 5.7 pi.",
    "N'arrondis qu'à la fin, et précise comment tu as arrondi.",
  ])}`),

  examples([
    ["À l'intérieur du système métrique", String.raw`Un sentier mesure \(4.8\) km de long. Écris cette longueur en mètres et en centimètres.`,
      [String.raw`<b>Faits.</b> \(1\ \text{km}=1000\ \text{m}\) et \(1\ \text{m}=100\ \text{cm}\).`,
        String.raw`<b>Règle.</b> Passer à une unité <i>plus petite</i> donne un nombre <i>plus grand</i>, donc on multiplie.`,
        String.raw`<b>De km à m :</b> \(4.8\times1000=4800\) m.`,
        String.raw`<b>De m à cm :</b> \(4800\times100=480\,000\) cm.`,
        String.raw`<b>Vérification :</b> \(1\ \text{km}=100\,000\ \text{cm}\), et \(4.8\times100\,000=480\,000\) ✓.`],
      String.raw`\(4800\) m \(=480\,000\) cm`],
    ["Une taille en pieds et en pouces", String.raw`Un joueur mesure \(5\) pi \(7\) po. Trouve sa taille en centimètres.`,
      [String.raw`<b>Faits.</b> \(1\ \text{pi}=12\ \text{po}\) et \(1\ \text{po}=2.54\ \text{cm}\).`,
        String.raw`<b>Tout écrire en pouces.</b> \(5\) pi \(=5\times12=60\) po, plus \(7\) po : \(60+7=67\) po.`,
        String.raw`<b>Des pouces aux centimètres :</b> \(67\times2.54=170.18\) cm.`,
        String.raw`<b>Vérification :</b> \(170.18\div2.54=67\) po ✓.`],
      String.raw`environ \(170.2\) cm`],
    ["Unités d'aire", String.raw`Un plancher mesure \(3.2\) m sur \(4.5\) m. Trouve son aire en \(\text{m}^2\) et en \(\text{cm}^2\).`,
      [String.raw`<b>Formule.</b> \[A=l\times w\] \(A=3.2\times4.5=14.4\ \text{m}^2\).`,
        String.raw`<b>Unités carrées.</b> Un carré de \(1\ \text{m}\times1\ \text{m}\) mesure \(100\ \text{cm}\times100\ \text{cm}\), donc \(1\ \text{m}^2=10\,000\ \text{cm}^2\) (pas 100 !).`,
        String.raw`<b>Convertir :</b> \(14.4\times10\,000=144\,000\ \text{cm}^2\).`,
        String.raw`<b>Vérifier autrement.</b> Convertis d'abord les longueurs : \(320\ \text{cm}\times450\ \text{cm}\), et \(320\times450=144\,000\) ✓.`],
      String.raw`\(14.4\ \text{m}^2=144\,000\ \text{cm}^2\)`,
      fig({ w: 260, items: rect(4.5, 3.2, { lw: "4.5 m", lh: "3.2 m" }) })],
    ["Volume et capacité", String.raw`Un aquarium mesure \(60\) cm sur \(30\) cm sur \(40\) cm. Combien de litres contient-il ? Environ combien de gallons américains ?`,
      [String.raw`<b>Formule.</b> \[V=l\times w\times h\] \(V=60\times30\times40=72\,000\ \text{cm}^3\).`,
        String.raw`<b>Capacité.</b> \(1000\ \text{cm}^3=1\) L, donc \(72\,000\div1000=72\) L.`,
        String.raw`<b>Des litres aux gallons.</b> \(1\) gallon américain \(\approx3.785\) L. Un gallon est plus grand qu'un litre, donc on divise : \(72\div3.785\approx19.0\).`,
        String.raw`<b>Vérification :</b> \(19\times3.785\approx71.9\), proche de \(72\) L ✓.`],
      String.raw`\(72\) L, environ \(19\) gallons américains`,
      fig({ w: 260, items: prism(6, 3, 4, { ll: "60 cm", lw: "30 cm", lh: "40 cm" }) })],
    ["Convertir un taux", String.raw`La limite de vitesse sur une autoroute est de \(100\) km/h. Écris-la en mètres par seconde et en milles à l'heure.`,
      [String.raw`<b>Méthode.</b> Multiplie par des fractions de conversion égales à 1, pour que les unités non voulues s'annulent : \[100\ \tfrac{\text{km}}{\text{h}}\times\tfrac{1000\ \text{m}}{1\ \text{km}}\times\tfrac{1\ \text{h}}{3600\ \text{s}}\]`,
        String.raw`<b>Mètres par seconde :</b> \(\frac{100\times1000}{3600}=\frac{100\,000}{3600}\approx27.8\) m/s.`,
        String.raw`<b>Milles à l'heure.</b> \(1\) mi \(\approx1.609\) km, donc \(100\div1.609\approx62.1\) mi/h.`,
        String.raw`<b>Vérification :</b> \(27.8\times3600\approx100\,080\) m, environ \(100\) km en une heure ✓.`],
      String.raw`environ \(27.8\) m/s, ou \(62\) mi/h`],
  ]),

  practice([
    q("métrique", String.raw`Convertis \(3.75\) m en millimètres.`, num(3750),
      "1 m = 1000 mm; unité plus petite, nombre plus grand.", [String.raw`\(3.75\times1000=3750\).`], String.raw`\(3750\) mm`),
    q("impérial", String.raw`Combien de pouces y a-t-il dans \(2\) vg \(2\) pi ?`, num(96),
      "1 vg = 3 pi et 1 pi = 12 po.", [String.raw`\(2\) vg \(=6\) pi; \(6+2=8\) pi; \(8\times12=96\).`], String.raw`\(96\) po`),
    q("impérial vers métrique", String.raw`Convertis \(6\) pi en centimètres.`, num(182.88, 0.01),
      "D'abord en pouces, puis 2.54 cm par pouce.", [String.raw`\(6\times12=72\) po; \(72\times2.54=182.88\).`], String.raw`\(182.88\) cm`),
    q("aire", String.raw`Convertis \(2.5\ \text{m}^2\) en \(\text{cm}^2\).`, num(25000),
      "1 m² = 100 × 100 cm².", [String.raw`\(2.5\times10\,000=25\,000\).`], String.raw`\(25\,000\ \text{cm}^2\)`),
    q("capacité", String.raw`Une cruche contient \(1.8\) L. Quel volume cela représente-t-il en \(\text{cm}^3\) ?`, num(1800),
      "1 L = 1000 cm³.", [String.raw`\(1.8\times1000=1800\).`], String.raw`\(1800\ \text{cm}^3\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi l'aire change-t-elle d'un facteur 100 par échelon métrique, et non 10 ?", "L'aire a deux dimensions. Chaque longueur est multipliée par le facteur, donc l'aire est multipliée par le carré du facteur : 10² = 100 par échelon métrique, et 100² = 10 000 pour passer des m² aux cm²."],
      ["Un pouce vaut-il exactement 2.54 cm ?", "Oui. Depuis 1959, le pouce est défini comme valant exactement 2.54 cm, donc toute longueur impériale se convertit exactement."],
      ["Comment savoir s'il faut multiplier ou diviser ?", "Écris la fraction de conversion avec l'unité voulue au numérateur. Si tu la places de façon que l'ancienne unité s'annule, les calculs se font tout seuls."],
      ["Quelle est la différence entre le volume et la capacité ?", "Le volume est l'espace qu'occupe un solide (cm³, m³); la capacité est ce qu'un contenant peut contenir (mL, L). Ils sont liés : 1 cm³ = 1 mL."],
      ["Quand dois-je arrondir ?", "À la fin. Arrondir 2.54 ou 1.609 trop tôt, ou arrondir une étape intermédiaire, peut rendre la réponse finale nettement fausse."],
    ],
    summary: [
      "Système métrique : chaque échelon vaut ×10; unité plus petite → nombre plus grand.",
      "1 po = 2.54 cm; 1 pi = 12 po; 1 vg = 3 pi; 1 mi ≈ 1.609 km.",
      "Facteur d'aire = (facteur de longueur)²; facteur de volume = (facteur de longueur)³.",
      "1 cm³ = 1 mL; 1000 cm³ = 1 L; 1 m³ = 1000 L.",
      "Méthode des facteurs de conversion : multiplie par des fractions égales à 1 pour que les unités s'annulent.",
    ],
    next: "En 5.4, tu utiliseras le théorème de Pythagore pour trouver des longueurs inconnues.",
  }),
];
