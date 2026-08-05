import { L, lessonHtml } from "./_helpers.mjs";
import {
  fig, pointsLinesPlanes, oppositeRays, intersectingPlanes,
  segmentAddition, midpointFig, copySegment,
  angleMeasure, angleAddition, angleBisector,
  complementaryFig, supplementaryFig, verticalAngles, adjacentAngles,
  conditionalMap, twoColumnSample, flowchartProof,
} from "./figures.mjs";

export const ch = {};

ch["1.1"] = L("1.1", "Points, Lines, and Planes", [
  lessonHtml({
    title: "Points, Lines, and Planes",
    emoji: "📍",
    overview: `Geometry begins with three <strong>undefined terms</strong> — point, line, and plane. We don't define them formally; instead we describe them and build every other definition on top of them. A <strong>point</strong> \\(A\\) has no size, only a location. A <strong>line</strong> extends infinitely in two directions with no thickness, and a <strong>plane</strong> is a flat surface that extends infinitely in every direction within it. Everything else in this course — segments, rays, angles, polygons, solids — is built from these three ideas.`,
    toolkit: [
      `A <strong>point</strong> is named with a single capital letter, e.g. \\(A\\), and represented by a dot.`,
      `A <strong>line</strong> has infinite length and no width. Name it with two points and arrows, \\(\\overleftrightarrow{AB}\\), or with a single lowercase script letter such as \\(\\ell\\).`,
      `A <strong>plane</strong> is flat and two-dimensional. Name it with three noncollinear points, e.g. plane \\(ABC\\), or with a single capital script letter.`,
      `Points are <strong>collinear</strong> if they lie on the same line, and <strong>coplanar</strong> if they lie in the same plane.`,
      `A <strong>segment</strong> \\(\\overline{AB}\\) is the two endpoints plus every point between them. A <strong>ray</strong> \\(\\overrightarrow{AB}\\) starts at \\(A\\) and extends through \\(B\\) forever. Two rays with the same endpoint that point in exactly opposite directions along one line are <strong>opposite rays</strong>.`,
    ],
    figure: fig(pointsLinesPlanes(), "Points \(A\), \(B\) determine line \(\overleftrightarrow{AB}\) in plane \(\mathcal{P}\); \(C\) is coplanar but not on the line."),
    examples: [
      {
        h: "Naming lines and planes",
        p: "Points \\(A\\), \\(B\\), and \\(C\\) are noncollinear. Name the line through \\(A\\) and \\(B\\) in two ways, and name the plane containing all three points.",
        steps: [
          `<strong>Step 1 — Name the line:</strong> a line is named by any two of its points with a double arrow, or by a single lowercase letter if one is given. Here the line is \\(\\overleftrightarrow{AB}\\), which is the same line as \\(\\overleftrightarrow{BA}\\).`,
          `<strong>Step 2 — Name the plane:</strong> three noncollinear points determine exactly one plane, so this plane can be called plane \\(ABC\\) (any order of the three letters is acceptable).`,
        ],
        check: "A line needs only 2 points to name it; a plane needs 3 noncollinear points (or a single script letter if the diagram gives one).",
      },
      {
        h: "Collinear or coplanar?",
        p: "Points \\(D\\), \\(E\\), and \\(F\\) all lie on line \\(\\ell\\). Point \\(G\\) is in the same plane as \\(\\ell\\) but is not on \\(\\ell\\). Describe the relationships among \\(D\\), \\(E\\), \\(F\\), and \\(G\\).",
        steps: [
          `<strong>Step 1 — Check collinearity:</strong> \\(D\\), \\(E\\), \\(F\\) all lie on the same line \\(\\ell\\), so they are <strong>collinear</strong>. \\(G\\) is not on \\(\\ell\\), so \\(G\\) is not collinear with the other three.`,
          `<strong>Step 2 — Check coplanarity:</strong> a line and a point not on it always determine a plane, and \\(G\\) was said to lie in that same plane. So \\(D\\), \\(E\\), \\(F\\), and \\(G\\) are all <strong>coplanar</strong>, even though \\(G\\) is not collinear with the rest.`,
        ],
        check: "Collinear is a stronger condition than coplanar: collinear points are automatically coplanar, but coplanar points need not be collinear.",
      },
      {
        h: "Identifying opposite rays",
        p: "Points \\(X\\), \\(Y\\), \\(Z\\) are collinear in that order, with \\(Y\\) between \\(X\\) and \\(Z\\). Are \\(\\overrightarrow{YX}\\) and \\(\\overrightarrow{YZ}\\) opposite rays? What about \\(\\overrightarrow{XY}\\) and \\(\\overrightarrow{YZ}\\)?",
        fig: fig(oppositeRays(), "Opposite rays \(\overrightarrow{YX}\) and \(\overrightarrow{YZ}\) share endpoint \(Y\)."),
        steps: [
          `<strong>Step 1 — Check the shared endpoint:</strong> opposite rays must share the same endpoint. \\(\\overrightarrow{YX}\\) and \\(\\overrightarrow{YZ}\\) both start at \\(Y\\), so this pair qualifies. \\(\\overrightarrow{XY}\\) starts at \\(X\\), not \\(Y\\), so it can't form an opposite-ray pair with \\(\\overrightarrow{YZ}\\).`,
          `<strong>Step 2 — Check direction:</strong> since \\(Y\\) is between \\(X\\) and \\(Z\\), ray \\(\\overrightarrow{YX}\\) points one way along the line and \\(\\overrightarrow{YZ}\\) points the other way. They point in opposite directions from the same endpoint, so together they form the entire line \\(\\overleftrightarrow{XZ}\\).`,
          `<strong>Conclusion:</strong> \\(\\overrightarrow{YX}\\) and \\(\\overrightarrow{YZ}\\) are opposite rays; \\(\\overrightarrow{XY}\\) and \\(\\overrightarrow{YZ}\\) are not, because they don't share an endpoint.`,
        ],
      },
      {
        h: "Applying a point–line–plane postulate",
        p: "Line \\(\\overleftrightarrow{AB}\\) lies in plane \\(\\mathcal{P}\\), and point \\(C\\) also lies in plane \\(\\mathcal{P}\\) but is not on \\(\\overleftrightarrow{AB}\\). How many planes contain both \\(\\overleftrightarrow{AB}\\) and point \\(C\\)?",
        steps: [
          `<strong>Step 1 — Recall the postulate:</strong> through any three noncollinear points, there is exactly one plane. A line and a point not on that line give us three noncollinear points (any two points on the line, plus \\(C\\)).`,
          `<strong>Step 2 — Apply it:</strong> since \\(A\\), \\(B\\), and \\(C\\) are noncollinear, exactly one plane contains all three — and we're told that plane is \\(\\mathcal{P}\\).`,
          `<strong>Conclusion:</strong> there is exactly <strong>one</strong> plane containing both \\(\\overleftrightarrow{AB}\\) and \\(C\\): plane \\(\\mathcal{P}\\) itself.`,
        ],
      },
      {
        h: "The intersection of two planes",
        p: "Two distinct planes \\(\\mathcal{P}\\) and \\(\\mathcal{Q}\\) intersect. Describe what their intersection looks like, and give a real-world example.",
        fig: fig(intersectingPlanes(), "If distinct planes intersect, their intersection is a line."),
        steps: [
          `<strong>Step 1 — Recall the postulate:</strong> if two distinct planes intersect, their intersection is exactly one line (not a point, and not a region).`,
          `<strong>Step 2 — Real-world example:</strong> the floor of a room and one of its walls are both flat surfaces (planes). Where they meet is a straight line — the base of the wall.`,
          `<strong>Conclusion:</strong> \\(\\mathcal{P}\\cap\\mathcal{Q}\\) is a line, often labeled \\(\\ell\\), that lies in both planes.`,
        ],
      },
    ],
    practice: [
      { q: "Name the line through points \\(M\\) and \\(N\\) using proper notation.", a: "\\(\\overleftrightarrow{MN}\\) (or equivalently \\(\\overleftrightarrow{NM}\\) — a line's name doesn't depend on the order of the two points)." },
      { q: "Points \\(P\\), \\(Q\\), \\(R\\) do not lie on one line. Are they collinear? Are they coplanar?", a: "Not collinear, since they don't lie on one line. They are coplanar, because any three points (collinear or not) lie in at least one plane, and three noncollinear points determine exactly one plane." },
      { q: "\\(\\overrightarrow{AB}\\) and \\(\\overrightarrow{AC}\\) share endpoint \\(A\\), but \\(B\\), \\(A\\), \\(C\\) are not collinear. Are these opposite rays?", a: "No. Opposite rays must lie on the same line and point in exactly opposite directions. Since \\(B\\), \\(A\\), \\(C\\) aren't collinear, the two rays point in different directions and simply form an angle, not a straight line." },
      { q: "How many lines can be drawn through two distinct points \\(A\\) and \\(B\\)?", a: "Exactly one. This is the Line Postulate: through any two points there is exactly one line." },
      { q: "A line \\(\\ell\\) is not contained in plane \\(\\mathcal{P}\\), but they intersect. What can the intersection be?", a: "A single point. If a line is not in a plane, the postulate guarantees that if they intersect at all, they intersect in exactly one point." },
    ],
    qa: [
      { q: "What's the real difference between a line, a ray, and a segment?", a: "A line goes forever in both directions (infinite length, no endpoints). A ray goes forever in only one direction (one endpoint). A segment stops at both ends (two endpoints, finite length)." },
      { q: "Can two points ever be non-collinear?", a: "No — any two points always lie on some line, so two points are always collinear. You need at least three points before \"noncollinear\" becomes possible." },
      { q: "Is it true that any three points determine a plane?", a: "Any three points lie in at least one plane, but only three noncollinear points determine exactly one plane. Three collinear points lie in infinitely many planes, since you can \"tilt\" a plane around that line." },
      { q: "Why do we name a plane with a script letter sometimes instead of three points?", a: "It's just a shortcut when the diagram already labels the plane, similar to how we sometimes name a line \\(\\ell\\) instead of writing out two of its points." },
      { q: "Is \\(\\overrightarrow{AB}\\) the same ray as \\(\\overrightarrow{BA}\\)?", a: "No — order matters for rays. \\(\\overrightarrow{AB}\\) starts at \\(A\\); \\(\\overrightarrow{BA}\\) starts at \\(B\\). They point in opposite directions and only overlap on segment \\(\\overline{AB}\\)." },
    ],
  }),
]);

