import { L, lessonHtml, gframe } from "./_helpers.mjs";
import {
  fig, transversalAngles, skewBox,
  perpendicularLines, perpParallel,
  constructPerp, constructParallel,
} from "./figures.mjs";

export const ch = {};

ch["2.1"] = L("2.1", "Lines and Angles (Parallel, Skew, Transversal)", [
  lessonHtml({
    title: "Lines and Angles",
    emoji: "🚉",
    overview: `Two lines in space fall into three categories: they can be <strong>parallel</strong> (coplanar, never meeting), <strong>intersecting</strong> (crossing at one point), or <strong>skew</strong> (not coplanar, so they never meet but also aren't parallel). A <strong>transversal</strong> is a line that crosses two or more coplanar lines at distinct points, and it creates eight angles with special names based on their position. Naming these angle pairs correctly is the foundation for every theorem in this chapter.`,
    toolkit: [
      `<strong>Parallel lines</strong> (\\(\\ell_1\\parallel\\ell_2\\)): coplanar, same direction, never intersect. <strong>Parallel planes</strong> never intersect either.`,
      `<strong>Skew lines:</strong> not coplanar, so they never intersect and are not parallel — they can only exist between two lines in three-dimensional space, e.g. two edges of a box that don't touch and aren't parallel.`,
      `A <strong>transversal</strong> crosses two or more coplanar lines at distinct points, forming eight angles — four at each intersection.`,
      `<strong>Corresponding angles</strong> sit in the same relative position at each intersection (e.g., both upper-right). <strong>Alternate interior angles</strong> lie between the two lines, on opposite sides of the transversal. <strong>Alternate exterior angles</strong> lie outside the two lines, on opposite sides of the transversal. <strong>Same-side (consecutive) interior angles</strong> lie between the two lines, on the same side of the transversal.`,
      `These names describe <em>position only</em> — no relationship between the angle measures is guaranteed until we know the two lines are parallel (Lesson 2.2).`,
    ],
    figure: fig(transversalAngles(), "A transversal \(t\) crossing \(\ell_1\) and \(\ell_2\) forms eight angles."),
    examples: [
      {
        h: "Classifying lines in a box",
        p: "In a rectangular box, consider the top-front edge and the bottom-back edge (on the opposite side and different level of the box). Are they parallel, intersecting, or skew?",
        fig: fig(skewBox(), "Skew lines are not coplanar and never intersect."),
        steps: [
          `<strong>Step 1 — Check if they intersect:</strong> the two edges are on opposite sides of the box, so they never touch.`,
          `<strong>Step 2 — Check if they're coplanar:</strong> the top-front edge lies in the top and front faces; the bottom-back edge lies in the bottom and back faces. There is no single flat face (or plane) containing both.`,
          `<strong>Conclusion:</strong> since they don't intersect and aren't coplanar, the edges are <strong>skew</strong>.`,
        ],
      },
      {
        h: "Naming corresponding angles",
        p: "A transversal \\(t\\) crosses lines \\(\\ell_1\\) and \\(\\ell_2\\), forming angles \\(1,2,3,4\\) at the top intersection (1 upper-left, 2 upper-right, 3 lower-left, 4 lower-right) and \\(5,6,7,8\\) at the bottom intersection in the same layout. Name the angle corresponding to \\(\\angle 2\\).",
        fig: transversalAngles({ highlight: "corr" }),
        steps: [
          `<strong>Step 1 — Recall the definition:</strong> corresponding angles occupy the same position relative to their own intersection.`,
          `<strong>Step 2 — Match positions:</strong> \\(\\angle 2\\) is upper-right at the top intersection, so its corresponding angle is the upper-right angle at the bottom intersection.`,
          `<strong>Conclusion:</strong> \\(\\angle 2\\) corresponds to \\(\\angle 6\\).`,
        ],
      },
      {
        h: "Alternate interior vs. alternate exterior",
        p: "Using the same labeling as Example 2, classify the pair \\(\\angle 3\\) and \\(\\angle 6\\), and the pair \\(\\angle 1\\) and \\(\\angle 8\\).",
        fig: transversalAngles({ highlight: "altint" }),
        steps: [
          `<strong>Step 1 — Locate \\(\\angle 3\\) and \\(\\angle 6\\):</strong> \\(\\angle 3\\) is lower-left at the top (interior, since it's below line \\(\\ell_1\\) and above \\(\\ell_2\\)... more precisely, between the two lines), and \\(\\angle 6\\) is upper-right at the bottom (also between the lines). They sit on opposite sides of the transversal.`,
          `<strong>Conclusion 1:</strong> \\(\\angle 3\\) and \\(\\angle 6\\) are <strong>alternate interior angles</strong>.`,
          `<strong>Step 2 — Locate \\(\\angle 1\\) and \\(\\angle 8\\):</strong> \\(\\angle 1\\) is upper-left at the top (outside the two lines, above \\(\\ell_1\\)), and \\(\\angle 8\\) is lower-right at the bottom (outside the two lines, below \\(\\ell_2\\)). They're on opposite sides of the transversal.`,
          `<strong>Conclusion 2:</strong> \\(\\angle 1\\) and \\(\\angle 8\\) are <strong>alternate exterior angles</strong>.`,
        ],
      },
      {
        h: "Same-side interior angles",
        p: "Still using the same diagram, identify the same-side (consecutive) interior angle pair that includes \\(\\angle 4\\).",
        fig: transversalAngles({ highlight: "ssi" }),
        steps: [
          `<strong>Step 1 — Find the interior angles:</strong> the interior angles (between the two lines) are \\(\\angle 3, \\angle 4\\) at the top and \\(\\angle 5, \\angle 6\\) at the bottom.`,
          `<strong>Step 2 — Match same side of the transversal:</strong> \\(\\angle 4\\) is on the right side of the transversal; the interior angle on the same (right) side at the other intersection is \\(\\angle 5\\).`,
          `<strong>Conclusion:</strong> \\(\\angle 4\\) and \\(\\angle 5\\) form a same-side interior pair.`,
        ],
      },
      {
        h: "Sorting a full set of pairs",
        p: "From the eight labeled angles \\(1\\)–\\(8\\), classify each of these pairs: (a) \\(\\angle 1,\\angle 5\\); (b) \\(\\angle 4,\\angle 6\\); (c) \\(\\angle 2,\\angle 7\\); (d) \\(\\angle 1,\\angle 4\\).",
        steps: [
          `<strong>(a) \\(\\angle 1,\\angle 5\\):</strong> both upper-left at their respective intersections — <strong>corresponding angles</strong>.`,
          `<strong>(b) \\(\\angle 4,\\angle 6\\):</strong> both interior, opposite sides of the transversal — <strong>alternate interior angles</strong>.`,
          `<strong>(c) \\(\\angle 2,\\angle 7\\):</strong> both exterior, opposite sides of the transversal — <strong>alternate exterior angles</strong>.`,
          `<strong>(d) \\(\\angle 1,\\angle 4\\):</strong> share the vertex at the top intersection, directly across from each other — <strong>vertical angles</strong> (a relationship from Lesson 1.4, still relevant here).`,
        ],
      },
    ],
    practice: [
      { q: "Two edges of a cube lie in parallel faces and point in the same direction. What is their relationship?", a: "They are parallel — they're coplanar (each pair of parallel faces can be connected by a plane containing both edges when they point the same way) and never intersect." },
      { q: "Two lines are both perpendicular to the same plane. Are they parallel, intersecting, or could they be skew?", a: "They must be parallel. (This is a preview of a theorem from Lesson 2.3: two lines perpendicular to the same line or plane cannot be skew or intersecting — they must be parallel.)" },
      { q: "A transversal crosses two lines. Name the angle pair type for two angles that are both exterior and on the same side of the transversal.", a: "This pair doesn't have one of the four special names used in this course (corresponding, alternate interior, alternate exterior, same-side interior) — it's simply called a same-side exterior pair, and like same-side interior angles, they turn out to be supplementary when the lines are parallel." },
      { q: "In a labeled transversal diagram, \\(\\angle 3\\) is interior on the left side of the transversal. Which other interior angle is on the same side as \\(\\angle 3\\)?", a: "The interior angle at the other intersection that is also on the left side of the transversal — together they form a same-side interior pair." },
      { q: "Can two skew lines be perpendicular to each other?", a: "No — perpendicularity requires the two lines to intersect and form a right angle, and skew lines never intersect at all." },
    ],
    qa: [
      { q: "What's the key difference between parallel and skew lines?", a: "Both never intersect, but parallel lines are coplanar (you can draw one flat plane containing both), while skew lines are not coplanar — they exist in different \"directions\" in three-dimensional space." },
      { q: "Can two lines in the same plane ever be skew?", a: "No. Skew lines require three dimensions. Any two coplanar lines are either parallel (never meet) or intersecting (meet at exactly one point) — there's no third option in a single plane." },
      { q: "Do corresponding angles have to be congruent?", a: "Not from the definition alone — \"corresponding\" is purely a description of position. They become congruent only when the two lines cut by the transversal are parallel, which is exactly what Lesson 2.2 proves." },
      { q: "How can I remember interior vs. exterior?", a: "Picture the two lines as train tracks and the transversal as a road crossing them. \"Interior\" angles are the ones squeezed between the tracks; \"exterior\" angles are the ones outside the tracks." },
    ],
  }),
]);

