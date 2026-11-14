// MTH1W-FR 5.6 — Modifier les dimensions : l'aire (format autonome) : formules d'aire, aire de figures composées,
// modifier une dimension ou toutes (k²), aire maximale pour un périmètre donné
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, rect, polygon } from "../mth1w-ch5/figs5.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "5.6 Modifier les dimensions : l'aire";
export const ID = lessonId(5, 6);

const arc = (cx, cy, r, a0, a1, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const blocks = () => [
  intro({
    icon: "🟦",
    title: "Modifier les dimensions : l'aire",
    overview: String.raw`L'aire mesure la surface à l'intérieur d'une frontière : la peinture, le revêtement de sol, le gazon en plaques, le verre. Tu réviseras les formules d'aire, tu décomposeras des figures composées en morceaux plus simples et tu découvriras l'effet surprenant d'un agrandissement — double chaque longueur et l'aire devient quatre fois plus grande. Tu trouveras ensuite le rectangle qui entoure la plus grande aire avec une longueur de clôture fixe.`,
    goals: [
      "utiliser les formules d'aire des rectangles, des triangles, des parallélogrammes, des trapèzes et des cercles;",
      "trouver l'aire de figures composées en additionnant et en soustrayant des aires plus simples;",
      "décrire comment la modification d'une dimension change l'aire;",
      "expliquer pourquoi multiplier chaque longueur par \\(k\\) multiplie l'aire par \\(k^2\\);",
      "trouver le rectangle d'aire maximale pour un périmètre donné (un carré), avec et sans mur.",
    ],
    curriculum: "E1.4 (effet de la modification des dimensions sur l'aire; optimisation)",
    prior: [
      [String.raw`Aire d'un triangle de base \(10\) et de hauteur \(6\) ?`, String.raw`\(\tfrac12(10)(6)=30\).`],
      [String.raw`Aire d'un cercle de rayon \(2\) ?`, String.raw`\(4\pi\approx12.6\).`],
      [String.raw`\(2.5^2=?\)`, String.raw`\(6.25\).`],
    ],
    words: [
      ["Aire", "le nombre de carrés-unités qui recouvrent une région", "\\(\\text{cm}^2\\)"],
      ["Hauteur", "distance perpendiculaire entre la base et le côté ou le sommet opposé", "toujours ⟂ à la base"],
      ["Trapèze", "quadrilatère ayant une paire de côtés parallèles", "\\(A=\\tfrac12(a+b)h\\)"],
      ["Facteur d'aire", "le nombre par lequel l'aire est multipliée", "\\(k^2\\)"],
      ["Maximum", "la plus grande valeur possible", "aire maximale"],
    ],
  }),

  section("📌 Formules d'aire", String.raw`
  ${table(["Figure", "Aire", "Remarque"], [
    ["rectangle", "\\(A=lw\\)", ""], ["parallélogramme", "\\(A=bh\\)", "h est la hauteur perpendiculaire, pas le côté incliné"],
    ["triangle", "\\(A=\\tfrac12bh\\)", "la moitié d'un parallélogramme"], ["trapèze", "\\(A=\\tfrac12(a+b)h\\)", "moyenne des côtés parallèles × hauteur"],
    ["cercle", "\\(A=\\pi r^2\\)", "utilise le rayon, pas le diamètre"],
  ])}
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;">
  ${fig({ w: 230, items: [...polygon([[0, 0], [6, 0], [7.5, 3], [1.5, 3]], { sides: ["b", "", "", ""], fill: "blue" }), { seg: [[1.5, 0], [1.5, 3]], color: "red", dash: true }, { right: [[2.5, 0], [1.5, 0], [1.5, 3]] }, { text: "h", at: [1.9, 1.5], bold: true, color: "red" }] }, "Parallélogramme : A = bh.")}
  ${fig({ w: 230, items: [...polygon([[0, 0], [7, 0], [5, 3], [2, 3]], { sides: ["b", "", "a", ""], fill: "green", color: "green" }), { seg: [[2, 0], [2, 3]], color: "red", dash: true }, { right: [[3, 0], [2, 0], [2, 3]] }, { text: "h", at: [2.4, 1.5], bold: true, color: "red" }] }, "Trapèze : A = ½(a + b)h.")}
  </div>
  <p><strong>Figures composées :</strong> décompose en morceaux et additionne, ou prends une grande figure et soustrais le trou.</p>`),

  section("📌 Agrandissement : l'aire est multipliée par k²", String.raw`
  <p>Agrandis un rectangle de \(3\times2\) selon \(k=2\) : il devient \(6\times4\). L'aire passe de \(6\) à \(24\) — quatre fois plus, parce que la longueur <em>et</em> la largeur ont doublé.</p>
  ${fig({ w: 320, items: [...rect(3, 2, { lw: "3", lh: "2" }), ...rect(6, 4, { lw: "6", lh: "4", fill: "violet", at: [4.5, 0] }), ...[1, 2].flatMap((i) => [{ seg: [[4.5 + 3 * i, 0], [4.5 + 3 * i, 4]], color: "violet", dash: true, width: 1.2 }]).slice(0, 1), { seg: [[4.5, 2], [10.5, 2]], color: "violet", dash: true, width: 1.2 }] }, "En doublant chaque longueur, on peut y placer quatre copies de la figure initiale.")}
  ${keyIdea(String.raw`Nouvelle aire \(=k^2\times\) ancienne aire. L'aire a deux dimensions, donc le facteur de longueur s'applique deux fois. Modifier <em>une seule</em> dimension selon un facteur multiplie l'aire par ce facteur une seule fois.`)}`),

  widget("scaleShape", { initShape: "triangle" }),

  section("📌 La plus grande aire pour un périmètre donné", String.raw`
  <p>Avec \(24\) m de clôture :</p>
  ${table(["largeur (m)", "2", "4", "5", "6", "8"], [["longueur (m)", "10", "8", "7", "6", "4"], ["aire (m²)", "20", "32", "35", "36", "32"]])}
  ${keyIdea(String.raw`Pour un périmètre fixe, le rectangle d'<strong>aire maximale est un carré</strong> (côté \(=\tfrac P4\)). Contre un mur (clôture sur trois côtés), l'aire maximale est obtenue quand le côté le long du mur est le <strong>double</strong> de la largeur : \(w=\tfrac P4\), \(l=\tfrac P2\).`)}`),

  widget("rectOptimizer", { initMode: "perimeter" }),

  section("📌 Stratégie", watchOut([
    "Utilise la hauteur perpendiculaire, pas un côté incliné.",
    "L'aire du cercle utilise r² : élève le rayon au carré, pas le diamètre.",
    "Un agrandissement de facteur k multiplie l'aire par k², pas par k : double les côtés, quatre fois l'aire.",
    "Les unités d'aire sont au carré : cm², m².",
  ])),

  examples([
    ["Une fenêtre composée", String.raw`Une fenêtre est un rectangle de \(120\) cm de largeur et de \(150\) cm de hauteur, surmonté d'un demi-cercle (diamètre \(120\) cm). Trouve l'aire de la vitre.`,
      [String.raw`<b>Plan.</b> Décompose la figure composée en figures dont on connaît la formule, puis additionne : rectangle \(+\) demi-cercle.`,
        String.raw`<b>Rectangle :</b> \(A=l\times w=120\times150=18\,000\ \text{cm}^2\).`,
        String.raw`<b>Demi-cercle.</b> La moitié d'un cercle : \[A=\tfrac12\pi r^2\] Le rayon est la moitié du diamètre, \(r=120\div2=60\) : \(A=\tfrac12\pi(60)^2=\tfrac12\pi(3600)=1800\pi\approx5654.9\ \text{cm}^2\).`,
        String.raw`<b>Total :</b> \(18\,000+5654.9=23\,654.9\ \text{cm}^2\).`,
        String.raw`<b>En mètres carrés :</b> \(1\ \text{m}^2=10\,000\ \text{cm}^2\), donc \(23\,654.9\div10\,000\approx2.37\ \text{m}^2\).`],
      String.raw`\(\approx23\,655\ \text{cm}^2\) (environ \(2.37\ \text{m}^2\))`,
      fig({ w: 200, items: [{ poly: [[0, 0], [12, 0], [12, 15], ...arc(6, 15, 6, 0, 180).slice(1), [0, 15]], fill: "blue", color: "blue" }, { seg: [[0, 15], [12, 15]], color: "blue", dash: true, width: 1.3 }, { text: "120 cm", at: [6, -1.4], bold: true, color: "blue" }, { text: "150 cm", at: [12.8, 7.5], bold: true, color: "blue", anchor: "start" }] })],
    ["Un jardin en trapèze", String.raw`Une plate-bande est un trapèze dont les côtés parallèles mesurent \(8\) m et \(14\) m et sont à \(5\) m l'un de l'autre. Trouve son aire.`,
      [String.raw`<b>Formule.</b> \[A=\tfrac12(a+b)h\] où \(a\) et \(b\) sont les côtés parallèles et \(h\) est la distance perpendiculaire entre eux.`,
        String.raw`<b>Pourquoi ça fonctionne.</b> Deux copies du trapèze, dont une à l'envers, forment un parallélogramme de base \(a+b\) et de hauteur \(h\). Le trapèze en est la moitié.`,
        String.raw`<b>Substituer</b> \(a=8\), \(b=14\), \(h=5\) : \(A=\tfrac12(8+14)(5)=\tfrac12(22)(5)=55\ \text{m}^2\).`],
      String.raw`\(55\ \text{m}^2\)`,
      fig({ w: 280, items: [...polygon([[0, 0], [14, 0], [11, 5], [3, 5]], { sides: ["14 m", "", "8 m", ""], fill: "green", color: "green" }), { seg: [[3, 0], [3, 5]], color: "red", dash: true }, { text: "5 m", at: [3.5, 2.5], color: "red", bold: true, anchor: "start" }] })],
    ["Réduire un triangle", String.raw`Une voile triangulaire a une aire de \(24\ \text{m}^2\). On en construit une maquette dont chaque longueur est le \(\tfrac13\) de celle de la vraie voile. Trouve l'aire de la maquette.`,
      [String.raw`<b>Règle.</b> Si chaque longueur est multipliée par \(k\), l'aire est multipliée par \(k^2\).`,
        String.raw`<b>Pourquoi.</b> L'aire est une longueur \(\times\) une longueur (ici \(\tfrac12\times\) base \(\times\) hauteur), et chaque longueur est multipliée par \(k\), donc l'aire est multipliée par \(k\times k=k^2\).`,
        String.raw`<b>Facteur d'aire :</b> \(k=\tfrac13\), donc \(k^2=\tfrac19\).`,
        String.raw`<b>Aire de la maquette :</b> \(24\times\tfrac19=\tfrac{24}{9}\approx2.67\ \text{m}^2\).`,
        String.raw`<b>Vérifier avec une vraie voile.</b> Base \(8\), hauteur \(6\) : \(\tfrac12(8)(6)=24\) ✓. Maquette : base \(\tfrac83\), hauteur \(2\) : \(\tfrac12\cdot\tfrac83\cdot2=\tfrac83\approx2.67\) ✓.`],
      String.raw`\(\approx2.67\ \text{m}^2\)`],
    ["Une dimension ou les deux", String.raw`Un tapis de \(6\) m sur \(4\) m. a) Double seulement la longueur. b) Double les deux dimensions. Compare les aires.`,
      [String.raw`<b>Formule</b> \(A=l\times w\). Initiale : \(6\times4=24\ \text{m}^2\).`,
        String.raw`<b>a)</b> \(12\times4=48\ \text{m}^2\). \(48\div24=2\) : une seule longueur a doublé, donc l'aire double.`,
        String.raw`<b>b)</b> \(12\times8=96\ \text{m}^2\). \(96\div24=4\) : les deux longueurs ont doublé, donc l'aire est \(2\times2=2^2=4\) fois plus grande.`,
        String.raw`<b>Visualiser.</b> Quatre copies du tapis initial entrent exactement dans le tapis doublé.`],
      "a) double l'aire; b) la quadruple",
      fig({ w: 320, items: [...rect(6, 4, { lw: "6 m", lh: "4 m" }), ...rect(12, 8, { lw: "12 m", lh: "8 m", fill: "amber", at: [9.5, 0] }), { seg: [[15.5, 0], [15.5, 8]], color: "amber", dash: true, width: 1.2 }, { seg: [[9.5, 4], [21.5, 4]], color: "amber", dash: true, width: 1.2 }] })],
    ["La plus grande aire avec un mur", String.raw`Une agricultrice a \(60\) m de clôture. Trouve la plus grande aire rectangulaire a) avec de la clôture sur les quatre côtés, b) en utilisant un mur de la grange comme un des côtés.`,
      [String.raw`<b>a) Règle.</b> Pour un périmètre fixe, le rectangle d'aire maximale est un carré. Côté \(=60\div4=15\) m, aire \(=15^2=225\ \text{m}^2\).`,
        String.raw`<b>b) Mise en équation.</b> La clôture couvre deux largeurs et une longueur : \(2w+l=60\), donc \(l=60-2w\) et \(A=w(60-2w)\).`,
        String.raw`<b>Essayer des valeurs :</b> \(w=10\) : \(10\times40=400\); \(w=15\) : \(15\times30=450\); \(w=20\) : \(20\times20=400\). La plus grande est en \(w=15\).`,
        String.raw`<b>Résultat :</b> \(15\) m sur \(30\) m : le côté le long du mur est le double de la largeur. Vérification : \(2(15)+30=60\) ✓; aire \(450\ \text{m}^2\).`],
      String.raw`a) \(225\ \text{m}^2\); b) \(450\ \text{m}^2\) — le mur double l'aire`,
      fig({ w: 280, items: [{ seg: [[-1, 7.5], [16, 7.5]], color: "gray", width: 4 }, { text: "mur de la grange", at: [7.5, 8.3], color: "gray", bold: true, size: 12 }, ...rect(15, 7.5, { lw: "30 m", lh: "15 m", fill: "green" })] })],
  ]),

  practice([
    q("cercle", String.raw`Trouve l'aire d'un cercle de rayon \(7\) cm, au centième près.`, num(153.94, 0.006),
      "A = πr².", [String.raw`\(\pi(49)\approx153.938\).`], String.raw`\(\approx153.94\ \text{cm}^2\)`),
    q("facteur d'aire", String.raw`Chaque longueur d'une figure est multipliée par \(2.5\). Par quel nombre l'aire est-elle multipliée ?`, num(6.25),
      "Facteur d'aire = k².", [String.raw`\(2.5^2=6.25\).`], String.raw`\(6.25\)`),
    q("aire agrandie", String.raw`Un triangle d'aire \(18\ \text{cm}^2\) est agrandi selon un facteur d'échelle de \(3\). Trouve la nouvelle aire.`, num(162),
      "Multiplie par k² = 9.", [String.raw`\(18\times9=162\).`], String.raw`\(162\ \text{cm}^2\)`),
    q("aire maximale", String.raw`Quelle est la plus grande aire d'un rectangle de périmètre \(48\) m ?`, num(144),
      "Le meilleur rectangle est un carré.", [String.raw`Côté \(48\div4=12\); \(12^2=144\).`], String.raw`\(144\ \text{m}^2\)`),
    q("aire maximale avec un mur", String.raw`\(40\) m de clôture entourent un rectangle contre un mur (trois côtés clôturés). Quelle est la plus grande aire ?`, num(200),
      "w = P/4 et l = P/2.", [String.raw`\(w=10\), \(l=20\); \(10\times20=200\).`], String.raw`\(200\ \text{m}^2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi l'aire est-elle multipliée par k² et non par k ?", "L'aire d'un rectangle est longueur × largeur. L'agrandissement multiplie les deux par k, donc l'aire est multipliée par k × k = k². C'est vrai pour toutes les figures, parce qu'on peut construire n'importe quelle figure avec de minuscules carrés."],
      ["Pourquoi le carré est-il le meilleur pour l'aire ET pour le périmètre ?", "C'est la même question posée à l'envers. Pour un périmètre fixe, un carré donne la plus grande aire; pour une aire fixe, un carré demande le plus petit périmètre."],
      ["Pourquoi un mur aide-t-il autant ?", "Le mur remplace un côté complet de clôture, donc la même clôture peut s'étendre plus loin le long du mur. La meilleure figure est la moitié d'un carré : le côté du mur est le double de la largeur."],
      ["La meilleure figure est-elle toujours un rectangle ?", "Non. Pour un périmètre fixe, un cercle entoure encore plus d'aire qu'un carré : 24 m de clôture donnent 36 m² en carré, mais environ 45.8 m² en cercle."],
      ["Et si la réponse doit être en mètres entiers ?", "Choisis les dimensions entières les plus proches du carré (ou de l = 2w avec un mur) et vérifie les valeurs voisines dans une table."],
    ],
    summary: [
      "A = lw, bh, ½bh, ½(a + b)h, πr²; figure composée : additionne ou soustrais des morceaux.",
      "Modifier une dimension selon un facteur multiplie l'aire par ce facteur.",
      "Multiplier chaque longueur par k multiplie l'aire par k².",
      "Aire maximale pour un périmètre fixe : un carré; avec un mur, l = 2w.",
    ],
    next: "En 5.7, tu passeras aux trois dimensions : le volume.",
  }),
];