ch["1.2"] = L("1.2", "Measuring and Constructing Segments", [
  lessonHtml({
    title: "Measuring and Constructing Segments",
    emoji: "📏",
    overview: `The length of a segment is a number, found by taking the absolute difference of coordinates: if \\(A\\) and \\(B\\) sit at coordinates \\(x_1\\) and \\(x_2\\) on a number line, then \\(AB=|x_2-x_1|\\). Two segments with equal length are <strong>congruent</strong>, written \\(\\overline{AB}\\cong\\overline{CD}\\) — notice that congruence describes the segments themselves, while an equation like \\(AB=CD\\) compares their lengths. The <strong>Segment Addition Postulate</strong> lets us build longer segments from shorter pieces, and the <strong>midpoint</strong> splits a segment into two congruent halves.`,
    toolkit: [
      `<strong>Distance formula on a number line:</strong> \\(AB=|x_2-x_1|\\), where \\(x_1\\), \\(x_2\\) are the coordinates of \\(A\\) and \\(B\\).`,
      `<strong>Congruent segments</strong> have equal length: \\(\\overline{AB}\\cong\\overline{CD}\\) means \\(AB=CD\\). Congruence (\\(\\cong\\)) compares figures; equality (\\(=\\)) compares numbers.`,
      `<strong>Segment Addition Postulate:</strong> if \\(B\\) is between \\(A\\) and \\(C\\), then \\(AB+BC=AC\\).`,
      `The <strong>midpoint</strong> \\(M\\) of \\(\\overline{AB}\\) satisfies \\(AM=MB=\\dfrac{1}{2}AB\\); on a number line its coordinate is \\(\\dfrac{x_1+x_2}{2}\\).`,
      `To <strong>copy a segment</strong> with compass and straightedge: open the compass to the exact width of \\(\\overline{AB}\\), then swing an arc of that radius from a new starting point to mark the copy — the compass width never changes mid-construction.`,
    ],
    figure: fig(segmentAddition(), "If \(B\) is between \(A\) and \(C\), then \(AC=AB+BC\)."),
    examples: [
      {
        h: "Distance on a number line",
        p: "Points \\(A\\) and \\(B\\) lie on a number line at coordinates \\(-4\\) and \\(7\\). Find \\(AB\\).",
        steps: [
          `<strong>Step 1 — Apply the distance formula:</strong> \\(AB=|x_2-x_1|=|7-(-4)|\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(AB=|11|=11\\).`,
        ],
        check: "Distance is always nonnegative, which is exactly why the formula uses absolute value.",
      },
      {
        h: "Using the Segment Addition Postulate",
        p: "\\(B\\) is between \\(A\\) and \\(C\\). If \\(AB=3x-1\\), \\(BC=2x+4\\), and \\(AC=23\\), find \\(x\\) and the lengths \\(AB\\) and \\(BC\\).",
        steps: [
          `<strong>Step 1 — Write the postulate as an equation:</strong> \\(AB+BC=AC\\), so \\((3x-1)+(2x+4)=23\\).`,
          `<strong>Step 2 — Solve for \\(x\\):</strong> \\(5x+3=23\\), so \\(5x=20\\) and \\(x=4\\).`,
          `<strong>Step 3 — Back-substitute:</strong> \\(AB=3(4)-1=11\\) and \\(BC=2(4)+4=12\\).`,
        ],
        check: "Verify: \\(AB+BC=11+12=23=AC\\). ✓",
      },
      {
        h: "Finding a midpoint's coordinate",
        p: "\\(M\\) is the midpoint of \\(\\overline{PQ}\\), where \\(P\\) is at \\(-2\\) and \\(Q\\) is at \\(9\\) on a number line. Find the coordinate of \\(M\\).",
        fig: midpointFig(),
        steps: [
          `<strong>Step 1 — Use the midpoint coordinate formula:</strong> midpoint \\(=\\dfrac{x_1+x_2}{2}=\\dfrac{-2+9}{2}\\).`,
          `<strong>Step 2 — Simplify:</strong> \\(\\dfrac{7}{2}=3.5\\).`,
        ],
        check: "3.5 sits exactly halfway between −2 and 9 — check: distance from −2 to 3.5 is 5.5, and from 3.5 to 9 is also 5.5.",
      },
      {
        h: "Solving for x using a midpoint",
        p: "\\(M\\) is the midpoint of \\(\\overline{AB}\\). \\(AM=2x+1\\) and \\(MB=3x-4\\). Find \\(x\\) and \\(AB\\).",
        steps: [
          `<strong>Step 1 — Use the definition of midpoint:</strong> a midpoint creates two congruent segments, so \\(AM=MB\\): \\(2x+1=3x-4\\).`,
          `<strong>Step 2 — Solve for \\(x\\):</strong> \\(5=x\\), so \\(x=5\\).`,
          `<strong>Step 3 — Find the lengths:</strong> \\(AM=2(5)+1=11\\) and \\(MB=3(5)-4=11\\), so \\(AB=AM+MB=22\\).`,
        ],
        check: "AM = MB = 11 confirms M really is the midpoint.",
      },
      {
        h: "Copying a segment",
        p: "Describe the compass-and-straightedge steps to construct a segment \\(\\overline{CD}\\) congruent to a given segment \\(\\overline{AB}\\).",
        fig: fig(copySegment(), "Open the compass to length \(AB\) and mark \(B'\) on the ray."),
        steps: [
          `<strong>Step 1 — Draw a ray:</strong> use the straightedge to draw a ray with endpoint \\(C\\).`,
          `<strong>Step 2 — Set the compass width:</strong> place the compass point on \\(A\\) and open it until the pencil tip reaches \\(B\\). This locks in the exact length \\(AB\\).`,
          `<strong>Step 3 — Transfer the length:</strong> without changing the compass width, place the compass point on \\(C\\) and swing an arc that crosses the ray. Label the intersection \\(D\\).`,
          `<strong>Conclusion:</strong> \\(\\overline{CD}\\cong\\overline{AB}\\), since both segments were drawn with the same compass radius.`,
        ],
      },
    ],
    practice: [
      { q: "Points \\(C\\) and \\(D\\) lie on a number line at \\(5\\) and \\(-3\\). Find \\(CD\\).", a: "\\(CD=|5-(-3)|=|8|=8\\)." },
      { q: "\\(N\\) is between \\(M\\) and \\(P\\). \\(MN=9\\), \\(NP=14\\). Find \\(MP\\).", a: "By the Segment Addition Postulate, \\(MP=MN+NP=9+14=23\\)." },
      { q: "\\(B\\) is between \\(A\\) and \\(C\\), with \\(AC=40\\), \\(AB=2x+6\\), and \\(BC=3x-1\\). Find \\(x\\) and \\(AB\\).", a: "\\((2x+6)+(3x-1)=40 \\Rightarrow 5x+5=40 \\Rightarrow x=7\\). Then \\(AB=2(7)+6=20\\)." },
      { q: "\\(R\\) is the midpoint of \\(\\overline{ST}\\). \\(SR=4x-3\\) and \\(RT=x+9\\). Find \\(ST\\).", a: "Since \\(SR=RT\\): \\(4x-3=x+9 \\Rightarrow 3x=12 \\Rightarrow x=4\\). So \\(SR=4(4)-3=13\\), \\(RT=4+9=13\\), and \\(ST=13+13=26\\)." },
      { q: "Why must the compass width stay exactly the same between Step 2 and Step 3 when copying a segment?", a: "The compass width is the only thing carrying the length \\(AB\\) from the original segment onto the new ray. If it changes even slightly, the new segment \\(\\overline{CD}\\) will no longer be congruent to \\(\\overline{AB}\\)." },
    ],
    qa: [
      { q: "What's the difference between \\(AB\\) and \\(\\overline{AB}\\)?", a: "\\(\\overline{AB}\\) is the segment itself (a geometric object); \\(AB\\) (no bar) is a number — the length of that segment." },
      { q: "Can I use the Segment Addition Postulate if I don't know which point is between the other two?", a: "No — betweenness is required. You need to know (or be told, or see from a diagram) that one point lies between the other two before \\(AB+BC=AC\\) applies." },
      { q: "Does every segment have exactly one midpoint?", a: "Yes. The Midpoint Postulate guarantees every segment has exactly one midpoint, since it must sit at a single, specific coordinate — the average of the two endpoints." },
      { q: "Is \\(\\overline{AB}\\cong\\overline{CD}\\) the same statement as \\(AB=CD\\)?", a: "They carry the same information, but \\(\\cong\\) is used between geometric figures (segments, angles, triangles) while \\(=\\) is used between numbers (lengths, measures). It's good habit to keep the notation straight." },
    ],
  }),
]);

