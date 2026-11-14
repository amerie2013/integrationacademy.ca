// Fiche 5.1 — La géométrie et la mesure à travers l'histoire (édition enseignant)
import { figT } from "./figT.mjs";
import { rightTri } from "../../mth1w-ch5/figs5.mjs";

const reg = (n, R = 1, rot = 90) => Array.from({ length: n }, (_, i) => [R * Math.cos(((rot + (360 * i) / n) * Math.PI) / 180), R * Math.sin(((rot + (360 * i) / n) * Math.PI) / 180)]);

const CONV = String.raw`\textbf{Règle (réciproque de Pythagore) :} si $a^2+b^2=c^2$, l'angle opposé à $c$ mesure $90^\circ$.`;
const EXAMPLES = [
  { title: "Une corde à 30 espaces", q: String.raw`Une corde compte $30$ espaces égaux entre ses nœuds. Quel triangle rectangle peut-elle former, en utilisant un multiple de $3$-$4$-$5$ ?`,
    fig: figT(rightTri(12, 5, { la: "12", lb: "5", lc: "13", fill: "amber" }), 3.2),
    steps: [CONV,
      String.raw`\textbf{Essayer $3$-$4$-$5$ :} il utilise $3+4+5=12$ espaces; $30\div12=2.5$, ce qui donne $7.5$, $10$, $12.5$. Les nœuds ne tombent que sur des espaces entiers, donc cela ne fonctionne pas.`,
      String.raw`\textbf{Essayer un autre triplet} de périmètre 30 : $5+12+13=30$ \checkmark`,
      String.raw`\textbf{Vérifier l'angle droit :} $5^2+12^2=25+144=169=13^2$ \checkmark. Il se trouve entre les côtés de $5$ et de $12$.`],
    ans: String.raw`côtés de $5$, $12$, $13$ espaces (angle droit entre $5$ et $12$)` },
  { title: "Les triplets de Plimpton 322", q: String.raw`Des scribes babyloniens ont dressé une liste de triplets comme $(119, 120, 169)$. Montre que c'est un triplet de Pythagore.`,
    steps: [String.raw`\textbf{Règle :} $(a,b,c)$ est un triplet de Pythagore quand $a^2+b^2=c^2$.`,
      String.raw`\textbf{Cathètes :} $119^2=14\,161$ et $120^2=14\,400$; somme $=28\,561$.`,
      String.raw`\textbf{Hypoténuse :} $169^2=28\,561$.`,
      String.raw`\textbf{Comparer :} égaux, donc c'est un triplet de Pythagore \checkmark`],
    ans: "oui : la somme des carrés des cathètes est égale au carré de 169" },
  { title: "De la base 60 au décimal", q: String.raw`Écris le nombre babylonien $3;7,30$ sous forme décimale.`,
    steps: [String.raw`\textbf{Valeurs de position en base 60 :} les unités, puis les soixantièmes ($\frac1{60}$), puis les $\frac1{3600}$ ($60\times60$).`,
      String.raw`\textbf{Développer :} $3;7,30=3+\frac{7}{60}+\frac{30}{3600}$.`,
      String.raw`\textbf{Dénominateur commun :} $\frac{30}{3600}=\frac{1}{120}$ et $\frac{7}{60}=\frac{14}{120}$, donc la partie fractionnaire vaut $\frac{15}{120}=\frac18=0.125$.`,
      String.raw`\textbf{Résultat :} $3+0.125=3.125$.`],
    ans: "$3.125$" },
  { title: "Du décimal à la base 60", q: String.raw`Écris $1.75$ heure en heures et minutes, et $2.6^\circ$ en degrés et minutes.`,
    steps: [String.raw`\textbf{Faits :} $1$ h $=60$ min et $1^\circ=60'$ (minutes d'arc). Garde la partie entière; multiplie la partie décimale par 60.`,
      String.raw`\textbf{Heures :} $0.75\times60=45$, donc $1.75$ h $=1$ h $45$ min.`,
      String.raw`\textbf{Degrés :} $0.6\times60=36$, donc $2.6^\circ=2^\circ36'$.`,
      String.raw`\textbf{Vérification :} $\frac{45}{60}=0.75$ \checkmark et $\frac{36}{60}=0.6$ \checkmark`],
    ans: String.raw`$1$ h $45$ min; $2^\circ36'$` },
  { title: "Ératosthène avec des nombres modernes", q: String.raw`Deux villes situées sur le même méridien sont à $890$ km l'une de l'autre. À midi, le même jour, l'angle du Soleil par rapport à la verticale diffère de $8^\circ$. Estime la circonférence et le rayon de la Terre.`,
    steps: [String.raw`\textbf{Proportion :} les rayons du Soleil sont parallèles, donc les $8^\circ$ sont aussi l'angle au centre de la Terre, et $\frac{\text{arc}}{C}=\frac{\text{angle}}{360^\circ}$.`,
      String.raw`\textbf{Fraction :} $\frac{8}{360}=\frac{1}{45}$, donc $890$ km représentent $\frac1{45}$ de $C$.`,
      String.raw`\textbf{Circonférence :} $C=45\times890=40\,050$ km.`,
      String.raw`\textbf{Rayon :} $C=2\pi r$, donc $r=\frac{C}{2\pi}=\frac{40\,050}{2\pi}\approx6374$ km.`],
    ans: String.raw`$C\approx40\,050$ km, $r\approx6374$ km` },
  { title: "Les hexagones d'Archimède", q: String.raw`Un cercle a un diamètre de $1$. L'hexagone régulier intérieur a des côtés de $0.5$; l'hexagone extérieur, des côtés de $\frac{1}{\sqrt3}\approx0.5774$. Quelles bornes pour $\pi$ donnent-ils ?`,
    fig: figT([{ circle: [0, 0, 1], color: "ink" }, { poly: reg(6, 1, 0), fill: "none", color: "blue" }, { poly: reg(6, 1 / Math.cos(Math.PI / 6), 30), fill: "none", color: "amber" }], 3.6),
    steps: [String.raw`\textbf{Idée :} le cercle se trouve entre les deux hexagones, donc sa circonférence est comprise entre leurs périmètres.`,
      String.raw`\textbf{Hexagone intérieur :} son côté est égal au rayon $0.5$ (six triangles équilatéraux); périmètre $6\times0.5=3$.`,
      String.raw`\textbf{Hexagone extérieur :} périmètre $6\times0.5774\approx3.464$.`,
      String.raw`\textbf{Cercle :} $C=\pi d=\pi\times1=\pi$, donc $3<\pi<3.464$.`],
    ans: String.raw`$3<\pi<3.464$` },
  { title: "La règle égyptienne de l'aire", q: String.raw`La règle du papyrus Rhind élève au carré les $\frac89$ du diamètre. Pour un champ de $27$ m de diamètre, compare la règle avec $\pi r^2$ et trouve la valeur de $\pi$ qu'elle sous-entend.`,
    steps: [String.raw`\textbf{Règle égyptienne :} côté $\frac89\times27=24$; aire $24^2=576$ m$^2$.`,
      String.raw`\textbf{Formule moderne} $A=\pi r^2$ avec $r=27\div2=13.5$ : $\pi(13.5)^2=182.25\pi\approx572.6$ m$^2$.`,
      String.raw`\textbf{Valeur de $\pi$ sous-entendue :} la règle dit que $\pi r^2=576$, donc $\pi=576\div182.25\approx3.1605$.`],
    ans: String.raw`$576$ comparé à $572.6$ m$^2$; $\pi\approx3.16$` },
  { title: "Comparer des approximations", q: String.raw`Trouve le pourcentage d'erreur de $3.16$ (Égypte) et de $3.1416$ (Aryabhata) par rapport à $\pi$.`,
    steps: [String.raw`\textbf{Formule :} pourcentage d'erreur $=\frac{|\text{approx.}-\text{vraie valeur}|}{\text{vraie valeur}}\times100\%$, avec $\pi\approx3.14159265$.`,
      String.raw`\textbf{Égypte :} $3.16-3.14159\approx0.01841$; $\frac{0.01841}{3.14159}\times100\%\approx0.59\%$.`,
      String.raw`\textbf{Aryabhata :} $3.1416-3.14159265\approx0.0000074$; $\frac{0.0000074}{3.14159}\times100\%\approx0.0002\%$.`],
    ans: String.raw`environ $0.6\%$ et $0.0002\%$` },
  { title: "Convertir des coudées", q: String.raw`Une coudée royale égyptienne mesurait environ $52.4$ cm. Le côté de la base de la Grande Pyramide mesure environ $440$ coudées. Convertis-le en mètres.`,
    steps: [String.raw`\textbf{Des coudées aux cm :} chaque coudée mesure $52.4$ cm, donc on multiplie : $440\times52.4=23\,056$ cm.`,
      String.raw`\textbf{Des cm aux m :} $1$ m $=100$ cm, donc on divise : $23\,056\div100=230.56$ m.`,
      String.raw`\textbf{Est-ce raisonnable ?} Le côté mesuré aujourd'hui est d'environ $230$ m \checkmark`],
    ans: String.raw`environ $230.6$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Montre qu'une corde tendue en côtés de $9$, $12$ et $15$ espaces égaux forme un angle droit.`, recap: "Corde 9, 12, 15.", ans: String.raw`$81+144=225=15^2$ ✓` },
  { level: 1, q: String.raw`Convertis le nombre en base 60 $2;20$ en nombre décimal, et $0.4$ heure en minutes.`, recap: "2;20 et 0.4 h.", ans: String.raw`$2.\overline{3}$; $24$ min` },
  { level: 1, q: String.raw`Écris $\frac{22}{7}$ et $\frac{355}{113}$ sous forme décimale à $5$ décimales. Quelles cultures utilisaient chacune ?`, recap: "22/7 et 355/113.", ans: String.raw`$3.14286$ (borne supérieure d'Archimède, Grèce); $3.14159$ (Zu Chongzhi, Chine)` },
  { level: 2, q: String.raw`Les rayons du Soleil forment des angles qui diffèrent de $6^\circ$ en deux endroits situés à $667$ km l'un de l'autre sur un axe nord--sud. Estime la circonférence de la Terre.`, recap: "6° sur 667 km.", ans: String.raw`$60\times667=40\,020$ km` },
  { level: 2, q: String.raw`Utilise la règle égyptienne pour estimer l'aire d'un cercle de diamètre $36$ cm. Compare avec $\pi r^2$.`, recap: "Règle égyptienne, d = 36.", ans: String.raw`$32^2=1024$ cm$^2$ comparé à $324\pi\approx1017.9$ cm$^2$` },
  { level: 2, q: String.raw`Convertis la valeur babylonienne de $\sqrt2$, $1;24,51,10$, en nombre décimal (6 décimales) et trouve sa différence avec $\sqrt2=1.414214$.`, recap: "1;24,51,10.", ans: String.raw`$1.414213$; différence d'environ $0.000001$` },
  { level: 2, q: String.raw`Un octogone régulier est tracé à l'intérieur d'un cercle de $10$ cm de diamètre. Chaque côté mesure $3.83$ cm. Quelle estimation de $\pi$ son périmètre donne-t-il ?`, recap: "Octogone dans un cercle, d = 10.", ans: String.raw`$8\times3.83=30.64$; $30.64\div10\approx3.06$` },
  { level: 2, q: String.raw`$(20, 99, 101)$ est-il un triplet de Pythagore ? Montre ton travail.`, recap: "(20, 99, 101).", ans: String.raw`$400+9801=10\,201=101^2$ : oui` },
  { level: 3, space: 5, q: String.raw`Ératosthène a mesuré $7.2^\circ$ sur $5000$ stades.
(a) Trouve sa circonférence en stades.
(b) Si un stade mesurait $157.5$ m, quelle est sa valeur en km ?
(c) Trouve le pourcentage d'erreur par rapport à $40\,075$ km.`, recap: "Ératosthène en km.", ans: String.raw`(a) $250\,000$ stades (b) $39\,375$ km (c) environ $1.7\%$ trop bas` },
  { level: 3, space: 5, q: String.raw`Explique pourquoi une corde de $12$ espaces égaux peut former un angle droit, mais qu'une corde de $11$ espaces égaux ne peut pas former un triangle $3$-$4$-$5$. Trouve le plus petit nombre d'espaces, autre que $12$, qui peut former un triangle rectangle dont les côtés sont des nombres entiers.`, recap: "Quelles cordes forment des angles droits ?", ans: String.raw`3-4-5 demande $12$ espaces (ou un multiple); $11$ n'est pas un multiple du périmètre d'un triplet. Ensuite : $24$ ($6,8,10$); $30$ ($5,12,13$) est le prochain nouveau triplet` },
  { level: 3, space: 5, q: String.raw`Archimède a utilisé un polygone à $96$ côtés. Pour un cercle de diamètre $1$, le polygone intérieur à $96$ côtés a un périmètre de $3.14103$ et le polygone extérieur à $96$ côtés, un périmètre de $3.14271$.
(a) Écris les bornes de $\pi$.
(b) Montre que $3\frac{10}{71}$ et $3\frac17$ se trouvent juste à l'extérieur de ces bornes.
(c) Pourquoi Archimède utilisait-il des fractions plutôt que des nombres décimaux ?`, recap: "Le polygone à 96 côtés d'Archimède.", ans: String.raw`(a) $3.14103<\pi<3.14271$ (b) $3.14085<3.14103$ et $3.14286>3.14271$, donc ses fractions sont des bornes sûres (un peu plus larges) (c) la notation décimale n'existait pas encore` },
  { level: 3, space: 5, q: String.raw`Le cadran d'une horloge est divisé selon la base 60 babylonienne.
(a) De combien de degrés l'aiguille des minutes tourne-t-elle en $1$ minute ? Et l'aiguille des heures ?
(b) Trouve l'angle entre les aiguilles à $3$ h $30$.`, recap: "Angles d'une horloge.", ans: String.raw`(a) $6^\circ$; $0.5^\circ$ (b) aiguille des minutes à $180^\circ$, aiguille des heures à $105^\circ$ : $75^\circ$` },
  { level: 3, space: 5, q: String.raw`Tâche de recherche : choisis une culture (par exemple égyptienne, babylonienne, indienne, chinoise, grecque, islamique, maya, ou les peuples autochtones de l'île de la Tortue). Décris une idée de géométrie ou de mesure qu'elle utilisait, le problème qu'elle permettait de résoudre et la façon dont elle se compare à la méthode utilisée aujourd'hui.`, recap: "Recherche sur une culture.", ans: "Les réponses varient : p. ex. l'astronomie du calendrier maya, les pavages géométriques islamiques, la construction d'autels des Śulba Sūtras, la géométrie conique du tipi; il faut nommer l'idée, son but et une comparaison" },
];

