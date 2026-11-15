// MCR3U-FR chapitre 1 — devoirs : 12 questions chacun — Connaissance et compréhension 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10, Niveau difficile 11-12. [[clé|légende]] est remplacé par une figure (SVG).
// Miroir de ../../mcr3u-ch1/asg/assignments.mjs (mêmes figures). Notation française : y = af(k(x − c)) + d
// (c horizontal, d vertical) — les lettres c et d sont échangées par rapport à l'anglais; aucun nombre ne change.
import { planeDoc, P, sideways, circ, mapDoc, PAR } from "../bank/fig.mjs";
import { asgId } from "../../mcr3u-fr/common.mjs";
import { TITLE as T1 } from "../l1_1.mjs";
import { TITLE as T2 } from "../l1_2.mjs";
import { TITLE as T3 } from "../l1_3.mjs";
import { TITLE as T4 } from "../l1_4.mjs";
import { TITLE as T5 } from "../l1_5.mjs";
import { TITLE as T6 } from "../l1_6.mjs";
import { TITLE as T7 } from "../l1_7.mjs";
import { TITLE as T8 } from "../l1_8.mjs";

const S = String.raw;
const dv = (t) => `Devoir ${t.replace(/^(\d\.\d) /, "$1 — ")}`;
const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };
const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
const grid = (v = V8) => planeDoc({ view: v });

