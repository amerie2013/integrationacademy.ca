// MTH1W-FR 4.6 — Transformations de droites (format autonome) : effets d'un changement de m et de b
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.6 Transformations de droites";
export const ID = lessonId(4, 6);

export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Transformations de droites",
    overview: String.raw`Toute droite \(y=mx+b\) peut être obtenue à partir de la droite la plus simple, \(y=x\), en changeant deux nombres. Changer \(b\) fait subir à la droite une <strong>translation</strong> vers le haut ou vers le bas sans changer sa direction. Changer \(m\) fait <strong>pivoter</strong> la droite autour de son ordonnée à l'origine, ce qui la rend plus inclinée, moins inclinée ou descendante. Dans cette leçon, tu vas prédire et décrire ces changements, et les relier à des situations réelles comme une hausse de prix.`,
    goals: [
      "décrire l'effet d'un changement de \\(b\\) : une translation verticale, qui donne une droite parallèle;",
      "décrire l'effet d'un changement de \\(m\\) : une rotation autour de l'ordonnée à l'origine (plus inclinée, moins inclinée, montante, descendante);",
      "décrire l'effet d'un changement de signe de \\(m\\);",
      "écrire l'équation d'une droite après une transformation décrite;",
      "interpréter des changements de m et de b dans une situation réelle.",
    ],
    curriculum: "C4.2, C4.3 (effets d'un changement du taux de variation et de la valeur initiale)",
    prior: [
      [String.raw`Que valent \(m\) et \(b\) dans \(y=-3x+7\)?`, String.raw`\(m=-3\), \(b=7\).`],
      [String.raw`Laquelle est la plus inclinée : \(y=\tfrac12x\) ou \(y=2x\)?`, String.raw`\(y=2x\).`],
      [String.raw`Où \(y=4x-5\) coupe-t-elle l'axe des y?`, String.raw`En \((0,-5)\).`],
    ],
    words: [
      ["Translation", "un glissement; ici, vers le haut ou vers le bas en changeant b", "\\(y=2x\\to y=2x+3\\)"],
      ["Rotation", "un pivotement; ici, autour de l'ordonnée à l'origine en changeant m", "\\(y=x+1\\to y=4x+1\\)"],
      ["Réflexion", "une image miroir; changer le signe de m donne la réflexion de la droite par rapport à l'axe des y", "\\(y=3x-2\\to y=-3x-2\\)"],
      ["Famille de droites", "des droites qui ont la même pente (parallèles) ou la même ordonnée à l'origine", ""],
    ],
  }),

  section("📌 Changer b : les translations", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 1, b: 0, color: "gray", label: "y = x", lx: 4 }, { m: 1, b: 3, color: "blue", label: "y = x + 3", lx: 2.5 }, { m: 1, b: -2, color: "red", label: "y = x − 2", lx: 4.2 }] }, "Même pente, b différent : les droites sont des translations parallèles de y = x.")}
  <p>Ajouter \(3\) à chaque valeur de y fait glisser chaque point de \(3\) vers le haut. La pente ne change pas, donc la nouvelle droite est <strong>parallèle</strong> à l'ancienne.</p>`),

  section("📌 Changer m : rotations et réflexions", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 0.5, b: 1, color: "green", label: "m = ½", lx: 4.5 }, { m: 1, b: 1, color: "gray", label: "m = 1", lx: 4 }, { m: 3, b: 1, color: "blue", label: "m = 3", lx: 1.6 }, { m: -1, b: 1, color: "red", label: "m = −1", lx: -4.5 }], points: [{ x: 0, y: 1, color: "violet" }] }, "Les quatre droites passent par (0, 1) : changer m fait pivoter la droite autour de son ordonnée à l'origine.")}
  ${table(["Changement de m", "Effet"], [
    ["la grandeur de m augmente (p. ex. 1 → 3)", "plus inclinée"],
    ["la grandeur de m diminue vers 0", "moins inclinée; m = 0 est horizontale"],
    ["le signe de m change (p. ex. 3 → −3)", "réflexion par rapport à l'axe des y : montante devient descendante"],
  ])}
  ${keyIdea(String.raw`<strong>b</strong> déplace la droite vers le haut ou vers le bas (même direction). <strong>m</strong> fait pivoter la droite autour de \((0,b)\). Ensemble, ils peuvent produire n'importe quelle droite non verticale à partir de \(y=x\).`)}
  ${watchOut(["« Plus inclinée » dépend de la grandeur de m, pas de son signe : y = −4x est plus inclinée que y = 2x.", "Changer b ne déplace pas l'abscisse à l'origine de la même quantité, sauf si m = 1."])}
  <p>Utilise l'explorateur : fixe la montée et la course et change \(b\), puis fixe \(b\) et change la montée.</p>`),

  widget("slopeExplorer", { initRise: 1, initRun: 1, initB: 0 }),

  examples([
    ["Une translation", String.raw`Décris le lien entre \(y=2x+3\) et \(y=2x\).`,
      [String.raw`<b>Règle.</b> Dans \(y=mx+b\), changer <b>seulement</b> \(b\) déplace chaque point vers le haut ou vers le bas de la variation de \(b\) (une translation verticale); la pente, donc l'inclinaison, reste la même.`, String.raw`Même pente \(2\); ordonnée à l'origine \(0\to3\).`, "Chaque point monte de 3 : une translation verticale; les droites sont parallèles.", String.raw`<b>Vérifie un point :</b> à \(x=1\), \(y=2x\) donne \(2\) et \(y=2x+3\) donne \(5\) : exactement \(3\) de plus ✓`],
      "translation de 3 vers le haut (parallèle)"],
    ["Une rotation", String.raw`Décris le lien entre \(y=4x+1\) et \(y=x+1\).`,
      [String.raw`<b>Règle.</b> Changer <b>seulement</b> \(m\) garde l'ordonnée à l'origine fixe et fait pivoter la droite autour de ce point; un plus grand \(|m|\) donne une droite plus inclinée.`, String.raw`Même ordonnée à l'origine \((0,1)\); pente \(1\to4\).`, "La droite pivote autour de (0, 1) et devient plus inclinée.", String.raw`<b>Vérification :</b> les deux droites passent par \((0,1)\) ✓; à \(x=1\), elles donnent \(2\) et \(5\), donc la deuxième monte plus vite.`],
      "rotation autour de (0, 1), plus inclinée"],
    ["Une réflexion", String.raw`Compare \(y=3x-2\) et \(y=-3x-2\).`,
      [String.raw`<b>Règle.</b> Remplacer \(m\) par \(-m\) (même \(b\)) donne la même inclinaison dans la direction opposée : une réflexion par rapport à l'axe des \(y\), qui envoie \((x,y)\) sur \((-x,y)\).`, String.raw`Même ordonnée à l'origine; la pente change de signe.`, String.raw`Le point \((1,1)\) de la première droite correspond à \((-1,1)\) sur la deuxième : une réflexion par rapport à l'axe des y.`, String.raw`<b>Vérification :</b> \(3(1)-2=1\) ✓ et \(-3(-1)-2=1\) ✓`],
      "images l'une de l'autre par réflexion par rapport à l'axe des y"],
    ["Plusieurs changements à la fois", String.raw`Décris \(y=-\tfrac12x+5\) comme une transformation de \(y=x\).`,
      [String.raw`<b>Lis chaque paramètre séparément.</b> La grandeur de \(m\) donne l'inclinaison, le signe de \(m\) donne la direction et \(b\) donne le déplacement vertical. Pars de \(y=x\) : \(m=1\), \(b=0\).`, String.raw`\(m\) : \(1\to-\frac12\) : moins inclinée (grandeur \(\frac12\)) et descendante (réflexion).`, String.raw`\(b\) : \(0\to5\) : translation de \(5\) vers le haut.`, String.raw`<b>Vérifie un point :</b> \(x=2\) : \(-\tfrac12(2)+5=4\); la nouvelle droite descend de \(1\) unité pour chaque \(2\) vers la droite, à partir de \(5\) ✓`],
      "moins inclinée, réfléchie, puis translation de 5 vers le haut"],
    ["Un changement réel", String.raw`Un taxi demandait \(C=2.5d+4\). Les frais passent à \(6\) dollars et le taux à \(2.80\) dollars par km. Écris la nouvelle équation, décris le changement du graphique et trouve le coût supplémentaire d'une course de \(10\) km.`,
      [String.raw`<b>Sens.</b> Dans \(C=md+b\), \(b\) est le montant fixe et \(m\) le coût par km; des frais plus élevés font monter le point de départ et un taux plus élevé rend la droite plus inclinée.`, String.raw`Nouvelle : \(C=2.8d+6\).`, "b : 4 → 6 (2 vers le haut); m : 2.5 → 2.8 (plus inclinée).", String.raw`Ancienne, \(10\) km : \(29\); nouvelle : \(34\); \(5\) dollars de plus.`, String.raw`<b>Vérification :</b> ancienne \(2.5(10)+4=29\); nouvelle \(2.8(10)+6=34\); \(34-29=5\) ✓`],
      String.raw`\(C=2.8d+6\); \(5\) dollars de plus`,
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 45 }, lines: [{ m: 2.5, b: 4, color: "gray", label: "ancienne", lx: 10.5 }, { m: 2.8, b: 6, color: "blue", label: "nouvelle", lx: 9 }], xlabel: "distance d (km)", ylabel: "coût C", step: { x: 2, y: 5 } })],
  ]),

  practice([
    q("translation", String.raw`On fait subir à \(y=-2x+1\) une translation de \(5\) vers le bas. Écris la nouvelle équation.`, expr("-2x-4"),
      "Seul b change.", [String.raw`\(1-5=-4\).`], String.raw`\(y=-2x-4\)`, { placeholder: "y = …" }),
    q("plus inclinée", String.raw`Quel changement rend \(y=2x+1\) plus inclinée?`, choice([String.raw`changer \(2\) en \(5\)`, String.raw`changer \(1\) en \(5\)`, String.raw`changer \(2\) en \(1\)`, String.raw`changer \(2\) en \(-1\)`], 0),
      "L'inclinaison dépend de la grandeur de m.", [String.raw`\(|5|>|2|\).`], String.raw`\(m : 2\to5\)`),
    q("réflexion", String.raw`Écris l'image de \(y=\tfrac34x+2\) par une réflexion par rapport à l'axe des y.`, expr("-0.75x+2"),
      "Change le signe de la pente.", [String.raw`\(m\to-\frac34\), \(b\) inchangé.`], String.raw`\(y=-\tfrac34x+2\)`, { placeholder: "y = …" }),
    q("ordonnée à l'origine", String.raw`On fait subir à la droite \(y=5x-3\) une translation de \(7\) vers le haut. Où la nouvelle droite coupe-t-elle l'axe des y? (valeur de y)`, num(4),
      "Ajoute 7 à b.", [String.raw`\(-3+7=4\).`], String.raw`\(4\)`),
    q("familles", "Quelles droites sont parallèles entre elles?", choice([String.raw`\(y=3x-1\) et \(y=3x+4\)`, String.raw`\(y=3x-1\) et \(y=-3x-1\)`, String.raw`\(y=3x\) et \(y=x+3\)`, String.raw`\(y=-x\) et \(y=x\)`], 0),
      "Des droites parallèles ont des pentes égales.", ["Seule la première paire a la même pente (3)."], String.raw`\(y=3x-1\) et \(y=3x+4\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi changer b donne-t-il une droite parallèle?", "La pente (la direction) ne change pas; chaque point glisse simplement vers le haut ou vers le bas de la même quantité."],
      ["Autour de quel point une droite pivote-t-elle quand m change?", "L'ordonnée à l'origine (0, b), parce que x = 0 rend mx = 0, peu importe m."],
      ["Une droite de pente m = −5 est-elle plus inclinée qu'une droite de pente m = 3?", "Oui : l'inclinaison est la grandeur |m|. Le signe indique seulement si elle monte ou descend."],
      ["Quelle transformation change y = x en y = −x?", "Une réflexion par rapport à l'axe des y (ce qui revient au même, pour cette droite, qu'une réflexion par rapport à l'axe des x)."],
      ["Quel est le lien avec les situations réelles?", "Changer le montant fixe déplace le graphique vers le haut ou vers le bas; changer le taux le rend plus ou moins incliné. Comparer l'ancien et le nouveau graphique montre quand le changement compte le plus."],
    ],
    summary: [
      "Changer b : translation verticale; la nouvelle droite est parallèle.",
      "Changer m : rotation autour de (0, b); un |m| plus grand est plus incliné.",
      "Changer le signe de m : réflexion par rapport à l'axe des y.",
    ],
    next: "la leçon 4.7 détermine l'équation d'une droite à partir d'un graphique, de deux points, d'un point et d'une pente, ou d'une table.",
  }),
];
