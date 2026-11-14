// MCV4U-FR chapitre 6 — devoirs : 12 questions chacun — Connaissance et compréhension 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10, Niveau difficile 11-12. [[clé|légende]] est remplacé par une figure (SVG).
// Miroir de ../../mcv4u-ch6/asg/assignments.mjs (mêmes figures; les mots de la figure « r » de 6.4 sont en français).
import { vdoc, pol, brg } from "../../mcv4u-ch6/vecfig.mjs";
import { asgId } from "../../mcv4u-fr/common.mjs";
import { TITLE as T1 } from "../l6_1.mjs";
import { TITLE as T2 } from "../l6_2.mjs";
import { TITLE as T3 } from "../l6_3.mjs";
import { TITLE as T4 } from "../l6_4.mjs";
import { TITLE as T5 } from "../l6_5.mjs";

const S = String.raw;
const dv = (t) => `Devoir ${t.replace(/^(\d\.\d) /, "$1 — ")}`;
const RAD = Math.PI / 180;
const grid = (view) => vdoc({ view, step: 1 });
const HEX = Array.from({ length: 6 }, (_, i) => pol(3, i * 60));

export const ASSIGNMENTS = [
  { code: "6.1", id: asgId(6, 1), title: dv(T1), figs: {
      c: vdoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, grid: false, north: [0, 0, 3.8], arrows: [{ from: [0, 0], to: brg(3.4, 75), vl: "p" }, { from: [0, 0], to: brg(3.4, 160), vl: "q", color: "blue" }, { from: [0, 0], to: brg(3.4, 250), vl: "r", color: "green" }, { from: [0, 0], to: brg(3.4, 320), vl: "s", color: "red" }] }),
      h: vdoc({ view: { xmin: -3.8, xmax: 3.8, ymin: -3.3, ymax: 3.3 }, grid: false, axes: false, segs: [{ pts: [...HEX, HEX[0]], color: "gray" }, { pts: [HEX[0], HEX[3]], color: "gray", dash: true }, { pts: [HEX[1], HEX[4]], color: "gray", dash: true }, { pts: [HEX[2], HEX[5]], color: "gray", dash: true }], points: ["A", "B", "C", "D", "E", "F"].map((t, i) => ({ x: HEX[i][0], y: HEX[i][1], label: t, dx: i === 0 ? 8 : i === 3 ? -16 : 2, dy: i < 3 ? -8 : 18 })).concat([{ x: 0, y: 0, label: "O", dx: 6, dy: 16 }]) }),
      g: grid({ xmin: -1, xmax: 7, ymin: -1, ymax: 6 }) }, lines: [
    "Connaissance et compréhension",
    S`1. Classe chaque grandeur comme scalaire ou vectorielle : un sac de 3 kg; une poussée de 15 N vers l'est; une baisse de température de 4 °C; une vitesse de 22 m/s selon un cap de \(310^\circ\); une marche de 2 km plein sud.`,
    S`2. Donne le cap (relèvement vrai) et le relèvement par quadrant de chaque vecteur du schéma. [[c|Quatre vecteurs issus d'un même point]]`,
    S`3. Trouve la norme du vecteur allant de \(P(-5,2)\) à \(Q(7,-3)\), ainsi que son cap (le nord est vers le haut).`,
    "Habiletés de la pensée",
    S`4. Dans l'hexagone régulier \(ABCDEF\) de centre \(O\), énumère tous les vecteurs reliant deux points nommés qui sont égaux à \(\overrightarrow{OB}\), et tous ceux qui lui sont opposés. [[h|Hexagone régulier de centre O]]`,
    S`5. Un vecteur de norme 17 a une composante nord de \(-8\). Trouve tous les caps possibles de ce vecteur.`,
    "Communication",
    "6. Explique pourquoi deux flèches tracées à des endroits différents peuvent représenter le même vecteur, et donne un exemple de la vie courante.",
    "7. Explique comment convertir n'importe quel cap en relèvement par quadrant, et illustre ta méthode avec 035°, 128°, 199° et 341°.",
    "Mise en application",
    S`8. À l'échelle 1 cm : 25 km, trace sur la grille un déplacement de 125 km selon un cap de \(215^\circ\). [[g|Grille pour ton schéma à l'échelle]]`,
    S`9. Un traversier va d'un quai à une île située à 6 km à l'est et à 2.5 km au nord du quai. Trouve la longueur et le cap du trajet, ainsi que le cap du trajet de retour.`,
    S`10. L'extrémité d'une grande aiguille de 12 cm se déplace de 12 h 00 à 12 h 45. Trouve la norme et le cap de son déplacement (12 est au nord).`,
    "Niveau difficile",
    S`11. Un cube a des arêtes de longueur 3. Trouve la norme d'un vecteur diagonale de face et d'un vecteur diagonale de l'espace, puis compte combien de vecteurs diagonales de l'espace (dans les deux sens) le cube possède.`,
    S`12. Les points \(A\) et \(B\) sont à 8 km l'un de l'autre, \(B\) étant selon un cap de \(062^\circ\) à partir de \(A\). Le point \(C\) est à 8 km de \(B\) selon un cap de \(182^\circ\). Montre que le triangle \(ABC\) est équilatéral et trouve le cap de \(C\) à partir de \(A\).`,
  ] },
  { code: "6.2", id: asgId(6, 2), title: dv(T2), figs: {
      p: vdoc({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [5, 0], [6.6, 3.2], [1.6, 3.2], [0, 0]], color: "gray" }, { pts: [[0, 0], [6.6, 3.2]], color: "gray", dash: true }, { pts: [[5, 0], [1.6, 3.2]], color: "gray", dash: true }], points: [{ x: 0, y: 0, label: "P", dx: -14, dy: 14 }, { x: 5, y: 0, label: "Q", dx: 6, dy: 16 }, { x: 6.6, y: 3.2, label: "R", dx: 8, dy: -4 }, { x: 1.6, y: 3.2, label: "S", dx: -16, dy: -4 }, { x: 3.3, y: 1.6, label: "M", dx: -4, dy: -10 }] }),
      g: grid({ xmin: -3, xmax: 6, ymin: -3, ymax: 5 }) }, lines: [
    "Connaissance et compréhension",
    S`1. Dans le parallélogramme \(PQRS\) dont les diagonales se coupent en \(M\), simplifie : (a) \(\overrightarrow{PQ}+\overrightarrow{QR}\); (b) \(\overrightarrow{PS}-\overrightarrow{PQ}\); (c) \(\overrightarrow{MR}+\overrightarrow{MP}\). [[p|Parallélogramme PQRS]]`,
    S`2. \(\vec u\) va de 4 vers la droite et de 1 vers le haut; \(\vec v\) va de 2 vers la gauche et de 3 vers le haut. Trace \(\vec u+\vec v\), \(\vec u-\vec v\) et \(\vec v-\vec u\) sur la grille. [[g|Grille pour tes vecteurs]]`,
    S`3. \(|\vec a|=11\), \(|\vec b|=6\) et l'angle entre eux est de \(80^\circ\). Trouve \(|\vec a+\vec b|\) et \(|\vec a-\vec b|\).`,
    "Habiletés de la pensée",
    S`4. \(|\vec u|=9\), \(|\vec v|=4\) et \(|\vec u+\vec v|=11\). Trouve l'angle entre \(\vec u\) et \(\vec v\), puis trouve \(|\vec u-\vec v|\).`,
    S`5. Pour quel angle entre deux vecteurs égaux la norme de leur somme est-elle égale à la norme de chacun? Justifie à l'aide d'un schéma.`,
    "Communication",
    "6. Explique, à l'aide d'un schéma, pourquoi la loi du triangle et la loi du parallélogramme donnent toujours la même somme.",
    "7. Un camarade affirme que |u − v| = |u| − |v|. Explique dans quels cas c'est vrai et dans quels cas c'est faux.",
    "Mise en application",
    S`8. Une joggeuse court 2.4 km selon un cap de \(160^\circ\), puis 3.2 km selon un cap de \(250^\circ\). Trouve le déplacement résultant.`,
    S`9. Un drone vole 500 m selon un cap de \(015^\circ\), puis 350 m selon un cap de \(105^\circ\), puis 500 m selon un cap de \(195^\circ\). À quelle distance et dans quelle direction se trouve-t-il par rapport à son point de départ?`,
    S`10. Deux navires quittent le port : l'un est maintenant à 14 km selon un cap de \(030^\circ\), l'autre à 9 km selon un cap de \(110^\circ\). Trouve le déplacement du premier navire au second.`,
    "Niveau difficile",
    S`11. Démontre que, pour tous vecteurs, \(|\vec u+\vec v|^2-|\vec u-\vec v|^2=4|\vec u||\vec v|\cos\theta\), où \(\theta\) est l'angle entre eux. Qu'est-ce que cela signifie lorsque \(\vec u\perp\vec v\)?`,
    S`12. Trois vecteurs de normes 5, 7 et 10 ont une somme égale à \(\vec 0\). Trouve l'angle entre chaque paire de ces vecteurs.`,
  ] },
  { code: "6.3", id: asgId(6, 3), title: dv(T3), figs: {
      t: vdoc({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.8, ymax: 5.4 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [7, 0], [3, 4.8], [0, 0]], color: "gray" }], arrows: [{ from: [0, 0], to: [7, 0], vl: "a", off: 16 }, { from: [0, 0], to: [3, 4.8], vl: "b", color: "blue", off: -16 }], points: [{ x: 0, y: 0, label: "O", dx: -14, dy: 14 }, { x: 7, y: 0, label: "A", dx: 6, dy: 16 }, { x: 3, y: 4.8, label: "B", dx: -4, dy: -8 }] }),
      g: grid({ xmin: -4, xmax: 6, ymin: -3, ymax: 5 }) }, lines: [
    "Connaissance et compréhension",
    S`1. \(|\vec v|=6\) selon un cap de \(040^\circ\). Décris \(2.5\vec v\), \(-\vec v\) et \(-\frac13\vec v\).`,
    S`2. Simplifie \(4(2\vec a-\vec b)-3(\vec a-2\vec b)+\vec b\).`,
    S`3. \(\vec u\) va de 2 vers la droite et de 1 vers le bas; \(\vec v\) va de 1 vers la droite et de 2 vers le haut. Trace \(3\vec u\), \(-2\vec v\) et \(\vec u-\frac12\vec v\) sur la grille. [[g|Grille pour tes vecteurs]]`,
    "Habiletés de la pensée",
    S`4. Résous pour \(\vec x\) : \(3(\vec x-2\vec u)=\vec x+4\vec v\). Détermine ensuite si \(\vec x\) est colinéaire à \(3\vec u+2\vec v\).`,
    S`5. \(\overrightarrow{PQ}=3\vec a+\vec b\), \(\overrightarrow{QR}=\vec a-\vec b\) et \(\overrightarrow{RS}=-6\vec a-2\vec b\). Lesquels des points \(P,Q,R,S\) sont alignés? Explique.`,
    "Communication",
    "6. Explique la différence entre des vecteurs colinéaires et des points alignés (colinéaires), en donnant un exemple de chacun.",
    "7. Explique pourquoi la division d'un vecteur non nul par sa norme donne toujours un vecteur unitaire, et pourquoi cela ne fonctionne pas pour le vecteur nul.",
    "Mise en application",
    S`8. Dans le \(\triangle OAB\), \(\overrightarrow{OA}=\vec a\) et \(\overrightarrow{OB}=\vec b\). \(C\) est le point milieu de \(OA\) et \(D\) partage \(AB\) de sorte que \(AD:DB=1:3\). Exprime \(\overrightarrow{CD}\) en fonction de \(\vec a\) et \(\vec b\). [[t|Triangle OAB]]`,
    S`9. Une vitesse de 12 km/h selon un cap de \(300^\circ\) est triplée, puis inversée. Décris le résultat, et trouve le scalaire qui effectue les deux opérations à la fois.`,
    S`10. La vitesse d'un cycliste est \(\vec v\). Exprime, en fonction de \(\vec v\), la vitesse d'une coureuse qui va deux fois moins vite dans le sens opposé, et celle d'une voiture qui va quatre fois plus vite dans le même sens.`,
    "Niveau difficile",
    S`11. Démontre à l'aide de vecteurs que les segments qui relient les points milieux des côtés opposés de tout quadrilatère se coupent en leur milieu.`,
    S`12. Dans le parallélogramme \(ABCD\), \(E\) est le point milieu de \(BC\) et \(AE\) coupe \(BD\) en \(F\). Montre que \(F\) partage \(BD\) dans le rapport \(1:2\).`,
  ] },
  { code: "6.4", id: asgId(6, 4), title: dv(T4), figs: {
      s: vdoc({ view: { xmin: -4, xmax: 4, ymin: -3, ymax: 2.8 }, grid: false, axes: false, segs: [{ pts: [pol(4, 160), [0, 0], pol(3.4, 30)], color: "gray", w: 1.4 }], polys: [{ pts: [[-0.8, -0.2], [0.8, -0.2], [0.8, -1], [-0.8, -1]], fill: "#fde68a", stroke: "amber" }], arrows: [{ from: [0, -1], to: [0, -2.8], color: "red", label: "220 N", off: -24 }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 30, label: "30°" }, { at: [0, 0], r: 1, a: 160, b: 180, label: "20°" }] }),
      r: vdoc({ view: { xmin: -0.6, xmax: 6, ymin: -0.6, ymax: 4.4 }, grid: false, axes: false, polys: [{ pts: [[-0.6, 0], [6, 0], [6, 4], [-0.6, 4]], fill: "#e0f2fe" }], arrows: [{ from: [4.6, 2], to: [5.8, 2], color: "blue", label: "courant 2 m/s", off: -14 }], points: [{ x: 0.5, y: 0, label: "départ", dx: 6, dy: 16 }, { x: 0.5, y: 4, label: "quai", dx: 6, dy: -6 }] }) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve la résultante et la force équilibrante de forces de 18 N et de 24 N qui agissent à angle droit.`,
    S`2. Un avion vole avec une vitesse air de 380 km/h. Trouve sa vitesse sol avec un vent arrière de 45 km/h et avec un vent de face de 45 km/h.`,
    S`3. On pagaie un canot droit vers l'autre rive d'une rivière de 60 m de largeur, à 1.5 m/s, dans un courant de 0.8 m/s. Trouve sa vitesse par rapport à la rive et la durée de la traversée.`,
    "Habiletés de la pensée",
    S`4. Deux forces de 25 N et de 40 N ont une résultante de 50 N. Trouve l'angle entre elles et la direction de la résultante.`,
    S`5. Un bateau qui se déplace à 4 m/s en eau calme doit atteindre un quai situé juste en face, de l'autre côté d'une rivière de 120 m de largeur dont le courant est de 2 m/s. Trouve son cap et la durée de la traversée. [[r|Traversée de la rivière]]`,
    "Communication",
    "6. Explique la différence entre le cap et la route, et entre la vitesse air et la vitesse sol. Quand sont-ils égaux?",
    "7. Explique pourquoi la force équilibrante de plusieurs forces est l'opposé de leur résultante.",
    "Mise en application",
    S`8. Une lampe de 220 N est suspendue à deux câbles qui font des angles de \(30^\circ\) et de \(20^\circ\) avec l'horizontale. Trouve la tension dans chaque câble. [[s|Lampe retenue par deux câbles]]`,
    S`9. Un avion a un cap de \(250^\circ\) à 510 km/h, alors qu'un vent de 65 km/h souffle du \(340^\circ\). Trouve sa vitesse sol (vecteur).`,
    S`10. Deux chiens tirent un traîneau avec des forces de 140 N et de 110 N formant un angle de \(35^\circ\) entre elles. Trouve la force résultante et l'angle qu'elle forme avec la force de 140 N.`,
    "Niveau difficile",
    S`11. Un pilote doit parcourir 900 km selon une route de \(020^\circ\), à une vitesse air de 450 km/h, avec un vent de 80 km/h qui souffle du \(290^\circ\). Trouve le cap, la vitesse sol et la durée du vol.`,
    S`12. Trois remorqueurs tirent une barge avec des forces de 6 kN à \(0^\circ\), de 8 kN à \(70^\circ\) et \(F\) à \(200^\circ\). Quelle doit être la valeur de \(F\) pour que la barge avance exactement le long de la droite à \(70^\circ\)? Quelle est la force résultante?`,
  ] },
  { code: "6.5", id: asgId(6, 5), title: dv(T5), figs: {
      m: vdoc({ view: { xmin: -0.5, xmax: 9, ymin: -1.6, ymax: 4.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [8.8, 0], [8.8, 8.8 * Math.tan(22 * RAD)]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [5, 2.3], to: [5, -0.9], vl: "W", label: "350 N", off: -16 }], arcs: [{ at: [0, 0], r: 1.6, a: 0, b: 22, label: "22°" }] }),
      g: grid({ xmin: -6, xmax: 6, ymin: -5, ymax: 5 }) }, lines: [
    "Connaissance et compréhension",
    S`1. Décompose une force de 95 N agissant à \(38^\circ\) au-dessus de l'horizontale en composantes horizontale et verticale.`,
    S`2. Trouve la norme et la direction (à partir de la partie positive de l'axe des x) des vecteurs dont les composantes sont \((9,-12)\) et \((-15,8)\).`,
    S`3. Trace sur la grille un vecteur de norme 5 à \(220^\circ\), avec ses composantes, et donne ces composantes. [[g|Grille pour ton vecteur]]`,
    "Habiletés de la pensée",
    S`4. Trouve, à l'aide des composantes, la résultante de 32 N à \(10^\circ\), de 45 N à \(140^\circ\) et de 20 N à \(265^\circ\).`,
    S`5. Une force a une composante horizontale de 54 N et une composante verticale de \(-72\) N. Trouve la force, puis trouve ses composantes selon des axes tournés de \(30^\circ\) dans le sens antihoraire.`,
    "Communication",
    "6. Explique pourquoi il est souvent plus facile d'additionner trois vecteurs ou plus à l'aide de composantes qu'à l'aide de triangles.",
    "7. Explique, à l'aide d'un schéma, pourquoi l'angle entre un poids et la perpendiculaire à une rampe est égal à l'angle de la rampe.",
    "Mise en application",
    S`8. Une malle de 350 N repose sur une rampe inclinée à \(22^\circ\). Décompose son poids parallèlement et perpendiculairement à la rampe, et trouve la force parallèle à la rampe nécessaire pour la retenir. [[m|Malle sur une rampe à 22°]]`,
    S`9. Un navire navigue à 18 nœuds selon un cap de \(125^\circ\). Trouve ses composantes est et nord, ainsi que les distances qu'il parcourt vers l'est et vers le sud en 3 heures.`,
    S`10. Une randonneuse tire un traîneau à l'aide d'une corde qui fait un angle de \(28^\circ\) avec le sol; la traction horizontale doit être de 65 N. Trouve la tension dans la corde et la force de soulèvement verticale.`,
    "Niveau difficile",
    S`11. La vitesse d'un avion par rapport au sol est de 470 km/h selon un cap de \(055^\circ\); sa vitesse par rapport à l'air est de 440 km/h selon un cap de \(062^\circ\). Utilise les composantes pour trouver la vitesse du vent.`,
    S`12. Une boîte de 60 N est posée sur une rampe. Pour quel angle de la rampe la composante de son poids parallèle à la rampe est-elle la moitié de la composante perpendiculaire à la rampe? Pour quel angle en est-elle le double?`,
  ] },
];
