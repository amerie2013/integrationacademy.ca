// MCV4U-FR chapitre 7 — devoirs : 12 questions chacun — Connaissance et compréhension 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10, Niveau difficile 11-12. [[clé|légende]] est remplacé par une figure (SVG).
// Miroir de ../../mcv4u-ch7/asg/assignments.mjs (mêmes figures; elles ne contiennent que des lettres, des nombres et des unités).
import { vdoc, pol, p3, axes3, box3, merge } from "../../mcv4u-ch7/vecfig.mjs";
import { asgId } from "../../mcv4u-fr/common.mjs";
import { TITLE as T1 } from "../l7_1.mjs";
import { TITLE as T2 } from "../l7_2.mjs";
import { TITLE as T3 } from "../l7_3.mjs";
import { TITLE as T4 } from "../l7_4.mjs";
import { TITLE as T5 } from "../l7_5.mjs";
import { TITLE as T6 } from "../l7_6.mjs";

const S = String.raw;
const dv = (t) => `Devoir ${t.replace(/^(\d\.\d) /, "$1 — ")}`;
const grid = (view) => vdoc({ view, step: 1 });
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };

export const ASSIGNMENTS = [
  { code: "7.1", id: asgId(7, 1), title: dv(T1), figs: {
      q: vdoc({ view: { xmin: -5, xmax: 6, ymin: -4, ymax: 6 }, step: 1, points: [{ x: -4, y: 3, label: "P(−4, 3)" }, { x: 5, y: 5, label: "Q(5, 5)", dx: -50, dy: -6 }, { x: 2, y: -3, label: "R(2, −3)" }] }),
      g: grid({ xmin: -6, xmax: 6, ymin: -5, ymax: 5 }) }, lines: [
    "Connaissance et compréhension",
    S`1. Pour les points illustrés, écris \(\overrightarrow{PQ}\), \(\overrightarrow{QR}\) et \(\overrightarrow{RP}\) sous forme de composantes, et vérifie que leur somme est \(\vec 0\). [[q|Points P, Q et R]]`,
    S`2. Pour \(\vec u=[-3,4]\) et \(\vec v=[5,1]\), trouve \(2\vec u-3\vec v\), \(|\vec u|\) et le vecteur unitaire de même direction que \(\vec v\).`,
    S`3. Écris sous forme de composantes un vecteur de norme 18 à \(320^\circ\) de la partie positive de l'axe des x, puis trace-le sur la grille. [[g|Grille pour ton vecteur]]`,
    "Habiletés de la pensée",
    S`4. Trouve toutes les valeurs de \(k\) pour lesquelles \(|[k,\ k-7]|=13\).`,
    S`5. Trouve \(a\) et \(b\) pour que \(a[3,1]+b[-1,2]=[1,9]\). Explique pourquoi de tels \(a\), \(b\) n'existent pas si l'on remplace \([-1,2]\) par \([-6,-2]\).`,
    "Communication",
    "6. Explique la différence entre le point (3, −2) et le vecteur [3, −2], et comment on représente chacun.",
    "7. Explique comment trouver la direction de [a, b] à partir de la partie positive de l'axe des x lorsque a est négatif.",
    "Mise en application",
    S`8. La vitesse d'un navire est de 24 km/h selon un cap de \(115^\circ\). Écris-la sous forme de composantes (est, nord).`,
    S`9. Trois forces agissent sur un poteau : \([120,40]\) N, \([-60,90]\) N et \([-30,-150]\) N. Trouve la force résultante et sa direction.`,
    S`10. Un drone vole de \((2,-1)\) à \((9,23)\) (km). Trouve la longueur et la direction du vol, ainsi que sa position lorsqu'il a parcouru 40 % du trajet.`,
    "Niveau difficile",
    S`11. \(A(1,2)\), \(B(7,4)\) et \(C(3,8)\) forment un triangle. Utilise des vecteurs pour trouver les points milieux des côtés et montre que le segment qui relie les points milieux de \(AB\) et de \(AC\) mesure la moitié de \(BC\).`,
    S`12. Un carré a deux sommets consécutifs \(A(2,1)\) et \(B(6,4)\). Trouve les deux positions possibles des deux autres sommets.`,
  ] },
  { code: "7.2", id: asgId(7, 2), title: dv(T2), figs: {
      t: vdoc({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 6 }, step: 1, segs: [{ pts: [[0, 0], [6, 1], [2, 5], [0, 0]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 6, y: 1, label: "B", dx: 6, dy: 14 }, { x: 2, y: 5, label: "C", dx: 6, dy: -6 }] }) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve \([4,-7]\cdot[3,2]\) et \([-2,5]\cdot[10,4]\). Quelle paire est formée de vecteurs perpendiculaires?`,
    S`2. \(|\vec a|=9\), \(|\vec b|=4\) et l'angle entre eux est de \(140^\circ\). Trouve \(\vec a\cdot\vec b\).`,
    S`3. Trouve l'angle entre \([2,-5]\) et \([6,1]\).`,
    "Habiletés de la pensée",
    S`4. Trouve les trois angles du triangle illustré à l'aide de produits scalaires, et vérifie que leur somme est \(180^\circ\). [[t|Triangle ABC]]`,
    S`5. Trouve \(k\) pour que \([k,3]\) et \([2,k-4]\) soient perpendiculaires.`,
    "Communication",
    "6. Explique pourquoi le produit scalaire de deux vecteurs peut être négatif, et ce que cela t'apprend sur l'angle entre eux.",
    "7. Explique pourquoi a · a = |a|² et comment cette propriété permet de développer des expressions comme |2a − b|².",
    "Mise en application",
    S`8. \(|\vec a|=5\), \(|\vec b|=2\) et \(\vec a\cdot\vec b=-4\). Trouve \(|\vec a+\vec b|\) et \(|3\vec a-\vec b|\).`,
    S`9. Utilise le produit scalaire pour montrer que les diagonales d'un carré sont perpendiculaires.`,
    S`10. Trouve tous les vecteurs unitaires qui forment un angle de \(60^\circ\) avec \([1,0]\).`,
    "Niveau difficile",
    S`11. Démontre que, pour tous vecteurs, \(|\vec a\cdot\vec b|\le|\vec a||\vec b|\), et utilise ce résultat pour montrer que \(|\vec a+\vec b|\le|\vec a|+|\vec b|\).`,
    S`12. \(\vec u\) et \(\vec v\) sont des vecteurs unitaires tels que \(|\vec u+2\vec v|=\sqrt7\). Trouve l'angle entre \(\vec u\) et \(\vec v\).`,
  ] },
  { code: "7.3", id: asgId(7, 3), title: dv(T3), figs: {
      w: vdoc({ view: { xmin: -0.6, xmax: 7, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.8, 0], [1.8, 0.8], [0, 0.8]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.8, 0.4], to: pol(4, 32, [1.8, 0.4]), vl: "F", label: "140 N", off: -16 }, { from: [0, -0.5], to: [6.6, -0.5], color: "blue", label: "45 m", off: -12, w: 2 }] }) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve le travail effectué par une force de 140 N, à \(32^\circ\) du sol, qui tire une caisse sur 45 m. [[w|Caisse tirée sur le sol]]`,
    S`2. Trouve la projection scalaire et la projection vectorielle de \([7,3]\) sur \([4,-3]\).`,
    S`3. Trouve le travail effectué par \(\vec F=[15,-4]\) N qui déplace un objet de \((1,5)\) à \((9,2)\) m.`,
    "Habiletés de la pensée",
    S`4. Décompose \([9,-2]\) en une partie parallèle à \([2,1]\) et une partie perpendiculaire à ce vecteur, puis vérifie ta réponse.`,
    S`5. Trouve la distance du point \((7,6)\) à la droite qui passe par l'origine dans la direction \([4,1]\).`,
    "Communication",
    "6. Explique pourquoi la force vers le haut n'effectue aucun travail lorsqu'on transporte une lourde boîte sur un plancher horizontal à hauteur constante.",
    "7. Explique pourquoi la projection de a sur b dépend de la direction de b, mais pas de sa norme.",
    "Mise en application",
    S`8. Une skieuse de 70 kg (poids 686 N) glisse sur 120 m le long d'une pente inclinée à \(18^\circ\). Quel travail la gravité effectue-t-elle?`,
    S`9. On tire un chariot sur 50 m avec une force de 80 N. Compare le travail effectué lorsque la poignée forme un angle de \(10^\circ\), de \(30^\circ\) et de \(50^\circ\), et explique la régularité.`,
    S`10. Une force de \([20,15]\) N agit sur un objet qui se déplace le long de la droite de direction \([1,-1]\). Trouve la composante de la force dans le sens du mouvement et le travail effectué sur 8 m.`,
    "Niveau difficile",
    S`11. Trouve tous les vecteurs \(\vec a\) tels que \(|\vec a|=10\) et dont la projection scalaire sur \([3,4]\) est 6.`,
    S`12. Démontre que la projection vectorielle de \(\vec a\) sur \(\vec b\) et le vecteur \(\vec a\) moins cette projection sont toujours perpendiculaires.`,
  ] },
  { code: "7.4", id: asgId(7, 4), title: dv(T4), figs: {
      b: vdoc(merge(V3, axes3(4.8), { segs: box3(4, 3, 2) })),
      e: vdoc(merge(V3, axes3(4.8))) }, lines: [
    "Connaissance et compréhension",
    S`1. La boîte illustrée a un sommet à l'origine et des arêtes le long des axes. Donne les coordonnées de ses huit sommets. [[b|Une boîte dans l'espace]]`,
    S`2. Pour \(A(3,-1,4)\) et \(B(-1,2,-8)\), trouve \(\overrightarrow{AB}\), \(|\overrightarrow{AB}|\) et le point milieu de \(AB\).`,
    S`3. Pour \(\vec u=[2,-3,1]\) et \(\vec v=[0,4,-2]\), trouve \(3\vec u+\vec v\), \(\vec u\cdot\vec v\) et l'angle entre eux.`,
    "Habiletés de la pensée",
    S`4. Trouve les angles directeurs de \([-2,6,3]\) et vérifie l'identité liant leurs cosinus.`,
    S`5. Trouve le point de l'axe des x qui est à égale distance de \((1,4,-2)\) et de \((5,0,2)\).`,
    "Communication",
    "6. Décris l'ensemble des points tels que x = 0, l'ensemble des points tels que x = 0 et y = 0, et l'ensemble des points tels que z = 3.",
    "7. Explique pourquoi les trois angles directeurs d'un vecteur ne peuvent pas tous mesurer 50°.",
    "Mise en application",
    S`8. Place \(P(3,4,2)\) et \(Q(1,-2,3)\) sur les axes, puis trouve la distance entre ces points. [[e|Axes pour placer les points]]`,
    S`9. Une grue soulève une charge de \((2,5,0)\) à \((6,8,12)\) (mètres). Trouve la longueur du trajet rectiligne et l'angle qu'il forme avec la verticale.`,
    S`10. Trouve les angles du triangle de sommets \(A(1,0,0)\), \(B(0,2,0)\), \(C(0,0,3)\).`,
    "Niveau difficile",
    S`11. Montre que \(A(2,3,1)\), \(B(4,4,3)\), \(C(3,5,-1)\) et \(D(5,6,1)\) sont les sommets d'un parallélogramme, et détermine s'il s'agit d'un rectangle.`,
    S`12. Trouve tous les vecteurs unitaires perpendiculaires à la fois à \([1,0,1]\) et à \([1,1,0]\), en utilisant seulement le produit scalaire.`,
  ] },
  { code: "7.5", id: asgId(7, 5), title: dv(T5), figs: {
      p: vdoc(merge(V3, axes3(4.4), { polys: [{ pts: [p3(0, 0, 0), p3(3, 1, 0), p3(3, 3, 2), p3(0, 2, 2)], fill: "#ede9fe", stroke: "violet" }] })) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve \([4,-1,2]\times[3,2,-5]\) et vérifie que le résultat est perpendiculaire aux deux vecteurs.`,
    S`2. Trouve \(\vec k\times\vec i\), \(\vec i\times\vec k\) et \((\vec i+\vec j)\times\vec k\).`,
    S`3. \(|\vec a|=8\), \(|\vec b|=3\) et l'angle entre eux est de \(110^\circ\). Trouve \(|\vec a\times\vec b|\).`,
    "Habiletés de la pensée",
    S`4. Trouve l'aire du parallélogramme illustré, dont les sommets sont \(O\), \((3,1,0)\), \((3,3,2)\) et \((0,2,2)\). [[p|Un parallélogramme dans l'espace]]`,
    S`5. Trouve toutes les valeurs de \(k\) pour lesquelles \([2,k,-1]\times[k,8,-2]=\vec 0\).`,
    "Communication",
    "6. Explique la règle de la main droite et utilise-la pour décrire la direction de a × b pour a = [1, 0, 0] et b = [0, 0, 1].",
    "7. Explique pourquoi le produit vectoriel n'est pas défini pour des vecteurs du plan, et comment on peut tout de même l'utiliser pour calculer des aires dans le plan.",
    "Mise en application",
    S`8. Trouve un vecteur unitaire perpendiculaire à la fois à \([2,1,-3]\) et à \([1,-1,1]\).`,
    S`9. Utilise le produit vectoriel pour trouver l'aire du triangle de sommets \((2,-1,0)\), \((4,1,1)\) et \((1,3,2)\).`,
    S`10. Utilise \(|\vec a\times\vec b|\) et \(\vec a\cdot\vec b\) pour trouver de deux façons l'angle entre \([1,2,2]\) et \([2,-1,2]\).`,
    "Niveau difficile",
    S`11. Montre par un exemple que \((\vec a\times\vec b)\times\vec c\ne\vec a\times(\vec b\times\vec c)\), avec \(\vec a=[1,1,0]\), \(\vec b=[0,1,0]\), \(\vec c=[0,1,1]\).`,
    S`12. Démontre que \(|\vec a\times\vec b|^2=|\vec a|^2|\vec b|^2-(\vec a\cdot\vec b)^2\) pour tous vecteurs.`,
  ] },
  { code: "7.6", id: asgId(7, 6), title: dv(T6), figs: {
      r: vdoc({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "r", label: "0.45 m", off: 16, w: 5 }, { from: [5, 0], to: pol(3.4, 70, [5, 0]), vl: "F", label: "120 N", color: "red", off: -16 }], arcs: [{ at: [5, 0], r: 1, a: 0, b: 70, label: "70°" }] }) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve le moment de force produit par une force de 120 N appliquée à \(70^\circ\) sur une clé de 0.45 m. [[r|Clé et force]]`,
    S`2. Trouve le volume du parallélépipède engendré par \([1,2,1]\), \([3,0,2]\) et \([0,1,4]\).`,
    S`3. Trouve le travail effectué par \(\vec F=[6,-2,5]\) N qui déplace un objet de \((0,2,1)\) à \((3,5,4)\) m.`,
    "Habiletés de la pensée",
    S`4. Détermine si \([2,-1,3]\), \([1,1,1]\) et \([4,1,5]\) sont coplanaires. S'ils le sont, écris l'un comme combinaison des deux autres.`,
    S`5. Trouve l'aire du triangle de sommets \((1,2,3)\), \((4,0,1)\) et \((2,5,0)\), ainsi que la longueur de la hauteur issue de \((2,5,0)\).`,
    "Communication",
    "6. Explique comment une clé à cliquet aide un mécanicien à produire le plus grand moment de force dans un espace restreint.",
    "7. Explique pourquoi le produit mixte donne le volume d'un parallélépipède (aire de la base multipliée par la hauteur).",
    "Mise en application",
    S`8. On pousse une porte de 0.9 m de largeur à son extrémité avec une force de 40 N formant un angle de \(60^\circ\) avec la porte. Trouve le moment de force par rapport aux charnières, ainsi que l'angle qui le doublerait, si c'est possible.`,
    S`9. Trouve le vecteur moment de force \(\vec\tau=\vec r\times\vec F\) pour \(\vec r=[0.3,0.2,0]\) m et \(\vec F=[10,-5,20]\) N, ainsi que sa norme.`,
    S`10. Un tétraèdre a pour sommets \(O\), \((2,0,0)\), \((1,3,0)\) et \((1,1,4)\). Trouve son volume (le sixième de celui du parallélépipède engendré par ses arêtes).`,
    "Niveau difficile",
    S`11. Trouve \(k\) pour que le parallélépipède engendré par \([1,k,0]\), \([0,1,2]\) et \([3,0,1]\) ait un volume de 20.`,
    S`12. Montre que \(\vec a\cdot(\vec b\times\vec c)=(\vec a\times\vec b)\cdot\vec c\) pour \(\vec a=[1,2,0]\), \(\vec b=[0,1,3]\), \(\vec c=[2,1,1]\), et explique géométriquement pourquoi les deux expressions sont égales.`,
  ] },
];