ch["1.3"] = L("1.3", "Measuring and Constructing Angles", [
  lessonHtml({
    title: "Measuring and Constructing Angles",
    emoji: "📐",
    overview: `An <strong>angle</strong> is formed by two rays that share an endpoint, called the <strong>vertex</strong>. We measure angles in degrees with a protractor and write the measure as \\(m\\angle ABC\\), where \\(B\\) is the vertex. Just as segments have the Segment Addition Postulate, angles have the <strong>Angle Addition Postulate</strong>, which lets us combine or split angle measures. Angles are classified by size, and an <strong>angle bisector</strong> splits one angle into two congruent angles.`,
    toolkit: [
      `Classify angles by measure: <strong>acute</strong> \\((0^\\circ<m\\angle A<90^\\circ)\\), <strong>right</strong> \\((m\\angle A=90^\\circ)\\), <strong>obtuse</strong> \\((90^\\circ<m\\angle A<180^\\circ)\\), <strong>straight</strong> \\((m\\angle A=180^\\circ)\\).`,
      `<strong>Angle Addition Postulate:</strong> if ray \\(\\overrightarrow{BD}\\) lies in the interior of \\(\\angle ABC\\), then \\(m\\angle ABD+m\\angle DBC=m\\angle ABC\\).`,
      `An <strong>angle bisector</strong> is a ray from the vertex that splits the angle into two congruent angles: if \\(\\overrightarrow{BD}\\) bisects \\(\\angle ABC\\), then \\(m\\angle ABD=m\\angle DBC=\\dfrac{1}{2}m\\angle ABC\\).`,
      `<strong>Congruent angles</strong> have equal measure: \\(\\angle A\\cong\\angle B\\) means \\(m\\angle A=m\\angle B\\).`,
      `To <strong>copy an angle</strong> with compass and straightedge, swing one arc across both rays of the original angle, transfer that arc to the new ray, then measure the gap between the two arc points and transfer that distance too.`,
    ],
    figure: fig(angleMeasure(), "An angle is formed by two rays with a common endpoint (the vertex)."),
    examples: [
      {
        h: "Classifying an angle",
        p: "Classify an angle with measure \\(m\\angle A=124^\\circ\\).",
        steps: [
          `<strong>Step 1 — Compare to the benchmarks:</strong> \\(90^\\circ<124^\\circ<180^\\circ\\).`,
          `<strong>Conclusion:</strong> \\(\\angle A\\) is <strong>obtuse</strong>.`,
        ],
      },
      {
        h: "Angle Addition Postulate",
        p: "Ray \\(\\overrightarrow{BD}\\) lies in the interior of \\(\\angle ABC\\). If \\(m\\angle ABD=38^\\circ\\) and \\(m\\angle DBC=52^\\circ\\), find \\(m\\angle ABC\\).",
        fig: angleAddition(),
        steps: [
          `<strong>Step 1 — Apply the postulate:</strong> \\(m\\angle ABC=m\\angle ABD+m\\angle DBC\\).`,
          `<strong>Step 2 — Add:</strong> \\(m\\angle ABC=38^\\circ+52^\\circ=90^\\circ\\).`,
        ],
        check: "A 90° result means ∠ABC is a right angle — a nice consistency check for the diagram.",
      },
      {
        h: "Solving for x with Angle Addition",
        p: "\\(\\overrightarrow{BD}\\) is in the interior of \\(\\angle ABC\\), with \\(m\\angle ABD=3x\\), \\(m\\angle DBC=2x+10\\), and \\(m\\angle ABC=90^\\circ\\). Find \\(x\\) and both smaller angle measures.",
        steps: [
          `<strong>Step 1 — Set up the equation:</strong> \\(3x+(2x+10)=90\\).`,
          `<strong>Step 2 — Solve:</strong> \\(5x+10=90 \\Rightarrow 5x=80 \\Rightarrow x=16\\).`,
          `<strong>Step 3 — Back-substitute:</strong> \\(m\\angle ABD=3(16)=48^\\circ\\) and \\(m\\angle DBC=2(16)+10=42^\\circ\\).`,
        ],
        check: "48° + 42° = 90°. ✓ Since the two pieces aren't equal, BD is not a bisector here.",
      },
      {
        h: "Using an angle bisector",
        p: "\\(\\overrightarrow{BD}\\) bisects \\(\\angle ABC\\). \\(m\\angle ABD=5x-2\\) and \\(m\\angle DBC=3x+8\\). Find \\(m\\angle ABC\\).",
        fig: angleBisector(),
        steps: [
          `<strong>Step 1 — Use the definition of bisector:</strong> the two halves are congruent, so \\(5x-2=3x+8\\).`,
          `<strong>Step 2 — Solve for \\(x\\):</strong> \\(2x=10 \\Rightarrow x=5\\).`,
          `<strong>Step 3 — Find one half, then double it:</strong> \\(m\\angle ABD=5(5)-2=23^\\circ\\), so \\(m\\angle ABC=2(23^\\circ)=46^\\circ\\).`,
        ],
        check: "Confirm the other half: m∠DBC = 3(5) + 8 = 23°, matching m∠ABD. ✓",
      },
      {
        h: "Copying an angle",
        p: "Describe the compass-and-straightedge steps to construct \\(\\angle DEF\\) congruent to a given \\(\\angle ABC\\).",
        steps: [
          `<strong>Step 1 — Draw a ray:</strong> draw ray \\(\\overrightarrow{EF}\\) to be one side of the new angle, with vertex \\(E\\).`,
          `<strong>Step 2 — Mark an arc on the original angle:</strong> with the compass point on \\(B\\), swing an arc that crosses both rays of \\(\\angle ABC\\); label the crossing points.`,
          `<strong>Step 3 — Copy that arc:</strong> without changing the compass width, place the point on \\(E\\) and swing a matching arc crossing ray \\(\\overrightarrow{EF}\\).`,
          `<strong>Step 4 — Transfer the gap:</strong> measure the distance between the two arc points on the original angle with the compass, then transfer that same width onto the new arc to locate point \\(D\\). Draw \\(\\overrightarrow{ED}\\).`,
          `<strong>Conclusion:</strong> \\(\\angle DEF\\cong\\angle ABC\\), since both triangles formed by the arcs are congruent by SSS.`,
        ],
      },
    ],
    practice: [
      { q: "Classify an angle with measure \\(90^\\circ\\).", a: "It is a right angle, by definition." },
      { q: "\\(\\overrightarrow{QS}\\) lies in the interior of \\(\\angle PQR\\), \\(m\\angle PQS=27^\\circ\\), and \\(m\\angle PQR=71^\\circ\\). Find \\(m\\angle SQR\\).", a: "\\(m\\angle PQS+m\\angle SQR=m\\angle PQR \\Rightarrow 27^\\circ+m\\angle SQR=71^\\circ \\Rightarrow m\\angle SQR=44^\\circ\\)." },
      { q: "\\(\\overrightarrow{BD}\\) is in the interior of \\(\\angle ABC\\). \\(m\\angle ABD=4x+5\\), \\(m\\angle DBC=6x-15\\), \\(m\\angle ABC=110^\\circ\\). Find \\(x\\).", a: "\\((4x+5)+(6x-15)=110 \\Rightarrow 10x-10=110 \\Rightarrow 10x=120 \\Rightarrow x=12\\)." },
      { q: "\\(\\overrightarrow{BD}\\) bisects \\(\\angle ABC\\), with \\(m\\angle ABD=7x\\) and \\(m\\angle DBC=4x+18\\). Find \\(m\\angle ABC\\).", a: "\\(7x=4x+18 \\Rightarrow 3x=18 \\Rightarrow x=6\\), so \\(m\\angle ABD=42^\\circ\\) and \\(m\\angle ABC=2(42^\\circ)=84^\\circ\\)." },
      { q: "Why does copying an angle work — that is, why must \\(\\angle DEF\\cong\\angle ABC\\) after the construction?", a: "The construction produces two triangles with three pairs of equal sides (matching compass radii), so they're congruent by SSS. Congruent triangles have congruent corresponding angles, and the angle at each vertex is one of those corresponding angles." },
    ],
    qa: [
      { q: "Is an angle's measure the same as the angle itself?", a: "No — same distinction as with segments. \\(\\angle A\\) is the figure (two rays and a vertex); \\(m\\angle A\\) is the number of degrees between them." },
      { q: "Can an angle measure be negative or greater than \\(360^\\circ\\)?", a: "In this course, no — angle measures are defined between \\(0^\\circ\\) and \\(180^\\circ\\) for basic angles formed by two rays. (Rotations, covered in Chapter 3, do use signed and larger angle measures.)" },
      { q: "What's the difference between an angle bisector and a midpoint?", a: "A midpoint splits a segment into two congruent segments; an angle bisector splits an angle into two congruent angles. Same idea, one dimension apart." },
      { q: "Does the Angle Addition Postulate need the middle ray to actually be inside the angle?", a: "Yes. Just like Segment Addition needs betweenness, Angle Addition needs the ray to lie in the interior of the angle — otherwise the two smaller angles wouldn't combine to make the larger one." },
      { q: "Do I need a protractor for the Angle Addition Postulate problems?", a: "Not for the algebra — if you're given expressions and told a ray is in the interior, you can solve purely algebraically. A protractor is only needed when you're physically measuring a drawn angle." },
    ],
  }),
]);

