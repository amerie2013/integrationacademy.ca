// 6.4 Le processus de modélisation mathématique — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch6/bank/em6_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterDoc, FIG } from "./fig.mjs";

export const E = [
  mc(`La première étape du processus de modélisation consiste à…`, "comprendre le problème", ["raffiner le modèle", "rédiger le rapport final", "tracer un graphique"], "Il faut d'abord savoir ce qu'on demande."),
  mc(`Quelque chose qu'on tient pour vrai afin de rendre un problème abordable est…`, "une hypothèse", ["une variable", "une valeur aberrante", "une conclusion"], "p. ex. le prix reste le même."),
  mc(`Le tableau 4, 7, 10, 13 (pas égaux en x) suggère…`, "un modèle linéaire", ["un modèle exponentiel", "un modèle quadratique", "aucun modèle"], "Différence constante de 3."),
  mc(`Le tableau 3, 6, 12, 24 (pas égaux en x) suggère…`, "un modèle exponentiel", ["un modèle linéaire", "un modèle quadratique", "un modèle constant"], "Rapport constant de 2."),
  num(`Un modèle est C = 15n + 40. Trouve C quand n = 6.`, 130, "90 + 40."),
  num(`Un modèle est P = 100(2)^t. Trouve P quand t = 3.`, 800, "100 × 8."),
  tf(`Après avoir construit un modèle, tu devrais vérifier si ses réponses ont du sens.`, true, "Interpréter et vérifier."),
  num(`Une plante de 5 cm pousse de 2 cm par semaine. Quelle hauteur le modèle donne-t-il après 8 semaines?`, 21, "5 + 2(8)."),
  mc(`Améliorer un modèle après l'avoir testé s'appelle…`, "raffiner", ["échantillonner", "interpoler", "arrondir"], "Raffiner et communiquer."),
  num(`Un taxi demande 3.50 dollars plus 2 dollars par km. Combien coûte un trajet de 9 km (dollars)?`, 21.5, "3.50 + 18."),
  tf(`Chaque modèle fonctionne pour toutes les valeurs d'entrée possibles.`, false, "Les modèles ont un domaine limité."),
  num(`Quelles sont les premières différences de 20, 17, 14, 11? (Donne la différence commune.)`, -3, "Chaque terme est 3 de moins."),
  num(`Quel est le rapport commun de 1000, 500, 250, 125?`, 0.5, "Chaque terme est la moitié du précédent."),
  mc(`Un modèle prédit que la hauteur d'une bougie sera de −4 cm. Cela signifie que…`, "le modèle est utilisé à l'extérieur de son domaine", ["la bougie a grandi", "le modèle est parfait", "les données sont fausses"], "Une hauteur ne peut pas être négative."),
  num(`Un compte d'épargne commence à 200 dollars et tu ajoutes 25 dollars chaque semaine. Combien y a-t-il après 10 semaines (dollars)?`, 450, "200 + 250."),
  mc(`Laquelle est une variable dans un modèle du coût d'une fête?`, "le nombre d'invités", ["le mot « fête »", "la date où le modèle a été écrit", "la couleur des invitations"], "Une quantité qui change."),
  num(`Une population de 50 double chaque année. Quelle est sa taille après 4 ans?`, 800, "50 × 2⁴."),
  tf(`Des deuxièmes différences constantes suggèrent un modèle quadratique.`, true, "p. ex. 1, 4, 9, 16."),
  num(`Un téléphone perd 8 % de sa pile par heure à partir de 100 %. Que prédit un modèle linéaire après 5 heures (%)?`, 60, "100 − 40."),
  mc(`La dernière étape de la modélisation comprend habituellement…`, "la communication du résultat et de ses limites", ["le choix de la question", "la collecte des premières données", "l'oubli des hypothèses"], "On rapporte ce qu'on a trouvé et sa fiabilité."),
];

