// MTH1W-FR 5.1 — La géométrie et la mesure à travers l'histoire (format autonome)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { fig, rightTri } from "../mth1w-ch5/figs5.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "5.1 La géométrie et la mesure à travers l'histoire";
export const ID = lessonId(5, 1);

export const blocks = () => [
  intro({
    icon: "🏛️",
    title: "La géométrie et la mesure à travers l'histoire",
    overview: String.raw`Le mot géométrie signifie « mesure de la terre ». Bien avant l'algèbre, les peuples d'Égypte, de Mésopotamie, d'Inde, de Chine, de Grèce et des Amériques devaient tracer des champs, construire des murs à angle droit, partager la terre équitablement et suivre le ciel. Dans cette leçon, tu découvriras les idées qu'ils ont trouvées — dont plusieurs te servent encore chaque jour — et tu vérifieras leurs méthodes avec les mathématiques modernes.`,
    goals: [
      "décrire comment plusieurs cultures ont développé des idées de géométrie et de mesure, et pourquoi;",
      "expliquer comment une corde à nœuds peut former un angle droit (3-4-5) et le vérifier avec la relation de Pythagore;",
      "convertir un nombre babylonien en base 60 en nombre décimal;",
      "suivre la méthode d'Ératosthène pour estimer la circonférence de la Terre;",
      "expliquer comment Archimède a encadré π entre deux polygones et comparer des valeurs historiques de π.",
    ],
    curriculum: "E1.1 (relations géométriques et de mesure développées dans diverses cultures)",
    prior: [
      [String.raw`Évalue \(3^2+4^2\).`, String.raw`\(9+16=25=5^2\).`],
      [String.raw`Quelle fraction d'un tour complet représente \(36^\circ\) ?`, String.raw`\(\frac{36}{360}=\frac{1}{10}\).`],
      [String.raw`Écris \(\frac{1}{4}\) sous forme décimale.`, String.raw`\(0.25\).`],
    ],
    words: [
      ["Circonférence", "la distance autour d'un cercle", "\\(C=\\pi d\\)"],
      ["π (pi)", "circonférence ÷ diamètre, la même pour tous les cercles", "\\(\\pi\\approx3.14159\\)"],
      ["Base 60 (sexagésimale)", "valeurs de position 1, 1/60, 1/3600, …", "60 min dans une heure"],
      ["Approximation", "une valeur proche de la vraie valeur, mais pas exactement égale", "\\(\\tfrac{22}{7}\\approx\\pi\\)"],
      ["Conjecture", "un énoncé qu'on croit vrai, mais qui n'est pas encore démontré", "« tous les triangles rectangles… »"],
    ],
  }),

  section("📌 Des angles droits avec une corde (Égypte, Inde, Chine)", String.raw`
  <p>Les arpenteurs égyptiens retraçaient les champs après chaque crue du Nil. Une corde comptant <strong>12 espaces égaux</strong> marqués par des nœuds, tendue en un triangle dont les côtés mesurent \(3\), \(4\) et \(5\) espaces, donne un angle droit au coin situé entre les côtés de \(3\) et de \(4\). Les manuels des bâtisseurs indiens (les <em>Śulba Sūtras</em>, pour tracer les autels du feu) et le <em>Zhoubi Suanjing</em> chinois (la règle du « gougu ») décrivent la même relation. Des scribes babyloniens ont dressé une liste de triplets de nombres entiers sur une tablette d'argile (Plimpton 322) vers 1800 av. J.-C., plus de mille ans avant Pythagore.</p>
  ${fig({ w: 300, items: rightTri(4, 3, { la: "4 espaces", lb: "3 espaces", lc: "5 espaces", fill: "amber" }) }, "12 espaces à nœuds tendus en 3, 4, 5 forment un angle droit.")}
  ${keyIdea(String.raw`Si les côtés vérifient \(a^2+b^2=c^2\), l'angle entre \(a\) et \(b\) est un angle droit. Tout multiple de \(3, 4, 5\) (comme \(6, 8, 10\)) fonctionne aussi.`)}`),

  section("📌 La base 60 et le cercle (Mésopotamie)", String.raw`
  <p>Les mathématiciens babyloniens écrivaient les nombres en <strong>base 60</strong>. C'est pourquoi une heure compte \(60\) minutes, une minute compte \(60\) secondes et un cercle mesure \(360^\circ=6\times60\). La tablette YBC 7289 montre un carré dont la diagonale porte l'inscription \(1;24,51,10\), ce qui signifie</p>
  \[1+\frac{24}{60}+\frac{51}{60^2}+\frac{10}{60^3}\approx1.414213,\]
  <p>une approximation de \(\sqrt2\approx1.414214\) exacte à environ six décimales — il y a près de 4000 ans.</p>
  ${table(["Position", "Valeur", "Comme en décimal"], [["unités", "1", "unités"], ["première position après ;", "\\(\\frac{1}{60}\\)", "dixièmes"], ["deuxième position", "\\(\\frac{1}{3600}\\)", "centièmes"]])}`),

  section("📌 Mesurer la Terre (Grèce, vers 240 av. J.-C.)", String.raw`
  <p>Ératosthène savait qu'à midi, le jour du solstice d'été, le Soleil éclairait directement le fond d'un puits à Syène, tandis qu'à Alexandrie, environ \(5000\) stades plus au nord, un bâton vertical projetait une ombre montrant que le Soleil était à \(7.2^\circ\) de la verticale. Comme les rayons du Soleil sont parallèles, \(7.2^\circ\) est aussi l'angle, au centre de la Terre, entre les deux villes.</p>
  ${keyIdea(String.raw`\(\dfrac{\text{angle}}{360^\circ}=\dfrac{\text{longueur de l'arc}}{\text{circonférence}}\). Comme \(7.2^\circ\) représente \(\tfrac{1}{50}\) de \(360^\circ\), la circonférence est \(50\times5000=250\,000\) stades.`)}
  <p>Les historiens ne connaissent pas avec certitude la longueur de son stade; avec environ \(160\) m, on obtient \(40\,000\) km — très proche de la valeur moderne de \(40\,075\) km à l'équateur.</p>`),

  section("📌 Cerner π (Égypte, Grèce, Chine, Inde)", String.raw`
  <p>Toutes les cultures qui construisaient des objets ronds avaient besoin du rapport \(\pi=\dfrac{C}{d}\). Le papyrus Rhind égyptien (vers 1650 av. J.-C.) trouve l'aire d'un cercle en élevant au carré les \(\tfrac89\) de son diamètre, ce qui revient à \(\pi\approx3.16\). Archimède (Grèce, vers 250 av. J.-C.) a tracé des polygones réguliers à l'intérieur et à l'extérieur d'un cercle : le périmètre du cercle doit se situer entre les leurs. Avec \(96\) côtés, il a démontré que \(3\tfrac{10}{71}<\pi<3\tfrac17\).</p>
  ${table(["Qui", "Quand", "Valeur de π", "Décimal"], [
    ["Papyrus Rhind (Égypte)", "≈ 1650 av. J.-C.", "\\(\\tfrac{256}{81}\\)", "3.1605"],
    ["Archimède (Grèce)", "≈ 250 av. J.-C.", "entre \\(\\tfrac{223}{71}\\) et \\(\\tfrac{22}{7}\\)", "3.1408 à 3.1429"],
    ["Zu Chongzhi (Chine)", "≈ 480 apr. J.-C.", "\\(\\tfrac{355}{113}\\)", "3.1415929"],
    ["Aryabhata (Inde)", "499 apr. J.-C.", "\\(\\tfrac{62\\,832}{20\\,000}\\)", "3.1416"],
  ])}
  <p>Utilise l'explorateur : augmente le nombre de côtés et regarde les deux polygones resserrer le cercle.</p>`),

  widget("piPolygon"),

  section("📌 La mesure à travers le monde", String.raw`
  <p>Les premières unités de longueur venaient du corps : la <strong>coudée</strong> égyptienne (du coude au bout des doigts), la main, le pied, le pas. Elles variaient d'une personne à l'autre, alors les souverains conservaient des règles officielles. Le <strong>système métrique</strong> (France, années 1790) a basé les unités sur les puissances de dix, et aujourd'hui le mètre est défini à partir de la vitesse de la lumière : il est donc le même partout. Plusieurs peuples autochtones de l'île de la Tortue utilisaient eux aussi des mesures basées sur le corps et la nature, et des structures comme le tipi (un cône de perches) et le dôme de blocs de neige montrent une géométrie pratique : des formes solides construites avec des matériaux locaux.</p>
  ${watchOut([
    "Une valeur historique de π est une approximation; π lui-même ne se termine jamais et ne se répète jamais.",
    "Les positions en base 60 valent 1/60, 1/3600, … — pas des dixièmes et des centièmes.",
    "L'espacement égal des nœuds est important : la corde donne un angle droit seulement si les espaces sont égaux.",
  ])}`),

  examples([
    ["La corde à nœuds", String.raw`Une corde compte \(24\) espaces égaux. Peut-elle former un angle droit, et avec quelles longueurs de côtés ?`,
      [String.raw`<b>Règle (réciproque du théorème de Pythagore).</b> \[\text{Si }a^2+b^2=c^2,\ \text{le triangle a un angle droit opposé à }c.\] Les tendeurs de corde égyptiens utilisaient le triangle \(3\)-\(4\)-\(5\).`,
        String.raw`<b>Agrandir le triangle \(3\)-\(4\)-\(5\).</b> Il utilise \(3+4+5=12\) espaces. La corde compte \(24\) espaces et \(24\div12=2\), alors on double chaque côté : \(6\), \(8\), \(10\).`,
        String.raw`<b>Vérifier le périmètre :</b> \(6+8+10=24\) espaces ✓.`,
        String.raw`<b>Vérifier l'angle droit :</b> \(6^2+8^2=36+64=100\) et \(10^2=100\) ✓. L'angle droit est opposé au plus long côté; il se trouve donc entre les côtés de \(6\) et de \(8\).`],
      String.raw`oui : des côtés de \(6\), \(8\) et \(10\) espaces; l'angle droit est entre les côtés de \(6\) et de \(8\)`,
      fig({ w: 280, items: rightTri(8, 6, { la: "8", lb: "6", lc: "10", fill: "amber" }) })],
    ["Le cercle égyptien", String.raw`Le papyrus Rhind trouve l'aire d'un cercle de diamètre \(9\) en traçant un carré de côté \(\tfrac89\times9\). Compare-la avec \(\pi r^2\).`,
      [String.raw`<b>Règle égyptienne.</b> Côté du carré \(=\tfrac89\times9=8\). Aire d'un carré \(=s^2=8^2=64\).`,
        String.raw`<b>Formule moderne.</b> \[A=\pi r^2\] Le rayon est la moitié du diamètre : \(r=9\div2=4.5\). Donc \(A=\pi(4.5)^2=20.25\pi\approx63.62\).`,
        String.raw`<b>Comparer.</b> Différence \(\approx64-63.62=0.38\). En pourcentage de l'aire réelle : \(\frac{0.38}{63.62}\times100\%\approx0.6\%\).`,
        String.raw`<b>Conclusion.</b> Le carré égyptien n'est trop grand que d'environ \(0.6\%\), ce qui est très précis pour l'an 1650 av. J.-C. environ.`],
      String.raw`\(64\) comparé à \(\approx63.62\) : très proche`,
      fig({ w: 220, items: [{ circle: [0, 0, 4.5], fill: "#dbeafe", color: "blue" }, { poly: [[-4, -4], [4, -4], [4, 4], [-4, 4]], fill: "none", color: "amber", width: 2 }, { seg: [[-4.5, 0], [4.5, 0]], color: "blue", dash: true }, { text: "d = 9", at: [0, 0.6], bold: true, color: "blue" }, { text: "côté 8", at: [0, -4.9], bold: true, color: "amber" }] })],
    ["Un nombre babylonien", String.raw`Convertis le nombre en base 60 \(2;15\) (deux unités et \(15\) soixantièmes) en nombre décimal. Puis convertis \(2.15\) heures en heures et minutes.`,
      [String.raw`<b>Valeurs de position en base 60.</b> Après le point-virgule, chaque position vaut \(\frac1{60}\) de la précédente, tout comme chaque position décimale vaut \(\frac1{10}\) de la précédente.`,
        String.raw`<b>Convertir :</b> \(2;15=2+\frac{15}{60}=2+0.25=2.25\).`,
        String.raw`<b>Des heures aux minutes.</b> \(1\) h \(=60\) min, alors on multiplie la partie décimale par 60 : \(0.15\) h \(=0.15\times60=9\) min.`,
        String.raw`<b>Résultat :</b> \(2.15\) h \(=2\) h \(9\) min, et <i>non</i> \(2\) h \(15\) min. Vérification : \(\frac{9}{60}=0.15\) ✓.`],
      String.raw`\(2;15=2.25\); \(2.15\) h \(=2\) h \(9\) min`],
    ["La méthode d'Ératosthène", String.raw`Deux villes sont à \(600\) km l'une de l'autre, sur un axe nord–sud. Au même moment, le Soleil est \(5.4^\circ\) plus loin de la verticale dans la ville du nord. Estime la circonférence de la Terre.`,
      [String.raw`<b>Idée clé.</b> Les rayons du Soleil sont parallèles, donc la différence de \(5.4^\circ\) est aussi l'angle, au centre de la Terre, entre les deux villes.`,
        String.raw`<b>Proportion.</b> Un arc représente la même fraction de la circonférence que son angle représente de \(360^\circ\) : \[\frac{\text{arc}}{C}=\frac{\text{angle}}{360^\circ}\]`,
        String.raw`<b>Fraction d'un tour complet :</b> \(\frac{5.4}{360}=0.015\).`,
        String.raw`<b>Résoudre :</b> \(600=0.015\times C\), donc \(C=\frac{600}{0.015}=40\,000\) km.`,
        String.raw`<b>Vérification :</b> \(0.015\times40\,000=600\) ✓. (La valeur moderne est d'environ \(40\,075\) km.)`],
      String.raw`environ \(40\,000\) km`,
      fig({ w: 220, items: [{ circle: [0, 0, 5], fill: "#dbeafe", color: "blue" }, { seg: [[0, 0], [0, 5]], color: "red" }, { seg: [[0, 0], [1.3, 4.83]], color: "red" }, { text: "5.4°", at: [0.45, 1.6], color: "red", bold: true, size: 12 }, { text: "600 km", at: [1.9, 5.6], color: "amber", bold: true, size: 12 }] })],
    ["Comparer des valeurs de π", String.raw`Écris \(\tfrac{22}{7}\) et \(\tfrac{355}{113}\) sous forme décimale. Laquelle est la plus proche de \(\pi=3.14159265\ldots\) ?`,
      [String.raw`<b>Diviser :</b> \(22\div7\approx3.142857\) et \(355\div113\approx3.1415929\).`,
        String.raw`<b>Erreur de \(\tfrac{22}{7}\) :</b> \(3.142857-3.141593\approx0.00126\).`,
        String.raw`<b>Erreur de \(\tfrac{355}{113}\) :</b> \(3.1415929-3.1415927\approx0.0000003\).`,
        String.raw`<b>Comparer les erreurs :</b> \(0.00126\div0.0000003\) vaut environ \(4000\), donc \(\tfrac{355}{113}\) est environ \(4000\) fois plus proche.`],
      String.raw`\(\tfrac{355}{113}\) est environ \(4000\) fois plus proche`],
  ]),

  practice([
    q("corde", String.raw`Une corde à nœuds également espacés est tendue en un triangle dont les côtés mesurent \(5\), \(12\) et \(13\) espaces. Y a-t-il un angle droit ?`, choice(["oui", "non"], 0),
      String.raw`Compare \(5^2+12^2\) avec \(13^2\).`, [String.raw`\(25+144=169=13^2\).`], "oui"),
    q("Égypte", String.raw`Avec la règle égyptienne (carré des \(\tfrac89\) du diamètre), quelle aire le papyrus donne-t-il pour un cercle de diamètre \(18\) ?`, num(256),
      String.raw`Côté du carré = \(\tfrac89\times18\).`, [String.raw`\(\tfrac89\times18=16\); \(16^2=256\).`], String.raw`\(256\)`),
    q("base 60", String.raw`Écris le nombre babylonien \(1;30\) (une unité et \(30\) soixantièmes) sous forme décimale.`, num(1.5),
      String.raw`\(30\) soixantièmes \(=\frac{30}{60}\).`, [String.raw`\(1+\frac{30}{60}=1.5\).`], String.raw`\(1.5\)`),
    q("Ératosthène", String.raw`L'angle du Soleil diffère de \(9^\circ\) entre deux endroits situés à \(1000\) km l'un de l'autre sur le même méridien. Quelle circonférence cela donne-t-il (km) ?`, num(40000),
      String.raw`\(9^\circ\) représente quelle fraction de \(360^\circ\) ?`, [String.raw`\(\frac{9}{360}=\frac1{40}\); \(40\times1000=40\,000\).`], String.raw`\(40\,000\) km`),
    q("Archimède", String.raw`La borne inférieure de π trouvée par Archimède était \(\tfrac{223}{71}\). Écris-la sous forme décimale à \(4\) décimales près.`, num(3.1408, 0.00006),
      "Divise 223 par 71.", [String.raw`\(223\div71\approx3.14085\).`], String.raw`\(3.1408\)`),
  ]),

  wrapUp({
    qas: [
      ["Pythagore a-t-il découvert le théorème de Pythagore ?", "Non. Des mathématiciens babyloniens, indiens et chinois utilisaient cette relation des siècles plus tôt. On attribue à l'école grecque de Pythagore une des premières démonstrations générales."],
      ["Pourquoi utilise-t-on encore 360° et 60 minutes ?", "Ils viennent de l'astronomie babylonienne en base 60. 60 et 360 ont beaucoup de facteurs (2, 3, 4, 5, 6, 10, 12, …), ce qui rend faciles les fractions d'un tour ou d'une heure."],
      ["Comment Ératosthène a-t-il pu mesurer la Terre sans en faire le tour ?", "Il a utilisé un angle et une distance. L'angle entre les villes, en fraction de 360°, est égal à leur distance en fraction de la circonférence entière."],
      ["Pourquoi ne peut-on pas écrire π exactement sous forme de fraction ?", "π est irrationnel : ses décimales ne se terminent jamais et ne se répètent jamais. Des fractions comme 22/7 et 355/113 ne sont que des approximations."],
      ["Pourquoi le monde a-t-il adopté le système métrique ?", "Les unités basées sur le corps variaient. Les unités métriques sont définies avec précision et se convertissent par puissances de dix, donc les scientifiques et les commerçants obtiennent partout les mêmes résultats."],
    ],
    summary: [
      "Plusieurs cultures utilisaient a² + b² = c² (3-4-5) pour former des angles droits.",
      "La base 60 survit dans les 60 minutes et les 360°.",
      "Ératosthène : angle/360° = arc/circonférence.",
      "Archimède a encadré π entre des polygones intérieurs et extérieurs; π ≈ 3.14159.",
    ],
    next: "En 5.2, tu utiliseras les propriétés des triangles et des cercles pour analyser et créer des motifs.",
  }),
];