ch["1.4"] = L("1.4", "Pairs of Angles (Complementary, Supplementary, Vertical, Adjacent)", [
  lessonHtml({
    title: "Pairs of Angles",
    emoji: "🔀",
    overview: `Many geometry problems come down to recognizing a special relationship between two angles. <strong>Adjacent</strong> angles sit next to each other sharing a vertex and a side. <strong>Complementary</strong> angles add to \\(90^\\circ\\), and <strong>supplementary</strong> angles add to \\(180^\\circ\\) — these two pairs don't need to be adjacent, though they often are. <strong>Vertical angles</strong>, formed when two lines cross, are always congruent. Learning to spot these pairs turns a diagram into an equation.`,
    toolkit: [
      `<strong>Adjacent angles</strong> share a vertex and a side, but have no interior points in common.`,
      `<strong>Complementary angles:</strong> two angles whose measures add to \\(90^\\circ\\). Each is the <em>complement</em> of the other.`,
      `<strong>Supplementary angles:</strong> two angles whose measures add to \\(180^\\circ\\). Each is the <em>supplement</em> of the other. A <strong>linear pair</strong> is a special case: two adjacent angles that are supplementary because their non-shared sides form a straight line.`,
      `<strong>Vertical angles</strong> are the pair of "opposite" angles formed when two lines intersect. Vertical angles are always congruent.`,
      `These relationships translate directly into equations: complementary \\(\\Rightarrow m\\angle 1+m\\angle 2=90^\\circ\\); supplementary \\(\\Rightarrow m\\angle 1+m\\angle 2=180^\\circ\\); vertical \\(\\Rightarrow m\\angle 1=m\\angle 2\\).`,
    ],
    figure: fig(verticalAngles(), "Vertical angles are the opposite pairs when two lines intersect — they are congruent."),
    examples: [
      {
        h: "Identifying an angle pair",
        p: "Two lines intersect at point \\(O\\), forming \\(\\angle 1\\), \\(\\angle 2\\), \\(\\angle 3\\), \\(\\angle 4\\) in order around the point. Which angles are vertical to \\(\\angle 1\\), and which are adjacent to it?",
        fig: adjacentAngles(),
        steps: [
          `<strong>Step 1 — Find the vertical angle:</strong> vertical angles are the pair directly across the intersection from each other — that's \\(\\angle 1\\) and \\(\\angle 3\\).`,
          `<strong>Step 2 — Find adjacent angles:</strong> \\(\\angle 2\\) and \\(\\angle 4\\) each share a side and the vertex \\(O\\) with \\(\\angle 1\\), so both are adjacent to \\(\\angle 1\\) (and each forms a linear pair with it).`,
        ],
        check: "∠1 has exactly one vertical partner (∠3) and two adjacent neighbors (∠2 and ∠4) — that pattern always holds when two lines cross.",
      },
      {
        h: "Solving with complementary angles",
        p: "\\(\\angle A\\) and \\(\\angle B\\) are complementary. \\(m\\angle A=2x\\) and \\(m\\angle B=3x+10\\). Find both angle measures.",
        fig: complementaryFig(),
        steps: [
          `<strong>Step 1 — Write the equation:</strong> complementary means the measures sum to \\(90^\\circ\\): \\(2x+(3x+10)=90\\).`,
          `<strong>Step 2 — Solve:</strong> \\(5x+10=90 \\Rightarrow 5x=80 \\Rightarrow x=16\\).`,
          `<strong>Step 3 — Find the measures:</strong> \\(m\\angle A=2(16)=32^\\circ\\) and \\(m\\angle B=3(16)+10=58^\\circ\\).`,
        ],
        check: "32° + 58° = 90°. ✓",
      },
      {
        h: "Solving with a linear pair",
        p: "\\(\\angle 1\\) and \\(\\angle 2\\) form a linear pair. \\(m\\angle 1=4x-5\\) and \\(m\\angle 2=2x+29\\). Find both measures.",
        fig: supplementaryFig(),
        steps: [
          `<strong>Step 1 — Write the equation:</strong> a linear pair is supplementary, so the measures sum to \\(180^\\circ\\): \\((4x-5)+(2x+29)=180\\).`,
          `<strong>Step 2 — Solve:</strong> \\(6x+24=180 \\Rightarrow 6x=156 \\Rightarrow x=26\\).`,
          `<strong>Step 3 — Find the measures:</strong> \\(m\\angle 1=4(26)-5=99^\\circ\\) and \\(m\\angle 2=2(26)+29=81^\\circ\\).`,
        ],
        check: "99° + 81° = 180°. ✓",
      },
      {
        h: "Solving with vertical angles",
        p: "Two lines intersect. One pair of vertical angles measures \\(5x-12\\) and \\(3x+18\\). Find \\(x\\) and the measure of each angle in that pair.",
        fig: verticalAngles(),
        steps: [
          `<strong>Step 1 — Use the Vertical Angles relationship:</strong> vertical angles are congruent, so their measures are equal: \\(5x-12=3x+18\\).`,
          `<strong>Step 2 — Solve for \\(x\\):</strong> \\(2x=30 \\Rightarrow x=15\\).`,
          `<strong>Step 3 — Find the shared measure:</strong> \\(5(15)-12=63^\\circ\\) (check the other expression: \\(3(15)+18=63^\\circ\\)).`,
        ],
        check: "Both expressions give 63°, confirming the angles really are congruent.",
      },
      {
        h: "Combining relationships",
        p: "An angle measures four times its complement. Find the angle and its complement.",
        steps: [
          `<strong>Step 1 — Set up variables:</strong> let the complement be \\(x\\); then the angle itself is \\(4x\\).`,
          `<strong>Step 2 — Use the complementary relationship:</strong> the angle and its complement sum to \\(90^\\circ\\): \\(4x+x=90\\).`,
          `<strong>Step 3 — Solve:</strong> \\(5x=90 \\Rightarrow x=18\\), so the complement is \\(18^\\circ\\) and the angle is \\(4(18^\\circ)=72^\\circ\\).`,
        ],
        check: "18° + 72° = 90° ✓, and 72° really is 4 × 18°. ✓",
      },
    ],
    practice: [
      { q: "\\(\\angle 1\\) and \\(\\angle 2\\) are supplementary. \\(m\\angle 1=115^\\circ\\). Find \\(m\\angle 2\\).", a: "\\(m\\angle 2=180^\\circ-115^\\circ=65^\\circ\\)." },
      { q: "\\(\\angle A\\) and \\(\\angle B\\) are complementary, with \\(m\\angle A=3x+6\\) and \\(m\\angle B=x+4\\). Find \\(x\\) and \\(m\\angle A\\).", a: "\\((3x+6)+(x+4)=90 \\Rightarrow 4x+10=90 \\Rightarrow x=20\\). So \\(m\\angle A=3(20)+6=66^\\circ\\)." },
      { q: "Two vertical angles have measures \\(6x+4\\) and \\(8x-16\\). Find the measure of each angle.", a: "\\(6x+4=8x-16 \\Rightarrow 20=2x \\Rightarrow x=10\\). Each angle measures \\(6(10)+4=64^\\circ\\)." },
      { q: "\\(\\angle 1\\) and \\(\\angle 2\\) form a linear pair with \\(m\\angle 1=7x-9\\) and \\(m\\angle 2=3x+29\\). Find both measures.", a: "\\((7x-9)+(3x+29)=180 \\Rightarrow 10x+20=180 \\Rightarrow x=16\\). So \\(m\\angle 1=7(16)-9=103^\\circ\\) and \\(m\\angle 2=3(16)+29=77^\\circ\\)." },
      { q: "An angle is twice its supplement. Find both angle measures.", a: "Let the supplement be \\(x\\); the angle is \\(2x\\). Then \\(2x+x=180 \\Rightarrow x=60\\), so the supplement is \\(60^\\circ\\) and the angle is \\(120^\\circ\\)." },
    ],
    qa: [
      { q: "Is every linear pair supplementary, but not every supplementary pair a linear pair?", a: "Exactly. A linear pair is always supplementary because the two angles combine to form a straight angle (\\(180^\\circ\\)). But two supplementary angles don't have to be adjacent at all — they could be two completely separate angles on opposite sides of a diagram that just happen to add to \\(180^\\circ\\)." },
      { q: "Are vertical angles always adjacent?", a: "No — they're the opposite pair, so they're never adjacent. The two angles adjacent to a given angle are its linear-pair partners, while its vertical partner sits directly across the intersection." },
      { q: "Can two angles be both complementary and congruent?", a: "Yes, if each measures \\(45^\\circ\\): \\(45^\\circ+45^\\circ=90^\\circ\\), and they're equal to each other." },
      { q: "Do adjacent angles always add up to something specific, like 90° or 180°?", a: "No — \"adjacent\" only describes position (shared vertex and side, no overlapping interior). Adjacent angles could add to anything, unless you're also told they're complementary, supplementary, or form a linear pair." },
    ],
  }),
]);

