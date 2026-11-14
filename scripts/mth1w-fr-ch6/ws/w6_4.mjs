// Fiche 6.4 — Le processus de modélisation mathématique (édition de l'enseignant; miroir de ../../mth1w-ch6/ws/w6_4.mjs)
import { scatterT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Énoncer des hypothèses", q: "Estime combien de litres d'eau ton ménage utilise pour les douches en une année. Énumère tes hypothèses.",
    steps: [String.raw`\textbf{Comprendre :} le but est le nombre de litres par année pour les douches.`,
      String.raw`\textbf{Hypothèses :} 4 personnes, une douche de 8 minutes chacune par jour, débit de la pomme de douche de 9 L/min.`,
      String.raw`\textbf{Modèle :} litres par jour $=$ personnes $\times$ minutes $\times$ débit $=4\times8\times9=288$ L.`,
      String.raw`\textbf{Par année :} $288\times365=105\,120$ L. Si on change une hypothèse, la réponse change.`], ans: "environ 105 000 L selon ces hypothèses" },
  { title: "Modèle linéaire à partir d'un taux", q: String.raw`Un taxi demande un tarif de base de $4.50$~\$ plus $1.85$~\$ par km. Écris un modèle et trouve le coût d'un trajet de $12$ km.`,
    steps: [String.raw`\textbf{Modèle linéaire :} coût $=$ (taux) $\times$ (distance) $+$ (montant fixe) : $C=1.85d+4.50$.`,
      String.raw`\textbf{Remplacer $d=12$ :} $1.85\times12=22.20$, puis $22.20+4.50=26.70$.`], ans: "26.70 dollars" },
  { title: "Modèle linéaire à partir de données", q: String.raw`La hauteur d'une bougie (cm) aux temps $0, 1, 2, 3$ h est $24, 21.5, 19, 16.5$. Construis un modèle et trouve quand elle sera entièrement consumée.`,
    steps: [String.raw`\textbf{Vérifier :} différences $21.5-24=-2.5$, puis $-2.5$, $-2.5$ : constantes, donc linéaire.`,
      String.raw`\textbf{Modèle :} départ $24$, taux $-2.5$ cm/h : $H=24-2.5t$.`,
      String.raw`\textbf{Consumée} quand $H=0$ : $2.5t=24$, donc $t=9.6$ h ($9$ h $36$ min, puisque $0.6\times60=36$).`], ans: String.raw`$H=24-2.5t$; environ $9.6$ h` },
  { title: "Modèle exponentiel à partir de données", q: String.raw`Une culture de bactéries compte $400$, $600$, $900$, $1350$ cellules après $0, 1, 2, 3$ heures. Construis un modèle et prédis le nombre après $6$ heures.`,
    steps: [String.raw`\textbf{Vérifier :} rapports $\frac{600}{400}=\frac{900}{600}=\frac{1350}{900}=1.5$ : constants, donc exponentiel.`,
      String.raw`\textbf{Modèle} $N=a(b)^t$ avec départ $a=400$ et rapport $b=1.5$ : $N=400(1.5)^t$.`,
      String.raw`\textbf{Prédire :} $N(6)=400(1.5)^6=400(11.390625)\approx4556$.`], ans: String.raw`$N=400(1.5)^t$; environ $4556$` },
  { title: "Choisir entre des modèles", q: String.raw`Quel modèle correspond à $x : 0, 1, 2, 3, 4$ et $y : 3, 5, 11, 21, 35$ : linéaire, quadratique ou exponentiel?`,
    steps: [String.raw`\textbf{Règles :} premières différences constantes $\Rightarrow$ linéaire; deuxièmes différences constantes $\Rightarrow$ quadratique; rapports constants $\Rightarrow$ exponentiel.`,
      String.raw`\textbf{Premières différences :} $2, 6, 10, 14$ : pas constantes.`,
      String.raw`\textbf{Deuxièmes différences :} $4, 4, 4$ : constantes, donc quadratique.`,
      String.raw`\textbf{Rapports} $\frac53\approx1.67$, $\frac{11}{5}=2.2$ : pas constants, donc pas exponentiel.`], ans: "quadratique" },
  { title: "Tester un modèle", q: String.raw`Un modèle de la hauteur d'une plante est $h=2.8w+5$ (cm, semaines). Hauteurs mesurées : semaine $3$ : $13.2$ cm; semaine $6$ : $22.0$ cm; semaine $10$ : $28.5$ cm. Teste le modèle.`,
    steps: [String.raw`\textbf{Prédictions :} $2.8(3)+5=13.4$; $2.8(6)+5=21.8$; $2.8(10)+5=33.0$ cm.`,
      String.raw`\textbf{Erreurs} (mesuré $-$ prédit) : $-0.2$, $+0.2$, $-4.5$ cm.`,
      "Les semaines 3 et 6 sont proches; la semaine 10 est trop élevée de 4.5 cm : la croissance ralentit, donc le modèle linéaire ne fonctionne que pour les premières semaines."], ans: "bon au début, faible plus tard --- à raffiner" },
  { title: "Raffiner un modèle", q: String.raw`Un modèle de forfait téléphonique $C=0.10m$ (dollars, minutes) a donné une facture de $30$~\$ pour $300$ min, mais la vraie facture était de $45$~\$. L'entreprise demande des frais mensuels. Raffine le modèle.`,
    steps: [String.raw`\textbf{Prédiction du modèle :} $0.10\times300=30$ dollars.`,
      String.raw`\textbf{Différence :} $45-30=15$, les frais mensuels fixes.`,
      String.raw`\textbf{Modèle raffiné :} $C=0.10m+15$. \textbf{Vérification :} $0.10(300)+15=45$ \checkmark`], ans: String.raw`$C=0.10m+15$` },
  { title: "Modéliser avec un graphique", q: "Les données d'une tarte qui refroidit (°C selon les minutes) sont représentées avec un modèle. Commente l'ajustement.",
    fig: scatterT({ pts: [[0, 180], [5, 140], [10, 110], [15, 88], [20, 72], [30, 50], [40, 38]], view: { xmin: 0, xmax: 45, ymin: 0, ymax: 200 }, step: { x: 5, y: 20 }, xlabel: "temps (min)", ylabel: "T (°C)", curve: (t) => 22 + 158 * 0.95 ** t }, 6),
    steps: [String.raw`\textbf{Forme :} la courbe descend rapidement au début, puis plus lentement, comme les données.`,
      String.raw`\textbf{À long terme :} elle se stabilise vers 22 °C (la température de la pièce), ce qui a du sens physiquement.`,
      String.raw`\textbf{Tester un point :} $t=20$ : $22+158(0.95)^{20}\approx22+56.6\approx78.6$ °C contre $72$ mesuré, donc il est un peu trop élevé au milieu.`,
      "Une décroissance exponentielle vers la température de la pièce est un bon modèle; un taux un peu plus rapide conviendrait mieux."], ans: "un bon ajustement avec une valeur à long terme sensée (un peu élevé au milieu)" },
  { title: "Communiquer un résultat", q: String.raw`À l'aide de $N=400(1.5)^t$ de l'exemple 4, rédige un court rapport qui prédit quand la culture dépassera $10\,000$ cellules.`,
    steps: [String.raw`\textbf{Essayer des valeurs :} $t=7$ : $400(1.5)^7\approx6834$; $t=8$ : $400(1.5)^8\approx10\,252$.`,
      String.raw`\textbf{Donc} on dépasse $10\,000$ entre $t=7$ et $t=8$.`,
      "Rapport : « Si la croissance se maintient à 50 % par heure, la culture dépassera 10 000 cellules entre 7 et 8 heures. La croissance ralentira quand les nutriments s'épuiseront, donc c'est une estimation maximale. »"], ans: "entre 7 et 8 heures, avec la limite énoncée" },
];