ch["2.2"] = L("2.2", "Proving Theorems about Parallel Lines (Corresponding, Alternate Interior/Exterior, Same-Side Interior)", [
  lessonHtml({
    title: "Proving Theorems about Parallel Lines",
    emoji: "📎",
    overview: `Once we know two lines really are parallel, the angle pairs from Lesson 2.1 gain guaranteed relationships. When a transversal cuts two <strong>parallel</strong> lines: corresponding angles are congruent, alternate interior angles are congruent, alternate exterior angles are congruent, and same-side interior angles are supplementary. Each theorem also has a <strong>converse</strong> that runs the logic backward — using an angle relationship to prove the lines are parallel in the first place.`,
    toolkit: [
      `<strong>Corresponding Angles Theorem:</strong> if \\(\\ell_1\\parallel\\ell_2\\), then corresponding angles are congruent. This is the "starter" theorem — every other one in this lesson can be derived from it plus the Vertical Angles Theorem or Linear Pair.`,
      `<strong>Alternate Interior Angles Theorem</strong> and <strong>Alternate Exterior Angles Theorem:</strong> if \\(\\ell_1\\parallel\\ell_2\\), alternate interior angles are congruent, and alternate exterior angles are congruent.`,
      `<strong>Same-Side (Consecutive) Interior Angles Theorem:</strong> if \\(\\ell_1\\parallel\\ell_2\\), same-side interior angles are supplementary (sum to \\(180^\\circ\\)) — this is the one exception where the pair is supplementary rather than congruent.`,
      `Each theorem has a <strong>converse</strong> used to prove lines parallel: e.g., if corresponding angles are congruent, then the lines are parallel. These converses are the main tool for proving \\(\\ell_1\\parallel\\ell_2\\) from angle information.`,
      `Combine these with the Vertical Angles Theorem and Linear Pair (Chapter 1) to find every one of the eight angles once you know just one of them.`,
    ],
    figure: fig(transversalAngles({ parallel: true }), "When \(\ell_1\parallel\ell_2\), corresponding / alternate interior / alternate exterior angles are congruent; same-side interior angles are supplementary."),
    examples: [
      {
        h: "Corresponding angles",
        p: "\\(\\ell_1\\parallel\\ell_2\\), cut by transversal \\(t\\). One angle measures \\(7x+3\\) and its corresponding angle measures \\(5x+21\\). Find \\(x\\) and the common angle measure.",
        fig: transversalAngles({ parallel: true, highlight: "corr" }),
        steps: [
          `<strong>Step 1 — Apply the theorem:</strong> corresponding angles are congruent when the lines are parallel: \\(7x+3=5x+21\\).`,
          `<strong>Step 2 — Solve:</strong> \\(2x=18 \\Rightarrow x=9\\).`,
          `<strong>Step 3 — Find the measure:</strong> \\(7(9)+3=66^\\circ\\).`,
        ],
        check: "Check the other expression: 5(9) + 21 = 66°. ✓",
      },
      {
        h: "Finding all eight angles",
        p: "\\(\\ell_1\\parallel\\ell_2\\) cut by transversal \\(t\\). One angle in the figure measures \\(72^\\circ\\). Using angle-pair theorems, find the measures of the other seven angles (each is either \\(72^\\circ\\) or \\(108^\\circ\\)).",
        fig: transversalAngles({ parallel: true, highlight: "altint" }),
        steps: [
          `<strong>Step 1 — Use the linear pair at the same intersection:</strong> the two angles adjacent to the given \\(72^\\circ\\) angle at its own intersection are supplementary to it: \\(180^\\circ-72^\\circ=108^\\circ\\).`,
          `<strong>Step 2 — Use the vertical angle:</strong> the angle directly across from the given \\(72^\\circ\\) angle (same intersection) is congruent to it: \\(72^\\circ\\).`,
          `<strong>Step 3 — Transfer across the transversal:</strong> since \\(\\ell_1\\parallel\\ell_2\\), the corresponding angle at the other intersection is also \\(72^\\circ\\), and by the same linear-pair/vertical-angle logic at that intersection, the remaining three angles there are \\(108^\\circ,108^\\circ,72^\\circ\\).`,
          `<strong>Conclusion:</strong> the eight angles come in exactly two values, \\(72^\\circ\\) and \\(108^\\circ\\), alternating around the figure — four of each, and they're supplementary pairs wherever they're adjacent.`,
        ],
      },
      {
        h: "Same-side interior angles",
        p: "\\(\\ell_1\\parallel\\ell_2\\). A same-side interior pair measures \\(3x+15\\) and \\(2x+25\\). Find \\(x\\) and both angle measures.",
        fig: transversalAngles({ parallel: true, highlight: "ssi" }),
        steps: [
          `<strong>Step 1 — Apply the theorem:</strong> same-side interior angles are supplementary: \\((3x+15)+(2x+25)=180\\).`,
          `<strong>Step 2 — Solve:</strong> \\(5x+40=180 \\Rightarrow 5x=140 \\Rightarrow x=28\\).`,
          `<strong>Step 3 — Find the measures:</strong> \\(3(28)+15=99^\\circ\\) and \\(2(28)+25=81^\\circ\\).`,
        ],
        check: "99° + 81° = 180°. ✓",
      },
      {
        h: "Using a converse to prove lines parallel",
        p: "A transversal crosses two lines. A pair of same-side interior angles measures \\(65^\\circ\\) and \\(115^\\circ\\). Are the two lines parallel? Justify your answer.",
        steps: [
          `<strong>Step 1 — Check the relationship:</strong> \\(65^\\circ+115^\\circ=180^\\circ\\), so the same-side interior angles are supplementary.`,
          `<strong>Step 2 — Apply the converse:</strong> the Converse of the Same-Side Interior Angles Theorem states that if same-side interior angles are supplementary, the lines are parallel.`,
          `<strong>Conclusion:</strong> yes, the lines are parallel, by the Converse of the Same-Side Interior Angles Theorem.`,
        ],
      },
      {
        h: "Two-column proof: alternate exterior angles",
        p: "<strong>Given:</strong> \\(\\ell_1\\parallel\\ell_2\\), cut by transversal \\(t\\), forming \\(\\angle 1\\) and \\(\\angle 8\\) as an alternate exterior pair (with \\(\\angle 5\\) corresponding to \\(\\angle 1\\)). <strong>Prove:</strong> \\(\\angle 1\\cong\\angle 8\\).",
        steps: [
          `<strong>Step 1 — Statement:</strong> \\(\\ell_1\\parallel\\ell_2\\). <strong>Reason:</strong> Given.`,
          `<strong>Step 2 — Statement:</strong> \\(\\angle 1\\cong\\angle 5\\). <strong>Reason:</strong> Corresponding Angles Theorem.`,
          `<strong>Step 3 — Statement:</strong> \\(\\angle 5\\cong\\angle 8\\). <strong>Reason:</strong> Vertical Angles Theorem (∠5 and ∠8 share a vertex and are opposite each other).`,
          `<strong>Step 4 — Statement:</strong> \\(\\angle 1\\cong\\angle 8\\). <strong>Reason:</strong> Transitive Property of Congruence (Steps 2 and 3).`,
        ],
        check: "This is exactly how the Alternate Exterior Angles Theorem is built from the Corresponding Angles Theorem plus the Vertical Angles Theorem — worth remembering as a proof pattern.",
      },
    ],
    practice: [
      { q: "\\(\\ell_1\\parallel\\ell_2\\). A pair of alternate interior angles measures \\(4x-7\\) and \\(2x+15\\). Find \\(x\\) and the common measure.", a: "\\(4x-7=2x+15 \\Rightarrow 2x=22 \\Rightarrow x=11\\). Measure: \\(4(11)-7=37^\\circ\\)." },
      { q: "\\(\\ell_1\\parallel\\ell_2\\). One angle in the transversal figure is \\(48^\\circ\\). Find the measure of its alternate exterior angle.", a: "By the Alternate Exterior Angles Theorem, it is also \\(48^\\circ\\)." },
      { q: "A pair of same-side interior angles measures \\(6x+2\\) and \\(4x-12\\). Find \\(x\\), assuming the lines are parallel.", a: "\\((6x+2)+(4x-12)=180 \\Rightarrow 10x-10=180 \\Rightarrow 10x=190 \\Rightarrow x=19\\)." },
      { q: "A transversal crosses two lines, and a pair of alternate interior angles both measure \\(58^\\circ\\). Are the lines parallel? Justify.", a: "Yes — by the Converse of the Alternate Interior Angles Theorem, congruent alternate interior angles mean the lines are parallel." },
      { q: "Explain briefly why the Same-Side Interior Angles Theorem gives supplementary angles instead of congruent angles like the others.", a: "Same-side interior angles are related to alternate interior angles by a linear pair: one same-side interior angle is supplementary (not equal) to its neighboring alternate interior angle. Since alternate interior angles are congruent when lines are parallel, the same-side interior pair inherits a supplementary — not congruent — relationship." },
    ],
    qa: [
      { q: "Do I have to memorize four separate theorems, or is there a shortcut?", a: "The Corresponding Angles Theorem is really the foundation — every other relationship (alternate interior, alternate exterior, same-side interior) can be derived from it combined with the Vertical Angles Theorem and Linear Pair, exactly as shown in Example 5. Many students just memorize all four for speed, but understanding the derivation means you can rebuild any of them if you forget." },
      { q: "How do I know when to use a theorem versus its converse?", a: "Use the theorem (not the converse) when you're told or can see the lines are parallel and you need to find an angle measure. Use the converse when you're given angle measures or relationships and asked to prove the lines are parallel." },
      { q: "If corresponding angles are NOT congruent, does that prove the lines are not parallel?", a: "Yes — this follows from the converse. If the lines were parallel, corresponding angles would have to be congruent; since they're not, the lines cannot be parallel." },
      { q: "Is same-side interior the same thing as \"co-interior\" angles?", a: "Yes — same-side interior angles are also called consecutive interior or co-interior angles in different textbooks. They all refer to the same pair: both interior, both on the same side of the transversal." },
    ],
  }),
]);

