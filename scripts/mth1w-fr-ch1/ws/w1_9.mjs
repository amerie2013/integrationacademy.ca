// Fiche 1.9 — Taux, pourcentages et variation en pourcentage (édition de l'enseignant)
import { pointsGraph, percentBar, doubleLine } from "./tikz.mjs";
import { PROBLEMS } from "./p1_9.mjs";

export const WS = {
  code: "1.9",
  title: "Taux, pourcentages et variation en pourcentage",
  bigideas: String.raw`Un \textbf{taux} compare des quantités exprimées dans des unités \emph{différentes} (km/h, dollars/kg); un \textbf{taux unitaire} est « pour $1$ ». Un \textbf{taux de variation} a un signe : positif quand une quantité augmente, négatif quand elle diminue. Un \textbf{pourcentage} est un rapport sur $100$, et toute question de pourcentage revient à la proportion $\frac{\text{partie}}{\text{tout}}=\frac{\%}{100}$. Les variations en pourcentage se font en une seule étape à l'aide d'un \textbf{multiplicateur}.`,
  goals: [
    "Écrire des taux et des taux unitaires et les utiliser pour comparer des prix et des vitesses.",
    "Calculer et interpréter des taux de variation positifs et négatifs, y compris à partir d'un graphique.",
    "Passer d'une fraction à un décimal et à un pourcentage (y compris des pourcentages supérieurs à 100 % et inférieurs à 1 %).",
    "Trouver le pourcentage d'un nombre, un pourcentage ou le tout, à l'aide de proportions.",
    "Trouver une augmentation ou une diminution en pourcentage et appliquer des rabais, des taxes et des variations successives à l'aide de multiplicateurs.",
  ],
  curriculum: "B3.3, B3.5; liens avec F1",
  vocab: [
    ["Taux / taux unitaire", "une comparaison d'unités différentes / le taux pour une unité : $72$ km/h"],
    ["Taux de variation", "$\\frac{\\text{variation de la quantité}}{\\text{variation du temps}}$; son signe indique une hausse ou une baisse"],
    ["Pourcentage", "sur cent : $35\\%=\\frac{35}{100}=0.35$"],
    ["Multiplicateur", "le nombre qui applique une variation en pourcentage : $+13\\%\\to\\times1.13$, $-25\\%\\to\\times0.75$"],
  ],
  hook: String.raw`Apporte deux vraies circulaires (ou projette-les) : des céréales à $4.25$ dollars pour $500$ g et le « format familial » à $6.00$ dollars pour $750$ g. Demande quel est le meilleur achat, et à quel point les élèves en sont sûrs. Montre ensuite une veste annoncée à « $35\%$ de rabais » et demande ce qu'elle coûte vraiment après la TVH de $13\%$. Les taux unitaires et les multiplicateurs répondent aux deux questions --- des habiletés dont tout consommateur a besoin.`,
  concepts: [
    ["1. Taux et taux unitaires", String.raw`Divise pour que la deuxième quantité soit $1$ : $\frac{19.20\text{ dollars}}{12\text{ L}}=1.60$ dollar/L. Sur un graphique distance--temps, le taux unitaire (la vitesse) est l'inclinaison de la droite :
${pointsGraph({ pts: [[0, 0], [20, 100], [40, 200], [60, 300], [80, 400]], xmin: 0, xmax: 85, ymin: 0, ymax: 420, xlabel: "temps (s)", ylabel: "distance (m)", xtick: "0,20,...,80", ytick: "0,100,...,400", height: 5, caption: "Coureur A : 400 m en 80 s, donc 5 m/s --- la droite monte de 100 m toutes les 20 s." })}`],
    ["2. Taux de variation avec un signe", String.raw`taux de variation $=\dfrac{\text{final}-\text{initial}}{\text{temps}}$. Le niveau d'un étang baisse de $120$ cm à $84$ cm en $12$ jours : $\frac{84-120}{12}=\frac{-36}{12}=-3$ cm/jour.
${pointsGraph({ pts: [[0, 120], [3, 111], [6, 102], [9, 93], [12, 84]], xmin: 0, xmax: 13, ymin: 70, ymax: 125, xlabel: "jour", ylabel: "niveau (cm)", xtick: "0,3,...,12", ytick: "70,80,...,120", height: 4.8, caption: "Une droite descendante a un taux de variation négatif." })}
Taux positif : augmentation. Taux négatif : diminution. Nul : aucune variation. (C'est la règle des signes des entiers de la leçon 1.3 : variation négative $\div$ temps positif $=$ taux négatif.)`],
    ["3. Fractions, décimaux et pourcentages", String.raw`\begin{center}\begin{tabular}{lll}\toprule Fraction & Décimal & Pourcentage\\\midrule $\frac{3}{8}$ & $0.375$ & $37.5\%$\\ $\frac{7}{5}$ & $1.4$ & $140\%$\\ $\frac{9}{200}$ & $0.045$ & $4.5\%$\\ $\frac{1}{400}$ & $0.0025$ & $0.25\%$\\\bottomrule\end{tabular}\end{center}
Pourcentage $\to$ décimal : divise par $100$. Décimal $\to$ pourcentage : multiplie par $100$. Fraction $\to$ pourcentage : divise, puis multiplie par $100$.`],
    ["4. Les trois sortes de questions de pourcentage", String.raw`${percentBar(72, 25, { caption: "$18$ sur $72$ donne $25\\%$ : la partie ombrée est le quart de la barre." })}
${doubleLine(18, 25, 4, { top: "quantité", bottom: "pourcentage", mark: 1, caption: "Double droite numérique : $18\\leftrightarrow25\\%$, donc $72\\leftrightarrow100\\%$." })}
\textbf{Partie :} $25\%$ de $72$ donne $0.25\times72=18$. \quad \textbf{Pourcentage :} $\frac{18}{72}=0.25=25\%$. \quad \textbf{Tout :} $18$ représente $25\%$ de $w$ : $0.25w=18$, $w=72$.`],
    ["5. Variation en pourcentage et multiplicateurs", String.raw`variation en pourcentage $=\dfrac{\text{nouvelle}-\text{initiale}}{\text{initiale}}\times100\%$ (négative $=$ diminution).\\
Augmentation de $r\%$ : $\times\left(1+\frac{r}{100}\right)$; diminution de $r\%$ : $\times\left(1-\frac{r}{100}\right)$. Les variations successives se multiplient : $35\%$ de rabais puis la TVH de $13\%$ donnent $\times0.65\times1.13$.\\
\textbf{Une hausse et une baisse égales ne s'annulent pas} : une hausse de $10\%$ puis une baisse de $10\%$ donnent $\times1.1\times0.9=\times0.99$.`],
  ],
  tips: [
    String.raw`La variation en pourcentage se divise par la valeur \emph{initiale}.`,
    String.raw`Compare des prix unitaires dans la même unité (convertis d'abord les mL en L, les g en kg).`,
    String.raw`N'arrondis pas au milieu d'un calcul d'argent; arrondis une seule fois à la fin.`,
    String.raw`Les élèves écrivent souvent $0.5\%$ comme $0.5$ --- c'est $0.005$.`,
    String.raw`Les taux gardent leurs unités (km/h); les rapports n'en ont pas.`,
  ],
  examples: [
    { title: "Prix unitaire", q: String.raw`$12$ L d'essence coûtent $19.20$ dollars. Trouve le prix unitaire.`, steps: [String.raw`\textbf{Formule :} prix unitaire $=\dfrac{\text{coût}}{\text{quantité}}$, le coût d'une unité (ici, un litre).`, String.raw`$19.20\div12=1.60$.`, String.raw`\textbf{Vérification :} $12\times1.60=19.20$ \checkmark`], ans: "$1.60$ dollar/L" },
    { title: "Le meilleur achat", q: String.raw`Céréales : $500$ g pour $4.25$ dollars ou $750$ g pour $6.00$ dollars. Quel est le meilleur achat?`, steps: [String.raw`\textbf{Règle :} compare les prix unitaires pour la \emph{même} quantité. $100$ g est une unité pratique : $500$ g $=5\times100$ g et $750$ g $=7.5\times100$ g.`, String.raw`Par $100$ g : $4.25\div5=0.85$ dollar.`, String.raw`Par $100$ g : $6.00\div7.5=0.80$ dollar.`, String.raw`\textbf{Conclusion :} $0.80<0.85$; la boîte de $750$ g coûte donc moins cher par gramme. Vérification : $7.5\times0.85=6.375>6.00$ \checkmark`], ans: "la boîte de 750 g" },
    { title: "Un taux négatif", q: String.raw`Le niveau d'un étang baisse de $120$ cm à $84$ cm en $12$ jours. Trouve le taux de variation et prédis le niveau après $20$ jours si le taux reste le même.`, steps: [String.raw`\textbf{Formule :} taux de variation $=\dfrac{\text{final}-\text{initial}}{\text{temps}}$; négatif signifie une diminution. Ensuite, niveau $=$ départ $+$ taux $\times$ temps.`, String.raw`Taux $=\frac{84-120}{12}=-3$ cm/jour.`, String.raw`Après $20$ jours : $120+20(-3)=60$ cm.`, String.raw`\textbf{Vérification :} après $12$ jours, $120+12(-3)=84$ cm, ce qui correspond aux données \checkmark`], ans: String.raw`$-3$ cm/jour; $60$ cm` },
    { title: "Conversions", q: String.raw`Écris $\frac{3}{8}$ en pourcentage, $0.045$ en pourcentage et $140\%$ en décimal.`, steps: [String.raw`\textbf{Règle :} pour cent signifie « sur cent » : décimal $\times100=$ pourcentage, et pourcentage $\div100=$ décimal.`, String.raw`$3\div8=0.375=37.5\%$.`, String.raw`$0.045\times100=4.5$, donc $0.045$ vaut $4.5\%$.`, String.raw`$140\div100=1.4$.`, String.raw`\textbf{Vérification :} $37.5\%=\frac{37.5}{100}=\frac{375}{1000}=\frac38$ \checkmark`], ans: String.raw`$37.5\%$, $4.5\%$, $1.4$` },
    { title: "Trouver le pourcentage", q: String.raw`Ana a répondu à $18$ des $72$ questions d'un sondage. Quel pourcentage cela représente-t-il?`, fig: percentBar(72, 25), steps: [String.raw`\textbf{Formule :} pourcentage $=\dfrac{\text{partie}}{\text{tout}}\times100\%$. Réduis d'abord : le PGCD de $18$ et de $72$ est $18$.`, String.raw`$\frac{18}{72}=\frac14=0.25$.`, String.raw`\textbf{Convertis :} $0.25\times100\%=25\%$. Vérification : $25\%$ de $72$ donne $18$ \checkmark`], ans: String.raw`$25\%$` },
    { title: "Trouver le tout", q: String.raw`$45$ élèves se rendent à l'école à pied. Ils représentent $18\%$ de l'école. Combien d'élèves fréquentent l'école?`, steps: [String.raw`\textbf{Formule :} partie $=$ pourcentage $\times$ tout. Ici, la partie ($45$) et le pourcentage ($18\%=0.18$) sont connus; résous donc pour le tout $w$.`, String.raw`$0.18\times w=45$.`, String.raw`$w=45\div0.18=250$.`, String.raw`\textbf{Vérification :} $18\%$ de $250$ donne $0.18\times250=45$ \checkmark`], ans: "$250$ élèves" },
    { title: "Variation en pourcentage dans les deux sens", q: String.raw`Un prix passe de $80$ à $92$ dollars, puis revient à $80$. Trouve les deux variations en pourcentage.`, steps: [String.raw`\textbf{Formule :} variation en pourcentage $=\dfrac{\text{nouvelle}-\text{initiale}}{\text{initiale}}\times100\%$, en divisant toujours par la valeur de départ.`, String.raw`Hausse : $\frac{92-80}{80}=\frac{12}{80}=15\%$.`, String.raw`Baisse : $\frac{80-92}{92}=\frac{-12}{92}\approx-13.0\%$.`, String.raw`La même variation de $12$ dollars représente un plus petit pourcentage d'une valeur initiale plus grande.`], ans: String.raw`$+15\%$ et environ $-13.0\%$` },
    { title: "Un rabais, puis la TVH", q: String.raw`Un vélo de $240$ dollars est à $35\%$ de rabais, puis on ajoute la TVH de $13\%$. Trouve le prix final.`, steps: [String.raw`\textbf{Multiplicateurs :} $35\%$ de rabais conserve $65\%$ ($\times0.65$); ajouter la TVH de $13\%$ donne $113\%$ ($\times1.13$).`, String.raw`$240\times0.65=156$.`, String.raw`$156\times1.13=176.28$.`, String.raw`\textbf{Vérifie en une étape :} $240\times0.65\times1.13=240\times0.7345=176.28$ \checkmark`], ans: "$176.28$ dollars" },
    { title: "Remonter à travers un rabais et une taxe", q: String.raw`Un prix est réduit de $20\%$, puis on ajoute la TVH de $13\%$. Le prix final est de $90.40$ dollars. Quel était le prix initial?`, steps: [String.raw`\textbf{Règle :} pour annuler une multiplication, divise par le même multiplicateur, dans l'ordre inverse.`, String.raw`Chaque changement est une multiplication : initial $\times0.80\times1.13=90.40$.`, String.raw`Annule la taxe : $90.40\div1.13=80$ dollars est le prix réduit.`, String.raw`Annule le rabais : $80\div0.80=100$ dollars.`, String.raw`Vérification : $100\times0.80\times1.13=90.40$. Retirer $13\%$ du prix final serait une erreur, car la taxe représentait $13\%$ du montant plus petit.`], ans: "$100$ dollars" },
  ],
  problems: PROBLEMS,
};
