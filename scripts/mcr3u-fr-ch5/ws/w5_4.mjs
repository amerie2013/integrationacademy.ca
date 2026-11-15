// MCR3U-FR Fiche 5.4 — La loi des sinus et le cas ambigu (édition enseignant).
// Miroir de ../../mcr3u-ch5/ws/w5_4.mjs : mêmes nombres, mêmes figures, texte en français.
import { polyT, sin, cos, asin, f, triSAS } from "./trigT.mjs";

const S = String.raw;
// Exemples 6 et 7 : A = 36°, a = 10, b = 15 (deux triangles)
const B1 = asin((15 * sin(36)) / 10), B2 = 180 - B1, C1 = 180 - 36 - B1, C2 = 180 - 36 - B2;
const c1 = (10 * sin(C1)) / sin(36), c2 = (10 * sin(C2)) / sin(36);
const Cx = 15 * cos(36), Cy = 15 * sin(36), dx = Math.sqrt(100 - Cy * Cy);
// Problème 9 : A = 33°, a = 14, b = 22
const P1 = asin((22 * sin(33)) / 14), P2 = 180 - P1, Q1 = 180 - 33 - P1, Q2 = 180 - 33 - P2;
const q1 = (14 * sin(Q1)) / sin(33), q2 = (14 * sin(Q2)) / sin(33);
// Problème 11 : vigies distantes de 8 km, 37° et 58°
const L = (8 * sin(58)) / sin(85), dist = L * sin(37);

