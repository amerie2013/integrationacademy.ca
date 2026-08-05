import { L, lessonHtml } from "./_helpers.mjs";
import {
  fig, translationFig, reflectionFig, rotationFig, compositionFig, symmetryFig,
  triangleTypes, isoscelesFig, sssMarks, sasMarks, asaMarks, hlFig, overlappingFig,
  dilationFig, similarTriangles, shadowMeasure, proportionalityFig,
  pythagoreanFig, special4545, special3060, sohcahtoa, elevationFig,
  polygonAngles, parallelogramFig, specialQuads, trapezoidFig, kiteFig,
  distanceMidpoint, weightedAvgFig, areaFig, dilationScale,
  centralAngleFig, inscribedAngleFig, tangentFig, sectorFig, cyclicQuad,
  prismNet, cylinderFig, crossSectionFig, solidRevolution, scale3d,
  copyAngleFig, bisectFig, incenterFig, circumcenterFig,
  sampleSpaceFig, treeDiagram, twoWayTable, permuteCombine,
} from "./figures2.mjs";

export const ch = {};

// ── 11.1 — Copying Segments and Angles ──
ch["11.1"] = L("11.1", "Copying Segments and Angles (MA.912.GR.5.1)", [
  lessonHtml({
    title: "Copying Segments and Angles",
    emoji: "✏️",
    overview: `A classical construction uses only two tools: an unmarked \\(\\textbf{straightedge}\\) (for drawing straight lines) and a \\(\\textbf{compass}\\) (for swinging arcs of a fixed radius). No ruler markings and no protractor degree readings are allowed — every construction has to work using only compass widths and intersections. Copying a segment or an angle means creating a brand-new one, somewhere else, that is exactly congruent to the original — without ever writing down a numerical length or angle measure.`,
    toolkit: [
      `To copy \\(\\overline{AB}\\): open the compass to width \\(AB\\), then swing that same width from a new starting point`,
      `To copy \\(\\angle ABC\\): use one arc centered at the vertex to mark two points on the angle's rays, then copy the distance between those two points to relocate the second ray`,
      `The compass width must stay exactly the same between drawing the original arc and copying it — that's what preserves the measurement`,
      `Copying an angle works no matter how large or small the angle is, because the method never depends on a protractor reading`,
      `The construction is justified by \\(SSS\\) congruence: the two triangles formed by the arcs have three pairs of equal side lengths`,
    ],
    figure: fig(copyAngleFig(), "Copy an angle by transferring an arc and matching chord."),
    examples: [
      {
        h: "Copying a segment",
        p: "Copy \\(\\overline{AB}\\) onto a new ray starting at point \\(A'\\).",
        steps: [
          `Draw a ray starting at \\(A'\\), extending in any direction.`,
          `Place the compass point on \\(A\\) and open it until the pencil tip reaches \\(B\\) — this fixes the compass width at exactly \\(AB\\).`,
          `Without changing the compass width, place the point on \\(A'\\) and swing an arc that crosses the new ray.`,
          `Label the intersection point \\(B'\\). Since the compass width never changed, \\(\\overline{A'B'} \\cong \\overline{AB}\\).`,
        ],
        check: `\\(\\overline{A'B'} \\cong \\overline{AB}\\) by construction.`,
      },
      {
        h: "Copying an angle",
        p: "Copy \\(\\angle ABC\\) so that its vertex is at a new point \\(B'\\).",
        fig: copyAngleFig(),
        steps: [
          `Draw a ray from \\(B'\\) — this will become one side of the new angle.`,
          `Center the compass at vertex \\(B\\) and draw an arc that crosses both rays of \\(\\angle ABC\\), at points \\(D\\) and \\(E\\).`,
          `Without changing the compass width, center it at \\(B'\\) and draw a similar arc crossing the new ray at a point \\(D'\\).`,
          `Reset the compass to the width \\(DE\\) (the distance between the two arc points on the original angle).`,
          `Center the compass at \\(D'\\) and mark a point \\(E'\\) on the new arc at that width. Draw ray \\(B'E'\\) — then \\(\\angle A'B'C' \\cong \\angle ABC\\).`,
        ],
        check: `\\(\\angle A'B'C' \\cong \\angle ABC\\) by \\(SSS\\) congruence of the arc triangles.`,
      },
      {
        h: "Copying a segment length within a diagram",
        p: "\\(\\overline{PQ}\\) is one side of a triangle. Copy its length onto ray \\(r\\) starting at point \\(R\\), so that \\(RQ' = PQ\\).",
        steps: [
          `Set the compass width to \\(PQ\\) by placing the point on \\(P\\) and the pencil on \\(Q\\).`,
          `Without changing the width, place the compass point on \\(R\\) and swing an arc crossing ray \\(r\\).`,
          `Label the crossing point \\(Q'\\); then \\(RQ' = PQ\\), regardless of the actual numerical length.`,
        ],
        check: `\\(RQ' = PQ\\) by construction, whatever the length happens to be.`,
      },
      {
        h: "Copying an obtuse angle",
        p: "Copy the obtuse angle \\(\\angle XYZ\\) using compass and straightedge, without ever measuring it in degrees.",
        steps: [
          `The method is identical no matter the angle's size — it never depends on knowing the angle's numerical measure.`,
          `Draw a new ray, center an arc at \\(Y\\) crossing both original rays, copy that arc at the new vertex, then copy the chord distance between the two arc points to fix the second ray's direction.`,
          `The new angle is congruent to \\(\\angle XYZ\\) purely from the matching arc radii and chord length — even though it's obtuse.`,
        ],
        check: "The copying steps work identically for acute, right, or obtuse angles.",
      },
      {
        h: "Building a congruent triangle by copying all three sides",
        p: "Given \\(\\triangle ABC\\), construct \\(\\triangle DEF \\cong \\triangle ABC\\) using only compass and straightedge (an \\(SSS\\) construction).",
        steps: [
          `Copy \\(\\overline{AB}\\) onto a new segment \\(\\overline{DE}\\), using the segment-copying method.`,
          `Set the compass to width \\(AC\\); center it at \\(D\\) and draw a wide arc where the third vertex must lie.`,
          `Set the compass to width \\(BC\\); center it at \\(E\\) and draw another arc.`,
          `Label the point where the two arcs intersect \\(F\\), and draw \\(\\overline{DF}\\) and \\(\\overline{EF}\\). Since all three side lengths match, \\(\\triangle DEF \\cong \\triangle ABC\\) by \\(SSS\\).`,
        ],
        check: `\\(\\triangle DEF \\cong \\triangle ABC\\) by \\(SSS\\).`,
      },
    ],
    practice: [
      { q: "Describe, in order, the steps to copy \\(\\overline{MN}\\) onto a ray starting at point \\(M'\\).", a: "Draw a ray from M′; set the compass width to MN by placing the point on M and pencil on N; without changing the width, swing an arc from M′ crossing the ray; label the intersection N′." },
      { q: "Why is it essential that the compass not be adjusted between marking the original width and swinging the copy?", a: "Any change to the compass width would change the length or angle being transferred, so the copy would no longer be congruent to the original." },
      { q: "Describe the steps to copy a right angle \\(\\angle PQR\\) to a new vertex \\(Q'\\), without measuring 90° on a protractor.", a: "Draw an arc from Q crossing both rays at two points, copy that same arc at Q′, measure the chord distance between the two original arc points, and transfer that distance to locate the second ray at Q′ — this works the same way regardless of the angle's actual measure." },
      { q: "In the SSS triangle-copying construction, why must you use the compass widths AC and BC specifically (not AB again)?", a: "Because AB was already copied as DE; the third vertex F must be exactly AC away from D and BC away from E to reproduce all three original side lengths." },
      { q: "What congruence postulate ultimately justifies why the copied angle equals the original angle?", a: "SSS congruence: the two small triangles formed by the vertex and the two arc-marked points have three pairs of congruent sides, so the angles between the corresponding sides must also be congruent." },
    ],
    qa: [
      { q: "Why is only an unmarked straightedge allowed, not a ruler with numbers on it?", a: "Classical constructions are meant to work using only lengths transferred by compass, to show that a shape can be reproduced exactly without ever reading off a numerical measurement." },
      { q: "How can copying an angle work without ever measuring degrees?", a: "The construction reproduces two triangles with identical side lengths (via matching compass widths), and SSS guarantees the angles inside those triangles are also identical." },
      { q: "What's the difference between copying and bisecting?", a: "Copying reproduces an existing segment or angle unchanged elsewhere; bisecting splits an existing segment or angle into two exactly equal halves (covered in the next lesson)." },
      { q: "Does it matter which direction the new ray points when copying an angle?", a: "No — the size of the copied angle only depends on the compass widths used, not on the direction the new ray happens to face." },
      { q: "Why do these constructions still matter today, when we have digital tools that measure exactly?", a: "They build a deep, hands-on understanding of congruence and why classic theorems like SSS are true, which is exactly the reasoning digital tools rely on behind the scenes." },
    ],
  }),
]);

