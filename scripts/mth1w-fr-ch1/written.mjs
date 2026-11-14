// MTH1W-FR chapitre 1 — questions à réponse construite (long_answer) pour les tests imprimés du chapitre (partie C).
// Miroir de ../mth1w-ch1/v2/written.mjs. Corrigées par l'enseignant : `points` = les points, `feedback` = la solution modèle +
// les notes de correction imprimées dans le corrigé. L'exercice autonome et les tests en ligne ignorent les questions long_answer.
// Les questions anglaises du chapitre 1 n'ont pas de figure; les questions françaises non plus (aucun téléversement).
//   node scripts/mth1w-fr-ch1/written.mjs           -> essai à blanc (compare avec l'anglais, liste ce qui serait ajouté)
//   node scripts/mth1w-fr-ch1/written.mjs --apply   -> insère les lignes absentes (repérées par l'énoncé), course CID_FR
// N'exécuter --apply qu'après le chargement des leçons françaises du chapitre 1 (lesson_id = leçon française du même numéro).
// Conventions : mathématiques entre $...$; l'argent s'écrit « dollars » (jamais \$).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { CID_FR, lessonId } from "../mth1w-fr/common.mjs";
import { TITLE as T1 } from "./l1_1.mjs";
import { TITLE as T2 } from "./l1_2.mjs";
import { TITLE as T3 } from "./l1_3.mjs";
import { TITLE as T4 } from "./l1_4.mjs";
import { TITLE as T5 } from "./l1_5.mjs";
import { TITLE as T6 } from "./l1_6.mjs";
import { TITLE as T7 } from "./l1_7.mjs";
import { TITLE as T8 } from "./l1_8.mjs";
import { TITLE as T9 } from "./l1_9.mjs";
import { TITLE as T10 } from "./l1_10.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6, 7: T7, 8: T8, 9: T9, 10: T10 };
const W = (t, difficulty, points, prompt, feedback) => ({ topic: T[t], lesson_id: lessonId(1, t), difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null });