const EXAMPLES = [
  { title: "ACA", q: S`Dans $\triangle ABC$, $\angle A=38^\circ$, $\angle B=71^\circ$, $c=25$. Trouve $a$ et $b$.`,
    fig: triSAS(25, 25, 38, ["A 38°", "B 71°", "C 71°"]),
    steps: [S`\textbf{Troisième angle :} $\angle C=180^\circ-38^\circ-71^\circ=71^\circ$.`,
      S`\textbf{Trouve $a$ :} $\frac a{\sin38^\circ}=\frac{25}{\sin71^\circ}$, donc $a\approx${f((25 * sin(38)) / sin(71))}$.`,
      S`\textbf{Trouve $b$ :} $b=\frac{25\sin71^\circ}{\sin71^\circ}=25$.`,
      S`\textbf{Remarque :} $B=C$; le triangle est donc isocèle avec $b=c$ \checkmark`],
    ans: S`$a\approx${f((25 * sin(38)) / sin(71))}$, $b=25$` },
  { title: "AAC avec un angle obtus", q: S`$\angle B=110^\circ$, $\angle C=25^\circ$, $b=30$. Résous le triangle.`,
    fig: triSAS(30, (30 * sin(25)) / sin(110), 45, ["A 45°", "B 110°", "C 25°"]),
    steps: [S`\textbf{Troisième angle :} $\angle A=45^\circ$.`,
      S`\textbf{Paire connue :} $b=30$ avec $\sin110^\circ$.`,
      S`\textbf{Côtés :} $a=\frac{30\sin45^\circ}{\sin110^\circ}\approx${f((30 * sin(45)) / sin(110))}$; $c=\frac{30\sin25^\circ}{\sin110^\circ}\approx${f((30 * sin(25)) / sin(110))}$.`,
      S`\textbf{Vérifie :} le plus long côté, $30$, fait face au plus grand angle, $110^\circ$ \checkmark`],
    ans: S`$A=45^\circ$, $a\approx${f((30 * sin(45)) / sin(110))}$, $c\approx${f((30 * sin(25)) / sin(110))}$` },
  { title: "CCA, un seul triangle", q: S`$\angle A=65^\circ$, $a=18$, $b=14$. Trouve $\angle B$.`,
    fig: triSAS(14, (18 * sin(180 - 65 - asin((14 * sin(65)) / 18))) / sin(65), 65, ["A 65°", "B", "C"]),
    steps: [S`\textbf{Dénombre les triangles :} $a\ge b$, il y en a donc exactement un.`,
      S`\textbf{Pourquoi $B$ est aigu :} $b<a$, donc $B<A$. On écarte donc la possibilité obtuse.`,
      S`\textbf{Loi des sinus :} $\sin B=\frac{14\sin65^\circ}{18}$, ce qui donne $B\approx${f(asin((14 * sin(65)) / 18), 1)}^\circ$.`],
    ans: S`$B\approx${f(asin((14 * sin(65)) / 18), 1)}^\circ$` },
  { title: "CCA, aucun triangle", q: S`$\angle A=50^\circ$, $a=6$, $b=10$. Combien y a-t-il de triangles?`,
    fig: polyT([[0, 0], [10 * cos(50), 10 * sin(50)]], ["A", "C"], { open: true, extra: [{ pts: [[0, 0], [12, 0]], color: "gray" }, { pts: [[10 * cos(50), 10 * sin(50)], [10 * cos(50), 10 * sin(50) - 6]], color: "red" }], marks: [[10 * cos(50), 10 * sin(50) - 6, "a = 6 trop court"]] }),
    steps: [S`\textbf{Hauteur :} la plus courte distance de $C$ à la base est $h=10\sin50^\circ\approx${f(10 * sin(50))}$.`,
      S`\textbf{Compare :} $a=6<h$; le côté $a$ ne peut donc pas atteindre la base.`,
      S`\textbf{Vérifie avec la loi :} $\sin B=\frac{10\sin50^\circ}6>1$, ce qui est impossible \checkmark`],
    ans: "aucun triangle" },
  { title: "CCA, exactement un triangle rectangle", q: S`$\angle A=30^\circ$, $b=16$, $a=8$. Combien y a-t-il de triangles?`,
    fig: triSAS(16, 16 * cos(30), 30, ["A 30°", "B 90°", "C"]),
    steps: [S`\textbf{Hauteur :} $h=16\sin30^\circ=8$.`,
      S`\textbf{Compare :} $a=h$; le côté $a$ touche donc tout juste la base.`,
      S`\textbf{Conclus :} $\angle B=90^\circ$.`,
      S`\textbf{Vérifie :} $\sin B=\frac{16\sin30^\circ}8=1$ \checkmark`],
    ans: "un triangle rectangle" },
  { title: "CCA, deux triangles", q: S`$\angle A=36^\circ$, $a=10$, $b=15$. Combien y a-t-il de triangles? Trouve les deux valeurs de ∠B.`,
    fig: polyT([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A", "B₁", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }], marks: [[Cx - dx, 0, "B₂"]] }),
    steps: [S`\textbf{Hauteur :} $h=15\sin36^\circ\approx${f(15 * sin(36))}$.`,
      S`\textbf{Compare :} $h<a<b$; il y a donc deux triangles.`,
      S`\textbf{Loi des sinus :} $\sin B=\frac{15\sin36^\circ}{10}$, donc $B_1\approx${f(B1, 1)}^\circ$.`,
      S`\textbf{Deuxième angle :} $B_2=180^\circ-B_1\approx${f(B2, 1)}^\circ$, puisque le sinus est aussi positif dans le quadrant 2.`],
    ans: S`$${f(B1, 1)}^\circ$ ou $${f(B2, 1)}^\circ$` },
  { title: "Compléter les deux triangles", q: S`Pour $\angle A=36^\circ$, $a=10$, $b=15$, complète les deux triangles possibles.`,
    fig: polyT([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A", "B₁", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }], marks: [[Cx - dx, 0, "B₂"]] }),
    steps: [S`\textbf{Triangle 1 :} $C_1=180^\circ-36^\circ-B_1\approx${f(C1, 1)}^\circ$.`,
      S`\textbf{Côté :} $c_1=\frac{10\sin C_1}{\sin36^\circ}\approx${f(c1)}$.`,
      S`\textbf{Triangle 2 :} $C_2\approx${f(C2, 1)}^\circ$ et $c_2=\frac{10\sin C_2}{\sin36^\circ}\approx${f(c2)}$.`,
      S`\textbf{Vérifie :} la figure montre que $c_1$ (jusqu'à $B_1$) est plus long que $c_2$ (jusqu'à $B_2$) \checkmark`],
    ans: S`$c\approx${f(c1)}$ ou $${f(c2)}$` },
  { title: "Angle donné obtus", q: S`$\angle A=120^\circ$, $a=9$, $b=12$. Combien y a-t-il de triangles?`,
    fig: polyT([[0, 0], [12 * cos(120), 12 * sin(120)]], ["A 120°", "C"], { open: true, extra: [{ pts: [[0, 0], [8, 0]], color: "gray" }] , marks: [[-3, 5.2, "b = 12"]] }),
    steps: [S`\textbf{Règle :} le plus grand angle fait face au plus long côté. Un angle obtus est toujours le plus grand.`,
      S`\textbf{Compare :} $A$ est obtus; $a$ doit donc être plus long que $b$. Or $9<12$.`,
      S`\textbf{Image :} $C$ est déjà à $12$ de $A$, et chaque point à droite sur la base est encore plus loin; $a=9$ ne peut donc pas l'atteindre.`],
    ans: "aucun" },
  { title: "Localiser un incendie", q: "Deux postes de garde forestiers sont distants de 12 km. Un incendie est aperçu à 54° de la droite qui les relie au poste 1 et à 71° au poste 2. À quelle distance du poste 1 se trouve l'incendie?",
    fig: polyT([[0, 0], [12, 0], [(12 * sin(71) / sin(55)) * cos(54), (12 * sin(71) / sin(55)) * sin(54)]], ["poste 1", "poste 2", "incendie"]),
    steps: [S`\textbf{Troisième angle :} à l'incendie, $180^\circ-54^\circ-71^\circ=55^\circ$.`,
      S`\textbf{Paire connue :} $12$ km fait face à $55^\circ$.`,
      S`\textbf{Associe :} le côté issu du poste 1 fait face à l'angle de $71^\circ$.`,
      S`\textbf{Résous :} $\frac{12\sin71^\circ}{\sin55^\circ}\approx${f((12 * sin(71)) / sin(55))}$ km. Il est plus long que $12$, puisque $71^\circ>55^\circ$ \checkmark`],
    ans: S`$\approx${f((12 * sin(71)) / sin(55))}$ km` },
];

const PROBLEMS = [
  { level: 1, q: S`$\angle A=50^\circ$, $\angle B=60^\circ$, $a=10$. Trouve $b$.`, recap: "Côté avec la loi des sinus.", ans: S`$\approx${f((10 * sin(60)) / sin(50))}$` },
  { level: 1, q: S`$\angle A=40^\circ$, $a=12$, $b=10$. Combien y a-t-il de triangles?`, recap: "Dénombrer.", ans: S`un seul ($a\ge b$)` },
  { level: 1, q: S`$\angle A=48^\circ$, $\angle B=67^\circ$. Trouve $\angle C$.`, recap: "Troisième angle.", ans: S`$65^\circ$` },
  { level: 2, q: S`$\angle A=35^\circ$, $\angle B=85^\circ$, $c=40$. Trouve $a$.`, recap: "ACA.", ans: S`$C=60^\circ$; $a\approx${f((40 * sin(35)) / sin(60))}$` },
  { level: 2, q: S`$\angle A=55^\circ$, $a=20$, $b=17$. Trouve $\angle B$.`, recap: "CCA, un seul.", ans: S`$\approx${f(asin((17 * sin(55)) / 20), 1)}^\circ$` },
  { level: 2, q: S`$\angle A=25^\circ$, $a=6$, $b=12$. Combien y a-t-il de triangles? Justifie.`, recap: "Dénombrer avec h.", ans: S`$h\approx${f(12 * sin(25))}<6<12$ : deux` },
  { level: 2, q: S`$\angle A=60^\circ$, $a=5$, $b=8$. Combien y a-t-il de triangles? Justifie.`, recap: "Dénombrer avec h.", ans: S`$h\approx${f(8 * sin(60))}>5$ : aucun` },
  { level: 2, q: "Les points A et B sont distants de 200 m sur une rive d'un lac. Un point C sur la rive opposée donne ∠CAB = 47° et ∠CBA = 68°. Trouve BC.", recap: "Relevé d'un lac.", ans: S`$\angle C=65^\circ$; $BC=\frac{200\sin47^\circ}{\sin65^\circ}\approx${f((200 * sin(47)) / sin(65), 1)}$ m`,
    fig: polyT([[0, 0], [200, 0], [((200 * sin(68)) / sin(65)) * cos(47), ((200 * sin(68)) / sin(65)) * sin(47)]], ["A", "B", "C"]) },
  { level: 3, space: 5, q: S`$\angle A=33^\circ$, $a=14$, $b=22$. Résous tous les triangles possibles.`, recap: "Les deux triangles.", ans: S`$B\approx${f(P1, 1)}^\circ$, $C\approx${f(Q1, 1)}^\circ$, $c\approx${f(q1)}$; ou $B\approx${f(P2, 1)}^\circ$, $C\approx${f(Q2, 1)}^\circ$, $c\approx${f(q2)}$`,
    fig: polyT([[32, 0], [0, 0], [22 * cos(33), 22 * sin(33)]], ["", "A", "C"], { open: true, cap: "le côté a = 14 pivote autour de C jusqu'à rencontrer la demi-droite de la base" }) },
  { level: 3, space: 4, q: S`$\angle A=40^\circ$ et $b=18$. Trouve toutes les valeurs de $a$ qui donnent deux triangles.`, recap: "Intervalle de a.", ans: S`$18\sin40^\circ<a<18$, c'est-à-dire $${f(18 * sin(40))}<a<18$` },
  { level: 3, space: 5, q: "Deux vigies distantes de 8 km sur une côte rectiligne aperçoivent un navire selon des angles de 37° et de 58° avec la côte. À quelle distance de la côte se trouve le navire?", recap: "Loi des sinus + triangle rectangle.", ans: S`distance à la première vigie $\frac{8\sin58^\circ}{\sin85^\circ}\approx${f(L)}$; multiplie par $\sin37^\circ$ : $\approx${f(dist)}$ km`,
    fig: polyT([[0, 0], [8, 0], [L * cos(37), L * sin(37)]], ["", "", "navire"], { extra: [{ pts: [[L * cos(37), L * sin(37)], [L * cos(37), 0]], color: "red" }], marks: [[4, 0, "8 km"]] }) },
  { level: 3, space: 4, q: S`Explique pourquoi, lorsque $\angle A$ est obtus et $a\le b$, aucun triangle n'existe.`, recap: "Expliquer.", ans: "le plus grand angle fait face au plus long côté; un angle A obtus doit faire face au plus long côté, il faut donc a > b" },
  { level: 3, space: 4, q: S`$\angle A=28^\circ$ et $b=20$. Pour quelles valeurs de $a$ y a-t-il exactement un triangle?`, recap: "Exactement un.", ans: S`$a=20\sin28^\circ\approx${f(20 * sin(28))}$ (triangle rectangle) ou $a\ge20$` },
];

export const WS = {
  code: "5.4",
  title: "La loi des sinus et le cas ambigu",
  bigideas: S`Dans tout triangle, $\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}$. Les cas ACA et AAC donnent un seul triangle. Le cas CCA (deux côtés et un angle non compris) peut donner 0, 1 ou 2 triangles : compare $a$ avec $h=b\sin A$ et avec $b$.`,
  goals: ["Déduire et utiliser la loi des sinus.", "Résoudre des triangles dans les cas ACA et AAC.", "Déterminer le nombre de triangles dans le cas CCA.", "Résoudre les deux triangles dans le cas ambigu."],
  curriculum: "D1.6",
  vocab: [["Quelconque", "sans angle droit"], ["Cas ambigu", "cas CCA qui peut donner deux triangles"], ["$h=b\\sin A$", "hauteur de C jusqu'à la base"]],
  hook: "Donne aux élèves un angle fixe tracé sur papier et un côté fixe b, ainsi qu'une ficelle de longueur a. En combien d'endroits la ficelle peut-elle toucher la base?",
  concepts: [
    ["1. Démonstration", S`Abaisse $h$ à partir de C : $h=b\sin A=a\sin B$, donc $\frac a{\sin A}=\frac b{\sin B}$.`],
    ["2. Le cas ambigu (∠A aigu)", S`\begin{tabular}{ll}\toprule Condition & Triangles\\\midrule $a<h$ & 0\\ $a=h$ & 1 (rectangle)\\ $h<a<b$ & 2\\ $a\ge b$ & 1\\\bottomrule\end{tabular}
${polyT([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A", "", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }, { pts: [[Cx, Cy], [Cx, 0]], color: "gray" }], marks: [[Cx, Cy / 2, "h"]], width: 5.5 })}`],
    ["3. Le deuxième angle", S`Si $B_1$ convient, teste $B_2=180^\circ-B_1$ : il convient lorsque $A+B_2<180^\circ$.`],
  ],
  tips: ["Associe chaque côté à son angle opposé.", "sin⁻¹ ne donne que l'angle aigu.", "Si sin B > 1, il n'y a aucun triangle.", "Garde toute la précision entre les étapes.", "Dessine les deux triangles lorsqu'il y en a deux."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