// ── 11.2 — Bisecting Segments and Angles ──
ch["11.2"] = L("11.2", "Bisecting Segments and Angles (MA.912.GR.5.2)", [
  lessonHtml({
    title: "Bisecting Segments and Angles",
    emoji: "✂️",
    overview: `To bisect something means to divide it into two exactly equal parts. For a segment, that means finding its midpoint (and, along the way, the perpendicular bisector — the line through the midpoint that's perpendicular to the segment). For an angle, that means finding the ray that splits it into two congruent halves. Both constructions use the same core trick: draw two arcs of equal radius from two different centers, and their intersection point locates something perfectly centered between them.`,
    toolkit: [
      `Perpendicular bisector of \\(\\overline{AB}\\): draw equal-radius arcs from \\(A\\) and from \\(B\\) (radius more than half of \\(AB\\)) on both sides of the segment; the line through the two arc intersections is the perpendicular bisector`,
      `The perpendicular bisector crosses the original segment at its midpoint \\(M\\), so \\(AM = MB\\)`,
      `Angle bisector of \\(\\angle ABC\\): draw an arc from vertex \\(B\\) crossing both rays, then draw equal-radius arcs from those two crossing points; the ray from \\(B\\) through where those arcs meet is the bisector`,
      `Every point on a perpendicular bisector is equidistant from the segment's two endpoints (Perpendicular Bisector Theorem)`,
      `Every point on an angle bisector is equidistant from the angle's two sides (Angle Bisector Theorem)`,
    ],
    figure: fig(bisectFig(), "The perpendicular bisector of a segment."),
    examples: [
      {
        h: "Constructing a perpendicular bisector",
        p: "Construct the perpendicular bisector of \\(\\overline{AB}\\), where \\(AB = 12\\) cm.",
        fig: bisectFig(),
        steps: [
          `Open the compass to a width more than half of \\(AB\\) (so the arcs will actually cross).`,
          `Center the compass at \\(A\\) and draw arcs above and below the segment.`,
          `Without changing the width, center the compass at \\(B\\) and draw arcs above and below that cross the first set.`,
          `Draw a line through the two intersection points — this is the perpendicular bisector, crossing \\(\\overline{AB}\\) at its midpoint \\(M\\).`,
        ],
        check: `\\(AM = MB = 6\\) cm, and the bisecting line meets \\(\\overline{AB}\\) at a right angle.`,
      },
      {
        h: "Using the bisected lengths",
        p: "In the construction above, if \\(AB = 12\\) cm, find \\(AM\\) and \\(MB\\).",
        steps: [`Bisecting splits the segment into two exactly equal parts: \\(AM = MB = \\dfrac{AB}{2}\\)`, `\\(AM = MB = \\dfrac{12}{2} = 6\\)`],
        check: "AM = MB = 6 cm.",
      },
      {
        h: "Constructing an angle bisector",
        p: "Construct the bisector of \\(\\angle ABC\\).",
        steps: [
          `Center the compass at vertex \\(B\\) and draw an arc crossing both rays of the angle, at points \\(D\\) and \\(E\\).`,
          `Center the compass at \\(D\\) and draw an arc inside the angle; without changing the width, center it at \\(E\\) and draw another arc that crosses the first.`,
          `Label the intersection point \\(F\\) and draw ray \\(\\overrightarrow{BF}\\) — this is the angle bisector, and \\(\\angle ABF \\cong \\angle FBC\\).`,
        ],
        check: `\\(\\angle ABF \\cong \\angle FBC\\), each equal to half of \\(\\angle ABC\\).`,
      },
      {
        h: "Using the bisected angle measure",
        p: "If \\(\\angle ABC = 80^\\circ\\), find the measure of each half after bisecting.",
        steps: [`\\(\\angle ABF = \\angle FBC = \\dfrac{80^\\circ}{2}\\)`, `\\(\\angle ABF = \\angle FBC = 40^\\circ\\)`],
        check: "Each half measures 40°.",
      },
      {
        h: "Combining bisection with a perpendicular",
        p: "Bisect \\(\\overline{AB}\\) to find its midpoint \\(M\\), then use \\(M\\) to construct a segment perpendicular to \\(\\overline{AB}\\) at that point.",
        steps: [
          `Construct the perpendicular bisector of \\(\\overline{AB}\\) as before, locating midpoint \\(M\\) where the bisector crosses \\(\\overline{AB}\\).`,
          `The perpendicular bisector line itself already passes through \\(M\\) at a right angle to \\(\\overline{AB}\\) — no extra construction is needed.`,
          `Any segment drawn along that bisecting line, starting at \\(M\\), is automatically perpendicular to \\(\\overline{AB}\\).`,
        ],
        check: "The bisecting line through M is perpendicular to AB by construction.",
      },
    ],
    practice: [
      { q: "A segment \\(\\overline{CD}\\) is 14 cm long. After constructing its perpendicular bisector, find \\(CM\\) and \\(MD\\).", a: "CM = MD = 7 cm." },
      { q: "A segment \\(\\overline{EF}\\) is 20 cm long. Find the length of each half after bisecting.", a: "10 cm and 10 cm." },
      { q: "An angle measures \\(120^\\circ\\). Find the measure of each half after bisecting.", a: "60° and 60°." },
      { q: "A straight angle (\\(180^\\circ\\)) is bisected. What is the measure of each resulting angle, and what special name does each one get?", a: "Each is 90°, a right angle." },
      { q: "Describe why the perpendicular-bisector construction requires the compass width to be more than half of \\(AB\\).", a: "If the radius were half of AB or less, the arcs from A and B wouldn't reach far enough to cross each other on either side of the segment." },
    ],
    qa: [
      { q: "Why must the compass opening be more than half the segment's length for the perpendicular bisector construction?", a: "The arcs from each endpoint need to overlap on both sides of the segment; if the radius is too small, the arcs never meet." },
      { q: "What guarantees that points on a perpendicular bisector are equidistant from the segment's endpoints?", a: "The Perpendicular Bisector Theorem — it's a proven fact about any point on that special line." },
      { q: "What guarantees that points on an angle bisector are equidistant from the angle's two sides?", a: "The Angle Bisector Theorem." },
      { q: "How is bisecting different from just eyeballing the midpoint?", a: "Eyeballing gives an estimate that might be off; the compass-and-straightedge construction produces an exact midpoint or exact half-angle, provable with congruent triangles." },
      { q: "How many arcs are typically drawn to bisect an angle?", a: "Three: one arc from the vertex crossing both rays, then one equal-radius arc from each of those two crossing points, whose intersection locates the bisecting ray." },
    ],
  }),
]);

