// MTH1W-FR 5.9 — Révision du chapitre 5
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice } from "./lib.mjs";
import { fig, cylinder, cone, polygon } from "../mth1w-ch5/figs5.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "5.9 Révision du chapitre 5";
export const ID = lessonId(5, 9);

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 5 — Géométrie et mesure",
    overview: String.raw`Cette page rassemble le chapitre avant l'évaluation : l'idée clé de chaque leçon sur un seul écran, des questions où tu dois choisir la bonne formule, des exemples à plusieurs étapes du niveau de l'évaluation, de la pratique variée et une liste de vérification. Fais-la après les leçons 5.1 à 5.8 et retourne à toute leçon où tu bloques.`,
    goals: [
      "te rappeler l'idée clé, un exemple typique et l'erreur fréquente de chaque leçon;",
      "choisir la bonne propriété ou la bonne formule pour un problème de géométrie ou de mesure;",
      "résoudre des problèmes à plusieurs étapes qui combinent unités, Pythagore, aire, volume et aire totale;",
      "vérifier si tu es prêt ou prête pour l'évaluation du chapitre.",
    ],
    curriculum: "E1.1–E1.6 (tout le domaine E1)",
    prior: [
      [String.raw`Chaque angle intérieur d'un hexagone régulier ?`, String.raw`\(720^\circ\div6=120^\circ\).`],
      [String.raw`\(1\ \text{m}^3\) en litres ?`, String.raw`\(1000\) L.`],
      [String.raw`Volume d'un cône avec \(r=3\), \(h=5\) ?`, String.raw`\(\tfrac13\pi(9)(5)=15\pi\).`],
    ],
    words: [
      ["Facteur de longueur k", "multiplie le périmètre par k", "\\(P\\times k\\)"],
      ["Facteur d'aire", "k²", "\\(A\\times k^2\\)"],
      ["Facteur de volume", "k³", "\\(V\\times k^3\\)"],
      ["Apothème", "avec Pythagore : \\(s=\\sqrt{h^2+r^2}\\)", "cône, pyramide"],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple typique", "Attention"], [
    ["5.1 Histoire", "angles droits 3-4-5, base 60, Ératosthène, π entre des polygones", "angle/360° = arc/circonférence", "les valeurs historiques de π sont des approximations"],
    ["5.2 Cercles et triangles", "180° dans un triangle; angle extérieur; (n − 2)·180°; inscrit = ½ au centre; tangente ⟂ rayon", "angle inscrit dans un demi-cercle = 90°", "même arc pour l'angle inscrit et l'angle au centre"],
    ["5.3 Unités", "facteurs de conversion; aire ×100 par échelon métrique, volume ×1000; 1 po = 2.54 cm", "1 m² = 10 000 cm²", "élève le facteur de longueur au carré ou au cube"],
    ["5.4 Pythagore", "a² + b² = c²; réciproque; distance", "\\(\\sqrt{6^2+8^2}=10\\)", "soustrais pour trouver une cathète"],
    ["5.5 Périmètre", "facteur k → P × k; P minimal pour une aire A : carré", "64 m² → 8 × 8", "un côté +x → P + 2x"],
    ["5.6 Aire", "facteur k → A × k²; A maximale pour un périmètre P : carré; mur → l = 2w", "60 m + mur → 15 × 30", "utilise la hauteur perpendiculaire"],
    ["5.7 Volume", "Bh; ⅓Bh; ⁴⁄₃πr³; agrandissement → k³", "cône = ⅓ cylindre", "le rayon, pas le diamètre"],
    ["5.8 Aire totale", "aire du développement; apothème avec Pythagore; agrandissement → k²", "πr² + πrs", "s ≠ h; faces ouvertes"],
  ])),

  section("📌 Quelle formule ?", keyIdea(String.raw`<strong>Une frontière ou une bordure ?</strong> le périmètre. <strong>Recouvrir une région plane ?</strong> l'aire. <strong>Emballer ou peindre un solide ?</strong> l'aire totale. <strong>Remplir un solide ?</strong> le volume ou la capacité. <strong>Un côté manquant d'un triangle rectangle ?</strong> Pythagore. <strong>Un angle manquant ?</strong> les propriétés des triangles, des polygones ou des cercles.`)),

  practice([
    q("quelle mesure", "Quelle quantité de peinture faut-il pour l'extérieur d'un château d'eau en forme de sphère ? Il te faut son…", choice(["aire totale", "volume", "circonférence", "rayon seulement"], 0),
      "La peinture recouvre une surface.", ["Recouvrir l'extérieur d'un solide : l'aire totale."], "aire totale"),
    q("quelle mesure", "Quelle quantité d'eau remplit un réservoir cylindrique ? Il te faut son…", choice(["volume", "aire totale", "aire latérale", "périmètre"], 0),
      "Remplir = l'espace intérieur.", ["Le volume (puis convertis en litres)."], "volume"),
    q("quelle propriété", "Le sommet d'un angle inconnu est sur un cercle et ses côtés aboutissent aux extrémités d'un diamètre. On trouve cet angle grâce à…", choice(["l'angle inscrit dans un demi-cercle mesure 90°", "la propriété de l'angle extérieur", "(n − 2) × 180°", "tangente ⟂ rayon"], 0),
      "L'angle intercepte un diamètre.", ["Angle inscrit dans un demi-cercle = 90°."], "règle des 90°"),
    q("quel outil", String.raw`Pour trouver l'apothème d'un cône avec \(r=6\) et \(h=8\), tu utilises…`, choice(["le théorème de Pythagore", "l'aire d'un cercle", "la propriété de l'angle extérieur", "un facteur de conversion"], 0),
      "r, h et s forment un triangle rectangle.", [String.raw`\(s=\sqrt{36+64}=10\).`], "Pythagore"),
    q("agrandissement", "Chaque dimension d'une maquette est multipliée par 4. Quelle quantité est multipliée par 64 ?", choice(["le volume", "l'aire totale", "le périmètre", "la hauteur"], 0),
      "Quelle mesure a trois dimensions ?", [String.raw`\(4^3=64\).`], "le volume"),
  ]),

  examples([
    ["Des angles dans un motif", String.raw`Un pentagone \(ABCDE\) est régulier. Trouve \(\angle EAB\) et \(\angle ABE\) (la diagonale \(BE\) forme un triangle isocèle avec \(AB\) et \(AE\)).`,
      [String.raw`<b>Règle.</b> \[\text{somme des angles intérieurs}=(n-2)\times180^\circ\] Pour \(n=5\) : \(3\times180^\circ=540^\circ\).`,
        String.raw`<b>Chaque angle</b> d'un pentagone régulier : \(540^\circ\div5=108^\circ\), donc \(\angle EAB=108^\circ\).`,
        String.raw`<b>Triangle isocèle.</b> \(AB=AE\) (côtés d'un pentagone régulier), donc dans \(\triangle ABE\), les angles à la base \(\angle ABE\) et \(\angle AEB\) sont égaux.`,
        String.raw`<b>Angle à la base :</b> \((180^\circ-108^\circ)\div2=72^\circ\div2=36^\circ\).`,
        String.raw`<b>Vérification :</b> \(108+36+36=180\) ✓.`],
      String.raw`\(108^\circ\) et \(36^\circ\)`,
      fig({ w: 240, items: [...polygon([0, 1, 2, 3, 4].map((k) => [Math.cos(((90 + 72 * k) * Math.PI) / 180), Math.sin(((90 + 72 * k) * Math.PI) / 180)]), { names: ["A", "B", "C", "D", "E"], fill: "violet", color: "violet" }), { seg: [[Math.cos((162 * Math.PI) / 180), Math.sin((162 * Math.PI) / 180)], [Math.cos((18 * Math.PI) / 180), Math.sin((18 * Math.PI) / 180)]], color: "red", dash: true }] })],
    ["Unités et Pythagore", String.raw`Un terrain rectangulaire mesure \(120\) pi sur \(50\) pi. Quelle est la longueur, en mètres, d'un sentier en diagonale qui le traverse ?`,
      [String.raw`<b>Théorème de Pythagore.</b> La diagonale est l'hypoténuse d'un triangle rectangle de cathètes \(120\) et \(50\) : \[d^2=120^2+50^2\]`,
        String.raw`<b>Calculer :</b> \(d^2=14\,400+2500=16\,900\), donc \(d=\sqrt{16\,900}=130\) pi.`,
        String.raw`<b>Convertir.</b> \(1\) pi \(=12\) po et \(1\) po \(=2.54\) cm : \(130\times12=1560\) po, et \(1560\times2.54=3962.4\) cm.`,
        String.raw`<b>En mètres :</b> \(3962.4\div100\approx39.6\) m.`,
        String.raw`<b>Vérifier avec \(1\) pi \(=0.3048\) m :</b> \(130\times0.3048=39.624\) ✓.`],
      String.raw`\(130\) pi \(\approx39.6\) m`,
      fig({ w: 280, items: [{ poly: [[0, 0], [12, 0], [12, 5], [0, 5]], fill: "#dcfce7", color: "green" }, { seg: [[0, 0], [12, 5]], color: "red", width: 2 }, { text: "120 pi", at: [6, -0.9], bold: true, color: "green" }, { text: "50 pi", at: [12.5, 2.5], bold: true, color: "green", anchor: "start" }, { text: "d", at: [5.6, 3], bold: true, color: "red" }] })],
    ["Optimisation", String.raw`Un enclos rectangulaire adossé à une grange utilise \(36\) m de clôture sur trois côtés. Trouve les dimensions qui donnent la plus grande aire, et cette aire.`,
      [String.raw`<b>Mise en équation.</b> La clôture couvre deux largeurs et une longueur : \(2w+l=36\), donc \(l=36-2w\) et \(A=w(36-2w)\).`,
        String.raw`<b>Règle vue en 5.6.</b> Avec un mur, l'aire maximale est obtenue quand le côté le long du mur est le double de la largeur : \(l=2w\).`,
        String.raw`<b>Résoudre :</b> \(2w+2w=36\), donc \(4w=36\), \(w=9\) et \(l=18\).`,
        String.raw`<b>Aire :</b> \(9\times18=162\ \text{m}^2\).`,
        String.raw`<b>Vérifier des valeurs voisines :</b> \(w=8\) : \(8\times20=160\); \(w=10\) : \(10\times16=160\). Les deux sont plus petites ✓.`],
      String.raw`\(9\) m sur \(18\) m, aire de \(162\ \text{m}^2\)`],
    ["Volume et capacité", String.raw`Un réservoir d'eau cylindrique a un diamètre de \(1.2\) m et une hauteur de \(1.5\) m. Combien de litres contient-il ?`,
      [String.raw`<b>Formule.</b> \[V=\pi r^2h\]`,
        String.raw`<b>Le rayon</b> est la moitié du diamètre : \(r=1.2\div2=0.6\) m.`,
        String.raw`<b>Volume :</b> \(\pi(0.6)^2(1.5)=\pi(0.36)(1.5)=0.54\pi\approx1.696\ \text{m}^3\).`,
        String.raw`<b>Capacité.</b> \(1\ \text{m}^3=1000\) L, donc \(1.696\times1000\approx1696\) L.`],
      String.raw`environ \(1700\) L`,
      fig({ w: 160, items: cylinder(0.6, 1.5, { lr: "0.6 m", lh: "1.5 m" }) })],
    ["Aire totale avec un apothème", String.raw`Un toit conique a un rayon de \(4\) m et une hauteur de \(3\) m. Les bardeaux coûtent \(28\) dollars le mètre carré. Trouve le coût pour couvrir le toit de bardeaux (surface courbe seulement).`,
      [String.raw`<b>Formule.</b> Surface courbe d'un cône : \[A=\pi rs\]`,
        String.raw`<b>Apothème.</b> Le rayon, la hauteur et l'apothème forment un triangle rectangle : \(s=\sqrt{4^2+3^2}=\sqrt{25}=5\) m.`,
        String.raw`<b>Aire courbe :</b> \(\pi(4)(5)=20\pi\approx62.83\ \text{m}^2\).`,
        String.raw`<b>Coût :</b> \(62.83\times28\approx1759\) dollars.`],
      "environ 1759 dollars",
      fig({ w: 200, items: cone(4, 3, { lr: "4 m", lh: "3 m", ls: "s" }) })],
  ]),

  section("📌 Révision variée", String.raw`<p>Chaque question fait appel à plus d'une leçon.</p>`),

  practice([
    q("polygone + cercle", String.raw`Un polygone régulier à \(9\) côtés est tracé dans un cercle. Trouve chaque angle au centre (en degrés).`, num(40),
      "360° partagés également.", [String.raw`\(360\div9=40\).`], String.raw`\(40^\circ\)`),
    q("unités", String.raw`Une boîte mesure \(0.5\) m sur \(0.4\) m sur \(0.3\) m. Combien de litres contient-elle ?`, num(60),
      "Trouve les m³, puis 1 m³ = 1000 L.", [String.raw`\(0.5\times0.4\times0.3=0.06\ \text{m}^3\); \(0.06\times1000=60\).`], String.raw`\(60\) L`),
    q("Pythagore", String.raw`Une pyramide à base carrée a une base de \(16\) cm de côté et une hauteur de \(15\) cm. Trouve son apothème.`, num(17),
      "Cathètes : la hauteur et la moitié de la base.", [String.raw`\(\sqrt{15^2+8^2}=\sqrt{289}=17\).`], String.raw`\(17\) cm`),
    q("agrandissement", String.raw`Une voiture miniature est construite à l'échelle \(1:20\). La peinture de la maquette couvre \(150\ \text{cm}^2\). Quelle aire la peinture de la vraie voiture couvre-t-elle, en \(\text{m}^2\) ?`, num(6),
      "Facteur d'aire 20² = 400; convertis ensuite les cm² en m².", [String.raw`\(150\times400=60\,000\ \text{cm}^2\); \(60\,000\div10\,000=6\).`], String.raw`\(6\ \text{m}^2\)`),
    q("volume composé", String.raw`Un silo est un cylindre (rayon \(3\) m, hauteur \(10\) m) surmonté d'une demi-sphère. Trouve son volume au mètre cube près.`, num(339, 0.6),
      "Cylindre πr²h plus la moitié de ⁴⁄₃πr³.", [String.raw`\(90\pi+18\pi=108\pi\approx339.3\).`], String.raw`\(\approx339\ \text{m}^3\)`),
  ]),

  section("📌 Suis-je prêt ou prête pour l'évaluation ?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["5.1", "Je peux décrire comment différentes cultures ont développé des idées de géométrie et de mesure, et utiliser les méthodes d'Ératosthène et d'Archimède."],
      ["5.2", "Je peux trouver des angles inconnus à l'aide des propriétés des triangles, des polygones et des cercles, et analyser des motifs."],
      ["5.3", "Je peux convertir des longueurs, des aires, des volumes et des taux à l'intérieur des systèmes métrique et impérial et entre ces systèmes."],
      ["5.4", "Je peux trouver des côtés manquants, vérifier des angles droits et trouver des distances avec le théorème de Pythagore."],
      ["5.5", "Je peux trouver le périmètre de figures composées, prédire l'effet d'une modification des dimensions et minimiser un périmètre."],
      ["5.6", "Je peux trouver l'aire de figures composées, utiliser la règle du k² et maximiser l'aire pour un périmètre fixe."],
      ["5.7", "Je peux trouver le volume de prismes, de cylindres, de pyramides, de cônes, de sphères et de solides composés."],
      ["5.8", "Je peux trouver des aires totales à l'aide de développements et d'apothèmes."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("solidVolume", { init: "sphere" }),

  wrapUp({
    qas: [
      ["Comment devrais-je étudier pour cette évaluation ?", "Fais la révision variée sans tes notes. Pour chaque erreur, retourne à l'explorateur et à la série d'exercices de cette leçon, puis essaie les problèmes de niveau 3 des fiches pour tes deux leçons les plus faibles."],
      ["Quelles sont les erreurs les plus fréquentes ?", "Utiliser le diamètre au lieu du rayon, utiliser h au lieu de l'apothème, oublier le ⅓ des cônes et des pyramides, convertir des unités d'aire ou de volume avec le facteur de longueur, et additionner les cathètes au lieu des carrés."],
      ["Quelles formules dois-je mémoriser ?", "Le périmètre, la circonférence et les formules d'aire, a² + b² = c², V = Bh et ⅓Bh, et l'idée de développement. Une feuille de formules donne habituellement les formules de la sphère et du cône — vérifie auprès de ton enseignant ou de ton enseignante."],
      ["Comment vérifier qu'une réponse est raisonnable ?", "Estime d'abord (π ≈ 3, arrondis les dimensions), vérifie les unités (cm, cm², cm³) et assure-toi que l'hypoténuse est le plus long côté."],
      ["Comment ce chapitre est-il lié à la suite ?", "Pythagore devient la formule de la distance en géométrie analytique de 10e année; les triangles semblables et la trigonométrie prolongent le travail sur les angles; les facteurs d'échelle reviennent avec les figures semblables."],
    ],
    summary: [
      "Angles : triangle 180°, polygone (n − 2)·180°, inscrit = ½ au centre, demi-cercle 90°, tangente ⟂ rayon.",
      "Unités : au carré pour l'aire, au cube pour le volume; 1 po = 2.54 cm; 1 cm³ = 1 mL.",
      "a² + b² = c²; les apothèmes en découlent.",
      "Agrandissement de facteur k : P × k, A et AT × k², V × k³; le carré est le rectangle optimal.",
    ],
    next: "Fais l'évaluation du chapitre 5. Le chapitre 6 porte sur les données.",
  }),
];