ch["1.5"] = L("1.5", "Conditional Statements and Logical Reasoning (If-Then, Converse, Inverse, Contrapositive)", [
  lessonHtml({
    title: "Conditional Statements and Logical Reasoning",
    emoji: "🔎",
    overview: `Proofs are built from logical sentences, and the most important type is the <strong>conditional statement</strong>: "If \\(p\\), then \\(q\\)," symbolically \\(p\\rightarrow q\\). The part after "if" is the <strong>hypothesis</strong> \\(p\\); the part after "then" is the <strong>conclusion</strong> \\(q\\). From one conditional we can build three related statements — the converse, inverse, and contrapositive — and only one of them is guaranteed to share the original's truth value. Recognizing this distinction is essential before writing formal proofs in Lesson 1.6.`,
    toolkit: [
      `<strong>Conditional:</strong> \\(p\\rightarrow q\\), "If \\(p\\), then \\(q\\)." \\(p\\) is the hypothesis, \\(q\\) is the conclusion.`,
      `<strong>Converse:</strong> \\(q\\rightarrow p\\), swap hypothesis and conclusion: "If \\(q\\), then \\(p\\)."`,
      `<strong>Inverse:</strong> \\(\\sim p\\rightarrow \\sim q\\), negate both parts of the original: "If not \\(p\\), then not \\(q\\)."`,
      `<strong>Contrapositive:</strong> \\(\\sim q\\rightarrow \\sim p\\), negate and swap: "If not \\(q\\), then not \\(p\\)."`,
      `A conditional and its contrapositive are <strong>logically equivalent</strong> — always the same truth value. The converse and inverse are also logically equivalent to each other, but not necessarily to the original. A single <strong>counterexample</strong> is enough to prove a statement false.`,
    ],
    figure: fig(conditionalMap(), "A conditional is logically equivalent to its contrapositive; the converse is equivalent to the inverse."),
    examples: [
      {
        h: "Writing a statement in if-then form",
        p: "Rewrite \"Vertical angles are congruent\" as a conditional statement, and identify the hypothesis and conclusion.",
        steps: [
          `<strong>Step 1 — Find the underlying idea:</strong> the statement is really saying that being vertical angles guarantees congruence.`,
          `<strong>Step 2 — Write it as if-then:</strong> "If two angles are vertical angles, then they are congruent."`,
          `<strong>Conclusion:</strong> hypothesis \\(p\\): "two angles are vertical angles"; conclusion \\(q\\): "they are congruent."`,
        ],
      },
      {
        h: "Converse, inverse, contrapositive",
        p: "Given the conditional \"If a number is divisible by 4, then it is divisible by 2,\" write the converse, inverse, and contrapositive, and state whether each is true.",
        steps: [
          `<strong>Original</strong> (true): "If a number is divisible by 4, then it is divisible by 2." ✓ True — every multiple of 4 is also a multiple of 2.`,
          `<strong>Converse</strong> \\(q\\rightarrow p\\): "If a number is divisible by 2, then it is divisible by 4." False — counterexample: 6 is divisible by 2 but not by 4.`,
          `<strong>Inverse</strong> \\(\\sim p\\rightarrow \\sim q\\): "If a number is not divisible by 4, then it is not divisible by 2." False — same counterexample, 6, is not divisible by 4 but is divisible by 2.`,
          `<strong>Contrapositive</strong> \\(\\sim q\\rightarrow \\sim p\\): "If a number is not divisible by 2, then it is not divisible by 4." True — this must match the original's truth value.`,
        ],
        check: "Notice the converse and inverse are both false (as expected, since they're logically equivalent to each other), while the contrapositive is true, matching the original.",
      },
      {
        h: "A geometry example with a false converse",
        p: "Consider \"If a figure is a square, then it is a rectangle.\" Write the converse and determine whether it's true, giving a counterexample if not.",
        steps: [
          `<strong>Step 1 — Check the original:</strong> true — every square has four right angles, which is exactly the definition of a rectangle.`,
          `<strong>Step 2 — Write the converse:</strong> "If a figure is a rectangle, then it is a square."`,
          `<strong>Step 3 — Test the converse:</strong> a 3-by-5 rectangle is a rectangle but not a square (its sides aren't all congruent), so the converse is false.`,
        ],
        check: "A single counterexample (the 3-by-5 rectangle) is enough to disprove the converse — you never need to check every case to prove something false.",
      },
      {
        h: "When can you form a true biconditional?",
        p: "Can the statement \"A triangle is equilateral if and only if it is equiangular\" be justified as a valid biconditional?",
        steps: [
          `<strong>Step 1 — Recall the rule:</strong> a biconditional \\(p\\leftrightarrow q\\) is valid exactly when both \\(p\\rightarrow q\\) and its converse \\(q\\rightarrow p\\) are true.`,
          `<strong>Step 2 — Check the conditional:</strong> "If a triangle is equilateral, then it is equiangular" — true.`,
          `<strong>Step 3 — Check the converse:</strong> "If a triangle is equiangular, then it is equilateral" — also true.`,
          `<strong>Conclusion:</strong> since both directions hold, the biconditional is valid.`,
        ],
      },
      {
        h: "Using logical equivalence without rewriting",
        p: "You're told the contrapositive of a conditional is false. What, if anything, can you conclude about the original conditional — without writing it out?",
        steps: [
          `<strong>Step 1 — Recall the equivalence rule:</strong> a conditional and its contrapositive always share the same truth value.`,
          `<strong>Step 2 — Apply it directly:</strong> since the contrapositive is false, the original conditional must also be false.`,
          `<strong>Conclusion:</strong> the original conditional is false — no rewriting needed, just the equivalence relationship.`,
        ],
      },
    ],
    practice: [
      { q: "Rewrite \"Two points determine a line\" as an if-then statement.", a: "\"If two distinct points are given, then they determine exactly one line.\"" },
      { q: "Write the converse of \"If it is raining, then the ground is wet.\" Is the converse necessarily true?", a: "Converse: \"If the ground is wet, then it is raining.\" Not necessarily true — the ground could be wet from a sprinkler, a counterexample." },
      { q: "Write the inverse and contrapositive of \"If \\(m\\angle A=90^\\circ\\), then \\(\\angle A\\) is a right angle.\"", a: "Inverse: \"If \\(m\\angle A\\ne 90^\\circ\\), then \\(\\angle A\\) is not a right angle.\" Contrapositive: \"If \\(\\angle A\\) is not a right angle, then \\(m\\angle A\\ne 90^\\circ\\).\" Both are true here, since the original is a definition." },
      { q: "Which two of the four related statements (conditional, converse, inverse, contrapositive) are always logically equivalent to the conditional?", a: "The conditional itself and its contrapositive always share the same truth value. (The converse and inverse are equivalent to each other, but not automatically to the original conditional.)" },
      { q: "Is \"If a shape has four sides, then it is a square\" true or false? Justify with a counterexample if false.", a: "False. Counterexample: a rectangle that is not a square has four sides but is not a square." },
    ],
    qa: [
      { q: "Why is the contrapositive always logically equivalent to the original, but the converse isn't?", a: "Negating and swapping both parts preserves the underlying logical structure — think of it as viewing the same relationship from the opposite direction. Just swapping (the converse) changes what's being claimed entirely, which is why it needs its own separate justification." },
      { q: "Is \"only if\" the same as \"if\"?", a: "No. \"\\(p\\) only if \\(q\\)\" actually means \\(p\\rightarrow q\\), the same direction as a plain \"if \\(p\\), then \\(q\\).\" It's a common trap — read \"only if\" carefully rather than assuming it reverses the statement." },
      { q: "Do I need to prove a statement true for every possible case, or can one example be enough?", a: "One true example is never enough to prove a general statement — but one counterexample is always enough to disprove it. Proving something true in general requires a logical argument (a proof), which is exactly what Lesson 1.6 introduces." },
      { q: "If both a conditional and its converse are true, what do we call the combined statement?", a: "A biconditional, written \\(p\\leftrightarrow q\\) and read \"\\(p\\) if and only if \\(q\\).\" Good geometric definitions are usually biconditionals." },
      { q: "Can a conditional statement be true even if its hypothesis is never actually satisfied?", a: "Yes — this is a subtlety of formal logic. A conditional is only considered false when the hypothesis is true and the conclusion is false. If the hypothesis never happens, the conditional is vacuously true. In practice, geometry conditionals almost always have hypotheses that can occur, so this rarely comes up directly." },
    ],
  }),
]);