// ── 11.3 — Constructing Inscribed and Circumscribed Circles of a Triangle ──
ch["11.3"] = L("11.3", "Constructing Inscribed and Circumscribed Circles of a Triangle (MA.912.GR.5.3)", [
  lessonHtml({
    title: "Constructing Inscribed and Circumscribed Circles of a Triangle",
    emoji: "⭕",
    overview: `Every triangle has two special circles naturally associated with it. The \\(\\textbf{incircle}\\) fits snugly inside the triangle, touching all three sides — its center, the \\(\\textbf{incenter}\\), is found by bisecting the angles. The \\(\\textbf{circumcircle}\\) passes through all three vertices from the outside — its center, the \\(\\textbf{circumcenter}\\), is found by bisecting the sides perpendicularly. Both constructions reuse the exact tools from the last lesson, just applied to an entire triangle at once.`,
    toolkit: [
      `Incenter = intersection of the three angle bisectors; always located inside the triangle`,
      `Incircle: centered at the incenter, tangent to (just touching) all three sides; the inradius is the perpendicular distance from the incenter to any side`,
      `Circumcenter = intersection of the three perpendicular bisectors of the sides`,
      `Circumcircle: centered at the circumcenter, passing through all three vertices; the circumradius is the distance from the circumcenter to any vertex`,
      `Circumcenter location depends on triangle type: inside for acute, on the hypotenuse's midpoint for right, outside for obtuse`,
    ],
    figure: fig(incenterFig(), "The incenter is where the angle bisectors meet."),
    examples: [
      {
        h: "Constructing the incenter and incircle",
        p: "Construct the incircle of \\(\\triangle ABC\\).",
        fig: incenterFig(),
        steps: [
          `Construct the bisector of \\(\\angle A\\) and the bisector of \\(\\angle B\\) using the method from the previous lesson (a third bisector would meet at the same point, so only two are needed).`,
          `Label the point where the two bisectors intersect as the incenter \\(I\\).`,
          `Construct a perpendicular segment from \\(I\\) to any one side of the triangle — its length is the inradius \\(r\\).`,
          `Center the compass at \\(I\\) with radius \\(r\\) and draw the circle; it will touch all three sides exactly once.`,
        ],
        check: "The incircle is tangent to all three sides of the triangle.",
      },
      {
        h: "Using the incircle",
        p: "After constructing the incenter \\(I\\) of a triangle, the perpendicular distance from \\(I\\) to each side is found to be 4 cm. Describe the resulting incircle.",
        steps: [`Since the inradius is the same in every direction from the incenter, a single distance value describes the whole circle.`, `A circle of radius 4 cm, centered at \\(I\\), touches all three sides of the triangle exactly once.`],
        check: "The incircle has radius 4 cm and is tangent to every side.",
      },
      {
        h: "Constructing the circumcenter and circumcircle",
        p: "Construct the circumcircle of \\(\\triangle DEF\\).",
        fig: circumcenterFig(),
        steps: [
          `Construct the perpendicular bisector of \\(\\overline{DE}\\) and the perpendicular bisector of \\(\\overline{EF}\\) (a third would meet at the same point).`,
          `Label the intersection of the two perpendicular bisectors as the circumcenter \\(O\\).`,
          `Measure the distance from \\(O\\) to any one vertex — this is the circumradius \\(R\\).`,
          `Center the compass at \\(O\\) with radius \\(R\\) and draw the circle; it will pass through all three vertices.`,
        ],
        check: "The circumcircle passes through vertices D, E, and F.",
      },
      {
        h: "Circumcenter of a right triangle",
        p: "A right triangle has legs 6 and 8 and hypotenuse 10. Find the circumradius.",
        steps: [
          `For any right triangle, the circumcenter always lands exactly at the midpoint of the hypotenuse.`,
          `The circumradius is therefore half the hypotenuse: \\(R = \\dfrac{10}{2}\\)`,
          `\\(R = 5\\)`,
        ],
        check: "R = 5.",
      },
      {
        h: "Incenter and circumcenter of an equilateral triangle",
        p: "An equilateral triangle has side length 6. Find its circumradius and inradius.",
        steps: [
          `In an equilateral triangle, the incenter and circumcenter are the same point, and \\(R = 2r\\).`,
          `Circumradius: \\(R = \\dfrac{s}{\\sqrt{3}} = \\dfrac{6}{\\sqrt{3}} = 2\\sqrt{3}\\)`,
          `Inradius: \\(r = \\dfrac{R}{2} = \\sqrt{3}\\)`,
        ],
        check: `R = 2√3 ≈ 3.46; r = √3 ≈ 1.73.`,
      },
    ],
    practice: [
      { q: "Describe the two constructions needed to locate a triangle's incenter.", a: "Construct the bisectors of any two of the triangle's angles; where they intersect is the incenter." },
      { q: "Describe the two constructions needed to locate a triangle's circumcenter.", a: "Construct the perpendicular bisectors of any two of the triangle's sides; where they intersect is the circumcenter." },
      { q: "A right triangle has legs 9 and 12, and hypotenuse 15. Find its circumradius.", a: "R = 15 / 2 = 7.5." },
      { q: "An obtuse triangle is drawn. Will its circumcenter fall inside, on, or outside the triangle?", a: "Outside the triangle." },
      { q: "An equilateral triangle has side length 10. Find its circumradius and inradius.", a: `\\(R = \\dfrac{10}{\\sqrt{3}} = \\dfrac{10\\sqrt3}{3} \\approx 5.77\\); \\(r = \\dfrac{R}{2} \\approx 2.89\\)` },
    ],
    qa: [
      { q: "What's the key difference between the incenter and the circumcenter?", a: "The incenter comes from bisecting angles and is equidistant from the triangle's sides; the circumcenter comes from bisecting sides perpendicularly and is equidistant from the triangle's vertices." },
      { q: "Why can the circumcenter end up outside the triangle?", a: "For an obtuse triangle, the perpendicular bisectors of the sides meet at a point that falls outside the triangle's interior, since the triangle is \"stretched\" past a right angle." },
      { q: "Why is the circumcenter of a right triangle always the midpoint of the hypotenuse?", a: "The hypotenuse acts as a diameter of the circumcircle — any right angle inscribed in a circle intercepts a semicircle, which is a known theorem about angles inscribed in circles." },
      { q: "What does \"equidistant from the sides\" mean versus \"equidistant from the vertices\"?", a: "Equidistant from the sides means the same perpendicular distance to each of the three lines that form the triangle (true of the incenter); equidistant from the vertices means the same straight-line distance to each of the three corner points (true of the circumcenter)." },
      { q: "Where do these two circles show up in real life?", a: "The incircle gives the largest circle that fits inside a triangular plot of land or part; the circumcircle gives the smallest circle that can enclose three given points, such as three cell towers." },
    ],
  }),
]);
