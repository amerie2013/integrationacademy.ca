// MTH1W-FR 6.4 — Le processus de modélisation mathématique (miroir de ../mth1w-ch6/l6_4.mjs) : le cycle de
// modélisation, les hypothèses, des modèles linéaires et exponentiels à partir de données, tester et raffiner un modèle
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { scatter } from "./figs6.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "6.4 Le processus de modélisation mathématique";
export const ID = lessonId(6, 4);

// même schéma que l'anglais; boîtes un peu plus larges (210 au lieu de 190) et police 13 pour les libellés français
const steps = ["1. Comprendre le problème", "2. Hypothèses et variables", "3. Construire le modèle", "4. Analyser et résoudre", "5. Interpréter et vérifier", "6. Raffiner et communiquer"];
const cycle = () => {
  const cx = 280, cy = 170, rx = 190, ry = 125, bw = 210, bh = 40;
  const at = (i) => { const a = ((-90 + i * 60) * Math.PI) / 180; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; };
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 340" width="560" height="340" style="max-width:100%;height:auto;" font-family="Arial, sans-serif"><rect width="560" height="340" fill="#fff"/><defs><marker id="arr6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#15803d"/></marker></defs>`;
  steps.forEach((_, i) => {
    const [x1, y1] = at(i), [x2, y2] = at((i + 1) % 6);
    const t = 0.32, u = 0.68;
    s += `<line x1="${x1 + (x2 - x1) * t}" y1="${y1 + (y2 - y1) * t}" x2="${x1 + (x2 - x1) * u}" y2="${y1 + (y2 - y1) * u}" stroke="#15803d" stroke-width="2" marker-end="url(#arr6)"/>`;
  });
  steps.forEach((t, i) => {
    const [x, y] = at(i);
    s += `<rect x="${x - bw / 2}" y="${y - bh / 2}" width="${bw}" height="${bh}" rx="10" fill="#ecfdf5" stroke="#15803d" stroke-width="1.8"/><text x="${x}" y="${y + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">${t.replace("&", "&amp;")}</text>`;
  });
  s += `<text x="${cx}" y="${cy - 4}" font-size="14" font-weight="700" text-anchor="middle" fill="#1e40af">recommencer jusqu'à ce que</text><text x="${cx}" y="${cy + 16}" font-size="14" font-weight="700" text-anchor="middle" fill="#1e40af">le modèle soit assez bon</text></svg>`;
  return `<div style="text-align:center;margin:12px 0;">${s}</div>`;
};

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Le processus de modélisation mathématique",
    overview: String.raw`Un modèle mathématique est une équation, un graphique ou un tableau qui représente une situation réelle afin de pouvoir prédire et décider. Les vrais problèmes sont complexes : tu dois décider ce qui compte, formuler des hypothèses, construire un modèle, le confronter à la réalité et l'améliorer. Cette leçon parcourt ce cycle avec des modèles linéaires et exponentiels construits à partir de données, et montre comment reconnaître le moment où un modèle cesse d'avoir du sens.`,
    goals: [
      "décrire les six étapes du processus de modélisation;",
      "formuler des hypothèses raisonnables et reconnaître les variables d'un problème réel;",
      "construire un modèle linéaire à partir d'un taux constant et un modèle exponentiel à partir d'un rapport constant;",
      "utiliser les premières différences et les rapports pour choisir entre un modèle linéaire et un modèle non linéaire;",
      "tester les prédictions d'un modèle, décrire ses limites et le raffiner.",
    ],
    curriculum: "D2.1–D2.5 (le processus de modélisation mathématique), C (relations)",
    prior: [
      [String.raw`Premières différences de \(5, 8, 11, 14\)?`, String.raw`\(3, 3, 3\) : linéaire.`],
      [String.raw`Rapports de \(4, 8, 16, 32\)?`, String.raw`chaque terme est \(\times2\).`],
      [String.raw`Évalue \(200(1.5)^2\).`, String.raw`\(450\).`],
    ],
    words: [
      ["Modèle", "une description mathématique d'une situation réelle", "\\(C=12n+40\\)"],
      ["Hypothèse", "quelque chose qu'on tient pour vrai afin de rendre le problème abordable", "le prix reste le même"],
      ["Variable", "une quantité qui change", "temps, coût"],
      ["Valider", "comparer un modèle à des données réelles ou au bon sens", "prédit-il les valeurs connues?"],
      ["Raffiner", "améliorer un modèle après l'avoir testé", "ajouter des frais, changer le taux"],
    ],
  }),

  section("📌 Le cycle de modélisation", String.raw`
  ${cycle()}
  ${table(["Étape", "Questions à se poser"], [
    ["Comprendre", "Que demande-t-on exactement? Quelle information ai-je, et de quoi ai-je besoin?"],
    ["Formuler des hypothèses", "Que puis-je ignorer ou garder constant? Quelles variables comptent? Quelles unités?"],
    ["Construire", "La régularité est-elle linéaire (différence constante) ou non linéaire (rapport constant, courbe)? Écris une équation, un tableau ou un graphique."],
    ["Analyser", "Utilise le modèle pour calculer la réponse."],
    ["Interpréter et vérifier", "La réponse a-t-elle du sens dans le contexte? Le modèle correspond-il aux données que j'ai?"],
    ["Raffiner et communiquer", "Améliore les hypothèses, puis explique le résultat, le modèle et ses limites."],
  ])}`),

  section("📌 Choisir un modèle à partir de données", String.raw`
  ${table(["Régularité dans le tableau (pas égaux en x)", "Modèle", "Équation"], [
    ["premières différences constantes", "linéaire", "\\(y=mx+b\\)"],
    ["rapports constants (chaque y est le précédent × r)", "exponentiel", "\\(y=a\\,r^x\\)"],
    ["deuxièmes différences constantes", "quadratique", "\\(y=ax^2+bx+c\\)"],
  ])}
  ${keyIdea(String.raw`Un modèle ne vaut que ce que valent ses hypothèses. Chaque modèle a un <strong>domaine</strong> où il fonctionne; à l'extérieur, les prédictions peuvent devenir impossibles (hauteurs négatives, café plus froid que la pièce).`)}
  <p>Dans l'explorateur, essaie chaque type de modèle sur les données du café qui refroidit. Lequel correspond aux données <em>et</em> a du sens physiquement?</p>`),

  widget("modelFit"),

  section("📌 Stratégie", watchOut([
    "Écris tes hypothèses — elles font partie de la réponse.",
    "Vérifie les différences et les rapports avant de choisir un modèle linéaire.",
    "Teste le modèle sur une donnée connue avant de te fier à une prédiction.",
    "Indique le domaine où le modèle est raisonnable.",
  ])),

  examples([
    ["Comprendre et formuler des hypothèses", String.raw`Une classe prépare une fête de fin d'année. Estime le coût de la pizza pour la classe. Énumère les variables et les hypothèses que tu utiliserais.`,
      [String.raw`<b>Comprendre.</b> But : le coût total d'assez de pizza pour la classe.`,
        String.raw`<b>Variables :</b> nombre d'élèves \(n\), pointes par élève, pointes par pizza, prix d'une pizza.`,
        String.raw`<b>Hypothèses :</b> \(30\) élèves; chacun mange \(3\) pointes; une pizza a \(8\) pointes et coûte \(18\) dollars; pas de frais de livraison.`,
        String.raw`<b>Construire le modèle.</b> Pointes nécessaires \(=3n\). Pizzas \(=3n\div8\), arrondi <i>vers le haut</i>, parce qu'on ne peut pas acheter une partie de pizza. Coût \(=\) pizzas \(\times18\).`,
        String.raw`<b>Résoudre :</b> \(3(30)=90\) pointes; \(90\div8=11.25\), donc \(12\) pizzas; coût \(12\times18=216\) dollars.`,
        String.raw`<b>Vérifier :</b> \(12\times8=96\) pointes, au moins les \(90\) nécessaires ✓. D'autres hypothèses donnent une autre réponse.`],
      String.raw`environ \(216\) dollars, selon les hypothèses énoncées`],
    ["Un modèle linéaire à partir de données", String.raw`La pile d'un téléphone indique \(100\%\) à midi, \(88\%\) à 14 h, \(76\%\) à 16 h et \(64\%\) à 18 h. Construis un modèle et prédis quand elle atteindra \(10\%\).`,
      [String.raw`<b>Vérifier si c'est linéaire.</b> Différences toutes les 2 heures : \(88-100=-12\), \(76-88=-12\), \(64-76=-12\). Elles sont constantes, donc le modèle est linéaire.`,
        String.raw`<b>Taux :</b> une baisse de \(12\%\) en 2 heures, c'est \(6\%\) par heure, donc le taux est de \(-6\%\) par heure.`,
        String.raw`<b>Modèle</b> \(B=b+mt\) avec départ \(100\) (\(t\) heures après midi) : \(B=100-6t\).`,
        String.raw`<b>Résoudre</b> \(100-6t=10\) : \(6t=90\), donc \(t=15\) h après midi : 3 h du matin.`,
        String.raw`<b>Vérifier avec les données :</b> \(B(6)=100-36=64\) ✓. Hypothèse : le téléphone est utilisé de la même façon toute la nuit.`],
      String.raw`\(B=100-6t\); vers 3 h du matin (en supposant la même utilisation toute la nuit)`,
      scatter({ pts: [[0, 100], [2, 88], [4, 76], [6, 64]], view: { xmin: 0, xmax: 16, ymin: 0, ymax: 110 }, step: { x: 2, y: 20 }, xlabel: "heures après midi", ylabel: "pile (%)", line: { m: -6, b: 100, dash: true }, w: 320 })],
    ["Linéaire ou exponentiel?", String.raw`La population d'une ville était de \(12\,000\), \(12\,600\), \(13\,230\) et \(13\,892\) pendant quatre années consécutives. Choisis un modèle et prédis la population \(5\) ans après la première mesure.`,
      [String.raw`<b>Règle.</b> Différences constantes \(\Rightarrow\) linéaire; rapports constants \(\Rightarrow\) exponentiel, \(y=a(b)^t\).`,
        String.raw`<b>Différences :</b> \(600, 630, 662\). Elles ne sont pas constantes, donc ce n'est pas linéaire.`,
        String.raw`<b>Rapports :</b> \(\frac{12\,600}{12\,000}=1.05\), \(\frac{13\,230}{12\,600}=1.05\), \(\frac{13\,892}{13\,230}\approx1.05\). Constants : exponentiel, avec une croissance de \(5\%\) par année.`,
        String.raw`<b>Modèle :</b> \(P=12\,000(1.05)^t\).`,
        String.raw`<b>Prédire</b> pour \(t=5\) : \(12\,000(1.05)^5\approx12\,000(1.2763)\approx15\,315\).`],
      String.raw`\(P=12\,000(1.05)^t\); environ \(15\,300\)`],
    ["Quand un modèle ne fonctionne plus", String.raw`Un modèle linéaire pour une boisson qui refroidit est \(T=85-4t\) (°C, minutes). La pièce est à \(20\) °C. Utilise-le pour prédire la température après \(20\) minutes. La prédiction est-elle raisonnable?`,
      [String.raw`<b>Remplacer :</b> \(T=85-4(20)=85-80=5\) °C.`,
        String.raw`<b>Interpréter.</b> Une boisson ne peut pas refroidir d'elle-même sous la température de la pièce (\(20\) °C), donc la prédiction n'est pas raisonnable.`,
        String.raw`<b>Où le modèle échoue :</b> \(85-4t=20\) quand \(t=16.25\) min. Après ce moment, le modèle linéaire donne des valeurs impossibles.`,
        String.raw`<b>Raffiner :</b> utiliser un modèle qui se stabilise à la température de la pièce, comme \(T=20+65(0.9)^t\). Il commence à \(20+65=85\) ✓ et, à \(t=20\), donne environ \(28\) °C, ce qui est raisonnable.`],
      String.raw`\(5\) °C — pas raisonnable; utiliser un modèle qui se stabilise à la température de la pièce`],
    ["Une tâche de modélisation complète", String.raw`Une école veut remplacer ses \(48\) luminaires de classe (chacun consomme \(120\) W) par des luminaires à DEL (chacun consomme \(40\) W) qui coûtent \(95\) dollars chacun. L'électricité coûte \(0.13\) dollar par kWh et les lumières sont allumées \(8\) h par jour, \(190\) jours par année. Combien de temps faudra-t-il pour que le changement soit rentabilisé?`,
      [String.raw`<b>Plan.</b> Période de récupération \(=\dfrac{\text{coût du changement}}{\text{économies par année}}\).`,
        String.raw`<b>Puissance économisée par luminaire :</b> \(120-40=80\) W.`,
        String.raw`<b>Énergie économisée par luminaire par année :</b> \(80\times8\times190=121\,600\) Wh \(=121.6\) kWh (\(1\) kWh \(=1000\) Wh).`,
        String.raw`<b>Argent économisé :</b> \(121.6\times0.13\approx15.81\) dollars par luminaire; \(\times48\approx758.78\) dollars par année.`,
        String.raw`<b>Coût :</b> \(48\times95=4560\) dollars. <b>Récupération :</b> \(4560\div758.78\approx6.0\) ans.`,
        String.raw`<b>Interpréter.</b> On suppose les mêmes heures chaque année, un prix constant et aucun coût d'installation. Si l'une de ces hypothèses change, la réponse change aussi.`],
      "environ 6 ans, selon les hypothèses énoncées"],
  ]),


  practice([
    q("exponentiel", String.raw`Un modèle est \(y=300(1.2)^x\). Trouve \(y\) quand \(x=3\).`, num(518.4),
      "Multiplie par 1.2 trois fois.", [String.raw`\(300\times1.728=518.4\).`], String.raw`\(518.4\)`),
    q("taux", String.raw`Un réservoir contient \(500\) L à \(t=0\) et \(380\) L à \(t=8\) min; il se vide à un taux constant. Trouve le taux (L/min).`, num(15),
      "Variation ÷ temps.", [String.raw`\(120\div8=15\).`], String.raw`\(15\) L/min`),
    q("prédiction", String.raw`Avec \(V=500-15t\), quand le réservoir sera-t-il vide (en minutes, à 1 décimale près)?`, num(33.3, 0.06),
      "Pose V = 0.", [String.raw`\(15t=500\Rightarrow t\approx33.3\).`], String.raw`\(\approx33.3\) min`),
    q("type de modèle", String.raw`Quel modèle correspond à \(x : 0,1,2,3\), \(y : 5, 15, 45, 135\)?`, choice(["exponentiel", "linéaire", "quadratique", "aucun"], 0),
      "Vérifie les différences et les rapports.", ["Chaque y vaut 3 fois le précédent : rapport constant."], "exponentiel"),
    q("hypothèse", "Un modèle prédit les inscriptions de l'an prochain dans une école à partir du taux de croissance de cette année. Laquelle est une hypothèse du modèle?", choice(["le taux de croissance reste le même", "les inscriptions sont un nombre entier", "l'école a un nom", "les élèves vont en classe"], 0),
      "Qu'est-ce qu'on tient pour vrai au sujet de l'avenir?", ["Le modèle suppose que le taux passé se maintient."], "le taux reste le même"),
  ]),

  wrapUp({
    qas: [
      ["Y a-t-il un seul bon modèle?", "Non. Des hypothèses raisonnables différentes donnent des modèles différents. Un bon modèle est simple, correspond aux données, a du sens dans le contexte et indique ses limites."],
      ["Pourquoi les hypothèses sont-elles si importantes?", "Elles déterminent ce que le modèle inclut. Si une hypothèse est fausse (les prix montent, l'utilisation change), la prédiction sera fausse elle aussi — alors énonce-les clairement."],
      ["Comment savoir si le modèle est assez bon?", "Teste-le : compare ses prédictions à des données réelles ou au bon sens. Si les erreurs sont petites pour l'usage prévu, il est assez bon; sinon, raffine-le."],
      ["Que veut dire « raffiner » en pratique?", "Changer une hypothèse ou le type de modèle : ajouter des frais fixes, utiliser une courbe au lieu d'une droite, diviser le problème en cas."],
      ["Où utilise-t-on des modèles?", "Prévisions météo, propagation des maladies, budgets, feux de circulation, analyse sportive, projections climatiques — partout où des décisions dépendent de prédictions."],
    ],
    summary: [
      "Cycle : comprendre → formuler des hypothèses → construire → analyser → interpréter et vérifier → raffiner et communiquer.",
      "Différences constantes → linéaire; rapports constants → exponentiel.",
      "Teste chaque modèle; connais son domaine et ses limites.",
      "Énonce les hypothèses comme partie de la réponse.",
    ],
    next: "La leçon 6.5 fait la révision de tout le chapitre.",
  }),
];