ch["2.3"] = L("2.3", "Proving Theorems about Perpendicular Lines", [
  lessonHtml({
    title: "Proving Theorems about Perpendicular Lines",
    emoji: "⊥",
    overview: `Two lines are <strong>perpendicular</strong> (\\(\\ell_1\\perp\\ell_2\\)) when they intersect and form a right angle — and once one of the four angles at that intersection is \\(90^\\circ\\), all four must be, since adjacent angles form linear pairs and vertical angles are congruent. This lesson connects perpendicularity to parallelism: two lines each perpendicular to a third line are parallel to each other, and a transversal perpendicular to one of two parallel lines is automatically perpendicular to the other.`,
    toolkit: [
      `<strong>Definition:</strong> \\(\\ell_1\\perp\\ell_2\\) means the two lines intersect and form a right angle (\\(90^\\circ\\)).`,
      `<strong>Right Angles Congruence Theorem:</strong> all right angles are congruent to one another.`,
      `<strong>Congruent Linear Pair Theorem (consequence):</strong> if two lines are perpendicular, they form four congruent right angles — because a \\(90^\\circ\\) angle's linear-pair partner is \\(180^\\circ-90^\\circ=90^\\circ\\), and its vertical angle is congruent to it too.`,
      `<strong>Lines Perpendicular to the Same Line Theorem:</strong> if two coplanar lines are each perpendicular to a third line, then the two lines are parallel to each other.`,
      `<strong>Perpendicular Transversal Theorem:</strong> if a transversal is perpendicular to one of two parallel lines, it is perpendicular to the other one as well.`,
    ],
    figure: fig(perpendicularLines(), "Perpendicular lines intersect to form four right angles."),
    examples: [
      {
        h: "All four angles are right angles",
        p: "\\(\\overleftrightarrow{AB}\\perp\\overleftrightarrow{CD}\\) at point \\(E\\). Explain why all four angles formed at \\(E\\) measure \\(90^\\circ\\), even though only one is marked as a right angle in the diagram.",
        steps: [
          `<strong>Step 1 — Start from the given right angle:</strong> say \\(m\\angle AEC=90^\\circ\\) (given by the perpendicular mark).`,
          `<strong>Step 2 — Use the linear pair:</strong> \\(\\angle AEC\\) and \\(\\angle AED\\) form a linear pair, so \\(m\\angle AED=180^\\circ-90^\\circ=90^\\circ\\).`,
          `<strong>Step 3 — Use vertical angles:</strong> \\(\\angle CEB\\) is vertical to \\(\\angle AED\\), so \\(m\\angle CEB=90^\\circ\\); and \\(\\angle DEB\\) is vertical to \\(\\angle AEC\\), so \\(m\\angle DEB=90^\\circ\\).`,
          `<strong>Conclusion:</strong> all four angles at \\(E\\) measure \\(90^\\circ\\).`,
        ],
      },
      {
        h: "Solving for x at a perpendicular intersection",
        p: "\\(\\overleftrightarrow{AB}\\perp\\overleftrightarrow{CD}\\) at \\(E\\). One of the four angles measures \\(4x+10\\) degrees. Find \\(x\\).",
        steps: [
          `<strong>Step 1 — Use the perpendicular relationship:</strong> every angle at a perpendicular intersection measures \\(90^\\circ\\), so \\(4x+10=90\\).`,
          `<strong>Step 2 — Solve:</strong> \\(4x=80 \\Rightarrow x=20\\).`,
        ],
      },
      {
        h: "Proving two lines parallel using a shared perpendicular",
        p: "<strong>Given:</strong> \\(\\ell_1\\perp t\\) and \\(\\ell_2\\perp t\\), with \\(\\ell_1\\), \\(\\ell_2\\) coplanar. <strong>Prove:</strong> \\(\\ell_1\\parallel\\ell_2\\).",
        fig: perpParallel(),
        steps: [
          `<strong>Step 1 — Statement:</strong> \\(\\ell_1\\perp t\\) and \\(\\ell_2\\perp t\\). <strong>Reason:</strong> Given.`,
          `<strong>Step 2 — Statement:</strong> the angles formed where \\(t\\) meets \\(\\ell_1\\) and where \\(t\\) meets \\(\\ell_2\\) are all \\(90^\\circ\\). <strong>Reason:</strong> Definition of perpendicular.`,
          `<strong>Step 3 — Statement:</strong> the corresponding angles formed by transversal \\(t\\) are congruent (both \\(90^\\circ\\)). <strong>Reason:</strong> Right Angles Congruence Theorem (both equal \\(90^\\circ\\), hence congruent).`,
          `<strong>Step 4 — Statement:</strong> \\(\\ell_1\\parallel\\ell_2\\). <strong>Reason:</strong> Converse of the Corresponding Angles Theorem.`,
        ],
        check: "This is the Lines Perpendicular to the Same Line Theorem, proven directly from the Converse of the Corresponding Angles Theorem.",
      },
      {
        h: "Perpendicular Transversal Theorem",
        p: "<strong>Given:</strong> \\(\\ell_1\\parallel\\ell_2\\) and \\(t\\perp\\ell_1\\). <strong>Prove:</strong> \\(t\\perp\\ell_2\\).",
        steps: [
          `<strong>Step 1 — Statement:</strong> \\(\\ell_1\\parallel\\ell_2\\) and \\(t\\perp\\ell_1\\). <strong>Reason:</strong> Given.`,
          `<strong>Step 2 — Statement:</strong> the angle formed where \\(t\\) meets \\(\\ell_1\\) is \\(90^\\circ\\). <strong>Reason:</strong> Definition of perpendicular.`,
          `<strong>Step 3 — Statement:</strong> the corresponding angle formed where \\(t\\) meets \\(\\ell_2\\) is also \\(90^\\circ\\). <strong>Reason:</strong> Corresponding Angles Theorem (lines are parallel).`,
          `<strong>Step 4 — Statement:</strong> \\(t\\perp\\ell_2\\). <strong>Reason:</strong> Definition of perpendicular (the intersection forms a \\(90^\\circ\\) angle).`,
        ],
      },
      {
        h: "Combining perpendicular and parallel relationships",
        p: "\\(\\ell_1\\parallel\\ell_2\\) and \\(t\\perp\\ell_1\\). The angle where \\(t\\) crosses \\(\\ell_2\\) is labeled \\(5x-15\\) degrees. Find \\(x\\).",
        steps: [
          `<strong>Step 1 — Apply the Perpendicular Transversal Theorem:</strong> since \\(\\ell_1\\parallel\\ell_2\\) and \\(t\\perp\\ell_1\\), it must also be true that \\(t\\perp\\ell_2\\).`,
          `<strong>Step 2 — Use the definition of perpendicular:</strong> the angle where \\(t\\) crosses \\(\\ell_2\\) must measure \\(90^\\circ\\), so \\(5x-15=90\\).`,
          `<strong>Step 3 — Solve:</strong> \\(5x=105 \\Rightarrow x=21\\).`,
        ],
        check: "Once the Perpendicular Transversal Theorem tells you t ⊥ ℓ₂, every angle at that intersection is forced to be 90° — the same shortcut used throughout this lesson.",
      },
    ],
    practice: [
      { q: "\\(\\overleftrightarrow{PQ}\\perp\\overleftrightarrow{RS}\\) at point \\(T\\). One angle at \\(T\\) measures \\(7x-5\\) degrees. Find \\(x\\).", a: "\\(7x-5=90 \\Rightarrow 7x=95 \\Rightarrow x=\\dfrac{95}{7}\\approx 13.6\\)." },
      { q: "Lines \\(m\\) and \\(n\\) are both perpendicular to line \\(k\\), and all three lines are coplanar. What can you conclude about \\(m\\) and \\(n\\)?", a: "\\(m\\parallel n\\), by the Lines Perpendicular to the Same Line Theorem." },
      { q: "\\(\\ell_1\\parallel\\ell_2\\), and transversal \\(t\\) is perpendicular to \\(\\ell_2\\). What must be true about \\(t\\) and \\(\\ell_1\\)?", a: "\\(t\\perp\\ell_1\\) as well, by the Perpendicular Transversal Theorem." },
      { q: "Why are all right angles congruent to each other, even in totally different diagrams?", a: "By definition, every right angle measures exactly \\(90^\\circ\\). Since congruent angles are simply angles with equal measure, any two right angles automatically have equal measure and are therefore congruent." },
      { q: "Two lines are perpendicular. Is the angle between them always described using just one of the four angles formed, or could different people report different measures?", a: "All four angles at the intersection are \\(90^\\circ\\), so there's no ambiguity — any of the four could be reported and the answer is always \\(90^\\circ\\)." },
    ],
    qa: [
      { q: "Do I need to prove all four angles are 90° every time, or can I just state it?", a: "Once you've established that two lines are perpendicular (given, marked, or proven), you can cite the fact that all four angles are right angles directly — you don't need to re-derive it every time, unless a proof specifically asks you to show that step." },
      { q: "Is the Lines Perpendicular to the Same Line Theorem only true in a plane?", a: "Yes — it requires the two lines (and the shared perpendicular line) to be coplanar. In three dimensions, two lines can each be perpendicular to a third line without being parallel to each other (they could be skew)." },
      { q: "What's the difference between this lesson's theorems and the parallel-line theorems from Lesson 2.2?", a: "Lesson 2.2 tells you what happens to transversal angles when lines are already parallel. This lesson uses perpendicularity (a stronger, more specific condition — a 90° angle) as a tool to either prove lines are parallel or to prove a line is perpendicular to a second line." },
      { q: "If two lines intersect but I only know one angle is acute, are they perpendicular?", a: "No — perpendicular specifically means the angle is exactly \\(90^\\circ\\). Any other angle measure means the lines intersect but are not perpendicular." },
    ],
  }),
]);