const PROBLEMS = [
  { level: 1, q: "Place les étapes de la modélisation dans l'ordre : interpréter et vérifier; construire le modèle; comprendre le problème; raffiner et communiquer; formuler des hypothèses; analyser.", recap: "Ordonner les étapes.", ans: "comprendre, hypothèses, construire, analyser, interpréter/vérifier, raffiner/communiquer" },
  { level: 1, q: String.raw`Décide si chaque tableau est linéaire ou exponentiel : (a) $10, 13, 16, 19$ (b) $10, 20, 40, 80$ (c) $81, 27, 9, 3$.`, recap: "Linéaire ou exponentiel?", ans: "(a) linéaire (b) exponentiel (c) exponentiel" },
  { level: 1, q: String.raw`Évalue $250(1.08)^3$ à l'unité près.`, recap: "250(1.08)³.", ans: "$315$" },
  { level: 2, q: String.raw`Une piscine contient $45\,000$ L et se remplit à $750$ L/h. Elle contient déjà $6000$ L. Écris un modèle et trouve combien de temps il faut pour la remplir.`, recap: "Remplir une piscine.", ans: String.raw`$V=750t+6000$; $52$ h` },
  { level: 2, q: String.raw`Une voiture valant $28\,000$~\$ perd $15\%$ de sa valeur chaque année. Écris un modèle et trouve sa valeur après $4$ ans.`, recap: "Dépréciation d'une voiture.", ans: String.raw`$V=28\,000(0.85)^t$; $\approx14\,616$~\$` },
  { level: 2, q: String.raw`Un centre de conditionnement physique demande $40$~\$ pour l'inscription et $25$~\$ par mois. Après combien de mois un membre aura-t-il payé $340$~\$?`, recap: "Abonnement au centre.", ans: "12 mois" },
  { level: 2, q: "Un modèle prédit que la population d'une ville doublera tous les 20 ans, indéfiniment. Donne deux raisons pour lesquelles cette hypothèse pourrait échouer.", recap: "Hypothèse sur la population.", ans: "terrain, logements, eau et emplois limités; les taux de natalité et de migration changent" },
  { level: 2, q: String.raw`Estime combien de fois ton cœur bat en une année. Énonce tes hypothèses et montre ton modèle.`, recap: "Battements de cœur en une année.", ans: String.raw`p. ex. $70$ battements/min : $70\times60\times24\times365\approx36.8$ millions` },
  { level: 3, space: 5, q: String.raw`Une campagne de financement scolaire vend des t-shirts. À $15$~\$ chacun, on prévoit en vendre $200$; pour chaque hausse de $1$~\$ du prix, on en vend $10$ de moins.
(a) Écris des expressions pour le nombre vendu et le revenu au prix $15+x$.
(b) Fais un tableau pour $x=0, 2, 4, 6, 8$ et trouve le meilleur prix.
(c) Énonce une hypothèse du modèle.`, recap: "Revenu des t-shirts.", ans: String.raw`(a) $200-10x$; $R=(15+x)(200-10x)$ (b) $3000, 3060, 3040, 2940, 2760$ : meilleur prix près de $17$~\$ ($x=2$; optimum exact $x=2.5$) (c) la demande baisse uniformément de 10 par dollar` },
  { level: 3, space: 5, q: String.raw`Données d'une tasse de thé qui refroidit (°C) : $(0, 95)$, $(5, 70)$, $(10, 54)$, $(15, 43)$, $(20, 36)$; température de la pièce $21$ °C.
(a) Explique pourquoi un modèle linéaire ne convient pas.
(b) Montre que $T-21$ est multiplié à peu près par le même nombre toutes les 5 minutes.
(c) Écris un modèle exponentiel et prédis la température à $30$ min.`, recap: "Modèle du thé qui refroidit.", ans: String.raw`(a) les différences $-25,-16,-11,-7$ diminuent (b) $74, 49, 33, 22, 15$ : rapport $\approx0.67$ (c) $T=21+74(0.67)^{t/5}$; $t=30$ : $\approx28$ °C` },
  { level: 3, space: 5, q: String.raw`Un magasin vend $3600$ cartes de hockey la semaine 1, et les ventes baissent de $20\%$ chaque semaine.
(a) Construis un modèle.
(b) Pendant quelle semaine les ventes descendent-elles sous $1000$ pour la première fois?
(c) Estime les ventes totales des $5$ premières semaines.`, recap: "Baisse des ventes de cartes.", ans: String.raw`(a) $S=3600(0.8)^{w-1}$ (b) semaine 7 ($\approx944$) (c) $3600+2880+2304+1843+1475\approx12\,102$` },
  { level: 3, space: 5, q: "Choisis une question qui t'intéresse (par exemple : Combien d'argent vais-je économiser cette année en apportant mon dîner de la maison?). Réalise les six étapes du processus de modélisation et rédige un court rapport.", recap: "Ta propre question de modélisation.", ans: "les réponses varient; doivent montrer des hypothèses, un modèle, un calcul, une vérification et un raffinement" },
  { level: 3, space: 5, q: String.raw`Deux modèles correspondent aux données $(0, 50)$, $(1, 60)$, $(2, 72)$ : modèle A $y=11x+49.7$ et modèle B $y=50(1.2)^x$. Prédis $y$ pour $x=10$ avec chacun. Quelles données supplémentaires t'aideraient à décider quel modèle est le meilleur?`, recap: "Comparer deux modèles.", ans: String.raw`A : $159.7$; B : $\approx309.6$; recueillir plus de données pour de plus grandes valeurs de $x$ afin de voir si la croissance est constante ou s'accélère` },
];

