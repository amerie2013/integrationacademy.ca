// MHF4U-FR 4.1 — Mesure en radians : définition par la longueur d'arc, conversion degrés ↔ radians, longueur d'arc,
// aire d'un secteur et vitesse angulaire
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";
import { UC, SECTOR } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "4.1 Mesure en radians";
export const ID = lessonId(4, 1);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Mesure en radians",
    overview: S`Le degré est une division arbitraire du cercle. Le <strong>radian</strong>, lui, vient du cercle lui-même : un radian est l'angle au centre qui intercepte un arc de même longueur que le rayon. Comme la circonférence d'un cercle est \(2\pi r\), un tour complet mesure \(2\pi\) radians. À partir de maintenant, les fonctions trigonométriques prennent des radians comme valeurs d'entrée, et c'est ce qui rend les formules des mathématiques plus avancées si simples.`,
    goals: [
      "définir un radian à l'aide de la longueur d'arc;",
      "convertir des degrés en radians et inversement, de façon exacte et approximative;",
      "utiliser \\(s=r\\theta\\) pour trouver une longueur d'arc, un rayon ou un angle;",
      "utiliser \\(A=\\tfrac12r^2\\theta\\) pour l'aire d'un secteur;",
      "résoudre des problèmes de vitesse angulaire.",
    ],
    curriculum: "B1.1 (mesure en radians à partir de la longueur d'arc sur un cercle trigonométrique), B1.2 (convertir des radians en degrés et inversement)",
    prior: [
      [S`Circonférence d'un cercle de rayon 3?`, S`\(6\pi\).`],
      [S`Quelle fraction d'un tour complet représente \(90^\circ\)?`, S`\(\frac14\).`],
      [S`Simplifie \(\frac{150}{180}\).`, S`\(\frac56\).`],
    ],
    words: [
      ["Radian", "l'angle dont l'arc a la même longueur que le rayon", "\\(\\pi\\ \\text{rad}=180^\\circ\\)"],
      ["Longueur d'arc", "distance mesurée le long du cercle", "\\(s=r\\theta\\)"],
      ["Secteur", "région du cercle en forme de pointe de pizza", "\\(A=\\tfrac12r^2\\theta\\)"],
      ["Vitesse angulaire", "angle parcouru par unité de temps", "rad/s"],
    ],
  }),

  section("📌 De la longueur d'arc aux radians", S`
  <p>Pour un arc de longueur \(s\) sur un cercle de rayon \(r\), l'angle en radians est \(\theta=\dfrac sr\). Un radian est le rapport de deux longueurs, donc il n'a pas d'unité; écrire « rad » est facultatif.</p>
  ${plane(SECTOR(4, 1, "s = r quand θ = 1"), "Un radian : l'arc est aussi long que le rayon.")}
  ${table(["Degrés", "0°", "30°", "45°", "60°", "90°", "180°", "270°", "360°"], [
    ["Radians", "0", "π/6", "π/4", "π/3", "π/2", "π", "3π/2", "2π"],
    ["Approx.", "0", "0.52", "0.79", "1.05", "1.57", "3.14", "4.71", "6.28"],
  ])}
  ${keyIdea(S`Puisque \(\pi\) rad \(=180^\circ\) : pour passer des degrés aux radians, multiplie par \(\dfrac{\pi}{180}\); pour passer des radians aux degrés, multiplie par \(\dfrac{180}{\pi}\).`)}`),

  section("📌 Exploration", S`<p>Fais varier l'angle et le rayon. Garde le rayon fixe et double l'angle : l'arc et l'aire du secteur doublent aussi. Fixe ensuite l'angle et double le rayon : l'arc double, mais l'aire devient quatre fois plus grande.</p>`),

  widget("ibRadian", { init: [100, 6] }),

  section("📌 Utiliser les radians", S`
  <p>Les formules \(s=r\theta\) et \(A=\frac12r^2\theta\) ne fonctionnent que si \(\theta\) est en radians. Elles proviennent de la fraction \(\frac{\theta}{2\pi}\) de la circonférence complète et de l'aire complète.</p>
  ${plane(UC(120, "θ = 2π/3"), "Sur le cercle trigonométrique, r = 1, donc la longueur d'arc est égale à l'angle.")}
  ${watchOut([
    "Règle ta calculatrice en mode radian avant d'évaluer sin 2 ou cos 1.5.",
    "s = rθ exige θ en radians. Convertis d'abord.",
    "Un angle sans symbole de degré est en radians : sin 2 signifie 2 radians, et non 2°.",
    "π vaut environ 3.14, donc π/6 vaut environ 0.52; ce n'est pas 3.14/6 interprété comme une fraction de degrés.",
    "Donne des réponses exactes en fonction de π, sauf si on demande une valeur décimale.",
  ])}`),

  examples([
    ["Des degrés aux radians", S`Convertis \(150^\circ\) en radians, de façon exacte et au centième près.`,
      [S`<b>Règle.</b> \(180^\circ=\pi\) rad, donc on multiplie par \(\dfrac{\pi}{180}\). Les degrés s'annulent et il reste des radians.`,
        S`<b>Multiplier.</b> \(150\times\dfrac{\pi}{180}=\dfrac{150\pi}{180}\).`,
        S`<b>Simplifier.</b> Divise le numérateur et le dénominateur par 30 : \(\dfrac{5\pi}{6}\).`,
        S`<b>Valeur décimale.</b> \(\dfrac{5\pi}6\approx2.62\).`,
        S`<b>Vérification.</b> \(150^\circ\) est entre \(90^\circ\) et \(180^\circ\), et \(2.62\) est entre \(\frac\pi2\approx1.57\) et \(\pi\approx3.14\) ✓`],
      S`\(\dfrac{5\pi}6\approx2.62\)`,
      plane(UC(150, "5π/6"))],
    ["Des radians aux degrés", S`Convertis \(\dfrac{7\pi}4\) en degrés.`,
      [S`<b>Règle.</b> Multiplie par \(\dfrac{180}{\pi}\), de sorte que \(\pi\) s'annule.`,
        S`<b>Multiplier.</b> \(\dfrac{7\pi}4\times\dfrac{180}{\pi}=\dfrac{7\times180}4\).`,
        S`<b>Simplifier.</b> \(7\times45=315\).`,
        S`<b>Vérification.</b> \(\frac{7\pi}4=2\pi-\frac\pi4\), et \(360^\circ-45^\circ=315^\circ\) ✓`],
      S`\(315^\circ\)`,
      plane(UC(315, "7π/4"))],
    ["Une mesure en radians sans π", S`Convertis \(2.5\) radians en degrés, au dixième près.`,
      [S`<b>Règle.</b> La règle est la même, même sans \(\pi\) dans l'angle : multiplie par \(\dfrac{180}{\pi}\).`,
        S`<b>Multiplier.</b> \(2.5\times\dfrac{180}{\pi}=\dfrac{450}{\pi}\).`,
        S`<b>Valeur décimale.</b> \(\dfrac{450}\pi\approx143.2\).`,
        S`<b>Vérification.</b> Un radian vaut environ \(57.3^\circ\), et \(2.5\times57.3\approx143.3\) ✓`],
      S`\(143.2^\circ\)`,
      plane(UC(143.24, "2.5 rad"))],
    ["Longueur d'arc", S`Trouve la longueur de l'arc intercepté par l'angle \(\dfrac{3\pi}4\) dans un cercle de rayon 8 cm.`,
      [S`<b>Règle.</b> Avec \(\theta\) en radians, \(s=r\theta\).`,
        S`<b>Substituer.</b> \(s=8\times\dfrac{3\pi}4\).`,
        S`<b>Simplifier.</b> \(8\div4=2\), donc \(s=2\times3\pi=6\pi\approx18.85\) cm.`,
        S`<b>Vérification.</b> Le cercle entier mesure \(2\pi(8)=16\pi\). L'angle représente \(\frac38\) d'un tour, et \(\frac38\times16\pi=6\pi\) ✓`],
      S`\(6\pi\approx18.85\) cm`,
      plane(SECTOR(8, (3 * Math.PI) / 4))],
    ["Vitesse angulaire", S`Une roue tourne à 45 tours par minute. Trouve sa vitesse angulaire en radians par seconde.`,
      [S`<b>Des tours aux radians.</b> Un tour vaut \(2\pi\) rad : \(45\times2\pi=90\pi\) rad/min.`,
        S`<b>Des minutes aux secondes.</b> Une minute vaut 60 s, donc on divise par 60 : \(\dfrac{90\pi}{60}=\dfrac{3\pi}2\) rad/s.`,
        S`<b>Valeur décimale.</b> \(\dfrac{3\pi}2\approx4.71\).`,
        S`<b>Vérification.</b> 45 tours/min, c'est \(\frac34\) de tour par seconde, et \(\frac34\times2\pi=\frac{3\pi}2\) ✓`],
      S`\(\dfrac{3\pi}2\approx4.71\) rad/s`,
      plane(SECTOR(3, (3 * Math.PI) / 2, "angle parcouru en 1 s"))],
  ]),

  practice([
    q("degrés en radians", S`Convertis \(240^\circ\) en radians (au centième près).`, num(4.19, 0.01),
      "Multiplie par π/180.", [S`\(\frac{240\pi}{180}=\frac{4\pi}3\approx4.19\).`], S`\(4.19\)`),
    q("radians en degrés", S`Convertis \(\dfrac{5\pi}9\) en degrés.`, num(100),
      "Multiplie par 180/π.", [S`\(\frac{5\times180}{9}=100\).`], S`\(100\)`),
    q("longueur d'arc", S`Un cercle a un rayon de 10 m. Trouve la longueur d'arc pour \(\theta=1.2\) rad, en mètres.`, num(12),
      "s = rθ.", [S`\(10\times1.2=12\).`], S`\(12\)`),
    q("angle à partir de l'arc", S`Un arc de 15 cm de longueur est situé sur un cercle de rayon 6 cm. Trouve l'angle au centre en radians.`, num(2.5),
      "θ = s/r.", [S`\(\frac{15}6=2.5\).`], S`\(2.5\)`),
    q("vitesse angulaire", S`Un disque tourne à 30 tours par minute. Trouve sa vitesse angulaire en rad/s (au centième près).`, num(3.14, 0.01),
      "Un tour vaut 2π rad; divise par 60.", [S`\(\frac{30\times2\pi}{60}=\pi\).`], S`\(3.14\)`),
  ]),

  ...hard([
    ["Une horloge", S`La grande aiguille d'une horloge mesure 12 cm. Quelle distance sa pointe parcourt-elle en 25 minutes? Donne une réponse exacte et une valeur décimale.`,
      [S`En 60 minutes, l'aiguille tourne de \(2\pi\) rad, donc en 25 minutes elle tourne de \(\frac{25}{60}\times2\pi=\frac{5\pi}6\).`, S`\(s=r\theta=12\times\frac{5\pi}6=10\pi\).`],
      S`\(10\pi\approx31.4\) cm`,
      plane(SECTOR(12, (5 * Math.PI) / 6))],
    ["La rotation de la Terre", S`Le rayon de la Terre à l'équateur est d'environ 6378 km. Trouve la vitesse, en km/h, d'un point de l'équateur due à la rotation de la Terre.`,
      [S`La Terre tourne de \(2\pi\) rad en 24 h : \(\omega=\frac{2\pi}{24}=\frac{\pi}{12}\) rad/h.`, S`Arc parcouru par heure : \(v=r\omega=6378\times\frac{\pi}{12}\approx1670\) km/h.`],
      S`environ \(1670\) km/h`],
  ], [
    q("difficile", S`Une courroie relie deux poulies de rayons 5 cm et 15 cm. La petite poulie tourne de 6 rad. De combien de radians la grande poulie tourne-t-elle?`, num(2),
      "La courroie parcourt la même longueur d'arc sur chaque poulie.", [S`\(s=5\times6=30\); \(\theta=\frac{30}{15}=2\).`], S`\(2\)`),
    q("difficile", S`Un secteur a un rayon de 4 cm et un angle de 2 rad. Trouve son périmètre en cm.`, num(16),
      "Deux rayons plus l'arc.", [S`\(4+4+4\times2=16\).`], S`\(16\)`),
    q("difficile", S`Trouve l'angle entre les aiguilles d'une horloge à 3 h 30, en radians (au centième près).`, num(1.31, 0.01),
      "La petite aiguille a dépassé le 3.", [S`La petite aiguille est à \(105^\circ\), la grande à \(180^\circ\) : \(75^\circ=\frac{5\pi}{12}\approx1.31\).`], S`\(1.31\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi utiliser des radians?", "Un radian est construit à partir du cercle, donc les formules perdent leurs facteurs de conversion : s = rθ ne contient ni 180 ni 360. En calcul différentiel, c'est ce qui fait que le taux de variation de sin x est égal à cos x."],
      ["Un radian a-t-il une unité?", "Non. C'est le rapport de deux longueurs, l'arc sur le rayon, donc les unités de longueur s'annulent."],
      ["Quelle est la taille d'un radian?", "Environ 57.3°, car 180/π ≈ 57.3."],
      ["Pourquoi s = rθ ne fonctionne-t-elle pas avec des degrés?", "Elle provient de s = (θ/2π)(2πr), ce qui suppose qu'un tour complet vaut 2π."],
      ["Comment savoir quel mode utiliser?", "Si l'angle n'a pas de symbole de degré, considère qu'il est en radians et règle la calculatrice en mode radian."],
    ],
    summary: [
      "π rad = 180°.",
      "Degrés → radians : × π/180. Radians → degrés : × 180/π.",
      "Longueur d'arc s = rθ; aire d'un secteur A = ½r²θ, avec θ en radians.",
      "La vitesse angulaire est l'angle parcouru par unité de temps.",
    ],
    next: "En 4.2, tu trouveras les valeurs exactes des rapports trigonométriques des angles remarquables en radians.",
  }),
];
