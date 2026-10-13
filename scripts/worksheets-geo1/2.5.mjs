import { fig } from "./_figs.mjs";

function perpBisectorFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200" width="260" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Perpendicular bisector construction">
  <line x1="40" y1="100" x2="220" y2="100" stroke="#0f172a" stroke-width="2.5"/>
  <path d="M40,100 A95,95 0 0 1 130,45" fill="none" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="3,3"/>
  <path d="M220,100 A95,95 0 0 0 130,45" fill="none" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="3,3"/>
  <path d="M40,100 A95,95 0 0 0 130,155" fill="none" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="3,3"/>
  <path d="M220,100 A95,95 0 0 1 130,155" fill="none" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="3,3"/>
  <line x1="130" y1="30" x2="130" y2="170" stroke="#15803d" stroke-width="2.2"/>
  <circle cx="40" cy="100" r="3.5" fill="#ea580c"/><text x="30" y="122" font-size="13" fill="#9a3412" font-family="Georgia,serif">A</text>
  <circle cx="220" cy="100" r="3.5" fill="#ea580c"/><text x="222" y="122" font-size="13" fill="#9a3412" font-family="Georgia,serif">B</text>
  <circle cx="130" cy="100" r="3.5" fill="#15803d"/><text x="138" y="96" font-size="13" fill="#14532d" font-family="Georgia,serif">M</text>
