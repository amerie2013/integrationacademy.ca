// 6.2 Données à une variable et statistiques — 20 questions difficiles (miroir de ../../mth1w-ch6/bank/h6_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { boxPlotDoc, histogramDoc, FIG } from "./fig.mjs";

export const TOPIC = "6.2 Données à une variable et statistiques";
export const Q = [
  num(`Sept nombres entiers ont une médiane de 12, un mode unique de 15, une étendue de 10 et une moyenne de 12. Le plus petit est 6. Quelle est la somme des sept nombres?`, 84, "7 × 12 = 84 (p. ex. 6, 9, 11, 12, 15, 15, 16)."),
  num(`La moyenne de 8 nombres est 20. Quand on ajoute un neuvième nombre, la moyenne devient 22. Quel est le neuvième nombre?`, 38, "9 × 22 − 8 × 20 = 198 − 160."),
  num(`Temps (s) : 41, 44, 45, 47, 48, 50, 52, 55, 79. Trouve la borne supérieure des valeurs aberrantes.`, 64.75, "Médiane 48; Q1 = 44.5, Q3 = 53.5; EI 9; 53.5 + 13.5."),
  num(`Temps (s) : 41, 44, 45, 47, 48, 50, 52, 55, 79. La valeur 79 est aberrante. Trouve la moyenne sans la valeur aberrante (à 2 décimales près).`, 47.75, "382 ÷ 8.", null, 0.006),
  num(`Estime la moyenne à partir de l'histogramme (milieux des intervalles).`, 167, "(145·2 + 155·8 + 165·15 + 175·10 + 185·5) ÷ 40 = 6680 ÷ 40.", histogramDoc({ bins: [[140, 150, 2], [150, 160, 8], [160, 170, 15], [170, 180, 10], [180, 190, 5]], xlabel: "taille (cm)" })),
  mc(`L'histogramme montre la taille de 40 élèves. Dans quel intervalle se trouve la médiane?`, "160–170 cm", ["150–160 cm", "170–180 cm", "140–150 cm"], "Cumul 2, 10, 25 : les 20e et 21e valeurs sont dans 160–170.", FIG.hist40),
  num(`Chaque résultat d'un ensemble est multiplié par 1.2. L'EI initial était 15. Trouve le nouvel EI.`, 18, "Multiplier les valeurs multiplie la dispersion par 1.2."),
  num(`Un ensemble de données a une moyenne de 40 et 25 valeurs. On a entré 90 par erreur au lieu de 40. Trouve la moyenne correcte.`, 38, "Somme 1000 − 50 = 950; 950 ÷ 25."),
  ms(`Deux diagrammes de quartiles : A (10, 20, 30, 40, 50) et B (25, 28, 30, 32, 35). Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["ils ont la même médiane", "B a le plus petit EI", "A a la plus grande étendue", "B a une tendance centrale plus élevée"], [0, 1, 2], "Médianes 30 et 30; EI 20 contre 4; étendues 40 contre 10."),
  num(`Cinq nombres ont une moyenne de 10 et une médiane de 9. Les deux plus grands sont 14 et 15. Trouve la somme des deux plus petits.`, 12, "Somme 50 − 9 − 14 − 15."),
  tf(`Ajouter une nouvelle valeur égale à la moyenne actuelle ne change pas la moyenne.`, true, "Le total augmente d'exactement une moyenne."),
  tf(`Ajouter une nouvelle valeur égale à la médiane actuelle ne change jamais la médiane.`, true, "La valeur du milieu reste la même (l'ordre autour d'elle est conservé)."),
  num(`Un tableau de fréquences de buts : 0 but : 3 matchs, 1 : 5, 2 : 7, 3 : 4, 4 : 1. Trouve le nombre moyen de buts par match.`, 1.75, "(0 + 5 + 14 + 12 + 4) ÷ 20 = 35 ÷ 20."),
  num(`Un tableau de fréquences de buts : 0 but : 3 matchs, 1 : 5, 2 : 7, 3 : 4, 4 : 1. Trouve le nombre médian de buts.`, 2, "10e et 11e matchs : cumul 3, 8, 15 → les deux valent 2."),
  mc(`Une enseignante indique que la « moyenne » de la classe est 74, alors que la plupart des élèves ont obtenu entre 80 et 90. Qu'est-ce qui explique le mieux cette situation?`, "quelques résultats très faibles tirent la moyenne vers le bas", ["la médiane doit aussi être 74", "les données sont symétriques", "le mode est 74"], "Les valeurs aberrantes faibles font baisser la moyenne."),
  num(`Lis Q1 sur le diagramme de quartiles et trouve la borne inférieure des valeurs aberrantes.`, 7, "Q1 = 22, Q3 = 32, EI 10 : 22 − 15 = 7.", boxPlotDoc({ five: [10, 22, 27, 32, 38], lo: 6, hi: 42, step: 4, showValues: true })),
  num(`Douze valeurs ont une moyenne de 30. Leur somme après le retrait de la plus grande valeur est 300. Quelle était la plus grande valeur?`, 60, "360 − 300."),
  num(`La classe A (25 élèves) a une moyenne de 68. Avec la classe B, la moyenne des 55 élèves est 74. Trouve la moyenne de la classe B.`, 79, "55 × 74 = 4070; 4070 − 1700 = 2370; 2370 ÷ 30."),
  mc(`Quel changement augmentera l'EI mais pas l'étendue?`, "déplacer les valeurs près de Q1 vers le bas et celles près de Q3 vers le haut, sans dépasser le min ni le max", ["augmenter le maximum", "ajouter 10 à chaque valeur", "retirer le minimum"], "Étaler la moitié centrale, garder les extrêmes."),
  num(`Données : 5, 7, 8, 8, 9, 10, 12, 13, 14, x. La moyenne est 10. Trouve x.`, 14, "La somme doit être 100; 86 + x = 100."),
];