export const WRITTEN = [
  // 1.1
  W(1, "medium", 4, String.raw`Donne tous les ensembles (naturels, entiers non négatifs, entiers, rationnels, irrationnels, réels) auxquels appartient chaque nombre : $-\frac{20}{4}$, $0.\overline{12}$, $\sqrt{45}$, $3.0$.`,
    String.raw`$-\frac{20}{4}=-5$ : entier, rationnel, réel. $0.\overline{12}=\frac{12}{99}=\frac{4}{33}$ : rationnel, réel. $\sqrt{45}$ : 45 n'est pas un carré parfait, donc irrationnel, réel. $3.0=3$ : naturel, entier non négatif, entier, rationnel, réel. [1 point chacun; le premier et le dernier doivent d'abord être simplifiés.]`),
  W(1, "hard", 4, String.raw`Montre que $0.\overline{27}=0.2727\ldots$ est un nombre rationnel en l'écrivant sous forme de fraction irréductible. Explique chaque étape.`,
    String.raw`Pose $x=0.\overline{27}$. Deux chiffres se répètent, donc $100x=27.\overline{27}$. Soustrais : $100x-x=27$, donc $99x=27$ et $x=\frac{27}{99}=\frac{3}{11}$. C'est un quotient d'entiers, donc il est rationnel. [1 mise en équation, 1 multiplication par 100, 1 soustraction, 1 fraction irréductible + conclusion.]`),
  W(1, "hard", 3, String.raw`Priya affirme : « Toute racine carrée est irrationnelle. » Donne un contre-exemple pour montrer qu'elle a tort, puis reformule son énoncé pour qu'il soit vrai.`,
    String.raw`Contre-exemple : $\sqrt{25}=5$, qui est rationnel. Énoncé vrai : « La racine carrée d'un entier non négatif qui n'est pas un carré parfait est irrationnelle. » [1 contre-exemple, 1 explication, 1 énoncé corrigé.]`),
  W(1, "hard", 5, String.raw`Écris $4.3\overline{18}$ sous forme de fraction irréductible. Explique pourquoi cela montre que le nombre est rationnel.`,
    String.raw`Pose $x=4.3\overline{18}$. Alors $10x=43.\overline{18}$ et $1000x=4318.\overline{18}$. Soustrais : $990x=4275$, donc $x=\frac{4275}{990}=\frac{95}{22}$. C'est un quotient d'entiers; il est donc rationnel. [1 pour chaque multiple de $x$, 1 soustraction, 1 fraction irréductible, 1 conclusion.]`),
  W(1, "hard", 4, String.raw`Sachant que $x$ est irrationnel, explique pourquoi $5x$ doit aussi être irrationnel.`,
    String.raw`Supposons que $5x$ soit rationnel, disons $5x=\frac pq$ avec des entiers $p,q$. Alors $x=\frac{p}{5q}$, un quotient d'entiers, et $x$ serait rationnel. Cela contredit l'énoncé; $5x$ est donc irrationnel. [1 supposition, 1 équation, 1 transformation, 1 contradiction.]`),
  // 1.2
  W(2, "medium", 3, String.raw`Un sous-marin à $-120$ m monte de $45$ m, plonge de $80$ m, puis monte de $30$ m. Écris une seule expression pour sa position finale et évalue-la.`,
    String.raw`$-120+45-80+30=-125$. Le sous-marin termine à $-125$ m (125 m sous le niveau de la mer). [1 expression, 1 signes et démarche corrects, 1 réponse avec sa signification.]`),
  W(2, "medium", 3, String.raw`La température la plus élevée enregistrée en Ontario est d'environ $42\,^\circ\text{C}$ et la plus basse, d'environ $-58\,^\circ\text{C}$. a) Trouve la différence entre les deux. b) Explique pourquoi le calcul est une soustraction et pourquoi la réponse est plus grande que la grandeur de chacun des deux nombres.`,
    String.raw`a) $42-(-58)=42+58=100\,^\circ\text{C}$. b) Une différence (distance) est valeur haute moins valeur basse; soustraire un négatif revient à additionner son opposé, donc les deux distances par rapport à $0$ (42 et 58) s'additionnent. [1 mise en place, 1 réponse, 1 explication.]`),
  W(2, "hard", 4, String.raw`Utilise trois entiers différents de $-5$ à $5$ pour rendre vraie l'égalité $\square+\square-\square=-9$. Donne deux solutions différentes et décris la stratégie que tu as utilisée.`,
    String.raw`Exemples : $-5+(-2)-2=-9$; $-4+(-3)-2=-9$; $-5+(-1)-3=-9$. Stratégie : les deux premiers termes devraient être négatifs et le nombre soustrait positif, car alors chaque terme fait baisser le total. [1 par solution correcte (max. 2), 2 pour une stratégie claire.]`),
  W(2, "hard", 4, String.raw`Trouve la somme de tous les entiers de $-60$ à $57$. Explique pourquoi tu n'as pas besoin de tous les additionner.`,
    String.raw`Les entiers de $-57$ à $57$ forment des paires d'opposés dont la somme est $0$. Il reste $-60$, $-59$ et $-58$, dont la somme est $-177$. [1 idée des paires, 1 explication, 1 nombres qui restent, 1 réponse.]`),
  W(2, "hard", 4, String.raw`Trouve les entiers $a$ et $b$ si $a+b=-6$ et $a-b=-20$. Montre ton raisonnement et vérifie ta réponse.`,
    String.raw`En additionnant les deux énoncés, on obtient $2a=-26$, donc $a=-13$. Alors $b=-6-(-13)=7$. Vérification : $-13+7=-6$ et $-13-7=-20$. [1 addition, 1 $a$, 1 $b$, 1 vérification.]`),
  // 1.3
  W(3, "medium", 4, String.raw`Évalue $\dfrac{(-2)^3-4(-7)}{-15\div3}$. Montre chaque étape.`,
    String.raw`Numérateur : $(-2)^3=-8$ et $-4(-7)=28$, donc $-8+28=20$. Dénominateur : $-15\div3=-5$. Quotient : $20\div(-5)=-4$. [1 puissance, 1 produit, 1 dénominateur, 1 réponse avec le bon signe.]`),
  W(3, "hard", 4, String.raw`À Iqaluit, la température a baissé de façon constante de $3\,^\circ\text{C}$ par heure pendant $7$ heures pour finir à $-26\,^\circ\text{C}$. Quelle était la température de départ? Explique à l'aide d'opérations sur les entiers.`,
    String.raw`Variation totale $=7\times(-3)=-21$. Départ $+(-21)=-26$, donc départ $=-26-(-21)=-26+21=-5\,^\circ\text{C}$. [1 variation totale, 1 équation ou raisonnement, 1 soustraction d'un négatif, 1 réponse.]`),
  W(3, "hard", 3, String.raw`Sans calculer, détermine si $(-2)^{11}\times(-5)^{4}\times(-1)^{7}$ est positif ou négatif. Explique ton raisonnement.`,
    String.raw`$(-2)^{11}$ a un nombre impair de facteurs négatifs : négatif. $(-5)^4$ en a un nombre pair : positif. $(-1)^7$ : négatif. Il y a deux facteurs négatifs en tout; le produit est donc positif. [1 par signe de facteur correct et justifié (max. 2), 1 conclusion.]`),
  W(3, "hard", 4, String.raw`Évalue $\dfrac{(-5)^3+(-3)^4-(-2)^2}{(-1)^7(-6)}$. Montre chaque étape.`,
    String.raw`Numérateur : $-125+81-4=-48$. Dénominateur : $(-1)(-6)=6$. Quotient : $-48\div6=-8$. [1 puissances, 1 numérateur, 1 dénominateur, 1 réponse.]`),
  W(3, "hard", 4, String.raw`Un test de $30$ questions accorde $+4$ pour une bonne réponse, $-1$ pour une mauvaise réponse et $0$ pour une question sans réponse. Un élève a laissé $2$ questions sans réponse et a obtenu $72$. Combien de réponses étaient bonnes? Explique.`,
    String.raw`Il a répondu à $28$ questions. Un résultat parfait sur $28$ donnerait $112$, soit $40$ de plus que $72$. Chaque mauvaise réponse coûte $5$; il y a donc $8$ mauvaises réponses et $20$ bonnes. Vérification : $80-8=72$. [1 questions répondues, 1 méthode, 1 réponse, 1 vérification.]`),
  // 1.4
  W(4, "medium", 4, String.raw`Place dans l'ordre croissant et explique ta méthode : $-\frac{3}{4}$, $\frac{5}{8}$, $-\frac{2}{3}$, $\frac{7}{12}$.`,
    String.raw`PPCD 24 : $-\frac{18}{24}$, $\frac{15}{24}$, $-\frac{16}{24}$, $\frac{14}{24}$. Ordre : $-\frac{3}{4}<-\frac{2}{3}<\frac{7}{12}<\frac{5}{8}$. [1 dénominateur commun, 1 conversions, 1 ordre, 1 explication pour les négatifs.]`),
  W(4, "hard", 4, String.raw`Une recette demande $2\frac{1}{3}$ tasses de farine. Jo a $3\frac{1}{4}$ tasses, mais en utilise d'abord $\frac{5}{6}$ de tasse pour une sauce. Lui reste-t-il assez de farine pour la recette? Montre ton travail.`,
    String.raw`$3\frac14-\frac56=\frac{39}{12}-\frac{10}{12}=\frac{29}{12}=2\frac{5}{12}$ tasses restantes. La recette demande $2\frac13=\frac{28}{12}$. Puisque $\frac{29}{12}>\frac{28}{12}$, oui — avec $\frac{1}{12}$ de tasse en trop. [1 conversion, 1 soustraction, 1 comparaison, 1 conclusion.]`),
  W(4, "hard", 3, String.raw`Évalue $1\frac{2}{5}-\left(-\frac{3}{10}\right)+\left(-2\frac{1}{2}\right)$. Donne la réponse sous forme de fraction irréductible.`,
    String.raw`$\frac{7}{5}+\frac{3}{10}-\frac{5}{2}=\frac{14}{10}+\frac{3}{10}-\frac{25}{10}=-\frac{8}{10}=-\frac{4}{5}$. [1 fractions impropres + signes, 1 PPCD, 1 réponse.]`),
  W(4, "hard", 5, String.raw`Évalue $\dfrac{1}{4\times5}+\dfrac{1}{5\times6}+\cdots+\dfrac{1}{9\times10}$. Explique pourquoi la plupart des termes s'annulent.`,
    String.raw`Chaque terme est une différence : $\frac{1}{n(n+1)}=\frac1n-\frac{1}{n+1}$. La somme est $\left(\frac14-\frac15\right)+\left(\frac15-\frac16\right)+\cdots+\left(\frac19-\frac{1}{10}\right)$. Chaque $-\frac1k$ annule le $+\frac1k$ suivant; il reste $\frac14-\frac{1}{10}=\frac{3}{20}$. [2 réécriture, 1 explication, 1 ce qui reste, 1 réponse.]`),
  W(4, "hard", 4, String.raw`Évalue $\left|-1\frac34+\frac12\right|-\left(-2\frac13\right)-3\frac16$. Donne la réponse sous forme de fraction irréductible.`,
    String.raw`La valeur absolue vaut $\frac54$. Puis $\frac54+\frac73-\frac{19}{6}=\frac{15+28-38}{12}=\frac{5}{12}$. [1 valeur absolue, 1 signes, 1 PPCD, 1 réponse.]`),
  // 1.5
  W(5, "medium", 4, String.raw`Évalue $-\frac{4}{5}\div1\frac{1}{3}\times\frac{5}{6}$. Montre chaque étape.`,
    String.raw`$1\frac13=\frac43$. De gauche à droite : $-\frac45\times\frac34=-\frac35$; puis $-\frac35\times\frac56=-\frac12$. [1 fraction impropre, 1 inverse, 1 multiplication, 1 signe + fraction irréductible.]`),
  W(5, "hard", 4, String.raw`Une planche de $5\frac{1}{4}$ m est coupée en morceaux de $\frac{7}{8}$ m. Combien de morceaux peut-on couper? Reste-t-il du bois? Montre ton travail.`,
    String.raw`$5\frac14\div\frac78=\frac{21}{4}\times\frac{8}{7}=\frac{168}{28}=6$. Exactement $6$ morceaux, sans reste. [1 mise en place de la division, 1 inverse, 1 réponse, 1 énoncé sur le reste.]`),
  W(5, "hard", 3, String.raw`Explique, à l'aide d'un diagramme ou de nombres, pourquoi $3\div\frac{1}{4}$ est plus grand que $3$.`,
    String.raw`Diviser demande combien de quarts entrent dans $3$. Chaque unité contient $4$ quarts, donc $3$ unités en contiennent $12$ : $3\div\frac14=3\times4=12$. Diviser par un nombre inférieur à $1$ donne plus de groupes que la quantité de départ. [1 sens de la division, 1 réponse, 1 raison générale.]`),
  W(5, "hard", 5, String.raw`Évalue $1-\dfrac{1}{1+\dfrac{1}{2+\dfrac13}}$. Montre chaque étape.`,
    String.raw`$2+\frac13=\frac73$, dont l'inverse est $\frac37$. $1+\frac37=\frac{10}{7}$, dont l'inverse est $\frac{7}{10}$. $1-\frac{7}{10}=\frac{3}{10}$. [1 première somme, 1 premier inverse, 1 deuxième somme, 1 deuxième inverse, 1 réponse.]`),
  W(5, "hard", 4, String.raw`Léo dépense les $\frac25$ de son argent, puis le $\frac13$ de ce qui reste. Il lui reste $20$ dollars. Combien avait-il au départ? Combien a-t-il dépensé chaque fois?`,
    String.raw`Fraction qui reste : $\frac35\times\frac23=\frac25$. Donc les $\frac25$ de l'argent valent $20$ dollars, et il avait $50$ dollars au départ. Il a dépensé $20$ dollars, puis $10$ dollars. [1 fraction qui reste, 1 mise en place, 1 total, 1 montants.]`),
  // 1.6
  W(6, "medium", 4, String.raw`Évalue $\dfrac{2^{-2}+3^{0}}{(-2)^{3}}$. Donne une réponse exacte.`,
    String.raw`$2^{-2}=\frac14$, $3^0=1$, donc le numérateur vaut $\frac54$. $(-2)^3=-8$. $\frac54\div(-8)=-\frac{5}{32}$. [1 exposant négatif, 1 exposant nul, 1 base négative, 1 réponse.]`),
  W(6, "hard", 4, String.raw`Une population de bactéries double chaque heure. Il y a $3200$ bactéries maintenant. a) Écris une expression avec une puissance de $2$ pour la population d'il y a $4$ heures. b) Évalue-la. c) Explique ce que signifie l'exposant négatif ici.`,
    String.raw`a) $3200\times2^{-4}$. b) $3200\times\frac{1}{16}=200$. c) Remonter dans le temps annule le doublement : chaque heure plus tôt divise par $2$, ce que représente un exposant négatif. [1, 1, 2.]`),
  W(6, "hard", 3, String.raw`Place dans l'ordre croissant et explique : $(-3)^2$, $-3^2$, $3^{-2}$, $(-3)^0$.`,
    String.raw`$-3^2=-9$, $3^{-2}=\frac19$, $(-3)^0=1$, $(-3)^2=9$. Ordre : $-3^2<3^{-2}<(-3)^0<(-3)^2$. Les parenthèses déterminent la base; un exposant négatif donne un inverse. [1 valeurs, 1 ordre, 1 explication.]`),
  W(6, "hard", 4, String.raw`Évalue $\left(2^{-1}-3^{-1}\right)^{-2}+(-2)^{-3}\times8$. Montre chaque étape.`,
    String.raw`$\frac12-\frac13=\frac16$, et $\left(\frac16\right)^{-2}=36$. $(-2)^{-3}=-\frac18$, et $-\frac18\times8=-1$. Total : $35$. [1 parenthèse, 1 inversion, 1 deuxième terme, 1 réponse.]`),
  W(6, "hard", 4, String.raw`Un échantillon de $1600$ g a une demi-vie de $5$ jours. a) Quand atteindra-t-il $25$ g? b) Utilise un exposant négatif pour trouver sa masse il y a $10$ jours.`,
    String.raw`a) $1600\div25=64=2^6$ : $6$ demi-vies, soit $30$ jours. b) $1600\times\left(\frac12\right)^{-2}=1600\times4=6400$ g. [2 et 2.]`),
  // 1.7
  W(7, "medium", 4, String.raw`Simplifie $\dfrac{(2x^3)^4\cdot x^{-2}}{8x^5}$. Nomme chaque loi des exposants que tu utilises.`,
    String.raw`Puissance d'un produit / puissance d'une puissance : $(2x^3)^4=16x^{12}$. Loi du produit : $16x^{12}\cdot x^{-2}=16x^{10}$. Loi du quotient : $\frac{16x^{10}}{8x^5}=2x^5$. [1 par étape correcte avec la loi nommée, 1 réponse finale.]`),
  W(7, "hard", 4, String.raw`La masse de la Terre est d'environ $5.97\times10^{24}$ kg et celle de la Lune, d'environ $7.35\times10^{22}$ kg. Environ combien de fois la Terre est-elle plus massive que la Lune? Montre ton travail en notation scientifique.`,
    String.raw`$\frac{5.97\times10^{24}}{7.35\times10^{22}}=\frac{5.97}{7.35}\times10^{2}\approx0.812\times10^{2}=8.12\times10^{1}$. La Terre est environ $81$ fois plus massive. [1 mise en place, 1 division des décimaux, 1 soustraction des exposants, 1 réponse.]`),
  W(7, "hard", 5, String.raw`Simplifie $\left(\dfrac{6x^{-3}y^5z^2}{14xy^{-1}z^6}\right)^{-2}$. Écris la réponse avec des exposants positifs et montre chaque étape.`,
    String.raw`À l'intérieur : $\frac{6}{14}=\frac37$, $x^{-3-1}=x^{-4}$, $y^{5-(-1)}=y^6$, $z^{2-6}=z^{-4}$, donc $\frac{3y^6}{7x^4z^4}$. La puissance négative renverse la fraction : $\left(\frac{7x^4z^4}{3y^6}\right)^2=\frac{49x^8z^8}{9y^{12}}$. [1 coefficient, 1 exposants à l'intérieur, 1 inversion, 1 carré de chaque facteur, 1 forme finale.]`),
  W(7, "hard", 4, String.raw`Trouve $n$ si $\dfrac{27^n\times9^2}{3^5}=81^3\times9$. Montre comment tu réécris chaque nombre.`,
    String.raw`En base $3$ : le membre de gauche vaut $3^{3n}\times3^4\div3^5=3^{3n-1}$, et le membre de droite $3^{12}\times3^2=3^{14}$. Alors $3n-1=14$ donne $3n=15$, donc $n=5$. [1 réécriture, 1 membre de gauche, 1 membre de droite et équation, 1 réponse.]`),
  W(7, "hard", 3, String.raw`Un élève a écrit $3^4\times3^2=9^6$. Explique l'erreur et donne la bonne réponse.`,
    String.raw`Les bases ont été multipliées. Avec la même base, on garde la base et on additionne les exposants : $3^4\times3^2=3^6=729$ (et non $9^6$). [1 erreur repérée, 1 bonne loi, 1 valeur.]`),
  // 1.8
  W(8, "medium", 3, String.raw`Le béton est mélangé selon le rapport ciment : sable : gravier $=1:2:4$ en masse. Un entrepreneur a besoin de $350$ kg de béton. Quelle quantité de chaque ingrédient lui faut-il?`,
    String.raw`$1+2+4=7$ parties; une partie $=350\div7=50$ kg. Ciment $50$ kg, sable $100$ kg, gravier $200$ kg. [1 parties, 1 une partie, 1 quantités.]`),
  W(8, "hard", 4, String.raw`Le rapport des garçons aux filles dans un club est $3:5$. Après l'arrivée de $6$ garçons de plus (et personne ne part), le rapport devient $1:1$. Combien de filles y a-t-il dans le club? Montre ton raisonnement.`,
    String.raw`Pose que le club compte $3k$ garçons et $5k$ filles. Alors $3k+6=5k$, donc $2k=6$ et $k=3$. Filles $=15$ (les garçons sont passés de $9$ à $15$). [1 représentation, 1 équation, 1 résolution, 1 réponse avec vérification.]`),
  W(8, "medium", 3, String.raw`Une voiture miniature est construite à l'échelle $1:24$. La miniature mesure $18.5$ cm de long. Quelle est la longueur de la vraie voiture, en mètres?`,
    String.raw`Longueur réelle $=18.5\times24=444$ cm $=4.44$ m. [1 proportion, 1 multiplication, 1 conversion d'unités.]`),
  W(8, "hard", 4, String.raw`Un réservoir de $40$ L contient du concentré et de l'eau selon le rapport $3:5$. Tu vides $16$ L du mélange et tu remplis le réservoir avec de l'eau. Trouve le nouveau rapport du concentré à l'eau. Montre ton raisonnement.`,
    String.raw`Au départ : $15$ L et $25$ L. Les $16$ L vidés contiennent $6$ L de concentré et $10$ L d'eau; il reste $9$ L et $15$ L. En ajoutant $16$ L d'eau, on obtient $9:31$. [1 départ, 1 vidange, 1 reste, 1 réponse.]`),
  W(8, "hard", 3, String.raw`$A:B=5:6$ et $B:C=4:3$. Si $A+B+C=620$, trouve chaque nombre.`,
    String.raw`Mets à l'échelle : $A:B=10:12$ et $B:C=12:9$, donc $10:12:9$, soit $31$ parties. Une partie vaut $20$. $A=200$, $B=240$, $C=180$. [1 lien entre les rapports, 1 une partie, 1 réponses.]`),
  // 1.9
  W(9, "medium", 4, String.raw`Un téléphone coûte $640$ dollars. Il est à $15\%$ de rabais, et la TVH de $13\%$ est calculée sur le prix soldé. a) Trouve le coût final. b) Le coût changerait-il si la taxe était ajoutée avant le rabais? Explique.`,
    String.raw`a) $640\times0.85=544$; $544\times1.13=614.72$ dollars. b) Non : $640\times0.85\times1.13=640\times1.13\times0.85$, car les multiplications peuvent se faire dans n'importe quel ordre. [1 rabais, 1 taxe, 1 réponse, 1 explication.]`),
  W(9, "hard", 4, String.raw`Un réservoir de $1800$ L se vide à $45$ L/min. a) Écris le taux de variation du volume sous forme de taux avec un signe. b) Combien de temps faut-il pour que le réservoir soit vide? c) Combien d'eau reste-t-il après $25$ minutes?`,
    String.raw`a) $-45$ L/min. b) $1800\div45=40$ min. c) $1800+25\times(-45)=1800-1125=675$ L. [1, 1, 2.]`),
  W(9, "hard", 3, String.raw`Un prix augmente de $25\%$, puis diminue de $20\%$. Montre qu'il revient au prix initial. Explique ensuite pourquoi une hausse de $20\%$ suivie d'une baisse de $20\%$ n'y revient pas.`,
    String.raw`$1.25\times0.80=1$; le prix est donc inchangé. Mais $1.20\times0.80=0.96$ : la baisse représente $20\%$ d'un montant plus grand, donc le prix finit $4\%$ plus bas. [1 premier produit, 1 deuxième produit, 1 explication.]`),
  W(9, "hard", 4, String.raw`Un magasin majore un article de $60\%$ au-dessus de son coût de $120$ dollars, puis lui applique un rabais de $30\%$. a) Trouve le prix soldé. b) Trouve le pourcentage de profit sur le coût. c) Explique pourquoi les deux variations ne se soustraient pas simplement pour donner $30\%$.`,
    String.raw`a) $120\times1.6\times0.7=134.40$ dollars. b) $1.6\times0.7=1.12$ : $12\%$. c) Les $30\%$ sont calculés sur le prix majoré, plus grand; les facteurs se multiplient donc. [1, 1, 2.]`),
  W(9, "hard", 4, String.raw`Un camion part à $72$ km/h. Une voiture part du même endroit $20$ minutes plus tard à $108$ km/h. Combien de temps après son départ la voiture rattrape-t-elle le camion, et à quelle distance du départ sont-ils?`,
    String.raw`Avance : $72\times\frac13=24$ km. L'écart se comble à $36$ km/h; il faut donc $\frac{24}{36}=\frac23$ h, soit $40$ minutes. Distance : $108\times\frac23=72$ km. [1 avance, 1 vitesse de rapprochement, 1 temps, 1 distance.]`),
  // 1.10
  W(10, "medium", 3, String.raw`Trouve trois nombres rationnels entre $-\frac{1}{3}$ et $-\frac{1}{4}$. Montre ta méthode.`,
    String.raw`PPCD 12 : $-\frac{4}{12}$ et $-\frac{3}{12}$. Utilise des 48e : $-\frac{16}{48}$ et $-\frac{12}{48}$, donc $-\frac{15}{48},-\frac{14}{48},-\frac{13}{48}$ (soit $-\frac{5}{16},-\frac{7}{24},-\frac{13}{48}$). D'autres bonnes réponses sont acceptées. [1 méthode, 2 trois nombres.]`),
  W(10, "hard", 4, String.raw`Utilise l'algèbre pour montrer que $0.\overline{9}=1$. Explique ensuite pourquoi aucun nombre ne se trouve entre $0.\overline{9}$ et $1$.`,
    String.raw`Pose $x=0.\overline{9}$; $10x=9.\overline{9}$; $10x-x=9$, donc $9x=9$ et $x=1$. Si un nombre $y$ se trouvait entre les deux, alors $y<1$; avec assez de neuf, $0.99\ldots9>y$ — et $0.\overline{9}$ est plus grand que tous ces décimaux, donc $0.\overline{9}>y$, une contradiction. Il n'y a aucun écart : c'est le même nombre. [2 algèbre, 2 explication.]`),
  W(10, "hard", 4, String.raw`On laisse tomber une balle de $2$ m, et chaque rebond atteint la moitié de la hauteur précédente. a) Donne les hauteurs des $5$ premiers rebonds. b) De quelle valeur les hauteurs s'approchent-elles? c) Dans ce modèle, la balle cesse-t-elle un jour de rebondir? Explique.`,
    String.raw`a) $1,\ 0.5,\ 0.25,\ 0.125,\ 0.0625$ m. b) $0$. c) Dans le modèle, chaque hauteur est la moitié de la précédente; elle n'est donc jamais exactement $0$ — une infinité de rebonds dont la limite est $0$. Une vraie balle s'arrête à cause d'une perte d'énergie que le modèle ignore. [1, 1, 2.]`),
  W(10, "hard", 4, String.raw`La suite $a_n=\dfrac{5n+3}{n}$. a) Trouve sa limite et explique. b) Trouve le premier $n$ pour lequel $a_n$ est à moins de $0.01$ de la limite.`,
    String.raw`a) $a_n=5+\frac3n$, et $\frac3n\to0$, donc la limite est $5$. b) $\frac3n<0.01$ signifie $n>300$, donc $n=301$. [2, 2.]`),
  W(10, "hard", 4, String.raw`On laisse tomber une balle de $24$ m, et chaque rebond atteint la moitié de la hauteur précédente. Explique pourquoi la distance totale parcourue s'approche d'une valeur finie, et trouve-la.`,
    String.raw`Les hauteurs des rebonds $12+6+3+\cdots$ s'approchent de $24$, tout comme $\frac12+\frac14+\cdots$ s'approche de $1$. Chacune est parcourue deux fois : $48$ m. En ajoutant la première chute, on obtient $72$ m. C'est fini, car les quantités ajoutées diminuent assez vite pour que leur somme ait une limite. [1 somme des hauteurs, 1 doublement, 1 total, 1 explication.]`),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  // The English file's main guard compares only the script's base name ("written.mjs"), so importing it from here
  // would run ITS dry run / --apply against the English course. Hide argv[1] while importing.
  const argv1 = process.argv[1];
  process.argv[1] = "imported-for-comparison";
  const { WRITTEN: EN } = await import("../mth1w-ch1/v2/written.mjs");
  process.argv[1] = argv1;
  let bad = 0;
  const mathOf = (s) => [...String(s).matchAll(/\$([^$]+)\$/g)].map((m) => m[1]).join(" | ");
  if (EN.length !== WRITTEN.length) { bad++; console.log(`FAIL: ${WRITTEN.length} questions, English has ${EN.length}`); }
  WRITTEN.forEach((w, i) => {
    const e = EN[i];
    if (!e || e.points !== w.points || e.difficulty !== w.difficulty || e.topic.split(" ")[0] !== w.topic.split(" ")[0]) { bad++; console.log(`FAIL: question ${i + 1} differs from English in points/difficulty/topic`); }
    else if (mathOf(e.prompt) !== mathOf(w.prompt)) { bad++; console.log(`FAIL: question ${i + 1} prompt math differs from English`); }
    if ((w.prompt.match(/\$/g) || []).length % 2 || (w.feedback.match(/\$/g) || []).length % 2) { bad++; console.log(`FAIL: question ${i + 1} odd number of $`); }
    if (/\bundefined\b/.test(w.prompt + w.feedback)) { bad++; console.log(`FAIL: question ${i + 1} contains "undefined"`); }
  });
  if (bad) process.exit(1);
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = CID_FR;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.lesson_id))].filter((id) => !lessons.some((l) => l.id === id));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions (EN ${EN.length}); ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks (EN ${EN.reduce((s, r) => s + r.points, 0)})`);
  if (missing.length) console.log(`French lessons not loaded yet: ${missing.length}`);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  if (missing.length) { console.log("Load the lessons first."); process.exit(1); }
  if (todo.length) { const r = await db.from("bank_questions").insert(todo.map((w) => ({ ...w, course_id: cid }))); if (r.error) throw r.error; }
  console.log(`inserted ${todo.length}`);
}