export const M = [
  num(`Une piscine contient 2000 L et se remplit à 450 L/h. Combien d'heures faut-il pour atteindre 11 000 L?`, 20, "9000 ÷ 450."),
  num(`Une voiture valant 24 000 dollars perd 15 % de sa valeur par année. Combien vaut-elle après 2 ans (dollars)?`, 17340, "24 000 × 0.85²."),
  num(`Bactéries : 300 à t = 0, 900 à t = 1, 2700 à t = 2. Prédis le nombre à t = 4.`, 24300, "Rapport 3 : 300 × 3⁴."),
  mc(`Quel modèle correspond à x : 0, 1, 2, 3 et y : 2, 3, 6, 11?`, "quadratique", ["linéaire", "exponentiel", "aucun"], "Premières différences 1, 3, 5; deuxièmes différences 2, 2."),
  num(`Un centre de conditionnement physique demande des frais d'inscription plus des frais mensuels. 3 mois coûtent 125 dollars et 7 mois coûtent 225 dollars. Quels sont les frais mensuels (dollars)?`, 25, "100 ÷ 4."),
  num(`Un centre de conditionnement physique demande des frais d'inscription plus des frais mensuels. 3 mois coûtent 125 dollars et 7 mois coûtent 225 dollars. Quels sont les frais d'inscription (dollars)?`, 50, "Frais mensuels 100 ÷ 4 = 25; 125 − 75."),
  ms(`Un modèle prédit les ventes de crème glacée du mois prochain à partir de celles de ce mois-ci. Quelles hypothèses sont raisonnables? Choisis toutes les bonnes réponses.`, ["la météo sera semblable", "les prix ne changeront pas beaucoup", "le magasin reste ouvert aux mêmes heures", "les ventes seront négatives"], [0, 1, 2], "Des ventes négatives sont impossibles."),
  num(`Le modèle T = 22 + 70(0.9)^t donne la température (°C) d'une boisson après t minutes. Trouve T pour t = 0.`, 92, "22 + 70."),
  num(`Avec T = 22 + 70(0.9)^t, de quelle température la boisson s'approche-t-elle après très longtemps (°C)?`, 22, "(0.9)^t → 0."),
  mc(`Un modèle linéaire pour une boisson qui refroidit prédit 5 °C après une heure dans une pièce à 21 °C. Tu devrais…`, "raffiner le modèle pour qu'il se stabilise à la température de la pièce", ["accepter la prédiction", "utiliser plus de décimales", "changer la température de la pièce"], "La prédiction est physiquement impossible."),
  num(`Une école utilise 3 autobus pour chaque groupe de 120 élèves lors d'une sortie. Combien d'autobus faut-il pour 410 élèves?`, 11, "410 ÷ 40 = 10.25 → arrondir vers le haut à 11."),
  tf(`Si les rapports entre les termes consécutifs sont constants, les données sont mieux modélisées par une relation linéaire.`, false, "Rapports constants → exponentiel."),
  num(`Estime la valeur de y pour x = 8 à l'aide de la droite illustrée.`, 52, "La droite est y = 6x + 4.", scatterDoc({ pts: [[1, 9], [2, 17], [3, 21], [4, 29], [5, 33], [6, 41]], view: { xmin: 0, xmax: 10, ymin: 0, ymax: 60 }, step: { x: 1, y: 10 }, line: { m: 6, b: 4 } })),
  mc(`Les données du graphique vont seulement jusqu'à x = 6. Utiliser la droite pour prédire y pour x = 8 est…`, "une extrapolation", ["une interpolation", "un recensement", "une hypothèse"], "Les données vont seulement jusqu'à x = 6.", FIG.predict),
  num(`Une population compte 5000 personnes et augmente de 4 % par année. Estime-la après 3 ans (à l'unité près).`, 5624, "5000 × 1.04³ ≈ 5624.3."),
  num(`Un modèle du profit d'une campagne de financement est P = 6n − 150 (n articles vendus). Combien d'articles faut-il vendre pour atteindre le seuil de rentabilité?`, 25, "6n = 150."),
  mc(`Deux modèles correspondent aussi bien à quelques points de données. Pour choisir entre eux, tu devrais…`, "recueillir plus de données, surtout à l'extérieur de l'étendue actuelle", ["choisir celui qui a les plus grands nombres", "faire la moyenne des deux équations", "toujours choisir le modèle linéaire"], "Plus de données révèlent quelle tendance se poursuit."),
  num(`Un ménage utilise 12 L d'eau par minute sous la douche; 4 personnes prennent une douche de 6 minutes chaque jour. Selon ce modèle, combien de litres par semaine?`, 2016, "12 × 6 × 4 × 7."),
  num(`Un modèle exponentiel est y = a(1.5)^x avec y = 135 pour x = 2. Trouve a.`, 60, "135 ÷ 2.25."),
  ms(`Quels signes indiquent qu'un modèle doit être raffiné? Choisis toutes les bonnes réponses.`, ["des prédictions loin des nouvelles données", "des valeurs impossibles comme des longueurs négatives", "des erreurs qui augmentent quand x augmente", "il utilise une variable"], [0, 1, 2], "Chaque modèle utilise des variables."),
];