export const WS = {
  code: "5.1",
  title: "La géométrie et la mesure à travers l'histoire",
  bigideas: String.raw`La géométrie est née de besoins pratiques : retracer les champs, construire des coins d'équerre, suivre le Soleil et les étoiles, partager la terre. Plusieurs cultures ont découvert les mêmes vérités de façon indépendante --- l'angle droit $3$-$4$-$5$, le rapport constant $\pi$, la mesure des angles en base 60 --- et chacune a amélioré les outils de mesure. Les formules d'aujourd'hui sont le fruit de milliers d'années de travail partagé.`,
  goals: ["Décrire des idées de géométrie et de mesure provenant de plusieurs cultures.", "Utiliser une corde à nœuds et des triplets de Pythagore pour former des angles droits.", "Convertir entre la base 60 et les nombres décimaux.", "Appliquer la méthode angle--arc d'Ératosthène.", "Comparer des valeurs historiques de $\\pi$."],
  curriculum: "E1.1",
  vocab: [["Triplet de Pythagore", "nombres entiers tels que $a^2+b^2=c^2$"], ["Base 60", "valeurs de position 1, 1/60, 1/3600"], ["Circonférence", "distance autour d'un cercle, $C=\\pi d$"], ["Approximation", "une valeur proche de la valeur exacte"]],
  hook: String.raw`Remettez à chaque groupe une boucle de ficelle portant $12$ marques également espacées (ou une bande de papier). Demandez : « Sans rapporteur ni équerre, formez un angle droit parfait. » Après quelques minutes, présentez la méthode égyptienne $3$-$4$-$5$ et vérifiez-la avec le coin d'un livre.`,
  concepts: [
    ["1. Des angles droits à partir de triplets", String.raw`Si $a^2+b^2=c^2$, le triangle a un angle droit entre $a$ et $b$. Les multiples d'un triplet sont des triplets : $(3,4,5)\to(6,8,10)\to(9,12,15)$.
${figT(rightTri(4, 3, { la: "4", lb: "3", lc: "5", fill: "amber" }), 4)}`],
    ["2. La base 60", String.raw`$a;b,c$ signifie $a+\frac{b}{60}+\frac{c}{3600}$. Elle survit dans les $60$ minutes, les $60$ secondes et les $360^\circ$.`],
    ["3. Ératosthène", String.raw`$\dfrac{\text{angle}}{360^\circ}=\dfrac{\text{longueur de l'arc}}{\text{circonférence}}$, parce que les rayons parallèles du Soleil rendent l'angle au centre égal à l'angle de l'ombre.`],
    ["4. $\\pi$ entre des polygones", String.raw`Périmètre du polygone intérieur $<\pi d<$ périmètre du polygone extérieur. Plus il y a de côtés, plus les bornes sont serrées.
${figT([{ circle: [0, 0, 1], color: "ink" }, { poly: reg(8, 1), fill: "none", color: "blue" }, { poly: reg(8, 1 / Math.cos(Math.PI / 8), 90 + 22.5), fill: "none", color: "amber" }], 3.4)}`],
  ],
  tips: ["Insistez sur l'espacement égal : des nœuds inégaux font échouer la méthode.", "Les chiffres en base 60 sont séparés par des virgules; le point-virgule marque les unités.", "Faites remarquer que π lui-même n'est jamais exactement une fraction.", "Reliez Ératosthène à l'idée de proportion que les élèves connaissent grâce aux rapports.", "Invitez les élèves à présenter des traditions de mesure de leur propre culture."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