export const ASSIGNMENTS = [
  { code: "1.1", id: asgId(1, 1), title: dv(T1), figs: {
      map: mapDoc([[-4, 1], [0, 1], [2, 5], [7, -3]]),
      side: planeDoc({ view: V6, curves: sideways(-4, -1) }),
      circle: planeDoc({ view: V6, curves: circ(5, 0, 0) }) }, lines: [
    "Connaissance et compréhension",
    S`1. Donne le domaine et l'image de \(\{(-1,6),(2,6),(5,0),(8,-2)\}\). Est-ce une fonction?`,
    "2. La relation du diagramme sagittal est-elle une fonction? Un à un ou plusieurs à un? [[map|Diagramme sagittal pour la question 2]]",
    "3. Applique le test de la droite verticale au graphique. Est-ce une fonction? [[side|Graphique pour la question 3]]",
    "Habiletés de la pensée",
    S`4. Détermine quelles équations définissent y comme une fonction de x, en montrant ton travail algébrique : (a) \(3x-2y=8\) (b) \(x=y^2-5\) (c) \(y=|x-1|\) (d) \(x^2+y^2=4\).`,
    S`5. Pour le cercle \(x^2+y^2=25\), trouve toutes les valeurs de y lorsque \(x=3\) et lorsque \(x=5\). Explique ce que cela montre. [[circle|Graphique pour la question 5]]`,
    "Communication",
    "6. Explique, avec un exemple de chacune, la différence entre une fonction un à un et une fonction plusieurs à un.",
    "7. Explique pourquoi le test de la droite verticale fonctionne, alors qu'un test de la droite horizontale ne permet pas de décider si un graphique représente une fonction.",
    "Mise en application",
    "8. « Chaque élève → son numéro de casier » est-elle une fonction? « Chaque numéro de casier → les élèves qui l'utilisent » est-elle une fonction si les casiers sont partagés?",
    S`9. Une table donne l'heure de la journée et la température : \((9,14),(11,18),(13,21),(15,21),(17,17)\). La température est-elle une fonction de l'heure? L'heure est-elle une fonction de la température?`,
    S`10. Écris une relation de quatre couples qui est une fonction d'image \(\{2\}\). Décris son graphique.`,
    "Niveau difficile",
    S`11. Pour quelles valeurs de \(k\) la droite \(x=k\) coupe-t-elle \(x=-(y+1)^2+6\) exactement une fois, deux fois ou jamais? Esquisse la relation.`,
    S`12. Pour quels nombres réels \(m\) l'ensemble \(\{(m,4),(1,m),(m^2,0)\}\) est-il une fonction? Explique chaque valeur exclue.`,
  ] },
  { code: "1.2", id: asgId(1, 2), title: dv(T2), figs: {
      g: planeDoc({ view: V6, curves: [{ f: (x) => 0.5 * (x - 1) ** 2 - 3, color: "violet" }], points: [P(1, -3)] }) }, lines: [
    "Connaissance et compréhension",
    S`1. Pour \(f(x)=2x^2-5x+3\), trouve \(f(-1)\), \(f(0)\) et \(f(\tfrac12)\).`,
    S`2. Pour \(g(x)=7-4x\), trouve \(g(2a)\) et \(g(a-3)\).`,
    "3. Utilise le graphique pour trouver f(1), f(3) et f(−1). [[g|Graphique pour les questions 3 et 5]]",
    "Habiletés de la pensée",
    S`4. Pour \(f(x)=x^2-6x\), résous \(f(x)=16\) et \(f(x)=-9\). Explique pourquoi le nombre de solutions diffère.`,
    "5. Utilise le graphique pour résoudre f(x) = −1 et f(x) = −5. Explique tes réponses.",
    "Communication",
    "6. Explique la différence entre f(0) et f(x) = 0 à l'aide d'un graphique.",
    S`7. Explique pourquoi \(f(a+2)\) n'est habituellement pas égal à \(f(a)+2\). Illustre avec \(f(x)=x^2\).`,
    "Mise en application",
    S`8. Un plombier facture \(C(h)=60+45h\) dollars pour \(h\) heures. Trouve \(C(2.5)\) ainsi que la durée correspondant à une facture de 285 dollars.`,
    S`9. La hauteur d'une balle est \(h(t)=-5t^2+25t+1.5\) m. Trouve \(h(2)\) et explique sa signification. Quand la balle est-elle à 21.5 m?`,
    S`10. \(f(x)=3x+1\) et \(g(x)=x^2-2\). Trouve \(f(g(3))\) et \(g(f(3))\).`,
    "Niveau difficile",
    S`11. Pour \(f(x)=x^2-5x\), simplifie \(f(x+2)-f(x)\) et utilise le résultat pour trouver \(f(12)-f(10)\).`,
    S`12. \(f(x)=ax^2+bx+1\) avec \(f(1)=4\) et \(f(-1)=0\). Trouve \(a\) et \(b\), puis résous \(f(x)=1\).`,
  ] },
  { code: "1.3", id: asgId(1, 3), title: dv(T3), figs: {
      four: planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ ...PAR.x2 }, { ...PAR.sqrt }, { ...PAR.recip }, { ...PAR.abs }] }),
      cmp: planeDoc({ view: { xmin: 0, xmax: 2, ymin: 0, ymax: 2 }, curves: [PAR.x, PAR.x2, PAR.sqrt], step: { x: 0.25, y: 0.25 } }) }, lines: [
    "Connaissance et compréhension",
    "1. Reconnais chaque fonction de base du graphique d'après sa couleur. [[four|Graphique pour la question 1]]",
    "2. Fais une table de cinq points clés pour chacune des cinq fonctions de base.",
    "3. Donne le domaine et l'image de chaque fonction de base en notation ensembliste.",
    "Habiletés de la pensée",
    S`4. Utilise le graphique pour ordonner \(x\), \(x^2\) et \(\sqrt x\) pour \(x=0.5\) et \(x=1.5\). Explique la régularité. [[cmp|Graphique pour la question 4]]`,
    S`5. Résous \(|x|=\sqrt x\) et vérifie chaque solution.`,
    "Communication",
    S`6. Explique ce qu'est une asymptote, à l'aide de \(f(x)=\frac1x\) et d'une table de valeurs.`,
    "7. Explique quelles fonctions de base sont paires, lesquelles sont impaires et lesquelles ne sont ni l'une ni l'autre, preuves à l'appui.",
    "Mise en application",
    "8. Un trajet de 480 km prend t heures à v km/h. Écris t en fonction de v, nomme la fonction de base et trouve t lorsque v = 96.",
    "9. Un jardin carré a une aire A. Écris le côté en fonction de A et trouve le côté lorsque A = 72.25 m².",
    "10. Donne une situation réelle que chacune des fonctions x² et |x| pourrait modéliser.",
    "Niveau difficile",
    S`11. Résous \(\frac1x=\frac x4\) et \(\frac1x=-\frac x4\). Explique la différence à l'aide de graphiques.`,
    S`12. Pour quelles valeurs de x a-t-on \(\sqrt x>x^2\)? Démontre ta réponse algébriquement.`,
  ] },
  { code: "1.4", id: asgId(1, 4), title: dv(T4), figs: {
      seg: planeDoc({ view: V6, segs: [{ pts: [[-5, -2], [-1, 4], [3, 1]] }], points: [P(-5, -2), P(-1, 4), { x: 3, y: 1, label: "(3, 1) vide", color: "red" }] }),
      ball: planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 70 }, curves: [{ f: (t) => -5 * t * t + 20 * t + 45, a: 0, b: 4.6, color: "violet" }], step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "h (m)" }) }, lines: [
    "Connaissance et compréhension",
    "1. Donne le domaine et l'image du graphique (points pleins aux extrémités, sauf si un point est indiqué vide). [[seg|Graphique pour la question 1]]",
    S`2. Donne le domaine de \(f(x)=\sqrt{x+8}\) et celui de \(g(x)=\frac{3}{x-7}\).`,
    S`3. Donne l'image de \(y=-4(x-2)^2+9\) et celle de \(y=|x+1|-6\).`,
    "Habiletés de la pensée",
    S`4. Trouve le domaine et l'image de \(f(x)=\sqrt{15-3x}+2\).`,
    S`5. Trouve l'image de \(f(x)=x^2+4x-1\) sur \(-5\le x\le1\).`,
    "Communication",
    "6. Explique comment lire le domaine et l'image sur un graphique, y compris les extrémités ouvertes et fermées.",
    "7. Explique pourquoi le domaine d'un modèle peut être plus petit que le domaine de son équation. Donne un exemple.",
    "Mise en application",
    S`8. La hauteur d'une balle est \(h(t)=-5t^2+20t+45\). Trouve quand elle touche le sol, sa hauteur maximale, ainsi qu'un domaine et une image qui ont du sens. [[ball|Graphique pour la question 8]]`,
    "9. Une clôture de 36 m entoure un rectangle. Écris son aire en fonction de sa largeur et donne le domaine et l'image.",
    "10. Un organisme de bienfaisance vend des bracelets à 4 dollars chacun, jusqu'à concurrence de 250 bracelets. Donne le domaine et l'image du revenu.",
    "Niveau difficile",
    S`11. Trouve le domaine de \(f(x)=\dfrac{\sqrt{x+5}}{x^2-x-6}\).`,
    S`12. Trouve l'image de \(y=\frac{10}{x^2+5}\) et explique pourquoi le maximum est atteint, mais pas 0.`,
  ] },
  { code: "1.5", id: asgId(1, 5), title: dv(T5), figs: {
      lin: planeDoc({ view: V8, lines: [{ m: 0.5, b: -2, color: "blue" }, { m: 1, b: 0, color: "gray", dash: true }], points: [P(0, -2), P(4, 0)] }),
      quad: planeDoc({ view: V8, curves: [{ f: (x) => (x + 2) ** 2 - 5, color: "blue" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [P(-2, -5)] }) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve la réciproque de \(f(x)=5x+2\) en inversant les étapes.`,
    S`2. \(f=\{(-2,3),(0,7),(4,15)\}\). Énumère \(f^{-1}\) et donne son domaine.`,
    "3. Esquisse la réciproque de la droite sur le même quadrillage. [[lin|Graphique pour la question 3]]",
    "Habiletés de la pensée",
    S`4. Trouve \(g^{-1}(x)\) pour \(g(x)=\frac{4-3x}{5}\) et vérifie avec une valeur.`,
    "5. La parabole a pour sommet (−2, −5). Explique pourquoi sa réciproque n'est pas une fonction, puis restreins son domaine et trouve la réciproque. [[quad|Graphique pour la question 5]]",
    "Communication",
    S`6. Explique la différence entre \(f^{-1}(x)\) et \(\frac{1}{f(x)}\) à l'aide d'un exemple.`,
    "7. Explique pourquoi le domaine et l'image d'une fonction et de sa réciproque échangent leurs rôles.",
    "Mise en application",
    S`8. Une représentante gagne \(E(s)=400+0.08s\) dollars pour des ventes \(s\). Trouve \(E^{-1}\) et le montant des ventes nécessaire pour gagner 1000 dollars.`,
    "9. Convertis des degrés Celsius en degrés Fahrenheit avec F = 1.8C + 32. Trouve la réciproque et convertis 98.6 °F.",
    S`10. \(f(x)=x^2+4\) pour \(x\ge0\). Trouve \(f^{-1}(x)\), puis \(f^{-1}(20)\).`,
    "Niveau difficile",
    S`11. \(f(x)=3(x-2)^2-6\) pour \(x\le2\). Trouve \(f^{-1}\) ainsi que son domaine et son image; vérifie avec un point.`,
    S`12. Trouve toutes les valeurs de \(a\) et de \(b\) pour lesquelles \(f(x)=ax+b\) est sa propre réciproque.`,
  ] },
  { code: "1.6", id: asgId(1, 6), title: dv(T6), figs: {
      v: planeDoc({ view: V8, curves: [{ f: (x) => -3 * Math.abs(x + 1) + 6, color: "amber" }], points: [P(-1, 6), P(0, 3)] }),
      g: grid() }, lines: [
    "Connaissance et compréhension",
    S`1. Décris les transformations de \(y=(x+3)^2-7\), de \(y=-\tfrac12\sqrt x\) et de \(y=\sqrt{-4x}\).`,
    S`2. Repère \(a\), \(k\), \(c\) et \(d\), puis transforme les points clés \((0,0)\), \((1,1)\), \((4,2)\), \((9,3)\) de \(\sqrt x\) par \(y=2\sqrt{3(x-1)}+3\) à l'aide de \((x,y)\to\left(\frac xk+c,\ ay+d\right)\).`,
    S`3. Donne les asymptotes de \(y=\frac{1}{3x+12}-2\). (Mets d'abord \(k\) en évidence.)`,
    "Habiletés de la pensée",
    "4. Écris l'équation du graphique en forme de V et décris ses transformations. [[v|Graphique pour la question 4]]",
    S`5. Esquisse \(y=-2(x-1)^2+4\) et \(y=\frac{2}{x-3}+1\) sur le quadrillage. [[g|Quadrillage pour la question 5]]`,
    "Communication",
    "6. Explique pourquoi y = f(x − 4) déplace le graphique vers la droite, et non vers la gauche, et pourquoi y = f(2x) comprime le graphique horizontalement par un facteur ½ au lieu de l'étirer par un facteur 2.",
    "7. Explique pourquoi l'ordre « étirer d'abord, translater ensuite » est important, à l'aide d'un point clé de y = (2(x − 3))², et pourquoi il faut factoriser 2x − 6 avant de lire c.",
    "Mise en application",
    S`8. L'eau d'une fontaine suit \(h(x)=-0.5(x-3)^2+4.5\) m. Trouve sa hauteur maximale et l'endroit où elle retombe (\(x>0\)).`,
    S`9. Un modèle avec racine carrée \(y=a\sqrt{x-c}+d\) commence en \((1,2)\) et passe par \((10,-4)\). Trouve-le.`,
    S`10. Écris l'équation de \(\frac1x\) étirée verticalement par un facteur 5, comprimée horizontalement par un facteur \(\tfrac12\), puis translatée de 2 vers la gauche et de 3 vers le bas. Donne son domaine, son image et ses asymptotes.`,
    "Niveau difficile",
    S`11. Une parabole a pour zéros \(-4\) et \(2\) et passe par \((0,-16)\). Écris-la sous la forme \(y=a(x-c)^2+d\).`,
    S`12. \(y=\sqrt{k(x-c)}+d\) a pour domaine \(x\le3\), pour image \(y\ge-1\), et passe par \((-5,3)\). Trouve \(k\), \(c\) et \(d\), décris dans l'ordre les transformations de \(\sqrt x\) et esquisse le graphique.`,
  ] },
  { code: "1.7", id: asgId(1, 7), title: dv(T7), figs: {
      f: planeDoc({ view: V8, segs: [{ pts: [[-4, 0], [-2, 4], [2, 2], [6, -2]] }], points: [P(-4, 0), P(-2, 4), P(2, 2), P(6, -2)] }),
      g: grid() }, lines: [
    "Connaissance et compréhension",
    S`1. Décris \(y=\sqrt{4x}\), \(y=|\tfrac12x|\) et \(y=\frac1{-x}\) comme des transformations de leurs fonctions de base.`,
    S`2. Transforme \((-6,2)\) et \((9,-3)\) par \(y=f(3x)\) et par \(y=f(-x)\).`,
    S`3. Donne le domaine de \(y=\sqrt{-5x}\).`,
    "Habiletés de la pensée",
    "4. Le graphique de y = f(x) est illustré. Esquisse y = f(2x) et y = f(−½x) sur le quadrillage. [[f|Graphique de y = f(x) pour la question 4]] [[g|Quadrillage pour la question 4]]",
    S`5. Montre que \(y=\sqrt{9x}\) est aussi un étirement vertical de \(\sqrt x\). \(y=(3x)^2\) est-elle aussi un étirement vertical de \(x^2\)? De quel facteur?`,
    "Communication",
    "6. Explique pourquoi y = f(kx) avec k = 2 comprime le graphique au lieu de l'étirer.",
    "7. Explique la différence entre y = −f(x) et y = f(−x) à l'aide d'une esquisse.",
    "Mise en application",
    "8. Le graphique d'une onde sonore est comprimé horizontalement par un facteur ⅓ lorsque la hauteur du son augmente. Si une crête était en x = 6 ms, où se trouve-t-elle maintenant?",
    S`9. \(f\) a pour zéros \(-6\) et \(4\) et pour sommet \((-1,-25)\). Trouve les zéros et le sommet de \(y=f(\tfrac12x)\).`,
    S`10. \(y=\sqrt{kx}\) passe par \((-2,4)\). Trouve \(k\) et donne le domaine.`,
    "Niveau difficile",
    S`11. \(f(x)=x^2+2x-15\). Trouve les zéros et le sommet de \(y=f(-3x)\) sans développer, puis vérifie en développant.`,
    S`12. Trouve toutes les valeurs de \(k\) pour lesquelles \(y=f(kx)\) envoie le zéro \(x=8\) de \(f\) sur \(x=-2\), et décris la transformation.`,
  ] },
  { code: "1.8", id: asgId(1, 8), title: dv(T8), figs: {
      g: grid({ xmin: -10, xmax: 10, ymin: -10, ymax: 10 }),
      red: planeDoc({ view: V8, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => -2 * Math.sqrt(-(x - 2)) + 4, b: 2, color: "red" }], points: [P(2, 4), P(1, 2)] }) }, lines: [
    "Connaissance et compréhension",
    S`1. Donne \(a,k,c,d\) et la règle de correspondance pour \(y=-3f(\tfrac12(x+4))-1\).`,
    S`2. Réécris \(y=\sqrt{2x+10}\) et \(y=(3x-9)^2\) sous la forme \(f(k(x-c))\).`,
    S`3. Transforme \((0,0),(1,1),(4,2)\) par \(y=3\sqrt{-(x-2)}+1\).`,
    "Habiletés de la pensée",
    S`4. Esquisse \(y=-\tfrac12|2(x-3)|+4\) et \(y=\frac{-1}{2(x+1)}+3\) sur le quadrillage. [[g|Quadrillage pour la question 4]]`,
    "5. La courbe rouge est une transformation de √x (en gris). Écris son équation et décris les transformations dans l'ordre. [[red|Graphique pour la question 5]]",
    "Communication",
    "6. Explique pourquoi il faut mettre k en évidence avant de lire c, à l'aide de y = f(2x − 8).",
    "7. Explique comment a < 0 et k < 0 modifient le domaine et l'image d'une racine carrée transformée.",
    "Mise en application",
    S`8. \(f\) a pour domaine \(-2\le x\le6\) et pour image \(1\le y\le5\). Trouve le domaine et l'image de \(g(x)=2f(-(x-1))-3\).`,
    "9. Une rampe suit y = √x. Conçois une rampe trois fois plus haute, deux fois moins longue, qui commence en (1, 0.5). Écris son équation et vérifie un point.",
    S`10. Écris l'équation : \(x^2\) comprimée verticalement par un facteur ½, étirée horizontalement par un facteur 3, réfléchie par rapport à l'axe des x, puis déplacée de 4 vers la droite et de 6 vers le haut. Trouve ses zéros.`,
    "Niveau difficile",
    S`11. \((2,-4)\) de \(y=f(x)\) devient \((5,8)\) par \(y=af(k(x-c))+d\) avec \(k=-\tfrac12\) et \(a=-2\). Trouve \(c\) et \(d\).`,
    S`12. \(f\) a pour domaine \(0\le x\le4\) et pour image \(-1\le y\le3\). Trouve \(a,k,c,d\) (avec \(k>0\)) pour que l'image ait pour domaine \(-6\le x\le2\) et pour image \(-5\le y\le3\).`,
  ] },
];
