// 1.1 Relations et fonctions — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch1/bank/em1_1.mjs)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P, sideways, circ, mapDoc, graph, PAR } from "./fig.mjs";

const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };

export const E = [
  tf(String.raw`$\{(1,2),(2,2),(3,2)\}$ est une fonction.`, true, "Chaque entrée a une seule sortie; partager une sortie est permis."),
  tf(String.raw`$\{(4,1),(4,-1),(5,0)\}$ est une fonction.`, false, "L'entrée 4 a deux sorties."),
  mc("Quel test permet de vérifier si un graphique représente une fonction?", "le test de la droite verticale", ["le test de la droite horizontale", "le test de la pente", "le test de l'ordonnée à l'origine"], "Une droite verticale correspond à une entrée."),
  num(String.raw`Combien d'éléments le domaine de $\{(-5,0),(-2,8),(3,8),(9,1)\}$ contient-il?`, 4, "Entrées : −5, −2, 3, 9."),
  num(String.raw`Combien d'éléments l'image de $\{(-5,0),(-2,8),(3,8),(9,1)\}$ contient-elle?`, 3, "Sorties : 0, 8, 1 (8 compté une seule fois)."),
  mc("Quelle équation définit une fonction?", String.raw`$y=7x-2$`, [String.raw`$x=y^2$`, String.raw`$x^2+y^2=1$`, String.raw`$x=4$`], "Seule la droite donne un seul y pour chaque x."),
  tf(String.raw`La droite verticale $x=-3$ est une fonction.`, false, "Une entrée, une infinité de sorties."),
  tf(String.raw`La droite horizontale $y=-3$ est une fonction.`, true, "Chaque entrée donne −3."),
  mc("Classe la relation du diagramme sagittal.", "une fonction plusieurs à un", ["une fonction un à un", "ce n'est pas une fonction", "impossible à déterminer"], "Chaque entrée a une flèche; 2 et 4 partagent la sortie 5.", mapDoc([[2, 5], [4, 5], [6, 7]])),
  mc("Ce cercle est-il le graphique d'une fonction?", "non — certaines droites verticales le coupent deux fois", ["oui — c'est une courbe fermée", "oui — il réussit le test de la droite horizontale", "non — il n'a pas d'ordonnée à l'origine"], "Un cercle échoue au test de la droite verticale.", planeDoc({ view: V6, curves: circ(3, 1, -1) })),
  num(String.raw`Combien de sorties l'entrée $3$ a-t-elle dans $\{(3,0),(3,6),(5,6)\}$?`, 2, "Les sorties 0 et 6."),
  mc("Quelle fonction est un à un?", String.raw`$y=2x+1$`, [String.raw`$y=x^2$`, String.raw`$y=|x|$`, String.raw`$y=5$`], "Seule la droite oblique donne toujours des sorties différentes pour des entrées différentes."),
  tf("Une fonction peut avoir deux entrées différentes ayant la même sortie.", true, "C'est une fonction plusieurs à un."),
  fill("L'ensemble de toutes les entrées d'une relation s'appelle le ___.", ["domaine", "le domaine", "domain"], "Domaine = entrées."),
  fill("L'ensemble de toutes les sorties d'une relation s'appelle l'___.", ["image", "l'image", "range"], "Image = sorties."),
  num(String.raw`Pour $x=y^2$, combien de valeurs de y correspondent à $x=25$?`, 2, "y = 5 ou y = −5."),
  mc("Cette parabole est-elle le graphique d'une fonction?", "oui, plusieurs à un", ["oui, un à un", "non", "seulement pour x > 0"], "Les droites verticales la coupent une fois; des points symétriques partagent des sorties.", graph((x) => -x * x + 2, V6, [P(-1, 1, false), P(1, 1, false)])),
  tf("Toute fonction est une relation.", true, "Une fonction est un type particulier de relation."),
  tf("Toute relation est une fonction.", false, "Une relation peut donner deux sorties à une même entrée."),
  mc("« Chaque voiture → sa plaque d'immatriculation » est…", "une fonction un à un", ["une fonction plusieurs à un", "ce n'est pas une fonction", "une droite verticale"], "Chaque voiture a une seule plaque, et deux voitures n'ont jamais la même."),
];