</svg>`;
}

function copyAngleFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 170" width="280" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Copying an angle">
  <line x1="20" y1="140" x2="120" y2="140" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="20" y1="140" x2="70" y2="50" stroke="#0f172a" stroke-width="2.2"/>
  <path d="M50,140 A30,30 0 0 1 38,113" fill="none" stroke="#ea580c" stroke-width="1.6"/>
  <line x1="160" y1="140" x2="270" y2="140" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="160" y1="140" x2="212" y2="50" stroke="#0f172a" stroke-width="2.2"/>
  <path d="M191,140 A30,30 0 0 1 179,113" fill="none" stroke="#15803d" stroke-width="1.6"/>
  <text x="18" y="157" font-size="11" fill="#334155" font-family="Georgia,serif">original</text>
  <text x="158" y="157" font-size="11" fill="#334155" font-family="Georgia,serif">copy (same radii)</text>
</svg>`;
}

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "2.5",
  title: "Constructing Parallel & Perpendicular",
  intro: "Compass-and-straightedge constructions produce results that are exactly correct, provable through triangle congruence, rather than approximately correct from a measured reading. This section pushes past memorizing steps by asking <i>why</i> each construction works — usually because two equal-radius arcs force an SSS congruence, which in turn forces a right angle or equal segment. It also chains the corresponding-angle idea from Section 2.2 into an actual construction for a parallel line, and applies the perpendicular bisector to a genuine problem: locating the center of a circle from three points on it.",
  examples: [
    ["Example 1: Tools of a construction",
      "What two tools are allowed in a classical geometric construction, and why are a ruler's numbered markings and a protractor's degree markings both excluded?",
      "The two allowed tools are a compass (draws circles and arcs of a fixed radius) and an unmarked straightedge (draws straight lines, but does not measure).<br>" +
      "Numbered rulers and protractors are excluded because a construction must be logically exact — reading \"5.0 cm\" or \"37^\\circ\" off a scale is only as good as the tool's smallest marking, an approximation.<br>" +
      "<b>Answer:</b> Compass and straightedge only, because they reproduce exact equal lengths and equal angles without relying on any measurement."],

    ["Example 2: Perpendicular at a point on a line",
      "Describe the steps to construct a perpendicular to line $\\ell$ at a point $P$ on $\\ell$, and explain why the result is guaranteed to be exactly $90^\\circ$.",
      fig(perpBisectorFig(), "Equal arcs from two equidistant points meet above and below, pinning down a perpendicular.") +
      "Steps: (1) center the compass at $P$ and draw arcs of equal radius crossing $\\ell$ on both sides, at $A$ and $B$; (2) from $A$ and from $B$, draw two more equal-radius arcs (wider than half $AB$) that intersect above $P$, at $Q$; (3) draw $\\overrightarrow{PQ}$.<br>" +
      "Reasoning: $PA = PB$ (first radius) and $QA = QB$ (second radius), with $PQ = PQ$ shared, so $\\triangle QPA \\cong \\triangle QPB$ by SSS — their angles at $P$ are congruent and form a linear pair, forcing each to be $90^\\circ$.<br>" +
      "<b>Answer:</b> $\\overrightarrow{PQ} \\perp \\ell$, guaranteed exact by SSS congruence, not by measuring."],

    ["Example 3: Perpendicular bisector locates the midpoint too",
      "Construct the perpendicular bisector of $\\overline{AB}$, and explain why the point where it crosses $\\overline{AB}$ is exactly the midpoint.",
      fig(perpBisectorFig(), "The same construction proves perpendicularity and the midpoint at once.") +
      "Steps: from $A$ and separately from $B$, draw arcs of equal radius (more than half $AB$) intersecting above and below the segment at $P$ and $Q$; draw $\\overleftrightarrow{PQ}$.<br>" +
      "Since $AP = BP$ and $AQ = BQ$ (equal compass radii), with $PQ=PQ$ shared, $\\triangle APQ \\cong \\triangle BPQ$ by SSS, forcing $\\angle APQ \\cong \\angle BPQ$ — a congruent linear pair, so each is $90^\\circ$; CPCTC then gives $AM = BM$ at the crossing point $M$.<br>" +
      "<b>Answer:</b> $\\overleftrightarrow{PQ}$ is perpendicular to $\\overline{AB}$ at its midpoint $M$ — one construction proves both facts."],

    ["Example 4: Perpendicular from a point not on the line",
      "Describe the steps to drop a perpendicular from a point $P$ (not on line $\\ell$) to $\\ell$.",
      "Steps: (1) from $P$, draw an arc that crosses $\\ell$ at two points, $A$ and $B$; (2) from $A$ and from $B$, draw two more equal-radius arcs on the opposite side of $\\ell$ from $P$ that intersect at $Q$; (3) draw $\\overleftrightarrow{PQ}$.<br>" +
      "Reasoning: $PA = PB$ from step 1 and $QA = QB$ from step 2, so both $P$ and $Q$ are equidistant from $A$ and $B$ — meaning $\\overleftrightarrow{PQ}$ is the perpendicular bisector of $\\overline{AB}$, which is therefore perpendicular to $\\ell$ (since $A, B \\in \\ell$).<br>" +
      "<b>Answer:</b> $\\overleftrightarrow{PQ}$ meets $\\ell$ at a right angle — the foot of the perpendicular from $P$."],

    ["Example 5: Copying an angle",
      "Describe how to copy $\\angle A$ onto a new ray using only compass and straightedge, and explain why the copy is exactly congruent.",
      fig(copyAngleFig(), "Matching all three sides of the small triangle forces matching angles.") +
      "Steps: (1) draw an arc centered at the vertex of $\\angle A$, crossing both rays at $B$ and $C$; (2) draw a new ray, and with the <i>same</i> compass radius, draw an arc from the new vertex crossing the new ray at $B'$; (3) open the compass to width $BC$, and from $B'$ draw an arc crossing the first new arc at $C'$; (4) draw the ray through $C'$.<br>" +
      "Reasoning: the new triangle (vertex, $B'$, $C'$) has all three sides equal to the original (vertex, $B$, $C$) triangle by construction, so they are congruent by SSS, forcing the angles at the vertices to match.<br>" +
      "<b>Answer:</b> The new angle is exactly congruent to $\\angle A$, guaranteed by SSS — not by eyeballing it."],

    ["Example 6: Constructing a parallel line",
      "Explain how copying a corresponding angle at a new point $P$ lets you construct a line through $P$ parallel to a given line $\\ell$.",
      "Draw a transversal through $P$ that also crosses $\\ell$, creating an angle at $\\ell$. Using the Example 5 method, copy that angle at $P$, in the matching corresponding position along the same transversal.<br>" +
      "The new angle is congruent to the original by construction, so the two lines now have congruent corresponding angles with the same transversal.<br>" +
      "By the Converse of the Corresponding Angles Postulate (Section 2.2), congruent corresponding angles force the lines to be parallel.<br>" +
      "<b>Answer:</b> The newly drawn line through $P$ is parallel to $\\ell$."],

    ["Example 7: Why constructions outrank measuring",
      "A ruler reads to the nearest millimeter and a protractor to the nearest degree. Explain why a compass-and-straightedge construction counts as more 'exact,' even though a compass is a physical tool too.",
      "A ruler or protractor reading is inherently an approximation — the true value could fall anywhere within the tool's smallest marked interval.<br>" +
      "A compass construction instead relies on logical guarantees, like SSS congruence, that hold exactly regardless of how carefully the compass was drawn — the <i>proof</i> guarantees the result, not the drawing's precision.<br>" +
      "<b>Answer:</b> Constructions are exact because their correctness is proved through congruence, not read off a scale."],

    ["Example 8: Uniqueness of the perpendicular",
      "Through a given point, how many lines can be drawn perpendicular to a given line? Justify your answer using the constructions above.",
      "Both perpendicular constructions above (Examples 2 and 4) always produce one specific line — nothing in the steps allows a second, different perpendicular through the same point.<br>" +
      "This matches the Uniqueness of Perpendiculars Theorem.<br>" +
      "<b>Answer:</b> Exactly one perpendicular line through a given point."],

    ["Example 9: Uniqueness of the parallel",
      "Through a point $P$ not on line $\\ell$, how many lines can be drawn parallel to $\\ell$ in Euclidean geometry?",
      "The construction in Example 6 produces exactly one specific parallel line through $P$.<br>" +
      "Euclidean geometry's Parallel Postulate (Playfair's form) guarantees that no second, different parallel line through $P$ exists.<br>" +
      "<b>Answer:</b> Exactly one — this uniqueness is special to Euclidean geometry."],

    ["Example 10: Application — finding a circle's center",
      "Three points $A$, $B$, $C$ lie on a circle whose center is unmarked. Explain how two perpendicular-bisector constructions can locate the exact center.",
      fig(perpBisectorFig(), "The center is equidistant from A and B — so it lies on this exact line.") +
      "The center of a circle is equidistant from every point on it, so it must be equidistant from $A$ and $B$ — meaning it lies on the perpendicular bisector of $\\overline{AB}$.<br>" +
      "By the same reasoning, it must also lie on the perpendicular bisector of $\\overline{BC}$.<br>" +
      "Construct both bisectors (Example 3's method, applied twice); their single intersection point is equidistant from all three points, so it must be the center.<br>" +
      "<b>Answer:</b> The center is the intersection of the perpendicular bisectors of $\\overline{AB}$ and $\\overline{BC}$."],
  ],
  questions: [
    ["Problem 1: Tools", "Two tools for constructions?", "Compass and straightedge"],
    ["Problem 2: Protractor?", "Is a protractor allowed in constructions?", "No"],
    ["Problem 3: Perp at on-line point", "Construction of $\\perp$ at a point on a line uses equal what?", "Equal arcs / equal radii"],
    ["Problem 4: Perp from off-line point", "This construction creates a line from the point that is what to the given line?", "Perpendicular"],
    ["Problem 5: Parallel uniqueness", "Parallels through an external point: how many?", "One"],
    ["Problem 6: Perp uniqueness", "Perpendiculars through a point to a line: how many?", "One"],
    ["Problem 7: Perp bisector", "Perpendicular bisector intersects the segment at its what?", "Midpoint"],
    ["Problem 8: Justify parallel", "Congruent corresponding angles imply lines are what?", "Parallel"],
    ["Problem 9: Justify perp", "If an angle formed by two equal-radius arc constructions is $90^\\circ$, the lines are what?", "Perpendicular"],
    ["Problem 10: Ruler measure?", "May you transfer a length by reading a ruler in a construction?", "No"],
    ["Problem 11: Copy angle", "Copying an angle relies on which triangle congruence shortcut?", "SSS"],
    ["Problem 12: Result", "Construction through $P \\notin \\ell$ parallel to $\\ell$ yields a line that never does what with $\\ell$?", "Intersects"],
    ["Problem 13: Result", "Construction of $\\perp$ yields what angle measure?", "$90^\\circ$"],
    ["Problem 14: Challenge — midpoint without a ruler", "A carpenter needs the exact midpoint of a board with no ruler. Which construction should be used, and what two facts does it guarantee simultaneously?", "The perpendicular bisector construction; it guarantees the point is the exact midpoint AND that the bisector line is perpendicular to the board"],
    ["Problem 15: Challenge — construct 60°", "Explain how to construct a $60^\\circ$ angle with no protractor, using only an equilateral triangle built from segment $\\overline{AB}$.", "Draw $\\overline{AB}$; with radius $AB$, draw arcs from $A$ and $B$ meeting at $C$; since $AB=AC=BC$, $\\triangle ABC$ is equilateral, so each angle equals $60^\\circ$"],
  ],
};