ch["2.4"] = L("2.4", "Equations of Parallel and Perpendicular Lines (in the Coordinate Plane)", [
  lessonHtml({
    title: "Equations of Parallel and Perpendicular Lines",
    emoji: "📈",
    overview: `On the coordinate plane, the visual idea of "parallel" and "perpendicular" turns into a rule about <strong>slope</strong>. Two distinct lines are parallel exactly when their slopes are equal, and two lines are perpendicular exactly when their slopes are <strong>negative reciprocals</strong> of each other, \\(m_1\\cdot m_2=-1\\). Combined with point-slope form, this lets us write the equation of a new line that's parallel or perpendicular to a given line and passes through a specific point.`,
    toolkit: [
      `<strong>Slope formula:</strong> \\(m=\\dfrac{y_2-y_1}{x_2-x_1}\\). <strong>Slope-intercept form:</strong> \\(y=mx+b\\). <strong>Point-slope form:</strong> \\(y-y_1=m(x-x_1)\\) — the fastest way to build an equation from a point and a slope.`,
      `<strong>Parallel lines</strong> have equal slopes: \\(m_1=m_2\\) (and different \\(y\\)-intercepts, or they'd be the same line).`,
      `<strong>Perpendicular lines</strong> have slopes that are negative reciprocals: \\(m_1\\cdot m_2=-1\\), i.e., \\(m_2=-\\dfrac{1}{m_1}\\).`,
      `Special case: a <strong>horizontal line</strong> (\\(m=0\\)) is perpendicular to any <strong>vertical line</strong> (undefined slope), and parallel to other horizontal lines.`,
      `General strategy: (1) find the slope of the given line, (2) apply the parallel or perpendicular slope rule to get the new slope, (3) plug the new slope and the given point into point-slope form, then simplify if needed.`,
    ],
    figure: gframe(["y = 2*x + 1", "y = 2*x - 3"], { title: "Parallel lines: same slope m = 2", zoom: 28 }) + '<div style="font-size:13px;color:#64748b;margin-top:6px;">Parallel lines have equal slopes and different intercepts.</div>',
    examples: [
      {
        h: "Equation of a parallel line",
        p: "Write the equation of the line parallel to \\(y=3x-4\\) that passes through \\((2,5)\\).",
        steps: [
          `<strong>Step 1 — Identify the given slope:</strong> \\(y=3x-4\\) has slope \\(m=3\\).`,
          `<strong>Step 2 — Apply the parallel rule:</strong> a parallel line has the same slope, \\(m=3\\).`,
          `<strong>Step 3 — Use point-slope form:</strong> \\(y-5=3(x-2)\\).`,
          `<strong>Step 4 — Simplify:</strong> \\(y-5=3x-6 \\Rightarrow y=3x-1\\).`,
        ],
        check: "Same slope (3) as the original, different y-intercept (−1 vs. −4) — confirms the lines are parallel and distinct.",
      },
      {
        h: "Equation of a perpendicular line",
        p: "Write the equation of the line perpendicular to \\(y=-\\dfrac{2}{3}x+1\\) that passes through \\((4,-1)\\).",
        fig: gframe(["y = 2*x", "y = -0.5*x + 1"], { title: "Perpendicular: slopes 2 and −1/2", zoom: 28 }) + '<div style="font-size:13px;color:#64748b;margin-top:6px;">Slopes are negative reciprocals: \(2\cdot(-\tfrac{1}{2})=-1\).</div>',
        steps: [
          `<strong>Step 1 — Identify the given slope:</strong> \\(m_1=-\\dfrac{2}{3}\\).`,
          `<strong>Step 2 — Apply the perpendicular rule:</strong> \\(m_2=-\\dfrac{1}{m_1}=-\\dfrac{1}{-2/3}=\\dfrac{3}{2}\\).`,
          `<strong>Step 3 — Use point-slope form:</strong> \\(y-(-1)=\\dfrac{3}{2}(x-4)\\).`,
          `<strong>Step 4 — Simplify:</strong> \\(y+1=\\dfrac{3}{2}x-6 \\Rightarrow y=\\dfrac{3}{2}x-7\\).`,
        ],
        check: "Multiply the two slopes: \\(-\\dfrac{2}{3}\\cdot\\dfrac{3}{2}=-1\\). ✓",
      },
      {
        h: "Classifying two lines from their equations",
        p: "Are the lines \\(4x+2y=6\\) and \\(y=2x-5\\) parallel, perpendicular, or neither?",
        steps: [
          `<strong>Step 1 — Rewrite the first equation in slope-intercept form:</strong> \\(2y=-4x+6 \\Rightarrow y=-2x+3\\), so \\(m_1=-2\\).`,
          `<strong>Step 2 — Read the second slope directly:</strong> \\(m_2=2\\).`,
          `<strong>Step 3 — Test both rules:</strong> equal? No (\\(-2\\ne 2\\)). Negative reciprocals? \\(m_1\\cdot m_2=-2\\cdot 2=-4\\ne -1\\).`,
          `<strong>Conclusion:</strong> neither — the lines are just two intersecting, non-perpendicular lines.`,
        ],
      },
      {
        h: "The horizontal/vertical special case",
        p: "Write the equation of the line perpendicular to the vertical line \\(x=5\\) that passes through \\((5,-3)\\)... actually through \\((2,-3)\\).",
        steps: [
          `<strong>Step 1 — Recall the special rule:</strong> a line perpendicular to a vertical line (\\(x=5\\), undefined slope) must be horizontal (\\(m=0\\)).`,
          `<strong>Step 2 — Write a horizontal line through the given point:</strong> a horizontal line has equation \\(y=k\\) for some constant \\(k\\), and it must pass through \\((2,-3)\\), so \\(k=-3\\).`,
          `<strong>Conclusion:</strong> \\(y=-3\\).`,
        ],
        check: "A vertical line and a horizontal line always meet at a right angle, so this makes sense without needing the slope-product formula (which doesn't apply when a slope is undefined).",
      },
      {
        h: "A coordinate geometry application",
        p: "Quadrilateral \\(ABCD\\) has \\(A(0,0)\\), \\(B(4,2)\\), \\(C(6,-2)\\), \\(D(2,-4)\\). Show that \\(\\overline{AB}\\perp\\overline{BC}\\).",
        steps: [
          `<strong>Step 1 — Find the slope of \\(\\overline{AB}\\):</strong> \\(m_{AB}=\\dfrac{2-0}{4-0}=\\dfrac{2}{4}=\\dfrac{1}{2}\\).`,
          `<strong>Step 2 — Find the slope of \\(\\overline{BC}\\):</strong> \\(m_{BC}=\\dfrac{-2-2}{6-4}=\\dfrac{-4}{2}=-2\\).`,
          `<strong>Step 3 — Test the perpendicular rule:</strong> \\(m_{AB}\\cdot m_{BC}=\\dfrac{1}{2}\\cdot(-2)=-1\\).`,
          `<strong>Conclusion:</strong> since the product of the slopes is \\(-1\\), \\(\\overline{AB}\\perp\\overline{BC}\\).`,
        ],
      },
    ],
    practice: [
      { q: "Write the equation of the line parallel to \\(y=-\\dfrac{1}{4}x+2\\) through the point \\((8,1)\\).", a: "Same slope, \\(m=-\\dfrac{1}{4}\\): \\(y-1=-\\dfrac{1}{4}(x-8) \\Rightarrow y-1=-\\dfrac{1}{4}x+2 \\Rightarrow y=-\\dfrac{1}{4}x+3\\)." },
      { q: "Write the equation of the line perpendicular to \\(y=5x+2\\) through the point \\((10,-4)\\).", a: "Perpendicular slope: \\(m=-\\dfrac{1}{5}\\). \\(y+4=-\\dfrac{1}{5}(x-10) \\Rightarrow y+4=-\\dfrac{1}{5}x+2 \\Rightarrow y=-\\dfrac{1}{5}x-2\\)." },
      { q: "Are \\(y=\\dfrac{3}{4}x-1\\) and \\(3x-4y=8\\) parallel, perpendicular, or neither?", a: "Rewrite the second: \\(-4y=-3x+8 \\Rightarrow y=\\dfrac{3}{4}x-2\\), slope \\(\\dfrac{3}{4}\\), same as the first. They are parallel (and distinct, since the y-intercepts differ)." },
      { q: "Write the equation of the line perpendicular to the horizontal line \\(y=7\\) through the point \\((-3,2)\\).", a: "A line perpendicular to a horizontal line is vertical: \\(x=-3\\)." },
      { q: "Given \\(P(-1,3)\\), \\(Q(3,5)\\), \\(R(5,1)\\), determine whether \\(\\overline{PQ}\\perp\\overline{QR}\\).", a: "\\(m_{PQ}=\\dfrac{5-3}{3-(-1)}=\\dfrac{2}{4}=\\dfrac{1}{2}\\); \\(m_{QR}=\\dfrac{1-5}{5-3}=\\dfrac{-4}{2}=-2\\). Product: \\(\\dfrac{1}{2}\\cdot(-2)=-1\\), so yes, \\(\\overline{PQ}\\perp\\overline{QR}\\)." },
    ],
    qa: [
      { q: "Why does multiplying perpendicular slopes give exactly \\(-1\\)?", a: "Rotating a line by \\(90^\\circ\\) flips the roles of rise and run and reverses one sign, which turns a slope of \\(\\dfrac{a}{b}\\) into \\(-\\dfrac{b}{a}\\) — the negative reciprocal. Multiplying the two gives \\(\\dfrac{a}{b}\\cdot\\left(-\\dfrac{b}{a}\\right)=-1\\) every time." },
      { q: "What's the slope of a vertical line, and why can't I use the slope-product rule with it?", a: "A vertical line has undefined slope (the run is 0, and you can't divide by 0). Since the rule \\(m_1\\cdot m_2=-1\\) requires both slopes to be real numbers, you handle vertical/horizontal perpendicular pairs as a special case instead." },
      { q: "If two lines have the same slope, are they always parallel?", a: "They're parallel as long as they're different lines. If they have the same slope AND the same y-intercept, they're actually the same line, not two parallel lines." },
      { q: "Why use point-slope form instead of just plugging into \\(y=mx+b\\) directly?", a: "Point-slope form is built exactly for this situation — you already know a slope and a point, and it needs no extra algebra to set up. You can always convert to slope-intercept form afterward by simplifying, as shown in the examples." },
    ],
  }),
]);