export const M = [
  num(String.raw`Pour $x^2+y^2=100$, quelle est la valeur positive de y lorsque $x=6$?`, 8, "y² = 64."),
  ms("Quelles équations définissent y comme une fonction de x? Choisis toutes les bonnes réponses.", [String.raw`$y=3-x^2$`, String.raw`$x=y^2+1$`, String.raw`$y=|x+2|$`, String.raw`$x^2+y^2=9$`, String.raw`$2x+5y=10$`], [0, 2, 4], "Les autres donnent un ± lorsqu'on isole y."),
  mc("Cette courbe est-elle le graphique d'une fonction?", "non — c'est une parabole couchée", ["oui — chaque x a une sortie", "oui — c'est une parabole", "non — elle n'a pas de sommet"], "x = 0 la coupe deux fois.", planeDoc({ view: V6, curves: sideways(-1, 2) })),
  num(String.raw`Combien de points la droite $x=3$ a-t-elle en commun avec $x=y^2-1$?`, 2, "y² = 4."),
  mc(String.raw`Pour quelles valeurs de $a$ l'ensemble $\{(0,a),(1,3),(a,5)\}$ N'est-il PAS une fonction?`, "a = 0 ou a = 1", ["a = 3 ou a = 5", "seulement a = 0", "toutes les valeurs de a"], "a = 0 donne (0, 0) et (0, 5); a = 1 donne (1, 3) et (1, 5)."),
  tf(String.raw`Le graphique de $y=\frac1x$ réussit le test de la droite verticale.`, true, "Chaque x ≠ 0 a une seule sortie.", planeDoc({ view: V6, curves: [PAR.recip] })),
  mc(String.raw`$x=|y|$ est-elle une fonction?`, "non — x = 2 donne y = 2 ou y = −2", ["oui — la valeur absolue est une fonction", "oui — c'est une forme en V", "seulement pour y > 0"], "Isole y : y = ±x."),
  num(String.raw`On forme les couples $(t,t^2)$ pour $t=-2,-1,0,1,2$. Combien d'éléments l'image contient-elle?`, 3, "Sorties 4, 1, 0."),
  ms("Lesquelles sont des fonctions? Choisis toutes les bonnes réponses.", ["chaque élève → sa classe-foyer", "chaque enseignant → un élève à qui il enseigne", "chaque pays → sa capitale", "chaque nombre positif → ses racines carrées"], [0, 2], "Un enseignant enseigne à plusieurs élèves; un nombre positif a deux racines carrées."),
  mc(String.raw`Comment peut-on transformer $x^2+y^2=49$ en fonction?`, String.raw`garder seulement $y=\sqrt{49-x^2}$`, [String.raw`remplacer $y^2$ par $y$`, "enlever l'axe des x", String.raw`garder seulement $x\ge0$`], "Prendre une moitié du cercle (supérieure ou inférieure) donne une seule sortie par entrée."),
  num(String.raw`Pour $x=y^2-6y$, combien de valeurs de y correspondent à $x=-9$?`, 1, "y² − 6y + 9 = 0 → y = 3 (une racine double)."),
  tf("Si un graphique échoue au test de la droite horizontale, ce n'est pas une fonction.", false, "C'est quand même une fonction — simplement pas un à un."),
  mc(String.raw`La table donne $x$ : $1,2,3,2$ et $y$ : $4,5,6,5$. Est-ce une fonction?`, "oui — (2, 5) est simplement écrit deux fois", ["non — x = 2 est répété", "non — les sorties augmentent", "oui — mais seulement un à un"], "Un couple répété est le même couple; l'entrée 2 a toujours une seule sortie."),
  num(String.raw`Combien de couples vérifient $y^2=x$ avec $x\in\{0,1,4\}$?`, 5, "(0, 0), (1, ±1), (4, ±2)."),
  mc("Comment classerais-tu le graphique?", "une fonction plusieurs à un", ["une fonction un à un", "ce n'est pas une fonction", "une relation sans image"], "Les droites verticales le coupent une fois; x = −1 et x = 1 partagent une sortie.", graph((x) => 2 * Math.abs(x) - 3, V6, [P(-1, -1, false), P(1, -1, false)])),
  tf(String.raw`$y=x^3$ est un à un.`, true, "Des entrées différentes ont des cubes différents."),
  num(String.raw`Pour $x^2+(y-1)^2=25$, quelle est la plus grande valeur de y lorsque $x=3$?`, 5, "(y − 1)² = 16 → y = 5 ou −3."),
  mc(String.raw`Quelle droite verticale coupe $x=(y+1)^2+2$ exactement une fois?`, String.raw`$x=2$`, [String.raw`$x=-1$`, String.raw`$x=0$`, String.raw`$x=3$`], "Seulement au sommet (2, −1)."),
  ms("Quels graphiques réussissent le test de la droite verticale? Choisis toutes les bonnes réponses.", ["une droite horizontale", "une droite verticale", "un cercle", "une parabole ouverte vers le haut", "une parabole ouverte vers la droite"], [0, 3], "Les trois autres ont des entrées avec deux sorties."),
  mc("Une station météo enregistre la température à chaque moment de la journée. La relation moment → température est-elle une fonction?", "oui — une seule température à chaque instant", ["non — les températures se répètent", "non — le temps est continu", "seulement si les températures augmentent"], "Les sorties répétées sont permises."),
];
