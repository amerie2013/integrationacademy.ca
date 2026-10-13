import { fig, triABC, segmentMid, coordPts } from "./_figs.mjs";

function twoPlanesFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 215" width="260" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Two planes intersecting in a line">
  <polygon points="130,30 130,170 30,190 30,50" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2" opacity="0.9"/>
  <polygon points="130,30 130,170 230,190 230,50" fill="#fff7ed" stroke="#c2410c" stroke-width="2" opacity="0.9"/>
  <line x1="130" y1="30" x2="130" y2="170" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="130" cy="30" r="4" fill="#0f172a"/><text x="138" y="26" font-size="13" fill="#0f172a" font-family="Georgia,serif">A</text>
  <circle cx="130" cy="100" r="4" fill="#0f172a"/><text x="138" y="104" font-size="13" fill="#0f172a" font-family="Georgia,serif">M</text>
  <circle cx="130" cy="170" r="4" fill="#0f172a"/><text x="138" y="188" font-size="13" fill="#0f172a" font-family="Georgia,serif">B</text>
  <circle cx="30" cy="190" r="4" fill="#1d4ed8"/><text x="10" y="205" font-size="13" fill="#1e3a8a" font-family="Georgia,serif">C</text>
  <circle cx="230" cy="190" r="4" fill="#c2410c"/><text x="234" y="205" font-size="13" fill="#9a3412" font-family="Georgia,serif">D</text>
