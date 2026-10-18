// MPM2D 6.1 — Congruence & Similar Triangles (self-study format): congruent vs similar, conditions (SSS, SAS, ASA;
// AA, SSS~, SAS~), scale factor, missing sides, and nested triangles with a parallel side
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, fig, polygon } from "./lib.mjs";

export const TITLE = "6.1 Congruence & Similar Triangles";

const S = String.raw;
const sh = (pts, dx) => pts.map(([x, y]) => [x + dx, y]);
const T1 = [[0, 0], [4, 0], [1.2, 2.6]];
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Congruence & Similar Triangles",
    overview: S`Two triangles are <strong>congruent</strong> when they have exactly the same shape and size: all corresponding sides and angles are equal. They are <strong>similar</strong> when they have the same shape but possibly a different size: corresponding angles are equal and corresponding sides are proportional. In this lesson you will tell the two apart, decide when triangles must be similar (AA, SSS~, SAS~), find the scale factor and missing sides, and handle triangles nested inside each other.`,
    goals: [
      "distinguish between congruent and similar triangles;",
      "state the conditions for congruence (SSS, SAS, ASA) and similarity (AA, SSS~, SAS~);",
      "write a similarity statement with vertices in matching order;",
      "use a scale factor to find missing side lengths;",
      "find sides in nested triangles formed by a parallel line.",
    ],
    curriculum: "T1 (verify, through investigation, properties of similar triangles; distinguish between similarity and congruence; determine lengths using similar triangles)",
    prior: [
      [S`Simplify the ratio \(12:18\).`, S`\(2:3\).`],
      [S`Solve \(\frac{x}{6}=\frac{10}{4}\).`, S`\(x=15\).`],
      [S`Angles of a triangle add to…`, S`\(180^\circ\).`],
    ],
    words: [
      ["Congruent (≅)", "same shape and same size", "\\(\\triangle ABC\\cong\\triangle DEF\\)"],
      ["Similar (∼)", "same shape; equal angles, proportional sides", "\\(\\triangle ABC\\sim\\triangle DEF\\)"],
      ["Corresponding parts", "parts that match in the two triangles", "\\(\\angle A\\) and \\(\\angle D\\)"],
      ["Scale factor k", "image length ÷ original length", "\\(k=\\frac{DE}{AB}\\)"],
    ],
  }),

  section("📌 Congruent or similar?", S`
  ${fig({ w: 460, items: [...polygon(T1, { names: ["A", "B", "C"], fill: "blue" }), ...polygon(sh(T1, 5.2), { names: ["D", "E", "F"], fill: "blue" }), ...polygon(sh(T1.map(([x, y]) => [x * 1.5, y * 1.5]), 10.4), { names: ["P", "Q", "R"], fill: "green", color: "green" })] }, "△ABC ≅ △DEF (same size); △ABC ∼ △PQR with scale factor 1.5 (same shape, larger).")}
  ${table(["", "Congruent", "Similar"], [
    ["Angles", "corresponding angles equal", "corresponding angles equal"],
    ["Sides", "corresponding sides equal", "corresponding sides proportional (ratio k)"],
    ["Enough to show it", "SSS, SAS, ASA", "AA, SSS~ (all three ratios equal), SAS~ (two ratios equal, included angle equal)"],
    ["Scale factor", "\\(k=1\\)", "any \\(k>0\\)"],
  ])}
  ${keyIdea(S`Congruent triangles are a special case of similar triangles with \(k=1\). Write similarity statements in matching order: \(\triangle ABC\sim\triangle DEF\) means \(\angle A=\angle D\), \(\angle B=\angle E\), \(\angle C=\angle F\) and \(\frac{DE}{AB}=\frac{EF}{BC}=\frac{DF}{AC}=k\).`)}`),

  section("📌 Explore", S`<p>Set two angles and a scale factor. The angles always match; the sides all grow by the same factor. At \(k=1\) the triangles are congruent.</p>`),

  widget("similarLab", { init: [50, 60, 1.5] }),

  section("📌 Matching the parts", S`
  <p>To find corresponding sides, match the angles first: the side opposite an angle corresponds to the side opposite the equal angle. Then set up one ratio with the scale factor.</p>
  ${watchOut([
    "Equal angles alone never prove congruence — AAA only gives similarity.",
    "Match sides by the angles opposite them, not by where they are on the page.",
    "Keep the ratio the same way up: image/original for every pair.",
    "SSS~ needs all three ratios equal; two equal ratios are not enough without the included angle.",
    "In nested triangles, use the whole side (AB), not just the extra piece (DB).",
  ])}`),

  examples([
    ["Similar by SSS~", S`\(\triangle ABC\) has sides \(6\), \(8\), \(10\) and \(\triangle DEF\) has sides \(9\), \(12\), \(15\). Are they congruent, similar, or neither?`,
      [S`Ratios: \(\frac96=1.5\), \(\frac{12}{8}=1.5\), \(\frac{15}{10}=1.5\).`, S`All three ratios are equal, so the triangles are similar; the sides are not equal, so they are not congruent.`],
      S`similar (SSS~), \(k=1.5\); not congruent`],
    ["Similar by AA", S`In \(\triangle PQR\), \(\angle P=40^\circ\) and \(\angle Q=75^\circ\). In \(\triangle XYZ\), \(\angle X=40^\circ\) and \(\angle Z=75^\circ\). Write a similarity statement.`,
      [S`\(\angle R=180^\circ-40^\circ-75^\circ=65^\circ\) and \(\angle Y=65^\circ\).`, S`Match equal angles: \(P\leftrightarrow X\), \(Q\leftrightarrow Z\), \(R\leftrightarrow Y\).`],
      S`\(\triangle PQR\sim\triangle XZY\)`],
    ["Missing sides", S`\(\triangle ABC\sim\triangle DEF\) with \(AB=8\), \(BC=10\), \(AC=12\) and \(DE=12\). Find \(EF\) and \(DF\).`,
      [S`\(k=\frac{DE}{AB}=\frac{12}{8}=1.5\).`, S`\(EF=1.5\times10=15\); \(DF=1.5\times12=18\).`],
      S`\(EF=15\), \(DF=18\)`,
      fig({ w: 420, items: [...polygon([[0, 0], [8, 0], [2.6, 5.4]], { sides: ["8", "10", "12"], names: ["A", "B", "C"] }), ...polygon([[10, 0], [22, 0], [13.9, 8.1]], { sides: ["12", "EF", "DF"], names: ["D", "E", "F"], fill: "green", color: "green" })] })],
    ["Congruent by SAS", S`Two triangles each have sides \(5\) cm and \(7\) cm with a \(50^\circ\) angle between them. Are they congruent? What if the \(50^\circ\) angle were not between the sides?`,
      [S`Two sides and the included angle match: congruent by SAS.`, S`If the angle is not included (SSA), the triangles need not be congruent — two different triangles can have the same SSA measurements.`],
      S`congruent (SAS); SSA is not a congruence condition`],
    ["Nested triangles", S`In \(\triangle ABC\), \(D\) is on \(AB\) and \(E\) is on \(AC\) with \(DE\parallel BC\). \(AD=4\), \(DB=6\) and \(DE=5\). Find \(BC\).`,
      [S`\(DE\parallel BC\) gives equal corresponding angles, so \(\triangle ADE\sim\triangle ABC\) (AA).`, S`\(AB=4+6=10\), so \(k=\frac{10}{4}=2.5\).`, S`\(BC=2.5\times5=12.5\).`],
      S`\(BC=12.5\)`,
      fig({ w: 320, items: [...polygon([[0, 0], [10, 0], [3, 7]], { names: ["B", "C", "A"], fill: "blue" }), { seg: [[1.8, 4.2], [5.8, 4.2]], color: "red", width: 2.6 }, { text: "D", at: [1.0, 4.3], bold: true }, { text: "E", at: [6.6, 4.3], bold: true }, { text: "5", at: [3.8, 4.8], color: "red", bold: true }, { text: "4", at: [1.6, 5.8], color: "blue" }, { text: "6", at: [0.3, 2.1], color: "blue" }] })],
  ]),

  practice([
    q("scale factor", S`Triangles with sides \(4, 6, 7\) and \(10, 15, 17.5\) are similar. What is the scale factor from the smaller to the larger?`, num(2.5),
      "Divide matching sides.", [S`\(\frac{10}{4}=2.5\) (check: \(\frac{15}{6}=2.5\)).`], S`\(2.5\)`),
    q("missing side", S`A \(3\)-\(4\)-\(5\) right triangle is similar to one with hypotenuse \(20\). Find the side that corresponds to \(3\).`, num(12),
      "k = 20 ÷ 5.", [S`\(k=4\); \(3\times4=12\).`], S`\(12\)`),
    q("angles", S`\(\triangle ABC\sim\triangle KLM\), \(\angle A=35^\circ\) and \(\angle B=80^\circ\). Find \(\angle M\) in degrees.`, num(65),
      "∠M corresponds to ∠C.", [S`\(\angle C=180^\circ-35^\circ-80^\circ=65^\circ\).`], S`\(65^\circ\)`),
    q("similar?", S`Are triangles with sides \(2, 3, 4\) and \(4, 6, 9\) similar?`, choice(["no — the ratios are not all equal", "yes, by SSS~", "yes, they are congruent", "yes, by AA"], 0),
      "Compare all three ratios.", [S`\(\frac42=2\), \(\frac63=2\), \(\frac94=2.25\).`], "no"),
    q("nested", S`\(DE\parallel BC\) in \(\triangle ABC\) with \(D\) on \(AB\). \(AD=3\), \(AB=9\) and \(DE=4\). Find \(BC\).`, num(12),
      "△ADE ∼ △ABC.", [S`\(k=\frac93=3\); \(BC=3\times4\).`], S`\(12\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between congruent and similar?", "Congruent triangles are identical in shape and size. Similar triangles have the same shape (equal angles) but their sides may be scaled by a factor k."],
      ["Why is AA enough for similarity?", "If two angles match, the third must match too (angles add to 180°). Equal angles force the same shape."],
      ["Why isn't AAA a congruence condition?", "Equal angles fix the shape but not the size — a triangle and its enlargement have the same angles."],
      ["How do I know which sides correspond?", "Match the equal angles first. Corresponding sides are opposite equal angles; a correct similarity statement lists vertices in matching order."],
      ["How are congruence and similarity used?", "Similarity lets you measure things you can't reach — trees, rivers, buildings — from small triangles you can measure (6.2). It also explains why trigonometric ratios work (6.3)."],
    ],
    summary: [
      "Congruent: same shape and size (SSS, SAS, ASA).",
      "Similar: equal angles, proportional sides (AA, SSS~, SAS~).",
      "k = image side ÷ original side, for every pair.",
      "A line parallel to one side makes a smaller similar triangle.",
    ],
    next: "6.2 uses similar triangles to solve measurement problems.",
  }),
];