export const WS = {
  code: "6.4",
  title: "Le processus de modélisation mathématique",
  bigideas: String.raw`La modélisation mathématique transforme une question réelle en mathématiques, puis revient à la réalité : comprendre le problème, formuler des hypothèses et choisir les variables, construire un modèle, l'analyser, interpréter et vérifier le résultat par rapport à la réalité, puis raffiner et communiquer. Des différences constantes suggèrent un modèle linéaire; des rapports constants suggèrent un modèle exponentiel. Chaque modèle repose sur des hypothèses et a un domaine où il fonctionne, et les deux doivent être énoncés avec la réponse.`,
  goals: ["Décrire le cycle de modélisation.", "Énoncer les hypothèses et les variables.", "Construire des modèles linéaires et exponentiels à partir de taux, de rapports et de données.", "Choisir un modèle à l'aide des différences et des rapports.", "Tester, raffiner et communiquer un modèle."],
  curriculum: "D2.1--D2.5",
  vocab: [["Modèle", "une description mathématique d'une situation"], ["Hypothèse", "une simplification tenue pour vraie"], ["Valider", "comparer à des données ou au bon sens"], ["Raffiner", "améliorer après un test"], ["Domaine", "les valeurs pour lesquelles le modèle a du sens"]],
  hook: String.raw`Demande : « Combien y a-t-il d'accordeurs de piano à Toronto? » (ou « Combien de pizzas mange-t-on en Ontario chaque semaine? »). Laisse les groupes faire une estimation, puis comparez comment des hypothèses différentes ont mené à des réponses différentes.`,
  concepts: [
    ["1. Le cycle", String.raw`Comprendre $\to$ formuler des hypothèses $\to$ construire $\to$ analyser $\to$ interpréter et vérifier $\to$ raffiner et communiquer --- et recommencer.`],
    ["2. Choisir un modèle", String.raw`Pas égaux en $x$ : premières différences constantes $\Rightarrow$ linéaire $y=mx+b$; rapports constants $\Rightarrow$ exponentiel $y=ab^x$; deuxièmes différences constantes $\Rightarrow$ quadratique.`],
    ["3. Tester et raffiner", String.raw`Compare les prédictions aux données; si les erreurs augmentent, change une hypothèse ou le type de modèle. Indique toujours le domaine.`],
  ],
  tips: ["Valorise les hypothèses clairement énoncées, pas seulement les réponses.", "Vérifie les différences et les rapports avant de choisir un modèle.", "Demande « Cette réponse a-t-elle du sens? » après chaque calcul.", "Les tâches ouvertes fonctionnent bien en groupes.", "Demande aux élèves de présenter leurs modèles et de critiquer les hypothèses des autres."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