ch["2.5"] = L("2.5", "Constructions: Parallel and Perpendicular Lines (MA.912.GR.5.1, MA.912.GR.5.2)", [
  lessonHtml({
    title: "Constructions: Parallel and Perpendicular Lines",
    emoji: "🧰",
    overview: `A geometric <strong>construction</strong> uses only a compass and straightedge — no ruler measurements, no protractor angle readings — to produce exact figures. This lesson builds two essential constructions: a <strong>perpendicular line</strong> through a point (whether the point is on the given line or not), and a <strong>parallel line</strong> through a point not on the given line. Each construction is justified by the same congruent-triangle reasoning that also justifies copying a segment or angle.`,
    toolkit: [
      `Only two tools are allowed: an unmarked <strong>straightedge</strong> (draws straight lines, no measuring) and a <strong>compass</strong> (draws circles/arcs of a fixed radius).`,
      `<strong>Perpendicular through a point ON a line:</strong> swing equal arcs from the point in both directions along the line to get two equidistant points, then swing larger equal arcs from each of those two points above (or below) the line — their intersection, connected to the original point, is the perpendicular.`,
      `<strong>Perpendicular through a point NOT on a line:</strong> swing one arc from the external point that crosses the line twice, then swing equal arcs from those two crossing points on the opposite side — their intersection, connected to the original point, gives the perpendicular.`,
      `<strong>Parallel line through an external point:</strong> copy the angle a transversal makes with the given line (Lesson 1.3's angle-copy method) at the new point, positioned as a corresponding angle — the new ray is parallel to the original line by the Converse of the Corresponding Angles Theorem.`,
      `Every one of these constructions is valid because the arcs create pairs of congruent triangles (by SSS, using equal compass radii), and congruent triangles guarantee the angles come out exactly \\(90^\\circ\\) or exactly equal, as needed.`,
    ],
    figure: fig(constructParallel(), "To construct a parallel through \(P\), copy a corresponding angle so a transversal creates congruent corresponding angles."),
    examples: [
      {
        h: "Perpendicular through a point on the line",
        p: "Given point \\(P\\) on line \\(\\ell\\), construct a line through \\(P\\) perpendicular to \\(\\ell\\).",
        steps: [
          `<strong>Step 1 — Mark equidistant points:</strong> place the compass point on \\(P\\) and swing an arc of any radius that crosses \\(\\ell\\) on both sides of \\(P\\); label the crossing points \\(A\\) and \\(B\\). Now \\(PA=PB\\).`,
          `<strong>Step 2 — Swing two larger equal arcs:</strong> open the compass wider than before. From \\(A\\), swing an arc above line \\(\\ell\\); from \\(B\\), using the exact same compass width, swing another arc above the line so it crosses the first one. Label the crossing point \\(Q\\).`,
          `<strong>Step 3 — Draw the perpendicular:</strong> use the straightedge to draw \\(\\overleftrightarrow{PQ}\\).`,
          `<strong>Conclusion:</strong> \\(\\overleftrightarrow{PQ}\\perp\\ell\\).`,
        ],
      },
      {
        h: "Perpendicular through a point not on the line",
        p: "Given point \\(P\\) not on line \\(\\ell\\), construct a line through \\(P\\) perpendicular to \\(\\ell\\).",
        fig: constructPerp(),
        steps: [
          `<strong>Step 1 — Cross the line twice:</strong> place the compass point on \\(P\\) and swing an arc with a radius large enough to cross \\(\\ell\\) in two places; label the crossing points \\(A\\) and \\(B\\).`,
          `<strong>Step 2 — Swing equal arcs from A and B:</strong> keeping the same or a new fixed compass width (wider than half of \\(AB\\)), swing an arc from \\(A\\) below \\(\\ell\\) (on the opposite side from \\(P\\)), then swing an equal-radius arc from \\(B\\) so it crosses the first. Label the crossing point \\(Q\\).`,
          `<strong>Step 3 — Draw the perpendicular:</strong> draw \\(\\overleftrightarrow{PQ}\\), which crosses \\(\\ell\\) at a right angle.`,
          `<strong>Conclusion:</strong> \\(\\overleftrightarrow{PQ}\\perp\\ell\\), and the crossing point on \\(\\ell\\) is equidistant from \\(A\\) and \\(B\\) — it's the foot of the perpendicular from \\(P\\).`,
        ],
      },
      {
        h: "Parallel line through an external point",
        p: "Given line \\(\\ell\\) and point \\(P\\) not on \\(\\ell\\), construct a line through \\(P\\) parallel to \\(\\ell\\).",
        fig: constructParallel(),
        steps: [
          `<strong>Step 1 — Draw a transversal:</strong> draw a line through \\(P\\) that crosses \\(\\ell\\) at some point \\(A\\), creating an angle between the transversal and \\(\\ell\\).`,
          `<strong>Step 2 — Copy the angle at P:</strong> using the angle-copying method (Lesson 1.3), copy the angle formed at \\(A\\) so that an equal angle is built at \\(P\\), positioned on the same side of the transversal and in the same corresponding location relative to \\(P\\) as the original angle is to \\(A\\).`,
          `<strong>Step 3 — Draw the new line:</strong> the new ray from \\(P\\) (together with its opposite ray) is the desired line, call it \\(m\\).`,
          `<strong>Conclusion:</strong> because the copied angle makes the angle at \\(P\\) congruent to the corresponding angle at \\(A\\), \\(m\\parallel\\ell\\) by the Converse of the Corresponding Angles Theorem.`,
        ],
      },
      {
        h: "Why the perpendicular construction works",
        p: "In the Example 1 construction, explain why \\(\\overleftrightarrow{PQ}\\) is guaranteed to be perpendicular to \\(\\ell\\), rather than just looking close to perpendicular.",
        steps: [
          `<strong>Step 1 — Identify the congruent triangles:</strong> \\(\\triangle APQ\\) and \\(\\triangle BPQ\\) share side \\(\\overline{PQ}\\), and by construction \\(PA=PB\\) (Step 1's arc) and \\(QA=QB\\) (Step 2's equal-radius arcs).`,
          `<strong>Step 2 — Apply SSS:</strong> three pairs of congruent sides mean \\(\\triangle APQ\\cong\\triangle BPQ\\).`,
          `<strong>Step 3 — Use CPCTC:</strong> corresponding parts of congruent triangles are congruent, so \\(\\angle APQ\\cong\\angle BPQ\\). Since these two angles also form a linear pair (they sit on line \\(\\ell\\) together), each must measure exactly \\(90^\\circ\\).`,
          `<strong>Conclusion:</strong> the construction doesn't just look perpendicular — it's guaranteed to be exactly \\(90^\\circ\\) by triangle congruence.`,
        ],
      },
      {
        h: "Building a rectangle using perpendicular constructions",
        p: "Describe how to use two perpendicular constructions to build a rectangle starting from segment \\(\\overline{AB}\\).",
        steps: [
          `<strong>Step 1 — Construct a perpendicular at each endpoint:</strong> using the point-on-a-line method, construct a line perpendicular to \\(\\overline{AB}\\) at \\(A\\), and another perpendicular to \\(\\overline{AB}\\) at \\(B\\).`,
          `<strong>Step 2 — Mark equal heights:</strong> using the same compass width, mark point \\(D\\) on the perpendicular at \\(A\\) and point \\(C\\) on the perpendicular at \\(B\\), both at the same distance from \\(\\overline{AB}\\).`,
          `<strong>Step 3 — Connect the top:</strong> draw \\(\\overline{DC}\\).`,
          `<strong>Conclusion:</strong> \\(ABCD\\) is a rectangle — \\(\\overline{AD}\\) and \\(\\overline{BC}\\) are both perpendicular to \\(\\overline{AB}\\) (hence parallel to each other, by the Lines Perpendicular to the Same Line Theorem), and all four angles are \\(90^\\circ\\) by construction.`,
        ],
      },
    ],
    practice: [
      { q: "In the perpendicular-through-a-point-on-a-line construction, why must the two arcs in Step 2 use the exact same compass width?", a: "The equal radii guarantee \\(QA=QB\\), which is one of the three pairs of equal sides needed to prove \\(\\triangle APQ\\cong\\triangle BPQ\\) by SSS. Without equal radii, there's no guarantee the resulting angle is exactly 90°." },
      { q: "Could you use a protractor instead of these steps to construct a perpendicular line?", a: "A protractor could get you visually close to 90°, but it isn't a valid construction tool — constructions specifically require compass-and-straightedge methods so the result is provably exact, not just visually approximate." },
      { q: "Why does copying an angle (Step 2 of the parallel-line construction) guarantee the new line is parallel, rather than just close to parallel?", a: "Copying the angle produces a corresponding angle that is exactly congruent (by the SSS argument from Lesson 1.3), and exactly congruent corresponding angles guarantee parallel lines by the Converse of the Corresponding Angles Theorem — an exact logical guarantee, not an approximation." },
      { q: "What's the difference between the point-on-the-line and point-not-on-the-line perpendicular constructions?", a: "When the point is on the line, the first arc is centered at the point itself and crosses the line on both sides. When the point is off the line, the first arc is centered at the external point and crosses the line at two separate points; the rest of the logic (equal arcs from those two points) is the same idea." },
      { q: "In building the rectangle (Example 5), why are \\(\\overline{AD}\\) and \\(\\overline{BC}\\) parallel?", a: "Both segments are perpendicular to the same segment, \\(\\overline{AB}\\), and they're coplanar — so by the Lines Perpendicular to the Same Line Theorem (Lesson 2.3), they must be parallel to each other." },
    ],
    qa: [
      { q: "Why can't I just measure with a ruler and protractor instead of doing all these arcs?", a: "A ruler and protractor give approximate results limited by how precisely you can read the markings. Compass-and-straightedge constructions are provably exact — the congruent-triangle argument guarantees a true 90° angle or a true parallel line, not just a close estimate." },
      { q: "Do I have to keep the same compass width throughout the whole construction?", a: "No — you deliberately change the compass width between different steps (e.g., a small first arc, then a wider second arc), but within any single step where two arcs need to match (like the two arcs in Step 2), the width must stay exactly fixed between those two arcs." },
      { q: "Is there more than one valid way to construct a parallel line through a point?", a: "Yes. The angle-copy method shown here is the most common, but you can also construct two perpendiculars: drop a perpendicular from \\(P\\) to \\(\\ell\\), then construct a perpendicular to that perpendicular at \\(P\\) — the result is also parallel to \\(\\ell\\), by the same Lines-Perpendicular-to-the-Same-Line Theorem." },
      { q: "What FL B.E.S.T. standards do these constructions align with?", a: "This lesson directly covers MA.912.GR.5.1 (constructing geometric figures using compass and straightedge) and MA.912.GR.5.2 (constructing a line parallel or perpendicular to a given line through a point, and justifying the construction)." },
    ],
  }),
]);
