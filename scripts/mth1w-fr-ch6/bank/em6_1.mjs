// 6.1 Les mégadonnées et leurs répercussions — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch6/bank/em6_1.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barChartDoc, FIG } from "./fig.mjs";

export const E = [
  mc(`Le nombre de buts qu'une équipe marque dans un match constitue…`, "des données quantitatives discrètes", ["des données quantitatives continues", "des données qualitatives", "ce ne sont pas des données"], "Les buts se comptent."),
  mc(`Le genre musical préféré d'une personne constitue…`, "des données qualitatives", ["des données quantitatives discrètes", "des données quantitatives continues", "un échantillon"], "C'est une étiquette."),
  mc(`Le temps pour courir 100 m constitue…`, "des données quantitatives continues", ["des données quantitatives discrètes", "des données qualitatives", "une population"], "Le temps se mesure."),
  mc(`Tout le groupe que l'on veut étudier s'appelle…`, "la population", ["l'échantillon", "le recensement", "la variable"], "L'échantillon est la partie que l'on étudie."),
  mc(`Recueillir des données auprès de chaque membre de la population, c'est faire…`, "un recensement", ["un échantillon", "une question de sondage", "un biais"], "Tout le monde est inclus."),
  tf(`Dans un échantillon aléatoire simple, chaque membre de la population a la même chance d'être choisi.`, true, "C'est la définition."),
  mc(`Choisir chaque 20e nom d'une liste après un départ aléatoire, c'est…`, "un échantillonnage systématique", ["un échantillonnage aléatoire simple", "un échantillonnage stratifié", "un échantillonnage de commodité"], "Intervalle fixe."),
  mc(`Interroger les premières personnes que l'on croise dans le corridor, c'est…`, "un échantillonnage de commodité", ["un échantillonnage systématique", "un échantillonnage stratifié", "un recensement"], "Facile à joindre, pas aléatoire."),
  mc(`Les gens choisissent s'ils répondent à un sondage en ligne. C'est…`, "un échantillonnage à réponse volontaire", ["un échantillonnage stratifié", "un échantillonnage aléatoire simple", "un échantillonnage systématique"], "Les répondants se choisissent eux-mêmes."),
  tf(`Un plus grand échantillon élimine toujours le biais.`, false, "Une méthode biaisée reste biaisée, peu importe la taille."),
  num(`Dans un échantillon aléatoire de 50 élèves, 20 ont un animal de compagnie. Quel pourcentage est-ce?`, 40, "20 ÷ 50 = 0.4."),
  num(`Si 40 % des 800 élèves d'une école ont un animal de compagnie, combien d'élèves cela représente-t-il?`, 320, "0.4 × 800."),
  mc(`Une question de sondage qui pousse les gens vers une réponse cause…`, "un biais de réponse", ["un biais d'échantillonnage", "un biais de mesure", "aucun biais"], "La formulation oriente la réponse."),
  tf(`Un code postal est une donnée quantitative.`, false, "C'est une étiquette : une donnée qualitative."),
  mc(`Lequel est un exemple de mégadonnées?`, "des millions de passages de cartes de transport enregistrés chaque jour", ["les résultats de test de ta classe", "une liste des anniversaires de 10 amis", "une seule mesure météo"], "Volume énorme, arrivée continue."),
  mc(`Les données que tu recueilles toi-même s'appellent…`, "des données primaires", ["des données secondaires", "des mégadonnées", "des données biaisées"], "Les données secondaires viennent d'autres personnes."),
  tf(`Un diagramme à bandes dont l'axe vertical ne commence pas à zéro peut exagérer les différences.`, true, "Les axes tronqués font paraître grandes de petites différences."),
  mc(`Laquelle est une préoccupation liée à la vie privée avec les mégadonnées?`, "on peut identifier des personnes en combinant des détails", ["les données sont trop petites", "les graphiques sont trop colorés", "les nombres sont arrondis"], "Combiner le lieu, l'âge et l'école peut identifier quelqu'un."),
  num(`Une école compte 4 années d'études de 150 élèves chacune. Un échantillon stratifié de 40 élèves prend combien d'élèves dans chaque année d'études?`, 10, "Années égales : 40 ÷ 4."),
  mc(`Une balance qui indique toujours 0.5 kg de trop cause…`, "un biais de mesure", ["un biais d'échantillonnage", "un biais de réponse", "un biais volontaire"], "L'instrument est défectueux."),
];