ch["1.6"] = L("1.6", "Introduction to Proofs (Paragraph, Flowchart, and Two-Column Proofs)", [
  lessonHtml({
    title: "Introduction to Proofs",
    emoji: "🧾",
    overview: `A <strong>proof</strong> is a logical argument that shows a statement must be true, built step by step from a <strong>Given</strong> and working toward a stated <strong>Prove</strong>. Every step needs a justification — a definition, a postulate, a previously proven theorem, or a property of equality. We'll use three formats for the same logic: the <strong>two-column proof</strong> (statements beside reasons), the <strong>paragraph proof</strong> (the same argument in sentences), and the <strong>flowchart proof</strong> (statements in boxes connected by arrows showing the logical flow).`,
    toolkit: [
      `Every proof starts from a <strong>Given</strong> statement and works toward a <strong>Prove</strong> statement — nothing may be assumed beyond the given information and known definitions, postulates, and theorems.`,
      `<strong>Two-column proof:</strong> numbered statements in the left column, matching justifications in the right column. Each statement must follow logically from something already established.`,
      `<strong>Paragraph proof:</strong> the identical logical chain, written as connected sentences instead of a table.`,
      `<strong>Flowchart proof:</strong> statements written in boxes, connected by arrows to show which statement justifies the next; useful when a step relies on two earlier facts at once.`,
      `Common justifications: Given; a definition (e.g., "Definition of midpoint"); a postulate (Segment/Angle Addition); Properties of Equality (Addition, Subtraction, Substitution, Reflexive, Symmetric, Transitive); a previously proven theorem.`,
    ],
    figure: fig(twoColumnSample(), "In a two-column proof, every statement has a matching reason."),
    examples: [
      {
        h: "Two-column proof from a definition",
        p: "<strong>Given:</strong> \\(M\\) is the midpoint of \\(\\overline{AB}\\). <strong>Prove:</strong> \\(AM=MB\\).",
        steps: [
          `<strong>Step 1 — Statement:</strong> \\(M\\) is the midpoint of \\(\\overline{AB}\\). <strong>Reason:</strong> Given.`,
          `<strong>Step 2 — Statement:</strong> \\(\\overline{AM}\\cong\\overline{MB}\\). <strong>Reason:</strong> Definition of midpoint.`,
          `<strong>Step 3 — Statement:</strong> \\(AM=MB\\). <strong>Reason:</strong> Definition of congruent segments (congruent segments have equal length).`,
        ],
        check: "Each line only uses what was given or already proved — nothing was assumed extra.",
      },
      {
        h: "A shared-segment proof",
        p: "\\(A\\), \\(B\\), \\(C\\), \\(D\\) are collinear in that order. <strong>Given:</strong> \\(AB=CD\\). <strong>Prove:</strong> \\(AC=BD\\).",
        steps: [
          `<strong>Step 1 — Statement:</strong> \\(AB=CD\\). <strong>Reason:</strong> Given.`,
          `<strong>Step 2 — Statement:</strong> \\(AB+BC=AC\\) and \\(BC+CD=BD\\). <strong>Reason:</strong> Segment Addition Postulate (applied twice, since \\(B\\) is between \\(A,C\\) and \\(C\\) is between \\(B,D\\)).`,
          `<strong>Step 3 — Statement:</strong> \\(AB+BC=BC+CD\\). <strong>Reason:</strong> Substitution (replace \\(CD\\) with \\(AB\\) from Step 1, or replace \\(AC\\) and \\(BD\\) using Step 2, then compare).`,
          `<strong>Step 4 — Statement:</strong> \\(AC=BD\\). <strong>Reason:</strong> Substitution (Step 2 into Step 3): both sides equal \\(AB+BC\\) and \\(BC+CD\\) respectively, which were shown equal, so the sums \\(AC\\) and \\(BD\\) are equal.`,
        ],
        check: "This is the classic \"shared segment\" trick — adding the same middle piece BC to both sides of a known equality.",
      },
      {
        h: "Proving vertical angles congruent",
        p: "Lines \\(\\overleftrightarrow{AC}\\) and \\(\\overleftrightarrow{BD}\\) intersect at point \\(E\\), forming \\(\\angle AEB\\) and \\(\\angle CED\\) as a vertical pair. <strong>Prove:</strong> \\(\\angle AEB\\cong\\angle CED\\).",
        steps: [
          `<strong>Step 1 — Statement:</strong> \\(\\angle AEB\\) and \\(\\angle BEC\\) form a linear pair; \\(\\angle BEC\\) and \\(\\angle CED\\) form a linear pair. <strong>Reason:</strong> Given (from the intersecting lines diagram).`,
          `<strong>Step 2 — Statement:</strong> \\(m\\angle AEB+m\\angle BEC=180^\\circ\\) and \\(m\\angle BEC+m\\angle CED=180^\\circ\\). <strong>Reason:</strong> Linear Pair \\(\\Rightarrow\\) supplementary.`,
          `<strong>Step 3 — Statement:</strong> \\(m\\angle AEB+m\\angle BEC=m\\angle BEC+m\\angle CED\\). <strong>Reason:</strong> Substitution (both equal \\(180^\\circ\\)).`,
          `<strong>Step 4 — Statement:</strong> \\(m\\angle AEB=m\\angle CED\\). <strong>Reason:</strong> Subtraction Property of Equality (subtract \\(m\\angle BEC\\) from both sides).`,
          `<strong>Step 5 — Statement:</strong> \\(\\angle AEB\\cong\\angle CED\\). <strong>Reason:</strong> Definition of congruent angles.`,
        ],
        check: "This argument is exactly the Vertical Angles Theorem, and it's worth remembering — it will get cited as a reason in many later proofs.",
      },
      {
        h: "A paragraph proof",
        p: "<strong>Given:</strong> \\(\\angle 1\\) and \\(\\angle 2\\) are both complementary to \\(\\angle 3\\). <strong>Prove:</strong> \\(\\angle 1\\cong\\angle 2\\). Write this as a paragraph proof.",
        steps: [
          `<strong>Paragraph proof:</strong> "Since \\(\\angle 1\\) is complementary to \\(\\angle 3\\), \\(m\\angle 1+m\\angle 3=90^\\circ\\) by the definition of complementary angles. Since \\(\\angle 2\\) is also complementary to \\(\\angle 3\\), \\(m\\angle 2+m\\angle 3=90^\\circ\\) as well. Because both sums equal \\(90^\\circ\\), \\(m\\angle 1+m\\angle 3=m\\angle 2+m\\angle 3\\) by substitution. Subtracting \\(m\\angle 3\\) from both sides gives \\(m\\angle 1=m\\angle 2\\) by the Subtraction Property of Equality. Therefore \\(\\angle 1\\cong\\angle 2\\) by the definition of congruent angles."`,
        ],
        check: "This is the Congruent Complements Theorem — same logical structure as the vertical-angles proof, just with complementary sums instead of linear-pair sums.",
      },
      {
        h: "A flowchart proof",
        p: "<strong>Given:</strong> \\(\\overrightarrow{BD}\\) bisects \\(\\angle ABC\\), and \\(m\\angle ABC=80^\\circ\\). <strong>Prove:</strong> \\(m\\angle ABD=40^\\circ\\). Present this as a flowchart proof.",
        fig: flowchartProof(),
        steps: [
          `<strong>Box 1:</strong> \\(\\overrightarrow{BD}\\) bisects \\(\\angle ABC\\) — <em>Given</em>.`,
          `<strong>Box 2</strong> (follows from Box 1, by an arrow): \\(m\\angle ABD=m\\angle DBC\\) — <em>Definition of angle bisector</em>.`,
          `<strong>Box 3</strong> (a separate given, feeding in alongside Box 2): \\(m\\angle ABD+m\\angle DBC=m\\angle ABC=80^\\circ\\) — <em>Angle Addition Postulate and Given</em>.`,
          `<strong>Box 4</strong> (follows from Boxes 2 and 3 together, two arrows merging into one box): \\(m\\angle ABD+m\\angle ABD=80^\\circ\\), so \\(2\\,m\\angle ABD=80^\\circ\\) — <em>Substitution</em>.`,
          `<strong>Box 5</strong> (follows from Box 4): \\(m\\angle ABD=40^\\circ\\) — <em>Division Property of Equality</em>.`,
        ],
        check: "Notice how Box 4 needed two separate arrows feeding into it (from Box 2 and Box 3) — this is exactly the situation where a flowchart's branching structure is clearer than a single straight column.",
      },
    ],
    practice: [
      { q: "Fill in the missing reason: <strong>Given</strong> \\(\\overrightarrow{BD}\\) bisects \\(\\angle ABC\\). <strong>Statement:</strong> \\(\\angle ABD\\cong\\angle DBC\\). <strong>Reason:</strong> ?", a: "Definition of angle bisector — an angle bisector creates two congruent angles by definition." },
      { q: "Given \\(x+7=15\\), what property of equality justifies the step \\(x=8\\)?", a: "Subtraction Property of Equality (subtract 7 from both sides)." },
      { q: "\\(A\\), \\(B\\), \\(C\\) are collinear with \\(B\\) between \\(A\\) and \\(C\\). Given \\(AB=BC\\), what can you conclude about \\(B\\), and by what reason?", a: "\\(B\\) is the midpoint of \\(\\overline{AC}\\), by the definition of midpoint (B is between A and C, and AB = BC)." },
      { q: "Describe, in words, how a flowchart proof differs in structure from a two-column proof, even though it can contain the same logical steps.", a: "A two-column proof lists statements and reasons in two straight columns, read top to bottom in order. A flowchart proof puts each statement in a box and uses arrows to connect it to the statement(s) that justify it, which makes it easier to show a step that depends on two separate earlier facts joining together." },
      { q: "<strong>Given:</strong> \\(m\\angle 1=m\\angle 2\\). <strong>Statement:</strong> \\(m\\angle 2=m\\angle 1\\). What reason justifies this statement?", a: "Symmetric Property of Equality (if a = b, then b = a)." },
    ],
    qa: [
      { q: "Why does every single line of a proof need a reason?", a: "A proof is only convincing if every step is justified by something already accepted as true — the given information, a definition, a postulate, or an already-proven theorem. Without a reason, a step is just an unsupported claim, not a proven fact." },
      { q: "Which proof format should I use — two-column, paragraph, or flowchart?", a: "They all prove the same thing and are equally valid. Two-column is the most common in this course because it makes each justification explicit and easy to check; paragraph proofs read more like an explanation; flowchart proofs are especially useful when a step depends on two separate facts merging together." },
      { q: "Can I use a diagram fact that \"looks true\" but isn't explicitly given?", a: "No — never assume something from how a diagram looks (e.g., that two segments appear equal, or an angle appears to be a right angle) unless it's marked, given, or already proven. Diagrams are not drawn to scale in proofs." },
      { q: "What's the difference between a postulate and a theorem?", a: "A postulate is accepted as true without proof (a basic building-block assumption, like the Segment Addition Postulate). A theorem is a statement that has been proven true using postulates, definitions, and logic — like the Vertical Angles Theorem you proved in this lesson." },
      { q: "Once I've proven a theorem, can I use it as a reason in a later proof?", a: "Yes — that's the whole point of building up a toolkit of theorems. Once the Vertical Angles Theorem is proven, you can cite \"Vertical Angles Theorem\" as a one-line reason in any future proof, instead of re-deriving it from scratch." },
    ],
  }),
]);
