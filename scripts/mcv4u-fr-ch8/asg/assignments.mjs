// MCV4U-FR chapitre 8 — devoirs : 12 questions chacun — Connaissance et compréhension 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10, Niveau difficile 11-12. [[clé|légende]] est remplacé par une figure (SVG).
// Miroir de ../../mcv4u-ch8/asg/assignments.mjs (mêmes figures; elles ne contiennent aucun mot).
import { vdoc, p3, axes3, merge, line3, patch3 } from "../../mcv4u-ch8/vecfig.mjs";
import { asgId } from "../../mcv4u-fr/common.mjs";
import { TITLE as T1 } from "../l8_1.mjs";
import { TITLE as T2 } from "../l8_2.mjs";
import { TITLE as T3 } from "../l8_3.mjs";
import { TITLE as T4 } from "../l8_4.mjs";
import { TITLE as T5 } from "../l8_5.mjs";
import { TITLE as T6 } from "../l8_6.mjs";

const S = String.raw;
const dv = (t) => `Devoir ${t.replace(/^(\d\.\d) /, "$1 — ")}`;
const grid = (view) => vdoc({ view, step: 1 });
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };

export const ASSIGNMENTS = [
  { code: "8.1", id: asgId(8, 1), title: dv(T1), figs: {
      g: grid({ xmin: -5, xmax: 6, ymin: -4, ymax: 6 }),
      e: vdoc(merge(V3, axes3(4.8))) }, lines: [
    "Connaissance et compréhension",
    S`1. Écris des équations vectorielle, paramétriques et cartésienne de la droite qui passe par \((-3,2)\) et dont le vecteur directeur est \([4,-1]\).`,
    S`2. Écris une équation vectorielle de la droite \(5x+2y-10=0\), puis trace-la sur la grille. [[g|Grille pour ta droite]]`,
    S`3. Écris des équations vectorielle et paramétriques de la droite qui passe par \((1,4,-2)\) et \((3,-1,0)\), puis trouve le point correspondant à \(t=1.5\).`,
    "Habiletés de la pensée",
    S`4. Détermine si \((7,-11,6)\) et \((7,-11,7)\) sont sur \(\vec r=[1,4,-2]+t[2,-5,3]\), et explique ton raisonnement.`,
    S`5. Trouve l'angle aigu entre \(3x-4y=7\) et \(12x+5y=1\).`,
    "Communication",
    "6. Explique pourquoi une droite dans l'espace ne peut pas être décrite par une seule équation cartésienne, et comment on peut la décrire autrement.",
    "7. Explique le lien entre le vecteur directeur d'une droite du plan et le vecteur normal de son équation cartésienne.",
    "Mise en application",
    S`8. Un drone part de \((2,1,0)\) km et vole avec une vitesse \([3,2,1]\) km/h. Écris sa position après \(t\) heures, et trouve quand il atteint une altitude de 2.5 km. Esquisse sa trajectoire sur les axes. [[e|Axes pour la trajectoire]]`,
    S`9. Un navire se déplace le long de \(\vec r=[0,8]+t[6,-2]\) (km, \(t\) en heures). Trouve où et quand il traverse la ligne de côte \(y=0\).`,
    S`10. Trouve la distance entre le phare situé en \((4,7)\) et le couloir de navigation \(3x+4y-12=0\).`,
    "Niveau difficile",
    S`11. Trouve des équations de la droite qui passe par \((1,-2,3)\) et qui est perpendiculaire à la fois à \([2,1,0]\) et à \([0,1,-1]\), puis décris-la comme l'intersection de deux plans.`,
    S`12. Trouve le point de \(\vec r=[1,0,2]+t[1,1,-1]\) le plus proche de l'origine, ainsi que la distance.`,
  ] },
  { code: "8.2", id: asgId(8, 2), title: dv(T2), figs: {
      t: vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(2, 0, 1), p3(0, 3, 1), p3(1, 1, 4)], fill: "#dbeafe", stroke: "blue" }] })) }, lines: [
    "Connaissance et compréhension",
    S`1. Écris des équations vectorielle et paramétriques du plan qui passe par \((3,-1,2)\) et dont les vecteurs directeurs sont \([1,2,0]\) et \([0,-1,4]\).`,
    S`2. Écris une équation vectorielle du plan qui passe par \((2,0,1)\), \((0,3,1)\) et \((1,1,4)\). [[t|Trois points d'un plan]]`,
    S`3. Trouve le point correspondant à \(s=-1\), \(t=2\) sur \(\vec r=[1,1,1]+s[2,0,-1]+t[1,3,1]\).`,
    "Habiletés de la pensée",
    S`4. Détermine si \((4,6,5)\) et \((0,2,3)\) sont sur le plan de la question 3.`,
    S`5. Trouve une équation vectorielle du plan qui contient les droites parallèles \(\vec r=[1,0,2]+t[1,1,1]\) et \(\vec r=[0,3,1]+t[1,1,1]\).`,
    "Communication",
    "6. Explique pourquoi il faut deux vecteurs directeurs pour définir un plan, et pourquoi ils ne doivent pas être parallèles.",
    "7. Explique comment déterminer si quatre points donnés sont coplanaires.",
    "Mise en application",
    S`8. Un panneau solaire est soutenu aux points \((0,0,1)\), \((2,0,1.5)\) et \((0,3,1)\) (mètres). Écris une équation vectorielle du plan du panneau.`,
    S`9. Une surface de toit contient la ligne de faîte \(\vec r=[0,0,6]+t[1,0,0]\) et le point \((0,4,3)\). Écris une équation vectorielle du plan du toit.`,
    S`10. Montre que les points \((1,2,1)\), \((3,3,2)\), \((2,4,4)\) et \((4,5,5)\) sont coplanaires.`,
    "Niveau difficile",
    S`11. Trouve \(k\) pour que \((k,1,0)\), \((1,1,1)\), \((2,3,1)\) et \((0,2,2)\) soient coplanaires.`,
    S`12. Montre que tout point de \(\vec r=[2,0,0]+s[-2,3,0]+t[-2,0,1]\) vérifie \(3x+2y+6z=6\), et explique la signification géométrique des nombres 2, 3 et 1 dans cette équation.`,
  ] },
  { code: "8.3", id: asgId(8, 3), title: dv(T3), figs: {
      i: vdoc(merge(V3, axes3(4.8))) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve l'équation cartésienne du plan qui passe par \((1,-2,4)\) et dont le vecteur normal est \([3,1,-2]\).`,
    S`2. Trouve une équation cartésienne de \(\vec r=[0,1,1]+s[1,1,0]+t[2,0,3]\).`,
    S`3. Trouve les points d'intersection de \(4x+3y+6z=12\) avec les axes, puis esquisse le plan dans le premier octant. [[i|Axes pour ton esquisse]]`,
    "Habiletés de la pensée",
    S`4. Classe chaque paire comme parallèle, perpendiculaire ou ni l'une ni l'autre : (a) \(x-2y+z=3\), \(-2x+4y-2z=1\); (b) \(x-2y+z=3\), \(3x+y-z=0\).`,
    S`5. Trouve l'angle entre \(2x+2y-z=5\) et \(x-4y+8z=0\).`,
    "Communication",
    "6. Explique pourquoi tout multiple scalaire d'un vecteur normal est aussi un vecteur normal, et ce qui change lorsque seul D change dans Ax + By + Cz + D = 0.",
    "7. Explique comment la formule de la distance d'un point à un plan découle d'une projection sur le vecteur normal.",
    "Mise en application",
    S`8. La surface d'une rampe est le plan \(x+2y+2z=6\) (mètres). À quelle distance de la rampe se trouve le point \((3,4,5)\), le sommet d'un lampadaire?`,
    S`9. Deux murs sont les plans \(3x-y+2z=6\) et \(x+5y+z=4\). Sont-ils perpendiculaires? Trouve l'angle entre eux.`,
    S`10. Trouve le plan qui passe par \((2,1,-1)\) et qui est parallèle à \(5x-y+3z=7\), ainsi que la distance entre les deux plans.`,
    "Niveau difficile",
    S`11. Trouve les plans parallèles à \(2x-y+2z=3\) qui sont à 4 unités de celui-ci.`,
    S`12. Trouve le plan qui passe par \((1,0,2)\) et \((3,1,0)\) et qui est perpendiculaire à \(x+y+z=4\).`,
  ] },
  { code: "8.4", id: asgId(8, 4), title: dv(T4), figs: {
      s: vdoc(merge(V3, axes3(4.6), { segs: [line3([0, 0, 1], [1, 2, 0], -1, 2, "violet", 2.8), line3([2, 0, 3], [0, 1, -1], -1, 2.5, "blue", 2.8)] })) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve l'intersection de \(\vec r=[3,1]+s[1,-2]\) et de \(\vec r=[0,2]+t[2,1]\).`,
    S`2. Classe \(\vec r=[1,4]+s[3,-6]\) et \(2x+y=6\) comme parallèles distinctes, confondues ou sécantes.`,
    S`3. Trouve l'angle entre des droites de vecteurs directeurs \([1,-2,2]\) et \([2,2,1]\).`,
    "Habiletés de la pensée",
    S`4. Détermine si \(\vec r=[0,0,1]+s[1,2,0]\) et \(\vec r=[2,0,3]+t[0,1,-1]\) se coupent ou sont gauches. [[s|Les deux droites]]`,
    S`5. Trouve \(k\) pour que \(\vec r=[1,k,0]+s[1,1,1]\) et \(\vec r=[0,0,2]+t[1,2,0]\) se coupent.`,
    "Communication",
    "6. Explique pourquoi il ne peut pas exister de droites gauches dans le plan.",
    "7. Explique comment déterminer si deux droites dont les vecteurs directeurs sont parallèles sont confondues ou distinctes.",
    "Mise en application",
    S`8. Deux avions volent le long de \(\vec r=[0,0,2]+t[4,3,0]\) et de \(\vec r=[10,0,2.5]+s[-2,3,0]\) (km). Leurs trajectoires risquent-elles de se croiser? Trouve la plus courte distance entre les trajectoires.`,
    S`9. Deux câbles sont tendus le long de \(\vec r=s[1,1,0]\) et de \(\vec r=[0,0,3]+t[1,-1,0]\). À quelle distance minimale l'un de l'autre passent-ils?`,
    S`10. Trouve la distance entre les droites parallèles \(y=3x+2\) et \(y=3x-8\).`,
    "Niveau difficile",
    S`11. Trouve la plus courte distance entre \(\vec r=[1,2,0]+s[2,0,1]\) et \(\vec r=[0,1,3]+t[1,1,0]\), et explique chaque étape.`,
    S`12. Trouve l'équation de la droite qui passe par \((1,1,1)\) et qui rencontre à la fois \(\vec r=t[1,0,0]\) et \(\vec r=[0,0,2]+s[0,1,0]\).`,
  ] },
  { code: "8.5", id: asgId(8, 5), title: dv(T5), figs: {
      p: vdoc(merge(V3, axes3(4.6), { polys: [patch3([1.3, 1.3, 1.3], [1, -1, 0], [1, 0, -1], 1.6)] }, { segs: [line3([0, 0, 4], [1, 1, -1], -0.5, 2.8, "red", 2.8)] })) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve où \(\vec r=[1,-2,3]+t[2,1,-1]\) rencontre \(x+3y+z=4\).`,
    S`2. Trouve la distance de \((2,1,-3)\) à \(6x-2y+3z=4\).`,
    S`3. Détermine si \(\vec r=[0,0,4]+t[1,1,-1]\) rencontre \(x+y+z=4\) (illustré), lui est parallèle ou y est contenue. [[p|La droite et le plan]]`,
    "Habiletés de la pensée",
    S`4. Trouve l'angle entre une droite de vecteur directeur \([2,-1,2]\) et le plan \(x+y-z=0\).`,
    S`5. Trouve \(k\) pour que \(\vec r=[1,0,k]+t[1,2,-1]\) soit contenue dans le plan \(x+y+3z=4\).`,
    "Communication",
    "6. Explique les trois résultats possibles lorsqu'on substitue une droite dans l'équation d'un plan, et la signification géométrique de chacun.",
    "7. Explique pourquoi le pied de la perpendiculaire est le point du plan le plus proche d'un point donné.",
    "Mise en application",
    S`8. Un faisceau laser part de \((0,0,10)\) dans la direction \([2,1,-4]\) vers un miroir situé dans le plan \(x+y+z=1\). Où frappe-t-il le miroir?`,
    S`9. Une lampe est suspendue en \((2,3,5)\) sous un plafond incliné \(x+2y+2z=12\). À quelle distance du plafond se trouve la lampe, et quel est le point le plus proche?`,
    S`10. Trouve le symétrique (la réflexion) de \((4,1,3)\) par rapport au plan \(2x+y+2z=6\).`,
    "Niveau difficile",
    S`11. Trouve l'équation de la droite qui passe par \((1,2,3)\), qui est parallèle au plan \(x+y+z=0\) et qui rencontre la droite \(\vec r=t[1,0,0]\).`,
    S`12. Trouve les points de \(\vec r=[0,1,2]+t[1,1,0]\) qui sont à 3 unités du plan \(2x+y+2z=1\).`,
  ] },
  { code: "8.6", id: asgId(8, 6), title: dv(T6), figs: {
      c: vdoc(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.5, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.5, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.5, "#fee2e2", "red", 0.45)] })) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve la droite d'intersection de \(x-y+2z=3\) et de \(2x+y-z=6\).`,
    S`2. Résous \(x+y+z=2\), \(2x-y+z=6\), \(x+2y-z=-3\) et décris la configuration.`,
    S`3. Classe \(4x-2y+6z=2\) et \(-2x+y-3z=-1\).`,
    "Habiletés de la pensée",
    S`4. Résous \(x+y-z=1\), \(x-y+z=3\), \(3x+y-z=5\), et décris géométriquement la configuration.`,
    S`5. Montre que \(x+2y+z=4\), \(2x+y-z=2\), \(x-y-2z=5\) n'ont aucun point commun et nomme la configuration. [[c|Une configuration possible]]`,
    "Communication",
    "6. Décris, à l'aide d'esquisses, toutes les façons dont trois plans peuvent se couper, et donne le signe algébrique de chaque cas.",
    "7. Explique comment le produit mixte des vecteurs normaux aide à déterminer si trois plans se coupent en un seul point.",
    "Mise en application",
    S`8. Trois murs d'un édifice sont \(x=0\), \(y=0\) et \(x+y+2z=10\). Où se rencontrent-ils tous les trois?`,
    S`9. Un cristal a des faces situées dans les plans \(x+y+z=3\), \(x-y=1\) et \(2x+z=k\). Pour quelle valeur de \(k\) les trois faces ont-elles une arête (une droite) commune?`,
    S`10. Trouve la distance entre les plans parallèles \(2x+3y-6z=4\) et \(2x+3y-6z=-10\).`,
    "Niveau difficile",
    S`11. Pour quelles valeurs de \(a\) et de \(b\) le système \(x+y+z=1\), \(x+2y+az=2\), \(2x+3y+4z=b\) a-t-il (i) une solution unique, (ii) une infinité de solutions, (iii) aucune solution?`,
    S`12. Trouve l'équation du plan qui contient la droite d'intersection de \(x+y=2\) et de \(y+z=3\) et qui passe par l'origine.`,
  ] },
];
