// MTH1W-FR 6.1 — Les mégadonnées et leurs répercussions (miroir de ../mth1w-ch6/l6_1.mjs) : types de données,
// populations et échantillons, méthodes d'échantillonnage et biais, mégadonnées, graphiques trompeurs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { barChart } from "./figs6.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "6.1 Les mégadonnées et leurs répercussions";
export const ID = lessonId(6, 1);

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Les mégadonnées et leurs répercussions",
    overview: String.raw`Chaque passage d'une carte de transport en commun, chaque chanson que tu écoutes en continu et chaque capteur météo alimentent d'énormes ensembles de données que les entreprises et les gouvernements utilisent pour prendre des décisions. Pour bien utiliser les données — et pour repérer quand elles sont mal utilisées — tu dois savoir quel type de données tu as, d'où elles viennent, si l'échantillon est juste et si un graphique est honnête. Cette leçon développe ces habiletés.`,
    goals: [
      "classer des données comme qualitatives ou quantitatives, et les données quantitatives comme discrètes ou continues;",
      "distinguer une population d'un échantillon et décrire cinq méthodes d'échantillonnage;",
      "reconnaître le biais d'échantillonnage, le biais de réponse et le biais de non-réponse, et proposer des corrections;",
      "utiliser un échantillon juste pour estimer une valeur pour toute une population;",
      "décrire ce qui rend des données « massives » et discuter de la vie privée, du consentement et de l'équité;",
      "reconnaître les graphiques trompeurs.",
    ],
    curriculum: "D1.1 (grands ensembles de données et leurs répercussions), D1.2 (collecte de données; types de données; échantillonnage)",
    prior: [
      [String.raw`Combien font \(18\%\) de \(1200\)?`, String.raw`\(0.18\times1200=216\).`],
      [String.raw`Écris \(\frac{15}{60}\) sous forme de pourcentage.`, String.raw`\(25\%\).`],
      ["Ta taille est-elle un nombre entier de centimètres?", "Seulement si tu l'arrondis : la taille se mesure, donc elle peut prendre n'importe quelle valeur."],
    ],
    words: [
      ["Population", "tout le groupe que tu veux étudier", "tous les élèves de 9e année de l'Ontario"],
      ["Échantillon", "la partie de la population dont tu recueilles vraiment les données", "200 élèves"],
      ["Données qualitatives", "des étiquettes ou des catégories", "sport préféré"],
      ["Données discrètes", "des dénombrements — des valeurs entières", "nombre de frères et sœurs"],
      ["Données continues", "des mesures — n'importe quelle valeur dans un intervalle", "temps, taille, masse"],
      ["Biais", "une tendance systématique qui rend les résultats non représentatifs", "interroger seulement des athlètes"],
    ],
  }),

  section("📌 Types de données", String.raw`
  ${table(["Type", "Ce que c'est", "Exemples", "Bons graphiques"], [
    ["Qualitatives", "des noms ou des étiquettes; pas de calculs", "couleur des yeux, marque de téléphone, province", "diagramme à bandes, diagramme circulaire"],
    ["Quantitatives — discrètes", "des dénombrements; des nombres entiers", "buts marqués, personnes dans un ménage", "diagramme à bandes, diagramme à points"],
    ["Quantitatives — continues", "des mesures; n'importe quelle valeur dans un intervalle", "taille, température, temps", "histogramme, diagramme de quartiles, diagramme à ligne brisée"],
  ])}
  <p>Les <strong>données primaires</strong> sont recueillies par toi (un sondage, une expérience). Les <strong>données secondaires</strong> ont été recueillies par quelqu'un d'autre (Statistique Canada, un site Web sportif). Les données secondaires font gagner du temps, mais tu dois vérifier qui les a recueillies, comment et pourquoi.</p>`),

  section("📌 Populations, échantillons et méthodes d'échantillonnage", String.raw`
  <p>Étudier toute une population (un <strong>recensement</strong>) est souvent trop long ou trop coûteux; on étudie donc un <strong>échantillon</strong> et on s'en sert pour faire une estimation. Un bon échantillon est <strong>représentatif</strong> : il ressemble à la population pour les caractéristiques qui comptent.</p>
  ${table(["Méthode", "Comment elle fonctionne", "Juste?"], [
    ["Aléatoire simple", "chaque membre a la même chance d'être choisi (noms tirés d'un chapeau, nombres aléatoires)", "oui"],
    ["Systématique", "choisir chaque k-ième membre d'une liste, à partir d'un point de départ aléatoire", "oui, si la liste n'a pas de régularité"],
    ["Stratifiée", "diviser en groupes (années d'études, régions) et prendre un échantillon aléatoire dans chacun, proportionnellement", "oui — très bonne"],
    ["De commodité", "interroger les personnes faciles à joindre", "habituellement biaisée"],
    ["À réponse volontaire", "les gens choisissent de répondre (sondages en ligne, tribunes téléphoniques)", "habituellement biaisée : les opinions fortes répondent"],
  ])}
  ${keyIdea(String.raw`Si un échantillon est aléatoire et assez grand, sa proportion permet d'estimer celle de la population : \(\dfrac{\text{partie de l'échantillon}}{\text{taille de l'échantillon}}\approx\dfrac{\text{partie de la population}}{\text{taille de la population}}\). Un échantillon biaisé reste faux, peu importe sa taille.`)}
  <p>Essaie chaque méthode dans le laboratoire. Prélève 60 échantillons et observe où les estimations tombent par rapport à la vraie valeur (ligne verte).</p>`),

  widget("samplingLab"),

  section("📌 Le biais", String.raw`
  ${table(["Type de biais", "Cause", "Correction"], [
    ["Biais d'échantillonnage", "l'échantillon exclut une partie de la population (interroger seulement les élèves au gymnase)", "échantillonnage aléatoire ou stratifié"],
    ["Biais de réponse", "la question oriente les gens (« N'es-tu pas d'accord que… ? ») ou les réponses ne sont pas honnêtes", "formulation neutre; réponses anonymes"],
    ["Biais de non-réponse", "beaucoup de gens ne répondent pas, et ceux qui répondent sont différents", "faire un suivi; faciliter la réponse"],
    ["Biais de mesure", "l'outil ou la méthode est défectueux (une balance qui indique 1 kg de trop)", "vérifier et étalonner les instruments"],
  ])}`),

  section("📌 Les mégadonnées et leurs répercussions", String.raw`
  <p>On parle de <strong>mégadonnées</strong> quand les données sont trop volumineuses ou arrivent trop vite pour les outils ordinaires — on les décrit par les trois V : le <strong>volume</strong> (des quantités énormes), la <strong>vélocité</strong> (elles arrivent continuellement) et la <strong>variété</strong> (nombres, textes, images, positions). Exemples : les données de passage des cartes de transport utilisées pour planifier les trajets d'autobus, les dossiers hospitaliers utilisés pour suivre les éclosions, les historiques d'écoute utilisés pour recommander des émissions.</p>
  ${watchOut([
    "Vie privée : des données sur des personnes peuvent révéler leur identité, même quand les noms sont retirés.",
    "Consentement : les gens devraient savoir ce qui est recueilli et l'accepter.",
    "Équité : si les données passées sont biaisées, les décisions qui en découlent (prises par des personnes ou des algorithmes) peuvent répéter ce biais.",
    "Sécurité : les grands ensembles de données doivent être protégés contre les fuites.",
  ])}`),

  section("📌 Les graphiques trompeurs", String.raw`
  <p>Un graphique peut être exact et quand même tromper. Trucs fréquents : un axe vertical qui ne commence pas à zéro, des échelles irrégulières, des images dont l'aire exagère les différences, et des données omises.</p>
  ${barChart({ bars: [["Marque A", 52], ["Marque B", 48]], base: 46, top: 54, step: 2, ylabel: "% qui préfèrent" }, "L'axe commence à 46 %, alors la bande de la marque A semble trois fois plus haute — la vraie différence est 52 % contre 48 %.")}`),

  widget("misleadingGraph"),

  examples([
    ["Classer des données", String.raw`Un sondage demande : (a) ton code postal, (b) le nombre d'animaux de compagnie que tu as, (c) la durée de ton trajet, (d) ta pointure. Classe chaque donnée.`,
      [String.raw`<b>Définitions.</b> <i>Qualitative</i> : une étiquette ou une catégorie. <i>Quantitative discrète</i> : un dénombrement, avec des écarts entre les valeurs possibles. <i>Quantitative continue</i> : une mesure qui peut prendre n'importe quelle valeur dans un intervalle.`,
        String.raw`<b>(a) Code postal :</b> qualitative. Il contient des chiffres, mais c'est une étiquette : un « code postal moyen » n'a aucun sens.`,
        String.raw`<b>(b) Nombre d'animaux :</b> quantitative, discrète. C'est un dénombrement (\(0, 1, 2, \ldots\)); on ne peut pas avoir \(2.5\) animaux.`,
        String.raw`<b>(c) Durée du trajet :</b> quantitative, continue. Le temps se mesure et peut valoir \(12.37\) minutes ou n'importe quelle valeur.`,
        String.raw`<b>(d) Pointure :</b> quantitative, discrète en pratique. La longueur du pied est continue, mais les pointures ne sont données que par demi-points (\(8, 8.5, 9\)).`],
      "qualitative; discrète; continue; discrète"],
    ["Repérer la méthode et le biais", String.raw`Pour savoir ce que les élèves pensent de la cafétéria, un élève interroge les \(40\) premières personnes de la file d'attente de la cafétéria. Nomme la méthode, explique le biais et propose une meilleure méthode.`,
      [String.raw`<b>Définition.</b> Un échantillon est <i>biaisé</i> quand certains groupes de la population ont plus de chances d'être choisis que d'autres, de sorte que les résultats penchent d'un côté.`,
        String.raw`<b>Méthode :</b> échantillonnage de commodité. Les personnes interrogées étaient simplement les plus faciles à joindre.`,
        String.raw`<b>Biais :</b> tous ceux qui sont dans la file ont choisi d'acheter un repas à la cafétéria, donc ils l'aiment probablement plus que les élèves qui apportent leur dîner. Les résultats feront paraître la cafétéria plus populaire qu'elle ne l'est.`,
        String.raw`<b>Meilleure méthode :</b> un échantillon aléatoire stratifié. On prend la liste des élèves de chaque année d'études et on choisit au hasard des élèves de chaque année, proportionnellement à sa taille.`,
        String.raw`<b>Pourquoi c'est mieux :</b> chaque élève a une chance d'être choisi, qu'il fréquente la cafétéria ou non, et chaque année d'études est représentée.`],
      "échantillon de commodité; biaisé en faveur des clients de la cafétéria; utiliser un échantillonnage aléatoire stratifié"],
    ["Corriger une question orientée", String.raw`Reformule la question « Ne penses-tu pas que la journée d'école commence beaucoup trop tôt? » pour qu'elle ne cause pas de biais de réponse.`,
      [String.raw`<b>Définition.</b> Le <i>biais de réponse</i> se produit quand la formulation d'une question pousse les gens vers une réponse.`,
        String.raw`<b>Trouver les problèmes.</b> « Ne penses-tu pas… » s'attend à la réponse oui, et « beaucoup trop tôt » exprime l'opinion de la personne qui pose la question.`,
        String.raw`<b>Version neutre :</b> « Préférerais-tu que la journée d'école commence plus tôt, à la même heure ou plus tard? »`,
        String.raw`<b>Vérification :</b> la nouvelle question offre toutes les options et ne révèle pas ce que pense la personne qui la pose.`],
      "une question neutre qui offre toutes les options"],
    ["Estimer à partir d'un échantillon", String.raw`Un échantillon aléatoire de \(80\) des \(1120\) élèves d'une école révèle que \(28\) s'inscriraient à un club de programmation. Estime combien d'élèves de l'école s'y inscriraient.`,
      [String.raw`<b>Règle.</b> Pour un échantillon aléatoire, \[\text{estimation pour la population}=\text{proportion de l'échantillon}\times\text{taille de la population}\]`,
        String.raw`<b>Proportion de l'échantillon :</b> \(\frac{28}{80}=0.35\) (soit \(35\%\)).`,
        String.raw`<b>Estimation :</b> \(0.35\times1120=392\) élèves.`,
        String.raw`<b>Vérification avec une proportion :</b> l'école compte \(1120\div80=14\) fois plus d'élèves que l'échantillon, donc \(28\times14=392\) ✓.`],
      String.raw`environ \(392\) élèves`],
    ["Un graphique trompeur", String.raw`L'axe vertical d'un diagramme à bandes des ventes mensuelles commence à \(900\). La bande de janvier atteint \(950\) et celle de février atteint \(1000\). Combien de fois plus haute la bande de février semble-t-elle, et combien de fois plus grandes ses ventes sont-elles vraiment?`,
      [String.raw`<b>Idée clé.</b> Quand l'axe ne commence pas à 0, la hauteur visible d'une bande est la valeur <i>moins</i> le début de l'axe.`,
        String.raw`<b>Hauteurs visibles :</b> janvier \(950-900=50\), février \(1000-900=100\). Février semble donc \(100\div50=2\) fois plus haute.`,
        String.raw`<b>Comparaison réelle :</b> \(1000\div950\approx1.05\). Les ventes de février ne sont qu'environ \(5\%\) plus élevées.`,
        String.raw`<b>Correction :</b> commencer l'axe vertical à 0, ou indiquer clairement la coupure de l'axe.`],
      String.raw`semble \(2\) fois plus haute; en réalité environ \(1.05\) fois`,
      barChart({ bars: [["janv.", 950], ["févr.", 1000]], base: 900, top: 1020, step: 20, ylabel: "ventes", w: 300 })],
  ]),

  practice([
    q("type", "La température dans une serre, notée chaque heure, constitue…", choice(["des données quantitatives continues", "des données quantitatives discrètes", "des données qualitatives", "ce ne sont pas des données"], 0),
      "La température se compte-t-elle ou se mesure-t-elle?", ["Elle se mesure et peut prendre n'importe quelle valeur."], "continues"),
    q("méthode", "Une enseignante choisit chaque 5e nom de la liste de classe, en commençant par le 3e nom. C'est…", choice(["un échantillonnage systématique", "un échantillonnage aléatoire simple", "un échantillonnage stratifié", "un échantillonnage de commodité"], 0),
      "Chaque k-ième membre.", ["Un intervalle fixe à partir d'un point de départ, c'est systématique."], "systématique"),
    q("estimation", String.raw`Un échantillon aléatoire de \(50\) des \(900\) maisons d'une ville révèle que \(12\) ont des panneaux solaires. Estime le nombre de maisons de la ville qui ont des panneaux solaires.`, num(216),
      "Trouve d'abord la proportion de l'échantillon.", [String.raw`\(\frac{12}{50}=0.24\); \(0.24\times900=216\).`], String.raw`\(216\)`),
    q("biais", "Un sondage en ligne sur un site Web de sports demande si la ville devrait construire un nouveau stade. Le principal problème est…", choice(["le biais de réponse volontaire", "le biais de mesure", "l'échantillon est trop aléatoire", "il n'y a aucun problème"], 0),
      "Qui choisit de répondre?", ["Les amateurs de sport qui ont une opinion forte sont les plus susceptibles de répondre."], "biais de réponse volontaire"),
    q("trompeur", String.raw`L'axe d'un graphique commence à \(40\). La bande A atteint \(45\) et la bande B atteint \(60\). Combien de fois plus haute la bande B semble-t-elle?`, num(4),
      "Mesure la partie visible de chaque bande à partir de 40.", [String.raw`\(\frac{60-40}{45-40}=\frac{20}{5}=4\).`], String.raw`\(4\) fois`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi ne pas simplement interroger tout le monde?", "Un recensement est souvent trop coûteux ou trop long, et parfois impossible (tester chaque ampoule les détruirait toutes). Un échantillon bien choisi donne une bonne estimation pour beaucoup moins cher."],
      ["Un plus grand échantillon corrige-t-il le biais?", "Non. Un plus grand échantillon biaisé donne seulement une mauvaise réponse avec plus d'assurance. La taille réduit l'erreur due au hasard; de bonnes méthodes réduisent le biais."],
      ["Un code postal est-il une donnée quantitative?", "Non. Il contient des chiffres, mais c'est une étiquette : additionner des codes postaux ou en faire la moyenne n'a aucun sens, donc c'est une donnée qualitative."],
      ["Pourquoi l'échantillonnage stratifié fonctionne-t-il si bien?", "Il garantit que chaque groupe important (années d'études, régions) apparaît dans la bonne proportion, de sorte qu'aucun groupe n'est sur-représenté ou sous-représenté par accident."],
      ["Comment le retrait des noms peut-il ne pas protéger la vie privée?", "D'autres détails — code postal, date de naissance, école — peuvent être combinés pour identifier une seule personne. C'est pourquoi les ensembles de données doivent être traités avec soin."],
    ],
    summary: [
      "Données : qualitatives, ou quantitatives (dénombrements discrets, mesures continues).",
      "Échantillons justes : aléatoire simple, systématique, stratifié. Biaisés : de commodité, à réponse volontaire.",
      "Le biais vient de qui on interroge, de la façon dont on l'interroge et de qui répond.",
      "Les mégadonnées apportent puissance et responsabilité : vie privée, consentement, équité.",
      "Vérifie les axes et les échelles d'un graphique avant de te fier à une impression.",
    ],
    next: "La leçon 6.2 résume des données à une variable à l'aide de mesures de tendance centrale, de dispersion et de diagrammes de quartiles.",
  }),
];
