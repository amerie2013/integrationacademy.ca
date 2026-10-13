import { fig, cylinderAxialSlice, coneApexSlice, sphereGreatCircleSlice, cone3d, box3d } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "10.4",
  title: "Cross-Sections",
  intro: "A <b>cross-section</b> is the 2D shape formed when a plane slices through a 3D solid. The shape you get depends entirely on the <i>orientation</i> of the cutting plane: parallel to a base, through an axis, through an apex, tilted, or through several faces at once. Beyond identifying the shape, this worksheet computes actual cross-section <i>dimensions and areas</i> — for a cone or pyramid cut parallel to the base, the cross-section is <b>similar</b> to the base, scaled by the ratio of distances from the apex (a direct application of similar triangles); for a sphere cut off-center, the Pythagorean Theorem relates the sphere's radius, the distance to the center, and the smaller circle's radius.",
  examples: [
    ["Example 1: Cylinder sliced parallel to its base",
      "A cylinder is sliced by a plane parallel to its circular bases. Describe and justify the cross-section.",
      "Every point on the cylinder's curved surface is the same distance $r$ from the central axis. A plane parallel to the bases intersects the curved surface in a set of points all still that same distance $r$ from the axis — that is a <b>circle</b> of radius $r$, congruent to the base.<br>" +
      "<b>Answer:</b> a circle congruent to the base."],

    ["Example 2: Cylinder sliced through its axis",
      "A cylinder has radius $4$ and height $9$. It is sliced by a plane through its central axis, perpendicular to the bases. Describe the cross-section and find its area.",
      fig(cylinderAxialSlice(), "The axial cross-section of a cylinder is a rectangle: width = diameter, height = cylinder's height.") +
      "The cut passes through the full width of the circle (a diameter, $2r$) and runs the full height $h$ — this is a <b>rectangle</b> with dimensions $2r\\times h$.<br>" +
      "$2r=2(4)=8$; height $=9$.<br>" +
      "Area $=8\\times9=72$.<br>" +
      "<b>Answer:</b> rectangle, $8\\times9$, area $72$ square units."],

    ["Example 3: Cone sliced parallel to its base — similar triangles",
      "A cone has base radius $8$ and height $12$. A plane parallel to the base cuts the cone at a point $9$ units from the apex (measured along the axis). Find the radius of the circular cross-section and its area.",
      fig(cone3d("8", "12"), "Slicing parallel to the base at distance $d$ from the apex gives a circle scaled by $\\dfrac{d}{H}$.") +
      "The smaller cone (apex to cut) is similar to the whole cone, scaled by $\\dfrac{d}{H}=\\dfrac{9}{12}=\\dfrac34$.<br>" +
      "Cross-section radius: $r'=R\\cdot\\dfrac{d}{H}=8\\left(\\dfrac34\\right)=6$.<br>" +
      "Area $=\\pi r'^{2}=\\pi(36)=36\\pi$.<br>" +
      "<b>Answer:</b> a circle of radius $6$; area $36\\pi$."],

    ["Example 4: The <i>same</i> cone sliced through the apex and axis",
      "Using the same cone (radius $8$, height $12$) from Example 3, now slice through the apex and the axis instead. Describe the cross-section and find its area.",
      fig(coneApexSlice(), "The axial cross-section of a cone is an isosceles triangle: base = diameter, height = the cone's height.") +
      "This cut produces an <b>isosceles triangle</b> with base $=2R=16$ and height $=H=12$ (the two equal sides run from the apex to each end of the base diameter).<br>" +
      "Area $=\\dfrac12(\\text{base})(\\text{height})=\\dfrac12(16)(12)=96$.<br>" +
      "<b>Answer:</b> isosceles triangle, base $16$, height $12$, area $96$ square units. <i>Compare to Example 3 — the same cone gives very different cross-sections depending on the cut.</i>"],

    ["Example 5: Sphere sliced through its center",
      "A sphere has radius $7$. It is sliced by a plane through its center. Describe the cross-section and find its area.",
      fig(sphereGreatCircleSlice(), "A slice through the center is the largest possible circular cross-section: a great circle.") +
      "A cut through the center produces the largest possible circle on the sphere, called a <b>great circle</b>, with the same radius as the sphere: $r=7$.<br>" +
      "Area $=\\pi r^{2}=49\\pi$.<br>" +
      "<b>Answer:</b> a great circle of radius $7$; area $49\\pi$."],

    ["Example 6: Sphere sliced off-center — Pythagorean Theorem",
      "A sphere has radius $17$. It is sliced by a plane $8$ units from the center (not through the center). Find the radius of the circular cross-section and its area.",
      "Let $r$ be the cross-section's radius. The sphere's radius $R$, the distance $d$ from center to plane, and $r$ form a right triangle (a radius to the circle's edge, the perpendicular from center to plane, and the segment on the plane):<br>" +
      "$R^{2}=d^{2}+r^{2} \\;\\Rightarrow\\; 17^{2}=8^{2}+r^{2} \\;\\Rightarrow\\; 289=64+r^{2} \\;\\Rightarrow\\; r^{2}=225 \\;\\Rightarrow\\; r=15$.<br>" +
      "(This is the $8$-$15$-$17$ Pythagorean triple.)<br>" +
      "Area $=\\pi(15)^{2}=225\\pi$.<br>" +
      "<b>Answer:</b> radius $15$; area $225\\pi$ — smaller than the great circle, as expected."],

    ["Example 7: Square pyramid sliced parallel to its base",
      "A square pyramid has base edge $8$ and height $12$. A plane parallel to the base cuts it $9$ units from the apex. Find the edge length of the cross-section and its area.",
      "Just like the cone, the smaller pyramid (apex to cut) is similar to the whole pyramid, scaled by $\\dfrac{9}{12}=\\dfrac34$.<br>" +
      "Cross-section edge: $s'=8\\left(\\dfrac34\\right)=6$.<br>" +
      "Area (a square) $=6^{2}=36$.<br>" +
      "<b>Answer:</b> a square of side $6$; area $36$ square units."],

    ["Example 8: Slicing off a cube's corner",
      "A cube has edge length $6$. A plane passes through the three vertices adjacent to one corner (cutting that corner off). Describe and compute the cross-section.",
      fig(box3d(), "Cutting through the three vertices nearest a corner always produces an equilateral triangle.") +
      "Each side of the cut triangle connects two vertices that are a face-diagonal apart (they share a face of the cube), so each side has length $6\\sqrt2$ — and all three sides are equal by the cube's symmetry, so the cross-section is <b>equilateral</b>.<br>" +
      "Area of an equilateral triangle with side $a$: $\\dfrac{\\sqrt3}{4}a^{2}$, with $a=6\\sqrt2$, so $a^{2}=72$.<br>" +
      "Area $=\\dfrac{\\sqrt3}{4}(72)=18\\sqrt3$.<br>" +
      "<b>Answer:</b> equilateral triangle, side $6\\sqrt2$, area $18\\sqrt3$ square units."],

    ["Example 9: Slicing a cube through four vertices",
      "A cube has edge length $5$. A plane passes through four vertices, cutting straight through the middle (not through any corner). Describe and compute the cross-section.",
      "This plane cuts through two opposite vertical edges' worth of faces, producing a <b>rectangle</b> whose sides are one edge of the cube ($5$) and one face diagonal ($5\\sqrt2$).<br>" +
      "Area $=5\\times5\\sqrt2=25\\sqrt2$.<br>" +
      "<b>Answer:</b> rectangle $5\\times5\\sqrt2$; area $25\\sqrt2$ square units."],

    ["Example 10: Cylinder sliced by a tilted plane",
      "A cylinder has radius $4$. A plane tilted $60^\\circ$ from the horizontal (i.e., $60^\\circ$ from a plane perpendicular to the axis) slices through it without hitting either base. Describe the cross-section and estimate its dimensions.",
      "A tilted cut (neither parallel nor perpendicular to the axis) produces an <b>ellipse</b>. One axis of the ellipse still equals the cylinder's diameter (the direction unaffected by the tilt) — the semi-minor axis is $r=4$. The semi-major axis stretches by the tilt: $a=\\dfrac{r}{\\cos\\theta}=\\dfrac{4}{\\cos60^\\circ}=\\dfrac{4}{0.5}=8$.<br>" +
      "<b>Answer:</b> an ellipse with semi-minor axis $4$ and semi-major axis $8$."],
  ],
  questions: [
    ["Problem 1: Cylinder parallel", "Cylinder cut parallel to its base. Name the cross-section.", "Circle (congruent to the base)"],
    ["Problem 2: Cylinder axial", "Cylinder radius $4$, height $9$, cut through its axis. Find the cross-section's dimensions and area.", "Rectangle $8\\times9$; area $72$"],
    ["Problem 3: Cone parallel", "Cone radius $9$, height $12$, cut parallel to the base at $8$ units from the apex. Find the cross-section's radius and area.", "$r=6$; area $36\\pi$"],
    ["Problem 4: Cone axial", "The same cone (radius $9$, height $12$) cut through the apex and axis. Find the cross-section's shape and area.", "Isosceles triangle, base $18$, height $12$; area $108$"],
    ["Problem 5: Sphere center", "Sphere radius $10$, cut through the center. Find the cross-section's area.", "$100\\pi$"],
    ["Problem 6: Sphere off-center", "Sphere radius $17$, cut $8$ units from the center. Find the cross-section's radius and area.", "$r=15$; area $225\\pi$"],
    ["Problem 7: Pyramid parallel", "Square pyramid, base edge $10$, height $15$, cut parallel to the base at $9$ units from the apex. Find the cross-section's edge and area.", "edge $6$; area $36$"],
    ["Problem 8: Cube corner", "Cube edge $8$, corner sliced off through the three adjacent vertices. Find the cross-section's side length and area.", "side $8\\sqrt2$; area $32\\sqrt3$"],
    ["Problem 9: Cube through four vertices", "Cube edge $7$, sliced through four vertices (not a corner). Find the cross-section's shape and area.", "Rectangle $7\\times7\\sqrt2$; area $49\\sqrt2$"],
    ["Problem 10: Cylinder tilt", "Cylinder radius $5$, sliced by a plane tilted $45^\\circ$ from horizontal. Find the ellipse's semi-minor and semi-major axes.", "semi-minor $5$; semi-major $5\\sqrt2$"],
    ["Problem 11: Prism parallel", "Triangular prism cut parallel to its triangular base. Name the cross-section.", "Triangle congruent to the base"],
    ["Problem 12: Vocabulary", "Define \"great circle.\"", "The circular cross-section of a sphere through its center (largest possible)"],
    ["Problem 13: Concept", "Under what condition does a cone's cross-section become an ellipse instead of a circle or triangle?", "When the cutting plane is tilted (not parallel to the base and not through the apex/axis)"],
    ["Problem 14: Word problem", "A cylindrical log of radius $6$ in is cut by a plane parallel to its ends. Name the cross-section and find its area.", "Circle; area $36\\pi$ in$^2$"],
    ["Problem 15: Challenge", "A cone has base radius $10$ and height $24$. A plane parallel to the base cuts the cone so the circular cross-section has area $25\\pi$. How far from the apex is the cutting plane?", "$12$ units from the apex"],
  ],
};