</svg>`;
}

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "1.1",
  title: "Points, Lines, and Planes",
  intro: "Point, line, and plane are the three undefined terms that every later definition and postulate is built from. Beyond simply naming a ray or a segment, this section pushes into the logic behind collinearity and coplanarity — using postulates to justify why three points determine a plane only when they are noncollinear, and why two planes can only intersect in a line, never in a single stray point. Expect problems that combine several undefined terms in one figure, ask you to name the postulate that justifies an answer, and require reasoning about three-dimensional configurations rather than just flat sketches.",
  examples: [
    ["Example 1: Name a line two ways",
      "Points $A(1,4)$ and $B(5,1)$ are graphed. Explain why exactly one line passes through both, then name that line in two ways.",
      fig(coordPts([{ x: 1, y: 4, label: "A" }, { x: 5, y: 1, label: "B" }], { xmin: -1, xmax: 6, ymin: -1, ymax: 5 }), "Exactly one line can be drawn through A and B.") +
      "Identify the postulate: the Line Postulate states that through any two distinct points there is exactly one line — once $A$ and $B$ are fixed, the connecting line is uniquely determined.<br>" +
      "A line extends without end in both directions and has no preferred starting point, so it may be named from either point.<br>" +
      "<b>Answer:</b> $\\overleftrightarrow{AB}$ or $\\overleftrightarrow{BA}$ name the same line."],

    ["Example 2: Name a plane and check the condition",
      "Points $A$, $B$, $C$ do not lie on one line. Explain why they determine a plane, then name it.",
      fig(triABC(), "Three noncollinear points pin down exactly one flat plane.") +
      "Check the condition: the Plane Postulate requires the three points to be <b>noncollinear</b> — that is given here.<br>" +
      "Apply the postulate: three noncollinear points determine exactly one plane containing all of them.<br>" +
      "Name the plane using any order of the three letters.<br>" +
      "<b>Answer:</b> Plane $ABC$ (equivalently $ACB$, $BAC$, etc.)."],

    ["Example 3: Collinear vs. coplanar across two planes",
      "In the figure, two planes are joined along $\\overline{AB}$, with $M$ between $A$ and $B$, point $C$ in the left plane, and point $D$ in the right plane. (a) Are $A$, $M$, $B$ collinear? (b) Are $A$, $B$, $C$, $D$ all coplanar?",
      fig(twoPlanesFig(), "Two planes share the line through A, M, B; C and D sit in different planes.") +
      "(a) $A$, $M$, $B$ all lie on the shared edge, which is a single line, so <b>they are collinear</b>.<br>" +
      "(b) $C$ belongs only to the left plane and $D$ belongs only to the right plane; one flat plane cannot contain points from both slanted surfaces at once, so $A,B,C,D$ are <b>not coplanar</b>.<br>" +
      "<b>Lesson:</b> coplanar must hold for the whole set at once — it is not enough that some triples within it are coplanar."],

    ["Example 4: Opposite rays",
      "$A$, $M$, $B$ are collinear with $M$ between $A$ and $B$. Are $\\overrightarrow{MA}$ and $\\overrightarrow{MB}$ opposite rays? What about $\\overrightarrow{AM}$ and $\\overrightarrow{MB}$?",
      fig(segmentMid(), "M lies between A and B on one line.") +
      "Check the definition: opposite rays must share the same endpoint <i>and</i> point in exactly opposite directions along one line.<br>" +
      "$\\overrightarrow{MA}$ and $\\overrightarrow{MB}$ both start at $M$ and head toward opposite ends of the line — both conditions hold, so <b>they are opposite rays</b>.<br>" +
      "$\\overrightarrow{AM}$ starts at $A$, not $M$, so it does not share an endpoint with $\\overrightarrow{MB}$ — <b>not opposite rays</b>, even though all three points lie on the same line.<br>" +
      "<b>Answer:</b> $\\overrightarrow{MA},\\overrightarrow{MB}$ are opposite; $\\overrightarrow{AM},\\overrightarrow{MB}$ are not."],

    ["Example 5: Uniqueness of a line",
      "Explain, using a postulate, why two distinct points cannot lie on two different lines.",
      "State the postulate: the Line Postulate guarantees exactly one line through any two distinct points — the word \"exactly\" rules out more than one.<br>" +
      "Suppose, for contradiction, that two different lines $\\ell_1$ and $\\ell_2$ both passed through points $A$ and $B$. That would contradict the postulate, which promises only one such line.<br>" +
      "<b>Conclusion:</b> two distinct points determine one line, and only one — never two."],

    ["Example 6: A point off a line determines a plane",
      "Line $\\ell$ contains points $D$, $E$, $F$. Point $G$ is not on $\\ell$. How many planes contain both $\\ell$ and $G$? Justify your answer.",
      "Reduce to the three-point case: $G$ together with any two points of $\\ell$ (say $D$ and $E$) forms a noncollinear triple, since $G$ is not on $\\ell$.<br>" +
      "Apply the postulate: three noncollinear points determine exactly one plane, and that same plane contains all of $\\ell$ (since $D,E \\in \\ell$ forces the whole line in, by the Line-in-Plane Postulate).<br>" +
      "<b>Answer:</b> Exactly one plane contains both $\\ell$ and $G$."],

    ["Example 7: Two intersecting lines determine a plane",
      "Lines $j$ and $k$ intersect at point $P$. Explain why $j$ and $k$ must lie in a common plane, and how many such planes exist.",
      "Pick a second point on each line: $Q \\neq P$ on $j$, and $R \\neq P$ on $k$.<br>" +
      "$P$, $Q$, $R$ are noncollinear (since $Q$ lies only on $j$ and $R$ lies only on $k$, and $j\\neq k$), so they determine exactly one plane.<br>" +
      "That plane contains $P$ and $Q$, so by the Line-in-Plane Postulate it contains all of line $j$; it contains $P$ and $R$, so it contains all of line $k$.<br>" +
      "<b>Conclusion:</b> intersecting lines always lie in exactly one common plane."],

    ["Example 8: Counting planes from four points",
      "Four points $A$, $B$, $C$, $D$ are positioned so that no three are collinear, and the four points are not all coplanar. How many different planes are determined by choosing 3 of the 4 points at a time?",
      "Count the ways to choose 3 points from 4: $\\binom{4}{3} = 4$ triples — $ABC$, $ABD$, $ACD$, $BCD$.<br>" +
      "Since no three points are collinear, each triple is noncollinear and determines exactly one plane.<br>" +
      "Because the four points are not all coplanar, no single plane can contain more than 3 of them, so the four triples give four <i>different</i> planes — like the four triangular faces of a tetrahedron.<br>" +
      "<b>Answer:</b> $4$ planes."],

    ["Example 9: Real-world model — a room corner",
      "In a rectangular room, the floor and two adjacent walls meet at a corner. Model the corner, the wall-to-wall edge, and each flat surface using undefined terms, then describe (a) the intersection of the two walls and (b) the intersection of all three surfaces.",
      "Model: each flat surface (floor, each wall) is a <b>plane</b>; the edge where the two walls meet is a <b>line</b>; the corner where all three surfaces meet is a <b>point</b>.<br>" +
      "(a) Two planes (the two walls) intersect in a line — the vertical edge where the walls meet.<br>" +
      "(b) All three planes share only the single corner point, since the vertical wall edge touches the floor at just that one spot.<br>" +
      "<b>Takeaway:</b> two planes meet in a line, but three planes in general position meet in a single point."],

    ["Example 10: Line–plane intersection",
      "Line $t$ is not contained in plane $\\mathcal{P}$, but $t$ does cross through $\\mathcal{P}$. What is $t \\cap \\mathcal{P}$, and why can it not be more than that?",
      "Since $t$ is not contained in $\\mathcal{P}$, at least one point of $t$ lies off the plane. If $t$ shared two or more points with $\\mathcal{P}$, the Line-in-Plane Postulate would force <i>all</i> of $t$ into $\\mathcal{P}$ — a contradiction.<br>" +
      "So $t$ shares at most one point with $\\mathcal{P}$; since we are told it does cross the plane, it shares exactly one.<br>" +
      "<b>Answer:</b> $t \\cap \\mathcal{P}$ is a single point."],
  ],
  questions: [
    ["Problem 1: Name a line", "Name the line through $M$ and $N$.", "$\\overleftrightarrow{MN}$"],
    ["Problem 2: Name a ray", "Write the ray that starts at $A$ and goes through $B$.", "$\\overrightarrow{AB}$"],
    ["Problem 3: Name a segment", "Write the segment with endpoints $P$ and $Q$.", "$\\overline{PQ}$"],
    ["Problem 4: Collinear?", "Points $A$, $B$, $C$ do not lie on one line. Are they collinear?", "No"],
    ["Problem 5: Coplanar?", "Three noncollinear points $A$, $B$, $C$. Are they coplanar?", "Yes — any 3 points, collinear or not, lie in at least one common plane"],
    ["Problem 6: Opposite rays", "Points $R$, $S$, $T$ collinear with $S$ between $R$ and $T$. Name a pair of opposite rays.", "$\\overrightarrow{SR}$ and $\\overrightarrow{ST}$"],
    ["Problem 7: How many planes", "How many planes contain three given noncollinear points?", "Exactly one"],
    ["Problem 8: How many lines", "How many lines contain two given distinct points?", "Exactly one"],
    ["Problem 9: Plane intersection", "If planes $\\mathcal{P}$ and $\\mathcal{Q}$ intersect (and are not equal), what shape is $\\mathcal{P}\\cap\\mathcal{Q}$?", "A line"],
    ["Problem 10: Segment vs ray", "Does $\\overline{AB}$ have finite length?", "Yes"],
    ["Problem 11: Ray length", "Does $\\overrightarrow{AB}$ have finite length?", "No — it extends forever past $B$"],
    ["Problem 12: Point off a line", "Line $\\ell$ and point $G \\notin \\ell$ are given. How many planes contain both?", "Exactly one"],
    ["Problem 13: Intersecting lines", "Lines $j$ and $k$ intersect at $P$; $Q\\in j$ and $R\\in k$ with $Q,R\\neq P$. Name the plane containing $j$ and $k$.", "Plane $PQR$ (or $QPR$, etc.)"],
    ["Problem 14: Challenge — counting planes", "Five points are positioned so that no 3 are collinear and no 4 are coplanar. How many planes are determined by choosing 3 points at a time?", "$\\binom{5}{3}=10$ planes"],
    ["Problem 15: Challenge — tetrahedron", "A tetrahedron has 4 vertices, no 3 collinear and not all 4 coplanar. Using combinations, find the number of edges (lines) and the number of face planes, and explain the pattern.", "$\\binom{4}{2}=6$ edges; $\\binom{4}{3}=4$ face planes — edges come from pairs of vertices, faces from triples"],
  ],
};