export const M = [
  num(`Un échantillon aléatoire de 120 électeurs révèle que 66 appuient une proposition. Estime le nombre de partisans parmi 45 000 électeurs.`, 24750, "66/120 = 0.55; 0.55 × 45 000."),
  num(`Une école compte 360 élèves de 9e année et 240 de 10e année. Dans un échantillon stratifié de 50 élèves, combien d'élèves de 9e année faut-il choisir?`, 30, "360/600 = 0.6; 0.6 × 50."),
  num(`Pour sonder 40 de 1000 clients de façon systématique, il faut choisir un client sur combien?`, 25, "1000 ÷ 40."),
  ms(`Quelles méthodes d'échantillonnage sont généralement justes (non biaisées)? Choisis toutes les bonnes réponses.`, ["aléatoire simple", "systématique (liste sans régularité)", "aléatoire stratifiée", "de commodité"], [0, 1, 2], "Les échantillons de commodité sont habituellement biaisés."),
  mc(`Un sondage auprès des membres d'un centre de conditionnement physique sur la quantité d'exercice que font les gens de la ville est biaisé parce que…`, "les membres font plus d'exercice que la personne moyenne", ["l'échantillon est aléatoire", "la question est neutre", "les centres sont grands"], "Biais d'échantillonnage."),
  mc(`« N'es-tu pas d'accord que les devoirs sont trop longs? » pose problème parce que la question…`, "suggère la réponse", ["est trop courte", "utilise des nombres", "est anonyme"], "Une question orientée."),
  num(`L'axe d'un graphique commence à 50. La bande A atteint 55 et la bande B atteint 70. Combien de fois plus haute la bande B semble-t-elle?`, 4, "Hauteurs visibles 20 et 5.", barChartDoc({ bars: [["A", 55], ["B", 70]], base: 50, top: 72, step: 5 })),
  num(`L'axe d'un graphique commence à 50. La bande A atteint 55 et la bande B atteint 70. Quel est le vrai rapport B ÷ A, à 2 décimales près?`, 1.27, "70 ÷ 55 ≈ 1.27.", FIG.bars55, 0.006),
  tf(`Le biais de non-réponse peut se produire quand beaucoup de personnes choisies pour un sondage ne répondent pas.`, true, "Ceux qui répondent peuvent différer de ceux qui ne répondent pas."),
  mc(`Tester chaque ampoule d'une usine pour trouver la durée de vie moyenne est une mauvaise idée parce que…`, "le test détruit les ampoules", ["les ampoules sont des données qualitatives", "un recensement est toujours biaisé", "on ne peut pas trouver la moyenne"], "Un test destructif exige un échantillon."),
  num(`Un sondage révèle que 18 des 75 élèves de l'échantillon sont gauchers. Quel pourcentage est-ce?`, 24, "18 ÷ 75 = 0.24."),
  mc(`Les trois V des mégadonnées sont…`, "volume, vélocité, variété", ["valeur, vote, vue", "variable, vertex, volume", "vélocité, vision, vecteur"], "Taille, vitesse et différents types."),
  mc(`Quelle question est la plus neutre?`, "Que préfères-tu : une heure de début plus tardive ou plus hâtive?", ["Une heure de début plus tardive ne serait-elle pas mieux?", "Es-tu d'accord qu'un début hâtif est mauvais pour la santé?", "Pourquoi détestes-tu les matins?"], "Elle offre des options sans orienter."),
  ms(`Lesquelles sont des données continues? Choisis toutes les bonnes réponses.`, ["la durée d'une chanson", "le nombre de chansons d'une liste de lecture", "la masse d'un colis", "le code postal d'un colis"], [0, 2], "Les mesures sont continues."),
  num(`On prélève un échantillon stratifié de 60 personnes dans des régions de 2000, 3000 et 1000 habitants. Combien viennent de la région de 3000 habitants?`, 30, "3000/6000 = 0.5."),
  tf(`Les sondages anonymes peuvent réduire le biais de réponse pour les questions délicates.`, true, "Les gens répondent plus honnêtement quand ils ne sont pas identifiés."),
  mc(`Un algorithme entraîné sur des données d'embauche passées peut être injuste parce que…`, "les décisions passées ont pu être biaisées", ["les ordinateurs ne peuvent pas utiliser de données", "les ensembles de données sont toujours petits", "les algorithmes ignorent les données"], "Le biais des données peut se répéter."),
  num(`Un échantillon aléatoire de 200 téléphones tirés d'une production de 25 000 en compte 3 défectueux. Estime le nombre de téléphones défectueux dans la production.`, 375, "3/200 = 0.015; × 25 000."),
  mc(`Un sondage téléphonique à la radio reçoit 2000 appels, dont 80 % contre une nouvelle loi. Est-ce convaincant?`, "non — la réponse volontaire est biaisée", ["oui — 2000, c'est un grand échantillon", "oui — 80 %, c'est une nette majorité", "non — 2000, c'est trop peu de gens"], "La taille ne peut pas corriger une méthode biaisée."),
  mc(`Laquelle est une donnée secondaire?`, "des chiffres de population téléchargés de Statistique Canada", ["un sondage que tu fais passer à ta classe", "des températures que tu mesures chaque matin", "les résultats de ta propre expérience"], "Recueillies par quelqu'un d'autre."),
];
